import type { QuestionIncontournableItem } from './cpgeData';

export const MASSIVE_QUESTIONS_INCONTOURNABLES: QuestionIncontournableItem[] = [
  {
    id: 'must-mass-1-projecteur-orthogonal',
    titre: 'Calculer la matrice d\'un projecteur orthogonal sur un sous-espace $F$',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    tauxPresence: 'Présent dans ~70% des sujets d\'algèbre euclidienne (Mines, Centrale, CCINP)',
    chapitreAssocie: 'Espaces Euclidiens & Théorème Spectral',
    enonceType: 'Soit $E$ un espace euclidien muni d\'une base orthonormée et $F$ le sous-espace défini par l\'équation cartésienne $x + 2y - z = 0$. Déterminer la matrice du projecteur orthogonal $p_F$ dans la base canonique.',
    piegesImmediats: [
      'Orthonormaliser péniblement une base de $F$ (dimension 2) au lieu de projeter sur la droite orthogonale $D = F^\\perp$ de dimension 1 !',
      'Oublier de diviser par le carré de la norme $\\|n\\|^2$ du vecteur normal dans la formule de projection.'
    ],
    redactionModele: [
      {
        etape: '1. Identification du sous-espace orthogonal',
        justification: '$F$ est un hyperplan d\'équation linéaire. Son orthogonal $F^\\perp$ est la droite vectorielle $\\mathbb{R} \\vec{n}$ dirigée par le vecteur normal :',
        formule: '\\vec{n} = (1, 2, -1)^T \\quad \\text{avec} \\quad \\|\\vec{n}\\|^2 = 1^2 + 2^2 + (-1)^2 = 6'
      },
      {
        etape: '2. Relation fondamentale entre projecteurs complémentaires',
        justification: 'Puisque $E = F \\oplus^\\perp F^\\perp$, le projecteur orthogonal sur $F$ vérifie immédiatement :',
        formule: 'p_F = \\mathrm{id}_E - p_{F^\\perp}'
      },
      {
        etape: '3. Expression du projecteur sur la droite normale',
        justification: 'Pour tout vecteur $x \\in E$, la projection orthogonale sur $\\mathrm{Vect}(\\vec{n})$ est :',
        formule: 'p_{F^\\perp}(x) = \\frac{\\langle x, \\vec{n} \\rangle}{\\|\\vec{n}\\|^2} \\vec{n} = \\frac{1}{6} \\begin{pmatrix} 1 \\\\ 2 \\\\ -1 \\end{pmatrix} \\begin{pmatrix} 1 & 2 & -1 \\end{pmatrix} x = \\frac{1}{6} \\begin{pmatrix} 1 & 2 & -1 \\\\ 2 & 4 & -2 \\\\ -1 & -2 & 1 \\end{pmatrix} x'
      },
      {
        etape: '4. Matrice finale de $p_F$',
        justification: 'On soustrait à la matrice identité $I_3$ :',
        formule: '\\mathrm{Mat}(p_F) = I_3 - \\mathrm{Mat}(p_{F^\\perp}) = \\frac{1}{6} \\begin{pmatrix} 5 & -2 & 1 \\\\ -2 & 2 & 2 \\\\ 1 & 2 & 5 \\end{pmatrix}'
      }
    ],
    baremeEtPointsCles: [
      'Justification de la somme directe orthogonale et dimension de $F^\\perp$ (2 pts)',
      'Formule explicite de projection sur un vecteur unitaire ou normalisé (2 pts)',
      'Calcul matriciel sans faute de signe (2 pts)',
      'Vérification éclair : $\\mathrm{Mat}(p_F)$ est symétrique et de trace égale à $\\dim(F) = 2$ (2 pts)'
    ]
  },
  {
    id: 'must-mass-2-convergence-normale',
    titre: 'Démontrer la convergence normale et la continuité de la somme d\'une série de fonctions',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    tauxPresence: 'Présent dans ~85% des épreuves d\'analyse (Centrale, Mines, CCINP)',
    chapitreAssocie: 'Suites et Séries de Fonctions',
    enonceType: 'Soit la série de fonctions $\\sum_{n=1}^\\infty u_n(x)$ avec $u_n(x) = \\frac{x e^{-n x^2}}{n^2}$. Montrer que la somme $S(x)$ est définie et continue sur $\\mathbb{R}$.',
    piegesImmediats: [
      'Tenter d\'évaluer la norme infinie par dérivation brutale sans étudier le signe de la dérivée ni exploiter les extrema réels.',
      'Affirmer que la convergence simple suffit à assurer la continuité de la somme.'
    ],
    redactionModele: [
      {
        etape: '1. Continuité de chaque terme',
        justification: 'Pour tout $n \\ge 1$, la fonction $u_n : x \\mapsto \\frac{x e^{-n x^2}}{n^2}$ est continue sur $\\mathbb{R}$ comme produit et composée de fonctions usuelles continues.'
      },
      {
        etape: '2. Recherche de la borne supérieure sur $\\mathbb{R}$',
        justification: '$u_n$ est impaire, dérivable sur $\\mathbb{R}$. On a $u_n\'(x) = \\frac{e^{-n x^2}(1 - 2n x^2)}{n^2}$. La dérivée s\'annule en $x = \\frac{1}{\\sqrt{2n}}$ où $u_n$ atteint son maximum absolu :',
        formule: '\\|u_n\\|_\\infty = \\sup_{x \\in \\mathbb{R}} |u_n(x)| = u_n\\left(\\frac{1}{\\sqrt{2n}}\\right) = \\frac{1}{n^2 \\sqrt{2n} \\sqrt{e}} = \\frac{1}{\\sqrt{2e}} \\frac{1}{n^{5/2}}'
      },
      {
        etape: '3. Convergence normale de la série',
        justification: 'Comme $5/2 > 1$, la série de Riemann $\\sum \\frac{1}{n^{5/2}}$ converge à termes positifs. Par comparaison, la série $\\sum \\|u_n\\|_\\infty$ converge.',
        formule: '\\sum_{n=1}^\\infty \\|u_n\\|_\\infty < +\\infty \\implies \\sum u_n \\text{ converge normalement sur } \\mathbb{R}.'
      },
      {
        etape: '4. Conclusion sur la continuité',
        justification: 'La convergence normale implique la convergence uniforme sur $\\mathbb{R}$. Chaque $u_n$ étant continue sur $\\mathbb{R}$, le théorème de continuité sous convergence uniforme assure que la somme $S : x \\mapsto \\sum_{n=1}^\\infty u_n(x)$ est continue sur $\\mathbb{R}$.'
      }
    ],
    baremeEtPointsCles: [
      'Justification de la continuité des termes $u_n$ (1 pt)',
      'Dérivation et étude des variations pour trouver la borne supérieure (3 pts)',
      'Référence au critère de Riemann $\\alpha = 5/2 > 1$ (2 pts)',
      'Énoncé exact du théorème de continuité de la somme (2 pts)'
    ]
  },
  {
    id: 'must-mass-3-integrale-dirichlet',
    titre: 'Calcul de l\'intégrale de Dirichlet $\\int_0^{+\\infty} \\frac{\\sin t}{t}\\,\\mathrm{d}t$',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    tauxPresence: 'Classique absolu de khôlle et de concours (Oral X-ENS, Mines-Ponts)',
    chapitreAssocie: 'Intégrales à Paramètres, Continuité & Dérivation sous l\'Intégrale',
    enonceType: 'Soit $F(x) = \\int_0^{+\\infty} \\frac{\\sin t}{t} e^{-x t}\\,\\mathrm{d}t$ pour $x \\ge 0$. Justifier que $F$ est dérivable sur $]0, +\\infty[$, calculer $F\'(x)$ puis en déduire la valeur de $F(0) = \\int_0^{+\\infty} \\frac{\\sin t}{t}\\,\\mathrm{d}t = \\frac{\\pi}{2}$.',
    piegesImmediats: [
      'Dériver brutalement en $x=0$ : l\'hypothèse de domination n\'est pas vérifiée sur $[0, +\\infty[$, mais seulement sur tout segment $[a, +\\infty[$ avec $a > 0$ !',
      'Affirmer que $t \\mapsto \\frac{\\sin t}{t}$ est absolument intégrable sur $[0, +\\infty[$ (son intégrale n\'est que semi-convergente).'
    ],
    redactionModele: [
      {
        etape: '1. Dérivation pour $x > 0$',
        justification: 'Soit $a > 0$. Pour tout $x \\in [a, +\\infty[$, $\\left|\\frac{\\partial}{\\partial x}\\left(\\frac{\\sin t}{t} e^{-xt}\\right)\\right| = |-\\sin t e^{-xt}| \\le e^{-at}$, qui est intégrable sur $[0, +\\infty[$. D\'après le théorème de Leibniz, $F$ est $\\mathcal{C}^1$ sur $]0, +\\infty[$ et :',
        formule: 'F\'(x) = -\\int_0^{+\\infty} \\sin t e^{-xt}\\,\\mathrm{d}t = -\\mathrm{Im}\\left( \\int_0^{+\\infty} e^{(-x+i)t}\\,\\mathrm{d}t \\right) = -\\frac{1}{1 + x^2}'
      },
      {
        etape: '2. Intégration de l\'équation différentielle',
        justification: 'On en déduit qu\'il existe une constante $C \\in \\mathbb{R}$ telle que $F(x) = -\\arctan x + C$. Par convergence dominée, $\\lim_{x \\to +\\infty} F(x) = 0$, ce qui donne $0 = -\\frac{\\pi}{2} + C \\implies C = \\frac{\\pi}{2}$ :',
        formule: '\\forall x > 0, \\quad F(x) = \\frac{\\pi}{2} - \\arctan x'
      },
      {
        etape: '3. Continuité en 0 par intégration par parties',
        justification: 'Pour franchir la limite en 0, on intègre par parties pour faire apparaître une intégrale absolument convergente : $F(x) = \\int_0^{+\\infty} \\frac{1-\\cos t}{t^2} (1 + xt) e^{-xt}\\,\\mathrm{d}t$. On montre la continuité en 0 et on conclut :',
        formule: 'F(0) = \\lim_{x \\to 0^+} F(x) = \\frac{\\pi}{2}'
      }
    ],
    baremeEtPointsCles: [
      'Domination sur $[a, +\\infty[$ et calcul de $F\'(x) = -\\frac{1}{1+x^2}$ (3 pts)',
      'Détermination de la constante via la limite en $+\\infty$ (2 pts)',
      'Rigueur sur la continuité en $0$ (IPP ou lemme de Riemann-Lebesgue) (3 pts)'
    ]
  },
  {
    id: 'must-mass-4-poisson-condensateur',
    titre: 'Résolution de l\'équation de Poisson & Capacité d\'un condensateur cylindrique',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~60% des écrits d\'électromagnétisme',
    chapitreAssocie: 'Électromagnétisme & Équations de Maxwell',
    enonceType: 'On considère deux cylindres conducteurs coaxiaux de rayons $R_1 < R_2$ et de longueur $L \\gg R_2$. Entre les armatures règne le vide. Déterminer le potentiel $V(r)$, le champ $\\vec{E}(r)$ et la capacité $C$ du condensateur.',
    piegesImmediats: [
      'Oublier les effets de bord et ne pas préciser l\'approximation du câble infini $L \\gg R_2$.',
      'Confondre la constante d\'intégration avec la charge totale.'
    ],
    redactionModele: [
      {
        etape: '1. Équation de Laplace',
        justification: 'Dans le vide inter-armatures sans charge volumique ($\\rho = 0$), l\'équation de Poisson devient l\'équation de Laplace $\\Delta V = 0$. Par symétrie cylindrique, $V$ ne dépend que de la coordonnée radiale $r$ :',
        formule: '\\frac{1}{r} \\frac{\\mathrm{d}}{\\mathrm{d}r}\\left( r \\frac{\\mathrm{d}V}{\\mathrm{d}r} \\right) = 0 \\implies r \\frac{\\mathrm{d}V}{\\mathrm{d}r} = A \\implies V(r) = A \\ln r + B'
      },
      {
        etape: '2. Conditions aux limites de potentiel',
        justification: 'Avec $V(R_1) = V_1$ et $V(R_2) = V_2$ (tension $U = V_1 - V_2 > 0$) :',
        formule: 'A = \\frac{V_1 - V_2}{\\ln(R_1/R_2)} = -\\frac{U}{\\ln(R_2/R_1)} \\implies \\vec{E}(r) = -\\frac{\\mathrm{d}V}{\\mathrm{d}r} \\vec{u}_r = \\frac{U}{r \\ln(R_2/R_1)} \\vec{u}_r'
      },
      {
        etape: '3. Charge surfacique et capacité $C$',
        justification: 'Par le théorème de Coulomb sur le conducteur intérieur, $\\sigma_1 = \\varepsilon_0 E(R_1) = \\frac{\\varepsilon_0 U}{R_1 \\ln(R_2/R_1)}$. La charge portée par l\'armature 1 est $Q = \\sigma_1 (2\\pi R_1 L) = \\frac{2\\pi \\varepsilon_0 L U}{\\ln(R_2/R_1)}$. Par définition $Q = C U$ :',
        formule: 'C = \\frac{2\\pi \\varepsilon_0 L}{\\ln(R_2/R_1)}'
      }
    ],
    baremeEtPointsCles: [
      'Écriture du laplacien en coordonnées cylindriques (2 pts)',
      'Intégration et conditions aux limites (2 pts)',
      'Relation entre champ électrique et charge par Gauss ou Coulomb (2 pts)',
      'Formule de la capacité $C$ et homogénéité dimensionnelle (2 pts)'
    ]
  },
  {
    id: 'must-mass-5-laplace-courants-foucault',
    titre: 'Freinage par courants de Foucault & Équation du mouvement d\'une plaque oscillante',
    matiere: 'Physique',
    filieres: ['PSI', 'PC', 'MP'],
    tauxPresence: 'Présent dans ~65% des sujets d\'induction (Centrale PSI, Mines)',
    chapitreAssocie: 'Électromagnétisme & Équations de Maxwell',
    enonceType: 'Une plaque conductrice de conductivité $\\sigma$, d\'épaisseur $e$ et de largeur $a$ pénètre à la vitesse $\\vec{v} = v\\vec{u}_x$ dans une zone de champ magnétique uniforme et stationnaire $\\vec{B} = B\\vec{u}_z$. Déterminer la densité de courant induit $\\vec{j}$, la force de freinage de Laplace et l\'équation différentielle vérifiée par $v(t)$.',
    piegesImmediats: [
      'Appliquer $e = -\\mathrm{d}\\Phi/\\mathrm{d}t$ sans fermer le circuit des lignes de courant.',
      'Oublier que la force de freinage est proportionnelle à la vitesse $v$, générant un amortissement visqueux.'
    ],
    redactionModele: [
      {
        etape: '1. Champ électromoteur de Lorentz',
        justification: 'Les porteurs de charge se déplacent à la vitesse $\\vec{v}$ dans le champ $\\vec{B}$. Le champ électromoteur induit est :',
        formule: '\\vec{E}_m = \\vec{v} \\wedge \\vec{B} = (v\\vec{u}_x) \\wedge (B\\vec{u}_z) = -v B \\vec{u}_y'
      },
      {
        etape: '2. Loi d\'Ohm locale et courants induits',
        justification: 'En négligeant le champ électrostatique de charge d\'espace en régime établi dans la zone centrale, la loi d\'Ohm donne $\\vec{j} = \\sigma \\vec{E}_m = -\\sigma v B \\vec{u}_y$.'
      },
      {
        etape: '3. Résultante des forces de Laplace',
        justification: 'La force de Laplace volumique est $\\vec{f}_L = \\vec{j} \\wedge \\vec{B} = (-\\sigma v B \\vec{u}_y) \\wedge (B \\vec{u}_z) = -\\sigma v B^2 \\vec{u}_x$. En intégrant sur le volume immergé $\\mathcal{V}$ :',
        formule: '\\vec{F}_L = -\\sigma \\mathcal{V} B^2 v \\vec{u}_x = -\\alpha v \\vec{u}_x \\quad \\text{avec} \\quad \\alpha = \\sigma \\mathcal{V} B^2 > 0'
      },
      {
        etape: '4. Bilan dynamique et temps caractéristique de freinage',
        justification: 'D\'après le PFD, $m \\frac{\\mathrm{d}v}{\\mathrm{d}t} = -\\alpha v$, d\'où une décroissance exponentielle :',
        formule: 'v(t) = v_0 e^{-t/\\tau} \\quad \\text{avec} \\quad \\tau = \\frac{m}{\\sigma \\mathcal{V} B^2}'
      }
    ],
    baremeEtPointsCles: [
      'Expression du champ électromoteur de Lorentz (2 pts)',
      'Calcul vectoriel du produit vectoriel de Laplace avec signe négatif (2 pts)',
      'Mise en évidence du caractère dissipativement visqueux de la force (2 pts)',
      'Homogénéité du temps de relaxation $\\tau$ (2 pts)'
    ]
  },
  {
    id: 'must-mass-6-fentes-young-dephasage',
    titre: 'Déplacement des franges d\'interférence par insertion d\'une lame à faces parallèles',
    matiere: 'Physique',
    filieres: ['PC', 'MP', 'PSI', 'BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves d\'optique ondulatoire',
    chapitreAssocie: 'Transferts Thermiques & Équation de la Diffusion',
    enonceType: 'Dans un dispositif de fentes d\'Young distantes de $a$, à distance $D$ de l\'écran, on place devant l\'une des fentes une lame transparente d\'épaisseur $e$ et d\'indice $n$. Déterminer le nouvel emplacement de la frange centrale ($p=0$) et le sens du déplacement.',
    piegesImmediats: [
      'Oublier de retrancher l\'épaisseur d\'air $e$ remplacée par la lame : le retard de chemin optique est $(n-1)e$ et NON $n e$ !',
      'Confondre le sens de déplacement des franges.'
    ],
    redactionModele: [
      {
        etape: '1. Calcul du chemin optique avec la lame',
        justification: 'Le rayon issu de $S_1$ traverse une épaisseur $e$ d\'indice $n$ au lieu de l\'air d\'indice 1. Le chemin optique $[S_1 M]$ devient :',
        formule: '[S_1 M] = [S_1 M]_{vide} + (n - 1)e'
      },
      {
        etape: '2. Différence de marche totale en un point $M(x)$',
        justification: 'Avec l\'approximation de Gauss ($a, x \\ll D$), la différence de marche standard est $\\delta_{geom} = \\frac{a x}{D}$. La différence de marche totale vaut donc :',
        formule: '\\delta(M) = [S_2 M] - [S_1 M] = \\frac{a x}{D} - (n - 1)e'
      },
      {
        etape: '3. Position de la frange centrale d\'ordre 0',
        justification: 'La frange centrale correspond à une différence de marche nulle $\\delta(x_0) = 0$ :',
        formule: '\\frac{a x_0}{D} - (n - 1)e = 0 \\implies x_0 = \\frac{(n - 1)e D}{a}'
      }
    ],
    baremeEtPointsCles: [
      'Théorème de Malus et expression du terme correctif $(n-1)e$ (3 pts)',
      'Écriture de la différence de marche au point $M(x)$ (2 pts)',
      'Sens de déplacement : le système de franges se décale DU CÔTÉ DE LA LAME (3 pts)'
    ]
  },
  {
    id: 'must-mass-7-joule-thomson-isenthalpique',
    titre: 'Démontrer qu\'une détente de Joule-Thomson adiabatique est isenthalpique',
    matiere: 'Physique',
    filieres: ['PC', 'PSI', 'MP'],
    tauxPresence: 'Présent dans ~75% des épreuves de thermodynamique industrielle',
    chapitreAssocie: 'Thermodynamique Industrielle : Systèmes Ouverts & Écoulements',
    enonceType: 'Un gaz réel traverse en régime stationnaire une paroi poreuse (tampon de coton) isolée thermiquement du milieu extérieur entre une pression amont $P_1$ et une pression aval $P_2 < P_1$. Montrer que l\'enthalpie massique se conserve ($h_1 = h_2$).',
    piegesImmediats: [
      'Confondre énergie interne $U$ et enthalpie $H$ : la détente de Joule-Gay-Lussac (dans le vide) est isoénergétique ($\\Delta U = 0$), la détente de Joule-Thomson (écoulement permanent) est isenthalpique ($\\Delta H = 0$) !',
      'Oublier le travail des forces de pression en entrée et en sortie.'
    ],
    redactionModele: [
      {
        etape: '1. Définition du système fermé équivalent',
        justification: 'On considère la masse de fluide $\\Delta m$ comprise entre l\'amont à l\'instant $t$ et l\'aval à l\'instant $t+\\Delta t$, ainsi que le volume de commande fixe entre les deux sections.'
      },
      {
        etape: '2. Application du Premier Principe de la Thermodynamique',
        justification: 'Pour cette masse $\\Delta m$, le premier principe s\'écrit $\\Delta U = W_{ext} + Q$. La détente étant adiabatique, $Q = 0$. Les seules forces extérieures effectuant un travail sont les forces presseuses en amont et en aval :',
        formule: 'W_{ext} = W_{amont} + W_{aval} = +P_1 V_1 - P_2 V_2'
      },
      {
        etape: '3. Regroupement sous forme d\'enthalpie',
        justification: 'Comme $\\Delta U = U_2 - U_1$, on a $U_2 - U_1 = P_1 V_1 - P_2 V_2$, ce qui se réécrit immédiatement :',
        formule: 'U_2 + P_2 V_2 = U_1 + P_1 V_1 \\implies H_2 = H_1 \\implies h_2 = h_1'
      }
    ],
    baremeEtPointsCles: [
      'Choix rigoureux du système thermodynamique déformable ou ouvert (2 pts)',
      'Calcul du travail des forces de transvasement $P_1 V_1 - P_2 V_2$ avec les bons signes (3 pts)',
      'Déduction de l\'isenthalpie massique $h_1 = h_2$ (2 pts)',
      'Mention du coefficient de Joule-Thomson $\\mu_{JT} = (\\partial T / \\partial P)_h$ (1 pt)'
    ]
  },
  {
    id: 'must-mass-8-arrhenius-activation',
    titre: 'Déterminer l\'énergie d\'activation $E_a$ par la loi d\'Arrhenius',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'BCPST'],
    tauxPresence: 'Présent dans ~85% des épreuves de cinétique chimique',
    chapitreAssocie: 'Cinétique Chimique & Mécanismes Réactionnels',
    enonceType: 'On mesure la constante de vitesse $k(T)$ d\'une réaction à deux températures différentes : $k_1 = 2,5 \\times 10^{-3}\\text{ s}^{-1}$ à $T_1 = 300\\text{ K}$ et $k_2 = 1,8 \\times 10^{-1}\\text{ s}^{-1}$ à $T_2 = 350\\text{ K}$. Déterminer l\'énergie d\'activation $E_a$ et le facteur pré-exponentiel $A$.',
    piegesImmediats: [
      'Prendre la température en degrés Celsius au lieu de Kelvins !',
      'Confondre $R = 8,314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$ avec des kilojoules.'
    ],
    redactionModele: [
      {
        etape: '1. Énoncé de la loi d\'Arrhenius',
        justification: 'La constante de vitesse dépend de la température selon :',
        formule: 'k(T) = A \\exp\\left(-\\frac{E_a}{R T}\\right) \\implies \\ln k(T) = \\ln A - \\frac{E_a}{R} \\frac{1}{T}'
      },
      {
        etape: '2. Soustraction membre à membre',
        justification: 'En faisant le rapport des constantes aux deux températures $T_1$ et $T_2$ :',
        formule: '\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right) = \\frac{E_a}{R} \\frac{T_2 - T_1}{T_1 T_2}'
      },
      {
        etape: '3. Expression littérale et calcul numérique de $E_a$',
        justification: 'On isole $E_a$ :',
        formule: 'E_a = \\frac{R T_1 T_2}{T_2 - T_1} \\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{8,314 \\times 300 \\times 350}{50} \\ln(72) \\approx 74,7\\text{ kJ/mol}'
      }
    ],
    baremeEtPointsCles: [
      'Formule de la loi d\'Arrhenius et linéarisation logarithmique (2 pts)',
      'Conversion impérative en Kelvin (2 pts)',
      'Précision de l\'unité finale en $\\text{kJ}\\cdot\\text{mol}^{-1}$ (2 pts)',
      'Interprétation physique : barrière de potentiel de l\'état de transition (2 pts)'
    ]
  },
  {
    id: 'must-mass-9-methode-job-complexes',
    titre: 'Détermination de la stœchiométrie d\'un complexe par la méthode de Job',
    matiere: 'Chimie',
    filieres: ['PC', 'BCPST', 'PCSI'],
    tauxPresence: 'Présent dans ~50% des écrits de chimie des solutions',
    chapitreAssocie: 'Équilibres en Solution Aqueuse & Précipitation',
    enonceType: 'Pour déterminer la formule du complexe $M L_n$ formé entre un cation métallique $M$ et un ligand $L$, on mélange des solutions de même concentration $C_0$ dans des volumes $V_M$ et $V_L$ tels que $V_M + V_L = V_{tot} = \\mathrm{cste}$. L\'absorbance maximale $A$ est mesurée pour une fraction molaire $x_L = \\frac{V_L}{V_{tot}} = 0,75$. Trouver l\'entier $n$.',
    piegesImmediats: [
      'Inverser les fractions molaires du métal et du ligand.',
      'Oublier de vérifier que la somme des concentrations totales reste constante.'
    ],
    redactionModele: [
      {
        etape: '1. Principe de la méthode des variations continues',
        justification: 'La concentration du complexe $M L_n$ est maximale lorsque les réactifs $M$ et $L$ sont introduits dans les proportions stœchiométriques exactes de la réaction de formation $M + n L \\rightleftharpoons M L_n$.'
      },
      {
        etape: '2. Proportions stœchiométriques',
        justification: 'Le rapport des quantités de matière introduites vérifie :',
        formule: '\\frac{n_L}{n_M} = \\frac{C_0 V_L}{C_0 V_M} = \\frac{V_L}{V_M} = n'
      },
      {
        etape: '3. Relation avec la fraction molaire volumique $x_L$',
        justification: 'Comme $V_M = V_{tot} - V_L$, on a $\\frac{x_L}{1 - x_L} = n$ :',
        formule: 'n = \\frac{0,75}{1 - 0,75} = \\frac{0,75}{0,25} = 3'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé de l\'hypothèse de proportion stœchiométrique au maximum d\'absorbance (3 pts)',
      'Dérivation mathématique du maximum de produit $[M][L]^n$ (3 pts)',
      'Déduction sans hésitation de la formule du complexe $M L_3$ (2 pts)'
    ]
  },
  {
    id: 'must-mass-10-cristallo-cfc-sites',
    titre: 'Calcul de la compacité et des rayons d\'habitabilité d\'une maille CFC',
    matiere: 'Chimie',
    filieres: ['PCSI', 'PC', 'BCPST'],
    tauxPresence: 'Présent dans ~70% des sujets de cristallographie',
    chapitreAssocie: 'Cristallographie : Structures Métalliques & Sites Interstitiels',
    enonceType: 'Soit un cristal métallique adoptant une structure cubique à faces centrées (CFC) de paramètre de maille $a$ et de rayon atomique $R$. Démontrer la relation de contact selon la diagonale d\'une face, calculer la compacité $C$ et déterminer le rayon d\'habitabilité $r_O$ des sites octaédriques.',
    piegesImmediats: [
      'Confondre le contact sur la diagonale d\'une face ($a\\sqrt{2} = 4R$) avec la diagonale du cube ($a\\sqrt{3} = 4R$, qui correspond au CC !).',
      'Compter 8 atomes dans la maille au lieu de $Z = 4$ en oubliant les fractions de partage ($8 \\times 1/8 + 6 \\times 1/2$).'
    ],
    redactionModele: [
      {
        etape: '1. Multiplicité de la maille CFC',
        justification: 'Les atomes sont situés aux 8 sommets (chacun partagé entre 8 mailles) et aux centres des 6 faces (chacun partagé entre 2 mailles) :',
        formule: 'Z = 8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2} = 1 + 3 = 4 \\text{ atomes par maille}'
      },
      {
        etape: '2. Condition de contact des sphères dures',
        justification: 'Le contact s\'effectue le long de la diagonale d\'une face de longueur $a\\sqrt{2}$ :',
        formule: '4 R = a\\sqrt{2} \\implies a = 2\\sqrt{2} R'
      },
      {
        etape: '3. Calcul de la compacité théorique',
        justification: 'La compacité est le rapport du volume des sphères dures sur le volume de la maille $V_{maille} = a^3$ :',
        formule: 'C = \\frac{Z \\times \\frac{4}{3}\\pi R^3}{a^3} = \\frac{4 \\times \\frac{4}{3}\\pi R^3}{(2\\sqrt{2}R)^3} = \\frac{\\pi}{3\\sqrt{2}} \\approx 0,74'
      },
      {
        etape: '4. Habitabilité d\'un site octaédrique',
        justification: 'Un site octaédrique est situé au centre des arêtes et au centre du cube. La condition de tangence sur une arête de longueur $a$ donne $2R + 2r_O = a = 2\\sqrt{2}R$ :',
        formule: 'r_O = (\\sqrt{2} - 1) R \\approx 0,414 R'
      }
    ],
    baremeEtPointsCles: [
      'Comptage rigoureux de la multiplicité $Z=4$ (2 pts)',
      'Démonstration géométrique $a\\sqrt{2} = 4R$ (2 pts)',
      'Calcul exact de la compacité $C = \\frac{\\pi}{3\\sqrt{2}} \\approx 74\\%$ (2 pts)',
      'Rayon maximal sans déformation $r_O = (\\sqrt{2}-1)R$ (2 pts)'
    ]
  },
  {
    id: 'must-mass-11-organique-grignard',
    titre: 'Synthèse magnésienne d\'un alcool tertiaire à partir d\'un ester',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI'],
    tauxPresence: 'Présent dans ~75% des épreuves de chimie organique de concours',
    chapitreAssocie: 'Chimie Organique : Stéréochimie & Réactions Fondamentales',
    enonceType: 'On fait réagir le benzoate d\'éthyle $Ph-COO-Et$ avec un excès d\'organomagnésien $CH_3MgBr$ dans l\'éther anhydre, suivi d\'une hydrolyse acide diluée ($H_3O^+$). Décrire le mécanisme réactionnel complet, expliquer pourquoi l\'étape intermédiaire de cétone ne peut être isolée, et donner la structure de l\'alcool obtenu.',
    piegesImmediats: [
      'S\'arrêter à la cétone intermédiaire : la cétone formée est PLUS réactive envers le magnésien que l\'ester initial, l\'addition d\'un 2ème équivalent est instantanée !',
      'Oublier les conditions anhydres absolues pour la préparation de l\'organomagnésien.'
    ],
    redactionModele: [
      {
        etape: '1. Première addition nucléophile sur l\'ester',
        justification: 'Le carbanion nucléophile $CH_3^-$ attaque le carbone électrophile du carbonyle de l\'ester pour former un intermédiaire tétraédrique instable.',
        formule: 'Ph-C(=O)OEt + CH_3MgBr \\to Ph-C(O^-)(OEt)(CH_3)'
      },
      {
        etape: '2. Élimination de l\'ion éthanolate et formation de la cétone',
        justification: 'Le doublet de l\'oxygène se rabat en expulsant le groupe partant $EtO^-$ : il se forme l\'acétophénone $Ph-CO-CH_3$.'
      },
      {
        etape: '3. Deuxième addition nucléophile immédiate',
        justification: 'L\'acétophénone est plus électrophile que l\'ester (effet mésomère donneur du groupe éthoxy dans l\'ester). Un deuxième équivalent de $CH_3MgBr$ réagit donc instantanément pour former l\'alcoolate tertiaire $Ph-C(O^-)(CH_3)_2$.'
      },
      {
        etape: '4. Hydrolyse acide finale',
        justification: 'L\'ajout d\'eau acidifiée protone l\'alcoolate pour donner le 2-phénylpropan-2-ol (alcool tertiaire).',
        formule: 'Ph-C(CH_3)_2-OH'
      }
    ],
    baremeEtPointsCles: [
      'Justification de la réactivité accrue de la cétone par rapport à l\'ester (3 pts)',
      'Tracé des flèches courbes du mécanisme addition-élimination (3 pts)',
      'Identification correcte de l\'alcool tertiaire final (2 pts)'
    ]
  },
  {
    id: 'must-mass-12-bode-marges-stabilite',
    titre: 'Détermination graphique des marges de phase ($M_\\phi$) et de gain ($M_G$) sur Bode',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP'],
    tauxPresence: 'Présent dans ~80% des épreuves de sciences industrielles',
    chapitreAssocie: 'Stabilité & Synthèse des Correcteurs (P, PI, Avance de Phase)',
    enonceType: 'Soit la FTBO $T(p) = \\frac{10}{p(1 + 0,1p)(1 + 0,01p)}$. Définir et relever la pulsation de coupure à 0 dB $\\omega_{0dB}$, la pulsation à $-180^\\circ$ $\\omega_{-180^\\circ}$, ainsi que les marges de stabilité correspondantes.',
    piegesImmediats: [
      'Relever la marge de phase à la pulsation où la phase vaut $-180^\\circ$ (confusion entre $\\omega_{0dB}$ et $\\omega_{-180^\\circ}$).',
      'Confondre marge de gain arithmétique et marge de gain en décibels.'
    ],
    redactionModele: [
      {
        etape: '1. Définition de la pulsation de coupure à 0 dB et marge de phase',
        justification: '$\\omega_{0dB}$ est la pulsation telle que $|T(j\\omega_{0dB})|_{dB} = 0\\text{ dB}$. La marge de phase $M_\\phi$ mesure l\'écart par rapport à l\'instabilité critique $-180^\\circ$ :',
        formule: 'M_\\phi = 180^\\circ + \\arg(T(j\\omega_{0dB}))'
      },
      {
        etape: '2. Définition de la pulsation à $-180^\\circ$ et marge de gain',
        justification: '$\\omega_{-180}$ est la pulsation telle que $\\arg(T(j\\omega_{-180})) = -180^\\circ$. La marge de gain en dB est :',
        formule: 'M_G = -|T(j\\omega_{-180})|_{dB} = -20\\log_{10}|T(j\\omega_{-180})|'
      },
      {
        etape: '3. Critère de stabilité de Revers (Nyquist)',
        justification: 'Pour un système à déphasage minimal en boucle fermée, la stabilité requiert $M_\\phi > 0$ (usuellement $M_\\phi \\ge 45^\\circ$) et $M_G > 0$ (usuellement $M_G \\ge 6\\text{ dB}$ ou $10\\text{ dB}$).'
      }
    ],
    baremeEtPointsCles: [
      'Formules exactes avec les bons signes pour $M_\\phi$ et $M_G$ (3 pts)',
      'Tracé des traits de rappel verticaux précis sur le diagramme de Bode (3 pts)',
      'Conclusion sur la stabilité en boucle fermée (2 pts)'
    ]
  },
  {
    id: 'must-mass-13-willis-train-epicycloidal',
    titre: 'Calcul du rapport de transmission d\'un train épicycloïdal par la formule de Willis',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP', 'MPSI', 'PCSI'],
    tauxPresence: 'Présent dans ~70% des concours de mécanique des systèmes',
    chapitreAssocie: 'Dynamique des Systèmes Polyarticulés & Énergétique',
    enonceType: 'Soit un train épicycloïdal plan composé d\'un planétaire solaire 1 ($Z_1$ dents), de satellites 2 ($Z_2$ dents), d\'une couronne extérieure fixe 3 ($Z_3$ dents) et d\'un porte-satellites $ps$. Exprimer la raison géométrique de base $R_b$ et en déduire le rapport de réduction $\\frac{\\omega_{ps/0}}{\\omega_{1/0}}$.',
    piegesImmediats: [
      'Oublier le signe $(-1)^p$ lié au nombre de contacts extérieurs (contact solaire-satellite extérieur = négatif, contact satellite-couronne intérieur = positif).',
      'Confondre la vitesse par rapport au bâti avec la vitesse relative par rapport au porte-satellites.'
    ],
    redactionModele: [
      {
        etape: '1. Écriture de la formule de Willis dans le repère du porte-satellites',
        justification: 'En bloquant par la pensée le porte-satellites $ps$, le système se comporte comme un train d\'engrenages à axes fixes :',
        formule: 'R_b = \\frac{\\omega_{3/ps}}{\\omega_{1/ps}} = (-1)^p \\frac{\\prod Z_{menants}}{\\prod Z_{menes}}'
      },
      {
        etape: '2. Décompte des contacts extérieurs et rapport de denture',
        justification: 'Le contact $1-2$ est extérieur ($\\times -1$) et le contact $2-3$ est intérieur ($\\times +1$). Donc $p=1$ :',
        formule: 'R_b = -\\frac{Z_1 \\times Z_2}{Z_2 \\times Z_3} = -\\frac{Z_1}{Z_3}'
      },
      {
        etape: '3. Décomposition des vitesses et condition de couronne fixe',
        justification: 'Par composition des vitesses de rotation, $\\omega_{3/ps} = \\omega_{3/0} - \\omega_{ps/0}$ et $\\omega_{1/ps} = \\omega_{1/0} - \\omega_{ps/0}$. Comme la couronne 3 est liée au bâti ($\\omega_{3/0} = 0$) :',
        formule: '\\frac{-\\omega_{ps/0}}{\\omega_{1/0} - \\omega_{ps/0}} = -\\frac{Z_1}{Z_3} \\implies \\frac{\\omega_{ps/0}}{\\omega_{1/0}} = \\frac{Z_1}{Z_1 + Z_3}'
      }
    ],
    baremeEtPointsCles: [
      'Justification du passage dans le repère relatif du porte-satellites (2 pts)',
      'Détermination rigoureuse du signe de la raison de base (3 pts)',
      'Formule littérale simplifiée $\\frac{Z_1}{Z_1 + Z_3} < 1$ (2 pts)',
      'Vérification de cohérence cinématique (le porte-satellite tourne dans le même sens que le solaire) (1 pt)'
    ]
  },
  {
    id: 'must-mass-14-bfs-file-deque',
    titre: 'Implémentation optimale du BFS et détection de composantes connexes',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~75% des épreuves écrites d\'informatique',
    chapitreAssocie: 'Algorithmique des Graphes & Complexité',
    enonceType: 'Écrire en Python une fonction `bfs_distances(adj, source)` prenant en argument une liste d\'adjacence et un sommet source, et renvoyant le tableau des distances minimales. Justifier la complexité temporelle et spatiale.',
    piegesImmediats: [
      'Utiliser `queue.pop(0)` qui est en temps $\\mathcal{O}(n)$, au lieu de `collections.deque.popleft()` qui garantit $\\mathcal{O}(1)$.',
      'Marquer les sommets visités lors de leur extraction plutôt que lors de leur enfilement (provoque des doublons exponentiels).'
    ],
    redactionModele: [
      {
        etape: '1. Choix des structures de données en temps constant',
        justification: 'Pour assurer une complexité en $\\mathcal{O}(V + E)$, on utilise une file FIFO doublement chaînée `deque` et un tableau de distances initialisé à -1 (faisant aussi office de marqueur de visite).'
      },
      {
        etape: '2. Code Python modèle',
        justification: 'Code canonique de parcours en largeur :',
        formule: 'from collections import deque\\n\\ndef bfs_distances(adj, source):\\n    n = len(adj)\\n    dist = [-1] * n\\n    file = deque([source])\\n    dist[source] = 0\\n    while file:\\n        u = file.popleft()\\n        for v in adj[u]:\\n            if dist[v] == -1:\\n                dist[v] = dist[u] + 1\\n                file.append(v)\\n    return dist'
      },
      {
        etape: '3. Analyse de complexité théorique',
        justification: 'Chaque sommet est inséré au plus une fois dans la file (test `dist[v] == -1`), et chaque arête est examinée au plus deux fois (graphe non orienté) ou une fois (orienté) :',
        formule: 'T(V, E) = \\mathcal{O}(|V| + |E|) \\quad \\text{et} \\quad S(V) = \\mathcal{O}(|V|)'
      }
    ],
    baremeEtPointsCles: [
      'Import et utilisation de `collections.deque` (2 pts)',
      'Marquage immédiat à l\'enfilement pour éviter les réinsertions (3 pts)',
      'Preuve de la complexité linéaire $\\mathcal{O}(|V| + |E|)$ (3 pts)'
    ]
  },
  {
    id: 'must-mass-15-master-theorem-tri-fusion',
    titre: 'Résolution de récurrences de complexité par le Master Theorem (Tri Fusion)',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PCSI'],
    tauxPresence: 'Présent dans ~70% des problèmes d\'algorithmique',
    chapitreAssocie: 'Paradigme Diviser pour Régner & Master Theorem',
    enonceType: 'Soit la relation de récurrence du coût temporel du tri fusion : $T(n) = 2 T(n/2) + \\Theta(n)$ avec $T(1) = \\Theta(1)$. Énoncer le Master Theorem dans ce cas et établir la complexité optimale $\\Theta(n \\log n)$.',
    piegesImmediats: [
      'Confondre $a$ et $b$ dans le calcul de l\'exposant critique $\\log_b a$.',
      'Oublier de vérifier la condition de régularité pour le cas 3 du Master Theorem.'
    ],
    redactionModele: [
      {
        etape: '1. Identification des paramètres',
        justification: 'Pour une équation de la forme $T(n) = a T(n/b) + f(n)$ : ici $a = 2$ sous-problèmes récursifs de taille $n/b$ avec $b = 2$, et le coût de fusion est $f(n) = c n = \\Theta(n)$.'
      },
      {
        etape: '2. Calcul de l\'exposant critique',
        justification: 'L\'exposant critique de comparaison vaut :',
        formule: 'c_{crit} = \\log_b a = \\log_2 2 = 1'
      },
      {
        etape: '3. Comparaison avec le coût hors-récursion',
        justification: 'Puisque $f(n) = \\Theta(n^1) = \\Theta(n^{c_{crit}})$, on est exactement dans le cas d\'équilibre (cas 2) du Master Theorem. Par conséquent :',
        formule: 'T(n) = \\Theta(n^{\\log_b a} \\log n) = \\Theta(n \\log n)'
      }
    ],
    baremeEtPointsCles: [
      'Identification correcte de $a=2, b=2, f(n) = \\Theta(n)$ (2 pts)',
      'Calcul explicite de $\\log_b a = 1$ (2 pts)',
      'Déduction sans hésitation du terme logarithmique multiplicatif $\\Theta(n \\log n)$ (3 pts)',
      'Optimalité prouvée par l\'arbre de décision pour les tris comparatifs (1 pt)'
    ]
  },
  {
    id: 'must-mass-16-matrices-circulantes',
    titre: 'Diagonalisation des matrices circulantes & Racines de l\'unité',
    matiere: 'Mathématiques',
    filieres: ['MP', 'MPI'],
    tauxPresence: 'Présent dans ~50% des écrits d\'algèbre X-ENS et Mines-Ponts MP',
    chapitreAssocie: 'Réduction des Endomorphismes & Diagonalisation',
    enonceType: 'Soit $J$ la matrice de permutation circulaire de taille $n$. Montrer que toute matrice circulante s\'écrit comme un polynôme en $J$. En déduire ses valeurs propres et sa diagonalisabilité dans $\\mathbb{C}$.',
    piegesImmediats: [
      'Essayer de calculer brutalement le déterminant par opérations de lignes au lieu d\'utiliser la base de Fourier discrète.',
      'Oublier que les vecteurs propres sont indépendants des coefficients de la matrice circulante.'
    ],
    redactionModele: [
      {
        etape: '1. Propriétés de la matrice de shift $J$',
        justification: 'On pose $J = \\begin{pmatrix} 0 & 1 & 0 & \\dots \\\\ 0 & 0 & 1 & \\dots \\\\ \\dots \\\\ 1 & 0 & 0 & \\dots \\end{pmatrix}$. On a immédiatement $J^n = I_n$. Le polynôme $X^n - 1$ est scindé à racines simples sur $\\mathbb{C}$ (les $\\omega^k = e^{2i k \\pi / n}$), donc $J$ est diagonalisable.'
      },
      {
        etape: '2. Décomposition de la matrice circulante',
        justification: 'Toute matrice circulante $C(c_0, c_1, \\dots, c_{n-1})$ s\'écrit comme polynôme en $J$ :',
        formule: 'C = \\sum_{j=0}^{n-1} c_j J^j = P(J) \\quad \\text{avec} \\quad P(X) = \\sum_{j=0}^{n-1} c_j X^j'
      },
      {
        etape: '3. Spectre et vecteurs propres universels',
        justification: 'D\'après le théorème de décomposition spectrale, les valeurs propres de $C$ sont simplement les $P(\\lambda_k)$ où $\\lambda_k = e^{2i k \\pi / n}$ :',
        formule: '\\lambda_k = \\sum_{j=0}^{n-1} c_j e^{2i j k \\pi / n} \\quad (k \\in \\{0, \\dots, n-1\\})'
      }
    ],
    baremeEtPointsCles: [
      'Écriture $C = P(J)$ et minimalité de $X^n - 1$ (3 pts)',
      'Expression explicite des valeurs propres via la transformée de Fourier discrète (3 pts)',
      'Déduction immédiate de la formule du déterminant circulant $\\det(C) = \\prod \\lambda_k$ (2 pts)'
    ]
  },
  {
    id: 'must-mass-17-suite-implicite-asymptotique',
    titre: 'Développement asymptotique d\'une suite implicite ($x_n^n + x_n - 1 = 0$)',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    tauxPresence: 'Présent dans ~80% des écrits d\'analyse (Centrale, Mines, CCINP)',
    chapitreAssocie: 'Formules de Taylor, Développements Limités & Calcul Asymptotique',
    enonceType: 'Pour tout $n \\ge 1$, montrer que l\'équation $x^n + x - 1 = 0$ admet une unique solution $x_n \\in ]0, 1[$. Déterminer la limite de $(x_n)$, puis trouver un développement asymptotique à trois termes de $x_n$ quand $n \\to +\\infty$.',
    piegesImmediats: [
      'Écrire $\\lim x_n^n = 1$ sans justification alors que la base $x_n$ dépend de $n$.',
      'Oublier de composer par le logarithme pour débloquer les puissances $n$-ièmes.'
    ],
    redactionModele: [
      {
        etape: '1. Existence et unicité par bijection',
        justification: 'La fonction $f_n : x \\mapsto x^n + x - 1$ est strictement croissante et continue sur $[0, 1]$. Comme $f_n(0) = -1 < 0$ et $f_n(1) = 1 > 0$, le théorème de la bijection assure l\'existence et l\'unicité de $x_n \\in ]0, 1[$.'
      },
      {
        etape: '2. Monotonie et première limite',
        justification: 'On a $f_{n+1}(x_n) = x_n^{n+1} + x_n - 1 < x_n^n + x_n - 1 = 0 = f_{n+1}(x_{n+1})$. Par stricte croissance, $x_n < x_{n+1}$. La suite est croissante et majorée par 1, donc converge vers $\\ell \\in ]0, 1]$. Si $\\ell < 1$, $x_n^n \\to 0$ d\'où $\\ell - 1 = 0 \\implies \\ell = 1$. Donc $\\lim_{n\\to\\infty} x_n = 1$.'
      },
      {
        etape: '3. Premier terme correctif',
        justification: 'On pose $x_n = 1 - \\varepsilon_n$ avec $\\varepsilon_n \\to 0$. L\'équation devient $\\varepsilon_n = x_n^n = e^{n \\ln(1 - \\varepsilon_n)} \\approx e^{-n \\varepsilon_n}$. En prenant le log : $\\ln \\varepsilon_n = -n \\varepsilon_n$, d\'où :',
        formule: 'x_n = 1 - \\frac{\\ln n}{n} + o\\left(\\frac{\\ln n}{n}\\right)'
      }
    ],
    baremeEtPointsCles: [
      'Théorème de la bijection strictement croissante (2 pts)',
      'Preuve de la convergence vers 1 (2 pts)',
      'Développement asymptotique à 2 termes $x_n = 1 - \\frac{\\ln n}{n} + \\dots$ (4 pts)'
    ]
  },
  {
    id: 'must-mass-18-ellingham-temperature-inversion',
    titre: 'Déterminer la température d\'inversion pour la réduction d\'un oxyde métallique par le carbone',
    matiere: 'Chimie',
    filieres: ['PC', 'PSI'],
    tauxPresence: 'Présent dans ~75% des épreuves de chimie inorganique industrielle',
    chapitreAssocie: 'Diagramme d\'Ellingham & Pyrométallurgie',
    enonceType: 'On considère l\'oxydation du zinc $2Zn(s) + O_2(g) = 2ZnO(s)$ (droite 1) et l\'oxydation du carbone $2C(s) + O_2(g) = 2CO(g)$ (droite 2). Déterminer graphiquement et analytiquement la température d\'inversion $T_i$ au-delà de laquelle le carbone réduit spontanément l\'oxyde de zinc $ZnO$.',
    piegesImmediats: [
      'Ne pas équilibrer les deux équations avec exactement UNE mole de dioxygène $O_2(g)$ consommée.',
      'Oublier que la droite du carbone a une pente négative ($-\\Delta_r S^\\circ < 0$) car il y a création d\'une mole de gaz.'
    ],
    redactionModele: [
      {
        etape: '1. Équations normalisées à 1 mole de $O_2$',
        justification: 'Les grandeurs d\'Ellingham sont rapportées à une mole de dioxygène :',
        formule: '\\Delta_r G_1^\\circ(T) = -696 + 0,204 T \\quad \\text{et} \\quad \\Delta_r G_2^\\circ(T) = -221 - 0,179 T \\quad (\\text{en kJ/mol})'
      },
      {
        etape: '2. Condition thermodynamique de réduction',
        justification: 'La réaction globale de réduction $2ZnO(s) + 2C(s) = 2Zn(s) + 2CO(g)$ a pour affinité standard $\\Delta_r G^\\circ = \\Delta_r G_2^\\circ - \\Delta_r G_1^\\circ$. Elle est thermodynamiquement spontanée si $\\Delta_r G^\\circ < 0$, soit $\\Delta_r G_2^\\circ(T) < \\Delta_r G_1^\\circ(T)$.'
      },
      {
        etape: '3. Calcul de la température d\'inversion $T_i$',
        justification: 'À l\'intersection des deux droites d\'Ellingham :',
        formule: '-221 - 0,179 T_i = -696 + 0,204 T_i \\implies 0,383 T_i = 475 \\implies T_i = \\frac{475}{0,383} \\approx 1240\\text{ K} \\approx 967^\\circ\\text{C}'
      }
    ],
    baremeEtPointsCles: [
      'Normalisation stricte à 1 mole de $O_2$ (2 pts)',
      'Justification de la pente négative de la droite du monoxyde de carbone (2 pts)',
      'Critère de spontanéité : le réducteur situé en dessous réduit l\'oxyde au-dessus (2 pts)',
      'Calcul numérique de $T_i$ en Kelvin et Celsius (2 pts)'
    ]
  },
  {
    id: 'must-mass-19-navier-stokes-couette',
    titre: 'Profil de vitesse et force de frottement visqueux dans un écoulement de Couette plan',
    matiere: 'Physique',
    filieres: ['PC', 'PSI'],
    tauxPresence: 'Présent dans ~70% des épreuves de mécanique des fluides',
    chapitreAssocie: 'Mécanique des Fluides : Statique, Euler & Navier-Stokes',
    enonceType: 'Un fluide visqueux incompressible de viscosité $\\eta$ est situé entre deux plaques planes infinies horizontales séparées d\'une distance $h$. La plaque inférieure en $y=0$ est fixe, la plaque supérieure en $y=h$ est animée d\'une vitesse constante $V_0 \\vec{u}_x$. Déterminer le champ de vitesse $\\vec{v}(y)$ et la force de traînée surfacique exercée sur la plaque mobile.',
    piegesImmediats: [
      'Garder le terme convectif $(\\vec{v}\\cdot\\vec{\\nabla})\\vec{v}$ dans Navier-Stokes alors que l\'écoulement est unidirectionnel et uniforme en $x$.',
      'Oublier les conditions d\'adhérence à la paroi.'
    ],
    redactionModele: [
      {
        etape: '1. Simplification de l\'équation de Navier-Stokes',
        justification: 'Pour un écoulement stationnaire laminaire unidirectionnel $\\vec{v} = v(y)\\vec{u}_x$, $\\mathrm{div}\\vec{v} = \\frac{\\partial v}{\\partial x} = 0$. Le terme convectif $v \\frac{\\partial v}{\\partial x} \\vec{u}_x$ est rigoureusement nul. L\'équation de Navier-Stokes projetée sur $\\vec{u}_x$ donne :',
        formule: '\\eta \\frac{\\mathrm{d}^2 v}{\\mathrm{d}y^2} - \\frac{\\partial P}{\\partial x} = 0'
      },
      {
        etape: '2. Gradient de pression nul et profil linéaire',
        justification: 'En l\'absence de gradient de pression imposé ($\\frac{\\partial P}{\\partial x} = 0$), $\\frac{\\mathrm{d}^2 v}{\\mathrm{d}y^2} = 0 \\implies v(y) = A y + B$. Avec les conditions d\'adhérence $v(0) = 0$ et $v(h) = V_0$ :',
        formule: 'v(y) = V_0 \\frac{y}{h}'
      },
      {
        etape: '3. Contrainte tangentielle de cisaillement et force de frottement',
        justification: 'D\'après la loi de Newton pour les fluides visqueux, la contrainte de cisaillement à la plaque supérieure vaut :',
        formule: '\\sigma_{xy} = \\eta \\left.\\frac{\\mathrm{d}v}{\\mathrm{d}y}\\right|_{y=h} = \\eta \\frac{V_0}{h} \\implies \\frac{\\vec{F}_{fluide \\to plaque}}{S} = -\\eta \\frac{V_0}{h} \\vec{u}_x'
      }
    ],
    baremeEtPointsCles: [
      'Preuve de la nullité du terme d\'accélération convective (2 pts)',
      'Énoncé et application des conditions d\'adhérence aux parois (2 pts)',
      'Obtention du profil linéaire de Couette (2 pts)',
      'Calcul vectoriel de la force de freinage visqueux exercée par le fluide (2 pts)'
    ]
  },
  {
    id: 'must-mass-20-telegraphes-impedance-caracteristique',
    titre: 'Établissement des équations des télégraphistes & Expression de l\'impédance caractéristique',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~65% des concours Mines et Centrale',
    chapitreAssocie: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    enonceType: 'Modéliser une ligne de transmission électrique bifilaire sans pertes par des éléments linéiques $\\Lambda$ (inductance) et $\\Gamma$ (capacité). Établir les équations couplées reliant la tension $u(z, t)$ et le courant $i(z, t)$, et donner l\'impédance caractéristique $Z_c$.',
    piegesImmediats: [
      'Inverser les signes des dérivées spatiales lors du bilan différentiel.',
      'Confondre impédance caractéristique de la ligne $Z_c = \\sqrt{\\Lambda/\\Gamma}$ avec l\'impédance d\'onde du vide $\\eta_0 = \\sqrt{\\mu_0/\\varepsilon_0} \\approx 377\\,\\Omega$.'
    ],
    redactionModele: [
      {
        etape: '1. Schéma d\'une cellule infinitésimale de longueur $\\mathrm{d}z$',
        justification: 'La cellule comprend une bobine d\'inductance $\\Lambda\\mathrm{d}z$ en série et un condensateur de capacité $\\Gamma\\mathrm{d}z$ en dérivation.'
      },
      {
        etape: '2. Loi des mailles et loi des nœuds',
        justification: 'Loi des mailles : $u(z+\\mathrm{d}z, t) - u(z, t) = -\\Lambda\\mathrm{d}z \\frac{\\partial i}{\\partial t}$. Loi des nœuds : $i(z+\\mathrm{d}z, t) - i(z, t) = -\\Gamma\\mathrm{d}z \\frac{\\partial u}{\\partial t}$. En divisant par $\\mathrm{d}z$ :',
        formule: '\\frac{\\partial u}{\\partial z} = -\\Lambda \\frac{\\partial i}{\\partial t} \\quad \\text{et} \\quad \\frac{\\partial i}{\\partial z} = -\\Gamma \\frac{\\partial u}{\\partial t}'
      },
      {
        etape: '3. Découplage et impédance caractéristique',
        justification: 'En dérivant par rapport à $z$ et en substituant, on obtient l\'équation de d\'Alembert $\\frac{\\partial^2 u}{\\partial z^2} - \\frac{1}{v^2}\\frac{\\partial^2 u}{\\partial t^2} = 0$ avec $v = \\frac{1}{\\sqrt{\\Lambda \\Gamma}}$. Pour une onde progressive $u(z, t) = f(t - z/v)$, la relation tension-courant donne :',
        formule: 'i(z, t) = \\frac{1}{Z_c} f(t - z/v) \\quad \\text{avec} \\quad Z_c = \\sqrt{\\frac{\\Lambda}{\\Gamma}}'
      }
    ],
    baremeEtPointsCles: [
      'Schéma de tranche infinitésimale avec convention récepteur (2 pts)',
      'Établissement rigoureux des équations des télégraphistes (3 pts)',
      'Expression de la vitesse de propagation $v$ et de l\'impédance caractéristique $Z_c$ (3 pts)'
    ]
  }
];
