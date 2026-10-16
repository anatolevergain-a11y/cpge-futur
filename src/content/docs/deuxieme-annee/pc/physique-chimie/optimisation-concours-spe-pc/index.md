---
title: "Optimisation Concours : Physique-Chimie PC/PC*"
description: "Méthodes canoniques, rédactions modèles type concours et pièges du barème pour les concours CPGE."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Objectif du Module & Exigences des Jurys

En tant que concepteur de sujets et président de jury de concours (Mines-Ponts, Centrale-Supélec, X-ENS), mon constat est unanime : la différence entre un candidat admissible et un candidat bien classé ne réside pas dans la capacité à réciter le cours, mais dans la rigueur absolue de la modélisation, la maîtrise des approximations et la propreté de la rédaction. 

En filière PC/PC*, le niveau d'exigence en Physique-Chimie impose de respecter scrupuleusement les étapes suivantes :
1. **L'analyse dimensionnelle et les conditions de validité** : Ne commencez jamais un calcul sans poser le domaine de validité physique.
2. **L'utilisation correcte de l'outil mathématique** : Justifier les approximations (ordres de grandeur, régimes quasi-stationnaires) avant d'écrire les équations simplifiées.
3. **La rédaction structurée** : Le correcteur cherche des mots-clés précis et des enchaînements logiques irréprochables. Évitez les "donc" injustifiés.

Ce guide détaille les trois questions récurrentes majeures des écrits de Physique-Chimie PC/PC* et fournit les standards de rédaction exigés pour obtenir la note maximale.

---

### 📌 Question Type 1 : Ondes électromagnétiques dans les conducteurs et plasmas : équation de dispersion et effet de peau

#### 💡 Méthode canonique & Étapes de rédaction
Pour traiter une question d'onde électromagnétique dans un milieu matériel (conducteur ohmique ou plasma), la méthode standard est la suivante :
1. Écrire les équations de Maxwell locales dans le milieu.
2. Utiliser la relation constitutive (loi d'Ohm locale $\vec{j} = \gamma \vec{E}$ ou équation du mouvement des électrons pour un plasma).
3. Établir l'équation de propagation (généralement sur le champ électrique $\vec{E}$) en combinant le rotatif du rotatif.
4. Injecter une solution sous forme d'onde plane monochromatique (OPM) complexe : $\underline{\vec{E}}(z, t) = \underline{E}_0 \exp(\mathrm{j}(\omega t - \underline{k}z)) \vec{u}_x$.
5. En déduire l'équation de dispersion, puis exprimer le nombre d'onde complexe $\underline{k}$, le coefficient d'atténuation $\alpha$ et la longueur de pénétration (effet de peau) $\delta$.

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé type :** Établir l'équation de dispersion d'une OPM polarisée rectilignement se propageant dans un conducteur ohmique de conductivité $\gamma$. En déduire l'expression de l'épaisseur de peau $\delta$ à la pulsation $\omega$.

**Rédaction type exigée sur la copie :**
"Le milieu étant supposé linéaire, homogène, isotrope et neutre en volume ($\rho_{\text{libre}} = 0$), les équations de Maxwell locales s'écrivent dans le référentiel du laboratoire galiléen :
$$\text{rot}\,\vec{E} = -\frac{\partial \vec{B}}{\partial t}$$
$$\text{rot}\,\vec{B} = \mu_0 \gamma \vec{E} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$

En appliquant l'opérateur rotationnel à l'équation de Faraday et en utilisant l'identité $\text{rot}(\text{rot}\,\vec{E}) = \text{grad}(\text{div}\,\vec{E}) - \Delta \vec{E}$, sachant que $\text{div}\,\vec{E} = 0$, il vient :
$$\Delta \vec{E} - \mu_0 \gamma \frac{\partial \vec{E}}{\partial t} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

Recherchons une solution sous forme d'onde plane monochromatique se propageant suivant l'axe $(Oz)$, de pulsation $\omega$ et de vecteur d'onde complexe $\underline{k} = k' - \mathrm{j}\alpha$ :
$$\underline{\vec{E}}(z, t) = \underline{E}_0 \exp\left(\mathrm{j}(\omega t - \underline{k}z)\right)\vec{u}_x$$

Les opérateurs de dérivation se traduisent par :
$$\Delta \to -\underline{k}^2, \quad \frac{\partial}{\partial t} \to \mathrm{j}\omega, \quad \frac{\partial^2}{\partial t^2} \to -\omega^2$$

L'injection dans l'équation de propagation conduit à l'équation de dispersion :
$$-\underline{k}^2 - \mu_0 \gamma (\mathrm{j}\omega) - \mu_0 \varepsilon_0 (-\omega^2) = 0 \implies \underline{k}^2 = \mu_0 \varepsilon_0 \omega^2 - \mathrm{j}\mu_0 \gamma \omega$$

En régime de bon conducteur, le terme de conduction l'emporte devant le courant de déplacement : $\gamma \gg \varepsilon_0 \omega$. L'équation de dispersion se simplifie alors en :
$$\underline{k}^2 \approx -\mathrm{j}\mu_0 \gamma \omega = \mu_0 \gamma \omega \exp\left(-\mathrm{j}\frac{\pi}{2}\right)$$

En extrayant la racine carrée principale, on obtient le nombre d'onde complexe :
$$\underline{k} = \sqrt{\mu_0 \gamma \omega} \exp\left(-\mathrm{j}\frac{\pi}{4}\right) = \sqrt{\frac{\mu_0 \gamma \omega}{2}} (1 - \mathrm{j})$$

L'champ électrique s'atténue spatialement selon le facteur $\exp(-\alpha z)$ avec $\alpha = \text{Im}(\underline{k}) = \sqrt{\frac{\mu_0 \gamma \omega}{2}}$. 
L'épaisseur de peau $\delta$, définie comme la distance sur laquelle l'amplitude est divisée par $\mathrm{e}$, s'établit donc à :
$$\delta = \frac{1}{\alpha} = \sqrt{\frac{2}{\mu_0 \gamma \omega}}"

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oubli de la justification de $\text{div}\,\vec{E} = 0$** : Perte systématique de points car le milieu n'est pas rigoureusement diélectrique pur. Il faut invoquer la neutralité locale ou l'absence de charges libres macroscopiques.
- **Confusion entre racine carrée algébrique et complexe** : Ne pas expliciter le passage à la racine d'un nombre complexe sous forme polaire.
- **Absence d'unités ou d'analyse dimensionnelle** : Ne jamais oublier de vérifier que $[\delta] = \text{m}$.

---

### 📌 Question Type 2 : Cinétique chimique formelle : approximation de l'état quasi-stationnaire (AEQS) et étape quasi-déterminante

#### 💡 Méthode canonique & Étapes de rédaction
Face à un mécanisme réactionnel complexe en chaîne ou comportant des intermédiaires réactionnels (IR) :
1. Écrire les bilans de vitesse pour chaque constituant, en particulier pour les intermédiaires réactionnels.
2. Poser l'**AEQS** (Approximation de l'État Quasi-Stationnaire) sur les intermédiaires réactionnels : $\frac{\mathrm{d}[\text{IR}]}{\mathrm{d}t} \approx 0$, en justifiant que leur concentration reste faible et stable après une brève période d'induction.
3. Exprimer la concentration de l'intermédiaire en fonction des concentrations des réactifs et des constantes cinétiques.
4. Identifier l'**étape cinétiquement déterminante** (étape la plus lente ou étape dont l'activation conditionne la vitesse globale) si l'énoncé le demande, ou injecter l'expression de l'IR dans la loi de vitesse globale.

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé type :** Soit le mécanisme réactionnel suivant :
1) $A + B \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} I$ (rapide devant la suite)
2) $I + C \xrightarrow{k_2} D + A$ (lent)
Appliquer l'AEQS à l'intermédiaire $I$ et déterminer la loi de vitesse de formation du produit $D$.

