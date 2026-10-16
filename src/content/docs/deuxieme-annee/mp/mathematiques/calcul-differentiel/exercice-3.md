---
title: 'Exercice 1 : Différentielle et matrice jacobienne'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse locale d'un écoulement diphasique et matrice jacobienne

**Filière :** MP  
**Matière :** Mathématiques  
Chapitre: ** Calcul différentiel  
**Thème :** Différentielle et matrice jacobienne  

---

## Énoncé

Dans le cadre de l'étude thermodynamique d'un réacteur chimique diphasique à l'échelle pilote, on modélise l'état local du mélange par un système de deux variables d'état intensives : la température $T$ (exprimée en kelvins, $\text{K}$) et la pression $P$ (exprimée en pascals, $\text{Pa}$). 

Pour des raisons de contrôle de procédé, on s'intéresse à la transformation de ces variables d'état en deux variables de sortie mesurées par des capteurs :
*   Le flux molaire de réactif $F$ (en $\text{mol}\cdot\text{s}^{-1}$).
*   La masse volumique apparente du mélange $\rho$ (en $\text{kg}\cdot\text{m}^{-3}$).

La fonction de transfert du système est modélisée par l'application $f : \Omega \to \mathbb{R}^2$ définie sur un ouvert $\Omega = ]0, +\infty[ \times ]0, +\infty[$ par :
$$f(T, P) = \begin{pmatrix} F(T, P) \\ \rho(T, P) \end{pmatrix} = \begin{pmatrix} k \cdot \frac{P}{T} \exp\left(-\frac{E}{R T}\right) \\ \frac{M \cdot P}{Z(T, P) \cdot R \cdot T} \end{pmatrix}$$

où :
*   $k = 2.5 \times 10^{-2} \text{ mol}\cdot\text{K}\cdot\text{s}^{-1}\cdot\text{Pa}^{-1}$ est une constante cinétique globale.
*   $E = 4.5 \times 10^{4} \text{ J}\cdot\text{mol}^{-1}$ est une énergie d'activation caractéristique.
*   $R = 8.314 \text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$ est la constante des gaz parfaits.
*   $M = 2.8 \times 10^{-2} \text{ kg}\cdot\text{mol}^{-1}$ est la masse molaire moyenne du mélange.
*   $Z(T, P) = 1 + \beta \frac{P}{T^2}$ est le facteur de compressibilité réel du mélange, avec $\beta = 1.2 \times 10^{-6} \text{ K}^2\cdot\text{Pa}^{-1}$ (paramètre correctif non idéal).

On se place au voisinage d'un point de fonctionnement nominal $M_0 = (T_0, P_0)$ avec $T_0 = 400 \text{ K}$ et $P_0 = 2.0 \times 10^6 \text{ Pa}$.

---

## Questions

1. **Justesse des domaines et régularité :** Justifier que l'application $f$ est de classe $\mathcal{C}^1$ sur l'ouvert $\Omega$.
2. **Calcul de la matrice jacobienne :** Exprimer littéralement, puis calculer sous forme matricielle la matrice jacobienne de $f$ au point $M_0$, notée $J_f(M_0)$. On veillera à expliciter les dérivées partielles intermédiaires.
3. **Linéarisation et sensibilité :** Écrire la relation d'approximation linéaire (différentielle) reliant les variations infinitésimales $(\Delta T, \Delta P)$ aux variations des mesures $(\Delta F, \Delta \rho)$.
4. **Analyse critique et limites du modèle :** 
   * a) Calculer numériquement les valeurs de $F(M_0)$ et $\rho(M_0)$. Préciser les ordres de grandeur.
   * b) Supposons qu'une incertitude de mesure de $\pm 1\%$ affecte la température $T_0$ et que la pression $P_0$ soit parfaitement stable. Estimer l'impact relatif maximal sur la masse volumique $\rho$.
   * c) *Analyse critique :* Discuter la validité physique du modèle lorsque $T \to 0$ ou lorsque $P$ prend des valeurs de l'ordre de $10^{10} \text{ Pa}$. Le modèle mathématique garantit-il la réalité physique des grandeurs sur l'ensemble de $\mathbb{R}^2$ ?

---

## Pistes

