---
title: 'Exercice 2 : Optimisation thermique d un réacteur industriel'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Optimisation thermique d'un réacteur industriel

## Introduction et contexte industriel

Dans les procédés de chimie fine, la maîtrise de la thermique des réacteurs est un enjeu crucial de sécurité et de rendement. On s'intéresse ici à la synthèse en phase liquide d'un intermédiaire réactionnel. La réaction mise en jeu est exothermique et modélisée par l'équation stœchiométrique suivante, supposée totale :

$$\text{A (liq)} + \text{B (liq)} \rightarrow \text{C (liq)}$$

Le réacteur utilisé est un réacteur fermé, agité, assimilé à un système thermodynamique monobare à la pression atmosphérique $P^\circ = 1\text{ bar}$. Le milieu réactionnel est maintenu en phase liquide, et ses propriétés thermophysiques sont supposées constantes et indépendantes de la température.

---

## Données thermodynamiques et physico-chimiques

- Capacité thermique massique du mélange réactionnel : $c = 4,18\text{ J}\cdot\text{K}^{-1}\cdot\text{g}^{-1}$ (similaire à celle de l'eau).
- Masse molaire des réactifs et produits : $M_{\text{A}} = 100\text{ g}\cdot\text{mol}^{-1}$, $M_{\text{B}} = 50\text{ g}\cdot\text{mol}^{-1}$.
- Enthalpie standard de réaction à $T_0 = 298\text{ K}$ : $\Delta_r H^\circ(T_0) = -150\text{ kJ}\cdot\text{mol}^{-1}$.
- Température initiale des réactifs : $T_i = 298\text{ K}$.
- Capacité thermique de la bâche de refroidissement (échangeur) : négligeable devant celle du milieu réactionnel.

---

## Partie I : Étude adiabatique (Scénario catastrophe)

On considère un fonctionnement accidentel où le système de refroidissement tombe en panne dès le début de l'injection. La transformation est alors adiabatique et isobare.

### Questions
1. Exprimer la variation d'enthalpie du système au cours de la transformation en fonction de l'avancement $\xi$ et de $\Delta_r H^\circ(T)$, puis appliquer le premier principe de la thermodynamique pour un système fermé monobare.
2. En supposant l'enthalpie standard de réaction constante sur l'intervalle de température considéré (approximation d'Ellingham ou de Kirchhoff simplifiée), établir l'expression de la température finale $T_f$ atteinte par le réacteur en fonction de $\xi$, de la capacité thermique totale du système $C_p$, de $T_i$ et de $\Delta_r H^\circ(T_0)$.
3. Calculer l'élévation de température $\Delta T = T_f - T_i$ pour l'introduction initiale de $n_{\text{A},0} = 1\text{ mol}$ de $\text{A}$ et un excès stœchiométrique de $\text{B}$, sachant que la masse totale du mélange réactionnel initial est $m = 500\text{ g}$.
4. **Analyse critique :** Discuter la validité des hypothèses du modèle face à un tel résultat numérique. Quels risques industriels majeurs cela met-il en évidence ?

---

## Partie II : Maîtrise de la température par échangeur thermique

Pour éviter l'emballement thermique, on équipe le réacteur d'une double enveloppe parcourue par un fluide caloporteur (eau de refroidissement) de débit massique $D_m$ et d'entropie créée positive. Le réacteur fonctionne désormais en régime stationnaire ou quasi-statique contrôlé, maintenu à la température de consigne $T_c = 350\text{ K}$.

### Questions
5. Établir le bilan d'énergie du réacteur sous forme ouverte (ou sous forme fermée avec flux thermique) en régime permanent d'addition des réactifs, sachant que le flux thermique cédé au fluide caloporteur s'exprime par $\phi = U S (T - T_{\text{fluide}})$, où $U S$ est la conductance thermique globale de l'échangeur.
6. Exprimer le flux thermique minimal que doit évacuer l'échangeur pour un avancement molaire par unité de temps (vitesse de réaction) $\frac{d\xi}{dt} = 0,2\text{ mol}\cdot\text{s}^{-1}$.
7. Sachant que l'eau de refroidissement entre dans la double enveloppe à $T_{e} = 288\text{ K}$ avec un débit $D_m = 0,5\text{ kg}\cdot\text{s}^{-1}$ et une capacité thermique massique $c_{\text{eau}} = 4,18\text{ J}\cdot\text{K}^{-1}\cdot\text{g}^{-1}$, calculer la température de sortie de l'eau $T_s$.

---

## Pistes et indications

- **Partie I, Q1 & Q2 :** Pensez à relier la variation de la température à la chaleur échangée (nulle ici) via la capacité thermique $C_p = m \cdot c$.
- **Partie I, Q3 :** Attention à bien calculer la masse totale $m$ du mélange pour obtenir $C_p$.
- **Partie II, Q5 & Q6 :** Utilisez le premier principe sous sa forme différentielle pour un système ouvert en régime permanent, ou faites un bilan enthalpique incluant le terme de transfert thermique $\phi$.

---

## Corrigé pas à pas

### Partie I : Étude adiabatique

1. **Bilan thermodynamique :**
   Le réacteur est fermé et monobare ($P = P^\circ$). Le premier principe appliqué à une transformation isobare adiabatique ($Q = 0$, $W_{ut} = 0$) s'écrit :
   $$\Delta H = 0$$
   L'enthalpie du système s'exprimant en fonction de l'avancement $\xi$, on a :
   $$\Delta H = \int_{T_i}^{T_f} C_p dT + \xi \Delta_r H^\circ(T_0) = 0$$

2. **Expression de la température finale :**
   En supposant $C_p$ et $\Delta_r H^\circ(T_0)$ constants :
   $$C_p (T_f - T_i) + \xi_{\max} \Delta_r H^\circ(T_0) = 0 \implies T_f = T_i - \frac{\xi_{\max} \Delta_r H^\circ(T_0)}{C_p}$$

3. **Application numérique :**
   - Masse totale $m = 500\text{ g}$.
   - Capacité thermique totale : $C_p = m \cdot c = 500 \times 4,18 = 2090\text{ J}\cdot\text{K}^{-1}$.
   - Avancement maximal (réactif limitant A en défaut) : $\xi_{\max} = n_{\text{A},0} = 1\text{ mol}$.
   - Élévation de température :
     $$\Delta T = T_f - T_i = -\frac{1 \times (-150 \times 10^3)}{2090} = \frac{150 000}{2090} \approx +71,8\text{ K}$$
   *(Note : Si l'on prenait des proportions stœchiométriques complètes avec $m$ ajusté, l'élévation serait encore bien plus spectaculaire).*

4. **Analyse critique des limites du modèle :**
   Une élévation de $\approx 72\text{ K}$ (et bien plus si le réacteur était chargé de manière dense) conduit à des températures où les solvants peuvent bouillir, entraînant une surpression brutale et l'explosion du réacteur (emballement thermique exponentiel, la loi d'Arrhenius accélérant la cinétique de réaction avec $T$). 
   *Limites du modèle :* L'hypothèse de $C_p$ et $\Delta_r H^\circ$ constants est fausse sur une large plage de température (loi de Kirchhoff). De plus, les pertes thermiques vers l'ambiance, négligées ici, deviennent non négligeables à haute température mais insuffisant pour contrer une exothermicité massive.

---

### Partie II : Maîtrise de la température par échangeur thermique

5. **Bilan d'énergie en régime permanent :**
   Pour maintenir le réacteur à température constante ($T = T_c$), la chaleur générée par la réaction chimique doit être intégralement évacuée par l'échangeur thermique sous forme de flux thermique sortant $\phi$ :
   $$\phi = \dot{\xi} (-\Delta_r H^\circ(T_0))$$
   où $\dot{\xi} = \frac{d\xi}{dt}$ est la vitesse de réaction.

6. **Calcul du flux thermique minimal :**
   $$\phi = 0,2\text{ mol}\cdot\text{s}^{-1} \times 150 \times 10^3\text{ J}\cdot\text{mol}^{-1} = 30 000\text{ W} = 30\text{ kW}$$

7. **Bilan thermique sur le fluide de refroidissement :**
   Le flux thermique cédé par le réacteur est intégralement récupéré par l'eau de refroidissement (en négligeant les pertes vers l'extérieur) :
   $$\phi = D_m \cdot c_{\text{eau}} \cdot (T_s - T_e)$$
   On en déduit la température de sortie $T_s$ de l'eau :
   $$T_s = T_e + \frac{\phi}{D_m \cdot c_{\text{eau}}}$$
   AN :
   $$T_s = 288 + \frac{30 000}{0,5 \times 4180} = 288 + \frac{30 000}{2090} \approx 288 + 14,4 = 302,4\text{ K}$$
   L'eau de refroidissement ressort à $29,4^\circ\text{C}$, ce qui est tout à fait réaliste et confirme le dimensionnement correct de l'échangeur.