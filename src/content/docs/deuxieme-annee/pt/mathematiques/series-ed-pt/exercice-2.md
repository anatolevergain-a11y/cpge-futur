---
title: 'Exercice 2 : Équations différentielles linéaires d ordre 2'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse dans ce problème à l'étude d'un système oscillant amorti soumis à une excitation extérieure harmonique, modélisé par une équation différentielle linéaire du second ordre à coefficients constants. Ce type de modèle intervient fréquemment en physique (mécanique, électronique) et son analyse rigoureuse fait appel aux techniques fondamentales du programme de mathématiques de la filière PT.

L'objectif est de déterminer l'expression explicite des solutions de l'équation homogène associée, d'étudier l'existence et l'unicité du problème de Cauchy, puis de rechercher une solution particulière sous l'effet d'un second membre harmonique par la méthode des variations des constantes et par la méthode des amplitudes complexes.

Soit l'équation différentielle $(E)$ définie sur $\mathbb{R}$ par :
$$(E) \quad : \quad y''(t) + 2\alpha y'(t) + \omega_0^2 y(t) = f(t)$$
où $\alpha$ et $\omega_0$ sont des paramètres réels strictement positifs, et $f : \mathbb{R} \to \mathbb{R}$ est une fonction continue. On pose $\omega_0$ la pulsation propre du système et $\alpha$ le coefficient d'amortissement.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Étude de l'équation homogène :**
   On considère l'équation homogène associée à $(E)$ :
   $$(H) \quad : \quad y''(t) + 2\alpha y'(t) + \omega_0^2 y(t) = 0$$
   Déterminer l'équation caractéristique associée à $(H)$ et expliciter l'espace vectoriel des solutions réelles de $(H)$ en distinguant les cas selon le signe du discriminant réduit $\Delta' = \alpha^2 - \omega_0^2$.

2. **Problème de Cauchy et structure des solutions :**
   Soit $t_0 \in \mathbb{R}$ et $(y_0, v_1) \in \mathbb{R}^2$. Montrer, en s'appuyant sur le théorème de Cauchy-Lipschitz linéaire, qu'il existe une unique solution maximale de $(E)$ sur $\mathbb{R}$ telle que $y(t_0) = y_0$ et $y'(t_0) = v_1$. Rappeler la structure affine de l'ensemble des solutions de $(E)$.

3. **Recherche de solution particulière par la méthode des variations des constantes :**
   On se place dans le cas sous-amorti ($\alpha < \omega_0$). On pose $\omega_1 = \sqrt{\omega_0^2 - \alpha^2}$. 
   Les solutions fondamentales de $(H)$ sont données par $y_1(t) = e^{-\alpha t} \cos(\omega_1 t)$ et $y_2(t) = e^{-\alpha t} \sin(\omega_1 t)$.
   À l'aide de la méthode des variations des constantes, exprimer une solution particulière de $(E)$ sous la forme $y_p(t) = \lambda_1(t) y_1(t) + \lambda_2(t) y_2(t)$, en explicitant un système vérifié par $\lambda_1'$ et $\lambda_2'$.

4. **Analyse harmonique et régime permanent :**
   On suppose que le second membre est harmonique : $f(t) = F_0 \cos(\Omega t)$, avec $F_0 \in \mathbb{R}$ et $\Omega > 0$.
   En passant par l'équation complexe associée, déterminer l'amplitude et le déphasage de la solution particulière stationnaire (régime permanent).

