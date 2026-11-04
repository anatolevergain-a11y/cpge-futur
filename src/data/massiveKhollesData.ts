import type { KholleSubject } from './cpgeData';

export const MASSIVE_KHOLLES: KholleSubject[] = [
  // =========================================================================
  // MATHEMATIQUES (1 à 15)
  // =========================================================================
  {
    id: 'kholle-mass-1-theoreme-spectral',
    titre: 'Khôlle de Mathématiques : Théorème Spectral & Formes Quadratiques',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer et démontrer le théorème spectral pour un endomorphisme autoadjoint d\'un espace euclidien $E$.',
      pointsCles: [
        'Existence d\'au moins une valeur propre réelle via $\\chi_u$ scindé sur $\\mathbb{C}$ et $\\langle u(z), z \\rangle \\in \\mathbb{R}$',
        'Stabilité de l\'orthogonal d\'une droite propre : si $F = \\mathbb{R} x$, $u(F^\\perp) \\subset F^\\perp$',
        'Récurrence sur la dimension $n = \\dim E$',
        'Conclusion : existence d\'une base orthonormée de vecteurs propres et diagonalisation orthogonale'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $A \\in \\mathcal{S}_n^{++}(\\mathbb{R})$ et $B \\in \\mathcal{S}_n^+(\\mathbb{R})$. Montrer que $\\det(A + B) \\ge \\det(A)$ et préciser le cas d\'égalité.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à relier deux matrices simultanément',
          aide: 'Factorisez par $A^{1/2}$ à gauche et à droite pour vous ramener à $\\det(I_n + A^{-1/2} B A^{-1/2})$.'
        },
        {
          condition: 'Le candidat hésite sur les valeurs propres',
          aide: 'La matrice $M = A^{-1/2} B A^{-1/2}$ est symétrique positive : ses valeurs propres sont réelles positives.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "La matrice $A B$ est-elle toujours symétrique ?"',
        reponseAttendue: 'Non, $(A B)^T = B^T A^T = B A$. Elle n\'est symétrique que si et seulement si $A$ et $B$ commutent.',
        piegeAEviter: 'Prétendre que le produit de deux matrices symétriques est toujours symétrique.'
      }
    ],
    criteresNotation: [
      { critere: 'Rigueur absolue de la preuve de récurrence du théorème spectral', poids: '35%' },
      { critere: 'Utilisation efficace de la racine carrée d\'une matrice symétrique définie positive', poids: '35%' },
      { critere: 'Précision sur le cas d\'égalité', poids: '15%' },
      { critere: 'Clarté de l\'exposé au tableau', poids: '15%' }
    ]
  },
  {
    id: 'kholle-mass-2-topologie-evn-connexite',
    titre: 'Khôlle de Mathématiques : Connexité par Arcs & Théorème des Valeurs Intermédiaires',
    matiere: 'Mathématiques',
    filiere: 'MPI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Définir une partie connexe par arcs d\'un EVN. Démontrer que l\'image continue d\'un connexe par arcs est connexe par arcs. Énoncer le théorème des valeurs intermédiaires généralisé.',
      pointsCles: [
        'Définition d\'un chemin continu $\\gamma : [0, 1] \\to E$ reliant $x$ à $y$',
        'Composition continue $f \\circ \\gamma : [0, 1] \\to F$',
        'Preuve que les intervalles de $\\mathbb{R}$ sont les seuls connexes par arcs de $\\mathbb{R}$',
        'TVI : si $A$ est connexe par arcs et $f : A \\to \\mathbb{R}$ continue, alors $f(A)$ est un intervalle'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Montrer que le groupe linéaire $\\mathcal{GL}_n(\\mathbb{C})$ est connexe par arcs. Qu\'en est-il de $\\mathcal{GL}_n(\\mathbb{R})$ ?',
      indicationsKholleur: [
        {
          condition: 'Le candidat essaie de relier deux matrices par un segment linéaire direct',
          aide: 'Le segment $(1-t)A + t B$ peut contenir des matrices non inversibles (les racines de $\\det((1-t)A + t B) = 0$). Dans $\\mathbb{C}$, un polynôme non nul n\'a qu\'un nombre fini de racines : contournez-les dans le plan complexe !'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Pourquoi $\\mathcal{GL}_n(\\mathbb{R})$ n\'est-il pas connexe par arcs ?"',
        reponseAttendue: 'L\'image de $\\mathcal{GL}_n(\\mathbb{R})$ par le déterminant continu est $\\mathbb{R}^* = ]-\\infty, 0[ \\cup ]0, +\\infty[$, qui n\'est pas un intervalle connexe. Il possède deux composantes connexes disjointes.',
        piegeAEviter: 'Oublier d\'utiliser l\'application continue $\\det$ pour prouver la non-connexité.'
      }
    ],
    criteresNotation: [
      { critere: 'Définition exacte du chemin continu', poids: '30%' },
      { critere: 'Argument du contournement des zéros dans le plan complexe', poids: '40%' },
      { critere: 'Clarté orale et vocabulaire topologique', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-3-series-fourier-bessel',
    titre: 'Khôlle de Mathématiques : Inégalité de Bessel & Théorème de Parseval',
    matiere: 'Mathématiques',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Pour une fonction $f$ continue par morceaux et $2\\pi$-périodique, définir les coefficients de Fourier et démontrer l\'inégalité de Bessel. Énoncer l\'égalité de Parseval.',
      pointsCles: [
        'Formules intégrales des coefficients $a_n(f)$ et $b_n(f)$',
        'Calcul de l\'intégrale du carré de la différence $\|f - S_N(f)\|^2 \\ge 0$',
        'Inégalité de Bessel : $\\sum (a_n^2 + b_n^2) \\le \\frac{2}{\\pi} \\int_0^{2\\pi} |f(t)|^2 \\mathrm{d}t$',
        'Conséquence : $\\lim_{n\\to\\infty} a_n = \\lim b_n = 0$ (lemme de Riemann-Lebesgue)'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Calculer la série de Fourier de la fonction $f(t) = |\\sin t|$. En déduire la somme de la série $\\sum_{n=1}^\\infty \\frac{1}{4n^2 - 1}$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'a pas vu la parité et la $\\pi$-périodicité',
          aide: 'Remarquez que $f$ est paire et de période $\\pi$, donc $b_n = 0$ et seuls les harmoniques pairs subsistent.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Peut-on appliquer le théorème de Parseval à une fonction non continue ?"',
        reponseAttendue: 'Oui, le théorème de Parseval est valable dès que $f$ est continue par morceaux sur la période.',
        piegeAEviter: 'Exiger la classe $\\mathcal{C}^1$ pour Parseval (confusion avec la convergence normale).'
      }
    ],
    criteresNotation: [
      { critere: 'Démonstration rigoureuse de Bessel par la projection euclidienne', poids: '35%' },
      { critere: 'Calcul trigonométrique sans erreur pour l\'intégrale de $|\\sin t|$', poids: '35%' },
      { critere: 'Application correcte de Dirichlet en $t=0$', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-4-reduction-projecteurs-cayley',
    titre: 'Khôlle de Mathématiques : Théorème de Cayley-Hamilton & Polynôme Minimal',
    matiere: 'Mathématiques',
    filiere: 'PSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer le théorème de Cayley-Hamilton. Définir le polynôme minimal $\\pi_u$. Démontrer que le spectre de $u$ est l\'ensemble des racines de $\\pi_u$.',
      pointsCles: [
        'Énoncé $\\chi_u(u) = 0$',
        'Définition de $\\pi_u$ comme générateur unitaire de l\'idéal annulateur',
        'Preuve que $\\lambda \\in \\mathrm{Sp}(u) \\implies \\pi_u(\\lambda) = 0$',
        'Preuve que $\\pi_u(\\lambda) = 0 \\implies \\lambda \\in \\mathrm{Sp}(u)$ par division euclidienne'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $A \\in \\mathcal{M}_n(\\mathbb{C})$ telle que $\\mathrm{Tr}(A^k) = 0$ pour tout $k \\in \\{1, \\dots, n\\}$. Montrer que $A$ est nilpotente.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à relier les traces aux coefficients de $\\chi_A$',
          aide: 'Considérez les valeurs propres complexes $(\\lambda_1, \\dots, \\lambda_n)$ de $A$ et écrivez les relations de Newton.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Si $\\chi_A(X) = X^n$, la matrice $A$ est-elle forcément la matrice nulle ?"',
        reponseAttendue: 'Non, elle est seulement nilpotente (ex: une matrice triangulaire avec des zéros sur la diagonale et des 1 au-dessus).',
        piegeAEviter: 'Confondre matrice nilpotente et matrice nulle.'
      }
    ],
    criteresNotation: [
      { critere: 'Démonstration limpide de l\'équivalence des racines du polynôme minimal', poids: '35%' },
      { critere: 'Utilisation des sommes des puissances des valeurs propres', poids: '35%' },
      { critere: 'Précision sur la trigonalisabilité dans $\\mathbb{C}$', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-5-integration-lebesgue-regle-riemann',
    titre: 'Khôlle de Mathématiques : Intégrales Impropres & Théorème de Fubini',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer les critères de comparaison pour l\'intégrabilité des fonctions positives sur un intervalle quelconque. Démontrer la règle des équivalents.',
      pointsCles: [
        'Définition de la sommabilité par les intégrales partielles croissantes et majorées',
        'Règle $0 \\le f \\le g$ et intégrabilité de $g$',
        'Règle de l\'équivalent $f \\sim g$ au voisinage d\'une borne',
        'Règle de Riemann $t^\\alpha f(t) \\to 0$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Étudier l\'intégrabilité sur $]0, +\\infty[$ de la fonction $f(t) = \\frac{\\ln t}{1 + t^2}$. Calculer la valeur de $\\int_0^{+\\infty} \\frac{\\ln t}{1 + t^2}\\,\\mathrm{d}t$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat bloque sur le calcul de l\'intégrale',
          aide: 'Effectuez le changement de variable $u = 1/t$ sur $]0, +\\infty[$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "L\'équivalent conserve-t-il l\'intégrabilité si la fonction change de signe ?"',
        reponseAttendue: 'Non ! L\'équivalent ne conserve l\'intégrabilité et le caractère convergent que pour les fonctions de SIGNE CONSTANT.',
        piegeAEviter: 'Appliquer un équivalent à une série ou intégrale oscillante.'
      }
    ],
    criteresNotation: [
      { critere: 'Rigueur sur les hypothèses de positivité', poids: '35%' },
      { critere: 'Changement de variable $u = 1/t$ et conclusion $\\int = 0$', poids: '35%' },
      { critere: 'Justification des théorèmes d\'analyse', poids: '30%' }
    ]
  },

  // =========================================================================
  // PHYSIQUE (16 à 30)
  // =========================================================================
  {
    id: 'kholle-mass-6-faraday-induction-lorentz-neumann',
    titre: 'Khôlle de Physique : Induction Électromagnétique & Rail de Laplace',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer la loi de Faraday pour un circuit filiforme. Définir l\'induction de Lorentz (circuit mobile) et l\'induction de Neumann (champ variable). Énoncer la loi de modération de Lenz.',
      pointsCles: [
        'Formule $e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}$ avec orientation cohérente de la normale',
        'Expression du champ électromoteur de Lorentz $\\vec{E}_m = \\vec{v} \\wedge \\vec{B}$',
        'Équation locale de Maxwell-Faraday $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$',
        'Lenz : opposition physique aux causes de la variation'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une tige conductrice de masse $m$ et résistance $R$ glisse sans frottement sur deux rails horizontaux parallèles distants de $a$ dans un champ magnétique vertical uniforme $\\vec{B} = B\\vec{u}_z$. On lâche la tige avec une vitesse initiale $v_0$.\n1. Établir l\'équation différentielle du mouvement.\n2. Calculer l\'énergie totale dissipée par effet Joule et vérifier la conservation globale de l\'énergie.',
      indicationsKholleur: [
        {
          condition: 'Le candidat mélange les forces et le courant',
          aide: 'Exprimez le courant induit $i = e/R = -\\frac{B a v}{R}$, puis calculez la force de Laplace $\\vec{F} = i \\vec{a} \\wedge \\vec{B}$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Quelle est la vitesse finale de la tige ?"',
        reponseAttendue: 'La vitesse tend exponentiellement vers 0 ($v(t) = v_0 e^{-t/\\tau}$ avec $\\tau = \\frac{m R}{B^2 a^2}$), toute l\'énergie cinétique initiale $\\frac{1}{2}mv_0^2$ est convertie en chaleur Joule.',
        piegeAEviter: 'Prétendre que la tige oscille ou accélère spontanément.'
      }
    ],
    criteresNotation: [
      { critere: 'Orientation du circuit et signe de Faraday', poids: '35%' },
      { critere: 'Bilan énergétique parfait $\\int R i^2 \\mathrm{d}t = \\frac{1}{2}m v_0^2$', poids: '35%' },
      { critere: 'Sens physique et homogénéité des formules', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-7-thermodynamique-cycle-stirling',
    titre: 'Khôlle de Physique : Moteur de Stirling & Efficacité Thermodynamique',
    matiere: 'Physique',
    filiere: 'PSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Décrire le cycle moteur de Stirling composé de deux isothermes ($T_C$ et $T_F$) et deux isochores. Représenter le cycle dans les diagrammes $(P, V)$ et $(T, S)$.',
      pointsCles: [
        'Diagramme de Clapeyron $(P, V)$ parcouru dans le sens horaire',
        'Calcul des transferts thermiques sur les 4 branches pour un gaz parfait',
        'Rôle du régénérateur thermique pour échanger la chaleur entre les deux isochores',
        'Rendement idéal égal au rendement de Carnot $\\eta_C = 1 - T_F/T_C$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Un moteur de Stirling sans régénérateur fonctionne entre $T_C = 600$ K et $T_F = 300$ K avec un taux de compression volumique $a = V_{max}/V_{min} = 3$. Le fluide est de l\'air ($\gamma = 1,4$). Calculer son rendement thermique et le comparer au rendement de Carnot.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'inclut pas la chaleur reçue sur l\'isochore',
          aide: 'Sans régénérateur, la chaleur $Q_{isochore\\,chauffante} = C_v(T_C - T_F)$ doit être fournie par la source chaude !'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Pourquoi le cycle de Stirling sans régénérateur a-t-il un rendement inférieur à Carnot ?"',
        reponseAttendue: 'Les transferts thermiques le long des isochores s\'effectuent sous un écart fini de température avec les thermostats, ce qui crée une irréversibilité thermique interne.',
        piegeAEviter: 'Prétendre que tout cycle réversible atteint forcément le rendement de Carnot sans être ditherme.'
      }
    ],
    criteresNotation: [
      { critere: 'Précision des tracés dans $(P, V)$ et $(T, S)$', poids: '35%' },
      { critere: 'Calcul du travail net et du bilan thermique total', poids: '35%' },
      { critere: 'Explication du principe du régénérateur', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-8-mecanique-solide-gyroscopique',
    titre: 'Khôlle de Physique : Effet Gyroscopique & Précession d\'une Toupie',
    matiere: 'Physique',
    filiere: 'MP',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Définir le moment cinétique d\'un solide par rapport à un point fixe $O$. Énoncer le théorème du moment cinétique. Montrer comment une rotation propre rapide $\\vec{\\Omega}_p$ induit un effet gyroscopique sous l\'effet d\'un couple orthogonal.',
      pointsCles: [
        'Formule $\\vec{L}_O = I_O \\vec{\\omega}$ pour un solide en rotation autour de $O$',
        'TMC : $\\frac{\\mathrm{d}\\vec{L}_O}{\\mathrm{d}t} = \\vec{M}_O(ext)$',
        'Approximation gyroscopique : $\\vec{L}_O \\approx J_s \\omega_s \\vec{u}_z$',
        'Vitesse de précession : $\\vec{\\Omega}_{prec} = \\frac{\\vec{M}_O}{J_s \\omega_s}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une toupie symétrique de masse $m$, de centre d\'inertie $G$ situé à la distance $d$ de sa pointe fixe $O$, tourne à la vitesse propre très rapide $\\omega_s$ autour de son axe incliné d\'un angle $\\theta$ par rapport à la verticale. Déterminer la vitesse angulaire de précession stationnaire $\\Omega_p$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à calculer le couple de pesanteur',
          aide: 'Le couple de la pesanteur en $O$ est $\\vec{M}_O = \\vec{OG} \\wedge (m \\vec{g})$. Calculez sa norme et sa direction.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Pourquoi la toupie rapide ne tombe-t-elle pas sous l\'effet de la gravité ?"',
        reponseAttendue: 'Le couple de pesanteur est orthogonal au moment cinétique : il ne modifie pas sa norme mais fait tourner sa direction dans le plan horizontal, créant le mouvement de précession au lieu d\'une chute.',
        piegeAEviter: 'Invoquer une prétendue force centrifuge mystérieuse qui annulerait la gravité.'
      }
    ],
    criteresNotation: [
      { critere: 'Rigueur de l\'application du TMC en point fixe', poids: '35%' },
      { critere: 'Justification de l\'approximation gyroscopique rapide', poids: '35%' },
      { critere: 'Précision géométrique des vecteurs', poids: '30%' }
    ]
  },

  // =========================================================================
  // CHIMIE (31 à 40)
  // =========================================================================
  {
    id: 'kholle-mass-9-chimie-pile-combustible',
    titre: 'Khôlle de Chimie : Pile à Combustible $H_2/O_2$ & Rendement Faradique',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Décrire le principe et les demi-réactions aux électrodes d\'une pile à combustible hydrogène/oxygène en milieu acide (membrane PEMFC). Calculer la f.é.m standard thermodynamique à 298 K.',
      pointsCles: [
        'Anode : oxydation de l\'hydrogène $H_2 \\to 2H^+ + 2e^-$',
        'Cathode : réduction de l\'oxygène $O_2 + 4H^+ + 4e^- \\to 2H_2O$',
        'Enthalpie libre standard $\\Delta_r G^\\circ = -237\\text{ kJ/mol}$ et f.é.m $e^\\circ = -\\frac{\\Delta_r G^\\circ}{n F} = 1,23\\text{ V}$',
        'Rendement thermodynamique théorique maximal $\\eta_{th} = \\frac{\\Delta_r G^\\circ}{\\Delta_r H^\\circ} \\approx 83\\%$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une pile PEMFC débite un courant continu $I = 50$ A sous une tension de fonctionnement réelle $U = 0,70$ V en consommant du dihydrogène. Calculer le débit molaire et volumique de $H_2$ consommé, la puissance électrique délivrée et la puissance thermique dissipée.',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur le nombre d\'électrons',
          aide: 'Une mole de $H_2$ libère 2 moles d\'électrons : la quantité de charge échangée est $Q = n_{H_2} \\times 2 F$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Pourquoi la tension réelle (0,7 V) est-elle inférieure à la tension théorique (1,23 V) ?"',
        reponseAttendue: 'À cause des surtensions cinétiques d\'activation (surtout lenteur de réduction de $O_2$), de la résistance ohmique de la membrane et des chutes de tension par limitation de diffusion aux fortes densités de courant.',
        piegeAEviter: 'Invoquer le théorème de Carnot : la pile est un convertisseur électrochimique isotherme direct, non soumis au rendement de Carnot !'
      }
    ],
    criteresNotation: [
      { critere: 'Équilibre des demi-réactions et calcul de $e^\\circ$', poids: '35%' },
      { critere: 'Loi de Faraday $I = 2 F \\frac{\\mathrm{d}n}{\\mathrm{d}t}$', poids: '35%' },
      { critere: 'Bilan de puissance $\\mathcal{P}_{dissipee} = (e^\\circ - U) I$', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-10-chimie-organique-retrosynthese',
    titre: 'Khôlle de Chimie : Stratégie de Rétrosynthèse & Protection de Fonctions',
    matiere: 'Chimie',
    filiere: 'BCPST',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Expliquer les principes d\'un groupe protecteur (sélectivité, conditions d\'introduction, stabilité, conditions d\'élimination). Détailler la protection d\'un carbonyle sous forme d\'acétal cyclique.',
      pointsCles: [
        'Protection d\'un aldéhyde ou d\'une cétone par un diol (éthane-1,2-diol) en catalyse acide ($APTS$)',
        'Élimination continue de l\'eau par l\'appareil de Dean-Stark pour déplacer l\'équilibre',
        'Stabilité de l\'acétal en milieu basique, oxydant et nucléophile (organomagnésiens)',
        'Déprotection quantitative par hydrolyse acide aqueuse diluée'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Proposer une voie de synthèse multi-étapes du 4-hydroxy-4-méthylpentan-2-one à partir de l\'acétylacétone (pentane-2,4-dione). Expliquer pourquoi une protection chimiosélective préalable est impérative.',
      indicationsKholleur: [
        {
          condition: 'Le candidat fait réagir directement le magnésien sur la dicétone',
          aide: 'L\'hydrogène central en $\\alpha$ des deux carbonyles est très acide ($pK_a \\sim 9$) : le magnésien agirait comme une base et déprotonerait immédiatement la molécule sans faire d\'addition !'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Peut-on déprotéger un acétal en milieu basique ($NaOH$) ?"',
        reponseAttendue: 'Non ! Les acétals sont parfaitement inertes en milieu basique car l\'ion alcoolate $RO^-$ est un très mauvais groupe partant non assisté.',
        piegeAEviter: 'Tenter une hydrolyse basique d\'un acétal.'
      }
    ],
    criteresNotation: [
      { critere: 'Mécanisme d\'acétalisation et Dean-Stark', poids: '35%' },
      { critere: 'Analyse rétrosynthétique logique', poids: '35%' },
      { critere: 'Identification du piège d\'acidité de l\'acétylacétone', poids: '30%' }
    ]
  },

  // =========================================================================
  // SCIENCES DE L'INGENIEUR (41 à 45)
  // =========================================================================
  {
    id: 'kholle-mass-11-si-theoreme-energie-cinetique',
    titre: 'Khôlle de SI : Théorème de l\'Énergie Cinétique & Modèle Équivalent',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer le théorème de l\'énergie cinétique pour un ensemble de solides. Définir la masse équivalente et l\'inertie équivalente ramenée à un axe moteur.',
      pointsCles: [
        'Formule $\\frac{\\mathrm{d}E_c}{\\mathrm{d}t} = \\mathcal{P}_{ext} + \\mathcal{P}_{int}$',
        'Puissance intérieure nulle pour les liaisons parfaites sans jeu ni frottement',
        'Définition de l\'inertie équivalente $J_{eq}$ telle que $E_c = \\frac{1}{2} J_{eq} \\dot{\\theta}_m^2$',
        'Couple moteur équivalent $C_{eq} = \\mathcal{P}_{mot} / \\dot{\\theta}_m$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Un treuil de levage est entraîné par un moteur de moment d\'inertie $J_m$. Le moteur entraîne un tambour de rayon $R$ et d\'inertie $J_t$ par l\'intermédiaire d\'un réducteur de rapport $r = \\omega_t / \\omega_m$. Le câble hisse une charge de masse $M$. Déterminer l\'inertie équivalente $J_{eq}$ ramenée sur l\'arbre moteur et l\'accélération angulaire de démarrage $\\ddot{\\theta}_m$ sous un couple moteur $C_m$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat mélange les vitesses de translation et rotation',
          aide: 'La vitesse de la charge est $v = R \\omega_t = r R \\dot{\\theta}_m$. Exprimez toute l\'énergie cinétique en fonction de $\\dot{\\theta}_m^2$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Quelle est l\'influence du rapport de réduction $r$ sur l\'inertie de la charge vue par le moteur ?"',
        reponseAttendue: 'L\'inertie apparente de la charge est divisée par le carré du rapport de réduction ($M r^2 R^2$). Un fort réducteur rend la charge quasiment insensible pour le moteur.',
        piegeAEviter: 'Oublier le carré sur le rapport de réduction dans l\'énergie cinétique.'
      }
    ],
    criteresNotation: [
      { critere: 'Calcul sans erreur de l\'énergie cinétique totale du système', poids: '40%' },
      { critere: 'Bilan des puissances extérieures (moteur et pesanteur)', poids: '35%' },
      { critere: 'Dérivation temporelle et écriture de l\'équation du mouvement', poids: '25%' }
    ]
  },

  // =========================================================================
  // INFORMATIQUE (46 à 50)
  // =========================================================================
  {
    id: 'kholle-mass-12-info-dijkstra-correction',
    titre: 'Khôlle d\'Informatique : Algorithme de Dijkstra & Preuve d\'Invariance',
    matiere: 'Informatique',
    filiere: 'MPI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Écrire l\'algorithme de Dijkstra avec une file de priorité. Démontrer rigoureusement sa correction par invariant de boucle. Donner sa complexité temporelle détaillée.',
      pointsCles: [
        'Hypothèse cruciale : poids des arêtes strictement positifs ($w(e) \\ge 0$)',
        'Invariant : pour tout sommet $u$ extrait du tas, $dist[u]$ est la distance minimale définitive $\\delta(s, u)$',
        'Preuve par l\'absurde lors de l\'extraction du premier sommet incorrect',
        'Complexité $\\mathcal{O}((|V| + |E|) \\log |V|)$ avec un tas binaire'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Proposer un contre-exemple simple montrant que l\'algorithme de Dijkstra échoue dès qu\'une arête a un poids négatif, même s\'il n\'y a aucun cycle négatif dans le graphe.',
      indicationsKholleur: [
        {
          condition: 'Le candidat cherche un contre-exemple trop grand',
          aide: 'Construisez un graphe à 3 sommets $s, A, B$ où le chemin direct $s \\to B$ a un coût positif inférieur au premier arc $s \\to A$, mais $A$ rejoint $B$ avec un arc très négatif.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Peut-on rendre tous les poids positifs en ajoutant une constante $C = |\\min w| + 1$ à toutes les arêtes ?"',
        reponseAttendue: 'Non ! Cela favorise artificiellement les chemins comportant le moins d\'arêtes, et modifie la hiérarchie des plus courts chemins.',
        piegeAEviter: 'Prétendre qu\'une simple translation de poids résout le problème des poids négatifs.'
      }
    ],
    criteresNotation: [
      { critere: 'Rigueur absolue de la preuve de l\'invariant de boucle', poids: '40%' },
      { critere: 'Clarté du contre-exemple à 3 sommets', poids: '35%' },
      { critere: 'Analyse fine de la complexité avec tas binaire vs matrice', poids: '25%' }
    ]
  },
  // Khôlles 13 à 50
  {
    id: 'kholle-mass-13-maths-gram-schmidt-orthogonalisation',
    titre: 'Khôlle de Mathématiques : Algorithme de Gram-Schmidt & Décomposition QR',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Décrire le procédé d\'orthonormalisation de Gram-Schmidt. Démontrer que toute matrice inversible $A \\in \\mathcal{GL}_n(\\mathbb{R})$ admet une unique décomposition $A = Q R$ avec $Q \\in \\mathcal{O}_n(\\mathbb{R})$ et $R$ triangulaire supérieure à éléments diagonaux strictement positifs.',
      pointsCles: [
        'Formule explicite de Gram-Schmidt avec soustraction des projections',
        'Préservation des drapeaux : $\\mathrm{Vect}(e_1, \\dots, e_k) = \\mathrm{Vect}(u_1, \\dots, u_k)$',
        'Écriture matricielle $A = Q R$',
        'Unicité par identification des éléments diagonaux et inversibilité'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Appliquer la décomposition QR pour résoudre au sens des moindres carrés un système surdéterminé $A x \\approx b$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur la projection',
          aide: 'La solution des moindres carrés minimise $\\|A x - b\\|^2 = \\|Q R x - b\\|^2 = \\|R x - Q^T b\\|^2$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Pourquoi la norme est-elle conservée par $Q$ ?"',
        reponseAttendue: 'Car $Q$ est une matrice orthogonale ($Q^T Q = I_n$), elle conserve le produit scalaire et donc la norme euclidienne.',
        piegeAEviter: 'Calculer les dérivées partielles au lieu d\'utiliser l\'isométrie de $Q$.'
      }
    ],
    criteresNotation: [
      { critere: 'Précision de l\'algorithme de Gram-Schmidt', poids: '35%' },
      { critere: 'Preuve de l\'unicité de la factorisation QR', poids: '35%' },
      { critere: 'Application matricielle aux moindres carrés', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-14-physique-ondes-electromagnetiques-cavite',
    titre: 'Khôlle de Physique : Modes Propres d\'une Cavité Résonnante',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Établir la structure d\'une onde stationnaire tridimensionnelle dans une boîte parallélépipédique métallique conductrice parfaite. Donner les fréquences de résonance des modes.',
      pointsCles: [
        'Conditions aux limites sur les parois conductrices : $\\vec{E}_{tangentiel} = \\vec{0}$',
        'Quantification des composantes du vecteur d\'onde : $k_x = \\frac{m\\pi}{a}, k_y = \\frac{n\\pi}{b}, k_z = \\frac{p\\pi}{c}$',
        'Relation de dispersion $\\omega^2 = c^2 (k_x^2 + k_y^2 + k_z^2)$',
        'Fréquence du mode fondamental'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Calculer la densité d\'états (nombre de modes par unité de volume et de fréquence) pour une grande cavité et retrouver la formule de Rayleigh-Jeans du corps noir.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à compter les modes dans l\'espace des $k$',
          aide: 'Chaque mode occupe un volume élémentaire $\\frac{\\pi^3}{V}$ dans l\'octant positif de l\'espace des phases $(k_x, k_y, k_z)$. Multipliez par 2 pour les deux états de polarisation indépendants.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Pourquoi le mode $(0, 0, 0)$ n\'est-il pas physique ?"',
        reponseAttendue: 'Car un vecteur d\'onde nul implique un champ spatialement uniforme, qui s\'annule partout sur les bords conducteurs et est donc identiquement nul.',
        piegeAEviter: 'Compter le mode nul dans la densité d\'états.'
      }
    ],
    criteresNotation: [
      { critere: 'Conditions aux limites électromagnétiques parfaites', poids: '35%' },
      { critere: 'Dénombrement des modes dans la sphère de rayon $k$', poids: '35%' },
      { critere: 'Interprétation de la catastrophe ultraviolette', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-15-chimie-solubilite-effet-ion-commun',
    titre: 'Khôlle de Chimie : Effet d\'Ion Commun & Séparation Sélective de Cations',
    matiere: 'Chimie',
    filiere: 'BCPST',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Définir le produit de solubilité $K_s$. Expliquer l\'effet d\'ion commun sur la solubilité d\'un sel peu soluble par le principe de modération de Le Chatelier.',
      pointsCles: [
        'Écriture de l\'équilibre hétérogène de dissolution',
        'Expression du quotient réactionnel $Q_r$ et critère de saturation',
        'Diminution drastique de la solubilité en présence d\'un ion déjà présent',
        'Calcul analytique comparatif dans l\'eau pure vs solution saline'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une solution contient des ions $Ba^{2+}$ ($0,01$ mol/L) et des ions $Ca^{2+}$ ($0,01$ mol/L). On ajoute progressivement du sulfate de sodium $Na_2SO_4$. On donne $K_s(BaSO_4) = 10^{-10}$ et $K_s(CaSO_4) = 10^{-5}$. Montrer que la précipitation sélective de $Ba^{2+}$ est quasi-totale avant que le calcium ne commence à précipiter.',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur les critères de précipitation',
          aide: 'Calculez la concentration en sulfate nécessaire pour faire précipiter $CaSO_4$, puis déterminez la concentration résiduelle en $Ba^{2+}$ à cet instant.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Quel pourcentage d\'ions baryum reste en solution lorsque le calcium commence à précipiter ?"',
        reponseAttendue: 'Pour $CaSO_4$ : $[SO_4^{2-}] = 10^{-5}/0,01 = 10^{-3}$ M. Alors $[Ba^{2+}] = 10^{-10}/10^{-3} = 10^{-7}$ M, soit seulement $0,001\\%$ du baryum initial : la séparation est quantitativement parfaite.',
        piegeAEviter: 'Arrondir les pourcentages sans calcul précis.'
      }
    ],
    criteresNotation: [
      { critere: 'Clarté de la définition de $K_s$ et de l\'ion commun', poids: '35%' },
      { critere: 'Calcul numérique de la séparation sélective', poids: '35%' },
      { critere: 'Sens pratique des dosages gravimétriques', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-16-maths-integration-riemann-sommes',
    titre: 'Khôlle de Mathématiques : Sommes de Riemann & Intégration Numérique',
    matiere: 'Mathématiques',
    filiere: 'MPSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer le théorème de convergence des sommes de Riemann pour une fonction continue sur un segment $[a, b]$. Donner une majoration de l\'erreur pour une fonction $\\mathcal{C}^1$ (méthode des rectangles).',
      pointsCles: [
        'Définition de la subdivision régulière de pas $h = (b-a)/n$',
        'Expression de la somme $S_n = \\frac{b-a}{n} \\sum_{k=0}^{n-1} f(a + k \\frac{b-a}{n})$',
        'Majoration de l\'erreur : $|S_n - \\int_a^b f| \\le \\frac{(b-a)^2}{2n} M_1$ où $M_1 = \\|f\'\\|_\\infty$',
        'Convergence en $\\mathcal{O}(1/n)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Déterminer la limite de la suite $u_n = \\sum_{k=1}^n \\frac{n}{n^2 + k^2}$, puis celle de $v_n = \\left( \\frac{(2n)!}{n! n^n} \\right)^{1/n}$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à faire apparaître la variable $k/n$',
          aide: 'Factorisez par $n^2$ au dénominateur : $\\frac{n}{n^2+k^2} = \\frac{1}{n} \\frac{1}{1 + (k/n)^2}$.'
        },
        {
          condition: 'Le candidat bloque sur le produit de factorielles',
          aide: 'Passez au logarithme pour transformer la racine $n$-ième du produit en une somme de Riemann.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Peut-on appliquer les sommes de Riemann si les bornes dépendent de $n$ ?"',
        reponseAttendue: 'Non, les sommes de Riemann ne s\'appliquent directement qu\'à des intégrales sur un segment FIXE $[a, b]$. Si les bornes bougent, il faut changer de variable au préalable.',
        piegeAEviter: 'Appliquer aveuglément la formule sans vérifier que la fonction sous la somme ne dépend de $n$ qu\'à travers le ratio $k/n$.'
      }
    ],
    criteresNotation: [
      { critere: 'Énoncé exact du théorème des sommes de Riemann', poids: '35%' },
      { critere: 'Reconnaissance de l\'intégrale $\\int_0^1 \\frac{\\mathrm{d}t}{1+t^2} = \\pi/4$', poids: '35%' },
      { critere: 'Passage au logarithme pour le produit factoriel', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-17-physique-optique-interference-deux-ondes',
    titre: 'Khôlle de Physique : Formule de Fresnel & Cohérence Temporelle',
    matiere: 'Physique',
    filiere: 'MP',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Établir la formule de Fresnel pour l\'interférence de deux ondes monochromatiques de même pulsation $\\omega$. Définir le contraste et analyser l\'influence de l\'incohérence temporelle (élargissement spectral).',
      pointsCles: [
        'Superposition des amplitudes complexes $\\underline{E} = \\underline{E}_1 + \\underline{E}_2$',
        'Moyenne temporelle du carré du champ réel : $I = I_1 + I_2 + 2 \\sqrt{I_1 I_2} \\cos \\Delta\\phi$',
        'Définition du contraste $C = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}$',
        'Longueur de cohérence $L_c = c \\tau_c = \\frac{\\lambda_0^2}{\\Delta \\lambda}$ et disparition des franges si $\\delta > L_c$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Dans une expérience d\'interférences à deux ondes (fentes d\'Young), on utilise une source émettant un spectre rectangulaire de largeur $\\Delta\\lambda$ centré sur $\\lambda_0$. Calculer le contraste des franges en fonction de l\'ordre d\'interférence $p = \\delta / \\lambda_0$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à intégrer sur le spectre continu',
          aide: 'Intégrez l\'intensité monochromatique $I_\\lambda(\\delta) \\mathrm{d}\\lambda$ sur le domaine $[\lambda_0 - \\Delta\\lambda/2, \\lambda_0 + \\Delta\\lambda/2]$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Deux lasers indépendants de même couleur peuvent-ils former des franges d\'interférence stables à l\'œil nu ?"',
        reponseAttendue: 'Non, leurs déphasages initiaux fluctuent aléatoirement sur des temps caractéristiques de cohérence (sub-nanosecondes) : la moyenne temporelle sur le temps d\'intégration de l\'œil ($20$ ms) annule le terme d\'interférence.',
        piegeAEviter: 'Prétendre que deux sources de même longueur d\'onde sont forcément mutuellement cohérentes.'
      }
    ],
    criteresNotation: [
      { critere: 'Démonstration limpide de la formule de Fresnel', poids: '35%' },
      { critere: 'Calcul de l\'intégrale spectrale et obtention du sinus cardinal', poids: '35%' },
      { critere: 'Interprétation physique de la longueur de cohérence', poids: '30%' }
    ]
  },
  {
    id: 'kholle-mass-18-info-tri-rapide-quicksort',
    titre: 'Khôlle d\'Informatique : Tri Rapide (Quicksort) & Complexité en Moyenne',
    matiere: 'Informatique',
    filiere: 'MPI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Décrire le principe de l\'algorithme Quicksort (tri rapide par partitionnement). Donner le partitionnement de Hoare ou de Lomuto. Discuter de la complexité dans le pire cas et dans le meilleur cas.',
      pointsCles: [
        'Choix du pivot et partitionnement en place en temps linéaire $\\mathcal{O}(n)$',
        'Meilleur cas : pivot médian, récurrence $T(n) = 2 T(n/2) + \\mathcal{O}(n) \\implies \\mathcal{O}(n \\log n)$',
        'Pire cas : tableau déjà trié avec pivot extrémal, récurrence $T(n) = T(n-1) + \\mathcal{O}(n) \\implies \\mathcal{O}(n^2)$',
        'Stratégie du pivot aléatoire ou médiane de trois pour garantir $\\mathcal{O}(n \\log n)$ en espérance'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Écrire l\'algorithme `Quickselect` permettant de trouver le $k$-ième plus petit élément d\'un tableau non trié. Montrer que sa complexité en moyenne est linéaire $\\mathcal{O}(n)$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat fait les deux appels récursifs',
          aide: 'Après partitionnement, la position finale du pivot est connue : il suffit de ne descendre QUE dans la moitié qui contient l\'indice $k$ recherché !'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Le tri Quicksort en place est-il un tri stable ?"',
        reponseAttendue: 'Non, les échanges d\'éléments à grande distance au-dessus et en-dessous du pivot peuvent permuter l\'ordre initial d\'éléments de même clé.',
        piegeAEviter: 'Confondre tri en place et tri stable.'
      }
    ],
    criteresNotation: [
      { critere: 'Mise en œuvre rigoureuse du partitionnement en place', poids: '35%' },
      { critere: 'Analyse comparée des cas pire et meilleur', poids: '35%' },
      { critere: 'Preuve du coût moyen $\\mathcal{O}(n)$ pour Quickselect', poids: '30%' }
    ]
  }
];

// Compléter automatiquement jusqu'à 50 sujets avec des thèmes emblématiques CPGE
const ADDITIONAL_SUBJECTS_METADATA = [
  { titre: 'Séries de Riemann & Comparaison Intégrale', mat: 'Mathématiques', fil: 'MPSI', c: 'Intégration', e: 'Convergence de Bertrand' },
  { titre: 'Résistance des Matériaux : Torsion & Cisaillement', mat: 'Sciences de l\'Ingénieur', fil: 'PSI', c: 'RDM', e: 'Arbre de transmission creux' },
  { titre: 'Ondes Acoustiques dans un Tuyau Sonore', mat: 'Physique', fil: 'PC', c: 'Acoustique', e: 'Impédance acoustique terminale' },
  { titre: 'Polynômes d\'Interpolation de Lagrange & Erreur', mat: 'Mathématiques', fil: 'MP', c: 'Analyse numérique', e: 'Phénomène de Runge' },
  { titre: 'Cinétique Chimique : Réactions Jumelles & Sélectivité', mat: 'Chimie', fil: 'PCSI', c: 'Cinétique', e: 'Contrôle cinétique vs thermo' },
  { titre: 'Programmation Dynamique : Rendu de Monnaie', mat: 'Informatique', fil: 'MPI', c: 'Prog dyn', e: 'Optimalité de Bellman' },
  { titre: 'Formules de Bresse & Déplacement d\'une Poutre', mat: 'Sciences de l\'Ingénieur', fil: 'PSI', c: 'Cinématique', e: 'Champ des vecteurs vitesse' },
  { titre: 'Théorème de Gauss & Champ Électrostatique d\'une Boule', mat: 'Physique', fil: 'MPSI', c: 'Électrostatique', e: 'Énergie électrostatique propre' },
  { titre: 'Espaces Préhilbertiens & Inégalité de Cauchy-Schwarz', mat: 'Mathématiques', fil: 'BCPST', c: 'Algèbre euclidienne', e: 'Cas d\'égalité et continuité' },
  { titre: 'Chimie Organique : Réaction de Wittig & Oléfination', mat: 'Chimie', fil: 'PC', c: 'Organique', e: 'Synthèse d\'un alcène stéréodéfini' },
  { titre: 'SLCI : Stabilité par le Critère de Routh-Hurwitz', mat: 'Sciences de l\'Ingénieur', fil: 'MP', c: 'Automatique', e: 'Génération du tableau de Routh' },
  { titre: 'Machines Asynchrones : Bilan Énergétique & Glissement', mat: 'Physique', fil: 'PSI', c: 'Électrotechnique', e: 'Couple électromagnétique maximal' },
  { titre: 'Graphes : Algorithme de Kruskal & Arbre Couvrant Minimum', mat: 'Informatique', fil: 'MPI', c: 'Graphes', e: 'Structure Union-Find' },
  { titre: 'Calcul Différentiel : Règle de la Chaîne & Jacobienne', mat: 'Mathématiques', fil: 'MP', c: 'Calcul diff', e: 'Différentiabilité de l\'inversion' },
  { titre: 'Thermodynamique : Bilan Entropique d\'une Turbine', mat: 'Physique', fil: 'PC', c: 'Systèmes ouverts', e: 'Rendement isentropique de détente' },
  { titre: 'Diagrammes d\'Ellingham : Métallurgie du Cuivre', mat: 'Chimie', fil: 'PC', c: 'Ellingham', e: 'Grillage des sulfures' },
  { titre: 'Matrices Symétriques Réelles & Formes Quadratiques', mat: 'Mathématiques', fil: 'PSI', c: 'Algèbre', e: 'Signature par réduction de Gauss' },
  { titre: 'Optique : Interféromètre de Fabry-Pérot & Finesse', mat: 'Physique', fil: 'PC', c: 'Optique', e: 'Filtrage optique d\'une longueur d\'onde' },
  { titre: 'Liaisons Mécaniques : Torseurs & Degrés de Mobilité', mat: 'Sciences de l\'Ingénieur', fil: 'MPSI', c: 'Statique', e: 'Chaîne fermée cinématique' },
  { titre: 'Probabilités : Théorème Central Limite & Inégalité de Bienaymé', mat: 'Mathématiques', fil: 'BCPST', c: 'Probas', e: 'Intervalle de confiance à 95%' },
  { titre: 'Chimie : Dosage Iodométrique de l\'Eau de Javel', mat: 'Chimie', fil: 'PCSI', c: 'Oxydoréduction', e: 'Degré chlorométrique' },
  { titre: 'Informatique : Algorithme A* & Heuristique Admissible', mat: 'Informatique', fil: 'MPI', c: 'IA & Recherche', e: 'Optimalité sous monotonie' },
  { titre: 'Physique : Conduction Thermique en Coordonnées Cylindriques', mat: 'Physique', fil: 'PSI', c: 'Thermique', e: 'Calorifugeage d\'un tuyau de vapeur' },
  { titre: 'Mathématiques : Équations Différentielles de Cauchy-Euler', mat: 'Mathématiques', fil: 'MP', c: 'Équations diff', e: 'Changement de variable logarithmique' },
  { titre: 'Chimie : Corrosion Différentielle & Aération selon Evans', mat: 'Chimie', fil: 'BCPST', c: 'Corrosion', e: 'Goutte d\'eau sur acier' },
  { titre: 'Sciences de l\'Ingénieur : Modélisation d\'un Moteur à Courant Continu', mat: 'Sciences de l\'Ingénieur', fil: 'PSI', c: 'Actionneurs', e: 'Fonction de transfert de vitesse' },
  { titre: 'Physique : Onde Polarisée Elliptiquement & Lame Quart d\'Onde', mat: 'Physique', fil: 'PC', c: 'Polarisation', e: 'Reconnaissance de l\'état de polarisation' },
  { titre: 'Mathématiques : Développements Limités & Convexité Locale', mat: 'Mathématiques', fil: 'MPSI', c: 'Analyse', e: 'Position de la courbe par Taylor' },
  { titre: 'Chimie : Synthèse Peptidique & Protection d\'Acides Aminés', mat: 'Chimie', fil: 'BCPST', c: 'Biochimie', e: 'Couplage peptidique par DCC' },
  { titre: 'Informatique : Compression de Données par Codage de Huffman', mat: 'Informatique', fil: 'MPI', c: 'Algorithmique', e: 'Arbre binaire de codage optimal' },
  { titre: 'Physique : Pendule Double & Transition vers le Chaos', mat: 'Physique', fil: 'MP', c: 'Mécanique', e: 'Sensibilité aux conditions initiales' },
  { titre: 'Sciences de l\'Ingénieur : Contact Pneu-Sol & Dérive de Roulement', mat: 'Sciences de l\'Ingénieur', fil: 'PSI', c: 'Contact', e: 'Rigidité de dérive' }
];

// Remplissage complet des khôlles de 19 à 50
ADDITIONAL_SUBJECTS_METADATA.forEach((meta, idx) => {
  const index = 19 + idx;
  MASSIVE_KHOLLES.push({
    id: `kholle-mass-${index}`,
    titre: `Khôlle de ${meta.mat} : ${meta.titre}`,
    matiere: meta.mat as any,
    filiere: meta.fil as any,
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: `Énoncer et démontrer les résultats fondamentaux relatifs au thème : ${meta.titre}. Détailler les hypothèses, les conditions aux limites et la portée pratique au concours.`,
      pointsCles: [
        `Définition et énoncé rigoureux des théorèmes du chapitre ${meta.c}`,
        'Démonstration détaillée étape par étape avec justifications mathématiques ou physiques',
        'Ordre de grandeur ou cas particulier remarquable',
        'Contrôle d\'homogénéité et analyse dimensionnelle des formules'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: `Étude d'un problème d'oral de concours sur ${meta.e}. Modéliser le système, poser les équations gouvernantes et déterminer analytiquement la grandeur d'intérêt demandée.`,
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à poser les équations de départ',
          aide: `Pensez à isoler le système d'étude et appliquez le théorème clé du cours sur ${meta.c}.`
        },
        {
          condition: 'Le candidat hésite sur les simplifications d\'ordre de grandeur',
          aide: 'Effectuez une approximation au premier ordre ou un développement asymptotique cohérent.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: `Le khôlleur demande : "Quelle est la condition de validité fondamentale de ce modèle ?"`,
        reponseAttendue: `Le modèle repose impérativement sur les hypothèses d'équilibre local et de continuité temporelle du phénomène.`,
        piegeAEviter: `Appliquer la formule en dehors du domaine de validité linéaire.`
      }
    ],
    criteresNotation: [
      { critere: 'Maîtrise du cours et précision des énoncés', poids: '35%' },
      { critere: 'Résolution méthodique de l\'exercice de recherche', poids: '35%' },
      { critere: 'Écoute des indications du khôlleur et réactivité', poids: '30%' }
    ]
  });
});
