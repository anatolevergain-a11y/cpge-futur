---
title: 'Exercice 1 : PFS et frottement'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude d'un système de freinage à patin (Filière PTSI - SI)

---

## Enoncé du problème

Le système étudié, partiel d'un mécanisme de levage industriel, est représenté schématiquement ci-dessous. Il s'agit d'un dispositif de freinage d'urgence par patin sur un tambour en rotation.

### Données et paramètres du problème :
* Le tambour (1), assimilé à un cylindre d'axe $(O, \vec{z})$ et de rayon $R$, est en mouvement par rapport au bâti fixe (0).
* Le bras de levier (2), de masse négligeable, est articulé en $A$ sur le bâti (0) et en $B$ sur le patin de frein (3).
* Le patin (3), en contact avec le tambour (1) au point $C$, est soumis à une force de commande $\vec{F} = -F \vec{x}$ appliquée en $D$ sur le levier (2).
* Le contact en $C$ entre le tambour (1) et le patin (3) est ponctuel avec frottement de Coulomb, de coefficient de frottement $f$.
* On note $\mathcal{R}_0 (O, \vec{x}, \vec{y}, \vec{z})$ le repère galiléen lié au bâti (0).
* Géométrie (paramètres constants) :
  * $\overrightarrow{OA} = L_1 \vec{y}$
  * $\overrightarrow{AB} = L_2 \vec{x}$
  * $\overrightarrow{AC} = L_3 \vec{x} - l \vec{y}$ (repérage du point d'application de l'action de contact)
  * $\overrightarrow{AD} = L_4 \vec{x} - H \vec{y}$ (point d'application de la force de commande)
* On étudie la phase critique où le tambour (1) tend à tourner dans le sens horaire (vitesse de rotation $\omega < 0$).

---

## Corrigé et guidage pas à pas

### Question 1 : Isolement et Bilan des Actions Mécaniques Extérieures (BAME)
Objectif: ** Isoler les solides pertinents et identifier les actions mécaniques.

1. **Isolation du patin (3)** :
   Le patin (3) est soumis à :
   * L'action du bras (2) en $B$ (liaison pivot d'axe $(B, \vec{z})$ par exemple, ou rotule, modélisée par une force $\vec{R}_{2 \to 3}$).
   * L'action du tambour (1) en $C$ (contact ponctuel avec frottement).

2. **Isolation de l'ensemble \{Bras (2) + Patin (3)\}** :
   Pour s'affranchir de l'liaison interne en $B$, il est souvent judicieux d'isoler l'ensemble $S = (2) \cup (3)$.
   Faisons le BAME de l'ensemble $S$ en supposant le système en équilibre (limite du mouvement, seuil de glissement) :
   * Action de la liaison pivot en $A$ exercée par (0) sur (2) : $\vec{R}_{0 \to 2} = X_{02}\vec{x} + Y_{02}\vec{y}$.
   * Action de la force de commande extérieure en $D$ : $\vec{F} = -F \vec{x}$ (avec $F > 0$).
   * Action du tambour (1) sur le patin (3) en $C$ : $\vec{R}_{1 \to 3} = \vec{N} + \vec{T}$.

---

### Question 2 : Modélisation de l'action de contact en $C$ avec frottement

**Rappel de cours (Coulomb) :** Lors d'un glissement ou au seuil du glissement, la force de contact $\vec{R}_{1 \to 3}$ s'incline par rapport à la normale au plan tangent.

* Soit $\vec{n}$ la normale unitaire au contact en $C$ dirigée de (1) vers (3) : $\vec{n} = -\vec{y}$ (si on considère le patin au-dessus du tambour).
* La composante normale est $\vec{N} = -N \vec{y}$ avec $N > \text{0}$ (effort presseur).
* Le tambour (1) tourne dans le sens horaire ($\omega < 0$). La vitesse de glissement du patin par rapport au tambour en $C$, $\vec{V}(C \in 3/1)$, est orientée dans le sens du mouvement de (1). Par conséquent, la force tangentielle $\vec{T}$ exercée par (1) sur (3) s'oppose au mouvement de (1) par rapport à (3).
* Au seuil de glissement, la norme de la force tangentielle vérifie $T = f N$.
* Ainsi, l'action de contact s'écrit :
  $$\vec{R}_{1 \to 3} = -f N \vec{x} - N \vec{y} \quad (\text{si } \omega < 0 \text{ et entraînement horaire})$$

