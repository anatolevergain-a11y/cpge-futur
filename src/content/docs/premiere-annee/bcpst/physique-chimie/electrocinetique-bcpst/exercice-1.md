---
title: 'Exercice 1 : Lois des mailles et des nœuds'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les circuits électriques en régime continu et transitoire constituent un outil fondamental pour modéliser de nombreux systèmes biologiques ou biophysiques (potentiel membranaire d'une cellule, électrophysiologie, capteurs). 

On s'intéresse dans ce problème à un circuit électrique comportant un générateur réel de tension, un condensateur (modélisant une membrane cellulaire) et plusieurs résistances. Le montage étudié est représenté schématiquement par le réseau ci-dessous :

- Un générateur idéal de tension de force électromotrice $E$ constante.
- Une résistance interne $r$ en série avec le générateur.
- Un ensemble de résistances $R_1$, $R_2$ et $R_3$.
- Un condensateur parfait de capacité $C$, initialement déchargé, branché en parallèle aux bornes de la résistance $R_3$.

L'objectif est d'établir l'équation différentielle régissant la charge du condensateur, d'en déterminer l'évolution temporelle, puis de discuter la validité du modèle face à des contraintes expérimentales réelles.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Représentation et lois fondamentales :** Établir le schéma équivalent du circuit. Enoncer la loi des nœuds et la loi des mailles (loi de Pouillet/Kirchhoff) nécessaires à l'analyse du circuit.
2. **Mise en équation :** En appliquant les lois de l'électrocinétique, exprimer la tension $u_C(t)$ aux bornes du condensateur en fonction du temps $t$, de $E$, et des paramètres résistifs ($r, R_1, R_2, R_3$) ainsi que de la capacité $C$. On posera l'équation sous la forme canonique :
   $$\tau \frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C(t) = U_{\text{max}}$$
   Exprimer le temps caractéristique $\tau$ et la tension limite $U_{\text{max}}$ en fonction des éléments du circuit.
3. **Résolution :** Résoudre cette équation différentielle sachant qu'à l'instant initial $t = 0$, le condensateur est totalement déchargé ($u_C(0) = 0$). Tracer qualitativement l'allure de $u_C(t)$.
4. **Analyse énergétique :** Calculer l'énergie totale $W_{R,\text{tot}}$ dissipée par effet Joule dans l'ensemble des résistances du circuit de $t = 0$ jusqu'à l'établissement du régime permanent ($t \to +\infty$). Comparer cette valeur à l'énergie fournie par le générateur $W_{\text{gen}}$ et commenter.
5. **Analyse critique du modèle :** Dans la réalité, un condensateur réel présente une résistance de fuite $R_f$ en parallèle et les fils de connexion possèdent une inductance propre $L$. Quel est l'impact qualitatif de l'ajout de $R_f$ sur la tension maximale $U_{\text{max}}$ en régime permanent ? Quel est l'impact mathématique et physique de l'ajout de $L$ sur le régime transitoire ?

---

### 💡 Pistes & Indications méthodologiques

- **Q1 & Q2 :** Pour simplifier le réseau résistif vu par le condensateur, pensez à utiliser le théorème de Thévenin ou à appliquer directement les lois de Kirchhoff (loi des nœuds et des mailles) en exprimant les courants en fonction des potentiels aux nœuds ou des branches. Rappelez-vous que pour un condensateur, l'intensité le traversant s'écrit $i(t) = C \frac{\mathrm{d}u_C}{\mathrm{d}t}$.
- **Q3 :** La solution générale d'une équation différentielle linéaire du premier ordre à coefficients constants est la somme d'une solution homogène et d'une solution particulière.
- **Q4 :** L'énergie dissipée par effet Joule dans une résistance $R$ parcourue par un courant $i(t)$ s'exprime par l'intégrale $W_R = \int_0^{+\infty} R i(t)^2 \, \mathrm{d}t$. Pensez à relier cette énergie au bilan énergétique global du circuit.
- **Q5 :** Utilisez la notion de diviseur de tension ou de résistance équivalente en parallèle pour la résistance de fuite. Pour l'inductance, rappelez-vous qu'elle introduit un terme dérivé second (équation différentielle d'ordre 2).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Schéma et lois fondamentales
Le circuit comporte le générateur de force électromotrice $E$ et de résistance interne $r$. Le courant principal débité par le générateur se sépare dans le réseau. Soit $R_{123}$ le bloc constitué des résistances $R_1$, $R_2$, $R_3$ et du condensateur $C$.
* **Loi des nœuds :** La somme algébrique des courants arrivant à un nœud est nulle ($\sum i_k = 0$).
* **Loi des mailles :** La somme algébrique des tensions le long d'une maille fermée est nulle ($\sum u_k = 0$).
* **Relation constitutive du condensateur :** $i_C(t) = C \frac{\mathrm{d}u_C}{\mathrm{d}t}$.

#### 2. Mise en équation du système
Pour déterminer l'équation régissant $u_C(t)$ aux bornes de $C$ (et donc de $R_3$), on peut déterminer le modèle de Thévenin équivalent du circuit vu des bornes du condensateur.
Le circuit est constitué de $E$ et $r$ en série, branchés avec $R_1$ en série, puis un nœud séparant $R_2$ et la branche $(R_3 // C)$. 
* Supposons le montage suivant (classique en BCPST) : $E$ en série avec $r$ et $R_1$, formant une branche principale qui alimente un pont diviseur ou un réseau. Supposons plus précisément le montage où le générateur $(E, r)$ alimente une résistance $R_1$ en série, puis le montage se divise : d'une part $R_2$, d'autre part la branche $(R_3$ en parallèle avec $C$).
* Exprimons la résistance équivalente $R_{\text{th}}$ vue par le condensateur lorsque la source de tension est éteinte ($E=0$, remplacée par un fil, soit un court-circuit) :
  Le générateur de Thévenin équivalent vu par le condensateur a pour résistance :
  $$R_{\text{th}} = R_3 \parallel \left( R_2 + R_1 + r \right) = \frac{R_3 (R_1 + R_2 + r)}{R_1 + R_2 + R_3 + r}$$
* La tension de Thévenin $E_{\text{th}}$ (tension à vide aux bornes du condensateur) s'obtient par un diviseur de tension :
  $$E_{\text{th}} = E \frac{R_3}{R_1 + R_2 + R_3 + r}$$
* Appliquons la loi des mailles avec le modèle de Thévenin :
  $$E_{\text{th}} = R_{\text{th}} i_C(t) + u_C(t)$$
  En remplaçant $i_C(t)$ par $C \frac{\mathrm{d}u_C}{\mathrm{d}t}$ :
  $$R_{\text{th}} C \frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C(t) = E_{\text{th}}$$
* Par identification avec la forme canonique $\tau \frac{\mathrm{d}u_C}{\mathrm{d}t} + u_C(t) = U_{\text{max}}$ :
  $$\tau = R_{\text{th}} C = \frac{R_3 (R_1 + R_2 + r)}{R_1 + R_2 + R_3 + r} C$$
  $$U_{\text{max}} = E_{\text{th}} = E \frac{R_3}{R_1 + R_2 + R_3 + r}$$

#### 3. Résolution de l'équation différentielle
L'équation différentielle est linéaire du premier ordre à coefficients constants.
* **Solution générale sans second membre :** $u_{C,\text{hom}}(t) = A \exp\left(-\frac{t}{\tau}\right)$ où $A$ est une constante réelle.
* **Solution particulière (régime permanent $t \to +\infty$) :** $\frac{\mathrm{d}u_C}{\mathrm{d}t} = 0$, donc $u_{C,\text{part}} = U_{\text{max}}$.
* **Solution générale :** 
  $$u_C(t) = U_{\text{max}} + A \exp\left(-\frac{t}{\tau}\right)$$
* **Condition initiale :** À $t = 0$, $u_C(0) = 0 \implies 0 = U_{\text{max}} + A \implies A = -U_{\text{max}}$.
  $$u_C(t) = U_{\text{max}} \left( 1 - \exp\left(-\frac{t}{\tau}\right) \right)$$
* *Allure de la courbe :* $u_C(t)$ croît de manière monotone depuis $0$ jusqu'à la valeur asymptotique $U_{\text{max}}$, avec une pente initiale $\left(\frac{\mathrm{d}u_C}{\mathrm{d}t}\right)_{t=0} = \frac{U_{\text{max}}}{\tau}$.

#### 4. Analyse énergétique
* L'énergie totale fournie par le générateur de f.e.m. $E$ s'exprime par :
  $$W_{\text{gen}} = \int_0^{+\infty} E \, i_{\text{tot}}(t) \, \mathrm{d}t$$
* L'énergie emmagasinée par le condensateur en régime permanent vaut :
  $$W_C = \frac{1}{2} C U_{\text{max}}^2$$
* D'après le principe de conservation de l'énergie (ou premier principe appliqué au circuit électrique), l'énergie fournie par le générateur se répartit entre l'énergie stockée dans le condensateur et l'énergie totale dissipée par effet Joule $W_{R,\text{tot}}$ dans l'ensemble des résistances du circuit ($r, R_1, R_2, R_3$) :
  $$W_{\text{gen}} = W_C + W_{R,\text{tot}}$$
  *Note de calcul rigoureuse :* Il est remarquable en électrocinétique que l'énergie dissipée par effet Joule dans les résistances représente exactement la moitié de l'énergie totale fournie par le générateur, l'autre moitié étant stockée dans le condensateur (le résultat est indépendant des valeurs des résistances si le circuit ne comporte qu'un seul condensateur) :
  $$W_{R,\text{tot}} = W_C = \frac{1}{2} C U_{\text{max}}^2$$

#### 5. Analyse critique du modèle
* **Ajout d'une résistance de fuite $R_f$ en parallèle du condensateur :**
  La résistance $R_f$ se retrouve en parallèle avec $R_3$. La résistance équivalente de fuite diminue la résistance équivalente de Thévenin $R_{\text{th}}$ et surtout, en régime permanent, le pont diviseur inclut $R_3 \parallel R_f$. La tension maximale $U_{\text{max}}$ est alors abaissée par rapport au cas idéal :
  $$U_{\text{max,réel}} = E \frac{R_3 \parallel R_f}{R_1 + R_2 + (R_3 \parallel R_f) + r} < U_{\text{max}}$$
* **Ajout d'une inductance propre $L$ dans les fils de connexion :**
  L'introduction d'une bobine d'inductance $L$ ajoute un terme en $\frac{\mathrm{d}i_C}{\mathrm{d}t}$, ce qui élève l'ordre de l'équation différentielle de 1 à 2 :
  $$LC \frac{\mathrm{d}^2 u_C}{\mathrm{d}t^2} + \left( \text{termes d'ordre 1} \right) + u_C(t) = \text{constante}$$
  Physiquement, cela se traduit par l'apparition possible d'un **régime pseudopériodique** (oscillations amorties de la tension autour de $U_{\text{max}}$) si le facteur d'amortissement est inférieur à 1, ce qui modifie radicalement le temps de réponse du système biologique modélisé.