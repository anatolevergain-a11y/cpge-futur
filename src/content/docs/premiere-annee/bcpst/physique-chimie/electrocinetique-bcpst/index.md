---
title: 'Cours : Circuits électriques en régime continu/transitoire'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE BCPST.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'étude de l'électrocinétique en première année de BCPST repose sur l'**approximation des régimes quasi-permanents (ARQP)**. Cette approximation est valide tant que les dimensions caractéristiques $d$ du circuit sont très inférieures à la longueur d'onde $\lambda$ associée aux signaux temporels étudiés ($\lambda = c/\nu$), soit $d \ll \frac{c}{\nu}$. Sous cette condition, les retards de propagation sont négligeables et les lois de l'électromagnétisme se simplifient en l'approximation quasi-statique.

### Modèle des états de l'art (composants idéaux)
*   **Résistance $R$** ($\text{en }\Omega$) : Composant dissipatif régi par la loi d'Ohm locale intégrée : $u(t) = R \cdot i(t)$. Convention récepteur.
*   **Condensateur $C$** ($\text{en }\text{F}$) : Composant stockant l'énergie électrostatique, défini par sa charge $q(t) = C \cdot u_c(t)$ et l'intensité $i(t) = \frac{\text{d}q}{\text{d}t} = C \frac{\text{d}u_c}{\text{d}t}$.
*   **Bobine idéale $L$** ($\text{en }\text{H}$) : Composant stockant l'énergie magnétique, régi par la relation flux-courant $\Phi(t) = L \cdot i(t)$ et la tension aux bornes $u_l(t) = \frac{\text{d}\Phi}{\text{d}t} = L \frac{\text{d}i}{\text{d}t}$.

### Lois de Kirchhoff
1.  **Loi des nœuds (conservation de la charge)** : $\sum_{\text{nœuds}} i_k(t) = 0$ (en orientant les courants sortants positivement et entrants négativement).
2.  **Loi des mailles (conservativité du champ électrostatique irrotationnel en ARQP)** : $\sum_{\text{maille}} u_k(t) = 0$ le long d'un parcours fermé orienté.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Établissement des équations différentielles (RC et RL)

#### 1. Circuit RC série soumis à un échelon de tension
Considérons un générateur idéal de tension délivrant $E$ pour $t \geq 0$, branché en série avec une résistance $R$ et un condensateur $C$ initialement déchargé ($u_c(0^-) = 0$).

Par la loi des mailles :
$$E = u_R(t) + u_c(t) = R \cdot i(t) + u_c(t)$$

En substituant la relation constitutive du condensateur $i(t) = C \frac{\text{d}u_c}{\text{d}t}$, on obtient l'équation différentielle linéaire du premier ordre :
$$\tau \frac{\text{d}u_c}{\text{d}t} + u_c(t) = E$$

où $\tau = R \cdot C$ est le **temps caractéristique** (ou constante de temps) du circuit (dimensionnellement homogène à un temps, $\text{en }\text{s}$).

**Résolution générale :**
La solution est la somme d'une solution générale de l'équation sans second membre et d'une solution particulière :
$$u_c(t) = A \exp\left(-\frac{t}{\tau}\right) + E$$

À l'aide de la condition initiale $u_c(0^+) = u_c(0^-) = 0$ (continuité de la tension aux bornes d'un condensateur, car l'énergie stockée ne peut être infinie), on trouve $A = -E$.
$$u_c(t) = E \left(1 - \exp\left(-\frac{t}{\tau}\right)\right)$$

#### 2. Circuit RLC série libre
Considérons un circuit formé d'une résistance $R$, d'une bobine $L$ et d'un condensateur $C$ en série, bouclé sur lui-même après charge préalable du condensateur. La loi des mailles s'écrit :
$$L \frac{\text{d}i}{\text{d}t} + R \cdot i(t) + u_c(t) = 0$$

En remplaçant $i(t) = C \frac{\text{d}u_c}{\text{d}t}$, on obtient l'équation différentielle du second ordre :
$$\frac{\text{d}^2 u_c}{\text{d}t^2} + \frac{R}{L} \frac{\text{d}u_c}{\text{d}t} + \frac{1}{LC} u_c(t) = 0$$