---

### Question 3 : Application du Principe Fondamental de la Statique (PFS)
Objectif: ** Déterminer l'effort de commande $F$ nécessaire pour équilibrer un couple de freinage donné.

On applique le PFS à l'ensemble $S = (2) \cup (3)$ au point $A$ (centre des moments judicieux car il annule le moment de la liaison en $A$).

$$\sum \vec{M}_A(\text{Ext} \to S) = \vec{0}$$

exprimé en $A$ :
$$\vec{M}_A(\text{Force } \vec{F}) + \vec{M}_A(\text{Action en } C) = \vec{0}$$

1. **Calcul du moment de la force $\vec{F}$ en $A$** :
   $$\vec{M}_A(\vec{F}) = \overrightarrow{AD} \wedge \vec{F} = (L_4 \vec{x} - H \vec{y}) \wedge (-F \vec{x}) = H \cdot F \vec{z}$$

2. **Calcul du moment de l'action en $C$ en $A$** :
   $$\vec{M}_A(\vec{R}_{1 \to 3}) = \overrightarrow{AC} \wedge \vec{R}_{1 \to 3} = (L_3 \vec{x} - l \vec{y}) \wedge (-f N \vec{x} - N \vec{y})$$
   $$\vec{M}_A(\vec{R}_{1 \to 3}) = \left[ L_3(-N) - (-l)(-f N) \right] \vec{z} = N (-L_3 - f l) \vec{z}$$

3. **Projection de la rėgle des moments suivant $\vec{z}$** :
   $$H \cdot F - N(L_3 + f l) = 0 \implies F = \frac{N(L_3 + f l)}{H}$$

---

### Question 4 : Expression du couple de freinage

Le couple de freinage $C_f$ exercé par le dispositif sur le tambour (1) est opposé au moment de l'action de contact exercée par (3) sur (1) évalué au centre $O$ du tambour.

$$\vec{C}_{\text{freinage}} = -\vec{M}_O(\text{Action de } 3 \text{ sur } 1) = \vec{M}_O(\text{Action de } 1 \text{ sur } 3)$$

En supposant le point $C$ proche de l'axe vertical du tambour tel que $\overrightarrow{OC} \approx R \vec{y}$ :
$$C_f = \|\overrightarrow{OC} \wedge \vec{T}\| = R \cdot T = R \cdot f \cdot N$$

En substituant $N$ en fonction de $F$ trouvé précédemment ($N = \frac{H \cdot F}{L_3 + f l}$) :
$$C_f = \frac{R \cdot f \cdot H \cdot F}{L_3 + f l}$$

---

### Analyse critique des résultats

1. **Influence du coefficient de frottement $f$** :
   Le numérateur contient $f$, ce qui montre qu'augmenter le frottement augmente l'efficacité du frein. Cependant, le terme $f l$ apparaît également au dénominateur. Selon les valeurs géométriques, un frottement trop élevé peut modifier la ligne d'action globale.
2. **Phénomène d'auto-serrage (Garde-fou concours)** :
   Si la géométrie du système est telle que $(L_3 + f l) \le 0$ (selon le sens de rotation et le positionnement du point $C$), le système peut devenir **irréversible** ou présenter un phénomène d'**auto-grippage** (l'effort $F$ nécessaire devient négatif ou nul pour maintenir le freinage, le système s'emballe seul).
3. **Validité des hypothèses** : L'application rigoureuse du modèle de Coulomb suppose que la vitesse de glissement est non nulle (phase de freinage dynamique). En fin de freinage ($\omega \to 0$), le modèle statique pur montre ses limites et une étude adhésion/glissement s'avère nécessaire.