---
title: 'Exercice 1 : Structure de l atome et classification périodique'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'objectif de ce problème est d'étudier la structure électronique de métaux de transition et de leurs ions, ainsi que d'analyser l'évolution de certaines propriétés périodiques à l'aide de modèles simples inspirés de la mécanique quantique (règles de Slater). On s'intéresse en particulier au manganèse ($\text{Mn}$, $Z = 25$) et au chrome ($\text{Cr}$, $Z = 24$), ainsi qu'à leurs degrés d'oxydation usuels.

---

### ❓ Questions progressives

1. **Configuration électronique fondamentale :**
   Donner la configuration électronique à l'état fondamental du chrome $(\text{Cr}, Z = 24)$ et du manganèse $(\text{Mn}, Z = 25)$ en précisant la règle utilisée pour le remplissage des sous-couches. Comment qualifie-t-on l'anomalie de configuration observée pour le chrome ?

2. **États d'oxydation et ions :**
   Écrire les configurations électroniques des ions $\text{Cr}^{3+}$, $\text{Mn}^{2+}$ et $\text{MnO}_4^-$ (ce dernier sous l'angle de la configuration formelle du manganèse central). Justifier la stabilité particulière de l'ion $\text{Mn}^{2+}$.

3. **Énergie d'ionisation et règles de Slater :**
   On souhaite évaluer l'énergie de première ionisation de l'atome de chrome. 
   En utilisant les règles de Slater, calculer la charge effective $Z^*$ ressentie par un électron de valence $4s$ du chrome.

4. **Évolution périodique :**
   Expliquer qualitativement l'évolution du rayon atomique et de l'énergie de première ionisation le long de la 4ème période du tableau périodique (de $\text{K}$ à $\text{Kr}$), en mettant en évidence les effets d'écran et de charge nucléaire.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à l'ordre de remplissage régi par la règle de Klechkowski, mais rappelez-vous que les sous-couches $4s$ et $3d énergétiquement très proches peuvent présenter des exceptions pour les éléments de transition (demi-remplissage ou remplissage complet de la sous-couche $d$).
* **Question 2 :** Rappelez l'ordre de départ des électrons lors de l'ionisation d'un métal de transition : les électrons $4s$ partent *avant* les électrons $3d$.
* **Question 3 :** Appliquez rigoureusement les règles de Slater en séparant les électrons du groupe considéré, ceux des groupes $(n-1)$, et ceux des groupes $(n-2)$ ou inférieurs. Pour un électron $4s$, les contributions sont de $0{,}35$ pour les autres électrons du même groupe, $0{,}85$ pour la couche $n-1$, et $1{,}00$ pour la couche $n-2$ et au-delà.
* **Question 4 :** Raisonnez en comparant l'attraction du noyau (qui augmente avec $Z$) et l'effet d'écran (assuré par les électrons ajoutés au même niveau ou en $d$).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Configuration électronique fondamentale
* Pour le manganèse ($\text{Mn}$, $Z = 25$) :
  Selon la règle de Klechkowski, le remplissage s'effectue dans l'ordre croissant de $n+l$. 
  La configuration est : 
  $$\text{Mn} : 1s^2\, 2s^2\, 2p^6\, 3s^2\, 3p^6\, 4s^2\, 3d^5 \quad \text{soit} \quad [\text{Ar}]\, 4s^2\, 3d^5$$

* Pour le chrome ($\text{Cr}$, $Z = 24$) :
  L'application stricte de Klechkowski donnerait $[\text{Ar}]\, 4s^2\, 3d^4$. Cependant, la sous-couche $3d$ à demi-remplissée ($d^5$) présente une stabilité d'échange particulièrement élevée (due aux interactions de spin selon les règles de Hund). Il se produit une promotion électronique d'un électron $4s$ vers la sous-couche $3d$.
  La configuration fondamentale est donc :
  $$\text{Cr} : [\text{Ar}]\, 4s^1\, 3d^5$$
  Cette exception est qualifiée d'**anomalie de structure électronique** liée à la stabilisation par symétrie d'échange de la sous-couche à demi-remplie.

#### 2. États d'oxydation et ions
* **Ion $\text{Cr}^{3+}$ :** 
  Lors de la formation des ions des métaux de transition, les électrons de la couche la plus externe ($4s$) partent en premier. Pour $\text{Cr}^{3+}$ (perte de 3 électrons à partir de $\text{Cr}$ : un $4s$ et deux $3d$) :
  $$\text{Cr}^{3+} : [\text{Ar}]\, 3d^3$$

* **Ion $\text{Mn}^{2+}$ :** 
  Le manganèse perd ses deux électrons $4s$ :
  $$\text{Mn}^{2+} : [\text{Ar}]\, 3d^5$$
  *Justification de la stabilité :* L'ion $\text{Mn}^{2+}$ possède une sous-couche $3d$ exactement à demi-remplie ($d^5$). Cette configuration confère une énergie d'échange maximale et une symétrie sphérique approchée qui expliquent la grande stabilité de cet ion en solution aqueuse et la difficulté d'oxyder $\text{Mn}^{2+}$ en degrés supérieurs.

* **Ion permanganate $\text{MnO}_4^-$ :**
  Formellement, le manganèse y est au degré d'oxydation $+\text{VII}$. Il a perdu l'ensemble de ses électrons de valence ($2$ électrons $4s$ et $5$ électrons $3d$) :
  $$\text{Mn(VII)} : [\text{Ar}] \quad (\text{ou } 1s^2 2s^2 2p^6 3s^2 3p^6)$$

#### 3. Énergie d'ionisation et règles de Slater pour $\text{Cr}$
L'électron le plus externe du chrome est un électron $4s$ (dans la configuration $[\text{Ar}]\, 4s^1\, 3d^5$). 
Déterminons la constante d'écran $\sigma$ ressentie par cet électron $4s$ selon les règles de Slater :
Le groupe considéré est $(4s, 4p)$.
* Il y a $0$ autre électron dans le groupe $(4s, 4p)$ (puisqu'il n'y a qu'un seul électron $4s$). Contribution : $0 \times 0{,}35 = 0$.
* Pour les électrons de la couche $n-1$ (soit $3s$, $3p$ et $3d$, soit $2+6+5 = 13$ électrons) : ils contribuent chacun pour $0{,}85$.
  Contribution : $13 \times 0{,}85 = 11{,}05$.
* Pour les couches $n-2$ et inférieures ($1s$, $2s$, $2p$, soit $2+2+6 = 10$ électrons) : ils contribuent chacun pour $1{,}00$.
  Contribution : $10 \times 1{,}00 = 10{,}00$.

La constante d'écran totale est donc :
$$\sigma = 0 + 11{,}05 + 10{,}00 = 21{,}05$$

La charge effective $Z^*$ est :
$$Z^* = Z - \sigma = 24 - 21{,}05 = 2{,}95$$

L'électron $4s$ du chrome subit donc une charge effective de $2{,}95$, ce qui traduit un très fort effet d'écran de la part des électrons internes.

#### 4. Évolution périodique le long de la 4ème période
* **Rayon atomique :** 
  Le long de la période (de $\text{K}$ à $\text{Kr}$), on ajoute des électrons dans la même couche externe ($n=4$ puis remplissage de la sous-couche $3d$ qui fait office d'écran). La charge du noyau $Z$ augmente régulièrement. L'augmentation de la charge nucléaire non totalement compensée par l'effet d'écran entraîne une contraction du nuage électronique : **le rayon atomique décroît** globalement de gauche à droite.
* **Énergie de première ionisation ($E_i$) :** 
  L'énergie d'ionisation correspond à l'énergie nécessaire pour arracher l'électron le moins lié. Globalement, $E_i$ **augmente** de gauche à droite en raison de l'accroissement de la charge effective ressentie par les électrons de valence (le noyau retient plus fortement ses électrons). On observe toutefois des variations locales (creux) lors du remplissage de sous-couches (par exemple entre $\text{Be}$ et $\text{B}$ ou $\text{N}$ et $\text{O}$ transposables aux métaux de transition) dues à la répulsion interélectronique dans une même orbitales appariée.