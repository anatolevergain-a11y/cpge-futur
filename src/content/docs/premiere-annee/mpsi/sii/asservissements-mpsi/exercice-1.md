---
title: 'Exercice 1 : Fonction de transfert et schémas-blocs'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les systèmes asservis continus et linéaires sont omniprésents dans l'industrie pour réguler des grandeurs physiques (vitesse, position, température). Ce problème s'intéresse à la modélisation et à l'analyse dynamique d'un système électromécanique asservi en position, tel qu'on le rencontre dans les axes d'usinage des machines-outils à commande numérique.

Le système étudié est constitué de :
1. D'un amplificateur de tension de gain $K_a$ ($\text{V}\cdot\text{V}^{-1}$).
2. D'un moteur à courant continu (MCC) à aimants permanents. La tension aux bornes de l'induit est $u(t)$, le courant d'induit est $i(t)$, et la vitesse de rotation de l'arbre est $\omega(t)$. On négligera l'inductance de l'induit devant sa résistance $R$. Le couple moteur est $C_m(t) = K_m i(t)$ et la f.é.m. est $e(t) = K_e \omega(t)$. Les constantes $K_m$ et $K_e sont égales à une même constante $K$ dans le système d'unités internationales.
3. D'un réducteur mécanique parfait de rapport de réduction $k_r = \frac{\theta_s(t)}{\theta_m(t)}$, où $\theta_m(t)$ est la position de l'arbre moteur et $\theta_s(t)$ la position de la charge en sortie.
4. D'une charge mécanique inertielle et visqueuse, caractérisée par un moment d'inertie ramené sur l'arbre moteur $J$ et un coefficient de frottement visqueux $f$. Le couple perturbateur extérieur est noté $C_p(t)$.

L'objectif est d'établir la fonction de transfert en boucle ouverte, puis en boucle fermée du système asservi en position, et d'étudier sa dynamique temporelle et fréquentielle.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Modélisation du moteur et de la charge**
   En écrivant les équations électriques et mécaniques du système dans le domaine temporel, déterminer les relations liant $U(p)$, $I(p)$, $\Omega(p)$ et $C_m(p)$ en notation de Laplace (conditions initiales nulles). En déduire la fonction de transfert $H_m(p) = \frac{\Omega(p)}{U(p)}$ sous réserve que le couple perturbateur $C_p(p)$ soit nul.

2. **Schéma-blocs élémentaire**
   Exprimer $H_m(p)$ sous la forme canonique d'un système du premier ordre (ou d'un second ordre selon l'inertie, en justifiant l'approximation) en faisant apparaître un gain statique $K_v$ et une constante de temps $\tau$.

3. **Bouclage et fonction de transfert en boucle fermée (FTBF)**
   On associe au moteur un capteur de position de fonction de transfert $H_c(p) = K_c$ ($\text{rad}^{-1}\cdot\text{V}$) et un comparateur. Le correcteur est un simple amplificateur de gain $K_c$. 
   Tracer le schéma-blocs global du système asservi en position avec consigne $\Theta_{con}(p)$, sortie $\Theta_s(p)$ et perturbation $C_p(p)$.
   Déterminer l'expression de la fonction de transfert en boucle fermée $H_{BF}(p) = \frac{\Theta_s(p)}{\Theta_{con}(p)}$ lorsque $C_p(p) = 0$.

4. **Analyse dynamique et performance**
   Mettre $H_{BF}(p)$ sous la forme canonique d'un système du deuxième ordre :
   $$H_{BF}(p) = \frac{K_{bf}}{\frac{p^2}{\omega_0^2} + \frac{2z}{\omega_0}p + 1}$$
   Identifier l'expression de la pulsation propre non amortie $\omega_0$ et du facteur d'amortissement $z$ en fonction des paramètres du système.

5. **Analyse critique du modèle**
   Le modèle linéaire invariant (SLI) utilisé néglige l'inductance $L$ de l'induit du moteur, les frottements secs et les jeux mécaniques dans le réducteur. Discuter brièvement de l'impact de l'oubli de l'inductance $L$ sur la validité du modèle à haute fréquence.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Écrire la loi des mailles pour l'induit ($U = RI + E$) et le principe fondamental de la dynamique en rotation pour l'ensemble moteur + charge ($J \frac{d\omega}{dt} = C_m - f\omega - C_p$). Appliquer la transformation de Laplace avec des conditions initiales nulles.
- **Question 2 :** Mettre l'expression obtenue sous la forme $K / (1 + \tau p)$ en identifiant clairement $K$ et $\tau$.
- **Question 3 :** Rappeler la formule de Mason ou faire la réduction pas à pas du schéma-blocs. Attention à bien propager le réducteur $k_r$ entre la vitesse/position moteur et la position de sortie.
- **Question 4 :** Par identification polynomiale entre le dénominateur de la FTBF calculée et le polynôme caractéristique canonique $1 + \frac{2z}{\omega_0}p + \frac{p^2}{\omega_0^2}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Modélisation du moteur et de la charge

Les équations régissant le comportement du moteur à courant continu et de la charge sont :
- Loi électrique dans l'induit :
  $$u(t) = R \cdot i(t) + e(t)$$
  Avec $e(t) = K \cdot \omega(t)$. En transformée de Laplace :
  $$U(p) = R \cdot I(p) + K \cdot \Omega(p)$$

