import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART10: ExerciseItem[] = [
  {
    id: 'exo-100-61-serie-entiere-sommation-fibonacci',
    title: 'Série Génératrice de la Suite de Fibonacci & Rayon de Convergence',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Séries Entières & Suites Récurrentes',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'On considère la suite de Fibonacci définie par $F_0 = 0, F_1 = 1$ et pour tout $n \\ge 0$, $F_{n+2} = F_{n+1} + F_n$. On introduit sa série génératrice formelle $f(x) = \\sum_{n=0}^{+\\infty} F_n x^n$.\n1. En multipliant la relation de récurrence par $x^{n+2}$ et en sommant pour $n \\ge 0$, exprimer $f(x)$ comme une fraction rationnelle pour $|x| < R$.\n2. Décomposer $f(x)$ en éléments simples et déterminer son rayon de convergence $R$.\n3. Par développement en série entière de chaque élément simple, retrouver la formule explicite de Binet pour $F_n$ faisant intervenir le nombre d\'or $\\phi = \\frac{1 + \\sqrt{5}}{2}$.',
    hints: [
      'Remarquer que $\\sum_{n=0}^{+\\infty} F_{n+2} x^{n+2} = f(x) - x$.',
      'Les pôles de $f(x)$ sont les inverses des racines du polynôme caractéristique $X^2 - X - 1$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation fonctionnelle de la série génératrice',
          explication: 'Pour tout $n \\ge 0$, $F_{n+2} x^{n+2} = x F_{n+1} x^{n+1} + x^2 F_n x^n$. En sommant pour $n \\ge 0$ sous réserve de convergence :\n$$\\sum_{n=0}^{+\\infty} F_{n+2} x^{n+2} = x \\sum_{n=0}^{+\\infty} F_{n+1} x^{n+1} + x^2 \\sum_{n=0}^{+\\infty} F_n x^n$$\n$$f(x) - F_0 - F_1 x = x (f(x) - F_0) + x^2 f(x)$$\nComme $F_0 = 0$ et $F_1 = 1$, cela donne $f(x) - x = x f(x) + x^2 f(x) \\implies f(x) (1 - x - x^2) = x$.\nD\'où la forme rationnelle remarquable :\n$$f(x) = \\frac{x}{1 - x - x^2}$$'
        },
        {
          titre: '2. Décomposition en éléments simples et rayon de convergence',
          explication: 'Le dénominateur $1 - x - x^2 = -(x^2 + x - 1)$ a pour racines $x_1 = \\frac{-1 + \\sqrt{5}}{2} = \\frac{1}{\\phi}$ et $x_2 = \\frac{-1 - \\sqrt{5}}{2} = -\\phi$ où $\\phi = \\frac{1 + \\sqrt{5}}{2} \\approx 1.618$ est le nombre d\'or.\nComme $x_1 x_2 = -1$, on a $1 - x - x^2 = (1 - \\phi x)(1 + x/\\phi)$.\nDécomposition en éléments simples :\n$$f(x) = \\frac{x}{(1 - \\phi x)(1 + x/\\phi)} = \\frac{1}{\\sqrt{5}} \\left( \\frac{1}{1 - \\phi x} - \\frac{1}{1 + x/\\phi} \\right)$$\nLe rayon de convergence de la série entière est la distance de l\'origine au pôle le plus proche :\n$$R = \\min(|x_1|, |x_2|) = x_1 = \\frac{1}{\\phi} = \\frac{\\sqrt{5}-1}{2} \\approx 0.618$$'
        },
        {
          titre: '3. Formule de Binet',
          explication: 'Pour $|x| < R$, développons les deux séries géométriques usuelles $\\frac{1}{1 - u} = \\sum_{n=0}^{+\\infty} u^n$ :\n$$f(x) = \\frac{1}{\\sqrt{5}} \\sum_{n=0}^{+\\infty} \\left[ \\phi^n - \\left(-\\frac{1}{\\phi}\\right)^n \\right] x^n$$\nPar unicité du développement en série entière, le coefficient devant $x^n$ est $F_n$ :\n$$F_n = \\frac{1}{\\sqrt{5}} \\left( \\phi^n - (-1)^n \\phi^{-n} \\right) = \\frac{1}{\\sqrt{5}} \\left[ \\left( \\frac{1+\\sqrt{5}}{2} \\right)^n - \\left( \\frac{1-\\sqrt{5}}{2} \\right)^n \\right]$$\nC\'est la formule exacte de Binet.'
        }
      ],
      conclusion: 'La méthode de la série génératrice permet de résoudre instantanément les récurrences linéaires et les problèmes de dénombrement combinatoire.',
      reflexeDuCorrecteur: 'Pour déterminer le terme général d\'une suite récurrente, la décomposition en éléments simples de sa série génératrice est la méthode la plus directe.'
    }
  },
  {
    id: 'exo-100-62-puits-thermique-conduction-ailette',
    title: 'Refroidissement d\'un Microprocesseur par Ailette Thermique & Rendement d\'Ailette',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Transferts Thermiques Conducto-Convectifs',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PSI / Agro-Véto',
    dureeEstimeeMin: 35,
    enonce: 'Pour dissiper la chaleur d\'un composant électronique à température $T_b$, on fixe une ailette droite cylindrique de longueur $L$, de section $S = \\pi R^2$ et de périmètre $P = 2\\pi R$, de conductivité thermique $\\lambda$. L\'air ambiant est à température $T_\\infty < T_b$ avec un coefficient de convection de Newton $h$.\n1. Établir l\'équation différentielle régissant l\'écart de température $\\theta(x) = T(x) - T_\\infty$ en régime stationnaire le long de l\'ailette ($x \\in [0, L]$).\n2. En supposant l\'ailette très longue ($L \\gg \\delta$, condition $\\theta(+\\infty) = 0$), donner l\'expression de $\\theta(x)$ et du flux de chaleur total dissipé $\\Phi_{reel}$.\n3. Définir l\'efficacité thermique de l\'ailette $\\eta_a = \\frac{\\Phi_{reel}}{\\Phi_{ideal}}$ où $\\Phi_{ideal}$ est le flux dissipé si toute la surface était à la température de base $T_b$.',
    hints: [
      'Bilan d\'énergie sur une tranche $[x, x+\\mathrm{d}x]$ : conduction Fourier entrante = conduction sortante + convection latérale Newton.',
      'Longueur caractéristique de décroissance : $\\delta = \\sqrt{\\frac{\\lambda S}{h P}}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équation différentielle de l\'ailette',
          explication: 'Sur une tranche d\'ailette d\'épaisseur $\\mathrm{d}x$ en régime stationnaire :\n- Flux de conduction entrant en $x$ : $\\Phi_{cond}(x) = -\\lambda S \\frac{\\mathrm{d}T}{\\mathrm{d}x}$.\n- Flux de conduction sortant en $x+\\mathrm{d}x$ : $\\Phi_{cond}(x+\\mathrm{d}x) = \\Phi_{cond}(x) + \\frac{\\mathrm{d}\\Phi_{cond}}{\\mathrm{d}x}\\mathrm{d}x$.\n- Flux de convection latérale cédé à l\'air : $\\mathrm{d}\\Phi_{conv} = h (P\\,\\mathrm{d}x)(T(x) - T_\\infty)$.\nLe bilan d\'énergie stationnaire $\\Phi_{in} = \\Phi_{out}$ s\'écrit :\n$$-\\lambda S \\frac{\\mathrm{d}^2 T}{\\mathrm{d}x^2}\\mathrm{d}x + h P (T - T_\\infty)\\mathrm{d}x = 0$$\nEn posant $\\theta(x) = T(x) - T_\\infty$ et $\\delta = \\sqrt{\\frac{\\lambda S}{h P}}$ :\n$$\\frac{\\mathrm{d}^2\\theta}{\\mathrm{d}x^2} - \\frac{1}{\\delta^2}\\theta(x) = 0$$'
        },
        {
          titre: '2. Solution pour une ailette infinie',
          explication: 'L\'équation différentielle a pour solution générale $\\theta(x) = A e^{-x/\\delta} + B e^{x/\\delta}$.\nLa condition aux limites en $+\\infty$ ($\\,\\theta \\to 0$) impose $B = 0$.\nEn $x = 0$, $\\theta(0) = T_b - T_\\infty = \\theta_b$, donc :\n$$\\theta(x) = \\theta_b e^{-x/\\delta} \\quad \\text{avec} \\quad \\delta = \\sqrt{\\frac{\\lambda R}{2h}}$$\nLe flux de chaleur total dissipé par l\'ailette est le flux entrant à la base par conduction :\n$$\\Phi_{reel} = -\\lambda S \\left.\\frac{\\mathrm{d}\\theta}{\\mathrm{d}x}\\right|_{x=0} = -\\lambda S \\left(-\\frac{\\theta_b}{\\delta}\\right) = \\frac{\\lambda S}{\\delta} \\theta_b = \\sqrt{h P \\lambda S} \\,(T_b - T_\\infty)$$'
        },
        {
          titre: '3. Efficacité de l\'ailette',
          explication: 'Si toute la surface latérale de l\'ailette restait idéalement à la température maximale de base $T_b$, le flux convecté maximal serait :\n$$\\Phi_{ideal} = h (P L) (T_b - T_\\infty)$$\nL\'efficacité de l\'ailette vaut donc le rapport :\n$$\\eta_a = \\frac{\\Phi_{reel}}{\\Phi_{ideal}} = \\frac{\\sqrt{h P \\lambda S} \\theta_b}{h P L \\theta_b} = \\frac{1}{L} \\sqrt{\\frac{\\lambda S}{h P}} = \\frac{\\delta}{L}$$\nPour une ailette réelle de longueur finie avec extrémité isolée, la formule exacte est $\\eta_a = \\frac{\\tanh(L/\\delta)}{L/\\delta}$. Augmenter la longueur $L$ au-delà de $3\\delta$ est inutile car le bout de l\'ailette est déjà refroidi à la température de l\'air ambiant.'
        }
      ],
      conclusion: 'Le calcul d\'ailette est le principe central de dimensionnement des radiateurs de processeurs (ventirads) et des cylindres des moteurs de motos à refroidissement à air.',
      reflexeDuCorrecteur: 'Pour une ailette, la longueur utile optimale est toujours de l\'ordre de $L \\approx 2$ à $3\\delta$ avec $\\delta = \\sqrt{\\lambda S / (h P)}$.'
    }
  },
  {
    id: 'exo-100-63-chimie-organique-synthese-malonique',
    title: 'Synthèse Malonique & Préparation Régiosélective d\'Acides Carboxyliques',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-stereochimie-biomolecules',
    chapitreTitre: 'Chimie Organique des Énolates',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP Chimie',
    dureeEstimeeMin: 35,
    enonce: 'On souhaite synthétiser l\'acide 2-méthylhexanoïque à partir du malonate de diéthyle $CH_2(COOEt)_2$.\n1. Justifier l\'acidité remarquable des protons en $\\alpha$ du malonate de diéthyle ($pK_a \\approx 13$) par rapport à celle d\'un ester simple ($pK_a \\approx 25$).\n2. Détailler la succession des étapes de déprotonation, mono-alkylation, seconde alkylation, saponification et décarboxylation thermique finale.\n3. Quels réactifs et halogénoalcanes doit-on utiliser successivement pour obtenir la molécule cible avec un rendement optimal ?',
    hints: [
      'Utiliser l\'éthanoate de sodium $EtO^- Na^+$ dans l\'éthanol pour éviter les réactions de transestérification.',
      'La décarboxylation thermique d\'un diacide 1,3-dicarboxylique s\'effectue via un état de transition cyclique à 6 centres.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Acidité du malonate de diéthyle',
          explication: 'Le carbone central est situé entre deux groupements carbonyles électro-attracteurs par effet mésomère $-M$. La base conjuguée (énolate carbanionique) est stabilisée par délocalisation de la charge négative sur les deux atomes d\'oxygène des carbonyles à travers trois formes mésomères limites mésomères équivalentes : $O^- - C=C - C=O \\leftrightarrow O=C - C^- - C=O \\leftrightarrow O=C - C=C - O^-$. Son $pK_a$ de $13$ permet une déprotonation quantitative par l\'ion éthanolate $EtO^-$ ($pK_a(EtOH) = 16$).'
        },
        {
          titre: '2. Enchaînement synthétique méthodique',
          explication: 'L\'acide 2-méthylhexanoïque a pour formule $CH_3-(CH_2)_3-CH(CH_3)-COOH$. C\'est un dérivé disubstitué de l\'acide acétique portant une chaîne butyle $-C_4H_9$ et un groupe méthyle $-CH_3$ :\n1. **Première alkylation** : Déprotonation du malonate de diéthyle par $EtO^- Na^+$ dans $EtOH$, puis addition nucléophile $S_N2$ sur le 1-bromobutane $CH_3-(CH_2)_3-Br$ $\\implies$ butylmalonate de diéthyle.\n2. **Seconde alkylation** : Déprotonation du proton résiduel par $EtO^- Na^+$, suivie d\'une seconde $S_N2$ sur l\'iodométhane $CH_3-I$ $\\implies$ butyl(méthyl)malonate de diéthyle.\n3. **Hydrolyse basique (saponification)** : Traitement à chaud par la soude $NaOH$ en excès, suivi d\'une acidification par $HCl$ $\\implies$ acide butyl(méthyl)malonique (diacide 1,3-dicarboxylique).\n4. **Décarboxylation thermique** : Chauffage à $140-160^\\circ\\text{C}$ $\\implies$ expulsion d\'une molécule de dioxyde de carbone $CO_2(g)$ via un mécanisme péricyclique concerté à 6 centres (forme énolique intermédiaire qui se tautomérise instantanément en acide carboxylique saturé).'
        },
        {
          titre: '3. Choix des halogénoalcanes et ordre d\'introduction',
          explication: 'Réactifs successifs :\n- $1^\\circ$) $EtO^- Na^+ / EtOH$ puis 1-bromobutane $CH_3(CH_2)_3Br$.\n- $2^\\circ$) $EtO^- Na^+ / EtOH$ puis iodométhane $CH_3I$.\n- $3^\\circ$) $NaOH$ aqueux puis $HCl$.\n- $4^\\circ$) Chauffage à reflux.\n*Conseil méthodologique* : Il est toujours préférable d\'introduire le groupement alkyle le plus encombrant (ici le butyle) en premier, puis le groupement le plus réactif et compact (l\'iodométhane) en second, afin de maximiser le rendement de la seconde $S_N2$ sur un carbone plus encombré.'
        }
      ],
      conclusion: 'La synthèse malonique est la méthode classique de choix pour fabriquer régiosélectivement des acides carboxyliques mono- et di-substitués en $\\alpha$.',
      reflexeDuCorrecteur: 'Pour fabriquer un acide $R-CH_2-COOH$ : synthèse malonique avec $R-X$. Pour fabriquer une méthylcétone $R-CH_2-CO-CH_3$ : synthèse acétylacétique avec $R-X$.'
    }
  },
  {
    id: 'exo-100-64-fentes-young-source-etendue',
    title: 'Cohérence Spatiale des Fentes d\'Young & Théorème de Van Cittert-Zernike',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Optique Ondulatoire & Cohérence Spatiale',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts PC / ENS BCPST',
    dureeEstimeeMin: 40,
    enonce: 'On éclaire deux fentes d\'Young $F_1, F_2$ distantes de $a$ par une fente source primaire monochromatique $S$ de largeur finie $b$, située à distance $d$ en amont du plan des fentes (longueur d\'onde $\\lambda$). Chaque point de la source émet indépendamment des autres (incohérence spatiale).\n1. Exprimer le décalage de la figure d\'interférence produit par un point source situé à l\'ordonnée $y$ sur la fente primaire.\n2. En intégrant l\'intensité lumineuse totale sur la largeur $b$ de la source, établir le facteur de visibilité $V(b)$ des franges sur l\'écran.\n3. En déduire la largeur maximale de la fente source $b_{max}$ (critère de cohérence spatiale) pour que les franges restent visibles avec un contraste supérieur à $0.5$.',
    hints: [
      'Différence de marche globale : $\\delta(x, y) = [S F_2 M] - [S F_1 M] = \\frac{a x}{D} + \\frac{a y}{d}$.',
      'Intégrer $\\cos\\left(\\frac{2\\pi}{\\lambda}\\delta\\right)$ par rapport à $y \\in [-b/2, b/2]$ pour faire apparaître un sinus cardinal.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Déphasage induit par un point source décentré',
          explication: 'Pour un point source situé à l\'ordonnée $y$, le chemin en amont présente une différence de marche $\\delta_{amont} = [S F_2] - [S F_1] \\approx \\frac{a y}{d}$.\nLa différence de marche totale au point d\'observation $M(x)$ sur l\'écran situé à distance $D$ vaut :\n$$\\delta(x, y) = \\frac{a x}{D} + \\frac{a y}{d}$$\nLe réseau de franges produit par ce point source est décalé d\'une quantité $\\Delta x = -y \\frac{D}{d}$.'
        },
        {
          titre: '2. Intégration sur la largeur de la source et théorème de Van Cittert-Zernike',
          explication: 'La source étant spatialement incohérente, on somme les intensités élémentaires $\\mathrm{d}I = \\frac{I_0}{b} \\left(1 + \\cos\\frac{2\\pi \\delta}{\\lambda}\\right)\\,\\mathrm{d}y$ sur $y \\in [-b/2, b/2]$ :\n$$I(x) = \\frac{I_0}{b} \\int_{-b/2}^{b/2} \\left[ 1 + \\cos\\left( \\frac{2\\pi a x}{\\lambda D} + \\frac{2\\pi a y}{\\lambda d} \\right) \\right] \\mathrm{d}y$$\nEn développant le cosinus et par parité de l\'intervalle :\n$$I(x) = I_0 \\left[ 1 + \\mathrm{sinc}\\left( \\frac{\\pi a b}{\\lambda d} \\right) \\cos\\left( \\frac{2\\pi a x}{\\lambda D} \\right) \\right]$$\nLe facteur de visibilité (degré de cohérence spatiale complexe) s\'écrit donc :\n$$V(b) = \\left| \\mathrm{sinc}\\left( \\frac{\\pi a b}{\\lambda d} \\right) \\right|$$'
        },
        {
          titre: '3. Largeur limite de source et diamètre de cohérence',
          explication: 'Le brouillage complet des franges ($V = 0$) survient pour le premier zéro du sinus cardinal :\n$$\\frac{\\pi a b}{\\lambda d} = \\pi \\implies b_{brouillage} = \\frac{\\lambda d}{a}$$\nPour maintenir un contraste supérieur à $50\\%$ ($V \\ge 0.5$, où $\\mathrm{sinc}(u) \\approx 0.5$ pour $u \\approx 1.90$) :\n$$b_{max} \\approx \\frac{1.90}{\\pi} \\frac{\\lambda d}{a} \\approx 0.60 \\frac{\\lambda d}{a}$$\nCe résultat est le fondement de l\'interférométrie stellaire de Michelson : en mesurant l\'écartement $a$ pour lequel les franges d\'une étoile disparaissent, on détermine directement son diamètre angulaire apparent $\\theta_{etoile} = b / d = \\lambda / a$.'
        }
      ],
      conclusion: 'Le théorème de Van Cittert-Zernike montre que le degré de cohérence spatiale est la transformée de Fourier de la distribution d\'intensité de la source.',
      reflexeDuCorrecteur: 'Pour observer des interférences nettes, la largeur angulaire de la source vue des fentes doit vérifier $\\theta = b/d \\ll \\lambda / a$.'
    }
  },
  {
    id: 'exo-100-65-effet-doppler-recul-relativiste-lorentz',
    title: 'Effet Doppler Relativiste Longitudinal & Redshift Cosmologique',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Relativité Restreinte & Astrophysique',
    filieres: ['BCPST', 'MP', 'PC'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / ENS BCPST',
    dureeEstimeeMin: 40,
    enonce: 'Une source lumineuse monochromatique émettant des photons de pulsation propre $\\omega_0$ s\'éloigne en ligne droite d\'un observateur immobile à la vitesse constante $v = \\beta c$ (avec $\\gamma = 1/\\sqrt{1-\\beta^2}$).\n1. Par transformation de Lorentz du quadri-vecteur d\'onde $k^\\mu = (\\omega/c, \\vec{k})$, établir la formule de l\'effet Doppler relativiste pour la pulsation reçue $\\omega$ :\n$$\\omega = \\omega_0 \\sqrt{\\frac{1 - \\beta}{1 + \\beta}}$$\n2. Définir le paramètre de décalage vers le rouge (redshift) $z = \\frac{\\lambda_{obs} - \\lambda_0}{\\lambda_0}$ et exprimer $z$ en fonction de $\\beta$.\n3. Une galaxie lointaine présente une raie d\'émission de l\'hydrogène $H_\\alpha$ observée à $\\lambda_{obs} = 787.2\\text{ nm}$ (longueur d\'onde au repos $\\lambda_0 = 656.0\\text{ nm}$). Calculer le redshift $z$ et la vitesse de récession $\\beta = v/c$ de cette galaxie.',
    hints: [
      'Quadrivecteur onde : $k\'^0 = \\gamma(k^0 - \\beta k^1)$ avec $k^0 = \\omega/c$ et $k^1 = -\\omega/c$ pour une propagation vers l\'arrière.',
      'Redshift : $1 + z = \\frac{\\lambda_{obs}}{\\lambda_0} = \\frac{\\omega_0}{\\omega}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Transformation de Lorentz du quadri-vecteur onde',
          explication: 'En relativité restreinte, la pulsation $\\omega$ et le vecteur d\'onde $\\vec{k}$ forment un quadri-vecteur $k^\\mu = (\\omega/c, k_x, k_y, k_z)$. Pour un photon se propageant selon les $x$ décroissants vers l\'observateur : $k_x = -k = -\\omega/c$.\nDans le référentiel de l\'observateur lié à la source par une transformation spéciale de Lorentz de vitesse $v = \\beta c$ selon $\\vec{u}_x$ :\n$$k\'^0 = \\gamma (k^0 - \\beta k_x) = \\gamma \\left( \\frac{\\omega_0}{c} - \\beta \\left(-\\frac{\\omega_0}{c}\\right) \\right) = \\gamma \\frac{\\omega_0}{c} (1 + \\beta)$$\nEn simplifiant par $c$ avec $\\gamma = \\frac{1}{\\sqrt{1-\\beta^2}} = \\frac{1}{\\sqrt{(1-\\beta)(1+\\beta)}}$ :\n$$\\omega = \\omega_0 \\frac{1+\\beta}{\\sqrt{(1-\\beta)(1+\\beta)}} = \\omega_0 \\sqrt{\\frac{1 - \\beta}{1 + \\beta}}$$\nLa fréquence reçue est décalée vers le rouge (fréquence plus basse).'
        },
        {
          titre: '2. Expression du Redshift cosmologique $z$',
          explication: 'Par définition du décalage spectral $z$ :\n$$1 + z = \\frac{\\lambda_{obs}}{\\lambda_0} = \\frac{\\omega_0}{\\omega} = \\sqrt{\\frac{1 + \\beta}{1 - \\beta}}$$\nEn élevant au carré :\n$$(1 + z)^2 = \\frac{1 + \\beta}{1 - \\beta} \\iff (1 + z)^2 (1 - \\beta) = 1 + \\beta \\iff \\beta \\big[ (1+z)^2 + 1 \\big] = (1+z)^2 - 1$$\nCe qui donne la vitesse relativiste exacte en fonction de $z$ :\n$$\\beta = \\frac{(1 + z)^2 - 1}{(1 + z)^2 + 1}$$'
        },
        {
          titre: '3. Application astrophysique',
          explication: 'Calculons le décalage spectral observé :\n$$z = \\frac{787.2 - 656.0}{656.0} = \\frac{131.2}{656.0} = 0.200$$\nOn a donc $1 + z = 1.200$, d\'où $(1 + z)^2 = 1.440$.\nLa vitesse de fuite relativiste de la galaxie est :\n$$\\beta = \\frac{1.440 - 1}{1.440 + 1} = \\frac{0.440}{2.440} \\approx 0.1803 = 18.0\\%$$\nLa vitesse de récession de la galaxie est donc :\n$$v = 0.1803 \\times 3.0\\times 10^5\\text{ km/s} \\approx 54100\\text{ km/s}$$'
        }
      ],
      conclusion: 'La formule de Doppler relativiste permet de cartographier la vitesse d\'éloignement des galaxies lointaines et d\'établir la loi d\'expansion de Hubble-Lemaître.',
      reflexeDuCorrecteur: 'Pour $z > 0.1$, n\'utilisez jamais la formule classique non relativiste $z \\approx v/c$ car l\'erreur dépasse les $10\\%$.'
    }
  }
];
