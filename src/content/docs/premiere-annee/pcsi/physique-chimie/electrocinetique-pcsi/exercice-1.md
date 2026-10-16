---
title: 'Exercice 1 : Régimes transitoires RC/RLC'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les régimes transitoires en électrocinétique constituent une pierre angulaire de la formation des étudiants en classes préparatoires. L'étude de la réponse d'un circuit linéaire à un échelon de tension permet de caractériser l'aptitude d'un système à stocker et dissiper de l'énergie. 

Dans ce problème, on s'intéresse à un circuit RLC série un peu particulier, dit *circuit amorti par une source de courant controlée*, que l'on modélise dans le cadre de l'approximation des états quasi-stationnaires (AEQS). 

Le circuit est constitué de :
- Un générateur idéal de tension délivrant un échelon de tension de valeur $E$ pour $t \geq 0$.
- Une résistance de protection $R$.
- Une bobine réelle, modélisée par une inductance pure $L$ en série avec une résistance interne $r$.
- Un condensateur parfait de capacité $C$ initialement déchargé.

L'objectif est d'analyser l'influence de la résistance interne de la bobine et de la résistance $R$ sur la nature du régime transitoire (apériodique, critique ou pseudo-périodique), puis d'étudier un bilan énergétique précis.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Établissement de l'équation différentielle**
   Représenter schématiquement le circuit. À l'aide des lois de Kirchhoff, établir l'équation différentielle vérifiée par la tension aux bornes du condensateur $u_C(t)$ pour $t > 0$.

2. **Mise sous forme canonique**
   Mettre cette équation sous la forme canonique :
   $$\frac{\text{d}^2 u_C}{\text{d}t^2} + \frac{\omega_0}{Q} \frac{\text{d}u_C}{\text{d}t} + \omega_0^2 u_C = \omega_0^2 E$$
   Exprimer la pulsation propre $\omega_0$ et le facteur de qualité $Q$ en fonction des paramètres du circuit ($R$, $r$, $L$, $C$).

3. **Conditions initiales**
   Quelles sont les valeurs de $u_C(0^+)$ et de $\left.\frac{\text{d}u_C}{\text{d}t}\right|_{0^+}$ ? Justifier soigneusement à partir de la continuité des grandeurs énergétiques.

4. **Étude des différents régimes**
   On pose $R_{tot} = R + r$. 
   - Donner l'expression de la condition critique sur $R_{tot}$ pour observer des oscillations.
   - On se place dans le cas d'un régime pseudo-périodique caractérisé par un facteur de qualité $Q > 1/2$. Exprimer la pseudo-pulsation $\omega_p$ en fonction de $\omega_0$ et $Q$.

5. **Analyse critique du modèle**
   Dans la pratique, lors de la réalisation expérimentale d'un tel circuit avec une bobine réelle et un condensateur, on observe que les oscillations s'amortissent plus vite que ne le prévoit le modèle linéaire idéal établi à la question 2. Citer deux phénomènes physiques non pris en compte dans ce modèle qui expliquent cet écart.

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Exprimez la tension aux bornes de chaque dipôle en fonction de l'intensité du courant $i(t)$ circulant dans le circuit série, en sachant que $i(t) = C \frac{\text{d}u_C}{\text{d}t}$.
- **Q2 :** Identifiez par analogie avec l'équation générale d'un oscillateur harmonique amorti second ordre. Vérifiez l'homogénéité des expressions trouvées.
- **Q3 :** Pensez à relier l'état du condensateur à $t=0^-$ (interrupteur ouvert depuis longtemps) à celui à $t=0^+$, puis utilisez la relation entre le courant et la tension pour la dérivée.
- **Q4 :** Résolvez l'équation caractéristique associée à l'équation différentielle homogène.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Établissement de l'équation différentielle
Pour $t > 0$, l'interrupteur est fermé. Le circuit est série, parcouru par un courant unique $i(t)$.
La loi des mailles s'écrit :
$$E = u_R(t) + u_L(t) + u_C(t)$$

