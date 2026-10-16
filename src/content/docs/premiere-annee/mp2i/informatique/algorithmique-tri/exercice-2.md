---
title: 'Exercice 2 : Diviser pour régner (Divide and Conquer)'
description: 'Problème d entraînement type concours.'
---

# Problème : Analyse algorithmique et complexité d'un schéma de type "Diviser pour régner" ensembliste

## Énoncé

Dans le cadre du traitement massif de données géographiques (par exemple pour l'affichage cartographique multi-échelle), on s'intéresse à la fusion efficace de listes d'intervalles disjoints. 

Soit $E$ un tableau contenant $n$ intervalles fermés de la droite réelle, représentés par leurs bornes sous forme de tuples $(d_i, f_i)$ avec $d_i \le f_i$. On fait l'hypothèse réaliste que les données proviennent de capteurs dont la précision de mesure est $\varepsilon > 0$ fixée, ce qui implique que les coordonnées sont des flottants représentés sur un nombre fini de bits (norme IEEE 754 double précision), bornés par une valeur maximale $M$.

On souhaite concevoir un algorithme optimal pour fusionner ces intervalles selon le paradigme *Diviser pour régner*.

---

## Questions

1. **Préalable sur le modèle de calcul :** Rappeler la complexité temporelle dans le pire des cas d'un tri par comparaison classique. Quel est l'impact de la représentation finie des flottants sur la notion de "complexité en temps" si l'on s'affranchit de l'uniformité du coût des opérations arithmétiques ? On se placera par la suite dans le modèle de la machine à accès aléatoire (RAM) où les opérations élémentaires coûtent $O(1)$.

2. **Conception de l'algorithme :** Écrire une fonction en Python `fusion_intervalles(intervalles)` qui prend en argument une liste d'intervalles non nécessairement triés et renvoie la liste minimale d'intervalles disjoints couvrant exactement la même union de sous-ensembles de $\mathbb{R}$. La structure générale doit suivre strictement le paradigme *Diviser pour régner*.

3. **Analyse de complexité :** Établir la relation de récurrence vérifiée par le temps d'exécution $T(n)$ de l'algorithme précédent dans le pire des cas. En déduire sa complexité asymptotique en notation grand $O$ à l'aide du théorème maître (Master Theorem) ou d'une arborescence de récursion.

4. **Analyse critique et limites du modèle :** 
   - Soit $n = 10^7$ intervalles, une taille typique pour le traitement de nuages de points LIDAR. Estimer le nombre d'opérations et la mémoire auxiliaire consommée par l'algorithme récursif en Python, sachant la limite par défaut de la pile d'appels (`sys.setrecursionlimit`).
   - Discuter de la validité du modèle RAM face à des données massives générant des dépassements de capacité (*overflow*) ou des pertes de significativité lors des comparaisons de bornes proches de $M$.

---

## Pistes et Indications

1. Pour la complexité du tri, penser aux bornes inférieures de l'information $\Omega(n \log n)$. Pour les flottants, considérer le fait que la taille mémoire est bornée, mais que la complexité bit-à-bit des opérations peut varier si l'on manipule des entiers arbitraires (ce qui n'est pas le cas ici avec les types natifs `float`).
2. Dans l'étape de fusion (*Conquer* / *Combine*), si deux sous-listes ont été préalablement triées par leurs bornes inférieures, la fusion de deux listes d'intervalles se fait en temps linéaire par rapport au nombre total d'intervalles dans ces listes, de manière similaire à l'étape de fusion du *Mergesort*.
3. Attention au cas de base de la récursion ($n \le 1$). La relation de récurrence typique pour une division en deux parties égales avec un travail linéaire de combinaison est $T(n) = 2T(n/2) + \Theta(n)$.
4. Évaluer la profondeur de la pile d'appels qui est en $\Theta(\log n)$ et la taille des frames de pile en Python.

---

## Corrigé Pas à Pas

### 1. Préalable sur le modèle de calcul

Le tri par comparaison de $n$ éléments nécessite dans le pire des cas $\Theta(n \log n)$ opérations (bornes de l'arbre de décision). 
Concernant la représentation des flottants selon la norme IEEE 754, le nombre de valeurs représentables est fini ($2^{64}$ pour un `double`). Par conséquent, les coordonnées sont bornées et discrètes. Toutefois, dans le modèle RAM usuel, les comparaisons et les opérations arithmétiques sur ces types primitifs sont considérées en $\mathcal{O}(1)$. 

*Nuance critique :* Si $M$ est très grand et que l'on manipule des fractions exactes (types `Fraction` en Python) pour éviter les erreurs d'arrondi, la taille des entiers en mémoire croît, invalidant l'hypothèse $\mathcal{O}(1)$ du modèle RAM.

---

### 2. Conception de l'algorithme

Voici l'implémentation en Python respectant le paradigme *Diviser pour régner* :

```python
def fusion_deux_listes(gauche, droite):
    """Fusionne deux listes d'intervalles triés et disjoints intérieurement."""
    res = []
    i, j = 0, 0
    # Étape de fusion linéaire (similaire au Mergesort)
    while i < len(gauche) and j < len(droite):
        if gauche[i][0] <= droite[j][0]:
            courant = gauche[i]
            i += 1
        else:
            courant = droite[j]
            j += 1
        
        # Fusion avec le dernier intervalle ajouté si intersection ou contiguïté
        if res and res[-1][1] >= courant[0]:
            res[-1] = (res[-1][0], max(res[-1][1], courant[1]))
        else:
            res.append(courant)
            
    # Ajouter les restes
    for k in range(i, len(gauche)):
        courant = gauche[k]
        if res and res[-1][1] >= courant[0]:
            res[-1] = (res[-1][0], max(res[-1][1], courant[1]))
        else:
            res.append(courant)
            
    for k in range(j, len(droite)):
        courant = droite[k]
        if res and res[-1][1] >= courant[0]:
            res[-1] = (res[-1][0], max(res[-1][1], courant[1]))
        else:
            res.append(courant)
            
    return res

def fusion_intervalles(intervalles):
    """Divise pour régner : trie implicitement et fusionne les intervalles."""
    n = len(intervalles)
    if n <= 1:
        # Cas de base : un intervalle seul est déjà trié et fusionné
        # On s'assure tout de même de retourner une liste propre
        if n == 1:
            return [intervalles[0]]
        return []
    
    milieu = n // 2
    gauche = fusion_intervalles(intervalles[:milieu])
    droite = fusion_intervalles(intervalles[milieu:])
    
    return fusion_deux_listes(gauche, droite)
```

---

### 3. Analyse de complexité

Soit $T(n)$ le temps d'exécution pour $n$ intervalles.
- La division de la liste en deux sous-listes de taille $n/2$ prend un temps $\mathcal{O}(n)$ (en Python, le découpage de liste `intervalles[:milieu]` crée une copie en $\mathcal{O}(n)$, ce point est crucial).
- L'appel récursif résout deux sous-problèmes de taille $n/2$, soit $2T(n/2)$.
- La fonction `fusion_deux_listes` parcourt l'ensemble des intervalles des deux listes fusionnées, effectuant un nombre d'opérations proportionnel à $|gauche| + |droite|$, soit $\mathcal{O}(n)$.

La relation de récurrence est donc :
$$T(n) = 2T\left(\frac{n}{2}\right) \div \Theta(n)$$

D'après le **Théorème Maître** (Cas 2, avec $a=2$, $b=2$, et $f(n) = \Theta(n) = \Theta(n^{\log_b a})$), la complexité temporelle globale dans le pire des cas est :
$$T(n) = \Theta(n \log n)$$

---

### 4. Analyse critique et limites du modèle

* **Impact de la taille des données ($n = 10^7$) :**
  - **Mémoire et Pile d'appels :** La profondeur de la récursion est de $\log_2(10^7) \approx 24$ appels imbriqués. C'est largement inférieur à la limite par défaut de Python (`sys.getrecursionlimit()` $\approx 1000$). Cependant, l'utilisation intensive de copies de listes (`intervalles[:milieu]`) engendre une empreinte spatiale globale en $\mathcal{O}(n \log n)$ en mémoire auxiliaire à cause de la création récurrente de tranches (*slices*), ce qui peut saturer la mémoire vive pour $10^7$ objets Python (les objets tuple et list ayant un surcoût mémoire important en CPython).
  - **Nombre d'opérations :** Pour $n = 10^7$, $n \log_2(n) \approx 2.4 \times 10^8$ opérations élémentaires, ce qui est exécutable en quelques secondes en C, mais potentiellement lent en Python pur sans l'utilisation de bibliothèques vectorielles (type NumPy).

* **Limites du modèle RAM et précision numérique :**
  - Les coordonnées flottantes (IEEE 754) possèdent une précision mantisse limitée ($\approx 53$ bits, soit environ 15-17 chiffres décimaux significatifs). Si l'on cherche à fusionner des intervalles dont les bornes diffèrent d'une valeur inférieure à la precision machine ($\varepsilon \approx 10^{-16} \times M$), le test `gauche[i][0] <= droite[j][0]` peut souffrir d'instabilités numériques. 
  - De plus, si l'ordre de grandeur $M$ est très grand (ex: coordonnées géodésiques en nanomètres à l'échelle de l'univers observable), des erreurs d'arrondi lors des opérations de comparaison ou de `max()` peuvent violer la transitivité de l'ordre, corrompant totalement la structure de données "disjointe" garantie par l'algorithme.