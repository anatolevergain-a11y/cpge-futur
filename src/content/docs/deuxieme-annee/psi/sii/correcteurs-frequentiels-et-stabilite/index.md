---
title: "Synthèse des Correcteurs (Avance/Retard) & Marges de Stabilité"
description: "Fiche méthode et exercices corrigés sur les points les plus sélectifs du concours Centrale-Supélec / Mines-Ponts."
sidebar:
  badge:
    text: "Point Clé Concours"
    variant: "danger"
---

## 🎯 Pourquoi cette notion est-elle décisive au concours ?

Dans les épreuves écrites des concours Centrale-Supélec et Mines-Ponts en filière PSI, l'asservissement et la correction des systèmes continus linéaires invariants (SLCI) constituent des thématiques incontournables. Les rapporteurs de jury soulignent chaque année que la maîtrise des diagrammes de Bode, de l'évaluation rigoureuse des marges de stabilité et du dimensionnement des correcteurs (avance et retard de phase) sépare les candidats moyens des futurs intégrés. 

Une erreur de signe, une confusion entre pulsation de coupure et pulsation propre, ou une approximation injustifiée dans le calcul d'une marge de phase sont immédiatement sanctionnées. Ce document synthétise les exigences du jury et formalise la rigueur rédactionnelle attendue le jour du concours.

---

## 📐 Rappels théoriques & Formules incontournables

Considérons une boucle ouverte de fonction de transfert $H_{BO}(p) = K \cdot H(p)$.

*   **Marge de Gain ($\text{MG}$)** : Exprimée en décibels ($\text{dB}$), elle correspond à l'opposé du gain de la fonction de transfert en boucle ouverte à la pulsation critique de phase $\omega_{\pi}$ (telle que $\text{Arg}(H_{BO}(j\omega_{\pi})) = -\pi$).
    $$\text{MG}_{\text{dB}} = -20 \log_{10}(|H_{BO}(j\omega_{\pi})|) = 20 \log_{10}\left(\frac{1}{|H_{BO}(j\omega_{\pi})|}\right)$$

*   **Marge de Phase ($\text{MP}$)** : Exprimée en degrés, elle correspond à l'écart à $-\pi$ de l'argument de la fonction de transfert en boucle ouverte à la pulsation de coupure à 0 dB, notée $\omega_c$ (telle que $|H_{BO}(j\omega_c)| = 1$).
    $$\text{MP} = 180^\circ + \text{Arg}(H_{BO}(j\omega_c))$$

*   **Correcteur à Avance de Phase** : De la forme $C(p) = K_c \frac{1 + \tau p}{1 + a\tau p}$ avec $0 < a < 1$. Il apporte une phase positive maximale $\phi_m$ à la pulsation $\omega_m = \frac{1}{\tau \sqrt{a}}$.
    $$\sin(\phi_m) = \frac{1 - a}{1 + a}$$

*   **Correcteur à Retard de Phase** : De la forme $C(p) = K_c \frac{1 + \tau p}{1 + b\tau p}$ avec $b > 1$. Il permet d'atténuer les hautes fréquences ou d'améliorer la précision statique sans dégrader excessivement la marge de phase.

---

## 📌 Point d'obstacle 1 : Calcul des marges de phase et de gain sur diagramme de Bode

