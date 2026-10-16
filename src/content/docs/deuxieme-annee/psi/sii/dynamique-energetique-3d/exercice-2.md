---
title: 'Exercice 2 : Théorème de l énergie cinétique'
description: 'Problème d entraînement type concours.'
---

# Concours CPGE - Filière PSI
## Sciences Industrielles pour l'Ingénieur (SII)
### Dynamique 3D et Énergétique des solides - Théorème de l'énergie cinétique

---

### **Avertissement de l'examinateur**
*Ce problème est conçu pour être résolu pas à pas. En filière PSI, l'utilisation rigoureuse des torseurs, des matrices d'inertie et du Théorème de l'Énergie Cinetique (TEC) est systématiquement évaluée aux concours (CCE, Centrale-Supélec, Mines-Ponts). Veillez à bien expliciter les bilans énergétiques et à homogénéiser vos expressions littérales avant tout calcul numérique.*

---

## **Énoncé du Problème : Étude d'un mécanisme de levage industriel**

On considère un système mécanique modélisé par deux solides en liaison pivot et glissant :
*   Un bâti $0$ galiléen muni d'un repère orthonormé direct $\mathcal{R}_0 = (O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.
*   Un bras élévateur $1$ de masse $M$, de centre de gravité $G_1$, en liaison pivot d'axe $(O, \vec{z}_0)$ avec le bâti $0$. On pose $\vec{angle}(\vec{x}_0, \vec{x}_1) = \theta(t)\vec{z}_0$.
*   Une charge $2$ de masse $m$, assimilée à un point matériel $C$, en mouvement de translation rectiligne par rapport au bras $1$ le long de l'axe $(G_1, \vec{x}_1)$. On pose $\vec{G_1C} = x(t)\vec{x}_1$.

Le paramétrage est le suivant :
*   $\mathcal{R}_1 = (O, \vec{x}_1, \vec{y}_1, \vec{z}_0)$ lié au solide $1$, avec $\vec{x}_1 = \cos\theta \vec{x}_0 + \sin\theta \vec{y}_0$.
*   Le moment d'inertie du solide $1$ par rapport à son axe de rotation $(O, est noté $J_1$ (avec $J_1 = \frac{1}{3}ML^2$, où $L$ est la longueur du bras).
*   L'action de la pesanteur s'exerce selon $\vec{g} = -g \vec{y}_0$.

---

## **Corrigé et Résolution Guidée**

### **Partie 1 : Cinématique du système**

#### **Question 1.1**
Exprimer le vecteur vitesse du point $C$ par rapport au repère $\mathcal{R}_0$, noté $\vec{V}(C \in \mathcal{R}_0)$, en fonction de $\theta$, $\dot{\theta}$, $x$ et $\dot{x}$.

