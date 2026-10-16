---
title: 'Exercice 1 : Tectonique des plaques'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Cinématique globale et thermique de la lithosphère océanique

**Matière :** Sciences de la Vie et de la Terre (SVT)  
**Filière :** BCPST  
Chapitre: ** Géodynamique interne  
**Thème :** Tectonique des plaques et flux thermique  

---

## 1. Énoncé

Le modèle de la tectonique des plaques rigides se superpose à une dynamique thermique interne de la Terre. L'objectif de ce problème est d'analyser la cinématique d'une zone de subduction à partir de données géodésiques et d'étudier le comportement thermique de la lithosphère océanique en expansion, tout en discutant des limites physiques des modèles simplificateurs.

---

## 2. Questions

### Partie A : Cinématique et bilan aux limites d'une zone de subduction
1. Définir la notion de plaque lithosphérique et préciser sa différence rhéologique avec l'asthénosphère sous-jacente.
2. Soit une fosse océanique où la plaque plongeante submerge avec une vitesse de convergence absolue $V_{\text{conv}} = 7,5\text{ cm}\cdot\text{an}^{-1}$ mesurée par rapport au manteau fixe. La plaque chevauchante avance vers la fosse à la vitesse $V_{\text{chov}} = 2,5\text{ cm}\cdot\text{an}^{-1}$ dans le même référentiel. Exprimer et calculer la vitesse de subduction $V_{\text{sub}}$ (vitesse de la plaque plongeante par rapport à la plaque chevauchante).
3. En déduire le taux de consommation de surface lithosphérique sachant que la longueur de la fosse considérée est $L = 2500\text{ km}$ (exprimer le résultat en $\text{km}^2\cdot\text{an}^{-1}$).

### Partie B : Thermique de la lithosphère océanique et flux géothermique
La lithosphère océanique s'éloigne de la dorsale à la vitesse d'expansion $v$. Son refroidissement par conduction peut être approché par un modèle semi-infini unidimensionnel (modèle de cooling half-space). 
Le flux thermique de surface $q(x)$ à une distance $x$ de la dorsale est donné par la relation :
$$q(x) = \frac{k \cdot T_m}{\sqrt{\pi \cdot \kappa \cdot t}}$$
où :
- $k = 3,1\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$ est la conductivité thermique des roches mantelliques ;
- $T_m = 1300\text{ }\circ\text{C}$ (ou $1300\text{ K}$ pour les variations d'écart) est la température isotherme sous la lithosphère ;
- $\kappa = 8 \cdot 10^{-7}\text{ m}^2\cdot\text{s}^{-1}$ est la diffusivité thermique ;
- $t$ est l'âge de la lithosphère ($t = \frac{x}{v}$).

4. Calculer le flux thermique de surface pour un âge $t_1 = 4\text{ Ma}$ et $t_2 = 36\text{ Ma}$, sachant que $1\text{ an} \approx 3,15 \times 10^7\text{ s}$.
5. Analyser l'évolution du flux thermique en fonction de l'âge. Quel est l'impact physique majeur de ce refroidissement sur la densité de la plaque lithosphérique ?
6. **Esprit Concours (Analyse critique) :** Le modèle de demi-espace conducteur prédit que la bathymétrie $h(t)$ varie proportionnellement à $\sqrt{t}$. Or, les observations bathymétriques globales montrent qu'au-delà de $70-80\text{ Ma}$, la profondeur des océans tend vers une valeur limite constante ($\approx 6000\text{ m}$). Expliquer qualitativement cette discordance et proposer un réajustement du modèle.

---

## 3. Pistes et méthodologie

- **Partie A :** Bien identifier les référentiels (manteau vs plaque chevauchante). La vitesse relative est une simple addition ou soustraction vectorielle selon les directions géographiques.
- **Partie B :** Attention rigoureuse aux unités du Système International (SI). Convertir systématiquement les millions d'années ($\text{Ma}$) en secondes ($\text{s}$) avant d'appliquer la formule.
- **Analyse critique :** Penser aux apports de chaleur par la base de la plaque (courants対流 asthénosphériques, points chauds, ou réchauffement thermique isobare/isotherme) qui empêchent un refroidissement infini.

---

## 4. Corrigé pas à pas

### Partie A : Cinématique et bilan
1. **Définition :** La lithosphère est une enveloppe rigide (comportement élastique ou fragilo-élastique à court/moyen terme) englobant la croûte et le manteau lithosphérique supérieur. Elle repose sur l'asthénosphère, qui possède un comportement ductiles/visqueux (rhéologie non-newtonienne à l'état quasi-solide).
2. **Calcul de la vitesse de subduction :** 
   Dans le référentiel du manteau, la vitesse relative est la différence vectorielle des mouvements. Si les vecteurs sont de sens opposés (convergence frontale) :
   $$V_{\text{sub}} = V_{\text{conv}} - (-V_{\text{chov}}) = 7,5 + 2,5 = 10\text{ cm}\cdot\text{an}^{-1}$$
