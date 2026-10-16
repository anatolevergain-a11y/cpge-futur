---
title: 'Cours : Dynamique 3D et Énergétique des solides'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Dynamique 3D et Énergétique des solides
**Filière :** PSI (Classes Préparatoires aux Grandes Écoles)  
**Matière :** Sciences Industrielles de l'Ingénieur (SII) — Deuxième année  

---

## 1. Outils mathématiques et cinématiques fondamentaux

### 1.1. Opérateur d'inertie (Matrice d'inertie)
Soit $\mathcal{S}$ un solide indéformable. Pour tout point $P$ et tout repère $\mathcal{R} = (O, \vec{x}, \vec{y}, \vec{z})$, la matrice d'inertie du solide $\mathcal{S}$ au point $P$ est définie par :

$$\mathbf{I}_P(\mathcal{S}) = \begin{pmatrix} 
A_P & -F_P & -E_P \\ 
-F_P & B_P & -D_P \\ 
-E_P & -D_P & C_P 
\end{pmatrix}_{\mathcal{R}}$$

Les éléments diagonaux sont les **moments d'inertie** :
$$A_P = \int_{\mathcal{S}} (y^2 + z^2) dm, \quad B_P = \int_{\mathcal{S}} (x^2 + z^2) dm, \quad C_P = \int_{\mathcal{S}} (x^2 + y^2) dm$$

Les éléments extra-diagonaux sont les **produits d'inertie** :
$$D_P = \int_{\mathcal{S}} yz \, dm, \quad E_P = \int_{\mathcal{S}} xz \, dm, \quad F_P = \int_{\mathcal{S}} xy \, dm$$
*(Unités : $\text{kg}\cdot\text{m}^2$)*

### 1.2. Théorème de Huygens-Koenig (Transport de la matrice d'inertie)
Soit $G$ le centre de gravité du solide $\mathcal{S}$ de masse $M$. La matrice d'inertie en un point quelconque $P$ s'exprime en fonction de celle en $G$ par la relation :

$$\mathbf{I}_P(\mathcal{S}) = \mathbf{I}_G(\mathcal{S}) + M \begin{pmatrix} 
Y^2 + Z^2 & -XY & -XZ \\ 
-XY & X^2 + Z^2 & -YZ \\ 
-XZ & -YZ & X^2 + Y^2 
\end{pmatrix}$$

où $\vec{GP} = X\vec{x} + Y\vec{y} + Z\vec{z}$.

---

## 2. Cinétique des solides

### 2.1. Quantité de mouvement (ou résultante cinétique)
La résultante cinétique $\vec{R}_c(\mathcal{S}/\mathcal{R}_0)$ du solide $\mathcal{S}$ en mouvement dans le repère galiléen $\mathcal{R}_0$ est :

$$\vec{R}_c(\mathcal{S}/\mathcal{R}_0) = \int_{\mathcal{S}} \vec{V}(M/\mathcal{R}_0) dm = M \vec{V}(G/\mathcal{R}_0)$$

### 2.2. Moment cinétique
Le moment cinétique au point $P$ du solide $\mathcal{S}$ en mouvement dans $\mathcal{R}_0$ est défini par :

$$\vec{σ}_P(\mathcal{S}/\mathcal{R}_0) = \int_{\mathcal{S}} \vec{PM} \land \vec{V}(M/\mathcal{R}_0) dm$$

* **Propriété de transport :** 
  $$\vec{σ}_P(\mathcal{S}/\mathcal{R}_0) = \vec{σ}_G(\mathcal{S}/\mathcal{R}_0) + \vec{PG} \land \vec{R}_c(\mathcal{S}/\mathcal{R}_0)$$

* **Expression matricielle en $G$ (ou en un point fixe $O$) :**
  Si $\vec{\Omega}(\mathcal{S}/\mathcal{R}_0) = p\vec{x} + q\vec{y} + r\vec{z}$, alors :
  $$\vec{σ}_G(\mathcal{S}/\mathcal{R}_0) = \mathbf{I}_G(\mathcal{S}) \cdot \vec{\Omega}(\mathcal{S}/\mathcal{R}_0)$$

---

## 3. Dynamique générale (Principes Fondamentaux)

### 3.1. Torseur cinétique et torseur dynamique
* **Torseur cinétique :** $\mathcal{C}_P(\mathcal{S}/\mathcal{R}_0) = \left\{ \begin{array}{c} \vec{R}_c(\mathcal{S}/\mathcal{R}_0) \\ \vec{σ}_P(\mathcal{S}/\mathcal{R}_0) \end{array} \right\}_P$
* **Torseur dynamique :** $\mathcal{D}_P(\mathcal{S}/\mathcal{R}_0) = \left\{ \begin{array}{c} \vec{R}_d(\mathcal{S}/\mathcal{R}_0) \\ \vec{δ}_P(\mathcal{S}/\mathcal{R}_0) \end{array} \right\}_P = \frac{d}{dt}\left[ \mathcal{C}_P(\mathcal{S}/\mathcal{R}_0) \right]_{\mathcal{R}_0}$

