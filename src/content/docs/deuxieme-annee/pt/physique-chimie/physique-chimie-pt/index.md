---
title: 'Cours : Thermodynamique industrielle et Ondes'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Thermodynamique industrielle et Ondes
Niveau: ** Deuxième année (CPGE PT)  
**Matière :** Physique-Chimie  

---

## I. Thermodynamique industrielle : Systèmes ouverts et Machines thermiques

Dans le cadre de l'industrie, on étudie principalement des **systèmes ouverts** en régime permanent (écoulements continus). 

### 1. Premier principe pour un système ouvert (Formulation enthalpique)
Pour un système ouvert en régime permanent traversé par un débit massique $\dot{m}$, le premier principe s'écrit sous la forme globale :

$$\dot{Q} + \dot{W}_{\text{ut}} = \Delta(\dot{m} h_{\text{tot}})$$

Où :
- $\dot{Q}$ est le flux thermique reçu par le système ($\text{W}$).
- $\dot{W}_{\text{ut}}$ est la puissance utile (hors travail de transvasement des forces de pression, par exemple puissance sur un arbre de turbine ou de compresseur, $\text{W}$).
- $h_{\text{tot}} = h + \frac{1}{2} v^2 + g z$ est l'enthalpie totale massique ($\text{J}\cdot\text{kg}^{-1}$).

En négligeant les variations d'énergie cinétique et potentielle macroscopicrques, l'équation simplifiée par unité de masse s'écrit :

$$q + w_{\text{ut}} = \Delta h = h_{\text{aval}} - \hbar_{\text{amont}}$$

### 2. Étude des machines thermiques usuelles
*   **Compresseur / Pompe (Récepteur adiabatique) :** $q = 0$. Le travail utile fourni est négatif pour le milieu extérieur. $w_{\text{ut}} = h_{\text{sortie}} - h_{\text{entrée}} > 0$.
*   **Turbine (Moteur adiabatique) :** $q = 0$. Le fluide fournit de l'énergie mécanique. $w_{\text{ut}} = h_{\text{sortie}} - h_{\text{entrée}} < 0$.
*   **Échangeur / Condenseur / Évaporateur ($w_{\text{ut}} = 0$) :** Permet les transferts thermiques entre deux fluides sans contact direct.

### 3. Efficacité et Efficience (Second principe)
Pour toute machine thermique, le second principe introduit l'entropie échangée et créée $\Delta S_{\text{cr}} \ge 0$.
*   **Machine thermique motrice (Moteur) :** Rendement $\eta = \frac{-W_{\text{ut}}}{Q_{\text{ chaud}}} \le \eta_{\text{Carnot}} = 1 - \frac{T_{\text{ froide}}}{T_{\text{ chaude}}}$
*   **Machine thermique réceptrice (Pompe à chaleur / Climatiseur) :** Efficacité (ou COP) :
    *   PAC : $\text{COP}_{\text{PAC}} = \frac{Q_{\text{chaud}}}{W_{\text{ut}}} \le \frac{T_{\text{chaud}}}{T_{\text{chaud}} - T_{\text{froide}}}$
    *   Climatiseur : $\text{COP}_{\text{clim}} = \frac{Q_{\text{froide}}}{W_{\text{ut}}} \le \frac{T_{\text{froide}}}{T_{\text{chaud}} - T_{\text{froide}}}$

---

## II. Propagation des Ondes

### 1. Équation d'onde universelle
Une grandeur physique $s(x, t)$ (champ, pression, tension...) se propageant selon une dimension $x$ à la cœlérité $c$ vérifie l'équation d'onde linéaire homogène :

$$\frac{\partial^2 s}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 s}{\partial t^2} = 0$$

