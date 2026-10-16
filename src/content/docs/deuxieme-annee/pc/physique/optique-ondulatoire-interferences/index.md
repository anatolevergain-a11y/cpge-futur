---
title: "Optique Ondulatoire : Interférences & Réseaux de Diffraction"
description: "Méthodologie détaillée, rédactions modèles et conseils des jurys de concours Mines-Ponts / Centrale-Supélec."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Analyse des attentes et critères d'évaluation des jurys

Dans les concours Mines-Ponts et Centrale-Supélec, l'épreuve de physique en filière PC fait la part belle à l'optique ondulatoire. L'examinateur ne cherche pas seulement à évaluer une restitution de cours, mais bien une **maîtrise opérationnelle** des concepts. 

Les rapports de jury soulignent régulièrement les faiblesses suivantes :
- **Confusions chroniques** entre différence de marche $\delta$, déphasage $\Delta \varphi$ et retard temporel $\tau$.
- **Approximations inadaptées** (développements limités menés à l'ordre insuffisant ou non justifiés par les grandeurs caractéristiques du dispositif).
- **Incompréhension physique du contraste** : incapacité à relier la visibilité des franges à la cohérence temporelle ou spatiale de la source.
- **Rédaction approximative** dans le passage de l'intensité à deux ondes au cas multi-ondes (réseau de diffraction).

Pour décrocher une note d'excellence, votre copie doit présenter :
1. Une **démarche rigoureuse** : identification des sources, écriture du champ électrique complexe, calcul de la phase, puis passage à l'intensité temporelle moyenne.
2. Un **soin graphique** irréprochable si un schéma est demandé (axes orientés, notations explicites, plans d'observation clairement définis).
3. Une **analyse critique des résultats** (conditions aux limites, ordres de grandeur, comportement asymptotique).

---

## 📐 Rappels théoriques & Démonstrations incontournables

### Champ lumineux et intensité
Une onde lumineuse monochromatique de pulsation $\omega$ est modélisée par son champ électrique complexe $\underline{E}(M, t) = \underline{E}_0(M) e^{j(\omega t - \phi(M))}$. L'intensité lumineuse $I(M)$ observée sur un écran est proportionnelle à la moyenne temporelle du carré du champ réel :
$$I(M) = \varepsilon_0 c \, \langle \|\vec{E}_{\text{réel}}(M, t)\|^2 \rangle_t = \frac{1}{2} \varepsilon_0 c \, \|\underline{E}_0(M)\|^2$$

### Superposition de deux ondes cohérentes
Pour deux ondes issues de la même source (interférences par division du front d'onde ou d'amplitude), l'intensité totale s'écrit sous la forme canonique de Fresnel :
$$I(M) = I_1 + I_2 + 2 \sqrt{I_1 I_2} \cos(\Delta \varphi(M))$$
Où $\Delta \varphi(M) = \phi_2(M) - \phi_1(M) = \frac{2\pi}{\lambda_0} \delta(M)$ est le déphasage entre les deux ondes, et $\delta(M)$ la différence de marche optique.

---

## 📌 Question / Problématique classique 1 : Calcul du déphasage et formule de Fresnel pour le dispositif des trous d'Young

#### 💡 Méthode de rédaction canonique
1. **Modélisation géométrique** : Poser un repère cartésien $(O, \vec{x}, \vec{y}, \vec{z})$ où les sources $S_1$ et $S_2$ sont situées dans le plan $x = 0$ en $(0, -a/2, 0)$ et $(0, a/2, 0)$. L'écran est placé à la distance $D$ (avec $a \ll D$).
2. **Expression des chemins optiques** : Exprimer la distance $S_1 M$ et $S_2 M$ pour un point $M(D, y, z)$ de l'écran.
3. **Utilisation d'un développement limité (DL)** : Factoriser par $D$ et utiliser l'approximation paraxiale $(a/D \ll 1)$.
4. **Conclusion intermédiaire** : En déduire l'expression de la différence de marche $\delta(M) = S_2 M - S_1 M$ puis du déphasage $\Delta \varphi$.

#### 📋 Exercice type concours résolu pas à pas

**Énoncé :**
Soit un dispositif des trous d'Young éclairé par une source laser monochromatique de longueur d'onde $\lambda_0$ dans le vide. Les trous sont séparés de $a = 1,0 \text{ mm}$ et l'écran est à $D = 1,5 \text{ m}$. Calculer l'interfrange $i$ sur l'écran.

**Correction rédigée :**
*Étape 1 : Calcul des chemins optiques.*
Soit $M(D, y, 0)$ un point de l'écran. Les coordonnées des sources secondaires sont $S_1(0, -a/2, 0)$ et $S_2(0, a/2, 0)$.
Les distances $S_1 M$ et $S_2 M$ s'écrivent :
$$S_1 M = \sqrt{D^2 + \left(y + \frac{a}{2}\right)^2}, \quad S_2 M = \sqrt{D^2 + \left(y - \frac{a}{2}\right)^2}$$

*Étape 2 : Application du développement limité.*
On factorise par $D$ en supposant $y \ll D$ et $a \ll D$ :
$$S_2 M = D \left(1 + \frac{(y - a/2)^2}{D^2}\right)^{1/2}$$
À l'aide du développement limité usuel $(1+\epsilon)^{1/2} \approx 1 + \frac{1}{2}\epsilon$ valable pour $\epsilon \ll 1$, on obtient :
$$S_2 M \approx D \left(1 + \frac{y^2 - ya + a^2/4}{2D^2}\right)$$
De même pour $S_1 M$ :
$$S_1 M \approx D \left(1 + \frac{y^2 + ya + a^2/4}{2D^2}\right)$$

*Étape 3 : Calcul de la différence de marche et de l'intensité.*
La différence de marche optique $\delta$ vaut :
$$\delta = S_2 M - S_1 M \approx -\frac{ya}{D}$$
En retenant la valeur absolue ou la définition algébrique selon l'orientation, le déphasage est $\Delta \varphi = \frac{2\pi}{\lambda_0} \delta$. L'intensité lumineuse s'exprime par :
$$I(y) = 2 I_0 \left(1 + \cos\left(\frac{2\pi a y}{\lambda_0 D}\right)\right)$$
Les franges brillantes sont obtenues lorsque $\Delta \varphi = 2 p \pi$ (avec $p \in \mathbb{Z}$), ce qui donne la position des interfranges $y_p = p \frac{\lambda_0 D}{a}$. 
L'interfrange $i$, défini par $i = y_{p+1} - y_p$, s'écrit :
$$i = \frac{\lambda_0 D}{a}$$
*A.N. :* Pour $\lambda_0 = 632,8 \text{ nm}$ (laser hélium-néon), $D = 1,5 \text{ m}$ et $a = 1,0 \text{ mm}$ :
$$i = \frac{632,8 \times 10^{-9} \times 1,5}{1,0 \times 10^{-3}} = 9,49 \times 10^{-4} \text{ m} \approx 0,95 \text{ mm}$$

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Erreur d'ordre dans le DL** : S'arrêter à l'ordre 0 (terme en $D$) conduit à $\delta = 0$, ce qui annule toute possibilité d'observer des interférences. Il faut impérativement aller au premier ordre non nul (ordre 2 en $y/D$).
- **Oubli de la condition de validité** : Ne pas préciser que le calcul n'est valable que dans l'approximation paraxiale ($y \ll D$).

---

## 📌 Question / Problématique classique 2 : Détermination de la différence de marche et expression du contraste des franges

#### 💡 Méthode de rédaction canonique
1. **Définition générale du contraste** : Rappeler la formule mathématique du contraste (ou visibilité) :
   $$\mathcal{C} = \frac{I_{\text{max}} - I_{\text{min}}}{I_{\text{max}} + I_{\text{min}}}$$
2. **Lien avec la source étendue ou polychromatique** : Expliquer comment la superposition incohérente d'intensités modifie l'expression de l'intensité globale.
3. **Calcul de l'enveloppe** : Intégrer sur les différentes longueurs d'onde ou sur la dimension de la source pour obtenir le terme correctif (souvent un sinus ou une fonction cardinale).
4. **Interprétation physique** : Discuter de la disparition des franges au-delà d'une certaine différence de marche (longueur de cohérence) ou d'une taille critique de source.

#### 📋 Exercice type concours résolu pas à pas

**Énoncé :**
On considère une source lumineuse polychromatique émettant dans un intervalle de longueur d'onde $[\lambda_0 - \Delta \lambda / 2, \lambda_0 + \Delta \lambda / 2]$. En supposant l'intensité émise uniformément répartie, exprimer l'intensité totale $I(M)$ et déterminer l'expression du contraste en fonction de la différence de marche $\delta$.

**Correction rédigée :**
*Étape 1 : Sommation des intensités polychromatiques.*
Les différentes composantes spectrales de la source étant incohérentes entre elles, les intensités s'ajoutent. Pour un élément spectral de longueur d'onde $\lambda$ et d'intensité élémentaire $dI_0 = \frac{I_0}{\Delta \lambda} d\lambda$, l'intensité élémentaire sur l'écran s'écrit :
$$dI(M, \lambda) = 2 \frac{I_0}{\Delta \lambda} \left(1 + \cos\left(\frac{2\pi \delta}{\lambda}\right)\right) d\lambda$$

*Étape 2 : Intégration sur le spectre.*
L'intensité totale est obtenue par intégration :
$$I(M) = \int_{\lambda_0 - \Delta \lambda / 2}^{\lambda_0 + \Delta \lambda / 2} 2 \frac{I_0}{\Delta \lambda} \left(1 + \cos\left(\frac{2\pi \delta}{\lambda}\right)\right) d\lambda$$
En posant $x = \frac{2\pi \delta}{\lambda}$, on a $d\lambda = -\frac{2\pi \delta}{x^2} dx$. Pour simplifier le calcul dans le cas où $\Delta \lambda \ll \lambda_0$, on approche l'intégrale en posant $\lambda \approx \lambda_0$ dans l'amplitude et en effectuant l'intégration :
$$I(M) = 2 I_0 \left( 1 + \text{sinc}\left(\frac{\pi \delta \Delta \lambda}{\lambda_0^2}\right) \cos\left(\frac{2\pi \delta}{\lambda_0}\right) \right)$$
Où $\text{sinc}(u) = \frac{\sin(u)}{u}$.

*Étape 3 : Calcul du contraste.*
L'intensité maximale et minimale s'obtiennent lorsque le terme $\cos(\dots)$ vaut respectivement $+1$ et $-1$ (en supposant l'enveloppe lentement variable devant la fonction cosinus) :
$$I_{\text{max}} = 2 I_0 \left(1 + \left|\text{sinc}\left(\frac{\pi \delta \Delta \lambda}{\lambda_0^2}\right)\right|\right), \quad I_{\text{min}} = 2 I_0 \left(1 - \left|\text{sinc}\left(\frac{\pi \delta \Delta \lambda}{\lambda_0^2}\right)\right|\right)$$
Le contraste $\mathcal{C}$ s'établit donc ainsi :
$$\mathcal{C}(\delta) = \left| \text{sinc}\left(\frac{\pi \delta \Delta \lambda}{\lambda_0^2}\right) \right|$$

*Étape 4 : Analyse critique.*
Si $\delta = 0$, $\mathcal{C} = 1$ (franges nettes). Dès que $\delta$ augmente de telle sorte que $\frac{\pi \delta \Delta \lambda}{\lambda_0^2} \ge \pi$, le contraste s'annule : c'est le **brouillage des franges** par incohérence temporelle.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Addition des amplitudes au lieu des intensités** pour des sources incohérentes (polychromatiques ou étendues). C'est une faute éliminatoire grave.
- **Mauvaise manipulation de la fonction cardinale** : Oublier de prendre la valeur absolue lors du calcul du contraste, ce qui conduirait à un contraste négatif (physiquement inacceptable puisque l'intensité est positive).

---

## 📌 Question / Problématique classique 3 : Étude de la résolution d'un réseau de diffraction en réfraction/réflexion

#### 💡 Méthode de rédaction canonique
1. **Condition d'interférence constructive (Réseau)** : Établir la formule des réseaux par un bilan de marche entre deux fentes consécutives séparées d'un pas $a$ (ou $b$) :
   $$a (\sin(i) + \sin(i')) = p \lambda_0$$
2. **Recherche de la condition de mise en coïncidence ou de résolution (Critère de Rayleigh)** : Exprimer l'écart angulaire minimal $\delta i'$ entre deux longueurs d'onde $\lambda$ et $\lambda + d\lambda$ que le réseau peut séparer.
3. **Calcul du pouvoir de résolution théorique** : Faire le rapport $R = \frac{\lambda_0}{\Delta \lambda} = p N$, où $N$ est le nombre total de traits éclairés.

#### 📋 Exercice type concours résolu pas à pas

**Énoncé :**
Un réseau par transmission comporte $N = 2000$ traits répartis sur une largeur $L = 1,0 \text{ cm}$. Il est éclairé sous incidence normale ($i = 0$) par une lumière polychromatique contenant deux raies voisines du sodium autour de $\lambda_0 = 589,0 \text{ nm}$ ($\Delta \lambda = 0,6 \text{ nm}$). Calculer l'ordre d'interférence $p$ minimal et vérifier si le réseau permet de résoudre ces deux raies à l'ordre $p = 1$.

**Correction rédigée :**
*Étape 1 : Formule fondamentale du réseau.*
Pour une incidence normale ($i = 0$), la différence de marche entre deux ondes issues de traits consécutifs séparés d'un pas $a$ est $\delta = a \sin(i')$, où $i'$ est l'angle de diffraction. Les directions des principaux maxima vérifient la condition de grating :
$$a \sin(i') = p \lambda_0 \quad (\text{avec } p \in \mathbb{Z})$$
Le pas $a$ du réseau se calcule à partir de la largeur totale $L$ et du nombre de traits $N$ :
$$a = \frac{L}{N} = \frac{1,0 \times 10^{-2}}{2000} = 5,0 \times 10^{-6} \text{ m} = 5,0 \, \mu\text{m}$$

*Étape 2 : Expression du pouvoir de résolution par le critère de Rayleigh.*
Deux raies de longueurs d'onde $\lambda$ et $\lambda + d\lambda$ sont dites résolues si le maximum principal de l'une coïncide avec le premier minimum d'annulation de l'autre. 
En différentiant la relation du réseau à angle $i'$ fixé :
$$a \cos(i') di' = p d\in$$
La largeur angulaire d'un pic principal d'interférence multi-ondes est donnée par $\Delta i' \approx \frac{\lambda}{N a \cos(i')}$. En appliquant le critère de Rayleigh, le pouvoir de résolution chromatique $R$ s'exprime par :
$$R = \frac{\lambda_0}{\Delta \lambda} = p N$$

*Étape 3 : Application numérique et vérification.*
Calculons le pouvoir de résolution nécessaire pour séparer les deux raies du sodium :
$$R_{\text{requis}} = \frac{589,0 \times 10^{-9}}{0,6 \times 10^{-9}} \approx 982$$
Voyons le pouvoir de résolution offert par le réseau à l'ordre $p = 1$ :
$$R_{\text{offert}} = p N = 1 \times 2000 = 2000$$
Puisque $R_{\text{offert}} > R_{\text{requis}}$ ($2000 > 982$), **le réseau permet de résoudre les deux raies dès l'ordre $p = 1$**.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Confusion entre pas du réseau ($a$) et nombre de traits ($N$)** : Le pas $a$ est une dimension spatiale (exprimée en mètres ou micromètres), tandis que $N$ est un nombre sans dimension.
- **Erreur de signe dans la formule des réseaux** : Attention au sens des angles $i$ et $i'$ selon qu'ils sont comptés algébriquement ou non par rapport à la normale orientée. Toujours redémarrer d'un schéma géométrique propre pour valider les signes (+ ou -).