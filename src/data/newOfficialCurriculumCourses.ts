import type { CourseChapter } from './cpgeData';

export const NEW_OFFICIAL_CURRICULUM_COURSES: CourseChapter[] = [
  // ==========================================
  // MATHEMATIQUES - PROGRAMME OFFICIEL CPGE
  // ==========================================
  {
    id: 'maths-series-fourier-espaces-prehilbertiens',
    slug: 'series-de-fourier-theoreme-dirichlet-parseval',
    title: 'Séries de Fourier, Théorème de Dirichlet & Formule de Parseval',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Coefficients de Fourier réels et exponentiels, convergence quadratique dans $L^2$, théorème de Dirichlet pour les fonctions $\\mathcal{C}^1$ par morceaux, égalité de Parseval et dérivation/intégration terme à terme.',
    readTime: '28 min',
    prerequis: ['Espaces préhilbertiens', 'Intégration sur un segment', 'Séries numériques'],
    keyTheorems: [
      {
        name: 'Théorème de Dirichlet (Convergence Ponctuelle)',
        statement: 'Soit $f : \\mathbb{R} \\to \\mathbb{C}$ une fonction $T$-périodique et continue par morceaux sur $\\mathbb{R}$. Si $f$ est de classe $\\mathcal{C}^1$ par morceaux sur un segment de longueur $T$, alors en tout point $x \\in \\mathbb{R}$ :\n$$\\lim_{N \\to +\\infty} S_N(f)(x) = \\frac{f(x^+) + f(x^-)}{2}$$\nEn particulier, si $f$ est continue en $x$, la série de Fourier converge vers $f(x)$ : $S_N(f)(x) \\xrightarrow[N\\to\\infty]{} f(x)$.',
        demonstration: 'On exprime la somme partielle $S_N(f)(x)$ sous forme d\'une intégrale de convolution avec le noyau de Dirichlet $D_N(t) = \\frac{1}{2} + \\sum_{n=1}^N \\cos(n t) = \\frac{\\sin((N + 1/2)t)}{2 \\sin(t/2)}$. On décompose $S_N(f)(x) - \\frac{f(x^+) + f(x^-)}{2} = \\frac{1}{\\pi} \\int_0^\\pi \\frac{f(x+t) - f(x^+)}{2\\sin(t/2)} \\sin((N + 1/2)t)\\,\\mathrm{d}t + \\dots$ Par hypothèse $\\mathcal{C}^1$ par morceaux, la fonction sous l\'intégrale est continue par morceaux sur $[0, \\pi]$. Le lemme de Riemann-Lebesgue s\'applique et assure que l\'intégrale tend vers 0 lorsque $N \\to +\\infty$.',
        astuceConcours: 'Pour calculer des sommes célèbres de la forme $\\sum_{n=1}^\\infty \\frac{1}{n^2}$ ou $\\sum_{n=1}^\\infty \\frac{1}{n^4}$, toujours choisir une fonction simple (ex: $f(x) = x$ ou $f(x) = x^2$ sur $[-\\pi, \\pi]$) et appliquer soit Dirichlet au point de continuité $x=0$, soit la formule de Parseval.'
      },
      {
        name: 'Égalité de Parseval (Convergence en Moyenne Quadratique)',
        statement: 'Pour toute fonction $f : \\mathbb{R} \\to \\mathbb{C}$, $T$-périodique et continue par morceaux sur $\\mathbb{R}$ :\n$$\\frac{1}{T} \\int_0^T |f(t)|^2 \\,\\mathrm{d}t = |c_0(f)|^2 + \\sum_{n=1}^\\infty \\left( |c_n(f)|^2 + |c_{-n}(f)|^2 \\right) = a_0(f)^2 + \\frac{1}{2} \\sum_{n=1}^\\infty (a_n(f)^2 + b_n(f)^2)$$',
        astuceConcours: 'Parseval exprime la conservation de la puissance en physique (théorème de Plancherel-Parseval) : l\'énergie totale est la somme des énergies de chaque harmonique !'
      }
    ],
    sections: [
      {
        title: '1. Coefficients de Fourier réels et complexes',
        content: 'Pour une fonction $2\\pi$-périodique :\n- Coefficients exponentiels : $c_n(f) = \\frac{1}{2\\pi} \\int_{-\\pi}^\\pi f(t) e^{-i n t} \\,\\mathrm{d}t$.\n- Coefficients trigonométriques : $a_0(f) = \\frac{1}{2\\pi} \\int_{-\\pi}^\\pi f(t)\\,\\mathrm{d}t$, $a_n(f) = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(t)\\cos(nt)\\,\\mathrm{d}t$, $b_n(f) = \\frac{1}{\\pi} \\int_{-\\pi}^\\pi f(t)\\sin(nt)\\,\\mathrm{d}t$.\nSi $f$ est paire, tous les $b_n(f) = 0$. Si $f$ est impaire, tous les $a_n(f) = 0$.',
        methodKicker: 'Réflexe : Toujours exploiter les parités et symétries de glissement $f(t + \\pi) = -f(t)$ pour diviser par deux le nombre d\'harmoniques non nulles !'
      },
      {
        title: '2. Régularité & Décroissance des coefficients de Fourier',
        content: 'Par intégrations par parties successives :\n- Si $f$ est continue par morceaux, $c_n(f) = o(1)$ (Riemann-Lebesgue).\n- Si $f$ est de classe $\\mathcal{C}^k$ et $f^{(k)}$ est $\\mathcal{C}^1$ par morceaux, $c_n(f) = \\mathcal{O}\\left(\\frac{1}{n^{k+1}}\\right)$.\nPlus la fonction est régulière (lisse), plus ses coefficients de Fourier décroissent rapidement vers 0 !'
      }
    ],
    piegesClassiques: [
      'Oublier le facteur $1/2$ devant $a_0(f)^2$ ou confondre avec la définition anglo-saxonne de $a_0$.',
      'Appliquer le théorème de Dirichlet en un point de discontinuité de première espèce sans prendre la demi-somme des limites à gauche et à droite !'
    ]
  },
  {
    id: 'maths-formes-bilineaires-quadratiques-euclidien',
    slug: 'formes-bilineaires-formes-quadratiques-sylvester',
    title: 'Formes Bilinéaires, Formes Quadratiques & Réduction de Gauss',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Formes bilinéaires symétriques, formes quadratiques, orthogonalité, décomposition en carrés de Gauss, signature, théorème d\'inertie de Sylvester et positivité.',
    readTime: '26 min',
    prerequis: ['Algèbre linéaire', 'Polynômes et matrices symétriques'],
    keyTheorems: [
      {
        name: 'Théorème d\'Inertie de Sylvester',
        statement: 'Soit $E$ un $\\mathbb{R}$-espace vectoriel de dimension finie $n$ et $q$ une forme quadratique sur $E$. Le couple $(s, t)$ d\'entiers tel que toute décomposition de $q$ en combinaison linéaire de $r = s + t$ carrés de formes linéaires indépendantes s\'écrit :\n$$q(x) = \\sum_{i=1}^s \\ell_i(x)^2 - \\sum_{j=1}^t \\ell\'_j(x)^2$$\nest un **invariant intrinsèque** de $q$, appelé la **signature** de $q$, notée $\\mathrm{sign}(q) = (s, t)$. De plus, $\\mathrm{rg}(q) = s + t$.',
        demonstration: 'Si $q$ s\'écrivait sous deux signatures distinctes $(s, t)$ et $(s\', t\')$ avec par exemple $s > s\'$, on considérerait les sous-espaces vectoriels $F = \\bigcap_{j=1}^{t\'} \\ker(\\ell\'_j)$ et $G = \\bigcap_{i=1}^s \\ker(\\ell_i)$. Par la formule de Grassmann, la dimension de leur intersection serait strictement positive, ce qui fournirait un vecteur non nul $x$ sur lequel $q(x) > 0$ et $q(x) \\le 0$, contradiction absolue.',
        astuceConcours: 'Une forme quadratique $q$ est définie positive si et seulement si sa signature est $(n, 0)$, ce qui équivaut à dire que toutes ses valeurs propres matricielles sont strictement positives, ou que tous ses mineurs dominants principaux sont $>0$ (Critère de Sylvester).'
      },
      {
        name: 'Algorithme de Réduction de Gauss',
        statement: 'Toute forme quadratique en dimension finie s\'écrit comme somme de carrés de formes linéaires indépendantes :\n- Si un terme $a_{ii} x_i^2 \\neq 0$ existe : regrouper tous les termes en $x_i$ pour former un carré parfait $(x_i + \\sum_{j \\neq i} \\frac{a_{ij}}{a_{ii}} x_j)^2$.\n- Si tous les $a_{ii} = 0$ mais un terme rectangle $a_{12} x_1 x_2 \\neq 0$ existe : utiliser l\'identité $4 x_1 x_2 = (x_1 + x_2)^2 - (x_1 - x_2)^2$.',
        astuceConcours: 'Toujours compter le nombre de formes linéaires obtenues : il doit être exactement égal au rang de la matrice de la forme quadratique.'
      }
    ],
    sections: [
      {
        title: '1. Cône isotrope & Noyau d\'une forme quadratique',
        content: 'Le cône isotrope est $\\mathcal{C}(q) = \\{x \\in E \\mid q(x) = 0\\}$.\nLe noyau est $\\ker(q) = \\{x \\in E \\mid \\forall y \\in E, B(x, y) = 0\\}$.\nOn a toujours $\\ker(q) \\subset \\mathcal{C}(q)$. Si $q$ est de signe constant (positive ou négative), on a égalité remarquable : $\\ker(q) = \\mathcal{C}(q)$.'
      }
    ],
    piegesClassiques: [
      'Confondre forme quadratique non dégénérée ($\\det(M) \\neq 0 \\iff \\ker(q) = \\{0\\}$) et forme définie positive (signature $(n, 0)$). Une forme peut être non dégénérée et de signature $(1, 2)$ !'
    ]
  },
  {
    id: 'maths-logique-raisonnements-relations',
    slug: 'logique-quantificateurs-relations-equivalences',
    title: 'Logique, Ensembles, Raisonnements & Relations d\'Équivalence',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    description: 'Calcul des propositions, quantificateurs $\\forall$ et $\\exists$, négation, contraposée, raisonnement par l\'absurde, récurrence simple/double/forte, relations d\'équivalence, partition et quotient.',
    readTime: '24 min',
    prerequis: ['Notations ensemblistes usuelles'],
    keyTheorems: [
      {
        name: 'Principe de Récurrence Forte (Ordre Bien Fondé)',
        statement: 'Soit $P(n)$ une propriété dépendant de l\'entier $n \\in \\mathbb{N}$. Si $P(0)$ est vraie, et si pour tout $n \\in \\mathbb{N}$, $[\\forall k \\in \\{0, \\dots, n\\}, P(k)] \\implies P(n+1)$, alors $P(n)$ est vraie pour tout $n \\in \\mathbb{N}$.',
        astuceConcours: 'Essentiel pour l\'arithmétique (existence de la décomposition en facteurs premiers) et pour les preuves sur les arbres et graphes en informatique.'
      },
      {
        name: 'Théorème Fondamental des Relations d\'Équivalence & Partition',
        statement: 'Soit $\\mathcal{R}$ une relation d\'équivalence (réflexive, symétrique, transitive) sur un ensemble $E$. L\'ensemble des classes d\'équivalence $\\{ \\mathrm{cl}(x) \\mid x \\in E \\}$ forme une **partition** de $E$ (parties non vides, deux à deux disjointes, dont la réunion est $E$). Réciproquement, toute partition définit une unique relation d\'équivalence.',
        astuceConcours: 'En algèbre, ce théorème fonde les anneaux quotients $\\mathbb{Z}/n\\mathbb{Z}$ et les espaces projectifs $\\mathbb{P}(E)$.'
      }
    ],
    sections: [
      {
        title: '1. Règle d\'or des quantificateurs à l\'oral et à l\'écrit',
        content: 'L\'ordre des quantificateurs est crucial : $\\forall x, \\exists y, P(x, y)$ est complètement différent de $\\exists y, \\forall x, P(x, y)$. La négation de $\\forall x \\in E, P(x)$ est $\\exists x \\in E, \\neg P(x)$.',
        methodKicker: 'Ne jamais commencer une copie par une proposition sans quantificateurs ! Dès qu\'une variable est introduite, préciser son ensemble d\'appartenance : « Soit $\\varepsilon > 0$ ».'
      }
    ],
    piegesClassiques: [
      'Inverser l\'ordre des quantificateurs dans la continuité uniforme vs continuité simple.',
      'Oublier d\'initialiser une récurrence ou sauter le cas $n=1$ dans une récurrence double.'
    ]
  },

  // ==========================================
  // PHYSIQUE - PROGRAMME OFFICIEL CPGE
  // ==========================================
  {
    id: 'physique-optique-fourier-diffraction-fraunhofer',
    slug: 'optique-de-fourier-diffraction-fraunhofer-airy',
    title: 'Optique de Fourier, Diffraction à l\'Infini (Fraunhofer) & Tache d\'Airy',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    description: 'Principe d\'Huygens-Fresnel, conditions de Fraunhofer, diffraction par une fente fine, ouverture circulaire et disque d\'Airy, critère de Rayleigh et filtrage spatial par lentille convergente.',
    readTime: '27 min',
    prerequis: ['Optique ondulatoire', 'Interférences lumineuses', 'Transformée de Fourier'],
    keyTheorems: [
      {
        name: 'Formule de Fraunhofer & Transformée de Fourier Bidimensionnelle',
        statement: 'À grande distance (ou dans le plan focal image d\'une lentille convergente), l\'amplitude complexe diffractée $s(u, v)$ par une ouverture plane de transmittance $t(x, y)$ est proportionnelle à la **transformée de Fourier spatiale** de la transmittance :\n$$s(u, v) = \\frac{s_0}{i \\lambda f\'} \\iint_{\\text{ouverture}} t(x, y) e^{-i 2\\pi (u x + v y)} \\,\\mathrm{d}x \\mathrm{d}y$$\noù $u = \\frac{X}{\\lambda f\'}$ et $v = \\frac{Y}{\\lambda f\'}$ sont les fréquences spatiales associées aux coordonnées d\'observation $(X, Y)$.',
        astuceConcours: 'L\'intensité lumineuse est le carré du module de la transformée de Fourier de la fente. Si la fente est rectangulaire de largeur $a$, la figure de diffraction est un sinus cardinal au carré $\\mathrm{sinc}^2(\\frac{\\pi a X}{\\lambda f\'})$.'
      },
      {
        name: 'Critère de Résolution de Rayleigh',
        statement: 'Deux sources ponctuelles incohérentes sont dites juste résolues par un instrument d\'optique à pupille circulaire de diamètre $D$ lorsque le maximum central de la tache d\'Airy de l\'une coïncide avec le premier zéro de l\'autre, ce qui correspond à un écart angulaire minimal :\n$$\\theta_{min} = 1,22 \\frac{\\lambda}{D}$$',
        astuceConcours: 'Pour augmenter le pouvoir de résolution d\'un télescope (diminuer $\\theta_{min}$), il faut impérativement augmenter le diamètre $D$ de son miroir primaire !'
      }
    ],
    sections: [
      {
        title: '1. Filtrage spatial dans le plan focal',
        content: 'Une lentille effectue une transformée de Fourier optique instantanée à la vitesse de la lumière ! En plaçant un diaphragme dans le plan focal image, on peut réaliser :\n- Un filtre passe-bas : élimination du bruit haute fréquence et lissage de l\'image.\n- Un filtre passe-haut : suppression de la composante continue (strie) pour révéler les contours fins.\n- L\'ombrage et le contraste de phase de Zernike (Nobel 1953).'
      }
    ],
    piegesClassiques: [
      'Confondre largeur angulaire de la fente (demi-angle $\\theta = \\lambda / a$) et largeur métrique sur l\'écran ($L = 2 \\lambda f\' / a$).'
    ]
  },
  {
    id: 'physique-induction-lorentz-neumann-faraday',
    slug: 'induction-electromagnetique-lorentz-neumann-foucault',
    title: 'Induction Électromagnétique : Lorentz, Neumann & Courants de Foucault',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI', 'PCSI', 'MPSI'],
    annee: '1ère & 2ème année',
    description: 'Loi de Faraday, fem d\'induction, induction de Lorentz (circuit mobile dans champ stationnaire), induction de Neumann (champ variable dans circuit fixe), auto-inductance, mutuelle et courants de Foucault.',
    readTime: '26 min',
    prerequis: ['Électromagnétisme', 'Lois de Maxwell', 'Mécanique du point'],
    keyTheorems: [
      {
        name: 'Loi Fondamentale de Faraday & Décomposition de la fem',
        statement: 'Pour tout circuit fermé orienté $\\mathcal{C}$ délimitant une surface $\\Sigma$ :\n$$e = - \\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = \\oint_\\mathcal{C} \\vec{E}_m \\cdot \\mathrm{d}\\vec{\\ell}$$\noù le champ électromoteur total est $\\vec{E}_m = \\vec{E}_{induit} + \\vec{v} \\wedge \\vec{B}$.\n- **Induction de Neumann :** circuit fixe, champ variable $\\vec{E}_m = \\vec{E}_{induit}$ avec $\\vec{\\mathrm{rot}}\\,\\vec{E}_{induit} = -\\frac{\\partial \\vec{B}}{\\partial t}$.\n- **Induction de Lorentz :** circuit mobile, champ stationnaire $\\vec{E}_m = \\vec{v} \\wedge \\vec{B}$.',
        astuceConcours: 'Toujours vérifier le sens du courant induit avec la loi de modération de Lenz : les effets de l\'induction s\'opposent aux causes qui leur ont donné naissance !'
      }
    ],
    sections: [
      {
        title: '1. Courants de Foucault & Pertes par hystérésis',
        content: 'Dans un conducteur massif soumis à un champ magnétique variable, les lignes de champ induites créent des tourbillons de courant appelés **courants de Foucault**. La puissance volumique dissipée par effet Joule varie en $\\mathcal{P}_J \\propto \\gamma \\omega^2 B_0^2 e^2$.\nPour réduire ces pertes dans les transformateurs, on utilise des tôles feuilletées d\'acier au silicium vernies isolantes d\'épaisseur fine $e$.'
      }
    ],
    piegesClassiques: [
      'Oublier le signe moins dans $e = -\\mathrm{d}\\Phi / \\mathrm{d}t$ ou mal définir la normale $\\vec{n}$ par la règle du tire-bouchon.'
    ]
  },
  {
    id: 'physique-thermo-statistique-boltzmann',
    slug: 'thermodynamique-statistique-facteur-boltzmann-equipartition',
    title: 'Thermodynamique Statistique, Facteur de Boltzmann & Équipartition',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI', 'BCPST'],
    annee: '2ème année',
    description: 'Micro-états et macro-états, formule de Boltzmann pour l\'entropie $S = k_B \\ln \\Omega$, facteur de Boltzmann $e^{-E/k_B T}$, distribution de Maxwell des vitesses et théorème de l\'équipartition de l\'énergie.',
    readTime: '25 min',
    prerequis: ['Thermodynamique classique', 'Probabilités continues', 'Mécanique'],
    keyTheorems: [
      {
        name: 'Facteur de Boltzmann & Canonique de Gibbs',
        statement: 'Pour un système en contact avec un thermostat à température $T$, la probabilité qu\'il se trouve dans un micro-état d\'énergie $E_i$ est donnée par la distribution canonique :\n$$P(E_i) = \\frac{1}{Z} e^{-\\frac{E_i}{k_B T}} \\quad \\text{avec} \\quad Z = \\sum_j e^{-\\frac{E_j}{k_B T}}$$où $Z$ est la fonction de partition du système.',
        astuceConcours: 'Permet de retrouver instantanément la loi de répartition barométrique des gaz dans l\'atmosphère : $\\rho(z) = \\rho_0 e^{-\\frac{m g z}{k_B T}}$.'
      },
      {
        name: 'Théorème de l\'Équipartition de l\'Énergie',
        statement: 'Pour un système classique à l\'équilibre thermique à température $T$, chaque terme quadratique indépendant dans l\'expression de l\'énergie totale (hamiltonien) contribue en moyenne pour :\n$$\\langle E_{terme} \\rangle = \\frac{1}{2} k_B T$$\nPour un gaz parfait monoatomique (3 degrés de translation) : $U = \\frac{3}{2} N k_B T = \\frac{3}{2} n R T$.',
        astuceConcours: 'Pour un gaz diatomique à température ambiante, les 2 degrés de rotation s\'ajoutent, donnant $C_{V,m} = \\frac{5}{2} R$ et $\\gamma = 1,4$.'
      }
    ],
    sections: [
      {
        title: '1. Définition statistique de l\'entropie',
        content: 'La formule gravée sur la tombe de Ludwig Boltzmann à Vienne : $S = k_B \\ln \\Omega$, où $\\Omega$ est le nombre de micro-états accessibles pour un macro-état d\'énergie $E$ donné. L\'entropie mesure directement le manque d\'information microscopique de l\'observateur macroscopique.'
      }
    ],
    piegesClassiques: [
      'Appliquer l\'équipartition classique à un oscillateur quantique à basse température ($k_B T \\ll \\hbar \\omega$, gel des degrés de liberté vibratoires).'
    ]
  },

  // ==========================================
  // CHIMIE - PROGRAMME OFFICIEL CPGE
  // ==========================================
  {
    id: 'chimie-electrochimie-industrielle-piles-accumulateurs',
    slug: 'electrochimie-industrielle-piles-accumulateurs-electrolyse',
    title: 'Électrochimie Industrielle : Piles, Accumulateurs, Électrolyse & Surtensions',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'PSI', 'BCPST'],
    annee: '2ème année',
    description: 'Piles chimiques, accumulateurs (plomb, Li-ion), piles à combustible ($H_2/O_2$), électrolyseurs industriels, surtensions anodique/cathodique, lois de Faraday et rendements énergétiques.',
    readTime: '26 min',
    prerequis: ['Courbes courant-potentiel $I-E$', 'Thermodynamique redox'],
    keyTheorems: [
      {
        name: 'Loi de Faraday & Rendement Faradique',
        statement: 'La masse $m$ d\'une espèce chimique produite ou consommée à une électrode par un courant $I$ circulant pendant un temps $\\Delta t$ est donnée par :\n$$m = \\frac{M \\cdot I \\cdot \\Delta t}{n \\cdot \\mathcal{F}} \\cdot \\eta_F$$\noù $\\mathcal{F} = 96\\,485\\text{ C/mol}$ est la constante de Faraday, $n$ le nombre d\'électrons transférés, $M$ la masse molaire et $\\eta_F$ le rendement faradique (souvent $\\le 1$ à cause de réactions parasites).',
        astuceConcours: 'En électrolyse, la tension réelle minimale à appliquer aux bornes est toujours supérieure à la fem thermodynamique : $U = e_{th} + |\\eta_A| + |\\eta_C| + r I$.'
      }
    ],
    sections: [
      {
        title: '1. Fonctionnement de l\'accumulateur au plomb',
        content: 'Électrode positive : $PbO_2(s) + 4 H^+ + SO_4^{2-} + 2e^- = PbSO_4(s) + 2 H_2O$ ($E^\\circ = 1,69\\text{ V}$).\nÉlectrode négative : $Pb(s) + SO_4^{2-} = PbSO_4(s) + 2e^-$ ($E^\\circ = -0,36\\text{ V}$).\nBilan global réversible : $Pb(s) + PbO_2(s) + 2 H_2SO_4 \\rightleftharpoons 2 PbSO_4(s) + 2 H_2O$ (fem $\\approx 2,05\\text{ V}$ par élément).'
      }
    ],
    piegesClassiques: [
      'Inverser les signes des surtensions : $\\eta_A \\ge 0$ (surtension anodique d\'oxydation) et $\\eta_C \\le 0$ (surtension cathodique de réduction).'
    ]
  },
  {
    id: 'chimie-organique-derives-acides-polyfonctionnels',
    slug: 'derives-acides-carboxyliques-esterification-claisen',
    title: 'Dérivés d\'Acides Carboxyliques & Synthèses Polyfonctionnelles',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'BCPST'],
    annee: '2ème année',
    description: 'Réactivité comparée des chlorures d\'acyle, anhydrides, esters et amides, addition-élimination, saponification des esters, condensation de Claisen et stratégie de protection/déprotection.',
    readTime: '25 min',
    prerequis: ['Chimie organique fondamentale', 'Composés carbonylés'],
    keyTheorems: [
      {
        name: 'Échelle de Réactivité par Addition-Élimination Nucléophile',
        statement: 'L\'électrophilie du carbone du carbonyle et l\'aptitude du groupe partant $X^-$ classent les dérivés d\'acides dans l\'ordre décroissant de réactivité :\n$$\\text{Chlorure d\'acyle } (RCOCl) > \\text{Anhydride } (RCOOOCR) > \\text{Ester } (RCOOR\') > \\text{Amide } (RCONH_2)$$\nUn dérivé plus réactif permet de synthétiser quantitativement n\'importe quel dérivé moins réactif, mais la réciproque nécessite un réactif d\'activation (ex: $SOCl_2$, $PCl_5$, DCC).',
        astuceConcours: 'La saponification d\'un ester ($RCOOR\' + OH^- \\to RCOO^- + R\'OH$) est totale et irréversible car le proton de l\'acide carboxylique est immédiatement capté par l\'ion carboxylate stabilisé par résonance.'
      }
    ],
    sections: [
      {
        title: '1. Condensation de Claisen & Énolates',
        content: 'En présence d\'une base forte non nucléophile ($NaOEt$ dans $EtOH$), un ester possédant un proton en $\\alpha$ est déprotoné pour former un énolate d\'ester qui attaque une seconde molécule d\'ester pour donner un **$\\beta$-cétoester**. L\'étape finale de déprotonation du proton très acide entre les deux carbonyles rend la réaction thermodynamiquement totale.'
      }
    ],
    piegesClassiques: [
      'Utiliser de l\'eau ou un solvant protique lors de la manipulation d\'un chlorure d\'acyle (il s\'hydrolyse violemment en fumées de $HCl$).'
    ]
  },

  // ==========================================
  // INFORMATIQUE - PROGRAMME OFFICIEL CPGE
  // ==========================================
  {
    id: 'info-logique-cnf-dpll-sat',
    slug: 'logique-propositionnelle-cnf-dpll-sat-solveurs',
    title: 'Logique Propositionnelle, Formes Normales CNF & SAT-Solveurs (DPLL)',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    description: 'Syntaxe et sémantique de la logique booléenne, validité, satisfiabilité, mise sous forme normale conjonctive (CNF), algorithme DPLL, propagation unitaire et heuristiques de branchement.',
    readTime: '26 min',
    prerequis: ['Arbres binaires', 'Récursivité', 'Complexité algorithmique'],
    keyTheorems: [
      {
        name: 'Théorème de Cook-Levin & NP-Complétude de SAT',
        statement: 'Le problème de décision SAT (déterminer s\'il existe une affectation de vérité rendant vraie une formule propositionnelle) est **NP-complet**. Même restreint aux clauses de 3 littéraux (3-SAT), il reste NP-complet. En revanche, 2-SAT est résoluble en temps linéaire $\\mathcal{O}(V + E)$ via la recherche de composantes fortement connexes (algorithme de Tarjan).',
        astuceConcours: 'L\'algorithme DPLL (Davis-Putnam-Logemann-Loveland) repose sur deux optimisations vitales : la règle de la clause unitaire (si une clause ne contient qu\'un littéral, sa valeur est forcée) et l\'élimination des littéraux purs.'
      }
    ],
    sections: [
      {
        title: '1. Algorithme DPLL en Python',
        content: `\`\`\`python
def dpll(clauses: list[set[int]], assignation: dict[int, bool]) -> bool:
    # 1. Détection de contradiction ou succès
    if any(len(c) == 0 for c in clauses):
        return False  # Clause vide = insatisfiable
    if len(clauses) == 0:
        return True   # Toutes les clauses satisfaites
    
    # 2. Propagation unitaire
    unitaire = next((c for c in clauses if len(c) == 1), None)
    if unitaire:
        lit = next(iter(unitaire))
        var = abs(lit)
        val = lit > 0
        nouvelles_clauses = simplifier(clauses, lit)
        return dpll(nouvelles_clauses, {**assignation, var: val})
    
    # 3. Branchement heuristique
    var = abs(next(iter(clauses[0])))
    return dpll(simplifier(clauses, var), {**assignation, var: True}) or \\
           dpll(simplifier(clauses, -var), {**assignation, var: False})
\`\`\``
      }
    ],
    piegesClassiques: [
      'Confondre forme normale conjonctive (CNF : conjonction de disjonctions) et disjonctive (DNF). La plupart des solveurs SAT n\'acceptent que le format standard DIMACS CNF.'
    ]
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR - PROGRAMME OFFICIEL CPGE
  // ==========================================
  {
    id: 'si-mecanismes-hyperstatisme-mobilite',
    slug: 'theorie-mecanismes-hyperstatisme-mobilite-isostatisme',
    title: 'Théorie des Mécanismes, Hyperstatisme, Mobilité & Liaisons Équivalentes',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'PCSI', 'MP'],
    annee: '2ème année',
    description: 'Graphe des liaisons, formule de mobilité cinématique et statique, degré d\'hyperstatisme $h$, liaisons en parallèle, liaisons en série, conditions géométriques de montabilité et solutions isostatiques.',
    readTime: '25 min',
    prerequis: ['Torseurs cinématiques et d\'actions mécaniques', 'Statique du solide'],
    keyTheorems: [
      {
        name: 'Formule Fondamentale de l\'Hyperstatisme & Mobilité',
        statement: 'Pour un mécanisme comportant $p$ pièces (dont le bâti), $N_L$ liaisons et $\\gamma$ cycles cinématiques indépendants ($\\gamma = N_L - p + 1$) :\n$$h = m - E_s + 6(p - 1) = m_u + m_i - I_c + 6 \\gamma$$\noù :\n- $h$ est le degré d\'hyperstatisme ($h=0$ : isostatique, $h > 0$ : hyperstatique).\n- $m = m_u + m_i$ est la mobilité totale (utile + interne).\n- $E_s = 6(p - 1)$ est le nombre d\'équations scalaires de la statique indépendantes.\n- $I_c$ est le nombre total d\'inconnues cinématiques des liaisons.',
        astuceConcours: 'Si un mécanisme est hyperstatique de degré $h$, la fabrication exige des tolérances géométriques strictes (coaxialité, parallélisme) pour éviter le blocage mécanique lors du serrage !'
      }
    ],
    sections: [
      {
        title: '1. Association de liaisons en parallèle et en série',
        content: '- **En parallèle :** Le torseur cinématique équivalent est l\'intersection : $\\{V_{eq}\\} = \\{V_1\\} = \\{V_2\\}$. Les actions mécaniques s\'additionnent : $\\{T_{eq}\\} = \\{T_1\\} + \\{T_2\\}$.\n- **En série :** Les mouvements cinématiques s\'additionnent : $\\{V_{eq}\\} = \\{V_1\\} + \\{V_2\\}$. L\'action mécanique est commune : $\\{T_{eq}\\} = \\{T_1\\} = \\{T_2\\}$.'
      }
    ],
    piegesClassiques: [
      'Oublier les mobilités internes $m_i$ (par exemple la rotation libre d\'un galet ou d\'une tige filetée sur son axe) qui faussent le calcul du degré d\'hyperstatisme.'
    ]
  }
];
