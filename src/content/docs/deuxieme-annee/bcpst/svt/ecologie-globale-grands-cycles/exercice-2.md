---
title: 'Exercice 2 : Impacts des perturbations anthropiques sur les écosystèmes'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les écosystèmes terrestres et aquatiques sont soumis à des pressions anthropiques majeures, parmi lesquelles l'eutrophisation des milieux aquatiques et la perturbation du cycle global du carbone occupent une place centrale. L'objectif de ce problème est d'analyser, à l'aide de modèles mathématiques compartimentés, la dynamique de la matière organique et de l'oxygène dissous dans un lac soumis à des apports accrus en nitrates ($\text{NO}_3^-$) et phosphates ($\text{PO}_4^{3-}$), ainsi que l'impact de ces perturbations sur le puits de carbone planétaire.

On considère un lac de volume $V = 1{,}0 \times 10^7 \, \text{m}^3$, considéré comme parfaitement agité. Ce lac est alimenté par une rivière à un débit constant $Q = 5{,}0 \times 10^3 \, \text{m}^3.\text{j}^{-1}$ et se dévide au même rythme, de sorte que le volume $V$ reste constant. 

Soit $C(t)$ la concentration en phosphore total dans le lac (exprimée en $\text{mg}.\text{m}^{-3}$). Le phosphore est le facteur limitant de la production primaire phytoplanctonique. Le bilan massique du phosphore dans le lac s'écrit selon l'équation différentielle :

$$\frac{dV}{dt} = 0 \implies V \frac{dC}{dt} = Q C_{\text{in}} - Q C(t) - k_s V C(t)$$

Où :
- $C_{\text{in}} = 50 \, \text{mg}.\text{m}^{-3}$ est la concentration en phosphore dans les eaux entrantes (enrichies par les activités agricoles).
- $k_s = 0{,}05 \, \text{j}^{-1}$ est le coefficient global de sédimentation du phosphore (précipitation et enfouissement dans le sédiment).

Dans une seconde partie, nous étudierons la répercussion de la biomasse algale sur la concentration en oxygène dissous $\text{O}_2$ et l'apparition potentielle d'une zone d'hypoxie.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Analyse préliminaire et mise en équation**
   - Rappeler brièvement le rôle biogéochimique du phosphore dans l'eutrophisation des écosystèmes aquatiques.
   - Mettre l'équation différentielle régissant l'évolution de $C(t)$ sous la forme canonique :
     $$\frac{dC}{dt} + \alpha C(t) = \beta$$
     Exprimer $\alpha$ et $\beta$ en fonction de $Q$, $V$ et $k_s$. Préciser leurs dimensions et unités respectives.

2. **Résolution et régime permanent**
   - Résoudre cette équation différentielle en supposant qu'initialement, à $t = 0$, la concentration dans le lac est $C(0) = C_0$.
   - Déterminer l'expression de la concentration à l'équilibre stationnaire $C_{\text{eq}}$ lorsque $t \to +\infty$. Calculer sa valeur numérique en $\text{mg}.\text{m}^{-3}$.
   - Calculer le temps caractéristique $\tau$ du système (exprimé en jours) et interpréter sa signification écologique.

3. **Couplage biogéochimique : Impact sur l'oxygène dissous**
   - La production primaire nette génère une biomasse végétale dont la décomposition bactérienne consomme de l'oxygène selon une stœchiométrie globale où $1 \, \text{mg}$ de phosphore conduit, via la stœchiométrie de Redfield, à la consommation d'environ $150 \, \text{mg}$ de $\text{O}_2$ lors de la minéralisation.
   - Soit $O(t)$ la concentration en oxygène dissous. On pose l'équation simplifiée de son bilan :
     $$\frac{dO}{dt} = K_L (O_{\text{sat}} - O(t)) - R_{\text{bio}}$$
     où $K_L = 0{,}20 \, \text{j}^{-1}$ est le coefficient de réoxygénation par l'atmosphère, $O_{\text{sat}} = 10{,}0 \, \text{mg}.\text{m}^{-3}$ la concentration à saturation, et $R_{\text{bio}} = \gamma \cdot k_s \cdot C_{\text{eq}}$ le taux de consommation biologique lié à la dégradation de la matière organique sédimentée/suspendue, avec $\gamma = 150$.
   - Calculer $R_{\text{bio}}$ à l'équilibre, puis déterminer la concentration stationnaire en oxygène dissous $O_{\text{eq}}$.

