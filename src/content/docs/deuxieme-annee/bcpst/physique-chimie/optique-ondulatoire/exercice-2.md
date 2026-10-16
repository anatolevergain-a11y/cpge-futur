---
title: "Exercice 2 : Diffraction et résolution des instruments d observation"
description: "Problème d entraînement type concours pour BCPST."
---

### 🌐 Énoncé du problème / Cadre d'étude

L'exploration du vivant à l'échelle microscopique se heurte inévitablement à la nature ondulatoire de la lumière. Tout système optique réel (œil, objectif de microscope, télescope) possède une ouverture de dimensions finies qui diaphragme les faisceaux lumineux, engendrant le phénomène de **diffraction**.

Ce phénomène impose une limite fondamentale au pouvoir séparateur (résolution) des instruments d'optique, théorisée notamment par Lord Rayleigh et Ernst Abbe.

Dans ce problème, on se propose d'étudier les limites de résolution imposées par la diffraction, d'abord pour l'œil humain, puis pour un microscope optique de recherche appliqué à la cytologie animale et végétale.

---

### ❓ Questions progressives

#### Partie A : Diffraction par une ouverture circulaire et critère de Rayleigh
1. **Figure de diffraction d'Airy**  
   Rappeler la forme de la figure d'intensité obtenue à l'infini (ou dans le plan focal d'une lentille convergente) lors de la diffraction d'une onde plane monochromatique de longueur d'onde $\lambda$ par une pupille circulaire de diamètre $D$.  
   Donner sans démonstration l'expression du demi-angle au sommet $\theta_{\text{Airy}}$ du premier anneau sombre (premier zéro d'intensité).

2. **Critère de Rayleigh**  
   Énoncer précisément le critère de résolution spatiale ou angulaire proposé par Lord Rayleigh pour deux sources ponctuelles incohérentes entre elles. Exprimer l'écart angulaire minimal $\theta_{\text{min}}$ permettant de séparer deux objets ponctuels à l'infini.

#### Partie B : Résolution angulaire et spatiale de l'œil humain
3. **Limite théorique de diffraction de l'œil**  
   On modélise la pupille de l'œil par une ouverture circulaire de diamètre moyen en vision diurne $D_{\text{œil}} = 3{,}0\text{ mm}$. La longueur d'onde moyenne dans le vide de la lumière visible est prise égale à $\lambda_0 = 550\text{ nm}$.  
   Calculer la limite théorique de résolution angulaire $\theta_{\text{th}}$ imposée par la diffraction. Exprimer le résultat en radians, puis en minutes d'arc ($'$).

4. **Comparaison avec la limite physiologique**  
   En pratique, un œil humain emmétrope (vision normale) possède une acuité visuelle standard définie par un pouvoir séparateur expérimental d'environ $\theta_{\text{exp}} \approx 1'$.  
   Commenter l'écart entre $\theta_{\text{th}}$ et $\theta_{\text{exp}}$. Quels facteurs anatomiques ou optiques limitent la résolution réelle ?

5. **Distance minimale de séparation à l'œil nu**  
   Un observateur regarde un échantillon situé à sa distance minimale de vision distincte ($d_m = 25\text{ cm}$).  
   Déterminer la distance minimale spatiale $d_{\text{min}}$ séparant deux détails sur l'échantillon pour qu'ils soient perceptibles comme distincts (on utilisera la limite théorique de diffraction).

#### Partie C : Limite de résolution spatiale d'un microscope optique
Un microscope optique est utilisé pour observer des cellules végétales et des microorganismes. L'objet est placé au voisinage immédiat du foyer objet d'un objectif de haute qualité, assimilé à une lentille mince convergente d'ouverture angulaire caractérisée par le demi-angle $\alpha$ du cône de lumière capté par la pupille d'entrée. L'espace objet est caractérisé par un indice de réfraction $n$.

