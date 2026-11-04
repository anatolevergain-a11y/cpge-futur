import type { CourseChapter } from './cpgeData';

export const FINAL_OFFICIAL_CPGE_COURSES: CourseChapter[] = [
  // ==========================================
  // MATHEMATIQUES
  // ==========================================
  {
    id: 'maths-variables-aleatoires-continuite-densite',
    slug: 'probabilites-variables-aleatoires-a-densite-lois-continues',
    title: 'Probabilités : Variables Aléatoires à Densité & Vecteurs Aléatoires',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '2ème année',
    description: 'Variables aléatoires continues sur $(\\Omega, \\mathcal{T}, P)$, fonction de répartition, densité de probabilité, espérance, variance, transferts, lois usuelles (uniforme, exponentielle, normale/gaussienne), couples de variables aléatoires et indépendance.',
    readTime: '28 min',
    prerequis: ['Intégration sur un intervalle quelconque', 'Probabilités discrètes', 'Calcul différentiel'],
    keyTheorems: [
      {
        name: 'Théorème de Transfert pour les Variables à Densité',
        statement: 'Soit $X$ une variable aléatoire réelle admettant une densité $f_X$ et soit $\\varphi : \\mathbb{R} \\to \\mathbb{R}$ une fonction continue par morceaux. La variable aléatoire $Y = \\varphi(X)$ admet une espérance si et seulement si l\'intégrale $\\int_{-\\infty}^{+\\infty} |\\varphi(t)| f_X(t) \\,\\mathrm{d}t$ converge. Dans ce cas :\n$$\\mathbb{E}(\\varphi(X)) = \\int_{-\\infty}^{+\\infty} \\varphi(t) f_X(t) \\,\\mathrm{d}t$$',
        demonstration: 'Démontré d\'abord pour des fonctions étagées indicatrices d\'intervalles $\\varphi = \\mathbf{1}_{[a, b]}$ où $\\mathbb{E}(\\mathbf{1}_{[a, b]}(X)) = P(X \\in [a, b]) = \\int_a^b f_X(t)\\,\\mathrm{d}t$, puis étendu aux fonctions positives par le théorème de convergence monotone, et enfin aux fonctions de signe quelconque par décomposition en partie positive et négative $\\varphi = \\varphi^+ - \\varphi^-$.',
        astuceConcours: 'Évite de calculer la densité explicite de $Y = \\varphi(X)$ (qui nécessite souvent d\'inverser la fonction de répartition). Pour calculer $\\mathbb{E}(X^2)$ ou $\\mathbb{E}(e^{tX})$, appliquez directement le théorème de transfert !'
      },
      {
        name: 'Formule de Changement de Variable Difféomorphique pour une Densité',
        statement: 'Soit $X$ une variable aléatoire admettant une densité $f_X$ continue sur un intervalle ouvert $I$, avec $P(X \\in I) = 1$. Soit $\\varphi : I \\to J$ un $\\mathcal{C}^1$-difféomorphisme de $I$ sur $J$. Alors $Y = \\varphi(X)$ est une variable à densité $f_Y$ donnée par :\n$$\\forall y \\in J, \\quad f_Y(y) = f_X(\\varphi^{-1}(y)) \\cdot \\left| (\\varphi^{-1})\'(y) \\right| = \\frac{f_X(\\varphi^{-1}(y))}{|\\varphi\'(\\varphi^{-1}(y))|}$$',
        astuceConcours: 'Ne tentez pas d\'apprendre la formule par cœur avec le sens de variation : revenez toujours à la fonction de répartition $F_Y(y) = P(\\varphi(X) \\le y)$ et dérivez par rapport à $y$ en appliquant la formule de dérivation des fonctions composées.'
      }
    ],
    sections: [
      {
        title: '1. Fonction de répartition et densité de probabilité',
        content: 'La fonction de répartition $F_X(x) = P(X \\le x)$ est croissante, continue à droite, vérifie $\\lim_{x \\to -\\infty} F_X(x) = 0$ et $\\lim_{x \\to +\\infty} F_X(x) = 1$. La variable $X$ est dite à densité si $F_X$ est continue sur $\\mathbb{R}$ et de classe $\\mathcal{C}^1$ sauf éventuellement en un nombre fini de points. En tout point de continuité de la densité $f_X$ :\n$$F\'_X(x) = f_X(x) \\quad \\text{et} \\quad P(a \\le X \\le b) = \\int_a^b f_X(t)\\,\\mathrm{d}t$$',
        methodKicker: 'Pour une variable continue, la probabilité ponctuelle est toujours nulle : $P(X = a) = 0$. Les inégalités larges ou strictes sont donc équivalentes : $P(a \\le X \\le b) = P(a < X < b)$.'
      },
      {
        title: '2. Lois continues fondamentales du programme CPGE',
        content: '- **Loi Uniforme $\\mathcal{U}([a, b])$** : $f(t) = \\frac{1}{b-a} \\mathbf{1}_{[a, b]}(t)$, $\\mathbb{E}(X) = \\frac{a+b}{2}$, $\\mathbb{V}(X) = \\frac{(b-a)^2}{12}$.\n- **Loi Exponentielle $\\mathcal{E}(\\lambda)$** (sans mémoire) : $f(t) = \\lambda e^{-\\lambda t} \\mathbf{1}_{\\mathbb{R}_+}(t)$, $\\mathbb{E}(X) = \\frac{1}{\\lambda}$, $\\mathbb{V}(X) = \\frac{1}{\\lambda^2}$. Propriété sans mémoire : $P(X > s+t \\mid X > s) = P(X > t)$.\n- **Loi Normale / Gaussienne $\\mathcal{N}(\\mu, \\sigma^2)$** : $f(t) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left(-\\frac{(t-\\mu)^2}{2\\sigma^2}\\right)$, $\\mathbb{E}(X) = \\mu$, $\\mathbb{V}(X) = \\sigma^2$. Variable centrée réduite : $Z = \\frac{X-\\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$.'
      },
      {
        title: '3. Couples de variables aléatoires et indépendance',
        content: 'Pour un couple $(X, Y)$ admettant une densité conjointe $f_{X,Y}(x, y)$ sur $\\mathbb{R}^2$ :\n- Densités marginales : $f_X(x) = \\int_{-\\infty}^{+\\infty} f_{X,Y}(x, y)\\,\\mathrm{d}y$ et $f_Y(y) = \\int_{-\\infty}^{+\\infty} f_{X,Y}(x, y)\\,\\mathrm{d}x$.\n- Indépendance : $X$ et $Y$ sont indépendantes si et seulement si $f_{X,Y}(x, y) = f_X(x) f_Y(y)$ presque partout sur $\\mathbb{R}^2$. Dans ce cas, $\\mathrm{Cov}(X, Y) = 0$ et $\\mathbb{V}(X+Y) = \\mathbb{V}(X) + \\mathbb{V}(Y)$.'
      }
    ],
    piegesClassiques: [
      'Affirmer que la covariance nulle $\\mathrm{Cov}(X, Y) = 0$ implique l\'indépendance (la réciproque n\'est vraie que pour les couples gaussiens).',
      'Oublier la valeur absolue du jacobien ou du terme dérivé $|(\\varphi^{-1})\'(y)|$ lors d\'un changement de variable dans une densité.',
      'Oublier d\'intégrer sur le bon support borné lors du calcul d\'une espérance avec une indicatrice.'
    ]
  },

  // ==========================================
  // PHYSIQUE
  // ==========================================
  {
    id: 'physique-interferences-deux-ondes-michelson',
    slug: 'optique-ondulatoire-interferences-deux-ondes-michelson',
    title: 'Optique Ondulatoire : Interférences à Deux Ondes & Interféromètre de Michelson',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    description: 'Division du front d\'onde (trous d\'Young, miroir de Lloyd) vs division d\'amplitude (lame à faces parallèles, coin d\'air, interféromètre de Michelson). Différence de marche, formule de Fresnel, contraste, cohérence spatiale et temporelle, configurations en lame d\'air et coin d\'air.',
    readTime: '26 min',
    prerequis: ['Équations de Maxwell', 'Ondes planes progressives monochromatiques', 'Optique géométrique'],
    keyTheorems: [
      {
        name: 'Formule de Fresnel (Éclairement d\'Interférence)',
        statement: 'Pour deux ondes lumineuses scalaires synchrones de même pulsation $\\omega$, d\'amplitudes complexes $s_1$ et $s_2$ présentant un déphasage $\\Delta \\phi = \\frac{2\\pi}{\\lambda_0} \\delta$ où $\\delta = [S_2 M] - [S_1 M]$ est la différence de marche optique :\n$$I(M) = I_1 + I_2 + 2 \\sqrt{I_1 I_2} \\cos\\left(\\frac{2\\pi \\delta(M)}{\\lambda_0}\\right) = 2 I_0 \\left[1 + \\cos\\left(\\frac{2\\pi \\delta(M)}{\\lambda_0}\\right)\\right] \\quad (\\text{si } I_1 = I_2 = I_0)$$',
        demonstration: 'Calcul de la moyenne temporelle de l\'intensité du champ total $s_{tot}(M, t) = s_1(M, t) + s_2(M, t)$ :\n$$I(M) = \\langle s_{tot}^2(t) \\rangle = \\langle s_1^2 \\rangle + \\langle s_2^2 \\rangle + 2 \\langle s_1 s_2 \\rangle = I_1 + I_2 + 2 \\sqrt{I_1 I_2} \\cos(\\Delta \\phi)$$\nLe terme croisé $2\\sqrt{I_1 I_2}\\cos(\\Delta\\phi)$ constitue le terme d\'interférence.',
        astuceConcours: 'L\'interfrange $i$ est la distance séparant deux franges brillantes consécutives : $\\delta(x+i) - \\delta(x) = \\lambda_0$. Pour les fentes d\'Young séparées de $a$ à distance $D$ de l\'écran : $\\delta = \\frac{a x}{D}$, ce qui donne $i = \\frac{\\lambda_0 D}{a}$.'
      },
      {
        name: 'Configurations Fondamentales de l\'Interféromètre de Michelson',
        statement: '- **Configuration en Lame d\'Air** (Miroirs $M_1$ et $M_2$ rigoureusement orthogonaux, distants d\'une épaisseur $e$) : Différence de marche $\\delta = 2 e \\cos(i)$ où $i$ est l\'angle d\'incidence sur la lame. Les lignes d\'égale différence de marche correspondent à $i = \\mathrm{cste}$ : franges d\'égale inclinaison (anneaux concentriques localisés à l\'infini, observés dans le plan focal image d\'une lentille convergente).\n- **Configuration en Coin d\'Air** (Miroirs formant un angle de coin $\\alpha \\ll 1$) : Différence de marche $\\delta = 2 \\alpha x$. Les lignes d\'égale différence de marche correspondent à $x = \\mathrm{cste}$ : franges rectilignes équidistantes d\'égale épaisseur localisées sur la surface des miroirs, d\'interfrange $i = \\frac{\\lambda_0}{2 \\alpha}$.',
        astuceConcours: 'Au contact optique ($e=0$), la différence de marche en lame d\'air est identiquement nulle : la teinte est uniforme plate (teinte sensible ou noire selon les déphasages à la réflexion sur la séparatrice semi-réfléchissante).'
      }
    ],
    sections: [
      {
        title: '1. Conditions d\'observation d\'interférences stables',
        content: 'Deux sources lumineuses ne peuvent interférer de manière stable que si elles sont **cohérentes**, c\'est-à-dire synchrones (même fréquence $\\omega$) et maintenant une relation de phase constante au cours du temps. Comme deux atomes indépendants émettent des trains d\'ondes aléatoires et décorrélés (durée de cohérence $\\tau_c \\approx 10^{-10}$ s), on doit diviser le faisceau d\'une UNIQUE source primaire, soit par division du front d\'onde (fentes d\'Young), soit par division d\'amplitude (Michelson).'
      },
      {
        title: '2. Facteur de visibilité et cohérence temporelle',
        content: 'Le contraste (ou visibilité) de Michelson est défini par :\n$$V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}$$\nSi la source possède une largeur spectrale $\\Delta \\lambda$ (ou un doublet de sodium $\\lambda_1, \\lambda_2$), l\'éclairement résulte de la superposition incohérente des longueurs d\'onde, conduisant à des battements et un brouillage des franges dès que la différence de marche dépasse la longueur de cohérence : $\\delta > L_c = c \\tau_c \\approx \\frac{\\lambda_0^2}{\\Delta \\lambda}$.'
      }
    ],
    piegesClassiques: [
      'Oublier le saut de phase de $\\pi$ (équivalent à une différence de marche de $\\lambda/2$) lors d\'une réflexion sur un milieu plus réfringent, qui inverse franges brillantes et sombres.',
      'Confondre la localisation des franges : franges d\'égale inclinaison (lame d\'air) localisées à l\'infini vs franges d\'égale épaisseur (coin d\'air) localisées sur le coin.',
      'Oublier la lame compensatrice dans le Michelson, indispensable pour compenser la traversée asymétrique du verre de la séparatrice en lumière polychromatique.'
    ]
  },

  {
    id: 'physique-rayonnement-thermique-corps-noir',
    slug: 'physique-thermique-rayonnement-thermique-corps-noir',
    title: 'Physique Thermique : Rayonnement Thermique & Corps Noir',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'MPI'],
    annee: '2ème année',
    description: 'Équilibre radiatif, corps noir idéal, luminance et émittance énergétique, loi de Planck, loi du déplacement de Wien, loi de Stefan-Boltzmann, bilan radiatif Terre-Atmosphère-Soleil et effet de serre.',
    readTime: '22 min',
    prerequis: ['Thermodynamique', 'Ondes électromagnétiques', 'Mécanique quantique élémentaire'],
    keyTheorems: [
      {
        name: 'Loi de Stefan-Boltzmann',
        statement: 'L\'émittance énergétique totale $M^\\circ(T)$ émise dans le demi-espace par un corps noir à la température thermodynamique $T$ (en kelvins) est proportionnelle à la puissance quatrième de sa température :\n$$M^\\circ(T) = \\sigma T^4 \\quad \\text{avec } \\sigma = \\frac{2 \\pi^5 k_B^4}{15 c^2 h^3} \\approx 5{,}670 \\times 10^{-8} \\text{ W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-4}$$',
        demonstration: 'S\'obtient par intégration de la densité spectrale d\'énergie de Planck $u_\\nu(T) = \\frac{8\\pi h \\nu^3}{c^3} \\frac{1}{e^{h\\nu/k_B T}-1}$ sur toutes les fréquences $\\nu \\in [0, +\\infty[$, puis utilisation de la relation d\'isotropie de Lambert $M^\\circ = \\frac{c}{4} u(T)$ et de l\'intégrale de Riemann $\\int_0^{+\\infty} \\frac{x^3}{e^x - 1}\\,\\mathrm{d}x = \\frac{\\pi^4}{15}$.',
        astuceConcours: 'Pour un corps réel d\'émissivité $\\varepsilon \\in [0, 1]$, l\'émittance devient $M(T) = \\varepsilon \\sigma T^4$. Le flux total rayonné par une surface d\'aire $S$ est $\\Phi = \\varepsilon S \\sigma T^4$.'
      },
      {
        name: 'Loi du Déplacement de Wien',
        statement: 'La longueur d\'onde $\\lambda_{max}$ correspondant au maximum de l\'émittance spectrale monochromatique d\'un corps noir vérifie :\n$$\\lambda_{max} \\cdot T = b \\approx 2{,}898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$$',
        astuceConcours: 'Permet de mesurer immédiatement la température de surface d\'une étoile (thermométrie optique) : pour le Soleil, $\\lambda_{max} \\approx 500\\text{ nm}$ dans le vert, ce qui donne $T_{soleil} \\approx \\frac{2{,}898 \\times 10^{-3}}{500 \\times 10^{-9}} \\approx 5800\\text{ K}$.'
      }
    ],
    sections: [
      {
        title: '1. Définition et propriétés du corps noir',
        content: 'Un corps noir est un système physique idéal qui absorbe la totalité du rayonnement électromagnétique incident, quelle que soit la longueur d\'onde et la direction : coefficient d\'absorption monochromatique $\\alpha_\\lambda = 1$. D\'après la loi de Kirchhoff, à l\'équilibre thermique, le rapport de l\'émittance sur le pouvoir absorbant est universel et indépendant de la nature du corps : $\\frac{M_\\lambda}{\\alpha_\\lambda} = M_\\lambda^\\circ(T)$. Le corps noir est donc le meilleur émetteur thermique possible à une température donnée.'
      },
      {
        title: '2. Modèle radiatif de la température d\'équilibre planétaire',
        content: 'À l\'équilibre thermique stationnaire, la puissance solaire absorbée par la Terre (disque de section $\\pi R_T^2$ recevant la constante solaire $C_0 \\approx 1361\\text{ W/m}^2$, avec un albédo moyen $A \\approx 0{,}30$) équilibre la puissance thermique totale réémise par toute la sphère terrestre ($4\\pi R_T^2$) assimilée à un corps noir à la température $T_e$ :\n$$(1 - A) C_0 \\pi R_T^2 = 4 \\pi R_T^2 \\sigma T_e^4 \\implies T_e = \\left( \\frac{(1-A)C_0}{4\\sigma} \\right)^{1/4} \\approx 255\\text{ K} \\; (-18^\\circ\\text{C})$$\nL\'effet de serre atmosphérique (absorption infrarouge par $H_2O$ et $CO_2$) réchauffe la surface pour atteindre $+15^\\circ\\text{C}$ ($288\\text{ K}$).'
      }
    ],
    piegesClassiques: [
      'Confondre la section efficace de capture du flux incident (aire du disque $\\pi R^2$) et la surface totale d\'émission du rayonnement thermique (aire de la sphère $4\\pi R^2$).',
      'Utiliser la température en degrés Celsius dans la loi de Stefan-Boltzmann au lieu des kelvins thermodynamiques ($T(K) = T(^\\circ C) + 273{,}15$).',
      'Confondre le maximum de la loi de Planck exprimé en fonction de la fréquence $\\nu$ et celui exprimé en fonction de la longueur d\'onde $\\lambda$ (car $\\mathrm{d}\\nu = -\\frac{c}{\\lambda^2}\\mathrm{d}\\lambda$, ce qui décale la position du pic).'
    ]
  },

  // ==========================================
  // CHIMIE
  // ==========================================
  {
    id: 'chimie-diagrammes-ellingham',
    slug: 'thermodynamique-chimique-diagrammes-ellingham-metallurgie',
    title: 'Thermodynamique Chimique : Diagrammes d\'Ellingham & Métallurgie',
    matiere: 'Chimie',
    filieres: ['PC', 'PSI', 'BCPST'],
    annee: '2ème année',
    description: 'Enthalpie libre standard de réaction $\\Delta_r G^\\circ(T)$, approximation d\'Ellingham, conventions d\'écriture pour 1 mole de dioxygène $O_2(g)$, tracé des droites d\'Ellingham, ruptures de pente aux changements d\'état, domaines de prédominance, ligne de Richardson, pyrométallurgie et pouvoir réducteur comparé des métaux et du carbone.',
    readTime: '25 min',
    prerequis: ['Deuxième principe de la thermodynamique', 'Enthalpie libre de Gibbs $G = H - TS$', 'Loi d\'action de masse de Guldberg et Waage'],
    keyTheorems: [
      {
        name: 'Approximation d\'Ellingham & Allure des Droites',
        statement: 'Pour la réaction standard d\'oxydation d\'un métal par une mole de dioxygène gazeux :\n$$\\frac{2x}{y} M + O_2(g) = \\frac{2}{y} M_x O_y$$\nOn suppose que $\\Delta_r H^\\circ$ et $\\Delta_r S^\\circ$ sont indépendants de la température en l\'absence de changement d\'état. L\'enthalpie libre standard d\'Ellingham est alors une fonction affine de la température $T$ :\n$$\\Delta_r G^\\circ(T) = \\Delta_r H^\\circ - T \\Delta_r S^\\circ$$\nComme la réaction consomme 1 mole de gaz ($O_2$), la variation d\'entropie standard est négative : $\\Delta_r S^\\circ \\approx -170\\text{ à } -200\\text{ J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$. La pente de la droite d\'Ellingham $-\\Delta_r S^\\circ$ est donc TOUJOURS POSITIVE.',
        astuceConcours: 'Lors d\'un changement d\'état (fusion ou vaporisation du métal ou de l\'oxyde) : $\\Delta_r G^\\circ(T)$ est continue, mais sa dérivée par rapport à $T$ subit un saut $\\Delta(\\text{pente}) = -\\Delta(\\Delta_r S^\\circ)$. Si le métal se vaporise, le désordre du côté réactif explose, donc $\\Delta_r S^\\circ$ devient encore plus négatif, et la pente augmente brusquement vers le haut.'
      },
      {
        name: 'Règle de Réduction Mutuelle (Pouvoir Réducteur)',
        statement: 'À une température $T$ donnée, un métal $M_1$ réduit l\'oxyde d\'un métal $M_2$ ($M_x O_y$) si et seulement si la droite d\'Ellingham de $M_1$ est située EN-DESSOUS de la droite d\'Ellingham de $M_2$.\n$$\\Delta_r G^\\circ = \\Delta_r G_1^\\circ - \\Delta_r G_2^\\circ < 0 \\iff \\Delta_r G_1^\\circ(T) < \\Delta_r G_2^\\circ(T)$$',
        astuceConcours: 'Le réducteur le plus fort est celui dont la droite d\'Ellingham est la plus basse (il a la plus grande affinité pour l\'oxygène). Ex : l\'aluminium réduit l\'oxyde de fer $Fe_2O_3$ (aluminothermie) car la droite de $Al/Al_2O_3$ est très basse.'
      }
    ],
    sections: [
      {
        title: '1. Pression d\'équilibre de corrosion sèche (Pression d\'Ellingham)',
        content: 'À l\'équilibre entre le métal pur solide, son oxyde pur solide et le gaz $O_2$ (activités unitaires des solides $a=1$) :\n$$K^\\circ(T) = \\frac{1}{P_{O_2}/P^\\circ} \\implies \\Delta_r G^\\circ(T) = -R T \\ln K^\\circ(T) = R T \\ln\\left( \\frac{P_{O_2, eq}}{P^\\circ} \\right)$$\n- Si $P_{O_2} > P_{O_2, eq}$ : affinité chimique $A > 0$, l\'oxydation se produit spontanément (domaine de l\'oxyde).\n- Si $P_{O_2} < P_{O_2, eq}$ : l\'oxyde se décompose spontanément en métal (domaine du métal).'
      },
      {
        title: '2. Le diagramme de Boudouard et la métallurgie du fer au haut fourneau',
        content: 'Le carbone possède trois oxydes en compétition selon la température :\n1. $C(s) + O_2(g) = CO_2(g)$ : $\\Delta \\nu_{gaz} = 0 \\implies$ pente quasi-nulle.\n2. $2 C(s) + O_2(g) = 2 CO(g)$ : $\\Delta \\nu_{gaz} = +1 \\implies \\Delta_r S^\\circ > 0$, la pente est **strictement négative** ! C\'est la seule droite qui descend quand $T$ augmente.\n3. $2 CO(g) + O_2(g) = 2 CO_2(g)$ : $\\Delta \\nu_{gaz} = -1 \\implies$ pente positive.\nAu-delà de la température d\'inversion de Boudouard ($T \\approx 710^\\circ\\text{C}$), la droite de formation de $CO$ passe en dessous de toutes les droites d\'oxydes métalliques ($Fe_2O_3, ZnO$), faisant du coke (carbone) le réducteur universel de la sidérurgie industrielle.'
      }
    ],
    piegesClassiques: [
      'Écrire l\'équation d\'oxydation sans la normaliser à UNE mole de dioxygène $O_2(g)$ (les enthalpies libres du diagramme d\'Ellingham sont toutes tabulées par mole de $O_2$).',
      'Confondre la stabilité thermodynamique et la cinétique : la réduction peut être thermodynamiquement favorisée ($\\Delta_r G^\\circ < 0$) mais infiniment lente sans activation thermique suffisante.',
      'Oublier que la droite de $C \\to 2CO$ a une pente négative (elle descend vers la droite), ce qui explique son efficacité à haute température.'
    ]
  },

  // ==========================================
  // INFORMATIQUE
  // ==========================================
  {
    id: 'info-graphes-parcours-arbres-couvrants',
    slug: 'informatique-theorie-des-graphes-parcours-arbres-couvrants',
    title: 'Informatique : Théorie des Graphes, Parcours BFS/DFS, Tri Topologique & Arbres Couvrants',
    matiere: 'Informatique',
    filieres: ['MP', 'MPI', 'PC', 'PSI'],
    annee: '1ère & 2ème année',
    description: 'Représentation mémoire des graphes (matrices et listes d\'adjacence), parcours en largeur (BFS) et plus court chemin non pondéré, parcours en profondeur (DFS) et classification des arcs, détection de cycles, tri topologique des DAG, arbres couvrants de poids minimal (Kruskal et Prim).',
    readTime: '27 min',
    prerequis: ['Structures de données linéaires (piles, files)', 'Complexité algorithmique', 'Arbres binaires'],
    keyTheorems: [
      {
        name: 'Théorème de Correction du Parcours BFS (Distances Non Pondérées)',
        statement: 'Soit $G = (V, E)$ un graphe non orienté ou orienté non pondéré et $s \\in V$ un sommet source. Le parcours en largeur (BFS) utilisant une file FIFO visite les sommets par distance croissante depuis $s$. Pour tout sommet $u \\in V$, la distance calculée $\\mathrm{dist}[u]$ correspond exactement à la longueur minimale en nombre d\'arêtes d\'un chemin reliant $s$ à $u$.\nComplexité temporelle : $\\mathcal{O}(|V| + |E|)$ avec une représentation par listes d\'adjacence.',
        demonstration: 'Démontré par récurrence sur la distance $k = d(s, u)$. L\'invariant de boucle de la file FIFO garantit que si la file contient des sommets à distance $k$ et $k+1$, tous les sommets à distance $k$ sont traités avant d\'extraire un sommet à distance $k+1$.',
        astuceConcours: 'Pour trouver le plus court chemin dans un labyrinthe ou un jeu à transitions de coût unitaire, n\'utilisez JAMAIS Dijkstra : le BFS est optimal en $\\mathcal{O}(V + E)$ sans overhead logarithmique de tas binaire.'
      },
      {
        name: 'Théorème du Tri Topologique d\'un Graphe Orienté Acyclique (DAG)',
        statement: 'Un graphe orienté $G = (V, E)$ admet un tri topologique (numérotation des sommets telle que pour tout arc $(u, v) \\in E$, on a $\\mathrm{ordre}(u) < \\mathrm{ordre}(v)$) si et seulement si $G$ est acyclique (DAG - Directed Acyclic Graph).\nL\'ordre topologique s\'obtient en temps $\\mathcal{O}(|V| + |E|)$ en triant les sommets par date de fin de visite décroissante lors d\'un parcours DFS (ou par l\'algorithme de Kahn basé sur le degré entrant).',
        astuceConcours: 'Un tri topologique n\'est jamais unique en général : pour ordonner des tâches dépendantes sans interblocage, le DFS avec inversion de la liste de fin de visite est la solution la plus concise en Python.'
      }
    ],
    sections: [
      {
        title: '1. Représentations en mémoire et comparaison de complexité',
        content: '- **Matrice d\'adjacence $A \\in \\mathcal{M}_{|V|}(\\{0, 1\\})$** : Espace $\\mathcal{O}(|V|^2)$. Test d\'existence d\'une arête $(u, v)$ en $\\mathcal{O}(1)$. Énumération des voisins d\'un sommet en $\\mathcal{O}(|V|)$. Efficace pour les graphes denses ($|E| \\approx |V|^2$).\n- **Listes d\'adjacence (`list[list[int]]`)** : Espace $\\mathcal{O}(|V| + |E|)$. Énumération des voisins de $u$ en $\\mathcal{O}(\\deg(u))$. Idéal pour les graphes creux ($|E| \\ll |V|^2$).'
      },
      {
        title: '2. Arbres Couvrants de Poids Minimal (Kruskal vs Prim)',
        content: '- **Algorithme de Kruskal** : Trie toutes les arêtes par poids croissant en $\\mathcal{O}(|E| \\log |E|)$, puis insère chaque arête si elle ne crée pas de cycle à l\'aide d\'une structure Union-Find (disjoint-set) avec compression de chemin et union par rang (complexité $\\mathcal{O}(|E| \\alpha(|V|))$).\n- **Algorithme de Prim** : Fait croître un arbre depuis un sommet arbitraire en ajoutant à chaque étape l\'arête de poids minimal connectant l\'arbre à un sommet non visité (complexité $\\mathcal{O}(|E| \\log |V|)$ avec un tas binaire).'
      }
    ],
    piegesClassiques: [
      'Oublier de marquer les sommets visités (`visited[u] = True`) DÈS l\'empilement ou l\'enfilage dans la boucle BFS, provoquant l\'insertion multiple d\'un même sommet et une explosion exponentielle de la mémoire.',
      'Croire que le tri topologique est unique : un DAG admet généralement de multiples ordres topologiques valides si des sommets sont incomparables.',
      'Confondre arête de retour (indiquant un cycle dans un DFS orienté) et arête transverse (qui ne ferme pas de cycle orienté).'
    ]
  }
];
