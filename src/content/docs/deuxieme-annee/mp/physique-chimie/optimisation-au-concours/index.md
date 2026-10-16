---
title: 'Optimisation au concours : Physique-Chimie MP'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

## 🎯 Objectif du module & Exigences des Jurys

En tant que concepteur de sujets et président de jury pour les concours de la filière MP (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP), mon constat est unanime : **la différence entre une note de passage (10-12) et une note d'admissibilité prestigieuse (15-18) ne réside pas dans la quantité de hors-programme étalée, mais dans la rigueur absolue de la rédaction et la maîtrise des démonstrations canoniques.**

Ce guide a pour objectif de vous armer sur trois piliers incontournables de la physique en MP. Pour chaque question type, vous trouverez la méthodologie exacte attendue par les correcteurs, une rédaction modèle notée virtuellement $20/20$, et les pièges rédhibitoires relevés chaque année dans les rapports de jury.

*Rappel formel :* Dans toute la suite, veillez à respecter scrupuleusement l'homogénéité des unités et l'utilisation des notations vectorielles.

---

## 📌 Question Type 1 : Bilan d'énergie électromagnétique, vecteur de Poynting et vecteur de Poynting moyen

### 💡 Méthode canonique & Étapes de rédaction
1. **Partir des équations de Maxwell locales** : Écrire l'équation de Maxwell-Ampère et l'équation de Maxwell-Faraday dans le vide ou un milieu matériel selon le texte.
2. **Effectuer le produit scalaire** : Multiplier scalairement l'équation de Maxwell-Ampère par $\vec{E}$ et celle de Maxwell-Faraday par $\vec{B}$ (ou inversement selon la manipulation algébrique menant au théorème de Poynting).
3. **Utiliser les identités vectorielles** : Transformer le terme $\vec{E} \cdot \vec{\text{rot}}(\vec{B})$ ou $\vec{B} \cdot \vec{\text{rot}}(\vec{E})$ à l'aide de l'identité $\text{div}(\vec{A} \land \vec{B}) = \vec{B} \cdot \vec{\text{rot}}(\vec{A}) - \vec{A} \cdot \vec{\text{rot}}(\vec{B})$.
4. **Identifier les grandeurs énergétiques** : 
   - Densité volumique d'énergie électromagnétique : $u = \frac{1}{2} \varepsilon_0 E^2 + \frac{1}{2\mu_0} B^2$
   - Vecteur de Poynting : $\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \land \vec{B}$
5. **Passer à la moyenne temporelle** : Pour un régime sinusoïdal, exprimer le vecteur de Poynting moyen $\langle \vec{\Pi} \rangle$ en utilisant la notation complexe (valeur efficace ou amplitude complexe : $\langle \vec{\Pi} \rangle = \frac{1}{2} \text{Re}\left(\frac{1}{\mu_0} \vec{E} \land \vec{B}^*\right)$).

### 📋 Exemple de sujet & Rédaction modèle type Concours
*Énoncé type : Établir le bilan local d'énergie électromagnétique dans le vide en l'absence de charges et de courants libres, puis exprimer le vecteur de Poynting moyen associé à une onde plane progressive monochromatique (OPPM).*

**Rédaction modèle :**
Dans le vide, en l'absence de charges et de courants, les équations de Maxwell locales s'écrivent :
$$\text{(M-Faraday)} \quad \vec{\text{rot}}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$$
$$\text{(M-Ampère)} \quad \vec{\text{rot}}(\vec{B}) = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$

Effectuons le produit scalaire de (M-Faraday) par $\vec{B}$ et de (M-Ampère) par $\vec{E}$ :
$$\vec{B} \cdot \vec{\text{rot}}(\vec{E}) = -\vec{B} \cdot \frac{\partial \vec{B}}{\partial t} = -\frac{1}{2} \frac{\partial}{\partial t} (B^2)$$
$$\vec{E} \cdot \vec{\text{rot}}(\vec{B}) = \mu_0 \varepsilon_0 \vec{E} \cdot \frac{\partial \vec{E}}{\partial t} = \frac{\mu_0 \varepsilon_0}{2} \frac{\partial}{\partial t} (E^2)$$

