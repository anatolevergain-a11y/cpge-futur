import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART9: ExerciseItem[] = [
  {
    id: 'exo-100-56-optique-miroir-de-lloyd',
    title: 'Miroir de Lloyd & Déphasage de $\\pi$ par Réflexion Vitreuse',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Optique Ondulatoire & Interférences',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'Une fente source ponctuelle $S$ éclairée sous $\\lambda = 500\\text{ nm}$ est située à la hauteur $h = 1.0\\text{ mm}$ au-dessus du plan d\'un miroir plan horizontal de Lloyd. L\'écran d\'observation est placé perpendiculairement au miroir à une distance $D = 2.0\\text{ m}$ de la source.\n1. Identifier les deux sources secondaires cohérentes créant les interférences sur l\'écran.\n2. Établir l\'expression de la différence de marche $\\delta(x)$ en un point de l\'écran d\'abscisse $x$ comptée depuis le plan du miroir en tenant compte du saut de phase de $\\pi$ lors de la réflexion sur le dioptre d\'indice plus élevé.\n3. Quelle est la nature de la frange située exactement au niveau du plan du miroir ($x = 0$) ? Comparer aux trous d\'Young classiques.',
    hints: [
      'La source image $S\'$ est le symétrique de $S$ par rapport au plan du miroir, située à distance $2h$ de $S$.',
      'Le saut de phase de $\\pi$ équivaut à ajouter $\\lambda/2$ à la différence de marche.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Système interférentiel à deux ondes',
          explication: 'Les rayons parvenant en un point $M$ de l\'écran proviennent soit directement de la source réelle $S$, soit après réflexion sur le miroir plan. D\'après les lois de Snell-Descartes de la réflexion, tout rayon réfléchi semble provenir de la source image virtuelle $S\'$, symétrique orthogonale de $S$ par rapport au plan du miroir. L\'écartement effectif entre les deux sources cohérentes vaut $a = 2h = 2.0\\text{ mm}$.'
        },
        {
          titre: '2. Différence de marche avec saut de phase',
          explication: 'La différence de chemin géométrique s\'écrit d\'après la formule d\'Young : $\\delta_{geom} = [S\'M] - [SM] = \\frac{a x}{D} = \\frac{2 h x}{D}$.\nLors de la réflexion sur le miroir de verre d\'indice $n > 1$ dans l\'air, le champ électrique subit une inversion de signe correspondant à un déphasage à la réflexion de $\\Delta\\phi_r = \\pi$, équivalent à une différence de marche supplémentaire de $\\lambda/2$ :\n$$\\delta(x) = \\frac{2 h x}{D} + \\frac{\\lambda}{2}$$\nL\'intensité lumineuse sur l\'écran s\'écrit donc :\n$$I(x) = 2 I_0 \\left[ 1 + \\cos\\left( \\frac{2\\pi}{\\lambda} \\delta(x) \\right) \\right] = 2 I_0 \\left[ 1 - \\cos\\left( \\frac{4\\pi h x}{\\lambda D} \\right) \\right]$$'
        },
        {
          titre: '3. Frange au contact du miroir',
          explication: 'Au niveau du plan du miroir ($x = 0$) :\n$$\\delta(0) = \\frac{\\lambda}{2} \\implies I(0) = 0$$\nLa frange centrale d\'ordre 0 au contact du miroir est une **frange noire d\'extinction totale** (interférence destructive), contrairement aux fentes d\'Young où la frange centrale est brillante. Cette expérience historique de Lloyd a apporté la preuve irréfutable du déphasage de $\\pi$ par réflexion vitreuse prédit par les équations de Fresnel.'
        }
      ],
      conclusion: 'Le miroir de Lloyd est le système interférentiel par division du front d\'onde le plus simple pour vérifier les sauts de phase de Fresnel.',
      reflexeDuCorrecteur: 'Réflexion sur un milieu plus réfringent ($n_2 > n_1$) $\\implies$ saut de phase de $\\pi$ $\\implies$ ajouter $\\lambda/2$ au chemin optique.'
    }
  },
  {
    id: 'exo-100-57-diagramme-pourbaix-chlore-dismutation',
    title: 'Diagramme E-pH du Chlore & Dismutation de l\'Eau de Javel',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Oxydoréduction & Diagrammes E-pH',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'On donne les potentiels standard à $25^\\circ\\text{C}$ :\n- $E^\\circ(Cl_2(aq)/Cl^-) = 1.36\\text{ V}$\n- $E^\\circ(HClO/Cl_2(aq)) = 1.63\\text{ V}$ ($pK_a(HClO/ClO^-) = 7.5$)\n1. Déterminer le degré d\'oxydation du chlore dans $Cl^-, Cl_2, HClO$ et $ClO^-$.\n2. Expliquer pourquoi le dichlore $Cl_2(aq)$ se dismute spontanément en milieu basique. Écrire la réaction de dismutation donnant l\'eau de Javel.\n3. Pourquoi est-il extrêmement dangereux de mélanger un produit détartrant acide (acide chlorhydrique) avec de l\'eau de Javel ? Écrire la réaction de médiamutation associée.',
    hints: [
      'Dismutation : une même espèce s\'oxyde et se réduit simultanément.',
      'Médiamutation : réaction inverse de la dismutation.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Degrés d\'oxydation du chlore',
          explication: '- $Cl^-$ (ion chlorure) : degré d\'oxydation $-I$.\n- $Cl_2$ (dichlore gazeux/aqueux) : degré d\'oxydation $0$.\n- $HClO$ (acide hypochloreux) et $ClO^-$ (ion hypochlorite) : degré d\'oxydation $+I$.'
        },
        {
          titre: '2. Dismutation en milieu basique et synthèse de l\'eau de Javel',
          explication: 'Les demi-équations d\'oxydoréduction s\'écrivent :\n- Réduction : $Cl_2 + 2e^- = 2Cl^-$\n- Oxydation en milieu basique : $Cl_2 + 4HO^- = 2ClO^- + 2H_2O + 2e^-$\nEn additionnant membre à membre, le dichlore se dismute selon :\n$$Cl_2(aq) + 2HO^- \\to Cl^- + ClO^- + H_2O$$\nCette réaction produit une solution équimolaire de chlorure de sodium et d\'hypochlorite de sodium : c\'est le procédé historique de fabrication de l\'**eau de Javel** découverte par Berthollet.'
        },
        {
          titre: '3. Danger de la médiamutation en milieu acide',
          explication: 'Si l\'on acidifie de l\'eau de Javel avec un détartrant contenant des ions $H_3O^+$ (comme l\'acide chlorhydrique $HCl$) :\nL\'ion hypochlorite est protoné en $HClO$, et les ions chlorure $Cl^-$ réagissent spontanément avec $HClO$ par réaction de **médiamutation** (rétro-dismutation) totale et violente :\n$$ClO^- + Cl^- + 2H^+ \\to Cl_2(g) + H_2O$$\nCette réaction libère instantanément des vapeurs massives de dichlore gazeux $Cl_2(g)$, un gaz jaune-vert extrêmement toxique, suffocant et hautement corrosif pour l\'arbre respiratoire (utilisé comme arme chimique pendant la Première Guerre mondiale).'
        }
      ],
      conclusion: 'Le diagramme E-pH du chlore explique la stabilité de l\'hypochlorite en milieu alcalin et le dégagement toxique de $Cl_2$ en milieu acide.',
      reflexeDuCorrecteur: 'Ne jamais mélanger Javel et acide : $ClO^- + Cl^- + 2H^+ = Cl_2 + H_2O$.'
    }
  },
  {
    id: 'exo-100-58-cinetique-michaelis-inhibition-uncompetitive',
    title: 'Inhibition Incompétitive (Acompétitive) & Faisceau Parallèle de Lineweaver-Burk',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-cinetique-enzymatique',
    chapitreTitre: 'Cinétique Enzymatique Avancée',
    filieres: ['BCPST', 'PC'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / ENS BCPST',
    dureeEstimeeMin: 35,
    enonce: 'Une molécule inhibitrice $I$ se lie exclusivement au complexe enzyme-substrat $ES$ pour former un complexe inerte $ESI$ (constante de dissociation $K_I\' = \\frac{[ES][I]}{[ESI]}$), sans pouvoir se lier à l\'enzyme libre $E$.\n1. En appliquant l\'AEQS au complexe $ES$, établir l\'expression de la vitesse initiale $v$ en fonction de $V_{max}, K_M, [S], [I]$ et $K_I\'$.\n2. Mettre la loi sous la forme apparente de Michaelis-Menten avec $V_{max}^{app}$ et $K_M^{app}$.\n3. Quelle est la disposition géométrique caractéristique des droites de Lineweaver-Burk pour différentes concentrations $[I]$ ?',
    hints: [
      'Conservation de l\'enzyme totale : $[E]_0 = [E] + [ES] + [ESI] = [E] + [ES](1 + [I]/K_I\').',
      'Calculer le rapport $K_M^{app} / V_{max}^{app}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Dérivation par l\'état quasi-stationnaire',
          explication: 'L\'inhibition incompétitive intervient quand la fixation du substrat crée le site d\'ancrage pour l\'inhibiteur :\n- $E + S \\rightleftharpoons ES$ ($K_M = \\frac{[E][S]}{[ES]}$)\n- $ES + I \\rightleftharpoons ESI$ ($K_I\' = \\frac{[ES][I]}{[ESI]}$)\nLa vitesse vaut $v = k_{cat} [ES]$. Le bilan total en enzyme donne :\n$$[E]_0 = [E] + [ES] + [ESI] = \\frac{K_M [ES]}{[S]} + [ES] + \\frac{[ES][I]}{K_I\'} = [ES] \\left( \\frac{K_M}{[S]} + 1 + \\frac{[I]}{K_I\'} \\right)$$\nEn isolant $[ES]$ et en multipliant par $k_{cat}$ :\n$$v = \\frac{k_{cat} [E]_0 [S]}{K_M + [S](1 + [I]/K_I\')} = \\frac{\\frac{V_{max}}{1 + [I]/K_I\'} [S]}{\\frac{K_M}{1 + [I]/K_I\'} + [S]}$$'
        },
        {
          titre: '2. Paramètres apparents',
          explication: 'La vitesse s\'écrit sous la forme michaelienne canonique avec :\n$$V_{max}^{app} = \\frac{V_{max}}{1 + [I]/K_I\'} < V_{max} \\quad \\text{et} \\quad K_M^{app} = \\frac{K_M}{1 + [I]/K_I\'} < K_M$$\nLa vitesse maximale et la constante de Michaelis sont **toutes deux divisées par le même facteur** $(1 + [I]/K_I\')$ !'
        },
        {
          titre: '3. Signature graphique en double réciproque',
          explication: 'En inversant l\'équation de vitesse :\n$$\\frac{1}{v} = \\frac{K_M^{app}}{V_{max}^{app}} \\frac{1}{[S]} + \\frac{1}{V_{max}^{app}} = \\frac{K_M}{V_{max}} \\frac{1}{[S]} + \\frac{1 + [I]/K_I\'}{V_{max}}$$\nLa pente de la droite de Lineweaver-Burk vaut $p = \\frac{K_M}{V_{max}}$ : elle est **strictement indépendante de la concentration en inhibiteur $[I]$** !\nPar conséquent, sur la représentation de Lineweaver-Burk, l\'inhibition incompétitive se traduit par un **faisceau de droites parallèles décalées vers le haut** quand $[I]$ augmente.'
        }
      ],
      conclusion: 'L\'inhibition incompétitive est rare pour les réactions à un seul substrat mais très fréquente dans les réactions multi-substrats enzymatiques.',
      reflexeDuCorrecteur: 'Lineweaver-Burk : Droites sécantes sur l\'axe vertical = compétitif. Droites sécantes sur l\'axe horizontal = non compétitif. Droites strictement parallèles = incompétitif.'
    }
  },
  {
    id: 'exo-100-59-automatique-correcteur-pi',
    title: 'Asservissement & Réglage d\'un Correcteur Proportionnel-Intégral (PI)',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Automatique & Systèmes Asservis',
    filieres: ['BCPST', 'PSI', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Concours Mines-Ponts PSI / Agro-Véto',
    dureeEstimeeMin: 35,
    enonce: 'On asservit un procédé modélisé par un premier ordre $H(p) = \\frac{K}{1 + T p}$ ($K = 2$, $T = 0.5\\text{ s}$) dans une boucle à retour unitaire. On insère un correcteur Proportionnel-Intégral (PI) : $C(p) = K_p \\left(1 + \\frac{1}{T_i p}\\right)$.\n1. Justifier l\'intérêt de l\'action intégrale sur la précision statique face à un échelon de consigne.\n2. On règle la constante d\'intégration par compensation du pôle dominant : $T_i = T$. Déterminer la fonction de transfert en boucle fermée (FTBF) $F(p) = \\frac{S(p)}{E(p)}$.\n3. Calculer la valeur de $K_p$ pour que le temps de réponse à $5\\%$ du système asservi en boucle fermée soit de $t_{r5\\%} = 0.05\\text{ s}$.',
    hints: [
      'Un pôle en $p=0$ (intégrateur) confère une classe 1 au système, annulant l\'erreur statique.',
      'Pour un premier ordre $F(p) = \\frac{1}{1 + \\tau_{BF} p}$, le temps de réponse à $5\\%$ est $t_{r5\\%} = 3 \\tau_{BF}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Effet de l\'intégrateur sur la précision',
          explication: 'La fonction de transfert en boucle ouverte (FTBO) s\'écrit $T(p) = C(p) H(p) = \\frac{K_p(1 + T_i p)}{T_i p} \\frac{K}{1 + T p}$.\nLe terme $1/(T_i p)$ introduit une intégration pure (pôle en $p=0$) : la FTBO est de classe 1.\nD\'après le théorème de la valeur finale, l\'erreur statique pour un échelon unitaire de consigne vaut $\\varepsilon_s = \\lim_{p\\to 0} \\frac{p \\cdot (1/p)}{1 + T(p)} = \\frac{1}{1 + \\infty} = 0$.\nL\'action intégrale **annule rigoureusement l\'erreur statique**, garantissant une précision parfaite en régime permanent.'
        },
        {
          titre: '2. Compensation de pôle et FTBF',
          explication: 'En choisissant $T_i = T = 0.5\\text{ s}$, le zéro du correcteur compense exactement le pôle du système :\n$$T(p) = \\frac{K_p (1 + T p)}{T p} \\frac{K}{1 + T p} = \\frac{K_p K}{T p}$$\nLa FTBF à retour unitaire devient un premier ordre idéal :\n$$F(p) = \\frac{T(p)}{1 + T(p)} = \\frac{\\frac{K_p K}{T p}}{1 + \\frac{K_p K}{T p}} = \\frac{1}{1 + \\frac{T}{K_p K} p} = \\frac{1}{1 + \\tau_{BF} p}$$\navec $\\tau_{BF} = \\frac{T}{K_p K}$.'
        },
        {
          titre: '3. Dimensionnement du gain $K_p$',
          explication: 'Pour un système du premier ordre, la réponse indicielle atteint $95\\%$ de sa valeur finale au bout de 3 constantes de temps :\n$$t_{r5\\%} = 3 \\tau_{BF} = 3 \\frac{T}{K_p K} = 0.05\\text{ s}$$\nEn isolant $K_p$ avec $K = 2$ et $T = 0.5\\text{ s}$ :\n$$K_p = \\frac{3 T}{K \\cdot t_{r5\\%}} = \\frac{3 \\times 0.5}{2 \\times 0.05} = \\frac{1.5}{0.10} = 15$$\nLe réglage par compensation de pôle avec $K_p = 15$ et $T_i = 0.5\\text{ s}$ rend le système dix fois plus rapide qu\'en boucle ouverte ($0.05\\text{ s}$ contre $1.5\\text{ s}$) tout en garantissant une stabilité inconditionnelle sans aucun dépassement oscillatoire.'
        }
      ],
      conclusion: 'La méthode de compensation de pôle est la technique industrielle la plus utilisée pour synthétiser un correcteur PI robuste.',
      reflexeDuCorrecteur: 'Pour régler un PI sur un premier ordre : toujours poser $T_i = T$ pour transformer la boucle fermée en un simple premier ordre sans zéro.'
    }
  },
  {
    id: 'exo-100-60-theoreme-central-limite-biologie',
    title: 'Théorème Central Limite & Distribution de la Taille dans une Population',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-proba-continue',
    chapitreTitre: 'Probabilités Continues & Génétique Quantitative',
    filieres: ['BCPST', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / Concours Statistique',
    dureeEstimeeMin: 35,
    enonce: 'Dans un modèle de génétique quantitative polygénique sans dominance (modèle de Fisher), la taille d\'un organisme résulte de l\'addition indépendante des contributions de $n = 50$ locus génétiques indépendants : $X = X_0 + \\sum_{i=1}^n Y_i$.\nChaque allèle $Y_i$ apporte une contribution aléatoire suivant une loi uniforme $\\mathcal{U}([-a, a])$ avec $a = 0.5\\text{ cm}$. La taille de base est $X_0 = 170\\text{ cm}$.\n1. Calculer l\'espérance et la variance de chaque contribution $Y_i$.\n2. Par application du Théorème Central Limite (TCL), justifier que la taille totale $X$ suit approximativement une loi normale $\\mathcal{N}(\\mu, \\sigma^2)$ et expliciter les valeurs de $\\mu$ et $\\sigma$.\n3. Calculer la proportion théorique d\'individus dont la taille est comprise entre $165\\text{ cm}$ et $175\\text{ cm}$.',
    hints: [
      'Pour une loi uniforme sur $[-a, a]$, $E(Y) = 0$ et $V(Y) = \\frac{(2a)^2}{12} = \\frac{a^2}{3}$.',
      'Centrer et réduire pour utiliser la fonction de répartition de la loi normale $\\Phi(z)$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Moments des composantes génétiques',
          explication: 'Pour $Y_i \\sim \\mathcal{U}([-a, a])$ avec $a = 0.5\\text{ cm}$ :\n- Espérance : $E(Y_i) = \\frac{-a + a}{2} = 0$.\n- Variance : $V(Y_i) = \\frac{(a - (-a))^2}{12} = \\frac{4 a^2}{12} = \\frac{a^2}{3} = \\frac{0.25}{3} = \\frac{1}{12}\\text{ cm}^2$.'
        },
        {
          titre: '2. Application du Théorème Central Limite',
          explication: 'La taille totale s\'écrit $X = X_0 + S_n$ avec $S_n = \\sum_{i=1}^{50} Y_i$.\nLes $Y_i$ sont indépendantes et identiquement distribuées avec espérance nulle et variance finie $\\sigma_0^2 = 1/12$.\nComme $n = 50 \\ge 30$, d\'après le Théorème Central Limite, la somme $S_n$ converge en loi vers la loi normale $\\mathcal{N}(0, n \\sigma_0^2)$ :\n- Moyenne : $\\mu = E(X) = X_0 + n E(Y_i) = 170 + 0 = 170\\text{ cm}$.\n- Variance : $\\sigma^2 = V(X) = n V(Y_i) = 50 \\times \\frac{1}{12} = \\frac{50}{12} = \\frac{25}{6} \\approx 4.167\\text{ cm}^2$.\n- Écart-type : $\\sigma = \\sqrt{\\frac{25}{6}} = \\frac{5}{\\sqrt{6}} \\approx 2.041\\text{ cm}$.\nLa taille globale $X$ suit donc la loi $\\mathcal{N}(170, \\; 2.041^2)$.'
        },
        {
          titre: '3. Calcul de probabilité',
          explication: 'On cherche $P(165 \\le X \\le 175)$. En centrant et réduisant avec $Z = \\frac{X - 170}{\\sigma} \\sim \\mathcal{N}(0, 1)$ :\n$$z_1 = \\frac{165 - 170}{2.041} = -\\frac{5}{2.041} \\approx -2.45$$\n$$z_2 = \\frac{175 - 170}{2.041} = +\\frac{5}{2.041} \\approx +2.45$$\nPar symétrie de la loi normale centrée réduite :\n$$P(165 \\le X \\le 175) = P(-2.45 \\le Z \\le 2.45) = 2 \\Phi(2.45) - 1$$\nD\'après les tables statistiques, $\\Phi(2.45) \\approx 0.9929$ :\n$$P = 2 \\times 0.9929 - 1 = 1.9858 - 1 = 0.9858 = 98.6\\%$$\nEnviron $98.6\\%$ des individus ont une taille comprise entre $165\\text{ cm}$ et $175\\text{ cm}$.'
        }
      ],
      conclusion: 'Le Théorème Central Limite explique de façon éclatante pourquoi les caractères quantitatifs biologiques polygéniques (taille, poids, QI) présentent systématiquement une distribution en cloche de Gauss.',
      reflexeDuCorrecteur: 'Variance de la loi uniforme $\\mathcal{U}([a, b])$ : $\\frac{(b-a)^2}{12}$.'
    }
  }
];
