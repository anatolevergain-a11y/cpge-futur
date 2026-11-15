import fs from 'node:fs';
import path from 'node:path';

function getAllDataFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllDataFiles(fullPath));
    } else if (entry.isFile() && /\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function extractBalancedObject(content, idIndex) {
  let depth = 0;
  let start = -1;
  for (let i = idIndex; i >= 0; i--) {
    if (content[i] === '}') depth++;
    else if (content[i] === '{') {
      depth--;
      if (depth === -1) {
        start = i;
        break;
      }
    }
  }
  if (start === -1) return '';

  depth = 0;
  let inString = null;
  for (let i = start; i < content.length; i++) {
    const ch = content[i];
    const prev = content[i - 1];
    if (inString) {
      if (ch === inString && prev !== '\\') inString = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') {
      inString = ch;
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return content.slice(start, i + 1);
    }
  }
  return '';
}

function buildChapterIndex(dataDir) {
  const files = getAllDataFiles(dataDir);
  const map = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const idRegex = /\bid\s*:\s*['"]([^'"]+)['"]/g;
    let match;

    while ((match = idRegex.exec(content)) !== null) {
      const id = match[1];
      if (map.has(id)) continue;

      const block = extractBalancedObject(content, match.index);
      if (!block || block.length < 80) continue;

      const titleMatch = block.match(/(?:title|titre|nom)\s*:\s*(['"`])((?:\\.|(?!\1)[^\\])*)\1/);
      const title = titleMatch ? titleMatch[2].replace(/\\(['"`\\])/g, '$1') : id;

      const strRegex = /(['"`])((?:\\.|(?!\1)[^\\])*)\1/g;
      const paragraphs = [];
      const seen = new Set([title]);
      let sMatch;

      while ((sMatch = strRegex.exec(block)) !== null) {
        const raw = sMatch[2]
          .replace(/\\n/g, ' ')
          .replace(/\\(['"`\\])/g, '$1')
          .replace(/\s+/g, ' ')
          .trim();

        if (
          raw.length >= 30 &&
          !seen.has(raw) &&
          !/^(text-|bg-|from-|to-|border-|http|\/)/i.test(raw) &&
          !/^[a-z0-9_-]+$/i.test(raw)
        ) {
          seen.add(raw);
          paragraphs.push(raw);
        }
      }

      if (paragraphs.length > 0) {
        map.set(id, { id, title, paragraphs: paragraphs.slice(0, 35) });
      }
    }
  }

  return map;
}

function injectPageHtml(template, { title, description, canonicalUrl, bodyHtml }) {
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  if (/<meta\s+name="description"/i.test(html)) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(description)}" />`
    );
  }

  if (/<meta\s+property="og:title"/i.test(html)) {
    html = html.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(title)}" />`
    );
  }

  if (/<meta\s+property="og:description"/i.test(html)) {
    html = html.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(description)}" />`
    );
  }

  const canonicalTag = `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`;
  if (/<link\s+rel="canonical"/i.test(html)) {
    html = html.replace(/<link\s+rel="canonical"[^>]*>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n  </head>`);
  }

  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  return html;
}

function prerender() {
  const distDir = path.resolve('dist');
  const templatePath = path.join(distDir, 'index.html');
  const sitemapPath = path.resolve('public', 'sitemap.xml');

  if (!fs.existsSync(templatePath) || !fs.existsSync(sitemapPath)) {
    console.warn('⚠️ dist/index.html ou public/sitemap.xml introuvable, pré-rendu ignoré.');
    return;
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
  const locMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

  const firstUrl = new URL(locMatches[0] || 'https://lyceefutur.com/');
  const siteOrigin = firstUrl.origin;
  const isCpge = siteOrigin.includes('cpge');
  const siteName = isCpge ? 'CPGE Futur' : 'Lycée Futur';

  const chapterIndex = buildChapterIndex(path.resolve('src', 'data'));
  const chapterLinksHtml = Array.from(chapterIndex.values())
    .map((c) => `<li><a href="/chapitre/${encodeURIComponent(c.id)}">${escapeHtml(c.title)}</a></li>`)
    .join('\n');

  const commonFooter = `
    <footer>
      <nav aria-label="Navigation principale">
        <a href="/">Accueil</a> |
        <a href="/mentions-legales">Mentions légales &amp; Politique de confidentialité</a>
      </nav>
    </footer>`;

  const routesToRender = new Set(
    locMatches.map((u) => new URL(u).pathname.replace(/\/+$/, '') || '/')
  );
  routesToRender.add('/mentions-legales');

  let renderedCount = 0;

  for (const routePath of routesToRender) {
    let title = `${siteName} — Cours, démonstrations et exercices corrigés`;
    let description = `Plateforme académique gratuite ${siteName} : fiches de cours complètes, démonstrations et exercices corrigés.`;
    let bodyHtml = '';

    if (routePath.startsWith('/chapitre/')) {
      const id = decodeURIComponent(routePath.slice('/chapitre/'.length));
      const chap = chapterIndex.get(id);
      const chapTitle = chap ? chap.title : id;
      const paragraphs = chap
        ? chap.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')
        : `<p>Fiche de cours complète sur ${escapeHtml(chapTitle)}.</p>`;

      title = `${chapTitle} — Cours & Exercices | ${siteName}`;
      description = chap?.paragraphs[0]?.slice(0, 155) || description;
      bodyHtml = `
        <main>
          <article>
            <h1>${escapeHtml(chapTitle)}</h1>
            ${paragraphs}
          </article>
          ${commonFooter}
        </main>`;
    } else if (routePath === '/mentions-legales') {
      title = `Mentions légales & Politique de confidentialité | ${siteName}`;
      description = `Mentions légales, hébergement Vercel, politique de confidentialité RGPD, Google Analytics et Google AdSense sur ${siteName}.`;
      bodyHtml = `
        <main>
          <article>
            <h1>Mentions légales &amp; Politique de confidentialité</h1>
            <p>${siteName} (${siteOrigin}) est une plateforme éducative gratuite dédiée aux révisions scientifiques.</p>
            <h2>Hébergement</h2>
            <p>Hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
            <h2>Confidentialité, Cookies et RGPD</h2>
            <p>Ce site utilise Google Analytics pour la mesure d'audience et Google AdSense pour le financement gratuit de la plateforme, dans le respect du RGPD.</p>
          </article>
          ${commonFooter}
        </main>`;
    } else {
      bodyHtml = `
        <main>
          <section>
            <h1>${siteName} — Cours officiels, démonstrations et exercices corrigés</h1>
            <p>Accédez gratuitement à l'ensemble des fiches de cours, théorèmes, méthodes et exercices corrigés pas à pas.</p>
            <h2>Sommaire des chapitres</h2>
            <ul>${chapterLinksHtml}</ul>
          </section>
          ${commonFooter}
        </main>`;
    }

    const finalHtml = injectPageHtml(template, {
      title,
      description,
      canonicalUrl: `${siteOrigin}${routePath}`,
      bodyHtml,
    });

    const targetFile =
      routePath === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, routePath.slice(1), 'index.html');

    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    fs.writeFileSync(targetFile, finalHtml, 'utf-8');
    renderedCount++;
  }

  console.log(`✅ Pré-rendu HTML statique généré pour ${renderedCount} pages.`);
}

prerender();