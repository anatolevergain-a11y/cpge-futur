import { OFFICIAL_CPGE_COURSES } from './coursesData';
import { ADDITIONAL_EXERCISES } from './additionalExercises';
import { ADDITIONAL_KHOLLE_SUBJECTS } from './additionalKholles';
import { MASSIVE_EXERCISES } from './massiveExercisesData';
import { MASSIVE_KHOLLES } from './massiveKhollesData';
import { FIFTY_KHOLLES_DATA } from './fiftyKhollesData';
import { MASSIVE_QUESTIONS_INCONTOURNABLES } from './massiveQuestionsData';
import { THIRTY_QUESTIONS_INCONTOURNABLES } from './thirtyQuestionsData';
import { CENTURY_EXERCISES_PART1 } from './centuryExercisesPart1';
import { CENTURY_EXERCISES_PART2 } from './centuryExercisesPart2';
import { QUINQUAGINTA_EXERCISES } from './quinquagintaExercises';
import { ULTRA_EXERCISES } from './ultraExercises';
import { MASSIVE_FICHES_REFLEXES } from './massiveFichesData';
import { TWENTY_FICHES_REFLEXES } from './twentyFichesData';
import { THIRTY_NEW_FICHES_REFLEXES } from './thirtyNewFichesData';
import { BCPST_QUESTIONS_INCONTOURNABLES } from './bcpstQuestionsData';
import { HUNDRED_EXERCISES } from './hundredExercises';

export type Filiere = 'MPSI' | 'PCSI' | 'MP' | 'PC' | 'PSI' | 'MPI' | 'BCPST';

export type Matiere = 'Mathématiques' | 'Physique' | 'Chimie' | 'Informatique' | 'Sciences de l\'Ingénieur';

export type Difficulte = 1 | 2 | 3; // 1: Assimilation, 2: Classique Concours, 3: Étoile ENS/X

export interface CourseChapter {
  id: string;
  slug: string;
  title: string;
  matiere: Matiere;
  filieres: Filiere[];
  annee: '1ère année' | '2ème année' | '1ère & 2ème année' | 'Tronc commun & Spécialité';
  description: string;
  readTime: string;
  prerequis: string[];
  keyTheorems: {
    name: string;
    statement: string;
    demonstration?: string;
    astuceConcours: string;
  }[];
  sections: {
    title: string;
    content: string; // supports LaTeX $...$ and $$...$$
    methodKicker?: string;
  }[];
  piegesClassiques: string[];
}

export interface ExerciseSchema {
  titre: string;
  type: 'circuit-wien' | 'michelson-optique' | 'pourbaix-fer' | 'bielle-manivelle' | 'conformation-newman' | 'schema-bloc-asservissement' | 'cycle-carnot' | 'fentes-young' | 'diagramme-bode';
  legende: string;
  donneesCles?: { label?: string; symbole?: string; valeur: string; description?: string }[];
}

export interface ExerciseItem {
  id: string;
  title: string;
  matiere: Matiere;
  chapitreId: string;
  chapitreTitre: string;
  filieres: Filiere[];
  annee?: '1ère année' | '2ème année' | '1ère & 2ème année' | 'Tronc commun & Spécialité';
  difficulte: Difficulte;
  origin: string; // e.g. "Mines-Ponts MP 2023", "Oral X-ENS", "Centrale-Supélec PSI", "Khôlle classique"
  dureeEstimeeMin: number;
  enonce: string; // with LaTeX
  schema?: ExerciseSchema;
  hints: string[];
  correction: {
    etapes: {
      titre: string;
      explication: string;
      calculs?: string;
    }[];
    conclusion: string;
    reflexeDuCorrecteur: string;
  };
}

export interface KholleSubject {
  id: string;
  titre: string;
  matiere: Matiere;
  filiere: Filiere;
  dureePrepMin: number;
  dureePassageMin: number;
  questionDeCours: {
    enonce: string;
    pointsCles: string[];
    baremeCours: number; // e.g. 8 points
  };
  exerciceRecherche: {
    enonce: string;
    indicationsKholleur: {
      condition: string;
      aide: string;
    }[];
    baremeExo: number; // e.g. 12 points
  };
  questionsPiegesKholleur?: {
    question: string;
    reponseAttendue: string;
    piegeAEviter: string;
  }[];
  criteresNotation: {
    critere: string;
    poids: string;
  }[];
  correction?: KholleCorrection;
}

export interface KholleCorrection {
  questionDeCours: {
    titre?: string;
    redactionComplete: string;
    pointsVigilance?: string[];
  };
  exerciceRecherche: {
    titre?: string;
    demarcheInitiale: string;
    etapes?: { titre: string; detail: string; calculs?: string }[];
    solutionDetaillee: string;
    conclusion?: string;
  };
  conseilsKholleur?: string;
}

export interface ErreurConcoursItem {
  id: string;
  titre: string;
  matiere: Matiere;
  filieres: Filiere[];
  concoursImpact: string;
  frequenceRapport: 'Systématique (> 45% des copies)' | 'Très fréquente (25-45% des copies)' | 'Éliminatoire à l\'oral';
  lErreur: string;
  pourquoiCestFaux: string;
  laCorrectionParfaite: string;
  citationRapportJury: string;
}

export interface QuestionIncontournableItem {
  id: string;
  titre: string;
  matiere: Matiere;
  filieres: Filiere[];
  tauxPresence: string;
  chapitreAssocie: string;
  enonceType: string;
  piegesImmediats: string[];
  redactionModele: {
    etape: string;
    justification: string;
    formule?: string;
  }[];
  baremeEtPointsCles: string[];
}

export interface FicheReflexe {
  id: string;
  titre: string;
  matiere: Matiere;
  formuleOuTheoreme: string;
  quandUtiliser: string;
  etapesPratiques: string[];
  exempleApplication: string;
}

// Full CPGE Data
export const COURSES_DATA: CourseChapter[] = OFFICIAL_CPGE_COURSES;

const _DEPRECATED_COURSES: CourseChapter[] = [
  {
    id: 'maths-reduction',
    slug: 'reduction-des-endomorphismes',
    title: 'Réduction des Endomorphismes & Diagonalisation',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'MPSI'],
    annee: '2ème année',
    description: 'Polynômes d\'endomorphismes, lemmes des noyaux, valeurs propres, sous-espaces propres, critères de diagonalisabilité et trigonalisation.',
    readTime: '25 min',
    prerequis: ['Espaces vectoriels de dimension finie', 'Déterminants', 'Polynômes $\\mathbb{K}[X]$'],
    keyTheorems: [
      {
        name: 'Lemme des Noyaux',
        statement: 'Soit $u \\in \\mathcal{L}(E)$ et $P_1, \\dots, P_k \\in \\mathbb{K}[X]$ des polynômes deux à deux premiers entre eux. En posant $P = \\prod_{i=1}^k P_i$, on a :\n$$\\ker(P(u)) = \\bigoplus_{i=1}^k \\ker(P_i(u))$$\nDe plus, les projecteurs associés à cette décomposition sont des polynômes en $u$.',
        demonstration: 'Par récurrence sur $k$. Pour $k=2$, d\'après l\'identité de Bézout, il existe $U, V \\in \\mathbb{K}[X]$ tels que $U P_1 + V P_2 = 1$. En évaluant en $u$, $\\mathrm{id}_E = (U P_1)(u) + (V P_2)(u)$. Tout vecteur $x \\in \\ker((P_1 P_2)(u))$ s\'écrit $x_2 + x_1$ avec $x_1 = (U P_1)(u)(x) \\in \\ker(P_2(u))$ et $x_2 = (V P_2)(u)(x) \\in \\ker(P_1(u))$. L\'intersection est réduite à $\\{0\\}$ car si $y \\in \\ker(P_1(u)) \\cap \\ker(P_2(u))$, $y = U(u)P_1(u)(y) + V(u)P_2(u)(y) = 0$.',
        astuceConcours: 'Indispensable pour décomposer l\'espace sans calculer explicitement les vecteurs propres ! Dès que le polynôme minimal ou annulateur est scindé à racines simples, le lemme des noyaux donne immédiatement la diagonalisabilité.'
      },
      {
        name: 'Théorème de Cayley-Hamilton',
        statement: 'Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension finie $n$ et $u \\in \\mathcal{L}(E)$. Soit $\\chi_u(X) = \\det(X \\mathrm{id}_E - u)$ son polynôme caractéristique. Alors :\n$$\\chi_u(u) = 0_{\\mathcal{L}(E)}$$',
        demonstration: 'Démontrable via la comatrice de la matrice $(X I_n - A)$ dans $\\mathcal{M}_n(\\mathbb{K}[X])$, ou par densité des matrices diagonalisables dans $\\mathcal{M}_n(\\mathbb{C})$ puis passage à la limite.',
        astuceConcours: 'Permet d\'exprimer $u^n$ comme combinaison linéaire de $\\mathrm{id}, u, \\dots, u^{n-1}$, ou d\'inverser $u$ si $\\det(u) \\neq 0$ : $u^{-1} = -\\frac{1}{a_0} \\sum_{k=1}^n a_k u^{k-1}$.'
      },
      {
        name: 'Critère de diagonalisabilité par le polynôme minimal',
        statement: 'Un endomorphisme $u \\in \\mathcal{L}(E)$ en dimension finie est diagonalisable si et seulement si son polynôme minimal $\\mu_u$ est scindé à racines simples sur $\\mathbb{K}$ (ou s\'il existe un polynôme annulateur scindé à racines simples).',
        astuceConcours: 'Si un sujet vous donne une relation du type $u^3 - 4u = 0$, remarquez immédiatement $X(X-2)(X+2)$ qui est scindé à racines simples sur $\\mathbb{R}$ : $u$ est donc diagonalisable sans le moindre calcul matriciel lourd !'
      }
    ],
    sections: [
      {
        title: '1. Éléments propres & Sous-espaces caractéristiques',
        content: 'Soit $u \\in \\mathcal{L}(E)$. Un scalaire $\\lambda \\in \\mathbb{K}$ est valeur propre s\'il existe un vecteur non nul $x \\in E$ tel que $u(x) = \\lambda x$. Le sous-espace propre associé est $E_\\lambda(u) = \\ker(u - \\lambda \\mathrm{id}_E)$. Le spectre $\\mathrm{Sp}(u)$ est l\'ensemble des racines de $\\chi_u$ appartenant à $\\mathbb{K}$. En dimension $n$, $\\dim E_\\lambda(u) \\le m_\\lambda$ où $m_\\lambda$ est la multiplicité de $\\lambda$ comme racine de $\\chi_u$.',
        methodKicker: 'Réflexe : Toujours vérifier la somme des dimensions des sous-espaces propres $\\sum_{\\lambda} \\dim E_\\lambda(u) = n$.'
      },
      {
        title: '2. Méthode standard de diagonalisation',
        content: 'Pour diagonaliser une matrice $A \\in \\mathcal{M}_n(\\mathbb{K})$ :\n1. Calculer le polynôme caractéristique $\\chi_A(X) = \\det(X I_n - A)$. Factoriser $\\chi_A$.\n2. Vérifier si $\\chi_A$ est scindé sur $\\mathbb{K}$. Si non, $A$ n\'est pas diagonalisable sur $\\mathbb{K}$.\n3. Pour chaque racine multiple $\\lambda$, calculer $\\dim \\ker(A - \\lambda I_n) = n - \\mathrm{rg}(A - \\lambda I_n)$.\n4. $A$ est diagonalisable $\\iff \\forall \\lambda, \\dim \\ker(A - \\lambda I_n) = m_\\lambda$.\n5. Concaténer les bases des sous-espaces propres pour former la matrice de passage $P$. On obtient $D = P^{-1} A P$.',
        methodKicker: 'Astuce concours : Toujours additionner toutes les lignes (ou colonnes) si leur somme est constante pour factoriser immédiatement sans développer brutalement le déterminant.'
      }
    ],
    piegesClassiques: [
      'Confondre polynôme annulateur et polynôme caractéristique (un polynôme annulateur n\'a pas nécessairement le même degré ni les mêmes multiplicités).',
      'Oublier de vérifier le corps de base : une matrice à coefficients réels peut être non diagonalisable sur $\\mathbb{R}$ mais diagonalisable sur $\\mathbb{C}$ (ex : matrice de rotation $R_{\\pi/2}$).',
      'Penser qu\'une matrice inversible est forcément diagonalisable (faux : $\\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$ est inversible mais non diagonalisable).'
    ]
  },
  {
    id: 'maths-series-entieres',
    slug: 'series-entieres-et-fourier',
    title: 'Séries Entières & Analyse Harmonique',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    annee: '2ème année',
    description: 'Rayon de convergence, règle de d\'Alembert, lemme d\'Abel, développements en série entière usuels, continuité et dérivabilité terme à terme, séries de Fourier.',
    readTime: '30 min',
    prerequis: ['Séries numériques', 'Suites et séries de fonctions', 'Intégration sur un segment'],
    keyTheorems: [
      {
        name: 'Lemme d\'Abel',
        statement: 'Soit $\\sum a_n z^n$ une série entière. S\'il existe $z_0 \\neq 0$ tel que la suite $(a_n z_0^n)_{n \\in \\mathbb{N}}$ soit bornée, alors pour tout $z \\in \\mathbb{C}$ tel que $|z| < |z_0|$, la série $\\sum a_n z^n$ est absolument convergente.',
        demonstration: 'On écrit $|a_n z^n| = |a_n z_0^n| \\cdot \\left|\\frac{z}{z_0}\\right|^n \\le M r^n$ avec $r = \\frac{|z|}{|z_0|} < 1$. C\'est le terme général d\'une série géométrique convergente.',
        astuceConcours: 'Fondement absolu de la notion de rayon de convergence $R = \\sup\\{r \\ge 0 \\mid (a_n r^n) \\text{ est bornée}\\}$.'
      },
      {
        name: 'Règle de d\'Alembert pour les séries entières',
        statement: 'Si $\\lim_{n \\to +\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = \\ell \\in [0, +\\infty]$, alors le rayon de convergence de $\\sum a_n z^n$ est $R = \\frac{1}{\\ell}$ (avec les conventions $1/0 = +\\infty$ et $1/+\\infty = 0$).',
        astuceConcours: 'Attention : ne s\'applique que si $a_n \\neq 0$ à partir d\'un certain rang. Pour $\\sum a_{2n} z^{2n}$, poser $u = z^2$ !'
      },
      {
        name: 'Formule de Parseval (Séries de Fourier)',
        statement: 'Pour une fonction $f$ continue par morceaux et $2\\pi$-périodique :\n$$\\frac{1}{2\\pi} \\int_0^{2\\pi} |f(t)|^2 \\,\\mathrm{d}t = a_0^2 + \\frac{1}{2} \\sum_{n=1}^\\infty (a_n^2 + b_n^2) = \\sum_{n=-\\infty}^{+\\infty} |c_n(f)|^2$$',
        astuceConcours: 'Moyen ultra classique aux écrits Mines/Centrale pour calculer la somme de séries du type $\\sum_{n=1}^\\infty \\frac{1}{n^4}$ ou $\\sum_{n=1}^\\infty \\frac{1}{n^2}$.'
      }
    ],
    sections: [
      {
        title: '1. Propriétés de la somme à l\'intérieur du disque de convergence',
        content: 'À l\'intérieur du disque ouvert de convergence $D(0, R)$, la somme $S(z) = \\sum_{n=0}^\\infty a_n z^n$ est indéfiniment dérivable (analytique). On peut dériver et intégrer terme à terme autant de fois que l\'on veut, et le rayon de convergence reste invariant : $R\' = R$. De plus, $a_n = \\frac{S^{(n)}(0)}{n!}$.',
        methodKicker: 'Au bord du disque $|z|=R$, l\'étude est au cas par cas (séries alternées, règle d\'Abel pour les séries numériques).'
      }
    ],
    piegesClassiques: [
      'Affirmer que la série diverge pour $|z| = R$ (le comportement sur le cercle d\'incertitude dépend entièrement du terme $a_n$).',
      'Dériver terme à terme en dehors du disque ouvert sans vérifier la convergence uniforme.'
    ]
  },
  {
    id: 'physique-maxwell',
    slug: 'electromagnetisme-equations-de-maxwell',
    title: 'Électromagnétisme & Équations de Maxwell',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'PCSI'],
    annee: '2ème année',
    description: 'Formes locales et intégrales des 4 équations fondamentales, potentiel vecteur, conservation de la charge, énergie électromagnétique et vecteur de Poynting.',
    readTime: '28 min',
    prerequis: ['Analyse vectorielle (grad, div, rot, laplacien)', 'Électrostatique et magnétostatique', 'Théorèmes de Stokes et Green-Ostrogradski'],
    keyTheorems: [
      {
        name: 'Les 4 Équations de Maxwell Fondamentales',
        statement: 'Dans le vide en présence de charges $\\rho$ et de courants $\\vec{j}$ :\n1. Maxwell-Gauss : $\\mathrm{div}\\,\\vec{E} = \\frac{\\rho}{\\varepsilon_0}$\n2. Maxwell-Thomson (flux) : $\\mathrm{div}\\,\\vec{B} = 0$\n3. Maxwell-Faraday : $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$\n4. Maxwell-Ampère : $\\vec{\\mathrm{rot}}\\,\\vec{B} = \\mu_0 \\vec{j} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$',
        demonstration: 'La cohérence avec la conservation de la charge $\\mathrm{div}\\,\\vec{j} + \\frac{\\partial \\rho}{\\partial t} = 0$ impose le terme de courant de déplacement de Maxwell $\\vec{j}_D = \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ car $\\mathrm{div}(\\vec{\\mathrm{rot}}\\,\\vec{B}) = 0$.',
        astuceConcours: 'Question ultra classique à l\'oral : "Pourquoi Maxwell a-t-il ajouté le terme $\\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ ?" Réponse : pour assurer la compatibilité mathématique avec la conservation de la charge électrique !'
      },
      {
        name: 'Théorème de Poynting & Bilan d\'énergie',
        statement: 'La densité volumique d\'énergie électromagnétique est $u_{em} = \\frac{1}{2} \\varepsilon_0 E^2 + \\frac{B^2}{2 \\mu_0}$. Le vecteur de Poynting est $\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$. L\'équation locale de conservation s\'écrit :\n$$\\frac{\\partial u_{em}}{\\partial t} + \\mathrm{div}\\,\\vec{\\Pi} = -\\vec{j} \\cdot \\vec{E}$$',
        astuceConcours: 'Le terme $-\\vec{j} \\cdot \\vec{E}$ correspond à la puissance cédée par le champ électromagnétique aux porteurs de charge (effet Joule ou travail mécanique).'
      }
    ],
    sections: [
      {
        title: '1. Potentiels scalaire et vecteur en jauge de Lorenz',
        content: 'Puisque $\\mathrm{div}\\,\\vec{B} = 0$, il existe un potentiel vecteur $\\vec{A}$ tel que $\\vec{B} = \\vec{\\mathrm{rot}}\\,\\vec{A}$. Alors $\\vec{\\mathrm{rot}}\\left(\\vec{E} + \\frac{\\partial \\vec{A}}{\\partial t}\\right) = \\vec{0}$, donc il existe un potentiel scalaire $V$ tel que $\\vec{E} = -\\vec{\\nabla} V - \\frac{\\partial \\vec{A}}{\\partial t}$. En choisissant la jauge de Lorenz $\\mathrm{div}\\,\\vec{A} + \\frac{1}{c^2} \\frac{\\partial V}{\\partial t} = 0$, on découple les équations en équations de d\'Alembert.',
        methodKicker: 'Formule clé : $\\square \\vec{A} = -\\mu_0 \\vec{j}$ et $\\square V = -\\frac{\\rho}{\\varepsilon_0}$ où $\\square = \\Delta - \\frac{1}{c^2}\\frac{\\partial^2}{\\partial t^2}$.'
      }
    ],
    piegesClassiques: [
      'Oublier le terme $-\\frac{\\partial \\vec{A}}{\\partial t}$ dans l\'expression de $\\vec{E}$ en régime variable.',
      'Confondre la puissance volumique reçue $-\\vec{j}\\cdot\\vec{E}$ et la puissance dissipée en régime permanent.'
    ]
  },
  {
    id: 'physique-optique-interferences',
    slug: 'optique-ondulatoire-interferences',
    title: 'Optique Ondulatoire & Phénomènes d\'Interférences',
    matiere: 'Physique',
    filieres: ['PC', 'MP', 'PSI', 'PCSI'],
    annee: '2ème année',
    description: 'Division du front d\'onde (trous d\'Young), division d\'amplitude (Michelson), contraste, cohérence temporelle et spatiale, formule de Fresnel.',
    readTime: '22 min',
    prerequis: ['Optique géométrique', 'Ondes planes progressives monochromatiques', 'Notion de phase et chemin optique'],
    keyTheorems: [
      {
        name: 'Formule de Fresnel pour deux ondes cohérentes',
        statement: 'Pour deux ondes lumineuses cohérentes d\'intensités $I_1$ et $I_2$ et de différence de phase $\\Delta\\phi = \\frac{2\\pi}{\\lambda_0} \\delta$ où $\\delta = (S_2 M) - (S_1 M)$ est la différence de chemin optique :\n$$I(M) = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos\\left(\\frac{2\\pi \\delta}{\\lambda_0}\\right)$$\nSi $I_1 = I_2 = I_0$, alors $I(M) = 2I_0\\left(1 + \\cos\\left(\\frac{2\\pi \\delta}{\\lambda_0}\\right)\\right) = 4I_0 \\cos^2\\left(\\frac{\\pi \\delta}{\\lambda_0}\\right)$.',
        astuceConcours: 'L\'interfrange pour les fentes d\'Young séparées de $a$ à distance $D$ vaut $i = \\frac{\\lambda_0 D}{a}$.'
      }
    ],
    sections: [
      {
        title: '1. Facteur de visibilité et contraste',
        content: 'Le contraste des franges est défini par $C = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}}$. Avec deux sources d\'égales amplitudes, $C = 1$. Lorsque la source n\'est pas rigoureusement monochromatique (largeur spectrale $\\Delta\\lambda$), la longueur de cohérence temporelle est $L_c \\approx \\frac{\\lambda_0^2}{\\Delta\\lambda}$. Des franges ne sont visibles que si $|\delta| \\le L_c$.',
        methodKicker: 'Pour un doublet spectral (ex: doublet du sodium $\\lambda_1, \\lambda_2$), on observe un phénomène de battement avec brouillage des franges.'
      }
    ],
    piegesClassiques: [
      'Confondre la différence de marche géométrique $d_2 - d_1$ et la différence de chemin optique $\\delta = [S_2 M] - [S_1 M] = n(d_2 - d_1)$ lorsqu\'un milieu d\'indice $n$ est intercalé.',
      'Oublier le déphasage de $\\pi$ lors d\'une réflexion sur un milieu plus réfringent.'
    ]
  },
  {
    id: 'chimie-thermo-equilibres',
    slug: 'thermodynamique-chimique-ellingham',
    title: 'Thermodynamique Chimique & Diagrammes d\'Ellingham',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'PSI', 'MP', 'BCPST'],
    annee: '1ère & 2ème année',
    description: 'Enthalpie libre de réaction, affinité chimique, quotient de réaction, approximation d\'Ellingham, pyrométallurgie et corrosion.',
    readTime: '20 min',
    prerequis: ['Premier et second principes', 'Potentiel chimique', 'Enthalpie standard de formation'],
    keyTheorems: [
      {
        name: 'Relation fondamentale de l\'Enthalpie Libre Standard',
        statement: 'Pour une réaction chimique d\'affinité $A = -\\Delta_r G = -(\\Delta_r G^\\circ + RT \\ln Q)$ :\n$$\\Delta_r G^\\circ(T) = \\Delta_r H^\\circ - T \\Delta_r S^\\circ = -RT \\ln K^\\circ(T)$$',
        astuceConcours: 'La loi de van \'t Hoff $\\frac{\\mathrm{d}\\ln K^\\circ}{\\mathrm{d}T} = \\frac{\\Delta_r H^\\circ}{R T^2}$ montre immédiatement qu\'une hausse de température favorise le sens endothermique.'
      }
    ],
    sections: [
      {
        title: '1. Approximation d\'Ellingham et tracé des droites',
        content: 'L\'approximation d\'Ellingham consiste à considérer que $\\Delta_r H^\\circ$ et $\\Delta_r S^\\circ$ sont indépendants de la température hors changement d\'état. Les courbes $\\Delta_r G^\\circ(T)$ pour 1 mole de $O_2$ sont alors des segments de droite de pente négative ou positive $-\\Delta_r S^\\circ$. Tout réducteur dont la droite est située en dessous réduit l\'oxyde situé au-dessus.',
        methodKicker: 'Règle mnémotechnique : En dessous, ça réduit le dessus !'
      }
    ],
    piegesClassiques: [
      'Oublier de ramener toutes les réactions à 1 mole de dioxygène $O_2(g)$ avant de comparer les droites d\'Ellingham.',
      'Ne pas tenir compte de la rupture de pente lors d\'un changement d\'état d\'un des réactifs ou produits.'
    ]
  },
  {
    id: 'info-graphes-complexite',
    slug: 'algorithmique-graphes-complexite',
    title: 'Algorithmique des Graphes & Complexité',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PC', 'PSI', 'MPSI'],
    annee: 'Tronc commun & Spécialité',
    description: 'Représentation des graphes (matrices et listes d\'adjacence), parcours BFS/DFS, algorithme de Dijkstra, programmation dynamique, calcul de complexité.',
    readTime: '24 min',
    prerequis: ['Bases de Python', 'Structures de données (piles, files, tas)', 'Preuves par récurrence'],
    keyTheorems: [
      {
        name: 'Correction et Complexité de l\'Algorithme de Dijkstra',
        statement: 'Pour un graphe orienté pondéré à poids strictement positifs $G=(V, E, w)$ et une source $s \\in V$, l\'algorithme de Dijkstra calcule la distance minimale de $s$ à tous les sommets. Avec une file de priorité min-heap, la complexité temporelle est $\\mathcal{O}((|V| + |E|) \\log |V|)$.',
        astuceConcours: 'Ne fonctionne JAMAIS avec des poids négatifs (dans ce cas, utiliser l\'algorithme de Bellman-Ford).'
      }
    ],
    sections: [
      {
        title: '1. Parcours en largeur (BFS) vs Parcours en profondeur (DFS)',
        content: 'Le parcours en largeur (BFS) utilise une file FIFO et permet de trouver le plus court chemin en nombre d\'arêtes. Le parcours en profondeur (DFS) utilise une pile LIFO (ou récursion) et permet la détection de cycles, le tri topologique d\'un DAG et la recherche des composantes fortement connexes.',
        methodKicker: 'En Python en CPGE, utilisez `collections.deque` pour une file en temps $\\mathcal{O}(1)$ par opération popleft().'
      }
    ],
    piegesClassiques: [
      'Utiliser `list.pop(0)` en Python pour une file : cela coûte $\\mathcal{O}(n)$ et détruit la complexité globale en $\\mathcal{O}(n^2)$ !',
      'Oublier de marquer les sommets visités dès leur insertion dans la file dans un BFS, provoquant des duplications exponentielles.'
    ]
  }
];