* **Question 1 :** Décomposer $f$ en somme, produits et quotients de fonctions usuelles (exponentielles, polynômes) en veillant à vérifier que les dénominateurs ne s'annulent pas sur $\Omega$.
* **Question 2 :** Pour dériver par rapport à $T$ et $P$, utilisez les règles de dérivation des fonctions composées (notamment pour la composante $\rho$ qui contient le facteur $Z(T,P)$ au dénominateur).
* **Question 3 :** La formule de Taylor à l'ordre 1 donne $\Delta f(M_0) \approx J_f(M_0) \begin{pmatrix} \Delta T \\ \Delta P \end{pmatrix}$.
* **Question 4 :** Pour l'analyse d'incertitude, utilisez les différentielles logarithmiques ou l'approximation linéaire. Pour la critique physique, observez le comportement de $Z(T,P)$ et de l'exponentielle aux limites.

---

## Corrigé pas à pas

### 1. Régularité de l'application $f$
La fonction $f$ est constituée de deux composantes $F$ et $\rho$.
*   La composante $F(T, P) = k \cdot P T^{-1} \exp\left(-\frac{E}{R T}\right)$ est un produit de fonctions de classe $\mathcal{C}^\infty$ sur $\Omega$ (fonctions polynomiales, exponentielle d'une fonction rationnelle). Elle est donc $\mathcal{C}^1$ sur $\Omega$.
*   La composante $\rho(T, P) = \frac{M P}{R T \left(1 + \beta \frac{P}{T^2}\right)}$ est un quotient. Le dénominateur $D(T,P) = R T + \beta \frac{P T}{T^2} = R T + \beta \frac{P}{T}$ ne s'annule pas sur $\Omega = ]0, +\infty[^2$ car $R, T, \beta, P > 0$. Ainsi, $\rho$ est rationnelle par rapport à ses composantes et au facteur correctif, donc de classe $\mathcal{C}^1$ sur $\Omega$.

Par conséquent, **$f$ est de classe $\mathcal{C}^1$ sur $\Omega$**.

### 2. Calcul de la matrice jacobienne
La matrice jacobienne en un point $(T, P)$ est donnée par :
$$J_f(T, P) = \begin{pmatrix} \frac{\partial F}{\partial T} & \frac{\partial F}{\partial P} \\ \frac{\partial \rho}{\partial T} & \frac{\partial \rho}{\partial P} \end{pmatrix}$$

*   **Dérivées de $F$ :**
    $$\frac{\partial F}{\partial T} = k P \left[ -\frac{1}{T^2} \exp\left(-\frac{E}{RT}\right) + \frac{1}{T} \left(\frac{E}{R T^2}\right) \exp\left(-\frac{E}{RT}\right) \right] = k \frac{P}{T^2} \left( \frac{E}{RT} - 1 \right) \exp\left(-\frac{E}{RT}\right)$$
    $$\frac{\partial F}{\partial P} = \frac{k}{T} \exp\left(-\frac{E}{RT}\right)$$

*   **Dérivées de $\rho$ :**
    En posant $\rho(T, P) = \frac{M P}{R T + \beta \frac{P}{T}}$, calculons les dérivées partielles :
    $$\frac{\partial \rho}{\partial T} = -\frac{M P \left( R - \beta \frac{P}{T^2} \right)}{\left( R T + \beta \frac{P}{T} \right)^2}$$
    $$\frac{\partial \rho}{\partial P} = \frac{M \left( R T + \beta \frac{P}{T} \right) - M P \left(\frac{\beta}{T}\right)}{\left( R T + \beta \frac{P}{T} \right)^2} = \frac{M R T}{\left( R T + \beta \frac{P}{T} \right)^2}$$

**Application numérique au point $M_0 (400 \text{ K}, 2\times 10^6 \text{ Pa})$ :**
*   Valeur de $Z(T_0, P_0) = 1 + 1.2\times 10^{-6} \times \frac{2\times 10^6}{400^2} = 1 + 1.2\times 10^{-6} \times 12.5 = 1 + 1.5\times 10^{-5} \approx 1$ (comportement quasi-idéal à cette pression modérée).
*   Terme d'activation : $\frac{E}{R T_0} = \frac{4.5 \times 10^4}{8.314 \times 400} \approx 13.53$.
*   On obtient numériquement :
    *   $\frac{\partial F}{\partial T}(M_0) \approx 2.45 \times 10^{-2} \text{ mol}\cdot\text{s}^{-1}\cdot\text{K}^{-1}$
    *   $\frac{\partial F}{\partial P}(M_0) \approx 3.12 \times 10^{-8} \text{ mol}\cdot\text{s}^{-1}\cdot\text{Pa}^{-1}$
    *   $\frac{\partial \rho}{\partial T}(M_0) \approx -4.21 \times 10^{-2} \text{ kg}\cdot\text{m}^{-3}\cdot\text{K}^{-1}$
    *   $\frac{\partial \rho}{\partial P}(M_0) \approx 8.45 \times 10^{-6} \text{ kg}\cdot\text{m}^{-3}\cdot\text{Pa}^{-1}$

### 3. Linéarisation et sensibilité
La relation linéaire approchée pour les variations locales est :
$$\begin{pmatrix} \Delta F \\ \Delta \rho \end{pmatrix} \approx J_f(M_0) \begin{pmatrix} \Delta T \\ \Delta P \end{pmatrix}$$
Soit :
$$\Delta F \approx \frac{\partial F}{\partial T}(M_0) \Delta T + \frac{\partial F}{\partial P}(M_0) \Delta P$$
$$\Delta \rho \approx \frac{\partial \rho}{\partial T}(M_0) \Delta T + \frac{\partial \rho}{\partial P}(M_0) \Delta P$$

### 4. Analyse critique et limites du modèle
*   **a) Ordres de grandeur au point $M_0$ :**
    *   $F(M_0) = \frac{2.5 \times 10^{-2} \times 2 \times 10^6}{400} \exp(-13.53) \approx 125 \times 1.48 \times 10^{-6} \approx 1.85 \times 10^{-4} \text{ mol}\cdot\text{s}^{-1}$.
    *   $\rho(M_0) = \frac{2.8 \times 10^{-2} \times 2 \times 10^6}{8.314 \times 400 \times 1} \approx 16.84 \text{ kg}\cdot\text{m}^{-3}$ (ordre de grandeur typique d'une phase vapeur dense ou gaz comprimé).

*   **b) Impact d'une incertitude sur $T$ :**
    Si $\Delta P = 0$ et que $\Delta T / T_0 = \pm 1\%$, alors $\Delta T = 0.01 \times 400 = 4 \text{ K}$.
    L'variation relative de la masse volumique est estimée par :
    $$\frac{\Delta \rho}{\rho_0} \approx \frac{1}{\rho_0} \frac{\partial \rho}{\partial T}(M_0) \Delta T \approx \frac{-4.21 \times 10^{-2}}{16.84} \times 4 \approx -0.01 \times 4 = -0.04$$
    Soit une variation relative de **$-4\%$**. L'amplification de l'incertitude (facteur 4) s'explique par la dilatation thermique directe couplée au terme correctif.

