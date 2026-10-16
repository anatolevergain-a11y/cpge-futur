---
title: 'Exercice 2 : Dynamique des fluides parfaits et équation de Bernoulli'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude biomécanique de la circulation sanguine et régulation de la pression artérielle

*Mots-clés : Fluide parfait, théorème de Bernoulli, équation de continuité, sténose artérielle, anévrisme.*

---

## 1. Énoncé et problématique biologique

En physiologie cardiovasculaire, la compréhension des écoulements sanguins est primordiale pour diagnostiquer certaines pathologies comme les sténoses (rétrécissements artériels) ou les anévrismes (dilatations locales de la paroi artérielle). 

On s'intéresse à un vaisseau sanguin principal (artère) modélisé comme un conduit cylindrique horizontal de section $S_1$. Le sang est assimilé à un **fluide parfait** (viscosité négligée en première approximation locale, bien que cela constitue une approximation forte en biologie), incompressible, de masse volumique $\rho = 1,06 \times 10^3 \, \text{kg}\cdot\text{m}^{-3}$. 

L'artère présente localement une malformation : soit un rétrécissement (sténose) ramenant la section à $S_2 = S_1 / 3$, soit une dilatation (anévrisme) portant la section à $S_3 = 2 S_1$. L'écoulement est supposé stationnaire, irrotationnel et permanent.

Le candidat est amené à analyser l'évolution de la vitesse et de la pression le long de l'axe de l'artère, et à discuter des limites du modèle du fluide parfait face à la réalité biologique.

---

## 2. Questions

### Partie A : Étude d'un écoulement stationnaire dans une artère saine
1. Rappeler la définition mathématique traduisant le caractère incompressible du fluide. En déduire l'équation de conservation du débit volumique (équation de continuité) entre deux sections $A$ et $B$ d'un canal de circulation.
2. Énoncer le théorème de Bernoulli le long d'une ligne de courant pour un fluide parfait, incompressible et en régime permanent. Préciser les hypothèses thermodynamiques et mécaniques sous-jacentes.

### Partie B : Application à une sténose artérielle
Une sténose est un rétrécissement de la section du vaisseau, passant de $S_1$ à $S_2 = S_1 / 3$. On note $v_1$ la vitesse moyenne du sang dans la zone saine et $P_1$ la pression artérielle associée.
3. Exprimer la vitesse $v_2$ dans la zone sténotique en fonction de $v_1$. Calculer le rapport numérique.
4. En appliquant le théorème de Bernoulli entre la zone 1 (saine) et la zone 2 (sténose) situées à la même altitude, exprimer la différence de pression $\Delta P = P_2 - P_1$ en fonction de $\rho$ et $v_1$.
5. A-t-on $P_2 < P_1$ ou $P_2 > P_1$ ? Quel danger mécanique cela représente-t-il pour la paroi artérielle au niveau de la sténose (phénomène d'écrasement ou de rupture) ?

### Partie C : Analyse critique et limites du modèle
6. Le sang est un fluide réel contenant des éléments figurés (hématies, leucocytes) et dont la viscosité n'est pas nulle ($\eta \neq 0$). Citer un nombre sans dimension caractéristique de la mécanique des fluides permettant de comparer les forces d'inertie et les forces visqueuses.
7. Discuter qualitativement l'impact de la prise en compte de la viscosité (fluide réel) sur le profil de vitesse et sur la perte de charge le long du vaisseau. Le modèle du fluide parfait surestime-t-il ou sous-estime-t-il la pression en aval d'une sténose ?

---

## 3. Pistes et indications

*   **Q1 & Q3 :** Pensez au fait que le volume de sang traversant une section par unité de temps (débit $D_v$) est constant.
*   **Q2 & Q4 :** Écrivez la conservation de l'énergie mécanique par unité de volume le long d'une ligne de courant. Attention à bien vérifier l'horizontalité (pas de terme d'altitude $\rho g z$).
*   **Q5 :** Utilisez le résultat de Q4 et signalez le signe du terme cinétique $\frac{1}{2}\rho(v_2^2 - v_1^2)$.
*   **Q6 & Q7 :** Pensez au nombre de Reynolds $\text{Re}$. Dans un fluide réel, des forces de frottement dissipent l'énergie mécanique en chaleur, ce qui génère une chute de pression indépendante du théorème de Bernoulli simple.

