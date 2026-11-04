import { KholleSubject, KholleCorrection } from './cpgeData';

/**
 * Corrections officielles et modèles de rédaction pour les khôlles CPGE
 */
export const KNOWN_KHOLLE_CORRECTIONS: Record<string, KholleCorrection> = {
  'kholle-maths-spectre': {
    questionDeCours: {
      titre: 'Lemme des Noyaux & Décomposition de l\'Espace',
      redactionComplete: `### 1. Énoncé du Lemme des Noyaux
Soit $E$ un $\\mathbb{K}$-espace vectoriel, $u \\in \\mathcal{L}(E)$ et $P_1, P_2 \\in \\mathbb{K}[X]$ deux polynômes **premiers entre eux** ($\\mathrm{pgcd}(P_1, P_2) = 1$). Alors :
$$\\ker((P_1 P_2)(u)) = \\ker(P_1(u)) \\oplus \\ker(P_2(u))$$
De plus, les projecteurs associés à cette décomposition sont des polynômes en $u$.

### 2. Démonstration
1. **Identité de Bézout :**
   Puisque $\\mathrm{pgcd}(P_1, P_2) = 1$, le théorème de Bézout assure l'existence de deux polynômes $U, V \\in \\mathbb{K}[X]$ tels que :
   $$U P_1 + V P_2 = 1$$
   En évaluant en $u$, on obtient la relation d'endomorphismes :
   $$(U P_1)(u) + (V P_2)(u) = \\mathrm{id}_E$$

2. **Somme des deux noyaux :**
   Soit $x \\in \\ker((P_1 P_2)(u))$. On écrit :
   $$x = \\mathrm{id}_E(x) = (V P_2)(u)(x) + (U P_1)(u)(x)$$
   Posons $x_1 = (V P_2)(u)(x)$ et $x_2 = (U P_1)(u)(x)$.
   - $P_1(u)(x_1) = P_1(u)((V P_2)(u)(x)) = V(u)((P_1 P_2)(u)(x)) = V(u)(0) = 0$, donc $x_1 \\in \\ker(P_1(u))$.
   - De même, $P_2(u)(x_2) = U(u)((P_1 P_2)(u)(x)) = 0$, donc $x_2 \\in \\ker(P_2(u))$.
   Ainsi, $\\ker((P_1 P_2)(u)) \\subset \\ker(P_1(u)) + \\ker(P_2(u))$. L'inclusion réciproque est évidente car si $y \\in \\ker(P_1(u))$, $(P_1 P_2)(u)(y) = P_2(u)(P_1(u)(y)) = 0$.

3. **Caractère direct de la somme :**
   Soit $z \\in \\ker(P_1(u)) \\cap \\ker(P_2(u))$.
   $$z = \\mathrm{id}_E(z) = U(u)(P_1(u)(z)) + V(u)(P_2(u)(z)) = U(u)(0) + V(u)(0) = 0$$
   L'intersection est réduite au vecteur nul $\\{0\\}$.
   On a donc bien $\\ker((P_1 P_2)(u)) = \\ker(P_1(u)) \\oplus \\ker(P_2(u))$.

### 3. Application à la diagonalisabilité
Si $u$ admet un polynôme annulateur scindé à racines simples $P(X) = \\prod_{i=1}^p (X - \\lambda_i)$, avec les $\\lambda_i$ distincts deux à deux, les polynômes $(X - \\lambda_i)$ sont premiers entre eux deux à deux.
Par le lemme des noyaux généralisé :
$$E = \\ker(P(u)) = \\bigoplus_{i=1}^p \\ker(u - \\lambda_i \\mathrm{id}_E) = \\bigoplus_{i=1}^p E_{\\lambda_i}(u)$$
L'espace $E$ est somme directe de ses sous-espaces propres, ce qui prouve immédiatement que $u$ est **diagonalisable**.`,
      pointsVigilance: [
        'Ne jamais oublier la commutativité des polynômes d\'endomorphismes : $(P_1 P_2)(u) = P_1(u) \\circ P_2(u) = P_2(u) \\circ P_1(u)$.',
        'Vérifier que les projecteurs spectraux obtenus $p_1 = (V P_2)(u)$ et $p_2 = (U P_1)(u)$ vérifient bien $p_1 + p_2 = \\mathrm{id}$ et $p_1 \\circ p_2 = 0$.',
        'À l\'oral, énoncer explicitement l\'hypothèse de primalité avant d\'écrire Bézout.'
      ]
    },
    exerciceRecherche: {
      titre: 'Endomorphismes Antisymétriques en Dimension Finie',
      demarcheInitiale: `1. Pour les valeurs propres réelles, exploiter la définition de l'adjonction : $\\langle u(x), y \\rangle = \\langle x, u^*(y) \\rangle = -\\langle x, u(y) \\rangle$.
2. Pour l'orthogonalité de l'image et du noyau, utiliser la relation fondamentale $(\\mathrm{Im}(u))^\\perp = \\ker(u^*)$.
3. Pour la parité du rang, raisonner sur la restriction induite sur l'orthogonal du noyau ou sur les valeurs propres imaginaires pures conjuguées.`,
      solutionDetaillee: `### 1. Valeurs propres réelles de $u$
Soit $\\lambda \\in \\mathbb{R}$ une valeur propre réelle de $u$, et $x \\in E \\setminus \\{0\\}$ un vecteur propre associé ($u(x) = \\lambda x$).
Calculons le produit scalaire $\\langle u(x), x \\rangle$ de deux façons :
- D'une part : $\\langle u(x), x \\rangle = \\langle \\lambda x, x \\rangle = \\lambda \\|x\\|^2$.
- D'autre part, par antisymétrie : $\\langle u(x), x \\rangle = \\langle x, u^*(x) \\rangle = \\langle x, -u(x) \\rangle = -\\langle x, \\lambda x \\rangle = -\\lambda \\|x\\|^2$.
On en déduit :
$$2\\lambda \\|x\\|^2 = 0$$
Comme $x \\neq 0$, $\\|x\\|^2 > 0$, d'où nécessairement :
$$\\lambda = 0$$
**Conclusion :** La seule valeur propre réelle possible d'un endomorphisme antisymétrique est $0$.

---

### 2. Supplémentarité orthogonale de $\\ker(u)$ et $\\mathrm{Im}(u)$
Rappelons la propriété générale pour tout endomorphisme en dimension finie :
$$(\\mathrm{Im}(u))^\\perp = \\ker(u^*)$$
Comme $u^* = -u$, on a $\\ker(u^*) = \\ker(-u) = \\ker(u)$.
Par conséquent :
$$(\\mathrm{Im}(u))^\\perp = \\ker(u)$$
En dimension finie, un sous-espace vectoriel et son orthogonal sont supplémentaires orthogonaux dans $E$ :
$$E = \\ker(u) \\overset{\\perp}{\\oplus} \\mathrm{Im}(u)$$

---

### 3. Parité du rang de $u$
Posons $F = \\mathrm{Im}(u)$ et $r = \\dim(F) = \\mathrm{rg}(u)$.
- Le sous-espace $F$ est stable par $u$ car pour tout $y \\in F$, $u(y) \\in \\mathrm{Im}(u) = F$.
- Soit $v = u_{|F} \\in \\mathcal{L}(F)$ la restriction de $u$ à $F$.
  - $v$ est encore antisymétrique : pour tous $x, y \\in F$, $\\langle v(x), y \\rangle = \\langle u(x), y \\rangle = -\\langle x, u(y) \\rangle = -\\langle x, v(y) \\rangle$.
  - De plus, $\\ker(v) = \\ker(u) \\cap F = \\ker(u) \\cap \\mathrm{Im}(u) = \\{0\\}$.
  Donc $v$ est un automorphisme antisymétrique de $F$, ce qui implique $\\det(v) \\neq 0$.
- Calculons le déterminant de $v^*$ dans une base orthonormée de $F$ :
  $$v^* = -v \\implies \\det(v^*) = \\det(-v) = (-1)^r \\det(v)$$
  Or pour tout endomorphisme, $\\det(v^*) = \\det(v)$.
  On a donc :
  $$\\det(v) = (-1)^r \\det(v) \\iff (1 - (-1)^r) \\det(v) = 0$$
  Comme $\\det(v) \\neq 0$, on en déduit immédiatement :
  $$1 - (-1)^r = 0 \\implies (-1)^r = 1$$
  Ce qui prouve rigoureusement que $r = \\mathrm{rg}(u)$ est **pair**.`,
      conclusion: 'Le rang de tout endomorphisme antisymétrique d\'un espace euclidien est nécessairement pair, et sa matrice dans une base orthonormée bien choisie est diagonale par blocs $2 \\times 2$ de la forme $\\begin{pmatrix} 0 & -\\alpha_k \\\\ \\alpha_k & 0 \\end{pmatrix}$.'
    },
    conseilsKholleur: 'À l\'oral, soigner la présentation du déterminant sur le sous-espace stable $F = \\mathrm{Im}(u)$ : beaucoup d\'élèves essaient de calculer $\\det(u)$ sur $E$ entier, mais si $\\dim(E)$ est impaire, $\\det(u)=0$ et cela ne donne aucune information sur le rang !'
  },

  'kholle-physique-induction': {
    questionDeCours: {
      titre: 'Théorème de Poynting & Bilan d\'Énergie Électromagnétique',
      redactionComplete: `### 1. Position du problème & Identité vectorielle
Considérons un volume $V$ délimité par une surface fermée $\\Sigma$.
L'identité d'analyse vectorielle sur le produit vectoriel s'écrit :
$$\\mathrm{div}(\\vec{E} \\wedge \\vec{B}) = \\vec{B} \\cdot \\vec{\\mathrm{rot}}\\,\\vec{E} - \\vec{E} \\cdot \\vec{\\mathrm{rot}}\\,\\vec{B}$$

### 2. Injection des équations de Maxwell
Dans le vide en présence de charges et courants $(\\rho, \\vec{j})$ :
- Maxwell-Faraday : $\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$
- Maxwell-Ampère : $\\vec{\\mathrm{rot}}\\,\\vec{B} = \\mu_0 \\vec{j} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$

Substituons ces expressions :
$$\\mathrm{div}\\left(\\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}\\right) = \\frac{1}{\\mu_0}\\vec{B} \\cdot \\left(-\\frac{\\partial \\vec{B}}{\\partial t}\\right) - \\frac{1}{\\mu_0}\\vec{E} \\cdot \\left(\\mu_0 \\vec{j} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}\\right)$$
Remarquons que $\\vec{B} \\cdot \\frac{\\partial \\vec{B}}{\\partial t} = \\frac{1}{2}\\frac{\\partial (B^2)}{\\partial t}$ et $\\vec{E} \\cdot \\frac{\\partial \\vec{E}}{\\partial t} = \\frac{1}{2}\\frac{\\partial (E^2)}{\\partial t}$.
Il vient :
$$\\mathrm{div}\\left(\\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}\\right) = -\\frac{\\partial}{\\partial t}\\left( \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0} \\right) - \\vec{j}\\cdot\\vec{E}$$

### 3. Définition des grandeurs
En introduisant :
- La **densité volumique d'énergie électromagnétique** : $u_{em} = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0}$
- Le **vecteur de Poynting** : $\\vec{\\Pi} = \\frac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}$
L'équation locale de Poynting s'écrit :
$$\\frac{\\partial u_{em}}{\\partial t} + \\mathrm{div}\\,\\vec{\\Pi} = -\\vec{j} \\cdot \\vec{E}$$

### 4. Forme intégrale et interprétation
En intégrant sur un volume fixe $V$ et en appliquant le théorème de Green-Ostrogradski :
$$\\frac{\\mathrm{d}U_{em}}{\\mathrm{d}t} = - \\iint_\\Sigma \\vec{\\Pi} \\cdot \\mathrm{d}\\vec{S}_{ext} - \\iiint_V \\vec{j}\\cdot\\vec{E}\\,\\mathrm{d}\\tau$$
- Le terme $-\\vec{j}\\cdot\\vec{E}$ représente la puissance volumique cédée par le champ électromagnétique aux porteurs de charge (effet Joule, travail mécanique de la force de Lorentz).`,
      pointsVigilance: [
        'Bien préciser que $\\mathrm{d}\\vec{S}$ est orienté vers l\'EXTÉRIEUR du volume, d\'où le signe moins pour la puissance qui entre.',
        'Vérifier les dimensions du vecteur de Poynting : $\\mathrm{W\\cdot m^{-2}}$, flux surfacique de puissance.',
        'Expliquer que dans un conducteur ohmique ($\\vec{j} = \\gamma \\vec{E}$), $\\vec{j}\\cdot\\vec{E} = \\gamma E^2 = \\frac{j^2}{\\gamma} \\ge 0$, ce qui correspond à une dissipation irréversible en chaleur.'
      ]
    },
    exerciceRecherche: {
      titre: 'Chute d\'un Cadre Conducteur dans un Champ Magnétique & Vitesse Limite',
      demarcheInitiale: `1. Choisir une orientation du contour pour définir le sens de circulation du courant $i(t)$ et le flux $\\Phi(t)$.
2. Calculer la fem induite par la loi de Faraday $e = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}$ et en déduire le courant $i(t) = e/R$.
3. Exprimer la résultante des forces de Laplace sur le cadre.
4. Appliquer le PFD pour obtenir l'équation différentielle du mouvement et faire le bilan énergétique.`,
      solutionDetaillee: `### 1. Flux magnétique & Force électromotrice induite
Soit un axe vertical $(Ox)$ dirigé vers le bas. À l'instant $t$, le bas du cadre est à la cote $x(t)$, avec une longueur immergée $x(t)$.
Le flux du champ $\\vec{B} = B_0 \\vec{u}_z$ à travers la surface du cadre orientée vers $+z$ est :
$$\\Phi(t) = \\iint \\vec{B} \\cdot \\mathrm{d}\\vec{S} = B_0 a x(t)$$
D'après la loi de Faraday :
$$e(t) = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = -B_0 a \\dot{x}(t) = -B_0 a v(t)$$
En négligeant l'auto-inductance, l'intensité algébrique circulant dans le cadre est :
$$i(t) = \\frac{e(t)}{R} = -\\frac{B_0 a v(t)}{R}$$

---

### 2. Force de Laplace & Équation du mouvement
La force de Laplace ne s'exerce que sur le côté inférieur immergé de longueur $a$ (sur les côtés latéraux, les forces se compensent par symétrie) :
$$\\vec{F}_L = i(t) \\vec{a} \\wedge \\vec{B} = \\left(-\\frac{B_0 a v(t)}{R}\\right) (a \\vec{u}_y) \\wedge (B_0 \\vec{u}_z) = -\\frac{B_0^2 a^2}{R} v(t) \\vec{u}_x$$
Cette force est bien opposée à la vitesse $\\vec{v}(t)$ : c'est une **force de freinage électromagnétique** conforme à la loi de modération de Lenz.

Appliquons le principe fondamental de la dynamique sur l'axe vertical $(Ox)$ :
$$m \\frac{\\mathrm{d}v}{\\mathrm{d}t} = m g - \\frac{B_0^2 a^2}{R} v(t)$$
Soit sous forme canonique :
$$\\frac{\\mathrm{d}v}{\\mathrm{d}t} + \\frac{1}{\\tau} v(t) = g \\quad \\text{avec} \\quad \\tau = \\frac{m R}{B_0^2 a^2}$$
La vitesse limite stationnaire atteinte lorsque $\\frac{\\mathrm{d}v}{\\mathrm{d}t} = 0$ est :
$$v_{lim} = g \\tau = \\frac{m g R}{B_0^2 a^2}$$

---

### 3. Bilan énergétique intégral
Multiplions l'équation du PFD par $v(t)$ :
$$m v \\frac{\\mathrm{d}v}{\\mathrm{d}t} = m g v(t) - \\frac{B_0^2 a^2 v(t)^2}{R}$$
Or $\\frac{\\mathrm{d}E_c}{\\mathrm{d}t} = m v \\frac{\\mathrm{d}v}{\\mathrm{d}t}$, $\\mathcal{P}(poids) = m g v = -\\frac{\\mathrm{d}E_p}{\\mathrm{d}t}$, et la puissance dissipée par effet Joule est $R i(t)^2 = \\frac{B_0^2 a^2 v^2}{R} = \\mathcal{P}_J$.
On a donc exactement :
$$\\frac{\\mathrm{d}(E_c + E_p)}{\\mathrm{d}t} = -\\mathcal{P}_J(t)$$
Toute l'énergie mécanique perdue par le cadre est intégralement dissipée par effet Joule dans la résistance $R$ du circuit.`,
      conclusion: 'Le freinage par induction électromagnétique est le principe fondamental des ralentisseurs électromagnétiques (Telma) pour camions et des freins d\'urgence de trains à sustentation magnétique.'
    },
    conseilsKholleur: 'Veiller à orienter le cadre dès le début au brouillon. Justifier impérativement pourquoi l\'auto-inductance $L$ est négligeable (comparaison du temps de réponse inductif $L/R$ au temps mécanique $\\tau$).'
  },

  'kholle-maths-series-abel': {
    questionDeCours: {
      titre: 'Lemme d\'Abel, Rayon de Convergence & Continuité',
      redactionComplete: `### 1. Lemme d'Abel
Soit $\\sum a_n z^n$ une série entière. S'il existe $z_0 \\in \\mathbb{C}^*$ tel que la suite $(a_n z_0^n)_{n \\in \\mathbb{N}}$ soit bornée, alors pour tout $z \\in \\mathbb{C}$ vérifiant $|z| < |z_0|$ :
1. La série $\\sum a_n z^n$ converge absolument.
2. Pour tout $r < |z_0|$, la série converge normalement sur le disque fermé $\\overline{D}(0, r)$.

**Démonstration :**
Puisque $(a_n z_0^n)$ est bornée, il existe $M > 0$ tel que $\\forall n, |a_n z_0^n| \\le M$.
Soit $z \\in \\mathbb{C}$ tel que $|z| < |z_0|$. Écrivons :
$$|a_n z^n| = |a_n z_0^n| \\left|\\frac{z}{z_0}\\right|^n \\le M q^n \\quad \\text{avec} \\quad q = \\left|\\frac{z}{z_0}\\right| < 1$$
Comme $0 \\le q < 1$, la série géométrique $\\sum q^n$ converge.
Par comparaison de séries à termes positifs, $\\sum |a_n z^n|$ converge, donc $\\sum a_n z^n$ converge absolument.
De plus, si $|z| \\le r < |z_0|$, $\\sup_{|z| \\le r} |a_n z^n| \\le M (r/|z_0|)^n$, terme général d'une série convergente, d'où la convergence normale sur $\\overline{D}(0, r)$.

### 2. Définition du rayon de convergence
Le rayon de convergence $R \\in [0, +\\infty]$ est défini par :
$$R = \\sup\\{ r \\ge 0 \\mid (a_n r^n) \\text{ est bornée} \\}$$
Conséquence fondamentale :
- Si $|z| < R$, la série converge absolument.
- Si $|z| > R$, le terme général $a_n z^n$ ne tend même pas vers 0, donc la série diverge grossièrement.

### 3. Continuité et dérivation terme à terme
Sur le disque ouvert $D(0, R)$, la somme $S(z) = \\sum_{n=0}^\\infty a_n z^n$ est continue et de classe $\\mathcal{C}^\\infty$.
Elle est dérivable terme à terme à tout ordre, et sa série dérivée a le même rayon de convergence $R$.`,
      pointsVigilance: [
        'Préciser que sur le cercle frontière $|z| = R$, on ne peut rien dire a priori : il faut étudier le cas au cas par cas.',
        'La convergence n\'est généralement pas uniforme sur le disque ouvert $D(0, R)$, mais seulement sur tout compact contenu dans $D(0, R)$.'
      ]
    },
    exerciceRecherche: {
      titre: 'Sommation de la Série Harmonique Alternée & Théorème Radial d\'Abel',
      demarcheInitiale: `1. Déterminer le rayon de convergence par la règle de d'Alembert sur le terme général.
2. Pour $|x| < 1$, dériver terme à terme pour reconnaître une série géométrique connue, puis réintégrer.
3. Étudier la convergence en $x=1$ via le critère spécial des séries alternées et majorer le reste pour prouver la convergence uniforme sur $[0, 1]$.`,
      solutionDetaillee: `### 1. Rayon de convergence
Soit $a_n = \\frac{(-1)^{n-1}}{n}$.
$$\\left| \\frac{a_{n+1}}{a_n} \\right| = \\frac{n}{n+1} \\xrightarrow[n \\to \\infty]{} 1$$
D'après la règle de d'Alembert, le rayon de convergence est $R = 1$.

---

### 2. Calcul de la somme sur $]-1, 1[$
Pour tout $x \\in ]-1, 1[$, la somme $S(x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} x^n$ est de classe $\\mathcal{C}^\\infty$ et on peut dériver terme à terme :
$$S'(x) = \\sum_{n=1}^\\infty (-1)^{n-1} x^{n-1} = \\sum_{k=0}^\\infty (-x)^k$$
Pour $|-x| < 1$, c'est la somme d'une série géométrique de raison $-x$ :
$$S'(x) = \\frac{1}{1 - (-x)} = \\frac{1}{1 + x}$$
En intégrant entre 0 et $x$ avec la condition initiale $S(0) = 0$ :
$$S(x) = \\int_0^x \\frac{\\mathrm{d}t}{1+t} = \\ln(1 + x)$$

---

### 3. Convergence en $x=1$ et passage à la limite
En $x = 1$, la série devient $\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n}$.
La suite $(1/n)$ est positive, décroissante et tend vers 0. D'après le **critère spécial des séries alternées (CSSA)** :
- La série converge en $x=1$.
- Le reste d'ordre $N$, $R_N(x) = \\sum_{n=N+1}^\\infty \\frac{(-1)^{n-1}}{n} x^n$, est majoré pour tout $x \\in [0, 1]$ par la valeur absolue de son premier terme :
$$|R_N(x)| \\le \\frac{x^{N+1}}{N+1} \\le \\frac{1}{N+1}$$
Cette majoration est indépendante de $x \\in [0, 1]$ et tend vers 0 lorsque $N \\to \\infty$.
La série converge donc **uniformément sur $[0, 1]$**.
La somme $S$ est ainsi continue sur $[0, 1]$, et par continuité en 1 :
$$\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} = S(1) = \\lim_{x \\to 1^-} S(x) = \\lim_{x \\to 1^-} \\ln(1 + x) = \\ln 2$$`,
      conclusion: 'La méthode de sommation d\'Abel permet de prolonger continûment la somme jusqu\'au bord du disque de convergence.'
    },
    conseilsKholleur: 'Bien justifier l\'interversion limite-somme en 1 par la convergence uniforme obtenue via la majoration du reste alterné (théorème de continuité d\'une somme de série de fonctions).'
  },

  'kholle-physique-michelson': {
    questionDeCours: {
      titre: 'Interféromètre de Michelson en Lame d\'Air & Anneaux d\'Égale Inclinaison',
      redactionComplete: `### 1. Principe & Schéma optique
L'interféromètre de Michelson est composé :
- D'une source étendue monochromatique ou quasi-monochromatique.
- D'une lame séparatrice semi-réfléchissante inclinée à $45^\\circ$.
- D'une lame compensatrice identique, parallèle à la séparatrice.
- De deux miroirs plans $M_1$ et $M_2$ perpendiculaires entre eux.

### 2. Modélisation en lame d'air
L'image du miroir $M_2$ à travers la séparatrice est un miroir fictif $M'_2$.
Lorsque $M_1$ et $M'_2$ sont rigoureusement parallèles et distants de $e$, le dispositif est équivalent à une **lame d'air à faces parallèles d'épaisseur $e$**.

### 3. Différence de marche
Pour un rayon incident frappant la lame avec un angle d'inclinaison $i$ par rapport à la normale :
$$\\delta = 2 e \\cos i$$
(En tenant compte du déphasage de $\\pi$ par réflexion métallique ou diélectrique, $\\delta = 2 e \\cos i \\pm \\frac{\\lambda}{2}$).

### 4. Franges d'égale inclinaison
Le lieu des points où l'intensité est constante correspond aux points ayant le même angle d'incidence $i = \\mathrm{cste}$.
Pour observer ces rayons, on place une lentille convergente de distance focale $f'$. Les rayons incidents d'angle $i$ convergent dans le plan focal image en des cercles de rayon $r = f' \\tan i \\approx f' i$.
On observe donc des **anneaux concentriques brillants et sombres**.`,
      pointsVigilance: [
        'Ordre d\'interférence au centre : $p_0 = \\frac{2e}{\\lambda}$ est MAXIMAL au centre ($i=0$). Quand $i$ augmente, $\\cos i$ diminue donc $p(i)$ décroît : les anneaux sont de plus en plus resserrés vers l\'extérieur !',
        'Ne jamais oublier d\'expliquer la nécessité d\'une source étendue pour observer des anneaux à l\'infini.'
      ]
    },
    exerciceRecherche: {
      titre: 'Brouillage & Doublet du Sodium dans le Michelson',
      demarcheInitiale: `1. Considérer que les raies $\\lambda_1$ et $\\lambda_2$ sont mutuellement incohérentes : les intensités s'ajoutent $I_{tot} = I_1 + I_2$.
2. Écrire chaque intensité selon la formule de Fresnel $I_k = I_0 (1 + \\cos(2\\pi \\delta / \\lambda_k))$.
3. Factoriser par une identité trigonométrique pour faire apparaître la modulation de contraste.`,
      solutionDetaillee: `### 1. Somme des intensités des deux raies indépendantes
Les atomes de sodium émettent les deux longueurs d'onde $\\lambda_1$ et $\\lambda_2$ sans relation de phase cohérente :
$$I_{tot} = I_1 + I_2 = I_0 \\left(1 + \\cos\\left(\\frac{2\\pi \\delta}{\\lambda_1}\\right)\\right) + I_0 \\left(1 + \\cos\\left(\\frac{2\\pi \\delta}{\\lambda_2}\\right)\\right)$$
$$I_{tot} = 2 I_0 + I_0 \\left[ \\cos\\left(\\frac{2\\pi \\delta}{\\lambda_1}\\right) + \\cos\\left(\\frac{2\\pi \\delta}{\\lambda_2}\\right) \\right]$$

---

### 2. Formule de Fresnel et modulation d'amplitude
Utilisons la relation $\\cos p + \\cos q = 2 \\cos\\left(\\frac{p+q}{2}\\right) \\cos\\left(\\frac{p-q}{2}\\right)$ avec :
$$\\frac{1}{\\lambda_1} + \\frac{1}{\\lambda_2} \\approx \\frac{2}{\\lambda_m} \\quad \\text{et} \\quad \\frac{1}{\\lambda_1} - \\frac{1}{\\lambda_2} = \\frac{\\lambda_2 - \\lambda_1}{\\lambda_1 \\lambda_2} \\approx \\frac{\\Delta \\lambda}{\\lambda_m^2}$$
Il vient :
$$I_{tot}(\\delta) = 2 I_0 \\left[ 1 + \\cos\\left( \\frac{\\pi \\Delta\\lambda}{\\lambda_m^2} \\delta \\right) \\cos\\left( \\frac{2\\pi}{\\lambda_m} \\delta \\right) \\right]$$

Le **contraste (ou visibilité)** des franges est :
$$V = \\left| \\cos\\left( \\frac{\\pi \\Delta\\lambda}{\\lambda_m^2} \\delta \\right) \\right| = \\left| \\cos\\left( \\frac{2\\pi \\Delta\\lambda}{\\lambda_m^2} e \\cos i \\right) \\right|$$

---

### 3. Brouillage & Calcul de la translation $\\Delta e$
Les franges disparaissent (brouillage complet, contraste nul $V=0$) lorsque le terme de modulation s'annule :
$$\\frac{2\\pi \\Delta\\lambda}{\\lambda_m^2} e_k = \\frac{\\pi}{2} + k\\pi$$
Entre deux extinctions successives ($k$ et $k+1$), l'épaisseur $e$ varie de :
$$\\Delta e = \\frac{\\lambda_m^2}{2 \\Delta\\lambda}$$
Application numérique avec $\\lambda_m \\approx 589,3\\text{ nm} = 5,893 \\cdot 10^{-7}\\text{ m}$ et $\\Delta\\lambda = 0,6\\text{ nm} = 6 \\cdot 10^{-10}\\text{ m}$ :
$$\\Delta e = \\frac{(5,893 \\cdot 10^{-7})^2}{2 \\times 6 \\cdot 10^{-10}} \\approx \\frac{3,47 \\cdot 10^{-13}}{1,2 \\cdot 10^{-9}} \\approx 0,289\\text{ mm} \\approx 0,29\\text{ mm}$$`,
      conclusion: 'Le déplacement micrométrique du miroir entre deux brouillages permet de mesurer des écarts spectraux $\\Delta\\lambda$ avec une précision nanométrique inaccessible aux spectromètres classiques.'
    },
    conseilsKholleur: 'L\'examinateur appréciera si l\'élève précise le lien avec la transformée de Fourier de la raie spectrale : l\'interférogramme est proportionnel au module de la transformée de Fourier de la densité spectrale d\'intensité.'
  },

  'kholle-chimie-pourbaix': {
    questionDeCours: {
      titre: 'Diagrammes Potentiel-pH & Tracé des Frontières',
      redactionComplete: `### 1. Conventions de tracé
Dans un diagramme de Pourbaix ($E\\text{-pH}$), les espèces en solution aqueuse sont séparées par des frontières correspondant à l'égalité des concentrations des espèces solubles :
$$[Fe^{3+}] = [Fe^{2+}] = \\frac{C_t}{2} \\quad \\text{ou} \\quad [Fe^{2+}] = C_t = 10^{-2}\\text{ mol/L}$$
Pour une frontière solide/solution, la frontière est atteinte dès l'apparition du premier grain de précipité solide ($[Fe^{2+}] = C_t$).

### 2. Frontière redox $Fe^{3+} / Fe^{2+}$
Demi-équation électronique :
$$Fe^{3+} + e^- = Fe^{2+}$$
D'après la formule de Nernst à 298 K :
$$E = E^\\circ(Fe^{3+}/Fe^{2+}) + \\frac{0,059}{1} \\log \\frac{[Fe^{3+}]}{[Fe^{2+}]}$$
Sur la frontière, $[Fe^{3+}] = [Fe^{2+}]$, donc :
$$E = E^\\circ(Fe^{3+}/Fe^{2+}) = 0,77\\text{ V}$$
C'est une **droite horizontale**, indépendante du pH (car aucun proton $H^+$ n'est échangé).

### 3. Frontière métal/ion $Fe^{2+} / Fe(s)$
Demi-équation électronique :
$$Fe^{2+} + 2e^- = Fe(s)$$
Formule de Nernst :
$$E = E^\\circ(Fe^{2+}/Fe) + \\frac{0,059}{2} \\log [Fe^{2+}]$$
Avec $[Fe^{2+}] = C_t = 10^{-2}\\text{ mol/L}$ :
$$E = -0,44 + 0,0295 \\times (-2) = -0,44 - 0,059 = -0,50\\text{ V}$$
C'est également une droite horizontale à $E = -0,50\\text{ V}$.`,
      pointsVigilance: [
        'Vérifier le nombre d\'électrons échangés ($n=1$ pour $Fe^{3+}/Fe^{2+}$, $n=2$ pour $Fe^{2+}/Fe$).',
        'Ne pas confondre la concentration totale de tracé $C_t$ et la concentration à la frontière entre deux espèces solubles.',
        'Les oxydes et hydroxydes solides ont une activité conventionnelle égale à 1.'
      ]
    },
    exerciceRecherche: {
      titre: 'Corrosion du Fer & Protection Cathodique par Anode Sacrificielle',
      demarcheInitiale: `1. Superposer les droites de l'eau ($E(O_2/H_2O) = 1,23 - 0,059\\mathrm{pH}$ et $E(H^+/H_2) = 0 - 0,059\\mathrm{pH}$).
2. Repérer le domaine de pH = 7 dans une eau aérée et comparer les potentiels redox.
3. Écrire la réaction spontanée entre le réducteur le plus fort et l'oxydant le plus fort (règle du gamma).
4. Expliquer le couplage galvanique avec le zinc.`,
      solutionDetaillee: `### 1. Domaines d'immunité, corrosion et passivation
- **Immunité :** Le fer métallique $Fe(s)$ est thermodynamiquement stable. Tout risque de corrosion est exclu.
- **Corrosion :** Le fer s'oxyde en ions solubles ($Fe^{2+}$ ou $Fe^{3+}$ en milieu très acide). La matière solide se dissout et la structure métallique est détruite.
- **Passivation :** Le fer s'oxyde en hydroxyde ou oxyde solide protecteur ($Fe(OH)_3$, $Fe_2O_3$). Si la couche est compacte, elle peut bloquer cinétiquement la corrosion.

---

### 2. Stabilité dans une eau aérée à pH = 7
À $\\mathrm{pH} = 7$, calculons les potentiels :
- Pour l'eau aérée saturée en $O_2$ ($P_{O_2} = 0,2\\text{ bar}$) :
$$E(O_2/H_2O) = 1,23 - 0,059 \\times 7 \\approx 1,23 - 0,413 = 0,817\\text{ V}$$
- Pour le couple $Fe^{2+}/Fe(s)$ à la frontière de corrosion :
$$E = -0,50\\text{ V}$$
Puisque $E(O_2/H_2O) \\gg E(Fe^{2+}/Fe)$, la règle du gamma thermodynamique indique une réaction spontanée et totale entre $Fe(s)$ et $O_2$ :
$$2 Fe(s) + O_2(g) + 2 H_2O = 2 Fe^{2+} + 4 OH^-$$
Suivie de la précipitation de la rouille $Fe(OH)_3$ ou $Fe_2O_3 \\cdot n H_2O$.
**Conclusion :** Le fer est thermodynamiquement **très instable** en eau aérée à pH neutre et se corrode spontanément.

---

### 3. Principe de l'anode sacrificielle (Zinc)
Pour protéger la coque en fer, on fixe des blocs de zinc ($E^\\circ(Zn^{2+}/Zn) = -0,76\\text{ V}$) :
- Le couple $Zn^{2+}/Zn$ est plus réducteur que $Fe^{2+}/Fe$ ($-0,76\\text{ V} < -0,44\\text{ V}$).
- Par contact électrique, le zinc devient l'**anode** et s'oxyde préférentiellement :
$$Zn(s) \\to Zn^{2+} + 2e^-$$
- Les électrons libérés s'écoulent vers la coque en fer, polarisant celle-ci cathodiquement dans son domaine d'immunité.
- L'anode de zinc est ainsi consommée ("sacrifiée") et doit être remplacée périodiquement lors des carénages.`,
      conclusion: 'La protection par anode sacrificielle abaisse le potentiel du métal à protéger en dessous de son potentiel d\'équilibre de corrosion sans apport extérieur de courant.'
    },
    conseilsKholleur: 'À l\'oral, toujours dessiner le schéma du couplage avec les électrons circulant dans le métal et les ions circulant dans l\'électrolyte (eau de mer) pour boucler le circuit électrique.'
  },

  'kholle-info-abr-progdyn': {
    questionDeCours: {
      titre: 'Arbres Binaires de Recherche (ABR) & Complexités',
      redactionComplete: `### 1. Définition formelle d'un ABR
Un Arbre Binaire de Recherche est un arbre binaire étiqueté tel que pour chaque nœud $u$ de clé $x$ :
- Toutes les clés des nœuds du sous-arbre gauche de $u$ sont **inférieures ou égales** à $x$.
- Toutes les clés des nœuds du sous-arbre droit de $u$ sont **strictement supérieures** à $x$.

### 2. Algorithme d'insertion en Python
\`\`\`python
class Noeud:
    def __init__(self, cle, gauche=None, droit=None):
        self.cle = cle
        self.gauche = gauche
        self.droit = droit

def inserer(racine, cle):
    """Insère récursivement une clé dans l'ABR."""
    if racine is None:
        return Noeud(cle)
    if cle <= racine.cle:
        racine.gauche = inserer(racine.gauche, cle)
    else:
        racine.droit = inserer(racine.droit, cle)
    return racine
\`\`\`

### 3. Analyse de complexité
À chaque étape, on descend d'un niveau dans l'arbre.
Le coût temporel dans le pire des cas est donc proportionnel à la **hauteur** $h$ de l'arbre : $\\mathcal{O}(h)$.
- **Pire des cas :** Si les clés sont insérées dans l'ordre croissant ou décroissant, l'arbre devient filiforme (une liste chaînée) et $h = n$. La complexité est alors en $\\mathcal{O}(n)$.
- **Cas moyen :** Pour un ordre d'insertion aléatoire uniforme, l'arbre est bien équilibré et son espérance de hauteur vérifie $h = \\mathcal{O}(\\log n)$. La recherche et l'insertion coûtent en moyenne $\\mathcal{O}(\\log n)$.`,
      pointsVigilance: [
        'Préciser la convention adoptée pour les doublons (stricte infériorité ou large infériorité à gauche).',
        'Le parcours infixe d\'un ABR restitue toujours les éléments triés dans l\'ordre croissant en temps linéaire $\\mathcal{O}(n)$.'
      ]
    },
    exerciceRecherche: {
      titre: 'Problème du Cambrioleur (House Robber) & Programmation Dynamique',
      demarcheInitiale: `1. Définir le sous-problème : $OPT(i)$ est le gain maximal atteignable en considérant les maisons de 0 à $i$.
2. Établir l'alternative binaire : soit la maison $i$ est cambriolée (interdisant la maison $i-1$), soit elle est épargnée.
3. Écrire la relation de récurrence de Bellman et les conditions aux limites.
4. Optimiser l'espace mémoire en ne conservant que les deux dernières valeurs.`,
      solutionDetaillee: `### 1. Équation de récurrence de Bellman
À la maison $i$ (valeur $v[i]$), deux choix mutuellement exclusifs se présentent :
1. **Ne pas cambrioler la maison $i$ :** Le gain maximal est alors simplement le gain maximal obtenu avec les $i-1$ premières maisons, soit $OPT(i-1)$.
2. **Cambrioler la maison $i$ :** On encaisse le gain $v[i]$. Mais on ne peut pas cambrioler la maison voisine $i-1$. Le gain additionnel est donc le gain maximal sur les maisons jusqu'à $i-2$, soit $OPT(i-2) + v[i]$.

On en déduit l'équation optimale :
$$OPT(i) = \\max(OPT(i-1), OPT(i-2) + v[i])$$

Conditions initiales :
- $OPT(0) = v[0]$
- $OPT(1) = \\max(v[0], v[1])$

---

### 2. Implémentation itérative optimale en $\\mathcal{O}(n)$ temps et $\\mathcal{O}(1)$ mémoire
\`\`\`python
def max_butin(valeurs: list[int]) -> int:
    n = len(valeurs)
    if n == 0:
        return 0
    if n == 1:
        return valeurs[0]
    
    # prev2 correspond à OPT(i-2) et prev1 à OPT(i-1)
    prev2 = valeurs[0]
    prev1 = max(valeurs[0], valeurs[1])
    
    for i in range(2, n):
        actuel = max(prev1, prev2 + valeurs[i])
        prev2 = prev1
        prev1 = actuel
        
    return prev1
\`\`\`

### 3. Complexité
- **Temporelle :** Une seule boucle \`for\` de taille $n-2$, effectuant des opérations en $\\mathcal{O}(1)$. Complexité temporelle strictement $\\mathcal{O}(n)$.
- **Spatiale :** Seulement trois variables scalaires (\`prev2\`, \`prev1\`, \`actuel\`). Complexité spatiale optimale en $\\mathcal{O}(1)$.`,
      conclusion: 'La programmation dynamique résout les problèmes d\'optimisation à sous-structure optimale et chevauchement de sous-problèmes en transformant une complexité exponentielle $\\mathcal{O}(2^n)$ en une complexité linéaire $\\mathcal{O}(n)$.'
    },
    conseilsKholleur: 'L\'examinateur teste la capacité du candidat à passer immédiatement de la récurrence mathématique à une implémentation sans surcoût mémoire (remplacer le tableau de taille $n$ par deux registres).'
  }
};

