import type { CourseChapter } from './cpgeData';

export const EXTRA_OFFICIAL_CPGE_COURSES: CourseChapter[] = [
  // ==========================================
  // MATHEMATIQUES
  // ==========================================
  {
    id: 'maths-geometrie-differentielle-courbure-frenet',
    slug: 'geometrie-differentielle-courbes-repere-de-frenet',
    title: 'Géométrie Différentielle : Courbes Paramétrées, Abscisse Curviligne & Repère de Frenet',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPSI'],
    annee: '1ère année',
    description: 'Arcs paramétrés réguliers de $\\mathbb{R}^2$ et $\\mathbb{R}^3$, abscisse curviligne $s$, vecteur tangent unitaire $\\vec{T}$, vecteur normal unitaire $\\vec{N}$, courbure algébrique $\\gamma$, centre et cercle osculateur, formules de Serret-Frenet.',
    readTime: '24 min',
    prerequis: ['Calcul différentiel pour les fonctions vectorielles', 'Produit scalaire et produit vectoriel', 'Développements limités'],
    keyTheorems: [
      {
        name: 'Formules de Serret-Frenet pour les Courbes Planes',
        statement: 'Soit $\\gamma : I \\to \\mathbb{R}^2$ un arc géométrique de classe $\\mathcal{C}^2$ birégulier paramétré par son abscisse curviligne $s$. Dans le repère de Frenet orthonormal direct $(\\vec{T}, \\vec{N})$ lié au point courant $M(s)$ :\n$$\\frac{\\mathrm{d}\\vec{T}}{\\mathrm{d}s} = c(s) \\vec{N} \\quad \\text{et} \\quad \\frac{\\mathrm{d}\\vec{N}}{\\mathrm{d}s} = -c(s) \\vec{T}$$\noù $c(s) = \\frac{\\mathrm{d}\\theta}{\\mathrm{d}s}$ est la courbure algébrique (avec $\\vec{T} = \\cos\\theta\\vec{i} + \\sin\\theta\\vec{j}$). Le rayon de courbure est $R(s) = 1/|c(s)|$.',
        demonstration: 'Comme $\\|\\vec{T}(s)\\|^2 = 1$, en dérivant par rapport à $s$, on a $2 \\langle \\vec{T}, \\frac{\\mathrm{d}\\vec{T}}{\\mathrm{d}s} \\rangle = 0$. Le vecteur $\\frac{\\mathrm{d}\\vec{T}}{\\mathrm{d}s}$ est donc orthogonal à $\\vec{T}$, donc colinéaire à $\\vec{N}$. La constante de proportionnalité définit la courbure algébrique $c(s)$. De même, $\\langle \\vec{T}, \\vec{N} \\rangle = 0 \\implies \\langle \\frac{\\mathrm{d}\\vec{T}}{\\mathrm{d}s}, \\vec{N} \\rangle + \\langle \\vec{T}, \\frac{\\mathrm{d}\\vec{N}}{\\mathrm{d}s} \\rangle = 0 \\implies c(s) + \\langle \\vec{T}, \\frac{\\mathrm{d}\\vec{N}}{\\mathrm{d}s} \\rangle = 0$, d\'où le résultat.',
        astuceConcours: 'Pour un paramétrage quelconque $t$, la courbure plane s\'exprime par $c(t) = \\frac{x\'(t) y\'\'(t) - x\'\'(t) y\'(t)}{(x\'(t)^2 + y\'(t)^2)^{3/2}} = \\frac{\\det(\\vec{v}, \\vec{a})}{\\|\\vec{v}\\|^3}$.'
      },
      {
        name: 'Centre de Courbure & Cercle Osculateur',
        statement: 'Le centre de courbure $C(s)$ en un point birégulier $M(s)$ est le point défini par $\\vec{MC}(s) = R(s) \\vec{N} = \\frac{1}{c(s)} \\vec{N}$. Le cercle osculateur est le cercle de centre $C(s)$ et de rayon $R(s)$. C\'est l\'unique cercle ayant un contact d\'ordre au moins 2 avec la courbe au point $M$.',
        astuceConcours: 'Le lieu des centres de courbure forme la développée de la courbe. La développante d\'un cercle est une courbe fondamentale en génie mécanique pour le tracé des profils d\'engrenages homocinétiques.'
      }
    ],
    sections: [
      {
        title: '1. Abscisse curviligne et orientation',
        content: 'Un arc paramétré $t \\mapsto M(t)$ est régulier si son vecteur vitesse $\\vec{v}(t) = \\frac{\\mathrm{d}M}{\\mathrm{d}t}$ ne s\'annule jamais. L\'abscisse curviligne $s(t) = \\int_{t_0}^t \\|\\vec{v}(u)\\|\\,\\mathrm{d}u$ est un $\\mathcal{C}^1$-difféomorphisme strictement croissant. On a toujours $\\frac{\\mathrm{d}s}{\\mathrm{d}t} = \\|\\vec{v}(t)\\| = v(t)$.'
      },
      {
        title: '2. Étude locale aux points singuliers (stationnaires)',
        content: 'Si $\\vec{v}(t_0) = \\vec{0}$, le point est dit stationnaire. On effectue un développement limité en $t_0$ :\n$$\\vec{M}(t) = \\vec{M}(t_0) + \\frac{(t-t_0)^p}{p!} \\vec{v}_p + \\frac{(t-t_0)^q}{q!} \\vec{v}_q + o((t-t_0)^q)$$\noù $\\vec{v}_p$ est la première dérivée non nulle et $\\vec{v}_q$ la première dérivée non colinéaire à $\\vec{v}_p$.\n- $p$ impair, $q$ pair : point ordinaire (allure régulière avec tangente selon $\\vec{v}_p$).\n- $p$ impair, $q$ impair : point d\'inflexion (la courbe traverse sa tangente).\n- $p$ pair, $q$ impair : point de rebroussement de première espèce (le cas le plus classique, comme la cycloïde).\n- $p$ pair, $q$ pair : point de rebroussement de deuxième espèce.'
      }
    ],
    piegesClassiques: [
      'Confondre la dérivation par rapport au temps $t$ et la dérivation par rapport à l\'abscisse curviligne $s$ : $\\frac{\\mathrm{d}}{\\mathrm{d}s} = \\frac{1}{v(t)} \\frac{\\mathrm{d}}{\\mathrm{d}t}$.',
      'Oublier l\'exposant $3/2$ au dénominateur lors du calcul de la courbure : le dénominateur est $\\|\\vec{v}\\|^3$ et non $\\|\\vec{v}\\|^2$.'
    ]
  },

  // ==========================================
  // PHYSIQUE
  // ==========================================
  {
    id: 'physique-lasers-cavite-optique',
    slug: 'physique-lasers-emission-stimulee-cavite-fabry-perot',
    title: 'Physique des Lasers : Émission Stimulée, Inversion de Population & Cavité Optique',
    matiere: 'Physique',
    filieres: ['PC', 'MP', 'PSI'],
    annee: '2ème année',
    description: 'Processus d\'Einstein (absorption, émission spontanée et émission stimulée), inversion de population dans un milieu actif à 3 ou 4 niveaux, condition d\'oscillation laser, cavité de Fabry-Pérot et sélection des modes longitudinaux.',
    readTime: '25 min',
    prerequis: ['Physique quantique élémentaire', 'Interférences lumineuses à ondes multiples', 'Électromagnétisme'],
    keyTheorems: [
      {
        name: 'Relations d\'Einstein pour le Milieu à Deux Niveaux',
        statement: 'Soit deux niveaux d\'énergie $E_1 < E_2$ de populations volumiques $N_1$ et $N_2$ en équilibre avec un rayonnement de densité spectrale $u_\\nu$. Les coefficients d\'Einstein vérifient les relations universelles :\n$$B_{12} = B_{21} \\quad \\text{et} \\quad A_{21} = \\frac{8\\pi h \\nu^3}{c^3} B_{21}$$\nLe taux d\'émission stimulée $N_2 B_{21} u_\\nu$ est proportionnel à la densité de photons incidents, et les photons émis sont rigoureusement cohérents (même fréquence, même phase, même direction, même polarisation).',
        demonstration: 'Démontré par Albert Einstein en 1917 en imposant que le taux de transition global $N_1 B_{12} u_\\nu = N_2 A_{21} + N_2 B_{21} u_\\nu$ à l\'équilibre thermodynamique avec les populations de Boltzmann $N_2/N_1 = e^{-h\\nu/k_B T}$ redonne exactement la formule du corps noir de Planck.',
        astuceConcours: 'L\'amplification laser nette exige que l\'émission stimulée l\'emporte sur l\'absorption : $N_2 B_{21} > N_1 B_{12} \\iff N_2 > N_1$. C\'est l\'**inversion de population**, impossible à l\'équilibre thermodynamique classique ($N_2 < N_1$), d\'où la nécessité d\'un pompage optique ou électrique dans un système à au moins 3 niveaux.'
      },
      {
        name: 'Condition de Seuil et Modes Longitudinaux de Cavité',
        statement: 'Pour une cavité linéaire de longueur $L$ encadrée par deux miroirs de réflectivités $R_1$ et $R_2$ contenant un milieu amplificateur de gain linéaire $\\alpha_0$ :\n- Condition de gain au seuil : $R_1 R_2 e^{2(\\alpha_0 - \\alpha_{pertes}) L} = 1$.\n- Sélection des modes longitudinaux (ondes stationnaires) : $2 L = m \\lambda_m \\iff \\nu_m = m \\frac{c}{2 L}$, d\'écart spectral intermode $\\Delta \\nu = \\frac{c}{2 L}$.',
        astuceConcours: 'Pour $L = 30\\text{ cm}$, l\'écart entre modes longitudinaux est $\\Delta \\nu = \\frac{3 \\times 10^8}{2 \\times 0{,}30} = 500\\text{ MHz}$.'
      }
    ],
    sections: [
      {
        title: '1. Nécessité d\'un schéma à 3 ou 4 niveaux d\'énergie',
        content: 'Dans un système à deux niveaux, le pompage optique sature à $N_1 = N_2$ sans jamais pouvoir créer d\'inversion $N_2 > N_1$. Dans un laser à 3 niveaux (ex: laser Rubis), le pompage excite les atomes vers un niveau 3 instable qui se désexcite quasi-instantanément par transition non radiative vers le niveau métastable 2, permettant d\'accumuler $N_2 > N_1$. Dans un laser à 4 niveaux (ex: Nd:YAG, He-Ne), le niveau inférieur du laser est un niveau excité quasi-vide ($N_1 \\approx 0$), rendant le seuil de pompage considérablement plus bas.'
      },
      {
        title: '2. Propriétés remarquables du faisceau laser',
        content: 'Le faisceau laser se distingue par sa monochromaticité extrême (largeur de raie $\\Delta \\nu \\ll 1\\text{ kHz}$), sa très haute cohérence spatiale et temporelle ($L_c > 1\\text{ km}$), sa directivité (faisceau gaussien de faible divergence $\\theta \\approx \\lambda/(\\pi w_0)$) et sa forte densité de puissance par unité de surface.'
      }
    ],
    piegesClassiques: [
      'Croire qu\'un laser peut fonctionner avec seulement deux niveaux d\'énergie.',
      'Oublier le facteur 2 dans la condition de résonance de la cavité correspondant au trajet aller-retour ($2L = m\\lambda$).'
    ]
  },

  {
    id: 'physique-thermo-corps-purs-diphasiques',
    slug: 'thermodynamique-corps-purs-diphasiques-clapeyron',
    title: 'Thermodynamique : Changements d\'État des Corps Purs & Formule de Clapeyron',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI', 'BCPST'],
    annee: '1ère & 2ème année',
    description: 'Équilibre diphasique d\'un corps pur sous une ou deux phases, égalité des potentiels chimiques $\\mu_1(T, P) = \\mu_2(T, P)$, enthalpie de changement d\'état $L_{1 \\to 2}$, formule de Clapeyron, diagrammes de Clapeyron $(P, v)$ et d\'Amagat, titre en vapeur et règle des moments.',
    readTime: '26 min',
    prerequis: ['Premier et second principes de la thermodynamique', 'Enthalpie libre $G = H - TS$', 'Gaz réels et équation d\'état'],
    keyTheorems: [
      {
        name: 'Formule de Clapeyron',
        statement: 'Le long de la courbe de coexistence de deux phases en équilibre (par exemple liquide et vapeur) d\'un corps pur, la pente de la pression de saturation $\\frac{\\mathrm{d}P_{sat}}{\\mathrm{d}T}$ est reliée à l\'enthalpie massique de transition $L_{1 \\to 2} = \\Delta h_{1 \\to 2}$ et à la variation de volume massique $\\Delta v_{1 \\to 2} = v_2 - v_1$ par :\n$$\\frac{\\mathrm{d}P_{sat}}{\\mathrm{d}T} = \\frac{L_{1 \\to 2}(T)}{T (v_2 - v_1)}$$',
        demonstration: 'À l\'équilibre entre deux phases 1 et 2, les enthalpies libres massiques vérifient $g_1(T, P) = g_2(T, P)$. En différentiant le long de la courbe de saturation : $\\mathrm{d}g_1 = \\mathrm{d}g_2 \\implies -s_1 \\mathrm{d}T + v_1 \\mathrm{d}P = -s_2 \\mathrm{d}T + v_2 \\mathrm{d}P \\implies (v_2 - v_1)\\mathrm{d}P = (s_2 - s_1)\\mathrm{d}T$. Comme la transition est isotherme et isobare réversible, $\\Delta s = s_2 - s_1 = \\frac{L_{1 \\to 2}}{T}$, ce qui donne la relation.',
        astuceConcours: 'Pour l\'équilibre liquide-vapeur loin du point critique, le volume massique du liquide est négligeable devant celui de la vapeur ($v_v \\gg v_l$), et en assimilant la vapeur à un gaz parfait ($v_v = \\frac{RT}{M P_{sat}}$), la formule de Clapeyron s\'intègre sous la loi d\'August-Rankine : $\\ln(P_{sat}) = -\\frac{M L_{vap}}{R T} + \\mathrm{cste}$.'
      },
      {
        name: 'Règle des Moments (Théorème des Segments Inverses)',
        statement: 'À l\'intérieur de la courbe de saturation (zone de coexistence liquide-vapeur sur un palier isobare-isotherme $P=P_{sat}(T)$), un mélange de volume massique moyen $v$ contient une fraction massique en vapeur (titre en vapeur $x_v$) donnée par :\n$$x_v = \\frac{m_{vap}}{m_{tot}} = \\frac{v - v_l(T)}{v_v(T) - v_l(T)} = \\frac{LM}{LV}$$',
        astuceConcours: 'La règle des moments s\'applique à toute grandeur massique : $h = (1-x_v) h_l + x_v h_v$ et $s = (1-x_v) s_l + x_v s_v$.'
      }
    ],
    sections: [
      {
        title: '1. Diagramme de phase $(P, T)$ et point critique',
        content: 'Le diagramme $(P, T)$ comporte 3 courbes d\'équilibre diphasique (sublimation, fusion, vaporisation) se rejoignant au point triple $T$ où les trois phases coexistent avec zéro degré de liberté (variance $v = c + 2 - \phi = 1 + 2 - 3 = 0$). La courbe de fusion a généralement une pente positive $\\frac{\\mathrm{d}P}{\\mathrm{d}T} > 0$ (le solide est plus dense que le liquide), à l\'exception remarquable de l\'eau où la glace flotte sur l\'eau liquide ($v_s > v_l \\implies \\frac{\\mathrm{d}P}{\\mathrm{d}T} < 0$). La courbe de vaporisation s\'arrête au point critique $C$ au-delà duquel liquide et vapeur se fondent en un fluide supercritique continu.'
      },
      {
        title: '2. Isothermes d\'Andrews dans le diagramme de Clapeyron $(P, v)$',
        content: 'Pour $T < T_C$, l\'isotherme comporte un palier horizontal correspondant au changement d\'état liquide-vapeur réversible. L\'ensemble des extrémités gauches des paliers forme la courbe d\'ébullition (liquide saturé $x_v = 0$), et l\'ensemble des extrémités droites forme la courbe de rosée (vapeur saturante $x_v = 1$). Les deux courbes se rejoignent au sommet de la courbe de saturation au point critique $C$.'
      }
    ],
    piegesClassiques: [
      'Écrire $\\Delta H = m L$ lors d\'un refroidissement où la température varie (l\'enthalpie de changement d\'état n\'intervient que sur le palier à température FIXE).',
      'Confondre le titre molaire et le titre massique $x_v$ dans la règle des moments.'
    ]
  },

  // ==========================================
  // CHIMIE
  // ==========================================
  {
    id: 'chimie-complexes-metaux-transition',
    slug: 'chimie-de-coordination-complexes-constantes-formation',
    title: 'Chimie de Coordination : Complexes des Métaux de Transition & Équilibres de Complexation',
    matiere: 'Chimie',
    filieres: ['PC', 'BCPST', 'MP', 'PSI'],
    annee: '1ère & 2ème année',
    description: 'Structure des édifices de coordination, cation central, ligands monodentés et polydentés (effet chélate), constantes de formation successives $K_i$ et globales $\\beta_n$, diagrammes de distribution, compétition entre complexation et précipitation, dissolution de précipités.',
    readTime: '24 min',
    prerequis: ['Liaison de coordination / liaison dative', 'Équilibres en solution aqueuse', 'Produit de solubilité'],
    keyTheorems: [
      {
        name: 'Constantes Globales de Formation $\\beta_n$',
        statement: 'Pour la formation du complexe $[M L_n]^{z+}$ à partir de l\'ion métallique aqueux $M^{m+}$ et du ligand $L$ :\n$$M + n L \\rightleftharpoons [M L_n] \\quad \\implies \\quad \\beta_n = \\frac{[[M L_n]]}{[M] [L]^n} = \\prod_{i=1}^n K_i$$\noù $K_i$ est la constante de formation successive de l\'étape $[M L_{i-1}] + L \\rightleftharpoons [M L_i]$.',
        demonstration: 'Démontré en multipliant les quotients réactionnels successifs $K_1 = \\frac{[ML]}{[M][L]}$, $K_2 = \\frac{[ML_2]}{[ML][L]}$, etc., les termes intermédiaires $[ML_k]$ se simplifiant en cascade télescopique.',
        astuceConcours: 'En règle générale, les constantes successives décroissent : $K_1 > K_2 > \\dots > K_n$ en raison de la répulsion stérique croissante entre ligands et de la statistique des sites disponibles.'
      },
      {
        name: 'Effet Chélate et Stabilité Thermodynamique',
        statement: 'Les complexes formés avec des ligands polydentés (comme l\'éthylènediaminetétraacétate $\\text{EDTA}^{4-}$ ou l\'éthylènediamine $\\text{en}$) présentent une stabilité thermodynamique considérablement supérieure (facteur $10^3$ à $10^{10}$) à celle des complexes analogues formés avec des ligands monodentés (comme l\'ammoniac $NH_3$).\nL\'effet chélate est essentiellement un effet entropique favorable : le remplacement de 6 molécules d\'eau hydratant le cation par une unique molécule d\'EDTA libère 6 molécules d\'eau libres, augmentant massivement le désordre du solvant ($\\Delta_r S^\\circ \\gg 0$).',
        astuceConcours: 'L\'EDTA forme des chélates 1:1 extrêmement stables avec la quasi-totalité des cations métalliques ($Ca^{2+}, Mg^{2+}, Fe^{3+}, Pb^{2+}$), ce qui en fait le réactif universel des titrages complexométriques (mesure de la dureté de l\'eau).'
      }
    ],
    sections: [
      {
        title: '1. Dissolution d\'un précipité par complexation',
        content: 'Lorsqu\'on ajoute un excès de ligand complexant $L$ sur une suspension d\'un sel peu soluble $M X(s)$ de produit de solubilité $K_s$, l\'abaissement drastique de la concentration en cation libre $[M]$ par formation du complexe déplace la dissolution du solide d\'après le principe de Le Chatelier. Exemple classique : dissolution du chlorure d\'argent blanc $AgCl(s)$ par l\'ammoniac $NH_3$ avec formation du complexe diamine-argent(I) $[Ag(NH_3)_2]^+$.'
      },
      {
        title: '2. Géométrie et théorie du champ cristallin élémentaire',
        content: 'Dans un complexe octaédrique ($ML_6$), les répulsions électrostatiques des doublets des ligands le long des axes $x, y, z$ lèvent la dégénérescence des 5 orbitales $d$ du métal : les orbitales $d_{x^2-y^2}$ et $d_{z^2}$ montent en énergie (niveau $e_g$), tandis que $d_{xy}, d_{yz}, d_{zx}$ sont stabilisées (niveau $t_{2g}$). L\'écart énergétique $\\Delta_o = 10\\,Dq$ dans le visible explique les couleurs vives caractéristiques des solutions de métaux de transition par absorption de photons (transition $d-d$).'
      }
    ],
    piegesClassiques: [
      'Confondre les constantes de dissociation globale $K_d = 1/\\beta_n$ et les constantes de formation $\\beta_n$.',
      'Oublier les réactions parasites acido-basiques sur le ligand (par exemple l\'EDTA ou $NH_3$) qui dépendent du pH de la solution.'
    ]
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR
  // ==========================================
  {
    id: 'si-cinematique-solide-torseurs-cir',
    slug: 'cinematique-du-solide-torseurs-composition-mouvements-cir',
    title: 'Cinématique du Solide : Torseurs Cinématiques, Formule de Varignon & Centre Instantané de Rotation (CIR)',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP', 'PCSI'],
    annee: '1ère année',
    description: 'Vecteur rotation instantané $\\vec{\\Omega}(S/R)$, champ des vecteurs vitesse (torseur cinématique), formule du transport des vitesses (relation de Varignon), composition des mouvements (vitesse absolue, d\'entraînement et relative), centre instantané de rotation (CIR) en mouvement plan et base/roulante.',
    readTime: '25 min',
    prerequis: ['Calcul vectoriel', 'Produit vectoriel', 'Cinématique du point'],
    keyTheorems: [
      {
        name: 'Formule de Varignon (Champ Équiprojectif des Vitesses)',
        statement: 'Pour tout solide indéformable $S$ en mouvement par rapport à un repère $R$, pour tous points $A$ et $B$ appartenant à $S$ :\n$$\\vec{V}(B \\in S/R) = \\vec{V}(A \\in S/R) + \\vec{\\Omega}(S/R) \\wedge \\vec{AB}$$\nLe torseur cinématique associé s\'écrit en tout point $A$ : $\\{V(S/R)\\} = \\begin{Bmatrix} \\vec{\\Omega}(S/R) \\\\ \\vec{V}(A \\in S/R) \\end{Bmatrix}_A$.',
        demonstration: 'Démontré par dérivation temporelle du vecteur $\\vec{AB}$ de longueur constante dans le repère mobile lié au solide, puis application de la formule de dérivation composée de Poisson $\\left(\\frac{\\mathrm{d}\\vec{u}}{\\mathrm{d}t}\\right)_R = \\vec{\\Omega}(S/R) \\wedge \\vec{u}$.',
        astuceConcours: 'Équiprojectivité : $\\vec{V}(A) \\cdot \\vec{AB} = \\vec{V}(B) \\cdot \\vec{AB}$. Cette propriété géométrique scalaire permet de trouver graphiquement la vitesse d\'un point inconnu en projetant sur la droite $(AB)$ en une seconde !'
      },
      {
        name: 'Théorème du Centre Instantané de Rotation (CIR)',
        statement: 'Dans tout mouvement plan d\'un solide $S$ par rapport à un repère $R$ où $\\vec{\\Omega}(S/R) \\neq \\vec{0}$, il existe à chaque instant un unique point $I$ du plan (appartenant ou lié à $S$) dont la vitesse instantanée est rigoureusement nulle : $\\vec{V}(I \\in S/R) = \\vec{0}$.\nLe champ des vitesses est une rotation pure instantanée autour de $I$ : $\\vec{V}(M \\in S/R) = \\vec{\\Omega}(S/R) \\wedge \\vec{IM}$. La vitesse de tout point $M$ est orthogonale à la droite $(IM)$ et proportionnelle à la distance $I M$.',
        astuceConcours: 'Pour trouver graphiquement le CIR $I$, il suffit d\'élever les perpendiculaires aux vecteurs vitesse de deux points distincts $A$ et $B$ : leur intersection définit exactement $I$.'
      }
    ],
    sections: [
      {
        title: '1. Composition des mouvements',
        content: 'Pour trois solides ou repères $0, 1, 2$ :\n- Composition des vecteurs rotation : $\\vec{\\Omega}(2/0) = \\vec{\\Omega}(2/1) + \\vec{\\Omega}(1/0)$.\n- Composition des vitesses en un point $M$ quelconque : $\\vec{V}(M \\in 2/0) = \\vec{V}(M \\in 2/1) + \\vec{V}(M \\in 1/0)$ (vitesse absolue = vitesse relative + vitesse d\'entraînement).\n- Torseurs cinématiques : $\\{V(2/0)\\} = \\\{V(2/1)\\} + \\{V(1/0)\\}$.'
      },
      {
        title: '2. Condition de roulement sans glissement (RSG)',
        content: 'Au point de contact $I$ entre deux solides $S_1$ et $S_2$, la vitesse de glissement est la vitesse relative du point géométrique : $\\vec{V}_g(I) = \\vec{V}(I \\in S_2/S_1)$.\nLa condition de roulement sans glissement strict impose $\\vec{V}_g(I) = \\vec{0} \\iff \\vec{V}(I \\in S_2/R) = \\vec{V}(I \\in S_1/R)$. En particulier, une roue roulant sans glisser sur un sol fixe possède son CIR exactement au point de contact avec le sol.'
      }
    ],
    piegesClassiques: [
      'Inverser l\'ordre du produit vectoriel dans la formule de Varignon : c\'est bien $+\\vec{\\Omega} \\wedge \\vec{AB}$, et non $\\vec{AB} \\wedge \\vec{\\Omega}$.',
      'Croire que l\'accélération du CIR est nulle : $\\vec{V}(I) = \\vec{0}$ n\'implique ABSOLUMENT PAS $\\vec{\\Gamma}(I) = \\vec{0}$ (l\'accélération normale de contact $I$ est non nulle).'
    ]
  }
];
