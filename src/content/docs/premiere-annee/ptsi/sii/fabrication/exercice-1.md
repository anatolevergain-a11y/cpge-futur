---
title: 'Exercice 1 : Usinage et coupe'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse thermodynamique et mécanique d'une opération de chariotage

## Énoncé

On s'intéresse à l'opération de chariotage cylindrique externe d'un arbre en acier allié (nuance 35NCD16) réalisée sur un tour à commande numérique. L'outil de coupe est une plaquette amovible en carbure métallique revuement PVD. 

L'objectif de ce problème est d'évaluer les efforts de coupe, la puissance massique spécifique de coupe, ainsi que l'élévation de température au niveau de l'interface outil-copeau, tout en discutant la validité des modèles analytiques face aux réalités industrielles.

### Données géométriques et cinématiques :
* Diamètre initial de la pièce : $D_0 = 80\text{ mm}$
* Profondeur de passe : $a_p = 2.5\text{ mm}$
* Avance par tour : $f = 0.3\text{ mm/tr}$
* Vitesse de rotation de la broche : $N = 650\text{ tr/min}$
* Angle de coupe de l'outil : $\gamma = 6^\circ$
* Angle de dépouille : $\alpha = 7^\circ$
* Angle d'arête principale : $\kappa_r = 75^\circ$