**Rédaction type exigée sur la copie :**
"L'intermédiaire réactionnel $I$ est produit par l'étape 1 et consommé par les étapes 1 et 2. Sa vitesse d'évolution s'écrit :
$$\frac{\mathrm{d}[I]}{\mathrm{d}t} = k_1[A][B] - k_{-1}[I] - k_2[I][C]$$

Après la période d'induction, l'intermédiaire $I$ est très réactif et sa concentration reste faible et quasi-constante au cours du temps. On applique l'Approximation de l'État Quasi-Stationnaire (AEQS) :
$$\frac{\mathrm{d}[I]}{\mathrm{d}t} \approx 0$$

Il vient alors l'égalité algébrique :
$$k_1[A][B] - (k_{-1} + k_2[C])[I] = 0 \implies [I] = \frac{k_1[A][B]}{k_{-1} + k_2[C]}$$

La vitesse de formation du produit $D$ est régie par l'étape lente (étape 2) :
$$v = \frac{\mathrm{d}[D]}{\mathrm{d}t} = k_2[I][C]$$

En substituant l'expression de $[I]$ dans cette relation, on obtient la loi de vitesse globale :
$$v = \frac{k_1 k_2 [A][B][C]}{k_{-1} + k_2[C]}$$

*Discussion / Cas limite :* Si l'étape 2 est cinétiquement limitante devant le retour sur l'équilibre 1, on a $k_{-1} \gg k_2[C]$. La vitesse se simplifie alors en un ordre apparent :
$$v \approx \frac{k_1 k_2}{k_{-1}} [A][B][C]$$
La réaction est alors d'ordre global 3."

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Absence de phrase de justification pour l'AEQS** : Écrire $\frac{\mathrm{d}[I]}{\mathrm{d}t} = 0$ sans mentionner la phrase "En raison de la forte réactivité de l'intermédiaire réactionnel, on applique l'AEQS..." est lourdement sanctionné.
- **Oubli de la stœchiométrie dans les vitesses** : Attention aux coefficients multiplicatifs issus des lois de Guldberg lorsque les actes élémentaires ne sont pas monomoléculaires ou bimoléculaires simples.
- **Confusions entre ordre cinétique et molecularité** : Ne jamais confondre l'ordre global (expérimental ou mathématique) et la molecularité d'un acte élémentaire.