*   **Solution générale (d'Alembert) :** $s(x, t) = f(x - c t) + g(x + c t)$ (ondes progressives dans le sens $+x$ et $-x$).

### 2. Ondes acoustiques dans les fluides
Considérons un gaz parfait de masse volumique $\rho_0$ et de pression $0$. Les perturbations acoustiques (excès de pression $p(x,t)$, vitesse particulaire $v(x,t)$, excès de masse volumique $\mu(x,t)$) vérifient les équations linéarisées (en négligeant les termes d'ordre supérieur) :
1.  **Équation d'Euler (quantité de mouvement) :** $\rho_0 \frac{\partial v}{\partial t} = -\frac{\partial p}{\partial x}$
2.  **Équation de conservation de la masse :** $\frac{\partial \mu}{\partial t} + \rho_0 \frac{\partial v}{\partial x} = 0$
3.  **Équation d'état (transformation adiabatique réversible / Laplace) :** $p = c^2 \mu$, avec $c = \sqrt{\frac{\gamma P_0}{\rho_0}} = \sqrt{\frac{\gamma R T}{M}}$

En combinant ces équations, on établit l'équation d'onde sur la surpression acoustique $p(x,t)$ :

$$\frac{\partial^2 p}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p}{\partial t^2} = 0$$

### 3. Impédance acoustique
Pour une onde plane progressive sinusoïdale se propageant dans le sens des $x$ croissants :
$$p(x,t) = P_m \cos(\omega t - k x)$$

La vitesse particulaire associée $v(x,t)$ s'obtient via l'équation d'Euler :
$$v(x,t) = \frac{P_m}{\rho_0 c} \cos(\omega t - k x)$$

On définit l'**impédance acoustique caractéristique** du milieu par :

$$Z_c = \frac{p(x,t)}{v(x,t)} = \rho_0 c \quad (\text{en } \text{Pa}\cdot\text{s}\cdot\text{m}^{-3} \text{ ou } \text{Rayleigh})$$

### 4. Puissance et Intensité acoustique
*   **Puissance transportée par unité de surface (Intensité acoustique instantanée) :**
    $$i(x,t) = p(x,t) \cdot v(x,t)$$
*   **Intensité acoustique moyenne (sur une période) :**
    $$I = \langle i(x,t) \rangle_T = \frac{P_m^2}{2 \rho_0 c} = \frac{1}{2} Z_c v_{\text{max}}^2$$

---

## III. Réflexion et Transmission des ondes (Interface entre deux milieux)

Lorsqu'une onde acoustique (ou sur une corde) d'amplitude incidente $p_i$ arrive sur une discontinuité d'impédance (interface en $x = 0$ entre le milieu 1 d'impédance $Z_1$ et le milieu 2 d'impédance $Z_2$), il y a création d'une onde réfléchie $p_r$ et d'une onde transmise $p_t$.

### 1. Conditions de raccordement en $x = 0$
- Continuité de la pression : $p_i(0, t) + p_r(0, t) = p_t(0, t)$
- Continuité de la vitesse particulaire : $v_i(0, t) + v_r(0, t) = v_t(0, t)$ (avec $v_r = -\frac{p_r}{Z_1}$ car l'onde rétrograde se propage dans le sens $-x$).

### 2. Coefficients de réflexion et de transmission
*   **Coefficient en amplitude (pression) :**
    $$r = \frac{p_r}{p_i} = \frac{Z_2 - Z_1}{Z_2 + Z_1}$$
    $$t = \frac{p_t}{p_i} = \frac{2 Z_2}{Z_1 + Z_2}$$

*   **Coefficient en énergie (puissance transmise/réfléchie) :**
    $$R = \frac{I_r}{I_i} = r^2 = \left( \frac{Z_2 - Z_1}{Z_2 + Z_1} \right)^2$$
    $$T = \frac{I_t}{I_i} = \frac{Z_1}{Z_2} t^2 = \frac{4 Z_1 Z_2}{(Z_1 + Z_2)^2}$$
    
    *Bilan énergétique :* $R + T = 1$ (conservation de l'énergie à l'interface).

---
**Points clés à retenir pour les concours :**
1. Maîtriser le premier principe ouvert pour dimensionner pompes et turbines en PTSI/PT.
2. Savoir retrouver l'équation d'onde acoustique à partir de la mécanique des fluides linéarisée.
3. Utiliser systématiquement l'analogie entre les systèmes mécaniques, électriques et acoustiques via l'impédance $Z$.