import type { ExerciseItem } from './cpgeData';

export const MASSIVE_EXERCISES: ExerciseItem[] = [
  // =========================================================================
  // MATHEMATIQUES (1 à 15)
  // =========================================================================
  {
    id: 'exo-mass-1-endomorphisme-nilpotent',
    title: 'Indice de nilpotence, sous-espaces emboîtés & Forme de Jordan',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'MPI', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 25,
    enonce: 'Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension $n \\ge 1$ et $u \\in \\mathcal{L}(E)$ nilpotent d\'indice de nilpotence $p$ (c-à-d $u^{p-1} \\neq 0$ et $u^p = 0$).\n1. Montrer que la suite des noyaux itérés $(\\ker(u^k))_{k \\ge 0}$ est strictement croissante jusqu\'au rang $p$.\n2. En déduire que $p \\le n$.\n3. Si $p = n$, montrer qu\'il existe un vecteur $x_0 \\in E$ tel que la famille $(x_0, u(x_0), \\dots, u^{n-1}(x_0))$ soit une base de $E$. Quelle est la matrice de $u$ dans cette base ?',
    hints: [
      'Pour la stricte croissance, raisonner par l\'absurde : si $\\ker(u^k) = \\ker(u^{k+1})$, montrer par récurrence que la suite stationne.',
      'Pour $p=n$, choisir $x_0$ tel que $u^{n-1}(x_0) \\neq 0$ et tester la liberté avec des combinaisons linéaires composées par les puissances de $u$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Stricte inclusion des noyaux',
          explication: 'Si $\\ker(u^k) = \\ker(u^{k+1})$, alors pour tout $x \\in \\ker(u^{k+2})$, $u(x) \\in \\ker(u^{k+1}) = \\ker(u^k)$, donc $u^{k+1}(x) = 0$, soit $x \\in \\ker(u^{k+1})$. Par récurrence, la suite stationne dès qu\'il y a égalité. Comme $u^{p-1} \\neq 0$, $\\ker(u^{p-1}) \\neq E = \\ker(u^p)$. Les inclusions sont donc strictes jusqu\'au rang $p$.'
        },
        {
          titre: '2. Majoration de l\'indice de nilpotence',
          explication: 'Puisque $\\dim \\ker(u^0) = 0 < \\dim \\ker(u^1) < \\dots < \\dim \\ker(u^p) = n$, chaque saut de dimension est au moins égal à 1. Par conséquent, $n \\ge p$.',
          calculs: 'p \\le n'
        },
        {
          titre: '3. Base de Krylov et bloc de Jordan',
          explication: 'Comme $u^{n-1} \\neq 0$, il existe $x_0 \\in E$ tel que $u^{n-1}(x_0) \\neq 0$. Si $\\sum_{k=0}^{n-1} a_k u^k(x_0) = 0$, en composant par $u^{n-1}$, tous les termes d\'ordre $\\ge 1$ s\'annulent sauf le premier : $a_0 u^{n-1}(x_0) = 0 \\implies a_0 = 0$. Par récurrence immédiate, tous les $a_k$ sont nuls : la famille est libre à $n$ éléments, c\'est une base.',
          calculs: '\\mathrm{Mat}(u) = \\begin{pmatrix} 0 & 0 & \\dots & 0 \\\\ 1 & 0 & \\dots & 0 \\\\ 0 & 1 & \\dots & 0 \\\\ \\vdots & \\ddots & 1 & 0 \\end{pmatrix}'
        }
      ],
      conclusion: 'Un endomorphisme nilpotent d\'indice maximal $n$ est cyclique : il admet un unique bloc de Jordan de taille $n$.',
      reflexeDuCorrecteur: 'Pour tester la liberté d\'une famille de vecteurs construits par puissances d\'un opérateur, toujours composer par les puissances de l\'opérateur du plus haut degré au plus bas.'
    }
  },
  {
    id: 'exo-mass-2-commutation-diagonalisabilite',
    title: 'Endomorphismes qui commutent & Co-diagonalisation simultanée',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec MP / PSI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $E$ un espace vectoriel de dimension finie sur $\\mathbb{C}$, et $u, v \\in \\mathcal{L}(E)$ deux endomorphismes diagonalisables vérifiant $u \\circ v = v \\circ u$.\n1. Montrer que tout sous-espace propre de $u$ est stable par $v$.\n2. En déduire que $u$ et $v$ sont co-diagonalisables (c-à-d diagonalisables dans une même base).',
    hints: [
      'Si $x \\in E_\\lambda(u)$, calculez $u(v(x))$ en utilisant la commutation.',
      'Considérez la restriction de $v$ à chaque sous-espace propre $E_\\lambda(u)$ et utilisez le fait que tout endomorphisme diagonalisable induit un endomorphisme diagonalisable sur un sous-espace stable.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Stabilité des sous-espaces propres',
          explication: 'Soit $x \\in E_\\lambda(u)$, c\'est-à-dire $u(x) = \\lambda x$. On a $u(v(x)) = (u \\circ v)(x) = (v \\circ u)(x) = v(u(x)) = v(\\lambda x) = \\lambda v(x)$. Ainsi $v(x) \\in E_\\lambda(u)$ : le sous-espace propre $E_\\lambda(u)$ est stable par $v$.'
        },
        {
          titre: '2. Diagonalisation simultanée',
          explication: 'Puisque $u$ est diagonalisable, $E = \\bigoplus_{\\lambda \\in \\mathrm{Sp}(u)} E_\\lambda(u)$. Pour chaque $\\lambda$, $v$ stabilise $E_\\lambda(u)$. Comme $v$ est diagonalisable sur $E$ (il admet un polynôme annulateur scindé à racines simples), son endomorphisme induit $v_{|E_\\lambda(u)}$ est également diagonalisable. Il existe donc une base de $E_\\lambda(u)$ formée de vecteurs propres de $v$ (qui sont aussi par construction des vecteurs propres de $u$). En réunissant ces bases pour tous les $\\lambda$, on obtient une base commune de diagonalisation.'
        }
      ],
      conclusion: 'Deux endomorphismes diagonalisables commutent si et seulement s\'ils sont co-diagonalisables dans une base commune.',
      reflexeDuCorrecteur: 'Toujours retenir : sous-espace propre stable par tout endomorphisme qui commute avec l\'opérateur.'
    }
  },
  {
    id: 'exo-mass-3-cauchy-lipschitz-autonome',
    title: 'Équations différentielles autonomes & Points d\'équilibre',
    matiere: 'Mathématiques',
    chapitreId: 'maths-equa-diff-systemes',
    chapitreTitre: 'Équations Différentielles & Systèmes Linéaires',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts MP / PSI',
    dureeEstimeeMin: 25,
    enonce: 'On considère l\'équation différentielle autonome $y\'(t) = y(t)(1 - y(t)^2)$ avec la condition initiale $y(0) = y_0 \\in \\mathbb{R}$.\n1. Déterminer les solutions constantes (points d\'équilibre).\n2. Justifier l\'existence et l\'unicité de la solution maximale issue de $y_0$.\n3. Montrer que si $y_0 \\in ]0, 1[$, alors pour tout $t \\in \\mathbb{R}$, $y(t) \\in ]0, 1[$. Déterminer les limites de $y(t)$ en $\\pm\\infty$.',
    hints: [
      'Appliquez le théorème de Cauchy-Lipschitz global ou local pour les fonctions $\\mathcal{C}^1$.',
      'Deux courbes intégrales de solutions d\'une équation différentielle autonome ne peuvent jamais se croiser.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Points d\'équilibre',
          explication: 'Les solutions stationnaires vérifient $f(y) = y(1 - y^2) = 0$, soit $y_1(t) = -1$, $y_2(t) = 0$, et $y_3(t) = 1$.'
        },
        {
          titre: '2. Théorème de Cauchy-Lipschitz',
          explication: 'La fonction $f : y \\mapsto y(1 - y^2)$ est polynomiale donc de classe $\\mathcal{C}^1$ sur $\\mathbb{R}$. D\'après le théorème de Cauchy-Lipschitz, pour toute condition initiale $(0, y_0)$, il existe une unique solution maximale $y$ définie sur un intervalle ouvert $I$.'
        },
        {
          titre: '3. Confinement et limites',
          explication: 'Puisque les solutions stationnaires $0$ et $1$ ne peuvent être coupées par une autre trajectoire (unicité de Cauchy-Lipschitz), si $y_0 \\in ]0, 1[$, alors $\\forall t \\in I, y(t) \\in ]0, 1[$. Comme la solution est bornée dans $[0, 1]$, le théorème d\'échappement des compacts prouve que $I = \\mathbb{R}$. Sur $]0, 1[$, $y\' = y(1-y^2) > 0$ : la solution est strictement croissante. Étant bornée, elle admet des limites finies en $\\pm\\infty$ qui sont nécessairement des zéros de $f$, donc $\\lim_{t\\to-\\infty} y(t) = 0$ et $\\lim_{t\\to+\\infty} y(t) = 1$.'
        }
      ],
      conclusion: 'Le point d\'équilibre $y=1$ est un attracteur stable et $y=0$ est un répulseur instable.',
      reflexeDuCorrecteur: 'Pour borner une trajectoire, encadrez-la toujours entre deux solutions constantes évidentes : l\'unicité de Cauchy-Lipschitz interdit tout franchissement.'
    }
  },
  {
    id: 'exo-mass-4-gram-schmidt-legendre',
    title: 'Polynômes orthogonaux de Legendre & Équation différentielle',
    matiere: 'Mathématiques',
    chapitreId: 'maths-espaces-euclidiens',
    chapitreTitre: 'Espaces Euclidiens & Théorème Spectral',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X-ENS MP / PC',
    dureeEstimeeMin: 35,
    enonce: 'Sur $E = \\mathbb{R}[X]$, on munit de l\'espace du produit scalaire euclidien $\\langle P, Q \\rangle = \\int_{-1}^1 P(t) Q(t)\\,\\mathrm{d}t$.\nOn pose $L_n(X) = \\frac{1}{2^n n!} \\frac{\\mathrm{d}^n}{\\mathrm{d}X^n}\\left((X^2 - 1)^n\\right)$ pour tout $n \\in \\mathbb{N}$.\n1. Déterminer le degré et le coefficient dominant de $L_n$.\n2. Montrer par intégrations par parties que pour tout $k < n$, $\\langle L_n, X^k \\rangle = 0$.\n3. En déduire que $(L_n)_{n \\in \\mathbb{N}}$ est une famille orthogonale de polynômes.',
    hints: [
      'Remarquez que les dérivées d\'ordre $< n$ du polynôme $(X^2 - 1)^n$ s\'annulent toutes en $1$ et $-1$.',
      'Transférez les dérivées de $L_n$ vers le monôme $X^k$ par $n$ intégrations par parties successives.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Degré et coefficient dominant',
          explication: '$(X^2 - 1)^n = X^{2n} + \\dots$ Dérivé $n$ fois, son terme dominant devient $\\frac{(2n)!}{n!} X^n$. En multipliant par $\\frac{1}{2^n n!}$, $L_n$ est de degré $n$ et son coefficient dominant est $\\frac{(2n)!}{2^n (n!)^2}$.'
        },
        {
          titre: '2. Intégrations par parties successives',
          explication: 'Soit $U_n(t) = (t^2 - 1)^n$. Par $n$ intégrations par parties successives, tous les crochets s\'annulent car $U_n^{(j)}(\\pm 1) = 0$ pour $0 \\le j < n$ :',
          calculs: '\\int_{-1}^1 U_n^{(n)}(t) t^k\\,\\mathrm{d}t = (-1)^n \\int_{-1}^1 U_n(t) \\frac{\\mathrm{d}^n}{\\mathrm{d}t^n}(t^k)\\,\\mathrm{d}t'
        },
        {
          titre: '3. Orthogonalité',
          explication: 'Pour tout $k < n$, $\\frac{\\mathrm{d}^n}{\\mathrm{d}t^n}(t^k) = 0$, donc $\\langle L_n, X^k \\rangle = 0$. Par conséquent, $L_n$ est orthogonal à $\\mathbb{R}_{n-1}[X]$. Pour $m < n$, $L_m \\in \\mathbb{R}_{n-1}[X]$, d\'où $\\langle L_n, L_m \\rangle = 0$.'
        }
      ],
      conclusion: 'Les polynômes de Legendre constituent l\'unique famille orthogonale normalisée pour le poids $w(t)=1$ sur $[-1, 1]$.',
      reflexeDuCorrecteur: 'La formule de Rodrigues $U_n^{(n)}$ permet d\'intégrer par parties jusqu\'à annuler le polynôme test.'
    }
  },
  {
    id: 'exo-mass-5-serie-entiere-fibonacci',
    title: 'Série génératrice de la suite de Fibonacci & Formule de Binet',
    matiere: 'Mathématiques',
    chapitreId: 'maths-series-entieres',
    chapitreTitre: 'Séries Entières & Analyse Harmonique',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'CCINP MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'On définit la suite de Fibonacci par $F_0 = 0$, $F_1 = 1$ et $\\forall n \\ge 0, F_{n+2} = F_{n+1} + F_n$.\n1. Montrer que pour tout $n \\ge 0$, $F_n \\le 2^n$ et en déduire que la série entière $f(x) = \\sum_{n=0}^\\infty F_n x^n$ a un rayon de convergence $R \\ge 1/2$.\n2. Pour $|x| < R$, calculer $(1 - x - x^2) f(x)$ et en déduire l\'expression rationnelle de $f(x)$.\n3. Par décomposition en éléments simples, retrouver la formule de Binet pour $F_n$.',
    hints: [
      'Multipliez la série par $x$ et $x^2$ et faites la différence pour exploiter la relation de récurrence.',
      'Les racines de $1 - x - x^2$ sont l\'inverse du nombre d\'or $\\phi = \\frac{1+\\sqrt{5}}{2}$ et de son conjugué.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Rayon de convergence',
          explication: 'Par récurrence immédiate, $F_n \\le 2^n$. Donc $|F_n x^n| \\le |2x|^n$, qui converge pour $|x| < 1/2$. Le rayon de convergence vérifie donc $R \\ge 1/2$.'
        },
        {
          titre: '2. Calcul de la somme rationnelle',
          explication: 'Pour $|x| < R$ :',
          calculs: 'f(x) - x f(x) - x^2 f(x) = F_0 + (F_1 - F_0)x + \\sum_{n=2}^\\infty (F_n - F_{n-1} - F_{n-2})x^n = x \\implies f(x) = \\frac{x}{1 - x - x^2}'
        },
        {
          titre: '3. Décomposition et formule de Binet',
          explication: 'On factorise $1 - x - x^2 = (1 - \\phi x)(1 - \\phi\' x)$ avec $\\phi = \\frac{1+\\sqrt{5}}{2}$ et $\\phi\' = \\frac{1-\\sqrt{5}}{2}$. Par décomposition en éléments simples, $f(x) = \\frac{1}{\\sqrt{5}}\\left(\\frac{1}{1 - \\phi x} - \\frac{1}{1 - \\phi\' x}\\right)$. En développant en série géométrique :',
          calculs: 'F_n = \\frac{\\phi^n - (\\phi\')^n}{\\sqrt{5}}'
        }
      ],
      conclusion: 'La méthode des séries génératrices transforme une relation de récurrence linéaire en une simple décomposition de fraction rationnelle.',
      reflexeDuCorrecteur: 'Toujours poser la série génératrice pour résoudre une équation de récurrence discrète complexe.'
    }
  },
  {
    id: 'exo-mass-6-proba-urne-polya',
    title: 'Urne de Polya & Convergence en loi vers la loi uniforme',
    matiere: 'Mathématiques',
    chapitreId: 'maths-probabilites-discretes',
    chapitreTitre: 'Probabilités Discrètes & Variables Aléatoires',
    filieres: ['MP', 'MPI', 'BCPST'],
    annee: '1ère & 2ème année',
    difficulte: 3,
    origin: 'ENS Lyon MP / MPI',
    dureeEstimeeMin: 30,
    enonce: 'Une urne contient initialement 1 boule blanche et 1 boule noire. À chaque étape, on tire une boule au hasard, on note sa couleur, puis on la remet dans l\'urne en ajoutant 1 boule supplémentaire de la même couleur. Soit $X_n$ le nombre de boules blanches après $n$ tirages.\n1. Déterminer les valeurs possibles de $X_n$.\n2. Par récurrence sur $n$, déterminer la loi de probabilité de $X_n$.\n3. Quelle est la limite de la proportion de boules blanches $Y_n = \\frac{X_n}{n+2}$ ?',
    hints: [
      'Remarquez que le nombre total de boules dans l\'urne après $n$ étapes est toujours exactement $n+2$.',
      'Testez pour $n=1$ et $n=2$ afin de conjecturer une loi uniforme sur $\\{1, 2, \\dots, n+1\\}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Univers image de $X_n$',
          explication: 'Initialement il y a 1 boule blanche. À chaque étape on ajoute soit 0 soit 1 boule blanche. Donc $X_n(\\Omega) = \\{1, 2, \\dots, n+1\\}$.'
        },
        {
          titre: '2. Loi de $X_n$ par récurrence',
          explication: 'Pour $n=1$, $P(X_1 = 1) = 1/2$ et $P(X_1 = 2) = 1/2$. Supposons par récurrence que $X_n$ suit la loi uniforme discrète sur $\\{1, \\dots, n+1\\}$ : $P(X_n = k) = \\frac{1}{n+1}$. Par la formule des probabilités totales avec l\'urne contenant $n+2$ boules :',
          calculs: 'P(X_{n+1} = k) = P(X_n = k-1)\\frac{k-1}{n+2} + P(X_n = k)\\left(1 - \\frac{k}{n+2}\\right) = \\frac{1}{n+1}\\left( \\frac{k-1 + n+2-k}{n+2} \\right) = \\frac{1}{n+2}'
        },
        {
          titre: '3. Limite de la proportion',
          explication: 'La variable $X_n$ est uniformément distribuée sur $\\{1, \\dots, n+1\\}$. La proportion $Y_n = \\frac{X_n}{n+2}$ converge donc en loi vers la loi uniforme continue sur $[0, 1]$ : $\\lim_{n\\to\\infty} P(Y_n \\le x) = x$ pour tout $x \\in [0, 1]$.'
        }
      ],
      conclusion: 'Le processus de renforcement d\'urne de Polya converge vers une loi uniforme continue, modèle phare de la génétique des populations.',
      reflexeDuCorrecteur: 'Dans un problème d\'urnes avec rétroaction, toujours calculer $n=1, 2$ à la main avant de lancer une récurrence solide.'
    }
  },
  {
    id: 'exo-mass-7-theoreme-banach-point-fixe',
    title: 'Théorème du point fixe de Banach & Méthode de Newton',
    matiere: 'Mathématiques',
    chapitreId: 'maths-topologie-evn',
    chapitreTitre: 'Espaces Vectoriels Normés & Topologie',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'Soit $(E, d)$ un espace métrique complet et $f : E \\to E$ une application strictement contractante de rapport $k \\in [0, 1[$.\n1. Démontrer que la suite définie par $x_{n+1} = f(x_n)$ est une suite de Cauchy dans $E$.\n2. En déduire l\'existence et l\'unicité d\'un point fixe $x^* = f(x^*)$.\n3. Donner une majoration de l\'erreur $\|x_n - x^*\|$ en fonction de $k$ et de $\|x_1 - x_0\|$.',
    hints: [
      'Majorez $d(x_{p+1}, x_p) \\le k^p d(x_1, x_0)$, puis utilisez l\'inégalité triangulaire pour sommer une série géométrique.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Majoration des pas consécutifs et caractère de Cauchy',
          explication: 'Par contraction, $d(x_{n+1}, x_n) \\le k^n d(x_1, x_0)$. Pour tout $p > q \\ge 0$ :',
          calculs: 'd(x_p, x_q) \\le \\sum_{j=q}^{p-1} d(x_{j+1}, x_j) \\le d(x_1, x_0) \\sum_{j=q}^{p-1} k^j \\le d(x_1, x_0) \\frac{k^q}{1 - k}'
        },
        {
          titre: '2. Convergence et point fixe',
          explication: 'Comme $k \\in [0, 1[$, $k^q \\to 0$, donc $(x_n)$ est de Cauchy. L\'espace étant complet, elle converge vers $x^* \\in E$. Par continuité de $f$ (car lipschitzienne), $x^* = \\lim x_{n+1} = \\lim f(x_n) = f(x^*)$. L\'unicité découle de $d(x^*, y^*) = d(f(x^*), f(y^*)) \\le k d(x^*, y^*) \\implies (1-k)d(x^*, y^*) \\le 0$.'
        },
        {
          titre: '3. Majoration de l\'erreur a priori',
          explication: 'En faisant tendre $p \\to +\\infty$ dans la majoration de Cauchy, on obtient :',
          calculs: 'd(x_n, x^*) \\le \\frac{k^n}{1 - k} d(x_1, x_0)'
        }
      ],
      conclusion: 'Le théorème de Picard-Banach fournit à la fois l\'existence, l\'unicité et un algorithme constructif de calcul à convergence géométrique.',
      reflexeDuCorrecteur: 'Pour prouver qu\'une suite récurrente est de Cauchy, toujours sommer l\'inégalité télescopique via la série géométrique.'
    }
  },
  {
    id: 'exo-mass-8-serie-fourier-onde-carree',
    title: 'Développement en série de Fourier d\'un créneau & Phénomène de Gibbs',
    matiere: 'Mathématiques',
    chapitreId: 'maths-series-entieres',
    chapitreTitre: 'Séries Entières & Analyse Harmonique',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec PSI / MP',
    dureeEstimeeMin: 25,
    enonce: 'Soit $f : \\mathbb{R} \\to \\mathbb{R}$ la fonction $2\\pi$-périodique impaire définie par $f(t) = 1$ sur $]0, \\pi[$ et $f(0) = f(\\pi) = 0$.\n1. Calculer les coefficients de Fourier de $f$.\n2. Énoncer le théorème de Dirichlet et en déduire la formule de Leibniz $\\sum_{p=0}^\\infty \\frac{(-1)^p}{2p+1} = \\frac{\\pi}{4}$.\n3. Expliquer qualitativement le phénomène de Gibbs au voisinage des discontinuités en $t=0$.',
    hints: [
      'Puisque $f$ est impaire, tous les $a_n$ sont nuls et $b_n = \\frac{2}{\\pi}\\int_0^\\pi \\sin(nt)\\,\\mathrm{d}t$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Coefficients de Fourier',
          explication: 'Par imparité, $a_n = 0$. Pour $b_n$ :',
          calculs: 'b_n = \\frac{2}{\\pi} \\int_0^\\pi \\sin(nt)\\,\\mathrm{d}t = \\frac{2}{\\pi n} [-\\cos(nt)]_0^\\pi = \\frac{2(1 - (-1)^n)}{\\pi n}'
        },
        {
          titre: '2. Théorème de Dirichlet et somme de Leibniz',
          explication: 'Si $n = 2p$, $b_{2p} = 0$. Si $n = 2p+1$, $b_{2p+1} = \\frac{4}{\\pi(2p+1)}$. En $t = \\pi/2$, $f$ est continue et vaut 1 :',
          calculs: '1 = \\frac{4}{\\pi} \\sum_{p=0}^\\infty \\frac{\\sin((2p+1)\\pi/2)}{2p+1} = \\frac{4}{\\pi} \\sum_{p=0}^\\infty \\frac{(-1)^p}{2p+1} \\implies \\sum_{p=0}^\\infty \\frac{(-1)^p}{2p+1} = \\frac{\\pi}{4}'
        },
        {
          titre: '3. Phénomène de Gibbs',
          explication: 'Au voisinage d\'une discontinuité de première espèce, la somme partielle de Fourier présente des oscillations dont le dépassement maximal ne tend pas vers 0 quand $N \\to \\infty$, mais atteint environ $8,95\\%$ de la hauteur du saut.'
        }
      ],
      conclusion: 'La série converge en moyenne quadratique et simplement selon Dirichlet, mais pas uniformément à cause du saut.',
      reflexeDuCorrecteur: 'Retenir que la discontinuité détruit la convergence uniforme de la série de Fourier.'
    }
  },
  {
    id: 'exo-mass-9-rayon-spectrale-gelfand',
    title: 'Formule de Gelfand pour le rayon spectral & Normes matricielles subordonnées',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral ENS Paris-Saclay MPI / MP',
    dureeEstimeeMin: 35,
    enonce: 'Soit $A \\in \\mathcal{M}_n(\\mathbb{C})$ et $\\rho(A) = \\max_{\\lambda \\in \\mathrm{Sp}(A)} |\\lambda|$ son rayon spectral.\n1. Montrer que pour toute norme matricielle subordonnée $\|\\cdot\\|$, on a $\\rho(A) \\le \|A\|$. En déduire $\\rho(A) \\le \|A^k\|^{1/k}$ pour tout $k \\ge 1$.\n2. Montrer que pour tout $\\varepsilon > 0$, il existe une norme subordonnée $\|\\cdot\\|_\\varepsilon$ telle que $\|A\\|_\\varepsilon \\le \\rho(A) + \\varepsilon$.\n3. Établir la formule de Gelfand : $\\rho(A) = \\lim_{k\\to\\infty} \|A^k\|^{1/k}$.',
    hints: [
      'Pour la question 1, considérez un vecteur propre unitaire associé à la valeur propre maximale.',
      'Pour la question 2, trigonalisez $A = P T P^{-1}$ et conjuguez par une matrice diagonale $D_\\delta = \\mathrm{diag}(1, \\delta, \\delta^2, \\dots)$ pour rendre les éléments extra-diagonaux arbitrairement petits.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Inégalité élémentaire avec le vecteur propre',
          explication: 'Soit $\\lambda$ tel que $|\\lambda| = \\rho(A)$ et $x \\neq 0$ tel que $A x = \\lambda x$. Alors $\|A x\| = |\\lambda| \\|x\\|$. Par sous-multiplicativité, $|\\lambda| \\|x\\| \\le \|A\| \\|x\\| \\implies \\rho(A) \\le \|A\|$. De plus $\\rho(A)^k = \\rho(A^k) \\le \|A^k\| \\implies \\rho(A) \\le \|A^k\|^{1/k}$.'
        },
        {
          titre: '2. Réduction des termes stricts',
          explication: 'Sur $\\mathbb{C}$, toute matrice est trigonalisable : $A = P T P^{-1}$ avec les valeurs propres sur la diagonale. En posant $D_\\delta = \\mathrm{diag}(1, \\delta, \\dots, \\delta^{n-1})$, les termes au-dessus de la diagonale de $D_\\delta T D_\\delta^{-1}$ sont multipliés par $\\delta$. En choisissant $\\delta$ assez petit, la norme subordonnée à $\|x\\|_\\infty$ vérifie $\|A\\|_\\varepsilon \\le \\rho(A) + \\varepsilon$.'
        },
        {
          titre: '3. Formule de Gelfand',
          explication: 'Toutes les normes étant équivalentes sur $\\mathcal{M}_n(\\mathbb{C})$, il existe $C > 0$ tel que $\|A^k\| \\le C \|A^k\|_\\varepsilon \\le C (\\rho(A) + \\varepsilon)^k$. En prenant la racine $k$-ième et en faisant $k \\to \\infty$, on obtient $\\limsup \|A^k\|^{1/k} \\le \\rho(A) + \\varepsilon$. Comme $\\varepsilon > 0$ est arbitraire et $\|A^k\|^{1/k} \\ge \\rho(A)$, la limite existe et vaut exactement $\\rho(A)$.'
        }
      ],
      conclusion: 'Le rayon spectral dicte la convergence de la suite de puissances : $A^k \\to 0 \\iff \\rho(A) < 1$.',
      reflexeDuCorrecteur: 'Pour manipuler les normes d\'endomorphismes trigonalisables, l\'astuce de la matrice de dilatation $D_\\delta$ est un classique universel à l\'ENS.'
    }
  },
  {
    id: 'exo-mass-10-dualite-hyperplans',
    title: 'Dualité & Orthogonalité des sous-espaces vectoriels',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Algèbre Linéaire & Dimension Finie',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $E$ un espace vectoriel de dimension finie $n$, $E^*$ son dual. Pour tout sous-espace $F \\subset E$, on définit son orthogonal par $F^\\circ = \\{\\phi \\in E^* \\mid \\forall x \\in F, \\phi(x) = 0\\}$.\n1. Montrer que $F^\\circ$ est un sous-espace vectoriel de $E^*$.\n2. Montrer que $\\dim F + \\dim F^\\circ = n$.\n3. Établir que pour deux sous-espaces $F$ et $G$ : $(F + G)^\\circ = F^\\circ \\cap G^\\circ$ et $(F \\cap G)^\\circ = F^\\circ + G^\\circ$.',
    hints: [
      'Considérez l\'application linéaire de restriction $R : E^* \\to F^*$ définie par $R(\\phi) = \\phi_{|F}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Structure vectorielle',
          explication: 'L\'application nulle est dans $F^\\circ$, et toute combinaison linéaire de formes linéaires s\'annulant sur $F$ s\'annule encore sur $F$. $F^\\circ$ est donc un sous-espace de $E^*$.'
        },
        {
          titre: '2. Théorème du rang sur l\'application de restriction',
          explication: 'L\'application $R : \\phi \\mapsto \\phi_{|F}$ est une application linéaire de $E^*$ dans $F^*$. Par le théorème de prolongement des formes linéaires (base incomplète), $R$ est surjective : $\\mathrm{Im}(R) = F^*$. De plus $\\ker(R) = \\{\\phi \\in E^* \\mid \\phi_{|F} = 0\\} = F^\\circ$. Par le théorème du rang :',
          calculs: '\\dim(E^*) = \\dim \\ker(R) + \\dim \\mathrm{Im}(R) \\implies n = \\dim(F^\\circ) + \\dim(F) \\implies \\dim(F^\\circ) = n - \\dim(F)'
        },
        {
          titre: '3. Relations d\'intersection et somme',
          explication: '$\\phi \\in (F+G)^\\circ \\iff \\forall x \\in F+G, \\phi(x)=0 \\iff \\phi_{|F}=0 \\text{ et } \\phi_{|G}=0 \\iff \\phi \\in F^\\circ \\cap G^\\circ$. L\'autre formule s\'obtient par dualité biduale.'
        }
      ],
      conclusion: 'La dualité inverse les opérations d\'intersection et de somme, transformant les équations cartésiennes en générateurs.',
      reflexeDuCorrecteur: 'Pour relier les dimensions en dualité, l\'application de restriction $R : E^* \\to F^*$ est la clé absolue.'
    }
  },
  {
    id: 'exo-mass-11-fubini-gauss-integrale',
    title: 'Calcul de l\'intégrale de Gauss $\\int_{-\\infty}^{+\\infty} e^{-x^2}\\,\\mathrm{d}x$ par Fubini polaire',
    matiere: 'Mathématiques',
    chapitreId: 'maths-integrales-multiples-stokes',
    chapitreTitre: 'Intégrales Multiples & Formules de Green-Riemann',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Commun Mines-Ponts MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'On pose $I = \\int_0^{+\\infty} e^{-x^2}\\,\\mathrm{d}x$.\n1. Justifier rigoureusement l\'intégrabilité de $x \\mapsto e^{-x^2}$ sur $[0, +\\infty[$.\n2. Exprimer $I^2$ comme une intégrale double $\\iint_{\\mathbb{R}_+^2} e^{-(x^2+y^2)}\\,\\mathrm{d}x\\mathrm{d}y$.\n3. Par passage en coordonnées polaires, calculer la valeur exacte de $I^2$ et en déduire $I$.',
    hints: [
      'Pour l\'intégrabilité, comparez avec $e^{-x}$ pour $x \\ge 1$.',
      'N\'oubliez pas le jacobien $r$ lors du changement de variables en coordonnées polaires !'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Intégrabilité',
          explication: 'La fonction $x \\mapsto e^{-x^2}$ est continue et positive. Pour $x \\ge 1$, $x^2 \\ge x \\implies e^{-x^2} \\le e^{-x}$. Comme $x \\mapsto e^{-x}$ est intégrable sur $[1, +\\infty[$, par comparaison $e^{-x^2}$ est intégrable sur $[0, +\\infty[$.'
        },
        {
          titre: '2. Intégrale double et Fubini',
          explication: 'Par le théorème de Fubini pour les fonctions positives intégrables :',
          calculs: 'I^2 = \\left(\\int_0^{+\\infty} e^{-x^2}\\,\\mathrm{d}x\\right) \\left(\\int_0^{+\\infty} e^{-y^2}\\,\\mathrm{d}y\\right) = \\iint_{\\mathbb{R}_+ \\times \\mathbb{R}_+} e^{-(x^2+y^2)}\\,\\mathrm{d}x\\,\\mathrm{d}y'
        },
        {
          titre: '3. Passage en coordonnées polaires',
          explication: 'Le quadrant $\\mathbb{R}_+^2$ correspond à $r \\in [0, +\\infty[$ et $\\theta \\in [0, \\pi/2]$. Le jacobien vaut $r$ :',
          calculs: 'I^2 = \\int_0^{\\pi/2} \\mathrm{d}\\theta \\int_0^{+\\infty} e^{-r^2} r\\,\\mathrm{d}r = \\frac{\\pi}{2} \\left[ -\\frac{1}{2} e^{-r^2} \\right]_0^{+\\infty} = \\frac{\\pi}{4} \\implies I = \\frac{\\sqrt{\\pi}}{2}'
        }
      ],
      conclusion: 'Par parité, $\\int_{-\\infty}^{+\\infty} e^{-x^2}\\,\\mathrm{d}x = \\sqrt{\\pi}$, résultat clé de la loi normale et de la mécanique quantique.',
      reflexeDuCorrecteur: 'Le jacobien $r$ transforme l\'incalculable $e^{-r^2}$ en une dérivée évidente $(-\\frac{1}{2}e^{-r^2})\'$.'
    }
  },
  {
    id: 'exo-mass-12-convexite-hadamard',
    title: 'Inégalité de Hadamard pour les fonctions convexes',
    matiere: 'Mathématiques',
    chapitreId: 'maths-convexite-inegalites',
    chapitreTitre: 'Convexité, Fonctions Réelles & Inégalités Fondamentales',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale-Supélec MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'Soit $f : [a, b] \\to \\mathbb{R}$ une fonction convexe.\n1. En utilisant la tangente au milieu $\\frac{a+b}{2}$, démontrer l\'inégalité de gauche de Hermite-Hadamard :\n$$f\\left(\\frac{a+b}{2}\\right) \\le \\frac{1}{b-a}\\int_a^b f(t)\\,\\mathrm{d}t$$\n2. En intégrant l\'inégalité de la sécante reliant $(a, f(a))$ et $(b, f(b))$, démontrer l\'inégalité de droite :\n$$\\frac{1}{b-a}\\int_a^b f(t)\\,\\mathrm{d}t \\le \\frac{f(a) + f(b)}{2}$$',
    hints: [
      'Pour la première inégalité, écrivez que le graphe est au-dessus de sa tangente en $c = \\frac{a+b}{2}$.',
      'Pour la seconde, écrivez $f((1-t)a + tb) \\le (1-t)f(a) + tf(b)$ et intégrez sur $[0, 1]$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Inégalité de gauche par la tangente centrale',
          explication: 'Si $f$ est dérivable (ou sous-dérivable), le graphe est au-dessus de sa tangente en $c = \\frac{a+b}{2}$ : $f(t) \\ge f(c) + f\'(c)(t - c)$. En intégrant entre $a$ et $b$ :',
          calculs: '\\int_a^b f(t)\\,\\mathrm{d}t \\ge (b-a)f(c) + f\'(c) \\int_a^b (t - c)\\,\\mathrm{d}t = (b-a)f(c) + 0'
        },
        {
          titre: '2. Inégalité de droite par la corde sécante',
          explication: 'Pour tout $u \\in [0, 1]$, $f(a + u(b-a)) \\le (1-u)f(a) + u f(b)$. En intégrant par rapport à $u$ sur $[0, 1]$ :',
          calculs: '\\frac{1}{b-a}\\int_a^b f(t)\\,\\mathrm{d}t = \\int_0^1 f(a + u(b-a))\\,\\mathrm{d}u \\le f(a)\\int_0^1 (1-u)\\,\\mathrm{d}u + f(b)\\int_0^1 u\\,\\mathrm{d}u = \\frac{f(a)+f(b)}{2}'
        }
      ],
      conclusion: 'L\'encadrement de Hermite-Hadamard encadre la valeur moyenne d\'une fonction convexe entre la valeur au milieu et la moyenne des extrémités.',
      reflexeDuCorrecteur: 'L\'intégrale d\'une fonction impaire par rapport au centre de symétrie $\\int_a^b (t - \\frac{a+b}{2})\\mathrm{d}t$ est identiquement nulle.'
    }
  },
  {
    id: 'exo-mass-13-determinant-vandermonde',
    title: 'Déterminant de Vandermonde & Interpolation polynomiale',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Algèbre Linéaire & Dimension Finie',
    filieres: ['MPSI', 'MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Commun CCINP / Mines',
    dureeEstimeeMin: 20,
    enonce: 'Soit $x_1, \\dots, x_n \\in \\mathbb{K}$ des scalaires. On note $V(x_1, \\dots, x_n)$ le déterminant de la matrice $M_{i, j} = x_j^{i-1}$.\n1. En remplaçant la dernière colonne par une variable $X$, calculer $P(X) = V(x_1, \\dots, x_{n-1}, X)$.\n2. En déduire la formule fermée du déterminant de Vandermonde :\n$$V(x_1, \\dots, x_n) = \\prod_{1 \\le i < j \\le n} (x_j - x_i)$$\n3. En déduire que pour $n$ points distincts, l\'interpolation de Lagrange est toujours possible et unique.',
    hints: [
      'En développant par rapport à la dernière colonne, remarquez que $P(X)$ est un polynôme de degré $n-1$ dont les $x_i$ pour $i < n$ sont des racines.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Étude du polynôme associé',
          explication: 'En développant par rapport à la dernière colonne, $P(X) = V(x_1, \\dots, x_{n-1}) X^{n-1} + Q(X)$ avec $\\deg(Q) \\le n-2$. Pour tout $i \\in \\{1, \\dots, n-1\\}$, $P(x_i) = 0$ car le déterminant possède deux colonnes identiques.'
        },
        {
          titre: '2. Factorisation et récurrence',
          explication: '$P$ est de degré $n-1$ et admet $n-1$ racines distinctes $x_1, \\dots, x_{n-1}$ : il est scindé. On a donc $P(X) = V(x_1, \\dots, x_{n-1}) \\prod_{i=1}^{n-1} (X - x_i)$. En évaluant en $X = x_n$ et par récurrence :',
          calculs: 'V(x_1, \\dots, x_n) = \\prod_{1 \\le i < j \\le n} (x_j - x_i)'
        },
        {
          titre: '3. Application à l\'interpolation',
          explication: 'Si les points sont deux à deux distincts, $V(x_1, \\dots, x_n) \\neq 0$. La matrice du système linéaire $P(x_i) = y_i$ dans la base canonique est inversible : le polynôme interpolateur existe et est unique.'
        }
      ],
      conclusion: 'Le déterminant de Vandermonde est non nul si et seulement si les points sont deux à deux distincts.',
      reflexeDuCorrecteur: 'Pour calculer un déterminant dépendant d\'un paramètre, transformer une coordonnée en variable polynomiale $X$ simplifie tout le calcul.'
    }
  },
  {
    id: 'exo-mass-14-loi-poisson-somme',
    title: 'Stabilité de la loi de Poisson par convolution & Processus de comptage',
    matiere: 'Mathématiques',
    chapitreId: 'maths-probabilites-discretes',
    chapitreTitre: 'Probabilités Discrètes & Variables Aléatoires',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'Soit $X \\sim \\mathcal{P}(\\lambda)$ et $Y \\sim \\mathcal{P}(\\mu)$ deux variables aléatoires discrètes indépendantes sur $(\\Omega, \\mathcal{T}, P)$.\n1. Déterminer la loi de la somme $S = X + Y$.\n2. Calculer l\'espérance et la variance de $S$.\n3. Déterminer la loi conditionnelle de $X$ sachant que $S = n$. Reconnaître une loi usuelle.',
    hints: [
      'Utilisez la formule de convolution discrète $P(S=n) = \\sum_{k=0}^n P(X=k) P(Y=n-k)$ et reconnaissez la formule du binôme de Newton.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Convolution discrète',
          explication: 'Par indépendance de $X$ et $Y$ :',
          calculs: 'P(X+Y=n) = \\sum_{k=0}^n e^{-\\lambda}\\frac{\\lambda^k}{k!} e^{-\\mu}\\frac{\\mu^{n-k}}{(n-k)!} = \\frac{e^{-(\\lambda+\\mu)}}{n!} \\sum_{k=0}^n \\binom{n}{k} \\lambda^k \\mu^{n-k} = e^{-(\\lambda+\\mu)}\\frac{(\\lambda+\\mu)^n}{n!}'
        },
        {
          titre: '2. Espérance et variance',
          explication: '$S \\sim \\mathcal{P}(\\lambda + \\mu)$. Donc $E(S) = \\lambda + \\mu$ et par indépendance $V(S) = V(X) + V(Y) = \\lambda + \\mu$.'
        },
        {
          titre: '3. Loi conditionnelle',
          explication: 'Pour $0 \\le k \\le n$ :',
          calculs: 'P(X=k \\mid S=n) = \\frac{P(X=k \\cap Y=n-k)}{P(S=n)} = \\binom{n}{k} \\left(\\frac{\\lambda}{\\lambda+\\mu}\\right)^k \\left(\\frac{\\mu}{\\lambda+\\mu}\\right)^{n-k}'
        }
      ],
      conclusion: 'Sachant la somme, la répartition des événements suit exactement une loi binomiale $\\mathcal{B}(n, p)$ de paramètre $p = \\frac{\\lambda}{\\lambda+\\mu}$.',
      reflexeDuCorrecteur: 'La somme de deux lois de Poisson indépendantes est une loi de Poisson dont les paramètres s\'additionnent.'
    }
  },
  {
    id: 'exo-mass-15-puits-quantique-fini',
    title: 'Puits de potentiel quantique fini 1D & États liés',
    matiere: 'Physique',
    chapitreId: 'physique-meca-quantique-puits',
    chapitreTitre: 'Physique Quantique : Onde de Matière & Équation de Schrödinger',
    filieres: ['MP', 'PC'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts PC / MP',
    dureeEstimeeMin: 35,
    enonce: 'On considère une particule de masse $m$ dans un potentiel unidimensionnel symétrique $V(x) = 0$ pour $|x| < a$ et $V(x) = V_0 > 0$ pour $|x| \\ge a$. On cherche les états liés ($0 < E < V_0$).\n1. Écrire l\'équation de Schrödinger stationnaire dans chaque zone.\n2. Pour une solution paire $\\psi(-x) = \\psi(x)$, donner la forme de $\\psi(x)$ dans $[-a, a]$ et pour $x \\ge a$.\n3. Écrire les conditions de continuité en $x=a$ et en déduire la relation implicite de quantification d\'énergie $\\tan(k a) = \\frac{K}{k}$.',
    hints: [
      'Poser $k = \\frac{\\sqrt{2mE}}{\\hbar}$ et $K = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$.',
      'Assurez-vous d\'éliminer l\'exponentielle croissante pour $x \\to +\\infty$ afin que $\\psi$ soit de carré intégrable.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équations différentielles',
          explication: 'Pour $|x| < a$ : $\\psi\'\' + k^2 \\psi = 0$. Pour $|x| \\ge a$ : $\\psi\'\' - K^2 \\psi = 0$ avec $k = \\frac{\\sqrt{2mE}}{\\hbar}$ et $K = \\frac{\\sqrt{2m(V_0-E)}}{\\hbar}$.'
        },
        {
          titre: '2. Forme de la fonction d\'onde paire',
          explication: 'Par symétrie paire, pour $|x| < a$, $\\psi(x) = A \\cos(kx)$. Pour $x > a$, la condition de normalisabilité impose d\'annuler le terme en $e^{+Kx}$, donc $\\psi(x) = C e^{-Kx}$.'
        },
        {
          titre: '3. Continuité et équation transcendante',
          explication: 'Continuité de $\\psi$ en $a$ : $A \\cos(ka) = C e^{-Ka}$. Continuité de $\\psi\'$ en $a$ : $-k A \\sin(ka) = -K C e^{-Ka}$. En faisant le quotient membre à membre :',
          calculs: 'k \\tan(ka) = K \\implies \\tan(ka) = \\frac{K}{k} = \\sqrt{\\frac{V_0 - E}{E}}'
        }
      ],
      conclusion: 'La résolution graphique montre qu\'il existe toujours au moins un état lié pair, quelle que soit la faiblesse du puits.',
      reflexeDuCorrecteur: 'Pour les états liés, toujours éliminer immédiatement les exponentielles divergentes à l\'infini avant d\'écrire les raccords.'
    }
  },

  // =========================================================================
  // PHYSIQUE (16 à 30)
  // =========================================================================
  {
    id: 'exo-mass-16-effet-skin-conducteur',
    title: 'Effet de peau dans un conducteur ohmique en régime alternatif',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-conducteurs-peau',
    chapitreTitre: 'Ondes Électromagnétiques dans les Conducteurs & Effet de Peau',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PSI / MP',
    dureeEstimeeMin: 25,
    enonce: 'Un conducteur métallique de conductivité $\\sigma$ et perméabilité $\\mu_0$ occupe le demi-espace $z \\ge 0$. Une onde incidente de pulsation $\\omega$ crée en surface un champ $\\vec{E}(0, t) = E_0 \\cos(\\omega t) \\vec{u}_x$.\n1. Rappeler la loi d\'Ohm locale et l\'approximation des régimes quasi-stationnaires (ARQS).\n2. Établir l\'équation différentielle vérifiée par $\\vec{E}(z, t)$ dans le conducteur.\n3. En cherchant une solution de la forme $\\underline{E}(z) = \\underline{E}_0 e^{-j \\underline{k} z}$, exprimer l\'épaisseur de peau $\\delta$ et donner l\'expression réelle de $\\vec{E}(z, t)$.',
    hints: [
      'Négligez le courant de déplacement $\\varepsilon_0 \\frac{\\partial E}{\\partial t}$ devant le courant de conduction $\\vec{j} = \\sigma \\vec{E}$.',
      'Rappelez que $\\sqrt{-j} = \\frac{1-j}{\\sqrt{2}}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation de diffusion électromagnétique',
          explication: 'Dans le conducteur, $\\vec{\\mathrm{rot}}\\,\\vec{B} = \\mu_0 \\sigma \\vec{E}$. En prenant le rotationnel et avec $\\mathrm{div}\\vec{E} = 0$, on obtient l\'équation de diffusion :',
          calculs: '\\Delta \\vec{E} = \\mu_0 \\sigma \\frac{\\partial \\vec{E}}{\\partial t}'
        },
        {
          titre: '2. Relation de dispersion complexe',
          explication: 'En notation complexe, $\\frac{\\mathrm{d}^2 \\underline{E}}{\\mathrm{d}z^2} = j \\mu_0 \\sigma \\omega \\underline{E}$. D\'où $\\underline{k}^2 = -j \\mu_0 \\sigma \\omega$, ce qui donne $\\underline{k} = \\frac{1-j}{\\delta}$ avec l\'épaisseur de peau :',
          calculs: '\\delta = \\sqrt{\\frac{2}{\\mu_0 \\sigma \\omega}}'
        },
        {
          titre: '3. Champ électrique réel atténué',
          explication: 'Comme l\'onde s\'atténue quand $z \\to +\\infty$, on rejette l\'exponentielle croissante :',
          calculs: '\\vec{E}(z, t) = E_0 e^{-z/\\delta} \\cos\\left(\\omega t - \\frac{z}{\\delta}\\right) \\vec{u}_x'
        }
      ],
      conclusion: 'Les courants sont cantonnés sur une épaisseur $\\delta$, d\'où l\'intérêt des conducteurs creux ou divisés (fils de Litz) en haute fréquence.',
      reflexeDuCorrecteur: 'Toujours vérifier que l\'argument de l\'exponentielle décroît bien vers l\'intérieur du milieu dissipatif.'
    }
  },
  {
    id: 'exo-mass-17-kepler-satellite-geostationnaire',
    title: 'Mise en orbite géostationnaire & Manœuvre de transfert de Hohmann',
    matiere: 'Physique',
    chapitreId: 'physique-mecanique-celeste',
    chapitreTitre: 'Mécanique Céleste & Lois de Kepler',
    filieres: ['MP', 'PC', 'PSI', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale-Supélec MP / PSI',
    dureeEstimeeMin: 30,
    enonce: 'Un satellite de masse $m$ est initialement sur une orbite circulaire basse de rayon $r_1 = R_T + h_1 = 6600$ km autour de la Terre ($M_T, G$). On veut le transférer vers l\'orbite géostationnaire de rayon $r_2 = 42200$ km via une ellipse de transfert de Hohmann.\n1. Exprimer la vitesse orbitale $v_1$ sur la première orbite circulaire en fonction de $G, M_T, r_1$.\n2. Calculer le demi-grand axe $a$ de l\'ellipse de Hohmann tangente en périgée à $r_1$ et en apogée à $r_2$.\n3. Calculer les incréments de vitesse $\\Delta v_1$ et $\\Delta v_2$ nécessaires aux deux impulsions de poussée.',
    hints: [
      'Sur une orbite elliptique de demi-grand axe $a$, l\'énergie mécanique est $E_m = -\\frac{G M_T m}{2a}$.',
      'Au périgée, $r_p = r_1$ et la vitesse $v_p$ vérifie $\\frac{1}{2} m v_p^2 - \\frac{G M_T m}{r_1} = -\\frac{G M_T m}{2a}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Vitesse sur orbite circulaire',
          explication: 'Sur une orbite circulaire, le PFD donne $\\frac{m v^2}{r} = \\frac{G M_T m}{r^2} \\implies v_1 = \\sqrt{\\frac{G M_T}{r_1}}$.'
        },
        {
          titre: '2. Demi-grand axe de l\'ellipse de transfert',
          explication: 'La trajectoire est tangente aux deux cercles, donc son grand axe vaut $2a = r_1 + r_2$ :',
          calculs: 'a = \\frac{r_1 + r_2}{2} = \\frac{6600 + 42200}{2} = 24400\\text{ km}'
        },
        {
          titre: '3. Incréments de vitesse de Hohmann',
          explication: 'Au périgée, la vitesse sur l\'ellipse est $v_p = \\sqrt{G M_T \\left( \\frac{2}{r_1} - \\frac{1}{a} \\right)}$. Le premier saut de vitesse est $\\Delta v_1 = v_p - v_1$. À l\'apogée, $v_a = \\sqrt{G M_T \\left( \\frac{2}{r_2} - \\frac{1}{a} \\right)}$, et le second saut est $\\Delta v_2 = v_2 - v_a$ avec $v_2 = \\sqrt{\\frac{G M_T}{r_2}}$.',
          calculs: '\\Delta v_{total} = \\Delta v_1 + \\Delta v_2 \\approx 3,9\\text{ km/s}'
        }
      ],
      conclusion: 'Le transfert de Hohmann est la manœuvre bi-impulsionnelle optimale en consommation de carburant pour changer d\'orbite circulaire coplanaire.',
      reflexeDuCorrecteur: 'La formule de l\'énergie $v^2 = G M (\\frac{2}{r} - \\frac{1}{a})$ résout instantanément toutes les vitesses spatiales.'
    }
  },
  {
    id: 'exo-mass-18-pendule-ressort-oscillations',
    title: 'Oscillateur harmonique amorti & Facteur de qualité $Q$',
    matiere: 'Physique',
    chapitreId: 'physique-mecanique-oscillateurs',
    chapitreTitre: 'Mécanique du Point & Oscillateurs Harmoniques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 1,
    origin: 'CCINP Physique',
    dureeEstimeeMin: 20,
    enonce: 'Une masse $m$ est accrochée à un ressort de raideur $k$ et subit une force de frottement fluide $\\vec{f} = -h \\vec{v}$.\n1. Établir l\'équation différentielle du mouvement sous la forme canonique $\\ddot{x} + \\frac{\\omega_0}{Q}\\dot{x} + \\omega_0^2 x = 0$.\n2. Donner les expressions de $\\omega_0$ et $Q$.\n3. Déterminer le décrément logarithmique $\\delta = \\ln(x(t)/x(t+T))$ en régime pseudo-périodique en fonction de $Q$.',
    hints: [
      'Rappelez que la pseudo-période est $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{\\omega_0 \\sqrt{1 - 1/(4Q^2)}}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Forme canonique du PFD',
          explication: 'Le PFD projeté sur l\'axe donne $m \\ddot{x} = -k x - h \\dot{x} \\implies \\ddot{x} + \\frac{h}{m}\\dot{x} + \\frac{k}{m}x = 0$.'
        },
        {
          titre: '2. Pulsation propre et facteur de qualité',
          explication: 'Par identification avec la forme canonique :',
          calculs: '\\omega_0 = \\sqrt{\\frac{k}{m}} \\quad \\text{et} \\quad Q = \\frac{m \\omega_0}{h} = \\frac{\\sqrt{k m}}{h}'
        },
        {
          titre: '3. Décrément logarithmique',
          explication: 'La solution s\'écrit $x(t) = X_0 e^{-\\frac{\\omega_0}{2Q}t} \\cos(\\omega t + \\phi)$. Le décrément logarithmique vaut :',
          calculs: '\\delta = \\ln\\left(\\frac{x(t)}{x(t+T)}\\right) = \\frac{\\omega_0 T}{2Q} = \\frac{\\pi}{Q \\sqrt{1 - \\frac{1}{4Q^2}}} \\approx \\frac{\\pi}{Q} \\quad (\\text{pour } Q \\gg 1)'
        }
      ],
      conclusion: 'Le facteur de qualité mesure le nombre d\'oscillations avant que l\'amplitude ne soit divisée par $e^\\pi \\approx 23$.',
      reflexeDuCorrecteur: 'Toujours mettre immédiatement l\'équation différentielle sous forme canonique avec $\\omega_0$ et $Q$.'
    }
  },
  {
    id: 'exo-mass-19-rayonnement-corps-noir',
    title: 'Loi de Stefan-Boltzmann & Bilan radiatif de la Terre',
    matiere: 'Physique',
    chapitreId: 'physique-transferts-thermiques',
    chapitreTitre: 'Transferts Thermiques & Équation de la Diffusion',
    filieres: ['MP', 'PC', 'PSI', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PC / MP',
    dureeEstimeeMin: 25,
    enonce: 'Le Soleil est assimilé à un corps noir de température $T_S = 5800$ K et de rayon $R_S = 7 \\times 10^8$ m, situé à la distance $D = 1,5 \\times 10^{11}$ m de la Terre. La Terre a un rayon $R_T$ et un albédo moyen $A = 0,30$.\n1. Rappeler la loi de Stefan-Boltzmann pour la puissance surfacique émise par un corps noir.\n2. Exprimer le flux solaire incident par unité de surface au sommet de l\'atmosphère (constante solaire $C_0$).\n3. Établir le bilan d\'énergie à l\'équilibre radiatif et calculer la température moyenne d\'équilibre de la Terre sans effet de serre.',
    hints: [
      'La Terre intercepte le rayonnement solaire sur une surface de disque $\\pi R_T^2$, mais réémet son rayonnement thermique infrarouge sur toute sa surface sphérique $4\\pi R_T^2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Loi de Stefan-Boltzmann et puissance solaire',
          explication: 'La luminance d\'un corps noir est $\\phi = \\sigma T^4$ avec $\\sigma = 5,67 \\times 10^{-8}\\text{ W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-4}$. La puissance totale rayonnée par le Soleil est $\\mathcal{P}_S = 4\\pi R_S^2 \\sigma T_S^4$.'
        },
        {
          titre: '2. Constante solaire',
          explication: 'À la distance $D$, le flux traverse une sphère d\'aire $4\\pi D^2$ :',
          calculs: 'C_0 = \\frac{\\mathcal{P}_S}{4\\pi D^2} = \\sigma T_S^4 \\left(\\frac{R_S}{D}\\right)^2 \\approx 1370\\text{ W/m}^2'
        },
        {
          titre: '3. Équilibre thermique de la Terre',
          explication: 'Puissance solaire absorbée : $\\mathcal{P}_{abs} = (1 - A) C_0 (\\pi R_T^2)$. Puissance infrarouge réémise par la Terre à température $T_T$ : $\\mathcal{P}_{emis} = 4\\pi R_T^2 \\sigma T_T^4$. À l\'équilibre thermique $\\mathcal{P}_{abs} = \\mathcal{P}_{emis}$ :',
          calculs: 'T_T = \\left( \\frac{(1 - A) C_0}{4 \\sigma} \\right)^{1/4} = \\left( \\frac{0,70 \\times 1370}{4 \\times 5,67 \\times 10^{-8}} \\right)^{1/4} \\approx 255\\text{ K} \\approx -18^\\circ\\text{C}'
        }
      ],
      conclusion: 'La température sans effet de serre est de $-18^\\circ$C. L\'effet de serre atmosphérique naturel remonte cette température moyenne à $+15^\\circ$C (+33 K).',
      reflexeDuCorrecteur: 'Ne jamais oublier le facteur 4 entre la section d\'interception du flux $\\pi R^2$ et la surface totale d\'émission $4\\pi R^2$.'
    }
  },
  {
    id: 'exo-mass-20-effet-doppler-ondes',
    title: 'Effet Doppler acoustique & Ondes de choc supersoniques',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-electromagnetiques',
    chapitreTitre: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec Physique',
    dureeEstimeeMin: 20,
    enonce: 'Une source sonore émet des bips à la fréquence $f_0$. La vitesse du son dans l\'air est $c = 340$ m/s.\n1. Exprimer la fréquence perçue $f_r$ par un récepteur fixe lorsque la source s\'approche de lui à la vitesse constante $v_s < c$.\n2. Exprimer $f_r$ lorsque la source est fixe et le récepteur s\'approche à la vitesse $v_r$.\n3. Pourquoi ces deux expressions sont-elles différentes pour le son mais identiques pour la lumière en relativité restreinte ?',
    hints: [
      'Calculez la distance parcourue par l\'onde entre deux fronts consécutifs pour la source mobile.',
      'Le son a besoin d\'un milieu matériel de propagation (l\'air au repos) qui brise la symétrie galiléenne.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Source mobile et récepteur fixe',
          explication: 'Pendant la période $T_0$, la source avance de $v_s T_0$. La longueur d\'onde apparente dans l\'air est $\\lambda\' = (c - v_s) T_0$. La fréquence perçue est donc :',
          calculs: 'f_r = \\frac{c}{\\lambda\'} = f_0 \\frac{c}{c - v_s} = \\frac{f_0}{1 - v_s/c}'
        },
        {
          titre: '2. Source fixe et récepteur mobile',
          explication: 'La longueur d\'onde dans l\'air reste $\\lambda = c T_0$. Le récepteur avance à la rencontre de l\'onde avec une vitesse relative $c + v_r$ :',
          calculs: 'f_r = \\frac{c + v_r}{\\lambda} = f_0 \\left(1 + \\frac{v_r}{c}\\right)'
        },
        {
          titre: '3. Dissymétrie acoustique vs symétrie relativiste',
          explication: 'Pour les ondes sonores mécaniques, l\'air définit un référentiel privilégié (le fluide au repos). Pour la lumière dans le vide, il n\'y a pas d\'éther et la vitesse de la lumière $c$ est universelle dans tous les référentiels : l\'effet Doppler relativiste ne dépend que de la vitesse relative $v$ : $f_r = f_0 \\sqrt{\\frac{1+v/c}{1-v/c}}$.'
        }
      ],
      conclusion: 'La cinématique acoustique dépend de la vitesse absolue par rapport au fluide porteur.',
      reflexeDuCorrecteur: 'Pour retrouver Doppler sans hésiter : raisonner sur la distance entre deux fronts d\'ondes successifs émis.'
    }
  },

  // =========================================================================
  // SUITE EXERCICES 21 à 50 (CHIMIE, SI, INFO, PHYSIQUE & MATHS)
  // =========================================================================
  {
    id: 'exo-mass-21-chimie-pile-nernst',
    title: 'Pile Daniell, quotient réactionnel & Force électromotrice hors équilibre',
    matiere: 'Chimie',
    chapitreId: 'chimie-electrochimie-courbes-ip',
    chapitreTitre: 'Électrochimie : Courbes Intensité-Potentiel & Corrosion',
    filieres: ['PCSI', 'PC', 'BCPST', 'PSI'],
    annee: '1ère année',
    difficulte: 1,
    origin: 'CCINP Chimie',
    dureeEstimeeMin: 20,
    enonce: 'On réalise une pile Daniell avec une électrode de zinc plongeant dans $100$ mL de $ZnSO_4$ à $C_1 = 0,10$ mol/L et une électrode de cuivre plongeant dans $100$ mL de $CuSO_4$ à $C_2 = 0,01$ mol/L. On donne $E^\\circ(Zn^{2+}/Zn) = -0,76$ V et $E^\\circ(Cu^{2+}/Cu) = +0,34$ V.\n1. Identifier l\'anode et la cathode et écrire l\'équation de fonctionnement spontané.\n2. Calculer la f.é.m initiale $e$ de la pile à 298 K.\n3. Exprimer la constante d\'équilibre $K^\\circ$ et calculer la composition à l\'épuisement de la pile.',
    hints: [
      'Appliquez la formule de Nernst $E = E^\\circ + \\frac{0,059}{n}\\log([Ox]/[Red])$ à chaque demi-pile.',
      'À l\'équilibre thermodynamique, la f.é.m s\'annule : $e = E_+ - E_- = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Polarité et équation bilan',
          explication: 'Le couple $Cu^{2+}/Cu$ a le potentiel le plus élevé : il constitue le pôle positif (cathode, réduction). Le zinc est le pôle négatif (anode, oxydation). Réaction globale : $Zn(s) + Cu^{2+} \\rightleftharpoons Zn^{2+} + Cu(s)$.'
        },
        {
          titre: '2. Calcul de la f.é.m',
          explication: 'Par Nernst : $E_+ = 0,34 + \\frac{0,059}{2}\\log(0,01) = 0,34 - 0,059 = 0,281$ V. $E_- = -0,76 + \\frac{0,059}{2}\\log(0,10) = -0,76 - 0,0295 = -0,7895$ V. La f.é.m vaut :',
          calculs: 'e = E_+ - E_- = 0,281 - (-0,7895) = 1,07\\text{ V}'
        },
        {
          titre: '3. Constante d\'équilibre colossale',
          explication: '$\\Delta_r G^\\circ = -n F e^\\circ = -R T \\ln K^\\circ \\implies \\log K^\\circ = \\frac{2 \\times (0,34 - (-0,76))}{0,059} = \\frac{2,20}{0,059} \\approx 37,3$. La constante $K^\\circ = 10^{37,3}$ est quasi-infinie : la réaction est totale et s\'arrête par disparition complète de $Cu^{2+}$.'
        }
      ],
      conclusion: 'La pile s\'arrête lorsque les potentiels des deux électrodes s\'égalisent ($e=0$), soit à l\'épuisement quasi-intégral des ions cuivre(II).',
      reflexeDuCorrecteur: 'Anode = Oxydation (les deux commencent par une voyelle), Cathode = Réduction (les deux commencent par une consonne).'
    }
  },
  {
    id: 'exo-mass-22-chimie-solubilite-ph',
    title: 'Effet du pH sur la solubilité des hydroxydes métalliques ($Fe(OH)_3$)',
    matiere: 'Chimie',
    chapitreId: 'chimie-solutions-aqueuses-precipitation',
    chapitreTitre: 'Équilibres en Solution Aqueuse & Précipitation',
    filieres: ['PCSI', 'PC', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Agro-Véto BCPST / CCINP',
    dureeEstimeeMin: 20,
    enonce: 'On étudie la précipitation de l\'hydroxyde de fer(III) $Fe(OH)_3(s)$ de produit de solubilité $K_s = 10^{-38}$.\n1. Déterminer la solubilité $s$ de $Fe(OH)_3$ dans l\'eau pure à 298 K.\n2. Une solution contient $[Fe^{3+}] = 10^{-2}$ mol/L. À partir de quel pH observe-t-on le début de la précipitation ?\n3. Tracer l\'allure de la courbe $\\log s$ en fonction du pH entre pH = 0 et pH = 4.',
    hints: [
      'Rappelez que $K_s = [Fe^{3+}][HO^-]^3$ et $[HO^-] = 10^{-(14-pH)}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Solubilité dans l\'eau pure',
          explication: 'L\'autoprotolyse de l\'eau impose $[HO^-] \\approx 10^{-7}$ mol/L. Donc $s = [Fe^{3+}] = \\frac{K_s}{[HO^-]^3} = \\frac{10^{-38}}{(10^{-7})^3} = 10^{-17}$ mol/L.'
        },
        {
          titre: '2. pH de début de précipitation',
          explication: 'Le précipité apparaît dès que le quotient réactionnel atteint $K_s$ avec $[Fe^{3+}] = 10^{-2}$ mol/L :',
          calculs: '[HO^-]^3 = \\frac{K_s}{[Fe^{3+}]} = \\frac{10^{-38}}{10^{-2}} = 10^{-36} \\implies [HO^-] = 10^{-12} \\implies \\text{pH} = 14 - 12 = 2,0'
        },
        {
          titre: '3. Évolution avec le pH',
          explication: 'Pour $\\text{pH} \\ge 2$, le solide existe donc $s = [Fe^{3+}] = \\frac{K_s}{K_e^3} [H_3O^+]^3$. En prenant le log :',
          calculs: '\\log s = \\log(K_s/K_e^3) - 3 \\text{pH} = 4 - 3\\text{pH}'
        }
      ],
      conclusion: 'La courbe est une droite de pente $-3$ : chaque unité de pH supplémentaire divise la solubilité du fer(III) par un facteur 1000 !',
      reflexeDuCorrecteur: 'Pour un hydroxyde $M(OH)_n$, la pente de $\\log s$ en fonction du pH vaut toujours $-n$.'
    }
  },
  {
    id: 'exo-mass-23-chimie-organique-diels-alder',
    title: 'Cycloaddition de Diels-Alder : Régiosélectivité et Règle Endo',
    matiere: 'Chimie',
    chapitreId: 'chimie-orga-mecanismes',
    chapitreTitre: 'Chimie Organique : Substitutions, Éliminations & Additions',
    filieres: ['PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PC',
    dureeEstimeeMin: 25,
    enonce: 'On fait réagir le cyclopentadiène (diène conjugué) avec l\'anhydride maléique (diénophile) à température ambiante.\n1. Rappeler la conformation nécessaire du diène pour permettre la réaction $[4+2]$. Pourquoi le cyclopentadiène est-il particulièrement réactif ?\n2. Décrire l\'état de transition concerté et justifier la formation préférentielle du diastéréoisomère endo (règle d\'Alder).\n3. La réaction est-elle sous contrôle cinétique ou thermodynamique ? Que se passe-t-il à haute température ?',
    hints: [
      'Le cyclopentadiène est figé dans la géométrie s-cis par son cycle à 5 chaînons.',
      'L\'approche endo bénéficie d\'interactions orbitalaires secondaires stabilisantes entre les carbonyles et l\'arrière du diène.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Conformation s-cis figée',
          explication: 'La cycloaddition nécessite impérativement une géométrie s-cis des deux doubles liaisons pour que les lobes $p$ terminaux se recouvrent simultanément. Le cyclopentadiène étant cyclique, il est verrouillé en s-cis à 100%, ce qui le rend des milliers de fois plus réactif que le butadiène acyclique.'
        },
        {
          titre: '2. Règle endo d\'Alder et interactions secondaires',
          explication: 'Dans l\'approche endo, les groupements électroattracteurs (les deux $C=O$ de l\'anhydride) sont orientés vers le diène. Leurs orbitales $\\pi^*$ vides interagissent favorablement avec les orbitales $\\pi$ du diène au niveau des carbones 2 et 3 : ces interactions orbitalaires secondaires abaissent l\'énergie d\'activation.'
        },
        {
          titre: '3. Contrôle cinétique vs thermodynamique',
          explication: 'L\'isomère endo est le produit cinétique (formation la plus rapide). L\'isomère exo est plus stable thermodynamiquement (moins d\'encombrement stérique). À haute température, la rétro-Diels-Alder devient possible et l\'isomère exo devient majoritaire.'
        }
      ],
      conclusion: 'La cycloaddition de Diels-Alder est une réaction péricyclique thermique stéréospécifique sous contrôle orbitalaire supramoléculaire.',
      reflexeDuCorrecteur: 'Endo = contrôle cinétique basse température, Exo = contrôle thermodynamique haute température.'
    }
  },
  {
    id: 'exo-mass-24-si-schema-bloc-retour-unitaire',
    title: 'Transformations de schéma-blocs & Précision d\'un asservissement',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-slci-laplace',
    chapitreTitre: 'Modélisation des SLCI & Transformée de Laplace',
    filieres: ['PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale-Supélec PSI / MP',
    dureeEstimeeMin: 25,
    enonce: 'Un système asservi de fonction de transfert en chaîne directe $H(p) = \\frac{K}{p(1 + T p)}$ possède un capteur de retour non unitaire $B(p) = \\beta$.\n1. Déterminer la fonction de transfert en boucle fermée $F(p) = \\frac{S(p)}{E(p)}$.\n2. Transformer le schéma en un système à retour unitaire équivalent.\n3. Calculer l\'erreur statique pour une entrée en échelon $E(p) = \\frac{E_0}{p}$ et l\'erreur de traînage pour une rampe $E(p) = \\frac{V_0}{p^2}$.',
    hints: [
      'Appliquez la formule de Black $F(p) = \\frac{H(p)}{1 + H(p) B(p)}$.',
      'Le théorème de la valeur finale stipule $\\lim_{t\\to+\\infty} \\varepsilon(t) = \\lim_{p\\to 0} p \\varepsilon(p)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Formule de Black',
          explication: 'Par la formule de Black classique pour une boucle fermée :',
          calculs: 'F(p) = \\frac{H(p)}{1 + \\beta H(p)} = \\frac{\\frac{K}{p(1 + Tp)}}{1 + \\frac{\\beta K}{p(1 + Tp)}} = \\frac{K}{T p^2 + p + \\beta K}'
        },
        {
          titre: '2. Schéma équivalent à retour unitaire',
          explication: 'Pour avoir un retour unitaire pur, on factorise par $1/\\beta$ en entrée : $F(p) = \\frac{1}{\\beta} \\frac{\\beta H(p)}{1 + \\beta H(p)}$. La boucle interne a un retour unitaire avec une chaîne directe $\\beta H(p) = \\frac{\\beta K}{p(1 + Tp)}$, précédée d\'un bloc de gain pré-compensateur $1/\\beta$.'
        },
        {
          titre: '3. Calcul des erreurs par le théorème de la valeur finale',
          explication: 'La chaîne directe possède un intégrateur pur ($p^1$ au dénominateur). L\'erreur en échelon est nulle : $\\varepsilon_s = 0$. Pour une rampe $E(p) = \\frac{V_0}{p^2}$, l\'erreur de traînage est finie :',
          calculs: '\\varepsilon_v = \\lim_{p\\to 0} p \\frac{1}{1 + \\frac{\\beta K}{p}} \\frac{V_0}{p^2} = \\frac{V_0}{\\beta K}'
        }
      ],
      conclusion: 'La classe 1 du système garantit une erreur indicielle nulle et une erreur de vitesse inversement proportionnelle au gain de boucle $\\beta K$.',
      reflexeDuCorrecteur: 'Le nombre d\'intégrateurs purs en boucle ouverte (classe) détermine directement la précision du système.'
    }
  },
  {
    id: 'exo-mass-25-info-tri-topologique-dag',
    title: 'Tri topologique d\'un DAG par parcours en profondeur & Détection de cycle',
    matiere: 'Informatique',
    chapitreId: 'info-graphes-complexite',
    chapitreTitre: 'Algorithmique des Graphes & Complexité',
    filieres: ['MPI', 'MP', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    difficulte: 2,
    origin: 'Épreuve d\'Informatique X-ENS / Mines',
    dureeEstimeeMin: 25,
    enonce: 'Soit $G=(V, E)$ un graphe orienté sans cycle (DAG).\n1. Définir ce qu\'est un ordre topologique sur $V$.\n2. Expliquer comment un parcours en profondeur (DFS) avec marquage en trois couleurs (BLANC, GRIS, NOIR) permet à la fois de détecter un cycle et d\'obtenir un ordre topologique.\n3. Écrire le pseudo-code et démontrer que la complexité temporelle est $\\mathcal{O}(|V| + |E|)$.',
    hints: [
      'Un arc arrière pointe vers un sommet en cours de visite (GRIS), révélant un cycle.',
      'Dans un DAG, insérer chaque sommet dans une liste lors de sa fermeture (quand il devient NOIR), puis retourner la liste inversée.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Définition de l\'ordre topologique',
          explication: 'Un ordre topologique est une bijection $\\sigma : V \\to \\{1, \\dots, |V|\\}$ telle que pour tout arc $(u, v) \\in E$, on ait $\\sigma(u) < \\sigma(v)$. Il n\'existe que si le graphe est sans circuit (DAG).'
        },
        {
          titre: '2. Couleurs et classification des arcs',
          explication: 'Chaque sommet commence BLANC (non visité). Quand on entre dans `dfs(u)`, $u$ devient GRIS. Si un voisin $v$ est déjà GRIS, l\'arc $(u, v)$ est un arc arrière qui boucle sur la pile d\'appels : il y a un cycle ! Quand tous les descendants de $u$ sont explorés, $u$ devient NOIR et est ajouté en tête de l\'ordre topologique.'
        },
        {
          titre: '3. Complexité optimale',
          explication: 'Chaque sommet passe une seule fois par les trois états, et chaque arc est examiné exactement une fois :',
          calculs: 'T(|V|, |E|) = \\mathcal{O}(|V| + |E|)'
        }
      ],
      conclusion: 'Le tri topologique par DFS est l\'algorithme pivot pour ordonnancer des tâches avec contraintes de précédence.',
      reflexeDuCorrecteur: 'Le marquage en trois couleurs (BLANC/GRIS/NOIR) est l\'arme absolue pour prouver l\'absence de circuit dans un graphe.'
    }
  },
  {
    id: 'exo-mass-26-maths-gram-determinant',
    title: 'Déterminant de Gram, distance à un sous-espace & Volume d\'un parallélotope',
    matiere: 'Mathématiques',
    chapitreId: 'maths-espaces-euclidiens',
    chapitreTitre: 'Espaces Euclidiens & Théorème Spectral',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / Concours X',
    dureeEstimeeMin: 30,
    enonce: 'Soit $E$ un espace préhilbertien réel et $(x_1, \\dots, x_p)$ une famille de vecteurs. La matrice de Gram associée est $G(x_1, \\dots, x_p) = (\\langle x_i, x_j \\rangle)_{1 \\le i, j \\le p}$, et son déterminant est noté $\\Gamma(x_1, \\dots, x_p)$.\n1. Montrer que la matrice de Gram est symétrique positive, et définie positive si et seulement si la famille est libre.\n2. Soit $F = \\mathrm{Vect}(x_1, \\dots, x_p)$ un sous-espace engendré par une famille libre et $x \\in E$. Montrer que la distance de $x$ à $F$ vérifie :\n$$d(x, F)^2 = \\frac{\\Gamma(x_1, \\dots, x_p, x)}{\\Gamma(x_1, \\dots, x_p)}$$',
    hints: [
      'Décomposez $x = p_F(x) + x^\\perp$ et utilisez la multi-linéarité du déterminant.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Caractérisation de la liberté',
          explication: 'Pour tout $a = (a_1, \\dots, a_p)^T \\in \\mathbb{R}^p$, $a^T G a = \\sum_{i, j} a_i a_j \\langle x_i, x_j \\rangle = \\|\\sum_{i=1}^p a_i x_i\\|^2 \\ge 0$. La forme est positive. De plus $a^T G a = 0 \\iff \\sum a_i x_i = 0$. Si la famille est libre, $a = 0$ : $G$ est définie positive, donc $\\det(G) > 0$. Si elle est liée, $\\det(G) = 0$.'
        },
        {
          titre: '2. Formule de distance par Gram',
          explication: 'On décompose $x = y + z$ avec $y \\in F$ et $z \\perp F$ (donc $\\|z\\| = d(x, F)$). Par opérations sur les lignes et colonnes du déterminant, retrancher $y$ (combinaison des $x_i$) ne change pas le déterminant :',
          calculs: '\\Gamma(x_1, \\dots, x_p, x) = \\Gamma(x_1, \\dots, x_p, z) = \\begin{vmatrix} G(x_1, \\dots, x_p) & 0 \\\\ 0 & \\|z\\|^2 \\end{vmatrix} = \\|z\\|^2 \\Gamma(x_1, \\dots, x_p)'
        }
      ],
      conclusion: 'Le déterminant de Gram calcule la distance exacte sans avoir à expliciter les coefficients de la projection orthogonale.',
      reflexeDuCorrecteur: 'Pour calculer une distance orthogonale en dimension finie sans base orthonormée, penser immédiatement au déterminant de Gram.'
    }
  },
  {
    id: 'exo-mass-27-physique-moteur-synchrone',
    title: 'Machine synchrone : Modèle de Behn-Eschenburg & Angle interne',
    matiere: 'Physique',
    chapitreId: 'physique-circuits-bode',
    chapitreTitre: 'Circuits Électriques, Régimes Transitoires & Filtres Linéaires',
    filieres: ['PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec PSI',
    dureeEstimeeMin: 25,
    enonce: 'Une phase d\'une machine synchrone est modélisée par une f.é.m à vide $\\underline{E}$ en série avec une réactance synchrone $L_s \\omega = X_s$, connectée au réseau de tension efficace $V$ et de pulsation $\\omega$.\n1. Écrire la loi des mailles complexes en convention récepteur pour le courant $\\underline{I}$.\n2. Tracer le diagramme vectoriel de Behn-Eschenburg (diagramme de Fresnel).\n3. Exprimer la puissance électromagnétique $P$ reçue en fonction de $V, E, X_s$ et de l\'angle interne $\\theta = (\\vec{V}, \\vec{E})$. En déduire la puissance maximale transmissible avant décrochage.',
    hints: [
      'Projetez le diagramme de Fresnel sur les axes colinéaires et orthogonaux à $\\vec{V}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation de maille de Behn-Eschenburg',
          explication: 'En convention récepteur pour le moteur : $\\underline{V} = \\underline{E} + j X_s \\underline{I} \\implies j X_s \\underline{I} = \\underline{V} - \\underline{E}$.'
        },
        {
          titre: '2. Expression de la puissance active',
          explication: 'La puissance électrique reçue est $P = V I \\cos \\phi$. En multipliant par $X_s$, on identifie sur le triangle de Fresnel $X_s I \\cos \\phi = E \\sin \\theta$ :',
          calculs: 'P = \\frac{V E}{X_s} \\sin \\theta'
        },
        {
          titre: '3. Limite de stabilité et puissance critique',
          explication: 'La puissance passe par un maximum lorsque l\'angle interne atteint $\\theta = \\pi/2$. Au-delà, $\\frac{\\mathrm{d}P}{\\mathrm{d}\\theta} < 0$, ce qui provoque le décrochage brutal de la machine synchrone :',
          calculs: 'P_{max} = \\frac{V E}{X_s}'
        }
      ],
      conclusion: 'L\'angle interne $\\theta$ mesure le décalage angulaire mécanique entre le champ statorique tournant et le rotor.',
      reflexeDuCorrecteur: 'Pour les machines électriques tournantes, la projection géométrique sur Fresnel est dix fois plus rapide que les calculs de nombres complexes bruts.'
    }
  },
  {
    id: 'exo-mass-28-chimie-diagramme-binaire-eutectique',
    title: 'Diagramme d\'équilibre binaire solide-liquide à simple eutectique',
    matiere: 'Chimie',
    chapitreId: 'chimie-thermo-potentiel-chimique-binaires',
    chapitreTitre: 'Thermodynamique Chimique : Potentiel Chimique & Équilibres Binaires Liquide-Vapeur',
    filieres: ['PC', 'PCSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PC',
    dureeEstimeeMin: 25,
    enonce: 'On étudie le binaire silicium-or ($Si-Au$). Les deux corps sont totalement miscibles à l\'état liquide et totalement immiscibles à l\'état solide. Le point eutectique est situé à $T_E = 363^\\circ$C et $x_{Au} = 0,81$.\n1. Tracer l\'allure du diagramme de phase $(T, x_{Au})$ et identifier les phases présentes dans chaque domaine.\n2. Décrire le refroidissement isoplèthe d\'un liquide de composition $x_{Au} = 0,50$ depuis $1200^\\circ$C jusqu\'à la température ambiante.\n3. Appliquer la règle des moments chimiques juste au-dessus et juste au-dessous de la température eutectique.',
    hints: [
      'Le liquide commence à cristalliser sur la courbe du liquidus en déposant le corps pur en excès (ici le silicium pur solide).'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Allure du diagramme',
          explication: 'Au-dessus du liquidus en V : phase liquide homogène $L$. En dessous de la ligne eutectique horizontale à $363^\\circ$C : mélange biphasé de deux solides purs distincts $Si(s) + Au(s)$. Entre le liquidus et le solidus : domaines biphasés $Si(s) + L$ (à gauche de $E$) et $Au(s) + L$ (à droite de $E$).'
        },
        {
          titre: '2. Refroidissement isoplèthe à $x = 0,50$',
          explication: 'Pour $T > T_{liq}$, le système est un liquide monophasé. À $T_{liq}$, les premiers cristaux de silicium pur $Si(s)$ apparaissent. Le liquide s\'enrichit en or le long de la branche gauche du liquidus jusqu\'à atteindre la composition eutectique $E$ ($81\\%$ d\'or). À $363^\\circ$C, le liquide restant cristallise à température constante en un mélange eutectique finement divisé $Si(s) + Au(s)$.'
        },
        {
          titre: '3. Règle du levier juste au-dessus de $T_E$',
          explication: 'À $T = T_E^+$, le solide est du silicium pur ($x_S = 0$) et le liquide a la composition $x_L = 0,81$. La fraction molaire de liquide vaut :',
          calculs: '\\frac{n_L}{n_{tot}} = \\frac{x_0 - x_S}{x_L - x_S} = \\frac{0,50 - 0}{0,81 - 0} = \\frac{0,50}{0,81} \\approx 61,7\\%'
        }
      ],
      conclusion: 'L\'eutectique fond et gèle à température rigoureusement fixe comme un corps pur mais est un mélange mécanique de deux solides purs.',
      reflexeDuCorrecteur: 'Quand deux solides sont immiscibles, le solide déposé est TOUJOURS un corps pur à 100% ($x_S = 0$ ou $x_S = 1$).'
    }
  },
  {
    id: 'exo-mass-29-si-cinematique-contact-engrenages',
    title: 'Condition de non-glissement au contact & Vitesse de glissement',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-dynamique-solide',
    chapitreTitre: 'Dynamique des Systèmes Polyarticulés & Énergétique',
    filieres: ['MPSI', 'PCSI', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 1,
    origin: 'Concours Communs INP SI',
    dureeEstimeeMin: 20,
    enonce: 'Deux roues cylindriques 1 et 2 de rayons $R_1$ et $R_2$ en liaison pivot par rapport au bâti 0 en $O_1$ et $O_2$ sont en contact au point $I$.\n1. Écrire le vecteur vitesse $\\vec{V}(I \\in 1/0)$ et $\\vec{V}(I \\in 2/0)$ en fonction des vitesses angulaires $\\omega_{1/0}$ et $\\omega_{2/0}$.\n2. En déduire la vitesse de glissement $\\vec{V}_g(1/2) = \\vec{V}(I \\in 1/2)$.\n3. Quelle condition doivent vérifier les vitesses de rotation pour assurer un roulement sans glissement (RSG) parfait en $I$ ?',
    hints: [
      'La formule de Varignon donne $\\vec{V}(I \\in 1/0) = \\vec{V}(O_1 \\in 1/0) + \\vec{\\Omega}(1/0) \\wedge \\vec{O_1 I}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Vitesses absolues au point de contact',
          explication: 'Les centres $O_1$ et $O_2$ sont fixes dans le repère 0. On a $\\vec{V}(I \\in 1/0) = \\omega_1 \\vec{z} \\wedge (R_1 \\vec{x}) = R_1 \\omega_1 \\vec{y}$, et $\\vec{V}(I \\in 2/0) = \\omega_2 \\vec{z} \\wedge (-R_2 \\vec{x}) = -R_2 \\omega_2 \\vec{y}$.'
        },
        {
          titre: '2. Vitesse de glissement relative',
          explication: 'Par composition des mouvements au point $I$ :',
          calculs: '\\vec{V}_g(1/2) = \\vec{V}(I \\in 1/0) - \\vec{V}(I \\in 2/0) = (R_1 \\omega_1 + R_2 \\omega_2) \\vec{y}'
        },
        {
          titre: '3. Condition de Roulement Sans Glissement (RSG)',
          explication: 'Le roulement sans glissement impose $\\vec{V}_g(1/2) = \\vec{0}$, d\'où $R_1 \\omega_1 + R_2 \\omega_2 = 0$ :',
          calculs: '\\frac{\\omega_2}{\\omega_1} = -\\frac{R_1}{R_2}'
        }
      ],
      conclusion: 'Le signe négatif traduit le fait que deux engrenages à contact extérieur tournent en sens inverse.',
      reflexeDuCorrecteur: 'Vérifier systématiquement le signe : pour un contact extérieur les sens de rotation sont opposés, pour un contact intérieur ils sont identiques.'
    }
  },
  {
    id: 'exo-mass-30-info-tas-binaire-heap',
    title: 'Structure de Tas Binaire (Min-Heap) & Tri par tas (Heapsort)',
    matiere: 'Informatique',
    chapitreId: 'info-piles-files-listes',
    chapitreTitre: 'Structures de Données Linéaires : Piles, Files & Listes Chaînées',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    difficulte: 2,
    origin: 'Épreuve d\'Informatique Mines-Ponts MP / MPI',
    dureeEstimeeMin: 25,
    enonce: 'Un tas binaire-min est un arbre binaire presque complet où chaque nœud a une valeur inférieure ou égale à ses enfants.\n1. Comment stocke-t-on un tas binaire de $n$ éléments dans un simple tableau $T[0 \\dots n-1]$ sans pointeurs ?\n2. Expliquer les opérations `entonnoir` (tamisage vers le bas / heapify) et `insertion` (tamisage vers le haut). Quelles sont leurs complexités ?\n3. Pourquoi l\'algorithme de construction d\'un tas (`build_heap`) s\'exécute-t-il en temps $\\mathcal{O}(n)$ et non $\\mathcal{O}(n \\log n)$ ?',
    hints: [
      'Pour le nœud d\'indice $i$, ses enfants sont à $2i+1$ et $2i+2$, et son parent est à $\\lfloor(i-1)/2\\rfloor$.',
      'La somme $\\sum_{h=0}^{\\log n} \\frac{h}{2^h}$ converge vers une constante finie.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Représentation contiguë compacte',
          explication: 'Grâce à la complétude de l\'arbre, aucun trou n\'existe. Pour l\'élément d\'indice $i$ : fils gauche en $2i+1$, fils droit en $2i+2$, parent en $(i-1)//2$. Aucun pointeur supplémentaire n\'est nécessaire.'
        },
        {
          titre: '2. Tamisage et hauteur',
          explication: 'Un tamisage parcourt une branche de la racine vers une feuille (ou l\'inverse). La hauteur d\'un tas à $n$ éléments étant $h = \\lfloor \\log_2 n \\rfloor$, les opérations d\'insertion et d\'extraction du minimum coûtent un temps proportionnel à la hauteur :',
          calculs: 'T(n) = \\mathcal{O}(\\log n)'
        },
        {
          titre: '3. Preuve du coût linéaire $\\mathcal{O}(n)$ de `build_heap`',
          explication: 'On applique `tamiser_bas` depuis les feuilles jusqu\'à la racine. Il y a $\\approx \\frac{n}{2^{h+1}}$ nœuds à hauteur $h$. Le coût total est :',
          calculs: '\\sum_{h=0}^{\\log_2 n} \\frac{n}{2^{h+1}} \\mathcal{O}(h) = n \\sum_{h=0}^\\infty \\frac{h}{2^{h+1}} = \\mathcal{O}(n)'
        }
      ],
      conclusion: 'Le tas binaire fournit la structure idéale pour la file de priorité de l\'algorithme de Dijkstra.',
      reflexeDuCorrecteur: 'Retenir impérativement : `build_heap` s\'exécute en temps linéaire $\\mathcal{O}(n)$, et non en $\\mathcal{O}(n\\log n)$.'
    }
  },
  {
    id: 'exo-mass-31-maths-theoreme-chinois',
    title: 'Théorème des Restes Chinois & Isomorphisme d\'anneaux',
    matiere: 'Mathématiques',
    chapitreId: 'maths-arithmetique-structures',
    chapitreTitre: 'Arithmétique dans $\\mathbb{Z}$ & Structures Algébriques',
    filieres: ['MP', 'MPI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $m, n \\in \\mathbb{N}^*$ deux entiers premiers entre eux ($m \\wedge n = 1$).\n1. Énoncer l\'isomorphisme d\'anneaux du théorème des restes chinois entre $\\mathbb{Z}/mn\\mathbb{Z}$ et $\\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$.\n2. Résoudre dans $\\mathbb{Z}$ le système de congruences : $x \\equiv 2 \\pmod{5}$ et $x \\equiv 4 \\pmod{7}$.\n3. En déduire la multiplicativité de l\'indicatrice d\'Euler : $\\varphi(m n) = \\varphi(m) \\varphi(n)$.',
    hints: [
      'Trouvez une relation de Bézout entre 5 et 7 pour reconstruire la solution.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Isomorphisme canonique',
          explication: 'L\'application $\\phi : x \\pmod{mn} \\mapsto (x \\pmod m, x \\pmod n)$ est un morphisme d\'anneaux. Son noyau est $\\ker \\phi = m\\mathbb{Z} \\cap n\\mathbb{Z} = \\mathrm{ppcm}(m, n)\\mathbb{Z} = mn\\mathbb{Z}$ car $m \\wedge n = 1$. $\\phi$ est donc injective. Comme les deux ensembles ont même cardinal fini $mn$, c\'est un isomorphisme.'
        },
        {
          titre: '2. Résolution explicite par Bézout',
          explication: 'Relation de Bézout : $3 \\times 5 - 2 \\times 7 = 15 - 14 = 1$. Le terme $e_1 = -14$ vaut $1 \\pmod 5$ et $0 \\pmod 7$. Le terme $e_2 = 15$ vaut $0 \\pmod 5$ et $1 \\pmod 7$. La solution est $x = 2 e_1 + 4 e_2 = 2(-14) + 4(15) = -28 + 60 = 32$. Modulo 35 :',
          calculs: 'x \\equiv 32 \\equiv -3 \\pmod{35}'
        },
        {
          titre: '3. Multiplicativité de l\'indicatrice d\'Euler',
          explication: 'L\'isomorphisme d\'anneaux induit un isomorphisme sur les groupes des éléments inversibles : $(\\mathbb{Z}/mn\\mathbb{Z})^* \\simeq (\\mathbb{Z}/m\\mathbb{Z})^* \\times (\\mathbb{Z}/n\\mathbb{Z})^*$. Par passage aux cardinaux, $\\varphi(mn) = \\varphi(m)\\varphi(n)$.'
        }
      ],
      conclusion: 'Le théorème chinois permet de paralléliser les calculs arithmétiques modulaires (cryptographie RSA).',
      reflexeDuCorrecteur: 'Pour remonter un système chinois, utiliser l\'identité de Bézout $u m + v n = 1$ pour construire les projecteurs idylliques.'
    }
  },
  {
    id: 'exo-mass-32-physique-vitesse-son-laplace',
    title: 'Vitesse du son dans un gaz parfait : Formule de Laplace & Correction de Newton',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-electromagnetiques',
    chapitreTitre: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec Physique',
    dureeEstimeeMin: 20,
    enonce: 'Une onde acoustique plane se propage dans l\'air (gaz parfait de coefficient adiabatique $\\gamma$, de masse molaire $M$).\n1. Rappeler pourquoi l\'hypothèse isotherme de Newton conduisait à une vitesse trop faible ($c_{Newton} = \\sqrt{R T / M} \\approx 290$ m/s).\n2. Justifier pourquoi la compression de l\'onde acoustique est adiabatique et non isotherme.\n3. Exprimer le coefficient de compressibilité isentropique $\\chi_S$ et établir la formule de Laplace $c = \\sqrt{\\frac{\\gamma R T}{M}}$. Calculer sa valeur numérique à 293 K.',
    hints: [
      'Le temps de transfert thermique entre zones comprimées et détendues est immensément plus long que la période de l\'onde acoustique.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Échec du modèle isotherme',
          explication: 'Newton supposait que l\'air avait le temps d\'échanger de la chaleur pour rester à température constante. Mais le calcul donne $c \\approx 290$ m/s, en désaccord flagrant avec la valeur mesurée de $340$ m/s.'
        },
        {
          titre: '2. Hypothèse adiabatique de Laplace',
          explication: 'La fréquence du son ($f \\sim 1$ kHz) est bien trop rapide devant les temps caractéristiques de diffusion thermique : les tranches de gaz n\'ont aucunement le temps d\'échanger de la chaleur. Les compressions-dilatations sont donc réversibles et adiabatiques (isentropiques).'
        },
        {
          titre: '3. Formule de Laplace et application numérique',
          explication: 'Pour un gaz parfait en adiabatique réversible, $P V^\\gamma = \\mathrm{cste} \\implies \\chi_S = -\\frac{1}{V}\\left(\\frac{\\partial V}{\\partial P}\\right)_S = \\frac{1}{\\gamma P}$. La vitesse de l\'onde de compression vaut $c = \\frac{1}{\\sqrt{\\rho \\chi_S}} = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma R T}{M}}$ :',
          calculs: 'c = \\sqrt{\\frac{1,40 \\times 8,314 \\times 293}{29 \\times 10^{-3}}} \\approx 343\\text{ m/s}'
        }
      ],
      conclusion: 'La correction de Laplace par le facteur $\\sqrt{\\gamma} \\approx \\sqrt{1,4} \\approx 1,18$ rétablit la concordance parfaite avec l\'expérience.',
      reflexeDuCorrecteur: 'Retenir la formule fondamentale de la célérité acoustique : $c = \\frac{1}{\\sqrt{\\rho \\chi_S}} = \\sqrt{\\frac{\\gamma R T}{M}}$.'
    }
  },
  {
    id: 'exo-mass-33-chimie-precipitation-complexe-ammoniac',
    title: 'Compétition précipitation / complexation : Solubilisation d\'un précipité par un ligand',
    matiere: 'Chimie',
    chapitreId: 'chimie-solutions-aqueuses-precipitation',
    chapitreTitre: 'Équilibres en Solution Aqueuse & Précipitation',
    filieres: ['PC', 'BCPST', 'PCSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Agro-Véto BCPST / Mines PC',
    dureeEstimeeMin: 25,
    enonce: 'On ajoute progressivement de l\'ammoniac $NH_3$ à une suspension de chlorure d\'argent $AgCl(s)$ ($K_s = 10^{-10}$). L\'argent forme avec l\'ammoniac le complexe diamine-argent(I) $[Ag(NH_3)_2]^+$ de constante de formation globale $\\beta_2 = 10^{7,2}$.\n1. Écrire l\'équation de dissolution du chlorure d\'argent par l\'ammoniac et calculer sa constante d\'équilibre $K^\\circ$.\n2. Exprimer la solubilité $s$ de $AgCl(s)$ en fonction de la concentration en ammoniac libre $[NH_3]$.\n3. Quelle concentration minimale d\'ammoniac libre permet de dissoudre complètement 0,01 mol de $AgCl$ dans 1 L d\'eau ?',
    hints: [
      'Combinez les équations $AgCl(s) \\rightleftharpoons Ag^+ + Cl^-$ et $Ag^+ + 2 NH_3 \\rightleftharpoons [Ag(NH_3)_2]^+$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation bilan et constante',
          explication: 'Réaction globale : $AgCl(s) + 2 NH_3(aq) \\rightleftharpoons [Ag(NH_3)_2]^+ + Cl^-$. La constante d\'équilibre vaut :',
          calculs: 'K^\\circ = K_s \\times \\beta_2 = 10^{-10} \\times 10^{7,2} = 10^{-2,8} \\approx 1,58 \\times 10^{-3}'
        },
        {
          titre: '2. Expression de la solubilité',
          explication: 'Chaque mole de $AgCl$ dissoute donne une mole de $Cl^-$ et une mole d\'argent (quasiment tout sous forme de complexe). Donc $[Cl^-] = s$ et $[[Ag(NH_3)_2]^+] = s$. On en déduit $K^\\circ = \\frac{s^2}{[NH_3]^2} \\implies s = [NH_3] \\sqrt{K^\\circ}$.'
        },
        {
          titre: '3. Calcul de la concentration en ammoniac',
          explication: 'Pour dissoudre $s = 0,01$ mol/L :',
          calculs: '[NH_3]_{libre} = \\frac{s}{\\sqrt{K^\\circ}} = \\frac{0,01}{\\sqrt{1,58 \\times 10^{-3}}} = \\frac{0,01}{0,0398} \\approx 0,25\\text{ mol/L}'
        }
      ],
      conclusion: 'La complexation déplace l\'équilibre de précipitation selon le principe de Le Chatelier en diminuant drastiquement la concentration en ion libre $[Ag^+]$.',
      reflexeDuCorrecteur: 'Pour calculer la constante d\'une réaction combinée, multiplier les constantes des étapes élémentaires associées.'
    }
  },
  {
    id: 'exo-mass-34-maths-algebre-matrice-adjointe',
    title: 'Comatrice, polynôme caractéristique & Rang de la comatrice',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Algèbre Linéaire & Dimension Finie',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'Soit $A \\in \\mathcal{M}_n(\\mathbb{K})$ avec $n \\ge 2$ et $\\mathrm{Com}(A)$ sa comatrice.\n1. Rappeler la relation fondamentale reliant $A$, sa transposée de comatrice et $\\det(A)$.\n2. Si $\\mathrm{rg}(A) = n$, déterminer le rang de $\\mathrm{Com}(A)$.\n3. Si $\\mathrm{rg}(A) = n-1$, montrer que $\\mathrm{rg}(\\mathrm{Com}(A)) = 1$.\n4. Si $\\mathrm{rg}(A) \\le n-2$, montrer que $\\mathrm{Com}(A) = 0$.',
    hints: [
      'Pour $\\mathrm{rg}(A) = n-1$, utilisez $A \\cdot \\mathrm{Com}(A)^T = 0$ pour relier $\\mathrm{Im}(\\mathrm{Com}(A)^T)$ à $\\ker(A)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Relation fondamentale de la comatrice',
          explication: 'Pour toute matrice carrée $A$, $A \\cdot \\mathrm{Com}(A)^T = \\mathrm{Com}(A)^T \\cdot A = \\det(A) I_n$.'
        },
        {
          titre: '2. Cas de plein rang',
          explication: 'Si $\\mathrm{rg}(A) = n$, $\\det(A) \\neq 0$. Alors $\\mathrm{Com}(A)^T = \\det(A) A^{-1}$ est inversible, donc $\\mathrm{rg}(\\mathrm{Com}(A)) = n$.'
        },
        {
          titre: '3. Cas de rang $n-1$',
          explication: 'Comme $\\det(A) = 0$, $A \\cdot \\mathrm{Com}(A)^T = 0$. Donc $\\mathrm{Im}(\\mathrm{Com}(A)^T) \\subset \\ker(A)$. Par le théorème du rang, $\\dim \\ker(A) = n - (n-1) = 1$. Donc $\\mathrm{rg}(\\mathrm{Com}(A)) \\le 1$. Comme $\\mathrm{rg}(A) = n-1$, il existe au moins un mineur de taille $n-1$ non nul, donc $\\mathrm{Com}(A) \\neq 0$. Ainsi $\\mathrm{rg}(\\mathrm{Com}(A)) = 1$.'
        },
        {
          titre: '4. Cas de rang $\\le n-2$',
          explication: 'Tous les mineurs d\'ordre $n-1$ sont extraits de sous-familles de colonnes liées : ils sont tous nuls. Par conséquent, $\\mathrm{Com}(A) = 0$.'
        }
      ],
      conclusion: 'Le rang de la comatrice ne prend que 3 valeurs possibles : $n$ (si $\\mathrm{rg}=n$), $1$ (si $\\mathrm{rg}=n-1$) et $0$ (si $\\mathrm{rg} \\le n-2$).',
      reflexeDuCorrecteur: 'Retenir par cœur la tri-partition du rang de la comatrice : $n$, $1$ ou $0$.'
    }
  },
  {
    id: 'exo-mass-35-physique-optique-resolution-rayleigh',
    title: 'Critère de résolution de Rayleigh & Pouvoir séparateur d\'un télescope',
    matiere: 'Physique',
    chapitreId: 'physique-optique-geometrique',
    chapitreTitre: 'Optique Géométrique & Systèmes de Gauss',
    filieres: ['MP', 'PC', 'PSI', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale-Supélec MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'Un télescope spatial possède une ouverture circulaire de diamètre $D = 2,4$ m. Il observe dans le domaine visible à $\\lambda = 550$ nm.\n1. Rappeler la forme de la figure de diffraction d\'une pupille circulaire (tache d\'Airy) et donner le demi-angle de diffraction $\\theta_0$.\n2. Énoncer le critère de résolution de deux étoiles ponctuelles selon Rayleigh.\n3. Calculer la séparation angulaire minimale $\\theta_{min}$ en secondes d\'arc. À quelle distance sur la Lune ($d = 384\\,000$ km) cette résolution correspond-elle ?',
    hints: [
      'Le premier zéro de la fonction de Bessel $J_1$ donne $\\theta_0 = 1,22 \\frac{\\lambda}{D}$.',
      '1 radian $\\approx 206\\,265$ secondes d\'arc.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Tache d\'Airy et demi-angle d\'ouverture',
          explication: 'La diffraction par une ouverture circulaire de diamètre $D$ produit une tache centrale d\'Airy entourée d\'anneaux sombres. Le premier anneau sombre est atteint pour un angle :',
          calculs: '\\theta_0 = 1,22 \\frac{\\lambda}{D}'
        },
        {
          titre: '2. Critère de Rayleigh',
          explication: 'Deux sources ponctuelles incohérentes sont dites résolues lorsque le maximum d\'intensité de la tache d\'Airy de l\'une coïncide exactement avec le premier minimum d\'intensité (premier anneau sombre) de l\'autre. Cela correspond à un creux d\'intensité de $19\\%$ entre les deux pics.'
        },
        {
          titre: '3. Application numérique',
          explication: 'Séparation angulaire minimale :',
          calculs: '\\theta_{min} = 1,22 \\frac{550 \\times 10^{-9}}{2,4} \\approx 2,80 \\times 10^{-7}\\text{ rad} \\approx 0,058\'\''
        },
        {
          titre: '4. Détail résolu sur la Lune',
          explication: 'Distance linéaire résolue à la surface lunaire :',
          calculs: '\\Delta x = d \\cdot \\theta_{min} = 384\\,000 \\times 10^3 \\times 2,80 \\times 10^{-7} \\approx 107\\text{ m}'
        }
      ],
      conclusion: 'Le télescope spatial Hubble ($D=2,4$ m) peut discerner deux cratères lunaires distants de seulement 100 mètres.',
      reflexeDuCorrecteur: 'Ne jamais oublier le préfacteur $1,22$ pour les pupilles circulaires, contrairement au facteur $1,0$ des fentes rectangulaires.'
    }
  },
  {
    id: 'exo-mass-36-maths-algebre-projecteurs-somme',
    title: 'Caractérisation de la somme directe par la somme des projecteurs',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Algèbre Linéaire & Dimension Finie',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 20,
    enonce: 'Soit $E$ un $\\mathbb{K}$-espace vectoriel et $p, q \\in \\mathcal{L}(E)$ deux projecteurs ($p^2=p, q^2=q$).\n1. Montrer que $p+q$ est un projecteur si et seulement si $p \\circ q = q \\circ p = 0$.\n2. Dans ce cas, montrer que $\\mathrm{Im}(p+q) = \\mathrm{Im}(p) \\oplus \\mathrm{Im}(q)$ et $\\ker(p+q) = \\ker(p) \\cap \\ker(q)$.',
    hints: [
      'Écrivez $(p+q)^2 = p+q$ et composez à gauche puis à droite par $p$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Condition nécessaire et suffisante',
          explication: '$(p+q)^2 = p^2 + p q + q p + q^2 = p + q + p q + q p$. Donc $(p+q)^2 = p+q \\iff p q + q p = 0$. En composant à gauche par $p$, $p^2 q + p q p = 0 \\implies p q + p q p = 0$. En composant à droite par $p$, $p q p + q p^2 = 0 \\implies p q p + q p = 0$. Donc $p q = q p$. Comme $p q + q p = 0$, on a $2 p q = 0 \\implies p q = q p = 0$.'
        },
        {
          titre: '2. Somme directe des images',
          explication: 'Si $x \\in \\mathrm{Im}(p) \\cap \\mathrm{Im}(q)$, alors $p(x) = x$ et $q(x) = x$. Alors $x = p(q(x)) = 0$. La somme est directe. De plus, tout élément de $\\mathrm{Im}(p+q)$ s\'écrit $(p+q)(x) = p(x) + q(x) \\in \\mathrm{Im}(p) + \\mathrm{Im}(q)$. L\'égalité est prouvée.'
        }
      ],
      conclusion: 'Deux projecteurs s\'additionnent en un projecteur si et seulement si leurs images sont disjointes et leurs noyaux complémentaires.',
      reflexeDuCorrecteur: 'L\'astuce de composer à gauche puis à droite par $p$ permet de découpler les produits croisés $pq$ et $qp$.'
    }
  },
  {
    id: 'exo-mass-37-physique-bilan-exergie-thermo',
    title: 'Exergie & Destruction d\'exergie par le théorème de Gouy-Stodola',
    matiere: 'Physique',
    chapitreId: 'physique-thermo-ouverts-ecoulements',
    chapitreTitre: 'Thermodynamique Industrielle : Systèmes Ouverts & Écoulements',
    filieres: ['PSI', 'PC'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Centrale-Supélec PSI',
    dureeEstimeeMin: 25,
    enonce: 'Un fluide évolue en système ouvert en contact avec un milieu ambiant à température $T_0$. On définit l\'exergie massique par $e_x = (h - h_0) - T_0 (s - s_0)$.\n1. Établir le bilan d\'exergie pour un écoulement stationnaire échangeant un travail utile massique $w_u$ et un transfert thermique $q$ avec une source à température $T_s$.\n2. Démontrer le théorème de Gouy-Stodola : la perte de travail utile par irréversibilité (travail dégradé) est proportionnelle à la création d\'entropie : $w_{perdu} = T_0 s_c$.\n3. Pourquoi l\'exergie est-elle le concept clé de l\'efficacité énergétique moderne ?',
    hints: [
      'Combinez le premier principe massique $\\Delta h = w_u + q$ et le second principe massique $\\Delta s = \\frac{q}{T_s} + s_c$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Bilan couplé enthalpie-entropie',
          explication: 'Premier principe en régime stationnaire : $\\Delta h = w_u + q$. Second principe : $\\Delta s = \\frac{q}{T_s} + s_c$. On exprime $q$ à partir du second principe : $q = T_s (\\Delta s - s_c)$, d\'où $\\Delta h = w_u + T_s \\Delta s - T_s s_c$.'
        },
        {
          titre: '2. Théorème de Gouy-Stodola',
          explication: 'Si la source thermique est le milieu ambiant ($T_s = T_0$), le travail utile maximal récupérable (en réversible $s_c = 0$) est $w_{u, max} = -\\Delta e_x$. En présence d\'irréversibilités ($s_c > 0$) :',
          calculs: 'w_u = -\\Delta e_x - T_0 s_c \\implies w_{perdu} = w_{u, max} - w_u = T_0 s_c'
        },
        {
          titre: '3. Portée industrielle',
          explication: 'L\'énergie se conserve (1er principe), mais l\'exergie (la fraction noble convertible en travail mécanique ou électrique) se détruit irréversiblement dès qu\'il y a frottement, mélange ou gradient thermique fini.'
        }
      ],
      conclusion: 'Le théorème de Gouy-Stodola chiffre en Joules monétaires le coût de chaque création d\'entropie $T_0 s_c$.',
      reflexeDuCorrecteur: 'Toujours associer irréversibilité, création d\'entropie et perte d\'exergie selon $T_0 s_c$.'
    }
  },
  {
    id: 'exo-mass-38-chimie-organique-aldolisation-croisee',
    title: 'Aldolisation croisée & Crotonisation régiosélective',
    matiere: 'Chimie',
    chapitreId: 'chimie-organique-carbonyles-grignard',
    chapitreTitre: 'Composés Carbonylés & Réactifs de Grignard',
    filieres: ['PC', 'PCSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours CCINP PC / Chimie',
    dureeEstimeeMin: 25,
    enonce: 'On réalise la réaction entre le benzaldéhyde $Ph-CHO$ et l\'acétophénone $Ph-CO-CH_3$ en milieu basique dilué ($NaOH$).\n1. Pourquoi l\'aldolisation croisée entre ces deux réactifs donne-t-elle un produit unique et non un mélange inextricable de quatre produits ?\n2. Détailler le mécanisme de l\'aldolisation (formation de l\'énolate, addition nucléophile, protonation).\n3. Décrire le mécanisme de crotonisation (déshydratation $E1_{cb}$) et justifier la configuration $(E)$ du produit final.',
    hints: [
      'Le benzaldéhyde n\'a aucun proton en $\\alpha$ du carbonyle : il ne peut pas s\'énoliser !',
      'Le produit de crotonisation est la chalcone, stabilisée par une très vaste délocalisation conjuguée.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Absence d\'hydrogène énolisable sur le benzaldéhyde',
          explication: 'Le benzaldéhyde ne possède aucun hydrogène sur son carbone en $\\alpha$ du carbonyle. Seule l\'acétophénone peut former un ion énolate par déprotonation. Comme le benzaldéhyde est plus électrophile que la cétone, l\'attaque s\'effectue quasi-exclusivement de l\'énolate d\'acétophénone sur le benzaldéhyde.'
        },
        {
          titre: '2. Mécanisme d\'aldolisation',
          explication: '1. Déprotonation par $HO^-$ : $Ph-CO-CH_3 \\to [Ph-CO-CH_2^- \\leftrightarrow Ph-C(O^-)=CH_2]$. 2. Addition nucléophile sur le benzaldéhyde : formation de l\'alcoolate $Ph-CH(O^-)-CH_2-CO-Ph$. 3. Protonation par l\'eau : formation du $\\beta$-hydroxycétone.'
        },
        {
          titre: '3. Crotonisation par le mécanisme $E1_{cb}$',
          explication: 'En milieu basique, l\'hydrogène restant en $\\alpha$ est encore acide. Déprotonation pour former un carbanion énolate stabilisé, puis expulsion de $HO^-$ (mauvais groupe partant favorisé par la formation d\'un système entièrement conjugué entre les deux cycles aromatiques). La configuration $(E)$ est obtenue car elle minimise l\'encombrement stérique entre les deux volumineux groupements phényles.'
        }
      ],
      conclusion: 'La chalcone $(E)$ est obtenue avec un rendement quasi-quantitatif grâce à la conjugaison étendue $\\pi-\\pi$.',
      reflexeDuCorrecteur: 'Pour une aldolisation croisée propre : choisir un partenaire non énolisable et plus électrophile.'
    }
  },
  {
    id: 'exo-mass-39-si-asservissement-correcteur-pi',
    title: 'Synthèse d\'un correcteur Proportionnel-Intégral (PI) & Compensation de pôle',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-stabilite-correcteurs',
    chapitreTitre: 'Stabilité & Synthèse des Correcteurs (P, PI, Avance de Phase)',
    filieres: ['PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec PSI',
    dureeEstimeeMin: 25,
    enonce: 'On considère un procédé modélisé par $H(p) = \\frac{K_0}{(1 + T_1 p)(1 + T_2 p)}$ avec $K_0 = 2, T_1 = 0,5$ s et $T_2 = 0,05$ s. On implémente un correcteur PI de fonction de transfert $C(p) = K_p \\frac{1 + T_i p}{T_i p}$.\n1. Pourquoi ce correcteur annule-t-il l\'erreur statique en boucle fermée ?\n2. Expliquer la stratégie de réglage par compensation de pôle pour choisir $T_i$.\n3. Calculer la valeur de $K_p$ garantissant une marge de phase $M_\\phi = 45^\\circ$.',
    hints: [
      'Choisissez $T_i$ égal à la constante de temps dominante $T_1 = 0,5$ s pour simplifier le terme $(1 + T_1 p)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Annulation de l\'erreur statique',
          explication: 'Le terme intégrateur $\\frac{1}{p}$ ajoute un pôle en $0$ à la FTBO, qui passe en classe 1. Pour une entrée en échelon, l\'erreur statique devient rigoureusement nulle : $\\varepsilon_s = 0$.'
        },
        {
          titre: '2. Compensation du pôle dominant',
          explication: 'On choisit le zéro du correcteur égal au pôle dominant du procédé : $T_i = T_1 = 0,5$ s. La FTBO corrigée devient :',
          calculs: 'T(p) = C(p) H(p) = K_p \\frac{1 + T_1 p}{T_1 p} \\frac{K_0}{(1 + T_1 p)(1 + T_2 p)} = \\frac{K_p K_0}{T_1 p (1 + T_2 p)}'
        },
        {
          titre: '3. Réglage de la marge de phase',
          explication: 'La phase de la FTBO est $\\phi(\\omega) = -90^\\circ - \\arctan(T_2 \\omega)$. Pour avoir $M_\\phi = 45^\\circ$, il faut $\\phi(\\omega_{0dB}) = -135^\\circ \\implies \\arctan(T_2 \\omega_{0dB}) = 45^\\circ \\implies \\omega_{0dB} = \\frac{1}{T_2} = 20\\text{ rad/s}$. La condition de gain unitaire à $\\omega_{0dB}$ donne :',
          calculs: '\\frac{K_p K_0}{T_1 \\omega_{0dB} \\sqrt{1 + (T_2 \\omega_{0dB})^2}} = 1 \\implies \\frac{K_p \\times 2}{0,5 \\times 20 \\times \\sqrt{2}} = 1 \\implies K_p = 5\\sqrt{2} \\approx 7,07'
        }
      ],
      conclusion: 'La compensation de pôle transforme un système du 2nd ordre lourd en un système rapide et précis du 1er ordre corrigé.',
      reflexeDuCorrecteur: 'Règle absolue de réglage de PI : toujours compenser la constante de temps la plus lente ($T_i = T_{max}$).'
    }
  },
  {
    id: 'exo-mass-40-info-sql-jointures-agregation',
    title: 'Requêtes SQL avancées : Jointures externes, GROUP BY & Clause HAVING',
    matiere: 'Informatique',
    chapitreId: 'info-sql-bases-donnees',
    chapitreTitre: 'Bases de Données Relationnelles & Requêtes SQL',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    difficulte: 2,
    origin: 'Épreuve d\'Informatique Commune CCINP / Centrale',
    dureeEstimeeMin: 20,
    enonce: 'On considère deux tables d\'une base de données d\'un lycée :\n- `Etudiant(id, nom, prenom, filiere)`\n- `Note(id_etudiant, matiere, note)`\n1. Écrire une requête SQL calculant la moyenne générale de chaque étudiant (affichant son nom, prénom et sa moyenne arrondie à 2 décimales), ordonnée par moyenne décroissante.\n2. Écrire une requête renvoyant les filières comptant au moins 3 étudiants ayant une moyenne générale supérieure à 14/20.\n3. Pourquoi ne peut-on pas utiliser `WHERE AVG(note) > 14` ?',
    hints: [
      'Utilisez `JOIN` entre les deux tables et `GROUP BY Etudiant.id`.',
      'Le filtre `WHERE` s\'applique sur les lignes individuelles AVANT regroupement, alors que `HAVING` s\'applique sur les groupes agrégés.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Requête avec agrégation et tri',
          explication: 'On effectue une jointure interne, on regroupe par étudiant et on calcule la moyenne :',
          calculs: 'SELECT E.nom, E.prenom, ROUND(AVG(N.note), 2) AS moyenne\\nFROM Etudiant E\\nJOIN Note N ON E.id = N.id_etudiant\\nGROUP BY E.id, E.nom, E.prenom\\nORDER BY moyenne DESC;'
        },
        {
          titre: '2. Différence fondamentale entre WHERE et HAVING',
          explication: 'La clause `WHERE` filtre les n-uplets individuels avant l\'opération de regroupement (avant de savoir qui est dans quel groupe). Une fonction d\'agrégation comme `AVG()` ou `COUNT()` n\'existe qu\'après constitution des groupes : elle doit impérativement être placée dans la clause `HAVING`.'
        },
        {
          titre: '3. Requête avec sous-requête et filtre sur groupe',
          explication: 'On utilise une sous-requête (ou CTE) pour calculer d\'abord la moyenne de chaque étudiant :',
          calculs: 'SELECT filiere\\nFROM (\\n    SELECT E.id, E.filiere, AVG(N.note) AS moy\\n    FROM Etudiant E JOIN Note N ON E.id = N.id_etudiant\\n    GROUP BY E.id, E.filiere\\n)\\nWHERE moy > 14\\nGROUP BY filiere\\nHAVING COUNT(*) >= 3;'
        }
      ],
      conclusion: 'La syntaxe SQL respecte un ordre d\'exécution strict : FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY.',
      reflexeDuCorrecteur: 'Erreur éliminatoire classique : placer une fonction d\'agrégation (`COUNT`, `AVG`, `MAX`) dans un `WHERE`.'
    }
  },
  {
    id: 'exo-mass-41-maths-theoreme-d-alembert-gauss',
    title: 'Théorème fondamental de l\'algèbre (d\'Alembert-Gauss) par compacité',
    matiere: 'Mathématiques',
    chapitreId: 'maths-polynomes-arithmetique',
    chapitreTitre: 'Polynômes $\\mathbb{K}[X]$ & Fractions Rationnelles',
    filieres: ['MP', 'MPI'],
    annee: '1ère & 2ème année',
    difficulte: 3,
    origin: 'Oral X-ENS MP / MPI',
    dureeEstimeeMin: 30,
    enonce: 'Soit $P \\in \\mathbb{C}[X]$ un polynôme non constant.\n1. Montrer que $|P(z)| \\to +\\infty$ quand $|z| \\to +\\infty$.\n2. En déduire que l\'application $z \\mapsto |P(z)|$ atteint son minimum global en un point $z_0 \\in \\mathbb{C}$.\n3. Par le lemme de d\'Alembert (développement local $P(z_0 + h) = P(z_0) + c h^k + o(h^k)$), montrer que si $P(z_0) \\neq 0$, $z_0$ ne peut pas être un minimum local. Conclure.',
    hints: [
      'Pour le point 2, restreignez-vous à un disque fermé de rayon $R$ assez grand, qui est compact dans $\\mathbb{C} \\simeq \\mathbb{R}^2$.',
      'Choisissez l\'argument de $h$ de façon à ce que $c h^k$ soit de signe opposé à $P(z_0)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Comportement à l\'infini',
          explication: 'Si $P(z) = a_n z^n + \\dots + a_0$ avec $a_n \\neq 0$ et $n \\ge 1$, alors $|P(z)| = |a_n| |z|^n |1 + o(1)| \\to +\\infty$ quand $|z| \\to +\\infty$.'
        },
        {
          titre: '2. Atteinte du minimum global sur un compact',
          explication: 'Il existe $R > 0$ tel que pour tout $|z| > R$, $|P(z)| > |P(0)|$. Le disque fermé $\\bar{D}(0, R)$ est fermé et borné dans $\\mathbb{C}$, donc compact. La fonction $z \\mapsto |P(z)|$ étant continue, elle atteint son minimum sur $\\bar{D}(0, R)$ en un point $z_0$. Comme $0 \\in \\bar{D}(0, R)$, on a $|P(z_0)| \\le |P(0)| < |P(z)|$ pour tout $|z| > R$ : $z_0$ est un minimum global sur $\\mathbb{C}$ tout entier.'
        },
        {
          titre: '3. Lemme de d\'Alembert',
          explication: 'Supposons par l\'absurde $P(z_0) = w_0 \\neq 0$. Soit $k \\ge 1$ le plus petit entier tel que le $k$-ième coefficient dans la formule de Taylor en $z_0$ soit non nul : $P(z_0 + h) = w_0 + c h^k + o(h^k)$ avec $c \\neq 0$. En posant $h = r e^{i \\theta}$ avec $\\theta$ tel que $c h^k = -r^k \\frac{|c|}{|w_0|} w_0$, on a pour $r > 0$ assez petit : $|P(z_0 + h)| = |w_0| (1 - r^k \\frac{|c|}{|w_0|}) + o(r^k) < |w_0|$, ce qui contredit la minimalité de $z_0$. Donc $P(z_0) = 0$.'
        }
      ],
      conclusion: 'Tout polynôme non constant admet au moins une racine dans $\\mathbb{C}$ : le corps $\\mathbb{C}$ est algébriquement clos.',
      reflexeDuCorrecteur: 'Pour prouver qu\'une fonction sur $\\mathbb{R}^n$ atteint son minimum global : coercive à l\'infini + compacité de la boule fermée.'
    }
  },
  {
    id: 'exo-mass-42-physique-effet-hall-semi-conducteur',
    title: 'Effet Hall dans un conducteur : Signe des porteurs de charge & Densité',
    matiere: 'Physique',
    chapitreId: 'physique-maxwell',
    chapitreTitre: 'Électromagnétisme & Équations de Maxwell',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PSI / MP',
    dureeEstimeeMin: 20,
    enonce: 'Un ruban conducteur rectangulaire de largeur $a$ (selon $y$) et d\'épaisseur $b$ (selon $z$) est parcouru par un courant stationnaire $I \\vec{u}_x$ et plongé dans un champ magnétique $\\vec{B} = B \\vec{u}_z$. Les porteurs de charge ont une charge $q$ et une densité volumique $n$.\n1. Établir le champ électrique de Hall $\\vec{E}_H$ à l\'équilibre stationnaire transversal.\n2. Exprimer la tension de Hall $U_H = V(y=a) - V(y=0)$ en fonction de $I, B, n, q$ et de l\'épaisseur $b$.\n3. Comment cette mesure permet-elle de déterminer à la fois la densité $n$ et le signe de la charge $q$ des porteurs porteurs (électrons vs trous) ?',
    hints: [
      'À l\'équilibre transversal selon $\\vec{u}_y$, la force électrique de Hall compense exactement la force magnétique de Lorentz.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équilibre transversal de Lorentz',
          explication: 'Les porteurs ont une vitesse de dérive $\\vec{v} = v\\vec{u}_x$. La force de Lorentz globale est $\\vec{F} = q(\\vec{E}_H + \\vec{v} \\wedge \\vec{B}) = \\vec{0}$. D\'où :',
          calculs: '\\vec{E}_H = -\\vec{v} \\wedge \\vec{B} = -(v \\vec{u}_x) \\wedge (B \\vec{u}_z) = v B \\vec{u}_y'
        },
        {
          titre: '2. Calcul de la tension de Hall',
          explication: 'Le courant total est $I = j (a b) = n q v a b \\implies v = \\frac{I}{n q a b}$. La tension de Hall entre les deux faces latérales distantes de $a$ vaut :',
          calculs: 'U_H = E_H \\cdot a = v B a = \\frac{I B}{n q b} = R_H \\frac{I B}{b} \\quad \\text{avec} \\quad R_H = \\frac{1}{n q}'
        },
        {
          titre: '3. Signe et densité des porteurs',
          explication: 'La constante de Hall $R_H = \\frac{1}{n q}$ est mesurée expérimentalement : sa valeur donne immédiatement la densité $n$, et son signe donne directement le signe de la charge des porteurs ($q = -e$ pour les métaux usuels, $q = +e$ pour les semi-conducteurs de type P dopés).'
        }
      ],
      conclusion: 'L\'effet Hall est la preuve expérimentale directe de l\'existence des trous (quasi-particules positives) dans les semi-conducteurs.',
      reflexeDuCorrecteur: 'Remarquez que la tension de Hall dépend de l\'épaisseur $b$ (dimension parallèle à $\\vec{B}$) et non de la largeur $a$ !'
    }
  },
  {
    id: 'exo-mass-43-chimie-titrage-conductimetrique',
    title: 'Titrage conductimétrique d\'un mélange d\'acides : Pentes & Mobilité ionique',
    matiere: 'Chimie',
    chapitreId: 'chimie-solutions-aqueuses-precipitation',
    chapitreTitre: 'Équilibres en Solution Aqueuse & Précipitation',
    filieres: ['PCSI', 'PC', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Agro-Véto BCPST / CCINP',
    dureeEstimeeMin: 20,
    enonce: 'On titre un mélange d\'acide chlorhydrique ($HCl$, fort) et d\'acide éthanoïque ($CH_3COOH$, faible) par de la soude ($NaOH$). On mesure la conductivité $\\sigma$ corrigée de la dilution en fonction du volume de soude versé $V_b$.\nOn donne les conductivités molaires ioniques à 298 K : $\\lambda^\\circ(H_3O^+) = 35,0$, $\\lambda^\\circ(HO^-) = 19,8$, $\\lambda^\\circ(Na^+) = 5,0$, $\\lambda^\\circ(CH_3COO^-) = 4,1$, $\\lambda^\\circ(Cl^-) = 7,6$ en $\\text{mS}\\cdot\\text{m}^2\\cdot\\text{mol}^{-1}$.\n1. Expliquer qualitativement et quantitativement l\'évolution de la pente avant la première équivalence $V_{E1}$.\n2. Expliquer l\'évolution de la pente entre $V_{E1}$ et la deuxième équivalence $V_{E2}$.\n3. Expliquer la pente après $V_{E2}$.',
    hints: [
      'Appliquez la loi de Kohlrausch $\\sigma = \\sum \\lambda_i [X_i]$.',
      'L\'acide fort est titré en premier car sa réaction avec $HO^-$ a une constante $K_1 = 10^{14}$ bien supérieure à celle de l\'acide faible ($K_2 = 10^{9,2}$).'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Titrage de l\'acide fort (avant $V_{E1}$)',
          explication: 'Les ions $H_3O^+$ très conducteurs ($35,0$) sont remplacés par des ions $Na^+$ peu conducteurs ($5,0$) : $\\Delta \\lambda = \\lambda(Na^+) - \\lambda(H_3O^+) = -30,0$. La conductivité chute très fortement avec une pente négative raide.'
        },
        {
          titre: '2. Titrage de l\'acide faible (entre $V_{E1}$ et $V_{E2}$)',
          explication: 'L\'acide éthanoïque non dissocié réagit avec la soude pour produire des ions $CH_3COO^-$ et $Na^+$ : $\\Delta \\lambda = \\lambda(CH_3COO^-) + \\lambda(Na^+) = 4,1 + 5,0 = +9,1$. La conductivité augmente avec une pente modérée.'
        },
        {
          titre: '3. Après la deuxième équivalence ($V > V_{E2}$)',
          explication: 'Tous les acides sont neutralisés. On ajoute simplement des ions $Na^+$ et $HO^-$ en excès : $\\Delta \\lambda = \\lambda(Na^+) + \\lambda(HO^-) = 5,0 + 19,8 = +24,8$. La conductivité augmente avec une pente positive très forte.'
        }
      ],
      conclusion: 'La courbe présente une forme en N inversé très caractéristique permettant de doser successivement les deux acidités avec une excellente précision.',
      reflexeDuCorrecteur: 'Pour justifier les pentes en conductimétrie, toujours calculer le bilan $\\Delta \\lambda = \\sum \\lambda_{produits} - \\sum \\lambda_{consommes}$.'
    }
  },
  {
    id: 'exo-mass-44-si-theoreme-residu-stabilite-nyquist',
    title: 'Critère géométrique de Nyquist & Comptage des tours autour du point critique $(-1, 0)$',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-stabilite-correcteurs',
    chapitreTitre: 'Stabilité & Synthèse des Correcteurs (P, PI, Avance de Phase)',
    filieres: ['PSI', 'MP'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Concours Mines-Ponts PSI',
    dureeEstimeeMin: 30,
    enonce: 'Soit un système dont la FTBO $T(p)$ possède $n_{p+}$ pôles à partie réelle strictement positive. On trace l\'hodographe de Nyquist complet de $T(j\\omega)$ pour $\\omega \\in ]-\\infty, +\\infty[$.\n1. Énoncer le critère de Nyquist reliant le nombre de pôles instables en boucle fermée $Z$, le nombre de pôles instables en boucle ouverte $P = n_{p+}$, et le nombre de tours $N$ du lieu autour du point critique $-1 + 0j$.\n2. Si la FTBO est stable en boucle ouverte ($P=0$), quelle est la condition nécessaire et suffisante pour que la boucle fermée soit stable ?\n3. Comment ce critère justifie-t-il le critère simplifié du revers dans le plan de Bode ?',
    hints: [
      'Le principe de l\'argument de Cauchy stipule que la variation d\'argument est $2\\pi (Z - P)$.',
      'Le sens trigonométrique direct correspond à $N > 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Énoncé du critère de Nyquist complet',
          explication: 'D\'après le principe de l\'argument appliqué à la fonction $1 + T(p)$ le long du contour de Bromwich : le nombre de zéros instables en boucle fermée est donné par $Z = P - N$, où $N$ est le nombre algébrique de tours effectués par le lieu de Nyquist autour du point critique $-1$ dans le sens trigonométrique. La stabilité en boucle fermée impose $Z = 0$, soit $N = P$.'
        },
        {
          titre: '2. Cas des systèmes stables en boucle ouverte',
          explication: 'Si la FTBO n\'a aucun pôle instable ($P = 0$), alors la boucle fermée est stable si et seulement si $N = 0$ : le lieu de Nyquist ne doit effectuer aucun tour autour du point critique $-1$.'
        },
        {
          titre: '3. Lien avec le critère du revers',
          explication: 'Si le système est à déphasage minimal et stable en BO, laisser le point $-1$ à gauche en parcourant le lieu dans le sens des pulsations croissantes équivaut à avoir une marge de phase positive ($M_\\phi > 0$) et une marge de gain positive ($M_G > 0$) sur le diagramme de Bode.'
        }
      ],
      conclusion: 'Le critère de Nyquist est universel et s\'applique même aux systèmes naturellement instables en boucle ouverte (comme les fusées ou les avions de chasse).',
      reflexeDuCorrecteur: 'Retenir la formule fondamentale de Nyquist : $Z = P - N$ (Zéros BF = Pôles BO - Tours trigonométriques).'
    }
  },
  {
    id: 'exo-mass-45-info-floyd-warshall',
    title: 'Algorithme de Floyd-Warshall : Tous les plus courts chemins par programmation dynamique',
    matiere: 'Informatique',
    chapitreId: 'info-programmation-dynamique',
    chapitreTitre: 'Programmation Dynamique & Optimisation',
    filieres: ['MPI', 'MP', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    difficulte: 2,
    origin: 'Épreuve d\'Informatique X-ENS MPI / Mines',
    dureeEstimeeMin: 25,
    enonce: 'Soit $G=(V, E, w)$ un graphe orienté pondéré sans cycle négatif avec $V = \\{0, \\dots, n-1\\}$.\n1. Définir la quantité $d_k(i, j)$ comme la longueur du plus court chemin de $i$ à $j$ n\'utilisant que des sommets intermédiaires dans $\\{0, \\dots, k-1\\}$.\n2. Établir la relation de récurrence de Bellman reliant $d_k(i, j)$ à $d_{k-1}$.\n3. Écrire l\'algorithme de Floyd-Warshall en Python et justifier sa complexité temporelle $\\mathcal{O}(n^3)$ et spatiale $\\mathcal{O}(n^2)$.',
    hints: [
      'Pour passer à $k$, comparez le chemin direct sans passer par $k$ ($d_{k-1}(i, j)$) avec le chemin passant par $k$ ($d_{k-1}(i, k) + d_{k-1}(k, j)$).'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Relation de récurrence de Floyd-Warshall',
          explication: 'Le sommet intermédiaire $k$ fait-il partie du plus court chemin optimal ?\n- S\'il n\'en fait pas partie : coût $= d_{k-1}(i, j)$.\n- S\'il en fait partie : coût $= d_{k-1}(i, k) + d_{k-1}(k, j)$.\nD\'où la récurrence :',
          calculs: 'd_k(i, j) = \\min\\left( d_{k-1}(i, j), \\; d_{k-1}(i, k) + d_{k-1}(k, j) \\right)'
        },
        {
          titre: '2. Code Python concis',
          explication: 'Grâce à la localité, on peut écraser la matrice en place dans une seule matrice de taille $n \\times n$ :',
          calculs: 'def floyd_warshall(dist):\\n    n = len(dist)\\n    for k in range(n):\\n        for i in range(n):\\n            for j in range(n):\\n                if dist[i][k] + dist[k][j] < dist[i][j]:\\n                    dist[i][j] = dist[i][k] + dist[k][j]\\n    return dist'
        },
        {
          titre: '3. Analyse de complexité',
          explication: 'Trois boucles imbriquées de taille $n$ avec une opération élémentaire en temps $\\mathcal{O}(1)$ :',
          calculs: 'T(n) = \\mathcal{O}(n^3) \\quad \\text{et} \\quad S(n) = \\mathcal{O}(n^2)'
        }
      ],
      conclusion: 'Floyd-Warshall est simple et robuste, autorise les arêtes de poids négatif et détecte les cycles absorbants si $dist[i][i] < 0$.',
      reflexeDuCorrecteur: 'L\'ordre des boucles est impératif : la variable de l\'étape $k$ DOIT être dans la boucle externe !'
    }
  },
  {
    id: 'exo-mass-46-maths-valeurs-propres-gelfand-tridiag',
    title: 'Matrice tridiagonale de Toeplitz & Vecteurs propres sinusoïdaux',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 30,
    enonce: 'Soit $A_n \\in \\mathcal{M}_n(\\mathbb{R})$ la matrice ayant des 2 sur la diagonale principale et des $-1$ sur les sous- et sur-diagonales (matrice du laplacien discret 1D).\n1. Soit $x = (x_1, \\dots, x_n)^T$ un vecteur propre associé à $\\lambda$. En posant $x_0 = x_{n+1} = 0$, écrire la relation de récurrence vérifiée par les composantes $x_k$.\n2. En cherchant $x_k = \\sin(k \\theta)$, déterminer les valeurs possibles de $\\theta$ pour satisfaire les conditions aux bords.\n3. En déduire les $n$ valeurs propres distinctes de $A_n$ et sa diagonalisabilité.',
    hints: [
      'Utilisez la formule d\'addition $\\sin((k+1)\\theta) + \\sin((k-1)\\theta) = 2 \\cos(\\theta) \\sin(k\\theta)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation aux différences finies',
          explication: 'L\'égalité $A x = \\lambda x$ s\'écrit pour chaque ligne $k \\in \\{1, \\dots, n\\}$ : $-x_{k-1} + 2 x_k - x_{k+1} = \\lambda x_k$, soit $x_{k+1} - (2 - \\lambda) x_k + x_{k-1} = 0$ avec les conditions aux limites $x_0 = 0$ et $x_{n+1} = 0$.'
        },
        {
          titre: '2. Solution sous forme trigonométrique',
          explication: 'En posant $2 - \\lambda = 2 \\cos \\theta$, on vérifie immédiatement $x_k = \\sin(k\\theta)$ car $\\sin((k+1)\\theta) + \\sin((k-1)\\theta) = 2 \\cos \\theta \\sin(k\\theta)$. La condition en $k=0$ donne $x_0 = \\sin(0) = 0$. La condition en $k=n+1$ impose $\\sin((n+1)\\theta) = 0$, d\'où :',
          calculs: '\\theta_j = \\frac{j \\pi}{n+1} \\quad \\text{pour } j \\in \\{1, 2, \\dots, n\\}'
        },
        {
          titre: '3. Spectre explicite',
          explication: 'Puisque $\\lambda_j = 2 - 2 \\cos \\theta_j = 4 \\sin^2\\left(\\frac{j \\pi}{2(n+1)}\\right)$, on obtient $n$ valeurs propres réelles deux à deux distinctes :',
          calculs: '\\lambda_j = 4 \\sin^2\\left(\\frac{j \\pi}{2(n+1)}\\right) \\quad (1 \\le j \\le n)'
        }
      ],
      conclusion: 'La matrice possède $n$ valeurs propres réelles distinctes : elle est diagonalisable avec des modes propres sinusoïdaux discrets.',
      reflexeDuCorrecteur: 'Les matrices tridiagonales de Toeplitz discrétisent l\'opérateur différentiel $-\\frac{\\mathrm{d}^2}{\\mathrm{d}x^2}$ dont les fonctions propres sont les sinus.'
    }
  },
  {
    id: 'exo-mass-47-physique-cavite-laser-stabilite',
    title: 'Optique matricielle paraxiale & Stabilité d\'une cavité laser',
    matiere: 'Physique',
    chapitreId: 'physique-optique-geometrique-instruments',
    chapitreTitre: 'Optique Géométrique : Systèmes Centrés & Instruments d\'Optique',
    filieres: ['PC', 'MP', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PC / MP',
    dureeEstimeeMin: 25,
    enonce: 'Un rayon lumineux est repéré par sa hauteur $y$ et son angle $\\theta$ sous forme de vecteur $\\begin{pmatrix} y \\\\ \\theta \\end{pmatrix}$.\n1. Donner la matrice de transfert $T$ pour une translation d\'une distance $d$ et la matrice $R$ pour la réflexion sur un miroir sphérique de rayon de courbure $R_c$.\n2. On forme une cavité optique avec deux miroirs sphériques $M_1$ ($R_1$) et $M_2$ ($R_2$) distants de $L$. Exprimer la matrice d\'aller-retour $M_{AR}$.\n3. Établir la condition de confinement des rayons (stabilité de la cavité) : $0 \\le g_1 g_2 \\le 1$ avec $g_i = 1 - \\frac{L}{R_i}$.',
    hints: [
      'Une matrice de transfert $2 \\times 2$ unimodulaire ($\\det M = 1$) est stable (valeurs propres complexes de module 1) si et seulement si $|\\mathrm{Tr}(M)| \\le 2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Matrices élémentaires',
          explication: 'Matrice de propagation libre : $T = \\begin{pmatrix} 1 & d \\\\ 0 & 1 \\end{pmatrix}$. Matrice de réflexion sur un miroir sphérique de rayon algébrique $R_c$ (foyer $f = R_c/2$) : $R = \\begin{pmatrix} 1 & 0 \\\\ -2/R_c & 1 \\end{pmatrix}$.'
        },
        {
          titre: '2. Matrice d\'aller-retour et trace',
          explication: 'Un aller-retour complet correspond à $M_{AR} = R_1 T R_2 T$. Comme $\\det(M_{AR}) = 1$, ses valeurs propres vérifient $\\lambda^2 - \\mathrm{Tr}(M)\\lambda + 1 = 0$. Les trajectoires restent bornées si les valeurs propres sont des exponentielles imaginaires conjuguées, ce qui impose :',
          calculs: '-2 \\le \\mathrm{Tr}(M_{AR}) \\le 2'
        },
        {
          titre: '3. Condition de stabilité des résonateurs laser',
          explication: 'Le calcul direct de la trace donne $\\mathrm{Tr}(M_{AR}) = 2 (2 g_1 g_2 - 1)$ avec $g_1 = 1 - L/R_1$ et $g_2 = 1 - L/R_2$. La double inégalité devient immédiatement :',
          calculs: '0 \\le g_1 g_2 \\le 1'
        }
      ],
      conclusion: 'Le diagramme de stabilité de Kogelnik $(g_1, g_2)$ délimite les géométries de cavités où la lumière reste piégée sans déborder des miroirs.',
      reflexeDuCorrecteur: 'Pour tout système optique ou mécanique périodique, la stabilité équivaut au critère de trace $|\\mathrm{Tr}(M)| \\le 2$.'
    }
  },
  {
    id: 'exo-mass-48-chimie-thermo-loi-trouton',
    title: 'Vaporisation des liquides, règle de Trouton & Formule de Clapeyron',
    matiere: 'Chimie',
    chapitreId: 'chimie-thermo-potentiel-chimique-binaires',
    chapitreTitre: 'Thermodynamique Chimique : Potentiel Chimique & Équilibres Binaires Liquide-Vapeur',
    filieres: ['PC', 'PCSI', 'BCPST'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec Chimie',
    dureeEstimeeMin: 20,
    enonce: 'On étudie la vaporisation d\'un liquide pur sous pression de vapeur saturante $P_{sat}(T)$.\n1. Énoncer la relation de Clapeyron reliant $\\frac{\\mathrm{d}P_{sat}}{\\mathrm{d}T}$ à l\'enthalpie de vaporisation $\\Delta_{vap} H^\\circ$.\n2. En assimilant la vapeur à un gaz parfait et en négligeant le volume molaire du liquide devant celui du gaz, établir l\'équation différentielle de Clausius-Clapeyron.\n3. Énoncer la règle empirique de Trouton : $\\Delta_{vap} S^\\circ = \\frac{\\Delta_{vap} H^\\circ}{T_{eb}} \\approx 88\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$. Pourquoi l\'eau présente-t-elle un écart important ($\\approx 109\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$) ?',
    hints: [
      'Pour l\'eau, prenez en compte les liaisons hydrogène dans la phase liquide qui augmentent le désordre lors du passage à la vapeur.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Formule de Clapeyron',
          explication: 'À l\'équilibre liquide-vapeur d\'un corps pur : $\\frac{\\mathrm{d}P_{sat}}{\\mathrm{d}T} = \\frac{\\Delta_{vap} H_m}{T (V_{m, gaz} - V_{m, liq})}$.'
        },
        {
          titre: '2. Approximation de Clausius-Clapeyron',
          explication: 'Comme $V_{m, gaz} \\gg V_{m, liq}$ et $V_{m, gaz} = \\frac{R T}{P_{sat}}$, l\'équation devient $\\frac{\\mathrm{d}P_{sat}}{\\mathrm{d}T} = \\frac{P_{sat} \\Delta_{vap} H_m}{R T^2}$, d\'où :',
          calculs: '\\frac{\\mathrm{d}\\ln P_{sat}}{\\mathrm{d}T} = \\frac{\\Delta_{vap} H_m}{R T^2} \\implies \\ln\\left(\\frac{P_{sat}}{P_0}\\right) = -\\frac{\\Delta_{vap} H_m}{R}\\left(\\frac{1}{T} - \\frac{1}{T_{eb}}\\right)'
        },
        {
          titre: '3. Règle de Trouton et anomalie de l\'eau',
          explication: 'L\'entropie de vaporisation mesure l\'augmentation de désordre moléculaire en passant de la phase liquide dense à la phase gaz diluée. Pour les liquides simples non associés, cette variation est quasi-universelle ($\\sim 88\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$). Pour l\'eau, le réseau très ordonné de liaisons hydrogène dans le liquide implique une augmentation d\'entropie nettement plus grande lors de la vaporisation ($109\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).'
        }
      ],
      conclusion: 'La règle de Trouton permet d\'estimer instantanément l\'enthalpie de vaporisation d\'un liquide connaissant sa température d\'ébullition.',
      reflexeDuCorrecteur: 'Toute déviation notable à la règle de Trouton signale une structuration moléculaire forte par liaisons intermoléculaires dans la phase liquide.'
    }
  },
  {
    id: 'exo-mass-49-si-rendement-vis-ecrou',
    title: 'Rendement et réversibilité d\'un mécanisme vis-écrou avec frottement',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-statique-adherence-coulomb',
    chapitreTitre: 'Statique des Solides : Modélisation des Contacts Frottants & Lois de Coulomb',
    filieres: ['PSI', 'MP', 'MPSI', 'PCSI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PSI',
    dureeEstimeeMin: 25,
    enonce: 'Une vis à filet trapézoïdal ou carré de rayon moyen $r$, de pas $p_x$ (angle d\'hélice $\\alpha$ tel que $\\tan \\alpha = \\frac{p_x}{2\\pi r}$) avance sous une charge axiale résistante $F_{ext}$. Le coefficient de frottement dans le filetage est $f = \\tan \\varphi$.\n1. Établir l\'expression du couple moteur $C_m$ nécessaire pour soulever la charge en fonction de $F_{ext}, r, \\alpha$ et $\\varphi$.\n2. Exprimer le rendement direct $\\eta_{direct} = \\frac{C_{m, sans frottement}}{C_m}$.\n3. À quelle condition géométrique sur l\'angle d\'hélice $\\alpha$ le mécanisme est-il irréversible (sécurité anti-retour) ?',
    hints: [
      'Développez le filet d\'hélice sur un plan incliné d\'angle $\\alpha$ et inclinez la force de contact du demi-angle de frottement $\\varphi$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équilibre sur plan incliné développé',
          explication: 'Sur le filet déplié, l\'effort moteur tangentiel $F_t = C_m / r$ doit équilibrer la force axiale $F_{ext}$ et le frottement incliné de $\\varphi$. On a immédiatement :',
          calculs: 'C_m = F_{ext} \\cdot r \\cdot \\tan(\\alpha + \\varphi)'
        },
        {
          titre: '2. Rendement direct',
          explication: 'Sans frottement ($\\varphi = 0$), le couple idéal vaut $C_{m0} = F_{ext} r \\tan \\alpha$. Le rendement s\'écrit :',
          calculs: '\\eta_{direct} = \\frac{\\tan \\alpha}{\\tan(\\alpha + \\varphi)}'
        },
        {
          titre: '3. Condition d\'irréversibilité',
          explication: 'Pour que la charge axiale ne puisse pas faire tourner spontanément la vis en sens inverse (descente automatique sous charge), il faut que le couple inverse soit résistant, ce qui impose :',
          calculs: '\\alpha \\le \\varphi \\iff \\tan \\alpha \\le f'
        }
      ],
      conclusion: 'Un système vis-écrou irréversible garantit la sécurité des crics et ponts élévateurs mais a un rendement nécessairement inférieur à $50\\%$.',
      reflexeDuCorrecteur: 'L\'irréversibilité impose $\\alpha \\le \\varphi$, ce qui implique mathématiquement $\\eta < 50\\%$.'
    }
  },
  {
    id: 'exo-mass-50-info-hachage-adressage-ouvert',
    title: 'Tables de Hachage : Adressage ouvert, sondage linéaire & Facteur de charge',
    matiere: 'Informatique',
    chapitreId: 'info-piles-files-listes',
    chapitreTitre: 'Structures de Données Linéaires : Piles, Files & Listes Chaînées',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    difficulte: 2,
    origin: 'Épreuve d\'Informatique X-ENS MPI / Centrale',
    dureeEstimeeMin: 25,
    enonce: 'On gère un ensemble d\'éléments par une table de hachage de taille $m$ avec une fonction de hachage $h(k)$ et une résolution des collisions par sondage linéaire : $h(k, i) = (h(k) + i) \\pmod m$.\n1. Comment s\'effectue l\'insertion d\'une clé $k$ ? Que se passe-t-il lors de la suppression d\'un élément ?\n2. Pourquoi doit-on utiliser une valeur sentinelle `SUPPRIME` plutôt que simplement effacer la case ?\n3. Sous l\'hypothèse de hachage uniforme, exprimer le nombre moyen d\'accès en fonction du facteur de charge $\\alpha = n/m < 1$ pour une recherche infructueuse.',
    hints: [
      'Si on vide simplement la case, les recherches ultérieures d\'éléments sondés plus loin s\'arrêteraient prématurément sur ce trou.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Mécanisme du sondage linéaire',
          explication: 'On teste successivement les alvéoles $h(k), h(k)+1, h(k)+2, \\dots \\pmod m$ jusqu\'à trouver une case vide pour insérer, ou la clé recherchée.'
        },
        {
          titre: '2. Rôle critique de la case `SUPPRIME`',
          explication: 'Lorsqu\'on supprime une clé, si on remplace la case par `VIDE`, une recherche ultérieure d\'une clé $k\'$ qui avait sauté par-dessus cette alvéole s\'arrêterait immédiatement en concluant à tort que $k\'$ n\'est pas dans la table ! Il faut donc inscrire un marqueur `SUPPRIME` qui autorise les recherches à continuer tout en acceptant les futures insertions.'
        },
        {
          titre: '3. Coût moyen et facteur de charge',
          explication: 'Sous l\'hypothèse de hachage uniforme simple, la probabilité qu\'une case soit occupée est $\\alpha = n/m$. Le nombre moyen d\'alvéoles consécutives pleines avant de tomber sur une case vide est une variable géométrique de paramètre $1 - \\alpha$ :',
          calculs: 'E[\\text{accès}] = \\frac{1}{1 - \\alpha}'
        }
      ],
      conclusion: 'Pour maintenir un temps constant moyen $\\mathcal{O}(1)$, les dictionnaires en Python redimensionnent dynamiquement la table dès que $\\alpha > 0,66$.',
      reflexeDuCorrecteur: 'Dans toute table de hachage à adressage ouvert, la suppression nécessite impérativement un marquage fantôme `SUPPRIME`.'
    }
  }
];
