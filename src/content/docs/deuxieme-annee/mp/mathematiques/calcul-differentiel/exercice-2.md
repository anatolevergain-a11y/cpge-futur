---
title: 'Exercice 2 : Extremums locaux et multiplicateurs de Lagrange'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un réacteur chimique cylindrique étanche, les ingénieurs cherchent à optimiser les dimensions du réacteur pour minimiser les pertes thermiques tout en garantissant un volume réactionnel utile imposé. 

La modélisation thermique montre que les pertes de chaleur surfaciques à travers les parois (cylindriques et les deux disques formant les bases) dépendent du rayon $R$ et de la hauteur $H$ du cylindre. Soit $S(R, H)$ la surface totale externe du réacteur, modélisée par :
$$S(R, H) = 2\pi R^2 + 2\pi R H$$
Le volume utile du réacteur est fixé à une valeur constante $V_0 > 0$, ce qui impose la contrainte géométrique :
$$V(R, H) = \pi R^2 H = V_0$$

Néanmoins, les contraintes industrielles et mécaniques imposent des limites opérationnelles strictes :
1. Pour des raisons d'intégrité structurelle face aux pressions internes, le rayon et la hauteur doivent appartenir à l'ouvert $U = ]0, +\infty[^2$.
2. Le modèle mathématique néglige l'épaisseur des parois et les effets de bord aux jonctions. Les ingénieurs doivent s'interroger sur la validité de ce modèle si $R$ ou $H$ devient trop petit ou trop grand devant l'épaisseur standard des matériaux ($\epsilon \approx 5\,\text{mm}$).

Le problème se propose de déterminer les dimensions optimales $(R, H)$ minimisant la surface $S$ sous la contrainte de volume, puis d'analyser la pertinence physique du modèle obtenu.

---

### ❓ Questions progressives

1. **Étude préliminaire et topologie :** Justifier que la fonction $S : U \to \mathbb{R}$ est de classe $\mathcal{C}^\infty$ sur $U = ]0, +\infty[^2$. L'ensemble des contraintes $\mathcal{C} = \{(R, H) \in U \mid \pi R^2 H = V_0\}$ est-il un fermé de $U$ ? Est-il compact ?
2. **Recherche d'extremum sans contrainte (hypothétique) :** Déterminer les points critiques de $S$ sur $U$. Ont-ils un sens par rapport au problème d'optimisation sous contrainte ?
3. **Application du théorème des multiplicateurs de Lagrange :** 
   a. Établir l'existence d'un lien entre les gradients de $S$ et de $V$ aux points réalisant un extremum lié sur $\mathcal{C}$.
   b. Résoudre le système d'équations ainsi obtenu et montrer qu'il existe un unique point critique lié $(R_0, H_0)$.
4. **Nature de l'extremum :** En étudiant la restriction de $S$ à la contrainte ou en utilisant la hessienne bordée, démontrer que le point $(R_0, H_0)$ réalise un minimum global de $S$ sur $\mathcal{C}$. Exprimer $R_0$ et $H_0$ en fonction de $V_0$.
5. **Analyse critique et ingénierie :** 
   a. Application numérique : Pour un volume utile $V_0 = 1\,\text{m}^3$, calculer les valeurs approchées de $R_0$ et $H_0$ (en mètres).
   b. Discussion critique : Le cahier des charges impose que l'épaisseur des parois soit négligeable devant $R$ et $H$. Si l'on choisit un matériau d'épaisseur $\delta = 2\,\text{cm}$, évaluer l'erreur relative commise sur le volume et la surface si l'on applique directement le modèle idéal. Le modèle est-il valide aux extrêmes de la plage de fabrication (par exemple si $V_0 = 10^{-3}\,\text{m}^3$) ?

---

### 💡 Pistes & Indications

- **Question 1 :** Pensez à utiliser l'image réciproque d'un singleton par une application continue pour la fermeture de $\mathcal{C}$. Un ensemble non borné ne peut pas être compact dans $\mathbb{R}^2$.
- **Question 3 :** Vérifiez que la différentielle de la fonction de contrainte $V$ ne s'annule en aucun point de $\mathcal{C}$ (qualification de la contrainte). Introduisez le lagrangien $\mathcal{L}(R, H, \lambda) = S(R, H) + \lambda (V(R, H) - V_0)$.
- **Question 4 :** Exprimez $H$ en fonction de $R$ grâce à la contrainte pour ramener l'étude à une fonction d'une seule variable réelle $s(R) = S(R, \frac{V_0}{\pi R^2})$.
- **Question 5 :** Pour l'analyse critique, pensez à quantifier les approximations géométriques ($V_{\text{réel}} \approx \pi (R+\delta)^2 (H+2\delta)$).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Étude préliminaire et topologie
La fonction $S(R, H) = 2\pi R^2 + 2\pi R H$ est une fonction polynomiale en $R$ et $H$, elle est donc de classe $\mathcal{C}^\infty$ sur $U = ]0, +\infty[^2$.
L'ensemble des contraintes est défini par $\mathcal{C} = f^{-1}(\{V_0\})$ où $f : U \to \mathbb{R}$ définie par $f(R, H) = \pi R^2 H$ est continue (car $\mathcal{C}^\infty$). Comme $\{V_0\}$ est un fermé de $\mathbb{R}$, par continuité de $f$, $\mathcal{C}$ est un **fermé** de $U$ (et donc de $\mathbb{R}^2$).
Cependant, $\mathcal{C}$ n'est **pas borné** : si l'on choisit $R_n = n$ pour $n \in \mathbb{N}^*$, alors $H_n = \frac{V_0}{\pi n^2}$ conduit à des points $(R_n, H_n) \in \mathcal{C}$ dont la norme tend vers $+\infty$. Par conséquent, $\mathcal{C}$ n'est **pas compact** (le théorème des bornes atteintes de Weierstrass ne s'applique pas directement globalement sans précaution).

