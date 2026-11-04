import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART7: ExerciseItem[] = [
  {
    id: 'exo-100-46-integrale-dirichlet-feynman',
    title: 'Intégrale de Dirichlet $\\int_0^\\infty \\frac{\\sin x}{x}\\,\\mathrm{d}x$ par Dérivation sous le Signe Intégrale',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Intégrales à Paramètre & Analyse',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / Centrale PC',
    dureeEstimeeMin: 35,
    enonce: 'On pose pour $t \\ge 0$ la fonction $F(t) = \\int_0^{+\\infty} \\frac{\\sin x}{x} e^{-t x}\\,\\mathrm{d}x$.\n1. Justifier que l\'intégrale impropre $\\int_0^{+\\infty} \\frac{\\sin x}{x}\\,\\mathrm{d}x$ est semi-convergente mais non absolument convergente.\n2. Justifier la dérivabilité de $F$ sur $]0, +\\infty[$ et calculer $F\'(t)$.\n3. Déterminer $\\lim_{t\\to+\\infty} F(t)$ et en déduire l\'expression de $F(t)$ pour tout $t > 0$.\n4. En admettant la continuité de $F$ en $t=0$, en déduire la valeur exacte de l\'intégrale de Dirichlet $I = \\int_0^{+\\infty} \\frac{\\sin x}{x}\\,\\mathrm{d}x = \\frac{\\pi}{2}$.',
    hints: [
      'Pour la semi-convergence, faire une intégration par parties ou utiliser le critère des séries alternées sur $[k\\pi, (k+1)\\pi]$.',
      'Calculer $F\'(t) = -\\int_0^{+\\infty} \\sin x e^{-tx}\\,\\mathrm{d}x = -\\frac{1}{1 + t^2}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Nature de l\'intégrale de Dirichlet',
          explication: 'Sur $[0, 1]$, la fonction $x \\mapsto \\frac{\\sin x}{x}$ se prolonge par continuité en 0 par 1. Sur $[1, +\\infty[$, par intégration par parties :\n$$\\int_1^X \\frac{\\sin x}{x}\\,\\mathrm{d}x = \\left[ -\\frac{\\cos x}{x} \\right]_1^X - \\int_1^X \\frac{\\cos x}{x^2}\\,\\mathrm{d}x = \\cos(1) - \\frac{\\cos X}{X} - \\int_1^X \\frac{\\cos x}{x^2}\\,\\mathrm{d}x$$\nComme $|\\cos x / x^2| \\le 1/x^2$ intégrable de Riemann sur $[1, +\\infty[$, la limite quand $X\\to+\\infty$ existe : l\'intégrale est **convergente**.\nCependant, $|\\sin x| / x \\ge \\sin^2 x / x = \\frac{1 - \\cos(2x)}{2x}$. L\'intégrale diverge comme $\\frac{1}{2} \\int 1/x = +\\infty$ : l\'intégrale n\'est pas absolument convergente, elle est **semi-convergente**.'
        },
        {
          titre: '2. Dérivation sous le signe intégrale (Leibniz)',
          explication: 'Sur tout segment $[a, b] \\subset ]0, +\\infty[$ ($a > 0$) :\n- $t \\mapsto f(t, x) = \\frac{\\sin x}{x} e^{-t x}$ est $\\mathcal{C}^1$ par rapport à $t$.\n- La dérivée partielle vaut $\\frac{\\partial f}{\\partial t}(t, x) = -\\sin(x) e^{-t x}$.\n- Domination : $\\forall t \\in [a, b], \\forall x \\ge 0, \\; |\\frac{\\partial f}{\\partial t}(t, x)| \\le e^{-a x} = \\phi(x)$, intégrable sur $[0, +\\infty[$.\nD\'après le théorème de dérivation sous le signe intégrale, $F$ est $\\mathcal{C}^1$ sur $]0, +\\infty[$ et :\n$$F\'(t) = -\\int_0^{+\\infty} \\sin(x) e^{-t x}\\,\\mathrm{d}x = -\\mathrm{Im}\\left( \\int_0^{+\\infty} e^{(-t + j) x}\\,\\mathrm{d}x \\right) = -\\mathrm{Im}\\left( \\frac{1}{t - j} \\right) = -\\frac{1}{1 + t^2}$$'
        },
        {
          titre: '3. Intégration et constante d\'intégration',
          explication: 'En intégrant $F\'(t) = -\\frac{1}{1 + t^2}$ :\n$$F(t) = -\\arctan(t) + C$$\nPar convergence dominée, $\\lim_{t\\to+\\infty} F(t) = 0$. Donc $-\\frac{\\pi}{2} + C = 0 \\implies C = \\frac{\\pi}{2}$.\nAinsi, pour tout $t > 0$ :\n$$F(t) = \\frac{\\pi}{2} - \\arctan(t)$$'
        },
        {
          titre: '4. Conclusion sur l\'intégrale de Dirichlet',
          explication: 'Par continuité de $F$ en 0 :\n$$I = F(0) = \\lim_{t\\to 0^+} F(t) = \\frac{\\pi}{2} - \\arctan(0) = \\frac{\\pi}{2}$$'
        }
      ],
      conclusion: 'La méthode de Feynman de dérivation sous le signe intégrale est un outil redoutable pour calculer des intégrales impropres non calculables par primitives usuelles.',
      reflexeDuCorrecteur: 'Pour dériver sous l\'intégrale, appliquez toujours la domination locale sur $[a, b]$ avec $a > 0$ afin d\'avoir une exponentielle strictement décroissante intégrable.'
    }
  },
  {
    id: 'exo-100-47-effet-hall-semi-conducteur',
    title: 'Effet Hall & Détermination du Type et de la Densité de Porteurs de Charge',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Électromagnétisme & Force de Lorentz',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Une plaquette semi-conductrice parallélépipédique de largeur $a$ selon $y$, d\'épaisseur $b$ selon $z$, et de longueur $L$ selon $x$, est parcourue par un courant électrique d\'intensité $I$ selon $\\vec{u}_x$. Elle est soumise à un champ magnétique uniforme $\\vec{B} = B \\vec{u}_z$.\n1. Les porteurs de charge ont une charge $q$ et une densité volumique $n$. Écrire la force de Lorentz s\'exerçant sur un porteur se déplaçant à la vitesse de dérive $\\vec{v} = v \\vec{u}_x$.\n2. Décrire l\'accumulation de charges sur les faces latérales et l\'apparition du champ électrique de Hall stationnaire $\\vec{E}_H$.\n3. Établir l\'expression de la tension de Hall transversale $U_H = V(y=a) - V(y=0)$ en fonction de $I, B, n, q$ et de l\'épaisseur $b$.\n4. Comment le signe de la tension $U_H$ permet-il d\'affirmer sans ambiguïté si le matériau est un semi-conducteur de type N (électrons, $q = -e$) ou de type P (trous, $q = +e$) ?',
    hints: [
      'À l\'équilibre stationnaire, la force électrique compense la force magnétique : $q \\vec{E}_H + q \\vec{v} \\wedge \\vec{B} = \\vec{0}$.',
      'Le courant s\'écrit $I = n q v (a b)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Force de Lorentz sur les porteurs',
          explication: 'Chaque porteur de charge $q$ animé de la vitesse moyenne de dérive $\\vec{v} = v \\vec{u}_x$ subit la force de Lorentz magnétique :\n$$\\vec{F}_m = q \\vec{v} \\wedge \\vec{B} = q (v \\vec{u}_x) \\wedge (B \\vec{u}_z) = -q v B \\vec{u}_y$$'
        },
        {
          titre: '2. Établissement du champ de Hall stationnaire',
          explication: 'La force magnétique dévie transversalement les porteurs de charge vers l\'une des faces latérales selon $y$. Cette accumulation de charges non compensées crée un champ électrostatique transverse $\\vec{E}_H = E_H \\vec{u}_y$.\nEn régime permanent stationnaire, la force électrique compense exactement la force magnétique sur chaque porteur :\n$$q \\vec{E}_H + q \\vec{v} \\wedge \\vec{B} = \\vec{0} \\implies \\vec{E}_H = -\\vec{v} \\wedge \\vec{B} = -v B (\\vec{u}_x \\wedge \\vec{u}_z) = v B \\vec{u}_y$$'
        },
        {
          titre: '3. Calcul de la tension de Hall',
          explication: 'La différence de potentiel entre les deux faces latérales distantes de $a$ vaut :\n$$U_H = -\\int_0^a \\vec{E}_H \\cdot \\mathrm{d}\\vec{\\ell} = -E_H a = -v B a$$\nLe courant électrique traversant la section $S = a b$ s\'écrit $I = j S = (n q v) (a b) \\implies v = \\frac{I}{n q a b}$. En substituant :\n$$U_H = -\\left( \\frac{I}{n q a b} \\right) B a = -\\frac{I B}{n q b} = R_H \\frac{I B}{b}$$\noù $R_H = \\frac{1}{n q}$ est la constante de Hall.'
        },
        {
          titre: '4. Détermination du type de porteurs',
          explication: '- Si les porteurs sont des électrons (semi-conducteur dopé N, $q = -e < 0$) : ils dérivent dans le sens opposé au courant ($v < 0$), leur déviation magnétique les pousse vers la même face latérale que des porteurs positifs, mais leur charge négative produit une tension de Hall de signe opposé.\n- Si les porteurs sont des trous (semi-conducteur dopé P, $q = +e > 0$) : la tension $U_H$ est de signe positif.\nLa mesure du signe de $U_H$ donne directement le signe de la charge élémentaire $q$, et la valeur absolue donne la concentration de porteurs $n = \\frac{I B}{|q| b |U_H|}$.'
        }
      ],
      conclusion: 'L\'effet Hall est la seule expérience démontrant de façon incontestable l\'existence physique des trous de valence se comportant comme des particules de charge positive.',
      reflexeDuCorrecteur: 'Remarquez que la tension de Hall $U_H = \\frac{I B}{n q b}$ dépend de l\'épaisseur $b$, mais est rigoureusement indépendante de la largeur $a$ de la plaquette.'
    }
  },
  {
    id: 'exo-100-48-diagramme-bode-filtre-wien',
    title: 'Filtre Passe-Bande de Wien & Condition d\'Oscillation de Barkhausen',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Électronique & Systèmes Asservis',
    filieres: ['BCPST', 'PSI', 'MP', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / Centrale PSI',
    dureeEstimeeMin: 35,
    enonce: 'On considère le filtre passif en pont de Wien constitué d\'un circuit $R-C$ série en entrée et d\'un circuit $R-C$ parallèle en sortie (avec $R_1 = R_2 = R$ et $C_1 = C_2 = C$).\n1. Déterminer la fonction de transfert harmonique $\\underline{H}(j\\omega) = \\frac{\\underline{u}_s}{\\underline{u}_e}$ en fonction de la variable réduite $x = \\frac{\\omega}{\\omega_0}$ où $\\omega_0 = \\frac{1}{R C}$.\n2. Mettre la fonction sous forme canonique d\'un passe-bande du second ordre : $\\underline{H}(j x) = \\frac{H_0}{1 + j Q (x - 1/x)}$ en précisant la valeur du gain maximal $H_0$ et du facteur de qualité $Q$.\n3. Pour quelle pulsation $\\omega$ le déphasage sortie/entrée est-il rigoureusement nul ? Quelle condition de gain l\'amplificateur opérationnel doit-il satisfaire pour réaliser un oscillateur quasi-sinusoïdal autonome de Wien ?',
    hints: [
      'Appliquer le diviseur de tension : $\\underline{H} = \\frac{\\underline{Z}_p}{\\underline{Z}_s + \\underline{Z}_p}$ avec $\\underline{Z}_s = R + \\frac{1}{j C \\omega}$ et $\\underline{Z}_p = \\frac{R}{1 + j R C \\omega}$.',
      'Critère de Barkhausen : gain de boucle $\\underline{T}(j\\omega_0) = \\underline{A} \\cdot \\underline{H}(j\\omega_0) = 1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Établissement de la fonction de transfert',
          explication: 'Par la formule du pont diviseur de tension non chargé :\n$$\\underline{H}(j\\omega) = \\frac{\\underline{Z}_p}{\\underline{Z}_s + \\underline{Z}_p} = \\frac{1}{1 + \\frac{\\underline{Z}_s}{\\underline{Z}_p}}$$\nCalculons le quotient d\'impédances :\n$$\\frac{\\underline{Z}_s}{\\underline{Z}_p} = \\left( R + \\frac{1}{j C \\omega} \\right) \\left( \\frac{1}{R} + j C \\omega \\right) = 1 + j R C \\omega + \\frac{1}{j R C \\omega} + 1 = 2 + j \\left( R C \\omega - \\frac{1}{R C \\omega} \\right)$$\nEn posant $\\omega_0 = \\frac{1}{R C}$ et $x = \\omega / \\omega_0$ :\n$$\\underline{H}(jx) = \\frac{1}{1 + 2 + j(x - 1/x)} = \\frac{1}{3 + j(x - 1/x)}$$'
        },
        {
          titre: '2. Forme canonique passe-bande',
          explication: 'En factorisant par 3 au dénominateur :\n$$\\underline{H}(jx) = \\frac{1/3}{1 + j \\frac{1}{3} (x - 1/x)}$$\nC\'est la forme canonique exacte d\'un filtre passe-bande avec :\n- Gain maximal à la résonance : $H_0 = \\frac{1}{3}$ (soit $G_{dB}(\\omega_0) = -20\\log_{10}(3) \\approx -9.54\\text{ dB}$).\n- Facteur de qualité : $Q = \\frac{1}{3} \\approx 0.33$ (filtre très sélectif à large bande passante $\\Delta\\omega = 3\\omega_0$).'
        },
        {
          titre: '3. Déphasage nul et oscillateur de Wien',
          explication: 'L\'argument vaut $\\phi(x) = -\\arctan\\left[ \\frac{1}{3}(x - 1/x) \\right]$.\nLe déphasage s\'annule rigoureusement pour $x - 1/x = 0 \\iff x = 1$, soit à la pulsation propre $\\omega = \\omega_0 = \\frac{1}{R C}$.\nPour réaliser un oscillateur sinusoïdal autonome de Wien, on boucle le filtre sur un amplificateur non inverseur de gain statique $A = 1 + \\frac{R_2}{R_1}$.\nD\'après le critère de Barkhausen, l\'oscillation permanente nécessite un gain de boucle unitaire en phase et en module :\n$$\\underline{T}(j\\omega_0) = A \\cdot \\underline{H}(j\\omega_0) = A \\times \\frac{1}{3} = 1 \\iff A = 3$$\nIl faut donc régler précisément le rapport des résistances de contre-réaction à $\\frac{R_2}{R_1} = 2$ pour obtenir des oscillations sinusoïdales pures sans saturation.'
        }
      ],
      conclusion: 'Le réseau de Wien est la structure fondamentale des générateurs basse fréquence (GBF) analogiques de laboratoire.',
      reflexeDuCorrecteur: 'Retenez par cœur les deux valeurs magiques du pont de Wien : à la pulsation $\\omega_0$, le déphasage est nul et l\'atténuation est d\'un facteur 3 ($H = 1/3$).'
    }
  },
  {
    id: 'exo-100-49-equilibre-chimique-dissociation-n2o4',
    title: 'Équilibre Chimique de Dissociation du Tétroxyde de Diazote $N_2O_4 \\rightleftharpoons 2 NO_2$',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Thermodynamique Chimique & Équilibres',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'On étudie l\'équilibre de dissociation en phase gazeuse : $N_2O_4(g) \\rightleftharpoons 2 NO_2(g)$ à $25^\\circ\\text{C}$ et sous la pression totale $P = 1.0\\text{ bar}$.\n1. En partant initialement de $n_0$ moles de $N_2O_4$ pur, exprimer les pressions partielles de chaque gaz en fonction de la pression totale $P$ et du coefficient de dissociation $\\alpha$.\n2. Exprimer la constante d\'équilibre $K^\\circ(T)$ en fonction de $\\alpha$ et $P/P^\\circ$.\n3. Sachant qu\'à $25^\\circ\\text{C}$ $K^\\circ = 0.141$, calculer le coefficient de dissociation $\\alpha$. Prédire qualitativement l\'effet d\'une augmentation de pression isotherme à l\'aide de la loi de modération de Le Chatelier.',
    hints: [
      'Nombre de moles total à l\'équilibre : $n_{tot} = n_0(1 + \\alpha)$.',
      'Pression partielle : $P_i = \\frac{n_i}{n_{tot}} P$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Tableau d\'avancement et pressions partielles',
          explication: 'Soit $\\alpha \\in [0, 1]$ le taux de dissociation de $N_2O_4$ :\n- $n(N_2O_4) = n_0(1 - \\alpha)$\n- $n(NO_2) = 2 n_0 \\alpha$\n- Quantité totale de gaz : $n_{tot} = n_0(1 - \\alpha) + 2 n_0 \\alpha = n_0(1 + \\alpha)$.\nLes pressions partielles s\'écrivent d\'après la loi de Dalton :\n$$P(N_2O_4) = \\frac{1 - \\alpha}{1 + \\alpha} P \\quad \\text{et} \\quad P(NO_2) = \\frac{2\\alpha}{1 + \\alpha} P$$'
        },
        {
          titre: '2. Expression de la constante d\'équilibre $K^\\circ$',
          explication: 'D\'après la loi d\'action de masse de Guldberg et Waage avec $P^\\circ = 1\\text{ bar}$ :\n$$K^\\circ(T) = \\frac{(P(NO_2) / P^\\circ)^2}{P(N_2O_4) / P^\\circ} = \\frac{\\left( \\frac{2\\alpha}{1+\\alpha} \\frac{P}{P^\\circ} \\right)^2}{\\frac{1-\\alpha}{1+\\alpha} \\frac{P}{P^\\circ}} = \\frac{4\\alpha^2}{(1 - \\alpha^2)} \\frac{P}{P^\\circ}$$\nCette formule universelle relie dissociation, constante thermodynamique et pression totale.'
        },
        {
          titre: '3. Calcul numérique et loi de Le Chatelier',
          explication: 'Sous $P = 1.0\\text{ bar} = P^\\circ$ :\n$$\\frac{4\\alpha^2}{1 - \\alpha^2} = 0.141 \\implies 4\\alpha^2 = 0.141 - 0.141\\alpha^2 \\implies 4.141\\alpha^2 = 0.141$$\n$$\\alpha^2 = \\frac{0.141}{4.141} \\approx 0.03405 \\implies \\alpha = \\sqrt{0.03405} \\approx 0.1845 = 18.5\\%$$\nÀ $25^\\circ\\text{C}$ sous 1 bar, $18.5\\%$ du tétroxyde est dissocié en dioxyde de diazote.\n- **Effet d\'une compression isotherme** : la réaction de dissociation produit 2 moles de gaz pour 1 mole consommée ($\\Delta \\nu_g = +1 > 0$). D\'après le principe de modération de Le Chatelier, une élévation de pression déplace l\'équilibre dans le sens qui consomme des moles gazeuses, donc dans le sens indirect $\\leftarrow$ de formation de $N_2O_4$. La dissociation diminue ($\\,\\alpha$ baisse).'
        }
      ],
      conclusion: 'Le tétroxyde de diazote est le système gazeux étalon pour vérifier la loi d\'action de masse et la thermochimie des gaz parfaits.',
      reflexeDuCorrecteur: 'Pour isoler $\\alpha$ de la formule $\\frac{4\\alpha^2}{1-\\alpha^2} = A$, écrivez directement $\\alpha = \\sqrt{\\frac{A}{4 + A}}$.'
    }
  },
  {
    id: 'exo-100-50-theoreme-noyaux-decomposition',
    title: 'Décomposition Spectrale & Calcul des Projecteurs Spectraux par les Polynômes de Lagrange',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Lemme des Noyaux',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / Centrale MP',
    dureeEstimeeMin: 40,
    enonce: 'Soit $u \\in \\mathcal{L}(E)$ un endomorphisme diagonalisable sur un espace de dimension finie $n$. Soit $\\mathrm{Sp}(u) = \\{\\lambda_1, \\dots, \\lambda_p\\}$ l\'ensemble de ses valeurs propres deux à deux distinctes.\n1. Justifier que le polynôme minimal de $u$ est $\\mu_u(X) = \\prod_{i=1}^p (X - \\lambda_i)$.\n2. On introduit les polynômes d\'interpolation de Lagrange associés aux racines $\\lambda_i$ : $L_i(X) = \\prod_{j \\neq i} \\frac{X - \\lambda_j}{\\lambda_i - \\lambda_j}$. En appliquant le lemme des noyaux, démontrer que les endomorphismes $p_i = L_i(u)$ sont les projecteurs spectraux sur les sous-espaces propres $E_{\\lambda_i} = \\ker(u - \\lambda_i \\mathrm{id})$ parallèlement à $\\bigoplus_{j \\neq i} E_{\\lambda_j}$.\n3. Démontrer les identités spectrales :\n$$\\sum_{i=1}^p p_i = \\mathrm{id}_E \\quad \\text{et} \\quad u = \\sum_{i=1}^p \\lambda_i p_i$$\n4. En déduire une formule explicite pour toute puissance $u^k$ et pour l\'exponentielle matricielle $\\exp(u)$.',
    hints: [
      'Remarquer que $\\sum_{i=1}^p L_i(X) = 1$ et $\\sum_{i=1}^p \\lambda_i L_i(X) = X$ par interpolation de Lagrange.',
      'Calculer $p_i \\circ p_j$ en remarquant que $L_i(X) L_j(X)$ est divisible par $\\mu_u(X)$ pour $i \\neq j$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Polynôme minimal scindé à racines simples',
          explication: 'Un endomorphisme est diagonalisable si et seulement si son polynôme minimal est scindé à racines simples sur $\\mathbb{K}$. Comme les racines de $\\mu_u$ sont exactement les valeurs propres de $u$, on a $\\mu_u(X) = \\prod_{i=1}^p (X - \\lambda_i)$.'
        },
        {
          titre: '2. Projecteurs de Lagrange et lemme des noyaux',
          explication: 'D\'après le lemme des noyaux, comme les polynômes $X - \\lambda_i$ sont deux à deux premiers entre eux :\n$$E = \\ker(\\mu_u(u)) = \\bigoplus_{i=1}^p \\ker(u - \\lambda_i \\mathrm{id}) = \\bigoplus_{i=1}^p E_{\\lambda_i}$$\nPour les polynômes de Lagrange $L_i$ :\n- Pour $j \\neq i$, $L_i(X) L_j(X)$ est divisible par $\\prod_{k=1}^p (X - \\lambda_k) = \\mu_u(X)$, donc $(L_i L_j)(u) = 0 \\implies p_i \\circ p_j = 0$.\n- Le polynôme $\\sum_{i=1}^p L_i(X) - 1$ de degré au plus $p-1$ s\'annule en $p$ points distincts $\\lambda_1, \\dots, \\lambda_p$, il est donc identiquement nul : $\\sum_{i=1}^p L_i(X) = 1$.\nEn évaluant en $u$ : $\\sum_{i=1}^p p_i = \\mathrm{id}_E$.\nEn composant avec $p_i$ : $p_i^2 + \\sum_{j \\neq i} p_i \\circ p_j = p_i \\implies p_i^2 = p_i$. Les $p_i$ sont donc des projecteurs orthogonaux pour la décomposition en somme directe.'
        },
        {
          titre: '3. Formule de décomposition spectrale',
          explication: 'Le polynôme $\\sum_{i=1}^p \\lambda_i L_i(X) - X$ de degré au plus $p-1$ s\'annule également sur les $p$ points $\\lambda_k$. Il est donc nul, ce qui donne $\\sum_{i=1}^p \\lambda_i L_i(X) = X$. En évaluant en $u$ :\n$$u = \\sum_{i=1}^p \\lambda_i p_i$$'
        },
        {
          titre: '4. Calcul immédiat des puissances et de l\'exponentielle',
          explication: 'Comme $p_i \\circ p_j = 0$ et $p_i^2 = p_i$, par récurrence immédiate :\n$$u^k = \\sum_{i=1}^p \\lambda_i^k p_i$$\nDe même, pour toute fonction analytique $f$ définie sur le spectre :\n$$f(u) = \\sum_{i=1}^p f(\\lambda_i) p_i \\implies \\exp(u) = \\sum_{i=1}^p e^{\\lambda_i} p_i$$\nCette méthode évite totalement l\'inversion de la matrice de passage $P^{-1} D P$ !'
        }
      ],
      conclusion: 'La décomposition spectrale par les projecteurs de Lagrange est la méthode de calcul symbolique la plus élégante et la plus rapide en algèbre linéaire.',
      reflexeDuCorrecteur: 'Pour calculer $\\exp(A)$ ou $A^{100}$, écrivez les projecteurs spectraux sous forme polynomiale en $A$ sans jamais inverser de matrice.'
    }
  }
];