6. **Critère d'Abbe et ouverture numérique**  
   On définit l'ouverture numérique de l'objectif par :
   $$ON = n \sin\alpha$$
   Justifier qualitativement pourquoi la limite de résolution spatiale (distance minimale $r_{\text{min}}$ entre deux points objets discernables) est inversement proportionnelle à $ON$.  
   Admettre la formule de Rayleigh-Abbe :
   $$r_{\text{min}} = \frac{0{,}61 \, \lambda_0}{ON}$$

7. **Objectif « à sec » vs « à immersion »**  
   On utilise un objectif dont le demi-angle d'ouverture est $\alpha = 65^\circ$, éclairé par une radiation de longueur d'onde $\lambda_0 = 480\text{ nm}$ (lumière bleue).
   - Calculer $r_{\text{min, sec}}$ lorsque l'observation est réalisée dans l'air ($n = 1{,}00$).
   - Pour augmenter la résolution, on réalise une observation à immersion en interposant entre la lamelle couvre-objet et l'objectif une goutte d'huile de synthèse d'indice $n_{\text{huile}} = 1{,}515$. Calculer la nouvelle résolution $r_{\text{min, huile}}$.

8. **Application biologique : observation d'organites cellulaires**  
   On souhaite observer au microscope photonique :
   - Deux bactéries *Escherichia coli* séparées d'une distance de $0{,}30 \, \mu\text{m}$.
   - La structure interne d'une mitochondrie, notamment l'épaisseur de l'espace intermembranaire ou des crêtes mitochondriales ($\sim 20\text{ nm}$).  
   Indiquer, en justifiant, quels éléments sont observables avec le microscope à immersion précédent. Que doit-on envisager pour observer les crêtes mitochondriales ?

---

### 💡 Pistes & Indications méthodologiques

1. **Question 1 & 2 :** Penser au facteur $1{,}22$ qui provient de la première racine non nulle de la fonction de Bessel d'ordre 1, $J_1(u) = 0$. Le critère de Rayleigh stipule que le sommet du maximum principal de diffraction d'une source coïncide avec le premier zéro d'intensité de la seconde.
2. **Question 3 :** Conversion d'unités essentielle : $1\text{ rad} = \left(\frac{180}{\pi} \times 60\right)' \approx 3438'$.
3. **Question 4 :** Réfléchir à la structure rétinienne (densité et espacement des photorécepteurs : cônes de la fovéa $\approx 2 \text{ à } 3 \, \mu\text{m}$) et aux aberrations optiques de l'œil (astigmatisme, aberrations sphériques et chromatiques).
4. **Question 5 :** Dans le cadre des petits angles (approximation paraxiale valide ici), $d_{\text{min}} \approx d_m \cdot \theta_{\text{th}}$.
5. **Question 6 & 7 :** La longueur d'onde dans le milieu d'indice $n$ est $\lambda = \lambda_0 / n$. L'ouverture numérique combine l'effet de l'angle de collection et le raccourcissement de la longueur d'onde dans le milieu réfringent.

---

### 📋 Corrigé détaillé pas à pas

#### Partie A : Diffraction par une ouverture circulaire et critère de Rayleigh

1. **Figure de diffraction d'Airy**  
   Lors de la diffraction d'une onde plane par une pupille circulaire de diamètre $D$, la figure d'intensité observée à l'infini présente une symétrie de révolution. Elle est constituée d'une tache centrale très brillante, appelée **tache d'Airy**, entourée d'anneaux sombres et brillants concentriques de plus en plus faibles.  
   L'écart angulaire (demi-angle au sommet) $\theta_{\text{Airy}}$ du premier anneau sombre s'écrit :
   $$\theta_{\text{Airy}} = 1{,}22 \, \frac{\lambda}{D}$$
Remarque: * Le coefficient $1{,}22$ découle de la première racine de la fonction de Bessel $J_1(\pi u)$, donnée par $u \approx 1{,}22$.

