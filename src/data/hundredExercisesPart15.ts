import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART15: ExerciseItem[] = [
  {
    id: 'exo-100-91',
    title: 'Équation de Schrödinger 1D & Oscillateur Anharmonique (Théorie des Perturbations)',
    matiere: 'Physique',
    chapitreId: 'physique-quantique',
    chapitreTitre: 'Physique quantique & Oscillateur harmonique',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'ENS BCPST / Mines-Ponts MP-PC',
    dureeEstimeeMin: 45,
    enonce: `On étudie une particule quantique de masse $m$ dans un potentiel d'oscillateur harmonique 1D perturbé par un terme quartique :
$$V(x) = \\frac{1}{2} m \\omega^2 x^2 + \\lambda x^4 \\quad (\\lambda > 0, \\text{ petit})$$

1. Rappeler l'expression des niveaux d'énergie non perturbés $E_n^{(0)}$ pour l'oscillateur harmonique non perturbé ($\\lambda = 0$).
2. À l'aide de la théorie des perturbations stationnaires au premier ordre non dégénéré, donner l'expression formelle de la correction $E_n^{(1)}$.
3. En utilisant les opérateurs d'annihilation $\\hat{a}$ et de création $\\hat{a}^\\dagger$, exprimer l'opérateur position $\\hat{x}$ et calculer la valeur moyenne $\\langle n | \\hat{x}^4 | n \\rangle$. En déduire l'énergie $E_n$ au premier ordre en $\\lambda$.`,
    hints: [
      'Poser $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$.',
      'Calculer $(\\hat{a} + \\hat{a}^\\dagger)^4$ en ne conservant que les 6 termes diagonaux comportant autant de $\\hat{a}$ que de $\\hat{a}^\\dagger$.',
      'Utiliser les relations $\\hat{a}|n\\rangle = \\sqrt{n}|n-1\\rangle$ et $\\hat{a}^\\dagger|n\\rangle = \\sqrt{n+1}|n+1\\rangle$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Niveaux non perturbés de l\'oscillateur harmonique',
          explication: 'Pour $\\lambda = 0$, le hamiltonien est $\\hat{H}_0 = \\frac{\\hat{p}^2}{2m} + \\frac{1}{2}m\\omega^2\\hat{x}^2$. Les valeurs propres sont données par la quantification standard :',
          calculs: 'E_n^{(0)} = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega, \\quad n \\in \\mathbb{N}'
        },
        {
          titre: '2. Formule de perturbation au premier ordre',
          explication: 'Pour un état propre non dégénéré $|n\\rangle$, le théorème des perturbations au premier ordre donne :',
          calculs: 'E_n^{(1)} = \\langle n | \\hat{W} | n \\rangle = \\lambda \\langle n | \\hat{x}^4 | n \\rangle'
        },
        {
          titre: '3. Calcul de la valeur moyenne par les opérateurs d\'échelle',
          explication: 'Avec $\\hat{x} = X_0 (\\hat{a} + \\hat{a}^\\dagger)$ où $X_0 = \\sqrt{\\frac{\\hbar}{2m\\omega}}$, le développement de $(\\hat{a} + \\hat{a}^\\dagger)^4$ contient $\\binom{4}{2} = 6$ arrangements diagonaux préservant le nombre de quanta. La somme de leurs espérances donne $3(2n^2 + 2n + 1)$, d\'où :',
          calculs: '\\langle n | \\hat{x}^4 | n \\rangle = \\frac{3\\hbar^2}{4 m^2 \\omega^2} (2n^2 + 2n + 1) \\implies E_n \\approx \\left(n + \\frac{1}{2}\\right)\\hbar\\omega + \\frac{3\\lambda \\hbar^2}{4 m^2 \\omega^2} (2n^2 + 2n + 1)'
        }
      ],
      conclusion: 'L\'anharmonicité quartique lève l\'équidistance des niveaux : l\'écart spectral $E_{n+1} - E_n$ augmente linéairement avec le nombre quantique $n$.',
      reflexeDuCorrecteur: 'Le calcul par opérateurs d\'échelle est infiniment plus élégant et rapide qu\'un calcul d\'intégrale gaussienne avec les polynômes d\'Hermite.'
    }
  },
  {
    id: 'exo-100-92',
    title: 'Cycle de Carnot & Entropie Statistique de Boltzmann',
    matiere: 'Physique',
    chapitreId: 'physique-thermo-statistique',
    chapitreTitre: 'Thermodynamique statistique & Moteurs thermiques',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: `1. Un moteur thermique ditherme fonctionne de manière réversible entre deux thermostats à $T_C$ et $T_F < T_C$. Démontrer l'expression du rendement de Carnot $\\eta_C = 1 - \\frac{T_F}{T_C}$.
2. On considère un gaz parfait monoatomique de $N$ particules identiques sans interaction dans un volume $V$. Le nombre de micro-états accessibles à l'énergie $E$ s'écrit $\\Omega(E, V, N) = C \\cdot V^N E^{3N/2}$. En utilisant la formule de Boltzmann $S = k_B \\ln \\Omega$, retrouver l'équation d'état des gaz parfaits et l'énergie interne $U(T)$.
3. Calculer la variation d'entropie statistique lors d'une détente de Joule-Gay-Lussac doublant le volume ($V_2 = 2V_1$). Commenter l'irréversibilité.`,
    hints: [
      'Sur un cycle réversible, $\\Delta S = \\frac{Q_C}{T_C} + \\frac{Q_F}{T_F} = 0$ et $W + Q_C + Q_F = 0$.',
      'Identifier les dérivées thermodynamiques : $\\frac{1}{T} = \\left(\\frac{\\partial S}{\\partial E}\\right)_{V, N}$ et $\\frac{P}{T} = \\left(\\frac{\\partial S}{\\partial V}\\right)_{E, N}$.',
      'Pour Joule-Gay-Lussac, le système isolé sans travail conserve l\'énergie $E$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Rendement de Carnot réversible',
          explication: 'Sur un cycle réversible : $W = -(Q_C + Q_F)$ et $\\frac{Q_C}{T_C} + \\frac{Q_F}{T_F} = 0 \\implies Q_F = - Q_C \\frac{T_F}{T_C}$. Le rendement est :',
          calculs: '\\eta = \\frac{-W}{Q_C} = 1 + \\frac{Q_F}{Q_C} = 1 - \\frac{T_F}{T_C}'
        },
        {
          titre: '2. Entropie de Boltzmann et équations d\'état',
          explication: 'L\'entropie statistique vaut $S = k_B [\\ln C + N \\ln V + \\frac{3N}{2} \\ln E]$. En dérivant par rapport à $E$ et $V$ :',
          calculs: '\\frac{1}{T} = \\left(\\frac{\\partial S}{\\partial E}\\right)_{V} = \\frac{3 N k_B}{2E} \\implies E = \\frac{3}{2} N k_B T ; \\quad \\frac{P}{T} = \\left(\\frac{\\partial S}{\\partial V}\\right)_{E} = \\frac{N k_B}{V} \\implies P V = N k_B T'
        },
        {
          titre: '3. Détente de Joule-Gay-Lussac irréversible',
          explication: 'À énergie $E$ constante, lors du doublement de volume, l\'entropie créée vaut :',
          calculs: '\\Delta S = S(2V_1) - S(V_1) = k_B N \\ln(2) = n R \\ln 2 > 0'
        }
      ],
      conclusion: 'La création d\'entropie positive traduit l\'impossibilité microscopique que $10^{23}$ molécules reviennent spontanément dans la moitié du volume initial.',
      reflexeDuCorrecteur: 'Toujours mentionner l\'égalité de Clausius et bien identifier les températures des sources.'
    }
  },
  {
    id: 'exo-100-93',
    title: 'Équilibres Acido-Basiques : Courbes de Dosage & Tracé de Gran',
    matiere: 'Chimie',
    chapitreId: 'chimie-solutions-aqueuses',
    chapitreTitre: 'Solutions aqueuses & Dosages potentiométriques',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: `On dose $V_0 = 20{,}0\\text{ mL}$ d'un acide faible $AH$ de concentration $C_0 \\approx 0{,}10\\text{ mol/L}$ par une solution de soude $(Na^+ + HO^-)$ de concentration $C_b = 0{,}100\\text{ mol/L}$.
1. Écrire la réaction de titrage et justifier son caractère quantitatif pour $pK_a \\le 9$.
2. Établir l'expression du $pH$ en fonction du volume versé $V$ pour $0 < V < V_E$. Montrer qu'à la demi-équivalence, $pH = pK_a$.
3. Lorsque le saut de $pH$ est atténué, on utilise la fonction de Gran $G(V) = V \\cdot 10^{-pH}$. Montrer que $G(V)$ est une fonction affine de $V$ s'annulant en $V = V_E$.
4. Expliquer l'avantage métrologique de cette méthode.`,
    hints: [
      'Avant l\'équivalence, $[A^-] \\approx \\frac{C_b V}{V_0 + V}$ et $[AH] \\approx \\frac{C_b (V_E - V)}{V_0 + V}$.',
      'Injecter dans $K_a = [H_3O^+] \\frac{[A^-]}{[AH]}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Réaction de titrage',
          explication: 'La réaction est $AH + HO^- \\rightleftharpoons A^- + H_2O$. Sa constante d\'équilibre vaut $K^\\circ = \\frac{K_a}{K_e} = 10^{14 - pK_a} \\ge 10^5 \\gg 10^4$ pour $pK_a \\le 9$, assurant un titrage quantitatif.'
        },
        {
          titre: '2. Expression du pH avant équivalence',
          explication: 'À tout instant $0 < V < V_E$, la solution constitue un mélange tampon avec $[A^-] / [AH] = V / (V_E - V)$, d\'où :',
          calculs: 'pH = pK_a + \\log\\left(\\frac{V}{V_E - V}\\right) \\implies \\text{en } V = V_E/2, \\quad pH = pK_a'
        },
        {
          titre: '3. Linéarisation de Gran',
          explication: 'En réécrivant la définition de $K_a$, $[H_3O^+] = 10^{-pH} = K_a \\frac{[AH]}{[A^-]} = K_a \\frac{V_E - V}{V}$, d\'où :',
          calculs: 'G(V) = V \\cdot 10^{-pH} = K_a (V_E - V)'
        }
      ],
      conclusion: 'La régression linéaire des points mesurés bien avant l\'équivalence permet d\'extrapoler $V_E$ avec une extrême précision sans subir le bruit de mesure du saut de pH.',
      reflexeDuCorrecteur: 'Connaître le tracé de Gran est un atout décisif aux épreuves de TP-cours et d\'écrits Agro-Véto.'
    }
  },
  {
    id: 'exo-100-94',
    title: 'Réduction : Endomorphismes Symétriques & Quotient de Rayleigh',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Algèbre linéaire & Espaces euclidiens',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts / ENS BCPST',
    dureeEstimeeMin: 45,
    enonce: `Soit $(E, \\langle \\cdot, \\cdot \\rangle)$ un espace euclidien de dimension $n \\ge 1$ et $u \\in \\mathcal{S}(E)$ un endomorphisme symétrique dont les valeurs propres ordonnées sont $\\lambda_1 \\le \\lambda_2 \\le \\dots \\le \\lambda_n$.
Pour tout $x \\in E \\setminus \\{0\\}$, on note $R(x) = \\frac{\\langle u(x), x \\rangle}{\\|x\\|^2}$ le quotient de Rayleigh.
1. Montrer que $\\lambda_1 \\le R(x) \\le \\lambda_n$. Préciser quand l'égalité est atteinte.
2. Démontrer le principe du minimax de Courant-Fischer :
$$\\lambda_k = \\min_{\\dim F = k} \\max_{x \\in F \\setminus \\{0\\}} R(x)$$
3. Soit $v \\in \\mathcal{S}^+(E)$ un endomorphisme symétrique positif. Montrer que la $k$-ième valeur propre de $u+v$ est supérieure ou égale à celle de $u$.`,
    hints: [
      'Décomposer $x$ dans une base orthonormale de vecteurs propres.',
      'Pour le minimax, utiliser la formule de Grassmann pour montrer que $\\dim(F \\cap \\mathrm{Vect}(e_k, \\dots, e_n)) \\ge 1$.',
      'Remarquer que $R_{u+v}(x) = R_u(x) + R_v(x) \\ge R_u(x)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Bornes du quotient de Rayleigh',
          explication: 'Dans une base orthonormée propre $(e_1, \\dots, e_n)$, pour tout $x = \\sum x_i e_i \\ne 0$ :',
          calculs: '\\langle u(x), x \\rangle = \\sum_{i=1}^n \\lambda_i x_i^2 \\implies \\lambda_1 \\|x\\|^2 \\le \\langle u(x), x \\rangle \\le \\lambda_n \\|x\\|^2'
        },
        {
          titre: '2. Théorème de Courant-Fischer',
          explication: 'Pour tout sous-espace $F$ de dimension $k$, l\'intersection avec $G = \\mathrm{Vect}(e_k, \\dots, e_n)$ vérifie $\\dim(F \\cap G) \\ge k + (n-k+1) - n = 1$. Tout vecteur $x_0 \\in F \\cap G$ vérifie $R(x_0) \\ge \\lambda_k$. Pour $F_0 = \\mathrm{Vect}(e_1, \\dots, e_k)$, le maximum est exactement $\\lambda_k$.'
        },
        {
          titre: '3. Monotonie de Weyl',
          explication: 'Puisque $v$ est positif, $\\langle v(x), x \\rangle \\ge 0$, donc $R_{u+v}(x) \\ge R_u(x)$ pour tout $x$. En appliquant le minimax :',
          calculs: '\\mu_k(u+v) = \\min_{\\dim F=k} \\max_{x \\in F} R_{u+v}(x) \\ge \\min_{\\dim F=k} \\max_{x \\in F} R_u(x) = \\lambda_k(u)'
        }
      ],
      conclusion: 'L\'ajout d\'un opérateur symétrique positif décale systématiquement toutes les valeurs propres ordonnées vers le haut.',
      reflexeDuCorrecteur: 'Le principe de Courant-Fischer est l\'outil roi pour encadrer les fréquences propres en mécanique vibratoire.'
    }
  },
  {
    id: 'exo-100-95',
    title: 'Ondes Électromagnétiques : Guide d\'Ondes Rectangulaire & Mode TE₁₀',
    matiere: 'Physique',
    chapitreId: 'physique-electromagnetisme',
    chapitreTitre: 'Électromagnétisme & Propagation guidée',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts / Centrale',
    dureeEstimeeMin: 45,
    enonce: `On considère un guide d'ondes métallique parfait creux à section rectangulaire ($0 \\le x \\le a$ et $0 \\le y \\le b$, avec $a > b$). On cherche une onde monochromatique en mode $TE_{m,n}$ ($E_z = 0$).
1. Écrire l'équation d'onde vérifiée par $B_z(x,y,z,t) = f(x,y) e^{i(\\omega t - k_z z)}$.
2. Préciser les conditions aux limites pour $\\vec{E}_{tang}$ et en déduire l'expression de $f(x,y)$.
3. Donner la relation de dispersion $k_z(\\omega)$ et la fréquence de coupure $f_c$ du mode fondamental $TE_{10}$.
4. Montrer que le produit de la vitesse de phase et de la vitesse de groupe vérifie $v_\\varphi \\cdot v_g = c^2$.`,
    hints: [
      'Sur les parois parfaites, $\\vec{E}_{tang} = \\vec{0}$, ce qui impose des conditions de Neumann $\\partial B_z / \\partial n = 0$.',
      'Le mode fondamental correspond à $m=1, n=0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation de Helmholtz',
          explication: 'Dans le vide intérieur, $\\Delta \\vec{B} - \\frac{1}{c^2} \\frac{\\partial^2 \\vec{B}}{\\partial t^2} = \\vec{0}$, d\'où pour la composante axiale :',
          calculs: '\\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\left(\\frac{\\omega^2}{c^2} - k_z^2\\right) f = 0'
        },
        {
          titre: '2. Quantification spatiale et mode TE10',
          explication: 'Les conditions aux limites imposent $f(x,y) = B_0 \\cos\\left(\\frac{m\\pi x}{a}\\right) \\cos\\left(\\frac{n\\pi y}{b}\\right)$. Pour $a > b$, la coupure la plus basse est le mode $TE_{10}$ :',
          calculs: 'k_z = \\sqrt{\\frac{\\omega^2}{c^2} - \\left(\\frac{\\pi}{a}\\right)^2} \\implies f_c = \\frac{c}{2a}'
        },
        {
          titre: '3. Vitesses de phase et de groupe',
          explication: 'La vitesse de phase vaut $v_\\varphi = \\frac{\\omega}{k_z} = \\frac{c}{\\sqrt{1 - (\\omega_c/\\omega)^2}} > c$. En dérivant $\\omega^2 = c^2 k_z^2 + \\omega_c^2$, la vitesse de groupe vaut :',
          calculs: 'v_g = \\frac{\\mathrm{d}\\omega}{\\mathrm{d}k_z} = c^2 \\frac{k_z}{\\omega} = \\frac{c^2}{v_\\varphi} < c \\implies v_\\varphi \\cdot v_g = c^2'
        }
      ],
      conclusion: 'L\'énergie se propage à la vitesse de groupe $v_g < c$, respectant parfaitement la causalité relativiste.',
      reflexeDuCorrecteur: 'Ne jamais confondre $v_\\varphi > c$ (phase) et $v_g < c$ (vitesse de l\'énergie).'
    }
  },
  {
    id: 'exo-100-96',
    title: 'Cristallographie : Structure Fluorine CaF₂ & Sites Tétraédriques',
    matiere: 'Chimie',
    chapitreId: 'chimie-solides',
    chapitreTitre: 'Cristallochimie & Solides parfaits',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Agro-Véto BCPST',
    dureeEstimeeMin: 35,
    enonce: `La fluorine $CaF_2$ cristallise dans une maille où les cations $Ca^{2+}$ occupent un réseau cubique à faces centrées (CFC) et les anions $F^-$ occupent tous les sites tétraédriques.
Données : $M(Ca) = 40{,}1\\text{ g/mol}$, $M(F) = 19{,}0\\text{ g/mol}$, $a = 546\\text{ pm}$, $N_A = 6{,}022 \\times 10^{23}\\text{ mol}^{-1}$.
1. Déterminer le nombre d'ions $Ca^{2+}$ et $F^-$ appartenant en propre à la maille. Vérifier la stœchiométrie.
2. Déterminer la coordinence de chaque ion.
3. Exprimer la condition de contact ionique le long de la diagonale du sous-cube d'arête $a/2$.
4. Calculer la masse volumique $\\rho$ en $\\text{g/cm}^3$.`,
    hints: [
      'Un réseau CFC compte 4 nœuds par maille et 8 sites tétraédriques au centre des 8 sous-cubes.',
      'Distance centre-sommet du sous-cube : $\\frac{a\\sqrt{3}}{4}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Population de la maille',
          explication: 'Cations $Ca^{2+}$ : $8 \\times 1/8 + 6 \\times 1/2 = 4$. Anions $F^-$ : $8 \\times 1 = 8$. Le rapport $4 : 8$ correspond bien à la formule $CaF_2$ ($Z = 4$).'
        },
        {
          titre: '2. Coordinence et contact ionique',
          explication: 'Chaque $F^-$ est entouré par 4 $Ca^{2+}$ (tétraèdre). Chaque $Ca^{2+}$ est entouré par 8 $F^-$ (cube). Structure $[8:4]$. Contact ionique :',
          calculs: 'r(Ca^{2+}) + r(F^-) = \\frac{a\\sqrt{3}}{4}'
        },
        {
          titre: '3. Masse volumique',
          explication: 'La masse volumique vaut $\\rho = \\frac{Z \\cdot M(CaF_2)}{N_A \\cdot a^3}$. Avec $M = 78{,}1\\text{ g/mol}$ et $a = 5{,}46 \\times 10^{-8}\\text{ cm}$ :',
          calculs: '\\rho = \\frac{4 \\times 78{,}1}{6{,}022 \\times 10^{23} \\times (5{,}46 \\times 10^{-8})^3} \\approx 3{,}19\\text{ g/cm}^3'
        }
      ],
      conclusion: 'La compacité élevée et la symétrie cubique expliquent la dureté 4 de la fluorine sur l\'échelle de Mohs.',
      reflexeDuCorrecteur: 'Vérifier systématiquement le nombre de motifs formulaires $Z$ et les unités de conversion $\\text{pm} \\to \\text{cm}$.'
    }
  },
  {
    id: 'exo-100-97',
    title: 'Probabilités : Formule de Bayes Continue & Inférence Bayésienne Poisson-Gamma',
    matiere: 'Mathématiques',
    chapitreId: 'maths-probabilites',
    chapitreTitre: 'Variables aléatoires continues & Statistiques',
    filieres: ['BCPST', 'MP', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Agro-Véto Mathématiques',
    dureeEstimeeMin: 35,
    enonce: `L'intensité infectieuse $\\Lambda$ d'une épidémie suit a priori une loi exponentielle de densité $f_\\Lambda(\\lambda) = \\beta e^{-\\beta \\lambda} \\mathbf{1}_{\\mathbb{R}_+}(\\lambda)$.
Sachant $\\Lambda = \\lambda$, le nombre de nouveaux cas $X$ suit une loi de Poisson $\\mathcal{P}(\\lambda)$.
1. Déterminer la loi marginale de $X$ (loi a priori du nombre de cas).
2. Déterminer la densité de probabilité a posteriori de $\\Lambda$ sachant $(X = k)$. Reconnaître une loi usuelle.
3. Calculer l'estimateur de Bayes $\\hat{\\lambda} = \\mathbb{E}[\\Lambda \\mid X = k]$. Commenter.`,
    hints: [
      'Appliquer les probabilités totales continues : $\\mathbb{P}(X=k) = \\int_0^{+\\infty} \\frac{\\lambda^k}{k!} e^{-\\lambda} \\beta e^{-\\beta\\lambda} d\\lambda$.',
      'Identifier la densité Gamma $\\Gamma(k+1, \\beta+1)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Loi marginale de X',
          explication: 'Par l\'intégrale d\'Euler $\\int_0^\\infty \\lambda^k e^{-(\\beta+1)\\lambda} d\\lambda = \\frac{k!}{(\\beta+1)^{k+1}}$, on obtient :',
          calculs: '\\mathbb{P}(X = k) = \\frac{\\beta}{\\beta + 1} \\left(\\frac{1}{\\beta + 1}\\right)^k \\quad (\\text{loi géométrique sur } \\mathbb{N})'
        },
        {
          titre: '2. Densité a posteriori',
          explication: 'Par la formule de Bayes $f_{\\Lambda|X=k}(\\lambda) = \\frac{\\mathbb{P}(X=k|\\lambda) f_\\Lambda(\\lambda)}{\\mathbb{P}(X=k)}$ :',
          calculs: 'f_{\\Lambda|X=k}(\\lambda) = \\frac{(\\beta+1)^{k+1}}{k!} \\lambda^k e^{-(\\beta+1)\\lambda} \\sim \\Gamma(k+1, \\beta+1)'
        },
        {
          titre: '3. Estimateur bayésien',
          explication: 'L\'espérance a posteriori s\'écrit comme une moyenne pondérée entre l\'a priori et l\'observation :',
          calculs: '\\hat{\\lambda} = \\frac{k+1}{\\beta+1} = \\frac{\\beta}{\\beta+1}\\left(\\frac{1}{\\beta}\\right) + \\frac{1}{\\beta+1} k'
        }
      ],
      conclusion: 'Plus le nombre d\'observations augmente, plus l\'estimateur converge vers l\'observation empirique $k$.',
      reflexeDuCorrecteur: 'La conjugaison des lois Poisson et Gamma est l\'exemple canonique d\'inférence bayésienne au programme.'
    }
  },
  {
    id: 'exo-100-98',
    title: 'Mécanique des Fluides : Théorème d\'Euler & Propulsion par Hélice (Théorie de Froude)',
    matiere: 'Physique',
    chapitreId: 'physique-meca-fluides',
    chapitreTitre: 'Mécanique des fluides & Bilans de quantité de mouvement',
    filieres: ['BCPST', 'PSI', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: `On étudie la propulsion par hélice (surface $S$) dans un fluide incompressible de masse volumique $\\rho$. Vitesse amont $v_0$, vitesse au disque $v_1$, vitesse aval $v_2$.
1. Justifier la continuité de la vitesse au passage du disque.
2. Par le théorème de Bernoulli amont puis aval, exprimer le saut de pression $\\Delta P$.
3. Par le théorème d'Euler (bilan de quantité de mouvement), démontrer la relation de Froude $v_1 = \\frac{v_0 + v_2}{2}$.
4. Exprimer le rendement propulsif théorique de Froude $\\eta = \\frac{2}{1 + v_2/v_0}$.`,
    hints: [
      'Conservation du débit massique sur une tranche d\'épaisseur infinitésimale : vitesse normale continue.',
      'Euler : poussée $T = D_m (v_2 - v_0)$ avec $D_m = \\rho S v_1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Continuité de la vitesse et saut de pression',
          explication: 'La conservation de la masse impose $v_1^- = v_1^+ = v_1$. Par Bernoulli séparément en amont et aval :',
          calculs: '\\Delta P = P_1^+ - P_1^- = \\frac{1}{2}\\rho (v_2^2 - v_0^2) \\implies T = \\Delta P \\cdot S = \\frac{1}{2}\\rho S (v_2^2 - v_0^2)'
        },
        {
          titre: '2. Théorème d\'Euler et vitesse au disque',
          explication: 'Le bilan global de quantité de mouvement sur le tube de courant donne $T = D_m (v_2 - v_0) = \\rho S v_1 (v_2 - v_0)$. En égalant les deux expressions de $T$ :',
          calculs: '\\rho S v_1 (v_2 - v_0) = \\frac{1}{2}\\rho S (v_2 - v_0)(v_2 + v_0) \\implies v_1 = \\frac{v_0 + v_2}{2}'
        },
        {
          titre: '3. Rendement de Froude',
          explication: 'Le rendement est le rapport de la puissance utile $T v_0$ sur la puissance fournie $T v_1$ :',
          calculs: '\\eta = \\frac{T v_0}{T v_1} = \\frac{v_0}{v_1} = \\frac{2}{1 + v_2/v_0}'
        }
      ],
      conclusion: 'Pour maximiser le rendement vers 1, il faut brasser une masse d\'air énorme à faible surcroît de vitesse (hélice de grand diamètre).',
      reflexeDuCorrecteur: 'Ne jamais appliquer Bernoulli globalement à travers une machine hydraulique fournissant du travail.'
    }
  },
  {
    id: 'exo-100-99',
    title: 'Chimie Organique : Transposition Pinacolique & Rétrosynthèse',
    matiere: 'Chimie',
    chapitreId: 'chimie-organique',
    chapitreTitre: 'Chimie organique & Réarrangements cationiques',
    filieres: ['BCPST', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: `Le pinacol (2,3-diméthylbutane-2,3-diol) chauffé en milieu sulfurique concentré se transpose en pinacolone (3,3-diméthylbutan-2-one).
1. Détailler le mécanisme réactionnel étape par étape (protonation, départ de l'eau, migration 1,2 de méthyle assistée, déprotonation).
2. Expliquer quelle est la force motrice thermodynamique de cette transposition.
3. Proposer la synthèse du pinacol de départ par couplage pinacolique réducteur de l'acétone.`,
    hints: [
      'La migration 1,2 est assistée par le doublet non liant de l\'oxygène pour former un ion oxonium mésomère très stable.',
      'Le couplage d\'acétone se fait par réduction monoélectronique au magnésium.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Mécanisme de la transposition pinacolique',
          explication: '1. Protonation d\'une fonction alcool formant un groupe partant $-\\text{OH}_2^+$.\n2. Départ de $H_2O$ générant un carbocation tertiaire $(CH_3)_2C(OH)-\\overset{+}{C}(CH_3)_2$.\n3. Migration 1,2 concertée d\'un groupe méthyle avec assistance du doublet libre de l\'oxygène adjacent, formant l\'ion oxonium protoné $CH_3-C(\\overset{+}{O}H)-C(CH_3)_3$.\n4. Déprotonation finale par l\'eau régénérant le catalyseur acide et libérant la pinacolone $CH_3-CO-C(CH_3)_3$.'
        },
        {
          titre: '2. Force motrice',
          explication: 'La force motrice est la formation de la liaison carbonyle $C=O$ extrêmement stable et la saturation de la règle de l\'octet pour tous les atomes de la forme oxonium mésomère dominante.'
        },
        {
          titre: '3. Couplage pinacolique réducteur',
          explication: 'Deux molécules d\'acétone sont traitées par du magnésium amalgamé $Mg(Hg)$ : transfert monoélectronique SET formant des radicaux-anions cétyles qui se couplent par liaison $C-C$, suivi d\'une hydrolyse acide pour libérer le diol vicinal pinacol.'
        }
      ],
      conclusion: 'La transposition pinacolique illustre le principe fondamental de stabilisation par participation du groupe voisin (effet ankimérique).',
      reflexeDuCorrecteur: 'Toujours dessiner la forme mésomère oxonium $R_2C=\\overset{+}{O}H$ qui explique la rapidité de la migration.'
    }
  },
  {
    id: 'exo-100-100',
    title: 'Mathématiques : Séries de Fourier, Phénomène de Gibbs & Formule de Parseval',
    matiere: 'Mathématiques',
    chapitreId: 'maths-series-fourier',
    chapitreTitre: 'Analyse & Séries de Fourier',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'ENS / Mines-Ponts MP-PC',
    dureeEstimeeMin: 45,
    enonce: `Soit $f : \\mathbb{R} \\to \\mathbb{R}$ la fonction $2\\pi$-périodique impaire définie par $f(x) = 1$ sur $]0, \\pi[$ et $f(0)=f(\\pi)=0$.
1. Calculer ses coefficients de Fourier $a_n$ et $b_n$.
2. En appliquant le théorème de Dirichlet en $x = \\pi/2$, établir la formule de Leibniz : $\\sum_{p=0}^{+\\infty} \\frac{(-1)^p}{2p+1} = \\frac{\\pi}{4}$.
3. Par l'égalité de Parseval, calculer $\\sum_{p=0}^{+\\infty} \\frac{1}{(2p+1)^2}$ et en déduire la valeur de $\\zeta(2) = \\sum_{n=1}^{+\\infty} \\frac{1}{n^2}$.
4. Montrer que la somme partielle en $x_N = \\frac{\\pi}{2N}$ tend vers $\\frac{2}{\\pi} \\int_0^\\pi \\frac{\\sin t}{t} dt \\approx 1{,}18 > 1$ (phénomène de Gibbs).`,
    hints: [
      'Puisque $f$ est impaire, $a_n = 0$ et $b_n = \\frac{2}{\\pi}\\int_0^\\pi \\sin(nx)dx$.',
      'Parseval : $\\frac{1}{2\\pi}\\int_{-\\pi}^\\pi |f|^2 dx = \\frac{1}{2}\\sum b_n^2$.',
      'Reconnaître une somme de Riemann pour la fonction $\\frac{\\sin t}{t}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Coefficients de Fourier',
          explication: 'Par parité, $a_n = 0$. Pour $b_n$ :',
          calculs: 'b_n = \\frac{2}{\\pi}\\int_0^\\pi \\sin(nx)dx = \\frac{2(1 - (-1)^n)}{n\\pi} \\implies b_{2p+1} = \\frac{4}{(2p+1)\\pi}, \\quad b_{2p} = 0'
        },
        {
          titre: '2. Théorème de Dirichlet et série de Leibniz',
          explication: 'En $x = \\pi/2$, $f$ est continue et vaut 1. Dirichlet donne :',
          calculs: '1 = \\frac{4}{\\pi} \\sum_{p=0}^{+\\infty} \\frac{\\sin((2p+1)\\pi/2)}{2p+1} = \\frac{4}{\\pi} \\sum_{p=0}^{+\\infty} \\frac{(-1)^p}{2p+1} \\implies \\sum_{p=0}^{+\\infty} \\frac{(-1)^p}{2p+1} = \\frac{\\pi}{4}'
        },
        {
          titre: '3. Parseval et valeur de zeta(2)',
          explication: 'La formule de Parseval donne $1 = \\frac{1}{2} \\sum_{p=0}^{+\\infty} \\frac{16}{(2p+1)^2 \\pi^2} \\implies \\sum_{p=0}^{+\\infty} \\frac{1}{(2p+1)^2} = \\frac{\\pi^2}{8}$. En séparant pairs et impairs :',
          calculs: '\\zeta(2) = \\frac{1}{4}\\zeta(2) + \\frac{\\pi^2}{8} \\implies \\zeta(2) = \\frac{\\pi^2}{6}'
        },
        {
          titre: '4. Phénomène de Gibbs',
          explication: 'En évaluant $S_{2N-1}(\\frac{\\pi}{2N})$, on obtient une somme de Riemann pour le sinus cardinal convergeant vers $\\frac{2}{\\pi} \\int_0^\\pi \\frac{\\sin t}{t} dt \\approx 1{,}17898$.'
        }
      ],
      conclusion: 'Le dépassement systématique de ~18% près d\'une discontinuité persiste à la limite $N \\to +\\infty$ : c\'est le phénomène universel de Gibbs.',
      reflexeDuCorrecteur: 'Ne jamais affirmer la convergence uniforme d\'une série de Fourier près d\'une discontinuité.'
    }
  }
];
