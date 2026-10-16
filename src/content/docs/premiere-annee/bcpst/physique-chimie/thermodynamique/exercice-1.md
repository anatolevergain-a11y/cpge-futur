---
title: 'Exercice 1 : Premier principe et bilans énergétiques'
description: 'Problème d entraînement type concours.'
---

## Bilan thermique et thermorégulation chez un mammifère marin plongeur (*Leptonychotes weddellii*)

Les mammifères marins des régions polaires, tels que le phoque de Weddell (*Leptonychotes weddellii*), maintiennent une température centrale homéotherme voisine de $37{,}0\ \text{^\circ C}$ dans des eaux antarctiques dont la température de congélation atteint $-1{,}8\ \text{^\circ C}$. Lors de plongées profondes prolongées pouvant dépasser 60 minutes, l'animal est confronté à un compromis physiologique sévère : la déperdition thermique vers l'eau (conducteur thermique bien plus efficace que l'air) et la nécessité d'économiser l'oxygène stocké pour éviter l'asphyxie, limitant la possibilité d'augmenter le métabolisme thermogénique.

Ce problème s'attache à modéliser le bilan thermique du phoque par application du premier principe de la thermodynamique à un système ouvert ou fermé, en reliant les transferts d'énergie aux adaptations anatomiques et physiologiques de l'animal.

---

### Données numériques et caractéristiques du modèle

* Masse totale de l'animal : $M = 400\ \text{kg}$
* Masse du compartiment central (« noyau thermique » regroupant les organes vitaux et les muscles squelettiques profonds) : $m_c = 280\ \text{kg}$
* Capacité thermique massique moyenne des tissus biologiques : $c = 3{,}5\cdot 10^3\ \text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
* Surface corporelle d'échange : $S = 2{,}5\ \text{m}^2$
* Épaisseur moyenne du pannicule adipeux (couche de lard ou *blubber*) : $e = 5{,}0\ \text{cm}$
* Conductivité thermique du lard sous-cutané : $\lambda_l = 0{,}20\ \text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$
* Coefficient d'échange convectif entre la peau et l'eau : $h = 250\ \text{W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$
* Température de l'eau de mer : $T_e = -1{,}8\ \text{^\circ C}$
* Température centrale de consigne : $T_{c,0} = 37{,}0\ \text{^\circ C}$
* Relation de Kleiber pour le métabolisme basal des mammifères : $P_\text{basal} = k \cdot M^{0{,}75}$ avec $k \approx 3{,}4\ \text{W}\cdot\text{kg}^{-0{,}75}$

---

### Modèle géométrique et thermique
On modélise l'animal par un noyau thermique homogène à température uniforme $T_c(t)$, entouré d'une couche protectrice de lard d'épaisseur $e$ et de surface externe $S$. Compte tenu du rapport entre l'épaisseur de lard et les dimensions transversales de l'animal, on traite les transferts thermiques conductifs à travers le lard dans l'approximation plane monodimensionnelle.

```
 Noyau central (Tc) | Lard (e, λ) | Peau (Tp) | Eau de mer (Te, h)
                    | <--- e ---> |
                    |  Conduction | Convection
```

---

## Questions

### Partie A : Bilan en régime stationnaire en surface

1. Donner l'expression de la résistance thermique conductive $R_\text{cond}$ de la couche de lard, puis celle de la résistance thermique convective $R_\text{conv}$ au niveau de l'interface peau-eau de mer. Calculer leurs valeurs numériques. Quel transfert limite la perte d'énergie thermique ?
2. Définir le système thermodynamique d'intérêt. En appliquant le premier principe de la thermodynamique sous forme de bilan de puissance en régime stationnaire, exprimer le flux thermique total perdu $\Phi_\text{pertes}$ en fonction de $T_c$, $T_e$, $R_\text{cond}$ et $R_\text{conv}$.
3. Calculer numériquement $\Phi_\text{pertes}$.
4. Estimer la puissance métabolique basale théorique d'un mammifère terrestre de même masse à l'aide de la loi de Kleiber. Comparer cette valeur à $\Phi_\text{pertes}$. Quelle adaptation métabolique ce résultat suggère-t-il chez les mammifères marins polaires ?
5. Exprimer la température superficielle de la peau $T_p$ en régime stationnaire. Calculer sa valeur numérique. Commenter l'intérêt adaptatif de cette température pour la faune marine polaire.

### Partie B : Bilan thermique transitoire lors d'une plongée prolongée

En plongée profonde, l'animal déclenche la « réponse de plongée » (*dive response*) caractérisée par une bradycardie intense et une vasoconstriction périphérique quasi totale. Le métabolisme interne est réduit pour économiser l'oxygène : $P_\text{met}' = 180\ \text{W}$. Les échanges thermiques respiratoires sont nuls (apnée complète).

6. Par application du premier principe de la thermodynamique au noyau central de masse $m_c$, établir l'équation différentielle régissant l'évolution de la température centrale $T_c(t)$.
7. Mettre cette équation sous la forme canonique :
   $$\frac{\mathrm{d}T_c}{\mathrm{d}t} + \frac{T_c - T_\text{eq}}{\tau} = 0$$
   On précisera les expressions analytiques de la température d'équilibre asymptotique $T_\text{eq}$ et du temps caractéristique $\tau$.
8. Calculer la valeur numérique de $\tau$.
9. Résoudre l'équation différentielle avec la condition initiale $T_c(0) = T_{c,0} = 37{,}0\ \text{^\circ C}$.
10. Déterminer la durée maximale de plongée $t_\text{max}$ au bout de laquelle la température centrale chute à $T_c(t_\text{max}) = 35{,}0\ \text{^\circ C}$ (seuil d'hypothermie modérée chez les mammifères).

### Partie C : Analyse critique et limites du modèle biologique

11. Citer au moins deux simplifications majeures introduites dans ce modèle physique. En quoi la géométrie réelle de l'animal et la vascularisation du pannicule adipeux modifient-elles quantitativement les transferts d'énergie ?
12. Les extrémités (nageoires pectorales et caudale) ne possèdent pas de couche de lard épaisse. Quel dispositif anatomique vasculaire permet néanmoins de minimiser les fuites thermiques à leur niveau ? Décrire succinctement son principe thermodynamique.

---

## Pistes de résolution

* **Partie A** :
  * Assimiler le flux thermique à un courant et l'écart de température à une tension : $R_\text{cond} = \frac{e}{\lambda_l S}$ et $R_\text{conv} = \frac{1}{h S}$.
  * En régime stationnaire, $\frac{\mathrm{d}U}{\mathrm{d}t} = 0 \implies P_\text{met} - \Phi_\text{pertes} = 0$.
  * Utiliser le diviseur de tension (ou la continuité du flux) pour déterminer la température de peau $T_p$.
* **Partie B** :
  * Écrire $\mathrm{d}U = m_c c\,\mathrm{d}T_c$ pendant $\mathrm{d}t$. Le bilan enthalpique ou d'énergie interne pour une phase condensée indilatable et incompressible s'écrit $\frac{\mathrm{d}U}{\mathrm{d}t} = P_\text{met}' - \frac{T_c(t) - T_e}{R_\text{th}}$.
  * Identifier la forme différentielle standard du premier ordre à coefficients constants avec second membre constant.
* **Partie C** :
  * Considérer la géométrie cylindro-conique de l'animal (la surface extérieure est supérieure à la surface interne de la couche de graisse).
  * Penser aux échangeurs de chaleur à contre-courant (artères entourées de veines satellites) au niveau du système vasculaire des appendices locomoteurs.

---

## Corrigé détaillé

### Partie A : Bilan en régime stationnaire en surface

#### 1. Résistances thermiques conductive et convective

En géométrie plane monodimensionnelle :
* La résistance thermique de conduction de la couche de lard s'écrit :
  $$R_\text{cond} = \frac{e}{\lambda_l \cdot S}$$
  Application numérique :
  $$R_\text{cond} = \frac{5{,}0\cdot 10^{-2}\ \text{m}}{0{,}20\ \text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1} \times 2{,}5\ \text{m}^2} = \frac{0{,}050}{0{,}50} = 0{,}10\ \text{K}\cdot\text{W}^{-1}$$

* La résistance thermique de convection à l'interface peau/eau s'exprime par :
  $$R_\text{conv} = \frac{1}{h \cdot S}$$
  Application numérique :
  $$R_\text{conv} = \frac{1}{250\ \text{W}\cdot\text{m}^{-2}\cdot\text{K}^{-1} \times 2{,}5\ \text{m}^2} = \frac{1}{625} \approx 1{,}6\cdot 10^{-3}\ \text{K}\cdot\text{W}^{-1}$$
Comparaison: **
$$R_\text{cond} \approx 62{,}5 \times R_\text{conv}$$
La résistance conductive du lard est près de deux ordres de grandeur supérieure à la résistance convective. C'est donc **la conduction à travers le lard qui constitue le facteur limitant** (l'étape cinétiquement limitante) du transfert thermique. L'eau refroidit l'interface externe presque instantanément par rapport à la vitesse à laquelle la chaleur diffuse au travers du pannicule.

#### 2. Système et expression du flux thermique

* **Système thermodynamique fermé :** l'organisme entier du phoque à l'instant $t$.
* Les parois du lard et l'interface externe étant montées en série pour le transfert thermique, la résistance thermique globale vaut :
  $$R_\text{th} = R_\text{cond} + R_\text{conv} = \frac{e}{\lambda_l S} + \frac{1}{h S}$$
* Le flux thermique net évacué vers le milieu extérieur par déperdition passive est :
  $$\Phi_\text{pertes} = \frac{T_c - T_e}{R_\text{th}} = \frac{T_c - T_e}{R_\text{cond} + R_\text{conv}}$$

En régime stationnaire, le premier principe pour ce système fermé à volume constant s'écrit :
$$\frac{\mathrm{d}U}{\mathrm{d}t} = P_\text{met} - \Phi_\text{pertes} = 0 \implies P_\text{met} = \Phi_\text{pertes}$$

#### 3. Calcul numérique du flux perdu

$$\Delta T = T_c - T_e = 37{,}0 - (-1{,}8) = 38{,}8\ \text{K}$$
$$R_\text{th} = 0{,}10 + 0{,}0016 = 0{,}1016\ \text{K}\cdot\text{W}^{-1}$$
$$\Phi_\text{pertes} = \frac{38{,}8\ \text{K}}{0{,}1016\ \text{K}\cdot\text{W}^{-1}} \approx 3{,}82\cdot 10^2\ \text{W} \approx 382\ \text{W}$$

#### 4. Comparaison avec la loi de Kleiber et interprétation

D'après la loi d'échelle allométrique de Kleiber pour un mammifère terrestre :
$$P_\text{basal} = 3{,}4 \times (400)^{0{,}75} = 3{,}4 \times \left(400^3\right)^{0{,}25} \approx 3{,}4 \times 89{,}44 \approx 304\ \text{W}$$

La déperdition thermique minimale calculée ($\Phi_\text{pertes} \approx 382\ \text{W}$) est nettement supérieure au métabolisme basal attendu pour un mammifère terrestre standard ($304\ \text{W}$). 
Pour compenser ces pertes sans grever sa température corporelle en continu, le phoque de Weddell présente un **taux métabolique de repos surélevé** (environ 1,3 à 2 fois supérieur à la courbe standard de Kleiber), une adaptation biochimique et mitochondriale fréquente chez les mammifères marins polaires.

#### 5. Température de surface de la peau $T_p$

La continuité du flux à travers les résistances en série permet d'écrire :
$$\Phi_\text{pertes} = \frac{T_p - T_e}{R_\text{conv}} \implies T_p = T_e + R_\text{conv} \cdot \Phi_\text{pertes}$$

Application numérique :
$$T_p = -1{,}8 + (1{,}6\cdot 10^{-3}\ \text{K}\cdot\text{W}^{-1} \times 382\ \text{W}) = -1{,}8 + 0{,}61 = -1{,}19\ \text{^\circ C} \approx -1{,}2\ \text{^\circ C}$$
Commentaire: **
La peau externe est à une température extrêmement proche de celle de l'eau ambiante (écart inférieur à $1\ \text{K}$). L'animal maintient un gradient thermique presque intégralement confiné à l'intérieur du lard adipeux. Cela réduit à l'extrême l'écart de température moteur $(T_p - T_e)$ responsable des pertes convectives, limitant drastiquement les transferts d'énergie vers le milieu aquatique.

---

### Partie B : Bilan thermique transitoire lors d'une plongée prolongée

#### 6. Équation différentielle sur $T_c(t)$

Considérons le noyau thermique de masse $m_c$, assimilé à une phase condensée indilatable et incompressible d'énergie interne $U = m_c c T_c(t)$.
Pendant une durée élémentaire $\mathrm{d}t$, le premier principe de la thermodynamique appliqué au noyau s'écrit :
$$\mathrm{d}U = \delta Q_\text{ech} + \delta W_\text{autre} = \left( P_\text{met}' - \Phi_\text{pertes}(t) \right) \mathrm{d}t$$

Soit en dérivant par rapport au temps :
$$m_c c \frac{\mathrm{d}T_c}{\mathrm{d}t} = P_\text{met}' - \frac{T_c(t) - T_e}{R_\text{th}}$$

#### 7. Mise sous forme canonique

Réorganisons les termes :
$$m_c c \frac{\mathrm{d}T_c}{\mathrm{d}t} + \frac{1}{R_\text{th}} T_c(t) = P_\text{met}' + \frac{T_e}{R_\text{th}}$$

En multipliant l'ensemble par $R_\text{th}$ :
$$m_c c R_\text{th} \frac{\mathrm{d}T_c}{\mathrm{d}t} + T_c(t) = T_e + R_\text{th} P_\text{met}'$$

On pose :
$$\tau = m_c c R_\text{th}$$
$$T_\text{eq} = T_e + R_\text{th} P_\text{met}'$$

L'équation devient :
$$\frac{\mathrm{d}T_c}{\mathrm{d}t} + \frac{T_c - T_\text{eq}}{\tau} = 0$$

#### 8. Calcul numérique de $\tau$

$$\tau = 280\ \text{kg} \times (3{,}5\cdot 10^3\ \text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}) \times 0{,}1016\ \text{K}\cdot\text{W}^{-1}$$
$$\tau = 9{,}80\cdot 10^5 \times 0{,}1016 \approx 9{,}96\cdot 10^4\ \text{s} \approx 27{,}7\ \text{h}$$

Le temps caractéristique de refroidissement du phoque est de l'ordre d'une journée en raison de son importante inertie thermique couplée à l'isolation du lard.

#### 9. Résolution de l'équation différentielle

L'équation différentielle linéaire d'ordre 1 avec second membre constant a pour solution générale :
$$T_c(t) = T_\text{eq} + A \exp\left(-\frac{t}{\tau}\right)$$

Avec la condition initiale $T_c(0) = T_{c,0} = 37{,}0\ \text{^\circ C}$ :
$$A = T_{c,0} - T_\text{eq}$$
D'où :
$$T_c(t) = T_\text{eq} + (T_{c,0} - T_\text{eq})\exp\left(-\frac{t}{\tau}\right)$$

Calculons au préalable la valeur de $T_\text{eq}$ avec le métabolisme de plongée $P_\text{met}' = 180\ \text{W}$ :
$$T_\text{eq} = -1{,}8\ \text{^\circ C} + (0{,}1016\ \text{K}\cdot\text{W}^{-1} \times 180\ \text{W}) = -1{,}8 + 18{,}3 = 16{,}5\ \text{^\circ C}$$

#### 10. Temps maximal avant hypothermie ($T_c = 35{,}0\ \text{^\circ C}$)

On cherche $t_\text{max}$ tel que :
$$\frac{T_c(t_\text{max}) - T_\text{eq}}{T_{c,0} - T_\text{eq}} = \exp\left(-\frac{t_\text{max}}{\tau}\right)$$

Soit :
$$t_\text{max} = \tau \ln\left( \frac{T_{c,0} - T_\text{eq}}{T_c(t_\text{max}) - T_\text{eq}} \right)$$

Application numérique :
$$T_{c,0} - T_\text{eq} = 37{,}0 - 16{,}5 = 20{,}5\ \text{^\circ C}$$
$$T_c(t_\text{max}) - T_\text{eq} = 35{,}0 - 16{,}5 = 18{,}5\ \text{^\circ C}$$
$$t_\text{max} = 9{,}96\cdot 10^4\ \text{s} \times \ln\left( \frac{20{,}5}{18{,}5} \right) = 9{,}96\cdot 10^4 \times \ln(1{,}1081) \approx 9{,}96\cdot 10^4 \times 0{,}1026 \approx 1{,}02\cdot 10^4\ \text{s}$$
$$t_\text{max} \approx 2{,}8\ \text{h} \approx 170\ \text{min}$$

**Conclusion biologique :**
Le temps nécessaire pour atteindre un seuil d'hypothermie significatif ($170\ \text{min}$) excède largement la durée typique des plongées d'apnée les plus extrêmes du phoque de Weddell (qui dépassent rarement $60\ \text{à}\ 90\ \text{min}$). L'inertie thermique assure une stabilité thermique suffisante pour que l'hypoxie, et non l'hypothermie, constitue le facteur d'arrêt limitant la plongée.

---

### Partie C : Analyse critique et limites du modèle biologique

#### 11. Limites du modèle physique et corrections physiologiques

1. **Approximation géométrique plane :** L'animal possède une géométrie proche d'un cylindre ou d'un ellipsoïde fuselé. En géométrie cylindrique de rayons $R_\text{int}$ et $R_\text{ext}$, la résistance conductive s'exprime par :
   $$R_\text{cond, cyl} = \frac{\ln(R_\text{ext}/R_\text{int})}{2\pi \lambda_l L}$$
   La surface externe d'échange étant plus grande que la surface interne du noyau, l'approximation plane sous-estime légèrement les pertes thermiques réelles (effet de surface amplificatrice).

2. **Conductivité constante et perfusion dynamique :** Dans la réalité, le lard n'est pas un isolant passif rigide : il est vascularisé. 
   * En état de vasodilatation (à la surface lors d'efforts intenses ou thermolyse), la convection sanguine court-circuite la conduction du lard, augmentant drastiquement sa conductivité apparente.
   * En plongée, la vasoconstriction périphérique est totale mais non uniforme : les muscles locomoteurs en travail continuent de générer une puissance thermique locale hétérogène, invalidant l'hypothèse d'une température du noyau spatialement uniforme.

#### 12. Échangeurs à contre-courant dans les appendices

Les nageoires ne possèdent pas d'épaisseur protectrice de lard significative afin de préserver l'hydrodynamisme et la mobilité articulaire. Pour limiter les pertes de chaleur, le système vasculaire met en œuvre un **système d'échangeur à contre-courant** (*rete mirabile*) :

* **Anatomie :** Les artères transportant du sang chaud issu du cœur vers les extrémités sont entourées d'un réseau dense de veines satellites ramenant le sang froid de la périphérie.
* **Principe thermodynamique :** Le sang artériel chaud cède sa chaleur par conduction au sang veineux froid tout au long du trajet vasculaire longitudinal. Le sang arrivant à la surface de la nageoire est donc déjà précoulé à une température proche de l'eau ambiante, réduisant le flux déperditif externe $\Phi \propto (T_\text{nageoire} - T_e)$. Réciproquement, le sang veineux réchauffé revient vers le noyau avec une déperdition enthalpique minimale pour les organes vitaux.