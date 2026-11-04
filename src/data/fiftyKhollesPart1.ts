import type { KholleSubject } from './cpgeData';

export const FIFTY_KHOLLES_PART1: KholleSubject[] = [
  // ==========================================
  // MATHEMATIQUES (15 khôlles)
  // ==========================================
  {
    id: 'kholle-cinq-1-theoreme-rang-injectivite',
    titre: 'Théorème du Rang & Caractérisation des Automorphismes',
    matiere: 'Mathématiques',
    filiere: 'MPSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer et démontrer le théorème du rang pour une application linéaire $u \\in \\mathcal{L}(E, F)$ avec $E$ de dimension finie. En déduire que si $\\dim E = \\dim F$, $u$ injectif $\\iff u$ surjectif $\\iff u$ bijectif.',
      pointsCles: [
        'Définition d\'une base $(e_1, \\dots, e_k)$ de $\\ker(u)$',
        'Théorème de la base incomplète pour compléter en base de $E$',
        'Preuve que $(u(e_{k+1}), \\dots, u(e_n))$ est une base de $\\mathrm{Im}(u)$',
        'Équivalence injectivité-surjectivité en dimension égale'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $E$ un espace vectoriel de dimension finie $n$. Soit $u \\in \\mathcal{L}(E)$ tel que $\\mathrm{rg}(u^2) = \\mathrm{rg}(u)$.\n1. Démontrer que $\\ker(u) = \\ker(u^2)$ et $\\mathrm{Im}(u) = \\mathrm{Im}(u^2)$.\n2. En déduire que $E = \\ker(u) \\oplus \\mathrm{Im}(u)$.',
      indicationsKholleur: [
        { condition: 'Hésitation sur l\'inclusion', aide: 'L\'inclusion $\\ker(u) \\subset \\ker(u^2)$ est toujours vraie : appliquez le théorème du rang pour comparer les dimensions.' },
        { condition: 'Somme directe', aide: 'Montrez que $\\ker(u) \\cap \\mathrm{Im}(u) = \\{0\\}$ en prenant $y = u(x) \\in \\ker(u)$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur de la démonstration du théorème du rang', poids: '40%' },
      { critere: 'Maîtrise des sommes directes', poids: '35%' },
      { critere: 'Aisance à l\'oral et tenue du tableau', poids: '25%' }
    ]
  },
  {
    id: 'kholle-cinq-2-diagonalisation-matrice-circulante',
    titre: 'Matrices Circulantes & Polynômes de l\'Endomorphisme de Décalage',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir la matrice de permutation circulaire $J \\in \\mathcal{M}_n(\\mathbb{C})$ telle que $J e_i = e_{i+1}$. Déterminer ses valeurs propres et montrer qu\'elle est diagonalisable dans la base de Fourier.',
      pointsCles: [
        'Polynôme annulateur $J^n = I_n \\implies X^n - 1 = 0$',
        'Racines $n$-ièmes de l\'unité $\\omega_k = e^{2i k \\pi / n}$',
        'Vecteurs propres explicites $V_k = (1, \\omega_k, \\dots, \\omega_k^{n-1})^T$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $C = \\mathrm{circ}(c_0, c_1, \\dots, c_{n-1})$ une matrice circulante quelconque. Exprimer $C$ comme polynôme en $J$. En déduire les valeurs propres de $C$ et le calcul explicite de son déterminant circulant.',
      indicationsKholleur: [
        { condition: 'Lien entre C et J', aide: 'Remarquez que $C = c_0 I + c_1 J + \\dots + c_{n-1} J^{n-1} = P(J)$.' },
        { condition: 'Spectre', aide: 'Si $J V_k = \\omega_k V_k$, que vaut $P(J) V_k$ ?' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Diagonalisabilité par racines simples', poids: '40%' },
      { critere: 'Calcul du déterminant par produit des valeurs propres', poids: '35%' },
      { critere: 'Dynamisme et clarté des arguments', poids: '25%' }
    ]
  },
  {
    id: 'kholle-cinq-3-series-alternées-reste',
    titre: 'Critère Spécial des Séries Alternées (CSSA) & Majoration du Reste',
    matiere: 'Mathématiques',
    filiere: 'PCSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer et démontrer le critère spécial des séries alternées. Démontrer la majoration du reste $|R_n| \\le |a_{n+1}|$ et préciser le signe de $R_n$.',
      pointsCles: [
        'Hypothèses : alternance de signe, suite des modules décroissante et tendant vers 0',
        'Introduction des suites adjacentes $S_{2n}$ et $S_{2n+1}$',
        'Encadrement de la somme $S$ et du reste $R_n = S - S_n$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Étudier la nature de la série de terme général $u_n = \\frac{(-1)^n}{\\sqrt{n} + (-1)^n}$. Pourquoi ne peut-on pas appliquer directement le CSSA ? Effectuer un développement asymptotique pour conclure.',
      indicationsKholleur: [
        { condition: 'Échec du CSSA', aide: 'La suite $|u_n|$ n\'est pas monotone.' },
        { condition: 'Développement', aide: 'Mettez $\\sqrt{n}$ en facteur au dénominateur et faites un DL de $\\frac{1}{1 + (-1)^n/\\sqrt{n}}$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur de la preuve par suites adjacentes', poids: '40%' },
      { critere: 'Piège de la non-monotonie résolu par DL', poids: '40%' },
      { critere: 'Qualité d\'écoute des indications', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-4-theoreme-spectral-symetrique',
    titre: 'Théorème Spectral pour les Matrices Symétriques Réelles',
    matiere: 'Mathématiques',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer le théorème spectral. Démontrer que toutes les valeurs propres d\'une matrice symétrique réelle sont réelles et que les sous-espaces propres associés à des valeurs propres distinctes sont orthogonaux.',
      pointsCles: [
        'Utilisation du produit hermitien sur $\\mathbb{C}^n$ : $\\langle A X, X \\rangle$',
        'Preuve que $\\lambda = \\bar{\\lambda} \\implies \\lambda \\in \\mathbb{R}$',
        'Orthogonalité par $\\langle A X, Y \\rangle = \\langle X, A Y \\rangle$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $A \\in \\mathcal{S}_n(\\mathbb{R})$ telle que $\\mathrm{Tr}(A) = 0$. Montrer qu\'il existe une base orthonormée dans laquelle la diagonale de la matrice ne contient que des zéros.',
      indicationsKholleur: [
        { condition: 'Premier zéro', aide: 'Considérez la forme quadratique $q(x) = \\langle A x, x \\rangle$. Comme la trace est nulle, elle prend des valeurs positives et négatives sur la sphère unité.' },
        { condition: 'Récurrence', aide: 'Appliquez le théorème des valeurs intermédiaires pour trouver un vecteur unitaire tel que $\\langle A x_1, x_1 \\rangle = 0$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Maîtrise de la preuve spectrale', poids: '40%' },
      { critere: 'Raisonnement par connexité / TVI sur la sphère', poids: '40%' },
      { critere: 'Précision du vocabulaire euclidien', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-5-loi-normale-transfert',
    titre: 'Loi Normale : Moments et Théorème de Transfert',
    matiere: 'Mathématiques',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Rappeler la densité de la loi normale centrée réduite $\\mathcal{N}(0, 1)$. Calculer son espérance et sa variance en rédigeant rigoureusement les intégrales généralisées.',
      pointsCles: [
        'Densité $f(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}$',
        'Espérance nulle par imparité et intégrabilité absolue',
        'Variance par intégration par parties : $\\int x^2 e^{-x^2/2}\\,\\mathrm{d}x$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $X \\sim \\mathcal{N}(0, 1)$. Pour tout entier $p \\ge 0$, calculer le moment d\'ordre $2p$ : $\\mathbb{E}(X^{2p})$. En déduire le développement en série entière de la transformée de Laplace $\\mathbb{E}(e^{tX})$.',
      indicationsKholleur: [
        { condition: 'Relation de récurrence', aide: 'Intégrez par parties en posant $u = x^{2p-1}$ et $v\' = x e^{-x^2/2}$.' },
        { condition: 'Formule finale', aide: 'Exprimez le produit $(2p-1) \\times (2p-3) \\times \\dots \\times 1 = \\frac{(2p)!}{2^p p!}$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur sur les limites des crochets', poids: '40%' },
      { critere: 'Calcul combinatoire des factorielles doubles', poids: '40%' },
      { critere: 'Clarté de la présentation orale', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-6-lemme-lebesgue-fourier',
    titre: 'Lemme de Riemann-Lebesgue & Coefficients de Fourier',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer et démontrer le lemme de Riemann-Lebesgue pour une fonction $f$ de classe $\\mathcal{C}^1$ sur $[a, b]$ : $\\lim_{\\lambda \\to \\pm\\infty} \\int_a^b f(t) \\sin(\\lambda t)\\,\\mathrm{d}t = 0$.',
      pointsCles: [
        'Intégration par parties avec $u = f(t)$ et $v\' = \\sin(\\lambda t)$',
        'Majoration des termes de bord par $\\frac{|f(a)| + |f(b)|}{|\\lambda|}$',
        'Majoration de l\'intégrale par $\\frac{b-a}{|\\lambda|} \\|f\'\\|_\\infty$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'En utilisant le lemme de Riemann-Lebesgue, calculer $\\lim_{n\\to+\\infty} \\int_0^1 \\frac{\\sin(n t)}{1 + t^2}\\,\\mathrm{d}t$ puis $\\lim_{n\\to+\\infty} \\int_0^1 \\frac{\\sin^2(n t)}{1 + t^2}\\,\\mathrm{d}t$.',
      indicationsKholleur: [
        { condition: 'Sinus carré', aide: 'Linéarisez : $\\sin^2(nt) = \\frac{1 - \\cos(2nt)}{2}$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur de l\'IPP et hypothèse C1', poids: '40%' },
      { critere: 'Linéarisation trigonométrique', poids: '40%' },
      { critere: 'Précision des notations', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-7-theoreme-cauchy-lipschitz-lineaire',
    titre: 'Théorème de Cauchy-Lipschitz Linéaire & Wronskien',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer le théorème de Cauchy-Lipschitz pour un système différentiel linéaire $X\'(t) = A(t) X(t)$. Définir le Wronskien de $n$ solutions et établir l\'équation différentielle scalaire qu\'il vérifie (formule de Liouville).',
      pointsCles: [
        'Existence et unicité globale sur l\'intervalle $I$ pour coefficients continus',
        'Structure d\'espace vectoriel des solutions de dimension $n$',
        'Équation du Wronskien : $W\'(t) = \\mathrm{Tr}(A(t)) W(t)$',
        'Alternative : $W(t)$ s\'annule partout ou ne s\'annule jamais'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Résoudre sur $]0, +\\infty[$ l\'équation différentielle $x^2 y\'\' - 2x y\' + 2y = x^3$. On cherchera d\'abord deux solutions indépendantes sous la forme $y = x^r$.',
      indicationsKholleur: [
        { condition: 'Solutions homogènes', aide: 'Injectez $y = x^r$ dans l\'équation homogène pour trouver le polynôme caractéristique en $r$.' },
        { condition: 'Variation des constantes', aide: 'Utilisez le Wronskien pour la solution particulière.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Énoncé précis de Cauchy-Lipschitz linéaire', poids: '35%' },
      { critere: 'Preuve de la formule de Liouville', poids: '35%' },
      { critere: 'Résolution méthodique d\'Euler', poids: '30%' }
    ]
  },
  {
    id: 'kholle-cinq-8-topologie-compacite-bolzano',
    titre: 'Compacité dans les Espaces Vectoriels Normés & Théorème de Riesz',
    matiere: 'Mathématiques',
    filiere: 'MPI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir une partie compacte par la propriété de Bolzano-Weierstrass. Démontrer qu\'en dimension finie, un sous-ensemble est compact si et seulement si il est fermé et borné. Énoncer le théorème de Riesz.',
      pointsCles: [
        'Propriété d\'extraction de sous-suite convergente dans le compact',
        'Preuve par emboîtement de segments ou coordonnées dans $\\mathbb{R}^n$',
        'Théorème de Riesz : la boule unité fermée est compacte ssi l\'espace est de dimension finie'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $E = \\mathcal{C}^0([0, 1], \\mathbb{R})$ muni de la norme $\|f\|_\\infty$. Soit la suite de fonctions $f_n(t) = t^n$. Montrer que la boule unité fermée de $E$ n\'est pas compacte en exhibant une suite sans sous-suite convergente.',
      indicationsKholleur: [
        { condition: 'Convergence simple', aide: 'Regardez la limite simple de $t^n$ sur $[0, 1]$ : est-elle continue ?' },
        { condition: 'Distance', aide: 'Calculez $\|f_n - f_m\|_\\infty$ pour $n \\neq m$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Maîtrise de la compacité séquentielle', poids: '40%' },
      { critere: 'Compréhension de la rupture en dimension infinie', poids: '40%' },
      { critere: 'Qualité du raisonnement par l\'absurde', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-9-series-fourier-dirichlet',
    titre: 'Théorème de Dirichlet & Convergence Ponctuelle des Séries de Fourier',
    matiere: 'Mathématiques',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer le théorème de Dirichlet pour les fonctions régulières par morceaux. Détailler l\'expression de la régularisée $\\frac{f(x^+) + f(x^-)}{2}$ aux points de discontinuité.',
      pointsCles: [
        'Hypothèse : fonction $T$-périodique, continue par morceaux et admettant des dérivées à gauche et à droite',
        'Somme de la série égale à $f(x)$ aux points de continuité',
        'Somme égale à la demi-somme des limites latérales aux sauts'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $f$ la fonction $2\\pi$-périodique impaire telle que $f(x) = 1$ sur $]0, \\pi[$ et $f(0) = f(\\pi) = 0$.\n1. Déterminer ses coefficients de Fourier.\n2. Écrire la série de Fourier et appliquer Dirichlet en $x = \\pi/2$ pour sommer la série de Leibniz $\\sum_{k=0}^\\infty \\frac{(-1)^k}{2k+1}$.',
      indicationsKholleur: [
        { condition: 'Calcul des coefficients', aide: 'Comme $f$ est impaire, $a_n = 0$. Calculez $b_n = \\frac{2}{\\pi}\\int_0^\\pi \\sin(nt)\\,\\mathrm{d}t$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Précision sur les hypothèses de Dirichlet', poids: '35%' },
      { critere: 'Calcul sans faute des intégrales trigonométriques', poids: '40%' },
      { critere: 'Évaluation en $x = \\pi/2$ et conclusion', poids: '25%' }
    ]
  },
  {
    id: 'kholle-cinq-10-esperance-conditionnelle-probas',
    titre: 'Formule des Probabilités Totales & Chaînes de Markov à Deux États',
    matiere: 'Mathématiques',
    filiere: 'BCPST',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer la formule des probabilités totales pour un système complet d\'événements dénombrable $(A_n)_{n \\in \\mathbb{N}}$. Préciser les hypothèses de sommabilité.',
      pointsCles: [
        'Partition de l\'univers $\\Omega$ : deux à deux disjoints et réunion égale à $\\Omega$',
        'Formule $\\mathbb{P}(B) = \\sum_{n=0}^\\infty \\mathbb{P}(B \\mid A_n) \\mathbb{P}(A_n)$',
        'Convergence absolue garantie car les termes sont positifs et sommables $\\le 1$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une particule se déplace entre deux sites $A$ et $B$. Si elle est en $A$ à l\'instant $n$, elle reste en $A$ avec probabilité $1-\\alpha$ et saute en $B$ avec probabilité $\\alpha$. Si elle est en $B$, elle saute en $A$ avec probabilité $\\beta$ et reste en $B$ avec $1-\\beta$.\n1. Écrire la matrice de transition stochastique $P$.\n2. Déterminer la loi stationnaire $(\\pi_A, \\pi_B)$ vérifiant $\\pi P = \\pi$.\n3. Trouver la loi de la position au temps $n$ en diagonalisant $P$.',
      indicationsKholleur: [
        { condition: 'Matrice stochastique', aide: 'Les sommes sur chaque ligne valent 1. Donc 1 est toujours valeur propre de $P$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur sur le système complet d\'événements', poids: '35%' },
      { critere: 'Réduction de la matrice de Markov $2\\times 2$', poids: '40%' },
      { critere: 'Interprétation asymptotique de la distribution limite', poids: '25%' }
    ]
  },
  {
    id: 'kholle-cinq-11-reduction-nilpotent-jordan',
    titre: 'Endomorphismes Nilpotents & Décomposition de Dunford',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir un endomorphisme nilpotent et son indice de nilpotence $p$. Démontrer que si $u^p = 0$ et $u^{p-1} \\neq 0$, alors il existe un vecteur $x$ tel que $(x, u(x), \\dots, u^{p-1}(x))$ est une famille libre.',
      pointsCles: [
        'Preuve par combinaison linéaire nulle : appliquer $u^{p-1}$ pour isoler le premier coefficient',
        'Déduction que $p \\le \\dim E$',
        'Caractérisation : polynôme caractéristique $\\chi_u(X) = X^n$ et trace nulle'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $u \\in \\mathcal{L}(E)$ nilpotent d\'indice $n = \\dim E$. Démontrer que les seuls sous-espaces stables par $u$ sont les noyaux itérés $\\ker(u^k)$ pour $0 \\le k \\le n$.',
      indicationsKholleur: [
        { condition: 'Sous-espace stable', aide: 'Soit $F$ stable de dimension $d$. Considérez la restriction $u_{|F}$ : son indice de nilpotence est au plus $d$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Preuve de la liberté de la famille cyclique', poids: '40%' },
      { critere: 'Étude des sous-espaces stables', poids: '40%' },
      { critere: 'Rigueur des quantificateurs', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-12-convexite-inegalite-jensen',
    titre: 'Fonctions Convexes & Inégalité de Jensen',
    matiere: 'Mathématiques',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir une fonction convexe sur un intervalle $I$. Énoncer et démontrer l\'inégalité de Jensen pour $n$ points pondérés : $f\\left(\\sum_{i=1}^n \\lambda_i x_i\\right) \\le \\sum_{i=1}^n \\lambda_i f(x_i)$ avec $\\lambda_i \\ge 0$ et $\\sum \\lambda_i = 1$.',
      pointsCles: [
        'Définition géométrique (l\'épigraphe est convexe) ou analytique (cordes au-dessus)',
        'Démonstration par récurrence sur $n$ en regroupant les $n-1$ premiers termes',
        'Cas de stricte convexité'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'En appliquant l\'inégalité de Jensen à une fonction convexe bien choisie, démontrer l\'inégalité arithmético-géométrique : pour tous réels $x_1, \\dots, x_n > 0$,\n$$\\sqrt[n]{x_1 x_2 \\dots x_n} \\le \\frac{x_1 + \\dots + x_n}{n}$$',
      indicationsKholleur: [
        { condition: 'Choix de fonction', aide: 'Considérez la fonction $t \\mapsto -\\ln(t)$ sur $]0, +\\infty[$. Est-elle convexe ?' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Preuve propre de la récurrence de Jensen', poids: '40%' },
      { critere: 'Convexité de $-\\ln$ et déduction de l\'inégalité', poids: '40%' },
      { critere: 'Clarté orale et présentation', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-13-formes-quadratiques-sylvester',
    titre: 'Formes Quadratiques & Réduction de Gauss',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer la loi d\'inertie de Sylvester pour une forme quadratique réelle. Expliquer l\'algorithme de décomposition en carrés de Gauss (cas avec termes carrés et cas sans terme carré avec produit croisé).',
      pointsCles: [
        'Signature $(p, q)$ indépendante de la base orthogonale choisie',
        'Cas $x_1^2$ : début de carré parfait',
        'Cas sans carré ($x_1 x_2$) : utilisation de l\'identité $4 a b = (a+b)^2 - (a-b)^2$',
        'Rang égal à $p + q$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $q(x, y, z) = x^2 + 2 y^2 + 5 z^2 - 2 x y + 4 y z - 2 x z$. Décomposer $q$ en somme de carrés de formes linéaires indépendantes. Déterminer sa signature et son rang. Est-elle définie positive ?',
      indicationsKholleur: [
        { condition: 'Regroupement', aide: 'Regroupez tous les termes en $x$ : $x^2 - 2x(y + z) = (x - (y+z))^2 - (y+z)^2$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Algorithme de Gauss rigoureusement exécuté', poids: '40%' },
      { critere: 'Détermination sans erreur de la signature', poids: '40%' },
      { critere: 'Maîtrise du critère défini positif', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-14-integ-feynman-derivee-parametre',
    titre: 'Intégrales à Paramètres : Dérivation sous le Signe Somme & Intégrale de Dirichlet',
    matiere: 'Mathématiques',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer le théorème de dérivation sous le signe intégrale (Leibniz) sur un intervalle quelconque avec hypothèse de domination locale sur tout segment.',
      pointsCles: [
        'Continuité de $t \\mapsto f(x, t)$ et classe $\\mathcal{C}^1$ de $x \\mapsto f(x, t)$',
        'Hypothèse de domination sur tout segment $[a, b]$ : $|\\partial_x f(x, t)| \\le \\phi(t)$ avec $\\phi \\in L^1$',
        'Conclusion : la fonction intégrale est $\\mathcal{C}^1$ et sa dérivée s\'obtient en dérivant sous le signe intégrale'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Pour $x \\ge 0$, on pose $F(x) = \\int_0^{+\\infty} \\frac{\\sin t}{t} e^{-x t}\\,\\mathrm{d}t$.\n1. Justifier que $F$ est $\\mathcal{C}^1$ sur $]0, +\\infty[$ et calculer $F\'(x)$.\n2. En déduire l\'expression de $F(x)$ pour $x > 0$.\n3. En admettant la continuité en 0, en déduire la valeur de l\'intégrale de Dirichlet $\\int_0^{+\\infty} \\frac{\\sin t}{t}\\,\\mathrm{d}t = \\frac{\\pi}{2}$.',
      indicationsKholleur: [
        { condition: 'Calcul de la dérivée', aide: '$F\'(x) = -\\int_0^{+\\infty} \\sin(t) e^{-xt}\\,\\mathrm{d}t = -\\frac{1}{1 + x^2}$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Domination locale sur $[a, +\\infty[$ avec $a > 0$', poids: '40%' },
      { critere: 'Intégration d\'Arctan et limite en l\'infini', poids: '40%' },
      { critere: 'Rigueur sur le passage à la limite en 0', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-15-polynomes-legendre-orthogonalite',
    titre: 'Polynômes Orthogonaux de Legendre & Procédé de Gram-Schmidt',
    matiere: 'Mathématiques',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Sur $\\mathbb{R}[X]$, on définit le produit scalaire $\\langle P, Q \\rangle = \\int_{-1}^1 P(t) Q(t)\\,\\mathrm{d}t$. Énoncer le théorème d\'orthogonalisation de Gram-Schmidt et définir la famille des polynômes de Legendre par orthogonalisation de la base canonique $(1, X, X^2, \\dots)$.',
      pointsCles: [
        'Vérification que $\\langle \\cdot, \\cdot \\rangle$ est bilinéaire symétrique défini positif',
        'Formule explicite de Gram-Schmidt : $P_n = X^n - \\sum_{k=0}^{n-1} \\frac{\\langle X^n, P_k \\rangle}{\\|P_k\\|^2} P_k$',
        'Propriété de parité : $P_n(-X) = (-1)^n P_n(X)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $L_n(X) = \\frac{\\mathrm{d}^n}{\\mathrm{d}X^n}\\big((X^2 - 1)^n\\big)$ la formule de Rodrigues.\n1. Montrer par intégrations par parties successives que pour tout $Q \\in \\mathbb{R}_{n-1}[X]$, $\\langle L_n, Q \\rangle = 0$.\n2. En déduire que $L_n$ admet exactement $n$ racines réelles distinctes, toutes situées dans l\'intervalle ouvert $]-1, 1[$.',
      indicationsKholleur: [
        { condition: 'Racines', aide: 'Supposons qu\'il y ait $k < n$ racines de multiplicité impaire dans $]-1, 1[$ : notez $Q(X) = \\prod_{i=1}^k (X - x_i)$ et considérez $\\langle L_n, Q \\rangle$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Maîtrise du procédé de Gram-Schmidt', poids: '35%' },
      { critere: 'Calcul par IPP avec les termes de bord nuls', poids: '40%' },
      { critere: 'Démonstration classique des racines simples', poids: '25%' }
    ]
  },

  // ==========================================
  // PHYSIQUE (Khôlles 16 à 25)
  // ==========================================
  {
    id: 'kholle-cinq-16-onde-em-guidee-coaxial',
    titre: 'Onde Électromagnétique TEM dans un Câble Coaxial',
    matiere: 'Physique',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir la structure transverse électromagnétique (TEM). Établir les équations de Maxwell dans le diélectrique d\'un câble coaxial et montrer que les champs $\\vec{E}$ et $\\vec{B}$ ont la même structure spatiale qu\'en électrostatique et magnétostatique.',
      pointsCles: [
        'Champs purement transverses : $E_z = 0$ et $B_z = 0$',
        'Structure spatiale $\\vec{E} = \\frac{V_0}{\\ln(R_2/R_1)} \\frac{1}{r} \\cos(\\omega t - k z) \\vec{u}_r$',
        'Relation de structure $\\vec{B} = \\frac{\\vec{u}_z \\wedge \\vec{E}}{c}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Calculer l\'impédance caractéristique $Z_c$ d\'un câble coaxial en fonction des rayons $R_1, R_2$ et de la permittivité $\\varepsilon$. Comment adapter l\'impédance de la charge pour éviter toute onde réfléchie ?',
      indicationsKholleur: [
        { condition: 'Calcul de Zc', aide: 'Intégrez $\\vec{E}$ pour la tension $u(z, t)$ et appliquez Ampère pour le courant $i(z, t)$ : posez $Z_c = u/i$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Analyse vectorielle des symétries', poids: '35%' },
      { critere: 'Calcul rigoureux de l\'inductance et capacité linéiques', poids: '45%' },
      { critere: 'Sens physique de l\'adaptation d\'impédance', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-17-effet-thermoelectrique-peltier-seebeck',
    titre: 'Effets Thermoélectriques : Seebeck, Peltier et Thomson',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Définir l\'effet Seebeck (génération d\'une f.é.m par gradient de température) et l\'effet Peltier (transfert thermique par passage de courant). Donner les relations de réciprocité d\'Onsager-Kelvin.',
      pointsCles: [
        'Coefficient Seebeck $S = -\\frac{\\mathrm{d}V}{\\mathrm{d}T}$',
        'Coefficient Peltier $\\Pi = S T$',
        'Bilan thermique à une jonction : $Q = \\Pi I + R_{th} \\Delta T$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Un module à effet Peltier est utilisé pour refroidir un processeur d\'ordinateur dissipant une puissance $P = 50\\text{ W}$. Déterminer le courant optimal $I_{opt}$ minimisant la température du processeur en tenant compte de l\'effet Joule interne $R I^2$.',
      indicationsKholleur: [
        { condition: 'Bilan à la face froide', aide: 'Écrivez la puissance thermique extraite $P_f = \\Pi I - \\frac{1}{2} R I^2 - K (T_c - T_f)$ et dérivez par rapport à $I$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Définition exacte des coefficients thermodynamiques', poids: '40%' },
      { critere: 'Bilan d\'énergie face froide complet', poids: '40%' },
      { critere: 'Interprétation de l\'optimum', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-18-puits-quantique-fini-etats-lies',
    titre: 'Mécanique Quantique : Puits de Potentiel Fini 1D & États Liés',
    matiere: 'Physique',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Écrire l\'équation de Schrödinger stationnaire 1D pour une particule de masse $m$ dans un puits carré de largeur $a$ et de profondeur $V_0$. Donner la forme générale des solutions paires pour $E < V_0$.',
      pointsCles: [
        'Équation $-\\frac{\\hbar^2}{2m} \\psi\'\'(x) + V(x) \\psi(x) = E \\psi(x)$',
        'Solution oscillante dans le puits : $\\psi(x) = A \\cos(k x)$ avec $k = \\frac{\\sqrt{2mE}}{\\hbar}$',
        'Solution évanescente hors du puits : $\\psi(x) = C e^{-\\kappa |x|}$ avec $\\kappa = \\frac{\\sqrt{2m(V_0-E)}}{\\hbar}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Écrire les conditions de continuité en $x = a/2$. En déduire la relation de quantification transcendante $\\tan(k a / 2) = \\kappa / k$. Montrer graphiquement qu\'il existe toujours au moins un état lié pair, quelle que soit la petitesse de la profondeur $V_0$.',
      indicationsKholleur: [
        { condition: 'Résolution graphique', aide: 'Posez $u = k a / 2$ et $v = \\kappa a / 2$ avec $u^2 + v^2 = R^2 = \\frac{m V_0 a^2}{2 \\hbar^2}$ et tracez l\'intersection avec $v = u \\tan u$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Conditions de raccordement en $\\psi$ et $\\psi\'$', poids: '40%' },
      { critere: 'Résolution graphique du cercle et des branches de tangente', poids: '40%' },
      { critere: 'Raisonnement sur l\'existence du fondamental', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-19-effet-peau-courants-foucault',
    titre: 'Effet de Peau & Puissance Dissipée par Courants de Foucault',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Établir l\'équation de diffusion magnétique dans un conducteur ohmique en régime quasi-stationnaire. Définir l\'épaisseur de peau $\\delta = \\sqrt{\\frac{2}{\\mu \\gamma \\omega}}$ et expliquer physiquement la répulsion des courants.',
      pointsCles: [
        'Combinaison de Maxwell-Faraday et Maxwell-Ampère sans courant de déplacement',
        'Équation $\\Delta \\vec{B} = \\mu \\gamma \\frac{\\partial \\vec{B}}{\\partial t}$',
        'Solution sous forme d\'onde plane atténuée $e^{-z/\\delta} \\cos(\\omega t - z/\\delta)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Un bloc conducteur d\'épaisseur $e \\gg \\delta$ est soumis à un champ magnétique tangentiel uniforme $B_0 \\cos(\\omega t) \\vec{u}_x$. Calculer la densité volumique de courant $\\vec{j}(z, t)$ et la puissance moyenne par unité de surface dissipée par effet Joule.',
      indicationsKholleur: [
        { condition: 'Calcul du courant', aide: 'Utilisez $\\vec{j} = \\frac{1}{\\mu_0} \\vec{\\mathrm{rot}}\\,\\vec{B} = -\\frac{1}{\\mu_0} \\frac{\\partial B_x}{\\partial z} \\vec{u}_y$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Établissement rigoureux de l\'équation de diffusion', poids: '40%' },
      { critere: 'Calcul de $\\langle P_J \\rangle$ par moyenne temporelle', poids: '40%' },
      { critere: 'Sens physique de l\'écrantage électromagnétique', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-20-fentes-young-coherence-spatiale',
    titre: 'Interférences à Deux Ondes : Fentes de Young & Cohérence Spatiale',
    matiere: 'Physique',
    filiere: 'PCSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Décrire le dispositif des fentes d\'Young. Établir l\'expression de la différence de marche $\\delta(x) = \\frac{a x}{D}$ et l\'interfrange $i = \\frac{\\lambda D}{a}$ au voisinage de l\'axe optique.',
      pointsCles: [
        'Schéma clair avec source, fentes $F_1, F_2$ distantes de $a$ et écran à distance $D$',
        'Calcul approché de $r_2 - r_1$ au premier ordre en $x/D$ et $a/D$',
        'Formule de Fresnel $I(x) = 2 I_0 (1 + \\cos(2\\pi x / i))$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On remplace la source ponctuelle par une fente source primaire de largeur $b$ incohérente, parallèle aux fentes d\'Young. Exprimer l\'intensité résultante par intégration sur la fente source. En déduire la largeur critique $b_c$ provoquant le premier brouillage complet des franges (perte de contraste).',
      indicationsKholleur: [
        { condition: 'Intégration source', aide: 'Chaque point source en $x_s$ produit un décalage de la frange centrale de $x_0 = -\\frac{D\'}{d} x_s$. Intégrez l\'intensité en $\\cos(2\\pi(x - x_0)/i)$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Clarté du tracé géométrique et différence de marche', poids: '35%' },
      { critere: 'Calcul de l\'intégrale de cohérence spatiale (terme en sinus cardinal)', poids: '45%' },
      { critere: 'Condition de brouillage $b_c$', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-21-pendule-paramétrique-resonance',
    titre: 'Oscillateurs Paramétriques & Équation de Mathieu',
    matiere: 'Physique',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'On considère un pendule simple dont le point de suspension vibre verticalement selon $z_0(t) = a \\cos(\\Omega t)$. Établir l\'équation différentielle du mouvement sous la forme de l\'équation de Mathieu $\\ddot{\\theta} + \\omega_0^2 (1 + h \\cos(\\Omega t)) \\theta = 0$.',
      pointsCles: [
        'Théorème du moment cinétique en repère non galiléen avec force d\'inertie d\'entraînement $\\vec{f}_{ie} = -m \\ddot{z}_0 \\vec{u}_z$',
        'Gravité effective $g_{eff}(t) = g + \\ddot{z}_0(t) = g - a \\Omega^2 \\cos(\\Omega t)$',
        'Mise sous forme adimensionnée'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Expliquer le phénomène de résonance paramétrique pour $\\Omega \\approx 2 \\omega_0$ (ex: enfant sur une balançoire). Par une méthode perturbative, déterminer la zone d\'instabilité où l\'amplitude croît exponentiellement.',
      indicationsKholleur: [
        { condition: 'Ansatz', aide: 'Cherchez une solution sous la forme $\\theta(t) = e^{s t} (A \\cos(\\omega_0 t) + B \\sin(\\omega_0 t))$ avec $s > 0$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Bilan mécanique propre en référentiel accéléré', poids: '40%' },
      { critere: 'Compréhension physique du transfert d\'énergie à $2\\omega_0$', poids: '40%' },
      { critere: 'Rigueur mathématique de l\'approximation', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-22-cycle-stirling-regenerateur',
    titre: 'Thermodynamique : Cycle de Stirling avec Régénérateur Idéal',
    matiere: 'Physique',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Décrire le cycle de Stirling à gaz parfait dans les diagrammes $(P, V)$ et $(T, S)$ (deux isothermes et deux isochores). Exprimer les transferts thermiques et le travail échangé sur chaque branche.',
      pointsCles: [
        'Tracé soigné du cycle avec sens horaire (moteur)',
        'Isotherme chaude $T_C$ : détente avec $Q_C = n R T_C \\ln(V_2/V_1) > 0$',
        'Isotherme froide $T_F$ : compression avec $Q_F = n R T_F \\ln(V_1/V_2) < 0$',
        'Isochores : transferts $\\Delta U = n C_{vm} (T_C - T_F)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Montrer que le régénérateur thermique idéal permet de recycler intégralement la chaleur cédée lors du refroidissement isochore pour la réinjecter lors de l\'échauffement isochore. En déduire que le rendement théorique du moteur de Stirling avec régénérateur atteint la borne de Carnot $\\eta = 1 - T_F / T_C$.',
      indicationsKholleur: [
        { condition: 'Régénérateur', aide: 'La chaleur stockée par la matrice poreuse lors de l\'isochore descendante compense exactement la chaleur nécessaire pour remonter en température.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Diagrammes thermodynamiques rigoureux', poids: '35%' },
      { critere: 'Bilan énergétique complet par transformation', poids: '40%' },
      { critere: 'Démonstration du rendement de Carnot', poids: '25%' }
    ]
  },
  {
    id: 'kholle-cinq-23-ondes-sonores-tuyaux-orgue',
    titre: 'Acoustique : Ondes Stationnaires dans un Tuyau Sonore & Résonances',
    matiere: 'Physique',
    filiere: 'PCSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Établir l\'équation de d\'Alembert pour la surpression acoustique $p(x, t)$ dans l\'air. Énoncer les conditions aux limites pour une extrémité fermée (nœud de vitesse, ventre de pression) et pour une extrémité ouverte (ventre de vitesse, nœud de pression).',
      pointsCles: [
        'Linéarisation de la dynamique des fluides (Euler + conservation de la masse + compressibilité isentropique)',
        'Vitesse du son $c = \\sqrt{\\frac{\\gamma R T}{M}}$',
        'Conditions aux limites acoustiques'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Déterminer les fréquences de résonance propres $f_n$ d\'un tuyau de longueur $L$ ouvert à une extrémité et fermé à l\'autre (tuyau borgne). Pourquoi ce tuyau ne produit-il que des harmoniques de rang impair ? Comparer avec un tuyau ouvert-ouvert.',
      indicationsKholleur: [
        { condition: 'Onde stationnaire', aide: 'Posez $p(x, t) = P_0 \\cos(k x) \\cos(\\omega t)$. En $x=0$, $v=0 \\implies \\partial_x p = 0$ ; en $x=L$, $p=0 \\implies \\cos(k L) = 0$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur sur les conditions aux limites ouvertes/fermées', poids: '40%' },
      { critere: 'Calcul des modes propres $f_n = (2n+1) c / (4L)$', poids: '40%' },
      { critere: 'Comparaison timbrale (harmoniques pairs/impairs)', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-24-rayonnement-corps-noir-planck',
    titre: 'Physique Statistique & Quantique : Rayonnement du Corps Noir',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Présenter la loi de Planck pour la densité spectrale d\'énergie volumique du corps noir $u_\\nu(T) = \\frac{8\\pi h \\nu^3}{c^3} \\frac{1}{e^{h\\nu / k_B T} - 1}$. Montrer comment elle résout la catastrophe ultraviolette de Rayleigh-Jeans.',
      pointsCles: [
        'Hypothèse de quantification des échanges d\'énergie par quanta $E_n = n h \\nu$',
        'Facteur de Bose-Einstein pour les photons de potentiel chimique nul',
        'Limite basse fréquence $h\\nu \\ll k_B T$ : équipartition classique $k_B T$',
        'Limite haute fréquence $h\\nu \\gg k_B T$ : coupure exponentielle de Wien'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: '1. Établir la loi de déplacement de Wien : montrer que la longueur d\'onde $\\lambda_{max}$ du maximum d\'émission vérifie $\\lambda_{max} T = \\mathrm{cste}$.\n2. En intégrant la loi de Planck sur toutes les fréquences, retrouver la loi de Stefan-Boltzmann $u(T) = a T^4$.',
      indicationsKholleur: [
        { condition: 'Changement de variable', aide: 'Posez $x = \\frac{h \\nu}{k_B T}$ dans l\'intégrale pour sortir la dépendance en $T^4$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Explication historique et physique de Planck', poids: '40%' },
      { critere: 'Dérivation de la loi de Wien par annulation de dérivée', poids: '35%' },
      { critere: 'Intégrale de Riemann $\\zeta(4)$ et Stefan', poids: '25%' }
    ]
  },
  {
    id: 'kholle-cinq-25-effet-doppler-fizeau-relativiste',
    titre: 'Effet Doppler Acoustique & Effet Doppler-Fizeau Relativiste',
    matiere: 'Physique',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Établir la formule du décalage Doppler acoustique dans l\'air pour un émetteur en mouvement à la vitesse $v_E$ et un récepteur fixe, puis pour un récepteur en mouvement à la vitesse $v_R$ et un émetteur fixe. Pourquoi ces deux situations ne sont-elles pas symétriques ?',
      pointsCles: [
        'Existence d\'un milieu matériel de propagation privilégié (l\'air au repos)',
        'Variation de la longueur d\'onde spatiale si l\'émetteur bouge : $\\lambda\' = \\lambda (1 - v_E / c)$',
        'Variation de la fréquence de réception si le récepteur bouge : $f_R = f_E (1 + v_R / c)$',
        'Dissymétrie due au référentiel lié au fluide'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'En relativité restreinte (effet Doppler lumineux), montrer que la symétrie est restaurée et établir la formule unifiée $f_R = f_E \\sqrt{\\frac{1 - \\beta}{1 + \\beta}}$ avec $\\beta = v/c$. Application au redshift cosmologique des galaxies lointaines.',
      indicationsKholleur: [
        { condition: 'Quadrivecteur onde', aide: 'Utilisez l\'invariance du quadrivecteur d\'onde $K^\\mu = (\\omega/c, \\vec{k})$ par transformation de Lorentz.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Clarté de la dérivation géométrique des fronts d\'ondes', poids: '40%' },
      { critere: 'Explication de la rupture d\'équivalence galiléenne', poids: '35%' },
      { critere: 'Formule Doppler relativiste exacte', poids: '25%' }
    ]
  }
];
