import type { ExerciseItem } from './cpgeData';

export const ULTRA_EXERCISES_PART2: ExerciseItem[] = [
  // ==========================================
  // CHIMIE (26 à 31)
  // ==========================================
  {
    id: 'exo-ultra-26-dismutation-iode-ph',
    title: 'Diagramme de Pourbaix du diiode et dismutation en milieu basique',
    matiere: 'Chimie',
    chapitreId: 'chimie-diagrammes-potentiel-ph-pourbaix',
    chapitreTitre: 'Diagrammes Potentiel-pH (Pourbaix) & Spéciation',
    filieres: ['PC', 'BCPST', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / BCPST',
    dureeEstimeeMin: 20,
    enonce: 'On donne les potentiels standards redox à $25^\\circ\\text{C}$ :\n- $E_1^\\circ(I_2/I^-) = +0{,}62\\text{ V}$\n- $E_2^\\circ(IO_3^-/I_2) = +1{,}19\\text{ V}$ (en milieu acide avec 6 électrons échangés)\n1. Écrire la demi-équation électronique du couple $IO_3^-/I_2(aq)$ et donner l\'équation de sa droite $E_2(\\text{pH})$.\n2. Déterminer le pH critique de dismutation au-delà duquel le diiode n\'est plus stable en solution et se dismute en iodure $I^-$ et iodate $IO_3^-$.\n3. Écrire la réaction de dismutation en milieu basique.',
    hints: [
      'Couple iodate/diiode : $2 IO_3^- + 12 H^+ + 10 e^- = I_2 + 6 H_2 O$.',
      'Le point de dismutation est l\'intersection $E_1 = E_2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Formule de Nernst du couple iodate/diiode',
          explication: 'Demi-équation : $2 IO_3^- + 12 H^+ + 10 e^- = I_2 + 6 H_2 O$. D\'après Nernst pour des concentrations de tracé $c_0 = 10^{-2}\\text{ M}$ :\n$$E_2 = E_2^\\circ + \\frac{0{,}059}{10} \\log\\left( \\frac{[IO_3^-]^2 [H^+]^{12}}{[I_2]} \\right) = 1{,}19 - \\frac{0{,}059 \\times 12}{10} \\text{pH} + \\frac{0{,}059}{10} \\log(c_0) = 1{,}18 - 0{,}0708\\,\\text{pH}$$'
        },
        {
          titre: '2. pH critique de dismutation',
          explication: 'Le couple $I_2/I^-$ a un potentiel indépendant du pH : $E_1 = 0{,}62 + 0{,}0295 \\log(c_0/c_0^2) = 0{,}62 + 0{,}059 = 0{,}68\\text{ V}$. L\'intersection $E_2(\\text{pH}) = E_1$ donne :\n$$1{,}18 - 0{,}0708\\,\\text{pH} = 0{,}68 \\implies 0{,}0708\\,\\text{pH} = 0{,}50 \\implies \\text{pH} \\approx 7{,}1$$\nPour $\\text{pH} > 7{,}1$, la droite $E_2$ passe sous la droite $E_1$ : le diiode est à la fois oxydant et réducteur instable.'
        },
        {
          titre: '3. Réaction de dismutation',
          explication: 'En milieu basique, le diiode brun se décolore instantanément en se dismutant selon :\n$$3 I_2 + 6 HO^- \\to 5 I^- + IO_3^- + 3 H_2 O$$'
        }
      ],
      conclusion: 'Le diiode ne peut subsister qu\'en milieu acide ($\\text{pH} < 7$) ; en milieu basique, il se décolore totalement.',
      reflexeDuCorrecteur: 'Sur un diagramme de Pourbaix, l\'inversion de l\'ordre vertical des potentiels signale toujours une dismutation.'
    }
  },
  {
    id: 'exo-ultra-27-conductance-kohlrausch-dosage',
    title: 'Loi de Kohlrausch et titrage conductimétrique d\'un acide fort et d\'un acide faible',
    matiere: 'Chimie',
    chapitreId: 'chimie-equilibres-solution-precipitation',
    chapitreTitre: 'Équilibres en Solution Aqueuse & Précipitation',
    filieres: ['PC', 'PCSI', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'CCINP PC',
    dureeEstimeeMin: 20,
    enonce: 'On titre un mélange d\'acide chlorhydrique $HCl$ et d\'acide éthanoïque $CH_3COOH$ par une solution de soude $(Na^+ + HO^-)$. On donne les conductivités molaires ioniques à $25^\\circ\\text{C}$ (en $\\text{mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$) : $\\lambda(H_3O^+) = 35{,}0$, $\\lambda(HO^-) = 19{,}9$, $\\lambda(Na^+) = 5{,}0$, $\\lambda(CH_3COO^-) = 4{,}1$, $\\lambda(Cl^-) = 7{,}6$.\n1. Énoncer la loi de Kohlrausch pour la conductivité $\\sigma$.\n2. Expliquer l\'allure de la courbe conductimétrique $\\sigma = f(V_{soude})$ en trois tronçons distincts (avant le 1er équivalent, entre le 1er et le 2nd, et après le 2nd équivalent).\n3. Pourquoi les ions $H_3O^+$ et $HO^-$ possèdent-ils des conductivités molaires ioniques anormalement élevées (mécanisme de Grotthuss) ?',
    hints: [
      'Loi de Kohlrausch : $\\sigma = \\sum \\lambda_i c_i$.',
      'Le mécanisme de Grotthuss implique des sauts de protons par liaisons hydrogène sans déplacement physique de la molécule d\'eau.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Loi de Kohlrausch',
          explication: 'Pour une solution diluée d\'électrolytes, la conductivité s\'exprime par la somme pondérée des concentrations molaires des ions présents :\n$$\\sigma = \\sum_{i} \\lambda_i [X_i]$$'
        },
        {
          titre: '2. Allure des trois segments',
          explication: '- **Avant $V_{E1}$ (neutralisation de $HCl$)** : les ions $H_3O^+$ de conductivité exceptionnelle ($35{,}0$) sont remplacés par des ions $Na^+$ de faible conductivité ($5{,}0$) à volume quasi-constant : la conductivité $\\sigma$ **chute fortement**.\n- **Entre $V_{E1}$ et $V_{E2}$ (neutralisation de $CH_3COOH$)** : les molécules neutres $CH_3COOH$ sont transformées en ions $CH_3COO^-$ ($4{,}1$) et on ajoute des $Na^+$ ($5{,}0$) : la conductivité $\\sigma$ **croît modérément**.\n- **Après $V_{E2}$ (excès de soude)** : on ajoute des ions $Na^+$ ($5{,}0$) et des ions $HO^-$ ($19{,}9$) très conducteurs : la conductivité $\\sigma$ **croît très fortement**.'
        },
        {
          titre: '3. Mécanisme de Grotthuss',
          explication: 'Dans l\'eau liquide, les ions $H_3O^+$ et $HO^-$ ne diffusent pas par simple transport hydrodynamique de sphère solide (loi de Stokes-Einstein), mais par un réseau de liaisons hydrogène où un proton "saute" quasi-instantanément d\'une molécule d\'eau à la voisine par relais de liaisons covalentes, conférant une mobilité 5 à 7 fois supérieure à celle des autres ions.'
        }
      ],
      conclusion: 'La conductimétrie permet de doser simultanément un acide fort et un acide faible sans interférence visuelle.',
      reflexeDuCorrecteur: 'Toujours associer les ruptures de pente conductimétrique au remplacement d\'un ion par un autre de conductivité différente.'
    }
  },
  {
    id: 'exo-ultra-28-condensation-aldolique-croisee',
    title: 'Aldolisation-Crotonisation croisée : Régiosélectivité et catalyse basique',
    matiere: 'Chimie',
    chapitreId: 'chimie-organique-avancee',
    chapitreTitre: 'Composés Carbonylés & Réactifs de Grignard',
    filieres: ['PC', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PC',
    dureeEstimeeMin: 20,
    enonce: 'On réalise la condensation aldolique croisée entre le benzaldéhyde $Ph-CHO$ et l\'acétone $CH_3-CO-CH_3$ en milieu basique aqueux dilué ($NaOH$).\n1. Pourquoi cette aldolisation croisée donne-t-elle un produit unique avec un excellent rendement sans mélange de quatre produits ?\n2. Écrire le mécanisme détaillé : formation de l\'énolate, addition nucléophile, protonation de l\'aldol intermédiaire, puis déshydratation (crotonisation) par le mécanisme $E1_{cb}$.\n3. Quelle est la force motrice qui favorise la déshydratation finale même à température modérée ?',
    hints: [
      'Le benzaldéhyde ne possède aucun hydrogène en position $\\alpha$ du carbonyle : il ne peut pas former d\'énolate.',
      'La déshydratation finale conduit à un système hautement conjugué aromatique-alcène-carbonyle.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Sélectivité de l\'aldolisation croisée',
          explication: 'Le benzaldéhyde $Ph-CHO$ ne possède aucun hydrogène en $\\alpha$ du carbonyle : il est incapable d\'être déprotoné pour former un ion énolate. Seule l\'acétone peut former un énolate nucléophile. De plus, la fonction aldéhyde du benzaldéhyde est beaucoup plus électrophile que le carbonyle encombré de la cétone. L\'attaque nucléophile de l\'énolate d\'acétone sur le benzaldéhyde est donc ultra-sélective.'
        },
        {
          titre: '2. Mécanisme de crotonisation $E1_{cb}$',
          explication: '1. Déprotonation en $\\alpha$ de l\'acétone par $HO^-$ : formation de l\'énolate ${}^-CH_2-CO-CH_3$.\n2. Addition nucléophile sur $Ph-CHO$ : formation de l\'alcoolate $Ph-CH(O^-)-CH_2-CO-CH_3$.\n3. Protonation par l\'eau : formation du $\\beta$-hydroxycarbonyle (aldol).\n4. Élimination $E1_{cb}$ (Base conjuguée) : la base déprotone le carbone $\\alpha$ très acide entre le $OH$ et le $C=O$ pour former un carbanion énolate stabilisé par mésomérie, puis l\'expulsion assistée du groupe partant $HO^-$ forme la double liaison trans (chalcone).'
        },
        {
          titre: '3. Force motrice',
          explication: 'Le produit final (benzylidèneacétone $Ph-CH=CH-CO-CH_3$) possède une délocalisation électronique étendue continue sur tout le cycle benzénique, la double liaison $C=C$ et le carbonyle $C=O$. Cette vaste conjugaison $\\pi$ confère une stabilité thermodynamique exceptionnelle qui déplace l\'équilibre vers la déshydratation.'
        }
      ],
      conclusion: 'La réaction de Claisen-Schmidt fournit des énones conjuguées stéréochimiquement définies trans avec un rendement quasi-quantitatif.',
      reflexeDuCorrecteur: 'Retenir que le départ d\'un groupe $HO^-$ en chimie organique ne peut avoir lieu qu\'en milieu très acide ($E1$) ou via un carbanion énolate très stabilisé ($E1_{cb}$).'
    }
  },
  {
    id: 'exo-ultra-29-polymere-carothers-nylon',
    title: 'Polycondensation du Nylon-6,6 et degré d\'avancement critique de Carothers',
    matiere: 'Chimie',
    chapitreId: 'chimie-polymeres-polymerisation',
    chapitreTitre: 'Chimie Macromoléculaire : Polymères & Polymérisations',
    filieres: ['PC', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'CCINP PC',
    dureeEstimeeMin: 20,
    enonce: 'On synthétise le Nylon-6,6 par polycondensation stœchiométrique entre l\'acide adipique (diacide carboxylique) et l\'hexaméthylènediamine (diamine).\n1. Écrire le motif répétitif du polymère et préciser la nature de la liaison formée.\n2. Établir l\'équation de Carothers reliant le degré de polymérisation moyen en nombre $\\overline{DP_n}$ à l\'avancement de la réaction $p$ pour un mélange stœchiométrique 1:1.\n3. Quel doit être le taux d\'avancement $p$ de la réaction pour obtenir un Nylon de masse molaire $\\overline{M_n} = 22{,}6\\text{ kg/mol}$ ($M_{motif} = 226\\text{ g/mol}$) ? Commenter l\'exigence sur la pureté des réactifs.',
    hints: [
      'Formule de Carothers stœchiométrique : $\\overline{DP_n} = \\frac{1}{1-p}$.',
      'Le degré de polymérisation est $\\overline{DP_n} = \\overline{M_n} / M_{motif}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Motif et liaison amide',
          explication: 'Le motif répétitif est : $-[\\mathrm{NH}-(CH_2)_6-\\mathrm{NH}-\\mathrm{CO}-(CH_2)_4-\\mathrm{CO}]_n-$. La réaction forme des liaisons amides (peptidiques) avec élimination d\'eau ($H_2O$) : c\'est un polyamide.'
        },
        {
          titre: '2. Équation de Carothers',
          explication: 'Soit $N_0$ le nombre initial de monomères bifonctionnels. Chaque molécule de polymère issue de la polycondensation possède deux extrémités. Le nombre total de macromolécules restantes après consommation d\'une fraction $p$ des fonctions réactives est $N = N_0(1-p)$. Le degré moyen de polymérisation en nombre est :\n$$\\overline{DP_n} = \\frac{N_0}{N} = \\frac{1}{1 - p}$$'
        },
        {
          titre: '3. Calcul de l\'avancement critique',
          explication: 'Le degré visé est $\\overline{DP_n} = \\frac{22600\\text{ g/mol}}{226\\text{ g/mol}} = 100$. D\'après Carothers :\n$$100 = \\frac{1}{1 - p} \\implies 1 - p = 0{,}01 \\implies p = 0{,}990 = 99{,}0\\%$$\nPour obtenir des chaînes longues possédant de bonnes propriétés mécaniques de filage, la réaction doit être poussée à plus de 99% de conversion, ce qui exige une élimination sous vide de l\'eau formée et une stœchiométrie d\'une pureté absolue (mélange sel de Nylon purifié).'
        }
      ],
      conclusion: 'En polycondensation, les hautes masses molaires n\'apparaissent qu\'au tout dernier pourcent de conversion de la réaction.',
      reflexeDuCorrecteur: 'Ne jamais confondre la polymérisation en chaîne (où les polymères longs apparaissent dès les premières secondes) et la polycondensation par étapes (Carothers).'
    }
  },
  {
    id: 'exo-ultra-30-rdm-torsion-arbre-moteur',
    title: 'Résistance des Matériaux : Torsion pure d\'un arbre de transmission circulaire',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-rdm-poutres-sollicitations',
    chapitreTitre: 'Résistance des Matériaux : Torseur de Cohésion & Sollicitations Simples',
    filieres: ['PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PSI',
    dureeEstimeeMin: 20,
    enonce: 'Un arbre de transmission cylindrique plein en acier de diamètre $d$, de longueur $L$ et de module de cisaillement $G = 80\\text{ GPa}$ transmet une puissance mécanique $\\mathcal{P} = 150\\text{ kW}$ à la vitesse de rotation $N = 1500\\text{ tr/min}$.\n1. Calculer le couple de torsion $M_t$ transmis par l\'arbre.\n2. Rappeler l\'expression du moment quadratique polaire $I_0$ d\'une section circulaire de diamètre $d$.\n3. Exprimer la contrainte de cisaillement maximale $\\tau_{max}$ en fonction de $M_t$ et $d$.\n4. Déterminer le diamètre minimal $d_{min}$ pour que la contrainte ne dépasse pas la limite élastique au glissement $R_{pg} = 120\\text{ MPa}$.',
    hints: [
      'Puissance et couple : $\\mathcal{P} = M_t \\cdot \\omega$ avec $\\omega = \\frac{2\\pi N}{60}$.',
      'Moment polaire du disque : $I_0 = \\frac{\\pi d^4}{32}$ et contrainte $\\tau(r) = \\frac{M_t}{I_0} r$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Couple de torsion',
          explication: 'La pulsation de rotation vaut $\\omega = \\frac{2\\pi \\times 1500}{60} = 50\\pi \\approx 157{,}1\\text{ rad/s}$. Le couple de torsion vaut :\n$$M_t = \\frac{\\mathcal{P}}{\\omega} = \\frac{150 \\times 10^3\\text{ W}}{157{,}1\\text{ rad/s}} \\approx 955\\text{ N}\\cdot\\text{m}$$'
        },
        {
          titre: '2. Moment polaire et contrainte maximale',
          explication: 'Pour un cylindre plein : $I_0 = \\frac{\\pi d^4}{32}$. La contrainte de cisaillement varie linéairement avec le rayon $r$ et est maximale à la périphérie ($r = d/2$) :\n$$\\tau_{max} = \\frac{M_t}{I_0} \\frac{d}{2} = \\frac{M_t}{\\frac{\\pi d^4}{32}} \\frac{d}{2} = \\frac{16 M_t}{\\pi d^3}$$'
        },
        {
          titre: '3. Dimensionnement du diamètre minimal',
          explication: 'La condition de résistance $\\tau_{max} \\le R_{pg}$ s\'écrit :\n$$\\frac{16 M_t}{\\pi d^3} \\le R_{pg} \\implies d \\ge \\left( \\frac{16 M_t}{\\pi R_{pg}} \\right)^{1/3}$$\nApplication numérique : $d \\ge \\left( \\frac{16 \\times 955}{\\pi \\times 120 \\times 10^6} \\right)^{1/3} = \\left( \\frac{15280}{3{,}77 \\times 10^8} \\right)^{1/3} = (4{,}05 \\times 10^{-5})^{1/3} \\approx 0{,}0343\\text{ m} = 34{,}3\\text{ mm}$. On choisit un arbre normalisé de diamètre $d = 35\\text{ mm}$.'
        }
      ],
      conclusion: 'Le dimensionnement d\'un arbre en torsion dépend de la racine cubique du couple transmis.',
      reflexeDuCorrecteur: 'Pour une section pleine, ne jamais confondre moment quadratique de flexion $I_{Gz} = \\frac{\\pi d^4}{64}$ et moment quadratique polaire de torsion $I_0 = 2 I_{Gz} = \\frac{\\pi d^4}{32}$.'
    }
  },
  {
    id: 'exo-ultra-31-diagramme-binaire-heteroazeotrope',
    title: 'Diagramme binaire liquide-vapeur hétéroazéotrope et hydrodistillation',
    matiere: 'Chimie',
    chapitreId: 'chimie-thermo-potentiel-chimique-binaires',
    chapitreTitre: 'Thermodynamique Chimique : Potentiel Chimique & Équilibres Binaires Liquide-Vapeur',
    filieres: ['PC', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC',
    dureeEstimeeMin: 20,
    enonce: 'On étudie le mélange de deux liquides totalement non miscibles à l\'état liquide (eau et limonène) sous la pression atmosphérique $P = 1\\text{ bar}$.\n1. Énoncer la règle des phases (variance $v$) pour l\'équilibre diphasique liquide-liquide-vapeur.\n2. Écrire la loi de Dalton reliant la pression totale $P$ aux pressions de vapeur saturante $P_1^*(T)$ et $P_2^*(T)$.\n3. En déduire pourquoi la température d\'ébullition du mélange $T_e$ est strictement inférieure aux températures d\'ébullition des deux corps purs isolés ($T_e < 100^\\circ\\text{C}$ pour l\'eau et $T_e < 176^\\circ\\text{C}$ pour le limonène). Quel est l\'intérêt fondamental de l\'hydrodistillation pour l\'extraction d\'huiles essentielles thermolabiles ?',
    hints: [
      'Comme les deux liquides ne se mélangent pas, chacun développe sa propre pression de vapeur saturante $P = P_1^*(T) + P_2^*(T)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Règle des phases (Variance)',
          explication: 'Le système comprend 2 constituants indépendants ($c = 2$) et 3 phases en présence (liquide 1, liquide 2, vapeur) : $\\phi = 3$. La variance est $v = c + 2 - \\phi = 2 + 2 - 3 = 1$. Si la pression est fixée ($P = 1\\text{ bar}$), la variance particulière est nulle ($v\' = 0$) : l\'ébullition du mélange à 3 phases se produit à une température unique rigoureusement constante (palier hétéroazéotrope).'
        },
        {
          titre: '2. Loi de Dalton des liquides non miscibles',
          explication: 'L\'activité de chaque liquide pur vaut $a_i = 1$. La pression partielle de chaque gaz dans la vapeur au-dessus du mélange est égale à sa pression de vapeur saturante pure : $P_i = P_i^*(T)$. La pression totale vérifie :\n$$P = P_1^*(T) + P_2^*(T)$$'
        },
        {
          titre: '3. Abaissement de la température d\'ébullition',
          explication: 'Comme $P_1^*(T) + P_2^*(T) = 1\\text{ bar}$, la somme des deux pressions atteint 1 bar à une température $T_e$ où ni $P_1^*$ ni $P_2^*$ n\'ont encore atteint 1 bar isolément. Par conséquent, $T_e < T_{eb1}$ et $T_e < T_{eb2}$ (typiquement vers $97^\\circ\\text{C}$). L\'hydrodistillation permet d\'évaporer et d\'extraire des molécules odorantes fragiles (huiles essentielles) à moins de $100^\\circ\\text{C}$ sans les dégrader par pyrolyse thermique.'
        }
      ],
      conclusion: 'L\'hétéroazéotropie abaisse toujours la température d\'ébullition en dessous de celle du constituant le plus volatil.',
      reflexeDuCorrecteur: 'Pour deux liquides non miscibles, ne pas utiliser la loi de Raoult ($P_i = x_i P_i^*$) mais la saturation pure $P_i = P_i^*(T)$.'
    }
  },

  // ==========================================
  // PHYSIQUE (32 à 35)
  // ==========================================
  {
    id: 'exo-ultra-32-barreau-neumann-puissance',
    title: 'Induction de Neumann : Barreau glissant sur rails de Laplace avec générateur',
    matiere: 'Physique',
    chapitreId: 'physique-circuits-oscillateurs',
    chapitreTitre: 'Circuits Électriques, Régimes Transitoires & Filtres Linéaires',
    filieres: ['PSI', 'PC', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts PSI',
    dureeEstimeeMin: 25,
    enonce: 'Un barreau conducteur rectiligne de masse $m$, de résistance $R$ et de longueur $\\ell$ glisse sans frottement sur deux rails horizontaux parallèles distants de $\\ell$, reliés à un générateur de tension continue $E_0$. Un champ magnétique uniforme stationnaire $\\vec{B} = B \\vec{u}_z$ est dirigé vers le haut.\n1. Exprimer la force de Laplace $\\vec{F}_L$ et la f.é.m induite $e(t)$ en fonction de la vitesse $v(t) = \\dot{x}$.\n2. Établir l\'équation différentielle couplée vérifiée par la vitesse $v(t)$ et déterminer la vitesse limite stationnaire $v_\\infty$.\n3. Établir le bilan de puissance électrique et mécanique complet en régime stationnaire.',
    hints: [
      'Loi de Faraday : $e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = -B \\ell v$.',
      'Le courant est $i(t) = \\frac{E_0 + e}{R} = \\frac{E_0 - B \\ell v}{R}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Force de Laplace et f.é.m de Lorentz',
          explication: 'Le flux magnétique à travers le circuit d\'abscisse $x(t)$ est $\\Phi = B \\ell x(t)$. D\'après Faraday, la f.é.m induite est $e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = -B \\ell v$. Le courant s\'écrit $i = \\frac{E_0 - B \\ell v}{R}$. La force de Laplace vaut :\n$$\\vec{F}_L = i \\vec{\\ell} \\wedge \\vec{B} = (i \\ell \\vec{y}) \\wedge (B \\vec{z}) = i \\ell B \\vec{x} = \\frac{B \\ell (E_0 - B \\ell v)}{R} \\vec{x}$$$'
        },
        {
          titre: '2. Équation du mouvement et vitesse limite',
          explication: 'D\'après le PFD appliqué au barreau : $m \\frac{\\mathrm{d}v}{\\mathrm{d}t} = \\frac{B \\ell E_0}{R} - \\frac{B^2 \\ell^2}{R} v$, soit :\n$$\\frac{\\mathrm{d}v}{\\mathrm{d}t} + \\frac{v}{\\tau} = \\frac{v_\\infty}{\\tau} \\quad \\text{avec } \\tau = \\frac{m R}{B^2 \\ell^2} \\quad \\text{et} \\quad v_\\infty = \\frac{E_0}{B \\ell}$$\nÀ la vitesse limite $v_\\infty$, la f.é.m contre-électromotrice compense exactement la tension du générateur : $e = -E_0$, le courant s\'annule ($i = 0$), et le barreau poursuit son mouvement à vitesse constante sans consommer de courant.'
        },
        {
          titre: '3. Bilan de puissance instantané',
          explication: 'En multipliant l\'équation électrique par $i$ : $E_0 i = R i^2 - e i = R i^2 + B \\ell v i = R i^2 + F_L v$. En intégrant dans le PFD $F_L v = m v \\frac{\\mathrm{d}v}{\\mathrm{d}t} = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{1}{2}mv^2 \\right)$ :\n$$\\mathcal{P}_{generateur} = E_0 i = R i^2 + \\frac{\\mathrm{d}E_c}{\\mathrm{d}t}$$\nToute la puissance fournie par le générateur se répartit entre effet Joule et accélération cinétique du barreau.'
        }
      ],
      conclusion: 'Le dispositif agit comme un moteur linéaire parfait convertissant l\'énergie électrique en énergie cinétique.',
      reflexeDuCorrecteur: 'Vérifier qu\'en régime stationnaire ($t \\to +\\infty$), le courant $i$ s\'annule et le système ne dissipe plus par effet Joule.'
    }
  },
  {
    id: 'exo-ultra-33-pression-osmotique-van-t-hoff',
    title: 'Pression osmotique et formule de Van \'t Hoff à travers une membrane semi-perméable',
    matiere: 'Physique',
    chapitreId: 'physique-thermo-principes-machines',
    chapitreTitre: 'Thermodynamique : Principes & Machines Thermiques',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 20,
    enonce: 'Une membrane semi-perméable (perméable à l\'eau mais imperméable aux solutés) sépare de l\'eau pure (1) à la pression $P_0$ et une solution diluée de glucose de concentration molaire $c$ (2) à la pression $P_0 + \\Pi$.\n1. Écrire le potentiel chimique de l\'eau liquide pure $\\mu^*(T, P)$ et celui de l\'eau dans la solution diluée de fraction molaire $x_s \\ll 1$ de soluté : $\\mu_1(T, P, x_s) \\approx \\mu^*(T, P) - R T x_s$.\n2. En égalant les potentiels chimiques à l\'équilibre osmotique à travers la membrane, établir la loi de Van \'t Hoff donnant la surpression osmotique :\n$$\\Pi = c R T$$\n3. Application : Calculer la pression osmotique du plasma sanguin à $37^\\circ\\text{C}$ ($T = 310\\text{ K}$) d\'osmolarité totale $c_{tot} = 300\\text{ mmol/L}$. Pourquoi une injection intraveineuse d\'eau pure sans sel est-elle mortelle (lyse osmotique) ?',
    hints: [
      'Différentielle du potentiel chimique par rapport à la pression : $\\left(\\frac{\\partial \\mu^*}{\\partial P}\\right)_T = V_m$ (volume molaire de l\'eau).',
      'Concentration molaire $c = x_s / V_m$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Égalité des potentiels chimiques à l\'équilibre',
          explication: 'À travers la membrane semi-perméable, seul le solvant (eau) peut s\'échanger. À l\'équilibre thermique et osmotique :\n$$\\mu^*(T, P_0) = \\mu(T, P_0 + \\Pi, x_s) = \\mu^*(T, P_0 + \\Pi) - R T x_s$$'
        },
        {
          titre: '2. Développement au premier ordre (Formule de Van \'t Hoff)',
          explication: 'Comme $\\Pi$ est modérée, on développe le potentiel chimique de l\'eau pure par rapport à la pression :\n$$\\mu^*(T, P_0 + \\Pi) = \\mu^*(T, P_0) + \\left( \\frac{\\partial \\mu^*}{\\partial P} \\right)_T \\Pi = \\mu^*(T, P_0) + V_m \\Pi$$\noù $V_m$ est le volume molaire de l\'eau liquide. En égalant : $V_m \\Pi - R T x_s = 0 \\implies \\Pi = \\frac{R T x_s}{V_m}$. Comme la concentration molaire du soluté est $c = \\frac{n_s}{V} = \\frac{x_s}{V_m}$, on obtient la loi universelle de Van \'t Hoff :\n$$\\Pi = c R T$$'
        },
        {
          titre: '3. Pression osmotique sanguine et hémolyse',
          explication: 'Pour $c = 300\\text{ mol/m}^3$ à $310\\text{ K}$ :\n$$\\Pi = (300\\text{ mol/m}^3) \\times (8{,}314\\text{ J/K/mol}) \\times (310\\text{ K}) \\approx 7{,}73 \\times 10^5\\text{ Pa} \\approx 7{,}7\\text{ bar}$$\nLa pression osmotique du sang est colossale ($7{,}7\\text{ bar}$). Si on injecte de l\'eau pure (hypotonique), l\'eau pénètre massivement dans les globules rouges par osmose jusqu\'à faire exploser leur membrane (hémolyse mortelle). C\'est pourquoi on utilise toujours un soluté isotonique salé à $0{,}9\\%\\text{ NaCl}$ (sérum physiologique).'
        }
      ],
      conclusion: 'La loi de Van \'t Hoff $\\Pi = c R T$ est formellement identique à l\'équation d\'état des gaz parfaits $P = (n/V) R T$.',
      reflexeDuCorrecteur: 'L\'osmolarité totale s\'obtient en sommant toutes les espèces dissociées ($1\\text{ mol de NaCl} \\to 2\\text{ osmoles}$).'
    }
  },
  {
    id: 'exo-ultra-34-plasma-pulsation-langmuir',
    title: 'Physique des plasmas : Modèle électronique de Lorentz et fréquence de Langmuir',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-electromagnetiques-conducteurs-peau',
    chapitreTitre: 'Ondes Électromagnétiques dans les Conducteurs & Effet de Peau',
    filieres: ['PC', 'MP', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / MP',
    dureeEstimeeMin: 20,
    enonce: 'On modélise l\'ionosphère par un gaz neutre constitué d\'un fond fixe d\'ions lourds positifs de densité $n_0$ et d\'un gaz d\'électrons de charge $-e$, masse $m$ et densité $n_0$. Tous les électrons sont globalement déplacés d\'une distance $x(t)$ le long de l\'axe $Ox$.\n1. Exprimer le champ électrostatique de rappel créé par la séparation de charge à l\'aide du théorème de Gauss.\n2. Écrire le principe fondamental de la dynamique pour un électron et établir l\'équation différentielle oscillatoire vérifiée par $x(t)$.\n3. En déduire la pulsation plasma de Langmuir $\\omega_p = \\sqrt{\\frac{n_0 e^2}{m \\varepsilon_0}}$. Calculer la fréquence de coupure $f_p$ pour $n_0 = 10^{12}\\text{ m}^{-3}$ (ionosphère terrestre). Pourquoi les ondes radio ondes courtes (HF) se réfléchissent-elles la nuit sur l\'ionosphère ?',
    hints: [
      'Le déplacement d\'une nappe d\'électrons de $x$ crée une charge surfacique $\\sigma = n_0 e x$ sur les bords.',
      'Le champ électrique résultant vaut $E = \\frac{\\sigma}{\\varepsilon_0} = \\frac{n_0 e x}{\\varepsilon_0}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Champ électrostatique induit',
          explication: 'Le déplacement collectif $x$ crée un déficit de charges négatives d\'un côté et un excès de l\'autre, équivalent à un condensateur plan portant une densité surfacique $\\sigma = n_0 e x$. Le champ électrique intérieur vaut :\n$$E = \\frac{\\sigma}{\\varepsilon_0} = \\frac{n_0 e}{\\varepsilon_0} x$$'
        },
        {
          titre: '2. Équation du mouvement',
          explication: 'Sur un électron, la force de rappel électrostatique vaut $F_x = -e E = -\\frac{n_0 e^2}{\\varepsilon_0} x$. Le PFD donne $m \\ddot{x} = -\\frac{n_0 e^2}{\\varepsilon_0} x$, soit :\n$$\\ddot{x} + \\omega_p^2 x = 0 \\quad \\text{avec } \\omega_p = \\sqrt{\\frac{n_0 e^2}{m \\varepsilon_0}}$$'
        },
        {
          titre: '3. Application à la réflexion ionosphérique',
          explication: 'Pour $n_0 = 10^{12}\\text{ m}^{-3}$ :\n$$f_p = \\frac{\\omega_p}{2\\pi} = \\frac{1}{2\\pi} \\sqrt{\\frac{10^{12} \\times (1{,}602 \\times 10^{-19})^2}{9{,}109 \\times 10^{-31} \\times 8{,}854 \\times 10^{-12}}} \\approx 9{,}0\\text{ MHz}$$\nD\'après la relation de dispersion du plasma $k^2 = \\frac{\\omega^2 - \\omega_p^2}{c^2}$ : pour toute fréquence inférieure à $f_p$ ($f < 9\\text{ MHz}$, bande décamétrique radioamateur), le vecteur d\'onde est imaginaire pur : l\'onde est totalement réfléchie comme sur un miroir métallique, permettant des liaisons radio intercontinentales par réflexions successives entre l\'ionosphère et le sol terrestre.'
        }
      ],
      conclusion: 'La pulsation plasma $\\omega_p$ sépare le domaine de transparence diélectrique haute fréquence ($f > f_p$) du domaine de réflexion métallique basse fréquence ($f < f_p$).',
      reflexeDuCorrecteur: 'Pour une onde électromagnétique dans un plasma, l\'indice optique vaut $n(\\omega) = \\sqrt{1 - \\omega_p^2/\\omega^2}$.'
    }
  },
  {
    id: 'exo-ultra-35-effet-tunnel-transmission',
    title: 'Mécanique quantique : Effet tunnel à travers une barrière de potentiel rectangulaire',
    matiere: 'Physique',
    chapitreId: 'physique-meca-quantique-puits-potentiel',
    chapitreTitre: 'Mécanique Quantique : Dualité Onde-Corpuscule & Puits de Potentiel',
    filieres: ['MP', 'PC', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'X-ENS MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'Une particule d\'énergie $E$ se propage selon l\'axe $Ox$ vers une barrière de potentiel rectangulaire de hauteur $V_0 > E$ et de largeur $a$ ($V(x) = V_0$ pour $0 \\le x \\le a$ et 0 ailleurs).\n1. Écrire la forme de la fonction d\'onde stationnaire dans les trois régions (onde incidente/réfléchie pour $x < 0$, onde évanescente pour $0 \\le x \\le a$, onde transmise pour $x > a$).\n2. Rappeler les conditions de raccordement en $x=0$ et $x=a$.\n3. Démontrer que le coefficient de transmission $T$ est non nul et décroît exponentiellement avec la largeur $a$ :\n$$T \\approx 16 \\frac{E}{V_0} \\left( 1 - \\frac{E}{V_0} \\right) e^{-2 K a} \\quad \\text{avec } K = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$$',
    hints: [
      'Dans la barrière, la fonction d\'onde est combinaison d\'exponentielles réelles : $\\psi(x) = C e^{-K x} + D e^{K x}$.',
      'Le coefficient de transmission est le rapport des densités de courant de probabilité $T = j_{trans} / j_{inc} = |t|^2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Forme de la fonction d\'onde par zones',
          explication: '- Zone 1 ($x < 0$, $V=0$) : $\\psi_1(x) = e^{i k x} + r e^{-i k x}$ avec $k = \\frac{\\sqrt{2mE}}{\\hbar}$.\n- Zone 2 ($0 \\le x \\le a$, $V=V_0 > E$) : $\\psi_2(x) = C e^{-K x} + D e^{K x}$ avec $K = \\frac{\\sqrt{2m(V_0-E)}}{\\hbar}$.\n- Zone 3 ($x > a$, $V=0$) : $\\psi_3(x) = t e^{i k x}$ (onde transmise pure).'
        },
        {
          titre: '2. Continuité aux interfaces',
          explication: 'La continuité de $\\psi$ et de $\\psi\'$ en $x=0$ et $x=a$ donne un système linéaire de 4 équations aux 4 inconnues $(r, C, D, t)$ :\n1. $1 + r = C + D$\n2. $i k (1 - r) = -K C + K D$\n3. $C e^{-Ka} + D e^{Ka} = t e^{i k a}$\n4. $-K C e^{-Ka} + K D e^{Ka} = i k t e^{i k a}$'
        },
        {
          titre: '3. Résolution et transmission',
          explication: 'Pour une barrière large ($K a \\gg 1$), la contribution $e^{Ka}$ domine l\'exponentielle décroissante. L\'inversion matricielle donne l\'expression asymptotique du coefficient de transmission en intensité :\n$$T = |t|^2 \\approx \\frac{16 k^2 K^2}{(k^2 + K^2)^2} e^{-2 K a} = 16 \\frac{E}{V_0}\\left(1 - \\frac{E}{V_0}\\right) e^{-2 K a}$$\nLa particule a une probabilité non nulle de traverser une région classiquement interdite.'
        }
      ],
      conclusion: 'L\'effet tunnel quantique est le principe de fonctionnement de la microscopie à effet tunnel (STM), de la radioactivité $\\alpha$ (loi de Gamow) et des mémoires flash.',
      reflexeDuCorrecteur: 'La sensibilité extrême du courant tunnel ($e^{-2 K a}$) permet au microscope STM de mesurer des reliefs avec une résolution atomique de $0{,}01\\text{ nm}$.'
    }
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR & INFO (36 à 50)
  // ==========================================
  {
    id: 'exo-ultra-36-schema-blocs-reduction-multiboucle',
    title: 'Réduction de schéma-blocs : Asservissement à boucles imbriquées (Cascade)',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-modelisation-slci-laplace',
    chapitreTitre: 'Modélisation des SLCI & Transformée de Laplace',
    filieres: ['PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale PSI',
    dureeEstimeeMin: 20,
    enonce: 'On considère un asservissement de position angulaire comportant deux boucles imbriquées :\n- Boucle interne (boucle de courant/couple) : régulateur $C_1(p) = K_1$, hacheur $K_h$, moteur d\'inductance $L$ et résistance $R$ ($H_1(p) = \\frac{1}{R+Lp}$) avec capteur de courant $B_1(p) = 1$.\n- Boucle externe (boucle de vitesse/position) : régulateur $C_2(p) = K_2$, inertie $J$ ($H_2(p) = \\frac{1}{J p}$), intégrateur $\\frac{1}{p}$ et capteur de position unitaire.\n1. Réduire d\'abord la boucle interne pour obtenir sa fonction de transfert en boucle fermée équivalente $F_1(p)$.\n2. En déduire la fonction de transfert en boucle ouverte (FTBO) globale de la boucle externe.\n3. Pourquoi la régulation en cascade (boucle de courant interne + boucle de position externe) est-elle universellement préférée à une régulation mono-boucle en robotique ?',
    hints: [
      'Formule de Black : $F_{BF} = \\frac{A}{1 + A B}$.',
      'La boucle interne rapide rejette instantanément les perturbations de couple et élimine l\'effet de la constante de temps électrique $L/R$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Réduction de la boucle interne',
          explication: 'La chaîne directe interne est $A_1(p) = K_1 K_h \\frac{1}{R+Lp}$. Le retour est unitaire ($B_1 = 1$). D\'après la formule de Black :\n$$F_1(p) = \\frac{A_1(p)}{1 + A_1(p)} = \\frac{\\frac{K_1 K_h}{R+Lp}}{1 + \\frac{K_1 K_h}{R+Lp}} = \\frac{K_1 K_h}{(R + K_1 K_h) + L p} = \\frac{K_{eq}}{1 + \\tau_{eq} p}$$\navec $K_{eq} = \\frac{K_1 K_h}{R + K_1 K_h} \\approx 1$ si $K_1$ est grand, et une constante de temps équivalente $\\tau_{eq} = \\frac{L}{R + K_1 K_h} \\ll \\frac{L}{R}$.'
        },
        {
          titre: '2. FTBO globale de la boucle externe',
          explication: 'La chaîne directe globale est le produit en cascade du correcteur $C_2(p)$, de la boucle interne réduite $F_1(p)$, de la constante de couple $K_m$, de l\'inertie $\\frac{1}{J p}$ et de l\'intégrateur géométrique $\\frac{1}{p}$ :\n$$FTBO_{ext}(p) = C_2(p) \\cdot F_1(p) \\cdot \\frac{K_m}{J p^2} = \\frac{K_2 K_m K_{eq}}{J p^2 (1 + \\tau_{eq} p)}$$'
        },
        {
          titre: '3. Avantage de la commande en cascade',
          explication: 'La boucle interne asservit directement le couple moteur avec une dynamique très rapide. Toute perturbation de charge ou de frottement sec est corrigée par la boucle de courant avant même qu\'elle n\'ait eu le temps de dévier la position de l\'axe. De plus, cela permet d\'écrêter facilement le courant maximal pour protéger l\'électronique de puissance.'
        }
      ],
      conclusion: 'La commande en cascade découple la gestion des grandeurs rapides (courant/couple) et des grandeurs lentes (position/trajectoire).',
      reflexeDuCorrecteur: 'Toujours réduire les schémas-blocs de l\'intérieur vers l\'extérieur (de la boucle la plus rapide vers la boucle principale).'
    }
  },
  {
    id: 'exo-ultra-37-rdm-flexion-deviee-contraintes',
    title: 'Résistance des Matériaux : Flexion déviée d\'une poutre à section dissymétrique',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-rdm-poutres-sollicitations',
    chapitreTitre: 'Résistance des Matériaux : Torseur de Cohésion & Sollicitations Simples',
    filieres: ['PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PSI',
    dureeEstimeeMin: 20,
    enonce: 'Une poutre droite de longueur $L$ subit une flexion déviée sous l\'action d\'un moment fléchissant vectoriel $\\vec{M}_f = M_{fy} \\vec{y} + M_{fz} \\vec{z}$. La section droite admet les axes $(Gy)$ et $(Gz)$ pour axes principaux d\'inertie, de moments quadratiques respectifs $I_{Gy}$ et $I_{Gz}$.\n1. Par le principe de superposition, établir la formule de Navier donnant la contrainte normale $\\sigma_x(y, z)$ en tout point de la section.\n2. Déterminer l\'équation de l\'axe neutre (ligne où la contrainte normale s\'annule $\\sigma_x = 0$).\n3. Pourquoi l\'axe neutre n\'est-il généralement pas perpendiculaire au vecteur moment fléchissant si $I_{Gy} \\neq I_{Gz}$ ?',
    hints: [
      'Formule de Navier pour chaque composante : $\\sigma_z = \\frac{M_{fz}}{I_{Gz}} y$ et $\\sigma_y = -\\frac{M_{fy}}{I_{Gy}} z$.',
      'L\'axe neutre vérifie $\\sigma_x(y, z) = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Formule de Navier en flexion déviée',
          explication: 'En appliquant la superposition linéaire des deux flexions simples autour des axes principaux d\'inertie $y$ et $z$ :\n$$\\sigma_x(y, z) = \\frac{M_{fz}}{I_{Gz}} y - \\frac{M_{fy}}{I_{Gy}} z$$'
        },
        {
          titre: '2. Équation de l\'axe neutre',
          explication: 'L\'axe neutre est le lieu des points où la matière ne subit ni traction ni compression : $\\sigma_x(y, z) = 0$, soit :\n$$\\frac{M_{fz}}{I_{Gz}} y - \\frac{M_{fy}}{I_{Gy}} z = 0 \\iff y = \\left( \\frac{I_{Gz}}{I_{Gy}} \\frac{M_{fy}}{M_{fz}} \\right) z$$\nC\'est une droite passant par le centre d\'inertie $G$ de pente $k = \\frac{I_{Gz}}{I_{Gy}} \\tan\\theta_M$ où $\\theta_M$ est l\'angle d\'inclinaison du moment fléchissant.'
        },
        {
          titre: '3. Déviation de l\'axe neutre',
          explication: 'Si la section est carrée ou circulaire ($I_{Gy} = I_{Gz}$), l\'axe neutre est orthogonal à $\\vec{M}_f$. En revanche, pour un profilé en I ou rectangulaire ($I_{Gz} \\gg I_{Gy}$), la pente de l\'axe neutre est amplifiée par le rapport d\'inertie : la poutre fléchit préférentiellement dans sa direction de plus faible rigidité.'
        }
      ],
      conclusion: 'En flexion déviée, la déformée ne s\'effectue pas dans le plan de chargement extérieur si les moments d\'inertie sont inégaux.',
      reflexeDuCorrecteur: 'Toujours exprimer les contraintes dans les axes principaux d\'inertie où le produit d\'inertie $I_{yz} = \\iint y z \\,\\mathrm{d}S$ est nul.'
    }
  },
  {
    id: 'exo-ultra-38-huffman-arbre-compression',
    title: 'Codage de Huffman : Arbre de préfixe optimal et algorithme glouton',
    matiere: 'Informatique',
    chapitreId: 'info-structures-donnees-lineaires',
    chapitreTitre: 'Structures de Données Linéaires : Piles, Files & Listes Chaînées',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'On considère l\'alphabet $\\Sigma = \\{A, B, C, D, E\\}$ avec les fréquences respectives d\'apparition : $A: 45\\%$, $B: 13\\%$, $C: 12\\%$, $D: 16\\%$, $E: 14\\%$.\n1. Construire pas à pas l\'arbre de Huffman à l\'aide d\'une file de priorité (tas min).\n2. En déduire le code binaire de chaque lettre (code préfixe sans ambiguïté).\n3. Calculer la longueur moyenne d\'un caractère encodé et comparer au codage à longueur fixe sur 3 bits ($2^3 = 8 \\ge 5$).',
    hints: [
      'À chaque étape, extrayez les deux arbres de poids minimaux, fusionnez-les sous un nouveau nœud dont le poids est la somme, et réinsérez-le dans le tas.',
      'Un code préfixe signifie qu\'aucun mot de code n\'est préfixe d\'un autre.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Fusion gloutonne des poids minimaux',
          explication: '- Étape 1 : Les deux plus petits sont $C(12)$ et $B(13) \\to$ fusion en $N_1(25)$. Poids restants : $E(14), D(16), N_1(25), A(45)$.\n- Étape 2 : Les deux plus petits sont $E(14)$ et $D(16) \\to$ fusion en $N_2(30)$. Poids restants : $N_1(25), N_2(30), A(45)$.\n- Étape 3 : Les deux plus petits sont $N_1(25)$ et $N_2(30) \\to$ fusion en $N_3(55)$. Poids restants : $A(45), N_3(55)$.\n- Étape 4 : Fusion finale de $A(45)$ et $N_3(55) \\to$ racine $(100)$.'
        },
        {
          titre: '2. Attribution des codes préfixes',
          explication: 'En attribuant 0 à gauche et 1 à droite :\n- $A$ : `0` (1 bit)\n- $N_3 \\to N_1 \\to C$ : `100` (3 bits)\n- $N_3 \\to N_1 \\to B$ : `101` (3 bits)\n- $N_3 \\to N_2 \\to E$ : `110` (3 bits)\n- $N_3 \\to N_2 \\to D$ : `111` (3 bits)'
        },
        {
          titre: '3. Longueur moyenne',
          explication: '$$L_{moy} = 0{,}45 \\times 1 + (0{,}12 + 0{,}13 + 0{,}14 + 0{,}16) \\times 3 = 0{,}45 + 0{,}55 \\times 3 = 0{,}45 + 1{,}65 = 2{,}10\\text{ bits/caractère}$$\nUn codage fixe sur 3 bits nécessiterait 3,00 bits. Le gain de compression est de $\\frac{3 - 2{,}10}{3} = 30\\%$. D\'après le théorème de Shannon, le code de Huffman est prouvé être optimal parmi tous les codes préfixes symbole par symbole.'
        }
      ],
      conclusion: 'L\'algorithme glouton de Huffman construit en temps $\\mathcal{O}(n \\log n)$ l\'arbre de préfixe de coût minimal.',
      reflexeDuCorrecteur: 'Pour implémenter Huffman, toujours utiliser le module `heapq` de Python pour extraire les deux minima en temps logarithmique.'
    }
  },
  {
    id: 'exo-ultra-39-tri-par-tas-heapsort-inplace',
    title: 'Tri par tas (HeapSort) : Entassement en temps linéaire et tri en place',
    matiere: 'Informatique',
    chapitreId: 'info-arbres-binaires-abr',
    chapitreTitre: 'Arbres Binaires & Arbres Binaires de Recherche (ABR)',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'On considère un tableau $T[0 \\dots n-1]$ que l\'on souhaite trier par l\'algorithme HeapSort en utilisant un tas-max stocké implicitement dans le tableau sans allocation mémoire supplémentaire.\n1. Rappeler les indices du parent, du fils gauche et du fils droit pour le nœud d\'indice $i$.\n2. Expliquer l\'opération `tamiser_vers_le_bas(T, i, taille)` (ou `sift_down`).\n3. Démontrer que la construction initiale du tas (`build_max_heap`) s\'exécute en temps linéaire $\\mathcal{O}(n)$ et non $\\mathcal{O}(n \\log n)$.\n4. Donner la complexité temporelle globale et la complexité spatiale auxiliaire de HeapSort.',
    hints: [
      'Fils gauche : $2i+1$ ; fils droit : $2i+2$ ; parent : $(i-1)//2$.',
      'Pour le temps linéaire de construction, écrivez la somme $\\sum_{h=0}^{\\lfloor \\log n \\rfloor} \\frac{n}{2^{h+1}} h = n \\sum \\frac{h}{2^{h+1}} = \\mathcal{O}(n)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Représentation contiguë d\'un tas binaire',
          explication: 'Pour un nœud d\'indice $i$ (indexation à 0) :\n- Fils gauche : $2i + 1$\n- Fils droit : $2i + 2$\n- Parent : $(i - 1) // 2$'
        },
        {
          titre: '2. Tamisage descendant (`sift_down`)',
          explication: 'Si un nœud viole la propriété de tas-max (plus petit que l\'un de ses fils), on l\'échange avec le plus grand de ses deux fils, puis on réitère le processus vers le bas jusqu\'à atteindre une feuille ou restaurer la condition de tas. Complexité bornée par la hauteur de l\'arbre : $\\mathcal{O}(\\log n)$.'
        },
        {
          titre: '3. Construction linéaire du tas (`build_max_heap`)',
          explication: 'On tamise tous les nœuds non-feuilles en partant de l\'indice $(n//2)-1$ jusqu\'à 0. La plupart des nœuds sont situés près des feuilles et ne descendent que de 1 ou 2 niveaux. Le nombre de nœuds à hauteur $h$ est au plus $\\lceil n/2^{h+1} \\rceil$. Le coût total est :\n$$\\sum_{h=0}^{\\lfloor \\log n \\rfloor} \\left\\lceil \\frac{n}{2^{h+1}} \\right\\rceil \\mathcal{O}(h) = \\mathcal{O}\\left( n \\sum_{h=0}^{+\\infty} \\frac{h}{2^h} \\right) = \\mathcal{O}(n)$$\ncar la série géométrique dérivée $\\sum \\frac{h}{2^h}$ converge vers 2.'
        },
        {
          titre: '4. Complexité globale de HeapSort',
          explication: 'Après la construction en $\\mathcal{O}(n)$, on échange $n-1$ fois le maximum $T[0]$ avec le dernier élément non trié $T[k]$, suivi d\'un tamisage en $\\mathcal{O}(\\log n)$. La complexité temporelle est rigoureusement $\\mathcal{O}(n \\log n)$ dans le pire des cas, et l\'espace mémoire auxiliaire est strictement $\\mathcal{O}(1)$ (tri en place optimal).'
        }
      ],
      conclusion: 'Le HeapSort allie la complexité optimale en $\\mathcal{O}(n \\log n)$ dans le pire des cas (comme MergeSort) et l\'absence totale d\'allocation mémoire (comme Quicksort).',
      reflexeDuCorrecteur: 'Ne jamais affirmer que construire un tas coûte $\\mathcal{O}(n \\log n)$ : avec un tamisage descendant depuis le bas, c\'est rigoureusement linéaire en $\\mathcal{O}(n)$.'
    }
  },
  {
    id: 'exo-ultra-40-lcs-plus-longue-sous-sequence',
    title: 'Plus Longue Sous-Séquence Commune (LCS) : Algorithme de programmation dynamique',
    matiere: 'Informatique',
    chapitreId: 'info-programmation-dynamique',
    chapitreTitre: 'Programmation Dynamique & Optimisation',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'On cherche la longueur de la plus longue sous-séquence commune à deux chaînes de caractères $X = x_1 x_2 \\dots x_m$ et $Y = y_1 y_2 \\dots y_n$ (utilisé dans la commande Unix `diff` et en bio-informatique pour l\'alignement ADN).\n1. Définir le sous-problème $L[i][j]$ pour les préfixes $X[1 \\dots i]$ et $Y[1 \\dots j]$.\n2. Établir l\'équation de récurrence de Bellman selon que $x_i = y_j$ ou $x_i \\neq y_j$.\n3. Écrire la fonction Python `lcs(X, Y)` en temps $\\mathcal{O}(m n)$. Comment reconstruire la chaîne résultante ?',
    hints: [
      'Si $x_i = y_j$, ce caractère commun allonge la sous-séquence optimale : $L[i][j] = L[i-1][j-1] + 1$.',
      'Si $x_i \\neq y_j$, le meilleur résultat provient soit d\'ignorer $x_i$, soit d\'ignorer $y_j$ : $\\max(L[i-1][j], L[i][j-1])$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation d\'optimalité de Bellman',
          explication: 'On pose $L[i][j] = \\mathrm{LCS}(X[0 \\dots i-1], Y[0 \\dots j-1])$ :\n- Si $i = 0$ ou $j = 0$ : $L[i][j] = 0$\n- Si $X[i-1] == Y[j-1]$ : $L[i][j] = L[i-1][j-1] + 1$\n- Si $X[i-1] \\neq Y[j-1]$ : $L[i][j] = \\max(L[i-1][j], \\; L[i][j-1])$'
        },
        {
          titre: '2. Code Python',
          explication: '```python\ndef lcs(X: str, Y: str) -> tuple[int, str]:\n    m, n = len(X), len(Y)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if X[i - 1] == Y[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    \n    # Reconstruction de la chaîne\n    i, j = m, n\n    res = []\n    while i > 0 and j > 0:\n        if X[i - 1] == Y[j - 1]:\n            res.append(X[i - 1])\n            i -= 1\n            j -= 1\n        elif dp[i - 1][j] >= dp[i][j - 1]:\n            i -= 1\n        else:\n            j -= 1\n    return dp[m][n], "".join(reversed(res))\n```'
        },
        {
          titre: '3. Analyse de complexité',
          explication: 'Le tableau est de dimensions $(m+1) \\times (n+1)$. Chaque case est calculée en temps $\\mathcal{O}(1)$. La complexité temporelle est $\\mathcal{O}(m \\cdot n)$ et l\'espace mémoire est $\\mathcal{O}(m \\cdot n)$ (réductible à $\\mathcal{O}(\\min(m, n))$ si seule la longueur est demandée).'
        }
      ],
      conclusion: 'La programmation dynamique résout en temps quadratique un problème dont l\'espace de recherche naïf est exponentiel en $\\mathcal{O}(2^m)$.',
      reflexeDuCorrecteur: 'Pour reconstruire la solution optimale, remonter le tableau $dp$ depuis $(m, n)$ vers $(0, 0)$.'
    }
  },
  {
    id: 'exo-ultra-41-ford-fulkerson-flot-max',
    title: 'Flot maximum et coupe minimale : Algorithme d\'Edmonds-Karp',
    matiere: 'Informatique',
    chapitreId: 'info-algorithmique-avancee',
    chapitreTitre: 'Algorithmique Avancée : Plus Courts Chemins, Programmation Dynamique & Flots',
    filieres: ['MPI', 'MP'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X-ENS MPI',
    dureeEstimeeMin: 25,
    enonce: 'On considère un réseau de transport $G = (V, E)$ de source $s$ et puits $t$ doté de capacités $c(u, v) \\ge 0$.\n1. Énoncer le théorème de flot-max / coupe-min.\n2. Définir le graphe résiduel $G_f$ et la notion de chaîne augmentante.\n3. Expliquer pourquoi l\'algorithme d\'Edmonds-Karp (qui sélectionne la chaîne augmentante la plus courte en nombre d\'arêtes via un parcours BFS) termine toujours en temps polynomial $\\mathcal{O}(V E^2)$, même avec des capacités irrationnelles.',
    hints: [
      'Une coupe $(S, T)$ partitionne les sommets avec $s \\in S$ et $t \\in T$. La capacité de la coupe est $\\sum_{u \\in S, v \\in T} c(u, v)$.',
      'Le BFS garantit que la distance de la source à chaque sommet dans le graphe résiduel est strictement croissante au fil des augmentations.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Théorème Flot-Max / Coupe-Min',
          explication: 'Pour tout réseau de transport, la valeur maximale d\'un flot compatible de $s$ à $t$ est rigoureusement égale à la capacité minimale d\'une coupe séparant $s$ de $t$ :\n$$\\max_{flot} |f| = \\min_{coupe\\,(S, T)} C(S, T)$$'
        },
        {
          titre: '2. Graphe résiduel',
          explication: 'Pour chaque arête $(u, v)$ de capacité $c$ et de flot $f$ :\n- Arête directe de capacité résiduelle $c(u, v) - f(u, v) > 0$ (flot poussable vers l\'avant).\n- Arête retour de capacité résiduelle $f(u, v) > 0$ (annulation de flot vers l\'arrière).\nUne chaîne augmentante est un chemin simple de $s$ à $t$ dans le graphe résiduel $G_f$.'
        },
        {
          titre: '3. Terminaison et complexité d\'Edmonds-Karp',
          explication: 'L\'algorithme de Ford-Fulkerson avec un DFS arbitraire peut boucler indéfiniment sans converger sur des capacités irrationnelles. Edmonds-Karp utilise un BFS pour choisir à chaque étape une chaîne augmentante ayant le nombre minimal d\'arêtes. On démontre que la distance $d(s, u)$ dans $G_f$ ne décroît jamais, et qu\'une arête devient critique au plus $|V|/2$ fois. Comme il y a $|E|$ arêtes et que chaque BFS coûte $\\mathcal{O}(E)$, la complexité totale est polynomiale en $\\mathcal{O}(|V| \\cdot |E|^2)$.'
        }
      ],
      conclusion: 'Le théorème flot-max / coupe-min est la dualité fondamentale de l\'optimisation combinatoire (analogue de la dualité linéaire de Dantzig).',
      reflexeDuCorrecteur: 'Pour obtenir la coupe minimale après convergence du flot max, il suffit de prendre l\'ensemble $S$ des sommets accessibles depuis la source $s$ dans le graphe résiduel final.'
    }
  },
  {
    id: 'exo-ultra-42-sat2-graphe-implication',
    title: 'Résolubilité de 2-SAT en temps linéaire par composantes fortement connexes (Kosaraju / Tarjan)',
    matiere: 'Informatique',
    chapitreId: 'info-automates-expressions-regulieres',
    chapitreTitre: 'Informatique Théorique : Automates Finis & Langages Réguliers',
    filieres: ['MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral ENS MPI',
    dureeEstimeeMin: 25,
    enonce: 'On considère une formule booléenne en forme normale conjonctive 2-SAT comportant $m$ clauses de 2 littéraux sur $n$ variables : $\\phi = \\bigwedge_{i=1}^m (l_{i, 1} \\lor l_{i, 2})$.\n1. Traduire chaque clause $(x \\lor y)$ en deux implications logiques équivalentes sous forme d\'arcs d\'un graphe orienté $G$ à $2n$ sommets (graphe d\'implication).\n2. Démontrer que la formule $\\phi$ est satisfaisable si et seulement si pour toute variable $x$, les littéraux $x$ et $\\neg x$ n\'appartiennent pas à la même composante fortement connexe (CFC).\n3. En déduire un algorithme en temps linéaire $\\mathcal{O}(n + m)$ pour décider de la satisfiabilité de 2-SAT et construire une affectation de vérité.',
    hints: [
      'La clause $(x \\lor y)$ est logiquement équivalente à $(\\neg x \\implies y)$ et $(\\neg y \\implies x)$.',
      'Si $x$ et $\\neg x$ sont dans la même CFC, on a à la fois $x \\implies \\neg x$ et $\\neg x \\implies x$, ce qui est une contradiction logique.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Graphe d\'implication',
          explication: 'Les sommets sont les $2n$ littéraux $\\{x_1, \\neg x_1, \\dots, x_n, \\neg x_n\\}$. Chaque clause disjonctive $(a \\lor b)$ équivaut à la contraposée de l\'une par l\'autre : $(\\neg a \\implies b)$ et $(\\neg b \\implies a)$. On ajoute ces deux arcs orientés dans $G$.'
        },
        {
          titre: '2. Critère de satisfiabilité par CFC',
          explication: '- Sens direct : Si $x$ et $\\neg x$ sont dans la même composante fortement connexe, il existe un chemin orienté de $x$ vers $\\neg x$ (donc $x \\implies \\neg x$) et un chemin de $\\neg x$ vers $x$ (donc $\\neg x \\implies x$). C\'est une contradiction logique formelle : la formule est insatisfaisable.\n- Réciproque : Si aucun littéral n\'est dans la même CFC que sa négation, on condense le graphe des CFC en un DAG (graphe acyclique). En affectant la valeur VRAI aux littéraux des CFC situées le plus en aval dans l\'ordre topologique (feuilles du DAG des CFC), on construit une affectation de vérité valide sans conflit.'
        },
        {
          titre: '3. Complexité linéaire',
          explication: 'La construction du graphe prend un temps $\\mathcal{O}(n + m)$. L\'algorithme de Tarjan ou de Kosaraju calcule l\'ensemble des composantes fortement connexes en temps linéaire $\\mathcal{O}(V + E) = \\mathcal{O}(n + m)$. La vérification de la condition prend $\\mathcal{O}(n)$. Le problème 2-SAT est donc résoluble en temps linéaire $\\mathcal{O}(n + m)$ (alors que 3-SAT est NP-complet).'
        }
      ],
      conclusion: 'La frontière de complexité entre la polynomialité (2-SAT en $\\mathcal{O}(n+m)$) et la NP-complétude (3-SAT exponentiel) est un joyau de l\'informatique théorique.',
      reflexeDuCorrecteur: 'Pour trouver une affectation vérifiante, toujours affecter VRAI au sommet qui apparaît le plus tard dans l\'ordre topologique des CFC.'
    }
  },
  {
    id: 'exo-ultra-43-automates-produit-intersection',
    title: 'Automates finis déterministes : Automate produit et clôture par intersection',
    matiere: 'Informatique',
    chapitreId: 'info-automates-expressions-regulieres',
    chapitreTitre: 'Informatique Théorique : Automates Finis & Langages Réguliers',
    filieres: ['MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MPI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $\\mathcal{A}_1 = (Q_1, \\Sigma, \\delta_1, q_{01}, F_1)$ et $\\mathcal{A}_2 = (Q_2, \\Sigma, \\delta_2, q_{02}, F_2)$ deux Automates Finis Déterministes (DFA) reconnaissant respectivement les langages réguliers $L_1$ et $L_2$.\n1. Construire l\'automate produit $\\mathcal{A}_{inter} = \\mathcal{A}_1 \\times \\mathcal{A}_2$ reconnaissant le langage intersection $L_1 \\cap L_2$.\n2. Comment modifier les états d\'acceptation finaux pour reconnaître l\'union $L_1 \\cup L_2$ et la différence symétrique $L_1 \\Delta L_2$ ?\n3. En déduire la décidabilité de l\'équivalence de deux automates ($L_1 = L_2$).',
    hints: [
      'L\'ensemble des états de l\'automate produit est le produit cartésien $Q_1 \\times Q_2$.',
      'La transition se fait composante par composante : $\\delta((p, q), a) = (\\delta_1(p, a), \\delta_2(q, a))$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Définition de l\'automate produit',
          explication: 'On pose $\\mathcal{A}_{inter} = (Q, \\Sigma, \\delta, q_0, F)$ avec :\n- États : $Q = Q_1 \\times Q_2$\n- État initial : $q_0 = (q_{01}, q_{02})$\n- Fonction de transition : $\\delta((q_1, q_2), a) = (\\delta_1(q_1, a), \\delta_2(q_2, a))$ pour tout $a \\in \\Sigma$\n- États finaux pour l\'intersection : $F_{inter} = F_1 \\times F_2 = \\{(q_1, q_2) \\mid q_1 \\in F_1 \\text{ et } q_2 \\in F_2\\}$'
        },
        {
          titre: '2. Clôture booléenne des langages réguliers',
          explication: '- Pour l\'**Union $L_1 \\cup L_2$** : $F_{union} = (F_1 \\times Q_2) \\cup (Q_1 \\times F_2) = \\{(q_1, q_2) \\mid q_1 \\in F_1 \\text{ ou } q_2 \\in F_2\\}$.\n- Pour la **Différence symétrique $L_1 \\Delta L_2$** : $F_{\\Delta} = \\{(q_1, q_2) \\mid (q_1 \\in F_1) \\oplus (q_2 \\in F_2)\\}$.\nLa classe des langages rationnels/réguliers forme donc une algèbre de Boole stable par toutes les opérations booléennes.'
        },
        {
          titre: '3. Décidabilité de l\'équivalence',
          explication: 'Deux automates sont équivalents ($L_1 = L_2$) si et seulement si leur différence symétrique est le langage vide : $L_1 \\Delta L_2 = \\emptyset$. Il suffit de construire l\'automate produit pour la différence symétrique et de tester par un simple parcours BFS/DFS si aucun état final n\'est accessible depuis l\'état initial (test de vacuité en temps linéaire $\\mathcal{O}(|Q_1| \\cdot |Q_2|)$).'
        }
      ],
      conclusion: 'La construction produit démontre la décidabilité constructive de l\'inclusion et de l\'équivalence des automates finis.',
      reflexeDuCorrecteur: 'Pour tester la vacuité d\'un automate fini, un simple parcours de graphe (BFS/DFS) depuis l\'état initial suffit.'
    }
  },
  {
    id: 'exo-ultra-44-tri-fusion-mergesort-inversions',
    title: 'Tri Fusion (MergeSort) et comptage du nombre d\'inversions d\'une permutation',
    matiere: 'Informatique',
    chapitreId: 'info-diviser-pour-regner',
    chapitreTitre: 'Algorithmes Diviser pour Régner & Master Theorem',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'On appelle inversion d\'un tableau $A[0 \\dots n-1]$ tout couple d\'indices $(i, j)$ tel que $i < j$ et $A[i] > A[j]$.\n1. Quel est le nombre maximal d\'inversions d\'un tableau de taille $n$ ?\n2. Modifier l\'étape de fusion de l\'algorithme de tri fusion (`MergeSort`) pour compter le nombre total d\'inversions du tableau en temps $\\mathcal{O}(n \\log n)$.\n3. Pourquoi l\'approche naïve en testant toutes les paires prendrait-elle un temps quadratique $\\mathcal{O}(n^2)$ ?',
    hints: [
      'Pendant la fusion de deux sous-tableaux triés $L$ et $R$, si on insère l\'élément $R[j]$ avant $L[i]$, alors $R[j]$ est plus petit que tous les éléments restants de $L$, ajoutant $\\text{len}(L) - i$ inversions.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Nombre maximal d\'inversions',
          explication: 'Le nombre maximal d\'inversions est atteint lorsque le tableau est trié dans l\'ordre strictement décroissant : chaque paire $(i, j)$ forme une inversion, soit $\\binom{n}{2} = \\frac{n(n-1)}{2} = \\Theta(n^2)$.'
        },
        {
          titre: '2. Algorithme Diviser pour Régner en $\\mathcal{O}(n \\log n)$',
          explication: '```python\ndef compter_inversions(A: list) -> tuple[list, int]:\n    if len(A) <= 1:\n        return A, 0\n    mid = len(A) // 2\n    L, inv_L = compter_inversions(A[:mid])\n    R, inv_R = compter_inversions(A[mid:])\n    \n    # Étape de fusion avec comptage\n    merged = []\n    inv_split = 0\n    i = j = 0\n    while i < len(L) and j < len(R):\n        if L[i] <= R[j]:\n            merged.append(L[i])\n            i += 1\n        else:\n            merged.append(R[j])\n            inv_split += len(L) - i  # Tous les éléments restants de L sont plus grands que R[j]\n            j += 1\n    merged.extend(L[i:])\n    merged.extend(R[j:])\n    return merged, inv_L + inv_R + inv_split\n```'
        },
        {
          titre: '3. Analyse de complexité',
          explication: 'L\'algorithme suit la récurrence classique du tri fusion : $T(n) = 2 T(n/2) + \\mathcal{O}(n)$. D\'après le Master Theorem, la complexité est $\\mathcal{O}(n \\log n)$, infiniment supérieure à l\'énumération naïve $\\binom{n}{2}$ en $\\mathcal{O}(n^2)$.'
        }
      ],
      conclusion: 'Le détournement de la fusion de MergeSort permet de mesurer le désordre ou le rang de corrélation de Kendall en temps quasi-linéaire.',
      reflexeDuCorrecteur: 'Quand $R[j] < L[i]$, ajouter d\'un coup $\\text{len}(L) - i$ inversions sans parcourir les éléments un à un.'
    }
  },
  {
    id: 'exo-ultra-45-pile-deux-files-amorti',
    title: 'Implémentation d\'une file FIFO avec deux piles LIFO et analyse amortie en $\\mathcal{O}(1)$',
    matiere: 'Informatique',
    chapitreId: 'info-structures-donnees-lineaires',
    chapitreTitre: 'Structures de Données Linéaires : Piles, Files & Listes Chaînées',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'CCINP Informatique',
    dureeEstimeeMin: 20,
    enonce: 'On souhaite simuler le comportement d\'une file FIFO (`enfiler`, `defiler`) en utilisant exclusivement deux piles LIFO $P_{in}$ et $P_{out}$.\n1. Décrire les opérations d\'insertion `enfiler(x)` et d\'extraction `defiler()`.\n2. Écrire la classe Python `FileAvecPiles`.\n3. Quel est le pire des cas pour un unique appel à `defiler()` ? Démontrer par la méthode des crédits ou du potentiel que le coût amorti de chaque opération est rigoureusement $\\mathcal{O}(1)$.',
    hints: [
      '`enfiler` empile toujours sur $P_{in}$. Pour `defiler`, si $P_{out}$ est vide, dépilez tout $P_{in}$ vers $P_{out}$ (l\'ordre s\'inverse deux fois, rétablissant le FIFO).',
      'Chaque élément est empilé une fois dans $P_{in}$, dépilé une fois vers $P_{out}$, empilé dans $P_{out}$, puis dépilé vers la sortie : au total 4 opérations par élément.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Principe de la double inversion LIFO',
          explication: '- `enfiler(x)` : on empile directement $x$ sur la pile d\'entrée $P_{in}$ en temps $\\mathcal{O}(1)$.\n- `defiler()` : si la pile de sortie $P_{out}$ n\'est pas vide, on dépile son sommet en temps $\\mathcal{O}(1)$. Si $P_{out}$ est vide, on dépile un à un tous les éléments de $P_{in}$ pour les empiler dans $P_{out}$ (ce qui inverse l\'ordre des éléments, transformant le LIFO en FIFO), puis on dépile le sommet de $P_{out}$.'
        },
        {
          titre: '2. Code Python',
          explication: '```python\nclass FileAvecPiles:\n    def __init__(self):\n        self.p_in = []\n        self.p_out = []\n\n    def enfiler(self, x):\n        self.p_in.append(x)\n\n    def defiler(self):\n        if not self.p_out:\n            if not self.p_in:\n                raise IndexError("File vide")\n            while self.p_in:\n                self.p_out.append(self.p_in.pop())\n        return self.p_out.pop()\n```'
        },
        {
          titre: '3. Analyse du coût amorti en temps $\\mathcal{O}(1)$',
          explication: 'Dans le pire des cas, une extraction particulière sur $P_{out}$ vide coûte $\\mathcal{O}(k)$ où $k = \\text{len}(P_{in})$. Cependant, chaque élément $x$ inséré subit dans toute sa vie exactement :\n1. Un push sur $P_{in}$ ;\n2. Un pop de $P_{in}$ ;\n3. Un push sur $P_{out}$ ;\n4. Un pop de $P_{out}$.\nAu total, pour $n$ opérations `enfiler` et `defiler`, le nombre cumulé d\'opérations élémentaires est au plus $4n$. Le coût amorti par opération est $\\frac{4n}{n} = 4 = \\mathcal{O}(1)$.'
        }
      ],
      conclusion: 'La méthode de transfert paresseux (lazy) garantit un coût amorti constant $\\mathcal{O}(1)$ par opération.',
      reflexeDuCorrecteur: 'Ne jamais transférer les éléments de $P_{in}$ vers $P_{out}$ tant que $P_{out}$ n\'est pas complètement vide.'
    }
  },
  {
    id: 'exo-ultra-46-sql-group-by-having-jointure',
    title: 'Bases de données SQL : Agrégation GROUP BY, filtrage HAVING et jointures multiples',
    matiere: 'Informatique',
    chapitreId: 'info-bases-donnees-sql',
    chapitreTitre: 'Bases de Données Relationnelles & Requêtes SQL',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'CCINP Informatique',
    dureeEstimeeMin: 20,
    enonce: 'On dispose d\'une base relationnelle pour une université :\n- `Etudiant(id_etu, nom, prenom, filiere)`\n- `Examen(id_exam, matiere, coefficient)`\n- `Note(id_etu, id_exam, note)`\n1. Écrire une requête SQL calculant la moyenne générale pondérée de chaque étudiant de la filière `\'MP\'`.\n2. Filtrer pour ne conserver que les étudiants ayant une moyenne strictement supérieure à 12/20.\n3. Expliquer la différence sémantique fondamentale entre la clause `WHERE` et la clause `HAVING`.',
    hints: [
      'La moyenne pondérée est `SUM(Note.note * Examen.coefficient) / SUM(Examen.coefficient)`.',
      '`WHERE` filtre les lignes avant le regroupement ; `HAVING` filtre les groupes après agrégation.'
    ],
    correction: {
      etapes: [
        {
          titre: '1 & 2. Requête SQL complète',
          explication: '```sql\nSELECT \n    Etudiant.id_etu,\n    Etudiant.nom,\n    Etudiant.prenom,\n    SUM(Note.note * Examen.coefficient) * 1.0 / SUM(Examen.coefficient) AS moyenne_generale\nFROM Etudiant\nJOIN Note ON Etudiant.id_etu = Note.id_etu\nJOIN Examen ON Note.id_exam = Examen.id_exam\nWHERE Etudiant.filiere = \'MP\'\nGROUP BY Etudiant.id_etu, Etudiant.nom, Etudiant.prenom\nHAVING SUM(Note.note * Examen.coefficient) * 1.0 / SUM(Examen.coefficient) > 12.0\nORDER BY moyenne_generale DESC;\n```'
        },
        {
          titre: '3. Différence entre WHERE et HAVING',
          explication: '- `WHERE` s\'exécute **avant** l\'étape d\'agrégation `GROUP BY` : il filtre ligne par ligne sur les attributs des tables de base (ex: `WHERE Etudiant.filiere = \'MP\'`). Il ne peut JAMAIS contenir de fonction d\'agrégation (`SUM`, `AVG`, `COUNT`).\n- `HAVING` s\'exécute **après** le regroupement `GROUP BY` : il filtre les groupes consolidés selon une condition sur une fonction d\'agrégation (ex: `HAVING AVG(note) > 12`).'
        }
      ],
      conclusion: 'La séquence logique d\'exécution SQL est : FROM $\\to$ JOIN $\\to$ WHERE $\\to$ GROUP BY $\\to$ HAVING $\\to$ SELECT $\\to$ ORDER BY.',
      reflexeDuCorrecteur: 'Dans un GROUP BY, toutes les colonnes sélectionnées dans le SELECT qui ne sont pas sous une fonction d\'agrégation doivent impérativement figurer dans le GROUP BY.'
    }
  },
  {
    id: 'exo-ultra-47-bellman-ford-cycle-negatif',
    title: 'Algorithme de Bellman-Ford : Poids négatifs et détection de cycle absorbant',
    matiere: 'Informatique',
    chapitreId: 'info-algorithmique-avancee',
    chapitreTitre: 'Algorithmique Avancée : Plus Courts Chemins, Programmation Dynamique & Flots',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $G = (V, E)$ un graphe orienté pondéré pouvant contenir des poids d\'arêtes négatifs mais sans cycle de poids strictement négatif accessible depuis la source $s$.\n1. Énoncer l\'algorithme de Bellman-Ford : pourquoi suffit-il d\'effectuer $|V| - 1$ itérations de relâchement de toutes les arêtes ?\n2. Comment modifier l\'algorithme pour détecter la présence d\'un cycle absorbant (cycle négatif) ?\n3. Donner la complexité temporelle et spatiale de Bellman-Ford.',
    hints: [
      'Un plus court chemin simple sans cycle contient au plus $|V| - 1$ arêtes.',
      'Si une $|V|$-ième itération de relâchement diminue encore une distance, un cycle absorbant existe.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Nombre d\'itérations $|V| - 1$',
          explication: 'S\'il n\'y a pas de cycle négatif, il existe toujours un plus court chemin qui est simple (sans sommet répété). Un chemin simple reliant $s$ à $u$ comporte au maximum $|V| - 1$ arêtes. À la $k$-ième passe de relâchement de toutes les arêtes de $E$, les distances des plus courts chemins ayant au plus $k$ arêtes sont exactement calculées. Après $|V| - 1$ passes, toutes les distances sont optimales.'
        },
        {
          titre: '2. Détection de cycle absorbant',
          explication: 'On effectue une $|V|$-ième passe de relaxation : si pour une arête $(u, v) \\in E$, on constate que $d[u] + w(u, v) < d[v]$, cela prouve qu\'en tournant dans un cycle, la distance décroît strictement : il existe un cycle de poids négatif (cycle absorbant).'
        },
        {
          titre: '3. Complexité',
          explication: 'Chaque passe parcourt l\'ensemble des $|E|$ arêtes en temps $\\mathcal{O}(|E|)$. Il y a $|V|$ passes. La complexité temporelle est $\\mathcal{O}(|V| \\cdot |E|)$, et la mémoire est $\\mathcal{O}(|V|)$ pour le tableau des distances.'
        }
      ],
      conclusion: 'Bellman-Ford résout les plus courts chemins avec poids quelconques et permet de détecter les arbitrages financiers (cycles multiplicateurs négatifs).',
      reflexeDuCorrecteur: 'Pour détecter les opportunités d\'arbitrage de devises avec des taux de change $R_{ij}$, poser les poids $w(i, j) = -\\ln(R_{ij})$.'
    }
  },
  {
    id: 'exo-ultra-48-flot-coupe-bipartite-matching',
    title: 'Couplage maximal dans un graphe biparti par réduction au problème de flot maximal',
    matiere: 'Informatique',
    chapitreId: 'info-graphes-parcours-arbres-couvrants',
    chapitreTitre: 'Informatique : Théorie des Graphes, Parcours BFS/DFS, Tri Topologique & Arbres Couvrants',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Oral ENS MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $G = (U \\cup V, E)$ un graphe biparti. On cherche un couplage de cardinal maximal (ensemble maximal d\'arêtes deux à deux disjointes).\n1. Construire le réseau de transport orienté équivalent $G\'$ en ajoutant une source $s$, un puits $t$ et des capacités unitaires.\n2. Démontrer le théorème d\'intégralité : pour des capacités entières, il existe un flot maximal entier.\n3. En déduire la réduction du problème du couplage maximal biparti au calcul d\'un flot max.',
    hints: [
      'Reliez $s$ à chaque sommet de $U$ par un arc de capacité 1. Orientez les arêtes de $U$ vers $V$ avec capacité 1. Reliez chaque sommet de $V$ à $t$ par un arc de capacité 1.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Construction du réseau de transport',
          explication: 'On crée une source $s$ et un puits $t$ :\n- Pour tout $u \\in U$, on crée un arc orienté $s \\to u$ de capacité $c(s, u) = 1$.\n- Pour toute arête $(u, v) \\in E$ avec $u \\in U$ et $v \\in V$, on crée l\'arc $u \\to v$ de capacité $c(u, v) = 1$.\n- Pour tout $v \\in V$, on crée un arc $v \\to t$ de capacité $c(v, t) = 1$.'
        },
        {
          titre: '2. Théorème d\'intégralité de Ford-Fulkerson',
          explication: 'Comme toutes les capacités du réseau sont des entiers (ici 1), l\'algorithme de Ford-Fulkerson ou d\'Edmonds-Karp augmente le flot par incréments entiers à chaque chaîne. Le flot maximal résultant $f(e)$ est donc à valeurs entières dans $\\{0, 1\\}$ sur chaque arc.'
        },
        {
          titre: '3. Correspondance bijective avec un couplage',
          explication: 'Comme la capacité sortant de $s$ vers $u$ vaut 1, au plus une arête sortant de $u$ peut porter un flot de 1. De même, au plus une arête entrant dans $v$ porte un flot de 1. L\'ensemble des arêtes $(u, v)$ portant un flot $f(u, v) = 1$ forme donc un couplage valide. La valeur du flot égale la taille du couplage, garantissant son optimalité.'
        }
      ],
      conclusion: 'Le théorème de König-Hall découle directement de la réduction de couplage au flot max.',
      reflexeDuCorrecteur: 'Pour borner chaque sommet à être utilisé au plus une fois, fixer la capacité de son arc incident à 1.'
    }
  },
  {
    id: 'exo-ultra-49-algorithme-kadane-sous-tableau-maximal',
    title: 'Algorithme de Kadane : Sous-tableau de somme maximale en temps linéaire $\\mathcal{O}(n)$',
    matiere: 'Informatique',
    chapitreId: 'info-programmation-dynamique',
    chapitreTitre: 'Programmation Dynamique & Optimisation',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '1ère année',
    difficulte: 1,
    origin: 'CCINP MP / MPI',
    dureeEstimeeMin: 15,
    enonce: 'On considère un tableau d\'entiers relatifs $A = [a_0, a_1, \\dots, a_{n-1}]$. On cherche un intervalle contigu $[i, j]$ maximisant la somme $\\sum_{k=i}^j a_k$.\n1. Expliquer pourquoi la recherche naïve par force brute coûte un temps $\\mathcal{O}(n^3)$ ou $\\mathcal{O}(n^2)$.\n2. Énoncer le principe de programmation dynamique de Kadane en définissant $max\\_terminant\\_en(i)$.\n3. Écrire la fonction Python `kadane(A)` en temps $\\mathcal{O}(n)$ et espace mémoire $\\mathcal{O}(1)$.',
    hints: [
      'À l\'indice $i$, soit on prolonge le sous-tableau précédent ($max\\_local + A[i]$), soit on redémarre un nouveau sous-tableau à partir de $A[i]$ : $max\\_local = \\max(A[i], max\\_local + A[i])$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Échec des approches naïves',
          explication: 'Tester toutes les paires d\'indices $(i, j)$ ($\\|i, j\\| = \\Theta(n^2)$) et sommer les éléments en $\\mathcal{O}(n)$ prend un temps $\\mathcal{O}(n^3)$. Avec des sommes préfixes, cela prend $\\mathcal{O}(n^2)$, trop lent pour $n = 10^6$.'
        },
        {
          titre: '2. Principe de Kadane',
          explication: 'Soit $M[i]$ la somme maximale d\'un sous-tableau se terminant exactement à l\'indice $i$. La sous-structure optimale vérifie la récurrence immédiate :\n$$M[i] = \\max(A[i], \\; M[i-1] + A[i])$$\nSi la somme accumulée devient négative ($M[i-1] < 0$), il est toujours préférable de l\'abandonner et de repartir de zéro avec le terme $A[i]$.'
        },
        {
          titre: '3. Implémentation en temps linéaire et mémoire constante',
          explication: '```python\ndef kadane(A: list[int]) -> int:\n    if not A:\n        return 0\n    max_global = max_local = A[0]\n    for x in A[1:]:\n        max_local = max(x, max_local + x)\n        max_global = max(max_global, max_local)\n    return max_global\n```\nL\'algorithme n\'effectue qu\'une unique passe sur la liste : temps $\\mathcal{O}(n)$ et espace $\\mathcal{O}(1)$.'
        }
      ],
      conclusion: 'L\'algorithme de Kadane est l\'un des plus célèbres exemples d\'optimisation dynamique réduisant une complexité quadratique en un temps strictement linéaire.',
      reflexeDuCorrecteur: 'Initialiser `max_global` et `max_local` avec $A[0]$ (et non avec 0) pour gérer correctement les tableaux contenant uniquement des nombres négatifs.'
    }
  },
  {
    id: 'exo-ultra-50-coloration-graphes-welsh-powell',
    title: 'Coloration de graphes : Nombre chromatique $\\chi(G)$ et algorithme glouton de Welsh-Powell',
    matiere: 'Informatique',
    chapitreId: 'info-graphes-parcours-arbres-couvrants',
    chapitreTitre: 'Informatique : Théorie des Graphes, Parcours BFS/DFS, Tri Topologique & Arbres Couvrants',
    filieres: ['MP', 'MPI', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'On s\'intéresse au problème de la coloration des sommets d\'un graphe $G = (V, E)$ sans que deux sommets adjacents ne partagent la même couleur (problème d\'allocation de registres en compilation ou d\'emploi du temps).\n1. Définir le nombre chromatique $\\chi(G)$. Montrer que $\\chi(G) \\le \\Delta(G) + 1$ où $\\Delta(G)$ est le degré maximal d\'un sommet.\n2. Décrire l\'algorithme glouton de Welsh-Powell qui trie les sommets par degré décroissant.\n3. Donner un exemple où l\'algorithme glouton n\'atteint pas le nombre chromatique optimal $\\chi(G)$.',
    hints: [
      'Pour le 1, montrez qu\'un algorithme glouton n\'utilise au pire que $\\Delta(G) + 1$ couleurs car chaque sommet a au plus $\\Delta(G)$ voisins.',
      'Pour le 3, considérez la couronne (graphe biparti $K_{n, n}$ privé d\'un couplage parfait).'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Nombre chromatique et borne de degré',
          explication: 'Le nombre chromatique $\\chi(G)$ est le nombre minimal de couleurs nécessaires pour colorier $G$. Tout sommet possède au plus $\\Delta(G)$ voisins. Dans un parcours glouton séquentiel, lorsque l\'on colorie un sommet, ses voisins ont utilisé au plus $\\Delta(G)$ couleurs distinctes. Il reste donc toujours au moins une couleur disponible dans l\'ensemble $\\{1, \\dots, \\Delta(G) + 1\\}$. Par conséquent :\n$$\\chi(G) \\le \\Delta(G) + 1$$'
        },
        {
          titre: '2. Algorithme de Welsh-Powell',
          explication: '1. Calculer le degré de chaque sommet et trier les sommets par ordre de degré décroissant : $d(v_1) \\ge d(v_2) \\ge \\dots \\ge d(v_n)$.\n2. Choisir la première couleur disponible, l\'attribuer au premier sommet non coloré de la liste, puis parcourir la liste et attribuer cette même couleur à tout sommet non coloré qui n\'est adjacent à AUCUN des sommets déjà peints avec cette couleur.\n3. Répéter avec une nouvelle couleur pour les sommets restants jusqu\'à coloration complète.'
        },
        {
          titre: '3. Sous-optimalité de l\'heuristique gloutonne',
          explication: 'Le problème de la coloration optimale est NP-complet. L\'heuristique de Welsh-Powell est une approximation qui peut surévaluer le nombre chromatique. Par exemple, sur le cycle à 6 sommets $C_6$ ($K_{3, 3}$ incomplet), un mauvais ordre de coloration gloutonne peut requérir 3 couleurs alors que le graphe est biparti et ne nécessite que $\\chi(C_6) = 2$ couleurs.'
        }
      ],
      conclusion: 'La coloration de graphes par Welsh-Powell ou par l\'algorithme de Chaitin est le cœur des optimiseurs d\'allocation de registres dans les compilateurs modernes (GCC, LLVM).',
      reflexeDuCorrecteur: 'Un graphe est 2-coloriable si et seulement s\'il est biparti (sans cycle de longueur impaire).'
    }
  }
];
