---
title: 'Exercice 1 : Empilements compacts et mailles cubiques'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

La cristallographie géométrique permet de décrire l'organisation à l'échelle microscopique des matériaux solides cristallins, en particulier les métaux et les alliages. Dans le cadre de l'étude des liaisons métalliques, on modélise très souvent les entités constitutives (atomes ou ions) par des sphères dures indéformables de rayon $R$. 

Le présent problème se propose d'étudier deux structures cristallines fondamentales : l'empilement compact ABCABC (structure cubique faces centrées, ou cfc) et sa description au moyen d'une maille conventionnelle, ainsi que la structure cubique centrée (cc), moins compacte, rencontrée notamment dans le fer $\alpha$ à température ambiante.

On adoptera les notations usuelles :
- $a$ : paramètre de la maille (arête du cube).
- $R$ : rayon de la sphère métallique.
- $\mathcal{N}_A$ : nombre d'Avogadro.
- $M$ : masse molaire de l'élément considéré.

---

### ❓ Questions progressives

1. **Rappels géométriques et compacité**
   1. Définir la compacité $\mathcal{C}$ d'une maille cristalline.
   2. Exprimer la relation de contact entre sphères dans une direction de compacité maximale.

2. **Étude de la maille Cubique Faces Centrées (cfc)**
   2.1. Représenter schématiquement la maille cfc et déterminer le nombre d'atomes effectifs $Z$ par maille.
   2.2. Établir la relation géométrique entre le paramètre de maille $a$ et le rayon $R$ des sphères en exploitant la condition de contact inter-atomique selon la diagonale d'une face.
   2.3. Calculer la compacité $\mathcal{C}_{\text{cfc}}$ de cet empilement. Donnée : $\sqrt{2} \approx 1{,}414$.

3. **Étude de la maille Cubique Centrée (cc)**
   3.1. Préciser la position des atomes dans la maille cubique centrée et déterminer sa multiplicité $Z'$.
   3.2. Établir la relation entre le paramètre de maille $a'$ et le rayon $R$ des sphères, la condition de contact étant établie selon la grande diagonale du cube.
   3.3. Calculer la compacité $\mathcal{C}_{\text{cc}}$ de cette structure. Donnée : $\sqrt{3} \approx 1{,}732$.

4. **Application numérique et transition allotropique du fer**
   4.1. Le fer pur présente une transition de phase solide-solide : à basse température, il est sous forme de fer $\alpha$ (structure cc, $R_{\text{Fe}} = 0{,}124\text{ nm}$). Calculer la masse volumique $\rho_{\alpha}$ du fer $\alpha$. 
   *Données :* $M(\text{Fe}) = 55{,}85\text{ g}\cdot\text{mol}^{-1}$, $\mathcal{N}_A = 6{,}022 \times 10^{23}\text{ mol}^{-1}$.
   4.2. À haute température, le fer se transforme en fer $\gamma$ (structure cfc). En supposant que le rayon atomique $R_{\text{Fe}}$ reste sensiblement constant lors de cette transition, prévoir qualitativement l'effet de cette transition sur la masse volumique du matériau.

---

### 💡 Pistes & Indications méthodologiques

- **Pour le décompte des atomes ($Z$)** : Ne pas oublier de compter les fractions d'atomes partagées (sommets : $1/8$, faces : $1/2$, centres : $1$).
- **Pour la compacité** : C'est le rapport du volume occupé par les sphères présentes dans la maille sur le volume total de la maille ($V_{\text{maille}} = a^3$). Attention au nombre d'atomes $Z$ par maille dans le calcul du volume occupé : $V_{\text{occupé}} = Z \times \left(\frac{4}{3}\pi R^3\right)$.
- **Pour la géométrie cfc** : Le contact se fait le long de la diagonale d'une face du cube, soit une longueur de $4R$ pour une diagonale de longueur $a\sqrt{2}$.
- **Pour la géométrie cc** : Le contact se fait le long de la grande diagonale du cube, soit une longueur de $4R$ pour une diagonale de longueur $a\sqrt{3}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Rappels géométriques et compacité
1.1. La compacité $\mathcal{C}$ d'une maille est définie par le rapport sans dimension :
$$\mathcal{C} = \frac{V_{\text{occupé}}}{V_{\text{maille}}} = \frac{Z \times \frac{4}{3}\pi R^3}{a^3}$$
où $Z$ est le nombre d'entités (atomes) appartenant en propre à la maille, $R$ le rayon de l'atome modélisé par une sphère dure, et $a$ le paramètre de maille.

1.2. Dans un empilement compact, les sphères se touchent le long des lignes de plus grand contact. La distance entre les centres de deux sphères tangentes est égale à deux rayons $2R$.

---

#### 2. Étude de la maille Cubique Faces Centrées (cfc)
2.1. La maille cfc possède des atomes aux 8 sommets du cube et au centre de ses 6 faces.
- Contribution des sommets : $8 \times \frac{1}{8} = 1$ atome.
- Contribution des faces : $6 \times \frac{1}{2} = 3$ atomes.
Le nombre total d'atomes effectifs par maille est donc :
$$Z = 1 + 3 = 4\text{ atomes par maille}$$

