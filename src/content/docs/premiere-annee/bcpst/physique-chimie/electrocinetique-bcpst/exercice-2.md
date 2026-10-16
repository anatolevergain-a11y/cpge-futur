---
title: 'Exercice 2 : Charge et décharge d un condensateur'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les condensateurs sont des composants fondamentaux en électronique et en biofysique, notamment pour modéliser la membrane plasmique des cellules excitables (neurones, cellules musculaires). L'objectif de ce problème est d'étudier la réponse d'un circuit $RC$ série soumis à un échelon de tension, puis d'analyser les limites du modèle linéaire à travers une approche énergétique et critique.

On considère le circuit électrique constitué :
- D'un générateur idéal de tension délivrant une force électromotrice $E$ constante.
- D'un conducteur ohmique de résistance $R$.
- D'un condensateur plan parfait de capacité $C$, initialement déchargé à l'instant $t = 0$.
- D'un interrupteur $K$ permettant de basculer le circuit entre une phase de charge (position 1) et une phase de décharge (position 2).

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Établissement de l'équation différentielle (Phase de charge)** : À l'instant $t = 0$, l'interrupteur est basculé sur la position 1. En appliquant les lois de Kirchhoff, établir l'équation différentielle régissant l'évolution de la tension aux bornes du condensateur $u_C(t)$.
2. **Résolution et étude temporelle** : Résoudre cette équation différentielle avec les conditions initiales appropriées. Exprimer $u_C(t)$ et en déduire l'expression de l'intensité du courant $i(t)$ circulant dans le circuit. Introduire la constante de temps $\tau$ du circuit et donner son unité ainsi que sa signification physique.
3. **Bilan énergétique lors de la charge** : Exprimer l'énergie électrique totale $W_E$ fournie par le générateur de f.é.m. $E$ pendant toute la durée de la charge de $t = 0$ à $t \to +\infty$. Calculer l'énergie totale $W_C$ emmagasinée par le condensateur à l'état final. Comparer $W_E$ et $W_C$ et commenter ce résultat d'un point de vue énergétique.
4. **Analyse critique du modèle et du composant réel** : 
   - a) Le condensateur réel présente une résistance de fuite $R_f$ en parallèle avec sa capacité $C$. Comment cela modifie-t-il le comportement à long terme ($\text{quand } t \to +\infty$) ?
   - b) Lors de la fermeture brutale de l'interrupteur ($t=0^+$), que dire de la puissance dissipée par effet Joule dans la résistance si l'on suppose les fils parfaits et le condensateur initialement déchargé ? Quelle anomalie physique cela met-il en évidence concernant le modèle idéal ?

---

### 💡 Pistes & Indications méthodologiques

- **Q1** : Fléchez les tensions en convention récepteur pour le condensateur et le conducteur ohmique. Utilisez la loi des mailles et la relation caractéristique du condensateur $q = C u_C$ ainsi que $i = \frac{\mathrm{d}q}{\mathrm{d}t}$.
- **Q2** : Pensez à la solution générale de l'équation homogène et à une solution particulière constante. La continuité de la tension aux bornes d'un condensateur est une condition primordiale pour déterminer la constante d'intégration.
- **Q3** : Rappelez que la puissance instantanée fournie par un générateur est $\mathcal{P}_G = E \cdot i(t)$. L'énergie totale s'obtient par intégration temporelle de 0 à $+\infty$. Pour l'énergie du condensateur, utilisez la formule classique $W_C = \frac{1}{2} C U^2$.
- **Q4** : Pour la question énergétique de l'établissement du courant, considérez l'intégrale de l'effet Joule et remarquez qu'elle est indépendante de la valeur de $R$, ce qui conduit à un paradoxe si $R \to 0$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Établissement de l'équation différentielle
En position 1, le circuit série relie le générateur $E$, la résistance $R$ et le condensateur $C$. 
En orientant le circuit dans le sens du courant, la loi des mailles s'écrit :
$$E - u_R(t) - u_C(t) = 0 \implies E = u_R(t) + u_C(t)$$

D'après la loi d'Ohm aux bornes du conducteur ohmique :
$$u_R(t) = R \cdot i(t)$$

Par définition, l'intensité du courant liée à la charge portée par l'armature positive du condensateur est :
$$i(t) = \frac{\mathrm{d}q}{\mathrm{d}t} = \frac{\mathrm{d}(C u_C)}{\mathrm{d}t} = C \frac{\mathrm{d}u_C}{\mathrm{d}t}$$
*(le condensateur étant supposé de capacité $C$ constante)*.

En injectant ces relations dans la loi des mailles, on obtient l'équation différentielle du premier ordre :
$$\tau \frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C(t) = E$$
où l'on a introduit la **constante de temps** du circuit : $\tau = R \cdot C$.

#### 2. Résolution et étude temporelle
L'équation différentielle linéaire à coefficients constants admet une solution de la forme $u_C(t) = u_{C,\text{homogène}} + u_{C,\text{particulière}}$.

- **Solution homogène** : $\tau \frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C = 0 \implies u_{C,\text{homogène}}(t) = A e^{-t/\tau}$
- **Solution particulière** (régime permanent pour lequel $\frac{\mathrm{d}u_C}{\mathrm{d}t} = 0$) : $u_{C,\text{particulière}}(t) = E$

