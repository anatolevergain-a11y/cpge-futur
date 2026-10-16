---
title: 'Exercice 1 : Hacheurs'
description: 'Problème d entraînement type concours.'
---

# Problème GUIDÉ : Étude d'un hacheur série alimentant une charge inductive

## Énoncé

Les hacheurs sont des convertisseurs statiques continu-continu très utilisés en électrotechnique pour faire varier la vitesse des moteurs à courant continu ou pour adapter des niveaux de tension (systèmes embarqués, énergies renouvelables). 

On s'intéresse dans ce problème à un **hacheur série** (ou abaisseur de tension, ou *buck*) alimentant une charge industrielle modélisée par une association en série d'une résistance $R$, d'une inductance $L$ et d'une f.e.m. $E$ (modèle d'un moteur à courant continu). 

Le schéma de principe est le suivant :
* Une source de tension continue idéale $E_0 = \text{100 V}$.
* Un interrupteur parfait $K$ commandé électroniquement (transistor de type IGBT ou MOSFET), ouvert ou fermé périodiquement à la fréquence $f = \text{20 kHz}$.
* La période de découpage est notée $T = 1/f$. Sur une période, $K$ est fermé durant l'intervalle $[0, \alpha T]$ et ouvert durant $[\alpha T, T]$, où $\alpha \in ]0, 1[$ est le rapport cyclique.
* Une diode de roue libre $D$ idéale, montée en antiparallèle aux bornes de la charge.
* La charge est caractérisée par : $R = \text{2 }\Omega$, $L = \text{10 mH}$ et $E = \text{20 V}$.

On se place en **régime permanent établi**. On note $i(t)$ le courant traversant la charge et $u_N(t)$ la tension aux bornes de l'ensemble de la charge $(R, L, E)$.

---

## Questions

### I. Analyse préliminaire et régimes de fonctionnement
1. Rappeler le rôle de la diode de roue libre $D$ dans ce montage. Que se passerait-il en son absence lors de l'ouverture de l'interrupteur $K$ ?
2. Exprimer la tension $u_N(t)$ aux bornes de la charge en fonction de $E_0$, de l'état de l'interrupteur $K$ et de la conduction de la diode $D$.

### II. Étude en conduction continue
On suppose dans cette partie que le courant $i(t)$ reste strictement positif sur toute la période (conduction continue). On pose $I_{\min} = i(0)$ et $I_{\max} = i(\alpha T)$.

3. Établir l'équation différentielle régissant l'évolution du courant $i(t)$ lorsque l'interrupteur $K$ est fermé ($0 < t < \alpha T$).
4. Résoudre cette équation et exprimer $i(t)$ en fonction de $E_0$, $E$, $R$, $\tau = L/R$, $I_{\min}$ et du temps $t$.
5. Établir de même l'expression du courant $i(t)$ lorsque l'interrupteur $K$ est ouvert ($\alpha T < t < T$).
6. En écrivant la condition de périodicité du courant $i(0) = i(T)$, exprimer explicitement $I_{\min}$ et $I_{\max}$ en fonction de $E_0$, $E$, $R$, $\alpha$, $\tau$ et $T$.
7. Calculer la valeur moyenne $\langle u_N \rangle$ de la tension aux bornes de la charge sur une période. Conclure sur la fonction du convertisseur.

### III. Analyse critique et limites du modèle
8. Déterminer la condition analytique portant sur les paramètres du système pour que l'hypothèse de conduction continue soit valide ($\min(i(t)) > 0$).
9. Calculer la valeur limite $\alpha_{\text{lim}}$ du rapport cyclique en deçà de laquelle le hacheur entre en conduction discontinue pour les valeurs numériques de l'énoncé.
10. **Esprit Concours (Analyse critique) :** Les composants utilisés (interrupteur $K$, diode $D$, source $E_0$) ont été qualifiés d'« idéaux ». Discuter qualitativement de l'impact des non-idéalités réelles sur le rendement du convertisseur et sur la forme des signaux à haute fréquence ($f = \text{20 kHz}$).

---

## Pistes et indications

* **Q1 :** Penser à la surtension aux bornes d'une inductance parcourue par un courant lors d'une interruption brutale ($\text{loi de Lenz} : u = L \frac{di}{dt}$).
* **Q4 & Q5 :** Séparer l'étude en deux phases temporelles. La solution générale d'une équation linéaire du 1er ordre est la somme d'une solution particulière (régime permanent) et d'une solution homogène (transitoire en $\exp(-t/\tau)$).
* **Q6 :** Utiliser la continuité du courant à $t = \alpha T$ et la périodicité. Résoudre le système linéaire en $(I_{\min}, I_{\max})$.
* **Q8 :** Évaluer $I_{\min}$ en fonction de $\alpha$. La condition de non-annulation du courant s'écrit $I_{\min} > 0$.

---

## Corrigé pas à pas

### I. Analyse préliminaire et régimes de fonctionnement
1. **Rôle de la diode de roue libre :** L'inductance $L$ s'oppose à toute variation brusque du courant. Si $K$ s'ouvre brutalement sans chemin de repli pour le courant, $\frac{di}{dt}$ tend vers $-\infty$, générant une surtension destructrice $u = L \frac{di}{dt}$ susceptible de claquer l'interrupteur $K$. La diode $D$, polarisée en direct lors de l'ouverture de $K$, assure la continuité du courant en formant une boucle fermée (« roue libre ») avec la charge.
2. **Expression de $u_N(t)$ :**
   * Lorsque $K$ est fermé et $D$ bloquée : $u_N(t) = E_0$.
   * Lorsque $K$ est ouvert et $D$ passante : $u_N(t) = 0$ (aux chutes de tension près dans la diode).

### II. Étude en conduction continue
3. **Équation différentielle (Phase 1 : $0 < t < \alpha T$) :**
   La loi des mailles donne : 
   $$E_0 = Ri(t) + L\frac{di}{dt} + E \implies L\frac{di}{dt} + Ri = E_0 - E$$

4. **Résolution Phase 1 :**
   La solution générale est de la forme $i(t) = \frac{E_0 - E}{R} + A e^{-t/\tau}$ avec $\tau = L/R$.
   En utilisant la condition initiale $i(0) = I_{\min}$ :
   $$A = I_{\min} - \frac{E_0 - E}{R}$$
   D'où, pour $t \in [0, \alpha T]$ :
   $$i(t) = \frac{E_0 - E}{R} + \left(I_{\min} - \frac{E_0 - E}{R}\right)e^{-t/\tau}$$

5. **Résolution Phase 2 ($\alpha T < t < T$) :**
   L'interrupteur $K$ est ouvert, la source $E_0$ est déconnectée ($u_N = 0$). L'équation devient :
   $$L\frac{di}{dt} + Ri = -E$$
   La solution avec la condition à l'origine de cette phase $i(\alpha T) = I_{\max}$ s'écrit, pour $t' = t - \alpha T \in [0, (1-\alpha)T]$ :
   $$i(t') = -\frac{E}{R} + \left(I_{\max} + \frac{E}{R}\right)e^{-t'/\tau}$$

6. **Calcul de $I_{\min}$ et $I_{\max}$ :**
   Par périodicité, $i(T) = I_{\min}$. Évaluons $i(\alpha T) = I_{\max}$ et $i(T) = I_{\min}$ :
   $$I_{\max} = \frac{E_0 - E}{R} + \left(I_{\min} - \frac{E_0 - E}{R}\right)e^{-\alpha T/\tau}$$
   $$I_{\min} = -\frac{E}{R} + \left(I_{\max} + \frac{E}{R}\right)e^{-(1-\alpha)T/\tau}$$
   La résolution de ce système linéaire permet d'obtenir analytiquement $I_{\min}$ et $I_{\max}$.

7. **Valeur moyenne de la tension :**
   Par définition de la valeur moyenne sur une période $T$ :
   $$\langle u_N \rangle = \frac{1}{T} \left( \int_{0}^{\alpha T} E_0 \, dt + \int_{\alpha T}^{T} 0 \, dt \right) = \alpha E_0$$
Conclusion: * Le hacheur série se comporte comme un transformateur idéal de tension continue réglable puisque $\langle u_N \rangle = \alpha E_0$ avec $\alpha \in ]0, 1[$.

### III. Analyse critique et limites du modèle
8. **Condition de conduction continue :**
   Le régime est continu si et seulement si $I_{\min} > 0$. 
   En injectant les expressions de $I_{\min}$ issues du système précédent, la condition limite $I_{\min} = 0$ donne l'expression du rapport cyclique limite $\alpha_{\text{lim}}$.
9. **Application numérique :**
   Avec $E_0 = \text{100 V}$, $E = \text{20 V}$, $R = \text{2 }\Omega$, $L = \text{10 mH}$ ($\tau = \text{5 ms}$) et $f = \text{20 kHz}$ ($T = \text{50 }\mu\text{s}$). 
   On remarque que $T \ll \tau$ ($50\,\mu\text{s} \ll 5\,\text{ms}$). Le courant varie très peu sur une période (ondulation faible). 
   L'ondulation de courant $\Delta i = I_{\max} - I_{\min} \approx \frac{(E_0 - \alpha E_0) \alpha T}{L}$ (approximation linéaire valable car $T \ll \tau$).
   Pour que $I_{\min} > 0$, il faut que $\langle i \rangle > \frac{\Delta i}{2}$. Le calcul numérique conduit à $\alpha_{\text{lim}} \approx \frac{E}{E_0} = \frac{20}{100} = 0{,}2$. En deçà de $\alpha = 0{,}2$, le hacheur entre en conduction discontinue (le courant s'annule à chaque période).

10. **Analyse critique et limites des modèles idéaux (Esprit Concours) :**
    * **Pertes par commutation :** L'interrupteur et la diode réels ne commutent pas instantanément. Le produit $u(t)i(t)$ n'est pas nul pendant les durées de transition, ce qui génère des pertes énergétiques proportionnelles à la fréquence $f$. À $\text{20 kHz}$, ces pertes deviennent prépondérantes.
    * **Chutes de tension directes :** La diode présente une tension de seuil $U_d \approx \text{0,7 V}$ et l'interrupteur une résistance à l'état passant $R_{\text{on}}$, réduisant le rendement réel par rapport au modèle parfait $\langle u_N \rangle = \alpha E_0$.
    * **Compatibilité Électromagnétique (CEM) :** Les fortes pentes $\frac{di}{dt}$ et $\frac{dv}{dt}$ à $20\text{ kHz}$ génèrent des parasites conduits et rayonnés, nécessitant l'adjonction de filtres en entrée et en sortie, absents du modèle d'étude.