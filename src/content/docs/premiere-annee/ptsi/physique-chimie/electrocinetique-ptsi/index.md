---
title: 'Cours : Électrocinétique et régimes transitoires'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PTSI.'
---

## 📌 1. Définitions & Cadre d'étude

L'électrocinétique des régimes transitoires étudie l'évolution temporelle des grandeurs électriques (tensions et intensités) au sein d'un circuit linéaire invariant lors d'une modification structurelle (fermeture d'interrupteur, échelon de tension).

### Cadre de l'ARQS (Approximation des Régimes Quasi-Stationnaires)
L'étude est menée dans le cadre de l'ARQS, qui suppose que le temps de propagation des signaux électromagnétiques à travers le circuit est négligeable devant la plus petite période caractéristique ou devant le temps caractéristique d'évolution du système. Mathématiquement, si $L$ est la dimension caractéristique du circuit et $c$ la vitesse de la lumière dans le vide :
$$\tau_{\text{prop}} = \frac{L}{c} \ll \tau_{\text{systeme}}$$
Cette approximation permet de conserver l'instant $t$ identique en tout point du circuit et de valider l'application de la loi des nœuds sous sa forme instantanée :
$$\sum_{\text{k}} i_k(t) = 0$$

### Modélisation des dipôles passifs linéaires
Les relations constitutives des dipôles idéaux en convention récepteur sont les suivantes :
- **Résistance $R$** ($\text{en }\Omega$) : 
  $$u(t) = R \, i(t)$$
- **Condensateur $C$** ($\text{en }\text{F}$) : 
  $$i(t) = C \, \frac{\text{d}u}{\text{d}t}$$
- **Bobine idéale $L$** ($\text{en }\text{H}$) : 
  $$u(t) = L \, \frac{\text{d}i}{\text{d}t}$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Établissement des équations différentielles (Circuits du $1^{\text{er}}$ et $2^{\text{nd}}$ ordre)

#### Circuit RC série en régime libre (Décharge d'un condensateur)
Considérons un condensateur initialement chargé sous une tension $E$, branché à $t = 0$ aux bornes d'une résistance $R$.
1. Loi des mailles : 
   $$u_R(t) + u_C(t) = 0$$
2. Relations caractéristiques : 
   $$R \, i(t) + u_C(t) = 0 \quad \text{avec} \quad i(t) = C \, \frac{\text{d}u_C}{\text{d}t}$$
3. Équation différentielle régissant $u_C(t)$ :
   $$\frac{\text{d}u_C}{\text{d}t} + \frac{1}{\tau} u_C(t) = 0$$
   où $\tau = R \, C$ est le **temps caractéristique** du système ($\text{en }\text{s}$).

#### Solution générale et conditions initiales
La résolution de cette équation différentielle linéaire homogène du premier ordre conduit à :
$$u_C(t) = A \, e^{-\frac{t}{\tau}}$$
La condition initiale portant sur la continuité de la tension aux bornes du condensateur impose $u_C(0^+) = u_C(0^-) = E$. Ainsi, $A = E$, d'où :
$$u_C(t) = E \, e^{-\frac{t}{\tau}} \, \mathcal{U}(t)$$
où $\mathcal{U}(t)$ désigne la fonction de Heaviside.

#### Circuit RLC série soumis à un échelon de tension
Considérons une source idéale de tension constante $E$ alimentant en série un résistor $R$, une bobine d'inductance $L$ et de résistance négligeable, et un condensateur $C$.
1. Loi des mailles : 
   $$u_R(t) + u_L(t) + u_C(t) = E$$
2. Substitution des relations constitutives :
   $$R \, i(t) + L \, \frac{\text{d}i}{\text{d}t} + u_C(t) = E$$
3. En exprimant l'intensité $i(t) = C \frac{\text{d}u_C}{\text{d}t}$, on obtient l'équation différentielle du second ordre en $u_C(t)$ :
   $$\frac{\text{d}^2 u_C}{\text{d}t^2} + \frac{R}{L} \frac{\text{d}u_C}{\text{d}t} + \frac{1}{LC} u_C(t) = \frac{E}{LC}$$

### Mise sous forme canonique et régimes d'amortissement
On introduit traditionnellement la pulsation propre non amortie $\omega_0$ ($\text{en }\text{rad}\cdot\text{s}^{-1}$) et le facteur de qualité $Q$ (sans dimension) ou le coefficient d'amortissement $\xi$ :
$$\omega_0 = \frac{1}{\sqrt{LC}}, \quad Q = \frac{1}{R} \sqrt{\frac{L}{C}}, \quad \xi = \frac{1}{2Q} = \frac{R}{2}\sqrt{\frac{C}{L}}$$

L'équation canonique devient :
$$\frac{\text{d}^2 u_C}{\text{d}t^2} + \frac{\omega_0}{Q} \frac{\text{d}u_C}{\text{d}t} + \omega_0^2 \, u_C(t) = \omega_0^2 \, E$$

Le polynôme caractéristique associé est :
$$r^2 + \frac{\omega_0}{Q} r + \omega_0^2 = 0 \quad \text{avec} \quad \Delta = \omega_0^2 \left( \frac{1}{Q^2} - 4 \right)$$

Trois régimes distincts émergent selon la valeur du facteur de qualité $Q$ :
1. **Régime apériodique ($Q < \frac{1}{2}$ ou $\Delta > 0$)** : Le système est fortement amorti. Les racines sont réelles et distinctes. Le retour à l'équilibre est plus lent qu'en régime critique.
2. **Régime critique ($Q = \frac{1}{2}$ ou $\Delta = 0$)** : Racine double $r = -\omega_0$. Le retour à l'équilibre est le plus rapide possible sans dépassement de la valeur finale.
3. **Régime pseudo-périodique ($Q > \frac{1}{2}$ ou $\Delta < 0$)** : Le système oscille à une pulsation pseudo-propre $\omega = \omega_0 \sqrt{1 - \frac{1}{4Q^2}}$. La solution générale s'écrit sous la forme :
   $$u_C(t) = E + e^{-\frac{\omega_0}{2Q} t} \left( A \cos(\omega t) + B \sin(\omega t) \right)$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Méthode systématique de résolution d'un régime transitoire
1. **Bilan des conditions initiales ($t = 0^-$ et $t = 0^+$)** :
   - Identifier les variables d'état : la tension aux bornes du condensateur $u_C(t)$ et l'intensité traversant la bobine $i_L(t)$.
   - Appliquer le principe de continuité : 
     $$u_C(0^+) = u_C(0^-) \quad \text{et} \quad i_L(0^+) = i_L(0^-)$$
2. **Établissement de l'équation différentielle** :
   - Utiliser les lois de Kirchhoff (mailles, nœuds) et éliminer les grandeurs intermédiaires pour obtenir une équation portant uniquement sur la variable d'intérêt ou la variable d'état.
3. **Recherche de la solution** :
   - Forme générale : $\text{Solution} = \text{Solution homogène} + \text{Solution particulière}$.
   - Déterminer les constantes d'intégration à l'aide des conditions initiales sur la variable et, si nécessaire, sur sa dérivée première (obtenue via les lois de la physique à $t=0^+$).
4. **Analyse physique** :
   - Vérifier l'homogénéité des expressions littérales.
   - Analyser le comportement asymptotique ($t \to +\infty$).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Discontinuité brutale des variables non d'état** :
   Attention, la tension aux bornes d'une résistance ($u_R = R i$) ou l'intensité traversant un condensateur ($i_C = C \frac{\text{d}u_C}{\text{d}t}$) **ne sont pas continues** lors d'une commutation. Seules les variables d'état ($u_C$ et $i_L$) le sont, sous réserve de la non-infinité des sources.
2. **Erreur de convention** :
   Ne jamais mélanger la convention générateur et la convention récepteur lors de l'écriture des équations constitutives, sous peine d'inverser le signe des dérivées.
3. **Négliger la résistance interne des sources réelles** :
   Dans les problèmes de concours, une source de tension réelle possède une résistance interne $r$ en série. L'oublier fausse l'ordre du circuit ou la valeur du facteur d'amortissement $Q$.
4. **Conditions initiales incorrectes** :
   Calculer $i_L(0^+)$ en oubliant que la bobine se comporte comme un interrupteur ouvert (en régime permanent continu établi pour $t < 0$) ou comme une source de courant instantanée à $t = 0^+$.