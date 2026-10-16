---
title: 'Exercice 1 : Méristèmes et croissance racinaire'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse quantitative et expérimentale de la cinétique de croissance racinaire chez *Arabidopsis thaliana*

---

## Énoncé

Chez les végétaux angiospermes, l'allongement de la racine principale résulte de l'activité combinée de la division cellulaire au sein du méristème apical racinaire (MAR) et de l'élongation cellulaire dans la zone d'allongement sous-jacente. Afin de comprendre les contributions respectives de ces deux processus, on étudie la cinétique de croissance de racines primaires d'*Arabidopsis thaliana* cultivées in vitro.

Le sujet propose d'analyser des données de marquage cellulaire et de cinétique macroscopique afin de modéliser la croissance racinaire et d'en évaluer les limites métaboliques et biophysiques.

---

## Questions

### Partie I : Analyse macroscopique et cinématique de la croissance
1. On mesure la longueur $L(t)$ de racines primaires à différents temps $t$ à partir de la germination ($t = 0$). Entre $t = 24\,\text{h}$ et $t = 72\,\text{h}$, la longueur passe de $L_1 = 1,5\,\text{mm}$ à $L_2 = 7,5\,\text{mm}$.
   Calculer la vitesse moyenne d'élongation $V_{\text{moy}}$ en $\text{mm}\cdot\text{j}^{-1}$ puis en $\mu\text{m}\cdot\text{h}^{-1}$.
