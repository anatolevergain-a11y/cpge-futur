import type { FicheReflexe } from './cpgeData';

export const MASSIVE_FICHES_REFLEXES: FicheReflexe[] = [
  {
    id: 'ref-cent-1-taylor-young-equivalents',
    titre: 'Développement Limité de Taylor-Young & Recherche d\'Équivalents',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(x_0)}{k!} (x - x_0)^k + o((x - x_0)^n)$',
    quandUtiliser: 'Levée d\'indéterminations ($0/0, \\infty - \\infty$), équivalents de suites implicites et étude locale de courbes.',
    etapesPratiques: [
      '1. Effectuer le changement de variable $h = x - x_0$ pour se ramener systématiquement au voisinage de 0.',
      '2. Fixer l\'ordre du DL : déterminer le premier ordre non nul après simplification des termes constants et linéaires.',
      '3. Pour un produit ou quotient : développer chaque terme au même ordre pertinent (attention aux termes dominants en facteur).',
      '4. Pour une composition $f(g(x))$ : vérifier impérativement que $g(x) \\to 0$ quand $x \\to x_0$.',
      '5. Conclure sur l\'équivalent : le premier terme non nul du DL fournit l\'équivalent local.'
    ],
    exempleApplication: 'Pour $f(x) = \\cos x - \\sqrt{1 - x^2}$ en 0 : $\\cos x = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$ et $\\sqrt{1-x^2} = 1 - \\frac{x^2}{2} - \\frac{x^4}{8} + o(x^4)$. La différence donne $f(x) = \\left(\\frac{1}{24} + \\frac{1}{8}\\right) x^4 + o(x^4) = \\frac{x^4}{6} + o(x^4) \\implies f(x) \\sim \\frac{x^4}{6}$.'
  },
  {
    id: 'ref-cent-2-integrale-impropre-changement-variable',
    titre: 'Changement de Variable Bijectif dans une Intégrale Impropre',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$\\int_a^b f(t)\\,\\mathrm{d}t = \\int_{\\alpha}^\\beta f(\\phi(u)) \\phi\'(u)\\,\\mathrm{d}u$ avec $\\phi$ $\\mathcal{C}^1$-difféomorphisme',
    quandUtiliser: 'Calcul d\'intégrales sur un intervalle quelconque semi-ouvert ou ouvert sans passer par les primitives élémentaires.',
    etapesPratiques: [
      '1. Vérifier que $\\phi : ]\\alpha, \\beta[ \\to ]a, b[$ est un $\\mathcal{C}^1$-difféomorphisme strictement monotone.',
      '2. Si $\\phi$ est strictement croissante : $\\lim_{u \\to \\alpha^+} \\phi(u) = a$ et $\\lim_{u \\to \\beta^-} \\phi(u) = b$.',
      '3. Remplacer $\\mathrm{d}t$ par $\\phi\'(u)\\,\\mathrm{d}u$ sans oublier le facteur dérivé.',
      '4. L\'intégrabilité de $f$ sur $]a, b[$ équivaut rigoureusement à l\'intégrabilité de $(f \\circ \\phi) \\cdot |\\phi\'|$ sur $]\\alpha, \\beta[$.'
    ],
    exempleApplication: 'Pour $I = \\int_0^{+\\infty} \\frac{\\mathrm{d}t}{(1+t^2)\\sqrt{t}}$ : poser $t = u^2$ ($\\mathcal{C}^1$-difféomorphisme de $\\mathbb{R}_+^*$ sur lui-même). $\\mathrm{d}t = 2u\\,\\mathrm{d}u$, d\'où $I = \\int_0^{+\\infty} \\frac{2u\\,\\mathrm{d}u}{(1+u^4)u} = 2\\int_0^{+\\infty} \\frac{\\mathrm{d}u}{1+u^4} = \\frac{\\pi}{\\sqrt{2}}$.'
  },
  {
    id: 'ref-cent-3-caracterisation-sequentielle-ferme-compact',
    titre: 'Caractérisation Séquentielle des Fermés et Compacts dans un EVN',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$F$ fermé $\\iff (\\forall (x_n) \\in F^\\mathbb{N}, x_n \\to x \\implies x \\in F)$ ; $K$ compact $\\iff$ Bolzano-Weierstrass',
    quandUtiliser: 'Prouver qu\'une partie est fermée ou compacte, ou qu\'un problème d\'optimisation admet une solution optimale.',
    etapesPratiques: [
      '1. Fermé : Prendre une suite $(x_n)$ d\'éléments de $F$ qui converge vers une limite $x \\in E$, puis montrer que $x \\in F$.',
      '2. Image réciproque : Utiliser $F = f^{-1}(F\')$ où $f$ est continue et $F\'$ un fermé usuel (ex: singleton $\\{0\\}$, intervalle fermé).',
      '3. Compact en dimension finie : Montrer que la partie est FERMÉE et BORNÉE.',
      '4. Compact en dimension quelconque : Extraire une sous-suite convergente de toute suite d\'éléments.'
    ],
    exempleApplication: 'Le groupe orthogonal $\\mathcal{O}_n(\\mathbb{R}) = \\{M \\in \\mathcal{M}_n(\\mathbb{R}) \\mid M^T M = I_n\\}$ est l\'image réciproque du singleton $\\{I_n\\}$ par l\'application continue $M \\mapsto M^T M$ : il est fermé. De plus $\\|M\\|_2 = 1$ donc il est borné. En dimension finie $n^2$, $\\mathcal{O}_n(\\mathbb{R})$ est compact.'
  },
  {
    id: 'ref-cent-4-exponentielle-matrice',
    titre: 'Calcul de l\'Exponentielle d\'une Matrice $\\exp(A)$',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$\\exp(A) = \\sum_{k=0}^\\infty \\frac{A^k}{k!} = P \\exp(D) P^{-1} = \\exp(D) \\exp(N)$ si $D N = N D$',
    quandUtiliser: 'Résolution des systèmes différentiels linéaires vectoriels $\\dot{X}(t) = A X(t) \\implies X(t) = \\exp(t A) X(0)$.',
    etapesPratiques: [
      '1. Si $A$ est diagonalisable : diagonaliser $A = P D P^{-1}$ avec $D = \\mathrm{diag}(\\lambda_1, \\dots, \\lambda_n)$. Alors $\\exp(A) = P \\,\\mathrm{diag}(e^{\\lambda_1}, \\dots, e^{\\lambda_n})\\, P^{-1}$.',
      '2. Si $A$ est nilpotente d\'indice $p$ : la série est finie et s\'arrête à l\'ordre $p-1$ : $\\exp(A) = I_n + A + \\frac{A^2}{2} + \\dots + \\frac{A^{p-1}}{(p-1)!}$.',
      '3. Décomposition de Dunford $A = D + N$ avec $D N = N D$ : $\\exp(A) = \\exp(D) \\cdot \\exp(N)$.',
      '4. Polynômes d\'interpolation de Lagrange : si $\\mu_A(X) = \\prod (X - \\lambda_i)$, interpoler $e^{\\lambda X}$ sur le spectre.'
    ],
    exempleApplication: 'Pour $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix} = 2 I_2 + \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = D + N$ avec $D N = N D$ et $N^2 = 0$ : $\\exp(t A) = e^{2t} I_2 (I_2 + t N) = e^{2t} \\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}$.'
  },
  {
    id: 'ref-cent-5-theoreme-central-limite',
    titre: 'Approximation Normale par le Théorème Central Limite (TCL)',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$Z_n = \\frac{\\sum_{i=1}^n X_i - n \\mu}{\\sigma \\sqrt{n}} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$',
    quandUtiliser: 'Calculs de probabilités asymptotiques, intervalles de confiance et approximation des lois binomiales ou de Poisson pour $n \\ge 30$.',
    etapesPratiques: [
      '1. Vérifier les hypothèses : variables aléatoires $(X_i)$ indépendantes et identiquement distribuées (i.i.d) admettant une variance finie $\\sigma^2 > 0$.',
      '2. Calculer l\'espérance $\\mu = E(X_1)$ et l\'écart-type $\\sigma = \\sqrt{V(X_1)}$.',
      '3. Centrer et réduire la somme $S_n = \\sum_{i=1}^n X_i$ : poser $Z_n = \\frac{S_n - n\\mu}{\\sigma\\sqrt{n}}$.',
      '4. Pour une variable discrète à valeurs entières : appliquer la correction de continuité $P(a \\le S_n \\le b) \\approx P(a - 0,5 \\le S_n^* \\le b + 0,5)$.',
      '5. Lire la table de la loi normale centrée réduite $\\Phi(z)$.'
    ],
    exempleApplication: 'Sondage : $n = 400$ tirages de Bernoulli de paramètre $p = 0,5$. $\\mu = 0,5, \\sigma = 0,5$. L\'écart-type de la moyenne empirique est $\\sigma / \\sqrt{n} = 0,5 / 20 = 0,025$. L\'intervalle de confiance à $95\\%$ est $[p - 1,96 \\times 0,025, \\; p + 1,96 \\times 0,025] = [0,451, 0,549]$.'
  },
  {
    id: 'ref-cent-6-edp-onde-d-alembert',
    titre: 'Résolution de l\'Équation de d\'Alembert 1D par Décomposition d\'Ondes',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\frac{\\partial^2 s}{\\partial x^2} - \\frac{1}{c^2} \\frac{\\partial^2 s}{\\partial t^2} = 0 \\implies s(x, t) = f(t - x/c) + g(t + x/c)$',
    quandUtiliser: 'Ondes sonores 1D, corde de Melde vibrante, ligne électrique bifilaire, onde TEM entre deux plaques.',
    etapesPratiques: [
      '1. Identifier les deux ondes progressives : onde progressive vers les $x$ croissants $f(t - x/c)$ et régressive vers les $x$ décroissants $g(t + x/c)$.',
      '2. Conditions initiales (position et vitesse à $t=0$) : Formule de d\'Alembert $s(x, t) = \\frac{1}{2}[s_0(x-ct) + s_0(x+ct)] + \\frac{1}{2c}\\int_{x-ct}^{x+ct} v_0(u)\\,\\mathrm{d}u$.',
      '3. Conditions aux limites spatiales (bords fixés, libres ou impédances) : déterminer le coefficient de réflexion en amplitude $r$.',
      '4. Si le milieu est borné aux deux extrémités : chercher les modes stationnaires $s(x, t) = X(x) T(t)$ conduisant aux fréquences harmoniques $f_n = n \\frac{c}{2L}$.'
    ],
    exempleApplication: 'Corde de Melde de longueur $L$ fixée aux deux bouts : $s(0, t) = s(L, t) = 0 \\implies \\sin(k L) = 0 \\implies k_n L = n\\pi$, d\'où la quantification des longueurs d\'onde stationnaires $\\lambda_n = \\frac{2L}{n}$.'
  },
  {
    id: 'ref-cent-7-tuyere-hugoniot-adiabatique',
    titre: 'Relation d\'Hugoniot pour l\'Écoulement Isentropique dans une Tuyère',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\frac{\\mathrm{d}v}{v} (1 - M^2) = -\\frac{\\mathrm{d}S}{S}$ avec le nombre de Mach $M = v / c$',
    quandUtiliser: 'Dimensionnement des tuyères de moteurs-fusées (tuyères de Laval), diffuseurs et écoulements compressibles.',
    etapesPratiques: [
      '1. Écrire le bilan de masse en régime stationnaire : $\\rho v S = D_m = \\mathrm{cste} \\implies \\frac{\\mathrm{d}\\rho}{\\rho} + \\frac{\\mathrm{d}v}{v} + \\frac{\\mathrm{d}S}{S} = 0$.',
      '2. Écrire la relation d\'Euler (quantité de mouvement sans viscosité) : $\\rho v \\mathrm{d}v = -\\mathrm{d}P$.',
      '3. Utiliser la compressibilité isentropique : $\\mathrm{d}P = c^2 \\mathrm{d}\\rho$ avec $c$ célérité locale du son.',
      '4. Combiner pour obtenir la relation d\'Hugoniot : pour accélérer un écoulement subsonique ($M < 1$), la tuyère doit être CONVERGENTE ($\\mathrm{d}S < 0$). Pour continuer à accélérer en supersonique ($M > 1$), elle doit devenir DIVERGENTE ($\\mathrm{d}S > 0$).'
    ],
    exempleApplication: 'Tuyère de Laval : profil convergent-divergent avec passage au col sonique $M=1$ où la section est minimale ($\\mathrm{d}S = 0$). Permet d\'éjecter les gaz de propulsion à Mach 3.'
  },
  {
    id: 'ref-cent-8-relations-passage-maxwell',
    titre: 'Poser les Relations de Passage du Champ Électromagnétique',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\vec{E}_2 - \\vec{E}_1 = \\frac{\\sigma}{\\varepsilon_0} \\vec{n}_{1\\to 2}$ ; $\\vec{B}_2 - \\vec{B}_1 = \\mu_0 (\\vec{j}_s \\wedge \\vec{n}_{1\\to 2})$',
    quandUtiliser: 'Raccordement des champs aux interfaces entre deux diélectriques ou à la surface d\'un conducteur métallique.',
    etapesPratiques: [
      '1. Choisir et dessiner le vecteur unitaire normal $\\vec{n}_{1\\to 2}$ dirigé du milieu 1 vers le milieu 2.',
      '2. Composante tangentielle de $\\vec{E}$ : TOUJOURS continue car $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ est borné : $\\vec{E}_{t2} - \\vec{E}_{t1} = \\vec{0}$.',
      '3. Composante normale de $\\vec{B}$ : TOUJOURS continue car $\\mathrm{div}\\vec{B} = 0$ : $B_{n2} - B_{n1} = 0$.',
      '4. Composante normale de $\\vec{E}$ : discontinue en présence de charges surfaciques réelles $\\sigma$ : $E_{n2} - E_{n1} = \\frac{\\sigma}{\\varepsilon_0}$.',
      '5. Composante tangentielle de $\\vec{B}$ : discontinue en présence de courants surfaciques $\\vec{j}_s$ : $\\vec{B}_{t2} - \\vec{B}_{t1} = \\mu_0 (\\vec{j}_s \\wedge \\vec{n}_{1\\to 2})$.'
    ],
    exempleApplication: 'À la surface d\'un conducteur parfait (où le champ intérieur est nul $\\vec{E}_1 = \\vec{0}, \\vec{B}_1 = \\vec{0}$) : le champ extérieur immédiat est purement normal pour $\\vec{E}$ ($\\vec{E}_2 = \\frac{\\sigma}{\\varepsilon_0} \\vec{n}$) et purement tangentiel pour $\\vec{B}$ ($\\vec{B}_2 = \\mu_0 \\vec{j}_s \\wedge \\vec{n}$).'
  },
  {
    id: 'ref-cent-9-optique-anneaux-newton',
    titre: 'Interférences par Franges d\'Égale Épaisseur (Anneaux de Newton & Coin d\'Air)',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\delta = 2 n e(x, y) \\pm \\frac{\\lambda_0}{2}$ (déphasage de $\\pi$ si réflexion sur milieu plus réfringent)',
    quandUtiliser: 'Lentille convexe posée sur une lame plane, film d\'huile sur l\'eau, bulles de savon, contrôle optique de planéité.',
    etapesPratiques: [
      '1. Évaluer l\'épaisseur locale de la lame $e(r)$ ou $e(x)$ par la géométrie (ex: lentille de rayon $R$ : $e(r) \\approx \\frac{r^2}{2R}$).',
      '2. Compter les réflexions : si une seule des deux ondes subit une réflexion sur un milieu d\'indice plus élevé, ajouter un saut de phase de $\\pi$ (différence de marche supplémentaire de $\\lambda_0/2$).',
      '3. Condition d\'anneau brillant (interférence constructive) : $\\delta = p \\lambda_0$.',
      '4. Condition d\'anneau sombre (interférence destructive) : $\\delta = (p + 1/2) \\lambda_0$.',
      '5. Exprimer le rayon des anneaux sombres : $r_p = \\sqrt{p \\lambda_0 R}$. Le centre ($r=0$) est un point sombre !'
    ],
    exempleApplication: 'Anneaux de Newton : au centre de contact $e=0$, la différence de marche est uniquement due au saut de phase $\\delta = \\lambda_0/2$ : la tache centrale est rigoureusement NOIRE.'
  },
  {
    id: 'ref-cent-10-meca-quantique-paquet-ondes-heisenberg',
    titre: 'Paquet d\'Ondes & Inégalités d\'Indétermination d\'Heisenberg',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}$ et $\\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}$',
    quandUtiliser: 'Estimation d\'énergies de l\'état fondamental (atome d\'hydrogène, oscillateur harmonique) et largeur de raie spectrale.',
    etapesPratiques: [
      '1. Confinement spatial : Si une particule est confinée dans une région de dimension typique $a$, poser l\'incertitude spatiale $\\Delta x \\approx a$.',
      '2. Incertitude sur l\'impulsion : Déduire l\'impulsion minimale $p_{min} \\approx \\Delta p \\approx \\frac{\\hbar}{a}$.',
      '3. Énergie cinétique de confinement : Exprimer $E_c \\approx \\frac{p_{min}^2}{2m} \\approx \\frac{\\hbar^2}{2m a^2}$.',
      '4. Énergie totale et minimisation : Écrire $E(a) = E_c(a) + E_p(a)$ et chercher le minimum par rapport à $a$ en annulant la dérivée $\\frac{\\mathrm{d}E}{\\mathrm{d}a} = 0$.'
    ],
    exempleApplication: 'Rayon de Bohr de l\'atome d\'hydrogène : $E(r) = \\frac{\\hbar^2}{2m r^2} - \\frac{e^2}{4\\pi\\varepsilon_0 r}$. En annulant la dérivée : $-\\frac{\\hbar^2}{m r^3} + \\frac{e^2}{4\\pi\\varepsilon_0 r^2} = 0 \\implies r_0 = \\frac{4\\pi\\varepsilon_0 \\hbar^2}{m e^2} \\approx 0,53\\text{ Å}$.'
  },
  {
    id: 'ref-cent-11-le-chatelier-deplacement-equilibre',
    titre: 'Appliquer le Principe de Modération de Le Chatelier',
    matiere: 'Chimie',
    formuleOuTheoreme: 'Loi de van \'t Hoff : $\\frac{\\mathrm{d}\\ln K^\\circ}{\\mathrm{d}T} = \\frac{\\Delta_r H^\\circ}{R T^2}$ ; Quotient de réaction $Q_r$',
    quandUtiliser: 'Prédire l\'effet d\'une variation de température, pression totale, volume ou ajout d\'un constituant sur un équilibre chimique.',
    etapesPratiques: [
      '1. Effet de la température : Si la réaction est endothermique ($\\Delta_r H^\\circ > 0$), une élévation de température déplace l\'équilibre dans le sens direct. Si elle est exothermique, elle favorise le sens inverse.',
      '2. Effet de la pression à $T$ constante : Évaluer la variation du nombre de moles de gaz $\\Delta \\nu_g = \\sum \\nu_{gaz, produits} - \\sum \\nu_{gaz, reactifs}$. Une hausse de pression déplace l\'équilibre dans le sens qui diminue la quantité de gaz (sens où $\\Delta \\nu_g < 0$).',
      '3. Ajout d\'un gaz inerte à pression constante : Augmente le volume total, donc diminue les pressions partielles : favorise le sens créateur de gaz.',
      '4. Ajout d\'un réactif à volume constant : Augmente son activité, déplace l\'équilibre dans le sens qui consomme ce réactif.'
    ],
    exempleApplication: 'Synthèse de l\'ammoniac $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$ ($\\Delta_r H^\\circ = -92\\text{ kJ/mol}$, $\\Delta \\nu_g = 2 - 4 = -2$) : pour maximiser le rendement, il faut travailler à TRÈS HAUTE PRESSION ($200$ bars) et à température modérée.'
  },
  {
    id: 'ref-cent-12-tafel-surpotentielles-cinetique',
    titre: 'Loi de Butler-Volmer & Droites de Tafel en Électrochimie',
    matiere: 'Chimie',
    formuleOuTheoreme: 'Loi de Tafel pour forte surtension anodique : $\\eta = a + b \\log j$',
    quandUtiliser: 'Détermination du courant de corrosion $I_{corr}$ et des coefficients de transfert de charge lors de l\'électrolyse.',
    etapesPratiques: [
      '1. Définir la surtension d\'électrode : $\\eta = E - E_{eq}$.',
      '2. Écrire la loi générale de Butler-Volmer : $j = j_0 \\left[ \\exp\\left(\\frac{\\alpha n F}{R T}\\eta\\right) - \\exp\\left(-\\frac{(1-\\alpha)n F}{R T}\\eta\\right) \\right]$.',
      '3. Pour une forte surtension anodique ($\\eta > 100$ mV) : négliger le terme cathodique régressif.',
      '4. Passer au logarithme décimal : $\\eta = -\\frac{2,3 R T}{\\alpha n F} \\log j_0 + \\frac{2,3 R T}{\\alpha n F} \\log j$.',
      '5. Tracer $\\eta = f(\\log j)$ : la pente de Tafel donne le coefficient de transfert anodique $\\alpha$ et l\'ordonnée donne la densité de courant d\'échange $j_0$.'
    ],
    exempleApplication: 'Dégagement de $H_2$ sur platine vs mercure : sur platine, $j_0 \\approx 10^{-3}\\text{ A/cm}^2$ (système rapide, quasi sans surtension) ; sur mercure, $j_0 \\approx 10^{-12}\\text{ A/cm}^2$ (système très lent, forte surtension de plus de 1 V qui bloque le dégagement parasite).'
  },
  {
    id: 'ref-cent-13-dismutation-pourbaix',
    titre: 'Identifier une Dismutation ou Médiamutation sur un Diagramme E-pH',
    matiere: 'Chimie',
    formuleOuTheoreme: 'Règle du gamma : l\'oxydant du couple le plus haut oxyde le réducteur du couple le plus bas',
    quandUtiliser: 'Stabilité thermodynamique des espèces à degré d\'oxydation intermédiaire (cuivre(I), chlore, peroxyde d\'hydrogène).',
    etapesPratiques: [
      '1. Repérer le degré d\'oxydation intermédiaire : espèce présente entre un degré plus oxydé et un degré plus réduit.',
      '2. Si son domaine de prédominance n\'existe pas (le couple du dessus est au-dessus du couple du dessous) : l\'espèce est instable et subit une dismutation spontanée.',
      '3. Écrire la réaction de dismutation : $2 Red_1 \\to Ox_1 + Red_2$.',
      '4. Médiamutation : réaction inverse où une espèce très oxydée et une espèce très réduite réagissent ensemble pour donner l\'espèce intermédiaire stable.'
    ],
    exempleApplication: 'Ions cuivre(I) $Cu^+$ en solution aqueuse : $E^\\circ(Cu^+/Cu) = +0,52$ V et $E^\\circ(Cu^{2+}/Cu^+) = +0,16$ V. Comme $0,52 > 0,16$, l\'oxydant $Cu^+$ oxyde le réducteur $Cu^+$ : $2 Cu^+ \\to Cu^{2+} + Cu(s)$ (dismutation quantitative immédiate).'
  },
  {
    id: 'ref-cent-14-newman-stereoselection',
    titre: 'Représentation de Newman & Élimination E2 Stéréospécifique',
    matiere: 'Chimie',
    formuleOuTheoreme: 'Conformation anti-périplanaire obligatoire dans le mécanisme $E2$ concerté',
    quandUtiliser: 'Détermination de la configuration $(E)$ ou $(Z)$ de l\'alcène produit lors d\'une élimination bimoléculaire.',
    etapesPratiques: [
      '1. Regarder la molécule le long de la liaison carbone-carbone $C_\\alpha - C_\\beta$ portant le groupe partant $X$ et le proton $H$.',
      '2. Tourner autour de la liaison simple pour placer le groupe partant $X$ et le proton arraché $H$ en position rigoureusement ANTI-PÉRIPLANAIRE (angle dièdre de $180^\\circ$).',
      '3. Repérer les positions respectives des deux substituants restants sur chaque carbone (à droite / à gauche dans Newman).',
      '4. Rabattre la double liaison dans le plan : les groupes situés du même côté dans Newman se retrouvent du même côté de la double liaison dans l\'alcène.'
    ],
    exempleApplication: 'Traitement du $(2R, 3R)$-2-bromo-3-phénylbutane par une base forte : la conformation anti-périplanaire impose que le méthyle et le phényle soient du même côté : formation exclusive de l\'alcène $(Z)$.'
  },
  {
    id: 'ref-cent-15-torseur-cohesion-methode-coupure',
    titre: 'Calculer le Torseur de Cohésion par la Méthode de la Coupure Fictive',
    matiere: 'Sciences de l\'Ingénieur',
    formuleOuTheoreme: '$\\{T_{coh}(x)\\} = -\\{T_{ext \\to gauche}\\} = +\\{T_{ext \\to droite}\\}$',
    quandUtiliser: 'Tracé des diagrammes d\'effort tranchant $T(x)$ et de moment fléchissant $M_f(x)$ dans une poutre en RDM.',
    etapesPratiques: [
      '1. Résoudre d\'abord l\'équilibre global de la poutre par le PFS pour déterminer les actions aux appuis (réactions d\'appuis).',
      '2. Découper la poutre en tronçons entre chaque point d\'application d\'une force ponctuelle ou discontinuité de charge répartie.',
      '3. Faire une coupure fictive à l\'abscisse $x$ et choisir le côté le plus simple (gauche ou droite).',
      '4. Calculer la résultante et le moment en $G(x)$ : $\\{T_{coh}\\} = -\\sum \\{T_{ext\\to gauche}\\}$.',
      '5. Vérifier la relation différentielle fondamentale : $\\frac{\\mathrm{d}M_f}{\\mathrm{d}x} = -T(x)$ et $\\frac{\\mathrm{d}T}{\\mathrm{d}x} = q(x)$.'
    ],
    exempleApplication: 'Poutre sur deux appuis simples de portée $L$ avec charge ponctuelle centrale $F$ en $L/2$ : les réactions valent $F/2$. Pour $x < L/2$, $T(x) = +F/2$ et $M_f(x) = \\frac{F}{2} x$. Pour $x > L/2$, $T(x) = -F/2$ et $M_f(x) = \\frac{F}{2}(L-x)$. Moment fléchissant maximal au centre : $M_{max} = \\frac{F L}{4}$.'
  },
  {
    id: 'ref-cent-16-critere-routh-hurwitz',
    titre: 'Établir la Table de Routh pour la Stabilité d\'un Polynôme Caractéristique',
    matiere: 'Sciences de l\'Ingénieur',
    formuleOuTheoreme: 'Polynôme stable $\\iff$ tous les coefficients de la première colonne de Routh sont de même signe',
    quandUtiliser: 'Vérification de la stabilité asymptotique d\'un système asservi en boucle fermée sans calculer les racines de $D(p)$.',
    etapesPratiques: [
      '1. Écrire le dénominateur de la FTBF : $D(p) = a_n p^n + a_{n-1} p^{n-1} + \\dots + a_0$.',
      '2. Condition nécessaire préliminaire (Stodola) : tous les coefficients $a_i$ doivent être strictement du même signe et non nuls.',
      '3. Remplir les deux premières lignes du tableau avec les coefficients d\'indices pairs et impairs.',
      '4. Calculer les lignes suivantes par déterminant croisé : $c_1 = \\frac{b_1 a_2 - a_1 b_2}{b_1}$.',
      '5. Examiner la première colonne : le système est stable si et seulement si tous les termes sont strictement positifs. Le nombre de changements de signe égale le nombre de pôles instables.'
    ],
    exempleApplication: 'Pour $D(p) = p^3 + 2 p^2 + p + K$ : Ligne 1 : $[1, 1]$. Ligne 2 : $[2, K]$. Ligne 3 : $[\\frac{2 \\times 1 - 1 \\times K}{2}] = [\\frac{2-K}{2}]$. Ligne 4 : $[K]$. La stabilité requiert $K > 0$ et $2 - K > 0$, soit $0 < K < 2$.'
  },
  {
    id: 'ref-cent-17-avance-phase-reglage',
    titre: 'Dimensionner un Correcteur à Avance de Phase',
    matiere: 'Sciences de l\'Ingénieur',
    formuleOuTheoreme: '$C(p) = \\frac{1 + a T p}{1 + T p}$ avec $a > 1$, apport maximal $\\sin \\phi_m = \\frac{a - 1}{a + 1}$ à $\\omega_m = \\frac{1}{T \\sqrt{a}}$',
    quandUtiliser: 'Augmenter la marge de phase $M_\\phi$ pour assurer la stabilité et l\'amortissement d\'un SLCI sans ralentir le système.',
    etapesPratiques: [
      '1. Mesurer la marge de phase actuelle $M_{\\phi, initial}$ de la FTBO non corrigée.',
      '2. Déterminer la phase à apporter : $\\phi_m = M_{\\phi, visee} - M_{\\phi, initial} + 5^\\circ$ (en prévoyant $5^\\circ$ de sécurité pour le décalage de coupure).',
      '3. Calculer le paramètre $a$ : $a = \\frac{1 + \\sin \\phi_m}{1 - \\sin \\phi_m}$.',
      '4. Trouver la nouvelle pulsation de coupure $\\omega_{0dB}$ : c\'est la pulsation où le gain de la FTBO initiale vaut exactement $-10 \\log_{10}(a)$ dB.',
      '5. Régler $\\omega_m = \\omega_{0dB}$, puis calculer la constante de temps $T = \\frac{1}{\\omega_m \\sqrt{a}}$.'
    ],
    exempleApplication: 'Pour apporter $\\phi_m = 45^\\circ$ : $\\sin(45^\\circ) = \\frac{\\sqrt{2}}{2} \\approx 0,707 \\implies a = \\frac{1,707}{0,293} \\approx 5,83$. Gain à compenser : $+10\\log_{10}(5,83) \\approx +7,7$ dB. On place $\\omega_m$ à la pulsation où la FTBO initiale vaut $-7,7$ dB.'
  },
  {
    id: 'ref-cent-18-complexite-arbres-decision',
    titre: 'Borne Inférieure de Complexité des Tris Comparatifs $\\Omega(n \\log n)$',
    matiere: 'Informatique',
    formuleOuTheoreme: 'Tout algorithme de tri par comparaisons effectue au moins $\\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)$ comparaisons',
    quandUtiliser: 'Démontrer l\'optimalité asymptotique d\'un algorithme de tri (tri fusion, tri par tas) dans le modèle de comparaison.',
    etapesPratiques: [
      '1. Modéliser l\'exécution par un arbre binaire de décision où chaque nœud interne est une comparaison $x_i < x_j$.',
      '2. Dénombrer le nombre de permutations possibles d\'un tableau de taille $n$ : il y a exactement $n!$ ordres possibles.',
      '3. Relier le nombre de feuilles $L$ à la hauteur $h$ de l\'arbre binaire : $L \\le 2^h$.',
      '4. Comme chaque permutation doit correspondre à au moins une feuille distincte : $n! \\le 2^h \\implies h \\ge \\log_2(n!)$.',
      '5. Appliquer la formule de Stirling $\\ln(n!) = n \\ln n - n + \\mathcal{O}(\\log n)$ pour conclure $h = \\Omega(n \\log n)$.'
    ],
    exempleApplication: 'Prouve formellement qu\'il est impossible d\'inventer un tri général par comparaison en temps $\\mathcal{O}(n)$ : les seuls tris linéaires (tri par dénombrement, tri radix) exigent des hypothèses fortes sur les clés entières.'
  },
  {
    id: 'ref-cent-19-dijkstra-vs-bellman-ford',
    titre: 'Choisir entre Dijkstra, Bellman-Ford et Floyd-Warshall',
    matiere: 'Informatique',
    formuleOuTheoreme: 'Dijkstra : $\\mathcal{O}((V+E)\\log V)$ (poids $\\ge 0$) ; Bellman-Ford : $\\mathcal{O}(V E)$ ; Floyd-Warshall : $\\mathcal{O}(V^3)$',
    quandUtiliser: 'Résolution de problèmes de plus courts chemins dans les graphes orientés pondérés.',
    etapesPratiques: [
      '1. Vérifier le signe des poids des arêtes : si TOUS les poids sont strictement positifs $\\ge 0$, utiliser DIJKSTRA avec tas (optimal).',
      '2. Si des arêtes ont des poids négatifs et que l\'on cherche les chemins depuis une unique source : utiliser BELLMAN-FORD (détecte aussi les cycles absorbants négatifs).',
      '3. Si on recherche les distances entre TOUS les couples de sommets $(u, v)$ : utiliser FLOYD-WARSHALL (programmation dynamique en 4 lignes de code).',
      '4. Si le graphe est non pondéré : utiliser un simple PARCOURS EN LARGEUR (BFS) en temps linéaire $\\mathcal{O}(V + E)$.'
    ],
    exempleApplication: 'Routage Internet IP (OSPF) : utilise l\'algorithme de Dijkstra car les métriques de bande passante sont toujours strictement positives. Routage RIP (vecteur de distance) : utilise le principe de Bellman-Ford.'
  },
  {
    id: 'ref-cent-20-sql-jointures-null-anti-jointure',
    titre: 'Écrire une Anti-Jointure en SQL avec `LEFT JOIN ... WHERE ... IS NULL`',
    matiere: 'Informatique',
    formuleOuTheoreme: '`SELECT A.* FROM A LEFT JOIN B ON A.id = B.a_id WHERE B.a_id IS NULL;`',
    quandUtiliser: 'Trouver tous les enregistrements d\'une table A qui ne possèdent AUCUNE correspondance dans la table B (ex: étudiants sans aucune note, clients sans commande).',
    etapesPratiques: [
      '1. Utiliser un `LEFT JOIN` (jointure externe gauche) qui conserve toutes les lignes de la table de gauche même sans correspondance.',
      '2. Définir la condition de jointure dans la clause `ON A.id = B.foreign_id`.',
      '3. Pour les lignes de A sans correspondance dans B, toutes les colonnes de B sont remplies avec la valeur spéciale `NULL`.',
      '4. Filtrer avec la clause `WHERE B.foreign_id IS NULL` pour ne garder que les orphelins.',
      '5. Plus efficace et robuste qu\'une sous-requête `WHERE A.id NOT IN (SELECT ...)` qui échoue si la sous-requête contient un seul NULL.'
    ],
    exempleApplication: 'Trouver les candidats inscrits qui n\'ont passé aucune épreuve : `SELECT C.nom, C.numero FROM Candidat C LEFT JOIN Epreuve E ON C.id = E.id_candidat WHERE E.id_candidat IS NULL;`.'
  }
];
