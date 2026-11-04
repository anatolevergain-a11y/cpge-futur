import type { ExerciseItem } from './cpgeData';

export const HUNDRED_EXERCISES_PART2: ExerciseItem[] = [
  {
    id: 'exo-100-16-effet-doppler-recul-source',
    title: 'Effet Doppler Acoustique Relativiste vs Classique',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Ondes Mécaniques & Échographie',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'Une source sonore $S$ émet des bips périodiques de période propre $T_0$ et se déplace à vitesse constante $v_S$ vers un récepteur immobile $R$ dans un milieu au repos où la célérité du son est $c$.\n1. En raisonnant sur le front d\'onde émis à $t=0$ et à $t=T_0$, établir la fréquence perçue $f_R$ par le récepteur.\n2. Établir la formule lorsque la source est immobile et le récepteur se déplace à vitesse $v_R$ vers la source.\n3. Expliquer pourquoi ces deux situations ne sont pas symétriques en acoustique classique (contrairement à l\'effet Doppler électromagnétique relativiste).',
    hints: [
      'Pendant la durée $T_0$, la source s\'est déplacée de $v_S T_0$.',
      'La longueur d\'onde dans le milieu est comprimée : $\\lambda\' = (c - v_S) T_0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Source mobile et récepteur fixe',
          explication: 'Le premier front d\'onde émis en $t=0$ parcourt la distance $d$ en une durée $t_1 = d/c$. Le deuxième front d\'onde émis en $t=T_0$ part de la position $v_S T_0$ et arrive à l\'instant $t_2 = T_0 + \\frac{d - v_S T_0}{c}$. La période reçue est :\n$$T_R = t_2 - t_1 = T_0 \\left(1 - \\frac{v_S}{c}\\right)$$\nLa fréquence perçue est donc plus aiguë :\n$$f_R = \\frac{f_0}{1 - v_S / c}$$'
        },
        {
          titre: '2. Source fixe et récepteur mobile',
          explication: 'La longueur d\'onde dans le milieu est inchangée : $\\lambda_0 = c / f_0$. Le récepteur avançant à vitesse $v_R$ vers les fronts d\'onde rencontre les ondes à une vitesse relative $c + v_R$. La fréquence perçue est :\n$$f_R\' = \\frac{c + v_R}{\\lambda_0} = f_0 \\left(1 + \\frac{v_R}{c}\\right)$$'
        },
        {
          titre: '3. Dissymétrie fondamentale',
          explication: 'En acoustique, il existe un milieu matériel privilégié de référence (l\'air au repos). Les formules $\\frac{1}{1 - v/c}$ et $(1 + v/c)$ ne coïncident qu\'au premier ordre en $v/c$ ($\\frac{1}{1-v/c} \\approx 1 + v/c + v^2/c^2$). En relativité restreinte (effet Doppler optique), l\'éther n\'existe pas : la formule relativiste $f = f_0 \\sqrt{\\frac{1 + \\beta}{1 - \\beta}}$ est rigoureusement symétrique par invariance de Lorentz.'
        }
      ],
      conclusion: 'L\'effet Doppler acoustique dépend de la vitesse de la source par rapport au fluide porteur de l\'onde.',
      reflexeDuCorrecteur: 'Source mobile : c\'est la longueur d\'onde dans l\'espace qui est modifiée. Récepteur mobile : c\'est la vitesse relative de croisement qui change.'
    }
  },
  {
    id: 'exo-100-17-osmose-arbre-turgescence',
    title: 'Montée de la Sève Brute dans les Arbres Géants & Pression Négative',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-transports-membranaires',
    chapitreTitre: 'Mécanique des Fluides & Osmose',
    filieres: ['BCPST', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / ENS BCPST',
    dureeEstimeeMin: 35,
    enonce: 'Un séquoia géant (*Sequoiadendron giganteum*) atteint une hauteur de $H = 100\\text{ m}$. L\'eau liquide a une masse volumique $\\rho = 1000\\text{ kg/m}^3$.\n1. Quelle surpression hydrostatique minimale $\\Delta P = \\rho g H$ faudrait-il exercer à la base de l\'arbre pour pousser l\'eau à son sommet ? Comparer à la pression atmosphérique $P_{atm} = 1\\text{ bar}$.\n2. Expliquer pourquoi la théorie de la poussée radiculaire osmotique ($\\,\\Pi_{racine} \\approx 2-3\\text{ bars}$) est totalement insuffisante pour expliquer la hauteur des grands arbres.\n3. Détailler la théorie de la tension-cohésion de Dixon-Joly : rôle de la transpiration foliaire, des ménisques de courbure dans les parois cellulaires du mésophylle foliaire (loi de Laplace) et métastabilité de l\'eau liquide sous tension négative (cavitation embolique).',
    hints: [
      'Calculer $\\Delta P = 1000 \\times 9.81 \\times 100\\text{ Pa}$.',
      'Les rayons de courbure des ménisques foliaires sont de l\'ordre de $r \\approx 5-10\\text{ nm}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Pression hydrostatique minimale',
          explication: 'La colonne d\'eau de $100\\text{ m}$ de hauteur exerce une pression gravitaire de :\n$$\\Delta P_{hydro} = \\rho g H = 1000 \\times 9.81 \\times 100 = 9.81\\times 10^5\\text{ Pa} \\approx 9.81\\text{ bars} \\approx 10\\text{ atm}$$\nEn comptant les frottements visqueux dans le xylème (pertes de charge de Poiseuille), il faut vaincre au minimum $15$ à $20\\text{ bars}$ pour faire circuler la sève jusqu\'à la cime.'
        },
        {
          titre: '2. Insuffisance de la poussée radiculaire',
          explication: 'La poussée radiculaire osmotique maximale générée par l\'accumulation d\'ions dans le cylindre central de la racine ne dépasse pas $2$ à $3\\text{ bars}$, ce qui ne permet de hisser l\'eau qu\'à une vingtaine de mètres tout au plus. Elle est donc incapable d\'alimenter les arbres géants.'
        },
        {
          titre: '3. Modèle de tension-cohésion de Dixon-Joly',
          explication: 'L\'eau n\'est pas *poussée* depuis le bas, mais **aspirée par le haut** sous tension mécanique négative :\n- L\'évaporation de l\'eau au niveau des stomates foliaires fait reculer l\'interface eau-air dans les pores nanométriques de la paroi pectocellulosique ($r \\approx 5\\text{ nm}$).\n- D\'après la loi de Laplace, la concavité du ménisque génère une dépression colossale : $\\Delta P = -\\frac{2\\gamma}{r} = -\\frac{2 \\times 0.072}{5\\times 10^{-9}} \\approx -2.9\\times 10^7\\text{ Pa} \\approx -290\\text{ bars}$ !\n- Grâce aux liaisons hydrogène extrêmement fortes entre molécules d\'eau (cohésion intermoléculaire), la colonne d\'eau liquide résiste à cette traction sans se rompre (état métastable sous pression absolue négative $P < 0$).\n- Le risque physique majeur est la rupture brutale de la colonne d\'eau par nucléation d\'une bulle de vapeur : c\'est le phénomène d\'**embolie gazeuse** ou de cavitation, combattu par les ponctuations aréolées des trachéides et vaisseaux.'
        }
      ],
      conclusion: 'La montée de la sève dans les arbres géants exploite l\'incroyable résistance à la traction de l\'eau liquide sous pression négative métastable.',
      reflexeDuCorrecteur: 'Oui, une pression négative $P < 0$ a un sens physique rigoureux dans un liquide condensé cohésif (traction isotrope).'
    }
  },
  {
    id: 'exo-100-18-synthese-asymetrique-proline',
    title: 'Organocatalyse Asymétrique par la L-Proline & Réaction d\'Aldolisation',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-stereochimie-biomolecules',
    chapitreTitre: 'Stéréochimie & Chimie Organique Avancée',
    filieres: ['BCPST', 'PC'],
    annee: '2ème année',
    difficulte: 3,
    origin: 'ENS / Agro-Véto Chimie Organique',
    dureeEstimeeMin: 40,
    enonce: 'On étudie la réaction d\'aldolisation directe énantiosélective entre l\'acétone et le 4-nitrobenzaldéhyde catalysée par la (S)-proline (Prix Nobel de Chimie 2021).\n1. Écrire la réaction de condensation réversible entre l\'acétone et l\'amine secondaire de la proline menant à l\'intermédiaire énamine nucléophile.\n2. Par l\'état de transition à 6 chaînons de type Zimmerman-Traxler, expliquer comment le groupement carboxylique de la proline oriente stéréospécifiquement l\'approche de l\'aldéhyde par liaison hydrogène.\n3. Donner la configuration absolue ($R$ ou $S$) de l\'aldol majoritaire obtenu après hydrolyse.',
    hints: [
      'La formation d\'énamine se fait via un ion iminium intermédiaire.',
      'Le proton du $-COOH$ de la proline active le carbonyle de l\'aldéhyde tout en verrouillant la conformation spatiale.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Formation de l\'énamine catalytique',
          explication: 'L\'attaque nucléophile de l\'amine secondaire de la (S)-proline sur le carbonyle de l\'acétone donne un carbinolamine, qui se déshydrate en ion iminium. La déprotonation en $\\alpha$ génère l\'énamine chirale neutre, beaucoup plus nucléophile que l\'acétone libre.'
        },
        {
          titre: '2. État de transition de Zimmerman-Traxler',
          explication: 'L\'énamine réagit sur le 4-nitrobenzaldéhyde via un état de transition cyclique quasi-chaise à 6 centres :\n- La chaîne pyrrolidine de la proline impose une face d\'attaque privilégiée.\n- La fonction acide carboxylique $-COOH$ portée par le carbone asymétrique de la proline forme une **liaison hydrogène intramoléculaire directionnelle** avec l\'oxygène du carbonyle de l\'aldéhyde aromatique.\n- Cette liaison hydrogène active électrophiliquement le carbonyle tout en contraignant le groupement volumineux $p-\\text{NO}_2-\\text{C}_6\\text{H}_4$ en position équatoriale pseudo-chaise pour minimiser les répulsions stériques 1,3-diaxiales.'
        },
        {
          titre: '3. Configuration absolue de l\'aldol',
          explication: 'L\'attaque s\'effectue exclusivement par la face *re* de l\'aldéhyde. Après attaque $C-C$, l\'intermédiaire iminium résultant est hydrolysé par la molécule d\'eau libérée au début du cycle catalytique, régénérant la (S)-proline intacte et libérant l\'hydroxycétone optiquement active de configuration **(R)** avec un excès énantiomérique $ee > 95\\%$.'
        }
      ],
      conclusion: 'L\'organocatalyse asymétrique mime les sites actifs enzymatiques sans nécessiter de métaux lourds toxiques.',
      reflexeDuCorrecteur: 'La proline agit comme une "micro-aldolase" artificielle grâce à la synergie amine nucléophile + acide carboxylique donneur de liaison H.'
    }
  },
  {
    id: 'exo-100-19-loi-weibull-survie',
    title: 'Loi de Weibull & Analyse de Survie en Épidémiologie',
    matiere: 'Mathématiques',
    chapitreId: 'maths-bcpst-proba-continue',
    chapitreTitre: 'Probabilités & Statistique Médicale',
    filieres: ['BCPST', 'MP'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Agro-Véto / Concours Statistique',
    dureeEstimeeMin: 35,
    enonce: 'On modélise la durée de survie $T > 0$ d\'un organisme par une loi de Weibull de paramètre de forme $k > 0$ et d\'échelle $\\lambda > 0$, dont la fonction de survie est $S(t) = P(T > t) = e^{-(t/\\lambda)^k}$ pour $t \\ge 0$.\n1. Déterminer la densité de probabilité $f(t)$ et le taux de panne instantané (taux de hasard) $h(t) = \\frac{f(t)}{S(t)}$.\n2. Discuter l\'évolution de $h(t)$ au cours du temps selon que $k < 1$, $k = 1$ ou $k > 1$. Donner l\'interprétation biologique correspondante (mortalité infantile, absence d\'usure, vieillissement / sénescence).\n3. Exprimer l\'espérance de vie $E(T)$ en fonction de $\\lambda$ et de la fonction Gamma $\\Gamma$.',
    hints: [
      'Le taux de hasard vérifie $h(t) = -\\frac{\\mathrm{d}\\ln S(t)}{\\mathrm{d}t}$.',
      'Calculer l\'intégrale de survie $E(T) = \\int_0^{+\\infty} S(t)\\,\\mathrm{d}t$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Densité et taux de hasard',
          explication: 'La fonction de répartition est $F(t) = 1 - S(t) = 1 - e^{-(t/\\lambda)^k}$. En dérivant par rapport à $t$ :\n$$f(t) = \\frac{\\mathrm{d}F}{\\mathrm{d}t} = \\frac{k}{\\lambda} \\left( \\frac{t}{\\lambda} \\right)^{k-1} e^{-(t/\\lambda)^k}$$\nLe taux de hasard instantané $h(t)$ représente le risque de décès à l\'instant $t$ sachant que l\'individu a survécu jusqu\'à $t$ :\n$$h(t) = \\frac{f(t)}{S(t)} = -\\frac{S\'(t)}{S(t)} = \\frac{k}{\\lambda} \\left( \\frac{t}{\\lambda} \\right)^{k-1}$$'
        },
        {
          titre: '2. Interprétation biologique des trois régimes',
          explication: '- Si $k < 1$ : $h(t)$ est strictement décroissant en $t$. Le risque de mortalité diminue avec l\'âge : c\'est le modèle de **mortalité précoce ou défaut de jeunesse** (sélection naturelle éliminant les individus porteurs de tares létales au tout début de la vie).\n- Si $k = 1$ : $h(t) = 1/\\lambda = \\text{cste}$. Le risque est constant dans le temps (loi exponentielle sans mémoire). La mort survient uniquement par accident extérieur imprévisible, indépendamment de l\'âge (bactéries dans des conditions idéales, désintégration radioactive).\n- Si $k > 1$ : $h(t)$ croît avec le temps comme une puissance $t^{k-1}$. Le risque de mortalité s\'accroît avec l\'âge : c\'est le phénomène biologique fondamental de **sénescence et de vieillissement** tissulaire.'
        },
        {
          titre: '3. Calcul de l\'espérance de vie',
          explication: 'Pour une variable aléatoire positive, $E(T) = \\int_0^{+\\infty} S(t)\\,\\mathrm{d}t = \\int_0^{+\\infty} e^{-(t/\\lambda)^k}\\,\\mathrm{d}t$.\nEn posant le changement de variable $u = (t/\\lambda)^k \\implies t = \\lambda u^{1/k}$ et $\\mathrm{d}t = \\frac{\\lambda}{k} u^{1/k - 1}\\,\\mathrm{d}u$ :\n$$E(T) = \\frac{\\lambda}{k} \\int_0^{+\\infty} u^{1/k - 1} e^{-u}\\,\\mathrm{d}u = \\frac{\\lambda}{k} \\Gamma(1/k) = \\lambda \\Gamma\\left(1 + \\frac{1}{k}\\right)$$'
        }
      ],
      conclusion: 'La loi de Weibull est l\'outil statistique universel en biogérontologie et en fiabilité industrielle.',
      reflexeDuCorrecteur: 'Pour une variable positive, pensez toujours à la formule magique $E(X) = \\int_0^{+\\infty} P(X > t)\\,\\mathrm{d}t$, souvent beaucoup plus rapide à intégrer que $\\int t f(t)\\,\\mathrm{d}t$.'
    }
  },
  {
    id: 'exo-100-20-fentes-young-coherence-temporelle',
    title: 'Interférences à Deux Ondes & Longueur de Cohérence Temporelle',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Optique Ondulatoire & Cohérence',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '2ème année',
    difficulte: 2,
    origin: 'Centrale PC / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'On éclaire des fentes d\'Young d\'écartement $a$ à distance $D$ par une source quasi-monochromatique émettant dans une bande rectangulaire de fréquences $[\nu_0 - \\Delta\\nu/2, \\; \\nu_0 + \\Delta\\nu/2]$ avec une densité spectrale uniforme $I_0$.\n1. Établir l\'expression de l\'intensité lumineuse totale $I(x)$ sur l\'écran en sommant les intensités des différentes composantes spectrales incohérentes.\n2. Montrer que la visibilité des franges $V(x) = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}$ s\'annule lorsque la différence de marche $\\delta = \\frac{a x}{D}$ atteint la longueur de cohérence $L_c = \\frac{c}{\\Delta\\nu} = \\frac{\\lambda_0^2}{\\Delta\\lambda}$.\n3. Calculer numériquement $L_c$ pour une lampe à vapeur de sodium ($\\Delta\\lambda = 0.5\\text{ nm}$ à $589\\text{ nm}$) et pour un laser He-Ne ($\\Delta\\nu = 1\\text{ MHz}$).',
    hints: [
      'Intégrer $I(x) = \\int_{\\nu_0 - \\Delta\\nu/2}^{\\nu_0 + \\Delta\\nu/2} 2 I_0 \\left(1 + \\cos\\frac{2\\pi \\nu \\delta}{c}\\right)\\,\\mathrm{d}\\nu$.',
      'Faire apparaître un sinus cardinal en fonction de la durée de cohérence $\\tau_c = 1/\\Delta\\nu$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Intégration spectrale',
          explication: 'Les différentes fréquences étant mutuellement incohérentes, leurs intensités s\'ajoutent algébriquement :\n$$I(x) = \\int_{\\nu_0 - \\Delta\\nu/2}^{\\nu_0 + \\Delta\\nu/2} 2 I_0 \\left(1 + \\cos\\left(\\frac{2\\pi \\nu \\delta}{c}\\right)\\right)\\,\\mathrm{d}\\nu$$\nEn posant le retard temporel $\\tau = \\delta / c$ :\n$$I(x) = 2 I_0 \\Delta\\nu + 2 I_0 \\left[ \\frac{\\sin(2\\pi \\nu \\tau)}{2\\pi \\tau} \\right]_{\\nu_0 - \\Delta\\nu/2}^{\\nu_0 + \\Delta\\nu/2} = 2 I_0 \\Delta\\nu \\left( 1 + \\mathrm{sinc}(\\pi \\Delta\\nu \\tau) \\cos(2\\pi \\nu_0 \\tau) \\right)$$'
        },
        {
          titre: '2. Visibilité des franges et longueur de cohérence',
          explication: 'Le contraste des franges est donné par la fonction enveloppe sinus cardinal :\n$$V(\\delta) = |\\mathrm{sinc}(\\pi \\Delta\\nu \\tau)| = \\left| \\frac{\\sin(\\pi \\Delta\\nu \\delta / c)}{\\pi \\Delta\\nu \\delta / c} \\right|$$\nLe premier brouillage complet des franges ($V = 0$) intervient pour $\\pi \\Delta\\nu \\delta / c = \\pi$, soit :\n$$\\delta = \\frac{c}{\\Delta\\nu} = L_c$$\nLa longueur de cohérence temporelle $L_c$ représente la différence de marche maximale au-delà de laquelle deux trains d\'ondes issus de la même source ne peuvent plus interférer.'
        },
        {
          titre: '3. Applications numériques comparatives',
          explication: '- Lampe à sodium : $\\Delta\\lambda = 0.5\\text{ nm}$ à $\\lambda_0 = 589\\text{ nm}$ :\n$$L_c = \\frac{\\lambda_0^2}{\\Delta\\lambda} = \\frac{(589\\times 10^{-9})^2}{0.5\\times 10^{-9}} \\approx 6.9\\times 10^{-4}\\text{ m} = 0.69\\text{ mm}$$\nAu-delà de quelques centaines de franges ($0.7\\text{ mm}$ de décalage), le contraste s\'annule totalement.\n- Laser He-Ne stabilisé : $\\Delta\\nu = 1\\text{ MHz} = 10^6\\text{ Hz}$ :\n$$L_c = \\frac{c}{\\Delta\\nu} = \\frac{3\\times 10^8\\text{ m/s}}{10^6\\text{ s}^{-1}} = 300\\text{ mètres} !$$\nLe faisceau laser peut interférer avec lui-même sur des centaines de mètres de chemin optique.'
        }
      ],
      conclusion: 'La cohérence temporelle découle directement de la finesse spectrale de la source lumineuse par transformée de Fourier (théorème de Wiener-Khintchine).',
      reflexeDuCorrecteur: 'Retenez la relation différentielle fondamentale : $\\frac{\\Delta\\nu}{\\nu_0} = \\frac{\\Delta\\lambda}{\\lambda_0} \\implies L_c = \\frac{\\lambda_0^2}{\\Delta\\lambda}$.'
    }
  },
  {
    id: 'exo-100-21-electrophorese-gel-adn',
    title: 'Migration Électrophorétique de l\'ADN & Modèle de Tamisage de Ferguson',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-transports-membranaires',
    chapitreTitre: 'Électrocinétique & Biophysique',
    filieres: ['BCPST'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto Biophysique',
    dureeEstimeeMin: 30,
    enonce: 'Des fragments d\'ADN linéaire double brin de $N$ paires de bases (pb) migrent en électrophorèse sur gel d\'agarose sous un champ électrique uniforme $E = 5\\text{ V/cm}$. Chaque paire de bases porte deux charges élémentaires $-2e$ et a une masse $M_0$.\n1. En solution libre sans gel, justifier que la vitesse de migration électrophorétique $v = \\mu_0 E$ est strictement indépendante de la longueur $N$ du fragment d\'ADN (séparation impossible en solution libre).\n2. Dans un gel poreux, la friction dépend de la taille selon la relation de Ferguson : $\\mu = \\mu_0 e^{-K_r T_{gel}}$ où $K_r \\propto N$. Expliquer pourquoi le gel permet la séparation de fragments d\'ADN selon leur taille moléculaire.',
    hints: [
      'La charge électrique totale est $Q = -2 N e$, et le frottement hydrodynamique de Stokes d\'une pelote statistique d\'ADN est proportionnel à $N$.',
      'Calculer la mobilité $\\mu_0 = Q / f$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Échec de la séparation en solution libre',
          explication: 'Pour un fragment d\'ADN de $N$ paires de bases :\n- Charge totale : $Q = -2 N e$ (proportionnelle à $N$).\n- Force de traînée visqueuse en solution libre : le polymère se comporte comme une suite de segments indépendants où la résistance de friction de Stokes vaut $f = N f_0$ (proportionnelle à $N$).\nÀ vitesse limite stationnaire sous champ $E$ :\n$$Q E - f v = 0 \\implies v = \\frac{Q}{f} E = \\frac{-2 N e}{N f_0} E = -\\frac{2e}{f_0} E$$\nLa mobilité électrophorétique en solution libre $\\mu_0 = \\frac{v}{E} = -\\frac{2e}{f_0}$ est strictement **indépendante de $N$**. En solution libre, tous les fragments d\'ADN migrent exactement à la même vitesse quelle que soit leur longueur, rendant toute séparation impossible !'
        },
        {
          titre: '2. Effet tamis moléculaire du gel d\'agarose',
          explication: 'Le gel d\'agarose forme un réseau tridimensionnel de mailles de taille moyenne fixée par la concentration du gel. Les molécules d\'ADN doivent serpenter à travers les pores (mécanisme de reptation d\'Ogston-de Gennes).\nPlus le fragment est long (grand $N$), plus sa probabilité de collision avec les fibres polymériques est élevée : la friction apparente croît fortement avec $N$. D\'après la loi empirique de Ferguson $\\mu(N) = \\mu_0 e^{-k N}$, la vitesse de migration décroît exponentiellement avec la taille du fragment : les petits fragments voyagent vite vers l\'anode, tandis que les gros fragments sont fortement ralentis, créant des bandes nettes résolues au bromure d\'éthidium ou sous UV.'
        }
      ],
      conclusion: 'Le gel agit comme un filtre topologique indispensable qui brise l\'invariance charge/masse constante des acides nucléiques.',
      reflexeDuCorrecteur: 'Pour les protéines (SDS-PAGE), on dénature la protéine avec du SDS qui lui confère une densité de charge négative uniforme proportionnelle à sa masse, restituant le même principe de séparation par tamisage.'
    }
  },
  {
    id: 'exo-100-22-cycle-stirling-gaz-parfait',
    title: 'Étude Thermodynamique Complète du Moteur de Stirling Réversible',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Thermodynamique des Machines',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 35,
    enonce: 'On considère une mole de gaz parfait monoatomique subissant le cycle réversible de Stirling composé de 4 transformations :\n- $1 \\to 2$ : détente isotherme réversible à $T_C$ du volume $V_1$ au volume $V_2 = r V_1$ ($r > 1$) ;\n- $2 \\to 3$ : refroidissement isochore réversible à $V_2$ de $T_C$ à $T_F < T_C$ ;\n- $3 \\to 4$ : compression isotherme réversible à $T_F$ de $V_2$ à $V_1$ ;\n- $4 \\to 1$ : réchauffement isochore réversible à $V_1$ de $T_F$ à $T_C$.\n1. Tracer le cycle en coordonnées de Clapeyron $(P, V)$ et en coordonnées entropiques $(T, S)$.\n2. Exprimer les transferts thermiques $Q_{12}, Q_{23}, Q_{34}, Q_{41}$ en fonction de $T_C, T_F, r$ et $C_v$.\n3. En supposant que la machine dispose d\'un régénérateur parfait qui stocke intégralement la chaleur cédée lors de l\'isochore $2\\to 3$ pour la restituer intégralement lors de l\'isochore $4\\to 1$, démontrer que le rendement de Stirling égale le rendement théorique maximal de Carnot $\\eta = 1 - T_F / T_C$.',
    hints: [
      'Sur une isotherme de gaz parfait, $\\Delta U = 0 \\implies Q = -W = R T \\ln(V_f / V_i)$.',
      'Le régénérateur permet d\'annuler les flux thermiques nets sur les deux isochores : $Q_{23} + Q_{41} = 0$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Diagrammes thermodynamiques',
          explication: '- Diagramme $(P, V)$ : cycle délimité par deux hyperboles isothermes ($1\\to 2$ et $3\\to 4$) et deux segments verticaux isochores ($2\\to 3$ et $4\\to 1$). Le cycle est parcouru dans le sens horaire moteur.\n- Diagramme $(T, S)$ : les isothermes sont des segments horizontaux à $T_C$ et $T_F$. Les isochores ont pour équation $\\mathrm{d}S = C_v \\frac{\\mathrm{d}T}{T}$, ce qui donne deux courbes logarithmiques parallèles décalées de $\\Delta S = R \\ln r$. Le cycle forme un parallélogramme d\'aire égale au travail fourni $-W$.'
        },
        {
          titre: '2. Calcul des transferts thermiques',
          explication: '- Détente isotherme $1\\to 2$ : $Q_{12} = -W_{12} = R T_C \\ln(V_2 / V_1) = R T_C \\ln r > 0$ (chaleur reçue de la source chaude).\n- Isochore $2\\to 3$ : $W_{23} = 0$, $Q_{23} = \\Delta U_{23} = C_v (T_F - T_C) < 0$ (chaleur cédée).\n- Compression isotherme $3\\to 4$ : $Q_{34} = -W_{34} = R T_F \\ln(V_1 / V_2) = -R T_F \\ln r < 0$ (chaleur cédée à la source froide).\n- Isochore $4\\to 1$ : $W_{41} = 0$, $Q_{41} = \\Delta U_{41} = C_v (T_C - T_F) > 0$.'
        },
        {
          titre: '3. Rendement avec régénérateur thermique',
          explication: 'On constate immédiatement que $Q_{41} = -Q_{23}$. Dans un moteur Stirling moderne, le régénérateur (matrice poreuse en cuivre) absorbe la chaleur $Q_{23}$ lors du refroidissement et la restitue au fluide lors du réchauffement sans faire intervenir les sources extérieures. La seule chaleur achetée à la source chaude est donc $Q_C = Q_{12}$.\nLe travail net produit vaut :\n$$-W = Q_{12} + Q_{34} = R(T_C - T_F) \\ln r$$\nLe rendement du cycle s\'écrit donc :\n$$\\eta = \\frac{-W}{Q_{12}} = \\frac{R(T_C - T_F) \\ln r}{R T_C \\ln r} = \\frac{T_C - T_F}{T_C} = 1 - \\frac{T_F}{T_C} = \\eta_{Carnot}$$\nLe moteur de Stirling à régénération idéale atteint rigoureusement le rendement maximal théorique de Carnot.'
        }
      ],
      conclusion: 'Le moteur Stirling est aujourd\'hui utilisé dans les sous-marins anaérobies et les générateurs thermo-solaires à concentration en raison de son rendement exceptionnel et de son silence de fonctionnement.',
      reflexeDuCorrecteur: 'Le rôle fondamental du régénérateur est d\'internaliser les échanges thermiques le long des branches non isothermes.'
    }
  },
  {
    id: 'exo-100-23-cristallo-fe-rayon-rx',
    title: 'Diffraction des Rayons X par une Poudre Cristalline (Loi de Bragg & Chambre de Debye-Scherrer)',
    matiere: 'Chimie',
    chapitreId: 'chimie-bcpst-tampons-acides-bases',
    chapitreTitre: 'Cristallographie & Diffraction RX',
    filieres: ['BCPST', 'PC', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Concours G2E / Mines PC',
    dureeEstimeeMin: 35,
    enonce: 'On analyse une poudre de fer métallique de structure cubique centrée (CC) de paramètre de maille $a = 0.2866\\text{ nm}$ par diffraction des rayons X avec la raie $K_\\alpha$ du cuivre de longueur d\'onde $\\lambda = 0.1541\\text{ nm}$.\n1. Énoncer la loi de Bragg reliant l\'angle de diffraction $\\theta$, la longueur d\'onde $\\lambda$ et la distance interréticulaire $d_{hkl}$ des plans cristallins $(h, k, l)$.\n2. Pour une maille cubique de paramètre $a$, exprimer $d_{hkl}$ en fonction de $a, h, k, l$.\n3. Rappeler la condition d\'extinction systématique pour un réseau cubique centré : $h + k + l$ doit être pair. En déduire les indices $(h, k, l)$ du premier anneau de diffraction visible et calculer la valeur numérique de l\'angle de Bragg $\\theta_1$ correspondant.',
    hints: [
      'Loi de Bragg : $2 d \\sin\\theta = n \\lambda$ avec $n=1$.',
      'Distance interréticulaire cubique : $d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Énoncé de la loi de Bragg',
          explication: 'La diffraction des rayons X par les plans atomiques équidistants de $d_{hkl}$ donne des interférences constructives lorsque la différence de marche entre rayons réfléchis sur deux plans successifs est un multiple entier de longueurs d\'onde :\n$$2 d_{hkl} \\sin\\theta = n \\lambda \\quad (n \\in \\mathbb{N}^*)$$'
        },
        {
          titre: '2. Distance interréticulaire dans le système cubique',
          explication: 'Dans une maille cubique de paramètre $a$, le vecteur normal unitaire aux plans réticulaires $(h, k, l)$ a pour composantes $(h/a, k/a, l/a)$. La distance séparant deux plans adjacents de la famille est donnée par la formule universelle :\n$$d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$$'
        },
        {
          titre: '3. Extinction systématique et premier pic de Bragg',
          explication: 'Pour un réseau cubique centré, l\'atome au centre du cube diffracte en opposition de phase avec les atomes des sommets lorsque $h + k + l$ est impair : l\'intensité s\'annule (extinction systématique). Les plans diffractants doivent vérifier $h + k + l = \\text{pair}$.\nLes triplets possibles classés par ordre croissant de $h^2 + k^2 + l^2$ sont :\n- $(1, 0, 0) \\implies 1 + 0 + 0 = 1$ (impair, éteint)\n- $(1, 1, 0) \\implies 1 + 1 + 0 = 2$ (pair, **premier pic visible** !)\nPour les plans $(1, 1, 0)$ :\n$$d_{110} = \\frac{a}{\\sqrt{1^2 + 1^2 + 0^2}} = \\frac{a}{\\sqrt{2}} = \\frac{0.2866\\text{ nm}}{1.414} \\approx 0.2027\\text{ nm}$$\nD\'après la loi de Bragg à l\'ordre 1 ($n=1$) :\n$$\\sin\\theta_1 = \\frac{\\lambda}{2 d_{110}} = \\frac{0.1541}{2 \\times 0.2027} = \\frac{0.1541}{0.4054} \\approx 0.3801$$\n$$\\theta_1 = \\arcsin(0.3801) \\approx 22.34^\\circ$$\nSur le cliché expérimental de Debye-Scherrer, l\'angle de déviation du cône vaut $2\\theta_1 \\approx 44.7^\\circ$.'
        }
      ],
      conclusion: 'La détermination des angles de Bragg et des règles d\'extinction permet d\'identifier sans ambiguïté le groupe d\'espace et le mode de réseau d\'un minéral ou d\'un alliage.',
      reflexeDuCorrecteur: 'Pour le CFC, les indices $h, k, l$ doivent être de même parité (tous pairs ou tous impairs). Pour le CC, la somme $h+k+l$ doit être paire.'
    }
  },
  {
    id: 'exo-100-24-coulomb-frottement-cabestan',
    title: 'Frottement Sec de Coulomb & Formule du Cabestan d\'Eytelwein',
    matiere: 'Sciences de l\'Ingénieur',
    chapitreId: 'maths-algebre-lineaire',
    chapitreTitre: 'Statique des Solides & Contact Frottant',
    filieres: ['BCPST', 'PSI', 'MP', 'PC'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto Mécanique / Concours G2E',
    dureeEstimeeMin: 35,
    enonce: 'Une corde inextensible et sans masse est enroulée d\'un angle total $\\beta$ autour d\'un cylindre fixe de rayon $R$. Le coefficient de frottement statique corde/cylindre est $f$.\n1. En isolant un élément infinitésimal de corde de longueur $\\mathrm{d}s = R\\,\\mathrm{d}\\theta$ sous tension $T(\\theta)$ et soumis à la réaction normale $\\mathrm{d}N$ et tangentielle $\\mathrm{d}T_f$, établir l\'équation différentielle liant la tension $T(\\theta)$ à l\'angle $\\theta$ à la limite du glissement.\n2. Intégrer pour obtenir la célèbre formule d\'Eytelwein : $T_{tendu} = T_{mou} e^{f \\beta}$.\n3. Application : Avec $f = 0.30$, combien de tours complets ($2\\pi$) de corde un marin doit-il enrouler autour du cabestan pour qu\'un effort musculaire de $100\\text{ N}$ retienne l\'amarre d\'un paquebot exerçant une traction de $50\\text{ kN}$ ($50000\\text{ N}$) ?',
    hints: [
      'Projections sur la normale et la tangente : pour un petit angle $\\mathrm{d}\\theta$, $\\cos(\\mathrm{d}\\theta/2) \\approx 1$ et $\\sin(\\mathrm{d}\\theta/2) \\approx \\mathrm{d}\\theta/2$.',
      'Loi de Coulomb à la limite de glissement : $\\mathrm{d}T_f = f\\,\\mathrm{d}N$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Équilibre d\'un tronçon infinitésimal de corde',
          explication: 'Considérons un arc de corde sous-tendant un angle $\\mathrm{d}\\theta$. Les tensions aux extrémités sont $T(\\theta)$ et $T(\\theta + \\mathrm{d}\\theta) = T + \\mathrm{d}T$.\n- Projection sur la normale rentrante $\\vec{n}$ :\n$$\\mathrm{d}N - T \\sin\\left(\\frac{\\mathrm{d}\\theta}{2}\\right) - (T + \\mathrm{d}T) \\sin\\left(\\frac{\\mathrm{d}\\theta}{2}\\right) = 0$$\nAu premier ordre en $\\mathrm{d}\\theta$ : $\\mathrm{d}N = T\\,\\mathrm{d}\\theta$.\n- Projection sur la tangente $\\vec{t}$ dans le sens du glissement imminent :\n$$(T + \\mathrm{d}T) \\cos\\left(\\frac{\\mathrm{d}\\theta}{2}\\right) - T \\cos\\left(\\frac{\\mathrm{d}\\theta}{2}\\right) - \\mathrm{d}T_f = 0 \\implies \\mathrm{d}T - \\mathrm{d}T_f = 0$$'
        },
        {
          titre: '2. Intégration de la formule d\'Eytelwein',
          explication: 'À la limite de glissement, la loi de frottement de Coulomb donne $\\mathrm{d}T_f = f\\,\\mathrm{d}N = f T\\,\\mathrm{d}\\theta$. En substituant :\n$$\\mathrm{d}T = f T\\,\\mathrm{d}\\theta \\implies \\frac{\\mathrm{d}T}{T} = f\\,\\mathrm{d}\\theta$$\nEn intégrant entre $\\theta = 0$ (brin mou, tension $T_{mou}$) et $\\theta = \\beta$ (brin tendu, tension $T_{tendu}$) :\n$$\\ln\\left( \\frac{T_{tendu}}{T_{mou}} \\right) = f \\beta \\iff T_{tendu} = T_{mou} e^{f \\beta}$$'
        },
        {
          titre: '3. Application maritime',
          explication: 'On souhaite un rapport d\'amplification de $\\frac{T_{tendu}}{T_{mou}} = \\frac{50000}{100} = 500$.\n$$\\ln(500) = f \\beta \\implies \\beta = \\frac{\\ln(500)}{f} = \\frac{6.2146}{0.30} \\approx 20.715\\text{ radians}$$\nNombre de tours de cabestan $n = \\frac{\\beta}{2\\pi}$ :\n$$n = \\frac{20.715}{2\\pi} \\approx \\frac{20.715}{6.283} \\approx 3.3\\text{ tours}$$\nMoins de 4 tours complets de corde suffisent amplement à retenir un navire de 50 tonnes grâce à la croissance exponentielle phénoménale du frottement !'
        }
      ],
      conclusion: 'La formule d\'Eytelwein explique pourquoi le cabestan et les freins à sangle permettent de démultiplier la force humaine par un facteur de plusieurs centaines sans aucun engrenage.',
      reflexeDuCorrecteur: 'L\'angle $\\beta$ doit impérativement être exprimé en radians dans l\'exponentielle.'
    }
  },
  {
    id: 'exo-100-25-equation-onde-corde-melde',
    title: 'Ondes Stationnaires sur une Corde Vibrante & Expérience de Melde',
    matiere: 'Physique',
    chapitreId: 'physique-bcpst-optique-microscopie',
    chapitreTitre: 'Ondes Stationnaires & Résonance',
    filieres: ['BCPST', 'PC', 'MP', 'PSI'],
    annee: '1ère année',
    difficulte: 2,
    origin: 'Agro-Véto / CCINP',
    dureeEstimeeMin: 30,
    enonce: 'Une corde de longueur $L$ et de masse linéique $\\mu$, fixée à ses deux extrémités en $x=0$ et $x=L$, est tendue avec une force de tension $T_0$.\n1. Rappeler l\'expression de la célérité $c$ des ondes transversales le long de la corde.\n2. En cherchant des solutions à variables séparées $y(x, t) = X(x) \\cos(\\omega t + \\phi)$ satisfaisant les conditions aux limites $y(0, t) = y(L, t) = 0$, déterminer les pulsations propres $\\omega_n$ et les modes propres de vibration $Y_n(x)$.\n3. L\'expérience de Melde est excitée par un vibreur de fréquence $f = 50\\text{ Hz}$. La corde mesure $L = 1.20\\text{ m}$ et a une masse totale $m = 6.0\\text{ g}$. Pour quelle valeur de la masse suspendue $M$ obtient-on une résonance à $n = 3$ fuseaux ?',
    hints: [
      'Célérité : $c = \\sqrt{T_0 / \\mu}$.',
      'Fréquences propres : $f_n = n \\frac{c}{2L}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Célérité des ondes transversales',
          explication: 'D\'après le principe fondamental de la dynamique appliqué à un tronçon de corde sous faible amplitude, la célérité s\'exprime par la formule canonique de Taylor :\n$$c = \\sqrt{\\frac{T_0}{\\mu}}$$'
        },
        {
          titre: '2. Modes propres et quantification des fréquences',
          explication: 'L\'équation d\'onde de d\'Alembert s\'écrit $\\frac{\\partial^2 y}{\\partial x^2} - \\frac{1}{c^2} \\frac{\\partial^2 y}{\\partial t^2} = 0$. En posant $y(x, t) = X(x) \\cos(\\omega t)$ :\n$$X\'\'(x) + \\frac{\\omega^2}{c^2} X(x) = 0 \\implies X(x) = A \\sin(k x) + B \\cos(k x) \\quad (k = \\omega / c)$$\n- En $x = 0$ : $X(0) = 0 \\implies B = 0$.\n- En $x = L$ : $X(L) = A \\sin(k L) = 0$. Pour avoir une solution non identiquement nulle ($A \\neq 0$), il faut :\n$$k_n L = n \\pi \\implies k_n = \\frac{n\\pi}{L} \\quad (n \\in \\mathbb{N}^*)$$\nLes fréquences propres forment une suite harmonique quantifiée :\n$$f_n = \\frac{\\omega_n}{2\\pi} = \\frac{k_n c}{2\\pi} = n \\frac{c}{2L} = \\frac{n}{2L} \\sqrt{\\frac{T_0}{\\mu}}$$\nLe mode $n$ présente $n$ fuseaux avec $n+1$ nœuds de vibration.'
        },
        {
          titre: '3. Application numérique à l\'expérience de Melde',
          explication: 'Masse linéique : $\\mu = \\frac{m}{L} = \\frac{6.0\\times 10^{-3}\\text{ kg}}{1.20\\text{ m}} = 5.0\\times 10^{-3}\\text{ kg/m}$.\nLa résonance à 3 fuseaux ($n=3$) à la fréquence imposée $f = 50\\text{ Hz}$ donne :\n$$f = 3 \\frac{c}{2L} \\implies c = \\frac{2 L f}{3} = \\frac{2 \\times 1.20 \\times 50}{3} = 40.0\\text{ m/s}$$\nLa tension nécessaire vaut $T_0 = \\mu c^2 = (5.0\\times 10^{-3}) \\times (40.0)^2 = 5.0\\times 10^{-3} \\times 1600 = 8.0\\text{ N}$.\nComme la tension est produite par la masse suspendue $M$ ($T_0 = M g$) avec $g = 9.81\\text{ m/s}^2$ :\n$$M = \\frac{T_0}{g} = \\frac{8.0}{9.81} \\approx 0.815\\text{ kg} = 815\\text{ g}$$'
        }
      ],
      conclusion: 'L\'expérience de Melde illustre la quantification des états propres par les conditions aux limites spatiales, principe fondateur de la mécanique quantique (quantification de l\'énergie dans un puits infini).',
      reflexeDuCorrecteur: 'Attention au mode de couplage dans Melde : si le vibreur oscille parallèlement à la corde (excitation paramétrique), la fréquence d\'oscillation de la corde est la moitié de celle du vibreur ($f_{corde} = f_{vibreur}/2$). Ici l\'excitation est transversale ($f_{corde} = f$).'
    }
  }
];
