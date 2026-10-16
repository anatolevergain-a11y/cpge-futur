---
title: 'Optimisation au concours : Physique PSI'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

## 🎯 Objectif du module & Exigences des Jurys

En filière **PSI**, les épreuves de Physique-Chimie (Mines-Ponts, Centrale-Supélec, CCINP) se distinguent par une approche résolument tournée vers les **systèmes multiphysiques**, le **dimensionnement énergétique** et le **couplage conversion/actionneur**. Le jury n'évalue pas seulement la justesse mathématique, mais l'aptitude à :

1. **Poser explicitement le domaine de validité** des modèles (régime de conduction, hypothèses d'écoulement, régimes quasi-stationnaires).
2. **Justifier les relations intégrales et moyennes** par des théorèmes généraux plutôt que par intuition.
3. **Maîtriser les bilans énergétiques** (puissance instantanée vs puissance moyenne, puissance d'échange fluide-paroi/machine).
4. **Vérifier systématiquement l'homogénéité dimensionnelle** et les ordres de grandeur physiques.

Ce guide présente la structure canonique de réponse et les rédactions idéales attendues pour deux familles de questions à très fort coefficient.

---

## 📌 Question Type 1 : Bilan de puissance et étude d'un convertisseur statique (hacheur/onduleur)

### 💡 Méthode canonique & Étapes de rédaction

1. **Définition du cadre et des hypothèses d'étude :**
   * Préciser l'état des interrupteurs (semi-conducteurs parfaits : chutes de tension et courants de fuite nuls, commutations instantanées).
   * Spécifier le régime de conduction : **régime de conduction continue (RCC)** supposé établi.
   * Rappeler la condition de régime périodique : pour toute grandeur $x(t)$, $x(t+T) = x(t)$.

2. **Étude séquentielle sur une période de découpage $T$ :**
   * Pour $t \in [0, \alpha T]$ : schéma équivalent, identification de la maille active, équation différentielle liant la tension de sortie $u_s(t)$ à l'entrée $E_0$.
   * Pour $t \in [\alpha T, T]$ : schéma équivalent avec composant de roue libre, détermination de $u_s(t)$.

3. **Valeurs moyennes et propriétés d'une inductance :**
   * Calculer la tension moyenne en sortie : $\langle u_s \rangle = \frac{1}{T}\int_0^T u_s(t) \, \text{d}t$.
   * Énoncer la propriété fondamentale de la bobine en régime périodique :
     $$\langle u_L \rangle = \left\langle L \frac{\text{d}i}{\text{d}t} \right\rangle = \frac{L}{T} \int_0^T \frac{\text{d}i}{\text{d}t} \, \text{d}t = \frac{L}{T} [i(T) - i(0)] = 0$$
   * En déduire la relation fondamentale liant $\langle u_s \rangle$ aux autres éléments de charge (f.é.m., résistance).

4. **Ondulation de courant et dimensionnement :**
   * Intégrer l'équation différentielle sur la phase de magnétisation $[0, \alpha T]$ pour exprimer $\Delta i = i_{\text{max}} - i_{\text{min}}$.
   * Déterminer l'inductance minimale $L_{\text{min}}$ garantissant le maintien de la conduction continue ($i_{\text{min}} \ge 0$).

5. **Bilan des puissances :**
   * Puissance fournie par la source : $P_e = \langle e(t) i_e(t) \rangle$.
   * Puissance reçue par la charge : $P_s = \langle u_s(t) i(t) \rangle$.
   * Attention capitale : pour les pertes Joule, $\langle R i^2 \rangle = R I_{\text{eff}}^2 \neq R \langle i \rangle^2$. Si l'ondulation est faible ($\Delta i \ll \langle i \rangle$), l'approximation $I_{\text{eff}} \approx \langle i \rangle$ doit être explicitement formulée.

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé :**  
Un hacheur série (abaisseur) est alimenté par une source de tension continue idéale de f.é.m. $E_0 = 100 \text{ V}$. Il débite sur l'induit d'un moteur à courant continu modélisé par une f.é.m. $E$, une résistance $R = 0{,}50 \ \Omega$ et une inductance de lissage $L = 20 \text{ mH}$. La fréquence de hachage est $f = 20 \text{ kHz}$ ($T = 1/f$). L'interrupteur commandé $K$ est passant sur $[0, \alpha T]$ et bloqué sur $[\alpha T, T]$. La diode $D$ assure la roue libre. On suppose le régime permanent établi et la conduction continue. Le rapport cyclique est $\alpha = 0{,}60$.
1. Exprimer puis calculer la tension moyenne $\langle u_s \rangle$ aux bornes de la charge.
2. Exprimer l'ondulation crête à crête de courant $\Delta i$ en fonction de $E_0, \alpha, L$ et $f$.
3. Sachant que le courant moyen vaut $\langle i \rangle = 15 \text{ A}$, établir le bilan de puissance et déterminer la puissance électromécanique $P_{\text{em}}$ développée par le moteur.

---

**Rédaction modèle :**

**1. Calcul de la tension moyenne $\langle u_s \rangle$**  
Les semi-conducteurs étant idéaux :
* Pour $t \in [0, \alpha T]$ : $K$ est fermé, $D$ est bloquée sous tension inverse négative. On a $u_s(t) = E_0$.
* Pour $t \in [\alpha T, T]$ : $K$ est ouvert, la continuité du courant dans l'inductance force la mise en conduction de la diode de roue libre $D$, d'où $u_s(t) = 0$.

Par définition de la valeur moyenne :
$$\langle u_s \rangle = \frac{1}{T} \left( \int_0^{\alpha T} E_0 \, \text{d}t + \int_{\alpha T}^T 0 \, \text{d}t \right) = \alpha E_0$$

*Application numérique :*
$$\langle u_s \rangle = 0{,}60 \times 100 = 60 \text{ V}$$

**2. Expression de l'ondulation de courant $\Delta i$**  
Sur l'intervalle $t \in [0, \alpha T]$, la loi des mailles s'écrit :
$$u_s(t) = E_0 = L \frac{\text{d}i}{\text{d}t} + R i(t) + E$$

En pratique industrielle et en régime de lissage efficace, la chute ohmique est négligeable devant les tensions de source ($R i \ll E_0$). L'équation se simplifie en :
$$\frac{\text{d}i}{\text{d}t} \approx \frac{E_0 - \langle u_s \rangle}{L} = \frac{E_0(1 - \alpha)}{L}$$

En intégrant entre $t = 0$ (où $i = i_{\text{min}}$) et $t = \alpha T$ (où $i = i_{\text{max}}$) :
$$\Delta i = i_{\text{max}} - i_{\text{min}} = \int_0^{\alpha T} \frac{E_0(1 - \alpha)}{L} \, \text{d}t = \frac{\alpha (1 - \alpha) E_0}{L f}$$

*Application numérique :*
$$\Delta i = \frac{0{,}60 \times (1 - 0{,}60) \times 100}{20 \times 10^{-3} \times 20 \times 10^3} = \frac{24}{400} = 0{,}060 \text{ A} = 60 \text{ mA}$$
L'hypothèse d'une ondulation négligeable devant $\langle i \rangle$ ($\Delta i / \langle i \rangle = 0{,}060 / 15 = 4{,}0 \times 10^{-3} \ll 1$) est parfaitement vérifiée.

**3. Bilan de puissance et puissance électromécanique**  
En régime permanent périodique, la tension moyenne aux bornes de l'inductance est nulle :
$$\langle u_L \rangle = 0 \implies \langle u_s \rangle = R \langle i \rangle + E \implies E = \langle u_s \rangle - R \langle i \rangle$$

*Calcul de la f.é.m. :*
$$E = 60 - 0{,}50 \times 15 = 52{,}5 \text{ V}$$

La puissance électromécanique moyenne convertie est :
$$P_{\text{em}} = E \langle i \rangle$$

*Application numérique :*
$$P_{\text{em}} = 52{,}5 \times 15 = 787{,}5 \text{ W} \approx 7{,}9 \times 10^2 \text{ W}$$

*Vérification du bilan global :*
* Puissance électrique moyenne absorbée à la source :
  $$P_e = \langle E_0 i_K(t) \rangle = E_0 \langle i_K \rangle$$
  Or, le courant $i_K(t)$ vaut $i(t) \approx \langle i \rangle$ sur $[0, \alpha T]$ et $0$ sinon, donc $\langle i_K \rangle = \alpha \langle i \rangle$.
  $$P_e = E_0 \alpha \langle i \rangle = \langle u_s \rangle \langle i \rangle = 60 \times 15 = 900 \text{ W}$$
* Pertes Joule moyennes dans l'induit :
  $$P_J = R I_{\text{eff}}^2 \approx R \langle i \rangle^2 = 0{,}50 \times 15^2 = 112{,}5 \text{ W}$$
* On retrouve bien la conservation stricte :
  $$P_e = P_J + P_{\text{em}} \iff 900 \text{ W} = 112{,}5 \text{ W} + 787{,}5 \text{ W}$$

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

1. **Confusion entre $I_{\text{eff}}$ et $\langle i \rangle$ :** Écrire systématiquement $P_J = R \langle i \rangle^2$ sans justifier que l'ondulation $\Delta i$ est très faible devant la valeur moyenne entraîne une pénalité systématique. La formule exacte est $I_{\text{eff}}^2 = \langle i \rangle^2 + \frac{(\Delta i)^2}{12}$ pour une ondulation triangulaire.
2. **Oubli de la nullité de $\langle u_L \rangle$ :** Utiliser la loi d'Ohm instantanée sur des grandeurs moyennes sans justifier que l'effet inductif moyen disparaît en régime périodique établi est perçu comme une méconnaissance des bases de l'électrotechnique.
3. **Absence de vérification de la conduction continue :** Tout raisonnement basé sur $u_s = 0$ en phase de roue libre suppose $i(t) > 0$. Si $\langle i \rangle < \frac{\Delta i}{2}$, le hacheur entre en conduction discontinue, et les formules usuelles ($\langle u_s \rangle = \alpha E_0$) deviennent **fausses**.

---

## 📌 Question Type 2 : Mécanique des fluides : équation d'Euler, théorème de Bernoulli et pertes de charge

### 💡 Méthode canonique & Étapes de rédaction

1. **Énonciation rigoureuse du système et des hypothèses :**
   * Fluide homogène, de masse volumique constante $\rho$ (écoulement **incompressible**).
   * Régime permanent ou stationnaire : $\frac{\partial}{\partial t} = 0$.
   * Caractérisation des forces de volume (pesanteur uniforme $\vec{g} = -g \vec{u}_z$).
   * Champ de vitesse : écoulement unidimensionnel dans l'approximation des vitesses débitantes moyennes $v = \frac{D_v}{S}$.

2. **Équation locale puis forme intégrale :**
   * Partir de l'équation de Navier-Stokes pour un fluide parfait (Euler) :
     $$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v}\cdot\vec{\nabla})\vec{v} \right) = -\vec{\nabla} p + \rho \vec{g}$$
   * Rappeler l'identité vectorielle $(\vec{v}\cdot\vec{\nabla})\vec{v} = \vec{\nabla}\left(\frac{v^2}{2}\right) + \vec{\text{rot}}\,\vec{v} \wedge \vec{v}$.
   * Justifier l'intégration le long d'une ligne de courant (ou dans tout le fluide si l'écoulement est irrotationnel).

3. **Formulation du théorème de Bernoulli généralisé (avec machine et frottements) :**
   Entre deux sections droites $(1)$ et $(2)$ orientées dans le sens de l'écoulement :
   $$\left( p_2 + \frac{1}{2} \rho v_2^2 + \rho g z_2 \right) - \left( p_1 + \frac{1}{1} \rho v_1^2 + \rho g z_1 \right) = \Delta p_{\text{machine}} - \Delta p_{\text{pertes}}$$
   ou, exprimé sous forme de hauteur équivalente de colonne de fluide ($\text{m}$) :
   $$H_2 - H_1 = \frac{\mathcal{P}_{\text{fournie}}}{\rho g D_v} - \Delta H_f$$

4. **Modélisation des pertes de charge :**
   * Pertes régulières (linéiques) : $\Delta p_{\text{reg}} = \lambda \frac{L}{D} \frac{\rho v^2}{2}$, où $\lambda$ est le coefficient de Darcy-Weisbach (fonction du nombre de Reynolds $Re = \frac{\rho v D}{\eta}$).
   * Pertes singulières (accidents de conduite) : $\Delta p_{\text{sing}} = \sum K_i \frac{\rho v^2}{2}$.

5. **Loi de conservation du débit (continuité) :**
   $$D_v = S_1 v_1 = S_2 v_2 = \text{cte}$$

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé :**  
Une installation hydraulique pompe de l'eau ($\rho = 1{,}0 \times 10^3 \text{ kg}\cdot\text{m}^{-3}$, viscosité dynamique $\eta = 1{,}0 \times 10^{-3} \text{ Pa}\cdot\text{s}$) depuis un grand bassin de stockage à l'air libre (surface libre $A$, altitude $z_A = 0 \text{ m}$) vers un réservoir surélevé ouvert à l'atmosphère (altitude de sortie $B$, $z_B = 25 \text{ m}$).  
La conduite a une longueur totale $L = 120 \text{ m}$, un diamètre intérieur constant $D = 100 \text{ mm}$. Le débit volumique imposé est $D_v = 15{,}7 \text{ L}\cdot\text{s}^{-1}$.  
On donne :
* Accélération de la pesanteur : $g = 9{,}81 \text{ m}\cdot\text{s}^{-2}$.
* Pression atmosphérique : $P_0 = 1{,}01 \times 10^5 \text{ Pa}$.
* Le coefficient de perte de charge régulière vaut $\lambda = 0{,}025$.
* La somme des coefficients de pertes de charge singulières (coudes, vanne, clapet) vaut $\sum K_i = 4{,}5$.
1. Calculer la vitesse d'écoulement $v$ dans la conduite et le nombre de Reynolds associé. Caractériser l'écoulement.
2. Établir l'expression littérale puis calculer la puissance mécanique utile $\mathcal{P}_u$ que la pompe doit fournir au fluide.

---

**Rédaction modèle :**

**1. Calcul de la vitesse et analyse de l'écoulement**  
La section de la conduite cylindrique vaut :
$$S = \frac{\pi D^2}{4} = \frac{\pi \times (0{,}100)^2}{4} \approx 7{,}85 \times 10^{-3} \text{ m}^2$$

D'après le principe de conservation de la masse pour un fluide incompressible :
$$v = \frac{D_v}{S} = \frac{15{,}7 \times 10^{-3}}{7{,}85 \times 10^{-3}} = 2{,}0 \text{ m}\cdot\text{s}^{-1}$$

Le nombre de Reynolds dans la conduite cylindrique est :
$$Re = \frac{\rho v D}{\eta} = \frac{1{,}0 \times 10^3 \times 2{,}0 \times 0{,}100}{1{,}0 \times 10^{-3}} = 2{,}0 \times 10^5$$
Comme $Re > 4000$, l'écoulement dans la conduite est **turbulent**.

**2. Expression et calcul de la puissance mécanique utile**  
On applique le théorème de Bernoulli généralisé entre la surface du bassin inférieur $(A)$ et la section de sortie dans le réservoir supérieur $(B)$ le long d'une ligne de courant moyenne :

$$\left( p_B + \frac{1}{2} \rho v_B^2 + \rho g z_B \right) - \left( p_A + \frac{1}{2} \rho v_A^2 + \rho g z_A \right) = \Delta p_{\text{pompe}} - \Delta p_f$$

*Hypothèses d'application :*
* Surfaces libres à l'air libre : $p_A = p_B = P_0$.
* Grand réservoir : l'aire de la section en $A$ est très grande devant celle du tuyau ($S_A \gg S$), d'où $v_A \approx 0$.
* Au point de rejet $B$, la vitesse du fluide est celle de la conduite : $v_B = v = 2{,}0 \text{ m}\cdot\text{s}^{-1}$.
* Référence des altitudes : $z_A = 0$, $z_B = 25 \text{ m}$.

Le terme de pertes de charge totales s'écrit :
$$\Delta p_f = \Delta p_{\text{reg}} + \Delta p_{\text{sing}} = \left( \lambda \frac{L}{D} + \sum K_i \right) \frac{1}{2} \rho v^2$$

L'élévation de pression totale transmise par la pompe s'obtient par réarrangement :
$$\Delta p_{\text{pompe}} = \rho g z_B + \frac{1}{2} \rho v^2 + \left( \lambda \frac{L}{D} + \sum K_i \right) \frac{1}{2} \rho v^2$$
$$\Delta p_{\text{pompe}} = \rho g z_B + \frac{1}{2} \rho v^2 \left( 1 + \lambda \frac{L}{D} + \sum K_i \right)$$

*Calcul numérique du gain de pression :*
* Terme géométrique :
  $$\rho g z_B = 1{,}0 \times 10^3 \times 9{,}81 \times 25 = 2{,}453 \times 10^5 \text{ Pa}$$
* Facteur de pertes adimensionnel :
  $$\lambda \frac{L}{D} + \sum K_i = 0{,}025 \times \frac{120}{0{,}100} + 4{,}5 = 30 + 4{,}5 = 34{,}5$$
* Terme cinétique et dissipatif :
  $$\frac{1}{2} \rho v^2 \left( 1 + 34{,}5 \right) = \frac{1}{2} \times 1{,}0 \times 10^3 \times (2{,}0)^2 \times 35{,}5 = 2{,}0 \times 10^3 \times 35{,}5 = 0{,}710 \times 10^5 \text{ Pa}$$
* D'où :
  $$\Delta p_{\text{pompe}} = 2{,}453 \times 10^5 + 0{,}710 \times 10^5 = 3{,}163 \times 10^5 \text{ Pa}$$

La puissance mécanique utile $\mathcal{P}_u$ transmise par l'organe hydraulique au fluide est le produit du saut de pression par le débit volumique :
$$\mathcal{P}_u = D_v \Delta p_{\text{pompe}}$$

*Application numérique :*
$$\mathcal{P}_u = 15{,}7 \times 10^{-3} \times 3{,}163 \times 10^5 \approx 4{,}97 \times 10^3 \text{ W} = 4{,}97 \text{ kW}$$

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

1. **Confusion sur la pression à la surface d'un jet ou réservoir :**  
   Beaucoup de candidats oublient que lorsqu'une conduite débouche à l'air libre dans un réservoir, la pression statique vaut la pression atmosphérique $P_0$, mais l'énergie cinétique $\frac{1}{2}\rho v^2$ n'est pas nécessairement nulle immédiatement à l'embouchure.
2. **Incohérence des unités dans Bernoulli :**  
   Prendre garde à la forme utilisée :
   * Forme en pressions : tous les termes sont en Pascals ($\text{Pa}$ ou $\text{N}\cdot\text{m}^{-2}$).
   * Forme en hauteurs de charge : tous les termes sont divisés par $\rho g$ et s'expriment en mètres ($\text{m}$).
   * Forme massique : tous les termes sont divisés par $\rho$ et s'expriment en $\text{J}\cdot\text{kg}^{-1}$.  
   Mélanger des termes en $\text{Pa}$ avec des termes en $\text{m}$ détruit toute la suite du calcul.
3. **Signe du terme machine :**  
   Une pompe **fournit** de l'énergie mécanique au fluide ($\Delta p_{\text{pompe}} > 0$). Une turbine **prélève** de l'énergie au fluide ($\Delta p_{\text{turbine}} < 0$). Inverser ce terme conduit à des puissances utiles aberrantes (pompes qui reçoivent de la puissance du fluide sans source externe).
4. **Négliger la vitesse $v_A$ sans justification :**  
   Écrire $v_A = 0$ directement sans préciser que la surface $S_A$ est infiniment grande devant la section de la canalisation ($S_A \gg S \implies v_A \ll v$) est pénalisé dans les concours de niveau 1 (Mines-Ponts, Centrale).