---
title: "Optimisation Concours : Physique-Chimie Sup"
description: "Méthodes canoniques, rédactions modèles type concours et pièges du barème pour les concours CPGE."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Objectif du Module & Exigences des Jurys

En tant que concepteur de sujets et président de jury de concours, mon constat est unanime : la différence entre un élève admissible dans les classes préparatoires aux grandes écoles (CPGE) et un candidat intégré réside rarement dans la quantité de connaissances engrangées, mais dans la **maîtrise absolue de la rigueur rédactionnelle et des méthodes canoniques**. 

En première année (filière PCSI), les examinateurs des concours (Mines-Ponts, Centrale-Supélec, CCINP, Agro-Véto) attendent une structuration irréprochable :
1. **L'analyse dimensionnelle systématique** avant toute application numérique ou validation littérale.
2. **L'explicitation des hypothèses physiques** (ex. : régime quasi-stationnaire, système fermé, équilibre thermodynamique local, approximation des régimes linéaires).
3. **La clarté des notations** et le respect des unités du système international (SI).

Ce guide détaille les trois questions récurrentes majeures en Physique-Chimie Sup, en vous livrant la rédaction type attendue par les correcteurs pour maximiser votre note.

---

### 📌 Question Type 1 : Oscillateurs harmoniques et amortis : étude en régime sinusoïdal forcé et diagrammes de Bode

