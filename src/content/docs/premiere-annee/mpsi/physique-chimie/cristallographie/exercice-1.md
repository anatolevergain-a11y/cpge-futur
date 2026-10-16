---
title: 'Exercice 1 : Réseaux cubiques'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude thermodynamique et géométrique des réseaux cristallins cubiques

**Filière :** MPSI  
**Matière :** Physique-Chimie  
Chapitre: ** Cristallographie  
**Thème :** Réseaux cubiques, compacité et liaisons interatomiques  

---

## 1. Énoncé

Le présent problème se propose d'étudier l'organisation spatiale de la matière cristalline à l'état solide à travers l'exemple des structures cubiques. On modélise les entités chimiques (atomes, ions) par des sphères rigides indéformables de rayon $R$, en contact les unes avec les autres selon des directions privilégiées de l'espace. 

On s'intéresse successivement au réseau cubique simple (CS), au réseau cubique centré (CC) et au réseau cubique à faces centrées (CFC). L'objectif est d'évaluer l'efficacité du remplissage de l'espace par le calcul de la compacité, puis de relier ces architectures microscopiques à des données macroscopiques telles que la masse volumique, avant de discuter rigoureusement des limites du modèle sphérique rigide.

---

## 2. Questions

### Partie I : Étude géométrique et compacité des réseaux cubiques

1. **Réseau Cubique Simple (CS)**
   * **Q1.** Définir la multiplicité (ou nombre de motifs par maille) d'un réseau cubique simple de paramètre de maille $a$.
   * **Q2.** Exprimer la relation de contact entre les sphères en fonction du paramètre de maille $a$ et du rayon $R$.
   * **Q3.** Calculer la compacité $c$ de ce réseau, définie comme le rapport du volume occupés par les sphères dans la maille sur le volume total de la maille. Conclure quant à sa stabilité.

