import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART12: ExerciseItem[] = [
  {
    id: 'exo-100-71-algebre-reduction-matrices-positives-perron-frobenius',
    title: 'Théorème de Perron-Frobenius pour les Matrices à Coefficients Strictement Positifs',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction & Algèbre Linéaire Avancée',
    filieres: ['BCPST', 'MP'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'ENS / Mines-Ponts MP',
    dureeEstimeeMin: 45,
    enonce: 'Soit $A = (a_{ij}) \\in \\mathcal{M}_n(\\mathbb{R})$ une matrice à coefficients strictement positifs : $\\forall i, j, \\; a_{ij} > 0$. On munit $\\mathbb{R}^n$ de l\'ordre partiel par composante : $x > 0 \\iff \\forall i, x_i > 0$.\n1. Montrer que si $x \\ge 0$ et $x \\neq 0$, alors $A x > 0$.\n2. On introduit l\'ensemble $\\Lambda = \\{\\lambda \\ge 0 \\mid \\exists x > 0, \\; A x \\ge \\lambda x\\}$. Montrer que $\\Lambda$ est non vide, majoré, et poser $r = \\sup \\Lambda$.\n3. Énoncer les conclusions fondamentales du théorème de Perron-Frobenius : existence d\'une valeur propre strictement positive maximale $r > 0$ (racine de Perron), unicité du vecteur propre associé $v > 0$ à composantes strictement positives, et simplicité algébrique de $r$. Expliquer l\'application à l\'algorithme PageRank de Google et aux dynamiques de populations de Leslie.',
    hints: [
      'Pour le caractère borné, considérer la somme des coefficients par ligne.',
      'Utiliser la compacité de la sphère unité intersection cône positif.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Action de $A$ sur le cône positif',
          explication: 'Pour tout $i \\in \\{1, \\dots, n\\}$, $(A x)_i = \\sum_{j=1}^n a_{ij} x_j$. Comme tous les $a_{ij} > 0$, si $x \\ge 0$ avec au moins une composante $x_{j_0} > 0$, alors $(A x)_i \\ge a_{i j_0} x_{j_0} > 0$ pour tout $i$. Donc $A x$ est à composantes strictement positives ($A x > 0$). La matrice $A$ envoie le cône positif épointé strictement à l\'intérieur de lui-même.'
        },
        {
          titre: '2. Ensemble des multiplicateurs admissibles $\\Lambda$',
          explication: '- Non vide : pour $x = (1, \\dots, 1)^T$, en posant $\\lambda = \\min_i \\sum_j a_{ij} > 0$, on a $A x \\ge \\lambda x$, donc $\\lambda \\in \\Lambda$.\n- Majoré : pour tout $x > 0$, soit $x_k = \\max_i x_i$. Alors $(A x)_k = \\sum_j a_{kj} x_j \\le \\left(\\sum_j a_{kj}\\right) x_k$. La condition $A x \\ge \\lambda x$ impose $\\lambda x_k \\le (A x)_k \\le \\left(\\sum_j a_{kj}\\right) x_k$, d\'où $\\lambda \\le \\max_i \\sum_j a_{ij} = M$. L\'ensemble $\\Lambda$ est donc borné, et admet une borne supérieure finie $r = \\sup \\Lambda$.'
        },
        {
          titre: '3. Théorème de Perron-Frobenius et applications',
          explication: '- **Racine de Perron** : Il existe un vecteur propre $v > 0$ tel que $A v = r v$ avec $r > 0$.\n- **Multiplicité 1** : La valeur propre $r$ est simple (multiplicité algébrique et géométrique égale à 1).\n- **Rayon spectral** : Pour toute autre valeur propre $\\mu \\in \\mathrm{Sp}(A)$, on a l\'inégalité stricte $|\\mu| < r$.\n- **Application PageRank** : La matrice de transition du Web est modélisée par une matrice stochastique irréductible positive. Le théorème de Perron garantit l\'existence et l\'unicité d\'un état stationnaire $\\pi > 0$ vérifiant $\\pi A = \\pi$, attribuant à chaque page web un score d\'autorité unique et calculable par la méthode de la puissance itérée.\n- **Modèle de Leslie (écologie)** : Pour une population structurée en classes d\'âge, la matrice de projection de Leslie possède une unique valeur propre dominante $r = \\lambda_{max}$ : à long terme, la population croît comme $\\lambda_{max}^t$ et sa structure d\'âge converge vers le vecteur propre de Perron associé.'
        }
      ],
      conclusion: 'Le théorème de Perron-Frobenius est le joyau mathématique reliant analyse fonctionnelle, théorie des graphes et modélisation écologique.',
      reflexeDuCorrecteur: 'Matrice à coefficients strictement positifs $\\implies$ unique valeur propre dominante strictement positive et vecteur propre associé à composantes positives.'
    }
  },
  {
    id: 'exo-100-72-physique-ondes-spheriques-pression-acoustique',
    title: 'Onde Acoustique Sphérique & Décroissance Géométrique de l\'Intensité',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Ondes Acoustiques & Acoustique Environnementale',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'Une source sonore ponctuelle isotrope émet dans l\'air une puissance acoustique totale $\\mathcal{P} = 10\\text{ W}$.\n1. En exploitant la symétrie sphérique et la conservation de l\'énergie en espace libre non absorbant, établir la dépendance en distance de l\'intensité acoustique $I(r)$ et de l\'amplitude de pression acoustique $p_0(r)$.\n2. Rappeler la définition du niveau d\'intensité sonore en décibels : $L_I = 10\\log_{10}(I / I_0)$ avec $I_0 = 10^{-12}\\text{ W/m}^2$. Calculer le niveau sonore $L_1$ à la distance $r_1 = 5.0\\text{ m}$.\n3. De combien de décibels le niveau sonore chute-t-il lorsque la distance à la source est doublée ?',
    hints: [
      'L\'énergie se répartit sur la sphère d\'aire $S(r) = 4\\pi r^2$.',
      'L\'intensité varie en $1/r^2$, donc la pression varie en $1/r$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Décroissance en espace libre 3D',
          explication: 'En l\'absence d\'absorption dans le milieu, la puissance acoustique totale $\\mathcal{P}$ traversant toute sphère de rayon $r$ centrée sur la source est constante :\n$$\\mathcal{P} = \\iint I(r)\\,\\mathrm{d}S = I(r) \\times 4\\pi r^2 \\implies I(r) = \\frac{\\mathcal{P}}{4\\pi r^2}$$\nL\'intensité acoustique décroît en $1/r^2$ (atténuation géométrique).\nComme l\'intensité acoustique est reliée à la surpression par $I = \\frac{p_0^2}{2\\rho_0 c}$, l\'amplitude de la surpression acoustique décroît en $1/r$ :\n$$p_0(r) = \\sqrt{\\frac{\\rho_0 c \\mathcal{P}}{2\\pi}} \\frac{1}{r}$$\nL\'onde sphérique divergente s\'écrit $p(r, t) = \\frac{A}{r} \\cos(\\omega t - k r)$.'
        },
        {
          titre: '2. Calcul du niveau sonore à $5\\text{ m}$',
          explication: 'Intensité acoustique à $r_1 = 5.0\\text{ m}$ :\n$$I(r_1) = \\frac{10\\text{ W}}{4\\pi \\times 5^2} = \\frac{10}{100\\pi} = \\frac{1}{10\\pi} \\approx 0.03183\\text{ W/m}^2$$\nNiveau sonore en décibels :\n$$L_1 = 10 \\log_{10}\\left( \\frac{I(r_1)}{I_0} \\right) = 10 \\log_{10}\\left( \\frac{0.03183}{10^{-12}} \\right) = 10 \\log_{10}(3.183\\times 10^{10})$$\n$$L_1 = 10 (10 + \\log_{10} 3.183) = 10 (10 + 0.503) = 105.0\\text{ dB}$$\nCe niveau correspond au niveau sonore très élevé d\'un marteau-piqueur ou d\'un concert rock.'
        },
        {
          titre: '3. Règle du doublement de distance',
          explication: 'Lorsque la distance est multipliée par deux ($r_2 = 2 r_1$) :\n$$I(2r) = \\frac{\\mathcal{P}}{4\\pi (2r)^2} = \\frac{I(r)}{4}$$\nLa variation de niveau sonore en décibels vaut :\n$$\\Delta L = L(2r) - L(r) = 10 \\log_{10}\\left( \\frac{I(r)/4}{I(r)} \\right) = 10 \\log_{10}\\left(\\frac{1}{4}\\right) = -10 \\log_{10}(4) = -20 \\log_{10}(2) \\approx -6.02\\text{ dB}$$\nEn espace libre sphérique tridimensionnel, **doubler la distance à une source sonore entraîne systématiquement une baisse de 6 dB du niveau acoustique**.'
        }
      ],
      conclusion: 'La loi des 6 dB par doublement de distance est la règle fondamentale d\'ingénierie acoustique environnementale et de protection contre le bruit.',
      reflexeDuCorrecteur: 'Pour une source linéique infinie (route, autoroute, train), la surface est un cylindre en $2\\pi r L$, l\'intensité décroît en $1/r$ et le niveau chute de seulement 3 dB par doublement de distance.'
    }
  },
  {
    id: 'exo-100-73-solubilite-precipitation-effet-ion-commun',
    title: 'Produit de Solubilité, Effet d\'Ion Commun & Dissolution de $BaSO_4$',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Équilibres Chimiques & Précipitation',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP Chimie',
    dureeEstimeeMin: 30,
    enonce: 'Le sulfate de baryum $BaSO_4(s)$ est un solide ionique très peu soluble utilisé comme produit de contraste radiologique opaque aux rayons X pour l\'exploration digestive ($pK_s = 10.0$ à $25^\\circ\\text{C}$).\n1. Calculer la solubilité molaire $s_0$ et massique $s_m$ de $BaSO_4$ dans l\'eau pure ($M = 233.4\\text{ g/mol}$).\n2. Calculer la nouvelle solubilité $s_1$ dans une solution de sulfate de sodium $Na_2SO_4$ à concentration $C = 0.10\\text{ mol/L}$. Justifier la chute de solubilité par l\'effet d\'ion commun.\n3. Sachant que les ions baryum libres $Ba^{2+}$ sont hautement toxiques pour l\'organisme humain au-delà de $10^{-5}\\text{ mol/L}$, justifier pourquoi l\'ingestion médicale d\'une bouillie de $BaSO_4$ est sans danger pour le patient.',
    hints: [
      'Produit de solubilité : $K_s = [Ba^{2+}][SO_4^{2-}] = 10^{-pK_s}$.',
      'Dans la solution de sulfate de sodium, $[SO_4^{2-}] = C + s_1 \\approx C$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Solubilité dans l\'eau pure',
          explication: 'L\'équilibre de dissolution s\'écrit :\n$$BaSO_4(s) \\rightleftharpoons Ba^{2+}(aq) + SO_4^{2-}(aq)$$\nDans l\'eau pure, par stœchiométrie $1:1$ : $[Ba^{2+}] = s_0$ et $[SO_4^{2-}] = s_0$.\n$$K_s = s_0^2 = 10^{-10.0} \\implies s_0 = \\sqrt{10^{-10.0}} = 1.0\\times 10^{-5}\\text{ mol/L}$$\nSolubilité massique :\n$$s_m = s_0 \\cdot M = 1.0\\times 10^{-5}\\text{ mol/L} \\times 233.4\\text{ g/mol} \\approx 2.33\\times 10^{-3}\\text{ g/L} = 2.33\\text{ mg/L}$$'
        },
        {
          titre: '2. Solubilité en présence d\'ion commun $SO_4^{2-}$',
          explication: 'Dans la solution de sulfate de sodium à $C = 0.10\\text{ mol/L}$ :\n$$[SO_4^{2-}] = C + s_1 \\quad \\text{et} \\quad [Ba^{2+}] = s_1$$\nComme $K_s$ est minuscule, $s_1 \\ll C$, donc $[SO_4^{2-}] \\approx C = 0.10\\text{ mol/L}$.\nD\'après la loi d\'action de masse :\n$$K_s = s_1 \\cdot C \\implies s_1 = \\frac{K_s}{C} = \\frac{10^{-10.0}}{0.10} = 1.0\\times 10^{-9}\\text{ mol/L}$$\nLa solubilité du sel de baryum est **divisée par un facteur $10000$** en présence de sulfate de sodium ! D\'après le principe de Le Chatelier, l\'apport extérieur d\'un produit de la réaction déplace l\'équilibre vers la gauche (précipitation).'
        },
        {
          titre: '3. Innocuité médicale en radiologie digestive',
          explication: 'Bien que le cation $Ba^{2+}$ soit un poison violent cardiotoxique, la concentration d\'ions baryum libres en solution dans le tube digestif saturé de liquide physiologique riche en sulfates et phosphates ne dépasse jamais $10^{-6}$ à $10^{-9}\\text{ mol/L}$, ce qui est infiniment inférieur au seuil toxique cellulaire. Le sulfate de baryum traverse tout le tractus gastro-intestinal sous forme de poudre inerte sans être absorbé dans le sang, permettant une radiographie de contraste en toute sécurité.'
        }
      ],
      conclusion: 'L\'effet d\'ion commun est la technique chimique universelle pour forcer la précipitation quantitative d\'un composé indésirable.',
      reflexeDuCorrecteur: 'Effet d\'ion commun : $s = K_s / C_{commun}$ dès que $C_{commun} \\gg s$.'
    }
  },
  {
    id: 'exo-100-74-algebre-espaces-euclidiens-adoint',
    title: 'Adjoint d\'un Endomorphisme & Décomposition Polaire dans $\\mathcal{GL}_n(\\mathbb{R})$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Espaces Euclidiens & Endomorphismes Autoadjoints',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / Centrale MP',
    dureeEstimeeMin: 45,
    enonce: 'Soit $E$ un espace euclidien muni du produit scalaire $\\langle \\cdot, \\cdot \\rangle$.\n1. Rappeler la définition de l\'adjoint $u^*$ d\'un endomorphisme $u \\in \\mathcal{L}(E)$.\n2. Soit $u \\in \\mathcal{GL}(E)$ un automorphisme. Montrer que $u^* \\circ u$ est un endomorphisme symétrique défini positif ($u^* \\circ u \\in \\mathcal{S}^{++}(E)$).\n3. En déduire qu\'il existe un unique endomorphisme symétrique défini positif $s \\in \\mathcal{S}^{++}(E)$ tel que $s^2 = u^* \\circ u$ (racine carrée symétrique).\n4. Poser $O = u \\circ s^{-1}$ et démontrer que $O$ est un automorphisme orthogonal ($O \\in \\mathcal{O}(E)$). En déduire le théorème fondamental de décomposition polaire : tout automorphisme $u$ s\'écrit de manière unique sous la forme $u = O \\circ s$.',
    hints: [
      'Pour $s$, diagonaliser $u^* \\circ u$ dans une base orthonormée et prendre la racine carrée positive de chaque valeur propre.',
      'Calculer $O^* \\circ O = (s^{-1})^* \\circ u^* \\circ u \\circ s^{-1}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Définition de l\'adjoint',
          explication: 'Pour tout $u \\in \\mathcal{L}(E)$, il existe un unique endomorphisme noté $u^* \\in \\mathcal{L}(E)$ vérifiant pour tous vecteurs $x, y \\in E$ :\n$$\\langle u(x), y \\rangle = \\langle x, u^*(y) \\rangle$$\nDans une base orthonormée de $E$, la matrice de $u^*$ est la transposée de la matrice de $u$ : $\\mathrm{Mat}(u^*) = (\\mathrm{Mat}(u))^T$.'
        },
        {
          titre: '2. Propriétés de $u^* \\circ u$',
          explication: '- Symétrie : $(u^* \\circ u)^* = u^* \\circ (u^*)^* = u^* \\circ u$. Donc $u^* \\circ u$ est autoadjoint.\n- Positivité : pour tout $x \\in E$, $\\langle (u^* \\circ u)(x), x \\rangle = \\langle u(x), u(x) \\rangle = \\|u(x)\\|^2 \\ge 0$.\n- Caractère défini : si $\\langle (u^* \\circ u)(x), x \\rangle = \\|u(x)\\|^2 = 0$, alors $u(x) = 0$. Comme $u$ est un automorphisme inversible, $\\ker(u) = \\{0\\} \\implies x = 0$.\nDonc $u^* \\circ u \\in \\mathcal{S}^{++}(E)$ est strictement symétrique défini positif.'
        },
        {
          titre: '3. Racine carrée symétrique définie positive',
          explication: 'D\'après le théorème spectral, il existe une base orthonormée $(e_1, \\dots, e_n)$ diagonalisant $u^* \\circ u$ associée à des valeurs propres strictement positives $\\lambda_i > 0$.\nOn définit l\'endomorphisme $s$ par $s(e_i) = \\sqrt{\\lambda_i} e_i$. Dans cette base, la matrice de $s$ est diagonale à coefficients strictement positifs $\\sqrt{\\lambda_i} > 0$ : $s$ est un endomorphisme symétrique défini positif unique tel que $s^2 = u^* \\circ u$.'
        },
        {
          titre: '4. Orthogonalité de $O$ et décomposition polaire',
          explication: 'Comme $s$ est inversible (ses valeurs propres sont non nulles), posons $O = u \\circ s^{-1}$, d\'où $u = O \\circ s$.\nCalculons l\'adjoint de $O$ en remarquant que $s^* = s$ et $(s^{-1})^* = (s^*)^{-1} = s^{-1}$ :\n$$O^* \\circ O = (u \\circ s^{-1})^* \\circ (u \\circ s^{-1}) = (s^{-1})^* \\circ u^* \\circ u \\circ s^{-1} = s^{-1} \\circ (s^2) \\circ s^{-1} = s^{-1} \\circ s \\circ s \\circ s^{-1} = \\mathrm{id}_E$$\n$O$ conserve le produit scalaire : c\'est un endomorphisme orthogonal ($O \\in \\mathcal{O}(E)$).\nL\'unicité provient du fait que $u^* \\circ u = s \\circ O^* \\circ O \\circ s = s^2$, ce qui impose $s = \\sqrt{u^* \\circ u}$ de façon unique, puis $O = u \\circ s^{-1}$.'
        }
      ],
      conclusion: 'La décomposition polaire $M = O S$ généralise à toutes les matrices inversibles l\'écriture polaire d\'un nombre complexe non nul $z = e^{j\\theta} \\rho$.',
      reflexeDuCorrecteur: 'Pour toute matrice inversible $A \\in \\mathcal{GL}_n(\\mathbb{R})$, $A = O S$ avec $O \\in \\mathcal{O}_n(\\mathbb{R})$ et $S \\in \\mathcal{S}_n^{++}(\\mathbb{R})$.'
    }
  },
  {
    id: 'exo-100-75-chimie-organique-diels-alder-regle-endo',
    title: 'Cycloaddition de Diels-Alder [4+2] & Règle Endo d\'Alder',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-stereochimie-biomolecules',
    chapitreTitre: 'Réactions Péricycliques & Chimie Organique',
    filieres: ['BCPST', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / Mines PC',
    dureeEstimeeMin: 35,
    enonce: 'On réalise la cycloaddition de Diels-Alder entre le cyclopentadiène (diène conjugué) et l\'anhydride maléique (diénophile activé) à température ambiante.\n1. Justifier la stéréospécificité *syn* de la cycloaddition [4+2] concertée.\n2. Dessiner les deux diastéréoisomères possibles : l\'isomère *endo* et l\'isomère *exo*.\n3. Expliquer pourquoi l\'isomère *endo* est le produit cinétiquement très majoritaire à basse température à l\'aide de la théorie des orbitales frontières et des interactions secondaires orbitalaires favorables.',
    hints: [
      'Cycloaddition concertée supraciale-supraciale autorisée par les règles de Woodward-Hoffmann.',
      'Les orbitales $p$ des carbonyles du diénophile interagissent favorablement avec les carbones arrières du diène dans l\'état de transition endo.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Mécanisme concerté et stéréospécificité *syn*',
          explication: 'La réaction de Diels-Alder est une cycloaddition péricyclique thermique [4+2] concertée entre le système $\\pi$ à 4 électrons d\'un diène conjugué en conformation obligatoire *s-cis* et le système $\\pi$ à 2 électrons d\'un alcène activé (diénophile).\nLa rupture et la formation des 2 nouvelles liaisons $\\sigma C-C$ s\'effectuent simultanément en une seule étape via un état de transition cyclique à 6 électrons aromatique (règles de Woodward-Hoffmann). La réaction est rigoureusement **stéréospécifique syn** : la stéréochimie relative des substituants du diène et du diénophile est fidèlement conservée dans le produit cyclique adduct.'
        },
        {
          titre: '2. Stéréoisomères Endo vs Exo',
          explication: 'Avec le cyclopentadiène cyclique rigide ponté :\n- **Isomère Endo** : le groupement activateur électro-attracteur (le cycle anhydride) est orienté vers l\'intérieur de la cavité concave du diène (du même côté que le pont méthylène le plus court sous le cycle bicyclique [2.2.1] heptène).\n- **Isomère Exo** : le groupement est orienté vers l\'extérieur dégagé.'
        },
        {
          titre: '3. Règle d\'Alder et interactions orbitalaires secondaires',
          explication: 'Bien que l\'isomère *exo* soit légèrement plus stable thermodynamiquement car il minimise l\'encombrement stérique, c\'est l\'isomère **endo** qui se forme quasi-exclusivement à température ambiante (> 99%) : c\'est le contrôle cinétique de la **règle endo d\'Alder**.\nDans l\'état de transition de l\'approche *endo*, les orbitales atomiques $p$ non liantes des atomes de carbone et d\'oxygène des fonctions carbonyles $-C=O$ de l\'anhydride se trouvent spatialement situées juste en dessous des lobes des orbitales $p$ des carbones C2 et C3 du cyclopentadiène. Ce recouvrement orbitalaire secondaire favorable abaisse substantiellement l\'énergie d\'activation de l\'état de transition *endo*, accélérant considérablement sa vitesse de formation par rapport à l\'état de transition *exo* qui est dépourvu de cette stabilisation quantique.'
        }
      ],
      conclusion: 'La règle endo de Diels-Alder est l\'un des plus beaux triomphes de la théorie des orbitales frontières de Fukui (Prix Nobel 1981).',
      reflexeDuCorrecteur: 'Cycloaddition Diels-Alder : Diène s-cis obligatoire. Stéréospécificité syn. Produit cinétique = isomère ENDO.'
    }
  }
];
