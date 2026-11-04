import type { KholleSubject } from './cpgeData';

export const ADDITIONAL_KHOLLE_SUBJECTS: KholleSubject[] = [
  {
    id: 'kholle-physique-oppm-conducteur',
    titre: 'Khôlle de Physique : Réflexion d\'une OPPM sur un Conducteur Parfait & Onde Stationnaire',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Établir la structure d\'une onde plane progressive monochromatique (OPPM) dans le vide. Rappeler les relations de passage du champ électromagnétique à l\'interface entre le vide et un conducteur parfait. En déduire le coefficient de réflexion en amplitude.',
      pointsCles: [
        'Équation de d\'Alembert et solution OPPM $\\vec{E} = E_0 \\cos(\\omega t - k z) \\vec{u}_x$',
        'Champ nul à l\'intérieur d\'un conducteur parfait : $\\vec{E}_{int} = \\vec{0}$ et $\\vec{B}_{int} = \\vec{0}$',
        'Continuité de la composante tangentielle : $\\vec{E}_{t, 2} - \\vec{E}_{t, 1} = \\vec{0}$',
        'Déduction de l\'onde réfléchie avec déphasage de $\\pi$ : $r = -1$ et $\\vec{E}_r(0, t) = -\\vec{E}_i(0, t)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une onde incidente se propageant selon $+z$ arrive sous incidence normale sur un miroir plan conducteur parfait situé en $z=0$.\n1. Écrire le champ électromagnétique total $(\\vec{E}_{tot}, \\vec{B}_{tot})$ dans le demi-espace $z < 0$.\n2. Montrer qu\'il s\'agit d\'une onde stationnaire pure. Déterminer la position des nœuds et des ventres de champ électrique et magnétique.\n3. Exprimer le vecteur de Poynting instantané et sa moyenne temporelle. Conclure sur le transport d\'énergie.',
      indicationsKholleur: [
        {
          condition: 'Le candidat mélange les variables d\'espace et de temps',
          aide: 'Utilisez la transformation trigonométrique $\\cos(a) - \\cos(b) = -2 \\sin(\\frac{a+b}{2}) \\sin(\\frac{a-b}{2})$ pour découpler la dépendance en $z$ et en $t$.'
        },
        {
          condition: 'Le candidat hésite sur le déphasage spatio-temporel',
          aide: 'Remarquez que les ventres de champ électrique correspondent exactement aux nœuds de champ magnétique et réciproquement.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Existe-t-il des courants électriques dans le conducteur parfait, et où sont-ils localisés ?"',
        reponseAttendue: 'Oui ! Par la relation de passage $\\vec{B}_2 - \\vec{B}_1 = \\mu_0 \\vec{j}_s \\wedge \\vec{n}_{1\\to 2}$, il existe des courants surfaciques $\\vec{j}_s$ d\'épaisseur nulle circulant rigoureusement à la surface du conducteur parfait.',
        piegeAEviter: 'Dire qu\'aucun courant n\'existe car le champ électrique intérieur est nul (confusion entre volume et surface).'
      }
    ],
    criteresNotation: [
      { critere: 'Justification rigoureuse des conditions aux limites', poids: '35%' },
      { critere: 'Découplage spatial/temporel de l\'onde stationnaire', poids: '30%' },
      { critere: 'Calcul du vecteur de Poynting et interprétation', poids: '20%' },
      { critere: 'Sens physique et réponse aux questions de cours', poids: '15%' }
    ]
  },
  {
    id: 'kholle-maths-dirichlet-cv-dominee',
    titre: 'Khôlle de Mathématiques : Convergence Dominée & Intégrale de Dirichlet',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer avec une rigueur absolue le théorème de convergence dominée de Lebesgue pour une suite de fonctions $(f_n)_{n \\in \\mathbb{N}}$ sur un intervalle $I$ quelconque. Donner un contre-exemple explicite lorsque l\'hypothèse de domination n\'est pas satisfaite.',
      pointsCles: [
        'Hypothèse 1 : Chaque $f_n$ est continue par morceaux (ou mesurable) sur $I$',
        'Hypothèse 2 : Convergence simple vers une fonction $f$ continue par morceaux sur $I$',
        'Hypothèse 3 (fondamentale) : Il existe une fonction dominante $\\phi : I \\to \\mathbb{R}^+$ INTÉGRABLE sur $I$ indépendante de $n$ telle que $\\forall n, |f_n| \\le \\phi$',
        'Conclusion : $\\lim_{n \\to +\\infty} \\int_I f_n = \\int_I f$',
        'Contre-exemple : $f_n(x) = n e^{-n x}$ sur $]0, 1[$ (limite nulle mais intégrale égale à $1 - e^{-n} \\to 1 \\neq 0$)'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On s\'intéresse à l\'intégrale de Dirichlet $I = \\int_0^{+\\infty} \\frac{\\sin t}{t} \\,\\mathrm{d}t$.\n1. Justifier que cette intégrale est semi-convergente mais non absolument convergente.\n2. On pose pour $x > 0$ la fonction $F(x) = \\int_0^{+\\infty} e^{-x t} \\frac{\\sin t}{t} \\,\\mathrm{d}t$. Justifier la continuité de $F$ sur $[0, +\\infty[$.\n3. Montrer que $F$ est de classe $\\mathcal{C}^1$ sur $]0, +\\infty[$ et calculer $F\'(x)$.\n4. En déduire la valeur exacte de l\'intégrale de Dirichlet $I = F(0)$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à dériver sous le signe intégral',
          aide: 'Appliquez le théorème de dérivation sous le signe somme sur tout segment $[a, +\\infty[$ avec $a > 0$ pour dominer par $e^{-a t}$.'
        },
        {
          condition: 'Le candidat ne sait pas calculer l\'intégrale de la dérivée',
          aide: 'Pour $F\'(x) = -\\int_0^{+\\infty} e^{-x t} \\sin t \\,\\mathrm{d}t$, utilisez la partie imaginaire de l\'exponentielle complexe $\\mathrm{Im}(e^{(-x+j)t})$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous interrompt : "Pourquoi ne peut-on pas appliquer le théorème de dérivation sous le signe intégral directement sur $[0, +\\infty[$ ?"',
        reponseAttendue: 'Car la dérivée de l\'intégrande par rapport à $x$ vaut $-e^{-x t} \\sin t$. En $x=0$, $|-e^{-0 t} \\sin t| = |\\sin t|$, qui n\'est PAS intégrable sur $[0, +\\infty[$. La domination échoue en 0 !',
        piegeAEviter: 'Tenter une domination globale sur $[0, +\\infty[$ sans restreindre à $x \\ge a > 0$.'
      }
    ],
    criteresNotation: [
      { critere: 'Précision chirurgicale sur les intervalles de domination', poids: '40%' },
      { critere: 'Démonstration de la semi-convergence (intégration par parties)', poids: '25%' },
      { critere: 'Calcul rigoureux de la primitive $\\arctan$ et limite en $+\\infty$', poids: '20%' },
      { critere: 'Aisance mathématique et clarté au tableau noir', poids: '15%' }
    ]
  },
  {
    id: 'kholle-si-bode-correcteur-pi',
    titre: 'Khôlle de Sciences de l\'Ingénieur : Asservissement & Synthèse d\'un Correcteur PI',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer le critère de stabilité de Nyquist (critère du revers) dans le plan de Bode et le plan de Black. Définir la marge de phase $\\Delta\\phi$ et la marge de gain $\\Delta G$. Quelles sont les valeurs recommandées dans le cahier des charges d\'un asservissement industriel ?',
      pointsCles: [
        'Point critique $(-1, 0)$ dans Nyquist, $(0\\text{ dB}, -180^\\circ)$ dans Black',
        'Marge de phase : $\\Delta\\phi = 180^\\circ + \\phi(\\omega_{0dB})$ avec $\\Delta\\phi \\ge 45^\\circ$',
        'Marge de gain : $\\Delta G = -G_{dB}(\\omega_{-180^\\circ}) \\ge 6\\text{ dB}$ à $12\\text{ dB}$',
        'Compromis classique stabilité / rapidité / précision'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On considère un système asservi à retour unitaire dont la fonction de transfert en boucle ouverte (FTBO) est $H(p) = \\frac{10}{p (1 + 0{,}1 p)^2}$.\n1. Déterminer la classe et l\'ordre du système. Quelle est son erreur statique vis-à-vis d\'une entrée en échelon ?\n2. Tracer l\'allure du diagramme de Bode asymptotique de $H(p)$. Déterminer si le système non corrigé en boucle fermée est stable.\n3. On insère un correcteur Proportionnel-Intégral $C(p) = K_p \\frac{1 + T_i p}{T_i p}$. Expliquer la stratégie de placement du zéro $1/T_i$ pour compenser le pôle dominant du système et régler la marge de phase.',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur la compensation de pôle',
          aide: 'Choisissez $T_i = 0{,}1\\text{ s}$ pour simplifier le facteur $(1 + 0{,}1 p)$ du dénominateur.'
        },
        {
          condition: 'Le candidat n\'arrive pas à calculer la pulsation à 0 dB',
          aide: 'Après simplification, la nouvelle FTBO corrigée s\'écrit $H_{BO, corr}(p) = \\frac{10 K_p}{T_i p^2 (1 + 0{,}1 p)}$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Pourquoi ne pas mettre un gain proportionnel $K_p$ infiniment grand pour rendre le système ultra-rapide ?"',
        reponseAttendue: 'Un gain $K_p$ trop élevé remonte la courbe de gain dans Bode, déplace la pulsation de coupure $\\omega_{0dB}$ vers les hautes fréquences où le déphasage est inférieur à $-180^\\circ$, ce qui réduit à néant la marge de phase et rend le système oscillant puis instable.',
        piegeAEviter: 'Penser qu\'une boucle fermée est toujours stable si le gain statique est positif.'
      }
    ],
    criteresNotation: [
      { critere: 'Justesse du tracé asymptotique et des pentes (-20, -40, -60 dB/décade)', poids: '35%' },
      { critere: 'Compréhension de la compensation pôle-zéro', poids: '30%' },
      { critere: 'Analyse de l\'erreur statique et de traînage', poids: '20%' },
      { critere: 'Qualité du discours technique d\'ingénieur', poids: '15%' }
    ]
  },
  {
    id: 'kholle-info-quicksort-quickselect',
    titre: 'Khôlle d\'Informatique : Tri Rapide, Partition de Hoare & QuickSelect',
    matiere: 'Informatique',
    filiere: 'MPI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Décrire le principe de l\'algorithme de tri rapide (Quicksort). Écrire le pseudo-code de la procédure de partition en place. Établir la relation de récurrence de la complexité dans le meilleur des cas et dans le pire des cas.',
      pointsCles: [
        'Paradigme diviser pour régner : choix d\'un pivot, partitionnement en place, appels récursifs',
        'Partition de Hoare ou Lomuto en temps $\\mathcal{O}(n)$ et espace mémoire $\\mathcal{O}(1)$',
        'Meilleur cas : pivot médian, $T(n) = 2 T(n/2) + \\Theta(n) \\implies \\Theta(n \\log n)$',
        'Pire cas : tableau déjà trié avec pivot au bord, $T(n) = T(n-1) + \\Theta(n) \\implies \\Theta(n^2)$',
        'Complexité moyenne : $\\Theta(n \\log n)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On cherche à déterminer la médiane (ou le $k$-ième plus petit élément) d\'un tableau non trié de $n$ éléments.\n1. Quelle serait la complexité naïve en triant d\'abord le tableau ?\n2. Présenter l\'algorithme de sélection rapide (QuickSelect) qui n\'effectue la récursion que dans un seul des deux sous-tableaux.\n3. Écrire l\'implémentation en Python de `quickselect(T, k)`.\n4. Démontrer que la complexité temporelle moyenne de QuickSelect est linéaire $\\mathcal{O}(n)$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat fait les deux appels récursifs',
          aide: 'Si l\'indice du pivot après partition est égal à $k$, vous avez trouvé ! S\'il est $> k$, le résultat est dans la partie gauche, sinon dans la partie droite. Un seul appel suffit !'
        },
        {
          condition: 'Le candidat n\'arrive pas à sommer la série de récurrence moyenne',
          aide: 'En moyenne la taille du problème est divisée par 2 à chaque étape : $n + n/2 + n/4 + \\dots = n \\sum (1/2)^i = 2n$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Comment éviter à coup sûr le pire cas quadratique $\\mathcal{O}(n^2)$ en pratique ?"',
        reponseAttendue: 'On peut choisir le pivot de manière aléatoire (tri randomisé), utiliser la médiane de trois éléments (premier, milieu, dernier), ou en théorie l\'algorithme de la médiane des médianes (Blum et al.) qui garantit un pire cas en $\\mathcal{O}(n)$.',
        piegeAEviter: 'Dire qu\'en prenant toujours le premier élément du tableau on est tranquille (c\'est justement là que le pire cas survient sur un tableau déjà trié !).'
      }
    ],
    criteresNotation: [
      { critere: 'Correction formelle de l\'algorithme de partition', poids: '35%' },
      { critere: 'Preuve de la complexité moyenne linéaire par série géométrique', poids: '30%' },
      { critere: 'Clarté du code Python et gestion des bornes [gauche, droite]', poids: '20%' },
      { critere: 'Capacité à analyser le comportement aux limites', poids: '15%' }
    ]
  },
  {
    id: 'kholle-chimie-cinetique-chaine',
    titre: 'Khôlle de Chimie : Mécanismes Réactionnels en Chaîne (Synthèse de HBr)',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer l\'Approximation des États Quasi-Stationnaires (AEQS) de Bodenstein. Préciser à quel type d\'espèces elle s\'applique et sous quelles conditions expérimentales elle est légitime. Donner la loi d\'Arrhenius reliant constante de vitesse et énergie d\'activation.',
      pointsCles: [
        'Applicable aux intermédiaires réactionnels très réactifs (radicaux libres, carbocations)',
        'Formulation mathématique : $\\frac{\\mathrm{d}[IR]}{\\mathrm{d}t} \\approx 0$',
        'Conséquence : la vitesse de formation de l\'intermédiaire égale sa vitesse de consommation',
        'Loi d\'Arrhenius : $k(T) = A \\exp\\left(-\\frac{E_a}{R T}\\right)$ avec $A$ facteur pré-exponentiel'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On étudie la synthèse thermique du bromure d\'hydrogène : $H_2(g) + Br_2(g) \\to 2 HBr(g)$.\nLe mécanisme proposé comporte les étapes élémentaires suivantes :\n(1) $Br_2 \\xrightarrow{k_1} 2 Br^\\bullet$ (initiation thermique)\n(2) $Br^\\bullet + H_2 \\xrightarrow{k_2} HBr + H^\\bullet$ (propagation 1)\n(3) $H^\\bullet + Br_2 \\xrightarrow{k_3} HBr + Br^\\bullet$ (propagation 2)\n(4) $H^\\bullet + HBr \\xrightarrow{k_4} H_2 + Br^\\bullet$ (inhibition)\n(5) $2 Br^\\bullet \\xrightarrow{k_5} Br_2$ (rupture)\n\n1. En appliquant l\'AEQS aux porteurs de chaîne $Br^\\bullet$ et $H^\\bullet$, exprimer la concentration $[Br^\\bullet]$ en fonction de $[Br_2]$.\n2. Exprimer la concentration $[H^\\bullet]$ en fonction des concentrations des réactifs et produits.\n3. En déduire la vitesse globale de formation $v = \\frac{1}{2} \\frac{\\mathrm{d}[HBr]}{\\mathrm{d}t}$. Vérifier qu\'elle n\'admet pas d\'ordre global.',
      indicationsKholleur: [
        {
          condition: 'Le candidat s\'emmêle dans les bilans de vitesse',
          aide: 'Faites la somme des équations $\\frac{\\mathrm{d}[Br^\\bullet]}{\\mathrm{d}t} + \\frac{\\mathrm{d}[H^\\bullet]}{\\mathrm{d}t} = 0$ : les étapes de propagation s\'annulent exactement !'
        },
        {
          condition: 'Le candidat n\'arrive pas à isoler $[Br^\\bullet]$',
          aide: 'La somme donne immédiatement $2 k_1 [Br_2] - 2 k_5 [Br^\\bullet]^2 = 0$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Que devient la loi de vitesse en tout début de réaction ($t \\approx 0$) ?"',
        reponseAttendue: 'À $t=0$, la concentration en produit $[HBr] \\approx 0$. Le terme d\'inhibition $k_4 [HBr]$ au dénominateur est négligeable devant $k_3 [Br_2]$. La loi se simplifie en $v \\approx k [H_2] [Br_2]^{1/2}$ : la réaction admet alors un ordre initial de $1$ par rapport à $H_2$ et $1/2$ par rapport à $Br_2$ (ordre global initial 3/2).',
        piegeAEviter: 'Dire qu\'une réaction sans ordre ne peut jamais être approximée par un ordre au démarrage.'
      }
    ],
    criteresNotation: [
      { critere: 'Application rigoureuse de l\'AEQS sur chaque radical', poids: '35%' },
      { critere: 'Astuce d\'addition des vitesses pour isoler $[Br^\\bullet]$', poids: '30%' },
      { critere: 'Formulation propre de la vitesse non entière', poids: '20%' },
      { critere: 'Sens chimique sur l\'étape d\'inhibition et vitesse initiale', poids: '15%' }
    ]
  },
  // ==========================================
  // NOUVEAUX SUJETS DE KHÔLLES 1ERE ET 2EME ANNEE
  // ==========================================
  {
    id: 'kholle-physique-oscillateur-amorti',
    titre: 'Khôlle de Physique (Sup) : Oscillateur Harmonique Amorti & Espace des Phases',
    matiere: 'Physique',
    filiere: 'PCSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Établir l\'équation différentielle canonique d\'un oscillateur harmonique amorti (système masse-ressort avec frottement fluide $-h \\vec{v}$ ou circuit RLC série) en introduisant la pulsation propre $\\omega_0$ et le facteur de qualité $Q$. Donner l\'allure de la réponse temporelle dans les régimes apériodique, critique et pseudo-périodique.',
      pointsCles: [
        'Définition canonique : $\\ddot{x} + \\frac{\\omega_0}{Q}\\dot{x} + \\omega_0^2 x = 0$',
        'Identification de $\\omega_0 = \\sqrt{k/m} = 1/\\sqrt{LC}$ et $Q = \\frac{m\\omega_0}{h} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$',
        'Résolution de l\'équation caractéristique $r^2 + \\frac{\\omega_0}{Q}r + \\omega_0^2 = 0$',
        'Distinction des régimes selon le signe du discriminant $\\Delta = \\omega_0^2(1/(4Q^2) - 1)$ : critique si $Q=1/2$, pseudo-périodique si $Q > 1/2$',
        'Définition du décrément logarithmique $\\delta = \\ln\\left(\\frac{x(t)}{x(t+T)}\\right) = \\frac{\\pi}{\\sqrt{Q^2 - 1/4}} \\approx \\frac{\\pi}{Q}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On étudie le portrait de phase d\'un oscillateur pseudo-périodique dans le plan $(x, \\dot{x}/\\omega_0)$.\n1. Montrer que l\'énergie mécanique $E_m(t) = \\frac{1}{2}m\\dot{x}^2 + \\frac{1}{2}kx^2$ décroît au cours du temps et exprimer $\\frac{\\mathrm{d}E_m}{\\mathrm{d}t}$ en fonction de la force de frottement.\n2. Montrer que la trajectoire de phase s\'enroule en spirale vers l\'origine $(0,0)$.\n3. Quelle est la pente des tangentes à la trajectoire sur les axes $x=0$ et $\\dot{x}=0$ ?',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur la dérivée de l\'énergie',
          aide: 'Dérivez $\\frac{1}{2}m\\dot{x}^2 + \\frac{1}{2}kx^2$ et injectez $m\\ddot{x} = -kx - h\\dot{x}$.'
        },
        {
          condition: 'Le candidat n\'arrive pas à trouver la pente de la trajectoire de phase',
          aide: 'La pente dans le plan $(x, y = \\dot{x}/\\omega_0)$ est $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{\\dot{y}}{\\dot{x}} = \\frac{\\ddot{x}/\\omega_0}{\\dot{x}}$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous interrompt : "Peut-on avoir deux trajectoires de phase qui se croisent dans le plan $(x, \\dot{x})$ ?"',
        reponseAttendue: 'Non, c\'est strictement impossible d\'après le théorème d\'unicité de Cauchy-Lipschitz pour un système différentiel autonome du premier ordre. À des conditions initiales $(x_0, \\dot{x}_0)$ correspond une unique trajectoire.',
        piegeAEviter: 'Dire que les trajectoires se croisent au repos à l\'origine (elles s\'y asymptotisent sans jamais se croiser en temps fini).'
      }
    ],
    criteresNotation: [
      { critere: 'Mise sous forme canonique immédiate avec $\\omega_0$ et $Q$', poids: '35%' },
      { critere: 'Rigueur sur les conditions aux limites et décrément', poids: '25%' },
      { critere: 'Compréhension physique du portrait de phase', poids: '25%' },
      { critere: 'Clarté du dessin des courbes au tableau', poids: '15%' }
    ]
  },
  {
    id: 'kholle-maths-taylor-irrationalite',
    titre: 'Khôlle de Mathématiques (Sup) : Formule de Taylor-Lagrange & Irrationalité de $e$',
    matiere: 'Mathématiques',
    filiere: 'MPSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer la formule de Taylor avec reste de Lagrange à l\'ordre $n$ pour une fonction de classe $\\mathcal{C}^{n+1}$ sur un segment $[a, b]$. Donner l\'inégalité de Taylor-Lagrange qui en découle.',
      pointsCles: [
        'Hypothèse : $f$ de classe $\\mathcal{C}^n$ sur $[a, b]$ et $n+1$ fois dérivable sur $]a, b[$',
        'Énoncé exact : il existe $c \\in ]a, b[$ tel que $f(b) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} (b-a)^k + \\frac{f^{(n+1)}(c)}{(n+1)!} (b-a)^{n+1}$',
        'Inégalité si $|f^{(n+1)}| \\le M_{n+1}$ : $|R_n| \\le \\frac{M_{n+1}}{(n+1)!} |b-a|^{n+1}$',
        'Application immédiate : développement de l\'exponentielle en série entière $\\sum \\frac{x^n}{n!}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Le but est de démontrer que le nombre $e = \\exp(1)$ est un nombre irrationnel.\n1. Appliquer la formule de Taylor-Lagrange à la fonction exponentielle sur $[0, 1]$ à l\'ordre $n$. En déduire l\'encadrement pour tout $n \\ge 1$ :\n$$0 < e - \\sum_{k=0}^n \\frac{1}{k!} < \\frac{3}{(n+1)!}$$\n2. On suppose par l\'absurde que $e = \\frac{p}{q}$ avec $p, q \\in \\mathbb{N}^*$.\nEn multipliant l\'encadrement précédent par $q!$, aboutir à une contradiction.',
      indicationsKholleur: [
        {
          condition: 'Le candidat ne sait pas comment majorer $e^c$ pour $c \\in ]0, 1[$',
          aide: 'Comme $c < 1$, on a $e^c < e^1 < 3$ (car $e < 3$).'
        },
        {
          condition: 'Le candidat n\'identifie pas l\'entier strictement coincé entre 0 et 1',
          aide: 'Montrez que le terme $A = q! \\left(\\frac{p}{q} - \\sum_{k=0}^q \\frac{1}{k!}\\right)$ est obligatoirement un entier relatif, et appliquez la majoration avec $n = q \\ge 3$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Existe-t-il un entier strictement compris entre 0 et 1 ?"',
        reponseAttendue: 'Non, l\'ensemble des entiers naturels $\\mathbb{N}$ est discret et $]0, 1[ \\cap \\mathbb{Z} = \\emptyset$. Obtenir un entier $A$ tel que $0 < A < 1$ fournit la contradiction absolue recherchée.',
        piegeAEviter: 'Oublier d\'expliquer pourquoi $q! \\sum_{k=0}^q \\frac{1}{k!}$ est bien un entier (chaque $k!$ divise $q!$ car $k \\le q$).'
      }
    ],
    criteresNotation: [
      { critere: 'Énoncé irréprochable de Taylor-Lagrange avec quantificateurs', poids: '35%' },
      { critere: 'Justification de la divisibilité factorielle', poids: '30%' },
      { critere: 'Conduite rigoureuse du raisonnement par l\'absurde', poids: '25%' },
      { critere: 'Aisance de calcul et clarté des notations', poids: '10%' }
    ]
  },
  {
    id: 'kholle-chimie-elimination-zaitsev',
    titre: 'Khôlle de Chimie (Spé) : Élimination $E2$, Stéréospécificité & Règle de Zaitsev',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Décrire le mécanisme réactionnel de l\'élimination bimoléculaire ($E2$). Préciser la loi de vitesse, les caractéristiques stéréochimiques (conformation anti-périplanaire) et la règle de régiosélectivité de Zaitsev.',
      pointsCles: [
        'Mécanisme concerté en une seule étape sans intermédiaire réactionnel',
        'Loi de vitesse du second ordre : $v = k [R-X] [Base]$',
        'Contrainte stéréochimique absolue : les liaisons $C-H$ et $C-X$ doivent être coplanaires et opposées (dièdre de $180^\\circ$ anti-périplanaire)',
        'Régiosélectivité : l\'alcène le plus thermodynamiquement stable (le plus substitué) est majoritaire (règle de Zaitsev)',
        'Exception : encombrement stérique de la base ($t-\\mathrm{BuOK}$) $\\implies$ produit d\'Hoffmann (le moins substitué)'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On soumet les deux stéréoisomères suivants à l\'action de l\'éthanolate de sodium $\\mathrm{EtONa}$ dans l\'éthanol à chaud :\n- Composé (A) : le $(1R, 2R)$-1-bromo-1,2-diphénylpropane\n- Composé (B) : le $(1R, 2S)$-1-bromo-1,2-diphénylpropane\n1. En utilisant la projection de Newman le long de la liaison $C_1-C_2$, trouver la conformation anti-périplanaire permettant l\'élimination $E2$ pour chacun des deux isomères.\n2. En déduire pour chacun si l\'alcène obtenu est de stéréochimie $(Z)$ ou $(E)$.\n3. Pourquoi la réaction est-elle qualifiée de stéréospécifique et non simplement stéréosélective ?',
      indicationsKholleur: [
        {
          condition: 'Le candidat place $H$ et $Br$ en position syn',
          aide: 'Rappelez-vous que l\'attaque de la base et le départ du brome se font à l\'opposé : le dièdre $H-C-C-Br$ doit faire $180^\\circ$.'
        },
        {
          condition: 'Le candidat n\'arrive pas à nommer l\'alcène en (Z) ou (E)',
          aide: 'Regardez la position respective des deux groupements phényle $-\\mathrm{Ph}$ dans la conformation Newman réactive.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous montre un dérivé halogéné du cyclohexane : "Si le brome est en position équatoriale sur la chaise, peut-il subir l\'élimination $E2$ immédiatement ?"',
        reponseAttendue: 'Non, car en position équatoriale, aucune liaison $C-H$ voisine n\'est anti-parallèle à la liaison $C-Br$ (l\'angle dièdre avec les protons axiaux voisins est de $60^\\circ$). Le cyclohexane doit d\'abord effectuer une inversion de chaise pour placer le brome en position axiale, permettant l\'élimination anti-diaxiale avec un proton axial voisin.',
        piegeAEviter: 'Dire que la conformation équatoriale étant la plus stable, c\'est elle qui réagit le plus vite (faute classique : le principe de Curtin-Hammett montre que la réaction peut passer par le conformère minoritaire réactif).'
      }
    ],
    criteresNotation: [
      { critere: 'Maîtrise parfaite de la projection de Newman', poids: '35%' },
      { critere: 'Respect impératif du dièdre de $180^\\circ$', poids: '30%' },
      { critere: 'Détermination sans faille de la stéréochimie $(Z/E)$', poids: '20%' },
      { critere: 'Définition exacte de la stéréospécificité', poids: '15%' }
    ]
  },
  {
    id: 'kholle-si-stabilite-nyquist',
    titre: 'Khôlle de Sciences de l\'Ingénieur (Spé) : Stabilité des Systèmes Asservis & Marges de Phase',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Définir la fonction de transfert en boucle ouverte (FTBO) et en boucle fermée (FTBF) à retour unitaire. Énoncer le critère algébrique de Routh-Hurwitz pour un polynôme caractéristique du 3ème ordre. Définir les marges de stabilité (marge de phase $\\Delta\\varphi$ et marge de gain $\\Delta G$) sur le lieu de Bode.',
      pointsCles: [
        'Lien fondamental : $FTBF(p) = \\frac{FTBO(p)}{1 + FTBO(p)}$',
        'Pôles en boucle fermée = racines de l\'équation caractéristique $1 + FTBO(p) = 0$',
        'Système stable en boucle fermée $\\iff$ tous les pôles de la FTBF ont une partie réelle strictement négative',
        'Critère de Routh-Hurwitz pour $a_3 p^3 + a_2 p^2 + a_1 p + a_0 = 0$ : tous les coefficients $a_i > 0$ et $a_2 a_1 - a_3 a_0 > 0$',
        'Marge de phase : $\\Delta\\varphi = 180^\\circ + \\varphi(\\omega_{0dB})$ avec $|FTBO(j\\omega_{0dB})| = 1$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On considère un système asservi à retour unitaire dont la FTBO est donnée par :\n$$FTBO(p) = \\frac{K}{p (1 + 0{,}1 p) (1 + 0{,}02 p)}$$\n1. Déterminer l\'erreur statique de position et de vitesse du système en boucle fermée.\n2. Calculer la valeur critique du gain $K_{lim}$ pour laquelle le système est à la limite de stabilité en appliquant le critère de Routh.\n3. On impose une marge de phase $\\Delta\\varphi = 45^\\circ$. Déterminer la pulsation de coupure à 0 dB correspondante et le gain $K$ réglé à cette valeur.',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur les erreurs canoniques',
          aide: 'La FTBO possède un intégrateur pur ($p^1$ au dénominateur, classe 1). Quelle est l\'erreur de position pour un échelon ?'
        },
        {
          condition: 'Le candidat n\'arrive pas à poser l\'équation de la phase',
          aide: 'La phase de la FTBO vaut $\\varphi(\\omega) = -90^\\circ - \\arctan(0{,}1\\omega) - \\arctan(0{,}02\\omega)$. Pour $\\Delta\\varphi = 45^\\circ$, on veut $\\varphi(\\omega_{0dB}) = -135^\\circ$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Si l\'on ajoute un correcteur Proportionnel-Intégrateur ($C(p) = K_p (1 + 1/(T_i p))$), que devient la classe du système et quel est l\'effet sur la stabilité ?"',
        reponseAttendue: 'La classe passe de 1 à 2 (deux intégrateurs en boucle ouverte), ce qui annule l\'erreur de vitesse (traînage). En revanche, l\'intégrateur apporte un déphasage de $-90^\\circ$ à basse fréquence qui dégrade fortement la marge de phase et peut déstabiliser le système si le zéro $-1/T_i$ n\'est pas placé judicieusement.',
        piegeAEviter: 'Dire qu\'un correcteur PI améliore toujours la stabilité (c\'est l\'inverse : le terme intégral déstabilise, c\'est le correcteur à avance de phase ou PD qui stabilise).'
      }
    ],
    criteresNotation: [
      { critere: 'Précision sur la condition de stabilité de Cauchy / Routh', poids: '35%' },
      { critere: 'Calcul exact du tableau de Routh et de la valeur critique $K_{lim}$', poids: '30%' },
      { critere: 'Résolution trigonométrique de la pulsation $\\omega_{0dB}$', poids: '20%' },
      { critere: 'Sens physique sur le compromis précision / stabilité', poids: '15%' }
    ]
  },
  {
    id: 'kholle-physique-effet-de-peau',
    titre: 'Khôlle de Physique : Effet de Peau & Résistance HF d\'un Câble Conducteur',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Établir l\'équation de diffusion du champ électrique dans un bon conducteur ohmique en régime quasi-stationnaire. Définir l\'épaisseur de peau $\\delta$ et donner son ordre de grandeur dans le cuivre à $50\\,\\mathrm{Hz}$ et à $1\\,\\mathrm{GHz}$.',
      pointsCles: [
        'Négligeabilité du courant de déplacement devant la conduction ohmique : $\\varepsilon_0 \\omega \\ll \\gamma$',
        'Combinaison Maxwell-Faraday et Maxwell-Ampère : $\\vec{\\mathrm{rot}}(\\vec{\\mathrm{rot}}\\,\\vec{E}) = \\vec{\\nabla}(\\mathrm{div}\\,\\vec{E}) - \\Delta \\vec{E} = -\\mu_0 \\gamma \\frac{\\partial \\vec{E}}{\\partial t}$',
        'Équation de diffusion : $\\Delta \\vec{E} = \\mu_0 \\gamma \\frac{\\partial \\vec{E}}{\\partial t}$',
        'Résolution harmonique : $\\underline{k} = \\frac{1-j}{\\delta}$ avec $\\delta = \\sqrt{\\frac{2}{\\mu_0 \\gamma \\omega}}$',
        'Ordres de grandeur : $\\delta \\approx 9{,}3\\,\\mathrm{mm}$ à $50\\,\\mathrm{Hz}$ et $\\delta \\approx 2{,}1\\,\\mu\\mathrm{m}$ à $1\\,\\mathrm{GHz}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Un fil conducteur cylindrique de rayon $a \\gg \\delta$, de conductivité $\\gamma$ et de longueur $L$ transporte un courant alternatif $I(t) = I_0 \\cos(\\omega t)$.\n1. En considérant que la courbure est négligeable devant $\\delta$ ($a \\gg \\delta$), exprimer la densité volumique de courant $\\vec{j}(r, t)$ au voisinage immédiat de la surface extérieure $r=a$.\n2. Exprimer le champ magnétique à la surface du fil en fonction de l\'amplitude $I_0$ par le théorème d\'Ampère.\n3. En déduire la puissance moyenne totale dissipée par effet Joule dans le fil par intégration du vecteur de Poynting entrant à la surface.\n4. Comparer la résistance haute fréquence $R_{HF}$ obtenue à la résistance continue $R_{DC} = \\frac{L}{\\gamma \\pi a^2}$. Conclure.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à relier le champ magnétique de surface au courant total',
          aide: 'Appliquez le théorème d\'Ampère sur un contour circulaire de rayon $a$ entourant tout le câble : $\\oint \\vec{B} \\cdot \\mathrm{d}\\vec{\\ell} = 2\\pi a B(a) = \\mu_0 I(t)$.'
        },
        {
          condition: 'Le candidat hésite pour le calcul des pertes Joule',
          aide: 'Le flux entrant du vecteur de Poynting à travers la surface latérale $r=a$ est égal à la puissance Joule moyenne : $\\mathcal{P}_J = -\\iint_{r=a} \\langle \\vec{\\Pi} \\rangle \\cdot \\vec{n}_{ext} \\,\\mathrm{d}S$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Pourquoi les lignes à très haute tension utilisent-elles des conducteurs en faisceaux de plusieurs brins espacés plutôt qu\'un gros câble massif ?"',
        reponseAttendue: 'À cause de l\'effet de peau, le cœur d\'un gros conducteur massif ne conduit aucun courant et constitue une masse morte inutile. Un faisceau de conducteurs creux ou divisés multiplie le périmètre de surface utile, réduisant la résistance effective et limitant également l\'effet couronne (claquage diélectrique de l\'air).',
        piegeAEviter: 'Répondre uniquement pour des raisons de souplesse mécanique sans évoquer l\'effet de peau et la résistance superficielle.'
      }
    ],
    criteresNotation: [
      { critere: 'Rigueur de l\'approximation ARQS et équation de diffusion', poids: '30%' },
      { critere: 'Établissement de la relation de structure spatiale $e^{-(a-r)/\\delta}$', poids: '35%' },
      { critere: 'Bilan de Poynting et déduction de la résistance équivalente $R_{HF}$', poids: '25%' },
      { critere: 'Sens des ordres de grandeur et applications pratiques', poids: '10%' }
    ]
  },
  {
    id: 'kholle-maths-courbe-rebroussement',
    titre: 'Khôlle de Mathématiques : Étude d\'une Courbe Paramétrée & Point de Rebroussement',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer et démontrer la règle d\'étude locale des points singuliers (règle des entiers $p$ et $q$) d\'un arc paramétré $t \\mapsto M(t)$ de classe $\\mathcal{C}^\\infty$. Définir la notion de rebroussement de première et de deuxième espèce.',
      pointsCles: [
        'Point stationnaire / singulier : $M\'(t_0) = \\vec{0}$',
        'Définition de $p = \\min\\{k \\ge 1 \\mid M^{(k)}(t_0) \\neq \\vec{0}\\}$ et $q = \\min\\{k > p \\mid (M^{(p)}(t_0), M^{(k)}(t_0)) \\text{ libre}\\}$',
        'Formule de Taylor-Young dans le repère $(M(t_0), \\vec{u}_p, \\vec{u}_q)$ : $X(u) \\sim u^p/p!$ et $Y(u) \\sim u^q/q!$',
        'Signe des coordonnées pour $u \\to 0^+$ et $u \\to 0^-$ déduisant la position par rapport à la tangente',
        'Rebroussement de 1ère espèce ($p$ pair, $q$ impair) vs 2ème espèce ($p$ pair, $q$ pair)'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On considère l\'arc paramétré défini pour $t \\in \\mathbb{R}$ par :\n$$x(t) = \\frac{t^2}{2} + \\frac{1}{t}, \\quad y(t) = \\frac{t^2}{2} - \\frac{1}{t}$$\n1. Réduire le domaine d\'étude et étudier les branches infinies lorsque $t \\to 0$ et $t \\to \\pm\\infty$.\n2. Trouver les points stationnaires de la courbe. En effectuant un développement limité au voisinage du point singulier, déterminer les entiers $p$ et $q$ et préciser la nature géométrique de la singularité.\n3. Calculer le rayon de courbure $R(t)$ en tout point régulier.\n4. Tracer l\'allure générale de la courbe avec ses asymptotes et sa tangente au point singulier.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'identifie pas la simplification algébrique',
          aide: 'Remarquez que $x(t) + y(t) = t^2$ et $x(t) - y(t) = 2/t$. Poser $X = x+y$ et $Y = x-y$ simplifie radicalement l\'équation cartésienne !'
        },
        {
          condition: 'Le candidat se noie dans les dérivées successives en $t=1$',
          aide: 'Posez $t = 1 + h$ et développez $x(1+h)$ et $y(1+h)$ jusqu\'à l\'ordre 3 en $h$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Existe-t-il une tangente en un point stationnaire, et quelle est sa direction ?"',
        reponseAttendue: 'Oui, la courbe admet toujours une tangente au point stationnaire dès lors qu\'il existe une dérivée non nulle $M^{(p)}(t_0) \\neq \\vec{0}$. La droite tangente est rigoureusement portée par le vecteur $M^{(p)}(t_0)$.',
        piegeAEviter: 'Dire qu\'il n\'y a pas de tangente parce que le vecteur vitesse $M\'(t_0)$ est nul.'
      }
    ],
    criteresNotation: [
      { critere: 'Maîtrise irréprochable du développement de Taylor-Young', poids: '35%' },
      { critere: 'Identification des asymptotes obliques / branches infinies', poids: '25%' },
      { critere: 'Calcul de la courbure scalaire et du repère de Frenet', poids: '25%' },
      { critere: 'Précision et soin du tracé géométrique', poids: '15%' }
    ]
  },
  {
    id: 'kholle-chimie-cfc-sites-octaedriques',
    titre: 'Khôlle de Chimie : Maille Cubique à Faces Centrées & Cristallochimie des Oxydes',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Décrire la maille Cubique à Faces Centrées (CFC) : population $Z$, coordinence, compacité $C$ et relation entre le paramètre de maille $a$ et le rayon métallique $R$. Localiser géométriquement les sites interstitiels octaédriques et tétraédriques.',
      pointsCles: [
        'Population : $Z = 8 \\times (1/8) + 6 \\times (1/2) = 4$ atomes par maille',
        'Contact sur la diagonale de face : $4R = a\\sqrt{2} \\implies a = 2\\sqrt{2}R$',
        'Compacité maximale : $C = \\frac{4 \\times \\frac{4}{3}\\pi R^3}{a^3} = \\frac{\\pi\\sqrt{2}}{6} \\approx 0{,}74$',
        'Sites octaédriques : 1 au centre de la maille $(1/2, 1/2, 1/2)$ et 12 au milieu des arêtes partagés par 4 mailles $\\implies 1 + 12/4 = 4$ sites $[O]$ par maille',
        'Sites tétraédriques : 8 sites $[T]$ situés au centre des 8 huitièmes de cube'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On étudie la structure cristalline de l\'oxyde de titane et de baryum $\\mathrm{BaTiO}_3$ (pérovskite), matériau ferroélectrique fondamental.\nDans la maille cubique élémentaire de côté $a = 403\\,\\mathrm{pm}$ :\n- Les ions baryum $\\mathrm{Ba}^{2+}$ occupent les sommets du cube.\n- Les ions titane $\\mathrm{Ti}^{4+}$ occupent le centre du cube.\n- Les ions oxyde $\\mathrm{O}^{2-}$ occupent les centres des 6 faces du cube.\n\n1. Vérifier la stœchiométrie de la formule chimique $\\mathrm{BaTiO}_3$.\n2. Déterminer la coordinence de chaque type d\'ion dans cette structure.\n3. Exprimer la relation de tangence entre l\'ion $\\mathrm{Ti}^{4+}$ et les anions $\\mathrm{O}^{2-}$. En déduire le rayon ionique théorique de $\\mathrm{Ti}^{4+}$ sachant que $r(\\mathrm{O}^{2-}) = 140\\,\\mathrm{pm}$.\n4. Calculer la masse volumique $\\rho$ de ce cristal. Données : $M(\\mathrm{Ba}) = 137{,}3\\,\\mathrm{g/mol}$, $M(\\mathrm{Ti}) = 47{,}9\\,\\mathrm{g/mol}$, $M(\\mathrm{O}) = 16{,}0\\,\\mathrm{g/mol}$, $\\mathcal{N}_A = 6{,}022 \\times 10^{23}\\,\\mathrm{mol^{-1}}$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur le décompte des ions oxyde',
          aide: 'Un atome situé au centre d\'une face n\'appartient qu\'à 2 mailles adjacentes : sa contribution est donc de $1/2$.'
        },
        {
          condition: 'Le candidat ne voit pas le contact Ti-O',
          aide: 'Le titane est au centre $(a/2, a/2, a/2)$ et les oxygènes sont aux centres des faces $(a/2, a/2, 0)$, donc distants de $a/2$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Quel est le facteur de tolérance de Goldschmidt $t = \\frac{r_A + r_O}{\\sqrt{2}(r_B + r_O)}$ pour une pérovskite idéale ?"',
        reponseAttendue: 'Pour une géométrie cubique parfaite où les contacts anions-cations sont simultanément assurés sur l\'arête et sur la diagonale de face, le facteur de tolérance vaut exactement $t = 1$. Si $t$ s\'écarte légèrement de 1, la maille se distord (symétrie tétragonale), ce qui engendre un moment dipolaire permanent et la ferroélectricité.',
        piegeAEviter: 'Ignorer la condition géométrique sur la diagonale de face reliant les cations de grande taille (Ba).'
      }
    ],
    criteresNotation: [
      { critere: 'Décompte et vérification rigoureuse de la formule chimique', poids: '25%' },
      { critere: 'Identification spatiale des coordinences et polyèdres', poids: '30%' },
      { critere: 'Calcul exact du rayon ionique et de la compacité', poids: '25%' },
      { critere: 'Calcul numérique de la masse volumique avec unités', poids: '20%' }
    ]
  },
  {
    id: 'kholle-si-correcteur-avance-phase',
    titre: 'Khôlle de SI : Synthèse d\'un Correcteur à Avance de Phase & Marges de Stabilité',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Présenter la fonction de transfert d\'un correcteur à avance de phase $C(p) = K_c \\frac{1 + a T p}{1 + T p}$ avec $a > 1$. Tracer son diagramme de Bode asymptotique et réel. Calculer la pulsation $\\omega_{max}$ apportant l\'avance de phase maximale $\\varphi_{max}$ et exprimer $\\sin\\varphi_{max}$ en fonction du coefficient $a$.',
      pointsCles: [
        'Forme canonique : $C(p) = K_c \\frac{1 + a T p}{1 + T p}$ avec $a > 1$',
        'Diagramme de Bode : gain augmente de $20\\log K_c$ à $20\\log(K_c a)$ (+20 dB/décade entre $1/(aT)$ et $1/T$)',
        'Phase positive culminant à la moyenne géométrique des pulsations de coupure : $\\omega_{max} = \\frac{1}{T\\sqrt{a}}$',
        'Avance de phase maximale : $\\sin\\varphi_{max} = \\frac{a - 1}{a + 1}$ ou $a = \\frac{1 + \\sin\\varphi_{max}}{1 - \\sin\\varphi_{max}}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Un système asservi de position présente une fonction de transfert en boucle ouverte non corrigée $FTBO(p) = \\frac{40}{p (1 + 0{,}05 p)^2}$.\nLe cahier des charges impose :\n- Marge de phase $\\Delta\\varphi \\ge 45^\\circ$.\n- Erreur de vitesse pour une rampe unitaire $\\varepsilon_v \\le 0{,}025\\,\\mathrm{s}$.\n- Pulsation de coupure à 0 dB aussi élevée que possible pour garantir la rapidité.\n\n1. Vérifier si le système non corrigé satisfait l\'exigence sur l\'erreur de vitesse.\n2. Calculer la marge de phase du système non corrigé. Conclure sur sa stabilité.\n3. Dimensionner un correcteur à avance de phase $C(p) = \\frac{1 + a T p}{1 + T p}$ pour respecter une marge de phase de $50^\\circ$ (en prévoyant une réserve de sécurité de $5^\\circ$).\n4. Déterminer les valeurs numériques de $a$, $T$ et la nouvelle pulsation de coupure $\\omega\'_{0dB}$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'ajoute pas la réserve de sécurité de phase',
          aide: 'Attention : le correcteur à avance de phase augmente aussi le gain de $+10\\log(a)$ à $\\omega_{max}$, ce qui décale la pulsation de coupure vers les hautes fréquences où la phase du procédé est plus défavorable ! Il faut ajouter environ $+5^\\circ$ à $+10^\\circ$ à l\'avance calculée.'
        },
        {
          condition: 'Le candidat hésite sur l\'erreur de vitesse',
          aide: 'Pour une entrée en rampe $E(p) = 1/p^2$, l\'erreur statique vaut $\\varepsilon_v = \\frac{1}{\\lim_{p \\to 0} p \\cdot FTBO(p)} = \\frac{1}{K_v}$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Pourquoi ne choisit-on pas un coefficient $a$ démesurément grand (par exemple $a = 100$) pour gagner énormément en marge de phase ?"',
        reponseAttendue: 'Un coefficient $a$ trop grand augmente le gain en haute fréquence de $+20\\log a = +40\\,\\mathrm{dB}$, ce qui amplifie considérablement les bruits de mesure haute fréquence des capteurs et risque de saturer les actionneurs (amplificateurs, moteurs). En pratique, on limite toujours $a \\le 10$ (apport de phase maximal d\'environ $55^\\circ$).',
        piegeAEviter: 'Penser que l\'avance de phase peut être augmentée sans contrepartie sur le bruit et la robustesse.'
      }
    ],
    criteresNotation: [
      { critere: 'Maîtrise de la formule $\\sin\\varphi_{max} = (a-1)/(a+1)$', poids: '30%' },
      { critere: 'Prise en compte du décalage de gain induit $+10\\log a$', poids: '30%' },
      { critere: 'Calcul numérique de $a$ et $T$ et vérification finale', poids: '25%' },
      { critere: 'Compréhension physique du filtrage du bruit haute fréquence', poids: '15%' }
    ]
  },
  {
    id: 'kholle-maths-cauchy-schwarz-projection',
    titre: 'Khôlle de Mathématiques : Inégalité de Cauchy-Schwarz & Projection Orthogonale',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer et démontrer l\'inégalité de Cauchy-Schwarz dans un espace préhilbertien réel $E$. Préciser avec soin le cas d\'égalité. En déduire l\'inégalité triangulaire (Minkowski) pour la norme euclidienne associée.',
      pointsCles: [
        'Définition du produit scalaire (forme bilinéaire symétrique définie positive)',
        'Étude du trinôme du second degré $P(t) = \\|x + t y\\|^2 \\ge 0$ pour tout $t \\in \\mathbb{R}$',
        'Calcul du discriminant réduit $\\Delta\' = \\langle x, y \\rangle^2 - \\|x\\|^2 \\|y\\|^2 \\le 0$',
        'Condition d\'égalité : $\\Delta\' = 0 \\iff$ existence d\'une racine double $t_0 \\iff x + t_0 y = 0 \\iff (x, y)$ liée',
        'Inégalité triangulaire $\\|x+y\\| \\le \\|x\\| + \\|y\\|$ par développement de $\\|x+y\\|^2$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $E = \\mathcal{C}([0, 1], \\mathbb{R})$ muni du produit scalaire canonique $\\langle f, g \\rangle = \\int_0^1 f(t)g(t)\\,\\mathrm{d}t$.\nOn pose $F = \\{f \\in E \\mid \\int_0^1 f(t)\\,\\mathrm{d}t = 0\\}$.\n1. Déterminer l\'orthogonal $F^\\perp$ et la dimension de $F^\\perp$.\n2. Pour $g \\in E$ définie par $g(t) = t^2$, déterminer la projection orthogonale $p_F(g)$ et calculer la distance minimale $d(g, F)$.\n3. Calculer $\\inf_{a, b \\in \\mathbb{R}} \\int_0^1 (t^2 - a t - b)^2\\,\\mathrm{d}t$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat cherche une base de F (dimension infinie)',
          aide: 'Remarquez que $F = \\ker(\\phi)$ avec $\\phi(f) = \\int_0^1 f(t) \\cdot 1\\,\\mathrm{d}t = \\langle f, 1 \\rangle$. Donc $F = (\\mathrm{Vect}(1))^\\perp$ !'
        },
        {
          condition: 'Le candidat hésite sur le calcul de la projection',
          aide: 'La projection orthogonale sur $F^\\perp = \\mathrm{Vect}(1)$ est immédiate : $p_{F^\\perp}(g) = \\frac{\\langle g, 1 \\rangle}{\\|1\\|^2} 1$. Déduisez-en $p_F(g) = g - p_{F^\\perp}(g)$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "A-t-on toujours $F \\oplus F^\\perp = E$ dans un espace préhilbertien quelconque ?"',
        reponseAttendue: 'Non ! Ce résultat n\'est garanti que si $F$ est de dimension finie ou si $E$ est un espace de Hilbert (complet) et $F$ fermé. Dans un préhilbertien général, $F \\oplus F^\\perp$ peut être un sous-espace strict de $E$. Ici, $F$ est un hyperplan fermé (noyau d\'une forme linéaire continue), donc $F \\oplus F^\\perp = E$ est bien vérifié car $\\dim F^\\perp = 1 < +\\infty$.',
        piegeAEviter: 'Affirmer que la somme directe orthogonale est universelle sans préciser l\'hypothèse de complétude ou de dimension finie.'
      }
    ],
    criteresNotation: [
      { critere: 'Démonstration irréprochable de Cauchy-Schwarz avec le trinôme', poids: '30%' },
      { critere: 'Identification de l\'orthogonal $F^\\perp = \\mathbb{R} \\cdot 1$', poids: '30%' },
      { critere: 'Calcul de la projection et de la distance minimale', poids: '25%' },
      { critere: 'Résolution de l\'approximation au sens des moindres carrés', poids: '15%' }
    ]
  },
  {
    id: 'kholle-physique-puits-quantique',
    titre: 'Khôlle de Physique : Puits de Potentiel Quantique 1D & Quantification d\'Énergie',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Présenter les postulats de la mécanique quantique pour une particule 1D : interprétation probabiliste de la fonction d\'onde $\\psi(x, t)$, équation de Schrödinger stationnaire, et relations d\'indétermination de Heisenberg.',
      pointsCles: [
        'Fonction d\'onde $\\psi(x, t) \\in \\mathbb{C}$ et densité volumique de présence $P(x) = |\\psi(x, t)|^2$',
        'Condition de normalisation $\\int_{-\\infty}^{+\\infty} |\\psi|^2\\,\\mathrm{d}x = 1$',
        'Équation stationnaire : $-\\frac{\\hbar^2}{2m} \\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d}x^2} + V(x)\\psi(x) = E\\psi(x)$',
        'Principe d\'indétermination de Heisenberg : $\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une particule de masse $m$ est confinée dans un puits de potentiel infini 1D de largeur $L$ : $V(x) = 0$ pour $x \\in [0, L]$ et $V(x) = +\\infty$ ailleurs.\n1. Écrire les conditions aux limites pour la fonction d\'onde en $x=0$ et $x=L$. En déduire les fonctions d\'onde stationnaires normalisées $\\psi_n(x)$ et les énergies permises $E_n$.\n2. Montrer que l\'énergie fondamentale $E_1 > 0$ est non nulle. Retrouver un ordre de grandeur de $E_1$ grâce à la relation d\'indétermination de Heisenberg.\n3. La particule effectue une transition du niveau $n=2$ vers le niveau $n=1$ en émettant un photon de longueur d\'onde $\\lambda$. Exprimer $\\lambda$ en fonction de $m, L, h$ et $c$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat oublie la normalisation',
          aide: 'La condition $\\int_0^L A^2 \\sin^2(k x)\\,\\mathrm{d}x = 1$ donne $A^2 \\frac{L}{2} = 1$, d\'où $A = \\sqrt{2/L}$.'
        },
        {
          condition: 'Le candidat n\'arrive pas à relier Heisenberg au fondamental',
          aide: 'La particule étant confinée dans $[0, L]$, on a $\\Delta x \\sim L$. Par Heisenberg, $\\Delta p \\sim \\hbar / L$, d\'où l\'énergie cinétique minimale $E_c \\sim \\frac{(\\Delta p)^2}{2m} \\sim \\frac{\\hbar^2}{2m L^2}$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Que devient la fonction d\'onde si l\'on élargit instantanément le puits de $L$ à $2L$ ?"',
        reponseAttendue: 'La fonction d\'onde à l\'instant $t=0^+$ reste identique à celle du puits initial (continuité temporelle de l\'état quantique). En revanche, ce n\'est plus un état stationnaire du nouveau puits : elle se décompose sur les nouveaux états propres $\\tilde{\\psi}_k(x)$, entraînant une évolution temporelle non stationnaire.',
        piegeAEviter: 'Dire que la particule passe instantanément dans l\'état fondamental du nouveau puits (transition instantanée impossible).'
      }
    ],
    criteresNotation: [
      { critere: 'Établissement rigoureux des conditions aux limites et de $\\psi_n$', poids: '35%' },
      { critere: 'Normalisation correcte avec facteur $\\sqrt{2/L}$', poids: '25%' },
      { critere: 'Interprétation de l\'énergie de point zéro par Heisenberg', poids: '25%' },
      { critere: 'Calcul de la transition radiative $\\Delta E = h c / \\lambda$', poids: '15%' }
    ]
  },
  {
    id: 'kholle-chimie-aeqs-lindemann',
    titre: 'Khôlle de Chimie : AEQS & Mécanisme de Lindemann des Réactions Unimoléculaires',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer le principe de l\'Approximation des États Quasi-Stationnaires (AEQS) et ses conditions de validité. Donner la définition d\'un acte élémentaire et rappeler la loi de Van \'t Hoff.',
      pointsCles: [
        'Acte élémentaire : réaction se déroulant à l\'échelle microscopique sans intermédiaire décelable',
        'Loi de Van \'t Hoff : pour un acte élémentaire, l\'ordre partiel de chaque réactif est égal à son coefficient stœchiométrique',
        'AEQS : applicable aux intermédiaires réactionnels très réactifs et en faible concentration stationnaire : $\\frac{\\mathrm{d}[IR]}{\\mathrm{d}t} \\approx 0$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Pour modéliser la décomposition en phase gazeuse d\'une molécule $A \\to P$, Lindemann propose en 1922 le mécanisme suivant en présence d\'un gaz inerte $M$ :\n(1) $A + M \\xrightarrow{k_1} A^* + M$ (activation collisionnelle)\n(2) $A^* + M \\xrightarrow{k_{-1}} A + M$ (désactivation collisionnelle)\n(3) $A^* \\xrightarrow{k_2} P$ (réaction propre de la molécule excitée)\n\n1. Appliquer l\'AEQS à la molécule excitée $A^*$ et exprimer sa concentration stationnaire $[A^*]$.\n2. En déduire la vitesse volumique de formation du produit $v = \\frac{\\mathrm{d}[P]}{\\mathrm{d}t}$.\n3. Analyser la loi de vitesse aux hautes pressions ($k_{-1}[M] \\gg k_2$) puis aux basses pressions ($k_{-1}[M] \\ll k_2$). Préciser l\'ordre apparent dans chaque cas.',
      indicationsKholleur: [
        {
          condition: 'Le candidat oublie l\'étape de désactivation',
          aide: 'Attention : la molécule $A^*$ peut perdre son énergie par collision avec $M$ avant de réagir.'
        },
        {
          condition: 'Le candidat n\'identifie pas le changement d\'ordre',
          aide: 'À haute pression, $[M]$ est très grand : que devient le dénominateur de $[A^*]$ ?'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Pourquoi qualifie-t-on la réaction de pseudo-unimoléculaire si le mécanisme initial fait intervenir des chocs bimoléculaires $A+M$ ?"',
        reponseAttendue: 'À haute pression, la désactivation collisionnelle l\'emporte largement sur la décomposition. La concentration de $A^*$ est alors proportionnelle à $[A]$ sans dépendre de $[M]$, rendant la vitesse globale $v = k_\\infty [A]$ d\'ordre 1 par rapport à $A$ seul.',
        piegeAEviter: 'Confondre molécularité (nombre de réactifs d\'un acte élémentaire) et ordre global de la réaction observée.'
      }
    ],
    criteresNotation: [
      { critere: 'Rigueur de l\'application de l\'AEQS sur $A^*$', poids: '35%' },
      { critere: 'Expression exacte de la loi de vitesse de Lindemann', poids: '30%' },
      { critere: 'Passage aux limites et explication du changement d\'ordre (1 à 2)', poids: '25%' },
      { critere: 'Distinction molécularité vs ordre', poids: '10%' }
    ]
  },
  {
    id: 'kholle-si-statique-echelle-coulomb',
    titre: 'Khôlle de SI : Équilibre d\'une Échelle & Lois de Frottement de Coulomb',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Rappeler les lois de frottement de Coulomb pour un contact ponctuel ou linéique entre deux solides indéformables. Définir le cône de frottement et expliciter les conditions d\'adhérence et de glissement.',
      pointsCles: [
        'Action de contact décomposée en normale $N$ et tangentielle $T$ : $\\vec{R} = \\vec{N} + \\vec{T}$',
        'Adhérence : $\\|\\vec{T}\\| \\le f_0 \\|\\vec{N}\\|$ avec vitesse de glissement nulle $\\vec{V}_g = \\vec{0}$',
        'Glissement : $\\|\\vec{T}\\| = f \\|\\vec{N}\\|$ avec $\\vec{T}$ opposée à la vitesse de glissement relatif',
        'Angle de frottement : $\\varphi = \\arctan f$, $\\vec{R}$ contenu dans le cône de demi-angle $\\varphi$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une échelle homogène de longueur $2L$ et de masse $m$ est en appui en $A$ sur un sol horizontal et en $B$ contre un mur vertical parfaitement lisse (frottement nul en $B$, $f_B = 0$). Le contact au sol en $A$ présente un coefficient de frottement $f_A = 0{,}40$. L\'échelle fait un angle $\\alpha$ avec le sol horizontal.\n1. Écrire le Principe Fondamental de la Statique appliqué à l\'échelle isolée.\n2. Déterminer l\'angle d\'inclinaison minimal $\\alpha_{min}$ en deçà duquel l\'échelle glisse inévitablement.\n3. Une personne de masse $M = 3m$ monte sur l\'échelle. Déterminer si le risque de glissement augmente lorsque la personne s\'élève vers le sommet.',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur les moments',
          aide: 'Calculez la somme des moments au point $A$ pour éliminer les inconnues de contact $N_A$ et $T_A$.'
        },
        {
          condition: 'Le candidat ne sait pas comment modéliser la personne',
          aide: 'Placez la masse $M$ à une distance $x \\in [0, 2L]$ du point $A$ le long de l\'échelle.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Si le mur vertical n\'était pas lisse ($f_B > 0$), que deviendrait le degré d\'hyperstatisme statique du système ?"',
        reponseAttendue: 'Le système deviendrait hyperstatique d\'ordre 1 en statique plane (4 inconnues scalaires de liaison $N_A, T_A, N_B, T_B$ pour 3 équations d\'équilibre du PFS). La résolution nécessiterait alors de supposer un glissement simultané aux deux extrémités ou d\'introduire l\'élasticité des appuis.',
        piegeAEviter: 'Penser que le PFS permet toujours de trouver toutes les réactions sans hypothèse limite sur les frottements.'
      }
    ],
    criteresNotation: [
      { critere: 'Bilan complet et rigoureux des actions mécaniques extérieures', poids: '30%' },
      { critere: 'Résolution correcte du PFS (résultantes et moment en A)', poids: '35%' },
      { critere: 'Calcul exact de $\\tan\\alpha_{min} = \\frac{1}{2 f_A}$', poids: '25%' },
      { critere: 'Sens physique sur l\'aggravation du risque d\'accident avec la hauteur', poids: '10%' }
    ]
  }
];

