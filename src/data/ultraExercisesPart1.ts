import type { ExerciseItem } from './cpgeData';

export const ULTRA_EXERCISES_PART1: ExerciseItem[] = [
  // ==========================================
  // MATHEMATIQUES (1 à 15)
  // ==========================================
  {
    id: 'exo-ultra-1-rayons-frenet-spirale',
    title: 'Spirale logarithmique : Repère de Frenet et longueur rectifiable',
    matiere: 'Mathématiques',
    chapitreId: 'maths-geometrie-differentielle-courbure-frenet',
    chapitreTitre: 'Géométrie Différentielle : Courbes Paramétrées, Abscisse Curviligne & Repère de Frenet',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'On considère la spirale logarithmique d\'équation polaire $r(\\theta) = a e^{k \\theta}$ où $a > 0$ et $k > 0$ sont deux constantes réelles.\n1. Exprimer le vecteur vitesse $\\vec{v}(\\theta) = \\frac{\\mathrm{d}\\vec{OM}}{\\mathrm{d}\\theta}$ dans la base polaire $(\\vec{u}_r, \\vec{u}_\\theta)$.\n2. Montrer que l\'angle $\\alpha$ entre le rayon vecteur $\\vec{OM}$ et la tangente unitaire $\\vec{T}$ est constant tout au long de la spirale (propriété équiangulaire).\n3. Calculer la courbure algébrique $c(\\theta)$ et le rayon de courbure $R(\\theta)$.\n4. Calculer la longueur d\'arc $L$ depuis $\\theta = -\\infty$ jusqu\'à $\\theta = 0$. Conclure sur le caractère rectifiable de la spire.',
    hints: [
      'Dans la base polaire, $\\frac{\\mathrm{d}\\vec{u}_r}{\\mathrm{d}\\theta} = \\vec{u}_\\theta$ et $\\frac{\\mathrm{d}\\vec{u}_\\theta}{\\mathrm{d}\\theta} = -\\vec{u}_r$.',
      'L\'angle $\\alpha$ vérifie $\\tan\\alpha = \\frac{r}{r\'}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Vecteur vitesse',
          explication: 'Comme $\\vec{OM} = r(\\theta) \\vec{u}_r$, on dérive par rapport à $\\theta$ :\n$$\\vec{v}(\\theta) = r\'(\\theta) \\vec{u}_r + r(\\theta) \\vec{u}_\\theta = a k e^{k\\theta} \\vec{u}_r + a e^{k\\theta} \\vec{u}_\\theta = a e^{k\\theta} (k \\vec{u}_r + \\vec{u}_\\theta)$$\nLa norme de la vitesse est $v(\\theta) = a e^{k\\theta} \\sqrt{k^2 + 1}$.'
        },
        {
          titre: '2. Angle constant (équiangularité)',
          explication: 'Le cosinus de l\'angle $\\alpha = (\\widehat{\\vec{u}_r, \\vec{v}})$ vaut $\\cos\\alpha = \\frac{\\langle \\vec{u}_r, \\vec{v} \\rangle}{\\|\\vec{v}\\|} = \\frac{k}{\\sqrt{k^2+1}}$, et $\\sin\\alpha = \\frac{1}{\\sqrt{k^2+1}}$. L\'angle $\\alpha = \\arctan(1/k)$ est rigoureusement indépendant de $\\theta$.'
        },
        {
          titre: '3. Courbure et rayon de courbure',
          explication: 'La formule de la courbure en coordonnées polaires s\'écrit $c = \\frac{r^2 + 2r\'^2 - r r\'\'}{(r^2 + r\'^2)^{3/2}}$. Ici $r\' = k r$ et $r\'\' = k^2 r$, donc $r^2 + 2 k^2 r^2 - k^2 r^2 = (1+k^2) r^2$. Ainsi :\n$$c(\\theta) = \\frac{(1+k^2) r^2}{( (1+k^2) r^2 )^{3/2}} = \\frac{1}{r(\\theta) \\sqrt{1+k^2}} \\implies R(\\theta) = r(\\theta) \\sqrt{1+k^2}$$'
        },
        {
          titre: '4. Longueur de l\'arc',
          explication: 'La longueur depuis $-\\infty$ jusqu\'à 0 est :\n$$L = \\int_{-\\infty}^0 \\|\\vec{v}(\\theta)\\|\\,\\mathrm{d}\\theta = a \\sqrt{1+k^2} \\int_{-\\infty}^0 e^{k\\theta}\\,\\mathrm{d}\\theta = a \\sqrt{1+k^2} \\left[ \\frac{e^{k\\theta}}{k} \\right]_{-\\infty}^0 = \\frac{a \\sqrt{1+k^2}}{k}$$\nBien que la spirale effectue une infinité de tours autour de l\'origine, sa longueur totale est finie : la courbe est rectifiable.'
        }
      ],
      conclusion: 'La spirale logarithmique modélise la coquille du nautile et les trajectoires de vol des faucons en approche proie.',
      reflexeDuCorrecteur: 'Pour une courbe polaire, toujours utiliser la relation $\\mathrm{d}s = \\sqrt{r^2 + r\'^2}\\,\\mathrm{d}\\theta$.'
    }
  },
  {
    id: 'exo-ultra-2-lemme-fatou-integrales',
    title: 'Lemme de Fatou et semi-continuité inférieure de l\'intégrale',
    matiere: 'Mathématiques',
    chapitreId: 'maths-integration-intervalle-quelconque',
    chapitreTitre: 'Intégration sur un Intervalle Quelconque & Convergence Dominée',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral ENS MP',
    dureeEstimeeMin: 25,
    enonce: 'Soit $(f_n)_{n \\ge 1}$ une suite de fonctions mesurables positives $f_n : I \\to \\mathbb{R}_+$.\n1. Énoncer le lemme de Fatou : $\\int_I \\liminf_{n \\to +\\infty} f_n \\le \\liminf_{n \\to +\\infty} \\int_I f_n$.\n2. Donner un exemple classique où l\'inégalité est stricte (fuite de masse à l\'infini).\n3. Démontrer que le lemme de Fatou permet de retrouver le théorème de convergence dominée.',
    hints: [
      'Pour le contre-exemple d\'inégalité stricte, considérez $f_n = n \\mathbf{1}_{]0, 1/n[}$ ou $f_n = \\mathbf{1}_{[n, n+1]}$.',
      'Pour retrouver Lebesgue, appliquez Fatou à $g_n = g + f_n$ et $h_n = g - f_n$ où $g$ est la fonction dominante.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Énoncé du Lemme de Fatou',
          explication: 'Pour toute suite de fonctions positives intégrables $(f_n)_{n \\in \\mathbb{N}}$ sur un intervalle $I$ :\n$$\\int_I \\liminf_{n \\to +\\infty} f_n(x)\\,\\mathrm{d}x \\le \\liminf_{n \\to +\\infty} \\int_I f_n(x)\\,\\mathrm{d}x$$\nLa convergence monotone s\'applique aux infimums partiels $g_k = \\inf_{n \\ge k} f_n$, qui forment une suite croissante.'
        },
        {
          titre: '2. Inégalité stricte (fuite de masse)',
          explication: 'Considérons $f_n(x) = n \\mathbf{1}_{]0, 1/n]}(x)$ sur $]0, 1]$. Pour tout $x > 0$ fixé, dès que $n > 1/x$, $f_n(x) = 0$. Donc la limite simple est $f(x) = 0$, et $\\int_0^1 \\lim f_n = 0$. En revanche, $\\int_0^1 f_n(x)\\,\\mathrm{d}x = n \\times \\frac{1}{n} = 1$ pour tout $n$, donc $\\liminf \\int f_n = 1 > 0$.'
        },
        {
          titre: '3. Déduction de la convergence dominée',
          explication: 'Si $|f_n| \\le g$ avec $g$ intégrable, les fonctions $g + f_n \\ge 0$ et $g - f_n \\ge 0$ sont positives. En appliquant Fatou aux deux suites, on encadre $\\limsup \\int f_n \\le \\int f \\le \\liminf \\int f_n$, ce qui prouve l\'égalité des limites.'
        }
      ],
      conclusion: 'Le lemme de Fatou est le résultat le plus fondamental de la théorie de l\'intégration de Lebesgue.',
      reflexeDuCorrecteur: 'Pour retenir le sens de l\'inégalité de Fatou, se souvenir du contre-exemple de la bosse glissante qui perd sa masse à l\'infini.'
    }
  },
  {
    id: 'exo-ultra-3-polynomes-legendre-orthogonalite',
    title: 'Polynômes de Legendre $L_n(X)$ par la formule de Rodrigues et relations de récurrence',
    matiere: 'Mathématiques',
    chapitreId: 'maths-espaces-euclidiens-theoreme-spectral',
    chapitreTitre: 'Espaces Euclidiens & Théorème Spectral',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'On définit les polynômes de Legendre par la formule de Rodrigues : $L_n(x) = \\frac{1}{2^n n!} \\frac{\\mathrm{d}^n}{\\mathrm{d}x^n}\\left( (x^2-1)^n \\right)$.\n1. Montrer que $L_n$ est un polynôme de degré $n$, et déterminer son coefficient dominant ainsi que sa valeur en $x = 1$.\n2. Démontrer par intégrations par parties que la famille $(L_n)_{n \\in \\mathbb{N}}$ est orthogonale pour le produit scalaire $\\langle P, Q \\rangle = \\int_{-1}^1 P(t) Q(t)\\,\\mathrm{d}t$.\n3. Calculer la norme $\\|L_n\\|^2 = \\int_{-1}^1 L_n(t)^2\\,\\mathrm{d}t = \\frac{2}{2n+1}$.',
    hints: [
      'Remarquez que 1 et $-1$ sont racines de multiplicité $n$ de $(x^2-1)^n$.',
      'Par $n$ intégrations par parties successives de $\\int_{-1}^1 P(t) \\frac{\\mathrm{d}^n}{\\mathrm{d}t^n}(t^2-1)^n \\mathrm{d}t$, tous les termes de bord s\'annulent.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Degré et coefficient dominant',
          explication: 'Le polynôme $P(x) = (x^2-1)^n$ a pour terme dominant $x^{2n}$. Sa dérivée $n$-ième a pour terme dominant $\\frac{(2n)!}{n!} x^n$. Par conséquent, $L_n$ est de degré $n$ de coefficient dominant $\\frac{(2n)!}{2^n (n!)^2}$. En $x=1$, par la formule de Leibniz appliquée à $(x-1)^n (x+1)^n$, seule la dérivation de $(x-1)^n$ survit : $L_n(1) = \\frac{1}{2^n n!} n! 2^n = 1$.'
        },
        {
          titre: '2. Orthogonalité à tout polynôme de degré $< n$',
          explication: 'Soit $Q \\in \\mathbb{R}_{n-1}[X]$. Par intégration par parties $n$ fois de $\\int_{-1}^1 Q(t) L_n(t)\\,\\mathrm{d}t$ :\n$$\\int_{-1}^1 Q(t) \\frac{\\mathrm{d}^n}{\\mathrm{d}t^n}(t^2-1)^n\\,\\mathrm{d}t = (-1)^n \\int_{-1}^1 Q^{(n)}(t) (t^2-1)^n\\,\\mathrm{d}t$$\nComme $\\deg(Q) < n$, la dérivée $n$-ième $Q^{(n)}$ est identiquement nulle ! L\'intégrale est donc nulle. Comme pour tout $m < n$, $L_m$ est de degré $m < n$, on en déduit que $\\langle L_m, L_n \\rangle = 0$.'
        },
        {
          titre: '3. Norme au carré',
          explication: 'En intégrant par parties $n$ fois pour $\\langle L_n, L_n \\rangle$ avec le coefficient dominant, on est ramené à l\'intégrale de Wallis $\\int_{-1}^1 (1-t^2)^n\\,\\mathrm{d}t = 2 \\int_0^{\\pi/2} \\cos^{2n+1}(\\theta)\\,\\mathrm{d}\\theta = \\frac{2^{2n+1} (n!)^2}{(2n+1)!}$, ce qui conduit après simplification à $\\|L_n\\|^2 = \\frac{2}{2n+1}$.'
        }
      ],
      conclusion: 'Les polynômes de Legendre normalisés $\\sqrt{\\frac{2n+1}{2}} L_n$ forment une base hilbertienne orthonormale de $L^2([-1, 1])$.',
      reflexeDuCorrecteur: 'Pour tout polynôme défini par une dérivée $n$-ième de Rodrigues, intégrer par parties $n$ fois pour faire tomber le degré du partenaire.'
    }
  },
  {
    id: 'exo-ultra-4-topologie-connexite-arcs-gl2',
    title: 'Connexité par arcs de $GL_n^+(\\mathbb{R})$ et composantes connexes de $GL_n(\\mathbb{R})$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-topologie-evn-compacite',
    chapitreTitre: 'Topologie des EVN : Compacité, Connexité par Arcs & Normes Équivalentes',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X-ENS MP / MPI',
    dureeEstimeeMin: 30,
    enonce: 'On note $GL_n^+(\\mathbb{R}) = \\{M \\in \\mathcal{M}_n(\\mathbb{R}) \\mid \\det(M) > 0\\}$ et $GL_n^-(\\mathbb{R}) = \\{M \\in \\mathcal{M}_n(\\mathbb{R}) \\mid \\det(M) < 0\\}$.\n1. Montrer que $GL_n(\\mathbb{R})$ n\'est pas connexe.\n2. Montrer que toute matrice de transvection $T_{i, j}(\\lambda) = I_n + \\lambda E_{i, j}$ ($i \\neq j$) est reliée à $I_n$ par un chemin continu dans $GL_n^+(\\mathbb{R})$.\n3. En déduire que $GL_n^+(\\mathbb{R})$ est connexe par arcs et que $GL_n(\\mathbb{R})$ admet exactement deux composantes connexes.',
    hints: [
      'Pour le 1, utilisez la continuité du déterminant et le théorème des valeurs intermédiaires.',
      'Pour le chemin de transvection, posez $\\gamma(t) = I_n + t \\lambda E_{i, j}$ pour $t \\in [0, 1]$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Non-connexité de $GL_n(\\mathbb{R})$',
          explication: 'L\'application déterminant $\\det : GL_n(\\mathbb{R}) \\to \\mathbb{R}^*$ est continue et surjective sur $\\mathbb{R}^*$. Si $GL_n(\\mathbb{R})$ était connexe, son image par une application continue le serait aussi. Or $\\mathbb{R}^* = ]-\\infty, 0[ \\cup ]0, +\\infty[$ n\'est pas connexe (réunion de deux ouverts non vides disjoints). Donc $GL_n(\\mathbb{R})$ n\'est pas connexe.'
        },
        {
          titre: '2. Connexité des transvections et dilatations positives',
          explication: 'Pour tout $\\lambda \\in \\mathbb{R}$, le chemin $t \\mapsto I_n + t \\lambda E_{i, j}$ pour $t \\in [0, 1]$ est continu et $\\det(I_n + t\\lambda E_{i, j}) = 1 > 0$. De même, pour une dilatation $D_i(\\mu) = \\mathrm{diag}(1, \\dots, \\mu, \\dots, 1)$ avec $\\mu > 0$, le chemin $t \\mapsto D_i(1 - t + t\\mu)$ relie $D_i(\\mu)$ à $I_n$ dans $GL_n^+(\\mathbb{R})$.'
        },
        {
          titre: '3. Décomposition et conclusion',
          explication: 'Toute matrice de $GL_n^+(\\mathbb{R})$ est un produit fini de matrices de transvections et d\'une matrice de dilatation $D_1(\\det A)$ avec $\\det A > 0$. Comme chaque facteur est connexe par arcs à $I_n$, la matrice $A$ est reliée à $I_n$. $GL_n^+(\\mathbb{R})$ est donc connexe par arcs. De même, par multiplication par la matrice de réflexion $\\mathrm{diag}(-1, 1, \\dots, 1)$, $GL_n^-(\\mathbb{R})$ est homéomorphe à $GL_n^+(\\mathbb{R})$, donc connexe par arcs. $GL_n(\\mathbb{R})$ admet exactement deux composantes connexes.'
        }
      ],
      conclusion: 'Le déterminant sépare $GL_n(\\mathbb{R})$ en deux composantes connexes : celle des matrices conservant l\'orientation ($GL_n^+$) et celle inversant l\'orientation ($GL_n^-$).',
      reflexeDuCorrecteur: 'Pour relier deux matrices par un chemin continu, utiliser l\'algorithme du pivot de Gauss qui les décompose en transvections élémentaires.'
    }
  },
  {
    id: 'exo-ultra-5-esperance-conditionnelle-projection',
    title: 'Espérance conditionnelle discrète comme projection orthogonale dans $L^2$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-probabilites-discretes',
    chapitreTitre: 'Probabilités Discrètes & Variables Aléatoires',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X MP / MPI',
    dureeEstimeeMin: 25,
    enonce: 'Soit $(\\Omega, \\mathcal{A}, P)$ un espace probabilisé fini. Soit $X$ une variable aléatoire réelle et $\\mathcal{B}$ une sous-tribu engendrée par une partition finie $(B_1, \\dots, B_m)$ d\'événements de probabilités non nulles.\n1. Rappeler la définition de l\'espérance conditionnelle $\\mathbb{E}(X \\mid \\mathcal{B})$ :\n$$\\mathbb{E}(X \\mid \\mathcal{B}) = \\sum_{k=1}^m \\mathbb{E}(X \\mid B_k) \\mathbf{1}_{B_k} \\quad \\text{où } \\mathbb{E}(X \\mid B_k) = \\frac{\\mathbb{E}(X \\mathbf{1}_{B_k})}{P(B_k)}$$\n2. Montrer que l\'application $X \\mapsto \\mathbb{E}(X \\mid \\mathcal{B})$ est un projecteur orthogonal dans l\'espace hilbertien $L^2(\\Omega, \\mathcal{A}, P)$ muni du produit scalaire $\\langle X, Y \\rangle = \\mathbb{E}(X Y)$.\n3. En déduire la formule de variance totale : $\\mathbb{V}(X) = \\mathbb{E}(\\mathbb{V}(X \\mid \\mathcal{B})) + \\mathbb{V}(\\mathbb{E}(X \\mid \\mathcal{B}))$.',
    hints: [
      'Montrez que pour toute variable $\\mathcal{B}$-mesurable $Z$, $\\mathbb{E}((X - \\mathbb{E}(X \\mid \\mathcal{B})) Z) = 0$.',
      'Appliquez le théorème de Pythagore $\\|X\\|^2 = \\|X - \\pi(X)\\|^2 + \\|\\pi(X)\\|^2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Orthogonalité de l\'erreur',
          explication: 'Toute variable aléatoire $\\mathcal{B}$-mesurable $Z$ est combinaison linéaire des indicatrices : $Z = \\sum_{k=1}^m c_k \\mathbf{1}_{B_k}$. Pour tout $k$, $\\langle X - \\mathbb{E}(X \\mid \\mathcal{B}), \\mathbf{1}_{B_k} \\rangle = \\mathbb{E}(X \\mathbf{1}_{B_k}) - \\mathbb{E}(X \\mid B_k) P(B_k) = \\mathbb{E}(X \\mathbf{1}_{B_k}) - \\mathbb{E}(X \\mathbf{1}_{B_k}) = 0$. L\'erreur $X - \\mathbb{E}(X \\mid \\mathcal{B})$ est donc orthogonale à tout le sous-espace $L^2(\\mathcal{B})$.'
        },
        {
          titre: '2. Projecteur orthogonal',
          explication: 'Comme $\\mathbb{E}(X \\mid \\mathcal{B})$ est elle-même $\\mathcal{B}$-mesurable et que l\'erreur est orthogonale à $L^2(\\mathcal{B})$, c\'est exactement la définition de la projection orthogonale sur $L^2(\\mathcal{B})$.'
        },
        {
          titre: '3. Formule de décomposition de la variance (Pythagore)',
          explication: 'Supposons sans perte de généralité $\\mathbb{E}(X) = 0$. D\'après le théorème de Pythagore dans $L^2$ :\n$$\\|X\\|^2 = \\|X - \\mathbb{E}(X \\mid \\mathcal{B})\\|^2 + \\|\\mathbb{E}(X \\mid \\mathcal{B})\\|^2$$\nCe qui se traduit exactement en probabilités par la formule de décomposition de la variance :\n$$\\mathbb{V}(X) = \\mathbb{E}(\\mathbb{V}(X \\mid \\mathcal{B})) + \\mathbb{V}(\\mathbb{E}(X \\mid \\mathcal{B}))$$'
        }
      ],
      conclusion: 'L\'espérance conditionnelle est l\'estimateur optimal au sens des moindres carrés (meilleure approximation dans $L^2$).',
      reflexeDuCorrecteur: 'Pour démontrer une propriété d\'espérance conditionnelle, toujours tester contre une indicatrice d\'événement $\\mathbf{1}_B$.'
    }
  },
  {
    id: 'exo-ultra-6-theoreme-banach-point-fixe',
    title: 'Théorème du point fixe de Banach-Picard et vitesse de convergence géométrique',
    matiere: 'Mathématiques',
    chapitreId: 'maths-espaces-vectoriels-normes',
    chapitreTitre: 'Espaces Vectoriels Normés & Topologie',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale MP / PSI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $(E, d)$ un espace métrique complet et $f : E \\to E$ une application $k$-contractante ($0 < k < 1$) : $\\forall x, y \\in E, d(f(x), f(y)) \\le k d(x, y)$.\n1. Démontrer l\'existence et l\'unicité d\'un point fixe $a \\in E$ vérifiant $f(a) = a$.\n2. Pour $x_0 \\in E$, établir la majoration d\'erreur a priori : $d(x_n, a) \\le \\frac{k^n}{1-k} d(x_1, x_0)$.\n3. Application : Démontrer que l\'équation $\\cos(x) = x$ admet une unique solution réelle dans $[0, 1]$ et calculer le nombre d\'itérations nécessaires pour approcher la racine à $10^{-6}$ près.',
    hints: [
      'Montrez par récurrence que $d(x_{n+1}, x_n) \\le k^n d(x_1, x_0)$.',
      'Prouvez que la suite $(x_n)$ est de Cauchy en sommant la série géométrique $\\sum_{j=n}^{m-1} d(x_{j+1}, x_j)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Unicité du point fixe',
          explication: 'Si $f(a) = a$ et $f(b) = b$, alors $d(a, b) = d(f(a), f(b)) \\le k d(a, b) \\implies (1-k) d(a, b) \\le 0$. Comme $k < 1$, $d(a, b) = 0$ donc $a = b$.'
        },
        {
          titre: '2. Suite de Cauchy et convergence',
          explication: 'Pour tout $m > n$, par l\'inégalité triangulaire :\n$$d(x_n, x_m) \\le \\sum_{j=n}^{m-1} d(x_j, x_{j+1}) \\le d(x_0, x_1) \\sum_{j=n}^{m-1} k^j \\le d(x_0, x_1) \\frac{k^n}{1-k}$$\nLa suite $(x_n)$ est de Cauchy dans un espace complet, elle converge donc vers $a$. Par continuité de $f$, $f(a) = a$.'
        },
        {
          titre: '3. Application à $\\cos(x) = x$',
          explication: 'Sur $[0, 1]$, $|\\cos\'(x)| = |-\\sin(x)| \\le \\sin(1) \\approx 0{,}841 < 1$. Par le théorème des accroissements finis, $f(x) = \\cos(x)$ est $k$-contractante avec $k = \\sin(1)$. L\'itération converge à vitesse géométrique.'
        }
      ],
      conclusion: 'Le théorème de Banach garantit la convergence inconditionnelle pour toute initialisation dans le domaine complet.',
      reflexeDuCorrecteur: 'Pour obtenir l\'inégalité d\'erreur, toujours télescoper la distance $d(x_n, x_m)$ avec la série géométrique majorante.'
    }
  },
  {
    id: 'exo-ultra-7-matrice-hadamard-determinant',
    title: 'Inégalité de Hadamard pour le Déterminant & Bornes de Volume',
    matiere: 'Mathématiques',
    chapitreId: 'maths-espaces-euclidiens-produit-scalaire',
    chapitreTitre: 'Espaces Euclidiens & Produit Scalaire',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'Soit $M \\in \\mathcal{M}_n(\\mathbb{R})$ dont les colonnes sont notées $C_1, C_2, \\dots, C_n$.\n1. En appliquant le procédé d\'orthonormalisation de Gram-Schmidt aux colonnes de $M$, démontrer l\'inégalité de Hadamard :\n$$|\\det(M)| \\le \\prod_{j=1}^n \\|C_j\\|$$\n2. Dans quel cas l\'égalité est-elle atteinte ?\n3. Donner l\'interprétation géométrique de ce résultat en termes de parallélépipède dans $\\mathbb{R}^n$.',
    hints: [
      'Écrivez la décomposition $M = Q R$ où $Q$ est orthogonale et $R$ triangulaire supérieure.',
      'Les coefficients diagonaux de $R$ vérifient $r_{jj} = \\langle C_j, u_j \\rangle \\le \\|C_j\\|$ par Cauchy-Schwarz.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Décomposition QR de Gram-Schmidt',
          explication: 'Il existe une matrice orthogonale $Q$ et une matrice triangulaire supérieure $R$ à éléments diagonaux strictement positifs telles que $M = Q R$. On a $|\\det(M)| = |\\det(Q)| |\\det(R)| = \\prod_{j=1}^n r_{jj}$.'
        },
        {
          titre: '2. Majoration par Cauchy-Schwarz',
          explication: 'Comme $C_j = \\sum_{i=1}^j r_{ij} q_i$ dans la base orthonormée $(q_1, \\dots, q_n)$, on a $\\|C_j\\|^2 = \\sum_{i=1}^j r_{ij}^2 \\ge r_{jj}^2$. D\'où $r_{jj} \\le \\|C_j\\|$, et par produit $|\\det(M)| \\le \\prod_{j=1}^n \\|C_j\\|$.'
        },
        {
          titre: '3. Cas d\'égalité et interprétation géométrique',
          explication: 'L\'égalité a lieu si et seulement si pour tout $j$, $r_{ij} = 0$ pour $i < j$, c\'est-à-dire si et seulement si les colonnes $(C_1, \\dots, C_n)$ sont deux à deux orthogonales (ou si l\'une est nulle). Géométriquement, le volume d\'un parallélépipède engendré par $n$ vecteurs est maximal lorsqu\'il s\'agit d\'un parallélépipède rectangle.'
        }
      ],
      conclusion: 'L\'inégalité de Hadamard borne le déterminant par le produit des longueurs des colonnes.',
      reflexeDuCorrecteur: 'L\'outil QR de Gram-Schmidt transforme immédiatement les problèmes de déterminant euclidien en étude triangulaire.'
    }
  },
  {
    id: 'exo-ultra-8-theoreme-abel-sommation-partielle',
    title: 'Transformation d\'Abel & Convergence des Séries Trigonométriques Non Absolument Convergentes',
    matiere: 'Mathématiques',
    chapitreId: 'maths-series-numeriques',
    chapitreTitre: 'Séries Numériques & Critères de Convergence',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'CCINP / Mines-Ponts MP',
    dureeEstimeeMin: 25,
    enonce: '1. Démontrer l\'identité de la sommation par parties d\'Abel : Soient $(a_n)$ et $(b_n)$ deux suites de nombres complexes. En posant $A_n = \\sum_{k=0}^n a_k$ (avec $A_{-1} = 0$) :\n$$\\sum_{k=p}^q a_k b_k = A_q b_q - A_{p-1} b_p + \\sum_{k=p}^{q-1} A_k (b_k - b_{k+1})$$\n2. En déduire la règle d\'Abel pour la série $\\sum a_n b_n$ lorsque les sommes partielles $(A_n)$ sont bornées et $(b_n)$ est une suite réelle positive décroissante vers 0.\n3. Application : Démontrer la convergence de la série $\\sum_{n=1}^\\infty \\frac{\\cos(n x)}{n^\\alpha}$ pour $\\alpha > 0$ et $x \\in ]0, 2\\pi[$.',
    hints: [
      'Exprimez $a_k = A_k - A_{k-1}$ et regroupez les coefficients de chaque $A_k$.',
      'Pour $\\cos(nx)$, majorez $\\left|\\sum_{k=1}^n e^{i k x}\\right| \\le \\frac{2}{|1 - e^{i x}|} = \\frac{1}{\\sin(x/2)}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Preuve de la formule de transformation d\'Abel',
          explication: 'On écrit $\\sum_{k=p}^q (A_k - A_{k-1}) b_k = \\sum_{k=p}^q A_k b_k - \\sum_{k=p}^q A_{k-1} b_k$. En décalant l\'indice de la deuxième somme : $\\sum_{j=p-1}^{q-1} A_j b_{j+1}$, on obtient par soustraction terme à terme $A_q b_q - A_{p-1} b_p + \\sum_{k=p}^{q-1} A_k (b_k - b_{k+1})$.'
        },
        {
          titre: '2. Majoration et critère de Cauchy',
          explication: 'Si $|A_n| \\le M$, alors $|\\sum_{k=p}^q a_k b_k| \\le M b_q + M b_p + M \\sum_{k=p}^{q-1} (b_k - b_{k+1}) = 2 M b_p$. Comme $b_p \\to 0$, la suite des sommes partielles vérifie le critère de Cauchy, d\'où la convergence.'
        },
        {
          titre: '3. Application à $\\sum \\frac{\\cos(nx)}{n^\\alpha}$',
          explication: 'Pour $x \\not\\equiv 0 \\pmod{2\\pi}$, les sommes partielles $\\sum_{k=1}^n \\cos(kx)$ sont bornées par $\\frac{1}{\\sin(x/2)}$. La suite $b_n = 1/n^\\alpha$ décroît vers 0 dès que $\\alpha > 0$. La série converge donc sur $]0, 2\\pi[$.'
        }
      ],
      conclusion: 'La transformation d\'Abel est l\'analogue discret de l\'intégration par parties.',
      reflexeDuCorrecteur: 'Dès qu\'un facteur oscille avec des sommes bornées et un autre décroît vers 0, la transformation d\'Abel s\'impose.'
    }
  },
  {
    id: 'exo-ultra-9-exponentielle-matricielle-groupe-orthogonal',
    title: 'Exponentielle Matricielle & Image de l\'Espace des Matrices Antissymétriques',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire-reduction',
    chapitreTitre: 'Algèbre Linéaire & Réduction des Endomorphismes',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral ENS / Mines-Ponts MP',
    dureeEstimeeMin: 30,
    enonce: 'Soit $\\mathcal{A}_n(\\mathbb{R}) = \\{A \\in \\mathcal{M}_n(\\mathbb{R}) \\mid A^T = -A\\}$ le sous-espace des matrices antisymétriques, et $\\mathcal{SO}_n(\\mathbb{R}) = \\{M \\in \\mathcal{O}_n(\\mathbb{R}) \\mid \\det(M) = +1\\}$ le groupe spécial orthogonal.\n1. Montrer que si $A \\in \\mathcal{A}_n(\\mathbb{R})$, alors $\\exp(A) \\in \\mathcal{SO}_n(\\mathbb{R})$.\n2. Démontrer que l\'application exponentielle $\\exp : \\mathcal{A}_n(\\mathbb{R}) \\to \\mathcal{SO}_n(\\mathbb{R})$ est surjective.\n3. Est-elle injective ?',
    hints: [
      'Calculez $(\\exp(A))^T = \\exp(A^T) = \\exp(-A) = (\\exp(A))^{-1}$, et utilisez $\\det(\\exp(A)) = e^{\\mathrm{Tr}(A)}$.',
      'Pour la surjectivité, réduisez toute matrice orthogonale directe en blocs de rotation $2\\times 2$ et blocs $1\\times 1$ de valeur 1.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Propriété orthogonale directe',
          explication: 'On a $(\\exp(A))^T = \\exp(A^T) = \\exp(-A)$. Comme $A$ et $-A$ commutent, $\\exp(A) \\exp(-A) = \\exp(0) = I_n$. Donc $\\exp(A)$ est orthogonale. De plus, $\\det(\\exp(A)) = e^{\\mathrm{Tr}(A)} = e^0 = +1$, d\'où $\\exp(A) \\in \\mathcal{SO}_n(\\mathbb{R})$.'
        },
        {
          titre: '2. Surjectivité par décomposition canonique',
          explication: 'Toute matrice $R \\in \\mathcal{SO}_n(\\mathbb{R})$ est orthogonalement semblable à une matrice diagonale par blocs formée de blocs de rotation $R(\\theta_j) = \\begin{pmatrix} \\cos\\theta_j & -\\sin\\theta_j \\\\ \\sin\\theta_j & \\cos\\theta_j \\end{pmatrix}$ et de 1 diagonaux. Or chaque bloc $R(\\theta_j)$ est l\'exponentielle du bloc antisymétrique $\\begin{pmatrix} 0 & -\\theta_j \\\\ \\theta_j & 0 \\end{pmatrix}$. Par conjugaison orthogonale, $\\exp$ est surjective.'
        },
        {
          titre: '3. Non-injectivité',
          explication: 'L\'application n\'est pas injective car pour $n \\ge 2$, $\\exp\\begin{pmatrix} 0 & -2\\pi \\\\ 2\\pi & 0 \\end{pmatrix} = I_2 = \\exp(0)$.'
        }
      ],
      conclusion: 'L\'algèbre de Lie des matrices antisymétriques s\'enroule de manière surjective sur la variété de Lie connexe et compacte $\\mathcal{SO}_n(\\mathbb{R})$.',
      reflexeDuCorrecteur: 'Toujours invoquer la réduction orthogonale canonique pour traiter les questions géométriques sur $\\mathcal{O}_n(\\mathbb{R})$.'
    }
  },
  {
    id: 'exo-ultra-10-formule-stirling-integrales-wallis',
    title: 'Intégrales de Wallis & Démonstration de la Formule de Stirling $n! \\sim \\sqrt{2\\pi n}\\,(n/e)^n$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-integration-calcul-integral',
    chapitreTitre: 'Intégration sur un Intervalle Quelconque & Intégrales à Paramètres',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours Centrale-Supélec MP / PC',
    dureeEstimeeMin: 30,
    enonce: 'On pose $W_n = \\int_0^{\\pi/2} \\sin^n(t)\\,\\mathrm{d}t$.\n1. Établir la relation de récurrence $W_n = \\frac{n-1}{n} W_{n-2}$ et en déduire l\'expression explicite de $W_{2p}$ et $W_{2p+1}$.\n2. Montrer que la suite $(W_n)$ est décroissante et que $W_n \\sim W_{n-1}$. En déduire l\'équivalent de Wallis : $W_n \\sim \\sqrt{\\frac{\\pi}{2n}}$.\n3. En posant la suite $u_n = \\frac{n! e^n}{n^{n+1/2}}$, montrer que la série $\\sum (\\ln(u_{n+1}) - \\ln(u_n))$ converge et en déduire qu\'il existe une constante $C > 0$ telle que $n! \\sim C \\sqrt{n}\\,(n/e)^n$.\n4. En injectant dans l\'équivalent de $W_{2p}$, démontrer que $C = \\sqrt{2\\pi}$ (formule de Stirling).',
    hints: [
      'Effectuez une intégration par parties sur $\\sin^{n-1}(t) \\times \\sin(t)$ en écrivant $\\cos^2(t) = 1 - \\sin^2(t)$.',
      'Développez $\\ln(u_{n+1}/u_n) = 1 - (n + 1/2) \\ln(1 + 1/n) = \\mathcal{O}(1/n^2)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Récurrence des intégrales de Wallis',
          explication: 'Par IPP avec $u = \\sin^{n-1} t$ et $v\' = \\sin t$ : $W_n = (n-1) \\int_0^{\\pi/2} \\sin^{n-2} t \\cos^2 t\\,\\mathrm{d}t = (n-1)(W_{n-2} - W_n)$, d\'où $W_n = \\frac{n-1}{n} W_{n-2}$. Par récurrence : $W_{2p} = \\frac{(2p)!}{2^{2p} (p!)^2} \\frac{\\pi}{2}$ et $W_{2p+1} = \\frac{2^{2p} (p!)^2}{(2p+1)!}$.'
        },
        {
          titre: '2. Équivalent asymptotique de Wallis',
          explication: 'Comme $0 \\le \\sin(t) \\le 1$ sur $[0, \\pi/2]$, la suite $W_n$ est décroissante : $W_{n+1} \\le W_n \\le W_{n-1}$. Comme $\\frac{W_{n+1}}{W_{n-1}} = \\frac{n}{n+1} \\to 1$, le théorème des gendarmes donne $W_n \\sim W_{n-1}$. Le produit $(n+1) W_{n+1} W_n = \\frac{\\pi}{2}$ donne immédiatement $W_n \\sim \\sqrt{\\frac{\\pi}{2n}}$.'
        },
        {
          titre: '3. Convergence vers une constante $C$',
          explication: 'On calcule $\\ln(u_{n+1}) - \\ln(u_n) = 1 - (n + 1/2) \\left( \\frac{1}{n} - \\frac{1}{2n^2} + \\frac{1}{3n^3} + \\mathcal{O}\\left(\\frac{1}{n^4}\\right) \\right) = \\frac{1}{12n^2} + \\mathcal{O}\\left(\\frac{1}{n^3}\\right)$. La série $\\sum (\\ln u_{n+1} - \\ln u_n)$ converge par comparaison de Riemann, donc la suite $\\ln u_n$ converge vers une limite finie $\\ell$. Donc $u_n \\to C = e^\\ell > 0$.'
        },
        {
          titre: '4. Identification de la constante de Gauss $C = \\sqrt{2\\pi}$',
          explication: 'En remplaçant $p! \\sim C \\sqrt{p}\\,(p/e)^p$ et $(2p)! \\sim C \\sqrt{2p}\\,(2p/e)^{2p}$ dans $W_{2p} = \\frac{(2p)!}{2^{2p} (p!)^2} \\frac{\\pi}{2}$, on trouve $W_{2p} \\sim \\frac{\\pi C \\sqrt{2p}}{2 C^2 p} = \\frac{\\pi \\sqrt{2}}{2 C \\sqrt{p}}$. En égalant avec Wallis $W_{2p} \\sim \\frac{\\sqrt{\\pi}}{2 \\sqrt{p}}$, on obtient $C = \\sqrt{2\\pi}$.'
        }
      ],
      conclusion: 'La formule $n! \\sim \\sqrt{2\\pi n} (n/e)^n$ est le joyau asymptotique du calcul intégral classique.',
      reflexeDuCorrecteur: 'Pour identifier la constante de Stirling, toujours utiliser le produit de Wallis ou l\'intégrale de Gauss.'
    }
  },
  {
    id: 'exo-ultra-11-theoreme-dini-suites-fonctions',
    title: 'Théorèmes de Dini : Convergence simple monotone vers convergence uniforme',
    matiere: 'Mathématiques',
    chapitreId: 'maths-suites-series-fonctions',
    chapitreTitre: 'Suites et Séries de Fonctions',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral ENS MP',
    dureeEstimeeMin: 25,
    enonce: '1. Énoncer le premier théorème de Dini : Soit $K$ un espace métrique compact et $(f_n)_{n \\in \\mathbb{N}}$ une suite de fonctions continues $f_n : K \\to \\mathbb{R}$ convergeant simplement vers une fonction continue $f$. On suppose que pour tout $x \\in K$, la suite numérique $(f_n(x))_{n \\in \\mathbb{N}}$ est monotone. Démontrer que la convergence est uniforme sur $K$.\n2. Donner un contre-exemple si l\'intervalle n\'est pas compact.',
    hints: [
      'Posez sans perte de généralité $g_n = f_n - f \\ge 0$ décroissante vers 0. Étudiez les ouverts $O_n = \\{x \\in K \\mid g_n(x) < \\varepsilon\\}$.',
      'Pour le contre-exemple sur un non-compact, considérez $f_n(x) = \\frac{1}{1 + n x}$ sur $]0, 1]$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Démonstration du premier théorème de Dini',
          explication: 'Soit $\\varepsilon > 0$. Posons $g_n = f_n - f \\ge 0$ décroissante vers 0. Chaque $g_n$ est continue, donc $O_n = g_n^{-1}(]-\\infty, \\varepsilon[) = \\{x \\in K \\mid g_n(x) < \\varepsilon\\}$ est un ouvert de $K$. Comme $g_n$ décroît vers 0 en chaque point, pour tout $x \\in K$, il existe $n$ tel que $g_n(x) < \\varepsilon$, donc $\\bigcup_{n=0}^{+\\infty} O_n = K$. Par compacité de $K$, il existe un sous-recouvrement fini $O_{n_1} \\cup \\dots \\cup O_{n_p} = K$. Comme la suite d\'ouverts est emboîtée ($O_n \\subset O_{n+1}$), pour $N = \\max(n_1, \\dots, n_p)$, on a $O_N = K$. Ainsi pour tout $n \\ge N$ et tout $x \\in K$, $0 \\le g_n(x) \\le g_N(x) < \\varepsilon$, prouvant la convergence uniforme.'
        },
        {
          titre: '2. Contre-exemple sur un non-compact',
          explication: 'Sur $]0, 1]$, la suite $f_n(x) = \\frac{1}{1 + n x}$ est continue, décroissante vers 0 pour tout $x > 0$. La limite 0 est continue. Mais $\\|f_n\\|_{\\infty, ]0, 1]} = 1$ pour tout $n$, la convergence n\'est pas uniforme.'
        }
      ],
      conclusion: 'Le théorème de Dini montre que sur un compact, la monotonie transforme la convergence simple en convergence uniforme.',
      reflexeDuCorrecteur: 'Pour prouver une propriété uniforme sur un compact, penser immédiatement à la propriété de Borel-Lebesgue (recouvrement fini d\'ouverts).'
    }
  },
  {
    id: 'exo-ultra-12-algebre-groupe-dihedral',
    title: 'Groupe diédral $D_n$ : Générateurs, relations et représentations matricielles',
    matiere: 'Mathématiques',
    chapitreId: 'maths-structures-algebriques-groupes',
    chapitreTitre: 'Structures Algébriques & Théorie des Groupes',
    filieres: ['MP', 'MPI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 25,
    enonce: 'On note $D_n$ le groupe des isométries vectorielles du plan euclidien conservant un polygone régulier à $n$ sommets ($n \\ge 3$).\n1. Déterminer le cardinal de $D_n$ en distinguant rotations et réflexions.\n2. Montrer que $D_n$ est engendré par deux éléments $r$ (rotation d\'angle $2\\pi/n$) et $s$ (réflexion) vérifiant $r^n = \\mathrm{id}$, $s^2 = \\mathrm{id}$ et la relation d\'inversion $s r s = r^{-1}$.\n3. Déterminer le centre du groupe $Z(D_n)$ selon la parité de $n$.',
    hints: [
      'Un polygone régulier possède $n$ rotations et $n$ axes de symétrie (réflexions), soit $2n$ éléments.',
      'Calculez $s r^k s$ pour tester si $r^k$ commute avec $s$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Cardinal du groupe diédral',
          explication: 'Les isométries conservant le polygone régulier centré en $O$ sont : $n$ rotations vectorielles d\'angles $2k\\pi/n$ ($k \\in \\{0, \\dots, n-1\\}$) et $n$ réflexions axiales. Le cardinal est donc $|D_n| = 2n$.'
        },
        {
          titre: '2. Générateurs et relations',
          explication: 'Soit $r$ la rotation d\'angle $2\\pi/n$ et $s$ une réflexion. Comme $s \\in O^-(2)$ et $r \\in SO(2)$, $s r s^{-1} = s r s$ est une rotation d\'angle opposé : $s r s = r^{-1}$. Par récurrence, $s r^k = r^{-k} s$. Tout élément de $D_n$ s\'écrit sous la forme $r^k$ ou $r^k s$ avec $k \\in \\{0, \\dots, n-1\\}$.'
        },
        {
          titre: '3. Centre du groupe $Z(D_n)$',
          explication: 'Un élément $r^k$ commute avec $s$ si et seulement si $r^k s = s r^k = r^{-k} s \\iff r^{2k} = \\mathrm{id} \\iff 2k \\equiv 0 \\pmod n$.\n- Si $n$ est impair : seule la solution $k=0$ convient, donc $Z(D_n) = \\{\\mathrm{id}\\}$.\n- Si $n$ est pair ($n = 2m$) : $k=m$ convient aussi ($r^m = -\\mathrm{id}$, symétrie centrale), donc $Z(D_n) = \\{\\mathrm{id}, r^{n/2}\\} = \\{\\pm I_2\\}$.'
        }
      ],
      conclusion: 'Le groupe diédral $D_n$ est le plus petit exemple de groupe fini non abélien engendré par deux involutions.',
      reflexeDuCorrecteur: 'Retenir la relation $s r = r^{-1} s$ qui permet de faire passer toutes les réflexions à droite.'
    }
  },
  {
    id: 'exo-ultra-13-valeurs-propres-gershgorin',
    title: 'Disques de Gershgorin et localisation des valeurs propres d\'une matrice',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale MP / PSI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $A = (a_{i, j}) \\in \\mathcal{M}_n(\\mathbb{C})$. Pour tout $i \\in \\{1, \\dots, n\\}$, on définit le $i$-ème disque de Gershgorin par $D_i = \\{z \\in \\mathbb{C} \\mid |z - a_{i, i}| \\le R_i\\}$ où $R_i = \\sum_{j \\neq i} |a_{i, j}|$.\n1. Démontrer le théorème de Gershgorin : $\\mathrm{Sp}(A) \\subset \\bigcup_{i=1}^n D_i$.\n2. Application : Démontrer que toute matrice à diagonale strictement dominante ($|a_{i, i}| > \\sum_{j \\neq i} |a_{i, j}|$ pour tout $i$) est inversible (théorème de Hadamard).\n3. Localiser les valeurs propres de $A = \\begin{pmatrix} 4 & 1 & 0 \\\\ 1 & 5 & 1 \\\\ 0 & 2 & 6 \\end{pmatrix}$ et montrer qu\'elles sont toutes réelles et strictement positives.',
    hints: [
      'Si $A X = \\lambda X$ avec $X \\neq 0$, considérez la composante de coordonnée maximale : $|x_i| = \\max_{k} |x_k| > 0$.',
      'Si $A$ est symétrique réelle, son spectre est réel d\'après le théorème spectral.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Démonstration de Gershgorin',
          explication: 'Soit $\\lambda \\in \\mathrm{Sp}(A)$ et $X \\in \\mathbb{C}^n \\setminus \\{0\\}$ tel que $A X = \\lambda X$. Choisissons un indice $i$ tel que $|x_i| = \\max_{1 \\le k \\le n} |x_k| > 0$. En développant la $i$-ème ligne de l\'égalité matricielle :\n$$\\sum_{j=1}^n a_{i, j} x_j = \\lambda x_i \\iff (\\lambda - a_{i, i}) x_i = \\sum_{j \\neq i} a_{i, j} x_j$$\nEn prenant la valeur absolue et en majorant $|x_j| \\le |x_i|$ :\n$$|\\lambda - a_{i, i}| |x_i| \\le \\sum_{j \\neq i} |a_{i, j}| |x_j| \\le \\left(\\sum_{j \\neq i} |a_{i, j}|\\right) |x_i| = R_i |x_i|$$\nComme $|x_i| > 0$, on divise par $|x_i|$ : $|\\lambda - a_{i, i}| \\le R_i$. Donc $\\lambda \\in D_i$.'
        },
        {
          titre: '2. Théorème de Hadamard (inversibilité)',
          explication: 'Si $A$ est à diagonale strictement dominante, pour tout $i$, $|a_{i, i}| > R_i$, donc $0 \\notin D_i$. Comme $0$ n\'appartient à aucun disque de Gershgorin, $0 \\notin \\bigcup D_i$, donc $0 \\notin \\mathrm{Sp}(A)$. La matrice $A$ ne possède pas 0 pour valeur propre, elle est donc inversible.'
        },
        {
          titre: '3. Application numérique',
          explication: 'La matrice est symétrique réelle, donc son spectre est réel : $\\mathrm{Sp}(A) \\subset \\mathbb{R}$.\n- $D_1 = [4-1, 4+1] = [3, 5]$\n- $D_2 = [5-2, 5+2] = [3, 7]$\n- $D_3 = [6-2, 6+2] = [4, 8]$\nLa réunion des disques est $[3, 8]$. Toutes les valeurs propres de $A$ sont réelles et appartiennent à $[3, 8]$, donc strictement positives (la matrice est définie positive).'
        }
      ],
      conclusion: 'Les disques de Gershgorin fournissent une méthode d\'encadrement spectral rapide sans calculer aucun déterminant.',
      reflexeDuCorrecteur: 'Pour borner une relation linéaire, toujours isoler la coordonnée de valeur absolue maximale $\|X\|_\\infty$.'
    }
  },
  {
    id: 'exo-ultra-14-marche-aleatoire-1d-ruine',
    title: 'Marche aléatoire 1D symétrique et probabilité de ruine du joueur',
    matiere: 'Mathématiques',
    chapitreId: 'maths-probabilites-discretes',
    chapitreTitre: 'Probabilités Discrètes & Variables Aléatoires',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'Un joueur possède une fortune initiale de $k$ euros ($0 \\le k \\le N$). À chaque étape, il gagne 1 euro avec probabilité $p$ et perd 1 euro avec probabilité $q = 1-p$. Le jeu s\'arrête quand sa fortune atteint 0 (ruine) ou $N$ (victoire). On note $u_k$ la probabilité d\'atteindre $N$ en partant de $k$.\n1. En conditionnant par le premier coup, établir la relation de récurrence vérifiée par la suite $(u_k)_{0 \\le k \\le N}$ ainsi que les conditions aux limites $u_0$ et $u_N$.\n2. Résoudre dans le cas symétrique $p = q = 1/2$. En déduire la probabilité de ruine.\n3. Résoudre dans le cas dissymétrique $p \\neq q$. Que se passe-t-il si le casino a un léger avantage ($p = 0{,}49$) pour $N = 100$ et $k = 50$ ?',
    hints: [
      'Formule des probabilités totales : $u_k = p u_{k+1} + q u_{k-1}$.',
      'Pour $p=1/2$, la suite est arithmétique car $u_{k+1} - u_k = u_k - u_{k-1}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation de récurrence',
          explication: 'Par la formule des probabilités totales conditionnellement au premier pas : $u_k = p u_{k+1} + q u_{k-1}$. Comme $p + q = 1$, on a $p(u_{k+1} - u_k) = q(u_k - u_{k-1})$. Les conditions aux limites sont $u_0 = 0$ (déjà ruiné) et $u_N = 1$ (déjà gagné).'
        },
        {
          titre: '2. Cas symétrique ($p = 1/2$)',
          explication: 'On a $u_{k+1} - u_k = u_k - u_{k-1} = c$. La suite est arithmétique : $u_k = u_0 + k c = k c$. Avec $u_N = 1$, $c = 1/N$, d\'où :\n$$u_k = \\frac{k}{N}$$\nLa probabilité de ruine est $1 - u_k = 1 - k/N$. Si le casino a un capital infini ($N \\to +\\infty$), la ruine est presque sûre (probabilité 1).'
        },
        {
          titre: '3. Cas dissymétrique ($p \\neq q$)',
          explication: 'L\'équation caractéristique est $p r^2 - r + q = 0 \\iff (r-1)(p r - q) = 0$, de racines 1 et $q/p$. La solution générale est $u_k = A + B (q/p)^k$. Avec $u_0 = 0$ et $u_N = 1$ :\n$$u_k = \\frac{1 - (q/p)^k}{1 - (q/p)^N}$$\nPour $p = 0{,}49$ ($q/p = 51/49 \\approx 1{,}0408$), avec $k=50$ et $N=100$ : $u_{50} = \\frac{1 - (1{,}0408)^{50}}{1 - (1{,}0408)^{100}} \\approx \\frac{1 - 7{,}39}{1 - 54{,}6} = \\frac{-6{,}39}{-53{,}6} \\approx 0{,}119$. La probabilité de gagner n\'est que de 12%, la ruine est quasi-certaine (88%).'
        }
      ],
      conclusion: 'Même avec un désavantage minime de 1%, l\'effet cumulatif de l\'espérance négative garantit la ruine du parieur à long terme.',
      reflexeDuCorrecteur: 'Pour tout problème d\'arrêt aléatoire à deux barrières absorbantes, conditionner systématiquement sur le premier pas.'
    }
  },
  {
    id: 'exo-ultra-15-polynome-minimal-nilpotent',
    title: 'Indice de nilpotence et sous-espaces emboîtés des noyaux itérés',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 20,
    enonce: 'Soit $E$ un espace vectoriel de dimension finie $n$ et soit $u \\in \\mathcal{L}(E)$ un endomorphisme nilpotent d\'indice $p$ (c\'est-à-dire $u^p = 0$ et $u^{p-1} \\neq 0$).\n1. Démontrer que la suite des noyaux itérés est strictement croissante jusqu\'au rang $p$ :\n$$\\{0\\} \\subsetneq \\ker(u) \\subsetneq \\ker(u^2) \\subsetneq \\dots \\subsetneq \\ker(u^p) = E$$\n2. En déduire que l\'indice de nilpotence vérifie obligatoirement $p \\le n$.\n3. Montrer que la seule valeur propre de $u$ est 0, et déterminer son polynôme caractéristique $\\chi_u(X)$.',
    hints: [
      'Si $\\ker(u^{k+1}) = \\ker(u^k)$, montrez par récurrence que la suite stationne pour tout $m \\ge k$.',
      'À chaque étape de croissance stricte, la dimension augmente d\'au moins 1.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Croissance stricte des noyaux',
          explication: 'L\'inclusion $\\ker(u^k) \\subset \\ker(u^{k+1})$ est évidente. Supposons qu\'il existe $k$ tel que $\\ker(u^{k+1}) = \\ker(u^k)$. Soit $x \\in \\ker(u^{k+2})$. Alors $u^{k+1}(u(x)) = 0 \\implies u(x) \\in \\ker(u^{k+1}) = \\ker(u^k) \\implies u^k(u(x)) = 0 \\implies u^{k+1}(x) = 0$, donc $\\ker(u^{k+2}) = \\ker(u^{k+1})$. Par récurrence, la suite stationne dès qu\'elle bégaie. Comme $u^{p-1} \\neq 0$ et $u^p = 0$, la suite ne peut pas avoir stationné avant le rang $p$, donc chaque inclusion est stricte pour $k < p$.'
        },
        {
          titre: '2. Majoration de l\'indice de nilpotence',
          explication: 'Puisque les inclusions sont strictes : $0 < \\dim\\ker(u) < \\dim\\ker(u^2) < \\dots < \\dim\\ker(u^p) = n$. Chaque étape augmente la dimension d\'au moins 1 : $\\dim\\ker(u^k) \\ge k$. En particulier pour $k=p$ :\n$$p \\le \\dim\\ker(u^p) = n$$'
        },
        {
          titre: '3. Spectre et polynôme caractéristique',
          explication: 'Si $\\lambda$ est valeur propre avec $u(x) = \\lambda x$ ($x \\neq 0$), alors $u^p(x) = \\lambda^p x = 0 \\implies \\lambda^p = 0 \\implies \\lambda = 0$. Le spectre est $\\mathrm{Sp}(u) = \\{0\\}$. Le polynôme caractéristique étant scindé de degré $n$ sur $\\mathbb{C}$, on a obligatoirement $\\chi_u(X) = (-1)^n X^n$ (ou $X^n$).'
        }
      ],
      conclusion: 'Tout endomorphisme nilpotent en dimension $n$ vérifie $u^n = 0$ et sa trace est identiquement nulle.',
      reflexeDuCorrecteur: 'Pour les noyaux itérés d\'un endomorphisme, le lemme de stationnement dès la première égalité est le réflexe absolu.'
    }
  },

  // ==========================================
  // PHYSIQUE & CHIMIE (16 à 25)
  // ==========================================
  {
    id: 'exo-ultra-16-effet-fizeau-entrainement-ondes',
    title: 'Expérience de Fizeau : Vitesse de la lumière dans l\'eau en mouvement et relativité',
    matiere: 'Physique',
    chapitreId: 'physique-interferences-deux-ondes-michelson',
    chapitreTitre: 'Optique Ondulatoire : Interférences à Deux Ondes & Interféromètre de Michelson',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / MP',
    dureeEstimeeMin: 20,
    enonce: 'Dans l\'expérience historique d\'Hippolyte Fizeau (1851), un faisceau lumineux traverse deux tubes remplis d\'eau d\'indice $n$ circulant à la vitesse $u \\ll c$.\n1. D\'après la loi de composition relativiste des vitesses d\'Einstein, exprimer la vitesse $v$ de la lumière dans le référentiel du laboratoire si la lumière se propage dans l\'eau à la vitesse relative $v\' = c/n$.\n2. Effectuer un développement limité au premier ordre en $u/c$ et retrouver le coefficient d\'entraînement partiel de Fresnel $\\alpha = 1 - 1/n^2$ :\n$$v \\approx \\frac{c}{n} + u \\left( 1 - \\frac{1}{n^2} \\right)$$\n3. Calculer la différence de marche $\\Delta \\delta$ induite entre le faisceau voyageant dans le sens du courant et celui voyageant à contre-courant sur une longueur $L$.',
    hints: [
      'Loi d\'addition d\'Einstein : $v = \\frac{v\' + u}{1 + v\' u / c^2}$.',
      'Faites le DL de $\\frac{1}{1 + x} \\approx 1 - x$ pour $x = \\frac{u}{n c}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Formule relativiste',
          explication: 'Dans le référentiel lié à l\'eau en translation à vitesse $u$, la vitesse de la lumière est $v\' = c/n$. La loi de composition relativiste donne :\n$$v = \\frac{c/n + u}{1 + \\frac{(c/n) u}{c^2}} = \\frac{c/n + u}{1 + \\frac{u}{n c}}$$'
        },
        {
          titre: '2. Développement au premier ordre (formule de Fresnel)',
          explication: 'Comme $u/c \\ll 1$, on effectue un DL d\'ordre 1 :\n$$v = \\left( \\frac{c}{n} + u \\right) \\left( 1 - \\frac{u}{n c} + o(u/c) \\right) = \\frac{c}{n} + u - \\frac{u}{n^2} + o(u) = \\frac{c}{n} + u \\left( 1 - \\frac{1}{n^2} \\right)$$\nOn retrouve exactement la formule empirique postulée par Fresnel en 1818 pour l\'éther entraîné.'
        },
        {
          titre: '3. Déphasage interférométrique',
          explication: 'Les temps de parcours aller et retour valent $t_1 = \\frac{L}{c/n + \\alpha u} \\approx \\frac{n L}{c} - \\frac{n^2 L \\alpha u}{c^2}$ et $t_2 = \\frac{L}{c/n - \\alpha u} \\approx \\frac{n L}{c} + \\frac{n^2 L \\alpha u}{c^2}$. La différence de temps est $\\Delta t = 2 \\frac{n^2 L \\alpha u}{c^2} = \\frac{2 L u (n^2 - 1)}{c^2}$, d\'où la différence de marche optique :\n$$\\Delta \\delta = c \\Delta t = \\frac{2 L u (n^2 - 1)}{c}$$'
        }
      ],
      conclusion: 'L\'expérience de Fizeau fournit l\'une des premières preuves expérimentales directes de la cinématique de la relativité restreinte.',
      reflexeDuCorrecteur: 'Toujours poser $v\' = c/n$ dans le référentiel propre du milieu diélectrique.'
    }
  },
  {
    id: 'exo-ultra-17-guide-ondes-te10-coupure',
    title: 'Guide d\'ondes rectangulaire : Mode fondamental $TE_{10}$ et fréquence de coupure',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-guidees-lignes-transmission',
    chapitreTitre: 'Ondes Guidées, Lignes de Transmission & Câbles Coaxiaux',
    filieres: ['MP', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PSI / MP',
    dureeEstimeeMin: 25,
    enonce: 'On considère un guide d\'ondes creux métallique rectangulaire de côtés $a$ (selon $x$) et $b$ (selon $y$) avec $a > b$, d\'axe de propagation $z$.\n1. Rappeler les conditions aux limites du champ électrique sur les parois parfaitement conductrices.\n2. Pour un mode transverse électrique $TE_{m0}$ ($E_z = 0$), établir la forme spatiale du champ $E_y(x, z, t) = E_0 \\sin\\left( \\frac{m\\pi x}{a} \\right) \\cos(\\omega t - k_z z)$.\n3. Établir la relation de dispersion reliant la pulsation $\\omega$, le vecteur d\'onde guidé $k_z$ et la pulsation de coupure $\\omega_c$.\n4. Calculer la fréquence de coupure $f_c$ du mode fondamental $TE_{10}$ pour $a = 2{,}3\\text{ cm}$ (bande X).',
    hints: [
      'Sur les parois $x=0$ et $x=a$, la composante tangentielle $E_y$ doit s\'annuler.',
      'La relation de dispersion de d\'Alembert impose $\\frac{\\omega^2}{c^2} = k_x^2 + k_z^2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Conditions aux limites métalliques',
          explication: 'Sur un conducteur parfait en régime variable, le champ électrique intérieur est nul. Par continuité de la composante tangentielle à l\'interface : $\\vec{E}_t = \\vec{0}$ sur toutes les parois du guide.'
        },
        {
          titre: '2. Structure du mode $TE_{m0}$',
          explication: 'L\'équation d\'onde de Helmholtz $\\frac{\\partial^2 E_y}{\\partial x^2} + \\left(\\frac{\\omega^2}{c^2} - k_z^2\\right) E_y = 0$ a pour solution générale $E_y(x) = A \\sin(k_x x) + B \\cos(k_x x)$. Comme $E_y(0) = 0$, $B = 0$. Comme $E_y(a) = 0$, $k_x a = m \\pi$ ($m \\in \\mathbb{N}^*$), d\'où $k_x = \\frac{m\\pi}{a}$.'
        },
        {
          titre: '3. Relation de dispersion et coupure',
          explication: 'En injectant dans l\'équation d\'onde : $k_z^2 = \\frac{\\omega^2}{c^2} - k_x^2 = \\frac{\\omega^2 - \\omega_c^2}{c^2}$ avec $\\omega_c = c k_x = \\frac{m\\pi c}{a}$.\n- Si $\\omega > \\omega_c$ : $k_z$ est réel, l\'onde se propage sans atténuation.\n- Si $\\omega < \\omega_c$ : $k_z$ est imaginaire pur ($k_z = -i \\alpha$), l\'onde est évanescente (atténuation exponentielle).'
        },
        {
          titre: '4. Application numérique pour la bande X',
          explication: 'Pour le mode fondamental $TE_{10}$ ($m=1$) :\n$$f_c = \\frac{\\omega_c}{2\\pi} = \\frac{c}{2a} = \\frac{3{,}00 \\times 10^8\\text{ m/s}}{2 \\times 0{,}023\\text{ m}} = 6{,}52\\text{ GHz}$$\nLes micro-ondes de fréquence supérieure à $6{,}5\\text{ GHz}$ se propagent dans le guide (utilisation standard entre 8 et 12 GHz).'
        }
      ],
      conclusion: 'Le guide d\'ondes agit comme un filtre passe-haut spatial éliminant toutes les fréquences inférieures à sa fréquence de coupure géométrique.',
      reflexeDuCorrecteur: 'Retenir la relation universelle de coupure fondamentale d\'un guide rectangulaire : $\\lambda_{c, max} = 2a$.'
    }
  },
  {
    id: 'exo-ultra-18-cristallographie-cfc-sites-octa-tetra',
    title: 'Réseau Cubique à Faces Centrées (CFC) : Sites interstitiels octaédriques et tétraédriques',
    matiere: 'Chimie',
    chapitreId: 'chimie-cristallographie-structures',
    chapitreTitre: 'Cristallographie : Structures Métalliques & Sites Interstitiels',
    filieres: ['PC', 'PCSI', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'CCINP PC',
    dureeEstimeeMin: 20,
    enonce: 'On considère le réseau cubique à faces centrées (CFC) d\'atomes sphériques de rayon $R$ et de paramètre de maille $a$.\n1. Déterminer la coordinence, la multiplicité $Z$ (nombre de motifs par maille) et la relation de contact entre $a$ et $R$.\n2. Calculer la compacité $C$ de l\'empilement compact CFC.\n3. Dénombrer et localiser précisément les sites interstitiels octaédriques $[O]$ et tétraédriques $[T]$.\n4. Calculer le rayon maximal de l\'atome étranger pouvant s\'insérer sans déformation dans un site octaédrique ($r_O/R$) et dans un site tétraédrique ($r_T/R$).',
    hints: [
      'Le contact entre sphères se fait le long de la diagonale d\'une face : $4R = a\\sqrt{2}$.',
      'Les sites octaédriques se situent au centre de la maille et au milieu des 12 arêtes.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Multiplicité et contact',
          explication: '- Multiplicité : 8 sommets comptant pour $1/8$ et 6 faces comptant pour $1/2$ : $Z = 8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2} = 1 + 3 = 4$ atomes par maille.\n- Contact tangentiel selon la diagonale d\'une face : $4 R = a \\sqrt{2} \\implies a = 2\\sqrt{2} R$. Coordinence : 12.'
        },
        {
          titre: '2. Compacité',
          explication: '$$C = \\frac{Z \\times V_{sphere}}{V_{maille}} = \\frac{4 \\times \\frac{4}{3}\\pi R^3}{a^3} = \\frac{16\\pi R^3}{3 (2\\sqrt{2}R)^3} = \\frac{\\pi}{3\\sqrt{2}} \\approx 0{,}7405 \\; (74\\%)$$C\'est la compacité maximale pour des sphères dures égales (conjecture de Kepler).'
        },
        {
          titre: '3. Dénombrement des sites',
          explication: '- **Sites octaédriques $[O]$** : 1 au centre du cube et 12 au milieu des arêtes (chacun partagé entre 4 mailles) : $N_O = 1 + 12 \\times \\frac{1}{4} = 4$ sites $[O]$ par maille ($1$ site $[O]$ par atome hôte).\n- **Sites tétraédriques $[T]$** : 1 au centre de chacun des 8 petits sous-cubes d\'arête $a/2$ : $N_T = 8$ sites $[T]$ par maille ($2$ sites $[T]$ par atome hôte).'
        },
        {
          titre: '4. Habitabilité des sites interstitiels',
          explication: '- Pour le site $[O]$ (contact sur l\'arête) : $2R + 2r_O = a = 2\\sqrt{2}R \\implies r_O = (\\sqrt{2}-1)R \\approx 0{,}414 R$.\n- Pour le site $[T]$ (contact selon la diagonale du sous-cube) : $R + r_T = \\frac{a\\sqrt{3}}{4} = \\frac{2\\sqrt{2}R\\sqrt{3}}{4} = R \\frac{\\sqrt{6}}{2} \\implies r_T = \\left(\\sqrt{\\frac{3}{2}}-1\\right)R \\approx 0{,}225 R$.'
        }
      ],
      conclusion: 'Les sites octaédriques sont presque deux fois plus spacieux que les sites tétraédriques dans une maille CFC.',
      reflexeDuCorrecteur: 'Dans tout réseau CFC de $Z$ atomes hôtes, retenir qu\'il y a exactement $Z$ sites octaédriques et $2Z$ sites tétraédriques.'
    }
  },
  {
    id: 'exo-ultra-19-pile-combustible-hydrogene-rendement',
    title: 'Pile à combustible PEMFC à hydrogène : Rendement thermodynamique et tension à vide',
    matiere: 'Chimie',
    chapitreId: 'chimie-electrochimie-courbes-intensite-potentiel',
    chapitreTitre: 'Électrochimie : Courbes Intensité-Potentiel & Corrosion',
    filieres: ['PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PSI / PC',
    dureeEstimeeMin: 20,
    enonce: 'On étudie une pile à combustible à membrane échangeuse de protons (PEMFC) alimentée en $H_2(g)$ et $O_2(g)$ produisant de l\'eau liquide $H_2 O(l)$ à $25^\\circ\\text{C}$ et 1 bar. On donne pour la formation de l\'eau liquide : $\\Delta_r H^\\circ = -286\\text{ kJ/mol}$ et $\\Delta_r G^\\circ = -237\\text{ kJ/mol}$.\n1. Écrire les demi-équations anodique et cathodique en milieu acide, ainsi que l\'équation-bilan.\n2. Exprimer et calculer la tension thermodynamique à vide standard $E_{vide}^\\circ = -\\frac{\\Delta_r G^\\circ}{n F}$.\n3. Définir le rendement thermodynamique maximal réversible $\\eta_{th} = \\frac{\\Delta_r G^\\circ}{\\Delta_r H^\\circ}$. Calculer sa valeur numérique. Pourquoi ce rendement dépasse-t-il la limite de Carnot d\'un moteur thermique ?',
    hints: [
      'La réaction globale consomme 2 moles d\'électrons par mole de $H_2$ : $n = 2$.',
      'Une pile n\'est pas une machine thermique ditherme, elle n\'est pas soumise au théorème de Carnot !'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équations électrochimiques',
          explication: '- Anode (oxydation) : $H_2(g) \\to 2 H^+ + 2 e^-$\n- Cathode (réduction) : $\\frac{1}{2} O_2(g) + 2 H^+ + 2 e^- \\to H_2 O(l)$\n- Bilan global : $H_2(g) + \\frac{1}{2} O_2(g) \\to H_2 O(l)$ avec transfert de $n = 2$ moles d\'électrons.'
        },
        {
          titre: '2. Tension à vide standard',
          explication: 'La relation fondamentale entre travail électrique et enthalpie libre s\'écrit $\\Delta_r G^\\circ = -n F E_{vide}^\\circ$. On en déduit :\n$$E_{vide}^\\circ = -\\frac{-237 \\times 10^3\\text{ J/mol}}{2 \\times 96485\\text{ C/mol}} \\approx +1{,}228\\text{ V} \\approx 1{,}23\\text{ V}$$'
        },
        {
          titre: '3. Rendement thermodynamique',
          explication: 'Le pouvoir calorifique de la réaction chimique est $|\Delta_r H^\\circ|$. L\'énergie électrique maximale extractible est $|\Delta_r G^\\circ|$. Le rendement thermodynamique théorique vaut :\n$$\\eta_{th} = \\frac{|\\Delta_r G^\\circ|}{|\\Delta_r H^\\circ|} = \\frac{237}{286} \\approx 0{,}829 \\; (83\\%)$$\nContrairement aux moteurs thermiques qui convertissent d\'abord l\'énergie chimique en chaleur désordonnée (soumis à $\\eta_C = 1 - T_F/T_C \\approx 35\\text{ à } 45\\%$) puis en travail, la pile à combustible convertit directement l\'enthalpie libre chimique en énergie électrique ordonnée sans étape thermique intermédiaire.'
        }
      ],
      conclusion: 'La pile à combustible offre un rendement énergétique théorique exceptionnel supérieur à 80%.',
      reflexeDuCorrecteur: 'Ne jamais appliquer le cycle de Carnot à un convertisseur électrochimique isotherme.'
    }
  },
  {
    id: 'exo-ultra-20-effet-chelate-edta-complexation',
    title: 'Effet chélate et titrage complexométrique des ions $Ca^{2+}$ par l\'EDTA',
    matiere: 'Chimie',
    chapitreId: 'chimie-complexes-metaux-transition',
    chapitreTitre: 'Chimie de Coordination : Complexes des Métaux de Transition & Équilibres de Complexation',
    filieres: ['PC', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts PC / BCPST',
    dureeEstimeeMin: 20,
    enonce: 'On dose les ions calcium $Ca^{2+}$ d\'une eau minérale par une solution d\'EDTA ($Y^{4-}$) à $\\text{pH} = 10$ tamponné à l\'ammoniac. On donne la constante de formation globale du complexe $\\log \\beta([Ca Y]^{2-}) = 10{,}7$.\n1. Définir le terme de ligand polydenté (hexadenté) pour l\'EDTA et expliquer l\'origine entropique de l\'effet chélate.\n2. Écrire la réaction de dosage et vérifier qu\'elle est quantitative.\n3. Expliquer le rôle de l\'indicateur de fin de réaction Noir Ériochrome T (NET) qui forme un complexe rose $[Ca\\text{-NET}]^{2+}$ de constante $\\log \\beta\' = 5{,}4$. Décrire le changement de couleur au virage.',
    hints: [
      'Pour qu\'un titrage soit quantitatif, la constante d\'équilibre doit dépasser $10^4$.',
      'L\'EDTA étant un complexant plus fort que le NET ($10{,}7 \\gg 5{,}4$), il déplace le NET du complexe rose pour libérer le NET libre bleu.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Effet chélate de l\'EDTA',
          explication: 'L\'EDTA ($Y^{4-}$) possède 6 atomes donneurs de doublets (2 atomes d\'azote et 4 atomes d\'oxygène des carboxylates). Il enveloppe entièrement le cation métallique en formant une "cage" stable de 5 cycles chélates. La réaction de complexation libère 6 molécules d\'eau d\'hydratation pour une seule molécule d\'EDTA consommée : $\\Delta \\nu_{solvant} = +5 > 0$, entraînant un gain d\'entropie massif $\\Delta_r S^\\circ \\gg 0$ qui stabilise considérablement le complexe.'
        },
        {
          titre: '2. Caractère quantitatif du dosage',
          explication: 'La réaction bilan est $Ca^{2+} + Y^{4-} = [Ca Y]^{2-}$. Sa constante d\'équilibre est $K^\\circ = \\beta = 10^{10{,}7} \\approx 5 \\times 10^{10} \\gg 10^4$. La réaction est totale, rapide et univoque : elle convient parfaitement pour un titrage analytique.'
        },
        {
          titre: '3. Rôle du Noir Ériochrome T (NET)',
          explication: '- Avant l\'équivalence : tout le calcium libre est titré par l\'EDTA. Une trace de NET lie une fraction infime de calcium sous forme $[Ca\\text{-NET}]$ de couleur **rose violacé**.\n- À l\'équivalence : dès que tout le calcium libre a été consommé, la première goutte excédentaire d\'EDTA arrache le calcium au NET car $\\beta(CaY) \\gg \\beta(Ca\\text{-NET})$. Le ligand libre NET sous sa forme $H\\text{In}^{2-}$ est libéré en solution à $\\text{pH} = 10$, provoquant un virage net au **bleu franc**.'
        }
      ],
      conclusion: 'Le titrage par l\'EDTA avec indicateur métallochromique NET est la méthode officielle normalisée de mesure de la dureté de l\'eau (titre hydrotimétrique TH).',
      reflexeDuCorrecteur: 'Pour qu\'un indicateur de complexation fonctionne, son complexe doit être suffisamment stable pour être visible, mais moins stable que le complexe formé par le réactif titrant.'
    }
  },
  {
    id: 'exo-ultra-21-filtre-wien-oscillateur-reaction',
    title: 'Pont de Wien : Réponse fréquentielle et condition d\'oscillation de Barkhausen',
    matiere: 'Physique',
    chapitreId: 'physique-circuits-oscillateurs',
    chapitreTitre: 'Circuits Électriques, Régimes Transitoires & Filtres Linéaires',
    filieres: ['PSI', 'PC', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale PSI / MP',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Oscillateur à Pont de Wien avec Amplificateur Linéaire Intégré (ALI)',
      type: 'circuit-wien',
      legende: 'Bouclage d\'un filtre passe-bande RC sur un amplificateur non inverseur de gain 1 + R2/R1',
      donneesCles: [
        { label: 'Résistance du pont', symbole: 'R', valeur: '10,0 kΩ' },
        { label: 'Capacité du pont', symbole: 'C', valeur: '10,0 nF' },
        { label: 'Gain critique au seuil', symbole: 'A_{seuil}', valeur: '3,00' }
      ]
    },
    enonce: 'Le réseau de Wien est constitué d\'une cellule série ($R$ et $C$) et d\'une cellule parallèle ($R$ et $C$) en diviseur de tension.\n1. Établir la fonction de transfert $H(j\\omega) = \\frac{\\underline{v}_s}{\\underline{v}_e}$ et montrer qu\'elle s\'écrit sous la forme canonique d\'un filtre passe-bande $H(j\\omega) = \\frac{1}{3 + j(R C \\omega - \\frac{1}{R C \\omega})}$.\n2. Déterminer la pulsation de résonance $\\omega_0$ et la valeur maximale de la transmittance $H(j\\omega_0)$.\n3. On boucle ce filtre sur un amplificateur non inverseur de gain statique $A = 1 + \\frac{R_2}{R_1}$. En appliquant le critère de Barkhausen, déterminer la valeur minimale du rapport $R_2/R_1$ pour amorcer les oscillations sinusoïdales.',
    hints: [
      'Calculez les impédances $Z_1 = R + \\frac{1}{j C \\omega}$ et $Z_2 = \\frac{R}{1 + j R C \\omega}$, puis appliquez le diviseur $H = \\frac{Z_2}{Z_1 + Z_2}$.',
      'Le critère d\'oscillation de Barkhausen impose que le gain de boucle en boucle ouverte vaille 1 : $A \\cdot H(j\\omega_0) = 1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Fonction de transfert',
          explication: '$$H(j\\omega) = \\frac{Z_2}{Z_1 + Z_2} = \\frac{1}{1 + Z_1 / Z_2} = \\frac{1}{1 + \\left( R + \\frac{1}{jC\\omega} \\right) \\left( \\frac{1}{R} + jC\\omega \\right)}$$\nEn développant le produit au dénominateur :\n$$1 + \\left( 1 + jRC\\omega + \\frac{1}{jRC\\omega} + 1 \\right) = 3 + j\\left( RC\\omega - \\frac{1}{RC\\omega} \\right)$$\nCe qui donne la forme canonique passe-bande.'
        },
        {
          titre: '2. Pulsation propre et gain maximal',
          explication: 'La partie imaginaire s\'annule à la pulsation de résonance $\\omega_0 = \\frac{1}{R C}$. À cette pulsation, le déphasage est nul ($\\phi = 0$) et le gain est réel maximal :\n$$H(j\\omega_0) = \\frac{1}{3}$$'
        },
        {
          titre: '3. Condition de Barkhausen',
          explication: 'Pour maintenir des oscillations permanentes à la fréquence $f_0 = \\frac{\\omega_0}{2\\pi}$, le gain de boucle doit vérifier $A \\cdot H(j\\omega_0) = 1$, soit :\n$$A \\times \\frac{1}{3} = 1 \\implies A = 3$$\nComme l\'amplificateur non-inverseur a pour gain $A = 1 + \\frac{R_2}{R_1}$ :\n$$1 + \\frac{R_2}{R_1} = 3 \\implies \\frac{R_2}{R_1} = 2$$\nPour amorcer les oscillations à partir du bruit thermique, on règle initialement $\\frac{R_2}{R_1} > 2$, puis une non-linéarité (CTN ou diodes tête-bêche) stabilise le gain à exactement 3.'
        }
      ],
      conclusion: 'Le pont de Wien sélectionne une fréquence unique grâce à son déphasage nul à la résonance et nécessite une amplification minimale d\'un facteur 3.',
      reflexeDuCorrecteur: 'Pour tout oscillateur quasi-sinusoïdal, décomposer en chaîne directe et chaîne de réaction pour appliquer Barkhausen.'
    }
  },
  {
    id: 'exo-ultra-22-onde-choc-mach-aerodynamique',
    title: 'Cône de Mach et onde de choc d\'un écoulement supersonique',
    matiere: 'Physique',
    chapitreId: 'physique-meca-fluides-euler-navier-stokes',
    chapitreTitre: 'Mécanique des Fluides : Statique, Euler & Navier-Stokes',
    filieres: ['PSI', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PSI',
    dureeEstimeeMin: 20,
    enonce: 'Un avion supersonique vole en palier horizontal à l\'altitude $h = 3000\\text{ m}$ à la vitesse constante $V = 680\\text{ m/s}$. La célérité du son dans l\'air est $c = 340\\text{ m/s}$.\n1. Définir le nombre de Mach $M = V/c$.\n2. Expliquer la formation du cône de Mach et exprimer le demi-angle au sommet $\\mu$ (angle de Mach) en fonction de $M$.\n3. Calculer numériquement l\'angle $\\mu$.\n4. Déterminer la distance horizontale parcourue par l\'avion au-delà de la verticale d\'un observateur au sol lorsque celui-ci entend le bang supersonique.',
    hints: [
      'Pendant le temps $t$, l\'avion avance de $V t$ et l\'onde sonore sphérique s\'étend sur un rayon $c t$.',
      'Le sinus de l\'angle de Mach est $\\sin\\mu = \\frac{ct}{Vt} = \\frac{1}{M}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Nombre de Mach',
          explication: '$$M = \\frac{V}{c} = \\frac{680\\text{ m/s}}{340\\text{ m/s}} = 2{,}0$$L\'écoulement est supersonique ($M > 1$).'
        },
        {
          titre: '2. Cône de Mach',
          explication: 'Les ondes sphériques émises successivement par l\'avion sont dépassées par l\'appareil. L\'enveloppe géométrique de toutes ces sphères est un cône dont le sommet coïncide avec le nez de l\'avion. D\'après le triangle rectangle formé par le trajet de l\'avion et le rayon de l\'onde tangente :\n$$\\sin\\mu = \\frac{c t}{V t} = \\frac{c}{V} = \\frac{1}{M}$$'
        },
        {
          titre: '3. Angle de Mach',
          explication: '$$\\mu = \\arcsin(1/2) = 30^\\circ$$'
        },
        {
          titre: '4. Délai d\'arrivée du bang au sol',
          explication: 'La trace de l\'onde de choc au sol forme un angle de $30^\\circ$ avec la trajectoire. L\'observateur entend le bang quand la nappe conique l\'atteint. Géométriquement, si l\'avion est passé au zénith de l\'observateur à $t=0$, il se trouve à la distance horizontale $x = \\frac{h}{\\tan\\mu}$ lors du franchissement de l\'onde au sol :\n$$x = \\frac{3000\\text{ m}}{\\tan(30^\\circ)} = 3000 \\times \\sqrt{3} \\approx 5196\\text{ m} \\approx 5{,}2\\text{ km}$$\nL\'avion a déjà dépassé l\'observateur de plus de $5\\text{ km}$ lorsque le bruit est perçu.'
        }
      ],
      conclusion: 'Le cône de Mach délimite la zone de silence amont de la zone d\'action acoustique aval.',
      reflexeDuCorrecteur: 'Toujours associer $\\sin\\mu = 1/M$ à la relation trigonométrique de l\'enveloppe des ondelettes de Huygens.'
    }
  },
  {
    id: 'exo-ultra-23-force-centrifuge-atmosphere-isotherme',
    title: 'Atmosphère isotherme en rotation et enrichissement isotopique par ultracentrifugation',
    matiere: 'Physique',
    chapitreId: 'physique-thermo-principes-machines',
    chapitreTitre: 'Thermodynamique : Principes & Machines Thermiques',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'Un cylindre de rayon $R$ rempli d\'un gaz parfait de masse molaire $M$ à température uniforme $T$ tourne à la vitesse angulaire $\\omega$ autour de son axe vertical $(Oz)$.\n1. Écrire la condition d\'équilibre mécanique radial pour une tranche de gaz comprise entre $r$ et $r+\\mathrm{d}r$ en tenant compte de la force centrifuge d\'inertie d\'entraînement.\n2. Établir la loi de distribution de la pression radiale $P(r)$ en fonction de $P(0)$, $M, \\omega, R, T$.\n3. Application à l\'enrichissement de l\'uranium : On centrifuge un mélange d\'hexafluorure d\'uranium $^{235}UF_6$ ($M_1 = 349\\text{ g/mol}$) et $^{238}UF_6$ ($M_2 = 352\\text{ g/mol}$). Exprimer le facteur de séparation $\\alpha = \\frac{(P_2/P_1)_R}{(P_2/P_1)_0}$ en périphérie.',
    hints: [
      'Bilan des forces radiales : $\\mathrm{d}P = \\rho(r) \\omega^2 r \\mathrm{d}r$.',
      'Exprimez la masse volumique du gaz parfait par $\\rho = \\frac{P M}{R T}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équilibre radial d\'une tranche cylindrique',
          explication: 'Sur une couronne de rayon $r$, d\'épaisseur $\\mathrm{d}r$ et hauteur $h$, la masse d\'air est $\\mathrm{d}m = \\rho(r) 2\\pi r \\mathrm{d}r h$. La force centrifuge d\'entraînement est $\\mathrm{d}F_{ie} = \\mathrm{d}m \\omega^2 r = \\rho(r) 2\\pi r^2 \\omega^2 h \\mathrm{d}r$. Les forces de pression radiales valent $P(r) 2\\pi r h - P(r+\\mathrm{d}r) 2\\pi (r+\\mathrm{d}r) h$. À l\'équilibre statique :\n$$\\frac{\\mathrm{d}P}{\\mathrm{d}r} = \\rho(r) \\omega^2 r$$'
        },
        {
          titre: '2. Intégration de la pression',
          explication: 'Pour un gaz parfait, $\\rho(r) = \\frac{M}{R T} P(r)$. L\'équation différentielle devient $\\frac{\\mathrm{d}P}{P} = \\frac{M \\omega^2}{R T} r \\,\\mathrm{d}r$. En intégrant entre 0 et $r$ :\n$$P(r) = P(0) \\exp\\left( \\frac{M \\omega^2 r^2}{2 R T} \\right)$$'
        },
        {
          titre: '3. Facteur de séparation isotopique',
          explication: 'Pour chaque isotope gazeux, le rapport des pressions partielles à la périphérie $R$ vaut :\n$$\\frac{P_2(R)}{P_1(R)} = \\frac{P_2(0)}{P_1(0)} \\exp\\left( \\frac{(M_2 - M_1) \\omega^2 R^2}{2 R T} \\right)$$\nLe facteur d\'enrichissement à chaque étage est $\\alpha = \\exp\\left( \\frac{\\Delta M \\, v_{periph}^2}{2 R T} \\right)$. Pour des centrifugeuses industrielles tournant à $v_{periph} = 400\\text{ m/s}$ avec $\\Delta M = 3 \\times 10^{-3}\\text{ kg/mol}$, $\\alpha \\approx 1{,}1$, permettant un enrichissement progressif en cascade.'
        }
      ],
      conclusion: 'La centrifugation amplifie exponentiellement la séparation par masse molaire grâce au facteur d\'inertie $\\omega^2 R^2$.',
      reflexeDuCorrecteur: 'Toujours identifier la force centrifuge comme le gradient du potentiel d\'entraînement $E_{p, ie} = -\\frac{1}{2} m \\omega^2 r^2$.'
    }
  },
  {
    id: 'exo-ultra-24-loi-poiseuille-conduite-visqueuse',
    title: 'Écoulement de Poiseuille dans une conduite cylindrique : Profil parabolique et débit volumique',
    matiere: 'Physique',
    chapitreId: 'physique-meca-fluides-euler-navier-stokes',
    chapitreTitre: 'Mécanique des Fluides : Statique, Euler & Navier-Stokes',
    filieres: ['PC', 'PSI', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PC / PSI',
    dureeEstimeeMin: 25,
    enonce: 'On considère l\'écoulement laminaire stationnaire d\'un fluide visqueux newtonien de viscosité dynamique $\\eta$ dans un tube cylindrique horizontal de rayon $R$ et longueur $L$ sous l\'effet d\'un gradient de pression constant $\\frac{\\Delta P}{L}$.\n1. En projetant l\'équation de Navier-Stokes en coordonnées cylindriques (ou par un bilan de forces sur un manchon de fluide), établir l\'équation différentielle vérifiée par la vitesse axiale $v_z(r)$.\n2. En intégrant avec la condition d\'adhérence à la paroi $v_z(R) = 0$, montrer que le profil de vitesse est parabolique :\n$$v_z(r) = \\frac{\\Delta P}{4 \\eta L} (R^2 - r^2)$$\n3. En déduire le débit volumique (loi de Poiseuille) $D_v = \\frac{\\pi R^4 \\Delta P}{8 \\eta L}$ et la résistance hydraulique associée.',
    hints: [
      'Sur un cylindre coaxial de rayon $r$ et longueur $L$, la force motrice de pression $\\Delta P \\cdot \\pi r^2$ équilibre la force de cisaillement visqueux $\\tau \\cdot 2\\pi r L$ avec $\\tau = -\\eta \\frac{\\mathrm{d}v_z}{\\mathrm{d}r}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Bilan des forces sur le cylindre de fluide',
          explication: 'Considérons le cylindre de fluide de rayon $r$ et longueur $L$. En régime permanent sans accélération, la somme des forces s\'annule :\n$$\\Delta P \\cdot (\\pi r^2) + \\sigma_{rz}(r) \\cdot (2\\pi r L) = 0$$\nComme la contrainte visqueuse newtonienne est $\\sigma_{rz} = \\eta \\frac{\\mathrm{d}v_z}{\\mathrm{d}r}$, on a :\n$$\\eta \\frac{\\mathrm{d}v_z}{\\mathrm{d}r} = -\\frac{\\Delta P}{2 L} r$$'
        },
        {
          titre: '2. Intégration et profil parabolique',
          explication: 'En intégrant par rapport à $r$ : $v_z(r) = -\\frac{\\Delta P}{4 \\eta L} r^2 + C$. Comme le fluide adhère à la paroi rigide, $v_z(R) = 0 \\implies C = \\frac{\\Delta P R^2}{4 \\eta L}$. D\'où le profil de Poiseuille parabolique :\n$$v_z(r) = \\frac{\\Delta P}{4 \\eta L} (R^2 - r^2)$$'
        },
        {
          titre: '3. Débit volumique (Loi de Poiseuille)',
          explication: 'On intègre le flux de vitesse sur toute la section du tube par couronnes élémentaires de surface $\\mathrm{d}S = 2\\pi r \\mathrm{d}r$ :\n$$D_v = \\int_0^R v_z(r) 2\\pi r\\,\\mathrm{d}r = \\frac{2\\pi \\Delta P}{4 \\eta L} \\int_0^R (R^2 r - r^3)\\,\\mathrm{d}r = \\frac{\\pi \\Delta P}{2 \\eta L} \\left[ \\frac{R^4}{2} - \\frac{R^4}{4} \\right] = \\frac{\\pi R^4 \\Delta P}{8 \\eta L}$$\nLa résistance hydraulique $R_h = \\frac{\\Delta P}{D_v} = \\frac{8 \\eta L}{\\pi R^4}$ varie comme l\'inverse de la puissance 4 du rayon.'
        }
      ],
      conclusion: 'La dépendance en $R^4$ explique pourquoi une très faible réduction du diamètre artériel (sténose) fait chuter dramatiquement le débit sanguin.',
      reflexeDuCorrecteur: 'Toujours vérifier la condition aux limites d\'adhérence $v=0$ sur toute paroi solide immergée dans un fluide réel visqueux.'
    }
  },
  {
    id: 'exo-ultra-25-effet-doppler-recul-photon',
    title: 'Effet Doppler optique relativiste et recul de l\'atome lors de l\'émission d\'un photon',
    matiere: 'Physique',
    chapitreId: 'physique-meca-quantique-puits-potentiel',
    chapitreTitre: 'Mécanique Quantique : Dualité Onde-Corpuscule & Puits de Potentiel',
    filieres: ['MP', 'PC', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Oral ENS MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'Un atome libre de masse $M$ initialement au repos dans un état excité d\'énergie $E_2$ se désexcite vers son état fondamental d\'énergie $E_1$ en émettant un photon de fréquence $\\nu$. On note $h \\nu_0 = E_2 - E_1$.\n1. En appliquant la conservation de l\'énergie totale et de la quantité de mouvement relativiste (quadrivecteur énergie-impulsion $P^\\mu$), montrer que la fréquence émise est strictement inférieure à $\\nu_0$ (effet de recul).\n2. Calculer le décalage relatif $\\frac{\\nu_0 - \\nu}{\\nu_0} \\approx \\frac{h \\nu_0}{2 M c^2}$.\n3. Pourquoi ce décalage rend-il impossible la réabsorption résonnante du photon par un atome identique au repos (effet Mössbauer) ?',
    hints: [
      'Conservation du 4-vecteur : $P_{initial} = P_{final} + P_{photon} \\implies P_{final} = P_{initial} - P_{photon}$.',
      'Prenez le carré scalaire pseudo-euclidien $P_{final}^2 = M^2 c^2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Conservation du quadrivecteur énergie-impulsion',
          explication: 'Au repos initial : $P_i = (M_2 c, \\vec{0})$. Le photon émis possède $P_\\gamma = (h\\nu/c, \\frac{h\\nu}{c}\\vec{u})$. L\'atome final a pour quadrivecteur $P_f = P_i - P_\\gamma$. En prenant la pseudo-norme $P_f^2 = M_1^2 c^2$ :\n$$M_1^2 c^2 = (P_i - P_\\gamma)^2 = P_i^2 + P_\\gamma^2 - 2 P_i \\cdot P_\\gamma = M_2^2 c^2 + 0 - 2 (M_2 c) \\frac{h\\nu}{c} = M_2^2 c^2 - 2 M_2 h \\nu$$\nD\'où $2 M_2 h \\nu = (M_2^2 - M_1^2) c^2 = (M_2 - M_1)(M_2 + M_1) c^2$.'
        },
        {
          titre: '2. Calcul du décalage de recul',
          explication: 'Comme $E_2 - E_1 = (M_2 - M_1) c^2 = h \\nu_0$ et $M_2 + M_1 \\approx 2 M$ :\n$$2 M h \\nu \\approx h \\nu_0 (2 M c^2 - h\\nu_0) \\implies \\nu \\approx \\nu_0 \\left( 1 - \\frac{h\\nu_0}{2 M c^2} \\right)$$\nL\'énergie du photon est amputée de l\'énergie cinétique de recul de l\'atome $E_R = \\frac{p^2}{2M} = \\frac{(h\\nu_0/c)^2}{2M}$.'
        },
        {
          titre: '3. Conséquence sur l\'absorption résonnante (Mössbauer)',
          explication: 'Pour réabsorber le photon, il faudrait fournir $h\\nu_0 + E_R$. Le photon émis ne possède que $h\\nu_0 - E_R$. L\'écart $2 E_R$ est souvent bien plus grand que la largeur naturelle de raie $\\Gamma = \\hbar / \\tau$. L\'effet Mössbauer (prix Nobel 1961) résout ce problème en piégeant les atomes dans un réseau cristallin rigide : la masse de recul devient la masse du cristal tout entier ($M \\to M_{solide} \\approx 10^{23} M$), annulant complètement l\'effet de recul.'
        }
      ],
      conclusion: 'La conservation de la quantité de mouvement impose un recul à tout émetteur de lumière quantique.',
      reflexeDuCorrecteur: 'Pour les chocs ou émissions relativistes, le carré du 4-vecteur énergie-impulsion $P^2 = m^2 c^2$ est la méthode la plus élégante et la plus rapide.'
    }
  }
];
