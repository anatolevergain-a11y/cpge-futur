---
title: 'Exercice 2 : Bernoulli et statique des fluides'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un dispositif hydraulique et aérodynamique

*Ce problème aborde de manière couplée la statique des fluides (hydrostatique) et la dynamique des fluides parfaits (relation de Bernoulli), deux piliers du programme de physique en BCPST.*

---

## Partie I : Étude d'un manomètre en U (Statique des fluides)

On considère un tube en $U$ partiellement rempli d'un liquide manométrique (de masse volumique $\rho_m$). Ce tube est branché sur une canalisation horizontale dans laquelle s'écoule un gaz, assimilé à un fluide parfait de masse volumique $\rho_g$, telle que $\rho_g \ll \rho_m$. 

Le dispositif permet de mesurer la différence de pression entre deux points.

```
          Gaz (rho_g)
      ====================>
      [Canalisation]
            |
            | (Prise de pression)
            v
         +-----+
         |     |
        _|_   _|_
       /   \ /   \  <-- Liquide (rho_m)
      |     v     |
      |           |
      +-----------+
```

1. **Rappeler** la loi fondamentale de la statique des fluides (LFSF) dans un champ de pesanteur uniforme $\vec{g} = -g \vec{e}_z$ (avec l'axe $z$ orienté verticalement vers le haut).
2. **Exprimer** la variation de pression $\Delta P$ entre deux points situés à une même verticale dans un fluide au repos.
3. Soit $z_1$ et $z_2$ les niveaux de la surface libre du liquide manométrique dans les deux branches du tube en $U$. En négligeant la variation de pression dans la colonne de gaz entre les deux branches, **établir** la relation entre la différence de pression $\Delta P = P_A - P_B$ dans la canalisation et la dénivellation $\Delta z = z_2 - z_1$.

---

## Partie II : Écoulement et théorème de Bernoulli

On s'intéresse maintenant à l'écoulement du gaz dans la canalisation. La canalisation présente un convergent : sa section passe brusquement (ou progressivement) d'une aire $S_1$ à une aire $S_2$ (avec $S_2 < S_1$).

Le gaz est supposé incompressible et indilatable (masse volumique $\rho_g = \text{cste}$), et l'écoulement est stationnaire, parfait et irrotationnel.

4. **Énoncer** le théorème de Bernoulli le long d'une ligne de courant en précisants les conditions de validité de ce théorème.
5. À l'aide de l'équation de conservation de la masse (équation de continuité), **exprimer** la vitesse $v_2$ du gaz dans la section $S_2$ en fonction de la vitesse $v_1$ dans la section $S_1$ et du rapport des sections $s = S_2 / S_1$.
6. En appliquant le théorème de Bernoulli entre le point 1 (section $S_1$) et le point 2 (section $S_2$), situés sur la même horizontale, **établir** l'expression de la surpression ou dépression $\Delta P = P_1 - P_2$ en fonction de $\rho_g$, $v_1$ et $s$.

---

## Partie III : Couplage et mesure de vitesse (Effet Venturi)

On relie les prises de pression des sections $S_1$ et $S_2$ aux deux branches du tube en $U$ de la Partie I.

7. **Exprimer** la vitesse $v_1$ du gaz dans la canalisation en fonction de $\rho_m$, $\rho_g$, $g$, $\Delta z$ (dénivellation du liquide manométrique) et du rapport des sections $s$.
8. **Analyse critique :** 
   - A-t-on le droit de négliger la masse volumique du gaz $\rho_g$ devant celle du liquide manométrique $\rho_m$ ? Justifier quantitativement avec des ordres de grandeur usuels ($\rho_g \approx 1{,}2 \text{ kg}\cdot\text{m}^{-3}$ pour l'air, $\rho_m \approx 1000 \text{ kg}\cdot\text{m}^{-3}$ pour l'eau).
   - Que se passerait-il si l'on augmentait trop la vitesse $v_1$ dans le convergent ? Quel phénomène physique limite la validité du modèle ?

---
---

# CORRIGÉ ET GUIDAGE PAS À PAS

## Partie I : Étude d'un manomètre en U_1. **Loi fondamentale de la statique des fluides :**
   Dans un fluide au repos, soumis à un champ de pesanteur $\vec{g} = -g \vec{e}_z$, la variation de pression est donnée par :
   $$\text{d}P = \rho \vec{g} \cdot \text{d}\vec{OM}$$
   Soit sous forme locale :
   $$\vec{\nabla} P = \rho \vec{g}$$

2. **Variation de pression verticale :**
   En projetant selon l'axe vertical $(O_z)$ orienté vers le haut ($\vec{g} = -g \vec{e}_z$):
   $$\frac{\text{d}P}{\text{d}z} = -\rho g$$
   Entre deux zéniths $z_A$ et $z_B$ d'une même colonne de fluide homogène :
   $$P(B) - P(A) = -\rho g (z_B - z_A)$$

3. **Calcul de la dénivellation :**
   Puisque le gaz a une masse volumique $\rho_g$ très faible devant celle du liquide manométrique ($\rho_g \ll \rho_m$), on peut négliger la variation de pression dans les colonnes de gaz. Ainsi, la pression au sommet de la branche 1 est égale à $P_1$, et dans la branche 2 à $P_2$.
   En appliquant la LFSF dans le liquide manométrique entre les deux surfaces libres situées aux hauteurs $z_1$ et $z_2$ :
   $$P_{\text{interface, 1}} - P_{\text{interface, 2}} = -\rho_m g (z_1 - z_2)$$
   Comme les interfaces sont en contact avec le gaz aux pressions $P_1$ et $P_2$ (et que les variations de pression dans le gaz entre la canalisation et les interfaces sont négligeables) :
   $$P_1 - P_2 = \rho_m g (z_2 - z_1) = \rho_m g \Delta z$$

---

## Partie II : Éconoulement et théorème de Bernoulli

4. **Théorème de Bernoulli :**
   Le long d'une ligne de courant, pour un écoulement stationnaire, incompressible, d'un fluide parfait et non visqueux, le trinôme de Bernoulli se conserve :
   $$P + \frac{1}{2}\rho v^2 + \rho gz = \text{cste}$$

5. **Équation de continuité :**
   Pour un écoulement stationnaire et incompressible, le débit massique (ou volumique) se conserve :
   $$Q_v = S_1 v_1 = S_2 v_2$$
   On en déduit :
   $$v_2 = \frac{S_1}{S_2} v_1 = \frac{v_1}{s}$$
   *(avec $s = S_2 / S_1 < 1$)*.

6. **Application de Bernoulli :**
   Les points 1 et 2 étant sur la même horizontale ($z_1 = z_2$), la conservation de Bernoulli s'écrit :
   $$P_1 + \frac{1}{2}\rho_g v_1^2 = P_2 + \frac{1}{2}\rho_g v_2^2$$
   $$\Delta P = P_1 - P_2 = \frac{1}{2}\rho_g (v_2^2 - v_1^2) = \frac{1}{2}\rho_g v_1^2 \left(\frac{1}{s^2} - 1\right)$$

---

## Partie III : Couplage et mesure de vitesse

7. **Expression de la vitesse $v_1$ :**
   En combinant les résultats de la Partie I et de la Partie II :
   $$\Delta P = \rho_m g \Delta z = \frac{1}{2}\rho_g v_1^2 \left(\frac{1}{s^2} - 1\right)$$
   On isole $v_1$ :
   $$v_1 = \sqrt{\frac{2 \rho_m g \Delta z}{\rho_g \left(\frac{1}{s^2} - 1\right)}}$$

8. **Analyse critique :**
   * **Comparaison des masses volumiques :** 
     Avec $\rho_g \approx 1{,}2 \text{ kg}\cdot\text{m}^{-3}$ et $\rho_m \approx 1000 \text{ kg}\cdot\text{m}^{-3}$, on a $\rho_g \ll \rho_m$ (un rapport de l'ordre de $10^3$). Il est donc tout à fait légitime de négliger le terme $\rho_g$ dans l'expression de la statique des fluides de la partie I (la variation de pression dans les colonnes de gaz est de l'ordre de $\rho_g g \Delta z$, négligeable devant $\rho_m g \Delta z$).
   * **Limites du modèle (Cavitation / Compressibilité / Viscosité) :**
     - *Compressibilité :* Si la vitesse $v_2$ devient trop importante (généralement si $v_2 > 0{,}3 \, c_{\text{son}}$, soit environ $100 \text{ m}\cdot\text{s}^{-1}$ dans l'air), les variations de pression induisent des variations de masse volumique significatives : l'hypothèse de l'incompressibilité du gaz ($\rho_g = \text{cste}$) n'est plus valide.
     - *Phénomène de cavitation ou décrochement :* Si la vitesse dans le col augmente, $P_2$ chute fortement. Pour un gaz, cela peut mener à des vitesses supersoniques locales (régime bloqué). Si le fluide était un liquide, une pression $P_2$ inférieure à la pression de vapeur saturante provoquerait une vaporisation (cavitation), ruinant l'hypothèse d'un écoulement monophasique parfait.