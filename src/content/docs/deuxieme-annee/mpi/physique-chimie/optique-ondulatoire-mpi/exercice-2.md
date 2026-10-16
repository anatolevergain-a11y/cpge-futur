---
title: 'Exercice : Interférences à deux ondes et diffraction par une fente'
description: 'Problème d entraînement type concours Mines-Ponts / Centrale-Supélec pour la filière MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On se propose d'étudier le système optique formé par une fente source de largeur finie, éclairée par une source laser monochromatique, associé à un dispositif d'interférences à deux ondes (type fentes d'Young). L'objectif est de comprendre l'influence de la diffraction par les fentes sur la figure d'interférences observée à l'infini (ou dans le plan focal d'une lentille convergente).

**Données et notations :**
*   Radiation lumineuse laser : longueur d'onde $\lambda$ dans le vide (on confondra avec l'indice de l'air $n \approx 1$).
*   Fentes d'Young : deux fentes fines infiniment longues, de largeur négligeable, distantes de $a$.
*   Modification du dispositif : chaque fente est remplacée par une ouverture de largeur $b$ (avec $b \ll a$). La distance entre les milieux des deux fentes reste égale à $a$.
*   Plan d'observation : plan focal image d'une lentille convergente $L$ de distance focale $f'$, situé à une grande distance des fentes. On repère un point de ce plan par sa coordonnée cartésienne $x$ sur un axe $(Ox)$ perpendiculaire aux fentes.

---

### ❓ Questions progressives

1.  **Rappels de diffraction :** On éclaire une unique fente verticale de largeur $b$ par une onde plane lumineuse monochromatique d'intensité incidente $I_0$. Établir l'expression de l'amplitude complexe diffusée, puis l'intensité lumineuse $I_D(x)$ reçue en un point $x$ du plan d'observation. On posera $\beta = \frac{\pi b x}{\lambda f'}$.
2.  **Interférences pures :** En négligeant la largeur des fentes (modèle des sources ponctuelles d'Young de largeur $b \to 0$), exprimer l'intensité lumineuse $I_I(x)$ interférentielle en fonction de $I_0$, $a$, $\lambda$, $f'$ et $x$. On posera $\alpha = \frac{\pi a x}{\lambda f'}$.
3.  **Combinaison interférences et diffraction :** En déduire l'expression générale de l'intensité lumineuse $I(x)$ observée avec les fentes réelles de largeur $b$. Comment se traduit mathématiquement et physiquement ce résultat ?
4.  **Application numérique et analyse :** 
    *   Calculer l'intermédiaire d'ordre d'interférence et le nombre de franges brillantes situées sous la "centrale" de diffraction. 
    *   Application numérique : $a = 1,0\text{ mm}$, $b = 0,20\text{ mm}$, $\lambda = 633\text{ nm}$, $f' = 50\text{ cm}$. Tracer qualitativement l'allure de $I(x)$.
5.  **Extinction des franges (Phénomène de "brouillage" ou "frange manquante") :** À quelles conditions sur les paramètres $a$ et $b$ observe-t-on l'extinction d'une frange d'interférence brillante ? Donner les ordres d'interférence concernés.

---

### 💡 Pistes & Indications méthodologiques

