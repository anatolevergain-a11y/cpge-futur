import type { FicheReflexe } from './cpgeData';

export const THIRTY_NEW_FICHES_REFLEXES: FicheReflexe[] = [
  {
    id: 'ref-bcpst-nernst-equation',
    titre: 'Calculer un Potentiel Transmembranaire d\'Équilibre (Nernst)',
    matiere: 'Physique',
    formuleOuTheoreme: '$E_i = V_{int} - V_{ext} = \\frac{R T}{z_i F} \\ln\\left( \\frac{[X_i]_{ext}}{[X_i]_{int}} \\right) = \\frac{61.5\\text{ mV}}{z_i} \\log_{10}\\left( \\frac{[X_i]_{ext}}{[X_i]_{int}} \\right)$ à $37^\\circ\\text{C}$',
    quandUtiliser: 'Dès qu\'un système membranaire biologique ou une cellule excitable (neurone, fibre musculaire) est à l\'équilibre électrochimique pour un ion donné.',
    etapesPratiques: [
      '1. Identifier la valence algébrique exacte $z_i$ de l\'ion (+1 pour $K^+, Na^+$, +2 pour $Ca^{2+}$, -1 pour $Cl^-$).',
      '2. Poser impérativement le rapport $\\frac{[X_i]_{ext}}{[X_i]_{int}}$ dans l\'argument du logarithme pour obtenir $V_{int} - V_{ext}$.',
      '3. Règle mémo : Si l\'ion est plus concentré à l\'intérieur qu\'à l\'extérieur (cas de $K^+$), $[ext]/[int] < 1$, son logarithme est négatif, donc le potentiel d\'équilibre est négatif ($E_K \\approx -90\\text{ mV}$).',
      '4. Si le potentiel mesuré $V_m$ est différent de $E_i$, calculer le gradient électrochimique net $V_m - E_i$ pour prédire le sens spontané du courant ionique.'
    ],
    exempleApplication: 'Pour $K^+$ avec $[K^+]_{ext} = 4\\text{ mM}$ et $[K^+]_{int} = 140\\text{ mM}$ : $E_K = 61.5 \\log_{10}(4/140) = 61.5 \\log_{10}(0.0286) = 61.5 \\times (-1.544) = -95\\text{ mV}$.'
  },
  {
    id: 'ref-bcpst-poiseuille-resistance',
    titre: 'Calculer la Résistance Hémodynamique d\'un Vaisseau Sanguin',
    matiere: 'Physique',
    formuleOuTheoreme: '$R_h = \\frac{8\\eta L}{\\pi R^4} \\quad \\text{avec} \\quad \\Delta P = R_h D_v$',
    quandUtiliser: 'Écoulement laminaire stationnaire d\'un fluide visqueux (sang, sève brute, lymphe) dans un tube cylindrique rigide.',
    etapesPratiques: [
      '1. Vérifier que l\'écoulement est laminaire en calculant le nombre de Reynolds $Re = \\frac{2 \\rho v R}{\\eta} < 2000$.',
      '2. Repérer le rayon $R$ du vaisseau (attention à ne pas utiliser le diamètre $D = 2R$).',
      '3. Exploiter la sensibilité extrême en $R^4$ : si le rayon diminue de $10\\%$, la résistance est multipliée par $(1/0.90)^4 \\approx 1.52$ (+52% de résistance !).',
      '4. Pour des vaisseaux en dérivation (lit capillaire branché en parallèle), sommer les conductances hydrauliques : $1/R_{eq} = \\sum 1/R_i = N / R_{unitaire}$.'
    ],
    exempleApplication: 'Artériole de rayon $R = 15\\;\\mu\\text{m}$, longueur $L = 1\\text{ mm}$, viscosité sanguine $\\eta = 3.5\\times 10^{-3}\\text{ Pa}\\cdot\\text{s}$ : $R_h = \\frac{8 \\times 3.5\\times 10^{-3} \\times 10^{-3}}{\\pi (15\\times 10^{-6})^4} \\approx 1.76\\times 10^{11}\\text{ Pa}\\cdot\\text{s}\\cdot\\text{m}^{-3}$.'
  },
  {
    id: 'ref-bcpst-michaelis-menten',
    titre: 'Déterminer $V_{max}$ et $K_M$ par la Droite de Lineweaver-Burk',
    matiere: 'Chimie',
    formuleOuTheoreme: '$\\frac{1}{v_0} = \\frac{K_M}{V_{max}} \\cdot \\frac{1}{[S]} + \\frac{1}{V_{max}}$',
    quandUtiliser: 'Exploitation de données cinétiques expérimentales de vitesse initiale en fonction de la concentration en substrat.',
    etapesPratiques: [
      '1. Calculer pour chaque point de mesure les inverses $x_i = 1/[S]_i$ et $y_i = 1/v_{0, i}$.',
      '2. Effectuer une régression linéaire pour obtenir l\'équation de la droite $y = a x + b$.',
      '3. Extraire $V_{max} = 1/b$ à partir de l\'ordonnée à l\'origine.',
      '4. Extraire $K_M = a / b = a \\times V_{max}$, ou directement par l\'abscisse à l\'origine $x_0 = -1/K_M$.',
      '5. Calculer la constante catalytique $k_{cat} = V_{max} / [E]_0$ et la constante de spécificité $k_{cat}/K_M$.'
    ],
    exempleApplication: 'Régression $y = 0.050 x + 0.0020$ avec $x$ en $\\text{mM}^{-1}$ et $y$ en $(\\mu\\text{M}/\\text{s})^{-1}$ : $V_{max} = 1/0.0020 = 500\\;\\mu\\text{M/s}$, $K_M = 0.050 / 0.0020 = 25\\text{ mM}$.'
  },
  {
    id: 'ref-bcpst-henderson-hasselbalch',
    titre: 'Calculer le pH d\'un Système Tampon Physiologique',
    matiere: 'Chimie',
    formuleOuTheoreme: '$pH = pK_a + \\log_{10}\\left( \\frac{[Base]}{[Acide]} \\right)$',
    quandUtiliser: 'Mélange d\'un acide faible et de sa base conjuguée en solution aqueuse (tampon phosphate, bicarbonate, acide acétique/acétate).',
    etapesPratiques: [
      '1. Identifier sans confusion le membre acide et le membre basique du couple.',
      '2. Pour le tampon bicarbonate du sang : $[Acide] = \\alpha P_{CO_2}$ avec $\\alpha = 0.03\\text{ mmol}\\cdot\\text{L}^{-1}\\cdot\\text{mmHg}^{-1}$.',
      '3. Si l\'on ajoute un acide fort $H_3O^+$ à concentration $c$ : $[Base] \\to [Base] - c$ et $[Acide] \\to [Acide] + c$.',
      '4. Vérifier que le pouvoir tampon est optimal lorsque $[Base] \\approx [Acide]$, c\'est-à-dire dans l\'intervalle $pH \\in [pK_a - 1, \\; pK_a + 1]$.'
    ],
    exempleApplication: 'Plasma artériel normal : $[HCO_3^-] = 24\\text{ mM}$, $P_{CO_2} = 40\\text{ mmHg} \\implies [CO_2 dissous] = 1.2\\text{ mM}$. $pH = 6.10 + \\log_{10}(24 / 1.2) = 6.10 + \\log_{10}(20) = 6.10 + 1.30 = 7.40$.'
  },
  {
    id: 'ref-bcpst-loi-biot-glucose',
    titre: 'Déterminer la Composition Anomérique d\'un Sucre par Polarimétrie',
    matiere: 'Chimie',
    formuleOuTheoreme: '$\\alpha_{obs} = l \\cdot C \\cdot [\\alpha]_{eq} = l \\cdot C \\Big( x_\\alpha [\\alpha]_\\alpha + (1 - x_\\alpha) [\\alpha]_\\beta \\Big)$',
    quandUtiliser: 'Suivi de la mutarotation du glucose, fructose ou lactose en solution aqueuse.',
    etapesPratiques: [
      '1. Convertir impérativement la longueur du tube $l$ en décimètres ($10\\text{ cm} = 1\\text{ dm}$) et la concentration massique $C$ en $\\text{g/mL}$.',
      '2. Calculer le pouvoir rotatoire spécifique du mélange à l\'équilibre : $[\\alpha]_{eq} = \\frac{\\alpha_{obs}}{l \\cdot C}$.',
      '3. Poser l\'équation linéaire barycentrique $[\\alpha]_{eq} = x_\\alpha [\\alpha]_\\alpha + (1 - x_\\alpha) [\\alpha]_\\beta$.',
      '4. Isoler la fraction molaire $x_\\alpha = \\frac{[\\alpha]_{eq} - [\\alpha]_\\beta}{[\\alpha]_\\alpha - [\\alpha]_\\beta}$ et déduire $x_\\beta = 1 - x_\\alpha$.'
    ],
    exempleApplication: 'Glucose à $[\\alpha]_{eq} = +52.7^\\circ$, $[\\alpha]_\\alpha = +112^\\circ$, $[\\alpha]_\\beta = +18.7^\\circ$ : $x_\\alpha = \\frac{52.7 - 18.7}{112 - 18.7} = \\frac{34}{93.3} \\approx 36.4\\%$, d\'où $63.6\\%$ d\'anomère $\\beta$.'
  },
  {
    id: 'ref-bcpst-tcl-intervalle-confiance',
    titre: 'Construire un Intervalle de Confiance Asymptotique d\'une Proportion',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$I_{1-\\alpha} = \\left[ \\widehat{p} - u_{1-\\alpha/2} \\sqrt{\\frac{\\widehat{p}(1-\\widehat{p})}{n}}, \\; \\widehat{p} + u_{1-\\alpha/2} \\sqrt{\\frac{\\widehat{p}(1-\\widehat{p})}{n}} \\right]$',
    quandUtiliser: 'Estimation d\'une prévalence génétique, d\'un taux d\'efficacité d\'un vaccin ou d\'une proportion phénotypique sur un échantillon biologique.',
    etapesPratiques: [
      '1. Vérifier les conditions d\'approximation normale de Laplace : $n \\ge 30$, $n \\widehat{p} \\ge 5$ et $n(1 - \\widehat{p}) \\ge 5$.',
      '2. Identifier le niveau de confiance : pour un risque d\'erreur $\\alpha = 5\\%$, le quantile normal bilatéral vaut $u_{0.975} \\approx 1.96$ (souvent arrondi à 2 aux concours).',
      '3. Calculer l\'écart-type d\'échantillonnage (erreur standard) : $\\mathrm{SE} = \\sqrt{\\frac{\\widehat{p}(1-\\widehat{p})}{n}}$.',
      '4. Donner les bornes de l\'intervalle et interpréter : "On a $95\\%$ de chances que le protocole produise un intervalle contenant la vraie proportion biologique $p$".'
    ],
    exempleApplication: 'Sur $n = 400$ souris testées, $100$ présentent une résistance génétique ($\\widehat{p} = 0.25$). $\\mathrm{SE} = \\sqrt{\\frac{0.25 \\times 0.75}{400}} = \\sqrt{\\frac{0.1875}{400}} \\approx 0.0216$. Marge d\'erreur $= 1.96 \\times 0.0216 \\approx 0.042$. Donc $I_{95\\%} = [0.208, \\; 0.292] = [20.8\\%, \\; 29.2\\%]$.'
  },
  {
    id: 'ref-bcpst-darcy-permeabilite',
    titre: 'Calculer le Débit d\'une Nappe Phréatique par la Loi de Darcy',
    matiere: 'Physique',
    formuleOuTheoreme: '$Q = -K \\cdot S \\cdot \\frac{\\Delta h}{L} \\quad \\text{avec} \\quad \\Delta h = h_1 - h_2$',
    quandUtiliser: 'Écoulement d\'eau souterraine à travers un aquifère sableux ou rocheux poreux (Géosciences G2E / Agro).',
    etapesPratiques: [
      '1. Identifier la charge hydraulique en chaque piézomètre : $h = z + \\frac{P}{\\rho g}$ (en nappe libre à la surface piézométrique, $P = P_{atm}$ donc $h = z$).',
      '2. Calculer le gradient hydraulique sans dimension $i = \\frac{|\\Delta h|}{L} = \\frac{|h_1 - h_2|}{L}$.',
      '3. Calculer la section droite traversée par le flux $S = \\text{largeur} \\times \\text{épaisseur moyenne de l\'aquifère}$.',
      '4. En déduire le débit volumique $Q = K \\cdot S \\cdot i$, avec $K$ la conductivité hydraulique en $\\text{m/s}$.'
    ],
    exempleApplication: 'Aquifère de largeur $100\\text{ m}$, épaisseur $10\\text{ m}$ ($S = 1000\\text{ m}^2$), $K = 10^{-4}\\text{ m/s}$, deux forages distants de $L = 500\\text{ m}$ avec un dénivelé piézométrique $\\Delta h = 2.5\\text{ m}$ : $i = 2.5 / 500 = 0.005$. $Q = 10^{-4} \\times 1000 \\times 0.005 = 5\\times 10^{-4}\\text{ m}^3/\\text{s} = 0.5\\text{ L/s} = 43.2\\text{ m}^3/\\text{jour}$.'
  },
  {
    id: 'ref-bcpst-acp-choix-axes',
    titre: 'Sélectionner le Nombre d\'Axes Pertinents en ACP (Règle de Kaiser & Coude)',
    matiere: 'Mathématiques',
    formuleOuTheoreme: 'Règle de Kaiser : Conserver les axes dont la valeur propre vérifie $\\lambda_k > 1$ (pour une ACP normée)',
    quandUtiliser: 'Interprétation d\'une Analyse en Composantes Principales sur un jeu de données biologiques multivariées.',
    etapesPratiques: [
      '1. Vérifier que la somme de toutes les valeurs propres égale le nombre de variables initiales : $\\sum_{k=1}^p \\lambda_k = p$.',
      '2. Règle de Kaiser : Un axe factoriel est informatif s\'il résume plus de variance qu\'une variable initiale unitaire, donc si $\\lambda_k > 1$.',
      '3. Règle du coude (Scree plot de Cattell) : Tracer les valeurs propres décroissantes et repérer le point d\'inflexion net (cassure de la pente). Conserver les axes situés avant le coude.',
      '4. Calculer le pourcentage cumulé de variance expliqué par les $m$ premiers axes : $\\frac{\\sum_{i=1}^m \\lambda_i}{p} \\times 100\\%$.'
    ],
    exempleApplication: 'ACP normée à $p = 6$ variables avec valeurs propres $\\lambda = (3.2, 1.4, 0.7, 0.4, 0.2, 0.1)$. Les deux premiers axes ont $\\lambda > 1$ et expliquent $(3.2 + 1.4)/6 = 4.6/6 \\approx 76.7\\%$ de l\'inertie totale : on retient le plan $(F_1, F_2)$.'
  },
  {
    id: 'ref-bcpst-respirometrie-quotient',
    titre: 'Calculer le Quotient Respiratoire ($QR$) et Identifier le Substrat Énergétique Oxydé',
    matiere: 'Chimie',
    formuleOuTheoreme: '$QR = \\frac{\\dot{V}_{CO_2}}{\\dot{V}_{O_2}} = \\frac{n(CO_2\\text{ produit})}{n(O_2\\text{ consommé})}$',
    quandUtiliser: 'Bilan de calorimétrie indirecte et énergétique métabolique (Agro-Véto / G2E).',
    etapesPratiques: [
      '1. Pour un glucide ($C_6H_{12}O_6 + 6 O_2 \\to 6 CO_2 + 6 H_2O$) : $QR = 6 / 6 = 1.00$.',
      '2. Pour un lipide type tripalmitine ($C_{51}H_{98}O_6 + 72.5 O_2 \\to 51 CO_2 + 49 H_2O$) : $QR = 51 / 72.5 \\approx 0.70$.',
      '3. Pour des protides : $QR \\approx 0.82$.',
      '4. Si un sujet au repos présente un $QR$ mesuré de $0.85$, poser le mélange binaire $QR = x_{lip} \\times 0.70 + (1 - x_{lip}) \\times 1.00$ pour déterminer la part relative des lipides et glucides brûlés.'
    ],
    exempleApplication: '$QR = 0.85 \\implies 0.85 = 1.00 - 0.30 x_{lip} \\implies x_{lip} = 0.15 / 0.30 = 0.50$ : $50\\%$ de l\'oxygène consommé sert à oxyder des lipides et $50\\%$ des glucides.'
  },
  {
    id: 'ref-bcpst-optique-resolution-rayleigh',
    titre: 'Calculer le Diamètre de la Tache d\'Airy et la Résolution d\'un Microscope',
    matiere: 'Physique',
    formuleOuTheoreme: '$d_{min} = \\frac{0.61 \\lambda_0}{\\mathrm{ON}} = \\frac{0.61 \\lambda_0}{n \\sin\\alpha}$',
    quandUtiliser: 'Détermination du pouvoir de résolution limite de tout instrument d\'optique en diffraction de Fraunhofer.',
    etapesPratiques: [
      '1. Repérer la longueur d\'onde dans le vide $\\lambda_0$ (ex: $550\\text{ nm}$ pour le vert moyen).',
      '2. Déterminer l\'ouverture numérique gravée sur l\'objectif : $\\mathrm{ON} = n \\sin\\alpha$.',
      '3. Pour un objectif à sec, $n = 1.00$ donc $\\mathrm{ON} < 1.00$.',
      '4. Pour un objectif à immersion dans l\'huile, $n = 1.515$ ce qui permet d\'atteindre $\\mathrm{ON} \\approx 1.40$.',
      '5. Calculer $d_{min}$ : deux organites cellulaires distants de moins de $d_{min}$ apparaissent sous forme d\'une tache diffuse unique inséparable.'
    ],
    exempleApplication: 'Objectif $\\times 100$ à immersion dans l\'huile ($\\mathrm{ON} = 1.40$) sous lumière bleue $\\lambda_0 = 450\\text{ nm}$ : $d_{min} = \\frac{0.61 \\times 450\\text{ nm}}{1.40} \\approx 196\\text{ nm} \\approx 0.20\\;\\mu\\text{m}$.'
  },
  {
    id: 'ref-bcpst-point-isoelectrique-peptides',
    titre: 'Déterminer la Charge Globale et le pHi d\'un Polypeptide',
    matiere: 'Chimie',
    formuleOuTheoreme: '$pHi$ = demi-somme des deux $pK_a$ entourant l\'espèce zwitterionique de charge nette nulle',
    quandUtiliser: 'Prédiction de la mobilité électrophorétique ou rétention sur résine échangeuse d\'ions (chromatographie échangeuse d\'anions ou de cations).',
    etapesPratiques: [
      '1. Lister tous les groupements ionisables du peptide : extrémité N-terminale ($\\alpha-\\text{NH}_3^+$, $pK_a \\sim 9$), extrémité C-terminale ($\\alpha-\\text{COOH}$, $pK_a \\sim 2$), et les chaînes latérales ionisables (Asp, Glu : $\\sim 4$ ; His : $\\sim 6$ ; Cys : $\\sim 8.3$ ; Tyr : $\\sim 10$ ; Lys : $\\sim 10.5$ ; Arg : $\\sim 12.5$).',
      '2. Classer les $pK_a$ par ordre croissant.',
      '3. Partir de $pH = 0$ où tous les groupes sont protonés : compter la charge positive totale $+z_{max}$.',
      '4. À chaque franchissement de $pK_a$, retrancher 1 à la charge globale (+2 $\\to$ +1 $\\to$ 0 $\\to$ -1).',
      '5. Identifier les deux $pK_a$ entre lesquels la charge globale est nulle : le $pHi$ est leur moyenne arithmétique.'
    ],
    exempleApplication: 'Tripeptide Ala-His-Asp : Groupes ionisables : $\\alpha-\\text{COOH}$ (2.2), $\\beta-\\text{COOH}$ Asp (3.9), His (6.0), $\\alpha-\\text{NH}_3^+$ (9.5). À $pH < 2.2$ charge $+2$. Entre $2.2$ et $3.9$ charge $+1$. Entre $3.9$ et $6.0$ charge $0$ ! Donc $pHi = (3.9 + 6.0)/2 = 4.95$.'
  },
  {
    id: 'ref-bcpst-pression-osmotique-van-t-hoff',
    titre: 'Calculer la Pression Osmotique d\'une Solution Biologique',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\Pi = i \\cdot C \\cdot R T = C_{osm} \\cdot R T$',
    quandUtiliser: 'Étude des échanges d\'eau transcapillaires (forces de Starling) ou de la turgescence/plasmolyse végétale.',
    etapesPratiques: [
      '1. Déterminer le coefficient de van \'t Hoff $i$ : pour une espèce non dissociée (glucose, urée, albumine) $i = 1$ ; pour un électrolyte binaire fort ($NaCl$) $i = 2$ ; pour $CaCl_2$ $i = 3$.',
      '2. Calculer l\'osmolarité totale : $C_{osm} = \\sum i_k C_k$ en $\\text{mol/m}^3$ ($1\\text{ mmol/L} = 1\\text{ mol/m}^3$).',
      '3. Température en Kelvins ($T = 310.15\\text{ K}$ pour l\'organisme à $37^\\circ\\text{C}$).',
      '4. Calculer $\\Pi$ en Pascals ($1\\text{ bar} = 10^5\\text{ Pa} \\approx 750\\text{ mmHg}$).'
    ],
    exempleApplication: 'Sérum physiologique ($NaCl$ à $9\\text{ g/L}$, $M = 58.5\\text{ g/mol}$) : $C = 9 / 58.5 \\approx 0.154\\text{ mol/L} = 154\\text{ mol/m}^3$. Avec $i=2$, $C_{osm} = 308\\text{ osmol/m}^3$. $\\Pi = 308 \\times 8.314 \\times 310 \\approx 7.94\\times 10^5\\text{ Pa} \\approx 7.94\\text{ bars}$ (soit $\\approx 5950\\text{ mmHg}$).'
  },
  {
    id: 'ref-bcpst-verhulst-capacite-biotique',
    titre: 'Modéliser une Croissance Bactérienne par la Sigmoïde de Verhulst',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$\\frac{\\mathrm{d}N}{\\mathrm{d}t} = r N \\left(1 - \\frac{N}{K}\\right) \\implies N(t) = \\frac{K}{1 + \\left(\\frac{K-N_0}{N_0}\\right) e^{-rt}}$',
    quandUtiliser: 'Évolution d\'une population limitée par les ressources nutritives ou l\'espace dans un milieu fermé.',
    etapesPratiques: [
      '1. Identifier les paramètres écologiques : $r$ est le taux de croissance intrinsèque malthusien ($t^{-1}$), $K$ est la capacité d\'accueil maximale du milieu.',
      '2. Vitesse maximale de croissance : a lieu exactement au point d\'inflexion $N = K/2$, où $\\left(\\frac{\\mathrm{d}N}{\\mathrm{d}t}\\right)_{max} = \\frac{r K}{4}$.',
      '3. Linéarisation pour ajustement expérimental : poser $Y = \\ln\\left( \\frac{K - N}{N} \\right) = \\ln\\left( \\frac{K-N_0}{N_0} \\right) - r t$. La régression de $Y$ en fonction de $t$ a pour pente $-r$.'
    ],
    exempleApplication: 'Culture bactérienne avec $K = 10^9\\text{ bactéries/mL}$, $N_0 = 10^6$ et $r = 0.5\\text{ h}^{-1}$. La vitesse de production maximale est obtenue quand la population atteint $5\\times 10^8\\text{ bactéries/mL}$ et vaut $\\frac{0.5 \\times 10^9}{4} = 1.25\\times 10^8\\text{ bactéries}/(\\text{mL}\\cdot\\text{h})$.'
  },
  {
    id: 'ref-bcpst-starling-capillaires',
    titre: 'Calculer le Flux de Filtration Capillaire par la Loi de Starling',
    matiere: 'Physique',
    formuleOuTheoreme: '$J_v = K_f \\Big[ (P_c - P_i) - \\sigma (\\Pi_c - \\Pi_i) \\Big]$',
    quandUtiliser: 'Étude des échanges liquidiens à travers la paroi capillaire et genèse des œdèmes.',
    etapesPratiques: [
      '1. Identifier les pressions hydrostatiques : $P_c$ (pression sanguine capillaire favorisant la filtration hors du vaisseau) et $P_i$ (pression hydrostatique interstitielle).',
      '2. Identifier les pressions oncotiques (osmotiques dues aux protéines) : $\\Pi_c$ (oncotique plasmatique retenant l\'eau dans le vaisseau) et $\\Pi_i$ (oncotique interstitielle).',
      '3. Calculer la pression nette de filtration $P_{net} = (P_c - P_i) - \\sigma (\\Pi_c - \\Pi_i)$ (avec coefficient de réflexion membranaire $\\sigma \\approx 1$ pour les protéines).',
      '4. Si $P_{net} > 0$ : filtration nette vers les tissus (pôle artériel) ; si $P_{net} < 0$ : réabsorption nette vers le sang (pôle veineux).'
    ],
    exempleApplication: 'Pôle artériel : $P_c = 35\\text{ mmHg}, P_i = 1\\text{ mmHg}, \\Pi_c = 26\\text{ mmHg}, \\Pi_i = 2\\text{ mmHg}$. $P_{net} = (35 - 1) - (26 - 2) = 34 - 24 = +10\\text{ mmHg}$ (filtration active vers l\'interstitium).'
  },
  {
    id: 'ref-bcpst-energie-activation-arrhenius',
    titre: 'Déterminer l\'Énergie d\'Activation $E_a$ d\'une Réaction Enzymatique ou Chimique',
    matiere: 'Chimie',
    formuleOuTheoreme: '$\\ln k = \\ln A - \\frac{E_a}{R} \\cdot \\frac{1}{T} \\iff \\ln\\left( \\frac{k(T_2)}{k(T_1)} \\right) = \\frac{E_a}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)$',
    quandUtiliser: 'Étude de l\'influence de la température sur une vitesse de réaction ou pour évaluer l\'abaissement d\'énergie d\'activation par une enzyme.',
    etapesPratiques: [
      '1. Convertir impérativement les températures en Kelvins ($T\\text{ (K)} = \\theta\\text{ (^\\circ C)} + 273.15$).',
      '2. Tracer $\\ln k$ en fonction de $1/T$ (graphe d\'Arrhenius) : la courbe est une droite de pente négative $p = -E_a / R$.',
      '3. Isoler l\'énergie d\'activation : $E_a = -p \\times R$ (en $\\text{J/mol}$, penser à convertir en $\\text{kJ/mol}$).',
      '4. Noter que pour une enzyme, $E_a$ est abaissée typiquement de $100\\text{ kJ/mol}$ (réaction non catalysée) à $30-50\\text{ kJ/mol}$ (catalysée), multipliant la vitesse par un facteur $10^6$ à $10^{10}$.'
    ],
    exempleApplication: 'Une réaction voit sa constante tripler entre $20^\\circ\\text{C}$ ($293.15\\text{ K}$) et $30^\\circ\\text{C}$ ($303.15\\text{ K}$) : $\\ln(3) \\approx 1.0986 = \\frac{E_a}{8.314} \\left( \\frac{1}{293.15} - \\frac{1}{303.15} \\right) = \\frac{E_a}{8.314} \\times 1.125\\times 10^{-4}$. Donc $E_a = \\frac{1.0986 \\times 8.314}{1.125\\times 10^{-4}} \\approx 81.2\\text{ kJ/mol}$.'
  },
  {
    id: 'ref-bcpst-spectro-beer-lambert',
    titre: 'Doser une Solution par Spectrophotométrie UV-Visible (Loi de Beer-Lambert)',
    matiere: 'Chimie',
    formuleOuTheoreme: '$A = -\\log_{10}(I/I_0) = \\varepsilon \\cdot l \\cdot C$',
    quandUtiliser: 'Dosage spectrophotométrique, suivi cinétique d\'apparition du NADH à $340\\text{ nm}$ ou des protéines par la méthode de Bradford à $595\\text{ nm}$.',
    etapesPratiques: [
      '1. Choisir la longueur d\'onde $\\lambda_{max}$ correspondant au pic d\'absorption maximale de l\'espèce pour maximiser la sensibilité.',
      '2. Faire le "blanc" avec le solvant pur dans la cuve pour s\'affranchir des réflexions sur les parois de quartz et de l\'absorption du solvant.',
      '3. Vérifier le domaine de linéarité de la loi de Beer-Lambert : l\'absorbance doit être comprise entre $0.1$ et $1.5$ (au-delà de 2, la lumière transmise est inférieure à $1\\%$, perte de précision du photodétecteur).',
      '4. Pour un mélange de deux espèces absorbantes sans interaction chimique : additivité stricte des absorbances $A(\\lambda) = \\varepsilon_1(\\lambda) l C_1 + \\varepsilon_2(\\lambda) l C_2$.'
    ],
    exempleApplication: 'Suivi de l\'oxydation de l\'éthanol par l\'alcool déshydrogénase (ADH) couplée à $NAD^+ + \\text{éthanol} \\to NADH, H^+ + \\text{éthanal}$. Le $NADH$ absorbe spécifiquement à $340\\text{ nm}$ avec $\\varepsilon = 6220\\text{ L}\\cdot\\text{mol}^{-1}\\cdot\\text{cm}^{-1}$. Une variation de pente $\\frac{\\mathrm{d}A}{\\mathrm{d}t} = 0.0622\\text{ min}^{-1}$ correspond à une vitesse enzymatique $v = \\frac{0.0622}{6220 \\times 1} = 10^{-5}\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1} = 10\\;\\mu\\text{M/min}$.'
  },
  {
    id: 'ref-bcpst-energie-surface-laplace',
    titre: 'Calculer la Surpression dans une Goutte ou Alvéole Pulmonaire (Loi de Laplace)',
    matiere: 'Physique',
    formuleOuTheoreme: 'Interface sphérique simple (goutte liquide, alvéole avec liquide) : $\\Delta P = P_{int} - P_{ext} = \\frac{2\\gamma}{R}$ ; Bulle de savon (deux interfaces) : $\\Delta P = \\frac{4\\gamma}{R}$',
    quandUtiliser: 'Tension superficielle, capillarité (loi de Jurin) et rôle physiologique du surfactant pulmonaire (dipalmitoylphosphatidylcholine).',
    etapesPratiques: [
      '1. Compter le nombre d\'interfaces liquide-gaz : 1 pour une gouttelette d\'eau ou une alvéole tapissée de fluide (facteur 2), 2 pour une bulle d\'air dans l\'air à paroi mince (facteur 4).',
      '2. Remarquer l\'instabilité alvéolaire sans surfactant : pour deux alvéoles interconnectées de rayons différents $R_1 < R_2$, la pression interne est plus forte dans la petite alvéole ($2\\gamma/R_1 > 2\\gamma/R_2$), ce qui devrait la vider spontanément dans la grande alvéole (atélectasie).',
      '3. Rôle du surfactant pulmonaire : en comprimant la monocouche lipidique, $\\gamma$ diminue très fortement lorsque l\'alvéole rétrécit, maintenant le ratio $\\gamma / R$ constant et stabilisant le poumon.'
    ],
    exempleApplication: 'Alvéole pulmonaire sans surfactant de rayon $R = 50\\;\\mu\\text{m}$ tapissée d\'eau pure ($\\gamma = 72\\times 10^{-3}\\text{ N/m}$) : $\\Delta P = \\frac{2 \\times 72\\times 10^{-3}}{50\\times 10^{-6}} = 2880\\text{ Pa} \\approx 21.6\\text{ mmHg}$. Avec surfactant ($\\gamma \\approx 5\\text{ mN/m}$), $\\Delta P$ chute à $200\\text{ Pa} \\approx 1.5\\text{ mmHg}$, permettant une respiration sans effort musculaire démesuré.'
  },
  {
    id: 'ref-bcpst-optique-dispersion-spectro',
    titre: 'Calculer la Résolution et la Dispersion Angulaire d\'un Réseau Plan',
    matiere: 'Physique',
    formuleOuTheoreme: 'Formule des réseaux : $\\sin\\theta_p - \\sin i = p \\frac{\\lambda}{a} = p n \\lambda$ ; Pouvoir de résolution : $\\mathcal{R} = \\frac{\\lambda}{\\Delta \\lambda} = p N$',
    quandUtiliser: 'Spectrophotomètres à réseau, monochromateurs et spectroscopie d\'émission atomique.',
    etapesPratiques: [
      '1. Noter $n$ le nombre de traits par millimètre : le pas du réseau vaut $a = 1 / n$ (ex: pour 600 traits/mm, $a = \\frac{10^{-3}\\text{ m}}{600} \\approx 1.67\\;\\mu\\text{m}$).',
      '2. Calculer la déviation sous l\'ordre $p$ (généralement $p = 1$).',
      '3. Dispersion angulaire : dériver par rapport à $\\lambda$ : $D = \\frac{\\mathrm{d}\\theta}{\\mathrm{d}\\lambda} = \\frac{p}{a \\cos\\theta}$.',
      '4. Pouvoir de résolution chromatique théorique : $\\mathcal{R} = p N$, où $N$ est le nombre total de traits du réseau éclairés par le faisceau.'
    ],
    exempleApplication: 'Réseau de largeur $3\\text{ cm}$ gravé à 600 traits/mm éclairé en totalité ($N = 30 \\times 600 = 18000$ traits). À l\'ordre $p=1$, $\\mathcal{R} = 1 \\times 18000 = 18000$. À $\\lambda = 589\\text{ nm}$ (doublet du sodium), la séparation minimale vaut $\\Delta \\lambda = \\frac{589\\text{ nm}}{18000} \\approx 0.033\\text{ nm}$. Le doublet espacé de $0.6\\text{ nm}$ ($589.0$ et $589.6\\text{ nm}$) est donc très largement séparé.'
  },
  {
    id: 'ref-bcpst-chaleur-echangeur-contre-courant',
    titre: 'Calculer l\'Efficacité d\'un Échangeur Thermique à Contre-Courant Biologique',
    matiere: 'Physique',
    formuleOuTheoreme: 'Méthode DTLM (Différence de Température Logarithmique Moyenne) : $\\Phi = U \\cdot S \\cdot \\Delta T_{LM}$ avec $\\Delta T_{LM} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1 / \\Delta T_2)}$',
    quandUtiliser: 'Systèmes de thermorégulation à contre-courant (pattes des oiseaux aquatiques dans l\'eau glacée, testicules, branchies des poissons, rete mirabile des cétacés).',
    etapesPratiques: [
      '1. Repérer les températures d\'entrée et de sortie des deux fluides circulant en sens opposé (contre-courant).',
      '2. Calculer les écarts aux deux extrémités : $\\Delta T_1 = T_{chaud, in} - T_{froid, out}$ et $\\Delta T_2 = T_{chaud, out} - T_{froid, in}$.',
      '3. Calculer la moyenne logarithmique $\\Delta T_{LM}$.',
      '4. Retenir le principe biologique : l\'échange à contre-courant maintient un gradient thermique presque constant tout au long du conduit, permettant de récupérer plus de $90\\%$ de la chaleur corporelle avant l\'extrémité de la patte.'
    ],
    exempleApplication: 'Sang artériel entrant à $38^\\circ\\text{C}$ et sortant refroidi à $12^\\circ\\text{C}$ au niveau du pied d\'un manchot, réchauffant le sang veineux qui entre à $8^\\circ\\text{C}$ et repart vers le cœur à $34^\\circ\\text{C}$. $\\Delta T_1 = 38 - 34 = 4^\\circ\\text{C}$ et $\\Delta T_2 = 12 - 8 = 4^\\circ\\text{C}$. $\\Delta T_{LM} = 4^\\circ\\text{C}$ constant partout : transfert de chaleur quasi-réversible avec perte d\'énergie thermique minimale dans l\'environnement polaire.'
  },
  {
    id: 'ref-bcpst-cinetique-ordre-reactif',
    titre: 'Déterminer l\'Ordre d\'une Réaction Chimique par la Méthode Différentielle ou Intégrale',
    matiere: 'Chimie',
    formuleOuTheoreme: 'Ordre 1 : $\\ln[A] = \\ln[A]_0 - k t$ (temps de demi-réaction $t_{1/2} = \\frac{\\ln 2}{k}$ indépendant de $[A]_0$) ; Ordre 2 : $\\frac{1}{[A]} = \\frac{1}{[A]_0} + k t$ ($t_{1/2} = \\frac{1}{k [A]_0}$)',
    quandUtiliser: 'Identification de la loi de vitesse d\'une réaction de décomposition, estérification ou saponification.',
    etapesPratiques: [
      '1. Observer le temps de demi-réaction $t_{1/2}$ à différentes concentrations initiales : s\'il est constant, c\'est obligatoirement un ordre 1.',
      '2. Si $t_{1/2}$ double quand $[A]_0$ est divisé par deux, c\'est un ordre 2.',
      '3. Méthode graphique : tracer $\\ln[A] = f(t)$. Si c\'est une droite, l\'ordre est 1 et la pente est $-k$.',
      '4. Si ce n\'est pas une droite, tracer $1/[A] = f(t)$. Si c\'est une droite, l\'ordre est 2 et la pente est $+k$.'
    ],
    exempleApplication: 'Hydrolyse d\'un ester de concentration initiale $0.10\\text{ M}$. Après $20\\text{ min}$, il reste $0.05\\text{ M}$ ; après $40\\text{ min}$, il reste $0.025\\text{ M}$. Le temps de demi-réaction reste rigoureusement égal à $20\\text{ min}$ indépendamment de l\'avancement : la réaction est d\'ordre 1 avec $k = \\frac{\\ln 2}{20\\text{ min}} \\approx 0.0347\\text{ min}^{-1}$.'
  },
  {
    id: 'ref-bcpst-effet-doppler-ultrasons',
    titre: 'Calculer la Vitesse du Sang par Échographie Doppler',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\Delta f = f_{reçu} - f_0 = \\frac{2 f_0 v_{sang} \\cos\\theta}{c}$',
    quandUtiliser: 'Mesure non invasive de la vitesse d\'écoulement sanguin artérielle ou intracardiaque par ultrasons.',
    etapesPratiques: [
      '1. Identifier la fréquence d\'émission de la sonde ultrasonore $f_0$ (typiquement $2$ à $8\\text{ MHz}$).',
      '2. Repérer la célérité du son dans les tissus mous humains : $c \\approx 1540\\text{ m/s}$.',
      '3. Prendre en compte l\'angle Doppler $\\theta$ entre l\'axe du faisceau ultrasonore et l\'axe de l\'artère.',
      '4. Noter le facteur 2 fondamental : l\'effet Doppler s\'applique deux fois (l\'hématie agit d\'abord comme récepteur en mouvement, puis comme émetteur mobile réfléchissant l\'onde).',
      '5. Isoler la vitesse : $v_{sang} = \\frac{c \\cdot \\Delta f}{2 f_0 \\cos\\theta}$. Attention : l\'angle $\\theta$ ne doit jamais être de $90^\\circ$ car $\\cos 90^\\circ = 0$ (aucun signal Doppler mesurable).'
    ],
    exempleApplication: 'Sonde à $f_0 = 5\\text{ MHz}$, angle $\\theta = 45^\\circ$ ($\\cos 45^\\circ = 0.707$). Décalage Doppler mesuré $\\Delta f = 3200\\text{ Hz}$ : $v_{sang} = \\frac{1540 \\times 3200}{2 \\times (5\\times 10^6) \\times 0.707} \\approx 0.70\\text{ m/s} = 70\\text{ cm/s}$ (vitesse systolique aortique normale).'
  },
  {
    id: 'ref-bcpst-coefficient-partage-k',
    titre: 'Calculer le Rendement d\'une Extraction Liquide-Liquide Multiple',
    matiere: 'Chimie',
    formuleOuTheoreme: 'Fraction résiduelle dans la phase aqueuse après $n$ extractions successives : $x_n = \\left( \\frac{V_{aq}}{V_{aq} + K_D V_{org}} \\right)^n$',
    quandUtiliser: 'Isolement d\'un principe actif, extraction de lipides ou pesticides d\'un échantillon biologique par solvant organique immiscible.',
    etapesPratiques: [
      '1. Identifier le coefficient de partage $K_D = \\frac{[Soluté]_{org}}{[Soluté]_{aq}}$ à l\'équilibre de distribution de Nernst.',
      '2. Règle fondamentale du chimiste : Il est toujours beaucoup plus efficace de faire $n$ extractions fractionnées avec un petit volume $V_{org}/n$ qu\'une seule extraction avec le volume total $V_{org}$ !',
      '3. Calculer la fraction extraite totale : $\\rho_{ext} = 1 - x_n$.',
      '4. Pour des acides faibles ou bases faibles, moduler le pH aqueux pour rendre la molécule sous sa forme neutre non chargée (la forme ionique reste préférentiellement dans l\'eau).'
    ],
    exempleApplication: 'Extraction de $100\\text{ mL}$ de solution aqueuse d\'un composé avec $K_D = 4$. Option A : une extraction avec $100\\text{ mL}$ d\'éther $\\implies x_1 = \\frac{100}{100 + 4 \\times 100} = \\frac{1}{5} = 20\\%$ restant ($80\\%$ extrait). Option B : deux extractions avec $50\\text{ mL}$ d\'éther $\\implies x_2 = \\left(\\frac{100}{100 + 4 \\times 50}\\right)^2 = \\left(\\frac{100}{300}\\right)^2 = \\frac{1}{9} \\approx 11.1\\%$ restant ($88.9\\%$ extrait) !'
  },
  {
    id: 'ref-bcpst-forces-intermoleculaires-ebullition',
    titre: 'Comparer les Températures d\'Ébullition par l\'Analyse des Liaisons Intermoléculaires',
    matiere: 'Chimie',
    formuleOuTheoreme: 'Hiérarchie énergétique : Liaisons Covalentes $\\gg$ Liaisons Hydrogène ($10-30\\text{ kJ/mol}$) $\\gg$ Interactions de Keesom/Debye $\\gg$ Interactions de London ($1-5\\text{ kJ/mol}$)',
    quandUtiliser: 'Justification des différences de points d\'ébullition, de solubilité aqueuse ou de conformation des macromolécules.',
    etapesPratiques: [
      '1. Vérifier la masse molaire : à architecture similaire, plus la molécule est lourde et étendue, plus son nuage électronique est polarisable $\\implies$ forces de dispersion de London plus fortes $\\implies T_{eb}$ plus élevée.',
      '2. Recherche des donneurs/accepteurs de liaisons hydrogène : groupements $-OH$ (alcools, acides carboxyliques) et $-NH_2$ (amines). Présence de liaisons H intermoléculaires $\\implies$ bond spectaculaire de $T_{eb}$.',
      '3. Encombrement et ramification : à formule brute identique (isomères de chaîne), la molécule la plus compacte/ramifiée a une surface de contact moindre $\\implies$ interactions de London plus faibles $\\implies T_{eb}$ plus basse.',
      '4. Liaisons hydrogène intramoléculaires : si une liaison H se forme à l\'intérieur de la molécule (ex: o-nitrophénol), elle empêche les liaisons H avec les voisines $\\implies T_{eb}$ plus basse que le para-isomère.'
    ],
    exempleApplication: 'Comparaison éthanol ($CH_3CH_2OH, M=46, T_{eb} = 78^\\circ\\text{C}$) et propane ($CH_3CH_2CH_3, M=44, T_{eb} = -42^\\circ\\text{C}$) : masse quasi identique, mais l\'éthanol forme un réseau tridimensionnel serré de liaisons hydrogène, créant un écart colossal de $120^\\circ\\text{C}$ sur la température d\'ébullition.'
  },
  {
    id: 'ref-bcpst-test-hypothese-pvalue',
    titre: 'Conduire un Test d\'Hypothèse Bilatéral & Interpréter la p-Valeur',
    matiere: 'Mathématiques',
    formuleOuTheoreme: 'Règle de décision : Rejeter $H_0$ si $p\\text{-valeur} \\le \\alpha$ (résultat statistiquement significatif au seuil $\\alpha$)',
    quandUtiliser: 'Comparaison de moyennes (test $t$ de Student), de variances (test $F$ de Fisher-Snedecor) ou de proportions (test $Z$).',
    etapesPratiques: [
      '1. Poser clairement l\'hypothèse nulle $H_0$ (absence d\'effet, égalité des paramètres : $\\mu_1 = \\mu_2$) contre l\'hypothèse alternative $H_1$ (effet réel : $\\mu_1 \\neq \\mu_2$).',
      '2. Fixer le seuil de signification $\\alpha$ a priori (conventionnellement $5\\% = 0.05$).',
      '3. Calculer la statistique de test observée $T_{obs}$ sous l\'hypothèse que $H_0$ est vraie.',
      '4. Déterminer la $p$-valeur : probabilité d\'obtenir une valeur au moins aussi extrême que $T_{obs}$ sous $H_0$ ($p = P_{H_0}(|T| \\ge |T_{obs}|)$).',
      '5. Conclure : Si $p \\le 0.05$, rejeter $H_0$ ("La différence observée est statistiquement significative"). Si $p > 0.05$, non-rejet de $H_0$ ("On ne peut pas rejeter $H_0$, l\'écart observé peut être attribué aux seules fluctuations d\'échantillonnage").'
    ],
    exempleApplication: 'Dans un essai agronomique d\'un nouvel engrais, on compare le rendement moyen de parcelles traitées vs témoin. Le test de Student donne $t_{obs} = 2.45$ avec une $p$-valeur de $p = 0.018$. Comme $0.018 < 0.05$, on rejette l\'hypothèse nulle : l\'engrais augmente significativement le rendement de la culture ($p < 0.05$).'
  },
  {
    id: 'ref-bcpst-newman-cyclohexane',
    titre: 'Tracer la Conformation Chaise du Cyclohexane et ses Projections de Newman',
    matiere: 'Chimie',
    formuleOuTheoreme: 'Interconversion chaise $\\rightleftharpoons$ chaise : tout substituant axial devient obligatoirement équatorial, et inversement, sans changer de face (haut reste haut, bas reste bas)',
    quandUtiliser: 'Stéréochimie des cycles carbonés à 6 atomes, glucides (pyranoses), stéroïdes et dérivés substitués.',
    etapesPratiques: [
      '1. Tracer le squelette chaise avec 3 paires de liaisons strictement parallèles en zig-zag.',
      '2. Disposer les 6 liaisons axiales : rigoureusement verticales, alternant vers le haut puis vers le bas en faisant le tour du cycle.',
      '3. Disposer les 6 liaisons équatoriales : légèrement inclinées du côté opposé à la liaison axiale du même carbone, parallèles aux liaisons du cycle situées à un carbone d\'écart.',
      '4. Règle thermodynamique : Les substituants volumineux ($-CH_3$, $-C(CH_3)_3$, $-OH$, $-CH_2OH$) sont infiniment plus stables en position **équatoriale** pour éviter les répulsions stériques 1,3-diaxiales.',
      '5. Pour le groupement tert-butyle $-C(CH_3)_3$, la conformation avec le tert-butyle axial est totalement exclue (effet ancre stérique).'
    ],
    exempleApplication: 'cis-1,2-diméthylcyclohexane : possède un méthyle axial et un méthyle équatorial dans ses deux chaises d\'énergie identique. trans-1,2-diméthylcyclohexane : existe sous une forme diéquatoriale (très stable, représentée à plus de $99\\%$) et une forme diaxiale (haute en énergie).'
  },
  {
    id: 'ref-bcpst-bilan-entropie-machine-ditherme',
    titre: 'Calculer le Rendement Maximal de Carnot d\'un Cycle Biologique ou Moteur',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\eta_{Carnot} = 1 - \\frac{T_F}{T_C} \\quad \\text{avec} \\quad \\frac{Q_C}{T_C} + \\frac{Q_F}{T_F} \\le 0$',
    quandUtiliser: 'Thermodynamique des cycles moteurs, pompes à chaleur, cogénération et limites thermodynamiques de conversion d\'énergie.',
    etapesPratiques: [
      '1. Exprimer les températures de la source chaude $T_C$ et de la source froide $T_F$ impérativement en Kelvins.',
      '2. Premier principe sur un cycle fermé : $\\Delta U = W + Q_C + Q_F = 0 \\implies -W = Q_C + Q_F$.',
      '3. Second principe : $\\Delta S = \\frac{Q_C}{T_C} + \\frac{Q_F}{T_F} + S_c = 0$ avec $S_c \\ge 0$ ($S_c = 0$ pour un cycle réversible idéal de Carnot).',
      '4. Rendement moteur : $\\eta = \\frac{-W}{Q_C} = 1 + \\frac{Q_F}{Q_C} \\le 1 - \\frac{T_F}{T_C}$. Pour une machine réelle irréversible, $\\eta < \\eta_{Carnot}$.'
    ],
    exempleApplication: 'Centrale géothermique opérant entre une source thermale à $90^\\circ\\text{C}$ ($363.15\\text{ K}$) et une rivière à $15^\\circ\\text{C}$ ($288.15\\text{ K}$) : $\\eta_{Carnot} = 1 - \\frac{288.15}{363.15} = 1 - 0.7935 \\approx 20.7\\%$. Aucune machine thermique ne pourra jamais dépasser ce plafond théorique fondamental.'
  },
  {
    id: 'ref-bcpst-constante-equilibre-deltat-g',
    titre: 'Calculer une Constante d\'Équilibre Chimique à partir de $\\Delta_r G^\\circ$',
    matiere: 'Chimie',
    formuleOuTheoreme: '$\\Delta_r G^\\circ(T) = -R T \\ln K^\\circ(T) \\iff K^\\circ(T) = \\exp\\left( -\\frac{\\Delta_r G^\\circ(T)}{R T} \\right)$',
    quandUtiliser: 'Liaison entre grandeurs thermodynamiques tabulées (enthalpies standard de formation, entropies molaires standard) et équilibres chimiques.',
    etapesPratiques: [
      '1. Calculer $\\Delta_r H^\\circ = \\sum \\nu_i \\Delta_f H^\\circ(i)$ et $\\Delta_r S^\\circ = \\sum \\nu_i S_m^\\circ(i)$ en respectant les coefficients stœchiométriques algébriques $\\nu_i$.',
      '2. Calculer $\\Delta_r G^\\circ(T) = \\Delta_r H^\\circ - T \\Delta_r S^\\circ$ (attention aux unités : $\\Delta_r H^\\circ$ est en $\\text{kJ/mol}$, à convertir en $\\text{J/mol}$ pour l\'additionner avec $T \\Delta_r S^\\circ$ !).',
      '3. Diviser par $R T$ (avec $R = 8.314\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$).',
      '4. Évaluer $K^\\circ$ : si $\\Delta_r G^\\circ < -30\\text{ kJ/mol}$, $K^\\circ > 10^5$, la réaction peut être considérée comme totale ; si $\\Delta_r G^\\circ > +30\\text{ kJ/mol}$, la réaction est quasi-nulle.'
    ],
    exempleApplication: 'Synthèse de l\'ammoniac $1/2 N_2 + 3/2 H_2 = NH_3$ à $298\\text{ K}$ avec $\\Delta_r G^\\circ = -16.45\\text{ kJ/mol} = -16450\\text{ J/mol}$ : $-\\frac{\\Delta_r G^\\circ}{R T} = \\frac{16450}{8.314 \\times 298.15} \\approx 6.637$. Donc $K^\\circ = e^{6.637} \\approx 763$.'
  },
  {
    id: 'ref-bcpst-champ-electrostatique-gauss',
    titre: 'Calculer le Champ Électrique d\'une Membrane ou d\'une Micelle (Théorème de Gauss)',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\iint_{\\Sigma} \\vec{E} \\cdot \\mathrm{d}\\vec{S} = \\frac{Q_{int}}{\\varepsilon_0 \\varepsilon_r}$',
    quandUtiliser: 'Calcul du champ et du potentiel créés par une bicouche phospholipidique chargée ou une protéine sphérique.',
    etapesPratiques: [
      '1. Symétries et invariances : pour un plan infini uniformément chargé avec une densité surfacique $\\sigma$, $\\vec{E} = E(z) \\vec{u}_z$ avec $E(-z) = -E(z)$.',
      '2. Choix de la surface de Gauss $\\Sigma$ : un cylindre de section $S$ orthogonal au plan, s\'étendant de $-z$ à $+z$.',
      '3. Calcul du flux : le flux est nul sur la surface latérale ($\\vec{E} \\perp \\mathrm{d}\\vec{S}$), et vaut $2 E S$ sur les deux bases planes parallèles.',
      '4. Charge intérieure : $Q_{int} = \\sigma \\cdot S$.',
      '5. Conclure : $2 E S = \\frac{\\sigma S}{\\varepsilon_0 \\varepsilon_r} \\implies E = \\frac{\\sigma}{2 \\varepsilon_0 \\varepsilon_r}$. Pour une membrane à double couche portant $\\pm \\sigma$, le champ entre les deux feuillets vaut $E = \\frac{\\sigma}{\\varepsilon_0 \\varepsilon_r}$.'
    ],
    exempleApplication: 'Membrane biologique d\'épaisseur $e = 5\\text{ nm}$, permittivité relative lipidique $\\varepsilon_r = 2.5$, potentiel de membrane $V_m = -70\\text{ mV}$. Le champ électrique uniforme régnant au cœur de la membrane vaut $E = \\frac{|V_m|}{e} = \\frac{70\\times 10^{-3}\\text{ V}}{5\\times 10^{-9}\\text{ m}} = 1.4\\times 10^7\\text{ V/m} = 14\\text{ MV/m}$ !'
  }
];