2. **Réseau Cubique Centré (CC)**
   * **Q4.** Déterminer le nombre de motifs par maille pour le réseau cubique centré.
   * **Q5.** Identifier la direction de contact interatomique (diagonal de l'espace du cube). Exprimer le paramètre $a$ en fonction du rayon $R$.
   * **Q6.** Calculer la compacité $c_{CC}$ du réseau cubique centré.

3. **Réseau Cubique à Faces Centrées (CFC)**
   * **Q7.** Déterminer le nombre de motifs par maille pour le réseau CFC.
   * **Q8.** Préciser la direction de contact géométrique et exprimer $a$ en fonction de $R$.
   * **Q9.** Calculer la compacité $c_{CFC}$ de ce réseau et la comparer aux deux précédents. Quel est le nom de ce type d'empilement ?

### Partie II : Application macroscopique et analyse critique

4. **Application au cas du Cuivre**
   * **Q10.** Le cuivre cristallise selon le système cubique à faces centrées. Sa masse volumique est $\rho = \mathbf{8{,}96 \text{ g}\cdot\text{cm}^{-3}}$ et sa masse molaire atomique est $M = \mathbf{63{,}5 \text{ g}\cdot\text{mol}^{-1}}$. Rappelant la constante d'Avogadro $N_A \approx \mathbf{6{,}02 \times 10^{23} \text{ mol}^{-1}}$, calculer le paramètre de maille $a$ du cuivre. En déduire le rayon atomique $R$ du cuivre en nanomètres ($\text{nm}$).

5. **Analyse critique et limites du modèle**
   * **Q11.** Discuter la validité du modèle des sphères rigides. Quelles sont les hypothèses implicites fortes de ce modèle vis-à-vis de la liaison chimique, de la température et de l'isotropie ? Pourquoi les atomes ne peuvent-ils pas être rigoureusement assimilés à des billes de billard ?

---

## 3. Pistes et Indications

* **Pour la compacité :** Pensez à exprimer le volume d'une sphère ($V_{\text{sphère}} = \frac{4}{3}\pi R^3$) et à le multiplier par le nombre effectif d'atomes appartenant entièrement à la maille (attention au partage des atomes situés aux sommets, sur les faces ou au centre).
* **Pour la géométrie :** Utilisez le théorème de Pythagore dans le plan pour le réseau CFC (diagonale d'une face) et dans l'espace pour le réseau CC (diagonale du cube).
* **Pour l'application numérique :** Soyez extrêmement rigoureux avec l'homogénéité des unités (convertir les $\text{g}$ en $\text{kg}$ ou $\text{cm}^3$ en $\text{m}^3$).

---

## 4. Corrigé pas à pas

### Partie I : Étude géométrique et compacité

#### 1. Réseau Cubique Simple (CS)
* **Q1.** Une maille cubique simple possède 8 sommets. Chaque sommet est partagé par 8 mailles adjacentes.  
  $$\text{Nombre de motifs } N = 8 \times \frac{1}{8} = 1 \text{ motif par maille}$$

* **Q2.** Dans un réseau CS, les sphères sont en contact le long des arêtes du cube. La relation de contact est donc :  
  $$a = 2R$$

* **Q3.** Le volume de la maille est $V_{\text{maille}} = a^3 = (2R)^3 = 8R^3$.  
  Le volume occupé par la sphère est $V_{\text{occupé}} = 1 \times \left(\frac{4}{3}\pi R^3\right) = \frac{4}{3}\pi R^3$.  
  La compacité est :  
  $$c_{CS} = \frac{V_{\text{occupé}}}{V_{\text{maille}}} = \frac{\frac{4}{3}\pi R^3}{8R^3} = \frac{\pi}{6} \approx \mathbf{0{,}52} \text{ (soit } 52\% \text{)}$$  
Conclusion: * Cette compacité est très faible, ce qui rend ce réseau instable et extrêmement rare dans la nature (seul le polonium alpha à basse température l'adopte dans des conditions spécifiques).

#### 2. Réseau Cubique Centré (CC)
* **Q4.** Le réseau CC comporte 8 atomes aux sommets et 1 atome au centre de la maille.  
  $$N = \left(8 \times \frac{1}{8}\right) + 1 = 2 \text{ motifs par maille}$$

* **Q5.** Les atomes se touchent le long de la diagonale principale du cube (de longueur $a\sqrt{3}$). Le contact s'établit entre l'atome central et les 8 atomes des sommets.  
  $$4R = a\sqrt{3} \implies a = \frac{4R}{\sqrt{3}}$$

* **Q6.** Le volume de la maille est $V_{\text{maille}} = \left(\frac{4R}{\sqrt{3}}\right)^3 = \frac{64R^3}{3\sqrt{3}}$.  
  Le volume occupé est $V_{\text{occupé}} = 2 \times \left(\frac{4}{3}\pi R^3\right) = \frac{8}{3}\pi R^3$.  
  La compacité est :  
  $$c_{CC} = \frac{\frac{8}{3}\pi R^3}{\frac{64\sqrt{3}}{9} R^3} = \frac{\sqrt{3}\pi}{8} \approx \mathbf{0{,}68} \text{ (soit } 68\% \text{)}$$

#### 3. Réseau Cubique à Faces Centrées (CFC)
* **Q7.** Le réseau CFC possède 8 atomes aux sommets et 6 atomes au centre des faces.  
  $$N = \left(8 \times \frac{1}{8}\right) + \left(6 \times \frac{1}{2}\cents\right) = 1 + 3 = 4 \text{ motifs par maille}$$  
  *(Note : correction typographique mineure, $6 \times \frac{1}{2} = 3$)*

* **Q8.** Le contact entre sphères se fait le long de la diagonale d'une face du cube (de longueur $a\sqrt{2}$).  
  $$4R = a\sqrt{2} \implies a = \frac{4R}{\sqrt{2}} = 2\sqrt{2}R$$

* **Q9.** Le volume de la maille est $V_{\text{maille}} = (2\sqrt{2}R)^3 = 16\sqrt{2}R^3$.  
  Le volume occupé est $V_{\text{occupé}} = 4 \times \left(\frac{4}{3}\pi R^3\right) nu = \frac{16}{3}\pi R^3$.  
  La compacité est :  
  $$c_{CFC} = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2}R^3} = \frac{\pi}{3\sqrt{2}} \approx \mathbf{0{,}74} \text{ (soit } 74\% \text{)}$$  
Conclusion: * C'est la compacité maximale démontrée pour l'empilement de sphères identiques (conjecture de Kepler). Cet empilement correspond à l'empilement compact cubique (type ABCABC...).

---

### Partie II : Application macroscopique et analyse critique

#### 4. Application au cas du Cuivre
* **Q10.** Exprimons la masse volumique macroscopique à l'échelle microscopique dans une maille :  
  $$\rho = \frac{m_{\text{maille}}}{V_{\text{maille}}} = \frac{N \times M}{N_A \times a^3}$$  
  En isolant le paramètre de maille $a$ :  
  $$a^3 = \frac{N \times M}{\rho \cdot N_A}$$  
  A.N. :  
  * $N = 4$ (car CFC)
  * $M = 63{,}5 \times 10^{-3} \text{ kg}\cdot\text{mol}^{-1}$
  * $\rho = 8{,}96 \times 10^3 \text{ kg}\cdot\text{m}^{-3}$
  * $N_A = 6{,}02 \times 10^{23} \text{ mol}^{-1}$

  $$a^3 = \frac{4 \times 63{,}5 \times 10^{-3}}{8{,}96 \times 10^3 \times 6{,}02 \times 10^{23}} \approx 4{,}708 \times 10^{-29} \text{ m}^3$$  
  En extrayant la racine cubique :  
  $$a = (4{,}708 \times 10^{-29})^{1/3} \approx 3{,}61 \times 10^{-10} \text{ m} = \mathbf{0{,}361 \text{ nm}}$$  

  Pour le rayon atomique $R$ (relation Q8 pour le CFC : $a = 2\sqrt{2}R$) :  
  $$R = \frac{a}{2\sqrt{2}} = \frac{0{,}361}{2 \times 1{,}414} \approx \mathbf{0{,}128 \text{ nm}}$$

#### 5. Analyse critique et limites du modèle
* **Q11.** Le modèle des sphères rigides présente de nombreuses limites fondamentales qu'un candidat de concours se doit de mentionner :
  1. **Nature de la liaison chimique :** Les atomes ne sont pas des billes dures indépendantes. Dans un métal (comme le cuivre), les électrons de valence sont délocalisés dans une « mer d'électrons » (liaison métallique). La notion de « rayon atomique rigide » est donc une approximation commode mais physique fausse.
  2. **Température et vibrations :** Le modèle suppose des positions fixes à $0 \text{ K}$. À température ambiante, les atomes vibrent autour de leur position d'équilibre (agitation thermique), ce qui fait varier "effectivement" le volume de la maille (dilatation thermique) et rend la notion de "contact rigide" caduque.
  3. **Anisotropie et déformation :** Les nuages électroniques ne sont pas parfaitement sphériques (phénomènes de polarisabilité, liaisons directionnelles dans les cristaux covalents). Le modèle montre d'ailleurs ses limites absolues dès qu'on sort des métaux (structures ioniques ou covalentes où la coordinence est dictée par la stœchiométrie et l'électrostatique, ex : structure $\text{NaCl}$ ou $\text{ZnS}$).