---
title: 'Exercice 1 : Effet photoélectrique et relation de de Broglie'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'objectif de ce problème est d'étudier l'interaction d'un rayonnement électromagnétique avec une surface métallique (effet photoélectrique) et de faire le lien avec la description ondulatoire de la matière introduite par Louis de Broglie. 

On s'intéresse à une plaque de césium (métal dont le travail de sortie est noté $W$) éclairée par un faisceau lumineux monochromatique de longueur d'onde dans le vide $\lambda$. Les électrons ainsi extraits du métal sont appelés photoélectrons. Dans un second temps, on étudie les propriétés ondulatoires de ces électrons accélérés par une différence de potentiel.

*Données numériques et constantes fondamentales :*
- Vitesse de la lumière dans le vide : $c = 3{,}00 \times 10^8 \; \text{m}\cdot\text{s}^{-1}$
- Constante de Planck : $h = 6{,}626 \times 10^{-34} \; \text{J}\cdot\text{s}$
- Masse de l'électron : $m = 9{,}10 \times 10^{-31} \; \text{kg}$
- Charge élémentaire : $e = 1{,}60 \times 10^{-19} \; \text{C}$
- Travail de sortie du césium : $W = 2{,}14 \; \text{eV}$

---

### ❓ Questions progressives

1. **Établissement du bilan énergétique :** Établir l'expression de l'énergie cinétique maximale $E_{c,\text{max}}$ d'un photoélectron émis en fonction de la fréquence $\nu$ de la lumière incidente, de la constante de Planck $h$ et du travail de sortie $W$. En déduire la longueur d'onde seuil $\lambda_s$ au-delà de laquelle aucun électron n'est émis. Faire l'application numérique pour $\lambda_s$.
2. **Mise en place d'un potentiel d'arrêt :** On éclaire le césium avec une lumière de longueur d'onde $\lambda = 400 \; \text{nm}$. Pour stopper le courant de photoélectrons, on applique une tension négative $U_a$ (potentiel d'arrêt) entre la cathode (plaque de césium) et une anode collectrice. Exprimer puis calculer la valeur de $U_a$.
3. **Hypothèse de de Broglie :** Rappeler la relation de de Broglie associant une longueur d'onde $\lambda_{\text{dB}}$ à une particule massive de quantité de mouvement $p$. 
4. **Application aux photoélectrons :** Les photoélectrons émis avec l'énergie cinétique maximale précédente sont maintenant accélérés par une différence de potentiel $U_0 = 100 \; \text{V}$. Calculer leur longueur d'onde de de Broglie $\lambda_{\text{dB}}$. Conclure quant à l'observabilité d'effets de diffraction pour ces électrons traversant un réseau cristallin dont le pas est de l'ordre du nanomètre.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez la conservation de l'énergie lors de l'absorption d'un photon unique par un électron lié. Le seuil correspond à une énergie cinétique maximale nulle.
* **Question 2 :** Le potentiel d'arrêt est le potentiel minimal qu'il faut appliquer pour repousser *tous* les électrons, y compris ceux qui sortent avec l'énergie cinétique maximale. Appliquez le théorème de l'énergie cinétique ou un bilan énergétique.
* **Question 3 :** Attention aux notations et aux domaines de valadité (relation relativiste ou classique ? Vérifiez l'ordre de grandeur de l'énergie cinétique devant l'énergie de masse $mc^2$).
* **Question 4 :** Calculez d'abord l'énergie cinétique finale après accélération, puis déduisez-en la quantité de mouvement avant d'appliquer la formule de de Broglie.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Bilan énergétique de l'effet photoélectrique et longueur d'onde seuil
Lors de l'effet photoélectrique, un électron du métal absorbe un unique photon d'énergie $E_{\text{photon}} = h\nu = \frac{hc}{\lambda}$. 
Pour s'extraire du métal, l'électron doit fournir un travail minimal $W$. L'énergie cinétique maximale avec laquelle il émerge est donc donnée par la relation d'Einstein :
$$E_{c,\text{max}} = h\nu - W = \frac{hc}{\lambda} - W$$

L'émission photoélectrique n'est possible que si $E_{c,\text{max}} \ge 0$, c'est-à-dire si $\frac{hc}{\lambda} \ge W$, soit $\lambda \le \frac{hc}{W}$.
La longueur d'onde seuil $\lambda_s$ est donc :
$$\lambda_s = \frac{hc}{W}$$

*Application numérique :*
Convertissons d'abord $W$ en Joules : 
$$W = 2{,}14 \times 1{,}60 \times 10^{-19} = 3{,}424 \times 10^{-19} \; \text{J}$$
$$\lambda_s = \frac{6{,}626 \times 10^{-34} \times 3{,}00 \times 10^8}{3{,}424 \times 10^{-19}} \approx 5{,}81 \times 10^{-7} \; \text{m} = 581 \; \text{nm}$$

---

#### 2. Calcul du potentiel d'arrêt $U_a$
Le potentiel d'arrêt $U_a$ est la tension négative qu'il faut appliquer pour annuler le courant. Un électron émis avec l'énergie cinétique maximale $E_{c,\text{max}}$ est stoppé si le travail de la force électrostatique parvient à annuler son énergie cinétique :
$$-e U_a = -E_{c,\text{max}} \implies e U_a = E_{c,\text{max}}$$
Soit :
$$U_a = \frac{hc}{e\lambda} - \frac{W}{e}$$

*Application numérique pour $\lambda = 400 \; \text{nm}$ :*
- Calcul de l'énergie du photon en eV : 
  $$E_{\text{photon}} = \frac{hc}{e\lambda} = \frac{6{,}626 \times 10^{-34} \times 3{,}00 \times 10^8}{1{,}60 \times 10^{-19} \times 400 \times 10^{-9}} \approx 3{,}106 \; \text{eV}$$
- En déduire $E_{c,\text{max}}$ :
  $$E_{c,\text{max}} = 3{,}106 - 2{,}14 = 0{,}966 \; \text{eV}$$
- Le potentiel d'arrêt vaut donc :
  $$U_a = 0{,}966 \; \text{V}$$

---

#### 3. Rappel de la relation de de Broglie
Louis de Broglie a postulé en 1923 que toute particule de quantité de mouvement $p$ est associée à une onde de longueur d'onde $\lambda_{\text{dB}}$ telle que :
$$\lambda_{\text{dB}} = \frac{h}{p}$$

---

#### 4. Application aux photoélectrons accélérés et conclusion
L'énergie cinétique initiale maximale des électrons est $E_{ci} = E_{c,\text{max}} \approx 0{,}966 \; \text{eV}$. 
Ils sont ensuite accélérés par une tension $U_0 = 100 \; \text{V}$. Leur nouvelle énergie cinétique $E_{cf}$ devient :
$$E_{cf} = E_{ci} + eU_0 \approx 0{,}966 \; \text{eV} + 100 \; \text{eV} = 100{,}966 \; \text{eV}$$
*(Remarque : $100 \; \text{eV} \ll mc^2 \approx 511 \; \text{keV}$, l'approximation classique est amplement justifiée).*

L'énergie cinétique s'écrit $E_{cf} = \frac{p^2}{2m}$, d'où la quantité de mouvement :
$$p = \sqrt{2m E_{cf}}$$

La longueur d'onde de de Broglie est donc :
$$\lambda_{\text{dB}} = \frac{h}{\sqrt{2m E_{cf}}}$$

*Application numérique :*
Convertissons $E_{cf}$ en Joules :
$$E_{cf} = 100{,}966 \times 1{,}60 \times 10^{-19} = 1{,}615 \times 10^{-17} \; \text{J}$$
$$\lambda_{\text{dB}} = \frac{6{,}626 \times 10^{-34}}{\sqrt{2 \times 9{,}10 \times 10^{-31} \times 1{,}615 \times 10^{-17}}}$$
$$\lambda_{\text{dB}} \approx \frac{6{,}626 \times 10^{-34}}{5{,}419 \times 10^{-24}} \approx 1{,}22 \times 10^{-10} \; \text{m} = 0{,}122 \; \text{nm}$$
Conclusion: * 
La longueur d'onde de de Broglie obtenue ($\approx 0{,}12 \; \text{nm}$) est du même ordre de grandeur que les distances interatomiques dans un cristal ($\sim 0{,}2 - 0{,}5 \; \text{nm}$). Par conséquent, ces électrons pourront aisément mettre en évidence des **phénomènes de diffraction** (comme dans l'expérience de Davisson et Germer), validant ainsi le caractère ondulatoire de la matière dans ce domaine d'énergie.