/**
 * Générateur universel de correction pour tout sujet de khôlle CPGE
 */
export function getKholleCorrection(kholle: KholleSubject): KholleCorrection {
  // 1. Correction explicite attachée au sujet
  if (kholle.correction) {
    return kholle.correction;
  }

  // 2. Correction stockée dans le dictionnaire
  if (KNOWN_KHOLLE_CORRECTIONS[kholle.id]) {
    return KNOWN_KHOLLE_CORRECTIONS[kholle.id];
  }

  // 3. Synthèse méthodique rigoureuse basée sur les données réelles du sujet
  const pointsClesFormatted = kholle.questionDeCours.pointsCles
    .map((pt, idx) => `**Étape ${idx + 1} :** ${pt}`)
    .join('\n\n');

  const piegesText = kholle.questionsPiegesKholleur && kholle.questionsPiegesKholleur.length > 0
    ? kholle.questionsPiegesKholleur.map(p => `« ${p.question} » → Réponse attendue : ${p.reponseAttendue} (Piège : ${p.piegeAEviter})`).join('\n\n')
    : 'Soigner la rigueur des hypothèses et l\'écriture systématique des quantificateurs dès la première ligne.';

  const hintsSteps = kholle.exerciceRecherche.indicationsKholleur
    .map((ind, idx) => ({
      titre: `Étape ${idx + 1} : Déblocage & Raisonnement guidé`,
      detail: `Condition d'application : ${ind.condition}.\n\nIndication clé : ${ind.aide}`,
      calculs: undefined
    }));

  return {
    questionDeCours: {
      titre: `Correction : ${kholle.titre} — Question de Cours`,
      redactionComplete: `### Énoncé Officiel
${kholle.questionDeCours.enonce}

---

### Démarche & Points de Passage Obligatoires pour le Jury
Pour obtenir l'intégralité du barème (${kholle.questionDeCours.baremeCours} points), la démonstration doit comporter l'ensemble des articulations logiques suivantes :

${pointsClesFormatted}

---

### Rédaction Modèle au Tableau
1. **Positionnement des hypothèses et notations :** Toujours commencer par définir l'espace de travail, les ensembles de départ et d'arrivée, ainsi que les lois de composition ou les systèmes physiques considérés.
2. **Démonstration séquentielle :** Éviter les calculs massifs sans phrase d'introduction. Chaque transition doit être justifiée par un théorème explicitement nommé (ex: théorème spectral, lemme d'Abel, lois de Maxwell, théorème du rang).
3. **Encadrement du résultat final :** Écrire la conclusion sous une forme claire, simplifiée et facilement vérifiable par le jury.`,
      pointsVigilance: [
        'Ne jamais omettre de préciser l\'ensemble de définition ou le domaine de validité des expressions.',
        'Anticiper les relances de l\'examinateur sur les cas pathologiques (dimension nulle, pôles en zéro, singularités).',
        piegesText
      ]
    },
    exerciceRecherche: {
      titre: `Correction : Exercice de Recherche (${kholle.exerciceRecherche.baremeExo} pts)`,
      demarcheInitiale: `1. **Analyse de l'énoncé :** Identifier clairement les données, les inconnues et les ordres de grandeur ou invariants.
2. **Exploitation des indices du jury :** Tester d'abord les cas particuliers ($n=1, 2$, régime permanent, symétries) pour intuitionner la solution générale.
3. **Mise en équation :** Poser les variables canoniques et dérouler le calcul pas à pas.`,
      etapes: hintsSteps,
      solutionDetaillee: `### Résolution Pas à Pas
${kholle.exerciceRecherche.enonce}

#### 1. Analyse au Brouillon & Stratégie
L'exercice demande de mobiliser les outils fondamentaux de la filière ${kholle.filiere}.
Les indications prévues par le khôlleur mettent en lumière les étapes de franchissement clés :
${kholle.exerciceRecherche.indicationsKholleur.map(h => `- *${h.condition}* : ${h.aide}`).join('\n')}

#### 2. Déroulement du Calcul et Démonstration
En suivant cette feuille de route :
- On explicite le système ou la structure mathématique.
- On applique les théorèmes aux bornes ou les théorèmes d'analyse/d'algèbre adaptés.
- On simplifie les relations pour parvenir à la formule close ou à la propriété topologique/algébrique voulue.

#### 3. Interprétation et Contrôle de Validité
Vérifier systématiquement :
- L'homogénéité physique (analyse dimensionnelle) ou la cohérence des dimensions vectorielles.
- Le comportement aux limites (ex: lorsque le paramètre tend vers 0 ou vers $+\\infty$).`,
      conclusion: 'Prestation modèle : articulation claire, prise d\'initiative guidée et justification permanente des calculs intermédiaires.'
    },
    conseilsKholleur: 'Face à un blocage, ne restez jamais muet face au tableau : explicitez à voix haute ce que vous cherchez à faire (« Je cherche une relation entre... »). Le jury vous guidera immédiatement et valorisera votre démarche dynamique.'
  };
}
