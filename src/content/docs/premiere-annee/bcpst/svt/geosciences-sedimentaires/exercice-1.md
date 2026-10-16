---
title: 'Exercice 1 : Altération, érosion et transport sédimentaire'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Dynamique de l'altération continentale et flux sédimentaires

**Filière :** BCPST  
**Matière :** Sciences de la Terre et de l'Univers (Géosciences)  
Chapitre: ** Sédimentologie et Géodynamique externe  
**Thème :** Altération, érosion et transport sédimentaire  

---

## 1. Énoncé du problème

On s'intéresse au bilan massique d'un bassin versant granitique soumis à des conditions climatiques tempérées. L'objectif est d'évaluer la cinétique de l'altération chimique des minéraux silicatés (notamment les plagioclases), de quantifier l'exportation des produits dissous et particulaires vers l'océan, et d'analyser les limites des modèles géochimiques utilisés en sédimentologie.

On considère un bassin versant granitique d'une superficie $S = 100 \text{ km}^2$. Le climat se caractérise par une pluviométrie annuelle $P = 1,2 \text{ m/an}$. L'évapotranspiration représente $40\%$ de cette précipitation. 

La roche mère est un granite sain dont la masse volumique moyenne est $\rho_r = 2,7 \times 10^3 \text{ kg/m}^3$. Sa composition modale simplifiée en volume est la suivante :
* Quartz : $35\%$
* K-feldspath (orthose) : $30\%$
* Plagioclase (albite/anorthite) : $30\%$
* Minéraux accessoires (biotite, apatite) : $5\%$

---

## 2. Questions

### Partie A : Bilan hydrologique et altération chimique
1. **(Calcul)** Calculer le volume d'eau annuel $Q_{eau}$ (en $\text{m}^3/\text{an}$) qui s'infiltre et ruisselle sur le bassin versant (débit total sortant du bassin).
2. **(Raisonnement)** L'altération des plagioclases (ex: anorthite $\text{CaAl}_2\text{Si}_2\text{O}_8$) par les eaux météoriques chargées en $\text{CO}_2$ dissous produit de la kaolinite ($\text{Al}_2\text{Si}_2\text{O}_5(\text{OH})_4$) et des ions en solution. Écrire l'équation bilantanée de cette réaction d'altération congruente.
3. **(Application)** Sachant que la concentration en ions calcium $\text{Ca}^{2+}$ mesurée à l'exutoire du bassin est de $1,5 \times 10^{-3} \text{ mol/L}$, calculer le flux massique annuel de calcium exporté en solution (exprimé en tonnes par an). On donne la masse molaire du calcium : $M(\text{Ca}) = 40 \text{ g/mol}$.

### Partie B : Érosion mécanique et transport sédimentaire
4. **(Analyse)** À l'exutoire, la charge suspensive mesurée est de $C_{sus} = 0,25 \text{ g/L}$. Calculer la masse totale de sédiments détritiques solides exportée annuellement ($M_{sed}$, en tonnes/an).
5. **(Synthèse)** En assimilant la densité du granite altéré à celle du granite sain, estimer la vitesse d'érosion globale du bassin versant (somme de l'érosion chimique dissoute et de l'érosion mécanique) en $\text{mm/an}$ ou $\text{m/Ma}$.

### Partie C : Analyse critique et limites du modèle
6. **(Esprit critique)** Le calcul précédent repose sur l'hypothèse d'un état stationnaire (*steady state*). Discuter cette hypothèse. Quelles sont les limites de l'assimilation du bilan mesuré à l'exutoire à une "vraie" vitesse d'érosion à l'échelle des temps géologiques ?

---

## 3. Pistes et méthodologie

* **Partie A :** Pensez à soustraire l'évapotranspiration des précipitations totales pour obtenir le débit net. Pour l'équation chimique, veillez à équilibrer les charges et les atomes (notamment $\text{Al}$, $\text{Si}$, $\text{Ca}$ et $\text{H}^+$).
* **Partie B :** Le flux solide se calcule en multipliant la concentration par le volume d'eau annuel écoulé. Pour la vitesse d'érosion, convertissez la perte de masse totale par an en un volume de roche mère par unité de surface.
* **Partie C :** Considérez le stockage temporaire des sédiments dans les zones de plaines alluviales (*floodplains*) et l'impact de la tectonique ou des variations climatiques récentes (facteurs anthropiques ou cycles glaciaires/interglaciaires).

---

## 4. Corrigé pas à pas