La résultante dynamique vaut :
$$\vec{R}_d(\mathcal{S}/\mathcal{R}_0) = \frac{d\vec{R}_c}{dt}\Big|_{\mathcal{R}_0} = M \vec{γ}(G/\mathcal{R}_0)$$

Le moment dynamique au point $P$ vaut :
$$\vec{δ}_P(\mathcal{S}/\mathcal{R}_0) = \frac{d\vec{σ}_P}{dt}\Big|_{\mathcal{R}_0} + \vec{V}(P/\mathcal{R}_0) \land \vec{R}_c(\mathcal{S}/\mathcal{R}_0)$$

### 3.2. Principe Fondamental de la Dynamique (PFD)
Dans un repère galiléen $\mathcal{R}_0$, le PFD appliqué à un solide $\mathcal{S}$ s'exprime sous forme de l'égalité de torseurs :

$$\mathcal{D}_(\mathcal{S}/\mathcal{R}_0) = \mathcal{T}_{\text{ext}\to\mathcal{S}}$$

Soit sous forme vectorielle (avec $P$ fixe dans $\mathcal{R}_0$ ou $P = G$) :
$$\begin{cases} 
\vec{R}_d(\mathcal{S}/\mathcal{R}_0) = \vec{F}_{\text{ext}} \\ 
\vec{δ}_P(\mathcal{S}/\mathcal{R}_0) = \vec{\mathcal{M}}_P(\text{ext}\to\mathcal{S}) 
\end{cases}$$

---

## 4. Énergétique des solides

### 4.1. Énergie cinétique
L'énergie cinétique galiléenne de $\mathcal{S}$ se calcule via le théorème de König :
$$E_c(\mathcal{S}/\mathcal{R}_0) = \frac{1}{2} M V(G/\mathcal{R}_0)^2 + \frac{1}{2} \vec{\Omega}(\mathcal{S}/\mathcal{R}_0) \cdot \vec{σ}_G(\mathcal{S}/\mathcal{R}_0)$$

En écriture indicielle (si $G$ est centre d'inertie principal d'inertie) :
$$E_c(\mathcal{S}/\mathcal{R}_0) = \frac{1}{2} M V(G/\mathcal{R}_0)^2 + \frac{1}{2} \left( A p^2 + B q^2 + C r^2 \right)$$

### 4.2. Puissance des efforts extérieurs et intérieurs
* **Puissance extérieure :** $\mathcal{P}(\text{ext}\to\mathcal{S}) = \{ \mathcal{T}_{\text{ext}\to\mathcal{S}} \} \otimes \{ \mathcal{V}(\mathcal{S}/\mathcal{R}_0) \} = \vec{R}(\text{ext}\to\mathcal{S}) \cdot \vec{V}(P/\mathcal{R}_0) + \vec{\mathcal{M}}_P(\text{ext}\to\mathcal{S}) \cdot \vec{\Omega}(\mathcal{S}/\mathcal{R}_0)$
* **Puissance intérieure :** Pour un système fermé indéformable, $\mathcal{P}(\text{int}) = 0$ (les liaisons parfaites ne dissipent ni ne créent de puissance).

### 4.3. Théorème de l'Énergie Cinetique (TEC)
Pour un solide $\mathcal{S}$ en mouvement dans un repère galiléen $\mathcal{R}_0$ :

$$\frac{d E_c(\mathcal{S}/\mathcal{R}_0)}{dt} = \mathcal{P}(\text{ext}\to\mathcal{S}) + \mathcal{P}_{\text{nc}}(\mathcal{S})$$

où $\mathcal{P}_{\text{nc}}$ représente la puissance des forces non conservatives si le système est ouvert ou si l'on isole des sous-systèmes. Si le système est conservatif (forces découlant d'un potentiel $E_p$), alors $\mathcal{P}(\text{ext}) = -\frac{dE_p}{dt}$, ce qui conduit à :

$$\frac{d}{dt}\left( E_c + E_p \right) = 0 \implies E_c + E_p = \text{Corte}$$

---

## 5. Méthode et conseils pour les concours (PSI)

1. **Choix de la méthode :**
   * Dès qu'on cherche une **accélération** ou une **liaison avec frottement**, privilégier le **PFD**.
   * Dès qu'on cherche une **loi de mouvement** scalarisée (système à un seul degré de liberté), privilégier le **TEC** (évite de projeter les torseurs et d'éliminer les efforts de liaison).
2. **Utilisation judicieuse des points de projection :**
   * Pour le PFD en rotation, projeter au point $G$ ou sur un axe fixe permet d'annuler des termes de transport complexes.
   * Toujours rechercher les **symétries du solide** pour simplifier la matrice d'inertie (si $Gxy$ est plan de symétrie, $D=E=0$).