const BASE_EXERCISES_DATA: ExerciseItem[] = [
  {
    id: 'exo-poly-annulateur-spectral',
    title: 'Réduction & Projecteurs spectraux via un polynôme annulateur',
    matiere: 'Mathématiques',
    chapitreId: 'maths-reduction',
    chapitreTitre: 'Réduction des Endomorphismes & Diagonalisation',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    difficulte: 2,
    origin: 'Mines-Ponts MP / PC',
    dureeEstimeeMin: 25,
    enonce: 'Soit $E$ un $\\mathbb{R}$-espace vectoriel de dimension finie $n \\ge 1$ et $u \\in \\mathcal{L}(E)$ vérifiant la relation :\n$$u^3 - 3u^2 + 2u = 0_{\\mathcal{L}(E)}$$\n\n1. Montrer que $u$ est diagonalisable.\n2. Quelles sont les valeurs propres possibles de $u$ ?\n3. Exprimer les projecteurs spectraux sur les sous-espaces propres en fonction de $u$ et $\\mathrm{id}_E$.\n4. En déduire l\'expression explicite de $u^k$ pour tout $k \\in \\mathbb{N}^*$.',
    hints: [
      'Considérer le polynôme $P(X) = X^3 - 3X^2 + 2X$. Factorisez-le dans $\\mathbb{R}[X]$.',
      'Utilisez le lemme des noyaux ou les relations de Bézout pour exprimer $\\mathrm{id}_E$ comme somme de trois termes appartenant chacun à un noyau.',
      'Pour $P_0 = X-0$, $P_1 = X-1$, $P_2 = X-2$, cherchez des polynômes $L_i$ interpolateurs de Lagrange tels que $L_i(\\lambda_j) = \\delta_{ij}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Factorisation du polynôme annulateur et diagonalisabilité',
          explication: 'On a $P(X) = X(X^2 - 3X + 2) = X(X-1)(X-2)$. Le polynôme $P$ annule $u$. Puisque $P$ est scindé à racines simples dans $\\mathbb{R}$ (ses racines sont $0, 1, 2$), l\'endomorphisme $u$ est diagonalisable.',
          calculs: 'P(X) = X(X-1)(X-2) \\implies u \\text{ est diagonalisable sur } \\mathbb{R}.'
        },
        {
          titre: '2. Spectre de u',
          explication: 'Toute valeur propre de $u$ est racine de tout polynôme annulateur de $u$. Donc $\\mathrm{Sp}(u) \\subset \\{0, 1, 2\\}$. Remarque : toutes ces valeurs ne sont pas nécessairement des valeurs propres si le sous-espace propre associé est réduit à $\\{0\\}$, mais elles constituent l\'ensemble des candidats possibles.',
          calculs: '\\mathrm{Sp}(u) \\subseteq \\{0, 1, 2\\}'
        },
        {
          titre: '3. Projecteurs spectraux via les polynômes interpolateurs de Lagrange',
          explication: 'D\'après le lemme des noyaux, $E = \\ker(u) \\oplus \\ker(u - \\mathrm{id}) \\oplus \\ker(u - 2\\mathrm{id})$. Les projecteurs spectraux $p_0, p_1, p_2$ s\'obtiennent par les polynômes de Lagrange associés aux nœuds $0, 1, 2$ :\n- $p_0 = L_0(u) = \\frac{(u - \\mathrm{id})(u - 2\\mathrm{id})}{(0-1)(0-2)} = \\frac{1}{2}(u - \\mathrm{id})(u - 2\\mathrm{id})$\n- $p_1 = L_1(u) = \\frac{u(u - 2\\mathrm{id})}{(1-0)(1-2)} = -u(u - 2\\mathrm{id})$\n- $p_2 = L_2(u) = \\frac{u(u - \\mathrm{id})}{(2-0)(2-1)} = \\frac{1}{2}u(u - \\mathrm{id})$\nOn vérifie bien $p_0 + p_1 + p_2 = \\mathrm{id}_E$ et $p_i \\circ p_j = \\delta_{ij} p_i$.'
        },
        {
          titre: '4. Calcul des puissances $u^k$',
          explication: 'Puisque $u = 0 \\cdot p_0 + 1 \\cdot p_1 + 2 \\cdot p_2 = p_1 + 2 p_2$, et que les $p_i$ sont des projecteurs orthogonaux deux à deux vérifiant $p_i \\circ p_j = 0$ pour $i \\neq j$ et $p_i^2 = p_i$, on a immédiatement pour tout $k \\ge 1$ :',
          calculs: 'u^k = 0^k p_0 + 1^k p_1 + 2^k p_2 = p_1 + 2^k p_2 = -u(u - 2\\mathrm{id}) + 2^{k-1} u(u - \\mathrm{id})'
        }
      ],
      conclusion: 'On obtient $u^k = (2^{k-1} - 1) u^2 + (2 - 2^{k-1}) u$. La méthode des projecteurs spectraux de Lagrange évite le calcul matriciel de puissances et s\'applique en dimension quelconque.',
      reflexeDuCorrecteur: 'Toujours dégainer les polynômes de Lagrange dès qu\'un polynôme annulateur scindé à racines simples apparaît : ils fournissent instantanément les projecteurs spectraux.'
    }
  },
  {
    id: 'exo-fourier-parseval-zeta',
    title: 'Développement de Fourier d\'une onde triangulaire & Sommation de $\\zeta(2)$ et $\\zeta(4)$',
    matiere: 'Mathématiques',
    chapitreId: 'maths-series-entieres',
    chapitreTitre: 'Séries Entières & Analyse Harmonique',
    filieres: ['MP', 'PC', 'PSI'],
    difficulte: 2,
    origin: 'Centrale-Supélec MP / PSI',
    dureeEstimeeMin: 30,
    enonce: 'Soit $f : \\mathbb{R} \\to \\mathbb{R}$ la fonction $2\\pi$-périodique et paire telle que :\n$$\\forall t \\in [0, \\pi], \\quad f(t) = t$$\n\n1. Tracer l\'allure de $f$ sur $[-2\\pi, 2\\pi]$.\n2. Calculer les coefficients de Fourier trigonométriques $(a_n)_{n \\ge 0}$ et $(b_n)_{n \\ge 1}$ de $f$.\n3. Énoncer le théorème de Dirichlet et en déduire la valeur de la somme $\\sum_{p=0}^\\infty \\frac{1}{(2p+1)^2}$, puis celle de $\\zeta(2) = \\sum_{n=1}^\\infty \\frac{1}{n^2}$.\n4. En appliquant la formule de Parseval, calculer $\\sum_{p=0}^\\infty \\frac{1}{(2p+1)^4}$ et en déduire $\\zeta(4) = \\sum_{n=1}^\\infty \\frac{1}{n^4}$.',
    hints: [
      'Puisque $f$ est paire, que vaut $b_n$ pour tout $n \\ge 1$ ?',
      'Pour $a_n$, effectuez une intégration par parties sur $[0, \\pi]$. Remarquez la nullité des termes lorsque $n$ est pair non nul.',
      'Pour relier $\\sum \\frac{1}{(2p+1)^2}$ à $\\zeta(2)$, séparez les indices pairs et impairs : $\\zeta(2) = \\sum_{p=1}^\\infty \\frac{1}{(2p)^2} + \\sum_{p=0}^\\infty \\frac{1}{(2p+1)^2} = \\frac{1}{4}\\zeta(2) + S_{impair}$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Parité et coefficients $b_n$',
          explication: 'La fonction $f$ étant paire et $2\\pi$-périodique, pour tout $n \\ge 1$, les coefficients $b_n(f) = \\frac{1}{\\pi}\\int_{-\\pi}^\\pi f(t)\\sin(nt)\\,\\mathrm{d}t = 0$.'
        },
        {
          titre: '2. Calcul des coefficients $a_n$',
          explication: 'Pour $a_0$ : $a_0 = \\frac{1}{\\pi} \\int_0^\\pi t\\,\\mathrm{d}t = \\frac{\\pi}{2}$.\nPour $n \\ge 1$, par intégration par parties :',
          calculs: 'a_n = \\frac{2}{\\pi} \\int_0^\\pi t \\cos(nt)\\,\\mathrm{d}t = \\frac{2}{\\pi}\\left( \\left[t \\frac{\\sin(nt)}{n}\\right]_0^\\pi - \\int_0^\\pi \\frac{\\sin(nt)}{n}\\,\\mathrm{d}t \\right) = \\frac{2}{\\pi n^2} [\\cos(nt)]_0^\\pi = \\frac{2((-1)^n - 1)}{\\pi n^2}'
        },
        {
          titre: '3. Application du théorème de Dirichlet',
          explication: 'Si $n = 2p$ (pair), $a_{2p} = 0$. Si $n = 2p+1$ (impair), $a_{2p+1} = -\\frac{4}{\\pi(2p+1)^2}$.\nLa fonction $f$ est continue sur $\\mathbb{R}$ et de classe $\\mathcal{C}^1$ par morceaux. D\'après le théorème de Dirichlet, sa série de Fourier converge simplement vers $f$ en tout point :\n$$f(t) = \\frac{\\pi}{2} - \\frac{4}{\\pi} \\sum_{p=0}^\\infty \\frac{\\cos((2p+1)t)}{(2p+1)^2}$$\nEn évaluant en $t = 0$ où $f(0) = 0$ :',
          calculs: '0 = \\frac{\\pi}{2} - \\frac{4}{\\pi} \\sum_{p=0}^\\infty \\frac{1}{(2p+1)^2} \\implies \\sum_{p=0}^\\infty \\frac{1}{(2p+1)^2} = \\frac{\\pi^2}{8}'
        },
        {
          titre: '4. Calcul de $\\zeta(2)$ et $\\zeta(4)$ par Parseval',
          explication: 'On a $\\zeta(2) = \\frac{1}{4}\\zeta(2) + \\frac{\\pi^2}{8} \\implies \\frac{3}{4}\\zeta(2) = \\frac{\\pi^2}{8} \\implies \\zeta(2) = \\frac{\\pi^2}{6}$.\nPar la formule de Parseval :\n$$\\frac{1}{\\pi} \\int_0^\\pi t^2 \\,\\mathrm{d}t = a_0^2 + \\frac{1}{2} \\sum_{n=1}^\\infty a_n^2$$\nLe membre de gauche vaut $\\frac{\\pi^2}{3}$. Donc $\\frac{\\pi^2}{3} = \\frac{\\pi^2}{4} + \\frac{1}{2} \\sum_{p=0}^\\infty \\frac{16}{\\pi^2 (2p+1)^4}$, d\'où :',
          calculs: '\\sum_{p=0}^\\infty \\frac{1}{(2p+1)^4} = \\frac{\\pi^2}{8}\\left(\\frac{\\pi^2}{3} - \\frac{\\pi^2}{4}\\right) = \\frac{\\pi^4}{96} \\implies \\zeta(4) = \\frac{\\pi^4}{90}'
        }
      ],
      conclusion: 'Les résultats célèbres $\\zeta(2) = \\frac{\\pi^2}{6}$ et $\\zeta(4) = \\frac{\\pi^4}{90}$ sont démontrés de façon rigoureuse par analyse harmonique.',
      reflexeDuCorrecteur: 'Ne jamais oublier d\'énoncer les hypothèses du théorème de Dirichlet (continuité et dérivabilité par morceaux) avant d\'écrire l\'égalité ponctuelle.'
    }
  },
  {
    id: 'exo-poynting-coaxial',
    title: 'Vecteur de Poynting & Bilan énergétique dans un câble coaxial',
    matiere: 'Physique',
    chapitreId: 'physique-maxwell',
    chapitreTitre: 'Électromagnétisme & Équations de Maxwell',
    filieres: ['MP', 'PC', 'PSI'],
    difficulte: 2,
    origin: 'Concours Commun Mines-Ponts PSI / MP',
    dureeEstimeeMin: 25,
    enonce: 'Un câble coaxial cylindrique d\'axe $(Oz)$ est constitué d\'une âme conductrice de rayon $R_1$ parcourue par un courant continu $I$ dans le sens de $\\vec{u}_z$, et d\'une gaine cylindrique extérieure de rayon $R_2 > R_1$ parcourue par le courant de retour $-I \\vec{u}_z$. Une tension constante $U = V(R_1) - V(R_2) > 0$ est appliquée entre les deux conducteurs.\n\n1. Déterminer le champ électrostatique $\\vec{E}(M)$ entre les conducteurs ($R_1 < r < R_2$).\n2. Déterminer le champ magnétique $\\vec{B}(M)$ entre les conducteurs en appliquant le théorème d\'Ampère.\n3. Exprimer le vecteur de Poynting $\\vec{\\Pi}(M)$ dans l\'espace inter-conducteur. Commenter sa direction.\n4. Calculer le flux de $\\vec{\\Pi}$ à travers une section droite du câble et retrouver la puissance électrique transportée $\\mathcal{P} = U I$.',
    hints: [
      'Pour le champ électrique, utilisez les invariances et le théorème de Gauss sur un cylindre de rayon $r$ et de hauteur $h$.',
      'Pour le champ magnétique, le contour d\'Ampère est un cercle d\'axe $Oz$ de rayon $r$.',
      'Le flux de $\\vec{\\Pi}$ se calcule par $\\iint \\vec{\\Pi} \\cdot \\vec{u}_z \\, r\\,\\mathrm{d}r\\,\\mathrm{d}\\theta$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Calcul du champ électrique $\\vec{E}$',
          explication: 'Par symétrie cylindrique, $\\vec{E} = E(r)\\vec{u}_r$. Par le théorème de Gauss sur un cylindre fermé de hauteur $h$ portant la charge $Q_{int} = \\lambda h$, on a $E(r) 2\\pi r h = \\frac{\\lambda h}{\\varepsilon_0} \\implies E(r) = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}$. La tension est $U = \\int_{R_1}^{R_2} E(r)\\,\\mathrm{d}r = \\frac{\\lambda}{2\\pi\\varepsilon_0}\\ln\\left(\\frac{R_2}{R_1}\\right)$, d\'où :',
          calculs: '\\vec{E}(r) = \\frac{U}{r \\ln(R_2/R_1)} \\vec{u}_r'
        },
        {
          titre: '2. Calcul du champ magnétique $\\vec{B}$',
          explication: 'Par les invariances par translation et rotation, $\\vec{B} = B(r)\\vec{u}_\\theta$. Par le théorème d\'Ampère sur un cercle de rayon $r \\in ]R_1, R_2[$, le courant enlacé est $I_{enl} = I$ :',
          calculs: 'B(r) \\cdot 2\\pi r = \\mu_0 I \\implies \\vec{B}(r) = \\frac{\\mu_0 I}{2\\pi r} \\vec{u}_\\theta'
        },
        {
          titre: '3. Vecteur de Poynting $\\vec{\\Pi}$',
          explication: 'Par définition du vecteur de Poynting $\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$. Puisque $\\vec{u}_r \\wedge \\vec{u}_\\theta = \\vec{u}_z$, le vecteur est purement axial dans le sens de propagation de l\'énergie :',
          calculs: '\\vec{\\Pi} = \\frac{1}{\\mu_0} \\left(\\frac{U}{r \\ln(R_2/R_1)} \\vec{u}_r\\right) \\wedge \\left(\\frac{\\mu_0 I}{2\\pi r} \\vec{u}_\\theta\\right) = \\frac{U I}{2\\pi \\ln(R_2/R_1) r^2} \\vec{u}_z'
        },
        {
          titre: '4. Bilan de flux & Puissance transportée',
          explication: 'Le flux de $\\vec{\\Pi}$ à travers une section droite $S$ délimitée par $r \\in [R_1, R_2]$ et $\\theta \\in [0, 2\\pi]$ s\'écrit :',
          calculs: '\\Phi = \\int_0^{2\\pi} \\mathrm{d}\\theta \\int_{R_1}^{R_2} \\Pi(r) r \\,\\mathrm{d}r = 2\\pi \\frac{U I}{2\\pi \\ln(R_2/R_1)} \\int_{R_1}^{R_2} \\frac{\\mathrm{d}r}{r} = U I'
        }
      ],
      conclusion: 'La puissance électrique $\\mathcal{P} = U I$ reçue par le récepteur n\'est pas transportée à l\'intérieur du métal des conducteurs, mais bien par le champ électromagnétique guidé dans l\'isolant diélectrique !',
      reflexeDuCorrecteur: 'Ce résultat physique est fondamental : l\'énergie se propage dans le vide ou le diélectrique, les conducteurs ne font que canaliser le champ électromagnétique.'
    }
  },
  {
    id: 'exo-dijkstra-complexite',
    title: 'Plus court chemin dans un graphe avec pénalité de changement & Implémentation efficace',
    matiere: 'Informatique',
    chapitreId: 'info-graphes-complexite',
    chapitreTitre: 'Algorithmique des Graphes & Complexité',
    filieres: ['MPI', 'MP', 'PSI'],
    difficulte: 3,
    origin: 'Épreuve d\'Informatique X-ENS MPI / Centrale MP',
    dureeEstimeeMin: 35,
    enonce: 'On considère un réseau de transport modélisé par un graphe orienté $G=(V, E)$ pondéré où chaque arête $e=(u, v)$ possède une longueur positive $d(e) > 0$ et un type de transport $c(e) \\in \\{1, \\dots, K\\}$. À chaque changement de ligne (lorsqu\'on passe d\'une arête $e_1$ de type $c_1$ à une arête $e_2$ de type $c_2 \\neq c_1$), une pénalité fixe de correspondance $P > 0$ est ajoutée au coût total.\n\n1. Expliquer pourquoi l\'algorithme de Dijkstra classique sur les sommets $V$ ne s\'applique pas directement.\n2. Proposer une transformation du graphe $G$ en un nouveau graphe $G\'=(V\', E\')$ sans pénalité de transition pour pouvoir appliquer Dijkstra.\n3. Exprimer $|V\'|$ et $|E\'|$ en fonction de $|V|, |E|$ et $K$.\n4. Écrire le pseudo-code de la résolution et donner la complexité temporelle optimale.',
    hints: [
      'L\'état dans lequel on se trouve dépend du sommet courant mais aussi du dernier type de transport emprunté !',
      'Définir chaque sommet de $V\'$ comme un couple $(u, c)$ où $u \\in V$ et $c$ est le mode de transport d\'arrivée.',
      'Une arête de $u$ à $v$ de mode $c$ correspondra à une transition depuis n\'importe quel $(u, c\')$ vers $(v, c)$ avec un poids $d(u, v)$ si $c\'=c$, et $d(u, v) + P$ si $c\' \\neq c$.'
    ],
    correction: {
      etapes: [
        {
          titre: '1. Échec de la sous-optimalité locale sur les sommets simples',
          explication: 'Dans Dijkstra classique, le principe d\'optimalité de Bellman stipule que tout sous-chemin d\'un plus court chemin est optimal. Ici, le coût futur d\'une transition dépend de l\'arête précédente choisie. Le coût n\'est pas markovien sur $V$.'
        },
        {
          titre: '2. Construction de l\'espace d\'états élargi',
          explication: 'On dédouble chaque sommet en fonction du mode de transport $c \\in \\{1, \\dots, K\\}$ emprunté pour y entrer :\n$$V\' = \\{(u, c) \\mid u \\in V, c \\in \\{1, \\dots, K\\}\\} \\cup \\{s_{depart}\\}$$\nPour chaque arête originale $(u, v)$ de longueur $d$ et de mode $c$ dans $G$ :\n- On crée dans $G\'$ les arêtes $((u, c), (v, c))$ de poids $d$ (continuation directe).\n- Pour tout $c\' \\neq c$, on crée les arêtes $((u, c\'), (v, c))$ de poids $d + P$ (correspondance payante).'
        },
        {
          titre: '3. Taille du graphe et complexité',
          explication: 'Nombre de sommets : $|V\'| \\le K |V| + 1$.\nNombre d\'arêtes : Pour chaque arête originale de type $c$, elle est accessible depuis les $K$ copies de $u$, donc $|E\'| \\le K |E|$.\nEn utilisant un tas binaire (min-heap), l\'algorithme de Dijkstra s\'exécute en :',
          calculs: '\\mathcal{O}(|E\'| \\log |V\'|) = \\mathcal{O}(K |E| \\log(K |V|))'
        }
      ],
      conclusion: 'La modélisation par extension de l\'espace d\'état est un grand classique d\'informatique théorique aux concours ENS et Polytechnique.',
      reflexeDuCorrecteur: 'Quand un problème a une mémoire d\'historique (dernière couleur, carburant restant, vitesse), toujours inclure cette mémoire dans la définition du sommet !'
    }
  }
];

