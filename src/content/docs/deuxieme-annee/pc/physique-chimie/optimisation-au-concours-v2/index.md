---
title: 'Optimisation au concours V2 : Physique-Chimie PC/PC*'
description: 'Analyse approfondie des nouvelles questions classiques aux concours, rédactions types et exigences des rapporteurs.'
sidebar:
  badge:
    text: 'Méthode Concours V2'
    variant: 'caution'
---

## 🎯 Objectif & Analyse des tendances des Concours

En tant que président de jury et concepteur de sujets pour les concours de la filière PC (Mines-Ponts, Centrale-Supélec, CCINP), je constate chaque année les mêmes écueils lors de la correction des copies. Les épreuves de Physique-Chimie ne récompensent plus la simple restitution de cours, mais **l'agilité méthodologique**, la **rigueur dans l'utilisation des approximations** et la **maîtrise des ordres de grandeur**.

Ce guide "OPTIMISATION AU CONCOURS V2" décortique les trois piliers incontournables de la chimie et de la physique-chimie appliquées en classe de PC/PC*. Pour chaque question type, la structure exigée par le barème officiel est détaillée pas à pas. Vous devez tendre vers cette concision et cette rigueur formelle pour accrocher la note maximale.

---

## 📌 Question Type 1 : Cinétique chimique complexe : application de l'approximation de l'état quasi-stationnaire (AEQS) et étape quasi-déterminante

### Intitulé exact de la question dans les énoncés
> *"En supposant l'intermédiaire réactionnel $I$ en état quasi-stationnaire, exprimer sa concentration en fonction des concentrations des réactifs. En déduire la loi de vitesse de formation du produit final et identifier, le cas échéant, l'étape cinétiquement déterminante."*

### 💡 Méthode canonique & Étapes de rédaction
1. **Bilan des actes élémentaires :** Établir les équations cinétiques de chaque étape (admettre la validité de la loi de Guldberg si les actes sont supposés élémentaires).
2. **Expression de la vitesse de l'intermédiaire :** Écrire la dérivée temporelle $\frac{d[I]}{dt}$ en sommant les contributions de tous les actes élémentaires où $I$ intervient (production et consommation).
3. **Application de l'AEQS :** Poser $\frac{d[I]}{dt} \approx 0$ (valable si les constantes de formation de $I$ sont grandes devant ses constantes de disparition, ou si $[I]$ reste très faible devant les réactifs).
4. **Résolution algébrique :** Exprimer $[I]$ en fonction des concentrations des espèces stables.
5. **Injection et simplification :** Reporter $[I]$ dans l'expression de la vitesse globale de formation du produit. Discuter des régimes limites pour identifier l'étape quasi-déterminante (terme prépondérant au dénominateur ou au numérateur).

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Enoncé court :** Soit le mécanisme réactionnel en phase homogène :
1) $A + B \underset{k_{-1}}{\overset{k_{1}}{\rightleftharpoons}} I$ (rapide)
2) $I + C \xrightarrow{k_{2}} P + A$ (lent)
Donner la vitesse de formation de $P$ sous l'AEQS pour $I$.

**Rédaction modèle :**
* **Étape 1 : Vitesse de l'intermédiaire $I$**
  L'intermédiaire $I$ est consommé ou produit dans les deux actes élémentaires. D'après les lois de cinétique formelle :
  $$\frac{d[I]}{dt} = k_{1}[A][B] - k_{-1}[I] - k_{2}[I][C]$$

* **Étape 2 : Application de l'AEQS**
  Puisque $I$ est un intermédiaire réactionnel instable, son concentration vérifie l'AEQS : $\frac{d[I]}{dt} \approx 0$. Il vient :
  $$k_{1}[A][B] - (k_{-1} + k_{2}[C])[I] = 0 \implies [I] = \frac{k_{1}[A][B]}{k_{-1} + k_{2}[C]}$$

* **Étape 3 : Vitesse de formation du produit $P$**
  La vitesse de formation de $P$ est régie par le second acte élémentaire :
  $$v = \frac{d[P]}{dt} = k_{2}[I][C] = \frac{k_{1}k_{2}[A][B][C]}{k_{-1} + k_{2}[C]}$$

