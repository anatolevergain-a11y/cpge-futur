---
title: 'Exercice 2 : Automates finis déterministes et lemme de l étoile'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un système embarqué de contrôle d'accès sécurisé pour un centre de données (datacenter), on s'intéresse à la validation de séquences de commandes binaires transmises par un réseau de capteurs. L'alphabet d'entrée est $\Sigma = \{0, 1\}$. 

Pour des raisons de traçabilité et de sécurité contre les attaques par rejeu, les trames de données valides doivent obéir à des contraintes structurelles strictes. On modélise le canal de transmission par des langages formels. L'équipe d'architecture logicielle propose d'utiliser des automates finis déterministes (AFD) pour filtrer les paquets au niveau de la couche liaison, garantissant ainsi un temps de traitement en $\mathcal{O}(n)$ où $n$ est la longueur de la trame, avec une empreinte mémoire $\mathcal{O}(1)$.

Cependant, les spécifications techniques évoluent. Un auditeur en cybersécurité affirme qu'un certain protocole de validation complexe ne peut pas être implémenté à l'aide d'un simple AFD, car il nécessite une mémoire arbitrairement grande pour compter des motifs imbriqués. L'objectif de ce problème est de formaliser ces notions à l'aide de la théorie des langages réguliers, de manipuler des constructions d'automates et d'appliquer le lemme de l'étoile pour valider ou rejeter les choix d'architecture.

---

### ❓ Questions progressives

1. **Formalisation et Automates**
   Soit $L_1$ le langage sur l'alphabet $\Sigma = \{0, 1\}$ constitué de toutes les chaînes contenant un nombre pair de $0$ et un nombre impair de $1$.
   Donner un automate fini déterministe complet $A_1 = (Q, \Sigma, \delta, q_0, F)$ reconnaissant $L_1$ en justifiant brièvement le choix de l'ensemble des états $Q$ et de la fonction de transition $\delta$.

2. **Opérations régulières**
   Soit $L_2 = \{w \in \{0, 1\}^* \mid w \text{ commence par } 1 \text{ et se termine par } 0\}$. 
   Donner une expression régulière (ou rationnelle) décrivant $L_2$, puis construire un automate fini non déterministe (AFN) avec transitions spontanées ($\varepsilon$-transitions) reconnaissant $L_2$.

3. **Analyse critique et limites du modèle matériel**
   Dans le contexte de notre système embarqué, le microcontrôleur dispose d'une mémoire SRAM limitée à $M = 512$ kilo-octets. Si l'on souhaite implémenter un automate reconnaissant un langage régulier $L$, quelle est l'incidence directe du nombre d'états de l'AFD minimal sur l'utilisation de la mémoire ? Discutez des limites de la modélisation par AFD pour des protocoles de communication modernes à grande échelle.

4. **Application du lemme de l'étoile (Pumping Lemma)**
   On considère le langage $L_3 = \{1^n 0^n \mid n \in \mathbb{N}\}$. 
   À l'aide du lemme de l'étoile pour les langages réguliers, démontrer rigoureusement que $L_3$ n'est pas un langage régulier. En déduire l'impossibilité de filtrer ce type de motif avec un simple AFD.

5. **Généralisation et complexité**
   Soit $L_4$ le langage des mots de $\{0, 1\}^*$ contenant le motif $0101$ comme sous-mot. 
   Donner le nombre minimal d'états d'un AFD reconnaissant $L_4$ et expliquer comment la structure de l'automate se déduit de l'algorithme de Knuth-Morris-Pratt (KMP) appliqué aux automates finis.

---

### 💡 Pistes & Indications

- **Q1 :** Pensez à utiliser un ensemble d'états qui mémorise la parité des deux symboles simultanément (produit cartésien de deux automates à 2 états).
- **Q2 :** Décomposez $L_2$ en une concaténation de sous-langages simples : le préfixe, le corps, et le suffixe.
- **Q3 :** Évaluez la taille nécessaire pour stocker la table de transition d'un AFD en fonction du nombre d'états $|Q|$ et de la taille de l'alphabet $|\Sigma|$.
- **Q4 :** Procédez par l'absurde en supposant que $L_3$ est régulier. Choisissez judicieusement le mot $w$ en fonction de la constante de pumping $p$, puis analysez les différentes décompositions possibles $w = xyz$ selon les contraintes du lemme ($|xy| \le p$ et $|y| \ge 1$).
- **Q5 :** Pour un motif de longueur $m$, l'automate de recherche enregistre le plus long préfixe du motif qui est suffixe du texte lu.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Corrigé de la question 1
Pour concevoir l'AFD reconnaissant $L_1$ (nombre pair de $0$ et nombre impair de $1$), on définit l'ensemble des états comme le produit cartésien des parités pour chaque symbole :
$$Q = \{P_0, I_0\} \times \{P_1, I_1\}$$
Où $P$ représente un compte pair et $I$ un compte impair. Soit $Q = \{s_{00}, s_{01}, s_{10}, s_{11}\}$ avec :
- $s_{00}$ : pair de $0$, pair de $1$ (État initial $q_0$)
- $s_{01}$ : pair de $0$, impair de $1$ (État acceptant $F = \{s_{01}\}$od)
- $s_{10}$ : impair de $0$, pair de $1$
- $s_{11}$ : impair de $0$, impair de $1$

