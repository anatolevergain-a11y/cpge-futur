---
title: 'Cours : Énergétique des systèmes'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Énergétique des systèmes (PSI - SII)

---

## 1. Introduction et Cadre d'Étude

L'énergétique des systèmes multi-corps et des actionneurs permet d'établir le lien entre les efforts (forces et moments) et les mouvements (cinématique), en s'affranchissant des efforts de liaison intérieurs (par opposition au Principe Fondamental de la Dynamique).

### Notations et cadre
*   **Système $\Sigma$** : Ensemble de solides indéformables en interaction.
*   Référentiel d'étude $\mathcal{R}_0$ supposé galiléen.
*   Torseur cinématique d'un solide $S_i$ par rapport à $\mathcal{R}_0$ : $\{\mathcal{V}(S_i/\mathcal{R}_0)\} = \begin{Bmatrix} \vec{\Omega}(S_i/\mathcal{R}_0) \\ \vec{V}(P \in S_i/\mathcal{R}_0) \end{Bmatrix}$.
*   Torseur dynamique d'un solide $S_i$ par rapport à $\mathcal{R}_0$ : $\{\mathcal{D}(S_i/\mathcal{R}_0)\} = \begin{Bmatrix} \vec{\delta}(S_i/\mathcal{R}_0) \\ \vec{\delta}_O(S_i/\mathcal{R}_0) \end{Bmatrix}$.

---

## 2. Définitions Fondamentales

### A. Puissance galiléenne d'un effort
Soit un torseur d'actions mécaniques $\{\mathcal{F}_{A \to B}\} = \begin{Bmatrix} \vec{R}_{A \to B} \\ \vec{M}_{P}(A \to B) \end{Bmatrix}$ agissant sur un solide $B$. La puissance galiléenne de cette action mécanique dans son mouvement par rapport au référentiel galiléen $\mathcal{R}_0$ est le co-torseur du torseur des efforts et du torseur cinématique :

$$\mathcal{P}(\mathcal{F}_{A \to B} \to B/\mathcal{R}_0) = \{\mathcal{F}_{A \to B}\} \otimes \{\mathcal{V}(B/\mathcal{R}_0)\} = \vec{R}_{A \to B} \cdot \vec{V}(P \in B/\mathcal{R}_0) + \vec{M}_{P}(A \to B) \cdot \vec{\Omega}(B/\mathcal{R}_0)$$

*Unité :* Watt (\text{W}).

### B. Énergie cinétique d'un solide et d'un système
*   **Pour un solide $S$ en mouvement dans $\mathcal{R}_0$ :**
    $$\mathcal{E}_c(S/\mathcal{R}_0) = \frac{1}{2} \{\mathcal{V}(S/\mathcal{R}_0)\} \otimes \{\mathcal{D}(S/\mathcal{R}_0)\} = \frac{1}{2} \int_{S} \vec{V}(M/\mathcal{R}_0)^2 dm$$
    Dans le cas d'un mouvement plan ou de rotation autour d'un axe fixe $(O, \Delta)$ :
    $$\mathcal{E}_c(S/\mathcal{R}_0) = \frac{1}{2} J_{\Delta}(S) \dot{\theta}^2$$
    où $J_{\Delta}(S)$ est le moment d'inertie de $S$ par rapport à l'axe $\Delta$ en \text{kg}\cdot\text{m}^2.

*   **Pour un système $\Sigma = \bigcup S_i$ :**
    $$\mathcal{E}_c(\Sigma/\mathcal{R}_0) = \sum_{S_i \in \Sigma} \mathcal{E}_c(S_i/\mathcal{R}_0)$$

*Unité :* Joule (\text{J}).

---

## 3. Théorèmes Énergétiques

### A. Théorème de l'Énergie Cinétique (TEC)

> **Théorème :** 
> La dérivée temporelle de l'énergie cinétique d'un système $\Sigma$ par rapport à un référentiel galiléen $\mathcal{R}_0$ est égale à la puissance galiléenne de **toutes** les actions mécaniques extérieures et intérieures s'exerçant sur $\Sigma$.
> 
> $$\frac{d\mathcal{E}_c(\Sigma/\mathcal{R}_0)}{dt} = \mathcal{P}_{\text{ext}}(\Sigma/\mathcal{R}_0) + \mathcal{P}_{\text{int}}(\Sigma)$$

#### Démonstration (Esquisse pour un point matériel $M$) :
On part du PFD appliqué à $M$ dans $\mathcal{R}_0$ : $\vec{F}_{\text{tot}} = m \vec{\gamma}(M/\mathcal{R}_0)$.
On effectue le produit scalaire par le vecteur vitesse $\vec{V}(M/\mathcal{R}_0)$ :
$$\vec{F}_{\text{tot}} \cdot \vec{V}(M/\mathcal{R}_0) = m \frac{d\vec{V}}{dt} \cdot \vec{V} = \frac{d}{dt}\left(\frac{1}{2} m V^2\right)$$
En sommant sur l'ensemble des points constituant le système, on obtient le TEC.