> **Corrigé :**
> On applique la composition des vitesses :
> $$\vec{V}(C \in \mathcal{R}_0) = \vec{V}(C \in \mathcal{R}_1) + \vec{V}_{\text{ent}}(C \in \mathcal{R}_0/ \mathcal{R}_1)$$
> 
> Par définition, $\vec{G_1C} = x(t)\vec{x}_1$, donc :
> $$\vec{V}(C \in \mathcal{R}_1) = \dot{x}\vec{x}_1$$
> 
> Pour la vitesse d'entraînement, $C$ est lié à $\mathcal{R}_1$ en rotation autour de $(O, \vec{z}_0)$ à la vitesse angulaire $\dot{\theta}\vec{z}_0$ :
> $$\vec{V}_{\text{ent}}(C \in \mathcal{R}_0/ \mathcal{R}_1) = \vec{V}(G_1 \in \mathcal{R}_0/\mathcal{R}_1) + \vec{\Omega}(\mathcal{R}_1/\mathcal{R}_0) \land \vec{OC}$$
> 
> Sachant que $\vec{OG}_1 = d\vec{x}_1$ (avec $d$ distance fixe, ou si $G_1$ est fixe en $O$, posons $G_1=O$ pour simplifier l'énoncé en considérant le bras de longueur $L$ avec $OG_1 = L_1$). Supposons pour la suite $O$ confondu avec l'origine du bras $1$ (donc $\vec{OC} = x\vec{x}_1$).
> $$\vec{V}(C \in \mathcal{R}_0) = \dot{x}\vec{x}_1 + (\dot{\theta}\vec{z}_0) \land (x\vec{x}_1) = \dot{x}\vec{x}_1 + x\dot{\theta}\vec{y}_1$$

---

### **Partie 2 : Énergie cinétique du système**

#### **Question 2.1**
Exprimer l'énergie cinétique galiléenne du solide $1$, notée $E_{c}(1/\mathcal{R}_0)$.

> **Corrigé :**
> Le solide $1$ est en rotation fixe autour de l'axe $(O, \vec{z}_0)$ par rapport au bâti galiléen $\mathcal{R}_0$.
> $$E_{c}(1/\mathcal{R}_0) = \frac{1}{2} J_1 \dot{\theta}^2$$

#### **Question 2.2**
Exprimer l'énergie cinétique de la charge $2$, notée $E_{c}(2/\mathcal{R}_0)$.

> **Corrigé :**
> La charge $2$ est modélisée par un point matériel $C$ de masse $m$ :
> $$E_{c}(2/\mathcal{R}_0) = \frac{1}{2} m \|\vec{V}(C \in \mathcal{R}_0)\|^2$$
> D'après la question 1.1 :
> $$\|\vec{V}(C \in \mathcal{R}_0)\|^2 = \dot{x}^2 + (x\dot{\theta})^2$$
> Donc :
> $$E_{c}(2/\mathcal{R}_0) = \frac{1}{2} m \left( \dot{x}^2 + x^2\dot{\theta}^2 \right)$$

#### **Question 2.3**
En déduire l'énergie cinétique totale du système $\Sigma = \{1 + 2\}$.

> **Corrigé :**
> $$E_{c}(\Sigma/\mathcal{R}_0) = E_{c}(1/\mathcal{R}_0) + E_{c}(2/\mathcal{R}_0) = \frac{1}{2} J_1 \dot{\theta}^2 + \frac{1}{2} m \left( \dot{x}^2 + x^2\dot{\theta}^2 \right)$$

---

### **Partie 3 : Application du Théorème de l'Énergie Cinétique (TEC)**

On suppose que le mouvement est commandé par un moteur agissant sur le pivot d'axe $(O, \vec{z}_0)$ fournissant un couple moteur de moment $C_m$ et qu'un actionneur interne déplace la charge avec une force selon $\vec{x}_1$ de résultante $F_m \vec{x}_1$.

#### **Question 3.1**
Calculer la puissance des forces extérieures et intérieures appliquées au système $\Sigma$.

> **Corrigé :**
> 1. **Poids :** $\mathcal{P}_{\text{poids}} = - \frac{d}{dt} E_p$ 
>    Avec $E_p = M g y_{G_1} + m g y_C = \left(M \frac{L}{2} + m x\right) g \sin\theta$.
>    Donc $\mathcal{P}_{\text{poids}} = - \left( M \frac{L}{2} + m x \right) g \dot{\theta} \cos\theta - m g \dot{x} \sin\theta$.
> 
> 2. **Efforts moteurs :**
>    $$\mathcal{P}_{\text{moteur}} = C_m \dot{\theta} + F_m \dot{x}$$

#### **Question 3.2**
Appliquer le TEC sous sa forme dérivée par rapport au temps pour obtenir l'équation du mouvement selon la coordonnée généralisée $\theta$. *(On supposera ici $x$ bloqué à une position $x_0$ constante pour cette question).*

> **Corrigé :**
> Le TEC s'écrit : $\frac{d}{dt}E_{c}(\Sigma/\mathcal{R}_0) = \mathcal{P}_{\text{ext} \to \Sigma} + \mathcal{P}_{\text{int}}$
> 
> Pour $x = x_0$ ($\dot{x} = 0$) :
> $$E_{c} = \frac{1}{2} (J_1 + m x_0^2) \dot{\theta}^2$$
> En dérivant par rapport au temps :
> $$\frac{d}{dt}E_{c} = (J_1 + m x_0^2) \ddot{\theta} \dot{\theta}$$
> 
> En égalant avec la puissance des efforts (couple moteur + poids) :
> $$(J_1 + m x_0^2) \ddot{\theta} \dot{\theta} = \left[ C_m - \left(M \frac{L}{2} + m x_0\right) g \cos\theta \right] \dot{\theta}$$
> 
> En simplifiant par $\dot{\theta} \neq 0$ :
> $$\boxed{(J_1 + m x_0^2) \ddot{\theta} + \left(M \frac{L}{2} + m x_0\right) g \cos\theta = C_m}$$

---

### **Partie 4 : Analyse critique des résultats**

> **Analyse de l'examinateur :**
> 1. **Homogénéité :** L'équation obtenue est homogène. Chaque terme s'exprime en unité de moment (N.m ou $\text{kg}\cdot\text{m}^2\cdot\text{s}^{-2}$). En effet, $J_1\ddot{\theta}$ est en $\text{kg}\cdot\text{m}^2 \cdot (\text{rad}\cdot\text{s}^{-2})$, ce qui correspond bien à un couple.
> 2. **Terme d'inertie variable :** On observe que le moment d'inertie global du système $J_{\text{global}} = J_1 + m x_0^2$ dépend de la position $x_0$ de la charge. C'est un point clé en automatique : la fonction de transfert du système varie au cours du temps (système à paramètres non constants), ce qui complique la commande par PID classique et nécessite souvent des approches par gain schédulé (*gain scheduling*).
> 3. **Cas limite :** Si $m = 0$ et $C_m = 0$, on retombe sur l'équation d'un pendule pesant non linéaire amorti : $J_1 \ddot{\theta} + M \frac{L}{2} g \cos\theta = 0$, ce qui valide qualitativement le modèle énergétique.