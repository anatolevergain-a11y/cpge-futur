---
title: 'Exercice 2 : Machines thermiques'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude thermodynamique d'une pompe à chaleur géothermique domestique

**Mots-clés :** *Machines thermiques, premier et second principes, cycle de Carnot, irréversibilités, analyse critique.*

---

## 1. Énoncé

Dans le contexte de la transition énergétique, les pompes à chaleur (PAC) géothermiques constituent une alternative intéressante aux chauffages électriques traditionnels. Ce problème se propose d'analyser les performances réelles d'une PAC eau-eau fonctionnant avec un fluide frigorigène (le R134a), en comparant un modèle idéal réversible et un fonctionnement réel incluant des irréversibilités.

On s'intéresse à un local à chauffer (considéré comme une source thermique de température $T_1$ régulée) et à un captage géothermique souterrain (source thermique de température $T_2$ supposée monotherme). 

### Données numériques et constantes :
*   Température extérieure du sol (source froide) : $T_2 = 10\text{ }^\circ\text{C}$
*   Température de consigne du local (source chaude) : $T_1 = 21\text{ }^\circ\text{C}$
*   Puissance thermique nécessaire pour chauffer le local : $P_1 = 10\text{ kW}$
*   Capacité thermique massique à pression constante de l'eau : $c_{\text{eau}} = 4,18\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
*   Fluide frigorigène : R134a

---

## 2. Questions

### Partie A : Étude idéale (Cycle de Carnot)
1. Rappeler la définition du coefficient de performance ($\text{COP}$) d'une pompe à chaleur assurant le chauffage d'un local.
2. Établir l'expression du $\text{COP}$ maximal (dit de Carnot, $\text{COP}_{\text{C}}$) en fonction des températures $T_1$ et $T_2$ exprimées en kelvins. Calculer sa valeur numérique.
3. En déduire la puissance électrique minimale $P_{\text{el,min}}$ théorique qu'il faudrait fournir pour assurer le chauffage du local.

### Partie B : Modèle réel et approche par composant
Dans la réalité, le cycle de conversion de puissance utilise un fluide subissant un cycle fermé (compresseur, condenseur, détendeur, évaporateur). On modélise ici les transferts thermiques globaux.
4. Écrire le premier principe de la thermodynamique appliqué à la PAC sur un cycle, en faisant intervenir $P_1$, $P_2$ (puissance thermique récupérée dans le sol) et $P_{\text{el}}$ (puissance électrique reçue par le compresseur).
5. Le compresseur réel a un rendement isentropique $\eta_c = 0,80$. Exprimer la puissance électrique réelle $P_{\text{el}}$ à fournir en fonction de $P_{\text{el,min}}$ et de $\eta_c$. Calculer la nouvelle valeur de $P_{\text{el}}$.
6. Calculer le $\text{COP}$ réel de l'installation. Comparer avec le $\text{COP}_{\text{C}}$ et commenter.

### Partie C : Analyse critique et impact environnemental
7. Le captage géothermique est assuré par un forage où circule un flux d'eau. Calculer le débit massique minimal d'eau géothermique $\mathcal{D}_m$ nécessaire si l'on s'autorise un refroidissement maximal de cette eau de $\Delta T = 3\text{ K}$ entre l'entrée et la sortie de l'échangeur.
8. **Analyse critique :** Discuter des limites du modèle de Carnot appliqué à cette installation. Quels sont les principaux facteurs d'irréversibilité non pris en compte dans le modèle simple de la partie B ?

---

## 3. Pistes et indications

*   **Q1 & Q2 :** Attention à bien convertir les températures en kelvins. Le $\text{COP}$ est par définition le rapport de l'énergie utile sur l'énergie coûteuse.
*   **Q4 :** Une machine thermique fonctionne de façon cyclique : la variation d'énergie interne sur un cycle est nulle.
*   **Q5 :** Le rendement isentropique compare le travail (ou la puissance) théorique réversible au travail réel pour une même variation de pression. Ici, on l'appliquera directement via les puissances électriques.
*   **Q7 :** Utilisez le premier principe appliqué à l'eau du forage en régime permanent.

---

## 4. Corrigé pas à pas

### Partie A : Étude idéale
1. Le $\text{COP}$ d'une pompe à chaleur est défini par le rapport entre l'énergie thermique transférée à la source chaude (le local) et l'énergie électrique fournie au système (le compresseur) :
   $$\text{COP} = \frac{Q_1}{W_{\text{el}}} = \frac{P_1}{P_{\text{el}}}$$
