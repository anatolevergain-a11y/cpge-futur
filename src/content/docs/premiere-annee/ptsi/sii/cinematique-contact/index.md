---
title: 'Cours : Cinématique du contact'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cours de Sciences Industrielles pour l'Ingénieur - PTSI
## Chapitre : Cinématique du contact

---

### Introduction et Position du Problème

En cinématique du solide, l'étude des liaisons mécaniques repose sur la modélisation géométrique des surfaces de contact entre les solides. La **cinématique du contact** s'attache à caractériser le mouvement relatif instantané de deux solides en contact ponctuel, linéique ou surfacique, en traduisant les conditions géométriques de non-interpénétration ou de roulement/glissement.

---

### 1. Modélisation du contact entre deux solides

Soit deux solides $S_1$ et $S_2$ en contact géométrique au point $I$. 
On note $\mathcal{R}_0$ le repère galiléen (ou d'étude) associé au projet d'étude.

#### Définitions fondamentales :
*   **Plan tangent commun ($\pi$)** : Pour des solides indéformables en contact régulier en $I$, c'est le plan tangent aux surfaces des solides au point $I$.
*   **Normale extérieure** : On définit $\vec{n}_{1 \to 2}$ le vecteur unitaire normal au contact, dirigé de $S_1$ vers $S_2$.

---

### 2. Vitesse de glissement et Champ des vitesses

#### Définition : Vitesse de glissement $\vec{V}_{G}(S_2/S_1)$
La vitesse de glissement du solide $S_2$ par rapport au solide $S_1$ au point de contact $I$ est par définition la vitesse du point géométrique de contact $I \in S_2$ par rapport au point coïncident $I \in S_1$ :
$$\vec{V}(I \in S_2 / S_1) = \left. \frac{d\vec{OI}}{dt} \right|_{\mathcal{R}_2} - \left. \frac{d\vec{OI}}{dt} \right|_{\mathcal{R}_1}$$

*Notation usuelle* : $\vec{V}_{gl}(I) = \vec{V}(I \in S_2 / S_1)$.

#### Théorème : Champ des vitesses de glissement
Le champ des vitesses de glissement dans le plan tangent $\pi$ obéit aux lois de la cinématique du solide indéformable :
$$\forall M \in \pi, \quad \vec{V}(M \in S_2 / S_1) = \vec{V}(I \in S_2 / S_1) + \vec{\Omega}(S_2/S_1) \wedge \overrightarrow{IM}$$

---

### 3. Classification cinématique des contacts ponctuels et linéiques

Selon les degrés de liberté autorisés ou contraints par la géométrie du contact, on distingue plusieurs comportements cinématiques fondamentaux :

#### A. Le contact strictement sans glissement (Adhérence parfaite)
La condition cinématique de non-glissement au point de contact $I$ s'exprime par :
$$\vec{V}(I \in S_2 / S_1) = \vec{0}$$

#### B. Le roulement pur
Il y a roulement pur si la vitesse de glissement est nulle et si le vecteur rotation instantanée n'a pas de composante normale (pas de pivotement pur). 
$$\vec{V}(I \in S_2 / S_1) = \vec{0} \quad \text{et} \quad \vec{\Omega}(S_2/S_1) \cdot \vec{n}_{1 \to 2} = 0$$

#### C. Le pivotement pur
Caractérisé par une vitesse de glissement nulle en $I$, mais une rotation instantanée portée uniquement par la normale au contact :
$$\vec{V}(I \in S_2 / S_1) = \vec{0} \quad \text{et} \quad \vec{\Omega}(S_2/S_1) = \omega \cdot \vec{n}_{1 \to 2}$$

---

### 4. Torseur cinématique du contact

Le torseur cinématique représentant le mouvement de $S_2$ par rapport à $S_1$ au point $I$ s'écrit :
$$\{\mathcal{V}(S_2/S_1)\} = \left\{ \begin{array}{c} \vec{\Omega}(S_2/S_1) \\ \vec{V}(I \in S_2/S_1) \end{array} \right\}_I$$

En projetant dans le repère local lié au contact $(I, \vec{x}, \vec{y}, \vec{n})$, où $(\vec{x}, \vec{y})$ forme une base du plan tangent $\pi$ et $\vec{n} = \vec{n}_{1 \to 2}$ :

$$\{\mathcal{V}(S_2/S_1)\} = \begin{pmatrix} p & \cdot \\ q & \cdot \\ r & \cdot \end{pmatrix}_{\text{base }(I, \vec{x}, \vec{y}, \vec{n})}$$

*   $p, q$ : composantes du roulement.
*   $r$ : composante du pivotement.
*   Les composantes de la vitesse de glissement $\vec{V}_{gl}(I)$ occupent la résultante du torseur si l'on manipule les mobilités.

---

### 5. Méthode : Exploiter une condition de contact cinématique en PTSI

Pour résoudre un problème de cinématique du contact (typiquement en usinage, roulement à billes, ou contact roue/sol) :

1.  **Identifier les solides en présence** : Isoler $S_1$ et $S_2$ et repérer le point géométrique de contact $I$.
2.  **Définir le repère local** : Déterminer clairement la normale au contact $\vec{n}$ et le plan tangent $\pi$.
3.  **Traduire l'hypothèse physique** :
    *   *Contact ponctuel sans glissement* $\implies \vec{V}(I \in S_2 / S_1) = \vec{0}$.
    *   *Contact avec roulement sans glissement* $\implies \vec{V}(I \in S_2 / S_1) = \vec{0}$ et relation géométrique sur les rayons de courbure.
4.  **Appliquer la formule de Varignon ou l'équiprojectivité** pour propager les vitesses aux autres points d'intérêt du mécanisme.
5.  **Projeter les équations vectorielles** dans le système d'axes adapté pour obtenir le système algébrique à résoudre.

---

### 6. Pièges et Erreurs Classiques (Attention !)

*   **Confondre vitesse du point $I$ et vitesse du point coïncident** : $\vec{V}(I \in S_2)$ dans $\mathcal{R}_0$ n'est pas la vitesse de glissement. La vitesse de glissement est une **vitesse relative** $\vec{V}(I \in S_2 / S_1)$.
*   **Oublier la non-interpénétration** : Cinématiquement, un contact unilatéral impose que la composante normale de la vitesse vérifie $V_n(I \in S_2/S_1) \ge 0$ sous peine d'avoir décollement (hors cadre des liaisons parfaites bilatérales usuelles).
*   **Mauvaise orientation de la normale** : Veillez à toujours orienter $\vec{n}$ de manière uniforme (généralement du solide 1 vers le solide 2) pour éviter des erreurs de signe dans les produits vectoriels et les torseurs.