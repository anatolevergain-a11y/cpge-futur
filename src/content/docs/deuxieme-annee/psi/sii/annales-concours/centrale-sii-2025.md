---
title: "Concours Centrale-Supélec 2025 - SII (PSI)"
description: "Sujet d'annale officiel du concours Centrale-Supélec intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

### Étude Préliminaire et Présentation du Système

On s'intéresse dans ce problème à l'asservissement d'un axe de haute précision utilisé dans les systèmes optiques aérospatiaux. Le cahier des charges impose une rapidité accrue ainsi qu'une stabilité robuste face aux perturbations extérieures. 

Le système est modélisé par sa chaîne fonctionnelle comprenant un actionneur, un réducteur, une charge guidée en rotation et une chaîne d'acquisition.

---

### Partie A : Modélisation Cinématique et Torseurs

Le mécanisme de transmission de mouvement comporte un solide $\text{S}_1$ en liaison pivot d'axe $(\text{O}, \vec{z}_0)$ par rapport au bâti $\text{S}_0$, et un solide $\text{S}_2$ en liaison glissoire d'axe $(\text{O}, \vec{x}_1)$ par rapport à $\text{S}_1$. 

1. **[Q 1]** Exprimer le torseur cinématique de la liaison pivot entre $\text{S}_0$ et $\text{S}_1$ au point $\text{O}$, dans le repère galiléen $\mathcal{R}_0 = (\text{O}, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.
2. **[Q 2]** Déterminer, en utilisant la composition des vitesses, le champ des vitesses du solide $\text{S}_2$ par rapport au bâti $\text{S}_0$.

---

### Partie B : Analyse Harmonique et Stabilité

La fonction de transfert en boucle ouverte non corrigée du système est notée $\text{FTBO}(p)$. Elle est donnée par :
$$\text{FTBO}(p) = \frac{K}{p(1 + \frac{p}{\omega_1})(1 + \frac{p}{\omega_2})}$$
avec $K = 10 \text{ s}^{-1}$, $\omega_1 = 10 \text{ rad/s}$ et $\omega_2 = 100 \text{ rad/s}$.

3. **[Q 3]** Tracer qualitativement ou analyser le diagramme de Bode de $\text{FTBO}(p)$ en précisant le comportement asymptotique aux basses et hautes fréquences.
4. **[Q 4]** Déterminer la pulsation de coupure à 0 dB, notée $\text{w}_{\text{c0dB}}$, sachant que l'application numérique conduit à $\omega_{\text{c0dB}} = 3.16 \text{ rad/s}$. Calculer la marge de phase correspondante $\text{M}\varphi$. Conclure quant au respect du critère de stabilité usuel ($\text{M}\varphi \ge 45^{\circ}$).

---

### Partie C : Synthèse d'un Correcteur à Avance de Phase

Afin d'améliorer la marge de phase tout en conservant la rapidité, on insère dans la chaîne de commande un correcteur à avance de phase de fonction de transfert $\text{C}(p)$ :
$$\text{C}(p) = K_c \frac{1 + \frac{p}{\omega_z}}{1 + \frac{p}{\omega_p}}$$
avec $\omega_z < \omega_p$. Ce correcteur apporte un maximum d'avance de phase $\varphi_m$ à la pulsation $\omega_m = \sqrt{\omega_z \omega_p}$.

5. **[Q 5]** Exprimer le rapport $\alpha = \frac{\omega_z}{\omega_p}$ en fonction de l'avance de phase maximale $\varphi_m$ souhaitée. On rappelle la relation : $\sin(\varphi_m) = \frac{1 - \alpha}{1 + \alpha}$.
6. **[Q 6]** Sachant que l'on désire une avance de phase $\varphi_m = 30^{\circ}$ à la nouvelle pulsation de coupure $\omega_{\text{c0dB\_corr}} = 10 \text{ rad/s}$, calculer la valeur numérique du coefficient $\alpha$ ainsi que les pulsations $\omega_z$ et $\omega_p$.

---

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

### Analyse des difficultés et pièges classiques :
- **Torseurs cinématiques (Partie A) :** Attention à bien projeter les vecteurs dans la bonne base et à respecter l'écriture normalisée du torseur cinématique avec un vecteur rotation et un vecteur vitesse glissante.
- **Marge de phase (Partie B) :** L'oubli de la conversion des radians en degrés lors du calcul de l'argument ou l'erreur de signe sur le calcul de la phase ($\arg(\text{FTBO}(j\omega_{\text{c0dB}})) + 180^{\circ}$) est la source principale d'perte de points.
- **Avance de phase (Partie C) :** Le rapport $\alpha$ doit être strictement inférieur à 1 pour un correcteur à avance de phase (si $\alpha > 1$, c'est un retard de phase).

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Barème total : /20 points

---

### Correction de la Partie A : Modélisation Cinématique

* **[Q 1]** Torseur cinématique de la liaison pivot (2.0 points)
  Le solide $\text{S}_1$ est en liaison pivot d'axe $(\text{O}, \vec{z}_0)$ par rapport à $\text{S}_0$. 
  Le torseur cinématique en $\text{O}$ s'écrit sous la forme :
  $$\{\mathcal{V}_{\text{S}_1/\text{S}_0}\} = \left\{ \begin{array}{c} \vec{\Omega}_{\text{S}_1/\text{S}_0} = \dot{\theta}(t) \vec{z}_0 \\ \vec{V}(\text{O} \in \text{S}_1/\text{S}_0) = \vec{0} \end{array} \right\}_{\text{O}, \mathcal{R}_0}$$
  * *Barème :* 1.0 pt pour la rotation suivant $\vec{z}_0$, 1.0 pt pour la résultante nulle en $\text{O}$.

* **[Q 2]** Champ des vitesses de $\text{S}_2/\text{S}_0$ (2.5 points)
  Par composition des vitesses au point $\text{O}$ :
  $$\vec{V}(\text{O} \in \text{S}_2/\text{S}_0) = \vec{V}(\text{O} \in \text{S}_2/\text{S}_1) + \vec{V}(\text{O} \in \text{S}_1/\text{S}_0)$$
  La liaison glissoire d'axe $(\text{O}, \vec{x}_1)$ implique $\vec{V}(\text{O} \in \text{S}_2/\text{S}_1) = \dot{x}(t)\vec{x}_1$. Puisque $\vec{V}(\text{O} \in \text{S}_1/\text{S}_0) = \vec{0}$, on obtient :
  $$\vec{V}(\text{O} \in \text{S}_2/\text{S}_0) = \dot{x}(t) \vec{x}_1$$
  * *Barème :* 1.5 pt pour l'application correcte de la composition, 1.0 pt pour le résultat final justifié.

---

### Correction de la Partie B : Analyse Harmonique et Stabilité

* **[Q 3]** Analyse asymptotique du diagramme de Bode (3.0 points)
  Pour $\omega \to 0$, $\text{FTBO}(j\omega) \sim \frac{K}{j\omega}$. Le gain en dB équivaut à $20\log(K) - 20\log(\omega)$, soit une pente de $-20 \text{ dB/décade}$ et un déphasage de $-90^{\circ}$.
  Pour $\omega \to +\infty$, le terme dominant au dénominateur est $\frac{(j\omega)^3}{\omega_1 \omega_2}$, menant à une pente de $-60 \text{ dB/décade}$ et un déphasage de $-270^{\circ}$.
  * *Barème :* 1.5 pt pour les pentes basses/hautes fréquences, 1.5 pt pour les phases associées.

* **[Q 4]** Calcul de la marge de phase $\text{M}\varphi$ (3.5 points)
  La pulsation de coupure à 0 dB est $\omega_{\text{c0dB}} = 3.16 \text{ rad/s}$.
  La phase de la fonction de transfert à cette pulsation est :
  $$\arg(\text{FTBO}(j\omega_{\text{c0dB}})) = -90^{\circ} - \arctan\left(\frac{\omega_{\text{c0dB}}}{\omega_1}\right) - \arctan\left(\frac{\omega_{\text{c0dB}}}{\omega_2}\right)$$
  A.N. : $\omega_1 = 10 \text{ rad/s}$ et $\omega_2 = 100 \text{ rad/s}$.
  $$\arg(\text{FTBO}(j\cdot 3.16)) = -90^{\circ} - \arctan(0.316) - \arctan(0.0316) \approx -90^{\circ} - 17.5^{\circ} - 1.8^{\circ} = -109.3^{\circ}$$
  La marge de phase vaut par définition :
  $$\text{M}\varphi = 180^{\circ} + \arg(\text{FTBO}(j\omega_{\text{c0dB}})) = 180^{\circ} - 109.3^{\circ} = 70.7^{\circ}$$
  Puisque $\text{M}\varphi = 70.7^{\circ} \ge 45^{\circ}$, le système est stable et valide le critère.
  * *Barème :* 1.5 pt pour l'expression littérale de la phase, 1.0 pt pour l'application numérique, 1.0 pt pour la conclusion sur la stabilité.

---

### Correction de la Partie C : Synthèse d'un Correcteur à Avance de Phase

* **[Q 5]** Expression du rapport $\alpha$ (3.0 points)
  On sait que l'avance de phase maximale $\varphi_m$ est liée à $\alpha = \frac{\omega_z}{\omega_p}$ par la relation :
  $$\sin(\varphi_m) = \frac{1 - \alpha}{1 + \alpha}$$
  En isolant $\alpha$, on obtient :
  $$\alpha \cdot \sin(\varphi_m) + \sin(\varphi_m) = 1 - \alpha \implies \alpha(1 + \sin(\varphi_m)) = 1 - \sin(\varphi_m)$$
  $$\alpha = \frac{1 - \sin(\varphi_m)}{1 + \sin(\varphi_m)}$$
  * *Barème :* 1.5 pt pour l'utilisation de la relation trigonométrique, 1.5 pt pour l'isolement algébrique correct de $\alpha$.

* **[Q 6]** Calcul numérique de $\alpha$, $\omega_z$ et $\omega_p$ (6.0 points)
  Pour $\varphi_m = 30^{\circ}$, on a $\sin(30^{\circ}) = 0.5$.
  Application numérique pour $\alpha$ :
  $$\alpha = \frac{1 - 0.5}{1 + 0.5} = \frac{0.5}{1.5} = \frac{1}{3} \approx 0.333$$
  La nouvelle pulsation de coupure est fixée à $\omega_{\text{c0dB\_corr}} = 10 \text{ rad/s}$. Cette pulsation doit correspondre à la pulsation maximale du correcteur, soit $\omega_m = \omega_{\text{c0dB\_corr}} = 10 \text{ rad/s}$.
  On a par définition $\omega_m = \sqrt{\omega_z \omega_p}$ et $\alpha = \frac{\omega_z}{\omega_p}$, d'où :
  $$\omega_z = \omega_m \sqrt{\alpha} = 10 \times \sqrt{\frac{1}{3}} = \frac{10}{\sqrt{3}} \approx 5.77 \text{ rad/s}$$
  $$\omega_p = \frac{\omega_m}{\sqrt{\alpha}} = 10 \times \sqrt{3} \approx 17.32 \text{ rad/s}$$
  * *Barème :* 2.0 pts pour le calcul de $\alpha$, 2.0 pts pour le calcul de $\omega_z$, 2.0 pts pour le calcul de $\omega_p$ avec unités.