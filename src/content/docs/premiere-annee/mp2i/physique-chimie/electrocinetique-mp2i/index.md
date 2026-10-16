---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

L'électrocinétique étudie les circuits électriques conducteurs parcourus par des courants et soumis à des tensions variables au cours du temps. Le cadre fondamental est celui de l'**approximation des régimes quasi-permanents (ARQP)**, qui suppose que les temps caractéristiques des signaux (période, temps de relaxation) sont très grands devant le temps de propagation des ondes électromagnétiques à l'échelle du circuit :
$$\tau \gg \frac{d}{c}$$
où $d$ est la dimension caractéristique du circuit et $c$ la celerite de la lumiere dans le vide.

### Composants idéaux et relations constitutives

1. **La resistance (ideale)** : Relie la tension $u(t)$ a l'intensite $i(t)$ par la loi d'Ohm :
   $$u(t) = R \, i(t) \quad \text{(avec } R > 0 \text{ en }\Omega\text{)}$$
2. **Le condensateur (ideal)** : Stocke l'energie sous forme electrostatique. La charge $q(t)$ et la tension $u(t)$ sont liees par :
   $$q(t) = C \, u(t) \implies i(t) = \frac{\mathrm{d}q}{\mathrm{d}t} = C \, \frac{\mathrm{d}u}{\mathrm{d}t} \quad \text{(avec } C > 0 \text{ en F}\text{)}$$
3. **La bobine ideale (inductance pure)** : Stocke l'energie sous forme magnetique. Le flux propre et l'intensite verifient :
   $$u(t) = \frac{\mathrm{d}\Phi}{\mathrm{d}t} = L \, \frac{\mathrm{d}i}{\mathrm{d}t} \quad \text{(avec } L > 0 \text{ en H}\text{)}$$

### Regimes d'etude
- **Regime transitoire** : Reponse d'un systeme dynamique suite a une modification brusque des conditions operatoires (fermeture d'interrupteur, echelon de tension).
- **Regime harmonique (ou sinusoidal force)** : Regime permanent etabli lorsque les sources sont sinusoidales de pulsation $\omega$.
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Lois generales
- **Loi des noeuds** : Conservation de la charge electrique en tout noeud du circuit :
  $$\sum_{\text{incidents}} i_k(t) = 0$$
- **Loi des mailles** : Additivite des tensions le long d'une maille orientee :
  $$\sum_{\text{maille}} u_k(t) = 0$$

---

### Demonstration cle 1 : Equation differentielle d'un circuit $RLC$ serie en regime transitoire

Considérons un circuit série comprenant une source de tension idéale $e(t)$, une résistance $R$, une bobine d'inductance $L$ et de résistance négligeable, et un condensateur de capacité $C$.

1. Application de la loi des mailles :
   $$e(t) = u_R(t) + u_L(t) + u_C(t)$$
2. Expression des tensions en fonction de l'intensité $i(t)$ et de la tension aux bornes du condensateur $u_C(t)$ (avec $i(t) = C \frac{\mathrm{d}u_C}{\mathrm{d}t}$) :
   $$u_R(t) = R \, i(t) = R C \frac{\mathrm{d}u_C}{\mathrm{d}t}$$
   $$u_L(t) = L \frac{\mathrm{d}i}{\mathrm{d}t} = L C \frac{\mathrm{d}^2 u_C}{\mathrm{d}t^2}$$
3. En reportant dans la loi des mailles, on obtient l'equation differentielle canonique du second ordre :
   $$\frac{\mathrm{d}^2 u_C}{\mathrm{d}t^2} + \frac{R}{L} \frac{\mathrm{d}u_C}{\\mathrm{d}t} + \frac{1}{LC} u_C = \frac{e(t)}{L C}$$

Par identification avec la forme canonique :
$$\frac{\mathrm{d}^2 u_C}{\mathrm{d}t^2} + \frac{\omega_0}{Q} \frac{\mathrm{d}u_C}{\mathrm{d}t} + \omega_0^2 u_C = \omega_0^2 e(t)$$
on introduit la **pulsation propre** $\omega_0$ et le **facteur de qualite** $Q$ :
$$\omega_0 = \frac{1}{\sqrt{LC}} \quad \text{et} \quad Q = \frac{L \omega_0}{R} = \frac{1}{R} \sqrt{\frac{L}{C}}$$

---

### Demonstration cle 2 : Representation complexe (Phasors) en regime harmonique

En regime harmonique, toute grandeur electrique $x(t)$ est associee a sa representation complexe $\underline{X}$ telle que :
$$x(t) = \text{Re}\left( \underline{X} \, e^{j \omega t} \right)$$
L'operation de derivation par rapport au temps se traduit dans le domaine complexe par une multiplication par $j \omega$ :
$$\frac{\mathrm{d}x}{\mathrm{d}t} \longleftrightarrow j \omega \underline{X}$$

On definit alors **l'impédance complexe** $\underline{Z}$ d'un dipolaire par le quotient des amplitudes complexes de la tension et du courant :
$$\underline{Z} = \frac{\underline{U}}{\underline{I}}$$

- **Resistance** : $\underline{Z}_R = R$
- **Condensateur** : $\underline{Z}_C = \frac{1}{j C \omega} = - \frac{j}{C \omega}$
- **Bobine** : $\underline{Z}_L = j L \omega$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Methode generale d'etude d'un regime transitoire
1. **Identifier l'etat initial** $u_C(0^-)$ et $i(0^-)$ en exploitant la continuite de l'energie stockee (continuite de $u_C$ aux bornes du condensateur et de $i$ dans la bobine, sauf excitation de type Dirac).
2. **Ecrire les equations fondamentales** (lois de Kirchhoff) pour $t > 0$.
3. **Resoudre l'equation differentielle** :
   - Recherche de la solution generale de l'equation sans second membre (equation homogene).
   - Recherche d'une solution particuliere dependant du second membre (regime permanent).
   - Utilisation des conditions initiales pour determiner les constantes d'integration.

### Analyse frequentielle et fonctions de transfert
On definit la fonction de transfert $\underline{H}(j\omega)$ comme le rapport complexe de la sortie sur l'entree :
$$\underline{H}(j\omega) = \frac{\underline{S}}{\underline{E}}$$
- **Gain (en decibels)** : $G_{\text{dB}} = 20 \log_{10} \left( |\underline{H}(j\omega)| \right)$
- **Phase** : $\varphi = \arg(\underline{H}(j\omega)) = \text{arg}(\underline{S}) - \text{arg}(\underline{E})$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de la condition de continuité** : Appliquer brutalement les lois des branches sans verifier si $u_C$ ou $i_L$ est continue. Attention, $u_L$ et $i_C$ *ne sont pas* continues par definition ($u_L = L \frac{\mathrm{d}i}{\mathrm{d}t}$).
2. **Erreurs de signe avec les conventions** : Ne pas respecter la **convention récepteur** (flèches de tension et de courant de sens contraires) lors de l'écriture des impédances complexes ou de la loi d'Ohm généralisée.
3. **Confusion entre régimes** : Utiliser les impédances complexes ($\underline{Z} = j L \omega$) en régime transitoire, ce qui est rigoureusement faux (le formalisme complexe est réservé au régime harmonique stationnaire).
4. **Homogénéité des expressions** : Ne pas verifier l'homogeneite des expressions trouvees (par exemple, s'assurer que $\tau = RC$ ou $\tau = L/R$ s'exprime bien en secondes $\text{s}$).