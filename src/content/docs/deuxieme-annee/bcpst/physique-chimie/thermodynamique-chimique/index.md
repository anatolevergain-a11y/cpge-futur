---
title: 'Cours : Thermodynamique chimique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Thermodynamique Chimique (BCPST2)

---

## 1. Rappels et Outils Mathématiques Indispensables

### A. Fonctions d'état et différentielles
Soit $X$ une fonction d'état d'un système physico-chimique. Sa variation infinitésimale $\text{d}X$ est une **différentielle totale exacte**. 

*   **Théorème de Schwarz :** Si $X(T, P, n_i)$ est de classe $\mathcal{C}^2$, alors l'ordre des dérivées partielles croisées est indifférent :
    $$\frac{\partial^2 X}{\partial T \partial P} = \frac{\partial^2 X}{\partial P \partial T}$$
*   **Identité d'Euler (pour une fonction homogène de degré 1, comme les grandeurs extensives $U, H, S, G$) :**
    Si $X$ est extensive, $X(T, P, \lambda n_i) = \lambda X(T, P, n_i)$, donc :
    $$X = \sum_{\text{i}} n_i \left( \frac{\partial X}{\partial n_i} \right)_{T,P,n_{j \neq i}}$$

### B. Grandeurs molaires et grand-point de vue partiel
Pour une grandeur extensive $X$, on définit la **grandeur molaire partielle** $\bar{X}_i$ (ou potentiel partiel) de l'espèce $i$ par :
$$\bar{X}_i = \left( \frac{\partial X}{\partial n_i} \right)_{T, P, n_{j \neq i}}$$
Pour un corps pur $i$, $\bar{X}_i = X_{m,i}$ (grandeur molaire du corps pur).

---

## 2. Le Potentiel Chimique

### A. Définition
Le **potentiel chimique** $\mu_i$ d'une espèce $i$ dans un système ouvert est défini comme l'enthalpie libre molaire partielle de cette espèce :
$$\mu_i = \bar{G}_i = \left( \frac{\partial G}{\partial n_i} \right)_{T, P, n_{j \neq i}}$$

*   **Signification physique :** C'est l'énergie qu'il faut fournir au système pour introduire une mole de l'espèce $i$ à température et pression constantes, sans modifier la composition globale (système grand).
*   **Critère d'évolution (Second Principe) :** À $T$ et $P$ constantes, pour une évolution à $n_i$ variables :
    $$\text{d}G = -T \text{d}S_cr \le 0 \implies \sum_i \mu_i \text{d}n_i \le 0$$

### B. Expression du potentiel chimique selon l'état de la matière
*   **Gaz parfait pur :** 
    $$\mu_i(T, P) = \mu^\circ(T) + RT \ln\left(\frac{P}{P^\circ}\right)$$
    *(avec $P^\circ = 1\text{ bar}$, $\mu^\circ(T)$ potentiel chimique standard).*

*   **Constituant $i$ d'un mélange de gaz parfaits :**
    $$\mu_i(T, P_i) = \mu_i^\circ(T) + RT \ln\left(\frac{P_i}{P^\circ}\right) = \mu_i^\circ(T) + RT \ln\left(\frac{x_i P}{P^\circ}\right)$$
    *(où $P_i$ est la pression partielle et $x_i$ la fraction molaire).*

*   **Soluté en solution idéale (ou diluée idéale) de concentration $C_i$ ou molalité $m_i$ :**
    $$\mu_i(T, P) = \mu_i^*(T, P) + RT \ln\left(\frac{C_i}{C^\circ}\right)$$
    *(avec $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$).*

*   **Solvant $é$ (ou espèce majoritaire) :**
    $$\mu_{\text{solvant}}(T, P) = \mu_{\text{solvant}}^*(T, P) + RT \ln(x_{\text{solvant}})$$

---

## 3. Équilibre Chimique et Enthalpie Libre de Réaction

### A. Avancement et grandeur de réaction
Soit une réaction chimique modélisée par l'équation stœchiométrique :
$$\sum_{\text{réactifs}} |\nu_i| A_i \rightarrow \sum_{\text{produits}} \nu_i A_i \quad \text{soit} \quad \sum_{\text{i}} \nu_i A_i = 0$$
*(avec les conventions $\nu_i < 0$ pour les réactifs et $\nu_i > 0$ pour les produits).*

On définit l'**enthalpie libre de réaction** $\Delta_r G$ à $T$ et $P$ constantes :
$$\Delta_r G = \left( \frac{\partial G}{\partial \xi} \right)_{T, P} = \sum_{\text{i}} \nu_i \mu_i$$