5. **Analyse critique du modèle :**
   Discuter brièvement des limites physiques de ce modèle linéaire (validité des approximations pour de grandes amplitudes, non-linéarités des frottements).

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à relier les racines de l'équation caractéristique $r^2 + 2\alpha r + \omega_0^2 = 0$ au signe de $\Delta'$. N'oubliez pas le cas particulier de la racine double ($\Delta' = 0$).
* **Question 2 :** Pour l'existence et l'unicité globale, utilisez le théorème linéaire de Cauchy-Lipschitz qui s'applique directement ici car les coefficients sont continus sur $\mathbb{R}$ et le second membre aussi.
* **Question 3 :** Le wronskien du système $(y_1, y_2)$ est un outil clé pour inverser le système linéaire issu de la méthode des variations des constantes.
* **Question 4 :** L'utilisation de la notation complexe $\underline{y}'' + 2\alpha \underline{y}' + \omega_0^2 \underline{y} = F_0 e^{j\Omega t}$ simplifie grandement les calculs trigonométriques.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude de l'équation homogène $(H)$
L'équation caractéristique associée à $(H)$ est :
$$r^2 + 2\alpha r + \omega_0^2 = 0$$
Le discriminant réduit est $\Delta' = \alpha^2 - \omega_0^2$. On distingue trois cas :
* **Cas 1 : $\alpha > \omega_0$ (Régime sur-amorti)**
  Le discriminant $\Delta' > 0$. L'équation admet deux racines réelles distinctes :
  $$r_1 = -\alpha - \sqrt{\alpha^2 - \omega_0^2} \quad \text{et} \quad r_2 = -\alpha + \sqrt{\alpha^2 - \omega_0^2}$$
  L'ensemble des solutions réelles de $(H)$ est l'espace vectoriel engendré par $t \mapsto e^{r_1 t}$ et $t \mapsto e^{r_2 t}$. La solution générale est de la forme :
  $$y(t) = A e^{r_1 t} + B e^{r_2 t}, \quad (A, B) \in \mathbb{R}^2$$

* **Cas 2 : $\alpha = \omega_0$ (Régime critique)**
  Le discriminant $\Delta' = 0$. L'équation admet une racine réelle double :
  $$r_0 = -\alpha$$
  La solution générale est de la forme :
  $$y(t) = (A + Bt) e^{-\alpha t}, \quad (A, B) \in \mathbb{R}^2$$

* **Cas 3 : $\alpha < \omega_0$ (Régime sous-amorti)**
  Le discriminant $\Delta' < 0$. L'équation admet deux racines complexes conjuguées :
  $$r_{\pm} = -\alpha \pm j\omega_1, \quad \text{avec } \omega_1 = \sqrt{\omega_0^2 - \alpha^2}$$
  En passant par la forme réelle, l'ensemble des solutions est donné par :
  $$y(t) = e^{-\alpha t} \left( A \cos(\omega_1 t) + B \sin(\omega_1 t) \right), \quad (A, B) \in \mathbb{R}^2$$

#### 2. Problème de Cauchy et structure des solutions
Les coefficients de l'équation $(E)$, à savoir $a(t) = 2\alpha$ et $b(t) = \omega_0^2$, sont des fonctions constantes (donc continues) sur $\mathbb{R}$. Le second membre $f$ est également continu sur $\mathbb{R}$. 
D'après le **théorème de Cauchy-Lipschitz linéaire**, pour tout $t_0 \in \mathbb{R}$ et tout $(y_0, v_1) \in \mathbb{R}^2$, il existe une **unique** solution maximale définie sur $\mathbb{R}$ tout entier vérifiant les conditions initiales $y(t_0) = y_0$ et $y'(t_0) = v_1$.

L'ensemble des solutions de l'équation avec second membre $(E)$ est une **variété affine** de dimension 2, dont la direction est l'espace vectoriel des solutions de l'équation homogène $(H)$. Toute solution de $(E)$ s'écrit donc sous la forme $y = y_p + y_h$, où $y_p$ est une solution particulière de $(E)$ et $y_h$ est une solution générale de $(H)$.