* **Discussion (Étape quasi-déterminante) :**
  Si l'étape 2 est cinétiquement limitante devant la dissociation de $I$, alors $k_{2}[C] \ll k_{-1}$. La vitesse se simplifie en :
  $$v \approx \frac{k_{1}k_{2}}{k_{-1}}[A][B][C]$$
  L'équilibre (1) est alors quasi-thermodynamique et l'étape (2) limite la vitesse globale. *(Note attribuée : 5/5)*

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oublier de justifier l'AEQS :** Écrire $\frac{d[I]}{dt} = 0$ sans mentionner l'hypothèse de faible concentration ou de réactivité forte de $I$ enlève des points précieux.
- **Confondre ordre apparent et molecularité :** Ne jamais déduire l'ordre d'une réaction complexe directement des coefficients stœchiométriques du bilan global.
- **Erreur de signe :** Une inversion de signe dans l'bilan de $\frac{d[I]}{dt}$ fausse tout l'exercice.

---

## 📌 Question Type 2 : Diffusion de la matière : loi de Fick, équation de diffusion massique et profil de concentration en régime permanent

### Intitulé exact de la question dans les énoncés
> *"Établir l'équation aux dérivées partielles régissant l'évolution spatio-temporelle de la concentration $C(x, t)$ d'une espèce chimique en solution, en combinant la première loi de Fick et un bilan de matière sur une tranche élémentaire. Résoudre en régime permanent."*

