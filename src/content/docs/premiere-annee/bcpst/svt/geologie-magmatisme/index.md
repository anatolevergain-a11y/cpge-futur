---
title: 'Cours : Magmatisme et roches'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Le magmatisme désigne l'ensemble des processus géologiques conduisant à la formation, à la migration, à la différenciation et à la cristallisation des magmas, ainsi qu'à la mise en place des roches magmatiques associées. En BCPST, l'étude du magmatisme s'inscrit dans le cadre de la dynamique globale de la Terre, reliant la géodynamique interne (tectonique des plaques, transferts thermiques) à la pétrologie endogène.

### 1.1. Définitions fondamentales
* **Magma :** Solution silicatée complexe à l'état liquide (partiellement ou totalement fondu), contenant des phases solides en suspension (cristaux) et des phases dissoutes volatiles ($\text{H}_2\text{O}$, $\text{CO}_2$, $\text{SO}_2$, etc.).
* **Roche magmatique :** Roche résultant de la cristallisation (solidification) d'un magma. On distingue :
  * Les roches **magmatiques plutoniques** (ou intrusives), caractérisées par une cristallisation lente en profondeur, menant à une structure grenue (holocristalline).
  * Les roches **magmatiques volcaniques** (ou effusives), caractérisées par une ascension rapide et une trempe ou cristallisation rapide en surface, menant à une structure microlitique ou vitreuse.
* **Fusion partielle (ou fusion anatectique) :** Processus thermodynamique par lequel une roche solide (solide parent) passe partiellement à l'état liquide. En géologie, les magmas ne résultent presque jamais d'une fusion totale (incongruente), mais d'une fusion partielle de l'ordre de $1\text{ \% à }30\text{ \%}$.

### 1.2. Le cadre géodynamique global
Le magmatisme est intimement lié aux frontières de plaques lithosphériques et aux points chauds :
* **Dorsales océaniques (divergence) :** Magmatisme basaltique tholéiitique issu d'une fusion par décompression adiabatique du manteau asthénosphérique.
* **Zones de subduction (convergence) :** Magmatisme calco-alcalin (andésitique à granodioritique) induit par l'abaissement du solidus par hydratation (flux de fluides issus de la déshydratation de la plaque plongeante).
* **Points chauds (intraplaque) :** Magmatisme alcalin ou tholéiitique lié à des panaches mantelliques profonds (fusion par anomalie thermique).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

L'étude thermodynamique du magmatisme repose sur l'analyse des diagrammes de phase (pression $P$, température $T$).

### 2.1. Solidus et Liquidus
Pour une composition chimique donnée :
* **Le solidus** $T_s(P)$ représente la courbe en $(P,T)$ au-delà de laquelle (pour $T > T_s$) la roche commence à fondre.
* **Le liquidus** $T_l(P)$ représente la courbe en $(P,T)$ au-delà de laquelle la roche est entièrement fondue ($T > T_l$).
* Entre le solidus et le liquidus, le système biphasé (solide + liquide) coexiste.

### 2.2. Les trois mécanismes thermodynamiques de la fusion partielle
Pour engendrer un magma à partir d'une roche mantellique ou crustale solide, il faut traverser le solidus. Trois moteurs thermodynamiques existent :

1. **La fusion par élévation de température ($T \nearrow$ à $P$ constant) :**
   Peu efficace seule à grande échelle en raison de la faible conductivité thermique des roches, elle intervient localement (ex. : magmatisme de rifting continental ou contamination crustale).

2. **La fusion par décompression adiabatique ($P \seconde$ sans transfert thermique majeur) :**
   Considérons une particule de manteau asthénosphérique remontant rapidement vers la surface (sous une dorsale ou un panache). Sa trajectoire $P(T)$ est quasi-adiabatique. Comme la pente du solidus mantellique $\frac{dT_s}{dP}$ est positive (environ $10 \text{ à } 15 \text{ K}\cdot\text{kbar}^{-1}$), une baisse de pression isentropique amène la roche à croiser son solidus :
   $$\left(\frac{\partial P}{\partial z}\right)_{\text{remontée}} < \left(\frac{dP}{dT}\right)_{\text{solidus}}$$
   La roche fond partiellement sans apport de chaleur externe.

