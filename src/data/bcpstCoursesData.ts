import type { CourseChapter } from './cpgeData';

export const BCPST_OFFICIAL_COURSES: CourseChapter[] = [
  // ==========================================
  // MATHEMATIQUES BCPST 1 & 2
  // ==========================================
  {
    id: 'maths-bcpst-proba-continue',
    slug: 'probabilites-continu-bcpst',
    title: 'Probabilités à Densité, Lois Continues & Tests Biologiques',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    annee: '2ème année',
    description: 'Variables aléatoires à densité sur $\\mathbb{R}$, lois exponentielles, lois normales, lois gamma, théorèmes limites (LGN, TCL) et tests statistiques d\'adéquation et de conformité appliqués au vivant.',
    readTime: '30 min',
    prerequis: ['Intégration sur un intervalle quelconque', 'Variables aléatoires discrètes', 'Séries numériques'],
    keyTheorems: [
      {
        name: 'Théorème Central Limite (TCL)',
        statement: 'Soit $(X_n)_{n\\ge 1}$ une suite de variables aléatoires indépendantes et identiquement distribuées (i.i.d.) admettant une espérance $\\mu$ et une variance $\\sigma^2 > 0$. En posant $S_n = \\sum_{k=1}^n X_k$ et $\\overline{X}_n = \\frac{S_n}{n}$, la suite des variables centrées réduites converge en loi vers la loi normale centrée réduite $\\mathcal{N}(0, 1)$ :\n$$Z_n = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}} = \\frac{\\overline{X}_n - \\mu}{\\sigma / \\sqrt{n}} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$$\nPour tous réels $a < b$, $\\lim_{n\\to+\\infty} P(a \\le Z_n \\le b) = \\int_a^b \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}\\,\\mathrm{d}t$.',
        demonstration: 'Démontré via la fonction caractéristique $\\phi_{Z_n}(t) = \\left[ \\phi_X\\left(\\frac{t}{\\sigma\\sqrt{n}}\\right) e^{-j \\frac{\\mu t}{\\sigma\\sqrt{n}}} \\right]^n = \\left(1 - \\frac{t^2}{2n} + o(1/n)\\right)^n \\to e^{-t^2/2}$.',
        astuceConcours: 'Au concours Agro-Véto, justifiez toujours les trois conditions du TCL : indépendance, même loi, et existence d\'un moment d\'ordre 2 fini ($\\\\sigma^2 < +\\\\infty$). La taille de l\'échantillon doit en pratique vérifier $n \\ge 30$.'
      },
      {
        name: 'Loi Exponentielle & Propriété de Sans Mémoire',
        statement: 'Une variable aléatoire positive $X$ suit la loi exponentielle de paramètre $\\lambda > 0$, notée $X \\sim \\mathcal{E}(\\lambda)$, si sa densité est $f(t) = \\lambda e^{-\\lambda t} \\mathbf{1}_{[0, +\\infty[}(t)$. Elle vérifie :\n$$E(X) = \\frac{1}{\\lambda}, \\quad V(X) = \\frac{1}{\\lambda^2}$$\nElle est l\'unique loi continue vérifiant l\'absence de vieillissement : $\\forall s, t \\ge 0, \\; P(X > s+t \\mid X > s) = P(X > t)$.',
        astuceConcours: 'Modélise les durées de vie sans usure (désintégration radioactive, temps d\'attente avant mutation génétique ponctuelle, durée avant hydrolyse spontanée).'
      }
    ],
    sections: [
      {
        title: '1. Variables aléatoires réelles à densité',
        content: 'Une fonction $f : \\mathbb{R} \\to \\mathbb{R}^+$ continue par morceaux est une densité si $\\int_{-\\infty}^{+\\infty} f(t)\\,\\mathrm{d}t = 1$. La fonction de répartition $F_X(x) = P(X \\le x) = \\int_{-\\infty}^x f(t)\\,\\mathrm{d}t$ est continue sur $\\mathbb{R}$ et de classe $\\mathcal{C}^1$ en tout point où $f$ est continue. Pour tout point isolé $x_0$, $P(X = x_0) = 0$.',
        methodKicker: 'Pour calculer la loi d\'une transformation $Y = g(X)$, déterminez d\'abord la fonction de répartition $F_Y(y) = P(g(X) \\le y)$, puis dérivez par rapport à $y$.'
      },
      {
        title: '2. Lois usuelles du programme BCPST',
        content: '- **Loi uniforme** $\\mathcal{U}([a, b])$ : $f(t) = \\frac{1}{b-a} \\mathbf{1}_{[a, b]}(t)$, $E(X) = \\frac{a+b}{2}$, $V(X) = \\frac{(b-a)^2}{12}$.\n- **Loi exponentielle** $\\mathcal{E}(\\lambda)$ : $F(t) = (1 - e^{-\\lambda t})\\mathbf{1}_{[0, +\\infty[}(t)$, $E(X) = 1/\\lambda$.\n- **Loi normale** $\\mathcal{N}(\\mu, \\sigma^2)$ : $f(t) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(t-\\mu)^2}{2\\sigma^2}}$. Transformation canonique : $Z = \\frac{X-\\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$.\n- **Loi Gamma** $\\gamma(a, \\lambda)$ : modélise les sommes de $a$ variables exponentielles indépendantes $\\mathcal{E}(\\lambda)$.'
      },
      {
        title: '3. Intervalles de confiance et tests d\'hypothèses',
        content: 'Pour une proportion inconnue $p$ estimée par $\\widehat{p} = \\frac{S_n}{n}$, l\'intervalle de confiance asymptotique au niveau $1-\\alpha$ vaut :\n$$I_{1-\\alpha} = \\left[ \\widehat{p} - u_{1-\\alpha/2} \\sqrt{\\frac{\\widehat{p}(1-\\widehat{p})}{n}}, \\; \\widehat{p} + u_{1-\\alpha/2} \\sqrt{\\frac{\\widehat{p}(1-\\widehat{p})}{n}} \\right]$$\nPour $\\alpha = 5\\%$, le quantile vaut $u_{0.975} \\approx 1.96$.'
      }
    ],
    piegesClassiques: [
      'Écrire $P(X = a) > 0$ pour une variable à densité (la probabilité ponctuelle est toujours nulle).',
      'Oublier de vérifier la variance finie avant d\'appliquer le TCL (certaines lois comme Cauchy n\'ont pas d\'espérance).',
      'Confondre la fonction de répartition $F(x)$ et la densité de probabilité $f(x)$.'
    ]
  },
  {
    id: 'maths-bcpst-systemes-dynamiques',
    slug: 'systemes-dynamiques-lotka-volterra',
    title: 'Équations Différentielles Non Linéaires & Modèles de Populations (Lotka-Volterra)',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    annee: '1ère & 2ème année',
    description: 'Systèmes différentiels autonomes du premier ordre, équation logistique de Verhulst, systèmes proies-prédateurs de Lotka-Volterra, linéarisation jacobienne et analyse de stabilité des points d\'équilibre.',
    readTime: '28 min',
    prerequis: ['Équations différentielles linéaires', 'Calcul différentiel (dérivées partielles, matrice jacobienne)', 'Réduction des matrices $2\\times 2$'],
    keyTheorems: [
      {
        name: 'Modèle Proie-Prédateur de Lotka-Volterra & Intégrale Première',
        statement: 'Soit $N(t)$ l\'effectif des proies et $P(t)$ celui des prédateurs :\n$$\\begin{cases} \\frac{\\mathrm{d}N}{\\mathrm{d}t} = N (\\alpha - \\beta P) \\\\ \\frac{\\mathrm{d}P}{\\mathrm{d}t} = P (\\delta N - \\gamma) \\end{cases} \\quad (\\alpha, \\beta, \\gamma, \\delta > 0)$$\nLe système admet deux points d\'équilibre : $(0, 0)$ (extinction, instable de type selle) et $(N^*, P^*) = \\left( \\frac{\\gamma}{\\delta}, \\frac{\\alpha}{\\beta} \\right)$.\nIl admet une intégrale première conservée le long des trajectoires :\n$$H(N, P) = \\delta N - \\gamma \\ln N + \\beta P - \\alpha \\ln P = \\text{cste}$$\nLes trajectoires dans le plan de phase $(N, P)$ sont des courbes fermées périodiques entourant $(N^*, P^*)$.',
        demonstration: 'En divisant la première équation par $N$ et la seconde par $P$ puis en effectuant une combinaison linéaire : $\\frac{\\delta N - \\gamma}{N} \\mathrm{d}N + \\frac{\\beta P - \\alpha}{P} \\mathrm{d}P = 0 \\implies \\mathrm{d}H = 0$.',
        astuceConcours: 'À l\'écrit Agro-Véto, la conservation de $H$ montre immédiatement que les populations ne divergent jamais vers $+\\infty$ et ne s\'éteignent jamais pour des conditions initiales strictement positives.'
      },
      {
        name: 'Théorème de Stabilité par Linéarisation Jacobienne',
        statement: 'Soit $X\' = F(X)$ avec $F(X^*) = 0$. Soit $J = D F(X^*)$ la matrice jacobienne au point fixe.\n- Si toutes les valeurs propres de $J$ ont une partie réelle strictement négative ($\\mathrm{Re}(\\lambda_i) < 0$), le point fixe est **asymptotiquement stable** (nœud ou foyer attracteur).\n- S\'il existe au moins une valeur propre de partie réelle strictement positive ($\\mathrm{Re}(\\lambda_i) > 0$), le point fixe est **instable**.\n- Pour une matrice $2\\times 2$, les conditions de stabilité asymptotique sont : $\\mathrm{Tr}(J) < 0$ et $\\det(J) > 0$.',
        astuceConcours: 'Trace $T = \\mathrm{Tr}(J) = \\lambda_1 + \\lambda_2$ et Déterminant $D = \\det(J) = \\lambda_1 \\lambda_2$. Le discriminant $\\Delta = T^2 - 4D$ sépare les foyers (oscillations amorties si $T < 0, \\Delta < 0$) des nœuds (amortissement apériodique si $T < 0, \\Delta \\ge 0$).'
      }
    ],
    sections: [
      {
        title: '1. Équation logistique de Verhulst',
        content: 'Pour une population isolée à capacité biotique $K$ et taux de croissance intrinsèque $r$ :\n$$\\frac{\\mathrm{d}N}{\\mathrm{d}t} = r N \\left(1 - \\frac{N}{K}\\right)$$\nLa solution exacte par séparation des variables avec $N(0) = N_0$ est la sigmoïde :\n$$N(t) = \\frac{K}{1 + \\left(\\frac{K - N_0}{N_0}\\right) e^{-r t}}$$\nLe point d\'inflexion a lieu en $N = K/2$, où la vitesse de croissance $\\frac{\\mathrm{d}N}{\\mathrm{d}t}$ est maximale ($rK/4$).'
      },
      {
        title: '2. Linéarisation des systèmes autonomes $2\\times 2$',
        content: 'Pour $X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$, la matrice jacobienne s\'écrit :\n$$J = \\begin{pmatrix} \\frac{\\partial f}{\\partial x} & \\frac{\\partial f}{\\partial y} \\\\ \\frac{\\partial g}{\\partial x} & \\frac{\\partial g}{\\partial y} \\end{pmatrix}_{(x^*, y^*)}$$\nAu voisinage de $(x^*, y^*)$, le comportement local est régi par le système linéaire tangent $\\frac{\\mathrm{d}}{\\mathrm{d}t}\\begin{pmatrix} u \\\\ v \\end{pmatrix} = J \\begin{pmatrix} u \\\\ v \\end{pmatrix}$.'
      }
    ],
    piegesClassiques: [
      'Conclure à la stabilité sur le cas neutre $\\mathrm{Re}(\\lambda) = 0$ (centre linéaire) sans examiner les termes non linéaires d\'ordre supérieur (sauf si une intégrale première globale existe comme pour Lotka-Volterra).',
      'Oublier d\'évaluer les dérivées partielles aux coordonnées exactes du point d\'équilibre.'
    ]
  },
  {
    id: 'maths-bcpst-acp-statistique',
    slug: 'statistique-acp-bcpst',
    title: 'Statistique Multivariée, Espace Euclidien & Analyse en Composantes Principales (ACP)',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    annee: '2ème année',
    description: 'Données multidimensionnelles, matrice de variance-covariance, matrice de corrélation, diagonalisation spectrale des matrices symétriques réelles, axes et composantes principales, inertie expliquée et cercle des corrélations en biologie.',
    readTime: '25 min',
    prerequis: ['Produit scalaire canonique', 'Projection orthogonale', 'Diagonalisation des matrices symétriques réelles'],
    keyTheorems: [
      {
        name: 'Théorème Spectral & Maximisation de la Variance en ACP',
        statement: 'Soit $V = \\frac{1}{n} X^T X$ la matrice de variance-covariance d\'un tableau de données centré $X \\in \\mathcal{M}_{n, p}(\\mathbb{R})$.\n$V$ est une matrice symétrique réelle positive ($V \\in \\mathcal{S}_p^+(\\mathbb{R})$). D\'après le théorème spectral, il existe une base orthonormée $(u_1, \\dots, u_p)$ de vecteurs propres de $V$ associés à des valeurs propres réelles positives ordonnées :\n$$\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p \\ge 0$$\nLe premier axe principal dirigé par $u_1$ maximise la variance de la variable projetée $c_1 = X u_1$ sous la contrainte $\\|u_1\\| = 1$ :\n$$\\mathrm{Var}(c_1) = u_1^T V u_1 = \\lambda_1 = \\max_{\\|u\\|=1} u^T V u$$',
        astuceConcours: 'L\'inertie totale du nuage de points est la trace de la matrice : $I_{tot} = \\mathrm{Tr}(V) = \\sum_{j=1}^p \\lambda_j$. Le pourcentage de variance expliqué par les $k$ premiers axes vaut $\\frac{\\sum_{i=1}^k \\lambda_i}{\\sum_{j=1}^p \\lambda_j} \\times 100\\%$.'
      }
    ],
    sections: [
      {
        title: '1. Centrage et réduction des variables',
        content: 'Pour comparer des variables biologiques d\'unités différentes (ex: masse en kg, concentration en $\\mu\\text{mol/L}$, rythme cardiaque en bpm), on utilise la matrice centrée-réduite $Z$ où $z_{ij} = \\frac{x_{ij} - \\overline{x}_j}{\\sigma_j}$. La matrice de variance-covariance de $Z$ n\'est autre que la **matrice des corrélations linéaires** $R = \\frac{1}{n} Z^T Z$, de diagonale formée de 1.'
      },
      {
        title: '2. Interprétation du cercle des corrélations',
        content: 'Les variables initiales sont projetées dans le plan des deux premières composantes $(F_1, F_2)$.\n- Si deux flèches de variables forment un angle aigu très fermé ($\\cos\\theta \\approx 1$), les variables sont fortement corrélées positivement.\n- Si les flèches sont orthogonales ($\\theta \\approx 90^\\circ$), elles sont non corrélées (indépendantes linéairement).\n- Si la flèche est proche du cercle unité ($r^2 \\approx 1$), la variable est très bien représentée sur le plan factoriel.'
      }
    ],
    piegesClassiques: [
      'Interpréter les angles entre variables dont la longueur de la flèche est petite (mauvaise qualité de représentation cosinus carré faible).',
      'Confondre le nuage des individus ($n$ points dans $\\mathbb{R}^p$) et le nuage des variables ($p$ points dans $\\mathbb{R}^n$).'
    ]
  },

  // ==========================================
  // PHYSIQUE BCPST 1 & 2
  // ==========================================
  {
    id: 'physique-bcpst-hemodynamique-poiseuille',
    slug: 'mecanique-fluides-hemodynamique-poiseuille',
    title: 'Dynamique des Fluides Réels, Loi de Poiseuille & Hémodynamique',
    matiere: 'Physique',
    filieres: ['BCPST'],
    annee: '1ère & 2ème année',
    description: 'Viscosité dynamique et cinématique, loi de Newton de la viscosité, écoulement laminaire en conduite cylindrique, profil parabolique de vitesse, formule de Hagen-Poiseuille, résistance hydraulique et régulation du débit sanguin.',
    readTime: '27 min',
    prerequis: ['Statique des fluides', 'Bilan de quantité de mouvement', 'Équation de continuité'],
    keyTheorems: [
      {
        name: 'Loi de Hagen-Poiseuille & Profil Parabolique',
        statement: 'Pour un fluide newtonien de viscosité dynamique $\\eta$ en écoulement laminaire stationnaire dans un tube cylindrique rectiligne de rayon $R$ et de longueur $L$, sous une différence de pression $\\Delta P = P_1 - P_2 > 0$ :\n1. Profil de vitesse parabolique avec condition d\'adhérence à la paroi $v(R) = 0$ :\n$$v(r) = \\frac{\\Delta P}{4 \\eta L} (R^2 - r^2) = v_{max} \\left(1 - \\frac{r^2}{R^2}\\right)$$\n2. Débit volumique de Hagen-Poiseuille :\n$$D_v = \\int_0^R v(r) 2\\pi r\\,\\mathrm{d}r = \\frac{\\pi R^4 \\Delta P}{8 \\eta L}$$\n3. Vitesse moyenne : $v_{moy} = \\frac{D_v}{\\pi R^2} = \\frac{v_{max}}{2}$.',
        demonstration: 'Par bilan des forces de cisaillement visqueux $\\tau(r) = -\\eta \\frac{\\mathrm{d}v}{\\mathrm{d}r}$ et de pression sur un cylindre fluide coaxial de rayon $r$ : $\\Delta P \\pi r^2 = 2\\pi r L \\tau(r) \\implies \\frac{\\mathrm{d}v}{\\mathrm{d}r} = -\\frac{\\Delta P}{2\\eta L} r$. Intégration immédiate avec $v(R)=0$.',
        astuceConcours: 'L\'extrême dépendance en $R^4$ est la clé de la vasomotricité biologique : une réduction de rayon de seulement $16\\%$ divise le débit sanguin par deux à pression motrice constante ($0.84^4 \\approx 0.50$) !'
      },
      {
        name: 'Analogie Électrique de la Résistance Hydraulique',
        statement: 'Par analogie avec la loi d\'Ohm $U = R_{elec} I$, on définit la résistance hydraulique $R_h$ par :\n$$\\Delta P = R_h D_v \\quad \\text{avec} \\quad R_h = \\frac{8 \\eta L}{\\pi R^4}$$\n- Résistances en série (artère $\\to$ artériole $\\to$ capillaire d\'un même chemin) : $R_{tot} = \\sum R_i$.\n- Résistances en parallèle (lit de millions de capillaires branchés en dérivation) : $\\frac{1}{R_{tot}} = \\sum \\frac{1}{R_i}$.',
        astuceConcours: 'Bien que le rayon individuel d\'un capillaire soit minuscule, les capillaires sont des millions en dérivation : la résistance globale du lit capillaire est ainsi modérée, évitant une surpression cardiaque excessive.'
      }
    ],
    sections: [
      {
        title: '1. Nombre de Reynolds et régimes d\'écoulement',
        content: 'Le nombre de Reynolds sans dimension compare les effets inertiels aux effets visqueux :\n$$Re = \\frac{\\rho v d}{\\eta} = \\frac{v d}{\\nu}$$\n- $Re < 2000$ : Écoulement laminaire (lignes de courant parallèles, loi de Poiseuille valide).\n- $2000 < Re < 3000$ : Régime transitoire critique.\n- $Re > 3000$ : Écoulement turbulent (vortex, dissipation énergétique accrue, bruit de souffle à l\'auscultation stéthoscopique).'
      },
      {
        title: '2. Rhéologie sanguine et effet Fåhræus-Lindqvist',
        content: 'Le sang est un fluide non newtonien à comportement rhéofluidifiant à cause de la déformabilité et de l\'empilement des hématies (rouleaux de globules rouges aux faibles taux de cisaillement). Dans les microvaisseaux ($d < 300\\;\\mu\\text{m}$), la viscosité apparente diminue drastiquement : c\'est l\'effet Fåhræus-Lindqvist.'
      }
    ],
    piegesClassiques: [
      'Appliquer le théorème de Bernoulli sans perte de charge à un écoulement visqueux (Bernoulli suppose un fluide parfait non visqueux !).',
      'Confondre vitesse maximale sur l\'axe $v_{max}$ et vitesse moyenne $v_{moy} = v_{max}/2$.'
    ]
  },
  {
    id: 'physique-bcpst-transports-membranaires',
    slug: 'transports-membranaires-nernst-planck',
    title: 'Transports Transmembranaires, Diffusion & Potentiel de Repos (Nernst-Planck)',
    matiere: 'Physique',
    filieres: ['BCPST'],
    annee: '1ère & 2ème année',
    description: 'Loi de Fick, gradient électrochimique, mobilité ionique, relation d\'Einstein, équation de Nernst-Planck, potentiel d\'équilibre de Nernst et équation de Goldman-Hodgkin-Katz pour la membrane neuronale.',
    readTime: '26 min',
    prerequis: ['Électrostatique', 'Thermodynamique chimique (potentiel chimique)', 'Équations aux dérivées partielles élémentaires'],
    keyTheorems: [
      {
        name: 'Équation de Nernst-Planck & Potentiel d\'Équilibre de Nernst',
        statement: 'La densité de flux molaire d\'une espèce ionique $i$ de valence $z_i$ sous un gradient de concentration et un champ électrique $E = -\\frac{\\mathrm{d}V}{\\mathrm{d}x}$ s\'écrit :\n$$j_i = -D_i \\frac{\\mathrm{d}C_i}{\\mathrm{d}x} - u_i z_i F C_i \\frac{\\mathrm{d}V}{\\mathrm{d}x}$$\nÀ l\'équilibre thermodynamique ($j_i = 0$), en intégrant avec la relation d\'Einstein $D_i = \\frac{R T u_i}{\\mathcal{N}_A} = R T u_i^*$ :\n$$V_{int} - V_{ext} = E_i = \\frac{R T}{z_i F} \\ln\\left( \\frac{C_i^{ext}}{C_i^{int}} \\right)$$\nÀ $T = 37^\\circ\\text{C}$ ($310\\text{ K}$) : $E_i = \\frac{61.5\\text{ mV}}{z_i} \\log_{10}\\left( \\frac{C_i^{ext}}{C_i^{int}} \\right)$.',
        astuceConcours: 'Pour le potassium $K^+$ ($[K^+]_{ext} \\approx 4\\text{ mM}, [K^+]_{int} \\approx 140\\text{ mM}$) : $E_K \\approx -94\\text{ mV}$. Pour le sodium $Na^+$ ($[Na^+]_{ext} \\approx 140\\text{ mM}, [Na^+]_{int} \\approx 14\\text{ mM}$) : $E_{Na} \\approx +60\\text{ mV}$. Le potentiel de repos neuronale ($-70\\text{ mV}$) est proche de $E_K$ car la membrane au repos est principalement perméable au $K^+$.'
      },
      {
        name: 'Équation de Goldman-Hodgkin-Katz (GHK)',
        statement: 'Lorsque plusieurs ions monovalents ($K^+, Na^+, Cl^-$) diffusent à travers la membrane avec des perméabilités respectives $P_K, P_{Na}, P_{Cl}$, en régime stationnaire de courant total nul $\\sum I_i = 0$ :\n$$V_m = \\frac{R T}{F} \\ln\\left( \\frac{P_K [K^+]_{ext} + P_{Na} [Na^+]_{ext} + P_{Cl} [Cl^-]_{int}}{P_K [K^+]_{int} + P_{Na} [Na^+]_{int} + P_{Cl} [Cl^-]_{ext}} \\right)$$\nNoter l\'inversion $int / ext$ pour l\'anion chlorure $Cl^-$ en raison de sa charge négative $z_{Cl} = -1$.',
        astuceConcours: 'Démontre quantitativement le potentiel d\'action : lors de l\'ouverture massive des canaux sodium voltage-dépendants, $P_{Na}$ devient prépondérant et $V_m$ bascule vers $+50\\text{ mV}$ (dépolarisation).'
      }
    ],
    sections: [
      {
        title: '1. Première et deuxième lois de Fick',
        content: '- **1ère loi (diffusion stationnaire)** : $\\vec{\\jmath}_m = -D \\vec{\\nabla} C$. Le flux net s\'effectue du milieu le plus concentré vers le moins concentré.\n- **2ème loi (conservation de matière)** : $\\frac{\\partial C}{\\partial t} = D \\Delta C$. Pour une source ponctuelle, le profil est une gaussienne dont l\'écart-type croît comme $\\sigma = \\sqrt{2 D t}$.'
      },
      {
        title: '2. Pression osmotique et loi de Van \'t Hoff',
        content: 'Pour une membrane semi-perméable idéale imperméable aux solutés :\n$$\\Pi = \\sum_{i} C_i R T = C_{osm} R T$$\nÀ l\'équilibre osmotique : $\\Delta P = P_1 - P_2 = \\Delta \\Pi = (C_{osm, 1} - C_{osm, 2}) R T$. Si $\\Delta P < \\Delta \\Pi$, l\'eau pénètre dans la cellule (turgescence / hémolyse) ; si le milieu est hypertonique, la cellule perd son eau (plasmolyse).'
      }
    ],
    piegesClassiques: [
      'Oublier d\'inverser le rapport des concentrations pour les anions dans la formule de Nernst ou de Goldman.',
      'Confondre osmolarité (en $\\text{osmol/L}$) et osmolalité (en $\\text{osmol/kg de solvant}$).'
    ]
  },
  {
    id: 'physique-bcpst-optique-microscopie',
    slug: 'optique-microscopie-diffraction-rayleigh',
    title: 'Optique Ondulatoire, Résolution Limite & Microscopie Photonique',
    matiere: 'Physique',
    filieres: ['BCPST'],
    annee: '1ère année',
    description: 'Diffraction de Fraunhofer par une ouverture circulaire, tache d\'Airy, critère de résolution de Rayleigh, ouverture numérique d\'un objectif, formule d\'Abbe du pouvoir séparateur et microscopie à immersion.',
    readTime: '24 min',
    prerequis: ['Optique géométrique des lentilles minces', 'Interférences lumineuses à deux ondes'],
    keyTheorems: [
      {
        name: 'Formule d\'Abbe & Pouvoir Séparateur d\'un Microscope',
        statement: 'Le pouvoir séparateur d\'un microscope photonique est la distance minimale $d_{min}$ entre deux points objets permettant encore de les distinguer séparément :\n$$d_{min} = \\frac{1.22 \\lambda_0}{2 n \\sin\\alpha} = \\frac{0.61 \\lambda_0}{\\mathrm{ON}}$$\noù $\\mathrm{ON} = n \\sin\\alpha$ est l\'**ouverture numérique** de l\'objectif ($n$ indice du milieu objet, $\\alpha$ demi-angle du cône de lumière capté par l\'objectif).',
        demonstration: 'Démontré par Ernst Abbe via la théorie de la formation des images en lumière cohérente : l\'objectif doit collecter au moins les ordres 0 et +1 (ou -1) de diffraction de la grille périodique d\'objet pour reconstruire l\'image : $\\sin\\alpha \\ge \\frac{\\lambda}{d} = \\frac{\\lambda_0}{n d}$.',
        astuceConcours: 'Pour améliorer la résolution (diminuer $d_{min}$) : utiliser une longueur d\'onde plus courte $\\lambda_0$ (lumière bleue ou UV), ou utiliser un objectif à immersion dans l\'huile ($n \\approx 1.515$) pour augmenter l\'ouverture numérique jusqu\'à $\\mathrm{ON} \\approx 1.4$.'
      },
      {
        name: 'Critère de Rayleigh pour une Pupille Circulaire',
        statement: 'La diffraction d\'une onde plane par une pupille circulaire de diamètre $D$ donne dans le plan focal image une tache d\'Airy dont le premier anneau sombre a pour rayon angulaire :\n$$\\theta_0 = 1.22 \\frac{\\lambda_0}{D}$$\nSelon le critère de Rayleigh, deux sources ponctuelles incohérentes sont juste résolues lorsque le maximum central de la figure de diffraction de l\'une coïncide avec le premier minimum d\'intensité de l\'autre.',
        astuceConcours: 'Au centre du creux entre les deux taches résolues au critère de Rayleigh, l\'intensité résiduelle vaut environ $73.5\\%$ du pic, ce qui correspond à la limite de détection de l\'œil humain.'
      }
    ],
    sections: [
      {
        title: '1. Chaîne optique du microscope composé',
        content: 'Un microscope est constitué de deux systèmes convergents :\n- **Objectif** : de très courte distance focale $f\'_1 \\approx 2 - 10\\text{ mm}$, donne une image intermédiaire réelle et très agrandie $\\gamma_1 = -\\frac{\\Delta}{f\'_1}$ ($\\Delta$ est l\'intervalle optique standardisé $F\'_1 F_2 = 160\\text{ mm}$).\n- **Oculaire** : sert de loupe pour observer l\'image intermédiaire sans fatigue d\'accommodation (l\'image finale est rejetée à l\'infini) avec une puissance intrinsèque $P_2 = 1/f\'_2$.\n- **Grossissement commercial** : $G = |\\gamma_1| \\times G_{oculaire} = \\frac{\\Delta}{f\'_1} \\frac{d_m}{f\'_2}$ avec $d_m = 0.25\\text{ m}$.'
      }
    ],
    piegesClassiques: [
      'Confondre grossissement $G$ (qui peut être arbitrairement grand en agrandissant l\'image) et pouvoir séparateur $d_{min}$ (limité fondamentalement par la diffraction ondulatoire).',
      'Oublier l\'indice de réfraction $n$ dans le calcul de la longueur d\'onde dans le milieu $\\lambda = \\lambda_0 / n$.'
    ]
  },

  // ==========================================
  // CHIMIE BCPST 1 & 2
  // ==========================================
  {
    id: 'chimie-bcpst-tampons-acides-bases',
    slug: 'equilibres-tampons-biologiques-ph',
    title: 'Équilibres Acido-Basiques Physiologiques & Systèmes Tampons Sanguins',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    annee: '1ère année',
    description: 'Couples acido-basiques biologiques, équation de Henderson-Hasselbalch, pouvoir tampon $\\beta$, tampon bicarbonate/acide carbonique ($CO_2$ dissous), tampon phosphate intracellulaire, pouvoir tampon de l\'hémoglobine et régulation du pH sanguin.',
    readTime: '25 min',
    prerequis: ['Équilibres en solution aqueuse', 'Constante d\'acidité $K_a$', 'Lois de Le Chatelier'],
    keyTheorems: [
      {
        name: 'Équation d\'Henderson-Hasselbalch & Système Bicarbonate',
        statement: 'Pour tout couple acide faible / base conjuguée $HA / A^-$ :\n$$pH = pK_a + \\log_{10}\\left( \\frac{[A^-]}{[HA]} \\right)$$\nPour le système tampon majeur du plasma sanguin $CO_2(aq), H_2O / HCO_3^-$ avec $pK_a = 6.1$ à $37^\\circ\\text{C}$ et loi de Henry $[CO_2(aq)] = \\alpha P_{CO_2}$ (avec $\\alpha = 0.03\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{mmHg}^{-1}$) :\n$$pH = 6.1 + \\log_{10}\\left( \\frac{[HCO_3^-]}{\\alpha P_{CO_2}} \\right)$$\nÀ pH physiologique normal ($7.40$) et $P_{CO_2} = 40\\text{ mmHg}$ :\n$$\\frac{[HCO_3^-]}{[CO_2(aq)]} = 10^{7.40 - 6.10} = 10^{1.3} \\approx 20 \\implies [HCO_3^-] = 20 \\times 1.2 = 24\\text{ mmol/L}$$',
        astuceConcours: 'Le tampon bicarbonate fonctionne à pH 7.40 très éloigné de son $pK_a$ (6.10). Sa remarquable efficacité provient du fait qu\'il s\'agit d\'un système **ouvert** : le pôle acide $CO_2$ est régulé en temps réel par la ventilation pulmonaire, et le pôle basique $HCO_3^-$ par l\'excrétion/réabsorption rénale.'
      },
      {
        name: 'Indice de Pouvoir Tampon de Van Slyke',
        statement: 'Le pouvoir tampon $\\beta$ mesure la résistance d\'une solution à la variation de pH lors de l\'ajout d\'acide fort ou de base forte :\n$$\\beta = \\frac{\\mathrm{d}C_b}{\\mathrm{d}pH} = -\\frac{\\mathrm{d}C_a}{\\mathrm{d}pH} = \\ln(10) \\left( [H_3O^+] + [HO^-] + C_0 \\frac{K_a [H_3O^+]}{(K_a + [H_3O^+])^2} \\right)$$\nEn milieu faiblement acide ou basique, $\\beta$ est maximal lorsque $[H_3O^+] = K_a$, c\'est-à-dire à $pH = pK_a$ où $\\beta_{max} = \\ln(10) \\frac{C_0}{4} \\approx 0.576 C_0$.',
        astuceConcours: 'Le pouvoir tampon est proportionnel à la concentration totale $C_0$ et présente une zone d\'efficacité optimale sur la plage $[pK_a - 1, \\; pK_a + 1]$.'
      }
    ],
    sections: [
      {
        title: '1. Diagramme de Davenport et désordres acido-basiques',
        content: 'Le diagramme de Davenport porte $[HCO_3^-]$ en ordonnée et le $pH$ en abscisse. Les isobares de $P_{CO_2}$ sont des courbes exponentielles croissantes.\n- **Acidose respiratoire** : hypoventilation $\\implies P_{CO_2} > 40\\text{ mmHg}$, $pH < 7.38$, déplacement vers la droite le long de la ligne des tampons non bicarbonates.\n- **Alcalose métabolique** : vomissements/perte d\'acides $\\implies [HCO_3^-] > 27\\text{ mmol/L}$, $pH > 7.42$.\n- **Compensation** : rénale lente (heures/jours) par rétention de bicarbonate, ou respiratoire rapide (minutes) par hyperventilation réflexe.'
      }
    ],
    piegesClassiques: [
      'Oublier de convertir la pression partielle $P_{CO_2}$ en concentration molaire dissoute via le coefficient de solubilité de Henry $\\alpha$.',
      'Penser qu\'un système tampon fermé est efficace à plus de 1.5 unité de pH de son $pK_a$.'
    ]
  },
  {
    id: 'chimie-bcpst-stereochimie-biomolecules',
    slug: 'stereochimie-glucides-acides-amines',
    title: 'Stéréochimie & Conformation des Biomolécules (Glucides, Acides Aminés)',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    annee: '1ère année',
    description: 'Projection de Fischer, séries D et L, chiralité des acides aminés naturels, cyclisation hémiacétalique des aldoses et cétoses, projection de Haworth, anomérie $\\alpha$ / $\\beta$, conformations chaises des pyranoses et mutarotation.',
    readTime: '26 min',
    prerequis: ['Carbone asymétrique', 'Isomérie de conformation et configuration', 'Règles de Cahn-Ingold-Prelog (CIP)'],
    keyTheorems: [
      {
        name: 'Convention de Fischer & Séries D/L Biologiques',
        statement: 'En projection de Fischer, la chaîne carbonée la plus longue est verticale avec le carbone le plus oxydé en haut (C1 pour un aldose, C2 pour un cétose).\n- **Glucides** : La configuration D ou L est fixée par la position du groupe hydroxyle $-OH$ porté par l\'avant-dernier carbone (le carbone asymétrique de plus haut numéro, C5 pour un aldohexose). S\'il est à droite en projection de Fischer, l\'ose appartient à la **série D** (majorité absolue des oses naturels).\n- **Acides aminés** : L\'acide aminé appartient à la **série L** si le groupe amine $-NH_2$ est projeté à gauche en Fischer avec le groupe carboxylique $-COOH$ en haut (tous les acides aminés protéinogènes standard sont de série L, à l\'exception de la glycine achirale).',
        astuceConcours: 'Attention piège concours : La série D ou L n\'a aucun lien a priori avec le pouvoir rotatoire dextrogyre $(+)$ ou lévogyre $(-)$ ! Le D-fructose est par exemple fortement lévogyre (d\'où son ancien nom de lévulose).'
      },
      {
        name: 'Cyclisation, Anomérie & Stabilité Conformationnelle du D-Glucose',
        statement: 'L\'attaque nucléophile intramoléculaire de l\'hydroxyle en C5 sur le carbonyle en C1 crée un nouveau carbone asymétrique appelé **carbone anomérique** :\n- Anomère $\\alpha$ : groupe $-OH$ anomérique du côté opposé au groupement $-CH_2OH$ de référence (en dessous du plan moyen en projection de Haworth pour la série D).\n- Anomère $\\beta$ : groupe $-OH$ anomérique du même côté que $-CH_2OH$ (au-dessus du plan).\nPour le $\\beta$-D-glucopyranose dans sa conformation chaise $^{4}C_1$, **tous les substituants encombrants (les 4 hydroxyles et le groupement hydroxyméthyle) sont rigoureusement en position équatoriale**, ce qui minimise les interactions 1,3-diaxiales et explique la prépondérance thermodynamique du $\\beta$-D-glucose à l\'équilibre de mutarotation (environ $64\\%\\;\\beta$ contre $36\\%\\;\\alpha$).',
        astuceConcours: 'Sachez tracer sans hésiter la chaise du $\\beta$-D-glucopyranose avec toutes ses liaisons équatoriales en zig-zag !'
      }
    ],
    sections: [
      {
        title: '1. Mutarotation et loi de Biot',
        content: 'La mise en solution d\'un anomère pur (ex: $\\alpha$-D-glucose, $[\\alpha]_D = +112^\\circ$) voit son pouvoir rotatoire évoluer spontanément au cours du temps pour atteindre une valeur d\'équilibre stable ($+52.7^\\circ$). Selon la loi de Biot $[\\alpha]_{eq} = x_\\alpha [\\alpha]_\\alpha + (1 - x_\\alpha) [\\alpha]_\\beta$ avec $[\\alpha]_\\beta = +18.7^\\circ$, on calcule immédiatement $x_\\alpha \\approx 36\\%$ et $x_\\beta \\approx 64\\%$.'
      },
      {
        title: '2. Géométrie de la liaison peptidique',
        content: 'La délocalisation du doublet non liant de l\'azote sur le carbonyle $O=C-N \\leftrightarrow ^-O-C=N^+$ confère à la liaison peptidique un caractère partiel de double liaison (environ $40\\%$). Conséquence : la liaison est rigide, plane, avec une barrière d\'isomérisation élevée ($E_a \\approx 80\\text{ kJ/mol}$) et adopte quasi-exclusivement la configuration **trans** pour minimiser l\'encombrement stérique entre chaînes latérales.'
      }
    ],
    piegesClassiques: [
      'Confondre épimères (diastéréoisomères ne différant que par un seul centre stéréogène) et anomères (épimères sur le carbone hémiacétalique spécifique).',
      'Déduire la configuration $R/S$ d\'une molécule à partir de sa désignation D/L sans réappliquer rigoureusement les règles de Cahn-Ingold-Prelog (la L-cystéine est $R$, alors que les autres L-aminoacides sont $S$ à cause de la priorité atomique du soufre).'
    ]
  },
  {
    id: 'chimie-bcpst-cinetique-enzymatique',
    slug: 'cinetique-enzymatique-michaelis-menten',
    title: 'Cinétique Enzymatique de Michaelis-Menten & Mécanismes d\'Inhibition',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    annee: '1ère & 2ème année',
    description: 'Modèle de Michaelis-Menten, constante de Michaelis $K_M$, vitesse maximale $V_{max}$, efficacité catalytique $k_{cat}/K_M$, représentations graphiques (Lineweaver-Burk, Eadie-Hofstee) et types d\'inhibitions (compétitive, non compétitive, incompétitive).',
    readTime: '28 min',
    prerequis: ['Cinétique chimique homogène (ordres de réaction)', 'Approximation de l\'état quasi-stationnaire (AEQS)'],
    keyTheorems: [
      {
        name: 'Équation de Michaelis-Menten',
        statement: 'Soit le mécanisme d\'Henri-Michaelis-Menten :\n$$E + S \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} ES \\xrightarrow{k_2 = k_{cat}} E + P$$\nSous l\'Approximation de l\'État Quasi-Stationnaire (AEQS) appliquée au complexe enzyme-substrat $\\frac{\\mathrm{d}[ES]}{\\mathrm{d}t} = 0$, et avec la conservation de l\'enzyme totale $[E]_0 = [E] + [ES]$ :\n$$v = \\frac{V_{max} [S]}{K_M + [S]} \\quad \\text{avec} \\quad K_M = \\frac{k_{-1} + k_{cat}}{k_1} \\quad \\text{et} \\quad V_{max} = k_{cat} [E]_0$$\n- Si $[S] \\ll K_M$ : cinétique d\'ordre 1 par rapport au substrat $v \\approx \\frac{k_{cat}}{K_M} [E]_0 [S]$ (la constante de spécificité $k_{cat}/K_M$ mesure l\'efficacité catalytique limite).\n- Si $[S] \\gg K_M$ : saturation des sites enzymatiques, ordre 0 $v \\approx V_{max}$.',
        demonstration: 'Démontré en posant $v = k_{cat} [ES]$. AEQS : $k_1 [E][S] = (k_{-1} + k_{cat}) [ES] \\implies [E][S] = K_M [ES]$. Avec $[E] = [E]_0 - [ES]$, on isole $[ES] = \\frac{[E]_0 [S]}{K_M + [S]}$.',
        astuceConcours: '$K_M$ a la dimension d\'une concentration molaire et représente la concentration en substrat pour laquelle la vitesse initiale est égale à la moitié de la vitesse maximale : $v([S] = K_M) = V_{max}/2$. Plus $K_M$ est faible, plus l\'affinité apparente de l\'enzyme pour le substrat est élevée.'
      },
      {
        name: 'Linéarisation en Double Réciproque de Lineweaver-Burk',
        statement: 'En inversant l\'équation de Michaelis-Menten :\n$$\\frac{1}{v} = \\frac{K_M}{V_{max}} \\frac{1}{[S]} + \\frac{1}{V_{max}}$$\nLa courbe de $1/v$ en fonction de $1/[S]$ est une droite affine :\n- Pente : $\\frac{K_M}{V_{max}}$\n- Ordonnée à l\'origine ($1/[S] = 0$) : $\\frac{1}{V_{max}}$\n- Abscisse à l\'origine ($1/v = 0$) : $-\\frac{1}{K_M}$.',
        astuceConcours: 'Permet de distinguer instantanément les modes d\'inhibition réversible :\n- **Inhibition compétitive** (l\'inhibiteur se fixe sur le site actif) : $V_{max}$ inchangée, $K_M^{app} = K_M(1 + [I]/K_I)$ augmente $\\implies$ même ordonnée à l\'origine, la pente augmente.\n- **Inhibition non compétitive** (l\'inhibiteur se fixe ailleurs) : $V_{max}^{app} = \\frac{V_{max}}{1 + [I]/K_I}$ diminue, $K_M$ inchangé $\\implies$ même abscisse à l\'origine.'
      }
    ],
    sections: [
      {
        title: '1. Facteurs physico-chimiques influençant l\'activité enzymatique',
        content: '- **Température** : Augmentation exponentielle de la vitesse selon la loi d\'Arrhenius $k = A e^{-E_a/(RT)}$, suivie d\'une chute brutale au-delà d\'une température optimale $T_{opt} \\approx 40-50^\\circ\\text{C}$ par dénaturation thermique réversible puis irréversible de la structure tertiaire de la protéine.\n- **pH** : Courbe en cloche centrée sur un pH optimal due aux états d\'ionisation des résidus catalytiques du site actif (acides carboxyliques, imidazoles d\'histidine, amines de lysine).'
      }
    ],
    piegesClassiques: [
      'Confondre $K_M$ (constante cinétique) et $K_D = k_{-1}/k_1$ (constante de dissociation thermodynamique) : $K_M = K_D$ seulement dans l\'hypothèse de Briggs-Haldane où $k_{cat} \\ll k_{-1}$.',
      'Utiliser la vitesse après épuisement partiel du substrat : seule la **vitesse initiale** $v_0$ (pente à $t=0$) est utilisable dans le modèle de Michaelis-Menten.'
    ]
  }
];
