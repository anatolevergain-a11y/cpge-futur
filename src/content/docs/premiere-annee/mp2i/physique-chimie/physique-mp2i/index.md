---
title: 'Cours : Électrocinétique et Mécanique'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Électrocinétique et Mécanique
Niveau: ** MP2I (1ère année)  
**Matière :** Physique-Chimie  

---

## Introduction et Outils Mathématiques

L'étude conjointe de l'électrocinétique et de la mécanique en première année de CPGE repose sur la modélisation de systèmes physiques par des équations différentielles linéaires à coefficients constants. L'utilisation des nombres complexes (notation phasorielle en régime sinusoïdal) est un outil fondamental pour résoudre ces équations.

---

## 1. Électrocinétique : Rapports et Régimes Transitoires

### 1.1. Lois générales de l'électrocinétique
* **Loi d'Ohm locale et globale :** Pour un resistor de résistance $R$ (\text{ohm}, $\Omega$), $u = Ri$.
* **Lois de Kirchhoff :**
  * Loi des nœuds : $\sum_{\text{nœud}} i_k = 0$.
  * Loi des mailles : $\sum_{\text{maille}} u_k = 0$.

### 1.2. Dipôles fondamentaux
* **Condensateur :** $i = C \frac{\mathrm{d}u_c}{\mathrm{d}t}$ ($C$ en \text{farad}, $\text{F}$).
* **Bobine idéale :** $u_L = L \frac{\mathrm{d}i}{\mathrm{d}t}$ ($L$ en \text{henry}, $\text{H}$).

### 1.3. Circuit RLC série en régime transitoire
Considérons un circuit série $(R, L, C)$ soumis à un échelon de tension $E$. L'application de la loi des mailles conduit à l'équation différentielle suivante portant sur l'intensité $i(t)$ ou la tension aux bornes du condensateur $u_c(t)$ :

$$\frac{\mathrm{d}^2 u_c}{\mathrm{d}t^2} + \frac{\omega_0}{Q} \frac{\mathrm{d}u_c}{\mathrm{d}t} \div \omega_0^2 u_c = \frac{\omega_0^2}{E} \dots \text{ (selon excitation)}$$

Plus simplement, pour $u_c(t)$ :
$$\frac{\mathrm{d}^2 u_c}{\mathrm{d}t^2} + \frac{R}{L} \frac{\mathrm{d}u_c}{\mathrm{d}t} + \frac{1}{LC} u_c = \frac{E}{LC}$$

On introduit les paramètres caractéristiques :
* **Pulsation propre :** $\omega_0 = \frac{1}{\sqrt{LC}}$ (\text{rad}\cdot\text{s}^{-1}).
* **Facteur de qualité :** $Q = \frac{L\omega_0}{R} = \frac{1}{R}\sqrt{\frac{L}{C}}$ (sans dimension).

