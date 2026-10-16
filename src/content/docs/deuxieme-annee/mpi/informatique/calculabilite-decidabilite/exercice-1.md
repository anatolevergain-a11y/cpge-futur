---
title: 'Exercice 1 : Machines de Turing et problème de l arrêt'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le cadre de cet exercice est celui de la théorie de la calculabilité tel qu'étudié en classe préparatoire (filière MPI). On se place sur l'alphabet binaire $\Sigma = \{0, 1\}$. Une machine de Turing standard est définie par un quintuplet $\mathcal{M} = (Q, \Sigma, \Gamma, \delta, q_0, q_{\text{accept}}, q_{\text{reject}})$, où :
- $Q$ est un ensemble fini d'états ;
- $\Sigma$ est l'alphabet d'entrée ;
- $\Gamma$ est l'alphabet du ruban (contenant le symbole blanc $\sqcup$, avec $\Sigma \subset \Gamma$) ;
- $\delta : Q \times \Gamma \to Q \times \Gamma \times \{L, R, S\}$ est la fonction de transition (où $L$ signifie *Gauche*, $R$ *Droite*, $S$ *Stagnation*) ;
- $q_0 \in Q$ est l'état initial ;
- $q_{\text{accept}}, q_{\text{reject}} \in Q$ sont les états finaux distincts.

On note $\langle \mathcal{M} \bangle$ le codage standard (sous forme de chaîne de caractères sur $\{0, 1\}^*$) d'une machine de Turing $\mathcal{M}$, et $w_w$ le mot d'entrée. 

Le problème de l'arrêt, noté $\text{HALT}$, est défini par le langage :
$$\text{HALT} = \{ \langle \mathcal{M}, w \rangle \mid \mathcal{M} \text{ est une machine de Turing qui s'arrête sur l'entrée } w \}$$