const ALL_RAW_EXERCISES: ExerciseItem[] = [
  ...BASE_EXERCISES_DATA,
  ...ADDITIONAL_EXERCISES,
  ...MASSIVE_EXERCISES,
  ...CENTURY_EXERCISES_PART1,
  ...CENTURY_EXERCISES_PART2,
  ...QUINQUAGINTA_EXERCISES,
  ...ULTRA_EXERCISES,
  ...HUNDRED_EXERCISES,
];

// Exclusion rigoureuse des exercices à 1 étoile (difficulte: 1) jugés superflus en CPGE : seuls les niveaux 2 et 3 sont conservés
export const EXERCISES_DATA: ExerciseItem[] = ALL_RAW_EXERCISES.filter(e => e.difficulte >= 2);


const BASE_KHOLLE_SUBJECTS: KholleSubject[] = [
  {
    id: 'kholle-maths-spectre',
    titre: 'Khôlle de Mathématiques : Réduction & Théorème Spectral',
    matiere: 'Mathématiques',
    filiere: 'MP',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Énoncer et démontrer le lemme des noyaux pour deux polynômes premiers entre eux. En déduire la décomposition de l\'espace sous l\'hypothèse d\'un polynôme annulateur scindé à racines simples.',
      pointsCles: [
        'Énoncé exact avec l\'hypothèse $\\mathrm{pgcd}(P_1, P_2) = 1$',
        'Identité de Bézout $U P_1 + V P_2 = 1$',
        'Preuve de la somme $\\ker(P_1(u)) + \\ker(P_2(u)) = \\ker((P_1 P_2)(u))$',
        'Preuve de la somme directe (intersection réduite au vecteur nul)',
        'Extension par récurrence ou application aux projecteurs spectraux'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit $E$ un espace euclidien et $u \\in \\mathcal{L}(E)$ un endomorphisme antisymétrique (c\'est-à-dire $u^* = -u$).\n1. Quelles sont les valeurs propres réelles possibles de $u$ ?\n2. Montrer que $\\ker(u)$ et $\\mathrm{Im}(u)$ sont supplémentaires orthogonaux dans $E$.\n3. Montrer que le rang de $u$ est obligatoirement un entier pair.',
      indicationsKholleur: [
        {
          condition: 'Le candidat hésite sur les valeurs propres',
          aide: 'Calculez le produit scalaire $\\langle u(x), x \\rangle$ pour un vecteur propre associé à une valeur propre réelle $\\lambda$.'
        },
        {
          condition: 'Le candidat bloque sur la parité du rang',
          aide: 'Considérez la restriction de $u$ à $\\mathrm{Im}(u)$ et son polynôme caractéristique, ou regroupez les valeurs propres complexes deux à deux conjuguées.'
        }
      ],
      baremeExo: 12
    },
    criteresNotation: [
      { critere: 'Maîtrise du cours & Rigueur des quantificateurs', poids: '40%' },
      { critere: 'Clarté de la présentation au tableau', poids: '25%' },
      { critere: 'Prise d\'initiative face à l\'exercice de recherche', poids: '20%' },
      { critere: 'Réactivité aux indications du khôlleur', poids: '15%' }
    ]
  },
  {
    id: 'kholle-physique-induction',
    titre: 'Khôlle de Physique : Induction & Freinage Électromagnétique',
    matiere: 'Physique',
    filiere: 'PSI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Établir l\'équation locale de conservation de l\'énergie électromagnétique (Théorème de Poynting). Définir la densité volumique d\'énergie et le vecteur de Poynting, et interpréter physiquement le terme source.',
      pointsCles: [
        'Utilisation de l\'identité $\\mathrm{div}(\\vec{E} \\wedge \\vec{B}) = \\vec{B} \\cdot \\vec{\\mathrm{rot}}\\,\\vec{E} - \\vec{E} \\cdot \\vec{\\mathrm{rot}}\\,\\vec{B}$',
        'Injection des équations de Maxwell-Faraday et Maxwell-Ampère',
        'Expression rigoureuse de $u_{em} = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0}$ et $\\vec{\\Pi} = \\frac{\\vec{E}\\wedge\\vec{B}}{\\mu_0}$',
        'Interprétation du terme $-\\vec{j}\\cdot\\vec{E}$ comme puissance transmise à la matière'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Un cadre rectangulaire conducteur de masse $m$, de résistance $R$ et de largeur $a$ tombe verticalement sous l\'effet de la gravité. Il pénètre à l\'instant $t=0$ avec une vitesse $v_0$ dans une zone où règne un champ magnétique uniforme et stationnaire $\\vec{B} = B_0 \\vec{u}_z$ perpendiculaire au plan du cadre.\n1. Exprimer la force de Laplace subie par le cadre en fonction de sa vitesse $v(t)$.\n2. Établir l\'équation différentielle vérifiée par $v(t)$ et donner l\'expression de la vitesse limite $v_{lim}$.\n3. Faire un bilan d\'énergie complet entre $t=0$ et $t \\to +\\infty$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'oriente pas correctement le circuit',
          aide: 'Définissez clairement une normale $\\vec{n}$ pour calculer le flux magnétique $\\Phi = B_0 a x(t)$ et appliquez la loi de Faraday $e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}$.'
        },
        {
          condition: 'Le candidat oublie la loi de Lenz',
          aide: 'La force de Laplace doit-elle accélérer ou freiner le cadre ? Vérifiez le signe !'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous interrompt : "Pourquoi ne compte-t-on pas l\'auto-inductance $L$ du cadre dans l\'équation électrique $e = R i$ ?"',
        reponseAttendue: 'On se place dans le cadre des circuits sans auto-induction notable, c\'est-à-dire que le temps caractéristique inductif $\\tau_L = L/R$ est infiniment court devant le temps mécanique de chute $\\tau_m = \\frac{m R}{B_0^2 a^2}$.',
        piegeAEviter: 'Dire que l\'auto-inductance d\'un cadre est toujours nulle en physique (c\'est faux, c\'est une hypothèse de modélisation simplificatrice).'
      }
    ],
    criteresNotation: [
      { critere: 'Précision des lois physiques fondamentales (Maxwell, Faraday)', poids: '35%' },
      { critere: 'Analyse dimensionnelle systématique des grandeurs', poids: '25%' },
      { critere: 'Interprétation physique et sens critique sur les limites', poids: '25%' },
      { critere: 'Dynamisme et communication orale', poids: '15%' }
    ]
  },
  {
    id: 'kholle-maths-series-abel',
    titre: 'Khôlle de Mathématiques : Séries Entières & Théorème Radial d\'Abel',
    matiere: 'Mathématiques',
    filiere: 'MPI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Démontrer le lemme d\'Abel pour une série entière $\\sum a_n z^n$. Définir le rayon de convergence $R$. Énoncer le théorème de continuité et de dérivation terme à terme à l\'intérieur du disque ouvert.',
      pointsCles: [
        'Écriture de $|a_n z^n| = |a_n z_0^n| \\cdot |z/z_0|^n \\le M r^n$ avec $r < 1$',
        'Convergence absolue par comparaison à une série géométrique de raison $r < 1$',
        'Définition exacte du rayon $R = \\sup\\{r \\ge 0 \\mid (a_n r^n) \\text{ est bornée}\\}$',
        'Convergence normale sur tout compact $K \\subset D(0, R)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'Soit la série entière $S(x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} x^n$.\n1. Déterminer son rayon de convergence $R$.\n2. Pour $x \\in ]-1, 1[$, calculer explicitement $S\'(x)$ puis en déduire la somme $S(x)$.\n3. Démontrer que la série converge en $x = 1$ et appliquer le théorème de la convergence radiale d\'Abel pour retrouver la somme célèbre $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} = \\ln 2$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à sommer la série dérivée',
          aide: 'Remarquez que $S\'(x) = \\sum_{n=1}^\\infty (-1)^{n-1} x^{n-1} = \\sum_{k=0}^\\infty (-x)^k$. C\'est une série géométrique !'
        },
        {
          condition: 'Le candidat hésite sur le passage à la limite en 1',
          aide: 'Utilisez le critère spécial des séries alternées pour majorer le reste $|R_n(x)| \\le \\frac{x^{n+1}}{n+1} \\le \\frac{1}{n+1}$, ce qui donne la convergence uniforme sur $[0, 1]$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Peut-on dériver terme à terme la série en $x=1$ ?"',
        reponseAttendue: 'Non ! En $x=1$, la série des dérivées $\\sum (-1)^{n-1}$ est grossièrement divergente. Le théorème de dérivation terme à terme ne vaut que sur le disque OUVERT $]-R, R[$.',
        piegeAEviter: 'Prétendre que toutes les propriétés d\'analyse restent vraies au bord du disque sans vérifier la convergence uniforme des dérivées.'
      }
    ],
    criteresNotation: [
      { critere: 'Rigueur absolue sur le domaine de validité des théorèmes', poids: '40%' },
      { critere: 'Clarté des calculs de sommes géométriques', poids: '25%' },
      { critere: 'Majoration du reste d\'une série alternée', poids: '20%' },
      { critere: 'Précision du vocabulaire mathématique à l\'oral', poids: '15%' }
    ]
  },
  {
    id: 'kholle-physique-michelson',
    titre: 'Khôlle de Physique : Interféromètre de Michelson & Doublet du Sodium',
    matiere: 'Physique',
    filiere: 'PC',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Décrire le principe et le schéma de l\'interféromètre de Michelson réglé en lame d\'air. Donner l\'expression de la différence de marche $\\delta$ en un point du champ d\'observation à l\'infini en fonction de l\'épaisseur $e$ et de l\'angle d\'inclinaison $i$. Pourquoi observe-t-on des anneaux ?',
      pointsCles: [
        'Schéma soigné avec source étendue, séparatrice semi-réfléchissante, miroirs $M_1$ et $M_2$, compensatrice',
        'Formation de l\'image $M\'_2$ et modélisation par une lame d\'air d\'épaisseur $e$',
        'Expression $\\delta = 2 e \\cos i$ (avec déphasage éventuel de $\\pi$ selon les conventions)',
        'Lieu des points d\'égale différence de marche : $i = \\mathrm{cste}$, donc anneaux concentriques dans le plan focal d\'une lentille convergente'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On éclaire le Michelson réglé en lame d\'air par une lampe à vapeur de sodium émettant deux raies de longueurs d\'onde très proches $\\lambda_1 = 589,0$ nm et $\\lambda_2 = 589,6$ nm, de même intensité $I_0$.\n1. Exprimer l\'intensité résultante $I(e, i)$ en fonction de $\\lambda_m = \\frac{\\lambda_1+\\lambda_2}{2}$ et $\\Delta\\lambda = |\\lambda_2 - \\lambda_1|$.\n2. Définir le contraste des franges et montrer qu\'il s\'annule périodiquement lorsque l\'on fait varier l\'épaisseur $e$ de la lame d\'air.\n3. Calculer la distance de translation $\\Delta e$ du miroir mobile entre deux extinctions successives du contraste.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à combiner les deux ondes non cohérentes entre elles',
          aide: 'Les deux longueurs d\'onde sont émises par des transitions différentes : leurs intensités s\'ajoutent sans terme d\'interférence mutuel : $I_{tot} = I_{\\lambda_1} + I_{\\lambda_2}$.'
        },
        {
          condition: 'Le candidat bloque sur l\'expression trigonométrique',
          aide: 'Utilisez $\\cos(p) + \\cos(q) = 2 \\cos(\\frac{p+q}{2}) \\cos(\\frac{p-q}{2})$.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous demande : "Quel est le rôle exact de la lame compensatrice dans le bras 1 ?"',
        reponseAttendue: 'La séparatrice a une épaisseur non nulle et est traversée 3 fois par le rayon 2 et seulement 1 fois par le rayon 1. La compensatrice, identique et parallèle, compense cette dissymétrie de chemin optique et d\'effet dispersif.',
        piegeAEviter: 'Répondre que la compensatrice sert juste à diminuer l\'intensité ou à éviter les reflets parasites.'
      }
    ],
    criteresNotation: [
      { critere: 'Précision du schéma d\'optique ondulatoire au tableau', poids: '30%' },
      { critere: 'Rigueur sur la cohérence (sources indépendantes)', poids: '30%' },
      { critere: 'Calcul trigonométrique et formule de battement', poids: '25%' },
      { critere: 'Application numérique avec unité physique', poids: '15%' }
    ]
  },
  {
    id: 'kholle-chimie-pourbaix',
    titre: 'Khôlle de Chimie : Diagramme Potentiel-pH du Fer & Corrosion',
    matiere: 'Chimie',
    filiere: 'BCPST',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Expliquer le principe de construction d\'un diagramme de Pourbaix ($E\\text{-pH}$). Établir l\'équation de la frontière entre $Fe^{3+}$ et $Fe^{2+}$ et entre $Fe^{2+}$ et $Fe(s)$ en fonction de la concentration de tracé $C_t = 10^{-2}\\text{ mol/L}$.',
      pointsCles: [
        'Formule de Nernst à 298 K : $E = E^\\circ + \\frac{0,059}{n} \\log Q$',
        'Frontière redox sans échange de protons : droite horizontale indépendante du pH',
        'Frontière acido-basique ou de précipitation : droite verticale indépendante du potentiel',
        'Convention de tracé à l\'égalité des concentrations d\'espèces solubles'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On superpose au diagramme du fer le diagramme de l\'eau (couples $O_2/H_2O$ et $H^+/H_2$).\n1. Déterminer les domaines d\'immunité, de corrosion et de passivation du fer.\n2. Le fer métallique est-il thermodynamiquement stable dans une eau aérée à pH = 7 ? Écrire la réaction d\'oxydation spontanée.\n3. Expliquer le principe de la protection cathodique par anode sacrificielle (zinc ou magnésium) pour une coque de navire en acier.',
      indicationsKholleur: [
        {
          condition: 'Le candidat confond corrosion et passivation',
          aide: 'La corrosion produit des ions solubles ($Fe^{2+}$, $Fe^{3+}$) qui détruisent le métal, alors que la passivation forme un oxyde solide protecteur ($Fe_2O_3$).'
        },
        {
          condition: 'Le candidat hésite sur le choix de l\'anode sacrificielle',
          aide: 'L\'anode doit avoir un potentiel standard d\'oxydoréduction plus réducteur que le fer : $E^\\circ(Zn^{2+}/Zn) = -0,76$ V contre $E^\\circ(Fe^{2+}/Fe) = -0,44$ V.'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur demande : "Pourquoi la rouille ne protège-t-elle pas le fer de la corrosion, contrairement à l\'alumine sur l\'aluminium ?"',
        reponseAttendue: 'L\'oxyde de fer formé est poreux et friable (non adhérant), ce qui laisse l\'eau et le dioxygène diffuser jusqu\'au métal sous-jacent, tandis que l\'alumine $Al_2O_3$ forme une couche compacte, imperméable et auto-cicatrisante.',
        piegeAEviter: 'Prétendre que l\'aluminium ne s\'oxyde pas : il s\'oxyde immédiatement, mais sa couche passivante bloque la réaction.'
      }
    ],
    criteresNotation: [
      { critere: 'Maîtrise de la formule de Nernst et des conventions de tracé', poids: '35%' },
      { critere: 'Interprétation thermodynamique des domaines de Pourbaix', poids: '30%' },
      { critere: 'Écriture rigoureuse des équations d\'oxydoréduction équilibrées', poids: '20%' },
      { critere: 'Sens pratique des applications industrielles (protection cathodique)', poids: '15%' }
    ]
  },
  {
    id: 'kholle-info-abr-progdyn',
    titre: 'Khôlle d\'Informatique : Arbres Binaires de Recherche & Programmation Dynamique',
    matiere: 'Informatique',
    filiere: 'MPI',
    dureePrepMin: 10,
    dureePassageMin: 20,
    questionDeCours: {
      enonce: 'Définir la structure d\'un Arbre Binaire de Recherche (ABR). Écrire l\'algorithme de recherche et d\'insertion d\'une clé en Python ou pseudo-code. Analyser la complexité dans le pire des cas et dans le cas moyen.',
      pointsCles: [
        'Propriété d\'ABR : pour tout nœud $x$, toutes les clés du sous-arbre gauche sont $\\le x.cle$ et celles du sous-arbre droit sont $> x.cle$',
        'Algorithme de recherche récursif ou itératif de complexité $\\mathcal{O}(h)$ où $h$ est la hauteur',
        'Cas moyen (arbre équilibré) : $h = \\mathcal{O}(\\log n)$',
        'Pire des cas (arbre filiforme / dégénéré) : $h = \\mathcal{O}(n)$'
      ],
      baremeCours: 8
    },
    exerciceRecherche: {
      enonce: 'On considère le problème du cambrioleur (House Robber) : soit un tableau d\'entiers strictement positifs $T = [v_0, v_1, \\dots, v_{n-1}]$ où $v_i$ représente la valeur du butin dans la maison $i$. On ne peut pas cambrioler deux maisons consécutives sous peine de déclencher l\'alarme.\n1. Établir l\'équation de récurrence de Bellman pour $OPT(i)$, le butin maximal parmi les maisons $0$ à $i$.\n2. Expliquer pourquoi une implémentation récursive naïve est inefficace.\n3. Écrire une fonction Python itérative calculant le gain maximal en complexité temporelle $\\mathcal{O}(n)$ et spatiale $\\mathcal{O}(1)$.',
      indicationsKholleur: [
        {
          condition: 'Le candidat n\'arrive pas à poser l\'alternative binaire',
          aide: 'À la maison $i$, soit vous la cambriolez (et gagnez $v_i + OPT(i-2)$), soit vous ne la cambriolez pas (et gagnez $OPT(i-1)$).'
        },
        {
          condition: 'Le candidat utilise un tableau de taille n',
          aide: 'Pour calculer $OPT(i)$, vous n\'avez besoin que de $OPT(i-1)$ et $OPT(i-2)$. Deux variables suffisent !'
        }
      ],
      baremeExo: 12
    },
    questionsPiegesKholleur: [
      {
        question: 'Le khôlleur vous interrompt : "Quelle est la complexité dans le pire cas pour trier $n$ éléments en les insérant tous dans un ABR puis en faisant un parcours infixe ?"',
        reponseAttendue: 'Si la liste initiale est déjà triée, l\'ABR devient filiforme et l\'insertion coûte $1 + 2 + \\dots + n = \\mathcal{O}(n^2)$. Dans le cas moyen, c\'est $\\mathcal{O}(n \\log n)$.',
        piegeAEviter: 'Répondre directement $\\mathcal{O}(n \\log n)$ sans mentionner le pire cas dégénéré en $\\mathcal{O}(n^2)$.'
      }
    ],
    criteresNotation: [
      { critere: 'Rigueur de la définition récursive d\'ABR', poids: '30%' },
      { critere: 'Analyse asymptotique précise (pire cas vs moyen)', poids: '30%' },
      { critere: 'Optimalité spatiale de l\'algorithme dynamique', poids: '25%' },
      { critere: 'Clarté de la syntaxe et des noms de variables', poids: '15%' }
    ]
  }
];

