---
title: 'Exercice 2 : Acoustique'
description: 'Problème d entraînement type concours.'
---

# Concours CPGE (Filière PT) — Physique-Chimie
## Thermodynamique industrielle et Ondes : Acoustique

---

### **Préambule et consignes de l'examinateur**
*Ce problème guidé aborde l'étude de la propagation acoustique, un classique des concours de la filière PT. L'objectif est de lier les notions de thermodynamique des gaz (transformations quasi-statiques et adiabatiques) à l'étude des ondes mécaniques (équation d'onde, impédance acoustique, et atténuation). Soyez particulièrement rigoureux sur l'homogénéité des expressions et l'utilisation des notations normalisées.*

---

## **Énoncé du Problème**

On s'intéresse à la propagation d'une onde acoustique plane progressive harmonique (1D) dans un gaz parfait (air) au repos, de masse volumique au repos $\rho_0$, de pression au repos $P_0$ et de température $T_0$. 

On note :
* $s(x, t)$ le déplacement d'une tranche de gaz par rapport à sa position d'équilibre $x$.
* $p'(x, t) = P(x, t) - P_0$ la surpression acoustique.
* $\rho'(x, t) = \rho(x, t) - \rho_0$ la variation de masse volumique.

On se place dans l'approximation des petits perturbations : $| \frac{\partial s}{\partial x} | \ll 1$, $| p' | \ll P_0$ et $| \rho' | \ll \rho_0$.

---

### **Partie I : Établissement de l'équation de propagation**

**1.** En appliquant le principe fondamental de la dynamique à une tranche de gaz comprise entre $x$ et $x + dx$ de section $S$, établir l'équation locale liant la masse volumique au repos $\rho_0$, l'accélération $\frac{\partial^2 s}{\partial t^2}$ et la surpression $p'$.

**2.** En exprimant la conservation de la masse pour cette même tranche, relier $\rho'$ à $\rho_0$ et à la dérivée spatiale du déplacement $\frac{\partial s}{\partial x}$.

**3.** La transformation subie par le gaz lors du passage de l'onde acoustique est modélisée par un processus adiabatique réversible (isentropique). Rappeler la relation différentielle liant $p'$ et $\rho'$ en introduisant le coefficient isentropique $\gamma$ du gaz et la pression d'équilibre $P_0$. En déduire l'expression de la célérité du son $c$ dans le gaz en fonction de $\gamma$, $P_0$ et $\rho_0$.

**4.** À l'aide des questions précédentes, montrer que la surpression $p'(x,t)$ vérifie l'équation d'onde :
$$\frac{\partial^2 p'}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0$$

---

### **Partie II : Onde plane progressive harmonique et Impédance acoustique**

**5.** On considère une onde acoustique plane progressive harmonique se propageant dans le sens des $x$ croissants. La surpression associée s'écrit sous la forme complexe :
$$\underline{p'}(x,t) = \underline{P_0} e^{j(\omega t - k x)}$$
où $\underline{P_0} = P_m e^{j\varphi}$ est l'amplitude complexe, $\omega$ la pulsation et $k$ le nombre d'onde. 
Exprimer le vecteur d'onde $k$ en fonction de $\omega$ et $c$.

**6.** Déterminer l'expression de la vitesse acoustique complexe $\underline{v}(x,t) = \frac{\partial \underline{s}}{\partial t}$ en fonction de $\underline{p'}(x,t)$, $\rho_0$ et $c$.

**7.** On définit l'impédance acoustique caractéristique du milieu par $\underline{Z}_c = \frac{\underline{p'}}{\underline{v}}$. 
Exprimer $\underline{Z}_c$ en fonction de $\rho_0$ et $c$. Calculer sa valeur numérique pour l'air sachant que $\rho_0 \approx 1,20 \text{ kg}\cdot\text{m}^{-3}$ et $c \approx 340 \text{ m}\cdot\text{s}^{-1}$. Préciser son unité dans le système international.

---

### **Partie III : Analyse énergétique et atténuation**

**8.** L'intensité acoustique $I$ est définie comme la valeur moyenne temporelle du vecteur de Poynting acoustique (produit de la surpression par la vitesse particulaire). 
Montrer que pour une onde progressive, $I = \frac{P_m^2}{2 Z_c}$ (avec $Z_c$ réel).

