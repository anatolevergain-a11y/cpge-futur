import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART13: ExerciseItem[] = [
  {
    id: 'exo-100-76-thermodynamique-clausius-clapeyron-ebullition',
    title: 'Équation de Clausius-Clapeyron & Ébullition de l\'Eau en Haute Altitude',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Thermodynamique des Changements d\'État',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'On étudie l\'équilibre liquide-vapeur de l\'eau pure sous la pression de vapeur saturante $P_{sat}(T)$.\n1. Établir l\'équation différentielle de Clapeyron $\\frac{\\mathrm{d}P_{sat}}{\\mathrm{d}T} = \\frac{\\Delta_{vap} h}{T (v_g - v_l)}$.\n2. En négligeant le volume massique de l\'eau liquide devant celui de la vapeur assimilée à un gaz parfait ($v_g \\gg v_l$), intégrer l\'équation de Clausius-Clapeyron dans l\'approximation d\'une enthalpie de vaporisation constante $\\Delta_{vap} H^\\circ = 40.7\\text{ kJ/mol}$.\n3. Au sommet du Mont Blanc ($4810\\text{ m}$), la pression atmosphérique moyenne est de $P = 0.54\\text{ bar}$. Calculer la température d\'ébullition de l\'eau à cette altitude. Expliquer pourquoi la cuisson des aliments y est ralentie.',
    hints: [
      'Pour le gaz parfait, $v_g = \\frac{R T}{M P}$.',
      'Intégrer $\\frac{\\mathrm{d}P}{P} = \\frac{\\Delta_{vap} H^\\circ}{R} \\frac{\\mathrm{d}T}{T^2}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation de Clapeyron générale',
          explication: 'À l\'équilibre diphasique liquide-vapeur, les enthalpies libres massiques des deux phases sont égales : $g_l(T, P) = g_g(T, P)$. En différentiant le long de la courbe d\'équilibre :\n$$\\mathrm{d}g_l = \\mathrm{d}g_g \\implies -s_l \\mathrm{d}T + v_l \\mathrm{d}P = -s_g \\mathrm{d}T + v_g \\mathrm{d}P$$\n$$(v_g - v_l) \\mathrm{d}P = (s_g - s_l) \\mathrm{d}T = \\Delta_{vap} s \\,\\mathrm{d}T$$\nComme la transition de phase isotherme et isobare vérifie $\\Delta_{vap} s = \\frac{\\Delta_{vap} h}{T}$, on obtient la relation de Clapeyron :\n$$\\frac{\\mathrm{d}P_{sat}}{\\mathrm{d}T} = \\frac{\\Delta_{vap} h}{T (v_g - v_l)}$$'
        },
        {
          titre: '2. Formule de Clausius-Clapeyron intégrée',
          explication: 'Comme $v_l \\approx 10^{-3}\\text{ m}^3/\\text{kg}$ est négligeable devant $v_g \\approx 1.7\\text{ m}^3/\\text{kg}$ à $100^\\circ\\text{C}$, on a $v_g - v_l \\approx v_g = \\frac{R T}{M P}$. L\'équation devient :\n$$\\frac{\\mathrm{d}P_{sat}}{\\mathrm{d}T} = \\frac{\\Delta_{vap} H^\\circ P}{R T^2} \\iff \\frac{\\mathrm{d}P_{sat}}{P_{sat}} = \\frac{\\Delta_{vap} H^\\circ}{R} \\frac{\\mathrm{d}T}{T^2}$$\nEn intégrant entre $(P_0 = 1.0\\text{ bar}, T_0 = 373.15\\text{ K})$ et $(P, T)$ :\n$$\\ln\\left(\\frac{P}{P_0}\\right) = -\\frac{\\Delta_{vap} H^\\circ}{R} \\left( \\frac{1}{T} - \\frac{1}{T_0} \\right)$$'
        },
        {
          titre: '3. Température d\'ébullition au Mont Blanc',
          explication: 'Au sommet du Mont Blanc sous $P = 0.54\\text{ bar}$ :\n$$\\ln(0.54) = -\\frac{40700\\text{ J/mol}}{8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}} \\left( \\frac{1}{T} - \\frac{1}{373.15} \\right)$$\n$$-0.6162 = -4895.4 \\left( \\frac{1}{T} - 0.002680 \\right) \\implies \\frac{1}{T} - 0.002680 = \\frac{0.6162}{4895.4} \\approx 0.0001259$$\n$$\\frac{1}{T} = 0.002680 + 0.0001259 = 0.0028059\\text{ K}^{-1}$$\n$$T = \\frac{1}{0.0028059} \\approx 356.4\\text{ K} \\approx 83.2^\\circ\\text{C}$$\nÀ $4810\\text{ m}$, l\'eau bout à seulement $83^\\circ\\text{C}$ ! Comme la vitesse des réactions de dénaturation et de cuisson des aliments suit la loi d\'Arrhenius, cette baisse de température de $17^\\circ\\text{C}$ divise la vitesse des processus culinaires par environ 4 : la cuisson des féculents à l\'eau libre est considérablement ralentie, d\'où la nécessité d\'emporter un autocuiseur fermé en haute montagne.'
        }
      ],
      conclusion: 'L\'équation de Clausius-Clapeyron régit tous les équilibres liquide-vapeur et solide-vapeur (sublimation du manteau neigeux).',
      reflexeDuCorrecteur: 'L\'ébullition a lieu quand la pression de vapeur saturante $P_{sat}(T)$ égale la pression atmosphérique extérieure ambiante.'
    }
  },
  {
    id: 'exo-100-77-algebre-determinant-vandermonde-interpol',
    title: 'Déterminant de Vandermonde & Inversibilité des Systèmes d\'Interpolation Polynômiale',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Déterminants & Algèbre Linéaire',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours CCINP / Agro-Véto',
    dureeEstimeeMin: 30,
    enonce: 'Soient $x_1, x_2, \\dots, x_n$ des réels. On définit le déterminant de Vandermonde d\'ordre $n$ par :\n$$V(x_1, \\dots, x_n) = \\begin{vmatrix} 1 & x_1 & x_1^2 & \\dots & x_1^{n-1} \\\\ 1 & x_2 & x_2^2 & \\dots & x_2^{n-1} \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ 1 & x_n & x_n^2 & \\dots & x_n^{n-1} \\end{vmatrix}$$\n1. En considérant le polynôme $P(X) = V(x_1, \\dots, x_{n-1}, X)$, déterminer le degré et les racines de $P(X)$.\n2. En déduire par récurrence sur $n$ la formule produit canonique :\n$$V(x_1, \\dots, x_n) = \\prod_{1 \\le i < j \\le n} (x_j - x_i)$$\n3. Démontrer que pour toute collection de $n$ points distincts $(x_i, y_i)_{1\\le i\\le n}$, il existe un unique polynôme $P \\in \\mathbb{R}_{n-1}[X]$ tel que $\\forall i, \\; P(x_i) = y_i$ (théorème d\'interpolation de Lagrange).',
    hints: [
      'Remarquer que $P(x_i) = 0$ pour tout $i \\in \\{1, \\dots, n-1\\}$ car deux lignes du déterminant deviennent identiques.',
      'Le coefficient dominant de $P(X)$ est $V(x_1, \\dots, x_{n-1})$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Étude du polynôme $P(X)$',
          explication: 'Considérons la fonction $P(X) = V(x_1, \\dots, x_{n-1}, X)$ obtenue en remplaçant la dernière ligne par $(1, X, X^2, \\dots, X^{n-1})$.\nEn développant par rapport à la dernière ligne, $P(X)$ est une combinaison linéaire de puissances de $X$ jusqu\'à $X^{n-1}$ : c\'est un polynôme à coefficients réels de degré au plus $n-1$.\nPour chaque $i \\in \\{1, \\dots, n-1\\}$, en évaluant en $X = x_i$, la dernière ligne devient identique à la $i$-ème ligne : le déterminant est nul ($P(x_i) = 0$).\nLes $n-1$ réels deux à deux distincts $x_1, \\dots, x_{n-1}$ sont donc des racines de $P(X)$. Comme le degré est au plus $n-1$, $P(X)$ est scindé et s\'écrit :\n$$P(X) = C \\prod_{i=1}^{n-1} (X - x_i)$$\noù le coefficient dominant $C$ devant $X^{n-1}$ est le mineur associé, qui n\'est autre que $V(x_1, \\dots, x_{n-1})$.'
        },
        {
          titre: '2. Formule de récurrence et produit final',
          explication: 'En évaluant en $X = x_n$ :\n$$V(x_1, \\dots, x_n) = P(x_n) = V(x_1, \\dots, x_{n-1}) \\prod_{i=1}^{n-1} (x_n - x_i)$$\nPar récurrence immédiate à partir de $V(x_1, x_2) = x_2 - x_1$ :\n$$V(x_1, \\dots, x_n) = \\prod_{1 \\le i < j \\le n} (x_j - x_i)$$\nLe déterminant de Vandermonde est non nul si et seulement si tous les $x_i$ sont deux à deux distincts.'
        },
        {
          titre: '3. Unicité du polynôme d\'interpolation de Lagrange',
          explication: 'Considérons l\'application linéaire d\'évaluation $\\phi : \\mathbb{R}_{n-1}[X] \\to \\mathbb{R}^n$ définie par $\\phi(P) = (P(x_1), \\dots, P(x_n))$.\nDans la base canonique $(1, X, \\dots, X^{n-1})$ au départ et la base canonique à l\'arrivée, la matrice de $\\phi$ est précisément la transposée de la matrice de Vandermonde $V(x_1, \\dots, x_n)^T$.\nComme les $x_i$ sont deux à deux distincts, $\\det(\\mathrm{Mat}(\\phi)) = V(x_1, \\dots, x_n) \\neq 0$.\nL\'application $\\phi$ est un automorphisme entre espaces de même dimension $n$.\nPour tout $y = (y_1, \\dots, y_n) \\in \\mathbb{R}^n$, il existe un unique antécédent $P \\in \\mathbb{R}_{n-1}[X]$ tel que $\\phi(P) = y$.'
        }
      ],
      conclusion: 'Le déterminant de Vandermonde est l\'outil central prouvant l\'existence et l\'unicité de l\'interpolation polynomiale.',
      reflexeDuCorrecteur: 'Pour factoriser un déterminant dépendant d\'un paramètre $X$, traitez-le comme un polynôme et cherchez ses racines en créant deux lignes ou colonnes identiques.'
    }
  },
  {
    id: 'exo-100-78-loi-student-test-comparaison-moyennes',
    title: 'Loi de Student & Test $t$ de Comparaison de Deux Échantillons Biologiques',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-proba-continue',
    chapitreTitre: 'Statistique Inférentielle & Biométrie',
    filieres: ['BCPST', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / Concours Statistique',
    dureeEstimeeMin: 35,
    enonce: 'On teste l\'effet d\'un facteur de croissance sur la masse de plantules de tomate. Deux lots indépendants de plantes sont élevés dans les mêmes conditions :\n- Lot témoin : $n_1 = 10$, moyenne observée $\\bar{x}_1 = 12.0\\text{ g}$, variance sans biais $s_1^2 = 2.4\\text{ g}^2$ ;\n- Lot traité : $n_2 = 12$, moyenne observée $\\bar{x}_2 = 14.5\\text{ g}$, variance sans biais $s_2^2 = 3.0\\text{ g}^2$.\n1. En admettant l\'égalité des variances des deux populations (homoscédasticité), calculer la variance résiduelle poolée $s_p^2$ et son nombre de degrés de liberté $\\nu$.\n2. Calculer la statistique de test de Student observée $t_{obs} = \\frac{\\bar{x}_2 - \\bar{x}_1}{s_p \\sqrt{1/n_1 + 1/n_2}}$.\n3. Sachant que le quantile critique bilatéral tabulé à $\\alpha = 5\\%$ pour $\\nu = 20$ degrés de liberté est $t_{crit} = 2.086$, conclure sur l\'efficacité du facteur de croissance.',
    hints: [
      'Variance poolée : $s_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$.',
      'Degrés de liberté : $\\nu = n_1 + n_2 - 2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Estimation de la variance commune poolée',
          explication: 'Sous l\'hypothèse d\'homoscédasticité (variances égales $\\sigma_1^2 = \\sigma_2^2 = \\sigma^2$), le meilleur estimateur sans biais de $\\sigma^2$ est la moyenne pondérée des variances d\'échantillon :\n$$s_p^2 = \\frac{(n_1 - 1) s_1^2 + (n_2 - 1) s_2^2}{(n_1 - 1) + (n_2 - 1)} = \\frac{9 \\times 2.4 + 11 \\times 3.0}{9 + 11} = \\frac{21.6 + 33.0}{20} = \\frac{54.6}{20} = 2.73\\text{ g}^2$$\nLe nombre de degrés de liberté associé est $\\nu = n_1 + n_2 - 2 = 10 + 12 - 2 = 20$.'
        },
        {
          titre: '2. Calcul de la statistique de test $t_{obs}$',
          explication: 'L\'erreur standard de la différence des moyennes vaut :\n$$\\mathrm{SE} = s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}} = \\sqrt{2.73 \\times \\left( \\frac{1}{10} + \\frac{1}{12} \\right)} = \\sqrt{2.73 \\times \\left( 0.100 + 0.0833 \\right)} = \\sqrt{2.73 \\times 0.1833} \\approx \\sqrt{0.5005} \\approx 0.7075\\text{ g}$$\nLa statistique de test observée de Student s\'élève à :\n$$t_{obs} = \\frac{\\bar{x}_2 - \\bar{x}_1}{\\mathrm{SE}} = \\frac{14.5 - 12.0}{0.7075} = \\frac{2.5}{0.7075} \\approx 3.534$$'
        },
        {
          titre: '3. Règle de décision statistique et conclusion agronomique',
          explication: 'On teste l\'hypothèse nulle $H_0 : \\mu_1 = \\mu_2$ (absence d\'effet du facteur de croissance) contre l\'hypothèse alternative bilatérale $H_1 : \\mu_1 \\neq \\mu_2$.\nSous $H_0$, la statistique suit la loi de Student à $\\nu = 20$ degrés de liberté.\nComme $|t_{obs}| = 3.534 > t_{crit}(20; 0.975) = 2.086$, **on rejette l\'hypothèse nulle $H_0$ au risque $\\alpha = 5\\%$** (la $p$-valeur est même inférieure à $0.002$).\nConclusion : le facteur de croissance améliore de façon hautement significative la biomasse des plantules de tomate ($p < 0.01$).'
        }
      ],
      conclusion: 'Le test $t$ de Student est le test statistique le plus utilisé au monde en recherche biomédicale et agronomique pour comparer deux groupes expérimentaux.',
      reflexeDuCorrecteur: 'Pour tester deux moyennes sur petits échantillons normaux, n\'oubliez pas de mutualiser les variances via la formule de variance poolée à $\\nu = n_1 + n_2 - 2$ ddl.'
    }
  },
  {
    id: 'exo-100-79-induction-freinage-courants-foucault',
    title: 'Plaque Conductrice Oscillante & Freinage par Courants de Foucault',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Induction Électromagnétique & Courants de Foucault',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Un pendule est constitué d\'une plaque de cuivre pleine de masse $m$, de conductivité électrique $\\gamma$ et d\'épaisseur $e$, oscillant librement dans l\'entrefer étroit d\'un électro-aimant où règne un champ magnétique $\\vec{B} = B \\vec{u}_z$.\n1. Expliquer la naissance des boucles de courants induits (courants de Foucault) à l\'entrée et à la sortie de l\'entrefer selon la loi de modération de Lenz.\n2. Montrer que la force magnétique résultante s\'oppose toujours au mouvement de la plaque avec une force de frottement fluide $\\vec{F} = -h \\vec{v}$ proportionnelle à $B^2$.\n3. Pourquoi le pendule s\'arrête-t-il presque instantanément sans jamais rebondir ? Pourquoi remplace-t-on la plaque pleine par une plaque fendue en peigne pour éliminer ce freinage ?',
    hints: [
      'À l\'entrée, le flux augmente $\\implies$ champ induit opposé à $\\vec{B}$ (courant circulaire).',
      'Fendre la plaque allonge considérablement la résistance des boucles de courant ($i = e / R$).'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Genèse des courants de Foucault et loi de Lenz',
          explication: 'Lorsque la plaque pénètre dans l\'entrefer à vitesse $\\vec{v} = v\\vec{u}_x$, le flux magnétique embrassé augmente. D\'après la loi de modération de Lenz, le système s\'oppose à cette augmentation en créant des boucles fermées de courants induits volumiques appelés **courants de Foucault** (eddies currents).\nCes courants tourbillonnaires créent un contre-champ magnétique induit orienté en sens inverse de $\\vec{B}$.'
        },
        {
          titre: '2. Force de freinage de Lorentz',
          explication: 'D\'après la loi d\'Ohm locale $\\vec{j} = \\gamma (\\vec{E} + \\vec{v} \\wedge \\vec{B})$, le courant induit est d\'intensité proportionnelle à $\\gamma v B$. Ces courants circulent à travers le champ extérieur $\\vec{B}$ et subissent une densité volumique de force de Laplace :\n$$\\vec{f}_L = \\vec{j} \\wedge \\vec{B} \\propto (\\gamma v B) B (-\\vec{u}_x) = -\\gamma B^2 v \\vec{u}_x$$\nPar intégration sur le volume de la plaque, la résultante globale est une **force de frottement visqueux linéaire** :\n$$\\vec{F} = -h \\vec{v} \\quad \\text{avec} \\quad h = k \\gamma e S B^2$$\nLa force de freinage est proportionnelle au carré de l\'induction $B^2$ et à la vitesse $v$.'
        },
        {
          titre: '3. Amortissement apériodique et feuilletage en peigne',
          explication: '- **Amortissement hypercritique** : Dès que l\'électro-aimant est allumé, le coefficient d\'amortissement $h$ devient si gigantesque que le régime oscillatoire devient apériodique fort ($Q \\ll 1/2$) : la plaque ralentit brutalement et se fige au ralenti dans l\'entrefer sans la moindre oscillation (principe des balances de précision amorties par aimant).\n- **Plaque fendue en peigne** : Si l\'on découpe des fentes verticales dans la plaque de cuivre (peigne), les lignes de courant ne peuvent plus boucler en grands tourbillons macroscopiques. La résistance électrique équivalente des circuits ouverts explose ($R \\to +\\infty$), les courants induits sont divisés par 100 et la force de freinage disparaît : la plaque oscille librement sans être freinée. C\'est le principe universel du **feuilletage des tôles magnétiques** des transformateurs électriques pour éliminer les pertes énergétiques par courants de Foucault.'
        }
      ],
      conclusion: 'Les courants de Foucault permettent le freinage électromagnétique sans usure mécanique et le chauffage par induction des plaques de cuisson.',
      reflexeDuCorrecteur: 'Pour supprimer les courants de Foucault : découper des fentes perpendiculaires à la circulation du courant (feuilletage).'
    }
  },
  {
    id: 'exo-100-80-diagramme-phase-eau-point-triple',
    title: 'Diagramme de Phase $(P, T)$ de l\'Eau Pure & Pente Négative de Fusion',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Thermodynamique des Changements d\'État',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'On étudie le diagramme de phase $(P, T)$ de l\'eau pure.\n1. Représenter l\'allure générale du diagramme $(P, T)$ en plaçant les domaines solide, liquide et gaz, le point triple $T$ ($0.01^\\circ\\text{C}, 6.11\\text{ mbar}$) et le point critique $C$ ($374^\\circ\\text{C}, 221\\text{ bars}$).\n2. Pourquoi la courbe d\'équilibre solide-liquide (fusion) de l\'eau possède-t-elle une pente négative $\\frac{\\mathrm{d}P}{\\mathrm{d}T} < 0$, contrairement à la quasi-totalité des autres corps purs ?\n3. En déduire l\'effet d\'une augmentation de pression isotherme sur de la glace à $-2^\\circ\\text{C}$. Quel est le lien avec le patinage sur glace ?',
    hints: [
      'Clapeyron : $\\frac{\\mathrm{d}P}{\\mathrm{d}T} = \\frac{\\Delta_{fus} h}{T (v_l - v_s)}$.',
      'La glace flotte sur l\'eau liquide $\\implies v_s > v_l$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Diagramme de phase $(P, T)$',
          explication: 'Le diagramme comporte trois courbes d\'équilibre concourant au point triple $T$ ($T_T = 273.16\\text{ K} = 0.01^\\circ\\text{C}, P_T = 6.11\\text{ hPa}$) où les 3 états coexistent à variance nulle ($v = 0$) :\n- Courbe de sublimation solide-vapeur (croissante de $(0,0)$ à $T$) ;\n- Courbe de vaporisation liquide-vapeur (croissante de $T$ jusqu\'au point critique $C$ au-delà duquel le fluide est supercritique) ;\n- Courbe de fusion solide-liquide (partant de $T$ vers le haut).'
        },
        {
          titre: '2. Pente négative anormale de la courbe de fusion',
          explication: 'D\'après la formule de Clapeyron pour la fusion de la glace en eau liquide :\n$$\\frac{\\mathrm{d}P_{fus}}{\\mathrm{d}T} = \\frac{\\Delta_{fus} h}{T (v_l - v_s)}$$\nLa fusion est endothermique ($\\Delta_{fus} h > 0$).\nOr, en raison de la structure cristalline hexagonale très ouverte de la glace maintenue par des liaisons hydrogène rigides, la glace est **moins dense que l\'eau liquide** (la glace flotte sur l\'eau avec $\\rho_s \\approx 917\\text{ kg/m}^3 < \\rho_l = 1000\\text{ kg/m}^3$).\nPar conséquent, le volume massique de l\'eau liquide est inférieur à celui du solide : $v_l < v_s \\implies v_l - v_s < 0$.\nLe dénominateur de Clapeyron est donc strictement négatif, ce qui donne une **pente négative** :\n$$\\frac{\\mathrm{d}P_{fus}}{\\mathrm{d}T} < 0$$\nC\'est une anomalie thermodynamique exceptionnelle propre à l\'eau (partagée seulement avec le bismuth et l\'antimoine).'
        },
        {
          titre: '3. Conséquence : surfusion sous pression et patinage sur glace',
          explication: 'Comme la pente est négative, une élévation de pression abaisse la température de fusion de l\'eau d\'environ $0.0075^\\circ\\text{C}$ par bar. Si l\'on applique une forte pression mécanique sur de la glace maintenue à $-2^\\circ\\text{C}$, on traverse verticalement vers le haut la frontière de fusion et la glace fond spontanément en eau liquide sous pression.\nPour un patineur sur glace, la lame très mince concentre tout le poids du corps sur une surface minuscule de quelques $\\text{mm}^2$, créant une pression locale de plusieurs dizaines de bars qui abaisse le point de fusion et, combinée au frottement visqueux, génère un film microscopique d\'eau liquide lubrifiant entre la lame et la glace, assurant un glissement quasi parfait sans frottement sec.'
        }
      ],
      conclusion: 'L\'anomalie de densité de l\'eau liquide (maximum de densité à $3.98^\\circ\\text{C}$) empêche les lacs et océans de geler par le fond, préservant la vie aquatique pendant les ères glaciaires.',
      reflexeDuCorrecteur: 'Glace moins dense que l\'eau $\\iff v_l < v_s \\iff$ pente de fusion négative dans le diagramme $(P, T)$.'
    }
  }
];
