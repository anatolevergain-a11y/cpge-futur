---
title: 'Exercice 2 : Modélisation des actions mécaniques et frottements'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la modernisation d'un système de levage portuaire destiné au transbordement de conteneurs légers et de matériel roulant, on s'intéresse au mécanisme de freinage d'urgence d'un treuil de levage. 

Le système étudié (voir schéma de principe) est composé d'un tambour de rayon $R = 0,3\ \text{m}$ sur lequel s'enroule un câble supportant une charge de masse $M = 500\ \text{kg}$. Le frein de sécurité est constitué d'un patin de freinage en matériau composite appliqué sur un disque solidaire de l'arbre du tambour avec une force presseur $\vec{F}_{pres}$.

L'objectif de ce problème est de modéliser les actions mécaniques transmissibles par contact, de déterminer les conditions de non-glissement (critère d'adhérence de Coulomb) et d'analyser les limites énergétiques et thermiques du modèle proposé dans un contexte industriel réel.

```
       [ Tambour (S1) ] --- (Câble) ---> Charge M = 500 kg
              |
          [ Disque ] 
              |
        [ Patin (S2) ] <--- Force presseur F_pres
```

#### Données numériques et hypothèses :
- Accélération de la pesanteur : $g = 9,81\ \text{m}\cdot\text{s}^{-2}$.
- Rayon équivalent de contact du patin sur le disque : $R_m = 0,15\ \text{m}$.
- Coefficient de frottement statique entre le patin et le disque : $f = 0,35$.
- Le milieu est supposé galiléen. Les liaisons sont supposées parfaites, à l'exception du contact entre le patin et le disque.

---

### ❓ Questions progressives

1. **Modélisation cinématique et statique préliminaire**
   - Isoler l'ensemble $\{\text{Charge} + \text{Câble} + \text{Tambour}\}$ et déterminer, par application du Bilan des Actions Mécaniques Extérieures (BAME) et du Principe Fondamental de la Statique (PFS), le couple de retenue $C_m$ exercé par l'arbre sur le tambour pour maintenir la charge à l'arrêt.

2. **Modélisation locale de l'action de contact avec frottement**
   - On considère un élément de surface $dS$ du patin soumis à une pression normale $p$ et à une densité surfacique de frottement $\vec{\tau}$. Rappeler la loi de Coulomb locale régissant le contact avec frottement au limtite du glissement.

3. **Détermination de l'effort presseur minimal**
   - En déduire l'expression littérale du moment de frottement $C_f$ exercé par le patin sur le disque en fonction de l'effort presseur total $F_{\text{pres}}$, du rayon moyen $R_m$ et du coefficient de frottement $f$ (on supposera la pression uniforme sur la surface de contact).
   - Calculer la valeur minimale de l'effort presseur $F_{\text{pres}}$ nécessaire pour assurer l'immobilisation de la charge.

4. **Analyse critique et limites du modèle de Coulomb**
   - *Question d'ingénierie :* Le coefficient de frottement $f$ est considéré ici comme constant ($f = 0,35$). En réalité, lors d'un freinage d'urgence, la température à l'interface patin-disque peut atteindre $300\ ^\circ\text{C}$. Discuter l'influence de cette élévation thermique sur la validité du modèle de Coulomb et sur la sécurité du système.

---

### 💡 Pistes & Indications

- **Q1 :** Utiliser le théorème du moment dynamique (ramené à la statique, soit le PFS) en projection selon l'axe de rotation du tambour. Attention au sens des torseurs.
- **Q2 :** La force élémentaire s'exprimant par $d\vec{F} = d\vec{N} + d\vec{T}$, la condition d'adhérence s'écrit par $\|\d\vec{T}\| \le f \|\d\vec{N}\|$.
- **Q3 :** Le moment élémentaire est $d\vec{C} = \vec{OP} \wedge d\\vec{F}$. Intégrer sur l'ensemble de la surface de contact du patin.
- **Q4 :** Penser aux phénomènes de *phase transition*, d'usure abrasive et de variation des coefficients de friction à haute température (phénomène de *fade*).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Couple de retenue $C_m$
Isolons le système $S = \{\text{Charge} + \text{Câble} + \text{Tambour}\}$. 
Les actions mécaniques extérieures agissant sur $S$ sont :
- L'action de la pesanteur sur la charge : $\vec{P} = -Mg\,\vec{z}$ (en posant $\vec{z}$ vertical ascendant).
- La tension du câble sur le tambour : $\vec{T} = T\,\vec{z}$, avec $T = Mg$ en statique.
- L'action de la liaison pivot entre le bâti et l'arbre du tambour, caractérisée par un effort et un couple de composante $C_m$ selon l'axe de rotation $\vec{x}$.