3. **Taux de consommation :**
   $$\text{Taux} = V_{\text{sub}} \times L = 10\text{ cm}\cdot\text{an}^{-1} \times 2500\text{ km}$$
   Conversion : $10\text{ cm} = 10^{-4}\text{ km}$.
   $$\text{Taux} = 10^{-4} \times 2500 = 0,25\text{ km}\cdot\text{an}^{-1} \times 2500\text{ km} = 625\text{ km}^2\cdot\text{an}^{-1}$$

### Partie B : Thermique de la lithosphère
4. **Calculs du flux thermique :**
   Convertissons $t_1 = 4\text{ Ma}$ en secondes :
   $$t_1 = 4 \times 10^6 \times 3,15 \times 10^7\text{ s} = 1,26 \times 10^{14}\text{ s}$$
   Appplication numérique pour $q(t_1)$ :
   $$q(t_1) = \frac{3,1 \times 1300}{\sqrt{\pi \times 8 \cdot 10^{-7} \times 1,26 \times 10^{14}}}$$
   $$q(t_1) = \frac{4030}{\sqrt{3,1416 \times 1,008 \times 10^8}} = \frac{4030}{\sqrt{3,167 \times 10^8}} = \frac{4030}{17796} \approx 0,226\text{ W}\cdot\text{m}^{-2} \quad (\text{soit } 226\text{ mW}\cdot\text{m}^{-2})$$
   Pour $t_2 = 36\text{ Ma}$ ($t_2 = 9 \times t_1$), le temps est multiplié par 9, donc la racine carrée du temps par 3. Le flux est donc divisé par 3 :
   $$q(t_2) = \frac{0,226}{3} \approx 0,075\text{ W}\cdot\text{m}^{-2} \quad (\text{soit } 75\text{ mW}\cdot\text{m}^{-2})$$

5. **Évolution et densité :** Le flux thermique décroît en $1/\sqrt{t}$. Ce refroidissement par conduction entraîne une contraction thermique des roches mantelliques, ce qui induit une **augmentation de la densité** de la lithosphère océanique au cours du temps (devenue plus dense que l'asthénosphère sous-jacente après $\approx 20-30\text{ Ma}$), condition sine qua non de sa plongée en subduction par instabilité gravitationnelle.

6. **Esprit Concours - Limites du modèle :**
   * *Discordance :* Le modèle du demi-espace conducteur surestime la perte de chaleur (et donc l'affaissement bathymétrique) aux grands âges car il suppose un refroidissement infini sans apport thermique basal.
   * *Réajustement :* On utilise plutôt le **modèle de plaque thermique** (plate model), qui introduit une isotherme basal constante (température du manteau asthénosphérique maintenue à une profondeur fixe $L \approx 100\text{ km}$ par apports convectifs). Cela stoppe l'appauvrissement thermique exponentiel et explique l'asymptote bathymétrique observée.