- Équation mécanique (P.F.D. en rotation sur l'arbre) :
  $$J \frac{d\omega(t)}{dt} = C_m(t) - f \cdot \omega(t) - c_p(t)$$
  Avec $C_m(t) = K \cdot i(t)$. En transformée de Laplace :
  $$J p \Omega(p) = K \cdot I(p) - f \cdot \Omega(p) - C_p(p)$$

En exprimant $I(p)$ à partir de l'équation électrique :
$$I(p) = \frac{U(p) - K \cdot \Omega(p)}{R}$$

Que l'on réinjecte dans l'équation mécanique (en posant $C_p(p) = 0$) :
$$J p \Omega(p) = K \left( \frac{U(p) - K \cdot \Omega(p)}{R} \right) - f \cdot \Omega(p)$$

$$\left( (f + \frac{K^2}{R}) + J p \right) \Omega(p) = \frac{K}{R} U(p)$$

On en déduit la fonction de transfert $H_m(p) = \frac{\Omega(p)}{U(p)}$ :
$$H_m(p) = \frac{\frac{K}{R(f + \frac{K^2}{R})}}{1 + \frac{J}{f + \frac{K^2}{R}} p} = \frac{K_m}{1 + \tau_m p}$$

Avec :
- Le gain statique du moteur : $K_m = \frac{K}{R \cdot f + K^2}$ ($\text{rad}\cdot\text{s}^{-1}\cdot\text{V}^{-1}$)
- La constante de temps électromécanique : $\tau_m = \frac{J \cdot R}{R \cdot f + K^2}$ ($\text{s}$)

#### 2. Passage de la vitesse à la position

La vitesse de rotation de l'arbre moteur est $\omega_m(t) = \frac{d\theta_m(t)}{dt}$, soit en Laplace $\Omega_m(p) = p \Theta_m(p)$.
La position de sortie est $\theta_s(t) = k_r \theta_m(t)$, soit $\Theta_s(p) = k_r \Theta_m(p)$.
La fonction de transfert globale du bloc moteur-charge reliant la tension $U(p)$ à la position de sortie $\Theta_s(p)$ (sans perturbation) est donc :
$$H_{tot}(p) = \frac{\Theta_s(p)}{U(p)} = k_r \cdot \frac{1}{p} \cdot H_m(p) = \frac{k_r K_m}{p(1 + \tau_m p)}$$
C'est un système de type 1 (présence d'un intégrateur pur $1/p$).

#### 3. Bouclage et fonction de transfert en boucle fermée (FTBF)

Le système est asservi : la consigne $\Theta_{con}(p)$ est comparée à la mesure $\Theta_{mes}(p) = H_c(p)\Theta_s(p) = K_c \Theta_s(p)$.
L'écart est $E(p) = \Theta_{con}(p) - K_c \Theta_s(p)$.
Cet écart est amplifié par le correcteur $K_a$ pour donner la tension de commande : $U(p) = K_a E(p)$.

La fonction de transfert en boucle ouverte (FTBO) est :
$$\text{FTBO}(p) = \frac{K_a k_r K_m K_c}{p(1 + \tau_m p)}$$

La fonction de transfert en boucle fermée $H_{BF}(p) = \frac{\Theta_s(p)}{\Theta_{con}(p)}$ s'obtient par la formule de Black :
$$H_{BF}(p) = \frac{\frac{\text{FTBO}(p)}{K_c}}{1 + \text{FTBO}(p)} = \frac{\frac{K_a k_r K_m}{p(1 + \tau_m p)}}{1 + \frac{K_a k_r K_m K_c}{p(1 + \tau_m p)}} = \frac{K_a k_r K_m}{p(1 + \tau_m p) + K_a k_r K_m K_c}$$

En développant le dénominateur :
$$H_{BF}(p) = \frac{K_a k_r K_m}{\tau_m p^2 + p + K_a k_r K_m K_c}$$

#### 4. Analyse dynamique et performance

Mettons $H_{BF}(p)$ sous la forme canonique d'un second ordre :
$$H_{BF}(p) = \frac{\frac{1}{K_c}}{\frac{\tau_m}{K_a k_r K_m K_c} p^2 + \frac{1}{K_a k_r K_m K_c} p + 1}$$

Par identification avec la forme canonique $H(p) = \frac{K_{bf}}{\frac{p^2}{\omega_0^2} + \frac{2z}{\omega_0}p + 1}$ :
- Le gain statique en boucle fermée : $K_{bf} = \frac{1}{K_c}$
- La pulsation propre non amortie $\omega_0$ :
  $$\frac{1}{\omega_0^2} = \frac{\tau_m}{K_a k_r K_m K_c} \implies \omega_0 = \sqrt{\frac{K_a k_r K_m K_c}{\tau_m}}$$
- Le facteur d'amortissement $z$ :
  $$\frac{2z}{\omega_0} = \frac{1}{K_a k_r K_m K_c} \implies z = \frac{1}{2 \sqrt{K_a k_r K_m K_c \tau_m}}$$

#### 5. Analyse critique du modèle

*Hypothèse négligée :* L'inductance de l'induit $L$ a été supposée nulle ($\tau_e = L/R \approx 0$).
*Conséquence physique :* En réalité, l'équation électrique s'écrit $U(p) = (R + L p)I(p) + E(p)$. Introduire $L$ rajoute un pôle supplémentaire dans la fonction de transfert du moteur, transformant le modèle du premier ordre en un modèle du **deuxième ordre**.
*Impact à haute fréquence :* À haute fréquence, l'impédance de l'inductance $L\omega$ devient non négligeable devant $R$. Le déphasage introduit par ce pôle supplémentaire réduit les marges de stabilité (marge de phase). Négliger $L$ conduit donc à surestimer la stabilité du système et à obtenir un système réel potentiellement plus oscillant, voire instable, que ne le prévoient les calculs théoriques ci-dessus si le gain $K_a$ est élevé.