*   **c) Analyse critique des limites du modèle :**
    *   *Limite lorsque $T \to 0$ :* Le terme $\exp\left(-\frac{E}{RT}\rightarrow -\infty\right)$ tend vers $0$ pour le flux $F$, ce qui est physiquement cohérent (la cinétique s'arrête au zéro absolu). En revanche, pour la masse volumique, le terme $\frac{\beta P}{T^2}$ diverge en $1/T^2$, ce qui ferait tendre $Z(T,P)$ vers l'infini et $\rho$ vers $0$, perdant tout sens physique pour un gaz réel à très basse température (condensation/solidification non modélisée).
    *   *Limite de haute pression ($P \sim 10^{10} \text{ Pa}$) :* Le facteur de compressibilité $Z(T,P) = 1 + \beta \frac{P}{T^2}$ devient très grand ($1 + \frac{1.2\times 10^{-6} \times 10^{10}}{1.6 \times 10^5} \approx 76$). Le modèle linéaire de $Z$ n'est plus valide aux très hautes pressions où les équations d'état cubiques (Van der Waals, Redlich-Kwong) s'imposent. 
    *   *Conclusion critique :* Ce modèle mathématique est strictement local (valable dans un domaine restreint autour de $M_0$). L'utilisation aveugle de l'ouvert $\Omega = ]0, +\infty[^2$ conduit à des aberrations physiques aux bornes du domaine.