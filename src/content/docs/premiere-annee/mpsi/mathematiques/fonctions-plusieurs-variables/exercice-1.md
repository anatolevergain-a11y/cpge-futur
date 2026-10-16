---
title: 'Exercice 1 : Dérivées partielles et gradient'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $U$ l'ouvert $\mathbb{R}_2^* = \mathbb{R}^2 \setminus \{(0,0)\}$. On considère la fonction scalaire $f : U \to \mathbb{R}$ définie par :
$$f(x, y) = \frac{x^3 y - x y^3}{x^2 + y^2}$$
lorsque $(x,y) \in U$, et on pose $f(0,0) = 0$ pour prolonger $f$ par continuité sur $\mathbb{R}^2$. 

Ce type de fonction, issu de la physique mathématique, permet d'étudier la régularité des champs scalaires au voisinage de singularités ponctuelles (potentiels de multipôles en électrostatique). L'objectif de ce problème est d'analyser la continuité, l'existence des dérivées partielles d'ordres successifs et les propriétés différentielles de $f$ sur $\mathbb{R}^2$, en portant une attention particulière au point $(0,0)$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Prolongement et Continuité** : 
   a. Exprimer $f(x, y)$ en coordonnées polaires $(r, \theta)$ avec $x = r \cos(\theta)$ et $y = r \sin(\theta)$ ($r > 0$, $\theta \in [0, 2\pi[$).
   b. En déduire la limite de $f(x, y)$ lorsque $(x, y) \to (0,0)$. La fonction $f$ est-elle continue sur $\mathbb{R}^2$ ?

2. **Dérivées partielles premières sur $U$** :
   a. Calculer les dérivées partielles premières $\frac{\partial f}{\partial x}(x, y)$ et $\frac{\partial f}{\partial y}(x, y)$ pour $(x, y) \in U$.
   b. Montrer que ces dérivées partielles admettent une limite finie lorsque $(x,y) \to (0,0)$.

3. **Dérivées partielles premières en $(0,0)$** :
   a. À l'aide de la définition (taux d'accroissement), calculer $\frac{\partial f}{\partial x}(0,0)$ et $\frac{\partial f}{\partial y}(0,0)$.
   b. Que peut-on dire de la continuité de $\frac{\partial f}{\partial x}$ et $\frac{\partial f}{\partial y}$ en $(0,0)$ ?

4. **Différentiabilité en $(0,0)$** :
   a. La fonction $f$ est-elle de classe $\mathcal{C}^1$ sur $\mathbb{R}^2$ ? Justifier rigoureusement.
   b. En utilisant la définition de la différentiabilité, déterminer si $f$ est différentiable en $(0,0)$.

5. **Dérivées partielles secondes et théorème de Schwarz** :
   a. Calculer les dérivées partielles secondes mixtes $\frac{\partial^2 f}{\partial x \partial y}(0,0)$ et $\frac{\partial^2 f}{\partial y \partial x}(0,0)$ en utilisant les taux d'accroissements.
   b. Le théorème de Schwarz s'applique-t-il ici ? Conclure sur l'origine de l'éventuelle contradiction avec le théorème usuel de Schwarz.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1** : Utilisez l'identité trigonométrique $\cos^3(\theta)\sin(\theta) - \cos(\theta)\sin^3(\theta) = \frac{1}{4}\sin(4\theta)$ ou factorisez simplement par $r$.
- **Question 3** : Ne tentez pas de substituer $(0,0)$ dans les expressions obtenues sur $U$ pour les dérivées partielles avant d'avoir prouvé la continuité de ces dérivées partielles (ce qui n'est pas le cas ici). Revenez systématiquement à la limite du taux d'accroissement en $(0,0)$.
- **Question 4** : Rappelez qu'une fonction différentiable en un point y est nécessairement continue, mais qu'ici la différentiabilité doit se tester via l'existence d'une forme linéaire tangente. Utilisez le développement asymptotique ou majorez le reste d'approximation.
- **Question 5** : Le théorème de Schwarz nécessite la continuité des dérivées secondes mixtes sur un voisinage. Si cette hypothèse n'est pas vérifiée, l'égalité des dérivées croisées peut être mise en défaut.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Prolongement et Continuité