En soustrayant ces deux relations et en utilisant l'identité vectorielle $\text{div}(\vec{E} \land \vec{B}) = \vec{B} \cdot \vec{\text{rot}}(\vec{E}) - \vec{E} \cdot \vec{\text{rot}}(\vec{B})$, il vient :
$$\vec{B} \cdot \vec{\text{rot}}(\vec{E}) - \vec{E} \cdot \vec{\text{rot}}(\vec{B}) = \text{div}\left(\vec{E} \land \vec{B}\right) = -\frac{\partial}{\partial t} \left(\frac{1}{2} B^2\right) - \mu_0 \varepsilon_0 \frac{\partial}{\partial t} \left(\frac{1}{2} E^2\right)$$

En posant $\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \land \vec{B}$ (vecteur de Poynting) et $u = \frac{1}{2}\varepsilon_0 E^2 + \frac{1}{2\mu_0}B^2$ (densité volumique d'énergie), on obtient l'équation de conservation locale :
$$\frac{\partial u}{\partial t} + \text{div}(\vec{\Pi}) = 0 \text{ W/m}^3$$

Pour une OPPM se propageant selon $\vec{u}_z$, de champ complexe $\underline{\vec{E}} = E_0 e^{j(\omega t - kz)} \vec{u}_x$ et $\underline{\vec{B}} = \frac{E_0}{c} e^{j(\omega t - kz)} \vec{u}_y$, le vecteur de Poynting instantané est :
$$\vec{\Pi}(t) = \frac{1}{\mu_0} \vec{E}(t) \land \vec{B}(t) = \frac{E_0^2}{\mu_0 c} \cos^2(\omega t - kz) \vec{u}_z$$
Le vecteur de Poynting moyen sur une période temporelle $T = \frac{2\pi}{\omega}$ s'obtient par intégration (sachant que la moyenne de $\cos^2$ vaut $1/2$) :
$$\langle \vec{\Pi} \rangle = \frac{E_0^2}{2\mu_0 c} \vec{u}_z \text{ W/m}^2$$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oubli du facteur $1/2$** dans le calcul du vecteur de Poynting moyen à partir des grandeurs complexes ($\frac{1}{2}\text{Re}(\underline{\vec{E}} \land \underline{\vec{B}}^*)$).
- **Inversion des signes** dans l'application de l'identité vectorielle du rotationnel, menant à une création d'énergie au lieu d'une conservation.
- **Manque de rigueur dimensionnelle** : ne pas préciser les unités (ex: $\text{W/m}^2$ pour le vecteur de Poynting, $\text{J/m}^3$ pour $u$).

---

## 📌 Question Type 2 : Établissement d'équation de la chaleur avec terme source et calcul de résistance thermique

### 💡 Méthode canonique & Étapes de rédaction
1. **Définir le système et le volume de contrôle** : Isoler une portion de milieu (ex: une tranche d'épaisseur $dx$ entre $x$ et $x+dx$ en cartésien, ou une coquille cylindrique/sphérique).
2. **Appliquer le premier principe de la thermodynamique ou un bilan d'énergie** sur une durée $dt$ : 
   $$\text{Variation d'énergie interne} = \text{Flux thermique entrant} - \text{Flux thermique sortant} + \text{Chaleur générée par une source interne}$$
3. **Exprimer les flux via la loi de Fourier** : $\vec{j}_{\text{th}} = -\lambda \vec{\text{grad}}(T)$.
4. **Effectuer un développement limité (ou Taylor)** pour relier les flux à l'abscisse $x$ et $x+dx$.
5. **En déduire l'équation aux dérivées partielles (EDP)** de la chaleur.
6. **Résoudre en régime stationnaire** ($\frac{\partial T}{\partial t} = 0$) pour obtenir le profil de température et en déduire la **résistance thermique** par analogie avec la loi d'Ohm thermique : $\Delta T = R_{\text{th}} \Phi_{\text{th}}$.

### 📋 Exemple de sujet & Rédaction modèle type Concours
*Énoncé type : Établir l'équation locale de la chaleur dans un mur plan infini d'épaisseur $e$, de conductivité thermique $\lambda$, siège d'une puissance volumique thermique constante $p_0$. En déduire la résistance thermique équivalente.*

**Rédaction modèle :**
Considérons une tranche de mur comprise entre $x$ et $x+dx$, d'aire $S$. Faisons un bilan d'énergie sur cette tranche entre $t$ et $t+dt$.

- Variation d'énergie interne de la tranche :
  $$dU = \rho C_v S dx \, \partial_t T dt$$
  où $\rho$ est la masse volumique et $C_v$ la capacité thermique massique.

- Énergie thermique apportée par conduction par les faces :
  $$\delta Q_{\text{conduction}} = \left[ \Phi_{\text{th}}(x) - \Phi_{\text{th}}(x+dx) \right] dt = -\frac{\partial \Phi_{\text{th}}}{\partial x} dx \, dt$$
  Avec la loi de Fourier $\Phi_{\text{th}}(x) = -\lambda S \frac{\partial T}{\partial x}$, on a :
  $$\delta Q_{\text{conduction}} = \lambda S \frac{\partial^2 T}{\partial x^2} dx \, dt$$

- Énergie générée par la source interne par unité de temps :
  $$\delta Q_{\text{source}} = p_0 S dx \, dt$$

Le premier principe appliqué à la tranche s'écrit $dU = \delta Q_{\text{conduction}} + \delta Q_{\text{source}}$ :
$$\rho C_v S dx \, \partial_t T dt = \left( \lambda S \frac{\partial^2 T}{\partial x^2} + p_0 S \right) dx \, dt$$

En simplifiant par $S dx dt$ et en posant $\chi = \frac{\lambda}{\rho C_v}$ (diffusivité thermique), on obtient l'équation de la chaleur avec terme source :
$$\frac{\partial T}{\partial t} - \chi \frac{\partial^2 T}{\partial x^2} = \frac{p_0}{\rho C_v} \text{ K/s}$$

**Régime stationnaire ($ \partial_t T = 0 $) :**
L'équation devient $\frac{d^2 T}{dx^2} = -\frac{p_0}{\lambda}$. Par double integration :
$$T(x) = -\frac{p_0}{2\lambda} x^2 + A x + B$$
Avec les conditions aux limites $T(0) = T_1$ et $T(e) = T_2$, on trouve $B = T_1$ et $A = \frac{T_2 - T_1}{e} + \frac{p_0 e}{2\lambda}$.

Le flux thermique traversant la surface en $x=0$ vaut :
$$\Phi_{\text{th}}(0) = - \lambda S \left. \frac{dT}{dx} \right|_{x=0} = -\lambda S A = \frac{\lambda S}{e}(T_1 - T_2) - \frac{p_0 S e}{2}$$
En l'absence de source ($p_0 = 0$), le flux à travers le mur s'écrit sous la forme $\Phi_{\text{th}} = \frac{T_1 - T_2}{R_{\text{th}}}$, d'où l'on extrait la résistance thermique du mur plan :
$$R_{\text{th}} = \frac{e}{\lambda S} \text{ K/W}$$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Erreur de signe dans la loi de Fourier** : Oublier le signe moins ($\vec{j}_{\text{th}} = -\lambda \vec{\text{grad}} T$), ce qui viole le second principe (la chaleur va des zones chaudes vers les zones froides).
- **Confondre flux thermique et densité de flux** : Bien distinguer $\Phi_{\text{th}}$ (en $\text{W}$) et $\vec{j}_{\text{th}}$ (en $\text{W/m}^2$).
- **Oubli du volume élémentaire $S dx$** lors du bilan (écriture directe sur des grandeurs globales sans passer par le volume infinitésimal).

---

## 📌 Question Type 3 : Étude d'un paquet d'ondes et vitesse de groupe en physique quantique

### 💡 Méthode canonique & Étapes de rédaction
1. **Définir la relation de dispersion** : Relier la pulsation $\omega$ (ou l'énergie $E = \hbar \omega$) au nombre d'onde $k$ (ou l'impulsion $p = \hbar k$).
2. **Exprimer la vitesse de phase $v_{\phi}$ et la vitesse de groupe $v_g$** :
   - $v_{\phi} = \frac{\omega}{k}$
   - $v_g = \frac{d\omega}{dk}$ (ou $v_g = \frac{dE}{dp}$)
3. **Interpréter physiquement** : Expliquer que le paquet d'ondes (enveloppe) se déplace à la vitesse de groupe, tandis que les oscillations sous l'enveloppe se déplacent à la vitesse de phase.
4. **Mettre en évidence le phénomène de dispersion** si $v_g \neq v_{\phi}$ (milieu dispersif).

### 📋 Exemple de sujet & Rédaction modèle type Concours
*Énoncé type : Pour une particule quantique non relativiste de masse $m$ soumise à un potentiel nul, rappeler la relation de dispersion associée à sa fonction d'onde $\psi(x,t)$. Calculer sa vitesse de phase et sa vitesse de groupe, puis commenter.*

**Rédaction modèle :**
Pour une particule quantique non relativiste de masse $m$, l'équation de Schrödinger indépendante du temps (ou l'énergie cinétique pure) s'associe à la relation d'énergie :
$$E = \frac{p^2}{2m}$$
En utilisant les relations de de Broglie et de Planck-Einstein, soit $E = \hbar \omega$ et $p = \hbar k$, la relation de dispersion $\omega(k)$ s'écrit :
$$\hbar \omega = \frac{(\hbar k)^2}{2m} \implies \omega(k) = \frac{\hbar k^2}{2m} \text{ rad/s}$$

1. **Calcul de la vitesse de phase $v_{\phi}$** :
   Elle correspond à la vitesse de propagation des plans d'onde de phase constante :
   $$v_{\phi} = \frac{\omega}{k} = \frac{\hbar k^2 / 2m}{k} = \frac{\hbar k}{2m} = \frac{p}{2m} = \frac{v_{\text{classique}}}{2} \text{ m/s}$$

2. **Calcul de la vitesse de groupe $v_g$** :
   Elle correspond à la vitesse de propagation de l'enveloppe du paquet d'ondes (vitesse de propagation de l'information / de la particule) :
   $$v_g = \frac{d\omega}{dk} = \frac{d}{dk}\left(\frac{\hbar k^2}{2m}\right) = \frac{2\hbar k}{2m} = \frac{\hbar k}{m} = \frac{p}{m} = v_{\text{classique}} \text{ m/s}$$

**Commentaire de jury :**
On constate que $v_g = 2 v_{\phi}$. Le milieu associé à l'équation de Schrödinger libre est fortement **dispersif** (la vitesse de phase dépend de $k$). La vitesse de groupe du paquet d'ondes coïncide exactement avec la vitesse classique $v = p/m$ de la particule, ce qui valide l'interprétation physique du paquet d'ondes localisé comme décrivant le mouvement de la particule classique en moyenne (théorème d'Ehrenfest).

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Confusion entre $v_g$ et $v_{\phi}$** : Inverser les formules ou oublier que $v_g$ est la dérivée de $\omega$ par rapport à $k$.
- **Erreur de manipulation des constantes quantiques** : Oublier les facteurs $\hbar$ lors du passage de $(E,p)$ à $(\omega,k)$.
- **Absence de commentaire physique** : Ne pas faire le lien entre la vitesse de groupe et la vitesse classique de la particule (ou la vitesse de transport de l'énergie).