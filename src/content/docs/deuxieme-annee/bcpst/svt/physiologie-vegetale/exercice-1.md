---
title: 'Exercice 1 : Développement des angiospermes et phytohormones'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

Chez les angiospermes, le développement post-embryonnaire et l'architecture de la plante sont largement régis par l'intégration de signaux environnementaux et hormonaux. Parmi ces signaux, les auxines (notamment l'acide indole-3-acétique, IAA) et les cytokinines (CK) jouent un rôle antagoniste et synergique majeur dans le contrôle de la dominance apicale et de la ramification caulinaire.

Un laboratoire étudie un mutant d'Arabidopsis thaliana (*Arabidopsis thaliana* (L.) Heynh.) altéré dans le transport polarisé de l'auxine. Pour modéliser la croissance et la morphogenèse de la tige, on s'intéresse à la cinétique d'élongation cellulaire et à l'accumulation locale d'IAA dans l'apex caulinaire et les bourgeons axillaires. 

On considère une tige principale de longueur initiale $L_0 = \pu{5 cm}$ à $t = \pu{0 jours}$. La vitesse d'élongation de la tige suit, en première approximation et sur un intervalle de temps restreint, une loi de croissance exponentielle :
$$\frac{dL(t)}{dt} = k \cdot L(t)$$
où $k$ est le taux relatif de croissance en $\pu{jour^{-1}}$. 

Des mesures biochimiques révèlent que la concentration interne en IAA dans le bourgeon apical est de $C_{\text{apical}} = \pu{50 \mu mol.L^{-1}}$, tandis qu'elle est de $C_{\text{axillaire}} = \pu{2 \mu mol.L^{-1}}$ dans les bourgeons axillaires de la base, inhibant leur développement. Suite à une décapitation (ablation de l'apex) à $t = \pu{0}$, cette concentration chute brutalement dans les bourgeons axillaires à $C'_{\text{axillaire}} = \pu{0.5 \mu mol.L^{-1}}$, entraînant leur levée de dormance.

---

### ❓ Questions progressives

1. **Restitution des connaissances :** Rappeler le mode de transport de l'auxine (IAA) à l'échelle tissulaire (transport polarisé) ainsi que les principaux transporteurs membranaires impliqués. Quel est le rôle de ce transport dans la dominance apicale ?
2. **Étude cinétique :** Résoudre l'équation différentielle régissant la croissance de la tige $L(t)$ sachant qu'à $t = \pu{5 jours}$, la longueur de la tige atteint $L_1 = \pu{8 cm}$. Expliciter la valeur du paramètre $k$ (on donnera l'expression littérale puis l'application numérique avec son unité).
3. **Analyse critique du modèle :** Le modèle de croissance exponentielle utilisé est-il biologiquement viable à long terme pour une plante entière ? Discuter des limites de ce modèle en intégrant des notions de stœchiométrie des ressources, de contraintes hydriques et de rétrocontrôles hormonaux (notamment le rôle des cytokinines montantes).
4. **Signalisation et physiologie :** Expliquer par quel mécanisme moléculaire et hormonal la baisse de la concentration en IAA suite à la décapitation induit la reprise de mitoses et l'élongation dans un bourgeon axillaire. Préciser le rôle croisé des cytokinines et du strigolactone dans cette balance décisionnelle.

---

### 💡 Pistes & Indications

* **Question 1 :** Pensez aux protéines de la famille PIN (efflux) et AUX1/LAX (influx). Le flux est basipète (de l'apex vers la base).
* **Question 2 :** Intégrez l'équation différentielle entre $t=0$ et $t=t_1$. Utilisez les propriétés du logarithme népérien.
* **Question 3 :** Réfléchissez à l'autotrophie de la plante, à la disponibilité en nutriments minéraux ($N, P, K$) et à la transition vers la phase reproductrice (floraison) qui modifie les sinks (puits) et sources de photosynthésats.
* **Question 4 :** Intégrez le modèle canalisateur de l'auxine et l'hypothèse du second messager (strigolactone inhibiteur, cytokinine activatrice).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Transport polarisé de l'auxine et dominance apicale
L'auxine est synthétisée principalement dans les jeunes feuilles et l'apex caulinaire. Son transport est **polarisé et basipète** (de l'apex vers les racines) dans les cellules du parenchyme cortical ou du procambium. 
Ce transport nécessite une coordination membranaire assurée par :
- Des transporteurs d'efflux de la famille **PIN-FORMED (PIN)**, localisés de manière asymétrique (asymétrie subcellulaire) à la base basale des cellules.
- Des transporteurs d'influx de la famille **AUX1/LAX**.

*Rôle dans la dominance apicale :* L'auxine descendante le long de la tige maintient l'inhibition des bourgeons axillaires. Elle empêche l'exportation de l'auxine propre aux bourgeons axillaires vers le flux principal, bloquant ainsi leur initiation morphogénétique et leur élongation.

#### 2. Résolution de l'équation différentielle et calcul de $k$
L'équation est :
$$\frac{dL(t)}{dt} = k \cdot L(t)$$
En séparant les variables et en intégrant entre $0$ et $t_1$ :
$$\int_{L_0}^{L_1} \frac{dL}{L} = \int_{0}^{t_1} k \, dt \implies \ln\left(\frac{L_1}{L_0}\right) k \cdot t_1$$
D'où l'expression du taux relatif de croissance :
$$k = \frac{1}{t_1} \ln\left(\frac{L_1}{L_0}\right)$$

*Application numérique :*
$$L_0 = \pu{5 cm}, \quad L_1 = \pu{8 cm}, \quad t_1 = \pu{5 jours}$$
$$k = \frac{1}{5} \ln\left(\frac{8}{5}\right) = \frac{1}{5} \ln(1.6) \approx \frac{1}{5} \times 0.47 = \pu{0.094 \text{ jour}^{-1}}$$

#### 3. Analyse critique et limites du modèle de croissance
*Limites biologiques du modèle :*
- **Linéarité/Exponencialité fausse à long terme :** Une croissance exponentielle conduit à une explosion démographique des cellules et de la biomasse incompatible avec les ressources disponibles (loi logistique ou sigmoïde de type modèle de Verhulst plus réaliste).
- **Ressources trophiques :** La tige a besoin d'eau, de $\text{CO}_2$ et de sels minéraux. Le système racinaire doit croître proportionnellement pour subvenir aux besoins transpiratoires (flux de xylène).
- **Interactions hormonales complexes :** Le modèle suppose $k$ constant, or le taux de croissance varie selon les stades phénologiques, l'âge tissulaire (sénescence) et les conditions abiotiques (stress hydrique, photopériode).

#### 4. Mécanisme moléculaire de la levée de dormance
Suite à la décapitation :
1. Le flux d'auxine exogène chute brutalement.
2. Le bourgeon axillaire acquiert la capacité d'exporter sa propre auxine en activant l'expression et la polarisation des transporteurs PIN dans les cellules sous-jacentes.
3. **Rôle des cytokinines (CK) :** Synthétisées dans les racines et transportées par la sève brute (xylème), les CK s'accumulent dans les bourgeons et agissent en synergie pour stimuler la division cellulaire (activation des complexes Cyclines/CDK).
4. **Rôle des strigolactones (SL) :** Hormones inhibitrices de la ramification, leur transport basipète est supplanté par la baisse d'auxine, levant l'inhibition exercée sur les bourgeons.