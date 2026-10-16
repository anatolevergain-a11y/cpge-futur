---
title: 'Exercice 1 : Schémas-blocs et modélisation par variables d état'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le système étudié est un axe motorisé à courant continu piloté en courant, utilisé pour le positionnement de haute précision d'une charge industrielle. L'objectif de ce problème est d'analyser le comportement dynamique de ce système en combinant deux approches fondamentales de la SI en CPGE : la représentation fréquentielle par schémas-blocs et la représentation temporelle par variables d'état.

Le système est constitué des éléments suivants :
1. **Un convertisseur statique (amplificateur de courant)** : il délivre un courant $i(t)$ proportionnel à la tension de commande $u_c(t)$ avec un gain pur $K_a$ et une dynamique négligeable devant la mécanique.
2. **Un moteur à courant continu (MCC)** à aimants permanents :
   - Résistance d'induit : $R$
   - Inductance d'induit : $L$ (que l'on pourra parfois négliger)
   - Constante de couple : $K_c$
   - Constante de force contre-électromotrice : $K_e$ (avec $K_e = K_c = K$ dans le S.I.)
3. **Une chaîne cinématique et une charge** :
   - Moment d'inertie total ramené sur l'arbre moteur : $J$
   - Coefficient de frottement visqueux : $f$
   - Couple de perturbation extérieur : $C_p(t)$
   - Position angulaire de la charge : $\theta(t)$, vitesse angulaire : $\Omega(t) = \frac{d\theta}{dt}$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

#### Partie I : Modélisation fréquentielle et schéma-blocs
1. Établir les équations électriques et mécaniques régissant le comportement du moteur à courant continu dans le domaine temporel.
2. En appliquant la transformation de Laplace (conditions initiales nulles), donner les fonctions de transfert associées à chaque équation.
3. En déduire le schéma-blocs global du système faisant apparaître la tension de commande $U_c(p)$ et le couple de perturbation $C_p(p)$ en entrées, et la vitesse $\Omega(p)$ en sortie.
4. Par une manipulation algébrique du schéma-blocs (ou par superposition), exprimer la fonction de transfert en boucle ouverte $H_{BO}(p) = \frac{\Omega(p)}{U_e(p)}$ (où $U_e$ est l'entrée équivalente) et mettre la fonction de transfert en boucle fermée sous la forme canonique :
   $$\Omega(p) = K_v \frac{1}{1 + \frac{2\zeta}{\omega_0} p + \frac{1}{\omega_0^2} p^2} U_c(p) + H_p(p) C_p(p)$$
   Exprimer $K_v$, $\zeta$ et $\omega_0$ en fonction des paramètres du système ($R, L, J, f, K, K_a$). On négligera l'inductance $L$ pour la suite de cette partie (simplification en un système du 1er ordre).

#### Partie II : Représentation par variables d'état
5. Choisir un vecteur d'état pertinent $X(t)$ pour ce système en considérant l'inductance $L$ non négligeable. Quel est l'ordre du système ?
6. Écrire les équations différentielles d'état sous la forme matricielle standard :
   $$\dot{X}(t) = A X(t) + B U(t)$$
   $$Y(t) = C X(t) + D U(t)$$
   En précisant les matrices $A$, $B$, $C$ et $D$ pour le vecteur d'état choisi, l'entrée $U(t) = \begin{bmatrix} u_c(t) \\ c_p(t) \end{bmatrix}$ et la sortie $Y(t) = \Omega(t)$.
7. Déterminer la condition de commandabilité du système. Le système est-il commandable dans le cas général ?

#### Partie III : Analyse critique du modèle
8. Discuter des limites de la modélisation proposée : quel impact l'oubli des phénomènes de non-linéarité (comme les frottements secs et le jeu dans les engrenages) a-t-il sur la validité du schéma-blocs et du modèle d'état au voisinage de $\Omega = 0$ ?

---

### 💡 Pistes & Indications méthodologiques

- **Pour la Partie I** : Rappelez la loi des mailles pour l'induit et le principe fondamental de la dynamique (PFD) en rotation pour l'arbre. Pensez à exprimer le couple électromagnétique $C_{em} = K \cdot i$.
- **Pour la Partie II** : Le nombre de variables d'état indépendantes correspond au nombre de儲能 (stockage d'énergie) éléments indépendants. Ici, l'inductance $L$ (énergie magnétique) et l'inertie $J$ (énergie cinétique). Le vecteur d'état sera donc de dimension 2 : $X = \begin{bmatrix} i(t) \\ \Omega(t) \end{bmatrix}^T$.
- **Pour la Partie III** : Pensez aux phénomènes dissipatifs non linéaires (Coulomb) et aux limitations physiques des actionneurs (saturation en tension et en courant).

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Modélisation fréquentielle et schéma-blocs