4. **Analyse critique du modèle et esprit concours**
   - Le seuil critique d'hypoxie létale pour la faune ichtyologique est fixé à $2{,}0 \, \text{mg}.\text{m}^{-3}$. Le lac étudié est-il en crise dystrophe ?
   - Discuter les limites majeures de ce modèle compartimenté simple face à la réalité d'un écosystème lacustre complexe (on attend au moins deux arguments critiques rigoureux portant sur les hypothèses biologiques ou physiques).

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pensez à diviser l'équation initiale par le volume $V$ pour obtenir la forme standard d'une équation différentielle linéaire du premier ordre à coefficients constants. Vérifiez l'homogénéité des termes ($\text{flux massique par unité de volume}$).
- **Q2 :** La solution générale d'une équation du type $y' + \alpha y = \beta$ est la somme de la solution générale de l'équation sans second membre et d'une solution particulière constante.
- **Q3 :** Procédez par substitution directe des valeurs trouvées à la question précédente. Attention à bien mener les applications numériques avec leurs unités.
- **Q4 :** Pour l'esprit critique, pensez aux variations saisonnières (température et stratification thermique de type thermocline/hypolimnion), ainsi qu'à la non-linéarité des interactions biologiques (boucles de rétroaction, prédation, recyclage interne des nutriments par les sédiments).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Analyse préliminaire et mise en équation
* **Rôle du phosphore :** Le phosphore sous forme de phosphate ($\text{PO}_4^{3-}$) est généralement le facteur limitant de la production primaire dans les écosystèmes dulçaquicoles. Un apport massif anthropique lève cette limitation, entraînant une prolifération algale (bloom phytoplanctonique).
* **Mise en équation :**
  L'équation initiale est :
  $$V \frac{dC}{dt} = Q C_{\text{in}} - Q C(t) - k_s V C(t)$$
  En divisant par le volume $V$ :
  $$\frac{dC}{dt} = \frac{Q}{V} C_{\text{in}} - \left(\frac{Q}{V} + k_s\right) C(t)$$
  On identifie la forme canonique $\frac{dC}{dt} + \alpha C(t) = \beta$ avec :
  - $\alpha = \frac{Q}{V} + k_s$ (dimension de $\text{temps}^{-1}$, unité : $\text{j}^{-1}$)
  - $\beta = \frac{Q}{V} C_{\text{in}}$ (dimension d'une concentration par unité de temps, unité : $\text{mg}.\text{m}^{-3}.\text{j}^{-1}$)

---

#### 2. Résolution et régime permanent
* **Résolution de l'équation différentielle :**
  L'équation homogène associée $\frac{dC}{dt} + \alpha C(t) = 0$ a pour solution générale :
  $$C_H(t) = K e^{-\alpha t} \quad (K \in \mathbb{R})$$
  Une solution particulière constante $C_p$ s'obtient en annulant la dérivée :
  $$0 + \alpha C_p = \beta \implies C_p = \frac{\beta}{\alpha}$$
  La solution générale est donc :
  $$C(t) = K e^{-\alpha t} + \frac{\beta}{\alpha}$$
  En utilisant la condition initiale $C(0) = C_0$, on trouve $K = C_0 - \frac{\beta}{\alpha}$.
  Ainsi :
  $$C(t) = \left(C_0 - \frac{\beta}{\alpha}\right) e^{-\alpha t} + \frac{\beta}{\alpha}$$

* **Concentration à l'équilibre stationnaire ($t \to +\infty$) :**
  $$\lim_{t \to +\infty} C(t) = C_{\text{eq}} = \frac{\beta}{\alpha} = \frac{\frac{Q}{V} C_{\text{in}}}{\frac{Q}{V} + k_s} = \frac{C_{\text{in}}}{1 + \frac{k_s V}{Q}}$$

  * **Application numérique :**
    Calculons d'abord le taux de renouvèlement $\frac{Q}{V}$ :
    $$\frac{Q}{V} = \frac{5{,}0 \times 10^3 \, \text{m}^3.\text{j}^{-1}}{1{,}0 \times 10^7 \, \text{m}^3} = 5{,}0 \times 10^{-4} \, \text{j}^{-1}$$
    On a $k_s = 5{,}0 \times 10^{-2} \, \text{j}^{-1}$. Ainsi, $\alpha = 5{,}0 \times 10^{-4} + 5{,}0 \times 10^{-2} = 5{,}05 \times 10^{-2} \, \text{j}^{-1}$.
    La concentration à l'équilibre vaut :
    $$C_{\text{eq}} = \frac{5{,}0 \times 10^{-4} \times 50}{5{,}05 \times 10^{-2}} = \frac{0{,}025}{0{,}0505} \approx 0{,}495 \, \text{mg}.\text{m}^{-3}$$
    *(Note : Bien que faible en apparence dans la masse d'eau en raison de la sédimentation rapide, ce flux soutient une biomasse algale considérable).*

* **Temps caractéristique :**
  Le temps caractéristique du système est $\tau = \frac{1}{\alpha} = \frac{1}{5{,}05 \times 10^{-2}} \approx 19{,}8 \, \text{jours}$.
  Ce temps indique la rapidité avec laquelle le lac s'adapte à une modification des apports amont (inertie du système d'environ 20 jours).

---

#### 3. Couplage biogéochimique : Impact sur l'oxygène dissous
* **Calcul du taux de consommation biologique $R_{\text{bio}}$ :**
  Le taux de minéralisation de la matière organique liée au phosphore à l'équilibre est proportionnel au flux de phosphore sédimenté/consommé par unité de temps :
  $$R_{\text{bio}} = \gamma \cdot (k_s C_{\text{eq}}) \quad \text{ou assimilé au flux global}$$
  Plus rigoureusement, la consommation d'oxygène est liée à la dégradation de la biomasse produite, que l'on modélise par $R_{\text{bio}} = \gamma \cdot k_s \cdot C_{\text{eq}}$.
  * Application numérique :
    $$R_{\text{bio}} = 150 \times (5{,}0 \times 10^{-2} \, \text{j}^{-1}) \times 0{,}495 \, \text{mg}.\text{m}^{-3} = 150 \times 0{,}02475 = 3{,}7125 \, \text{mg}.\text{m}^{-3}.\text{j}^{-1}$$

* **Détermination de la concentration stationnaire en oxygène $O_{\text{eq}}$ :**
  À l'équilibre pour l'oxygène, $\frac{dO}{dt} = 0$, donc :
  $$K_L (O_{\text{sat}} - O_{\text{eq}}) - R_{\text{bio}} = 0 \implies O_{\text{eq}} = O_{\text{sat}} - \frac{R_{\text{bio}}}{K_L}$$
  * Application numérique :
    $$O_{\text{eq}} = 10{,}0 - \frac{3{,}7125}{0{,}20} = 10{,}0 - 18{,}56 = -8{,}56 \, \text{mg}.\text{m}^{-3}$$
  * *Résultat mathématique brut aberrant :* La valeur obtenue est négative, ce qui traduit une limite physique évidente du modèle simple (la concentration réelle ne peut descendre en dessous de $0$). Cela signifie que la demande biologique en oxygène dépasse largement la capacité maximale de réoxygénation par l'atmosphère dans les conditions du modèle, conduisant à une **anoxie totale** ($O_{\text{eq}} = 0 \, \text{mg}.\text{m}^{-3}$).

---

#### 4. Analyse critique du modèle et esprit concours
* **Risque de crise dystrophe :**
  Puisque la concentration en oxygène chute à $0 \, \text{mg}.\text{m}^{-3}$ (bien en deçà du seuil critique d'hypoxie de $2{,}0 \, \text{mg}.\text{m}^{-3}$), le lac est en situation de **crise dystrophe majeure** (mortalité piscicole massive, apparition de conditions anaérobies favorables aux bactéries sulfato-réductrices produisant du $\text{H}_2\text{S}$).

* **Limites critiques du modèle compartimenté :**
  1. **Hypothèse de mélange parfait (agitation homogène) :** En réalité, les lacs profonds subissent une stratification thermique saisonnière (épilimnion chaud et oxygéné, hypolimnion froid et isolé). L'oxygène ne se diffuse pas uniformément, et l'hypolimnion s'anoxie beaucoup plus vite que ne le prédit un modèle à un seul compartiment homogène.
  2. **Dynamique non linéaire et rétroactions sédimentaires :** Le modèle suppose un coefficient de sédimentation $k_s$ constant. Or, en condition d'anoxie, le fer présent dans les sédiments change de degré d'oxydation ($\text{Fe}^{3+} \to \text{Fe}^{2+}$), ce qui libère massivement le phosphore piégé (*libération benthique* ou *internal loading*). Ce recyclage interne amplifie l'eutrophisation de manière autocatalytique, un phénomène totalement ignoré par l'équation linéaire stationnaire proposée ici.