En utilisant les relations caractéristiques des dipôles :
- Résistance $R$ : $u_R(t) = R i(t)$
- Bobine réelle $(L, r)$ : $u_L(t) = L \frac{\text{d}i}{\text{d}t} + r i(t)$
- Condensateur $C$ : $i(t) = C \frac{\text{d}u_C}{\text{d}t}$

En substituant le courant et ses dérivées dans la loi des mailles :
$$E = (R + r) C \frac{\text{d}u_C}{\text{d}t} + L C \frac{\text{d}^2 u_C}{\text{d}t^2} + u_C(t)$$

#### 2. Mise sous forme canonique
Divisons l'expression précédente par le terme $LC$ :
$$\frac{\text{d}^2 u_C}{\text{d}t^2} + \frac{R + r}{L} \frac{\text{d}u_C}{\text{d}t} + \frac{1}{LC} u_C = \frac{1}{LC} E$$

Par identification avec la forme canonique :
$$\omega_0^2 = \frac{1}{LC} \implies \omega_0 = \frac{1}{\sqrt{LC}} \text{ (pulsation propre)}$$
$$\frac{\omega_0}{Q} = \frac{R + r}{L} \implies Q = \frac{L \omega_0}{R + r} = \frac{1}{R + r} \sqrt{\frac{L}{C}} \text{ (facteur de qualité)}$$

*Vérification dimensionnelle :* 
$[\omega_0] = \text{s}^{-1}$, $[\omega_0 t]$ est sans dimension. $[Q]$ est le rapport de deux résistances ou sans dimension, ce qui est cohérent.

#### 3. Conditions initiales
- Le circuit est au repos pour $t < 0$, donc le condensateur est déchargé :
  $$u_C(0^-) = 0 \text{ \quad et \quad } i(0^-) = 0$$
- Par continuité de l'énergie stockée dans le condensateur (ou de la tension elle-même car le diélectrique empêche toute discontinuité brutale de $u_C$) :
  $$u_C(0^+) = u_C(0^-) = 0 \text{ \quad \text{V}}$$
- Par continuité du flux magnétique à travers la bobine (ou de l'intensité du courant dans une inductance) :
  $$i(0^+) = i(0^-) = 0 \text{ \quad \text{A}}$$
- Or, on a la relation $i(t) = C \frac{\text{d}u_C}{\text{d}t}$, donc :
  $$\left.\frac{\text{d}u_C}{\text{d}t}\right|_{0^+} = \frac{i(0^+)}{C} = 0 \text{ \quad \text{s}^{-1}}$$

#### 4. Étude des différents régimes
- La nature du régime dépend du discriminant de l'équation caractéristique associée :
  $$s^2 + \frac{\omega_0}{Q} s + \omega_0^2 = 0$$
  Le discriminant réduit est $\Delta' = \left(\frac{\omega_0}{2Q}\right)^2 - \omega_0^2 = \omega_0^2 \left(\frac{1}{4Q^2} - 1\right)$.
- Le régime est pseudo-périodique si $\Delta' < 0$, c'est-à-dire si $Q > \frac{1}{2}$.
  En posant $R_{tot} = R + r$, la condition de mise en oscillation s'écrit :
  $$R_{tot} < 2 \sqrt{\frac{L}{C}}$$
- Dans le cas pseudo-périodique, la pseudo-pulsation $\omega_p$ vaut :
  $$\omega_p = \sqrt{-\Delta'} = \omega_0 \sqrt{1 - \frac{1}{4Q^2}}$$

#### 5. Analyse critique du modèle
Les écarts observés expérimentalement (amortissement plus rapide) s'expliquent par :
1. **Les pertes radiatives et par courants de Foucault :** Le noyau de la bobine (s'il est en fer) ou le fil de cuivre lui-même est le siège de courants induits (courants de Foucault) qui créent des pertes Joule supplémentaires non modélisées par la simple résistance interne $r$. De plus, la bobine agit comme une antenne et émet des ondes électromagnétiques (pertes par rayonnement).
2. **Les résistances de fuite du condensateur :** Le diélectretique du condensateur n'est pas parfait ; il existe une résistance de fuite en parallèle qui décharge lentement le condensateur, augmentant l'amortissement global du système.