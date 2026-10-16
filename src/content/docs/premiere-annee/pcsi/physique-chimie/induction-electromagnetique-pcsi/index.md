---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

L'induction électromagnétique, découverte par Michael Faraday, décrit la production d'un courant électrique (ou d'une tension) dans un circuit conducteur soumis à un champ magnétique variable ou en mouvement. C'est le principe fondamental de la conversion d'énergie électromécanique (alternateurs, moteurs, transformateurs).

### Flux magnétique
Soit un circuit orienté délimitant une surface ouverte $\Sigma$ s'appuyant sur un contour fermé $\mathcal{C}$. Le flux magnétique $\Phi$ du champ magnétique $\vec{B}$ à travers cette surface est défini par :
$$\Phi = \iint_{\Sigma} \vec{B} \cdot \vec{n} \, dS$$
- $\vec{n}$ est le vecteur unitaire normal à la surface $\Sigma$, orienté par la règle du tire-bouchon (ou de la main droite) par rapport à l'orientation du contour $\mathcal{C}$.
- **Unité :** Le flux s'exprime en Weber ($\text{Wb}$), ou en Tesla mètre carré ($\text{T}\cdot\text{m}^2$).

### Force de Lorentz élémentaire et Force de Laplace
Une charge $q$ se déplaçant à la vitesse $\vec{v}$ dans un référentiel galiléen soumis à un champ électrique $\vec{E}$ et un champ magnétique $\vec{B}$ subit la force de Lorentz :
$$\vec{f}_{\text{Lorentz}} = q(\vec{E} + \vec{v} \wedge \vec{B})$$

Dans le cadre de l'approximation des régimes quasi-permanents (ARQP) et pour un conducteur filiforme parcouru par un courant d'intensité $I$, la force magnétique élémentaire agissant sur un tronçon de fil $dl$ (orienté dans le sens du courant) est la **force de Laplace** :
$$d\vec{F} = I \, d\vec{l} \wedge \vec{B}$$
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Loi de Faraday et Loi de Lenz
- **Loi de Faraday :** Toute variation du flux magnétique à travers un circuit fermé induit une force électromotrice (f.e.m.) e dans ce circuit, égale à l'opposé de la dérivée temporelle du flux :
  $$e = -\frac{d\Phi}{dt}$$
- **Loi de Lenz (qualitative) :** Les effets de l'induction s'opposent aux causes qui leur ont donné naissance (signe moins dans la loi de Faraday).

### Origine microscopique de la f.e.m. : L'action de $\vec{v} \wedge \vec{B}$
Considérons une portion de circuit mobile de vitesse $\vec{v}$ dans un champ magnétique $\vec{B}$. Les porteurs de charge (e.g., électrons de conduction de vitesse $\vec{v}_{\text{porteur}} = \vec{v} + \vec{v}_{\text{rel}}$) subissent la force magnétique $\vec{f}_m = q \vec{v} \wedge \vec{B}$. 
La force électromotrice induite $e$ le long d'un contour fermé $\mathcal{C}$ mobile est définie par la circulation du champ électromoteur induit $\vec{E}_m = \vec{v} \wedge \vec{B}$ :
$$e = \oint_{\mathcal{C}} (\vec{v} \wedge \vec{B}) \cdot d\vec{l}$$

### Démonstration de la loi de Faraday par dérivation du flux (Cas d'un circuit déformable ou mobile)
Soit $\Phi(t) = \iint_{\Sigma(t)} \vec{B}(\vec{r}, t) \cdot \vec{n} \, dS$. La variation temporelle de ce flux provient à la fois de la variation temporelle de $\vec{B}$ (induction de Neumann) et du mouvement de la surface $\Sigma(t)$ (induction de Lorentz).
En appliquant le théorème de Stokes et l'analyse vectorielle du mouvement d'un contour, on établit rigoureusement que :
$$\frac{d\Phi}{dt} = \iint_{\Sigma(t)} \frac{\partial \vec{B}}{\partial t} \cdot \vec{n} \, dS - \oint_{\mathcal{C}(t)} (\vec{v} \wedge \vec{B}) \cdot d\vec{l}$$
D'où l'expression générale de la f.e.m. :
$$e = -\frac{d\Phi}{dt}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Méthode pour calculer un courant induit (Circuit fermé de résistance $R$)
1. **Orienter** le circuit $\mathcal{C}$ et choisir le vecteur normal $\vec{n}$ associé.
2. **Paramétrer** la géométrie du problème à l'instant $t$ (position du mobile, angle, etc.).
3. **Exprimer** le flux $\Phi(t)$ de $\vec{B}$ à travers la surface $\Sigma(t)$.
4. **Dériver** par rapport au temps pour obtenir la f.e.m. $e(t) = -\frac{d\Phi}{dt}$.
5. **Appliquer** la loi d'Ohm généralisée dans le circuit (avec $e$ agissant comme un générateur de Thévenin) :
   $$RI = e \implies I(t) = -\frac{1}{R}\frac{d\Phi}{dt}$$

### Bilan énergétique et Puissance des forces de Laplace
La puissance mécanique $P_{\text{mech}}$ reçue par les forces de Laplace lors du déplacement d'un circuit à la vitesse $\vec{v}$ est :
$$P_{\text{mech}} = \oint_{\mathcal{C}} (I \, d\vec{l} \wedge \vec{B}) \cdot \vec{v} = I \oint_{\mathcal{C}} (\vec{v} \wedge \vec{B}) \cdot d\vec{l} = I \cdot e$$
La puissance électrique dissipée par effet Joule dans la résistance $R$ du circuit est :
$$P_{\text{Joule}} = R I^2 = I \cdot e$$
On vérifie la conservation de l'énergie : la puissance mécanique fournie est intégralement convertie en puissance électrique dissipée par effet Joule (en régime stationnaire ou quasi-stationnaire sans stockage magnétique non linéaire).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Erreur d'orientation (Signe du flux) :** Ne pas lier correctement le sens du vecteur normal $\vec{n}$ et le sens d'orientation du contour $\mathcal{C}$ (règle du tire-bouchon). Une erreur de signe sur la f.e.m. fausse tout le problème dynamique (sens des forces de Laplace inversé, instabilité au lieu d'amortissement).
2. **Oublier l'une des deux sources d'induction :** Le flux peut varier soit parce que $\vec{B}(t)$ change (champ variable, circuit fixe), soit parce que le circuit bouge dans un champ $\vec{B}$ (circuit mobile, champ stationnaire), soit les deux. Il ne faut pas confondre la dérivée partielle $\frac{\partial \vec{B}}{\partial t}$ et la dérivée totale $\frac{d\Phi}{dt}$.
3. **Confusion sur la vitesse $\vec{v}$ :** Dans le terme $\vec{v} \wedge \vec{B}$, $\vec{v}$ est la vitesse des **porteurs de charge** (ou du conducteur matériel), et non la vitesse de propagation des ondes ou une vitesse arbitraire.
4. **Oubli de la résistance interne :** Dans un circuit réel, la résistance $R$ n'est jamais nulle (sauf supraconductivité). Négliger $R$ dans la loi d'Ohm conduit à une absurdité mathématique ($I \to \infty$ si $\Phi$ varie brutalement sans résistance).