3. **La fusion par hydratation (abaissement du solidus) :**
   L'incorporation de substances volatiles polaires telles que l'eau ($\text{H}_2\text{O}$) dans les structures cristallines modifie l'énergie libre de Gibbs des phases. L'eau abaisse considérablement la température du solidus des péridotites ($\Delta T$ pouvant atteindre plusieurs centaines de kelvins à haute pression). Le système franchit ainsi le solidus par abaissement de ce dernier, typiquement en zone de subduction :
   $$T_{\text{manteau hydraté}} > T_{s,\text{hydraté}}(P)$$

### 2.3. La cristallisation fractionnée
Lors du refroidissement d'un magma, les minéraux cristallisent séquentiellement selon la série de Bowen. La **cristallisation fractionnée** est le processus de séparation physique des cristaux formés (souvent par gravité, par décantation ou compaction) du liquide résiduel. 
Soit $C_L$ la concentration d'un élément en trace dans le liquide et $D$ le coefficient de partage minéral-liquide ($D = \frac{C_{\text{solide}}}{C_{\text{liquide}}}$). L'évolution suit la loi de Rayleigh de la distillation fractionnée :
$$\frac{C_L}{C_{0}} = F^{(D-1)}$$
avec $F$ la fraction massique de liquide résiduel restante et $C_0$ la concentration initiale.

---

## 💡 3. Méthodes classiques de résolution

### 3.1. Analyse d'un diagramme $P-T$ pour déterminer l'origine d'un magma
* **Étape 1 :** Repérer l'état initial de la roche dans le diagramme $P-T$ (ex. : péridotite mantellique à $100\text{ km}$ de profondeur).
* **Étape 2 :** Tracer la trajectoire géodynamique (flèche indiquant l'évolution de $P$ et $T$).
* **Étape 3 :** Conclure sur le mécanisme :
  * Si la trajectoire coupe le solidus par une baisse de pression verticale ($\Delta P < 0$) : **décompression adiabatique**.
  * Si la trajectoire croise un solidus abaissé (décalé vers les basses températures) : **hydratation**.

### 3.2. Caractérisation pétrographique et chimique d'une roche
* **Analyse structurale :** Distinguer phénocristaux et micromatrice (volcanique) vs cristaux jointifs équigranulaires (plutonique).
* **Analyse minéralogique et géochimique :** Utiliser la classification normative ou modale (diagramme QAPF de Streckeisen) pour nommer la roche. 
* Relier la composition (richesse en silice $\text{SiO}_2$) au contexte géodynamique :
  * Roches ultrabasiques/basiques ($\text{SiO}_2 \approx 45-52\text{ \%}$) : Péridotites, basaltes, gabbros (Dorsales, points chauds).
  * Roches intermédiaires à acides ($\text{SiO}_2 > 56-70\text{ \%}$) : Andésites, dacites, rhyolites, granites (Subduction, collision).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre fusion partielle et fusion totale :** 
   * *Erreur fréquente :* Affirmer qu'un magma est le résultat de la fusion intégrale d'une roche.
   * *Réalité :* Les magmas mantelliques ou crustaux proviennent presque toujours de taux de fusion partielle faibles à modérés ($< 30\text{ \%}$).

2. **Oublier le rôle chimique des volatils :**
   * *Erreur fréquente :* Croire que l'eau en subduction "dilue" la roche au sens mécanique.
   * *Réalité :* L'eau agit au niveau moléculaire en brisant les liaisons Si-O-Si de la structure des silicates fondus, abaissant thermodynamiquement le solidus.

3. **Inverser les pendages et les contextes de subduction :**
   * *Erreur fréquente :* Situer la fusion du manteau sus-jacent *dans* la plaque plongeante elle-même.
   * *Réalité :* La plaque plongeante (lithosphère océanique) subit une *déshydratation* (métamorphisme prograde : schistes bleus $\rightarrow$ éclogites). Ce sont les fluides libérés qui traversent et hydratent le *manteau asthénosphérique sus-jacent* (la préméditation du coin du manteau), provoquant sa fusion partielle.

4. **Mauvaise interprétation de la série de Bowen :**
   * *Erreur fréquente :* Penser que les minéraux formés en premier dans un magma en refroidissement sont les plus acides.
   * *Réalité :* Ce sont les minéraux les plus basiques/ferromagnésiens (olivine, pyroxènes) qui cristallisent en premier (à haute température), appauvrissant progressivement le liquide résiduel en $\text{Mg}$ et $\text{Fe}$ et l'enrichissant en $\text{Si}$ et $\text{Na/K}$ (minéraux felsiques comme le quartz et les feldspaths alcalins).