### Partie A : Bilan hydrologique et altération chimique
1. **Volume d'eau annuel sortant :**
   La précipitation efficace (partie non évapotranspirée) est de $100\% - 40\% = 60\%$.
   $P_{\text{eff}} = 1,2 \times 0,6 = 0,72 \text{ m/an}$.
   La surface du bassin est $S = 100 \text{ km}^2 = 100 \times 10^6 \text{ m}^2 = 10^8 \text{ m}^2$.
   $Q_{\text{eau}} = S \times P_{\text{eff}} = 10^8 \text{ m}^2 \times 0,72 \text{ m/an} = 7,2 \times 10^7 \text{ m}^3/\text{an}$.

2. **Équation d'altération de l'anorthite :**
   $$\text{CaAl}_2\text{Si}_2\text{O}_8 + 2\text{CO}_2 + 3\text{H}_2\text{O} \rightarrow \text{Al}_2\text{Si}_2\text{O}_5(\text{OH})_4 + \text{Ca}^{2+} + 2\text{HCO}_3^-$$

3. **Flux massique de $\text{Ca}^{2+}$ dissous :**
   Le volume d'eau est de $7,2 \times 10^7 \text{ m}^3/\text{an} = 7,2 \times 10^{10} \text{ L}/\text{an}$.
   Nombre de moles de $\text{Ca}^{2+}$ exportées :
   $$n(\text{Ca}^{2+}) = 1,5 \times 10^{-3} \text{ mol/L} \times 7,2 \times 10^{10} \text{ L}/\text{an} = 1,08 \times 10^8 \text{ mol/an}$$
   Masse correspondante :
   $$m(\text{Ca}) = n \times M(\text{Ca}) = 1,08 \times 10^8 \times 40 \text{ g/an} = 4,32 \times 10^9 \text{ g/an} = 4320 \text{ tonnes/an}$$

---

### Partie B : Érosion mécanique et transport sédimentaire
4. **Masse des sédiments détritiques ($M_{sed}$) :**
   $$M_{sed} = C_{sus} \times Q_{eau} = 0,25 \text{ g/L} \times 7,2 \times 10^{10} \text{ L}/\text{an} = 1,8 \times 10^{10} \text{ g/an} = 18\,000 \text{ tonnes/an}$$

5. **Vitesse d'érosion globale :**
   Il faut convertir la masse totale exportée (chimique + mécanique) en volume de roche par unité de surface et par an.
   * *Note :* Pour être rigoureux, il faudrait estimer la masse totale de roche dissoute (en rajoutant les anions et autres cations aux $\text{Ca}^{2+}$), mais l'énoncé ou une approximation classique permet d'estimer l'ordre de grandeur. Si l'on somme grossièrement les flux solides ($18\,000 \text{ t}$) et dissous (plusieurs milliers de tonnes), la perte de masse totale est de l'ordre de $2,5 \times 10^{10} \text{ g/an}$ ($25\,000 \text{ tonnes/an}$).
   * Volume de roche érodé par an :
     $$V_{\text{roche}} = \frac{M_{\text{totale}}}{\rho_r} = \frac{2,5 \times 10^{7} \text{ kg/an}}{2,7 \times 10^3 \text{ kg/m}^3} \approx 9259 \text{ m}^3/\text{an}$$
   * Vitesse d'érosion (dénudation) $E$ sur la surface $S$ :
     $$E = \frac{V_{\text{roche}}}{S} = \frac{9259 \text{ m}^3/\text{an}}{10^8 \text{ m}^2} = 9,26 \times 10^{-5} \text{ m/an} = 0,093 \text{ mm/an} \text{ (soit } 93 \text{ m/Ma)}$$
   * Cet ordre de grandeur ($\sim 0,1 \text{ mm/an}$) est tout à fait réaliste pour un bassin versant granitique sous climat tempéré.

---

### Partie C : Analyse critique et limites du modèle
6. **Discussion critique :**
   * **Hypothèse du *steady state* (état stationnaire) :** Le calcul suppose que la quantité de matière érodée en surface équivaut exactement à ce qui sort à l'exutoire. Or, une partie des produits d'altération mécanique peut être stockée temporairement dans le bassin (colluvions, zones de stockage alluvial dans les vallées). Le flux mesuré à l'exutoire peut donc sous-estimer ou sur-estimer l'érosion réelle de versant selon les phases de transit sédimentaire.
   * **Origine des solutés :** Le calcul attribue tout le $\text{Ca}^{2+}$ au plagioclase du granite. Cependant, des apports atmosphériques (précipitations, poussières éoliennes) ou la présence de minéraux accessoires (comme l'apatite ou la calcite en traces) peuvent biaiser l'estimation de l'altération des silicates.
   * **Biais anthropiques :** Les mesures actuelles sont souvent perturbées par les activités humaines (agriculture, déforestation, barrages qui piègent les sédiments), ce qui éloigne le bassin des conditions géologiques naturelles à long terme.