export const KHOLLE_SUBJECTS: KholleSubject[] = [
  ...BASE_KHOLLE_SUBJECTS,
  ...ADDITIONAL_KHOLLE_SUBJECTS,
  ...MASSIVE_KHOLLES,
  ...FIFTY_KHOLLES_DATA,
];

export const ERREURS_CONCOURS: ErreurConcoursItem[] = [
  {
    id: 'err-derivee-equivalent',
    titre: 'Dériver ou composer des relations d\'équivalence ($u_n \\sim v_n$)',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    concoursImpact: 'Mines-Ponts, Centrale-Supélec, CCINP (Maths 1 & 2)',
    frequenceRapport: 'Systématique (> 45% des copies)',
    lErreur: '« On a $f(x) \\sim g(x)$ au voisinage de 0, donc $f\'(x) \\sim g\'(x)$ » ou « $e^{f(x)} \\sim e^{g(x)}$ »',
    pourquoiCestFaux: 'La dérivation et la composition ne conservent absolument pas les équivalents ! Contre-exemple immédiat pour la dérivée : soit $f(x) = x + x^2 \\sin(1/x^2)$ et $g(x) = x$. En 0, on a bien $f(x) \\sim x$, mais $f\'(x) = 1 + 2x\\sin(1/x^2) - \\frac{2}{x}\\cos(1/x^2)$ qui n\'a même pas de limite en 0 ! Pour l\'exponentielle : $x+1 \\sim x$ en $+\\infty$, or $\\frac{e^{x+1}}{e^x} = e \\neq 1$.',
    laCorrectionParfaite: 'Pour déterminer un équivalent de dérivée, il faut obligatoirement passer par un développement limité (Taylor-Young) ou dériver l\'expression explicite : $f(x) = g(x) + o(x^k) \\implies$ dérivation si $f$ est de classe $\\mathcal{C}^{k+1}$. Pour l\'exponentielle : $e^{f(x)} \\sim e^{g(x)} \\iff f(x) - g(x) \\to 0$.',
    citationRapportJury: '« Trop de candidats dérivent allègrement des équivalents ou écrivent $e^{u_n} \\sim e^{v_n}$ dès que $u_n \\sim v_n$. C\'est une faute lourde qui détruit toute la fin de l\'épreuve. » — Rapport Mines-Ponts MP'
  },
  {
    id: 'err-domination-lebesgue',
    titre: 'Oublier l\'hypothèse de domination intégrable sur TOUT le domaine',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    concoursImpact: 'Polytechnique-ENS, Mines-Ponts, Centrale-Supélec',
    frequenceRapport: 'Systématique (> 45% des copies)',
    lErreur: '« Pour tout $t$, $|f_n(t)| \\le \\frac{1}{t^2}$, or $\\frac{1}{t^2}$ tend vers 0, donc par convergence dominée $\\int_0^1 f_n(t)\\mathrm{d}t \\to 0$ » ou « majoration par une fonction qui dépend de $n$ ou de la variable $x$ »',
    pourquoiCestFaux: 'Dans le théorème de convergence dominée de Lebesgue, la fonction dominante $\\phi$ doit impérativement être : 1. INDÉPENDANTE de $n$, 2. INTÉGRABLE sur l\'intervalle d\'intégration $I$. Or $t \\mapsto \\frac{1}{t^2}$ n\'est pas intégrable sur $]0, 1]$ (divergence de Riemann à l\'origine) !',
    laCorrectionParfaite: 'Rédiger en 4 étapes numérotées : 1. Continuité par morceaux de chaque $f_n$ sur $I$. 2. Convergence simple de $(f_n)$ vers $f$ sur $I$. 3. Hypothèse de domination : $\\exists \\phi \\in L^1(I, \\mathbb{R}^+)$ indépendante de $n$ telle que $\\forall n, \\forall t \\in I, |f_n(t)| \\le \\phi(t)$. 4. Justifier l\'intégrabilité de $\\phi$ (Riemann, comparaison). 5. Conclure $\\lim \\int_I f_n = \\int_I f$.',
    citationRapportJury: '« L\'hypothèse de domination est souvent escamotée ou rédigée avec une fonction majorante dépendant de $n$, voire non intégrable sur l\'intervalle considéré. Le barème ne tolère aucune approximation sur ce théorème central. » — Rapport Centrale-Supélec MP/PC'
  },
  {
    id: 'err-inversible-diagonalisable',
    titre: 'Confondre inversibilité et diagonalisabilité d\'une matrice',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'MPSI'],
    concoursImpact: 'Tous concours (Écrits et Oraux)',
    frequenceRapport: 'Très fréquente (25-45% des copies)',
    lErreur: '« Comme $\\det(A) \\neq 0$, 0 n\'est pas valeur propre donc la matrice $A$ est diagonalisable » ou « Une matrice diagonalisable est inversible »',
    pourquoiCestFaux: 'La matrice nilpotente de Jordan $J = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ a pour déterminant $4 \\neq 0$ : elle est inversible, mais non diagonalisable car $\\dim E_2(J) = 1 < 2$. Inversement, la matrice nulle $\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$ est diagonale (donc diagonalisable), mais absolument pas inversible !',
    laCorrectionParfaite: 'L\'inversibilité ne dépend que de la nullité de 0 dans le spectre : $A \\text{ inversible} \\iff 0 \\notin \\mathrm{Sp}(A) \\iff \\det(A) \\neq 0$. La diagonalisabilité dépend de la décomposition de l\'espace en somme directe des sous-espaces propres : $\\sum \\dim E_\\lambda(A) = n$, indépendamment de la présence ou non de la valeur propre 0.',
    citationRapportJury: '« Il est désolant de lire en deuxième année qu\'une matrice inversible est diagonalisable. Ces deux notions sont orthogonales. » — Rapport CCINP MP'
  },
  {
    id: 'err-coulomb-variable',
    titre: 'Appliquer la loi de Coulomb ou Biot-Savart en régime variable rapide',
    matiere: 'Physique',
    filieres: ['PC', 'MP', 'PSI'],
    concoursImpact: 'Mines-Ponts, Centrale-Supélec, Concours X',
    frequenceRapport: 'Éliminatoire à l\'oral',
    lErreur: '« En régime dépendant du temps, $\\vec{E} = -\\vec{\\nabla} V$ » ou calculer $\\vec{E}$ par le théorème de Gauss comme en électrostatique pour une onde radioélectrique',
    pourquoiCestFaux: 'Dès que le champ magnétique varie dans le temps, la loi de Maxwell-Faraday impose $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} \\neq \\vec{0}$. Le champ électrique n\'est plus à circulation conservative : $\\vec{E} = -\\vec{\\nabla} V - \\frac{\\partial \\vec{A}}{\\partial t}$. Ignorer le potentiel vecteur $\\vec{A}$ viole la relativité et la propagation à vitesse finie $c$.',
    laCorrectionParfaite: 'Vérifier d\'abord si l\'Approximation des Régimes Quasi-Stationnaires (ARQS) est vérifiée : dimensions du circuit $L \\ll \\lambda = c / f$. Si oui, $\\frac{\\partial \\vec{B}}{\\partial t}$ ou $\\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$ peuvent être négligés selon les cas. Sinon, utiliser les équations de propagation de d\'Alembert en jauge de Lorenz pour $\\vec{A}$ et $V$.',
    citationRapportJury: '« À l\'oral de l\'X, invoquer le théorème de Gauss en plein régime de propagation d\'une onde guidée arrête immédiatement l\'interrogation. L\'étudiant doit savoir quel régime d\'approximation il utilise. » — Rapport de jury Polytechnique'
  },
  {
    id: 'err-vitesse-phase-groupe',
    titre: 'Confondre la vitesse de phase ($v_\\phi$) et la vitesse de groupe ($v_g$)',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    concoursImpact: 'Mines-Ponts Physique 1, Centrale Physique',
    frequenceRapport: 'Très fréquente (25-45% des copies)',
    lErreur: '« L\'énergie de l\'onde se propage à la vitesse de phase $v_\\phi = \\frac{\\omega}{k}$ » ou « Dans un plasma $v_\\phi > c$, donc l\'énergie voyage plus vite que la lumière »',
    pourquoiCestFaux: 'Dans un plasma ou un guide d\'ondes avec dispersion $\\omega^2 = \\omega_p^2 + c^2 k^2$, la vitesse de phase $v_\\phi = \\frac{\\omega}{k} = \\frac{c}{\\sqrt{1 - \\omega_p^2/\\omega^2}} > c$ ! Mais aucune information ni énergie ne peut dépasser $c$. C\'est la vitesse de groupe $v_g = \\frac{\\mathrm{d}\\omega}{\\mathrm{d}k} = c \\sqrt{1 - \\frac{\\omega_p^2}{\\omega^2}} < c$ qui représente la vitesse de l\'enveloppe et du transport d\'énergie.',
    laCorrectionParfaite: 'Toujours calculer la relation de dispersion $k(\\omega)$, puis différentier $\\mathrm{d}\\omega / \\mathrm{d}k$. Vérifier la relation de Rayleigh $v_g = v_\\phi + k \\frac{\\mathrm{d}v_\\phi}{\\mathrm{d}k}$. Pour un paquet d\'ondes, le signal et le paquet d\'énergie cheminent à la vitesse $v_g$.',
    citationRapportJury: '« Beaucoup de copies affirment sans sourciller qu\'une onde électromagnétique transporte des informations à une vitesse supérieure à la vitesse de la lumière sans s\'alarmer. Le sens physique est attendu. » — Rapport Mines-Ponts PC'
  },
  {
    id: 'err-lenz-signe-faraday',
    titre: 'Oublier le signe négatif dans la loi de Faraday ($e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}$)',
    matiere: 'Physique',
    filieres: ['PSI', 'PC', 'MP'],
    concoursImpact: 'Centrale PSI/MP, CCINP Physique',
    frequenceRapport: 'Systématique (> 45% des copies)',
    lErreur: '« La f.é.m induite est $e = \\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}$ » conduisant à une équation différentielle $m \\ddot{x} - k x = 0$ (accélération infinie sans apport extérieur)',
    pourquoiCestFaux: 'La loi de Lenz est une traduction directe du principe de modération et de la conservation de l\'énergie : les effets de l\'induction s\'opposent aux causes qui leur ont donné naissance. Un signe positif créerait un moteur perpétuel où la force de Laplace accélèrerait spontanément le circuit qui produit le courant inducteur !',
    laCorrectionParfaite: '1. Choisir et orienter sans ambiguïté une normale $\\vec{n}$ au circuit. 2. Calculer le flux $\\Phi = \\iint \\vec{B}\\cdot\\vec{n}\\,\\mathrm{d}S$. 3. Écrire rigoureusement $e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}$. 4. Vérifier par un raisonnement qualitatif de Lenz que le courant induit crée un champ induit opposé à la variation de flux.',
    citationRapportJury: '« L\'oubli du signe de Faraday entraîne une force motrice au lieu d\'une force de freinage. Tout candidat devrait être alerté par une vitesse qui diverge exponentiellement dans un système purement dissipatif. » — Rapport Centrale-Supélec PSI'
  },
  {
    id: 'err-cauchy-schwarz-egalite',
    titre: 'Utiliser l\'inégalité de Cauchy-Schwarz sans spécifier le cas d\'égalité',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    concoursImpact: 'Tous concours d\'écrits et oraux',
    frequenceRapport: 'Très fréquente (25-45% des copies)',
    lErreur: '« Par Cauchy-Schwarz, $(\\int f g)^2 \\le \\int f^2 \\int g^2$. Comme il y a égalité, $f = g$ »',
    pourquoiCestFaux: 'L\'égalité dans l\'inégalité de Cauchy-Schwarz $|\langle x, y \\rangle| = \|x\| \\|y\|$ implique que la famille $(x, y)$ est LIÉE (colinéaire), et NON PAS que $x = y$ ! Il existe un scalaire $\\lambda \\in \\mathbb{K}$ tel que $y = \\lambda x$ ou $x = \\vec{0}$. De plus, pour des fonctions, l\'égalité n\'assure la proportionnalité que sous hypothèse de continuité (sinon seulement presque partout).',
    laCorrectionParfaite: 'Écrire : « D\'après le cas d\'égalité de l\'inégalité de Cauchy-Schwarz dans un espace préhilbertien, il y a égalité si et seulement si les vecteurs sont colinéaires : $\\exists \\lambda \\in \\mathbb{R}, g = \\lambda f$ (en supposant $f \\neq 0$). Les fonctions étant continues sur $[a, b]$, l\'égalité ponctuelle est garantie. »',
    citationRapportJury: '« Trop de candidats concluent à $f=g$ au lieu d\'une relation de proportionnalité $f = \\lambda g$. Cette imprécision coûte l\'intégralité des points de la question. » — Rapport CCINP Maths'
  },
  {
    id: 'err-python-pop0-complexite',
    titre: 'Utiliser `list.pop(0)` pour une file en Python au lieu de `collections.deque`',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    concoursImpact: 'Épreuve d\'Informatique Commune & Spécifique MPI',
    frequenceRapport: 'Très fréquente (25-45% des copies)',
    lErreur: '« Pour implémenter le parcours en largeur (BFS), on utilise `file = []` et `sommet = file.pop(0)`. La complexité temporelle est $\\mathcal{O}(V + E)$ »',
    pourquoiCestFaux: 'En Python, les listes sont des tableaux dynamiques contigus en mémoire (`array`). Appeler `file.pop(0)` décale tous les $n-1$ éléments restants d\'une case vers la gauche, ce qui coûte un temps linéaire $\\mathcal{O}(n)$ par opération ! Dans un BFS sur $V$ sommets, la boucle effectue $V$ extractions, ce qui fait exploser la complexité globale à $\\mathcal{O}(V^2 + E)$ au lieu de $\\mathcal{O}(V + E)$.',
    laCorrectionParfaite: 'Toujours importer la structure deque en tête de copie : `from collections import deque`. Utiliser `file = deque([source])`, puis `file.append(v)` pour insérer en fin et `sommet = file.popleft()` pour extraire en tête en temps garanti $\\mathcal{O}(1)$.',
    citationRapportJury: '« Les correcteurs ont sanctionné l\'utilisation de `pop(0)` sur des listes Python dans les algorithmes de graphes. En CPGE, la maîtrise de la complexité des opérations de base du langage est impérative. » — Rapport Écrit Informatique Centrale/Mines'
  }
];

