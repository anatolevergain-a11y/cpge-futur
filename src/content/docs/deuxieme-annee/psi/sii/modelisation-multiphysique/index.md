---
title: 'Cours : Modélisation multiphysique des systèmes'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

La modélisation multiphysique des systèmes continus et discrets en classe préparatoire PSI (Physique et Sciences Industrielles) repose sur l'unification des formalismes énergétiques et par analogie. L'objectif est d'établir le modèle de comportement d'un système multi-domaines (mécanique, électrique, thermique, hydraulique, magnétique) afin de prédire ses performances.

### 1.1. Variables d'effort et de flux
Tout système ou liaison entre deux sous-systèmes s'interface via l'échange de deux types de variables conjuguées, dont le produit correspond à une puissance instantanée $P(t)$ :
*   **Variable d'effort** $e(t)$ : Grandeur intensive ou extensive qui tend à imposer un mouvement ou une transformation (ex. : force $\vec{F}$, couple $\vec{C}$, tension $u$, pression $p$).
*   **Variable de flux** $f(t)$ : Grandeur liée à la vitesse de déplacement ou au débit associé (ex. : vitesse $\vec{V}$, vitesse de rotation $\omega$, courant $i$, débit volumique $q_v$).

La puissance s'exprime sous la forme générale :
$$P(t) = e(t) \cdot f(t)$$

### 1.2. Classification des composants multiphysiques
Les composants élémentaires de la chaîne de puissance sont modélisés par trois familles de dipôles énergétiques :
1.  **Les sources** (actives) : Imposent soit l'effort indépendamment du flux, soit le flux indépendamment de l'effort.
2.  **Les éléments dissipatifs** (résistifs) : Sièges d'une conversion irréversible d'énergie en chaleur (effet Joule, frottements visqueux). Relation algébrique liant l'effort et le flux.
3.  **Les éléments accumulateurs** (stockage) : Sièges d'un stockage d'énergie potentielle (compliance/élasticité) ou cinétique/magnétique/thermique (inertie/capacité). Relations intégro-différentielles.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Graphe bond-graph et représentation causale
Le formalisme des *Bond Graphs* (graphes de liaison) permet une modélisation acausale unifiée basée sur la conservation de la puissance. Les liaisons (bonds) véhiculent la puissance via un demi-flèche indiquant le sens conventionnel et associent un effort $e$ et un flux $f$.

#### Jonctions fondamentales :
*   **Jonction 0 (Parallèle / Nœud d'efforts)** : Les efforts sont égaux, la somme algébrique des flux est nulle (loi des nœuds).
    $$\sum_{\text{i}} f_i = 0 \quad \text{et} \quad e_1 = e_2 = \dots = e_n$$
*   **Jonction 1 (Série / Boucle de flux)** : Les flux sont égaux, la somme algébrique des efforts est nulle (loi des mailles).
    $$\sum_{\text{i}} e_i = 0 \quad \text{et} \quad f_1 = f_2 = \dots = f_n$$

### 2.2. Théorème d'unicité et analogies physico-énergétiques
Par analogie, les équations régissant les différents domaines physiques sont isomorphes. Le tableau ci-dessous explicite ces correspondances fondamentales :

| Domaine | Effort $e(t)$ | Flux $f(t)$ | Dissipatif $R$ | Accumulateur $C$ (Intégral) | Accumulateur $L$ (Dérivé) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Électrique** | Tension $u(t)$ ($\text{V}$) | Courant $i(t)$ ($\text{A}$) | $u = R \cdot i$ | $u(t) = U_0 + \frac{1}{C}\int i dt$ | $u = L \frac{di}{dt}$ |
| **Mécanique de translation** | Force $F(t)$ ($\text{N}$) | Vitesse $v(t)$ ($\text{m}\cdot\text{s}^{-1}$) | $F = f \cdot v$ | $x(t) = x_0 + \frac{1}{k}\int F dt$ | $F = M \frac{dv}{dt}$ |
| **Mécanique de rotation** | Couple $C(t)$ ($\text{N}\cdot\text{m}$) | Vitesse angulaire $\omega(t)$ ($\text{rad}\cdot\text{s}^{-1}$) | $C = f_r \cdot \omega$ | $\theta(t) = \theta_0 + \frac{1}{k_t}\int C dt$ | $C = J \frac{d\omega}{dt}$ |
| **Hydraulique** | Pression $P(t)$ ($\text{Pa}$) | Débit $Q(t)$ ($\text{m}^3\cdot\text{s}^{-1}$) | $P = R_h \cdot Q$ | $P(t) = P_0 + \frac{1}{C_h}\int Q dt$ | $P = I_h \frac{dQ}{dt}$ |

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour mener à bien la modélisation multiphysique d'un système en vue de son asservissement ou de son dimensionnement :

1.  **Étape 1 : Délimitation du système et inventaire des interactions**
    Identifier les frontières du système et recenser les sources d'énergie entrantes et sortantes (gel des liaisons mécaniques, électriques, etc.).
2.  **Étape 2 : Établissement du schéma bloc causal ou du modèle énergétique**
    *   Écrire les équations constitutives de chaque composant (lois de comportement).
    *   Appliquer les lois de conservation (principes fondamentaux de la dynamique, lois de Kirchhoff, bilans thermiques).
3.  **Étape 3 : Linéarisation (si nécessaire)**
    Au voisinage d'un point de fonctionnement $\left(X_0, Y_0\right)$, effectuer un développement limité à l'ordre 1 :
    $$\Delta Y(t) = \left. \frac{\partial f}{\partial X} \right|_0 \Delta X(t)$$
4.  **Étape 4 : Passage dans le domaine de Laplace**
    Sous conditions initiales nulles, transformer les équations différentielles en équations algébriques.
5.  **Étape 5 : Mise sous forme canonique des fonctions de transfert**
    Exprimer la sortie $S(p)$ en fonction de l'entrée $E(p)$ sous la forme :
    $$H(p) = \frac{S(p)}{E(p)} = \frac{K}{\prod (1 + \tau_i p) \prod \left(1 + \frac{2z}{\omega_0}p + \frac{p^2}{\omega_0^2}\right)}$$

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Attention aux conventions de signe** : Veiller rigoureusement à utiliser la convention récepteur pour les dipôles passifs et la convention générateur pour les sources. Une erreur de signe sur un terme de couplage (ex: force contre-électromotrice dans un moteur à courant continu) invalide l'ensemble de la chaîne de causalité.
*   **Homogénéité des unités** : Ne jamais mélanger les systèmes d'unités. Convertir systématiquement en unités légales du Système International (SI) avant tout calcul (par exemple, convertir les tours par minute en radians par seconde : $\omega = \frac{2\pi N}{60}$).
*   **Oubli des conditions initiales** : Lors du passage aux transformées de Laplace, l'application directe des formules $L \frac{di}{dt} \to L p I(p)$ n'est rigoureusement exacte que si les conditions initiales sont nulles ($i(0) = 0$). Préciser systématiquement cette hypothèse.
*   **Non-linéarité cachée** : L'utilisation abusive de modèles linéaires autour de régimes transitoires de grande amplitude conduit à des aberrations physiques. Vérifiez toujours la validité de l'hypothèse de petits mouvements ou de faibles variations.