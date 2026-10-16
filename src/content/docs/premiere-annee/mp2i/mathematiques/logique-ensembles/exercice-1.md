---
title: 'Exercice 1 : Quantificateurs et démonstrations formelles'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la modélisation formelle de systèmes dynamiques discrets en informatique (par exemple, la vérification de programmes ou l'analyse de stabilité de réseaux de capteurs IoT), les ingénieurs manipulent quotidiennement des assertions logiques complexes combinant des quantificateurs universels ($\forall$) et existentiels ($\exists$). 

Une mauvaise manipulation de ces quantificateurs conduit souvent à des failles de sécurité ou à des instabilités de réseaux. L'objectif de ce problème est d'étudier la manipulation rigoureuse des assertions quantifiées, d'analyser la négation de propriétés complexes et d'appliquer ces concepts à un modèle simplifié de régulation de flux de données sous contrainte énergétique.

Soit $E$ un ensemble non vide (qui représentera l'espace des états d'un système) et $f : E \to E$ une application. On considère des propriétés portant sur $f$ et sur des parties de $E$.

---

### ❓ Questions progressives

1. **Manipulation élémentaire de quantificateurs**
   Soit $P(x, y)$ une assertion à deux variables, où $x \in X$ et $y \in Y$. 
   Écrire formellement la négation de l'assertion :
   $$\mathcal{A} : \forall x \in X, \left( P(x, y_0) \implies \exists y \in Y, \neg P(x, y) \right)$$
   où $y_0 fixée$ est un élément de $Y$.

2. **Propriétés de bornitude et modélisation de capteurs**
   On se place dans le cas où $E = \mathbb{R}$. Soit $f : \mathbb{R} \to \mathbb{R}$.
   Traduire mathématiquement à l'aide de quantificateurs la phrase : *"La fonction $f$ n'est pas majorée sur $\mathbb{R}$"*.

3. **Analyse critique d'un modèle d'énergie**
   Un capteur IoT transmet des paquets de données. Soit $E(t)$ l'énergie du système à l'instant $t$ (exprimée en joules $\text{J}$). On modélise l'évolution par une fonction de transition $f$ telle que $E_{n+1} = f(E_n)$. 
   Un ingénieur affirme que le système est stable en énergie si :
   $$\exists M \in \mathbb{R}, \forall n \in \mathbb{N}, E_n \le M$$
   *   a) Écrire la négation de cette proposition de stabilité.
   *   b) **Esprit critique :** En pratique, un composant matériel réel possède une énergie maximale absolue $E_{\text{max}} = 5 \, \text{J}$ dictée par la physique de sa batterie au lithium. Que penser de l'hypothèse mathématique d'existence d'un $M$ quelconque non borné par la physique du système ? Discutez des limites du modèle mathématique face à la réalité industrielle.

4. **Alternance des quantificateurs**
   Soit $g : \mathbb{R} \to \mathbb{R}$. On considère les deux assertions suivantes :
   *   $(\text{S}_1) : \forall x \in \mathbb{R}, \exists y \in \mathbb{R}, g(x) < y$
   *   $(\text{S}_2) : \exists y \in \mathbb{R}, \forall x \in \mathbb{R}, g(x) < y$
   *   a) Montrer que $(\text{S}_1)$ est toujours vraie quelle que soit la fonction $g$.
   *   b) Que dire de $(\text{S}_2)$ ? Caractériser l'ensemble des fonctions $g$ vérifiant $(\text{S}_2)$.

---

### 💡 Pistes & Indications

