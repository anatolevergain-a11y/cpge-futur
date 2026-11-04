import type { ExerciseItem } from './cpgeData';

export const QUINQUAGINTA_EXERCISES_PART2: ExerciseItem[] = [
  // ==========================================
  // PHYSIQUE (26 à 35)
  // ==========================================
  {
    id: 'exo-quinq-26-fentes-young-largeur-source',
    title: 'Fentes d\'Young : Source de largeur spatiale finie et contraste d\'interférence',
    matiere: 'Physique',
    chapitreId: 'physique-interferences-deux-ondes-michelson',
    chapitreTitre: 'Optique Ondulatoire : Interférences à Deux Ondes & Interféromètre de Michelson',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PSI',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Dispositif des Trous d\'Young avec Source Primaire Élargie',
      type: 'fentes-young',
      legende: 'Influence de la largeur b de la fente source sur la visibilité des franges d\'interférence',
      donneesCles: [
        { label: 'Écartement des fentes', symbole: 'a', valeur: '1,0 mm' },
        { label: 'Distance source-fentes', symbole: 'd_1', valeur: '50 cm' },
        { label: 'Longueur d\'onde', symbole: '\\lambda_0', valeur: '550 nm' }
      ]
    },
    enonce: 'On considère un dispositif de fentes d\'Young séparées de $a$, situées à une distance $d_1$ d\'une fente source primaire $S$ de largeur finie $b$ uniforme et incohérente, et à distance $D$ d\'un écran d\'observation. La lumière est monochromatique de longueur d\'onde $\\lambda_0$.\n1. Pour un point source $S_0$ situé à l\'ordonnée $y_s$ dans le plan source, exprimer la différence de marche $\\delta(x, y_s)$ au point $M(x)$ de l\'écran.\n2. Intégrer l\'intensité pour une source étendue incohérente de profil rectangulaire sur $[-b/2, b/2]$ et montrer que le contraste est donné par $V = \\left| \\mathrm{sinc}\\left( \\frac{\\pi a b}{\\lambda_0 d_1} \\right) \\right|$.\n3. En déduire la largeur maximale de la source $b_{max}$ (critère de cohérence spatiale) pour conserver un contraste supérieur ou égal à $0{,}80$.',
    hints: [
      'La différence de marche totale est $\\delta(x, y_s) = \\frac{a x}{D} + \\frac{a y_s}{d_1}$.',
      'Intégrez $\\int_{-b/2}^{b/2} \\left(1 + \\cos\\left(\\frac{2\\pi}{\\lambda_0}\\left(\\frac{a x}{D} + \\frac{a y_s}{d_1}\\right)\\right)\\right) \\mathrm{d}y_s$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Différence de marche avec source décentrée',
          explication: 'Le trajet optique complet vaut $\\delta = (S M_2 + M_2 M) - (S M_1 + M_1 M) = (S M_2 - S M_1) + (M_2 M - M_1 M)$. Au premier ordre dans les conditions de Gauss :\n$$\\delta(x, y_s) = \\frac{a y_s}{d_1} + \\frac{a x}{D}$$'
        },
        {
          titre: '2. Intégration sur la source étendue',
          explication: 'Comme les points sources de la fente sont mutuellement incohérents, on somme les intensités élémentaires $\\mathrm{d}I = \\frac{I_0}{b} \\left( 1 + \\cos\\left( \\frac{2\\pi}{\\lambda_0}\\left( \\frac{ax}{D} + \\frac{a y_s}{d_1} \\right) \\right) \\right) \\mathrm{d}y_s$. L\'intégrale de la fonction cosinus donne :\n$$I(x) = I_0 \\left[ 1 + \\mathrm{sinc}\\left( \\frac{\\pi a b}{\\lambda_0 d_1} \\right) \\cos\\left( \\frac{2\\pi a x}{\\lambda_0 D} \\right) \\right]$$\nLe facteur de visibilité est donc le sinus cardinal $V = |\\mathrm{sinc}(u)|$ avec $u = \\frac{\\pi a b}{\\lambda_0 d_1}$.'
        },
        {
          titre: '3. Largeur limite de cohérence spatiale',
          explication: 'Le premier zéro de contraste apparaît pour $u = \\pi$, soit $b_{brouillage} = \\frac{\\lambda_0 d_1}{a}$. Pour $V \\ge 0{,}80$, $u \\le 1{,}1$, ce qui donne :\n$$b_{max} \\approx 1{,}1 \\frac{\\lambda_0 d_1}{\\pi a} = 1{,}1 \\frac{550 \\times 10^{-9} \\times 0{,}50}{\\pi \\times 1{,}0 \\times 10^{-3}} \\approx 96\\;\\mu\\text{m}$$'
        }
      ],
      conclusion: 'Le théorème de Van Cittert-Zernike montre que la visibilité des franges est la transformée de Fourier spatiale du profil d\'intensité de la source.',
      reflexeDuCorrecteur: 'Pour une source étendue incohérente, toujours intégrer les intensités élémentaires (jamais les amplitudes complexes).'
    }
  },
  {
    id: 'exo-quinq-27-brewster-polarisation-reflexion',
    title: 'Angle de Brewster et polarisation par réflexion sur un dioptre diélectrique',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-electromagnetiques-vide-conducteurs',
    chapitreTitre: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    filieres: ['PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'CCINP PC / PSI',
    dureeEstimeeMin: 20,
    enonce: 'Une onde électromagnétique plane monochromatique polarisée rectilignement se propage dans l\'air ($n_1 = 1$) et frappe un dioptre plan de verre d\'indice $n_2 = 1{,}50$ sous l\'angle d\'incidence $i_1$.\n1. Rappeler les coefficients de réflexion en amplitude de Fresnel $r_\\parallel$ (polarisation TM ou p) et $r_\\perp$ (polarisation TE ou s).\n2. Démontrer que le rayon réfléchi s\'annule pour la polarisation transverse magnétique (p) lorsque le rayon réfléchi et le rayon réfracté sont orthogonaux : $i_1 + i_2 = \\pi/2$.\n3. En déduire la loi de Brewster $\\tan(i_B) = \\frac{n_2}{n_1}$. Calculer la valeur numérique de $i_B$.\n4. Application : expliquer comment des lunettes de soleil polarisantes suppriment les reflets gênants à la surface de l\'eau ($n = 1{,}33$).',
    hints: [
      'Le coefficient de Fresnel parallèle s\'écrit $r_\\parallel = \\frac{\\tan(i_1 - i_2)}{\\tan(i_1 + i_2)}$.',
      'Si $i_1 + i_2 = \\pi/2$, le dénominateur $\\tan(\\pi/2)$ tend vers l\'infini, donc $r_\\parallel = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Formule de Fresnel pour l\'onde TM',
          explication: 'D\'après les conditions de continuité des composantes tangentielles des champs $\\vec{E}$ et $\\vec{B}$ sur le dioptre sans charge libre ni courant de surface, le coefficient de réflexion parallèle s\'exprime sous forme trigonométrique :\n$$r_\\parallel = \\frac{\\tan(i_1 - i_2)}{\\tan(i_1 + i_2)}$$'
        },
        {
          titre: '2. Annulation de la réflexion et angle droit',
          explication: 'Le coefficient $r_\\parallel$ s\'annule lorsque le dénominateur devient infini, c\'est-à-dire quand $i_1 + i_2 = \\frac{\\pi}{2}$. Dans cette géométrie, les dipôles oscillants induits dans le milieu 2 sont orientés parallèlement à la direction de propagation du rayon réfléchi. Comme un dipôle électrique ne rayonne jamais le long de son propre axe, aucun champ n\'est réfléchi.'
        },
        {
          titre: '3. Angle de Brewster',
          explication: 'D\'après la loi de Snell-Descartes : $n_1 \\sin(i_B) = n_2 \\sin(i_2) = n_2 \\sin(\\frac{\\pi}{2} - i_B) = n_2 \\cos(i_B)$. En divisant par $\\cos(i_B)$ :\n$$\\tan(i_B) = \\frac{n_2}{n_1}$$\nApplication numérique pour le verre : $i_B = \\arctan(1{,}50) \\approx 56{,}3^\\circ$.'
        },
        {
          titre: '4. Lunettes de soleil polarisantes',
          explication: 'La lumière du soleil rasante réfléchie par l\'eau est principalement polarisée horizontalement (TE). Les verres polarisants possèdent un axe de transmission vertical, bloquant ainsi intégralement la lumière réfléchie polarisée sans altérer la vision directe.'
        }
      ],
      conclusion: 'Sous l\'incidence de Brewster, la lumière réfléchie est rigoureusement polarisée à 100% rectilignement perpendiculaire au plan d\'incidence.',
      reflexeDuCorrecteur: 'Toujours associer l\'angle de Brewster à l\'absence de rayonnement dipolaire selon l\'axe d\'oscillation.'
    }
  },
  {
    id: 'exo-quinq-28-freinage-courants-foucault',
    title: 'Freinage électromagnétique par courants de Foucault dans un disque conducteur',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-electromagnetiques-conducteurs-peau',
    chapitreTitre: 'Ondes Électromagnétiques dans les Conducteurs & Effet de Peau',
    filieres: ['PSI', 'PC', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PSI',
    dureeEstimeeMin: 25,
    enonce: 'Un disque métallique de rayon $R$, d\'épaisseur $e$, de masse $M$ et de conductivité électrique $\\gamma$ tourne sans frottement solide autour de son axe fixe $(O, \\vec{z})$ à la vitesse angulaire $\\omega(t)$. Une zone rectangulaire de dimensions $a \\times b$ située à la distance $r_0$ de l\'axe est soumise à un champ magnétique stationnaire uniforme $\\vec{B} = B_0 \\vec{z}$.\n1. Déterminer le champ électromoteur de Lorentz $\\vec{E}_m = \\vec{v} \\wedge \\vec{B}$ dans la zone du champ.\n2. En utilisant la loi d\'Ohm locale $\\vec{j} = \\gamma \\vec{E}_m$, exprimer la densité volumique de force de Laplace $\\vec{f}_L = \\vec{j} \\wedge \\vec{B}$.\n3. Calculer le couple de freinage $\\vec{\\Gamma}_L$ exercé sur le disque et établir l\'équation différentielle vérifiée par $\\omega(t)$.\n4. Déterminer le temps caractéristique d\'arrêt $\\tau$. Pourquoi ce système ne peut-il jamais bloquer complètement le disque à vitesse rigoureusement nulle ?',
    hints: [
      'La vitesse locale d\'un élément de matière est $\\vec{v} = \\omega r_0 \\vec{u}_\\theta$.',
      'Le couple est $\\vec{\\Gamma} = \\vec{r}_0 \\wedge \\vec{F}_L$. La force de Laplace est proportionnelle à la vitesse $\\omega$, d\'où un amortissement exponentiel en $e^{-t/\\tau}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Champ électromoteur de Lorentz',
          explication: 'Dans la zone du pôle magnétique où $\\vec{v} \\approx \\omega r_0 \\vec{u}_\\theta$ et $\\vec{B} = B_0 \\vec{u}_z$ :\n$$\\vec{E}_m = \\vec{v} \\wedge \\vec{B} = (\\omega r_0 \\vec{u}_\\theta) \\wedge (B_0 \\vec{u}_z) = \\omega r_0 B_0 \\vec{u}_r$$'
        },
        {
          titre: '2. Densité de courant et force volumique',
          explication: 'En négligeant l\'auto-induction (faible vitesse), le champ électrique électrostatique est négligeable devant le champ moteur dans la fente : $\\vec{j} = \\gamma \\vec{E}_m = \\gamma \\omega r_0 B_0 \\vec{u}_r$. La force volumique de Laplace vaut :\n$$\\vec{f}_L = \\vec{j} \\wedge \\vec{B} = (\\gamma \\omega r_0 B_0 \\vec{u}_r) \\wedge (B_0 \\vec{u}_z) = -\\gamma \\omega r_0 B_0^2 \\vec{u}_\\theta$$\nCette force s\'oppose au mouvement (loi de Lenz).'
        },
        {
          titre: '3. Couple résistant et équation du mouvement',
          explication: 'Le volume sous le champ est $V_{zone} = a b e$. La force résultante est $F_L = -\\gamma \\omega r_0 B_0^2 (a b e)$. Le couple par rapport à l\'axe $z$ vaut :\n$$\\Gamma_L = r_0 F_L = -\\gamma a b e r_0^2 B_0^2 \\omega = -k \\omega \\quad \\text{avec } k = \\gamma a b e r_0^2 B_0^2$$\nLe théorème du moment cinétique avec $J_\\Delta = \\frac{1}{2} M R^2$ donne $J_\\Delta \\frac{\\mathrm{d}\\omega}{\\mathrm{d}t} = -k \\omega$, soit $\\frac{\\mathrm{d}\\omega}{\\mathrm{d}t} + \\frac{\\omega}{\\tau} = 0$.'
        },
        {
          titre: '4. Temps caractéristique et non-blocage',
          explication: 'Le temps caractéristique est $\\tau = \\frac{J_\\Delta}{k} = \\frac{M R^2}{2 \\gamma a b e r_0^2 B_0^2}$. La vitesse décroît exponentiellement : $\\omega(t) = \\omega_0 e^{-t/\\tau}$. Comme la force est proportionnelle à la vitesse $\\omega$, elle s\'annule quand $\\omega \\to 0$. Le freinage électromagnétique (ralentisseurs Telma de camions ou TGV) ne permet jamais un freinage d\'immobilisation (parking), il nécessite un frein mécanique en fin de course.'
        }
      ],
      conclusion: 'Le freinage par courants de Foucault offre une décélération progressive, inusable et proportionnelle à la vitesse sans contact mécanique.',
      reflexeDuCorrecteur: 'Vérifier que la force de Laplace trouvée est toujours opposée à la vitesse pour être conforme à la loi de modération de Lenz.'
    }
  },
  {
    id: 'exo-quinq-29-effet-hall-densite-porteurs',
    title: 'Effet Hall stationnaire et détermination de la densité et du signe des porteurs',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-electromagnetiques-conducteurs-peau',
    chapitreTitre: 'Ondes Électromagnétiques dans les Conducteurs & Effet de Peau',
    filieres: ['PC', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / PSI',
    dureeEstimeeMin: 20,
    enonce: 'Un ruban parallélépipédique conducteur de largeur $a$ (selon $y$), d\'épaisseur $b$ (selon $z$) et de longueur $L$ (selon $x$) est parcouru par un courant d\'intensité $I$ selon $\\vec{u}_x$. Un champ magnétique uniforme $\\vec{B} = B \\vec{u}_z$ est appliqué perpendiculairement au ruban.\n1. Exprimer la force de Lorentz subie par un porteur de charge $q$ se déplaçant à la vitesse moyenne $\\vec{v} = v_d \\vec{u}_x$.\n2. Expliquer l\'apparition d\'un champ électrique transverse $\\vec{E}_H = E_H \\vec{u}_y$ (champ de Hall) à l\'équilibre stationnaire.\n3. Exprimer la tension de Hall transverse $U_H = V(y=a) - V(y=0)$ en fonction de $I, B, b$, de la charge élémentaire $q$ et de la densité volumique $n$ des porteurs.\n4. Comment déduire expérimentalement si la conduction est assurée par des électrons ($q = -e$) ou des trous ($q = +e$) ?',
    hints: [
      'À l\'équilibre stationnaire, les porteurs ne dérivent plus selon $y$ : $\\vec{F} = q(\\vec{E}_H + \\vec{v} \\wedge \\vec{B}) = \\vec{0}$.',
      'Le courant est $I = j (a b) = n q v_d a b$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Force de Lorentz',
          explication: 'Sur un porteur de charge $q$ et de vitesse $\\vec{v}_d = v_d \\vec{u}_x$, la force magnétique est $\\vec{F}_m = q \\vec{v}_d \\wedge \\vec{B} = q v_d B (\\vec{u}_x \\wedge \\vec{u}_z) = -q v_d B \\vec{u}_y$.'
        },
        {
          titre: '2. Champ de Hall à l\'équilibre',
          explication: 'La force magnétique dévie les porteurs de charge vers l\'un des flancs du ruban, créant une accumulation de charges opposées sur les deux bords. Cette polarisation génère un champ électrostatique transverse $\\vec{E}_H = E_H \\vec{u}_y$ tel qu\'à l\'équilibre, la force totale s\'annule :\n$$q(\\vec{E}_H + \\vec{v}_d \\wedge \\vec{B}) = \\vec{0} \\implies \\vec{E}_H = -\\vec{v}_d \\wedge \\vec{B} = v_d B \\vec{u}_y$$'
        },
        {
          titre: '3. Tension de Hall',
          explication: 'La tension mesurée sur la largeur $a$ est $U_H = E_H a = v_d B a$. Or l\'intensité du courant s\'exprime par $I = j (a b) = n q v_d a b$, d\'où $v_d a = \\frac{I}{n q b}$. En substituant :\n$$U_H = \\frac{I B}{n q b} = R_H \\frac{I B}{b} \\quad \\text{avec } R_H = \\frac{1}{n q}$$'
        },
        {
          titre: '4. Signe des porteurs de charge',
          explication: 'Si $q = -e$ (électrons), les électrons avancent avec $v_d < 0$ pour un courant $I > 0$. Ils sont déviés vers le même bord que s\'il s\'agissait de charges positives reculant. Cependant, le signe de la tension $U_H$ dépend directement du signe algébrique de $q$. La mesure du signe de $U_H$ donne directement la polarité des porteurs majoritaires (indispensable dans l\'étude des semi-conducteurs de type n ou p).'
        }
      ],
      conclusion: 'L\'effet Hall permet de mesurer directement la densité volumique des porteurs $n$ et d\'utiliser des sondes à effet Hall pour magnétométrie.',
      reflexeDuCorrecteur: 'Remarquer que la tension de Hall $U_H$ est inversement proportionnelle à l\'épaisseur $b$ : pour avoir une tension mesurable, on utilise toujours des couches minces ($b \\ll 1$).'
    }
  },
  {
    id: 'exo-quinq-30-cycle-stirling-rendement-reel',
    title: 'Moteur de Stirling : Cycle à deux isothermes et deux isochores avec régénérateur',
    matiere: 'Physique',
    chapitreId: 'physique-thermo-principes-machines',
    chapitreTitre: 'Thermodynamique : Principes & Machines Thermiques',
    filieres: ['MP', 'PSI', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale MP / PSI',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Cycle de Stirling dans le diagramme de Clapeyron (P, V)',
      type: 'cycle-carnot',
      legende: 'Quatre évolutions réversibles : 2 isothermes (T_C, T_F) et 2 isochores (V_min, V_max)',
      donneesCles: [
        { label: 'Température chaude', symbole: 'T_C', valeur: '600 K' },
        { label: 'Température froide', symbole: 'T_F', valeur: '300 K' },
        { label: 'Taux de compression', symbole: 'r = V_{max}/V_{min}', valeur: '3,0' }
      ]
    },
    enonce: 'On étudie le cycle d\'un moteur de Stirling fonctionnant avec 1 mole de gaz parfait de capacité thermique molaire à volume constant $C_{v,m}$ :\n- $1 \\to 2$ : compression isotherme à $T_F$ de $V_1$ à $V_2 = V_1/r$ ($r > 1$).\n- $2 \\to 3$ : échauffement isochore de $T_F$ à $T_C$ à volume constant $V_2$.\n- $3 \\to 4$ : détente isotherme à $T_C$ de $V_2$ à $V_1 = r V_2$.\n- $4 \\to 1$ : refroidissement isochore de $T_C$ à $T_F$ à volume constant $V_1$.\n1. Exprimer les travaux et transferts thermiques échangés pour chacune des 4 étapes.\n2. Montrer qu\'en présence d\'un régénérateur thermique idéal (qui stocke la chaleur de $4 \\to 1$ pour la restituer intégralement lors de $2 \\to 3$), le rendement du cycle atteint la limite maximale de Carnot $\\eta_C = 1 - \\frac{T_F}{T_C}$.\n3. Quel serait le rendement $\\eta_{sans\\,reg}$ sans régénérateur thermique ? Faire l\'application numérique avec $r=3$, $T_F = 300\\text{ K}$, $T_C = 600\\text{ K}$ et $C_{v,m} = \\frac{5}{2}R$.',
    hints: [
      'Pour une isotherme de gaz parfait, $\\Delta U = 0 \\implies Q = -W = n R T \\ln(V_f/V_i)$.',
      'Sans régénérateur, la chaleur fournie par la source chaude comprend la détente isotherme $Q_{3 \\to 4}$ PLUS l\'isochore $Q_{2 \\to 3}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Bilans énergétiques par étape',
          explication: '- $W_{1 \\to 2} = -R T_F \\ln(1/r) = R T_F \\ln r > 0$ et $Q_{1 \\to 2} = -R T_F \\ln r < 0$.\n- $W_{2 \\to 3} = 0$ et $Q_{2 \\to 3} = C_{v,m} (T_C - T_F) > 0$.\n- $W_{3 \\to 4} = -R T_C \\ln r < 0$ et $Q_{3 \\to 4} = R T_C \\ln r > 0$.\n- $W_{4 \\to 1} = 0$ et $Q_{4 \\to 1} = C_{v,m} (T_F - T_C) = -Q_{2 \\to 3} < 0$.'
        },
        {
          titre: '2. Rendement avec régénérateur idéal',
          explication: 'Le régénérateur absorbe $Q_{4 \\to 1}$ et restitue exactement cette énergie pour préchauffer le gaz lors de $2 \\to 3$. Le transfert net avec la source chaude extérieure se réduit à $Q_C = Q_{3 \\to 4} = R T_C \\ln r$. Le travail net total produit est :\n$$W_{net} = -(W_{1 \\to 2} + W_{3 \\to 4}) = R (T_C - T_F) \\ln r$$\nLe rendement vaut donc exactement :\n$$\\eta_{avec} = \\frac{W_{net}}{Q_C} = \\frac{R (T_C - T_F) \\ln r}{R T_C \\ln r} = 1 - \\frac{T_F}{T_C} = \\eta_C$$'
        },
        {
          titre: '3. Rendement sans régénérateur',
          explication: 'Sans régénérateur, la source chaude doit aussi fournir $Q_{2 \\to 3}$ :\n$$\\eta_{sans} = \\frac{R (T_C - T_F) \\ln r}{R T_C \\ln r + C_{v,m}(T_C - T_F)} = \\frac{1 - T_F/T_C}{1 + \\frac{C_{v,m}(1 - T_F/T_C)}{R \\ln r}}$$\nApplication numérique : $\\eta_C = 1 - 300/600 = 0{,}50$ (50%). Sans régénérateur : $\\eta_{sans} = \\frac{0{,}50}{1 + \\frac{2{,}5 \\times 0{,}50}{\\ln 3}} = \\frac{0{,}50}{1 + 1{,}25/1{,}0986} = \\frac{0{,}50}{2{,}138} \\approx 0{,}234$ (23,4%).'
        }
      ],
      conclusion: 'Le régénérateur thermique double le rendement effectif du moteur de Stirling en le portant au rendement théorique de Carnot.',
      reflexeDuCorrecteur: 'Bien identifier les transferts internes d\'énergie (échangeur régénérateur) qui ne proviennent pas des sources thermiques extérieures.'
    }
  },
  {
    id: 'exo-quinq-31-onde-acoustique-impedance-reflexion',
    title: 'Onde acoustique 1D dans un conduit et impédance caractéristique',
    matiere: 'Physique',
    chapitreId: 'physique-meca-fluides-euler-navier-stokes',
    chapitreTitre: 'Mécanique des Fluides : Statique, Euler & Navier-Stokes',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'On étudie la propagation d\'ondes acoustiques planes monochromatiques dans un tube rectiligne rempli d\'air de masse volumique $\\rho_0$ et de célérité du son $c_0$.\n1. Rappeler la relation entre la surpression acoustique $p_1(x, t)$ et la vitesse acoustique $v_1(x, t)$ pour une onde plane progressive se propageant dans le sens des $x$ croissants. Définir l\'impédance acoustique spécifique $Z_0 = \\rho_0 c_0$.\n2. Le conduit est fermé en $x = L$ par une paroi rigide indéformable ($v_1(L, t) = 0$). Exprimer l\'onde de surpression totale résultant de la superposition de l\'onde incidente et de l\'onde réfléchie.\n3. Montrer que l\'onde résultante est une onde stationnaire. Déterminer les positions des nœuds et des ventres de pression.',
    hints: [
      'Pour une onde progressive vers la droite : $p_1 = \\rho_0 c_0 v_1 = Z_0 v_1$. Pour une onde vers la gauche : $p_1 = -Z_0 v_1$.',
      'La condition en $x=L$ donne $v_{inc}(L, t) + v_{ref}(L, t) = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Impédance acoustique',
          explication: 'L\'équation d\'Euler linéarisée $\\rho_0 \\frac{\\partial v_1}{\\partial t} = -\\frac{\\partial p_1}{\\partial x}$ et la conservation de la masse donnent l\'équation de d\'Alembert de célérité $c_0 = 1/\\sqrt{\\rho_0 \\chi_s}$. Pour une onde progressive vers la droite $p_1(x, t) = p_0 \\cos(\\omega t - k x)$, la vitesse particulaire vaut $v_1(x, t) = \\frac{p_0}{\\rho_0 c_0} \\cos(\\omega t - k x)$, d\'où l\'impédance caractéristique $Z_0 = \\frac{p_1}{v_1} = \\rho_0 c_0$.'
        },
        {
          titre: '2. Réflexion sur paroi rigide',
          explication: 'La vitesse acoustique totale s\'écrit $v_1(x, t) = v_{inc}(x, t) + v_{ref}(x, t) = \\frac{1}{Z_0} [ p_i(x, t) - p_r(x, t) ]$. En $x=L$, la paroi rigide impose $v_1(L, t) = 0$, donc $p_r(L, t) = p_i(L, t)$. Le coefficient de réflexion en pression est $r_p = +1$.'
        },
        {
          titre: '3. Structure de l\'onde stationnaire',
          explication: 'La surpression totale vaut :\n$$p_1(x, t) = p_0 [\\cos(\\omega t - k x) + \\cos(\\omega t + k x - 2kL)] = 2 p_0 \\cos(k(L-x)) \\cos(\\omega t - k L)$$\nIl s\'agit d\'une onde purement stationnaire avec factorisation spatio-temporelle :\n- Ventres de pression (amplitude maximale $2p_0$) : $\\cos(k(L-x)) = \\pm 1 \\implies x = L - m \\frac{\\lambda}{2}$. La paroi $x=L$ est un ventre de pression.\n- Nœuds de pression (surpression nulle) : $\\cos(k(L-x)) = 0 \\implies x = L - (2m+1) \\frac{\\lambda}{4}$.'
        }
      ],
      conclusion: 'Sur une paroi rigide, la vitesse présente un nœud ($v=0$) et la surpression présente un ventre ($p_{max} = 2p_0$).',
      reflexeDuCorrecteur: 'Attention au signe : l\'impédance relie $p_1 = -Z_0 v_1$ pour l\'onde se propageant dans le sens des $x$ décroissants.'
    }
  },
  {
    id: 'exo-quinq-32-puits-quantique-asymetrique',
    title: 'Puits quantique unidimensionnel semi-infini et quantification de l\'énergie',
    matiere: 'Physique',
    chapitreId: 'physique-meca-quantique-puits-potentiel',
    chapitreTitre: 'Mécanique Quantique : Dualité Onde-Corpuscule & Puits de Potentiel',
    filieres: ['MP', 'PC', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'X-ENS MP / PC',
    dureeEstimeeMin: 30,
    enonce: 'On considère une particule de masse $m$ dans le potentiel 1D suivant :\n- $V(x) = +\\infty$ pour $x < 0$\n- $V(x) = 0$ pour $0 \\le x \\le L$\n- $V(x) = V_0 > 0$ pour $x > L$\nOn s\'intéresse aux états liés d\'énergie $0 < E < V_0$.\n1. Écrire la forme générale de la fonction d\'onde $\\psi(x)$ dans les domaines $x \\in [0, L]$ et $x > L$.\n2. Exprimer les conditions aux limites en $x=0$, $x=L$ et $x \\to +\\infty$.\n3. Établir l\'équation transcendante vérifiée par les nombres d\'onde $k = \\frac{\\sqrt{2mE}}{\\hbar}$ et $K = \\frac{\\sqrt{2m(V_0-E)}}{\\hbar}$ :\n$$\\tan(k L) = -\\frac{k}{K}$$\n4. À quelle condition sur $V_0$ et $L$ existe-t-il au moins un état lié ?',
    hints: [
      'En $x=0$, le mur infini impose $\\psi(0) = 0$. Donc $\\psi(x) = A \\sin(k x)$ pour $x \\in [0, L]$.',
      'Pour $x > L$, éliminez l\'exponentielle croissante pour que $\\psi$ soit de carré intégrable.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Forme de la fonction d\'onde',
          explication: '- Pour $x < 0$ : $\\psi(x) = 0$.\n- Pour $0 \\le x \\le L$ : $-\\frac{\\hbar^2}{2m}\\psi\'\' = E\\psi \\implies \\psi(x) = A \\sin(kx) + B \\cos(kx)$. Comme $\\psi(0) = 0$, $B = 0$, donc $\\psi(x) = A \\sin(kx)$ avec $k = \\frac{\\sqrt{2mE}}{\\hbar}$.\n- Pour $x > L$ : $-\\frac{\\hbar^2}{2m}\\psi\'\' + V_0\\psi = E\\psi \\implies \\psi(x) = C e^{-K x} + D e^{K x}$ avec $K = \\frac{\\sqrt{2m(V_0-E)}}{\\hbar}$. Comme $\\psi \\in L^2(\\mathbb{R})$, $D = 0$, donc $\\psi(x) = C e^{-K(x-L)}$.'
        },
        {
          titre: '2. Continuité en $x=L$',
          explication: 'La continuité de la fonction d\'onde $\\psi$ et de sa dérivée $\\psi\'$ en $x=L$ donne :\n1. $A \\sin(kL) = C$\n2. $A k \\cos(kL) = -K C$'
        },
        {
          titre: '3. Équation transcendante',
          explication: 'En faisant le quotient de (1) par (2) :\n$$\\frac{\\sin(kL)}{k\\cos(kL)} = -\\frac{1}{K} \\implies \\tan(kL) = -\\frac{k}{K}$$'
        },
        {
          titre: '4. Condition d\'existence d\'au moins un état lié',
          explication: 'Comme $k > 0$ et $K > 0$, la fonction $\\tan(kL)$ doit être négative, ce qui impose $kL \\in ]\\pi/2, \\pi[ + m\\pi$. Pour que le premier état lié existe, le rayon $R_0^2 = (kL)^2 + (KL)^2 = \\frac{2m V_0 L^2}{\\hbar^2}$ doit dépasser $\\pi^2/4$, soit :\n$$V_0 L^2 > \\frac{\\pi^2 \\hbar^2}{8 m}$$\nContrairement au puits symétrique (qui admet toujours au moins un état lié même très peu profond), le puits semi-infini nécessite une profondeur minimale pour lier la particule.'
        }
      ],
      conclusion: 'La dissymétrie du mur infini élimine les modes pairs et impose un seuil d\'existence au niveau fondamental.',
      reflexeDuCorrecteur: 'Sur une frontière où $V \\to +\\infty$, seule la fonction d\'onde $\\psi$ est continue (et s\'annule) ; la dérivée $\\psi\'$ est discontinue.'
    }
  },
  {
    id: 'exo-quinq-33-effet-josephson-tension-quantique',
    title: 'Effet Josephson alternatif et étalon quantique de tension',
    matiere: 'Physique',
    chapitreId: 'physique-meca-quantique-puits-potentiel',
    chapitreTitre: 'Mécanique Quantique : Dualité Onde-Corpuscule & Puits de Potentiel',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral ENS MP / MPI',
    dureeEstimeeMin: 25,
    enonce: 'Une jonction Josephson est formée de deux supraconducteurs séparés par une fine barrière isolante sous une tension continue constante $V_0$.\n1. Les équations phénoménologiques de Josephson relient le courant supraconducteur $I(t)$ et la différence de phase macroscopique $\\phi(t) = \\theta_2(t) - \\theta_1(t)$ par :\n$$I(t) = I_c \\sin(\\phi(t)) \\quad \\text{et} \\quad \\frac{\\mathrm{d}\\phi}{\\mathrm{d}t} = \\frac{2e V_0}{\\hbar}$$\nMontrer que le courant oscille à la fréquence de Josephson $f_J = \\frac{2e}{h} V_0$.\n2. Calculer numériquement la constante de Josephson $K_J = \\frac{2e}{h}$ en $\\text{GHz}\\cdot\\text{V}^{-1}$.\n3. Quelle tension continue $V_0$ correspond à une fréquence micro-onde de $10{,}0\\text{ GHz}$ ? Expliquer pourquoi ce phénomène sert d\'étalon primaire universel pour le volt.',
    hints: [
      'Intégrez l\'équation différentielle sur $\\phi(t)$ pour $V_0 = \\mathrm{cste}$ : $\\phi(t) = \\omega_J t + \\phi_0$ avec $\\omega_J = \\frac{2e V_0}{\\hbar}$.',
      'Rappelez que $\\hbar = h / (2\\pi)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Oscillation du supercourant',
          explication: 'Comme $V_0$ est constante, $\\frac{\\mathrm{d}\\phi}{\\mathrm{d}t} = \\frac{2e V_0}{\\hbar}$ s\'intègre immédiatement en $\\phi(t) = \\frac{2e V_0}{\\hbar} t + \\phi_0$. Le courant supraconducteur vaut donc :\n$$I(t) = I_c \\sin\\left( \\frac{2e V_0}{\\hbar} t + \\phi_0 \\right) = I_c \\sin(2\\pi f_J t + \\phi_0)$$\navec la pulsation $\\omega_J = \\frac{2e V_0}{\\hbar}$, d\'où la fréquence $f_J = \\frac{\\omega_J}{2\\pi} = \\frac{2e V_0}{h}$.'
        },
        {
          titre: '2. Constante de Josephson',
          explication: 'La constante de Josephson vaut :\n$$K_J = \\frac{2e}{h} = \\frac{2 \\times 1{,}602 \\times 10^{-19}\\text{ C}}{6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}} \\approx 4{,}835979 \\times 10^{14}\\text{ Hz/V} = 483{,}598\\text{ GHz/mV}$$'
        },
        {
          titre: '3. Application numérique et étalon du volt',
          explication: 'Pour $f_J = 10{,}0\\text{ GHz} = 10^{10}\\text{ Hz}$ :\n$$V_0 = \\frac{f_J}{K_J} = \\frac{10^{10}}{4{,}836 \\times 10^{14}} \\approx 20{,}68\\;\\mu\\text{V}$$\nComme la mesure d\'une fréquence est la grandeur physique mesurable avec la plus grande précision absolue (horloges atomiques au césium avec incertitude relative de $10^{-16}$), relier le volt à une fréquence via les constantes fondamentales $e$ et $h$ fournit un étalon de tension d\'une reproductibilité parfaite.'
        }
      ],
      conclusion: 'L\'effet Josephson convertit une tension en fréquence pure via le quantum de flux magnétique $\\\\Phi_0 = h/(2e)$.',
      reflexeDuCorrecteur: 'Le facteur 2 provient de la charge des paires de Cooper ($q = 2e$) responsables de la supraconductivité.'
    }
  },
  {
    id: 'exo-quinq-34-bernoulli-instationnaire-tube-u',
    title: 'Théorème de Bernoulli instationnaire et oscillations d\'une colonne de liquide en tube en U',
    matiere: 'Physique',
    chapitreId: 'physique-meca-fluides-euler-navier-stokes',
    chapitreTitre: 'Mécanique des Fluides : Statique, Euler & Navier-Stokes',
    filieres: ['PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / PSI',
    dureeEstimeeMin: 20,
    enonce: 'Un liquide parfait incompressible de masse volumique $\\rho$ remplit un tube en U de section constante $S$ sur une longueur totale de colonne $L$. Initialement, la colonne est écartée de sa position d\'équilibre d\'une hauteur $z(t)$ dans la branche droite (et $-z(t)$ dans la branche gauche).\n1. Énoncer le théorème de Bernoulli instationnaire pour un écoulement incompressible irrotationnel le long d\'une ligne de courant reliant la surface libre gauche (point 1) à la surface libre droite (point 2).\n2. En exprimant $\\int_1^2 \\frac{\\partial \\vec{v}}{\\partial t} \\cdot \\mathrm{d}\\vec{\\ell}$, établir l\'équation différentielle vérifiée par le niveau $z(t)$.\n3. En déduire la période propre $T_0$ des oscillations de la colonne liquide.',
    hints: [
      'Pour un fluide incompressible en section constante, la vitesse $v(t) = \\dot{z}(t)$ est uniforme le long du tube.',
      'L\'intégrale instationnaire vaut $\\int_1^2 \\frac{\\partial v}{\\partial t} \\mathrm{d}s = \\ddot{z}(t) L$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Bernoulli instationnaire',
          explication: 'Pour un écoulement parfait incompressible irrotationnel :\n$$\\int_1^2 \\frac{\\partial \\vec{v}}{\\partial t} \\cdot \\mathrm{d}\\vec{\\ell} + \\left[ \\frac{1}{2} v^2 + \\frac{P}{\\rho} + g z \\right]_1^2 = 0$$'
        },
        {
          titre: '2. Calcul des termes le long de la colonne',
          explication: 'Comme la section $S$ est constante et le fluide incompressible, la vitesse est uniforme le long de tout le tube : $v(s, t) = \\dot{z}(t)$. Ainsi :\n$$\\int_1^2 \\frac{\\partial v}{\\partial t}\\,\\mathrm{d}s = \\ddot{z}(t) \\int_1^2 \\mathrm{d}s = L \\ddot{z}(t)$$\nAux deux surfaces libres, $P_1 = P_2 = P_{atm}$ et $v_1 = v_2 = \\dot{z}$. La différence d\'énergie potentielle de pesanteur vaut $g z_2 - g z_1 = g(z - (-z)) = 2 g z$. L\'équation de Bernoulli devient donc :\n$$L \\ddot{z}(t) + 2 g z(t) = 0 \\iff \\ddot{z}(t) + \\frac{2g}{L} z(t) = 0$$'
        },
        {
          titre: '3. Période propre',
          explication: 'C\'est l\'équation d\'un oscillateur harmonique de pulsation propre $\\omega_0 = \\sqrt{\\frac{2g}{L}}$. La période propre vaut :\n$$T_0 = \\frac{2\\pi}{\\omega_0} = 2\\pi \\sqrt{\\frac{L}{2g}}$$'
        }
      ],
      conclusion: 'La colonne de liquide oscille comme un pendule simple de longueur équivalente $L_{eq} = L/2$.',
      reflexeDuCorrecteur: 'Ne jamais oublier le terme d\'accélération instationnaire $\\int \\frac{\\partial \\vec{v}}{\\partial t} \\cdot \\mathrm{d}\\vec{\\ell}$ dès que l\'écoulement dépend du temps.'
    }
  },
  {
    id: 'exo-quinq-35-kutta-joukowski-portance',
    title: 'Théorème de Kutta-Joukowski et portance d\'une aile d\'avion par circulation',
    matiere: 'Physique',
    chapitreId: 'physique-meca-fluides-euler-navier-stokes',
    chapitreTitre: 'Mécanique des Fluides : Statique, Euler & Navier-Stokes',
    filieres: ['PSI', 'PC'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts PSI / PC',
    dureeEstimeeMin: 25,
    enonce: 'On considère l\'écoulement plan stationnaire d\'un fluide parfait incompressible de masse volumique $\\rho$ à vitesse asymptotique $U_\\infty \\vec{u}_x$ autour d\'un profil d\'aile d\'envergure $b$.\n1. Définir la circulation $\\Gamma$ du champ des vitesses le long d\'un contour fermé entourant le profil.\n2. Énoncer le théorème de Kutta-Joukowski donnant la force aérodynamique globale exercée sur l\'aile : $\\vec{F} = -\\rho U_\\infty \\Gamma b \\vec{u}_y$.\n3. Expliquer qualitativement la condition de Kutta au bord de fuite qui fixe la valeur de la circulation $\\Gamma$.\n4. Application : pour un avion de masse $M = 70\\text{ t}$ volant en palier à $U_\\infty = 250\\text{ m/s}$ avec une envergure $b = 35\\text{ m}$ à une altitude où $\\rho = 0{,}50\\text{ kg/m}^3$, calculer la circulation $\\Gamma$ requise.',
    hints: [
      'En vol en palier stabilisé, la portance équilibre le poids : $F_z = M g$.',
      'La condition de Kutta impose que le fluide quitte le bord de fuite aigu de manière lisse, sans vitesse infinie.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Circulation du vecteur vitesse',
          explication: 'La circulation autour du contour $\\mathcal{C}$ est l\'intégrale de ligne $\\Gamma = \\oint_\\mathcal{C} \\vec{v} \\cdot \\mathrm{d}\\vec{\\ell}$. D\'après le théorème de Kelvin, dans un fluide parfait, la circulation se conserve au cours du temps.'
        },
        {
          titre: '2. Théorème de Kutta-Joukowski',
          explication: 'En intégrant le tenseur des contraintes de pression d\'Euler sur un cylindre de grand rayon et en utilisant le théorème des résidus complexes (potentiel complexe de Blasius) :\n$$\\vec{F}_{portance} = \\rho \\vec{U}_\\infty \\wedge \\vec{\\Gamma} \\implies F_z = \\rho U_\\infty \\Gamma b$$'
        },
        {
          titre: '3. Condition de Kutta',
          explication: 'Si $\\Gamma$ était nul, le point d\'arrêt arrière se situerait sur l\'extrados, imposant au fluide de contourner le bord de fuite aigu avec une vitesse théoriquement infinie. La viscosité réelle génère un tourbillon d\'échappement initial jusqu\'à ce que le point d\'arrêt se fixe exactement sur l\'arête du bord de fuite, déterminant une valeur unique de circulation $\\Gamma$.'
        },
        {
          titre: '4. Calcul numérique',
          explication: 'Le poids de l\'avion est $P = M g = 70 \\times 10^3 \\times 9{,}81 \\approx 6{,}87 \\times 10^5\\text{ N}$. En égalant portance et poids :\n$$\\Gamma = \\frac{M g}{\\rho U_\\infty b} = \\frac{6{,}87 \\times 10^5}{0{,}50 \\times 250 \\times 35} = \\frac{6{,}87 \\times 10^5}{4375} \\approx 157\\text{ m}^2\\cdot\\text{s}^{-1}$$'
        }
      ],
      conclusion: 'La portance aérodynamique d\'un avion est directement proportionnelle à la circulation globale de l\'air autour de son profil.',
      reflexeDuCorrecteur: 'Sans viscosité initiale pour décoller le tourbillon de départ, un avion ne pourrait jamais décoller (paradoxe de d\'Alembert).'
    }
  },

  // ==========================================
  // CHIMIE (36 à 42)
  // ==========================================
  {
    id: 'exo-quinq-36-ellingham-titane-kroll',
    title: 'Diagramme d\'Ellingham du titane et procédé Kroll de réduction par le magnésium',
    matiere: 'Chimie',
    chapitreId: 'chimie-diagrammes-ellingham',
    chapitreTitre: 'Thermodynamique Chimique : Diagrammes d\'Ellingham & Métallurgie',
    filieres: ['PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / PSI',
    dureeEstimeeMin: 25,
    enonce: 'On donne les équations d\'Ellingham standard (en $\\text{kJ}\\cdot\\text{mol}^{-1}$ pour 1 mole de $O_2$) :\n- Oxyde de titane : $Ti(s) + O_2(g) = TiO_2(s)$, $\\Delta_r G_1^\\circ(T) = -945 + 0{,}180 T$\n- Oxyde de magnésium : $2 Mg(s) + O_2(g) = 2 MgO(s)$, $\\Delta_r G_2^\\circ(T) = -1200 + 0{,}216 T$\n1. Pourquoi ne peut-on pas réduire directement $TiO_2$ par le carbone à température raisonnable ?\n2. Dans le procédé Kroll, on transforme $TiO_2$ en tétrachlorure de titane $TiCl_4$, puis on le réduit par le magnésium liquide : $TiCl_4(g) + 2 Mg(l) = Ti(s) + 2 MgCl_2(l)$. Écrire la réaction de réduction d\'Ellingham pour les oxydes et déterminer si le magnésium peut réduire $TiO_2$.\n3. Calculer la constante d\'équilibre $K^\\circ$ à $T = 1000\\text{ K}$ pour la réduction directe de $TiO_2$ par $Mg$.',
    hints: [
      'Comparez la position relative des deux droites d\'Ellingham : $\\Delta_r G^\\circ = \\Delta_r G_2^\\circ - \\Delta_r G_1^\\circ$.',
      'Le réducteur le plus efficace est celui dont la droite d\'Ellingham est la plus basse.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Problème de la carboréduction du titane',
          explication: 'La droite d\'Ellingham de $TiO_2$ est située très bas ($-945\\text{ kJ/mol}$). Pour que la droite de $C \\to CO$ passe en dessous, il faudrait une température supérieure à $1800^\\circ\\text{C}$, température à laquelle le titane réagit violemment avec le carbone pour former un carbure réfractaire fragile et inutilisable $TiC$.'
        },
        {
          titre: '2. Réduction par le magnésium',
          explication: 'La réaction s\'écrit : $TiO_2(s) + 2 Mg(s) = Ti(s) + 2 MgO(s)$. Son enthalpie libre standard d\'Ellingham est la différence :\n$$\\Delta_r G^\\circ(T) = \\Delta_r G_2^\\circ(T) - \\Delta_r G_1^\\circ(T) = (-1200 + 0{,}216 T) - (-945 + 0{,}180 T) = -255 + 0{,}036 T\\text{ kJ/mol}$$\nÀ $T = 1000\\text{ K}$ : $\\Delta_r G^\\circ(1000) = -255 + 36 = -219\\text{ kJ/mol} < 0$. Comme $\\Delta_r G^\\circ < 0$, la réduction est thermodynamiquement ultra-favorisée.'
        },
        {
          titre: '3. Constante d\'équilibre à 1000 K',
          explication: '$$K^\\circ = \\exp\\left( -\\frac{\\Delta_r G^\\circ}{R T} \\right) = \\exp\\left( \\frac{219 \\times 10^3}{8{,}314 \\times 1000} \\right) = e^{26{,}34} \\approx 2{,}7 \\times 10^{11}$$\nLa réaction est quantitative (quasi-totale).'
        }
      ],
      conclusion: 'Le magnésium est un réducteur puissant capable d\'extraire les métaux réfractaires de leurs oxydes.',
      reflexeDuCorrecteur: 'Pour déterminer le sens d\'une réduction d\'oxydes, soustraire les expressions de $\\Delta_r G^\\circ$ normalisées à 1 mole de $O_2$.'
    }
  },
  {
    id: 'exo-quinq-37-boudouard-haut-fourneau',
    title: 'Équilibre de Boudouard et réduction du minerai de fer au haut fourneau',
    matiere: 'Chimie',
    chapitreId: 'chimie-diagrammes-ellingham',
    chapitreTitre: 'Thermodynamique Chimique : Diagrammes d\'Ellingham & Métallurgie',
    filieres: ['PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PC / PSI',
    dureeEstimeeMin: 20,
    enonce: 'On considère l\'équilibre de Boudouard : $C(s) + CO_2(g) = 2 CO(g)$ avec $\\Delta_r H^\\circ = +172\\text{ kJ}\\cdot\\text{mol}^{-1}$ et $\\Delta_r S^\\circ = +176\\text{ J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}$.\n1. Déterminer la température d\'inversion de Boudouard $T_{inv}$ pour laquelle $\\Delta_r G^\\circ(T_{inv}) = 0$.\n2. En appliquant la loi de Van \'t Hoff, indiquer comment évolue l\'équilibre lors d\'une élévation de température et lors d\'une augmentation de pression totale.\n3. En déduire pourquoi le monoxyde de carbone $CO$ est le réducteur prédominant dans la zone basse et chaude du haut fourneau ($T > 1000^\\circ\\text{C}$).',
    hints: [
      'À l\'inversion, $\\Delta_r H^\\circ - T_{inv} \\Delta_r S^\\circ = 0$.',
      'Le principe de Le Chatelier indique qu\'une hausse de température favorise le sens endothermique.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Température d\'inversion',
          explication: '$$T_{inv} = \\frac{\\Delta_r H^\\circ}{\\Delta_r S^\\circ} = \\frac{172 \\times 10^3\\text{ J/mol}}{176\\text{ J/K/mol}} \\approx 977\\text{ K} \\; (704^\\circ\\text{C})$$'
        },
        {
          titre: '2. Déplacement d\'équilibre (Le Chatelier)',
          explication: '- Température : $\\Delta_r H^\\circ > 0$ (réaction endothermique). D\'après la loi de Van \'t Hoff, $\\frac{\\mathrm{d}\\ln K^\\circ}{\\mathrm{d}T} = \\frac{\\Delta_r H^\\circ}{R T^2} > 0$. Une élévation de température déplace l\'équilibre dans le sens direct (formation de $CO$).\n- Pression : $\\Delta \\nu_{gaz} = 2 - 1 = +1 > 0$. Une augmentation de pression déplace l\'équilibre dans le sens rétrograde (consommation de moles de gaz, reformation de $C$ et $CO_2$).'
        },
        {
          titre: '3. Rôle dans le haut fourneau',
          explication: 'Au creuset du haut fourneau ($T \\approx 1200\\text{ à } 1600^\\circ\\text{C} \\gg T_{inv}$), la constante $K^\\circ \\gg 1$ : le dioxyde de carbone est totalement converti en $CO$ par le coke incandescent. C\'est ce flux ascendant de $CO$ gazeux chaud qui assure la réduction indirecte étagée des oxydes de fer : $Fe_2O_3 \\to Fe_3O_4 \\to FeO \\to Fe$ (fonte liquide).'
        }
      ],
      conclusion: 'Le diagramme de Boudouard conditionne l\'ensemble de la filière sidérurgique mondiale.',
      reflexeDuCorrecteur: 'Ne jamais oublier que la réaction de formation de $CO$ consomme du carbone solide pour produire deux gaz : $\\Delta \\nu_{gaz} = +1$.'
    }
  },
  {
    id: 'exo-quinq-38-titrage-coulometrique-so2',
    title: 'Dosage coulométrique à courant constant du dioxyde de soufre $SO_2$ atmosphérique',
    matiere: 'Chimie',
    chapitreId: 'chimie-electrochimie-courbes-intensite-potentiel',
    chapitreTitre: 'Électrochimie : Courbes Intensité-Potentiel & Corrosion',
    filieres: ['PC', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'CCINP PC',
    dureeEstimeeMin: 20,
    enonce: 'On dose le dioxyde de soufre $SO_2$ dissous dans une solution aqueuse d\'iodure de potassium $KI$ par coulométrie à courant constant $I = 20{,}0\\text{ mA}$. L\'oxydation anodique des ions iodure génère le diiode réactif : $2 I^- = I_2 + 2 e^-$. Le diiode formé oxyde instantanément $SO_2$ selon :\n$$SO_2 + I_2 + 2 H_2 O = SO_4^{2-} + 2 I^- + 4 H^+$$\n1. Écrire le bilan global et relier le nombre de moles de $SO_2$ dosé à la quantité d\'électricité $Q$ ayant traversé la cellule.\n2. L\'équivalence électrochimique (détectée par ampérométrie bi-indicatrice) est atteinte après une durée $t_e = 4\\text{ min } 12\\text{ s}$. Calculer la masse de $SO_2$ présente dans l\'échantillon ($M(SO_2) = 64{,}06\\text{ g/mol}$, $F = 96485\\text{ C/mol}$).',
    hints: [
      'Chaque mole de $SO_2$ nécessite 1 mole de $I_2$, qui requiert 2 moles d\'électrons ($n_e = 2 n(SO_2)$).',
      'La charge électrique totale est $Q = I \\cdot t_e = n_e F$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Loi de Faraday',
          explication: 'La génération électrochimique de 1 mole de $I_2$ libère $2 e^-$. Comme 1 mole de $I_2$ réagit stœchiométriquement avec 1 mole de $SO_2$, il faut $2$ électrons par molécule de $SO_2$ :\n$$Q = I t_e = n_e F = 2 n(SO_2) F \\implies n(SO_2) = \\frac{I t_e}{2 F}$$'
        },
        {
          titre: '2. Calcul de la charge électrique',
          explication: 'La durée de l\'électrolyse est $t_e = 4 \\times 60 + 12 = 252\\text{ s}$.\n$$Q = (20{,}0 \\times 10^{-3}\\text{ A}) \\times (252\\text{ s}) = 5{,}04\\text{ C}$$'
        },
        {
          titre: '3. Masse de $SO_2$',
          explication: '$$m(SO_2) = n(SO_2) \\times M(SO_2) = \\frac{5{,}04}{2 \\times 96485} \\times 64{,}06 = 2{,}612 \\times 10^{-5} \\times 64{,}06 \\approx 1{,}67 \\times 10^{-3}\\text{ g} = 1{,}67\\text{ mg}$$'
        }
      ],
      conclusion: 'La coulométrie est une méthode de dosage absolue sans étalonnage préalable de solution titrante.',
      reflexeDuCorrecteur: 'Toujours convertir les minutes en secondes ($t_e$ en s) avant d\'appliquer $Q = I \\Delta t$.'
    }
  },
  {
    id: 'exo-quinq-39-pourbaix-nickel-passivation',
    title: 'Diagramme potentiel-pH du nickel : Domaines d\'immunité, corrosion et passivation',
    matiere: 'Chimie',
    chapitreId: 'chimie-diagrammes-potentiel-ph-pourbaix',
    chapitreTitre: 'Diagrammes Potentiel-pH (Pourbaix) & Spéciation',
    filieres: ['PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Diagramme E-pH du système Nickel-Eau à 298 K',
      type: 'pourbaix-fer',
      legende: 'Frontières de séparation entre Ni(s), Ni^{2+}(aq), Ni(OH)_2(s) et NiO_2(s)',
      donneesCles: [
        { label: 'Potentiel standard', symbole: 'E^\\circ(Ni^{2+}/Ni)', valeur: '-0,25 V' },
        { label: 'Produit de solubilité', symbole: 'pK_s(Ni(OH)_2)', valeur: '15,2' },
        { label: 'Concentration de tracé', symbole: 'c_{tra}', valeur: '1,0 \\times 10^{-2} M' }
      ]
    },
    enonce: 'On étudie le diagramme $E\\text{-pH}$ du nickel à $25^\\circ\\text{C}$ pour une concentration de tracé $c_0 = 10^{-2}\\text{ mol/L}$. On donne $E^\\circ(Ni^{2+}/Ni) = -0{,}25\\text{ V}$ et $pK_s(Ni(OH)_2) = 15{,}2$.\n1. Déterminer le pH de début de précipitation de l\'hydroxyde de nickel(II) $Ni(OH)_2(s)$.\n2. Écrire la demi-équation électronique du couple $Ni^{2+}/Ni(s)$ et tracer sa frontière en fonction du pH.\n3. Écrire la demi-équation électronique du couple $Ni(OH)_2(s)/Ni(s)$ et donner l\'équation de sa frontière $E = f(\\text{pH})$.\n4. Définir les zones d\'immunité, de corrosion et de passivation du nickel.',
    hints: [
      'Le début de précipitation a lieu lorsque $[Ni^{2+}][HO^-]^2 = K_s$.',
      'Pour le couple $Ni(OH)_2/Ni$, appliquez Nernst à $Ni(OH)_2 + 2 H^+ + 2 e^- = Ni + 2 H_2 O$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. pH de précipitation',
          explication: 'À la frontière de précipitation : $[Ni^{2+}] = c_0 = 10^{-2}\\text{ M}$. Le produit de solubilité donne $[HO^-] = \\sqrt{\\frac{K_s}{c_0}} = \\sqrt{\\frac{10^{-15{,}2}}{10^{-2}}} = 10^{-6{,}6}\\text{ M}$. Comme $\\text{pH} = 14 + \\log[HO^-] = 14 - 6{,}6 = 7{,}4$.'
        },
        {
          titre: '2. Frontière $Ni^{2+}/Ni$ (milieu acide)',
          explication: 'Pour $\\text{pH} < 7{,}4$, le couple redox est $Ni^{2+} + 2 e^- = Ni(s)$. D\'après Nernst :\n$$E = E^\\circ + \\frac{0{,}059}{2} \\log[Ni^{2+}] = -0{,}25 + 0{,}0295 \\log(10^{-2}) = -0{,}25 - 0{,}059 = -0{,}309\\text{ V}$$\nLa frontière est une droite horizontale indépendante du pH.'
        },
        {
          titre: '3. Frontière $Ni(OH)_2/Ni$ (milieu basique)',
          explication: 'Pour $\\text{pH} > 7{,}4$ : $Ni(OH)_2(s) + 2 H^+ + 2 e^- = Ni(s) + 2 H_2 O$.\n$$E = E\'^\\circ + \\frac{0{,}059}{2} \\log([H^+]^2) = E\'^\\circ - 0{,}059\\;\\text{pH}$$\nPar continuité en $\\text{pH} = 7{,}4$ : $-0{,}309 = E\'^\\circ - 0{,}059 \\times 7{,}4 \\implies E\'^\\circ = +0{,}128\\text{ V}$. La pente est de $-59\\text{ mV/pH}$.'
        },
        {
          titre: '4. Zones de Pourbaix',
          explication: '- **Immunité** : Domaine de $Ni(s)$ solide à bas potentiel ($E < -0{,}31\\text{ V}$).\n- **Corrosion** : Domaine de $Ni^{2+}$ en solution acide ($E > -0{,}31\\text{ V}$ et $\\text{pH} < 7{,}4$).\n- **Passivation** : Domaine de l\'oxyde/hydroxyde protecteur solide $Ni(OH)_2$ en milieu neutre ou basique.'
        }
      ],
      conclusion: 'Le nickel résiste à l\'oxydation en milieu basique grâce à sa couche protectrice passivante de $Ni(OH)_2$.',
      reflexeDuCorrecteur: 'Vérifier la continuité du potentiel au point triple ($\\\\text{pH} = 7{,}4$).'
    }
  },
  {
    id: 'exo-quinq-40-esterification-fischer-oxygene18',
    title: 'Estérification de Fischer : Mécanisme d\'addition-élimination et traçage isotopique $^{18}O$',
    matiere: 'Chimie',
    chapitreId: 'chimie-organique-fondamentale',
    chapitreTitre: 'Chimie Organique : Stéréochimie & Réactions Fondamentales',
    filieres: ['PC', 'BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts PC / BCPST',
    dureeEstimeeMin: 20,
    enonce: 'On réalise l\'estérification de l\'acide acétique $CH_3 COOH$ par du méthanol enrichi en isotope lourd $CH_3 ^{18}OH$ en présence d\'une quantité catalytique d\'acide sulfurique concentré $H_2SO_4$.\n1. Écrire le mécanisme réactionnel détaillé complet (protonation du carbonyle, attaque nucléophile, transfert de proton, élimination de la molécule d\'eau, déprotonation finale).\n2. Quel atome d\'oxygène de l\'ester obtenu contient l\'isotope lourd $^{18}O$ ? Que devient l\'eau formée ?\n3. Pourquoi la réaction est-elle limitée à un équilibre ? Comment déplacer cet équilibre vers la formation de l\'ester (méthode de Dean-Stark ou excès de réactif) ?',
    hints: [
      'La protonation initiale active le carbone électrophile du carbonyle.',
      'L\'intermédiaire tétraédrique élimine la molécule d\'eau neutre $H_2O$ non marquée.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Mécanisme réactionnel d\'addition-élimination ($A_N + E$)',
          explication: '1. Protonation de l\'oxygène du carbonyle de l\'acide : $CH_3 - C(=O) - OH + H^+ \\rightleftharpoons CH_3 - C(=\\overset{+}{O}H) - OH$ (renforce l\'électrophilie du carbone).\n2. Attaque nucléophile du méthanol marqué : l\'oxygène de $CH_3 - {}^{18}OH$ attaque le carbone carbonyle pour former l\'intermédiaire tétraédrique protoné $CH_3 - C(OH)_2 - \\overset{+}{O}H({}^{18}O)CH_3$.\n3. Transfert rapide intramoléculaire de proton (prototropie) vers l\'un des hydroxyles : $CH_3 - C(OH)(\\overset{+}{O}H_2) - {}^{18}OCH_3$.\n4. Élimination du bon groupe partant neutre $H_2 O$ assistée par le doublet de l\'autre oxygène : formation de $CH_3 - C(=\\overset{+}{O}H) - {}^{18}OCH_3$.\n5. Déprotonation régénérant le catalyseur $H^+$ pour donner l\'ester acétate de méthyle.'
        },
        {
          titre: '2. Localisation isotopique',
          explication: 'L\'isotope lourd $^{18}O$ est intégralement retrouvé dans l\'ester (sur la liaison alkoxyde $C - {}^{18}O - CH_3$). L\'eau éliminée ne contient que de l\'oxygène 16 ordinaire. Cela prouve rigoureusement que la coupure a lieu sur la liaison acyle-oxygène de l\'acide ($R - CO \\; | \\; OH$), et non sur la liaison alkyle-oxygène de l\'alcool.'
        },
        {
          titre: '3. Déplacement de l\'équilibre',
          explication: 'Pour un alcool primaire, le rendement à l\'équilibre thermodynamique est limité à $67\\%$ (constante $K \\approx 4$). Pour forcer la réaction à 100%, on utilise soit un large excès du méthanol peu coûteux, soit l\'élimination continue de l\'eau formée par distillation hétéroazéotropique à l\'aide d\'un appareil de Dean-Stark.'
        }
      ],
      conclusion: 'Le traçage isotopique confirme sans ambiguïté le mécanisme d\'addition-élimination via un intermédiaire tétraédrique.',
      reflexeDuCorrecteur: 'Ne jamais protoner l\'oxygène du groupe $OH$ en premier : la forme la plus stable par mésomérie est la protonation sur l\'oxygène du carbonyle ($C=O$).'
    }
  },
  {
    id: 'exo-quinq-41-synthese-vanilline-protection',
    title: 'Stratégie de synthèse de la vanilline et protection/déprotection de la fonction phénol',
    matiere: 'Chimie',
    chapitreId: 'chimie-organique-avancee',
    chapitreTitre: 'Composés Carbonylés & Réactifs de Grignard',
    filieres: ['PC'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X-ENS PC',
    dureeEstimeeMin: 25,
    enonce: 'La vanilline (4-hydroxy-3-méthoxybenzaldéhyde) peut être synthétisée à partir du gaïacol (2-méthoxyphénol).\n1. Pourquoi ne peut-on pas réaliser directement une formylation de Vilsmeier-Haack ou de Friedel-Crafts sur le gaïacol sans protéger préalablement la fonction phénol $Ar-OH$ ?\n2. Proposer une méthode de protection de la fonction phénol par un groupement benzyle ($Bn = -CH_2Ph$) en utilisant le bromure de benzyle $BnBr$ en milieu basique ($K_2CO_3$, acétone).\n3. Donner la réaction de déprotection finale douce du groupement benzyle par hydrogénolyse catalytique ($H_2$, $Pd/C$) préservant la fonction aldéhyde.',
    hints: [
      'Le réactif de formylation ($POCl_3$ ou chlorure d\'acide) réagirait instantanément sur l\'atome d\'oxygène du phénol pour former un ester ou un phosphate.',
      'Le groupe benzyle s\'élimine par coupure hydrogénolytique douce de la liaison $C-O$ benzylique sous $H_2$ en formant du toluène volatil.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Nécessité de la protection',
          explication: 'Le phénol possède un hydrogène acide ($pK_a \\approx 10$) et un atome d\'oxygène nucléophile. Dans les conditions d\'une formylation ou d\'une électrophilie acide de Lewis, le réactif électrophile attaquerait préférentiellement l\'oxygène pour donner un dérivé d\'$O$-acylation plutôt que d\'induire la substitution électrophile aromatique désirée sur le cycle.'
        },
        {
          titre: '2. Protection sous forme d\'éther benzylique',
          explication: 'On déprotone le phénol par une base faible ($K_2CO_3$) dans l\'acétone à reflux pour former l\'ion phénolate. Celui-ci réalise une substitution nucléophile bimoléculaire ($S_N2$) sur le bromure de benzyle :\n$$Ar-O^- + Br-CH_2Ph \\to Ar-O-CH_2Ph + Br^-$$\nL\'éther benzylique obtenu est inerte vis-à-vis des acides forts et des réactifs de formylation ultérieurs.'
        },
        {
          titre: '3. Déprotection par hydrogénolyse sélective',
          explication: 'La liaison $Ar-O-CH_2Ph$ présente une position benzylique particulièrement réactive vis-à-vis de l\'hydrogénolyse sur catalyseur de palladium ($Pd/C$) sous pression atmosphérique modérée de $H_2$ :\n$$Ar-O-CH_2Ph + H_2 \\xrightarrow{Pd/C} Ar-OH + Ph-CH_3$$\nLa réaction libère le phénol de la vanilline et du toluène $PhCH_3$ inoffensif, sans réduire la fonction aldéhyde qui nécessite des conditions beaucoup plus dures.'
        }
      ],
      conclusion: 'La stratégie de protection par groupement benzyle suivi d\'une hydrogénolyse ménagée est un standard incontournable de la synthèse fine.',
      reflexeDuCorrecteur: 'Toujours vérifier la chimiosélectivité de la méthode de déprotection vis-à-vis des autres groupements fonctionnels de la molécule.'
    }
  },
  {
    id: 'exo-quinq-42-decomposition-eau-oxygenee-fe3',
    title: 'Cinétique de décomposition du peroxyde d\'hydrogène catalysée par les ions fer(III)',
    matiere: 'Chimie',
    chapitreId: 'chimie-cinetique-mecanismes',
    chapitreTitre: 'Cinétique Chimique & Mécanismes Réactionnels',
    filieres: ['PC', 'BCPST', 'PCSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'CCINP PC / BCPST',
    dureeEstimeeMin: 20,
    enonce: 'La dismutation du peroxyde d\'hydrogène $2 H_2 O_2 \\to 2 H_2 O + O_2(g)$ est infiniment lente à température ambiante, mais fortement accélérée par l\'ajout d\'une trace de chlorure de fer(III) $Fe^{3+}$. On suit la cinétique par mesure du volume de dioxygène dégagé $V_{O_2}(t)$ à pression constante.\n1. Écrire le cycle redox catalytique mettant en jeu les couples $Fe^{3+}/Fe^{2+}$ et $H_2O_2/H_2O$ puis $O_2/H_2O_2$.\n2. On observe que la réaction est d\'ordre 1 par rapport à $[H_2O_2]$. Établir l\'expression de $[H_2O_2](t)$ en fonction de $[H_2O_2]_0$ et de la constante apparente $k_{app}$.\n3. Exprimer le volume de gaz $V_{O_2}(t)$ en fonction de $V_\\infty = V_{O_2}(t \\to +\\infty)$. Quelle régression linéaire permet de déterminer $k_{app}$ ?',
    hints: [
      'Pour un ordre 1, $\\frac{\\mathrm{d}[H_2O_2]}{\\mathrm{d}t} = -k_{app} [H_2O_2] \\implies [H_2O_2](t) = [H_2O_2]_0 e^{-k_{app} t}$.',
      'Le nombre de moles de $O_2$ formé est la moitié du peroxyde d\'hydrogène consommé : $n_{O_2}(t) = \\frac{1}{2}([H_2O_2]_0 - [H_2O_2](t)) V_{sol}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Cycle catalytique homogène',
          explication: '1. Réduction du catalyseur : $2 Fe^{3+} + H_2 O_2 \\to 2 Fe^{2+} + O_2(g) + 2 H^+$.\n2. Réoxydation du catalyseur : $2 Fe^{2+} + H_2 O_2 + 2 H^+ \\to 2 Fe^{3+} + 2 H_2 O$.\nLa somme de ces deux étapes élémentaires régénère exactement le catalyseur $Fe^{3+}$ et donne la réaction globale bilan de dismutation : $2 H_2 O_2 \\to 2 H_2 O + O_2$.'
        },
        {
          titre: '2. Loi cinétique d\'ordre 1',
          explication: 'L\'intégration de $-\\frac{\\mathrm{d}[H_2O_2]}{\\mathrm{d}t} = k_{app} [H_2O_2]$ donne immédiatement :\n$$[H_2O_2](t) = [H_2O_2]_0 e^{-k_{app} t}$$'
        },
        {
          titre: '3. Suivi manométrique et linéarisation',
          explication: 'Comme $V_{O_2}(t) \\propto n_{O_2}(t) = \\frac{V_{sol}}{2} ([H_2O_2]_0 - [H_2O_2](t))$, le volume final asymptotique est $V_\\infty = \\frac{V_{sol}}{2}[H_2O_2]_0$. Il en résulte :\n$$V_\\infty - V_{O_2}(t) = V_\\infty e^{-k_{app} t} \\iff \\ln\\left( \\frac{V_\\infty}{V_\\infty - V_{O_2}(t)} \\right) = k_{app} t$$\nLe tracé de $\\ln(V_\\infty - V_{O_2}(t))$ en fonction du temps $t$ est une droite affine de pente $-k_{app}$, confirmant l\'ordre 1.'
        }
      ],
      conclusion: 'La détermination de $V_\\infty$ permet de suivre une réaction cinétique sans prélever d\'échantillon liquide.',
      reflexeDuCorrecteur: 'Pour une réaction produisant un gaz, toujours relier l\'avancement à l\'écart à l\'infini $V_\\infty - V(t)$.'
    }
  },

  // ==========================================
  // SCIENCES DE L'INGENIEUR (43 à 46)
  // ==========================================
  {
    id: 'exo-quinq-43-correcteur-pid-axe-lineaire',
    title: 'Correcteur PID sur un axe linéaire asservi : Précision, stabilité et temps de montée',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-stabilite-correcteurs-pid',
    chapitreTitre: 'Stabilité & Synthèse des Correcteurs (P, PI, Avance de Phase)',
    filieres: ['PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec PSI',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Schéma-Bloc de l\'Asservissement avec Correcteur PID en Forme Parallèle',
      type: 'schema-bloc-asservissement',
      legende: 'Boucle fermée à retour unitaire régulant la position X(p) soumise à une force perturbatrice',
      donneesCles: [
        { label: 'Gain du procédé', symbole: 'K_p', valeur: '2,5 m/(V.s)' },
        { label: 'Gain proportionnel', symbole: 'K_c', valeur: '4,0' },
        { label: 'Constante d\'intégration', symbole: 'T_i', valeur: '0,15 s' }
      ]
    },
    enonce: 'On considère l\'asservissement en position d\'un chariot guidé sur rail modélisé par la fonction de transfert en boucle ouverte $H(p) = \\frac{K_0}{p(1 + \\tau p)}$ avec $K_0 = 10\\text{ s}^{-1}$ et $\\tau = 0{,}20\\text{ s}$. Le correcteur PID implanté a pour fonction de transfert $C(p) = K_p \\left( 1 + \\frac{1}{T_i p} + T_d p \\right)$.\n1. Préciser le rôle de chacune des trois actions : Proportionnelle, Intégrale, Dérivée.\n2. Quelle est la classe du système non corrigé ? Quelle est l\'erreur statique en réponse à un échelon de consigne de position sans action intégrale ?\n3. Comment l\'action intégrale modifie-t-elle l\'erreur vis-à-vis d\'une perturbation constante de force de frottement sec ?\n4. Régler les paramètres $T_i$ et $T_d$ par la méthode de compensation de pôles pour transformer la boucle ouverte en un système du second ordre bien amorti.',
    hints: [
      'Le système possède déjà un intégrateur naturel (terme $1/p$). Sa classe est 1.',
      'Pour compenser le pôle $\\tau$, choisissez les zéros du correcteur pour simplifier $(1 + \\tau p)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Rôles respectifs des actions PID',
          explication: '- **Action Proportionnelle ($K_p$)** : augmente le gain de boucle, accélère la réponse transitoire mais peut dégrader la marge de phase.\n- **Action Intégrale ($T_i$)** : ajoute un pôle en zéro, augmentant la classe du système pour annuler rigoureusement l\'erreur permanente vis-à-vis des perturbations constantes.\n- **Action Dérivée ($T_d$)** : anticipe l\'erreur future, introduit une avance de phase qui amortit les oscillations et élargit la bande passante.'
        },
        {
          titre: '2. Précision du système non corrigé',
          explication: 'La boucle ouverte $H(p) = \\frac{K_0}{p(1+\\tau p)}$ comporte un pôle à l\'origine ($p=0$), donc le système est de **classe 1**.\n- Réponse à un échelon de position : l\'erreur statique de position est strictement nulle $\\varepsilon_p = 0$.\n- Réponse à une rampe : l\'erreur de traînage (vitesse) est finie : $\\varepsilon_v = \\frac{1}{K_0} = 0{,}10\\text{ s}$.'
        },
        {
          titre: '3. Rejet de perturbation constante',
          explication: 'Une perturbation de charge appliquée en aval du moteur se traduit par une entrée parasite sur le procédé. Grâce au pôle pur de l\'action intégrale situé avant le point d\'injection de la perturbation, le gain statique amont tend vers l\'infini : l\'erreur permanente causée par un effort résistant constant est intégralement annulée.'
        },
        {
          titre: '4. Réglage par compensation de pôles',
          explication: 'On factorise la fonction du correcteur sous forme série $C(p) = K\'_p \\frac{(1 + T_1 p)(1 + T_2 p)}{T_1 p}$. En choisissant $T_2 = \\tau = 0{,}20\\text{ s}$, le zéro du correcteur simplifie exactement le pôle stable du procédé. La FTBO corrigée devient purement du second ordre intégrateur simple sans pôle parasite : $FTBO(p) = \\frac{K\'_p K_0}{T_1 p^2}$.'
        }
      ],
      conclusion: 'Le correcteur PID permet d\'ajuster indépendamment la précision statique, l\'amortissement dynamique et la rapidité.',
      reflexeDuCorrecteur: 'Toujours associer l\'action intégrale au rejet sans erreur des perturbations statiques constantes.'
    }
  },
  {
    id: 'exo-quinq-44-marge-phase-avance-phase',
    title: 'Synthèse d\'un correcteur à avance de phase et garantie de la marge de phase $\\Delta \\phi \\ge 45^\\circ$',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-stabilite-correcteurs-pid',
    chapitreTitre: 'Stabilité & Synthèse des Correcteurs (P, PI, Avance de Phase)',
    filieres: ['PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PSI',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Diagramme de Bode de la Boucle Ouverte Non Corrigée',
      type: 'diagramme-bode',
      legende: 'Évolution du gain et de la phase montrant une marge de phase insuffisante de 12 degrés',
      donneesCles: [
        { label: 'Pulsation de coupure', symbole: '\\omega_{0dB}', valeur: '15 rad/s' },
        { label: 'Marge initiale', symbole: '\\Delta \\phi_{init}', valeur: '12°' },
        { label: 'Marge visée', symbole: '\\Delta \\phi_{cible}', valeur: '50°' }
      ]
    },
    enonce: 'Un asservissement angulaire possède une FTBO non corrigée $H(p) = \\frac{40}{p(1 + 0{,}05 p)(1 + 0{,}01 p)}$.\n1. Déterminer la pulsation de coupure à 0 dB $\\omega_{0dB}$ et la marge de phase initiale du système non corrigé. Conclure sur sa stabilité.\n2. On utilise un correcteur à avance de phase $C(p) = \\frac{1 + a T p}{1 + T p}$ avec $a > 1$.\n3. Exprimer l\'apport maximal de phase $\\phi_m$ en fonction du coefficient $a$, ainsi que la pulsation associée $\\omega_m$.\n4. Dimensionner $a$ et $T$ pour garantir une marge de phase finale d\'au moins $\\Delta \\phi = 50^\\circ$.',
    hints: [
      'L\'apport maximal de phase vérifie $\\sin(\\phi_m) = \\frac{a-1}{a+1}$ à la pulsation $\\omega_m = 1/(T\\sqrt{a})$.',
      'Le gain apporté à cette pulsation vaut $+10 \\log_{10}(a)$ dB : tenez compte du décalage de $\\omega_{0dB}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Marge de phase initiale',
          explication: 'À la pulsation $\\omega = 15\\text{ rad/s}$ : $|H(j\\omega)| \\approx 1$ ($0\\text{ dB}$). La phase vaut $\\phi(15) = -90^\\circ - \\arctan(0{,}05 \\times 15) - \\arctan(0{,}01 \\times 15) = -90^\\circ - 36{,}9^\\circ - 8{,}5^\\circ = -135{,}4^\\circ$. La marge de phase initiale est $\\Delta \\phi = 180^\\circ - 135{,}4^\\circ = 44{,}6^\\circ$, insuffisante pour garantir un dépassement inférieur à 5%.'
        },
        {
          titre: '2. Formule de l\'apport maximal de phase',
          explication: 'L\'argument du correcteur vaut $\\phi_C(\\omega) = \\arctan(a T \\omega) - \\arctan(T \\omega)$. Sa dérivée s\'annule à la moyenne géométrique des deux pulsations de cassure :\n$$\\omega_m = \\frac{1}{T \\sqrt{a}} \\quad \\text{et} \\quad \\sin(\\phi_m) = \\frac{a - 1}{a + 1}$$'
        },
        {
          titre: '3. Dimensionnement du paramètre $a$',
          explication: 'On souhaite un apport de phase $\\phi_m \\approx 40^\\circ$ pour compenser le gain du filtre. Alors $\\sin(40^\\circ) \\approx 0{,}643 = \\frac{a-1}{a+1} \\implies a = \\frac{1 + 0{,}643}{1 - 0{,}643} \\approx 4{,}6$. On choisit $a = 4{,}5$.'
        },
        {
          titre: '4. Réglage de la constante de temps $T$',
          explication: 'Au point $\\omega_m$, le correcteur introduit un gain de $+10 \\log_{10}(a) = 10 \\log_{10}(4{,}5) \\approx +6{,}5\\text{ dB}$. La nouvelle pulsation de coupure est celle où la FTBO originale valait $-6{,}5\\text{ dB}$, soit $\\omega\'_{0dB} \\approx 22\\text{ rad/s}$. On cale $\\omega_m = 22\\text{ rad/s}$ :\n$$T = \\frac{1}{\\omega_m \\sqrt{a}} = \\frac{1}{22 \\times \\sqrt{4{,}5}} = \\frac{1}{22 \\times 2{,}12} \\approx 0{,}021\\text{ s}$$'
        }
      ],
      conclusion: 'Le correcteur à avance de phase remonte la marge de phase à plus de $50^\\circ$ tout en augmentant la bande passante (rapidité accrue).',
      reflexeDuCorrecteur: 'Ne jamais oublier que l\'avance de phase augmente le gain de $+10 \\log_{10}(a)$ dB : il faut caler $\\omega_m$ sur la nouvelle pulsation de coupure décalée.'
    }
  },
  {
    id: 'exo-quinq-45-rdm-fleche-poutre-bi-appuyee',
    title: 'Résistance des Matériaux : Flèche et contrainte maximale d\'une poutre bi-appuyée',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-rdm-poutres-sollicitations',
    chapitreTitre: 'Résistance des Matériaux : Torseur de Cohésion & Sollicitations Simples',
    filieres: ['PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'CCINP PSI',
    dureeEstimeeMin: 25,
    enonce: 'Une poutre rectiligne homogène de portée $L$, de section rectangulaire constante de largeur $b$ et de hauteur $h$, de module de Young $E$, repose sur deux appuis simples en ses extrémités $A(x=0)$ et $B(x=L)$. Elle supporte une charge linéique uniforme descendante $q$ (en $\\text{N/m}$).\n1. Déterminer les actions de liaison aux appuis $A$ et $B$.\n2. Par la méthode de la coupure, déterminer l\'effort tranchant $T_y(x)$ et le moment fléchissant $M_{fz}(x)$ le long de la poutre.\n3. Intégrer l\'équation différentielle de la déformée $E I_{Gz} y\'\'(x) = M_{fz}(x)$ avec les conditions aux limites $y(0) = 0$ et $y(L) = 0$.\n4. En déduire la flèche maximale en milieu de travée $f_{max} = |y(L/2)|$ ainsi que la contrainte normale maximale de traction $\\sigma_{max}$.',
    hints: [
      'Par symétrie, les réactions d\'appui valent $R_A = R_B = \\frac{q L}{2}$.',
      'Le moment quadratique de la section rectangulaire est $I_{Gz} = \\frac{b h^3}{12}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Réactions d\'appui',
          explication: 'Par symétrie évidente du chargement symétrique : $R_A = R_B = \\frac{q L}{2}\\vec{y}$.'
        },
        {
          titre: '2. Torseur de cohésion',
          explication: 'En isolant le tronçon $[0, x]$ situé à gauche de la coupure :\n- Effort tranchant : $T_y(x) = R_A - q x = \\frac{q L}{2} - q x = q \\left( \\frac{L}{2} - x \\right)$.\n- Moment fléchissant : $M_{fz}(x) = R_A x - q x \\frac{x}{2} = \\frac{q L x}{2} - \\frac{q x^2}{2} = \\frac{q x (L - x)}{2}$. Le moment est maximal en $x = L/2$ où $M_{max} = \\frac{q L^2}{8}$.'
        },
        {
          titre: '3. Équation de la déformée',
          explication: 'L\'équation différentielle s\'écrit $E I_{Gz} y\'\'(x) = M_{fz}(x) = \\frac{q L x}{2} - \\frac{q x^2}{2}$.\nPremière intégration : $E I_{Gz} y\'(x) = \\frac{q L x^2}{4} - \\frac{q x^3}{6} + C_1$.\nDeuxième intégration : $E I_{Gz} y(x) = \\frac{q L x^3}{12} - \\frac{q x^4}{24} + C_1 x + C_2$.\nComme $y(0) = 0$, $C_2 = 0$. Comme $y(L) = 0$, $\\frac{q L^4}{12} - \\frac{q L^4}{24} + C_1 L = 0 \\implies C_1 = -\\frac{q L^3}{24}$.\nLa déformée s\'écrit donc :\n$$y(x) = -\\frac{q x}{24 E I_{Gz}} (L^3 - 2 L x^2 + x^3)$$'
        },
        {
          titre: '4. Flèche et contrainte maximales',
          explication: '- Flèche maximale en $x = L/2$ :\n$$f_{max} = |y(L/2)| = \\frac{q (L/2)}{24 E I_{Gz}} \\left( L^3 - \\frac{L^3}{2} + \\frac{L^3}{8} \\right) = \\frac{5 q L^4}{384 E I_{Gz}}$$\n- Contrainte normale maximale de Navier sur la fibre inférieure la plus tendue ($y = -h/2$) :\n$$\\sigma_{max} = \\frac{M_{max}}{I_{Gz}} \\frac{h}{2} = \\frac{q L^2 / 8}{\\frac{b h^3}{12}} \\frac{h}{2} = \\frac{3 q L^2}{4 b h^2}$$'
        }
      ],
      conclusion: 'La formule $f_{max} = \\frac{5 q L^4}{384 E I_{Gz}}$ est l\'un des résultats les plus célèbres et récurrents de la résistance des matériaux.',
      reflexeDuCorrecteur: 'Vérifier la pente nulle $y\'(L/2) = 0$ en milieu de travée par symétrie.'
    }
  },
  {
    id: 'exo-quinq-46-fermeture-cinematique-robot-delta',
    title: 'Fermeture géométrique et cinématique d\'un mécanisme à boucles fermées',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-meca-statique-torseurs',
    chapitreTitre: 'Statique des Solides & Torseurs d\'Actions Mécaniques',
    filieres: ['PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale PSI',
    dureeEstimeeMin: 20,
    enonce: 'On étudie la chaîne cinématique fermée d\'un parallélogramme articulé de robot manipulateur constitué de 4 solides reliés par 4 liaisons pivots d\'axes parallèles $(O, \\vec{z})$.\n1. Écrire la relation de fermeture géométrique vectorielle sur la boucle fermée $O A B C O$.\n2. Par dérivation temporelle, établir la relation de fermeture cinématique vectorielle reliant les vitesses de rotation $\\dot{\\theta}_i$.\n3. Écrire la fermeture cinématique en termes de torseurs cinématiques : $\\{V_{1/0}\\} + \\{V_{2/1}\\} + \\{V_{3/2}\\} + \\{V_{0/3}\\} = \\{0\\}$.\n4. Déterminer le degré d\'hyperstatisme $h$ de la boucle fermée à l\'aide de la formule de Tchebychev-Grübler.',
    hints: [
      'Un parallélogramme plan possède des liaisons à axes parallèles : étude 2D dans le plan $(x, y)$.',
      'Le nombre de mobilités utiles est $m = 1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Fermeture vectorielle',
          explication: 'Sur le contour fermé : $\\vec{OA} + \\vec{AB} + \\vec{BC} + \\vec{CO} = \\vec{0}$. En projetant sur les axes du repère fixe, cela fournit 2 équations scalaires de liaison géométrique.'
        },
        {
          titre: '2. Fermeture cinématique vectorielle',
          explication: 'En dérivant par rapport au temps dans le repère galiléen $R_0$ :\n$$\\left(\\frac{\\mathrm{d}\\vec{OA}}{\\mathrm{d}t}\\right)_{R_0} + \\left(\\frac{\\mathrm{d}\\vec{AB}}{\\mathrm{d}t}\\right)_{R_0} + \\left(\\frac{\\mathrm{d}\\vec{BC}}{\\mathrm{d}t}\\right)_{R_0} + \\left(\\frac{\\mathrm{d}\\vec{CO}}{\\mathrm{d}t}\\right)_{R_0} = \\vec{0}$$'
        },
        {
          titre: '3. Composition des torseurs distributeurs',
          explication: 'En tout point de l\'espace, la composition des torseurs cinématiques le long de la boucle fermée est identiquement nulle :\n$$\\{V_{1/0}\\} + \\{V_{2/1}\\} + \\{V_{3/2}\\} + \\{V_{0/3}\\} = \\{0\\}$$\nCe torseur nul donne 3 équations cinématiques indépendantes dans le cas plan.'
        },
        {
          titre: '4. Degré d\'hyperstatisme',
          explication: 'Chaque pivot plan élimine 2 degrés de liberté ($N_c = 4 \\times 2 = 8$). Pour 3 solides mobiles ($p=3$), la formule de Grübler plane donne $h = N_c - 3 p + m = 8 - 3 \\times 3 + 1 = 8 - 9 + 1 = 0$. Le parallélogramme articulé modélisé en liaisons planes parfaites est isostatique ($h=0$). En spatial, des rotules sont insérées pour éliminer les contraintes d\'hyperstatisme d\'alignement.'
        }
      ],
      conclusion: 'La fermeture cinématique par torseurs est la méthode systématique pour calculer les lois d\'entrée-sortie de tous les robots polyarticulés.',
      reflexeDuCorrecteur: 'Toujours exprimer tous les moments des torseurs au MÊME point de calcul avant de faire la somme.'
    }
  },

  // ==========================================
  // INFORMATIQUE (47 à 50)
  // ==========================================
  {
    id: 'exo-quinq-47-tri-topologique-dfs-cycle',
    title: 'Tri topologique d\'un DAG et détection de cycle orienté par parcours en profondeur DFS',
    matiere: 'Informatique',
    chapitreId: 'info-graphes-parcours-arbres-couvrants',
    chapitreTitre: 'Informatique : Théorie des Graphes, Parcours BFS/DFS, Tri Topologique & Arbres Couvrants',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale MP / MPI',
    dureeEstimeeMin: 25,
    enonce: 'Soit $G = (V, E)$ un graphe orienté représenté par listes d\'adjacence. On souhaite déterminer s\'il est sans cycle (DAG), et le cas échéant, calculer un tri topologique.\n1. Pourquoi un graphe orienté comportant un cycle ne peut-il pas admettre de tri topologique ?\n2. On colorie les sommets en trois états lors du DFS : BLANC (non visité), GRIS (en cours de traitement dans la pile d\'appels récursifs), NOIR (visite terminée). Montrer que $G$ contient un cycle orienté si et seulement si le DFS rencontre un arc $(u, v)$ avec $v$ GRIS (arc arrière).\n3. Écrire la fonction Python `tri_topologique(graph)` qui renvoie la liste ordonnée des sommets ou lève une exception si un cycle est détecté.\n4. Donner la complexité temporelle et spatiale de l\'algorithme.',
    hints: [
      'Si un sommet $v$ est GRIS, il est un ancêtre de $u$ dans l\'arbre de parcours : l\'arc $(u, v)$ boucle sur cet ancêtre.',
      'L\'ordre topologique s\'obtient en insérant chaque sommet dans une liste à la toute fin de son traitement (quand il devient NOIR), puis en inversant la liste.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Impossibilité pour un graphe cyclique',
          explication: 'Si $G$ contient un cycle $v_1 \\to v_2 \\to \\dots \\to v_k \\to v_1$, tout ordre topologique $\\sigma$ devrait vérifier $\\sigma(v_1) < \\sigma(v_2) < \\dots < \\sigma(v_k) < \\sigma(v_1)$, ce qui est absurde par transitivité de l\'ordre strict.'
        },
        {
          titre: '2. Détection de cycle par sommets GRIS',
          explication: 'Un sommet est marqué GRIS pendant toute la durée où son sous-arbre DFS est en cours d\'exploration. Si on examine un arc $(u, v)$ et que $v$ est déjà GRIS, cela signifie que $v$ est un ancêtre de $u$ dans la branche active. Le chemin $v \\to^* u$ combiné à l\'arc $u \\to v$ forme un cycle orienté fermé.'
        },
        {
          titre: '3. Implémentation en Python',
          explication: '```python\ndef tri_topologique(graph: dict[int, list[int]]) -> list[int]:\n    # 0 = BLANC, 1 = GRIS, 2 = NOIR\n    etat = {u: 0 for u in graph}\n    ordre = []\n\n    def dfs(u):\n        etat[u] = 1 # GRIS\n        for v in graph[u]:\n            if etat[v] == 1:\n                raise ValueError(f"Cycle détecté via l\'arc ({u}, {v})")\n            elif etat[v] == 0:\n                dfs(v)\n        etat[u] = 2 # NOIR\n        ordre.append(u)\n\n    for u in graph:\n        if etat[u] == 0:\n            dfs(u)\n            \n    return ordre[::-1] # Ordre inversé\n```'
        },
        {
          titre: '4. Complexité',
          explication: 'Chaque sommet est coloré une seule fois en GRIS puis en NOIR. Chaque arête est parcourue une seule fois lors de la boucle `for v in graph[u]`. La complexité temporelle est $\\mathcal{O}(|V| + |E|)$ et l\'espace mémoire est $\\mathcal{O}(|V|)$ pour la pile de récursion et le dictionnaire d\'états.'
        }
      ],
      conclusion: 'Le tri topologique par date de fin décroissante de DFS est optimal en temps linéaire.',
      reflexeDuCorrecteur: 'Ne jamais oublier d\'inverser la liste `ordre[::-1]` à la fin du DFS pour obtenir l\'ordre direct.'
    }
  },
  {
    id: 'exo-quinq-48-kruskal-union-find-optimisations',
    title: 'Algorithme de Kruskal et structure Union-Find avec compression de chemin et rang',
    matiere: 'Informatique',
    chapitreId: 'info-graphes-parcours-arbres-couvrants',
    chapitreTitre: 'Informatique : Théorie des Graphes, Parcours BFS/DFS, Tri Topologique & Arbres Couvrants',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / MPI',
    dureeEstimeeMin: 25,
    enonce: 'On considère l\'algorithme de Kruskal pour la recherche d\'un arbre couvrant de poids minimal (ACPM) dans un graphe connexe non orienté pondéré $G = (V, E)$.\n1. Énoncer le principe glouton de Kruskal et la condition d\'ajout d\'une arête.\n2. Décrire la structure de données des classes disjointes (Union-Find) et expliquer le rôle des deux optimisations fondamentales :\n   - L\'union par rang (ou par taille) ;\n   - La compression de chemin dans l\'opération `find`.\n3. Écrire une classe Python `UnionFind` complète et la fonction `kruskal(n, aretes)`.\n4. Donner la complexité de chaque opération avec la fonction inverse d\'Ackermann $\\alpha(n)$.',
    hints: [
      'Dans `find(x)`, faites pointer directement le parent de $x$ vers la racine trouvée : `parent[x] = find(parent[x])`.',
      'Le tri initial des arêtes domine le temps global : $\\mathcal{O}(|E| \\log |E|)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Principe de Kruskal',
          explication: 'On commence avec une forêt de $|V|$ arbres isolés. On trie toutes les arêtes de $E$ par poids croissant. On parcourt les arêtes dans cet ordre : si l\'arête $(u, v)$ relie deux composantes connexes distinctes, on l\'ajoute à l\'arbre et on fusionne les deux composantes ; sinon, on la rejette pour éviter de former un cycle.'
        },
        {
          titre: '2. Optimisations d\'Union-Find',
          explication: '- **Union par rang** : on rattache toujours l\'arbre de rang inférieur sous la racine de l\'arbre de rang supérieur. Cela garantit que la profondeur d\'un arbre de taille $k$ reste bornée par $\\log_2(k)$.\n- **Compression de chemin** : lors d\'un appel à `find(x)`, on met à jour le pointeur parent de tous les nœuds traversés pour qu\'ils pointent directement vers la racine représentante.'
        },
        {
          titre: '3. Code Python',
          explication: '```python\nclass UnionFind:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.rang = [0] * n\n\n    def find(self, i: int) -> int:\n        if self.parent[i] != i:\n            self.parent[i] = self.find(self.parent[i]) # Compression\n        return self.parent[i]\n\n    def union(self, i: int, j: int) -> bool:\n        root_i = self.find(i)\n        root_j = self.find(j)\n        if root_i == root_j:\n            return False\n        # Union par rang\n        if self.rang[root_i] < self.rang[root_j]:\n            self.parent[root_i] = root_j\n        elif self.rang[root_i] > self.rang[root_j]:\n            self.parent[root_j] = root_i\n        else:\n            self.parent[root_j] = root_i\n            self.rang[root_i] += 1\n        return True\n\ndef kruskal(n: int, aretes: list[tuple[float, int, int]]):\n    # aretes = liste de (poids, u, v)\n    aretes.sort()\n    uf = UnionFind(n)\n    acpm = []\n    poids_total = 0.0\n    for poids, u, v in aretes:\n        if uf.union(u, v):\n            acpm.append((u, v, poids))\n            poids_total += poids\n            if len(acpm) == n - 1:\n                break\n    return acpm, poids_total\n```'
        },
        {
          titre: '4. Complexité théorique',
          explication: 'Avec les deux heuristiques, une séquence de $m$ opérations sur $n$ éléments prend un temps $\\mathcal{O}(m \\alpha(n))$ où $\\alpha$ est l\'inverse de la fonction d\'Ackermann (croissance si lente que $\\alpha(n) \\le 4$ pour tout $n \\le 10^{80}$). Le tri des arêtes en $\\mathcal{O}(|E| \\log |E|)$ est donc le facteur limitant.'
        }
      ],
      conclusion: 'Kruskal avec Union-Find est quasi-linéaire par rapport au tri initial des arêtes.',
      reflexeDuCorrecteur: 'Arrêter la boucle dès que l\'arbre contient exactement $n-1$ arêtes pour économiser des tests superflus.'
    }
  },
  {
    id: 'exo-quinq-49-bfs-plus-court-chemin-grille',
    title: 'Parcours en largeur BFS et plus court chemin dans un labyrinthe représenté par une grille',
    matiere: 'Informatique',
    chapitreId: 'info-graphes-parcours-arbres-couvrants',
    chapitreTitre: 'Informatique : Théorie des Graphes, Parcours BFS/DFS, Tri Topologique & Arbres Couvrants',
    filieres: ['MP', 'MPI', 'PSI', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'CCINP MP / MPI',
    dureeEstimeeMin: 20,
    enonce: 'On modélise un labyrinthe par une matrice de dimensions $H \\times W$ où `0` représente une case libre et `1` un mur infranchissable. On peut se déplacer dans les 4 directions cardinales (Haut, Bas, Gauche, Droite) avec un coût unitaire de 1 par pas.\n1. Pourquoi l\'algorithme de Dijkstra est-il sous-optimal par rapport à un simple BFS pour résoudre ce problème ?\n2. Écrire une fonction Python `plus_court_chemin(grille, depart, arrivee)` qui renvoie la distance minimale ainsi que la liste des coordonnées formant le chemin optimal.\n3. Pourquoi faut-il utiliser `collections.deque` plutôt qu\'une liste Python classique pour gérer la file FIFO ?',
    hints: [
      'La méthode `pop(0)` sur une liste Python ordinaire s\'exécute en $\\mathcal{O}(n)$ car elle décale tous les éléments.',
      'Pour reconstruire le chemin, stockez un dictionnaire `parent[(r, c)]` contenant la case précédente.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Supériorité du BFS sur arêtes unitaires',
          explication: 'Dijkstra utilise une file de priorité (tas binaire) avec un surcoût logarithmique $\\mathcal{O}(\\log V)$ par extraction. Quand tous les poids d\'arêtes sont égaux à 1, la file FIFO d\'un BFS garantit naturellement que les sommets sont extraits par distance strictement croissante, permettant une complexité optimale linéaire $\\mathcal{O}(V + E) = \\mathcal{O}(H \\cdot W)$.'
        },
        {
          titre: '2. Code Python avec reconstruction du chemin',
          explication: '```python\nfrom collections import deque\n\ndef plus_court_chemin(grille: list[list[int]], depart: tuple[int, int], arrivee: tuple[int, int]):\n    H, W = len(grille), len(grille[0])\n    if grille[depart[0]][depart[1]] == 1 or grille[arrivee[0]][arrivee[1]] == 1:\n        return None\n\n    file = deque([depart])\n    parent = {depart: None}\n    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]\n\n    while file:\n        curr = file.popleft()\n        if curr == arrivee:\n            # Reconstruction du chemin\n            chemin = []\n            p = arrivee\n            while p is not None:\n                chemin.append(p)\n                p = parent[p]\n            return len(chemin) - 1, chemin[::-1]\n\n        r, c = curr\n        for dr, dc in directions:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < H and 0 <= nc < W and grille[nr][nc] == 0:\n                if (nr, nc) not in parent:\n                    parent[(nr, nc)] = (r, c)\n                    file.append((nr, nc))\n    return None # Aucun chemin trouvé\n```'
        },
        {
          titre: '3. Efficacité de `collections.deque`',
          explication: 'Sur une liste Python `list`, `pop(0)` nécessite de décaler en mémoire les $n-1$ éléments restants, prenant un temps $\\mathcal{O}(n)$, ce qui ferait exploser la complexité totale en $\\mathcal{O}((HW)^2)$. `deque` implémente une liste doublement chaînée de blocs mémoires où `popleft()` et `append()` s\'exécutent en temps garanti $\\mathcal{O}(1)$.'
        }
      ],
      conclusion: 'Le BFS sur grille est le modèle fondamental des algorithmes d\'exploration spatiale (jeux vidéo, robotique mobile).',
      reflexeDuCorrecteur: 'Toujours enregistrer le nœud dans `parent` ou `visited` au moment du `file.append()` (et non à l\'extraction `popleft()`) pour éviter les doublons dans la file.'
    }
  },
  {
    id: 'exo-quinq-50-construction-thompson-regex-automate',
    title: 'Algorithme de Thompson : Conversion systématique d\'une expression rationnelle en $\\varepsilon$-automate',
    matiere: 'Informatique',
    chapitreId: 'info-automates-expressions-regulieres',
    chapitreTitre: 'Informatique Théorique : Automates Finis & Langages Réguliers',
    filieres: ['MPI', 'MP'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X-ENS MPI',
    dureeEstimeeMin: 30,
    enonce: 'On s\'intéresse à la construction de Thompson qui traduit récursivement une expression régulière (regex) en un automate fini non déterministe avec $\\varepsilon$-transitions ($\\varepsilon$-NFA) possédant un unique état initial et un unique état final distinct sans transition entrante/sortante.\n1. Décrire les automates de base pour le caractère unique $a \\in \\Sigma$ et le mot vide $\\varepsilon$.\n2. Décrire la construction pour les trois opérateurs rationnels fondamentaux :\n   - L\'union (choix) : $e_1 \\mid e_2$ ;\n   - La concaténation : $e_1 \\cdot e_2$ ;\n   - L\'étoile de Kleene : $e_1^*$.\n3. Montrer que pour une regex comportant $m$ symboles, l\'automate de Thompson obtenu possède au plus $2m$ états et $4m$ transitions.\n4. Pourquoi cette construction garantit-elle une vérification de motif (grep) en temps $\\mathcal{O}(m \\cdot n)$ pour un texte de longueur $n$, évitant tout backtracking exponentiel ?',
    hints: [
      'Pour l\'étoile $e_1^*$, créez un nouvel état initial et un nouvel état final reliés par une $\\varepsilon$-transition directe (mot vide) et une $\\varepsilon$-transition de bouclage arrière.',
      'Le non-déterminisme d\'un $\\varepsilon$-NFA se simule pas à pas en maintenant l\'ensemble des états actifs actuels (taille maximale $\\le 2m$).'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Briques de base',
          explication: '- Lettre $a$ : état initial $i$, état final $f$, transition $i \\xrightarrow{a} f$ (2 états, 1 transition).\n- Mot vide $\\varepsilon$ : $i \\xrightarrow{\\varepsilon} f$ (2 états, 1 transition).'
        },
        {
          titre: '2. Opérations inductives de Thompson',
          explication: '- **Concaténation $e_1 \\cdot e_2$** : on fusionne l\'état final de l\'automate de $e_1$ avec l\'état initial de $e_2$ (ou on pose une $\\varepsilon$-transition).\n- **Union $e_1 \\mid e_2$** : on crée un nouvel état initial $I$ qui bifurque par deux $\\varepsilon$-transitions vers les états initiaux respectifs de $e_1$ et $e_2$, et les deux états finaux convergent par deux $\\varepsilon$-transitions vers un unique nouvel état final $F$.\n- **Étoile de Kleene $e_1^*$** : on crée un état initial $I$ et un état final $F$. On ajoute les $\\varepsilon$-transitions : $I \\xrightarrow{\\varepsilon} i_1$ (démarrer le motif), $f_1 \\xrightarrow{\\varepsilon} i_1$ (boucler pour répéter), $f_1 \\xrightarrow{\\varepsilon} F$ (terminer), et $I \\xrightarrow{\\varepsilon} F$ (accepter 0 répétition).'
        },
        {
          titre: '3. Taille de l\'automate',
          explication: 'Chaque opérateur ajoute au maximum 2 nouveaux états et 4 nouvelles transitions. Par récurrence structurelle, pour une expression de taille $m$, le nombre d\'états est $V \\le 2m$ et le nombre de transitions est $E \\le 4m$. L\'automate est linéaire en espace.'
        },
        {
          titre: '4. Éradication du backtracking exponentiel',
          explication: 'Les moteurs de regex naïfs à base de backtracking (Perl, Python `re`) explosent en temps exponentiel $\\mathcal{O}(2^n)$ sur des regex ambiguës comme `(a?)^n a^n`. En simulant l\'automate de Thompson à l\'aide d\'un ensemble d\'états actifs (calcul de la $\\varepsilon$-fermeture en $\\mathcal{O}(E)$ par caractère lu), le temps d\'exécution pour traiter un texte de longueur $n$ est strictement borné par $\\mathcal{O}(m \\cdot n)$, principe fondateur de l\'outil Unix `grep` de Ken Thompson.'
        }
      ],
      conclusion: 'La construction de Thompson permet d\'exécuter toute recherche d\'expression régulière en temps rigoureusement linéaire.',
      reflexeDuCorrecteur: 'Toujours mentionner l\'invariant de Thompson : un seul état initial sans transition entrante et un seul état final sans transition sortante.'
    }
  }
];
