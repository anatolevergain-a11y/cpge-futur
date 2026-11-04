import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART4: ExerciseItem[] = [
  {
    id: 'exo-100-31-thermodynamique-cycle-diesel',
    title: 'Cycle Moteur Diesel à Allumage par Compression & Taux d\'Injection',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Thermodynamique des Machines',
    filieres: ['BCPST', 'PSI', 'PC', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'On étudie le cycle Diesel standard réversible pour un gaz parfait d\'indice adiabatique $\\gamma = 1.40$ :\n- $1\\to 2$ : compression adiabatique réversible de taux de compression volumique $a = V_1 / V_2 > 1$ ;\n- $2\\to 3$ : combustion isobare sous pression maximale $P_2 = P_3$ avec un rapport d\'injection $r_c = V_3 / V_2 > 1$ ;\n- $3\\to 4$ : détente adiabatique réversible jusqu\'au volume initial $V_4 = V_1$ ;\n- $4\\to 1$ : échappement isochore au volume $V_1$ ramenant le fluide à $P_1, T_1$.\n1. Représenter le cycle dans le diagramme de Clapeyron $(P, V)$.\n2. Exprimer le travail net produit $W_{net}$ et la chaleur reçue $Q_{23}$ en fonction des températures aux sommets du cycle.\n3. Démontrer que le rendement thermique s\'écrit :\n$$\\eta = 1 - \\frac{1}{a^{\\gamma-1}} \\left[ \\frac{r_c^\\gamma - 1}{\\gamma (r_c - 1)} \\right]$$\n4. Comparer au rendement du cycle Beau de Rochas (Otto) à même taux de compression $a$.',
    hints: [
      'Sur l\'isobare, $Q_{23} = C_p (T_3 - T_2)$. Sur l\'isochore, $Q_{41} = C_v (T_1 - T_4)$.',
      'Utiliser les lois de Laplace $T V^{\\gamma-1} = \\text{cste}$ sur les deux adiabatiques.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Diagramme de Clapeyron',
          explication: 'Le cycle comporte deux adiabatiques à forte pente $P V^\\gamma = \\text{cste}$ ($1\\to 2$ et $3\\to 4$), reliées en haut par un palier horizontal isobare ($2\\to 3$) et à droite par une droite verticale isochore ($4\\to 1$). Le cycle est fermé, parcouru dans le sens horaire moteur.'
        },
        {
          titre: '2. Bilan d\'énergie du cycle',
          explication: 'Par le premier principe sur un cycle : $-W_{net} = Q_{net} = Q_{23} + Q_{41}$.\n- Chaleur apportée par le carburant (isobare) : $Q_C = Q_{23} = C_p (T_3 - T_2) > 0$.\n- Chaleur rejetée aux gaz d\'échappement (isochore) : $Q_F = Q_{41} = C_v (T_1 - T_4) < 0$.\nLe rendement thermique s\'exprime par :\n$$\\eta = \\frac{-W_{net}}{Q_C} = 1 + \\frac{Q_{41}}{Q_{23}} = 1 - \\frac{C_v (T_4 - T_1)}{C_p (T_3 - T_2)} = 1 - \\frac{1}{\\gamma} \\frac{T_4 - T_1}{T_3 - T_2}$$'
        },
        {
          titre: '3. Expression en fonction des paramètres géométriques',
          explication: 'En exprimant les températures par rapport à $T_1$ :\n- $1\\to 2$ (adiabatique) : $T_2 = T_1 (V_1/V_2)^{\\gamma-1} = T_1 a^{\\gamma-1}$.\n- $2\\to 3$ (isobare) : $T_3 = T_2 (V_3/V_2) = T_1 a^{\\gamma-1} r_c$.\n- $3\\to 4$ (adiabatique) : $T_4 = T_3 (V_3/V_4)^{\\gamma-1} = T_3 (r_c V_2 / (a V_2))^{\\gamma-1} = T_1 a^{\\gamma-1} r_c \\left(\\frac{r_c}{a}\\right)^{\\gamma-1} = T_1 r_c^\\gamma$.\nEn substituant dans le rendement :\n$$\\eta = 1 - \\frac{1}{\\gamma} \\frac{T_1 (r_c^\\gamma - 1)}{T_1 a^{\\gamma-1} (r_c - 1)} = 1 - \\frac{1}{a^{\\gamma-1}} \\left[ \\frac{r_c^\\gamma - 1}{\\gamma(r_c - 1)} \\right]$$'
        },
        {
          titre: '4. Comparaison avec le moteur essence (Otto)',
          explication: 'La fonction $f(x) = \\frac{x^\\gamma - 1}{\\gamma(x - 1)}$ est strictement supérieure à 1 pour tout $x = r_c > 1$ (car $\\gamma = 1.4 > 1$). Par conséquent, à taux de compression $a$ identique, le cycle Otto a un rendement théorique supérieur au cycle Diesel. Cependant, comme le Diesel comprime de l\'air pur sans carburant, il ne risque pas d\'auto-allumage prématuré (cliquetis) : on peut utiliser des taux de compression bien plus élevés ($a \\approx 18-22$ pour le Diesel contre $a \\approx 10$ pour l\'essence), ce qui lui confère en pratique un rendement global bien supérieur (environ $42\\%$ contre $32\\%$).'
        }
      ],
      conclusion: 'L\'intérêt thermodynamique du moteur Diesel provient de son taux de compression élevé rendu possible par l\'absence de carburant pendant la phase de compression.',
      reflexeDuCorrecteur: 'Toujours exprimer toutes les températures en fonction de la température d\'admission $T_1$ avant de simplifier l\'expression du rendement.'
    }
  },
  {
    id: 'exo-100-32-equilibre-donnan-membranes',
    title: 'Équilibre de Donnan & Pression Colloïdo-Osmotique des Macromolécules Ionisées',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-transports-membranaires',
    chapitreTitre: 'Électrochimie & Biophysique Membranaire',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto Biophysique',
    dureeEstimeeMin: 35,
    enonce: 'Une membrane semi-perméable sépare deux compartiments aqueux de même volume $V$ :\n- Compartiment 1 : contient des protéines polyanioniques imperméables de concentration $P = 10\\text{ mM}$ portant chacune une charge nette $-z = -10$ neutralisées initialement par des ions $Na^+$ libres ;\n- Compartiment 2 : contient une solution de chlorure de sodium ($Na^+, Cl^-$) à concentration $C_0 = 100\\text{ mM}$. La membrane est librement perméable à l\'eau et aux petits ions $Na^+$ et $Cl^-$.\n1. Écrire les conditions d\'électroneutralité dans chaque compartiment et la relation de Gibbs-Donnan reliant les concentrations ioniques à l\'équilibre.\n2. Calculer les concentrations à l\'équilibre de $Na^+$ et $Cl^-$ dans les deux compartiments.\n3. En déduire la différence de potentiel transmembranaire de Donnan $V_1 - V_2$ à $37^\\circ\\text{C}$ et la surpression osmotique totale $\\Delta \\Pi$.',
    hints: [
      'Relation de Donnan : $[Na^+]_1 [Cl^-]_1 = [Na^+]_2 [Cl^-]_2$.',
      'Électroneutralité dans 1 : $[Na^+]_1 = [Cl^-]_1 + z P$. Dans 2 : $[Na^+]_2 = [Cl^-]_2 = x$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équations de Gibbs-Donnan et neutralité',
          explication: 'À l\'équilibre thermodynamique, les potentiels électrochimiques de $NaCl$ sont égaux de part et d\'autre de la membrane, ce qui conduit à l\'égalité des produits d\'activités ioniques :\n$$[Na^+]_1 [Cl^-]_1 = [Na^+]_2 [Cl^-]_2$$\nÉlectroneutralité dans chaque phase :\n- Compartiment 2 : $[Na^+]_2 = [Cl^-]_2 = x$.\n- Compartiment 1 : $[Na^+]_1 = [Cl^-]_1 + z P = y + z P$ (avec $y = [Cl^-]_1$).\nConservation de la matière pour le chlorure : $y + x = C_0 = 100\\text{ mM} \\implies x = C_0 - y$.'
        },
        {
          titre: '2. Résolution des concentrations à l\'équilibre',
          explication: 'Charge protéique totale : $z P = 10 \\times 10\\text{ mM} = 100\\text{ mM}$.\nLa relation de Donnan s\'écrit :\n$$(y + z P) y = x^2 = (C_0 - y)^2$$\n$$(y + 100) y = (100 - y)^2 \\implies y^2 + 100 y = 10000 - 200 y + y^2$$\n$$300 y = 10000 \\implies y = [Cl^-]_1 = \\frac{100}{3} \\approx 33.3\\text{ mM}$$\nOn en déduit :\n- $[Cl^-]_2 = x = 100 - 33.3 = 66.7\\text{ mM}$\n- $[Na^+]_2 = x = 66.7\\text{ mM}$\n- $[Na^+]_1 = y + z P = 33.3 + 100 = 133.3\\text{ mM}$\nOn vérifie bien $[Na^+]_1 [Cl^-]_1 = 133.3 \\times 33.3 = 4444 \\approx 66.7^2 = [Na^+]_2 [Cl^-]_2$.'
        },
        {
          titre: '3. Potentiel de Donnan et pression osmotique',
          explication: '- Potentiel de membrane de Donnan à $37^\\circ\\text{C}$ :\n$$V_1 - V_2 = \\frac{R T}{F} \\ln\\left(\\frac{[Na^+]_2}{[Na^+]_1}\\right) = 61.5\\text{ mV} \\times \\log_{10}\\left(\\frac{66.7}{133.3}\\right) = 61.5 \\log_{10}(0.5) \\approx -18.5\\text{ mV}$$\n- Pression osmotique totale : l\'osmolarité totale dans 1 vaut $C_{osm, 1} = [P] + [Na^+]_1 + [Cl^-]_1 = 10 + 133.3 + 33.3 = 176.6\\text{ mosmol/L}$.\nDans 2 : $C_{osm, 2} = [Na^+]_2 + [Cl^-]_2 = 66.7 + 66.7 = 133.4\\text{ mosmol/L}$.\nLe déséquilibre osmotique vaut $\\Delta C_{osm} = 176.6 - 133.4 = 43.2\\text{ mol/m}^3$.\n$$\\Delta \\Pi = \\Delta C_{osm} R T = 43.2 \\times 8.314 \\times 310 \\approx 1.11\\times 10^5\\text{ Pa} \\approx 1.11\\text{ bar}$$\nRemarquer que la pression osmotique effective ($1.11\\text{ bar}$) est plus de 4 fois supérieure à celle prédite par la seule présence des protéines non ionisées ($10\\text{ mM} \\times R T \\approx 0.26\\text{ bar}$) : c\'est l\'effet d\'amplification colloïdo-osmotique de Donnan.'
        }
      ],
      conclusion: 'L\'effet Donnan montre comment une macromolécule piégée déséquilibre la répartition de tous les petits ions diffusibles et amplifie considérablement la pression oncotique.',
      reflexeDuCorrecteur: 'Les polyanions attirent leurs contre-ions et repoussent les co-ions : $[Na^+]_1 > [Na^+]_2$ et $[Cl^-]_1 < [Cl^-]_2$.'
    }
  },
  {
    id: 'exo-100-33-effets-coanda-portance',
    title: 'Effet Coandă & Origine Physique de la Portance Aérodynamique d\'une Aile',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-hemodynamique-poiseuille',
    chapitreTitre: 'Mécanique des Fluides',
    filieres: ['BCPST', 'PSI', 'PC', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PSI / Agro-Véto',
    dureeEstimeeMin: 35,
    enonce: 'On analyse l\'écoulement d\'un fluide d\'air de masse volumique $\\rho$ autour d\'un profil d\'aile d\'avion asymétrique à vitesse incidente $V_\\infty$.\n1. Expliquer pourquoi l\'explication classique populaire basée sur "l\'égalité des temps de parcours" entre l\'extrados et l\'intrados est fausse (en réalité, les particules sur l\'extrados arrivent bien plus vite au bord de fuite que celles sur l\'intrados).\n2. Décrire le phénomène d\'adhérence de la couche limite et de déviation du fluide vers le bas (downwash) par effet Coandă.\n3. Par application du principe fondamental de la dynamique à un grand volume de contrôle fluide entourant l\'aile, démontrer que la force de portance verticale $F_z$ est la réaction newtonienne exacte au débit de quantité de mouvement vertical communiqué à l\'air défléchi vers le bas : $F_z = -\\dot{m} v_z^{down}$.',
    hints: [
      'Appliquer le théorème de la quantité de mouvement d\'Euler à un volume fluide fixe englobant l\'aile.',
      'Action-réaction : pour soulever l\'aile vers le haut, l\'aile doit accélérer une masse d\'air vers le bas.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Réfutation du mythe des temps de parcours égaux',
          explication: 'La théorie fallacieuse du temps de transit égal affirme que deux molécules d\'air séparées au bord d\'attaque doivent se retrouver simultanément au bord de fuite. Les visualisations en soufflerie montrent au contraire que le fluide sur l\'extrados accélère tellement qu\'il atteint le bord de fuite bien avant le fluide passant sous l\'intrados. Rien n\'impose physiquement une égalité de temps de parcours.'
        },
        {
          titre: '2. Effet Coandă et déviation vers le bas (Downwash)',
          explication: 'En raison de la viscosité de l\'air, la couche limite adhère à la courbure convexe de l\'extrados : c\'est l\'effet Coandă. L\'écoulement épouse le profil supérieur de l\'aile et quitte le bord de fuite avec un angle descendant non nul $\\alpha$. Le profil imprime donc à une énorme masse d\'air par seconde une vitesse dirigée vers le bas appelée déflexion descendante ou *downwash*.'
        },
        {
          titre: '3. Bilan de quantité de mouvement et portance de Newton',
          explication: 'Considérons un volume de contrôle fixe englobant l\'avion. L\'aile dévie un débit massique d\'air $\\dot{m} = \\rho S_{eff} V_\\infty$ avec une composante de vitesse verticale descendante $v_z < 0$.\nLe débit de quantité de mouvement vertical sortant est $\\frac{\\mathrm{d}P_z}{\\mathrm{d}t} = \\dot{m} v_z < 0$.\nD\'après la 3ème loi de Newton (action-réaction) et le théorème de la quantité de mouvement d\'Euler :\n$$F_{portance} = -\\frac{\\mathrm{d}P_z}{\\mathrm{d}t} = -\\dot{m} v_z = \\dot{m} |v_z| > 0$$\nLa portance ascendante est la réaction mécanique rigoureuse à la projection continuelle d\'air vers le bas. Simultanément, la dépression de Bernoulli sur l\'extrados est la manifestation locale de la force centripète requise pour courber les lignes de courant selon la relation d\'Euler normale $\\frac{\\partial P}{\\partial n} = \\frac{\\rho v^2}{R}$.'
        }
      ],
      conclusion: 'La portance résulte à la fois du théorème d\'Euler global (déviation vers le bas de l\'air) et de la distribution de pression locale de Bernoulli.',
      reflexeDuCorrecteur: 'Pour faire monter un avion de 300 tonnes, il faut impérativement projeter vers le sol 300 tonnes d\'air par seconde équivalentes.'
    }
  },
  {
    id: 'exo-100-34-diagramme-elligham-cuivre',
    title: 'Diagramme d\'Ellingham du Cuivre & Pyrométallurgie de Réduction du Minerai',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Thermodynamique Chimique & Métallurgie',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'On donne les droites d\'Ellingham pour 1 mole de dioxygène consommé :\n- (1) $4 Cu(s) + O_2(g) = 2 Cu_2O(s)$ : $\\Delta_r G_1^\\circ(T) = -340 + 0.14 T\\text{ (kJ/mol)}$\n- (2) $2 C(s) + O_2(g) = 2 CO(g)$ : $\\Delta_r G_2^\\circ(T) = -220 - 0.18 T\\text{ (kJ/mol)}$\n1. Justifier le signe des pentes des deux droites à l\'aide de l\'entropie standard de réaction $\\Delta_r S^\\circ$.\n2. Déterminer la température minimale à partir de laquelle le carbone solide peut réduire spontanément l\'oxyde de cuivre(I) $Cu_2O(s)$ en cuivre métallique sous $P_{CO} = 1\\text{ bar}$.\n3. Pourquoi le monoxyde de carbone $2 CO + O_2 = 2 CO_2$ a-t-il au contraire une pente positive ?',
    hints: [
      'Pente de la droite d\'Ellingham : $\\frac{\\mathrm{d}\\Delta_r G^\\circ}{\\mathrm{d}T} = -\\Delta_r S^\\circ$.',
      'Le réducteur spontané est celui dont la droite d\'Ellingham est située en dessous.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Signe des pentes des droites d\'Ellingham',
          explication: 'D\'après la relation fondamentale $\\Delta_r G^\\circ(T) = \\Delta_r H^\\circ - T \\Delta_r S^\\circ$, la pente de la droite est égale à $-\\Delta_r S^\\circ$.\nL\'entropie d\'un gaz est immensément supérieure à celle des phases condensées solides ou liquides ($S_m^\\circ(gaz) \\approx 200\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$ contre $30-50$ pour un solide).\n- Pour (1) : $\\Delta \\nu_g = 0 - 1 = -1 < 0$ (disparition de 1 mole de gaz $O_2$). Donc $\\Delta_r S_1^\\circ < 0$, ce qui donne une pente positive $-\\Delta_r S_1^\\circ = +0.14\\text{ kJ}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.\n- Pour (2) : $2 C(s) + O_2(g) = 2 CO(g) \\implies \\Delta \\nu_g = 2 - 1 = +1 > 0$ (création nette d\'une mole de gaz). Donc $\\Delta_r S_2^\\circ > 0$, d\'où une pente négative remarquable $-\\Delta_r S_2^\\circ = -0.18\\text{ kJ}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$.'
        },
        {
          titre: '2. Température d\'inversion de la réduction pyrométallurgique',
          explication: 'La réaction de réduction du minerai de cuivre par le carbone s\'écrit :\n$$2 Cu_2O(s) + 2 C(s) = 4 Cu(s) + 2 CO(g)$$\nSon enthalpie libre standard de réaction est la différence $\\Delta_r G^\\circ = \\Delta_r G_2^\\circ - \\Delta_r G_1^\\circ$.\nLa réduction est thermodynamiquement spontanée si $\\Delta_r G^\\circ \\le 0$, c\'est-à-dire si la droite du carbone est située en dessous de celle du cuivre :\n$$-220 - 0.18 T \\le -340 + 0.14 T \\iff 120 \\le 0.32 T$$\n$$T \\ge \\frac{120}{0.32} = 375\\text{ K} \\approx 102^\\circ\\text{C}$$\nÀ toute température supérieure à $102^\\circ\\text{C}$, le carbone réduit spontanément l\'oxyde de cuivre(I). C\'est pour cela que la métallurgie du cuivre a été la première maîtrisée par l\'humanité dès l\'Âge du Cuivre.'
        },
        {
          titre: '3. Réaction de formation de $CO_2$',
          explication: 'Pour $2 CO(g) + O_2(g) = 2 CO_2(g)$, on a $\\Delta \\nu_g = 2 - (2 + 1) = -1 < 0$ : 3 moles de gaz sont consommées pour en former seulement 2. L\'entropie diminue ($\\Delta_r S^\\circ < 0$), donc sa droite d\'Ellingham a une pente positive normale.'
        }
      ],
      conclusion: 'La droite $C/CO$ est l\'unique droite du diagramme d\'Ellingham à posséder une pente négative, ce qui fait du coke de carbone le réducteur universel de tous les minerais métalliques à haute température.',
      reflexeDuCorrecteur: 'Repérez immédiatement la pente négative de $C + O_2 \\to 2CO$ : elle finira toujours par croiser et passer en dessous de toutes les autres droites à température suffisamment haute.'
    }
  },
  {
    id: 'exo-100-35-puits-harmonique-creation-annihilation',
    title: 'Oscillateur Harmonique Quantique 1D & Opérateurs d\'Échelle',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Mécanique Quantique',
    filieres: ['BCPST', 'MP', 'PC'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / ENS BCPST',
    dureeEstimeeMin: 45,
    enonce: 'L\'hamiltonien d\'un oscillateur harmonique quantique 1D de masse $m$ et pulsation $\\omega$ est $\\hat{H} = \\frac{\\hat{P}^2}{2m} + \\frac{1}{2}m \\omega^2 \\hat{X}^2$. On définit les opérateurs sans dimension d\'annihilation $\\hat{a}$ et de création $\\hat{a}^\\dagger$ par :\n$$\\hat{a} = \\sqrt{\\frac{m\\omega}{2\\hbar}} \\left( \\hat{X} + \\frac{j \\hat{P}}{m\\omega} \\right), \\quad \\hat{a}^\\dagger = \\sqrt{\\frac{m\\omega}{2\\hbar}} \\left( \\hat{X} - \\frac{j \\hat{P}}{m\\omega} \\right)$$\n1. À l\'aide de la relation de commutation canonique $[\\hat{X}, \\hat{P}] = j\\hbar$, calculer le commutateur $[\\hat{a}, \\hat{a}^\\dagger]$.\n2. Exprimer l\'hamiltonien $\\hat{H}$ en fonction de l\'opérateur nombre de quanta $\\hat{N} = \\hat{a}^\\dagger \\hat{a}$.\n3. Démontrer que si $|\\psi_n\\rangle$ est un état propre de $\\hat{H}$ d\'énergie $E_n$, alors $\\hat{a}^\\dagger |\\psi_n\\rangle$ est un état propre d\'énergie $E_n + \\hbar\\omega$. En déduire le spectre d\'énergie $E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega$ et l\'existence d\'une énergie de point zéro du vide non nulle.',
    hints: [
      'Calculer $[\\hat{H}, \\hat{a}^\\dagger] = \\hbar\\omega \\hat{a}^\\dagger$.',
      'L\'énergie du niveau fondamental découle de la condition $\\hat{a}|0\\rangle = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Commutateur des opérateurs d\'échelle',
          explication: 'En développant avec $[\\hat{X}, \\hat{P}] = j\\hbar$ et $[\\hat{P}, \\hat{X}] = -j\\hbar$ :\n$$[\\hat{a}, \\hat{a}^\\dagger] = \\frac{m\\omega}{2\\hbar} \\left[ \\hat{X} + \\frac{j\\hat{P}}{m\\omega}, \\; \\hat{X} - \\frac{j\\hat{P}}{m\\omega} \\right] = \\frac{m\\omega}{2\\hbar} \\left( -\\frac{j}{m\\omega}[\\hat{X}, \\hat{P}] + \\frac{j}{m\\omega}[\\hat{P}, \\hat{X}] \\right)$$\n$$[\\hat{a}, \\hat{a}^\\dagger] = \\frac{m\\omega}{2\\hbar} \\left( -\\frac{j(j\\hbar)}{m\\omega} + \\frac{j(-j\\hbar)}{m\\omega} \\right) = \\frac{m\\omega}{2\\hbar} \\left( \\frac{\\hbar}{m\\omega} + \\frac{\\hbar}{m\\omega} \\right) = 1$$\nOn a donc la relation algébrique canonique de Dirac : $[\\hat{a}, \\hat{a}^\\dagger] = 1$.'
        },
        {
          titre: '2. Factorisation de l\'hamiltonien',
          explication: 'Calculons le produit $\\hat{a}^\\dagger \\hat{a}$ :\n$$\\hat{a}^\\dagger \\hat{a} = \\frac{m\\omega}{2\\hbar} \\left( \\hat{X}^2 + \\frac{\\hat{P}^2}{m^2\\omega^2} + \\frac{j}{m\\omega}[\\hat{X}, \\hat{P}] \\right) = \\frac{1}{\\hbar\\omega} \\left( \\frac{\\hat{P}^2}{2m} + \\frac{1}{2}m\\omega^2 \\hat{X}^2 \\right) - \\frac{1}{2} = \\frac{\\hat{H}}{\\hbar\\omega} - \\frac{1}{2}$$\nOn en déduit immédiatement la factorisation canonique de l\'hamiltonien :\n$$\\hat{H} = \\hbar\\omega \\left( \\hat{a}^\\dagger \\hat{a} + \\frac{1}{2} \\right) = \\hbar\\omega \\left( \\hat{N} + \\frac{1}{2} \\right)$$'
        },
        {
          titre: '3. Quantification du spectre et énergie de point zéro',
          explication: 'Le commutateur avec l\'hamiltonien vaut $[\\hat{H}, \\hat{a}^\\dagger] = \\hbar\\omega [\\hat{N}, \\hat{a}^\\dagger] = \\hbar\\omega \\hat{a}^\\dagger$.\nSoit $|\\psi\\rangle$ un état propre de $\\hat{H}$ de valeur propre $E$ :\n$$\\hat{H} (\\hat{a}^\\dagger |\\psi\\rangle) = (\\hat{a}^\\dagger \\hat{H} + [\\hat{H}, \\hat{a}^\\dagger]) |\\psi\\rangle = (\\hat{a}^\\dagger E + \\hbar\\omega \\hat{a}^\\dagger) |\\psi\\rangle = (E + \\hbar\\omega) (\\hat{a}^\\dagger |\\psi\\rangle)$$\nL\'opérateur $\\hat{a}^\\dagger$ est donc un **opérateur de création** qui incrémente l\'énergie d\'un quantum $\\hbar\\omega$. Réciproquement, $\\hat{a}$ abaisse l\'énergie d\'un quantum $\\hbar\\omega$.\nComme l\'hamiltonien est somme de deux carrés d\'opérateurs hermitiens, son espérance est strictement positive : il existe un état fondamental $|0\\rangle$ qui ne peut plus être abaissé : $\\hat{a}|0\\rangle = 0$.\nL\'énergie de cet état fondamental vaut :\n$$E_0 = \\langle 0|\\hat{H}|0\\rangle = \\hbar\\omega \\langle 0|\\hat{a}^\\dagger \\hat{a} + 1/2|0\\rangle = \\frac{1}{2}\\hbar\\omega$$\nLe spectre complet discret s\'écrit :\n$$E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega \\quad (n \\in \\mathbb{N})$$\nL\'énergie de point zéro $E_0 = \\frac{1}{2}\\hbar\\omega > 0$ est imposée par le principe d\'indétermination d\'Heisenberg $\\Delta X \\cdot \\Delta P \\ge \\hbar/2$ : une particule quantique ne peut jamais être rigoureusement immobile au fond d\'un puits.'
        }
      ],
      conclusion: 'La méthode algébrique des opérateurs d\'échelle évite toute résolution d\'équations différentielles et sert de prototype à la quantification du champ électromagnétique (photons) et des vibrations du réseau cristallin (phonons).',
      reflexeDuCorrecteur: 'Retenez $[\\hat{a}, \\hat{a}^\\dagger] = 1$ et $\\hat{H} = \\hbar\\omega(\\hat{N} + 1/2)$.'
    }
  }
];