Par application du PFS (via le Théorème du Moment Statique en $O$, centre de liaison) :
$$\sum \vec{M}_{O}(\text{Ext}\to S) = \vec{0}$$
$$-R \cdot T\,\vec{x} + C_m\,\vec{x} = \vec{0} \implies C_m = R \cdot M \cdot g$$

**Application numérique :**
$$C_m = 0,3 \times 500 \times 9,81 = 1471,5\ \text{N}\cdot\text{m}$$

#### 2. Loi de Coulomb locale
Pour un élément de surface $dS$ situé en un point $P$ du contact, l'action mécanique élémentaire de contact $d\vec{F}_{2\to 1}$ se décompose en :
- Une composante normale : $d\vec{N} = p \cdot dS\,\vec{n}$ (avec $\vec{n}$ unitaire normal sortant).
- Une composante tangentielle (frottement) : $d\vec{T} = \vec{\tau} \cdot dS$.

À la limite du glissement (seuil d'adhérence), la loi de Coulomb s'exprime par :
$$\|\vec{\tau}\| = f \cdot p$$
avec $f$ le coefficient de frottement statique.

#### 3. Effort presseur minimal
Le moment élémentaire de frottement par rapport à l'axe normal au disque est :
$$dC_f = R_m \cdot \|\vec{\tau}\| \cdot dS = R_m \cdot f \cdot p \cdot dS$$

En intégrant sur toute la surface de contact $S$ du patin, et sachant que l'effort presseur total est $F_{\text{pres}} = \iint_S p\,dS = p \cdot S$ (si $p$ est uniforme) :
$$C_f = \iint_S R_m \cdot f \cdot p\,dS = f \cdot R_m \cdot F_{\text{pres}}$$

Pour garantir l'immobilisation, le moment de frottement maximum disponible doit équilibrer au moins le moment de la charge :
$$C_f \ge C_m \implies f \cdot R_m \cdot F_{\text{pres}} \ge R \cdot M \cdot g$$

Soit l'effort presseur minimal :
$$F_{\text{pres, min}} = \frac{R \cdot M \cdot g}{f \cdot R_m}$$

**Application numérique :**
$$F_{\text{pres, min}} = \frac{1471,5}{0,35 \times 0,15} = \frac{1471,5}{0,0525} \approx 28028,6\ \text{N} \approx 28\ \text{kN}$$

#### 4. Analyse critique et limites du modèle
- **Hypothèse de la pression uniforme :** L'hypothèse d'une répartition uniforme de la pression $p$ est une approximation macroscopique acceptable en phase de conception préliminaire (nivellement par déformation élastique), mais fausse localement en raison des contraintes de flexion du disque et de l'usure non homogène (loi d'usure de Archard).
- **Validité du coefficient de frottement $f$ :** Le coefficient $f = 0,35$ est constant dans l'énoncé. Or, lors d'un freinage d'urgence, l'énergie cinétique et potentielle est dissipée thermiquement par frottement. Au-delà d'un seuil critique (souvent $250\ ^\circ\text{C}$ pour les composites organiques), on observe un phénomène de **"thermal fade"** (chute brutale du coefficient de frottement due à la pyrolyse des résines du patin). 
- **Conséquence pour l'ingénieur :** Le calcul statique donne une valeur *minimale* théorique ($28\ \text{kN}$). En pratique, pour garantir la sécurité, il conviendra d'appliquer un coefficient de sécurité de l'ordre de $1,5$ à $2$, et de coupler ce modèle mécanique à un modèle thermique transitoire pour vérifier que la température maximale admissible du matériau n'est pas dépassée.