La solution générale est donc :
$$u_C(t) = A e^{-t/\tau} + E$$

Utilisons la **condition initiale** : le condensateur est initialement déchargé à $t = 0$, donc $u_C(0) = 0$ (continuité de la tension aux bornes d'un condensateur).
$$0 = A e^{0} + E \implies A = -E$$

La solution complète est :
$$u_C(t) = E \left(1 - e^{-\frac{t}{\tau}}\right)$$

Pour l'intensité du courant $i(t)$ :
$$i(t) = C \frac{\mathrm{d}u_C}{\mathrm{d}t} = C \cdot E \cdot \left(0 - \left(-\frac{1}{\tau}\right) e^{-\frac{t}{\tau}}\right) = \frac{C E}{R C} e^{-\frac{t}{\tau}}$$
$$i(t) = \frac{E}{R} e^{-\frac{t}{\tau}}$$

*Analyse dimensionnelle de $\tau$* : 
La résistance $R$ s'exprime en ohms ($\Omega$) et la capacité $C$ en farads ($\text{F}$). 
$\tau = R \cdot C$ s'exprime en secondes ($\text{s}$). 
Physiquement, $\tau$ représente la durée caractéristique de la charge du condensateur (à $t = \tau$, le condensateur est chargé à environ $63\,\%$, et à $t = 5\tau$, il est considéré comme chargé à plus de $99\,\%$).

#### 3. Bilan énergétique lors de la charge
- **Énergie totale fournie par le générateur ($W_E$)** :
  La puissance instantanée délivrée par le générateur est $\mathcal{P}_G(t) = E \cdot i(t)$.
  L'énergie totale fournie de $t = 0$ à $t \to +\infty$ est l'intégrale de cette puissance :
  $$W_E = \int_{0}^{+\infty} E \cdot i(t) \, \mathrm{d}t = E \int_{0}^{+\infty} \frac{E}{R} e^{-\frac{t}{\tau}} \, \mathrm{d}t$$
  $$W_E = \frac{E^2}{R} \left[ -\tau e^{-\frac{t}{\tau}} \right]_{0}^{+\infty} = \frac{E^2}{R} (0 - (-\tau)) = \frac{E^2 \tau}{R}$$
  Comme $\tau = RC$, on obtient :
  $$W_E = C E^2$$

- **Énergie emmagasinée par le condensateur ($W_C$)** :
  À l'état final ($t \to +\infty$), la tension aux bornes du condensateur vaut $E$. L'énergie électrostatique emmagasinée est :
  $$W_C = \frac{1}{2} C E^2$$

- **Comparaison et commentaire** :
  On constate que $W_C = \frac{1}{2} W_E$. 
  Seulement la moitié de l'énergie fournie par le générateur est stockée sous forme électrostatique dans le condensateur. L'autre moitié ($W_J = \frac{1}{2} C E^2$) a été intégralement dissipée par **effet Joule** dans le conducteur ohmique $R$ au cours de la phase transitoire :
  $$W_J = \int_{0}^{+\infty} R \cdot i(t)^2 \, \mathrm{d}t = R \int_{0}^{+\infty} \left(\frac{E}{R}\right)^2 e^{-\frac{2t}{\tau}} \, \mathrm{d}t = \frac{E^2}{R} \left[ -\frac{\tau}{2} e^{-\frac{2t}{\tau}} \right]_{0}^{+\infty} = \frac{1}{2} C E^2$$
  Remarquons que cette énergie dissipée par effet Joule est *indépendante de la valeur de la résistance $R$*.

#### 4. Analyse critique du modèle et du composant réel
- **a) Impact d'une résistance de fuite $R_f$** :
  Le condensateur réel n'est pas parfait : un courant de fuite traverse le diélectrique, ce qui se modélise par une résistance $R_f$ en parallèle de $C$. 
  À long terme ($t \to +\infty$), le régime n'est plus stationnaire à courant nul. Le circuit forme un pont diviseur de tension entre $R$ et $R_f$. La tension finale aux bornes du condensateur ne vaut plus $E$, mais :
  $$u_{C,\text{final}} = E \cdot \frac{R_f}{R + R_f} < E$$
  De plus, la constante de temps globale du système est modifiée (le temps de décharge spontanée du condensateur est accéléré par la présence de $R_f$).

- **b) Anomalie du modèle idéal lors de la fermeture ($t = 0^+$)** :
  Si l'on considère un fil strictement parfait et une résistance $R$ tendant vers $0$, l'énergie dissipée par effet Joule reste constante et vaut $W_J = \frac{1}{2} C E^2$, *quelle que soit la petitesse de $R$*. 
  Si $R = 0$, la transition est infiniment rapide ($\tau \to 0$), mais la quantité d'énergie dissipée par effet Joule reste $\frac{1}{2} C E^2$. Cela met en évidence une **discontinuité physique du modèle** : une énergie finie est dissipée dans une résistance nulle sur un temps nul, ce qui correspond mathématiquement à une impulsion de puissance infinie. Dans la réalité, les inductances parasites des fils et la résistance interne du générateur s'opposent à des variations infiniment rapides du courant (phénomène d'oscillations amorties ou d'étincelles aux bornes de l'interrupteur).