2.2. Dans la structure cfc, le contact entre les sphères s'établit le long de la diagonale d'une des faces du cube. 
Si on considère une face carrée de côté $a$, sa diagonale mesure $a\sqrt{2}$. Cette diagonale traverse un atome au centre de face et est en contact avec les deux atomes situés aux sommets opposés de cette même face. La longueur de cette diagonale vaut donc $4R$ :
$$a\sqrt{2} = 4R \implies a = \frac{4R}{\sqrt{2}} = 2\sqrt{2}R$$

2.3. Exprimons la compacité de la structure cfc :
$$\mathcal{C}_{\text{cfc}} = \frac{4 \times \frac{4}{3}\pi R^3}{(2\sqrt{2}R)^3} = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2} R^3} = \frac{\pi}{3\sqrt{2}}$$
A.N. : $\mathcal{C}_{\text{cfc}} = \frac{\pi}{3 \times 1{,}414} \approx 0{,}740$ soit **$74\,\%$**.
*(Il s'agit de la limite maximale théorique de compacité pour des sphères identiques, dite compacité maximale).*

---

#### 3. Étude de la maille Cubique Centrée (cc)
3.1. La maille cubique centrée (cc) comporte des atomes aux 8 sommets du cube et un atome au centre géométrique du cube.
- Contribution des sommets : $8 \times \frac{1}{8} = 1$ atome.
- Centre du cube : $1 \times 1 = 1$ atome.
Le nombre total d'atomes par maille est :
$$Z' = 1 + 1 = 2\text{ atomes par maille}$$

3.2. Dans la structure cc, les atomes des sommets ne se touchent pas directement. Le contact s'établit le long de la **grande diagonale** du cube (qui relie deux sommets opposés en passant par le centre du cube).
La longueur de la grande diagonale d'un cube de côté $a'$ est $a'\sqrt{3}$. Elle est occupée par le rayon de l'atome du sommet, le diamètre complet de l'atome central, et le rayon de l'autre atome du sommet opposé, soit $R + 2R + R = 4R$.
$$a'\sqrt{3} = 4R \implies a' = \frac{4R}{\sqrt{3}}$$

3.3. Calculons la compacité $\mathcal{C}_{\text{cc}}$ :
$$\mathcal{C}_{\text{cc}} = \frac{2 \times \frac{4}{3}\pi R^3}{(a')^3} = \frac{\frac{8}{3}\pi R^3}{\left(\frac{4R}{\sqrt{3}}\right)^3} = \frac{\frac{8}{3}\pi R^3}{\frac{64}{3\sqrt{3}}R^3} = \frac{8}{3} \times \frac{3\sqrt{3}}{64}\pi = \frac{\sqrt{3}\pi}{8}$$
A.N. : $\mathcal{C}_{\text{cc}} = \frac{1{,}732 \times \pi}{8} \approx 0{,}680$ soit **$68\,\%$**.
La structure cc est donc moins compacte que la structure cfc.

---

#### 4. Application numérique et transition allotropique du fer
4.1. Pour le fer $\alpha$ (structure cc, $Z' = 2$) :
Le paramètre de maille vaut :
$$a' = \frac{4 \times 0{,}124 \times 10^{-9}}{\sqrt{3}} = \frac{0{,}496 \times 10^{-9}}{1{,}732} \approx 2{,}864 \times 10^{-10}\text{ m} = 0{,}2864\text{ nm}$$
Le volume de la maille est $V_{\text{maille}} = (a')^3 \approx (2{,}864 \times 10^{-10})^3 \approx 2{,}35 \times 10^{-29}\text{ m}^3$.
La masse volumique $\rho_{\alpha}$ s'exprime par :
$$\rho_{\alpha} = \frac{m_{\text{maille}}}{V_{\text{maille}}} = \frac{Z' \times \frac{M}{\mathcal{N}_A}}{V_{\text{maille}}}$$
$$\rho_{\alpha} = \frac{2 \times 55{,}85 \times 10^{-3}}{6{,}022 \times 10^{23} \times 2{,}35 \times 10^{-29}} \approx \frac{111{,}7 \times 10^{-3}}{1{,}415 \times 10^{-5}} \approx 7894\text{ g}\cdot\text{m}^{-3}\text{ (soit } 7{,}89\text{ g}\cdot\text{cm}^{-3}\text{)}$$

4.2. Lors du passage du fer $\alpha$ (cc, $\mathcal{C} = 68\,\%$ donc structure moins "efficace" en terme de remplissage) au fer $\gamma$ (cfc, $\mathcal{C} = 74\,\%$, structure plus compacte), les atomes se réorganisent pour occuper l'espace de manière plus serrée. À rayon atomique constant, une compacité supérieure signifie qu'**à volume d'atomes égal, le volume de la maille macroscopique diminue**. 
Par conséquent, la masse volumique du fer $\gamma$ sera **plus élevée** que celle du fer $\alpha$.