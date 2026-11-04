import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART1: ExerciseItem[] = [
  {
    id: 'exo-100-01-lotka-volterra',
    title: 'Analyse Qualitative Complète du Modèle Proie-Prédateur de Lotka-Volterra',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-systemes-dynamiques',
    chapitreTitre: 'Équations Différentielles Non Linéaires & Dynamique des Populations',
    filieres: ['BCPST', 'MP'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Concours Agro-Véto Mathématiques / ENS BCPST',
    dureeEstimeeMin: 45,
    enonce: 'On étudie le système autonome de Lotka-Volterra décrivant l\'interaction entre une population de proies $N(t) > 0$ et de prédateurs $P(t) > 0$ :\n$$\\begin{cases} \\frac{\\mathrm{d}N}{\\mathrm{d}t} = N(\\alpha - \\beta P) \\\\ \\frac{\\mathrm{d}P}{\\mathrm{d}t} = P(\\delta N - \\gamma) \\end{cases} \\quad (\\alpha, \\beta, \\gamma, \\delta > 0)$$\n1. Déterminer les deux points d\'équilibre dans $\\mathbb{R}_+^2$ et étudier la stabilité du système linéarisé au voisinage de ces points.\n2. Montrer que la fonction $H(N, P) = \\delta N - \\gamma \\ln N + \\beta P - \\alpha \\ln P$ est une intégrale première du mouvement.\n3. En étudiant les lignes de niveau de $H$, démontrer que les trajectoires non triviales dans le premier quadrant sont toutes des courbes fermées (cycles périodiques).\n4. Calculer la moyenne temporelle $\\langle N \\rangle = \\frac{1}{T}\\int_0^T N(t)\\,\\mathrm{d}t$ et $\\langle P \\rangle = \\frac{1}{T}\\int_0^T P(t)\\,\\mathrm{d}t$ sur une période $T$, et en déduire le principe de Volterra concernant l\'effet d\'un insecticide détruisant proies et prédateurs au même taux proportionnel.',
    hints: [
      'Pour le système linéarisé en $(N^*, P^*)$, la trace de la matrice jacobienne est nulle.',
      'Pour l\'intégrale première, calculer $\\frac{\\mathrm{d}H(N(t), P(t))}{\\mathrm{d}t}$ le long des trajectoires.',
      'Pour la moyenne temporelle, intégrer $\\frac{1}{N} \\frac{\\mathrm{d}N}{\\mathrm{d}t} = \\frac{\\mathrm{d}\\ln N}{\\mathrm{d}t} = \\alpha - \\beta P$ sur $[0, T]$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Points d\'équilibre et linéarisation',
          explication: 'Les points fixes annulent le champ de vecteurs : $(0, 0)$ et $(N^*, P^*) = (\\gamma/\\delta, \\alpha/\\beta)$. La matrice jacobienne en $(N^*, P^*)$ est $J = \\begin{pmatrix} 0 & -\\beta \\gamma / \\delta \\\\ \\delta \\alpha / \\beta & 0 \\end{pmatrix}$. Les valeurs propres sont $\\lambda = \\pm j \\sqrt{\\alpha \\gamma}$ : la linéarisation est un centre (valeurs propres imaginaires pures).'
        },
        {
          titre: '2. Intégrale première $H(N, P)$',
          explication: 'Par dérivation composée le long d\'une solution :\n$$\\frac{\\mathrm{d}H}{\\mathrm{d}t} = \\left(\\delta - \\frac{\\gamma}{N}\\right) \\frac{\\mathrm{d}N}{\\mathrm{d}t} + \\left(\\beta - \\frac{\\alpha}{P}\\right) \\frac{\\mathrm{d}P}{\\mathrm{d}t} = \\frac{\\delta N - \\gamma}{N} N(\\alpha - \\beta P) + \\frac{\\beta P - \\alpha}{P} P(\\delta N - \\gamma) = 0$$\n$H(N, P)$ est donc strictement constante le long de chaque trajectoire.'
        },
        {
          titre: '3. Trajectoires fermées et périodicité',
          explication: 'La fonction $H(N, P) = f(N) + g(P)$ avec $f(N) = \\delta N - \\gamma \\ln N$ et $g(P) = \\beta P - \\alpha \\ln P$ est strictement convexe sur $]0, +\\infty[^2$ et admet un minimum absolu unique en $(N^*, P^*)$. Les ensembles de sous-niveau $\\{(N, P) \\mid H(N, P) = C\\}$ sont des courbes compactes régulières sans point stationnaire pour $C > H(N^*, P^*)$. D\'après le théorème de Poincaré-Bendixson, chaque trajectoire est une orbite fermée périodique de période $T$.'
        },
        {
          titre: '4. Principe de Volterra et application écologique',
          explication: 'En intégrant $\\frac{\\mathrm{d}\\ln N}{\\mathrm{d}t} = \\alpha - \\beta P(t)$ sur une période $T$ : $\\ln N(T) - \\ln N(0) = 0 = \\alpha T - \\beta \\int_0^T P(t)\\,\\mathrm{d}t \\implies \\langle P \\rangle = \\frac{\\alpha}{\\beta}$. De même, $\\langle N \\rangle = \\frac{\\gamma}{\\delta}$.\nSi un pesticide élimine les deux espèces avec un taux $\\varepsilon > 0$, $\\alpha \\to \\alpha - \\varepsilon$ et $\\gamma \\to \\gamma + \\varepsilon$. Les nouvelles moyennes deviennent :\n$$\\langle N \\rangle\' = \\frac{\\gamma + \\varepsilon}{\\delta} > \\langle N \\rangle \\quad \\text{et} \\quad \\langle P \\rangle\' = \\frac{\\alpha - \\varepsilon}{\\beta} < \\langle P \\rangle$$\nL\'insecticide favorise paradoxalement la population moyenne de proies (ravageurs) en décimant leurs prédateurs naturels !'
        }
      ],
      conclusion: 'Le principe de Volterra explique pourquoi l\'utilisation massive de pesticides aggrave souvent les invasions de ravageurs des cultures.',
      reflexeDuCorrecteur: 'Pour calculer la moyenne d\'une variable périodique dans un système différentiel, pensez immédiatement à intégrer la dérivée logarithmique.'
    }
  },
  {
    id: 'exo-100-02-loi-gamma-convolution',
    title: 'Famille de Lois Gamma & Fonction Caractéristique',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-proba-continue',
    chapitreTitre: 'Probabilités à Densité & Lois Continues',
    filieres: ['BCPST', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto Mathématiques / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Une variable aléatoire $X$ suit la loi Gamma de paramètres $a > 0$ et $\\lambda > 0$, notée $X \\sim \\gamma(a, \\lambda)$, si sa densité est donnée par :\n$$f_a(t) = \\frac{\\lambda^a}{\\Gamma(a)} t^{a-1} e^{-\\lambda t} \\mathbf{1}_{]0, +\\infty[}(t) \\quad \\text{avec} \\quad \\Gamma(a) = \\int_0^{+\\infty} u^{a-1} e^{-u}\\,\\mathrm{d}u$$\n1. Calculer l\'espérance $E(X)$ et la variance $V(X)$ à l\'aide de la propriété fonctionnelle $\\Gamma(a+1) = a \\Gamma(a)$.\n2. Soient $X_1 \\sim \\gamma(a_1, \\lambda)$ et $X_2 \\sim \\gamma(a_2, \\lambda)$ deux variables indépendantes de même paramètre d\'échelle $\\lambda$. Démontrer par calcul d\'intégrale double ou produit de convolution que $X_1 + X_2 \\sim \\gamma(a_1 + a_2, \\lambda)$.\n3. En déduire la loi de la somme de $n$ variables exponentielles indépendantes de paramètre $\\lambda$.',
    hints: [
      'Pour le moment d\'ordre $k$, calculer $\\int_0^{+\\infty} t^{a+k-1} e^{-\\lambda t}\\,\\mathrm{d}t$ par le changement de variable $u = \\lambda t$.',
      'Pour la convolution, poser le changement de variable $u = t v$ dans l\'intégrale de convolution.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul de l\'espérance et de la variance',
          explication: 'Pour tout $k > 0$, avec $u = \\lambda t$ :\n$$E(X^k) = \\int_0^{+\\infty} t^k \\frac{\\lambda^a}{\\Gamma(a)} t^{a-1} e^{-\\lambda t}\\,\\mathrm{d}t = \\frac{\\lambda^a}{\\Gamma(a)} \\int_0^{+\\infty} \\frac{u^{a+k-1}}{\\lambda^{a+k}} e^{-u}\\,\\mathrm{d}u = \\frac{\\Gamma(a+k)}{\\lambda^k \\Gamma(a)}$$\nPour $k=1$ : $E(X) = \\frac{\\Gamma(a+1)}{\\lambda \\Gamma(a)} = \\frac{a}{\\lambda}$.\nPour $k=2$ : $E(X^2) = \\frac{\\Gamma(a+2)}{\\lambda^2 \\Gamma(a)} = \\frac{(a+1)a}{\\lambda^2}$.\nD\'où $V(X) = E(X^2) - (E(X))^2 = \\frac{a(a+1) - a^2}{\\lambda^2} = \\frac{a}{\\lambda^2}$.'
        },
        {
          titre: '2. Somme de deux lois Gamma indépendantes',
          explication: 'La densité de $S = X_1 + X_2$ est le produit de convolution pour $t > 0$ :\n$$f_S(t) = \\int_0^t f_{X_1}(u) f_{X_2}(t-u)\\,\\mathrm{d}u = \\frac{\\lambda^{a_1 + a_2}}{\\Gamma(a_1)\\Gamma(a_2)} e^{-\\lambda t} \\int_0^t u^{a_1 - 1} (t-u)^{a_2 - 1}\\,\\mathrm{d}u$$\nEn posant le changement de variable $u = t v$ ($v \\in [0, 1]$) :\n$$\\int_0^t u^{a_1 - 1} (t-u)^{a_2 - 1}\\,\\mathrm{d}u = t^{a_1 + a_2 - 1} \\int_0^1 v^{a_1 - 1} (1-v)^{a_2 - 1}\\,\\mathrm{d}v = t^{a_1 + a_2 - 1} B(a_1, a_2)$$\nSachant que $B(a_1, a_2) = \\frac{\\Gamma(a_1)\\Gamma(a_2)}{\\Gamma(a_1 + a_2)}$, les facteurs se simplifient parfaitement et donnent la densité exacte de $\\gamma(a_1 + a_2, \\lambda)$.'
        },
        {
          titre: '3. Application aux lois exponentielles',
          explication: 'Une loi exponentielle $\\mathcal{E}(\\lambda)$ coïncide avec $\\gamma(1, \\lambda)$ car $\\Gamma(1) = 0! = 1$. Par récurrence immédiate, la somme de $n$ variables exponentielles indépendantes de même paramètre $\\lambda$ suit la loi Gamma $\\gamma(n, \\lambda)$ (appelée aussi loi d\'Erlang).'
        }
      ],
      conclusion: 'La famille des lois Gamma est stable par convolution pour un même paramètre d\'échelle $\\lambda$.',
      reflexeDuCorrecteur: 'Le changement de variable $u = t v$ dans l\'intégrale de convolution de deux monômes est la méthode universelle pour faire apparaître la fonction Bêta d\'Euler.'
    }
  },
  {
    id: 'exo-100-03-theoreme-spectral-acp',
    title: 'Fondements Mathématiques de l\'Analyse en Composantes Principales (ACP)',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-acp-statistique',
    chapitreTitre: 'Statistique Multivariée & Espace Euclidien',
    filieres: ['BCPST', 'MP', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Agro-Véto / Mines-Ponts MP',
    dureeEstimeeMin: 40,
    enonce: 'Soit $X \\in \\mathcal{M}_{n, p}(\\mathbb{R})$ un tableau de $n$ observations sur $p$ variables biologiques centrées (la moyenne de chaque colonne est nulle). On munit $\\mathbb{R}^n$ du produit scalaire $\\langle x, y \\rangle = \\frac{1}{n} x^T y$ et $\\mathbb{R}^p$ du produit scalaire usuel $u^T v$. La matrice de variance-covariance des variables est $V = \\frac{1}{n} X^T X$.\n1. Justifier que $V$ est une matrice symétrique réelle positive.\n2. On cherche un vecteur unitaire $u_1 \\in \\mathbb{R}^p$ (avec $\\|u_1\\|^2 = u_1^T u_1 = 1$) tel que la variable projetée $c_1 = X u_1$ présente une variance maximale. Par la méthode des multiplicateurs de Lagrange, prouver que $u_1$ est un vecteur propre de $V$ associé à sa plus grande valeur propre $\\lambda_1$, et que $\\mathrm{Var}(c_1) = \\lambda_1$.\n3. Établir l\'orthogonalité des composantes principales $c_i = X u_i$ et $c_j = X u_j$ pour $i \\neq j$.\n4. Démontrer que l\'inertie totale du nuage d\'individus est égale à la somme des variances des variables initiales et à la somme des valeurs propres : $I_{tot} = \\mathrm{Tr}(V) = \\sum_{k=1}^p \\lambda_k$.',
    hints: [
      'Pour le multiplicateur de Lagrange, poser le lagrangien $\\mathcal{L}(u, \\mu) = u^T V u - \\mu (u^T u - 1)$.',
      'Calculer $\\mathrm{cov}(c_i, c_j) = \\frac{1}{n} c_i^T c_j = \\frac{1}{n} u_i^T X^T X u_j = u_i^T V u_j$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Symétrie et positivité de $V$',
          explication: '$V^T = (\\frac{1}{n} X^T X)^T = \\frac{1}{n} X^T X = V$ : $V$ est symétrique. Pour tout vecteur $u \\in \\mathbb{R}^p$ :\n$$u^T V u = \\frac{1}{n} u^T X^T X u = \\frac{1}{n} \\|X u\\|^2 \\ge 0$$\n$V$ est donc symétrique réelle semi-définie positive ($V \\in \\mathcal{S}_p^+(\\mathbb{R})$).'
        },
        {
          titre: '2. Maximisation de la variance par multiplicateur de Lagrange',
          explication: 'La variance de $c = X u$ est $\\mathrm{Var}(c) = \\frac{1}{n} \\|X u\\|^2 = u^T V u$. On maximise $f(u) = u^T V u$ sous la contrainte $g(u) = u^T u - 1 = 0$. Le lagrangien est $\\mathcal{L}(u, \\mu) = u^T V u - \\mu (u^T u - 1)$. En annulant le gradient par rapport à $u$ :\n$$\\nabla_u \\mathcal{L} = 2 V u - 2 \\mu u = 0 \\implies V u = \\mu u$$\nLe vecteur $u$ est donc nécessairement un vecteur propre de $V$ associé à la valeur propre $\\mu$. En multipliant à gauche par $u^T$ avec $u^T u = 1$ :\n$$\\mathrm{Var}(c) = u^T V u = u^T (\\mu u) = \\mu$$\nPour maximiser la variance, on choisit le vecteur propre normé $u_1$ associé à la valeur propre maximale $\\lambda_1 = \\max \\mathrm{Sp}(V)$, et on a bien $\\mathrm{Var}(c_1) = \\lambda_1$.'
        },
        {
          titre: '3. Orthogonalité des composantes principales',
          explication: 'D\'après le théorème spectral, les sous-espaces propres d\'une matrice symétrique réelle sont deux à deux orthogonaux. On peut donc choisir une base orthonormée $(u_1, \\dots, u_p)$ de vecteurs propres de $V$ associée à $\\lambda_1 \\ge \\dots \\ge \\lambda_p \\ge 0$.\nPour $i \\neq j$ :\n$$\\mathrm{cov}(c_i, c_j) = \\frac{1}{n} c_i^T c_j = u_i^T V u_j = u_i^T (\\lambda_j u_j) = \\lambda_j (u_i^T u_j) = 0$$\nLes nouvelles variables factorielles $c_i$ et $c_j$ sont donc rigoureusement non corrélées (orthogonales dans $\\mathbb{R}^n$).'
        },
        {
          titre: '4. Conservation de l\'inertie totale',
          explication: 'L\'inertie totale du nuage est la moyenne des carrés des distances au centre de gravité :\n$$I_{tot} = \\frac{1}{n} \\sum_{i=1}^n \\|x_i\\|^2 = \\frac{1}{n} \\mathrm{Tr}(X X^T) = \\mathrm{Tr}\\left( \\frac{1}{n} X^T X \\right) = \\mathrm{Tr}(V)$$\nComme la trace d\'une matrice est la somme de ses valeurs propres, $I_{tot} = \\sum_{k=1}^p \\lambda_k$.'
        }
      ],
      conclusion: 'L\'ACP réalise une rotation orthogonale du repère vers les axes d\'inertie maximale de la dispersion biologique.',
      reflexeDuCorrecteur: 'Pour maximiser une forme quadratique sous contrainte sphérique, pensez au quotient de Rayleigh $\\frac{u^T V u}{u^T u}$ dont les extrema sont les valeurs propres extrêmes.'
    }
  },
  {
    id: 'exo-100-04-hemodynamique-pulsatile',
    title: 'Écoulement Sanguin Pulsé & Impédance Caractéristique de l\'Aorte',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-hemodynamique-poiseuille',
    chapitreTitre: 'Dynamique des Fluides Réels & Hémodynamique',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'ENS BCPST Physique / Centrale PC',
    dureeEstimeeMin: 40,
    enonce: 'On modélise l\'aorte par un tube cylindrique élastique d\'aire de section au repos $S_0$ transportant du sang incompressible de masse volumique $\\rho$. L\'élasticité de la paroi artérielle est caractérisée par la compliance locale $C = \\frac{\\partial S}{\\partial P}$.\n1. En écrivant l\'équation de conservation de la masse pour le débit volumique $Q(z, t)$ et la section $S(z, t)$, et l\'équation d\'Euler linéarisée pour le fluide parfait $\\rho \\frac{\\partial Q}{\\partial t} = -S_0 \\frac{\\partial P}{\\partial z}$, établir l\'équation d\'onde de d\'Alembert vérifiée par la surpression sanguine $P(z, t)$.\n2. Exprimer la vitesse de l\'onde de pouls aortique $c$ (formule de Moens-Korteweg) en fonction de $\\rho$ et de la compliance linéique $C$.\n3. Définir l\'impédance caractéristique de l\'aorte $Z_c = \\frac{P}{Q}$ pour une onde progressive se propageant vers l\'aval.',
    hints: [
      'Différentier l\'équation de continuité $\\frac{\\partial S}{\\partial t} + \\frac{\\partial Q}{\\partial z} = 0$ par rapport au temps avec $\\frac{\\partial S}{\\partial t} = C \\frac{\\partial P}{\\partial t}$.',
      'Éliminer la dérivée spatio-temporelle croisée pour obtenir l\'équation des télégraphistes sans perte.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Couplage fluide-paroi et équation de d\'Alembert',
          explication: 'La conservation de la masse pour un fluide incompressible s\'écrit $\\frac{\\partial S}{\\partial t} + \\frac{\\partial Q}{\\partial z} = 0$. Avec la compliance artérielle $C = \\frac{\\partial S}{\\partial P}$ :\n$$C \\frac{\\partial P}{\\partial t} + \\frac{\\partial Q}{\\partial z} = 0$$\nEn dérivant par rapport à $t$ et en injectant l\'équation d\'Euler $\\frac{\\partial Q}{\\partial t} = -\\frac{S_0}{\\rho} \\frac{\\partial P}{\\partial z}$ dérivée par rapport à $z$ :\n$$C \\frac{\\partial^2 P}{\\partial t^2} - \\frac{S_0}{\\rho} \\frac{\\partial^2 P}{\\partial z^2} = 0 \\iff \\frac{\\partial^2 P}{\\partial z^2} - \\frac{\\rho C}{S_0} \\frac{\\partial^2 P}{\\partial t^2} = 0$$'
        },
        {
          titre: '2. Célérité de l\'onde de pouls (Moens-Korteweg)',
          explication: 'On reconnaît l\'équation de d\'Alembert de célérité $c = \\sqrt{\\frac{S_0}{\\rho C}}$. Pour un vaisseau à paroi d\'épaisseur $h$, de rayon $R$ et de module d\'Young $E$, $C = \\frac{2\\pi R^3}{E h}$, ce qui donne la vitesse de l\'onde de pouls :\n$$c = \\sqrt{\\frac{E h}{2 \\rho R}}$$\nChez le sujet jeune sain, $c \\approx 5\\text{ m/s}$ dans l\'aorte ascendante. Avec le vieillissement ou l\'athérosclérose, la paroi se rigidifie ($E$ augmente), ce qui accélère la propagation de l\'onde de pouls jusqu\'à $10-15\\text{ m/s}$.'
        },
        {
          titre: '3. Impédance caractéristique hémodynamique',
          explication: 'Pour une onde de pression progressive $P(z, t) = f(t - z/c)$, le débit associé vaut $Q(z, t) = \\frac{S_0}{\\rho c} P(z, t)$. L\'impédance caractéristique est le rapport amplitude de pression sur amplitude de débit :\n$$Z_c = \\frac{P}{Q} = \\frac{\\rho c}{S_0} = \\sqrt{\\frac{\\rho}{S_0 C}}$$'
        }
      ],
      conclusion: 'La pression artérielle pulsée se comporte exactement comme une onde de tension sur une ligne de transmission électrique coaxiale.',
      reflexeDuCorrecteur: 'Ne confondez jamais la vitesse du sang ($v \\approx 0.5-1\\text{ m/s}$) et la célérité de l\'onde de pouls élastique ($c \\approx 5-10\\text{ m/s}$), qui est dix fois plus rapide.'
    }
  },
  {
    id: 'exo-100-05-inhibition-allosterique-monod',
    title: 'Modèle MWC de Monod-Wyman-Changeux & Fixation Coopérative de l\'Oxygène par l\'Hémoglobine',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-cinetique-enzymatique',
    chapitreTitre: 'Cinétique Enzymatique & Inhibitions',
    filieres: ['BCPST', 'PC'],
    annee: '1ère & 2ème année',
    difficulte: 3,
    origin: 'Agro-Véto Biochimie / ENS BCPST',
    dureeEstimeeMin: 45,
    enonce: 'On étudie la fixation coopérative du dioxygène $O_2$ sur l\'hémoglobine tétramérique selon le modèle allostérique symétrique de Monod-Wyman-Changeux (MWC). L\'hémoglobine existe sous deux états conformationnels quaternaires en équilibre : l\'état tendu désoxygéné $T$ (faible affinité pour $O_2$, constante de dissociation $K_T$) et l\'état relâché oxygéné $R$ (forte affinité pour $O_2$, constante de dissociation $K_R \\ll K_T$). La constante allostérique sans ligand est $L = \\frac{[T_0]}{[R_0]} \\gg 1$.\n1. En posant $\\alpha = \\frac{[O_2]}{K_R}$ et $c = \\frac{K_R}{K_T} \\ll 1$, exprimer la fonction de saturation fractionnaire des sites $\\bar{Y}$ en fonction de $\\alpha, c$ et $L$.\n2. Expliquer l\'allure sigmoïde de la courbe de saturation $\\bar{Y} = f([O_2])$ et justifier le rôle physiologique d\'une telle courbe par rapport à une hyperbole de Michaelis (myoglobine).\n3. Prédire l\'effet d\'un effecteur allostérique hétérotrope négatif comme le 2,3-bisphosphoglycérate (2,3-BPG) ou l\'acidification (effet Bohr) sur la constante $L$ et sur l\'affinité pour $O_2$.',
    hints: [
      'Pour 4 sites indépendants dans chaque état, le polynôme de fixation d\'un état est $(1 + [O_2]/K)^4$.',
      'Le nombre moyen de sites occupés est $\\frac{[O_2]}{4} \\frac{\\mathrm{d}\\ln Q}{\\mathrm{d}[O_2]}$ où $Q$ est la fonction de partition moléculaire.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Établissement de la saturation de Monod-Wyman-Changeux',
          explication: 'Les états $R$ et $T$ possèdent 4 sites de fixation identiques et indépendants. Les polynômes de saturation valent :\n$$Q_R = [R_0](1 + \\alpha)^4 \\quad \\text{et} \\quad Q_T = [T_0](1 + c\\alpha)^4 = L [R_0](1 + c\\alpha)^4$$\nLa saturation fractionnaire des sites $\\bar{Y}$ (rapport des sites occupés sur le nombre total de sites $4([R] + [T])$) s\'écrit :\n$$\\bar{Y} = \\frac{\\alpha(1+\\alpha)^3 + L c \\alpha (1 + c\\alpha)^3}{(1+\\alpha)^4 + L (1 + c\\alpha)^4}$$'
        },
        {
          titre: '2. Allure sigmoïde et efficacité de transfert physiologique',
          explication: 'Comme $L \\approx 9000 \\gg 1$ et $c \\approx 0.01 \\ll 1$, aux faibles pressions d\'oxygène l\'état $T$ domine et la saturation démarre avec une pente très faible. Dès que quelques molécules de substrat se fixent, l\'équilibre bascule massivement vers l\'état $R$ de haute affinité : la pente s\'accélère fortement. La courbe présente une sigmoïde prononcée.\n**Conséquence physiologique majeure** : Dans les capillaires pulmonaires ($P_{O_2} \\approx 100\\text{ mmHg}$), la saturation atteint $98\\%$. Dans les tissus périphériques au repos ($P_{O_2} \\approx 40\\text{ mmHg}$), la saturation chute à $75\\%$, et jusqu\'à $20\\%$ lors d\'un effort musculaire intense ($P_{O_2} \\approx 20\\text{ mmHg}$). La sigmoïde permet de décharger une quantité colossale d\'oxygène sur une plage étroite de pressions, ce qui serait impossible avec une hyperbole michaelienne.'
        },
        {
          titre: '3. Effet Bohr et rôle du 2,3-BPG',
          explication: 'Le 2,3-BPG se lie spécifiquement dans la cavité centrale de la conformation désoxygénée $T$ en établissant des ponts salins avec des résidus basiques (Lys, His). Il stabilise l\'état $T$, ce qui augmente la constante allostérique $L$. La courbe sigmoïde est déplacée vers la droite (diminution d\'affinité apparente), facilitant le relargage de l\'oxygène vers les tissus actifs. L\'effet Bohr (augmentation des ions $H^+$ et du $CO_2$) stabilise également la forme $T$ par protonation des histidines.'
        }
      ],
      conclusion: 'Le modèle MWC constitue le socle fondamental de la compréhension moléculaire de la régulation allostérique enzymatique et de l\'hémoglobine.',
      reflexeDuCorrecteur: 'N\'oubliez jamais que l\'hémoglobine a une fonction de transporteur (allostérique, sigmoïde), tandis que la myoglobine a une fonction de stockage d\'urgence intramusculaire (monomérique, michaelienne).'
    }
  },
  {
    id: 'exo-100-06-energie-serre-climat',
    title: 'Modèle Radiatif-Convectif du Bilan Énergétique Terrestre & Sensibilité Climatique',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Transferts Thermiques & Rayonnement',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours G2E / Agro-Véto',
    dureeEstimeeMin: 35,
    enonce: 'On étudie la sensibilité climatique à l\'équilibre d\'un doublement de la concentration atmosphérique en $CO_2$. La constante solaire moyenne absorbée par le système Terre-atmosphère est $F_{abs} = \\frac{(1-A)F_0}{4} = 239.5\\text{ W/m}^2$.\n1. Sans effet de serre, calculer la température d\'émission effective du corps noir terrestre $T_e$.\n2. On modélise le forçage radiatif induit par un doublement de $CO_2$ par un apport supplémentaire descendant de $\\Delta F = 3.7\\text{ W/m}^2$. En différentiant la loi de Stefan-Boltzmann $F = \\sigma T_e^4$, exprimer le paramètre de rétroaction radiative fondamentale du corps noir $\\lambda_0 = \\frac{\\mathrm{d}F}{\\mathrm{d}T_e}$ et calculer le réchauffement direct $\\Delta T_0$ en l\'absence de rétroactions de la vapeur d\'eau ou de l\'albédo.\n3. Si la rétroaction totale de la vapeur d\'eau et des nuages introduit un gain positif $\\gamma = 2.0\\text{ W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-1}$, calculer la nouvelle élévation de température d\'équilibre $\\Delta T_{eq} = \\frac{\\Delta F}{\\lambda_0 - \\gamma}$.',
    hints: [
      'Différentier $\\ln F = \\ln \\sigma + 4 \\ln T_e$.',
      'Le réchauffement direct s\'écrit $\\Delta T_0 = \\frac{\\Delta F}{\\lambda_0}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Température effective d\'émission',
          explication: 'À l\'équilibre global sommet d\'atmosphère : $F_{abs} = \\sigma T_e^4$. Avec $\\sigma = 5.67\\times 10^{-8}\\text{ W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-4}$ :\n$$T_e = \\left( \\frac{239.5}{5.67\\times 10^{-8}} \\right)^{1/4} = (4.224\\times 10^9)^{1/4} \\approx 254.9\\text{ K} \\approx -18.2^\\circ\\text{C}$$'
        },
        {
          titre: '2. Rétroaction de Planck et réchauffement sans rétroactions',
          explication: 'Par différentiation de $F = \\sigma T_e^4$ :\n$$\\lambda_0 = \\frac{\\mathrm{d}F}{\\mathrm{d}T_e} = 4 \\sigma T_e^3 = \\frac{4 F_{abs}}{T_e} = \\frac{4 \\times 239.5}{254.9} \\approx 3.76\\text{ W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-1}$$\nLe réchauffement climatique direct induit par le forçage $\\Delta F = 3.7\\text{ W/m}^2$ vaut donc :\n$$\\Delta T_0 = \\frac{\\Delta F}{\\lambda_0} = \\frac{3.7}{3.76} \\approx 0.98\\text{ K} \\approx 1.0^\\circ\\text{C}$$'
        },
        {
          titre: '3. Amplification par rétroactions positives',
          explication: 'L\'échauffement de surface accroît la pression de vapeur saturante d\'eau selon la formule de Clausius-Clapeyron (+7% d\'humidité atmosphérique par degré). La vapeur d\'eau étant un puissant gaz à effet de serre, cela amplifie le forçage d\'un terme $\\gamma \\Delta T$. Le bilan d\'énergie modifié s\'écrit :\n$$\\Delta F + \\gamma \\Delta T = \\lambda_0 \\Delta T \\implies \\Delta T_{eq} = \\frac{\\Delta F}{\\lambda_0 - \\gamma} = \\frac{3.7}{3.76 - 2.0} = \\frac{3.7}{1.76} \\approx 2.1\\text{ K} \\approx +2.1^\\circ\\text{C}$$'
        }
      ],
      conclusion: 'Les rétroactions climatiques positives doublent au minimum le réchauffement direct de base du dioxyde de carbone.',
      reflexeDuCorrecteur: 'Pensez toujours à écrire $\\lambda_0 = 4 F / T$ pour calculer la rétroaction de Planck instantanément sans calculette lourde.'
    }
  },
  {
    id: 'exo-100-07-fick-diffusion-bicouche',
    title: 'Diffusion Transmembranaire d\'un Médicament & Coefficient de Perméabilité',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-transports-membranaires',
    chapitreTitre: 'Transports Transmembranaires & Diffusion',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto Biophysique',
    dureeEstimeeMin: 30,
    enonce: 'On étudie le passage passif d\'une molécule pharmacologique neutre à travers une membrane lipidique d\'épaisseur $e = 5\\text{ nm}$. Le médicament a un coefficient de partage huile/eau $K = \\frac{C_{lip}}{C_{eau}} = 100$ et un coefficient de diffusion intramembranaire $D_m = 10^{-12}\\text{ m}^2/\\text{s}$. Les concentrations aqueuses extérieure et intérieure sont $C_{ext} = 10\\text{ mM}$ et $C_{int} = 1\\text{ mM}$.\n1. Établir l\'expression de la densité de flux molaire stationnaire $j_m$ en fonction de $D_m, K, e$ et $\\Delta C = C_{ext} - C_{int}$.\n2. En déduire la perméabilité membranaire $P_m = \\frac{K D_m}{e}$ et calculer sa valeur numérique.\n3. Calculer la masse de médicament qui pénètre par heure dans une cellule sphérique de diamètre $d = 20\\;\\mu\\text{m}$ (masse molaire $M = 250\\text{ g/mol}$).',
    hints: [
      'Appliquer la 1ère loi de Fick dans le milieu lipidique avec les concentrations $C_{lip}(0) = K C_{ext}$ et $C_{lip}(e) = K C_{int}$.',
      'L\'aire de la cellule sphérique est $S = \\pi d^2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Profil de concentration et flux de Fick',
          explication: 'À l\'intérieur de la membrane lipidique ($x \\in [0, e]$), en régime stationnaire sans source, le profil de concentration est linéaire : $\\frac{\\mathrm{d}^2 C_{lip}}{\\mathrm{d}x^2} = 0$. Les concentrations aux deux interfaces sont dictées par le partage thermodynamique :\n$$C_{lip}(0) = K C_{ext} \\quad \\text{et} \\quad C_{lip}(e) = K C_{int}$$\nLe flux de Fick orienté vers l\'intérieur est :\n$$j_m = -D_m \\frac{\\mathrm{d}C_{lip}}{\\mathrm{d}x} = D_m \\frac{C_{lip}(0) - C_{lip}(e)}{e} = \\frac{K D_m}{e} (C_{ext} - C_{int})$$'
        },
        {
          titre: '2. Perméabilité membranaire $P_m$',
          explication: 'Par analogie avec $j_m = P_m \\Delta C$ :\n$$P_m = \\frac{K D_m}{e} = \\frac{100 \\times 10^{-12}\\text{ m}^2/\\text{s}}{5\\times 10^{-9}\\text{ m}} = 2.0\\times 10^{-2}\\text{ m/s}$$\nCette valeur de perméabilité est exceptionnellement élevée en raison de la forte lipophilie ($K = 100$) de la molécule.'
        },
        {
          titre: '3. Débit molaire et masse transférée par heure',
          explication: 'Aire de la cellule : $S = \\pi d^2 = \\pi (20\\times 10^{-6}\\text{ m})^2 \\approx 1.257\\times 10^{-9}\\text{ m}^2$.\nGradient aqueux : $\\Delta C = 10 - 1 = 9\\text{ mM} = 9\\text{ mol/m}^3$.\nFlux molaire : $j_m = 2.0\\times 10^{-2} \\times 9 = 0.18\\text{ mol}\\cdot\\text{m}^{-2}\\cdot\\text{s}^{-1}$.\nQuantité molaire en une heure ($\\Delta t = 3600\\text{ s}$) :\n$$n = j_m \\cdot S \\cdot \\Delta t = 0.18 \\times (1.257\\times 10^{-9}) \\times 3600 \\approx 8.14\\times 10^{-7}\\text{ mol}$$\nMasse transférée : $m = n \\cdot M = 8.14\\times 10^{-7} \\times 250\\text{ g/mol} \\approx 2.04\\times 10^{-4}\\text{ g} = 0.204\\text{ mg}$.'
        }
      ],
      conclusion: 'La règle d\'Overton est ainsi vérifiée : la vitesse de perméation transmembranaire d\'une molécule est directement proportionnelle à son coefficient de partage lipide/eau.',
      reflexeDuCorrecteur: 'Ne confondez jamais le coefficient de diffusion $D_m$ (en $\\text{m}^2/\\text{s}$) et la perméabilité $P_m = K D_m / e$ (en $\\text{m/s}$).'
    }
  },
  {
    id: 'exo-100-08-davenport-acidose',
    title: 'Diagramme de Davenport & Diagnostic d\'un Trouble Acido-Basique Métabolique vs Respiratoire',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Équilibres Acido-Basiques Physiologiques',
    filieres: ['BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto Chimie / Épreuve Vétérinaire',
    dureeEstimeeMin: 35,
    enonce: 'Un patient admis aux urgences présente les gaz du sang suivants : $pH = 7.15$, $[HCO_3^-] = 13\\text{ mmol/L}$, $P_{CO_2} = 38\\text{ mmHg}$. (Valeurs normales : $pH = 7.40$, $[HCO_3^-] = 24\\text{ mmol/L}$, $P_{CO_2} = 40\\text{ mmHg}$, pente de la ligne des tampons non bicarbonates $P = -30\\text{ mmol}\\cdot\\text{L}^{-1}/\\text{unité pH}$).\n1. Identifier le trouble primaire (acidose/alcalose, métabolique/respiratoire).\n2. Représenter la situation sur le diagramme de Davenport $[HCO_3^-] = f(pH)$.\n3. Calculer la compensation respiratoire attendue selon la formule empirique de Winter : $P_{CO_2\\,attendu} = 1.5 [HCO_3^-] + 8 \\pm 2\\text{ mmHg}$. En déduire si une compensation s\'est mise en place.',
    hints: [
      'Un $pH < 7.38$ signe une acidose.',
      'Si le trouble primaire est métabolique, $[HCO_3^-]$ est anormale et $P_{CO_2}$ n\'est pas encore modifiée.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Identification du trouble primitif',
          explication: 'Le $pH = 7.15 < 7.38$ indique une acidose sévère. La concentration en bicarbonates $[HCO_3^-] = 13\\text{ mmol/L}$ est effondrée (normale à 24), tandis que $P_{CO_2} = 38\\text{ mmHg}$ est quasi normale. Il s\'agit donc sans ambiguïté d\'une **acidose métabolique aiguë** (due par exemple à une acidocétose diabétique, une acidose lactique ou une intoxication).'
        },
        {
          titre: '2. Positionnement sur le diagramme de Davenport',
          explication: 'Sur le diagramme de Davenport ($[HCO_3^-]$ en ordonnée, $pH$ en abscisse) :\n- Le point physiologique normal $N$ est à $(7.40, 24)$ sur l\'isobare $P_{CO_2} = 40\\text{ mmHg}$.\n- Le point du patient est à $(7.15, 13)$ situé bien en dessous de la ligne des tampons non bicarbonates passant par $N$.\n- La perturbation correspond à une chute verticale vers le bas (consommation de bicarbonates par un apport massif d\'ions $H^+$ exogènes).'
        },
        {
          titre: '3. Analyse de la compensation respiratoire (formule de Winter)',
          explication: 'Selon la formule de Winter, pour une acidose métabolique compensée par hyperventilation réflexe (respiration de Kussmaul éliminant le $CO_2$) :\n$$P_{CO_2\\,attendu} = 1.5 \\times 13 + 8 \\pm 2 = 19.5 + 8 \\pm 2 = 27.5 \\pm 2\\text{ mmHg}$$\nOr la $P_{CO_2}$ mesurée est de $38\\text{ mmHg}$, très supérieure à $29.5\\text{ mmHg}$. La réponse respiratoire est donc inadaptée (épuisement respiratoire, coma ou trouble respiratoire associé). Il y a une **acidose métabolique non compensée avec composante respiratoire surajoutée**.'
        }
      ],
      conclusion: 'Le diagramme de Davenport et la formule de Winter permettent de diagnostiquer immédiatement les troubles acido-basiques mixtes engageant le pronostic vital.',
      reflexeDuCorrecteur: 'Toujours calculer la compensation attendue : un paramètre normal ($P_{CO_2} = 38$) en présence d\'un trouble sévère ($pH = 7.15$) est hautement anormal !'
    }
  },
  {
    id: 'exo-100-09-cristallo-blende-diamant',
    title: 'Structure Cristalline du Diamant & de la Blende $ZnS$',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Cristallographie & Structure des Solides',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours G2E / Mines-Ponts PC',
    dureeEstimeeMin: 35,
    enonce: 'La structure cristalline de la sphalérite (blende de zinc $ZnS$) est décrite par un réseau cubique à faces centrées (CFC) d\'anions sulfure $S^{2-}$ dans lequel les cations $Zn^{2+}$ occupent la moitié des sites tétraédriques.\n1. Justifier la stœchiométrie $ZnS$ à partir de la population de la maille.\n2. Quelle est la coordinence de chaque type d\'ion ?\n3. Établir la condition de contact entre $Zn^{2+}$ et $S^{2-}$ le long de la grande diagonale du cube en fonction du paramètre de maille $a$ et des rayons ioniques $r_+$ et $r_-$.\n4. En déduire la compacité du cristal de diamant (où tous les atomes sont des carbones identiques $C$) et comparer à la compacité d\'un empilement compact pur ($74\\%$).',
    hints: [
      'Un réseau CFC contient 8 sites tétraédriques au total.',
      'Le centre d\'un site tétraédrique est situé à un quart de la grande diagonale du cube : $d = a \\frac{\\sqrt{3}}{4}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Population de la maille',
          explication: '- Anions $S^{2-}$ en réseau CFC : $8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2} = 1 + 3 = 4$ anions par maille.\n- Cations $Zn^{2+}$ : le cube contient 8 petits cubes de côté $a/2$, chacun abritant un site tétraédrique en son centre. Les cations occupent la moitié de ces sites (un sur deux en alternance), soit $8 \\times \\frac{1}{2} \\times 1 = 4$ cations entièrement contenus dans la maille.\nLa population globale est de 4 groupements formulaires $ZnS$ par maille ($Z = 4$). La stœchiométrie $1:1$ et la neutralité électrique sont parfaitement respectées.'
        },
        {
          titre: '2. Coordinence',
          explication: '- Chaque cation $Zn^{2+}$ est au centre d\'un tétraèdre régulier formé par 4 anions $S^{2-}$ : coordinence tétraédrique [4].\n- Chaque anion $S^{2-}$ est entouré de 4 cations $Zn^{2+}$ situés aux sommets d\'un tétraèdre régulier : coordinence [4].\nLa coordinence est donc [4, 4].'
        },
        {
          titre: '3. Condition de contact et paramètre de maille',
          explication: 'Le contact anion-cation a lieu le long de la grande diagonale reliant un sommet à l\'un des sites tétraédriques. La distance entre le sommet et le centre du site tétraédrique vaut le quart de la grande diagonale du cube $a\\sqrt{3}/4$ :\n$$r_+ + r_- = \\frac{a\\sqrt{3}}{4} \\iff a = \\frac{4(r_+ + r_-)}{\\sqrt{3}}$$'
        },
        {
          titre: '4. Compacité du diamant',
          explication: 'Dans le diamant, tous les atomes sont identiques ($r_+ = r_- = r_C$). La condition de contact donne $2 r_C = a \\frac{\\sqrt{3}}{4} \\implies a = \\frac{8 r_C}{\\sqrt{3}}$.\nLa maille contient 8 atomes de carbone. Le volume occupé par les 8 sphères dures est $V_{atomes} = 8 \\times \\frac{4}{3}\\pi r_C^3 = \\frac{32}{3}\\pi r_C^3$.\nLe volume de la maille cubique est $V_{maille} = a^3 = \\left(\\frac{8 r_C}{\\sqrt{3}}\\right)^3 = \\frac{512}{3\\sqrt{3}} r_C^3$.\nLa compacité du diamant vaut donc rigoureusement :\n$$C = \\frac{V_{atomes}}{V_{maille}} = \\frac{\\frac{32}{3}\\pi}{\\frac{512}{3\\sqrt{3}}} = \\frac{32\\pi \\sqrt{3}}{512} = \\frac{\\pi \\sqrt{3}}{16} \\approx 0.340 = 34\\%$$\nLa structure du diamant est un empilement extrêmement "ouvert" ou creux ($34\\%$ seulement contre $74\\%$ pour un CFC compact), dicté par la forte directivité covalente tétraédrique des hybridations $sp^3$.'
        }
      ],
      conclusion: 'La géométrie tétraédrique $sp^3$ impose une compacité exceptionnellement basse au diamant malgré sa dureté record.',
      reflexeDuCorrecteur: 'Retenez par cœur le résultat remarquable : la compacité du diamant est exactement de $\\pi\\sqrt{3}/16 \\approx 34\\%$.'
    }
  },
  {
    id: 'exo-100-10-rayleigh-interferences-epaisseur',
    title: 'Interféromètre de Michelson & Mesure de l\'Épaisseur d\'une Cellule Vivante',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Optique Ondulatoire & Interférences',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Un interféromètre de Michelson est réglé en coin d\'air éclairé sous incidence normale par une source de sodium de longueur d\'onde $\\lambda_0 = 589\\text{ nm}$. On observe des franges rectilignes équidistantes d\'interfrange $i = 2.0\\text{ mm}$. On intercale sur le trajet de l\'un des faisceaux une lamelle mince biologique d\'épaisseur uniforme $e$ et d\'indice $n = 1.38$ (cellule épithéliale dans l\'eau d\'indice $n_0 = 1.33$).\n1. Déterminer l\'expression du chemin optique supplémentaire introduit par la cellule.\n2. Lors de l\'introduction de la cellule, on observe un défilement de $N = 12$ franges au niveau du réticule central. En déduire l\'épaisseur $e$ de la cellule vivante.\n3. Quelle est la précision minimale de mesure accessible avec un détecteur capable d\'estimer un dixième de frange ?',
    hints: [
      'Le faisceau traverse la cellule deux fois (aller-retour dans le bras du miroir).',
      'Le chemin optique supplémentaire est $\\Delta \\delta = 2(n - n_0)e$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Variation de chemin optique',
          explication: 'Dans le bras du Michelson, la lumière traverse la cellule d\'épaisseur $e$ à l\'aller et au retour. Le chemin optique dans la zone avec cellule est $\\delta_1 = 2 n e$, alors qu\'en l\'absence de cellule (remplie par le milieu aqueux d\'indice $n_0$) il valait $\\delta_0 = 2 n_0 e$.\nLa différence de chemin optique additionnelle est donc :\n$$\\Delta \\delta = 2(n - n_0) e$$'
        },
        {
          titre: '2. Défilement de franges et calcul de l\'épaisseur',
          explication: 'Chaque défilement d\'une frange d\'interférence correspond à une variation de différence de marche égale à une longueur d\'onde $\\lambda_0$ :\n$$\\Delta \\delta = N \\lambda_0 \\iff 2(n - n_0) e = N \\lambda_0$$\nOn en déduit l\'épaisseur de la couche biologique :\n$$e = \\frac{N \\lambda_0}{2(n - n_0)} = \\frac{12 \\times 589\\times 10^{-9}\\text{ m}}{2 \\times (1.38 - 1.33)} = \\frac{7.068\\times 10^{-6}}{2 \\times 0.050} = \\frac{7.068\\times 10^{-6}}{0.100} \\approx 7.07\\times 10^{-5}\\text{ m} = 70.7\\;\\mu\\text{m}$$'
        },
        {
          titre: '3. Précision nanométrique de l\'interférométrie',
          explication: 'Si le détecteur résout $\\Delta N = 0.1$ frange :\n$$\\delta e = \\frac{0.1 \\times 589\\text{ nm}}{2 \\times 0.05} = \\frac{58.9\\text{ nm}}{0.1} = 589\\text{ nm} \\approx 0.59\\;\\mu\\text{m}$$\nL\'interférométrie optique permet ainsi des mesures d\'épaisseur cellulaire sans contact avec une précision sub-micrométrique.'
        }
      ],
      conclusion: 'Le décalage de phase interférométrique est le principe de la microscopie holographique numérique et de la tomographie par cohérence optique (OCT).',
      reflexeDuCorrecteur: 'N\'oubliez jamais le facteur 2 d\'aller-retour dans le bras d\'un interféromètre de Michelson.'
    }
  },
  {
    id: 'exo-100-11-diffraction-fentes-young-largeur',
    title: 'Interférences & Diffraction à Deux Fentes de Largeur Finie',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Optique Ondulatoire',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'On éclaire par une onde plane monochromatique de longueur d\'onde $\\lambda$ deux fentes parallèles de largeur $b$, distantes de $a > b$ (d\'axe à axe). L\'observation se fait dans le plan focal d\'une lentille de focale $f\'.$\n1. Établir l\'expression de l\'intensité lumineuse $I(x)$ sur l\'écran en fonction de $u = \\frac{\\pi b x}{\\lambda f\'}$ et $v = \\frac{\\pi a x}{\\lambda f\'}$.\n2. Combien de franges d\'interférences brillantes observe-t-on à l\'intérieur de la tache centrale de diffraction si $a = 5 b$ ?\n3. Que devient la figure si l\'on masque l\'une des deux fentes ?',
    hints: [
      'L\'intensité résulte du produit de la fonction de diffraction d\'une fente $(\\mathrm{sinc}\\,u)^2$ et de la fonction d\'interférence à deux ondes $\\cos^2 v$.',
      'Le premier zéro de diffraction a lieu pour $u = \\pi$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Expression de l\'intensité résultante',
          explication: 'L\'amplitude diffractée est la transformée de Fourier de la transmittance des deux fentes. Par théorème de retard :\n$$I(x) = I_0 \\left( \\frac{\\sin u}{u} \\right)^2 \\cos^2(v) = I_0 \\,\\mathrm{sinc}^2\\left( \\frac{\\pi b x}{\\lambda f\'} \\right) \\cos^2\\left( \\frac{\\pi a x}{\\lambda f\'} \\right)$$\nLe terme en sinus cardinal module en enveloppe le terme d\'interférences rapides en cosinus carré.'
        },
        {
          titre: '2. Décompte des franges d\'interférence dans la tache centrale',
          explication: 'La tache centrale de diffraction est délimitée par les deux premiers zéros de diffraction : $u = \\pm \\pi \\implies x = \\pm \\frac{\\lambda f\'}{b}$. Sa largeur totale vaut $L_{diff} = \\frac{2\\lambda f\'}{b}$.\nL\'interfrange des franges serrées d\'interférences vaut $i = \\frac{\\lambda f\'}{a}$.\nLe nombre de franges brillantes contenues dans la tache centrale est le rapport :\n$$N = \\frac{L_{diff}}{i} = \\frac{2\\lambda f\' / b}{\\lambda f\' / a} = 2 \\frac{a}{b} = 2 \\times 5 = 10$$\nComme la frange centrale $p=0$ est au centre, les franges correspondent aux ordres $p = 0, \\pm 1, \\pm 2, \\pm 3, \\pm 4$ (soit 9 franges brillantes bien visibles), tandis que les ordres $p = \\pm 5$ tombent exactement sur les zéros d\'extinction de la diffraction ($5 i = \\lambda f\'/b$), constituant des ordres manquants.'
        },
        {
          titre: '3. Masquage d\'une fente',
          explication: 'Si l\'on obture l\'une des fentes, le terme d\'interférences $\\cos^2 v$ disparaît : les franges fines s\'effacent instantanément et l\'on retrouve la figure de diffraction pure d\'une fente unique avec un profil continu d\'intensité $I_1(x) = \\frac{I_0}{4} \\mathrm{sinc}^2(u)$.'
        }
      ],
      conclusion: 'Le produit diffraction $\\times$ interférences est l\'illustration parfaite du théorème de convolution en optique de Fourier.',
      reflexeDuCorrecteur: 'Lorsque $a/b$ est un entier $k$, les franges d\'interférences d\'ordre $p = \\pm k$ coïncident avec les zéros d\'enveloppe : ce sont les "ordres manquants" classiques.'
    }
  },
  {
    id: 'exo-100-12-bernoulli-venturi-debitmetre',
    title: 'Débitmètre à Tube de Venturi & Correction de Compressibilité',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-hemodynamique-poiseuille',
    chapitreTitre: 'Mécanique des Fluides',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / Centrale PSI',
    dureeEstimeeMin: 30,
    enonce: 'Un fluide incompressible de masse volumique $\\rho$ traverse un tube horizontal de Venturi de section d\'entrée $S_1$ rétrécie à $S_2 < S_1$ au col. Un manomètre différentiel à liquide de masse volumique $\\rho_m > \\rho$ mesure une dénivellation $h$ entre les deux prises de pression.\n1. Établir l\'expression théorique du débit volumique $D_v$ en fonction de $S_1, S_2, \\rho, \\rho_m, g$ et $h$.\n2. Expliquer l\'intérêt pratique de raccorder le col par un divergent à angle très faible (typiquement $7^\\circ$).',
    hints: [
      'Appliquer le théorème de Bernoulli entre la section 1 et la section 2.',
      'La différence de pression manométrique vaut $P_1 - P_2 = (\\rho_m - \\rho) g h$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Établissement de la relation de débit de Venturi',
          explication: 'Pour une ligne de courant horizontale sans perte de charge : $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$.\nPar continuité de débit : $D_v = S_1 v_1 = S_2 v_2 \\implies v_2 = \\frac{S_1}{S_2} v_1$.\n$$P_1 - P_2 = \\frac{1}{2}\\rho v_1^2 \\left[ \\left(\\frac{S_1}{S_2}\\right)^2 - 1 \\right] = \\frac{1}{2}\\rho D_v^2 \\left( \\frac{1}{S_2^2} - \\frac{1}{S_1^2} \\right)$$\nLa pression différentielle manométrique s\'écrit $P_1 - P_2 = (\\rho_m - \\rho) g h$. En égalant les deux expressions :\n$$D_v = S_1 S_2 \\sqrt{\\frac{2(\\rho_m - \\rho) g h}{\\rho (S_1^2 - S_2^2)}}$$'
        },
        {
          titre: '2. Rôle du divergent à angle faible',
          explication: 'Dans le divergent, le fluide subit une décélération et un gradient de pression adverse ($\\,\\mathrm{d}P/\\mathrm{d}x > 0$). Si l\'angle d\'ouverture dépasse $10^\\circ$ à $15^\\circ$, la couche limite décolle de la paroi, créant de violents tourbillons et une forte dissipation visqueuse (perte de charge singulière). Un cône convergent court suivi d\'un divergent très progressif (angle $\\approx 7^\\circ$) permet de récupérer jusqu\'à $95\\%$ de la pression statique initiale.'
        }
      ],
      conclusion: 'Le tube de Venturi est l\'appareil de mesure de débit le plus économe en énergie car il minimise les pertes de charge irréversibles.',
      reflexeDuCorrecteur: 'N\'oubliez pas la correction de poussée du fluide supérieur dans le manomètre en U : $\\Delta P = (\\rho_m - \\rho) g h$ et non simplement $\\rho_m g h$.'
    }
  },
  {
    id: 'exo-100-13-marche-quantique-reflexion',
    title: 'Marche de Potentiel Quantique 1D & Onde Évanescente sous la Barrière',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Physique Quantique Ondulatoire',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / ENS BCPST',
    dureeEstimeeMin: 40,
    enonce: 'Une particule de masse $m$ et d\'énergie $E > 0$ se propage selon les $x$ croissants vers une marche de potentiel définie par $V(x) = 0$ pour $x < 0$ et $V(x) = V_0 > 0$ pour $x > 0$. On se place dans le cas où $E < V_0$.\n1. Écrire la forme générale de la fonction d\'onde stationnaire $\\psi(x)$ dans les régions 1 ($x < 0$) et 2 ($x > 0$) en éliminant les termes divergeant en $+\\infty$.\n2. En écrivant les conditions de raccordement en $x=0$, exprimer le coefficient de réflexion en amplitude $\\underline{r} = B/A$.\n3. Démontrer que le coefficient de réflexion en probabilité $R = |\\underline{r}|^2$ vaut rigoureusement 1 (réflexion totale quantique), mais que la densité de probabilité de présence dans la zone classiquement interdite $x > 0$ est strictement non nulle (effet tunnel).',
    hints: [
      'Poser $k_1 = \\frac{\\sqrt{2mE}}{\\hbar}$ et $K_2 = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$.',
      'Assurer la continuité de $\\psi(x)$ et de sa dérivée première $\\psi\'(x)$ en $x=0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Fonctions d\'onde par régions',
          explication: '- Région 1 ($x < 0, V=0$) : $-\\frac{\\hbar^2}{2m} \\psi\'\' = E \\psi \\implies \\psi_1(x) = A e^{j k_1 x} + B e^{-j k_1 x}$ avec $k_1 = \\frac{\\sqrt{2mE}}{\\hbar}$.\n- Région 2 ($x > 0, V=V_0 > E$) : $-\\frac{\\hbar^2}{2m} \\psi\'\' = (E - V_0) \\psi \\implies \\psi\'\' = K_2^2 \\psi$ avec $K_2 = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$.\nLa solution générale est $\\psi_2(x) = C e^{-K_2 x} + D e^{K_2 x}$. La condition de normalisabilité en $+\\infty$ impose $D = 0$. Il ne subsiste qu\'une onde évanescente $\\psi_2(x) = C e^{-K_2 x}$.'
        },
        {
          titre: '2. Conditions de raccordement en $x=0$',
          explication: 'Continuité de $\\psi$ en 0 : $A + B = C$.\nContinuité de $\\psi\'$ en 0 : $j k_1 (A - B) = -K_2 C = -K_2 (A + B)$.\nOn en déduit le rapport d\'amplitude réfléchie :\n$$\\underline{r} = \\frac{B}{A} = \\frac{j k_1 + K_2}{j k_1 - K_2} = \\frac{K_2 + j k_1}{-K_2 + j k_1} = -\\frac{K_2 + j k_1}{K_2 - j k_1}$$\nEn multipliant par le conjugué, $\\underline{r}$ est le quotient de deux nombres complexes conjugués.'
        },
        {
          titre: '3. Réflexion totale et pénétration évanescente',
          explication: 'Le module au carré vaut :\n$$R = |\\underline{r}|^2 = \\left| -\\frac{K_2 + j k_1}{K_2 - j k_1} \\right|^2 = \\frac{K_2^2 + k_1^2}{K_2^2 + k_1^2} = 1$$\nLa réflexion est rigoureusement totale : le courant de probabilité transmis en régime stationnaire est nul ($j_{trans} = 0$).\nCependant, pour $x > 0$ :\n$$|\\psi_2(x)|^2 = |C|^2 e^{-2 K_2 x} > 0$$\nIl existe une probabilité non nulle de trouver la particule dans la barrière sur une profondeur de pénétration caractéristique $\\delta = \\frac{1}{2 K_2} = \\frac{\\hbar}{2\\sqrt{2m(V_0 - E)}}$. Si la barrière a une largeur finie $L$, cette onde évanescente permet le franchissement par **effet tunnel**.'
        }
      ],
      conclusion: 'Ce problème établit l\'analogie formelle rigoureuse entre la mécanique quantique et la réflexion totale frustrée en optique électromagnétique.',
      reflexeDuCorrecteur: 'Notez le déphasage à la réflexion : $\\underline{r} = e^{j \\phi}$ avec $\\tan(\\phi/2) = k_1 / K_2$.'
    }
  },
  {
    id: 'exo-100-14-loi-normale-laplace-gauss',
    title: 'Intégrale de Gauss & Moments de la Loi Normale Centrée Réduite',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-proba-continue',
    chapitreTitre: 'Probabilités à Densité',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'On pose $I = \\int_{-\\infty}^{+\\infty} e^{-t^2/2}\\,\\mathrm{d}t$.\n1. En calculant $I^2$ par passage en coordonnées polaires dans le plan $\\mathbb{R}^2$, démontrer que $I = \\sqrt{2\\pi}$. En déduire que $f(t) = \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}$ est une densité de probabilité sur $\\mathbb{R}$.\n2. Soit $Z \\sim \\mathcal{N}(0, 1)$. Par intégration par parties, établir la relation de récurrence reliant $E(Z^{2k})$ à $E(Z^{2k-2})$.\n3. En déduire la valeur explicite du moment d\'ordre $2k$ en fonction de la factorielle double $(2k-1)!!$.',
    hints: [
      'Pour $I^2$, écrire $\\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)/2}\\,\\mathrm{d}x\\mathrm{d}y$ et poser $x = r\\cos\\theta, y = r\\sin\\theta$ avec le jacobien $r$.',
      'Intégrer par parties $t^{2k} e^{-t^2/2} = t^{2k-1} (t e^{-t^2/2})$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul de l\'intégrale de Gauss en coordonnées polaires',
          explication: 'D\'après le théorème de Fubini :\n$$I^2 = \\left( \\int_{-\\infty}^{+\\infty} e^{-x^2/2}\\,\\mathrm{d}x \\right) \\left( \\int_{-\\infty}^{+\\infty} e^{-y^2/2}\\,\\mathrm{d}y \\right) = \\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)/2}\\,\\mathrm{d}x\\mathrm{d}y$$\nEn passant en coordonnées polaires ($x = r\\cos\\theta, y = r\\sin\\theta$, $\\mathrm{d}x\\mathrm{d}y = r\\,\\mathrm{d}r\\mathrm{d}\\theta$) :\n$$I^2 = \\int_0^{2\\pi} \\mathrm{d}\\theta \\int_0^{+\\infty} r e^{-r^2/2}\\,\\mathrm{d}r = 2\\pi \\left[ -e^{-r^2/2} \\right]_0^{+\\infty} = 2\\pi (0 - (-1)) = 2\\pi$$\nComme la fonction est strictement positive, $I = \\sqrt{2\\pi}$. La fonction $f(t) = \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}$ vérifie donc $\\int_{-\\infty}^{+\\infty} f(t)\\,\\mathrm{d}t = 1$ : c\'est une densité.'
        },
        {
          titre: '2. Relation de récurrence par intégration par parties',
          explication: 'Par parité, les moments d\'ordre impair sont nuls : $E(Z^{2k+1}) = 0$. Pour l\'ordre pair :\n$$E(Z^{2k}) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{+\\infty} t^{2k-1} \\cdot (t e^{-t^2/2})\\,\\mathrm{d}t$$\nEn intégrant par parties avec $u = t^{2k-1} \\implies u\' = (2k-1)t^{2k-2}$ et $v\' = t e^{-t^2/2} \\implies v = -e^{-t^2/2}$ :\n$$E(Z^{2k}) = \\frac{1}{\\sqrt{2\\pi}} \\left( \\left[ -t^{2k-1} e^{-t^2/2} \\right]_{-\\infty}^{+\\infty} + (2k-1) \\int_{-\\infty}^{+\\infty} t^{2k-2} e^{-t^2/2}\\,\\mathrm{d}t \\right)$$\nLe crochet s\'annule par croissances comparées, d\'où la relation fondamentale :\n$$E(Z^{2k}) = (2k - 1) E(Z^{2k-2})$$'
        },
        {
          titre: '3. Expression explicite des moments d\'ordre pair',
          explication: 'Comme $E(Z^0) = 1$, on obtient par cascade :\n$$E(Z^{2k}) = (2k-1)(2k-3) \\dots 3 \\times 1 = (2k-1)!! = \\frac{(2k)!}{2^k k!}$$\nPour $k=1$ : $E(Z^2) = 1$ (variance unitaire).\nPour $k=2$ : $E(Z^4) = 3$ (ce qui donne le coefficient d\'aplatissement de kurtosis $\\beta_2 = E(Z^4)/\\sigma^4 = 3$).'
        }
      ],
      conclusion: 'La loi normale est l\'archétype des lois continues de la théorie des probabilités et de la physique statistique.',
      reflexeDuCorrecteur: 'Retenez $(2k-1)!! = \\frac{(2k)!}{2^k k!}$, qui revient très souvent pour les calculs de moments et développements en série de Taylor.'
    }
  },
  {
    id: 'exo-100-15-polynomes-legendre-orthogonalite',
    title: 'Polynômes Orthogonaux de Legendre & Formule de Rodrigues',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Espaces Préhilbertiens & Polynômes Orthogonaux',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / Centrale PC',
    dureeEstimeeMin: 45,
    enonce: 'Dans l\'espace $\\mathbb{R}[X]$ muni du produit scalaire $\\langle P, Q \\rangle = \\int_{-1}^1 P(t) Q(t)\\,\\mathrm{d}t$, on définit la suite des polynômes de Legendre par la formule de Rodrigues :\n$$L_n(X) = \\frac{1}{2^n n!} \\frac{\\mathrm{d}^n}{\\mathrm{d}X^n} \\left[ (X^2 - 1)^n \\right]$$\n1. Vérifier que $L_n$ est de degré $n$ et déterminer son coefficient dominant.\n2. Démontrer par intégrations par parties successives que pour tout polynôme $Q$ de degré strictement inférieur à $n$ ($\\deg Q < n$), $\\langle L_n, Q \\rangle = 0$.\n3. Calculer la norme $\|L_n\|^2 = \\langle L_n, L_n \\rangle$.\n4. En déduire la solution au problème de meilleure approximation quadratique sur $[-1, 1]$.',
    hints: [
      'Poser $W_n(X) = (X^2 - 1)^n$. Remarquer que 1 et -1 sont racines de multiplicité $n$ de $W_n$, donc toutes les dérivées $W_n^{(k)}(\\pm 1)$ s\'annulent pour $k \\le n-1$.',
      'Pour $\|L_n\|^2$, remplacer l\'un des $L_n$ par sa définition de Rodrigues et intégrer $n$ fois par parties.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Degré et coefficient dominant',
          explication: 'Le polynôme $(X^2 - 1)^n$ est de degré $2n$, son terme de plus haut degré est $X^{2n}$. En dérivant $n$ fois, le terme dominant est $\\frac{(2n)!}{n!} X^n$. Avec le préfacteur $\\frac{1}{2^n n!}$, le coefficient dominant de $L_n$ vaut :\n$$\\mathrm{dom}(L_n) = \\frac{(2n)!}{2^n (n!)^2}$$\n$L_n$ est donc rigoureusement un polynôme de degré $n$.'
        },
        {
          titre: '2. Propriété d\'orthogonalité',
          explication: 'Soit $Q \\in \\mathbb{R}_{n-1}[X]$. En notant $W_n(t) = (t^2 - 1)^n$ :\n$$\\langle L_n, Q \\rangle = \\frac{1}{2^n n!} \\int_{-1}^1 W_n^{(n)}(t) Q(t)\\,\\mathrm{d}t$$\nEn intégrant par parties, le crochet $\\left[ W_n^{(n-1)}(t) Q(t) \\right]_{-1}^1$ s\'annule car $(\\pm 1)$ est racine de multiplicité $n$ de $W_n$. En réitérant $n$ intégrations par parties consécutives :\n$$\\langle L_n, Q \\rangle = \\frac{(-1)^n}{2^n n!} \\int_{-1}^1 W_n(t) Q^{(n)}(t)\\,\\mathrm{d}t$$\nComme $\\deg Q \\le n-1$, sa dérivée $n$-ième est identiquement nulle : $Q^{(n)}(t) = 0$. Donc $\\langle L_n, Q \\rangle = 0$ pour tout $Q \\in \\mathbb{R}_{n-1}[X]$. La famille $(L_0, \\dots, L_n)$ forme une famille orthogonale de degrés échelonnés.'
        },
        {
          titre: '3. Calcul de la norme $\|L_n\|^2$',
          explication: 'En appliquant le même principe avec $Q(t) = L_n(t)$ où seul le coefficient dominant contribue à $L_n^{(n)}$ :\n$$\\langle L_n, L_n \\rangle = \\frac{(-1)^n}{2^n n!} \\int_{-1}^1 (t^2 - 1)^n \\cdot \\mathrm{dom}(L_n) n!\\,\\mathrm{d}t = \\frac{(2n)!}{2^{2n} (n!)^2} \\int_{-1}^1 (1 - t^2)^n\\,\\mathrm{d}t$$\nL\'intégrale $\\int_{-1}^1 (1-t^2)^n\\,\\mathrm{d}t = 2 \\int_0^1 (1-t^2)^n\\,\\mathrm{d}t = \\frac{2^{2n+1} (n!)^2}{(2n+1)!}$ (intégrale de Wallis). Les termes se simplifient pour donner la valeur canonique :\n$$\\|L_n\\|^2 = \\frac{2}{2n + 1}$$'
        },
        {
          titre: '4. Meilleure approximation polynomiale',
          explication: 'La projection orthogonale d\'une fonction $f$ sur le sous-espace $\\mathbb{R}_n[X]$ est donnée par la série de Fourier-Legendre tronquée :\n$$P_n(f) = \\sum_{k=0}^n \\frac{\\langle f, L_k \\rangle}{\\|L_k\\|^2} L_k = \\sum_{k=0}^n \\frac{2k+1}{2} \\langle f, L_k \\rangle L_k$$'
        }
      ],
      conclusion: 'Les polynômes de Legendre interviennent dans la résolution de l\'équation de Laplace en coordonnées sphériques (harmoniques sphériques en géophysique et chimie quantique des orbitales atomiques).',
      reflexeDuCorrecteur: 'L\'astuce de la formule de Rodrigues réside dans l\'absorption de toutes les dérivées par parties grâce à l\'annulation des crochets aux bornes $\\pm 1$.'
    }
  }
];