### Données matière et rhéologiques :
* Pression spécifique de coupe (ou effort spécifique de coupe) de référence pour $h = 0.1\text{ mm}$ : $K_{c1.1} = 2100\text{ MPa}$
* Coefficient de Kienzle (exposant d'crouissage) : $z = 0.22$
* Masse volumique de l'acier : $\rho = 7800\text{ kg/m}^3$
* Capacité thermique massique : $C = 460\text{ J/(kg}\cdot\text{K)}$
* Conductivité thermique : $\lambda = 42\text{ W/(m}\cdot\text{K)}$
* Température ambiante : $T_0 = 20\text{^\circ C}$

---

## Questions

1. **Analyse géométrique de la coupe**
   1.1. Calculer la vitesse de coupe $v_c$ en $\text{m/min}$.
   1.2. Exprimer et calculer l'épaisseur indéterminée du copeau $h$ et la largeur de coupe $b$ en fonction de l'avance $f$, de la profondeur de passe $a_p$ et de l'angle $\kappa_r$.

2. **Efforts de coupe et puissance**
   2.1. Rappeler la loi de Kienzle donnant l'effort spécifique de coupe $Kc$ en fonction de l'épaisseur du copeau $h$. Calculer sa valeur numérique.
   2.2. En déduire l'effort principal de coupe $F_c$.
   2.3. Calculer la puissance de coupe $P_c$ consommée par l'opération.

3. **Approche énergétique et thermique (Modèle de Loewen et Shaw)**
   3.1. On admet que 80% de la puissance de coupe est convertie en chaleur au niveau de la zone de cisaillement primaire et de frottement sur la face de coupe. Estimer le flux thermique global engendré.
   3.2. En supposant que 70% de cette chaleur est évacuée par le copeau et le reste par la pièce et l'outil, estimer l'ordre de grandeur de l'élévation de température moyenne dans le copeau, sachant que le débit massique de copeau est donné par $Q_m = \rho \cdot v_c \cdot a_p \cdot f$.

4. **Analyse critique et limites du modèle**
   4.1. Discuter l'hypothèse de constance du coefficient de Kienzle $K_{c1.1}$ à grande vitesse de coupe (effets thermomécaniques à haute vitesse).
   4.2. Quelles sont les conséquences d'une usure en cratère sur la face de coupe vis-à-vis de l'angle de coupe réel $\gamma$ et de l'effort de coupe $F_c$ ?

---

## Pistes et indications

* **Q1.2** : Penser aux relations trigonométriques liant la géométrie de l'arête active (plaquette inclinée de $\kappa_r$).
* **Q2.1** : La formule de Kienzle s'écrit $Kc = K_{c1.1} \cdot h^{-z}$. Attention aux unités homogènes ($\text{mm}$ pour $h$, $\text{MPa}$ pour $Kc$).
* **Q3.2** : Le débit massique $Q_m$ s'exprime en $\text{kg/s}$. La puissance thermique absorbée par le copeau s'exprime par $P_{\text{copeau}} = Q_m \cdot C \cdot \Delta T$.

---

## Corrigé pas à pas

### 1. Analyse géométrique de la coupe
1.1. La vitesse de coupe $v_c$ se calcule par :
$$v_c = \frac{\pi \cdot D_0 \cdot N}{1000} = \frac{\pi \cdot 80 \cdot 650}{1000} \approx 163.4\text{ m/min}$$

1.2. D'après la géométrie de l'outil et de la pièce :
* L'épaisseur indéterminée du copeau $h$ est :
  $$h = f \cdot \sin(\kappa_r) = 0.3 \cdot \sin(75^\circ) \approx 0.29\text{ mm}$$
* La largeur de coupe $b$ est :
  $$b = \frac{a_p}{\sin(\kappa_r)} = \frac{2.5}{\sin(75^\circ)} \approx 2.59\text{ mm}$$

### 2. Efforts de coupe et puissance
2.1. Application de la loi de Kienzle :
$$Kc = K_{c1.1} \cdot h^{-z} = 2100 \cdot (0.29)^{-0.22}$$
Calculons $(0.29)^{-0.22} \approx 1.306$. Donc :
$$Kc \approx 2100 \cdot 1.306 \approx 2743\text{ MPa}$$

2.2. L'effort principal de coupe $F_c$ vaut :
$$F_c = Kc \cdot b \cdot h = Kc \cdot S_0$$
Où $S_0 = a_p \cdot f = 2.5 \cdot 0.3 = 0.75\text{ mm}^2$.
$$F_c = 2743 \cdot 0.75 \approx 2057\text{ N}$$

2.3. La puissance de coupe $P_c$ est :
$$P_c = F_c \cdot v_c = 2057 \cdot \frac{163.4}{60} \approx 5600\text{ W} = 5.6\text{ kW}$$

### 3. Approche énergétique et thermique
3.1. Le flux thermique total généré par la coupe (en considérant 80% de conversion mécanique-thermique) :
$$Q_{\text{total}} = 0.80 \cdot P_c = 0.80 \cdot 5600 = 4480\text{ W}$$

3.2. Le débit massique de copeau $Q_m$ est :
$$Q_m = \rho \cdot v_c \cdot a_p \cdot f = 7800 \cdot \left(\frac{163.4}{60}\right) \cdot (2.5 \cdot 10^{-3}) \cdot (0.3 \cdot 10^{-3}) \approx 0.0478\text{ kg/s}$$

La puissance thermique évacuée par le copeau (70% de $Q_{\text{total}}$) :
$$P_{\text{copeau}} = 0.70 \cdot 4480 = 3136\text{ W}$$

L'élévation de température $\Delta T$ du copeau se déduit de :
$$P_{\text{copeau}} = Q_m \cdot C \cdot \Delta T \implies \Delta T = \frac{P_{\text{copeau}}}{Q_m \cdot C}$$
$$\Delta T = \frac{3136}{0.0478 \cdot 460} \approx 142.6\text{ K (ou }\text{^\circ C)}$$
La température moyenne du copeau atteint donc $T_{\text{copeau}} = 20 + 142.6 = 162.6\text{^\circ C}$.

### 4. Analyse critique et limites du modèle
4.1. **Limites de la loi de Kienzle à grande vitesse :** 
Le modèle de Kienzle suppose que $K_{c1.1}$ et $z$ sont constants pour un couple outil-matière donné. Or, à grande vitesse de coupe, les phénomènes de thermomécanique du flux plastique entraînent un adoucissement thermique (adoucissement structural de l'acier par échauffement localisé dans la bande de cisaillement primaire). La force de coupe diminue paradoxalement par rapport à l'extrapolation linéaire de Kienzle, un phénomène non capté par ce modèle purement empirique.

4.2. **Influence de l'usure en cratère :**
L'usure en cratère (située sur la face de coupe par frottement du copeau) modifie localement la géométrie de l'outil en augmentant (rendant plus positif) l'angle de coupe effectif $\gamma$. Si cela réduit initialement l'effort de coupe $F_c$, cela fragilise la coin de l'arête coupante, menant à terme à l'ébrèchement ou à la rupture brutale de la plaquette. De plus, cela modifie la courbure du copeau et augmente la température d'interface.