**1. a.** En posant $x = r \cos(\theta)$ et $y = r \sin(\theta)$ avec $r > 0$, on a $x^2 + y^2 = r^2$. Le numérateur devient :
$$x^3 y - x y^3 = r^4 (\cos^3(\theta)\sin(\theta) - \cos(\theta)\sin^3(\theta)) = r^4 \cos(\theta)\sin(\theta)(\cos^2(\theta) - \sin^2(\theta))$$
En utilisant les angles doubles : $\cos^2(\theta) - \sin^2(\theta) = \cos(2\theta)$ et $2\cos(\theta)\sin(\theta) = \sin(2\theta)$, on obtient :
$$x^3 y - x y^3 = r^4 \times \frac{1}{2}\sin(2\theta)\cos(2\theta) = \frac{r^4}{4}\sin(4\theta)$$
Ainsi, pour $(x, y) \neq (0,0)$ :
$$f(r \cos(\theta), r \sin(\theta)) = \frac{\frac{r^4}{4}\sin(4\theta)}{r^2} = \frac{r^2}{4}\sin(4\theta)$$

**1. b.** Lorsque $(x, y) \to (0,0)$, on a $r \to 0$. Comme $|\sin(4\theta)| \le 1$, on obtient par encadrement :
$$0 \le \left|\frac{r^2}{4}\sin(4\theta)\right| \le \frac{r^2}{4} \xrightarrow[r \to 0]{} 0$$
Ainsi, $\lim_{(x,y)\to(0,0)} f(x,y) = 0 = f(0,0)$. La fonction $f$ est donc **continue** sur $\mathbb{R}^2$.

---

#### 2. Dérivées partielles premières sur $U$

**2. a.** Pour $(x, y)in U$, calculons $\frac{\partial f}{\partial x}$ par les règles de dérivation usuelles :
$$f(x, y) = \frac{x^3 y - x y^3}{x^2 + y^2}$$
$$\frac{\partial f}{\partial x} = \frac{(3x^2 y - y^3)(x^2 + y^2) - (x^3 y - x y^3)(2x)}{(x^2 + y^2)^2}$$
En développant le numérateur :
$$(3x^4 y + 3x^2 y^3 - x^2 y^3 - y^5) - (2x^4 y - 2x^2 y^3) = 3x^4 y + 2x^2 y^3 - y^5 - 2x^4 y + 2x^2 y^3 = x^4 y + 4x^2 y^3 - y^5$$
Donc :
$$\frac{\partial f}{\partial x}(x, y) = \frac{x^4 y + 4x^2 y^3 - y^5}{(x^2 + y^2)^2}$$
Par symétrie de l'expression de $f$ (en échangeant $x$ et $y$ et en multipliant par $-1$), ou par calcul direct :
$$\frac{\partial f}{\partial y}(x, y) = -\frac{y^4 x + 4y^2 x^3 - x^5}{(x^2 + y^2)^2} = \frac{x^5 - 4x^3 y^2 - x y^4}{(x^2 + y^2)^2}$$

