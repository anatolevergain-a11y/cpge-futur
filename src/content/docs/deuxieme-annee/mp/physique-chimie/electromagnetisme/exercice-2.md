---
title: 'Exercice 2 : Ondes électromagnétiques'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Propagation d'une onde électromagnétique dans un plasma ionisé et analyse critique du modèle

---

## I. Énoncé

On s'intéresse à la propagation d'une onde électromagnétique harmonique plane et progressive, de pulsation $\omega$, dans un plasma froid et raréfié (modèle de l'ionosphère ou d'un milieu interstellaire). 

Le plasma est assimilé à un gaz neutre en moyenne, constitué d'ions fixes (en raison de leur grande masse par rapport aux électrons) de charge positive, et d'électrons de masse $m$ et de charge $-e$ ($e > 0$), libres de se déplacer sous l'action du champ électrique de l'onde. La densité volumique d'électrons est notée $n_0$. 

On néglige les collisions entre les électrons et les ions, ainsi que l'influence du champ magnétique de l'onde sur les électrons (approximation des faibles champs, où la vitesse des électrons reste très inférieure à la vitesse de la lumière $c$).

---

## II. Questions

1. **Cinématique et dynamique électronique :** À l'aide du PFD appliqué à un électron soumis au champ électrique de l'onde $\vec{E}(z,t) = E_0 \cos(\omega t - k z) \vec{e}_x$, établir l'équation différentielle régissant sa vitesse $\vec{v}(z,t) = v(z,t)\vec{e}_x$. En déduire l'expression de la vitesse complexe $\underline{v}$ sous l'écriture phasorienne en notation complexe.
2. **Vecteur densité de courant :** Exprimer la densité volumique de courant $\vec{j}$ en fonction de $n_0$, $e$ et $\underline{v}$. En déduire la relation entre $\underline{j}$ et le champ électrique complexe $\underline{E}$ sous la forme $\underline{j} = \sigma_0 \underline{E}$, où $\sigma_0$ est une conductivité complexe à préciser.
3. **Équations de Maxwell et équation de dispersion :** À partir des équations de Maxwell dans le milieu (sans charges libres macroscopiques autres que celles du plasma, et sans aimantation macroscopique $\mu = \mu_0$), établir l'équation d'onde vérifiée par $\underline{E}$. En déduire la relation de dispersion liant $k$, $\omega$ et la pulsation plasma $\omega_p = \sqrt{\frac{n_0 e^2}{m \varepsilon_0}}$.
4. **Étude de la propagation et analyse énergétique :** Discuter de la nature de la propagation selon la valeur de $\omega$ devant $\omega_p$. Définir la vitesse de phase $v_\phi$ et la vitesse de groupe $v_g$, et calculer leur produit $v_\phi v_g$. Conclure quant au transport d'information.
5. **Analyse critique du modèle :** 
   - Le modèle utilisé néglige les collisions électron-ion (fréquence de collision $\nu$). Justifier qualitativement l'apparition d'un terme d'amortissement et préciser dans quel domaine de fréquence le modèle sans collision cesse d'être valable.
   - Discuter de la validité de l'approximation $v \ll c$ (champ magnétique négligeable devant le champ électrique).

---

## III. Pistes

* **Question 1 :** Projeter le PFD sur l'axe $\vec{e}_x$. Pour la notation complexe, poser $\underline{E}(z,t) = \underline{E}_0 e^{j(\omega t - kz)}$ et $\underline{v}(z,t) = \underline{v}_0 e^{j(\omega t - kz)}$.
* **Question 2 :** La densité de courant microscopique est reliée au déplacement des porteurs de charge par $\vec{j} = -n_0 e \vec{v}$. Identifiez le terme de conductivité $\sigma_0(\omega)$.
* **Question 3 :** Utilisez l'équation de Maxwell-Ampère et l'équation de Maxwell-Faraday. Le fait que $\vec{j}$ dépende de $\underline{E}$ revient à introduire une permittivité relative effective $\varepsilon_r(\omega)$.
* **Question 4 :** Calculez $k(\omega)$. Si $k$ est imaginaire pur, l'onde est évanescente. Si $k$ est réel, elle se propage. Le produit $v_\phi v_g$ se déduit de $v_\phi = \frac{\omega}{k}$ et $v_g = \frac{\partial \omega}{\partial k}$.
* **Question 5 :** Pensez à l'ordre de grandeur de l'énergie cinétique des électrons face à leur énergie de repos, et à l'effet de la force magnétique $\vec{v} \wedge \vec{B}$ par rapport à la force électrique $-e\vec{E}$.

---

## IV. Corrigé pas à pas

### 1. Dynamique de l'électron
Dans le cadre de l'approximation des électrons quasi-libres (on néglige l'agitation thermique et les collisions), le Principe Fondamental de la Dynamique appliqué à un électron s'écrit :
$$m \frac{\partial \vec{v}}{\partial t} = -e \vec{E}$$
En notation complexe, avec $\underline{\vec{E}}(z,t) = \underline{E}_0 e^{j(\omega t - kz)} \vec{e}_x$ et $\underline{\vec{v}} = \underline{v}_0 e^{j(\omega t - kz)} \vec{e}_x$ :
$$j m \omega \underline{v} = -e \underline{E} \implies \underline{v} = -\frac{e}{j m \omega} \underline{E}$$

