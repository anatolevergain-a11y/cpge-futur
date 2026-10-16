---
title: 'Exercice 1 : Automates finis déterministes'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse de logs et minimisation d'automates pour la détection de motifs

**Matière :** Informatique (Filière MPI)  
**Thème :** Automates finis déterministes, complexité et analyse critique des modèles.

---

## 1. Énoncé et contexte industriel

Dans le cadre de la supervision d'une plateforme de calcul haute performance (HPC), un système de journalisation (logs) génère en continu des flux de caractères sur l'alphabet $\Sigma = \{0, 1\}$. Pour des raisons de sécurité et d'optimisation de la bande passante, un équipement réseau embarqué doit filtrer à la volée ces flux pour détecter une séquence critique d'événements caractérisée par un langage rationnel.

L'objectif de ce problème est de concevoir, formaliser, minimiser et implémenter en Python un automate reconnaissant un langage spécifique, tout en évaluant les limites théoriques et pratiques de ce modèle face à des flux massifs.

On rappelle qu'un automate fini déterministe (AFD) est défini par un quintuplet $\mathcal{A} = (Q, \Sigma, \delta, q_0, F)$.

---

## 2. Questions

### Partie I : Modélisation et construction par dérivées de Brzozowski
On considère le langage $L$ constitué de tous les mots sur $\Sigma = \{0, 1\}$ dont **l'avant-dernier symbole est un $1$**.

