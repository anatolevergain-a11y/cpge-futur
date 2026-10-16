---
title: 'Cours : Électromagnétisme et Conversion de puissance'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Électromagnétisme et Conversion de puissance
Niveau: ** Deuxième année (CPGE - PSI)  
**Matière :** Physique-Chimie  

---

## 1. Introduction et rappels d'électromagnétisme

L'électromagnétisme macroscopique repose sur les équations de Maxwell dans l'ARQS (Approximation des Régimes Quasi-Stationnaires), complétées par les lois de comportement des milieux.

### 1.1. Équations de Maxwell (ARQS)
Dans l'ARQS, le terme de courant de déplacement $\varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ est négligé devant le vecteur densité de courant $\vec{j}$ dans l'équation de Maxwell-Ampère.

- **Maxwell-Gauss :** $\operatorname{div}(\vec{E}) = \frac{\rho}{\varepsilon_0}$
- **Maxwell-Thomson :** $\operatorname{div}(\vec{B}) = 0$
- **Maxwell-Faraday :** $\operatorname{rot}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$
- **Maxwell-Ampère (ARQS) :** $\operatorname{rot}(\vec{B}) = \mu_0 \vec{j}$

### 1.2. Lois globales de l'induction
- **Flux magnétique à travers un circuit $C$ s'appuyant sur une surface $\Sigma$ :**
  $$\Phi = \iint_{\Sigma} \vec{B} \cdot \vec{n} \, dS$$
- **Loi de Faraday (fém induite) :**
  $$e = -\frac{d\Phi}{dt}$$
  Cette fém comprend une contribution liée à la variation temporelle du champ ($\text{terme transformateur}$) et/ou au mouvement du circuit ($\text{terme cinétique}$).

---

## 2. Bilan énergétique et forces électromagnétiques

### 2.1. Puissance des forces de Lorentz
Pour une charge $q$ se déplacant à la vitesse $\vec{v}$ dans un champ électromagnétique $(\vec{E}, \vec{B})$, la force de Lorentz est $\vec{F} = q(\vec{E} + \vec{v} \land \vec{B})$.  
La puissance par unité de volume cédée aux charges libres de densité volumique $\rho$ et de vitesse moyenne $\vec{v}$ est :
$$\mathcal{P}_{\text{vol}} = \vec{j} \cdot \vec{E}$$

### 2.2. Théorème de Poynting
Le bilan énergétique local s'établit sous la forme :
$$\frac{\partial u_{\text{em}}}{\partial t} + \operatorname{div}(\vec{\Pi}) = -\vec{j} \cdot \vec{E}$$
Où :
- $u_{\text{em}} = \frac{1}{2}\varepsilon_0 E^2 + \frac{1}{2\mu_0} B^2$ est la densité volumique d'énergie électromagnétique.
- $\vec{\Pi} = \frac{1}{\mu_0} \vec{E} \land \vec{B}$ est le **vecteur de Poynting**, représentant le flux surfacique de puissance électromagnétique.

---

## 3. Conversion Électromécanique : Machines Tournantes

La conversion de puissance entre l'énergie électrique et l'énergie mécanique repose sur les actions de Laplace et l'induction du mouvement.

### 3.1. Modèle du convertisseur idéal
Soit un système siège d'un mouvement de rotation de vitesse angulaire $\Omega$ autour d'un axe fixe, soumis à un couple électromagnétique $\Gamma_{\text{em}}$ et parcouru par un courant $I$ sous une tension induite $E$.

La conservation de la puissance (en négligeant les pertes joule et mécaniques) s'écrit :
$$P_{\text{ électrique}} = E \cdot I = \Gamma_{\text{em}} \cdot \Omega = P_{\text{ mécanique}}$$

On en déduit les relations fondamentales des machines à courant continu (MCC) ou synchrones :
$$E = K \Phi_0 \Omega \quad \text{et} \quad \Gamma_{\text{em}} = K \Phi_0 I$$
Où $K$ est une constante géométrique et $\Phi_0$ le flux inducteur.

### 3.2. Machine à Courant Continu (MCC) à aimants permanents
Électriquement, le modèle équivalent de l'induit est une association série (modèle de Thévenin) :
$$U = E + R I + L \frac{dI}{dt}$$
Avec :
- $U$ : tension aux bornes de l'induit ($\text{en V}$)
- $R$ : résistance de l'induit ($\text{en }\Omega$)
- $L$ : inductance propre de l'induit ($\text{en H}$)

Mécaniquement, l'équation du mouvement (principe fondamental de la dynamique en rotation) s'écrit :
$$J \frac{d\Omega}{dt} = \Gamma_{\text{em}} - \Gamma_{\text{f}} - \Gamma_{\text{res}}$$
Où $J$ est le moment d'inertie de l'équipage mobile, $\Gamma_{\text{f}} = f \Omega$ le couple de frottement visqueux, et $\Gamma_{\text{res}}$ le couple résistant extérieur.

---

## 4. Convertisseurs statiques (Électronique de puissance)

La conversion de puissance électrique (AC/DC, DC/DC, etc.) est assurée par des interrupteurs commandés (transistors MOSFET, IGBT) fonctionnant en régime bloqué/saturé (interrupteurs parfaits).

### 4.1. Hacheur série (DC/DC abaisseur ou *Buck*)
Il permet d'abaisser une tension continue $E$ en une tension moyenne réglable $\langle u \rangle$.
- **Rapport cyclique** $\alpha = \frac{t_{\text{on}}}{T}$ avec $t_{\text{on}}$ la durée de conduction de l'interrupteur sur une période $T$.
- En régime permanent et en conduction continue (le courant dans la bobine ne s'annule pas) :
  $$\langle u \rangle = \alpha E$$

### 4.2. Onduleur autonome (DC/AC)
Il convertit une source de tension continue en une source de tension alternative (fréquemment modulée par MLI - Modulation de Largeur d'Impulsion). Le filtrage en sortie permet de ne conserver que le fondamental de la tension alternative pour alimenter, par exemple, une machine synchrone ou asynchrone.

---

## 5. Démonstration clé : Bilan de puissance d'une MCC en régime permanent
Objectif: ** Établir le rendement d'une MCC fonctionnant en moteur.

1. **Équations stationnaires ($\frac{d}{dt} = 0$) :**
   - Électrique : $U = E + R I \implies U I = E I + R I^2$
   - Électromécanique : $E I = \Gamma_{\text{em}} \Omega$
   - Mécanique : $\Gamma_{\text{em}} = \Gamma_{\text{res}} + f \Omega \implies \Gamma_{\text{em}} \Omega = \Gamma_{\text{res}} \Omega + f \Omega^2$

2. **Bilan des puissances :**
   - Puissance absorbée par l'induit : $P_{\text{abs}} = U I$
   - Pertes par effet Joule dans l'induit : $P_{\text{j}} = R I^2$
   - Puissance convertie (électromagnétique) : $P_{\text{em}} = E I = P_{\text{abs}} - P_{\text{j}}$
   - Pertes mécaniques : $P_{\text{meca}} = f \Omega^2$
   - Puissance utile : $P_{\text{ut}} = \Gamma_{\text{res}} \Omega = P_{\text{em}} - P_{\text{meca}}$

3. **Expression du rendement $\eta$ :**
   $$\eta = \frac{P_{\text{ut}}}{P_{\text{abs}}} = \frac{\Gamma_{\text{res}} \Omega}{U I}$$