#### 2. Recherche d'extremum sans contrainte
Les dérivées partielles premières de $S$ sur $U$ sont :
$$\frac{\partial S}{\partial R} = 4\pi R + 2\pi H, \quad \frac{\partial S}{\partial H} = 2\pi R$$
Le système $\nabla S(R, H) = (0, 0)$ donne $2R + H = 0$ et $R = 0$, ce qui n'a pas de solution dans $U = ]0, +\infty[^2$. La fonction $S$ n'admet aucun point critique sur $U$.

#### 3. Multiplicateurs de Lagrange
Soit $f(R, H) = \pi R^2 H - V_0$. La contrainte est définie par $f(R, H) = 0$.
Calculons le gradient de $f$ :
$$\nabla f(R, H) = (2\pi R H, \pi R^2)$$
Pour tout $(R, H) \in U$, comme $R > 0$ et $H > 0$, on a $\nabla f(R, H) \neq (0, 0)$. La contrainte est donc **régulière** (qualifiée).
D'après le théorème des multiplicateurs de Lagrange, s'il existe un extremum lié en $(R_0, H_0)$, il existe un réel $\lambda$ tel que :
$$\nabla S(R_0, H_0) + \lambda \nabla f(R_0, H_0) = \mathbf{0}$$
Soit le système :
$$\begin{cases} 
4\pi R_0 + 2\pi H_0 + \lambda (2\pi R_0 H_0) = 0 \\ 
2\pi R_0 + \lambda (\pi R_0^2) = 0 \\ 
\pi R_0^2 H_0 = V_0 
\end{cases}$$
De la deuxième équation, comme $\pi R_0 \neq 0$, on tire :
$$2 + \lambda R_0 = 0 \implies \lambda = -\frac{2}{R_0}$$
En injectant $\lambda$ dans la première équation :
$$4\pi R_0 + 2\pi H_0 - \frac{2}{R_0}(2\pi R_0 H_0) = 0 \implies 4\pi R_0 + 2\pi H_0 - 4\pi H_0 = 0 \implies 4\pi R_0 - 2\pi H_0 = 0$$
On en déduit la relation fondamentale :
$$H_0 = 2R_0$$
En reportant dans la contrainte de volume :
$$\pi R_0^2 (2R_0) = V_0 \implies 2\pi R_0^3 = V_0 \implies R_0 = \left(\frac{V_0}{2\pi}\right)^{1/3}$$
Et par conséquent :
$$H_0 = 2\left(\frac{V_0}{2\pi}\right)^{1/3} = \left(\frac{4V_0}{\pi}\right)^{1/3}$$
Il existe un unique point critique lié $(R_0, H_0)$.

