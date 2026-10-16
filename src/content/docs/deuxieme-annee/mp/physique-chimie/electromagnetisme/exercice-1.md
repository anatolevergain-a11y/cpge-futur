---
title: 'Exercice 1 : Équations de Maxwell'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un plasma froid non magnétisé et limites du modèle macroscopique

## Énoncé

Le but de ce problème est d'étudier la propagation d'ondes électromagnétiques dans un plasma raréfié (ionosphère par exemple), modélisé comme un gaz neutre en moyenne constitué d'ions fixes (en raison de leur grande masse) et d'électrons libres de masse $m$ et de charge $q = -e$ ($e > 0$). On s'intéresse à l'influence de ce milieu sur la propagation des signaux hertziens et à la rigueur de la modélisation macroscopique associée.

Le plasma est caractérisé à l'échelle macroscopique par une densité volumique de charge nulle ($\rho = 0$) et une densité volumique de courant $\vec{j}(\vec{r}, t) = -n_0 e \vec{v}(\vec{r}, t)$, où $n_0$ est la densité volumique moyenne des électrons et $\vec{v}(\vec{r}, t)$ leur vitesse moyenne d'agitation sous l'effet du champ électromagnétique. On note $\varepsilon_0$ la permittivité diélectrique du vide et $\mu_0$ sa perméabilité magnétique.

---

## Questions

### Partie I : Établissement du modèle et équation de propagation
1. Rappeler les équations de Maxwell locales dans le vide en présence de charges et de courants macroscopiques.
2. En négligeant l'agitation thermique des électrons et les forces magnétiques devant les forces électriques (approximation des petits mouvements et ondes non relativistes), écrire l'équation du mouvement d'un électron soumis au champ électrique $\vec{E}$ de l'onde.
3. En déduire une relation vectorielle liant la dérivée temporelle du vecteur densité de courant $\vec{j}$ au champ électrique $\vec{E}$.
4. En combinant les équations de Maxwell et la relation précédente, établir l'équation de propagation vérifiée par le champ électrique $\vec{E}$ sous la forme :
   $$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \mu_0 \sigma_0 \frac{\partial \vec{E}}{\partial t}$$
   ou exprimer le terme source en fonction d'une pulsation caractéristique du plasma, notée $\omega_p$ (pulsation plasma), que l'on précisera.

### Partie II : Étude dispersive et analyse critique
5. On cherche une solution sous forme d'onde plane harmonique polarisée rectilignement : 
   $$\vec{E}(\vec{r}, t) = E_0 \exp[i(\omega t - \vec{k}\cdot\vec{r})] \vec{u}_x$$
   Injecter cette expression dans l'équation de propagation et obtenir la relation de dispersion du milieu liant $\omega$ et $k = \|\vec{k}\|$.
6. Tracer l'allure de la fonction $\omega(k)$. Mettre en évidence la notion de fréquence de coupure. Que se passe-t-il pour les ondes de fréquence $\omega < \omega_p$ ?
7. **Analyse critique et rigueur du modèle :** 
   - Discuter l'hypothèse d'isorépartition et de champ magnétique négligeable ($\vec{v} \land \vec{B}$ devant $\vec{E}$). Quelle est l'condition sur l'amplitude du champ électrique pour que ce modèle linéaire reste valide ?
   - Le milieu est-il réellement continu ? Justifier l'utilisation d'une description macroscopique (équations de Maxwell moyennées) face à la nature microscopique (discrète) du plasma.

---

## Pistes et indications

* **Piste 1 (Q2) :** Appliquez le PFD (Principe Fondamental de la Dynamique) à un électron isolé dans le référentiel galiléen du laboratoire.
* **Piste 2 (Q4) :** Utilisez l'opérateur rotationnel appliqué au rotationnel du champ électrique ($\text{rot}(\text{rot}\vec{E}) = \text{grad}(\text{div}\vec{E}) - \Delta \vec{E}$) couplé aux équations de Maxwell-Faraday et Maxwell-Ampère.
* **Piste 3 (Q7) :** Pensez à comparer la vitesse induite des électrons devant la vitesse de la lumière $c$, et comparez la longueur d'onde de l'onde à la distance interparticulaire moyenne ($\approx n_0^{-1/3}$).

---

## Corrigé pas à pas

### Partie I

**1. Équations de Maxwell locales :**
Les équations de Maxwell dans le vide en présence de sources macroscopiques ($\rho$ et $\vec{j}$) s'écrivent :
* Maxwell-Gauss : $\text{div}\vec{E} = \frac{\rho}{\varepsilon_0}$
* Maxwell-Flux : $\text{div}\vec{B} = 0$
* Maxwell-Faraday : $\text{rot}\vec{E} = -\frac{\partial \vec{B}}{\partial t}$
* Maxwell-Ampère : $\text{rot}\vec{B} = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$

**2. Équation du mouvement de l'électron :**
Pour un électron de charge $q = -e$ et de masse $m$, le PFD s'écrit :
$$m \frac{\partial \vec{v}}{\partial t} = -e (\vec{E} + \vec{v} \land \vec{B})$$
Dans le cadre de l'approximation des ondes non relativistes et des faibles perturbations, le terme magnétique $\vec{v} \land \vec{B}$ est de l'ordre de $v/c$ devant le terme électrique (en ordre de grandeur $E \sim cB$). On le néglige donc devant $\vec{E}$. Il vient :
$$m \frac{\partial \vec{v}}{\partial t} = -e \vec{E}$$

