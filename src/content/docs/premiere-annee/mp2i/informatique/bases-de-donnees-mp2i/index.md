---
title: "📐 2. Théorèmes fondamentaux & Démonstrations clés"
description: "Fiche de cours et d'exercice CPGE."
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

L'algèbre relationnelle est un ensemble fermé d'opérateurs formels manipulant des relations pour en produire de nouvelles. On distingue les opérateurs fondamentaux et les opérateurs dérivés.

### Opérateurs fondamentaux

1.  **Sélection ($\sigma$)** : Soit $r$ une relation sur $R$ et $\phi$ une formule logique (prédicat) sur les attributs de $R$. 
    $$\sigma_{\phi}(r) = \{ t \in r \mid \phi(t) \text{ est vrai} \}$$
2.  **Projection ($\pi$)** : Soit $X \subseteq R$ un ensemble d'attributs.
    $$\pi_X(r) = \{ t[X] \mid t \in r \text{ avec } t[X] \text{ la restriction de } t \text{ a } X \}$$
3.  **Produit cartésien ($\times$)** : Soit $r_1$ sur $R_1$ et $r_2$ sur $R_2$ avec $R_1 \cap R_2 = \emptyset$.
    $$\text{r}_1 \times r_2 = \{ t_1 \cup t_2 \mid t_1 \in r_1 \land t_2 \in r_2 \}$$
4.  **Renommage ($\rho$)** : Permet de modifier le nom des attributs ou de la relation.
    $$\rho_{A \to B}(r)$$
5.  **Union ($\cup$) et Différence ($-$)** : Nécessitent des relations *compatibles* (même schéma).

### Théorème d'exprimabilité des opérateurs dérivés
La jointure naturelle ($\bowtie$), l'intersection ($\cap$) et la division ($\div$) ne sont pas fondamentales car elles s'expriment à partir des 5 opérateurs de base.

> **Démonstration (Cas de la jointure naturelle) :**
> Soit $r_1(A, B)$ et $r_2(B, C)$. La jointure naturelle $r_1 \bowtie r_2$ se définit formellement par :
> $$r_1 \bowtie r_2 = \pi_{A, r_1.B, C} (\sigma_{r_1.B = r_2.B} (r_1 \times \rho_{B \to r_2.B}(r_2)))$$
> Cette construction prouve que l'opérateur de jointure naturelle est redondant vis-à-vis du produit cartésien, de la sélection et de la projection. $\blacksquare$
---

## 💡 3. Méthodes de calcul & Algorithmes

Pour manipuler efficacement les bases de données, en particulier dans le contexte du modèle relationnel et du langage SQL (Structured Query Language) :

*   **Traduction Algèbre $\to$ SQL** :
    *   $\sigma_{\text{cond}}(r)$ $\leftrightarrow$ `SELECT * FROM r WHERE cond`
    *   $\pi_{A, B}(r)$ $\leftrightarrow$ `SELECT DISTINCT A, B FROM r`
    *   $r_1 \bowtie_{r_1.id = r_2.id} r_2$ $\leftrightarrow$ `SELECT * FROM r1 JOIN r2 ON r1.id = r2.id`

*   **Optimisation naïve de requêtes** :
    1.  *Pousser les sélections* le plus bas possible dans l'arbre syntaxique (avant les produits cartésiens) pour réduire la taille des relations intermédiaires.
    2.  *Pousser les projections* pour éliminer au plus tôt les attributs inutiles.

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Duplicatas et Modèle Relationnel** : Par définition mathématique, une relation est un *ensemble* (pas de tuples en double, pas d'ordre). En SQL, par défaut, les tables sont des *multisacs* (ou sacs), et les doublons sont conservés sauf si l'on utilise `DISTINCT`. Attention aux questions de concours piégeant sur cette distinction.
2.  **Compatibilité pour l'union** : Appliquer une union ($\cup$) sur deux relations n'ayant pas exactement les mêmes types d'attributs et le même nombre d'attributs conduit à une erreur sémantique majeure.
3.  **Division relationnelle ($\div$)** : Mal comprendre la division. Si $r(A, B)$ et $s(B)$, alors $r \div s$ retourne l'ensemble des valeurs $A$ associées à *toutes* les valeurs de $s$ dans $r$. Souvent confondue à tort avec une simple projection.
4.  **Valeurs NULL** : L'utilisation de la logique tri-valuée (Vrai, Faux, Inconnu) en SQL avec les valeurs `NULL` contredit l'algèbre relationnelle classique. Une condition comparant un `NULL` avec `=` renvoie `UNKNOWN`, ce qui élimine la ligne de la sélection (contrairement à une logique booléenne stricte).