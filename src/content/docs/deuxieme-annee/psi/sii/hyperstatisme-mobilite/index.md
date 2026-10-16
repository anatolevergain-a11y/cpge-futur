---
title: 'Cours : Théorie des mécanismes : Hyperstatisme et mobilité'
description: 'Synthèse officielle du cours et démonstrations théoriques pour CPGE PSI.'
---

## 📌 1. Définitions & Cadre d'étude

La théorie des mécanismes vise à analyser les liaisons et les mouvements relatifs entre les différentes pièces (solides) constituant un système mécanique. 

*   **Solide indéformable ($S_i$) :** Ensemble de points dont la distance mutuelle reste constante au cours du temps. Dans un mécanisme, le bâti est par convention le solide de référence ($S_0$).
*   **Liaison mécanique :** Modélisation géométrique et cinématique de l'interface entre deux solides. Elle se caractérise par son **degrés de liberté** ($d$) et son **ordre** ($s = 6 - d$).
*   **Mobilité utile ($Mu$) :** Nombre de paramètres indépendants permettant de définir la position de l' mécanisme par rapport au cahier des charges fonctionnel. C'est le nombre de mouvements commandés ou libres attendus.
*   **Mobilité interne ($Mi$) :** Nombre de degrés de liberté locaux internes au mécanisme sans effet sur la fonction globale (ex: rotation d'une bille de roulement, d'une poulie folle).
*   **Hyperstatisme ($h$) :** Degré de liaisons surabondantes dans le mécanisme. 
    *   Si $h = 0$ : le mécanisme est isostatique.
    *   Si $h > 0$ : le mécanisme est hyperstatique ($h$ exprime le nombre de conditions géométriques surabondantes pour que le montage soit possible).
    *   Si $h < 0$ : le mécanisme est hypostatique (il manque des liaisons, le mouvement n'est pas contrôlé).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Formule générale de la mobilité et de l'hyperstatisme (Formule de Grübler-Kutzbach modifiée)

Soit un mécanisme comportant :
*   $N$ : nombre total de solides (comprenant le bâti $S_0$).
*   $P$ : nombre total de liaisons.
*   $\mathcal{I}_c$ : nombre total d'inconnues cinématiques (ou nombre de contraintes cinématiques indépendantes apportées par les liaisons).
*   $\mathcal{I}_s$ : nombre total d'inconnues statiques (ou nombre d'équations scalaires indépendantes d'équilibre).

Pour un système spatial (cinématique à 6 dimensions), le torseur cinématique d'une liaison $j$ laisse libre $d_j$ paramètres. La liaison impose donc $6 - d_j$ contraintes cinématiques.
Le nombre total d'inconnues cinématiques de liaisons est :
$$\mathcal{I}_c = \sum_{j=1}^{P} (6 - d_j)$$

Le torseur d'action mécanique transmissible par une liaison $j$ comporte $s_j = 6 - d_j$ composantes indépendantes.

Le théorème de la statique appliqué à chaque solide (hors bâti, soit $N-1$ solides) conduit à $6(N-1)$ équations scalaires. L'ensemble des liaisons transmet $\sum_{j=1}^{P} s_j$ inconnues statiques.

La relation fondamentale reliant la mobilité cinématique globale ($M$), l'hyperstatisme ($h$), les mobilités internes ($Mi$) et les paramètres structuraux est :

$$M - h = \sum_{j=1}^{P} d_j - 6(N-1)$$

Plus rigoureusement, en distinguant la mobilité cinématique effective $M$ :
$$M = Mu + Mi$$

On définit l'hyperstatisme $h$ par la relation :
$$h = \mathcal{I}_s - \text{Rg}(\text{Système}) \quad \text{ou par la formule locale :} \quad h = 6(N-1) - \mathcal{I}_c + Mu + Mi$$

Dans le cas particulier d'une **étude plane** (mouvements dans le plan $(O, \vec{x}, \vec{y})$ ou liaisons équivalentes), les dimensions tombent à 3 :
$$M - h = \sum_{j=1}^{P} d_j - 3(N-1)$$
avec $d_j \le 3$ et $\mathcal{I}_c = \sum_{j=1}^{P} (3 - d_j)$.

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour déterminer la mobilité $Mu$ et l'hyperstatisme $h$ d'un mécanisme, la démarche méthodique (algorithme) est la suivante :

1.  **Recensement des solides ($N$) et des liaisons ($P$) :**
    *   Attention aux classes d'équivalence cinématique (regroupement des solides formant un seul bloc indéformable).
2.  **Identification des liaisons et de leurs caractéristiques :**
    *   Pour chaque liaison, déterminer son type, son degré de liberté $d_j$ et son nombre d'inconnues statiques $s_j = 6 - d_j$ (ou 3 - $d_j$ en plan).
3.  **Analyse qualitative des mobilités internes ($Mi$) et utiles ($Mu$) :**
    *   Repérer les mouvements locaux superflus ($Mi$).
    *   Définir la loi E/S (Entrée / Sortie) pour identifier $Mu$.
4.  **Calcul de l'hyperstatisme $h$ ou de la mobilité $M$ :**
    *   Utilisation de la méthode cinématique (composition des torseurs cinématiques ou fermeture de chaînes cinématiques).
    *   Utilisation de la méthode statique (fermeture des torseurs d'action mécanique - PAM).
    *   Le système matriciel global issu du principe fondamental de la statique s'écrit sous la forme $A X = B$ avec $A \in \mathcal{M}_{6(N-1), \sum s_j}(\mathbb{R})$.
    *   L'hyperstatisme correspond au défaut de rang de la matrice $A$ ou excédent d'inconnues par rapport au nombre d'équations indépendantes utiles.

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Oubli des classes d'équivalence :** Ne pas confondre "pièce" et "solide". Deux pièces soudées ou boulonnées ensemble constituent un seul et unique solide cinématique.
*   **Erreur sur le nombre d'inconnues dans les liaisons composées :** Une liaison pivot glissant n'est pas le cumul indépendant de deux liaisons si l'architecture introduit des sur-contraintes géométriques locales. Bien analyser la liaison équivalente.
*   **Confusion entre $M$ et $Mu$ :** La formule de Grübler donne la mobilité globale cinématique $M = Mu + Mi$. Oublier de soustraire les mobilités internes $Mi$ conduit à une erreur manifeste sur $Mu$ ou $h$.
*   **Conditions géométriques particulières (parallélisme, concourance) :** Une configuration géométrique particulière (ex: axes concourants, parallèles) peut modifier le rang de la matrice du système (génération de mobilités instantanées ou augmentation locale de l'hyperstatisme). La théorie minimale donne une borne, mais l'étude géométrique fine reste indispensable.