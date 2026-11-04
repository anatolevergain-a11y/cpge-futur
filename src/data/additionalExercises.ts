import type { ExerciseItem } from './cpgeData';

export const ADDITIONAL_EXERCISES: ExerciseItem[] = [
  {
    id: 'exo-lagrange-extrema-sphere',
    title: 'Extrema d\'une forme quadratique sur la sphère unité & Théorème Spectral',
    matiere: 'Mathématiques',
    chapitreId: 'maths-calcul-differentiel',
    chapitreTitre: 'Calcul Différentiel & Extrema',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 30,
    enonce: 'Soit $A \\in \\mathcal{S}_n(\\mathbb{R})$ une matrice symétrique réelle dont les valeurs propres rangées par ordre croissant sont $\\lambda_1 \\le \\lambda_2 \\le \\dots \\le \\lambda_n$. On considère la forme quadratique $q(x) = X^T A X$ et la sphère unité euclidienne $S = \\{x \\in \\mathbb{R}^n \\mid \\|x\\| = 1\\}$.\n\n1. Justifier rigoureusement que $q$ admet un minimum et un maximum globaux sur $S$.\n2. En utilisant les multiplicateurs de Lagrange (ou une base orthonormée de vecteurs propres), exprimer $\\min_{x \\in S} q(x)$ et $\\max_{x \\in S} q(x)$ en fonction des valeurs propres de $A$.\n3. Soit $x_0 \\in S$ tel que $q(x_0) = \\lambda_1$. Montrer que $x_0$ est un vecteur propre de $A$ associé à $\\lambda_1$.\n4. En déduire le quotient de Rayleigh et une méthode itérative pour déterminer la plus grande valeur propre d\'une matrice symétrique positive.',
    hints: [
      'Pour la question 1, montrez que $S$ est une partie fermée et bornée en dimension finie, et que $q$ est polynomiale donc continue.',
      'D\'après le théorème spectral, il existe une base orthonormée $(e_1, \\dots, e_n)$ diagonalisant $A$. Exprimez $q(x)$ et $\\|x\\|^2$ dans cette base.',
      'Pour la méthode des multiplicateurs de Lagrange, écrivez la condition $\\vec{\\nabla} q(x) = \\lambda \\vec{\\nabla} g(x)$ avec $g(x) = \\|x\\|^2 - 1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Compacité de la sphère unité et théorème des bornes atteintes',
          explication: 'L\'application norme $x \\mapsto \\|x\\|$ est continue sur $\\mathbb{R}^n$. La sphère unité $S = \\|\\cdot\\|^{-1}(\\{1\\})$ est l\'image réciproque d\'un fermé, donc est fermée. De plus, elle est bornée par définition ($x \\in S \\implies \\|x\\| \\le 1$). En dimension finie $n$, toute partie fermée et bornée est compacte (théorème de Bolzano-Weierstrass / Borel-Lebesgue).\nL\'application $q : x \\mapsto X^T A X$ est une forme quadratique, donc une fonction polynomiale de degré 2, donc de classe $\\mathcal{C}^\\infty$. Toute fonction réelle continue sur un compact non vide est bornée et atteint ses bornes. $q$ admet donc un minimum et un maximum globaux sur $S$.'
        },
        {
          titre: '2. Décomposition spectrale & Quotient de Rayleigh',
          explication: 'D\'après le théorème spectral, $A$ est diagonalisable dans une base orthonormée $(e_1, \\dots, e_n)$ associée aux valeurs propres réelles $\\lambda_1 \\le \\dots \\le \\lambda_n$. Pour tout $x = \\sum_{i=1}^n x_i e_i \\in S$, on a $\\|x\\|^2 = \\sum_{i=1}^n x_i^2 = 1$ et $q(x) = \\sum_{i=1}^n \\lambda_i x_i^2$. On en déduit immédiatement :',
          calculs: '\\lambda_1 = \\lambda_1 \\sum_{i=1}^n x_i^2 \\le \\sum_{i=1}^n \\lambda_i x_i^2 \\le \\lambda_n \\sum_{i=1}^n x_i^2 = \\lambda_n'
        },
        {
          titre: '3. Atteinte des bornes et sous-espaces propres',
          explication: 'Pour $x = e_1$, $q(e_1) = \\lambda_1$, et pour $x = e_n$, $q(e_n) = \\lambda_n$. Ainsi :\n$$\\min_{x \\in S} q(x) = \\lambda_1 \\quad \\text{et} \\quad \\max_{x \\in S} q(x) = \\lambda_n$$\nSi $q(x_0) = \\lambda_1$, alors $\\sum_{i=1}^n (\\lambda_i - \\lambda_1) x_i^2 = 0$. Comme tous les coefficients $(\\lambda_i - \\lambda_1)$ sont $\\ge 0$, pour chaque $i$ tel que $\\lambda_i > \\lambda_1$, on a nécessairement $x_i = 0$. Donc $x_0 \\in \\ker(A - \\lambda_1 I_n)$ : $x_0$ est un vecteur propre associé à la plus petite valeur propre $\\lambda_1$.',
          calculs: 'q(x_0) = \\lambda_1 \\implies A x_0 = \\lambda_1 x_0'
        },
        {
          titre: '4. Méthode de la puissance itérée',
          explication: 'Pour déterminer $\\lambda_n$ numériquement, la méthode de la puissance itérée consiste à poser $y_{k+1} = \\frac{A y_k}{\\|A y_k\\|}$ à partir d\'un vecteur initial aléatoire $y_0$. Le quotient de Rayleigh $R(y_k) = \\frac{y_k^T A y_k}{\\|y_k\\|^2}$ converge vers $\\lambda_n$ à vitesse géométrique proportionnelle à $(\\lambda_{n-1}/\\lambda_n)^k$.'
        }
      ],
      conclusion: 'Le quotient de Rayleigh relie directement la géométrie des extrema de formes quadratiques au spectre des matrices autoadjointes. Ce résultat est le socle de l\'analyse en composantes principales (ACP) et de la mécanique quantique.',
      reflexeDuCorrecteur: 'Pour justifier l\'existence d\'extrema globaux, le réflexe réflexe absolu est d\'invoquer : "la sphère unité est fermée et bornée en dimension finie, donc compacte, et $q$ est continue car polynomiale".'
    }
  },
  {
    id: 'exo-ruine-du-joueur-martingale',
    title: 'Ruine du Joueur & Temps d\'Arrêt en Probabilités Discrètes',
    matiere: 'Mathématiques',
    chapitreId: 'maths-probabilites',
    chapitreTitre: 'Probabilités Discrètes & Variables Aléatoires',
    filieres: ['MP', 'MPI', 'PSI'],
    difficulte: 2,
    origin: 'Centrale-Supélec MP / MPI',
    dureeEstimeeMin: 35,
    enonce: 'Un joueur possède une fortune initiale de $k$ euros ($k \\in \\{0, 1, \\dots, N\\}$). À chaque étape, il joue à un jeu équitable où il gagne 1 euro avec la probabilité $p \\in ]0, 1[$ et perd 1 euro avec la probabilité $q = 1-p$. Le jeu s\'arrête dès que la fortune atteint $0$ (ruine) ou $N$ (gain de la cagnotte).\nOn note $u_k$ la probabilité de ruine en partant de $k$ euros, et $T$ la variable aléatoire désignant le nombre d\'étapes jusqu\'à l\'arrêt du jeu.\n\n1. En conditionnant par le résultat de la première partie (formule des probabilités totales), établir une relation de récurrence vérifiée par la suite $(u_k)_{0 \\le k \\le N}$.\n2. Déterminer les conditions aux limites $u_0$ et $u_N$.\n3. Résoudre cette récurrence dans le cas d\'un jeu équitable ($p = q = 1/2$), puis dans le cas d\'un jeu dissymétrique ($p \\neq q$).\n4. En déduire la probabilité de ruine si l\'adversaire a une fortune infinie ($N \\to +\\infty$).',
    hints: [
      'Noter $G_1$ l\'événement "gagner 1 euro au premier coup" et $P_1$ "perdre 1 euro au premier coup". Appliquer la formule des probabilités totales.',
      'La récurrence linéaire d\'ordre 2 s\'écrit $u_k = p u_{k+1} + q u_{k-1}$. Chercher les solutions de l\'équation caractéristique associée $p r^2 - r + q = 0$.',
      'Remarquer que $p r^2 - r + q = (r-1)(p r - q) = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Établissement de l\'équation aux différences finies',
          explication: 'Soit $R$ l\'événement "le joueur finit par être ruiné". En partant de la fortune $k$ avec $1 \\le k \\le N-1$, posons $u_k = \\mathbb{P}_k(R)$. Le système formé par $(G_1, P_1)$ est un système complet d\'événements avec $\\mathbb{P}(G_1) = p$ et $\\mathbb{P}(P_1) = q$. D\'après la formule des probabilités totales :',
          calculs: 'u_k = \\mathbb{P}(G_1) \\mathbb{P}_{G_1}(R) + \\mathbb{P}(P_1) \\mathbb{P}_{P_1}(R) = p u_{k+1} + q u_{k-1}'
        },
        {
          titre: '2. Conditions aux limites',
          explication: 'Si la fortune initiale est $0$, le joueur est déjà ruiné : $u_0 = 1$.\nSi la fortune initiale est $N$, le jeu s\'arrête immédiatement avec succès, la ruine est impossible : $u_N = 0$.'
        },
        {
          titre: '3. Résolution de la récurrence linéaire',
          explication: 'Puisque $p + q = 1$, on peut réécrire : $p(u_{k+1} - u_k) = q(u_k - u_{k-1}) \\implies u_{k+1} - u_k = \\frac{q}{p}(u_k - u_{k-1})$.\n- Cas équitable $p = q = 1/2$ : La suite $(u_k)$ est arithmétique. Avec $u_0 = 1$ et $u_N = 0$, on obtient immédiatement $u_k = 1 - \\frac{k}{N}$.\n- Cas dissymétrique $p \\neq q$ : La suite des accroissements est géométrique de raison $q/p$. En sommant et en utilisant $u_0 = 1$ et $u_N = 0$ :',
          calculs: 'u_k = \\frac{(q/p)^k - (q/p)^N}{1 - (q/p)^N}'
        },
        {
          titre: '4. Ruine face à une banque de fortune infinie ($N \\to +\\infty$)',
          explication: '- Si $p \\le 1/2$ (jeu défavorable ou équitable) : $\\lim_{N \\to +\\infty} u_k = 1$. La ruine est quasi-certaine contre un adversaire infiniment riche !\n- Si $p > 1/2$ (jeu favorable) : Comme $q/p < 1$, $(q/p)^N \\to 0$, d\'où $\\lim_{N \\to +\\infty} u_k = (q/p)^k < 1$. Il subsiste une probabilité non nulle $1 - (q/p)^k > 0$ de s\'enrichir indéfiniment sans jamais être ruiné.'
        }
      ],
      conclusion: 'Même à un jeu rigoureusement équitable ($p = 1/2$), jouer indéfiniment contre une banque ayant des réserves supérieures mène mathématiquement à la certitude de la ruine.',
      reflexeDuCorrecteur: 'Pour les chaînes de Markov et marches aléatoires en CPGE, toujours conditionner sur le premier pas pour obtenir une relation de récurrence linéaire à coefficients constants.'
    }
  },
  {
    id: 'exo-effet-de-peau-conducteur',
    title: 'Effet de Peau & Puissance Dissipée par Effet Joule dans un Cylindre',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-electromagnetiques',
    chapitreTitre: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    filieres: ['PC', 'MP', 'PSI'],
    difficulte: 2,
    origin: 'Mines-Ponts PC / MP / PSI',
    dureeEstimeeMin: 30,
    enonce: 'Un conducteur métallique cylindrique infini d\'axe $(Oz)$, de rayon $a$ et de conductivité $\\gamma$, baigne dans un champ magnétique extérieur variable $\\vec{B}_{ext} = B_0 \\cos(\\omega t) \\vec{u}_z$. On se place dans le cadre de l\'ARQS magnétique (courant de déplacement négligeable devant le courant de conduction $\\vec{j} = \\gamma \\vec{E}$).\n\n1. Établir l\'équation aux dérivées partielles vérifiée par le champ magnétique $\\vec{B}(r, t)$ à l\'intérieur du conducteur.\n2. Montrer que cette équation fait apparaître une longueur caractéristique $\\delta$ appelée épaisseur de peau. Exprimer $\\delta$ en fonction de $\\mu_0, \\gamma$ et $\\omega$.\n3. Calculer la valeur numérique de $\\delta$ pour le cuivre ($\\gamma = 5{,}8 \\times 10^7\\text{ S}\\cdot\\text{m}^{-1}$) à $50\\text{ Hz}$ puis à $1\\text{ MHz}$. Conclure sur le choix des câbles haute fréquence.',
    hints: [
      'Prendre le rotationnel de Maxwell-Faraday $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ et combiner avec Maxwell-Ampère $\\vec{\\mathrm{rot}}\\,\\vec{B} = \\mu_0 \\gamma \\vec{E}$.',
      'Utiliser la relation vectorielle $\\vec{\\mathrm{rot}}(\\vec{\\mathrm{rot}}\\,\\vec{B}) = \\vec{\\nabla}(\\mathrm{div}\\,\\vec{B}) - \\Delta \\vec{B}$.',
      'Rappel : $\\mathrm{div}\\,\\vec{B} = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation de diffusion magnétique',
          explication: 'Dans le métal en ARQS magnétique, Maxwell-Ampère s\'écrit $\\vec{\\mathrm{rot}}\\,\\vec{B} = \\mu_0 \\vec{j} = \\mu_0 \\gamma \\vec{E}$. En prenant le rotationnel des deux membres :\n$$\\vec{\\mathrm{rot}}(\\vec{\\mathrm{rot}}\\,\\vec{B}) = \\mu_0 \\gamma \\vec{\\mathrm{rot}}\\,\\vec{E}$$\nOr d\'après Maxwell-Faraday, $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$, et l\'identité vectorielle donne $\\vec{\\mathrm{rot}}(\\vec{\\mathrm{rot}}\\,\\vec{B}) = \\vec{\\nabla}(\\mathrm{div}\\,\\vec{B}) - \\Delta \\vec{B} = -\\Delta \\vec{B}$ car $\\mathrm{div}\\,\\vec{B} = 0$. On obtient l\'équation de diffusion du champ magnétique :',
          calculs: '\\Delta \\vec{B} = \\mu_0 \\gamma \\frac{\\partial \\vec{B}}{\\partial t}'
        },
        {
          titre: '2. Longueur caractéristique : Épaisseur de peau $\\delta$',
          explication: 'En régime harmonique à la pulsation $\\omega$, la dérivation temporelle $\\frac{\\partial}{\\partial t}$ équivaut à la multiplication par $j \\omega$ en notation complexe. L\'équation devient $\\Delta \\underline{\\vec{B}} = j \\mu_0 \\gamma \\omega \\underline{\\vec{B}} = \\underline{k}^2 \\underline{\\vec{B}}$.\nEn posant $\\underline{k} = \\frac{1+j}{\\delta}$ avec $(1+j)^2 = 2j$, on identifie $j \\frac{2}{\\delta^2} = j \\mu_0 \\gamma \\omega$, d\'où :',
          calculs: '\\delta = \\sqrt{\\frac{2}{\\mu_0 \\gamma \\omega}}'
        },
        {
          titre: '3. Applications numériques et conséquences industrielles',
          explication: 'Avec $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ H}\\cdot\\text{m}^{-1}$ et $\\gamma = 5{,}8 \\times 10^7\\text{ S}\\cdot\\text{m}^{-1}$ :\n- À $f = 50\\text{ Hz}$ : $\\omega = 2\\pi \\times 50 = 314\\text{ rad/s} \\implies \\delta \\approx 9{,}3\\text{ mm}$. Pour un fil de cuivre domestique (diamètre $1{,}5\\text{ mm}$), $\\delta$ est supérieur au rayon : le courant circule de façon homogène.\n- À $f = 1\\text{ MHz}$ : $\\delta \\approx 66\\ \\mu\\text{m}$. Le courant est totalement refoulé sur une fine couche superficielle.'
        }
      ],
      conclusion: 'À haute fréquence, le cœur du câble ne conduit aucun courant. On utilise des fils de Litz (brins multiples isolés) ou des tubes creux dorés pour maximiser la surface effective sans gaspiller de métal.',
      reflexeDuCorrecteur: 'Toujours préciser l\'hypothèse fondatrice de l\'ARQS magnétique : les courants de déplacement $\\varepsilon_0 \\partial_t \\vec{E}$ sont négligeables devant les courants de conduction $\\gamma \\vec{E}$.'
    }
  },
  {
    id: 'exo-ailette-thermique-convection',
    title: 'Profil de Température & Efficacité d\'une Ailette de Refroidissement',
    matiere: 'Physique',
    chapitreId: 'physique-transferts-thermiques-diffusion',
    chapitreTitre: 'Transferts Thermiques & Équation de la Diffusion',
    filieres: ['PSI', 'PC', 'PCSI'],
    difficulte: 2,
    origin: 'Centrale-Supélec PSI / PC',
    dureeEstimeeMin: 25,
    enonce: 'Pour refroidir un microprocesseur, on utilise une ailette métallique cylindrique de section constante $S$, de périmètre $P$, de conductivité thermique $\\lambda$ et de grande longueur $L$. L\'ailette est fixée en $x=0$ à la température constante $T_0$. Le fluide ambiant est à la température $T_a < T_0$ avec un coefficient d\'échange convectif de Newton $h$.\n\n1. En effectuant un bilan thermique sur une tranche d\'ailette entre $x$ et $x+\\mathrm{d}x$ en régime stationnaire, établir l\'équation différentielle vérifiée par l\'écart de température $\\theta(x) = T(x) - T_a$.\n2. Mettre en évidence une longueur caractéristique $\\ell_c$. Donner son expression en fonction de $\\lambda, S, h$ et $P$.\n3. Résoudre l\'équation pour une ailette de longueur infinie ($L \\gg \\ell_c$) avec la condition limite $\\theta(+\\infty) = 0$.\n4. Exprimer le flux thermique total $\\Phi_{evac}$ évacué par l\'ailette à sa base $x=0$.',
    hints: [
      'Exprimer le flux conductif entrant en $x$ via la loi de Fourier : $\\Phi_{cond}(x) = -\\lambda S \\frac{\\mathrm{d}T}{\\mathrm{d}x}$.',
      'Le flux sortant par la surface latérale $\\mathrm{d}S_{lat} = P \\,\\mathrm{d}x$ vérifie la loi de Newton : $\\mathrm{d}\\Phi_{lat} = h P (T(x) - T_a) \\,\\mathrm{d}x$.',
      'Le bilan stationnaire s\'écrit $\\Phi_{cond}(x) - \\Phi_{cond}(x+\\mathrm{d}x) - \\mathrm{d}\\Phi_{lat} = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Bilan d\'énergie sur la tranche $[x, x+\\mathrm{d}x]$',
          explication: 'En régime stationnaire, l\'énergie stockée est nulle. Par la loi de Fourier, le flux conductif selon $x$ est $\\Phi(x) = -\\lambda S \\frac{\\mathrm{d}\\theta}{\\mathrm{d}x}$.\nLe bilan s\'écrit : $\\Phi(x) - \\Phi(x+\\mathrm{d}x) - \\mathrm{d}\\Phi_{lat} = 0$.\nAvec $\\Phi(x+\\mathrm{d}x) - \\Phi(x) = \\frac{\\mathrm{d}\\Phi}{\\mathrm{d}x} \\mathrm{d}x = -\\lambda S \\frac{\\mathrm{d}^2 \\theta}{\\mathrm{d}x^2} \\mathrm{d}x$ et $\\mathrm{d}\\Phi_{lat} = h P \\theta(x) \\mathrm{d}x$, on obtient :',
          calculs: '\\lambda S \\frac{\\mathrm{d}^2 \\theta}{\\mathrm{d}x^2} - h P \\theta(x) = 0 \\implies \\frac{\\mathrm{d}^2 \\theta}{\\mathrm{d}x^2} - \\frac{h P}{\\lambda S} \\theta(x) = 0'
        },
        {
          titre: '2. Longueur caractéristique d\'atténuation $\\ell_c$',
          explication: 'L\'équation différentielle s\'écrit sous forme canonique $\\frac{\\mathrm{d}^2 \\theta}{\\mathrm{d}x^2} - \\frac{\\theta(x)}{\\ell_c^2} = 0$ avec :',
          calculs: '\\ell_c = \\sqrt{\\frac{\\lambda S}{h P}}'
        },
        {
          titre: '3. Résolution et profil exponentiel',
          explication: 'La solution générale est $\\theta(x) = A e^{-x/\\ell_c} + B e^{x/\\ell_c}$.\nPuisque la température reste bornée quand $x \\to +\\infty$, on a nécessairement $B = 0$. La condition en $x=0$ donne $\\theta(0) = T_0 - T_a = \\theta_0$, d\'où :',
          calculs: '\\theta(x) = \\theta_0 \\exp\\left(-\\frac{x}{\\ell_c}\\right)'
        },
        {
          titre: '4. Flux thermique total évacué à la base',
          explication: 'Le flux évacué par l\'ailette est le flux de conduction entrant en $x=0$ :\n$$\\Phi_{evac} = -\\lambda S \\left[\\frac{\\mathrm{d}\\theta}{\\mathrm{d}x}\\right]_{x=0} = -\\lambda S \\left(-\\frac{\\theta_0}{\\ell_c}\\right) = \\frac{\\lambda S}{\\ell_c} \\theta_0$$\nEn remplaçant $\\ell_c$ par sa valeur :',
          calculs: '\\Phi_{evac} = \\sqrt{h P \\lambda S} \\cdot (T_0 - T_a)'
        }
      ],
      conclusion: 'Le flux thermique croît comme $\\sqrt{P \\lambda S}$. Pour optimiser le refroidissement, il est toujours plus efficace de multiplier les ailettes fines (grand périmètre $P$) que d\'augmenter simplement l\'épaisseur de la base.',
      reflexeDuCorrecteur: 'Ne jamais oublier d\'expliciter le bilan de flux avec les signes corrects : conduction entrante en $x$ moins conduction sortante en $x+\\mathrm{d}x$ moins pertes convectives latérales.'
    }
  },
  {
    id: 'exo-roulement-plan-incline-coulomb',
    title: 'Cylindre sur Plan Incliné : Roulement Sans Glissement & Seuil de Décrochage',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'physique-mecanique-solide',
    chapitreTitre: 'Mécanique du Solide Indéformable & Torseurs',
    filieres: ['PSI', 'MP', 'PC'],
    difficulte: 2,
    origin: 'Concours Commun Mines-Ponts PSI / MP',
    dureeEstimeeMin: 25,
    enonce: 'Un cylindre homogène de masse $M$, de rayon $R$ et de moment d\'inertie $J_G = \\frac{1}{2} M R^2$ est posé sur un plan incliné d\'un angle $\\alpha \\in ]0, \\pi/2[$ par rapport à l\'horizontale. Le coefficient de frottement solide avec le plan est $f = \\tan \\varphi$.\n\n1. En faisant l\'hypothèse d\'un roulement sans glissement (RSG), relier l\'accélération du centre d\'inertie $a_G = \\ddot{x}$ à l\'accélération angulaire $\\ddot{\\theta}$.\n2. Par application du principe fondamental de la dynamique (PFD) ou des théorèmes de Koenig, déterminer l\'accélération $a_G$ du cylindre.\n3. Exprimer les composantes normale $N$ et tangentielle $T$ de l\'action du plan sur le cylindre.\n4. En déduire l\'angle d\'inclinaison maximal $\\alpha_{max}$ au-delà duquel le cylindre décroche et se met à glisser.',
    hints: [
      'Condition cinématique de RSG : $\\vec{v}(I \\in \\text{cylindre}/\\text{sol}) = \\vec{0} \\implies \\dot{x} = R \\dot{\\theta} \\implies \\ddot{x} = R \\ddot{\\theta}$.',
      'Appliquer le théorème de la résultante dynamique selon l\'axe du plan, et le théorème du moment cinétique scalaire au centre de gravité $G$.',
      'Vérifier la loi de frottement de Coulomb pour le non-glissement : $|T| \\le f N$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Relation cinématique de roulement sans glissement',
          explication: 'Au point de contact $I$, la vitesse du solide est nulle : $\\vec{v}(I) = \\vec{v}(G) + \\vec{\\Omega} \\wedge \\vec{GI} = \\dot{x} \\vec{u}_x + (-\\dot{\\theta} \\vec{u}_z) \\wedge (-R \\vec{u}_y) = (\\dot{x} - R \\dot{\\theta}) \\vec{u}_x = \\vec{0}$.\nEn dérivant par rapport au temps :',
          calculs: '\\ddot{x} = R \\ddot{\\theta}'
        },
        {
          titre: '2. Application du PFD au cylindre',
          explication: 'Les actions extérieures sont : le poids $\\vec{P} = M g \\sin\\alpha \\vec{u}_x - M g \\cos\\alpha \\vec{u}_y$ et la réaction du plan $\\vec{R} = -T \\vec{u}_x + N \\vec{u}_y$.\n- Selon l\'axe normal $\\vec{u}_y$ : $0 = N - M g \\cos\\alpha \\implies N = M g \\cos\\alpha$.\n- Selon l\'axe descendant $\\vec{u}_x$ : $M \\ddot{x} = M g \\sin\\alpha - T$.\n- Théorème du moment cinétique en $G$ : $J_G \\ddot{\\theta} = \\mathcal{M}_G(\\vec{R}) = R \\cdot T$.\nPuisque $J_G = \\frac{1}{2} M R^2$ et $\\ddot{\\theta} = \\ddot{x}/R$, on a $T = \\frac{J_G \\ddot{x}}{R^2} = \\frac{1}{2} M \\ddot{x}$.\nEn injectant dans l\'équation de translation : $M \\ddot{x} = M g \\sin\\alpha - \\frac{1}{2} M \\ddot{x} \\implies \\frac{3}{2} M \\ddot{x} = M g \\sin\\alpha$, d\'où :',
          calculs: 'a_G = \\ddot{x} = \\frac{2}{3} g \\sin\\alpha'
        },
        {
          titre: '3. Composantes de la réaction du plan',
          explication: 'La force de frottement nécessaire pour maintenir le roulement sans glissement vaut :\n$$T = \\frac{1}{2} M \\ddot{x} = \\frac{1}{3} M g \\sin\\alpha$$\nLa composante normale est $N = M g \\cos\\alpha$.'
        },
        {
          titre: '4. Condition de non-glissement de Coulomb & Angle critique',
          explication: 'Le roulement sans glissement subsiste tant que $|T| \\le f N$ (loi de Coulomb sans glissement) :\n$$\\frac{1}{3} M g \\sin\\alpha \\le f M g \\cos\\alpha \\implies \\tan\\alpha \\le 3 f$$\nL\'angle d\'inclinaison maximal est donc :',
          calculs: '\\alpha_{max} = \\arctan(3 f)'
        }
      ],
      conclusion: 'Grâce au moment d\'inertie du cylindre, l\'adhérence est favorisée par rapport à un patin en translation pure (pour lequel le glissement commence dès $\\tan\\alpha = f$). Le facteur 3 provient directement de la distribution de masse $J_G = \\frac{1}{2} M R^2$.',
      reflexeDuCorrecteur: 'Toujours poser l\'hypothèse de RSG en premier lieu, calculer l\'effort tangentiel $T$, puis vérifier a posteriori l\'inégalité de Coulomb $|T| \\le f N$ pour trouver la condition de validité.'
    }
  },
  {
    id: 'exo-protection-cathodique-zinc-fer',
    title: 'Corrosion du Fer en Milieu Aéré & Protection Cathodique par Anode Sacrificielle',
    matiere: 'Chimie',
    chapitreId: 'chimie-electrochimie-courbes-ip',
    chapitreTitre: 'Électrochimie : Courbes Intensité-Potentiel & Corrosion',
    filieres: ['PC', 'PSI', 'BCPST'],
    difficulte: 2,
    origin: 'Mines-Ponts / CCINP PC / BCPST',
    dureeEstimeeMin: 25,
    enonce: 'On étudie la corrosion d\'une plaque d\'acier (assimilé à du fer pur) immergée dans de l\'eau de mer neutre ($pH = 7$) aérée ($[O_2] = 2{,}5 \\times 10^{-4}\\text{ mol}\\cdot\\text{L}^{-1}$).\nDonnées standard : $E^\\circ(\\mathrm{Fe}^{2+}/\\mathrm{Fe}) = -0{,}44\\text{ V}$, $E^\\circ(O_2 / \\mathrm{H_2O}) = 1{,}23\\text{ V}$, $E^\\circ(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) = -0{,}76\\text{ V}$.\n\n1. Écrire les équations d\'oxydation du fer et de réduction du dioxygène en milieu neutre.\n2. Représenter l\'allure des courbes intensité-potentiel du système fer-eau aérée sans protection. Définir le potentiel mixte $E_{corr}$ et le courant de corrosion $I_{corr}$.\n3. Pour protéger la coque, on y connecte électriquement une masse de zinc (anode sacrificielle). Représenter les nouvelles courbes $I(E)$.\n4. Expliquer pourquoi le fer ne s\'oxyde plus et calculer la masse de zinc consommée par an pour un courant de protection $I_{prot} = 10\\text{ A}$. ($M(\\mathrm{Zn}) = 65{,}4\\text{ g}\\cdot\\text{mol}^{-1}$, $F = 96\\,500\\text{ C}\\cdot\\text{mol}^{-1}$).',
    hints: [
      'En milieu neutre ($pH=7$), la réduction du dioxygène s\'écrit $O_2 + 2 H_2 O + 4 e^- \\to 4 \\mathrm{HO}^-$.',
      'Le potentiel mixte est tel que $\\sum I_a + \\sum I_c = 0$.',
      'La loi de Faraday relie la charge $Q = I \\cdot \\Delta t$ au nombre de moles d\'électrons $n_e = Q/F$, avec $n(\\mathrm{Zn}) = n_e / 2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équations d\'oxydoréduction',
          explication: '- Anode (oxydation du fer) : $\\mathrm{Fe}(s) \\rightleftharpoons \\mathrm{Fe}^{2+}(aq) + 2 e^-$\n- Cathode (réduction de $O_2$) : $O_2(g) + 2 \\mathrm{H_2O} + 4 e^- \\rightleftharpoons 4 \\mathrm{HO}^-(aq)$\nBilan global spontané : $2 \\mathrm{Fe}(s) + O_2(aq) + 2 \\mathrm{H_2O} \\to 2 \\mathrm{Fe(OH)}_2(s)$ (formation de rouille).'
        },
        {
          titre: '2. Potentiel de corrosion et palier de diffusion',
          explication: 'Comme l\'eau de mer est faiblement oxygénée, la réduction de $O_2$ présente un palier de diffusion cathodique : $I_{lim, c} = -4 F S k_d [O_2]$.\nÀ l\'abandon, le potentiel mixte stationnaire $E_{corr}$ se fixe à l\'intersection du courant d\'oxydation du fer et du palier de réduction de $O_2$ :\n$$I_{corr} = I_a(\\mathrm{Fe}) = |I_{lim, c}(O_2)|$$\nLe fer est donc continuellement attaqué à la vitesse maximale autorisée par la diffusion de l\'oxygène.'
        },
        {
          titre: '3. Mécanisme de l\'anode sacrificielle de zinc',
          explication: 'Puisque $E^\\circ(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) = -0{,}76\\text{ V} < E^\\circ(\\mathrm{Fe}^{2+}/\\mathrm{Fe}) = -0{,}44\\text{ V}$, la courbe d\'oxydation du zinc démarre à un potentiel beaucoup plus réducteur. Le nouveau potentiel mixte $E\'_{corr}$ s\'établit en dessous de $-0{,}44\\text{ V}$. À ce potentiel, le courant d\'oxydation du fer est rigoureusement NUL : $I_a(\\mathrm{Fe}) = 0$. Le zinc s\'oxyde seul pour fournir les électrons nécessaires à la réduction du dioxygène.'
        },
        {
          titre: '4. Masse de zinc consommée en 1 an (Loi de Faraday)',
          explication: 'La réaction d\'oxydation du zinc libère 2 électrons par atome de zinc ($\\mathrm{Zn} \\to \\mathrm{Zn}^{2+} + 2 e^-$). La charge électrique échangée en une durée $\\Delta t = 365 \\times 24 \\times 3600\\text{ s} = 3{,}15 \\times 10^7\\text{ s}$ vaut $Q = I_{prot} \\cdot \\Delta t = 3{,}15 \\times 10^8\\text{ C}$.\nLe nombre de moles de zinc oxydées est $n(\\mathrm{Zn}) = \\frac{Q}{2 F}$. La masse correspondante s\'écrit :',
          calculs: 'm(\\mathrm{Zn}) = \\frac{I_{prot} \\cdot \\Delta t \\cdot M(\\mathrm{Zn})}{2 F} = \\frac{10 \\times 3{,}15 \\times 10^7 \\times 65{,}4}{2 \\times 96\\,500} \\approx 106{,}9\\text{ kg}'
        }
      ],
      conclusion: 'La protection cathodique par anode sacrificielle abaisse le potentiel du métal sous sa zone d\'immunité thermodynamique. Une masse d\'environ 107 kg de zinc garantit une protection totale de la coque pendant un an.',
      reflexeDuCorrecteur: 'Retenir que le métal le plus réducteur (au potentiel standard le plus bas) s\'oxyde en premier et immunise le métal le plus noble.'
    }
  },
  {
    id: 'exo-prog-dynamique-monnaie-sac-a-dos',
    title: 'Programmation Dynamique : Rendu de Monnaie Minimal & Échec du Glouton',
    matiere: 'Informatique',
    chapitreId: 'info-programmation-dynamique',
    chapitreTitre: 'Programmation Dynamique & Optimisation',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    difficulte: 2,
    origin: 'Épreuve d\'Informatique Centrale-Supélec / X-ENS',
    dureeEstimeeMin: 30,
    enonce: 'On dispose d\'un système de pièces de monnaie d\'un pays dont les valeurs faciales sont $C = [c_1, c_2, \\dots, c_k]$ avec $c_1 = 1$. On souhaite rendre une somme $S \\in \\mathbb{N}^*$ en utilisant le nombre minimal de pièces.\n\n1. Donner un contre-exemple explicite démontrant que l\'algorithme glouton (choisir toujours la plus grande pièce disponible $\\le S$) ne donne pas toujours la solution optimale pour le système de pièces $C = [1, 3, 4]$.\n2. Définir une relation de récurrence pour $M(s)$, le nombre minimal de pièces nécessaires pour rendre la somme $s$.\n3. Écrire une fonction Python `rendu_optimal(S, C)` utilisant la programmation dynamique par tabulation (bottom-up).\n4. Déterminer la complexité temporelle et spatiale de l\'algorithme. Reconstruire la liste exacte des pièces choisies.',
    hints: [
      'Pour le contre-exemple, testez la somme $S = 6$ avec les pièces $[1, 3, 4]$.',
      'Pour la relation de récurrence : pour chaque pièce $c \\in C$ telle que $c \\le s$, si on choisit cette pièce, il reste à rendre $s - c$ de manière optimale.',
      'Initialiser un tableau `DP` de taille $S+1$ avec l\'infini, et `DP[0] = 0`.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Échec de la stratégie gloutonne',
          explication: 'Considérons le système de pièces $C = [1, 3, 4]$ et la somme $S = 6$.\n- Algorithme glouton : Choisit d\'abord la plus grande pièce $\\le 6$, soit 4. Reste $6 - 4 = 2$. Puis choisit 1 (reste 1), puis 1 (reste 0). Total : 3 pièces ($4 + 1 + 1$).\n- Solution optimale : Deux pièces de 3 ($3 + 3 = 6$). Total : 2 pièces.\nL\'algorithme glouton est donc sous-optimal pour ce système (le système n\'est pas dit canonique).'
        },
        {
          titre: '2. Principe d\'optimalité de Bellman & Récurrence',
          explication: 'Soit $M(s)$ le nombre minimal de pièces pour former la somme $s$. Le cas de base est $M(0) = 0$. Pour $s > 0$, la dernière pièce choisie $c \\in C$ doit appartenir à $C$ avec $c \\le s$ et minimiser $1 + M(s-c)$ :',
          calculs: 'M(s) = 1 + \\min_{\\{c \\in C \\mid c \\le s\\}} M(s-c)'
        },
        {
          titre: '3. Implémentation en Python par tabulation',
          explication: 'On construit un tableau `dp` où `dp[s]` contient $M(s)$ et un tableau `parent` pour mémoriser la pièce choisie :',
          calculs: `def rendu_optimal(S: int, C: list[int]) -> list[int]:
    dp = [0] + [float('inf')] * S
    derniere_piece = [0] * (S + 1)
    for s in range(1, S + 1):
        for c in C:
            if c <= s and dp[s - c] + 1 < dp[s]:
                dp[s] = dp[s - c] + 1
                derniere_piece[s] = c
    # Reconstruction
    pieces = []
    curr = S
    while curr > 0:
        pieces.append(derniere_piece[curr])
        curr -= derniere_piece[curr]
    return pieces`
        },
        {
          titre: '4. Analyse de complexité',
          explication: '- Complexité temporelle : Deux boucles imbriquées (une de 1 à $S$, l\'autre parcourant les $k$ pièces). Le temps total est $\\mathcal{O}(k \\cdot S)$.\n- Complexité spatiale : Deux tableaux de taille $S+1$, soit $\\mathcal{O}(S)$ mémoire.\nCette complexité est dite pseudo-polynomiale (polynomiale en la valeur $S$, mais exponentielle en sa taille en bits $\\log S$).'
        }
      ],
      conclusion: 'La programmation dynamique résout les problèmes d\'optimisation combinatoire dès lors que les sous-problèmes se chevauchent et obéissent au principe de sous-structure optimale.',
      reflexeDuCorrecteur: 'Toujours mentionner pourquoi l\'algorithme glouton échoue (absence de canonicité du système de pièces) avant de justifier le recours à la programmation dynamique.'
    }
  },
  // ==========================================
  // NOUVEAUX EXERCICES 1ERE & 2EME ANNEE
  // ==========================================
  {
    id: 'exo-taylor-suite-implicite',
    title: 'Suite Implicite $x_n e^{x_n} = n$ & Développement Asymptotique à 3 termes',
    matiere: 'Mathématiques',
    chapitreId: 'maths-taylor-dl',
    chapitreTitre: 'Formules de Taylor, Développements Limités & Calcul Asymptotique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts & Centrale (Classique incontournable)',
    dureeEstimeeMin: 25,
    enonce: 'Pour tout entier $n \\ge 1$, on considère l\'équation $(E_n) : x e^x = n$ d\'inconnue $x \\in \\mathbb{R}$.\n1. Montrer que pour tout $n \\ge 1$, $(E_n)$ admet une unique solution sur $[0, +\\infty[$, notée $x_n$.\n2. Montrer que $\\lim_{n \\to +\\infty} x_n = +\\infty$, puis déterminer un équivalent simple de $x_n$ quand $n \\to +\\infty$.\n3. Donner le développement asymptotique de $x_n$ à la précision $o(1)$ en faisant intervenir $\\ln n$ et $\\ln(\\ln n)$.',
    hints: [
      'Appliquez le théorème de la bijection sur la fonction $f : x \\mapsto x e^x$ strictement croissante sur $\\mathbb{R}^+$.',
      'Prenez le logarithme de la relation $x_n e^{x_n} = n$ pour obtenir $\\ln(x_n) + x_n = \\ln(n)$. Quelle est la contribution dominante lorsque $x_n \\to +\\infty$ ?',
      'Posez $x_n = \\ln n - \\ln(\\ln n) + \\varepsilon_n$ avec $\\varepsilon_n = o(1)$ et réinjectez dans l\'équation logarithmique.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Existence et unicité de la solution par le théorème de la bijection',
          explication: 'L\'application $f : x \\mapsto x e^x$ est continue et dérivable sur $[0, +\\infty[$ avec $f\'(x) = (x+1)e^x > 0$ pour tout $x \\ge 0$. $f$ est strictement croissante, $f(0) = 0$ et $\\lim_{x \\to +\\infty} f(x) = +\\infty$. $f$ réalise donc une bijection continue strictement croissante de $[0, +\\infty[$ sur $[0, +\\infty[$. Comme $n \\ge 1 \\in [0, +\\infty[$, il existe un unique $x_n \\in [0, +\\infty[$ tel que $f(x_n) = n$. De plus, comme $f(x_{n+1}) = n+1 > n = f(x_n)$, la suite $(x_n)$ est strictement croissante.'
        },
        {
          titre: '2. Limite et premier équivalent de $x_n$',
          explication: 'Si $(x_n)$ convergeait vers une limite finie $\\ell$, on aurait $n = f(x_n) \\to f(\\ell) < +\\infty$, ce qui est absurde. Donc $\\lim_{n \\to +\\infty} x_n = +\\infty$. Prenons le logarithme népérien :\n$$\\ln(x_n) + x_n = \\ln(n)$$\nComme $x_n \\to +\\infty$, par croissances comparées $\\ln(x_n) = o(x_n)$. D\'où $x_n (1 + o(1)) = \\ln(n)$, c\'est-à-dire :',
          calculs: 'x_n \\sim \\ln(n) \\quad (n \\to +\\infty)'
        },
        {
          titre: '3. Raffinement asymptotique à la précision $o(1)$',
          explication: 'Écrivons $x_n = \\ln(n) - \\ln(x_n)$. En substituant l\'équivalent $x_n = \\ln(n)(1 + o(1))$ dans le terme $\\ln(x_n)$ :\n$$\\ln(x_n) = \\ln\\big(\\ln(n)(1 + o(1))\\big) = \\ln(\\ln(n)) + \\ln(1 + o(1)) = \\ln(\\ln(n)) + o(1)$$\nEn réinjectant directement dans l\'expression de $x_n$ :',
          calculs: 'x_n = \\ln(n) - \\ln(\\ln(n)) + o(1)'
        }
      ],
      conclusion: 'La suite implicite $x_n$ (valeur de la branche principale de la fonction $W$ de Lambert en $n$) admet le développement universel $x_n = \\ln n - \\ln(\\ln n) + o(1)$.',
      reflexeDuCorrecteur: 'Ne jamais faire de DL à l\'ordre supérieur sans avoir préalablement justifié que le terme intérieur tend vers 0. Passer par le logarithme de l\'équation est la clé absolue.'
    }
  },
  {
    id: 'exo-thermique-manchon',
    title: 'Manchon Isolant Cylindrique & Rayon Critique de Perte Thermique',
    matiere: 'Physique',
    chapitreId: 'physique-transferts-thermiques',
    chapitreTitre: 'Transferts Thermiques : Conduction, Convection & Résistances',
    filieres: ['PC', 'PSI', 'MP', 'PCSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec & Concours Commun INP',
    dureeEstimeeMin: 25,
    enonce: 'Une canalisation cylindrique de vapeur d\'eau, de rayon extérieur $R_1$ et de longueur $L \\gg R_1$, est maintenue à la température constante $T_1$. On entoure la conduite d\'un isolant thermique de conductivité $\\lambda$ et de rayon extérieur $r > R_1$. L\'air ambiant extérieur est à la température constante $T_0 < T_1$, et le coefficient de convection avec l\'air est noté $h$.\n1. En régime stationnaire, exprimer la résistance thermique de conduction cylindrique $R_{cond}(r)$ et la résistance de convection externe $R_{conv}(r)$.\n2. Exprimer le flux thermique total $\\Phi(r)$ cédé à l\'extérieur en fonction de $\\Delta T = T_1 - T_0$, $R_{cond}$ et $R_{conv}$.\n3. Montrer que la résistance thermique totale $R_{th}(r)$ passe par un extremum pour un rayon critique $r_c$ que l\'on déterminera. Est-ce un minimum ou un maximum ? Interpréter physiquement ce paradoxe apparent.',
    hints: [
      'Le flux thermique à travers tout cylindre de rayon intermédiaire $R_1 \\le \rho \\le r$ est constant : $\\Phi = -\\lambda (2\\pi \\rho L) \\frac{\\mathrm{d}T}{\\mathrm{d}\rho}$. Intégrez entre $R_1$ et $r$.',
      'La surface d\'échange convective externe est $S_{ext} = 2\\pi r L$. Appliquez la loi de Newton.',
      'Calculez la dérivée de $R_{th}(r) = \\frac{\\ln(r/R_1)}{2\\pi \\lambda L} + \\frac{1}{2\\pi r L h}$ par rapport à la variable $r$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul des résistances thermiques élémentaires',
          explication: 'En coordonnées cylindriques avec symétrie axiale, la loi de Fourier donne $\\Phi = -\\lambda 2\\pi \\rho L \\frac{\\mathrm{d}T}{\\mathrm{d}\\rho} = \\text{cste}$. En intégrant entre $R_1$ et $r$, $\\Delta T_{cond} = T_1 - T(r) = \\frac{\\Phi}{2\\pi \\lambda L} \\ln(r/R_1)$, d\'où :\n$$R_{cond}(r) = \\frac{\\ln(r/R_1)}{2\\pi \\lambda L}$$\nPour la convection externe sur la surface $S(r) = 2\\pi r L$, la loi de Newton donne $\\Phi = h (2\\pi r L) (T(r) - T_0)$, soit :',
          calculs: 'R_{conv}(r) = \\frac{1}{2\\pi r L h}'
        },
        {
          titre: '2. Résistance globale et flux thermique',
          explication: 'Les deux transferts ayant lieu successivement en série, les résistances thermiques s\'additionnent :\n$$R_{th}(r) = R_{cond}(r) + R_{conv}(r) = \\frac{1}{2\\pi L} \\left( \\frac{\\ln(r/R_1)}{\\lambda} + \\frac{1}{h r} \\right)$$\nLe flux thermique total dissipé s\'écrit donc :',
          calculs: '\\Phi(r) = \\frac{T_1 - T_0}{R_{th}(r)}'
        },
        {
          titre: '3. Détermination du rayon critique et interprétation physique',
          explication: 'Dérivons la fonction $R_{th}(r)$ par rapport à $r$ :\n$$\\frac{\\mathrm{d}R_{th}}{\\mathrm{d}r} = \\frac{1}{2\\pi L} \\left( \\frac{1}{\\lambda r} - \\frac{1}{h r^2} \\right) = \\frac{1}{2\\pi L r^2} \\left( \\frac{r}{\\lambda} - \\frac{1}{h} \\right)$$\nLa dérivée s\'annule en $r_c = \\frac{\\lambda}{h}$. Pour $r < r_c$, $\\frac{\\mathrm{d}R_{th}}{\\mathrm{d}r} < 0$, donc $R_{th}$ décroît ! $r_c$ correspond donc à un MINIMUM de résistance thermique, c\'est-à-dire un MAXIMUM de pertes thermiques $\\Phi(r)$.',
          calculs: 'r_c = \\frac{\\lambda}{h}'
        }
      ],
      conclusion: 'Si le rayon de la conduite $R_1 < r_c = \\lambda / h$, l\'ajout d\'une fine couche d\'isolant augmente la surface d\'échange convective plus vite qu\'elle n\'augmente l\'isolation conductive : les déperditions augmentent ! Il faut dépasser $r_c$ pour que l\'isolant devienne efficace.',
      reflexeDuCorrecteur: 'Toujours préciser que les déperditions augmentent si $R_1 < r_c$. Cet effet est exploité pour le refroidissement des câbles électriques (gaine en polymère qui dissipe plus vite l\'effet Joule).'
    }
  },
  {
    id: 'exo-chimie-sn-walden',
    title: 'Stéréospécificité & Compétition $S_N1$ / $S_N2$ sur Dérivé Halogéné Chiral',
    matiere: 'Chimie',
    chapitreId: 'chimie-orga-mecanismes',
    chapitreTitre: 'Chimie Organique : Substitutions, Éliminations & Additions',
    filieres: ['PC', 'PCSI', 'BCPST', 'PSI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours Commun INP & Mines-Télécom',
    dureeEstimeeMin: 20,
    enonce: 'On traite le $(2R)$-2-bromobutane pur par de l\'hydroxyde de sodium $\\mathrm{NaOH}$ dans deux conditions expérimentales distinctes :\n- Condition A : Réaction dans le diméthylsulfoxyde (DMSO, solvant aprotique polaire) à $25^\\circ\\mathrm{C}$.\n- Condition B : Réaction dans un mélange eau-éthanol (solvant protique polaire) à reflux modéré.\n1. Identifier les mécanismes prépondérants pour les conditions A et B en justifiant à partir de la nature du solvant, du nucléophile et du substrat.\n2. Prédire la configuration absolue $(R/S)$ et l\'activité optique du butan-2-ol obtenu dans chaque condition.\n3. Représenter l\'état de transition de la réaction A en convention de Cram.',
    hints: [
      'Le DMSO ne solvate pas les anions (pas de liaison hydrogène) : l\'ion hydroxyde $\\mathrm{HO}^-$ y est "nu" et extrêmement réactif $\\implies$ attaque concertée bimoléculaire.',
      'Un solvant protique stabilise le carbocation intermédiaire par solvatation dipolaire et liaisons $H$.',
      'Attention à l\'ordre CIP du groupe hydroxyle $-\\mathrm{OH}$ par rapport au brome $-\\mathrm{Br}$ pour déterminer la configuration absolue finale.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Identification des mécanismes réactionnels',
          explication: '- Condition A : Le $(2R)$-2-bromobutane est un substrat secondaire ($2^\\circ$). L\'ion $\\mathrm{HO}^-$ est un nucléophile fort, et le DMSO est un solvant aprotique polaire qui solvate les cations $\\mathrm{Na}^+$ sans affaiblir l\'anion $\\mathrm{HO}^-$. L\'attaque concertée bimoléculaire est ultra-favorable : mécanisme $S_N2$.\n- Condition B : Le solvant protique ($\mathrm{H_2O / EtOH}$) possède des liaisons $O-H$ qui piègent le nucléophile par liaisons hydrogène et assistent le départ du nucléofuge $\\mathrm{Br}^-$ en stabilisant le carbocation secondaire intermédiaire plan : mécanisme $S_N1$.'
        },
        {
          titre: '2. Stéréochimie et activité optique',
          explication: '- Condition A ($S_N2$) : L\'attaque se fait exclusivement à $180^\\circ$ du départ de $\\mathrm{Br}^-$ (inversion de Walden). Pour le réactif $(2R)$ : les priorités CIP sont $-\\mathrm{Br} (1) > -\\mathrm{CH_2CH_3} (2) > -\\mathrm{CH_3} (3) > -\\mathrm{H} (4)$. Pour le produit butan-2-ol, $-\\mathrm{OH}$ prend la priorité (1). La configuration s\'inverse stéréospécifiquement : on obtient le $(2S)$-butan-2-ol pur, optiquement actif (lévogyre).\n- Condition B ($S_N1$) : Le carbocation intermédiaire plan de géométrie $sp^2$ subit l\'attaque équiprobable de l\'eau sur ses deux faces (dessus/dessous). On obtient un mélange racémique $50/50$ de $(2R)$ et $(2S)$-butan-2-ol, donc inactif sur la lumière polarisée (pouvoir rotatoire nul $[\alpha] = 0$).'
        },
        {
          titre: '3. Représentation de l\'état de transition pentacoordonné',
          explication: 'Dans l\'état de transition de la $S_N2$, le carbone asymétrique est partiellement lié à la fois à $\\mathrm{HO}$ et à $\\mathrm{Br}$ : $[\\mathrm{HO}^{\\delta-} \\cdots C(\\mathrm{H})(\\mathrm{CH_3})(\\mathrm{C_2H_5}) \\cdots \\mathrm{Br}^{\\delta-}]^\\ddagger$. Les trois groupes $\\mathrm{H}$, $\\mathrm{CH_3}$ et $\\mathrm{C_2H_5}$ se trouvent dans un plan quasi perpendiculaire à l\'axe $\\mathrm{HO-C-Br}$.'
        }
      ],
      conclusion: 'Le choix du solvant (aprotique vs protique) pilote l\'orientation stéréochimique : inversion pure ($S_N2$) contre racémisation ($S_N1$).',
      reflexeDuCorrecteur: 'Toujours vérifier les règles CIP sur le produit final : ici l\'inversion de Walden donne bien $(S)$, car la priorité CIP relative du nucléophile entrant ($-\\mathrm{OH}$) est identique à celle du nucléofuge ($-\\mathrm{Br}$) vis-à-vis des autres groupements.'
    }
  },
  {
    id: 'exo-si-pendule-tec',
    title: 'Pendule Inversé Asservi & Théorème de l\'Énergie Cinétique',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-dynamique-solide',
    chapitreTitre: 'Dynamique & Énergétique du Solide (PFD & Théorèmes Globaux)',
    filieres: ['PSI', 'PCSI', 'MPSI', 'MP', 'MPI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours Centrale-Supélec & Mines-Ponts (PSI)',
    dureeEstimeeMin: 25,
    enonce: 'Un chariot de masse $M$ se déplace sans frottement le long d\'un axe horizontal $(Ox)$ dans le repère galiléen $\\mathcal{R}_0(O, \\vec{x}, \\vec{y}, \\vec{z})$. Une tige rigide homogène de masse $m$ et de longueur $2L$ est articulée en liaison pivot parfaite d\'axe $(A, \\vec{z})$ sur le chariot. La position du chariot est repérée par $x(t)$, et l\'angle d\'inclinaison de la tige par rapport à la verticale ascendante est repéré par $\\theta(t)$. Le moment d\'inertie de la tige par rapport à son centre de masse $G$ vaut $J_G = \\frac{1}{3} m L^2$.\n1. Déterminer la vitesse du centre de masse $G$ de la tige dans $\\mathcal{R}_0$ en fonction de $\\dot{x}, \\theta, \\dot{\\theta}$.\n2. Exprimer l\'énergie cinétique totale du système $\\{chariot + tige\\}$ dans $\\mathcal{R}_0$.\n3. Établir l\'équation différentielle non linéaire du mouvement en $\\theta(t)$ lorsque le chariot subit une accélération imposée $\\ddot{x}(t)$.',
    hints: [
      'Le centre de masse $G$ est situé à une distance $L$ du point $A$ : $\\vec{OG} = (x + L\\sin\\theta)\\vec{x} + L\\cos\\theta\\vec{y}$. Dérivez par rapport au temps.',
      'Pour la tige, appliquez le théorème de Koenig : $E_c(tige) = \\frac{1}{2} m v^2(G) + \\frac{1}{2} J_G \\dot{\\theta}^2$.',
      'Appliquez le théorème du moment dynamique en $A$ à la tige, ou le théorème de l\'énergie-puissance dans le repère barycentrique.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Cinématique du centre de masse',
          explication: 'Le vecteur position de $G$ dans le repère galiléen $\\mathcal{R}_0$ est :\n$$\\vec{OG} = (x(t) + L\\sin\\theta(t)) \\vec{x} + (L\\cos\\theta(t)) \\vec{y}$$\nEn dérivant par rapport au temps dans $\\mathcal{R}_0$ :\n$$\\vec{v}(G/\\mathcal{R}_0) = (\\dot{x} + L \\dot{\\theta} \\cos\\theta) \\vec{x} - (L \\dot{\\theta} \\sin\\theta) \\vec{y}$$\nLe carré de la norme vaut :\n$$v^2(G) = (\\dot{x} + L \\dot{\\theta} \\cos\\theta)^2 + (L \\dot{\\theta} \\sin\\theta)^2 = \\dot{x}^2 + L^2 \\dot{\\theta}^2 + 2 L \\dot{x} \\dot{\\theta} \\cos\\theta$$'
        },
        {
          titre: '2. Énergie cinétique totale',
          explication: '- Chariot en translation : $E_c(Chariot) = \\frac{1}{2} M \\dot{x}^2$.\n- Tige par le théorème de Koenig : $E_c(Tige) = \\frac{1}{2} m v^2(G) + \\frac{1}{2} J_G \\dot{\\theta}^2 = \\frac{1}{2} m (\\dot{x}^2 + L^2 \\dot{\\theta}^2 + 2 L \\dot{x} \\dot{\\theta} \\cos\\theta) + \\frac{1}{6} m L^2 \\dot{\\theta}^2$.\nComme $\\frac{1}{2} m L^2 + \\frac{1}{6} m L^2 = \\frac{2}{3} m L^2$ :',
          calculs: 'E_c^{tot} = \\frac{1}{2} (M + m) \\dot{x}^2 + \\frac{2}{3} m L^2 \\dot{\\theta}^2 + m L \\dot{x} \\dot{\\theta} \\cos\\theta'
        },
        {
          titre: '3. Équation différentielle du mouvement par le moment dynamique',
          explication: 'Appliquons le théorème du moment dynamique en $A$ à la tige dans $\\mathcal{R}_0$. Comme le point $A$ est mobile et accéléré ($\\vec{a}(A) = \\ddot{x}\\vec{x}$), la formule de transfert donne :\n$$\\vec{\\delta}_A = \\vec{\\delta}_G + \\vec{AG} \\wedge m\\vec{a}(G) = J_A \\ddot{\\theta}\\vec{z} + m L \\ddot{x}\\cos\\theta \\vec{z}$$\navec $J_A = J_G + m L^2 = \\frac{4}{3} m L^2$ d\'après le théorème de Huygens. La seule action mécanique à distance créant un moment en $A$ est la pesanteur $\\vec{P} = -m g \\vec{y}$ appliquée en $G$ :\n$$\\vec{M}_A(\\vec{P}) = (L\\sin\\theta\\vec{x} + L\\cos\\theta\\vec{y}) \\wedge (-m g \\vec{y}) = m g L \\sin\\theta \\vec{z}$$\nL\'égalité donne directement :',
          calculs: '\\frac{4}{3} m L^2 \\ddot{\\theta} + m L \\ddot{x} \\cos\\theta = m g L \\sin\\theta \\iff \\ddot{\\theta} + \\frac{3}{4L} \\ddot{x} \\cos\\theta - \\frac{3g}{4L} \\sin\\theta = 0'
        }
      ],
      conclusion: 'Au voisinage de la verticale haute ($\\theta \\approx 0$), l\'équation linéarisée devient $\\ddot{\\theta} - \\frac{3g}{4L}\\theta = -\\frac{3}{4L}\\ddot{x}$. Le pendule inversé est naturellement instable en boucle ouverte, mais stabilisable en boucle fermée par asservissement de l\'accélération du chariot $\\ddot{x}(t)$.',
      reflexeDuCorrecteur: 'Toujours faire attention au calcul du moment dynamique en un point accéléré : ne pas oublier le terme d\'accélération d\'entraînement $-m \\ddot{x} L \\cos\\theta$.'
    }
  },
  {
    id: 'exo-info-karatsuba',
    title: 'Multiplication Rapide de Karatsuba & Analyse par le Master Theorem',
    matiere: 'Informatique',
    chapitreId: 'info-diviser-pour-regner',
    chapitreTitre: 'Algorithmes Diviser pour Régner & Master Theorem',
    filieres: ['MPI', 'MP', 'PC', 'PSI', 'MPSI', 'PCSI'],
    annee: '1ère & 2ème année',
    difficulte: 3,
    origin: 'Oral X-ENS & Concours Mines-Ponts (MPI/Informatique)',
    dureeEstimeeMin: 25,
    enonce: 'On souhaite multiplier deux entiers de $n$ chiffres $X$ et $Y$.\n1. Rappeler la complexité de l\'algorithme de multiplication de l\'école primaire.\n2. En écrivant $X = A \\cdot 10^{n/2} + B$ et $Y = C \\cdot 10^{n/2} + D$, exprimer le produit $X \\cdot Y$ avec 4 multiplications d\'entiers de taille $n/2$. Quelle est alors la complexité obtenue ?\n3. Expliquer comment Anatoly Karatsuba (1960) réduit le nombre de multiplications à 3 seulement en calculant astucieusement $(A+B)(C+D)$.\n4. Poser la relation de récurrence vérifiée par la complexité $T(n)$ et déterminer sa complexité asymptotique exacte grâce au Master Theorem.',
    hints: [
      'Le produit s\'écrit $X Y = AC \\cdot 10^n + (AD + BC) \\cdot 10^{n/2} + BD$.',
      'Remarquez que $(A+B)(C+D) = AC + (AD+BC) + BD$, donc $AD+BC = (A+B)(C+D) - AC - BD$.',
      'Le Master Theorem s\'applique avec $a = 3$, $b = 2$, et un travail de combinaison en $\\Theta(n)$ pour les additions et décalages.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Méthode élémentaire (école primaire)',
          explication: 'Chaque chiffre de $X$ est multiplié par chaque chiffre de $Y$, soit $n \\times n = n^2$ multiplications élémentaires à un chiffre, plus la gestion des retenues et additions en $\\mathcal{O}(n^2)$. La complexité temporelle est donc quadratique :',
          calculs: 'T_{naif}(n) = \\Theta(n^2)'
        },
        {
          titre: '2. Découpage Diviser pour Régner naïf à 4 multiplications',
          explication: 'En découpant les entiers en deux moitiés de taille $n/2$ :\n$$X Y = A C \\cdot 10^n + (A D + B C) \\cdot 10^{n/2} + B D$$\nSi l\'on calcule récursivement $AC$, $AD$, $BC$, $BD$, la relation de récurrence s\'écrit $T(n) = 4 T(n/2) + \\Theta(n)$. Par le Master Theorem avec $a=4, b=2, d=1$, on a $\\log_2 4 = 2 > 1$, donc $T(n) = \\Theta(n^2)$, aucun gain par rapport à l\'école primaire !'
        },
        {
          titre: '3. L\'astuce algébrique de Karatsuba',
          explication: 'Karatsuba calcule seulement trois produits de taille $n/2$ :\n1. $P_1 = A \\times C$\n2. $P_2 = B \\times D$\n3. $P_3 = (A+B) \\times (C+D)$\nLe terme intermédiaire s\'obtient par simple soustraction :\n$$A D + B C = P_3 - P_1 - P_2$$\nLe résultat final est alors reconstitué par de simples additions et décalages (multiplications par puissances de 10) :',
          calculs: 'X Y = P_1 \\cdot 10^n + (P_3 - P_1 - P_2) \\cdot 10^{n/2} + P_2'
        },
        {
          titre: '4. Résolution par le Master Theorem',
          explication: 'L\'algorithme n\'effectue que 3 appels récursifs sur des entiers de taille $n/2$, et les additions/soustractions prennent un temps linéaire $\\Theta(n)$ :\n$$T(n) = 3 T(n/2) + \\Theta(n)$$\nIci $a = 3$, $b = 2$, et $f(n) = \\Theta(n^1)$, donc $d = 1$. Comme $\\log_2(3) \\approx 1{,}585 > 1 = d$, nous sommes dans le cas 1 du Master Theorem où le travail aux feuilles domine :',
          calculs: 'T(n) = \\Theta(n^{\\log_2 3}) \\approx \\Theta(n^{1{,}585})'
        }
      ],
      conclusion: 'L\'algorithme de Karatsuba brise la barrière quadratique $\\mathcal{O}(n^2)$ grâce à une astuce de factorisation algébrique, réduisant le coût pour des entiers de 1000 chiffres d\'un facteur supérieur à 10.',
      reflexeDuCorrecteur: 'Ne jamais oublier d\'expliciter la soustraction $P_3 - P_1 - P_2$ et de mentionner le coût linéaire $\\Theta(n)$ des additions et décalages.'
    }
  },
  {
    id: 'exo-filtre-pont-wien-oscillateur',
    title: 'Filtre sélectif & Oscillateur quasi-sinusoïdal à Pont de Wien',
    matiere: 'Physique',
    chapitreId: 'physique-electronique-filtrage',
    chapitreTitre: 'Électronique des Systèmes & Filtrage Linéaire',
    filieres: ['PC', 'PSI', 'MP', 'PCSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Commun Mines-Ponts (PC / PSI)',
    dureeEstimeeMin: 35,
    schema: {
      titre: 'Schéma électrique du pont de Wien avec rétroactions positive et négative',
      type: 'circuit-wien',
      legende: 'Filtre passe-bande sélectif $(R, C)$ sur l\'entrée non-inverseuse $(+)$ et pont diviseur résistif $(R_1, R_2)$ de contre-réaction sur l\'entrée inverseuse $(-)$.',
      donneesCles: [
        { label: 'Composants Wien', valeur: 'R = 10 kΩ, C = 10 nF' },
        { label: 'Gain statique amplificateur', valeur: 'A_v = 1 + R_2 / R_1' },
        { label: 'Pulsation propre théorique', valeur: 'ω_0 = 1 / (RC) = 10⁴ rad/s' },
        { label: 'Condition de Barkhausen', valeur: '|H(jω_0)| × A_v = 1, Arg = 0' }
      ]
    },
    enonce: 'En exploitant le schéma électrique ci-dessus :\n\n1. En analysant le pont diviseur d\'impédances formé par la branche $(R, C)$ série et la branche $(R, C)$ parallèle connectées à l\'entrée $(+)$, déterminer la fonction de transfert du filtre passif $\\underline{H}_{passif}(j\\omega) = \\frac{\\underline{u}_+(j\\omega)}{\\underline{u}_s(j\\omega)}$.\n2. Mettre cette fonction de transfert sous la forme canonique d\'un filtre passe-bande du 2nd ordre : $\\underline{H}_{passif}(j\\omega) = \\frac{H_0}{1 + j Q \\left( \\frac{\\omega}{\\omega_0} - \\frac{\\omega_0}{\\omega} \\right)}$. Identifier la valeur de $H_0$, la pulsation propre $\\omega_0$ et le facteur de qualité $Q$.\n3. On referme la boucle avec l\'AOP supposé idéal en régime linéaire. Déterminer le gain de la chaîne de contre-réaction $A_v = \\frac{u_s}{u_-}$ en fonction de $R_1$ et $R_2$.\n4. Énoncer la condition d\'oscillation de Barkhausen pour que le montage oscille spontanément à la pulsation $\\omega_0$. En déduire la condition sur le rapport des résistances $R_2 / R_1$.\n5. Comment assure-t-on expérimentalement la stabilisation de l\'amplitude sans distorsion harmonique ?',
    hints: [
      'L\'impédance de la branche série est $\\underline{Z}_s = R + \\frac{1}{jC\\omega} = \\frac{1 + jRC\\omega}{jC\\omega}$.',
      'L\'admittance de la branche parallèle est $\\underline{Y}_p = \\frac{1}{R} + jC\\omega = \\frac{1 + jRC\\omega}{R}$, donc $\\underline{Z}_p = \\frac{R}{1 + jRC\\omega}$.',
      'La formule du pont diviseur donne $\\underline{H}(j\\omega) = \\frac{\\underline{Z}_p}{\\underline{Z}_s + \\underline{Z}_p} = \\frac{1}{1 + \\underline{Z}_s \\underline{Y}_p}$.',
      'Pour Barkhausen : le gain de boucle ouvert $\\underline{T}(j\\omega_0) = A_v \\times \\underline{H}_{passif}(j\\omega_0) = 1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul de la fonction de transfert par pont diviseur',
          explication: 'Sur le schéma, le potentiel à la borne non-inverseuse $u_+$ s\'obtient par diviseur de tension sur la sortie $u_s$ :\n$$\\underline{u}_+ = \\underline{u}_s \\frac{\\underline{Z}_p}{\\underline{Z}_s + \\underline{Z}_p} = \\frac{\\underline{u}_s}{1 + \\underline{Z}_s / \\underline{Z}_p}$$\nOr $\\underline{Z}_s = R + \\frac{1}{jC\\omega}$ et $\\frac{1}{\\underline{Z}_p} = \\frac{1}{R} + jC\\omega$. Le produit vaut :\n$$\\underline{Z}_s / \\underline{Z}_p = \\left(R + \\frac{1}{jC\\omega}\\right)\\left(\\frac{1}{R} + jC\\omega\\right) = 1 + jRC\\omega + \\frac{1}{jRC\\omega} + 1 = 2 + j\\left(RC\\omega - \\frac{1}{RC\\omega}\\right)$$\nOn en déduit immédiatement la transmittance :',
          calculs: '\\underline{H}_{passif}(j\\omega) = \\frac{1}{3 + j\\left(RC\\omega - \\frac{1}{RC\\omega}\\right)} = \\frac{1/3}{1 + j\\frac{1}{3}\\left(RC\\omega - \\frac{1}{RC\\omega}\\right)}'
        },
        {
          titre: '2. Identification de la forme canonique passe-bande',
          explication: 'En posant $\\omega_0 = \\frac{1}{RC}$, on identifie terme à terme avec la forme normalisée :\n$$\\underline{H}_{passif}(j\\omega) = \\frac{H_0}{1 + j Q \\left(\\frac{\\omega}{\\omega_0} - \\frac{\\omega_0}{\\omega}\\right)}$$\nOn obtient donc :\n- Gain maximal à la résonance : $H_0 = \\frac{1}{3}$ (atténuation par 3)\n- Pulsation propre : $\\omega_0 = \\frac{1}{RC} = \\frac{1}{10^4 \\times 10^{-8}} = 10^4\\,\\mathrm{rad\\cdot s^{-1}}$ (soit $f_0 \\approx 1{,}59\\,\\mathrm{kHz}$)\n- Facteur de qualité : $Q = \\frac{1}{3} \\approx 0{,}33$ (bande passante large $\\Delta\\omega = 3\\omega_0$)'
        },
        {
          titre: '3. Amplification de la chaîne de réaction',
          explication: 'L\'AOP est bouclé sur sa borne inverseuse par le diviseur de tension $(R_1, R_2)$. En régime linéaire ($u_+ = u_-$) :\n$$\\underline{u}_- = \\underline{u}_s \\frac{R_1}{R_1 + R_2} \\implies A_v = \\frac{u_s}{u_-} = 1 + \\frac{R_2}{R_1}$$'
        },
        {
          titre: '4. Condition d\'oscillation de Barkhausen',
          explication: 'Le gain de boucle s\'écrit $\\underline{T}(j\\omega) = A_v \\times \\underline{H}_{passif}(j\\omega)$. Pour que des oscillations sinusoïdales permanentes non nulles existent en l\'absence de consigne extérieure, la condition de Barkhausen impose $\\underline{T}(j\\omega_{osc}) = 1$ :\n- Phase nulle : $\\mathrm{Arg}(\\underline{H}_{passif}) = 0 \\implies \\omega_{osc} = \\omega_0 = \\frac{1}{RC}$.\n- Module unitaire : $A_v \\times |\\underline{H}_{passif}(j\\omega_0)| = 1 \\implies \\left(1 + \\frac{R_2}{R_1}\\right) \\times \\frac{1}{3} = 1$.\nOn en tire la condition canonique absolue :',
          calculs: '1 + \\frac{R_2}{R_1} = 3 \\iff R_2 = 2 R_1'
        },
        {
          titre: '5. Non-linéarité et stabilisation de l\'amplitude',
          explication: 'Si $R_2 / R_1$ était strictement égal à 2, les oscillations ne démarreraient pas (bruit thermique insuffisant). En pratique, on choisit au démarrage $R_2 / R_1 > 2$ pour que les pôles soient à partie réelle positive (croissance exponentielle de l\'amplitude). Pour stabiliser l\'amplitude sans écrêtage violent par saturation des rails d\'alimentation ($\\pm V_{sat}$), on remplace une partie de $R_2$ par un élément non linéaire à résistance dynamique variable (ampoule à filament CTN, thermistance, ou paire de diodes tête-bêche).'
        }
      ],
      conclusion: 'Le pont de Wien illustre le rôle clé de la rétroaction positive sélective combinée à la contre-réaction stabilisatrice. Le schéma permet d\'extraire directement le modèle en boucle fermée.',
      reflexeDuCorrecteur: 'Toujours mentionner l\'atténuation $H_0 = 1/3$ à la résonance et la condition $R_2 = 2 R_1$ pour compenser exactement ce facteur.'
    }
  },
  {
    id: 'exo-michelson-coin-dair',
    title: 'Interféromètre de Michelson : Configuration en Coin d\'Air & Franges Rectilignes',
    matiere: 'Physique',
    chapitreId: 'physique-optique-interferences',
    chapitreTitre: 'Optique Ondulatoire & Interférences Lumineuses',
    filieres: ['PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec (PC / MP)',
    dureeEstimeeMin: 30,
    schema: {
      titre: 'Schéma optique de l\'interféromètre de Michelson réglé en coin d\'air',
      type: 'michelson-optique',
      legende: 'Source laser $\\lambda_0$, séparatrice $S_p$, miroir fixe $M_1$ et miroir incliné $M_2$ formant un angle dièdre $\\alpha \\ll 1$. Écran d\'observation $E$.',
      donneesCles: [
        { label: 'Longueur d\'onde laser', valeur: 'λ_0 = 632,8 nm (He-Ne)' },
        { label: 'Angle du coin d\'air', valeur: 'α = 2,5 × 10⁻⁴ rad' },
        { label: 'Différence de marche', valeur: 'δ(x) = 2 α x' },
        { label: 'Interfrange théorique', valeur: 'i = λ_0 / (2 α) = 1,27 mm' }
      ]
    },
    enonce: 'En vous référant au schéma optique de l\'interféromètre de Michelson présenté ci-dessus :\n\n1. Définir le rôle de la lame séparatrice $S_p$ et préciser pourquoi elle sépare l\'onde incidente par division d\'amplitude.\n2. Le miroir $M_1$ est perpendiculaire à l\'axe optique tandis que le miroir $M_2$ est incliné d\'un petit angle $\\alpha \\ll 1$. Expliquer la notion d\'image miroir $M\'_2$ et montrer que le système équivalent est une lame d\'air d\'épaisseur variable $e(x) = \\alpha x$ (coin d\'air).\n3. Établir l\'expression de la différence de marche $\\delta(x)$ entre les deux rayons émergeant en un point d\'abscisse $x$ sous incidence quasi-normale.\n4. Donner l\'expression du profil d\'éclairement $I(x)$ sur l\'écran en fonction de l\'éclairement moyen $I_0$. Préciser la forme géométrique des franges d\'interférence observées et leur localisation.\n5. Calculer numériquement l\'interfrange $i$. Si l\'on translate le miroir $M_1$ d\'une distance $d = 15\\,\\mu\\mathrm{m}$ selon son axe sans modifier $\\alpha$, que deviennent les franges sur l\'écran ?',
    hints: [
      'Dans le coin d\'air sous incidence quasi-normale, la différence de marche entre les deux réflexions est $\\delta = 2 e(x) = 2 \\alpha x$.',
      'L\'ordre d\'interférence $p(x) = \\delta(x) / \\lambda_0$. L\'interfrange est la distance $\\Delta x = i$ séparant deux franges brillantes consécutives ($\\Delta p = 1$).',
      'Une translation de $M_1$ rajoute une épaisseur constante $e_0 = d$, décalant les franges sans modifier l\'interfrange $i$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Rôle de la séparatrice $S_p$ & Division d\'amplitude',
          explication: 'La séparatrice est une lame semi-réfléchissante inclinée à $45^\\circ$ qui divise le front d\'onde incident en deux trains d\'ondes cohérents d\'amplitudes égales : un faisceau réfléchi vers $M_1$ et un faisceau transmis vers $M_2$. Contrairement aux fentes d\'Young (division du front d\'onde), il s\'agit ici d\'une division d\'amplitude.'
        },
        {
          titre: '2. Modèle équivalent du coin d\'air',
          explication: 'En observant depuis la voie de sortie vers l\'écran, la séparatrice donne de $M_2$ une image virtuelle $M\'_2$. Les deux miroirs apparents $M_1$ et $M\'_2$ forment un angle dièdre $\\alpha$. L\'épaisseur d\'air séparant ces deux surfaces planes en un point d\'abscisse $x$ comptée depuis l\'arête du coin s\'écrit :\n$$e(x) = \\alpha x$$'
        },
        {
          titre: '3. Expression de la différence de marche $\\delta(x)$',
          explication: 'Pour une onde arrivant sous incidence quasi-normale ($i \\approx 0$), le rayon réfléchi sur $M\'_2$ parcourt un aller-retour supplémentaire de distance $2 e(x)$. En tenant compte des réflexions vitreuses symétriques sur la séparatrice (ou en compensant les déphasages), la différence de marche s\'exprime simplement par :',
          calculs: '\\delta(x) = 2 e(x) = 2 \\alpha x'
        },
        {
          titre: '4. Éclairement de Fresnel & Franges rectilignes localisées',
          explication: 'D\'après la formule de Fresnel pour deux ondes cohérentes de même intensité $I_0/2$ :\n$$I(x) = I_0 \\left( 1 + \\cos\\left(\\frac{2\\pi \\delta(x)}{\\lambda_0}\\right) \\right) = I_0 \\left( 1 + \\cos\\left( \\frac{4\\pi \\alpha x}{\\lambda_0} \\right) \\right)$$\n- Forme des franges : Les lignes d\'égale différence de marche $\\delta(x) = \\mathrm{cste}$ correspondent à $x = \\mathrm{cste}$ : ce sont des franges rectilignes, équidistantes et parallèles à l\'arête du coin d\'air.\n- Localisation : Les franges sont localisées au voisinage immédiat des miroirs (sur la surface du coin d\'air). Pour les observer nettes sur l\'écran, il faut projeter le plan des miroirs à l\'aide d\'une lentille convergente.'
        },
        {
          titre: '5. Calcul de l\'interfrange et effet d\'une translation',
          explication: 'Deux franges brillantes consécutives correspondent à une variation d\'ordre $\\Delta p = 1$, soit $\\frac{2\\alpha \\cdot i}{\\lambda_0} = 1$ :\n$$i = \\frac{\\lambda_0}{2\\alpha} = \\frac{632{,}8 \\times 10^{-9}}{2 \\times 2{,}5 \\times 10^{-4}} = 1{,}266 \\times 10^{-3}\\,\\mathrm{m} \\approx 1{,}27\\,\\mathrm{mm}$$\nLorsqu\'on translate le miroir $M_1$ d\'une distance $d = 15\\,\\mu\\mathrm{m}$, la nouvelle différence de marche devient $\\delta(x) = 2d + 2\\alpha x$. L\'interfrange $i = \\frac{\\lambda_0}{2\\alpha}$ reste rigoureusement inchangé car il ne dépend que de l\'angle $\\alpha$. En revanche, l\'arête fictive du coin ($\\,\\delta=0$) se translate de $\\Delta x = -d / \\alpha = -15\\,\\mu\\mathrm{m} / (2{,}5\\times 10^{-4}) = -60\\,\\mathrm{mm}$ : les franges défilent sur l\'écran à raison de $N = 2d/\\lambda_0 \\approx 47{,}4$ franges.'
        }
      ],
      conclusion: 'Le réglage en coin d\'air produit des franges rectilignes d\'égale épaisseur localisées sur le miroir, avec un interfrange $i = \\lambda_0 / (2\\alpha)$ ultra sensible aux infimes variations angulaires.',
      reflexeDuCorrecteur: 'Ne jamais oublier le facteur 2 dans $\\delta = 2\\alpha x$ (lumière réfléchie en aller-retour) et préciser impérativement que les franges du coin d\'air sont localisées sur les miroirs.'
    }
  },
  {
    id: 'exo-pourbaix-fer-corrosion',
    title: 'Diagramme Potentiel-pH du Fer & Mécanismes de Corrosion / Passivation',
    matiere: 'Chimie',
    chapitreId: 'chimie-equilibres-redox-solutions',
    chapitreTitre: 'Oxydoréduction, Diagrammes E-pH & Corrosion',
    filieres: ['PC', 'PSI', 'BCPST', 'PCSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Centrale-Supélec & Mines-Ponts (PC/PSI)',
    dureeEstimeeMin: 35,
    schema: {
      titre: 'Diagramme E-pH du Fer à 298 K (Concentration de tracé C_tr = 10⁻² mol/L)',
      type: 'pourbaix-fer',
      legende: 'Domaines d\'immunité ($Fe(s)$), de corrosion ($Fe^{2+}, Fe^{3+}$), de passivation ($Fe(OH)_2, Fe(OH)_3$) et droites de stabilité thermodynamique de l\'eau (en pointillés bleus).',
      donneesCles: [
        { label: 'Concentration de tracé', valeur: 'C_tr = 1,0 × 10⁻² mol/L' },
        { label: 'E°(Fe²⁺/Fe)', valeur: '-0,44 V vs ESH' },
        { label: 'E°(Fe³⁺/Fe²⁺)', valeur: '+0,77 V vs ESH' },
        { label: 'Pente frontière redox/acide', valeur: '-0,059 × (h / n) V/pH' }
      ]
    },
    enonce: 'À partir de l\'analyse directe du diagramme potentiel-pH du fer reproduit ci-dessus :\n\n1. Attribuer rigoureusement à chaque zone notée (A, B, C, D, E) l\'espèce chimique correspondante parmi $\\{\\mathrm{Fe}(s), \\mathrm{Fe}^{2+}, \\mathrm{Fe}^{3+}, \\mathrm{Fe(OH)}_2(s), \\mathrm{Fe(OH)}_3(s)\\}$. Justifier par le nombre d\'oxydation et le caractère acido-basique.\n2. Écrire la demi-équation d\'oxydoréduction de la frontière (1) séparant les domaines $Fe^{2+}$ et $Fe(s)$. En appliquant la loi de Nernst à 298 K pour $C_{tr} = 10^{-2}\\,\\mathrm{mol\\cdot L^{-1}}$, calculer le potentiel de frontière $E_1$.\n3. Écrire l\'équation de précipitation de l\'hydroxyde de fer(II) correspondant à la frontière verticale (2). En déduire le produit de solubilité $K_{s2}$ de $\\mathrm{Fe(OH)}_2(s)$ sachant que la frontière verticale se situe à $\\mathrm{pH} = 7{,}5$.\n4. Déterminer l\'équation de la frontière oblique séparant $\\mathrm{Fe}^{2+}$ et $\\mathrm{Fe(OH)}_3(s)$. Justifier la valeur de sa pente en $\\mathrm{V/pH}$.\n5. Superposition avec le domaine de stabilité de l\'eau : Le fer métallique est-il thermodynamiquement stable dans une eau aérée ($P_{O_2} = 0{,}2\\,\\mathrm{bar}$) à $\\mathrm{pH} = 7$ ? Que se passe-t-il dans une eau désaérée ? Définir le principe de la protection cathodique par anode sacrificielle de zinc ($E^\\circ(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) = -0{,}76\\,\\mathrm{V}$).',
    hints: [
      'Plus le potentiel $E$ est élevé, plus le nombre d\'oxydation de l\'élément fer est élevé ($+III > +II > 0$).',
      'Plus le pH est basique (élevé), plus les formes précipitées hydroxyde $\\mathrm{Fe(OH)}_n$ sont stables.',
      'Une frontière verticale correspond à une réaction purement acido-basique ou de précipitation (sans échange d\'électrons).',
      'Le fer s\'oxyde spontanément si le potentiel du couple oxydant ($H^+/H_2$ ou $O_2/H_2O$) est supérieur au potentiel de l\'espèce ferrique/ferreuse.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Attribution des domaines d\'oxydoréduction et de pH',
          explication: 'Les nombres d\'oxydation du fer sont : n.o. = 0 pour $\\mathrm{Fe}(s)$, $+II$ pour $\\mathrm{Fe}^{2+}$ et $\\mathrm{Fe(OH)}_2$, $+III$ pour $\\mathrm{Fe}^{3+}$ et $\\mathrm{Fe(OH)}_3$.\n- À bas potentiel ($E < -0{,}44\\,\\mathrm{V}$), le fer est au degré 0 : domaine inférieur = $\\mathrm{Fe}(s)$ (Immunité).\n- À pH acide et potentiel modéré : $\\mathrm{Fe}^{2+}$ (aq).\n- À pH acide et potentiel élevé : $\\mathrm{Fe}^{3+}$ (aq).\n- En milieu basique : précipitation des hydroxydes insolubles, $\\mathrm{Fe(OH)}_2$ au degré $+II$ et $\\mathrm{Fe(OH)}_3$ au degré $+III$ (Passivation).'
        },
        {
          titre: '2. Calcul du potentiel de la frontière (1) $Fe^{2+} / Fe(s)$',
          explication: 'La demi-équation rédox est $\\mathrm{Fe}^{2+} + 2e^- \\rightleftharpoons \\mathrm{Fe}(s)$. D\'après Nernst à 298 K :\n$$E = E^\\circ(\\mathrm{Fe}^{2+}/\\mathrm{Fe}) + \\frac{0{,}059}{2} \\log[\\mathrm{Fe}^{2+}]$$\nÀ la frontière de tracé, $[\\mathrm{Fe}^{2+}] = C_{tr} = 10^{-2}\\,\\mathrm{mol\\cdot L^{-1}}$ :\n$$E_1 = -0{,}44 + 0{,}0295 \\times (-2) = -0{,}44 - 0{,}059 = -0{,}499\\,\\mathrm{V} \\approx -0{,}50\\,\\mathrm{V}$$'
        },
        {
          titre: '3. Détermination du produit de solubilité $K_{s2}$',
          explication: 'La frontière verticale correspond à la précipitation : $\\mathrm{Fe}^{2+} + 2 \\mathrm{HO}^- \\rightleftharpoons \\mathrm{Fe(OH)}_2(s)$. À la frontière $\\mathrm{pH} = 7{,}5$, on a $[\\mathrm{HO}^-] = 10^{-(14 - 7{,}5)} = 10^{-6{,}5}\\,\\mathrm{mol\\cdot L^{-1}}$ et $[\\mathrm{Fe}^{2+}] = C_{tr} = 10^{-2}\\,\\mathrm{mol\\cdot L^{-1}}$. Le produit de solubilité vaut donc :',
          calculs: 'K_{s2} = [\\mathrm{Fe}^{2+}] [\\mathrm{HO}^-]^2 = 10^{-2} \\times (10^{-6{,}5})^2 = 10^{-15}'
        },
        {
          titre: '4. Pente de la frontière $Fe(OH)_3(s) / Fe^{2+}$',
          explication: 'Écrivons la demi-équation rédox faisant intervenir les ions $H^+$ :\n$$\\mathrm{Fe(OH)}_3(s) + 3 \\mathrm{H}^+ + e^- \\rightleftharpoons \\mathrm{Fe}^{2+} + 3 \\mathrm{H}_2O$$\nLa loi de Nernst s\'écrit :\n$$E = E^\\circ\' + \\frac{0{,}059}{1} \\log\\left( \\frac{[\\mathrm{H}^+]^3}{[\\mathrm{Fe}^{2+}]} \\right) = E^\\circ\'\' - 3 \\times 0{,}059 \\,\\mathrm{pH} = E^\\circ\'\' - 0{,}177 \\,\\mathrm{pH}$$\nLa pente théorique de la frontière est donc de $-0{,}177\\,\\mathrm{V/pH}$, ce qui correspond exactement au tracé incliné observé.'
        },
        {
          titre: '5. Corrosion et protection cathodique par anode sacrificielle',
          explication: '- Eau aérée à pH 7 : Le couple de réduction de l\'oxygène $O_2/H_2O$ présente un potentiel $E(O_2/H_2O) = 1{,}23 - 0{,}059 \\times 7 \\approx +0{,}82\\,\\mathrm{V}$, bien supérieur au domaine du fer. Le fer s\'oxyde spontanément en rouille $\\mathrm{Fe(OH)}_3$ (corrosion sévère).\n- Eau désaérée à pH 7 : Le couple $H^+/H_2$ présente un potentiel $E(H^+/H_2) = -0{,}059 \\times 7 = -0{,}41\\,\\mathrm{V}$, qui est supérieur à $E(Fe) \\approx -0{,}50\\,\\mathrm{V}$. Même sans oxygène, le fer est attaqué avec dégagement de dihydrogène gazeux.\n- Protection cathodique : On connecte une masse de zinc ($E^\\circ = -0{,}76\\,\\mathrm{V}$) à la structure en acier. Le zinc, plus réducteur, s\'oxyde préférentiellement ($\\mathrm{Zn} \\to \\mathrm{Zn}^{2+} + 2e^-$) et impose au fer un potentiel situé dans sa zone d\'immunité thermodynamique ($E < -0{,}50\\,\\mathrm{V}$).'
        }
      ],
      conclusion: 'Le diagramme de Pourbaix permet de prédire les risques de corrosion aqueuse et de concevoir des systèmes de protection électrochimique (galvanisation, anodes sacrificielles).',
      reflexeDuCorrecteur: 'Toujours expliciter le nombre d\'électrons et de protons échangés pour justifier la pente de Nernst : pente = $-0{,}059 \\times \\frac{p}{n}$ en V/pH.'
    }
  },
  {
    id: 'exo-stereochimie-elimination-newman',
    title: 'Stéréochimie & Mécanisme de l\'Élimination Bimoléculaire E2 en Projection de Newman',
    matiere: 'Chimie',
    chapitreId: 'chimie-organique-stereochimie',
    chapitreTitre: 'Stéréochimie & Réactivité Organique',
    filieres: ['PC', 'PCSI', 'BCPST'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours ENS / Mines-Ponts (PC)',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Projection de Newman du (2R,3R)-3-bromo-2-phénylbutane le long de l\'axe C2-C3',
      type: 'conformation-newman',
      legende: 'Conformation décalée montrant l\'angle dièdre de 180° anti-périplanaire entre l\'hydrogène $H_\\beta$ et le groupe partant brome $Br$, condition impérative pour l\'état de transition de la réaction E2.',
      donneesCles: [
        { label: 'Substrat', valeur: '(2R, 3R)-3-bromo-2-phénylbutane' },
        { label: 'Réactif basique', valeur: 'tert-butylate de potassium (t-BuOK)' },
        { label: 'Condition géométrique', valeur: 'Anti-coplanarité H-C-C-Br (dièdre θ = 180°)' },
        { label: 'Stéréospécificité', valeur: 'Obtention exclusive de l\'alcène (Z) ou (E)' }
      ]
    },
    enonce: 'On étudie la réaction d\'élimination induite par une base forte encombrée (le tert-butylate de potassium $t\\text{-BuO}^- \\mathrm{K}^+$) sur le diastéréoisomère $(2R, 3R)$-3-bromo-2-phénylbutane.\n\n1. En exploitant la projection axiale de Newman fournie sur le schéma, identifier le carbone porteur du brome ($C_\\alpha$) et le carbone adjacent porteur du proton arrachable ($C_\\beta$).\n2. Rappeler les caractéristiques cinétiques et mécanistiques d\'une élimination de type $E2$ (ordre global, concourance des ruptures/formations de liaisons).\n3. Pourquoi l\'état de transition d\'une élimination $E2$ requiert-il une géométrie rigoureusement anti-périplanaire (angle dièdre de $180^\\circ$) entre la liaison $C-H$ et la liaison $C-Br$ ? Justifier par le recouvrement des orbitales frontières $\\sigma_{C-H}$ et $\\sigma^*_{C-Br}$.\n4. À partir de la conformation représentée sur le schéma, déterminer la configuration géométrique ($(E)$ ou $(Z)$) de l\'alcène issu de cette élimination stéréospécifique. Justifier rigoureusement par les règles de Cahn-Ingold-Prelog (CIP).\n5. Quel alcène obtiendrait-on en partant de l\'isomère méso $(2R, 3S)$ ? En déduire pourquoi cette réaction est qualifiée de stéréospécifique.',
    hints: [
      'Dans la projection de Newman, le carbone de devant est lié à $H$, $CH_3$, $Ph$, et le carbone arrière est lié à $H$, $CH_3$, $Br$.',
      'Pour l\'état de transition $E2$, l\'arrachement du proton par la base injecte le doublet $\\sigma_{C-H}$ dans l\'orbitale antiliante $\\sigma^*_{C-Br}$, ce qui impose un alignement colinéaire des lobes à $180^\\circ$.',
      'Lors de l\'élimination concertée, les substituants situés du même côté dans la projection de Newman se retrouvent du même côté de la double liaison formée.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Analyse de la formule et repérage des carbones stéréogènes',
          explication: 'Sur la projection de Newman, le carbone $C_2$ (en avant) porte le groupe phényle $Ph$, un méthyle $CH_3$ et l\'hydrogène $H$. Le carbone $C_3$ (en arrière) porte le brome sortant $Br$, un méthyle $CH_3$ et un hydrogène $H$. C\'est une élimination $1,2$ conduisant à un alcène tétrasubstitué/trisubstitué : le 2-phénylbut-2-ène.'
        },
        {
          titre: '2. Mécanisme concerté de la réaction E2',
          explication: 'L\'élimination bimoléculaire $E2$ se déroule en une seule étape élémentaire concertée :\n- La base $t\\text{-BuO}^-$ arrache le proton $H$ acide sur le carbone $C_\\beta$.\n- Le doublet de la liaison $C-H$ bascule pour former la double liaison $\\pi$.\n- L\'ion bromure $Br^-$ quitte la molécule en emportant son doublet.\nLa loi de vitesse est d\'ordre 2 global : $v = k [\\text{Substrat}] [\\text{Base}]$.'
        },
        {
          titre: '3. Justification orbitalaire de l\'anti-périplanarité',
          explication: 'Le doublet liant $\\sigma_{C-H}$ doit recouvrir en phase l\'orbitale antiliante vide $\\sigma^*_{C-Br}$ pour stabiliser l\'état de transition et provoquer l\'expulsion du nucléofuge. Ce recouvrement orbitalaire maximal n\'est possible que si les quatre atomes $H-C_\\beta-C_\\alpha-Br$ sont coplanaires avec un angle dièdre de $180^\\circ$ (disposition anti, qui minimise également l\'encombrement stérique entre la base entrante et le groupe partant).'
        },
        {
          titre: '4. Détermination de la stéréochimie du produit formé',
          explication: 'Plaçons le substrat dans la conformation anti-périplanaire requise (conformation du schéma) :\n- Sur $C_2$, les groupes $Ph$ et $CH_3$ sont figés dans l\'espace.\n- Sur $C_3$, le groupe $CH_3$ et l\'hydrogène restant sont figés.\nLorsque la double liaison plane se forme, le groupe $Ph$ (priorité 1 sur $C_2$) se retrouve du côté opposé au groupe $CH_3$ (priorité 1 sur $C_3$). Les deux groupes prioritaires $Ph$ et $CH_3$ sont donc situés de part et d\'autre du plan de la double liaison :\nOn obtient donc exclusivement le $(E)$-2-phénylbut-2-ène.'
        },
        {
          titre: '5. Stéréospécificité et comparaison avec le diastéréoisomère $(2R, 3S)$',
          explication: 'Si l\'on part de l\'autre diastéréoisomère $(2R, 3S)$, la mise en position anti-coplanaire place les groupes prioritaires du même côté : on obtient alors à $100\\%$ le $(Z)$-2-phénylbut-2-ène.\nDéfinition : Une réaction est dite stéréospécifique lorsque deux diastéréoisomères de départ réagissent selon le même mécanisme pour donner chacun un stéréoisomère distinct sans mélange.'
        }
      ],
      conclusion: 'La projection de Newman est l\'outil indispensable pour prédire sans erreur le stéréoisomère issu d\'une réaction sous contrôle stéréochimique concerté.',
      reflexeDuCorrecteur: 'Toujours dessiner la projection de Newman dans la conformation anti-coplanaire (angle dièdre de $180^\\circ$ entre $H$ et le partant) avant de déterminer la géométrie $Z/E$ finale.'
    }
  },
  {
    id: 'exo-si-fermeture-bielle-manivelle',
    title: 'Compresseur à Bielle-Manivelle : Fermeture Géométrique & Loi Entrée-Sortie Cinématique',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-cinematique-mouvements',
    chapitreTitre: 'Cinématique du Solide & Fermetures Géométriques',
    filieres: ['PSI', 'MP', 'MPSI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours Centrale-Supélec / CCINP (TSI / PSI / MP)',
    dureeEstimeeMin: 35,
    schema: {
      titre: 'Schéma cinématique du mécanisme bielle-manivelle dans le repère galiléen',
      type: 'bielle-manivelle',
      legende: 'Manivelle motrice $OA$ de rayon $R$, bielle $AB$ de longueur $L$, piston translatant selon $\\vec{x}_0$ à la position $x(t)$. Angles $\\theta(t) = \\omega t$ et $\\beta(t)$.',
      donneesCles: [
        { label: 'Rayon manivelle', valeur: 'R = 50 mm' },
        { label: 'Longueur bielle', valeur: 'L = 150 mm (rapport λ = R/L = 1/3)' },
        { label: 'Vitesse de rotation motrice', valeur: 'ω = dθ/dt = 300 rad/s (~2865 tr/min)' },
        { label: 'Course totale du piston', valeur: 'C = 2 R = 100 mm' }
      ]
    },
    enonce: 'Sur le schéma cinématique du compresseur à bielle-manivelle reproduit ci-dessus, le bâti est noté (0), la manivelle (1), la bielle (2) et le piston (3).\n- Liaison pivot en $O$ entre (0) et (1), avec $\\vec{OA} = R \\vec{u}_1$ où $\\vec{u}_1 = \\cos\\theta \\vec{x}_0 + \\sin\\theta \\vec{y}_0$.\n- Liaison pivot en $A$ entre (1) et (2), avec $\\vec{AB} = L \\vec{u}_2$ où $\\vec{u}_2 = \\cos\\beta \\vec{x}_0 - \\sin\\beta \\vec{y}_0$.\n- Liaison glissière d\'axe $(O, \\vec{x}_0)$ entre (3) et (0), avec $\\vec{OB} = x(t) \\vec{x}_0$.\n\n1. Écrire la relation vectorielle de fermeture géométrique de la chaîne cinématique fermée $(0-1-2-3-0)$.\n2. En projetant cette équation vectorielle sur les axes $\\vec{x}_0$ et $\\vec{y}_0$, établir le système d\'équations scalaires reliant $x(t)$, $\\theta(t)$ et $\\beta(t)$.\n3. En déduire la relation liant l\'angle de bielle $\\beta$ à l\'angle moteur $\\theta$. Montrer que sous l\'hypothèse usuelle $\\lambda = R/L \\ll 1$, $\\cos\\beta \\approx 1 - \\frac{\\lambda^2}{2} \\sin^2\\theta$.\n4. En dérivant la fermeture géométrique par rapport au temps, exprimer la vitesse instantanée de translation du piston $v(t) = \\dot{x}(t)$ en fonction de $R, \\omega, \\theta$ et $\\beta$.\n5. Déterminer les positions des points morts haut (PMH) et bas (PMB). Que vaut l\'accélération du piston au PMH ?',
    hints: [
      'La relation de Chasles donne $\\vec{OB} = \\vec{OA} + \\vec{AB}$.',
      'La projection sur $\\vec{y}_0$ donne immédiatement la relation angulaire $R \\sin\\theta - L \\sin\\beta = 0$.',
      'Pour la vitesse, dériver $x(t) = R \\cos\\theta + L \\cos\\beta$ en utilisant $\\frac{\\mathrm{d}}{\\mathrm{d}t}(\\cos\\beta) = -\\dot{\\beta} \\sin\\beta$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation vectorielle de fermeture géométrique',
          explication: 'En appliquant la relation de Chasles dans la boucle fermée de solides :\n$$\\vec{OA} + \\vec{AB} + \\vec{BO} = \\vec{0} \\iff \\vec{OB} = \\vec{OA} + \\vec{AB}$$\nAvec les paramétrages scalaires :\n$$x(t) \\vec{x}_0 = R \\vec{u}_1 + L \\vec{u}_2$$'
        },
        {
          titre: '2. Projection sur le repère cartésien lié au bâti',
          explication: 'Projetons sur l\'axe vertical $\\vec{y}_0$ :\n$$0 = R \\sin\\theta - L \\sin\\beta \\implies \\sin\\beta = \\frac{R}{L} \\sin\\theta = \\lambda \\sin\\theta$$\nProjetons sur l\'axe horizontal de glissière $\\vec{x}_0$ :\n$$x(t) = R \\cos\\theta + L \\cos\\beta$$'
        },
        {
          titre: '3. Approximation aux petits angles pour $\\lambda \\ll 1$',
          explication: 'Comme $\\lambda = R/L = 1/3 < 1$, on a $\\cos\\beta = \\sqrt{1 - \\sin^2\\beta} = \\sqrt{1 - \\lambda^2 \\sin^2\\theta}$. D\'après le développement limité $(1 - u)^{1/2} \\approx 1 - \\frac{u}{2}$ :\n$$\\cos\\beta \\approx 1 - \\frac{\\lambda^2}{2} \\sin^2\\theta = 1 - \\frac{\\lambda^2}{4}(1 - \\cos 2\\theta)$$\nLa position approchée du piston s\'écrit donc :',
          calculs: 'x(t) \\approx L\\left(1 - \\frac{\\lambda^2}{4}\\right) + R \\cos\\theta + \\frac{R \\lambda}{4} \\cos(2\\theta)'
        },
        {
          titre: '4. Vitesse instantanée de translation du piston',
          explication: 'En dérivant $x(t)$ par rapport au temps avec $\\dot{\\theta} = \\omega$ et $\\sin\\beta = \\lambda \\sin\\theta$ :\n$$\\dot{x}(t) = -R \\omega \\sin\\theta - L \\dot{\\beta} \\sin\\beta$$\nEn dérivant $\\sin\\beta = \\lambda \\sin\\theta$, on a $\\dot{\\beta} \\cos\\beta = \\lambda \\omega \\cos\\theta$, d\'où $L \\dot{\\beta} \\sin\\beta = L \\frac{\\lambda \\omega \\cos\\theta}{\\cos\\beta} (\\lambda \\sin\\theta) = R \\omega \\lambda \\frac{\\sin\\theta \\cos\\theta}{\\cos\\beta} = R \\omega \\frac{\\lambda \\sin(2\\theta)}{2 \\cos\\beta}$.\nAu premier ordre en $\\lambda$ :',
          calculs: 'v(t) = \\dot{x}(t) \\approx -R \\omega \\left( \\sin\\theta + \\frac{\\lambda}{2} \\sin(2\\theta) \\right)'
        },
        {
          titre: '5. Points morts et accélération maximale',
          explication: '- Point Mort Haut (PMH) : $\\theta = 0$, $x_{max} = R + L = 200\\,\\mathrm{mm}$, vitesse nulle $v = 0$.\n- Point Mort Bas (PMB) : $\\theta = \\pi$, $x_{min} = L - R = 100\\,\\mathrm{mm}$, course $C = x_{max} - x_{min} = 2R = 100\\,\\mathrm{mm}$.\n- Accélération au PMH : en dérivant $v(t)$ :\n$$a(t) = \\ddot{x}(t) \\approx -R \\omega^2 (\\cos\\theta + \\lambda \\cos(2\\theta))$$\nPour $\\theta = 0$ : $a_{PMH} = -R \\omega^2 (1 + \\lambda) = -0{,}05 \\times (300)^2 \\times (1 + 1/3) = -6000\\,\\mathrm{m\\cdot s^{-2}} \\approx -612\\,g$ !\nCette accélération phénoménale illustre les contraintes mécaniques extrêmes supportées par l\'axe de piston dans les moteurs à combustion.'
        }
      ],
      conclusion: 'La méthode de fermeture vectorielle fournit la loi entrée-sortie analytique exacte et met en évidence l\'harmonique 2 générée par l\'obliquité de la bielle.',
      reflexeDuCorrecteur: 'Ne jamais oublier d\'expliciter la projection sur $\\vec{y}_0$ pour éliminer l\'inconnue de liaison et isoler la relation entre $\\theta$ et $\\beta$.'
    }
  },
  {
    id: 'exo-si-schema-bloc-asservissement',
    title: 'Asservissement de Position : Rejet de Perturbation & Précision en Boucle Fermée',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-systemes-asservis-laplace',
    chapitreTitre: 'Systèmes Asservis, Transformée de Laplace & Schémas-Blocs',
    filieres: ['PSI', 'MP', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts (PSI)',
    dureeEstimeeMin: 30,
    schema: {
      titre: 'Schéma-bloc d\'un asservissement avec perturbation de charge en aval du correcteur',
      type: 'schema-bloc-asservissement',
      legende: 'Consigne $E(p)$, écart mesuré $\\varepsilon(p)$, correcteur $C(p)$, perturbation de couple $D(p)$, procédé du second ordre $H(p)$ et capteur en chaîne de retour $K_c$.',
      donneesCles: [
        { label: 'Procédé H(p)', valeur: 'H(p) = K / (p (1 + τ p)) avec K = 2, τ = 0,1 s' },
        { label: 'Capteur K_c', valeur: 'K_c = 1 (retour unitaire)' },
        { label: 'Correcteur C(p)', valeur: 'Proportionnel K_p ou Proportionnel-Intégral PI' },
        { label: 'Consigne échelon', valeur: 'E(p) = E_0 / p' }
      ]
    },
    enonce: 'En analysant le schéma-bloc d\'asservissement ci-dessus :\n\n1. En utilisant le théorème de superposition, exprimer la transformée de Laplace de la sortie $S(p)$ sous la forme $S(p) = F_E(p) E(p) + F_D(p) D(p)$. Donner les expressions de $F_E(p)$ et $F_D(p)$ en fonction de $C(p)$, $H(p)$ et $K_c$.\n2. On choisit d\'abord un correcteur proportionnel pur : $C(p) = K_p$. Le système est soumis à un échelon de consigne $E(p) = \\frac{E_0}{p}$ en l\'absence de perturbation ($D=0$). Calculer l\'erreur statique de position $\\varepsilon_s = \\lim_{t \\to +\\infty} \\varepsilon(t)$.\n3. Le système est maintenant soumis à une perturbation de couple constante en échelon $D(p) = \\frac{D_0}{p}$ avec une consigne nulle ($E=0$). Calculer l\'écart statique résiduel $\\varepsilon_{s, pert}$ dû à cette perturbation. Ce résultat est-il acceptable en robotique de précision ?\n4. Proposer une structure de correcteur permettant de garantir un rejet parfait de la perturbation constante (erreur statique rigoureusement nulle). Justifier par le théorème de la valeur finale.',
    hints: [
      'Pour trouver $F_E(p)$, poser $D(p) = 0$. Pour $F_D(p)$, poser $E(p) = 0$.',
      'L\'écart s\'exprime par $\\varepsilon(p) = E(p) - K_c S(p)$.',
      'Le théorème de la valeur finale s\'écrit $\\lim_{t \\to +\\infty} f(t) = \\lim_{p \\to 0} p F(p)$.',
      'Pour rejeter une perturbation constante $D_0/p$ située après le correcteur, il faut placer une intégration en amont du point d\'injection de la perturbation.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul des fonctions de transfert par superposition',
          explication: 'Sur le schéma-bloc, le signal avant le procédé est $U(p) = C(p) \\varepsilon(p) + D(p)$ et la sortie est $S(p) = H(p) U(p)$. L\'écart mesuré est $\\varepsilon(p) = E(p) - K_c S(p)$. En substituant :\n$$S(p) = H(p) \\big( C(p) (E(p) - K_c S(p)) + D(p) \\big)$$\nEn regroupant les termes en $S(p)$ :\n$$S(p) \\big( 1 + K_c C(p) H(p) \\big) = C(p) H(p) E(p) + H(p) D(p)$$\nOn en déduit immédiatement les deux fonctions de transfert :',
          calculs: 'F_E(p) = \\frac{C(p) H(p)}{1 + K_c C(p) H(p)}, \\quad F_D(p) = \\frac{H(p)}{1 + K_c C(p) H(p)}'
        },
        {
          titre: '2. Erreur de poursuite pour un correcteur proportionnel $C(p) = K_p$',
          explication: 'Pour $D=0$ et $K_c = 1$, l\'écart s\'écrit $\\varepsilon(p) = E(p) - S(p) = \\frac{1}{1 + K_p H(p)} E(p)$. Comme $H(p) = \\frac{K}{p(1 + \\tau p)}$, la transmittance en boucle ouverte $FTBO(p) = \\frac{K_p K}{p(1 + \\tau p)}$ possède une intégration pure ($p^1$ au dénominateur, classe 1). D\'après le théorème de la valeur finale pour un échelon $E(p) = E_0/p$ :\n$$\\varepsilon_{s, consigne} = \\lim_{p \\to 0} p \\times \\frac{1}{1 + \\frac{K_p K}{p(1 + \\tau p)}} \\frac{E_0}{p} = \\lim_{p \\to 0} \\frac{p (1 + \\tau p)}{p(1 + \\tau p) + K_p K} E_0 = 0$$\nLe système est donc parfaitement précis en position pour la consigne.'
        },
        {
          titre: '3. Sensibilité à la perturbation de charge $D(p) = D_0/p$',
          explication: 'Pour $E=0$ et $D(p) = D_0/p$, l\'écart mesuré est $\\varepsilon(p) = -S(p) = -\\frac{H(p)}{1 + K_p H(p)} \\frac{D_0}{p}$ :\n$$\\varepsilon(p) = -\\frac{\\frac{K}{p(1 + \\tau p)}}{1 + \\frac{K_p K}{p(1 + \\tau p)}} \\frac{D_0}{p} = -\\frac{K}{p(1 + \\tau p) + K_p K} \\frac{D_0}{p}$$\nPar le théorème de la valeur finale :\n$$\\varepsilon_{s, pert} = \\lim_{p \\to 0} p \\times \\varepsilon(p) = -\\frac{K}{K_p K} D_0 = -\\frac{D_0}{K_p}$$\nL\'erreur n\'est pas nulle ! Même si le procédé contient un intégrateur, comme cet intégrateur est situé AVAL de la perturbation, il n\'annule pas l\'effet statique de la perturbation.'
        },
        {
          titre: '4. Synthèse d\'un correcteur Proportionnel-Intégral (PI)',
          explication: 'Pour annuler $\\varepsilon_{s, pert}$, il faut que le correcteur $C(p)$ contienne une intégration en amont du point de sommation de la perturbation :\n$$C(p) = K_p \\left(1 + \\frac{1}{T_i p}\\right) = K_p \\frac{1 + T_i p}{T_i p}$$\nDans ce cas, $C(p) \\to +\\infty$ quand $p \\to 0$. L\'expression de l\'erreur de perturbation devient :\n$$\\varepsilon_{s, pert} = \\lim_{p \\to 0} -\\frac{H(p)}{1 + C(p)H(p)} D_0 = \\lim_{p \\to 0} -\\frac{1}{\\frac{1}{H(p)} + C(p)} D_0 = 0$$\nL\'action intégrale du correcteur élimine totalement l\'influence de la perturbation constante.'
        }
      ],
      conclusion: 'Le rejet d\'une perturbation exige impérativement que l\'intégration soit située en AMONT de la perturbation dans la boucle, règle d\'or des asservissements industriels.',
      reflexeDuCorrecteur: 'Ne jamais affirmer hâtivement qu\'un intégrateur dans la boucle annule toutes les erreurs : distinguer impérativement intégrateur amont (qui rejette la perturbation) et intégrateur aval (qui ne l\'annule pas).'
    }
  },
  {
    id: 'exo-thermo-cycle-carnot-moteur',
    title: 'Cycle Moteur de Carnot Bitherme & Rendement Maximal Théorique',
    matiere: 'Physique',
    chapitreId: 'physique-thermo-ouverts-ecoulements',
    chapitreTitre: 'Thermodynamique & Machines Thermiques',
    filieres: ['PC', 'PSI', 'MP', 'PCSI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts & Centrale-Supélec',
    dureeEstimeeMin: 30,
    schema: {
      titre: 'Diagramme de Clapeyron (P, V) d\'un cycle moteur de Carnot à gaz parfait',
      type: 'cycle-carnot',
      legende: 'Cycle fermé composé de deux isothermes réversibles à $T_C$ et $T_F$ et de deux adiabatiques réversibles (isentropiques). Le sens horaire garantit un travail moteur $W < 0$.',
      donneesCles: [
        { label: 'Source chaude', valeur: 'T_C = 600 K (327 °C)' },
        { label: 'Source froide', valeur: 'T_F = 300 K (27 °C)' },
        { label: 'Rapport de détente', valeur: 'V_2 / V_1 = 2' },
        { label: 'Rendement de Carnot', valeur: 'η_Carnot = 1 - T_F / T_C = 50%' }
      ]
    },
    enonce: 'Un moteur ditherme idéal fonctionne selon le cycle de Carnot représenté sur le diagramme de Clapeyron $(P, V)$ ci-dessus, avec $n = 1\\,\\mathrm{mol}$ de gaz parfait de coefficient adiabatique $\\gamma = 1{,}40$.\n- Transformation $1 \\to 2$ : détente isotherme réversible à la température $T_C = 600\\,\\mathrm{K}$ de $V_1$ à $V_2 = 2 V_1$.\n- Transformation $2 \\to 3$ : détente adiabatique réversible jusqu\'à la température $T_F = 300\\,\\mathrm{K}$.\n- Transformation $3 \\to 4$ : compression isotherme réversible à la température $T_F$.\n- Transformation $4 \\to 1$ : compression adiabatique réversible jusqu\'à l\'état initial 1.\n\n1. En exploitant les lois de Laplace pour les adiabatiques $2 \\to 3$ et $4 \\to 1$, exprimer les rapports de volume $V_3 / V_2$ et $V_4 / V_1$ en fonction de $T_C, T_F$ et $\\gamma$. En déduire la relation liant les quatre volumes $V_1, V_2, V_3, V_4$.\n2. Exprimer le transfert thermique $Q_C = Q_{1\\to 2}$ reçu par le gaz de la source chaude en fonction de $n, R, T_C$ et du rapport $V_2/V_1$.\n3. Exprimer de même le transfert thermique $Q_F = Q_{3\\to 4}$ cédé à la source froide en fonction de $n, R, T_F$ et du rapport $V_4/V_3$.\n4. Déterminer le travail total $W_{cycle}$ échangé au cours d\'un cycle. Vérifier qu\'il correspond bien à l\'aire orientée hachurée sur le diagramme.\n5. Calculer le rendement thermique $\\eta = -W/Q_C$ et vérifier qu\'il est rigoureusement égal à la limite théorique de Carnot $\\eta = 1 - T_F/T_C = 50\\%$.',
    hints: [
      'Pour une adiabatique réversible de gaz parfait, $T V^{\\gamma-1} = \\mathrm{cste}$.',
      'Pour une isotherme de gaz parfait, $\\Delta U = 0 \\implies Q = -W = \\int P\\,\\mathrm{d}V = n R T \\ln(V_{fin}/V_{ini})$.',
      'Le rapport des volumes donne $V_3/V_4 = V_2/V_1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Relations de Laplace sur les deux adiabatiques',
          explication: 'Sur l\'adiabatique réversible $2 \\to 3$ : $T_C V_2^{\\gamma-1} = T_F V_3^{\\gamma-1} \\implies \\frac{V_3}{V_2} = \\left(\\frac{T_C}{T_F}\\right)^{\\frac{1}{\\gamma-1}}$.\nSur l\'adiabatique réversible $4 \\to 1$ : $T_F V_4^{\\gamma-1} = T_C V_1^{\\gamma-1} \\implies \\frac{V_4}{V_1} = \\left(\\frac{T_C}{T_F}\\right)^{\\frac{1}{\\gamma-1}}$.\nOn en déduit l\'égalité fondamentale des rapports de compression isothermes :',
          calculs: '\\frac{V_3}{V_2} = \\frac{V_4}{V_1} \\iff \\frac{V_3}{V_4} = \\frac{V_2}{V_1}'
        },
        {
          titre: '2. Transferts thermiques $Q_C$ et $Q_F$',
          explication: 'Pour l\'isotherme chaude $1 \\to 2$ à $T_C$, la première loi de Joule donne $\\Delta U_{12} = 0$, donc $Q_C = -W_{12} = \\int_{V_1}^{V_2} \\frac{n R T_C}{V}\\,\\mathrm{d}V = n R T_C \\ln\\left(\\frac{V_2}{V_1}\\right) > 0$.\nPour l\'isotherme froide $3 \\to 4$ à $T_F$, $\\Delta U_{34} = 0$, d\'où $Q_F = n R T_F \\ln\\left(\\frac{V_4}{V_3}\\right) = -n R T_F \\ln\\left(\\frac{V_3}{V_4}\\right) = -n R T_F \\ln\\left(\\frac{V_2}{V_1}\\right) < 0$.'
        },
        {
          titre: '3. Travail total fourni par le cycle',
          explication: 'D\'après le premier principe sur le cycle : $\\Delta U_{cycle} = 0 \\implies W_{cycle} = -(Q_C + Q_F)$ :\n$$W_{cycle} = -n R (T_C - T_F) \\ln\\left(\\frac{V_2}{V_1}\\right) < 0$$\nComme $W_{cycle} < 0$, le fluide fournit bien du travail mécanique au milieu extérieur : la machine est un moteur thermique, et le travail utile vaut $-W_{cycle} = n R (T_C - T_F) \\ln 2 \\approx 1 \\times 8{,}314 \\times 300 \\times 0{,}693 \\approx 1729\\,\\mathrm{J}$.'
        },
        {
          titre: '4. Rendement de Carnot',
          explication: 'Par définition du rendement thermique d\'un moteur ditherme :\n$$\\eta = \\frac{-W_{cycle}}{Q_C} = \\frac{n R (T_C - T_F) \\ln(V_2/V_1)}{n R T_C \\ln(V_2/V_1)} = \\frac{T_C - T_F}{T_C} = 1 - \\frac{T_F}{T_C}$$\nNumériquement : $\\eta = 1 - \\frac{300}{600} = 0{,}50 = 50\\%$.'
        }
      ],
      conclusion: 'Le cycle de Carnot démontre que le rendement d\'un moteur ditherme ne dépend que des températures des deux sources et constitue la borne thermodynamique indépassable.',
      reflexeDuCorrecteur: 'Toujours expliciter l\'égalité des rapports $V_3/V_4 = V_2/V_1$ issue des deux lois de Laplace pour simplifier les logarithmes du rendement.'
    }
  },
  {
    id: 'exo-optique-fentes-young-diffraction',
    title: 'Interférences & Diffraction : Trous d\'Young & Facteur de Visibilité',
    matiere: 'Physique',
    chapitreId: 'physique-optique-interferences',
    chapitreTitre: 'Optique Ondulatoire & Interférences',
    filieres: ['PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Centrale-Supélec (PC/MP)',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Dispositif interférentiel des fentes d\'Young avec diffraction de Fraunhofer',
      type: 'fentes-young',
      legende: 'Deux fentes fines de largeur $b$ séparées d\'une distance $a$, éclairées par une onde plane monochromatique $\\lambda_0$. L\'écran situé à distance $D$ affiche des franges d\'interférence modulées par la diffraction.',
      donneesCles: [
        { label: 'Écartement des fentes', valeur: 'a = 0,50 mm' },
        { label: 'Largeur des fentes', valeur: 'b = 0,10 mm (rapport a/b = 5)' },
        { label: 'Distance à l\'écran', valeur: 'D = 2,00 m' },
        { label: 'Longueur d\'onde laser', valeur: 'λ_0 = 633 nm (He-Ne)' }
      ]
    },
    enonce: 'On considère le dispositif des fentes d\'Young représenté sur le schéma ci-dessus :\n\n1. En considérant d\'abord les fentes infiniment fines ($b \\to 0$), exprimer la différence de marche $\\delta(x)$ entre les rayons issus de $S_1$ et $S_2$ en un point $M$ d\'abscisse $x$ sur l\'écran (avec $x, a \\ll D$).\n2. En déduire l\'intensité lumineuse $I(x)$ et exprimer l\'interfrange $i$. Calculer numériquement sa valeur en millimètres.\n3. On prend maintenant en compte la largeur finie $b$ de chaque fente dans le cadre de la diffraction de Fraunhofer. Donner l\'expression du profil d\'intensité résultant $I(x) = I_0 \\mathrm{sinc}^2(u) \\cos^2(v)$. Expliciter les variables $u$ et $v$ en fonction de $x, a, b, \\lambda_0, D$.\n4. Déterminer la largeur $\\Delta X$ de la tache centrale de diffraction sur l\'écran. Combien de franges brillantes d\'interférence sont contenues à l\'intérieur de cette tache centrale ?',
    hints: [
      'La différence de marche pour deux sources distantes de $a$ est $\\delta(x) \\approx \\frac{a x}{D}$.',
      'L\'interfrange est $i = \\frac{\\lambda_0 D}{a}$.',
      'L\'enveloppe de diffraction s\'annule lorsque $\\frac{\\pi b x}{\\lambda_0 D} = \\pm \\pi$, soit $x_0 = \\frac{\\lambda_0 D}{b}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul de la différence de marche $\\delta(x)$',
          explication: 'Dans le triangle $S_1 S_2 H$ formé par la projection orthogonale de $S_1$ sur le rayon issu de $S_2$ :\n$$\\delta(x) = S_2 M - S_1 M \\approx a \\sin\\theta \\approx a \\tan\\theta = a \\frac{x}{D}$$'
        },
        {
          titre: '2. Formule de Fresnel et interfrange',
          explication: 'Le déphasage entre les deux ondes vaut $\\Delta\\varphi = \\frac{2\\pi \\delta}{\\lambda_0} = \\frac{2\\pi a x}{\\lambda_0 D}$. L\'intensité lumineuse d\'interférence à deux ondes s\'écrit :\n$$I(x) = 2 I_1 \\left( 1 + \\cos\\left(\\frac{2\\pi a x}{\\lambda_0 D}\\right) \\right) = 4 I_1 \\cos^2\\left(\\frac{\\pi a x}{\\lambda_0 D}\\right)$$\nL\'interfrange $i$ sépare deux maxima consécutifs ($\\Delta\\varphi = 2\\pi$) :\n$$i = \\frac{\\lambda_0 D}{a} = \\frac{633 \\times 10^{-9} \\times 2{,}00}{0{,}50 \\times 10^{-3}} = 2{,}532 \\times 10^{-3}\\,\\mathrm{m} \\approx 2{,}53\\,\\mathrm{mm}$$'
        },
        {
          titre: '3. Modulation par la diffraction de chaque fente',
          explication: 'D\'après le théorème de diffraction de Fraunhofer, chaque fente de largeur $b$ diffracte avec un facteur d\'amplitude en sinus cardinal. L\'intensité totale est le produit du terme d\'interférence et du terme de diffraction :\n$$I(x) = I_0 \\left(\\frac{\\sin\\left(\\frac{\\pi b x}{\\lambda_0 D}\\right)}{\\frac{\\pi b x}{\\lambda_0 D}}\\right)^2 \\cos^2\\left(\\frac{\\pi a x}{\\lambda_0 D}\\right)$$'
        },
        {
          titre: '4. Largeur de la tache centrale et nombre de franges',
          explication: 'Le premier zéro de diffraction a lieu pour $\\frac{\\pi b x_1}{\\lambda_0 D} = \\pi$, soit $x_1 = \\frac{\\lambda_0 D}{b}$. La largeur totale de la tache centrale est donc :\n$$\\Delta X = 2 x_1 = \\frac{2 \\lambda_0 D}{b} = \\frac{2 \\times 633 \\times 10^{-9} \\times 2{,}00}{0{,}10 \\times 10^{-3}} = 25{,}3\\,\\mathrm{mm}$$\nLe nombre de franges contenues dans la tache centrale est le rapport :\n$$N = \\frac{\\Delta X}{i} = \\frac{2 \\lambda_0 D / b}{\\lambda_0 D / a} = 2 \\frac{a}{b} = 2 \\times 5 = 10$$\nComme la frange centrale $x=0$ est brillante, on observe la frange centrale plus 4 franges de chaque côté, soit 9 franges brillantes visibles (les 5ème franges tombent exactement sur les zéros d\'extinction de la diffraction !).'
        }
      ],
      conclusion: 'La figure des trous d\'Young est une modulation de franges d\'interférence très serrées par une large enveloppe de diffraction liée à l\'ouverture finie de chaque fente.',
      reflexeDuCorrecteur: 'Ne jamais oublier d\'expliquer la disparition de la $k$-ième frange lorsque $k \\times i = x_{zero\\,diffraction}$ (extinction par le zéro du sinus cardinal).'
    }
  },
  {
    id: 'exo-si-identification-bode-2nd-ordre',
    title: 'Identification Fréquentielle d\'un Système du 2nd Ordre & Diagramme de Bode',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-systemes-asservis-laplace',
    chapitreTitre: 'Systèmes Asservis & Réponse Fréquentielle',
    filieres: ['PSI', 'MP', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts (PSI)',
    dureeEstimeeMin: 30,
    schema: {
      titre: 'Diagramme de Bode d\'un actionneur électromécanique du second ordre avec résonance',
      type: 'diagramme-bode',
      legende: 'Courbes de gain $G(\\omega)$ en dB et de phase $\\varphi(\\omega)$ en degrés, faisant apparaître le pic de résonance $M_r$, la pulsation propre $\\omega_0$ à $-90^\\circ$ et l\'asymptote à $-40\\,\\mathrm{dB/dec}$.',
      donneesCles: [
        { label: 'Gain statique', valeur: 'K = 1 (0 dB à basse fréquence)' },
        { label: 'Pulsation de résonance', valeur: 'ω_r = 85 rad/s' },
        { label: 'Facteur de résonance', valeur: 'M_r = +6,0 dB' },
        { label: 'Pulsation propre déduite', valeur: 'ω_0 = 100 rad/s' }
      ]
    },
    enonce: 'Sur le diagramme de Bode fourni ci-dessus représentant la transmittance en boucle ouverte d\'un actionneur $H(p) = \\frac{K}{1 + \\frac{2\\xi}{\\omega_0} p + \\frac{p^2}{\\omega_0^2}}$ :\n\n1. À partir du comportement en basse fréquence ($\\omega \\to 0$), déterminer la valeur du gain statique $K$.\n2. Expliquer comment mesurer directement la pulsation propre $\\omega_0$ sur la courbe de phase $\\varphi(\\omega)$. Relever sa valeur.\n3. Rappeler la condition d\'existence du pic de résonance en fonction du coefficient d\'amortissement $\\xi$. Exprimer le facteur de résonance $M_r = |H(j\\omega_r)| / K$ en fonction de $\\xi$.\n4. La mesure expérimentale donne une suramplification de $+6{,}0\\,\\mathrm{dB}$ à la résonance. Calculer la valeur numérique du coefficient d\'amortissement $\\xi$.\n5. Si l\'on soumet ce système à un échelon de consigne unitaire, quel sera le premier dépassement indiciel relatif $D_{1\\%}$ ? Conclure sur la rapidité et la stabilité.',
    hints: [
      'Pour un second ordre canonique, la phase vaut exactement $-90^\\circ$ à la pulsation propre $\\omega = \\omega_0$.',
      'Le pic de résonance n\'existe que si $\\xi < 1/\\sqrt{2} \\approx 0{,}707$.',
      'Un gain de $+6\\,\\mathrm{dB}$ correspond à une amplification linéaire d\'un facteur 2 ($10^{6/20} = 2$).',
      'La formule du dépassement indiciel est $D_1 = e^{-\\frac{\\pi \\xi}{\\sqrt{1-\\xi^2}}}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Identification du gain statique $K$',
          explication: 'Quand $\\omega \\to 0$, $H(j\\omega) \\to K$. Sur la courbe de gain, l\'asymptote basse fréquence est une droite horizontale à $0\\,\\mathrm{dB}$. On a donc $20\\log_{10}(K) = 0 \\implies K = 1$.'
        },
        {
          titre: '2. Détermination de la pulsation propre $\\omega_0$ par la phase',
          explication: 'L\'argument de la fonction de transfert s\'écrit :\n$$\\varphi(\\omega) = -\\arctan\\left( \\frac{2\\xi \\omega / \\omega_0}{1 - \\omega^2 / \\omega_0^2} \\right)$$\nPour $\\omega = \\omega_0$, le dénominateur s\'annule et la phase vaut rigoureusement $-90^\\circ$, quelle que soit la valeur de l\'amortissement $\\xi$. Sur le graphe de phase, $\\varphi = -90^\\circ$ est atteint exactement à $\\omega_0 = 100\\,\\mathrm{rad\\cdot s^{-1}}$.'
        },
        {
          titre: '3. Condition de résonance et expression de $M_r$',
          explication: 'Le module $|H(j\\omega)|^2 = \\frac{K^2}{(1 - u^2)^2 + 4\\xi^2 u^2}$ avec $u = \\omega/\\omega_0$. En dérivant le dénominateur par rapport à $u^2$, on trouve un minimum si et seulement si $1 - 2\\xi^2 > 0 \\iff \\xi < \\frac{1}{\\sqrt{2}} \\approx 0{,}707$.\nLa pulsation de résonance vaut alors $\\omega_r = \\omega_0 \\sqrt{1 - 2\\xi^2}$. La valeur maximale du gain s\'exprime par :',
          calculs: 'M_r = \\frac{|H(j\\omega_r)|}{K} = \\frac{1}{2\\xi \\sqrt{1 - \\xi^2}}'
        },
        {
          titre: '4. Calcul de l\'amortissement $\\xi$',
          explication: 'Une suramplification de $+6{,}0\\,\\mathrm{dB}$ correspond à $M_r = 10^{6/20} = 10^{0{,}30} \\approx 2{,}0$. On a donc l\'équation :\n$$\\frac{1}{2\\xi \\sqrt{1 - \\xi^2}} = 2 \\iff 4\\xi^2 (1 - \\xi^2) = \\frac{1}{4} \\iff 16\\xi^4 - 16\\xi^2 + 1 = 0$$\nEn posant $X = \\xi^2$ : $16 X^2 - 16 X + 1 = 0$. Le discriminant $\\Delta = 256 - 64 = 192 = (8\\sqrt{3})^2$. Comme $\\xi < 0{,}707$ ($X < 0{,}5$) :\n$$X = \\frac{16 - 8\\sqrt{3}}{32} = \\frac{2 - \\sqrt{3}}{4} \\approx 0{,}067 \\implies \\xi = \\sqrt{X} \\approx 0{,}258 \\approx 0{,}26$$'
        },
        {
          titre: '5. Réponse indicielle et premier dépassement',
          explication: 'Pour un échelon de consigne, le premier dépassement relatif vaut :\n$$D_{1\\%} = e^{-\\frac{\\pi \\xi}{\\sqrt{1-\\xi^2}}} \\times 100 = e^{-\\frac{\\pi \\times 0{,}258}{\\sqrt{1 - 0{,}067}}} \\times 100 = e^{-0{,}84} \\times 100 \\approx 43\\%$$\nCe dépassement de $43\\%$ est très prononcé : le système est très peu amorti et oscillatoire, nécessitant une correction à avance de phase pour stabiliser l\'asservissement.'
        }
      ],
      conclusion: 'Le diagramme de Bode permet une identification univoque et immédiate des paramètres fondamentaux d\'un second ordre ($K, \\omega_0, \\xi$) par de simples lectures de phase et de pic de résonance.',
      reflexeDuCorrecteur: 'Toujours utiliser le point d\'inflexion à $-90^\\circ$ sur la phase pour relever $\\omega_0$ avec précision, car le pic de résonance a lieu à une pulsation $\\omega_r < \\omega_0$.'
    }
  },
  {
    id: 'exo-maths-gram-schmidt-legendre',
    title: 'Procédé de Gram-Schmidt & Polynômes Orthogonaux de Legendre',
    matiere: 'Mathématiques',
    chapitreId: 'maths-prehilbertiens-gram-schmidt',
    chapitreTitre: 'Espaces Préhilbertiens Réels & Géométrie Euclidienne',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'MPSI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts & Oral X',
    dureeEstimeeMin: 30,
    enonce: 'On considère l\'espace vectoriel $E = \\mathbb{R}[X]$ muni de la forme bilinéaire définie par :\n$$\\langle P, Q \\rangle = \\int_{-1}^1 P(t) Q(t)\\,\\mathrm{d}t$$\n\n1. Vérifier rigoureusement que $\\langle \\cdot, \\cdot \\rangle$ définit un produit scalaire sur $E$.\n2. Appliquer le procédé d\'orthonormalisation de Gram-Schmidt à la famille libre $(1, X, X^2)$ pour obtenir une famille orthonormée $(L_0, L_1, L_2)$.\n3. Pour tout $n \\in \\mathbb{N}$, on pose $P_n(X) = \\frac{\\mathrm{d}^n}{\\mathrm{d}X^n}\\left((X^2 - 1)^n\\right)$ (Formule de Rodrigues). Montrer par intégrations par parties successives que pour tout $Q \\in \\mathbb{R}_{n-1}[X]$, $\\langle P_n, Q \\rangle = 0$.\n4. En déduire que les racines de $P_n$ sont toutes réelles, simples et situées dans l\'intervalle ouvert $]-1, 1[$.',
    hints: [
      'Pour le caractère défini : si $\\int_{-1}^1 P(t)^2\\,\\mathrm{d}t = 0$, $P^2$ est continue et positive donc identiquement nulle.',
      'Par parité de l\'intervalle $[-1, 1]$, le produit scalaire de deux fonctions de parités différentes est nul.',
      'Pour Rodrigues, dériver $k$ fois $(X^2-1)^n$ donne une fonction s\'annulant en $\\pm 1$ pour tout $k < n$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Vérification du produit scalaire',
          explication: 'L\'application $(P, Q) \\mapsto \\int_{-1}^1 P(t)Q(t)\\,\\mathrm{d}t$ est symétrique et bilinéaire par linéarité de l\'intégrale. Pour $P \\in \\mathbb{R}[X]$, $\\langle P, P \\rangle = \\int_{-1}^1 P(t)^2\\,\\mathrm{d}t \\ge 0$ par positivité de l\'intégrale d\'une fonction continue positive. Si $\\langle P, P \\rangle = 0$, la fonction continue positive $t \\mapsto P(t)^2$ est identiquement nulle sur $[-1, 1]$. Le polynôme $P$ ayant une infinité de racines est le polynôme nul. C\'est donc un produit scalaire.'
        },
        {
          titre: '2. Orthonormalisation de Gram-Schmidt',
          explication: '- $u_0 = 1$ : $\\|u_0\\|^2 = \\int_{-1}^1 1\\,\\mathrm{d}t = 2$, d\'où $L_0(X) = \\frac{1}{\\sqrt{2}}$.\n- $u_1 = X$ : $\\langle X, 1 \\rangle = \\int_{-1}^1 t\\,\\mathrm{d}t = 0$ par imparité, donc $X$ est déjà orthogonal à $1$. $\\|X\\|^2 = \\int_{-1}^1 t^2\\,\\mathrm{d}t = \\frac{2}{3}$, d\'où $L_1(X) = \\sqrt{\\frac{3}{2}} X$.\n- $u_2 = X^2$ : $\\langle X^2, X \\rangle = 0$ par imparité. $\\langle X^2, 1 \\rangle = \\int_{-1}^1 t^2\\,\\mathrm{d}t = \\frac{2}{3}$. Le projeté orthogonal sur $\\mathrm{Vect}(L_0, L_1)$ est $\\frac{\\langle X^2, 1 \\rangle}{\\|1\\|^2} \\times 1 = \\frac{2/3}{2} = \\frac{1}{3}$. Le vecteur orthogonal est donc $v_2 = X^2 - \\frac{1}{3}$.\nSa norme au carré : $\\|v_2\\|^2 = \\int_{-1}^1 (t^2 - 1/3)^2\\,\\mathrm{d}t = \\int_{-1}^1 (t^4 - \\frac{2}{3}t^2 + \\frac{1}{9})\\,\\mathrm{d}t = 2(\\frac{1}{5} - \\frac{2}{9} + \\frac{1}{9}) = \\frac{8}{45}$. D\'où $L_2(X) = \\sqrt{\\frac{45}{8}}(X^2 - 1/3) = \\frac{\\sqrt{5}}{2\\sqrt{2}}(3X^2 - 1)$.'
        },
        {
          titre: '3. Formule de Rodrigues et orthogonalité',
          explication: 'Posons $U_n(X) = (X^2 - 1)^n$. Comme 1 et $-1$ sont racines de multiplicité $n$ de $U_n$, pour tout $k \\in \\{0, \\dots, n-1\\}$, $U_n^{(k)}(\\pm 1) = 0$. Par $n$ intégrations par parties successives de $\\int_{-1}^1 U_n^{(n)}(t) Q(t)\\,\\mathrm{d}t$, les termes de bord s\'annulent tous, et le terme intégral devient $(-1)^n \\int_{-1}^1 U_n(t) Q^{(n)}(t)\\,\\mathrm{d}t$. Comme $\\deg Q \\le n-1$, sa dérivée $n$-ième est identiquement nulle ! Donc $\\langle P_n, Q \\rangle = 0$.'
        },
        {
          titre: '4. Racines réelles simples dans $]-1, 1[$',
          explication: 'Soient $x_1, \\dots, x_k$ les racines de $P_n$ dans $]-1, 1[$ où $P_n$ change de signe. Posons $Q(X) = \\prod_{i=1}^k (X - x_i)$. Par construction, le produit $P_n(t) Q(t)$ garde un signe constant non nul sur $[-1, 1]$, donc $\\int_{-1}^1 P_n(t) Q(t)\\,\\mathrm{d}t \\neq 0$. Si $k < n$, $Q \\in \\mathbb{R}_{n-1}[X]$, ce qui contredirait l\'orthogonalité $\\langle P_n, Q \\rangle = 0$. On a donc nécessairement $k = n$ : $P_n$ possède exactement $n$ racines réelles distinctes toutes situées dans $]-1, 1[$.'
        }
      ],
      conclusion: 'Les polynômes de Legendre constituent la famille orthogonale fondamentale pour l\'intégration numérique (quadrature de Gauss-Legendre) et la physique quantique (harmoniques sphériques).',
      reflexeDuCorrecteur: 'Pour l\'orthogonalité des racines, toujours utiliser le polynôme produit des racines avec changement de signe pour créer une contradiction avec la positivité stricte de l\'intégrale.'
    }
  },
  {
    id: 'exo-chimie-michaelis-menten-lineweaver',
    title: 'Cinétique Enzymatique : Équation de Michaelis-Menten & Linéarisation de Lineweaver-Burk',
    matiere: 'Chimie',
    chapitreId: 'chimie-cinetique-catalyse-aeqs',
    chapitreTitre: 'Cinétique Chimique & Catalyse',
    filieres: ['PC', 'PCSI', 'BCPST'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours Agro-Véto & Mines-Ponts (PC)',
    dureeEstimeeMin: 25,
    enonce: 'On étudie l\'hydrolyse du saccharose catalysée par l\'invertase selon le mécanisme de Michaelis-Menten :\n$$E + S \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} ES \\xrightarrow{k_2} E + P$$\n\n1. Rappeler l\'expression de la vitesse initiale $v_0$ en fonction de la concentration en substrat $[S]$, de la vitesse maximale $V_{max}$ et de la constante de Michaelis $K_M$.\n2. Donner l\'équation de la transformée en double inverse de Lineweaver-Burk exprimant $1/v_0$ en fonction de $1/[S]$. Expliquer comment déterminer graphiquement $V_{max}$ et $K_M$ à partir de cette droite affine.\n3. Des mesures spectrophotométriques fournissent la droite de régression suivante : $1/v_0 = 1{,}25 \\times 10^3 \\cdot \\frac{1}{[S]} + 2{,}50 \\times 10^2$ (avec $v_0$ en $\\mu\\mathrm{mol\\cdot L^{-1}\\cdot s^{-1}}$ et $[S]$ en $\\mathrm{mmol\\cdot L^{-1}}$). Calculer les valeurs numériques de $V_{max}$ et $K_M$.\n4. Un inhibiteur compétitif $I$ se fixe réversiblement sur le site actif de l\'enzyme libre ($E + I \\rightleftharpoons EI$). Quel est l\'effet de cet inhibiteur sur $V_{max}$ et sur $K_M$ apparent ?',
    hints: [
      'Prenez l\'inverse de la relation $v_0 = \\frac{V_{max}[S]}{K_M + [S]}$.',
      'L\'ordonnée à l\'origine vaut $1/V_{max}$ et la pente vaut $K_M / V_{max}$.',
      'L\'abscisse à l\'origine ($1/v_0 = 0$) correspond à $-1/K_M$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Loi de vitesse de Michaelis-Menten',
          explication: 'D\'après l\'Approximation des États Quasi-Stationnaires (AEQS) sur $[ES]$ et le bilan de matière $[E]_0 = [E] + [ES]$ :\n$$v_0 = \\frac{V_{max} [S]}{K_M + [S]} \\quad \\text{avec } V_{max} = k_2 [E]_0 \\quad \\text{et} \\quad K_M = \\frac{k_{-1} + k_2}{k_1}$$'
        },
        {
          titre: '2. Linéarisation de Lineweaver-Burk',
          explication: 'En inversant l\'expression de la vitesse initiale :\n$$\\frac{1}{v_0} = \\frac{K_M + [S]}{V_{max} [S]} = \\frac{K_M}{V_{max}} \\cdot \\frac{1}{[S]} + \\frac{1}{V_{max}}$$\nC\'est l\'équation d\'une droite affine $Y = a X + b$ avec $Y = 1/v_0$ et $X = 1/[S]$ :\n- Ordonnée à l\'origine ($X=0$) : $b = \\frac{1}{V_{max}} \\implies V_{max} = \\frac{1}{b}$.\n- Pente de la droite : $a = \\frac{K_M}{V_{max}} \\implies K_M = a \\cdot V_{max} = \\frac{a}{b}$.\n- Abscisse à l\'origine ($Y=0$) : $X_0 = -\\frac{1}{K_M}$.'
        },
        {
          titre: '3. Application numérique',
          explication: 'D\'après la droite expérimentale $Y = 1{,}25 \\times 10^3 X + 2{,}50 \\times 10^2$ :\n- Vitesse maximale : $V_{max} = \\frac{1}{2{,}50 \\times 10^2} = 4{,}0 \\times 10^{-3}\\,\\mu\\mathrm{mol\\cdot L^{-1}\\cdot s^{-1}} = 4{,}0\\,\\mathrm{nmol\\cdot L^{-1}\\cdot s^{-1}}$.\n- Constante de Michaelis : $K_M = \\frac{1{,}25 \\times 10^3}{2{,}50 \\times 10^2} = 5{,}0\\,\\mathrm{mmol\\cdot L^{-1}}$.'
        },
        {
          titre: '4. Effet d\'un inhibiteur compétitif',
          explication: 'Un inhibiteur compétitif entre en compétition avec le substrat pour occuper le même site actif. À très forte concentration en substrat ($[S] \\to +\\infty$), le substrat déplace totalement l\'inhibiteur : la vitesse maximale reste inchangée ($V_{max}^{app} = V_{max}$). En revanche, il faut davantage de substrat pour saturer la moitié des enzymes : la constante de Michaelis apparente augmente ($K_M^{app} = K_M (1 + [I]/K_I) > K_M$).'
        }
      ],
      conclusion: 'La représentation de Lineweaver-Burk est la méthode historique de référence pour identifier le mode d\'inhibition enzymatique (compétitif, non-compétitif ou incompétitif).',
      reflexeDuCorrecteur: 'Pour un inhibiteur compétitif : retenir impérativement le point fixe sur l\'axe des ordonnées ($1/V_{max}$ invariant) avec une pente plus raide.'
    }
  },
  {
    id: 'exo-si-arc-boutement-mors-serrage',
    title: 'Arc-Boutement d\'un Mors de Serrage & Équilibre avec Frottement de Coulomb',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-statique-adherence-coulomb',
    chapitreTitre: 'Statique du Solide Indéformable & Frottement',
    filieres: ['PSI', 'MP', 'MPSI'],
    annee: '1ère & 2ème année',
    difficulte: 2,
    origin: 'Concours CCINP & Centrale-Supélec (PSI)',
    dureeEstimeeMin: 25,
    enonce: 'Un mors de serrage mobile (1) glisse le long d\'une colonne fixe cylindrique verticale (0) de diamètre $D = 40\\,\\mathrm{mm}$. Le guidage est assuré par deux portées annulaires $A$ et $B$ distantes de $H = 60\\,\\mathrm{mm}$. Une force de serrage utile $\\vec{F} = F \\vec{y}_0$ ($F = 2000\\,\\mathrm{N}$) est exercée à une distance $L = 150\\,\\mathrm{mm}$ de l\'axe de la colonne. Le coefficient de frottement statique entre le mors et la colonne vaut $f = 0{,}25$.\n\n1. En isolant le mors (1), faire le bilan des actions mécaniques extérieures en supposant une tendance au mouvement de translation verticale selon $\\vec{y}_0$.\n2. Écrire les torseurs des actions de contact en $A$ et $B$ en utilisant le modèle de Coulomb à la limite de glissement.\n3. En appliquant le Principe Fondamental de la Statique (PFS), écrire les 3 équations scalaires d\'équilibre dans le plan de symétrie.\n4. Établir la condition géométrique sur le rapport $L/H$ pour laquelle le mors s\'arc-boute (bloque spontanément) sur la colonne sans qu\'aucun système de verrouillage ne soit nécessaire.',
    hints: [
      'À la limite de glissement avec tendance vers le bas, les forces de frottement $T_A$ et $T_B$ sont dirigées vers le haut ($+y$).',
      'Le moment créé par la force excentrée $F \\times L$ doit être équilibré par le couple des forces normales $N_A$ et $N_B$.',
      'L\'arc-boutement se produit lorsque l\'effort d\'adhérence dépasse la poussée quel que soit $F$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Bilan des actions mécaniques sur le mors (1)',
          explication: 'Le mors (1) est soumis à :\n- La force de serrage extérieure $\\vec{F} = F \\vec{y}_0$ appliquée au point $C(L, 0)$.\n- L\'action de contact en $A$ : $\\vec{R}_A = N_A \\vec{x}_0 + T_A \\vec{y}_0$ avec $T_A = f N_A$ (limite de glissement).\n- L\'action de contact en $B$ : $\\vec{R}_B = -N_B \\vec{x}_0 + T_B \\vec{y}_0$ avec $T_B = f N_B$.'
        },
        {
          titre: '2. Application du Principe Fondamental de la Statique',
          explication: '1. Équilibre des forces selon $\\vec{x}_0$ :\n$$N_A - N_B = 0 \\implies N_A = N_B = N$$\n2. Équilibre des forces selon $\\vec{y}_0$ :\n$$T_A + T_B - F = 0 \\implies 2 f N = F \\implies N = \\frac{F}{2f}$$\n3. Équilibre des moments autour du point $A$ :\n$$-F L + N_B H = 0 \\implies N H = F L \\implies N = F \\frac{L}{H}$$'
        },
        {
          titre: '3. Condition d\'arc-boutement',
          explication: 'En égalant les deux expressions obtenues pour l\'effort normal $N$ :\n$$F \\frac{L}{H} \\ge \\frac{F}{2f} \\iff \\frac{L}{H} \\ge \\frac{1}{2f}$$\nAvec $f = 0{,}25$ :\n$$\\left(\\frac{L}{H}\\right)_{critique} = \\frac{1}{2 \\times 0{,}25} = 2{,}0$$\nIci le rapport réel vaut $\\frac{L}{H} = \\frac{150}{60} = 2{,}5 > 2{,}0$. Le mors est donc automatiquement en situation d\'arc-boutement : plus la force de serrage $F$ est intense, plus les réactions normales $N$ augmentent et plus le coincement est puissant.'
        }
      ],
      conclusion: 'Le phénomène d\'arc-boutement transforme un problème de frottement parasite en un mécanisme d\'auto-blocage ultra sécurisé largement exploité dans les serre-joints industriels.',
      reflexeDuCorrecteur: 'Pour l\'arc-boutement, toujours souligner que la condition finale $L/H \\ge 1/(2f)$ est purement géométrique et totalement indépendante de l\'intensité de la charge $F$.'
    }
  }
];