#### 3. Méthode des variations des constantes (cas sous-amorti)
On cherche une solution particulière sous la forme :
$$y_p(t) = \lambda_1(t) y_1(t) + \lambda_2(t) y_2(t)$$
avec $y_1(t) = e^{-\alpha t} \cos(\omega_1 t)$ et $y_2(t) = e^{-\alpha t} \sin(\omega_1 t)$.
La méthode des variations des constantes conduit au système linéaire suivant pour $\lambda_1'$ et $\lambda_2'$ :
$$\begin{cases}
\lambda_1'(t) y_1(t) + \lambda_2'(t) y_2(t) = 0 \\
\lambda_1'(t) y_1'(t) + \lambda_2'(t) y_2'(t) = f(t)
\end{cases}$$
Le déterminant du système est le wronskien $W(t) = y_1(t)y_2'(t) - y_1'(t)y_2(t)$. 
Un calcul classique donne $W(t) = \omega_1 e^{-2\alpha t} \neq 0$ (car $\omega_1 > 0$).
En résout par Cramer :
$$\lambda_1'(t) = \frac{-f(t)y_2(t)}{W(t)} = -\frac{f(t) e^{-\alpha t} \sin(\omega_1 t)}{\omega_1 e^{-2\alpha t}} = -\frac{1}{\omega_1} f(t) e^{\alpha t} \sin(\omega_1 t)$$
$$\lambda_2'(t) = \frac{f(t)y_1(t)}{W(t)} = \frac{f(t) e^{-\alpha t} \cos(\omega_1 t)}{\omega_1 e^{-2\alpha t}} = \frac{1}{\omega_1} f(t) e^{\alpha t} \cos(\omega_1 t)$$
Par intégration, on obtient les fonctions $\lambda_1(t)$ et $\lambda_2(t)$, ce qui fournit l'expression intégrale de la solution particulière :
$$y_p(t) = -\frac{y_1(t)}{\omega_1} \int_{t_0}^t f(u) e^{\alpha u} \sin(\omega_1 u) \, du + \frac{y_2(t)}{\omega_1} \int_{t_0}^t f(u) e^{\alpha u} \cos(\omega_1 u) \, du$$

#### 4. Analyse harmonique et régime permanent
On considère $f(t) = F_0 \cos(\Omega t)$. On associe l'équation complexe :
$$(\underline{E}) \quad : \quad \underline{y}'' + 2\alpha \underline{y}' + \omega_0^2 \underline{y} = F_0 e^{j\Omega t}$$
On cherche une solution stationnaire sous la forme $\underline{y}_p(t) = \underline{A} e^{j\Omega t}$. En injectant dans $(\underline{E})$ :
$$\left( -\Omega^2 + 2j\alpha\Omega + \omega_0^2 \right) \underline{A} e^{j\Omega t} = F_0 e^{j\Omega t}$$
Soit :
$$\underline{A} = \frac{F_0}{\omega_0^2 - \Omega^2 + 2j\alpha\Omega}$$
On met $\underline{A}$ sous forme polaire $\underline{A} = |\underline{A}| e^{-j\varphi}$, avec :
$$|\underline{A}| = \frac{F_0}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\alpha^2 \Omega^2}} \quad \text{et} \quad \tan(\varphi) = \frac{2\alpha\Omega}{\omega_0^2 - \Omega^2}$$
La solution physique (partie réelle de $\underline{y}_p(t)$) est alors :
$$y_{p,\text{réel}}(t) = |\underline{A}| F_0 \cos(\Omega t - \varphi)$$
C'est le **régime permanent**. L'amplitude maximale est obtenue pour $\Omega \approx \omega_0$ (phénomène de résonance).

#### 5. Analyse critique du modèle
* **Limites de la linéarité :** Le terme de frottement visqueux linéaire $-2\alpha y'$ n'est qu'une approximation valable pour de faibles vitesses. En pratique, pour de grandes amplitudes, les frottements fluides peuvent devenir quadratiques (en $-(y')^2$), ce qui rendrait l'équation non linéaire et modifierait le profil de résonance (phénomène de saut de résonance).
* **Hypothèse d'invariance :** Les coefficients $\alpha$ et $\omega_0$ sont supposés constants, ce qui suppose un système stationnaire et homogène dans le temps.