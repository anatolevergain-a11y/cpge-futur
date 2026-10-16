---
title: "❓ Questions progressives"
description: "Fiche de cours et d'exercice CPGE."
---

### ❓ Questions progressives

#### Partie A : Thermodynamique des équilibres liquide-vapeur et azéotropie
On considère un mélange binaire constitué de l'espèce $1$ (composé volatil) et de l'espèce $2$ (composé lourd), dont les fractions molaires respectives en phase liquide sont notées $x_1$ et $x_2$ (avec $x_1 + x_2 = 1$), et en phase vapeur $y_1$ et $y_2$ ($y_1 + y_2 = 1$). Le système est sous une pression totale constante $P^{\circ} = 1\text{ bar}$.

1. Rappeler la définition de la variance $V$ du système par la règle des phases de Gibbs. Calculer $V$ pour ce binaire diphasé. Interpréter.
2. On trace le diagramme $T = f(x_1, y_1)$ à $P^{\circ}$ fixé. Le mélange présente un azéotrope à une température $T_{\text{az}}$ et pour une composition $x_1 = x_{\text{az}} = 0,60$. 
   * Définir le comportement d'un mélange azéotropique vis-à-vis de la distillation.
   * Pourquoi est-il impossible d'obtenir de l'éthanol pur à $100\%$ par simple distillation fractionnée d'un mélange eau-éthanol à pression atmosphérique ?
3. On insère dans une colonne de distillation fractionnée un mélange initial de composition globale $z_1 = 0,30$ (avec $z_1 < x_{\text{az}}$). 
   * Décrire qualitativement le devenir de la composition du distillat (récupéré en tête de colonne) au cours d'une distillation fractionnée idéale.
   * Même question pour un mélange initial de composition $z_1 = 0,80$.

#### Partie B : Étude d'un diagramme binaire solide-liquide (Eutectique)
On s'intéresse à l'équilibre solide-liquide du système binaire (A, B) à pression constante $P^{\circ}$. Le diagramme d'équilibre thermique $T = f(x_{\text{B}})$ (où $x_{\text{B}}$ est la fraction molaire du constituant B) présente les caractéristiques suivantes :
* Température de fusion du corps pur A : $T_{\text{fus}}^{*}(\text{A}) = 80\text{ °C}$.
* Température de fusion du corps pur B : $T_{\text{fus}}^{*}(\text{B}) = 120\text{ °C}$.
* Le système présente un eutectique E de composition $x_{\text{B, E}} = 0,40$ et de température $T_{\text{E}} = 50\text{ °C}$.
Les courbes de liquidus se coupent en E. Les corps purs A et B sont supposés totalement immiscibles à l'état solide.

4. Déterminer la variance du système dans les domaines suivants :
   * Zone diphasée (Liquide + Solide A pur).
   * Sur le palier eutectique (Trois phases : Liquide de composition E, Solide A pur, Solide B pur).
5. On considère un mélange initial de composition globale $x_{\text{B}} = 0,70$ que l'on refroidit lentement depuis $130\text{ °C}$ jusqu'à $40\text{ °C}$.
   * Décrire les différentes étapes du refroidissement (changements d'état, apparitions/disparitions de phases).
   * À la température $T = 65\text{ °C}$, déterminer graphiquement (par le théorème des moments chimiques) les proportions massiques (ou molaires) de phase liquide et de solide en présence. Les masses molaires des deux corps sont voisines : $M_{\text{A}} \approx M_{\text{B}}$.
---

### 💡 Pistes & Indications méthodologiques

* **Partie A :** Bien veiller à appliquer $V = C - F + \Pi$ (attention au nombre de constituants $C$ et aux contraintes de pression/température). Pour l'azéotrope, se rappeler que la composition de la phase vapeur est rigoureusement identique à celle de la phase liquide ($y_1 = x_1$). Cela bloque l'enrichissement en tête de colonne.
* **Partie B :** Dans un diagramme binaire solide-liquide à eutectique, les solides formés le long des branches de liquidus sont les corps purs (si pas de solution solide ni de composé défini). Le palier horizontal à $T_{\text{E}}$ correspond à un invariant thermique (analogue à un changement d'état pur tant qu'il reste du liquide). Utilisez le théorème des moments chimiques (analogie du levier) en assimilant les fractions molaires aux abscisses dans le diagramme.

---

### 📋 Corrigé détaillé pas à pas

#### Partie A : Thermodynamique des équilibres liquide-vapeur et azéotropie

1. **Règle des phases de Gibbs :**
   La variance $V$ s'exprime par la relation :
   $$V = C - \phi + \psi$$
   où $C$ est le nombre de constituants indépendants ($C = 2$ : espèces $1$ et $2$), $\phi$ le nombre de phases en présence ($\phi = 2$ : liquide et vapeur), et $\psi$ le nombre de paramètres intensifs physiques extérieurs fixés ($\psi = 1$ car la pression $P^{\circ}$ est fixée).
   $$V = 2 - 2 + 1 = 1$$
   **Interprétation :** Le système est univariant. Si l'on fixe une variable intensive (par exemple la température $T$ ou la fraction molaire $x_1$), toutes les autres grandeurs intensives (composition du liquide $x_1$, composition de la vapeur $y_1$) sont univoquement déterminées par les courbes d'équilibre (lignes de bulle et de rosée).

2. **Comportement azéotropique :**
   * Un azéotrope est un mélange liquide-vapeur dont la composition de la phase liquide est strictement égale à celle de la phase vapeur ($x_1 = y_1$). Le système bout à température constante en gardant une composition constante, se comportant ainsi momentanément comme un corps pur.
   * **Distillation de l'eau et de l'éthanol :** Le mélange eau-éthanol présente un azéotrope à pression atmosphérique pour $x_{\text{éthanol}} \approx 0,96$ (en fraction molaire) à $78,1\text{ °C}$. Au cours de la distillation fractionnée, le distillat s'enrichit en constituant le plus volatil (l'éthanol), mais sa composition tend irrémédiablement vers celle de l'azéotrope. Il est donc impossible de franchir cette barrière par simple distillation classique : on obtient au mieux de l'éthanol à $96\%$ en masse (éthanol à 96 degrés).