1. **Équations temporelles du MCC** :
   - Électrique (loi des mailles) : 
     $$u(t) = R \cdot i(t) + L \frac{di(t)}{dt} + e(t)$$
     avec $e(t) = K \cdot \Omega(t)$ (force contre-électromotrice).
   - Électromécanique : 
     $$C_{em}(t) = K \cdot i(t)$$
   - Mécanique (PFD en rotation sur l'axe) :
     $$J \frac{d\Omega(t)}{dt} = C_{em}(t) - f \cdot \Omega(t) - C_p(t)$$

2. **Transformation de Laplace** (avec conditions initiales nulles) :
   - $U(p) - E(p) = (R + L p) I(p)$
   - $C_{em}(p) = K I(p)$
   - $J p \Omega(p) = C_{em}(p) - f \Omega(p) - C_p(p)$
   - $E(p) = K \Omega(p)$

3. **Schéma-blocs global** :
   En assemblant les relations précédentes sous forme de blocs fonctionnels :
   - Entrée amplificateur : $U_c(p) \xrightarrow{\times K_a} U(p)$
   - Boucle de courant : $(U(p) - E(p)) \xrightarrow{\frac{1}{R+Lp}} I(p)$
   - Couple : $I(p) \xrightarrow{\times K} C_{em}(p)$
   - Sommation mécanique : $C_{em}(p) - C_p(p) \xrightarrow{\frac{1}{Jp+f}} \Omega(p)$
   - Rétro-cinématique : $\Omega(p) \xrightarrow{\times K} E(p)$

4. **Mise sous forme canonique (en posant $L \approx 0$)** :
   Si $L = 0$, l'équation électrique devient $U(p) - K\Omega(p) = R I(p)$, soit $I(p) = \frac{U_c(p) K_a - K \Omega(p)}{R}$.
   En injectant dans l'équation mécanique :
   $$(J p + f)\Omega(p) = K \left( \frac{K_a U_c(p) - K \Omega(p)}{R} \right) - C_p(p)$$
   $$\left( J p + f + \frac{K^2}{R} \right) \Omega(p) = \frac{K K_a}{R} U_c(p) - C_p(p)$$
   $$\left( \frac{R J}{R f + K^2} p + 1 \right) \Omega(p) = \frac{K K_a}{R f + K^2} U_c(p) - \frac{R}{R f + K^2} C_p(p)$$
   On identifie une forme de premier ordre $1 + \tau p$ :
   - Gain statique vitesse/commande : $K_v = \frac{K K_a}{R f + K^2} \text{ \left[ rad}\cdot\text{s}^{-1}\cdot\text{V}^{-1} \text{]}$}
   - Constante de temps mécanique globale : $\tau = \frac{R J}{R f + K^2} \text{ \left[ s \right]}$

---

#### Partie II : Représentation par variables d'état

5. **Choix du vecteur d'état** :
   Le système possède deux éléments de stockage d'énergie indépendants (l'inductance $L$ et l'inertie $J$). Le système est donc d'ordre 2. 
   On choisit le vecteur d'état :
   $$X(t) = \begin{bmatrix} i(t) \\ \Omega(t) \end{bmatrix}$$

6. **Établissement des matrices d'état** :
   À partir des équations physiques avec $L \neq 0$ :
   $$\frac{di(t)}{dt} = -\frac{R}{L} i(t) - \frac{K}{L} \Omega(t) + \frac{K_a}{L} u_c(t)$$
   $$\frac{d\Omega(t)}{dt} = \frac{K}{J} i(t) - \frac{f}{J} \Omega(t) - \frac{1}{J} c_p(t)$$

   Sous forme matricielle $\dot{X} = A X + B U$ avec $U = \begin{bmatrix} u_c \\ c_p \end{bmatrix}$ :
   $$A = \begin{bmatrix} -\frac{R}{L} & -\frac{K}{L} \\ \frac{K}{J} & -\frac{f}{J} \end{bmatrix}, \quad B = \begin{bmatrix} \frac{K_a}{L} & 0 \\ 0 & -\frac{1}{J} \end{bmatrix}$$

   Pour la sortie $Y(t) = \Omega(t)$ :
   $$C = \begin{bmatrix} 0 & 1 \end{bmatrix}, \quad D = \begin{bmatrix} 0 & 0 \end{bmatrix}$$

7. **Analyse de la commandabilité** :
   La matrice de commandabilité $C_r$ pour un système à plusieurs entrées s'écrit par blocs : $C_r = \begin{bmatrix} B_1 & A B_1 & \dots & B_2 & A B_2 \dots \end{bmatrix}$. 
   Plus simplement, examinons le rang de la matrice $C_r$ pour l'entrée unique $u_c$ (en considérant $c_p = 0$) :
   $$C_{r1} = \begin{bmatrix} B_{col1} & A B_{col1} \end{bmatrix} = \begin{bmatrix} \frac{K_a}{L} & -\frac{R K_a}{L^2} \\ 0 & \frac{K K_a}{LJ} \end{bmatrix}$$
   Le déterminant de cette matrice vaut $\frac{K_a^2 K}{L^2 J} \neq 0$ (car les paramètres physiques sont non nuls). 
   La matrice est de rang 2, le système est donc **totalement commandable** par la tension d'induit $u_c(t)$.

---

#### Partie III : Analyse critiqueétique du modèle

8. **Limites de la modélisation** :
   - **Linéarité** : Le modèle néglige les frottements secs (loi de Coulomb $C_s \text{sgn}(\Omega)$). Au voisinage de la vitesse nulle ($\Omega = \to 0$), ce phénomène induit une zone morte ou des erreurs statiques non prises en compte par la fonction de transfert linéaire.
   - **Saturations** : Les équations linéaires supposent des amplificateurs parfaits. En réalité, la tension $u_c$ et le courant $i$ sont bornés (saturations physiques de l'onduleur/hacheur).
   - **Domaine de validité** : Le modèle d'état linéaire est rigoureusement exact uniquement autour d'un point de fonctionnement ou pour de petits signaux si les non-linéarités sont négligeables, ce qui constitue néanmoins une excellente approximation pour le dimensionnement préliminaire des boucles d'asservissement en CPGE.