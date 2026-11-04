import type { KholleSubject } from './cpgeData';

export const FIFTY_KHOLLES_PART2: KholleSubject[] = [
  // ==========================================
  // PHYSIQUE (Khôlles 26 à 30)
  // ==========================================
  {
    id: 'kholle-cinq-26-mouvement-charge-e-et-b-cyclotron',
    titre: 'Particule Chargée dans des Champs $\\vec{E}$ et $\\vec{B}$ Croisés & Dérive',
    matiere: 'Physique',
    filiere: 'PCSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Écrire l\'équation du mouvement d\'une particule de charge $q$ et de masse $m$ dans un champ magnétique uniforme $\\vec{B} = B_0 \\vec{u}_z$. Définir la pulsation cyclotron $\\omega_c = \\frac{|q| B_0}{m}$ et le rayon de Larmor.',
      pointsCles: [
        'Force de Lorentz $\\vec{F} = q \\vec{v} \\wedge \\vec{B}$ perpendiculaire au mouvement : puissance nulle',
        'Conservation de l\'énergie cinétique et de la norme de la vitesse',
        'Mouvement hélicoïdal avec projection circulaire dans le plan perpendiculaire'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On superpose un champ électrique uniforme $\\vec{E} = E_0 \\vec{u}_y$ orthogonal à $\\vec{B}$.\n1. Trouver un référentiel galiléen en translation à vitesse constante $\\vec{v}_d$ où le champ électrique effectif s\'annule (vitesse de dérive électrique).\n2. En déduire la trajectoire cycloïdale dans le référentiel du laboratoire.',
      indicationsKholleur: [
        { condition: 'Vitesse de dérive', aide: 'Posez $\\vec{v}_d = \\frac{\\vec{E} \\wedge \\vec{B}}{B^2}$. Calculez $\\vec{E} + \\vec{v}_d \\wedge \\vec{B}$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Intégration vectorielle du mouvement circulaire', poids: '35%' },
      { critere: 'Astuce du changement de référentiel de dérive', poids: '45%' },
      { critere: 'Allure de la cycloïde et sens physique', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-27-optique-dispersion-prisme',
    titre: 'Optique Géométrique : Réfraction à Travers un Prisme & Minimum de Déviation',
    matiere: 'Physique',
    filiere: 'MPSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Établir les 4 relations fondamentales du prisme d\'angle au sommet $A$ et d\'indice $n$ :\n$$\\sin i = n \\sin r, \\quad \\sin i\' = n \\sin r\', \\quad A = r + r\', \\quad D = i + i\' - A$$',
      pointsCles: [
        'Schéma avec les deux normales aux dioptres et les angles orientés',
        'Lois de Snell-Descartes aux deux faces d\'entrée et de sortie',
        'Relation géométrique dans le triangle formé par les rayons et les normales',
        'Calcul de la déviation totale $D$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Montrer que la déviation $D(i)$ admet un minimum strict lorsque le trajet est symétrique ($i = i\'$ et $r = r\' = A/2$). En déduire la relation liant l\'indice $n$ à $A$ et au minimum de déviation $D_m$ :',
      indicationsKholleur: [
        { condition: 'Dérivation', aide: 'Différentiez les 4 relations : $\\mathrm{d}D = \\mathrm{d}i + \\mathrm{d}i\' = 0 \\implies \\mathrm{d}i\' / \\mathrm{d}i = -1$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Établissement des formules du prisme', poids: '35%' },
      { critere: 'Preuve du minimum de déviation par différentielle', poids: '45%' },
      { critere: 'Précision sur la méthode goniométrique de mesure d\'indice', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-28-thermo-conducto-convection-ailette',
    titre: 'Transferts Thermiques : Refroidissement par Ailette & Conducto-Convection',
    matiere: 'Physique',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer la loi de Fourier pour la conduction et la loi de Newton pour la convection. Définir le nombre de Biot et expliquer son rôle pour évaluer l\'homogénéité de température dans un solide.',
      pointsCles: [
        'Flux de Fourier $\\vec{j}_Q = -\\lambda \\vec{\\nabla} T$',
        'Flux convectif $j_{conv} = h (T_{surface} - T_\\infty)$',
        'Nombre de Biot $Bi = \\frac{h L_c}{\\lambda}$ : si $Bi < 0{,}1$, température spatialement quasi-uniforme'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Une ailette cylindrique de section $S$, de périmètre $P$ et de conductivité $\\lambda$ dépasse d\'une paroi à température $T_0$ dans l\'air à $T_\\infty$. Établir l\'équation différentielle vérifiée par le profil stationnaire $\\theta(x) = T(x) - T_\\infty$. Donner la solution pour une ailette de grande longueur ($L \\to \\infty$).',
      indicationsKholleur: [
        { condition: 'Bilan sur une tranche', aide: 'Faites un bilan thermique entre $x$ et $x+\\mathrm{d}x$ : conduction axiale $(\\Phi(x) - \\Phi(x+\\mathrm{d}x))$ équilibrée par la convection latérale $h P \\mathrm{d}x \\theta(x)$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Bilan thermique différentiel soigné', poids: '40%' },
      { critere: 'Résolution avec constante de longueur caractéristique $L_{th} = \\sqrt{\\frac{\\lambda S}{h P}}$', poids: '40%' },
      { critere: 'Efficacité d\'ailette', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-29-lasers-cavite-inversion-population',
    titre: 'Physique des Lasers : Coefficients d\'Einstein & Inversion de Population',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir les trois processus d\'interaction lumière-matière : émission spontanée ($A_{21}$), absorption stimulée ($B_{12}$) et émission stimulée ($B_{21}$). Démontrer les relations d\'Einstein en considérant l\'équilibre thermodynamique avec un rayonnement de corps noir.',
      pointsCles: [
        'Égalité des probabilités stimulées $B_{12} = B_{21}$',
        'Rapport $\\frac{A_{21}}{B_{21}} = \\frac{8\\pi h \\nu^3}{c^3}$',
        'Nécessité de l\'inversion de population $N_2 > N_1$ pour que l\'émission stimulée l\'emporte sur l\'absorption'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Expliquer pourquoi un laser ne peut pas fonctionner en régime continu avec un système à 2 niveaux. Décrire le schéma de pompage optique d\'un laser à 3 niveaux (ex: laser à rubis).',
      indicationsKholleur: [
        { condition: 'Système à 2 niveaux', aide: 'À saturation sous pompage intense, les populations tendent au maximum vers l\'égalité $N_1 = N_2$ : gain nul.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Démonstration rigoureuse des coefficients d\'Einstein', poids: '40%' },
      { critere: 'Analyse du blocage à 2 niveaux et solution à 3/4 niveaux', poids: '40%' },
      { critere: 'Cohérence temporelle et spatiale du faisceau laser', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-30-electromagnetisme-ondes-plasma-ionosphere',
    titre: 'Propagation dans un Plasma Froid : Pulsation Plasma $\\omega_p$ & Réflexion Ionosphérique',
    matiere: 'Physique',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Modéliser un plasma froid non magnétisé par un gaz d\'électrons libres mobiles dans un fond d\'ions fixes. Établir l\'expression de la pulsation plasma $\\omega_p = \\sqrt{\\frac{n_e e^2}{m \\varepsilon_0}}$. Écrire la relation de dispersion de Klein-Gordon.',
      pointsCles: [
        'PFD sur un électron sans collisions : $m \\frac{\\mathrm{d}\\vec{v}}{\\mathrm{d}t} = -e \\vec{E}$',
        'Densité de courant $\\vec{j} = -n_e e \\vec{v} = \\frac{n_e e^2}{j m \\omega} \\vec{E}$',
        'Dispersion $k^2 c^2 = \\omega^2 - \\omega_p^2$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Comparer les régimes $\\omega > \\omega_p$ et $\\omega < \\omega_p$.\n1. Montrer que la vitesse de phase $v_\\varphi$ est supraluminique tandis que la vitesse de groupe $v_g$ est sous-luminique, et vérifier $v_\\varphi v_g = c^2$.\n2. Expliquer comment l\'ionosphère permet la transmission des ondes radio décamétriques (ondes courtes) tout en étant transparente aux ondes des téléphones satellites.',
      indicationsKholleur: [
        { condition: 'Onde évanescente', aide: 'Pour $\\omega < \\omega_p$, $k$ est imaginaire pur : décroissance exponentielle sans transfert net d\'énergie (réflexion totale).' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Établissement complet de l\'équation de dispersion', poids: '40%' },
      { critere: 'Vitesse de phase vs vitesse de groupe', poids: '35%' },
      { critere: 'Application aux télécommunications', poids: '25%' }
    ]
  },

  // ==========================================
  // CHIMIE (Khôlles 31 à 38)
  // ==========================================
  {
    id: 'kholle-cinq-31-diagramme-ellington-metallurgie',
    titre: 'Diagrammes d\'Ellingham & Pyrométallurgie des Oxydes',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir l\'enthalpie libre standard de réaction d\'oxydation d\'un métal par $1\\text{ mol}$ de $O_2$ : $\\Delta_r G^\\circ(T) = \\Delta_r H^\\circ - T \\Delta_r S^\\circ$. Expliquer pourquoi les droites d\'Ellingham ont une pente positive et pourquoi cette pente change de signe aux changements d\'état.',
      pointsCles: [
        'Consommation d\'un gaz ($1\\text{ mol}$ de $O_2$) : $\\Delta_r S^\\circ \\approx -200\\text{ J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1} < 0$',
        'Pente égale à $-\\Delta_r S^\\circ > 0$',
        'Vaporisation ou fusion du métal : augmentation de désordre des réactifs, d\'où pente encore plus forte'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On trace sur le même graphe les droites du carbone (couples $C/CO$, $C/CO_2$, $CO/CO_2$) et du fer ($Fe/FeO$).\n1. Déterminer la température minimale à partir de laquelle le carbone peut réduire l\'oxyde de fer $FeO$ dans un haut-fourneau.\n2. Justifier la spécificité de la droite du couple $C/CO$ dont la pente est négative.',
      indicationsKholleur: [
        { condition: 'Pente négative', aide: 'Réaction $2 C(s) + O_2(g) = 2 CO(g)$ : on produit 2 moles de gaz pour 1 consommée, donc $\\Delta_r S^\\circ > 0$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Approximation d\'Ellingham (constance de $\\Delta H^\\circ$ et $\\Delta S^\\circ$)', poids: '35%' },
      { critere: 'Règle du réducteur situé au-dessous sur le diagramme', poids: '40%' },
      { critere: 'Compréhension du rôle de $CO$ et du haut-fourneau', poids: '25%' }
    ]
  },
  {
    id: 'kholle-cinq-32-complexation-edta-constante-conditionnelle',
    titre: 'Complexation : Titrage par l\'EDTA & Constante Conditionnelle',
    matiere: 'Chimie',
    filiere: 'BCPST',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir un ligand chélatant et expliquer l\'effet chélate sur le plan entropique. Présenter la structure de l\'EDTA ($Y^{4-}$) et ses équilibres acido-basiques.',
      pointsCles: [
        'Effet chélate : libération de molécules d\'eau de solvatation, gain entropique $\\Delta S^\\circ > 0$',
        'Complexes $1:1$ extrêmement stables avec la plupart des cations métalliques $M^{n+} + Y^{4-} = MY^{n-4}$',
        'Dépendance de la forme prédominante $Y^{4-}$ en fonction du pH'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Définir le coefficient de réaction parasite $\\alpha_Y(\\text{pH}) = \\frac{[Y]_{total}}{[Y^{4-}]}$. Établir l\'expression de la constante de formation conditionnelle $K\'_f = \\frac{K_f}{\\alpha_Y(\\text{pH})}$. En déduire le pH minimal pour doser les ions $Ca^{2+}$ par l\'EDTA de manière quantitative ($K\'_f > 10^7$).',
      indicationsKholleur: [
        { condition: 'Coefficient alpha', aide: '$\\alpha_Y(\\text{pH}) = 1 + \\frac{[H^+]}{K_{a4}} + \\frac{[H^+]^2}{K_{a3}K_{a4}} + \\dots$' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur sur les équilibres compétitifs', poids: '40%' },
      { critere: 'Calcul de la constante apparente / conditionnelle', poids: '40%' },
      { critere: 'Interprétation de la courbe de titrage complexométrique', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-33-cinetique-mecanisme-chaine-hbr',
    titre: 'Cinétique Chimique : Réactions en Chaîne & Mécanisme de Bodenstein pour HBr',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir les étapes d\'une réaction en chaîne radicalaire : initiation, propagation, rupture. Énoncer l\'Approximation des États Quasi-Stationnaires (AEQS) et ses critères de validité.',
      pointsCles: [
        'Radicaux libres hautement réactifs en concentration infime $\\approx 10^{-8}\\text{ mol/L}$',
        'AEQS : $\\frac{\\mathrm{d}[R^\\bullet]}{\\mathrm{d}t} \\approx 0$',
        'Vitesse de formation des radicaux égale à leur vitesse de disparition'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Pour la synthèse de $HBr$ ($H_2 + Br_2 = 2 HBr$), on propose le mécanisme de Bodenstein :\n- $Br_2 \\xrightarrow{k_1} 2 Br^\\bullet$ (initiation thermique)\n- $Br^\\bullet + H_2 \\xrightarrow{k_2} HBr + H^\\bullet$\n- $H^\\bullet + Br_2 \\xrightarrow{k_3} HBr + Br^\\bullet$\n- $H^\\bullet + HBr \\xrightarrow{k_4} H_2 + Br^\\bullet$ (inhibition)\n- $2 Br^\\bullet \\xrightarrow{k_5} Br_2$ (rupture)\nEn appliquant l\'AEQS aux deux radicaux $Br^\\bullet$ et $H^\\bullet$, retrouver la loi expérimentale de vitesse composite $v = \\frac{k [H_2] [Br_2]^{1/2}}{1 + m [HBr]/[Br_2]}$.',
      indicationsKholleur: [
        { condition: 'Addition des équations', aide: 'Sommez $\\frac{\\mathrm{d}[Br^\\bullet]}{\\mathrm{d}t} + \\frac{\\mathrm{d}[H^\\bullet]}{\\mathrm{d}t} = 0$ : les termes de propagation s\'annulent exactement, isolant $[Br^\\bullet]$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Application rigoureuse de l\'AEQS', poids: '40%' },
      { critere: 'Résolution algébrique sans erreur des concentrations radicalaires', poids: '40%' },
      { critere: 'Sens physique du terme d\'inhibition par le produit formé', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-34-orga-aldolisation-croisee-retro',
    titre: 'Chimie Organique : Aldolisation, Cétolisation & Crotonisation',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Expliquer l\'acidité des protons en $\\alpha$ d\'un carbonyle (effet mésomère de l\'ion énolate). Détailler le mécanisme catalysé par une base d\'une réaction d\'aldolisation conduisant au $\\beta$-hydroxyaldol.',
      pointsCles: [
        'Formes mésomères de l\'ion énolate : carbanion vs oxyanion',
        'Attaque nucléophile sur le carbone électrophile d\'un second carbonyle',
        'Protonation de l\'alcoxyde intermédiaire pour régénérer le catalyseur $OH^-$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: '1. Écrire le mécanisme de la déshydratation (crotonisation) en milieu basique (mécanisme $E1_{cb}$). Pourquoi la crotonisation est-elle favorisée thermodynamiquement ?\n2. Comment éviter la formation de 4 produits différents lors d\'une aldolisation croisée entre deux composés carbonylés différents ?',
      indicationsKholleur: [
        { condition: 'Aldolisation sélective', aide: 'Utilisez un dérivé sans hydrogène en alpha (ex: benzaldéhyde ou formaldéhyde) ou pré-formez quantitativement l\'énolate avec LDA.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Mécanisme fléché précis de l\'aldolisation et de $E1_{cb}$', poids: '40%' },
      { critere: 'Conjugaison $\\pi$-$\\pi$ de l\'énone formée', poids: '30%' },
      { critere: 'Stratégie de synthèse régiosélective', poids: '30%' }
    ]
  },
  {
    id: 'kholle-cinq-35-diagrammes-binaire-liquide-vapeur',
    titre: 'Thermodynamique des Mélanges : Diagrammes Binaires Liquide-Vapeur & Azéotropes',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir une solution idéale (loi de Raoult $P_i = x_i P_i^*$). Tracer l\'allure des courbes d\'ébullition et de rosée dans un diagramme isotherme $(P, x_A, y_A)$ et isobare $(T, x_A, y_A)$ pour un mélange binaire idéal. Énoncer le théorème des moments chimiques.',
      pointsCles: [
        'Courbe d\'ébullition (liquide saturé) et courbe de rosée (vapeur saturée)',
        'Domaine diphasique et règle du levier : $n_L \\cdot LM = n_V \\cdot MV$',
        'Distillation fractionnée et enrichissement en composé le plus volatil en tête de colonne'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Expliquer l\'origine d\'un azéotrope à minimum ou maximum de température d\'ébullition. Pourquoi est-il impossible de séparer complètement par distillation un mélange eau-éthanol au-delà de $95{,}6\\%$ en masse ?',
      indicationsKholleur: [
        { condition: 'Point azéotrope', aide: 'Au point azéotrope, les courbes de rosée et d\'ébullition sont tangentes : la vapeur a la même composition que le liquide ($y = x$).' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Tracé et repérage des phases sur le diagramme isobare', poids: '35%' },
      { critere: 'Application quantitative de la règle des moments', poids: '40%' },
      { critere: 'Explication thermodynamique du blocage azéotropique', poids: '25%' }
    ]
  },
  {
    id: 'kholle-cinq-36-pile-combustible-surtenseurs',
    titre: 'Électrochimie : Piles à Combustible, Courbes Intensité-Potentiel & Surtensions',
    matiere: 'Chimie',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir la f.é.m thermodynamique à courant nul $e_{th} = E_{eq}^+ - E_{eq}^-$. Décrire les trois causes de chute de tension lorsqu\'un courant $I$ circule dans une pile : résistance ohmique interne, surtension d\'activation et surtension de diffusion.',
      pointsCles: [
        'Tension aux bornes de la pile $U(I) = e_{th} - |\\eta_a| - |\\eta_c| - r_{int} I$',
        'Surtension anodique $\\eta_a > 0$ et cathodique $\\eta_c < 0$',
        'Allure des courbes $I-E$ avec les paliers de diffusion'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On étudie une pile à combustible hydrogène-oxygène ($H_2 / O_2$) en milieu acide à $298\\text{ K}$.\n1. Écrire les demi-équations aux électrodes et calculer $e_{th}$.\n2. Expliquer pourquoi la tension réelle mesurée à circuit ouvert est souvent de $0{,}95\\text{ V}$ au lieu de $1{,}23\\text{ V}$ théorique (cinétique très lente de réduction de $O_2$ sur le platine).',
      indicationsKholleur: [
        { condition: 'Thermodynamique', aide: '$E^\\circ(O_2/H_2O) = 1{,}23\\text{ V}$ et $E^\\circ(H^+/H_2) = 0\\text{ V}$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Tracé clair des courbes intensité-potentiel', poids: '40%' },
      { critere: 'Compréhension du point de fonctionnement de la pile', poids: '40%' },
      { critere: 'Calcul du rendement faradique et énergétique', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-37-organometalliques-grignard-synthese',
    titre: 'Chimie Organique : Réactifs de Grignard ($RMgX$) & Synthèse d\'Alcools',
    matiere: 'Chimie',
    filiere: 'PCSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Décrire la préparation d\'un organomagnésien mixte $R-Mg-X$ à partir d\'un halogénoalcane et de magnésium en présence d\'éther anhydre. Expliquer le phénomène d\'inversion de polarité (umpolung) sur le carbone.',
      pointsCles: [
        'Passage de $C^{\\delta+} - X^{\\delta-}$ à $C^{\\delta-} - Mg^{\\delta+}X$ : caractère carbanionique',
        'Rôle de solvant donneur de doublets de l\'éther pour solvater et stabiliser le magnésium',
        'Nécessité absolue de travailler en conditions strictement anhydres (destruction par l\'eau)'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Montrer comment préparer respectivement un alcool primaire, un alcool secondaire et un alcool tertiaire en faisant réagir un réactif de Grignard $RMgBr$ sur trois composés carbonylés différents. Écrire les mécanismes.',
      indicationsKholleur: [
        { condition: 'Carbonylés', aide: 'Formaldéhyde ($HCHO$) $\\to$ alcool primaire ; aldéhyde supérieur $\\to$ secondaire ; cétone $\\to$ tertiaire.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Maîtrise de la réactivité carbanionique', poids: '35%' },
      { critere: 'Mécanismes détaillés avec l\'étape d\'hydrolyse acide finale', poids: '45%' },
      { critere: 'Règles de sécurité opératoire (déshydratation du montage)', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-38-orga-diels-alder-cycloaddition',
    titre: 'Chimie Organique : Cycloaddition de Diels-Alder $[4+2]$ & Règle Endo',
    matiere: 'Chimie',
    filiere: 'PC',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Présenter la cycloaddition de Diels-Alder entre un diène conjugué et un diénophile. Donner les caractéristiques du mécanisme : réaction concertée, péricyclique, stéréospécifique syn.',
      pointsCles: [
        'Conformation obligatoire s-cis du diène pour former le cycle à 6 chaînons',
        'Stéréospécificité : la stéréochimie du diénophile (cis ou trans) est intégralement conservée dans le produit',
        'Rôle des substituants : accélérée par des groupements électrodonneurs sur le diène et électroattracteurs sur le diénophile'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On fait réagir le cyclopentadiène avec l\'anhydride maléique.\n1. Pourquoi la réaction conduit-elle préférentiellement à l\'isomère endo plutôt qu\'exo à basse température (contrôle cinétique) ?\n2. Expliquer le rôle des interactions orbitalaires secondaires.',
      indicationsKholleur: [
        { condition: 'Interactions secondaires', aide: 'Dans l\'état de transition endo, les orbitales $p$ des carbonyles du diénophile recouvrent favorablement l\'arrière des orbitales du diène, abaissant l\'énergie d\'activation.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur de la description orbitale frontière (HO-BV)', poids: '40%' },
      { critere: 'Explication géométrique 3D de la sélectivité endo', poids: '40%' },
      { critere: 'Contrôle cinétique vs contrôle thermodynamique', poids: '20%' }
    ]
  },

  // ==========================================
  // INFORMATIQUE (Khôlles 39 à 44)
  // ==========================================
  {
    id: 'kholle-cinq-39-info-arbres-avl-rotations',
    titre: 'Algorithmique : Arbres AVL & Rééquilibrage Logarithmique',
    matiere: 'Informatique',
    filiere: 'MPI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir un Arbre Binaire de Recherche Équilibré (AVL). Définir le facteur d\'équilibrage d\'un nœud. Démontrer que la hauteur d\'un AVL à $n$ nœuds vérifie $h \\le 1{,}44 \\log_2 n$.',
      pointsCles: [
        'Condition AVL : $|h(gauche) - h(droite)| \\le 1$ en tout nœud',
        'Arbre de Fibonacci comme pire cas minimisant le nombre de nœuds pour une hauteur donnée',
        'Complexité garantie en $\\mathcal{O}(\\log n)$ pour toutes les opérations élémentaires'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Décrire les quatre rotations élémentaires (Gauche, Droite, Gauche-Droite, Droite-Gauche). Écrire en pseudo-code ou Python la fonction `rotation_gauche(noeud)` en temps $\\mathcal{O}(1)$.',
      indicationsKholleur: [
        { condition: 'Pointeurs', aide: 'Le fils droit de $x$ devient la nouvelle racine ; le sous-arbre gauche de ce fils devient le nouveau fils droit de $x$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Preuve de la hauteur logarithmique par Fibonacci', poids: '40%' },
      { critere: 'Clarté des réaffectations de pointeurs en temps O(1)', poids: '40%' },
      { critere: 'Mise à jour correcte des hauteurs', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-40-info-graphes-composantes-fortement-connexes',
    titre: 'Graphes : Algorithme de Tarjan pour les Composantes Fortement Connexes',
    matiere: 'Informatique',
    filiere: 'MPI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir la relation d\'équivalence de forte connexité dans un graphe orienté. Qu\'est-ce que le graphe réduit des composantes fortement connexes ? Prouver qu\'il est toujours sans cycle orienté (DAG).',
      pointsCles: [
        '$u \\sim v \\iff$ il existe un chemin de $u$ à $v$ et un chemin de $v$ à $u$',
        'Les classes d\'équivalence forment les composantes fortement connexes (CFC)',
        'DAG réduit : si cycle, tous les nœuds du cycle fusionneraient en une seule CFC'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Expliquer le principe de l\'algorithme de Tarjan basé sur un unique parcours en profondeur (DFS) avec calcul des numéros d\'ordre et des valeurs de `lowlink`. Justifier la complexité linéaire $\\mathcal{O}(|V| + |E|)$.',
      indicationsKholleur: [
        { condition: 'Pile et lowlink', aide: '`lowlink[u]` est le plus petit numéro accessible depuis le sous-arbre de $u$ par au plus une arête arrière vers la pile.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Définition exacte des CFC et du DAG réduit', poids: '35%' },
      { critere: 'Gestion de la pile et invariant de Tarjan', poids: '45%' },
      { critere: 'Complexité linéaire optimale', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-41-info-prog-dynamique-knapsack',
    titre: 'Programmation Dynamique : Problème du Sac à Dos (0/1 Knapsack)',
    matiere: 'Informatique',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer le problème du sac à dos 0/1 : étant donnés $n$ objets de poids $w_i$ et de valeurs $v_i$, maximiser la valeur totale embarquée sous contrainte de capacité $W$. Établir l\'équation de récurrence de Bellman.',
      pointsCles: [
        'Sous-structure optimale : $OPT(i, w) = OPT(i-1, w)$ si $w_i > w$',
        'Alternative : $\\max(OPT(i-1, w), v_i + OPT(i-1, w - w_i))$',
        'Conditions aux limites : $OPT(0, w) = 0$ et $OPT(i, 0) = 0$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: '1. Écrire l\'algorithme de programmation dynamique itératif remplissant une table $n \\times W$.\n2. Donner sa complexité temporelle et spatiale. Pourquoi dit-on qu\'elle est pseudo-polynomiale ?\n3. Comment optimiser l\'espace mémoire pour n\'utiliser qu\'un tableau de taille $W+1$ ?',
      indicationsKholleur: [
        { condition: 'Parcours inverse', aide: 'Pour ne pas écraser les valeurs de l\'étape $i-1$, parcourez les capacités $w$ de $W$ en descendant jusqu\'à $w_i$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur de l\'équation de Bellman', poids: '35%' },
      { critere: 'Distinction cruciale polynomial vs pseudo-polynomial', poids: '35%' },
      { critere: 'Optimisation de la mémoire en O(W)', poids: '30%' }
    ]
  },
  {
    id: 'kholle-cinq-42-info-automates-langages-rationnels',
    titre: 'Théorie des Langages : Automates Finis Déterministes & Lemme de l\'Étoile',
    matiere: 'Informatique',
    filiere: 'MPI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir un automate fini déterministe (AFD) $\\mathcal{A} = (\\Sigma, Q, q_0, F, \\delta)$ et le langage reconnu $L(\\mathcal{A})$. Énoncer le théorème de Kleene.',
      pointsCles: [
        'Fonction de transition déterministe $\\delta : Q \\times \\Sigma \\to Q$',
        'Théorème de Kleene : équivalence entre langages réguliers (expressions rationnelles) et langages reconnus par automates finis',
        'Déterminisation par l\'algorithme des sous-ensembles (powersat construction)'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Énoncer le lemme de pompage (lemme de l\'étoile). En l\'appliquant de manière rigoureuse, prouver que le langage $L = \\{a^n b^n \\mid n \\ge 0\\}$ n\'est pas rationnel (il nécessite une pile mémoire).',
      indicationsKholleur: [
        { condition: 'Pumping lemma', aide: 'Prenez le mot $w = a^N b^N$ de longueur $\\ge N$. La factorisation $w = x y z$ avec $|x y| \\le N$ et $|y| \\ge 1$ impose que $y$ n\'est composé que de lettres $a$. Que se passe-t-il pour $x y^2 z$ ?' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Définition formelle de l\'AFD', poids: '35%' },
      { critere: 'Application du lemme de l\'étoile avec quantificateurs respectés', poids: '45%' },
      { critere: 'Conclusion sur la non-régularité', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-43-info-tri-fusion-master-theorem',
    titre: 'Diviser pour Régner : Tri Fusion & Master Theorem',
    matiere: 'Informatique',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Présenter le principe de l\'algorithme du tri fusion (Merge Sort). Écrire la fonction de fusion de deux listes triées de tailles $n_1$ et $n_2$ en temps linéaire $\\mathcal{O}(n_1 + n_2)$. Poser l\'équation de récurrence $T(n) = 2 T(n/2) + \\mathcal{O}(n)$.',
      pointsCles: [
        'Diviser en deux sous-tableaux de taille $n/2$',
        'Régner par récursion jusqu\'au cas de base $n \\le 1$',
        'Combiner par fusion de deux listes ordonnées en temps $\\mathcal{O}(n)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Énoncer le Master Theorem pour les relations de récurrence de la forme $T(n) = a T(n/b) + f(n)$. Démontrer que le tri fusion s\'exécute en $\\mathcal{O}(n \\log n)$ dans le pire des cas. Pourquoi le tri fusion est-il stable ?',
      indicationsKholleur: [
        { condition: 'Stabilité', aide: 'Lors de la comparaison d\'éléments égaux, on prend toujours en priorité l\'élément venant de la moitié gauche.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Écriture propre de la fusion linéaire', poids: '40%' },
      { critere: 'Preuve par arbre de récursion de la complexité $n\\log n$', poids: '40%' },
      { critere: 'Propriété de stabilité du tri', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-44-info-compression-huffman-glouton',
    titre: 'Algorithmes Gloutons : Codage Préfixe & Arbre de Huffman',
    matiere: 'Informatique',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir un code préfixe (aucun mot du code n\'est préfixe d\'un autre) et expliquer pourquoi il permet un décodage instantané sans ambiguïté. Associer tout code préfixe à un arbre binaire étiqueté.',
      pointsCles: [
        'Les caractères correspondent aux feuilles de l\'arbre binaire',
        'Longueur moyenne d\'un mot : $L = \\sum p_i \\ell_i$',
        'Inégalité de Kraft pour les codes préfixes : $\\sum 2^{-\\ell_i} \\le 1$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Décrire l\'algorithme glouton de Huffman pour construire un arbre de coût moyen minimal en utilisant une file de priorité (min-heap). Démontrer son optimalité en prouvant que les deux symboles les moins fréquents peuvent être choisis comme frères au niveau le plus profond de l\'arbre.',
      indicationsKholleur: [
        { condition: 'Propriété gloutonne', aide: 'Considérez un arbre optimal $T^*$ et échangez les deux feuilles de plus faible fréquence avec les feuilles les plus profondes : le coût ne peut que diminuer ou rester égal.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Définition des codes préfixes et liens avec les arbres', poids: '35%' },
      { critere: 'Fonctionnement de l\'algorithme avec le tas binaire en O(n log n)', poids: '40%' },
      { critere: 'Preuve d\'optimalité par échange glouton', poids: '25%' }
    ]
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR (Khôlles 45 à 50)
  // ==========================================
  {
    id: 'kholle-cinq-45-si-torseur-cinematique-varignon',
    titre: 'Cinématique du Solide : Torseur Cinématique, Formule de Varignon & CIR',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir le torseur cinématique d\'un solide indéformable $S$ par rapport à un repère $R$. Énoncer la formule de transport des vitesses de Varignon : $\\vec{V}(B \\in S/R) = \\vec{V}(A \\in S/R) + \\vec{\\Omega}(S/R) \\wedge \\vec{AB}$.',
      pointsCles: [
        'Champ des vitesses équiprojectif : caractère antisymétrique de l\'opérateur',
        'Vecteur rotation instantané $\\vec{\\Omega}(S/R)$ indépendant du point de réduction',
        'Axe instantané de rotation et Centre Instantané de Rotation (CIR) en mouvement plan'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On considère un mécanisme de bielle-manivelle plan. Déterminer géométriquement la position du CIR de la bielle par intersection des perpendiculaires aux vitesses des axes d\'articulation. En déduire la vitesse du piston en fonction de la vitesse de rotation de la manivelle.',
      indicationsKholleur: [
        { condition: 'Construction CIR', aide: 'La vitesse de la tête de bielle est orthogonale à la manivelle ; la vitesse du piston est axiale : le CIR est à l\'intersection de la droite de la manivelle et de la normale à l\'axe du cylindre passant par le piston.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur sur les points et solides considérés', poids: '40%' },
      { critere: 'Construction graphique du CIR sans hésitation', poids: '40%' },
      { critere: 'Calcul analytique par composition des torseurs', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-46-si-asservissement-bode-marges-stabilite',
    titre: 'Automatique & Asservissements : Marges de Phase et de Gain dans le Plan de Bode',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer le critère de stabilité de Nyquist simplifié (revers). Définir graphiquement la marge de phase $\\Delta\\Phi = 180^\\circ + \\varphi(\\omega_{0dB})$ et la marge de gain $\\Delta G = -20\\log |FTBO(j\\omega_{-180})|$ sur le diagramme de Bode de la boucle ouverte.',
      pointsCles: [
        'Pulsation de coupure à $0\\text{ dB}$ où $|FTBO| = 1$',
        'Pulsation d\'opposition de phase où $\\arg(FTBO) = -180^\\circ$',
        'Critères industriels recommandés : $\\Delta\\Phi \\ge 45^\\circ$ et $\\Delta G \\ge 6\\text{ dB}$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $FTBO(p) = \\frac{K}{p (1 + 0{,}1 p)^2}$.\n1. Tracer l\'allure asymptotique du diagramme de Bode.\n2. Déterminer la valeur maximale du gain statique $K_{max}$ pour assurer la stabilité du système en boucle fermée.\n3. Proposer un correcteur à avance de phase pour augmenter la marge de phase sans réduire la bande passante.',
      indicationsKholleur: [
        { condition: 'Phase à -180', aide: '$\\arg(FTBO) = -90^\\circ - 2 \\arctan(0{,}1\\omega) = -180^\\circ \\implies 0{,}1\\omega = 1$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Maîtrise absolue des définitions de marges', poids: '40%' },
      { critere: 'Tracé du diagramme de Bode et calcul de Kmax', poids: '40%' },
      { critere: 'Dimensionnement du correcteur', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-47-si-principe-fondamental-statique-frottement',
    titre: 'Statique du Solide : Principe Fondamental de la Statique & Lois de Coulomb',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'MPSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer le Principe Fondamental de la Statique (PFS) sous forme torsorielle. Présenter les lois de contact avec frottement de Coulomb : cône de frottement, conditions d\'adhérence et de glissement.',
      pointsCles: [
        '$\\sum \\{T_{ext \\to S}\\} = \\{0\\}$ en un point de réduction quelconque',
        'Adhérence : $\\|\\vec{T}\\| \\le f \\|\\vec{N}\\|$ (la réaction est dans le cône de demi-angle $\\varphi = \\arctan f$)',
        'Glissement : $\\|\\vec{T}\\| = f \\|\\vec{N}\\|$ avec $\\vec{T}$ opposé à la vitesse de glissement'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On étudie un tiroir de largeur $L$ guidé sur une glissière de profondeur $h$, poussé par une force axiale décalée d\'une distance $d$ de l\'axe central. Établir la condition géométrique sur $d$ provoquant le phénomène d\'arc-boutement (blocage irréversible quel que soit l\'effort exercé).',
      indicationsKholleur: [
        { condition: 'Arc-boutement', aide: 'Les réactions aux deux points d\'appui extrêmes doivent être sur les génératrices opposées de leurs cônes de frottement respectifs.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Écriture torsorielle propre du PFS', poids: '35%' },
      { critere: 'Construction graphique ou analytique de l\'arc-boutement', poids: '45%' },
      { critere: 'Sens physique du coincement', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-48-si-cinetique-matrice-inertie-huygens',
    titre: 'Cinétique du Solide : Matrice d\'Inertie & Théorème de Huygens',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'MP',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Définir la matrice d\'inertie $I(G, S)$ d\'un solide indéformable en son centre d\'inertie $G$. Expliquer la signification des moments d\'inertie diagonaux et des produits d\'inertie. Énoncer les règles de simplification par plans de symétrie matérielle.',
      pointsCles: [
        'Formule intégrale : $A = \\iiint (y^2 + z^2) \\mathrm{d}m$, $D = \\iiint y z \\mathrm{d}m$',
        'Plan de symétrie matérielle : le vecteur normal au plan est direction principale d\'inertie',
        'Deux plans orthogonaux de symétrie $\\implies$ base principale d\'inertie diagonale'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Énoncer le théorème de Huygens généralisé pour transporter la matrice d\'inertie du centre de gravité $G$ à un point quelconque $A$. Calculer le moment d\'inertie d\'un cylindre plein homogène par rapport à son axe de révolution et par rapport à une génératrice tangentielle.',
      indicationsKholleur: [
        { condition: 'Huygens scalaire', aide: '$I_{\\Delta}(A) = I_{\\Delta}(G) + m d^2$ où $d$ est la distance entre les axes parallèles.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Rigueur des intégrales cinétiques et symétries', poids: '40%' },
      { critere: 'Application correcte du théorème de transport de Huygens', poids: '40%' },
      { critere: 'Unités physiques et ordres de grandeur', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-49-si-puissances-virtuelles-mecanisme',
    titre: 'Dynamique Analytique : Principe des Puissances Virtuelles (PPV)',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PSI',
    dureePrepMin: 15,
    dureePassageMin: 25,
    questionDeCours: {
      enonce: 'Énoncer le Principe des Puissances Virtuelles (PPV) pour un ensemble de solides indéformables : pour tout mouvement virtuel cinématiquement admissible, $P_{acc}^* = P_{ext}^* + P_{int}^*$. Définir la puissance des actions mutuelles dans une liaison parfaite.',
      pointsCles: [
        'Mouvement virtuel défini par un champ de torseurs cinématiques virtuels $\\{V^*(S_i/R)\\}$',
        'Liaison géométriquement parfaite et sans frottement : puissance virtuelle intérieure $P_{int}^* = 0$',
        'Avantage majeur : élimination automatique des inconnues de liaison sans avoir à isoler chaque solide'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Appliquer le PPV pour établir directement l\'équation différentielle du mouvement d\'un treuil soulevant une charge de masse $M$, entraîné par un moteur développant un couple $C_m(t)$, en tenant compte de l\'inertie du tambour $J$.',
      indicationsKholleur: [
        { condition: 'Vitesse virtuelle', aide: 'Choisissez comme vitesse virtuelle le paramètre de rotation $\\omega^*$ du tambour : la vitesse verticale de la charge est alors $v^* = R \\omega^*$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Énoncé formel du PPV et notion de virtualité', poids: '40%' },
      { critere: 'Calcul des puissances virtuelles d\'accélération et d\'effort', poids: '40%' },
      { critere: 'Obtention directe de l\'équation sans inconnues parasites', poids: '20%' }
    ]
  },
  {
    id: 'kholle-cinq-50-si-premier-ordre-second-ordre-reponse-indicielle',
    titre: 'Identification des Systèmes : Réponse Indicielle des Systèmes du 1er et 2nd Ordre',
    matiere: 'Sciences de l\'Ingénieur',
    filiere: 'PCSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Pour un système linéaire du 1er ordre de fonction de transfert $H(p) = \\frac{K}{1 + \\tau p}$ soumis à un échelon unitaire $e(t) = u(t)$, donner l\'expression temporelle de la réponse $s(t)$, la pente à l\'origine et le temps de réponse à $5\\%$.',
      pointsCles: [
        'Réponse $s(t) = K (1 - e^{-t/\\tau})$',
        'Pente à l\'origine non nulle : $s\'(0) = K/\\tau$',
        'Valeur à $t = \\tau$ : $63\\%$, temps de réponse à $5\\%$ : $t_{r5\\%} = 3\\tau$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Pour un second ordre $H(p) = \\frac{K}{1 + \\frac{2\\xi}{\\omega_0} p + \\frac{p^2}{\\omega_0^2}}$ avec facteur d\'amortissement $\\xi < 1$ (régime sous-amorti) :\n1. Pourquoi la pente à l\'origine de la réponse indicielle est-elle rigoureusement nulle ?\n2. Établir l\'expression du premier dépassement relatif $D_{1\\%} = 100 \\, e^{-\\frac{\\pi \\xi}{\\sqrt{1-\\xi^2}}}$.\n3. Comment identifier graphiquement $\\xi, \\omega_0$ et $K$ à partir d\'une courbe expérimentale ?',
      indicationsKholleur: [
        { condition: 'Dépassement', aide: 'Dérivez la réponse temporelle pseudo-oscillante pour trouver l\'instant du premier maximum $t_1 = \\frac{\\pi}{\\omega_0 \\sqrt{1-\\xi^2}}$.' }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Caractéristiques temporelles du 1er ordre ($3\\tau$)', poids: '35%' },
      { critere: 'Démonstration du dépassement du 2nd ordre', poids: '45%' },
      { critere: 'Méthode d\'identification expérimentale rapide', poids: '20%' }
    ]
  }
];
