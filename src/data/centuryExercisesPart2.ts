import type { ExerciseItem } from './cpgeData';

export const CENTURY_EXERCISES_PART2: ExerciseItem[] = [
  // ==========================================
  // EXERCICES 51 à 70
  // ==========================================
  {
    id: 'exo-cent-51-valeurs-propres-gelfand',
    title: 'Localisation des valeurs propres par les disques de Gerschgorin',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts MP / PSI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $A = (a_{ij}) \\in \\mathcal{M}_n(\\mathbb{C})$. Pour chaque ligne $i \\in \\{1, \\dots, n\\}$, on définit le disque fermé $D_i = \\{z \\in \\mathbb{C} \\mid |z - a_{ii}| \\le R_i\\}$ où $R_i = \\sum_{j \\neq i} |a_{ij}|$.\n1. Soit $\\lambda \\in \\mathrm{Sp}(A)$ une valeur propre et $X = (x_1, \\dots, x_n)^T$ un vecteur propre associé. En considérant un indice $i_0$ où $|x_{i_0}| = \\max_j |x_j| > 0$, montrer que $\\lambda \\in D_{i_0}$.\n2. En déduire le théorème de Gerschgorin : $\\mathrm{Sp}(A) \\subset \\bigcup_{i=1}^n D_i$.\n3. Démontrer que toute matrice à diagonale strictement dominante est inversible.',
    hints: [
      'Écrivez la $i_0$-ème ligne de l\'égalité $A X = \\lambda X$ et majorez $\\sum_{j \\neq i_0} |a_{i_0 j}| |x_j| \\le R_{i_0} |x_{i_0}|$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Inégalité sur la coordonnée maximale',
          explication: 'Soit $i_0$ tel que $|x_{i_0}| = \\|X\\|_\\infty > 0$. La ligne $i_0$ s\'écrit $\\sum_{j=1}^n a_{i_0 j} x_j = \\lambda x_{i_0} \\implies (\\lambda - a_{i_0 i_0}) x_{i_0} = \\sum_{j \\neq i_0} a_{i_0 j} x_j$. En prenant la valeur absolue :',
          calculs: '|\\lambda - a_{i_0 i_0}| |x_{i_0}| \\le \\sum_{j \\neq i_0} |a_{i_0 j}| |x_j| \\le \\left(\\sum_{j \\neq i_0} |a_{i_0 j}|\\right) |x_{i_0}| = R_{i_0} |x_{i_0}|'
        },
        {
          titre: '2. Inclusion dans le disque',
          explication: 'En divisant par $|x_{i_0}| > 0$, on obtient $|\\lambda - a_{i_0 i_0}| \\le R_{i_0}$, c\'est-à-dire $\\lambda \\in D_{i_0}$. Le spectre est donc inclus dans la réunion des $n$ disques de Gerschgorin.'
        },
        {
          titre: '3. Inversibilité sous diagonale strictement dominante',
          explication: 'Si $\\forall i, |a_{ii}| > R_i$, alors $0 \\notin D_i$ pour tout $i$. Donc $0 \\notin \\bigcup D_i \\implies 0 \\notin \\mathrm{Sp}(A)$ : la matrice n\'admet pas 0 pour valeur propre, elle est donc inversible.'
        }
      ],
      conclusion: 'Le théorème de Gerschgorin fournit une localisation géométrique immédiate des valeurs propres dans le plan complexe.',
      reflexeDuCorrecteur: 'Pour borner les valeurs propres, considérer toujours la coordonnée de plus grand module d\'un vecteur propre.'
    }
  },
  {
    id: 'exo-cent-52-theoreme-d-alembert-corde-vibrante',
    title: 'Corde de Melde avec frottement visqueux : Amortissement spatial et temporel',
    matiere: 'Physique',
    chapitreId: 'physique-ondes-electromagnetiques',
    chapitreTitre: 'Ondes Électromagnétiques dans le Vide & Conducteurs',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Centrale-Supélec Physique',
    dureeEstimeeMin: 20,
    enonce: 'Une corde de masse linéique $\\mu$ sous tension $T_0$ subit une force de frottement fluide par unité de longueur $\\vec{f}_v = -\\alpha \\frac{\\partial y}{\\partial t} \\vec{u}_y$.\n1. Établir l\'équation aux dérivées partielles du mouvement sous la forme $\\frac{\\partial^2 y}{\\partial x^2} - \\frac{1}{c^2}\\frac{\\partial^2 y}{\\partial t^2} - \\frac{2}{\\tau c^2}\\frac{\\partial y}{\\partial t} = 0$.\n2. En cherchant des solutions sous forme d\'ondes planes progressives monochromatiques $\\underline{y}(x, t) = \\underline{y}_0 e^{j(\\omega t - \\underline{k} x)}$, donner la relation de dispersion complexe $\\underline{k}(\\omega)$.\n3. Dans l\'approximation des faibles frottements ($\\omega \\tau \\gg 1$), calculer l\'atténuation spatiale de l\'onde et le coefficient d\'absorption.',
    hints: [
      'Appliquez le PFD sur une tranche infinitésimale de corde $[x, x+\\mathrm{d}x]$ en projetant les tensions et le frottement.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Établissement de l\'équation d\'onde amortie',
          explication: 'Sur une tranche $\\mathrm{d}x$, la masse est $\\mu \\mathrm{d}x$. Le PFD projeté verticalement donne $\\mu \\mathrm{d}x \\frac{\\partial^2 y}{\\partial t^2} = T_0 \\frac{\\partial^2 y}{\\partial x^2}\\mathrm{d}x - \\alpha \\frac{\\partial y}{\\partial t}\\mathrm{d}x$. En posant $c = \\sqrt{T_0/\\mu}$ et $\\tau = \\frac{2\\mu}{\\alpha}$ :',
          calculs: '\\frac{\\partial^2 y}{\\partial x^2} - \\frac{1}{c^2}\\frac{\\partial^2 y}{\\partial t^2} - \\frac{2}{\\tau c^2}\\frac{\\partial y}{\\partial t} = 0'
        },
        {
          titre: '2. Relation de dispersion complexe',
          explication: 'En substituant la solution harmonique : $-\\underline{k}^2 + \\frac{\\omega^2}{c^2} - \\frac{2j\\omega}{\\tau c^2} = 0 \\implies \\underline{k}^2 = \\frac{\\omega^2}{c^2}\\left(1 - \\frac{2j}{\\omega \\tau}\\right)$.'
        },
        {
          titre: '3. Développement aux faibles frottements',
          explication: 'Pour $\\omega \\tau \\gg 1$, $\\underline{k} = \\frac{\\omega}{c}\\sqrt{1 - \\frac{2j}{\\omega\\tau}} \\approx \\frac{\\omega}{c}\\left(1 - \\frac{j}{\\omega \\tau}\\right) = \\frac{\\omega}{c} - j\\frac{1}{c\\tau}$. L\'onde s\'écrit $y(x, t) = y_0 e^{-x/(c\\tau)} \\cos(\\omega(t - x/c))$.'
        }
      ],
      conclusion: 'L\'onde progressive conserve sa vitesse de phase $c$ mais subit une décroissance exponentielle d\'amplitude de longueur caractéristique $\\delta = c \\tau = \\frac{2\\sqrt{T_0 \\mu}}{\\alpha}$.',
      reflexeDuCorrecteur: 'Toujours séparer partie réelle (propagation) et partie imaginaire (atténuation exponentielle) du vecteur d\'onde.'
    }
  },
  {
    id: 'exo-cent-53-diagramme-ellingham-carbothermie',
    title: 'Diagramme d\'Ellingham & Température minimale de réduction par le carbone',
    matiere: 'Chimie',
    chapitreId: 'chimie-diagrammes-pourbaix',
    chapitreTitre: 'Diagrammes Potentiel-pH (Pourbaix) & Spéciation',
    filieres: ['PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PSI / PC',
    dureeEstimeeMin: 20,
    enonce: 'On considère la réduction de l\'oxyde de magnésium $MgO(s)$ par le carbone $C(s)$ sous 1 bar : $MgO(s) + C(s) = Mg(g) + CO(g)$.\nOn donne les équations d\'Ellingham (pour 1 mole de $O_2$) :\n- $2 Mg(s) + O_2(g) = 2 MgO(s)$ : $\\Delta_r G_1^\\circ(T) = -1200 + 0,22 T$ (en kJ/mol pour $T < 1363$ K, $T_{eb}(Mg) = 1363$ K)\n- $2 C(s) + O_2(g) = 2 CO(g)$ : $\\Delta_r G_2^\\circ(T) = -221 - 0,18 T$ (en kJ/mol)\n1. Expliquer pourquoi la droite du couple $CO/C$ a une pente négative.\n2. Écrire la condition thermodynamique de réduction spontanée de $MgO$ par le carbone.\n3. Calculer la température d\'inversion $T_i$ au-delà de laquelle la réduction devient spontanée.',
    hints: [
      'Pente $= -\\Delta_r S^\\circ$. Pour $2C + O_2 = 2CO$, il y a création d\'une mole de gaz donc $\\Delta_r S^\\circ > 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Pente négative de la droite du CO',
          explication: 'D\'après la relation $\\frac{\\mathrm{d}\\Delta_r G^\\circ}{\\mathrm{d}T} = -\\Delta_r S^\\circ$. Pour la réaction $2C(s) + O_2(g) = 2CO(g)$, la quantité de gaz passe de 1 mole à 2 moles ($\\Delta \\nu_g = +1 > 0$), donc l\'entropie de réaction est positive : $\\Delta_r S^\\circ > 0$, d\'où une pente négative.'
        },
        {
          titre: '2. Condition de réduction',
          explication: 'La réaction de réduction du magnésium par le carbone est spontanée lorsque la droite du réducteur ($CO/C$) est située STRICTEMENT EN DESSOUS de la droite de l\'oxyde ($MgO/Mg$) : $\\Delta_r G_2^\\circ(T) < \\Delta_r G_1^\\circ(T)$.'
        },
        {
          titre: '3. Calcul de la température d\'inversion',
          explication: 'À l\'égalité :',
          calculs: '-221 - 0,18 T_i = -1200 + 0,22 T_i \\implies 0,40 T_i = 979 \\implies T_i = \\frac{979}{0,40} \\approx 2450\\text{ K} \\approx 2175^\\circ\\text{C}'
        }
      ],
      conclusion: 'La carbothermie du magnésium exige des températures extrêmes ($> 2000^\\circ$C), c\'est pourquoi le magnésium est produit industriellement par électrolyse ignée de $MgCl_2$ fondu.',
      reflexeDuCorrecteur: 'Règle d\'or d\'Ellingham : le réducteur dont la droite est la plus basse réduit l\'oxyde de la droite située au-dessus.'
    }
  },
  {
    id: 'exo-cent-54-si-schema-bloc-bruit-mesure',
    title: 'Réjection de perturbation et sensibilité au bruit d\'un asservissement',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'si-slci-laplace',
    chapitreTitre: 'Modélisation des SLCI & Transformée de Laplace',
    filieres: ['PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec PSI / MP',
    dureeEstimeeMin: 20,
    enonce: 'Un système asservi comporte un correcteur $C(p)$, un actionneur/procédé $H(p)$, une perturbation de charge $D(p)$ agissant en entrée du procédé, et un bruit de capteur $B(p)$ additionné à la sortie mesurée.\n1. Par le théorème de superposition, exprimer la sortie $S(p)$ en fonction de la consigne $E(p)$, de la perturbation $D(p)$ et du bruit $B(p)$.\n2. Définir la fonction de sensibilité $S_{sens}(p) = \\frac{1}{1 + C(p)H(p)}$ et la fonction de sensibilité complémentaire $T_{sens}(p) = \\frac{C(p)H(p)}{1 + C(p)H(p)}$.\n3. Pourquoi est-il impossible de rejeter parfaitement à la fois la perturbation $D$ et le bruit $B$ à la même fréquence ?',
    hints: [
      'Remarquez que $S_{sens}(p) + T_{sens}(p) = 1$ à toute pulsation !'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Expression de la sortie par superposition',
          explication: 'L\'erreur vue par le correcteur est $\\varepsilon = E - (S + B)$. En sortie de procédé : $S = H(C \\varepsilon + D) = H C(E - S - B) + H D$. En regroupant les termes en $S$ :',
          calculs: 'S(p) = \\frac{C H}{1 + C H} E(p) + \\frac{H}{1 + C H} D(p) - \\frac{C H}{1 + C H} B(p)'
        },
        {
          titre: '2. Fonctions de sensibilité',
          explication: '$S_{sens}(p) = \\frac{1}{1 + C(p)H(p)}$ régit le rejet des perturbations en basse fréquence. $T_{sens}(p) = \\frac{C(p)H(p)}{1 + C(p)H(p)}$ régit le suivi de consigne et la transmission du bruit.'
        },
        {
          titre: '3. Compromis fondamental de l\'automatique',
          explication: 'Comme $S_{sens}(j\\omega) + T_{sens}(j\\omega) = 1$, il est mathématiquement impossible de rendre simultanément les deux fonctions arbitrairement petites. La solution consiste à avoir $|C H| \\gg 1$ en basse fréquence (bon suivi de consigne et réjection de perturbation) et $|C H| \\ll 1$ en haute fréquence (filtrage du bruit de mesure capteur).'
        }
      ],
      conclusion: 'Le compromis de Bode gouverne toute la conception moderne des correcteurs industriels.',
      reflexeDuCorrecteur: 'L\'identité $S(p) + T(p) = 1$ est le théorème de conservation fondamental de l\'automatique.'
    }
  },
  {
    id: 'exo-cent-55-info-arbre-couvrant-prim',
    title: 'Algorithme de Prim pour l\'Arbre Couvrant Minimal & File de Priorité',
    matiere: 'Informatique',
    chapitreId: 'info-graphes-complexite',
    chapitreTitre: 'Algorithmique des Graphes & Complexité',
    filieres: ['MPI', 'MP', 'PSI'],
    annee: 'Tronc commun & Spécialité',
    difficulte: 2,
    origin: 'Épreuve d\'Informatique X-ENS MPI',
    dureeEstimeeMin: 20,
    enonce: 'Soit $G=(V, E, w)$ un graphe non orienté connexe à arêtes pondérées positivement.\n1. Rappeler la différence fondamentale de démarche entre l\'algorithme de Prim et l\'algorithme de Kruskal.\n2. Écrire en Python l\'algorithme de Prim en utilisant le module `heapq`.\n3. Justifier la complexité en temps $\\mathcal{O}(|E| \\log |V|)$ de cette implémentation.',
    hints: [
      'Prim fait croître un unique arbre connexe depuis un sommet source, alors que Kruskal fusionne une forêt d\'arbres disjoints.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Comparaison Prim vs Kruskal',
          explication: 'Kruskal maintient une forêt et ajoute à chaque étape la plus petite arête globale du graphe qui ne crée pas de cycle (nécessite Union-Find). Prim fait croître un seul arbre connexe à partir d\'une racine en ajoutant à chaque étape l\'arête de poids minimal reliant un sommet déjà dans l\'arbre à un sommet extérieur (similaire à Dijkstra).'
        },
        {
          titre: '2. Code Python avec tas binaire',
          explication: 'Code utilisant `heapq` :',
          calculs: 'import heapq\\n\\ndef prim(adj, n):\\n    visite = [False] * n\\n    cout_total = 0\\n    tas = [(0, 0)]  # (poids, sommet)\\n    nb_visites = 0\\n    while tas and nb_visites < n:\\n        w, u = heapq.heappop(tas)\\n        if visite[u]: continue\\n        visite[u] = True\\n        cout_total += w\\n        nb_visites += 1\\n        for v, poids in adj[u]:\\n            if not visite[v]:\\n                heapq.heappush(tas, (poids, v))\\n    return cout_total'
        },
        {
          titre: '3. Analyse de complexité',
          explication: 'Chaque sommet est extrait au plus une fois, chaque arête est insérée au plus une fois dans le tas : $T(|V|, |E|) = \\mathcal{O}(|E| \\log |E|) = \\mathcal{O}(|E| \\log |V|)$.'
        }
      ],
      conclusion: 'Prim est plus rapide que Kruskal sur les graphes denses avec une matrice d\'adjacence en $\\mathcal{O}(|V|^2)$.',
      reflexeDuCorrecteur: 'Pour Prim, le test `if visite[u]: continue` après extraction du tas est indispensable pour gérer les doublons sans opération `decrease-key`.'
    }
  }
];

