---
title: 'Exercice 1 : Principe fondamental de la dynamique (PFD) 3D'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse au comportement dynamique d'un bras manipulateur industriel à 3 axes utilisé pour le positionnement rapide de charges lourdes en milieu logistique. Afin de concevoir la loi de commande des moteurs et de dimensionner les liaisons mécaniques, on modélise le dernier segment (la charge manipulée et son support) par un solide rigide $\Sigma$ de masse $M$ et de centre d'inertie $G$.

#### Paramétrage et repérage :
- On associe au bâti (repère fixe) le repère galiléen $\mathcal{R}_0 = (O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$, muni du champ de pesanteur $\vec{g} = -g \vec{z}_0$ avec $g = 9.81 \, \text{m}\cdot\text{s}^{-2}$.
- Le mouvement du solide $\Sigma$ est repéré par rapport à $\mathcal{R}_0$ par les angles d'Euler $(_\psi, \theta, \varphi)$, mais pour cette étude, on se restreint à une phase de mouvement où le solide est en rotation autour de l'axe fixe $(O, \vec{z}_0)$ d'un angle $\theta(t)$, avec une élévation constante caractérisée par un angle fixe $\alpha$.
- Le repère lié au solide $\Sigma$ est $\mathcal{R}_1 = (G, \vec{x}_1, \vec{y}_1, \vec{z}_1)$, tel que la matrice d'inertie de $\Sigma$ exprimée en $G$ dans la base $\mathcal{B}_1 = (\vec{x}_1, \vec{y}_1, \vec{z}_1)$ est diagonale :
  $$I(G, \Sigma) = \begin{pmatrix} A & 0 & 0 \\ 0 & B & 0 \\ 0 & 0 & C \end{pmatrix}_{\mathcal{B}_1}$$

#### Hypothèses de modélisation et ordres de grandeur :
- Masse de la charge : $M = 50 \, \text{kg}$.
- Dimensions caractéristiques : $L = 1.2 \, \text{m}$.
- Le mouvement étudié est une rotation rapide d'accélération maximale $\ddot{\theta} = 15 \, \text{rad}\cdot\text{s}^{-2}$.
- *Hypothèse critique :* Les déformations élastiques de la structure sont négligées dans un premier temps (modèle rigide), ce qui constitue une approximation forte que l'on se propose de questionner en fin de problème.

---

### ❓ Questions progressives

1. **Cinématique du solide :** Exprimer le vecteur vitesse de rotation $\vec{\Omega}(\Sigma/\mathcal{R}_0)$ dans la base $\mathcal{B}_1$. Déterminer l'expression du vecteur accélération de rotation $\vec{\Omega}'(\Sigma/\mathcal{R}_0)$ et l'accélération du centre d'inertie $\vec{\gamma}(G/\mathcal{R}_0)$ en fonction de $\theta$, $\dot{\theta}$, $\ddot{\theta}$ et des paramètres géométriques.
2. **Bilan des actions mécaniques :** Identifier et caractériser les actions mécaniques extérieures s'exerçant sur le solide $\Sigma$ : action de la pesanteur, et action exercée par le reste du mécanisme modélisée par un torseur d'effort transmissible en $G$ dont on précisera les composantes.
3. **Application du PFD :** Appliquer le Principe Fondamental de la Dynamique (théorème de la résultante dynamique et théorème du moment dynamique en $G$) au solide $\Sigma$ dans $\mathcal{R}_0$.
4. **Mise en équation :** Projeter les relations vectorielles obtenues dans la base adéquate afin d'extraire l'expression littérale du couple moteur nécessaire pour assurer la cinéphase imposée.
5. **Analyse critique et limites du modèle :** 
   - Calculer l'ordre de grandeur du moment dynamique par rapport au moment géométrique pour justifier la prise en compte des termes d'inertie croisée (couplages 3D).
   - Discuter de la validité de l'hypothèse de rigidité du solide face aux accélérations requises en service industriel.

---

### 💡 Pistes & Indications

- **Q1 :** Utilisez la composition des vitesses de rotation si nécessaire, ou écrivez directement le vecteur rotation dans la base liée en tenant compte de la géométrie du liaisonnement. Pour $\vec{\gamma}(G/\mathcal{R}_0)$, pensez à exprimer les vecteurs de base de $\mathcal{R}_1$ dans $\mathcal{R}_0$ et à dériver deux fois.
- **Q2 :** Le torseur des actions mécaniques extérieures se compose de la pesanteur (réduite en $G$) et de l'action de liaison. Attention à bien exprimer les moments au même point (ici $G$).
- **Q3 & Q4 :** Le théorème du moment dynamique s'écrit $\vec{\delta}_G(\Sigma/\mathcal{R}_0) = \vec{M}_G(\text{Ext} \to \Sigma)$. Rappelez l'expression générale de $\vec{\delta}_G$ en 3D lorsque la base liée n'est pas nécessairement principale d'inertie pour les composantes dynamiques, ou utilisez directement la matrice d'inertie diagonale dans $\mathcal{B}_1$.
- **Q5 :** Pour l'analyse critique, pensez aux fréquences propres des structures en acier ou en alliage d'aluminium comparées aux fréquences d'excitation du mouvement (critère de rigidité quasi-statique).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Cinématique du solide
Le solide $\Sigma$ est en rotation autour de $(O, \vec{z}_0)$ à la vitesse angulaire $\dot{\theta}(t)$. Le repère $\mathcal{R}_1$ est lié à $\Sigma$. Par définition :
$$\vec{\Omega}(\Sigma/\mathcal{R}_0) = \dot{\theta}(t) \vec{z}_0$$
En projetant $\vec{z}_0$ dans la base $\mathcal{B}_1 = (\vec{x}_1, \vec{y}_1, \vec{z}_1)$ via l'angle d'inclinaison fixe $\alpha$ (par exemple $\vec{z}_0 = -\sin\alpha \, \vec{y}_1 + \cos\alpha \, \vec{z}_1$), on obtient :
$$\vec{\Omega}(\Sigma/\mathcal{R}_0) = \omega_x \vec{x}_1 + \omega_y \vec{y}_1 + \omega_z \vec{z}_1$$
L'accélération de rotation est :
$$\vec{\Omega}'(\Sigma/\mathcal{R}_0) = \frac{d\vec{\Omega}}{dt}\Big|_{\mathcal{R}_0} = \ddot{\theta}(t) \vec{z}_0$$
La position du centre d'inertie $G$ s'écrit dans $\mathcal{R}_0$ avec un rayon de rotation $R = L \sin\alpha$ :
$$\vec{OG}(t) = R \cos\theta(t) \vec{x}_0 + R \sin\theta(t) \vec{y}_0 + Z_G \vec{z}_0$$
En dérivant deux fois par rapport au temps dans $\mathcal{R}_0$ :
$$\vec{\gamma}(G/\mathcal{R}_0) = -R \ddot{\theta} \sin\theta \vec{x}_0 + R \dot{\theta}^2 \cos\theta \vec{x}_0 + R \ddot{\theta} \cos\theta \vec{y}_0 + R \dot{\theta}^2 \sin\theta \vec{y}_0$$
Soit sous forme compacte dans la base polaire locale : $\vec{\gamma}(G/\mathcal{R}_0) = -R\dot{\theta}^2 \vec{u}_r + R\ddot{\theta} \vec{u}_\theta$.

#### 2. Bilan des actions mécaniques extérieures
- **Action de la pesanteur :** $\vec{P} = M \vec{g} = -Mg \vec{z}_0$, avec $\vec{M}_G(\text{Pesanteur}) = \vec{0}$ par définition du centre d'inertie.
- **Action de la liaison (moteur + structure amont) :** Modélisée par un torseur en $G$ :
  $$\{ \mathcal{T}_{\text{amont} \to \Sigma} \} = \begin{Bmatrix} \vec{R}_{\text{amont}\to\Sigma} = X\vec{x}_0 + Y\vec{y}_0 + Z\vec{z}_0 \\ \vec{M}_G(\text{amont}\to\Sigma) = L_G \vec{x}_0 + M_G \vec{y}_0 + C_{\text{moteur}} \vec{z}_0 \end{Bmatrix}$$

#### 3. Application du PFD
- **Théorème de la Résultante Dynamique (TRD) :**
  $$\vec{R}_{\text{amont}\to\Sigma} + M\vec{g} = M \vec{\gamma}(G/\mathcal{R}_0)$$
- **Théorème du Moment Dynamique (TMD) en $G$ :**
  $$\vec{M}_G(\text{Ext} \to \Sigma) = \vec{\delta}_G(\Sigma/\mathcal{R}_0)$$
  Où le moment dynamique $\vec{\delta}_G$ se calcule par :
  $$\vec{\delta}_G(\Sigma/\mathcal{R}_0) = \mathbf{I}(G, \Sigma) \vec{\Omega}'(\Sigma/\mathcal{R}_0) + \vec{\Omega}(\Sigma/\mathcal{R}_0) \land \left( \mathbf{I}(G, \Sigma) \vec{\Omega}(\Sigma/\mathcal{R}_0) \right)$$

#### 4. Mise en équation et projection
En projetant l'équation du moment dynamique suivant l'axe de commande en rotation $\vec{z}_0$ (ou $\vec{z}_1$), on isole le couple moteur effectif $C_{\text{moteur}}$ nécessaire pour vaincre l'inertie propre du solide en 3D :
$$C_{\text{moteur}} = C \ddot{\theta} + (A - B) \omega_x \omega_y$$
Ce terme croisé $(A - B)\omega_x \omega_y$ met en évidence l'couplage dynamique 3D inhérent aux mouvements hors-plan ($\alpha \neq \pi/2$).

#### 5. Analyse critique et limites du modèle
- **Ordre de grandeur :** Pour $M = 50 \, \text{kg}$ et $L = 1.2 \, \text{m}$, les moments d'inertie sont de l'ordre de $I \approx \frac{1}{3} M L^2 \approx 24 \, \text{kg}\cdot\text{m}^2$. Avec $\ddot{\theta} = 15 \, \text{rad}\cdot\text{s}^{-2}$, le couple d'accélération pur est de $360 \, \text{N}\cdot\text{m}$. Les effets dynamiques tridimensionnels (termes gyro-statiques) représentent environ 10 à 15% du couple total en régime dynamique sévère.
- **Limites du modèle rigide :** L'hypothèse de solidité rigide néglige les modes propres de flexion du bras. Si la première fréquence propre de vibration de la structure est de l'ordre de $\approx 25 \, \text{Hz}$, et que le profil d'accélération génère des harmoniques significatives dans cette même bande de fréquences, il y aura un risque d'excitation de résonance. Le modèle rigide sous-estime les efforts aux articulations et doit être complété par une modélisation par éléments finis ou des approches par corps flexibles (méthode des modes assumés) pour la commande fine (type *Command Shaping*).