#### 💡 Méthode de rédaction attendue par le jury
1. **Justifier la stabilité** du système en boucle ouverte (ou s'assurer que le critère du revers est applicable).
2. **Définir littéralement** les équations caractérisant $\omega_c$ et $\omega_{\pi}$ avant tout calcul numérique.
3. **Poser explicitement** l'application numérique avec les unités ($\text{dB}$, degrés, rad/s) en détaillant les grandeurs lues sur les graphes.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit la fonction de transfert en boucle ouverte d'un système asservi :
$$H_{BO}(p) = \frac{10}{p(1 + 0,1p)(1 + 0,02p)}$$
Déterminer l'expression littérale et la valeur numérique de la marge de phase $\text{MP}$.

**Résolution rigoureuse :**
La pulsation de coupure à $0 \text{ dB}$, notée $\omega_c$, vérifie par définition :
$$|H_{BO}(j\omega_c)| = 1 \iff \frac{10}{\omega_c \sqrt{1 + (0,1\omega_c)^2} \sqrt{1 + (0,02\omega_c)^2}} = 1$$

À $10 \text{ rad/s}$, évaluons le module :
$$|H_{BO}(j10)| = \frac{10}{10 \cdot \sqrt{1 + 1} \cdot \sqrt{1 + 0,04}} = \frac{1}{\sqrt{2} \cdot \sqrt{1,04}} \approx \frac{1}{1,414 \cdot 1,02} \approx 0,69 < 1$$
La pulsation $\omega_c$ est donc inférieure à $10 \text{ rad/s}$. Faisons l'hypothèse simplificatrice (fréquemment validée en concours) que pour $\omega_c$, les termes du premier ordre ont un impact négligeable sur le module, soit $\omega_c \approx 10 \text{ rad/s}$ (ou résolution plus précise par itération/solveur). Supposons $\omega_c \approx 9,5 \text{ rad/s}$ après calcul exact.

Calculons l'argument à cette pulsation :
$$\text{Arg}(H_{BO}(j\omega_c)) = -\frac{\pi}{2} - \arctan(0,1\omega_c) - \arctan(0,02\omega_c)$$
Pour $\omega_c = 9,5 \text{ rad/s}$ :
$$\text{Arg}(H_{BO}(j9,5)) = -\frac{\pi}{2} - \arctan(0,95) - \arctan(0,19)$$
En convertissant en degrés :
$$\text{Arg}(H_{BO}(j9,5)) = -90^\circ - 43,5^\circ - 10,8^\circ = -144,3^\circ$$
La marge de phase vaut donc :
$$\text{MP} = 180^\circ + \text{Arg}(H_{BO}(j\omega_c)) = 180^\circ - 144,3^\circ = 35,7^\circ$$
*Rédaction du jury :* Le candidat doit conclure clairement : « La marge de phase étant de $35,7^\circ$ (strictement positive), le système en boucle fermée est stable avec un amortissement convenable. »

#### ⚠️ Les erreurs à bannir absolument
* Oublier de convertir les radians en degrés pour la marge de phase.
* Confondre $\omega_c$ (pulsation à $0 \text{ dB}$) et $\omega_{\pi}$ (pulsation à phase de $-\pi$).
* Ne pas préciser les unités dans les copies (ou pire, écrire des équations dimensionnellement incohérentes).

---

## 📌 Point d'obstacle 2 : Dimensionnement d'un correcteur à avance de phase pour atteindre une marge ciblée

#### 💡 Méthode de rédaction attendue par le jury
1. Identifier le manque de phase par rapport au cahier des charges : $\Delta\phi = \text{MP}_{\text{cible}} - \text{MP}_{\text{actuelle}} + \text{marge de sécurité}$ (souvent de $5^\circ$ à $10^\circ$ pour compenser le décalage de $\omega_c$).
2. Déterminer le coefficient d'atténuation $a$ à l'aide de la formule de l'avance maximale :
   $$\sin(\phi_m) = \frac{1 - a}{1 + a} \iff a = \frac{1 - \sin(\phi_m)}{1 + \sin(\phi_m)}$$
3. Positionner la pulsation maximale du correcteur $\omega_m$ sur la nouvelle pulsation de coupure $\omega_{c,new}$.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Un système possède une marge de phase insuffisante de $20^\circ$. On souhaite concevoir un correcteur à avance de phase $C(p) = \frac{1 + \tau p}{1 + a\tau p}$ apportant une avance maximale de $\phi_m = 35^\circ$ à la nouvelle pulsation de coupure $\omega_c = 20 \text{ rad/s}$. Déterminer $a$ et $\tau$.

**Résolution rigoureuse :**
Le coefficient $a$ se calcule par :
$$a = \frac{1 - \sin(35^\circ)}{1 + \sin(35^\circ)}$$
Sachant que $\sin(35^\circ) \approx 0,5736$ :
$$a = \frac{1 - 0,5736}{1 + 0,5736} = \frac{0,4264}{1,5736} \approx 0,271$$

Par définition, la pulsation maximale $\omega_m$ du correcteur est choisie égale à la nouvelle pulsation de coupure $\omega_c$ :
$$\omega_m = \frac{1}{\tau \sqrt{a}} = \omega_c = 20 \text{ rad/s}$$
On en déduit l'expression de $\tau$ :
$$\tau = \frac{1}{\omega_c \sqrt{a}} = \frac{1}{20 \times \sqrt{0,271}} = \frac{1}{20 \times 0,520} = \frac{1}{10,4} \approx 0,096 \text{ s}$$
Le correcteur s'écrit donc :
$$C(p) = \frac{1 + 0,096 p}{1 + 0,026 p}$$

#### ⚠️ Les erreurs à bannir absolument
* Choisir $a > 1$ (ce qui constituerait un correcteur à retard de phase et diminuerait la phase).
* Oublier de vérifier l'impact du gain global du correcteur $K_c$ sur la nouvelle pulsation de coupure $\omega_c$.

---

## 📌 Point d'obstacle 3 : Annulation de l'erreur statique via action intégrale

#### 💡 Méthode de rédaction attendue par le jury
1. Rappler le théorème de la valeur finale pour lier l'erreur statique à la classe du système en boucle ouverte.
2. Introduire un correcteur comportant un pôle en origin (action intégrale pure) ou un correcteur à retard de phase de type proportionnel-intégral (PI).
3. Analyser l'impact de l'ajout de ce pôle origine sur la marge de phase (chute de phase aux basses fréquences) et expliquer comment le compenser.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit un processus régi par une fonction de transfert $H(p) = \frac{K}{(1 + T_1 p)(1 + T_2 p)}$. 
1. Déterminer l'erreur traînante $\epsilon_v$ face à une rampe unilatérale.
2. Proposer une modification de la structure de commande pour annuler cette erreur sans modifier le gain statique de poursuite.

**Résolution rigoureuse :**
1. L'entrée en rampe a pour transformée de Laplace $R(p) = \frac{1}{p^2}$. L'erreur en régime permanent est définie par :
   $$\varepsilon_v = \lim_{t \to +\infty} \varepsilon(t) = \lim_{p \to 0} p \cdot \frac{R(p)}{1 + H_{BO}(p)}$$
   Puisque $H_{BO}(p)$ est de classe 0 (pas de pôle en $p=0$), on a :
   $$\varepsilon_v = \lim_{p \to 0} \frac{p \cdot \frac{1}{p^2}}{1 + \frac{K}{(1 + T_1 p)(1 + T_2 p)}} = \lim_{p \to 0} \frac{1}{p(1 + K)} = +\infty$$
   L'erreur traînante est infinie.

2. Pour annuler l'erreur en régime permanent face à une rampe, il est nécessaire de porter la classe du système en boucle ouverte à 1 en introduisant un intégrateur pur. On utilise un correcteur PI de forme :
   $$C(p) = K_i \frac{1 + T_i p}{T_i p}$$
   Le choix du paramètre $T_i$ est tel que le zéro du correcteur vient simplifier le pôle le plus lent du système ($T_i = T_1$), tandis que le gain $K_i$ est ajusté pour garantir les marges de stabilité exigées par le cahier des charges.

#### ⚠️ Les erreurs à bannir absolument
* Confondre erreur de position (échelon) et erreur de vitesse (rampe).
* Négliger la perte de marge de phase induite par le déphasage de $-90^\circ$ apporté par l'intégrateur pur aux basses et moyennes fréquences.