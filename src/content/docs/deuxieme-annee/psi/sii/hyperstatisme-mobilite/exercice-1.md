---
title: 'Exercice 1 : Degrés de mobilité et degré d hyperstatisme (formule de Grübler)'
description: 'Problème d entraînement type concours pour CPGE PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à un mécanisme extrait d'un système de levage industriel (type pont roulant ou manipulateur). Le schéma cinématique spatial associé à ce mécanisme est composé des éléments suivants :

*   Un bâti fixe (reReprésenté par le solide $S_0$).
*   Trois solides mobiles : 
    *   $S_1$ : un bras de levage.
    *   $S_2$ : une bielle de renvoi.
    *   $S_3$ : un coulisseau porte-outil.

La liaison entre le bâti $S_0$ et le bras $S_1$ est une liaison **pivot** d'axe $\left(O, \vec{x}_0\right)$.
La liaison entre le bras $S_1$ et la bielle $S_2$ est une liaison **rotule** de centre $A$.
La liaison entre la bielle $S_2$ et le coulisseau $S_3$ est une liaison **pivot** d'axe $\left(B, \vec{y}_1\right)$.
La liaison entre le coulisseau $S_3$ et le bâti $S_0$ est une liaison **glissière** de direction $\vec{z}_0$.

*(On pose les bases vectorielles adaptées pour que les axes des liaisons soient clairement identifiés dans l'espace).*

---

### ❓ Questions progressives

1.  **Modélisation cinématique :** 
    *   Identifier le nombre de pièces mobiles $N$ (hors bâti).
    *   Lister l'ensemble des liaisons cinématiques du mécanisme en précisant pour chacune d'elles leur type, leur centre (ou axe), et leur nombre de paramètres cinématiques indépendants (ou mobilité utile $mc_i$).
2.  **Application de la formule de Grübler (Mobilités) :**
    *   Écrire la formule générale liant la mobilité globale $Mu$, la mobilité interne $Mi$, le nombre de pièces $N$ et les mobilités élémentaires des liaisons.
    *   Calculer le degré de mobilité utile $Mu$ du mécanisme (en supposant le mécanisme isostatique pour le moment, ou en identifiant le torseur cinématique associé au mouvement d'ensemble).
3.  **Degré d'hyperstatisme :**
    *   Définir le degré d'hyperstatisme $h$ par la formule cinématique (ou statique).
    *   Calculer le nombre total d'inconnues cinématiques $\xi$ (ou stabiliers/liens géométriques) apportées par les liaisons.
    *   En déduire le degré d'hyperstatisme $h$ du mécanisme. Conclure quant à sa constructibilité et son montage.

---

### 💡 Pistes & Indications méthodologiques

*   **Rappel de cours (PSI) :** Le nombre de mobilités globales $M_g$ d'un mécanisme spatial est lié à la mobilité utile $M_u$ et la mobilité interne $M_i$ par $M_g = M_u + M_i$.
*   **Formule de Grübler cinématique (espace) :** $E = 6$. La relation fondamentale est : 
    $$M_g - I_c = E \cdot N - \sum_{\text{j}} (E - \text{mobilité\_liaison}_j)$$
    Soit $M_g - I_c = 6N - \sum_{\text{j}} \text{Inconnues\_statiques}_j$.
*   Soyez rigoureux dans le décompte des degrés de liberté de chaque liaison dans l'espace (mouvement 3D).
    *   Liaison pivot : $1$ rotation $\implies 5$ contraintes.
    *   Liaison rotule : $3$ rotations $\implies 3$ contraintes.
    *   Liaison glissière : $1$ translation $\implies 5$ contraintes.

---

### 📋 Corrigé détaillé pas à pas

#### Question 1 : Modélisation cinématique

*   **Nombre de pièces mobiles :** 
    Le mécanisme comporte $N = 3$ solides mobiles : $S_1, S_2, S_3$ (plus le bâti $S_0$).
*   **Inventaire des liaisons cinématiques :**
    1.  Liaison $\text{L}_{01}$ entre $S_0$ et $S_1$ : **Pivot** d'axe $\left(O, \vec{x}_0\right)$. 
        *   Mobilité : $1$ ($\text{R}_x$). 
        *   Nombre d'inconnues cinématiques (ou contraintes) : $I_1 = 5$.
    2.  Liaison $\text{L}_{12}$ entre $S_1$ et $S_2$ : **Rotule** de centre $A$.
        *   Mobilité : $3$ ($\text{R}_x, \text{R}_y, \text{R}_z$). 
        *   Nombre d'inconnues : $I_2 = 3$.
    3.  Liaison $\text{L}_{23}$ entre $S_2$ et $S_3$ : **Pivot** d'axe $\left(B, \vec{y}_1\right)$.
        *   Mobilité : $1$ ($\text{R}_{y_1}$). 
        *   Nombre d'inconnues : $I_3 = 5$.
    4.  Liaison $\text{L}_{30}$ entre $S_3$ et $S_0$ : **Glissière** de direction $\vec{z}_0$.
        *   Mobilité : $1$ ($\text{T}_z$). 
        *   Nombre d'inconnues : $I_4 = 5$.

---

#### Question 2 : Calcul de la mobilité globale et utile

Le problème est spatial, donc la dimension de l'espace est $E = 6$.
La somme des mobilités des liaisons (ou nombre total de paramètres cinématiques bruts des liaisons) s'obtient par :
$$\sum m_i = 1 (\text{pivot}) + 3 (\text{rotule}) + 1 (\text{pivot}) + 1 (\text{glissière}) = 6$$

Le nombre total d'inconnues cinématiques de liaison est :
$$I_c = \sum (6 - m_i) = 5 + 3 + 5 + 5 = 18$$

Appliquons la formule de Grübler pour déterminer la mobilité globale $M_g$ et le degré d'hyperstatisme $h$ :
$$M_g - h = E \cdot N - I_c$$
Ici, $E = 6$ et $N = 3$, donc $E \cdot N = 6 \times 3 = 18$.
On a donc :
$$M_g - h = 18 - 18 = 0 \implies M_g = h$$

*   **Analyse de la mobilité utile $M_u$ :** 
    Le mécanisme est commandé par un actionneur (par exemple entre $S_0$ et $S_1$). Il réalise une fonction de transformation de mouvement. La mobilité utile attendue pour ce type de système est de $M_u = 1$ (mise en mouvement du coulisseau $S_3$ par action sur le bras $S_1$).
    Y a-t-il des mobilités internes $M_i$ (mobilité d'un sous-ensemble sans effet sur la sortie, ex: rotation de la bielle $S_2$ sur elle-même si elle était de révolution, ce qui n'est pas le cas ici car une liaison rotule empêche la rotation propre inutile si elle est bloquée par les liaisons aux extrémités, attention toutefois à la rotation de la bielle autour de l'axe $(AB)$ qui constitue ici une **mobilité interne** $M_i = 1$).
    
    En effet, la bielle $S_2$ reliée par deux rotules/pivots peut tourner autour de son axe $(AB)$ sans modifier la position de $S_3$. Donc $M_i = 1$.
    Ainsi, $M_g = M_u + M_i = 1 + 1 = 2$.

---

#### Question 3 : Degré d'hyperstatisme

Puisque nous avons établi que $M_g = h$ (par application directe de $M_g - h = 6N - I_c$ avec $E \cdot N = 18$ et $I_c = 18$), on obtient :
$$M_g = 2 \implies h = 2$$

*   **Conclusion de l'examinateur :** 
    Le mécanisme est **hautement hyperstatique ($h = 2$)**. 
    Sur le plan industriel, un tel degré d'hyperstatisme ($h=2$) est rédhibitoire sans précautions constructives particulières (ajustements serrés impossibles, risques de grippage en cas de dilations thermiques ou de défauts de fabrication). Il conviendrait de modifier la conception (par exemple, remplacer la liaison pivot d'axe $\vec{y}_1$ par une liaison pivot-glissante ou supprimer une contrainte géométrique redondante) pour rendre le système isostatique ($h = 0$).