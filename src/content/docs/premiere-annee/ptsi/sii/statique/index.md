---
title: 'Cours : Statique des solides'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

### A. Modélisation géométrique et cinématique
La statique des solides indéformables étudie l'équilibre mécanique des systèmes dans un référentiel galiléen. 
Un solide $\mathcal{S}$ est dit indéformable si, pour tout couple de points $(M, N)$ appartenant à $\mathcal{S}$, la distance $PM = \| \vec{MN} \}$ est constante au cours du temps.

### B. Torseurs des actions mécaniques (TAM)
Une action mécanique extérieure exercée par un milieu $\mathcal{E}$ sur un solide $\mathcal{S}$ est modélisée par un torseur, noté $\{\mathcal{T}_{\mathcal{E}\to\mathcal{S}}\}$. En tout point $A$, ce torseur se réduit à :

$$\{\mathcal{T}_{\mathcal{E}\to\mathcal{S}}\}_A = \begin{Bmatrix} \vec{R}_{\mathcal{E}\to\mathcal{S}} \\ \vec{M}_{A,\mathcal{E}\to\mathcal{S}} \end{Bmatrix}_A$$

- $\vec{R}_{\mathcal{E}\to\mathcal{S}}$ est la **résultante** du torseur (en $\text{N}$).
- $\vec{M}_{A,\mathcal{E}\to\mathcal{S}}$ est le **moment** du torseur au point $A$ (en $\text{N}\cdot\text{m}$).

**Propriété de transport du moment :**
Soit $A$ et $B$ deux points de l'espace. Le moment en $B$ se déduit du moment en $A$ par la relation de transport :
$$\vec{M}_{B,\mathcal{E}\to\mathcal{S}} = \vec{M}_{A,\mathcal{E}\to\mathcal{S}} + \vec{BA} \land \vec{R}_{\mathcal{E}\to\mathcal{S}}$$

### C. Notion d'isolement d'un système
Isoler un système, c'est définir précisément la frontière du système $\mathcal{S}$ étudié. Le bilan des actions mécaniques extérieures (BAMEx) consiste à recenser tous les torseurs $\{\mathcal{T}_{i\to\mathcal{S}}\}$ appliqués par le milieu extérieur $\mathcal{E}$ sur $\mathcal{S}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Principe Fondamental de la Statique (PFS)
Un solide $\mathcal{S}$ est dit en équilibre dans un référentiel galiléen $\mathcal{R}_g$ si et seulement si la somme de tous les torseurs des actions mécaniques extérieures appliquées à $\mathcal{S}$ est nulle en tout point $A$ :

$$\sum_{\text{i}} \{\mathcal{T}_{i\to\mathcal{S}}\} = \{\mathbf{0}\}$$

Ce qui se traduit analytiquement en tout point $A$ par deux équations vectorielles :
1. **Équation de la résultante :**
   $$\sum_{\text{i}} \vec{R}_{i\to\mathcal{S}} = \vec{0}$$
2. **Équation du moment :**
   $$\sum_{\text{i}} \vec{M}_{A, i\to\mathcal{S}} = \vec{0}$$

### B. Théorème de la Résultante Statique (TRS) et du Moment Statique (TMS)
- **TRS (Projection vectorielle ou scalaire) :** La somme vectorielle des forces extérieures est nulle.
  $$\sum \vec{F}_{\text{ext}\to\mathcal{S}} = \vec{0}$$
- **TMS (en un point $A$) :** La somme vectorielle des moments des forces extérieures en $A$ est nulle.
  $$\sum \vec{M}_{A}(\text{ext}\to\mathcal{S}) = \vec{0}$$

### C. Théorème des 3 forces (Cas particulier fondamental)
**Énoncé :** Si un solide $\mathcal{S}$, soumis à l'action de trois forces extérieures $\vec{F}_1$, $\vec{F}_2$ et $\vec{F}_3$ (non parallèles) agissant en des points distincts ou concourants, est en équilibre, alors :
1. Les droites d'action de ces trois forces sont **coplanaires**.
2. Leurs droites d'action sont **concourantes** en un même point $I$ (ou strictement parallèles).

---

## 💡 3. Méthodes classiques de résolution

Pour résoudre un problème de statique des solides en PTSI, la démarche rigoureuse suivante doit être systématiquement appliquée :

1. **Isolant :** Définir clairement le système $\mathcal{S}$ isolé (un solide ou un ensemble de solides).
2. **Bilan des Actions Mécaniques Extérieures (BAMEx) :** Lister toutes les actions exercées par le milieu extérieur sur le système isolé en utilisant les modèles de liaisons normalisées (pivot, glissière, rotule, etc.).
3. **Référentiel :** Préciser que le problème est résolu dans un référentiel galiléen.
4. **Application du PFS :** Écrire les équations scalaires issues du TRS et du TMS.
   - *Astuce de projection :* Choisir judicieusement le point d'application du TMS (par exemple, un point d'intersection de plusieurs droites d'action de forces inconnues pour éliminer ces dernières du calcul).
5. **Résolution du système d'équations :** Résoudre le système algébrique (nombre d'équations vs nombre d'inconnues statiques). Un système est dit **isostatique** si le nombre d'inconnues est égal au nombre d'équations indépendantes. Il est **hyperstatique** si le nombre d'inconnues est supérieur (nécessité d'utiliser des équations de comportement élastique ou des conditions géométriques supplémentaires).

---

## ⚠️ 4. Pièges classiques aux Concours

- **Oubli du sens ou du type de liaison :** Ne pas confondre une liaison avec frottement et une liaison parfaite (sans frottement). Dans une liaison parfaite, la composante tangentielle de l'effort est nulle.
- **Erreur de transport de moment :** Appliquer la relation de transport $\vec{M}_B = \vec{M}_A + \vec{BA} \land \vec{R}$ en inversant les vecteurs de position ($\vec{AB}$ au lieu de $\vec{BA}$).
- **Incompatibilité des dimensions :** Écrire une équation vectorielle ou scalaire en mélangeant des moments ($\text{N}\cdot\text{m}$) et des forces ($\text{N}$).
- **Mauvais choix du point d'application pour le TMS :** Choisir un point $A$ quelconque qui n'annule aucun moment inconnu, alourdissant inutilement le système d'équations algébriques.
- **Oubli de la pesanteur :** Négliger l'action de la pesanteur (poids du solide) lorsque l'énoncé précise explicitement que la masse du solide n'est pas nulle et que ses dimensions ou sa masse le justifient.