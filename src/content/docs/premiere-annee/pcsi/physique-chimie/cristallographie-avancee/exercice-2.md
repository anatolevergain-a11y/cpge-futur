---
title: 'Exercice 2 : Cristaux ioniques et covalents'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Étude énergétique et structurale de solides cristallins (Modèle ionique et covalent)

*Ce problème aborde la modélisation thermodynamique et géométrique de deux types de solides cristallins majeurs : le chlorure de césium ($\text{CsCl}$), prototype du cristal ionique, et le diamant, prototype du cristal covalent.*

---

## I. Énoncé

### Partie A : Le cristal ionique du chlorure de césium ($\text{CsCl}$)
Le chlorure de césium cristallise dans un système cubique. Les ions chlorure $\text{Cl}^-$ occupent les sommets d'un cube de paramètre $a$, et l'ion césium $\text{Cs}^+$ occupe le centre géométrique de ce cube. 
On modélise les ions par des sphères dures de rayons respectifs $R_+$ pour $\text{Cs}^+$ et $R_-$ pour $\text{Cl}^-$.

1. Déterminer la coordinence de chaque type d'ion dans cette structure.
2. Établir la relation géométrique de contact entre les ions le long de la grande diagonale du cube en fonction de $a$, $R_+$ et $R_-$.
3. Exprimer la compacité $C$ de la maille en fonction des rayons $R_+$ et $R_-$.
4. Évaluer l'énergie réticulaire de ce cristal à l'aide d'un modèle électrostatique simplifié (Madelung).

### Partie B : Le cristal covalent du diamant
Le carbone cristallise sous la structure du diamant. La maille est cubique à faces centrées (CFC), avec un motif double : un premier réseau CFC d'ions/atomes et un second décalé d'un quart de la grande diagonale du cube $\left(\frac{1}{4}, \frac{1}{4}, \frac{1}{4}\right)$.

1. Indiquer la coordinence des atomes de carbone dans cette structure.
2. Exprimer la liaison carbone-carbone $d$ en fonction du paramètre de maille $a$.
3. Calculer la compacité maximale de cette structure.

---

## II. Questions

1. **(Partie A)** Justifier la condition de stabilité géométrique (ou critère de rayon limite) pour que le contact $\text{Cs}^+ - \text{Cl}^-$ soit effectif sans recouvrement illicite des anions entre eux.
2. **(Partie A)** Exprimer l'énergie potentielle électrostatique d'une paire d'ions, puis l'énergie réticulaire par mole en introduisant la constante de Madelung $M$ et le terme répulsif de Born (exposant $n$).
3. **(Partie B)** Discuter de l'anisotropie et de la directionnalité des liaisons dans le diamant par opposition au cristal ionique.
4. **(Synthèse et Esprit critique)** Proposer une **analyse critique des limites du modèle** des sphères dures et de l'ionicité pure dans ces deux structures.

---

## III. Pistes