**9.** En réalité, les frottements visqueux au sein du fluide provoquent une atténuation de l'onde. L'amplitude de la surpression s'écrit alors :
$$P_m(x) = P_m(0) e^{-\alpha x}$$
où $\alpha$ est le coefficient d'atténuation. Exprimer l'intensité $I(x)$ en fonction de $I(0)$, $\alpha$ et $x$. 
Exprimer le niveau d'intensité acoustique $L(x)$ en décibels ($\text{dB}$) défini par $L(x) = 10 \log_{10}\left(\frac{I(x)}{I_0}\right)$ (avec $I_0 = 10^{-12} \text{ W}\cdot\text{m}^{-2}$).

---
---

## **CORRIGÉ PAS À PAS**

### **Partie I : Établissement de l'équation de propagation**

**1. Application du PFD :**
Considérons une tranche de fluide comprise entre $x$ et $x+dx$, de section $S$. 
La masse de cette tranche est constante et vaut $dm = \rho_0 S dx$.
Les forces s'exerçant sur cette tranche selon l'axe $(Ox)$ sont les forces de pression s'exerçant sur les faces latératales :
* En $x$ : $F(x) = P(x,t) S = (P_0 + p'(x,t))S$
* En $x+dx$ : $F(x+dx) = -P(x+dx,t) S = -(P_0 + p'(x+dx,t))S$

La somme des forces s'exerçant sur la tranche s'écrit (au premier ordre en $dx$) :
$$\sum F_x = [P(x,t) - P(x+dx,t)]S = -\frac{\partial p'}{\partial x} dx S$$

L'accélération de la tranche est $\frac{\partial^2 s}{\partial t^2}$. D'après le PFD :
$$(\rho_0 S dx) \frac{\partial^2 s}{\partial t^2} = -\frac{\partial p'}{\partial x} dx S$$
$$\rho_0 \frac{\partial^2 s}{\partial t^2} = -\frac{\partial p'}{\partial x}$$

---

**2. Conservation de la masse :**
La masse contenue initialement dans le volume $S dx$ est $\rho_0 S dx$. 
À l'instant $t$, ce volume est délimité par $x + s(x,t)$ et $x+dx + s(x+dx, t)$. Sa nouvelle longueur est $dx + \frac{\partial s}{\partial x}dx$.
La conservation de la masse s'écrit :
$$\rho_0 S dx = \rho(x,t) S \left(dx + \frac{\partial s}{\partial x}dx\right) = (\rho_0 + \rho') S dx \left(1 + \frac{\partial s}{\partial x}\right)$$

En développant et en négligeant les termes d'ordre supérieur (produits de perturbations $\rho' \frac{\partial s}{\partial x} \approx 0$) :
$$\rho_0 = \rho_0 + \rho' + \rho_0 \frac{\partial s}{\partial x} \implies \rho' = -\rho_0 \frac{\partial s}{\partial x}$$

---

**3. Loi de comportement et célérité :**
La transformation est adiabatique réversible pour un gaz parfait, elle suit la loi de Laplace $P \rho^{-\gamma} = \text{cte}$. 
En différentiant cette relation autour de l'état d'équilibre $(P_0, \rho_0)$ :
$$dp = \frac{\gamma P_0}{\rho_0} d\rho \implies p' = \frac{\gamma P_0}{\rho_0} \rho'$$

En injectant l'expression de $\rho'$ de la question 2 :
$$p' = -\gamma P_0 \frac{\partial s}{\partial x}$$

Par identification avec l'équation d'onde classique, ou par la suite, la célérité du son $c$ est définie par :
$$c^2 = \frac{\gamma P_0}{\rho_0}$$

---

**4. Établissement de l'équation d'onde pour la surpression :**
Reprenons l'équation du PFD (1) : 
$$\frac{\partial}{\partial x} \left( \rho_0 \frac{\partial^2 s}{\partial t^2} = -\frac{\partial p'}{\partial x} \right) \implies \rho_0 \frac{\partial^2}{\partial t^2}\left(\frac{\partial s}{\partial x}\right) = -\frac{\partial^2 p'}{\partial x^2}$$

D'après la conservation de la masse (2), on a $\frac{\partial s}{\partial x} = -\frac{\rho'}{\rho_0}$. De plus, d'après (3), $\rho' = \frac{\rho_0}{\gamma P_0} p' = \frac{1}{c^2} p'$.
Donc : $\frac{\partial s}{\partial x} = -\frac{p'}{\rho_0 c^2}$.

En remplaçant dans l'équation dérivée du PFD :
$$\rho_0 \frac{\partial^2}{\partial t^2} \left( -\frac{p'}{\rho_0 c^2} \right) = -\frac{\partial^2 p'}{\partial x^2}$$
Soit, en simplifiant :
$$\frac{\partial^2 p'}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0$$
*L'équation d'onde est bien établie.*

---

### **Partie II : Onde plane progressive harmonique et Impédance acoustique**

**5. Vecteur d'onde :**
Pour une solution harmonique de type $\underline{p'}(x,t) = \underline{P_0} e^{j(\omega t - k x)}$, l'injection dans l'équation d'onde donne :
$$-k^2 - \frac{1}{c^2} (-\omega^2) = 0 \implies k^2 = \frac{\omega^2}{c^2}$$
Puisque le sens de propagation est celui des $x$ croissants ($k > 0$) :
$$k = \frac{\omega}{c}$$

---

**6. Vitesse acoustique complexe :**
À partir du PFD sous forme locale (1) : $\rho_0 \frac{\partial v}{\partial t} = -\frac{\partial p'}{\partial x}$ (avec $v = \frac{\partial s}{\partial t}$).
En notation complexe pour une onde harmonique :
$$j \omega \rho_0 \underline{v} = -(-j k \underline{p'}) = j k \underline{p'}$$
$$\underline{v} = \frac{k}{\omega \rho_0} \underline{p'}$$
Comme $k / \omega = 1/c$ :
$$\underline{v} = \frac{\underline{p'}}{\rho_0 c}$$

---

**7. Impédance acoustique caractéristique :**
Par définition :
$$\underline{Z}_c = \frac{\underline{p'}}{\underline{v}} = \rho_0 c$$
* A.N. : $\underline{Z}_c = 1,20 \times 340 = 408 \text{ Pa}\cdot\text{s}\cdot\text{m}^{-1}$ (ou $\text{kg}\cdot\text{m}^{-2}\cdot\text{s}^{-1}$).

---

### **Partie III : Analyse énergétique et atténuation**

**8. Intensité acoustique :**
L'intensité est la valeur moyenne temporelle du produit de la surpression par la vitesse :
$$I = \langle p'(x,t) \cdot v(x,t) \rangle_t$$
Pour une onde progressive réelle $p'(x,t) = P_m \cos(\omega t - kx)$ et $v(x,t) = \frac{P_m}{Z_c} \cos(\omega t - kx)$ :
$$I = \frac{P_m^2}{Z_c} \langle \cos^2(\omega t - kx) \rangle_t = \frac{P_m^2}{2 Z_c}$$

---

**9. Atténuation et Niveau sonore :**
Puisque $I(x)$ est proportionnel à $P_m(x)^2$ et que $P_m(x) = P_m(0) e^{-\alpha x}$ :
$$I(x) = \frac{(P_m(0) e^{-\alpha x})^2}{2 Z_c} = I(0) e^{-2\alpha x}$$

Le niveau d'intensité acoustique devient :
$$L(x) = 10 \log_{10}\left(\frac{I(0) e^{-2\alpha x}}{I_0}\right) = 10 \log_{10}\left(\frac{I(0)}{I_0}\right) + 10 \log_{10}(e^{-2\alpha x})$$
$$L(x) = L(0) - 20 \alpha x \log_{10}(e)$$

---

### **Analyse critique et perspectives (Expert CPGE)**
* **Limites du modèle :** L'hypothèse d'une transformation isentropique néglige les phénomènes dissipatifs (viscosité du fluide et conduction thermique). L'introduction du coefficient $\alpha$ à la partie III est une approche phénoménologique indispensable pour rendre compte de l'amortissement réel.
* **Ordre de grandeur :** L'impédance acoustique de l'air ($Z_c \approx 408 \text{ SI}$) est très faible comparée à celle de l'eau ($\approx 1,5 \times 10^6 \text{ SI}$) ou de l'acier ($\approx 4 \times 10^7 \text{ SI}$). Cela traduit un **très fort désaccord d'impédance** lors du passage air/paroi ou air/eau, menant à une réflexion quasi-totale de l'onde (principe de l'isolation phonique par rupture d'impédance).