import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART14: ExerciseItem[] = [
  {
    id: 'exo-100-86-algebre-reduction-matrices-compagnon',
    title: 'Matrice Compagnon d\'un Polynôme & Critère de Diagonalisabilité',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Polynômes',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Soit $P(X) = X^n + a_{n-1} X^{n-1} + \\dots + a_1 X + a_0 \\in \\mathbb{K}[X]$ un polynôme unitaire. On lui associe sa matrice compagnon $C_P \\in \\mathcal{M}_n(\\mathbb{K})$ :\n$$C_P = \\begin{pmatrix} 0 & 0 & \\dots & 0 & -a_0 \\\\ 1 & 0 & \\dots & 0 & -a_1 \\\\ 0 & 1 & \\dots & 0 & -a_2 \\\\ \\vdots & \\ddots & \\ddots & \\vdots & \\vdots \\\\ 0 & \\dots & 0 & 1 & -a_{n-1} \\end{pmatrix}$$\n1. Démontrer par récurrence ou en développant par rapport à la dernière colonne que $\\det(X I_n - C_P) = P(X)$.\n2. Montrer que pour toute valeur propre $\\lambda$ de $C_P$, le sous-espace propre associé $E_\\lambda$ est de dimension 1 (droite vectorielle).\n3. En déduire une condition nécessaire et suffisante portant sur les racines de $P$ pour que la matrice compagnon $C_P$ soit diagonalisable sur $\\mathbb{K}$.',
    hints: [
      'Pour le calcul du polynôme caractéristique, ajouter à la dernière colonne $C_n + X C_{n-1} + X^2 C_{n-2} + \\dots + X^{n-1} C_1$.',
      'Le rang de $C_P - \\lambda I_n$ est au moins égal à $n-1$ grâce à la sous-matrice identité de taille $n-1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul du polynôme caractéristique de $C_P$',
          explication: 'Écrivons la matrice $X I_n - C_P$ :\n$$\\det(X I_n - C_P) = \\begin{vmatrix} X & 0 & \\dots & 0 & a_0 \\\\ -1 & X & \\dots & 0 & a_1 \\\\ 0 & -1 & \\ddots & 0 & a_2 \\\\ \\vdots & \\ddots & \\ddots & X & \\vdots \\\\ 0 & \\dots & 0 & -1 & X + a_{n-1} \\end{vmatrix}$$\nEn effectuant l\'opération sur les colonnes $C_n \\leftarrow C_n + X C_{n-1} + X^2 C_{n-2} + \\dots + X^{n-1} C_1$, la dernière colonne devient $(0, 0, \\dots, 0, P(X))^T$.\nEn développant par rapport à cette dernière colonne, le seul terme non nul est le coefficient d\'indice $(n, n)$ multiplié par le déterminant de la sous-matrice triangulaire supérieure de taille $n-1$ formée de $-1$ sur la diagonale :\n$$\\det(X I_n - C_P) = P(X) \\cdot (-1)^{2n} \\cdot \\det\\begin{pmatrix} -1 & X & \\dots \\\\ 0 & -1 & X \\\\ 0 & 0 & -1 \\end{pmatrix} = P(X)$$\nLe polynôme caractéristique de la matrice compagnon est donc rigoureusement le polynôme $P(X)$ lui-même.'
        },
        {
          titre: '2. Dimension des sous-espaces propres',
          explication: 'Soit $\\lambda$ une valeur propre de $C_P$ ($P(\\lambda) = 0$).\nExaminons la matrice $C_P - \\lambda I_n$ :\nEn supprimant sa première ligne et sa dernière colonne, il reste une matrice carrée d\'ordre $n-1$ triangulaire inférieure avec des 1 sur toute la diagonale principale. Son déterminant est $1 \\neq 0$, donc cette sous-matrice est inversible.\nLe rang de $C_P - \\lambda I_n$ est donc au moins égal à $n-1$ :\n$$\\mathrm{rg}(C_P - \\lambda I_n) \\ge n - 1$$\nD\'après le théorème du rang, la dimension du sous-espace propre vaut :\n$$\\dim E_\\lambda = n - \\mathrm{rg}(C_P - \\lambda I_n) \\le n - (n - 1) = 1$$\nComme $\\lambda$ est valeur propre, $\\dim E_\\lambda \\ge 1$, d\'où obligatoirement :\n$$\\dim E_\\lambda = 1$$\nTous les sous-espaces propres d\'une matrice compagnon sont des droites vectorielles.'
        },
        {
          titre: '3. Condition de diagonalisabilité',
          explication: 'Une matrice est diagonalisable si et seulement si son polynôme caractéristique est scindé et si pour chaque valeur propre, la multiplicité géométrique égale la multiplicité algébrique : $\\dim E_\\lambda = m_\\lambda$.\nComme $\\dim E_\\lambda = 1$ pour toute valeur propre, il est nécessaire et suffisant que chaque multiplicité algébrique vaille 1 ($m_\\lambda = 1$).\nConclusion : **La matrice compagnon $C_P$ est diagonalisable sur $\\mathbb{K}$ si et seulement si le polynôme $P(X)$ est scindé à racines simples sur $\\mathbb{K}$** (c\'est-à-dire admet $n$ racines deux à deux distinctes).'
        }
      ],
      conclusion: 'La matrice compagnon fournit un exemple canonique de matrice dont le polynôme minimal coïncide avec le polynôme caractéristique (endomorphisme cyclique).',
      reflexeDuCorrecteur: 'Matrice compagnon $\\implies$ sous-espaces propres de dimension 1 $\\implies$ diagonalisable SSI racines simples.'
    }
  },
  {
    id: 'exo-100-87-physique-cavite-laser-modes-perot',
    title: 'Cavité Fabry-Pérot & Modes Longitudinaux d\'un Oscillateur Laser',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Optique Ondulatoire & Lasers',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Un résonateur laser à gaz Hélium-Néon ($\\lambda_0 = 632.8\\text{ nm}$) est constitué de deux miroirs plans parallèles distants de $L = 30.0\\text{ cm}$. Le milieu amplificateur possède une bande spectrale d\'émission élargie par effet Doppler de largeur à mi-hauteur $\\Delta \\nu_D = 1.5\\text{ GHz}$.\n1. Établir la condition d\'onde stationnaire résonante sur la cavité (aller-retour de l\'onde) et en déduire l\'expression des fréquences des modes longitudinaux $\\nu_q$.\n2. Calculer l\'intervalle spectral libre $\\Delta \\nu_{ISL} = \\nu_{q+1} - \\nu_q$ entre deux modes longitudinaux adjacents.\n3. Combien de modes longitudinaux distincts peuvent simultanément osciller au-dessus du seuil d\'amplification laser ? Comment peut-on rendre le laser rigoureusement monomode ?',
    hints: [
      'Condition de résonance constructive : l\'aller-retour doit valoir un nombre entier de longueurs d\'onde ($2 L = q \\lambda$).',
      'Intervalle spectral libre : $\\Delta \\nu_{ISL} = \\frac{c}{2L}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Quantification des modes longitudinaux de cavité',
          explication: 'Pour qu\'une onde lumineuse interfère constructivement avec elle-même après un aller-retour complet dans la cavité de longueur $L$, le déphasage sur l\'aller-retour doit être un multiple entier de $2\\pi$ :\n$$\\Delta\\phi = k (2 L) = 2 q \\pi \\iff 2 L = q \\lambda = q \\frac{c}{\\nu_q} \\quad (q \\in \\mathbb{N}^*)$$\nLes fréquences propres autorisées par les conditions aux limites du résonateur sont donc quantifiées sous la forme d\'un peigne de fréquences équidistantes :\n$$\\nu_q = q \\frac{c}{2L}$$'
        },
        {
          titre: '2. Calcul de l\'intervalle spectral libre (ISL)',
          explication: 'L\'écartement fréquentiel entre deux modes longitudinaux consécutifs s\'exprime par :\n$$\\Delta \\nu_{ISL} = \\nu_{q+1} - \\nu_q = \\frac{c}{2L}$$\nPour $L = 30.0\\text{ cm} = 0.300\\text{ m}$ :\n$$\\Delta \\nu_{ISL} = \\frac{3.0\\times 10^8\\text{ m/s}}{2 \\times 0.300\\text{ m}} = \\frac{3.0\\times 10^8}{0.600} = 5.0\\times 10^8\\text{ Hz} = 500\\text{ MHz}$$'
        },
        {
          titre: '3. Décompte des modes actifs et filtre monomode',
          explication: '- Le milieu He-Ne présente une bande de gain d\'émission spontanée élargie par effet Doppler thermique de $\\Delta \\nu_D = 1.5\\text{ GHz} = 1500\\text{ MHz}$.\nLe nombre de modes longitudinaux tombant dans la bande amplificatrice au-dessus du seuil laser vaut :\n$$N_{modes} \\approx \\frac{\\Delta \\nu_D}{\\Delta \\nu_{ISL}} = \\frac{1500\\text{ MHz}}{500\\text{ MHz}} = 3\\text{ modes}$$\nLe faisceau émis n\'est pas purement monochromatique : il contient 3 composantes spectrales distinctes qui battent entre elles à $500\\text{ MHz}$.\n- **Obtention d\'un régime monomode pur** :\nPour obtenir un laser strictement monomode (indispensable en interférométrie de haute précision) :\n1. Soit raccourcir la longueur de cavité : si $L < \\frac{c}{2 \\Delta \\nu_D} = \\frac{3\\times 10^8}{2 \\times 1.5\\times 10^9} = 0.10\\text{ m} = 10\\text{ cm}$, l\'ISL devient supérieur à $1.5\\text{ GHz}$ : un seul mode peut alors se trouver dans la bande de gain.\n2. Soit insérer à l\'intérieur de la cavité un étalon Fabry-Pérot intracavité très mince incliné qui filtre et élimine deux des trois modes par interférence destructive sélective.'
        }
      ],
      conclusion: 'La cavité laser agit comme un filtre spectral ultra-sélectif qui transforme une émission spontanée large en raies de cohérence temporelle extrême.',
      reflexeDuCorrecteur: 'Intervalle spectral libre d\'une cavité de longueur $L$ : $\\Delta\\nu = \\frac{c}{2L}$.'
    }
  },
  {
    id: 'exo-100-88-chimie-solubilite-ph-complexe-ammoniac',
    title: 'Compétition Solubilité / Complexation : Dissolution du Chlorure d\'Argent par l\'Ammoniac',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Équilibres en Solution & Complexation',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP Chimie',
    dureeEstimeeMin: 35,
    enonce: 'On étudie la dissolution du précipité blanc de chlorure d\'argent $AgCl(s)$ ($pK_s = 9.8$) par addition d\'une solution aqueuse d\'ammoniac $NH_3$.\n1. Les ions $Ag^+$ forment avec l\'ammoniac le complexe diamminesilver(I) $[Ag(NH_3)_2]^+$ de constante globale de formation $\\beta_2 = 10^{7.2}$. Écrire l\'équation-bilan de la réaction de dissolution du précipité par l\'ammoniac et calculer sa constante d\'équilibre $K^\\circ$.\n2. Exprimer la solubilité $s$ de $AgCl(s)$ dans une solution d\'ammoniac de concentration apportée $C = 1.0\\text{ mol/L}$.\n3. Pourquoi l\'ajout d\'acide nitrique $HNO_3$ à cette solution limpide provoque-t-il la reprécipitation immédiate de $AgCl(s)$ ?',
    hints: [
      'Réaction globale : $AgCl(s) + 2 NH_3(aq) \\rightleftharpoons [Ag(NH_3)_2]^+ + Cl^-$.',
      'Constante $K^\\circ = K_s \\cdot \\beta_2$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation de dissolution et constante d\'équilibre',
          explication: 'Les équilibres en solution sont :\n- Précipitation de $AgCl$ : $AgCl(s) \\rightleftharpoons Ag^+ + Cl^-$ ($K_s = 10^{-9.8}$)\n- Formation du complexe : $Ag^+ + 2 NH_3 \\rightleftharpoons [Ag(NH_3)_2]^+$ ($\\beta_2 = 10^{7.2}$)\nEn combinant les deux équilibres, on obtient la réaction de dissolution du précipité :\n$$AgCl(s) + 2 NH_3(aq) \\rightleftharpoons [Ag(NH_3)_2]^+ + Cl^-$$\nSa constante thermodynamique d\'équilibre s\'écrit :\n$$K^\\circ = \\frac{[[Ag(NH_3)_2]^+][Cl^-]}{[NH_3]^2} = \\left( [Ag^+][Cl^-] \\right) \\left( \\frac{[[Ag(NH_3)_2]^+]}{[Ag^+][NH_3]^2} \\right) = K_s \\cdot \\beta_2$$\n$$K^\\circ = 10^{-9.8} \\times 10^{7.2} = 10^{-9.8 + 7.2} = 10^{-2.6} \\approx 2.51\\times 10^{-3}$$\nBien que $K^\\circ < 1$, cette constante est suffisamment élevée pour permettre une dissolution massive en présence d\'ammoniac concentré.'
        },
        {
          titre: '2. Calcul de la solubilité dans l\'ammoniac à $1\\text{ M}$',
          explication: 'Chaque mole de $AgCl$ dissoute libère 1 mole de $Cl^-$ et 1 mole de complexe (la concentration en $Ag^+$ libre restant infinitésimale) :\n$$s = [Cl^-] = [[Ag(NH_3)_2]^+]$$\nLa consommation d\'ammoniac est de $2s$, donc $[NH_3] = C - 2s$.\nEn reportant dans la constante d\'équilibre :\n$$K^\\circ = \\frac{s \\cdot s}{(C - 2s)^2} = \\left( \\frac{s}{C - 2s} \\right)^2$$\nEn prenant la racine carrée des deux membres :\n$$\\frac{s}{C - 2s} = \\sqrt{K^\\circ} = 10^{-1.3} \\approx 0.0501$$\n$$s = 0.0501 (C - 2s) = 0.0501 C - 0.1002 s \\implies 1.1002 s = 0.0501 C$$\nAvec $C = 1.0\\text{ mol/L}$ :\n$$s = \\frac{0.0501}{1.1002} \\approx 0.0455\\text{ mol/L}$$\nLa solubilité du chlorure d\'argent passe de $1.26\\times 10^{-5}\\text{ mol/L}$ dans l\'eau pure à **$0.046\\text{ mol/L}$** dans l\'ammoniac molaire : elle est multipliée par un facteur de près de 4000 ! Le précipité se dissout intégralement pour donner une solution parfaitement limpide.'
        },
        {
          titre: '3. Reprécipitation par acidification',
          explication: 'L\'ammoniac $NH_3$ est une base faible ($pK_a(NH_4^+/NH_3) = 9.2$). Lors de l\'ajout d\'acide fort $H_3O^+$ (acide nitrique), l\'ammoniac est quantitativement converti en ion ammonium inerte :\n$$NH_3 + H_3O^+ \\to NH_4^+ + H_2O$$\nLa concentration en ligand $NH_3$ libre s\'effondre. D\'après le principe de Le Chatelier, le complexe $[Ag(NH_3)_2]^+$ se dissocie pour libérer les ions $Ag^+$, qui réagissent immédiatement avec les ions $Cl^-$ présents pour reformer le précipité blanc caractéristique de $AgCl(s)$ qui noircit à la lumière : c\'est le test d\'identification classique de l\'argent en chimie analytique.'
        }
      ],
      conclusion: 'La complexation est la méthode de prédilection pour déplacer les équilibres de solubilité des sels insolubles par couplage thermodynamique.',
      reflexeDuCorrecteur: 'Pour coupler dissolution et complexation : la constante globale est toujours $K^\\circ = K_s \\times \\beta_n$.'
    }
  },
  {
    id: 'exo-100-89-mecanique-solide-roulement-sans-glissement-plan-incline',
    title: 'Roulement sans Glissement d\'un Cylindre Plein sur un Plan Incliné',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Mécanique du Solide Indéformable',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Un cylindre plein homogène de masse $m$, de rayon $R$ et de moment d\'inertie $J_\\Delta = \\frac{1}{2}m R^2$ par rapport à son axe de révolution descend un plan incliné d\'un angle $\\alpha$ par rapport à l\'horizontale. Le contact cylindre/plan obéit aux lois de Coulomb avec frottement sec (coefficient $f$). Le cylindre part du repos et roule sans glisser.\n1. Écrire la condition cinématique de roulement sans glissement (RSG) reliant l\'accélération du centre de masse $a_G$ et l\'accélération angulaire $\\ddot{\\theta}$.\n2. Par application du Principe Fondamental de la Dynamique (résultante dynamique et théorème du moment cinétique scalaire en $G$), déterminer l\'accélération $a_G$ du cylindre et l\'intensité de la force de frottement tangentielle $T$.\n3. Établir la condition minimale sur le coefficient de frottement statique $f$ pour garantir le roulement sans glissement sans dérapage.',
    hints: [
      'Condition de RSG au point de contact $I$ : $\\vec{V}(I \\in S / R) = \\vec{0} \\implies v_G = R \\dot{\\theta}$.',
      'Loi de Coulomb pour l\'adhérence : $|T| \\le f N$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Condition cinématique de roulement sans glissement',
          explication: 'Soit $I$ le point de contact entre le cylindre et le plan incliné. La vitesse de glissement s\'écrit d\'après la formule de dérivation des torseurs cinématiques :\n$$\\vec{V}_g(I) = \\vec{V}(G) + \\vec{\\Omega} \\wedge \\vec{GI} = v_G \\vec{u}_x + (-\\dot{\\theta}\\vec{u}_z) \\wedge (-R \\vec{u}_y) = (v_G - R \\dot{\\theta}) \\vec{u}_x$$\nLa condition d\'adhérence et de roulement sans glissement strict impose $\\vec{V}_g(I) = \\vec{0}$, soit :\n$$v_G = R \\dot{\\theta} \\implies a_G = R \\ddot{\\theta}$$'
        },
        {
          titre: '2. Application du PFD au cylindre',
          explication: 'Isolons le cylindre soumis à 3 actions mécaniques :\n- Le poids $\\vec{P} = m g \\sin\\alpha \\vec{u}_x - m g \\cos\\alpha \\vec{u}_y$ appliqué en $G$ ;\n- La composante normale de réaction $\\vec{N} = N \\vec{u}_y$ appliquée en $I$ ;\n- La force de frottement tangentielle $\\vec{T} = -T \\vec{u}_x$ appliquée en $I$ (orientée vers l\'amont).\n1. Projection de la résultante dynamique sur l\'axe du plan $\\vec{u}_x$ :\n$$m a_G = m g \\sin\\alpha - T$$\n2. Projection sur la normale $\\vec{u}_y$ :\n$$0 = N - m g \\cos\\alpha \\implies N = m g \\cos\\alpha$$\n3. Théorème du moment cinétique en $G$ selon l\'axe $\\vec{u}_z$ :\n$$J_\\Delta \\ddot{\\theta} = \\mathcal{M}_{G, z}(\\vec{T}) = R \\cdot T$$\nAvec $J_\\Delta = \\frac{1}{2}m R^2$ et $\\ddot{\\theta} = a_G / R$ :\n$$\\frac{1}{2} m R^2 \\left( \\frac{a_G}{R} \\right) = R T \\implies T = \\frac{1}{2} m a_G$$\nEn reportant dans la première équation :\n$$m a_G = m g \\sin\\alpha - \\frac{1}{2} m a_G \\implies \\frac{3}{2} m a_G = m g \\sin\\alpha$$\nOn obtient l\'accélération exacte du cylindre en RSG :\n$$a_G = \\frac{2}{3} g \\sin\\alpha \\quad \\text{et} \\quad T = \\frac{1}{3} m g \\sin\\alpha$$\nL\'accélération est strictement inférieure à celle d\'un solide glissant sans frottement ($g \\sin\\alpha$) car un tiers de l\'énergie potentielle est converti en énergie cinétique de rotation.'
        },
        {
          titre: '3. Condition de non-glissement de Coulomb',
          explication: 'D\'après la loi d\'adhérence de Coulomb, pour qu\'il n\'y ait aucun glissement, la force tangentielle doit se trouver à l\'intérieur du cône de frottement :\n$$|T| \\le f N \\iff \\frac{1}{3} m g \\sin\\alpha \\le f (m g \\cos\\alpha)$$\nEn simplifiant par $m g \\cos\\alpha$ :\n$$f \\ge \\frac{1}{3} \\tan\\alpha$$\nSi l\'inclinaison est trop forte ($\\tan\\alpha > 3 f$), le cylindre dérape et passe en régime de roulement avec glissement cinétique.'
        }
      ],
      conclusion: 'Le roulement sans glissement répartit l\'énergie entre translation ($2/3$) et rotation ($1/3$), ce qui explique pourquoi une sphère pleine ($J = 2/5 m R^2$) descend toujours plus vite qu\'un cylindre ($1/2 m R^2$), lui-même plus rapide qu\'un anneau creux ($m R^2$).',
      reflexeDuCorrecteur: 'En RSG, la force de frottement $T$ ne dissipe AUCUNE puissance mécanique car la vitesse au point de contact est nulle : $\\mathcal{P} = \\vec{T} \\cdot \\vec{V}(I) = 0$.'
    }
  },
  {
    id: 'exo-100-90-automatique-marge-de-stabilite-nyquist',
    title: 'Critère du Revers de Nyquist & Réglage des Marges de Phase et de Gain',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Automatique Linéaire Continue',
    filieres: ['BCPST', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PSI / Agro-Véto',
    dureeEstimeeMin: 35,
    enonce: 'Un système asservi à retour unitaire a pour fonction de transfert en boucle ouverte (FTBO) :\n$$T(p) = \\frac{K}{p (1 + 0.1 p)(1 + 0.02 p)}$$\n1. Tracer l\'allure du lieu de Nyquist de $T(j\\omega)$ et énoncer le critère simplifié du revers.\n2. Calculer la pulsation $\\omega_{-180^\\circ}$ pour laquelle le déphasage de la FTBO atteint $-180^\\circ$.\n3. Déterminer la valeur limite du gain statique $K_{lim}$ assurant la stabilité stricte en boucle fermée.\n4. Pour assurer une marge de gain de sécurité $\\Delta G = 6\\text{ dB}$, quelle valeur maximale doit-on choisir pour $K$ ?',
    hints: [
      'Argument de $T(j\\omega)$ : $\\phi(\\omega) = -90^\\circ - \\arctan(0.1\\omega) - \\arctan(0.02\\omega)$.',
      'Condition $\\phi(\\omega) = -180^\\circ \\iff \\arctan(0.1\\omega) + \\arctan(0.02\\omega) = 90^\\circ$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Lieu de Nyquist et critère du revers',
          explication: 'Pour $\\omega \\to 0^+$ : $T(j\\omega) \\approx \\frac{K}{j\\omega} \\to -j\\infty$ (asymptote verticale avec phase $-90^\\circ$).\nPour $\\omega \\to +\\infty$ : $T(j\\omega) \\sim \\frac{K}{0.002 (j\\omega)^3} \\to 0$ avec une phase finale de $-270^\\circ$.\nLa courbe de Nyquist traverse le demi-plan gauche et coupe l\'axe réel négatif à une pulsation critique $\\omega_{-180^\\circ}$.\nD\'après le critère du revers pour un système à déphasage minimal stable en boucle ouverte : le système asservi est **stable en boucle fermée si et seulement si le lieu de Nyquist laisse le point critique $(-1, 0)$ sur sa gauche** en le parcourant dans le sens des pulsations croissantes.'
        },
        {
          titre: '2. Calcul de la pulsation critique $\\omega_{-180^\\circ}$',
          explication: 'La phase globale vaut :\n$$\\phi(\\omega) = -90^\\circ - \\arctan(0.1 \\omega) - \\arctan(0.02 \\omega)$$\nLa condition $\\phi(\\omega) = -180^\\circ$ équivaut à :\n$$\\arctan(0.1 \\omega) + \\arctan(0.02 \\omega) = 90^\\circ$$\nComme $\\tan(a + b) = \\frac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$, la somme des angles vaut $90^\\circ$ quand le dénominateur s\'annule :\n$$1 - (0.1 \\omega)(0.02 \\omega) = 0 \\iff 0.002 \\omega^2 = 1 \\iff \\omega^2 = \\frac{1}{0.002} = 500$$\n$$\\omega_{-180^\\circ} = \\sqrt{500} = 10\\sqrt{5} \\approx 22.36\\text{ rad/s}$$'
        },
        {
          titre: '3. Gain critique à la limite de stabilité $K_{lim}$',
          explication: 'Le module de la FTBO à la pulsation critique s\'écrit :\n$$|T(j\\omega_{-180^\\circ})| = \\frac{K}{\\omega \\sqrt{1 + (0.1\\omega)^2} \\sqrt{1 + (0.02\\omega)^2}}$$\nAvec $\\omega^2 = 500$ :\n- $1 + 0.01 \\times 500 = 1 + 5 = 6$\n- $1 + 0.0004 \\times 500 = 1 + 0.2 = 1.2$\n$$|T(j\\omega_{-180^\\circ})| = \\frac{K}{\\sqrt{500} \\times \\sqrt{6} \\times \\sqrt{1.2}} = \\frac{K}{\\sqrt{500 \\times 7.2}} = \\frac{K}{\\sqrt{3600}} = \\frac{K}{60}$$\nÀ la limite d\'instabilité, le lieu de Nyquist traverse exactement le point critique $-1$, soit $|T| = 1$ :\n$$\\frac{K_{lim}}{60} = 1 \\implies K_{lim} = 60$$\nPour tout $K < 60$, le système en boucle fermée est stable.'
        },
        {
          titre: '4. Marge de gain de sécurité $\\Delta G = 6\\text{ dB}$',
          explication: 'Une marge de gain de $\\Delta G = 6\\text{ dB}$ impose que le module au point de phase $-180^\\circ$ soit inférieur à $-6\\text{ dB}$, ce qui correspond à un facteur linéaire d\'atténuation de $2$ ($20\\log_{10}(2) \\approx 6\\text{ dB}$) :\n$$|T(j\\omega_{-180^\\circ})| \\le \\frac{1}{2} \\iff \\frac{K}{60} \\le \\frac{1}{2} \\implies K \\le 30$$\nPour garantir une excellente robustesse face aux variations des composants sans oscillations excessives, on choisit $K = 30$.'
        }
      ],
      conclusion: 'Le réglage des marges de gain et de phase sur le diagramme de Nyquist ou de Bode est la méthode universelle pour concevoir des asservissements industriels robustes.',
      reflexeDuCorrecteur: 'Pour que $\\arctan(u) + \\arctan(v) = \\pi/2$, il faut et il suffit que $u \\cdot v = 1$.'
    }
  }
];
