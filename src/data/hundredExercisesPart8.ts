import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART8: ExerciseItem[] = [
  {
    id: 'exo-100-51-inversion-locale-diff',
    title: 'Théorème d\'Inversion Locale & Difféomorphisme Polaire',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Calcul Différentiel',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / Centrale PC',
    dureeEstimeeMin: 35,
    enonce: 'On considère l\'application de passage en coordonnées polaires $\\Phi : U = ]0, +\\infty[ \\times ]-\\pi, \\pi[ \\to \\mathbb{R}^2$ définie par $\\Phi(r, \\theta) = (r\\cos\\theta, r\\sin\\theta)$.\n1. Écrire la matrice jacobienne $J_\\Phi(r, \\theta)$ et calculer son déterminant jacobien.\n2. Montrer que $\\Phi$ est un $\\mathcal{C}^1$-difféomorphisme de $U$ sur son image $V = \\mathbb{R}^2 \\setminus (\\mathbb{R}^- \\times \\{0\\})$.\n3. Déterminer la matrice jacobienne de la réciproque $\\Phi^{-1}$ en un point $(x, y) \\in V$.',
    hints: [
      'Le déterminant jacobien vaut $r$.',
      'Matrice jacobienne inverse : $J_{\\Phi^{-1}}(x, y) = [J_\\Phi(r, \\theta)]^{-1}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Matrice jacobienne et jacobien',
          explication: 'La différentielle de $\\Phi$ est représentée par la matrice des dérivées partielles :\n$$J_\\Phi(r, \\theta) = \\begin{pmatrix} \\frac{\\partial x}{\\partial r} & \\frac{\\partial x}{\\partial \\theta} \\\\ \\frac{\\partial y}{\\partial r} & \\frac{\\partial y}{\\partial \\theta} \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{pmatrix}$$\nLe déterminant jacobien vaut :\n$$\\det(J_\\Phi) = r\\cos^2\\theta - (-r\\sin^2\\theta) = r(\\cos^2\\theta + \\sin^2\\theta) = r > 0$$\nComme $r > 0$ sur $U$, le jacobien ne s\'annule jamais : la différentielle $\\mathrm{d}\\Phi(r, \\theta)$ est un isomorphisme en tout point.'
        },
        {
          titre: '2. Difféomorphisme global',
          explication: '- $\\Phi$ est de classe $\\mathcal{C}^\\infty$ sur $U$.\n- $\\Phi$ est injective : si $(r_1\\cos\\theta_1, r_1\\sin\\theta_1) = (r_2\\cos\\theta_2, r_2\\sin\\theta_2)$, en prenant la norme euclidienne $r_1 = \\sqrt{x^2+y^2} = r_2$. Puis $\\cos\\theta_1 = \\cos\\theta_2$ et $\\sin\\theta_1 = \\sin\\theta_2$, ce qui impose $\\theta_1 = \\theta_2$ sur l\'intervalle $]-\\pi, \\pi[$.\n- Image $V$ : l\'image est le plan privé du demi-axe des réels négatifs ou nuls (la demi-droite $\\{y = 0, x \\le 0\\}$ correspond à $\\theta = \\pm \\pi$).\nD\'après le théorème d\'inversion locale globale, $\\Phi$ est un $\\mathcal{C}^1$-difféomorphisme de $U$ sur $V$.'
        },
        {
          titre: '3. Différentielle de la bijection réciproque',
          explication: 'D\'après la règle de dérivation des bijections réciproques :\n$$J_{\\Phi^{-1}}(x, y) = [J_\\Phi(r, \\theta)]^{-1} = \\frac{1}{r} \\begin{pmatrix} r\\cos\\theta & r\\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix} = \\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\frac{\\sin\\theta}{r} & \\frac{\\cos\\theta}{r} \\end{pmatrix} = \\begin{pmatrix} \\frac{x}{\\sqrt{x^2+y^2}} & \\frac{y}{\\sqrt{x^2+y^2}} \\\\ -\\frac{y}{x^2+y^2} & \\frac{x}{x^2+y^2} \\end{pmatrix}$$'
        }
      ],
      conclusion: 'Le jacobien $r$ apparaît naturellement dans les intégrales doubles lors du changement de variables en coordonnées polaires $\\mathrm{d}x\\mathrm{d}y = r\\,\\mathrm{d}r\\mathrm{d}\\theta$.',
      reflexeDuCorrecteur: 'Pour inverser une matrice $2\\times 2$, transposez la comatrice et divisez par le déterminant.'
    }
  },
  {
    id: 'exo-100-52-loi-poisson-processus-comptage',
    title: 'Processus de Poisson Homogène & Propriété d\'Indépendance des Accroissements',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-proba-continue',
    chapitreTitre: 'Processus Stochastiques & Biostatistique',
    filieres: ['BCPST', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / Concours Statistique',
    dureeEstimeeMin: 35,
    enonce: 'On modélise l\'arrivée de mutations génétiques au cours du temps par un processus de comptage $(N_t)_{t\\ge 0}$ de taux constant $\\lambda > 0$.\n1. Rappeler les axiomes d\'un processus de Poisson de taux $\\lambda$.\n2. En notant $p_k(t) = P(N_t = k)$, établir l\'équation différentielle vérifiée par $p_0(t)$ et montrer que $p_0(t) = e^{-\\lambda t}$.\n3. Démontrer par récurrence que pour tout $k \\in \\mathbb{N}$, $p_k(t) = \\frac{(\\lambda t)^k}{k!} e^{-\\lambda t}$ (loi de Poisson de paramètre $\\lambda t$).\n4. Déterminer la loi de la durée d\'attente $T_1$ avant la première mutation.',
    hints: [
      'Pour $\\mathrm{d}t \\to 0$, $P(N_{t+\\mathrm{d}t} - N_t = 1) = \\lambda \\mathrm{d}t + o(\\mathrm{d}t)$ et $P(\\ge 2) = o(\\mathrm{d}t)$.',
      '$P(T_1 > t) = P(N_t = 0)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Axiomes du processus de Poisson',
          explication: '1. $N_0 = 0$ presque sûrement.\n2. Accroissements indépendants : pour tout $0 \\le t_1 < t_2 < \\dots < t_k$, les variables $N_{t_2} - N_{t_1}, \\dots, N_{t_k} - N_{t_{k-1}}$ sont mutuellement indépendantes.\n3. Stationnarité et infinitésimalité : $P(N_{t+h} - N_t = 1) = \\lambda h + o(h)$ et $P(N_{t+h} - N_t \\ge 2) = o(h)$ quand $h \\to 0$.'
        },
        {
          titre: '2. Équation différentielle pour $p_0(t)$',
          explication: 'Par indépendance des accroissements :\n$$p_0(t + h) = P(N_{t+h} = 0) = P(N_t = 0 \\cap N_{t+h} - N_t = 0) = P(N_t = 0) P(N_h = 0) = p_0(t) (1 - \\lambda h + o(h))$$\nEn réarrangeant :\n$$\\frac{p_0(t+h) - p_0(t)}{h} = -\\lambda p_0(t) + o(1) \\implies p_0\'(t) = -\\lambda p_0(t)$$\nComme $N_0 = 0 \\implies p_0(0) = 1$, l\'unique solution est :\n$$p_0(t) = e^{-\\lambda t}$$'
        },
        {
          titre: '3. Système différentiel et récurrence',
          explication: 'Pour $k \\ge 1$, l\'événement $\{N_{t+h} = k\}$ se décompose en :\n- $\{N_t = k \\cap N_{t+h} - N_t = 0\}$ avec probabilité $p_k(t)(1 - \\lambda h)$ ;\n- $\{N_t = k-1 \\cap N_{t+h} - N_t = 1\}$ avec probabilité $p_{k-1}(t)(\\lambda h)$ ;\n- les événements à 2 sauts ou plus sont en $o(h)$.\nOn obtient le système différentiel de Poisson :\n$$p_k\'(t) = -\\lambda p_k(t) + \\lambda p_{k-1}(t)$$\nEn multipliant par le facteur intégrant $e^{\\lambda t}$ : $\\frac{\\mathrm{d}}{\\mathrm{d}t}\\big( e^{\\lambda t} p_k(t) \\big) = \\lambda e^{\\lambda t} p_{k-1}(t)$.\nPar récurrence immédiate avec $p_0(t) = e^{-\\lambda t}$, on intègre par cascades successives de monômes $t^k/k!$ :\n$$p_k(t) = \\frac{(\\lambda t)^k}{k!} e^{-\\lambda t}$$\nLa variable $N_t$ suit donc rigoureusement la loi de Poisson $\\mathcal{P}(\\lambda t)$.'
        },
        {
          titre: '4. Temps d\'attente avant le premier événement',
          explication: 'Le premier événement survient après l\'instant $t$ si et seulement si aucun événement ne s\'est produit sur $[0, t]$ :\n$$P(T_1 > t) = P(N_t = 0) = e^{-\\lambda t}$$\nLa fonction de répartition est $F_{T_1}(t) = 1 - e^{-\\lambda t}$ pour $t \\ge 0$ : la durée d\'attente $T_1$ suit la **loi exponentielle** $\\mathcal{E}(\\lambda)$ de moyenne $1/\\lambda$.'
        }
      ],
      conclusion: 'Le processus de Poisson est le pont fondamental entre probabilités discrètes (loi de Poisson) et probabilités continues (loi exponentielle et loi Gamma).',
      reflexeDuCorrecteur: 'Retenez l\'équivalence vitale : "aucun événement avant $t$" $\\iff$ $\{N_t = 0\} \\iff \\{T_1 > t\\}$.'
    }
  },
  {
    id: 'exo-100-53-ondes-electromagnetiques-poynting-cable',
    title: 'Vecteur de Poynting & Propagation de la Puissance dans un Câble Coaxial',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Électromagnétisme & Énergie',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PSI / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Un câble coaxial est formé d\'un conducteur cylindrique central de rayon $R_1$ et d\'une gaine cylindrique extérieure de rayon intérieur $R_2$. Le câble transporte une tension continue $U$ et un courant continu d\'intensité $I$ alimentant une résistance terminale $R_{charge} = U / I$.\n1. Déterminer le champ électrostatique $\\vec{E}(r)$ et le champ magnétostatique $\\vec{B}(r)$ dans l\'espace isolant compris entre les deux conducteurs ($R_1 < r < R_2$).\n2. Exprimer le vecteur de Poynting $\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$. En déduire la direction et le sens de propagation de l\'énergie électromagnétique.\n3. Calculer le flux total de $\\vec{\\Pi}$ à travers une section droite du câble et vérifier qu\'il est rigoureusement égal à la puissance électrique transférée $P = U I$.',
    hints: [
      'Champ $\\vec{E}$ par le théorème de Gauss : $E(r) = \\frac{U}{r \\ln(R_2 / R_1)} \\vec{u}_r$.',
      'Champ $\\vec{B}$ par le théorème d\'Ampère : $B(r) = \\frac{\\mu_0 I}{2\\pi r} \\vec{u}_\\theta$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul des champs $\\vec{E}$ et $\\vec{B}$',
          explication: '- Champ électrique : par symétrie cylindrique, $\\vec{E} = E(r)\\vec{u}_r$. L\'intégration du potentiel $V(R_1) - V(R_2) = U$ donne :\n$$\\vec{E}(r) = \\frac{U}{r \\ln(R_2 / R_1)} \\vec{u}_r$$\n- Champ magnétique : d\'après le théorème d\'Ampère sur un cercle de rayon $r$ enlaçant le conducteur central parcouru par $I$ :\n$$\\oint \\vec{B} \\cdot \\mathrm{d}\\vec{\\ell} = B(r) \\times 2\\pi r = \\mu_0 I \\implies \\vec{B}(r) = \\frac{\\mu_0 I}{2\\pi r} \\vec{u}_\\theta$$'
        },
        {
          titre: '2. Vecteur de Poynting',
          explication: 'Le vecteur de Poynting s\'écrit :\n$$\\vec{\\Pi}(r) = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0} = \\frac{1}{\\mu_0} \\left( \\frac{U}{r \\ln(R_2 / R_1)} \\vec{u}_r \\right) \\wedge \\left( \\frac{\\mu_0 I}{2\\pi r} \\vec{u}_\\theta \\right) = \\frac{U I}{2\\pi \\ln(R_2 / R_1)} \\frac{1}{r^2} \\vec{u}_z$$\nLe vecteur de Poynting est **rigoureusement dirigé selon l\'axe $\\vec{u}_z$**, parallèlement au câble vers la charge réceptrice ! L\'énergie ne circule pas à l\'intérieur du métal des conducteurs, mais **à travers l\'isolant diélectrique** situé entre les conducteurs.'
        },
        {
          titre: '3. Puissance totale transmise',
          explication: 'Le flux de puissance traversant la couronne circulaire entre $R_1$ et $R_2$ s\'obtient par intégration surfacique ($\\mathrm{d}S = 2\\pi r\\,\\mathrm{d}r$) :\n$$\\mathcal{P} = \\iint \\vec{\\Pi} \\cdot \\mathrm{d}\\vec{S} = \\int_{R_1}^{R_2} \\left( \\frac{U I}{2\\pi \\ln(R_2 / R_1)} \\frac{1}{r^2} \\right) 2\\pi r\\,\\mathrm{d}r = \\frac{U I}{\\ln(R_2 / R_1)} \\int_{R_1}^{R_2} \\frac{\\mathrm{d}r}{r}$$\n$$\\mathcal{P} = \\frac{U I}{\\ln(R_2 / R_1)} \\Big[ \\ln R_2 - \\ln R_1 \\Big] = U I$$'
        }
      ],
      conclusion: 'Le théorème de Poynting réconcilie de façon magistrale l\'électrocinétique classique ($P = U I$) et la théorie électromagnétique de Maxwell.',
      reflexeDuCorrecteur: 'L\'énergie électrique voyage toujours dans le diélectrique sous forme de champ électromagnétique, et non par le flux d\'électrons dans le fil.'
    }
  },
  {
    id: 'exo-100-54-thermodynamique-detente-joule-thomson',
    title: 'Détente de Joule-Thomson (Joule-Kelvin) & Température d\'Inversion de Liquéfaction',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Thermodynamique des Fluides Réels',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Un fluide réel subit une détente adiabatique stationnaire sans travail utile à travers une paroi poreuse (laminage de Joule-Thomson) de la pression $P_1$ à $P_2 < P_1$.\n1. Démontrer que la détente de Joule-Thomson est isenthalpique : $h_1 = h_2$.\n2. Exprimer le coefficient de Joule-Thomson $\\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_h$ en fonction du coefficient de dilatation isobare $\\alpha = \\frac{1}{V}\\left(\\frac{\\partial V}{\\partial T}\\right)_P$, de $T, V$ et de la capacité thermique isobare $C_p$.\n3. Que vaut $\\mu_{JT}$ pour un gaz parfait ? Expliquer pourquoi l\'hydrogène ou l\'hélium gazeux s\'échauffent lors d\'une détente de Joule-Thomson à température ambiante.',
    hints: [
      'Appliquer le premier principe pour un système ouvert : $\\Delta h = w_u + q = 0$.',
      'Différentielle de l\'enthalpie : $\\mathrm{d}h = C_p \\mathrm{d}T + V(1 - \\alpha T)\\mathrm{d}P$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Conservation de l\'enthalpie en système ouvert',
          explication: 'D\'après le premier principe de la thermodynamique en écoulement stationnaire ouvert :\n$$\\Delta h + \\Delta e_c + \\Delta e_p = w_u + q$$\nComme la conduite est calorifugée ($q = 0$), sans partie mobile ($w_u = 0$), et que les variations d\'énergie cinétique et potentielle sont négligeables :\n$$\\Delta h = h_2 - h_1 = 0 \\implies h_2 = h_1$$\nLa détente de Joule-Thomson est rigoureusement **isenthalpique**.'
        },
        {
          titre: '2. Expression du coefficient de Joule-Thomson',
          explication: 'L\'enthalpie s\'écrit sous forme différentielle :\n$$\\mathrm{d}h = \\left(\\frac{\\partial h}{\\partial T}\\right)_P \\mathrm{d}T + \\left(\\frac{\\partial h}{\\partial P}\\right)_T \\mathrm{d}P = C_p \\mathrm{d}T + V(1 - \\alpha T) \\mathrm{d}P$$\nÀ enthalpie constante ($\\mathrm{d}h = 0$) :\n$$C_p \\mathrm{d}T = -V(1 - \\alpha T) \\mathrm{d}P \\implies \\mu_{JT} = \\left(\\frac{\\partial T}{\\partial P}\\right)_h = \\frac{V(\\alpha T - 1)}{C_p}$$'
        },
        {
          titre: '3. Gaz parfait et température d\'inversion',
          explication: '- Pour un gaz parfait : $P V = n R T \\implies \\alpha = 1/T$, donc $\\alpha T - 1 = 0$. On a $\\mu_{JT} = 0$ : la température d\'un gaz parfait ne varie absolument pas lors d\'une détente de Joule-Thomson.\n- Pour un fluide réel : comme $\\Delta P = P_2 - P_1 < 0$ (détente), la variation de température $\\Delta T \\approx \\mu_{JT} \\Delta P$ entraîne un **refroidissement** ($\\Delta T < 0$) si et seulement si $\\mu_{JT} > 0$, c\'est-à-dire si $T < T_{inv}$ (température d\'inversion).\n- Pour l\'air et le méthane, $T_{inv} > 600\\text{ K}$ : à température ambiante, la détente les refroidit (cycle de Linde pour liquéfier l\'air).\n- Pour l\'hélium ($T_{inv} \\approx 40\\text{ K}$) et le dihydrogène ($T_{inv} \\approx 200\\text{ K}$), la température ambiante ($298\\text{ K}$) est bien supérieure à leur température d\'inversion : une fuite sous pression ou une détente provoque paradoxalement un **échauffement spontané** pouvant provoquer l\'inflammation.'
        }
      ],
      conclusion: 'La détente de Joule-Thomson est la clé de voûte de la cryogénie industrielle et de la liquéfaction des gaz.',
      reflexeDuCorrecteur: 'Pour liquéfier l\'hélium ou l\'hydrogène, il est obligatoire de les pré-refroidir au préalable en dessous de leur température d\'inversion.'
    }
  },
  {
    id: 'exo-100-55-algebre-diagonalisation-projecteurs',
    title: 'Idempotents & Décomposition en Somme Directe par les Projecteurs',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Espaces Vectoriels & Projecteurs',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours CCINP / Agro-Véto',
    dureeEstimeeMin: 30,
    enonce: 'Soit $E$ un espace vectoriel et $p \\in \\mathcal{L}(E)$ un projecteur ($p^2 = p$).\n1. Montrer que $\\ker(p) = \\mathrm{Im}(\\mathrm{id} - p)$ et $\\mathrm{Im}(p) = \\ker(\\mathrm{id} - p)$.\n2. Démontrer que $E = \\ker(p) \\oplus \\mathrm{Im}(p)$.\n3. Si $E$ est de dimension finie, prouver que la trace d\'un projecteur est égale à son rang : $\\mathrm{Tr}(p) = \\mathrm{rg}(p)$.\n4. Soient $p, q$ deux projecteurs qui commutent ($p \\circ q = q \\circ p$). Montrer que $p \\circ q$ est un projecteur et déterminer son image et son noyau.',
    hints: [
      'Écrire tout vecteur $x$ sous la forme $x = p(x) + (x - p(x))$.',
      'Un projecteur est diagonalisable avec pour seules valeurs propres 0 et 1.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Égalités des sous-espaces',
          explication: '- Soit $x \\in \\ker(p)$ : $p(x) = 0$, donc $(\\mathrm{id}-p)(x) = x$, d\'où $x \\in \\mathrm{Im}(\\mathrm{id}-p)$. Réciproquement, si $x = y - p(y)$, alors $p(x) = p(y) - p^2(y) = 0$, donc $x \\in \\ker(p)$. D\'où $\\ker(p) = \\mathrm{Im}(\\mathrm{id}-p)$.\n- En remplaçant $p$ par le projecteur associé $q = \\mathrm{id}-p$, on a de même $\\mathrm{Im}(p) = \\ker(\\mathrm{id}-p)$.'
        },
        {
          titre: '2. Somme directe de l\'espace',
          explication: 'Pour tout $x \\in E$, on peut décomposer de façon unique :\n$$x = p(x) + (x - p(x))$$\navec $p(x) \\in \\mathrm{Im}(p)$ et $x - p(x) \\in \\ker(p)$ (car $p(x - p(x)) = p(x) - p^2(x) = 0$).\nSi $x \\in \\ker(p) \\cap \\mathrm{Im}(p)$, alors $p(x) = 0$ et il existe $y$ tel que $x = p(y) \\implies p(x) = p^2(y) = p(y) = x = 0$.\nL\'intersection est réduite à $\\{0\\}$, donc :\n$$E = \\ker(p) \\oplus \\mathrm{Im}(p)$$'
        },
        {
          titre: '3. Trace égale au rang',
          explication: 'Le polynôme $X^2 - X = X(X-1)$ annule $p$. Comme il est scindé à racines simples sur $\\mathbb{K}$, $p$ est diagonalisable. Dans une base adaptée à la décomposition $E = \\mathrm{Im}(p) \\oplus \\ker(p)$, la matrice de $p$ est diagonale :\n$$\\mathrm{Mat}(p) = \\begin{pmatrix} I_r & 0 \\\\ 0 & 0 \\end{pmatrix}$$\noù $r = \\dim \\mathrm{Im}(p) = \\mathrm{rg}(p)$.\nLa trace étant invariante par changement de base, elle vaut la somme des 1 sur la diagonale :\n$$\\mathrm{Tr}(p) = r = \\mathrm{rg}(p)$$'
        },
        {
          titre: '4. Produit de projecteurs qui commutent',
          explication: 'Calculons le carré du produit avec $p \\circ q = q \\circ p$ :\n$$(p \\circ q)^2 = (p \\circ q) \\circ (p \\circ q) = p \\circ (q \\circ p) \\circ q = p \\circ (p \\circ q) \\circ q = p^2 \\circ q^2 = p \\circ q$$\n$p \\circ q$ est donc bien un projecteur.\n- Image : $\\mathrm{Im}(p \\circ q) = \\mathrm{Im}(p) \\cap \\mathrm{Im}(q)$.\n- Noyau : $\\ker(p \\circ q) = \\ker(p) + \\ker(q)$.'
        }
      ],
      conclusion: 'Les projecteurs sont les briques fondamentales de la réduction spectrale en algèbre linéaire et de la mesure projective en mécanique quantique.',
      reflexeDuCorrecteur: 'Trace d\'un projecteur = rang du projecteur. Cette propriété est très utile pour dénombrer des dimensions de sous-espaces.'
    }
  }
];