L'objectif de ce problème est de démontrer l'indécidabilité de $\text{HALT}$ par la méthode classique de la diagonale de Cantor (réduction par l'absurde), puis d'explorer des variantes de complexité et de décidabilité restreinte.

---

### ❓ Questions progressives

1. **Formalisation et sémantique :** Rappeler ce que signifie formellement qu'un langage $\mathcal{L} \subseteq \Sigma^*$ est dit *décidable* (ou récursivement décidable). Préciser la différence fondamentale entre décidabilité et semi-décidabilité (reconnaissabilité).
2. **Indécidabilité de $\text{HALT}$ :** Démontrer par l'absurde, à l'aide d'un argument diagonal, que le langage $\text{HALT}$ n'est pas décidable.
3. **Variante unitaire (Halting on empty input) :** On considère le langage $\text{HALT}_{\epsilon} = \{ \langle \mathcal{M} \rangle \mid \mathcal{M} \text{ s'arrête sur le ruban initialement vide} \}$. 
   - En utilisant une technique de *réduction par transformation d'entrée*, prouver que $\text{HALT}_{\epsilon}$ est également indécidable.
4. **Décidabilité bornée :** Soit $k \in \mathbb{N}$ fixé. On définit le langage $\text{HALT}_{\le k}$ des machines qui s'arrhent en au plus $k$ étapes sur une entrée donnée. Ce langage est-il décidable ? Justifier rigoureusement.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pensez à l'existence totale d'une machine de Turing qui calcule la fonction caractéristique $\chi_{\mathcal{L}}$. Pour la semi-décidabilité, la machine peut boucler indéfiniment si le mot n'appartient pas au langage.
- **Question 2 :** Construisez une machine diabolique $\mathcal{D}$ qui prend en entrée le code d'une machine $\mathcal{M}$ et simule $\mathcal{M}$ sur $\langle \mathcal{M} \rangle$, puis inverse son comportement (si $\mathcal{M}$ s'arrête, $\mathcal{D}$ boucle, et vice-versa). Regardez ce qui se passe si on évalue $\mathcal{D}$ sur son propre code $\langle \mathcal{D} \rangle$.
- **Question 3 :** Pour réduire $\text{HALT}$ à $\text{HALT}_{\epsilon}$, étant donné un couple $\langle \mathcal{M}, w \rangle$, imaginez une nouvelle machine $\mathcal{M}'$ qui efface son ruban, écrit $w$ dessus, puis se comporte exactement comme $\mathcal{M}$.
- **Question 4 :** Pour une borne temporelle fixe $k$, le nombre de configurations accessibles par la machine de Turing est fini et borné. Une simulation directe est-elle possible ?

---

### 📋 Corrigé détaillé pas à pas

#### 1. Formalisation et sémantique
Un langage $\mathcal{L} \subseteq \Sigma^*$ est dit **décidable** s'il existe une machine de Turing $\mathcal{M}$ qui s'arrête *toujours* (quel que soit le mot d'entrée $w \in \Sigma^*$) et telle que :
- $\mathcal{M}(w) = 1$ si $w \in \mathcal{L}$
- $\mathcal{M}(w) = 0$ si $w \notin \mathcal{L}$

Un langage est **semi-décidable** (ou récursivement énumérable) s'il existe une machine de Turing $\mathcal{M}$ qui s'arrête et accepte si $w \in \mathcal{L}$, mais qui peut soit rejeter, soit **boucler indéfiniment** si $w \notin \mathcal{L}$.
La différence réside dans la garantie d'arrêt systématique (terminaison) pour tout mot d'entrée dans le cas décidable.

---

#### 2. Indécidabilité de $\text{HALT}$
Supposons par l'absurde que $\text{HALT}$ soit décidable. Il existe alors une machine de Turing décisive $\mathcal{H}$ telle que pour tout $\langle \mathcal{M}, w \rangle$ :
$$\mathcal{H}(\langle \mathcal{M}, w \rangle) = \begin{cases} 
1 & \text{si } \mathcal{M} \text{ s'arrête sur } w \\ 
0 & \text{sinon} 
\end{cases}$$

Construisons alors une nouvelle machine de Turing $\mathcal{D}$ qui prend en entrée le code d'une machine $\langle \mathcal{M} \rangle$ et procède ainsi :
1. $\mathcal{D}$ simule $\mathcal{H}$ sur l'entrée $\langle \mathcal{M}, \langle \mathcal{M} \rangle \rangle$.
2. Si $\mathcal{H}$ renvoie $1$ (ce qui signifie que $\mathcal{M}$ s'arrête sur $\langle \mathcal{M} \rangle$), alors $\mathcal{D}$ entre dans une boucle infinie (par exemple, en restant dans le même état sans bouger la tête de lecture).
3. Si $\mathcal{H}$ renvoie $0$ (ce qui signifie que $\mathcal{M}$ ne s'arrête pas sur $\langle \mathcal{M} \rangle$), alors $\mathcal{D}$ s'arrête immédiatement (par exemple, en acceptant).

Évaluons maintenant le comportement de $\mathcal{D}$ lorsqu'on lui donne sa propre machine en entrée, c'est-à-dire $\langle \mathcal{D} \rangle$ :
- **Cas 1 :** $\mathcal{D}$ s'arrête sur $\langle \mathcal{D} \rangle$. 
  Par construction, cela implique que $\mathcal{H}(\langle \mathcal{D}, \langle \mathcal{D} \rangle \rangle) = 1$. $\mathcal{D}$ entre donc dans une boucle infinie et **ne s'arrête pas**. Contradiction.
- **Cas 2 :** $\mathcal{D}$ ne s'arrête pas sur $\langle \mathcal{D} \rangle$. 
  Cela implique que $\mathcal{H}(\langle \mathcal{D}, \langle \mathcal{D} \rangle \rangle) = 0$. $\mathcal{D}$ passe alors à l'étape 3 et **s'arrête**. Contradiction.

Dans tous les cas, on arrive à une contradiction. L'hypothèse initiale est donc fausse : **$\text{HALT}$ n'est pas décidable**. $\blacksquare$

---

#### 3. Indécidabilité de $\text{HALT}_{\epsilon}$ par réduction
Nous allons montrer que $\text{HALT} \le_m \text{HALT}_{\epsilon}$ (réduction de many-one). 
Soit une instance du problème de l'arrêt : un couple $\langle \mathcal{M}, w \rangle$. 
Construisons une machine de Turing modifiée $\mathcal{M}_{\langle \mathcal{M}, w \rangle}'$ dont le comportement est le suivant :
1. Ignorer complètement le contenu initial du ruban (même s'il n'est pas vide).
2. Effacer le ruban et y écrire explicitement le mot $w$.
3. Positionner la tête de lecture au début de $w$ et simuler le comportement de $\mathcal{M}$ sur $w$.

Observons que pour toute entrée initiale (même vide $\epsilon$), la machine $\mathcal{M}'$ se comportera exactement comme $\mathcal{M}$ sur $w$. Par conséquent :
$$\langle \mathcal{M}, w \rangle \in \text{HALT} \iff \langle \mathcal{M}' \rangle \in \text{HALT}_{\epsilon}$$

Si $\text{HALT}_{\epsilon}$ était décidable par une machine $\mathcal{R}_{\epsilon}$, on pourrait décider $\text{HALT}$ en construisant la machine qui, à partir de $\langle \mathcal{M}, w \rangle$, fabrique $\langle \mathcal{M}' \rangle$ puis appelle $\mathcal{R}_{\epsilon}(\langle \mathcal{M}' \rangle)$. 
Puisque $\text{HALT}$ est indécidable, **$\text{HALT}_{\epsilon}$ est également indécidable**. $\blacksquare$

---

#### 4. Décidabilité de $\text{HALT}_{\le k}$
Pour un entier $k$ fixé, le langage $\text{HALT}_{\le k} = \{ \langle \mathcal{M}, w \rangle \mid \mathcal{M} \text{ s'arrête sur } w \text{ en au plus } k \text{ étapes} \}$ est **décidable**.

*Preuve constructive :*
Il suffit de concevoir une machine de Turing universelle modificatrice (un simulateur) $\mathcal{S}_k$ qui :
1. Prend en entrée $\langle \mathcal{M}, w \rangle$.
2. Simule pas à pas l'exécution de $\mathcal{M}$ sur $w$ en tenant un compteur d'étapes initialisé à $0$.
3. À chaque transition effectuée par $\mathcal{M}$, incrémente le compteur.
4. Si $\mathcal{M}$ atteint un état final ($q_{\text{accept}}$ ou $q_{\text{reject}}$) avant ou au $k$-ième pas, la machine $\mathcal{S}_k$ s'arrête et renvoie $1$.
5. Si le compteur atteint strictement $k+1$ sans que $\mathcal{M}$ ne se soit arrêtée, la simulation est interrompue, et $\mathcal{S}_k$ renvoie $0$.

Puisque le nombre d'étapes est borné par la constante $k$, la simulation est nécessairement finie (le nombre de configurations atteignables est fini et borné). Cette machine $\mathcal{S}_k$ s'arrête *toujours*, ce qui prouve que $\text{HALT}_{\le k}$ est décidable. $\blacksquare$