import type { CourseChapter } from './cpgeData';

export const MASSIVE_CPGE_COURSES: CourseChapter[] = [
  // ==========================================
  // MATHEMATIQUES
  // ==========================================
  {
    id: 'maths-convexite-inegalites',
    slug: 'convexite-fonctions-reelles-inegalites',
    title: 'Convexité, Fonctions Réelles & Inégalités Fondamentales',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    description: 'Définition géométrique et analytique de la convexité, inégalité de Jensen, caractérisations par les cordes, dérivée seconde et positions relatives par rapport aux tangentes.',
    readTime: '22 min',
    prerequis: ['Dérivation des fonctions d\'une variable', 'Formules de Taylor', 'Calcul des limites'],
    keyTheorems: [
      {
        name: 'Inégalité de Jensen',
        statement: 'Soit $f : I \\to \\mathbb{R}$ une fonction convexe sur un intervalle $I$. Pour tout $n \\ge 1$, pour tous $x_1, \\dots, x_n \\in I$ et tous poids $(\\lambda_1, \\dots, \\lambda_n) \\in [0, 1]^n$ tels que $\\sum_{i=1}^n \\lambda_i = 1$ :\n$$f\\left(\\sum_{i=1}^n \\lambda_i x_i\\right) \\le \\sum_{i=1}^n \\lambda_i f(x_i)$$',
        demonstration: 'Démontrée par récurrence sur $n$. Le cas $n=2$ correspond à la définition même de la convexité par barycentre. Pour le rang $n+1$, on factorise $\\lambda_1 + \\dots + \\lambda_n = 1 - \\lambda_{n+1}$ et on applique l\'hypothèse de récurrence.',
        astuceConcours: 'Permet de démontrer en deux lignes l\'inégalité arithmético-géométrique ($AM-GM$), l\'inégalité de Hölder et l\'inégalité de Minkowski en choisissant $f(x) = -\\ln x$ ou $f(x) = x^p$.'
      },
      {
        name: 'Caractérisation différentielle de la convexité',
        statement: 'Soit $f$ de classe $\\mathcal{C}^1$ sur un intervalle $I$. $f$ est convexe sur $I$ $\\iff f\'$ est croissante $\\iff$ le graphe de $f$ est situé au-dessus de toutes ses tangentes : $\\forall x, x_0 \\in I, f(x) \\ge f(x_0) + f\'(x_0)(x - x_0)$. Si $f$ est $\\mathcal{C}^2$, $f$ est convexe $\\iff f\'\' \\ge 0$.',
        astuceConcours: 'Pour minorer une fonction compliquée, tracer la tangente en un point judicieux ($x=0$ donne souvent $e^x \\ge 1+x$ et $\\ln(1+x) \\le x$).'
      }
    ],
    sections: [
      {
        title: '1. Inégalité des pentes (Lemme des 3 cordes)',
        content: 'Pour $a < x < b$ dans $I$, la fonction $f$ est convexe si et seulement si la pente de la sécante croît :\n$$\\frac{f(x) - f(a)}{x - a} \\le \\frac{f(b) - f(a)}{b - a} \\le \\frac{f(b) - f(x)}{b - x}$$\nCe lemme montre immédiatement l\'existence de dérivées à droite et à gauche en tout point intérieur pour une fonction convexe.',
        methodKicker: 'L\'inégalité des trois cordes est l\'outil roi quand la fonction n\'est pas supposée dérivable.'
      }
    ],
    piegesClassiques: [
      'Appliquer $f\'\' \\ge 0$ sur une réunion d\'intervalles : la convexité n\'a de sens que sur un INTERVALLE connexe.',
      'Oublier de vérifier la stricte positivité des poids $\\lambda_i$ ou leur somme égale à 1 dans l\'inégalité de Jensen.'
    ]
  },
  {
    id: 'maths-integrales-parametres',
    slug: 'integrales-a-parametres-derivation-leibniz',
    title: 'Intégrales à Paramètres, Continuité & Dérivation sous l\'Intégrale',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Continuité et dérivation d\'intégrales sur un intervalle quelconque, théorème de convergence dominée appliqué aux paramètres continus, règle de Leibniz et transformée de Laplace.',
    readTime: '26 min',
    prerequis: ['Intégration sur un intervalle quelconque', 'Continuité et dérivabilité', 'Convergence dominée'],
    keyTheorems: [
      {
        name: 'Théorème de Dérivation sous le Signe Intégrale (Leibniz)',
        statement: 'Soit $I$ un intervalle de $\\mathbb{R}$, $J$ un intervalle quelconque et $f : I \\times J \\to \\mathbb{C}$ telle que :\n1. Pour tout $x \\in I$, $t \\mapsto f(x, t)$ est intégrable sur $J$.\n2. $\\frac{\\partial f}{\\partial x}$ existe sur $I \\times J$ et pour tout $x \\in I$, $t \\mapsto \\frac{\\partial f}{\\partial x}(x, t)$ est continue par morceaux sur $J$.\n3. Hypothèse de domination sur tout segment : pour tout segment $[a, b] \\subset I$, il existe $\\phi \\in L^1(J, \\mathbb{R}^+)$ telle que :\n$$\\forall x \\in [a, b], \\forall t \\in J, \\quad \\left|\\frac{\\partial f}{\\partial x}(x, t)\\right| \\le \\phi(t)$$\nAlors $F(x) = \\int_J f(x, t)\\,\\mathrm{d}t$ est de classe $\\mathcal{C}^1$ sur $I$ et $F\'(x) = \\int_J \\frac{\\partial f}{\\partial x}(x, t)\\,\\mathrm{d}t$.',
        demonstration: 'Démontrée via la caractérisation séquentielle de la dérivée et le théorème de convergence dominée de Lebesgue sur les taux d\'accroissement $\\Delta_n(t) = \\frac{f(x_n, t) - f(x_0, t)}{x_n - x_0}$. Par l\'inégalité des accroissements finis, $|\Delta_n(t)| \\le \\sup_{u \\in [a, b]} |\\partial_x f(u, t)| \\le \\phi(t)$, ce qui fournit la domination intégrable.',
        astuceConcours: 'Toujours dominer sur tout SEGMENT $[a, b] \\subset I$ plutôt que sur tout $I$ : c\'est le cas classique pour l\'intégrale de Gauss ou la fonction Gamma où la domination globale sur $]0, +\\infty[$ est impossible.'
      }
    ],
    sections: [
      {
        title: '1. Continuité d\'une intégrale dépendant d\'un paramètre',
        content: 'Pour prouver que $F(x) = \\int_J f(x, t)\\,\\mathrm{d}t$ est continue sur $I$, on montre que pour tout $t \\in J$, $x \\mapsto f(x, t)$ est continue sur $I$, et pour tout segment $[a, b] \\subset I$, il existe $\\psi \\in L^1(J)$ telle que $|f(x, t)| \\le \\psi(t)$.',
        methodKicker: 'Réflexe de rédaction : toujours numéroter les 3 hypothèses (continuité en $x$, mesurabilité/continuité en $t$, domination intégrable).'
      }
    ],
    piegesClassiques: [
      'Chercher une fonction dominante qui dépend du paramètre $x$ (la dominante DOIT être une fonction de la seule variable d\'intégration $t$).',
      'Confondre domination sur tout segment avec domination sur l\'ouvert tout entier.'
    ]
  },
  {
    id: 'maths-topologie-compacite-connexite',
    slug: 'topologie-evn-compacite-connexite',
    title: 'Topologie des EVN : Compacité, Connexité par Arcs & Normes Équivalentes',
    matiere: 'Mathématiques',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    description: 'Normes et distances, équivalence des normes en dimension finie, compacité séquentielle (Bolzano-Weierstrass), théorème de Riesz, théorème de Heine, connexes par arcs.',
    readTime: '28 min',
    prerequis: ['Espaces vectoriels', 'Suites dans $\\mathbb{R}^n$', 'Calcul différentiel'],
    keyTheorems: [
      {
        name: 'Théorème d\'Équivalence des Normes en Dimension Finie',
        statement: 'Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension FINIE. Toutes les normes sur $E$ sont équivalentes :\n$$\\forall N_1, N_2, \\quad \\exists \\alpha, \\beta > 0, \\quad \\forall x \\in E, \\quad \\alpha N_1(x) \\le N_2(x) \\le \\beta N_1(x)$$',
        demonstration: 'On fixe une base $(e_1, \\dots, e_n)$ et la norme infinie $\|x\\|_\\infty$. L\'application $N$ est 1-lipschitzienne donc continue pour $\|\\cdot\\|_\\infty$. La sphère unité $S_\\infty$ est fermée et bornée donc compacte dans $\\mathbb{R}^n$. $N$ y atteint son minimum $\\alpha > 0$ et son maximum $\\beta > 0$.',
        astuceConcours: 'En dimension finie, la convergence d\'une suite ou la continuité d\'une fonction ne dépend jamais de la norme choisie ! On peut toujours choisir la norme la plus pratique (généralement $\|\\cdot\\|_\\infty$ ou $\|\\cdot\\|_2$).'
      },
      {
        name: 'Théorème de Riesz (Caractérisation de la dimension finie)',
        statement: 'Soit $E$ un espace vectoriel normé. La boule unité fermée $\\bar{B}(0, 1)$ est compacte si et seulement si $E$ est de dimension finie.',
        astuceConcours: 'Ce théorème prouve immédiatement qu\'un espace de fonctions continues comme $\\mathcal{C}([0, 1], \\mathbb{R})$ muni de la norme uniforme n\'est jamais de dimension finie.'
      }
    ],
    sections: [
      {
        title: '1. Propriétés des compacts & Théorème de Heine',
        content: 'Toute fonction continue d\'un compact $K$ dans un espace métrique est uniformément continue (théorème de Heine) et bornée en atteignant ses bornes (théorème des bornes atteintes).',
        methodKicker: 'Pour prouver l\'existence d\'une solution optimale à un problème d\'optimisation : fonction continue sur un compact non vide.'
      }
    ],
    piegesClassiques: [
      'Penser qu\'un ensemble fermé et borné est compact en dimension infinie (faux d\'après le théorème de Riesz !).',
      'Confondre connexité et connexité par arcs (au programme de CPGE, seule la connexité par arcs est étudiée).'
    ]
  },

  // ==========================================
  // PHYSIQUE
  // ==========================================
  {
    id: 'physique-ondes-guidees-lignes',
    slug: 'ondes-guidees-lignes-transmission-cavites',
    title: 'Ondes Guidées, Lignes de Transmission & Câbles Coaxiaux',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    description: 'Équations des télégraphistes, impédance caractéristique, ondes de tension et courant, coefficients de réflexion, adaptation d\'impédance, guides d\'ondes rectangulaires et fréquence de coupure.',
    readTime: '26 min',
    prerequis: ['Électromagnétisme de Maxwell', 'Équation de d\'Alembert', 'Circuits en régime sinusoïdal forcé'],
    keyTheorems: [
      {
        name: 'Équations des Télégraphistes & Impédance Caractéristique',
        statement: 'Pour une ligne sans perte modélisée par une inductance linéique $\\Lambda$ et une capacité linéique $\\Gamma$ :\n$$\\frac{\\partial u}{\\partial z} = -\\Lambda \\frac{\\partial i}{\\partial t} \\quad \\text{et} \\quad \\frac{\\partial i}{\\partial z} = -\\Gamma \\frac{\\partial u}{\\partial t}$$\nLa tension et le courant vérifient une équation de d\'Alembert de vitesse $v = \\frac{1}{\\sqrt{\\Lambda \\Gamma}} = \\frac{c}{\\sqrt{\\varepsilon_r}}$. L\'impédance caractéristique de la ligne est $Z_c = \\sqrt{\\frac{\\Lambda}{\\Gamma}}$.',
        demonstration: 'Bilan sur une tranche infinitésimale de ligne entre $z$ et $z+\\mathrm{d}z$ : loi des mailles avec la bobine $\\Lambda \\mathrm{d}z$ et loi des nœuds avec le condensateur $\\Gamma \\mathrm{d}z$, puis passage à la limite $\\mathrm{d}z \\to 0$.',
        astuceConcours: 'En régime sinusoïdal permanent, le rapport onde progressive de tension sur onde progressive de courant vaut $+Z_c$, tandis que pour l\'onde régressive il vaut $-Z_c$.'
      },
      {
        name: 'Condition de Coupure dans un Guide Rectangulaire Métallique',
        statement: 'Pour un guide d\'onde à section rectannulaire $a \\times b$ ($a > b$) parfaitement conducteur, le mode fondamental $TE_{10}$ ne se propage que si la pulsation $\\omega > \\omega_c = \\frac{\\pi c}{a}$, soit une longueur d\'onde dans le vide $\\lambda_0 < \\lambda_c = 2a$.',
        astuceConcours: 'En dessous de la pulsation de coupure $\\omega_c$, le vecteur d\'onde devient imaginaire pur : l\'onde devient évanescente (aucun transport d\'énergie moyenne).'
      }
    ],
    sections: [
      {
        title: '1. Facteur de réflexion et adaptation d\'impédance',
        content: 'En bout de ligne fermée sur une impédance de charge $Z_L$, le coefficient de réflexion en tension est $\\underline{r} = \\frac{Z_L - Z_c}{Z_L + Z_c}$. Si $Z_L = Z_c$, $\\underline{r} = 0$ : la ligne est adaptée, aucune onde réfléchie n\'existe et toute l\'énergie est absorbée.',
        methodKicker: 'Si $Z_L = 0$ (court-circuit), $r = -1$. Si $Z_L = \\infty$ (circuit ouvert), $r = +1$.'
      }
    ],
    piegesClassiques: [
      'Confondre la vitesse de phase $v_\\phi = \\frac{c}{\\sqrt{1 - (f_c/f)^2}} > c$ dans le guide avec la vitesse de l\'information $v_g < c$.',
      'Oublier le signe négatif devant $Z_c$ pour l\'onde régressive dans la relation tension-courant.'
    ]
  },
  {
    id: 'physique-navier-stokes-pertes-charge',
    slug: 'mecanique-fluides-navier-stokes-pertes-charge',
    title: 'Mécanique des Fluides : Équations de Navier-Stokes & Pertes de Charge',
    matiere: 'Physique',
    filieres: ['PC', 'PSI'],
    annee: '2ème année',
    description: 'Écoulements visqueux newtoniens, équation de Navier-Stokes, écoulement plan de Couette et de Poiseuille, profil parabolique de vitesse, nombre de Reynolds, pertes de charge régulières et formule de Darcy-Weisbach.',
    readTime: '27 min',
    prerequis: ['Cinématique des fluides', 'Bilan de masse et quantité de mouvement', 'Gradient, divergence, laplacien vectoriel'],
    keyTheorems: [
      {
        name: 'Équation de Navier-Stokes pour un fluide newtonien incompressible',
        statement: 'Pour un fluide de masse volumique $\\rho$ constante et de viscosité dynamique $\\eta$ constante :\n$$\\rho \\left( \\frac{\\partial \\vec{v}}{\\partial t} + (\\vec{v}\\cdot\\vec{\\nabla})\\vec{v} \\right) = -\\vec{\\nabla} P + \\rho \\vec{g} + \\eta \\Delta \\vec{v}$$',
        demonstration: 'Application du PFD à une particule fluide de volume $\\mathrm{d}\\tau = \\mathrm{d}x\\mathrm{d}y\\mathrm{d}z$. Les forces de surface se décomposent en pression isotrope $-\\vec{\\nabla} P$ et en contraintes visqueuses de cisaillement proportionnelles au gradient de vitesse via le tenseur des contraintes newtonien.',
        astuceConcours: 'En régime stationnaire et unidirectionnel $\\vec{v} = v(y)\\vec{u}_x$, le terme convectif $(\\vec{v}\\cdot\\vec{\\nabla})\\vec{v}$ est identiquement nul ! L\'équation se résout alors par une simple double intégration.'
      },
      {
        name: 'Loi de Poiseuille pour une conduite cylindrique de rayon $R$',
        statement: 'Le profil de vitesse laminaire est parabolique : $v(r) = v_{max} \\left(1 - \\frac{r^2}{R^2}\\right)$ avec $v_{max} = \\frac{-\\frac{\\mathrm{d}P}{\\mathrm{d}z} R^2}{4\\eta}$. Le débit volumique vaut :\n$$D_v = \\frac{\\pi R^4}{8\\eta} \\left(-\\frac{\\mathrm{d}P}{\\mathrm{d}z}\\right)$$',
        astuceConcours: 'La dépendance en $R^4$ est colossale : diviser le diamètre d\'un tuyau par 2 multiplie la résistance hydraulique par 16 à débit égal.'
      }
    ],
    sections: [
      {
        title: '1. Nombre de Reynolds & Transition vers la turbulence',
        content: 'Le nombre de Reynolds sans dimension $Re = \\frac{\\rho v L}{\\eta} = \\frac{v L}{\\nu}$ compare l\'ordre de grandeur des forces d\'inertie aux forces de viscosité. Si $Re < 2000$, l\'écoulement dans une conduite est laminaire stable. Si $Re > 4000$, il devient turbulent.',
        methodKicker: 'Pour les très faibles Reynolds ($Re \\ll 1$, écoulement de Stokes), on néglige le terme convectif devant le laplacien visqueux.'
      }
    ],
    piegesClassiques: [
      'Appliquer le théorème de Bernoulli classique (sans terme de perte de charge) dans un écoulement visqueux avec dissipation thermique.',
      'Oublier la condition d\'adhérence du fluide visqueux à la paroi solide fixe : $\\vec{v}_{paroi} = \\vec{0}$.'
    ]
  },

  // ==========================================
  // CHIMIE
  // ==========================================
  {
    id: 'chimie-thermo-potentiel-chimique-binaires',
    slug: 'thermodynamique-potentiel-chimique-diagrammes-binaires',
    title: 'Thermodynamique Chimique : Potentiel Chimique & Équilibres Binaires Liquide-Vapeur',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI'],
    annee: '2ème année',
    description: 'Grandeurs molaires partielles, potentiel chimique $\\mu_i$, équilibres de phases, relation de Gibbs-Duhem, mélanges binaires idéaux et réels, règle des moments chimiques et distillation fractionnée.',
    readTime: '25 min',
    prerequis: ['Fonctions d\'état $H$ et $G$', 'Second principe', 'Corps purs et transitions de phase'],
    keyTheorems: [
      {
        name: 'Condition d\'Équilibre Physico-Chimique par le Potentiel Chimique',
        statement: 'Pour un constituant $i$ présent dans deux phases $\\alpha$ et $\\beta$ en équilibre thermique et mécanique ($T$ et $P$ uniformes), l\'équilibre thermodynamique équivaut à l\'égalité des potentiels chimiques :\n$$\\mu_i^{(\\alpha)}(T, P, x_i^{(\\alpha)}) = \\mu_i^{(\\beta)}(T, P, x_i^{(\\beta)})$$',
        demonstration: 'À $T$ et $P$ constantes, l\'enthalpie libre $G$ est minimale à l\'équilibre. Pour un transfert virtuel infinitésimal $\\mathrm{d}n_i$ de la phase $\\alpha$ vers $\\beta$, $\\mathrm{d}G = (\\mu_i^{(\\beta)} - \\mu_i^{(\\alpha)})\\mathrm{d}n_i = 0$, d\'où l\'égalité.',
        astuceConcours: 'La matière diffuse toujours du potentiel chimique le plus élevé vers le potentiel chimique le plus bas, exactement comme la chaleur diffuse des hautes températures vers les basses.'
      },
      {
        name: 'Théorème des Moments Chimiques (Règle du Levier)',
        statement: 'Dans le domaine diphasique d\'un diagramme binaire $(T, x)$, pour un mélange global de fraction $x_0$ séparé en phase liquide de titre $x_L$ et phase vapeur de titre $y_V$ :\n$$n_L (x_0 - x_L) = n_V (y_V - x_0) \\implies \\frac{n_L}{n_V} = \\frac{y_V - x_0}{x_0 - x_L}$$',
        astuceConcours: 'Sur le diagramme, la quantité de phase liquide est proportionnelle à la longueur du segment opposé (vers la vapeur).'
      }
    ],
    sections: [
      {
        title: '1. Azéotropes et distillation',
        content: 'Un azéotrope est un mélange binaire liquide-vapeur dont les courbes d\'ébullition et de rosée se touchent en un extremum ($x_L = y_V$). À cette composition et température, le mélange bout à composition rigoureusement constante comme un corps pur : une distillation fractionnée ne permet pas de franchir ce point azéotropique.',
        methodKicker: 'Pour séparer le mélange eau-éthanol à 96%, il faut changer la pression ou ajouter un tiers corps.'
      }
    ],
    piegesClassiques: [
      'Inverser les courbes d\'ébullition et de rosée : dans un diagramme $(T, x)$, le liquide étant plus stable à basse température, la courbe d\'ébullition est celle du BAS !',
      'Confondre fraction molaire $x_i$ et fraction massique $w_i$ lors de l\'application de la règle des moments.'
    ]
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR
  // ==========================================
  {
    id: 'si-dynamique-solide-energetique-lagrange',
    slug: 'dynamique-solides-theoremes-energetiques-lagrange',
    title: 'Dynamique du Solide, Théorèmes Énergétiques & Équations de Lagrange',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP'],
    annee: '2ème année',
    description: 'Énergie cinétique des systèmes matériels, puissances des actions extérieures et intérieures, théorème de l\'énergie cinétique, énergie potentielle, intégrale première de l\'énergie et équations de Lagrange sans frottement.',
    readTime: '28 min',
    prerequis: ['Torseurs cinématiques et cinétiques', 'Matrice d\'inertie et théorème de Huygens', 'Principe Fondamental de la Dynamique'],
    keyTheorems: [
      {
        name: 'Théorème de l\'Énergie Cinétique pour un système de solides',
        statement: 'Pour un système matériel $\{S\}$ en mouvement par rapport à un repère galiléen $R_g$ :\n$$\\frac{\\mathrm{d}E_c(S/R_g)}{\\mathrm{d}t} = \\mathcal{P}_{ext}(ext \\to S / R_g) + \\mathcal{P}_{int}(S)$$\noù $\\mathcal{P}_{int}$ est la puissance des actions mutuelles intérieures (nulle pour les liaisons parfaites sans frottement).',
        demonstration: 'Sommation des équations du PFD sur tous les points matériels du système et utilisation du comoment torseur cinématique / torseur d\'action mécanique.',
        astuceConcours: 'Le théorème de l\'énergie cinétique élimine automatiquement toutes les inconnues de liaison parfaites ! C\'est la méthode la plus rapide pour trouver l\'équation différentielle du mouvement d\'un système à 1 degré de liberté.'
      },
      {
        name: 'Équations de Lagrange (systèmes conservatifs)',
        statement: 'Pour un système holonome à $n$ degrés de liberté paramétré par des coordonnées généralisées $q_i$, avec le Lagrangien $L(q_i, \\dot{q}_i, t) = E_c - E_p$ :\n$$\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial L}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial L}{\\partial q_i} = Q_i^{nc}$$',
        astuceConcours: 'Si le système est conservatif sans frottement, $Q_i^{nc} = 0$. Si une coordonnée $q_k$ est cyclique (n\'apparaît pas dans $L$), le moment conjugué $p_k = \\frac{\\partial L}{\\partial \\dot{q}_k}$ est une intégrale première conservée.'
      }
    ],
    sections: [
      {
        title: '1. Calcul de l\'énergie cinétique via le second théorème de Koenig',
        content: 'Pour un solide $S$ de masse $M$, de centre d\'inertie $G$ et de matrice d\'inertie $I(G, S)$ :\n$$E_c(S/R) = \\frac{1}{2} M \\vec{V}(G/R)^2 + \\frac{1}{2} \\vec{\\Omega}(S/R) \\cdot \\left( I(G, S) \\vec{\\Omega}(S/R) \\right)$$',
        methodKicker: 'Toujours exprimer la matrice d\'inertie au centre d\'inertie $G$ ou en un point fixe du mouvement pour éviter les termes croisés.'
      }
    ],
    piegesClassiques: [
      'Affirmer que la puissance des actions mécaniques intérieures est toujours nulle (vrai uniquement pour des solides indéformables ou des liaisons parfaites, faux pour un ressort ou un amortisseur !).',
      'Confondre vitesse d\'un point matériel et dérivée temporelle de coordonnées paramétriques sans projection dans la bonne base.'
    ]
  },

  // ==========================================
  // INFORMATIQUE
  // ==========================================
  {
    id: 'info-algorithmique-graphes-flots-dp',
    slug: 'algorithmique-avancee-graphes-dp-flots',
    title: 'Algorithmique Avancée : Plus Courts Chemins, Programmation Dynamique & Flots',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    description: 'Algorithme de Bellman-Ford pour poids négatifs, Floyd-Warshall pour tous les couples, décomposition en sous-problèmes optimaux, sac à dos, distance d\'édition et théorème de Ford-Fulkerson.',
    readTime: '26 min',
    prerequis: ['Algorithme de Dijkstra', 'Complexité asymptotique $\\mathcal{O}$', 'Récursion et mémoïsation'],
    keyTheorems: [
      {
        name: 'Algorithme de Bellman-Ford & Détection de Cycles Négatifs',
        statement: 'Soit $G=(V, E, w)$ un graphe orienté pondéré. L\'algorithme de Bellman-Ford effectue $|V|-1$ passes de relâchement sur toutes les arêtes. Sa complexité est $\\mathcal{O}(|V| \\cdot |E|)$. Une $|V|$-ème passe permet de détecter rigoureusement l\'existence d\'un cycle absorbant de poids strictement négatif accessible depuis la source.',
        astuceConcours: 'Quand les poids des arêtes peuvent être négatifs, l\'algorithme de Dijkstra est faux ! Bellman-Ford est le seul recours au programme.'
      },
      {
        name: 'Théorème du Flot Maximum / Coupe Minimum (Ford-Fulkerson)',
        statement: 'Dans un réseau de transport avec capacités entières positives, la valeur maximale d\'un flot compatible de la source $s$ au puits $t$ est égale à la capacité minimale d\'une coupe séparant $s$ de $t$.',
        astuceConcours: 'L\'existence d\'un chemin augmentant dans le graphe résiduel caractérise la non-maximalité du flot.'
      }
    ],
    sections: [
      {
        title: '1. Mémoïsation vs Tabulation en Programmation Dynamique',
        content: 'La mémoïsation (top-down) garde la structure récursive naturelle et remplit un dictionnaire/tableau à la volée. La tabulation (bottom-up) remplit la matrice itérativement dans l\'ordre des dépendances topologiques, éliminant la pile d\'appels système et optimisant la localité spatiale en mémoire.',
        methodKicker: 'Pour le problème du rendu de monnaie ou du sac à dos, toujours poser explicitement la relation de récurrence de Bellman avant de coder la boucle.'
      }
    ],
    piegesClassiques: [
      'Appliquer Dijkstra avec des poids négatifs en pensant qu\'il suffit d\'ajouter une constante à toutes les arêtes (cela fausse les plus courts chemins car les chemins longs en nombre d\'arêtes sont plus pénalisés !).',
      'Oublier de vérifier la condition de sous-structure optimale avant de concevoir un algorithme glouton.'
    ]
  },
  {
    id: 'maths-denombrement-combinatoire',
    slug: 'denombrement-combinatoire-crible-poincare',
    title: 'Dénombrement, Combinatoire & Formule du Crible',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    description: 'Ensembles finis, cardinaux, p-listes, arrangements, combinaisons, formule du binôme et de Vandermonde, crible de Poincaré (inclusion-exclusion) et dérangements.',
    readTime: '20 min',
    prerequis: ['Ensembles et applications', 'Principe de récurrence', 'Calcul algébrique de sommes'],
    keyTheorems: [
      {
        name: 'Formule du Crible de Poincaré (Principe d\'Inclusion-Exclusion)',
        statement: 'Pour une famille finie d\'ensembles finis $(A_i)_{1 \\le i \\le n}$ :\n$$\\mathrm{Card}\\left( \\bigcup_{i=1}^n A_i \\right) = \\sum_{k=1}^n (-1)^{k-1} \\sum_{1 \\le i_1 < \\dots < i_k \\le n} \\mathrm{Card}(A_{i_1} \\cap \\dots \\cap A_{i_k})$$',
        demonstration: 'Démontrée par fonction indicatrice : $\\mathbb{1}_{\\bigcup A_i} = 1 - \\prod_{i=1}^n (1 - \\mathbb{1}_{A_i})$. On développe le produit et on passe à la somme sur l\'univers fini.',
        astuceConcours: 'Formule fondamentale pour dénombrer les dérangements (permutations sans point fixe) : $D_n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!} \\approx \\frac{n!}{e}$.'
      },
      {
        name: 'Formule de Vandermonde pour les combinaisons',
        statement: 'Pour tous entiers $a, b, n$ avec $0 \\le n \\le a+b$ :\n$$\\sum_{k=0}^n \\binom{a}{k} \\binom{b}{n-k} = \\binom{a+b}{n}$$',
        astuceConcours: 'S\'obtient en identifiant le coefficient de $X^n$ dans l\'identité polynomiale $(1+X)^{a+b} = (1+X)^a (1+X)^b$.'
      }
    ],
    sections: [
      {
        title: '1. Méthode des tirages et choix du modèle combinatoire',
        content: 'Tirage successif avec remise : $n^p$ (p-listes). Tirage successif sans remise : $A_n^p = \\frac{n!}{(n-p)!}$ (arrangements). Tirage simultané : $\\binom{n}{p} = \\frac{n!}{p!(n-p)!}$ (parties / combinaisons). Tirage avec remise sans ordre : $\\binom{n+p-1}{p}$ (combinaisons avec répétition).',
        methodKicker: 'Toujours se demander : l\'ordre compte-t-il ? Y a-t-il répétition possible ?'
      }
    ],
    piegesClassiques: [
      'Compter deux fois la même configuration en fixant arbitrairement un ordre lors d\'un choix non ordonné.',
      'Oublier le facteur $(-1)^{k-1}$ dans la formule d\'inclusion-exclusion.'
    ]
  },
  {
    id: 'physique-optique-reseaux-diffraction',
    slug: 'optique-ondulatoire-reseaux-spectroscopie',
    title: 'Optique Ondulatoire : Réseaux de Diffraction & Spectroscopie',
    matiere: 'Physique',
    filieres: ['PC', 'MP', 'PSI'],
    annee: '2ème année',
    description: 'Fonction d\'appareil d\'un réseau plan par transmission et réflexion, formule des réseaux, ordres spectraux, dispersion angulaire, pouvoir de résolution théorique et spectromètres.',
    readTime: '24 min',
    prerequis: ['Diffraction de Fraunhofer', 'Interférences à $N$ ondes', 'Formule du sinus cardinal'],
    keyTheorems: [
      {
        name: 'Formule fondamentale des réseaux de diffraction',
        statement: 'Pour un réseau plan de pas $a$ (nombre de traits par unité de longueur $n = 1/a$) éclairé sous incidence $i$ :\n$$\\sin(i\') - \\sin(i) = p \\frac{\\lambda}{a} = p n \\lambda \\quad (p \\in \\mathbb{Z})$$\noù $i\'$ est l\'angle d\'émergence dans l\'ordre $p$.',
        demonstration: 'Calcul de la différence de marche entre deux fentes consécutives distantes de $a$ : $\\delta = a (\\sin i\' - \\sin i)$. L\'interférence constructive impose $\\delta = p \\lambda$.',
        astuceConcours: 'Le nombre maximal d\'ordres observables est borné par la condition physique $|\\sin i\'| \\le 1$.'
      },
      {
        name: 'Pouvoir de résolution théorique d\'un réseau (Critère de Rayleigh)',
        statement: 'Pour un réseau comportant $N$ traits utiles éclairés dans l\'ordre $p$ :\n$$\\mathcal{R} = \\frac{\\lambda}{\\Delta \\lambda} = |p| N$$',
        astuceConcours: 'Pour séparer le doublet jaune du sodium ($\\Delta\\lambda = 0,6$ nm à $589$ nm), il faut un pouvoir de résolution $\\mathcal{R} \\approx 1000$ : un réseau de 1000 traits dans l\'ordre 1 ou 500 traits dans l\'ordre 2 suffit largement.'
      }
    ],
    sections: [
      {
        title: '1. Dispersion angulaire',
        content: 'La dispersion angulaire mesure la capacité à étaler angulairement les longueurs d\'onde : $D = \\frac{\\mathrm{d}i\'}{\\mathrm{d}\\lambda} = \\frac{p}{a \\cos i\'}$. Elle augmente avec l\'ordre $p$ et avec la densité de traits $1/a$.',
        methodKicker: 'Pour concevoir un spectromètre à haute résolution : maximiser $p$ et éclairer le maximum de traits $N$.'
      }
    ],
    piegesClassiques: [
      'Confondre la dispersion angulaire $D = \\mathrm{d}i\'/\\mathrm{d}\\lambda$ (séparation angulaire) et le pouvoir de résolution $\\mathcal{R} = \\lambda/\\Delta\\lambda$ (finesse des raies).',
      'Oublier le signe de l\'angle d\'incidence $i$ selon les conventions trigonométriques.'
    ]
  },
  {
    id: 'si-rdm-poutres-sollicitations',
    slug: 'resistance-des-materiaux-torseur-cohesion-sollicitations',
    title: 'Résistance des Matériaux (RDM) : Torseur de Cohésion & Sollicitations Simples',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP'],
    annee: '2ème année',
    description: 'Modèle de poutre de Navier-Bernoulli, torseur de cohésion, diagrammes des efforts tranchants et moments fléchissants, contraintes normales et tangentielles, critère de Tresca et Von Mises.',
    readTime: '26 min',
    prerequis: ['Statique des solides', 'Torseurs d\'action mécanique', 'Principe Fondamental de la Statique'],
    keyTheorems: [
      {
        name: 'Définition du Torseur de Cohésion',
        statement: 'Pour une coupure fictive normale à la ligne moyenne d\'une poutre en une section droite $S(x)$ de centre de gravité $G$ :\n$$\\{T_{coh}\\} = \\{T_{G, II \\to I}\\} = \\begin{Bmatrix} N \\vec{x} + T_y \\vec{y} + T_z \\vec{z} \\\\ M_t \\vec{x} + M_{fy} \\vec{y} + M_{fz} \\vec{z} \\end{Bmatrix}_G$$\navec $N$ effort normal, $T$ efforts tranchants, $M_t$ moment de torsion, $M_f$ moments de flexion.',
        demonstration: 'Isolement du tronçon $(I)$ (partie gauche) et application du PFS : $\\{T_{coh}\\} + \\{T_{ext \\to I}\\} = \\{0\\} \\implies \\{T_{coh}\\} = -\\{T_{ext \\to I}\\} = +\\{T_{ext \\to II}\\}$.',
        astuceConcours: 'Toujours calculer $\\{T_{coh}\\}$ à partir du tronçon où s\'appliquent le moins de forces extérieures pour diviser le temps de calcul par deux.'
      },
      {
        name: 'Formule fondamentale de flexion simple de Navier',
        statement: 'Pour une flexion autour de l\'axe principal $\\vec{z}$ avec un moment $M_{fz}$ et un moment quadratique $I_{Gz}$ :\n$$\\sigma_{xx}(y) = -\\frac{M_{fz}}{I_{Gz}} y$$',
        astuceConcours: 'La contrainte normale est maximale sur les fibres les plus éloignées de la ligne neutre ($y = \\pm h/2$) : $\\sigma_{max} = \\frac{|M_{fz}|}{I_{Gz}/v}$. C\'est pourquoi les poutres industrielles utilisent des profils en I (IPN/IPE).'
      }
    ],
    sections: [
      {
        title: '1. Critères de résistance élastique (Tresca & Von Mises)',
        content: 'Pour un état de contrainte combinant contrainte normale $\\sigma$ et cisaillement $\\tau$ :\n- Critère de Tresca : $\\sigma_{eq} = \\sqrt{\\sigma^2 + 4\\tau^2} \\le R_e / s$\n- Critère de Von Mises : $\\sigma_{eq} = \\sqrt{\\sigma^2 + 3\\tau^2} \\le R_e / s$\noù $R_e$ est la limite d\'élasticité du matériau et $s$ le coefficient de sécurité.',
        methodKicker: 'Tresca est plus conservateur que Von Mises (écart maximal de 15%).'
      }
    ],
    piegesClassiques: [
      'Inverser les signes lors du calcul du torseur de cohésion : $\\{T_{coh}\\} = -\\{T_{ext \\to gauche}\\}$.',
      'Confondre moment quadratique de flexion $I_G = \\iint y^2 \\mathrm{d}S$ et moment polaire de torsion $I_0 = \\iint r^2 \\mathrm{d}S = I_y + I_z$.'
    ]
  },
  {
    id: 'chimie-polymeres-polymerisation',
    slug: 'chimie-macromoleculaire-polymeres-polymerisations',
    title: 'Chimie Macromoléculaire : Polymères & Polymérisations',
    matiere: 'Chimie',
    filieres: ['PC'],
    annee: '2ème année',
    description: 'Polymérisation par étapes (polycondensation, équation de Carothers), polymérisation en chaîne (radicalaire, amorçage, propagation, terminaison), masses molaires moyennes et dispersité.',
    readTime: '24 min',
    prerequis: ['Chimie organique fondamentale', 'Estérification et amidation', 'Cinétique chimique'],
    keyTheorems: [
      {
        name: 'Équation de Carothers pour la polycondensation stœchiométrique',
        statement: 'Pour des monomères bifonctionnels stœchiométriques à degré d\'avancement $p$ des fonctions réactives :\n$$\\bar{DP}_n = \\frac{1}{1 - p}$$\noù $\\bar{DP}_n$ est le degré de polymérisation moyen en nombre.',
        demonstration: 'Chaque condensation consomme 2 groupements réactifs et diminue de 1 le nombre total de molécules $N = N_0(1-p)$. D\'où $\\bar{DP}_n = N_0 / N = 1 / (1-p)$.',
        astuceConcours: 'Pour obtenir un polymère de haut poids moléculaire (ex: Nylon 6-6, $\\bar{DP}_n > 100$), il faut un avancement $p > 99\\%$ : l\'élimination de l\'eau doit être quasi-totale !'
      },
      {
        name: 'Indice de Dispersité $D$',
        statement: 'L\'indice de dispersité mesure l\'étalement de la distribution des masses molaires :\n$$D = \\frac{\\bar{M}_w}{\\bar{M}_n} \\ge 1$$\nUn polymère est monodispersé si $D = 1$ (cas des protéines naturelles). Pour une polycondensation idéale à fort avancement, $D \\to 2$.',
        astuceConcours: 'Toujours $\\bar{M}_w \\ge \\bar{M}_n$ en vertu de l\'inégalité de Cauchy-Schwarz.'
      }
    ],
    sections: [
      {
        title: '1. Polymérisation en chaîne radicalaire vs par étapes',
        content: 'Dans la polymérisation en chaîne, le polymère de grande taille se forme dès les premières fractions de seconde (le milieu ne contient que du monomère et du polymère final). Dans la polycondensation par étapes, la masse molaire n\'augmente significativement qu\'à la toute fin de la réaction ($p > 98\\%$).',
        methodKicker: 'Pour une réaction en chaîne : loi de vitesse globale $v = k_p [M] \\sqrt{\\frac{k_a [A]}{k_t}}$ sous hypothèse de quasi-stationnarité (AEQS).'
      }
    ],
    piegesClassiques: [
      'Confondre avancement molaire $p$ et rendement massique.',
      'Oublier qu\'un léger déséquilibre stœchiométrique bloque brutalement la croissance des chaînes en polycondensation.'
    ]
  },
  {
    id: 'info-automates-expressions-regulieres',
    slug: 'informatique-theorique-automates-langages-reguliers',
    title: 'Informatique Théorique : Automates Finis & Langages Réguliers',
    matiere: 'Informatique',
    filieres: ['MPI'],
    annee: '2ème année',
    description: 'Automates finis déterministes (AFD) et non-déterministes (AFN), expressions rationnelles (regex), théorème de Kleene, algorithme de déterminisation par sous-ensembles et lemme de l\'étoile.',
    readTime: '26 min',
    prerequis: ['Théorie des ensembles', 'Mots et alphabets', 'Algorithmes sur les graphes'],
    keyTheorems: [
      {
        name: 'Théorème de Kleene',
        statement: 'Un langage sur un alphabet $\\Sigma$ est reconnu par un automate fini (déterministe ou non) si et seulement si il est décrit par une expression régulière rationnelle.',
        demonstration: 'Sens direct par l\'algorithme de McNaughton-Yamada (programmation dynamique) ou élimination des états. Sens réciproque par l\'algorithme de Thompson qui construit récursivement un AFN avec $\\varepsilon$-transitions.',
        astuceConcours: 'Tout AFN à $n$ états est équivalent à un AFD ayant au plus $2^n$ états (déterminisation par parties).'
      },
      {
        name: 'Lemme de l\'Étoile (Pumping Lemma)',
        statement: 'Pour tout langage régulier $L$, il existe un entier $N \\ge 1$ tel que pour tout mot $w \\in L$ de longueur $|w| \\ge N$, il existe une décomposition $w = x y z$ vérifiant :\n1. $|y| \\ge 1$,\n2. $|x y| \\le N$,\n3. $\\forall k \\in \\mathbb{N}, \\quad x y^k z \\in L$.',
        astuceConcours: 'L\'outil fondamental pour prouver qu\'un langage N\'EST PAS régulier (ex: le langage des parenthèses bien formées ou $a^n b^n$).'
      }
    ],
    sections: [
      {
        title: '1. Déterminisation par l\'algorithme des parties',
        content: 'Chaque état de l\'AFD équivalent est un sous-ensemble d\'états de l\'AFN. On part de la clôture-$\\varepsilon$ de l\'état initial, puis pour chaque lettre de l\'alphabet on calcule les transitions d\'ensembles jusqu\'à fermeture complète.',
        methodKicker: 'Un état de l\'AFD est acceptant dès qu\'il contient au moins un état acceptant de l\'AFN.'
      }
    ],
    piegesClassiques: [
      'Penser que le lemme de l\'étoile permet de prouver qu\'un langage est régulier (c\'est une condition nécessaire mais non suffisante !).',
      'Oublier les $\\varepsilon$-transitions lors du calcul des successeurs dans un AFN.'
    ]
  }
];

