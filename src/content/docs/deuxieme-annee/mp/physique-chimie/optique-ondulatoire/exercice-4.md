---
title: 'Exercice 2 : Diffraction'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude de la diffraction par des ouvertures finies et analyse spectrale

En tant qu'examinateur de physique en CPGE (filière MP), je vous propose ce problème guidé conçu pour évaluer votre maîtrise des phénomènes de diffraction, de l'approximation scalaire de Kirchhoff et de l'analyse spectrale par filtrage optique. Ce type de sujet fait régulièrement l'objet d'épreuves écrites aux concours (X, Mines, Centrale).

---

## I. Étude préliminaire : Diffraction à l'infini (Fraunhofer) par une fente rectiligne

On considère une fente fine, de largeur $a$ selon l'axe Ox et de longueur $L$ selon l'axe Oy ($L \gg a$), percée dans un écran opaque plan. Cette fente est éclairée sous incidence normale par une onde plane lumineuse monochromatique, de longueur d'onde dans le vide $\lambda$, se propageant selon l'axe Oz.

L'amplitude complexe du champ électrique $\underline{E}(M)$ dans le plan focal image d'une lentille convergente de distance focale $f'$, placé après la fente, est donnée par l'intégrale de Fraunhofer :

$$\underline{E}(X, Y) = \frac{A_0}{j \lambda f'} \iint_{\text{fente}} e^{-j \frac{2\pi}{\lambda f'} (xX + yY)} \, dx \, dy$$

où $(X, Y)$ sont les coordonnées dans le plan focal image et $A_0$ une constante complexe liée à l'amplitude incidente.

### Question 1
Montrer que l'expression de l'amplitude complexe $\underline{E}(X)$ peut se mettre sous la forme :
$$\underline{E}(X) dépend \text{ essentiellement de } X \text{ et s'écrit :} \underline{E}(X) = \underline{E_0} \, \text{sinc}\left(\frac{\pi a X}{\lambda f'}\right)$$
où l'on précisera la fonction $\text{sinc}(u)$ et l'expression de $\underline{E_0}$.
Indication: On utilisera la définition $\text{sinc}(u) = \frac{\sin(u)}{u}$.*

---

