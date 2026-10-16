---
title: 'Cours : Optique géométrique'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MP2I.'
---

## 📌 1. Définitions & Cadre d'étude

L'optique geometrique etudie la propagation de la lumiere lorsque les dimensions caracteristiques des systemes (obstacles, dioptres, miroirs) sont tres grandes devant la longueur d'onde $\lambda$ du rayonnement dans le vide ($\lambda \to 0$).

- **Rayon lumineux :** Modele geometrique representant la direction de propagation de l'energie lumineuse. Il est orthogonal aux surfaces d'onde.
- **Indice optique :** Pour un milieu transparent, homogene et isotrope, l'indice de refraction $n$ est defini par :
  $$n = \frac{c}{v}$$
  ou $c$ est la vitesse de la lumiere dans le vide et $v$ sa vitesse de phase dans le milieu ($n \ge 1$, $n_{\text{vide}} = 1$).
- **Stigmatisme :** Un systeme optique est dit stigmatique pour un point source $A$ si tous les rayons lumineux issus de $A$, apres traversee du systeme, convergent vers un meme point $A'$ (image reelle) ou emergent en donnant l'illusion de provenir de $A'$ (image virtuelle).
- **Aplanatisme :** Preservation de la taille et de l'orientation d'un objet orthogonal a l'axe optique.
- **Conditions de Gauss :** Conditions d'approximation ou les rayons lumineux incidents ont des angles d'incidence faibles par rapport a l'axe optique et sont peu eloignes du sommet du systeme. On effectue les approximations :
  $$\sin(\theta) \approx \theta, \quad \tan(\theta) \approx \theta, \quad \cos(\theta) \approx 1$$
  Ces conditions assurent le stigmatisme approche et l'aplanatisme du premier ordre.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Lois de Snell-Descartes (Formulation vectorielle)

Soit un dioptre separent deux milieux d'indices respectifs $n_1$ et $n_2$. Soit $\vec{u}_1$ le vecteur unitaire colineaire au rayon incident, $\vec{u}_2$ celui du rayon refracte et $\vec{n}$ le vecteur normal unitaire oriente du milieu 1 vers le milieu 2 au point d'incidence $I$.

Les lois de Descartes s'ecrivent :
1. Les rayons incident, refracte et la normale sont coplanaires.
2. Formule vectorielle de la refraction :
   $$\vec{n} \wedge (n_2 \vec{u}_2 - n_1 \vec{u}_1) = \vec{0}$$

### Chemin optique et Principe de Fermat

- **Chemin optique :** Le chemin optique $L(A, B)$ entre deux points $A$ et $B$ le long d'une trajectoire $\mathcal{C}$ est defini par :
  $$L(A, B) = \int_{\mathcal{C}} n(M) \, \mathrm{d}s$$
- **Principe de Fermat :** Le chemin optique reel suivi par la lumiere entre deux points fixes est extremal (stationnaire) par rapport aux variations de la trajectoire :
  $$\delta L(A, B) = 0$$

*Demonstration de la loi de Descartes de la refraction par le principe de Fermat :*
Soit un axe $(Ox)$ sur le dioptre separent $M_1(0, y_1, -h_1)$ et $M_2(0, y_2, h_2)$ avec les indices $n_1$ et $n_2$. Un point courant du dioptre a pour coordonnees $I(0, x, 0)$. Le chemin optique est :
$$L(x) = n_1 \sqrt{x^2 + y_1^2 + h_1^2} + n_2 \sqrt{(x - y_2)^2 + h_2^2}$$
La condition stationnaire $\frac{\mathrm{d}L}{\mathrm{d}x} = 0$ conduit a :
$$n_1 \frac{x}{\sqrt{x^2 + y_1^2 + h_1^2}} + n_2 \frac{x - y_2}{\sqrt{(x - y_2)^2 + h_2^2}} = 0$$
En reconnaissant les sinus des angles d'incidence $i_1$ et de refraction $i_2$ par rapport a la normale :
$$n_1 \sin(i_1) = n_2 \sin(i_2)$$

### Matrice de transfert (Optique paraxiale)

Un systeme optique centre est modelise par sa matrice de transferts $M \in \mathcal{M}_{2,2}(\mathbb{R})$ reliant les parametres paraxiaux (hauteur $y$ et angle d'inclinaison $\alpha$) d'un rayon entrant $(y_1, \alpha_1)$ a un rayon sortant $(y_2, \alpha_2)$ :
$$\begin{pmatrix} y_2 \\ \alpha_2 \end{pmatrix} = \begin{pmatrix} A & B \\ C & D \end{pmatrix} \begin{pmatrix} y_1 \\ \alpha_1 \end{pmatrix}$$

- **Homogeneite (Propagation dans un milieu d'indice $n$ sur une distance $e$) :**
  $$M_{\text{prop}} = \begin{pmatrix} 1 & \frac{e}{n} \\ 0 & 1 \end{pmatrix}$$
- **Refraction (Dioptre spherique de sommet $S$, de rayon $R$, separent $n_1$ et $n_2$) :**
  $$M_{\text{dioptre}} = \begin{pmatrix} 1 & 0 \\ -\frac{n_2 - n_1}{R n_2} & \frac{n_1}{n_2} \end{pmatrix}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Methode de calcul pour les systemes centres (Formules de conjugaison)

1. **Identifier l'axe optique** et orienter l'espace dans le sens de propagation de la lumiere.
2. **Repérer les elements cardinaux :** Sommet $S$, foyers principal objet $F$ et image $F'$.
3. **Utiliser les relations de conjugaison standard :**
   - **Origine au sommet (Descartes) :**
     $$\frac{n_2}{\overline{SA'}} - \frac{n_1}{\overline{SA}} = \frac{n_2 - n_1}{\overline{SC}}$$
   - **Origine au centre (Newton) :**
     $$\overline{FA} \cdot \overline{F'A'} = -f' f$$
4. **Calcul du grandissement transversal $\gamma_t$ :**
   $$\gamma_t = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{SA'}}{\overline{SA}} \cdot \frac{n_1}{n_2}$$

---

## ⚠️ 4. Pièges classiques aux Concours

- **Orientation des grandeurs algebriques :** Oublier que $\overline{SA}$ est une mesure algebrique. Tout ce qui va contre le sens de propagation de la lumiere est negatif.
- **Confusion entre foyers objet et image :** Pour une lentille divergente, le foyer principal objet $F$ est *apres* la lentille (dans le sens de propagation), et le foyer image $F'$ est *avant*.
- **Conditions de Gauss non verifiees :** Utiliser les formules de conjugaison paraxiales pour des faisceaux grands ou ouverts engendre des aberrations spheriques aberrantes.
- **Unites dans les calculs matriciels :** Verifier la dimension des elements de la matrice de transfert (certains elements sont sans dimension, d'autres en $\text{m}^{-1}$ ou en $\text{m}$).