### 2. Densité de courant
La densité volumique de courant associée au mouvement d'ensemble des électrons est :
$$\underline{\vec{j}} = -n_0 e \underline{\vec{v}} = \frac{n_0 e^2}{j m \omega} \underline{\vec{E}}$$
On identifie la relation $\underline{\vec{j}} = \sigma_0 \underline{\vec{E}}$ avec une conductivité complexe :
$$\sigma_0(\omega) = \frac{n_0 e^2}{j m \omega} = -j \frac{\varepsilon_0 \omega_p^2}{\omega}$$
en posant la pulsation plasma $\omega_p = \sqrt{\frac{n_0 e^2}{m \varepsilon_0}}$.

### 3. Équations de Maxwell et relation de dispersion
Les équations de Maxwell dans le milieu s'écrivent (en régime harmonique) :
- $\text{rot} \, \underline{\vec{E}} = -j \omega \underline{\vec{B}}$ (Maxwell-Faraday)
- $\text{rot} \, \underline{\vec{B}} = \mu_0 \underline{\vec{j}} + j \mu_0 \varepsilon_0 \omega \underline{\vec{E}}$ (Maxwell-Ampère)

En appliquant le rotationnel à Maxwell-Faraday et en injectant Maxwell-Ampère, et sachant que $\text{div} \, \underline{\vec{E}} = 0$ (onde transversale pure dans un milieu homogène) :
$$\Delta \underline{\vec{E}} + \omega^2 \mu_0 \varepsilon_0 \left(1 + \frac{\sigma_0}{j \varepsilon_0 \omega}\right) \underline{\vec{E}} = \vec{0}$$
En remplaçant $\sigma_0$ :
$$\Delta \underline{\vec{E}} + \frac{\omega^2}{c^2} \left(1 - \frac{\^2}{\omega^2}\right) \underline{\vec{E}} = \vec{0}$$
Pour une onde plane se propageant selon $z$, $\Delta \underline{\vec{E}} = -k^2 \underline{\vec{E}}$. On en déduit la **relation de dispersion** :
$$k^2 = \frac{\omega^2}{c^2} \left(1 - \frac{\omega_p^2}{\omega^2}\right) \implies k(\omega) = \frac{1}{c} \sqrt{\omega^2 - \omega_p^2}$$

### 4. Étude de la propagation et vitesses
- **Si $\omega < \omega_p$ :** $k^2 < 0$, donc $k$ est imaginaire pur ($k = \pm j |k|$). L'onde ne se propage pas, elle est **évanescente** (atténuée de manière exponentielle dans le milieu). Le plasma se comporte comme un miroir.
- **Si $\omega > \omega_p$ :** $k$ est réel. L'onde se propage sans atténuation.

Calcul des vitesses :
- Vitesse de phase : $v_\phi = \frac{\omega}{k} = \frac{c}{\sqrt{1 - \omega_p^2/\omega^2}}$
- Vitesse de groupe : $v_g = \frac{\partial \omega}{\partial k} = \left(\frac{dk}{d\omega}\right)^{-1} = c \sqrt{1 - \frac{\omega_p^2}{\omega^2}}$

On remarque immédiatement que :
$$v_\phi v_g = c^2$$
*Analyse critique :* Puisque $v_\phi > c$, la vitesse de phase dépasse la vitesse de la lumière dans le vide, ce qui ne contredit pas la relativité restreinte car aucun signal (porteur d'information) ne se déplace à la vitesse de phase, mais à la vitesse de groupe $v_g$. Or, on a bien $v_g < c$, ce qui est physiquement cohérent.

### 5. Analyse critique et limites du modèle

* **Limites du modèle sans collisions :** 
  En réalité, les électrons subissent des chocs (fréquence $\nu$) avec les ions lourds ou les neutres. Cela se traduit par un terme de frottement visqueux $-m \nu \vec{v}$ dans le PFD. La conductivité devient réelle et finie à basse fréquence ($\sigma_0 \approx \frac{n_0 e^2}{m \nu}$). Le modèle idéal sans collision surestime la transparence du plasma pour $\omega \to \omega_p$ et néglige l'absorption ohmique (dissipation par effet Joule). Le modèle cesse d'être valable lorsque $\omega \sim \nu$ ou pour des milieux denses (comme l'ionosphère basse).

* **Limites de l'approximation des faibles champs (champ magnétique négligé) :**
  La force magnétique s'exerçant sur l'électron est $\vec{f}_m = -e(\vec{v} \wedge \vec{B})$. En ordre de grandeur, $B \sim \frac{E}{c}$ pour une onde électromagnétique. Le rapport des forces est donc de l'ordre de $\frac{v}{c}$. 
  Si l'amplitude du champ électrique est très grande (cas des lasers ultra-intenses modernes), la vitesse $v$ devient du même ordre que $c$. Les électrons sont alors animés de mouvements relativistes et le champ magnétique de l'onde induit une force de Lorentz non négligeable qui courbe les trajectoires (génération d'harmoniques, effet Ponderomotrice), invalidant l'équation linéaire du mouvement utilisée ici.