---

### B. Théorème de la Puissance Virtuelle (TPV)

Le TPV est un outil fondamental en PSI pour l'obtention des lois de comportement ou d'équations du mouvement sans passer par la réduction complète des torseurs de liaison.

> **Définition (Champ de vitesses virtuelles) :**
> Un champ de vitesses virtuelles est un champ de vecteurs vitesse et taux de rotation $\left\{ \{\mathcal{V}^*\} = \begin{Bmatrix} \vec{\Omega}^* \\ \vec{V}^* \end{Bmatrix} \right\}$ défini sur le système, continu et vérifiant les conditions aux limites cinématiques ainsi que les liaisons géométriques instantanées.

> **Principe :**
> Pour tout système matériel $\Sigma$, pour tout champ de vitesses virtuelles admissible, la puissance virtuelle des efforts intérieurs et la puissance virtuelle des efforts extérieurs vérifient :
> 
> $$\mathcal{P}^*_{\text{ext}}(\Sigma) + \mathcal{P}^*_{\text{int}}(\Sigma) = \mathcal{P}^*_{\text{accel}}(\Sigma)$$
> 
> *Cas particulier des systèmes conservatives et parfaits (sans frottement) :* 
> $\mathcal{P}^*_{\text{int}}(\Sigma) = 0$ (les liaisons idéales ne développent aucune puissance virtuelle intérieure).

---

## 4. Rendement Énergétique et Pertes

Dans tout système réel, les irréversibilités (frottements secs ou visqueux) entraînent une dissipation d'énergie sous forme thermique.

### A. Bilan de puissance
$$\mathcal{P}_{\text{fournie}} = \mathcal{P}_{\text{utile}} + \mathcal{P}_{\text{perdues}}$$

### B. Définition du rendement $\eta$
$$\eta = \frac{\mathcal{P}_{\text{utile}}}{\mathcal{P}_{\text{fournie}}} = 1 - \frac{\mathcal{P}_{\text{perdues}}}{\mathcal{P}_{\text{fournie}}}$$

*   **Rendement direct ($0 \le \eta \le 1$) :** L'énergie circule de la source vers la charge.
*   **Rendement indirect (réversibilité) :** Lorsque le système est réversible (ex: réducteur à vis sans fin non réversible $\Rightarrow \eta_{\text{inverse}} \approx 0$).

---

## 5. Méthode : Appliquer le TEC ou le TPV en PSI

1.  **Isoler le système $\Sigma$** de manière judicieuse (un solide unique ou un sous-ensemble).
2.  **Identifier le référentiel d'étude** et s'assurer qu'il est galiléen.
3.  **Calculer l'énergie cinétique** $\mathcal{E}_c(\Sigma/\mathcal{R}_0)$ en fonction de la variable généralisée (souvent un angle $\theta$ ou un déplacement $x$).
4.  **Recenser les actions mécaniques** :
    *   Liaisons parfaites $\implies$ Puissance nulle (intérêt majeur du TEC/TPV).
    *   Efforts extérieurs (actionneurs, pesanteur, efforts de coupe).
    *   Efforts intérieurs dissipatifs (frottements visqueux : $\mathcal{P} = -f v^2$ ou $-f \dot{\theta}^2$).
5.  **Appliquer le TEC** en dérivant l'énergie cinétique et en posant l'égalité des puissances.

---

## 6. Pièges et Erreurs Classiques à Éviter

⚠️ **Oubli de la puissance des efforts intérieurs non parfaits :** Si une liaison possède du frottement (ex: frottement de Coulomb ou visqueux), le torseur des efforts intérieurs de cette liaison **ne développe pas une puissance nulle**. Il faut l'inclure dans $\mathcal{P}_{\text{int}}$.

⚠️ **Confusion entre dérivée de l'énergie et puissance des accélérations :** Le TEC s'applique avec la dérivée temporelle de l'énergie cinétique. Ne pas confondre $\frac{d\mathcal{E}_c}{dt}$ et l'application brute du PFD.

⚠️ **Référentiel non galiléen :** L'application directe du TEC sous la forme $\frac{d\mathcal{E}_c}{dt} = \mathcal{P}$ n'est valable **que dans un référentiel galiléen**. En entraînement/relatif, des termes de puissance dus aux forces d'inertie (d'entraînement et de Coriolis) apparaissent.

⚠️ **Erreur de signe sur les potentiels :** $\mathcal{E}_p = mgh$ ou $\frac{1}{2}k(x-x_0)^2$. Attention au signe lors du passage sous forme de conservation de l'énergie mécanique $\mathcal{E}_m = \mathcal{E}_c + \mathcal{E}_p$ (valable uniquement si $\mathcal{P}_{\text{non conservatifs}} = 0$).