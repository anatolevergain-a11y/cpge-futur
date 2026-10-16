---
title: 'Exercice 2 : Auto-induction et circuits RL'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un circuit $RL$ couplé et auto-induction

*Ce problème aborde les phénomènes d'auto-induction au sein d'un circuit alimenté par une source de tension réelle, mettant en jeu la mise en équation, la résolution analytique et une analyse critique énergétique, indispensables aux écrits de concours MPSI.*

---

## I. Introduction et mise en situation

On considère un circuit électrique constitué d'une bobine parfaite d'inductance $L$, d'une résistance ohmique $R$ et d'un interrupteur $K$ idéal. Ce circuit est alimenté par un générateur idéal de force électromotrice (f.e.m.) $E$. 

L'auto-induction se manifeste par l'apparition d'une force contre-électromotrice d'auto-induction dans la bobine dès que l'intensité du courant $i(t)$ varie au cours du temps.

---

## II. Questions et corrections pas à pas

### Question 1 : Établissement de l'équation différentielle
**Énoncé :** À l'instant $t = 0$, l'interrupteur $K$ est fermé. Le circuit est initialement dé energisé ($i(0^-) = 0$). Établir l'équation différentielle vérifiée par l'intensité du courant $i(t)$ circulant dans le circuit pour $t > 0$.
Correction: **
1. On flèche le circuit selon la convention récepteur pour la résistance et la bobine.
2. D'après la loi d'additivité des tensions (loi des mailles) :
   $$E = u_R(t) + u_L(t)$$
3. Les relations constitutives des composants sont :
   * Pour la résistance : $u_R(t) = R \, i(t)$
   * Pour la bobine d'inductance $L$ : $u_L(t) = L \frac{\mathrm{d}i}{\mathrm{d}t}$
4. En reportant dans l'équation de maille, on obtient l'équation différentielle du premier ordre :
   $$L \frac{\mathrm{d}i}{\mathrm{d}t} + R \, i(t) = E$$

---

### Question 2 : Résolution analytique
**Énoncé :** Résoudre cette équation différentielle en tenant compte de la condition initiale. On introduira la constante de temps $\tau$ du circuit, dont on précisera l'expression et l'unité.
Correction: **
1. L'équation différentielle linéaire à coefficients constants admet une solution sous la forme d'une somme de la solution générale de l'équation sans second membre et d'une solution particulière.
2. **Solution sans second membre ($E = 0$) :**
   $$i_{SSM}(t) = A \exp\left(-\frac{R}{L} t\right)$$
3. **Solution particulière (stationnaire, $t \to +\infty$) :**
   La dérivée $\frac{\mathrm{d}i}{\mathrm{d}t}$ s'annule, donc :
   $$i_{SP} = \frac{E}{R}$$
4. **Solution générale :**
   $$i(t) = A \exp\left(-\frac{R}{L} t\right) + \frac{E}{R}$$
5. **Application de la condition initiale** ($i(0) = 0$) :
   $$0 = A + \frac{E}{R} \implies A = -\frac{E}{R}$$
   D'où l'expression finale :
   $$i(t) = \frac{E}{R} \left(1 - \exp\left(-\frac{t}{\tau}\right)\right)$$
   avec la constante de temps $\tau = \frac{L}{R}$.
6. **Analyse dimensionnelle :**
   * $[R] = \frac{[U]}{[I]}$ et $[L] = \frac{[U] \cdot [T]}{[I]}$ (car $u_L = L \frac{\mathrm{d}i}{\mathrm{d}t}$)
   * $[\tau] = \frac{[L]}{[R]} = \frac{[U][T]/[I]}{[U]/[I]} = [T]$. 
   La grandeur $\tau$ est bien homogène à un temps (en secondes $\text{s}$).

---