Selon la valeur de $Q$ (ou du discriminant de l'équation caractéristique associée), on distingue trois régimes :
1. **$Q > 1/2$ : Régime pseudo-périodique** (oscillations amorties).
2. **$Q = 1/2$ : Régime critique** (retour à l'équilibre le plus rapide sans dépassement).
3. **$Q < 1/2$ : Régime aéro-périodique (ou apériodique)** (retour amorphe à l'équilibre).

---

## 2. Mécanique du Point Matériel

### 2.1. Cinématique du point
Dans un référentiel galiléen $\mathcal{R}$, repéré par un système de coordonnées cartésiennes $(O, \vec{e}_x, \vec{e}_y, \vec{e}_z)$ :
* **Vecteur position :** $\vec{OM}(t) = x(t)\vec{e}_x + y(t)\vec{e}_y + z(t)\vec{e}_z$
* **Vecteur vitesse :** $\vec{v}(t) = \frac{\mathrm{d}\vec{OM}}{\mathrm{d}t}$
* **Vecteur accélération :** $\vec{a}(t) = \frac{\mathrm{d}\vec{v}}{\mathrm{d}t} = \frac{\mathrm{d}^2\vec{OM}}{\mathrm{d}t^2}$

### 2.2. Dynamique : Principe Fondamental de la Dynamique (PFD)
Dans un référentiel galiléen, pour un point matériel $M$ de masse $m$ constante :

$$m \vec{a} = \sum \vec{F}_{\text{ext}}$$

#### Exemple fondamental : Chute libre avec frottement fluide
Soit une bille de masse $m$ chutant verticalement dans un fluide exerçant une force de frottement $\vec{f} = -h \vec{v}$ ($h > 0$). Le PFD projeté selon l'axe vertical descendant $Oz$ s'écrit :

$$m \frac{\mathrm{d}v}{\text{d}t} = mg - hf \implies \frac{\mathrm{d}v}{\mathrm{d}t} + \frac{h}{m}v = g$$

La solution de cette équation avec $v(0)=0$ est :
$$v(t) = v_{\text{lim}} \left( 1 - e^{-t/\tau} \} \right)$$

Où :
* **Vitesse limite :** $v_{\text{lim}} = \frac{mg}{h}$ (\text{m}\cdot\text{s}^{-1}).
* **Temps caractéristiques :** $\tau = \frac{m}{h}$ (\text{s}).

---

## 3. Analogie Électromécanique

Il existe un isomorphisme mathématique strict entre les équations régissant certains systèmes électriques et mécaniques. Cette analogie est fréquemment exploitée en MP2I pour la modélisation.

| Grandeur Électrique | Grandeur Mécanique (Translatoire) |
| :--- | :--- |
| Tension $u$ (\text{V}) | Force $F$ (\text{N}) |
| Intensité $i$ (\text{A}) | Vitesse $v$ (\text{m}\cdot\text{s}^{-1}) |
| Inductance $L$ (\text{H}) | Masse $m$ (\text{kg}) |
| Résistance $R$ ($\Omega$) | Coefficient de frottement $h$ (\text{kg}\cdot\text{s}^{-1}) |
| Inverse de la capacité $1/C$ ($\text{F}^{-1}$) | Raideur du ressort $k$ (\text{N}\cdot\text{m}^{-1}) |

* **Oscillateur RLC série :** Équation en charge $q(t)$ ($i = \frac{\mathrm{d}q}{\mathrm{d}t}$) :
  $$L\frac{\mathrm{d}^2 q}{\mathrm{d}t^2} + R\frac{\mathrm{d}q}{\mathrm{d}t} + \frac{1}{C}q = E(t)$$

* **Oscillateur Mécanique (masse-ressort-amortisseur) :** Équation en position $x(t)$ ($v = \frac{\mathrm{d}x}{\mathrm{d}t}$) :
  $$m\frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + h\frac{\mathrm{d}x}{\mathrm{d}t} + kx = F_{\text{ext}}(t)$$

---

## Démonstration Clé : Conservation de l'énergie mécanique pour un oscillateur harmonique

Considérons un système masse-ressort horizontal sans frottement ($h=0$). Le PFD donne :
$$m \frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + kx = 0$$

Multiplions cette équation scalairement par la vitesse $v = \frac{\mathrm{d}x}{\mathrm{d}t}$ :

$$m \frac{\mathrm{d}x}{\mathrm{d}t} \frac{\mathrm{d}^2 x}{\mathrm{d}t^2} + k x \frac{\mathrm{d}x}{\mathrm{d}t} = 0$$

On reconnait les dérivées temporelles :
$$\frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{1}{2} m v^2 \right) + \frac{\mathrm{d}}{\mathrm{d}t} \left( \frac{1}{2} k x^2 \right) = 0$$

Soit :
$$\frac{\mathrm{d}}{\mathrm{d}t} \left( E_c + E_p \right) = 0$$

Où $E_c = \frac{1}{2}mv^2$ est l'énergie cinétique et $E_p = \frac{1}{2}kx^2$ l'énergie potentielle élastique.  
Conclusion: ** L'énergie mécanique totale $E_m = E_c + E_p$ est une constante du mouvement ($\frac{\mathrm{d}E_m}{\mathrm{d}t} = 0$), ce qui traduit le caractère conservatif du système.