* **Piste 1 (Géométrie) :** Penser à utiliser les coordonnées cartésiennes des sommets et du centre du cube pour exprimer les distances interioniques.
* **Piste 2 (Compacité) :** Le volume occupé dans la maille correspond au volume total des sphères considérées comme pleines appartenant en propre à la maille.
* **Piste 3 (Énergétique) :** L'énergie réticulaire résulte de la compétition entre l'attraction coulombienne et la répulsion à court terme des nuages électroniques (principe d'exclusion de Pauli).
* **Piste 4 (Critique) :** Interrogez-vous sur la sphéricité réelle des nuages électroniques, la polarisabilité des ions et la nature purement électrostatique des liaisons.

---

## IV. Corrigé pas à pas

### Partie A : Chlorure de Césium ($\text{CsCl}$)

1. **Coordinence :** L'ion $\text{Cs}^+$ au centre est entouré par 8 ions $\text{Cl}^-$ situés aux sommets. Réciproquement, par translation du réseau, un ion $\text{Cl}^-$ est au centre d'un cube formé par 8 ions $\text{Cs}^+$. Les coordinences sont donc de $(8, 8)$.
2. **Relation géométrique :** Le contact s'établit le long de la grande diagonale du cube de longueur $a\sqrt{3}$. Cette diagonale passe par un sommet ($\text{Cl}^-$), traverse le centre ($\text{Cs}^+$) et va jusqu'au sommet opposé ($\text{Cl}^-$). On a donc :
   $$a\sqrt{3} = 2(R_+ + R_-)$$
3. **Compacité $C$ :** 
   Le nombre d'entités par maille est $N_{\text{Cs}^+} = 8 \times \frac{1}{8} = 1$ et $N_{\text{Cl}^-} = 1$ (centre) + contributions des sommets (comptées dans le premier). La maille contient donc 1 motif $\text{CsCl}$.
   $$C = \frac{\mathcal{V}_{\text{ions}}}{\mathcal{V}_{\text{maille}}} = \frac{\frac{4}{3}\pi(R_+^3 + R_-^3)}{a^3}$$
   En remplaçant $a = \frac{2(R_+ + R_-)}{\sqrt{3}}$, on obtient :
   $$C = \frac{\frac{4}{3}\pi(R_+^3 + R_-^3)}{\left(\frac{2(R_+ + R_-)}{\sqrt{3}}\right)^3} = \frac{\sqrt{3}\pi}{2} \frac{R_+^3 + R_-^3}{(R_+ + R_-)^3}$$

---

### Partie B : Diamant

1. **Coordinence :** Chaque atome de carbone est au centre d'un tétraèdre régulier formé par 4 autres atomes de carbone. La coordinence est **4**.
2. **Liaison C-C :** La distance interatomique $d$ correspond à la distance entre un sommet du tétraèdre et son centre. D'après la géométrie du tétraèdre inclus dans la fraction de maille, cette distance vaut :
   $$d = \frac{a\sqrt{3}}{4}$$
3. **Compacité :** La maille CFC contient $8 \times \frac{1}{8} + 6 \times \frac{1}{2} = 4$ atomes, auxquels s'ajoutent 4 atomes entièrement intérieurs (réseau décalé), soit un total de $Z = 8$ atomes par maille.
   $$C = \frac{8 \times \left(\frac{4}{3}\pi R^3\right)}{a^3}$$
   Avec $R = \frac{d}{2} = \frac{a\sqrt{3}}{8}$, on trouve :
   $$C = \frac{32\pi}{3 a^3} \left(\frac{a\sqrt{3}}{8}\right)^3 = \frac{\sqrt{3}\pi}{16} \approx 0{,}34$$

---

### Analyse critique des limites du modèle (Questions de synthèse)

1. **Modèle des sphères dures :** Ce modèle géométrique suppose une incompressibilité absolue des ions/atomes et une sphéricité parfaite. Or, les nuages électroniques sont déformables (phénomène de **polarisabilité**), en particulier pour les grands anions comme $\text{Cl}^-$ soumis au champ électrique intense des cations voisins.
2. **Hypothèse d'ionicité pure :** Le cristal $\text{CsCl}$ n'est pas strictement ionique (transfert d'électron intégraux). Il existe un faible pourcentage de covalence dans la liaison $\text{Cs-Cl}$ liée au recouvrement partiel des orbitales atomiques. Inversement, la liaison dans le diamant est purement covalente et fortement **directionnelle** (hybridation $sp^3$), ce qui explique la faible compacité ($34\%$) comparée aux empilements compacts métalliques ou ioniques ($74\%$).
3. **Potentiel de Born-Mayer :** L'évaluation de l'énergie réticulaire néglige souvent les termes d' van der Waals attractifs à plus longue distance et suppose un terme répulsif empirique (exposant $n$ de Born) qui ne reflète qu'imparfaitement la réalité quantique de la répulsion interélectronique.