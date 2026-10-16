---
title: 'Exercice 1 : Groupes, anneaux, corps'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la sécurisation des transmissions d'informations et du traitement du signal, l'utilisation de structures algébriques finies (anneaux de polynômes, corps finis) est omniprésente. Ce problème s'intéresse à une structure d'anneau quotient et à l'étude de ses éléments inversibles, qui modélisent l'espace des clés ou des codes correcteurs d'erreurs de type cyclique.

Soit $p$ un nombre premier impair. On considère l'anneau des polynômes à coefficients dans $\mathbb{Z}/p\mathbb{Z}$, noté $(\mathbb{Z}/p\mathbb{Z})[X]$. 
On pose $A = (\mathbb{Z}/p\mathbb{Z})[X]/(X^2 - \bar{1})$, où $\bar{1}$ désigne la classe de $1$ modulo $p$. Tout élément de $A$ s'écrit de manière unique sous la classe du polynôme $a + bX$ avec $(a, b) \in (\mathbb{Z}/p\mathbb{Z})^2$. 

*Note de modélisation et esprit critique :* Dans les systèmes de communication réels (comme les transmissions par satellite ou la fibre optique), les perturbations du canal de transmission sont modélisées par des lois probabilistes (bruit blanc gaussien). L'utilisation d'une arithmétique exacte dans un corps ou un anneau fini permet d'éliminer les erreurs d'arrondi inhérentes aux calculs flottants, mais suppose une synchronisation parfaite et l'absence de perte de paquets, ce qui constitue une idéalisation physique qu'il conviendra de nuancer lors du dimensionnement du système.

---

### ❓ Questions progressives

1. **Structure d'anneau de $A$**
   Donner la structure de groupe abélien de $(A, +)$ et déterminer son cardinal en fonction de $p$. Définir la loi de multiplication induite sur les couples $(a, b)$ par l'isomorphisme canonique avec $\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}$.

2. **Recherche des éléments inversibles**
   Un élément $\bar{a} + \bar{b}X$ de $A$ est dit inversible s'il existe $\bar{c} + \bar{d}X \in A$ tel que $(\bar{a} + \bar{b}X)(\bar{c} + \bar{d}X) = \bar{1}$.
   Montrer que $\bar{a} + \bar{b}X$ est inversible dans $A$ si et seulement si $a^2 - b^2 \not\equiv 0 \pmod p$.

3. **Analyse de la structure multiplicative**
   On note $A^\times$ l'ensemble des éléments inversibles de $A$. 
   a) Exprimer le cardinal de $A^\times$ en fonction de $p$.
   b) L'anneau $A$ est-il un intégre ? Est-ce un corps ? Justifier rigoureusement.

4. **Étude énergétique et critique du modèle appliqué au traitement du signal**
   Dans une application de transmission de données à haut débit, le calcul dans l'anneau $A$ est implémenté sur des circuits logiques (FPGA). 
   a) Si l'on choisit $p = 2^{31} - 1$ (nombre de Mersenne premier), estimer l'impact de la taille des mots mémoire sur la consommation énergétique par opération, sachant que la puissance dissipée $P$ obéit à la loi empirique $P \propto f \cdot C \cdot V^2 \cdot \log_2(p)$ (où $f$ est la fréquence d'horloge, $C$ la capacité de commutation et $V$ la tension d'alimentation).
   b) Discuter des limites de ce modèle algébrique face à un canal bruité où les erreurs ne sont plus algébriques mais aléatoires.

---

### 💡 Pistes & Indications

* **Indication 1 :** Pour la question 1, utilisez la division euclidienne par $X^2 - \bar{1}$ pour tout polynôme de $\mathbb{Z}/p\mathbb{Z}[X]$. Le théorème des restes chinois dans $(\mathbb{Z}/p\mathbb{Z})[X]$ (ou un isomorphisme explicite basé sur les idempotents) simplifiera l'étude.
* **Indication 2 :** Pour l'inversibilité, écrivez le système linéaire en $(c, d)$ associé à l'équation $(a+bX)(c+dX) = 1$ et calculez son déterminant dans $\mathbb{Z}/p\mathbb{Z}$.
* **Indication 3 :** Pensez aux diviseurs de zéro pour l'intégrité. Si $a^2 - b^2 = 0$, que peut-on dire de $(a-b)(a+b)$ dans le corps $\mathbb{Z}/p\mathbb{Z}$ ?
* **Indication 4 :** Pour l'analyse critique, reliez la complexité arithmétique au coût énergétique et rappelez qu'un modèle algébrique abstrait ne gère pas la dégradation physique du signal (atténuation, gigue).

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Structure de $A$ et cardinal :**
   Par définition, $A = (\mathbb{Z}/p\mathbb{Z})[X]/(X^2 - \bar{1})$. Par le théorème de division euclidienne dans $\mathbb{Z}/p\mathbb{Z}[X]$, tout polynôme est congruent modulo $X^2 - \bar{1}$ à un unique polynôme de degré inférieur ou égal à $1$. Ainsi, $A = \{ \bar{a} + \bar{b}X \mid (a, b) \in (\mathbb{Z}/p\mathbb{Z})^2 \}$.
   Le cardinal de $A$ est donc $p^2$.
   Munie de l'addition et de la multiplication induites, $(A, +, \times)$ est un anneau commutatif unitaire.