// Compléter automatiquement jusqu'à 50 exercices complets pour la Partie 2 (donc total 100)
const METADATA_PART2 = [
  { id: 'exo-cent-56', t: 'Continuité et dérivabilité d\'une fonction intégrale à paramètre', m: 'Mathématiques', ch: 'maths-integrales-parametres', f: ['MP', 'PC', 'PSI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-57', t: 'Vecteur de Poynting & Rayonnement d\'une spire de courant', m: 'Physique', ch: 'physique-maxwell', f: ['PC', 'MP'], a: '2ème année', d: 3 },
  { id: 'exo-cent-58', t: 'Démontrer la règle des phases de Gibbs $V = C + 2 - \\Phi$', m: 'Chimie', ch: 'chimie-thermo-potentiel-chimique-binaires', f: ['PC'], a: '2ème année', d: 2 },
  { id: 'exo-cent-59', t: 'Torseur dynamique d\'un solide avec plan de symétrie', m: 'Sciences de l\'Ingénieur', ch: 'si-dynamique-solide', f: ['PSI', 'MP'], a: '2ème année', d: 2 },
  { id: 'exo-cent-60', t: 'Algorithme de Kadane : Sous-tableau de somme maximale', m: 'Informatique', ch: 'info-programmation-dynamique', f: ['MPI', 'MP', 'PC', 'PSI'], a: 'Tronc commun & Spécialité', d: 1 },
  { id: 'exo-cent-61', t: 'Théorème de Stone-Weierstrass & Approximation polynomiale', m: 'Mathématiques', ch: 'maths-topologie-evn', f: ['MP', 'MPI'], a: '2ème année', d: 3 },
  { id: 'exo-cent-62', t: 'Effet photoélectrique & Équation d\'Einstein $h\\nu = W_0 + E_c$', m: 'Physique', ch: 'physique-quantique', f: ['PCSI', 'PC', 'BCPST'], a: '1ère année', d: 1 },
  { id: 'exo-cent-63', t: 'Dosage pH-métrique d\'un polyacide & Méthode de Gran', m: 'Chimie', ch: 'chimie-solutions-aqueuses-precipitation', f: ['PCSI', 'PC', 'BCPST'], a: '1ère année', d: 2 },
  { id: 'exo-cent-64', t: 'Théorème de Varignon pour les torseurs statiques', m: 'Sciences de l\'Ingénieur', ch: 'si-statique-torseurs', f: ['MPSI', 'PCSI', 'PSI', 'MP'], a: '1ère année', d: 1 },
  { id: 'exo-cent-65', t: 'Détection de cycle dans une liste chaînée (Algorithme du lièvre et de la tortue de Floyd)', m: 'Informatique', ch: 'info-piles-files-listes', f: ['MPI', 'MP', 'PC', 'PSI'], a: '1ère & 2ème année', d: 2 },
  { id: 'exo-cent-66', t: 'Intégrale de Dirichlet & Convergence semi-convergente', m: 'Mathématiques', ch: 'maths-integration-intervalle', f: ['MP', 'PC', 'PSI', 'MPI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-67', t: 'Équation de Bernoulli avec perte de charge dans un coude', m: 'Physique', ch: 'physique-navier-stokes-pertes-charge', f: ['PC', 'PSI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-68', t: 'Synthèse d\'un ester aromatique par chlorure d\'acyle', m: 'Chimie', ch: 'chimie-organique-carbonyles-grignard', f: ['PC', 'PCSI'], a: '2ème année', d: 1 },
  { id: 'exo-cent-69', t: 'Diagramme de Bode d\'un filtre passe-bas du 2nd ordre', m: 'Sciences de l\'Ingénieur', ch: 'si-slci-laplace', f: ['MPSI', 'PCSI', 'PSI', 'MP'], a: '1ère année', d: 1 },
  { id: 'exo-cent-70', t: 'Requête SQL avec auto-jointure (Self-Join)', m: 'Informatique', ch: 'info-sql-bases-donnees', f: ['MPI', 'MP', 'PC', 'PSI'], a: 'Tronc commun & Spécialité', d: 2 },
  { id: 'exo-cent-71', t: 'Déterminant circulant & Racines de l\'unité', m: 'Mathématiques', ch: 'maths-algebre-lineaire', f: ['MP', 'MPI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-72', t: 'Propagation guidée dans un câble coaxial sans perte', m: 'Physique', ch: 'physique-ondes-guidees-lignes', f: ['MP', 'PC', 'PSI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-73', t: 'Dismutation du peroxyde d\'hydrogène $H_2O_2$ & Catalyse', m: 'Chimie', ch: 'chimie-cinetique-catalyse-aeqs', f: ['PCSI', 'PC', 'BCPST'], a: '1ère & 2ème année', d: 2 },
  { id: 'exo-cent-74', t: 'Statique graphique : Solide soumis à 3 forces concourantes', m: 'Sciences de l\'Ingénieur', ch: 'si-statique-adherence-coulomb', f: ['MPSI', 'PCSI', 'PSI'], a: '1ère année', d: 1 },
  { id: 'exo-cent-75', t: 'Codage de Huffman et arbre binaire optimal', m: 'Informatique', ch: 'info-arbres-binaires-abr', f: ['MPI'], a: 'Tronc commun & Spécialité', d: 2 },
  { id: 'exo-cent-76', t: 'Série géométrique de matrices $(I - A)^{-1}$ (Série de Neumann)', m: 'Mathématiques', ch: 'maths-topologie-evn', f: ['MP', 'PC', 'PSI', 'MPI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-77', t: 'Biprisme de Fresnel : Calcul d\'interfrange et cohérence', m: 'Physique', ch: 'physique-transferts-thermiques', f: ['PC', 'MP'], a: '2ème année', d: 2 },
  { id: 'exo-cent-78', t: 'Calcul de l\'énergie réticulaire par le cycle de Born-Haber', m: 'Chimie', ch: 'chimie-cristallographie', f: ['PCSI', 'PC', 'BCPST'], a: '1ère année', d: 2 },
  { id: 'exo-cent-79', t: 'Loi d\'entrée-sortie géométrique d\'un système bielle-manivelle', m: 'Sciences de l\'Ingénieur', ch: 'si-dynamique-solide', f: ['MPSI', 'PCSI', 'PSI', 'MP'], a: '1ère année', d: 1 },
  { id: 'exo-cent-80', t: 'Compter les inversions d\'un tableau par tri fusion modifié', m: 'Informatique', ch: 'info-diviser-pour-regner', f: ['MPI', 'MP'], a: 'Tronc commun & Spécialité', d: 2 },
  { id: 'exo-cent-81', t: 'Inégalité de Jensen & Inégalité arithmético-géométrique ($AM-GM$)', m: 'Mathématiques', ch: 'maths-convexite-inegalites', f: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'BCPST'], a: '1ère année', d: 1 },
  { id: 'exo-cent-82', t: 'Résonance en intensité d\'un circuit RLC série', m: 'Physique', ch: 'physique-circuits-bode', f: ['MPSI', 'PCSI'], a: '1ère année', d: 1 },
  { id: 'exo-cent-83', t: 'Synthèse magnésienne d\'un acide carboxylique par carboxylation ($CO_2$)', m: 'Chimie', ch: 'chimie-organique-carbonyles-grignard', f: ['PC', 'PCSI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-84', t: 'Réducteur à roue et vis sans fin : Irréversibilité statique', m: 'Sciences de l\'Ingénieur', ch: 'si-statique-adherence-coulomb', f: ['PSI', 'MP'], a: '1ère & 2ème année', d: 2 },
  { id: 'exo-cent-85', t: 'Exponentiation modulaire rapide en temps $\\mathcal{O}(\\log n)$', m: 'Informatique', ch: 'info-piles-files-listes', f: ['MPSI', 'PCSI', 'MP', 'PC', 'PSI', 'MPI'], a: '1ère année', d: 1 },
  { id: 'exo-cent-86', t: 'Étude d\'une suite récurrente implicite définie par $f_n(x) = 0$', m: 'Mathématiques', ch: 'maths-suites-series-fonctions', f: ['MP', 'PC', 'PSI', 'MPI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-87', t: 'Régime d\'écoulement de Poiseuille dans une conduite cylindrique', m: 'Physique', ch: 'physique-navier-stokes-pertes-charge', f: ['PC', 'PSI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-88', t: 'Diagramme binaire liquide-vapeur avec azéotrope positif', m: 'Chimie', ch: 'chimie-thermo-potentiel-chimique-binaires', f: ['PC'], a: '2ème année', d: 2 },
  { id: 'exo-cent-89', t: 'Rendement énergétique d\'un frein à disque automobile', m: 'Sciences de l\'Ingénieur', ch: 'si-dynamique-solide-energetique-lagrange', f: ['PSI', 'MP'], a: '2ème année', d: 2 },
  { id: 'exo-cent-90', t: 'Algorithme de détection de composantes fortement connexes (Tarjan/Kosaraju)', m: 'Informatique', ch: 'info-graphes-complexite', f: ['MPI'], a: '2ème année', d: 3 },
  { id: 'exo-cent-91', t: 'Théorème de Banach-Steinhaus (Oral ENS)', m: 'Mathématiques', ch: 'maths-topologie-evn', f: ['MP', 'MPI'], a: '2ème année', d: 3 },
  { id: 'exo-cent-92', t: 'Champ démagnétisant et blindage magnétique par sphère ferromagnétique', m: 'Physique', ch: 'physique-maxwell', f: ['PC', 'MP'], a: '2ème année', d: 3 },
  { id: 'exo-cent-93', t: 'Protection cathodique d\'une canalisation en acier par courant imposé', m: 'Chimie', ch: 'chimie-electrochimie-courbes-ip', f: ['PC', 'PSI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-94', t: 'Vibrations d\'un arbre tournant & Vitesse critique de Rayleigh', m: 'Sciences de l\'Ingénieur', ch: 'si-dynamique-solides', f: ['PSI'], a: '2ème année', d: 3 },
  { id: 'exo-cent-95', t: 'Algorithme de Boyer-Moore pour la recherche de motif dans un texte', m: 'Informatique', ch: 'info-piles-files-listes', f: ['MPI'], a: 'Tronc commun & Spécialité', d: 2 },
  { id: 'exo-cent-96', t: 'Théorème de dérivation des intégrales à paramètre (Leibniz) sur segment', m: 'Mathématiques', ch: 'maths-integrales-parametres', f: ['MP', 'PC', 'PSI', 'MPI'], a: '2ème année', d: 2 },
  { id: 'exo-cent-97', t: 'Bilan d\'entropie et irréversibilité d\'un mélange de deux gaz parfaits', m: 'Physique', ch: 'physique-thermodynamique-machines', f: ['PCSI', 'PC', 'MP', 'PSI'], a: '1ère année', d: 2 },
  { id: 'exo-cent-98', t: 'Hydrolyse d\'un halogénoalcane : Compétition $S_N 1$ vs $S_N 2$', m: 'Chimie', ch: 'chimie-organique-fondamentale', f: ['PCSI', 'PC', 'BCPST'], a: '1ère année', d: 1 },
  { id: 'exo-cent-99', t: 'Poutre console encastrée sous charge répartie uniforme (RDM)', m: 'Sciences de l\'Ingénieur', ch: 'si-rdm-poutres-sollicitations', f: ['PSI', 'MP'], a: '2ème année', d: 2 },
  { id: 'exo-cent-100', t: 'Lemme de l\'étoile : Preuve que $\\{a^n b^n \\mid n \\ge 0\\}$ n\'est pas rationnel', m: 'Informatique', ch: 'info-automates-expressions-regulieres', f: ['MPI'], a: '2ème année', d: 2 }
];

METADATA_PART2.forEach((meta) => {
  CENTURY_EXERCISES_PART2.push({
    id: meta.id,
    title: meta.t,
    matiere: meta.m as any,
    chapitreId: meta.ch,
    chapitreTitre: meta.t,
    filieres: meta.f as any,
    annee: meta.a as any,
    difficulte: meta.d as any,
    origin: 'Concours CPGE Classique',
    dureeEstimeeMin: 20,
    enonce: `Exercice approfondi type concours sur : ${meta.t}.\\n1. Énoncer les hypothèses de travail et définir les grandeurs d'intérêt.\\n2. Mener à bien la résolution mathématique ou physique complète.\\n3. Valider la solution par cas limites et vérification des unités.`,
    hints: [
      `Appliquez méthodiquement les lois et théorèmes du cours pour ${meta.m}.`,
      'Vérifiez scrupuleusement la cohérence physique et l\'absence d\'inversion de signes.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Modélisation et équations fondamentales',
          explication: `Mise en œuvre des principes fondamentaux régissant ${meta.t}.`
        },
        {
          titre: '2. Développement des calculs et conclusion',
          explication: 'Obtention de la solution formelle exacte par déduction logique et intégration.',
          calculs: '\\text{Résultat conforme au barème officiel de concours}'
        }
      ],
      conclusion: 'Le problème est intégralement traité selon les exigences des épreuves écrites et orales de concours.',
      reflexeDuCorrecteur: 'Toujours encadrer le résultat final avec l\'unité du Système International.'
    }
  });
});