### Question 3 : Bilan énergétique du système
**Énoncé :** 
1. Exprimer la puissance instantanée $P_{\text{gen}}(t)$ fournie par le générateur, la puissance $P_{\text{Joule}}(t)$ dissipée par effet Joule dans la résistance, et la puissance $P_{\text{magn}}(t)$ reçue par la bobine.
2. Établir le bilan énergétique sous forme intégrale entre $t = 0$ et $t \to +\infty$.
Correction: **
1. **Puissances instantanées :**
   * Puissance fournie par le générateur : 
     $$P_{\text{gen}}(t) = E \, i(t) = \frac{E^2}{R} \left(1 - \exp\left(-\frac{t}{\tau}\right)\right)$$
   * Puissance dissipée par effet Joule : 
     $$P_{\text{Joule}}(t) = R \, i^2(t) = \frac{E^2}{R} \left(1 - \exp\left(-\frac{t}{\tau}\right)\right)^2$$
   * Puissance stockée sous forme magnétique dans la bobine : 
     $$P_{\text{magn}}(t) = u_L(t) \, i(t) = \left(L \frac{\mathrm{d}i}{\mathrm{d}t}\right) i(t) = \frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{1}{2} L i^2(t)\right)$$

2. **Bilan énergétique global :**
   Multiplions l'équation différentielle par $i(t)$ :
   $$L i(t) \frac{\mathrm{d}i}{\mathrm{d}t} + R \, i^2(t) = E \, i(t) \implies P_{\text{magn}}(t) + P_{\text{Joule}}(t) = P_{\text{gen}}(t)$$
   
   En intégrant cette relation entre $t = 0$ et $t \to +\infty$ :
   $$\int_{0}^{+\infty} E \, i(t) \, \mathrm{dt} = \int_{0}^{+\infty} R \, i^2(t) \, \mathrm{dt} + \left[ \frac{1}{2} L i^2(t) \right]_{0}^{+\infty}$$
   
   Soit $E_{\text{gen}} = E_{\text{Joule}} + E_{\text{magn},\infty}$.
   * L'énergie totale fournie par le générateur se partage exactement entre l'énergie dissipée par effet Joule et l'énergie finale emmagasinée dans le champ magnétique de la bobine :
     $$E_{\text{magn},\infty} = \frac{1}{2} L \left(\frac{E}{R}\right)^2$$

---

## III. Analyse critique et physique

Une analyse rigoureuse des expressions obtenues permet de dégager deux faits remarquables, souvent évalués aux concours :

1. **Le paradoxe énergétique (Le "mystère" du facteur $\frac{1}{2}$) :**
   L'énergie totale fournie par le générateur de f.e.m. $E$ pour atteindre le régime permanent vaut :
   $$E_{\text{gen}} = \int_{0}^{+\infty} E \, i(t) \, \mathrm{dt} = \frac{E^2}{R} \int_{0}^{+\infty} \left(1 - e^{-t/\tau}\right) \mathrm{dt} = \frac{E^2}{R} [\tau] = \frac{L E^2}{R^2}$$
   Or, l'énergie finale stockée dans la bobine est $E_{\text{magn},\infty} = \frac{1}{2} L \left(\frac{E}{R}\right)^2 = \frac{1}{2} E_{\text{gen}}$.
   * **Conclusion physique :** Exactement la moitié de l'énergie fournie par le générateur est dissipée par effet Joule dans la résistance $R$, et ce, **indépendamment des valeurs de $L$ et de $R$**. C'est un résultat inattendu de la théorie des circuits linéaires en régime transitoire : l'autre moitié est stockée sous forme magnétique.

2. **Limites du modèle de la bobine parfaite :**
   Dans notre modèle, la bobine est purement inductive ($L$) et traversée par une résistance $R$ externe (ou interne au générateur). En pratique, le fil conducteur constituant les spires de la bobine possède sa propre résistance propre $r$. L'équation différentielle devient alors :
   $$(R + r)i(t) + L \frac{\mathrm{d}i}{\mathrm{d}t} = E$$
   Le temps caractéristique devient $\tau' = \frac{L}{R+r}$, ce qui accélère l'établissement du régime permanent, et le courant maximal est légèrement abaissé à $\frac{E}{R+r}$.