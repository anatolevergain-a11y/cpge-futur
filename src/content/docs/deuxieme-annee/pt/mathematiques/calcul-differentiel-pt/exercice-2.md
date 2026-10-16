---
title: 'Exercice 2 : Calcul d intégrales doubles et triples'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude des champs de vecteurs et des flux en physique (programme de mathématiques de la classe de PT), on s'intéresse au calcul d'intégrales multiples sur des domaines géométriques usuels.

Soit $a > 0$ un réel strictement positif. On considère le domaine 3D délimité par des surfaces paraboliques et planes, noté $\Omega$, défini par :
$$\Omega = \left\{ (x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 \leq az \text{ et } 0 \leq z \leq a \right\}$$

L'objectif de ce problème est de calculer le volume de ce domaine $\Omega$, ainsi que le flux d'un champ de vecteurs à travers sa surface frontière, en utilisant des intégrales doubles et triples, éventuellement à l'aide de changements de variables adaptés.

---

### ❓ Questions progressives

1. **Représentation et nature du domaine** : Décrire brièvement les surfaces qui limitent le domaine $\Omega$. En déduire la nature géométrique de $\Omega$.
2. **Calcul de volume par intégrale triple** : 
   a) Exprimer le volume $V(\Omega)$ de $\Omega$ sous la forme d'une intégrale triple.
   b) En utilisant les coordonnées cylindriques, calculer explicitement ce volume $V(\Omega)$.
3. **Approche par intégrale double** : 
   a) Exprimer le volume $V(\Omega)$ à l'aide d'une intégrale double faisant intervenir la fonction définissant le paraboloïde.
   b) Retrouver le résultat de la question 2.b à l'aide de ce calcul.
4. **Application au calcul d'une intégrale de volume** : 
   On considère la fonction $f(x,y,z) = z \sqrt{x^2+y^2}$. Calculer l'intégrale I :
   $$I = \iint_{\Omega} f(x,y,z) \,dx\,dy\,dz$$

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 & 2** : Pour un domaine défini par des inégalités en $z$, pensez à utiliser le théorème de Fubini en intégrant d'abord par rapport à $z$ (si les bornes s'y prêtent), ou en passant en coordonnées cylindriques (très adapté vu la symétrie de révolution en $x$ et $y$).
* **Coordonnées cylindriques** : Rappelez-vous que $x = r \cos(\theta)$, $y = r \sin(\theta)$, $z = z$, et que le jacobien de la transformation est $r$.
* **Question 3** : Le volume d'un solide situé entre deux surfaces $z = \varphi(x,y)$ et $z = \psi(x,y)$ sur un domaine $D$ du plan $(x,y)$ s'exprime par une intégrale double $\iint_D (\psi(x,y) - \varphi(x,y)) \,dx\,dy$.
* **Question 4** : Ne brûlez pas les étapes. Posez l'intégrale itérée en coordonnées cylindriques en déterminant soigneusement les bornes de $r$, $\theta$ et $z$.

---

### 📋 Corrigé détaillé pas à pas

#### **1. Description du domaine $\Omega$**
Le domaine $\Omega$ est défini par les contraintes :
* $z \geq 0$ (plan horizontal) et $z \leq a$ (plan horizontal supérieur).
* $x^2 + y^2 \leq az$, qui représente l'intérieur d'un paraboloïde de révolution d'axe $(Oz)$.

Le solide $\Omega$ est donc une portion de paraboloïde tronquée par le plan $z = a$. Sa base inférieure est réduite à l'origine $(0,0,0)$ et sa section maximale dans le plan $z = a$ est un disque de rayon $R = \sqrt{a \times a} = a$.

---

#### **2. Calcul du volume par intégrale triple**
a) Le volume de $\Omega$ est donné par l'intégrale triple :
$$V(\Omega) = \iint_{\Omega} 1 \,dx\,dy\,dz$$

b) Effectuons le changement en coordonnées cylindriques $(r, \theta, z)$ défini par :
$$\begin{cases} x = r \cos(\theta) \\ y = r \sin(\theta) \\ z = z \end{cases}$$
avec le jacobien $\Delta(r, \theta, z) = r$.

Déterminons les nouvelles bornes :
* L'angle $\theta$ varie de $0$ à $2\pi$.
* Pour $z$ fixé dans $[0, a]$, la condition $x^2 + y^2 \leq az$ devient $r^2 \leq az$, soit $0 \leq r \leq \sqrt{az}$.
* La variable $z$ varie de $0$ à $a$.

