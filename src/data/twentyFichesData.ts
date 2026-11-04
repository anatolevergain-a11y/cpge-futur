import type { FicheReflexe } from './cpgeData';

export const TWENTY_FICHES_REFLEXES: FicheReflexe[] = [
  {
    id: 'ref-vingt-1-formule-leibniz-produit',
    titre: 'Dériver $n$ fois un Produit avec la Formule de Leibniz',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$(u \\cdot v)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} u^{(k)} v^{(n-k)}$',
    quandUtiliser: 'Calcul de dérivées $n$-ièmes de fonctions comme $x^p e^x$, $x^2 \\sin x$, polynômes d\'Hermite ou de Legendre $L_n(x) = \\frac{\\mathrm{d}^n}{\\mathrm{d}x^n}(x^2-1)^n$.',
    etapesPratiques: [
      '1. Vérifier que $u$ et $v$ sont de classe $\\mathcal{C}^n$ sur l\'intervalle.',
      '2. Identifier le facteur polynomial ou simplificateur et le poser comme $v$ de sorte que ses dérivées s\'annulent rapidement : $v^{(k)} = 0$ pour $k > \\deg(v)$.',
      '3. La somme finie de $n+1$ termes se réduit alors à seulement 2 ou 3 termes non nuls.',
      '4. Factoriser l\'exponentielle ou le terme commun pour une expression propre.'
    ],
    exempleApplication: 'Pour $f(x) = x^2 e^{2x}$ : poser $u(x) = e^{2x}$ ($u^{(k)} = 2^k e^{2x}$) et $v(x) = x^2$ ($v\' = 2x, v\'\' = 2, v^{(k)} = 0$ pour $k \\ge 3$). Alors $f^{(n)}(x) = 2^n x^2 e^{2x} + n 2^{n-1} (2x) e^{2x} + \\frac{n(n-1)}{2} 2^{n-2} (2) e^{2x} = 2^{n-2} e^{2x} [4x^2 + 4nx + n(n-1)]$.'
  },
  {
    id: 'ref-vingt-2-dalembert-cauchy-rayon-convergence',
    titre: 'Déterminer le Rayon de Convergence d\'une Série Entière $\\sum a_n z^n$',
    matiere: 'Mathématiques',
    formuleOuTheoreme: 'Règle de d\'Alembert : $\\lim_{n \\to +\\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = L \\implies R = \\frac{1}{L}$ (avec convention $1/0 = +\\infty, 1/\\infty = 0$)',
    quandUtiliser: 'Recherche systématique du domaine de validité d\'une série entière $\\sum a_n z^n$.',
    etapesPratiques: [
      '1. Isoler le coefficient $a_n$ devant $z^n$. Si la variable apparaît comme $z^{2n}$ ou $z^{2n+1}$, poser $u = z^2$ et trouver le rayon $R_u$, puis $R_z = \\sqrt{R_u}$.',
      '2. Calculer le quotient $\\left| \\frac{a_{n+1}}{a_n} \\right|$ et simplifier factorielles, puissances et polynômes.',
      '3. Prendre la limite $L$ quand $n \\to +\\infty$. Le rayon de convergence est $R = 1/L$.',
      '4. Attention : tester la convergence sur le cercle frontière $|z| = R$ séparément !'
    ],
    exempleApplication: 'Pour $\\sum \\frac{n!}{n^n} z^n$ : $\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\frac{n^n}{n!} = \\left( \\frac{n}{n+1} \\right)^n = \\left( 1 + \\frac{1}{n} \\right)^{-n} \\to e^{-1}$. Donc $R = \\frac{1}{e^{-1}} = e$.'
  },
  {
    id: 'ref-vingt-3-caracterisation-projecteurs',
    titre: 'Exploiter un Projecteur : $p^2 = p$ et Décomposition en Somme Directe',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$p^2 = p \\iff E = \\ker(p) \\oplus \\mathrm{Im}(p) \\quad \\text{avec } \\mathrm{Im}(p) = \\ker(p - \\mathrm{id})$',
    quandUtiliser: 'Dès qu\'un endomorphisme vérifie une relation quadratique $p^2 = p$ ou une symétrie $s^2 = \\mathrm{id}$.',
    etapesPratiques: [
      '1. Décomposition d\'un vecteur $x \\in E$ : poser $x = (x - p(x)) + p(x)$.',
      '2. Vérifier que $p(x) \\in \\mathrm{Im}(p)$ et $x - p(x) \\in \\ker(p)$ car $p(x - p(x)) = p(x) - p^2(x) = 0$.',
      '3. Montrer que l\'intersection est nulle : si $y \\in \\ker(p) \\cap \\mathrm{Im}(p)$, $y = p(z)$ et $p(y) = 0 \\implies p^2(z) = 0 \\implies p(z) = y = 0$.',
      '4. Pour la trace : $\\mathrm{Tr}(p) = \\mathrm{rg}(p) = \\dim(\\mathrm{Im}(p))$.'
    ],
    exempleApplication: 'Si $s$ est une symétrie ($s^2 = \\mathrm{id}$), alors $p = \\frac{\\mathrm{id} + s}{2}$ est le projecteur sur l\'espace des vecteurs invariants $\\ker(s-\\mathrm{id})$ parallèlement à $\\ker(s+\\mathrm{id})$.'
  },
  {
    id: 'ref-vingt-4-systeme-differentiel-matriciel',
    titre: 'Résoudre un Système Différentiel Linéaire $X\'(t) = A X(t)$',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$X(t) = \\exp(t A) X(0)$ ou $X(t) = P \\mathrm{diag}(e^{\\lambda_1 t}, \\dots, e^{\\lambda_n t}) P^{-1} X(0)$ si $A$ est diagonalisable',
    quandUtiliser: 'Systèmes couplés d\'équations différentielles linéaires à coefficients constants.',
    etapesPratiques: [
      '1. Écrire le système sous forme matricielle $X\' = A X$.',
      '2. Calculer le polynôme caractéristique $\\chi_A(X) = \\det(A - X I)$ et déterminer les valeurs propres.',
      '3. Si $A$ est diagonalisable ($A = P D P^{-1}$), la solution générale s\'écrit $X(t) = P \\exp(t D) P^{-1} X_0 = \\sum_{k=1}^n c_k e^{\\lambda_k t} V_k$ où les $V_k$ sont les vecteurs propres.',
      '4. Si $A$ n\'est pas diagonalisable, trigonaliser ou décomposer $A = D + N$ avec $D N = N D$ et $N$ nilpotente.'
    ],
    exempleApplication: 'Oscillateurs mécaniques ou électriques couplés : le passage en base modale (modes propres) découple intégralement le système en $n$ équations scalaires indépendantes.'
  },
  {
    id: 'ref-vingt-5-fonction-generatrice-discrete',
    titre: 'Calculer Moments et Lois par la Fonction Génératrice $G_X(t) = \\mathbb{E}(t^X)$',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$G_X(t) = \\sum_{k=0}^{+\\infty} P(X = k) t^k \\implies \\mathbb{E}(X) = G\'_X(1) \\quad \\text{et} \\quad \\mathbb{V}(X) = G\'\'_X(1) + G\'_X(1) - [G\'_X(1)]^2$',
    quandUtiliser: 'Somme de variables aléatoires entières indépendantes et processus de branchement (Galton-Watson).',
    etapesPratiques: [
      '1. Si $X$ et $Y$ sont indépendantes à valeurs dans $\\mathbb{N}$, alors $G_{X+Y}(t) = G_X(t) \\cdot G_Y(t)$.',
      '2. Dériver par rapport à $t$ et évaluer en $t = 1^-$ pour obtenir l\'espérance : $\\mathbb{E}(X) = G\'_X(1)$.',
      '3. Utiliser $G\'\'_X(1) = \\mathbb{E}(X(X-1)) = \\mathbb{E}(X^2) - \\mathbb{E}(X)$ pour la variance.',
      '4. Pour trouver la loi de $X$, développer $G_X(t)$ en série entière : le coefficient de $t^k$ est $P(X=k)$.'
    ],
    exempleApplication: 'Loi binomiale $\\mathcal{B}(n, p)$ vue comme somme de $n$ Bernoulli indépendantes : $G_{Bernoulli}(t) = (1-p) + pt$, donc $G_{Binomiale}(t) = (1-p+pt)^n$. Alors $G\'(1) = n p$ et $\\mathbb{V}(X) = n p (1-p)$.'
  },
  {
    id: 'ref-vingt-6-projection-orthogonale-prehilbertien',
    titre: 'Projeter Orthogonalement un Vecteur sur un Sous-Espace de Dimension Finie',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$p_F(x) = \\sum_{i=1}^k \\frac{\\langle x, e_i \\rangle}{\\|e_i\\|^2} e_i$ si $(e_1, \\dots, e_k)$ est une base orthogonale de $F$',
    quandUtiliser: 'Calcul de la meilleure approximation au sens des moindres carrés, distance d\'un point à un sous-espace $d(x, F) = \\|x - p_F(x)\\|$.',
    etapesPratiques: [
      '1. Trouver une base orthogonale de $F$ (appliquer Gram-Schmidt si la base initiale ne l\'est pas).',
      '2. Calculer chaque coefficient de Fourier géométrique $c_i = \\frac{\\langle x, e_i \\rangle}{\\|e_i\\|^2}$.',
      '3. Sommer les contributions $p_F(x) = \\sum_{i=1}^k c_i e_i$.',
      '4. Vérifier que le vecteur d\'erreur $x - p_F(x)$ est orthogonal à chaque vecteur de base de $F$ : $\\langle x - p_F(x), e_j \\rangle = 0$.'
    ],
    exempleApplication: 'Polynôme de degré $\\le 2$ approchant au mieux $e^t$ sur $[-1, 1]$ pour le produit scalaire $L^2$ : projeter $e^t$ sur la base orthogonale des polynômes de Legendre $(1, t, t^2 - 1/3)$.'
  },
  {
    id: 'ref-vingt-7-taylor-reste-integral',
    titre: 'Majorer l\'Erreur d\'Approximation par la Formule de Taylor avec Reste Intégral',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} (x-a)^k + \\int_a^x \\frac{(x-t)^n}{n!} f^{(n+1)}(t)\\,\\mathrm{d}t$',
    quandUtiliser: 'Quand on a besoin d\'une majoration globale explicite de l\'erreur avec constante optimale (contrairement au $o((x-a)^n)$ de Taylor-Young).',
    etapesPratiques: [
      '1. Vérifier que $f$ est de classe $\\mathcal{C}^{n+1}$ sur le segment d\'extrémités $a$ et $x$.',
      '2. Majorer $|f^{(n+1)}(t)|$ par sa borne supérieure $M_{n+1} = \\sup_{t \\in [a, x]} |f^{(n+1)}(t)|$.',
      '3. Sortir $M_{n+1}$ de l\'intégrale et intégrer le monôme : $\\int_a^x \\frac{(x-t)^n}{n!}\\,\\mathrm{d}t = \\frac{|x-a|^{n+1}}{(n+1)!}$.',
      '4. Obtenir l\'inégalité de Taylor-Lagrange : $\\left| f(x) - \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} (x-a)^k \\right| \\le \\frac{M_{n+1}}{(n+1)!} |x-a|^{n+1}$.'
    ],
    exempleApplication: 'Pour $f(x) = \\sin x$ en $a=0$ à l\'ordre 1 : $|\\sin x - x| \\le \\frac{\\sup |\\sin\'\'|}{2!} x^2 = \\frac{x^2}{2}$, ou à l\'ordre 2 : $|\\sin x - x| \\le \\frac{\\sup |\\cos|}{6} |x|^3 = \\frac{|x|^3}{6}$.'
  },
  {
    id: 'ref-vingt-8-theoreme-gauss-electrostatistique',
    titre: 'Choisir la Surface de Gauss Adaptée aux Symétries Électrostatiques',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\Phi = \\oint_{S_G} \\vec{E} \\cdot \\mathrm{d}\\vec{S} = \\frac{Q_{int}}{\\varepsilon_0}$',
    quandUtiliser: 'Calcul du champ électrostatique $\\vec{E}$ créé par une distribution continue à forte symétrie (sphérique, cylindrique, plane).',
    etapesPratiques: [
      '1. Étude des invariances : déterminer les coordonnées dont dépend la norme $E$ (ex: invariance par translation selon $z$ et rotation selon $\\theta \\implies E = E(r)$).',
      '2. Étude des plans de symétrie : le champ $\\vec{E}(M)$ appartient à tout plan de symétrie passant par $M$, ce qui fixe sa direction vectorielle (ex: $\\vec{E} = E(r) \\vec{u}_r$).',
      '3. Choisir la surface fermée de Gauss $S_G$ telle que sur chaque face, soit $\\vec{E}$ est tangentiel (flux nul), soit $\\vec{E}$ est normal et de norme constante ($E \\iint \\mathrm{d}S = E \\cdot S_{face}$).',
      '4. Calculer la charge intérieure $Q_{int} = \\iiint_V \\rho\\,\\mathrm{d}V$ et égaler à $\\varepsilon_0 \\Phi$.'
    ],
    exempleApplication: 'Cylindre infini de rayon $R$ chargé en volume $\\rho$ : choisir un cylindre de Gauss coaxial de rayon $r$ et hauteur $h$. Flux sur les bases nul, flux latéral $E(r) 2\\pi r h = \\frac{Q_{int}}{\\varepsilon_0}$. Pour $r < R$, $Q_{int} = \\rho \\pi r^2 h \\implies E(r) = \\frac{\\rho r}{2 \\varepsilon_0}$.'
  },
  {
    id: 'ref-vingt-9-theoreme-ampere-magnetostatique',
    titre: 'Choisir le Contour d\'Ampère Adapté aux Symétries Magnétostatiques',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\oint_{\\mathcal{C}} \\vec{B} \\cdot \\mathrm{d}\\vec{\\ell} = \\mu_0 I_{enlace}$',
    quandUtiliser: 'Calcul du champ magnétique $\\vec{B}$ créé par des courants stationnaires à symétrie cylindrique ou plane.',
    etapesPratiques: [
      '1. Invariances : identifier les coordonnées spatiales dont dépend la norme $B$.',
      '2. Symétries : $\\vec{B}$ est orthogonal à tout plan de symétrie de la distribution de courant passant par le point $M$.',
      '3. Contour d\'Ampère $\\mathcal{C}$ : choisir une ligne de champ fermée où la norme $B$ est constante et $\\vec{B}$ partout colinéaire à $\\mathrm{d}\\vec{\\ell}$, ce qui donne $\\oint \\vec{B} \\cdot \\mathrm{d}\\vec{\\ell} = B \\cdot \\mathrm{longueur}(\\mathcal{C})$.',
      '4. Compter le courant algébrique enlacé $I_{enlace}$ en orientant le contour selon la règle du tire-bouchon de Maxwell.'
    ],
    exempleApplication: 'Solénoïde infini à $n$ spires par mètre parcouru par $I$ : contour rectangulaire de longueur $L$ à cheval sur la paroi. Côtés perpendiculaires $\\vec{B} \\cdot \\mathrm{d}\\vec{\\ell} = 0$, côté extérieur $\\vec{B} = \\vec{0}$, côté intérieur $B L = \\mu_0 (n L I) \\implies B = \\mu_0 n I$.'
  },
  {
    id: 'ref-vingt-10-vecteur-poynting-puissance',
    titre: 'Établir un Bilan Énergétique Électromagnétique par le Vecteur de Poynting',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0} \\quad \\text{et} \\quad \\frac{\\partial u_{em}}{\\partial t} + \\mathrm{div}(\\vec{\\Pi}) = -\\vec{j} \\cdot \\vec{E}$',
    quandUtiliser: 'Flux de puissance rayonnée par une onde électromagnétique, effet Joule dans un conducteur, pression de radiation.',
    etapesPratiques: [
      '1. Calculer le produit vectoriel instantané $\\vec{\\Pi}(t) = \\frac{1}{\\mu_0} \\vec{E}(t) \\wedge \\vec{B}(t)$.',
      '2. Pour une onde monochromatique en notation complexe : calculer la moyenne temporelle avec la formule $\\langle \\vec{\\Pi} \\rangle = \\frac{1}{2 \\mu_0} \\mathrm{Re}(\\underline{\\vec{E}} \\wedge \\underline{\\vec{B}}^*)$.',
      '3. Flux sortant : intégrer $\\iint_S \\langle \\vec{\\Pi} \\rangle \\cdot \\mathrm{d}\\vec{S}$ à travers la surface délimitant le système.',
      '4. Relier ce flux à la puissance absorbée ou rayonnée.'
    ],
    exempleApplication: 'Câble cylindrique coaxial transportant une tension $U$ et un courant $I$ : $\\vec{E}$ est radial et $\\vec{B}$ est orthoradial. Le vecteur de Poynting $\\vec{\\Pi}$ est strictement axial vers la charge, et son flux total à travers la section du diélectrique redonne exactement la puissance électrique $\\mathcal{P} = U \\cdot I$.'
  },
  {
    id: 'ref-vingt-11-rlc-serie-facteur-qualite',
    titre: 'Identifier Pulsation Propre $\\omega_0$ et Facteur de Qualité $Q$ d\'un Circuit RLC',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\omega_0 = \\frac{1}{\\sqrt{L C}} \\quad \\text{et} \\quad Q = \\frac{L \\omega_0}{R} = \\frac{1}{R C \\omega_0} = \\frac{1}{R} \\sqrt{\\frac{L}{C}}$',
    quandUtiliser: 'Circuits oscillants RLC, filtres passe-bande, résonance de tension ou de charge.',
    etapesPratiques: [
      '1. Écrire la loi des mailles : $L \\frac{\\mathrm{d}i}{\\mathrm{d}t} + R i + u_C = e(t)$ avec $i = C \\frac{\\mathrm{d}u_C}{\\mathrm{d}t}$.',
      '2. Mettre sous forme canonique : $\\frac{\\mathrm{d}^2 u_C}{\\mathrm{d}t^2} + \\frac{\\omega_0}{Q} \\frac{\\mathrm{d}u_C}{\\mathrm{d}t} + \\omega_0^2 u_C = \\omega_0^2 e(t)$.',
      '3. Régime libre : discriminant $\\Delta = \\omega_0^2(1/4Q^2 - 1)$ :\n   - $Q > 1/2$ : régime pseudo-périodique oscillant amorti ;\n   - $Q = 1/2$ : régime critique (retour le plus rapide à l\'équilibre sans oscillation) ;\n   - $Q < 1/2$ : régime apériodique suramorti.',
      '4. Résonance de tension aux bornes de $C$ : n\'apparaît que si $Q > 1/\\sqrt{2} \\approx 0{,}707$ à la pulsation $\\omega_r = \\omega_0 \\sqrt{1 - 1/(2Q^2)}$.'
    ],
    exempleApplication: 'Filtre audio sélectif : pour avoir une bande passante étroite $\\Delta \\omega = \\omega_0 / Q \\ll \\omega_0$, il faut maximiser $Q$ en minimisant la résistance $R$.'
  },
  {
    id: 'ref-vingt-12-conjugaison-newton-optique',
    titre: 'Utiliser la Formule de Conjugaison de Newton avec Origines aux Foyers',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\overline{FA} \\cdot \\overline{F\'A\'} = -f\'^2 \\quad \\text{et grandissement transverse } \\gamma = -\\frac{f\'}{\\overline{FA}} = -\\frac{\\overline{F\'A\'}}{f\'}$',
    quandUtiliser: 'Systèmes optiques centrés où les positions de l\'objet ou de l\'image sont repérées par rapport aux foyers $F$ et $F\'$ plutôt qu\'au centre optique $O$.',
    etapesPratiques: [
      '1. Repérer algébriquement la position de l\'objet par $\\overline{FA} = x$.',
      '2. Déduire immédiatement la position de l\'image : $\\overline{F\'A\'} = x\' = -\\frac{f\'^2}{\\overline{FA}}$.',
      '3. Le grandissement découle d\'un simple rapport sans inversion fractionnaire : $\\gamma = -\\frac{f\'}{\\overline{FA}}$.',
      '4. Remarque : pour une lentille convergente ($f\' > 0$), si l\'objet est en amont du foyer objet ($\\overline{FA} < 0$), l\'image est réelle en aval du foyer image ($\\overline{F\'A\'} > 0$) et inversée ($\\gamma < 0$).'
    ],
    exempleApplication: 'Objectif photographique : pour faire la mise au point d\'un objet à l\'infini vers un objet rapproché ($x = \\overline{FA}$ diminue en valeur absolue), le tirage de l\'objectif $\\overline{F\'A\'}$ augmente, nécessitant d\'avancer la bague vers l\'avant.'
  },
  {
    id: 'ref-vingt-13-perte-charge-darcy-weisbach',
    titre: 'Calculer les Pertes de Charge Régulières et Singulières dans une Conduite',
    matiere: 'Physique',
    formuleOuTheoreme: 'Régulière : $\\Delta P_{reg} = \\lambda \\frac{L}{D} \\frac{\\rho v^2}{2}$ ; Singulière : $\\Delta P_{sing} = K \\frac{\\rho v^2}{2}$',
    quandUtiliser: 'Dimensionnement d\'une pompe ou d\'une turbine dans un réseau hydraulique réel (théorème de Bernoulli généralisé).',
    etapesPratiques: [
      '1. Calculer le nombre de Reynolds $\\mathrm{Re} = \\frac{\\rho v D}{\\mu}$ pour déterminer le régime d\'écoulement.',
      '2. Si laminaire ($\\mathrm{Re} < 2000$) : formule de Poiseuille $\\lambda = \\frac{64}{\\mathrm{Re}}$.',
      '3. Si turbulent ($\\mathrm{Re} > 4000$) : formule de Blasius $\\lambda = 0{,}316 \\,\\mathrm{Re}^{-0{,}25}$ ou diagramme de Moody.',
      '4. Intégrer dans Bernoulli avec pompe : $P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho g z_1 + \\frac{\\mathcal{P}_{pompe}}{D_v} = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho g z_2 + \\Delta P_{pertes}$.'
    ],
    exempleApplication: 'Pompage d\'eau vers un château d\'eau : les pertes de charge augmentent comme le carré du débit ($v^2 \\propto D_v^2$), ce qui impose un diamètre de canalisation suffisant pour ne pas gaspiller la puissance motrice.'
  },
  {
    id: 'ref-vingt-14-diagramme-predominance-ph',
    titre: 'Tracer un Diagramme de Prédominance Acido-Basique et Calculer le pH Approché',
    matiere: 'Chimie',
    formuleOuTheoreme: '$\\text{pH} = pK_a + \\log\\left( \\frac{[A^-]}{[AH]} \\right)$',
    quandUtiliser: 'Calcul rapide du pH d\'un mélange ou d\'une solution tampon sans résoudre une équation polynomiale de degré 3 ou 4.',
    etapesPratiques: [
      '1. Tracer l\'axe des pH et placer les valeurs de $pK_a$.',
      '2. Délimiter les zones de prédominance : pour $\\text{pH} < pK_a$, $[AH] > [A^-]$ ; pour $\\text{pH} > pK_a$, $[A^-] > [AH]$. La frontière d\'équipartition est $\\text{pH} = pK_a$.',
      '3. Identifier la Réaction Prépondérante (RP) entre l\'acide le plus fort introduit et la base la plus forte introduite.',
      '4. Tester les approximations classiques : négliger les ions minoritaires si l\'écart de pH au $pK_a$ dépasse 1 unité ($[A^-]/[AH] > 10$).'
    ],
    exempleApplication: 'Acide éthanoïque à $0{,}1\\text{ M}$ ($pK_a = 4{,}8$) : formule de l\'acide faible $\\text{pH} = \\frac{1}{2}(pK_a - \\log c) = \\frac{1}{2}(4{,}8 - (-1)) = 2{,}9$. On vérifie que $2{,}9 < 4{,}8 - 1$, validant l\'hypothèse de faible dissociation de l\'acide.'
  },
  {
    id: 'ref-vingt-15-vitesse-initiale-differentielle-cinetique',
    titre: 'Déterminer l\'Ordre Partiel d\'une Réaction par la Méthode des Vitesses Initiales',
    matiere: 'Chimie',
    formuleOuTheoreme: '$v_0 = k [A]_0^p [B]_0^q \\implies \\ln(v_0) = \\ln(k\') + p \\ln([A]_0)$ en maintenant $[B]_0$ constant',
    quandUtiliser: 'Détermination expérimentale de la loi de vitesse lorsque la réaction présente des produits qui interfèrent ou des réactions parasites en cours d\'évolution.',
    etapesPratiques: [
      '1. Mesurer la tangente à l\'origine de la courbe de concentration $v_0 = -\\left(\\frac{\\mathrm{d}[A]}{\\mathrm{d}t}\\right)_{t=0}$.',
      '2. Réaliser plusieurs expériences en faisant varier $[A]_0$ d\'un facteur connu tout en maintenant les autres réactifs constants.',
      '3. Si en doublant $[A]_0$, $v_0$ double : ordre partiel $p = 1$. Si $v_0$ quadruple : ordre partiel $p = 2$.',
      '4. Prendre la régression linéaire de $\\ln(v_0)$ en fonction de $\\ln([A]_0)$ : la pente donne directement $p$.'
    ],
    exempleApplication: 'Cinétique enzymatique de Michaelis-Menten : à faible concentration en substrat $[S]_0 \\ll K_M$, la vitesse initiale est proportionnelle à $[S]_0$ (ordre 1) ; à saturation $[S]_0 \\gg K_M$, la vitesse plafonne à $V_{max}$ (ordre 0).'
  },
  {
    id: 'ref-vingt-16-nombre-oxydation-regles',
    titre: 'Déterminer le Nombre d\'Oxydation (n.o.) d\'un Atome dans une Molécule',
    matiere: 'Chimie',
    formuleOuTheoreme: '$\\sum n.o.(i) = q_{globale}$ de l\'entité polyatomique',
    quandUtiliser: 'Équilibrage de réactions redox complexes, attribution des degrés d\'oxydation dans un complexe ou une molécule organique.',
    etapesPratiques: [
      '1. Éléments sous forme de corps simple neutre ($O_2, H_2, Fe, C$) : $n.o. = 0$.',
      '2. Hydrogène lié à un non-métal : $n.o.(H) = +I$ (sauf hydrures métalliques $NaH$ où $-I$).',
      '3. Oxygène : $n.o.(O) = -II$ (sauf peroxydes $H_2O_2$ où $-I$ et composé fluoré $OF_2$).',
      '4. Métaux alcalins ($Li, Na, K$) : toujours $+I$ ; alcalino-terreux ($Mg, Ca$) : toujours $+II$.',
      '5. Somme des $n.o.$ égale à la charge de l\'ion : résoudre l\'équation du premier degré pour l\'atome central.'
    ],
    exempleApplication: 'Ion permanganate $MnO_4^-$ : $n.o.(Mn) + 4 \\times (-II) = -1 \\implies n.o.(Mn) = +VII$. Dans $Mn^{2+}$, $n.o. = +II$. La réduction de $MnO_4^-$ en $Mn^{2+}$ met donc en jeu $VII - II = 5$ électrons.'
  },
  {
    id: 'ref-vingt-17-organomagnesiens-conditions-synthese',
    titre: 'Réussir la Synthèse et les Réactions d\'un Organomagnésien Mixte $R-Mg-X$',
    matiere: 'Chimie',
    formuleOuTheoreme: '$R-X + Mg \\xrightarrow{\\text{éther anhydre}} R-Mg-X \\quad (\\text{caractère carbanionique } R^{\\delta-}-Mg^{\\delta+})$',
    quandUtiliser: 'Création de liaisons carbone-carbone $C-C$ par addition nucléophile sur les composés carbonylés (aldéhydes, cétones, esters).',
    etapesPratiques: [
      '1. Milieu rigoureusement anhydre et sous atmosphère inerte d\'argon : toute trace d\'eau détruit l\'organomagnésien par réaction acido-basique violente ($R-MgX + H_2O \\to R-H + HOMgX$).',
      '2. Rôle du solvant (diéthyléther ou THF) : les doublets libres des atomes d\'oxygène stabilisent le magnésium électrophile par chélation dative.',
      '3. Addition sur un carbonyle : $R^-$ attaque le carbone électrophile pour former un alcoolate magnésien intermédiaire tétraédrique.',
      '4. Hydrolyse acide douce finale en milieu tamponné ($NH_4Cl$) pour libérer l\'alcool sans déshydrater le produit.'
    ],
    exempleApplication: 'Pour synthétiser un alcool tertiaire : faire réagir un organomagnésien sur une cétone, ou deux équivalents sur un ester ($R-COOR\' + 2 R\'\'-MgX \\to R-C(OH)(R\'\')_2$).'
  },
  {
    id: 'ref-vingt-18-temps-reponse-bande-passante-si',
    titre: 'Relier Temps de Réponse à 5% et Bande Passante d\'un Système Asservi',
    matiere: 'Sciences de l\'Ingénieur',
    formuleOuTheoreme: 'Système du 1er ordre : $t_{r,5\\%} = 3 \\tau \\approx \\frac{3}{\\omega_c}$ ; Système du 2nd ordre optimal ($z = 0{,}7$) : $t_{r,5\\%} \\cdot \\omega_0 \\approx 3$',
    quandUtiliser: 'Traduction des exigences du cahier des charges entre domaine temporel (rapidité) et domaine fréquentiel (pulsation de coupure).',
    etapesPratiques: [
      '1. Pour un premier ordre de gain $K$ et constante de temps $\\tau$ : la réponse indicielle vaut $s(t) = K(1 - e^{-t/\\tau})$. Le seuil de 95% est atteint pour $1 - e^{-t/\\tau} = 0{,}95 \\implies e^{-t/\\tau} = 0{,}05 \\implies t_{r,5\\%} = -\\tau \\ln(0{,}05) \\approx 3 \\tau$.',
      '2. Pour un deuxième ordre : si $z = 0{,}707$ (amortissement optimal sans résonance et dépassement $< 5\\%$) : $t_{r,5\\%} \\approx \\frac{3}{\\omega_0}$.',
      '3. Règle d\'or de l\'ingénieur : pour diviser le temps de réponse par 2, il faut doubler la bande passante de la boucle fermée.'
    ],
    exempleApplication: 'Si un cahier des charges exige un temps de réponse $t_{r,5\\%} \\le 0{,}06\\text{ s}$, la pulsation de coupure minimale de la boucle fermée doit être $\\omega_0 \\ge \\frac{3}{0{,}06} = 50\\text{ rad/s}$.'
  },
  {
    id: 'ref-vingt-19-critere-revers-black-nyquist',
    titre: 'Vérifier la Stabilité d\'un Asservissement par le Critère du Revers',
    matiere: 'Sciences de l\'Ingénieur',
    formuleOuTheoreme: 'Le lieu de la FTBO doit laisser le point critique $(-1, 0)$ (soit $0\\text{ dB}, -180^\\circ$) sur sa gauche en le parcourant dans le sens des pulsations croissantes',
    quandUtiliser: 'Étude de la stabilité en boucle fermée d\'un système à retour unitaire stable en boucle ouverte.',
    etapesPratiques: [
      '1. Tracer le lieu de transfert de la FTBO dans le plan de Black-Nichols ou de Nyquist.',
      '2. Repérer la pulsation $\\omega_{-180^\\circ}$ où la phase vaut $-180^\\circ$ : le gain doit y être strictement négatif en dB ($G_{dB} < 0$). La marge de gain est $\\Delta G = -G_{dB}(\\omega_{-180^\\circ}) > 0$.',
      '3. Repérer la pulsation $\\omega_{0dB}$ où le gain vaut $0\\text{ dB}$ : la phase doit y être supérieure à $-180^\\circ$. La marge de phase est $\\Delta \\phi = 180^\\circ + \\phi(\\omega_{0dB}) > 0$.',
      '4. Marges recommandées pour un bon amortissement : $\\Delta \\phi \\ge 45^\\circ$ et $\\Delta G \\ge 6\\text{ dB}$.'
    ],
    exempleApplication: 'Système avec retard pur $\\tau$ : la phase chute de $-\\tau \\omega$ rad, ce qui dégrade considérablement la marge de phase et peut déstabiliser un système par ailleurs stable.'
  },
  {
    id: 'ref-vingt-20-complexite-amortie-potentiel',
    titre: 'Calculer une Complexité Amortie par la Méthode du Potentiel',
    matiere: 'Informatique',
    formuleOuTheoreme: 'Coût amorti : $\\hat{c}_i = c_i + \\Phi(S_i) - \\Phi(S_{i-1})$ avec fonction de potentiel $\\Phi(S) \\ge \\Phi(S_0)$',
    quandUtiliser: 'Analyse fine d\'algorithmes où certaines opérations coûteuses sont précédées de nombreuses opérations très bon marché (tableau dynamique redimensionnable, file avec deux piles).',
    etapesPratiques: [
      '1. Définir une fonction de potentiel $\\Phi(S) \\ge 0$ mesurant le "désordre" ou l\'énergie stockée dans la structure de données.',
      '2. Pour une opération bon marché : choisir un coût amorti légèrement supérieur au coût réel ($c_i = 1, \\hat{c}_i = 3$) pour épargner du potentiel (crédits).',
      '3. Lors de l\'opération coûteuse de réallocation (taille $n$) : la chute brutale de potentiel $\\Phi(S_i) - \\Phi(S_{i-1}) = -n$ compense exactement le coût réel $c_i = n$, donnant un coût amorti $\\hat{c}_i = \\mathcal{O}(1)$.',
      '4. Conclure que la somme des coûts réels est majorée par la somme des coûts amortis : $\\sum c_i \\le \\sum \\hat{c}_i + \\Phi(S_0) - \\Phi(S_n)$.'
    ],
    exempleApplication: 'Tableau dynamique (vecteur C++ / liste Python) avec doublement de capacité : le coût amorti de chaque `append()` est rigoureusement $\\mathcal{O}(1)$, garantissant que $n$ ajouts consécutifs s\'exécutent en temps total $\\mathcal{O}(n)$.'
  }
];
