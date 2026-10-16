---
title: 'Cours : Thermochimie et 1er Principe'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Thermochimie et $1^{\text{er}}$ Principe (PCSI)

---

## 1. Vocabulaire et Outils de la Thermodynamique

### A. Systèmes et variables d'état
*   **Système thermodynamique** : Objet de l'étude, délimité par une frontière (fictive ou réelle).
    *   *Fermé* : Pas d'échange de matière avec l'extérieur.
    *   *Ouvert* : Échange de matière et d'énergie.
    *   *Isolé* : Ni échange de matière, ni échange d'énergie.
*   **Variables d'état** : Grandeurs macroscopiques caractérisant le système ($P, V, T, n$).
    *   *Extensives* : Proportionnelles à la quantité de matière ($V, n, S, U, H$).
    *   *Intensives* : Indépendantes de la quantité de matière ($P, T$, masses volumiques). *Rappel : Le rapport de deux grand est extensives est une grandeur intensive.*

### B. Transformations thermodynamiques
*   **Équilibre** : État où les variables d'état ne dépendent plus du temps et sont uniformes dans le système.
*   **Transformation quasi-statique** : Succession d'états d'équilibre infinitésimaux.
*   **Transformation réversible** : Transformation quasi-statique et sans aucun phénomène dissipatif (frottements, viscosité, résistance électrique).
*   **Mots-clés des transformations** :
    *   *Isotherme* : $T = \text{cte}$
    *   *Isobare* : $P = \text{cte}$
    *   *Isochore* : $V = \text{cte}$
    *   *Adiabatique* : $\delta Q = 0$

---

## 2. Le Premier Principe de la Thermodynamique

### A. Énoncé général
Pour tout système fermé au repos macroscopique, il existe une fonction d'état extensive appelée **énergie interne** $U$ (exprimée en joules $\text{J}$) telle que, pour toute transformation entre un état initial et un état final :

$$\Delta U = W + Q$$

*   $W$ : Travail des forces extérieures reçu par le système au cours de la transformation.
*   $Q$ : Transfert thermique (chaleur) reçu par le système au cours de la transformation.

> **Attention (Conventions de signe)** : Tout ce qui est *reçu* par le système est compté algébriquement positivement ($> 0$). Tout ce qui est *fourni* par le système à l'extérieur est négatif.

### B. Forme différentielle
Pour une transformation infinitésimale :
$$\mathrm{d}U = \delta W + \delta Q$$
*   $\mathrm{d}U$ est une **différentielle exacte** (sa variation ne dépend que des états initial et final).
*   $\delta W$ et $\delta Q$ sont des **formes différentielles non exactes** (leur intégrale dépend du chemin thermodynamique suivi).

---

## 3. Travail et Chaleur : Expressions Usuelles

### A. Expression du travail
Pour une transformation quasi-statique impliquant des forces de pression :
$$\delta W = -P_{\text{ext}} \mathrm{d}V$$
*   Si la transformation est **réversible**, $P_{\text{ext}} = P_{\text{système}} = P$. Ainsi :
    $$W = -\int_{V_i}^{V_f} P \, \mathrm{d}V$$

### B. Les deux coefficients calorimétriques (Capacités thermiques)
*   **Capacité thermique à volume constant** $C_V$ (ou $C_{v,m}$ molaire) :
    $$U \text{ ne dépend que de } T \text{ pour un gaz parfait.} \quad \mathrm{d}U = C_V \mathrm{d}T$$
*   **Capacité thermique à pression constante** $C_P$ (ou $C_{p,m}$ molaire) :
    Définition de l'**enthalpie** $H = U + PV$.
    $$\mathrm{d}H = \mathrm{d}U + P\mathrm{d}V + V\mathrm{d}P$$
    Pour une transformation isobare ($dP = 0$) réversible : 
    $$\delta Q_{\text{isobare}} = \mathrm{d}H = C_P \mathrm{d}T$$

---

