---
title: 'Exercice 2 : Ondes acoustiques et effet Doppler'
description: 'Problème d entraînement type concours.'
---

# Problème : Écholocalisation chez les chiroptères et analyse de l'effet Doppler

## Contexte biologique et problématique
Les chauves-souris insectivores (chiroptères) utilisent l'écholocalisation pour se repérer et chasser en vol. Elles émettent des ultrasons dont la fréquence varie au cours du temps (souvent des signaux modulés en fréquence ou à fréquence quasi-constante). Lorsqu'une chauve-souris s'approche d'une proie en mouvement (un insecte), la fréquence du signal réfléchi est modifiée par l'effet Doppler. 

L'objectif de ce problème est de modéliser la propagation des ondes acoustiques émises par une chauve-souris, d'établir la relation de Doppler dans le cadre de la BCPST, puis d'analyser comment le système nerveux de l'animal peut extraire la vitesse relative de la proie tout en corrigeant sa propre vitesse de vol.

---

## Énoncé et Questions

### Partie I : Modélisation unidimensionnelle des ondes acoustiques
On considère l'air au repos, assimilé à un gaz parfait de masse volumique au repos $\rho_0$ et de pression au repos $P_0$. Une onde acoustique se propage suivant l'axe $(Ox)$. 

On note :
* $p(x,t) = P(x,t) - P_0$ la surpression acoustique ;
* $v(x,t)$ la vitesse particulaire (faible devant la vitesse du son $c$) ;
* $\mu(x,t)$ la variation de masse volumique.

1. Établir l'équation aux dérivées partielles régissant la surpression $p(x,t)$ en combinant l'équation d'Euler, l'équation de continuité et une relation thermodynamique locale (on supposera la transformation isentropique, avec $c^2 = \left(\frac{\partial P}{\partial \rho}\right)_S$).
2. Rappeler l'expression de la vitesse de phase $c$ dans le cas d'un gaz parfait en fonction de la constante adiabatique $\gamma$, de la constante des gaz parfaits $R$, de la température absolue $T$ et de la masse molaire $M$.
3. Vérifier que la forme générale d'une onde plane progressive harmonique se propagerant dans le sens des $x$ croissants s'écrit sous la forme :
   $$p(x,t) = P_m \cos(\omega t - k x + \phi)$$
   Préciser la relation entre la pulsation $\omega$ et le nombre d'onde $k$.

---