#### 4. Nature de l'extremum
Exprimons la surface en fonction de la seule variable $R$ sur $\mathcal{C}$ en posant $H = \frac{V_0}{\pi R^2}$ :
$$s(R) = 2\pi R^2 + 2\pi R \left(\frac{V_0}{\pi R^2}\right) = 2\pi R^2 + \frac{2V_0}{R}$$
Étudions $s$ sur $]0, +\infty[$ :
$$s'(R) = 4\pi R - \frac{2V_0}{R^2} = \frac{4\pi R^3 - 2V_0}{R^2}$$
Le signe de $s'(R)$ est celui de $2\pi R^3 - V_0$. 
- Pour $R \in ]0, R_0[$, $s'(R) < 0$ (la fonction est strictement décroissante).
- Pour $R \in ]R_0, +\infty[$, $s'(R) > 0$ (la fonction est strictement croissante).
De plus, $\lim_{R \to 0^+} s(R) = +\infty$ et $\lim_{R \to +\infty} s(R) = +\infty$.
Par conséquent, le point $R_0 = \left(\frac{V_0}{2\pi}\right)^{1/3}$ réalise un **minimum global** de $s$ sur $]0, +\infty[$. Le réacteur minimise ses pertes thermiques surfaciques lorsque sa hauteur est exactement égale à son diamètre ($H_0 = 2R_0$).

#### 5. Analyse critique et ingénierie
- **a. Application numérique :** Pour $V_0 = 1\,\text{m}^3$ :
  $$R_0 = \left(\frac{1}{2\pi}\right)^{1/3} \approx 0{,}542\,\text{m} \quad (\text{soit } 54{,}2\,\text{cm})$$
  $$H_0 = 2R_0 \approx 1{,}084\,\text{m}$$

- **b. Discussion critique des limites du modèle :**
  * *Effet de l'épaisseur :* Si l'on considère une épaisseur de paroi $\delta = 0{,}02\,\text{m}$ ($2\,\text{cm}$), les dimensions intérieures sont $R_0$ et $H_0$, mais les dimensions extérieures réelles (qui dictent les échanges thermiques) sont $R_{\text{ext}} = R_0 + \delta$ et $H_{\text{ext}} = H_0 + 2\delta$. L'erreur relative sur les dimensions est de l'ordre de $\frac{\delta}{R_0} \approx \frac{0{,}02}{0{,}542} \approx 3{,}7\%$, ce qui reste acceptable pour un avant-projet, mais modifie légèrement l'optimalité théorique stricte.
  * *Limites du modèle aux extrêmes :* Si $V_0 = 10^{-3}\,\text{m}^3$ ($1\,\text{L}$), alors $R_0 \approx 0{,}054\,\text{m}$ ($5{,}4\,\text{cm}$). Avec une épaisseur de matériau $\delta = 5\,\text{mm}$, l'épaisseur représente près de $10\%$ du rayon. **L'hypothèse d'une surface mince s'effondre** : les effets de bord géométriques (rayons de raccourcissement, volume des fonds bombés réels) ne sont plus négligeables et le modèle mathématique idéalisé conduit à une erreur d'optimisation majeure. Le modèle mathématique diverge de la réalité physique.