*   **Q1 :** Rappelez-vous que $\neg(A \implies B) \iff (A \land \neg B)$ et que la négation inverse les quantificateurs ($\neg(\forall) \equiv \exists \neg$).
*   **Q2 :** Pour "non majorée", l'énoncé usuel de "majorée" est $\exists M \in \mathbb{R}, \forall x \in \mathbb{R}, f(x) \le M$. Niez cette assertion en inversant soigneusement les quantificateurs.
*   **Q3 :** Traduisez la borne physique dans le formalisme logique et questionnez la validité du domaine de définition $\mathbb{R}$ pour $M$ ou pour $E_n$.
*   **Q4 :** Pour $(\text{S}_1)$, pour un $x$ donné, pensez à choisir $y = g(x) + 1$. Pour $(\text{S}_2)$, reliez cela à la notion de fonction majorée.

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Négation de l'assertion $\mathcal{A}$ :**
   L'assertion est :
   $$\mathcal{A} : \forall x \in X, \left( P(x, y_0) \implies \exists y \in Y, \neg P(x, y) \right)$$
   Rappelons que $\neg(A \implies B) \equiv A \land \neg B$. La négation de l'implication $P(x, y_0) \implies \left(\exists y \in Y, \neg P(x, y)\right)$ est donc :
   $$P(x, y_0) \land \neg\left(\exists y \in Y, \neg P(x, y)\right)$$
   En poussant la négation devant le quantificateur existentiel :
   $$P(x, y_0) \land \left(\forall y \in Y, P(x, y)\right)$$
   Finalement, en niant le quantificateur universel initial $\forall x \in X$ en un $\exists x \in X$, on obtient :
   $$\neg \mathcal{A} : \exists x \in X, \left( P(x, y_0) \land \forall y \in Y, P(x, y) \right)$$

2. **Traduction de la non-majoration :**
   Être majorée s'écrit : $\exists M \in \mathbb{R}, \forall x \in \mathbb{R}, f(x) \le M$.
   La négation (donc "n'est pas majorée") s'obtient en niant cette proposition :
   $$\forall M \in \mathbb{R}, \exists x \in \mathbb{R}, f(x) > M$$
   *Interprétation physique :* Quel que soit le seuil d'alerte $M$ fixé, il existe toujours un état du système (ou un instant) où l'énergie dépasse ce seuil.

3. **Analyse du modèle d'énergie et esprit critique :**
   *   a) L'assertion de stabilité est $\exists M \in \mathbb{R}, \forall n \in \mathbb{N}, E_n \le M$. Sa négation est :
       $$\forall M \in \mathbb{R}, \exists n \in \mathbb{N}, E_n > M$$
   *   b) **Analyse critique des limites du modèle :** 
       Mathématiquement, la variable $M$ peut appartenir à $\mathbb{R}$ tout entier, sans borne supérieure. Cependant, dans un contexte d'ingénierie embarquée, l'énergie est stockée dans un composant physique (batterie, condensateur) soumis à des lois de rupture. Si $E_n > E_{\text{max}}$ (où $E_{\text{max}} = 5 \, \text{J}$), le modèle mathématique continuera d'évoluer (si $f$ le permet), mais le système physique réel subira une détérioration irréversible (surchauffe, explosion de la batterie, coupure par un disjoncteur thermique). 
       *Conclusion du modèle :* Le mathématicien étudie la borne dans $\mathbb{R}$, mais l'ingénieur doit impérativement restreindre le domaine à $M \le E_{\text{max}}$, sous peine d'obtenir un modèle abstrait parfaitement correct sur le plan formel mais totalement caduc en exploitation industrielle.

4. **Alternance des quantificateurs :**
   *   a) $(\text{S}_1) : \forall x \in \mathbb{R}, \exists y \in \mathbb{R}, g(x) < y$.
       Soit $x \in \mathbb{R}$ fixé. Choisissons $y = g(x) + 1$. On a bien $g(x) < g(x) + 1$, soit $g(x) < y$. L'assertion $(\text{S}_1)$ est donc **toujours vraie** pour n'importe quelle fonction $g$.
   *   b) $(\text{S}_2) : \exists y \in \mathbb{R}, \forall x \in \mathbb{R}, g(x) < y$.
       Cette assertion signifie qu'il existe un réel $y$ qui est strictement supérieur à *toutes* les valeurs prises par $g$. C'est exactement la définition d'une **fonction strictement majorée**.
       L'ensemble des fonctions vérifiant $(\text{S}_2)$ est donc l'ensemble des fonctions majorées sur $\mathbb{R}$. Par exemple, $g(x) = -x^2$ la vérifie (avec $y = 1$), mais $g(x) = x$ ne la vérifie pas.