### Partie II : Étude de l'effet Doppler et écholocalisation
Une chauve-souris (source $S$, en mouvement à la vitesse $v_S$ suivant l'axe $(Ox)$) émet un signal ultrasonore de fréquence $f_e$. Ce signal se propage dans l'air immobile à la célérité $c$. Le signal frappe un insecte (récepteur/obstacle $R$) mobile à la vitesse $v_R$ sur le même axe, puis l'onde est réfléchie vers la chauve-souris qui joue alors le rôle de récepteur fixe par rapport à son émetteur.

4. Établir l'expression de la fréquence $f_r$ perçue par l'insecte $R$ en fonction de $f_e$, $c$, $v_S$ et $v_R$. On orientera l'axe $(Ox)$ de la source vers le récepteur.
5. L'insecte renvoie l'onde (réflexion). En considérant l'insecte comme une nouvelle source émettrice à la fréquence $f_r$, exprimer la fréquence $f_e'$ perçue par la chauves-souris (qui redevient réceptrice).
6. Application biologique : Une chauve-souris vole à la vitesse $v_S = \text{5,0 m}\cdot\text{s}^{-1}$ vers un insecte immobile ($v_R = 0$). Elle émet un cri à la fréquence $f_e = \text{50 kHz}$. La célérité du son dans l'air est $c = \text{340 m}\cdot\text{s}^{-1}$. 
   Calculer la fréquence perçue par la chauve-souris après réflexion. En déduire le décalage fréquentiel $\Delta f = f_e' - f_e$.

---

### Partie III : Analyse critique du modèle
7. La chauve-souris doit analyser le signal perçu en un temps très court pour adapter sa trajectoire. Discuter des limites du modèle d'ondes planes progressives harmoniques infinies face à la réalité biologique (les cris sont des impulsions brèves).
8. Citer une limite physique majeure liée aux propriétés du milieu traversé (l'air) sur la propagation des ultrasons sur de grandes distances.

---

## Pistes et indications
* **Q1 :** Linéarisez les équations de la mécanique des fluides en négligeant les termes d'ordre supérieur (produits de perturbations).
* **Q4 :** Utilisez la conservation de la période temporelle entre la source et le récepteur en tenant compte de la distance parcourue par l'onde au cours du temps.
* **Q7 & Q8 :** Pensez à l'analyse spectrale (relation d'incertitude temps-fréquence) et à l'atténuation par absorption thermovisqueuse.

---

## Corrigé pas à pas

### Partie I_1. **Équations linéarisées de l'acoustique :**
   * *Équation d'Euler (quantité de mouvement) :* $\rho_0 \frac{\partial v}{\partial t} = -\frac{\partial p}{\partial x}$
   * *Équation de continuité (masse) :* $\frac{\partial \mu}{\partial t} + \rho_0 \frac{\partial v}{\partial x} = 0$
   * *Relation thermodynamique :* $p = c^2 \mu$
   
   En dérivant l'équation d'Euler par rapport à $x$ et l'équation de continuité par rapport à $t$, puis en combinant à l'aide de la relation d'état, on obtient l'équation d'onde d'Alembert :
   $$\frac{\partial^2 p}{\partial x^2} - \frac{1}{c^2}\frac{\partial^2 p}{\partial t^2} = 0$$

2. **Célérité du son :**
   Pour un gaz parfait, $c = \sqrt{\frac{\gamma R T}{M}}$.

3. **Onde harmonique :**
   En injectant $p(x,t) = P_m \cos(\omega t - k x + \phi)$ dans l'équation d'Alembert, on obtient :
   $$-k^2 - \frac{1}{c^2}(-\omega^2) = 0 \implies \frac{\omega}{k} = c$$
   La relation dispersion est donc $\omega = c k$.

---

### Partie II
4. **Fréquence perçue par l'insecte (Récepteur $R$) :**
   La période apparente perçue par $R$ est $T_r = T_e \left(1 - \frac{v_R - v_S}{c}\right)$ (en posant les vitesses algébriquement selon $(Ox)$).
   La fréquence est donc :
   $$f_r = f_e \frac{c - v_R}{c - v_S}$$

5. **Fréquence perçue par la chauve-souris (Source initiale $S$) :**
   L'insecte devient source à la fréquence $f_r$ avec une vitesse $v_R$, et la chauve-souris est réceptrice à la vitesse $v_S$. En inversant les rôles :
   $$f_e' = f_r \frac{c + v_S}{c + v_R} = f_e \left(\frac{c - v_R}{c - v_S}\right) \left(\frac{c + v_S}{c + v_R}\right)$$
   *(Note : les signes dépendent de l'orientation choisie. Avec $v_S$ et $v_R$ dirigés vers la droite).*

6. **Application numérique :**
   Ici $v_R = 0$ et $v_S = \text{5,0 m}\cdot\text{s}^{-1}$ (en s'approchant, donc le signe vient modifier le dénominateur/numérateur. Soit $f_e' = f_e \frac{c}{c - v_S}$).
   $$f_e' = \text{50} \times 10^3 \times \frac{340}{340 - 5,0} = \text{50} \times 10^3 \times \frac{340}{335} \approx \text{50 746 Hz}$$
   Le décalage fréquentiel est :
   $$\Delta f = f_e' - f_e \approx \text{+746 Hz}$$

---

### Partie III
7. **Limites du modèle harmonique infini :**
   Un son pur infini ne transmet aucune information temporelle. Pour l'écholocalisation, la chauve-souris émet des *impulsions* (signaux transitoires). D'après le principe de Fourier, un signal temporellement bref possède un étalement spectral $\Delta f \cdot \Delta t \ge \frac{1}{4\pi}$. Une trop grande précision sur la fréquence nuit à la précision sur la localisation temporelle (distance de la proie).
   
8. **Atténuation par absorption :**
   Les ultrasons subissent une atténuation par absorption atmosphérique (viscosité de l'air et relaxations moléculaires) proportionnelle au carré de la fréquence ($\alpha \propto f^2$). Les hautes fréquences (nécessaires pour avoir une bonne résolution spatiale, car $\lambda = c/f$ doit être inférieur à la taille de la proie) portent donc sur de très courtes distances (quelques mètres à dizaines de mètres tout au plus).