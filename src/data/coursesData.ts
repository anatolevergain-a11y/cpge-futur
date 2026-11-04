import type { CourseChapter } from './cpgeData';
import { ADDITIONAL_CPGE_COURSES } from './additionalCourses';
import { MASSIVE_CPGE_COURSES } from './massiveCoursesData';
import { FINAL_OFFICIAL_CPGE_COURSES } from './finalOfficialCoursesData';
import { EXTRA_OFFICIAL_CPGE_COURSES } from './extraOfficialCoursesData';
import { BCPST_OFFICIAL_COURSES } from './bcpstCoursesData';
import { NEW_OFFICIAL_CURRICULUM_COURSES } from './newOfficialCurriculumCourses';

const BASE_CPGE_COURSES: CourseChapter[] = [
  // ==========================================
  // MATHEMATIQUES - 1ERE & 2EME ANNEE
  // ==========================================
  {
    id: 'maths-algebre-lineaire',
    slug: 'algebre-lineaire-dimension-finie',
    title: 'Algèbre Linéaire & Dimension Finie',
    matiere: 'Mathématiques',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    description: 'Espaces vectoriels, familles libres et génératrices, bases, théorème de la base incomplète, supplémentaire, théorème du rang et représentations matricielles.',
    readTime: '26 min',
    prerequis: ['Calcul matriciel élémentaire', 'Systèmes linéaires', 'Ensembles et applications'],
    keyTheorems: [
      {
        name: 'Théorème du Rang (Théorème Fondamental de l\'Algèbre Linéaire)',
        statement: 'Soit $E$ et $F$ deux $\\mathbb{K}$-espaces vectoriels avec $E$ de dimension finie. Pour toute application linéaire $u \\in \\mathcal{L}(E, F)$ :\n$$\\dim(E) = \\dim(\\ker(u)) + \\dim(\\mathrm{Im}(u)) = \\dim(\\ker(u)) + \\mathrm{rg}(u)$$',
        demonstration: 'Soit $(e_1, \\dots, e_k)$ une base de $\\ker(u)$. D\'après le théorème de la base incomplète, on la complète en une base $(e_1, \\dots, e_k, e_{k+1}, \\dots, e_n)$ de $E$. On démontre alors que la famille $(u(e_{k+1}), \\dots, u(e_n))$ forme une base de $\\mathrm{Im}(u)$, ce qui donne $\\mathrm{rg}(u) = n - k = \\dim(E) - \\dim(\\ker(u))$.',
        astuceConcours: 'En dimension finie quand $\\dim(E) = \\dim(F)$, l\'injectivité équivaut à la surjectivité et à la bijectivité : il suffit donc de tester $\\ker(u) = \\{0\\}$ pour prouver qu\'un endomorphisme est un automorphisme !'
      },
      {
        name: 'Caractérisation des Sous-Espaces Supplémentaires',
        statement: 'Soit $E$ un espace de dimension finie et $F, G$ deux sous-espaces de $E$. $E = F \\oplus G \\iff (F \\cap G = \\{0\\} \\text{ et } \\dim(F) + \\dim(G) = \\dim(E))$.',
        astuceConcours: 'Pour prouver que deux sous-espaces sont supplémentaires en dimension finie, montrez d\'abord l\'égalité des dimensions puis l\'intersection nulle : c\'est infiniment plus rapide que de chercher une décomposition explicite.'
      }
    ],
    sections: [
      {
        title: '1. Familles de vecteurs et notion de dimension',
        content: 'Toute famille libre a un cardinal inférieur ou égal à toute famille génératrice. Si $E$ possède une base à $n$ éléments, toute base de $E$ a exactement $n$ éléments, noté $\\dim(E) = n$. Dans un espace de dimension $n$, toute famille libre de $n$ vecteurs est une base, et toute famille génératrice de $n$ vecteurs est une base.',
        methodKicker: 'Réflexe : Comptez toujours le cardinal de vos familles avant de vérifier la liberté !'
      },
      {
        title: '2. Formule de Grassmann',
        content: 'Pour deux sous-espaces vectoriels $F$ et $G$ de dimension finie :\n$$\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$$\nLa somme est directe si et seulement si $\\dim(F \\cap G) = 0$.'
      }
    ],
    piegesClassiques: [
      'Affirmer que $F \\oplus G = E$ implique que tout vecteur de $F$ est orthogonal à $G$ (la somme directe n\'a aucun rapport avec l\'orthogonalité sans produit scalaire).',
      'Confondre $u(F \\cap G)$ et $u(F) \\cap u(G)$ (seule l\'inclusion $u(F \\cap G) \\subset u(F) \\cap u(G)$ est toujours vraie).'
    ]
  },
  {
    id: 'maths-reduction',
    slug: 'reduction-des-endomorphismes',
    title: 'Réduction des Endomorphismes & Diagonalisation',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'MPSI'],
    annee: '2ème année',
    description: 'Polynômes d\'endomorphismes, lemme des noyaux, valeurs propres, sous-espaces propres, critères de diagonalisabilité et trigonalisation.',
    readTime: '25 min',
    prerequis: ['Espaces vectoriels de dimension finie', 'Déterminants', 'Polynômes $\\mathbb{K}[X]$'],
    keyTheorems: [
      {
        name: 'Lemme des Noyaux',
        statement: 'Soit $u \\in \\mathcal{L}(E)$ et $P_1, \\dots, P_k \\in \\mathbb{K}[X]$ des polynômes deux à deux premiers entre eux. En posant $P = \\prod_{i=1}^k P_i$, on a :\n$$\\ker(P(u)) = \\bigoplus_{i=1}^k \\ker(P_i(u))$$\nDe plus, les projecteurs associés à cette décomposition sont des polynômes en $u$.',
        demonstration: 'Par récurrence sur $k$. Pour $k=2$, d\'après l\'identité de Bézout, il existe $U, V \\in \\mathbb{K}[X]$ tels que $U P_1 + V P_2 = 1$. En évaluant en $u$, $\\mathrm{id}_E = (U P_1)(u) + (V P_2)(u)$. Tout vecteur $x \\in \\ker((P_1 P_2)(u))$ s\'écrit $x_2 + x_1$ avec $x_1 = (U P_1)(u)(x) \\in \\ker(P_2(u))$ et $x_2 = (V P_2)(u)(x) \\in \\ker(P_1(u))$. L\'intersection est réduite à $\\{0\\}$ car si $y \\in \\ker(P_1(u)) \\cap \\ker(P_2(u))$, $y = U(u)P_1(u)(y) + V(u)P_2(u)(y) = 0$.',
        astuceConcours: 'Indispensable pour décomposer l\'espace sans calculer explicitement les vecteurs propres ! Dès que le polynôme minimal ou annulateur est scindé à racines simples, le lemme des noyaux donne immédiatement la diagonalisabilité.'
      },
      {
        name: 'Théorème de Cayley-Hamilton',
        statement: 'Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension finie $n$ et $u \\in \\mathcal{L}(E)$. Soit $\\chi_u(X) = \\det(X \\mathrm{id}_E - u)$ son polynôme caractéristique. Alors :\n$$\\chi_u(u) = 0_{\\mathcal{L}(E)}$$',
        astuceConcours: 'Permet d\'exprimer $u^n$ comme combinaison linéaire de $\\mathrm{id}, u, \\dots, u^{n-1}$, ou d\'inverser $u$ si $\\det(u) \\neq 0$.'
      }
    ],
    sections: [
      {
        title: '1. Éléments propres & Sous-espaces caractéristiques',
        content: 'Soit $u \\in \\mathcal{L}(E)$. Un scalaire $\\lambda \\in \\mathbb{K}$ est valeur propre s\'il existe un vecteur non nul $x \\in E$ tel que $u(x) = \\lambda x$. Le sous-espace propre associé est $E_\\lambda(u) = \\ker(u - \\lambda \\mathrm{id}_E)$. Le spectre $\\mathrm{Sp}(u)$ est l\'ensemble des racines de $\\chi_u$ appartenant à $\\mathbb{K}$. En dimension $n$, $\\dim E_\\lambda(u) \\le m_\\lambda$.',
        methodKicker: 'Réflexe : Toujours vérifier la somme des dimensions des sous-espaces propres $\\sum_{\\lambda} \\dim E_\\lambda(u) = n$.'
      }
    ],
    piegesClassiques: [
      'Confondre polynôme annulateur et polynôme caractéristique.',
      'Oublier de vérifier le corps de base ($\mathbb{R}$ vs $\mathbb{C}$).'
    ]
  },
  {
    id: 'maths-topologie-evn',
    slug: 'espaces-vectoriels-normes-topologie',
    title: 'Espaces Vectoriels Normés & Topologie',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Normes, équivalence des normes en dimension finie, ouverts, fermés, suites convergentes, compacité (Bolzano-Weierstrass) et continuité.',
    readTime: '28 min',
    prerequis: ['Espaces vectoriels', 'Suites réelles', 'Topologie de $\\mathbb{R}$'],
    keyTheorems: [
      {
        name: 'Théorème d\'Équivalence des Normes en Dimension Finie',
        statement: 'Dans un $\\mathbb{K}$-espace vectoriel $E$ de dimension finie, TOUTES les normes sont équivalentes :\n$$\\exists \\alpha, \\beta > 0, \\quad \\forall x \\in E, \\quad \\alpha \\|x\\|_a \\le \\|x\\|_b \\le \\beta \\|x\\|_a$$',
        demonstration: 'On compare une norme quelconque $\\|\\cdot\\|$ à la norme infinie $\\|\\cdot\\|_\\infty$ associée à une base $(e_1, \\dots, e_n)$. L\'application $x \\mapsto \\|x\\|$ est continue pour $\\|\\cdot\\|_\\infty$, et la sphère unité $S_\\infty = \\{x \\mid \\|x\\|_\\infty = 1\\}$ est compacte dans $\\mathbb{R}^n$. Elle y atteint son minimum strictement positif $\\alpha > 0$.',
        astuceConcours: 'En dimension finie, la convergence d\'une suite ou la fermeture d\'une partie ne dépend pas de la norme choisie. Vous pouvez choisir la norme la plus pratique pour calculer (souvent $\\|\\cdot\\|_\\infty$ ou $\\|\\cdot\\|_2$).'
      },
      {
        name: 'Théorème de Bolzano-Weierstrass & Compacité',
        statement: 'Dans un EVN de dimension finie, une partie $K$ est compacte si et seulement si elle est FERMÉE et BORNÉE. De toute suite d\'éléments de $K$, on peut extraire une sous-suite qui converge dans $K$.',
        astuceConcours: 'Toute fonction continue sur un compact non vide est bornée et atteint ses bornes (Théorème des bornes atteintes) !'
      }
    ],
    sections: [
      {
        title: '1. Caractérisation séquentielle des fermés',
        content: 'Une partie $F \\subset E$ est fermée si et seulement si pour toute suite $(x_n)_{n\\in\\mathbb{N}}$ d\'éléments de $F$ convergeant vers $\\ell \\in E$, on a $\\ell \\in F$.',
        methodKicker: 'Pour prouver qu\'un ensemble est fermé, l\'argument séquentiel est souvent le plus limpide.'
      }
    ],
    piegesClassiques: [
      'Affirmer que les boules fermées sont compactes en dimension infinie (Théorème de Riesz : la boule fermée est compacte si et seulement si la dimension est finie !).',
      'Penser qu\'une réunion quelconque de fermés est fermée (seule la réunion finie est fermée).'
    ]
  },
  {
    id: 'maths-integration-intervalle',
    slug: 'integration-sur-un-intervalle-quelconque',
    title: 'Intégration sur un Intervalle Quelconque & Convergence Dominée',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '2ème année',
    description: 'Fonctions positives intégrables, intégrabilité $L^1$, théorème de convergence dominée de Lebesgue, intégration terme à terme et intégrales dépendant d\'un paramètre.',
    readTime: '30 min',
    prerequis: ['Intégration sur un segment', 'Séries numériques', 'Suites de fonctions'],
    keyTheorems: [
      {
        name: 'Théorème de Convergence Dominée de Lebesgue (TCD)',
        statement: 'Soit $I$ un intervalle et $(f_n)_{n\\in\\mathbb{N}}$ une suite de fonctions continues par morceaux sur $I$ à valeurs dans $\\mathbb{K}$.\n1. $(f_n)$ converge simplement vers $f$ continue par morceaux sur $I$.\n2. Hypothèse de domination : il existe $\\phi \\in L^1(I, \\mathbb{R}^+)$ indépendante de $n$ telle que $\\forall n, \\forall t \\in I, |f_n(t)| \\le \\phi(t)$.\nAlors $f$ et les $f_n$ sont intégrables sur $I$ et :\n$$\\lim_{n \\to +\\infty} \\int_I f_n(t)\\,\\mathrm{d}t = \\int_I f(t)\\,\\mathrm{d}t$$',
        astuceConcours: 'Exigez-vous 4 lignes d\'écriture au brouillon : 1. Continuité par morceaux. 2. Limite simple. 3. Fonction dominante indépendante de n. 4. Intégrabilité de la dominante.'
      },
      {
        name: 'Théorème de Dérivation sous le Signe Intégrale (Leibniz)',
        statement: 'Pour $F(x) = \\int_I g(x, t)\\,\\mathrm{d}t$, si pour tout segment $[a, b] \\subset J$, $\\left|\\frac{\\partial g}{\\partial x}(x, t)\\right| \\le \\phi_{[a, b]}(t)$ avec $\\phi_{[a, b]} \\in L^1(I)$, alors $F$ est $\\mathcal{C}^1$ et $F\'(x) = \\int_I \\frac{\\partial g}{\\partial x}(x, t)\\,\\mathrm{d}t$.',
        astuceConcours: 'Introduisez TOUJOURS un segment $[a, b] \\subset J$ pour la domination locale si le domaine $J$ est ouvert ou non borné !'
      }
    ],
    sections: [
      {
        title: '1. Comparaison et intégrabilité des fonctions positives',
        content: 'Si $0 \\le f \\le g$ au voisinage d\'une borne, l\'intégrabilité de $g$ entraîne celle de $f$. Si $f \\sim g$ avec $f, g > 0$, $f$ est intégrable si et seulement si $g$ l\'est.',
        methodKicker: 'Les intégrales de référence sont celles de Riemann : $\\int_1^{+\\infty} \\frac{\\mathrm{d}t}{t^\\alpha}$ converge $\\iff \\alpha > 1$, et $\\int_0^1 \\frac{\\mathrm{d}t}{t^\\alpha}$ converge $\\iff \\alpha < 1$.'
      }
    ],
    piegesClassiques: [
      'Dominer par une fonction qui dépend de $n$ ou de la variable extérieure $x$.',
      'Confondre intégrabilité ($f \\in L^1$) et existence d\'une limite en intégrale impropre semi-convergente (ex: $\\int_0^{+\\infty} \\frac{\\sin t}{t}\\,\\mathrm{d}t$ converge mais $t \\mapsto \\frac{|\\sin t|}{t}$ n\'est pas intégrable).'
    ]
  },
  {
    id: 'maths-espaces-euclidiens',
    slug: 'espaces-euclidiens-theoreme-spectral',
    title: 'Espaces Euclidiens & Théorème Spectral',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '2ème année',
    description: 'Produit scalaire, inégalité de Cauchy-Schwarz, orthogonalité, procédé de Gram-Schmidt, endomorphismes adjoints, endomorphismes symétriques et groupe orthogonal $O(n)$.',
    readTime: '27 min',
    prerequis: ['Algèbre linéaire', 'Réduction des endomorphismes', 'Dimension finie'],
    keyTheorems: [
      {
        name: 'Théorème Spectral Fondamental',
        statement: 'Soit $E$ un espace vectoriel euclidien de dimension finie et $u \\in \\mathcal{L}(E)$ un endomorphisme symétrique (auto-adjoint : $u^* = u$). Alors :\n1. Toutes les valeurs propres de $u$ sont RÉELLES : $\\mathrm{Sp}(u) \\subset \\mathbb{R}$.\n2. Les sous-espaces propres sont deux à deux ORTHOGONAUX.\n3. $u$ est diagonalisable dans une BASE ORTHONORMÉE de $E$.\nEn termes matriciels : pour toute matrice symétrique réelle $S \\in \\mathcal{S}_n(\\mathbb{R})$, il existe une matrice orthogonale $P \\in O(n)$ et une matrice diagonale réelle $D$ telles que $S = P D P^T = P D P^{-1}$.',
        demonstration: 'Démontrable en considérant une valeur propre complexe et un vecteur propre associé dans $\\mathbb{C}^n$ : $\\langle AX, X \\rangle_{\\mathbb{C}} = \\lambda \\|X\\|^2 = \\langle X, A^T X \\rangle = \\bar{\\lambda} \\|X\\|^2$, d\'où $\\lambda = \\bar{\\lambda}$. Puis par récurrence sur la dimension en montrant que l\'orthogonal d\'une droite propre est stable par $u$.',
        astuceConcours: 'Dès qu\'une matrice est symétrique réelle ($A = A^T$), elle est diagonalisable sur $\\mathbb{R}$ sans le moindre calcul ! De plus, elle se diagonalise avec une matrice de passage orthogonale ($P^{-1} = P^T$).'
      },
      {
        name: 'Inégalité de Cauchy-Schwarz & Cas d\'égalité',
        statement: 'Pour tout $(x, y) \\in E^2$ :\n$$|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$$\nAvec égalité si et seulement si la famille $(x, y)$ est liée (colinéaire).',
        astuceConcours: 'Outil universel pour majorer des intégrales du produit de deux fonctions : $(\\int f g)^2 \\le (\\int f^2)(\\int g^2)$.'
      }
    ],
    sections: [
      {
        title: '1. Procédé d\'orthonormalisation de Gram-Schmidt',
        content: 'À partir d\'une base libre $(v_1, \\dots, v_n)$, on construit une base orthonormée $(e_1, \\dots, e_n)$ vérifiant pour tout $k$, $\\mathrm{Vect}(e_1, \\dots, e_k) = \\mathrm{Vect}(v_1, \\dots, v_k)$ par projection orthogonale successive.',
        methodKicker: 'Formule : $u_k = v_k - \\sum_{i=1}^{k-1} \\langle v_k, e_i \\rangle e_i$, puis $e_k = \\frac{u_k}{\\|u_k\\|}$.'
      }
    ],
    piegesClassiques: [
      'Affirmer que l\'égalité dans Cauchy-Schwarz implique $x = y$ (c\'est une colinéarité $y = \\lambda x$).',
      'Confondre $P^{-1} = P^T$ (vrai seulement pour les matrices orthogonales).'
    ]
  },
  {
    id: 'maths-series-entieres',
    slug: 'series-entieres-et-fourier',
    title: 'Séries Entières & Analyse Harmonique',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Rayon de convergence, règle de d\'Alembert, lemme d\'Abel, développements en série entière usuels, continuité et dérivabilité terme à terme, séries de Fourier.',
    readTime: '30 min',
    prerequis: ['Séries numériques', 'Suites et séries de fonctions', 'Intégration sur un segment'],
    keyTheorems: [
      {
        name: 'Lemme d\'Abel',
        statement: 'Soit $\\sum a_n z^n$ une série entière. S\'il existe $z_0 \\neq 0$ tel que la suite $(a_n z_0^n)_{n \\in \\mathbb{N}}$ soit bornée, alors pour tout $z \\in \\mathbb{C}$ tel que $|z| < |z_0|$, la série $\\sum a_n z^n$ est absolument convergente.',
        astuceConcours: 'Fondement absolu de la notion de rayon de convergence.'
      },
      {
        name: 'Formule de Parseval (Séries de Fourier)',
        statement: 'Pour une fonction $f$ continue par morceaux et $2\\pi$-périodique :\n$$\\frac{1}{2\\pi} \\int_0^{2\\pi} |f(t)|^2 \\,\\mathrm{d}t = a_0^2 + \\frac{1}{2} \\sum_{n=1}^\\infty (a_n^2 + b_n^2) = \\sum_{n=-\\infty}^{+\\infty} |c_n(f)|^2$$',
        astuceConcours: 'Moyen ultra classique pour calculer la somme de séries numériques comme $\\zeta(2)$ ou $\\zeta(4)$.'
      }
    ],
    sections: [
      {
        title: '1. Propriétés de la somme à l\'intérieur du disque de convergence',
        content: 'À l\'intérieur du disque ouvert $D(0, R)$, la somme est indéfiniment dérivable. On peut dériver terme à terme sans modifier le rayon de convergence.'
      }
    ],
    piegesClassiques: [
      'Affirmer que la série diverge pour $|z| = R$.',
      'Dériver terme à terme au bord du disque sans vérifier la convergence uniforme.'
    ]
  },
  {
    id: 'maths-probabilites-discretes',
    slug: 'probabilites-discretes-variables-aleatoires',
    title: 'Probabilités Discrètes & Variables Aléatoires',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère & 2ème année',
    description: 'Espaces probabilisés, probabilités conditionnelles, système complet d\'événements, variables aléatoires discrètes infinies (Poisson, géométrique), espérance, variance et lois conjointes.',
    readTime: '24 min',
    prerequis: ['Séries numériques', 'Combinatoire', 'Ensembles dénombrables'],
    keyTheorems: [
      {
        name: 'Formule des Probabilités Totales (Cas Dénombrable)',
        statement: 'Soit $(A_n)_{n\\in\\mathbb{N}}$ un système complet d\'événements de probabilités non nulles. Pour tout événement $B$ :\n$$P(B) = \\sum_{n=0}^{+\\infty} P(B \\cap A_n) = \\sum_{n=0}^{+\\infty} P(A_n) P(B \\mid A_n)$$',
        astuceConcours: 'La justification que $(A_n)$ forme bien une partition dénombrable de l\'univers $\\Omega$ rapporte systématiquement des points au barème.'
      },
      {
        name: 'Théorème du Transfert & Inégalité de Bienaymé-Tchebychev',
        statement: 'Pour $X$ à valeurs dans $X(\\Omega) \\subset \\mathbb{R}$ et $g : \\mathbb{R} \\to \\mathbb{R}$, $g(X)$ admet une espérance si et seulement si $\\sum_{x \\in X(\\Omega)} |g(x)| P(X=x) < +\\infty$. Dans ce cas $E(g(X)) = \\sum g(x) P(X=x)$. Pour tout $\\varepsilon > 0$, $P(|X - E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$.',
        astuceConcours: 'Sert de base à la démonstration de la loi faible des grands nombres.'
      }
    ],
    sections: [
      {
        title: '1. Lois usuelles discrètes à connaître par cœur',
        content: 'Loi de Bernoulli $\\mathcal{B}(p)$, Loi binomiale $\\mathcal{B}(n, p)$ ($E=np, V=np(1-p)$), Loi géométrique $\\mathcal{G}(p)$ sur $\\mathbb{N}^*$ ($P(X=k)=p(1-p)^{k-1}, E=1/p$), Loi de Poisson $\\mathcal{P}(\\lambda)$ ($P(X=k)=e^{-\\lambda}\\frac{\\lambda^k}{k!}, E=V=\\lambda$).',
        methodKicker: 'La loi géométrique est l\'unique loi discrète sans mémoire : $P(X > n+k \\mid X > n) = P(X > k)$.'
      }
    ],
    piegesClassiques: [
      'Calculer l\'espérance sans vérifier au préalable la sommabilité de la série $\\sum |x_k| P(X=x_k)$.',
      'Confondre variables indépendantes et variables non corrélées ($Cov(X, Y) = 0$).'
    ]
  },
  {
    id: 'maths-equa-diff-systemes',
    slug: 'equations-differentielles-systemes-lineaires',
    title: 'Équations Différentielles & Systèmes Linéaires',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère & 2ème année',
    description: 'Théorème de Cauchy-Lipschitz linéaire, équations d\'ordre 1 et 2, méthode de variation de la constante, systèmes différentiels autonomes $\\dot{X} = AX$ et exponentielle de matrice.',
    readTime: '26 min',
    prerequis: ['Calcul matriciel', 'Réduction d\'endomorphismes', 'Intégration'],
    keyTheorems: [
      {
        name: 'Théorème de Cauchy-Lipschitz Linéaire',
        statement: 'Soit $I \\subset \\mathbb{R}$ un intervalle, $A : I \\to \\mathcal{M}_n(\\mathbb{K})$ et $B : I \\to \\mathbb{K}^n$ continues. Pour tout $t_0 \\in I$ et tout $X_0 \\in \\mathbb{K}^n$, le problème de Cauchy :\n$$\\dot{X}(t) = A(t) X(t) + B(t), \\quad X(t_0) = X_0$$\nadmet une UNIQUE solution globale définie sur $I$ tout entier.',
        astuceConcours: 'L\'ensemble des solutions de l\'équation homogène $\\dot{X} = A(t) X$ est un espace vectoriel de dimension exactement $n$.'
      },
      {
        name: 'Exponentielle de Matrice & Systèmes Autonomes',
        statement: 'Pour $A \\in \\mathcal{M}_n(\\mathbb{K})$ constante, la solution unique de $\\dot{X} = AX$ avec $X(0) = X_0$ est donnée par :\n$$X(t) = \\exp(t A) X_0 = \\sum_{k=0}^{+\\infty} \\frac{t^k A^k}{k!} X_0$$',
        astuceConcours: 'Si $A = P D P^{-1}$ est diagonalisable, alors $\\exp(tA) = P \\exp(tD) P^{-1}$ où $\\exp(tD) = \\mathrm{diag}(e^{\\lambda_1 t}, \\dots, e^{\\lambda_n t})$.'
      }
    ],
    sections: [
      {
        title: '1. Méthode de variation de la constante',
        content: 'Pour une équation scalaire $y\'(t) + a(t)y(t) = b(t)$, la solution homogène est $y_h(t) = C e^{-A(t)}$. On cherche une solution particulière sous la forme $y_p(t) = C(t) e^{-A(t)}$, ce qui donne $C\'(t) = b(t) e^{A(t)}$.'
      }
    ],
    piegesClassiques: [
      'Penser que $\\exp(A + B) = \\exp(A)\\exp(B)$ sans vérifier que $A$ et $B$ commutent ($AB = BA$).',
      'Oublier d\'ajouter la solution particulière à l\'ensemble des solutions homogènes.'
    ]
  },

  // ==========================================
  // PHYSIQUE - 1ERE & 2EME ANNEE
  // ==========================================
  {
    id: 'physique-circuits-bode',
    slug: 'circuits-arqs-filtres-bode',
    title: 'Circuits Électriques, Régimes Transitoires & Filtres Linéaires',
    matiere: 'Physique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère année',
    description: 'Lois de Kirchhoff dans l\'ARQS, circuits du 1er et 2nd ordre (RL, RC, RLC), impédances complexes, fonction de transfert, diagrammes de Bode et filtrage.',
    readTime: '25 min',
    prerequis: ['Équations différentielles linéaires', 'Nombres complexes', 'Notion de puissance'],
    keyTheorems: [
      {
        name: 'Mise sous forme canonique d\'un circuit RLC série',
        statement: 'L\'équation différentielle vérifiée par la tension aux bornes du condensateur s\'écrit :\n$$\\frac{\\mathrm{d}^2 u_C}{\\mathrm{d}t^2} + \\frac{\\omega_0}{Q} \\frac{\\mathrm{d}u_C}{\\mathrm{d}t} + \\omega_0^2 u_C = \\omega_0^2 e(t)$$\navec pulsation propre $\\omega_0 = \\frac{1}{\\sqrt{LC}}$ et facteur de qualité $Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$.',
        astuceConcours: 'Trois régimes libres selon le discriminant $\\Delta = \\omega_0^2(1/(4Q^2) - 1)$ : apériodique ($Q < 1/2$), critique ($Q = 1/2$, réponse la plus rapide sans dépassement) et pseudo-périodique ($Q > 1/2$).'
      }
    ],
    sections: [
      {
        title: '1. Diagrammes de Bode et asymptotes',
        content: 'Le diagramme de Bode trace le gain en décibels $G_{dB}(\\omega) = 20\\log_{10}|H(j\\omega)|$ et la phase $\\phi(\\omega) = \\arg(H(j\\omega))$ en échelle logarithmique. Pour un ordre 2 passe-bas, la pente asymptotique en haute fréquence est de $-40\\text{ dB/décade}$.'
      }
    ],
    piegesClassiques: [
      'Intervertir les comportements asymptotiques d\'une bobine (court-circuit en BF, circuit ouvert en HF) et d\'un condensateur.',
      'Oublier les continuités physiques : $i_L(t)$ dans une inductance et $u_C(t)$ aux bornes d\'un condensateur sont TOUJOURS continues.'
    ]
  },
  {
    id: 'physique-mecanique-oscillateurs',
    slug: 'mecanique-du-point-oscillateurs',
    title: 'Mécanique du Point & Oscillateurs Harmoniques',
    matiere: 'Physique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère année',
    description: 'Lois de Newton, référentiels galiléens, théorèmes de l\'énergie cinétique et de l\'énergie mécanique, oscillateurs amortis et portrait de phase.',
    readTime: '24 min',
    prerequis: ['Dérivation vectorielle', 'Coordonnées polaires et cylindriques', 'Équations différentielles'],
    keyTheorems: [
      {
        name: 'Théorème de l\'Énergie Mécanique',
        statement: 'Dans un référentiel galiléen, pour un point matériel soumis à des forces conservatives (d\'énergie potentielle $E_p$) et non conservatives $\\vec{F}_{nc}$ :\n$$\\frac{\\mathrm{d}E_m}{\\mathrm{d}t} = \\mathcal{P}(\\vec{F}_{nc}) \\quad \\text{avec } E_m = E_c + E_p$$',
        astuceConcours: 'Si seules des forces conservatives travaillent, $E_m = \\mathrm{cste}$ : dériver cette constante par rapport au temps fournit immédiatement l\'équation du mouvement sans projeter le PFD !'
      }
    ],
    sections: [
      {
        title: '1. Petites oscillations autour d\'une position d\'équilibre stable',
        content: 'Une position d\'équilibre $x_0$ correspond à $E_p\'(x_0) = 0$. Elle est stable si et seulement si $E_p\'\'(x_0) > 0$. La pulsation des petites oscillations vaut alors $\\omega_0 = \\sqrt{\\frac{E_p\'\'(x_0)}{m}}$.'
      }
    ],
    piegesClassiques: [
      'Appliquer le PFD dans un référentiel non galiléen sans ajouter les forces d\'inertie d\'entraînement et de Coriolis.',
      'Oublier que la réaction d\'un support sans frottement est strictement normale à la surface.'
    ]
  },
  {
    id: 'physique-thermodynamique-machines',
    slug: 'thermodynamique-principes-machines',
    title: 'Thermodynamique : Principes & Machines Thermiques',
    matiere: 'Physique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '1ère & 2ème année',
    description: 'Premier principe, enthalpie, second principe et création d\'entropie, cycles dithermes et polythermes, rendements de Carnot et transferts thermiques.',
    readTime: '28 min',
    prerequis: ['Gaz parfaits', 'Calcul différentiel élémentaire', 'Énergie interne'],
    keyTheorems: [
      {
        name: 'Théorème de Carnot pour les Machines Dithermes',
        statement: 'Pour une machine fonctionnant entre une source chaude à $T_C$ et une source froide à $T_F < T_C$ :\n$$\\text{Moteur : } \\eta = -\\frac{W}{Q_C} \\le 1 - \\frac{T_F}{T_C} = \\eta_C$$\n$$\\text{Pompe à chaleur : } e_{PAC} = -\\frac{Q_C}{W} \\le \\frac{T_C}{T_C - T_F}$$',
        astuceConcours: 'L\'égalité n\'est atteinte que si le cycle est entièrement réversible (création d\'entropie nulle : $S_c = 0$).'
      },
      {
        name: 'Inégalité de Clausius',
        statement: 'Pour tout cycle fermé d\'un fluide échangeant de la chaleur $Q_i$ avec des thermostats à températures $T_i$ :\n$$\\sum_i \\frac{Q_i}{T_i} \\le 0$$',
        astuceConcours: 'Conséquence directe de $\\Delta S_{cycle} = 0 = S_e + S_c$ avec $S_c \\ge 0$.'
      }
    ],
    sections: [
      {
        title: '1. Équations de Laplace pour un gaz parfait en adiabatique réversible',
        content: 'Pour une transformation isentropique ($S=\\mathrm{cste}$) d\'un gaz parfait à coefficients constants $\\gamma = C_p/C_v$ :\n$$P V^\\gamma = \\mathrm{cste}, \\quad T V^{\\gamma-1} = \\mathrm{cste}, \\quad T^\\gamma P^{1-\\gamma} = \\mathrm{cste}$$'
      }
    ],
    piegesClassiques: [
      'Appliquer les lois de Laplace à une détente de Joule-Gay-Lussac (elle est adiabatique mais irréversible, donc non isentropique !).',
      'Confondre travail utile et travail des forces de pression atmosphérique.'
    ]
  },
  {
    id: 'physique-maxwell',
    slug: 'electromagnetisme-equations-de-maxwell',
    title: 'Électromagnétisme & Équations de Maxwell',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'PCSI'],
    annee: '2ème année',
    description: 'Formes locales et intégrales des 4 équations fondamentales, potentiel vecteur, conservation de la charge, énergie électromagnétique et vecteur de Poynting.',
    readTime: '28 min',
    prerequis: ['Analyse vectorielle', 'Électrostatique et magnétostatique', 'Théorèmes de Stokes et Green'],
    keyTheorems: [
      {
        name: 'Les 4 Équations de Maxwell Fondamentales',
        statement: 'Dans le vide avec sources $(\\rho, \\vec{j})$ :\n1. $\\mathrm{div}\\,\\vec{E} = \\frac{\\rho}{\\varepsilon_0}$ (Gauss)\n2. $\\mathrm{div}\\,\\vec{B} = 0$ (Flux)\n3. $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ (Faraday)\n4. $\\vec{\\mathrm{rot}}\\,\\vec{B} = \\mu_0 \\vec{j} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ (Ampère-Maxwell)',
        astuceConcours: 'Question classique : le terme de Maxwell $\\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ assure la compatibilité mathématique avec la conservation de la charge $\\mathrm{div}\\,\\vec{j} + \\frac{\\partial \\rho}{\\partial t} = 0$.'
      }
    ],
    sections: [
      {
        title: '1. Théorème de Poynting & propagation de l\'énergie',
        content: 'La densité d\'énergie est $u_{em} = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0}$ et $\\vec{\\Pi} = \\frac{\\vec{E}\\wedge\\vec{B}}{\\mu_0}$. L\'équation de conservation s\'écrit $\\frac{\\partial u_{em}}{\\partial t} + \\mathrm{div}\\,\\vec{\\Pi} = -\\vec{j}\\cdot\\vec{E}$.'
      }
    ],
    piegesClassiques: [
      'Oublier le terme $-\\frac{\\partial \\vec{A}}{\\partial t}$ dans $\\vec{E}$ en régime variable.'
    ]
  },
  {
    id: 'physique-mecanique-fluides',
    slug: 'mecanique-des-fluides-navier-stokes',
    title: 'Mécanique des Fluides : Statique, Euler & Navier-Stokes',
    matiere: 'Physique',
    filieres: ['PC', 'PSI', 'MP'],
    annee: '2ème année',
    description: 'Description eulérienne, dérivée particulaire, équation de continuité, fluide parfait (Euler & Bernoulli), fluide visqueux newtonien (Navier-Stokes) et nombre de Reynolds.',
    readTime: '26 min',
    prerequis: ['Analyse vectorielle', 'Lois de Newton', 'Thermodynamique'],
    keyTheorems: [
      {
        name: 'Équation Fondamentale de Navier-Stokes (Fluide Incompressible)',
        statement: 'Pour un fluide newtonien de masse volumique $\\rho$ constante et de viscosité dynamique $\\eta$ sous l\'effet de la gravité $\\vec{g}$ :\n$$\\rho \\left( \\frac{\\partial \\vec{v}}{\\partial t} + (\\vec{v} \\cdot \\vec{\\nabla})\\vec{v} \\right) = -\\vec{\\nabla} P + \\rho \\vec{g} + \\eta \\Delta \\vec{v}$$',
        astuceConcours: 'L\'adimensionnement fait apparaître le nombre de Reynolds $Re = \\frac{\\rho v L}{\\eta}$. Si $Re \\ll 1$, le terme convectif $(\\vec{v}\\cdot\\vec{\\nabla})\\vec{v}$ est négligeable (écoulement rampant de Stokes). Si $Re \\gg 1$, la viscosité est négligeable hors couche limite (fluide parfait d\'Euler).'
      },
      {
        name: 'Théorème de Bernoulli pour un Fluide Parfait',
        statement: 'Pour un écoulement stationnaire, incompressible et non visqueux le long d\'une ligne de courant :\n$$P + \\frac{1}{2}\\rho v^2 + \\rho g z = \\mathrm{cste}$$',
        astuceConcours: 'Base absolue du tube de Pitot, de la formule de Torricelli et de la portance aérodynamique.'
      }
    ],
    sections: [
      {
        title: '1. Équation de conservation de la masse',
        content: 'Forme locale : $\\frac{\\partial \\rho}{\\partial t} + \\mathrm{div}(\\rho \\vec{v}) = 0$. Pour un écoulement incompressible, $\\mathrm{div}\\,\\vec{v} = 0$, ce qui implique la conservation du débit volumique $D_v = S v = \\mathrm{cste}$.'
      }
    ],
    piegesClassiques: [
      'Appliquer le théorème de Bernoulli à travers une pompe ou une turbine (il y a échange d\'énergie externe !).',
      'Oublier la condition d\'adhérence à la paroi pour un fluide visqueux : $\\vec{v}_{fluide} = \\vec{v}_{paroi}$.'
    ]
  },
  {
    id: 'physique-quantique',
    slug: 'physique-quantique-schrodinger',
    title: 'Physique Quantique : Onde de Matière & Équation de Schrödinger',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '2ème année',
    description: 'Dualité onde-corpuscule de De Broglie, fonction d\'onde et densité de probabilité, équation de Schrödinger 1D stationnaire, puits de potentiel et effet tunnel.',
    readTime: '23 min',
    prerequis: ['Ondes progressives', 'Équations différentielles', 'Probabilités'],
    keyTheorems: [
      {
        name: 'Équation de Schrödinger 1D Stationnaire',
        statement: 'Pour une particule de masse $m$ dans un potentiel indépendant du temps $V(x)$, les états stationnaires d\'énergie $E$ vérifient :\n$$-\\frac{\\hbar^2}{2m} \\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d}x^2} + V(x) \\psi(x) = E \\psi(x)$$',
        astuceConcours: 'La fonction d\'onde $\\psi$ et sa dérivée $\\psi\'$ doivent être continues en tout point où le potentiel $V(x)$ ne présente pas de singularité infinie.'
      },
      {
        name: 'Quantification de l\'énergie dans un Puits Infini',
        statement: 'Dans un puits de largeur $L$ ($V=0$ sur $[0, L]$ et $+\\infty$ ailleurs), les énergies permises sont strictement discrètes :\n$$E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2 m L^2} = n^2 E_1, \\quad n \\in \\mathbb{N}^*$$',
        astuceConcours: 'L\'état fondamental ($n=1$) a une énergie non nulle $E_1 > 0$, conséquence directe de l\'inégalité d\'Heisenberg $\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}$.'
      }
    ],
    sections: [
      {
        title: '1. Effet tunnel quantique',
        content: 'Lorsqu\'une particule d\'énergie $E$ rencontre une barrière de potentiel de hauteur $V_0 > E$, la solution dans la barrière est une exponentielle décroissante $\\psi(x) \\propto e^{-\\kappa x}$ avec $\\kappa = \\sqrt{\\frac{2m(V_0 - E)}{\\hbar^2}}$. La probabilité de transmission n\'est pas nulle : c\'est le principe du microscope à effet tunnel (STM) et de la radioactivité $\\alpha$.'
      }
    ],
    piegesClassiques: [
      'Penser que la fonction d\'onde $\\psi$ est directement mesurable (seule la densité de probabilité $\\rho(x) = |\\psi(x)|^2$ a un sens physique expérimental).',
      'Oublier de normaliser la fonction d\'onde : $\\int_{-\\infty}^{+\\infty} |\\psi(x)|^2\\,\\mathrm{d}x = 1$.'
    ]
  },

  // ==========================================
  // CHIMIE
  // ==========================================
  {
    id: 'chimie-cinetique',
    slug: 'cinetique-chimique-mecanismes',
    title: 'Cinétique Chimique & Mécanismes Réactionnels',
    matiere: 'Chimie',
    filieres: ['PCSI', 'PC', 'BCPST', 'PSI', 'MP'],
    annee: '1ère & 2ème année',
    description: 'Vitesse de réaction, ordre cinétique (0, 1, 2), loi d\'Arrhenius, actes élémentaires, approximation de l\'état quasi-stationnaire (AEQS) et catalyse.',
    readTime: '22 min',
    prerequis: ['Équations différentielles d\'ordre 1', 'Tableau d\'avancement', 'Notion de concentration'],
    keyTheorems: [
      {
        name: 'Approximation de l\'État Quasi-Stationnaire (AEQS de Bodenstein)',
        statement: 'Pour un intermédiaire réactionnel $I$ très réactif et instable présent en infime quantité, sa vitesse nette de formation est quasi-nulle :\n$$\\frac{\\mathrm{d}[I]}{\\mathrm{d}t} \\approx 0 \\implies v_{\\text{apparition}}(I) = v_{\\text{disparition}}(I)$$',
        astuceConcours: 'Permet d\'exprimer la concentration de l\'intermédiaire $[I]$ en fonction uniquement des réactifs stables, et de déduire la loi de vitesse macroscopique.'
      },
      {
        name: 'Loi d\'Arrhenius & Énergie d\'activation',
        statement: 'La constante de vitesse dépend de la température selon :\n$$k(T) = A \\exp\\left(-\\frac{E_a}{R T}\\right) \\iff \\ln k = \\ln A - \\frac{E_a}{R} \\frac{1}{T}$$',
        astuceConcours: 'Le tracé de $\\ln k$ en fonction de $1/T$ est une droite dont la pente vaut $-E_a/R$.'
      }
    ],
    sections: [
      {
        title: '1. Temps de demi-réaction',
        content: 'Pour un ordre 1 : $t_{1/2} = \\frac{\\ln 2}{k}$ (indépendant de la concentration initiale). Pour un ordre 2 : $t_{1/2} = \\frac{1}{k [A]_0}$ (inversement proportionnel à $[A]_0$). Pour un ordre 0 : $t_{1/2} = \\frac{[A]_0}{2k}$.'
      }
    ],
    piegesClassiques: [
      'Affirmer que les ordres partiels sont égaux aux coefficients stœchiométriques (vrai UNIQUEMENT pour un acte élémentaire d\'après la loi de van \'t Hoff, faux pour une réaction globale !).'
    ]
  },
  {
    id: 'chimie-cristallographie',
    slug: 'cristallographie-geometrique-solides',
    title: 'Cristallographie : Structures Métalliques & Sites Interstitiels',
    matiere: 'Chimie',
    filieres: ['PCSI', 'PC', 'PSI', 'BCPST'],
    annee: '1ère année',
    description: 'Modèle des sphères dures, mailles cubique centrée (CC) et cubique à faces centrées (CFC), compacité, masse volumique, sites tétraédriques et octaédriques.',
    readTime: '20 min',
    prerequis: ['Géométrie dans l\'espace', 'Masse molaire', 'Nombre d\'Avogadro'],
    keyTheorems: [
      {
        name: 'Propriétés Fondamentales du Réseau Cubique à Faces Centrées (CFC)',
        statement: 'Dans une maille CFC d\'arête $a$ et de rayon atomique $R$ :\n1. Condition de contact sur la diagonale d\'une face : $4 R = a \\sqrt{2}$.\n2. Nombre d\'atomes en propre : $N = 8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2} = 4$.\n3. Compacité maximale : $c = \\frac{N \\times \\frac{4}{3}\\pi R^3}{a^3} = \\frac{\\pi \\sqrt{2}}{6} \\approx 0,74$.\n4. Coordinence : 12 voisins au contact.',
        astuceConcours: 'Masse volumique : $\\rho = \\frac{N M}{N_A a^3}$. Vérifiez toujours la cohérence dimensionnelle en convertissant $a$ en centimètres pour obtenir des $\\mathrm{g/cm^3}$.'
      }
    ],
    sections: [
      {
        title: '1. Habitabilité des sites interstitiels',
        content: 'Dans un réseau CFC, il y a 4 sites octaédriques (au centre de la maille et aux milieux des 12 arêtes, rayon maximal $r_O = R(\\sqrt{2}-1) \\approx 0,414 R$) et 8 sites tétraédriques (au centre des 8 petits sous-cubes, rayon maximal $r_T = R(\\sqrt{3/2}-1) \\approx 0,225 R$).'
      }
    ],
    piegesClassiques: [
      'Oublier de compter la fraction de contribution des atomes partagés (sommet = 1/8, arête = 1/4, face = 1/2, intérieur = 1).'
    ]
  },
  {
    id: 'chimie-organique-fondamentale',
    slug: 'chimie-organique-mecanismes-substitutions',
    title: 'Chimie Organique : Stéréochimie & Réactions Fondamentales',
    matiere: 'Chimie',
    filieres: ['PCSI', 'PC', 'BCPST'],
    annee: '1ère & 2ème année',
    description: 'Règles CIP, énantiomères et diastéréoisomères, substitutions nucléophiles ($S_N1$, $S_N2$), éliminations ($E1$, $E2$), alcènes et magnésiens.',
    readTime: '26 min',
    prerequis: ['Liaisons covalentes', 'Effets inductifs et mésomères', 'Électronégativité'],
    keyTheorems: [
      {
        name: 'Dichotomie $S_N1$ vs $S_N2$',
        statement: '$S_N2$ : mécanisme concerté en 1 étape, ordre global 2 ($v = k[R-X][Nu^-\\!]$), attaque dorsale avec inversion de configuration de Walden (stéréospécifique), favorisé sur substrats primaires non encombrés dans solvants polaires aprotiques.\n$S_N1$ : mécanisme en 2 étapes passant par un carbocation plan, ordre global 1 ($v = k[R-X]$), racémisation avec perte de stéréospécificité, favorisé sur substrats tertiaires dans solvants polaires protiques.',
        astuceConcours: 'Substrat primaire $\\to S_N2$ quasi certain. Substrat tertiaire $\\to S_N1$ (ou $E1$ si chauffage et base encombrée).'
      }
    ],
    sections: [
      {
        title: '1. Règle de Zaïtsev pour les éliminations',
        content: 'Lors d\'une élimination ($E1$ ou $E2$), l\'alcène majoritairement formé est l\'alcène thermodynamiquement le plus stable, c\'est-à-dire le plus substitué.'
      }
    ],
    piegesClassiques: [
      'Confondre solvant polaire protique (capable de liaisons hydrogène : eau, éthanol) et aprotique (acétone, DMSO, DMF).'
    ]
  },

  // ==========================================
  // INFORMATIQUE
  // ==========================================
  {
    id: 'info-piles-files-listes',
    slug: 'structures-donnees-lineaires-piles-files',
    title: 'Structures de Données Linéaires : Piles, Files & Listes Chaînées',
    matiere: 'Informatique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI'],
    annee: '1ère année',
    description: 'Types abstraits de données, pile (LIFO), file (FIFO), implémentation avec `deque`, listes simplement et doublement chaînées, complexités mémoires et temporelles.',
    readTime: '22 min',
    prerequis: ['Bases de Python', 'Objets et références', 'Complexité'],
    keyTheorems: [
      {
        name: 'Complexité des Opérations de Base sur les Structures Linéaires',
        statement: 'Avec une file de type `collections.deque` (double-ended queue) :\n- `append(x)` : $\\mathcal{O}(1)$\n- `popleft()` : $\\mathcal{O}(1)$\nAvec une liste Python standard `list` :\n- `append(x)` : $\\mathcal{O}(1)$ amorti\n- `pop(0)` : $\\mathcal{O}(n)$ (décalage de toute la mémoire contiguë !)',
        astuceConcours: 'Erreur éliminatoire classique : utiliser `list.pop(0)` pour un parcours BFS détruit la complexité de $\\mathcal{O}(V+E)$ à $\\mathcal{O}(V^2+E)$.'
      }
    ],
    sections: [
      {
        title: '1. Évaluation d\'expressions en notation polonaise inversée (NPI)',
        content: 'Une pile permet d\'évaluer une expression arithmétique sans parenthèses en un seul passage en temps $\\mathcal{O}(n)$ : on empile les nombres, et à chaque opérateur, on dépile deux opérandes et empile le résultat.'
      }
    ],
    piegesClassiques: [
      'Modifier la taille d\'une liste Python pendant qu\'on itère dessus avec une boucle `for`.'
    ]
  },
  {
    id: 'info-diviser-pour-regner',
    slug: 'diviser-pour-regner-master-theorem',
    title: 'Paradigme Diviser pour Régner & Master Theorem',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    description: 'Principe de subdivision, algorithmes de tri (MergeSort, QuickSort), recherche dichotomique, multiplication de Karatsuba et résolution des récurrences.',
    readTime: '24 min',
    prerequis: ['Récursivité', 'Relations de récurrence', 'Complexité asymptotique'],
    keyTheorems: [
      {
        name: 'Master Theorem (Théorème Maître des Récurrences)',
        statement: 'Pour une équation de récurrence de la forme $T(n) = a T(n/b) + \\mathcal{O}(n^d)$ avec $a \\ge 1, b > 1, d \\ge 0$ :\n1. Si $d > \\log_b(a)$ : $T(n) = \\mathcal{O}(n^d)$\n2. Si $d = \\log_b(a)$ : $T(n) = \\mathcal{O}(n^d \\log n)$\n3. Si $d < \\log_b(a)$ : $T(n) = \\mathcal{O}(n^{\\log_b a})$',
        astuceConcours: 'Pour le tri fusion (MergeSort) : $T(n) = 2 T(n/2) + \\mathcal{O}(n) \\implies a=2, b=2, d=1$, on est dans le cas $d = \\log_2(2) = 1$, donc complexité optimale $T(n) = \\mathcal{O}(n \\log n)$.'
      }
    ],
    sections: [
      {
        title: '1. Borne inférieure des tris par comparaisons',
        content: 'Tout algorithme de tri basé sur la comparaison de deux éléments nécessite au moins $\\lceil \\log_2(n!) \\rceil \\sim n \\log_2 n$ comparaisons dans le pire des cas d\'après l\'arbre de décision binaire à $n!$ feuilles.'
      }
    ],
    piegesClassiques: [
      'Oublier le cas d\'arrêt dans la récursion (provoquant un `RecursionError`).'
    ]
  },
  {
    id: 'info-sql-bases-donnees',
    slug: 'bases-donnees-relationnelles-sql',
    title: 'Bases de Données Relationnelles & Requêtes SQL',
    matiere: 'Informatique',
    filieres: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '2ème année',
    description: 'Modèle relationnel, clés primaires et étrangères, intégrité référentielle, algèbre relationnelle et requêtes SQL (`SELECT`, `JOIN`, `GROUP BY`, agrégations).',
    readTime: '20 min',
    prerequis: ['Théorie des ensembles', 'Logique booléenne'],
    keyTheorems: [
      {
        name: 'Ordre d\'Évaluation Logique d\'une Requête SQL',
        statement: 'Une requête SQL est évaluée par le SGBD dans cet ordre strict :\n1. `FROM` et `JOIN` (construction du produit cartésien / jointures)\n2. `WHERE` (filtrage ligne par ligne)\n3. `GROUP BY` (partitionnement en groupes)\n4. `HAVING` (filtrage sur les agrégats de groupes)\n5. `SELECT` (projection des colonnes et calculs)\n6. `ORDER BY` (tri final)\n7. `LIMIT`',
        astuceConcours: 'On ne peut JAMAIS utiliser un alias défini dans le `SELECT` à l\'intérieur de la clause `WHERE`, car le `WHERE` s\'exécute AVANT le `SELECT` !'
      }
    ],
    sections: [
      {
        title: '1. Différence entre WHERE et HAVING',
        content: '`WHERE` filtre les lignes individuelles avant tout regroupement. `HAVING` filtre les groupes créés par `GROUP BY` en utilisant des fonctions d\'agrégation (`COUNT`, `AVG`, `SUM`, `MAX`).'
      }
    ],
    piegesClassiques: [
      'Faire une jointure sans condition `ON` (produit cartésien de taille $|T_1| \\times |T_2|$ qui sature la mémoire).',
      'Sélectionner une colonne non agrégée dans une requête avec `GROUP BY`.'
    ]
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR (SI)
  // ==========================================
  {
    id: 'si-slci-laplace',
    slug: 'slci-transformee-laplace-fonctions-transfert',
    title: 'Modélisation des SLCI & Transformée de Laplace',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'PCSI', 'MPSI', 'MP'],
    annee: '1ère & 2ème année',
    description: 'Systèmes Linéaires Continus et Invariants, transformée de Laplace, fonction de transfert, schémas-blocs, formule de Black et réponse indicielle.',
    readTime: '25 min',
    prerequis: ['Équations différentielles', 'Calcul matriciel'],
    keyTheorems: [
      {
        name: 'Formule de Black (Boucle Fermée)',
        statement: 'Pour un système asservi à retour unitaire de chaîne directe $C(p) G(p)$ et retour $H(p)$ :\n$$H_{BF}(p) = \\frac{S(p)}{E(p)} = \\frac{C(p) G(p)}{1 + C(p) G(p) H(p)} = \\frac{FTBO(p)}{1 + FTBO(p)}$$',
        astuceConcours: 'La stabilité du système en boucle fermée dépend exclusivement des racines du dénominateur $1 + FTBO(p) = 0$.'
      },
      {
        name: 'Théorèmes des Valeurs Initiale et Finale',
        statement: 'Si les limites existent :\n$$\\lim_{t \\to 0^+} f(t) = \\lim_{p \\to +\\infty} p F(p), \\qquad \\lim_{t \\to +\\infty} f(t) = \\lim_{p \\to 0} p F(p)$$',
        astuceConcours: 'Permet de calculer immédiatement l\'erreur statique en régime permanent sans inverser la transformée de Laplace.'
      }
    ],
    sections: [
      {
        title: '1. Réponses des 1er et 2nd ordres',
        content: '1er ordre : $H(p) = \\frac{K}{1 + \\tau p}$, temps de réponse à 5% $t_{5\\%} = 3\\tau$. 2nd ordre : $H(p) = \\frac{K}{1 + \\frac{2z}{\\omega_0}p + \\frac{p^2}{\\omega_0^2}}$. Si $z < 1$, présence d\'oscillations et d\'un dépassement $D_1 = e^{-\\frac{\\pi z}{\\sqrt{1-z^2}}}$.'
      }
    ],
    piegesClassiques: [
      'Appliquer le théorème de la valeur finale à un système instable (les pôles doivent tous être à partie réelle strictement négative !).'
    ]
  },
  {
    id: 'si-stabilite-correcteurs',
    slug: 'stabilite-slci-bode-correcteurs',
    title: 'Stabilité & Synthèse des Correcteurs (P, PI, Avance de Phase)',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'PCSI', 'MP'],
    annee: '2ème année',
    description: 'Critère de Routh, marges de stabilité (phase $\\Delta \\phi$ et gain $\\Delta G$), correcteurs Proportionnel (P), Proportionnel-Intégral (PI) et à Avance de phase.',
    readTime: '24 min',
    prerequis: ['SLCI', 'Diagramme de Bode', 'Nombres complexes'],
    keyTheorems: [
      {
        name: 'Critère du Revers & Marges de Stabilité',
        statement: 'Un système asservi à retour unitaire est stable en boucle fermée si et seulement si le lieu de Nyquist de sa FTBO laisse le point critique $(-1, 0)$ sur sa gauche en le parcourant dans le sens des pulsations croissantes.\n- Marge de phase : $\\Delta \\phi = 180^\\circ + \\phi(\\omega_{0dB}) \\ge 45^\\circ$\n- Marge de gain : $\\Delta G = -G_{dB}(\\omega_{-180^\\circ}) \\ge 6\\text{ dB}$',
        astuceConcours: 'Une marge de phase $\\Delta \\phi \\approx 45^\\circ$ garantit un bon compromis entre rapidité et amortissement.'
      }
    ],
    sections: [
      {
        title: '1. Rôle des correcteurs usuels',
        content: '- Correcteur Proportionnel $C(p) = K_p$ : améliore la rapidité et diminue l\'erreur statique mais dégrade la stabilité.\n- Correcteur Proportionnel-Intégral $C(p) = K_p(1 + \\frac{1}{T_i p})$ : annule rigoureusement l\'erreur statique (précision infinie grâce au pôle en 0).\n- Correcteur à Avance de Phase $C(p) = K_p \\frac{1 + a T p}{1 + T p}$ ($a > 1$) : apporte une phase positive au voisinage de $\\omega_{0dB}$ pour remonter la marge de phase sans ralentir le système.'
      }
    ],
    piegesClassiques: [
      'Placer la pulsation d\'apport maximal de phase de l\'avance de phase $\\omega_m = 1/(T\\sqrt{a})$ trop loin de la nouvelle pulsation de coupure $\\omega_{0dB}$.'
    ]
  }
];

export const OFFICIAL_CPGE_COURSES: CourseChapter[] = [
  ...BASE_CPGE_COURSES,
  ...ADDITIONAL_CPGE_COURSES,
  ...MASSIVE_CPGE_COURSES,
  ...FINAL_OFFICIAL_CPGE_COURSES,
  ...EXTRA_OFFICIAL_CPGE_COURSES,
  ...BCPST_OFFICIAL_COURSES,
  ...NEW_OFFICIAL_CURRICULUM_COURSES,
];
