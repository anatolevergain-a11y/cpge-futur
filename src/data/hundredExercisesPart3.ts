import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART3: ExerciseItem[] = [
  {
    id: 'exo-100-26-saponification-cinetique-ordre2',
    title: 'Cinétique d\'Ordre 2 de la Saponification de l\'Acétate d\'Éthyle par Conductimétrie',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Cinétique Chimique & Conductimétrie',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP Chimie',
    dureeEstimeeMin: 35,
    enonce: 'On étudie la réaction de saponification de l\'acétate d\'éthyle par la soude à $25^\\circ\\text{C}$ :\n$$\\text{CH}_3\\text{COOCH}_2\\text{CH}_3 + \\text{HO}^- \\to \\text{CH}_3\\text{COO}^- + \\text{CH}_3\\text{CH}_2\\text{OH}$$\nOn mélange à $t=0$ des volumes égaux de solutions de réactifs de concentrations initiales identiques $C_0 = 1.0\\times 10^{-2}\\text{ mol/L}$. On suit la réaction par mesure de la conductivité $\\sigma(t)$.\n1. En notant $x(t)$ l\'avancement volumique, exprimer les concentrations $[\\text{HO}^-]$ et $[\\text{CH}_3\\text{COO}^-]$ à l\'instant $t$.\n2. Exprimer la conductivité $\\sigma(t)$ en fonction de $\\sigma_0 = \\sigma(t=0)$, $\\sigma_\\infty = \\sigma(t\\to+\\infty)$ et du taux d\'avancement $\\alpha(t) = x(t)/C_0$.\n3. Sachant que la réaction est d\'ordre 1 par rapport à chaque réactif (ordre global 2), intégrer l\'équation cinétique et donner la forme linéarisée permettant de déterminer la constante de vitesse $k$ à partir des mesures de conductivité.',
    hints: [
      'À stœchiométrie 1:1 et concentrations égales, $\\frac{\\mathrm{d}x}{\\mathrm{d}t} = k (C_0 - x)^2$.',
      'La conductivité varie linéairement avec l\'avancement : $\\alpha(t) = \\frac{\\sigma_0 - \\sigma(t)}{\\sigma_0 - \\sigma_\\infty}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Tableau d\'avancement en milieu stœchiométrique',
          explication: 'À tout instant $t$ :\n- $[\\text{CH}_3\\text{COOCH}_2\\text{CH}_3](t) = C_0 - x(t)$\n- $[\\text{HO}^-](t) = C_0 - x(t)$\n- $[\\text{CH}_3\\text{COO}^-](t) = x(t)$\n- $[\\text{Na}^+](t) = C_0$ (ion spectateur inerte)\n- L\'éthanol formé est une molécule neutre ne participant pas à la conduction électrique.'
        },
        {
          titre: '2. Expression de la conductivité de Kohlrausch',
          explication: 'La conductivité s\'écrit :\n$$\\sigma(t) = \\lambda_{\\text{Na}^+} C_0 + \\lambda_{\\text{HO}^-} (C_0 - x(t)) + \\lambda_{\\text{CH}_3\\text{COO}^-} x(t)$$\n- À $t=0$ : $\\sigma_0 = (\\lambda_{\\text{Na}^+} + \\lambda_{\\text{HO}^-}) C_0$.\n- À $t\\to+\\infty$ ($x = C_0$) : $\\sigma_\\infty = (\\lambda_{\\text{Na}^+} + \\lambda_{\\text{CH}_3\\text{COO}^-}) C_0$.\nLa différence vaut :\n$$\\sigma_0 - \\sigma(t) = (\\lambda_{\\text{HO}^-} - \\lambda_{\\text{CH}_3\\text{COO}^-}) x(t)$$\n$$\\sigma_0 - \\sigma_\\infty = (\\lambda_{\\text{HO}^-} - \\lambda_{\\text{CH}_3\\text{COO}^-}) C_0$$\nEn faisant le quotient, on élimine les conductivités ioniques molaires :\n$$\\alpha(t) = \\frac{x(t)}{C_0} = \\frac{\\sigma_0 - \\sigma(t)}{\\sigma_0 - \\sigma_\\infty}$$'
        },
        {
          titre: '3. Intégration cinétique et détermination de $k$',
          explication: 'La vitesse s\'écrit :\n$$\\frac{\\mathrm{d}x}{\\mathrm{d}t} = k [\\text{Ester}][\\text{HO}^-] = k (C_0 - x)^2$$\nEn intégrant par séparation des variables :\n$$\\int_0^x \\frac{\\mathrm{d}x}{(C_0 - x)^2} = k \\int_0^t \\mathrm{d}t \\implies \\frac{1}{C_0 - x} - \\frac{1}{C_0} = k t \\iff \\frac{x}{C_0(C_0 - x)} = k t$$\nEn divisant par $C_0$ :\n$$\\frac{\\alpha(t)}{1 - \\alpha(t)} = C_0 k t$$\nEn remplaçant $\\alpha(t)$ par son expression conductimétrique :\n$$\\frac{\\sigma_0 - \\sigma(t)}{\\sigma(t) - \\sigma_\\infty} = C_0 k t$$\nLe tracé de $y = \\frac{\\sigma_0 - \\sigma(t)}{\\sigma(t) - \\sigma_\\infty}$ en fonction du temps $t$ est une droite passant par l\'origine, dont la pente vaut $p = C_0 k$, ce qui permet de calculer directement $k = p / C_0$.'
        }
      ],
      conclusion: 'La conductimétrie est la méthode reine de suivi des réactions ioniques car elle évite tout prélèvement d\'échantillon.',
      reflexeDuCorrecteur: 'Pour relier un signal physique $S(t)$ à l\'avancement, écrivez toujours $\\frac{x}{x_{max}} = \\frac{S(t) - S_0}{S_\\infty - S_0}$.'
    }
  },
  {
    id: 'exo-100-27-nernst-pile-concentration-danielle',
    title: 'Pile Daniell & Équilibre Électrochimique d\'une Pile de Concentration',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Oxydoréduction & Électrochimie',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'On réalise une pile de concentration à $25^\\circ\\text{C}$ constituée de deux électrodes de cuivre plongeant dans deux compartiments reliés par un pont salin au nitrate de potassium :\n- Compartiment 1 : solution de sulfate de cuivre à concentration $C_1 = 1.0\\times 10^{-1}\\text{ mol/L}$ ;\n- Compartiment 2 : solution de sulfate de cuivre à concentration inconnue $C_2 < C_1$.\n1. Donner le schéma conventionnel de la pile et écrire la réaction de fonctionnement spontané.\n2. La force électromotrice mesurée est $E_{pile} = 59.1\\text{ mV}$. Calculer la concentration $C_2$.\n3. On ajoute dans le compartiment 2 de l\'ammoniac $NH_3$ en excès de façon à complexer la quasi-totalité des ions $Cu^{2+}$ sous forme de complexe tétramminecuivre(II) $[Cu(NH_3)_4]^{2+}$ de constante globale de formation $\\beta_4 = 10^{13}$. Expliquer l\'évolution de la f.é.m. de la pile.',
    hints: [
      'Formule de Nernst pour chaque demi-pile : $E = E^\\circ + \\frac{0.0591}{2}\\log_{10}[Cu^{2+}]$.',
      'La complexation abaisse drastiquement $[Cu^{2+}]$, ce qui augmente la différence de potentiel.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Schéma conventionnel et polarités',
          explication: 'Le compartiment le plus concentré $C_1$ a le potentiel le plus élevé : c\'est le pôle positif (cathode) où se produit la réduction $Cu^{2+}(C_1) + 2e^- \\to Cu(s)$.\nLe compartiment le moins concentré $C_2$ est le pôle négatif (anode) où se produit l\'oxydation $Cu(s) \\to Cu^{2+}(C_2) + 2e^-$.\nSchéma de la pile :\n$$\\ominus \\; Cu(s) \\mid Cu^{2+}(C_2) \\;\\parallel\\; Cu^{2+}(C_1) \\mid Cu(s) \\; \\oplus$$\nRéaction globale spontanée tendant à égaliser les concentrations :\n$$Cu^{2+}(C_1) \\rightleftharpoons Cu^{2+}(C_2)$$'
        },
        {
          titre: '2. Calcul de la concentration inconnue $C_2$',
          explication: 'D\'après la formule de Nernst :\n$$E_{pile} = E_+ - E_- = \\left(E^\\circ + \\frac{0.0591}{2}\\log C_1\\right) - \\left(E^\\circ + \\frac{0.0591}{2}\\log C_2\\right) = \\frac{0.0591}{2} \\log_{10}\\left(\\frac{C_1}{C_2}\\right)$$\nAvec $E_{pile} = 0.0591\\text{ V}$ :\n$$0.0591 = \\frac{0.0591}{2} \\log_{10}\\left(\\frac{C_1}{C_2}\\right) \\implies \\log_{10}\\left(\\frac{C_1}{C_2}\\right) = 2 \\implies \\frac{C_1}{C_2} = 10^2 = 100$$\nOn en déduit immédiatement la concentration du compartiment 2 :\n$$C_2 = \\frac{C_1}{100} = \\frac{1.0\\times 10^{-1}}{100} = 1.0\\times 10^{-3}\\text{ mol/L}$$'
        },
        {
          titre: '3. Effet de la complexation par l\'ammoniac',
          explication: 'L\'ajout d\'ammoniac déplace l\'équilibre $Cu^{2+} + 4 NH_3 \\rightleftharpoons [Cu(NH_3)_4]^{2+}$. La concentration résiduelle en ions libres $Cu^{2+}$ s\'effondre vers des valeurs infimes ($[Cu^{2+}] \\sim 10^{-14}\\text{ M}$). Le potentiel d\'électrode $E_-$ chute fortement : la force électromotrice de la pile $E_{pile} = E_+ - E_-$ subit une **augmentation spectaculaire**, pouvant dépasser $0.35\\text{ V}$.'
        }
      ],
      conclusion: 'Les piles de concentration sont la base des électrodes sélectives à membrane pour la mesure du pH (électrode de verre) et des dosages potentiométriques.',
      reflexeDuCorrecteur: 'Dans une pile de concentration, le terme $E^\\circ$ s\'élimine rigoureusement par soustraction.'
    }
  },
  {
    id: 'exo-100-28-fourier-onde-thermique-sol',
    title: 'Diffusion Thermique dans le Sol & Amortissement de l\'Onde Thermique Solaire',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Transferts Thermiques Conductifs',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / Mines-Ponts PC',
    dureeEstimeeMin: 40,
    enonce: 'La surface du sol ($z=0$) est soumise à une oscillation thermique sinusoïdale due à l\'alternance jour/nuit ou aux saisons : $T(0, t) = T_0 + \\Delta T \\cos(\\omega t)$. Le sol est caractérisé par une conductivité thermique $\\lambda$, une masse volumique $\\rho$ et une capacité thermique massique $c$ (diffusivité thermique $D = \\frac{\\lambda}{\\rho c}$).\n1. Écrire l\'équation de la chaleur 1D unidirectionnelle selon $z$.\n2. En cherchant une onde thermique plane sous la forme complexe $\\underline{T}(z, t) = T_0 + \\underline{\\theta}(z) e^{j \\omega t}$, établir l\'expression du profil de température $T(z, t)$.\n3. Définir la profondeur de pénétration caractéristique $\\delta$ de l\'onde thermique.\n4. Application géothermique : Sachant que pour le sol calcaire $D \\approx 10^{-6}\\text{ m}^2/\\text{s}$, calculer la profondeur $\\delta_{jour}$ pour l\'onde journalière ($T_1 = 24\\text{ h}$) et $\\delta_{an}$ pour l\'onde annuelle ($T_2 = 365\\text{ jours}$). À quelle profondeur faut-il enterrer une cave à vin pour que la température y soit maximale au cœur de l\'hiver ?',
    hints: [
      'Poser $\\underline{k} = \\sqrt{\\frac{\\omega}{2D}} (1 - j)$ tel que $\\underline{k}^2 = -j \\omega / D$.',
      'Le déphasage de $\\pi$ (opposition de phase hiver/été) intervient pour $z = \\pi \\delta$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation de la chaleur 1D',
          explication: 'D\'après le bilan d\'énergie thermique avec la loi de Fourier $\\vec{j}_{th} = -\\lambda \\frac{\\partial T}{\\partial z} \\vec{u}_z$ et sans source volumique interne :\n$$\\frac{\\partial T}{\\partial t} = D \\frac{\\partial^2 T}{\\partial z^2} \\quad \\text{avec} \\quad D = \\frac{\\lambda}{\\rho c}$$'
        },
        {
          titre: '2. Solution en régime harmonique établi',
          explication: 'En posant $T(z, t) - T_0 = \\mathrm{Re}(\\underline{\\theta}(z) e^{j\\omega t})$ :\n$$j \\omega \\underline{\\theta} = D \\underline{\\theta}\'\' \\implies \\underline{\\theta}\'\' - \\frac{j \\omega}{D} \\underline{\\theta} = 0$$\nComme $\\sqrt{j} = e^{j\\pi/4} = \\frac{1 + j}{\\sqrt{2}}$, l\'équation caractéristique a pour racines $\\pm (1 + j) \\sqrt{\\frac{\\omega}{2D}}$. En éliminant la solution exponentiellement divergente vers le bas ($z \\to +\\infty$) :\n$$\\underline{\\theta}(z) = \\Delta T e^{-(1 + j) z / \\delta} \\quad \\text{avec} \\quad \\delta = \\sqrt{\\frac{2D}{\\omega}}$$\nLa température réelle dans le sol s\'écrit donc :\n$$T(z, t) = T_0 + \\Delta T e^{-z / \\delta} \\cos\\left(\\omega t - \\frac{z}{\\delta}\\right)$$'
        },
        {
          titre: '3. Profondeur de pénétration $\\delta$',
          explication: 'L\'onde thermique est une onde fortement dispersive et évanescente : son amplitude est divisée par $e \\approx 2.72$ à chaque profondeur $\\delta$. Elle se propage à la vitesse de phase $v_\\varphi = \\omega \\delta = \\sqrt{2 D \\omega}$ avec un retard de phase $\\Delta\\phi = z / \\delta$.'
        },
        {
          titre: '4. Applications numériques géologiques',
          explication: '- Période journalière ($T_1 = 86400\\text{ s}$, $\\omega_1 = \\frac{2\\pi}{86400} \\approx 7.27\\times 10^{-5}\\text{ s}^{-1}$) :\n$$\\delta_{jour} = \\sqrt{\\frac{2 \\times 10^{-6}}{7.27\\times 10^{-5}}} \\approx 0.166\\text{ m} \\approx 17\\text{ cm}$$\nÀ seulement $50\\text{ cm}$ de profondeur, les variations journalières de température sont totalement imperceptibles.\n- Période annuelle ($T_2 = 365 \\times 86400 \\approx 3.15\\times 10^7\\text{ s}$, $\\omega_2 = 2.0\\times 10^{-7}\\text{ s}^{-1}$) :\n$$\\delta_{an} = \\sqrt{\\frac{2 \\times 10^{-6}}{2.0\\times 10^{-7}}} = \\sqrt{10} \\approx 3.16\\text{ mètres}$$\n- Inversion de saison (opposition de phase) : pour avoir un déphasage de $\\pi$ (température la plus chaude en janvier et la plus froide en juillet), il faut $z / \\delta_{an} = \\pi$, soit :\n$$z = \\pi \\delta_{an} = \\pi \\times 3.16\\text{ m} \\approx 9.9\\text{ mètres}$$\nÀ environ $10\\text{ m}$ de profondeur sous terre, les saisons thermiques sont exactement inversées par rapport à la surface.'
        }
      ],
      conclusion: 'Ce déphasage thermique est le fondement du puits canadien (géothermie de surface passive) pour le confort thermique des bâtiments.',
      reflexeDuCorrecteur: 'L\'épaisseur de peau thermique varie en $\\sqrt{T}$ : l\'onde annuelle pénètre $\\sqrt{365} \\approx 19$ fois plus profondément que l\'onde journalière.'
    }
  },
  {
    id: 'exo-100-29-spectrophotometrie-pka-indicateur',
    title: 'Détermination du $pK_a$ d\'un Indicateur Coloré par Spectrophotométrie UV-Visible',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Équilibres en Solution & Spectrophotométrie',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP Chimie',
    dureeEstimeeMin: 35,
    enonce: 'On étudie la forme acide $HIn$ et la forme basique $In^-$ du bleu de bromothymol (BBT) en solution aqueuse à concentration totale constante $C_0 = 5.0\\times 10^{-5}\\text{ mol/L}$. On mesure l\'absorbance $A$ à une longueur d\'onde fixée $\\lambda = 615\\text{ nm}$ dans une cuve de $l = 1.0\\text{ cm}$ pour différentes valeurs de pH tamponnées :\n- En milieu très acide ($pH = 1.0$) : la forme $HIn$ jaune domine seule, l\'absorbance mesurée est $A_{acide} = 0.050$ ;\n- En milieu très basique ($pH = 12.0$) : la forme $In^-$ bleue domine seule, l\'absorbance mesurée est $A_{base} = 0.950$.\n1. Démontrer la relation reliant l\'absorbance mesurée $A$ au pH de la solution :\n$$pH = pK_a + \\log_{10}\\left( \\frac{A - A_{acide}}{A_{base} - A} \\right)$$\n2. Pour une solution tamponnée à $pH = 7.10$, l\'absorbance mesurée vaut $A = 0.500$. En déduire la valeur du $pK_a$ du BBT.\n3. Qu\'appelle-t-on point isobestique sur une famille de spectres d\'absorption $A = f(\\lambda)$ à différents pH ? Quelle est sa signification chimique ?',
    hints: [
      'Appliquer la loi d\'additivité de Beer-Lambert : $A = \\varepsilon_A l [HIn] + \\varepsilon_B l [In^-]$.',
      'Au point isobestique, les coefficients d\'extinction molaire des deux formes sont strictement égaux : $\\varepsilon_A(\\lambda_{iso}) = \\varepsilon_B(\\lambda_{iso})$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Établissement de la relation absorbance-pH',
          explication: 'À tout pH, la conservation de la matière impose $[HIn] + [In^-] = C_0$.\nL\'absorbance additif s\'écrit :\n$$A = \\varepsilon_{HIn} l [HIn] + \\varepsilon_{In^-} l [In^-]$$\n- En milieu très acide : $[HIn] = C_0, [In^-] = 0 \\implies A_{acide} = \\varepsilon_{HIn} l C_0$.\n- En milieu très basique : $[In^-] = C_0, [HIn] = 0 \\implies A_{base} = \\varepsilon_{In^-} l C_0$.\nEn exprimant les écarts :\n$$A - A_{acide} = (\\varepsilon_{In^-} - \\varepsilon_{HIn}) l [In^-]$$\n$$A_{base} - A = (\\varepsilon_{In^-} - \\varepsilon_{HIn}) l [HIn]$$\nEn faisant le rapport des deux équations :\n$$\\frac{[In^-]}{[HIn]} = \\frac{A - A_{acide}}{A_{base} - A}$$\nEn injectant dans l\'équation d\'Henderson-Hasselbalch $pH = pK_a + \\log_{10}\\left(\\frac{[In^-]}{[HIn]}\\right)$ :\n$$pH = pK_a + \\log_{10}\\left( \\frac{A - A_{acide}}{A_{base} - A} \\right)$$'
        },
        {
          titre: '2. Détermination expérimentale du $pK_a$',
          explication: 'Avec les valeurs numériques fournies pour $pH = 7.10$ et $A = 0.500$ :\n$$\\frac{A - A_{acide}}{A_{base} - A} = \\frac{0.500 - 0.050}{0.950 - 0.500} = \\frac{0.450}{0.450} = 1.00$$\nOn a donc $\\log_{10}(1.00) = 0$, d\'où directement :\n$$pK_a = pH = 7.10$$\nLe $pK_a$ du bleu de bromothymol est de $7.10$ à $25^\\circ\\text{C}$, avec une zone de virage s\'étendant de $pH = 6.0$ (jaune) à $pH = 7.6$ (bleu).'
        },
        {
          titre: '3. Notion et signification du point isobestique',
          explication: 'Un point isobestique est une longueur d\'onde $\\lambda_{iso}$ pour laquelle les spectres d\'absorption $A = f(\\lambda)$ de toutes les solutions de pH différents se coupent en un point unique rigoureusement fixe. En ce point, $\\varepsilon_{HIn}(\\lambda_{iso}) = \\varepsilon_{In^-}(\\lambda_{iso}) = \\varepsilon_{iso}$, ce qui donne $A(\\lambda_{iso}) = \\varepsilon_{iso} l ([HIn] + [In^-]) = \\varepsilon_{iso} l C_0 = \\text{constante}$.\nL\'existence d\'un point isobestique net est la **preuve expérimentale formelle qu\'il n\'existe que deux espèces absorbantes en équilibre mutuel** dans la solution, sans intermédiaire réactionnel stable ni sous-produit parasite.'
        }
      ],
      conclusion: 'La spectrophotométrie couplée au point isobestique est la méthode de référence pour mesurer les constantes thermodynamiques des biomolécules.',
      reflexeDuCorrecteur: 'Si des courbes de pH variés ne concourent pas en un point isobestique net, suspectez immédiatement une réaction secondaire ou une dégradation du colorant.'
    }
  },
  {
    id: 'exo-100-30-polarisation-malus-lame-quart-donde',
    title: 'Polarisation de la Lumière, Loi de Malus & Lame Quart d\'Onde',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Optique Ondulatoire & Polarisation',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Un faisceau lumineux non polarisé d\'intensité $I_0$ traverse un premier polariseur rectiligne $P_1$ d\'axe vertical $\\vec{u}_y$.\n1. Quelle est l\'intensité $I_1$ transmise par $P_1$ ?\n2. On place ensuite un second polariseur $P_2$ (analyseur) dont l\'axe fait un angle $\\theta$ avec $\\vec{u}_y$. Énoncer la loi de Malus et donner l\'intensité $I_2(\\theta)$ émergeant de $P_2$.\n3. On intercale entre $P_1$ et $P_2$ une lame quart d\'onde ($\\lambda/4$) biréfringente dont la ligne neutre rapide est orientée à $45^\\circ$ de l\'axe de $P_1$. Déterminer l\'état de polarisation de la lumière émergeant de la lame quart d\'onde et calculer la nouvelle intensité $I_3$ émergeant de $P_2$ en fonction de $\\theta$.',
    hints: [
      'Pour de la lumière naturelle non polarisée, la moyenne temporelle de $\\cos^2\\phi$ vaut $1/2$.',
      'Une onde polarisée rectilignement à $45^\\circ$ des lignes neutres d\'une lame quart d\'onde ressort polarisée circulairement.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Traversée du premier polariseur',
          explication: 'La lumière naturelle non polarisée possède une direction de polarisation fluctuant aléatoirement et isotropiquement dans le plan transverse. Le polariseur ne sélectionne que la composante selon son axe de transmission. L\'intensité moyenne transmise est exactement la moitié de l\'intensité incidente :\n$$I_1 = \\frac{I_0}{2}$$'
        },
        {
          titre: '2. Loi de Malus',
          explication: 'L\'onde incidente sur $P_2$ est polarisée rectilignement selon $\\vec{u}_y$ avec une amplitude de champ électrique $E_1 = \\sqrt{2 I_1 / (\\varepsilon_0 c)}$.\nL\'analyseur ne laisse passer que la projection de l\'amplitude sur son axe orienté à $\\theta$ : $E_2 = E_1 \\cos\\theta$.\nL\'intensité étant proportionnelle au carré de l\'amplitude, on obtient la loi de Malus :\n$$I_2(\\theta) = I_1 \\cos^2\\theta = \\frac{I_0}{2} \\cos^2\\theta$$\nPour $\\theta = 90^\\circ$ (polariseurs croisés), $I_2 = 0$ (extinction complète).'
        },
        {
          titre: '3. Insertion d\'une lame quart d\'onde à $45^\\circ$',
          explication: 'La lame quart d\'onde introduit un déphasage de $\\Delta\\phi = \\frac{\\pi}{2}$ entre ses deux axes neutres. Le champ incident rectiligne à $45^\\circ$ se décompose en deux composantes d\'égales amplitudes selon les axes de la lame : $E_x = E_0 \\cos(\\omega t)$ et $E_y = E_0 \\cos(\\omega t + \\pi/2) = -E_0 \\sin(\\omega t)$.\nLa lumière émergeante est **polarisée circulairement droite ou gauche**.\nUne onde circulaire possède un vecteur champ électrique tournant à pulsation $\\omega$ de module strictement constant. Sa projection sur n\'importe quel axe de polarisation linéaire donne donc exactement la même intensité, indépendamment de l\'angle $\\theta$ de l\'analyseur :\n$$I_3(\\theta) = \\frac{I_1}{2} = \\frac{I_0}{4} = \\text{constante}$$\nLa rotation de l\'analyseur $P_2$ ne modifie plus l\'intensité transmise : il n\'y a plus aucune extinction.'
        }
      ],
      conclusion: 'La lame quart d\'onde permet de transformer une polarisation rectiligne en polarisation circulaire, principe utilisé dans les lunettes de cinéma 3D RealD et la microscopie de polarisation en pétrographie et biologie cellulaire.',
      reflexeDuCorrecteur: 'Lame $\\lambda/4$ attaquée à $45^\\circ$ $\\implies$ polarisation circulaire $\\implies$ intensité transmise par un analyseur indépendante de son orientation.'
    }
  }
];
