import type { CourseChapter } from './cpgeData';

export const ADDITIONAL_CPGE_COURSES: CourseChapter[] = [
  // ==========================================
  // MATHEMATIQUES - COMPLEMENTS OFFICIELS
  // ==========================================
  {
    id: 'maths-series-numeriques',
    slug: 'series-numeriques-familles-sommables',
    title: 'Séries Numériques & Familles Sommables',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    description: 'Convergence, séries à termes positifs, critères de Riemann et d\'Alembert, séries alternées, sommation par paquets et théorème de Fubini pour familles sommables.',
    readTime: '24 min',
    prerequis: ['Suites réelles et complexes', 'Bornes supérieures et inférieures', 'Notion de limite'],
    keyTheorems: [
      {
        name: 'Critère Spécial des Séries Alternées (CSSA)',
        statement: 'Soit $\\sum (-1)^n a_n$ une série telle que $(a_n)_{n \\in \\mathbb{N}}$ est positive, décroissante et converge vers $0$. Alors la série converge, et pour tout $n \\in \\mathbb{N}$, le reste $R_n = \\sum_{k=n+1}^\\infty (-1)^k a_k$ est du signe de son premier terme $(-1)^{n+1}$ et vérifie :\n$$|R_n| \\le a_{n+1}$$',
        demonstration: 'Les sommes partielles d\'indices pairs $(S_{2n})$ et impairs $(S_{2n+1})$ sont adjacentes car $S_{2n+2} - S_{2n} = a_{2n+2} - a_{2n+1} \\le 0$ et $S_{2n+1} - S_{2n} = -a_{2n+1} \\to 0$. Elles convergent donc vers une limite commune $S$, encadrée par deux sommes partielles consécutives.',
        astuceConcours: 'Permet d\'obtenir immédiatement une approximation de la somme $S$ à précision garantie $\\varepsilon$ dès que $a_{n+1} \\le \\varepsilon$.'
      },
      {
        name: 'Théorème de Fubini pour les familles sommables doubles',
        statement: 'Soit $(u_{i,j})_{(i,j) \\in \\mathbb{N}^2}$ une famille de nombres complexes. La famille est sommable si et seulement si pour tout $i$, $\\sum_j |u_{i,j}|$ converge et $\\sum_i \\left(\\sum_j |u_{i,j}|\\right) < +\\infty$. Dans ce cas :\n$$\\sum_{(i,j) \\in \\mathbb{N}^2} u_{i,j} = \\sum_{i=0}^\\infty \\left(\\sum_{j=0}^\\infty u_{i,j}\\right) = \\sum_{j=0}^\\infty \\left(\\sum_{i=0}^\\infty u_{i,j}\\right)$$',
        astuceConcours: 'Fondamental pour intervertir les sommes sans hésitation dès que la sommabilité en valeur absolue est établie.'
      }
    ],
    sections: [
      {
        title: '1. Comparaison aux intégrales & Règle de d\'Alembert',
        content: 'Pour une fonction continue par morceaux, décroissante et positive $f : [1, +\\infty[ \\to \\mathbb{R}^+$, $\\sum_{n=1}^\\infty f(n)$ converge si et seulement si $\\int_1^{+\\infty} f(t)\\,\\mathrm{d}t$ converge. On en déduit le critère de Riemann : $\\sum \\frac{1}{n^\\alpha}$ converge $\\iff \\alpha > 1$. La règle de d\'Alembert compare $\\frac{|u_{n+1}|}{|u_n|}$ à 1.',
        methodKicker: 'Pour une série de Bertrand $\\sum \\frac{1}{n^\\alpha (\\ln n)^\\beta}$, comparer avec $\\alpha > 1$ ou $\\alpha = 1$ et $\\beta > 1$.'
      }
    ],
    piegesClassiques: [
      'Appliquer le CSSA sans avoir rigoureusement vérifié la décroissance de $(a_n)$ (la positivité et la limite nulle ne suffisent pas !).',
      'Confondre convergence simple et absolue pour le produit de Cauchy : le produit de Cauchy de deux séries simplement convergentes peut diverger.'
    ]
  },
  {
    id: 'maths-suites-series-fonctions',
    slug: 'suites-et-series-de-fonctions',
    title: 'Suites et Séries de Fonctions',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Convergence simple, uniforme, normale. Continuité de la limite, théorèmes d\'intégration et de dérivation terme à terme sur un intervalle.',
    readTime: '26 min',
    prerequis: ['Topologie de $\\mathbb{R}$', 'Intégration sur un segment', 'Séries numériques'],
    keyTheorems: [
      {
        name: 'Théorème de Continuité de la Somme',
        statement: 'Soit $\\sum u_n$ une série de fonctions continues sur un intervalle $I$. Si la série converge uniformément (ou localement uniformément) sur tout segment de $I$, alors sa somme $S = \\sum_{n=0}^\\infty u_n$ est continue sur $I$.',
        demonstration: 'Par l\'inégalité triangulaire $\\varepsilon/3$ : $|S(x) - S(x_0)| \\le |S(x) - S_N(x)| + |S_N(x) - S_N(x_0)| + |S_N(x_0) - S(x_0)|$. En choisissant $N$ tel que $\|S - S_N\|_\\infty \\le \\varepsilon/3$ par convergence uniforme, puis $\\eta > 0$ par continuité de $S_N$.',
        astuceConcours: 'La convergence normale ($\\sum \|u_n\\|_\\infty < +\\infty$) implique la convergence uniforme. C\'est le critère le plus simple à tester aux écrits.'
      },
      {
        name: 'Théorème de Dérivation Terme à Terme',
        statement: 'Soit $(f_n)$ une suite de fonctions de classe $\\mathcal{C}^1$ sur un intervalle $I$. Si la série $\\sum f_n$ converge simplement en au moins un point $x_0 \\in I$, et si la série des dérivées $\\sum f_n\'$ converge uniformément sur tout segment inclus dans $I$, alors la somme $S = \\sum f_n$ est de classe $\\mathcal{C}^1$ sur $I$ et $S\'(x) = \\sum_{n=0}^\\infty f_n\'(x)$.',
        astuceConcours: 'Attention capitale : la convergence uniforme doit porter sur la série des DÉRIVÉES $\\sum f_n\'$ et non sur la série initiale !'
      }
    ],
    sections: [
      {
        title: '1. Hiérarchie des modes de convergence',
        content: 'Convergence normale $\\implies$ Convergence uniforme $\\implies$ Convergence simple. Les réciproques sont toutes fausses. Exemple de convergence uniforme non normale : $u_n(x) = \\frac{(-1)^n}{n+x^2}$ sur $\\mathbb{R}$ par le critère des séries alternées.',
        methodKicker: 'Réflexe : Toujours chercher à majorer $\|u_n\\|_\\infty$ par une série numérique indépendante de $x$.'
      }
    ],
    piegesClassiques: [
      'Penser que la convergence normale sur $\\mathbb{R}$ est nécessaire pour la continuité (la convergence normale sur tout compact $[-A, A]$ suffit amplement !).',
      'Intervertir somme et dérivée sans vérifier l\'hypothèse de convergence uniforme des dérivées.'
    ]
  },
  {
    id: 'maths-calcul-differentiel',
    slug: 'calcul-differentiel-fonctions-plusieurs-variables',
    title: 'Calcul Différentiel & Extrema',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Différentiabilité, dérivées partielles, gradient, jacobienne, théorème de Schwarz, formule de Taylor-Young, recherche d\'extrema locaux et sous contrainte.',
    readTime: '25 min',
    prerequis: ['Espaces vectoriels normés', 'Algèbre linéaire', 'Formes bilinéaires'],
    keyTheorems: [
      {
        name: 'Caractérisation des Extrema Locaux & Matrice Hessienne',
        statement: 'Soit $f : U \\subset \\mathbb{R}^n \\to \\mathbb{R}$ de classe $\\mathcal{C}^2$. Soit $a \\in U$ un point critique ($\\vec{\\nabla} f(a) = \\vec{0}$). Soit $H_f(a)$ la matrice hessienne symétrique.\n- Si toutes les valeurs propres de $H_f(a)$ sont strictement positives, $f(a)$ est un minimum local strict.\n- Si toutes les valeurs propres sont strictement négatives, $f(a)$ est un maximum local strict.\n- Si $H_f(a)$ a au moins une valeur propre $>0$ et une $<0$, $a$ est un point selle (col).',
        astuceConcours: 'En dimension 2 ($n=2$), avec les notations de Monge $r = \\frac{\\partial^2 f}{\\partial x^2}$, $s = \\frac{\\partial^2 f}{\\partial x \\partial y}$, $t = \\frac{\\partial^2 f}{\\partial y^2}$ : le déterminant hessien vaut $rt - s^2$. Si $rt - s^2 > 0$ et $r > 0$, c\'est un minimum local.'
      },
      {
        name: 'Théorème de Schwarz',
        statement: 'Si $f : U \\to \\mathbb{R}$ est de classe $\\mathcal{C}^2$ sur un ouvert $U$, alors pour tout $i, j \\in \\{1, \\dots, n\\}$ :\n$$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j} = \\frac{\\partial^2 f}{\\partial x_j \\partial x_i}$$',
        astuceConcours: 'Garantit la symétrie de la matrice hessienne $H_f(a)$, qui est donc toujours diagonalisable en base orthonormée d\'après le théorème spectral !'
      }
    ],
    sections: [
      {
        title: '1. Règle de dérivation des fonctions composées (Chain Rule)',
        content: 'Pour $g(t) = f(x(t), y(t))$ avec $f$ différentiable et $x, y$ dérivables : $g\'(t) = \\frac{\\partial f}{\\partial x} x\'(t) + \\frac{\\partial f}{\\partial y} y\'(t) = \\vec{\\nabla} f \\cdot \\vec{v}(t)$. Cette relation est au cœur des équations aux dérivées partielles (EDP) et changements de variables polaires.',
        methodKicker: 'En coordonnées polaires $(r, \\theta)$, $\\frac{\\partial f}{\\partial r} = \\cos\\theta \\frac{\\partial f}{\\partial x} + \\sin\\theta \\frac{\\partial f}{\\partial y}$.'
      }
    ],
    piegesClassiques: [
      'Croire que l\'existence de toutes les dérivées partielles implique la différentiabilité (faux : $f$ peut même ne pas être continue !). Il faut la continuité des dérivées partielles ($\mathcal{C}^1$).',
      'Conclure à l\'absence d\'extremum quand $rt - s^2 = 0$ (cas douteux nécessitant un développement d\'ordre supérieur).'
    ]
  },
  {
    id: 'maths-structures-algebriques',
    slug: 'structures-algebriques-groupes-anneaux',
    title: 'Structures Algébriques & Théorie des Groupes',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'MP', 'MPI'],
    annee: '1ère & 2ème année',
    description: 'Groupes, sous-groupes, théorème de Lagrange, morphismes, ordre d\'un élément, groupe symétrique $\\mathfrak{S}_n$, anneaux et arithmétique modulaire.',
    readTime: '23 min',
    prerequis: ['Arithmétique dans $\\mathbb{Z}$', 'Relations d\'équivalence', 'Applications bijectives'],
    keyTheorems: [
      {
        name: 'Théorème de Lagrange pour les Groupes Finis',
        statement: 'Soit $G$ un groupe fini et $H$ un sous-groupe de $G$. L\'ordre de $H$ divise l\'ordre de $G$ :\n$$|G| = [G : H] \\cdot |H|$$\nEn particulier, pour tout élément $x \\in G$, l\'ordre de $x$ divise le cardinal $|G|$, et $x^{|G|} = e_G$.',
        demonstration: 'Les classes à gauche modulo $H$, définies par $xH = \\{x h \\mid h \\in H\\}$, forment une partition de $G$. L\'application $h \\mapsto x h$ est une bijection de $H$ sur $xH$, donc chaque classe a pour cardinal $|H|$. Le cardinal total est donc un multiple de $|H|$.',
        astuceConcours: 'Donne immédiatement le petit théorème de Fermat : pour $p$ premier et $a$ non divisible par $p$, $a^{p-1} \\equiv 1 \\pmod p$ en considérant le groupe multiplicatif $(\\mathbb{Z}/p\\mathbb{Z})^*$.'
      }
    ],
    sections: [
      {
        title: '1. Groupes monogènes et cycliques',
        content: 'Un groupe engendré par un élément est dit monogène (cyclique s\'il est fini). Tout groupe cyclique d\'ordre $n$ est isomorphe à $(\\mathbb{Z}/n\\mathbb{Z}, +)$. Les générateurs de $\\mathbb{Z}/n\\mathbb{Z}$ sont les entiers $k$ premiers avec $n$, leur nombre vaut $\\varphi(n)$ (indicatrice d\'Euler).',
        methodKicker: 'Tout sous-groupe d\'un groupe cyclique est cyclique.'
      }
    ],
    piegesClassiques: [
      'Croire que la réciproque du théorème de Lagrange est vraie (si $d$ divise $|G|$, il n\'existe pas toujours de sous-groupe d\'ordre $d$ : contre-exemple du groupe alterné $\\mathfrak{A}_4$ d\'ordre 12 sans sous-groupe d\'ordre 6).',
      'Confondre groupe abélien (commutatif) et cyclique (tout cyclique est abélien, mais $(\\mathbb{Z}/2\\mathbb{Z}) \\times (\\mathbb{Z}/2\\mathbb{Z})$ est abélien non cyclique).'
    ]
  },

  // ==========================================
  // PHYSIQUE - COMPLEMENTS OFFICIELS
  // ==========================================
  {
    id: 'physique-ondes-electromagnetiques',
    slug: 'ondes-electromagnetiques-vide-conducteurs',
    title: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Équation de d\'Alembert, onde plane progressive monochromatique (OPPM), structure de l\'onde transverse, polarisation, effet de peau dans un conducteur ohmique.',
    readTime: '27 min',
    prerequis: ['Équations de Maxwell', 'Analyse vectorielle (laplacien vectoriel)', 'Nombres complexes'],
    keyTheorems: [
      {
        name: 'Structure transverse d\'une OPPM dans le vide',
        statement: 'Pour une onde se propageant selon $\\vec{u}_z$ à pulsation $\\omega$ :\n$$\\vec{E} = E_0 \\cos(\\omega t - k z) \\vec{u}_x \\implies \\vec{B} = \\frac{\\vec{u}_z \\wedge \\vec{E}}{c} = \\frac{E_0}{c} \\cos(\\omega t - k z) \\vec{u}_y$$\nLe trièdre $(\\vec{E}, \\vec{B}, \\vec{k})$ est orthogonal direct et $E = c B$.',
        astuceConcours: 'Vecteur de Poynting moyen dans le vide : $\\langle \\vec{\\Pi} \\rangle = \\frac{E_0^2}{2 \\mu_0 c} \\vec{u}_z$. La densité volumique d\'énergie moyenne vaut $\\langle u_{em} \\rangle = \\frac{1}{2}\\varepsilon_0 E_0^2$.'
      },
      {
        name: 'Épaisseur de peau dans un bon conducteur (Effet de peau)',
        statement: 'Dans un conducteur de conductivité $\\gamma$ vérifiant l\'ARQS magnétique (courant de déplacement négligeable), le vecteur d\'onde complexe vérifie $\\underline{k}^2 = -j \\mu_0 \\gamma \\omega$, d\'où :\n$$\\delta = \\sqrt{\\frac{2}{\\mu_0 \\gamma \\omega}}$$\nL\'amplitude du champ électromagnétique décroît exponentiellement en $e^{-z/\\delta}$.',
        astuceConcours: 'À haute fréquence, le courant circule exclusivement dans une mince pellicule de surface de profondeur $\\delta$.'
      }
    ],
    sections: [
      {
        title: '1. Polarisation rectiligne et elliptique',
        content: 'La polarisation décrit la trajectoire de l\'extrémité du vecteur champ électrique dans le plan transverse. Si le déphasage $\\Delta\\phi = \\phi_y - \\phi_x = 0$ ou $\\pi$, la polarisation est rectiligne. Si $\\Delta\\phi = \\pm \\pi/2$ avec $E_{0x} = E_{0y}$, la polarisation est circulaire (gauche ou droite).',
        methodKicker: 'Lame quart d\'onde : introduit un déphasage de $\\pi/2$, transforme une onde polarisée rectiligne à $45^\\circ$ en onde circulaire.'
      }
    ],
    piegesClassiques: [
      'Oublier le facteur $1/2$ lors du calcul des valeurs moyennes temporelles pour des grandeurs complexes quadratiques : $\\langle \\vec{\\Pi} \\rangle = \\frac{1}{2} \\mathrm{Re}(\\underline{\\vec{E}} \\wedge \\underline{\\vec{B}}^* / \\mu_0)$.',
      'Confondre conductivité ohmique $\\gamma$ et coefficient d\'amortissement dans un diélectrique.'
    ]
  },
  {
    id: 'physique-transferts-thermiques-diffusion',
    slug: 'transferts-thermiques-diffusion-fourier',
    title: 'Transferts Thermiques & Équation de la Diffusion',
    matiere: 'Physique',
    filieres: ['PC', 'PSI', 'MP', 'PCSI'],
    annee: '1ère & 2ème année',
    description: 'Loi de Fourier, équation de la diffusion thermique, résistance thermique en géométrie plane et cylindrique, ailettes de refroidissement et temps caractéristique.',
    readTime: '23 min',
    prerequis: ['Premier principe de la thermodynamique', 'Gradient et divergence', 'Capacité thermique'],
    keyTheorems: [
      {
        name: 'Loi phénoménologique de Fourier & Équation de la Diffusion',
        statement: 'Le vecteur densité volumique de flux thermique vérifie $\\vec{j}_Q = -\\lambda \\vec{\\nabla} T$, où $\\lambda > 0$ est la conductivité thermique. Par bilan d\'énergie sur un volume infinitésimal sans source interne :\n$$\\frac{\\partial T}{\\partial t} = D \\Delta T \\quad \\text{avec} \\quad D = \\frac{\\lambda}{\\rho c}$$',
        demonstration: 'Bilan d\'enthalpie sur $\\mathrm{d}\\tau$ : $\\mathrm{d}H = \\rho c \\frac{\\partial T}{\\partial t} \\mathrm{d}\\tau \\mathrm{d}t$. Le flux sortant par le théorème de Green-Ostrogradski donne $-\\iint \\vec{j}_Q \\cdot \\mathrm{d}\\vec{S} = -\\mathrm{div}(\\vec{j}_Q) \\mathrm{d}\\tau = \\lambda \\Delta T \\mathrm{d}\\tau$. D\'où l\'équation de Fourier avec $D = \\lambda/(\\rho c)$.',
        astuceConcours: 'Temps caractéristique de diffusion sur une distance $L$ : $\\tau \\sim \\frac{L^2}{D}$. Dépendance quadratique fondamentale !'
      }
    ],
    sections: [
      {
        title: '1. Notion de résistance thermique et analogie électrique',
        content: 'En régime stationnaire sans source, le flux thermique global $\\Phi = \\iint \\vec{j}_Q \\cdot \\mathrm{d}\\vec{S}$ est conservatif. On définit la résistance thermique par $R_{th} = \\frac{T_1 - T_2}{\\Phi}$. Pour une paroi plane de surface $S$ et d\'épaisseur $e$ : $R_{th} = \\frac{e}{\\lambda S}$. Pour un transfert convectif de Newton : $R_{th, conv} = \\frac{1}{h S}$.',
        methodKicker: 'Les résistances thermiques en série s\'additionnent exactement comme les résistances ohmiques : $R_{eq} = \\sum R_i$.'
      }
    ],
    piegesClassiques: [
      'Appliquer $R_{th} = e/(\\lambda S)$ à un cylindre ou une sphère (le profil de température n\'est plus linéaire mais logarithmique ou hyperbolique !).',
      'Confondre flux thermique (puissance en Watts) et densité de flux thermique (en $\\mathrm{W}\\cdot\\mathrm{m}^{-2}$).'
    ]
  },
  {
    id: 'physique-mecanique-solide',
    slug: 'mecanique-du-solide-indéformable-torseurs',
    title: 'Mécanique du Solide Indéformable & Torseurs',
    matiere: 'Physique',
    filieres: ['PSI', 'MP', 'PC'],
    annee: '2ème année',
    description: 'Champ des vitesses, théorème de Koenig, matrice d\'inertie, moment cinétique scalaire et vectoriel, lois du frottement de Coulomb et roulement sans glissement.',
    readTime: '28 min',
    prerequis: ['Mécanique du point', 'Produit vectoriel', 'Calcul intégral spatial'],
    keyTheorems: [
      {
        name: 'Théorème du Moment Cinétique par rapport à un axe fixe $(\\Delta)$',
        statement: 'Pour un solide en rotation autour d\'un axe $(\\Delta)$ orienté par $\\vec{u}_\\Delta$ de vitesse angulaire $\\omega = \\dot{\\theta}$ :\n$$J_\\Delta \\ddot{\\theta} = \\sum \\mathcal{M}_\\Delta(\\vec{F}_{ext})$$\noù $J_\\Delta = \\iiint r^2 \\mathrm{d}m$ est le moment d\'inertie du solide par rapport à l\'axe $(\\Delta)$.',
        astuceConcours: 'Théorème de Huygens : $J_\\Delta = J_{\\Delta_G} + M d^2$, où $\\Delta_G$ est l\'axe parallèle passant par le centre de gravité $G$ et $d$ la distance séparant les deux axes.'
      },
      {
        name: 'Condition de Roulement Sans Glissement (RSG)',
        statement: 'Au point de contact $I$ entre deux solides, la vitesse de glissement est nulle : $\\vec{v}_g(I) = \\vec{v}(I \\in S_1 / S_2) = \\vec{0}$. D\'après les lois de Coulomb, l\'effort tangentiel vérifie l\'inégalité stricte :\n$$\\|\\vec{T}\\| \\le f \\|\\vec{N}\\|$$',
        astuceConcours: 'Tant qu\'il y a RSG, la puissance dissipée par le contact au point $I$ est rigoureusement NULLE : $\\mathcal{P}_{contact} = \\vec{R} \\cdot \\vec{v}_g(I) = 0$.'
      }
    ],
    sections: [
      {
        title: '1. Énergie cinétique et théorème de Koenig',
        content: 'L\'énergie cinétique d\'un solide dans le référentiel du laboratoire s\'écrit $E_c = \\frac{1}{2} M v_G^2 + E_c^*$, où $E_c^*$ est l\'énergie cinétique dans le référentiel barycentrique. Pour une rotation autour d\'un axe principal : $E_c = \\frac{1}{2} M v_G^2 + \\frac{1}{2} J_{\\Delta_G} \\omega^2$.',
        methodKicker: 'Pour un cylindre homogène de rayon $R$ : $J_G = \\frac{1}{2} M R^2$. En RSG avec $v_G = R\\omega$, $E_c = \\frac{3}{4} M v_G^2$.'
      }
    ],
    piegesClassiques: [
      'Écrire $\\|\\vec{T}\\| = f \\|\\vec{N}\\|$ en présence de roulement sans glissement (l\'égalité n\'est vraie qu\'à la limite du glissement ou en glissement effectif !).',
      'Calculer le moment cinétique en un point non fixe et non confondu avec le centre d\'inertie $G$ sans ajouter le terme correctif du déplacement du point.'
    ]
  },

  // ==========================================
  // CHIMIE - COMPLEMENTS OFFICIELS
  // ==========================================
  {
    id: 'chimie-electrochimie-courbes-ip',
    slug: 'electrochimie-courbes-intensite-potentiel',
    title: 'Électrochimie : Courbes Intensité-Potentiel & Corrosion',
    matiere: 'Chimie',
    filieres: ['PC', 'PSI', 'BCPST', 'MP'],
    annee: '2ème année',
    description: 'Piles et électrolyseurs, surtensions d\'activation et de diffusion, palier de diffusion, potentiel mixte de corrosion, protection anodique et cathodique.',
    readTime: '25 min',
    prerequis: ['Potentiels standard d\'oxydoréduction', 'Formule de Nernst', 'Cinétique chimique'],
    keyTheorems: [
      {
        name: 'Principe du Potentiel Mixte et Vitesse de Corrosion',
        statement: 'À l\'abandon en milieu aéré, un métal s\'oxyde spontanément tandis qu\'un oxydant du milieu (souvent $O_2$ ou $H^+$) se réduit. Le potentiel stationnaire $E_{corr}$ (potentiel mixte) et le courant de corrosion $I_{corr}$ sont déterminés par l\'égalité des intensités absolue anodique et cathodique :\n$$I_a(E_{corr}) + I_c(E_{corr}) = 0 \\implies I_a(E_{corr}) = |I_c(E_{corr})| = I_{corr}$$',
        astuceConcours: 'La vitesse de perte de masse du métal est directement proportionnelle au courant de corrosion via la loi de Faraday : $\\frac{\\mathrm{d}m}{\\mathrm{d}t} = \\frac{M \\cdot I_{corr}}{n F}$.'
      }
    ],
    sections: [
      {
        title: '1. Courbes $I(E)$ et paliers de diffusion',
        content: 'Lorsqu\'une espèce réactive en solution doit diffuser jusqu\'à l\'électrode, la vitesse est limitée à forte surtension par le transport de matière : $I_{lim, c} = -n F S k_d [Ox]_{sol}$. Pour un système rapide (ex: couple $\\mathrm{Fe}^{3+}/\\mathrm{Fe}^{2+}$ sur platine), le courant traverse l\'axe des potentiels à $E^\\circ$ avec une pente très forte.',
        methodKicker: 'Pour protéger une coque de bateau en acier (fer), on y fixe des blocs de zinc : $E^\\circ(\\mathrm{Zn}^{2+}/\\mathrm{Zn}) < E^\\circ(\\mathrm{Fe}^{2+}/\\mathrm{Fe})$, le zinc s\'oxyde en priorité (anode sacrificielle).'
      }
    ],
    piegesClassiques: [
      'Confondre anode (siège de l\'oxydation) et cathode (siège de la réduction) avec les signes des bornes $(+)$ et $(-)$ qui diffèrent entre générateur (pile) et récepteur (électrolyseur).',
      'Oublier que le solvant eau possède son propre domaine d\'électroactivité limité par l\'oxydation de l\'eau en $O_2$ et la réduction de l\'eau en $H_2$.'
    ]
  },
  {
    id: 'chimie-solutions-aqueuses-precipitation',
    slug: 'equilibres-solutions-aqueuses-precipitation',
    title: 'Équilibres en Solution Aqueuse & Précipitation',
    matiere: 'Chimie',
    filieres: ['PCSI', 'PC', 'BCPST', 'PSI', 'MPSI'],
    annee: '1ère année',
    description: 'Acido-basicité, produit de solubilité $K_s$, condition de précipitation sélective, effet d\'ion commun, influence du pH sur la solubilité et titrages.',
    readTime: '22 min',
    prerequis: ['Concentrations molaires', 'Quotient de réaction', 'Constante d\'équilibre standard'],
    keyTheorems: [
      {
        name: 'Condition de Précipitation & Solubilité',
        statement: 'Pour un sel peu soluble $A_x B_y(s) \\rightleftharpoons x A^{y+}(aq) + y B^{x-}(aq)$ de produit de solubilité $K_s$ :\n- Si $Q_r = [A^{y+}]^x [B^{x-}]^y < K_s$, la solution est non saturée (aucun précipité ne peut se former).\n- Le solide apparaît dès que $Q_r = K_s$.\nDans l\'eau pure, la solubilité $s$ vérifie $K_s = x^x y^y s^{x+y}$.',
        astuceConcours: 'L\'effet d\'ion commun : ajouter un sel très soluble contenant l\'un des ions (ex: $\\mathrm{NaCl}$ dans une solution de $\\mathrm{AgCl}$) fait chuter drastiquement la solubilité $s$.'
      }
    ],
    sections: [
      {
        title: '1. Diagrammes de prédominance et pH de précipitation',
        content: 'Lorsqu\'un hydroxyde métallique précipite selon $M^{n+} + n \\mathrm{HO}^- \\rightleftharpoons M(\\mathrm{OH})_n(s)$, la condition d\'apparition du précipité pour une concentration fixée $[M^{n+}] = c_0$ s\'écrit $[\\mathrm{HO}^-] \\ge \\left(\\frac{K_s}{c_0}\\right)^{1/n}$, ce qui définit le $\\mathrm{pH}$ critique de début de précipitation.',
        methodKicker: 'Formule mnémotechnique : $\\mathrm{pH}_{precip} = 14 - \\frac{\\mathrm{p}K_s + \\log c_0}{n}$.'
      }
    ],
    piegesClassiques: [
      'Comparer les stabilités de deux précipités directement à l\'aide de leurs $K_s$ sans tenir compte de leur stœchiométrie (un sel $AB_2$ ne se compare pas directement à un sel $AB$ !).',
      'Oublier de vérifier l\'absence de redissolution par complexation à pH très basique (amphotérisme d\'hydroxydes comme $\\mathrm{Al(OH)}_3$ ou $\\mathrm{Zn(OH)}_2$).'
    ]
  },
  {
    id: 'chimie-organique-carbonyles-grignard',
    slug: 'chimie-organique-carbonyles-organomagnesiens',
    title: 'Composés Carbonylés & Réactifs de Grignard',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'BCPST'],
    annee: '1ère & 2ème année',
    description: 'Additions nucléophiles sur le carbonyle ($C=O$), organomagnésiens mixtes $R\\mathrm{Mg}X$, aldolisation-crotonisation, acétalisation et protection de fonctions.',
    readTime: '25 min',
    prerequis: ['Structure électronique et polarité des liaisons', 'Acides et bases de Lewis', 'Effets inductifs et mésomères'],
    keyTheorems: [
      {
        name: 'Inversion de Polarité (Umpolung) des Organomagnésiens',
        statement: 'Dans un dérivé halogéné $R-\\mathrm{X}$, le carbone est électrophile $(\\delta+)$. Par insertion de magnésium dans l\'éther anhydre, on forme $R-\\mathrm{MgX}$ où le carbone lié au métal devient un carbanion nucléophile et base très forte $(\\delta-)$.',
        astuceConcours: 'L\'organomagnésien réagit immédiatement avec toute trace d\'eau ou de proton mobile (alcool, amine) : $R\\mathrm{Mg}X + H_2O \\to R-H + \\mathrm{Mg}(\\mathrm{OH})X$. La verrerie doit être rigoureusement séchée et anhydre.'
      }
    ],
    sections: [
      {
        title: '1. Synthèse d\'alcools primaires, secondaires et tertiaires',
        content: '- $R\\mathrm{Mg}X + \\mathrm{HCHO}$ (méthanal) $\\xrightarrow{\\mathrm{H_3O^+}}$ Alcool primaire $R-\\mathrm{CH_2OH}$\n- $R\\mathrm{Mg}X + R\'\\mathrm{CHO}$ (aldéhyde) $\\xrightarrow{\\mathrm{H_3O^+}}$ Alcool secondaire $R-\\mathrm{CH(OH)}-R\'$\n- $R\\mathrm{Mg}X + R\'\\mathrm{CO}R\'\'$ (cétone) $\\xrightarrow{\\mathrm{H_3O^+}}$ Alcool tertiaire $R-\\mathrm{C(OH)}(R\')(R\'\')$',
        methodKicker: 'L\'addition crée une nouvelle liaison carbone-carbone $C-C$, indispensable pour bâtir des squelettes carbonés complexes aux concours.'
      }
    ],
    piegesClassiques: [
      'Tenter de préparer un organomagnésien sur une molécule comportant à la fois un halogène et un groupe donneur de proton comme $-OH$ ou $-COOH$ (autodestruction intramoléculaire immédiate).',
      'Confondre aldolisation (addition conduisant au $\\beta$-hydroxycarbonylé) et crotonisation (élimination d\'eau conduisant au composé carbonylé $\\alpha,\\beta$-insaturé).'
    ]
  },

  // ==========================================
  // INFORMATIQUE - COMPLEMENTS OFFICIELS
  // ==========================================
  {
    id: 'info-programmation-dynamique',
    slug: 'programmation-dynamique-optimisation',
    title: 'Programmation Dynamique & Optimisation',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    description: 'Sous-structure optimale, mémoïsation top-down vs tabulation bottom-up, problème du sac à dos 0/1, alignement de séquences et distance d\'édition.',
    readTime: '26 min',
    prerequis: ['Récursivité', 'Complexité temporelle et spatiale', 'Dictionnaires et matrices'],
    keyTheorems: [
      {
        name: 'Principe d\'Optimalité de Bellman',
        statement: 'Une politique optimale a la propriété que, quels que soient l\'état initial et la décision initiale, les décisions suivantes doivent constituer une politique optimale relative à l\'état résultant de la première décision.',
        astuceConcours: 'Évite l\'explosion combinatoire exponentielle $\\mathcal{O}(2^n)$ en stockant les sous-problèmes déjà résolus dans une table pour atteindre une complexité polynomiale $\\mathcal{O}(n \\cdot W)$.'
      }
    ],
    sections: [
      {
        title: '1. Cas d\'école : Le problème du Sac à Dos (0/1 Knapsack)',
        content: 'Soit $n$ objets de poids $w_i$ et de valeurs $v_i$, et une capacité maximale $W$. On pose $T[i][c]$ la valeur maximale réalisable avec les $i$ premiers objets et une capacité $c$. La relation de récurrence s\'écrit :\n$$T[i][c] = \\begin{cases} T[i-1][c] & \\text{si } w_i > c \\\\ \\max(T[i-1][c], T[i-1][c-w_i] + v_i) & \\text{si } w_i \\le c \\end{cases}$$\nLa table de taille $(n+1) \\times (W+1)$ se remplit en temps et espace $\\mathcal{O}(n \\cdot W)$ (complexité pseudo-polynomiale).',
        methodKicker: 'L\'algorithme glouton (trier par ratio valeur/poids) ne donne PAS la solution optimale pour le sac à dos entier !'
      }
    ],
    piegesClassiques: [
      'Croire que la complexité $\\mathcal{O}(n \\cdot W)$ est polynomiale au sens strict (elle est pseudo-polynomiale car $W$ s\'écrit en $\\log W$ bits : le problème est NP-difficile).',
      'Oublier les cas de base ($i=0$ ou $c=0$) lors de l\'initialisation de la matrice de programmation dynamique.'
    ]
  },
  {
    id: 'info-arbres-binaires-abr',
    slug: 'arbres-binaires-et-abr',
    title: 'Arbres Binaires & Arbres Binaires de Recherche (ABR)',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'MPSI'],
    annee: 'Tronc commun & Spécialité',
    description: 'Définition inductive, hauteur, taille, parcours en profondeur (préfixe, infixe, postfixe) et en largeur, ABR, insertion et recherche en temps $\\mathcal{O}(h)$.',
    readTime: '24 min',
    prerequis: ['Pointeurs et références', 'Récursivité terminale', 'Listes chaînées'],
    keyTheorems: [
      {
        name: 'Propriété Fondamentale des ABR & Parcours Infixe',
        statement: 'Dans un Arbre Binaire de Recherche (ABR), pour tout nœud de valeur $x$, toutes les valeurs du sous-arbre gauche sont $\\le x$ et toutes celles du sous-arbre droit sont $> x$. Le parcours infixe d\'un ABR visite les nœuds dans un ordre STRICTEMENT CROISSANT en temps $\\mathcal{O}(n)$.',
        astuceConcours: 'Pour vérifier qu\'un arbre binaire est un ABR, faire un parcours infixe et vérifier que la liste obtenue est triée, ou propager récursivement l\'intervalle de validité $]\\min, \\max[$.'
      }
    ],
    sections: [
      {
        title: '1. Hauteur d\'un arbre et complexité des opérations',
        content: 'Pour un arbre binaire de $n$ nœuds, la hauteur minimale est $\\lceil \\log_2(n+1) \\rceil - 1$. Dans le pire cas d\'un arbre filiforme (dégénéré en liste), la hauteur vaut $n-1$. La recherche, l\'insertion et la suppression dans un ABR s\'exécutent en temps $\\mathcal{O}(h)$, soit $\\mathcal{O}(\\log n)$ pour un arbre équilibré (AVL, Rouge-Noir).',
        methodKicker: 'Définition conventionnelle : un arbre vide a une hauteur de $-1$, une feuille unique a une hauteur de $0$.'
      }
    ],
    piegesClassiques: [
      'Tester la propriété ABR en vérifiant seulement que pour chaque nœud $x$, son fils gauche est $< x$ et son fils droit est $> x$ (faux : cela ne garantit pas que tous les descendants du sous-arbre gauche soient $< x$ !).',
      'Confondre la hauteur $h$ et la taille $n$ (nombre de nœuds) dans le calcul de complexité récursive.'
    ]
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR (SI) - COMPLEMENTS
  // ==========================================
  {
    id: 'si-statique-torseurs',
    slug: 'mecanique-statique-torseurs-liaisons',
    title: 'Statique des Solides & Torseurs d\'Actions Mécaniques',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'PCSI', 'MPSI', 'MP'],
    annee: '1ère année',
    description: 'Modélisation des liaisons normalisées, torseur d\'action mécanique, principe fondamental de la statique (PFS), degré d\'hyperstatisme et lois de Coulomb.',
    readTime: '24 min',
    prerequis: ['Vecteurs et repères orthonormés', 'Systèmes d\'équations linéaires'],
    keyTheorems: [
      {
        name: 'Principe Fondamental de la Statique (PFS)',
        statement: 'Un système matériel $S$ en équilibre par rapport à un repère galiléen $R_0$ vérifie la nullité du torseur des actions mécaniques extérieures agissant sur $S$ en n\'importe quel point $A$ :\n$$\\{T_{ext \\to S}\\}_A = \\begin{Bmatrix} \\vec{R}_{ext \\to S} \\\\ \\vec{\\mathcal{M}}_A(ext \\to S) \\end{Bmatrix}_A = \\begin{Bmatrix} \\vec{0} \\\\ \\vec{0} \\end{Bmatrix}$$',
        astuceConcours: 'Écrire les moments au point où le plus grand nombre d\'inconnues de liaison s\'annulent : cela découple immédiatement le système d\'équations scalaires.'
      }
    ],
    sections: [
      {
        title: '1. Torseurs des liaisons cinématiques usuelles',
        content: '- Liaison pivot d\'axe $\\vec{u}_z$ : bloque 5 degrés de liberté, autorise 1 rotation (moment selon $z$ nul). Torseur à 5 inconnues statiques : $(X, Y, Z, L, M, 0)$.\n- Liaison glissière d\'axe $\\vec{u}_x$ : autorise la translation selon $x$ (résultante selon $x$ nulle). Torseur : $(0, Y, Z, L, M, N)$.\n- Liaison appui-plan de normale $\\vec{u}_z$ : bloque la translation $z$ et les rotations $x, y$. Torseur : $(0, 0, Z, L, M, 0)$.',
        methodKicker: 'Formule de transport des moments de Varignon : $\\vec{\\mathcal{M}}_B = \\vec{\\mathcal{M}}_A + \\vec{BA} \\wedge \\vec{R}$.'
      }
    ],
    piegesClassiques: [
      'Additionner les moments de deux actions mécaniques exprimés en des points différents sans avoir appliqué la relation de Varignon.',
      'Oublier les actions à distance (le poids appliqué au centre de gravité $G$) lors de l\'inventaire du bilan des actions mécaniques extérieures.'
    ]
  },
  {
    id: 'si-dynamique-solides',
    slug: 'dynamique-solides-puissance-virtuelle',
    title: 'Dynamique des Systèmes Polyarticulés & Énergétique',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'PCSI'],
    annee: '2ème année',
    description: 'Torseur cinétique et dynamique, principe fondamental de la dynamique (PFD), théorème de l\'énergie-puissance cinétique, équilibrage statique et dynamique.',
    readTime: '26 min',
    prerequis: ['Cinématique du solide', 'Matrices d\'inertie', 'Calcul de puissance'],
    keyTheorems: [
      {
        name: 'Principe Fondamental de la Dynamique (PFD)',
        statement: 'Pour un système matériel $S$ en mouvement par rapport à un référentiel galiléen $R_0$, le torseur dynamique est égal au torseur des actions mécaniques extérieures en tout point $A$ :\n$$\\{D_{S/R_0}\\}_A = \\begin{Bmatrix} m \\vec{a}(G/R_0) \\\\ \\vec{\\delta}_A(S/R_0) \\end{Bmatrix}_A = \\{T_{ext \\to S}\\}_A$$',
        astuceConcours: 'Théorème de l\'énergie cinétique sous forme puissance : $\\frac{\\mathrm{d}E_c(S/R_0)}{\\mathrm{d}t} = \\mathcal{P}_{ext}(ext \\to S) + \\mathcal{P}_{int}(S)$. Évite de calculer les efforts de liaisons internes parfaites car leur puissance est nulle !'
      }
    ],
    sections: [
      {
        title: '1. Calcul du moment dynamique et matrice d\'inertie',
        content: 'Pour un solide en rotation autour de son centre d\'inertie $G$ ou d\'un point fixe $O$ : $\\vec{\\delta}_G(S/R_0) = \\left[\\frac{\\mathrm{d}\\vec{\\sigma}_G}{\\mathrm{d}t}\\right]_{R_0}$, avec $\\vec{\\sigma}_G = \\mathbb{I}(G, S) \\vec{\\Omega}(S/R_0)$. Lorsque les axes sont principaux d\'inertie, la matrice $\\mathbb{I}$ est diagonale, simplifiant les équations d\'Euler.',
        methodKicker: 'Pour un axe de révolution $z$, $I_{xx} = I_{yy}$, ce qui annule les termes gyroscopiques croisés.'
      }
    ],
    piegesClassiques: [
      'Écrire $\\vec{\\delta}_A = \\frac{\\mathrm{d}\\vec{\\sigma}_A}{\\mathrm{d}t}$ en un point $A$ qui n\'est ni fixe ni confondu avec le centre d\'inertie $G$ (dans ce cas général, un terme additionnel $m \\vec{v}(A) \\wedge \\vec{v}(G)$ apparaît !).',
      'Confondre la dérivée d\'un vecteur dans le repère galiléen et dans le repère mobile lié au solide (formule de Bour).'
    ]
  },
  {
    id: 'maths-integrales-multiples-green',
    slug: 'integrales-multiples-green-riemann-stokes',
    title: 'Intégrales Multiples & Formules de Green-Riemann',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    description: 'Théorème de Fubini pour intégrales doubles et triples, jacobien du changement de variables, intégrales curvilignes, formule de Green-Riemann et circulation de champs.',
    readTime: '25 min',
    prerequis: ['Calcul différentiel', 'Intégration sur un segment', 'Paramétrage d\'arcs géométriques'],
    keyTheorems: [
      {
        name: 'Formule de Green-Riemann',
        statement: 'Soit $D$ un domaine compact du plan délimité par une courbe fermée simple $\\partial D$ orientée dans le sens trigonométrique, et $P, Q : D \\to \\mathbb{R}$ de classe $\\mathcal{C}^1$. Alors :\n$$\\oint_{\\partial D} (P \\,\\mathrm{d}x + Q \\,\\mathrm{d}y) = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) \\mathrm{d}x \\,\\mathrm{d}y$$',
        astuceConcours: 'Permet de calculer l\'aire d\'un domaine par circulation d\'une forme différentielle : $\\mathcal{A}(D) = \\frac{1}{2} \\oint_{\\partial D} (x \\,\\mathrm{d}y - y \\,\\mathrm{d}x)$.'
      },
      {
        name: 'Changement de variables et Jacobien',
        statement: 'Pour un $\\mathcal{C}^1$-difféomorphisme $\\phi : \\Delta \\to D$ :\n$$\\iint_D f(x, y) \\,\\mathrm{d}x \\,\\mathrm{d}y = \\iint_\\Delta f(\\phi(u, v)) \\left| \\det J_\\phi(u, v) \\right| \\mathrm{d}u \\,\\mathrm{d}v$$\nEn coordonnées polaires : $\\mathrm{d}x \\,\\mathrm{d}y = r \\,\\mathrm{d}r \\,\\mathrm{d}\\theta$. En coordonnées sphériques : $\\mathrm{d}x \\,\\mathrm{d}y \\,\\mathrm{d}z = r^2 \\sin\\theta \\,\\mathrm{d}r \\,\\mathrm{d}\\theta \\,\\mathrm{d}\\varphi$.',
        astuceConcours: 'Ne jamais oublier le facteur $r$ en polaires et $r^2 \\sin\\theta$ en sphériques dans l\'élément différentiel de volume !'
      }
    ],
    sections: [
      {
        title: '1. Calcul d\'intégrales de Gauss par passage en polaires',
        content: 'Pour calculer $I = \\int_0^{+\\infty} e^{-t^2}\\,\\mathrm{d}t$, on calcule $I^2 = \\iint_{(\\mathbb{R}^+)^2} e^{-(x^2+y^2)}\\,\\mathrm{d}x\\,\\mathrm{d}y = \\int_0^{\\pi/2} \\mathrm{d}\\theta \\int_0^{+\\infty} r e^{-r^2}\\,\\mathrm{d}r = \\frac{\\pi}{2} \\left[-\\frac{1}{2} e^{-r^2}\\right]_0^{+\\infty} = \\frac{\\pi}{4}$, d\'où la valeur remarquable $I = \\frac{\\sqrt{\\pi}}{2}$.',
        methodKicker: 'Méthode reine des écrits Centrale et Mines pour les intégrales dépendant de formes quadratiques.'
      }
    ],
    piegesClassiques: [
      'Oublier d\'orienter le bord $\\partial D$ dans le sens trigonométrique (laisser le domaine à sa gauche) dans la formule de Green-Riemann.',
      'Oublier la valeur absolue sur le déterminant jacobien $|\\det J|$ lors d\'un changement de variables renversant l\'orientation.'
    ]
  },
  {
    id: 'maths-polynomes-arithmetique',
    slug: 'polynomes-arithmetique-elements-simples',
    title: 'Polynômes $\\mathbb{K}[X]$ & Fractions Rationnelles',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    description: 'Division euclidienne, pgcd, identité de Bézout, factorisation en irréductibles, relations coefficients-racines (Viète) et décomposition en éléments simples.',
    readTime: '23 min',
    prerequis: ['Arithmétique dans $\\mathbb{Z}$', 'Nombres complexes', 'Espaces vectoriels'],
    keyTheorems: [
      {
        name: 'Théorème de d\'Alembert-Gauss & Factorisation',
        statement: 'Tout polynôme non constant à coefficients complexes est scindé sur $\\mathbb{C}$. Sur $\\mathbb{R}[X]$, les seuls polynômes irréductibles sont les polynômes de degré 1 et les polynômes de degré 2 de discriminant strictement négatif $\\Delta < 0$.',
        astuceConcours: 'Pour déterminer la décomposition en éléments simples d\'une fraction $\\frac{P(X)}{\\prod (X - a_i)}$, multiplier par $(X - a_k)$ puis évaluer en $a_k$.'
      },
      {
        name: 'Relations Coefficients-Racines de Viète',
        statement: 'Pour un polynôme unitaire $P(X) = X^n + a_{n-1} X^{n-1} + \\dots + a_0 = \\prod_{k=1}^n (X - x_k)$ :\n$$\\sum_{k=1}^n x_k = -a_{n-1}, \\quad \\sum_{1 \\le i < j \\le n} x_i x_j = a_{n-2}, \\quad \\prod_{k=1}^n x_k = (-1)^n a_0$$',
        astuceConcours: 'Permet de calculer les sommes de puissances des racines $\\sum x_k^2 = (\\sum x_k)^2 - 2 \\sum_{i<j} x_i x_j$ sans calculer les racines explicitement.'
      }
    ],
    sections: [
      {
        title: '1. Méthode pratique de décomposition en éléments simples',
        content: 'Soit $F(X) = \\frac{P(X)}{Q(X)}$. Si $\\deg P \\ge \\deg Q$, effectuer d\'abord la division euclidienne $P = E Q + R$ pour isoler la partie entière $E(X)$. Pour un pôle multiple $(X-a)^m$, poser le changement de variable $X = a + H$ et faire un développement limité selon les puissances de $H$.',
        methodKicker: 'Réflexe : Évaluer en un point particulier (ex: $X=0$) ou faire tendre $X \\to +\\infty$ pour trouver rapidement le dernier coefficient inconnu.'
      }
    ],
    piegesClassiques: [
      'Oublier d\'extraire la partie entière d\'une fraction rationnelle avant de poser les éléments simples quand $\\deg(P) \\ge \\deg(Q)$.',
      'Confondre racine de multiplicité $m$ (qui annule $P, P\', \\dots, P^{(m-1)}$ mais pas $P^{(m)}$) avec racine simple.'
    ]
  },
  {
    id: 'physique-mecanique-celeste',
    slug: 'mecanique-celeste-forces-centrales-kepler',
    title: 'Mécanique Céleste & Lois de Kepler',
    matiere: 'Physique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI'],
    annee: '1ère année',
    description: 'Mouvement à force centrale conservative, constante des aires $C$, formule de Binet, énergie potentielle effective, lois de Kepler et trajectoires de satellites.',
    readTime: '26 min',
    prerequis: ['Mécanique du point', 'Théorème du moment cinétique', 'Coordonnées polaires'],
    keyTheorems: [
      {
        name: 'Loi des Aires & Conservation du Moment Cinétique',
        statement: 'Pour une force centrale $\\vec{F} = F(r) \\vec{u}_r$, le moment cinétique en $O$ est conservatif : $\\vec{L}_O = m r^2 \\dot{\\theta} \\vec{u}_z = \\vec{\\mathrm{cste}}$. Le mouvement est rigoureusement plan, et le rayon vecteur balaie des aires égales en des temps égaux avec la constante des aires :\n$$C = r^2 \\dot{\\theta} = \\frac{\\|\\vec{L}_O\\|}{m} = \\mathrm{cste}$$',
        astuceConcours: 'Vitesse aérolaire : $\\frac{\\mathrm{d}\\mathcal{A}}{\\mathrm{d}t} = \\frac{C}{2}$. Fondement direct de la 2ème loi de Kepler.'
      },
      {
        name: 'Troisième Loi de Kepler',
        statement: 'Pour une orbite elliptique de demi-grand axe $a$ autour d\'un corps attracteur de masse $M$ :\n$$\\frac{T^2}{a^3} = \\frac{4\\pi^2}{G M}$$',
        astuceConcours: 'Permet de peser les étoiles et planètes : connaissant la période orbitale $T$ et le rayon $a$, on en déduit immédiatement la masse $M$ du corps central.'
      }
    ],
    sections: [
      {
        title: '1. Énergie potentielle effective et classification des orbites',
        content: 'L\'énergie mécanique s\'écrit $E_m = \\frac{1}{2} m \\dot{r}^2 + E_{p, eff}(r)$ avec le potentiel effectif $E_{p, eff}(r) = -\\frac{G M m}{r} + \\frac{m C^2}{2 r^2}$. Le terme centrifuge en $+1/r^2$ crée une barrière répulsive à courte distance.\n- Si $E_m < 0$ : état lié, trajectoire elliptique fermée.\n- Si $E_m = 0$ : trajectoire parabolique (vitesse de libération $v_{lib} = \\sqrt{2 G M / R}$).\n- Si $E_m > 0$ : état de diffusion, trajectoire hyperbolique.',
        methodKicker: 'Formule de Binet : exprime la trajectoire polaire $u(\\theta) = 1/r(\\theta)$ via $\\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u = \\frac{G M}{C^2}$.'
      }
    ],
    piegesClassiques: [
      'Confondre vitesse orbitale circulaire $v_{orb} = \\sqrt{G M / R}$ et vitesse de libération $v_{lib} = \\sqrt{2} v_{orb}$.',
      'Appliquer la 3ème loi de Kepler avec le rayon minimal (périgée) ou maximal (apogée) au lieu du DEMI-GRAND AXE $a = \\frac{r_{min} + r_{max}}{2}$.'
    ]
  },
  {
    id: 'physique-optique-geometrique',
    slug: 'optique-geometrique-gauss-lentilles',
    title: 'Optique Géométrique & Systèmes de Gauss',
    matiere: 'Physique',
    filieres: ['PCSI', 'MPSI', 'BCPST'],
    annee: '1ère année',
    description: 'Lois de Snell-Descartes, conditions de Gauss et stigmatisme approché, lentilles minces convergentes et divergentes, formules de conjugaison de Descartes et Newton, instruments d\'optique.',
    readTime: '22 min',
    prerequis: ['Géométrie euclidienne élémentaire', 'Trigonométrie', 'Notion de rayon lumineux'],
    keyTheorems: [
      {
        name: 'Lois de Snell-Descartes & Réfraction Limite',
        statement: 'Au passage d\'un dioptre séparant deux milieux d\'indices $n_1$ et $n_2$ :\n- Réflexion : $i\'_1 = -i_1$\n- Réfraction : $n_1 \\sin i_1 = n_2 \\sin i_2$\nSi $n_1 > n_2$, il existe un angle critique de réflexion totale $i_{lim} = \\arcsin(n_2/n_1)$ au-delà duquel aucun rayon n\'est réfracté.',
        astuceConcours: 'Principe fondamental des fibres optiques à saut d\'indice : guidage de la lumière par réflexion totale interne.'
      },
      {
        name: 'Formules de Conjugaison des Lentilles Minces',
        statement: '- Origine au centre optique $O$ (Descartes) : $\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF\'}} = V$ (vergence en dioptries $\\delta$).\n- Origine aux foyers $F$ et $F\'$ (Newton) : $\\overline{FA} \\cdot \\overline{F\'A\'} = -f\'^2$.\n- Grandissement transversal : $\\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = \\frac{\\overline{OA\'}}{\\overline{OA}} = -\\frac{\\overline{F\'A\'}}{f\'} = -\\frac{f}{\\overline{FA}}$.',
        astuceConcours: 'Les distances algébriques sont orientées dans le sens de propagation de la lumière : $\\overline{OA} < 0$ pour un objet réel situé avant la lentille.'
      }
    ],
    sections: [
      {
        title: '1. Conditions de Gauss et stigmatisme approché',
        content: 'Un système optique est stigmatique si l\'image d\'un point est un point. Les conditions de Gauss (rayons paraxiaux, peu inclinés sur l\'axe optique et proches de l\'axe) garantissent $\\sin i \\approx i$ et $\\cos i \\approx 1$, assurant un stigmatisme et aplanétisme approchés de haute qualité.',
        methodKicker: 'Système afocal (ex: lunette astronomique) : le foyer image de l\'objectif est confondu avec le foyer objet de l\'oculaire ($F\'_1 = F_2$), grossissement angulaire $G = -f\'_1 / f\'_2$.'
      }
    ],
    piegesClassiques: [
      'Oublier les barres de mesure algébrique : $\\overline{OA}$ est négatif pour un objet réel en amont de la lentille ! Une erreur de signe fausse l\'ensemble du problème.',
      'Confondre grandissement transversal $\\gamma = A\'B\' / AB$ (sans unité) et grossissement angulaire $G = \\theta\' / \\theta$ pour les instruments d\'observation à l\'infini.'
    ]
  },
  {
    id: 'chimie-diagrammes-pourbaix',
    slug: 'diagrammes-pourbaix-potentiel-ph-corrosion',
    title: 'Diagrammes Potentiel-pH (Pourbaix) & Spéciation',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'BCPST', 'PSI'],
    annee: '1ère & 2ème année',
    description: 'Principes de construction, calcul des pentes selon l\'équation de Nernst, domaines d\'immunité, corrosion et passivation, dismutation et médiamutation, superposition avec le domaine de l\'eau.',
    readTime: '24 min',
    prerequis: ['Formule de Nernst', 'Produit de solubilité $K_s$', 'Réactions acido-basiques'],
    keyTheorems: [
      {
        name: 'Formule de Nernst pour une frontière de Pourbaix',
        statement: 'Pour la demi-réaction $Ox + n e^- + m H^+ \\rightleftharpoons Red + \\frac{m}{2} H_2 O$, le potentiel d\'équilibre à 298 K s\'écrit :\n$$E = E^\\circ + \\frac{0{,}059}{n} \\log\\frac{[Ox]}{[Red]} - \\frac{0{,}059 \\cdot m}{n} \\mathrm{pH}$$\nLa pente de la frontière vaut donc $-\\frac{0{,}059 \\cdot m}{n}\\text{ V/unité pH}$.',
        astuceConcours: 'Si aucun proton n\'est échangé ($m=0$), la pente est rigoureusement nulle (frontière horizontale). Si aucun électron n\'est échangé ($n=0$), la frontière est purement acido-basique ou de précipitation (droite verticale indépendante de $E$).'
      }
    ],
    sections: [
      {
        title: '1. Domaines de stabilité et dismutation',
        content: 'Une espèce dont le domaine de prédominance ou d\'existence est pris en sandwich sans contact direct entre son oxydant supérieur et son réducteur inférieur est thermodynamiquement instable et se dismute spontanément (ex: $\\mathrm{Cu}^+$ dans l\'eau qui se dismute en $\\mathrm{Cu}^{2+} + \\mathrm{Cu}(s)$).',
        methodKicker: 'La superposition avec le fuseau de stabilité de l\'eau ($O_2/H_2O$ et $H^+/H_2$) montre quels métaux réduisent l\'eau avec dégagement de dihydrogène (ceux dont la frontière est en dessous de la droite $E = -0{,}059\\,\\mathrm{pH}$).'
      }
    ],
    piegesClassiques: [
      'Oublier de vérifier la concentration de tracé $C_t$ donnée par le sujet (les pentes restent identiques, mais l\'ordonnée à l\'origine est décalée).',
      'Confondre passivation (recouvrement protecteur par un oxyde insoluble compact) et immunité (stabilité thermodynamique du métal pur).'
    ]
  },
  // ==========================================
  // NOUVEAUX CHAPITRES OFFICIELS DU PROGRAMME CPGE
  // ==========================================
  {
    id: 'chimie-orga-mecanismes',
    slug: 'chimie-organique-substitutions-eliminations-additions',
    title: 'Chimie Organique : Substitutions, Éliminations & Additions',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'BCPST', 'PSI'],
    annee: '1ère & 2ème année',
    description: 'Substitutions nucléophiles ($S_N1$, $S_N2$), réactions d\'élimination ($E1$, $E2$), stéréochimie, inversion de Walden, régiosélectivité de Zaitsev et Markovnikov, compétition $S_N / E$.',
    readTime: '28 min',
    prerequis: ['Structure électronique et liaisons polarisées', 'Effets inductifs et mésomères', 'Stéréoisomérie (R/S, Z/E)'],
    keyTheorems: [
      {
        name: 'Compétition Mécanistique $S_N1$ vs $S_N2$',
        statement: 'Pour un substrat $R-X$ :\n- Substrat encombré (tertiaire $3^\\circ$), solvant protique polaire $\\implies$ passage par un carbocation intermédiaire plan $\\implies$ mécanisme $S_N1$ monomoléculaire (vitesse $v = k [RX]$) avec racémisation partielle ou totale.\n- Substrat peu encombré (primaire $1^\\circ$), bon nucléophile, solvant aprotique polaire $\\implies$ attaque dorsale concertée bimoléculaire $\\implies$ mécanisme $S_N2$ (vitesse $v = k [RX][Nu]$) avec inversion stéréospécifique de configuration (Inversion de Walden).',
        demonstration: 'Dans le mécanisme concerté $S_N2$, le doublet non-liant du nucléophile attaque l\'orbitale antiliante $\\sigma^*_{C-X}$ située à $180^\\circ$ de la liaison $C-X$. L\'état de transition pentacoordonné bipyramidal impose un retournement de l\'ombrelle des trois substituants du carbone.',
        astuceConcours: 'Attention : inversion de configuration (inversion spatiale de Walden) ne veut PAS dire automatiquement passage de $(R)$ à $(S)$ ! La priorité CIP du nucléophile entrant peut différer de celle du groupe partant $X$. Il faut recalculer formellement les ordres CIP sur le produit final.'
      },
      {
        name: 'Règle de Zaitsev & Stéréospécificité de l\'élimination $E2$',
        statement: 'L\'élimination bimoléculaire $E2$ est une réaction concertée nécessitant une conformation anti-périplanaire (dièdre de $180^\\circ$) entre le proton $H$ arraché par la base et le groupe partant $X$. L\'alcène thermodynamiquement majoritaire est le plus substitué (règle de Zaitsev), sauf avec une base très encombrée (t-BuOK) qui conduit au produit d\'Hoffmann (le moins substitué).',
        astuceConcours: 'Sur un cycle cyclohexanique, $H$ et $X$ doivent impérativement être en position trans-diaxiale pour subir l\'élimination $E2$. Si le dérivé halogéné est en position équatoriale, l\'élimination $E2$ ne peut avoir lieu qu\'après basculement conformationnel chaise-chaise.'
      }
    ],
    sections: [
      {
        title: '1. Facteurs orientant la compétition $S_N$ contre $E$',
        content: 'La nucléophilie mesure la vitesse d\'attaque sur un carbone électrophile, tandis que la basicité mesure l\'affinité thermodynamique pour un proton $H^+$. Une base forte et encombrée ($t-\\mathrm{BuO}^-$, $\\mathrm{LDA}$) favorise exclusivement l\'élimination $E2$. Une augmentation de la température favorise toujours les éliminations $E$ par rapport aux substitutions $S_N$ pour des raisons entropiques (formation de 3 molécules à partir de 2, $\\Delta_r S^\\circ > 0$, donc terme $-T\\Delta_r S^\\circ$ plus favorable à chaud).',
        methodKicker: 'Formule réflexe concours : Température élevée $\\implies$ Élimination ! Nucléophile doux peu basique ($I^-$, $RS^-$, $N_3^-$) $\\implies$ Substitution !'
      }
    ],
    piegesClassiques: [
      'Croire qu\'une $S_N1$ donne toujours un mélange racémique parfait $50/50$ : le groupe partant peut bloquer temporairement la face d\'attaque (paire d\'ions intime), conduisant souvent à un léger excès d\'inversion.',
      'Oublier les réarrangements de carbocations (transpositions de Wagner-Meerwein, migration d\'hydrure ou de méthyle) dans les réactions passant par un intermédiaire $S_N1$ ou $E1$.'
    ]
  },
  {
    id: 'si-dynamique-solide',
    slug: 'dynamique-energetique-du-solide-pfd-theoremes-globaux',
    title: 'Dynamique & Énergétique du Solide (PFD & Théorèmes Globaux)',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'PCSI', 'MPSI', 'MP', 'MPI'],
    annee: '1ère & 2ème année',
    description: 'Torseurs cinétique et dynamique, matrice d\'inertie, théorème de Huygens, Principe Fondamental de la Dynamique, Théorème de l\'Énergie Cinétique (TEC) et puissances virtuelles.',
    readTime: '30 min',
    prerequis: ['Torseurs cinématiques et d\'actions mécaniques', 'Calcul vectoriel et comoment', 'Cinématique du solide indéformable'],
    keyTheorems: [
      {
        name: 'Principe Fondamental de la Dynamique (PFD vectoriel et torseuriel)',
        statement: 'Soit un solide (ou système matériel) $S$ de masse $m$ et de centre d\'inertie $G$, en mouvement par rapport à un repère galiléen $\\mathcal{R}_0$ :\n$$\\{\\mathcal{D}(S/\\mathcal{R}_0)\\} = \\{\\mathcal{T}_{ext \\to S}\\}$$\nCe qui équivaut aux deux équations vectorielles scalaires en un point $A$ quelconque :\n1. Théorème de la résultante dynamique : $m \\vec{a}(G/\\mathcal{R}_0) = \\sum \\vec{F}_{ext \\to S}$\n2. Théorème du moment dynamique : $\\vec{\\delta}_A(S/\\mathcal{R}_0) = \\sum \\vec{M}_A(ext \\to S)$',
        demonstration: 'Par dérivation temporelle dans le repère galiléen $\\mathcal{R}_0$ du moment cinétique : $\\vec{\\delta}_A(S/\\mathcal{R}_0) = \\left[\\frac{\\mathrm{d}\\vec{\\sigma}_A(S/\\mathcal{R}_0)}{\\mathrm{d}t}\\right]_{\\mathcal{R}_0} + m \\vec{v}(A/\\mathcal{R}_0) \\wedge \\vec{v}(G/\\mathcal{R}_0)$. Le terme croisé s\'annule si $A$ est fixe dans $\\mathcal{R}_0$ ou si $A = G$.',
        astuceConcours: 'Écrivez TOUJOURS le moment dynamique soit au centre de gravité $G$, soit en un point fixe dans le repère galiléen pour annuler instantanément le terme parasite $m \\vec{v}(A) \\wedge \\vec{v}(G)$.'
      },
      {
        name: 'Théorème de Koenig pour l\'Énergie Cinétique',
        statement: 'Pour un solide indéformable $S$, l\'énergie cinétique dans $\\mathcal{R}_0$ se décompose en mouvement du barycentre et mouvement propre autour du barycentre :\n$$E_c(S/\\mathcal{R}_0) = \\frac{1}{2} m v^2(G/\\mathcal{R}_0) + \\frac{1}{2} \\vec{\\Omega}(S/\\mathcal{R}_0) \\cdot \\vec{\\sigma}_G(S/\\mathcal{R}_0) = \\frac{1}{2} m v^2(G) + \\frac{1}{2} \\vec{\\Omega}^T \\mathbb{I}(G, S) \\vec{\\Omega}$$',
        astuceConcours: 'Pour déterminer l\'équation du mouvement d\'un système à 1 degré de liberté sans calculer les actions mécaniques de liaison parfaites, appliquez la puissance du TEC : $\\frac{\\mathrm{d}E_c}{\\mathrm{d}t} = \\mathcal{P}_{ext} + \\mathcal{P}_{int}$. Les liaisons parfaites développent une puissance nulle !'
      }
    ],
    sections: [
      {
        title: '1. Matrice d\'inertie et Théorème de Huygens',
        content: 'La matrice d\'inertie $\\mathbb{I}(G, S)$ regroupe les moments d\'inertie (termes diagonaux $A, B, C$) et les produits d\'inertie (termes extradiagonaux $D, E, F$). Tout plan de symétrie matérielle orthogonal à un axe rend cet axe principal d\'inertie (produits d\'inertie associés nuls). Le théorème de Huygens permet de translater le moment d\'inertie d\'un axe passant par $G$ vers un axe parallèle distant de $d$ : $J_\\Delta = J_{\\Delta_G} + m d^2$.',
        methodKicker: 'Si le repère est constitué d\'axes de symétrie, la matrice d\'inertie est diagonale ! Cherchez toujours les symétries matérielles en premier.'
      }
    ],
    piegesClassiques: [
      'Dériver le moment cinétique sans faire attention au repère de dérivation : la formule de dérivation composée $\\left[\\frac{\\mathrm{d}\\vec{u}}{\\mathrm{d}t}\\right]_{\\mathcal{R}_0} = \\left[\\frac{\\mathrm{d}\\vec{u}}{\\mathrm{d}t}\\right]_{\\mathcal{R}} + \\vec{\\Omega}(\\mathcal{R}/\\mathcal{R}_0) \\wedge \\vec{u}$ est obligatoire.',
      'Oublier les puissances des frottements de Coulomb : si un solide glisse, la puissance de contact tangentielle $T v_g \\le 0$ n\'est PAS nulle et dissipe de l\'énergie.'
    ]
  },
  {
    id: 'maths-taylor-dl',
    slug: 'formules-de-taylor-developpements-limites-asymptotique',
    title: 'Formules de Taylor, Développements Limités & Calcul Asymptotique',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    description: 'Formules de Taylor (Young, reste intégral, Lagrange), développements limités usuels, opérations sur les DL, développements asymptotiques de suites et intégrales, recherche d\'équivalents.',
    readTime: '26 min',
    prerequis: ['Dérivées successives et fonctions $\\mathcal{C}^n$', 'Relations de comparaison ($o, \\mathcal{O}, \\sim$)', 'Limites et continuité'],
    keyTheorems: [
      {
        name: 'Formule de Taylor-Young',
        statement: 'Soit $f : I \\to \\mathbb{K}$ une fonction de classe $\\mathcal{C}^n$ au voisinage de $a$. Alors $f$ admet un développement limité à l\'ordre $n$ en $a$ donné par :\n$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} (x-a)^k + o\\left((x-a)^n\\right)$$',
        demonstration: 'Par récurrence sur $n$ combinée avec le lemme d\'intégration terme à terme des petits o, ou par le reste intégral en majorant le reste par continuité uniforme locale.',
        astuceConcours: 'C\'est la machine absolue pour trouver les équivalents locaux sans risque : pour connaître le comportement de $f(x) - g(x)$, écrivez leur DL au premier ordre où les termes ne s\'annulent pas.'
      },
      {
        name: 'Formule de Taylor avec Reste Intégral (Formule de Laplace)',
        statement: 'Si $f$ est de classe $\\mathcal{C}^{n+1}$ sur un segment contenant $a$ et $b$ :\n$$f(b) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} (b-a)^k + \\int_a^b \\frac{(b-t)^n}{n!} f^{(n+1)}(t)\\,\\mathrm{d}t$$\nEn déduire l\'inégalité de Taylor-Lagrange si $|f^{(n+1)}| \\le M_{n+1}$ : $|R_n| \\le \\frac{M_{n+1}}{(n+1)!} |b-a|^{n+1}$.',
        astuceConcours: 'Indispensable pour démontrer la convergence des séries entières classiques comme celle de l\'exponentielle ou pour borner rigoureusement l\'erreur d\'approximation quadratique ou cubique.'
      }
    ],
    sections: [
      {
        title: '1. Méthode pour le développement asymptotique de suites implicites',
        content: 'Pour une équation $f(x) = n$ (ex: $x_n e^{x_n} = n$) : 1. Montrer l\'existence et l\'unicité de $x_n$ par stricte monotonie. 2. Déterminer le premier terme dominant par encadrement (ex: $\\ln x_n + x_n = \\ln n \\implies x_n \\sim \\ln n$). 3. Poser $x_n = \\ln n + \\varepsilon_n$ avec $\\varepsilon_n = o(\\ln n)$ et réinjecter dans l\'équation pour obtenir le second terme $(\\varepsilon_n = -\\ln(\\ln n) + o(1))$.',
        methodKicker: 'Règle d\'or : On ne développe jamais à l\'ordre $n+1$ tant que les ordres $1, \\dots, n$ n\'ont pas été validés par l\'écriture $x_n = u_n + o(v_n)$.'
      }
    ],
    piegesClassiques: [
      'Composer des DL sans vérifier que le terme intérieur tend bien vers 0 (ex: dans $e^{u(x)}$, il est obligatoire que $u(x) \\to 0$).',
      'Faire un DL à un ordre insuffisant qui conduit à une forme indéterminée $0 + o(x^2)$ au numérateur et dénominateur.'
    ]
  },
  {
    id: 'physique-transferts-thermiques',
    slug: 'transferts-thermiques-conduction-fourier-convection',
    title: 'Transferts Thermiques : Conduction, Convection & Résistances',
    matiere: 'Physique',
    filieres: ['PC', 'PSI', 'MP', 'PCSI'],
    annee: '1ère & 2ème année',
    description: 'Loi de Fourier de la diffusion thermique, équation de la chaleur avec et sans terme source, loi de Newton pour la convection, notion de résistance thermique et analogies électriques.',
    readTime: '25 min',
    prerequis: ['Premier principe de la thermodynamique', 'Opérateur laplacien', 'Flux vectoriel'],
    keyTheorems: [
      {
        name: 'Loi de Fourier & Équation de Diffusion Thermique',
        statement: 'La conduction s\'exprime par la loi phénoménologique de Fourier :\n$$\\vec{j}_{th} = -\\lambda \\vec{\\nabla} T$$\nDans un milieu homogène et isotrope de masse volumique $\\rho$, capacité calorifique $c$ et conductivité thermique $\\lambda$, le bilan d\'énergie microscopique donne l\'équation de la chaleur avec terme source volumique $p_{vol}$ :\n$$\\rho c \\frac{\\partial T}{\\partial t} = \\lambda \\Delta T + p_{vol} \\iff \\frac{\\partial T}{\\partial t} = D_{th} \\Delta T + \\frac{p_{vol}}{\\rho c}$$\navec la diffusivité thermique $D_{th} = \\frac{\\lambda}{\\rho c}$ (en $\\mathrm{m^2\\cdot s^{-1}}$).',
        demonstration: 'Sur un volume mésoscopique $\\mathrm{d}V$, le premier principe donne $\\mathrm{d}U = \\rho c \\frac{\\partial T}{\\partial t} \\mathrm{d}V \\mathrm{d}t$. Le transfert thermique net reçu par conduction à travers la surface fermée orientée vers l\'extérieur vaut $\\delta Q = -\\left(\\iint \\vec{j}_{th} \\cdot \\mathrm{d}\\vec{S}\\right) \\mathrm{d}t = -\\mathrm{div}(\\vec{j}_{th}) \\mathrm{d}V \\mathrm{d}t$ par le théorème de Green-Ostrogradski. En injectant $\\vec{j}_{th} = -\\lambda \\vec{\\nabla} T$ et la puissance interne $p_{vol} \\mathrm{d}V$, on obtient le résultat.',
        astuceConcours: 'En régime stationnaire sans source, l\'équation se réduit à $\\Delta T = 0$ (équation de Laplace). Le profil de température est affine à 1D cartésien, logarithmique en cylindrique ($\\| \\vec{u}_r$), et en $1/r$ en sphérique.'
      },
      {
        name: 'Analogie Électrothermique & Résistance Thermique',
        statement: 'Le flux thermique $\\Phi_{th}$ (en Watts) est l\'analogue de l\'intensité $I$, et la différence de température $\\Delta T = T_1 - T_2$ est l\'analogue de la tension $U$. La loi d\'Ohm thermique s\'écrit :\n$$\\Delta T = R_{th} \\Phi_{th}$$\n- Conduction plane : $R_{th, cond} = \\frac{e}{\\lambda S}$\n- Conduction cylindrique (rayon intérieur $R_1$, extérieur $R_2$, longueur $L$) : $R_{th, cyl} = \\frac{\\ln(R_2/R_1)}{2\\pi \\lambda L}$\n- Convection (loi de Newton) : $R_{th, conv} = \\frac{1}{h S}$',
        astuceConcours: 'Pour des couches d\'isolants successives, les résistances thermiques s\'additionnent en série comme des résistances électriques : $R_{th, total} = \\sum R_{th, i}$.'
      }
    ],
    sections: [
      {
        title: '1. Épaisseur critique d\'isolant sur une canalisation cylindrique',
        content: 'Lorsqu\'on ajoute un manchon isolant de rayon externe $r$ autour d\'un tuyau de rayon $R_1$, la résistance de conduction augmente en $\\ln(r/R_1)$, mais la surface d\'échange externe avec l\'air augmente également, ce qui DIMINUE la résistance de convection $1/(h 2\\pi r L)$. La résistance totale passe par un minimum pour le rayon critique $r_c = \\frac{\\lambda}{h}$.',
        methodKicker: 'Si $R_1 < r_c$, rajouter de l\'isolant augmente initialement les déperditions thermiques !'
      }
    ],
    piegesClassiques: [
      'Oublier le signe moins dans la loi de Fourier $\\vec{j}_{th} = -\\lambda \\vec{\\nabla} T$ (la chaleur diffuse toujours spontanément des zones chaudes vers les zones froides, conformément au second principe $\\sigma_s > 0$).',
      'Confondre conductivité thermique $\\lambda$ (en $\\mathrm{W\\cdot m^{-1}\\cdot K^{-1}}$) et diffusivité thermique $D_{th}$ (en $\\mathrm{m^2\\cdot s^{-1}}$).'
    ]
  },
  {
    id: 'info-diviser-pour-regner',
    slug: 'algorithmes-diviser-pour-regner-master-theorem',
    title: 'Algorithmes Diviser pour Régner & Master Theorem',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PC', 'PSI', 'MPSI', 'PCSI'],
    annee: '1ère & 2ème année',
    description: 'Principe de décomposition, tri fusion (MergeSort), multiplication rapide d\'entiers (Karatsuba), exponentiation rapide, relations de récurrence et Master Theorem d\'Akra-Bazzi.',
    readTime: '24 min',
    prerequis: ['Complexité algorithmique (notation $\\mathcal{O}, \\Theta, \\Omega$)', 'Récursivité et pile d\'appels', 'Arbres binaires'],
    keyTheorems: [
      {
        name: 'Le Théorème Maître (Master Theorem)',
        statement: 'Soit une récurrence de complexité de la forme $T(n) = a T(n/b) + \\Theta(n^d)$ avec $a \\ge 1, b > 1, d \\ge 0$ :\n1. Si $d < \\log_b(a)$ (travail dominé par les feuilles) : $T(n) = \\Theta(n^{\\log_b(a)})$\n2. Si $d = \\log_b(a)$ (travail équitablement réparti à chaque niveau) : $T(n) = \\Theta(n^d \\log n)$\n3. Si $d > \\log_b(a)$ (travail dominé par la division initiale) : $T(n) = \\Theta(n^d)$',
        demonstration: 'En développant l\'arbre de récursion de hauteur $\\log_b(n)$, chaque niveau $k$ compte $a^k$ sous-problèmes de taille $n/b^k$, réalisant une charge de travail totale de $\\sum_{k=0}^{\\log_b n} a^k \\left(\\frac{n}{b^k}\\right)^d = n^d \\sum_{k=0}^{\\log_b n} \\left(\\frac{a}{b^d}\\right)^k$, qui est une somme géométrique de raison $q = a/b^d$.',
        astuceConcours: 'Pour le tri fusion : $T(n) = 2 T(n/2) + \\Theta(n)$, on a $a=2, b=2, d=1$, donc $\\log_2(2) = 1 = d \\implies T(n) = \\Theta(n \\log n)$. Pour Karatsuba : $T(n) = 3 T(n/2) + \\Theta(n) \\implies T(n) = \\Theta(n^{\\log_2 3}) \\approx \\Theta(n^{1{,}585})$, strictement meilleur que le produit classique en $\\mathcal{O}(n^2)$ !'
      }
    ],
    sections: [
      {
        title: '1. Structure canonique d\'une preuve de complexité en Diviser pour Régner',
        content: 'Toujours expliciter les trois phases : 1. Division (découpage de l\'entrée en sous-parties). 2. Résolution (appels récursifs sur les instances de taille réduite). 3. Combinaison (fusion des résultats partiels pour former la réponse globale).',
        methodKicker: 'Astuce : Dessinez l\'arbre d\'appels récursifs pour visualiser immédiatement le coût de chaque niveau.'
      }
    ],
    piegesClassiques: [
      'Oublier le cas de base dans l\'analyse de récurrence (conduit à des boucles infinies ou des divisions par zéro).',
      'Confondre la complexité temporelle et la complexité spatiale : la mémoire allouée sur la pile d\'appels est proportionnelle à la hauteur de l\'arbre $\\mathcal{O}(\\log n)$, mais si l\'on recrée des copies de listes à chaque étape sans découpage en place, la complexité spatiale peut exploser en $\\mathcal{O}(n \\log n)$.'
    ]
  },
  {
    id: 'maths-courbes-parametrees',
    slug: 'courbes-parametrees-enveloppes-courbure',
    title: 'Courbes Paramétrées, Enveloppes & Géométrie Différentielle',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPSI'],
    annee: '2ème année',
    description: 'Étude cinématique des arcs paramétrés, branches infinies, points stationnaires et rebroussements (règle $p$ et $q$), repère de Frenet, courbure scalaire et enveloppes de droites.',
    readTime: '26 min',
    prerequis: ['Dérivation des fonctions vectorielles', 'Développements limités de Taylor-Young', 'Produit scalaire et déterminant euclidien'],
    keyTheorems: [
      {
        name: 'Classification locale des points stationnaires (Règle $p$ et $q$)',
        statement: 'Soit $f : I \\to \\mathbb{R}^2$ de classe $\\mathcal{C}^\\infty$ et $t_0$ un point singulier ($f\'(t_0) = \\vec{0}$). Soit $p$ le plus petit entier $\\ge 1$ tel que $f^{(p)}(t_0) \\neq \\vec{0}$, et $q$ le plus petit entier $> p$ tel que $(f^{(p)}(t_0), f^{(q)}(t_0))$ soit libre. Alors :\n- $p$ impair, $q$ pair : point ordinaire (allure régulière avec tangente portée par $f^{(p)}(t_0)$)\n- $p$ impair, $q$ impair : point d\'inflexion (la courbe traverse sa tangente)\n- $p$ pair, $q$ impair : rebroussement de 1ère espèce (forme de pointe standard)\n- $p$ pair, $q$ pair : rebroussement de 2ème espèce (les deux branches restent du même côté de la tangente)',
        demonstration: 'D\'après la formule de Taylor-Young, dans le repère $(M(t_0), f^{(p)}(t_0), f^{(q)}(t_0))$, les coordonnées locales $(X, Y)$ s\'écrivent $X(u) \\sim \\frac{u^p}{p!}$ et $Y(u) \\sim \\frac{u^q}{q!}$. Le signe de $u^p$ et $u^q$ selon le signe de $u = t - t_0$ dicte la position par rapport à la tangente.',
        astuceConcours: 'Pour trouver $p$ et $q$, faire un DL direct des coordonnées $x(t)$ et $y(t)$ au voisinage de $t_0$ plutôt que de calculer laborieusement les dérivées successives.'
      },
      {
        name: 'Formules de Frenet & Rayon de courbure',
        statement: 'Pour un arc paramétré par abscisse curviligne $s$, avec tangente unitaire $\\vec{T} = \\frac{\\mathrm{d}M}{\\mathrm{d}s}$ et normale unitaire $\\vec{N}$ telle que $(\\vec{T}, \\vec{N})$ est orthonormé direct :\n$$\\frac{\\mathrm{d}\\vec{T}}{\\mathrm{d}s} = c \\vec{N} = \\frac{1}{R} \\vec{N} \\quad \\text{et} \\quad \\frac{\\mathrm{d}\\vec{N}}{\\mathrm{d}s} = -c \\vec{T} = -\\frac{1}{R} \\vec{T}$$\nPour un paramétrage quelconque $t$, la courbure algébrique vaut :\n$$c(t) = \\frac{x\'(t)y\'\'(t) - y\'(t)x\'\'(t)}{\\big(x\'(t)^2 + y\'(t)^2\\big)^{3/2}}$$',
        astuceConcours: 'Le centre de courbure est donné par $C(t) = M(t) + R(t) \\vec{N}(t)$. L\'ensemble des centres de courbure forme la développée de la courbe.'
      }
    ],
    sections: [
      {
        title: '1. Plan d\'étude systématique d\'une courbe paramétrée',
        content: '1. Ensemble de définition $D$, périodicité $T$, parités et symétries (réduire le domaine d\'étude $D_E$). 2. Dérivées $x\'(t), y\'(t)$ et tableau de variations conjointes. 3. Étude des points singuliers ($x\'=y\'=0$) par DL. 4. Branches infinies : calculer $\\lim y(t)/x(t) = a$ puis $\\lim (y(t) - ax(t)) = b$. 5. Tracé précis avec tangentes remarquables.',
        methodKicker: 'Toujours placer les tangentes horizontales ($y\'=0, x\'\\neq 0$) et verticales ($x\'=0, y\'\\neq 0$) avant de poser le tracé.'
      }
    ],
    piegesClassiques: [
      'Oublier de vérifier si une branche infinie admet une asymptote oblique ou une branche parabolique.',
      'Croire que $f\'(t_0) = \\vec{0}$ implique que la courbe s\'arrête ou a un angle droit (la tangente existe toujours et est dirigée par la première dérivée non nulle).'
    ]
  },
  {
    id: 'maths-arithmetique-structures',
    slug: 'arithmetique-dans-z-groupes-anneaux-corps',
    title: 'Arithmétique dans $\\mathbb{Z}$ & Structures Algébriques',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'MP', 'MPI'],
    annee: '1ère & 2ème année',
    description: 'Divisibilité, algorithme d\'Euclide étendu, théorème de Bézout, théorème de Gauss, nombres premiers, congruences, groupe quotient $\\mathbb{Z}/n\\mathbb{Z}$, petit théorème de Fermat et cryptographie RSA.',
    readTime: '28 min',
    prerequis: ['Relations d\'équivalence', 'Structures de groupes et morphismes', 'Raisonnement par récurrence'],
    keyTheorems: [
      {
        name: 'Théorème de Bézout & Identité des coefficients',
        statement: 'Deux entiers $a, b \\in \\mathbb{Z}$ sont premiers entre eux ($a \\wedge b = 1$) si et seulement s\'il existe $(u, v) \\in \\mathbb{Z}^2$ tel que :\n$$a u + b v = 1$$',
        demonstration: 'L\'ensemble $I = a\\mathbb{Z} + b\\mathbb{Z}$ est un sous-groupe (idéal) de $\\mathbb{Z}$. Comme tout sous-groupe de $\\mathbb{Z}$ est de la forme $d\\mathbb{Z}$, $d = a \\wedge b$. Si $d=1$, $1 \\in I$, d\'où l\'existence de $(u, v)$. Réciproquement, tout diviseur commun à $a$ et $b$ divise $au+bv=1$.',
        astuceConcours: 'Pour trouver explicitement $u$ et $v$, remonter l\'algorithme d\'Euclide par division euclidienne matricielle.'
      },
      {
        name: 'Structure du groupe des inversibles $(\\mathbb{Z}/n\\mathbb{Z})^\\times$',
        statement: 'La classe $\\bar{a} \\in \\mathbb{Z}/n\\mathbb{Z}$ est inversible pour la multiplication si et seulement si $a \\wedge n = 1$. L\'ordre de ce groupe est l\'indicatrice d\'Euler $\\varphi(n)$. En particulier, pour $p$ premier, $\\mathbb{Z}/p\\mathbb{Z}$ est un corps commutatif (noté $\\mathbb{F}_p$).\nPetit théorème de Fermat : pour tout $a$ non divisible par $p$, $a^{p-1} \\equiv 1 \\pmod p$.',
        astuceConcours: 'Formule d\'Euler : $n = \\prod p_i^{\\alpha_i} \\implies \\varphi(n) = n \\prod (1 - 1/p_i)$. Découle du théorème des restes chinois.'
      }
    ],
    sections: [
      {
        title: '1. Lemme de Gauss et décomposition en facteurs premiers',
        content: 'Si $a \\mid bc$ et $a \\wedge b = 1$, alors $a \\mid c$. Théorème fondamental de l\'arithmétique : tout entier $n \\ge 2$ s\'écrit de manière unique à l\'ordre près des facteurs comme produit de nombres premiers $n = \\prod_{p \\in \\mathcal{P}} p^{v_p(n)}$.',
        methodKicker: 'Pour résoudre une équation diophantienne $ax + by = c$, il y a des solutions $\\iff a \\wedge b \\mid c$.'
      }
    ],
    piegesClassiques: [
      'Affirmer que $a \\mid c$ et $b \\mid c \\implies ab \\mid c$ sans supposer $a \\wedge b = 1$ (ex : $4 \\mid 12$ et $6 \\mid 12$, mais $24 \\nmid 12$).',
      'Diviser une congruence par un facteur commun sans diviser le module par le PGCD : $ka \\equiv kb \\pmod n \\iff a \\equiv b \\pmod{n / (k \\wedge n)}$.'
    ]
  },
  {
    id: 'physique-ondes-conducteurs-peau',
    slug: 'ondes-electromagnetiques-conducteurs-effet-de-peau',
    title: 'Ondes Électromagnétiques dans les Conducteurs & Effet de Peau',
    matiere: 'Physique',
    filieres: ['PC', 'MP', 'PSI'],
    annee: '2ème année',
    description: 'Loi d\'Ohm locale $\\vec{j} = \\gamma \\vec{E}$, approximation des régimes quasi-stationnaires (ARQS), équation de diffusion des champs, épaisseur de peau $\\delta$, réflexion et absorption d\'énergie.',
    readTime: '30 min',
    prerequis: ['Équations de Maxwell dans le vide', 'Ondes planes progressives harmoniques', 'Formules vectorielles de dérivation'],
    keyTheorems: [
      {
        name: 'Équation des télégraphistes & Épaisseur de peau $\\delta$',
        statement: 'Dans un bon conducteur ohmique (conductivité $\\gamma \\gg \\varepsilon_0 \\omega$), l\'équation de Maxwell-Ampère se simplifie en $\\vec{\\mathrm{rot}}\\,\\vec{B} \\approx \\mu_0 \\gamma \\vec{E}$ (courant de déplacement négligeable). Le champ électrique vérifie l\'équation de diffusion :\n$$\\Delta \\vec{E} - \\mu_0 \\gamma \\frac{\\partial \\vec{E}}{\\partial t} = \\vec{0}$$\nPour une onde sinusoïdale de pulsation $\\omega$, le nombre d\'onde complexe est $\\underline{k}^2 = -j \\mu_0 \\gamma \\omega$, d\'où $\\underline{k} = \\frac{1 - j}{\\delta}$ avec l\'épaisseur de peau :\n$$\\delta = \\sqrt{\\frac{2}{\\mu_0 \\gamma \\omega}}$$',
        demonstration: 'On cherche $\\vec{E}(z, t) = E_0 e^{j(\\omega t - \\underline{k} z)} \\vec{u}_x$. L\'équation de diffusion donne $-\\underline{k}^2 - j \\mu_0 \\gamma \\omega = 0$. Comme $\\sqrt{-j} = \\frac{1-j}{\\sqrt{2}}$, $\\underline{k} = (1-j)\\sqrt{\\frac{\\mu_0 \\gamma \\omega}{2}}$. Le terme d\'atténuation spatiale est donc $e^{-z/\\delta}$.',
        astuceConcours: 'Pour le cuivre à $50\\,\\mathrm{Hz}$, $\\delta \\approx 9\\,\\mathrm{mm}$. À $1\\,\\mathrm{GHz}$, $\\delta \\approx 2\\,\\mu\\mathrm{m}$. Les courants haute fréquence ne circulent que dans une fine pellicule superficielle !'
      },
      {
        name: 'Résistance superficielle & Puissance dissipée par effet Joule',
        statement: 'La puissance moyenne dissipée par effet Joule par unité de surface de conducteur vaut :\n$$\\frac{\\mathcal{P}_J}{S} = \\frac{1}{2} R_s |\\underline{j}_s|^2 = \\frac{1}{2} \\sqrt{\\frac{\\mu_0 \\omega}{2\\gamma}} \\,|\\vec{H}_{tang}|^2$$\noù $R_s = \\frac{1}{\\gamma \\delta}$ est la résistance superficielle (en $\\Omega$).',
        astuceConcours: 'C\'est la base du calcul des pertes dans les câbles coaxiaux, les guides d\'ondes creux et les cavités résonnantes.'
      }
    ],
    sections: [
      {
        title: '1. Domaine de validité du modèle du conducteur ohmique',
        content: 'Le modèle de Drude donne la conductivité $\\underline{\\gamma}(\\omega) = \\frac{\\gamma_0}{1 + j\\omega \\tau}$. Le temps de collision moyen des électrons dans un métal est $\\tau \\sim 10^{-14}\\,\\mathrm{s}$. Jusqu\'au domaine infrarouge ($\\omega \\tau \\ll 1$), la conductivité reste réelle et constante $\\gamma \\approx \\gamma_0$.',
        methodKicker: 'Toujours vérifier le critère du conducteur ohmique : $\\frac{\\varepsilon_0 \\omega}{\\gamma} \\ll 1$.'
      }
    ],
    piegesClassiques: [
      'Garder le courant de déplacement $\\varepsilon_0 \\partial \\vec{E}/\\partial t$ dans un métal aux fréquences radio (il est inférieur aux courants ohmiques d\'un facteur $10^8$).',
      'Confondre épaisseur de peau $\\delta$ et longueur d\'onde $\\lambda = 2\\pi \\delta$. L\'onde s\'atténue sur une distance très inférieure à sa pseudo-longueur d\'onde.'
    ]
  },
  {
    id: 'physique-thermo-ouverts-ecoulements',
    slug: 'thermodynamique-systemes-ouverts-ecoulements-stationnaires',
    title: 'Thermodynamique Industrielle : Systèmes Ouverts & Écoulements',
    matiere: 'Physique',
    filieres: ['PC', 'PSI', 'MP', 'PCSI'],
    annee: '1ère & 2ème année',
    description: 'Premier principe industriel en système ouvert (enthalpie totale $h^*$), travail transvasé $w_u$, tuyère, compresseur, turbine, second principe et création d\'entropie en écoulement stationnaire.',
    readTime: '25 min',
    prerequis: ['Premier et second principes en système fermé', 'Fonction enthalpie $H = U + PV$', 'Équation d\'état des gaz parfaits'],
    keyTheorems: [
      {
        name: 'Premier principe pour un écoulement stationnaire monofluide',
        statement: 'Pour un système ouvert traversé par un débit massique constant $D_m$ entre une section d\'entrée 1 et une section de sortie 2 :\n$$\\Delta h^* = \\left( h_2 + \\frac{1}{2} c_2^2 + g z_2 \\right) - \\left( h_1 + \\frac{1}{2} c_1^2 + g z_1 \\right) = w_u + q$$\noù $w_u$ est le travail utile échangé avec les parois mobiles par unité de masse de fluide, et $q$ le transfert thermique massique.',
        demonstration: 'On isole pendant $\\mathrm{d}t$ le système fermé déformable constitué du fluide présent dans la machine à $t$ plus la masse entrante $\\mathrm{d}m = D_m \\mathrm{d}t$. Le travail des forces de pression sur les frontières amont et aval vaut $\\delta W_{transvasement} = P_1 v_1 \\mathrm{d}m - P_2 v_2 \\mathrm{d}m$. En regroupant avec l\'énergie interne $u$, l\'enthalpie $h = u + Pv$ apparaît naturellement.',
        astuceConcours: 'Dans une tuyère ou un diffuseur : pas de pièce mobile ($w_u = 0$) et adiabaticité ($q = 0$), d\'où conservation de l\'enthalpie totale : $h_1 + c_1^2/2 = h_2 + c_2^2/2$.'
      },
      {
        name: 'Second principe pour un écoulement stationnaire',
        statement: 'Le bilan d\'entropie massique s\'écrit :\n$$s_2 - s_1 = \\frac{q}{T_p} + s_c \\quad \\text{avec } s_c \\ge 0$$\noù $T_p$ est la température de surface de la paroi d\'échange et $s_c$ l\'entropie créée par frottements visqueux ou détentes irréversibles.',
        astuceConcours: 'Rendement isentropique d\'une turbine : $\\eta_{is, turb} = \\frac{w_{u, reel}}{w_{u, is}} = \\frac{h_1 - h_2}{h_1 - h_{2, is}} \\le 1$. Pour un compresseur : $\\eta_{is, comp} = \\frac{w_{u, is}}{w_{u, reel}} = \\frac{h_{2, is} - h_1}{h_2 - h_1} \\le 1$.'
      }
    ],
    sections: [
      {
        title: '1. Les 4 organes fondamentaux des machines thermiques',
        content: '1. Tuyère / Diffuseur : échange d\'énergie cinétique et enthalpie ($w_u=0, q=0$). 2. Compresseur / Pompe : fluide reçoit du travail mécanique ($w_u > 0$). 3. Turbine : fluide fournit du travail mécanique ($w_u < 0$). 4. Échangeur thermique / Générateur de vapeur : pas de pièce mobile ($w_u = 0, q = \\Delta h$).',
        methodKicker: 'Toujours négliger l\'énergie cinétique et potentielle $c^2/2$ et $gz$ devant l\'enthalpie $h$ sauf pour les tuyères !'
      }
    ],
    piegesClassiques: [
      'Confondre le travail utile $w_u$ (arbres de turbines, pistons) et le travail total $w$ incluant les travaux de transvasement $P\\mathrm{d}V$.',
      'Écrire $\\Delta u = w_u + q$ pour un système ouvert (c\'est l\'enthalpie $h$ qui intervient impérativement pour tenir compte des forces de refoulement).'
    ]
  },
  {
    id: 'chimie-cristallographie-solides',
    slug: 'cristallographie-geometrique-empilements-compacts',
    title: 'Cristallographie Géométrique & Empilements Compacts',
    matiere: 'Chimie',
    filieres: ['PCSI', 'PC', 'BCPST', 'PSI'],
    annee: '1ère & 2ème année',
    description: 'Réseaux de Bravais, maille cubique centrée (CC), cubique à faces centrées (CFC), empilement hexagonal compact (HC), compacité $C$, masse volumique $\\rho$, sites interstitiels tétraédriques et octaédriques.',
    readTime: '24 min',
    prerequis: ['Géométrie dans l\'espace', 'Notion de mole et constante d\'Avogadro $\\mathcal{N}_A$', 'Liaisons métalliques et ioniques'],
    keyTheorems: [
      {
        name: 'Propriétés structurales de la maille Cubique à Faces Centrées (CFC)',
        statement: '- Nombre de motifs par maille : $Z = 8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2} = 4$.\n- Condition de tangence des sphères : le long de la diagonale d\'une face de cube : $4 R = a \\sqrt{2} \\implies a = 2\\sqrt{2} R$.\n- Compacité maximale : $C = \\frac{Z \\times \\frac{4}{3}\\pi R^3}{a^3} = \\frac{\\pi \\sqrt{2}}{6} \\approx 0{,}74$ (74%).\n- Coordinence : Chaque atome est au contact direct de 12 voisins.\n- Sites interstitiels : 4 sites octaédriques (au centre du cube et aux milieux des 12 arêtes, habitabilité $r_O = (\\sqrt{2}-1)R \\approx 0{,}414 R$) et 8 sites tétraédriques (au centre des 8 mini-cubes, habitabilité $r_T = (\\sqrt{3/2}-1)R \\approx 0{,}225 R$).',
        demonstration: 'Les atomes des sommets et des centres des faces se touchent sur la diagonale de face de longueur $a\\sqrt{2} = 2R + 2R = 4R$. Le volume de la maille est $V = a^3 = (4R/\\sqrt{2})^3 = 16\\sqrt{2} R^3$. Le volume occupé par les 4 sphères d\'atomes est $4 \\times \\frac{4}{3}\\pi R^3 = \\frac{16\\pi}{3} R^3$. Le quotient donne $C = \\frac{\\pi}{3\\sqrt{2}} = \\frac{\\pi \\sqrt{2}}{6} \\approx 0{,}7405$.',
        astuceConcours: 'Masse volumique : $\\rho = \\frac{Z \\cdot M}{\\mathcal{N}_A \\cdot a^3}$. Attention aux unités ! Convertir $a$ en $\\mathrm{cm}$ pour obtenir $\\rho$ en $\\mathrm{g\\cdot cm^{-3}}$.'
      }
    ],
    sections: [
      {
        title: '1. Structures ioniques de type $NaCl$ et $CsCl$',
        content: 'Dans la structure $NaCl$ (halite) : les anions $Cl^-$ forment un sous-réseau CFC, et les cations $Na^+$ occupent tous les sites octaédriques. Stœchiométrie 1:1, coordinence (6, 6). Dans la structure $CsCl$ : les $Cl^-$ forment un réseau cubique simple et $Cs^+$ occupe le centre du cube, coordinence (8, 8).',
        methodKicker: 'Pour qu\'un ion s\'insère sans déformer la maille : $r_{cation} \\le r_{site}$.'
      }
    ],
    piegesClassiques: [
      'Compter les atomes d\'arêtes pour $1/2$ au lieu de $1/4$ (une arête est partagée par 4 mailles cubiques adjacentes).',
      'Confondre la condition de contact dans le cubique centré ($4R = a\\sqrt{3}$, sur la grande diagonale du cube) et dans le CFC ($4R = a\\sqrt{2}$, sur la diagonale de face).'
    ]
  },
  {
    id: 'maths-integrales-multiples-stokes',
    slug: 'integrales-multiples-green-riemann-stokes-divergence',
    title: 'Intégrales Multiples, Green-Riemann & Formules de Stokes',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    description: 'Intégrales doubles et triples, changement de variables (polaires, cylindriques, sphériques, jacobien), théorème de Fubini, formule de Green-Riemann, formule de Stokes-Ampère et formule d\'Ostrogradski (flux-divergence).',
    readTime: '26 min',
    prerequis: ['Calcul différentiel à plusieurs variables', 'Déterminant et jacobien', 'Courbes paramétrées et formes différentielles'],
    keyTheorems: [
      {
        name: 'Formule de Green-Riemann',
        statement: 'Soit $D$ un domaine régulier du plan délimité par un contour fermé $\\partial D$ orienté dans le sens trigonométrique direct. Pour une forme différentielle $\\omega = P(x, y)\\,\\mathrm{d}x + Q(x, y)\\,\\mathrm{d}y$ de classe $\\mathcal{C}^1$ sur un ouvert contenant $\\bar{D}$ :\n$$\\oint_{\\partial D} (P\\,\\mathrm{d}x + Q\\,\\mathrm{d}y) = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) \\mathrm{d}x\\mathrm{d}y$$',
        demonstration: 'On prouve la formule d\'abord sur un rectangle ou un domaine simple en $x$ et $y$ par le théorème fondamental de l\'analyse le long de chaque tranche, puis on généralise par recollement.',
        astuceConcours: 'Pour calculer l\'aire d\'un domaine $D$, choisir $P = -y/2$ et $Q = x/2$ ou $P = 0, Q = x$ de sorte que $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 1$. L\'aire s\'obtient par une simple intégrale circulée !'
      },
      {
        name: 'Théorème de Green-Ostrogradski (Flux-Divergence)',
        statement: 'Soit $V$ un volume fermé borné de l\'espace bordé par une surface fermée $\\Sigma = \\partial V$ orientée vers l\'extérieur par la normale unitaire $\\vec{n}$. Pour tout champ vectoriel $\\vec{A}$ de classe $\\mathcal{C}^1$ :\n$$\\oiint_{\\Sigma} \\vec{A} \\cdot \\vec{n}\\,\\mathrm{d}S = \\iiint_V \\mathrm{div}\\,\\vec{A}\\,\\mathrm{d}V$$',
        astuceConcours: 'Fondement mathématique direct du Théorème de Gauss en électrostatique et en gravitation.'
      }
    ],
    sections: [
      {
        title: '1. Changement de variables et Jacobien',
        content: 'Pour un difféomorphisme $\\Phi : (u, v) \\mapsto (x, y)$, l\'élément d\'aire se transforme selon $\\mathrm{d}x\\mathrm{d}y = |\\det J_\\Phi(u, v)|\\,\\mathrm{d}u\\mathrm{d}v$. En coordonnées polaires : $x = r\\cos\\theta, y = r\\sin\\theta \\implies \\mathrm{d}x\\mathrm{d}y = r\\,\\mathrm{d}r\\mathrm{d}\\theta$. En coordonnées sphériques : $\\mathrm{d}x\\mathrm{d}y\\mathrm{d}z = r^2 \\sin\\theta\\,\\mathrm{d}r\\mathrm{d}\\theta\\mathrm{d}\\varphi$.',
        methodKicker: 'Ne jamais oublier le facteur d\'échelle $r$ en coordonnées polaires et $r^2 \\sin\\theta$ en coordonnées sphériques !'
      }
    ],
    piegesClassiques: [
      'Oublier d\'orienter le contour dans le sens direct (sens anti-horaire) : si le parcours est inversé, un signe moins apparaît.',
      'Confondre intégrale de surface fermée $\\oiint$ et intégrale sur une calotte ouverte.'
    ]
  },
  {
    id: 'maths-prehilbertiens-gram-schmidt',
    slug: 'espaces-prehilbertiens-projection-gram-schmidt',
    title: 'Espaces Préhilbertiens Réels & Procédé de Gram-Schmidt',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère & 2ème année',
    description: 'Produit scalaire, inégalité de Cauchy-Schwarz, orthogonalité, théorème de projection orthogonale sur un sous-espace de dimension finie, procédé d\'orthonormalisation de Gram-Schmidt et polynômes orthogonaux.',
    readTime: '28 min',
    prerequis: ['Espaces vectoriels', 'Formes bilinéaires symétriques définies positives', 'Bases et dimension'],
    keyTheorems: [
      {
        name: 'Inégalité de Cauchy-Schwarz & Cas d\'égalité',
        statement: 'Pour tous vecteurs $x, y \\in E$ d\'un espace préhilbertien réel :\n$$|\\langle x, y \\rangle| \\le \\|x\\| \\cdot \\|y\\|$$\nL\'égalité a lieu si et seulement si la famille $(x, y)$ est liée.',
        demonstration: 'On étudie le trinôme $P(t) = \\|x + t y\\|^2 = \\|y\\|^2 t^2 + 2\\langle x, y \\rangle t + \\|x\\|^2 \\ge 0$ pour tout $t \\in \\mathbb{R}$. Son discriminant réduit $\\Delta\' = \\langle x, y \\rangle^2 - \\|x\\|^2 \\|y\\|^2$ est nécessairement $\\le 0$.',
        astuceConcours: 'Réflexe : Dès qu\'une question demande de majorer une intégrale d\'un produit $\\int f(t)g(t)\\,\\mathrm{d}t$, penser immédiatement à Cauchy-Schwarz avec le produit scalaire $L^2$.'
      },
      {
        name: 'Théorème de projection orthogonale & Meilleure approximation',
        statement: 'Soit $F$ un sous-espace vectoriel de dimension finie d\'un espace préhilbertien $E$. Pour tout $x \\in E$, il existe un unique $y_0 = p_F(x) \\in F$ tel que $x - y_0 \\in F^\\perp$. De plus, $y_0$ réalise la distance minimale de $x$ à $F$ :\n$$\\|x - p_F(x)\\| = d(x, F) = \\inf_{y \\in F} \\|x - y\\|$$\nSi $(e_1, \\dots, e_p)$ est une base orthonormée de $F$, alors $p_F(x) = \\sum_{i=1}^p \\langle x, e_i \\rangle e_i$.',
        astuceConcours: 'Si la base n\'est pas orthonormée, orthonormaliser d\'abord par Gram-Schmidt ou utiliser la matrice de Gram !'
      }
    ],
    sections: [
      {
        title: '1. Algorithme d\'orthonormalisation de Gram-Schmidt',
        content: 'À partir d\'une base libre $(u_1, \\dots, u_p)$, on pose $v_1 = u_1$, $e_1 = v_1/\\|v_1\\|$, puis pour $k \\ge 2$ :\n$$v_k = u_k - \\sum_{i=1}^{k-1} \\langle u_k, e_i \\rangle e_i \\quad \\text{et} \\quad e_k = \\frac{v_k}{\\|v_k\\|}$$\nLa famille $(e_1, \\dots, e_p)$ est orthonormée et pour tout $k$, $\\mathrm{Vect}(e_1, \\dots, e_k) = \\mathrm{Vect}(u_1, \\dots, u_k)$.',
        methodKicker: 'Vérifier toujours que $\\langle e_2, e_1 \\rangle = 0$ dès le deuxième vecteur calculé.'
      }
    ],
    piegesClassiques: [
      'Appliquer la formule de la projection sans avoir normalisé les vecteurs de la base orthogonale (il manque alors le diviseur $\\|v_i\\|^2$).',
      'Confondre la projection orthogonale avec une projection quelconque (une projection est orthogonale si et seulement si son noyau est orthogonal à son image).'
    ]
  },
  {
    id: 'physique-optique-geometrique-instruments',
    slug: 'optique-geometrique-lentilles-instruments-optique',
    title: 'Optique Géométrique & Instruments d\'Optique Centrés',
    matiere: 'Physique',
    filieres: ['MPSI', 'PCSI', 'BCPST'],
    annee: '1ère année',
    description: 'Lois de Snell-Descartes, conditions de Gauss, stigmatisme approché, lentilles minces convergentes et divergentes, formules de Descartes et Newton, systèmes afocaux, lunette astronomique et cercle oculaire.',
    readTime: '24 min',
    prerequis: ['Trigonométrie', 'Mesures algébriques sur un axe', 'Vecteurs directeurs des rayons lumineux'],
    keyTheorems: [
      {
        name: 'Formules de conjugaison de Descartes et Newton',
        statement: '- Descartes avec origine au centre optique $O$ :\n$$\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f\'} = V \\quad \\text{et} \\quad \\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = \\frac{\\overline{OA\'}}{\\overline{OA}}$$\n- Newton avec origines aux foyers $F$ et $F\'$ :\n$$\\overline{FA} \\cdot \\overline{F\'A\'} = -f\'^2 \\quad \\text{et} \\quad \\gamma = -\\frac{f\'}{\\overline{FA}} = -\\frac{\\overline{F\'A\'}}{f\'}$$',
        demonstration: 'Découle de la similitude des triangles formés par les rayons passant par le centre optique $O$ et par les foyers $F, F\'$.',
        astuceConcours: 'Pour une lentille convergente ($f\' > 0$), la distance minimale entre un objet réel et son image réelle est $D_{min} = 4f\'$ (méthode de Silberman pour mesurer la focale).'
      },
      {
        name: 'Système afocal & Lunette astronomique de Kepler',
        statement: 'Une lunette astronomique est constituée d\'un objectif convergent $L_1$ ($f\'_1 > 0$) et d\'un oculaire convergent $L_2$ ($f\'_2 > 0$). Le système est afocal lorsque le foyer image de l\'objectif est confondu avec le foyer objet de l\'oculaire : $F\'_1 = F_2$. Le grandissement angulaire est :\n$$G = \\frac{\\theta\'}{\\theta} = -\\frac{f\'_1}{f\'_2}$$\nLe cercle oculaire est l\'image de l\'objectif par l\'oculaire : c\'est le lieu où toute l\'énergie lumineuse se concentre et où l\'observateur doit placer son œil.',
        astuceConcours: 'Position du cercle oculaire : $\\overline{O_2 C\'} = f\'_2 \\left(1 + \\frac{f\'_2}{f\'_1}\\right)$. Son diamètre est $D\' = D / |G|$.'
      }
    ],
    sections: [
      {
        title: '1. Conditions de Gauss et stigmatisme',
        content: 'Les conditions de Gauss imposent : rayons peu inclinés sur l\'axe optique (paraxiaux) et rencontrant les dioptres près de leur sommet. Sous ces conditions, le stigmatisme et l\'aplanétisme sont rigoureusement vérifiés au premier ordre en angle ($\\sin\\theta \\approx \\tan\\theta \\approx \\theta$).',
        methodKicker: 'Toujours tracer le rayon passant par $O$ sans déviation pour positionner la hauteur de l\'image.'
      }
    ],
    piegesClassiques: [
      'Confondre grandeur algébrique $\\overline{OA}$ (négative pour un objet réel en amont) et distance géométrique $OA > 0$.',
      'Placer l\'œil contre la lentille oculaire au lieu de le positionner au niveau du cercle oculaire.'
    ]
  },
  {
    id: 'physique-meca-quantique-puits',
    slug: 'mecanique-quantique-dualite-onde-puits-potentiel',
    title: 'Mécanique Quantique : Dualité Onde-Corpuscule & Puits de Potentiel',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    description: 'Relations de Planck-Einstein et de De Broglie, fonction d\'onde $\\psi(x, t)$, interprétation probabiliste de Born, équation de Schrödinger stationnaire, puits de potentiel 1D infini et fini, effet tunnel.',
    readTime: '26 min',
    prerequis: ['Équations différentielles linéaires du 2nd ordre', 'Ondes planes et paquet d\'ondes', 'Intégration et densité de probabilité'],
    keyTheorems: [
      {
        name: 'Équation de Schrödinger 1D stationnaire',
        statement: 'Pour une particule de masse $m$ dans un potentiel indépendant du temps $V(x)$, la fonction d\'onde stationnaire $\\psi(x)$ vérifie :\n$$-\\frac{\\hbar^2}{2m} \\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d}x^2}(x) + V(x)\\psi(x) = E \\psi(x)$$\nLa densité volumique de probabilité de présence est $P(x) = |\\psi(x)|^2$ avec la condition de normalisation $\\int_{-\\infty}^{+\\infty} |\\psi(x)|^2\\,\\mathrm{d}x = 1$.',
        demonstration: 'Découle de l\'association de l\'opérateur énergie $\\hat{E} = j\\hbar \\frac{\\partial}{\\partial t}$ et de l\'opérateur quantité de mouvement $\\hat{p} = -j\\hbar \\frac{\\partial}{\\partial x}$ à la relation classique non-relativiste $E = \\frac{p^2}{2m} + V(x)$.',
        astuceConcours: 'Dans un puits infini de largeur $L$ : $E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2m L^2}$. L\'énergie fondamentale $E_1 > 0$ n\'est jamais nulle (énergie de point zéro imposée par le principe d\'indétermination $\\Delta x \\Delta p \\ge \\hbar/2$).'
      },
      {
        name: 'Effet tunnel à travers une barrière de potentiel rectangulaire',
        statement: 'Pour une particule d\'énergie $E$ incidente sur une barrière de hauteur $V_0 > E$ et d\'épaisseur $a$, la probabilité de transmission n\'est pas nulle :\n$$T \\approx 16 \\frac{E}{V_0}\\left(1 - \\frac{E}{V_0}\\right) e^{-2 K a} \\quad \\text{avec } K = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$$',
        astuceConcours: 'Principe physique du microscope à effet tunnel (STM), de la désintégration alpha de Gamow et des diodes tunnel.'
      }
    ],
    sections: [
      {
        title: '1. Conditions de continuité de la fonction d\'onde',
        content: 'En tout point où le potentiel $V(x)$ présente une discontinuité finie, $\\psi(x)$ et sa dérivée spatiale $\\psi\'(x)$ sont continues. Si $V(x)$ subit un saut infini (paroi infranchissable), seule $\\psi(x)$ est continue et s\'y annule obligatoirement.',
        methodKicker: 'Les états liés correspondent aux énergies discrètes $E < V_\\infty$ où la fonction d\'onde est de carré sommable.'
      }
    ],
    piegesClassiques: [
      'Penser qu\'une fonction d\'onde complexe $\\psi(x)$ est mesurable directement (seule la densité de probabilité $|\\psi|^2$ est accessible à la mesure).',
      'Confondre la vitesse de phase $v_\\varphi = E/p$ et la vitesse de groupe du paquet d\'ondes $v_g = \\mathrm{d}E/\\mathrm{d}p = v_{particule}$.'
    ]
  },
  {
    id: 'chimie-cinetique-catalyse-aeqs',
    slug: 'cinetique-chimique-heterogene-catalyse-langmuir',
    title: 'Cinétique Chimique Hétérogène, Catalyse & Modèle de Langmuir',
    matiere: 'Chimie',
    filieres: ['PCSI', 'PC', 'BCPST'],
    annee: '1ère & 2ème année',
    description: 'Catalyse homogène, hétérogène et enzymatique, chimisorption vs physisorption, isotherme d\'adsorption de Langmuir, cinétique hétérogène de Langmuir-Hinshelwood, et mécanismes en chaîne.',
    readTime: '24 min',
    prerequis: ['Cinétique formelle (ordre de réaction, loi d\'Arrhenius)', 'Équilibres chimiques', 'Approximation de l\'état quasi-stationnaire AEQS'],
    keyTheorems: [
      {
        name: 'Isotherme d\'adsorption de Langmuir',
        statement: 'Pour un gaz en équilibre d\'adsorption sur une surface solide présentant des sites identiques et indépendants :\n$$\\theta = \\frac{K P}{1 + K P}$$\noù $\\theta$ est le taux de recouvrement des sites ($0 \\le \\theta \\le 1$) et $K = k_{ads}/k_{des}$ la constante d\'adsorption thermodynamique.',
        demonstration: 'À l\'équilibre dynamique, la vitesse d\'adsorption $v_{ads} = k_{ads} P (1 - \\theta)$ égale la vitesse de désorption $v_{des} = k_{des} \\theta$. L\'égalité donne immédiatement $\\theta (k_{des} + k_{ads} P) = k_{ads} P$, d\'où le résultat.',
        astuceConcours: '- À basse pression ($K P \\ll 1$) : $\\theta \\approx K P$ (loi linéaire de Henry).\n- À haute pression ($K P \\gg 1$) : $\\theta \\to 1$ (saturation complète de la monocouche superficielle, ordre 0 apparent).'
      }
    ],
    sections: [
      {
        title: '1. Rôle d\'un catalyseur sur le profil réactionnel',
        content: 'Un catalyseur accélère une réaction sans modifier l\'état d\'équilibre thermodynamique ni l\'affinité chimique $\\Delta_r G^\\circ$. Il abaisse l\'énergie d\'activation $E_a$ en proposant un nouveau chemin réactionnel constitué d\'étapes élémentaires plus rapides.',
        methodKicker: 'Toujours mentionner qu\'un catalyseur augmente la vitesse dans les deux sens direct et inverse du même facteur.'
      }
    ],
    piegesClassiques: [
      'Affirmer qu\'un catalyseur augmente le rendement thermodynamique maximal d\'une réaction équilibrée (il accélère seulement l\'atteinte de l\'équilibre).',
      'Confondre la chimisorption (liaison chimique forte, irréversible, monocouche, exothermique) et la physisorption (forces de Van der Waals faibles, réversible, multicouches possibles).'
    ]
  },
  {
    id: 'si-statique-adherence-coulomb',
    slug: 'statique-solide-frottement-adherence-coulomb',
    title: 'Statique du Solide Indéformable, Frottement & Adhérence',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['MPSI', 'PCSI', 'PSI', 'MP'],
    annee: '1ère & 2ème année',
    description: 'Principe Fondamental de la Statique (PFS), modélisation des contacts frottants, lois de Coulomb, cône d\'adhérence et de frottement, résistance au glissement, arc-boutement et coincement.',
    readTime: '25 min',
    prerequis: ['Torseurs d\'action mécanique', 'Produit vectoriel et moment d\'une force', 'Cinématique du contact (vitesse de glissement)'],
    keyTheorems: [
      {
        name: 'Lois de frottement sec de Coulomb',
        statement: 'Soit $\\vec{R} = \\vec{N} + \\vec{T}$ l\'action mécanique de contact entre deux solides ($\\vec{N}$ normale de compression, $\\vec{T}$ force tangentielle dans le plan de contact) :\n1. Régime d\'adhérence (statique, $\\vec{V}_g = \\vec{0}$) :\n$$\\|\\vec{T}\\| \\le f_0 \\|\\vec{N}\\|$$\n2. Régime de glissement dynamique ($\\vec{V}_g \\neq \\vec{0}$) :\n$$\\|\\vec{T}\\| = f \\|\\vec{N}\\| \\quad \\text{avec } \\vec{T} = -f \\|\\vec{N}\\| \\frac{\\vec{V}_g}{\\|\\vec{V}_g\\|}$$\noù $f = \\tan\\varphi$ est le coefficient de frottement et $\\varphi$ le demi-angle au sommet du cône de frottement.',
        demonstration: 'Modèle empirique de Coulomb confirmé expérimentalement : la force tangentielle limite est proportionnelle à l\'effort presseur normal et indépendante de l\'aire de contact macroscopique apparente.',
        astuceConcours: 'Condition d\'arc-boutement : le système reste bloqué quelle que soit l\'intensité de l\'effort moteur si la ligne d\'action de la résultante coupe le plan de guidage à l\'intérieur du cône d\'adhérence.'
      }
    ],
    sections: [
      {
        title: '1. Méthode de résolution d\'un problème de statique avec frottement',
        content: '1. Déterminer la tendance au mouvement pour connaître le sens de $\\vec{V}_g$. 2. Poser l\'hypothèse d\'équilibre strict à la limite de glissement $\\|\\vec{T}\\| = f \\|\\vec{N}\\|$. 3. Écrire le PFS (résultantes et moments). 4. Calculer la force motrice critique.',
        methodKicker: 'En statique graphique : les actions de contact sont tangentes aux cônes de frottement orientés à l\'opposé du glissement virtuel.'
      }
    ],
    piegesClassiques: [
      'Orienter la force de frottement dans le sens de la vitesse de glissement (c\'est une force résistante, elle s\'oppose toujours au mouvement relatif !).',
      'Écrire $\\|\\vec{T}\\| = f \\|\\vec{N}\\|$ en phase d\'adhérence stricte (c\'est une inégalité $\\le$ !).'
    ]
  }
];

