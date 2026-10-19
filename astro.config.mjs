// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	// URL officielle de votre site (indispensable pour la génération du sitemap)
	site: 'https://cpge-futur.com/',

	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[
				rehypeKatex,
				{
					// Désactive les avertissements stricts dans le terminal pour éviter les blocages de build
					strict: false,
				},
			],
		],
	},
	integrations: [
		starlight({
			title: 'CPGE Futur',
			description: 'Plateforme d\'excellence pour les classes préparatoires scientifiques (CPGE).',
			head: [
				// Chargement impératif de la feuille de style CSS de KaTeX pour éviter les doublons d'affichage MathML/HTML
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
					},
				},
			// Intégration de Google AdSense pour la monétisation du site
			{
					tag: 'script',
					attrs: {
						async: true,
						src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9036203782966082',
						crossorigin: 'anonymous',
					},
				},
		],
			customCss: [
				// Fichier CSS personnalisé pour masquer MathML et ajuster la mise en page
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: '📚 Première Année (Sup)',
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'premiere-annee', collapsed: true } }
					],
				},
				{
					label: '🎓 Deuxième Année (Spé)',
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'deuxieme-annee', collapsed: true } }
					],
				},
			],
		}),
		sitemap(),
	],
});