3. **Distillation fractionnée selon le mélange initial :**
   * **Cas $z_1 = 0,30$ ($z_1 < x_{\text{az}}$) :** Le composé $1$ est le plus volatil. Le distillat récupéré en tête de colonne s'enrichit progressivement en composé $1$ jusqu'à atteindre la composition de l'azéotrope ($x_{\text{az}} = 0,60$). Le résidu au bouilleur s'appauvrit en composé $1$ et tend vers le corps pur $2$.
   * **Cas $z_1 = 0,80$ ($z_1 > x_{\text{az}}$) :** Le mélange est cette fois du côté riche en composé $1$ par rapport à l'azéotrope. En tête de colonne, le distillat récupéré est le **corps pur $1$** (car la branche azéotropique impose que $y_1 > x_1$ pour $x_1 > x_{\text{az}}$). Le résidu au bouilleur s'appauvrit en composé $1$ et tend vers la composition de l'azéotrope.

---

#### Partie B : Étude d'un diagramme binaire solide-liquide (Eutectique)

4. **Variances dans le diagramme solide-liquide :**
   * *Zone diphasée (Liquide + Solide A pur) :* $C = 2$ (A et B), $\phi = 2$ (Liquide + Solide A), $\psi = 1$ (Pression fixée à $P^{\circ}$). 
     $$V = 2 - 2 + 1 = 1 \text{ (système univariant)}$$
   * *Sur le palier eutectique :* $C = 2$ (A et B), $\phi = 3$ (Liquide de composition E, Solide A pur, Solide B pur), $\psi = 1$ (Pression fixée).
     $$V = 2 - 3 + 1 = 0 \text{ (système invariant)}$$
     La température reste strictement bloquée à $T_{\text{E}} = 50\text{ °C}$ tant que tout le liquide n'a pas solidifié (analogie avec un palier de changement d'état d'un corps pur).

5. **Refroidissement d'un mélange de composition $x_{\text{B}} = 0,70$ :**
   * **Étapes du refroidissement :**
     1. De $130\text{ °C}$ à environ $105\text{ °C}$ (température de liquidus pour $x_{\text{B}} = 0,70$) : le système est entièrement sous forme de **liquide homogène** ($V = 2$).
     2. À la traversée du liquidus ($\approx 105\text{ °C}$) : début de la cristallisation du **corps pur B**. Le système devient diphasé : **Liquide + Solide B pur** ($V = 1$). Le liquide s'enrichit progressivement en A (sa composition glisse le long de la branche de liquidus vers E).
     3. À l'atteinte de $T_{\text{E}} = 50\text{ °C}$ : le liquide atteint la composition eutectique $x_{\text{B, E}} = 0,40$. Le système devient invariant ($V = 0$) : tout le liquide résiduel se solidifie instantanément en un mélange intime (structure eutectique) de cristaux de A pur et de B pur. Le palier thermique persiste jusqu'à disparition totale de la phase liquide.
     4. En dessous de $50\text{ °C}$ : le système est entièrement solide et constitué de cristaux de **Solide A + Solide B**.
   * **Application du théorème des moments chimiques à $T = 65\text{ °C}$ :**
     À $65\text{ °C}$, le système est dans la zone diphasée **Liquide + Solide B pur**. 
     Soit $x_{\text{L}}$ la composition du liquide à $65\text{ °C}$ (donnée par l'intersection de l'isotherme $65\text{ °C}$ avec la branche de liquidus du côté B, soit par exemple $x_{\text{L}} \approx 0,55$).
     La composition globale est $z_{\text{B}} = 0,70$ et le solide en présence est le corps pur B ($x_{\text{solide B}} = 1$).
     Notons $m_{\text{L}}$ la masse de liquide et $m_{\text{S}}$ la masse de solide B. D'après le théorème des moments chimiques (règle du levier) :
     $$m_{\text{L}} \times (\text{distance}_{\text{Liquide-Global}}) = m_{\text{S}} \times (\text{distance}_{\text{Global-Solide}})$$
     $$\frac{m_{\text{L}}}{m_{\text{total}}} = \frac{1 - 0,70}{1 - 0,55} = \frac{0,30}{0,45} = \frac{2}{3} \approx 67\text{ %}$$
     $$\frac{m_{\text{S}}}{m_{\text{total}}} = \frac{0,70 - 0,55}{1 - 0,55} = \frac{0,15}{0,45} = \frac{1}{3} \approx 33\text{ %}$$
     À $65\text{ °C}$, le mélange est donc constitué de $\approx 67\%$ de phase liquide et $\approx 33\%$ de cristaux de solide B pur.