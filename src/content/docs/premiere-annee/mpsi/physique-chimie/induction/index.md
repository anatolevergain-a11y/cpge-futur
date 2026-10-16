---
title: 'Cours : Induction électromagnétique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Induction Électromagnétique
**Filière :** MPSI — **Matière :** Physique-Chimie  
Niveau: ** Première année

---

## 1. Introduction et Cadre Général

L'induction électromagnétique, découverte par Michael Faraday, décrit la création d'un champ électrique (et donc d'une tension ou d'un courant) par la variation d'un champ magnétique dans le temps, ou par le mouvement d'un conducteur dans un champ magnétique.

### Représentation du champ magnétique
Le champ magnétique $\vec{B}$ est un champ vectoriel homogène à des Teslas ($\text{T}$). Sa circulation le long d'un contour fermé orienté $\mathcal{C}$ est reliée aux courants en lacets par le théorème d'Ampère.

---

## 2. Flux Magnétique

### Définition
Soit une surface orientée $\Sigma$ s'appuyant sur un contour fermé $\mathcal{C}$. Le flux magnétique $\Phi$ à travers $\Sigma$ est défini par l'intégrale de surface :

$$\Phi = \iint_{\Sigma} \vec{B} \cdot \vec{n} \, dS$$

*   **Unités :** Weber ($\text{Wb}$) ou $\text{T}\cdot\text{m}^2$.
*   $\vec{n}$ est le vecteur normal unitaire à la surface $\Sigma$, dont l'orientation est liée à celle du contour $\mathcal{C}$ par la règle du bonhomme d'Ampère (ou du tire-bouchon).

### Origines de la variation du flux
Le flux $\Phi(t)$ peut varier au cours du temps selon trois mécanismes :
1.  **Variation temporelle du champ $\vec{B}(t)$** (ex: circuit fixe dans un champ variable).
2.  **Variation de la géométrie du circuit** (ex: circuit mobile en translation ou rotation dans un champ stationnaire).
3.  **Combinaison des deux.**

---

## 3. Loi de Faraday et Loi de Lenz

### Théorème (Loi de Faraday)
Soit un circuit filiforme fermé $\mathcal{C}$ indformable ou non, orienté, délimitant une surface $\Sigma$. L'apparition d'une force électromotrice induite $e$ aux bornes de ce circuit est donnée par :

$$e = -\frac{d\Phi}{dt}$$

*   **Unité :** Volt ($\text{V}$).
*   $e$ est la circulation du champ électrique induit $\vec{E}_{\text{ind}}$ le long du contour $\mathcal{C}$ : $e = \oint_{\mathcal{C}} \vec{E}_{\text{ind}} \cdot d\vec{l}$.

### Règle (Loi de Lenz - Signe moins)
> *« Les effets de l'induction s'opposent aux causes qui leur ont donné naissance. »*

Le signe « $-$ » dans la loi de Faraday est fondamental : il traduit une inertie du système électromagnétique. Si le flux augmente, le courant induit crée un champ magnétique qui s'oppose à cette augmentation.

---

## 4. Force Électromotrice Induite : Cas particuliers

### A. Phénomène d'induction de Lorentz (Circuit en mouvement)
Lorsqu'un conducteur se déplace à la vitesse $\vec{v}$ dans un champ magnétique $\vec{B}$, chaque porteur de charge (de charge $q$) subit une force magnétique de Lorentz $\vec{F}_m = q(\vec{v} \wedge \vec{B})$. 
Le champ électromoteur de Lorentz est $\vec{E}_m = \vec{v} \wedge \vec{B}$.

La f.e.m. induite s'écrit alors :
$$e = \oint_{\mathcal{C}} (\vec{v} \wedge \vec{B}) \cdot d\vec{l}$$

### B. Phénomène de Neumann (Champ variable)
Si le circuit est fixe ($\vec{v} = \vec{0}$) mais que le champ $\vec{B}(t)$ dépend du temps, le champ électrique $\vec{E}_{\text{ind}}$ dérive d'une variation temporelle :
$$\text{rot}(\vec{E}_{\text{ind}}) = -\frac{\partial \vec{B}}{\partial t}$$

---

## 5. Courants Induits et Effets Joule

Si le circuit fermé $\mathcal{C}$ possède une résistance totale $R$ et une inductance propre $L$ (négligeable en régime quasi-stationnaire si non précisé), l'application de la loi des mailles (généralisée à l'induction) donne :

$$e(t) = Ri(t) + L\frac{di}{dt}$$

En régime purement résistant ($L \approx 0$) :
$$i(t) = \frac{e(t)}{R} = -\frac{1}{R}\frac{d\Phi}{dt}$$

### Puissance et Bilan énergétique
La puissance électrique fournie par les forces d'induction est $P_{\text{ind}} = e \cdot i$.  
La puissance dissipée par effet Joule dans le circuit est $P_J = R i^2$.  
Bilan: * Le travail mécanique nécessaire pour déplacer le circuit dans le champ magnétique (ou la puissance de la source créant $\vec{B}(t)$) se convertit intégralement en énergie électrique, puis en chaleur (effet Joule).

---

## 6. Méthode : Calcul de f.e.m. et analyse d'un problème d'induction

Pour résoudre un problème d'induction en MPSI, suivre rigoureusement la démarche suivante :

1.  **Orienter** le circuit $\mathcal{C}$ (choisir un sens positif arbitraire).
2.  **Déduire** l'orientation du vecteur normal $\vec{n}$ associé à la surface $\Sigma$ par la règle du tire-bouchon.
3.  **Exprimer** le flux $\Phi(t)$ à l'instant $t$ en fonction des coordonnées géométriques du système. 
    *   *Attention aux bornes de l'intégrale ou à l'aire variable.*
4.  **Dériver** temporellement le flux pour obtenir $e(t) = -\frac{d\Phi}{dt}$.
5.  **Appliquer** les lois de l'électrocinétique (loi d'Ohm, mailles) pour trouver le courant $i(t)$.
6.  **Vérifier par la loi de Lenz** le sens du courant trouvé (cohérence du signe).

---

## 7. Pièges Classiques à Éviter (Alerte Rigorité MPSI)

*   **Inversion du repérage :** Une erreur de signe dans l'orientation du contour $\mathcal{C}$ inverse le flux $\Phi$ et donc le signe de $e$. Soyez constants dans le choix du système de coordonnées.
*   **Oubli du mouvement :** Si le circuit se déforme ou se déplace, $\frac{d\Phi}{dt}$ contient à la fois la dérivée partielle due au champ et la dérivée due au mouvement ($\frac{\partial \Phi}{\partial t} + \vec{v}\cdot\dots$). N'oubliez pas que $\Phi(t)$ dépend explicitement du temps via la position paramétrée $x(t)$ ou $\theta(t)$.
*   **Confusion flux propre / flux extérieur :** Dans un circuit couplé, le flux total est la somme du flux créé par les sources extérieures et du flux propre (lié à l'inductance $L$). Ne pas confondre $\Phi_{\text{ext}}$ et $\Phi_{\text{total}}$.