---

### 📌 Question Type 3 : Diagrammes d'Elingham, courbes intensité-potentiel et étude de la corrosion

#### 💡 Méthode canonique & Étapes de rédaction
Pour analyser un problème de thermodynamique électrochimique et de corrosion humide :
1. Identifier les espèces en présence et tracer ou exploiter les diagrammes thermodynamiques (potentiel-pH ou Elingham).
2. Pour l'étude de la corrosion, tracer qualitativement ou quantitativement les courbes intensité-potentiel ($I = f(E)$ ou $j = f(E)$) des couples oxydant/réducteur en interaction (par exemple, le métal $M/M^{n+}$ et le couple de reduction du dioxygène ou des ions oxonium $\text{H}^+/\text{H}_2$).
3. Appliquer la **loi d'additivité des courants** au potentiel mixte (potentiel de corrosion $E_{\text{corr}}$) pour un système en déséquilibre chimique mais stationnaire.
4. Conclure sur le régime de corrosion (immunité, corrosion, passivation) et calculer la vitesse de corrosion (exprimée en $\text{A}\cdot\text{m}^{-2}$ ou convertie en $\mu\text{m}\cdot\text{an}^{-1}$ via la loi de Faraday).

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé type :** Définir graphiquement et analytiquement le potentiel de corrosion $E_{\text{corr}}$ et la densité de courant de corrosion $j_{\text{corr}}$ d'une plaque de fer plongée dans une solution aqueuse acide désaérée. Écrire les demi-équations électroniques et exploiter la loi de Tafel.

**Rédaction type exigée sur la copie :**
"Les couples redox mis en jeu lors de la corrosion du fer en milieu acide sont $\text{Fe}^{2+}/\text{Fe}$ et $\text{H}^+/\text{H}_2$. Les demi-équations électroniques correspondantes sont :
$$\text{Fe}_{(s)} \rightleftarrows \text{Fe}^{2+}_{(aq)} + 2\text{e}^-$$
$$2\text{H}^+_{(aq)} + 2\text{e}^- \rightleftarrows \text{H}_{2(g)}$$

En situation de corrosion libre, aucun générateur extérieur n'est branché. Le système est le siège de réactions couplées sur l'interface métal/solution. La cinétique électrochimique est régie par la surtension et la loi de Tafel pour les réactions d'oxydation et de réduction.

Le système atteint un état stationnaire caractérisé par un unique potentiel mixte, appelé **potentiel de corrosion** $E_{\text{corr}}$, pour lequel le flux total de charges (ou densité de courant totale) s'annule :
$$j_{\text{total}}(E_{\text{corr}}) = j_{\text{anode}}(E_{\text{corr}}) + j_{\text{cathode}}(E_{\text{corr}}) = 0$$

Soit :
$$j_{\text{Fe} \to \text{Fe}^{2+}}(E_{\text{corr}}) = |j_{\text{H}^+ \to \text{H}_2}(E_{\text{corr}})| = j_{\text{corr}}$$

Graphiquement, $E_{\text{corr}}$ et $j_{\text{corr}}$ correspondent au point d'intersection entre la branche anodique du fer et la branche cathodique de réduction des protons.

En supposant les surtensions suffisamment élevées pour appliquer la loi de Tafel sous la forme $\eta = a + b \log(|j|)$, les expressions des densités de courant partielles s'écrivent :
$$j_{\text{anodique}} = j_0^{\text{Fe}} \exp\left(\frac{\alpha_{\text{a}} F (E - E_{\text{eq, Fe}})}{RT}\right)$$
$$|j_{\text{cathodique}}| = j_0^{\text{H}^+} \exp\left(-\frac{\alpha_{\text{c}} F (E - E_{\text{eq, H}^})}{RT}\right)$$

L'égalité des flux à $E = E_{\text{corr}}$ permet d'isoler analytiquement $E_{\text{corr}}$ par prise du logarithme népérien."

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Inversion des signes des courants** : Ne pas respecter la convention (courant anodique positif car oxydation = départ d'électrons vers l'extérieur, courant cathodique négatif par convention algébrique de réduction).
- **Confusion entre thermodynamique et cinétique** : Un métal thermodynamiquement instable (domaine de corrosion sur le diagramme $E-\text{pH}$) peut ne pas se corroder à vitesse mesurable si la cinétique est bloquée par une surtension élevée (cinétique lente ou phénomène de passivation). Il faut impérativement mentionner cette distinction fondamentale.
- **Erreurs d'unités dans la loi de Faraday pour la vitesse de corrosion** : Oubli du nombre d'électrons $n$ échangés ou de la masse molaire lors de la conversion de $j_{\text{corr}}$ en perte d'épaisseur par unité de temps.