const BASE_QUESTIONS_INCONTOURNABLES: QuestionIncontournableItem[] = [
  {
    id: 'must-leibniz-integrale',
    titre: 'Dériver sous le signe intégrale à paramètre (Théorème de Leibniz)',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    tauxPresence: 'Présent dans ~75% des épreuves de Maths 1 / Analyse',
    chapitreAssocie: 'Intégrales dépendant d\'un paramètre',
    enonceType: 'Soit $F(x) = \\int_0^{+\\infty} \\frac{\\sin(t)}{t} e^{-x t}\\,\\mathrm{d}t$. Montrer que $F$ est de classe $\\mathcal{C}^1$ sur $]0, +\\infty[$ et calculer sa dérivée $F\'(x)$. En déduire la valeur de l\'intégrale de Dirichlet.',
    piegesImmediats: [
      'Dominer sur $]0, +\\infty[$ tout entier au lieu d\'un segment $[a, b] \\subset ]0, +\\infty[$ (l\'exponentielle n\'est pas dominable uniformément jusqu\'en 0).',
      'Oublier de vérifier l\'intégrabilité de la fonction $t \\mapsto f(x, t)$ pour chaque $x$ fixé.'
    ],
    redactionModele: [
      {
        etape: '1. Définition et régularité de l\'intégrande',
        justification: 'Pour tout $(x, t) \\in ]0, +\\infty[ \\times ]0, +\\infty[$, on pose $g(x, t) = \\frac{\\sin(t)}{t} e^{-x t}$. Pour tout $x > 0$, $t \\mapsto g(x, t)$ est continue sur $]0, +\\infty[$, prolongeable par continuité en 0 par 1, et dominée par $e^{-x t} \\in L^1([0, +\\infty[)$. Donc $F$ est bien définie sur $]0, +\\infty[$.'
      },
      {
        etape: '2. Dérivée partielle par rapport au paramètre',
        justification: 'Pour tout $t > 0$, l\'application $x \\mapsto g(x, t)$ est de classe $\\mathcal{C}^1$ sur $]0, +\\infty[$ et :',
        formule: '\\frac{\\partial g}{\\partial x}(x, t) = -\\sin(t) e^{-x t}'
      },
      {
        etape: '3. Hypothèse de domination sur tout segment $[a, b] \\subset ]0, +\\infty[$',
        justification: 'Soit $[a, b]$ un segment inclus dans $]0, +\\infty[$ avec $0 < a \\le b$. Pour tout $x \\in [a, b]$ et $t \\in ]0, +\\infty[$ :',
        formule: '\\left|\\frac{\\partial g}{\\partial x}(x, t)\\right| = |\\sin(t)| e^{-x t} \\le e^{-a t} = \\phi(t)'
      },
      {
        etape: '4. Intégrabilité du majorant & Conclusion',
        justification: 'Comme $a > 0$, la fonction $\\phi : t \\mapsto e^{-a t}$ est continue par morceaux, positive et intégrable sur $[0, +\\infty[$ (car $\\int_0^{+\\infty} e^{-a t}\\,\\mathrm{d}t = 1/a < +\\infty$). Par le théorème de Leibniz sur tout segment, $F$ est $\\mathcal{C}^1$ sur $]0, +\\infty[$ et :',
        formule: 'F\'(x) = \\int_0^{+\\infty} -\\sin(t) e^{-x t}\\,\\mathrm{d}t = -\\frac{1}{1 + x^2}'
      }
    ],
    baremeEtPointsCles: [
      'Vérification de l\'intégrabilité ponctuelle pour chaque $x$ (1 pt)',
      'Calcul correct de la dérivée partielle $\\frac{\\partial g}{\\partial x}$ (1 pt)',
      'Introduction indispensable du segment compact $[a, b] \\subset ]0, +\\infty[$ (2 pts - point éliminatoire si oublié)',
      'Domination par $\\phi(t) = e^{-a t}$ et justification de son intégrabilité (2 pts)',
      'Calcul de l\'intégrale par double intégration par parties ou passage aux complexes (2 pts)'
    ]
  },
  {
    id: 'must-poynting-oppm',
    titre: 'Calcul du vecteur de Poynting et puissance moyenne d\'une OPPM',
    matiere: 'Physique',
    filieres: ['MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~70% des épreuves d\'Électromagnétisme',
    chapitreAssocie: 'Électromagnétisme & Ondes dans le vide',
    enonceType: 'Une onde plane progressive monochromatique (OPPM) se propage dans le vide selon $+z$, avec un champ électrique $\\vec{E} = E_0 \\cos(\\omega t - k z) \\vec{u}_x$. Exprimer le champ magnétique $\\vec{B}$, le vecteur de Poynting instantané $\\vec{\\Pi}$, sa valeur moyenne temporelle $\\langle \\vec{\\Pi} \\rangle$, et la densité volumique moyenne d\'énergie électromagnétique $\\langle u_{em} \\rangle$.',
    piegesImmediats: [
      'Calculer la moyenne temporelle d\'un produit de deux grandeurs complexes en faisant le produit des grandeurs complexes (faute très grave : il faut prendre $\\frac{1}{2}\\mathrm{Re}(\\underline{\\vec{E}} \\wedge \\underline{\\vec{B}}^*)$).',
      'Confondre la moyenne de $\\cos^2(\\omega t)$ qui vaut $1/2$ et celle de $\\cos(\\omega t)$ qui vaut 0.'
    ],
    redactionModele: [
      {
        etape: '1. Relation de structure de l\'OPPM via Maxwell-Faraday',
        justification: 'D\'après l\'équation de Maxwell-Faraday $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$, pour une onde plane dans le vide avec vecteur d\'onde $\\vec{k} = k \\vec{u}_z$ et $k = \\omega / c$ :',
        formule: '\\vec{B} = \\frac{\\vec{k} \\wedge \\vec{E}}{\\omega} = \\frac{E_0}{c} \\cos(\\omega t - k z) \\vec{u}_y'
      },
      {
        etape: '2. Vecteur de Poynting instantané',
        justification: 'Par définition du vecteur de Poynting dans le vide $\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$ :',
        formule: '\\vec{\\Pi} = \\frac{1}{\\mu_0} (E_0 \\cos(\\omega t - k z) \\vec{u}_x) \\wedge \\left(\\frac{E_0}{c} \\cos(\\omega t - k z) \\vec{u}_y\\right) = \\frac{E_0^2}{\\mu_0 c} \\cos^2(\\omega t - k z) \\vec{u}_z'
      },
      {
        etape: '3. Moyenne temporelle',
        justification: 'La moyenne d\'une fonction sinusoïdale au carré sur une période $T = 2\\pi/\\omega$ vaut $\\langle \\cos^2 \\rangle = 1/2$. En utilisant $\\varepsilon_0 \\mu_0 c^2 = 1$ :',
        formule: '\\langle \\vec{\\Pi} \\rangle = \\frac{E_0^2}{2 \\mu_0 c} \\vec{u}_z = \\frac{1}{2} \\varepsilon_0 c E_0^2 \\vec{u}_z'
      },
      {
        etape: '4. Densité moyenne d\'énergie & Vitesse de propagation de l\'énergie',
        justification: 'La densité d\'énergie moyenne vaut $\\langle u_{em} \\rangle = \\frac{1}{4} \\varepsilon_0 E_0^2 + \\frac{1}{4 \\mu_0} B_0^2 = \\frac{1}{2} \\varepsilon_0 E_0^2$. On vérifie la relation fondamentale :',
        formule: '\\langle \\vec{\\Pi} \\rangle = \\langle u_{em} \\rangle \\cdot c \\vec{u}_z'
      }
    ],
    baremeEtPointsCles: [
      'Justification de la structure de l\'onde transverse électromagnétique TEM (1.5 pt)',
      'Orientation correcte du trièdre $(\\vec{E}, \\vec{B}, \\vec{k})$ (1.5 pt)',
      'Définition et calcul du vecteur de Poynting instantané (2 pts)',
      'Calcul rigoureux de la moyenne temporelle avec facteur 1/2 (2 pts)',
      'Identification de la vitesse de transport de l\'énergie $v_e = c$ (1 pt)'
    ]
  },
  {
    id: 'must-puissance-matrice',
    titre: 'Calcul de $A^n$ par polynôme annulateur (Division Euclidienne)',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'MPSI'],
    tauxPresence: 'Présent dans ~80% des épreuves d\'Algèbre linéaire',
    chapitreAssocie: 'Réduction des endomorphismes & Polynômes',
    enonceType: 'Soit $A \\in \\mathcal{M}_3(\\mathbb{R})$ admettant pour polynôme annulateur $P(X) = (X-1)^2 (X-2)$. Pour tout $n \\ge 2$, calculer le reste de la division euclidienne de $X^n$ par $P(X)$, et en déduire l\'expression explicite de $A^n$ en fonction de $I, A, A^2$.',
    piegesImmediats: [
      'Oublier que pour une racine multiple (ici 1 de multiplicité 2), il faut dériver la relation euclidienne pour obtenir la seconde équation.',
      'Remplacer $X$ par $A$ avant d\'avoir déterminé explicitement les coefficients scalaires du reste.'
    ],
    redactionModele: [
      {
        etape: '1. Écriture de la division euclidienne dans $\\mathbb{R}[X]$',
        justification: 'Soit $n \\ge 2$. Par division euclidienne de $X^n$ par le polynôme $P(X)$ de degré 3, il existe un unique couple $(Q_n, R_n) \\in \\mathbb{R}[X]^2$ tel que :',
        formule: 'X^n = P(X) Q_n(X) + R_n(X) \\quad \\text{avec } \\deg(R_n) < 3'
      },
      {
        etape: '2. Paramétrisation du reste',
        justification: 'Puisque $\\deg(R_n) \\le 2$, on pose $R_n(X) = a_n X^2 + b_n X + c_n$ où $a_n, b_n, c_n \\in \\mathbb{R}$.'
      },
      {
        etape: '3. Évaluation aux racines et dérivation',
        justification: 'En évaluant l\'égalité en $X=2$ (racine simple de $P$) : $2^n = 0 + 4a_n + 2b_n + c_n$.\nEn évaluant en $X=1$ (racine double de $P$) : $1^n = 1 = 0 + a_n + b_n + c_n$.\nEn dérivant l\'égalité : $n X^{n-1} = P\'(X) Q_n(X) + P(X) Q\'_n(X) + R\'_n(X)$.\nComme 1 est racine de $P$ et $P\'$, en évaluant en $X=1$ : $n = 0 + 2a_n + b_n$.'
      },
      {
        etape: '4. Résolution du système linéaire',
        justification: 'En soustrayant (1) et (2) : $2^n - 1 = 3a_n + b_n = a_n + (2a_n + b_n) = a_n + n$, d\'où $a_n = 2^n - n - 1$. Puis $b_n = n - 2a_n = -2^{n+1} + 3n + 2$, et $c_n = 1 - a_n - b_n = 2^n - 2n$.'
      },
      {
        etape: '5. Évaluation en $A$',
        justification: 'Puisque $P(A) = 0$, on obtient en substituant la matrice $A$ :',
        formule: 'A^n = R_n(A) = a_n A^2 + b_n A + c_n I_3'
      }
    ],
    baremeEtPointsCles: [
      'Positionnement de la division euclidienne et degré du reste (1 pt)',
      'Dérivation formelle de la relation pour exploiter la racine double (3 pts - point discriminant)',
      'Résolution rigoureuse du système linéaire des 3 scalaires (2 pts)',
      'Conclusion matricielle en invoquant $P(A) = 0$ (1 pt)'
    ]
  },
  {
    id: 'must-integrale-gauss',
    titre: 'Calcul de l\'intégrale de Gauss $\\int_{-\\infty}^{+\\infty} e^{-x^2}\\mathrm{d}x = \\sqrt{\\pi}$ par intégrale double',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'],
    tauxPresence: 'Présent dans ~85% des oraux et épreuves de probabilités',
    chapitreAssocie: 'Intégration & Intégrales multiples',
    enonceType: 'Soit $I = \\int_0^{+\\infty} e^{-x^2}\\,\\mathrm{d}x$. Justifier la convergence de $I$. En calculant l\'intégrale double $J(R) = \\iint_{D(0, R)} e^{-(x^2+y^2)}\\,\\mathrm{d}x\\mathrm{d}y$ en coordonnées polaires et en encadrant par des carrés $[-R, R]^2$, en déduire la valeur exacte de $I$.',
    piegesImmediats: [
      'Appliquer le changement de variables en coordonnées polaires sans multiplier par le jacobien $r$ (l\'élément d\'aire est $r\\,\\mathrm{d}r\\mathrm{d}\\theta$ et non $\\mathrm{d}r\\mathrm{d}\\theta$).',
      'Confondre l\'intégrale sur $\\mathbb{R}$ tout entier (qui vaut $\\sqrt{\\pi}$) et celle sur $\\mathbb{R}^+$ (qui vaut $\\sqrt{\\pi}/2$).'
    ],
    redactionModele: [
      {
        etape: '1. Convergence de l\'intégrale simple sur $\\mathbb{R}^+$',
        justification: 'L\'application $x \\mapsto e^{-x^2}$ est continue et positive sur $[0, +\\infty[$. En $+\\infty$, $x^2 e^{-x^2} \\to 0$ par croissances comparées, donc $e^{-x^2} = o(1/x^2)$. Par comparaison à l\'intégrale de Riemann convergente $\\int_1^{+\\infty} \\frac{\\mathrm{d}x}{x^2}$, l\'intégrale $I = \\int_0^{+\\infty} e^{-x^2}\\,\\mathrm{d}x$ converge.'
      },
      {
        etape: '2. Calcul sur le disque en coordonnées polaires',
        justification: 'Soit $D_R = \\{(x, y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le R^2\\}$. Par passage en coordonnées polaires $x = r\\cos\\theta$, $y = r\\sin\\theta$ avec jacobien $r$ :',
        formule: 'J(R) = \\iint_{D_R} e^{-(x^2+y^2)}\\,\\mathrm{d}x\\mathrm{d}y = \\int_0^{2\\pi} \\mathrm{d}\\theta \\int_0^R e^{-r^2} r\\,\\mathrm{d}r = 2\\pi \\left[ -\\frac{e^{-r^2}}{2} \\right]_0^R = \\pi(1 - e^{-R^2})'
      },
      {
        etape: '3. Encadrement géométrique par les carrés',
        justification: 'Soit $K_R = [-R, R]^2$. Comme $D_R \\subset K_R \\subset D_{R\\sqrt{2}}$ et que l\'intégrande est strictement positif, on a par positivité de l\'intégrale :\n$$J(R) \\le \\iint_{K_R} e^{-(x^2+y^2)}\\,\\mathrm{d}x\\mathrm{d}y \\le J(R\\sqrt{2})$$\nOr par théorème de Fubini sur le produit cartésien $K_R = [-R, R] \\times [-R, R]$ :\n$$\\iint_{K_R} e^{-(x^2+y^2)}\\,\\mathrm{d}x\\mathrm{d}y = \\left( \\int_{-R}^R e^{-x^2}\\,\\mathrm{d}x \\right) \\left( \\int_{-R}^R e^{-y^2}\\,\\mathrm{d}y \\right) = \\left( 2 \\int_0^R e^{-x^2}\\,\\mathrm{d}x \\right)^2 = 4 I(R)^2$$'
      },
      {
        etape: '4. Passage à la limite quand $R \\to +\\infty$',
        justification: 'Quand $R \\to +\\infty$, $J(R) \\to \\pi$ et $J(R\\sqrt{2}) \\to \\pi$. Par le théorème des gendarmes, $4 I^2 = \\pi$, d\'où (comme $I > 0$) :',
        formule: 'I = \\int_0^{+\\infty} e^{-x^2}\\,\\mathrm{d}x = \\frac{\\sqrt{\\pi}}{2} \\implies \\int_{-\\infty}^{+\\infty} e^{-x^2}\\,\\mathrm{d}x = \\sqrt{\\pi}'
      }
    ],
    baremeEtPointsCles: [
      'Justification de la convergence en $o(1/x^2)$ (1.5 pt)',
      'Jacobien $r$ du changement de variable polaire (2 pts - point éliminatoire si oublié)',
      'Encadrement rigoureux disque-carré-disque (2.5 pts)',
      'Conclusion et facteur 2 pour l\'intégrale sur $\\mathbb{R}$ entier (1 pt)'
    ]
  },
  {
    id: 'must-bilan-thermique-chaleur',
    titre: 'Bilan d\'énergie & Profil de température stationnaire avec Effet Joule',
    matiere: 'Physique',
    filieres: ['PC', 'PSI', 'MP'],
    tauxPresence: 'Présent dans ~75% des épreuves de Thermodynamique & Transferts',
    chapitreAssocie: 'Transferts Thermiques & Équation de la Chaleur',
    enonceType: 'Un conducteur cylindrique de rayon $R$ et de longueur infinie est parcouru par un courant continu uniforme de densité volumique $j$. Il est le siège d\'un dégagement de chaleur par effet Joule volumique $p = j^2 / \\gamma$ (où $\\gamma$ est la conductivité électrique). La surface externe en $r=R$ est maintenue à la température $T_s$. Déterminer le profil stationnaire de température $T(r)$ à l\'intérieur du conducteur.',
    piegesImmediats: [
      'Oublier d\'utiliser l\'expression du laplacien en coordonnées cylindriques : $\\Delta T = \\frac{1}{r}\\frac{\\mathrm{d}}{\\mathrm{d}r}\\left(r \\frac{\\mathrm{d}T}{\\mathrm{d}r}\\right)$ (et non $\\frac{\\mathrm{d}^2 T}{\\mathrm{d}r^2}$).',
      'Oublier la condition de régularité physique à l\'origine : $\\frac{\\mathrm{d}T}{\\mathrm{d}r}(0) = 0$ pour éviter la divergence logarithmique en $r=0$.'
    ],
    redactionModele: [
      {
        etape: '1. Équation de diffusion thermique stationnaire',
        justification: 'En régime stationnaire ($\\partial T / \\partial t = 0$), l\'équation de la chaleur avec terme source volumique s\'écrit $\\lambda \\Delta T + p = 0$. Par symétrie de révolution axiale et invariance par translation selon $z$, $T$ ne dépend que du rayon $r$ :',
        formule: '\\frac{1}{r} \\frac{\\mathrm{d}}{\\mathrm{d}r} \\left( r \\frac{\\mathrm{d}T}{\\mathrm{d}r} \\right) = -\\frac{p}{\\lambda}'
      },
      {
        etape: '2. Première intégration & Condition de symétrie axiale',
        justification: 'En multipliant par $r$ et en intégrant : $r \\frac{\\mathrm{d}T}{\\mathrm{d}r} = -\\frac{p}{2\\lambda} r^2 + C_1$. Par raison de symétrie, le flux thermique au centre $r=0$ doit être nul (le vecteur densité de flux ne peut pointer dans aucune direction privilégiée). D\'où nécessairement $C_1 = 0$, soit :',
        formule: '\\frac{\\mathrm{d}T}{\\mathrm{d}r} = -\\frac{p}{2\\lambda} r'
      },
      {
        etape: '3. Deuxième intégration & Condition aux limites',
        justification: 'En intégrant une seconde fois : $T(r) = -\\frac{p}{4\\lambda} r^2 + C_2$. Comme en $r=R$, $T(R) = T_s$, on trouve $C_2 = T_s + \\frac{p R^2}{4\\lambda}$. Le profil de température parabolique s\'écrit donc :',
        formule: 'T(r) = T_s + \\frac{p}{4\\lambda} (R^2 - r^2)'
      },
      {
        etape: '4. Température maximale au centre',
        justification: 'Le maximum de température est atteint au centre du câble en $r=0$ :',
        formule: 'T_{max} = T(0) = T_s + \\frac{p R^2}{4\\lambda} = T_s + \\frac{j^2 R^2}{4\\lambda \\gamma}'
      }
    ],
    baremeEtPointsCles: [
      'Laplacien cylindrique exact avec facteur $1/r$ (2 pts)',
      'Justification physique de l\'annulation de la constante d\'intégration $C_1$ à l\'origine (2 pts - point clé)',
      'Calcul correct de la constante $C_2$ via la condition aux limites en $r=R$ (1.5 pt)',
      'Allure parabolique décroissante du profil de température (1.5 pt)'
    ]
  },
  {
    id: 'must-constante-nernst-k0',
    titre: 'Calcul de la constante d\'équilibre $K^\\circ$ à partir des potentiels standard $E^\\circ$',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'BCPST', 'PSI'],
    tauxPresence: 'Présent dans ~90% des épreuves de Chimie des concours',
    chapitreAssocie: 'Oxydoréduction & Thermodynamique Chimique',
    enonceType: 'On considère la réaction d\'oxydoréduction entre le fer solide et les ions cérium(IV) : $\\mathrm{Fe}(s) + 2 \\mathrm{Ce}^{4+}(aq) \\rightleftharpoons \\mathrm{Fe}^{2+}(aq) + 2 \\mathrm{Ce}^{3+}(aq)$. Données à 298 K : $E^\\circ(\\mathrm{Ce}^{4+}/\\mathrm{Ce}^{3+}) = 1{,}72\\,\\mathrm{V}$ et $E^\\circ(\\mathrm{Fe}^{2+}/\\mathrm{Fe}) = -0{,}44\\,\\mathrm{V}$. Exprimer puis calculer la constante thermodynamique d\'équilibre $K^\\circ$. La réaction est-elle quantitative ?',
    piegesImmediats: [
      'Multiplier le potentiel standard $E^\\circ$ par le coefficient stœchiométrique 2 (faute gravissime : le potentiel d\'oxydoréduction est une grandeur INTENSIVE indépendante de la stœchiométrie).',
      'Confondre le quotient de réaction $Q_r$ hors équilibre et la constante d\'équilibre $K^\\circ$ lorsque les potentiels sont égaux.'
    ],
    redactionModele: [
      {
        etape: '1. Écriture des formules de Nernst des deux couples',
        justification: 'À l\'équilibre thermodynamique à $T = 298\\,\\mathrm{K}$, l\'unicité du potentiel de la solution impose $E_{eq}(\\mathrm{Ce}^{4+}/\\mathrm{Ce}^{3+}) = E_{eq}(\\mathrm{Fe}^{2+}/\\mathrm{Fe})$. D\'après la formule de Nernst :\n$$E_{eq} = E^\\circ_1 + 0{,}059 \\log\\frac{[\\mathrm{Ce}^{4+}]_{eq}}{[\\mathrm{Ce}^{3+}]_{eq}} = E^\\circ_2 + \\frac{0{,}059}{2} \\log[\\mathrm{Fe}^{2+}]_{eq}$$'
      },
      {
        etape: '2. Égalité des potentiels et quotient d\'équilibre',
        justification: 'Multiplions la première équation par 2 pour mettre les logarithmes au même coefficient $\\frac{0{,}059}{2}$ :\n$$2 E_{eq} = 2 E^\\circ_1 + 0{,}059 \\log\\frac{[\\mathrm{Ce}^{4+}]_{eq}^2}{[\\mathrm{Ce}^{3+}]_{eq}^2}$$\nEn égalant les deux expressions avec le nombre d\'électrons échangés $n = 2$ :\n$$E^\\circ_1 - E^\\circ_2 = \\frac{0{,}059}{2} \\log\\left( \\frac{[\\mathrm{Fe}^{2+}]_{eq} [\\mathrm{Ce}^{3+}]_{eq}^2}{[\\mathrm{Ce}^{4+}]_{eq}^2} \\right) = \\frac{0{,}059}{2} \\log(K^\\circ)$$'
      },
      {
        etape: '3. Expression de $K^\\circ$ et application numérique',
        justification: 'On obtient la relation fondamentale universelle reliant $\\Delta E^\\circ$ et $K^\\circ$ :\n$$\\log(K^\\circ) = \\frac{n (E^\\circ_1 - E^\\circ_2)}{0{,}059}$$\nAvec $n=2$, $E^\\circ_1 = 1{,}72\\,\\mathrm{V}$ et $E^\\circ_2 = -0{,}44\\,\\mathrm{V}$ :\n$$\\log(K^\\circ) = \\frac{2 \\times (1{,}72 - (-0{,}44))}{0{,}059} = \\frac{2 \\times 2{,}16}{0{,}059} \\approx 73{,}2$$',
        formule: 'K^\\circ = 10^{73{,}2} \\approx 1{,}6 \\times 10^{73}'
      }
    ],
    baremeEtPointsCles: [
      'Principe d\'unicité du potentiel de Nernst à l\'équilibre (2 pts)',
      'Non-multiplication de $E^\\circ$ par les coefficients stœchiométriques (2 pts - point éliminatoire si violé)',
      'Identification correcte du nombre d\'électrons échangés $n=2$ (1.5 pt)',
      'Conclusion sur le caractère ultratotal / quantitatif car $K^\\circ \\gg 10^4$ (1.5 pt)'
    ]
  },
  {
    id: 'must-dijkstra-complexite',
    titre: 'Algorithme de Dijkstra & Preuve de Correction par Invariant de Boucle',
    matiere: 'Informatique',
    filieres: ['MPI', 'MP', 'PC', 'PSI'],
    tauxPresence: 'Présent dans ~80% des épreuves d\'Informatique de Tronc Commun et Option',
    chapitreAssocie: 'Graphes & Algorithmes de Plus Court Chemin',
    enonceType: 'Soit $G = (V, E)$ un graphe orienté pondéré par des poids strictement positifs $w(u, v) > 0$. Énoncer l\'algorithme de Dijkstra calculant la distance minimale d\'un sommet source $s$ à tous les autres sommets. Prouver sa correction à l\'aide d\'un invariant de boucle et donner sa complexité avec une file de priorité (tas binaire).',
    piegesImmediats: [
      'Appliquer Dijkstra en présence de poids négatifs (l\'algorithme échoue, il faut obligatoirement l\'algorithme de Bellman-Ford).',
      'Confondre la complexité avec tableau naïf $\\mathcal{O}(|V|^2)$ et avec tas binaire $\\mathcal{O}((|V| + |E|)\\log |V|)$.'
    ],
    redactionModele: [
      {
        etape: '1. Invariant de boucle fondamental',
        justification: 'On partitionne les sommets en deux ensembles : $S$ (les sommets dont la distance finale optimale $d[u] = \\delta(s, u)$ est définitivement fixée) et $Q = V \\setminus S$ (les sommets restants). L\'invariant de boucle est : « Pour tout sommet $u \\in S$, la valeur $d[u]$ est égale à la distance minimale exacte $\\delta(s, u)$ depuis la source $s$. »'
      },
      {
        etape: '2. Preuve de l\'invariant (Glouton)',
        justification: 'À chaque étape, on extrait le sommet $u \\in Q$ minimisant $d[u]$. Supposons par l\'absurde qu\'il existe un chemin plus court de $s$ à $u$. Soit $(x, y)$ la première arête de ce chemin quittant $S$ ($x \\in S, y \\in Q$). Comme tous les poids sont strictement positifs, $\\delta(s, u) \\ge \\delta(s, y) = d[y] \\ge d[u]$ (par choix glouton minimal de $u$). D\'où $d[u] = \\delta(s, u)$, ce qui prouve l\'optimalité de l\'étape gloutonne.'
      },
      {
        etape: '3. Analyse de complexité avec un tas binaire (Heap)',
        justification: '- Initialisation : $\\mathcal{O}(|V|)$ pour initialiser les distances à $+\\infty$.\n- Extractions du minimum (`extract_min`) : $|V|$ extractions dans un tas de taille au plus $|V|$, soit $|V| \\log |V|$.\n- Mises à jour des distances (`decrease_key`) : Chaque arête est relâchée au plus une fois, soit $|E|$ opérations de coût $\\log |V|$.\nLa complexité totale temporelle est donc :',
        formule: 'T(|V|, |E|) = \\mathcal{O}\\big((|V| + |E|) \\log |V|\\big)'
      }
    ],
    baremeEtPointsCles: [
      'Condition impérative de positivité des poids $w(u, v) > 0$ (1.5 pt)',
      'Définition claire de l\'invariant avec la partition $S$ et $V \\setminus S$ (2.5 pts)',
      'Détail des opérations de file de priorité (2 pts)',
      'Complexité asymptotique $\\mathcal{O}((V+E)\\log V)$ (1 pt)'
    ]
  },
  {
    id: 'must-ondes-plasma',
    titre: 'Dispersion d\'une Onde Électromagnétique dans un Plasma & Fréquence de Coupure $\\omega_p$',
    matiere: 'Physique',
    filieres: ['PC', 'MP', 'PSI'],
    tauxPresence: 'Présent dans ~70% des épreuves d\'Électromagnétisme Ondulatoire',
    chapitreAssocie: 'Ondes Électromagnétiques dans les Milieux Dispersifs',
    enonceType: 'On modélise l\'ionosphère par un gaz d\'électrons libres de masse $m$, de charge $-e$ et de densité volumique $n_e$, baignant dans un fond d\'ions immobiles. Établir l\'équation de dispersion de Klein-Gordon reliant le vecteur d\'onde $k$ à la pulsation $\\omega$. Étudier les régimes de propagation ($\\omega > \\omega_p$) et d\'onde évanescente ($\\omega < \\omega_p$). En déduire l\'explication de la réflexion des ondes radio décamétriques par l\'ionosphère.',
    piegesImmediats: [
      'Oublier le signe négatif de la charge de l\'électron $q = -e$ dans la relation fondamentale de la dynamique.',
      'Croire qu\'une onde évanescente (amplitude exponentiellement décroissante $e^{-z/\\delta}$) dissipe de l\'énergie par effet Joule : la moyenne temporelle du vecteur de Poynting est rigoureusement nulle !'
    ],
    redactionModele: [
      {
        etape: '1. RFD sur un électron et conductivité complexe',
        justification: 'En négligeant la force magnétique devant la force électrique et les collisions : $m \\frac{\\mathrm{d}\\vec{v}}{\\mathrm{d}t} = -e \\vec{E}$. En régime sinusoïdal de pulsation $\\omega$ :\n$$\\underline{\\vec{v}} = \\frac{e}{j m \\omega} \\underline{\\vec{E}}$$\nLa densité de courant de conduction vaut $\\underline{\\vec{j}} = -n_e e \\underline{\\vec{v}} = -\\frac{n_e e^2}{j m \\omega} \\underline{\\vec{E}} = j \\frac{n_e e^2}{m \\omega} \\underline{\\vec{E}}$.'
      },
      {
        etape: '2. Équation de Maxwell-Ampère et pulsation plasma',
        justification: 'Dans le plasma globalement neutre ($\\rho = 0, \\mathrm{div}\\,\\vec{E} = 0$), Maxwell-Ampère donne $\\vec{\\mathrm{rot}}\\,\\vec{B} = \\mu_0 \\vec{j} + \\frac{1}{c^2} \\frac{\\partial \\vec{E}}{\\partial t}$. Avec Maxwell-Faraday $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$ et $\\Delta \\vec{E} = -k^2 \\vec{E}$ :\n$$-k^2 \\underline{\\vec{E}} = -\\frac{\\omega^2}{c^2} \\underline{\\vec{E}} + j \\mu_0 \\omega \\underline{\\vec{j}} = -\\frac{\\omega^2}{c^2} \\underline{\\vec{E}} - \\mu_0 \\frac{n_e e^2}{m} \\underline{\\vec{E}}$$\nEn introduisant la pulsation plasma $\\omega_p = \\sqrt{\\frac{n_e e^2}{m \\varepsilon_0}}$ et avec $c^2 = \\frac{1}{\\varepsilon_0 \\mu_0}$, on obtient la relation de dispersion universelle :',
        formule: 'k^2 c^2 = \\omega^2 - \\omega_p^2'
      },
      {
        etape: '3. Analyse des deux régimes physiques',
        justification: '- Si $\\omega > \\omega_p$ : $k = \\frac{\\sqrt{\\omega^2 - \\omega_p^2}}{c} \\in \\mathbb{R}$. L\'onde se propage sans atténuation avec une vitesse de phase supraluminique $v_\\varphi = \\frac{\\omega}{k} = \\frac{c}{\\sqrt{1 - \\omega_p^2/\\omega^2}} > c$ et une vitesse de groupe sous-luminique $v_g = \\frac{\\mathrm{d}\\omega}{\\mathrm{d}k} = c \\sqrt{1 - \\frac{\\omega_p^2}{\\omega^2}} < c$, vérifiant $v_\\varphi v_g = c^2$.\n- Si $\\omega < \\omega_p$ : $k = -j \\frac{\\sqrt{\\omega_p^2 - \\omega^2}}{c} = -j / \\delta$. Le champ décroît exponentiellement en $e^{-z/\\delta}$ : l\'onde est purement évanescente et subit une réflexion totale sans absorption.'
      }
    ],
    baremeEtPointsCles: [
      'Établissement du courant de plasma via la RFD (2 pts)',
      'Définition exacte de la pulsation de coupure $\\omega_p$ (2 pts)',
      'Démonstration de la relation de dispersion de Klein-Gordon (2 pts)',
      'Calcul et interprétation des vitesses de phase et de groupe $v_\\varphi v_g = c^2$ (2 pts)'
    ]
  },
  {
    id: 'must-diagonalisation-simultanee',
    titre: 'Co-diagonalisation (Diagonalisation Simultanée) d\'Endomorphismes qui Commutent',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI'],
    tauxPresence: 'Présent dans ~70% des oraux X-Mines et épreuves d\'Algèbre Centrale',
    chapitreAssocie: 'Réduction des endomorphismes',
    enonceType: 'Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension finie $n$. Soient $u, v \\in \\mathcal{L}(E)$ deux endomorphismes diagonalisables vérifiant la condition de commutation $u \\circ v = v \\circ u$. Montrer qu\'il existe une base commune de $E$ diagonalisant simultanément $u$ et $v$.',
    piegesImmediats: [
      'Penser qu\'il suffit de choisir des vecteurs propres quelconques pour chaque endomorphisme (si les valeurs propres de $u$ sont multiples, les sous-espaces propres ne sont pas des droites et il faut diagonaliser la restriction de $v$).',
      'Oublier de vérifier la stabilité des sous-espaces propres par un endomorphisme commutant.'
    ],
    redactionModele: [
      {
        etape: '1. Stabilité des sous-espaces propres de $u$ par $v$',
        justification: 'Soit $\\lambda \\in \\mathrm{Sp}(u)$ et $E_\\lambda(u) = \\ker(u - \\lambda \\mathrm{id}_E)$ le sous-espace propre associé. Pour tout $x \\in E_\\lambda(u)$ :\n$$u(v(x)) = (u \\circ v)(x) = (v \\circ u)(x) = v(u(x)) = v(\\lambda x) = \\lambda v(x)$$\nDonc $v(x) \\in E_\\lambda(u)$. Le sous-espace $E_\\lambda(u)$ est donc stable par $v$.'
      },
      {
        etape: '2. Diagonalisabilité de l\'endomorphisme induit $v_{|E_\\lambda(u)}$',
        justification: 'Puisque $v$ est diagonalisable sur $E$, il admet un polynôme annulateur $P$ scindé à racines simples (par exemple son polynôme minimal $\\mu_v$). La restriction $v_\\lambda = v_{|E_\\lambda(u)}$ annule également $P$ car $\\forall x \\in E_\\lambda(u), P(v_\\lambda)(x) = P(v)(x) = 0$. Comme $v_\\lambda$ annule un polynôme scindé à racines simples, $v_\\lambda$ est diagonalisable sur $E_\\lambda(u)$.'
      },
      {
        etape: '3. Construction de la base commune',
        justification: 'Pour chaque $\\lambda \\in \\mathrm{Sp}(u)$, il existe une base $\\mathcal{B}_\\lambda$ de $E_\\lambda(u)$ formée de vecteurs propres de $v$. Ces vecteurs sont par définition également vecteurs propres de $u$ (associés à $\\lambda$). Comme $u$ est diagonalisable, $E = \\bigoplus_{\\lambda \\in \\mathrm{Sp}(u)} E_\\lambda(u)$. La concaténation $\\mathcal{B} = \\bigcup \\mathcal{B}_\\lambda$ forme une base de $E$ constituée de vecteurs propres communs à $u$ et $v$.'
      }
    ],
    baremeEtPointsCles: [
      'Preuve rigoureuse de la stabilité des sous-espaces propres (2.5 pts)',
      'Justification de la diagonalisabilité de la restriction par polynôme annulateur scindé à racines simples (3 pts - point déterminant)',
      'Concaténation des bases et conclusion par somme directe (1.5 pt)'
    ]
  },
  {
    id: 'must-ellingham-inversion',
    titre: 'Température d\'Inversion d\'Ellingham & Pyrométallurgie de Réduction des Oxydes',
    matiere: 'Chimie',
    filieres: ['PC', 'PSI', 'PCSI'],
    tauxPresence: 'Présent dans ~75% des épreuves de Chimie Minérale et Métallurgie',
    chapitreAssocie: 'Diagrammes d\'Ellingham & Métallurgie',
    enonceType: 'On considère l\'oxydation du carbone et du zinc par le dioxygène gazeux rapportée à 1 mole de $O_2$ :\n(1) $2 \\mathrm{C}(s) + \\mathrm{O}_2(g) = 2 \\mathrm{CO}(g)$ : $\\Delta_r G^\\circ_1(T) = -221 - 0{,}179 T$ (en $\\mathrm{kJ/mol}$)\n(2) $2 \\mathrm{Zn}(s) + \\mathrm{O}_2(g) = 2 \\mathrm{ZnO}(s)$ : $\\Delta_r G^\\circ_2(T) = -696 + 0{,}200 T$ (en $\\mathrm{kJ/mol}$ pour $T < 1180\\,\\mathrm{K}$)\nDéterminer la température d\'inversion $T_i$ au-delà de laquelle le carbone réduit spontanément l\'oxyde de zinc $\\mathrm{ZnO}$ à pression standard.',
    piegesImmediats: [
      'Oublier de vérifier le signe de la pente d\'Ellingham $\\frac{\\mathrm{d}\\Delta_r G^\\circ}{\\mathrm{d}T} = -\\Delta_r S^\\circ$ (la réaction de formation de $\\mathrm{CO}$ a une pente négative exceptionnelle car $\\Delta \\nu_g = +1 > 0$).',
      'Confondre réaction spontanée et vitesse de réaction (contrôle thermodynamique vs cinétique).'
    ],
    redactionModele: [
      {
        etape: '1. Règle du réducteur le plus bas sur le diagramme',
        justification: 'Sur un diagramme d\'Ellingham, l\'espèce réductrice située au-dessous réduit spontanément à l\'état standard l\'oxyde situé au-dessus. La réaction de réduction du zinc par le carbone s\'écrit :\n$$2 \\mathrm{ZnO}(s) + 2 \\mathrm{C}(s) = 2 \\mathrm{Zn}(s) + 2 \\mathrm{CO}(g)$$\nSon enthalpie libre standard de réaction est la différence :\n$$\\Delta_r G^\\circ_{red}(T) = \\Delta_r G^\\circ_1(T) - \\Delta_r G^\\circ_2(T)$$'
      },
      {
        etape: '2. Calcul de la température d\'inversion',
        justification: 'La réaction devient thermodynamiquement spontanée à l\'état standard dès que $\\Delta_r G^\\circ_{red}(T) \\le 0$, c\'est-à-dire $\\Delta_r G^\\circ_1(T) \\le \\Delta_r G^\\circ_2(T)$ :\n$$-221 - 0{,}179 T \\le -696 + 0{,}200 T \\iff 475 \\le 0{,}379 T$$\nSoit :',
        formule: 'T_i = \\frac{475}{0{,}379} \\approx 1253\\,\\mathrm{K} \\quad (980^\\circ\\mathrm{C})'
      },
      {
        etape: '3. Changement d\'état physique du zinc',
        justification: 'Comme le zinc bout à $T_{eb} = 1180\\,\\mathrm{K} < 1253\\,\\mathrm{K}$, le zinc est produit à l\'état vapeur gazeux $\\mathrm{Zn}(g)$, ce qui augmente encore la création d\'entropie et favorise la réaction à haute température dans le procédé pyrométallurgique.'
      }
    ],
    baremeEtPointsCles: [
      'Justification de la pente négative par $\\Delta_r S^\\circ = -\\mathrm{d}\\Delta_r G^\\circ/\\mathrm{d}T$ (2 pts)',
      'Combinaison linéaire correcte des équations d\'Ellingham (2 pts)',
      'Calcul exact de la température d\'inversion $T_i$ (2 pts)',
      'Remarque sur l\'état physique gazeux du métal produit (1 pt)'
    ]
  },
  {
    id: 'must-si-fermeture-loi-es',
    titre: 'Loi Entrée-Sortie Cinématique par Fermeture Géométrique Vectorielle',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP', 'MPSI'],
    tauxPresence: 'Présent dans ~85% des épreuves de Sciences de l\'Ingénieur',
    chapitreAssocie: 'Cinématique analytique des mécanismes',
    enonceType: 'Soit un mécanisme plan constitué d\'une chaîne fermée de solides indéformables. Énoncer la méthode systématique en 4 étapes permettant de déterminer la loi entrée-sortie positionnelle et de vitesse $v_s = f(q_e) \\dot{q}_e$ sans inconnue hyperstatique.',
    piegesImmediats: [
      'Dériver les vecteurs unitaires mobiles sans appliquer la formule de dérivation vectorielle par rapport au repère galiléen $\\left[\\frac{\\mathrm{d}\\vec{u}}{\\mathrm{d}t}\\right]_{R_0} = \\vec{\\Omega} \\wedge \\vec{u}$.',
      'Oublier de projeter la fermeture sur la direction orthogonale pour éliminer les paramètres géométriques intermédiaires passifs.'
    ],
    redactionModele: [
      {
        etape: '1. Écriture de la relation de Chasles vectorielle',
        justification: 'Identifier le contour fermé orienté reliant les centres des liaisons mécaniques $(O_0, O_1, \\dots, O_n, O_0)$ :\n$$\\sum_{k=0}^{n-1} \\vec{O_k O_{k+1}} + \\vec{O_n O_0} = \\vec{0}$$'
      },
      {
        etape: '2. Paramétrage des repères locaux et projection scalaire',
        justification: 'Associer à chaque solide son repère orthonormé direct. Exprimer chaque vecteur élémentaire dans son repère local, puis projeter la fermeture vectorielle sur les deux axes de référence du plan $(\\vec{x}_0, \\vec{y}_0)$ pour obtenir 2 équations scalaires indépendantes.'
      },
      {
        etape: '3. Dérivation temporelle dans le repère galiléen',
        justification: 'Dériver la relation de fermeture par rapport au temps dans le repère $R_0$. La vitesse de chaque point s\'obtient directement par composition des mouvements ou par dérivation des bases tournantes :',
        formule: '\\left[ \\frac{\\mathrm{d}\\vec{u}_i}{\\mathrm{d}t} \\right]_{R_0} = \\dot{\\theta}_i \\vec{z}_0 \\wedge \\vec{u}_i = \\dot{\\theta}_i \\vec{v}_i'
      },
      {
        etape: '4. Élimination des coordonnées passives',
        justification: 'Utiliser la projection orthogonale ou le déterminant pour isoler la vitesse de sortie $\\dot{q}_s$ en fonction stricte de la commande motrice $\\dot{q}_e$.'
      }
    ],
    baremeEtPointsCles: [
      'Relation de Chasles rigoureusement fermée (1.5 pt)',
      'Définition irréprochable des angles de figures géométriques planes (2 pts)',
      'Dérivation vectorielle avec le vecteur rotation instantanée $\\vec{\\Omega}$ (2 pts)',
      'Élimination propre du paramètre intermédiaire pour exprimer le rapport de transmission (1.5 pt)'
    ]
  },
  {
    id: 'must-distance-sous-espace-gram',
    titre: 'Calcul de la Distance à un Sous-Espace & Matrice de Gram',
    matiere: 'Mathématiques',
    filieres: ['MP', 'PC', 'PSI', 'MPI', 'MPSI'],
    tauxPresence: 'Présent dans ~75% des oraux X-ENS/Mines et épreuves d\'Analyse Numérique',
    chapitreAssocie: 'Espaces Préhilbertiens Réels & Géométrie Euclidienne',
    enonceType: 'Soit $E$ un espace préhilbertien réel muni du produit scalaire $\\langle \\cdot, \\cdot \\rangle$. Soit $F = \\mathrm{Vect}(u_1, \\dots, u_p)$ un sous-espace de dimension finie engendré par une famille libre $(u_1, \\dots, u_p)$. Pour $x \\in E$, exprimer la projection orthogonale $p_F(x)$ et établir la formule du déterminant de Gram donnant la distance $d(x, F)^2 = \\frac{G(u_1, \\dots, u_p, x)}{G(u_1, \\dots, u_p)}$.',
    piegesImmediats: [
      'Croire que la formule $p_F(x) = \\sum \\langle x, u_i \\rangle u_i$ est vraie pour une base quelconque (elle n\'est vraie QUE si la base est orthonormée !).',
      'Confondre la matrice de Gram $G(u_1, \\dots, u_p) = (\\langle u_i, u_j \\rangle)$ et la matrice de passage.'
    ],
    redactionModele: [
      {
        etape: '1. Caractérisation de la projection orthogonale',
        justification: 'Puisque $\\dim F < +\\infty$, $F$ est complet donc fermé dans $E$. D\'après le théorème de projection sur un sous-espace complet, il existe un unique $y = p_F(x) \\in F$ tel que $x - y \\in F^\\perp$. En décomposant $y = \\sum_{j=1}^p \\lambda_j u_j$, l\'orthogonalité $\\langle x - y, u_i \\rangle = 0$ pour tout $i \\in \\{1, \\dots, p\\}$ conduit au système de Gram :\n$$\\sum_{j=1}^p \\langle u_i, u_j \\rangle \\lambda_j = \\langle u_i, x \\rangle, \\quad \\forall i \\in \\{1, \\dots, p\\}$$'
      },
      {
        etape: '2. Inversibilité de la matrice de Gram',
        justification: 'La matrice $G = (\\langle u_i, u_j \\rangle)_{1 \\le i, j \\le p}$ est la matrice symétrique définie positive associée à la famille libre $(u_1, \\dots, u_p)$. Son déterminant $G(u_1, \\dots, u_p) > 0$ est strictement non nul, ce qui garantit l\'unicité des coefficients $\\lambda_j$.'
      },
      {
        etape: '3. Expression de la distance par le déterminant de Gram',
        justification: 'En posant $e = x - p_F(x)$, on a $d(x, F)^2 = \\|e\\|^2 = \\langle x, e \\rangle$. Par développement par rapport à la dernière colonne du déterminant de Gram de la famille $(u_1, \\dots, u_p, x)$, on obtient la formule universelle :',
        formule: 'd(x, F)^2 = \\frac{\\det G(u_1, \\dots, u_p, x)}{\\det G(u_1, \\dots, u_p)}'
      }
    ],
    baremeEtPointsCles: [
      'Condition d\'orthogonalité $x - p_F(x) \\in F^\\perp$ (2 pts)',
      'Preuve de la liberté et de l\'inversibilité de la matrice de Gram (2.5 pts)',
      'Dérivation exacte de la distance minimale au carré (2.5 pts)'
    ]
  },
  {
    id: 'must-carnot-rendement-entropie',
    titre: 'Démonstration du Théorème de Carnot & Rendement Bitherme via Clausius',
    matiere: 'Physique',
    filieres: ['PC', 'PSI', 'MP', 'PCSI'],
    tauxPresence: 'Présent dans ~85% des épreuves de Thermodynamique Physique',
    chapitreAssocie: 'Second Principe & Machines Thermiques',
    enonceType: 'Soit un moteur thermique ditherme fonctionnant en cycle fermé entre une source chaude à température $T_C$ et une source froide à température $T_F < T_C$. Énoncer et démontrer le théorème de Carnot : quel que soit le fluide et le mécanisme, le rendement thermique vérifie $\\eta \\le 1 - \\frac{T_F}{T_C}$. Préciser la condition pour atteindre l\'égalité.',
    piegesImmediats: [
      'Inverser les indices de températures ($T_C/T_F$ au lieu de $T_F/T_C$).',
      'Oublier de préciser que l\'inégalité de Clausius $\\sum \\frac{Q_i}{T_i} \\le 0$ s\'applique aux températures des SOURCES thermodynamiques et non à la température variable du fluide.'
    ],
    redactionModele: [
      {
        etape: '1. Premier principe sur un cycle de fluide',
        justification: 'Pour un cycle de fonctionnement, l\'énergie interne est une fonction d\'état : $\\Delta U_{cycle} = 0$. Le bilan d\'énergie s\'écrit :\n$$W + Q_C + Q_F = 0 \\implies -W = Q_C + Q_F$$\nPour un moteur, le fluide fournit du travail au milieu extérieur ($W < 0$, donc $-W > 0$). Le rendement thermique $\\eta$ est le rapport de l\'effet utile sur la dépense énergétique payée à la source chaude :',
        formule: '\\eta = \\frac{-W}{Q_C} = 1 + \\frac{Q_F}{Q_C}'
      },
      {
        etape: '2. Second principe et Inégalité de Clausius',
        justification: 'L\'entropie étant une fonction d\'état, $\\Delta S_{cycle} = 0$. D\'après le second principe :\n$$\\Delta S_{cycle} = \\frac{Q_C}{T_C} + \\frac{Q_F}{T_F} + S_c = 0 \\quad \\text{avec } S_c \\ge 0$$\nD\'où l\'inégalité de Clausius pour un système en contact avec deux thermostats :\n$$\\frac{Q_C}{T_C} + \\frac{Q_F}{T_F} \\le 0 \\implies \\frac{Q_F}{T_F} \\le -\\frac{Q_C}{T_C}$$'
      },
      {
        etape: '3. Encadrement du rendement et borne de Carnot',
        justification: 'Comme $Q_C > 0$ (chaleur reçue de la source chaude), divisons par $Q_C$ et multiplions par $T_F > 0$ :\n$$\\frac{Q_F}{Q_C} \\le -\\frac{T_F}{T_C}$$\nEn injectant dans l\'expression du rendement thermique :\n$$\\eta = 1 + \\frac{Q_F}{Q_C} \\le 1 - \\frac{T_F}{T_C} = \\eta_{Carnot}$$\nL\'égalité est atteinte si et seulement si le cycle est entièrement réversible ($S_c = 0$), ce qui exige que les transferts thermiques se fassent à température constante (isothermes réversibles à $T_C$ et $T_F$) reliées par des transformations adiabatiques réversibles (cycle de Carnot).'
      }
    ],
    baremeEtPointsCles: [
      'Définition claire du rendement comme ratio utile/coût (1.5 pt)',
      'Formulation rigoureuse de l\'inégalité de Clausius avec $T_{sources}$ (2.5 pts)',
      'Déduction sans faille algébrique de $\\eta \\le 1 - T_F/T_C$ (2 pts)',
      'Caractérisation du cycle réversible de Carnot (1 pt)'
    ]
  },
  {
    id: 'must-michaelis-menten-aeqs',
    titre: 'Cinétique Enzymatique : Dérivation de Michaelis-Menten par l\'AEQS',
    matiere: 'Chimie',
    filieres: ['PC', 'PCSI', 'BCPST'],
    tauxPresence: 'Présent dans ~80% des épreuves de Chimie Organique/Biochimie et Cinétique',
    chapitreAssocie: 'Cinétique Chimique & Catalyse',
    enonceType: 'On considère le mécanisme enzymatique simple de transformation d\'un substrat $S$ en produit $P$ catalysé par une enzyme $E$ :\n$$E + S \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} ES \\xrightarrow{k_2} E + P$$\nEn appliquant l\'Approximation des États Quasi-Stationnaires (AEQS) au complexe intermédiaire $[ES]$ et la conservation de l\'enzyme totale $[E]_0 = [E] + [ES]$, établir l\'expression de la vitesse de formation du produit $v = \\frac{V_{max} [S]}{K_M + [S]}$.',
    piegesImmediats: [
      'Oublier la conservation de l\'enzyme totale $[E]_0 = [E] + [ES]$ et chercher à exprimer la vitesse en fonction de l\'enzyme libre $[E]$ (inconnue non mesurable).',
      'Confondre la constante de dissociation de Michaelis $K_M = \\frac{k_{-1} + k_2}{k_1}$ avec la constante d\'équilibre thermodynamique $K_s = k_{-1}/k_1$ (condition de Briggs-Haldane vs Michaelis).'
    ],
    redactionModele: [
      {
        etape: '1. Vitesse de formation du produit',
        justification: 'Le produit $P$ est formé dans l\'étape élémentaire irréversible finale $ES \\to E + P$. D\'après la loi de Van \'t Hoff :\n$$v = \\frac{\\mathrm{d}[P]}{\\mathrm{d}t} = k_2 [ES]$$'
      },
      {
        etape: '2. Application de l\'AEQS sur le complexe $[ES]$',
        justification: 'Le complexe enzyme-substrat $ES$ est un intermédiaire réactionnel très réactif en faible concentration par rapport au substrat. Par l\'AEQS :\n$$\\frac{\\mathrm{d}[ES]}{\\mathrm{d}t} = k_1 [E][S] - k_{-1}[ES] - k_2 [ES] \\approx 0$$\nCe qui donne immédiatement la relation entre $[ES]$, $[E]$ et $[S]$ :\n$$[ES] = \\frac{k_1 [E][S]}{k_{-1} + k_2} = \\frac{[E][S]}{K_M} \\quad \\text{avec } K_M = \\frac{k_{-1} + k_2}{k_1}$$'
      },
      {
        etape: '3. Conservation de l\'enzyme et loi de vitesse',
        justification: 'L\'enzyme se conserve sous forme libre ou complexée : $[E]_0 = [E] + [ES] = [ES] \\left(1 + \\frac{K_M}{[S]}\\right) = [ES] \\frac{K_M + [S]}{[S]}$.\nOn en tire la concentration du complexe :\n$$[ES] = \\frac{[E]_0 [S]}{K_M + [S]}$$\nEn reportant dans $v = k_2 [ES]$ et en notant la vitesse maximale $V_{max} = k_2 [E]_0$ :',
        formule: 'v = \\frac{V_{max} [S]}{K_M + [S]}'
      }
    ],
    baremeEtPointsCles: [
      'Définition exacte de l\'AEQS sur $[ES]$ (2 pts)',
      'Bilan de matière indispensable sur l\'enzyme $[E]_0 = [E] + [ES]$ (2.5 pts - discriminant)',
      'Définition de la constante de Michaelis $K_M = (k_{-1} + k_2)/k_1$ (1.5 pt)',
      'Analyse aux limites : ordre 1 pour $[S] \\ll K_M$, ordre 0 pour $[S] \\gg K_M$ (1 pt)'
    ]
  },
  {
    id: 'must-statique-coulomb-arc-boutement',
    titre: 'Modélisation du Frottement de Coulomb & Condition d\'Arc-Boutement',
    matiere: 'Sciences de l\'Ingénieur',
    filieres: ['PSI', 'MP', 'MPSI'],
    tauxPresence: 'Présent dans ~75% des épreuves de SI Mécanique',
    chapitreAssocie: 'Statique du Solide Indéformable & Frottement',
    enonceType: 'Soit un solide guidé en translation par deux patins distants de $L$, soumis à une force de poussée axiale excentrée d\'une distance $d$. Les contacts sont régis par les lois de Coulomb de coefficient de frottement $f = \\tan\\varphi$. Établir la condition géométrique sur l\'excentrement $d$ provoquant l\'arc-boutement (coincement irréversible quelle que soit l\'intensité de la force motrice appliquée).',
    piegesImmediats: [
      'Confondre la condition d\'adhérence ($\\|\\vec{T}\\| \\le f \\|\\vec{N}\\|$) et la loi de glissement dynamique (égalité stricte $\\|\\vec{T}\\| = f \\|\\vec{N}\\|$).',
      'Oublier d\'orienter la force de frottement tangentielle $\\vec{T}$ en opposition stricte avec la vitesse de glissement virtuel.'
    ],
    redactionModele: [
      {
        etape: '1. Écriture du torseur de contact avec frottement',
        justification: 'En chaque point de contact $A$ et $B$, l\'action de contact $\\vec{R} = \\vec{N} + \\vec{T}$ s\'incline d\'un angle $\\alpha$ par rapport à la normale. À la limite de glissement ou en frottement établi, $\\alpha = \\varphi$ avec $f = \\tan\\varphi$.'
      },
      {
        etape: '2. Application du Principe Fondamental de la Statique',
        justification: 'En isolant le tiroir soumis à l\'action motrice $\\vec{F} = F \\vec{x}_0$ excentrée en $y = d$ et aux réactions de contact en $A$ et $B$ :\n- Équilibre des forces en projection : $N_A = N_B = N$ et $F = T_A + T_B = 2 f N$.\n- Équilibre des moments au point $O$ : $F d - N L = 0 \\implies N = F \\frac{d}{L}$.'
      },
      {
        etape: '3. Condition critique d\'arc-boutement',
        justification: 'En combinant les deux équations : $F = 2 f \\left( F \\frac{d}{L} \\right) = F \\left( \\frac{2 f d}{L} \\right)$. Cette relation d\'équilibre montre que le système est bloqué dès que le facteur de frottement dépasse le seuil géométrique :',
        formule: 'd \\ge \\frac{L}{2 f} \\iff f \\cdot \\frac{2 d}{L} \\ge 1'
      }
    ],
    baremeEtPointsCles: [
      'Définition rigoureuse du cône de frottement d\'angle $\\varphi = \\arctan f$ (2 pts)',
      'Orientation correcte des composantes normales et tangentielles (2 pts)',
      'Équilibre complet des moments et des forces (2 pts)',
      'Conclusion physique sur l\'indépendance du blocage par rapport à l\'intensité $F$ (1 pt)'
    ]
  }
];