#### 💡 Méthode canonique & Étapes de rédaction
Pour traiter un système linéaire excité par une source sinusoïdale de pulsation $\omega$, la démarche exigée par le jury comprend quatre étapes strictes :
1. **Mise en équation différentielle :** Établir l'équation différentielle régissant la grandeur de sortie $s(t)$ en fonction de l'entrée $e(t)$ en appliquant les lois fondamentales (ex. : principe fondamental de la dynamique, lois de Kirchhoff en régime complexe).
2. **Mise sous forme canonique :** Identifier la pulsation propre $\omega_0$, le facteur de qualité $Q$ (ou le coefficient d'amortissement $\xi = \frac{1}{2Q}$) et le gain statique $K$.
3. **Passage en notation complexe :** Utiliser les amplitudes complexes $\underline{S}$ et $\underline{E}$ pour déterminer la fonction de transfert $\underline{H}(j\omega) = \frac{\underline{S}}{\underline{E}}$.
4. **Analyse asymptotique et tracés de Bode :** Étudier le module $G_{\text{dB}}(\omega) = 20 \log_{10}(|\underline{H}(j\omega)|)$ et la phase $\varphi(\omega)$ aux limites ($\omega \to 0$ et $\omega \to +\infty$), ainsi qu'au voisinage de la résonance.

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé type :** On considère un circuit RLC série excité par une tension aux bornes $e(t) = E_0 \cos(\omega t)$. Établir la fonction de transfert $\underline{H}(j\omega) = \frac{\underline{u_C}}{\underline{E}}$ sous forme canonique, puis déterminer la pulsation de résonance en tension $\omega_r$.

**Rédaction type exigée :**
*Appliquons la loi des mailles dans le circuit RLC série en régime sinusoïdal permanent à l'aide des amplitudes complexes :*
$$\underline{E} = R\underline{i} + jL\omega\underline{i} + \underline{u_C}$$

*Sachant que le courant s'exprime par $\underline{i} = jC\omega\underline{u_C}$, l'équation devient :*
$$\underline{E} = \left( R + jL\omega + \frac{1}{jC\omega} \right) jC\omega \underline{u_C} = \left( 1 - LC\omega^2 + jRC\omega \right) \underline{u_C}$$

*La fonction de transfert s'écrit alors :*
$$\underline{H}(j\omega) = \frac{\underline{u_C}}{\underline{E}} = \frac{1}{1 - \frac{\omega^2}{\omega_0^2} + j \frac{\omega}{Q\omega_0}}$$

*où l'on a introduit la pulsation propre $\omega_0 = \frac{1}{\sqrt{LC}}$ et le facteur de qualité $Q = \frac{1}{R}\sqrt{\frac{L}{C}}$. L'analyse dimensionnelle montre que $\omega_0 t$ est sans dimension, ce qui est cohérent. Le module de la fonction de transfert est :*
$$H(\omega) = \frac{1}{\sqrt{\left(1 - \frac{\omega^2}{\omega_0^2}\right)^2 + \frac{1}{Q^2}\left(\frac{\omega}{\omega_0}\right)^2}}$$

*Pour trouver la pulsation de résonance en tension $\omega_r$, cherchons le maximum du module $H(\omega)$, ce qui revient à minimiser le polynôme sous la racine par rapport à $x = \frac{\omega^2}{\omega_0^2}$ :*
$$\frac{d}{dx} \left[ (1 - x)^2 + \frac{x}{Q^2} \right] = 0 \implies -2(1 - x) + \frac{1}{Q^2} = 0$$
*D'où $x_r = 1 - \frac{1}{2Q^2}$, soit la pulsation de résonance :*
$$\omega_r = \omega_0 \sqrt{1 - \frac{1}{2Q^2}}$$
*Condition d'existence : Le jury sanctionne l'oubli de la condition $Q > \frac{1}{\sqrt{2}}$, sans laquelle la résonance n'existe pas.*

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oubli des conditions initiales ou du régime transitoire :** Confondre fonction de transfert en régime permanent et résolution complète avec solution générale de l'équation homogène.
- **Erreurs de manipulation logarithmique :** Écrire $20 \log(A+B) = 20 \log(A) + 20 \log(B)$ lors de l'étude des diagrammes de Bode asymptotiques.
- **Absence de vérification des unités :** Ne pas vérifier que le facteur de qualité $Q$ est bien sans dimension.

---

### 📌 Question Type 2 : Bilan de matière et stœchiométrie dans les réactions de titrage acido-basique et d'oxydoréduction

#### 💡 Méthode canonique & Étapes de rédaction
Face à un problème de chimie en solution aqueuse, la méthode rigoureuse exigée est la suivante :
1. **Inventaire des espèces chimiques présentes** dans l'état initial et identification des espèces spectatrices.
2. **Écriture de la réaction support du titrage :** S'assurer qu'elle est unique, totale et rapide (quantitative).
3. **Construction du tableau d'avancement** en mole (mol) ou en millimole (mmol), en exprimant l'avancement en fonction du volume versé $V$.
4. **Exploitation de l'équivalence :** Traduire le fait que les réactifs sont introduits dans les proportions stœchiométriques.

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé type :** On dose un volume $V_A = 20.0 \text{ mL}$ d'une solution d'acide chlorhydrique $(\text{H}_3\text{O}^+_{(aq)} + \text{Cl}^-_{(aq)})$ de concentration $C_A$ inconnue par une solution d'hydroxyde de sodium $(\text{Na}^+_{(aq)} + \text{HO}^-_{(aq)})$ de concentration $C_B = 0.100 \text{ mol/L}$. L'équivalence est atteinte pour un volume versé $V_{BE} = 15.0 \text{ mL}$. Déterminer $C_A$ en rédigeant clairement.

**Rédaction type exigée :**
*1. Écriture de la réaction support du titrage :*
$$\text{H}_3\text{O}^+_{(aq)} + \text{HO}^-_{(aq)} \ce{=} 2 \, \text{H}_2\text{O}_{(l)}$$
*Cette réaction est supposée totale et rapide (ce qui valide l'utilisation du titrage).*

*2. Bilan de matière à l'équivalence :*
À l'équivalence, par définition, les réactifs titrant ($\text{HO}^-$) et titré ($\text{H}_3\text{O}^+$) ont été mélangés dans les proportions stœchiométriques de la réaction support. Aucun des deux réactifs n'est en excès.

*D'après le tableau d'avancement à l'équivalence :*
$$n(\text{H}_3\text{O}^+)_{\text{initial}} - x_E = 0 \implies n(\text{H}_3\text{O}^+)_{\text{initial}} = x_E$$
$$n(\text{HO}^-)_{\versé} - x_E = 0 \implies n(\text{HO}^-)_{\versé} = x_E$$

*Par conséquent, l'égalité fondamentale des moles à l'équivalence s'écrit :*
$$C_A \cdot V_A = C_B \cdot V_{BE}$$

*3. Application numérique et chiffres significatifs :*
$$C_A = \frac{C_B \cdot V_{BE}}{V_A} = \frac{0.100 \text{ mol/L} \times 15.0 \text{ mL}}{20.0 \text{ mL}} = 7.75 \times 10^{-2} \text{ mol/L}$$
*Le jury attribue tous les points car les volumes sont homogènes (exprimés dans la même unité) et le résultat est donné avec trois chiffres significatifs, en accord avec les données de l'énoncé.*

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Confusion entre pH-métrie et conductimétrie :** Négliger l'effet de la dilution lors du calcul de la conductivité dans les titrages conductimétriques.
- **Faute sur les nombres stœchiométriques :** Oublier de multiplier ou diviser par les coefficients stœchiométriques dans la relation d'équivalence $n_1/\nu_1 = n_2/\nu_2$.
- **Erreur de chiffres significatifs :** Fournir un résultat avec 5 chiffres significatifs alors que les données n'en comportent que 2 ou 3.

---

### 📌 Question Type 3 : Optique géométrique : stigmatisme, systèmes centrés et lentilles minces

#### 💡 Méthode canonique & Étapes de rédaction
L'analyse d'un système optique en optique géométrique nécessite une rigueur vectorielle et algébrique absolue :
1. **Définition du système centré et des conditions de Gauss :** Préciser si le système est stigmatique pour un objet donné et si les conditions de Gauss (rayons peu inclinés et peu éloignés de l'axe optique) sont respectées.
2. **Utilisation des relations de conjugaison :** Écrire la relation de conjugaison avec origine au centre optique $O$ ou aux foyers $F$ et $F'$.
3. **Calcul du grandissement transversal :** Évaluer la taille et le sens (droit ou renversé) de l'image.
4. **Tracé géométrique des rayons particuliers :** Rayon passant par le centre optique (non dévié), rayon parallèle à l'axe optique (ressortant en passant par le foyer image $F'$), et rayon passant par le foyer objet $F$ (ressortant parallèle à l'axe optique).

#### 📋 Exemple de sujet corrigé type Concours
**Énoncé type :** Soit une lentille mince convergente de distance focale $f' = +10.0 \text{ cm}$. Un objet réel AB de taille $h = 2.0 \text{ cm}$ est placé à une distance $OA = -30.0 \text{ cm}$ de la lentille. Déterminer la position de l'image $A'B'$ par la relation de conjugaison, calculer sa taille et préciser sa nature.

**Rédaction type exigée :**
*1. Rappel de la relation de conjugaison des lentilles minces convergentes avec origine au centre optique $O$ :*
$$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'}$$

*2. Application numérique littérale isolant la position de l'image $\overline{OA'}$ :*
$$\frac{1}{\overline{OA'}} = \frac{1}{f'} + \frac{1}{\overline{OA}} = \frac{\overline{OA} + f'}{f' \cdot \overline{OA}}$$
$$\overline{OA'} = \frac{f' \cdot \overline{OA}}{\overline{OA} + f'}$$

*En remplaçant par les valeurs algébriques (attention aux signes imposés par le repère orienté dans le sens de la lumière) :*
$$\overline{OA'} = \frac{10.0 \text{ cm} \times (-30.0 \text{ cm})}{-30.0 \text{ cm} + 10.0 \text{ cm}} = \frac{-300 \text{ cm}^2}{-20.0 \text{ cm}} = +15.0 \text{ cm}$$

*3. Nature de l'image :*
Puisque $\overline{OA'} > 0$, l'image $A'B'$ est **réelle** (située après la lentille dans le sens de propagation de la lumière).

*4. Calcul du grandissement transversal $\gamma$ :*
$$\gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}} = \frac{+15.0 \text{ cm}}{-30.0 \text{ cm}} = -0.50$$

*La taille de l'image est donc :*
$$\overline{A'B'} = \gamma \cdot \overline{AB} = -0.50 \times 2.0 \text{ cm} = -1.0 \text{ cm}$$
*Le signe négatif indique que l'image est **renversée** par rapport à l'objet, et sa valeur absolue montre qu'elle est réduite de moitié.*

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oubli de la barre algébrique :** Écrire $OA$ au lieu de $\overline{OA}$, ce qui conduit à des erreurs de signe fatales lors du passage des distances géométriques aux grandeurs algébriques.
- **Confusion entre lentille convergente et divergente :** Utiliser $f' > 0$ pour une lentille divergente.
- **Traçage des schémas sans flèches :** Oublier d'indiquer le sens de propagation de la lumière sur les rayons lumineux dans les schémas d'optique exigés sur copie.