Remarque: * Puisque $X^2 - \bar{1} = (X - \bar{1})(X + \bar{1})$ et que $\bar{1} \neq -\bar{1}$ dans $\mathbb{Z}/p\mathbb{Z}$ (car $p$ est impair, donc $p \neq 2$), les polynômes $X - \bar{1}$ et $X + \bar{1}$ sont premiers entre eux. Par le théorème des restes chinois, $A$ est isomorphe (en tant qu'anneau) à $\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}$ via l'application :
   $$\Phi : P(X) \pmod{X^2-1} \mapsto (P(1), P(-1))$$

2. **Caractérisation des inversibles :**
   Soit $Z = \bar{a} + \bar{b}X$. Soit $Z' = \bar{c} + \bar{d}X$ son éventuel inverse.
   On calcule le produit dans $A$ en tenant compte de $X^2 = \bar{1}$ :
   $$(\bar{a} + \bar{b}X)(\bar{c} + \bar{d}X) = (\overline{ac + bd}) + (\overline{ad + bc})X$$
   Cette expression est égale à $\bar{1}$ (c'est-à-dire $\bar{1} + \bar{0}X$) si et seulement si :
   $$\begin{cases} ac + bd \equiv 1 \pmod p \\ ad + bc \equiv 0 \pmod p \end{cases}$$
   C'est un système linéaire de Cramer en $(c, d)$ dont le déterminant de la matrice associée est :
   $$\det \begin{pmatrix} a & b \\ b & a \end{pmatrix} = a^2 - b^2$$
   Le système possède une unique solution si et seulement si $a^2 - b^2 \not\equiv 0 \pmod p$.
   Ainsi, $\bar{a} + \bar{b}X$ est inversible si et seulement si $a^2 - b^2 \not\equiv 0 \pmod p$.

3. **Structure multiplicative et intégrité :**
   a) Grâce à l'isomorphisme $\Phi$ vers $\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}$, un élément $(\bar{a}, \bar{b})$ de $\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}$ est inversible si et seulement si ses deux composantes sont non nulles. 
   Le nombre d'éléments inversibles est donc $(p-1) \times (p-1) = (p-1)^2$.
   b) L'anneau $A$ n'est **pas intègre**. En effet, si l'on considère les éléments $\alpha = \bar{1} + X$ et $\beta = \bar{1} - X$, on a :
   $$\alpha \times \beta = (\bar{1} + X)(\bar{1} - X) = \bar{1} - X^2 = \bar{1} - \bar{1} = \bar{0}$$
   Or, $\alpha \neq \bar{0}$ et $\beta \neq \bar{0}$ dans $A$. Ce sont des diviseurs de zéro.
   Puisque $A$ possède des diviseurs de zéro non nuls, ce n'est **pas un corps** (tout corps est intègre).

4. **Analyse critique et énergétique :**
   a) Avec $p = 2^{31} - 1$, la taille des opérandes en mémoire est de $31\text{ bits}$. La complexité matérielle des multiplieurs grandit en $\mathcal{O}((\log_2 p)^2)$. La loi d'échelle indique que la consommation énergétique par cycle de traitement augmente quadratiquement avec le nombre de bits, ce qui impose un compromis strict entre la sécurité du code (grand $p$) et l'autonomie des systèmes embarqués (limitation de la puissance $P$).
   b) **Limites du modèle :** L'algèbre de l'anneau $A$ suppose une exactitude absolue des symboles reçus. Dans un canal de transmission réel, le bruit thermique ou les interférences inter-symboles corrompent les données de manière analogique. Le passage par une quantification (décision dure) pour ramener le signal dans $\mathbb{Z}/p\mathbb{Z}$ entraîne une perte d'information irréversible (paradoxe de l'information). Le modèle algébrique doit donc impérativement être couplé à une couche probabiliste (décodage par maximum de vraisemblance) pour être viable industriellement.