**3. Lien entre $\vec{j}$ et $\vec{E}$ :**
Par définition, la densité de courant est $\vec{j} = -n_e e \vec{v}$ (avec $n_e \approx n_0$ la densité moyenne). En dérivant par rapport au temps et en injectant le PFD :
$$\frac{\partial \vec{j}}{\partial t} = -n_0 e \frac{\partial \vec{v}}{\partial t} = -n_0 e \left(-\frac{e}{m} \vec{E}\right) = \frac{n_0 e^2}{m} \vec{E}$$

**4. Équation de propagation :**
Appliquons l'opérateur rotationnel à l'équation de Maxwell-Faraday :
$$\text{rot}(\text{rot}\vec{E}) = \text{grad}(\text{div}\vec{E}) - \Delta \vec{E} = -\frac{\partial}{\partial t}(\text{rot}\vec{B})$$
Puisque le plasma est globalement neutre ($\rho = 0$), Maxwell-Gauss donne $\text{div}\vec{E} = 0$. En remplaçant $\text{rot}\vec{B}$ par l'équation de Maxwell-Ampère :
$$-\Delta \vec{E} = -\frac{\partial}{\partial t} \left( \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \right) = -\mu_0 \frac{\partial \vec{j}}{\partial t} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$
En injectant la relation $\frac{\partial \vec{j}}{\partial t} = \frac{n_0 e^2}{m} \vec{E}$, on obtient :
$$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \mu_0 \frac{n_0 e^2}{m} \vec{E}$$
En posant **la pulsation plasma** $\omega_p = \sqrt{\frac{n_0 e^2}{m \varepsilon_0}}$, l'équation se réécrit sous la forme type demandée (avec $\mu_0 \varepsilon_0 = \frac{1}{c^2}$) :
$$\Delta \vec{E} - \frac{1}{c^2} \frac{\partial^2 \vec{E}}{\partial t^2} = \frac{\omega_p^2}{c^2} \vec{E}$$

---

### Partie II

**5. Relation de dispersion :**
Pour l'onde plane $\vec{E} = E_0 e^{i(\omega t - \vec{k}\cdot\vec{x})} \vec{u}_x$, les opérateurs différentiels se traduisent par :
* $\Delta \vec{E} \rightarrow -k^2 \vec{E}$
* $\frac{\partial^2 \vec{E}}{\partial t^2} \rightarrow -\omega^2 \vec{E}$

L'équation de propagation devient :
$$-k^2 \vec{E} - \frac{1}{c^2}(-\omega^2 \vec{E}) = \frac{\omega_p^2}{c^2} \vec{E}$$
En simplifiant par $\vec{E}$ (non nul), on obtient la **relation de dispersion** :
$$k^2 = \frac{\omega^2 - \omega_p^2}{c^2} \quad \Longleftrightarrow \quad \omega^2 = \omega_p^2 + c^2 k^2$$

**6. Allure et interprétation :**
La courbe $\omega(k)$ est une branche d'hyperbole démarrant en $k=0$ pour $\omega = \omega_p$.
* **Si $\omega < \omega_p$ :** $k^2 < 0$, donc $k$ est pur imaginaire ($k = i \alpha$ avec $\alpha \in \mathbb{R}$). L'onde ne se propage pas, elle est évanescente : le champ est amorti exponentiellement dans le plasma. Le milieu est opaque.
* **Si $\omega > \omega_p$ :** $k$ est réel, l'onde se propage avec une vitesse de phase $v_\varphi = \frac{\omega}{k} = \frac{c}{\sqrt{1 - \omega_p^2/\omega^2}} > c$. Le milieu est transparent. $\omega_p$ est bien une **fréquence de coupure**.

**7. Analyse critique et limites du modèle :**
* **Validité du champ magnétique négligé :** L'amplitude de la vitesse des électrons est de l'ordre de $v \sim \frac{e E}{m \omega}$. Le champ magnétique de l'onde vérifie $B \sim \frac{E}{c}$. Le rapport des forces est donc $\frac{e v B}{e E} \sim \frac{v}{c} \sim \frac{e E}{m \omega c}$. Pour que le modèle linéaire soit valide, il faut impérativement que ce rapport soit très inférieur à $1$, soit $E \ll \frac{m \omega c}{e}$. Si le champ laser ou l'onde est de forte amplitude, les effets non linéaires (termes en $\vec{v} \land \vec{B}$ et harmoniques supérieurs) deviennent prépondérants.
* **Continuum macroscopique vs discontinuité microscopique :** Le modèle utilise des champs continus ($\vec{E}, \vec{j}$) et une densité moyenne $n_0$. Cette description macroscopique n'a de sens que si le volume élémentaire dS contient un grand nombre d'électrons, et si les variations spatiales du champ électromagnétique se font sur des distances $L$ (par exemple la longueur d'onde $\lambda = 2\pi/k$) très grandes devant la distance interparticulaire moyenne $d \approx n_0^{-1/3}$ (paramètre de plasma $\Lambda = n_0 \lambda_D^3 \gg 1$). Si la longueur d'onde devient du même ordre de grandeur que la distance interparticulaire, la description fluide échoue et il faut recourir à une description statistique microscopique (équation de Vlasov).