On a donc :
$$V(\Omega) = \int_{0}^{a} \left( \int_{0}^{2\pi} \left( \int_{0}^{\sqrt{az}} r \,dr \right) d\theta \right) dz$$

Calculons l'intégrale intérieure par rapport à $r$ :
$$\int_{0}^{\sqrt{az}} r \,dr = \left[ \frac{r^2}{2} \right]_{0}^{\sqrt{az}} = \frac{az}{2}$$

Intégrons ensuite par rapport à $\theta$ :
$$\int_{0}^{2\pi} \frac{az}{2} \,d\theta = 2\pi \times \frac{az}{2} = \pi az$$

Enfin, intégrons par rapport à $z$ :
$$V(\Omega) = \int_{0}^{a} \pi az \,dz = \pi a \left[ \frac{z^2}{2} \right]_{0}^{a} = \frac{\pi a^3}{2}$$
Conclusion: ** $V(\Omega) = \frac{\pi a^3}{2}$.

---

#### **3. Approche par intégrale double**
a) Pour tout $(x,y)$ tel que $x^2 + y^2 \leq a^2$ (disque $D$ de rayon $a$ dans le plan $(x,y)$), la cote $z$ varie de la surface inférieure (le paraboloïde $z = \frac{x^2+y^2}{a}$) à la surface supérieure (le plan $z = a$). 

Le volume s'exprime donc par l'intégrale double :
$$V(\Omega) = \iint_{D} \left( a - \frac{x^2+y^2}{a} \right) dx\,dy$$
où $D = \left\{ (x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \leq a^2 \right\}$.

b) Passons en coordonnées polaires $(r, \theta)$ dans le plan :
$$V(\Omega) = \int_{0}^{2\pi} d\theta \int_{0}^{a} \left( a - \frac{r^2}{a} \right) r \,dr$$

L'intégrale en $\theta$ vaut $2\pi$. Il reste à calculer :
$$V(\Omega) = 2\pi \int_{0}^{a} \left( ar - \frac{r^3}{a} \right) dr$$
$$V(\Omega) = 2\pi \left[ \frac{ar^2}{2} - \frac{r^4}{4a} \right]_{0}^{a} = 2\pi \left( \frac{a^3}{2} - \frac{a^3}{4} \right) = 2\pi \left( \frac{a^3}{4} \right) = \frac{\pi a^3}{2}$$

Le résultat est bien cohérent avec la méthode précédente.

---

#### **4. Calcul de l'intégrale de volume $I$**
L'intégrale à calculer est :
$$I = \iint_{\Omega} z \sqrt{x^2+y^2} \,dx\,dy\,dz$$

En utilisant les coordonnées cylindriques, on a $\sqrt{x^2+y^2} = r$. L'élément de volume est $dV = r \,dr\,d\theta\,dz$.
L'intégrale devient :
$$I = \int_{0}^{a} \left( \int_{0}^{2\pi} \left( \int_{0}^{\sqrt{az}} (z \cdot r) \cdot r \,dr \right) d\theta \right) dz$$
$$I = \int_{0}^{a} z \left( \int_{0}^{2\pi} d\theta \right) \left( \int_{0}^{\sqrt{az}} r^2 \,dr \right) dz$$

Calculons les intégrales successives :
1. $\int_{0}^{2\pi} d\theta = 2\pi$
2. $\int_{0}^{\sqrt{az}} r^2 \,dr = \left[ \frac{r^3}{3} \right]_{0}^{\sqrt{az}} = \frac{(az)^{3/2}}{3} = \frac{a^{3/2} z^{3/2}}{3}$

En remplaçant dans l'expression :
$$I = \int_{0}^{a} z \cdot 2\pi \cdot \frac{a^{3/2} z^{3/2}}{3} \,dz = \frac{2\pi a^{3/2}}{3} \int_{0}^{a} z^{5/2} \,dz$$

Calculons la dernière intégrale :
$$\int_{0}^{a} z^{5/2} \,dz = \left[ \frac{z^{7/2}}{7/2} \right]_{0}^{a} = \frac{2}{7} a^{7/2}$$

Finalement :
$$I = \frac{2\pi a^{3/2}}{3} \times \frac{2}{7} a^{7/2} = \frac{4\pi}{21} a^{3/2 + 7/2} = \frac{4\pi}{21} a^{5}$$
Conclusion: ** 
$$I = \frac{4\pi a^5}{21}$$