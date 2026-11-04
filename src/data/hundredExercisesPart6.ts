import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART6: ExerciseItem[] = [
  {
    id: 'exo-100-41-theoreme-cauchy-lipschitz',
    title: 'Théorème de Cauchy-Lipschitz & Lemme de Grönwall',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-systemes-dynamiques',
    chapitreTitre: 'Équations Différentielles & Systèmes Dynamiques',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / ENS BCPST',
    dureeEstimeeMin: 45,
    enonce: 'Soit $f : \\mathbb{R} \\times \\mathbb{R}^n \\to \\mathbb{R}^n$ une application continue et globalement $k$-lipschitzienne par rapport à sa seconde variable :\n$$\\forall t \\in \\mathbb{R}, \\forall x, y \\in \\mathbb{R}^n, \\quad \\|f(t, x) - f(t, y)\\| \\le k \\|x - y\\|$$\n1. Énoncer le lemme de Grönwall sous forme intégrale.\n2. Soient $x(t)$ et $y(t)$ deux solutions sur $[t_0, t_1]$ de l\'équation différentielle $x\'(t) = f(t, x(t))$. À l\'aide du lemme de Grönwall, établir la majoration d\'écart :\n$$\\|x(t) - y(t)\\| \\le \\|x(t_0) - y(t_0)\\| e^{k |t - t_0|}$$\n3. En déduire l\'unicité globale de la solution au problème de Cauchy et la continuité par rapport aux conditions initiales.',
    hints: [
      'Écrire la forme intégrale : $x(t) - y(t) = (x(t_0) - y(t_0)) + \\int_{t_0}^t (f(s, x(s)) - f(s, y(s)))\\,\\mathrm{d}s$.',
      'Appliquer Grönwall à la fonction continue positive $u(t) = \\|x(t) - y(t)\\|$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Énoncé du lemme de Grönwall',
          explication: 'Soient $u, v$ deux fonctions continues positives sur $[a, b]$ et $C \\ge 0$ une constante. Si pour tout $t \\in [a, b]$ on a :\n$$u(t) \\le C + \\int_a^t v(s) u(s)\\,\\mathrm{d}s$$\nAlors pour tout $t \\in [a, b]$ :\n$$u(t) \\le C \\exp\\left( \\int_a^t v(s)\\,\\mathrm{d}s \\right)$$'
        },
        {
          titre: '2. Majoration de l\'écart entre deux solutions',
          explication: 'Par intégration de l\'équation différentielle entre $t_0$ et $t \\ge t_0$ :\n$$x(t) - y(t) = (x(t_0) - y(t_0)) + \\int_{t_0}^t \\big( f(s, x(s)) - f(s, y(s)) \\big)\\,\\mathrm{d}s$$\nEn prenant la norme et en appliquant l\'inégalité triangulaire puis l\'hypothèse lipschitzienne :\n$$\\|x(t) - y(t)\\| \\le \\|x(t_0) - y(t_0)\\| + \\int_{t_0}^t \\|f(s, x(s)) - f(s, y(s))\\|\\,\\mathrm{d}s$$\n$$\\|x(t) - y(t)\\| \\le \\|x(t_0) - y(t_0)\\| + \\int_{t_0}^t k \\|x(s) - y(s)\\|\\,\\mathrm{d}s$$\nEn posant $u(t) = \\|x(t) - y(t)\\|$, $C = \\|x(t_0) - y(t_0)\\|$ et $v(s) = k$, le lemme de Grönwall donne immédiatement :\n$$\\|x(t) - y(t)\\| \\le \\|x(t_0) - y(t_0)\\| e^{k(t - t_0)}$$'
        },
        {
          titre: '3. Unicité et sensibilité aux conditions initiales',
          explication: '- Si $x(t_0) = y(t_0)$, alors $\\|x(t_0) - y(t_0)\\| = 0$. La majoration donne $\\|x(t) - y(t)\\| \\le 0$, d\'où $x(t) = y(t)$ pour tout $t$ : **l\'unicité globale est démontrée**.\n- Pour $\\varepsilon > 0$ et $T > 0$ fixés, en choisissant $\\eta = \\varepsilon e^{-k T}$, si $\\|x(t_0) - y(t_0)\\| < \\eta$, alors $\\sup_{t \\in [t_0, t_0+T]} \\|x(t) - y(t)\\| \\le \\varepsilon$ : c\'est la **continuité du flot** par rapport aux conditions initiales.'
        }
      ],
      conclusion: 'Le lemme de Grönwall est la pierre angulaire de l\'analyse de stabilité des systèmes différentiels et de la théorie du chaos déterministe.',
      reflexeDuCorrecteur: 'Dès que vous devez contrôler la différence entre deux solutions d\'une EDO non linéaire, le réflexe absolu est de passer par la formulation intégrale et d\'appliquer Grönwall.'
    }
  },
  {
    id: 'exo-100-42-thermodynamique-cycle-rankine',
    title: 'Cycle de Rankine-Hirn d\'une Centrale Thermoélectrique ou Nucléaire',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Machines Thermiques & Changements d\'État',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / CCINP',
    dureeEstimeeMin: 40,
    enonce: 'On étudie le cycle de Rankine d\'une turbine à vapeur d\'eau opérant entre la pression du générateur de vapeur $P_{haut} = 80\\text{ bars}$ ($T_{sat} = 295^\\circ\\text{C}$, vapeur surchauffée à $T_3 = 450^\\circ\\text{C}$, enthalpie $h_3 = 3270\\text{ kJ/kg}$) et la pression du condenseur $P_{bas} = 0.08\\text{ bar}$ ($T_{cond} = 41.5^\\circ\\text{C}$).\n1. Décrire les 4 étapes du cycle de Rankine-Hirn dans le diagramme de Mollier $(h, s)$.\n2. La détente isentropique dans la turbine conduit en sortie à une enthalpie $h_4 = 2100\\text{ kJ/kg}$. L\'eau liquide condensée sort à $h_1 = 174\\text{ kJ/kg}$ et le travail de la pompe d\'alimentation est $w_{pompe} = 8\\text{ kJ/kg}$ ($h_2 = 182\\text{ kJ/kg}$).\n3. Calculer le travail mécanique massique net récupéré $w_{net}$ et le transfert thermique massique reçu du réacteur nucléaire $q_C$.\n4. En déduire le rendement thermique effectif du cycle.',
    hints: [
      'Travail fourni par la turbine : $w_t = h_4 - h_3 < 0$.',
      'Rendement : $\\eta = \\frac{|w_{net}|}{q_C} = \\frac{(h_3 - h_4) - (h_2 - h_1)}{h_3 - h_2}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Description des étapes dans le diagramme de Mollier $(h, s)$',
          explication: '- $1\\to 2$ : Compression isentropique de l\'eau liquide par la pompe alimentaire de $P_{bas}$ à $P_{haut}$. Segment vertical court ascendant.\n- $2\\to 3$ : Chauffage isobare à $P_{haut}$ dans le générateur de vapeur : réchauffement de l\'eau liquide jusqu\'à ébullition, vaporisation complète, puis surchauffe de la vapeur jusqu\'à $450^\\circ\\text{C}$.\n- $3\\to 4$ : Détente isentropique adiabatique réversible dans la turbine produisant le travail mécanique utile. Segment vertical descendant traversant la courbe de saturation.\n- $4\\to 1$ : Condensation totale isobare et isotherme de la vapeur humide au condenseur refroidi par un fleuve ou une tour aéroréfrigérante.'
        },
        {
          titre: '2. Bilan de travail et de chaleur par kilogramme de fluide',
          explication: '- Travail produit par la turbine : $w_{turbine} = h_4 - h_3 = 2100 - 3270 = -1170\\text{ kJ/kg}$.\n- Travail absorbé par la pompe : $w_{pompe} = h_2 - h_1 = 182 - 174 = +8\\text{ kJ/kg}$.\nLe travail net produit par unité de masse vaut :\n$$|w_{net}| = |w_{turbine}| - w_{pompe} = 1170 - 8 = 1162\\text{ kJ/kg}$$\n- Chaleur fournie par la source chaude au générateur de vapeur :\n$$q_C = h_3 - h_2 = 3270 - 182 = 3088\\text{ kJ/kg}$$'
        },
        {
          titre: '3. Calcul du rendement thermique',
          explication: 'Le rendement thermique du cycle de Rankine s\'élève à :\n$$\\eta = \\frac{|w_{net}|}{q_C} = \\frac{1162\\text{ kJ/kg}}{3088\\text{ kJ/kg}} \\approx 0.376 = 37.6\\%$$\nCe résultat est très représentatif des centrales nucléaires à eau pressurisée (REP) réelles, dont le rendement électrique global est d\'environ $33$ à $37\\%$.'
        }
      ],
      conclusion: 'Le cycle de Rankine est le cycle thermodynamique qui produit plus de $70\\%$ de l\'électricité mondiale (centrales nucléaires, thermiques à charbon et gaz).',
      reflexeDuCorrecteur: 'Remarquez que le travail de pompage d\'un liquide ($8\\text{ kJ/kg}$) est négligeable devant le travail de détente de la vapeur ($1170\\text{ kJ/kg}$, soit moins de $1\\%$) en raison du très faible volume massique de l\'eau liquide.'
    }
  },
  {
    id: 'exo-100-43-spectroscopie-ir-modes-vibration',
    title: 'Spectroscopie Infrarouge & Décompte des Modes Normaux de Vibration d\'une Molécule',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-stereochimie-biomolecules',
    chapitreTitre: 'Spectroscopie Moléculaire & Structure',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'Une molécule non linéaire comportant $N$ atomes possède $3N - 6$ degrés de liberté de vibration ($3N - 5$ si la molécule est linéaire).\n1. Donner le nombre de modes normaux de vibration pour le dioxyde de carbone $CO_2$ (linéaire) et pour l\'eau $H_2O$ (coudée).\n2. Décrire géométriquement les modes du $CO_2$ (élongation symétrique, élongation antisymétrique, pliage dégénéré) et expliquer pourquoi l\'élongation symétrique est inactive en spectroscopie Infrarouge mais active en diffusion Raman.\n3. En déduire pourquoi le $CO_2$ est un gaz à effet de serre majeur dans l\'infrarouge thermique tellurique (autour de $15\\;\\mu\\text{m}$, bande de déformation).',
    hints: [
      'Condition d\'activité en infrarouge : la vibration doit induire une variation du moment dipolaire de la molécule ($\\frac{\\partial \\vec{\\mu}}{\\partial q} \\neq 0$).',
      'Le $CO_2$ linéaire a un moment dipolaire permanent nul $\\vec{\\mu} = \\vec{0}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Décompte des modes normaux',
          explication: '- Pour le dioxyde de carbone $CO_2$ ($N=3$, géométrie linéaire $O=C=O$) : $3N - 5 = 3(3) - 5 = 4$ modes normaux de vibration.\n- Pour l\'eau $H_2O$ ($N=3$, géométrie coudée) : $3N - 6 = 3(3) - 6 = 3$ modes normaux (élongation symétrique, élongation antisymétrique, pliage/bending).'
        },
        {
          titre: '2. Règles de sélection optique pour le $CO_2$',
          explication: 'Les 4 modes de vibration du $CO_2$ sont :\n1. Élongation symétrique (les deux liaisons $C=O$ s\'allongent et se raccourcissent en phase) : le centre de charge positive et le centre de charge négative restent confondus en permanence au centre de symétrie de la molécule. $\\vec{\\mu}(t) = \\vec{0}$ à tout instant $\\implies \\frac{\\partial \\vec{\\mu}}{\\partial q} = 0$. Ce mode est **inactif en infrarouge**, mais actif en Raman car l\'ellipsoïde de polarisabilité oscille.\n2. Élongation antisymétrique (une liaison s\'allonge pendant que l\'autre se raccourcit) : crée un moment dipolaire oscillant le long de l\'axe de la molécule $\\implies$ **actif en IR** (absorbe à $\\sigma \\approx 2349\\text{ cm}^{-1}$, soit $\\lambda \\approx 4.26\\;\\mu\\text{m}$).\n3. et 4. Deux modes de pliage orthogonaux dégénérés (angle $O-C-O$ oscillant hors de l\'axe à $180^\\circ$) : créent un fort dipôle électrique perpendiculaire à l\'axe $\\implies$ **actifs en IR** (absorbent à $\\sigma \\approx 667\\text{ cm}^{-1}$, soit $\\lambda \\approx 15.0\\;\\mu\\text{m}$).'
        },
        {
          titre: '3. Rôle climatique de la bande à $15\\;\\mu\\text{m}$',
          explication: 'La Terre émet son rayonnement thermique infrarouge centré sur le pic de Wien à $\\lambda_{max} = \\frac{2898}{T_{sol}} \\approx \\frac{2898}{288\\text{ K}} \\approx 10\\;\\mu\\text{m}$. La bande de déformation du $CO_2$ à $15\\;\\mu\\text{m}$ coïncide exactement avec le cœur du spectre d\'émission thermique de la planète : l\'atmosphère absorbe quasi-totalement ces photons infrarouges et les réémet vers le sol, créant l\'effet de serre additionnel.'
        }
      ],
      conclusion: 'La spectroscopie IR est gouvernée par la règle de sélection dipolaire, reliant directement mécanique quantique des vibrations moléculaires et climat planétaire.',
      reflexeDuCorrecteur: 'Infrarouge : variation du dipôle permanent $\\Delta\\vec{\\mu} \\neq 0$. Raman : variation de polarisabilité $\\Delta\\alpha \\neq 0$. Pour une molécule centro-symétrique, les modes IR et Raman sont mutuellement exclusifs.'
    }
  },
  {
    id: 'exo-100-44-interferences-onde-sonore-quinke',
    title: 'Tube de Quincke & Mesure de la Célérité du Son par Interférences Acoustiques',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Ondes Acoustiques & Interférences',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'Un tube de Quincke est un dispositif constitué d\'un conduit sonore fixe de longueur $L_1$ et d\'un conduit mobile télescopique coulissant de longueur $L_2$. Un haut-parleur excite l\'entrée avec un son sinusoïdal pur de fréquence $f = 1700\\text{ Hz}$. Un microphone placé à la sortie mesure l\'intensité acoustique résultante.\n1. En notant $\\Delta L = L_2 - L_1$ la différence de longueur entre les deux branches, exprimer la différence de marche $\\delta$ et le déphasage $\\Delta\\phi$ des ondes à la sortie.\n2. On déplace le tube coulissant d\'une distance $d$ : la longueur de la branche mobile augmente de $2d$. Le signal passe d\'un maximum d\'intensité à un minimum d\'extinction. En déduire la valeur du déplacement $d$ en fonction de la longueur d\'onde $\\lambda$.\n3. Sachant qu\'on mesure expérimentalement $d = 5.0\\text{ cm}$ entre un maximum et le minimum consécutif, calculer la célérité du son $c$ dans l\'air.',
    hints: [
      'Un déplacement $d$ de la coulisse allonge le chemin de $2d$ (branche aller et branche retour).',
      'Passage d\'un maximum à un minimum : variation de différence de marche de $\\lambda/2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Différence de marche et déphasage',
          explication: 'L\'onde sonore se sépare en deux ondes d\'égales amplitudes à la bifurcation d\'entrée, parcourt les deux bras puis se recombine à la sortie. La différence de chemin acoustique est $\\delta = L_2 - L_1$.\nLe déphasage à la sortie vaut :\n$$\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\delta = \\frac{2\\pi f}{c} \\delta$$\nL\'intensité acoustique résultante est maximale si $\\delta = p \\lambda$ et minimale (extinction par interférence destructive) si $\\delta = (p + 1/2)\\lambda$.'
        },
        {
          titre: '2. Déplacement de la coulisse',
          explication: 'Le tube étant télescopique (en U), tirer la coulisse d\'une distance géométrique $d$ allonge la branche de deux segments de longueur $d$ : la variation de différence de marche est $\\Delta\\delta = 2d$.\nLe passage d\'un état d\'interférence constructive (son fort) à un état d\'interférence destructive (silence) correspond à une variation de différence de marche d\'une demi-longueur d\'onde :\n$$\\Delta\\delta = 2d = \\frac{\\lambda}{2} \\implies d = \\frac{\\lambda}{4}$$'
        },
        {
          titre: '3. Calcul numérique de la célérité du son',
          explication: 'La longueur d\'onde acoustique vaut :\n$$\\lambda = 4 d = 4 \\times 5.0\\text{ cm} = 20.0\\text{ cm} = 0.200\\text{ m}$$\nLa célérité de propagation du son dans l\'air à température ambiante est donc :\n$$c = \\lambda \\cdot f = 0.200\\text{ m} \\times 1700\\text{ Hz} = 340.0\\text{ m/s}$$'
        }
      ],
      conclusion: 'Le tube de Quincke est l\'équivalent acoustique strict de l\'interféromètre de Michelson ou des fentes d\'Young.',
      reflexeDuCorrecteur: 'N\'oubliez pas que déplacer une coulisse en U d\'une distance $d$ allonge le trajet de $2d$.'
    }
  },
  {
    id: 'exo-100-45-chimie-organique-retrosynthese-ibuprofene',
    title: 'Rétrosynthèse & Synthèse Verte de l\'Ibuprofène (Procédés Boots vs BHC)',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-stereochimie-biomolecules',
    chapitreTitre: 'Chimie Organique Avancée & Chimie Verte',
    filieres: ['BCPST', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto Chimie Organique / Mines PC',
    dureeEstimeeMin: 35,
    enonce: 'L\'ibuprofène est l\'anti-inflammatoire non stéroïdien le plus vendu au monde : acide 2-(4-isobutylphényl)propanoïque.\n1. Donner la structure topologique de la molécule et repérer son unique carbone asymétrique. Donner la configuration absolue de l\'énantiomère pharmacologiquement actif (S).\n2. Comparer l\'économie d\'atomes du procédé historique Boots (6 étapes stœchiométriques, économie d\'atomes $EA = 40\\%$) au procédé moderne BHC (3 étapes catalytiques : acylation de Friedel-Crafts par $HF$, hydrogénation sur $Raney-Ni$, carbonylation catalysée par le palladium, avec $EA = 77\\%$, voire $99\\%$ en valorisant l\'acide acétique).\n3. Écrire le mécanisme de l\'acylation de Friedel-Crafts de l\'isobutylbenzène par l\'anhydride acétique en présence d\'un acide de Lewis ($AlCl_3$). Justifier la régiosélectivité para quasi-exclusive.',
    hints: [
      'Économie d\'atomes : $EA = \\frac{M_{produit}}{M_{reactifs}} \\times 100\\%$.',
      'Le groupe isobutyle est un substituant alkyle donneur inductif $+I$, ortho/para-orienteur, et très encombrant stériquement.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Structure et chiralité de l\'ibuprofène',
          explication: 'L\'ibuprofène comprend un cycle benzénique 1,4-disubstitué (para) avec un groupement isobutyle $-CH_2-CH(CH_3)_2$ et un groupement acide 2-propanoïque $-CH(CH_3)-COOH$.\nLe carbone C2 portant le méthyle, le $-COOH$, l\'hydrogène et le cycle aromatique est asymétrique ($C^*$).\nPriorités CIP : 1: $-COOH$, 2: $-\\text{Ar}$, 3: $-CH_3$, 4: $-H$. Dans l\'énantiomère pharmacologique actif **(S)**, la configuration est lévogyre (bien qu\'in vivo une enzyme racémase convertisse l\'isomère inactif $R$ en isomère actif $S$).'
        },
        {
          titre: '2. Économie d\'atomes et principes de la chimie verte',
          explication: '- Le procédé Boots historique (1960) utilisait 6 étapes avec de nombreux réactifs stœchiométriques (acétate d\'éthyle, Darzens, hydroxylamine) produisant une montagne de déchets inorganiques : pour $1\\text{ kg}$ d\'ibuprofène produit, plus de $1.5\\text{ kg}$ de déchets étaient rejetés ($EA \\approx 40\\%$).\n- Le procédé BHC (Hoechst-Celanese, 1990) ne comporte que 3 étapes catalytiques directes sans solvant polluant : 1) acylation avec l\'anhydride acétique catalysée par $HF$ liquide récupéré à $99.9\\%$ ; 2) hydrogénation de la cétone en alcool avec $H_2$ et $Ni$ ; 3) carbonylation directe avec $CO$ catalysée par $Pd$. Chaque atome de $CO$ et de $H_2$ est incorporé dans la molécule finale : l\'économie d\'atomes atteint **$77\\%$**, et $99\\%$ si l\'acide acétique coproduit à l\'étape 1 est recyclé.'
        },
        {
          titre: '3. Mécanisme de l\'acylation de Friedel-Crafts',
          explication: 'L\'anhydride acétique $(CH_3CO)_2O$ réagit avec l\'acide de Lewis pour libérer l\'ion acylium électrophile $CH_3-C^+\\equiv O$.\nL\'ion acylium attaque le cycle aromatique de l\'isobutylbenzène :\n- Le groupement isobutyle est électro-donneur par effet inductif $+I$ : il active le cycle et oriente en positions *ortho* et *para*.\n- En raison de l\'**encombrement stérique volumineux** de la ramification isobutyle, l\'attaque en position *ortho* adjacente est très fortement défavorisée stériquement.\nL\'attaque a lieu quasi-exclusivement à $98\\%$ sur la position **para** opposée dégagée, menant au complexe de Wheland qui perd un proton pour réaromatiser le cycle.'
        }
      ],
      conclusion: 'La synthèse verte de l\'ibuprofène est l\'exemple canonique mondial de la transition vers une chimie sobre en carbone et sans déchets toxiques (Presidential Green Chemistry Challenge Award).',
      reflexeDuCorrecteur: 'Pour orienter en para à presque $100\\%$, il faut un groupement donneur stériquement encombrant (isobutyle, tert-butyle).'
    }
  }
];
