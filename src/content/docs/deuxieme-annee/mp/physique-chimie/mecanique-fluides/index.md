---
title: 'Cours : Mécanique des fluides'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MP.'
---

## 📌 1. Définitions & Cadre d'étude

La mécanique des fluides étudie le comportement des fluides (liquides et gaz) au repos (statique) ou en mouvement (cinématique et dynamique).

### Hypothèse du milieu continu
Un fluide est macroscopiquement décrit par des champs eulériens continus et différentiables des variables d'espace $\vec{r} = (x, y, z)$ et de temps $t$. 
- **Champ de vitesse :** $\vec{v}(M, t)$
- **Champ de pression :** $P(M, t)$
- **Champ de masse volumique :** $\mu(M, t)$ (ou $\rho$)

Cette description est valable si le **libre parcours moyen** $\ell$ des molécules est très inférieur à l'échelle caractéristique $L$ du système, ce qui se traduit par un nombre de Knudsen négligeable :
$$\text{Kn} = \frac{\ell}{L} \ll 1$$

### Fluide parfait vs Fluide visqueux
- **Fluide parfait :** Modèle idéal pour lequel le tenseur des contraintes se réduit à la pression isotrope. Il n'y a pas de transport quantité de mouvement par frottement visqueux.
- **Fluide visqueux :** Fluide manifestant une résistance à l'écoulement (viscosité dynamique $\eta$ ou cinématique $\nu = \eta/\rho$).

### Écoulement incompressible
Un écoulement est dit incompressible si la masse volumique $\rho$ de chaque particule fluide se conserve au cours du temps. L'équation de conservation de la masse (équation de continuité) se simplifie en :
$$\text{div}(\vec{v}) = \vec{\nabla} \cdot \vec{v} = 0$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Relation fondamentale de la statique des fluides (RFSF)
Dans le référentiel terrestre (supposé galiléen), pour un fluide au repos ($\vec{v} = \vec{0}$) soumis à un champ de pesanteur uniforme $\vec{g} = -g\vec{u}_z$, l'application du PFD à une particule fluide de volume $d\tau$ donne :
$$-\vec{\nabla} P + \rho \vec{g} = \vec{0}$$
En projection sur l'axe vertical ascendant $Oz$ :
$$\frac{\partial P}{\partial z} = -\rho g$$
Pour un **fluide incompressible** ($\rho = \text{cte}$), on intègre entre une altitude $z_0$ et $z$ :
$$P(z) + \rho g z = \text{cte}$$

### B. Théorème d'Euler (Conservation de la quantité de mouvement)
Soit $\mathcal{D}(t)$ un volume de contrôle mobile indformable ou déformable. Le bilan de la quantité de mouvement s'écrit sous forme intégrale :
$$\frac{d}{dt} \iint \iint_{\mathcal{D}(t)} \rho \vec{v} \, d\tau = \iiint_{\mathcal{D}(t)} \rho \vec{f}_{\text{vol}} \, d\tau + \iint_{\partial\mathcal{D}(t)} \underline{\underline{\sigma}} \cdot \vec{n} \, dS$$

### C. Équation d'Euler (Fluide parfait)
En appliquant le théorème précédent à une particule fluide et en introduisant l'accélération d'une particule :
$$\vec{a} = \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla})\vec{v}$$
On obtient l'équation d'Euler valable pour un fluide parfait non visqueux :
$$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v} \cdot \vec{\nabla})\vec{v} \right) = -\vec{\nabla} P + \rho \vec{g}$$

### D. Démonstration de l'équation de Bernoulli le long d'une ligne de courant
Cadre: Écoulement stationnaire ($\partial / \partial t = 0$), parfait, incompressible, soumis à un champ de forces de pesanteur conservatif ($\vec{g} = -\vec{\nabla}(gz)$).*

1. Partons de l'équation d'Euler stationnaire :
$$(\vec{v} \cdot \vec{\nabla})\vec{v} = -\frac{1}{\rho}\vec{\nabla}P - \vec{\nabla}(gz)$$
2. Utilisons l'identité vectorielle : $(\vec{v} \cdot \vec{\nabla})\vec{v} = \vec{\nabla}\left(\frac{v^2}{2}\right) - \vec{v} \wedge (\vec{\nabla} \wedge \vec{v})$.
3. Projetons cette relation sur un vecteur unitaire $\vec{t}$ tangent à une ligne de courant ($\vec{v} = v\vec{t}$). Le terme vectoriel $\vec{v} \wedge (\vec{\nabla} \wedge \vec{v})$ est orthogonal à $\vec{v}$ et s'annule par projection.
4. Il vient le long d'une ligne de courant :
$$\vec{t} \cdot \vec{\nabla}\left( \frac{v^2}{2} + \frac{P}{\rho} + gz \right) = 0$$
5. **Conclusion (Bernoulli) :** Le long d'une même ligne de courant, la quantité suivante est constante :
$$\frac{1}{2}\rho v^2 + P + \rho gz = \text{cte}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de résolution d'un problème d'hydrodynamique
1. **Définir le cadre :** Préciser si le fluide est parfait ou visqueux, compressible ou incompressible, et si l'écoulement est stationnaire.
2. **Choisir le système de coordonnées :** Adapté aux symétries du problème (cartésien, cylindrique, sphérique).
3. **Appliquer l'équation de continuité :** Pour l'incompressibilité, $\text{div}(\vec{v}) = 0$. En régime permanent monodimensionnel (section $S(x)$ et vitesse $v(x)$), cela se traduit par la conservation du débit volumique :
$$Q_v = v_1 S_1 = v_2 S_2 = \text{cte}$$
4. **Appliquer le théorème adéquat :**
   - Si le fluide est parfait et l'écoulement stationnaire le long d'une ligne de courant reliant deux points $A$ et $B$ : utiliser **Bernoulli**.
   - S'il y a des forces de frottement ou si l'on cherche une variation globale d'énergie : utiliser le premier principe thermodynamique ouvert (généralisation de Bernoulli avec terme de perte de charge $P_{\text{ch}}$).
   - Pour relier des forces globales à des variations de quantité de mouvement : utiliser le **théorème d'Euler** sur un volume de contrôle bien choisi.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Utiliser Bernoulli hors de son domaine de validité :** 
   Ne jamais appliquer Bernoulli entre deux points $A$ et $B$ s'ils ne sont pas sur la **même ligne de courant**, *sauf* si l'écoulement est irrotationnel ($\vec{\nabla} \wedge \vec{v} = \vec{0}$) partout dans le domaine connexe.
2. **Oublier le référentiel :** 
   Les lois de la statique (RFSF) et d'Euler ne s'expriment sous ces formes que dans un référentiel **galiléen**. En repère non galiléen, il faut ajouter les forces d'inertie (d'entraînement et de Coriolis).
3. **Confusion entre pression statique et pression dynamique :**
   Dans la formule de Bernoulli, $P$ est la pression statique mesurée en suivant le fluide. La pression de stagnation (ou totale) s'obtient au point d'arrêt ($v=0$) et vaut $P_0 = P + \frac{1}{2}\rho v^2$ (en négligeant les variations d'altitude).
4. **Erreur de signe dans les bilans de quantité de mouvement (Théorème d'Euler) :**
   Bien veiller à ce que les flux sortants de quantité de mouvement soient comptés positivement ($\iint_{\partial\mathcal{D}} \rho \vec{v} (\vec{v} \cdot \vec{n}) \, dS$).