import React from 'react';

interface MentionsLegalesProps {
  siteName: string;
  siteUrl: string;
}

export const MentionsLegales: React.FC<MentionsLegalesProps> = ({ siteName, siteUrl }) => {
  return (
    <article className="max-w-4xl mx-auto py-8 px-4 space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <header className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Mentions légales & Politique de confidentialité
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Informations réglementaires relatives à la plateforme éducative {siteName} ({siteUrl}).
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Éditeur du site</h2>
        <p className="text-sm">
          Le site <strong>{siteName}</strong> (accessible à l'adresse <strong>{siteUrl}</strong>) est une plateforme
          pédagogique indépendante à accès gratuit dédiée à la révision des programmes officiels scientifiques
          (cours, démonstrations, exercices corrigés et simulations interactives).
        </p>
        <p className="text-sm">
          Pour toute question relative aux contenus pédagogiques ou au fonctionnement du site, vous pouvez contacter
          l'équipe éditoriale via le formulaire ou l'adresse de contact indiquée sur la plateforme.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Hébergement</h2>
        <p className="text-sm">
          Le site est hébergé par la société <strong>Vercel Inc.</strong>, située au 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis (site web : https://vercel.com).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Propriété intellectuelle</h2>
        <p className="text-sm">
          L'ensemble des fiches de cours, rédactions d'exercices, simulations interactives et éléments graphiques
          présents sur {siteName} sont mis à disposition des élèves et enseignants pour un usage personnel et éducatif.
          Toute reproduction commerciale ou extraction automatisée massive sans autorisation préalable est interdite.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          4. Politique de confidentialité, Cookies et Publicité (RGPD)
        </h2>
        <p className="text-sm">
          Conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679),{' '}
          {siteName} veille à limiter au strict nécessaire la collecte de données techniques lors de votre navigation :
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Mesure d'audience (Google Analytics) :</strong> nous utilisons Google Analytics (GA4) afin de
            mesurer la fréquentation des chapitres et d'améliorer la qualité des ressources pédagogiques.
          </li>
          <li>
            <strong>Publicité (Google AdSense) :</strong> afin de financer l'hébergement et de maintenir l'accès
            100 % gratuit aux cours, ce site utilise Google AdSense. Des fournisseurs tiers, y compris Google,
            utilisent des cookies pour diffuser des annonces pertinentes ou non personnalisées selon vos préférences.
          </li>
          <li>
            <strong>Gestion de votre consentement :</strong> lors de votre première visite depuis l'Espace Économique
            Européen, une bannière de consentement vous permet d'accepter, de refuser ou de paramétrer l'utilisation
            des cookies. Vous pouvez également gérer vos préférences publicitaires à tout moment depuis les{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 underline"
            >
              Paramètres des annonces Google
            </a>
            .
          </li>
        </ul>
      </section>
    </article>
  );
};