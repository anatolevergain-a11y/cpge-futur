import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART5: ExerciseItem[] = [
  {
    id: 'exo-100-36-gram-schmidt-orthogonalisation',
    title: 'Orthonormalisation de Gram-Schmidt & Décomposition QR',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Espaces Euclidiens',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts / Agro-Véto',
    dureeEstimeeMin: 30,
    enonce: 'Dans $\\mathbb{R}_2[X]$ muni du produit scalaire canonique $\\langle P, Q \\rangle = \\int_0^1 P(t)Q(t)\\,\\mathrm{d}t$, orthonormaliser par le procédé de Gram-Schmidt la base canonique $(1, X, X^2)$. En déduire la distance minimale de $X^2$ au sous-espace $\\mathbb{R}_1[X]$.',
    hints: [
      'Poser $v_0 = 1$ puis normaliser $e_0 = v_0 / \\|v_0\\|$.',
      'Calculer $v_1 = X - \\langle X, e_0 \\rangle e_0$, puis normaliser.',
      'La distance à $\\mathbb{R}_1[X]$ est la norme du vecteur résiduel orthogonal $v_2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Premier vecteur unitaire $e_0$',
          explication: 'Posons $v_0 = 1$. La norme au carré est $\\|v_0\\|^2 = \\int_0^1 1^2\\,\\mathrm{d}t = 1$. Donc $e_0 = 1$.'
        },
        {
          titre: '2. Deuxième vecteur unitaire $e_1$',
          explication: 'Projection sur $e_0$ : $\\langle X, e_0 \\rangle = \\int_0^1 t\\,\\mathrm{d}t = 1/2$. Vecteur orthogonal : $v_1 = X - 1/2$.\nNorme au carré : $\\|v_1\\|^2 = \\int_0^1 (t - 1/2)^2\\,\\mathrm{d}t = \\left[ \\frac{(t - 1/2)^3}{3} \\right]_0^1 = \\frac{1/8 - (-1/8)}{3} = \\frac{1}{12}$.\nDonc $\\|v_1\\| = \\frac{1}{2\\sqrt{3}}$ et $e_1 = \\sqrt{3}(2X - 1)$.'
        },
        {
          titre: '3. Troisième vecteur orthogonal $v_2$',
          explication: 'Projection de $X^2$ sur $e_0$ et $e_1$ :\n- $\\langle X^2, e_0 \\rangle = \\int_0^1 t^2\\,\\mathrm{d}t = 1/3$.\n- $\\langle X^2, e_1 \\rangle = \\sqrt{3} \\int_0^1 t^2(2t - 1)\\,\\mathrm{d}t = \\sqrt{3} \\left( 2 \\frac{1}{4} - \\frac{1}{3} \\right) = \\sqrt{3} \\left( \\frac{1}{2} - \\frac{1}{3} \\right) = \\frac{\\sqrt{3}}{6}$.\nVecteur orthogonal résiduel :\n$$v_2 = X^2 - \\langle X^2, e_0 \\rangle e_0 - \\langle X^2, e_1 \\rangle e_1 = X^2 - \\frac{1}{3} - \\frac{\\sqrt{3}}{6} \\left[\\sqrt{3}(2X - 1)\\right] = X^2 - X + \\frac{1}{6}$$\nNorme au carré : $\\|v_2\\|^2 = \\int_0^1 (t^2 - t + 1/6)^2\\,\\mathrm{d}t = \\frac{1}{180}$.\nDonc $e_2 = \\frac{v_2}{\\|v_2\\|} = \\sqrt{5}(6X^2 - 6X + 1)$.'
        },
        {
          titre: '4. Distance minimale au sous-espace',
          explication: 'D\'après le théorème de la projection orthogonale, la distance de $X^2$ au sous-espace $\\mathbb{R}_1[X]$ est égale à la norme de la composante orthogonale $v_2$ :\n$$d(X^2, \\mathbb{R}_1[X]) = \\|v_2\\| = \\frac{1}{\\sqrt{180}} = \\frac{1}{6\\sqrt{5}} = \\frac{\\sqrt{5}}{30}$$'
        }
      ],
      conclusion: 'Le procédé de Gram-Schmidt permet de résoudre les problèmes d\'optimisation quadratique et d\'ajustement au sens des moindres carrés.',
      reflexeDuCorrecteur: 'La distance d\'un vecteur à un sous-espace $F$ est toujours simplement la norme du vecteur d\'erreur après soustraction de sa projection orthogonale.'
    }
  },
  {
    id: 'exo-100-37-matrice-circulante-diagonalisation',
    title: 'Matrices Circulantes & Transformée de Fourier Discrète (TFD)',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / Centrale MP',
    dureeEstimeeMin: 40,
    enonce: 'On note $J \\in \\mathcal{M}_n(\\mathbb{C})$ la matrice de permutation circulaire unitaire vérifiant $J e_k = e_{k+1}$ pour $1\\le k\\le n-1$ et $J e_n = e_1$.\n1. Calculer $J^n$ et déterminer le spectre de $J$ ainsi qu\'une base orthonormée de vecteurs propres associés.\n2. Une matrice circulante $C$ associée aux coefficients $(a_0, a_1, \\dots, a_{n-1})$ s\'écrit $C = \\sum_{k=0}^{n-1} a_k J^k$. Montrer que $C$ est diagonalisable dans la même base que $J$.\n3. Exprimer ses valeurs propres $\\lambda_m$ à l\'aide de la transformée de Fourier discrète des coefficients $a_k$. En déduire la formule explicite du déterminant d\'une matrice circulante.',
    hints: [
      'Remarquer que $J^n = I_n$, donc $X^n - 1$ est un polynôme annulateur scindé à racines simples sur $\\mathbb{C}$.',
      'Les racines $n$-ièmes de l\'unité sont $\\omega_m = e^{2j\\pi m / n}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Réduction de la matrice de permutation $J$',
          explication: 'La matrice $J$ vérifie $J^n = I_n$. Le polynôme $P(X) = X^n - 1$ est un polynôme annulateur scindé à racines simples sur $\\mathbb{C}$ : les racines $n$-ièmes de l\'unité $\\omega_k = e^{j 2\\pi k / n}$ pour $k \\in \\{0, \\dots, n-1\\}$.\n$J$ est donc diagonalisable. Le vecteur propre associé à $\\omega_k$ est $v_k = \\begin{pmatrix} 1 \\\\ \\omega_k \\\\ \\omega_k^2 \\\\ \\vdots \\\\ \\omega_k^{n-1} \\end{pmatrix}$.\nLa matrice de passage $F = \\frac{1}{\\sqrt{n}} (\\omega_k^l)_{0\\le k, l\\le n-1}$ est la matrice unitaire de Fourier discrète.'
        },
        {
          titre: '2. Co-diagonalisation des matrices circulantes',
          explication: 'Toute matrice circulante s\'écrit comme un polynôme en $J$ : $C = P(J)$ avec $P(X) = \\sum_{k=0}^{n-1} a_k X^k$. Comme $J v_m = \\omega_m v_m$, on a immédiatement :\n$$C v_m = P(J) v_m = P(\\omega_m) v_m$$\nLes vecteurs propres de $C$ sont exactement les mêmes que ceux de $J$ : toutes les matrices circulantes commutent entre elles et sont simultanément diagonalisées par la base de Fourier !'
        },
        {
          titre: '3. Valeurs propres et déterminant circulant',
          explication: 'Les valeurs propres de $C$ sont données par la transformée de Fourier discrète de la première ligne :\n$$\\lambda_m = \\sum_{k=0}^{n-1} a_k \\omega_m^k = \\sum_{k=0}^{n-1} a_k e^{j \\frac{2\\pi m k}{n}} \\quad (0 \\le m \\le n-1)$$\nLe déterminant de la matrice circulante est le produit de ses valeurs propres :\n$$\\det(C) = \\prod_{m=0}^{n-1} \\lambda_m = \\prod_{m=0}^{n-1} \\left( \\sum_{k=0}^{n-1} a_k e^{j \\frac{2\\pi m k}{n}} \\right)$$'
        }
      ],
      conclusion: 'La diagonalisation des matrices circulantes par la TFD explique pourquoi le produit de convolution discret se calcule en $\\mathcal{O}(n \\log n)$ via la FFT (Fast Fourier Transform).',
      reflexeDuCorrecteur: 'Dès qu\'une matrice est invariante par décalage d\'indice périodique, pensez immédiatement à la décomposition sur les puissances de $J$ et les racines de l\'unité.'
    }
  },
  {
    id: 'exo-100-38-effets-ramsay-conductivite',
    title: 'Électrolyse de l\'Eau & Rendement Énergétique Faradique',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Oxydoréduction & Électrochimie',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'On réalise l\'électrolyse de l\'eau acidifiée sous un courant d\'intensité constante $I = 5.0\\text{ A}$ pendant une durée $\\Delta t = 30\\text{ minutes}$ sous une tension imposée $U = 2.0\\text{ V}$.\n1. Écrire les équations aux électrodes (anode et cathode) et le bilan global.\n2. Calculer le volume théorique de dihydrogène gazeux $H_2(g)$ produit mesuré sous $P = 1.0\\text{ bar}$ et $T = 298\\text{ K}$ (constante de Faraday $F = 96500\\text{ C/mol}$).\n3. Sachant que la tension thermodynamique minimale réversible d\'oxydoréduction de l\'eau est $E^\\circ_{rev} = 1.23\\text{ V}$, calculer le rendement énergétique de l\'électrolyseur.',
    hints: [
      'Quantité de charge totale : $Q = I \\Delta t = n_e F$.',
      'À la cathode : $2H^+ + 2e^- \\to H_2(g)$ (2 électrons par molécule de $H_2$).'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équations aux électrodes',
          explication: '- Cathode (pôle négatif, réduction) : $2H^+(aq) + 2e^- \\to H_2(g)$.\n- Anode (pôle positif, oxydation) : $2H_2O(l) \\to O_2(g) + 4H^+(aq) + 4e^-$.\nBilan global de dissociation de l\'eau :\n$$2H_2O(l) \\to 2H_2(g) + O_2(g)$$'
        },
        {
          titre: '2. Volume de dihydrogène produit (Loi de Faraday)',
          explication: 'La quantité totale d\'électricité ayant traversé la cellule vaut :\n$$Q = I \\cdot \\Delta t = 5.0\\text{ A} \\times (30 \\times 60\\text{ s}) = 5.0 \\times 1800 = 9000\\text{ C}$$\nNombre de moles d\'électrons échangés :\n$$n_e = \\frac{Q}{F} = \\frac{9000\\text{ C}}{96500\\text{ C/mol}} \\approx 0.09326\\text{ mol d\'électrons}$$\nComme la réduction produit 1 mole de $H_2$ pour 2 moles d\'électrons :\n$$n(H_2) = \\frac{n_e}{2} = \\frac{0.09326}{2} \\approx 0.04663\\text{ mol}$$\nVolume de gaz parfait correspondant :\n$$V(H_2) = \\frac{n(H_2) R T}{P} = \\frac{0.04663 \\times 8.314 \\times 298}{10^5} \\approx 1.155\\times 10^{-3}\\text{ m}^3 = 1.16\\text{ L}$$'
        },
        {
          titre: '3. Rendement énergétique',
          explication: 'L\'énergie électrique consommée au compteur vaut :\n$$W_{elec} = U \\cdot I \\cdot \\Delta t = 2.0\\text{ V} \\times 9000\\text{ C} = 18000\\text{ J} = 18.0\\text{ kJ}$$\nL\'énergie chimique thermodynamique théoriquement requise à réversibilité vaut :\n$$W_{theo} = E_{rev} \\cdot Q = 1.23\\text{ V} \\times 9000\\text{ C} = 11070\\text{ J} = 11.07\\text{ kJ}$$\nLe rendement énergétique s\'élève donc à :\n$$\\eta = \\frac{W_{theo}}{W_{elec}} = \\frac{E_{rev}}{U} = \\frac{1.23\\text{ V}}{2.00\\text{ V}} = 0.615 = 61.5\\%$$\nLes $38.5\\%$ d\'énergie restante sont dissipés sous forme de chaleur irréversible par effet Joule et par surtensions d\'activation cinétique aux électrodes (surpotentiel d\'anode sur l\'oxygène).'
        }
      ],
      conclusion: 'Le rendement de l\'électrolyse de l\'eau est directement borné par le rapport $E_{rev} / U_{imposée}$.',
      reflexeDuCorrecteur: 'Pour une cellule d\'électrolyse, $\\eta = E_{rev} / U$. Pour une pile en décharge, $\\eta = U_{cellule} / E_{f.e.m.}$.'
    }
  },
  {
    id: 'exo-100-39-theoreme-florence-laplace-induction',
    title: 'Rails de Laplace avec Frottement Mécanique & Vitesse Limite',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Induction Électromagnétique',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Une tige conductrice de masse $m$, de longueur $a$ et de résistance électrique $R$, glisse horizontalement sans frottement sur deux rails parallèles immobiles de résistance négligeable fermés sur eux-mêmes. L\'espace est plongé dans un champ magnétique stationnaire uniforme $\\vec{B} = B \\vec{u}_z$. À $t=0$, on lance la tige à la vitesse initiale $v_0 \\vec{u}_x$.\n1. En précisant l\'orientation du circuit, exprimer la force électromotrice induite $e(t)$ en fonction de $B, a$ et de la vitesse $v(t)$.\n2. Déterminer l\'équation différentielle vérifiée par la vitesse $v(t)$ et donner son expression explicite.\n3. Calculer l\'énergie totale dissipée par effet Joule dans la résistance $R$ au cours du mouvement et vérifier le bilan énergétique global.',
    hints: [
      'Loi de Faraday : $e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = -B a v$.',
      'Force de Laplace : $\\vec{F} = i \\vec{a} \\wedge \\vec{B} = -\\frac{B^2 a^2}{R} v \\vec{u}_x$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Force électromotrice induite de Lorentz',
          explication: 'Orientons le circuit dans le sens horaire vu de dessus, le vecteur surface unitaire est $-\\vec{u}_z$. Le flux magnétique à travers le rectangle de longueur $x(t)$ et de largeur $a$ vaut $\\Phi(t) = -B a x(t)$. D\'après la loi de Faraday :\n$$e(t) = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = B a \\frac{\\mathrm{d}x}{\\mathrm{d}t} = B a v(t)$$\nLe courant induit circulant dans la tige vaut $i(t) = \\frac{e(t)}{R} = \\frac{B a v(t)}{R}$.'
        },
        {
          titre: '2. Équation du mouvement et vitesse exponentielle',
          explication: 'La tige est parcourue par le courant $\\vec{i} = -i \\vec{u}_y$ et subit la force de Laplace :\n$$\\vec{F}_L = i \\vec{u}_y \\wedge (B \\vec{u}_z) = -i B a \\vec{u}_x = -\\frac{B^2 a^2}{R} v \\vec{u}_x$$\nD\'après le PFD appliqué à la tige de masse $m$ en projection sur $\\vec{u}_x$ :\n$$m \\frac{\\mathrm{d}v}{\\mathrm{d}t} = -\\frac{B^2 a^2}{R} v \\iff \\frac{\\mathrm{d}v}{\\mathrm{d}t} + \\frac{v}{\\tau} = 0 \\quad \\text{avec} \\quad \\tau = \\frac{m R}{B^2 a^2}$$\nAvec la condition initiale $v(0) = v_0$, la solution est une décroissance exponentielle pure :\n$$v(t) = v_0 e^{-t / \\tau}$$'
        },
        {
          titre: '3. Bilan énergétique intégral',
          explication: 'La puissance électrique instantanée dissipée par effet Joule vaut :\n$$P_J(t) = R i(t)^2 = R \\left( \\frac{B a v(t)}{R} \\right)^2 = \\frac{B^2 a^2}{R} v_0^2 e^{-2t / \\tau} = \\frac{m}{\\tau} v_0^2 e^{-2t / \\tau}$$\nL\'énergie totale dissipée entre $t=0$ et $t\\to+\\infty$ s\'obtient par intégration temporelle :\n$$E_J = \\int_0^{+\\infty} P_J(t)\\,\\mathrm{d}t = \\frac{m v_0^2}{\\tau} \\left[ -\\frac{\\tau}{2} e^{-2t/\\tau} \\right]_0^{+\\infty} = \\frac{1}{2} m v_0^2$$\nL\'énergie cinétique initiale de la tige est intégralement et rigoureusement convertie en énergie thermique Joule par le freinage électromagnétique de Laplace.'
        }
      ],
      conclusion: 'Le freinage par induction de Laplace est le principe exact des ralentisseurs électromagnétiques Telma des poids lourds et des freins de sécurité des montagnes russes.',
      reflexeDuCorrecteur: 'Dans tout problème d\'induction sans générateur, l\'énergie mécanique perdue égale obligatoirement l\'énergie Joule dissipée.'
    }
  },
  {
    id: 'exo-100-40-theoreme-gauss-densite-gravitationnelle',
    title: 'Théorème de Gauss Gravitationnel & Modèle de Densité Terrestre de PREM',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Champ de Gravitation & Géophysique',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours G2E Géosciences / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'On modélise la Terre comme une sphère de rayon $R_T$ à symétrie sphérique dont la masse volumique varie avec le rayon $r$ selon la loi radiale : $\\rho(r) = \\rho_0 \\left(1 - k \\frac{r^2}{R_T^2}\\right)$ pour $0 \\le r \\le R_T$.\n1. Énoncer le théorème de Gauss gravitationnel pour le champ de pesanteur $\\vec{g}(M)$.\n2. Exprimer la masse totale $M_T$ de la Terre en fonction de $\\rho_0, k$ et $R_T$.\n3. Établir l\'expression du champ de pesanteur $g(r)$ à l\'intérieur de la Terre ($r \\le R_T$).\n4. Pour quelle condition sur $k$ la pesanteur $g(r)$ est-elle strictement croissante de $r=0$ jusqu\'à la surface $R_T$ ?',
    hints: [
      'Théorème de Gauss gravitationnel : $\\iint \\vec{g} \\cdot \\mathrm{d}\\vec{S} = -4\\pi G M_{int}$.',
      'Masse intérieure : $M_{int}(r) = \\int_0^r \\rho(u) 4\\pi u^2\\,\\mathrm{d}u$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Énoncé du théorème de Gauss gravitationnel',
          explication: 'Pour tout champ newtonien attractif en $1/r^2$, le flux du champ gravitationnel à travers une surface fermée $\\Sigma$ orientée vers l\'extérieur est proportionnel à la masse intérieure totale contenue dans le volume :\n$$\\iint_{\\Sigma} \\vec{g} \\cdot \\mathrm{d}\\vec{S} = -4\\pi G M_{int}$$'
        },
        {
          titre: '2. Calcul de la masse totale',
          explication: 'Par intégration en couronnes sphériques de volume $\\mathrm{d}V = 4\\pi r^2\\,\\mathrm{d}r$ :\n$$M_T = \\int_0^{R_T} \\rho_0 \\left(1 - k \\frac{r^2}{R_T^2}\\right) 4\\pi r^2\\,\\mathrm{d}r = 4\\pi \\rho_0 \\left[ \\frac{R_T^3}{3} - \\frac{k R_T^3}{5} \\right] = \\frac{4}{3}\\pi \\rho_0 R_T^3 \\left(1 - \\frac{3}{5}k\\right)$$'
        },
        {
          titre: '3. Champ de gravitation intérieur $g(r)$',
          explication: 'Par symétrie sphérique, $\\vec{g}(r) = -g(r) \\vec{u}_r$. En choisissant comme surface de Gauss une sphère de rayon $r < R_T$, le flux vaut $-g(r) \\times 4\\pi r^2$.\nD\'après Gauss :\n$$-g(r) (4\\pi r^2) = -4\\pi G M_{int}(r) \\implies g(r) = \\frac{G M_{int}(r)}{r^2}$$\nEn calculant la masse contenue dans le rayon $r$ :\n$$M_{int}(r) = 4\\pi \\rho_0 \\left( \\frac{r^3}{3} - k \\frac{r^5}{5 R_T^2} \\right)$$\nCe qui donne directement la pesanteur radiale :\n$$g(r) = 4\\pi G \\rho_0 \\left( \\frac{r}{3} - k \\frac{r^3}{5 R_T^2} \\right) = \\frac{4}{3}\\pi G \\rho_0 r \\left( 1 - \\frac{3k}{5} \\frac{r^2}{R_T^2} \\right)$$'
        },
        {
          titre: '4. Condition de croissance de la pesanteur',
          explication: 'Dérivons $g(r)$ par rapport à $r$ :\n$$\\frac{\\mathrm{d}g}{\\mathrm{d}r} = 4\\pi G \\rho_0 \\left( \\frac{1}{3} - \\frac{3k}{5} \\frac{r^2}{R_T^2} \\right)$$\nLa dérivée est minimale pour $r = R_T$ où elle vaut $\\frac{1}{3} - \\frac{3k}{5}$.\nPour que la pesanteur soit strictement croissante du centre jusqu\'à la surface, il faut que sa dérivée reste positive partout sur $[0, R_T]$ :\n$$\\frac{1}{3} - \\frac{3k}{5} > 0 \\iff k < \\frac{5}{9} \\approx 0.556$$\nSi au contraire $k > 5/9$ (forte concentration de masse dans le noyau terrestre comme dans le modèle PREM réel où le noyau fer-nickel est très dense), la pesanteur passe par un maximum relatif à la limite manteau-noyau (vers $2900\\text{ km}$ de profondeur) avant de décroître légèrement vers la surface.'
        }
      ],
      conclusion: 'Le théorème de Gauss gravitationnel permet de comprendre l\'inversion de pente de la pesanteur à l\'intérieur de la Terre observée par la géophysique séismique.',
      reflexeDuCorrecteur: 'Pour une distribution sphérique, la matière située au-delà du rayon $r$ ne contribue absolument pas au champ gravitationnel intérieur (théorème de Newton de la coquille vide).'
    }
  }
];