### 💡 Méthode canonique & Étapes de rédaction
1. **Bilan de matière macroscopique :** Isoler une tranche de volume $S \cdot dx$ comprise entre $x$ et $x+dx$.
2. **Flux traversants :** Exprimer la quantité de matière entrant par la face en $x$ ($J_{\text{enth}}(x) \cdot S \cdot dt$) et sortant par la face en $x+dx$ ($J_{\text{enth}}(x+dx) \cdot S \cdot dt$).
3. **Première loi de Fick :** Poser le vecteur densité de flux diffusif $vec{j} = -D \cdot \text{grad}(C)$, soit en géométrie cartésienne 1D : $j_x = -D \frac{\partial C}{\partial x}$.
4. **Conservation de la matière (Équation de bilan) :** Écrire $\frac{\partial C}{\partial t} = -\frac{\partial j_x}{\partial x} + R$ (où $R$ est le terme source s'il y a réaction chimique).
5. **Régime permanent :** Annuler la dérivée temporelle ($\frac{\partial C}{\partial t} = 0$), intégrer l'équation différentielle obtenue et utiliser les conditions aux limites (C.L.) pour déterminer les constantes d'intégration.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Enoncé court :** Établir le profil de concentration stationnaire $C(x)$ d'un réactif consommé par une réaction d'ordre 1 au sein d'un film stagnant de épaisseur $e$, avec $C(0) = C_0$ et $C(e) = 0$.

**Rédaction modèle :**
* **Étape 1 : Bilan sur une tranche $dx$**
  Considérons un volume $dV = S \, dx$ entre $x$ et $x+dx$. La variation temporelle de la quantité de matière s'écrit :
  $$\frac{\partial C}{\partial t} = -\frac{\partial j_x}{\partial x} - k C$$
  où $-kC$ représente le terme de consommation volumique (réaction d'ordre 1).

* **Étape 2 : Loi de Fick et équation différentielle**
  En injectant la loi de Fick $j_x = -D \frac{\partial C}{\partial x}$, on obtient l'équation de diffusion-réaction en régime permanent ($\frac{\partial C}{\partial t} = 0$) :
  $$D \frac{d^2 C}{dx^2} - k C = 0 \implies \frac{d^2 C}{dx^2} - \alpha^2 C = 0 \quad \text{avec} \quad \alpha = \sqrt{\frac{k}{D}}$$

* **Étape 3 : Résolution mathématique**
  L'équation caractéristique admet pour solutions des fonctions exponentielles. La solution générale s'écrit :
  $$C(x) = A \ch(\alpha x) + B \sh(\alpha x)$$

* **Étape 4 : Application des Conditions aux Limites (C.L.)**
  - En $x = 0$ : $C(0) = C_0 \implies A = C_0$.
  - En $x = e$ : $C(e) = 0 \implies C_0 \ch(\alpha e) + B \sh(\alpha e) = 0 \implies B = -C_0 \frac{\ch(\alpha e)}{\sh(\alpha e)}$.
  
  Le profil final s'exprime par :
  $$C(x) = C_0 \left( \ch(\alpha x) - \frac{\ch(\alpha e)}{\sh(\alpha e)} \sh(\alpha x) \right)$$
  *(Note attribuée : 5/5)*

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Signes dans la loi de Fick :** Ne pas oublier le signe moins (la matière diffuse des zones de forte concentration vers les zones de faible concentration).
- **Oubli des unités :** Le coefficient de diffusion $D$ s'exprime en $\text{m}^2\cdot\text{s}^{-1}$. Veillez à l'homogénéité des équations différentielles.
- **Conditions aux limites mal posées :** Confondre une concentration nulle à la paroi avec un flux nul (mur imperméable vs. réactif totalement consommé).

---

## 📌 Question Type 3 : Électrochimie : courbes d'intensité-potentiel, surtension d'activation/diffusion et vitesse de corrosion

### Intitulé exact de la question dans les énoncés
> *"Tracer qualitativement les courbes d'intensité-potentiel des deux couples redox mis en jeu lors de la corrosion d'un métal. En déduire le potentiel mixte de corrosion et le courant de corrosion correspondant. Exprimer l'influence de la diffusion sur la limitation du courant."*

### 💡 Méthode canonique & Étapes de rédaction
1. **Identification des espèces et des couples :** Repérer le réducteur métallique (ex: $Fe_{(s)}$) et l'oxydant présent dans le milieu (ex: $H^+_{(aq)}$ ou $O_{2(aq)}$).
2. **Écriture des lois de Nernst et des réactions :** Définir les potentiels standard $E^\circ$ et les potentiels d'équilibre de chaque couple.
3. **Tracé des branches cathodiques et anodiques :**
   - Surtension d'activation (loi de Tafel : $\eta = a + b \log |I|$).
   - Palier de diffusion (courant limite $I_{\text{lim}}$ si l'espèce est transportée par convection-diffusion).
4. **Application du théorème de superposition :** Au potentiel mixte $E_{\text{mix}}$, le courant total traversant l'interface est nul ($I_{\text{anodique}} + I_{\text{cathodique}} = 0$). Graphiquement, c'est le point d'intersection des branches de réduction et d'oxydation.
5. **Lecture et exploitation :** En déduire le courant de corrosion $I_{\text{corr}}$, grandeur reliée à la vitesse de recul du métal (loi de Faraday).

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Enoncé court :** Déterminer graphiquement et algébriquement le courant de corrosion du fer dans une solution acide dessoxygénée, sachant que le palier de diffusion des ions $H^+$ intervient à $I_{\text{lim}, H^+} = -10\,\text{mA}$.

**Rédaction modèle :**
* **Étape 1 : Récapitulatif des couples et réactions**
  - Oxydation du métal (anode) : $Fe_{(s)} = Fe^{2+}_{(aq)} + 2e^-$
  - Réduction du proton (cathode) : $2H^+_{(aq)} + 2e^- = H_{2(g)}$

* **Étape 2 : Construction graphique du diagramme $I(E)$**
  L'allure de la courbe globale montre :
  - Pour le fer, une branche anodique de Tafel : $E = E_{\text{eq}}(Fe^{2+}/Fe) + \beta_a \log\left(\frac{I}{I_0}\right)$.
  - Pour les ions $H^+$, une branche cathodique comportant une zone cinétique (Tafel) puis un **palier de diffusion** verticalisé à $I = I_{\text{lim}, H^+} = -10\,\text{mA}$.

* **Étape 3 : Application de la conservation du flux d'électrons (Potentiel mixte)**
  À l'état stationnaire de corrosion, le métal libère des électrons exactement au rythme où les protons les consomment :
  $$|I_{\text{anodique}}(E_{\text{mix}})| = |I_{\text{cathodique}}(E_{\text{mix}})| = I_{\text{corr}}$$

* **Étape 4 : Calcul du courant de corrosion**
  Si le système se trouve en régime de diffusion limite pour l'oxydant (cas fréquent en corrosion aqueuse agressive), le potentiel mixte s'établit dans la zone du palier. Le courant de corrosion atteint directement sa valeur limite :
  $$I_{\text{corr}} = |I_{\text{lim}, H^+}| = 10\,\text{mA}$$
  La vitesse de corrosion massique $v_{\text{corr}}$ se déduit via la loi de Faraday :
  $$\frac{dm}{dt} = \frac{I_{\text{corr}}}{2F} M_{\text{Fe}}$$
  *(Note attribuée : 5/5)*

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Inverser anodes et cathodes :** Le réducteur le plus fort s'oxyde (anode, $I > 0$ dans les conventions du récepteur ou selon le choix du tracé), l'oxydant se réduit (cathode, $I < 0$).
- **Négliger la surtension :** Oublier que les réactions électrochimiques réelles nécessitent une surtension par rapport au potentiel d'équilibre thermodynamique de Nernst.
- **Confondre courant et densité de courant :** Toujours vérifier si l'axe vertical est en ampères ($I$) ou en ampères par mètre carré ($j$), cette dernière grandeur étant intrinsèque au matériau.