*   **Question 1 :** Utilisez le principe de Huygens-Fresnel en sommant (par intégration) les contributions élémentaires issues de chaque point de la fente de largeur $b$. Pensez à l'analogie avec les réseaux ou les factorisations trigonométriques.
*   **Question 2 :** Appliquez la formule classique de superposition de deux ondes cohérentes issues de deux sources en phase. La différence de marche $\delta$ se calcule géométriquement par approximation paraxial.
*   **Question 3 :** Utilisez le théorème de convolution ou le principe de multiplication de l'intensité par le facteur de diffraction (en considérant que chaque fente agit comme une source secondaire porteuse d'un terme de diffraction).
*   **Question 4 & 5 :** Analysez l'enveloppe de la figure d'interférences (donnée par le terme de diffraction) et les oscillations rapides (données par le terme d'interférence). Posez le rapport $\frac{a}{b}$ pour trouver le nombre de franges sous le pic central de diffraction.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Diffraction par une fente unique de largeur $b$
L'amplitude complexe diffractée dans la direction repérée par l'angle $\theta \approx \frac{x}{f'}$ est obtenue en intégrant les contributions élémentaires sur la largeur de la fente $[-b/2, b/2]$ :
$$A_D(x) = A_0 \int_{-b/2}^{b/2} e^{i \frac{2\pi}{\lambda} u \sin\theta} \, du$$
Où $u$ est la coordonnée dans le plan de la fente. En posant $\sin\theta \approx \frac{x}{f'}$ :
$$A_D(x) = A_0 \left[ \frac{e^{i \frac{2\pi x u}{\lambda f'}}}{i \frac{2\pi x}{\lambda f'}} \right]_{-b/2}^{b/2} = A_0 b \, \frac{\sin\left(\frac{\pi b x}{\lambda f'}\right)}{\frac{\pi b x}{\lambda f'}} = A_0 b \, \text{sinc}(\beta)$$
Avec $\beta = \frac{\pi b x}{\lambda f'}$ et $\text{sinc}(u) = \frac{\sin u}{u}$.
L'intensité lumineuse est proportionnelle au carré du module de l'amplitude :
$$I_D(x) = I_0 \, \text{sinc}^2(\beta) = I_0 \left( \frac{\sin \beta}{\beta} \right)^2$$

#### 2. Interférences à deuxondes (sources idéales)
Pour deux sources ponctuelles distantes de $a$, la différence de marche $\delta$ entre les deux ondes arrivant au point $x$ du plan focal est $\delta \approx \frac{a x}{f'}$. 
Le déphasage $\varphi$ entre les deux ondes est :
$$\varphi = \frac{2\pi \delta}{\lambda} = \frac{2\pi a x}{\lambda f'} = 2\alpha$$
avec $\alpha = \frac{\pi a x}{\lambda f'}$.
L'intensité interférentielle s'écrit :
$$I_I(x) = 4 I_0' \cos^2\left(\frac{\varphi}{2}\right) = 4 I_0' \cos^2(\alpha)$$
*(où $I_0'$ est l'intensité due à une seule source ponctuelle).*

#### 3. Combinaison interférences et diffraction
Par application du principe de superposition et de modulation de Huygens-Fresnel, l'amplitude globale est le produit de l'amplitude d'interférence par le facteur de diffraction de chaque fente (modulation par la forme de l'ouverture). L'intensité totale s'écrit donc :
$$I(x) = I_0 \, \text{sinc}^2(\beta) \cos^2(\alpha)$$
où $I_0$ est l'intensité maximale au centre de la figure ($x=0$).
*   **Interprétation physique :** La diffraction par les fentes (de largeur $b$) enveloppe et module les franges d'interférences (dues à la distance $a$ entre les fentes). L'intensité ne peut dépasser l'enveloppe de diffraction.

#### 4. Application numérique et analyse
*   **Largeur de la tache centrale de diffraction :** L'intensité s'annule pour $\beta = \pm \pi$, soit :
    $$\frac{\pi b x_{\text{diff}}}{\lambda f'} = \pi \implies x_{\text{diff}} = \frac{\lambda f'}{b}$$
    A.N. : $x_{\text{diff}} = \frac{633 \times 10^{-9} \times 0,50}{0,20 \times 10^{-3}} = 1,58 \times 10^{-3}\text{ m} = 1,58\text{ mm}$.
*   **Interdistance des franges d'interférence :** Les franges brillantes sont espacées de :
    $$i = \frac{\lambda f'}{a}$$
    A.N. : $i = \frac{633 \times 10^{-9} \times 0,50}{1,0 \times 10^{-3}} = 3,16 \times 10^{-4}\text{ m} = 0,316\text{ mm}$.
*   **Nombre de franges sous le pic central :** Le nombre $N$ de franges brillantes contenues dans la tache centrale de diffraction (de $-x_{\text{diff}}$ à $+x_{\text{diff}}$) est donné par le rapport de la largeur de la tache de diffraction par l'interdistance :
    $$\frac{2 x_{\text{diff}}}{i} = 2 \frac{\lambda f' / b}{\lambda f' / a} = 2 \frac{a}{b}$$
    A.N. : $\frac{a}{b} = \frac{1,0}{0,20} = 5$. Il y a donc $2 \times 5 = 10$ franges brillantes sous le pic central de diffraction (en comptant la frange centrale).

#### 5. Extinction des franges (Franges manquantes)
Une frange brillante d'interférence est éteinte si elle coïncide avec un minimum d'intensité de la diffraction.
La condition de minimum de diffraction est :
$$\beta = k\pi \quad (k \in \mathbb{Z}^*)$$
$$\frac{\pi b x}{\lambda f'} = k\pi \implies x = k \frac{\lambda f'}{b}$$
La condition de maximum d'interférence est :
$$\alpha = m\pi \quad (m \in \mathbb{Z})$$
$$\frac{\pi a x}{\lambda f'} = m\pi \implies x = m \frac{\lambda f'}{a}$$
Il y a coïncidence (extinction) si les positions $x$ s'égalisent, c'est-à-dire si :
$$k \frac{\lambda f'}{b} = m \frac{\lambda f'}{a} \implies \frac{a}{b} = \frac{m}{k}$$
Puisque $\frac{a}{b} = 5$ dans notre application numérique, les franges d'interférence d'ordres $m = \pm 5, \pm 10, \dots$ coïncident avec les $k = \pm 1, \pm 2, \dots$ zéros de la diffraction. **La 5ème frange brillante de part et d'autre de la frange centrale est donc totalement éteinte (frange manquante).**