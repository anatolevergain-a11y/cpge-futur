import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART11: ExerciseItem[] = [
  {
    id: 'exo-100-66-algebre-reduction-jordan-nilpotente',
    title: 'Indice de Nilpotence & Réduction de Jordan d\'un Endomorphisme Nilpotent',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Nilpotence',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP / Centrale MP',
    dureeEstimeeMin: 40,
    enonce: 'Soit $E$ un espace vectoriel de dimension $n$ et $u \\in \\mathcal{L}(E)$ un endomorphisme nilpotent d\'indice de nilpotence $p$ (c\'est-à-dire $u^p = 0$ et $u^{p-1} \\neq 0$).\n1. Montrer qu\'il existe un vecteur $x_0 \\in E$ tel que la famille $(x_0, u(x_0), \\dots, u^{p-1}(x_0))$ soit libre. En déduire que $p \\le n$.\n2. On suppose dans cette question que $p = n$. Donner la matrice de $u$ dans la base $(u^{n-1}(x_0), u^{n-2}(x_0), \\dots, x_0)$. Quel est son rang ?\n3. Déterminer le commutant de $u$ dans le cas où $p=n$ : $\\mathcal{C}(u) = \\{v \\in \\mathcal{L}(E) \\mid u \\circ v = v \\circ u\\}$.',
    hints: [
      'Pour la liberté, supposer une combinaison linéaire nulle $\\sum_{k=0}^{p-1} \\lambda_k u^k(x_0) = 0$ et composer par $u^{p-1}$.',
      'Le commutant d\'un endomorphisme cyclique est l\'algèbre des polynômes en $u$ : $\\mathbb{K}[u]$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Existence d\'une famille libre de longueur $p$',
          explication: 'Comme $u^{p-1} \\neq 0$, il existe au moins un vecteur $x_0 \\in E$ tel que $u^{p-1}(x_0) \\neq 0$.\nConsidérons une combinaison linéaire nulle :\n$$\\sum_{k=0}^{p-1} \\lambda_k u^k(x_0) = 0$$\nEn composant par $u^{p-1}$, tous les termes avec $k \\ge 1$ s\'annulent car $u^{p+k-1} = 0$, il ne reste que $\\lambda_0 u^{p-1}(x_0) = 0$. Comme $u^{p-1}(x_0) \\neq 0$, on a obligatoirement $\\lambda_0 = 0$.\nPar cascade successive en composant par $u^{p-2}, u^{p-3}, \\dots$, on obtient $\\lambda_1 = 0, \\lambda_2 = 0, \\dots, \\lambda_{p-1} = 0$.\nLa famille $(x_0, u(x_0), \\dots, u^{p-1}(x_0))$ est donc **libre**.\nToute famille libre ayant un cardinal inférieur ou égal à la dimension de l\'espace, on en déduit immédiatement $p \\le n$.'
        },
        {
          titre: '2. Bloc de Jordan nilpotent pour $p=n$',
          explication: 'Si $p=n$, la famille $\\mathcal{B} = (e_1, e_2, \\dots, e_n) = (u^{n-1}(x_0), u^{n-2}(x_0), \\dots, u(x_0), x_0)$ est une base de $E$.\nLes images des vecteurs de base s\'écrivent :\n- $u(e_1) = u^n(x_0) = 0$\n- $u(e_2) = u(u^{n-2}(x_0)) = u^{n-1}(x_0) = e_1$\n- $u(e_k) = e_{k-1}$ pour tout $k \\ge 2$.\nLa matrice de $u$ dans la base $\\mathcal{B}$ est un unique bloc de Jordan nilpotent $J_n$ de rang $n-1$ avec des 1 sur la sur-diagonale et des 0 partout ailleurs :\n$$\\mathrm{Mat}_\\mathcal{B}(u) = \\begin{pmatrix} 0 & 1 & 0 & \\dots & 0 \\\\ 0 & 0 & 1 & \\dots & 0 \\\\ \\vdots & & \\ddots & \\ddots & \\vdots \\\\ 0 & 0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$$'
        },
        {
          titre: '3. Commutant d\'un endomorphisme cyclique nilpotent',
          explication: 'Soit $v \\in \\mathcal{C}(u)$. Comme $x_0$ est un vecteur cyclique, le vecteur $v(x_0)$ se décompose dans la base $\\mathcal{B}$ :\n$$v(x_0) = \\sum_{k=0}^{n-1} a_k u^k(x_0) = P(u)(x_0) \\quad \\text{avec} \\quad P(X) = \\sum_{k=0}^{n-1} a_k X^k$$\nPour tout vecteur de base $e_j = u^j(x_0)$, comme $u$ et $v$ commutent :\n$$v(e_j) = v(u^j(x_0)) = u^j(v(x_0)) = u^j(P(u)(x_0)) = P(u)(u^j(x_0)) = P(u)(e_j)$$\nLes endomorphismes $v$ et $P(u)$ coïncident sur une base de $E$, donc $v = P(u)$.\nLe commutant est donc l\'ensemble des polynômes en $u$ de degré au plus $n-1$ :\n$$\\mathcal{C}(u) = \\mathbb{K}_{n-1}[u] = \\mathrm{Vect}(\\mathrm{id}, u, u^2, \\dots, u^{n-1})$$\nLa dimension du commutant est exactement $\\dim \\mathcal{C}(u) = n$.'
        }
      ],
      conclusion: 'Ce théorème fondamental prouve que tout endomorphisme cyclique possède un commutant de dimension égale à la dimension de l\'espace.',
      reflexeDuCorrecteur: 'Pour déterminer un commutant, montrez que $v$ est entièrement déterminé par l\'image d\'un vecteur cyclique $x_0$.'
    }
  },
  {
    id: 'exo-100-67-cristallo-chlorure-cesium-cscl',
    title: 'Structure Cristalline du Chlorure de Césium $CsCl$ & Rayons Critiques de Coordinence',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Cristallographie & Structures Ioniques',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'Le chlorure de césium $CsCl$ cristallise dans une maille cubique simple d\'anions $Cl^-$ au centre de laquelle se trouve le cation $Cs^+$.\n1. Déterminer la population de la maille et la coordinence du cristal. La structure est-elle cubique centrée (CC) au sens des réseaux de Bravais ?\n2. Établir la relation de contact entre $Cs^+$ et $Cl^-$ le long de la diagonale principale du cube en fonction de $a, r_+$ et $r_-$.\n3. Établir la condition géométrique de non-chevauchement des anions $Cl^-$ le long des arêtes du cube pour déduire le rapport de rayon minimal $\\frac{r_+}{r_-} \\ge \\sqrt{3} - 1 \\approx 0.732$ requis pour la coordinence 8.',
    hints: [
      'Contact anion-cation le long de la grande diagonale : $2(r_+ + r_-) = a\\sqrt{3}$.',
      'Non-chevauchement des anions sur l\'arête : $2 r_- \\le a$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Population et coordinence de $CsCl$',
          explication: '- Anions $Cl^-$ aux 8 sommets du cube : $8 \\times \\frac{1}{8} = 1$ anion.\n- Cation $Cs^+$ au centre du cube : $1 \\times 1 = 1$ cation.\nLa population est de 1 groupement $CsCl$ par maille ($Z = 1$).\n- Coordinence : le cation central $Cs^+$ est équidistant des 8 anions aux sommets $\\implies$ **coordinence [8, 8]**.\n- Réseau de Bravais : **Attention piège classique concours !** Le cristal de $CsCl$ n\'est PAS un réseau cubique centré de Bravais car le sommet et le centre sont occupés par des atomes de natures différentes ($Cl$ et $Cs$). Il s\'agit d\'un réseau **cubique simple** avec un motif à 2 atomes $\\{Cl^-(0,0,0), Cs^+(1/2, 1/2, 1/2)\\}$.'
        },
        {
          titre: '2. Condition de contact anion-cation',
          explication: 'Le contact s\'établit entre l\'anion d\'un sommet et le cation central le long de la demi-diagonale principale du cube de côté $a$ :\n$$r_+ + r_- = \\frac{a\\sqrt{3}}{2} \\iff a = \\frac{2(r_+ + r_-)}{\\sqrt{3}}$$'
        },
        {
          titre: '3. Rapport de rayon critique de Pauling pour la coordinence 8',
          explication: 'Pour que la structure cubique soit stable, les anions voisins situés aux sommets d\'une même arête de longueur $a$ ne doivent pas s\'interpénétrer, ce qui impose la condition géométrique limite d\'encombrement :\n$$2 r_- \\le a$$\nEn remplaçant $a$ par son expression en fonction des rayons ioniques :\n$$2 r_- \\le \\frac{2(r_+ + r_-)}{\\sqrt{3}} \\iff \\sqrt{3} r_- \\le r_+ + r_-$$\n$$(\\sqrt{3} - 1) r_- \\le r_+ \\iff \\frac{r_+}{r_-} \\ge \\sqrt{3} - 1 \\approx 0.732$$\nSi le rapport $\\frac{r_+}{r_-}$ est supérieur à $0.732$, la coordinence 8 est thermodynamiquement stable. Si $\\frac{r_+}{r_-}$ descend en dessous de $0.732$ (comme pour $NaCl$ où $\\frac{r(Na^+)}{r(Cl^-)} = \\frac{102\\text{ pm}}{181\\text{ pm}} \\approx 0.56$), les anions se touchent et repoussent le cation, forçant la structure à basculer vers la coordinence octaédrique 6 de type $NaCl$ ($0.414 \\le r_+/r_- < 0.732$).'
        }
      ],
      conclusion: 'Les règles de Pauling sur les rapports de rayons ioniques critiques expliquent la géométrie et la coordinence de tous les solides ioniques et minéraux terrestres.',
      reflexeDuCorrecteur: 'Coordinence 8 cubique : $r_+/r_- \\ge \\sqrt{3}-1 = 0.732$. Coordinence 6 octaédrique : $r_+/r_- \\ge \\sqrt{2}-1 = 0.414$. Coordinence 4 tétraédrique : $r_+/r_- \\ge \\sqrt{3/2}-1 = 0.225$.'
    }
  },
  {
    id: 'exo-100-68-optique-fibre-optique-saut-indice',
    title: 'Fibre Optique à Saut d\'Indice & Dispersion Intermodale',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Optique Géométrique & Télécommunications',
    filieres: ['BCPST', 'PC', 'PSI', 'MP'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Une fibre optique à saut d\'indice comprend un cœur cylindrique d\'indice $n_1 = 1.48$ et une gaine d\'indice $n_2 = 1.46 < n_1$. La fibre est plongée dans l\'air ($n_0 = 1.00$).\n1. Établir l\'expression de l\'ouverture numérique de la fibre $\\mathrm{ON} = n_0 \\sin\\theta_{max} = \\sqrt{n_1^2 - n_2^2}$ garantissant le guidage par réflexion totale à l\'interface cœur-gaine. Calculer numériquement $\\theta_{max}$.\n2. Soit une impulsion lumineuse très brève injectée à l\'entrée d\'une fibre de longueur $L = 1.0\\text{ km}$. Calculer la durée de propagation du rayon axial le plus rapide $t_{min}$ et du rayon zigzaguant le plus lent $t_{max}$.\n3. En déduire l\'élargissement temporel intermodal $\\Delta t = t_{max} - t_{min}$ et le débit binaire maximal théorique $D_{max} \\approx \\frac{1}{2\\Delta t}$ de cette fibre multimode.',
    hints: [
      'Angle limite de réflexion totale à l\'interface cœur-gaine : $\\sin i_c = n_2 / n_1$.',
      'Le rayon le plus lent parcourt une distance géométrique $L / \\sin i_c$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Ouverture numérique et cône d\'acceptance',
          explication: 'À l\'interface cœur-gaine, la réflexion totale a lieu si l\'angle d\'incidence interne $i$ vérifie $i \\ge i_c = \\arcsin(n_2 / n_1)$.\nÀ l\'entrée de la fibre, la réfraction air-cœur sous l\'angle incident $\\theta$ donne : $n_0 \\sin\\theta = n_1 \\sin r = n_1 \\cos i$.\nLa condition limite de réflexion totale $i = i_c$ impose $\\cos i = \\sqrt{1 - \\sin^2 i_c} = \\sqrt{1 - (n_2/n_1)^2} = \\frac{\\sqrt{n_1^2 - n_2^2}}{n_1}$.\nEn substituant :\n$$\\mathrm{ON} = n_0 \\sin\\theta_{max} = \\sqrt{n_1^2 - n_2^2}$$\nApplication numérique :\n$$\\mathrm{ON} = \\sqrt{1.48^2 - 1.46^2} = \\sqrt{2.1904 - 2.1316} = \\sqrt{0.0588} \\approx 0.2425$$\n$$\\theta_{max} = \\arcsin(0.2425) \\approx 14.0^\\circ$$\nLe cône d\'acceptance d\'entrée a un demi-angle au sommet de $14^\\circ$.'
        },
        {
          titre: '2. Temps de parcours des rayons extrêmes',
          explication: 'La vitesse de phase de la lumière dans le cœur est $v = c / n_1$.\n- Rayon axial le plus rapide (propageant en ligne droite sur l\'axe à $i = 90^\\circ$) : distance parcourue $d_{min} = L$.\n$$t_{min} = \\frac{L}{v} = \\frac{L n_1}{c}$$\n- Rayon le plus lent (zigzaguant à l\'angle critique $i = i_c$) : distance parcourue $d_{max} = \\frac{L}{\\sin i_c} = L \\frac{n_1}{n_2}$.\n$$t_{max} = \\frac{d_{max}}{v} = \\frac{L n_1^2}{c n_2}$$\nPour $L = 1.0\\text{ km} = 1000\\text{ m}$ :\n$$t_{min} = \\frac{1000 \\times 1.48}{3.0\\times 10^8} \\approx 4.9333\\;\\mu\\text{s}$$\n$$t_{max} = \\frac{1000 \\times 1.48^2}{3.0\\times 10^8 \\times 1.46} \\approx 5.0010\\;\\mu\\text{s}$$'
        },
        {
          titre: '3. Dispersion intermodale et débit maximal',
          explication: 'L\'élargissement de l\'impulsion lumineuse (dispersion intermodale) vaut :\n$$\\Delta t = t_{max} - t_{min} = \\frac{L n_1}{c} \\left( \\frac{n_1}{n_2} - 1 \\right) = 5.0010 - 4.9333 = 0.0677\\;\\mu\\text{s} = 67.7\\text{ ns/km}$$\nPour éviter le chevauchement de deux bits consécutifs (interférence intersymbole), la période minimale des bits doit vérifier $T_{bit} \\ge 2 \\Delta t$ :\n$$D_{max} \\approx \\frac{1}{2 \\Delta t} = \\frac{1}{2 \\times 67.7\\times 10^{-9}\\text{ s}} \\approx 7.4\\times 10^6\\text{ bit/s} = 7.4\\text{ Mbit/s}$$\nPour dépasser cette limite et atteindre des débits de plusieurs Terabits/s sur de longues distances transatlantiques, les télécommunications utilisent des **fibres optiques monomodes** (diamètre de cœur minuscule $\\sim 9\\;\\mu\\text{m}$) où seul le mode axial peut se propager, éliminant totalement la dispersion intermodale.'
        }
      ],
      conclusion: 'La dispersion intermodale limite sévèrement les fibres multimodes, justifiant l\'essor des fibres optiques monomodes et des fibres à gradient d\'indice.',
      reflexeDuCorrecteur: 'Retenez $\\Delta t = \\frac{L n_1}{c} \\frac{\\Delta n}{n_2} \\approx \\frac{L n_1 \\Delta n}{c}$.'
    }
  },
  {
    id: 'exo-100-69-algebre-reduction-cayley-hamilton-inverse',
    title: 'Théorème de Cayley-Hamilton & Calcul de l\'Inverse et des Puissances Matricatrices',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Cayley-Hamilton',
    filieres: ['BCPST', 'MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / Centrale PC',
    dureeEstimeeMin: 35,
    enonce: 'Soit la matrice carrée $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 2 & 3 \\\\ 0 & 0 & 3 \\end{pmatrix} \\in \\mathcal{M}_3(\\mathbb{R})$.\n1. Calculer le polynôme caractéristique $\\chi_A(X) = \\det(X I_3 - A)$.\n2. Vérifier le théorème de Cayley-Hamilton en calculant $\\chi_A(A)$.\n3. En exploitant directement cette identité polynomiale, exprimer l\'inverse $A^{-1}$ comme un polynôme en $A$.\n4. Déterminer le reste de la division euclidienne de $X^n$ par $\\chi_A(X)$ et en déduire l\'expression explicite de $A^n$ pour tout $n \\in \\mathbb{N}$.',
    hints: [
      'Comme la matrice est triangulaire supérieure, ses valeurs propres sont ses coefficients diagonaux.',
      'Si $\\chi_A(X) = X^3 - c_2 X^2 + c_1 X - c_0$, alors $A(A^2 - c_2 A + c_1 I) = c_0 I$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul du polynôme caractéristique',
          explication: 'Comme $A$ est une matrice triangulaire supérieure, son déterminant est le produit des éléments diagonaux :\n$$\\chi_A(X) = \\det(X I_3 - A) = (X - 1)(X - 2)(X - 3)$$\nEn développant :\n$$\\chi_A(X) = (X^2 - 3X + 2)(X - 3) = X^3 - 6X^2 + 11X - 6$$'
        },
        {
          titre: '2. Théorème de Cayley-Hamilton',
          explication: 'D\'après le théorème de Cayley-Hamilton, tout endomorphisme annule son propre polynôme caractéristique :\n$$\\chi_A(A) = A^3 - 6 A^2 + 11 A - 6 I_3 = 0_{\\mathcal{M}_3(\\mathbb{R})}$$'
        },
        {
          titre: '3. Calcul de la matrice inverse $A^{-1}$',
          explication: 'Comme $\\det(A) = 6 \\neq 0$, $A$ est inversible. En isolant la matrice identité dans l\'identité de Cayley-Hamilton :\n$$6 I_3 = A^3 - 6 A^2 + 11 A = A (A^2 - 6 A + 11 I_3)$$\nEn multipliant par $A^{-1}$ à gauche et en divisant par 6 :\n$$A^{-1} = \\frac{1}{6} (A^2 - 6 A + 11 I_3)$$\nCette relation permet d\'inverser la matrice $A$ sans calculer la moindre comatrice ni échelonner par pivot de Gauss !'
        },
        {
          titre: '4. Calcul de $A^n$ par division euclidienne',
          explication: 'Effectuons la division euclidienne de $X^n$ par $\\chi_A(X) = (X-1)(X-2)(X-3)$ :\n$$X^n = Q(X) \\chi_A(X) + R(X) \\quad \\text{avec} \\quad R(X) = a X^2 + b X + c$$\nEn évaluant cette identité aux trois racines 1, 2, 3 qui annulent $\\chi_A$ :\n- Pour $X=1$ : $1 = a + b + c$\n- Pour $X=2$ : $2^n = 4a + 2b + c$\n- Pour $X=3$ : $3^n = 9a + 3b + c$\nEn résolvant le système de Vandermonde :\n- $a = \\frac{3^n - 2 \\cdot 2^n + 1}{2}$\n- $b = \\frac{-3^n \\cdot 3 + 2^n \\cdot 8 - 5}{2} = \\frac{-3^{n+1} + 2^{n+3} - 5}{2}$\n- $c = 3^n - 3 \\cdot 2^n + 3$\nEn évaluant l\'égalité en $A$ avec $\\chi_A(A) = 0$ :\n$$A^n = R(A) = a A^2 + b A + c I_3$$\nOn obtient $A^n$ par une simple combinaison linéaire de $I_3, A$ et $A^2$.'
        }
      ],
      conclusion: 'La division euclidienne par le polynôme caractéristique ou minimal est la méthode universelle pour calculer les puissances de matrices non diagonalisables ou de grande taille.',
      reflexeDuCorrecteur: 'Pour inverser une matrice via son polynôme caractéristique : factorisez $A$ par la droite et isolez le terme constant.'
    }
  },
  {
    id: 'exo-100-70-chimie-organique-protection-deprotection',
    title: 'Stratégie de Protection / Déprotection de Groupements Fonctionnels en Synthèse Multi-Étapes',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-stereochimie-biomolecules',
    chapitreTitre: 'Chimie Organique Avancée & Stratégie de Synthèse',
    filieres: ['BCPST', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / Mines PC',
    dureeEstimeeMin: 35,
    enonce: 'On souhaite préparer l\'acide 4-hydroxy-4-méthylpentanoïque à partir du 4-oxopentanoate d\'éthyle $CH_3-CO-(CH_2)_2-COOEt$ par addition de bromure de méthylmagnésium $CH_3MgBr$.\n1. Expliquer pourquoi l\'addition directe de l\'organomagnésien sur la molécule de départ conduit à un échec cuisant et à un mélange complexe de sous-produits.\n2. Proposer une séquence réactionnelle complète utilisant la protection de la cétone sous forme d\'acétal cyclique par l\'éthane-1,2-diol (glycol) en catalyse acide ($APTS$) avec élimination d\'eau par appareil de Dean-Stark.\n3. Détailler l\'addition du magnésien sur l\'ester protégé, l\'hydrolyse acide déprotectrice et l\'obtention du produit final.',
    hints: [
      'Les organomagnésiens réagissent à la fois sur les cétones et sur les esters (addition double sur l\'ester).',
      'Les acétals sont parfaitement stables en milieu basique et réducteur, mais s\'hydrolysent instantanément en milieu acide aqueux.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Incompatibilité de réactivité sans protection',
          explication: 'Le réactif de départ est polyfonctionnel : il comporte une fonction cétone et une fonction ester. L\'organomagnésien $CH_3MgBr$ est un carbanion nucléophile puissant qui attaque préférentiellement la cétone (plus électrophile que l\'ester), mais réagit aussi sur l\'ester pour donner une cétone puis un alcool tertiaire après une double addition. Il est impossible de cibler l\'une des fonctions sans masquer l\'autre : l\'addition directe détruit les deux fonctions carbonyle.'
        },
        {
          titre: '2. Protection régiosélective de la cétone sous forme de dioxolane',
          explication: 'Les aldéhydes et cétones réagissent réversiblement avec les diols en présence d\'un catalyseur acide (acide para-toluènesulfonique APTS) pour former un 1,3-dioxolane cyclique stable :\n$$CH_3-CO-(CH_2)_2-COOEt + HO-CH_2-CH_2-OH \\underset{Dean-Stark}{\\overset{APTS, \\Delta}{\\rightleftharpoons}} \\text{Acétal cyclique} + H_2O$$\nLa fonction ester ne s\'acétalise pas dans ces conditions (chimiosélectivité de l\'acétalisation pour les cétones). L\'eau formée est éliminée au fur et à mesure par distillation hétéroazéotropique à l\'aide d\'un appareil de Dean-Stark avec du toluène, ce qui déplace l\'équilibre vers un rendement quantitatif de $100\\%$.'
        },
        {
          titre: '3. Réaction sur l\'ester et déprotection finale',
          explication: '1. **Attaque du magnésien** : L\'acétal est totalement inerte vis-à-vis des nucléophiles et des bases. On traite par 2 équivalents de $CH_3MgBr$ : l\'addition sur l\'ester suivie de l\'élimination de l\'éthanolate régénère une méthylcétone intermédiaire, qui subit immédiatement une seconde addition pour donner un alcool tertiaire après hydrolyse.\n2. **Déprotection acide** : On traite le milieu par de l\'acide chlorhydrique dilué chaud ($H_3O^+ / H_2O$) : la liaison acétal est hydrolysée, régénérant la cétone initiale et libérant le glycol volatil.\n3. Pour obtenir l\'acide ciblé, on peut inverser la stratégie ou oxyder régiosélectivement.'
        }
      ],
      conclusion: 'La protection réversible par acétalisation est l\'un des outils les plus puissants de la chimie organique pour diriger la réactivité des molécules polyfonctionnelles.',
      reflexeDuCorrecteur: 'Acétals : inertes en milieu basique, déprotégés quantitativement par simple traitement acide aqueux ($H_3O^+$).'
    }
  }
];