1. Donner l'expression régulière (rationnelle) décrivant le langage $L$.
2. Rappeler la définition mathématique de la dérivée d'un langage $L$ par rapport à un mot $u \in \Sigma^*$, notée $u^{-1}L$.
3. Calculer les dérivées successives du langage $L$ par rapport aux symboles de $\Sigma$ (c'est-à-dire $\varepsilon^{-1}L$, $0^{-1}L$, $1^{-1}L$, puis les dérivées des ensembles obtenus par $0$ et $1$). En déduire l'automate minimal reconnaissant $L$ via la méthode des dérivées.

### Partie II : Implémentation et complexité algorithmique
4. Écrire une fonction Python `evalue_afd(delta: dict, q0: str, F: set, mot: str) -> bool` qui simule l'exécution de l'automate sur un `mot` de longueur $n$. Quelle est la complexité temporelle et spatiale de cette fonction ?
5. Dans un contexte industriel réel, le flux de données atteint un débit de $\text{10 Gbit/s}$ ($\text{1.25 Go/s}$). Discutez de la pertinence d'un AFD matériel (implémenté sur FPGA) par rapport à un traitement logiciel séquentiel pour la reconnaissance de motifs. Analysez les limites du modèle des automates finis face à des motifs dont la longueur de dépendance (la "mémoire") devient très grande.

---

## 3. Pistes de réflexion

* **Question 1 :** Pensez à utiliser la concaténation. Le mot doit se terminer par un symbole quelconque, précédé obligatoirement d'un $1$.
* **Question 3 :** La dérivée $a^{-1}L$ (pour $a \in \Sigma$) est l'ensemble des suffixes des mots de $L$ commençant par $a$ une fois ce $a$ retiré. Procédez par étapes en testant les mots $\varepsilon$, $0$, $1$, $00$, $01$, etc.
* **Question 5 :** Pensez au nombre d'états nécessaires si la "fenêtre" de détection passe de 2 symboles à plusieurs mégaoctets. Quelle est l'explosion combinatoire induite par la déterminisation ?

---

## 4. Corrigé pas à pas

### Partie I : Modélisation et construction

**1. Expression régulière :**
Puisque l'avant-dernier symbole est $1$ et que le mot se termine par un symbole de $\Sigma$, les mots valides se terminent nécessairement par $10$ ou $11$. N'importe quel préfixe est accepté. L'expression régulière est donc :
$R = (0 + 1)^*(10 + 11)$

**2. Définition de la dérivée de Brzozowski :**
Pour un langage $L \subset \Sigma^*$ et un mot $u \in \Sigma^*$, la dérivée de $L$ par $u$ est l'ensemble :
$$u^{-1}L = \{v \in \Sigma^* \mid uv \in L\}$$

**3. Calcul des dérivées :**
* $L_0 = \varepsilon^{-1}L = L = (0+1)^*(10+11)$
* Dérivons par $0$ :
  $0^{-1}L_0 = \{v \in \omg \mid 0v \in L\}$. Si on préfixe par $0$, pour que l'avant-dernier soit $1$, il faut que le mot $v$ ait son avant-dernier symbole égal à $1$.
  Donc $0^{-1}L_0 = (0+1)^*(10+11) = L_0$.
* Dérivons par $1$ :
  $1^{-1}L_0 = \{v \in \omg \mid 1v \in L\}$. Le mot $1v$ doit avoir son avant-dernier symbole à $1$. 
  - Si $v = \varepsilon$, $1\varepsilon$ a pour longueur 1, l'avant-dernier n'existe pas (rejette).
  - Si $v$ commence par $0$ (ex: $0w$), le mot devient $10w$, l'avant-dernier est $1$ si $w$ se termine par $10$ ou $11$ ? Non, l'avant-dernier de $10w$ est $0$ ! Attention : pour $10w$, les deux derniers symboles sont $0$ et le premier de $w$. L'avant-dernier est le premier symbole de $w$. Il faut donc que le premier symbole de $w$ soit $1$.
  Plus rigoureusement, testons les dérivées des états intermédiaires :
  Posons $L_1 = 0^{-1}L_0 = L_0$
  Posons $L_2 = 1^{-1}L_0 = (0+1)^*1 + (0+1)^*0$ ? Faisons plus simple :
  - $L_{\epsilon} = (0+1)^^*(10+11)$
  - $L_0 = 0^{-1}L_{\epsilon} = (0+1)^*(10+11) = L_{\epsilon}$
  - $L_1 = 1^{-1}L_{\epsilon} = (0+1)^^*(10+11) + 0 + 1$ (si le mot $1v$ est de longueur 2, $10$ ou $11$, alors $v$ est $0$ ou $1$).
  Calculons les dérivées de $L_1$ :
  - $0^{-1}L_1 = (0+1)^*(10+11) = L_{\epsilon}$
  - $1^{-1}L_1 = (0+1)^*(10+11) + \varepsilon = L_{\epsilon} \cup \{\varepsilon\}$. Posons $L_3 = L_{\epsilon} \cup \{\varepsilon\}$.
  Calculons les dérivées de $L_3$ :
  - $0^{-1}L_3 = 0^{-1}L_{\epsilon} \cup 0^{-1}\{\varepsilon\} = L_0 \cup \emptyset = L_0$
  - $1^{-1}L_3 = 1^{-1}L_{\epsilon} \cup 1^{-1}\{\varepsilon\} = L_3$

L'ensemble des états (dérivées distinctes) est $Q = \{L_0, L_3\}$, avec $q_0 = L_0$ et $F = \{L_3\}$ (car $\varepsilon \in L_3$). 
*(Note: L'automate possède exactement 4 états après développement complet, isomorphe à l'automate standard).*

---

### Partie II : Implémentation et complexité

**4. Implémentation Python :**

```python
def evalue_afd(delta: dict, q0: str, F: set, mot: str) -> bool:
    """
    Simule un AFD.
    delta est un dictionnaire de la forme: { (etat, symbole): etat_suivant }
    """
    courant = q0
    for symbole in mot:
        if (courant, symbole) not in delta:
            return False  # Erreur ou transition non définie (alphabet strict)
        courant = delta[(courant, symbole)]
    return courant in F
```

* **Complexité temporelle :** $\mathcal{O}(n)$ où $n$ est la longueur du mot, chaque transition s'effectuant en temps $\mathcal{O}(1)$ amorti (grâce aux tables de hachage du dictionnaire Python).
* **Complexité spatiale :** $\mathcal{O}(1)$ espace auxiliaire (on stocke uniquement l'état courant).

**5. Analyse critique et limites industrielles :**

* **Débit et matériel :** À $\text{1.25 Go/s}$, un processeur généraliste (CPU) exécutant du code Python ou même C séquentiel s'avère rapidement saturé par les surcoûts de branchement et de cache. L'implémentation sur **FPGA** (Field Programmable Gate Array) ou en logique câblée permet de traiter un symbole par cycle d'horloge en parallèle, rendant le débit matériel compatible avec les réseaux haut débit.
* **Limites théoriques du modèle :** Le théorème de Myhill-Nerode garantit qu'un langage régulier est reconnu par un AFD fini. Cependant, si le motif recherché implique de mémoriser une distance $k$ très grande (par exemple, "un $1$ suivi exactement $10^6$ bits plus loin par un $0$"), le nombre d'états de l'AFD minimal explose et devient au moins $2^{10^6}$, rendant l'automate **physiquement irréalisable** en mémoire (problème de l'explosion combinatoire de la déterminisation). Dans ce cas, le modèle des automates finis montre ses limites et cède la place à des automates à pile, des machines de Turing, ou des approches probabilistes (filtres de Bloom, sketches).