**2. b.** En passant en coordonnées polaires pour $\frac{\partial f}{\partial x}$ :
$$\frac{\partial f}{\partial x}(r \cos\theta, r \sin\theta) = \frac{r^5(\cos^4\theta\sin\theta + 4\cos^2\theta\sin^3\theta - \sin^5\theta)}{r^4} = r g(\theta)$$
où $g(\theta)$ est une fonction bornée sur $[0, 2\pi[$. Par conséquent, $\lim_{(x,y)\to(0,0)} \frac{\partial f}{\partial x}(x, y) = 0$. Il en va de même pour $\frac{\partial f}{\partial y}$.

---

#### 3. Dérivées partielles premières en $(0,0)$

**3. a.** Revenons à la définition par le taux d'accroissement :
$$\frac{\partial f}{\partial x}(0,0) = \lim_{t \to 0} \frac{f(t, 0) - f(0,0)}{t}$$
Pour $t \neq 0$, $f(t, 0) = \frac{t^3(0) - t(0^3)}{t^2 + 0^2} = 0$. Donc $\frac{f(t, 0) - f(0,0)}{t} = 0$, d'où :
$$\frac{\partial f}{\partial x}(0,0) = 0$$
De même, pour tout $t \neq 0$, $f(0, t) = 0$, donc :
$$\frac{\partial f}{\partial y}(0,0) = \lim_{t \to 0} \frac{f(0, t) - f(0,0)}{t} = 0$$

**3. b.** Les limites des dérivées partielles sur $U$ lorsque $(x,y) \to (0,0)$ existent et valent $0$, ce qui correspond exactement aux valeurs $\frac{\partial f}{\partial x}(0,0)$ et $\frac{\partial f}{\partial y}(0,0)$. Les fonctions $\frac{\partial f}{\partial x}$ et $\frac{\partial f}{\partial y}$ sont donc **continues** en $(0,0)$.

---

#### 4. Différentiabilité en $(0,0)$

**4. a.** Puisque les dérivées partielles premières $\frac{\partial f}{\partial x}$ et $\frac{\partial f}{\partial y}$ existent et sont continues sur tout $\mathbb{R}^2$ (sur $U$ par opérations usuelles, et en $(0,0)$ par continuité directe), le théorème de classe $\mathcal{C}^1$ s'applique : **$f$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}^2$**.

**4. b.** Toute fonction de classe $\mathcal{C}^1$ sur un ouvert de $\mathbb{R}^2$ est **différentiabilité** en tout point de cet ouvert. Ainsi, $f$ est différentiable en $(0,0)$, et sa différentielle en ce point est l'application nulle : $df(0,0) = 0$.

---

#### 5. Dérivées partielles secondes et théorème de Schwarz

**5. a.** Calculons les dérivées partielles secondes mixtes en $(0,0)$ par les taux d'accroissements :
- Pour $\frac{\partial^2 f}{\partial y \partial x}(0,0)$ :
$$\frac{\partial^2 f}{\partial y \partial x}(0,0) = \lim_{t \to 0} \frac{\frac{\partial f}{\partial x}(0, t) - \frac{\partial f}{\partial x}(0,0)}{t}$$
Pour $t \neq 0$, en utilisant l'expression explicite de $\frac{\partial f}{\partial x}$ sur $U$ avec $x=0$ et $y=t$ :
$$\frac{\partial f}{\partial x}(0, t) = \frac{0^4 t + 4(0^2)t^3 - t^5}{(0^2 + t^2)^2} = \frac{-t^5}{t^4} = -t$$
Ainsi :
$$\frac{\partial^2 f}{\partial y \partial x}(0,0) = \lim_{t \to 0} \frac{-t - 0}{t} = -1$$

- Pour $\frac{\partial^2 f}{\partial x \partial y}(0,0)$ :
$$\frac{\partial^2 f}{\partial x \partial y}(0,0) = \lim_{t \to 0} \frac{\frac{\partial f}{\partial y}(t, 0) - \frac{\partial f}{\partial y}(0,0)}{t}$$
Pour $t \neq 0$, avec $x=t$ et $y=0$ :
$$\frac{\partial f}{\partial y}(t, 0) = \frac{t^5 - 4t^3(0^2) - t(0^4)}{(t^2 + 0^2)^2} = \frac{t^5}{t^4} = t$$
Ainsi :
$$\frac{\partial^2 f}{\partial x \partial y}(0,0) = \lim_{t \to 0} \frac{t - 0}{t} = 1$$

**5. b.** On constate que :
$$\frac{\partial^2 f}{\partial y \partial x}(0,0) = -1 \quad \text{et} \quad \frac{\partial^2 f}{\partial x \partial y}(0,0) = 1$$
Les dérivées partielles secondes mixtes **ne sont pas égales** en $(0,0)$. 
*Analyse critique du modèle* : Cela ne contredit pas le théorème de Schwarz, car ce dernier exige que les dérivées partielles secondes mixtes soient **continues** au voisinage du point considéré (ici $(0,0)$). Or, si l'on calculait $\frac{\partial^2 f}{\partial y \partial x}(x, y)$ sur $U$, on s'apercevrait que cette fonction n'admet pas de limite en $(0,0)$ (ou que cette limite dépend de la direction d'approche), ce qui invalide l'hypothèse de continuité requise par le théorème de Schwarz.