## 4. Thermochimie : Outils et Grandeurs de Réaction

### A. Avancement et variables de réaction
Soit une réaction chimique symbolisée par :
$$\sum_{\text{réactifs}} |\nu_i| A_i \rightarrow \sum_{\text{produits}} \nu_i A_i$$
On pose le bilan en fonction de l'avancement $\xi$ (en moles $\text{mol}$) :
$$n_i(\xi) = n_{i,0} + \nu_i \xi$$
*(avec $\nu_i < 0$ pour les réactifs et $\nu_i > 0$ pour les produits).*

### B. Enthalpie standard de réaction $\Delta_r H^\circ(T)$
*   **Définition** : Dérivée de l'enthalpie du système par rapport à l'avancement à pression constante :
    $$\Delta_r H = \left( \frac{\partial H}{\partial \xi} \right)_P$$
*   **Grandeur standard** : Notée avec un exposant $^\circ$, elle correspond au système pris à la pression standard $P^\circ = 1\text{ bar}$.
*   **Loi de Hess** : L'enthalpie standard de réaction est une fonction d'état, elle ne dépend pas du chemin réactionnel :
    $$\Delta_r H^\circ(T) = \sum_i \nu_i \Delta_f H^\circ_{\text{form}, i}(T)$$
    *(où $\Delta_f H^\circ_{\text{form}, i}$ est l'enthalpie standard de formation du corps $i$).*

### C. Influence de la température : Loi de Kirchhoff
En dérivant $\Delta_r H^\circ(T)$ par rapport à la température :
$$\frac{\mathrm{d} \Delta_r H^\circ}{\mathrm{d}T} = \Delta_r C_P^\circ(T) = \sum_i \nu_i C_{P,m,i}^\circ(T)$$

---

## 5. Méthodes et Savoir-Faire (PCSI)

1.  **Calculer une variation d'enthalpie $\Delta H$ pour un gaz parfait subissant une transformation irréversible** :
    *   *Astuce* : $H$ est une fonction d'état ! On invente un **chemin réversible fictif** entre le même état initial et le même état final (souvent une suite isobare/isotherme), car $\Delta H = \int \mathrm{d}H$ ne dépend pas du chemin réel.
2.  **Déterminer une température de flamme adiabatique** :
    *   Système fermé, adiabatique ($Q = 0$), isobare ($P = P^\circ$), sans travail utile ($W = 0$).
    *   D'après le $1^{\text{er}}$ principe : $\Delta H = 0$.
    *   On écrit $\Delta H$ en décomposant le trajet : chauffage des réactifs jusqu'à $T_f$, réaction chimique à $T_f$, puis refroidissement/chauffage des produits jusqu'à $T_f$. On résout l'équation en $T_f$.

---

## 6. Pièges à Éviter

*   **Erreur de signe sur le travail** : Ne pas oublier le signe $-$ dans $\delta W = -P_{\text{ext}}\mathrm{d}V$. Si le système se détend ($\mathrm{d}V > 0$), il fournit du travail à l'extérieur, donc $W < 0$.
*   **Confondre $U$ et $H$** : 
    *   $\delta Q = \mathrm{d}U$ **uniquement** à isochore ($\text{et } V = \text{cte}$).
    *   $\delta Q = \mathrm{d}H$ **uniquement** à isobare ($\text{et } P = \text{cte}$).
*   **Unités des grandeurs réactionnelles** : $\Delta_r H^\circ$ s'exprime en $\text{J}\cdot\text{mol}^{-1}$ (et non en $\text{J}$). Attention aux tables thermodynamiques souvent données en $\text{kJ}\cdot\text{mol}^{-1}$.
*   **Corps purs simples** : L'enthalpie standard de formation $\Delta_f H^\circ$ d'un corps pur simple stable à la température $T$ et sous $P^\circ = 1\text{ bar}$ est **toujours nulle** (ex: $\text{O}_2(g)$, $\text{C(graphite)}$, $\text{H}_2(g)$).