---
title: 'Cours : Architecture de la matière'
description: 'Synthèse officielle du cours et démonstrations pour CPGE MPSI.'
---

## 📌 1. Définitions & Cadre d'étude

Le chapitre portant sur l'**architecture de la matière** en classe de première année MPSI vise à modéliser l'état condensé (solide cristallin) et l'état gazeux, ainsi que les entités microscopiques qui les constituent.

### A. Échelle microscopique et constituants
* **Atomistique élémentaire :** Un atome est caractérisé par son nombre de charges Z (numéro atomique) et son nombre de masse A. Les isotopes possèdent le même Z mais un nombre de neutrons différent.
* **Modèle quantique simple (rappel) :** On associe à l'électron une fonction d'onde approchée par des nombres quantiques. Les orbitales atomiques ($s, p, d, f$) décrivent la densité de probabilité de présence.
* **Électronégativité :** Aptitude d'un atome à attirer les électrons au sein d'une liaison chimique. L'échelle de Pauling est la plus courante. La différence d'électronégativité $\Delta \chi$ détermine le caractère covalent ou ionique d'une liaison.

### B. Cristallographie (Solides cristallins)
* **Cristal :** Empilement périodique et ordonné d'entités chimiques (atomes, ions, molécules).
* **Réseau :** Ensemble de points de l'espace périodiquement disposés, appelés nœuds.
* **Maille élémentaire :** Plus petit volume dont la translation répétée dans les trois directions de l'espace permet de reconstituer le cristal entier.
* **Paramètres de maille :** Longueurs des arêtes $a, b, c$ et angles $\alpha, \beta, \gamma$. Le programme se restreint quasi-exclusivement au système cubique ($a = b = c$ et $\alpha = \beta = \gamma = 90^\circ$).
* **Compacité ($\mathcal{C}$) :** Rapport du volume occupé par les entités (assimilées à des sphères dures de rayon $R$) au volume total de la maille :
$$\mathcal{C} = \frac{V_{\text{occupé}}}{V_{\text{maille}}}$$
* **Masse volumique ($\rho$) :** Exprimée par la relation :
$$\rho = \frac{M \cdot Z_{\text{eff}}}{N_A \cdot V_{\text{maille}}}$$
où $M$ est la masse molaire, $Z_{\text{eff}}$ le nombre de motifs par maille, et $N_A$ la constante d'Avogadro.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Propriétés géométriques des structures cristallines de référence

Il est exigé de maîtriser les trois structures cubiques principales :
1. **Cubique Simple (CS) :** Nœuds aux 8 sommets du cube.
   * Nombre de motifs par maille : $Z_{\text{eff}} = 8 \times \frac{1}{8} = 1$.
   * Relation contact : $a = 2R$.
   * Compacité : $\mathcal{C} = \frac{\frac{4}{3}\pi R^3}{(2R)^3} = \frac{\pi}{6} \approx 0.52$.

2. **Cubique Centré (CC) :** Nœuds aux 8 sommets + 1 au centre du cube.
   * Nombre de motifs par maille : $Z_{\text{eff}} = 8 \times \frac{1}{8} + 1 = 2$.
   * Contact le long de la diagonale du cube : $4R = a\sqrt{3} \implies a = \frac{4R}{\sqrt{3}}$.
   * **Démonstration de la compacité :**
     $$V_{\text{maille}} = a^3 = \left(\frac{4R}{\sqrt{3}}\right)^3 = \frac{64 R^3}{3\sqrt{3}}$$
     $$V_{\text{occupé}} = 2 \times \left(\frac{4}{3}\pi R^3\right) = \frac{8}{3}\pi R^3$$
     $$\mathcal{C} = \frac{\frac{8}{3}\pi R^3}{\frac{64 R^3}{3\sqrt{3}}} = \frac{\sqrt{3}\pi}{8} \approx 0.68$$

3. **Cubique à Faces Centrées (CFC) :** Nœuds aux 8 sommets + centres des 6 faces.
   * Nombre de motifs par maille : $Z_{\text{eff}} = 8 \times \frac{1}{8} + 6 \times \frac{1}{2} = 4$.
   * Contact le long de la diagonale d'une face : $4R = a\sqrt{2} \implies a = \frac{4R}{\sqrt{2}}$.
   * **Démonstration de la compacité :**
     $$V_{\text{maille}} = a^3 = \left(\frac{4R}{\sqrt{2}}\right)^3 = \frac{64 R^3}{2\sqrt{2}} = 16\sqrt{2} R^3$$
     $$V_{\text{occupé}} = 4 \times \left(\frac{4}{3}\pi R^3\right) = \frac{16}{3}\pi R^3$$
     $$\mathcal{C} = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2} R^3} = \frac{\pi}{3\sqrt{2}} = \frac{\pi \sqrt{2}}{6} \approx 0.74$$
     *(Note : Il s'agit de l'empilement compact maximal, lié à la conjecture de Kepler).*

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Calcul du nombre effectif de motifs ($Z_{\text{eff}}$)
Pour déterminer $Z_{\text{eff}}$ dans une maille :
1. Identifier la position des entités :
   * Sommet : partagé par $8$ mailles $\rightarrow$ contribution $\frac{1}{8}$.
   * Centre d'une face : partagé par $2$ mailles $\rightarrow$ contribution $\frac{1}{2}$.
   * Centre d'une arête : partagé par $4$ mailles $\rightarrow$ contribution $\frac{1}{4}$.
   * Intérieur de la maille : entièrement inclus $\rightarrow$ contribution $1$.
2. Sommer les contributions de toutes les entités contenues strictement ou partiellement dans le volume de la maille.

### B. Détermination de la coordinence
* La **coordinence** (ou nombre de coordination) est le nombre de plus proches voisins d'une entité donnée.
* *Méthode :* Se placer sur un nœud origine et compter directement les centres des sphères tangentes à la sphère origine dans la maille et ses maille-voisines adjacentes.
  * CS : coordinence $6$.
  * CC : coordinence $8$.
  * CFC : coordinence $12$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre rayon de l'atome et paramètre de maille :** Ne jamais écrire $a = 2R$ de manière générale. Le contact ne se fait le long des arêtes que dans le système cubique simple. Dans le CC, le contact est sur la diagonale du cube, et dans le CFC, sur la diagonale de la face.
2. **Erreurs de calcul sur les fractions de partage :** Oublier qu'un atome situé sur une face appartient à deux mailles adjacentes, ce qui conduit à diviser par $2$ et non par $4$.
3. **Homogénéité des unités :** Lors du calcul de la masse volumique $\rho$, attention aux conversions : exprimer $a$ en mètres ($\text{m}$) ou centimètres ($\text{cm}$), $M$ en $\text{g}\cdot\text{mol}^{-1}$ et $N_A$ en $\text{mol}^{-1}$ pour obtenir $\rho$ en $\text{g}\cdot\text{cm}^{-3}$ ou $\text{kg}\cdot\text{m}^{-3}$.
4. **Oubli de la structure ionique :** Pour les cristaux ioniques (type $\text{NaCl}$, $\text{CsCl}$), les deux types d'ions forment souvent des réseaux emboîtés (par exemple, réseau CFC pour les anions $\text{Cl}^-$ et sites interstitiels octédriques occupés par les cations $\text{Na}^+$). Le calcul de $Z_{\text{eff}}$ doit se faire indépendamment pour chaque type d'ion.