### B. Lien avec le Quotient de Réaction ($Q_r$)
En injectant les expressions des potentiels chimiques dans $\Delta_r G$, on obtient l'équation fondamentale :
$$\Delta_r G = \Delta_r G^\circ + RT \ln(Q_r)$$
Où :
*   $\Delta_r G^\circ = \sum_i \nu_i \mu_i^\circ$ est l'enthalpie libre standard de réaction.
*   $Q_r$ est le **quotient de réaction**, sans dimension, construit selon la loi d'action de masse :
    $$Q_r = \prod_{i} \left( a_i \right)^{\nu_i}$$
    *(avec $a_i$ l'activité thermodynamique de l'espèce $i$).*

---

## 4. Déplacement et Évolution des Équilibres Chimiques

### A. Condition d'équilibre thermodynamique
À l'équilibre chimique, l'entropie créée est maximale, donc l'enthalpie libre $G$ est minimale à $T$ et $P$ fixées :
$$\Delta_r G = 0 \iff \Delta_r G^\circ = -RT \ln(K^\circ)$$
Où $K^\circ$ est la **constante d'équilibre thermodynamique** ($K^\circ = Q_{r,\text{eq}}$).

### B. Sens d'évolution spontanée
*   Si $\Delta_r G < 0$ (soit $Q_r < K^\circ$) : La réaction évolue dans le **sens direct** ($\text{d}\xi > 0$).
*   Si $\Delta_r G > 0$ (soit $Q_r > K^\circ$) : La réaction évolue dans le **sens indirect** ($\text{d}\xi < 0$).

---

## 5. Thermochimie et Influence de la Température (Loi de Van 't Hoff)

### A. Dépendance thermique des constantes d'équilibre
L'enthalpie standard de réaction $\Delta_r H^\circ$ est reliée à la constante d'équilibre par la **loi de Van 't Hoff** :
$$\frac{\text{d}}{\text{d}T} \left( \ln K^\circ \right) = \frac{\Delta_r H^\circ}{R T^2}$$
Sous forme intégrée (en supposant $\Delta_r H^\circ$ constante sur l'intervalle $[T_1, T_2]$) :
$$\ln\left( \frac{K^\circ(T_2)}{K^\circ(T_1)} \right) = -\frac{\Delta_r H^\circ}{R} \left( \frac{1}{T_2} - \frac{1}{T_1} \right)$$

### B. Loi de Moderation (Le Chatelier)
*   **Si la réaction est endothermique** ($\Delta_r H^\circ > 0$) : Une augmentation de la température $T$ entraîne une **augmentation** de $K^\circ$. Le système réagit en consommant de la chaleur (sens direct favorisé).
*   **Si la réaction est exothermique** ($\Delta_r H^\circ < 0$) : Une augmentation de la température $T$ entraîne une **diminution** de $K^\circ$.

---

## 6. Méthodes et Démonstrations Exigibles en BCPST

### Théorème : Variance d'un système physico-chimique (Règle de Gibbs)
La **variance** $V$ d'un système à l'équilibre est le nombre de paramètres intensifs indépendants nécessaires pour définir complètement l'état d'équilibre du système.
$$V = C - \Phi + 2 - \sum \psi$$
*   $C$ : nombre de constituants indépendants.
*   $\Phi$ : nombre de phases.
*   $2$ : variables $T$ et $P$.
*   $\sum \psi$ : nombre de relations indépendantes supplémentaires (ex: stœchiométrie initiale, charges, etc.).

---

## 7. Pièges Classiques à Éviter (Attention aux BCPST !)

1.  **Activités et dimensions :** 
    *   Le quotient de réaction $Q_r$ et la constante $K^\circ$ sont **strictement sans dimension**. 
    *   Pour un gaz : $a_i = \frac{P_i}{P^\circ}$ (avec $P^\circ = 1\text{ bar}$). Ne jamais mettre des Pascals ou des atm bruts dans $Q_r$ !
    *   Pour un solide ou un solvant pur (phase condensée seule) : $a_i = 1$.
    *   Pour un soluté dilué : $a_i = \frac{C_i}{C^\circ}$ (avec $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$).

2.  **Confusions thermodynamiques :**
    *   $\Delta_r G$ n'est **pas** une constante, elle dépend de l'avancement $\xi$ via $Q_r$. En revanche, $\Delta_r G^\circ$ ne dépend **que de la température** $T$.

3.  **Oubli des états standard :**
    *   Pour calculer $\Delta_r G^\circ(T)$ à partir des tables, utiliser la relation de Gibbs-Helmholtz : 
        $$\Delta_r G^\circ(T) = \Delta_r H^\circ(T) - T \Delta_r S^\circ(T)$$
        En première approximation (loi d'Ellingham), on considère souvent $\Delta_r H^\circ$ et $\Delta_r S^\circ$ indépendantes de $T$.