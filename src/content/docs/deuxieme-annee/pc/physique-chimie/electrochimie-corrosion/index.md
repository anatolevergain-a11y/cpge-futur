---
title: 'Cours : Électrochimie et corrosion'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

L'électrochimie étudie les systèmes où des réactions d'oxydoréduction sont couplées à un transfert de charge électrique à l'interface entre un conducteur électronique (électrode) et un conducteur ionique (électrolyte).

### a. Systèmes électrochimiques et interfaces
* **Électrode :** Phase conductrice électronique (métal, graphite, oxyde conducteur).
* **Électrolyte :** Phase conductrice ionique (solution aqueuse ou organique contenant des ions, sel fondu).
* **Interface :** Zone de discontinuité où s'effectue le transfert d'électrons entre l'espèce réductrice $R$ et l'espèce oxydante $O$.

### b. Grandeurs fondamentales
* **Intensité du courant ($I$) :** Débit de charge traversant une section du circuit (en ampères, $\text{A}$). Par convention, $I > 0$ lorsque le système fonctionne en générateur (oxydation à l'anode, réduction à la cathode).
* **Potentiel d'électrode ($E$) :** Grandeur intensive mesurée par rapport à une électrode de référence (ex: Électrode Standard à Hydrogène - ESH, ou Électrode au Calomel Saturé - ECS).
* **Quantité d'électricité ($Q$) :** Pour une durée $\Delta t$, $Q = \int_{0}^{\Delta t} I(t) \, \mathrm{d}t$.
* **Loi de Faraday :** La masse $m$ d'une substance transformée lors d'une électrolyse est proportionnelle à la quantité d'électricité $Q$ traversant l'interface :
  $$m = \frac{M \cdot Q}{n \cdot F}$$
  avec $M$ la masse molaire ($\text{g}\cdot\text{mol}^{-1}$), $n$ le nombre d'électrons échangés, et $F = 96485 \text{ C}\cdot\text{mol}^{-1}$ la constante de Faraday.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### a. Relation de Nernst
Considérons la demi-équation redox mise sous forme symbolique :
$$\alpha O + n e^{-} + \beta H^{+} \left(aq\right) = \gamma R$$

La relation de Nernst exprime le potentiel d'électrode $E$ à l'équilibre thermodynamique (ou pour une interface siège d'un équilibre local) en fonction des activités des espèces :
$$E = E^{\circ} + \frac{R T}{n F} \ln \left( \frac{a(O)^{\alpha} \cdot a(H^{+})^{\beta}}{a(R)^{\gamma}} \right)$$

En régime dilué, on approche les activités par les concentrations adimensionnées (rapportées à $C^{\circ} = 1 \text{ mol}\cdot\text{L}^{-1}$) et les pressions partielles par les rapports $P/P^{\circ}$. À $T = 298.15 \text{ K}$, en passant au log décimal :
$$E = E^{\circ} + \frac{0.059}{n} \log \left( \frac{[O]^{\alpha} \cdot [H^{+}]^{\beta}}{[R]^{\gamma}} \right)$$

### b. Surcharges et cinétique électrochimique (Loi de Butler-Volmer)
Hors équilibre, le potentiel de l'électrode s'écarte de son potentiel d'équilibre $E_{\text{eq}}$. On définit la **surtension** $\eta$ par :
$$\eta = E - E_{\text{eq}}$$

Pour une réaction mono-électronique globale à l'interface, la densité de courant $j$ (en $\text{A}\cdot\text{m}^{-2}$) est reliée à la surtension par la loi de Butler-Volmer :
$$j = j_{0} \left[ \exp\left(\frac{(1-\alpha) F \eta}{R T}\right) - \exp\left(-\frac{\alpha F \eta}{R T}\right) \right]$$
où $j_0$ est la densité de courant d'échange et $\alpha \in ]0, 1[$ le coefficient de symétrie.

* **Régime de Tafel :** Pour de fortes surtensions ($\vert \eta \vert \gg \frac{R T}{F}$), l'un des termes exponentiels devient négligeable, menant à une relation linéaire entre $\eta$ et $\ln(\vert j \vert)$ :
  $$\eta = A + B \log(\vert j \vert)$$

### c. Thermodynamique de la corrosion humide
La corrosion est une oxydation spontanée d'un métal par un oxydant du milieu (souvent $O_2$ ou $H^{+}$). 
Un métal $M$ est thermodynamiquement stable face à une solution si son domaine de prédominance (diagramme de Pourbaix $E-\text{pH}$) correspond au domaine d'immunité. S'il se situe dans le domaine de corrosion, il s'oxyde spontanément.

---

## 💡 3. Méthodes de calcul & Algorithmes

### a. Tracé et exploitation des courbes $I = f(E)$ (Voltampérométrie)
1. **Identifier les espèces présentes** dans la solution et à l'électrode.
2. **Établir les potentiels de Nernst** de chaque couple pour déterminer l'ordre thermodynamique des réactions.
3. **Tracer les branches cathodiques et anodiques** en tenant compte des limitations cinétiques (surtension) et des limitations par transport de matière (courant limite de diffusion $j_{\text{lim}}$).
4. **Appliquer la règle de superposition** pour les systèmes complexes ou la construction de mixed-potential (potentiel mixte) lors de l'étude de la corrosion libre (couple redox mixte métal/oxydant).

### b. Résolution d'un problème de corrosion mixte
Pour déterminer la vitesse de corrosion (exprimée par la densité de courant de corrosion $j_{\text{corr}}$ et le potentiel de corrosion $E_{\text{corr}}$) :
1. Écrire la demi-équation d'oxydation du métal : $M \rightarrow M^{n+} + n e^{-}$.
2. Écrire la demi-équation de réduction de l'oxydant (ex: $O_2 + 4 H^{+} + 4 e^{-} \rightarrow 2 H_2 O$).
3. Traduire l'égalité des flux de charges (conservation du courant total nul dans le système isolé) :
   $$I_{\text{anodique}} + I_{\text{cathodique}} = 0$$
4. Résoudre graphiquement (intersection des branches de Tafel) ou analytiquement.

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

* **Oubli de la stœchiométrie dans Nernst :** Ne pas oublier de porter à la puissance les coefficients stœchiométriques $\alpha$ et $\gamma$ dans le logarithme.
* **Confusion entre signe de $I$ et sens thermodynamique :** Une intensité $I > 0$ correspond par convention au fonctionnement en générateur du système étudié (oxydation à l'électrode considérée comme anode), mais attention au sens des électrons (les électrons circulent toujours du pôle négatif vers le pôle positif dans le circuit extérieur).
* **Utilisation abusive de la loi de Nernst hors équilibre :** La relation de Nernst n'est rigoureusement valable qu'à l'équilibre thermodynamique. Hors équilibre (passage d'un courant non nul), le potentiel mesuré est un potentiel de polarisé, et non le potentiel d'équilibre de Nernst.
* **Incompatibilité d'unités dans les constantes :** Veiller à convertir systématiquement $T$ en kelvins ($\text{K}$), $P$ en pascals ($\text{Pa}$) ou bars de manière homogène, et utiliser $R = 8.314 \text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$.
* **Oubli de l'activité du solvant ou des solides :** Par convention, l'activité d'un corps pur solide ou du solvant (eau liquide) est égale à $1$ et n'intervient pas dans le quotient de réaction de Nernst.