**Corrigé guidé :**
L'intégrale double se sépare en un produit d'intégrales selon $x$ et selon $y$ car les bornes et la fonction à intégrer sont indépendantes entre les deux variables :
$$\underline{E}(X, Y) = \frac{A_0}{j \lambda f'} \left( \int_{-a/2}^{a/2} e^{-j \frac{2\pi X}{\lambda f'} x} \, dx \right) \left( \int_{-L/2}^{L/2} e^{-j \frac{2\pi Y}{\lambda f'} y} \, dy \right)$$

Calculons l'intégrale selon $x$ :
$$\int_{-a/2}^{a/2} e^{-j \frac{2\pi X}{\lambda f'} x} \, dx = \left[ \frac{-1}{j \frac{2\pi X}{\lambda f'}} e^{-j \frac{2\pi X}{\lambda f'} x} \right]_{-a/2}^{a/2} = \frac{\lambda f'}{\pi X} \frac{e^{j \frac{\pi a X}{\lambda f'}} - e^{-j \frac{\pi a X}{\lambda f'}}}{2j}$$
$$\int_{-a/2}^{a/2} e^{-j \frac{2\pi X}{\lambda f'} x} \, dx = a \frac{\sin\left(\frac{\pi a X}{\lambda f'}\right)}{\frac{\pi a X}{\lambda f'}} = a \, \text{sinc}\left(\frac{\pi a X}{\lambda f'}\right)$$

En effectuant le même type de calcul pour l'axe $y$ (qui donne un terme en $L \, \text{sinc}(\dots)$ négligeable sur l'axe $X$ si l'on s'intéresse au profil transversal), on obtient :
$$\underline{E}(X) = \underline{E_0} \, \text{sinc}\left(\frac{\pi a X}{\lambda f'}\right) \quad \text{avec} \quad \underline{E_0} = \frac{A_0 a L}{j \lambda f'}$$

---

### Question 2
En déduire l'expression de l'intensité lumineuse $I(X)$ reçue sur l'écran. Tracer l'allure de $I(X)$ en fonction de $\frac{aX}{\lambda f'}$ en faisant apparaître clairement la largeur de la tache centrale.

---

**Corrigé guidé :**
L'intensité lumineuse est proportionnelle au carré du module de l'amplitude complexe :
$$I(X) = I_0 \left[ \text{sinc}\left(\frac{\pi a X}{\lambda f'}\right) \right]^2 = I_0 \left[ \frac{\sin\left(\frac{\pi a X}{\lambda f'}\right)}{\frac{\pi a X}{\lambda f'}} \right]^2$$
avec $I_0 = |\underline{E_0}|^2$.

L'allure de la courbe $I(X)$ présente une frange centrale lumineuse principale encadrée par des zéros pour $\frac{\pi a X}{\lambda f'} = k\pi$ ($k \in \mathbb{Z}^*$), soit $X = k \frac{\lambda f'}{a}$.
La largeur angulaire de la tache centrale est $\theta \approx \frac{2\lambda}{a}$.

---

## II. Application au filtrage spatial et analyse spectrale

On souhaite maintenant utiliser les propriétés de diffraction pour analyser un signal spatial périodique. On place dans le plan focal objet d'une lentille $L_1$ de focale $f'_1$ un réseau plan par transmission constitué de fentes parallèles transparentes de largeur $a$ et de période spatiale $b$ ($b > a$). Le réseau comporte un grand nombre $N$ de motifs.

### Question 3
Rappeler brièvement l'expression de l'amplitude complexe dans le plan focal image de la lentille $L_1$ (plan de Fourier) éclairée par une onde plane monochromatique de longueur d'onde $\lambda$. On posera $u = \frac{X}{\lambda f'_1}$.

---

**Corrigé guidé :**
Par application du théorème de Parseval-Rayleigh et des propriétés de la transformation de Fourier par une lentille, l'amplitude dans le plan de Fourier est proportionnelle à la transformée de Fourier de la transmission du réseau $t(x)$.
Le réseau est le produit d'une fente par un 'comb' de Dirac : $t(x) = \Pi\left(\frac{x}{a}\right) * \left( \sum_{n=-N/2}^{N/2} \delta(x - nb) \right)$.
Par le théorème de convolution, l'amplitude complexe s'écrit comme le produit du terme de diffraction de la fente par le facteur d'interférence du réseau à $N$ fentes :
$$\underline{E}(u) \propto \text{sinc}(\pi a u) \cdot \frac{\sin(N\pi b u)}{\sin(\pi b u)}$$

---

### Question 4
On place dans le plan de Fourier un masque opaque ne laissant passer que les ordres de diffraction $k = -1, 0 \text{ et } 1$. Une seconde lentille $L_2$ (de focale $f'_2$) réalise une nouvelle transformation de Fourier pour projeter l'image sur un écran final. 
Quelle est la nature du signal lumineux observé sur l'écran final ? Quel est le rôle de ce montage optique ?

---

**Corrigé guidé :**
Le masque dans le plan de Fourier réalise un **filtrage passe-bas** (il élimine les hautes fréquences spatiales associées aux ordres $k > 1$). 
Puisque le signal périodique initial pouvait se décomposer en série de Fourier (harmoniques de rang $k$), le fait de ne garder que les termes $k \in \{-1, 0, 1\}$ revient à ne conserver que le terme constant (fond continu) et le premier harmonique.
Sur l'écran final, le signal lumineux observé a une intensité qui varie de manière **sinusoïdale** (cosine-like), indépendamment de la forme rectangulaire initiale des fentes du réseau. Ce montage réalise un **synthétiseur de Fourier optique** ou un filtrage spatial.

---

## III. Analyse critique des résultats

### Question 5
Dans le modèle de Fraunhofer que nous avons utilisé, quelles sont les approximations majeures réalisées ? Discutez de la validité de ces approximations si la largeur de la fente $a$ devient du même ordre de grandeur que la longueur d'onde $\lambda$.

---

**Corrigé guidé :**
*   **Approximations du modèle :**
    1.  **L'approximation scalaire de la lumière :** On néglique la nature vectorielle du champ électromagnétique (polarisation). C'est valide tant que les dimensions de l'ouverture sont grandes devant la longueur d'onde $\lambda$.
    2.  **L'approximation de Fraunhofer (diffraction à l'infini) :** On suppose que la distance $D$ entre l'ouverture et l'écran (ou la distance focale $f'$) est très grande devant la taille de l'ouverture, ce qui permet de faire un développement limité au premier ordre des chemins optiques (approximation paraxiale poussée). Mathématiquement, le nombre de Fresnel $N_F = \frac{a^2}{\lambda D} \ll 1$.
*   **Discussion si $a \sim \lambda$ :**
    Si $a$ devient comparable à $\lambda$ (ouverture sub-longueur d'onde), l'approximation scalaire n'est plus suffisante : les effets vectoriels (conditions aux limites sur les bords métalliques de la fente) deviennent primordiaux. De plus, la diffraction ne relève plus du régime de Fraunhofer simple mais de la diffraction de **Fresnel** (ou théorie rigoureuse des réseaux / RCWA pour les structures périodiques). La formule du $\text{sinc}$ sous-estime alors largement l'étalement de la lumière et les transferts d'énergie à grand angle.