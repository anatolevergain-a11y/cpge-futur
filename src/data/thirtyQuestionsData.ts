import type { QuestionIncontournableItem } from './cpgeData';

export const THIRTY_QUESTIONS_INCONTOURNABLES: QuestionIncontournableItem[] = [
  // ==========================================
  // MATHEMATIQUES (12 questions)
  // ==========================================
  {
    id: 'must-noyaux-lemme-bezout',
    titre: 'Lemme des Noyaux : Preuve par l\'Identité de Bézout',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'MPSI'],
    tauxPresence: 'Présent dans ~85% des oraux et épreuves d\'Algèbre',
    chapitreAssocie: 'Réduction des endomorphismes & Polynômes',
    enonceType: 'Soit $P_1, P_2 \\in \\mathbb{K}[X]$ deux polynômes premiers entre eux et soit $u \\in \\mathcal{L}(E)$. Démontrer que $\\ker((P_1 P_2)(u)) = \\ker(P_1(u)) \\oplus \\ker(P_2(u))$, et préciser l\'expression des projecteurs spectraux associés.',
    piegesImmediats: [
      'Oublier l\'hypothèse fondamentale $\\mathrm{pgcd}(P_1, P_2) = 1$ indispensable pour appliquer Bézout.',
      'Affirmer la somme directe sans avoir démontré au préalable que l\'intersection est réduite à $\\{0\\}$.'
    ],
    redactionModele: [
      {
        etape: '1. Identité de Bézout',
        justification: 'Comme $P_1$ et $P_2$ sont premiers entre eux, il existe $(U, V) \\in \\mathbb{K}[X]^2$ tel que $U P_1 + V P_2 = 1$. En évaluant en l\'endomorphisme $u$ :',
        formule: 'U(u) \\circ P_1(u) + V(u) \\circ P_2(u) = \\mathrm{id}_E'
      },
      {
        etape: '2. Intersection nulle',
        justification: 'Soit $x \\in \\ker(P_1(u)) \\cap \\ker(P_2(u))$. Alors $P_1(u)(x) = 0$ et $P_2(u)(x) = 0$. En appliquant l\'égalité de Bézout à $x$ : $x = U(u)(P_1(u)(x)) + V(u)(P_2(u)(x)) = 0 + 0 = 0$. La somme est donc directe.'
      },
      {
        etape: '3. Décomposition de tout vecteur du noyau produit',
        justification: 'Soit $x \\in \\ker((P_1 P_2)(u))$. On pose $x_1 = (V P_2)(u)(x)$ et $x_2 = (U P_1)(u)(x)$. On a bien $x = x_1 + x_2$. De plus, $P_1(u)(x_1) = P_1(u)(V(u)(P_2(u)(x))) = V(u)((P_1 P_2)(u)(x)) = V(u)(0) = 0$, donc $x_1 \\in \\ker(P_1(u))$. De même $x_2 \\in \\ker(P_2(u))$.'
      }
    ],
    baremeEtPointsCles: [
      'Positionnement de Bézout scalaire puis morphisme (2 pts)',
      'Preuve rigoureuse de l\'intersection réduite au vecteur nul (2 pts)',
      'Décomposition explicite de tout vecteur par les projecteurs (3 pts)',
      'Commutation des polynômes en $u$ (1 pt)'
    ]
  },
  {
    id: 'must-taylor-young-unicite-dl',
    titre: 'Formule de Taylor-Young et Démonstration de l\'Unicité du DL',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'MP', 'PCSI', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~90% des épreuves de calcul asymptotique',
    chapitreAssocie: 'Développements Limités & Calcul Asymptotique',
    enonceType: 'Soit $f : I \\to \\mathbb{R}$ de classe $\\mathcal{C}^n$ au voisinage de 0. Énoncer la formule de Taylor-Young à l\'ordre $n$ et démontrer par récurrence l\'unicité des coefficients d\'un développement limité.',
    piegesImmediats: [
      'Écrire un grand $\\mathcal{O}(x^n)$ au lieu d\'un petit $o(x^n)$ dans Taylor-Young.',
      'Croire que l\'existence d\'un DL à l\'ordre 2 implique que la fonction est deux fois dérivable (faux, seule la classe $\\mathcal{C}^2$ l\'assure dans le sens direct).'
    ],
    redactionModele: [
      {
        etape: '1. Énoncé de Taylor-Young',
        justification: 'Si $f$ est $n$ fois dérivable en 0, elle admet un DL d\'ordre $n$ en 0 donné par :',
        formule: 'f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(0)}{k!} x^k + o(x^n)'
      },
      {
        etape: '2. Preuve de l\'unicité',
        justification: 'Supposons $\\sum_{k=0}^n a_k x^k + o(x^n) = \\sum_{k=0}^n b_k x^k + o(x^n)$. En posant $c_k = a_k - b_k$, on a $\\sum_{k=0}^n c_k x^k = o(x^n)$. Par passage à la limite quand $x \\to 0$, $c_0 = 0$. En divisant par $x$, $\\sum_{k=1}^n c_k x^{k-1} = o(x^{n-1})$, d\'où $c_1 = 0$. Par récurrence immédiate, $c_k = 0$ pour tout $k \\in \\{0, \\dots, n\\}$.'
      }
    ],
    baremeEtPointsCles: [
      'Précision des hypothèses de dérivabilité en 0 (2 pts)',
      'Définition rigoureuse de la notation $o(x^n) = x^n \\varepsilon(x)$ avec $\\varepsilon(x) \\to 0$ (2 pts)',
      'Démonstration pas à pas de l\'identification par division successive par $x$ (3 pts)'
    ]
  },
  {
    id: 'must-convergence-dominee-lebesgue',
    titre: 'Théorème de Convergence Dominée de Lebesgue : Rédaction Type Concours',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    tauxPresence: 'Présent dans ~90% des problèmes d\'Intégration',
    chapitreAssocie: 'Intégration sur un intervalle quelconque',
    enonceType: 'Calculer la limite quand $n \\to +\\infty$ de $I_n = \\int_0^{+\\infty} \\frac{n \\sin(x/n)}{x(1+x^2)}\\,\\mathrm{d}x$ en rédigeant les cinq points obligatoires du théorème de convergence dominée.',
    piegesImmediats: [
      'Oublier de vérifier la continuité par morceaux de chaque fonction de la suite.',
      'Proposer une fonction dominante dépendant de $n$ (faute éliminatoire).'
    ],
    redactionModele: [
      {
        etape: '1. Définition et continuité',
        justification: 'On pose $f_n(x) = \\frac{n \\sin(x/n)}{x(1+x^2)}$ pour $x > 0$. Pour tout $n \\ge 1$, $f_n$ est continue sur $]0, +\\infty[$.'
      },
      {
        etape: '2. Convergence simple',
        justification: 'Pour tout $x > 0$ fixé, quand $n \\to +\\infty$, $x/n \\to 0$ donc $\\sin(x/n) \\sim x/n$. Ainsi $n \\sin(x/n) \\to x$. La suite $(f_n)$ converge simplement sur $]0, +\\infty[$ vers la fonction $f(x) = \\frac{1}{1+x^2}$, continue sur $]0, +\\infty[$.'
      },
      {
        etape: '3. Hypothèse de domination',
        justification: 'Pour tout $u \\ge 0$, $|\\sin u| \\le u$. Pour $u = x/n$, $|\\sin(x/n)| \\le x/n \\implies n|\\sin(x/n)| \\le x$. Donc pour tout $n \\ge 1$ et tout $x > 0$ :',
        formule: '|f_n(x)| \\le \\frac{x}{x(1+x^2)} = \\frac{1}{1+x^2} = \\varphi(x)'
      },
      {
        etape: '4. Intégrabilité du dominant et conclusion',
        justification: 'La fonction $\\varphi$ est indépendante de $n$, continue et intégrable sur $]0, +\\infty[$ car $\\int_0^{+\\infty} \\frac{\\mathrm{d}x}{1+x^2} = [\\arctan x]_0^{+\\infty} = \\frac{\\pi}{2}$. Par le théorème de convergence dominée, $\\lim_{n \\to +\\infty} I_n = \\int_0^{+\\infty} f(x)\\,\\mathrm{d}x = \\frac{\\pi}{2}$.'
      }
    ],
    baremeEtPointsCles: [
      'Vérification de la continuité par morceaux de chaque $f_n$ (1 pt)',
      'Calcul correct de la limite simple $f(x)$ (2 pts)',
      'Majoration $|\sin u| \le u$ pour éliminer $n$ (2 pts - point clé)',
      'Justification de l\'intégrabilité de la fonction dominante $\\varphi$ (2 pts)',
      'Conclusion et valeur numérique finale $\\pi/2$ (1 pt)'
    ]
  },
  {
    id: 'must-diagonalisabilite-projecteurs-spectraux',
    titre: 'Décomposition Spectrale et Projecteurs Spectraux Associés',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PSI', 'PC'],
    tauxPresence: 'Présent dans ~70% des épreuves de Réduction',
    chapitreAssocie: 'Réduction des Endomorphismes & Diagonalisation',
    enonceType: 'Soit $u$ un endomorphisme diagonalisable d\'un espace vectoriel de dimension finie $n$, de valeurs propres distinctes $\\lambda_1, \\dots, \\lambda_p$. Définir les projecteurs spectraux $\\pi_k$ et démontrer que $\\sum_{k=1}^p \\pi_k = \\mathrm{id}_E$ et $u = \\sum_{k=1}^p \\lambda_k \\pi_k$.',
    piegesImmediats: [
      'Confondre les projecteurs spectraux avec des projecteurs orthogonaux (ils ne sont orthogonaux que si $u$ est normal ou symétrique dans un espace euclidien).',
      'Oublier de vérifier $\\pi_j \\circ \\pi_k = 0$ pour $j \\neq k$.'
    ],
    redactionModele: [
      {
        etape: '1. Somme directe des sous-espaces propres',
        justification: 'Puisque $u$ est diagonalisable, $E = \\bigoplus_{k=1}^p E_{\\lambda_k}(u)$. Tout vecteur $x \\in E$ se décompose de manière unique sous la forme $x = \\sum_{k=1}^p x_k$ avec $x_k \\in E_{\\lambda_k}(u)$.'
      },
      {
        etape: '2. Définition et complétude',
        justification: 'On définit $\\pi_k(x) = x_k$ le projecteur sur $E_{\\lambda_k}(u)$ parallèlement à $\\bigoplus_{j \\neq k} E_{\\lambda_j}(u)$. Par construction, $\\sum_{k=1}^p \\pi_k(x) = \\sum_{k=1}^p x_k = x$, donc :',
        formule: '\\sum_{k=1}^p \\pi_k = \\mathrm{id}_E'
      },
      {
        etape: '3. Formule de décomposition de l\'endomorphisme',
        justification: 'En appliquant $u$ à $x$ : $u(x) = \\sum_{k=1}^p u(x_k) = \\sum_{k=1}^p \\lambda_k x_k = \\sum_{k=1}^p \\lambda_k \\pi_k(x)$. Donc $u = \\sum_{k=1}^p \\lambda_k \\pi_k$. De plus, pour tout polynôme $Q$, $Q(u) = \\sum_{k=1}^p Q(\\lambda_k) \\pi_k$.'
      }
    ],
    baremeEtPointsCles: [
      'Définition géométrique propre des projecteurs spectraux (2 pts)',
      'Preuve de la résolution de l\'identité $\\sum \\pi_k = \\mathrm{id}$ (2 pts)',
      'Décomposition de $u$ et puissances $u^m = \\sum \\lambda_k^m \\pi_k$ (3 pts)'
    ]
  },
  {
    id: 'must-serie-fourier-parseval-sommation',
    titre: 'Formule de Parseval et Sommation de Séries Numériques $\\sum 1/n^2$ et $\\sum 1/n^4$',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~80% des épreuves d\'Analyse Harmonique',
    chapitreAssocie: 'Séries Entières & Analyse Harmonique',
    enonceType: 'Soit $f$ la fonction $2\\pi$-périodique paire définie sur $[-\\pi, \\pi]$ par $f(x) = x^2$. Calculer ses coefficients de Fourier trigonométriques. En déduire la somme $\\sum_{n=1}^{+\\infty} \\frac{1}{n^2}$ par Dirichlet et $\\sum_{n=1}^{+\\infty} \\frac{1}{n^4}$ par la formule de Parseval.',
    piegesImmediats: [
      'Oublier le coefficient $a_0 = \\frac{1}{2\\pi} \\int_{-\\pi}^\\pi f(x)\\mathrm{d}x$ (ou le facteur 2 selon la convention d\'écriture).',
      'Confondre le théorème de Dirichlet ponctuel en $x=0$ et l\'égalité de Parseval sur l\'énergie quadratique.'
    ],
    redactionModele: [
      {
        etape: '1. Calcul des coefficients de Fourier',
        justification: 'Comme $f$ est paire, $b_n(f) = 0$ pour tout $n \\ge 1$. Pour le coefficient constant : $a_0 = \\frac{1}{\\pi} \\int_0^\\pi x^2\\,\\mathrm{d}x = \\frac{\\pi^2}{3}$. Par deux intégrations par parties successives pour $n \\ge 1$ :',
        formule: 'a_n = \\frac{2}{\\pi} \\int_0^\\pi x^2 \\cos(nx)\\,\\mathrm{d}x = \\frac{4(-1)^n}{n^2}'
      },
      {
        etape: '2. Application du théorème de Dirichlet en 0',
        justification: 'La fonction $f$ est continue et de classe $\\mathcal{C}^1$ par morceaux sur $\\mathbb{R}$. D\'après le théorème de Dirichlet, pour tout $x$, $f(x) = a_0 + \\sum_{n=1}^{+\\infty} a_n \\cos(nx)$. En évaluant en $x = 0$ : $0 = \\frac{\\pi^2}{3} + 4 \\sum_{n=1}^{+\\infty} \\frac{(-1)^n}{n^2}$, ce qui donne $\\sum_{n=1}^{+\\infty} \\frac{(-1)^{n-1}}{n^2} = \\frac{\\pi^2}{12}$, puis $\\zeta(2) = \\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$.'
      },
      {
        etape: '3. Application de l\'égalité de Parseval',
        justification: 'L\'égalité de Parseval s\'écrit $\\frac{1}{2\\pi} \\int_{-\\pi}^\\pi f(x)^2\\,\\mathrm{d}x = a_0^2 + \\frac{1}{2} \\sum_{n=1}^{+\\infty} a_n^2$. Le terme de gauche vaut $\\frac{1}{\\pi} \\int_0^\\pi x^4\\,\\mathrm{d}x = \\frac{\\pi^4}{5}$. On en déduit $\\frac{\\pi^4}{5} = \\frac{\\pi^4}{9} + \\frac{1}{2} \\sum_{n=1}^{+\\infty} \\frac{16}{n^4}$, d\'où :',
        formule: '\\sum_{n=1}^{+\\infty} \\frac{1}{n^4} = \\frac{\\pi^4}{90}'
      }
    ],
    baremeEtPointsCles: [
      'Intégration par parties rigoureuse des coefficients $a_n$ (2 pts)',
      'Justification des hypothèses de Dirichlet (continuité $\\mathcal{C}^1$ par morceaux) (2 pts)',
      'Obtention de $\\zeta(2) = \\pi^2/6$ (1.5 pt)',
      'Énoncé et calcul de Parseval pour $\\zeta(4) = \\pi^4/90$ (2.5 pts)'
    ]
  },
  {
    id: 'must-densite-gln-c-algebre',
    titre: 'Densité de $GL_n(\\mathbb{C})$ dans $\\mathcal{M}_n(\\mathbb{C})$ et Application',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    tauxPresence: 'Présent dans ~75% des oraux X-ENS/Mines',
    chapitreAssocie: 'Topologie des EVN : Compacité & Normes',
    enonceType: '1. Démontrer que le groupe linéaire $GL_n(\\mathbb{C})$ est dense dans $\\mathcal{M}_n(\\mathbb{C})$.\n2. Application : Démontrer que pour toutes matrices $A, B \\in \\mathcal{M}_n(\\mathbb{C})$, $\\chi_{AB}(X) = \\chi_{BA}(X)$.',
    piegesImmediats: [
      'Tenter une démonstration par perturbation sur $\\mathbb{R}$ sans vérifier que le déterminant ne s\'annule pas (sur $\\mathbb{R}$, le spectre peut être vide mais $\\mathbb{C}$ garantit que le spectre est fini).',
      'Oublier de justifier la continuité de l\'application matricielle $M \\mapsto \\chi_M(X)$.'
    ],
    redactionModele: [
      {
        etape: '1. Preuve de la densité',
        justification: 'Soit $A \\in \\mathcal{M}_n(\\mathbb{C})$. Le spectre $\\mathrm{Sp}(A)$ est un sous-ensemble fini ayant au plus $n$ éléments. Pour tout $k \\ge 1$, considérons la matrice $A_k = A - \\frac{1}{k} I_n$. Pour tout $k$ tel que $1/k \\notin \\mathrm{Sp}(A)$ (ce qui est vrai pour tout $k > k_0$), la matrice $A_k$ est inversible. Comme $\\lim_{k \\to +\\infty} A_k = A$, la matrice $A$ est limite d\'une suite d\'éléments de $GL_n(\\mathbb{C})$.'
      },
      {
        etape: '2. Cas inversible pour le polynôme caractéristique',
        justification: 'Si $A \\in GL_n(\\mathbb{C})$, alors $A B$ et $B A = A^{-1}(A B) A$ sont deux matrices semblables. Deux matrices semblables ayant le même polynôme caractéristique, on a $\\chi_{AB}(X) = \\chi_{BA}(X)$.'
      },
      {
        etape: '3. Prolongement par continuité',
        justification: 'Fixons $B \\in \\mathcal{M}_n(\\mathbb{C})$. Les applications $A \\mapsto \\chi_{AB}(X)$ et $A \\mapsto \\chi_{BA}(X)$ sont polynomiales en les coefficients de $A$, donc continues sur $\\mathcal{M}_n(\\mathbb{C})$. Comme elles coïncident sur la partie dense $GL_n(\\mathbb{C})$, elles sont identiquement égales sur $\\mathcal{M}_n(\\mathbb{C})$ tout entier.'
      }
    ],
    baremeEtPointsCles: [
      'Construction de la suite perturbée $A - \\frac{1}{k} I$ et finitude du spectre (3 pts)',
      'Cas semblable élémentaire quand $A$ est inversible (2 pts)',
      'Argument de prolongement par densité et continuité polynomiale (3 pts)'
    ]
  },
  {
    id: 'must-theoreme-cauchy-lipschitz-autonome',
    titre: 'Théorème de Cauchy-Lipschitz : Existence, Unicité et Solutions Maximales',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    tauxPresence: 'Présent dans ~70% des oraux de Mathématiques',
    chapitreAssocie: 'Équations Différentielles & Systèmes Linéaires',
    enonceType: 'Énoncer le théorème de Cauchy-Lipschitz local pour une EDO $y\' = f(t, y)$. Expliquer pourquoi deux courbes intégrales maximales sont soit disjointes, soit confondues.',
    piegesImmediats: [
      'Oublier l\'hypothèse de caractère localement lipschitzien par rapport à la seconde variable (ou de classe $\\mathcal{C}^1$).',
      'Confondre intervalle de définition d\'une solution et intervalle de maximalité.'
    ],
    redactionModele: [
      {
        etape: '1. Énoncé de Cauchy-Lipschitz',
        justification: 'Soit $U$ un ouvert de $\\mathbb{R} \\times E$ et $f : U \\to E$ continue et localement lipschitzienne par rapport à sa seconde variable (par exemple de classe $\\mathcal{C}^1$). Pour tout $(t_0, y_0) \\in U$, il existe un unique problème de Cauchy admettant une solution maximale $(J, y)$ vérifiant $y(t_0) = y_0$. L\'intervalle $J$ est ouvert.'
      },
      {
        etape: '2. Intersection de deux solutions maximales',
        justification: 'Soient $(J_1, y_1)$ et $(J_2, y_2)$ deux solutions maximales. Supposons qu\'elles se croisent en un point : $\\exists t_1 \\in J_1 \\cap J_2$ tel que $y_1(t_1) = y_2(t_1)$. D\'après l\'unicité locale du problème de Cauchy en ce point, les deux solutions coïncident sur un voisinage de $t_1$. Par connexité de $J_1 \\cap J_2$, l\'ensemble des points de coïncidence est fermé et ouvert, donc $y_1 = y_2$ sur $J_1 \\cap J_2$. Par maximalité, $J_1 = J_2$ et $y_1 = y_2$.'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé précis des hypothèses ($\mathcal{C}^1$ ou localement lipschitzienne) (3 pts)',
      'Caractère ouvert de l\'intervalle maximal (2 pts)',
      'Preuve de non-croisement par connexité et unicité (3 pts)'
    ]
  },
  {
    id: 'must-inversion-locale-diff',
    titre: 'Théorème d\'Inversion Locale & Difféomorphismes',
    matiere: 'Mathématiques',
    filieres: ['MP', 'MPI'],
    tauxPresence: 'Présent dans ~65% des oraux X-ENS MP/MPI',
    chapitreAssocie: 'Calcul Différentiel & Extrema',
    enonceType: 'Soit $f : U \\to \\mathbb{R}^n$ une application de classe $\\mathcal{C}^1$ sur un ouvert $U$ de $\\mathbb{R}^n$. Énoncer le théorème d\'inversion locale et donner l\'expression de la différentielle de la réciproque locale $\\mathrm{d}(f^{-1})(f(a))$.',
    piegesImmediats: [
      'Croire que si la jacobienne est inversible partout, $f$ est un difféomorphisme global (faux : contre-exemple $z \\mapsto e^z$ de $\\mathbb{C}$ dans $\\mathbb{C}^*$).',
      'Inverser l\'ordre des différentielles dans l\'évaluation.'
    ],
    redactionModele: [
      {
        etape: '1. Énoncé du Théorème d\'Inversion Locale',
        justification: 'Soit $a \\in U$. Si la différentielle $\\mathrm{d}f(a) \\in \\mathcal{L}(\\mathbb{R}^n)$ est inversible (c\'est-à-dire $\\det(J_f(a)) \\neq 0$), alors il existe un voisinage ouvert $V$ de $a$ et un voisinage ouvert $W$ de $f(a)$ tels que $f$ induise un $\\mathcal{C}^1$-difféomorphisme de $V$ sur $W$.'
      },
      {
        etape: '2. Différentielle de la réciproque',
        justification: 'Pour tout $y = f(x) \\in W$, l\'application réciproque $g = f^{-1}$ vérifie $f \\circ g = \\mathrm{id}_W$. En différentiant par composition :',
        formule: '\\mathrm{d}(f^{-1})(f(x)) = (\\mathrm{d}f(x))^{-1} \\quad \\text{et en matrice jacobienne } J_{f^{-1}}(f(x)) = (J_f(x))^{-1}'
      }
    ],
    baremeEtPointsCles: [
      'Condition d\'inversibilité de la jacobienne en un point (2 pts)',
      'Nature ouverte des voisinages $V$ et $W$ (2 pts)',
      'Formule matricielle de la jacobienne inverse (3 pts)'
    ]
  },
  {
    id: 'must-tcl-reduction-centrale',
    titre: 'Théorème Central Limite (TCL) : Hypothèses et Normalisation',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves de Probabilités',
    chapitreAssocie: 'Probabilités : Variables Aléatoires à Densité & Vecteurs Aléatoires',
    enonceType: 'Soit $(X_n)_{n \\ge 1}$ une suite de variables aléatoires i.i.d. admettant une espérance $\\mu$ et une variance $\\sigma^2 > 0$. Énoncer rigoureusement le Théorème Central Limite et définir la convergence en loi associée.',
    piegesImmediats: [
      'Oublier le facteur $\\sqrt{n}$ au dénominateur ou diviser par $n$ au lieu de $\\sigma \\sqrt{n}$.',
      'Confondre convergence en probabilité, convergence presque sûre et convergence en loi.'
    ],
    redactionModele: [
      {
        etape: '1. Centrage et réduction de la somme',
        justification: 'On pose $S_n = \\sum_{k=1}^n X_k$. Alors $\\mathbb{E}(S_n) = n \\mu$ et $\\mathbb{V}(S_n) = n \\sigma^2$. La variable centrée réduite associée est :',
        formule: 'Z_n = \\frac{S_n - n\\mu}{\\sigma \\sqrt{n}} = \\frac{\\overline{X}_n - \\mu}{\\sigma / \\sqrt{n}}'
      },
      {
        etape: '2. Convergence en loi',
        justification: 'La suite $(Z_n)$ converge en loi vers une variable normale standard $\\mathcal{N}(0, 1)$, c\'est-à-dire que pour tous réels $a < b$ :',
        formule: '\\lim_{n \\to +\\infty} P(a \\le Z_n \\le b) = \\frac{1}{\\sqrt{2\\pi}} \\int_a^b e^{-t^2/2}\\,\\mathrm{d}t'
      }
    ],
    baremeEtPointsCles: [
      'Hypothèses indispensables : i.i.d., moment d\'ordre 2 fini et variance non nulle $\\sigma^2 > 0$ (2.5 pts)',
      'Formule exacte de normalisation en $\\sigma \\sqrt{n}$ (2.5 pts)',
      'Définition rigoureuse de la convergence en loi par les fonctions de répartition (3 pts)'
    ]
  },
  {
    id: 'must-gram-schmidt-factorisation-qr',
    titre: 'Procédé de Gram-Schmidt et Factorisation $A = Q R$',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    tauxPresence: 'Présent dans ~75% des épreuves d\'Algèbre Numérique',
    chapitreAssocie: 'Espaces Préhilbertiens Réels & Procédé de Gram-Schmidt',
    enonceType: 'Soit $A \\in GL_n(\\mathbb{R})$. Démontrer par le procédé de Gram-Schmidt qu\'il existe une unique matrice orthogonale $Q \\in O_n(\\mathbb{R})$ et une unique matrice triangulaire supérieure $R \\in \\mathcal{T}_n^{++}(\\mathbb{R})$ à coefficients diagonaux strictement positifs telles que $A = Q R$.',
    piegesImmediats: [
      'Oublier que les coefficients diagonaux de $R$ doivent être STRICTEMENT POSITIFS pour assurer l\'unicité.',
      'Confondre la factorisation $Q R$ et la décomposition polaire $O S$.'
    ],
    redactionModele: [
      {
        etape: '1. Orthonormalisation des colonnes de $A$',
        justification: 'Soit $(C_1, \\dots, C_n)$ les colonnes de $A$. Comme $A$ est inversible, cette famille forme une base de $\\mathbb{R}^n$. Par le procédé d\'orthonormalisation de Gram-Schmidt, il existe une unique base orthonormale $(q_1, \\dots, q_n)$ telle que pour tout $j \\in \\{1, \\dots, n\\}$ :\n$$\\mathrm{Vect}(q_1, \\dots, q_j) = \\mathrm{Vect}(C_1, \\dots, C_j) \\quad \\text{avec } \\langle C_j, q_j \\rangle > 0$$'
      },
      {
        etape: '2. Matrice de passage et coefficients de $R$',
        justification: 'Chaque vecteur $C_j$ se décompose uniquement sur $(q_1, \\dots, q_j)$ sous la forme $C_j = \\sum_{i=1}^j R_{ij} q_i$. En posant $Q$ la matrice des colonnes $q_i$ (qui vérifie $Q^T Q = I_n$) et $R = (R_{ij})$ qui est triangulaire supérieure avec $R_{jj} = \\|C_j - p_{j-1}(C_j)\\| > 0$ :',
        formule: 'A = Q R'
      }
    ],
    baremeEtPointsCles: [
      'Application de Gram-Schmidt à la famille libre des colonnes (3 pts)',
      'Structure triangulaire supérieure de $R$ par triangularité des sous-espaces emboîtés (3 pts)',
      'Unicité garantie par la stricte positivité de la diagonale (2 pts)'
    ]
  },
  {
    id: 'must-integrales-wallis-stirling',
    titre: 'Intégrales de Wallis et Démonstration de la Formule de Stirling',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves d\'Analyse',
    chapitreAssocie: 'Formules de Taylor, Développements Limités & Calcul Asymptotique',
    enonceType: 'On pose $W_n = \\int_0^{\\pi/2} \\sin^n(t)\\,\\mathrm{d}t$. Établir la relation de récurrence $W_{n+2} = \\frac{n+1}{n+2} W_n$, montrer que $W_n \\sim \\sqrt{\\frac{\\pi}{2n}}$ et en déduire la constante $\\sqrt{2\\pi}$ dans la formule de Stirling $n! \\sim \\sqrt{2\\pi n} (n/e)^n$.',
    piegesImmediats: [
      'Oublier d\'encadrer $W_{n+1} \\le W_n \\le W_{n-1}$ pour prouver que $W_n \\sim W_{n+1}$.',
      'Confondre les termes pairs et impairs dans la formule de Wallis.'
    ],
    redactionModele: [
      {
        etape: '1. Intégration par parties',
        justification: 'On écrit $\\sin^{n+2}(t) = \\sin(t) \\sin^{n+1}(t)$. En posant $u = \\sin^{n+1}(t)$ et $v\' = \\sin(t)$ :\n$$W_{n+2} = [-\\cos t \\sin^{n+1} t]_0^{\\pi/2} + (n+1) \\int_0^{\\pi/2} \\cos^2 t \\sin^n t\\,\\mathrm{d}t = (n+1)(W_n - W_{n+2})$$\nD\'où $(n+2) W_{n+2} = (n+1) W_n$, soit $W_{n+2} = \\frac{n+1}{n+2} W_n$.'
      },
      {
        etape: '2. Équivalent asymptotique',
        justification: 'La suite $(n+1) W_{n+1} W_n$ est constante égale à $W_1 W_0 = 1 \\times \\frac{\\pi}{2} = \\frac{\\pi}{2}$. Comme $t \\mapsto \\sin t \\in [0, 1]$, la suite $(W_n)$ est décroissante, donc $\\frac{W_{n+1}}{W_n} \\to 1$. On en déduit $n W_n^2 \\to \\frac{\\pi}{2}$, d\'où :',
        formule: 'W_n \\sim \\sqrt{\\frac{\\pi}{2n}}'
      }
    ],
    baremeEtPointsCles: [
      'Intégration par parties avec $\\cos^2 t = 1 - \\sin^2 t$ (2.5 pts)',
      'Décroissance et produit constant $(n+1) W_{n+1} W_n = \\pi/2$ (3 pts)',
      'Conclusion de l\'équivalent de Wallis (2.5 pts)'
    ]
  },
  {
    id: 'must-theoreme-inversion-fourier',
    titre: 'Transformée de Fourier dans $L^1$ et Formule d\'Inversion',
    matiere: 'Mathématiques',
    filieres: ['MP', 'MPI'],
    tauxPresence: 'Présent dans ~70% des épreuves de Maths de haut niveau',
    chapitreAssocie: 'Séries Entières & Analyse Harmonique',
    enonceType: 'Soit $f \\in L^1(\\mathbb{R})$ telle que sa transformée de Fourier $\\hat{f}(\\xi) = \\int_{-\\infty}^{+\\infty} f(x) e^{-2i\\pi \\xi x}\\,\\mathrm{d}x$ soit également intégrable sur $\\mathbb{R}$. Énoncer la formule d\'inversion de Fourier et rappeler le lemme de Riemann-Lebesgue.',
    piegesImmediats: [
      'Oublier le facteur $2\\pi$ ou le signe dans l\'exponentielle selon la convention choisie.',
      'Croire que la transformée de Fourier d\'une fonction $L^1$ est toujours $L^1$ (faux : la porte donne un sinus cardinal non intégrable).'
    ],
    redactionModele: [
      {
        etape: '1. Lemme de Riemann-Lebesgue',
        justification: 'Pour toute fonction $f \\in L^1(\\mathbb{R})$ :',
        formule: '\\lim_{|\\xi| \\to +\\infty} \\hat{f}(\\xi) = 0'
      },
      {
        etape: '2. Formule d\'inversion',
        justification: 'Si $f \\in L^1(\\mathbb{R})$ et $\\hat{f} \\in L^1(\\mathbb{R})$, alors $f$ coïncide presque partout avec une fonction continue bornée donnée par la formule d\'inversion réciproque :',
        formule: 'f(x) = \\int_{-\\infty}^{+\\infty} \\hat{f}(\\xi) e^{+2i\\pi \\xi x}\\,\\mathrm{d}\\xi'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé rigoureux du lemme de Riemann-Lebesgue (2 pts)',
      'Conditions de double intégrabilité $f \\in L^1$ et $\\hat{f} \\in L^1$ (3 pts)',
      'Formule d\'inversion avec le signe opposé $+2i\\pi \\xi x$ (3 pts)'
    ]
  },

  // ==========================================
  // PHYSIQUE (10 questions)
  // ==========================================
  {
    id: 'must-maxwell-passage-interfaces',
    titre: 'Relations de Passage Électromagnétiques aux Interfaces',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~90% des problèmes d\'Électromagnétisme',
    chapitreAssocie: 'Électromagnétisme & Équations de Maxwell',
    enonceType: 'À l\'interface entre deux milieux 1 et 2 portant une densité surfacique de charge $\\sigma$ et de courant $\\vec{j}_s$, établir à partir des équations de Maxwell sous forme locale les relations de passage pour les composantes normales et tangentielles des champs $\\vec{E}$ et $\\vec{B}$.',
    piegesImmediats: [
      'Inverser l\'ordre de la normale unitaire $\\vec{n}_{1 \\to 2}$ dans le produit vectoriel du saut de champ magnétique.',
      'Oublier que la composante tangentielle du champ électrique est TOUJOURS continue, même en présence de charges ou courants de surface.'
    ],
    redactionModele: [
      {
        etape: '1. Continuité de la composante tangentielle de $\\vec{E}$',
        justification: 'D\'après Maxwell-Faraday $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$, en intégrant sur un rectangle de hauteur infinitésimale tendant vers 0 :',
        formule: '\\vec{E}_{2, t} - \\vec{E}_{1, t} = \\vec{0} \\iff \\vec{n}_{1 \\to 2} \\wedge (\\vec{E}_2 - \\vec{E}_1) = \\vec{0}'
      },
      {
        etape: '2. Discontinuité de la composante normale de $\\vec{E}$',
        justification: 'D\'après Maxwell-Gauss $\\mathrm{div}\\,\\vec{E} = \\rho/\\varepsilon_0$, en intégrant sur un cylindre de boîte de pilules aplati :',
        formule: 'E_{2, n} - E_{1, n} = \\frac{\\sigma}{\\varepsilon_0} \\iff (\\vec{E}_2 - \\vec{E}_1) \\cdot \\vec{n}_{1 \\to 2} = \\frac{\\sigma}{\\varepsilon_0}'
      },
      {
        etape: '3. Relations pour le champ magnétique $\\vec{B}$',
        justification: 'D\'après Maxwell-Thomson $\\mathrm{div}\\,\\vec{B} = 0$, la composante normale est toujours continue : $B_{2, n} - B_{1, n} = 0$. D\'après Maxwell-Ampère, la composante tangentielle subit un saut :',
        formule: '\\vec{B}_{2, t} - \\vec{B}_{1, t} = \\mu_0 \\vec{j}_s \\wedge \\vec{n}_{1 \\to 2} \\iff \\vec{n}_{1 \\to 2} \\wedge (\\vec{B}_2 - \\vec{B}_1) = \\mu_0 \\vec{j}_s'
      }
    ],
    baremeEtPointsCles: [
      'Définition claire du vecteur normal $\\vec{n}_{1 \\to 2}$ (1 pt)',
      'Continuité tangentielle de $\\vec{E}$ et normale de $\\vec{B}$ (3 pts)',
      'Saut de charge normale de $\\vec{E}$ par Gauss (2 pts)',
      'Saut de courant tangentiel de $\\vec{B}$ avec le bon produit vectoriel (2 pts)'
    ]
  },
  {
    id: 'must-loi-refraction-snell-descartes',
    titre: 'Démonstration des Lois de Snell-Descartes par le Principe de Fermat',
    matiere: 'Physique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~85% des épreuves d\'Optique',
    chapitreAssocie: 'Optique Géométrique & Systèmes de Gauss',
    enonceType: 'Soit la surface de séparation plane séparant deux milieux d\'indices $n_1$ et $n_2$. En utilisant le principe de Fermat stipulant que le chemin optique $[AB]$ suivi par la lumière est stationnaire, démontrer la loi de la réfraction $n_1 \\sin(i_1) = n_2 \\sin(i_2)$.',
    piegesImmediats: [
      'Mesurer les angles par rapport à la surface du dioptre au lieu de la normale au dioptre.',
      'Oublier d\'exprimer le chemin optique comme la somme pondérée des distances géométriques par les indices $n_1 d_1 + n_2 d_2$.'
    ],
    redactionModele: [
      {
        etape: '1. Expression du chemin optique',
        justification: 'Soit $A(0, y_A)$ dans le milieu 1, $B(d, y_B)$ dans le milieu 2 et $I(x, 0)$ le point de réfraction sur le dioptre situé sur l\'axe $y=0$. Le chemin optique $[AIB]$ vaut :\n$$L(x) = n_1 AI + n_2 IB = n_1 \\sqrt{x^2 + y_A^2} + n_2 \\sqrt{(d-x)^2 + y_B^2}$$'
      },
      {
        etape: '2. Stationnarité (dérivation par rapport à $x$)',
        justification: 'D\'après le principe de Fermat, le trajet réel stationnarise le chemin optique : $\\frac{\\mathrm{d}L}{\\mathrm{d}x} = 0$. On calcule la dérivée :\n$$\\frac{\\mathrm{d}L}{\\mathrm{d}x} = n_1 \\frac{x}{\\sqrt{x^2 + y_A^2}} - n_2 \\frac{d-x}{\\sqrt{(d-x)^2 + y_B^2}} = 0$$'
      },
      {
        etape: '3. Identification trigonométrique',
        justification: 'Par définition des angles d\'incidence et de réfraction par rapport à la normale : $\\sin(i_1) = \\frac{x}{AI}$ et $\\sin(i_2) = \\frac{d-x}{IB}$. La condition $\\frac{\\mathrm{d}L}{\\mathrm{d}x} = 0$ donne immédiatement :',
        formule: 'n_1 \\sin(i_1) = n_2 \\sin(i_2)'
      }
    ],
    baremeEtPointsCles: [
      'Définition géométrique propre du repère et du chemin optique (2.5 pts)',
      'Dérivation correcte des racines carrées (2.5 pts)',
      'Reconnaissance immédiate des sinus par projection trigonométrique (3 pts)'
    ]
  },
  {
    id: 'must-onde-stationnaire-corde-melde',
    titre: 'Onde Stationnaire sur une Corde Vibrante (Corde de Melde)',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~80% des épreuves sur les Ondes',
    chapitreAssocie: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    enonceType: 'Une corde de masse linéique $\\mu$ sous tension $T_0$ est fixée en ses extrémités $x=0$ et $x=L$. Établir la solution générale stationnaire de l\'équation de d\'Alembert et en déduire la quantification des fréquences propres $f_n = n \\frac{c}{2L}$.',
    piegesImmediats: [
      'Confondre la distance entre deux nœuds consécutifs (qui vaut $\\lambda/2$) avec la longueur d\'onde $\\lambda$.',
      'Oublier d\'imposer les deux conditions aux limites $\\psi(0, t) = 0$ et $\\psi(L, t) = 0$.'
    ],
    redactionModele: [
      {
        etape: '1. Équation de d\'Alembert et séparation des variables',
        justification: 'L\'équation d\'onde s\'écrit $\\frac{\\partial^2 y}{\\partial x^2} - \\frac{1}{c^2} \\frac{\\partial^2 y}{\\partial t^2} = 0$ avec $c = \\sqrt{T_0/\\mu}$. En cherchant une solution à variables séparées $y(x, t) = X(x) T(t)$, on obtient $X(x) = A \\sin(kx) + B \\cos(kx)$ et $T(t) = C \\cos(\\omega t + \\phi)$ avec $\\omega = k c$.'
      },
      {
        etape: '2. Application des conditions aux limites',
        justification: '- En $x=0$ : $y(0, t) = 0 \\implies B = 0$, donc $X(x) = A \\sin(kx)$.\n- En $x=L$ : $y(L, t) = 0 \\implies A \\sin(kL) = 0$. Comme on cherche une solution non triviale ($A \\neq 0$), cela impose $k L = n \\pi$ avec $n \\in \\mathbb{N}^*$.'
      },
      {
        etape: '3. Quantification des fréquences propres',
        justification: 'Comme $k = \\frac{2\\pi}{\\lambda} = \\frac{2\\pi f}{c}$, la condition $k_n L = n \\pi$ donne :',
        formule: 'f_n = n \\frac{c}{2L} = \\frac{n}{2L} \\sqrt{\\frac{T_0}{\\mu}}'
      }
    ],
    baremeEtPointsCles: [
      'Poser la méthode de séparation des variables $X(x)T(t)$ (2 pts)',
      'Imposition stricte des conditions aux limites aux extrémités fixes (3 pts)',
      'Déduction des harmoniques et de la formule de Mersenne (3 pts)'
    ]
  },
  {
    id: 'must-effet-doppler-fizeau-acoustique',
    titre: 'Effet Doppler Acoustique : Source Mobile et Récepteur Fixe',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~75% des épreuves d\'Ondes',
    chapitreAssocie: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    enonceType: 'Une source sonore émettant à la fréquence $f_0$ se déplace à la vitesse $v_s$ vers un observateur fixe dans l\'air où le son se propage à la célérité $c$. Établir l\'expression de la fréquence perçue $f_r = f_0 \\frac{c}{c - v_s}$.',
    piegesImmediats: [
      'Confondre le cas de la source mobile et celui du récepteur mobile (en acoustique classique, ces deux situations ne sont pas symétriques en raison du référentiel privilégié du milieu de propagation).',
      'Se tromper de signe au dénominateur lors du rapprochement ($c - v_s$ donne une fréquence plus aiguë).'
    ],
    redactionModele: [
      {
        etape: '1. Déplacement de la source entre deux fronts d\'onde',
        justification: 'La source émet un premier front d\'onde à $t=0$ depuis $x=0$. Au temps $T_0 = 1/f_0$, la source a avancé de la distance $d = v_s T_0$ et émet un second front d\'onde. Le premier front d\'onde s\'est propagé sur la distance $c T_0$.'
      },
      {
        etape: '2. Longueur d\'onde apparente perçue',
        justification: 'La distance spatiale entre deux fronts d\'onde consécutifs dans la direction du mouvement est la nouvelle longueur d\'onde apparente :',
        formule: '\\lambda\' = c T_0 - v_s T_0 = (c - v_s) T_0 = \\frac{c - v_s}{f_0}'
      },
      {
        etape: '3. Fréquence reçue par l\'observateur immobile',
        justification: 'L\'observateur fixe voit passer ces fronts d\'onde à la vitesse $c$. La fréquence perçue est donc :',
        formule: 'f_r = \\frac{c}{\\lambda\'} = f_0 \\frac{c}{c - v_s}'
      }
    ],
    baremeEtPointsCles: [
      'Schéma temporel clair des positions d\'émission des fronts successifs (2.5 pts)',
      'Calcul sans faille de la longueur d\'onde comprimée $\\lambda\'$ (2.5 pts)',
      'Déduction de la fréquence perçue plus aiguë lors du rapprochement (3 pts)'
    ]
  },
  {
    id: 'must-conservation-debit-bernoulli',
    titre: 'Théorème de Bernoulli et Vidange d\'un Réservoir (Formule de Torricelli)',
    matiere: 'Physique',
    filieres: ['PC', 'PSI', 'BCPST'],
    tauxPresence: 'Présent dans ~85% des épreuves de Mécanique des Fluides',
    chapitreAssocie: 'Mécanique des Fluides : Statique, Euler & Navier-Stokes',
    enonceType: 'Un grand réservoir de section $S$ ouvert à l\'air libre contient de l\'eau sur une hauteur $h$. Un petit orifice de section $s \\ll S$ est percé à la base. Énoncer les hypothèses du théorème de Bernoulli et démontrer la formule de Torricelli $v = \\sqrt{2gh}$.',
    piegesImmediats: [
      'Appliquer Bernoulli sans justifier les 4 hypothèses (fluide incompressible, homogène, parfait, écoulement stationnaire).',
      'Oublier que la pression à la sortie du jet est égale à la pression atmosphérique $P_{atm}$.'
    ],
    redactionModele: [
      {
        etape: '1. Hypothèses du Théorème de Bernoulli',
        justification: 'L\'écoulement est supposé stationnaire, incompressible, homogène et non visqueux (fluide parfait). Le long d\'une ligne de courant reliant la surface libre (1) à l\'orifice de sortie (2) :',
        formule: 'P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g z_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g z_2'
      },
      {
        etape: '2. Conservation du débit et hypothèse de grand réservoir',
        justification: 'La conservation du débit volumique donne $v_1 S = v_2 s \\implies v_1 = v_2 \\frac{s}{S}$. Comme $s \\ll S$, le terme cinétique à la surface est totalement négligeable : $v_1^2 \\ll v_2^2$, on pose $v_1 \\approx 0$.'
      },
      {
        etape: '3. Égalité des pressions et vitesse de sortie',
        justification: 'En surface et à la sortie libre du jet dans l\'air, $P_1 = P_2 = P_{atm}$. En fixant l\'origine des altitudes en sortie ($z_2 = 0, z_1 = h$) : $\\rho g h = \\frac{1}{2}\\rho v_2^2$, d\'où :',
        formule: 'v_2 = \\sqrt{2gh}'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé complet des 4 hypothèses du théorème de Bernoulli (2 pts)',
      'Justification de $v_1 \\approx 0$ par l\'équation de continuité $s/S \\ll 1$ (2 pts)',
      'Déduction de la formule de Torricelli $v = \\sqrt{2gh}$ (3 pts)',
      'Vérification dimensionnelle $[v] = \\text{m/s}$ (1 pt)'
    ]
  },
  {
    id: 'must-oscillation-pendule-faibles-amplitudes',
    titre: 'Pendule Simple : Équation Différentielle et Période aux Petites Oscillations',
    matiere: 'Physique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves de Mécanique',
    chapitreAssocie: 'Mécanique du Point & Oscillateurs Harmoniques',
    enonceType: 'Soit un pendule simple constitué d\'une masse ponctuelle $m$ suspendue à un fil inextensible de longueur $\\ell$. Établir l\'équation différentielle du mouvement par le Théorème du Moment Cinétique, puis linéariser pour de faibles amplitudes et déterminer la période propre $T_0$.',
    piegesImmediats: [
      'Se tromper de signe dans le moment du poids $-\\ell m g \\sin\\theta$.',
      'Confondre la pulsation propre $\\omega_0 = \\sqrt{g/\\ell}$ et la période $T_0 = 2\\pi/\\omega_0$.'
    ],
    redactionModele: [
      {
        etape: '1. Bilan des actions mécaniques et moment cinétique',
        justification: 'Le système est la masse ponctuelle $m$ dans le repère galiléen fixe d\'origine $O$ (point d\'attache). Les forces appliquées sont le poids $\\vec{P} = m g (\\cos\\theta \\vec{u}_r - \\sin\\theta \\vec{u}_\\theta)$ et la tension $\\vec{T} = -T \\vec{u}_r$. Le moment par rapport à l\'axe fixe $(O, \\vec{z})$ vaut $\\mathcal{M}_O(\\vec{T}) = 0$ et $\\mathcal{M}_O(\\vec{P}) = -m g \\ell \\sin\\theta$. Le moment cinétique est $\\sigma_O = m \\ell^2 \\dot{\\theta}$.'
      },
      {
        etape: '2. Théorème du moment cinétique',
        justification: '$\\frac{\\mathrm{d}\\sigma_O}{\\mathrm{d}t} = \\mathcal{M}_O \\implies m \\ell^2 \\ddot{\\theta} = -m g \\ell \\sin\\theta$, soit l\'équation non linéaire :',
        formule: '\\ddot{\\theta} + \\frac{g}{\\ell} \\sin\\theta = 0'
      },
      {
        etape: '3. Approximation des petites oscillations',
        justification: 'Pour $\\theta \\ll 1\\text{ rad}$, $\\sin\\theta \\approx \\theta$. L\'équation devient $\\ddot{\\theta} + \\omega_0^2 \\theta = 0$ avec $\\omega_0 = \\sqrt{g/\\ell}$. La période propre vaut :',
        formule: 'T_0 = \\frac{2\\pi}{\\omega_0} = 2\\pi \\sqrt{\\frac{\\ell}{g}}'
      }
    ],
    baremeEtPointsCles: [
      'Application correcte du théorème du moment cinétique ou du PFD en base polaire (3 pts)',
      'Signe négatif justifiant la force de rappel vers la position stable $\\theta = 0$ (2 pts)',
      'Linéarisation et expression finale de la période de Huygens (3 pts)'
    ]
  },
  {
    id: 'must-effet-joule-loi-ohm-locale',
    titre: 'Loi d\'Ohm Locale et Puissance Dissipée par Effet Joule',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~75% des épreuves d\'Électromagnétisme',
    chapitreAssocie: 'Circuits Électriques, Régimes Transitoires & Filtres Linéaires',
    enonceType: 'Dans un conducteur ohmique de conductivité électrique $\\gamma$, énoncer la loi d\'Ohm locale reliant la densité volumique de courant $\\vec{j}$ au champ électrique $\\vec{E}$. Établir l\'expression de la puissance volumique dissipée par effet Joule $p_J = \\vec{j} \\cdot \\vec{E} = \\frac{j^2}{\\gamma}$. En déduire la résistance macroscopique $R = \\frac{L}{\\gamma S}$ d\'un barreau cylindrique.',
    piegesImmediats: [
      'Confondre la conductivité $\\gamma$ (en $\\text{S/m}$) et la résistivité $\\rho = 1/\\gamma$ (en $\\Omega\\cdot\\text{m}$).',
      'Intégrer sans vérifier l\'homogénéité du champ et du courant dans la section droite.'
    ],
    redactionModele: [
      {
        etape: '1. Loi d\'Ohm locale',
        justification: 'D\'après le modèle de Drude, les porteurs de charge de charge $q$ et vitesse de dérive $\\vec{v}_d$ vérifient $\\vec{j} = n q \\vec{v}_d$. Sous l\'action de la force électrique $q\\vec{E}$ et d\'un frottement fluide $\\tau$, on a $\\vec{v}_d = \\frac{q\\tau}{m}\\vec{E}$, d\'où :',
        formule: '\\vec{j} = \\gamma \\vec{E} \\quad \\text{avec } \\gamma = \\frac{n q^2 \\tau}{m}'
      },
      {
        etape: '2. Puissance volumique par effet Joule',
        justification: 'La puissance fournie par le champ électrique aux porteurs de charge par unité de volume est $\\mathcal{P}_v = n \\vec{F} \\cdot \\vec{v}_d = n q \\vec{E} \\cdot \\vec{v}_d = \\vec{j} \\cdot \\vec{E}$. Avec $\\vec{j} = \\gamma \\vec{E}$ :',
        formule: 'p_J = \\vec{j} \\cdot \\vec{E} = \\gamma E^2 = \\frac{j^2}{\\gamma}'
      },
      {
        etape: '3. Résistance d\'un conducteur cylindrique',
        justification: 'Pour un cylindre de section $S$ et longueur $L$ : $I = j S$ et $U = E L$. La puissance totale vaut $\\mathcal{P} = p_J (S L) = \\frac{I^2}{\\gamma S^2} (S L) = \\left(\\frac{L}{\\gamma S}\\right) I^2 = R I^2$, d\'où :',
        formule: 'R = \\frac{L}{\\gamma S} = \\rho \\frac{L}{S}'
      }
    ],
    baremeEtPointsCles: [
      'Définition et justification microscopique de la loi d\'Ohm locale (2.5 pts)',
      'Dérivation énergétique du terme $\\vec{j} \\cdot \\vec{E}$ (2.5 pts)',
      'Passage rigoureux du local au global pour retrouver la loi de Pouillet (3 pts)'
    ]
  },
  {
    id: 'must-dephasage-fentes-young-difference-marche',
    titre: 'Interférences à Deux Ondes : Relation Déphasage - Différence de Marche',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~85% des épreuves d\'Optique Ondulatoire',
    chapitreAssocie: 'Optique Ondulatoire : Interférences à Deux Ondes & Interféromètre de Michelson',
    enonceType: 'Soit deux ondes lumineuses scalaires synchrones issues de deux sources cohérentes $S_1$ et $S_2$ de longueur d\'onde dans le vide $\\lambda_0$. Établir la relation fondamentale reliant le déphasage $\\Delta \\phi$ à la différence de chemin optique $\\delta = [S_2 M] - [S_1 M]$. Donner l\'expression de l\'interfrange $i$.',
    piegesImmediats: [
      'Inverser le rapport : écrire $\\Delta \\phi = \\frac{\\lambda_0}{2\\pi} \\delta$ au lieu de $\\frac{2\\pi}{\\lambda_0} \\delta$.',
      'Confondre la différence de marche géométrique $d_2 - d_1$ et la différence de marche optique $[S_2 M] - [S_1 M]$ en présence d\'un milieu d\'indice $n \\neq 1$.'
    ],
    redactionModele: [
      {
        etape: '1. Phase d\'une onde progressive',
        justification: 'L\'onde issue de la source $S_i$ s\'écrit en $M$ : $s_i(M, t) = s_{0, i} \\cos(\\omega t - k [S_i M] + \\phi_0)$ où $k = \\frac{2\\pi}{\\lambda_0}$ est le nombre d\'onde dans le vide. Le déphasage en $M$ vaut :'
      },
      {
        etape: '2. Formule du déphasage optique',
        justification: 'La différence de phase relative est proportionnelle au chemin optique :',
        formule: '\\Delta \\phi = \\phi_2(M) - \\phi_1(M) = \\frac{2\\pi}{\\lambda_0} \\left( [S_1 M] - [S_2 M] \\right) = -\\frac{2\\pi \\delta}{\\lambda_0}'
      },
      {
        etape: '3. Conditions d\'interférence et interfrange',
        justification: 'Les franges brillantes correspondent à $\\delta = p \\lambda_0$ ($p \\in \\mathbb{Z}$). Pour des fentes d\'Young où $\\delta = \\frac{a x}{D}$, la position de la frange d\'ordre $p$ est $x_p = p \\frac{\\lambda_0 D}{a}$. L\'interfrange est l\'écart entre deux franges consécutives :',
        formule: 'i = x_{p+1} - x_p = \\frac{\\lambda_0 D}{a}'
      }
    ],
    baremeEtPointsCles: [
      'Définition rigoureuse du chemin optique $[SM] = \\int n \\mathrm{d}s$ (2 pts)',
      'Établissement sans erreur de $\\Delta \\phi = \\frac{2\\pi}{\\lambda_0}\\delta$ (3 pts)',
      'Définition et calcul de l\'interfrange $i = \\lambda_0 D / a$ (3 pts)'
    ]
  },
  {
    id: 'must-energie-potentielle-position-equilibre',
    titre: 'Énergie Potentielle et Stabilité des Positions d\'Équilibre',
    matiere: 'Physique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~80% des épreuves de Mécanique',
    chapitreAssocie: 'Mécanique du Point & Oscillateurs Harmoniques',
    enonceType: 'Soit un point matériel $M$ se déplaçant sur un axe $(Ox)$ soumis à une force conservative dérivant d\'une énergie potentielle $E_p(x)$. Énoncer la condition d\'équilibre et le critère de stabilité basé sur la dérivée seconde $E\'\'_p(x_0)$.',
    piegesImmediats: [
      'Oublier le signe moins dans la relation force-potentiel : $F = -\\frac{\\mathrm{d}E_p}{\\mathrm{d}x}$.',
      'Croire que $E\'\'_p(x_0) = 0$ donne toujours un équilibre instable (il faut analyser les dérivées d\'ordre supérieur).'
    ],
    redactionModele: [
      {
        etape: '1. Condition d\'équilibre statique',
        justification: 'Le point $M$ est à l\'équilibre si la force résultante est nulle : $F(x_0) = 0$. Comme la force dérive d\'une énergie potentielle $F(x) = -E\'_p(x)$, la condition d\'équilibre s\'écrit :',
        formule: 'E\'_p(x_0) = 0'
      },
      {
        etape: '2. Développement de Taylor et stabilité',
        justification: 'Au voisinage de $x_0$, on pose $x = x_0 + \\varepsilon$. En développant au second ordre : $E_p(x_0+\\varepsilon) = E_p(x_0) + E\'_p(x_0) \\varepsilon + \\frac{1}{2} E\'\'_p(x_0) \\varepsilon^2 + o(\\varepsilon^2) = E_p(x_0) + \\frac{1}{2} E\'\'_p(x_0) \\varepsilon^2$. La force de rappel vaut $F(x) \\approx -E\'\'_p(x_0) \\varepsilon$.'
      },
      {
        etape: '3. Critère de stabilité',
        justification: '- Si $E\'\'_p(x_0) > 0$ : $E_p$ admet un minimum local strict. La force $F \\approx -k \\varepsilon$ ramène la particule vers $x_0$ : l\'équilibre est **STABLE** (petites oscillations à la pulsation $\\omega_0 = \\sqrt{E\'\'_p(x_0)/m}$).\n- Si $E\'\'_p(x_0) < 0$ : $E_p$ admet un maximum local. La force repousse la particule : l\'équilibre est **INSTABLE**.'
      }
    ],
    baremeEtPointsCles: [
      'Formulation exacte de $F = -\\mathrm{d}E_p/\\mathrm{d}x$ (2 pts)',
      'Annulation de la dérivée première pour l\'équilibre (2 pts)',
      'Signe de la dérivée seconde et interprétation du puits de potentiel (4 pts)'
    ]
  },
  {
    id: 'must-diffusion-thermique-fourier',
    titre: 'Loi de Fourier et Équation de la Diffusion Thermique 1D',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~85% des épreuves de Transferts Thermiques',
    chapitreAssocie: 'Transferts Thermiques & Équation de la Diffusion',
    enonceType: 'Soit un solide isotrope homogène de masse volumique $\\rho$, capacité thermique massique $c$ et conductivité thermique $\\lambda$. Énoncer la loi de Fourier pour le vecteur densité de flux thermique $\\vec{j}_{th}$. Par un bilan d\'énergie sur une tranche élémentaire $[x, x+\\mathrm{d}x]$, établir l\'équation de la chaleur 1D sans source interne.',
    piegesImmediats: [
      'Oublier le signe moins dans la loi de Fourier $\\vec{j}_{th} = -\\lambda \\vec{\\nabla} T$ (la chaleur s\'écoule du chaud vers le froid).',
      'Confondre la conductivité thermique $\\lambda$ (en $\\text{W}\\cdot\\text{m}^{-1}\\cdot\\text{K}^{-1}$) et le coefficient de diffusivité thermique $D = \\frac{\\lambda}{\\rho c}$ (en $\\text{m}^2\\cdot\\text{s}^{-1}$).'
    ],
    redactionModele: [
      {
        etape: '1. Loi phénoménologique de Fourier',
        justification: 'Le transfert de chaleur par conduction est décrit par la loi de Fourier :',
        formule: '\\vec{j}_{th} = -\\lambda \\vec{\\nabla} T = -\\lambda \\frac{\\partial T}{\\partial x} \\vec{u}_x'
      },
      {
        etape: '2. Bilan d\'énergie sur une tranche de volume $\\mathrm{d}V = S \\mathrm{d}x$',
        justification: 'Pendant la durée $\\mathrm{d}t$, la variation d\'énergie interne vaut $\\mathrm{d}U = \\rho S \\mathrm{d}x \\, c \\, \\frac{\\partial T}{\\partial t} \\mathrm{d}t$. Le flux de chaleur net entrant vaut $\\Phi_{entree} - \\Phi_{sortie} = j_{th}(x) S - j_{th}(x+\\mathrm{d}x) S = -\\frac{\\partial j_{th}}{\\partial x} S \\mathrm{d}x$. Le premier principe $\\mathrm{d}U = \\delta Q$ donne :\n$$\\rho c \\frac{\\partial T}{\\partial t} = -\\frac{\\partial j_{th}}{\\partial x} = \\frac{\\partial}{\\partial x}\\left( \\lambda \\frac{\\partial T}{\\partial x} \\right)$$'
      },
      {
        etape: '3. Équation de diffusion de la chaleur',
        justification: 'En supposant $\\lambda$ constant et en posant la diffusivité thermique $D = \\frac{\\lambda}{\\rho c}$ :',
        formule: '\\frac{\\partial T}{\\partial t} = D \\frac{\\partial^2 T}{\\partial x^2}'
      }
    ],
    baremeEtPointsCles: [
      'Loi de Fourier avec signe moins et justification thermodynamique (2 pts)',
      'Découpage et bilan d\'énergie propre sur la tranche $[x, x+\\mathrm{d}x]$ (3 pts)',
      'Définition de la diffusivité $D = \\lambda/(\\rho c)$ et équation finale (3 pts)'
    ]
  },

  // ==========================================
  // CHIMIE (4 questions)
  // ==========================================
  {
    id: 'must-loi-nernst-pile-fem',
    titre: 'Formule de Nernst et Calcul de la Force Électromotrice (f.é.m) d\'une Pile',
    matiere: 'Chimie',
    filieres: ['PC', 'PSI', 'BCPST', 'MP'],
    tauxPresence: 'Présent dans ~85% des épreuves d\'Électrochimie',
    chapitreAssocie: 'Électrochimie : Courbes Intensité-Potentiel & Corrosion',
    enonceType: 'Soit la demi-équation redox générale $\\alpha Ox + n e^- = \\beta Red$. Écrire la formule de Nernst à $25^\\circ\\text{C}$ (avec la constante $0{,}059\\text{ V}$). Calculer la force électromotrice standard $e^\\circ$ et la constante d\'équilibre $K^\\circ$ de la pile Daniell $Zn(s) | Zn^{2+} || Cu^{2+} | Cu(s)$ à partir des potentiels standards $E^\\circ(Cu^{2+}/Cu) = +0{,}34\\text{ V}$ et $E^\\circ(Zn^{2+}/Zn) = -0{,}76\\text{ V}$.',
    piegesImmediats: [
      'Oublier d\'élever les activités aux puissances stœchiométriques respectives dans le logarithme.',
      'Inverser cathode et anode dans le calcul de la f.é.m ($e = E_{cathode} - E_{anode} > 0$).'
    ],
    redactionModele: [
      {
        etape: '1. Formule générale de Nernst',
        justification: 'À la température standard de $T = 298\\text{ K}$ où $\\frac{R T \\ln 10}{F} \\approx 0{,}059\\text{ V}$ :',
        formule: 'E = E^\\circ + \\frac{0{,}059}{n} \\log\\left( \\frac{a_{Ox}^\\alpha}{a_{Red}^\\beta} \\right)'
      },
      {
        etape: '2. Force électromotrice de la pile Daniell',
        justification: 'Le cuivre est le pôle positif (cathode, réduction $Cu^{2+} + 2e^- = Cu$) et le zinc le pôle négatif (anode, oxydation $Zn = Zn^{2+} + 2e^-$). La f.é.m standard vaut :\n$$e^\\circ = E^\\circ(Cu^{2+}/Cu) - E^\\circ(Zn^{2+}/Zn) = 0{,}34 - (-0{,}76) = +1{,}10\\text{ V}$$'
      },
      {
        etape: '3. Constante thermodynamique d\'équilibre',
        justification: 'À l\'équilibre de la pile, la f.é.m s\'annule : $e = 0 \\implies e^\\circ = \\frac{0{,}059}{2} \\log K^\\circ$. On en déduit :',
        formule: 'K^\\circ = 10^{\\frac{2 \\times 1{,}10}{0{,}059}} = 10^{37{,}3} \\approx 2 \\times 10^{37}'
      }
    ],
    baremeEtPointsCles: [
      'Formule de Nernst avec le quotient d\'activités correct (2.5 pts)',
      'Attribution correcte de la cathode et de l\'anode ($e > 0$) (2.5 pts)',
      'Lien entre f.é.m standard et constante d\'équilibre $K^\\circ$ (3 pts)'
    ]
  },
  {
    id: 'must-loi-arrhenius-energie-activation',
    titre: 'Loi d\'Arrhenius et Détermination Expérimentale de l\'Énergie d\'Activation $E_a$',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves de Cinétique Chimique',
    chapitreAssocie: 'Cinétique Chimique & Mécanismes Réactionnels',
    enonceType: 'Énoncer la loi d\'Arrhenius reliant la constante de vitesse $k$ à la température $T$. Décrire le tracé graphique de régression linéaire permettant de déterminer expérimentalement l\'énergie d\'activation $E_a$ et le facteur pré-exponentiel $A$.',
    piegesImmediats: [
      'Utiliser la température en degrés Celsius au lieu de kelvins dans le calcul de $1/T$.',
      'Confondre la constante des gaz parfaits $R = 8{,}314\\text{ J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$ avec $R$ exprimé en calories ou bar.'
    ],
    redactionModele: [
      {
        etape: '1. Énoncé de la loi d\'Arrhenius',
        justification: 'La dépendance en température de la constante cinétique $k(T)$ suit la loi semi-empirique d\'Arrhenius :',
        formule: 'k(T) = A \\exp\\left( -\\frac{E_a}{R T} \\right)'
      },
      {
        etape: '2. Linéarisation logarithmique',
        justification: 'En prenant le logarithme népérien des deux membres :',
        formule: '\\ln(k) = \\ln(A) - \\frac{E_a}{R} \\cdot \\frac{1}{T}'
      },
      {
        etape: '3. Exploitation du graphe d\'Arrhenius',
        justification: 'En traçant $\\ln(k)$ en fonction de $1/T$ (en $\\text{K}^{-1}$), on obtient une droite affine de pente négative $p = -\\frac{E_a}{R}$ et d\'ordonnée à l\'origine $\\ln(A)$. L\'énergie d\'activation s\'en déduit immédiatement par $E_a = -p \\cdot R$.'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé exact de la formule d\'Arrhenius avec unités de $E_a$ ($\text{J/mol}$) (2.5 pts)',
      'Mise sous forme linéaire $\\ln(k) = f(1/T)$ (2.5 pts)',
      'Détermination rigoureuse de la pente et calcul de $E_a$ (3 pts)'
    ]
  },
  {
    id: 'must-regle-huckel-aromaticite',
    titre: 'Règle de Hückel et Critères d\'Aromaticité en Chimie Organique',
    matiere: 'Chimie',
    filieres: ['PC', 'BCPST'],
    tauxPresence: 'Présent dans ~75% des épreuves de Chimie Organique',
    chapitreAssocie: 'Chimie Organique : Stéréochimie & Réactions Fondamentales',
    enonceType: 'Énoncer les quatre critères indispensables de la règle de Hückel pour qu\'une molécule soit aromatique. Expliquer pourquoi le benzène ($C_6H_6$) et le cation tropylium ($C_7H_7^+$) sont aromatiques, alors que le cyclooctatétraène ($C_8H_8$) ne l\'est pas.',
    piegesImmediats: [
      'Compter les électrons $\\sigma$ dans le décompte des $4n+2$ (seuls les électrons $\\pi$ et les doublets non liants délocalisés comptent).',
      'Oublier le critère de planarité géométrique indispensable au recouvrement des orbitales $p_z$.'
    ],
    redactionModele: [
      {
        etape: '1. Les quatre critères de Hückel',
        justification: 'Pour être aromatique, un composé doit être :\n1. **Cyclique** ;\n2. **Totalement conjugué** (une orbitale $p$ sur chaque atome du cycle) ;\n3. **Plan** (pour permettre un recouvrement parallèle optimal des orbitales $p$) ;\n4. Posséder un nombre d\'électrons $\\pi$ délocalisés égal à $4n+2$ avec $n \\in \\mathbb{N}$.'
      },
      {
        etape: '2. Application aux exemples',
        justification: '- Benzène : cycle à 6 carbones $sp^2$, plan, 3 doubles liaisons conjuguées soit $6$ électrons $\\pi$ ($4n+2$ pour $n=1$) : **Aromatique**.\n- Cation tropylium ($C_7H_7^+$) : cycle plan à 7 sommets portant une case vacante et 3 doubles liaisons, 6 électrons $\\pi$ délocalisés sur 7 carbones ($n=1$) : **Aromatique ultra-stable**.\n- Cyclooctatétraène ($C_8H_8$) : 8 électrons $\\pi$ ($4n$ avec $n=2$). S\'il était plan, il serait antiaromatique (déstabilisé) ; la molécule adopte donc une conformation en cuve non plane pour éviter l\'antiaromaticité : **Non aromatique**.'
      }
    ],
    baremeEtPointsCles: [
      'Énumération complète des 4 conditions de Hückel (3 pts)',
      'Décompte des $4n+2$ électrons $\\pi$ pour le benzène et tropylium (3 pts)',
      'Explication de la conformation en baignoire du cyclooctatétraène (2 pts)'
    ]
  },
  {
    id: 'must-titrage-equivalence-guldberg-waage',
    titre: 'Détermination du Point d\'Équivalence d\'un Titrage (Méthode des Tangentes)',
    matiere: 'Chimie',
    filieres: ['MPSI', 'PCSI', 'PC', 'BCPST'],
    tauxPresence: 'Présent dans ~90% des épreuves de Chimie des Solutions',
    chapitreAssocie: 'Équilibres en Solution Aqueuse & Précipitation',
    enonceType: 'Définir l\'équivalence d\'un titrage acido-basique ou redox. Décrire la méthode géométrique des tangentes parallèles et la méthode de la dérivée première $\\frac{\\mathrm{d}\\text{pH}}{\\mathrm{d}V}$ pour déterminer le volume équivalent $V_E$.',
    piegesImmediats: [
      'Confondre le point d\'équivalence stœchiométrique avec le virage d\'un indicateur coloré (qui doit encadrer le point équivalent).',
      'Tracer des tangentes non rigoureusement parallèles dans la méthode graphique.'
    ],
    redactionModele: [
      {
        etape: '1. Définition de l\'équivalence',
        justification: 'L\'équivalence est l\'état du système réactionnel où les réactifs titré et titrant ont été mélangés dans les proportions stœchiométriques de la réaction de dosage :\n$$n_{titre, initial} = \\frac{\\alpha}{\\beta} n_{titrant, verse} \\iff c_A V_A = c_B V_E$$'
      },
      {
        etape: '2. Méthode de la dérivée',
        justification: 'La courbe de titrage présente un point d\'inflexion à l\'équivalence (changement de concavité). La fonction dérivée $\\frac{\\mathrm{d}\\text{pH}}{\\mathrm{d}V}$ passe par un extremum absolu (pic aigu) exactement à l\'abscisse $V = V_E$.'
      }
    ],
    baremeEtPointsCles: [
      'Définition stœchiométrique exacte de l\'équivalence (3 pts)',
      'Caractérisation du point d\'inflexion et du pic de dérivée (3 pts)',
      'Choix d\'un indicateur dont la zone de virage contient le pH à l\'équivalence (2 pts)'
    ]
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR & INFO (4 questions)
  // ==========================================
  {
    id: 'must-theoreme-valeur-finale-laplace',
    titre: 'Théorème de la Valeur Finale en Transformée de Laplace',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP'],
    tauxPresence: 'Présent dans ~85% des épreuves de SLCI',
    chapitreAssocie: 'Modélisation des SLCI & Transformée de Laplace',
    enonceType: 'Énoncer le théorème de la valeur finale pour un signal causal $f(t)$ de transformée de Laplace $F(p)$. Préciser la condition impérative sur les pôles de $p F(p)$ pour que le théorème soit applicable.',
    piegesImmediats: [
      'Appliquer le théorème à un système instable ou oscillant non amorti (ex: $F(p) = \\frac{1}{p^2+1}$ : la formule donne 0 alors que $\\sin(t)$ n\'a aucune limite en $+\\infty$).',
      'Confondre valeur initiale ($p \\to +\\infty$) et valeur finale ($p \\to 0$).'
    ],
    redactionModele: [
      {
        etape: '1. Condition impérative d\'applicabilité',
        justification: 'Le théorème de la valeur finale n\'est valide que si la limite temporelle $\\lim_{t \\to +\\infty} f(t)$ existe. Cela exige que la fonction $p F(p)$ n\'ait aucun pôle à partie réelle strictement positive, et au plus un pôle simple en $p=0$ (système stable en boucle fermée).'
      },
      {
        etape: '2. Formule de la valeur finale',
        justification: 'Sous réserve de stabilité :',
        formule: '\\lim_{t \\to +\\infty} f(t) = \\lim_{p \\to 0} [p F(p)]'
      },
      {
        etape: '3. Application au calcul de l\'erreur statique',
        justification: 'Pour une consigne en échelon $E(p) = \\frac{E_0}{p}$ et une fonction de transfert d\'erreur $\\varepsilon(p) = \\frac{E(p)}{1 + FTBO(p)}$ :\n$$\\varepsilon_\\infty = \\lim_{p \\to 0} p \\left( \\frac{E_0/p}{1 + FTBO(p)} \\right) = \\frac{E_0}{1 + \\lim_{p \\to 0} FTBO(p)}$$'
      }
    ],
    baremeEtPointsCles: [
      'Vérification explicite de la stabilité (pôles à partie réelle strictement négative) (3 pts)',
      'Formule mathématique $p F(p) \\to 0$ (2 pts)',
      'Application concrète au calcul de l\'erreur permanente de position (3 pts)'
    ]
  },
  {
    id: 'must-dijkstra-invariance-complexite',
    titre: 'Algorithme de Dijkstra : Invariant de Boucle et Complexité avec Tas Binaire',
    matiere: 'Informatique',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    tauxPresence: 'Présent dans ~85% des épreuves d\'Informatique',
    chapitreAssocie: 'Algorithmique Avancée : Plus Courts Chemins & Graphes',
    enonceType: 'Soit $G = (V, E)$ un graphe pondéré à poids strictement positifs et $s \\in V$ une source. Énoncer l\'invariant de boucle de l\'algorithme de Dijkstra. Justifier pourquoi l\'algorithme échoue en présence de poids strictement négatifs. Donner sa complexité avec un tas binaire.',
    piegesImmediats: [
      'Affirmer que Dijkstra fonctionne avec des poids négatifs s\'il n\'y a pas de cycle négatif (faux : l\'extraction gourmande ne revient jamais sur un sommet visité).',
      'Confondre la complexité avec matrice d\'adjacence $\\mathcal{O}(V^2)$ et avec tas binaire $\\mathcal{O}((V+E) \\log V)$.'
    ],
    redactionModele: [
      {
        etape: '1. Invariant de boucle',
        justification: 'À chaque étape, l\'ensemble des sommets est partitionné en deux : les sommets définitivement traités $S$ et les autres $V \\setminus S$. Invariant : pour tout sommet $u \\in S$, la distance stockée $d[u]$ est la distance minimale absolue depuis la source $s$. Lors de l\'extraction du sommet $u^* = \\arg\\min_{v \\notin S} d[v]$, comme tous les poids d\'arêtes sont positifs ($w(e) \\ge 0$), aucun chemin futur passant par un autre sommet non visité ne pourra être plus court que $d[u^*]$.'
      },
      {
        etape: '2. Échec avec poids négatifs',
        justification: 'Si une arête a un poids négatif, un chemin plus long en nombre d\'arêtes peut avoir un coût total plus faible après coup. Le choix glouton définitif de Dijkstra est invalidé, nécessitant l\'algorithme de Bellman-Ford en $\\mathcal{O}(V \\cdot E)$.'
      },
      {
        etape: '3. Analyse de la complexité avec tas binaire',
        justification: 'Il y a $|V|$ opérations d\'extraction du minimum (`heappop`) en $\\mathcal{O}(\\log |V|)$ et au plus $|E|$ opérations de relâchement d\'arête (`heappush`) en $\\mathcal{O}(\\log |V|)$. La complexité globale est :',
        formule: '\\mathcal{O}((|V| + |E|) \\log |V|)'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé clair de l\'invariant de boucle sur les sommets fixés (3 pts)',
      'Contre-exemple explicite prouvant l\'échec en présence d\'arêtes négatives (2.5 pts)',
      'Détail des opérations du tas pour aboutir à $\\mathcal{O}((V+E) \\log V)$ (2.5 pts)'
    ]
  },
  {
    id: 'must-master-theorem-diviser-pour-regner',
    titre: 'Master Theorem (Théorème Maître) pour les Récurrences Diviser pour Régner',
    matiere: 'Informatique',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    tauxPresence: 'Présent dans ~80% des épreuves d\'Algorithmique',
    chapitreAssocie: 'Paradigme Diviser pour Régner & Master Theorem',
    enonceType: 'Soit la relation de récurrence $T(n) = a T(n/b) + f(n)$ avec $a \\ge 1, b > 1$. Énoncer les trois cas fondamentaux du Master Theorem en comparant $f(n)$ à $n^{\\log_b a}$. Appliquer au tri fusion (`MergeSort`) et à la multiplication de Karatsuba.',
    piegesImmediats: [
      'Confondre la base du logarithme $\\log_b a$ et le terme de découpage.',
      'Oublier de vérifier l\'écart polynomial strict $n^{\\log_b a \\pm \\varepsilon}$ dans les cas 1 et 3.'
    ],
    redactionModele: [
      {
        etape: '1. Les trois cas du Master Theorem',
        justification: 'On pose le seuil critique $c_{crit} = \\log_b a$ :\n- **Cas 1** : Si $f(n) = \\mathcal{O}(n^{\\log_b a - \\varepsilon})$ avec $\\varepsilon > 0$, alors $T(n) = \\Theta(n^{\\log_b a})$ (les feuilles dominent).\n- **Cas 2** : Si $f(n) = \\Theta(n^{\\log_b a})$, alors $T(n) = \\Theta(n^{\\log_b a} \\log n)$ (tous les niveaux d\'arbre coûtent autant).\n- **Cas 3** : Si $f(n) = \\Omega(n^{\\log_b a + \\varepsilon})$ avec condition de régularité $a f(n/b) \\le c f(n)$ ($c < 1$), alors $T(n) = \\Theta(f(n))$ (la racine domine).'
      },
      {
        etape: '2. Application au Tri Fusion',
        justification: 'Le tri fusion découpe en 2 sous-tableaux de taille $n/2$ avec fusion linéaire : $T(n) = 2 T(n/2) + \\Theta(n)$. Ici $a=2, b=2 \\implies \\log_2 2 = 1$. Comme $f(n) = \\Theta(n^1)$, on est dans le **Cas 2** :',
        formule: 'T_{MergeSort}(n) = \\Theta(n \\log n)'
      },
      {
        etape: '3. Application à Karatsuba',
        justification: 'Multiplication rapide de deux entiers de taille $n$ en 3 multiplications de taille $n/2$ : $T(n) = 3 T(n/2) + \\Theta(n)$. Ici $a=3, b=2 \\implies \\log_2 3 \\approx 1{,}585$. Comme $f(n) = n^1 = \\mathcal{O}(n^{1{,}585 - 0{,}585})$, on est dans le **Cas 1** :',
        formule: 'T_{Karatsuba}(n) = \\Theta(n^{\\log_2 3}) \\approx \\Theta(n^{1{,}585}) \\ll \\mathcal{O}(n^2)'
      }
    ],
    baremeEtPointsCles: [
      'Formulation des 3 régimes du Master Theorem avec $n^{\\log_b a}$ (3 pts)',
      'Application détaillée à la récurrence du tri fusion (2.5 pts)',
      'Application à l\'algorithme de Karatsuba démontrant le gain polynomial (2.5 pts)'
    ]
  },
  {
    id: 'must-stabilite-routh-hurwitz-si',
    titre: 'Tableau de Routh et Critère Algébrique de Stabilité',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP'],
    tauxPresence: 'Présent dans ~80% des épreuves d\'Automatique',
    chapitreAssocie: 'Stabilité & Synthèse des Correcteurs (P, PI, Avance de Phase)',
    enonceType: 'Soit le polynôme caractéristique du dénominateur en boucle fermée $P(p) = a_n p^n + a_{n-1} p^{n-1} + \\dots + a_0$. Énoncer la condition nécessaire de Stodola et les règles de construction de la table de Routh. À quelle condition le système est-il stable ?',
    piegesImmediats: [
      'Oublier que la condition de Stodola (tous les coefficients de même signe strictement) n\'est que NÉCESSAIRE mais PAS suffisante pour $n \\ge 3$.',
      'Faire une erreur de signe dans le calcul du déterminant de Routh $b_1 = \\frac{a_{n-1} a_{n-2} - a_n a_{n-3}}{a_{n-1}}$.'
    ],
    redactionModele: [
      {
        etape: '1. Condition nécessaire de Stodola',
        justification: 'Pour qu\'un polynôme n\'ait que des racines à partie réelle strictement négative, il est nécessaire que tous ses coefficients soient strictement non nuls et de même signe (aucun terme manquant).'
      },
      {
        etape: '2. Construction de la table de Routh',
        justification: 'On dispose les coefficients sur les deux premières lignes :\n- Ligne $p^n$ : $a_n, a_{n-2}, a_{n-4}, \\dots$\n- Ligne $p^{n-1}$ : $a_{n-1}, a_{n-3}, a_{n-5}, \\dots$\nOn calcule les lignes suivantes par produit en croix divisé par l\'élément pivot de tête :\n$$b_1 = \\frac{a_{n-1} a_{n-2} - a_n a_{n-3}}{a_{n-1}}, \\quad b_2 = \\frac{a_{n-1} a_{n-4} - a_n a_{n-5}}{a_{n-1}}$$'
      },
      {
        etape: '3. Critère de stabilité',
        justification: 'Le système est asymptotiquement stable en boucle fermée si et seulement si tous les éléments de la **première colonne** du tableau de Routh sont strictement de même signe (strictement positifs). Le nombre de changements de signe dans la première colonne est égal au nombre de pôles instables à partie réelle positive.'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé clair de la condition nécessaire de Stodola (2 pts)',
      'Formule exacte de calcul des coefficients de Routh (3 pts)',
      'Critère de stabilité sur la première colonne sans changement de signe (3 pts)'
    ]
  }
];