2. Pour un cycle réversible (Carnot) fonctionnant entre $T_1$ et $T_2$, le second principe de la thermodynamique s'écrit (variation d'entropie nulle sur un cycle) :
   $$\frac{Q_1}{T_1} + \frac{Q_2}{T_2} = 0 \implies \frac{Q_1}{T_1} = -\frac{Q_2}{T_2}$$
   Avec $Q_1 > 0$ et $Q_2 < 0$. Le premier principe donne $Q_1 + Q_2 + W_{\text{el}} = 0 \implies W_{\text{el}} = -Q_1 - Q_2$.
   $$\text{COP}_{\text{C}} = \frac{Q_1}{Q_1 - (-Q_2)} = \frac{Q_1}{Q_1 + Q_2 \frac{T_1}{T_2}} = \frac{1}{1 - \frac{T_2}{T_1}} = \frac{T_1}{T_1 - T_2}$$
   A.N. : $T_1 = 21 + 273,15 = 294,15\text{ K}$ et $T_2 = 10 + 273,15 = 283,15\text{ K}$.
   $$\text{COP}_{\text{C}} = \frac{294,15}{294,15 - 283,15} = \frac{294,15}{11,0} \approx 26,7$$
3. La puissance électrique minimale est :
   $$P_{\text{el,min}} = \frac{P_1}{\text{COP}_{\text{C}}} = \frac{10\times 10^3}{26,7} \approx 375\text{ W}$$

### Partie B : Modèle réel et approche par composant
4. Sur un cycle, $\Delta U_{\cycle} = 0$. Le premier principe donne :
   $$Q_1 + Q_2 + W_{\text{el}} = 0 \implies P_1 + P_2 - P_{\text{el}} = 0 \implies P_{\text{el}} = P_1 - P_2$$
   *(avec $P_1, P_2, P_{\text{el}}$ comptées positivement comme des transferts énergétiques reçus ou utiles).*
5. Le rendement isentropique du compresseur est défini par le rapport de la puissance idéale (isentropique) sur la puissance réelle :
   $$\eta_c = \frac{P_{\text{el,min}}}{P_{\text{el}}} \implies P_{\text{el}} = \frac{P_{\text{el,min}}}{\eta_c}$$
   A.N. : $P_{\text{el}} = \frac{375}{0,80} \approx 469\text{ W}$.
6. Le $\text{COP}$ réel vaut :
   $$\text{COP}_{\text{réel}} = \frac{P_1}{P_{\text{el}}} = \frac{10\times 10^3}{469} \approx 21,3$$
Commentaire: ** Le $\text{COP}$ réel est inférieur au $\text{COP}$ de Carnot, ce qui est physiquement cohérent (les irréversibilités diminuent l'efficacité de la machine). Néanmoins, une valeur supérieure à 20 est ici purement théorique car elle suppose que les échanges thermiques se font de manière quasi-statique (écarts de température nuls entre le fluide et les sources), ce qui nécessiterait des échangeurs de surface infinie.

### Partie C : Analyse critique et impact environnemental
7. La puissance thermique prélevée à la source froide est $P_2 = P_1 - P_{\text{el}} = 10\times 10^3 - 469 = 9531\text{ W}$.
   Cette puissance est fournie par l'eau du forage qui subit une baisse de température $\Delta T = 3\text{ K}$. En régime permanent :
   $$P_2 = \mathcal{D}_m c_{\text{eau}} \Delta T \implies \mathcal{D}_m = \frac{P_2}{c_{\text{eau}} \Delta T}$$
   A.N. : $\mathcal{D}_m = \frac{9531}{4180 \times 3} \approx 0,76\text{ kg}\cdot\text{s}^{-1}$ (soit environ $2,7\text{ m}^3/\text{h}$).
8. **Analyse critique des limites du modèle :**
   * *Écarts de température finis :* Pour que les transferts thermiques aient lieu, le fluide frigorigène doit être plus froid que le sol à l'évaporateur, et plus chaud que le local au condenseur. Les températures efficaces $T'_1$ et $T'_2$ du cycle réel s'écartent donc de $T_1$ and $T_2$, ce qui dégrade drastiquement le $\text{COP}$ (les PAC géothermiques réelles ont plutôt un $\text{COP}$ de l'ordre de 4 à 5, bien loin du $\text{COP}$ de Carnot calculé ici).
   * *Irréversibilités internes :* Les frottements fluides dans les canalisations et les pertes de charge dans le détendeur (qui est un détendeur isenthalpe et non isentropique) créent de l'entropie.
   * *Dimensionnement durable :* Un prélèvement continu de $9,5\text{ kW}$ sur le sol sans régénération thermique adéquate (par rayonnement solaire ou nappe phréatique) peut conduire à un épuisement thermique local du sol à long terme, abaissant $T_2$ et réduisant encore les performances de la PAC.