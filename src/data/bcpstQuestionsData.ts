import type { QuestionIncontournableItem } from './cpgeData';

export const BCPST_QUESTIONS_INCONTOURNABLES: QuestionIncontournableItem[] = [
  {
    id: 'must-bcpst-nernst-planck',
    titre: 'Dérivation du Potentiel d\'Équilibre de Nernst & Équation de Goldman-Hodgkin-Katz',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves Agro-Véto Physique & Biophysique',
    chapitreAssocie: 'Transports Transmembranaires & Électrophysiologie',
    enonceType: 'À partir de l\'expression de la densité de flux molaire ionique de Nernst-Planck $j = -D \\frac{\\mathrm{d}C}{\\mathrm{d}x} - u z F C \\frac{\\mathrm{d}V}{\\mathrm{d}x}$ et de la relation d\'Einstein reliant diffusion et mobilité, établir l\'expression du potentiel d\'équilibre de Nernst $E_i = V_{int} - V_{ext}$ pour un ion $i$. Expliquer pourquoi le potentiel de repos du neurone ($-70\\text{ mV}$) est proche du potentiel de Nernst du potassium.',
    piegesImmediats: [
      'Inverser les bornes d\'intégration et trouver un signe erroné pour $V_{int} - V_{ext}$.',
      'Oublier le signe de la valence $z_i$ pour les anions comme le chlorure ($z_{Cl} = -1$).'
    ],
    redactionModele: [
      {
        etape: '1. Condition d\'équilibre thermodynamique à flux net nul',
        justification: 'À l\'équilibre électrochimique, le flux passif net s\'annule : $j = 0$. On a donc :\n$$-D_i \\frac{\\mathrm{d}C_i}{\\mathrm{d}x} = u_i z_i F C_i \\frac{\\mathrm{d}V}{\\mathrm{d}x} \\implies \\frac{\\mathrm{d}V}{\\mathrm{d}x} = -\\frac{D_i}{u_i z_i F} \\frac{1}{C_i} \\frac{\\mathrm{d}C_i}{\\mathrm{d}x}$$'
      },
      {
        etape: '2. Application de la relation d\'Einstein et intégration à travers la membrane',
        justification: 'La relation d\'Einstein donne $\\frac{D_i}{u_i} = R T$. En séparant les variables entre l\'extérieur ($x=0$) et l\'intérieur ($x=e$) de la membrane :\n$$\\int_{V_{ext}}^{V_{int}} \\mathrm{d}V = -\\frac{R T}{z_i F} \\int_{C_i^{ext}}^{C_i^{int}} \\frac{\\mathrm{d}C_i}{C_i}$$\nCe qui conduit à la formule canonique de Nernst :',
        formule: 'V_{int} - V_{ext} = E_i = \\frac{R T}{z_i F} \\ln\\left( \\frac{C_i^{ext}}{C_i^{int}} \\right)'
      },
      {
        etape: '3. Confrontation physiologique avec le potassium $K^+$',
        justification: 'Au repos, la membrane possède de nombreux canaux de fuite au potassium ouverts, de sorte que la perméabilité relative $P_K \\gg P_{Na}$. L\'équation de Goldman-Hodgkin-Katz montre que le potentiel de membrane est une moyenne pondérée des potentiels de Nernst dominée par $E_K \\approx -90\\text{ mV}$, d\'où $V_{repos} \\approx -70\\text{ mV}$.'
      }
    ],
    baremeEtPointsCles: [
      'Écriture rigoureuse de la loi de Nernst-Planck (2 pts)',
      'Utilisation correcte de la relation d\'Einstein $D/u = RT$ (2 pts)',
      'Intégration et respect strict des bornes int/ext (2 pts)',
      'Interprétation biophysique des perméabilités relatives (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-lotka-volterra-stabilite',
    titre: 'Étude d\'un Système Proie-Prédateur de Lotka-Volterra & Cycle Limite',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des sujets de modélisation mathématique Agro-Véto',
    chapitreAssocie: 'Équations Différentielles & Systèmes Dynamiques',
    enonceType: 'Soit le système de Lotka-Volterra $\\frac{\\mathrm{d}N}{\\mathrm{d}t} = N(\\alpha - \\beta P)$ et $\\frac{\\mathrm{d}P}{\\mathrm{d}t} = P(\\delta N - \\gamma)$ avec $\\alpha, \\beta, \\gamma, \\delta > 0$. Déterminer les points d\'équilibre dans le premier quadrant. Linéariser le système au point d\'équilibre de coexistence et donner la nature géométrique de ses trajectoires dans le plan de phase.',
    piegesImmediats: [
      'Oublier le point d\'équilibre trivial $(0, 0)$.',
      'Conclure hâtivement à la stabilité asymptotique alors que les valeurs propres linéarisées sont des imaginaires purs purs (centre neutre).'
    ],
    redactionModele: [
      {
        etape: '1. Recherche des points critiques',
        justification: 'Les points critiques annulent le champ de vecteurs : $N(\\alpha - \\beta P) = 0$ et $P(\\delta N - \\gamma) = 0$. Dans le domaine $N \\ge 0, P \\ge 0$, les deux solutions sont l\'extinction $(0, 0)$ et le point de coexistence biologique $(N^*, P^*) = (\\gamma / \\delta, \\alpha / \\beta)$.'
      },
      {
        etape: '2. Matrice jacobienne au point $(N^*, P^*)$',
        justification: 'La matrice jacobienne générale vaut $J(N, P) = \\begin{pmatrix} \\alpha - \\beta P & -\\beta N \\\\ \\delta P & \\delta N - \\gamma \\end{pmatrix}$. En évaluant en $(N^*, P^*)$ :\n$$J(N^*, P^*) = \\begin{pmatrix} 0 & -\\beta \\frac{\\gamma}{\\delta} \\\\ \\delta \\frac{\\alpha}{\\beta} & 0 \\end{pmatrix}$$\nLe polynôme caractéristique est $\\det(\\lambda I - J) = \\lambda^2 + \\alpha \\gamma = 0$. Les valeurs propres sont imaginaires pures :',
        formule: '\\lambda_{1,2} = \\pm j \\sqrt{\\alpha \\gamma}'
      },
      {
        etape: '3. Trajectoires fermées et intégrale première',
        justification: 'Le système linéarisé est un centre. Pour le système non linéaire complet, l\'existence de l\'intégrale première $H(N, P) = \\delta N - \\gamma \\ln N + \\beta P - \\alpha \\ln P = \\text{cste}$ strictement convexe autour de $(N^*, P^*)$ garantit que les trajectoires réelles sont des orbites périodiques fermées (cycles de population proies-prédateurs).'
      }
    ],
    baremeEtPointsCles: [
      'Calcul des deux points d\'équilibre (2 pts)',
      'Dérivation correcte de la matrice jacobienne (2 pts)',
      'Calcul des valeurs propres imaginaires pures $\\pm j\\sqrt{\\alpha\\gamma}$ (2 pts)',
      'Justification de la périodicité par l\'intégrale première $H$ (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-poiseuille-artère',
    titre: 'Établissement du Profil de Poiseuille & Résistance Hydraulique d\'un Vaisseau',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Mécanique des Fluides Agro-Véto / G2E',
    chapitreAssocie: 'Écoulement des Fluides Visqueux',
    enonceType: 'On considère l\'écoulement laminaire stationnaire du sang de viscosité $\\eta$ dans une artère modélisée par un cylindre rigide de rayon $R$ et longueur $L$ sous une surpression $\\Delta P$. Par bilan de forces sur un manchon cylindrique coaxial de rayon $r$, établir le profil de vitesse $v(r)$ puis déduire la loi de Hagen-Poiseuille pour le débit volumique $D_v$.',
    piegesImmediats: [
      'Oublier d\'appliquer la condition d\'adhérence à la paroi $v(R) = 0$.',
      'Confondre la vitesse sur l\'axe $v_{max}$ avec la vitesse débitante moyenne $v_{moy} = D_v / (\\pi R^2) = v_{max}/2$.'
    ],
    redactionModele: [
      {
        etape: '1. Bilan des forces axiales sur un cylindre de fluide de rayon $r$',
        justification: 'Le fluide s\'écoule selon $\\vec{u}_z$. Sur le cylindre fluide de rayon $r$ et longueur $L$ en régime stationnaire, la somme des forces projetée sur $\\vec{u}_z$ est nulle :\n$$\\Delta P \\cdot (\\pi r^2) + \\tau(r) \\cdot (2\\pi r L) = 0$$\navec la loi de contrainte visqueuse de Newton $\\tau(r) = \\eta \\frac{\\mathrm{d}v}{\\mathrm{d}r}$.'
      },
      {
        etape: '2. Intégration de l\'équation différentielle du profil de vitesse',
        justification: 'On obtient $\\frac{\\mathrm{d}v}{\\mathrm{d}r} = -\\frac{\\Delta P}{2\\eta L} r$. En intégrant entre $r$ et la paroi $R$ avec la condition aux limites d\'adhérence $v(R) = 0$ :\n$$v(r) = \\frac{\\Delta P}{4\\eta L} (R^2 - r^2) = v_{max} \\left( 1 - \\frac{r^2}{R^2} \\right)$$'
      },
      {
        etape: '3. Débit volumique par intégration sur les couronnes cylindriques',
        justification: 'Le débit volumique $D_v$ à travers la section circulaire s\'obtient par intégration des éléments de surface $\\mathrm{d}S = 2\\pi r\\,\\mathrm{d}r$ :\n$$D_v = \\int_0^R v(r) 2\\pi r\\,\\mathrm{d}r = \\frac{\\pi \\Delta P}{2\\eta L} \\left[ \\frac{R^2 r^2}{2} - \\frac{r^4}{4} \\right]_0^R = \\frac{\\pi R^4 \\Delta P}{8\\eta L}$$',
        formule: 'D_v = \\frac{\\pi R^4 \\Delta P}{8\\eta L} \\iff \\Delta P = R_h D_v \\quad \\left(R_h = \\frac{8\\eta L}{\\pi R^4}\\right)'
      }
    ],
    baremeEtPointsCles: [
      'Choix du système et bilan des forces de pression et de frottement visqueux (2.5 pts)',
      'Condition aux limites $v(R) = 0$ (1.5 pt)',
      'Profil parabolique exact (2 pts)',
      'Débit volumique et loi en $R^4$ (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-lineweaver-burk',
    titre: 'Tracé de Lineweaver-Burk & Discrimination d\'une Inhibition Compétitive',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~85% des épreuves de Chimie-Biochimie Agro-Véto',
    chapitreAssocie: 'Cinétique Enzymatique',
    enonceType: 'À partir de l\'équation de Michaelis-Menten $v = \\frac{V_{max}[S]}{K_M + [S]}$, établir la forme linéarisée en double réciproque de Lineweaver-Burk. Expliquer comment le tracé de $1/v = f(1/[S])$ en présence d\'un inhibiteur permet de prouver sans ambiguïté qu\'il s\'agit d\'un inhibiteur compétitif.',
    piegesImmediats: [
      'Confondre ordonnée à l\'origine ($1/V_{max}$) et abscisse à l\'origine ($-1/K_M$).',
      'Penser qu\'un inhibiteur compétitif modifie la vitesse maximale $V_{max}$ (à saturation $[S] \\to +\\infty$, le substrat déplace totalement l\'inhibiteur compétitif !).'
    ],
    redactionModele: [
      {
        etape: '1. Inversion algébrique de la loi de Michaelis-Menten',
        justification: 'En prenant l\'inverse des deux membres de l\'équation de Michaelis-Menten :\n$$\\frac{1}{v} = \\frac{K_M + [S]}{V_{max}[S]} = \\frac{K_M}{V_{max}} \\frac{1}{[S]} + \\frac{1}{V_{max}}$$\nC\'est l\'équation d\'une droite affine $y = a x + b$ avec $y = 1/v$ et $x = 1/[S]$.'
      },
      {
        etape: '2. Expression des paramètres caractéristiques graphiques',
        justification: '- Pente de la droite : $a = K_M / V_{max}$.\n- Ordonnée à l\'origine ($1/[S] = 0$) : $b = 1/V_{max}$.\n- Abscisse à l\'origine ($1/v = 0$) : $x_0 = -1/K_M$.'
      },
      {
        etape: '3. Signature diagnostique d\'une inhibition compétitive',
        justification: 'En présence d\'un inhibiteur compétitif réversible $I$ de constante de dissociation $K_I$, $V_{max}^{app} = V_{max}$ (inchangée) et $K_M^{app} = K_M(1 + [I]/K_I) > K_M$. Sur le graphe de Lineweaver-Burk :\n- Les droites avec et sans inhibiteur se coupent **exactement sur l\'axe des ordonnées** en $1/V_{max}$.\n- La pente augmente d\'un facteur $(1 + [I]/K_I)$ et l\'abscisse à l\'origine $-1/K_M^{app}$ se rapproche de zéro.',
        formule: '\\frac{1}{v} = \\frac{K_M(1 + [I]/K_I)}{V_{max}} \\frac{1}{[S]} + \\frac{1}{V_{max}}'
      }
    ],
    baremeEtPointsCles: [
      'Dérivation mathématique propre de $1/v$ en fonction de $1/[S]$ (2 pts)',
      'Identification correcte de l\'ordonnée et de l\'abscisse à l\'origine (2 pts)',
      'Définition de $V_{max}^{app}$ et $K_M^{app}$ pour l\'inhibition compétitive (2 pts)',
      'Justification du point d\'intersection unique sur l\'axe des ordonnées (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-tampon-henderson',
    titre: 'Dérivation d\'Henderson-Hasselbalch & Régulation du Tampon Bicarbonate Sanguin',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des épreuves de Chimie Agro-Véto',
    chapitreAssocie: 'Équilibres Acido-Basiques Physiologiques',
    enonceType: 'Pour le couple acide carbonique / ion hydrogénocarbonate $CO_2(aq), H_2O / HCO_3^-$ de $pK_a = 6.10$ à $37^\\circ\\text{C}$, exprimer le pH sanguin en fonction de la concentration $[HCO_3^-]$ et de la pression partielle alvéolaire $P_{CO_2}$ (coefficient de solubilité de Henry $\\alpha = 0.030\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{mmHg}^{-1}$). Calculer le rapport des concentrations à $pH = 7.40$ et justifier pourquoi ce tampon est remarquable malgré $pH \\neq pK_a$.',
    piegesImmediats: [
      'Oublier le coefficient $\\alpha$ de la loi de Henry en injectant directement la pression en mmHg dans le logarithme sans homogénéiser les unités.',
      'Croire qu\'un tampon physiologique est nécessairement un système fermé régulé uniquement par le mélange chimique statique.'
    ],
    redactionModele: [
      {
        etape: '1. Établissement de la relation d\'Henderson-Hasselbalch avec la loi de Henry',
        justification: 'Pour le couple $CO_2(aq), H_2O + H_2O \\rightleftharpoons HCO_3^- + H_3O^+$ avec $K_a = \\frac{[HCO_3^-][H_3O^+]}{[CO_2(aq)]}$ :\n$$pH = pK_a + \\log_{10}\\left( \\frac{[HCO_3^-]}{[CO_2(aq)]} \\right)$$\nLa loi de Henry relie la concentration de gaz dissous à sa pression partielle : $[CO_2(aq)] = \\alpha P_{CO_2}$. D\'où la formule clinique :',
        formule: 'pH = 6.10 + \\log_{10}\\left( \\frac{[HCO_3^-]}{\\alpha P_{CO_2}} \\right)'
      },
      {
        etape: '2. Calcul numérique du ratio à l\'état physiologique normal',
        justification: 'À $pH = 7.40$ et $P_{CO_2} = 40\\text{ mmHg}$ :\n$$\\log_{10}\\left( \\frac{[HCO_3^-]}{\\alpha P_{CO_2}} \\right) = 7.40 - 6.10 = 1.30 \\implies \\frac{[HCO_3^-]}{[CO_2(aq)]} = 10^{1.30} \\approx 20$$\nComme $[CO_2(aq)] = 0.030 \\times 40 = 1.2\\text{ mmol/L}$, on a $[HCO_3^-] = 20 \\times 1.2 = 24\\text{ mmol/L}$.'
      },
      {
        etape: '3. Argumentation de l\'efficacité en système biologique ouvert',
        justification: 'Bien que le pH physiologique soit éloigné de 1.3 unité du $pK_a$, ce tampon est le plus puissant de l\'organisme car c\'est un **système ouvert** : les poumons éliminent le $CO_2$ par modulation de la fréquence ventilatoire en quelques secondes/minutes, et les reins réabsorbent ou sécrètent $HCO_3^-$ en quelques heures, maintenant ainsi le ratio à 20 de manière quasi-parfaite.'
      }
    ],
    baremeEtPointsCles: [
      'Écriture de l\'équilibre acido-basique et définition de $K_a$ (2 pts)',
      'Loi de Henry et expression avec $\\alpha P_{CO_2}$ (2 pts)',
      'Calcul exact du ratio 20 et de $[HCO_3^-] = 24\\text{ mmol/L}$ (2 pts)',
      'Argumentation sur la régulation pulmonaire et rénale en système ouvert (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-resolution-abbe',
    titre: 'Calcul du Pouvoir Séparateur d\'Abbe & Microscopie à Immersion',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~65% des épreuves d\'Optique Agro-Véto / G2E',
    chapitreAssocie: 'Optique Ondulatoire & Microscopie',
    enonceType: 'Énoncer la condition de diffraction d\'Abbe pour qu\'un réseau plan de pas $d$ soit résolu par un objectif de microscope d\'ouverture numérique $\\mathrm{ON} = n \\sin\\alpha$. En déduire la distance minimale résolue $d_{min}$. Calculer numériquement $d_{min}$ à sec ($n=1, \\alpha = 30^\\circ$) puis à immersion dans l\'huile ($n=1.515, \\alpha = 65^\\circ$) pour $\\lambda_0 = 500\\text{ nm}$.',
    piegesImmediats: [
      'Oublier de modifier la longueur d\'onde dans le milieu $\\lambda = \\lambda_0 / n$.',
      'Confondre ouverture numérique $\\mathrm{ON} = n\\sin\\alpha$ et simple demi-angle $\\alpha$.'
    ],
    redactionModele: [
      {
        etape: '1. Théorie de la diffraction d\'Abbe en éclairage cohérent',
        justification: 'Un objet périodique de période spatiale $d$ diffracte la lumière incidente selon les angles $\\theta_p$ donnés par la formule des réseaux : $n \\sin\\theta_p = p \\frac{\\lambda_0}{d}$. Pour qu\'une image contrastée soit formée, l\'objectif doit collecter au moins l\'ordre 0 et l\'un des ordres de diffraction $+1$ ou $-1$, soit $\\sin\\theta_1 \\le \\sin\\alpha$ en éclairage oblique (ou $2\\sin\\alpha$ en éclairage conique condenser).'
      },
      {
        etape: '2. Formule du pouvoir séparateur d\'Abbe',
        justification: 'La distance minimale résolvable s\'écrit :\n$$d_{min} = \\frac{\\lambda_0}{2 n \\sin\\alpha} = \\frac{\\lambda_0}{2 \\mathrm{ON}}$$\n(ou $d_{min} = \\frac{0.61 \\lambda_0}{\\mathrm{ON}}$ selon le critère d\'Airy-Rayleigh pour deux points sources incohérents).',
        formule: 'd_{min} = \\frac{0.61 \\lambda_0}{n \\sin\\alpha}'
      },
      {
        etape: '3. Applications numériques comparatives',
        justification: '- À sec ($n=1, \\alpha = 30^\\circ$) : $\\mathrm{ON} = 1 \\times \\sin 30^\\circ = 0.50$.\n$$d_{min}^{sec} = \\frac{0.61 \\times 500\\text{ nm}}{0.50} = 610\\text{ nm} = 0.61\\;\\mu\\text{m}$$\n- À immersion dans l\'huile ($n=1.515, \\alpha = 65^\\circ$) : $\\mathrm{ON} = 1.515 \\times \\sin 65^\\circ \\approx 1.373$.\n$$d_{min}^{huile} = \\frac{0.61 \\times 500\\text{ nm}}{1.373} \\approx 222\\text{ nm} = 0.22\\;\\mu\\text{m}$$\nL\'immersion dans l\'huile permet de tripler la résolution optique.'
      }
    ],
    baremeEtPointsCles: [
      'Justification de la collection des ordres de diffraction 0 et 1 (2.5 pts)',
      'Définition précise de l\'ouverture numérique (1.5 pt)',
      'Application numérique exacte à sec (2 pts)',
      'Application numérique avec immersion huile et conclusion biologique (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-mutarotation-biot',
    titre: 'Mutarotation du D-Glucose & Calcul des Pourcentages Anomériques par Polarimétrie',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Chimie Agro-Véto',
    chapitreAssocie: 'Stéréochimie des Biomolécules',
    enonceType: 'On dissout dans l\'eau pure $10.0\\text{ g}$ d\'$\\alpha$-D-glucopyranose pur ($[\\alpha]_D^\\alpha = +112^\\circ\\cdot\\text{dm}^{-1}\\cdot\\text{g}^{-1}\\cdot\\text{mL}$) pour obtenir $100\\text{ mL}$ de solution. Dans une cuve polarimétrique de $l = 2\\text{ dm}$, le pouvoir rotatoire mesuré initialement est $\\alpha_0$, puis évolue pour se stabiliser à $\\alpha_{eq} = +10.54^\\circ$. Sachant que l\'anomère pur $\\beta$ possède un pouvoir rotatoire spécifique $[\\alpha]_D^\\beta = +18.7^\\circ$, calculer la composition molaire de l\'équilibre et justifier la prédominance de l\'anomère $\\beta$.',
    piegesImmediats: [
      'Oublier les unités de la loi de Biot (longueur en décimètres, concentration en g/mL).',
      'Confondre pouvoir rotatoire mesuré $\\alpha$ en degrés et pouvoir rotatoire spécifique $[\\alpha]_D$.'
    ],
    redactionModele: [
      {
        etape: '1. Calcul du pouvoir rotatoire spécifique à l\'équilibre',
        justification: 'La concentration massique en glucose vaut $C = \\frac{10.0\\text{ g}}{100\\text{ mL}} = 0.100\\text{ g/mL}$. D\'après la loi de Biot pour la solution à l\'équilibre :\n$$[\\alpha]_{eq} = \\frac{\\alpha_{eq}}{l \\cdot C} = \\frac{+10.54^\\circ}{2\\text{ dm} \\times 0.100\\text{ g/mL}} = +52.7^\\circ\\cdot\\text{dm}^{-1}\\cdot\\text{g}^{-1}\\cdot\\text{mL}$$'
      },
      {
        etape: '2. Application de la loi d\'additivité de Biot',
        justification: 'En notant $x_\\alpha$ la fraction molaire de l\'anomère $\\alpha$ et $(1 - x_\\alpha)$ celle de l\'anomère $\\beta$ :\n$$[\\alpha]_{eq} = x_\\alpha [\\alpha]_D^\\alpha + (1 - x_\\alpha) [\\alpha]_D^\\beta$$\n$$52.7 = 112 \\cdot x_\\alpha + 18.7 \\cdot (1 - x_\\alpha) = 93.3 \\cdot x_\\alpha + 18.7$$\n$$x_\\alpha = \\frac{52.7 - 18.7}{93.3} = \\frac{34.0}{93.3} \\approx 0.364 \\implies 36.4\\%\\;\\alpha$$\nLa fraction de $\\beta$ est donc $x_\\beta = 1 - 0.364 = 63.6\\%$.',
        formule: 'x_\\alpha \\approx 36.4\\%, \\quad x_\\beta \\approx 63.6\\%'
      },
      {
        etape: '3. Interprétation conformationnelle',
        justification: 'Dans la conformation chaise $^{4}C_1$, le $\\beta$-D-glucopyranose possède **tous ses 5 substituants hydroxyles et hydroxyméthyle en position équatoriale**, ce qui élimine totalement les gênes stériques 1,3-diaxiales. Pour l\'anomère $\\alpha$, le $-OH$ anomérique en C1 est en position axiale, créant des répulsions 1,3-diaxiales défavorables. Le $\\beta$ est donc thermodynamiquement plus stable.'
      }
    ],
    baremeEtPointsCles: [
      'Application rigoureuse de la loi de Biot avec conversion d\'unités (2 pts)',
      'Équation d\'additivité et résolution algébrique (2.5 pts)',
      'Valeurs numériques précises $36\\%$ / $64\\%$ (1.5 pt)',
      'Justification stéréochimique par les positions équatoriales en chaise (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-test-khi2-mendel',
    titre: 'Test d\'Adéquation du $\\chi^2$ aux Lois de Mendel & Degrés de Liberté',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des épreuves de Mathématiques et Biostatistique Agro-Véto',
    chapitreAssocie: 'Probabilités & Tests Biologiques',
    enonceType: 'Dans un croisement dihybride F1 x F1 de drosophiles, on observe sur $n = 1600$ descendants les effectifs phénotypiques $O_1 = 925$ (sauvages), $O_2 = 290$, $O_3 = 315$, $O_4 = 70$. Tester au risque $\\alpha = 5\\%$ l\'hypothèse nulle $H_0$ selon laquelle les deux gènes sont indépendants (ségrégation mendélienne théorique $9:3:3:1$).',
    piegesImmediats: [
      'Se tromper sur le nombre de degrés de liberté (ici $k - 1 = 4 - 1 = 3$, car il y a une contrainte sur la somme des effectifs totaux).',
      'Confondre effectifs observés $O_i$ et effectifs théoriques $E_i = n p_i$.'
    ],
    redactionModele: [
      {
        etape: '1. Calcul des effectifs théoriques sous $H_0$',
        justification: 'Sous l\'hypothèse mendélienne d\'indépendance génétique des deux locus, les probabilités théoriques sont $p_1 = 9/16, p_2 = 3/16, p_3 = 3/16, p_4 = 1/16$.\nPour $n = 1600$ individus :\n- $E_1 = 1600 \\times (9/16) = 900$\n- $E_2 = 1600 \\times (3/16) = 300$\n- $E_3 = 1600 \\times (3/16) = 300$\n- $E_4 = 1600 \\times (1/16) = 100$\nTous les effectifs théoriques sont largement supérieurs à 5 (condition de Cochran validée).'
      },
      {
        etape: '2. Calcul de la statistique du $\\chi^2$',
        justification: 'La statistique de distance de Pearson vaut :\n$$\\chi_{obs}^2 = \\sum_{i=1}^4 \\frac{(O_i - E_i)^2}{E_i} = \\frac{(925-900)^2}{900} + \\frac{(290-300)^2}{300} + \\frac{(315-300)^2}{300} + \\frac{(70-100)^2}{100}$$\n$$\\chi_{obs}^2 = \\frac{625}{900} + \\frac{100}{300} + \\frac{225}{300} + \\frac{900}{100} = 0.694 + 0.333 + 0.750 + 9.000 = 10.777$$',
        formule: '\\chi_{obs}^2 \\approx 10.78'
      },
      {
        etape: '3. Règle de décision et conclusion biologique',
        justification: 'Sous $H_0$, la statistique suit asymptotiquement une loi du $\\chi^2$ à $\\nu = 4 - 1 = 3$ degrés de liberté. Pour $\\alpha = 5\\%$, le quantile tabulé est $\\chi_{crit}^2(3; 0.95) \\approx 7.81$. Comme $\\chi_{obs}^2 = 10.78 > 7.81$, **on rejette l\'hypothèse $H_0$ au seuil de $5\\%$**. Les deux gènes ne ségrègent pas indépendamment : il y a liaison génétique (linkage sur le même chromosome).'
      }
    ],
    baremeEtPointsCles: [
      'Calcul exact des effectifs attendus $E_i$ et vérification des conditions de validité (2 pts)',
      'Calcul rigoureux de $\\chi_{obs}^2$ (2.5 pts)',
      'Justification des degrés de liberté $\\nu = 3$ (1.5 pt)',
      'Conclusion biologique argumentée (rejet et liaison génétique) (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-acp-cercle',
    titre: 'Analyse en Composantes Principales (ACP) & Qualité de Représentation $\\cos^2\\theta$',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves d\'Analyse de Données Biologiques Agro-Véto',
    chapitreAssocie: 'Statistique Multivariée & Espace Euclidien',
    enonceType: 'Soit une ACP normée de $p$ variables biologiques. Rappeler comment se calcule la coordonnée d\'une variable $X_j$ sur l\'axe factoriel numéro $k$ et démontrer que la somme des carrés de ses coordonnées sur tous les axes factoriels vaut exactement 1. En déduire la signification de la métrique $\\cos^2\\theta$ pour la qualité de représentation.',
    piegesImmediats: [
      'Confondre les coordonnées des individus et les coordonnées des variables.',
      'Oublier que dans une ACP normée, la variance de chaque variable initiale centrée-réduite vaut 1.'
    ],
    redactionModele: [
      {
        etape: '1. Coordonnée de la variable sur l\'axe factoriel',
        justification: 'Dans une ACP normée, la coordonnée de la variable centrée-réduite $z_j$ sur l\'axe factoriel porté par le vecteur propre normé $u_k$ est égale au coefficient de corrélation linéaire entre la variable et la composante principale $C_k$ :\n$$G_k(j) = \\mathrm{corr}(z_j, C_k) = \\sqrt{\\lambda_k} u_{kj}$$'
      },
      {
        etape: '2. Décomposition de la variance et projection sur la sphère unité',
        justification: 'Comme la famille des composantes principales normées forme une base orthonormée de l\'espace des variables muni du produit scalaire $\\langle X, Y \\rangle = \\mathrm{cov}(X, Y)$ :\n$$\\|z_j\\|^2 = \\mathrm{Var}(z_j) = 1 = \\sum_{k=1}^p \\Big(\\mathrm{corr}(z_j, C_k)\\Big)^2 = \\sum_{k=1}^p \\big(G_k(j)\\big)^2$$\nLe vecteur représentant la variable est donc un point situé exactement à la surface de la sphère unité de $\\mathbb{R}^p$.'
      },
      {
        etape: '3. Interprétation du cercle des corrélations',
        justification: 'Lorsqu\'on projette sur le plan factoriel $(1, 2)$, le carré de la distance à l\'origine vaut $r^2 = G_1(j)^2 + G_2(j)^2 = \\cos^2\\theta_{1,2}$. Plus $r^2$ est proche de 1 (flèche touchant le cercle unité), meilleure est la restitution de la variable dans ce plan factoriel.'
      }
    ],
    baremeEtPointsCles: [
      'Relation fondamentale coordonnée = corrélation $\\sqrt{\\lambda_k} u_{kj}$ (2.5 pts)',
      'Preuve de la somme des carrés égale à 1 (2.5 pts)',
      'Interprétation géométrique du $\\cos^2$ et proximité du cercle unité (3 pts)'
    ]
  },
  {
    id: 'must-bcpst-darcy-hydrogeologie',
    titre: 'Loi de Darcy & Écoulement Stationnaire dans un Aquifère Poreux',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves du Concours G2E (Géologie-Eau-Environnement)',
    chapitreAssocie: 'Écoulement des Fluides & Géosciences',
    enonceType: 'Énoncer la loi de Darcy pour l\'écoulement 1D d\'une nappe phréatique à travers un milieu poreux homogène et isotrope de conductivité hydraulique $K$ ($m/s$). Établir l\'équation différentielle de Dupuit régissant la hauteur de la surface libre $h(x)$ d\'une nappe libre reposant sur un substratum imperméable horizontal avec une recharge pluvieuse surfacique constante $W$ ($m/s$).',
    piegesImmediats: [
      'Oublier le signe moins dans la loi de Darcy vectorielle $\\vec{v} = -K \\vec{\\nabla} h$.',
      'Confondre vitesse de filtration de Darcy $v$ (débit par unité de surface totale) et vitesse réelle interstitielle de l\'eau dans les pores $v_r = v / \\omega$ (où $\\omega$ est la porosité efficace).'
    ],
    redactionModele: [
      {
        etape: '1. Énoncé de la loi de Darcy et débit par tranche de nappe',
        justification: 'La vitesse de Darcy (vitesse apparente de filtration) est proportionnelle au gradient de charge hydraulique $h(x)$ :\n$$v_x = -K \\frac{\\mathrm{d}h}{\\mathrm{d}x}$$\nPour une largeur unité selon $y$, la section d\'écoulement vaut $h(x) \\times 1$. Le débit volumique transitant en $x$ s\'écrit donc $q(x) = v_x h(x) = -K h \\frac{\\mathrm{d}h}{\\mathrm{d}x} = -\\frac{K}{2} \\frac{\\mathrm{d}(h^2)}{\\mathrm{d}x}$.'
      },
      {
        etape: '2. Bilan de matière sur une tranche d\'aquifère $[x, x + \\mathrm{d}x]$',
        justification: 'En régime stationnaire, la variation de débit entre l\'entrée et la sortie est égale à l\'apport d\'eau de pluie d\'infiltration $W \\,\\mathrm{d}x$ :\n$$q(x + \\mathrm{d}x) - q(x) = W \\,\\mathrm{d}x \\implies \\frac{\\mathrm{d}q}{\\mathrm{d}x} = W$$'
      },
      {
        etape: '3. Équation de Dupuit et solution parabolique',
        justification: 'En combinant les deux relations :\n$$-\\frac{K}{2} \\frac{\\mathrm{d}^2(h^2)}{\\mathrm{d}x^2} = W \\iff \\frac{\\mathrm{d}^2(h^2)}{\\mathrm{d}x^2} = -\\frac{2W}{K}$$\nAprès deux intégrations successives, $h^2(x) = -\\frac{W}{K} x^2 + C_1 x + C_2$. La forme de la surface de la nappe phréatique est une ellipse/parabole bombée au centre (dôme piézométrique).',
        formule: 'h^2(x) = -\\frac{W}{K} x^2 + C_1 x + C_2'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé de la loi de Darcy avec gradient piézométrique (2 pts)',
      'Débit par tranche $q = -K h \\mathrm{d}h/\\mathrm{d}x$ (2 pts)',
      'Bilan de masse avec infiltration $W$ (2 pts)',
      'Obtention de l\'équation de Dupuit en $h^2$ (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-effets-serre-bilan-terre',
    titre: 'Modèle à Deux Couches de l\'Effet de Serre & Température d\'Équilibre Terrestre',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des épreuves de Physique du Climat et Géosciences G2E / Agro',
    chapitreAssocie: 'Transferts Thermiques & Rayonnement',
    enonceType: 'On modélise l\'atmosphère terrestre par une couche isotherme à température $T_a$, transparente au rayonnement solaire visible mais opaque (corps noir parfait) au rayonnement infrarouge tellurique. La Terre a un albédo $A = 0.30$ et reçoit la constante solaire $F_0 = 1361\\text{ W/m}^2$. Établir le système des bilans radiatifs et calculer la température de surface $T_s$.',
    piegesImmediats: [
      'Oublier le facteur 4 de répartition de la constante solaire sur toute la sphère : flux incident moyen $F_s = \\frac{F_0 (1-A)}{4}$.',
      'Oublier que la couche atmosphérique rayonne à la fois vers le haut (vers l\'espace) et vers le bas (vers la surface du sol).'
    ],
    redactionModele: [
      {
        etape: '1. Calcul du flux solaire absorbé moyen par unité de surface',
        justification: 'La section efficace d\'interception de la Terre est le disque $\\pi R_T^2$, tandis que la surface d\'émission est la sphère $4\\pi R_T^2$. Le flux solaire net absorbé par la surface est :\n$$F_{abs} = \\frac{\\pi R_T^2 (1 - A) F_0}{4\\pi R_T^2} = \\frac{(1 - A) F_0}{4} = \\frac{0.70 \\times 1361}{4} \\approx 238.2\\text{ W/m}^2$$'
      },
      {
        etape: '2. Écriture des bilans radiatifs en régime stationnaire (Stefan-Boltzmann)',
        justification: '- Bilan global pour le système Terre + Atmosphère au sommet de l\'atmosphère :\n$$F_{abs} = \\sigma T_a^4$$\n- Bilan radiatif pour la couche atmosphérique (qui réémet $\\sigma T_a^4$ vers le haut et $\\sigma T_a^4$ vers le bas) :\n$$\\sigma T_s^4 = 2 \\sigma T_a^4$$'
      },
      {
        etape: '3. Déduction de la température de surface $T_s$',
        justification: 'En combinant les deux équations :\n$$\\sigma T_s^4 = 2 F_{abs} \\implies T_s = \\left( \\frac{2 F_{abs}}{\\sigma} \\right)^{1/4}$$\nAvec $\\sigma = 5.67 \\times 10^{-8}\\text{ W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-4}$ :\n$$T_s = \\left( \\frac{2 \\times 238.2}{5.67 \\times 10^{-8}} \\right)^{1/4} = (8.402 \\times 10^9)^{1/4} \\approx 302.7\\text{ K} \\approx +29.7^\\circ\\text{C}$$',
        formule: 'T_s = 2^{1/4} T_{sans\\,effet\\,de\\,serre} = 2^{1/4} \\times 255\\text{ K} \\approx 303\\text{ K}'
      }
    ],
    baremeEtPointsCles: [
      'Facteur géométrique 4 et calcul de $F_{abs} = 238\\text{ W/m}^2$ (2.5 pts)',
      'Double émission atmosphérique haut/bas (2.5 pts)',
      'Relation $T_s = 2^{1/4} T_a$ (1.5 pt)',
      'Application numérique rigoureuse (1.5 pt)'
    ]
  },
  {
    id: 'must-bcpst-pourbaix-fer',
    titre: 'Diagramme E-pH du Fer en Milieu Biologique & Domaine de Prédominance de $Fe^{3+}, Fe^{2+}, Fe(OH)_3$',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves de Chimie Agro-Véto / G2E',
    chapitreAssocie: 'Oxydoréduction & Diagrammes E-pH',
    enonceType: 'Tracer la frontière entre les espèces solubles $Fe^{3+}$ et $Fe^{2+}$ à concentration de tracé $C_t = 10^{-2}\\text{ M}$ ($E^\\circ(Fe^{3+}/Fe^{2+}) = 0.77\\text{ V}$). Déterminer le pH d\'apparition du précipité de rouille $Fe(OH)_3(s)$ ($pK_s = 38.0$) et donner la pente de la frontière $Fe(OH)_3(s) / Fe^{2+}$.',
    piegesImmediats: [
      'Oublier d\'équilibrer les protons $H^+$ et les molécules d\'eau $H_2O$ dans la demi-équation rédox du précipité.',
      'Confondre la pente $-0.06\\text{ V/pH}$ (échange de 1 proton par électron) avec $-0.18\\text{ V/pH}$ (échange de 3 protons par électron).'
    ],
    redactionModele: [
      {
        etape: '1. Frontière $Fe^{3+} / Fe^{2+}$ en solution acide',
        justification: 'Demi-équation rédox : $Fe^{3+} + e^- = Fe^{2+}$. D\'après la formule de Nernst à $25^\\circ\\text{C}$ :\n$$E = E^\\circ + 0.059 \\log_{10}\\left( \\frac{[Fe^{3+}]}{[Fe^{2+}]} \\right)$$\nSur la frontière de prédominance $[Fe^{3+}] = [Fe^{2+}]$, le potentiel est indépendant du pH : droite horizontale $E = E^\\circ = 0.77\\text{ V}$.'
      },
      {
        etape: '2. Précipitation de l\'hydroxyde ferrique $Fe(OH)_3(s)$',
        justification: 'Produit de solubilité : $K_s = [Fe^{3+}][HO^-]^3 = 10^{-38}$. Avec $[HO^-] = K_e / [H_3O^+]$ :\n$$[Fe^{3+}] = \\frac{K_s [H_3O^+]^3}{K_e^3} = 10^{-38 + 42} [H_3O^+]^3 = 10^4 [H_3O^+]^3$$\nÀ la concentration de tracé $[Fe^{3+}] = C_t = 10^{-2}\\text{ M}$ :\n$$10^{-2} = 10^4 \\cdot 10^{-3 pH} \\implies 3 pH = 6 \\implies pH = 2.0$$'
      },
      {
        etape: '3. Frontière $Fe(OH)_3(s) / Fe^{2+}$',
        justification: 'Demi-équation avec le solide précipité :\n$$Fe(OH)_3(s) + 3H^+ + e^- = Fe^{2+} + 3H_2O$$\nFormule de Nernst sur la frontière avec $[Fe^{2+}] = C_t = 10^{-2}\\text{ M}$ :\n$$E = E^\\circ\' - 0.059 \\times 3 pH - 0.059 \\log_{10}(C_t)$$\nLa pente de cette frontière rédox vaut rigoureusement $-3 \\times 0.059 = -0.177\\text{ V/pH}$ (environ $-0.18\\text{ V/pH}$).',
        formule: '\\frac{\\mathrm{d}E}{\\mathrm{d}pH} = -0.059 \\times \\frac{p}{n} = -0.18\\text{ V/unité pH}'
      }
    ],
    baremeEtPointsCles: [
      'Frontière horizontale $0.77\\text{ V}$ justifiée par Nernst (2 pts)',
      'Calcul du pH de précipitation $pH = 2.0$ (2 pts)',
      'Demi-équation complète avec $3H^+$ et $1e^-$ (2 pts)',
      'Pente exacte $-0.18\\text{ V/pH}$ (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-vant-hoff-proteine',
    titre: 'Isotherme de van \'t Hoff & Enthalpie de Dénaturation Thermique d\'une Protéine',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Thermodynamique Chimique Agro-Véto',
    chapitreAssocie: 'Thermodynamique Chimique & Équilibres',
    enonceType: 'Soit la transition de dénaturation réversible d\'une enzyme : $\\text{P}_{repliée} \\rightleftharpoons \\text{P}_{dénaturée}$ de constante d\'équilibre $K(T)$. Établir la relation de van \'t Hoff reliant $\\frac{\\mathrm{d}\\ln K}{\\mathrm{d}T}$ à $\\Delta_r H^\\circ$. Sachant qu\'à la température de demi-dénaturation $T_m = 65^\\circ\\text{C}$ la fraction dénaturée vaut $50\\%$, calculer $\\Delta_r G^\\circ(T_m)$ et exprimer la constante au voisinage de $T_m$.',
    piegesImmediats: [
      'Oublier de convertir les degrés Celsius en Kelvins ($T_m = 65 + 273.15 = 338.15\\text{ K}$).',
      'Confondre constante d\'équilibre $K = [P_d]/[P_r]$ avec la fraction molaire.'
    ],
    redactionModele: [
      {
        etape: '1. Établissement de la relation de van \'t Hoff',
        justification: 'Par définition de l\'énergie libre standard de réaction $\\Delta_r G^\\circ = -R T \\ln K = \\Delta_r H^\\circ - T \\Delta_r S^\\circ$, on a $\\ln K = -\\frac{\\Delta_r H^\\circ}{R T} + \\frac{\\Delta_r S^\\circ}{R}$. En dérivant par rapport à $T$ dans l\'approximation d\'Ellingham ($\\Delta_r H^\\circ, \\Delta_r S^\\circ$ constants) :\n$$\\frac{\\mathrm{d}\\ln K}{\\mathrm{d}T} = \\frac{\\Delta_r H^\\circ}{R T^2}$$'
      },
      {
        etape: '2. État à la température de fusion $T_m$',
        justification: 'À la température de transition $T_m$, la moitié des protéines est dénaturée : $[P_d] = [P_r] \\implies K(T_m) = 1$. L\'enthalpie libre standard de dénaturation s\'annule donc rigoureusement :\n$$\\Delta_r G^\\circ(T_m) = -R T_m \\ln(1) = 0\\text{ J/mol} \\implies \\Delta_r H^\\circ = T_m \\Delta_r S^\\circ$$'
      },
      {
        etape: '3. Intégration locale',
        justification: 'En intégrant van \'t Hoff entre $T_m$ et une température $T$ proche :\n$$\\ln K(T) = -\\frac{\\Delta_r H^\\circ}{R} \\left( \\frac{1}{T} - \\frac{1}{T_m} \\right) = \\frac{\\Delta_r H^\\circ}{R T_m^2} (T - T_m)$$\nComme la dénaturation thermique est un processus endothermique ($\\Delta_r H^\\circ > 0$), $K(T)$ explose exponentiellement pour $T > T_m$.',
        formule: '\\ln K(T) \\approx \\frac{\\Delta_r H^\\circ}{R T_m^2} (T - T_m)'
      }
    ],
    baremeEtPointsCles: [
      'Démonstration de la loi de van \'t Hoff (2.5 pts)',
      'Déduction de $K(T_m)=1$ et $\\Delta_r G^\\circ(T_m)=0$ (2.5 pts)',
      'Caractère endothermique et pente positive en $1/T$ (2 pts)',
      'Interprétation de la coopérativité de la transition thermique (1 pt)'
    ]
  },
  {
    id: 'must-bcpst-gradient-electrosmotique-atp',
    titre: 'Force Proton-Motrice & Synthèse d\'ATP selon la Théorie Chimiosmotique de Mitchell',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des oraux et écrits ENS BCPST / Agro',
    chapitreAssocie: 'Transports Transmembranaires & Énergétique Cellulaire',
    enonceType: 'Dans la membrane mitochondriale interne, la chaîne respiratoire pompe des protons de la matrice vers l\'espace intermembranaire. Établir l\'expression du potentiel électrochimique transmembranaire du proton $\\Delta \\mu_{H^+} = \\mu_{H^+}^{ext} - \\mu_{H^+}^{int}$ et en déduire l\'expression de la force proton-motrice $\\Delta p = -\\frac{\\Delta \\mu_{H^+}}{F}$ en volts en fonction du potentiel de membrane $\\Delta\\Psi$ et du gradient de pH $\\Delta pH$.',
    piegesImmediats: [
      'Erreur de signe classique sur $\\Delta pH = pH_{ext} - pH_{int}$ (l\'espace intermembranaire est plus acide, donc $pH_{ext} < pH_{int}$).',
      'Confondre Joule/mol (potentiel électrochimique) et Volt (force proton-motrice).'
    ],
    redactionModele: [
      {
        etape: '1. Écriture du potentiel électrochimique du proton',
        justification: 'Le potentiel électrochimique d\'un ion de charge $+e$ ($z=1$) s\'écrit :\n$$\\mu_{H^+} = \\mu_{H^+}^\\circ + R T \\ln[H^+] + F \\Psi$$\nLa différence entre l\'extérieur et la matrice mitochondriale interne vaut :\n$$\\Delta \\mu_{H^+} = R T \\ln\\left( \\frac{[H^+]_{ext}}{[H^+]_{int}} \\right) + F (\\Psi_{ext} - \\Psi_{int}) = -2.303 R T (pH_{ext} - pH_{int}) + F \\Delta\\Psi$$'
      },
      {
        etape: '2. Définition de la force proton-motrice de Mitchell',
        justification: 'En divisant par la constante de Faraday $F$ et en inversant le signe pour définir le travail moteur d\'entrée spontanée du proton vers la matrice :\n$$\\Delta p = -\\frac{\\Delta \\mu_{H^+}}{F} = \\Delta\\Psi - \\frac{2.303 R T}{F} \\Delta pH$$\nÀ $37^\\circ\\text{C}$ ($310\\text{ K}$), $\\frac{2.303 R T}{F} \\approx 0.0615\\text{ V} \\approx 60\\text{ mV}$.',
        formule: '\\Delta p = \\Delta\\Psi - 60\\text{ mV} \\times \\Delta pH'
      },
      {
        etape: '3. Application numérique mitochondriale',
        justification: 'Typiquement, $\\Delta\\Psi = \\Psi_{ext} - \\Psi_{int} \\approx +150\\text{ mV}$ et $\\Delta pH = pH_{ext} - pH_{int} \\approx 7.0 - 7.8 = -0.8$.\n$$\\Delta p = 150\\text{ mV} - 60\\text{ mV} \\times (-0.8) = 150\\text{ mV} + 48\\text{ mV} \\approx 200\\text{ mV}$$\nCette tension de $0.2\\text{ V}$ sur une membrane de $5\\text{ nm}$ représente un champ électrique colossal de $40\\text{ MV/m}$, actionnant le rotor de l\'ATP-synthase.'
      }
    ],
    baremeEtPointsCles: [
      'Définition thermodynamique du potentiel électrochimique $\\mu + F\\Psi$ (2.5 pts)',
      'Conversion du terme de concentration en différence de pH (2 pts)',
      'Définition de la force proton-motrice $\\Delta p$ en volts (2 pts)',
      'Application numérique avec les deux composantes électrique et chimique (1.5 pt)'
    ]
  },
  {
    id: 'must-bcpst-diffusion-krogh',
    titre: 'Modèle Cylindrique de Krogh pour la Diffusion d\'Oxygène autour d\'un Capillaire',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Phénomènes de Transfert Agro-Véto / ENS',
    chapitreAssocie: 'Diffusion & Transports Transmembranaires',
    enonceType: 'Un capillaire sanguin cylindrique de rayon $R_c$ apporte de l\'oxygène à concentration pariétale constante $C_0$ à un manchon de tissu de rayon externe $R_t$. Le tissu consomme l\'oxygène à un taux volumique métabolique constant $Q$ ($mol\\cdot m^{-3}\\cdot s^{-1}$). En régime stationnaire, établir l\'équation différentielle vérifiée par $C(r)$ et donner l\'expression du profil de concentration.',
    piegesImmediats: [
      'Oublier le terme de divergence en coordonnées cylindriques : $\\Delta C = \\frac{1}{r} \\frac{\\mathrm{d}}{\\mathrm{d}r}\\left(r \\frac{\\mathrm{d}C}{\\mathrm{d}r}\\right)$.',
      'Confondre la condition d\'imperméabilité externe $\\left.\\frac{\\mathrm{d}C}{\\mathrm{d}r}\\right|_{R_t} = 0$ avec une concentration nulle.'
    ],
    redactionModele: [
      {
        etape: '1. Bilan de matière en régime stationnaire avec terme source/puits',
        justification: 'D\'après la loi de conservation avec diffusion de Fick $\\vec{j}_m = -D \\vec{\\nabla} C$ et terme de consommation volumique $Q$ :\n$$\\frac{\\partial C}{\\partial t} = D \\Delta C - Q = 0 \\implies \\Delta C = \\frac{Q}{D}$$'
      },
      {
        etape: '2. Écriture du laplacien en coordonnées cylindriques',
        justification: 'Par symétrie axiale et invariance selon $z$ et $\\theta$, $C = C(r)$ :\n$$\\frac{1}{r} \\frac{\\mathrm{d}}{\\mathrm{d}r}\\left( r \\frac{\\mathrm{d}C}{\\mathrm{d}r} \\right) = \\frac{Q}{D} \\implies \\frac{\\mathrm{d}}{\\mathrm{d}r}\\left( r \\frac{\\mathrm{d}C}{\\mathrm{d}r} \\right) = \\frac{Q}{D} r$$'
      },
      {
        etape: '3. Deux intégrations successives et conditions aux limites',
        justification: 'Première intégration : $r \\frac{\\mathrm{d}C}{\\mathrm{d}r} = \\frac{Q}{2D} r^2 + A$. À la frontière externe $r = R_t$, le flux est nul car les manchons voisins se touchent : $\\left.\\frac{\\mathrm{d}C}{\\mathrm{d}r}\\right|_{R_t} = 0 \\implies A = -\\frac{Q R_t^2}{2D}$.\nDeuxième intégration avec $C(R_c) = C_0$ :',
        formule: 'C(r) = C_0 - \\frac{Q}{4D}(r^2 - R_c^2) + \\frac{Q R_t^2}{2D} \\ln\\left( \\frac{r}{R_c} \\right)'
      }
    ],
    baremeEtPointsCles: [
      'Équation locale de conservation avec puits réactionnel $D\\Delta C = Q$ (2.5 pts)',
      'Expression du laplacien cylindrique 1D (2 pts)',
      'Prise en compte de la condition limite de flux nul en $R_t$ (2 pts)',
      'Formule de Krogh finale (1.5 pt)'
    ]
  },
  {
    id: 'must-bcpst-cristallo-perovskite',
    titre: 'Structure Cristalline Pérovskite $CaTiO_3$ & Taux de Compacité',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des épreuves de Cristallographie G2E / Agro',
    chapitreAssocie: 'Cristallographie & Structure de la Matière',
    enonceType: 'La maille cubique élémentaire de la pérovskite $CaTiO_3$ comprend les ions $Ca^{2+}$ aux sommets, les ions $Ti^{4+}$ au centre du cube, et les ions $O^{2-}$ au centre de chaque face. Déterminer la population de la maille, la coordinence des différents ions et la relation de contact entre ions le long de l\'arête.',
    piegesImmediats: [
      'Se tromper dans la quote-part des atomes sur les faces ($1/2$) et sur les sommets ($1/8$).',
      'Confondre la coordinence de l\'oxygène vis-à-vis du titane avec sa coordinence globale.'
    ],
    redactionModele: [
      {
        etape: '1. Décompte de la population de la maille',
        justification: '- $Ca^{2+}$ (sommets) : $8 \\times \\frac{1}{8} = 1$.\n- $Ti^{4+}$ (centre du cube) : $1 \\times 1 = 1$.\n- $O^{2-}$ (centres des faces) : $6 \\times \\frac{1}{2} = 3$.\nLa formule stœchiométrique déduite de la maille est bien $CaTiO_3$ ($Z = 1$). La neutralité électrique est rigoureusement vérifiée : $+2 + 4 + 3(-2) = 0$.'
      },
      {
        etape: '2. Coordinence des ions',
        justification: '- Le cation $Ti^{4+}$ central est entouré des 6 anions oxygène $O^{2-}$ au centre des faces : **octaèdre $TiO_6$ (coordinence 6)**.\n- L\'ion $Ca^{2+}$ au sommet est équidistant de 12 oxygènes au centre des faces des mailles adjacentes : **coordinence 12**.\n- L\'ion $O^{2-}$ est entouré de 2 cations $Ti^{4+}$ alignés (coordinence linéaire 2 par rapport à Ti) et de 4 $Ca^{2+}$ dans un plan.'
      },
      {
        etape: '3. Condition de contact le long de l\'arête',
        justification: 'Le long de l\'arête du cube de paramètre $a$, un oxygène est situé au milieu entre deux sommets occupés par $Ca^{2+}$. Le contact $Ti - O$ a lieu sur la demi-arête via le centre de face :',
        formule: 'a = 2 (r_{Ti^{4+}} + r_{O^{2-}})'
      }
    ],
    baremeEtPointsCles: [
      'Décompte rigoureux des atomes et neutralité (2.5 pts)',
      'Détermination des coordinences (6 pour Ti, 12 pour Ca) (2.5 pts)',
      'Contact anion-cation et relation liant $a$ aux rayons ioniques (3 pts)'
    ]
  },
  {
    id: 'must-bcpst-ultracentrifugation-svedberg',
    titre: 'Équilibre de Sédimentation par Ultracentrifugation & Équation de Svedberg',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des concours ENS BCPST / Agro',
    chapitreAssocie: 'Mécanique du Solide & Séparation Biologique',
    enonceType: 'Une macromolécule biologique de masse molaire $M$, de volume molaire partiel $\\bar{v}$ et de coefficient de friction $\\zeta$ tourne à vitesse angulaire $\\omega$ dans une ultracentrifugeuse à la distance $r$ de l\'axe. Établir l\'expression de la vitesse limite de sédimentation $v_s = \\frac{\\mathrm{d}r}{\\mathrm{d}t}$ et en déduire le coefficient de sédimentation de Svedberg $S = v_s / (\\omega^2 r)$.',
    piegesImmediats: [
      'Oublier la poussée d\'Archimède centrifuge s\'exerçant sur la macromolécule immergée dans le solvant de masse volumique $\\rho_s$.',
      'Confondre vitesse angulaire en rad/s avec la vitesse de rotation en tours/min ($1\\text{ tr/min} = \\frac{2\\pi}{60}\\text{ rad/s}$).'
    ],
    redactionModele: [
      {
        etape: '1. Bilan des forces dans le référentiel tournant',
        justification: 'Dans le référentiel lié au rotor tournant à $\\omega$ :\n- Force centrifuge d\'inertie : $F_{cf} = m \\omega^2 r$.\n- Poussée d\'Archimède centrifuge : $F_{Arch} = -m_d \\omega^2 r = -m \\bar{v} \\rho_s \\omega^2 r$ où $\\bar{v}$ est le volume spécifique ($m^3/kg$).\n- Force de traînée visqueuse de Stokes : $F_{frot} = -\\zeta v_s$.'
      },
      {
        etape: '2. Vitesse limite stationnaire',
        justification: 'En régime limite atteint instantanément à faible nombre de Reynolds :\n$$m(1 - \\bar{v}\\rho_s) \\omega^2 r - \\zeta v_s = 0 \\implies v_s = \\frac{m(1 - \\bar{v}\\rho_s)}{\\zeta} \\omega^2 r$$'
      },
      {
        etape: '3. Définition du coefficient de Svedberg',
        justification: 'Le coefficient de Svedberg est le rapport de la vitesse sur l\'accélération centrifuge :\n$$S = \\frac{v_s}{\\omega^2 r} = \\frac{m(1 - \\bar{v}\\rho_s)}{\\zeta} = \\frac{M (1 - \\bar{v}\\rho_s)}{\\mathcal{N}_A \\zeta}$$\nAvec la relation d\'Einstein $\\zeta = \\frac{R T}{\\mathcal{N}_A D}$, on obtient l\'équation canonique de Svedberg reliant masse molaire, sédimentation et diffusion :',
        formule: 'M = \\frac{R T S}{D (1 - \\bar{v}\\rho_s)}'
      }
    ],
    baremeEtPointsCles: [
      'Bilan des forces en référentiel tournant avec poussée d\'Archimède (2.5 pts)',
      'Définition exacte du Svedberg ($1\\text{ S} = 10^{-13}\\text{ s}$) (2 pts)',
      'Combinaison avec la relation d\'Einstein pour obtenir l\'équation de Svedberg (3.5 pts)'
    ]
  },
  {
    id: 'must-bcpst-snell-descartes-refractometre',
    titre: 'Angle Limite de Réfraction Totale & Principe du Réfractomètre d\'Abbe',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des oraux et travaux pratiques G2E / Agro',
    chapitreAssocie: 'Optique Géométrique',
    enonceType: 'Soit un prisme de verre d\'indice élevé $N$ et d\'angle au sommet $A = 60^\\circ$. Une goutte de liquide biologique d\'indice inconnu $n < N$ est déposée sur sa face d\'entrée. La face est éclairée en incidence rasante ($i_1 = 90^\\circ$). Déterminer l\'angle d\'émergence limite $i\'_2$ en fonction de $n, N$ et $A$. Expliquer comment la ligne de séparation ombre/lumière permet de doser la teneur en sucre ou protéines d\'un échantillon.',
    piegesImmediats: [
      'Inverser les indices dans la loi de Descartes à l\'entrée $n \\sin 90^\\circ = N \\sin r_1$.',
      'Oublier la condition géométrique sur le prisme $r_1 + r_2 = A$.'
    ],
    redactionModele: [
      {
        etape: '1. Réfraction en incidence rasante sur la première face',
        justification: 'Pour un rayon rasant dans le liquide ($i_1 = 90^\\circ$), la réfraction dans le prisme d\'indice $N > n$ donne l\'angle de réfraction critique $r_1$ :\n$$n \\sin(90^\\circ) = N \\sin(r_1) \\implies \\sin(r_1) = \\frac{n}{N}$$'
      },
      {
        etape: '2. Traversée du prisme et émergence sur la seconde face',
        justification: 'La relation géométrique du prisme impose $r_2 = A - r_1$. Sur la face de sortie dans l\'air ($n_{air} = 1$) :\n$$\\sin(i_2) = N \\sin(r_2) = N \\sin(A - r_1) = N (\\sin A \\cos r_1 - \\cos A \\sin r_1)$$\nComme $\\sin r_1 = n/N$ et $\\cos r_1 = \\sqrt{1 - n^2/N^2}$ :\n$$\\sin(i_2) = \\sin A \\sqrt{N^2 - n^2} - n \\cos A$$',
        formule: 'n = \\sin A \\sqrt{N^2 - \\sin^2 i_2} - \\cos A \\sin i_2'
      },
      {
        etape: '3. Application analytique biologique',
        justification: 'Aucun rayon ne peut émerger sous un angle supérieur à $i_2$ : le champ d\'observation présente une frontière nette séparant une zone brillante d\'une zone sombre. L\'indice de réfraction $n$ varie linéairement avec la concentration de soluté (échelle de Brix pour les sucres), permettant une lecture directe et ultra-rapide.'
      }
    ],
    baremeEtPointsCles: [
      'Condition d\'incidence rasante et $\\sin r_1 = n/N$ (2.5 pts)',
      'Relations du prisme $r_1 + r_2 = A$ et $\\sin i_2 = N \\sin r_2$ (2.5 pts)',
      'Formule liant $n$ à $i_2$ (2 pts)',
      'Interprétation de la ligne de partage ombre/lumière (1 pt)'
    ]
  },
  {
    id: 'must-bcpst-shannon-ecg',
    titre: 'Théorème d\'Échantillonnage de Shannon-Nyquist & Enregistrement Électrophysiologique (ECG/EEG)',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~65% des épreuves de Traitement du Signal Biologique Agro / Mines',
    chapitreAssocie: 'Signaux Périodiques & Électronique Médicale',
    enonceType: 'Un signal électrocardiographique (ECG) possède un spectre fréquentiel utile s\'étendant jusqu\'à $f_{max} = 150\\text{ Hz}$. Énoncer le théorème de Shannon. Quelle est la fréquence d\'échantillonnage minimale $f_e$ à respecter ? Quel est le rôle impératif du filtre analogique passe-bas inséré avant le convertisseur analogique-numérique (CAN) ?',
    piegesImmediats: [
      'Confondre fréquence d\'échantillonnage $f_e$ et période d\'échantillonnage $T_e = 1/f_e$.',
      'Croire qu\'un filtre numérique post-numérisation peut éliminer le repliement spectral (l\'aliasing une fois créé est irréversible !).'
    ],
    redactionModele: [
      {
        etape: '1. Énoncé du théorème d\'échantillonnage de Shannon-Nyquist',
        justification: 'Pour qu\'un signal à spectre borné par $f_{max}$ puisse être fidèlement et intégralement reconstruit sans perte d\'information à partir de ses échantillons discrets, la fréquence d\'échantillonnage $f_e$ doit être strictement supérieure au double de la fréquence maximale contenue dans le signal :\n$$f_e > 2 f_{max}$$'
      },
      {
        etape: '2. Application numérique à l\'ECG',
        justification: 'Pour $f_{max} = 150\\text{ Hz}$ :\n$$f_{e, min} = 2 \\times 150 = 300\\text{ Hz}$$\nEn pratique médicale, on choisit une marge de sécurité confortable : $f_e = 500\\text{ Hz}$ ou $1000\\text{ Hz}$ pour bien restituer la pointe rapide du complexe QRS.'
      },
      {
        etape: '3. Rôle du filtre analogique anti-repliement (anti-aliasing)',
        justification: 'L\'échantillonnage temporel périodique périodise le spectre du signal à toutes les fréquences $k f_e$. Si le signal d\'entrée contient des bruits parasites haute fréquence (ondes radio, harmoniques à $50\\text{ Hz}$, contractions musculaires EMG à $300\\text{ Hz}$), ces composantes se replient dans la bande utile $[0, f_e/2]$ et se confondent irrémédiablement avec le signal cardiaque. Le filtre passe-bas anti-repliement placé en amont du CAN atténue drastiquement toute fréquence supérieure à $f_e/2$.',
        formule: 'f_e \\ge 2 f_{max} \\quad \\text{et} \\quad f_{coupure\\,filtre} \\le \\frac{f_e}{2}'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé exact du théorème de Shannon $f_e > 2 f_{max}$ (2.5 pts)',
      'Calcul numérique de $f_e$ minimale (1.5 pt)',
      'Mécanisme mathématique de périodisation spectrale et aliasing (2 pts)',
      'Nécessité absolue de filtrage analogique pré-échantillonnage (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-acides-amines-pi',
    titre: 'Calcul du Point Isoélectrique (pHi) d\'un Acide Aminé à Chaîne Ionisable',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~85% des épreuves de Chimie Organique et Séparation Agro-Véto',
    chapitreAssocie: 'Stéréochimie & Chimie des Acides Aminés',
    enonceType: 'Soit l\'acide glutamique, acide aminé dicarboxylique possédant trois constantes d\'acidité : $pK_{a1} = 2.19$ ($\\alpha$-COOH), $pK_{a2} = 4.25$ ($\\gamma$-COOH de la chaîne latérale), et $pK_{a3} = 9.67$ ($\\alpha$-$\\text{NH}_3^+$). Écrire la suite des équilibres acido-basiques de déprotonation successifs, identifier l\'espèce zwitterionique globale neutre, et calculer son point isoélectrique $pHi$.',
    piegesImmediats: [
      'Prendre la moyenne des trois $pK_a$ au lieu d\'encadrer strictement l\'espèce neutre.',
      'Confondre l\'acidité du groupement carboxylique en $\\alpha$ (plus acide car sous l\'effet inducteur attracteur de $-\\text{NH}_3^+$) avec celle de la chaîne latérale $\\gamma$.'
    ],
    redactionModele: [
      {
        etape: '1. Écriture des formes ioniques successives',
        justification: '- Forme cationique $H_3A^+$ (charge $+1$) à $pH < 2.19$.\n- Forme zwitterionique $H_2A$ (charge globale $0$) entre $pK_{a1}$ et $pK_{a2}$ :\n$$HOOC-(CH_2)_2-CH(NH_3^+)-COO^-$$\n- Forme monoanionique $HA^-$ (charge $-1$) entre $pK_{a2}$ et $pK_{a3}$.\n- Forme dianionique $A^{2-}$ (charge $-2$) à $pH > 9.67$.'
      },
      {
        etape: '2. Encadrement de l\'espèce zwitterionique neutre',
        justification: 'L\'espèce électriquement neutre $H_2A$ est formée par déprotonation de $H_3A^+$ ($K_{a1} = \\frac{[H_2A][H^+]}{[H_3A^+]}$) et se déprotone en $HA^-$ ($K_{a2} = \\frac{[HA^-][H^+]}{[H_2A]}$).'
      },
      {
        etape: '3. Calcul rigoureux du point isoélectrique',
        justification: 'Au point isoélectrique $pHi$, la concentration des espèces chargées positivement égale celle des espèces chargées négativement : $[H_3A^+] = [HA^-] + 2[A^{2-}] \\approx [HA^-]$.\n$$\\frac{[H_2A][H^+]}{K_{a1}} = \\frac{K_{a2}[H_2A]}{[H^+]} \\implies [H^+]^2 = K_{a1} K_{a2}$$\nEn prenant $-\\log_{10}$ des deux membres :',
        formule: 'pHi = \\frac{pK_{a1} + pK_{a2}}{2} = \\frac{2.19 + 4.25}{2} = 3.22'
      }
    ],
    baremeEtPointsCles: [
      'Attribution correcte des 3 $pK_a$ aux fonctions correspondantes (2.5 pts)',
      'Identification de l\'espèce électriquement neutre $H_2A$ (2 pts)',
      'Démonstration rigoureuse de la formule de moyenne des deux $pK_a$ encadrants (2.5 pts)',
      'Calcul numérique exact $pHi = 3.22$ (1 pt)'
    ]
  },
  {
    id: 'must-bcpst-chemostat-microbio',
    titre: 'Bilan de Matière en Culture Continue (Bioréacteur Chemostat)',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Modélisation Agro-Véto',
    chapitreAssocie: 'Équations Différentielles & Biotechnologies',
    enonceType: 'Dans un bioréacteur agité de volume constant $V$ alimenté en continu avec un débit volumique $D_v$ de substrat à concentration $S_0$, la biomasse microbienne $X$ croît selon une cinétique de Monod $\\mu(S) = \\frac{\\mu_{max} S}{K_s + S}$. Écrire les équations différentielles de bilan pour la biomasse $X(t)$ et le substrat $S(t)$. En régime stationnaire, déterminer la concentration de substrat résiduel $S^*$ et exprimer le taux de dilution critique de lessivage (wash-out).',
    piegesImmediats: [
      'Confondre le débit volumique $D_v$ ($m^3/s$) avec le taux de dilution $D = D_v / V$ ($s^{-1}$).',
      'Oublier le terme de rendement de conversion biomasse/substrat $Y_{X/S}$.'
    ],
    redactionModele: [
      {
        etape: '1. Établissement des équations de bilan massique',
        justification: 'En posant le taux de dilution $D = D_v / V$ :\n- Bilan biomasse (entrée stérile $X_{in} = 0$) :\n$$\\frac{\\mathrm{d}X}{\\mathrm{d}t} = \\mu(S) X - D X = (\\mu(S) - D) X$$\n- Bilan substrat limitant :\n$$\\frac{\\mathrm{d}S}{\\mathrm{d}t} = D(S_0 - S) - \\frac{\\mu(S)}{Y_{X/S}} X$$'
      },
      {
        etape: '2. Résolution en régime stationnaire',
        justification: 'En régime stationnaire avec présence de biomasse ($X^* > 0$) :\n$$\\frac{\\mathrm{d}X}{\\mathrm{d}t} = 0 \\implies \\mu(S^*) = D$$\nAvec la loi de Monod $\\frac{\\mu_{max} S^*}{K_s + S^*} = D$, on isole $S^*$ indépendamment de $S_0$ :\n$$S^* = \\frac{K_s D}{\\mu_{max} - D}$$\nLe substrat résiduel à l\'équilibre est entièrement asservi au taux de dilution $D$ réglé par la pompe !'
      },
      {
        etape: '3. Condition de lessivage critique (Wash-out)',
        justification: 'La biomasse stationnaire vaut $X^* = Y_{X/S}(S_0 - S^*)$. Pour qu\'une culture pérenne existe, il faut $S^* < S_0$, ce qui impose un taux de dilution inférieur au taux critique $D_c$ :',
        formule: 'D_c = \\mu(S_0) = \\frac{\\mu_{max} S_0}{K_s + S_0}'
      }
    ],
    baremeEtPointsCles: [
      'Écriture des équations différentielles de bilan avec le taux de dilution $D$ (3 pts)',
      'Démonstration du résultat clé $\\mu(S^*) = D$ (2 pts)',
      'Expression de $S^*$ et $X^*$ (1.5 pt)',
      'Détermination analytique du wash-out $D_c$ (1.5 pt)'
    ]
  },
  {
    id: 'must-bcpst-bernoulli-pulsatoire',
    titre: 'Théorème de Bernoulli Généralisé & Écoulement Sanguin dans une Sténose Artérielle',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Biomécanique Agro-Véto / G2E',
    chapitreAssocie: 'Dynamique des Fluides',
    enonceType: 'Dans une grosse artère où le sang peut être assimilé à un fluide parfait incompressible de masse volumique $\\rho$, une sténose réduit la section de $S_1$ à $S_2 < S_1$. En appliquant la conservation du débit volumique et le théorème de Bernoulli, exprimer la dépression $\\Delta P = P_1 - P_2$ dans le rétrécissement. Expliquer pourquoi une sténose sévère peut provoquer l\'effondrement soudain de l\'artère (phénomène de collapsus vasculaire).',
    piegesImmediats: [
      'Penser à tort que la pression augmente dans un rétrécissement (effet Venturi : la vitesse augmente donc la pression statique diminue obligatoirement !).',
      'Confondre pression totale et pression statique latérale.'
    ],
    redactionModele: [
      {
        etape: '1. Conservation du débit volumique',
        justification: 'Pour un fluide incompressible en régime permanent : $D_v = S_1 v_1 = S_2 v_2$. La vitesse dans la sténose est donc décuplée :\n$$v_2 = \\frac{S_1}{S_2} v_1 > v_1$$'
      },
      {
        etape: '2. Théorème de Bernoulli le long d\'une ligne de courant horizontale',
        justification: 'En négligeant les variations d\'altitude $\\Delta z \\approx 0$ :\n$$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$$\nOn en déduit la chute de pression statique :',
        formule: 'P_1 - P_2 = \\frac{1}{2}\\rho (v_2^2 - v_1^2) = \\frac{1}{2}\\rho v_1^2 \\left[ \\left(\\frac{S_1}{S_2}\\right)^2 - 1 \\right] > 0'
      },
      {
        etape: '3. Explication biomédicale du collapsus',
        justification: 'Si le rétrécissement $S_1/S_2$ est très prononcé, la vitesse $v_2$ devient immense et la pression transmurale $P_{int} - P_{ext} = P_2 - P_{tissus}$ devient négative : la pression exercée par les tissus environnants écrase brutalement la paroi artérielle molle, provoquant une ischémie aiguë en aval.'
      }
    ],
    baremeEtPointsCles: [
      'Relation de continuité des débits (2 pts)',
      'Énoncé et hypothèses du théorème de Bernoulli (2 pts)',
      'Calcul algébrique de la dépression Venturi (2 pts)',
      'Interprétation biomédicale du collapsus vasculaire (2 pts)'
    ]
  },
  {
    id: 'must-bcpst-conformation-glucose-fischer-haworth',
    titre: 'Passage Fischer $\\leftrightarrow$ Haworth pour le D-Glucose & Mécanisme de Cyclisation',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves de Biochimie Agro-Véto',
    chapitreAssocie: 'Stéréochimie des Biomolécules',
    enonceType: 'Tracer la projection de Fischer du D-glucose (aldohéxose). Détailler le mécanisme d\'hémiacétalisation intramoléculaire par l\'alcool en C5. Établir la règle méthodique permettant de convertir les substituants de Fischer en projection de Haworth pour les anomères $\\alpha$ et $\\beta$.',
    piegesImmediats: [
      'Inverser les substituants de Fischer : pour le D-glucose, la succession des OH de C2 à C5 est impérativement droite, gauche, droite, droite !',
      'Confondre un cycle pyranose (à 6 sommets) avec un cycle furanose (à 5 sommets).'
    ],
    redactionModele: [
      {
        etape: '1. Projection de Fischer du D-glucose',
        justification: 'Chaîne verticale C1 à C6 avec C1 en haut ($HC=O$) :\n- C2 : -OH à **droite**\n- C3 : -OH à **gauche**\n- C4 : -OH à **droite**\n- C5 : -OH à **droite** (définit la série D)\n- C6 : $-CH_2OH$'
      },
      {
        etape: '2. Mécanisme d\'hémiacétalisation',
        justification: 'Le doublet non liant de l\'oxygène en C5 attaque le carbone électrophile du carbonyle C1 plan ($sp^2$), formant un hémiacétal cyclique pyranique à 6 chaînons. L\'attaque pouvant survenir par la face *re* ou la face *si*, le carbone C1 devient asymétrique (carbone anomérique).'
      },
      {
        etape: '3. Règles de transposition en Haworth',
        justification: 'Règle canonique de transposition :\n- Tout substituant situé à **droite** en Fischer se retrouve **en bas** en projection de Haworth.\n- Tout substituant à **gauche** en Fischer se retrouve **en haut** en Haworth.\n- Pour la série D, le groupement terminal $-CH_2OH$ en C6 est projeté **vers le haut**.\n- Pour l\'anomère $\\alpha$, le $-OH$ anomérique est en **bas** (trans par rapport à C6).\n- Pour l\'anomère $\\beta$, le $-OH$ anomérique est en **haut** (cis par rapport à C6).',
        formule: '\\text{Droite (Fischer)} \\iff \\text{Bas (Haworth)} ; \\quad \\text{Gauche} \\iff \\text{Haut}'
      }
    ],
    baremeEtPointsCles: [
      'Configuration exacte des centres C2 à C5 en Fischer (2.5 pts)',
      'Description du mécanisme d\'attaque du nucléophile C5-OH sur C1 (2.5 pts)',
      'Règle de transposition droite/bas et gauche/haut (2 pts)',
      'Définition sans ambiguïté des anomères $\\alpha$ et $\\beta$ (1 pt)'
    ]
  },
  {
    id: 'must-bcpst-regression-lineaire-moindres-carres',
    titre: 'Régression Linéaire par les Moindres Carrés & Coefficient de Détermination $R^2$',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des épreuves de Mathématiques et Modélisation Agro-Véto',
    chapitreAssocie: 'Statistique Bivariée & Espace Euclidien',
    enonceType: 'Soit un nuage de points expérimentaux $(x_i, y_i)_{1\\le i\\le n}$. Par projection orthogonale dans l\'espace euclidien $\\mathbb{R}^n$, établir les formules des estimateurs des moindres carrés de la pente $\\widehat{a}$ et de l\'ordonnée à l\'origine $\\widehat{b}$ du modèle $y = ax + b$. Démontrer que le coefficient de détermination $R^2$ est égal au carré du coefficient de corrélation linéaire $r^2$.',
    piegesImmediats: [
      'Inverser $x$ et $y$ dans le calcul de la pente : $\\widehat{a} = \\mathrm{cov}(x, y) / \\mathrm{Var}(x)$ et non l\'inverse !',
      'Confondre la somme des carrés résiduels (SCR) et la somme des carrés expliqués (SCE).'
    ],
    redactionModele: [
      {
        etape: '1. Minimisation de la somme des carrés des résidus',
        justification: 'On cherche à minimiser la fonctionnelle $S(a, b) = \\sum_{i=1}^n (y_i - a x_i - b)^2$. En annulant les dérivées partielles :\n$$\\frac{\\partial S}{\\partial b} = -2 \\sum_{i=1}^n (y_i - a x_i - b) = 0 \\implies \\bar{y} - a \\bar{x} - b = 0 \\implies b = \\bar{y} - a \\bar{x}$$\nLa droite de régression passe impérativement par le point moyen $(\\bar{x}, \\bar{y})$.'
      },
      {
        etape: '2. Dérivation de la pente $\\widehat{a}$',
        justification: 'En réinjectant $b$ dans la condition $\\frac{\\partial S}{\\partial a} = 0$ :\n$$\\sum_{i=1}^n x_i \\big( (y_i - \\bar{y}) - a (x_i - \\bar{x}) \\big) = 0 \\implies \\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y}) = a \\sum_{i=1}^n (x_i - \\bar{x})^2$$\nCe qui donne la formule des moindres carrés ordinaires :',
        formule: '\\widehat{a} = \\frac{\\mathrm{cov}(x, y)}{\\mathrm{Var}(x)}, \\quad \\widehat{b} = \\bar{y} - \\widehat{a} \\bar{x}'
      },
      {
        etape: '3. Théorème de Pythagore et coefficient $R^2$',
        justification: 'Dans $\\mathbb{R}^n$, le vecteur centré $y - \\bar{y}$ se décompose orthogonalement en somme du vecteur des valeurs ajustées $\\widehat{y} - \\bar{y}$ et du vecteur des résidus $e = y - \\widehat{y}$. D\'après le théorème de Pythagore :\n$$\\mathrm{SCT} = \\mathrm{SCE} + \\mathrm{SCR}$$\nLe coefficient de détermination vaut $R^2 = \\frac{\\mathrm{SCE}}{\\mathrm{SCT}} = \\frac{\\widehat{a}^2 \\mathrm{Var}(x)}{\\mathrm{Var}(y)} = \\left( \\frac{\\mathrm{cov}(x, y)}{\\sigma_x \\sigma_y} \\right)^2 = r^2$.'
      }
    ],
    baremeEtPointsCles: [
      'Conditions de stationnarité des dérivées partielles (2.5 pts)',
      'Expression rigoureuse de $\\widehat{a}$ et $\\widehat{b}$ (2.5 pts)',
      'Décomposition de la variance SCT = SCE + SCR (2 pts)',
      'Égalité $R^2 = r^2$ démontrée proprement (1 pt)'
    ]
  },
  {
    id: 'must-bcpst-titrage-conductimetrique',
    titre: 'Pentes des Courbes de Titrage Conductimétrique & Conductivités Molaires Ioniques de Kohlrausch',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des épreuves de Chimie Agro-Véto / CCINP',
    chapitreAssocie: 'Solutions Aqueuses & Dosages',
    enonceType: 'On dose un acide fort ($HCl$) par une base forte ($NaOH$) par conductimétrie. À l\'aide de la loi de Kohlrausch $\\sigma = \\sum \\lambda_i [X_i]$, expliquer l\'allure de la courbe $\\sigma = f(V_b)$ avant et après l\'équivalence. Donner les valeurs relatives des pentes en exploitant les mobilités exceptionnelles de $H_3O^+$ et $HO^-$ par le mécanisme de Grotthuss.',
    piegesImmediats: [
      'Oublier l\'effet de dilution si l\'on ne verse pas un grand volume d\'eau initial ou si l\'on n\'utilise pas la conductivité corrigée $\\sigma_{corr} = \\sigma \\frac{V_0 + V}{V_0}$.',
      'Confondre le comportement d\'un acide fort avec celui d\'un acide faible.'
    ],
    redactionModele: [
      {
        etape: '1. Avant l\'équivalence ($V_b < V_E$)',
        justification: 'L\'ajout de soude consomme les ions $H_3O^+$ et apporte des ions $Na^+$ :\n$$H_3O^+ + HO^- \\to 2H_2O$$\nChaque ion oxonium disparu est remplacé stœchiométriquement par un ion sodium $Na^+$. Comme $\\lambda^\\circ(H_3O^+) \\approx 35.0\\text{ mS}\\cdot\\text{m}^2/\\text{mol}$ est immensément plus grand que $\\lambda^\\circ(Na^+) \\approx 5.0\\text{ mS}\\cdot\\text{m}^2/\\text{mol}$, la conductivité globale **chute fortement** avec une pente proportionnelle à $(\\lambda_{Na^+} - \\lambda_{H_3O^+}) < 0$.'
      },
      {
        etape: '2. Au point équivalent ($V_b = V_E$)',
        justification: 'Tous les ions $H_3O^+$ ont été neutralisés. La solution ne contient que des ions spectateurs $Na^+$ et $Cl^-$ : la conductivité passe par un **minimum très marqué**.'
      },
      {
        etape: '3. Après l\'équivalence ($V_b > V_E$)',
        justification: 'L\'acide est épuisé. L\'ajout de réactif titrant apporte des ions $Na^+$ et des ions hydroxyde $HO^-$. Comme $\\lambda^\\circ(HO^-) \\approx 19.8\\text{ mS}\\cdot\\text{m}^2/\\text{mol}$, la conductivité **remonte rapidement** avec une pente proportionnelle à $(\\lambda_{Na^+} + \\lambda_{HO^-}) > 0$.',
        formule: 'pente_{avant} \\propto (\\lambda_{Na^+} - \\lambda_{H_3O^+}) \\approx -30, \\quad pente_{après} \\propto (\\lambda_{Na^+} + \\lambda_{HO^-}) \\approx +25'
      }
    ],
    baremeEtPointsCles: [
      'Énoncé de la loi de Kohlrausch (1.5 pt)',
      'Justification de la pente négative avant équivalence (2.5 pts)',
      'Minimum net à l\'équivalence (1.5 pt)',
      'Pente positive après équivalence et référence au saut de proton de Grotthuss (2.5 pts)'
    ]
  },
  {
    id: 'must-bcpst-optique-loupe-microscope',
    titre: 'Grossissement Commercial & Puissance Intrinsèque d\'un Instrument d\'Optique',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves d\'Optique Instrumentale Agro / G2E',
    chapitreAssocie: 'Optique Géométrique & Vision',
    enonceType: 'Définir la puissance intrinsèque $P$ et le grossissement commercial $G_c$ d\'une loupe ou d\'un oculaire de microscope de distance focale image $f\'$. Démontrer la relation universelle liant $G_c$ à la distance minimale de vision distincte standardisée $d_m = 25\\text{ cm}$.',
    piegesImmediats: [
      'Confondre le grandissement transversal algébrique sans unité $\\gamma = \\overline{A\'B\'}/\\overline{AB}$ et le grossissement angulaire $G = \\theta\' / \\theta$.',
      'Oublier l\'unité de la puissance intrinsèque (dioptries $\\delta = \\text{m}^{-1}$).'
    ],
    redactionModele: [
      {
        etape: '1. Définition de la puissance intrinsèque',
        justification: 'La puissance intrinsèque d\'un instrument d\'optique est le rapport de l\'angle $\\theta\'$ sous lequel est vue l\'image à travers l\'instrument à la taille réelle de l\'objet $AB$ quand l\'image finale est rejetée à l\'infini (observation sans accommodation) :\n$$P = \\frac{\\theta\'}{AB}$$\nPour une lentille mince convergente, l\'objet est placé au foyer objet $F$, d\'où $\\theta\' = \\frac{AB}{f\'}$. On a donc :',
        formule: 'P = \\frac{1}{f\'}'
      },
      {
        etape: '2. Définition du diamètre apparent à l\'œil nu',
        justification: 'À l\'œil nu, pour voir l\'objet sous le plus grand angle possible sans instrument, l\'observateur le place à sa distance minimale de vision distincte standard $d_m = 0.25\\text{ m}$. L\'angle sous-tendu à l\'œil nu vaut :\n$$\\theta = \\frac{AB}{d_m}$$'
      },
      {
        etape: '3. Déduction du grossissement commercial standard',
        justification: 'Le grossissement commercial est le rapport des angles apparents avec et sans instrument :\n$$G_c = \\frac{\\theta\'}{\\theta} = \\frac{P \\cdot AB}{AB / d_m} = P \\cdot d_m = \\frac{d_m}{f\'} = \\frac{0.25\\text{ m}}{f\'}$$\nPour un oculaire de microscope portant l\'indication gravée $\\times 10$, sa distance focale vaut donc immédiatement $f\' = 25\\text{ cm} / 10 = 2.5\\text{ cm}$.'
      }
    ],
    baremeEtPointsCles: [
      'Définition rigoureuse de la puissance intrinsèque $P = \\theta\' / AB$ (2.5 pts)',
      'Définition de la vision à l\'œil nu à $d_m = 25\\text{ cm}$ (2 pts)',
      'Preuve de $G_c = P \\cdot d_m = d_m / f\'$ (2.5 pts)',
      'Exemple d\'application sur un objectif ou oculaire (1 pt)'
    ]
  },
  {
    id: 'must-bcpst-loi-gamma-poisson',
    titre: 'Loi Gamma & Somme de Variables Exponentielles Indépendantes (Processus de Poisson)',
    matiere: 'Mathématiques',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Probabilités Continues Agro-Véto',
    chapitreAssocie: 'Probabilités à Densité',
    enonceType: 'Soient $X_1, \\dots, X_n$ des variables aléatoires indépendantes suivant toutes la même loi exponentielle $\\mathcal{E}(\\lambda)$. Démontrer par produit de convolution ou récurrence que leur somme $S_n = \\sum_{i=1}^n X_i$ suit la loi Gamma $\\gamma(n, \\lambda)$ de densité $f_n(t) = \\frac{\\lambda^n}{(n-1)!} t^{n-1} e^{-\\lambda t} \\mathbf{1}_{[0, +\\infty[}(t)$. Donner son espérance et sa variance.',
    piegesImmediats: [
      'Oublier le facteur $(n-1)!$ au dénominateur de la loi Gamma.',
      'Calculer l\'intégrale de convolution sans vérifier les bornes d\'intégration sur $[0, t]$.'
    ],
    redactionModele: [
      {
        etape: '1. Calcul par produit de convolution pour $n=2$',
        justification: 'Comme $X_1$ et $X_2$ sont indépendantes et positives, la densité de $S_2 = X_1 + X_2$ est le produit de convolution pour $t > 0$ :\n$$f_2(t) = \\int_0^t f_1(u) f_1(t-u)\\,\\mathrm{d}u = \\int_0^t (\\lambda e^{-\\lambda u}) (\\lambda e^{-\\lambda(t-u)})\\,\\mathrm{d}u = \\lambda^2 e^{-\\lambda t} \\int_0^t 1\\,\\mathrm{d}u = \\lambda^2 t e^{-\\lambda t}$$\nLa formule est donc vérifiée pour $n=2$ avec $(2-1)! = 1$.'
      },
      {
        etape: '2. Récurrence sur $n$',
        justification: 'Supposons la formule vraie au rang $n$. En convolant $S_{n+1} = S_n + X_{n+1}$ :\n$$f_{n+1}(t) = \\int_0^t \\frac{\\lambda^n}{(n-1)!} u^{n-1} e^{-\\lambda u} \\cdot \\lambda e^{-\\lambda(t-u)}\\,\\mathrm{d}u = \\frac{\\lambda^{n+1}}{(n-1)!} e^{-\\lambda t} \\left[ \\frac{u^n}{n} \\right]_0^t = \\frac{\\lambda^{n+1}}{n!} t^n e^{-\\lambda t}$$\nLa formule est donc établie pour tout $n \\ge 1$ par récurrence.'
      },
      {
        etape: '3. Espérance et variance par linéarité et indépendance',
        justification: 'Par linéarité de l\'espérance : $E(S_n) = \\sum_{i=1}^n E(X_i) = n \\times \\frac{1}{\\lambda} = \\frac{n}{\\lambda}$.\nPar indépendance mutuelle, les variances s\'ajoutent directement :\n$$V(S_n) = \\sum_{i=1}^n V(X_i) = n \\times \\frac{1}{\\lambda^2} = \\frac{n}{\\lambda^2}$$',
        formule: 'S_n \\sim \\gamma(n, \\lambda), \\quad E(S_n) = \\frac{n}{\\lambda}, \\quad V(S_n) = \\frac{n}{\\lambda^2}'
      }
    ],
    baremeEtPointsCles: [
      'Intégrale de convolution rigoureuse sur $[0, t]$ (2.5 pts)',
      'Preuve complète par récurrence (3 pts)',
      'Calcul immédiat de l\'espérance et de la variance par indépendance (2.5 pts)'
    ]
  },
  {
    id: 'must-bcpst-conductivite-thermique-fourier',
    titre: 'Équation de la Chaleur 1D & Résistance Thermique d\'un Manchon Cylindrique Isolé',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Thermique G2E / Agro',
    chapitreAssocie: 'Transferts Thermiques',
    enonceType: 'Soit un tuyau cylindrique de rayon interne $R_1$ à température $T_1$ recouvert d\'un isolant de conductivité thermique $\\lambda$ jusqu\'au rayon externe $R_2$ à température $T_2$. En régime stationnaire sans source interne, établir le profil de température $T(r)$ et déduire la résistance thermique conductive $R_{th}$ pour une longueur $L$.',
    piegesImmediats: [
      'Utiliser la résistance plane $e/(\\lambda S)$ au lieu de la formule logarithmique cylindrique.',
      'Oublier que la densité de flux thermique $\\vec{j}_{th}$ décroît en $1/r$ à travers le cylindre.'
    ],
    redactionModele: [
      {
        etape: '1. Bilan thermique radial en régime stationnaire',
        justification: 'En régime stationnaire sans création d\'énergie, le flux thermique total $\\Phi$ traversant tout cylindre coaxial de rayon $r$ et longueur $L$ est constant :\n$$\\Phi = j_{th}(r) \\cdot (2\\pi r L) = \\text{cste}$$\nD\'après la loi de Fourier $j_{th}(r) = -\\lambda \\frac{\\mathrm{d}T}{\\mathrm{d}r}$, on a : $\\Phi = -2\\pi \\lambda L r \\frac{\\mathrm{d}T}{\\mathrm{d}r}$.'
      },
      {
        etape: '2. Intégration par séparation des variables',
        justification: 'En intégrant entre $R_1$ et $R_2$ :\n$$\\int_{T_1}^{T_2} \\mathrm{d}T = -\\frac{\\Phi}{2\\pi \\lambda L} \\int_{R_1}^{R_2} \\frac{\\mathrm{d}r}{r} \\implies T_2 - T_1 = -\\frac{\\Phi}{2\\pi \\lambda L} \\ln\\left( \\frac{R_2}{R_1} \\right)$$'
      },
      {
        etape: '3. Expression de la résistance thermique',
        justification: 'Par analogie avec la loi d\'Ohm $U = R I \\iff T_1 - T_2 = R_{th} \\Phi$, on isole la résistance thermique cylindrique :',
        formule: 'R_{th} = \\frac{\\ln(R_2 / R_1)}{2\\pi \\lambda L}'
      }
    ],
    baremeEtPointsCles: [
      'Conservation du flux global cylindrique $\\Phi$ (2.5 pts)',
      'Loi de Fourier vectorielle (1.5 pt)',
      'Intégration logarithmique exacte (2.5 pts)',
      'Expression finale de la résistance thermique cylindrique (1.5 pt)'
    ]
  },
  {
    id: 'must-bcpst-inhibition-non-competitive',
    titre: 'Inhibition Enzymatique Non Compétitive & Allure sur les Représentations Graphiques',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~75% des concours Agro-Véto',
    chapitreAssocie: 'Cinétique Enzymatique',
    enonceType: 'Soit une enzyme subissant une inhibition non compétitive pure par une molécule $I$. Écrire le schéma mécanistique avec les complexes $ES, EI$ et $ESI$. Exprimer la vitesse initiale $v$ en fonction de $V_{max}, K_M, [S], [I]$ et $K_I$. Décrire la signature géométrique sur le tracé de Lineweaver-Burk et sur le tracé de Dixon.',
    piegesImmediats: [
      'Penser qu\'une inhibition non compétitive modifie $K_M$ (l\'affinité de l\'enzyme pour le substrat reste strictement identique !).',
      'Confondre avec l\'inhibition incompétitive (qui déplace les droites de Lineweaver-Burk en faisceau parallèle).'
    ],
    redactionModele: [
      {
        etape: '1. Mécanisme réactionnel',
        justification: 'L\'inhibiteur se fixe sur un site allostérique différent du site catalytique, avec la même affinité sur l\'enzyme libre $E$ et sur le complexe $ES$ :\n- $E + I \\rightleftharpoons EI$ ($K_I = \\frac{[E][I]}{[EI]}$)\n- $ES + I \\rightleftharpoons ESI$ ($K_I = \\frac{[ES][I]}{[ESI]}$)\nLe complexe ternaire $ESI$ est totalement inactif catalytiquement.'
      },
      {
        etape: '2. Expression de la loi de vitesse apparente',
        justification: 'Le bilan de conservation de l\'enzyme totale donne $[E]_0 = [E] + [ES] + [EI] + [ESI] = ([E] + [ES])(1 + [I]/K_I)$. En remplaçant dans la dérivation classique :\n$$v = \\frac{\\frac{V_{max}}{1 + [I]/K_I} [S]}{K_M + [S]} = \\frac{V_{max}^{app} [S]}{K_M + [S]}$$\nOn constate que $K_M^{app} = K_M$ (inchangé) et $V_{max}^{app} = \\frac{V_{max}}{1 + [I]/K_I} < V_{max}$.'
      },
      {
        etape: '3. Signatures graphiques',
        justification: '- **Lineweaver-Burk** ($1/v$ en fonction de $1/[S]$) : Toutes les droites se coupent **exactement sur l\'axe des abscisses** au point fixe $(-1/K_M, 0)$, tandis que l\'ordonnée à l\'origine $1/V_{max}^{app}$ augmente avec la concentration d\'inhibiteur.\n- **Tracé de Dixon** ($1/v$ en fonction de $[I]$ pour différentes valeurs de $[S]$) : Toutes les droites concourent en un point unique d\'abscisse $[-I] = -K_I$.',
        formule: 'V_{max}^{app} = \\frac{V_{max}}{1 + [I]/K_I}, \\quad K_M^{app} = K_M'
      }
    ],
    baremeEtPointsCles: [
      'Schéma mécanistique complet avec les 4 espèces enzymatiques (2.5 pts)',
      'Dérivation mathématique rigoureuse de $V_{max}^{app}$ (2.5 pts)',
      'Point de concours fixe sur l\'axe des abscisses en Lineweaver-Burk (2 pts)',
      'Tracé de Dixon et détermination directe de $-K_I$ (1 pt)'
    ]
  },
  {
    id: 'must-bcpst-ondes-sonores-vitesse-laplace',
    titre: 'Célérité des Ondes Acoustiques dans un Fluide & Formule de Laplace',
    matiere: 'Physique',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves d\'Acoustique et Échographie Médicale Agro / ENS',
    chapitreAssocie: 'Ondes Acoustiques & Imagerie Médicale',
    enonceType: 'À partir des équations de la mécanique des fluides linéarisées (équation d\'Euler acoustique, équation de continuité de la masse et compressibilité isentropique), établir l\'équation d\'onde de d\'Alembert pour la surpression acoustique $p(x, t)$. Démontrer la formule de Laplace pour la célérité $c = \\sqrt{\\frac{\\gamma R T}{M}}$ dans un gaz parfait.',
    piegesImmediats: [
      'Utiliser la compressibilité isotherme de Newton au lieu de la compressibilité isentropique adiabatique de Laplace (l\'oscillation acoustique est trop rapide pour permettre les échanges thermiques).',
      'Confondre la vitesse particulaire de vibration $v$ avec la célérité de propagation de l\'onde $c$.'
    ],
    redactionModele: [
      {
        etape: '1. Équations locales acoustiques linéarisées',
        justification: 'En posant $P = P_0 + p$, $\\rho = \\rho_0 + \\mu$ et $\\vec{v} = v \\vec{u}_x$ au premier ordre :\n- Équation d\'Euler : $\\rho_0 \\frac{\\partial v}{\\partial t} = -\\frac{\\partial p}{\\partial x}$\n- Équation de continuité : $\\frac{\\partial \\mu}{\\partial t} = -\\rho_0 \\frac{\\partial v}{\\partial x}$\n- Comportement isentropique : $p = \\left(\\frac{\\partial P}{\\partial \\rho}\\right)_S \\mu = \\frac{1}{\\rho_0 \\chi_S} \\mu$.'
      },
      {
        etape: '2. Obtention de l\'équation de d\'Alembert',
        justification: 'En dérivant la continuité par rapport au temps et l\'Euler par rapport à l\'espace :\n$$\\frac{\\partial^2 p}{\\partial t^2} = \\frac{1}{\\rho_0 \\chi_S} \\frac{\\partial^2 \\mu}{\\partial t^2} = -\\frac{1}{\\chi_S} \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial v}{\\partial t}\\right) = \\frac{1}{\\rho_0 \\chi_S} \\frac{\\partial^2 p}{\\partial x^2}$$\nC\'est l\'équation de d\'Alembert avec $c = \\frac{1}{\\sqrt{\\rho_0 \\chi_S}}$.'
      },
      {
        etape: '3. Application au gaz parfait (Loi de Laplace)',
        justification: 'Pour une transformation isentropique d\'un gaz parfait : $P \\rho^{-\\gamma} = \\text{cste} \\implies \\frac{\\mathrm{d}P}{P} = \\gamma \\frac{\\mathrm{d}\\rho}{\\rho}$, d\'où $\\chi_S = \\frac{1}{\\gamma P_0}$.\nAvec $\\rho_0 = \\frac{P_0 M}{R T}$ :\n$$c = \\sqrt{\\frac{\\gamma P_0}{\\rho_0}} = \\sqrt{\\frac{\\gamma R T}{M}}$$',
        formule: 'c = \\sqrt{\\frac{\\gamma R T}{M}}'
      }
    ],
    baremeEtPointsCles: [
      'Linéarisation correcte des 3 équations fondamentales (3 pts)',
      'Élimination croisée pour aboutir à d\'Alembert (2 pts)',
      'Démonstration du coefficient de compressibilité isentropique $\\chi_S = 1/(\\gamma P)$ (2 pts)',
      'Formule de Laplace finale (1 pt)'
    ]
  },
  {
    id: 'must-bcpst-cycle-krebs-thermodynamique',
    titre: 'Bilan d\'Enthalpie Libre du Cycle de Krebs & Rendement Énergétique de l\'Oxydation du Glucose',
    matiere: 'Chimie',
    filieres: ['BCPST'],
    tauxPresence: 'Présent dans ~70% des épreuves de Bioénergétique Agro-Véto',
    chapitreAssocie: 'Thermodynamique Chimique & Bioénergétique',
    enonceType: 'Soit la réaction d\'oxydation globale d\'une mole de glucose par le dioxygène : $C_6H_{12}O_6 + 6 O_2 \\to 6 CO_2 + 6 H_2O$ pour laquelle $\\Delta_r G^\\circ\' = -2870\\text{ kJ/mol}$. Sachant que la phosphorylation oxydative permet la synthèse nette de 30 à 32 moles d\'ATP par mole de glucose et que l\'hydrolyse d\'une mole d\'ATP fournit $\\Delta G_{ATP} \\approx -50\\text{ kJ/mol}$ dans les conditions intracellulaires réelles, calculer le rendement thermodynamique effectif de la respiration cellulaire.',
    piegesImmediats: [
      'Utiliser la valeur standard $\\Delta_r G^\\circ\' = -30.5\\text{ kJ/mol}$ au lieu de la valeur intracellulaire réelle $\\Delta G \\approx -50\\text{ kJ/mol}$ tenant compte du rapport hors équilibre $[ATP]/([ADP][Pi])$.',
      'Oublier d\'exprimer le rendement sous forme de pourcentage sans dimension.'
    ],
    redactionModele: [
      {
        etape: '1. Énergie libre récupérée sous forme chimique utilisable',
        justification: 'La respiration complète (glycolyse + cycle de Krebs + chaîne respiratoire) génère $n_{ATP} \\approx 31\\text{ moles d\'ATP}$ par mole de glucose.\nDans les conditions cytoplasmiques réelles (fort excédent d\'ATP maintenu loin de l\'équilibre), l\'énergie libre d\'hydrolyse vaut environ $\\Delta G_{ATP} = 50\\text{ kJ/mol}$. L\'énergie capturée sous forme utile est donc :\n$$\\Delta G_{recupere} = 31 \\times 50\\text{ kJ} = 1550\\text{ kJ}$$'
      },
      {
        etape: '2. Énergie libre totale théoriquement disponible',
        justification: 'L\'enthalpie libre standard de combustion du glucose dans l\'eau vaut :\n$$\\Delta G_{disponible} = |\\Delta_r G^\\circ\'| = 2870\\text{ kJ/mol}$$'
      },
      {
        etape: '3. Calcul du rendement thermodynamique',
        justification: 'Le rendement thermodynamique effectif s\'exprime par :\n$$\\eta = \\frac{\\Delta G_{recupere}}{\\Delta G_{disponible}} = \\frac{1550}{2870} \\approx 0.54 = 54\\%$$\nLe reste de l\'énergie ($46\\%$) est dissipé sous forme de chaleur irréversible (entropie créée), assurant la thermogenèse et l\'homéothermie corporelle.',
        formule: '\\eta = \\frac{n_{ATP} \\cdot |\\Delta G_{ATP}|}{|\\Delta_r G^\\circ\'(glucose)|} \\approx 50\\% - 55\\%'
      }
    ],
    baremeEtPointsCles: [
      'Justification de la valeur réelle de l\'hydrolyse d\'ATP ($\\sim 50\\text{ kJ/mol}$) (2.5 pts)',
      'Décompte stœchiométrique du nombre d\'ATP par glucose (2 pts)',
      'Calcul numérique exact du rendement (2 pts)',
      'Interprétation thermodynamique de l\'entropie créée et thermorégulation (1.5 pt)'
    ]
  }
];