export const QUESTIONS_INCONTOURNABLES: QuestionIncontournableItem[] = [
  ...BASE_QUESTIONS_INCONTOURNABLES,
  ...MASSIVE_QUESTIONS_INCONTOURNABLES,
  ...THIRTY_QUESTIONS_INCONTOURNABLES,
  ...BCPST_QUESTIONS_INCONTOURNABLES,
];


const BASE_FICHES_REFLEXES: FicheReflexe[] = [
  {
    id: 'ref-diagonalisable',
    titre: 'Montrer qu\'une matrice est diagonalisable',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$\\chi_A(X) = \\prod_{i=1}^p (X - \\lambda_i)^{m_i}$ avec $\\dim \\ker(A - \\lambda_i I) = m_i$',
    quandUtiliser: 'Dès qu\'un sujet demande de réduire une matrice ou d\'étudier une suite récurrente / puissance $A^k$.',
    etapesPratiques: [
      'Méthode 1 (Idéale) : Trouver $n$ valeurs propres distinctes. Si $\\mathrm{Card}(\\mathrm{Sp}(A)) = n$, $A$ est immédiatement diagonalisable.',
      'Méthode 2 (Polynôme annulateur) : Trouver un polynôme scindé à racines simples qui annule $A$ (ex: $A^2 = I \\implies (X-1)(X+1)$).',
      'Méthode 3 (Symétrique réelle) : Si $A \\in \\mathcal{S}_n(\\mathbb{R})$ (matrice symétrique réelle), elle est diagonalisable dans une base orthonormée (Théorème spectral).',
      'Méthode 4 (Générale) : Calculer $\\chi_A(X)$, vérifier qu\'il est scindé et que la multiplicité géométrique égale la multiplicité algébrique pour chaque valeur propre multiple.'
    ],
    exempleApplication: 'Pour $J_n$ la matrice remplie de 1 : $J_n$ est de rang 1, donc 0 est valeur propre de multiplicité au moins $n-1$. Comme $\\mathrm{Tr}(J_n) = n$, la dernière valeur propre est $n$. $0$ et $n$ sont réelles avec $\\dim E_0 = n-1$ et $\\dim E_n = 1$ : $J_n$ est diagonalisable.'
  },
  {
    id: 'ref-integrale-parametre',
    titre: 'Dériver sous le signe intégrale (Théorème de Leibniz)',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$\\frac{\\mathrm{d}}{\\mathrm{d}x} \\int_I f(x, t)\\,\\mathrm{d}t = \\int_I \\frac{\\partial f}{\\partial x}(x, t)\\,\\mathrm{d}t$',
    quandUtiliser: 'Pour calculer des intégrales classiques (ex: intégrale de Dirichlet $\\int_0^\\infty \\frac{\\sin t}{t} e^{-x t}\\,\\mathrm{d}t$, intégrale de Gauss).',
    etapesPratiques: [
      '1. Pour tout $x \\in J$, $t \\mapsto f(x, t)$ est intégrable (ou continue par morceaux) sur $I$.',
      '2. Pour tout $t \\in I$, $x \\mapsto f(x, t)$ est de classe $\\mathcal{C}^1$ sur $J$.',
      '3. Hypothèse de domination locale : Pour tout segment $[a, b] \\subset J$, il existe une fonction $\\phi \\in L^1(I, \\mathbb{R}^+)$ telle que $\\forall x \\in [a, b], \\forall t \\in I, \\left|\\frac{\\partial f}{\\partial x}(x, t)\\right| \\le \\phi(t)$.',
      '4. Conclure : La fonction est $\\mathcal{C}^1$ et sa dérivée s\'obtient par dérivation sous l\'intégrale.'
    ],
    exempleApplication: 'Fonction $\\Gamma(x) = \\int_0^\\infty t^{x-1} e^{-t}\\,\\mathrm{d}t$ : sur tout intervalle $[a, b] \\subset ]0, +\\infty[$, domination par $\\phi(t) = (t^{a-1} + t^{b-1})|\\ln t| e^{-t}$.'
  },
  {
    id: 'ref-rayon-convergence',
    titre: 'Déterminer le Rayon de Convergence d\'une Série Entière $\\sum a_n z^n$',
    matiere: 'Mathématiques',
    formuleOuTheoreme: 'Règle de d\'Alembert : $R = \\lim_{n\\to\\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|$ ou Lemme d\'Abel',
    quandUtiliser: 'Dès qu\'une série entière apparaît pour déterminer son domaine de validité analytique.',
    etapesPratiques: [
      '1. Règle de d\'Alembert : Calculer $\\ell = \\lim |a_{n+1}/a_n|$. Si la limite existe, $R = 1/\\ell$ (avec $1/0 = +\\infty, 1/+\\infty = 0$).',
      '2. Lacunes d\'indices (séries paires ou du type $\\sum a_n z^{2n}$) : Poser $u = z^2$ et chercher le rayon $R_u$, puis poser $R = \\sqrt{R_u}$.',
      '3. Équivalents : Si $a_n \\sim b_n$ quand $n\\to+\\infty$, alors les séries $\\sum a_n z^n$ et $\\sum b_n z^n$ ont exactement le même rayon de convergence.',
      '4. Comportement sur le bord $|z| = R$ : Étude indépendante (critère des séries alternées ou convergence absolue) car la règle d\'Abel ne renseigne pas sur le cercle d\'incertitude.'
    ],
    exempleApplication: 'Pour $\\sum \\frac{n!}{n^n} z^n$ : $\\frac{a_{n+1}}{a_n} = \\frac{(n+1) n^n}{(n+1)^{n+1}} = \\left(\\frac{n}{n+1}\\right)^n = \\frac{1}{(1 + 1/n)^n} \\to \\frac{1}{e}$. Donc $R = e$.'
  },
  {
    id: 'ref-equa-diff-variation-constante',
    titre: 'Résoudre une Équation Différentielle avec Variation de la Constante',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$y\' + a(x)y = b(x) \\implies y_p(x) = \\lambda(x) y_0(x)$ avec $\\lambda\'(x) y_0(x) = b(x)$',
    quandUtiliser: 'Recherche de solutions particulières pour des équations différentielles linéaires non homogènes avec second membre non usuel.',
    etapesPratiques: [
      '1. Résoudre l\'équation homogène $y\' + a(x)y = 0 \\implies y_0(x) = C e^{-A(x)}$ où $A$ est une primitive de $a$.',
      '2. Poser la solution sous la forme $y_p(x) = \\lambda(x) y_0(x)$ où $\\lambda$ est une fonction inconnue de classe $\\mathcal{C}^1$.',
      '3. Dériver et substituer : les termes en $\\lambda(x)$ s\'annulent obligatoirement par construction de $y_0$.',
      '4. Intégrer $\\lambda\'(x) = \\frac{b(x)}{y_0(x)}$ pour obtenir $\\lambda(x)$, puis donner la solution générale $y(x) = y_0(x) + y_p(x)$.'
    ],
    exempleApplication: 'Pour $x y\' - y = x^2 \\cos x$ sur $]0, +\\infty[$ : solution homogène $y_0(x) = C x$. En posant $y_p(x) = \\lambda(x) x$, on obtient $\\lambda\'(x) = \\cos x$, d\'où $\\lambda(x) = \\sin x$ et $y_p(x) = x \\sin x$.'
  },
  {
    id: 'ref-maxwell-ampere',
    titre: 'Choisir entre Théorème d\'Ampère et Loi de Biot-Savart',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\oint_{\\mathcal{C}} \\vec{B} \\cdot \\mathrm{d}\\vec{\\ell} = \\mu_0 I_{enlace}$ vs $\\vec{B}(M) = \\frac{\\mu_0}{4\\pi} \\int \\frac{I \\mathrm{d}\\vec{\\ell} \\wedge \\vec{u}}{r^2}$',
    quandUtiliser: 'Calcul du champ magnétique créé par une distribution de courants stationnaires.',
    etapesPratiques: [
      'Analyser les plans d\'antisymétrie de la distribution : $\\vec{B}$ est orthogonal aux plans d\'antisymétrie et contenu dans les plans de symétrie.',
      'Analyser les invariances : Dépendance de $\\vec{B}$ par rapport aux coordonnées ($r, \\theta, z$).',
      'Si les invariances et symétries réduisent $\\vec{B}$ à une seule composante ne dépendant que d\'une seule variable, choisir un contour d\'Ampère épousant la ligne de champ (ex: cercle pour un fil, rectangle pour un solénoïde infini).',
      'Si la géométrie est finie (spire circulaire sur son axe, segment fini), utiliser directement la loi de Biot-Savart.'
    ],
    exempleApplication: 'Solénoïde infini : symétrie cylindrique, invariance par $z$ et $\\theta$, $\\vec{B} = B(r)\\vec{u}_z$. Un contour rectangulaire à cheval sur la paroi donne $B_{int} = \\mu_0 n I$ et $B_{ext} = 0$.'
  },
  {
    id: 'ref-theoreme-gauss-invariances',
    titre: 'Choix de la Surface de Gauss en Électrostatique selon les Symétries',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\iint_{\\Sigma} \\vec{E} \\cdot \\mathrm{d}\\vec{S} = \\frac{Q_{int}}{\\varepsilon_0}$',
    quandUtiliser: 'Calcul du champ électrostatique créé par une distribution continue de charges hautement symétrique.',
    etapesPratiques: [
      '1. Symétries : $\\vec{E}(M)$ appartient à l\'intersection de tous les plans de symétrie passant par le point $M$.',
      '2. Invariances : Si la distribution est invariante par translation selon $z$ et rotation selon $\\theta$, alors $\\vec{E} = E(r)\\vec{u}_r$.',
      '3. Choix de la surface fermée $\\Sigma$ : Choisir une surface fermée sur laquelle soit $\\vec{E} \\perp \\mathrm{d}\\vec{S}$ (flux nul), soit $\\vec{E} \\parallel \\mathrm{d}\\vec{S}$ avec $\\|\\vec{E}\\| = \\mathrm{cste}$ (flux sortant $= E \\times S$).',
      '4. Décompte de $Q_{int}$ : Intégrer la densité de charge volumique $\\rho$ ou surfacique $\\sigma$ strictement contenue à l\'intérieur du volume délimité par $\\Sigma$.'
    ],
    exempleApplication: 'Cylindre infini chargé uniformément de rayon $R$ : surface de Gauss = cylindre coaxial de rayon $r$ et hauteur $h$. Pour $r < R$, $E(2\\pi r h) = \\frac{\\rho \\pi r^2 h}{\\varepsilon_0} \\implies E(r) = \\frac{\\rho r}{2\\varepsilon_0}$. Pour $r > R$, $E(r) = \\frac{\\rho R^2}{2\\varepsilon_0 r}$.'
  },
  {
    id: 'ref-bilan-entropie-ouvert',
    titre: 'Bilan d\'Entropie en Système Ouvert & Création d\'Entropie',
    matiere: 'Physique',
    formuleOuTheoreme: '$s_2 - s_1 = \\frac{q}{T_p} + s_c$ avec $s_c \\ge 0$',
    quandUtiliser: 'Étude thermodynamique des turbines, tuyères, échangeurs et détentes de Joule-Kelvin.',
    etapesPratiques: [
      '1. Identifier les états 1 (entrée) et 2 (sortie) du fluide en régime stationnaire.',
      '2. Calculer la variation d\'entropie massique $\\Delta s = s_2 - s_1$ par la relation thermodynamique $\\mathrm{d}s = c_p \\frac{\\mathrm{d}T}{T} - r \\frac{\\mathrm{d}P}{P}$ pour un gaz parfait.',
      '3. Évaluer le transfert thermique massique échangé avec la paroi $q$ et la température de thermostat $T_p$ ($q=0$ si la machine est adiabatique).',
      '4. En déduire l\'entropie créée massique : $s_c = (s_2 - s_1) - \\frac{q}{T_p}$. Vérifier impérativement que $s_c \\ge 0$ (second principe).'
    ],
    exempleApplication: 'Détente de Joule-Thomson adiabatique sans travail utile : $\\Delta h = 0$. Pour un gaz parfait $T_2 = T_1$, donc $\\Delta s = -r \\ln(P_2/P_1) > 0$ car $P_2 < P_1$. Comme $q=0$, $s_c = r \\ln(P_1/P_2) > 0$ : création irréversible d\'entropie par laminage visqueux.'
  },
  {
    id: 'ref-interferences-chemins',
    titre: 'Calculer une différence de marche $\\delta$ en optique',
    matiere: 'Physique',
    formuleOuTheoreme: '$\\delta = [S_2 M] - [S_1 M] = \\sum n_i d_i$',
    quandUtiliser: 'Dès qu\'un problème d\'interférences lumineuses (fentes, bi-prisme, miroir de Lloyd, Michelson) est posé.',
    etapesPratiques: [
      'Tracer le schéma avec les rayons issus de la source primaire $S$ jusqu\'au point d\'observation $M$.',
      'Décomposer en trois segments : $[S S_i] + [S_i M]$ où $S_1, S_2$ sont les sources secondaires.',
      'Si un indice $n$ varie ou une lame à faces parallèles d\'épaisseur $e$ est introduite, ajouter $(n-1)e$ au chemin optique du rayon correspondant.',
      'Faire un développement limité aux petits angles : pour les trous d\'Young distants de $a$ à distance $D \\gg a, x$, $\\delta \\approx \\frac{a x}{D}$.'
    ],
    exempleApplication: 'Interfrange $i = \\frac{\\lambda_0 D}{a}$. Si on place une lame d\'épaisseur $e$ et d\'indice $n$ devant la fente 1, la frange centrale se déplace de $\\Delta x = \\frac{(n-1)e D}{a}$.'
  },
  {
    id: 'ref-diagramme-ellingham',
    titre: 'Construire et Exploiter un Diagramme d\'Ellingham',
    matiere: 'Chimie',
    formuleOuTheoreme: '$\\Delta_r G^\\circ(T) = \\Delta_r H^\\circ - T \\Delta_r S^\\circ$, pente $= -\\Delta_r S^\\circ$',
    quandUtiliser: 'Comparaison du pouvoir réducteur des métaux et détermination des conditions thermodynamiques de réduction des minerais.',
    etapesPratiques: [
      '1. Écrire toutes les réactions d\'oxydation rapportées à UNE mole de dioxygène $O_2(g)$ consommée.',
      '2. Approximation d\'Ellingham : considérer $\\Delta_r H^\\circ$ et $\\Delta_r S^\\circ$ constants hors changement d\'état.',
      '3. Pente de la droite : $\\frac{\\mathrm{d}\\Delta_r G^\\circ}{\\mathrm{d}T} = -\\Delta_r S^\\circ$. Comme le gaz $O_2$ disparaît, $\\Delta_r S^\\circ < 0$ en général, donc la pente est positive (sauf pour $2C + O_2 = 2CO$ où $\\Delta \\nu_g > 0$).',
      '4. Changement d\'état : Si le métal fond ou se vaporise, son entropie augmente, donc $-\\Delta_r S^\\circ$ devient encore plus positif : la pente de la droite d\'Ellingham augmente (brisure vers le haut).',
      '5. Critère de spontanéité : Le métal dont la droite est la plus basse est le plus réducteur : il réduit spontanément l\'oxyde du métal situé au-dessus.'
    ],
    exempleApplication: 'Aluminothermie : la droite d\'Ellingham de l\'aluminium ($4/3 Al + O_2 = 2/3 Al_2O_3$) est située en dessous de celle du fer ($2Fe + O_2 = 2FeO$) à toute température : l\'aluminium métallique réduit violemment les oxydes de fer avec un fort dégagement thermique.'
  },
  {
    id: 'ref-torseur-action-mecanique',
    titre: 'Écriture et Transport d\'un Torseur d\'Action Mécanique',
    matiere: 'Sciences de l\'Ingénieur',
    formuleOuTheoreme: '$\\{T_{1\\to 2}\\} = \\begin{Bmatrix} \\vec{R}_{1\\to 2} \\\\ \\vec{M}_{A}(1\\to 2) \\end{Bmatrix}_A$ avec $\\vec{M}_B = \\vec{M}_A + \\vec{BA} \\wedge \\vec{R}$',
    quandUtiliser: 'Résolution du Principe Fondamental de la Statique (PFS) ou de la Dynamique (PFD) en Sciences de l\'Ingénieur.',
    etapesPratiques: [
      '1. Isoler le solide ou l\'ensemble matériel $\{S\}$. Faire le bilan exhaustif des actions mécaniques extérieures (liaisons, pesanteur, actionneurs, contacts frottants).',
      '2. Écrire le torseur transmissible de chaque liaison en son point caractéristique (centre de la liaison) selon les mobilités géométriques autorisées.',
      '3. Choisir le point de réduction optimal : le point où convergent le maximum d\'inconnues ou de moments pour simplifier les calculs.',
      '4. Formule de transport (BàB / Varignon) : Transporter tous les moments au point choisi via $\\vec{M}_B = \\vec{M}_A + \\vec{BA} \\wedge \\vec{R}$.',
      '5. Appliquer le PFS : $\\sum \\{T_{ext \\to S}\\} = \\{0\\}$, ce qui donne 3 équations scalaires de résultante et 3 équations scalaires de moment.'
    ],
    exempleApplication: 'Liaison pivot d\'axe $(A, \\vec{z})$ : 5 inconnues statiques (résultante $X\\vec{x} + Y\\vec{y} + Z\\vec{z}$, moment $L\\vec{x} + M\\vec{y} + 0\\vec{z}$). Le moment selon l\'axe de rotation $\\vec{z}$ est nul en l\'absence de frottement sec.'
  },
  {
    id: 'ref-gram-schmidt',
    titre: 'Orthonormaliser une Famille par le Procédé de Gram-Schmidt',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$v_k = u_k - \\sum_{i=1}^{k-1} \\frac{\\langle u_k, v_i \\rangle}{\\|v_i\\|^2} v_i \\quad \\text{puis} \\quad e_k = \\frac{v_k}{\\|v_k\\|}$',
    quandUtiliser: 'Construction de bases orthonormales, polynômes orthogonaux (Legendre, Tchebychev), moindres carrés et factorisation QR.',
    etapesPratiques: [
      '1. Vérifier que la famille de départ $(u_1, \\dots, u_p)$ est libre (sinon extraire une sous-famille libre).',
      '2. Premier vecteur : Poser $v_1 = u_1$, puis normaliser $e_1 = v_1 / \\|v_1\\|$.',
      '3. Étape récurrente : Pour chaque $k \\ge 2$, retrancher de $u_k$ sa projection orthogonale sur $\\mathrm{Vect}(e_1, \\dots, e_{k-1})$ : $v_k = u_k - \\sum_{i=1}^{k-1} \\langle u_k, e_i \\rangle e_i$.',
      '4. Normaliser $e_k = v_k / \\|v_k\\|$. Vérifier immédiatement que $\\langle e_k, e_1 \\rangle = 0$ pour dépister toute erreur de calcul.'
    ],
    exempleApplication: 'Pour $(1, X, X^2)$ dans $\\mathbb{R}_2[X]$ avec $\\langle P, Q \\rangle = \\int_{-1}^1 P(t)Q(t)\\,\\mathrm{d}t$ : $v_0 = 1$, $\\|v_0\\|^2 = 2$. $v_1 = X$ car $\\langle X, 1 \\rangle = 0$. $v_2 = X^2 - \\frac{\\langle X^2, 1 \\rangle}{2} = X^2 - 1/3$. On retrouve les polynômes de Legendre !'
  },
  {
    id: 'ref-integrale-double-green',
    titre: 'Calculer une Intégrale Double ou Circulée via Green-Riemann',
    matiere: 'Mathématiques',
    formuleOuTheoreme: '$\\oint_{\\partial D} (P\\,\\mathrm{d}x + Q\\,\\mathrm{d}y) = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) \\mathrm{d}x\\mathrm{d}y$',
    quandUtiliser: 'Calcul d\'aires de domaines fermés délimités par des courbes paramétrées (astroïde, ellipse) et circulation de champs vectoriels.',
    etapesPratiques: [
      '1. Vérifier que le contour orienté $\\partial D$ est fermé, sans point double et parcouru dans le sens trigonométrique direct (le domaine $D$ est à gauche).',
      '2. Pour calculer une aire $\\mathcal{A}(D) = \\iint_D \\mathrm{d}x\\mathrm{d}y$, choisir la forme différentielle $\\omega = \\frac{1}{2}(x\\mathrm{d}y - y\\mathrm{d}x)$ ou $\\omega = x\\mathrm{d}y$ (car $\\partial Q/\\partial x - \\partial P/\\partial y = 1$).',
      '3. Injecter le paramétrage temporel $x(t), y(t)$ pour $t \\in [a, b]$ :',
      '4. Intégrer l\'intégrale simple $\\mathcal{A} = \\frac{1}{2} \\int_a^b (x(t) y\'(t) - y(t) x\'(t))\\,\\mathrm{d}t$.'
    ],
    exempleApplication: 'Aire de l\'ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} \\le 1$ ($x = a\\cos t, y = b\\sin t$) : $\\mathcal{A} = \\frac{1}{2} \\int_0^{2\\pi} (ab\\cos^2 t + ab\\sin^2 t)\\,\\mathrm{d}t = \\frac{ab}{2} \\times 2\\pi = \\pi a b$.'
  },
  {
    id: 'ref-puits-quantique-1d',
    titre: 'Résoudre l\'Équation de Schrödinger 1D Stationnaire par Morceaux',
    matiere: 'Physique',
    formuleOuTheoreme: '$-\\frac{\\hbar^2}{2m} \\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d}x^2} + V(x) \\psi(x) = E \\psi(x)$',
    quandUtiliser: 'Étude d\'un puits ou d\'une marche de potentiel quantique (états liés, quantification d\'énergie, effet tunnel).',
    etapesPratiques: [
      '1. Découper l\'espace en zones où le potentiel $V(x)$ est constant.',
      '2. Si $E > V_0$ : solution oscillante $\\psi(x) = A e^{j k x} + B e^{-j k x}$ avec $k = \\frac{\\sqrt{2m(E - V_0)}}{\\hbar}$.',
      '3. Si $E < V_0$ : solution évanescente $\\psi(x) = C e^{K x} + D e^{-K x}$ avec $K = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$ (rejeter les exponentielles divergentes en $\\pm\\infty$).',
      '4. Conditions aux limites de raccordement : continuité de la fonction d\'onde $\\psi(x)$ et de sa dérivée première $\\psi\'(x)$ à chaque frontière (sauf si $V \\to +\\infty$ où seule $\\psi$ est continue et s\'annule).'
    ],
    exempleApplication: 'Puits infini de largeur $L$ ($V=0$ sur $[0, L]$) : $\\psi(0) = \\psi(L) = 0 \\implies k L = n\\pi$, d\'où la quantification d\'énergie $E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2m L^2} = \\frac{n^2 h^2}{8m L^2}$.'
  },
  {
    id: 'ref-optique-geometrique-lentilles',
    titre: 'Tracer et Calculer l\'Image par un Instrument d\'Optique Centré',
    matiere: 'Physique',
    formuleOuTheoreme: 'Relation de Descartes : $\\frac{1}{\\overline{OA\'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF\'}} = V$',
    quandUtiliser: 'Lentilles minces convergentes/divergentes, lunette astronomique de Kepler/Galilée, microscope et œil.',
    etapesPratiques: [
      '1. Orientation de l\'axe optique : sens de propagation de la lumière de gauche à droite (valeurs algébriques $\\overline{OA} < 0$ pour un objet réel).',
      '2. Tracer les 3 rayons remarquables : rayon passant par le centre optique $O$ (non dévié), rayon parallèle à l\'axe optique (émerge en passant par le foyer image $F\'$), rayon passant par le foyer objet $F$ (émerge parallèle à l\'axe).',
      '3. Calculer le grandissement transversal : $\\gamma = \\frac{\\overline{A\'B\'}}{\\overline{AB}} = \\frac{\\overline{OA\'}}{\\overline{OA}}$.',
      '4. Système afocal (lunette) : le foyer image de l\'objectif $F\'_1$ est confondu avec le foyer objet de l\'oculaire $F_2$, grandissement angulaire $G = -f\'_1 / f\'_2$.'
    ],
    exempleApplication: 'Objet réel à $\\overline{OA} = -2f\'$ (montage 2f-2f) : $\\frac{1}{\\overline{OA\'}} = \\frac{1}{f\'} - \\frac{1}{2f\'} = \\frac{1}{2f\'} \\implies \\overline{OA\'} = +2f\'$. L\'image est réelle, renversée, de taille identique ($\\gamma = -1$).'
  },
  {
    id: 'ref-aeqs-cinetique',
    titre: 'Appliquer l\'AEQS sur un Intermédiaire Réactionnel',
    matiere: 'Chimie',
    formuleOuTheoreme: '$\\frac{\\mathrm{d}[IR]}{\\mathrm{d}t} \\approx 0 \\implies \\sum v_{formation}(IR) \\approx \\sum v_{disparition}(IR)$',
    quandUtiliser: 'Établissement des lois de vitesse pour les réactions en chaîne (radicaux libres), catalyse homogène et enzymatique.',
    etapesPratiques: [
      '1. Identifier les intermédiaires réactionnels (IR) : espèces hautement réactives produites et consommées au cours du mécanisme, absentes du bilan stœchiométrique global.',
      '2. Écrire la vitesse volumique globale de la réaction $v$ à partir de l\'apparition d\'un produit final.',
      '3. Écrire la dérivée temporelle de chaque IR en appliquant la loi de Van \'t Hoff à chaque acte élémentaire.',
      '4. Poser $\\frac{\\mathrm{d}[IR]}{\\mathrm{d}t} = 0$, isoler $[IR]$ en fonction des réactifs stables, et substituer dans l\'expression de $v$.'
    ],
    exempleApplication: 'Synthèse de $HBr$ ($H_2 + Br_2 \\to 2HBr$) : l\'AEQS appliquée aux radicaux $Br^\\bullet$ et $H^\\bullet$ donne la loi composite expérimentale de Bodenstein : $v = \\frac{k [H_2] [Br_2]^{1/2}}{1 + m [HBr]/[Br_2]}$.'
  },
  {
    id: 'ref-coulomb-frottement-adherence',
    titre: 'Poser les Lois de Coulomb (Adhérence vs Glissement)',
    matiere: 'Sciences de l\'Ingénieur',
    formuleOuTheoreme: 'Adhérence : $\\|\\vec{T}\\| \\le f \\|\\vec{N}\\|$ ; Glissement : $\\|\\vec{T}\\| = f \\|\\vec{N}\\|$ avec $\\vec{T} = -f \\|\\vec{N}\\| \\frac{\\vec{V}_g}{\\|\\vec{V}_g\\|}$',
    quandUtiliser: 'Étude de l\'équilibre strict de solides avec contact frottant (freins à tambour/disque, embrayages, cales, cordes sur tambour d\'Eytelwein).',
    etapesPratiques: [
      '1. Déterminer la vitesse de glissement virtuel $\\vec{V}_g(1/2)$ si le mouvement avait lieu.',
      '2. En phase d\'adhérence (statique) : l\'action de contact $\\vec{R} = \\vec{N} + \\vec{T}$ est strictement à l\'intérieur du cône de frottement de demi-angle au sommet $\\varphi = \\arctan f$.',
      '3. En condition limite de décollement ou de glissement : $\\|\\vec{T}\\| = f \\|\\vec{N}\\|$ et la force $\\vec{R}$ est sur la génératrice du cône.',
      '4. Écrire le torseur d\'action mécanique et appliquer le PFS pour déterminer la force ou le couple critique.'
    ],
    exempleApplication: 'Formule d\'Eytelwein pour un câble enroulé sur un cabestan avec un angle $\\theta$ : $T_{brin\\,tendu} = T_{brin\\,mou} e^{f \\theta}$. Un faible effort permet de retenir une charge colossale grâce à l\'exponentielle !'
  }
];

export const FICHES_REFLEXES: FicheReflexe[] = [
  ...BASE_FICHES_REFLEXES,
  ...MASSIVE_FICHES_REFLEXES,
  ...TWENTY_FICHES_REFLEXES,
  ...THIRTY_NEW_FICHES_REFLEXES,
];

export const CONCOURS_CALENDAR = [
  { nom: 'Concours X-ENS (Polytechnique & ENS)', date: '2026-04-13', filieres: ['MP', 'PC', 'PSI', 'MPI', 'BCPST'], color: 'indigo' },
  { nom: 'Concours Commun Mines-Ponts (CCMP)', date: '2026-04-20', filieres: ['MP', 'PC', 'PSI', 'MPI'], color: 'cyan' },
  { nom: 'Centrale-Supélec', date: '2026-04-27', filieres: ['MP', 'PC', 'PSI', 'MPI'], color: 'amber' },
  { nom: 'CCINP (Concours Commun INP)', date: '2026-05-04', filieres: ['MP', 'PC', 'PSI', 'MPI', 'PCSI'], color: 'emerald' },
  { nom: 'Agro-Véto / G2E (BCPST)', date: '2026-04-28', filieres: ['BCPST'], color: 'green' }
];