---

## 4. Corrigé détaillé pas à pas

### Partie A : Étude d'un écoulement stationnaire
1. **Incompressibilité et équation de continuité :**
   Puisque le fluide est incompressible, sa masse volumique $\rho$ est constante ($\rho = \text{cte}$). La conservation de la masse se traduit par un débit massique constant, ce qui implique pour le débit volumique $D_v$ à travers deux sections $S_A$ et $S_B$ :
   $$v_A S_A = v_B S_B = D_v = \text{cte}$$

2. **Théorème de Bernoulli :**
   Le long d'une ligne de courant, pour un fluide parfait ($\text{viscosité } \eta = 0$), incompressible ($\rho = \text{cte}$), en écoulement stationnaire et soumis à des forces conservatives (poids), on a :
   $$P + \frac{1}{2}\rho v^2 + \rho gz = \text{cte}$$
   *Hypothèses :* Absence de frottement interne (fluide parfait), température homogène (pas d'effets thermiques majeurs couplés ici), et régime stationnaire (les champs de vitesse et de pression ne dépendent pas explicitement du temps).

---

### Partie B : Application à une sténose artérielle
3. **Calcul de la vitesse dans la sténose :**
   D'après l'équation de continuité : $S_1 v_1 = S_2 v_2$.
   Comme $S_2 = \frac{S_1}{3}$, on obtient :
   $$S_1 v_1 = \frac{S_1}{3} v_2 \implies v_2 = 3 v_1$$
   *La vitesse du sang est triplée dans la zone rétrécie.*

4. **Différence de pression :**
   Les deux zones étant à la même altitude ($z_1 = z_2$), l'équation de Bernoulli s'écrit :
   $$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$
   En remplaçant $v_2$ par $3v_1$ :
   $$P_2 - P_1 = \frac{1}{2}\rho v_1^2 - \frac{1}{2}\rho (3v_1)^2 = \frac{1}{2}\rho v_1^2 (1 - 9) = -4\rho v_1^2$$
   La variation de pression est $\Delta P = -4\rho v_1^2$.

5. **Analyse de la pression :**
   Puisque $\Delta P < 0$, on a $P_2 < P_1$. **La pression chute dans la sténose** alors que la vitesse augmente. 
   *Conséquence biomécanique :* Cette baisse de pression locale (effet Venturi) exerce une force de succion sur la paroi artérielle. Si la paroi est affaiblie par une plaque d'athérome, cela peut provoquer un collapsus (fermeture) de l'artère, interrompant brutalement l'irrigation sanguine en aval (ischémie, pouvant mener à un infarctus ou un AVC).

---

### Partie C : Analyse critique et limites du modèle
6. **Nombre sans dimension :**
   Le nombre pertinent est le **nombre de Reynolds $\text{Re}$**, défini par :
   $$\text{Re} = \frac{\rho v D}{\eta}$$
   où $D$ est le diamètre du vaisseau et $\eta$ la viscosité dynamique du sang. Il quantifie le rapport entre les forces d'inertie et les forces visqueuses.

7. **Limites du modèle et fluide réel :**
   *   Dans un fluide réel ($\eta \neq 0$), il existe des forces de frottement visqueux au niveau de la paroi (profil de vitesse parabolique de type Poiseuille dans les petits vaisseaux, au lieu du profil plat du fluide parfait).
   *   Ces frottements entraînent une **dissipation d'énergie mécanique en chaleur** (pertes de charge régulières et singulières). 
   *   Par conséquent, le théorème de Bernoulli (qui conserve l'énergie mécanique) surestime la pression en aval de la sténose. Dans la réalité, la pression ne récupère pas intégralement sa valeur initiale $P_1$ après le rétrécissement en raison des pertes par viscosité et des décollements de la couche limite (turbulences post-sténotiques).