2. **Critère de Rayleigh**  
   Deux sources ponctuelles incohérentes et de même intensité sont dites **juste résolues** (ou séparées) si le maximum central de la figure de diffraction de l'une coïncide exactement avec le premier minimum d'intensité (premier anneau noir) de la figure de diffraction de l'autre.  
   L'écart angulaire minimal séparant les deux directions d'émission vaut ainsi :
   $$\theta_{\text{min}} = \theta_{\text{Airy}} = 1{,}22 \, \frac{\lambda}{D}$$
   À cette limite, l'intensité au point médian de la figure globale présente un creux d'environ $26\,\%$ par rapport aux maxima, ce qui permet à l'œil ou à un capteur de distinguer deux composantes distinctes.

---

#### Partie B : Résolution angulaire et spatiale de l'œil humain

3. **Limite théorique de diffraction de l'œil**  
   En appliquant le critère de Rayleigh à la pupille de l'œil :
   $$\theta_{\text{th}} = 1{,}22 \, \frac{\lambda_0}{D_{\text{œil}}}$$
   Application numérique :
   $$\theta_{\text{th}} = 1{,}22 \times \frac{550 \times 10^{-9}\text{ m}}{3{,}0 \times 10^{-3}\text{ m}} = 2{,}24 \times 10^{-4}\text{ rad}$$
   Convertissons cet angle en minutes d'arc ($1^\circ = 60'$, $\pi\text{ rad} = 180^\circ$) :
   $$\theta_{\text{th}} = 2{,}24 \times 10^{-4} \times \frac{180 \times 60}{\pi} \approx 0{,}77'$$