2. En marquant les racines avec un fluorophore, on observe que seules les cellules situées dans les premiers $1,0\,\text{mm}$ de l'apex racinaire s'allongent, la zone mature située au-dessus ne s'allonge plus. 
   Sachant que la vitesse d'élongation cellulaire varie le long de l'axe (coordonnée $x$ mesurée depuis l'apex), on définit le taux relatif d'élongation (TRE) par la relation :
   $$\text{TRE}(x) = \frac{1}{v(x)} \frac{\mathrm{d}v(x)}{\mathrm{d}x}$$
   où $v(x)$ est la vitesse de déplacement des cellules. 
   Expliquer qualitativement l'allure du profil de vitesse $v(x)$ le long de la zone d'élongation, de $x = 0$ (apex) à $x = L_{\text{zone}}$ ($1,0\,\text{mm}$).

### Partie II : Contribution du méristème (Prolifération vs Élongation)
3. Au sein du méristème apical, le temps de cycle cellulaire $T_c$ des cellules initiales est estimé à $18\,\text{h}$ dans des conditions optimales à $22\,^{\circ}\text{C}$. 
   Si le méristème comporte un pool constant de $N_0 = 1000$ cellules divisantes, exprimer le nombre de nouvelles cellules produites par heure, noté $D_c$.
4. Chaque cellule issue du méristème subit une phase d'élongation où son volume passe de $V_0 = 1000\,\mu\text{m}^3$ à $V_f = 20\,000\,\mu\text{m}^3$ avant de se différencier. 
   En assimilant la racine à un cylindre de section constante $S = 0,01\,\text{mm}^2$, calculer la vitesse de croissance macroscopique théorique $V_{\text{th}}$ prédite par ce modèle cellulaire pur. Comparer avec la valeur trouvée à la question 1 et discuter des limites de ce modèle simple.

### Partie III : Analyse critique et limites du modèle
5. Lors d'un stress hydrique (potentiel osmotique du milieu abaissé par addition de mannitol), on observe une baisse de la vitesse d'élongation racinaire, alors que la division cellulaire dans le MAR ne s'arrête pas immédiatement. 
   Expliquer les mécanismes biophysiques (loi de Lockhart) permettant de rendre compte de ce découplage temporaire entre division et élongation, et discuter la pertinence biologique de ce maintien de la division sous stress modéré.

---

## Pistes de réflexion

- **Pour la Q1 :** Attention aux conversions d'unités ($1\,\text{j} = 24\,\text{h}$).
- **Pour la Q2 :** Penser à la notion de flux cellulaire et à l'intégration spatiale de la vitesse d'agrandissement cellulaire.
- **Pour la Q3 :** Modéliser la prolifération par une cinétique exponentielle ou une production continue tenant compte du temps de cycle.
- **Pour la Q4 :** Établir une relation de conservation du volume cellulaire par unité de temps (débit volumique).
- **Pour la Q5 :** Mobiliser les notions de pression de turgescence, de plasticité de la paroi pectocellulosique (expansines) et de potentiel hydrique $\Psi$.

---

## Corrigé pas à pas

### Partie I : Analyse macroscopique et cinématique
1. **Calcul de la vitesse moyenne :**
   $$\Delta t = 72\,\text{h} - 24\,\text{h} = 48\,\text{h} = 2\,\text{jours}$$
   $$\Delta L = L_2 - L_1 = 7,5\,\text{mm} - 1,5\,\text{mm} = 6,0\,\text{mm}$$
   $$V_{\text{moy}} = \frac{6,0\,\text{mm}}{2\,\text{j}} = 3,0\,\text{mm}\cdot\text{j}^{-1}$$
   En conversion :
   $$V_{\text{moy}} = \frac{3,0 \times 1000\,\mu\text{m}}{24\,\text{h}} = \frac{3000}{24} = 125\,\mu\text{m}\cdot\text{h}^{-1}$$

2. **Profil de vitesse $v(x)$ :**
   À l'apex ($x = 0$, centre du centre quiescent et méristème immédiat), les cellules se divisent mais ne s'allongent pas encore : $v(0) \approx 0$. 
   Au fur et à mesure que l'on s'éloigne de l'apex dans la zone d'allongement ($0 < x < 1,0\,\text{mm}$), les cellules vacuolisent et s'allongent fortement. La vitesse de déplacement des cellules augmente donc progressivement pour atteindre une valeur maximale (ou palier) à la fin de la zone d'élongation ($x = 1,0\,\text{mm}$). Le profil $v(x)$ est donc sigmoïde ou croissant de $0$ à $1,0\,\text{mm}$, puis devient constant dans la zone différenciée.

### Partie II : Contribution du méristème
3. **Taux de production cellulaire $D_c$ :**
   Si le temps de cycle est $T_c = 18\,\text{h}$, chaque cellule se divise toutes les $18\,\text{h}$. Avec $N_0 = 1000$ cellules en division synchrone (ou en régime stationnaire avec un flux continu), le nombre de divisions par heure est donné par :
   $$D_c = \frac{N_0}{T_c} = \frac{1000}{18} \approx 55,6\,\text{cellules}\cdot\text{h}^{-1}$$
   *(Note rigoureuse : si l'on considère une croissance exponentielle $N(t) = N_0 2^{t/T_c}$, le taux instantané de production est $\frac{\mathrm{d}N}{\mathrm{d}t} = N_0 \frac{\ln(2)}{T_c} \approx 1000 \times \frac{0,693}{18} \approx 38,5\,\text{cellules}\cdot\text{h}^{-1}$. En régime stationnaire méristématique, le modèle linéaire ou flux constant est souvent retenu en première approximation pour relier flux de sortie et division).* Retenons l'ordre de grandeur de $\approx 40$ à $56\,\text{cellules}\cdot\text{h}^{-1}$.

4. **Vitesse théorique de croissance et limites :**
   Chaque cellule augmente son volume d'un facteur $\frac{V_f}{V_0} = \frac{20\,000}{1000} = 20$.
   Le débit volumique de matière produite par élongation doit égaler le volume de tissu ajouté par unité de temps. 
   Si le méristème produit $\approx 50\,\text{cellules}\cdot\text{h}^{-1}$, et que chaque cellule gagne un volume $\Delta V = V_f - V_0 = 19\,000\,\mu\text{m}^3$, le volume total ajouté par heure est :
   $$\frac{\mathrm{d}\mathcal{V}}{\mathrm{d}t} = 50 \times 19\,000 = 950\,000\,\mu\text{m}^3\cdot\text{h}^{-1} = 0,95\,\text{mm}^3\cdot\text{h}^{-1}$$
   La racine ayant une section $S = 0,01\,\text{mm}^2$, la vitesse d'allongement $V_{\text{th}}$ est :
   $$V_{\text{th}} = \frac{1}{S} \frac{\mathrm{d}\mathcal{V}}{\mathrm{d}t} = \frac{0,95\,\text{mm}^3\cdot\text{h}^{-1}}{0,01\,\text{mm}^2} = 95\,\mu\text{m}\cdot\text{h}^{-1}$$
   Cette valeur est du même ordre de grandeur que la valeur mesurée ($125\,\mu\text{m}\cdot\text{h}^{-1}$), ce qui valide la cohérence du modèle couplant mitoses et expansion.
   *Limites du modèle :* Hypothèse de constance de la section fausse (amincissement ou renflement possible), géométrie cylindrique idéalisée, et variabilité du temps de cycle selon les files cellulaires (épiderme vs cortex).

### Partie III : Analyse critique et limites du modèle
5. **Effet du stress hydrique et loi de Lockhart :**
   L'élongation cellulaire est régie par la rhéologie de la paroi cellulosique, décrite par l'équation de Lockhart :
   $$GR = \frac{1}{L}\frac{\mathrm{d}L}{\mathrm{dt}} = m (\Psi_p - \Psi_y)$$
   où $m$ est la extensibilité pariétale, $\Psi_p$ la pression de turgescence et $\Psi_y$ le seuil de plasticité.
   Sous stress hydrique, le potentiel osmotique externe chute, provoquant une baisse du potentiel hydrique $\Psi$ de la racine, ce qui réduit immédiatement la pression de turgescence $\Psi_p$. Si $\Psi_p$ descend sous le seuil $\Psi_y$, l'élongation s'arrête net. 
   En revanche, la machinerie cellulaire de réplication (ADN polymérases, cyclines) dans le MAR possède une inertie plus grande ou requiert des seuils de turgescence moindres pour fonctionner, d'où un découplage temporaire : les cellules continuent de se diviser mais s'accumulent dans un espace restreint, entraînant une diminution de la taille finale des cellules ($V_f$) et une compaction du méristème. 
   *Pertinence biologique :* C'est une stratégie adaptative (maintien de la prospection méristématique tout en limitant la surface transpirante/exposée au déficit hydrique).