La fonction de transition $\delta$ est définie par :
- $\delta(s_{00}, 0) = s_{10}$, $\delta(s_{00}, 1) = s_{01}$
- $\delta(s_{01}, 0) = s_{11}$, $\delta(s_{01}, 1) = s_{00}$
- $\delta(s_{10}, 0) = s_{00}$, $\delta(s_{10}, 1) = s_{11}$
- $\delta(s_{11}, 0) = s_{01}$, $\delta(s_{11}, 1) = s_{10}$

Cet automate est complet, déterministe et possède exactement 4 états.

#### Corrigé de la question 2
Le langage $L_2$ (commence par $1$ et se termine par $0$) s'exprime par l'expression rationnelle :
$$E_2 = 1(0 + 1)^* 0$$

Pour construire l'AFN avec $\varepsilon$-transitions :
1. Un état initial $q_i$ relié par une transition sur $1$ à un état $q_1$.
2. L'état $q_1$ possède une boucle sur $\{0, 1\}$ pour accepter n'importe quel corps de mot.
3. Depuis $q_1$, une transition sur $0$ mène vers un état acceptant $q_f$.

#### Corrigé de la question 3 (Analyse critique et limites)
**Modélisation et impact matériel :** 
Un AFD est défini par un quintuplet $(Q, \Sigma, \delta, q_0, F)$. Sa table de transition nécessite de stocker $|Q| \times |\Sigma|\text{ transitions}$. Sur un microcontrôleur avec $M = 512\text{ Kio}$, si $|\Sigma| = 2$ et que chaque transition est encodée sur 4 octets, le nombre d'états $|Q$ est borné par la mémoire disponible. 

**Limites du modèle :**
Dans les protocoles réseaux modernes (ex: TLS, TCP avec gestion des fenêtres glissantes ou imbrications de balises XML/JSON), les langages à reconnaître ne sont pas réguliers mais algébriques (context-free). Un AFD ne possède pas de pile ; il lui est donc impossible de vérifier des appariements de parenthèses ou de balises de profondeur arbitraire $n$. Si le protocole exige de mémoriser une taille de paquet variable proportionnelle à la charge utile, l'utilisation d'un AFD conduit à une explosion combinatoire du nombre d'états ($|Q| \to \infty$), rendant l'implémentation matérielle infaisable. Le choix de l'AFD est donc strictement limité aux contrôles syntaxiques locaux et hors-contexte superficiels.

#### Corrigé de la question 4
Raisonnons par l'absurde en supposant que $L_3 = \{1^n 0^n \mid n \in \mathbb{N}\}$ est un langage régulier. 
D'après le lemme de l'étoile, il existe un entier $p \ge 1$ (la constante de pumping) tel que tout mot $w \in L_3$ de longueur $|w|ège p$ peut se scinder en $w = xyz$ avec les conditions :
1. $|xy| \le p$
2. $|y| \ge 1$
3. $\forall k \in \mathbb{N}, xy^kz \in L_3$

Considérons le mot $w = 1^p 0^p$. Sa longueur est $2p \ge p$, donc le lemme s'applique.
Puisque $|xy| \le p$ et que le préfixe de $w$ ne contient que des $1$, la sous-chaîne $y$ est nécessairement constituée exclusivement de $1$. Posons $|y| = k \ge 1$.
D'après la condition 3, le mot $xy^2z$ doit appartenir à $L_3$. 
En injectant $y$, le nombre de $1$ devient $p + k$ (avec $k \ge 1$), tandis que le nombre de $0$ reste strictement égal à $p$. 
Le mot $xy^2z s'écrit donc $1^{p+k}0^p$. Comme $k \ge 1$, $p + k \neq p$, ce qui implique que $xy^2z \notin L_3$.

C'est une contradiction. **Conclusion :** Le langage $L_3$ n'est pas régulier. Aucun AFD ne peut reconnaître ce langage.

#### Corrigé de la question 5
Pour le motif $0101$ (longueur $m = 4$), l'AFD minimal construit selon la méthode des automates de suffixes (inspirée de KMP) comporte $m + 1 = 5$ états. 
Chaque état représente le plus long préfixe du motif qui est un suffixe du texte lu jusqu' présent. Les états sont $q_0 (\varepsilon), q_1 (0), q_2 (01), q_3 (010), q_4 (0101 \text{ - acceptant})$. L'empreinte est minimale et déterministe en $\mathcal{O}(1)$ par caractère lu.