4. **Comparaison avec la limite physiologique**  
   On constate que la limite théorique de diffraction ($\theta_{\text{th}} \approx 0{,}77'$) est légèrement inférieure à la résolution réelle moyenne mesurée chez l'être humain ($\theta_{\text{exp}} \approx 1'$).  
   L'œil humain n'est donc pas un système optique parfait strictement limité par la diffraction :
   - **Échantillonnage rétinien :** La fovéa est pavée de cônes espacés d'environ $d_c \approx 2{,}5 \, \mu\text{m}$. Pour que deux points soient vus séparés, il faut qu'au moins un cône peu excité sépare deux cônes fortement excités (théorème de Shannon-Nyquist appliqué à la mosaïque rétinienne). Pour une distance focale équivalente de l'œil de $f' \approx 17\text{ mm}$, cela correspond à un angle minimal :
     $$\theta_{\text{rétine}} \approx \frac{2 \times d_c}{f'} = \frac{5{,}0 \times 10^{-6}\text{ m}}{17 \times 10^{-3}\text{ m}} \approx 2{,}9 \times 10^{-4}\text{ rad} \approx 1{,}0'$$
   - **Aberrations optiques :** Les aberrations géométriques (aberration sphérique, coma) et chromatiques de la cornée et du cristallin dégradent la qualité de la tache focale par rapport à la tache d'Airy idéale.

5. **Distance minimale de séparation à l'œil nu**  
   Pour un objet situé au *punctum proximum* ($d_m = 25\text{ cm}$), la séparation spatiale minimale $d_{\text{min}}$ sous l'angle $\theta_{\text{th}}$ vérifie (dans l'approximation des petits angles) :
   $$d_{\text{min}} \approx d_m \cdot \theta_{\text{th}}$$
   Application numérique :
   $$d_{\text{min}} = 0{,}25\text{ m} \times 2{,}24 \times 10^{-4}\text{ rad} = 5{,}6 \times 10^{-5}\text{ m} = 56 \, \mu\text{m}$$
   *(Avec la valeur physiologique de $1'$, on obtiendrait $d_{\text{min}} \approx 73 \, \mu\text{m}$).*  
   L'œil nu est donc incapable de discerner des détails inférieurs à environ $50\text{ à }70 \, \mu\text{m}$, ce qui justifie l'emploi indispensable d'un microscope pour étudier des cellules dont la taille caractéristique est de l'ordre de $10\text{ à }30 \, \mu\text{m}$.

---

#### Partie C : Limite de résolution spatiale d'un microscope optique

6. **Ouverture numérique et critère d'Abbe**  
   Dans l'espace objet baignant dans un milieu d'indice $n$, la longueur d'onde de la lumière est réduite :
   $$\lambda = \frac{\lambda_0}{n}$$
   De plus, plus l'angle d'ouverture $\alpha$ est grand, plus l'objectif collecte des rayons fortement inclinés par rapport à l'axe optique. D'après la théorie de Fourier de la formation des images (théorie d'Abbe), ces rayons inclinés correspondent aux **fréquences spatiales élevées** de l'objet, c'est-à-dire aux détails les plus fins.  
   La diffraction élargit l'image de chaque point en une tache d'Airy dont le rayon ramené dans le plan objet vaut :
   $$r_{\text{min}} = \frac{0{,}61 \, \lambda}{ \sin\alpha} = \frac{0{,}61 \, \lambda_0}{n \sin\alpha} = \frac{0{,}61 \, \lambda_0}{ON}$$
   Une ouverture numérique $ON$ élevée permet ainsi de minimiser $r_{\text{min}}$ et donc d'accroître le pouvoir séparateur.

7. **Objectif « à sec » vs « à immersion »**  
   - **Objectif à sec ($n = 1{,}00$) :**
     $$ON_{\text{sec}} = 1{,}00 \times \sin(65^\circ) \approx 0{,}906$$
     $$r_{\text{min, sec}} = \frac{0{,}61 \times 480 \times 10^{-9}\text{ m}}{0{,}906} \approx 3{,}23 \times 10^{-7}\text{ m} = 0{,}32 \, \mu\text{m} = 323\text{ nm}$$

   - **Objectif à immersion ($n_{\text{huile}} = 1{,}515$) :**
     $$ON_{\text{huile}} = 1{,}515 \times \sin(65^\circ) \approx 1{,}515 \times 0{,}906 \approx 1{,}37$$
     $$r_{\text{min, huile}} = \frac{0{,}61 \times 480 \times 10^{-9}\text{ m}}{1{,}37} \approx 2{,}14 \times 10^{-7}\text{ m} = 0{,}21 \, \mu\text{m} = 214\text{ nm}$$
   
   *Conclusion intermédiaire :* L'immersion permet de franchir la barre théorique de $ON = 1$, réduisant la distance résolue de plus de $30\,\%$.

8. **Application biologique**  
   - **Bactéries espacées de $0{,}30 \, \mu\text{m}$ :**  
     Avec l'objectif à immersion, $r_{\text{min, huile}} \approx 0{,}21 \, \mu\text{m} < 0{,}30 \, \mu\text{m}$.  
     Les deux bactéries seront donc **nettement séparées et résolues** (alors qu'elles ne le seraient pas ou très difficilement avec l'objectif à sec où $r_{\text{min, sec}} \approx 0{,}32 \, \mu\text{m} > 0{,}30 \, \mu\text{m}$).
   
   - **Crêtes mitochondriales ($\sim 20\text{ nm}$) :**  
     L'épaisseur de ces structures ($20\text{ nm}$) est très inférieure à la limite ultime de résolution du microscope optique conventionnel en champ clair ($r_{\text{min}} \approx 200\text{ nm}$). Elles ne peuvent absolument **pas être résolues** par ce microscope.
   
   - **Perspectives instrumentales :**  
     Pour visualiser l'ultrastructure mitochondriale, il est nécessaire de s'affranchir de la limite de diffraction de la lumière visible :
     - Utiliser la **microscopie électronique à transmission (MET)** : les électrons accélérés possèdent une longueur d'onde de de Broglie extrêmement courte ($\lambda_e \sim \text{quelques picomètres}$), permettant une résolution pratique inférieure au nanomètre.
     - Utiliser les techniques modernes de **microscopie optique de super-résolution** (nanoscopie type STED, PALM/STORM), qui contournent la limite d'Abbe par saturation de fluorescence ou localisation stochastique de molécules uniques.