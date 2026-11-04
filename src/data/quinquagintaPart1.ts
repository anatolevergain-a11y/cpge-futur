import type { ExerciseItem } from './cpgeData';

export const QUINQUAGINTA_EXERCISES_PART1: ExerciseItem[] = [
  // ==========================================
  // MATHEMATIQUES (1 à 20)
  // ==========================================
  {
    id: 'exo-quinq-1-densite-conjointe-gaussienne',
    title: 'Densité conjointe et indépendance d\'un couple gaussien corrélé',
    matiere: 'Mathématiques',
    chapitreId: 'maths-variables-aleatoires-continuite-densite',
    chapitreTitre: 'Probabilités : Variables Aléatoires à Densité & Vecteurs Aléatoires',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X MP',
    dureeEstimeeMin: 30,
    enonce: 'Soit $(X, Y)$ un couple de variables aléatoires réelles de densité conjointe :\n$$f(x, y) = C \\exp\\left( -\\frac{1}{2(1-\\rho^2)} \\left( x^2 - 2\\rho x y + y^2 \\right) \\right) \\quad \\text{avec } \\rho \\in ]-1, 1[$$\n1. Déterminer la constante de normalisation $C$.\n2. Déterminer les densités marginales $f_X$ et $f_Y$. En déduire les lois de $X$ et $Y$.\n3. Calculer la covariance $\\mathrm{Cov}(X, Y)$ et le coefficient de corrélation linéaire.\n4. À quelle condition nécessaire et suffisante $X$ et $Y$ sont-elles indépendantes ?',
    hints: [
      'Pour intégrer par rapport à $y$, complétez le carré dans l\'exponentielle : $y^2 - 2\\rho x y = (y - \\rho x)^2 - \\rho^2 x^2$.',
      'Rappelez-vous que $\\int_{-\\infty}^{+\\infty} e^{-u^2/2} \\mathrm{d}u = \\sqrt{2\\pi}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul de la constante et factorisation quadratique',
          explication: 'On écrit $x^2 - 2\\rho x y + y^2 = (y - \\rho x)^2 + (1 - \\rho^2) x^2$. L\'argument de l\'exponentielle devient :\n$$-\\frac{(y - \\rho x)^2}{2(1-\\rho^2)} - \\frac{x^2}{2}$$\nEn intégrant par rapport à $y$, l\'intégrale gaussienne donne $\\sqrt{2\\pi(1-\\rho^2)}$. Puis en intégrant par rapport à $x$, l\'intégrale gaussienne donne $\\sqrt{2\\pi}$. La masse totale vaut $C \\times 2\\pi \\sqrt{1-\\rho^2} = 1$, d\'où :',
          calculs: 'C = \\frac{1}{2\\pi \\sqrt{1-\\rho^2}}'
        },
        {
          titre: '2. Densités marginales',
          explication: 'En intégrant par rapport à $y$ :\n$$f_X(x) = \\int_{-\\infty}^{+\\infty} f(x, y)\\,\\mathrm{d}y = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}$$\nDonc $X \\sim \\mathcal{N}(0, 1)$. Par symétrie évidente des rôles de $x$ et $y$, $Y \\sim \\mathcal{N}(0, 1)$.'
        },
        {
          titre: '3. Covariance et coefficient de corrélation',
          explication: 'On pose $U = \\frac{Y - \\rho X}{\\sqrt{1-\\rho^2}}$. Alors $U$ et $X$ sont deux gaussiennes centrées réduites indépendantes. On a $Y = \\rho X + \\sqrt{1-\\rho^2} U$, d\'où $\\mathrm{Cov}(X, Y) = \\mathbb{E}(X Y) = \\rho \\mathbb{E}(X^2) + \\sqrt{1-\\rho^2} \\mathbb{E}(X U) = \\rho$. Le coefficient de corrélation linéaire est donc exactement $\\rho$.'
        },
        {
          titre: '4. Condition d\'indépendance',
          explication: '$X$ et $Y$ sont indépendantes si et seulement si $f(x, y) = f_X(x) f_Y(y)$, ce qui équivaut au terme croisé nul : $\\rho = 0$.'
        }
      ],
      conclusion: 'Pour un couple gaussien, la décorrélation ($\\\\rho = 0$) équivaut strictement à l\'indépendance.',
      reflexeDuCorrecteur: 'Pour factoriser une forme quadratique dans une intégrale double, toujours compléter le carré sur l\'une des variables.'
    }
  },
  {
    id: 'exo-quinq-2-loi-cauchy-non-esperance',
    title: 'Loi de Cauchy : Non-existence de l\'espérance et invariance par moyenne',
    matiere: 'Mathématiques',
    chapitreId: 'maths-variables-aleatoires-continuite-densite',
    chapitreTitre: 'Probabilités : Variables Aléatoires à Densité & Vecteurs Aléatoires',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'Soit $X$ une variable aléatoire suivant la loi de Cauchy standard de densité :\n$$f(x) = \\frac{1}{\\pi(1+x^2)}, \\quad x \\in \\mathbb{R}$$\n1. Vérifier que $f$ est bien une densité de probabilité sur $\\mathbb{R}$.\n2. Montrer que $X$ n\'admet pas d\'espérance au sens de la théorie des probabilités.\n3. Calculer la fonction caractéristique de $X$ : $\\phi_X(t) = \\mathbb{E}(e^{i t X}) = e^{-|t|}$.\n4. En déduire la loi de la moyenne empirique $\\overline{X}_n = \\frac{1}{n} \\sum_{k=1}^n X_k$ où les $X_k$ sont i.i.d. de Cauchy. Que devient la loi forte des grands nombres ?',
    hints: [
      'Pour la question 2, examinez la convergence absolue de $\\int |x| f(x) \\mathrm{d}x$.',
      'Pour la question 4, calculez la fonction caractéristique de la moyenne $\\phi_{\\overline{X}_n}(t) = \\left(\\phi_X(t/n)\\right)^n$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Intégrabilité de la densité',
          explication: 'La fonction $f$ est continue, positive sur $\\mathbb{R}$ et $\\int_{-\\infty}^{+\\infty} \\frac{\\mathrm{d}x}{\\pi(1+x^2)} = \\frac{1}{\\pi} [\\arctan(x)]_{-\\infty}^{+\\infty} = \\frac{1}{\\pi}(\\frac{\\pi}{2} - (-\\frac{\\pi}{2})) = 1$. C\'est une densité.'
        },
        {
          titre: '2. Non-intégrabilité de $x f(x)$',
          explication: 'Pour que $X$ admette une espérance, il faut que $|x| f(x)$ soit intégrable sur $\\mathbb{R}$. Or au voisinage de $+\\infty$, $x f(x) \\sim \\frac{1}{\\pi x}$, dont l\'intégrale diverge logarithmiquement d\'après Riemann. L\'espérance n\'existe donc pas.'
        },
        {
          titre: '3. Fonction caractéristique',
          explication: 'Par transformée de Fourier de la lorentzienne ou par théorème des résidus sur le demi-plan complexe, on obtient $\\mathbb{E}(e^{i t X}) = e^{-|t|}$.'
        },
        {
          titre: '4. Moyenne empirique et violation de la LFGN',
          explication: 'Pour $n$ variables de Cauchy indépendantes :\n$$\\phi_{\\overline{X}_n}(t) = \\prod_{k=1}^n \\phi_{X_k}(t/n) = \\left( e^{-|t/n|} \\right)^n = e^{-n |t| / n} = e^{-|t|}$$\nLa moyenne empirique $\\overline{X}_n$ suit EXACTEMENT la même loi de Cauchy standard que chaque terme individuel ! La loi des grands nombres ne s\'applique pas car l\'hypothèse d\'espérance finie n\'est pas satisfaite.'
        }
      ],
      conclusion: 'La moyenne empirique d\'échantillons de Cauchy ne se resserre pas : moyenner 1000 réalisations ne réduit en rien la dispersion.',
      reflexeDuCorrecteur: 'Ne jamais écrire $\\mathbb{E}(X) = 0$ par imparité pour la loi de Cauchy : la symétrie ne compense pas la divergence absolue de l\'intégrale.'
    }
  },
  {
    id: 'exo-quinq-3-fonction-caracteristique-gaussienne',
    title: 'Fonction caractéristique gaussienne par équation différentielle',
    matiere: 'Mathématiques',
    chapitreId: 'maths-variables-aleatoires-continuite-densite',
    chapitreTitre: 'Probabilités : Variables Aléatoires à Densité & Vecteurs Aléatoires',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 25,
    enonce: 'Soit $X \\sim \\mathcal{N}(0, 1)$ une variable aléatoire gaussienne centrée réduite. On pose pour tout $t \\in \\mathbb{R}$ :\n$$\\phi(t) = \\mathbb{E}(e^{i t X}) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{+\\infty} e^{i t x} e^{-x^2/2}\\,\\mathrm{d}x$$\n1. Justifier que $\\phi$ est définie et de classe $\\mathcal{C}^1$ sur $\\mathbb{R}$.\n2. Par intégration par parties, montrer que $\\phi$ vérifie l\'équation différentielle $\\phi\'(t) + t \\phi(t) = 0$.\n3. En déduire l\'expression explicite de $\\phi(t)$ pour tout $t \\in \\mathbb{R}$.',
    hints: [
      'Appliquez le théorème de dérivation sous le signe intégral avec domination par $g(x) = |x| e^{-x^2/2}$.',
      'Dans l\'intégrale de $\\phi\'(t)$, intégrez par parties en posant $u(x) = e^{i t x}$ et $v\'(x) = -x e^{-x^2/2}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Dérivabilité sous le signe somme',
          explication: 'L\'intégrande $h(t, x) = e^{i t x - x^2/2}$ est continue sur $\\mathbb{R} \\times \\mathbb{R}$, dérivable par rapport à $t$, avec $\\left| \\frac{\\partial h}{\\partial t}(t, x) \\right| = |i x| e^{-x^2/2} = |x| e^{-x^2/2}$, indépendante de $t$ et intégrable sur $\\mathbb{R}$. D\'après le théorème de dérivation sous l\'intégrale, $\\phi$ est $\\mathcal{C}^1$ et $\\phi\'(t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{+\\infty} i x e^{i t x} e^{-x^2/2}\\,\\mathrm{d}x$.'
        },
        {
          titre: '2. Intégration par parties',
          explication: 'On écrit $i x e^{-x^2/2} = -i (-x e^{-x^2/2})$. Par intégration par parties sur $[-A, A]$ puis passage à la limite :\n$$\\phi\'(t) = \\frac{-i}{\\sqrt{2\\pi}} \\left( \\left[ e^{i t x} e^{-x^2/2} \\right]_{-\\infty}^{+\\infty} - \\int_{-\\infty}^{+\\infty} i t e^{i t x} e^{-x^2/2}\\,\\mathrm{d}x \\right) = 0 - t \\phi(t)$$\nOn obtient donc $\\phi\'(t) + t \\phi(t) = 0$.'
        },
        {
          titre: '3. Résolution',
          explication: 'L\'équation différentielle linéaire d\'ordre 1 a pour solution $\\phi(t) = \\phi(0) e^{-t^2/2}$. Comme $\\phi(0) = \\mathbb{E}(1) = 1$, on conclut :',
          calculs: '\\phi(t) = e^{-t^2/2}'
        }
      ],
      conclusion: 'La fonction caractéristique d\'une gaussienne centrée réduite est elle-même proportionnelle à une gaussienne (la gaussienne est un vecteur propre de la transformée de Fourier).',
      reflexeDuCorrecteur: 'Toujours expliciter l\'hypothèse de domination intégrable indépendante de $t$ sur tout compact pour dériver sous l\'intégrale.'
    }
  },
  {
    id: 'exo-quinq-4-inegalite-chernoff-queues-gaussiennes',
    title: 'Inégalité de Chernoff et décroissance sous-gaussienne des queues',
    matiere: 'Mathématiques',
    chapitreId: 'maths-variables-aleatoires-continuite-densite',
    chapitreTitre: 'Probabilités : Variables Aléatoires à Densité & Vecteurs Aléatoires',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'X-ENS MPI',
    dureeEstimeeMin: 30,
    enonce: 'Soit $X \\sim \\mathcal{N}(0, 1)$ une variable aléatoire gaussienne et soit $a > 0$.\n1. Rappeler l\'inégalité de Markov appliquée à la variable positive $e^{\\lambda X}$ pour $\\lambda > 0$.\n2. En utilisant $\\mathbb{E}(e^{\\lambda X}) = e^{\\lambda^2/2}$, montrer que pour tout $\\lambda > 0$ :\n$$P(X \\ge a) \\le e^{-\\lambda a + \\lambda^2/2}$$\n3. Optimiser par rapport à $\\lambda > 0$ pour établir l\'inégalité de Chernoff $P(X \\ge a) \\le e^{-a^2/2}$.\n4. Comparer avec la majoration donnée par l\'inégalité de Bienaymé-Tchebychev $P(|X| \\ge a) \\le 1/a^2$ pour $a = 5$.',
    hints: [
      'Pour minimiser la fonction $\\lambda \\mapsto -\\lambda a + \\lambda^2/2$, étudiez sa dérivée par rapport à $\\lambda$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Inégalité de Markov exponentielle',
          explication: 'Puisque la fonction $x \\mapsto e^{\\lambda x}$ est strictement croissante pour $\\lambda > 0$, l\'événement $\\{X \\ge a\\}$ est identique à $\\{e^{\\lambda X} \\ge e^{\\lambda a}\\}$. L\'inégalité de Markov donne immédiatement :\n$$P(X \\ge a) = P(e^{\\lambda X} \\ge e^{\\lambda a}) \\le \\frac{\\mathbb{E}(e^{\\lambda X})}{e^{\\lambda a}}$$'
        },
        {
          titre: '2. Injection de la transformée de Laplace',
          explication: 'Pour $X \\sim \\mathcal{N}(0, 1)$, $\\mathbb{E}(e^{\\lambda X}) = \\phi(-i\\lambda) = e^{\\lambda^2/2}$. On en déduit :\n$$P(X \\ge a) \\le \\exp\\left( \\frac{\\lambda^2}{2} - \\lambda a \\right)$$'
        },
        {
          titre: '3. Optimisation du paramètre $\\lambda$',
          explication: 'Le trinôme $g(\\lambda) = \\frac{\\lambda^2}{2} - \\lambda a$ atteint son minimum absolu pour $g\'(\\lambda) = \\lambda - a = 0$, soit $\\lambda^* = a > 0$. La valeur minimale vaut $-\\frac{a^2}{2}$, d\'où l\'inégalité de Chernoff :',
          calculs: 'P(X \\ge a) \\le e^{-a^2/2}'
        },
        {
          titre: '4. Comparaison quantitative',
          explication: 'Pour $a = 5$ :\n- Bienaymé-Tchebychev donne $P(|X| \\ge 5) \\le \\frac{1}{25} = 0{,}04$.\n- Chernoff donne $P(X \\ge 5) \\le e^{-25/2} = e^{-12{,}5} \\approx 3{,}7 \\times 10^{-6}$.\nLa borne de Chernoff capture la décroissance exponentielle ultra-rapide des queues de distribution gaussiennes.'
        }
      ],
      conclusion: 'La méthode de Chernoff (Markov exponentiel + minimisation) est l\'outil central des probabilités modernes et du machine learning.',
      reflexeDuCorrecteur: 'Quand on a des queues exponentielles, ne jamais se contenter de Bienaymé-Tchebychev : penser immédiatement au Markov exponentiel.'
    }
  },
  {
    id: 'exo-quinq-5-monte-carlo-vitesse-convergence',
    title: 'Méthode de Monte-Carlo & Vitesse de convergence en $\\mathcal{O}(1/\\sqrt{n})$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-variables-aleatoires-continuite-densite',
    chapitreTitre: 'Probabilités : Variables Aléatoires à Densité & Vecteurs Aléatoires',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'CCINP MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'On souhaite estimer l\'intégrale $I = \\int_0^1 g(x)\\,\\mathrm{d}x$ pour une fonction continue $g : [0, 1] \\to \\mathbb{R}$.\n1. Soit $(U_k)_{k \\ge 1}$ une suite de variables aléatoires indépendantes suivant la loi uniforme $\\mathcal{U}([0, 1])$. Poser $I_n = \\frac{1}{n} \\sum_{k=1}^n g(U_k)$. Calculer $\\mathbb{E}(I_n)$ et $\\mathbb{V}(I_n)$ en fonction de la variance $\\sigma^2 = \\mathbb{V}(g(U_1))$.\n2. Énoncer la loi forte des grands nombres et le théorème central limite pour la suite $(I_n)$.\n3. En déduire un intervalle de confiance asymptotique à 95% pour l\'intégrale $I$.\n4. Pourquoi cette méthode est-elle particulièrement avantageuse en dimension supérieure $d \\gg 1$ par rapport aux méthodes de quadrature déterministes (trapèzes, Simpson) ?',
    hints: [
      'Rappelez que pour une gaussienne standard, $P(|Z| \\le 1{,}96) \\approx 0{,}95$.',
      'Considérez la dépendance de l\'erreur en dimension $d$ : pour les trapèzes, l\'erreur est en $\\mathcal{O}(n^{-2/d})$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Espérance et variance de l\'estimateur',
          explication: 'Par le théorème de transfert, $\\mathbb{E}(g(U_k)) = \\int_0^1 g(x) \\cdot 1\\,\\mathrm{d}x = I$. Par linéarité, $\\mathbb{E}(I_n) = I$ : l\'estimateur est sans biais. Comme les $(U_k)$ sont mutuellement indépendantes :\n$$\\mathbb{V}(I_n) = \\frac{1}{n^2} \\sum_{k=1}^n \\mathbb{V}(g(U_k)) = \\frac{\\sigma^2}{n}$$'
        },
        {
          titre: '2. Théorèmes limites',
          explication: 'D\'après la Loi Forte des Grands Nombres, $I_n \\xrightarrow{p.s.} I$. D\'après le Théorème Central Limite, $\\sqrt{n}\\frac{I_n - I}{\\sigma} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$.'
        },
        {
          titre: '3. Intervalle de confiance',
          explication: 'Avec le quantile $q_{0{,}975} \\approx 1{,}96$ et l\'estimateur empirique de variance $\\hat{\\sigma}_n$ :\n$$\\left[ I_n - 1{,}96 \\frac{\\hat{\\sigma}_n}{\\sqrt{n}}, \\; I_n + 1{,}96 \\frac{\\hat{\\sigma}_n}{\\sqrt{n}} \\right]$$'
        },
        {
          titre: '4. Fléau de la dimension',
          explication: 'En dimension $d$, pour subdiviser chaque axe en $N$ intervalles, il faut $n = N^d$ points. La méthode des trapèzes a une erreur en $\\mathcal{O}(N^{-2}) = \\mathcal{O}(n^{-2/d})$, qui devient catastrophique dès $d \\ge 4$. En revanche, l\'erreur de Monte-Carlo reste TOUJOURS en $\\mathcal{O}(n^{-1/2})$, indépendamment de la dimension $d$ !'
        }
      ],
      conclusion: 'Monte-Carlo brise le fléau de la dimension pour l\'intégration numérique.',
      reflexeDuCorrecteur: 'Toujours mentionner l\'indépendance de la vitesse de convergence $\\mathcal{O}(1/\\sqrt{n})$ vis-à-vis de la dimension $d$.'
    }
  },
  {
    id: 'exo-quinq-6-grassmann-intersection-generale',
    title: 'Formule de Grassmann et codimension de l\'intersection de sous-espaces',
    matiere: 'Mathématiques',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Algèbre Linéaire & Dimension Finie',
    filieres: ['MPSI', 'MP', 'PCSI', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 20,
    enonce: 'Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension finie $n$. Soit $F$ et $G$ deux sous-espaces vectoriels de $E$.\n1. Énoncer la formule de Grassmann reliant $\\dim(F+G)$, $\\dim(F)$, $\\dim(G)$ et $\\dim(F \\cap G)$.\n2. En déduire que $\\dim(F \\cap G) \\ge \\dim(F) + \\dim(G) - n$.\n3. Interpréter ce résultat en termes de codimensions : $\\mathrm{codim}(F \\cap G) \\le \\mathrm{codim}(F) + \\mathrm{codim}(G)$.\n4. Que dire de l\'intersection de deux hyperplans distincts de $E$ ?',
    hints: [
      'Majorez $\\dim(F+G)$ par $\\dim(E) = n$.',
      'Un hyperplan est un sous-espace de dimension $n-1$, donc de codimension 1.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Formule de Grassmann',
          explication: 'Pour tous sous-espaces vectoriels $F, G$ de dimension finie :\n$$\\dim(F+G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$$'
        },
        {
          titre: '2. Minoration de la dimension de l\'intersection',
          explication: 'Comme $F+G$ est un sous-espace de $E$, on a $\\dim(F+G) \\le \\dim(E) = n$. Par conséquent :\n$$\\dim(F \\cap G) = \\dim(F) + \\dim(G) - \\dim(F+G) \\ge \\dim(F) + \\dim(G) - n$$'
        },
        {
          titre: '3. Formulation en codimension',
          explication: 'En posant $\\mathrm{codim}(V) = n - \\dim(V)$ :\n$$\\mathrm{codim}(F \\cap G) = n - \\dim(F \\cap G) \\le n - (\\dim(F) + \\dim(G) - n) = (n - \\dim(F)) + (n - \\dim(G)) = \\mathrm{codim}(F) + \\mathrm{codim}(G)$$'
        },
        {
          titre: '4. Intersection de deux hyperplans',
          explication: 'Si $H_1, H_2$ sont deux hyperplans distincts, $\\dim(H_1) = \\dim(H_2) = n-1$. Comme ils sont distincts, $H_1 + H_2 = E$ (dimension $n$). Donc $\\dim(H_1 \\cap H_2) = (n-1) + (n-1) - n = n - 2$. L\'intersection de deux hyperplans distincts est toujours de codimension 2.'
        }
      ],
      conclusion: 'L\'intersection de $p$ hyperplans a une dimension au moins égale à $n-p$.',
      reflexeDuCorrecteur: 'Raisonner en codimension simplifie drastiquement les questions d\'intersection de sous-espaces.'
    }
  },
  {
    id: 'exo-quinq-7-reduction-simultanee-commutant',
    title: 'Sous-espaces stables communs et diagonalisation simultanée de deux endomorphismes',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 25,
    enonce: 'Soit $E$ un espace vectoriel de dimension finie sur $\\mathbb{K}$ et soient $u, v \\in \\mathcal{L}(E)$ tels que $u \\circ v = v \\circ u$.\n1. Montrer que tout sous-espace propre de $u$ est stable par $v$.\n2. On suppose que $u$ et $v$ sont diagonalisables. Démontrer qu\'il existe une base commune de diagonalisation pour $u$ et $v$.\n3. Donner un contre-exemple si $u$ et $v$ ne commutent pas.',
    hints: [
      'Si $x \\in E_\\lambda(u)$, appliquez $u$ à $v(x)$ en utilisant $u \\circ v = v \\circ u$.',
      'Considérez la restriction $v_{|E_\\lambda(u)}$ et utilisez le fait que tout endomorphisme induit par un diagonalisable est diagonalisable.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Stabilité des sous-espaces propres',
          explication: 'Soit $\\lambda \\in \\mathrm{Sp}(u)$ et $x \\in E_\\lambda(u) = \\ker(u - \\lambda \\mathrm{id})$. Alors :\n$$u(v(x)) = (u \\circ v)(x) = (v \\circ u)(x) = v(u(x)) = v(\\lambda x) = \\lambda v(x)$$\nDonc $v(x) \\in E_\\lambda(u)$, ce qui prouve la stabilité de $E_\\lambda(u)$ par $v$.'
        },
        {
          titre: '2. Base commune de diagonalisation',
          explication: 'Comme $u$ est diagonalisable, $E = \\bigoplus_{\\lambda \\in \\mathrm{Sp}(u)} E_\\lambda(u)$. Pour chaque $\\lambda$, $E_\\lambda(u)$ est stable par $v$. L\'endomorphisme induit $v_\\lambda = v_{|E_\\lambda(u)}$ est diagonalisable (car son polynôme minimal divise celui de $v$, qui est scindé à racines simples). Il existe donc une base $\\mathcal{B}_\\lambda$ de $E_\\lambda(u)$ formée de vecteurs propres de $v$. La réunion des $\\mathcal{B}_\\lambda$ forme une base de $E$ constituée de vecteurs propres à la fois pour $u$ et pour $v$.'
        },
        {
          titre: '3. Contre-exemple sans commutation',
          explication: 'Les matrices $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix}$ et $B = \\begin{pmatrix} 1 & 1 \\\\ 0 & 2 \\end{pmatrix}$ sont toutes deux diagonalisables mais ne commutent pas, donc ne possèdent pas de base commune de diagonalisation.'
        }
      ],
      conclusion: 'Deux endomorphismes diagonalisables sont co-diagonalisables si et seulement s\'ils commutent.',
      reflexeDuCorrecteur: 'Pour restreindre un endomorphisme diagonalisable à un sous-espace stable, penser immédiatement au polynôme minimal.'
    }
  },
  {
    id: 'exo-quinq-8-decomposition-polaire',
    title: 'Décomposition polaire dans $GL_n(\\mathbb{R}) = O_n(\\mathbb{R}) \\cdot S_n^{++}(\\mathbb{R})$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-espaces-euclidiens-theoreme-spectral',
    chapitreTitre: 'Espaces Euclidiens & Théorème Spectral',
    filieres: ['MP', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral ENS MP',
    dureeEstimeeMin: 35,
    enonce: 'Soit $M \\in GL_n(\\mathbb{R})$.\n1. Montrer que la matrice $S = M^T M$ est symétrique définie positive.\n2. En utilisant le théorème spectral, montrer qu\'il existe une unique matrice $R \\in S_n^{++}(\\mathbb{R})$ telle que $R^2 = S$.\n3. On pose $O = M R^{-1}$. Montrer que $O \\in O_n(\\mathbb{R})$.\n4. En déduire que l\'application $(O, S) \\mapsto O S$ est un homéomorphisme de $O_n(\\mathbb{R}) \\times S_n^{++}(\\mathbb{R})$ sur $GL_n(\\mathbb{R})$.',
    hints: [
      'Pour $S_n^{++}$, écrivez $S = P D P^T$ avec $D = \\mathrm{diag}(\\lambda_1, \\dots, \\lambda_n)$ où $\\lambda_i > 0$, puis posez $R = P \\sqrt{D} P^T$.',
      'Pour l\'unicité de la racine carrée, étudiez les polynômes interpolateurs d\'Hermite ou de Lagrange.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Matrice symétrique définie positive',
          explication: '$S^T = (M^T M)^T = M^T (M^T)^T = M^T M = S$. Pour tout $X \\in \\mathbb{R}^n \\setminus \\{0\\}$, $X^T S X = X^T M^T M X = \\|M X\\|^2 > 0$ car $M$ est inversible et $X \\neq 0$. Donc $S \\in S_n^{++}(\\mathbb{R})$.'
        },
        {
          titre: '2. Racine carrée symétrique positive',
          explication: 'D\'après le théorème spectral, $S$ est orthogonalement semblable à une matrice diagonale : $S = P \\mathrm{diag}(\\lambda_1, \\dots, \\lambda_n) P^T$ avec $\\lambda_i > 0$. On pose $R = P \\mathrm{diag}(\\sqrt{\\lambda_1}, \\dots, \\sqrt{\\lambda_n}) P^T$. Alors $R \\in S_n^{++}(\\mathbb{R})$ et $R^2 = S$. L\'unicité provient du fait que les valeurs propres et les sous-espaces propres d\'une matrice symétrique positive sont uniquement déterminés par ceux de son carré.'
        },
        {
          titre: '3. Orthogonalité de $O$',
          explication: 'On calcule $O^T O = (M R^{-1})^T (M R^{-1}) = (R^{-1})^T M^T M R^{-1}$. Comme $R$ est symétrique, $(R^{-1})^T = R^{-1}$. De plus $M^T M = S = R^2$. Donc :\n$$O^T O = R^{-1} R^2 R^{-1} = R^{-1} R = I_n$$\nDonc $O \\in O_n(\\mathbb{R})$.'
        },
        {
          titre: '4. Homéomorphisme',
          explication: 'La factorisation $M = O R$ est unique (puisque $M^T M = R^2$ impose $R$, puis $O = M R^{-1}$). Les applications directe et réciproque sont continues (continuité de la racine carrée de matrices positives et du produit).'
        }
      ],
      conclusion: 'La décomposition polaire est l\'analogue matriciel de l\'écriture polaire d\'un nombre complexe $z = r e^{i \\theta}$.',
      reflexeDuCorrecteur: 'Pour fabriquer une matrice symétrique positive à partir d\'une matrice quelconque, le réflexe absolu est $M^T M$.'
    }
  },
  {
    id: 'exo-quinq-9-lemme-gronwall-edo',
    title: 'Lemme de Gronwall différentiel et unicité de Cauchy-Lipschitz',
    matiere: 'Mathématiques',
    chapitreId: 'maths-equations-differentielles',
    chapitreTitre: 'Équations Différentielles & Systèmes Linéaires',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec MP',
    dureeEstimeeMin: 25,
    enonce: 'Soit $u : [0, T] \\to \\mathbb{R}_+$ une fonction continue et dérivable vérifiant pour tout $t \\in [0, T]$ :\n$$u\'(t) \\le k u(t) \\quad \\text{avec } k > 0, \\quad \\text{et } u(0) = 0$$\n1. Montrer que la fonction $g(t) = u(t) e^{-k t}$ est décroissante sur $[0, T]$.\n2. En déduire que $u(t) = 0$ pour tout $t \\in [0, T]$.\n3. Application : Soit $y_1, y_2$ deux solutions sur $[0, T]$ de l\'équation différentielle $y\' = f(t, y)$ avec $f$ globalement $L$-lipschitzienne par rapport à sa seconde variable, vérifiant $y_1(0) = y_2(0)$. En posant $u(t) = \\|y_1(t) - y_2(t)\\|^2$, démontrer l\'unicité de la solution.',
    hints: [
      'Calculez $g\'(t)$ et utilisez l\'inégalité $u\'(t) - k u(t) \\le 0$.',
      'Pour l\'application, dérivez $\\|y_1(t) - y_2(t)\\|^2$ en utilisant le produit scalaire.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Étude de la fonction auxiliaire $g$',
          explication: 'La fonction $g$ est dérivable et $g\'(t) = u\'(t) e^{-k t} - k u(t) e^{-k t} = (u\'(t) - k u(t)) e^{-k t}$. D\'après l\'hypothèse $u\'(t) \\le k u(t)$, on a $g\'(t) \\le 0$. Donc $g$ est décroissante sur $[0, T]$.'
        },
        {
          titre: '2. Conclusion sur la nullité de $u$',
          explication: 'Comme $g$ est décroissante, pour tout $t \\in [0, T]$, $g(t) \\le g(0) = u(0) e^0 = 0$. Donc $u(t) e^{-kt} \\le 0$. Comme $u$ est à valeurs positives et $e^{-kt} > 0$, on a obligatoirement $u(t) = 0$ pour tout $t \\in [0, T]$.'
        },
        {
          titre: '3. Application à l\'unicité de Cauchy-Lipschitz',
          explication: 'Posons $\\Delta(t) = y_1(t) - y_2(t)$. Alors $\\frac{\\mathrm{d}}{\\mathrm{d}t} \\|\\Delta(t)\\|^2 = 2 \\langle \\Delta\'(t), \\Delta(t) \\rangle = 2 \\langle f(t, y_1) - f(t, y_2), \\Delta(t) \\rangle \\le 2 \\|f(t, y_1) - f(t, y_2)\\| \\|\\Delta(t)\\| \\le 2 L \\|\\Delta(t)\\|^2$. Par le lemme de Gronwall appliqué à $u(t) = \\|\\Delta(t)\\|^2$ avec $k = 2L$ et $u(0)=0$, on déduit $\\|\\Delta(t)\\|^2 = 0$, donc $y_1(t) = y_2(t)$ sur tout l\'intervalle.'
        }
      ],
      conclusion: 'Le lemme de Gronwall est la pierre angulaire de la preuve d\'unicité dans le théorème de Cauchy-Lipschitz.',
      reflexeDuCorrecteur: 'Pour majorer une fonction dont la dérivée est contrôlée par elle-même, toujours multiplier par le facteur intégrant $e^{-k t}$.'
    }
  },
  {
    id: 'exo-quinq-10-noyau-dirichlet-fourier-gibbs',
    title: 'Noyau de Dirichlet et phénomène de Gibbs aux discontinuités de Fourier',
    matiere: 'Mathématiques',
    chapitreId: 'maths-series-entieres-harmonique',
    chapitreTitre: 'Séries Entières & Analyse Harmonique',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 30,
    enonce: 'On définit le noyau de Dirichlet pour tout $N \\ge 0$ et $x \\in \\mathbb{R} \\setminus 2\\pi \\mathbb{Z}$ :\n$$D_N(x) = \\sum_{n=-N}^N e^{i n x} = 1 + 2 \\sum_{n=1}^N \\cos(n x)$$\n1. Montrer que $D_N(x) = \\frac{\\sin((N+1/2)x)}{\\sin(x/2)}$.\n2. Calculer $\\frac{1}{2\\pi} \\int_{-\\pi}^\\pi D_N(x)\\,\\mathrm{d}x$.\n3. On considère la fonction en créneau $2\\pi$-périodique $f(x) = 1$ sur $]0, \\pi[$ et $-1$ sur $]-\\pi, 0[$. Montrer que la somme partielle de Fourier $S_N(f)(x)$ présente une sur-oscillation d\'environ 9% au voisinage de 0 quand $N \\to +\\infty$ (phénomène de Gibbs).',
    hints: [
      'Pour sommer la progression géométrique de raison $e^{i x}$, factorisez par l\'angle moitié.',
      'Pour le créneau, exprimez $S_N(f)(\\pi/(2N+1))$ comme une somme de Riemann de $\\frac{\\sin t}{t}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Sommation par angle moitié',
          explication: 'On somme la suite géométrique :\n$$D_N(x) = e^{-i N x} \\frac{e^{i(2N+1)x} - 1}{e^{i x} - 1} = \\frac{e^{i(N+1/2)x} - e^{-i(N+1/2)x}}{e^{i x/2} - e^{-i x/2}} = \\frac{\\sin((N+1/2)x)}{\\sin(x/2)}$$'
        },
        {
          titre: '2. Intégrale du noyau',
          explication: 'Comme pour tout $n \\ge 1$, $\\int_{-\\pi}^\\pi \\cos(nx)\\,\\mathrm{d}x = 0$, l\'intégration terme à terme donne immédiatement $\\frac{1}{2\\pi} \\int_{-\\pi}^\\pi D_N(x)\\,\\mathrm{d}x = \\frac{1}{2\\pi} (2\\pi) = 1$.'
        },
        {
          titre: '3. Phénomène de Gibbs',
          explication: 'Au premier maximum local situé en $x_N = \\frac{\\pi}{N+1/2}$, la somme partielle vaut :\n$$S_N(f)(x_N) = \\frac{2}{\\pi} \\int_0^\\pi \\frac{\\sin((N+1/2)t)}{t}\\,\\mathrm{d}t + o(1) = \\frac{2}{\\pi} \\int_0^\\pi \\frac{\\sin u}{u}\\,\\mathrm{d}u \\approx 1{,}179$$\nLe dépassement par rapport au saut théorique 1 vaut $\\frac{2}{\\pi} \\mathrm{Si}(\\pi) - 1 \\approx +8{,}95\\%$, qui ne s\'annule jamais même quand $N \\to +\\infty$.'
        }
      ],
      conclusion: 'La série de Fourier ne converge pas uniformément au voisinage des points de discontinuité de première espèce (phénomène de Gibbs).',
      reflexeDuCorrecteur: 'Toujours invoquer la factorisation de l\'angle moitié pour les sommes trigonométriques de Dirichlet ou de Fejér.'
    }
  },
  {
    id: 'exo-quinq-11-formule-sommatoire-poisson-theta',
    title: 'Formule sommatoire de Poisson et équation fonctionnelle de la fonction thêta',
    matiere: 'Mathématiques',
    chapitreId: 'maths-series-entieres-harmonique',
    chapitreTitre: 'Séries Entières & Analyse Harmonique',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X-ENS MP',
    dureeEstimeeMin: 35,
    enonce: 'On admet la formule sommatoire de Poisson : pour toute fonction $f \\in \\mathcal{S}(\\mathbb{R})$ (espace de Schwartz) :\n$$\\sum_{n=-\\infty}^{+\\infty} f(n) = \\sum_{k=-\\infty}^{+\\infty} \\hat{f}(k) \\quad \\text{où } \\hat{f}(\\xi) = \\int_{-\\infty}^{+\\infty} f(x) e^{-2i\\pi \\xi x}\\,\\mathrm{d}x$$\n1. Calculer la transformée de Fourier de $f_t(x) = e^{-\\pi t x^2}$ pour $t > 0$.\n2. On définit la fonction thêta de Jacobi : $\\theta(t) = \\sum_{n=-\\infty}^{+\\infty} e^{-\\pi n^2 t}$. Établir l\'équation fonctionnelle modulaire :\n$$\\theta(t) = \\frac{1}{\\sqrt{t}} \\theta\\left(\\frac{1}{t}\\right)$$\n3. En déduire le comportement asymptotique de $\\theta(t)$ quand $t \\to 0^+$.',
    hints: [
      'La transformée de Fourier d\'une gaussienne $e^{-\\pi t x^2}$ s\'obtient par changement de variable : $\\hat{f_t}(\\xi) = \\frac{1}{\\sqrt{t}} e^{-\\pi \\xi^2 / t}$.',
      'Quand $t \\to 0^+$, utilisez l\'équation fonctionnelle pour ramener le comportement en $1/t \\to +\\infty$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Transformée de Fourier de la gaussienne',
          explication: 'Par l\'intégrale de Gauss classique, $\\hat{f_t}(\\xi) = \\int_{-\\infty}^{+\\infty} e^{-\\pi t x^2 - 2i\\pi \\xi x}\\,\\mathrm{d}x = \\frac{1}{\\sqrt{t}} e^{-\\pi \\xi^2 / t}$.'
        },
        {
          titre: '2. Application de la formule sommatoire de Poisson',
          explication: 'En appliquant Poisson à $f_t$ :\n$$\\sum_{n=-\\infty}^{+\\infty} e^{-\\pi n^2 t} = \\sum_{k=-\\infty}^{+\\infty} \\frac{1}{\\sqrt{t}} e^{-\\pi k^2 / t} = \\frac{1}{\\sqrt{t}} \\theta\\left( \\frac{1}{t} \\right)$$\nCe qui donne l\'équation fonctionnelle fondamentale de Riemann-Jacobi.'
        },
        {
          titre: '3. Comportement asymptotique en zéro',
          explication: 'Quand $t \\to 0^+$, posons $u = 1/t \\to +\\infty$. Alors $\\theta(u) = 1 + 2 e^{-\\pi u} + o(e^{-\\pi u}) \\to 1$. Par l\'équation fonctionnelle :\n$$\\theta(t) = \\frac{1}{\\sqrt{t}} \\theta(1/t) \\sim \\frac{1}{\\sqrt{t}}$$'
        }
      ],
      conclusion: 'L\'équation modulaire de la fonction thêta permet à Riemann d\'établir l\'équation fonctionnelle de la fonction zêta $\\\\zeta(s)$.',
      reflexeDuCorrecteur: 'Pour transformer une série lentement convergente en une série ultra-rapide, penser à la formule de Poisson.'
    }
  },
  {
    id: 'exo-quinq-12-integrale-dirichlet-parametre',
    title: 'Calcul de l\'intégrale de Dirichlet $\\int_0^{+\\infty} \\frac{\\sin x}{x}\\,\\mathrm{d}x = \\frac{\\pi}{2}$ par intégrale à paramètre',
    matiere: 'Mathématiques',
    chapitreId: 'maths-integrales-parametres',
    chapitreTitre: 'Intégrales à Paramètres, Continuité & Dérivation sous l\'Intégrale',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'On pose pour $t \\ge 0$ :\n$$F(t) = \\int_0^{+\\infty} e^{-t x} \\frac{\\sin x}{x}\\,\\mathrm{d}x$$\n1. Justifier la convergence de l\'intégrale définissant $F(t)$ pour tout $t > 0$.\n2. Montrer que $F$ est de classe $\\mathcal{C}^1$ sur $]0, +\\infty[$ et calculer $F\'(t)$.\n3. Calculer $\\lim_{t \\to +\\infty} F(t)$ et en déduire l\'expression de $F(t)$ pour $t > 0$.\n4. En admettant la continuité de $F$ en $t=0$, en déduire la valeur de l\'intégrale semi-convergente $\\int_0^{+\\infty} \\frac{\\sin x}{x}\\,\\mathrm{d}x$.',
    hints: [
      'Pour dériver sur $[a, +\\infty[$ avec $a > 0$, dominez par $e^{-a x}$.',
      'Rappelez que $\\int_0^{+\\infty} e^{-t x} \\sin x\\,\\mathrm{d}x = \\mathrm{Im}\\left( \\int_0^{+\\infty} e^{(-t+i)x}\\,\\mathrm{d}x \\right) = \\frac{1}{1+t^2}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Convergence de l\'intégrale',
          explication: 'Pour $t > 0$, au voisinage de 0, $\\frac{\\sin x}{x} \\to 1$ (intégrable). En $+\\infty$, $\\left| e^{-tx} \\frac{\\sin x}{x} \\right| \\le e^{-tx}$, intégrable par comparaison exponentielle.'
        },
        {
          titre: '2. Dérivation sous le signe intégral',
          explication: 'Soit $a > 0$. Pour tout $t \\ge a$, $\\left| \\frac{\\partial}{\\partial t}\\left( e^{-tx} \\frac{\\sin x}{x} \\right) \\right| = |-x e^{-tx} \\frac{\\sin x}{x}| \\le e^{-ax}$, intégrable sur $[0, +\\infty[$. Donc $F$ est $\\mathcal{C}^1$ sur $]0, +\\infty[$ et :\n$$F\'(t) = -\\int_0^{+\\infty} e^{-tx} \\sin x\\,\\mathrm{d}x = -\\frac{1}{1+t^2}$$'
        },
        {
          titre: '3. Intégration de $F\'(t)$',
          explication: 'On en déduit que $F(t) = -\\arctan(t) + C$. Comme $|F(t)| \\le \\int_0^{+\\infty} e^{-tx}\\,\\mathrm{d}x = \\frac{1}{t} \\xrightarrow{t \\to +\\infty} 0$, la constante vaut $C = \\lim_{t \\to +\\infty} \\arctan(t) = \\frac{\\pi}{2}$. Donc pour tout $t > 0$, $F(t) = \\frac{\\pi}{2} - \\arctan(t)$.'
        },
        {
          titre: '4. Valeur en 0',
          explication: 'Par continuité en $t=0$ :\n$$\\int_0^{+\\infty} \\frac{\\sin x}{x}\\,\\mathrm{d}x = F(0) = \\frac{\\pi}{2} - \\arctan(0) = \\frac{\\pi}{2}$$'
        }
      ],
      conclusion: 'L\'intégrale semi-convergente de Dirichlet vaut exactement $\\pi/2$.',
      reflexeDuCorrecteur: 'Pour dériver une intégrale à paramètre impropre en l\'infini, restreindre la variable sur $[a, +\\infty[$ avec $a > 0$ pour trouver une fonction dominatrice.'
    }
  },
  {
    id: 'exo-quinq-13-zeta-riemann-continuite-derivation',
    title: 'Continuité et dérivabilité de la fonction zêta de Riemann $\\zeta(s)$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-suites-series-fonctions',
    chapitreTitre: 'Suites et Séries de Fonctions',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 20,
    enonce: 'On définit la fonction zêta de Riemann par $\\zeta(s) = \\sum_{n=1}^{+\\infty} \\frac{1}{n^s}$ pour $s \\in ]1, +\\infty[$.\n1. Montrer que la série converge normalement sur $[a, +\\infty[$ pour tout $a > 1$.\n2. En déduire que $\\zeta$ est continue sur $]1, +\\infty[$.\n3. Démontrer que $\\zeta$ est de classe $\\mathcal{C}^\\infty$ sur $]1, +\\infty[$ et exprimer $\\zeta^{(k)}(s)$.\n4. Déterminer la limite de $\\zeta(s)$ quand $s \\to +\\infty$, puis un équivalent quand $s \\to 1^+$.',
    hints: [
      'Pour le terme général $u_n(s) = n^{-s} = e^{-s \\ln n}$, la dérivée $k$-ième vaut $(-1)^k (\\ln n)^k n^{-s}$.',
      'Pour $s \\to 1^+$, comparez la série à l\'intégrale $\\int_1^{+\\infty} t^{-s}\\mathrm{d}t = \\frac{1}{s-1}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Convergence normale sur $[a, +\\infty[$',
          explication: 'Pour $s \\ge a > 1$, $|n^{-s}| = n^{-s} \\le n^{-a}$. Comme $a > 1$, la série de Riemann $\\sum n^{-a}$ converge. Donc $\\|u_n\\|_{\\infty, [a, +\\infty[} \\le n^{-a}$, prouvant la convergence normale sur $[a, +\\infty[$.'
        },
        {
          titre: '2. Continuité',
          explication: 'Chaque fonction $s \\mapsto n^{-s}$ est continue sur $]1, +\\infty[$. Par convergence normale (donc uniforme) sur tout segment inclus dans $]1, +\\infty[$, la somme $\\zeta$ est continue sur $]1, +\\infty[$.'
        },
        {
          titre: '3. Caractère $\\mathcal{C}^\\infty$',
          explication: 'Pour tout $k \\ge 1$, $u_n^{(k)}(s) = (-1)^k (\\ln n)^k n^{-s}$. Pour $s \\ge a > 1$, $|u_n^{(k)}(s)| \\le (\\ln n)^k n^{-a} = o(n^{-(1+a)/2})$. Comme $\\frac{1+a}{2} > 1$, la série des dérivées converge normalement sur $[a, +\\infty[$. Donc $\\zeta$ est $\\mathcal{C}^\\infty$ et $\\zeta^{(k)}(s) = \\sum_{n=1}^{+\\infty} \\frac{(-1)^k (\\ln n)^k}{n^s}$.'
        },
        {
          titre: '4. Limites aux bornes',
          explication: 'Quand $s \\to +\\infty$, $\\zeta(s) = 1 + \\sum_{n=2}^{+\\infty} n^{-s} \\to 1$ par convergence dominée discrète. Par encadrement intégral, $\\int_1^{+\\infty} t^{-s}\\,\\mathrm{d}t \\le \\zeta(s) \\le 1 + \\int_1^{+\\infty} t^{-s}\\,\\mathrm{d}t$, ce qui donne $\\frac{1}{s-1} \\le \\zeta(s) \\le 1 + \\frac{1}{s-1}$, d\'où $\\zeta(s) \\sim_{s \\to 1^+} \\frac{1}{s-1}$.'
        }
      ],
      conclusion: 'La fonction zêta admet un pôle simple en $s=1$ de résidu 1.',
      reflexeDuCorrecteur: 'Pour étudier une série de fonctions sur un intervalle ouvert $]1, +\\infty[$, toujours poser un compact $[a, b]$ ou une demi-droite $[a, +\\infty[$ avec $a > 1$.'
    }
  },
  {
    id: 'exo-quinq-14-polynomes-tchebychev-minimax',
    title: 'Polynômes de Tchebychev et propriété de minimax sur $[-1, 1]$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-polynomes-fractions-rationnelles',
    chapitreTitre: 'Polynômes $\\mathbb{K}[X]$ & Fractions Rationnelles',
    filieres: ['MP', 'MPI'],
    annee: '1ère année',
    difficulte: 3,
    origin: 'X-ENS MP',
    dureeEstimeeMin: 35,
    enonce: 'On définit les polynômes de Tchebychev de première espèce par $T_n(\\cos \\theta) = \\cos(n \\theta)$ pour tout $\\theta \\in \\mathbb{R}$.\n1. Établir la relation de récurrence à trois termes : $T_{n+1}(X) = 2 X T_n(X) - T_{n-1}(X)$.\n2. En déduire le degré et le coefficient dominant de $T_n$ pour $n \\ge 1$.\n3. On pose $\\tilde{T}_n = \\frac{1}{2^{n-1}} T_n$. Montrer que $\\|\\tilde{T}_n\\|_{\\infty, [-1, 1]} = \\frac{1}{2^{n-1}}$.\n4. Théorème d\'équioscillation de Tchebychev : Montrer que pour tout polynôme unitaire $P \\in \\mathbb{R}_n[X]$, $\\|P\\|_{\\infty, [-1, 1]} \\ge \\frac{1}{2^{n-1}}$.',
    hints: [
      'Utilisez la formule trigonométrique $\\cos((n+1)\\theta) + \\cos((n-1)\\theta) = 2\\cos\\theta\\cos(n\\theta)$.',
      'Pour le 4, raisonnez par l\'absurde : si $\\|P\\| < \\|\\tilde{T}_n\\|$, étudiez les signes du polynôme différence $\\tilde{T}_n - P$ aux $n+1$ points d\'alternance $\\theta_k = \\frac{k\\pi}{n}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Récurrence trigonométrique',
          explication: 'Par l\'identité $\\cos((n+1)\\theta) + \\cos((n-1)\\theta) = 2\\cos\\theta\\cos(n\\theta)$, en posant $x = \\cos\\theta$, on a $T_{n+1}(x) + T_{n-1}(x) = 2 x T_n(x)$, d\'où $T_{n+1}(X) = 2 X T_n(X) - T_{n-1}(X)$.'
        },
        {
          titre: '2. Degré et coefficient dominant',
          explication: 'Comme $T_0(X) = 1$ et $T_1(X) = X$, par récurrence immédiate, $\\deg(T_n) = n$ et son coefficient dominant est $2^{n-1}$ pour tout $n \\ge 1$.'
        },
        {
          titre: '3. Norme infinie du polynôme unitaire',
          explication: 'Comme $|\\cos(n\\theta)| \\le 1$ et vaut $\\pm 1$ pour $\\theta_k = \\frac{k\\pi}{n}$, la norme infinie de $T_n$ sur $[-1, 1]$ est exactement 1. Donc pour $\\tilde{T}_n = 2^{1-n} T_n$, $\\|\\tilde{T}_n\\|_{\\infty, [-1, 1]} = 2^{1-n}$.'
        },
        {
          titre: '4. Propriété de minimax',
          explication: 'Supposons qu\'il existe un polynôme unitaire $P$ de degré $n$ tel que $\\|P\\|_{\\infty} < 2^{1-n}$. Posons $Q = \\tilde{T}_n - P$. Puisque $\\tilde{T}_n$ et $P$ sont tous deux unitaires de degré $n$, $\\deg(Q) \\le n-1$. En évaluant en $x_k = \\cos(k\\pi/n)$ pour $k = 0, \\dots, n$, $\\tilde{T}_n(x_k) = (-1)^k 2^{1-n}$. Comme $|P(x_k)| < 2^{1-n}$, le signe de $Q(x_k)$ est le même que celui de $\\tilde{T}_n(x_k)$, c\'est-à-dire $(-1)^k$. D\'après le théorème des valeurs intermédiaires, $Q$ s\'annule au moins une fois sur chaque intervalle $]x_{k+1}, x_k[$, soit au moins $n$ racines distinctes. Comme $\\deg(Q) \\le n-1$, ceci impose $Q = 0$, contradiction.'
        }
      ],
      conclusion: 'Le polynôme de Tchebychev unitaire $\\tilde{T}_n$ minimise la norme infinie sur $[-1, 1]$ parmi tous les polynômes unitaires de degré $n$.',
      reflexeDuCorrecteur: 'L\'argument d\'alternance de signe aux points extrémaux est le réflexe numéro un pour démontrer une propriété minimax.'
    }
  },
  {
    id: 'exo-quinq-15-equation-airy-serie-entiere',
    title: 'Résolution de l\'équation différentielle d\'Airy $y\'\' - x y = 0$ par série entière',
    matiere: 'Mathématiques',
    chapitreId: 'maths-series-entieres-harmonique',
    chapitreTitre: 'Séries Entières & Analyse Harmonique',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale-Supélec',
    dureeEstimeeMin: 25,
    enonce: 'On considère l\'équation différentielle linéaire du second ordre d\'Airy :\n$$y\'\' - x y = 0$$\n1. On cherche une solution développable en série entière $y(x) = \\sum_{n=0}^{+\\infty} a_n x^n$ avec $y(0) = a_0$ et $y\'(0) = a_1$.\n2. Établir la relation de récurrence vérifiée par les coefficients $a_n$.\n3. Exprimer les coefficients $a_{3k}$, $a_{3k+1}$ et $a_{3k+2}$ en fonction de $a_0$ et $a_1$.\n4. Déterminer le rayon de convergence de la série entière obtenue.',
    hints: [
      'Injectez $y(x) = \\sum a_n x^n$ et écrivez $y\'\'(x) = \\sum (n+2)(n+1) a_{n+2} x^n$ et $x y(x) = \\sum a_{n-1} x^n$.',
      'Appliquez la règle de d\'Alembert pour le rayon de convergence.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Écriture en série entière',
          explication: 'En substituant dans l\'équation :\n$$\\sum_{n=0}^{+\\infty} (n+2)(n+1) a_{n+2} x^n - \\sum_{n=1}^{+\\infty} a_{n-1} x^n = 0$$\nPour $n=0$ : $2 a_2 = 0 \\implies a_2 = 0$. Pour tout $n \\ge 1$ :\n$$(n+2)(n+1) a_{n+2} = a_{n-1} \\iff a_{n+3} = \\frac{a_n}{(n+3)(n+2)}$$'
        },
        {
          titre: '2. Formules explicites',
          explication: '- Pour $n \\equiv 2 \\pmod 3$ : comme $a_2 = 0$, $a_{3k+2} = 0$ pour tout $k$.\n- Pour $n = 3k$ : $a_{3k} = \\frac{a_0}{\\prod_{j=1}^k (3j)(3j-1)}$.\n- Pour $n = 3k+1$ : $a_{3k+1} = \\frac{a_1}{\\prod_{j=1}^k (3j+1)(3j)}$.'
        },
        {
          titre: '3. Rayon de convergence',
          explication: 'Pour chaque série partielle, le rapport des termes consécutifs vaut $\\frac{a_{3k+3} x^{3k+3}}{a_{3k} x^{3k}} = \\frac{x^3}{(3k+3)(3k+2)} \\xrightarrow{k \\to +\\infty} 0$. D\'après la règle de d\'Alembert, le rayon de convergence est infini : $R = +\\infty$.'
        }
      ],
      conclusion: 'Les solutions forment un sous-espace vectoriel de dimension 2 de fonctions entières sur $\\mathbb{R}$ (fonctions d\'Airy $\\mathrm{Ai}$ et $\\mathrm{Bi}$).',
      reflexeDuCorrecteur: 'Vérifier systématiquement le premier terme constant $x^0$ pour identifier les coefficients nuls ($a_2 = 0$).'
    }
  },
  {
    id: 'exo-quinq-16-theoreme-baire-espace-banach',
    title: 'Théorème de Baire et non-existence de base dénombrable pour un Banach de dimension infinie',
    matiere: 'Mathématiques',
    chapitreId: 'maths-topologie-evn-compacite',
    chapitreTitre: 'Topologie des EVN : Compacité, Connexité par Arcs & Normes Équivalentes',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral ENS MP / MPI',
    dureeEstimeeMin: 30,
    enonce: 'On rappelle le théorème de Baire : dans un espace métrique complet $(E, d)$, toute intersection dénombrable d\'ouverts denses est dense.\n1. Montrer qu\'un sous-espace vectoriel strict $F$ d\'un espace vectoriel normé $E$ est d\'intérieur vide : $\\mathring{F} = \\emptyset$.\n2. En déduire qu\'un sous-espace vectoriel de dimension finie est un fermé d\'intérieur vide dans $E$.\n3. Démontrer qu\'un espace de Banach (espace vectoriel normé complet) de dimension infinie ne peut jamais posséder de base de Hamel algébrique dénombrable.\n4. Application : montrer que l\'espace $\\mathbb{R}[X]$ muni de n\'importe quelle norme ne peut pas être complet.',
    hints: [
      'Si $F$ contenait une boule ouverte $B(x_0, r)$, par translation et homothétie, il contiendrait $E$ tout entier.',
      'Si $(e_n)_{n \\in \\mathbb{N}}$ était une base dénombrable, écrivez $E = \\bigcup_{N=0}^{+\\infty} \\mathrm{Vect}(e_0, \\dots, e_N)$ et appliquez Baire.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Intérieur vide d\'un sous-espace strict',
          explication: 'Supposons qu\'il existe $x_0 \\in F$ et $r > 0$ tel que $B(x_0, r) \\subset F$. Pour tout $v \\in E$, le vecteur $x_0 + \\frac{r}{2 \\|v\\|} v \\in B(x_0, r) \\subset F$. Par soustraction avec $x_0 \\in F$, on en déduit que $\\frac{r}{2 \\|v\\|} v \\in F$, donc $v \\in F$. On aurait alors $F = E$, contradiction. Donc $\\mathring{F} = \\emptyset$.'
        },
        {
          titre: '2. Fermeture et intérieur vide en dimension finie',
          explication: 'Tout sous-espace de dimension finie d\'un EVN est fermé. Si $E$ est de dimension infinie, un tel sous-espace est strict, donc fermé d\'intérieur vide.'
        },
        {
          titre: '3. Preuve par Baire',
          explication: 'Supposons par l\'absurde que $E$ admette une base dénombrable $(e_n)_{n \\in \\mathbb{N}}$. Alors $E = \\bigcup_{N=0}^{+\\infty} F_N$ où $F_N = \\mathrm{Vect}(e_0, \\dots, e_N)$. Chaque $F_N$ est fermé et d\'intérieur vide. Leurs complémentaires $O_N = E \\setminus F_N$ sont des ouverts denses. D\'après le théorème de Baire, $\\bigcap_{N=0}^{+\\infty} O_N$ est dense dans $E$, donc non vide. Or par passage au complémentaire :\n$$\\bigcap_{N=0}^{+\\infty} O_N = E \\setminus \\left( \\bigcup_{N=0}^{+\\infty} F_N \\right) = E \\setminus E = \\emptyset$$\nUne intersection dense ne peut pas être vide : contradiction !'
        },
        {
          titre: '4. Non-complétude de $\\mathbb{R}[X]$',
          explication: 'L\'espace des polynômes $\\mathbb{R}[X]$ possède la base dénombrable $(X^n)_{n \\in \\mathbb{N}}$. D\'après le résultat précédent, il ne peut être complet pour aucune norme.'
        }
      ],
      conclusion: 'Un espace vectoriel normé possédant une base dénombrable (comme $\\mathbb{R}[X]$) n\'est jamais un espace de Banach.',
      reflexeDuCorrecteur: 'Pour prouver qu\'un EVN n\'est pas complet sans construire de suite de Cauchy explicite, le théorème de Baire est l\'arme absolue.'
    }
  },
  {
    id: 'exo-quinq-17-endomorphismes-normaux-diagonalisation',
    title: 'Endomorphismes normaux : $u \\circ u^* = u^* \\circ u$ et diagonalisation unitaire',
    matiere: 'Mathématiques',
    chapitreId: 'maths-espaces-euclidiens-theoreme-spectral',
    chapitreTitre: 'Espaces Euclidiens & Théorème Spectral',
    filieres: ['MP', 'MPI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts MP',
    dureeEstimeeMin: 25,
    enonce: 'Soit $E$ un espace préhilbertien complexe de dimension finie. Un endomorphisme $u \\in \\mathcal{L}(E)$ est dit normal si $u \\circ u^* = u^* \\circ u$.\n1. Montrer que $\\|u(x)\\| = \\|u^*(x)\\|$ pour tout $x \\in E$.\n2. En déduire que $\\ker(u) = \\ker(u^*)$ et que pour tout $\\lambda \\in \\mathbb{C}$, $u(x) = \\lambda x \\iff u^*(x) = \\bar{\\lambda} x$.\n3. Démontrer que si $F$ est un sous-espace stable par $u$, alors son orthogonal $F^\\perp$ est également stable par $u$.\n4. En déduire que tout endomorphisme normal est diagonalisable dans une base orthonormale.',
    hints: [
      'Calculez $\\|u(x)\\|^2 = \\langle u(x), u(x) \\rangle = \\langle x, u^*(u(x)) \\rangle$.',
      'Appliquez le résultat à l\'endomorphisme normal $v = u - \\lambda \\mathrm{id}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Égalité des normes',
          explication: 'Pour tout $x \\in E$ :\n$$\\|u(x)\\|^2 = \\langle u(x), u(x) \\rangle = \\langle x, (u^* \\circ u)(x) \\rangle = \\langle x, (u \\circ u^*)(x) \\rangle = \\langle u^*(x), u^*(x) \\rangle = \\|u^*(x)\\|^2$$\nD\'où $\\|u(x)\\| = \\|u^*(x)\\|$.'
        },
        {
          titre: '2. Vecteurs propres de $u$ et $u^*$',
          explication: 'L\'endomorphisme $v = u - \\lambda \\mathrm{id}$ vérifie $v^* = u^* - \\bar{\\lambda} \\mathrm{id}$ et commute avec son adjoint ($v$ est normal). D\'après la question 1, $\\|(u - \\lambda \\mathrm{id})(x)\\| = \\|(u^* - \\bar{\\lambda} \\mathrm{id})(x)\\|$. Par conséquent, $(u - \\lambda \\mathrm{id})(x) = 0 \\iff (u^* - \\bar{\\lambda} \\mathrm{id})(x) = 0$.'
        },
        {
          titre: '3. Stabilité de l\'orthogonal',
          explication: 'Soit $x \\in F^\\perp$. Pour tout $y \\in F$, $\\langle u(x), y \\rangle = \\langle x, u^*(y) \\rangle$. Comme $F$ est stable par $u$, il est aussi stable par $u^*$ en dimension finie. Donc $u^*(y) \\in F$, ce qui implique $\\langle x, u^*(y) \\rangle = 0$. Donc $u(x) \\in F^\\perp$.'
        },
        {
          titre: '4. Diagonalisation unitaire',
          explication: 'Sur $\\mathbb{C}$, le polynôme caractéristique de $u$ est scindé, donc $u$ admet au moins une valeur propre $\\lambda_1$ et une droite propre $D = \\mathbb{C} x_1$. La droite $D$ est stable par $u$, donc son orthogonal $D^\\perp$ de dimension $n-1$ est également stable par $u$. On conclut par récurrence sur la dimension.'
        }
      ],
      conclusion: 'Les endomorphismes normaux généralisent les matrices hermitiennes, anti-hermitiennes et unitaires dans un même cadre spectral.',
      reflexeDuCorrecteur: 'Pour relier un endomorphisme à son adjoint, passer toujours par le produit scalaire $\\langle u(x), x \\rangle$.'
    }
  },
  {
    id: 'exo-quinq-18-groupe-so3-quaternions',
    title: 'Groupe spécial orthogonal $SO(3)$ et axe d\'une rotation vectorielle',
    matiere: 'Mathématiques',
    chapitreId: 'maths-espaces-euclidiens-theoreme-spectral',
    chapitreTitre: 'Espaces Euclidiens & Théorème Spectral',
    filieres: ['MP', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Oral X MP / PSI',
    dureeEstimeeMin: 25,
    enonce: 'Soit $E$ un espace vectoriel euclidien orienté de dimension 3 et soit $R \\in SO(E)$ une rotation vectorielle distincte de l\'identité.\n1. Montrer que 1 est valeur propre de $R$ et que $\\dim(\\ker(R - \\mathrm{id})) = 1$. L\'axe de rotation est la droite orientée $\\mathbb{R} \\vec{u}$ avec $\\|\\vec{u}\\| = 1$.\n2. Montrer que dans une base orthonormale directe adaptée $(\\vec{e}_1, \\vec{e}_2, \\vec{u})$, la matrice de $R$ s\'écrit :\n$$M = \\begin{pmatrix} \\cos \\theta & -\\sin \\theta & 0 \\\\ \\sin \\theta & \\cos \\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$$\n3. Établir que $\\mathrm{Tr}(R) = 1 + 2 \\cos \\theta$.\n4. Déterminer l\'angle et l\'axe de la matrice $A = \\frac{1}{3} \\begin{pmatrix} 2 & -1 & 2 \\\\ 2 & 2 & -1 \\\\ -1 & 2 & 2 \\end{pmatrix}$.',
    hints: [
      'Pour le 1, étudiez $\\det(R - I) = \\det(R - R R^T) = \\det(R) \\det(I - R^T) = -\\det(R - I)$.',
      'Pour la matrice numérique, vérifiez d\'abord qu\'elle est orthogonale directe, calculez sa trace pour trouver $\\cos\\theta$, puis résolvez $A X = X$ pour trouver l\'axe.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Existence d\'un axe invariant',
          explication: 'Comme $\\det(R) = 1$, $\\det(R - I) = \\det(R(I - R^T)) = \\det(R) \\det(I - R)^T = \\det(I - R) = (-1)^3 \\det(R - I) = -\\det(R - I)$. Par conséquent, $\\det(R - I) = 0$, donc 1 est valeur propre. Comme $R \\neq \\mathrm{id}$, l\'axe invariant est de dimension 1.'
        },
        {
          titre: '2. Forme réduite',
          explication: 'Le plan orthogonal à l\'axe $P = (\\mathbb{R}\\vec{u})^\\perp$ est stable par $R$. La restriction de $R$ à $P$ conserve le produit scalaire et l\'orientation, c\'est donc une rotation plane d\'angle $\\theta$.'
        },
        {
          titre: '3. Trace',
          explication: 'La trace étant invariante par changement de base, $\\mathrm{Tr}(R) = \\cos\\theta + \\cos\\theta + 1 = 1 + 2\\cos\\theta$.'
        },
        {
          titre: '4. Application numérique',
          explication: '- Trace : $\\mathrm{Tr}(A) = \\frac{2+2+2}{3} = 2$. On a $1 + 2\\cos\\theta = 2 \\implies \\cos\\theta = 1/2 \\implies \\theta = \\pm \\frac{\\pi}{3}$.\n- Axe : $A X = X \\iff (3A - 3I) X = 0 \\iff \\begin{pmatrix} -1 & -1 & 2 \\\\ 2 & -1 & -1 \\\\ -1 & 2 & -1 \\end{pmatrix} X = 0$, ce qui donne $x = y = z$. L\'axe est porté par $\\vec{u} = \\frac{1}{\\sqrt{3}}(1, 1, 1)^T$.\n- Signe de l\'angle : On teste avec le produit mixte $[\vec{x}, A\\vec{x}, \\vec{u}] > 0$ qui donne $\\theta = +\\frac{\\pi}{3}$.'
        }
      ],
      conclusion: 'Toute matrice de $SO(3)$ est caractérisée par un axe orienté et un angle de rotation dans $[0, \\pi]$.',
      reflexeDuCorrecteur: 'Pour orienter l\'angle d\'une rotation 3D, toujours évaluer le signe de $\\langle \\vec{u}, \\vec{x} \\wedge R(\\vec{x}) \\rangle$ avec un vecteur $\\vec{x}$ non colinéaire à l\'axe.'
    }
  },
  {
    id: 'exo-quinq-19-rolle-intervalle-non-borne',
    title: 'Théorème de Rolle sur intervalle non borné et zéros de dérivées successives',
    matiere: 'Mathématiques',
    chapitreId: 'maths-taylor-dl-asymptotique',
    chapitreTitre: 'Formules de Taylor, Développements Limités & Calcul Asymptotique',
    filieres: ['MPSI', 'MP', 'PCSI', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'MPSI / Concours Communs',
    dureeEstimeeMin: 20,
    enonce: 'Soit $f : [0, +\\infty[ \\to \\mathbb{R}$ une fonction dérivable telle que $f(0) = 0$ et $\\lim_{x \\to +\\infty} f(x) = 0$.\n1. Démontrer qu\'il existe $c \\in ]0, +\\infty[$ tel que $f\'(c) = 0$ (théorème de Rolle généralisé).\n2. Application : Soit $P \\in \\mathbb{R}[X]$ un polynôme scindé à racines simples sur $\\mathbb{R}$. Montrer que son polynôme dérivé $P\'$ est également scindé à racines simples.\n3. Montrer que les racines de $P\'$ séparent strictement celles de $P$.',
    hints: [
      'Si $f$ est constante nulle, tout point convient. Sinon, utilisez la compacité par compactification en considérant un extremum atteint.',
      'Si $P$ a $n$ racines réelles ordonnées $x_1 < x_2 < \\dots < x_n$, appliquez Rolle sur chaque intervalle $[x_k, x_{k+1}]$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Rolle sur $[0, +\\infty[$',
          explication: 'Si $f$ est identiquement nulle, n\'importe quel $c > 0$ convient. Sinon, supposons qu\'il existe $x_0 > 0$ tel que $f(x_0) > 0$. Posons $\\varepsilon = f(x_0)/2 > 0$. Comme $\\lim_{+\\infty} f = 0$, il existe $A > x_0$ tel que pour tout $x \\ge A$, $|f(x)| \\le \\varepsilon$. La fonction $f$ étant continue sur le segment $[0, A]$, elle y admet un maximum en un point $c$. Puisque $f(c) \\ge f(x_0) > \\varepsilon \\ge f(0)$ et $f(c) > f(A)$, le maximum $c$ appartient à l\'ouvert $]0, A[$. Comme $f$ est dérivable, $f\'(c) = 0$.'
        },
        {
          titre: '2. Racines de $P\'$',
          explication: 'Soit $P$ de degré $n$ admettant $n$ racines réelles distinctes $x_1 < x_2 < \\dots < x_n$. Pour chaque $k \\in \\{1, \\dots, n-1\\}$, $P$ est continue sur $[x_k, x_{k+1}]$, dérivable sur $]x_k, x_{k+1}[$ et $P(x_k) = P(x_{k+1}) = 0$. D\'après le théorème de Rolle classique, il existe $\\xi_k \\in ]x_k, x_{k+1}[$ tel que $P\'(\\xi_k) = 0$.'
        },
        {
          titre: '3. Séparation stricte',
          explication: 'On a construit $n-1$ racines distinctes $\\xi_1 < \\xi_2 < \\dots < \\xi_{n-1}$ de $P\'$. Comme $\\deg(P\') = n-1$, ce sont TOUTES les racines de $P\'$, et elles sont toutes réelles, simples, et vérifient $x_1 < \\xi_1 < x_2 < \\xi_2 < \\dots < \\xi_{n-1} < x_n$.'
        }
      ],
      conclusion: 'Les racines de la dérivée d\'un polynôme scindé à racines simples s\'entrelacent strictement avec celles du polynôme.',
      reflexeDuCorrecteur: 'Pour adapter un théorème de segment à un intervalle non borné, exploiter la limite en l\'infini pour isoler un segment $[0, A]$ où le phénomène est confiné.'
    }
  },
  {
    id: 'exo-quinq-20-astroide-green-riemann',
    title: 'Calcul de l\'aire et de la longueur de l\'astroïde par la formule de Green-Riemann',
    matiere: 'Mathématiques',
    chapitreId: 'maths-integrales-multiples-green-riemann',
    chapitreTitre: 'Intégrales Multiples, Green-Riemann & Formules de Stokes',
    filieres: ['MP', 'PC', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PSI / PC',
    dureeEstimeeMin: 25,
    enonce: 'On considère l\'astroïde d\'équation cartésienne $x^{2/3} + y^{2/3} = a^{2/3}$ ($a > 0$), paramétrée par :\n$$x(t) = a \\cos^3 t, \\quad y(t) = a \\sin^3 t, \\quad t \\in [0, 2\\pi]$$\n1. Calculer la longueur totale $L$ de l\'astroïde.\n2. En utilisant la formule de Green-Riemann $\\mathcal{A} = \\frac{1}{2} \\oint_{\\partial D} (x\\,\\mathrm{d}y - y\\,\\mathrm{d}x)$, calculer l\'aire $\\mathcal{A}$ délimitée par cette courbe.\n3. Comparer cette aire à celle du disque circonscrit de rayon $a$.',
    hints: [
      'Pour la longueur, par symétrie, calculez 4 fois la longueur du quart situé dans le premier quadrant $t \\in [0, \\pi/2]$.',
      'Pour l\'aire, exprimez $x(t) y\'(t) - y(t) x\'(t)$ en fonction de $\\cos t$ et $\\sin t$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Longueur totale',
          explication: 'Les dérivées valent $x\'(t) = -3a \\cos^2 t \\sin t$ et $y\'(t) = 3a \\sin^2 t \\cos t$. L\'élément de longueur vaut :\n$$\\mathrm{d}s = \\sqrt{x\'(t)^2 + y\'(t)^2}\\,\\mathrm{d}t = 3a |\\cos t \\sin t| \\sqrt{\\cos^2 t + \\sin^2 t}\\,\\mathrm{d}t = 3a |\\cos t \\sin t|\\,\\mathrm{d}t$$\nSur $[0, \\pi/2]$, $\\cos t \\sin t = \\frac{1}{2}\\sin(2t) \\ge 0$. Par symétrie quadruple :\n$$L = 4 \\int_0^{\\pi/2} 3a \\cos t \\sin t\\,\\mathrm{d}t = 12a \\left[ \\frac{\\sin^2 t}{2} \\right]_0^{\\pi/2} = 6a$$'
        },
        {
          titre: '2. Aire par Green-Riemann',
          explication: 'On calcule la forme différentielle :\n$$x \\mathrm{d}y - y \\mathrm{d}x = (a \\cos^3 t)(3a \\sin^2 t \\cos t) - (a \\sin^3 t)(-3a \\cos^2 t \\sin t) = 3 a^2 \\cos^2 t \\sin^2 t (\\cos^2 t + \\sin^2 t)\\,\\mathrm{d}t = 3 a^2 \\cos^2 t \\sin^2 t\\,\\mathrm{d}t$$\nEn intégrant sur $[0, 2\\pi]$ avec $\\cos^2 t \\sin^2 t = \\frac{\\sin^2(2t)}{4} = \\frac{1 - \\cos(4t)}{8}$ :\n$$\\mathcal{A} = \\frac{1}{2} \\int_0^{2\\pi} 3a^2 \\frac{1 - \\cos(4t)}{8}\\,\\mathrm{d}t = \\frac{3a^2}{16} \\times 2\\pi = \\frac{3\\pi a^2}{8}$$'
        },
        {
          titre: '3. Comparaison au disque',
          explication: 'L\'aire du disque de rayon $a$ est $\\pi a^2$. L\'aire de l\'astroïde représente exactement $\\frac{3}{8} = 37{,}5\\%$ de l\'aire du disque circonscrit.'
        }
      ],
      conclusion: 'La formule de Green-Riemann permet d\'obtenir l\'aire sans avoir à exprimer $y$ en fonction de $x$.',
      reflexeDuCorrecteur: 'Toujours exploiter les 4 symétries axiales d\'une courbe pour réduire l\'intervalle d\'intégration à $[0, \\pi/2]$.'
    }
  },

  // ==========================================
  // PHYSIQUE (21 à 25)
  // ==========================================
  {
    id: 'exo-quinq-21-michelson-doublet-sodium-brouillage',
    title: 'Interféromètre de Michelson : Mesure de l\'écart de doublet $\\Delta \\lambda$ par brouillage',
    matiere: 'Physique',
    chapitreId: 'physique-interferences-deux-ondes-michelson',
    chapitreTitre: 'Optique Ondulatoire : Interférences à Deux Ondes & Interféromètre de Michelson',
    filieres: ['PC', 'MP', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / MP',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Interféromètre de Michelson réglé en Lame d\'Air',
      type: 'michelson-optique',
      legende: 'Formation des anneaux d\'égale inclinaison localisés à l\'infini avec chariot micrométrique',
      donneesCles: [
        { label: 'Longueur d\'onde moyenne', symbole: '\\lambda_0', valeur: '589,3 nm' },
        { label: 'Déplacement chariot', symbole: '\\Delta e', valeur: '0,289 mm' },
        { label: 'Différence de marche', symbole: '\\delta', valeur: '2 e \\cos i' }
      ]
    },
    enonce: 'On éclaire un interféromètre de Michelson en configuration lame d\'air par une lampe à vapeur de sodium émettant un doublet de raies fines de longueurs d\'onde $\\lambda_1$ et $\\lambda_2$ très proches (valeur moyenne $\\lambda_0 = 589{,}3\\text{ nm}$), d\'intensités égales $I_0$.\n1. Rappeler l\'expression de la différence de marche $\\delta$ au centre des anneaux ($i=0$) en fonction de l\'épaisseur $e$ de la lame d\'air.\n2. Exprimer l\'intensité résultante $I(e)$ en tenant compte de la superposition incohérente des deux radiations.\n3. Montrer que le contraste des anneaux s\'annule périodiquement (phénomène d\'anticoïncidence ou de brouillage).\n4. Sachant que le déplacement du chariot mobile entre deux brouillages consécutifs vaut $\\Delta e = 0{,}289\\text{ mm}$, en déduire l\'écart de longueur d\'onde $\\Delta \\lambda = |\\lambda_1 - \\lambda_2|$.',
    hints: [
      'Chaque radiation produit son propre système d\'anneaux. Les intensités s\'additionnent : $I = I_{\\lambda_1} + I_{\\lambda_2}$.',
      'Le premier brouillage se produit quand une frange brillante de $\\lambda_1$ coïncide avec une frange sombre de $\\lambda_2$ au centre.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Différence de marche au centre',
          explication: 'Au centre des anneaux, l\'angle d\'incidence est nul ($i = 0$), donc $\\cos(i) = 1$. La différence de marche vaut $\\delta = 2 e$.'
        },
        {
          titre: '2. Éclairement total',
          explication: 'Comme les deux raies sont incohérentes entre elles, les intensités s\'ajoutent :\n$$I(e) = 2 I_0 \\left[ 1 + \\cos\\left(\\frac{4\\pi e}{\\lambda_1}\\right) \\right] + 2 I_0 \\left[ 1 + \\cos\\left(\\frac{4\\pi e}{\\lambda_2}\\right) \\right] = 4 I_0 \\left[ 1 + \\cos\\left(\\frac{2\\pi e (\\lambda_1 + \\lambda_2)}{\\lambda_1 \\lambda_2}\\right) \\cos\\left(\\frac{2\\pi e (\\lambda_2 - \\lambda_1)}{\\lambda_1 \\lambda_2}\\right) \\right]$$\nComme $\\lambda_1 \\approx \\lambda_2 \\approx \\lambda_0$, on a $I(e) \\approx 4 I_0 \\left[ 1 + \\cos\\left(\\frac{4\\pi e}{\\lambda_0}\\right) \\cos\\left(\\frac{2\\pi e \\Delta \\lambda}{\\lambda_0^2}\\right) \\right]$.'
        },
        {
          titre: '3. Facteur de visibilité et brouillage',
          explication: 'Le contraste vaut $V(e) = \\left| \\cos\\left(\\frac{2\\pi e \\Delta \\lambda}{\\lambda_0^2}\\right) \\right|$. Le brouillage total ($V=0$) apparaît lorsque l\'argument vaut $\\frac{\\pi}{2} + k\\pi$. La période spatiale de brouillage sur l\'épaisseur $e$ vérifie $\\frac{2\\pi \\Delta e \\Delta \\lambda}{\\lambda_0^2} = \\pi$, soit :'
        },
        {
          titre: '4. Calcul de l\'écart de doublet',
          explication: '$$\\Delta \\lambda = \\frac{\\lambda_0^2}{2 \\Delta e}$$\nApplication numérique : $\\Delta \\lambda = \\frac{(589{,}3 \\times 10^{-9})^2}{2 \\times 0{,}289 \\times 10^{-3}} \\approx 0{,}60\\text{ nm} = 6{,}0\\text{ Å}$. On retrouve le célèbre doublet $D_1/D_2$ du sodium (589,0 nm et 589,6 nm).'
        }
      ],
      conclusion: 'Le Michelson permet une métrologie spectrale de haute précision par simple décompte de battements spatiaux.',
      reflexeDuCorrecteur: 'Ne jamais oublier le facteur 2 entre le déplacement géométrique du miroir $\\Delta e$ et la variation de chemin optique $\\Delta \\delta = 2 \\Delta e$.'
    }
  },
  {
    id: 'exo-quinq-22-michelson-coin-air-indice-lame',
    title: 'Interféromètre de Michelson : Mesure de l\'indice d\'une lame mince en coin d\'air',
    matiere: 'Physique',
    chapitreId: 'physique-interferences-deux-ondes-michelson',
    chapitreTitre: 'Optique Ondulatoire : Interférences à Deux Ondes & Interféromètre de Michelson',
    filieres: ['PSI', 'PC', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Mines-Ponts PSI',
    dureeEstimeeMin: 25,
    schema: {
      titre: 'Interféromètre de Michelson en Coin d\'Air',
      type: 'michelson-optique',
      legende: 'Défilement de franges rectilignes lors de l\'introduction d\'une lame transparente',
      donneesCles: [
        { label: 'Longueur d\'onde', symbole: '\\lambda', valeur: '632,8 nm (He-Ne)' },
        { label: 'Épaisseur lame', symbole: 'e', valeur: '25,0 µm' },
        { label: 'Franges défilées', symbole: 'N', valeur: '39' }
      ]
    },
    enonce: 'On règle un interféromètre de Michelson en coin d\'air d\'angle $\\alpha$, éclairé sous incidence quasi-normale par un laser hélium-néon de longueur d\'onde $\\lambda_0 = 632{,}8\\text{ nm}$.\n1. Rappeler l\'expression de l\'interfrange $i$ sur les miroirs en fonction de $\\lambda_0$ et $\\alpha$.\n2. On introduit dans l\'un des deux bras une lame mince transparente d\'épaisseur $e = 25{,}0\\;\\mu\\text{m}$ et d\'indice $n$ inconnu, perpendiculairement au faisceau. Exprimer la variation de différence de marche $\\Delta \\delta$ induite par la lame.\n3. Lors de l\'introduction de la lame, on compte le défilement de $N = 39$ franges brillantes devant un réticule fixe. En déduire la valeur de l\'indice de réfraction $n$ de la lame.',
    hints: [
      'La lumière traverse deux fois la lame (aller et retour). Le chemin optique dans l\'air $2e$ est remplacé par $2 n e$.',
      'Chaque défilement d\'une frange correspond à une variation de différence de marche de $\\lambda_0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Interfrange en coin d\'air',
          explication: 'La différence de marche est $\\delta(x) = 2 \\alpha x$. L\'interfrange est la distance séparant deux franges consécutives : $\\delta(x+i) - \\delta(x) = \\lambda_0 \\implies i = \\frac{\\lambda_0}{2 \\alpha}$.'
        },
        {
          titre: '2. Variation de différence de marche induite',
          explication: 'Sur le trajet aller-retour d\'épaisseur $e$, l\'air d\'indice 1 est remplacé par le matériau d\'indice $n$. La variation de chemin optique vaut :\n$$\\Delta \\delta = 2(n - 1) e$$'
        },
        {
          titre: '3. Détermination de l\'indice',
          explication: 'Le défilement de $N$ franges signifie que $\\Delta \\delta = N \\lambda_0$, d\'où $2(n - 1) e = N \\lambda_0$. On isole $n$ :\n$$n = 1 + \\frac{N \\lambda_0}{2 e}$$\nApplication numérique : $n = 1 + \\frac{39 \\times 632{,}8 \\times 10^{-9}}{2 \\times 25{,}0 \\times 10^{-6}} = 1 + \\frac{2{,}468 \\times 10^{-5}}{5{,}0 \\times 10^{-5}} = 1 + 0{,}4936 = 1{,}494$.'
        }
      ],
      conclusion: 'L\'indice trouvé $n \\approx 1{,}49$ correspond typiquement à celui du plexiglas (PMMA).',
      reflexeDuCorrecteur: 'Toujours compter un double passage (aller et retour, soit facteur 2) quand une lame est insérée dans un bras de Michelson.'
    }
  },
  {
    id: 'exo-quinq-23-bilan-radiatif-serre-temperature',
    title: 'Bilan radiatif d\'une serre et modèle climatique à une couche isotherme',
    matiere: 'Physique',
    chapitreId: 'physique-rayonnement-thermique-corps-noir',
    chapitreTitre: 'Physique Thermique : Rayonnement Thermique & Corps Noir',
    filieres: ['PC', 'BCPST', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'CCINP PC / BCPST',
    dureeEstimeeMin: 25,
    enonce: 'On modélise l\'atmosphère terrestre par une vitre transparente au rayonnement solaire visible, mais totalement opaque au rayonnement infrarouge thermique (corps noir dans l\'infrarouge). La constante solaire au sommet vaut $F_s = 340\\text{ W}\\cdot\\text{m}^{-2}$ (moyennée sur la sphère), et l\'albédo terrestre est $A = 0{,}30$.\n1. Écrire le bilan radiatif de la couche atmosphérique à la température $T_a$, en tenant compte du fait qu\'elle émet vers le haut et vers le bas.\n2. Écrire le bilan radiatif de la surface terrestre à la température $T_s$.\n3. Exprimer $T_s$ et $T_a$ en fonction du flux solaire net absorbé $F_0 = (1-A) F_s$ et de la constante de Stefan $\\sigma$.\n4. Calculer numériquement $T_s$ et $T_a$. Commenter le rôle de l\'effet de serre.',
    hints: [
      'La vitre atmosphérique possède deux faces : elle rayonne $\\sigma T_a^4$ vers l\'espace et $\\sigma T_a^4$ vers le sol.',
      'À l\'équilibre global de la planète, le flux total réémis vers l\'espace doit égaler le flux solaire absorbé.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Bilan radiatif de l\'atmosphère',
          explication: 'L\'atmosphère absorbe le flux infrarouge montant du sol $\\sigma T_s^4$ et émet par ses deux faces : vers le haut $\\sigma T_a^4$ et vers le bas $\\sigma T_a^4$. À l\'équilibre thermique stationnaire :\n$$\\sigma T_s^4 = 2 \\sigma T_a^4 \\iff T_s^4 = 2 T_a^4$$'
        },
        {
          titre: '2. Bilan global au sommet',
          explication: 'Le flux solaire absorbé par le système est $F_0 = (1-A) F_s = (1 - 0{,}30) \\times 340 = 238\\text{ W/m}^2$. Vers l\'espace, seul le rayonnement infrarouge émis par la face supérieure de l\'atmosphère s\'échappe. Le bilan global donne immédiatement :\n$$\\sigma T_a^4 = F_0 \\implies T_a = \\left( \\frac{F_0}{\\sigma} \\right)^{1/4}$$\nApplication numérique : $T_a = \\left( \\frac{238}{5{,}67 \\times 10^{-8}} \\right)^{1/4} \\approx 254{,}6\\text{ K} \\; (-18{,}5^\\circ\\text{C})$.'
        },
        {
          titre: '3. Température de surface',
          explication: 'D\'après la relation de l\'étape 1 : $T_s^4 = 2 T_a^4 = \\frac{2 F_0}{\\sigma}$. On en déduit :\n$$T_s = 2^{1/4} T_a \\approx 1{,}1892 \\times 254{,}6\\text{ K} \\approx 302{,}8\\text{ K} \\; (+29{,}6^\\circ\\text{C})$$'
        },
        {
          titre: '4. Commentaire',
          explication: 'Sans atmosphère, la Terre serait à $255\\text{ K}$ (gelée). Avec une atmosphère 100% opaque en IR, la température monte à $303\\text{ K}$. L\'atmosphère réelle étant partiellement opaque (fenêtres atmosphériques), la moyenne observée est de $+15^\\circ\\text{C}$ ($288\\text{ K}$).'
        }
      ],
      conclusion: 'Le piégeage du rayonnement infrarouge tellurique et sa réémission vers le sol constituent le mécanisme fondamental de l\'effet de serre.',
      reflexeDuCorrecteur: 'Ne jamais oublier qu\'une couche atmosphérique plane rayonne par ses DEUX faces (haut et bas).'
    }
  },
  {
    id: 'exo-quinq-24-stefan-cavite-isotherme',
    title: 'Pression de radiation électromagnétique et démonstration de la loi en $T^4$',
    matiere: 'Physique',
    chapitreId: 'physique-rayonnement-thermique-corps-noir',
    chapitreTitre: 'Physique Thermique : Rayonnement Thermique & Corps Noir',
    filieres: ['MP', 'PC', 'MPI'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'Oral X PC',
    dureeEstimeeMin: 30,
    enonce: 'On considère le rayonnement de photons thermalisés dans une cavité fermée de volume $V$ à la température $T$. On admet que la pression de radiation exercée par ce gaz de photons isotrope vaut $P = \\frac{1}{3} u(T)$, où $u(T) = U/V$ est la densité volumique d\'énergie interne.\n1. Écrire la relation thermodynamique fondamentale $\\mathrm{d}U = T\\mathrm{d}S - P\\mathrm{d}V$ et exprimer la différentielle de l\'entropie $\\mathrm{d}S$.\n2. En utilisant l\'égalité des dérivées croisées de Schwarz pour l\'entropie $S(T, V)$, établir la relation générale $\\left(\\frac{\\partial U}{\\partial V}\\right)_T = T \\left(\\frac{\\partial P}{\\partial T}\\right)_V - P$.\n3. En injectant $U = V u(T)$ et $P = \\frac{1}{3} u(T)$, montrer que $u(T) = a T^4$ où $a$ est une constante.',
    hints: [
      'Exprimez $\\mathrm{d}S = \\frac{1}{T}\\mathrm{d}U + \\frac{P}{T}\\mathrm{d}V = \\frac{1}{T}\\left(\\frac{\\partial U}{\\partial T}\\right)_V \\mathrm{d}T + \\frac{1}{T}\\left[ \\left(\\frac{\\partial U}{\\partial V}\\right)_T + P \\right] \\mathrm{d}V$.',
      'Appliquez $\\frac{\\partial^2 S}{\\partial T \\partial V} = \\frac{\\partial^2 S}{\\partial V \\partial T}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Différentielle de l\'entropie',
          explication: 'Comme $U(T, V)$, $\\mathrm{d}U = \\left(\\frac{\\partial U}{\\partial T}\\right)_V \\mathrm{d}T + \\left(\\frac{\\partial U}{\\partial V}\\right)_T \\mathrm{d}V$. Donc :\n$$\\mathrm{d}S = \\frac{1}{T}\\left(\\frac{\\partial U}{\\partial T}\\right)_V \\mathrm{d}T + \\frac{1}{T}\\left[ \\left(\\frac{\\partial U}{\\partial V}\\right)_T + P \\right] \\mathrm{d}V$$'
        },
        {
          titre: '2. Première relation de Clapeyron',
          explication: 'Par le théorème de Schwarz :\n$$\\frac{\\partial}{\\partial V}\\left( \\frac{1}{T}\\left(\\frac{\\partial U}{\\partial T}\\right)_V \\right) = \\frac{\\partial}{\\partial T}\\left( \\frac{1}{T}\\left[ \\left(\\frac{\\partial U}{\\partial V}\\right)_T + P \\right] \\right)$$\nEn développant, $\\frac{1}{T} \\frac{\\partial^2 U}{\\partial V \\partial T} = -\\frac{1}{T^2}\\left[ \\left(\\frac{\\partial U}{\\partial V}\\right)_T + P \\right] + \\frac{1}{T} \\frac{\\partial^2 U}{\\partial T \\partial V} + \\frac{1}{T}\\left(\\frac{\\partial P}{\\partial T}\\right)_V$. Les dérivées secondes se simplifient, ce qui conduit à la première relation de Clapeyron :\n$$\\left(\\frac{\\partial U}{\\partial V}\\right)_T = T \\left(\\frac{\\partial P}{\\partial T}\\right)_V - P$$'
        },
        {
          titre: '3. Déduction de la loi de Stefan',
          explication: 'Comme $U = V u(T)$, on a $\\left(\\frac{\\partial U}{\\partial V}\\right)_T = u(T)$. Avec $P = \\frac{1}{3} u(T)$, $\\left(\\frac{\\partial P}{\\partial T}\\right)_V = \\frac{1}{3} u\'(T)$. L\'équation devient :\n$$u(T) = \\frac{T}{3} u\'(T) - \\frac{1}{3} u(T) \\iff \\frac{4}{3} u(T) = \\frac{T}{3} u\'(T) \\iff \\frac{u\'(T)}{u(T)} = \\frac{4}{T}$$\nEn intégrant par rapport à $T$, on obtient $\\ln u(T) = 4 \\ln T + \\mathrm{cste}$, soit $u(T) = a T^4$.'
        }
      ],
      conclusion: 'La loi de Stefan $u(T) \\propto T^4$ découle uniquement de la thermodynamique classique combinée à la pression de radiation $P = u/3$.',
      reflexeDuCorrecteur: 'Toujours exploiter l\'égalité des dérivées croisées de Schwarz sur $\\mathrm{d}S$ pour relier les coefficients thermo-élastiques.'
    }
  },
  {
    id: 'exo-quinq-25-temperature-soleil-wien',
    title: 'Température du Soleil par la loi de Wien et irradiance au niveau de l\'orbite terrestre',
    matiere: 'Physique',
    chapitreId: 'physique-rayonnement-thermique-corps-noir',
    chapitreTitre: 'Physique Thermique : Rayonnement Thermique & Corps Noir',
    filieres: ['PC', 'MP', 'BCPST'],
    annee: '2ème année',
    difficulte: 1,
    origin: 'Centrale PC / MP',
    dureeEstimeeMin: 20,
    enonce: 'Le spectre solaire présente un maximum d\'émission à la longueur d\'onde $\\lambda_{max} = 502\\text{ nm}$.\n1. En appliquant la loi de Wien $\\lambda_{max} T = 2{,}898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$, déterminer la température effective $T_\\odot$ de la photosphère solaire.\n2. Le rayon du Soleil est $R_\\odot = 6{,}96 \\times 10^8\\text{ m}$. Calculer la puissance totale émise (luminosité solaire $\\mathcal{L}_\\odot$).\n3. La distance moyenne Terre-Soleil est $D = 1{,}496 \\times 10^{11}\\text{ m}$ (1 UA). Calculer la constante solaire $C_0$ reçue hors atmosphère au niveau terrestre.',
    hints: [
      'La puissance totale émise par une sphère est $\\Phi = 4\\pi R_\\odot^2 \\sigma T^4$.',
      'Cette puissance se dilue sur une sphère de rayon $D$ : $C_0 = \\frac{\\mathcal{L}_\\odot}{4\\pi D^2}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Température de Wien',
          explication: '$$T_\\odot = \\frac{2{,}898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}}{502 \\times 10^{-9}\\text{ m}} \\approx 5773\\text{ K}$$'
        },
        {
          titre: '2. Luminosité solaire',
          explication: 'En assimilant le Soleil à un corps noir de surface $S = 4\\pi R_\\odot^2$ :\n$$\\mathcal{L}_\\odot = 4\\pi R_\\odot^2 \\sigma T_\\odot^4 = 4\\pi \\times (6{,}96 \\times 10^8)^2 \\times (5{,}670 \\times 10^{-8}) \\times (5773)^4 \\approx 3{,}84 \\times 10^{26}\\text{ W}$$'
        },
        {
          titre: '3. Constante solaire terrestre',
          explication: 'Le flux surfacique traversant la sphère de rayon $D$ vaut :\n$$C_0 = \\frac{\\mathcal{L}_\\odot}{4\\pi D^2} = \\sigma T_\\odot^4 \\left( \\frac{R_\\odot}{D} \\right)^2 = \\frac{3{,}84 \\times 10^{26}}{4\\pi \\times (1{,}496 \\times 10^{11})^2} \\approx 1367\\text{ W}\\cdot\\text{m}^{-2}$$'
        }
      ],
      conclusion: 'On retrouve la valeur universelle de la constante solaire $C_0 \\approx 1367\\text{ W/m}^2$.',
      reflexeDuCorrecteur: 'Vérifier l\'homogénéité du rapport $(R_\\odot/D)^2$, qui exprime la dilution géométrique de l\'énergie en $1/r^2$.'
    }
  }
];