Posons la pulsation propre $\omega_0 = \frac{1}{\sqrt{LC}}$ ($\text{en }\text{rad}\cdot\text{s}^{-1}$) et le facteur de qualité $Q = \frac{1}{R}\sqrt{\frac{L}{C}}$ (ou le coefficient d'amortissement $\lambda = \frac{R}{2L} = \frac{\omega_0}{2Q}$). L'équation canonique devient :
$$\frac{\text{d}^2 u_c}{\text{d}t^2} + \frac{\omega_0}{Q} \frac{\text{d}u_c}{\text{d}t} + \omega_0^2 u_c(t) = 0$$

L'équation caractéristique associée est :
$$r^2 + \frac{\omega_0}{Q} r + \omega_0^2 = 0$$

Le discriminant réduit $\Delta'$ est :
$$\Delta' = \left(\frac{\omega_0}{2Q}\right)^2 - \omega_0^2 = \omega_0^2 \left(\frac{1}{4Q^2} - 1\right)$$

*   **Régime apériodique ($Q < 1/2$, $\Delta' > 0$)** : Amortissement fort. Les racines sont réelles et distinctes.
*   **Régime critique ($Q = 1/2$, $\Delta' = 0$)** : Retour à l'équilibre le plus rapide sans dépassement.
*   **Régime pseudo-périodique ($Q > 1/2$, $\Delta' < 0$)** : Oscillations amorties de pseudo-pulsation $\omega = \omega_0 \sqrt{1 - \frac{1}{4Q^2}}$. La solution générale est de la forme :
    $$u_c(t) = \exp\left(-\frac{\omega_0 t}{2Q}\right) \left[ A \cos(\omega t) + B \sin(\omega t) \right]$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Méthode systématique d'analyse d'un circuit linéaire
1.  **Orientation** : Fixer arbitrairement les flèches de tension et de courant pour chaque dipôle en respectant la convention récepteur (recommandée) ou générateur.
2.  **Recensement des variables d'état** : Identifier les condensateurs (variables : $u_c$) et les bobines (variables : $i_l$). Ce sont les éléments dynamiques qui dictent l'ordre du système.
3.  **Application des lois de Kirchhoff** : Écrire un système d'équations algébrico-différentielles (Loi des nœuds, Loi des mailles, relations constitutives).
4.  **Réduction** : Substituer les courants et tensions intermédiaires pour obtenir une unique équation différentielle portant sur la grandeur d'intérêt.
5.  **Exploitation des conditions de continuité** :
    *   La tension aux bornes d'un condensateur $u_c(t)$ est **toujours continue** au cours du temps (sauf si $i(t)$ est une impulsion de Dirac, hors programme BCPST).
    *   L'intensité traversant une bobine $i_l(t)$ est **toujours continue** au cours du temps (sauf si $u(t)$ est une impulsion de Dirac).
6.  **Détermination des constantes** : Utiliser l'état initial ($t = 0^+$) juste après la commutation et l'état final (régime permanent établi, $t \to +\infty$, où les dérivées temporelles s'annulent : condensateur = circuit ouvert, bobine = fil).

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Oubli de la continuité des grandeurs d'état** : Utiliser abusivement la valeur en $t = 0^-$ directement dans l'équation différentielle au lieu de l'utiliser pour déterminer les constantes d'intégration après résolution générale.
2.  **Confusions dimensionnelles** : Négliger de vérifier l'homogénéité de $\tau = RC$ ou $\omega_0 = 1/\sqrt{LC}$ par analyse dimensionnelle (piège fréquent aux questions de type QCM ou pré-calculs).
3.  **Erreurs de signe dans les lois des mailles** : Ne pas respecter rigoureusement l'orientation des flèches. Une tension fléchée dans le sens opposé au parcours de la maille entre de façon négative dans la somme algébrique.
4.  **Mauvaise interprétation du régime permanent** : En régime permanent continu ($t \to +\infty$), un condensateur se comporte comme un **circuit ouvert** ($i = 0$) et une bobine idéale se comporte comme un **fil** ($u = 0$). L'oubli de ces équivalences bloque la détermination des conditions finales.