---
title: 'Cours : Physiologie animale'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Physiologie Animale (BCPST 2)

---

## 1. Introduction et Principes Généraux

La physiologie animale étudie le fonctionnement des organismes vivants, de l'échelle moléculaire à l'échelle de l'organisme entier, en insistant sur les mécanismes d'intégration et de régulation permettant le maintien de l'homéostasie.

### Définitions Fondamentales
*   **Homéostasie :** Capacité d'un organisme à maintenir certaines constantes de son milieu interne (température, pH, volémie, pression partielle en gaz) malgré les variations du milieu extérieur.
*   **Milieu intérieur :** Ensemble des liquides extracellulaires (liquide interstitiel et plasma sanguin chez les vertébrés) baignant les cellules, défini par Claude Bernard.
*   **Boucle de régulation (rétrocontrôle ou *feedback*) :** Système comprenant un capteur (récepteur), un centre intégrateur (système nerveux ou hormonal) et un effecteur (muscle, glande), visant à annuler l'écart entre une valeur mesurée et une valeur de consigne.

---

## 2. Le Système Nerveux et la Neurophysiologie

### A. Le Potentiel de Repos et le Potentiel d'Action

#### Définitions
*   **Potentiel de repos ($V_m$) :** Différence de potentiel électrique transmembranaire d'une cellule excitable au repos, de l'ordre de $-70\text{ mV}$ à $-90\text{ mV}$ (intérieur négatif par rapport à l'extérieur). Il est dû à l'inégale répartition des ions (principalement $\text{K}^+$, $\text{Na}^+$ et $\text{Cl}^-$) et à la perméabilité sélective membranaire (canaux de fuite $\text{K}^+$).
*   **Potentiel d'action (PA) :** Inversion brève et stéréotypée du potentiel membranaire, suivant la **loi du tout ou rien**.

#### Théorème / Mécanisme du Potentiel d'Action
Le PA se déroule en plusieurs phases chronologiques :
1.  **Dépolarisation :** Suite à l'atteinte du **seuil de déclenchement** (ex: $-50\text{ mV}$), ouverture massive et voltage-dépendante des canaux $\text{Na}^+$ sodiques. Entrée massive de $\text{Na}^+$ selon son gradient électrochimique ($V_m$ devient positif).
2.  **Repolarisation :** Inactivation des canaux $\text{Na}^+$ et ouverture des canaux $\text{K}^+$ voltage-dépendants. Sortie massive d'ions $\text{K}^+$ restaurant la négativité interne.
3.  **Hyperpolarisation post-potentiel :** Fermeture lente des canaux $\text{K}^+$, entraînant un dépassement transitoire du potentiel de repos.
4.  **Retour à l'équilibre :** Rôle fondamental de la **pompe $\text{Na}^+/\text{K}^+$-ATPase** (transport actif consommant de l'ATP) qui expulse $3\text{ Na}^$ et fait entrer $2\text{ K}^$ pour restaurer les gradients ioniques de repos.

```
Potentiel (mV)
  +30 |        /\  (Dépolarisation / Influx Na+)
      |       /  \
    0 |------/----\----------------- (Seuil)
      |     /      \ (Repolarisation / Sortie K+)
  -70 |____/        \____ (Hyperpolarisation)
      +-----------------------------
           Temps (ms)
```

### B. La Synapse et la Neurotransmission

#### Définitions
*   **Synapse chimique :** Jonction spécialisée permettant la transmission d'un signal d'un neurone à une cellule cible (nerveuse, musculaire ou glandulaire) par l'intermédiaire d'un messager chimique : le **neurotransmetteur** (ex: acétylcholine, glutamate, GABA).

#### Méthodes : Étude de la transmission synaptique
1.  Arrivée du PA au niveau du bouton terminal présynaptique.
2.  Ouverture des canaux $\text{Ca}^{2+}$ voltage-dépendants et influx d'ions $\text{Ca}^{2+}$.
3.  Exocytose des vésicules synaptiques contenant le neurotransmetteur dans la fente synaptique.
4.  Fixation du neurotransmetteur sur ses récepteurs spécifiques post-synaptiques (canaux ioniques ligand-dépendants ou récepteurs métabotropiques).
5.  Génération d'un **PPSE** (Potentiel Post-Synaptique Excitateur, ex: entrée de $\text{Na}^+$) ou d'un **PPSI** (Potentiel Post-Synaptique Inhibiteur, ex: entrée de $\text{Cl}^-$ ou sortie de $\text{K}^+$).
6.  Intégration spatiale et temporelle au niveau du cône axonique : sommation algébrique des PPSE et PPSI. Si le seuil est atteint $\rightarrow$ naissance d'un PA.

---

## 3. Le Système Hormonal et la Communication Endocrinienne

### Définitions
*   **Hormone :** Messager chimique sécrété par une glande endocrine, transporté par le sang (ou l'hémolymphe), agissant à distance sur des cellules cibles possédant des récepteurs spécifiques, à de très faibles concentrations.

### Exemples classiques en BCPST : L'axe hypothalamo-hypophysaire
L'hypothalamus intègre des signaux nerveux et sécrète des **neurohormones** (ex: TRH, GnRH) qui stimulent l'adénohypophyse (hypophyse antérieure). Celle-ci sécrète alors des **hormones tropines** (ex: TSH, LH/FSH) qui contrôlent une glande périphérique (thyroïde, gonades).

#### Pièges à éviter
*   **Ne pas confondre** voie nerveuse (rapide, ciblée, transitoire) et voie hormonale (lente, diffuse, durable).
*   Bien maîtriser les boucles de rétrocontrôle (**feedbacks négatifs** et **positifs**) : une hormone périphérique inhibe souvent (feedback négatif) la sécrétion de ses hormones trophiques amont (ex: le cortisol inhibe l'ACTH et la CRH).

---

## 4. Physiologie Cardiovasculaire et Respiratoire

### A. Le Cœur et la Circulation Sanguine

#### Définitions
*   **Débit cardiaque ($Q$ ou $DC$) :** Volume de sang éjecté par un ventricule par unité de temps. 
    $$\text{DC} = \text{Volume d'éjection systolique (VES)} \times \text{Fréquence cardiaque (FC)}$$
*   **Pression artérielle ($PA$) :** Pression exercée par le sang sur la paroi des artères, fonction du débit cardiaque et des résistances vasculaires périphériques ($R$).
    $$PA \propto \text{DC} \times R$$

### B. Les Échanges Gazeux Respiratoires

#### Théorème : Loi de Fick de la diffusion
Le flux de gaz ($J$) traversant une surface respiratoire est régi par la loi de Fick :
$$J = D \cdot S \cdot \frac{\Delta P}{e}$$
*   $D$ : coefficient de diffusion du gaz.
*   $S$ : surface d'échange (très grande chez les métazoaires, ex: alvéoles pulmonaires, branchies).
*   $\Delta P$ : différence de pression partielle du gaz de part et d'autre de la membrane.
*   $e$ : épaisseur de la membrane d'échange (très faible, une assise cellulaire).

---

## 5. Osmorégulation et Excrétion

### Définitions
*   **Osmolarité :** Concentration totale en particules osmotiquement actives par litre de solution (exprimée en $\text{mOsm}\cdot\text{L}^{-1}$).
*   **Euryhalin vs Sténohalin :** Organismes capables de tolérer de grandes variations de salinité du milieu (ex: saumon) comparés à ceux ne supportant que de faibles variations.

### Mécanismes adaptatifs
*   **Poissons d'eau douce :** Milieu hypertonique par rapport au poisson. L'eau entre par osmose au niveau des branchies. Le poisson ne boit pas, excrète une urine très abondante et hyposmotique, et réabsorbe activement les ions $\text{Na}^+$ et $\text{Cl}^-$ par les branchies.
*   **Poissons d'eau de mer :** Milieu hypotonique (le poisson perd de l'eau par osmose). Il boit continuellement de l'eau de mer, excrète activement les ions monovalents par les branchies (cellules à chlorures) et produit un volume d'urine très réduit et concentré.

---

## 6. Synthèse des Méthodes et Pièges (Concours Agro-Veto / G2E)

### Méthodes de résolution d'un problème de physiologie
1.  **Identifier la variable régulée** (ex: calcémie, volémie, $\text{PaO}_2$).
2.  **Repérer la perturbation** (ex: hémorragie, jeûne, effort physique).
3.  **Retracer la boucle de régulation complète** :
    *   *Capteur* $\rightarrow$ *Voie afférente* $\rightarrow$ *Centre intégrateur* $\rightarrow$ *Voie efférente* $\rightarrow$ *Effecteur* $\rightarrow$ *Réponse (correction de la variable)*.
4.  Toujours relier la physiologie cellulaire à la fonction globale de l'organisme (approche systémique).

### Pièges classiques en colle et à l'écrit
*   **Oublier l'unité** ou se tromper dans les ordres de grandeur (ex: potentiels en $\text{mV}$, concentrations en $\text{mmol}\cdot\text{L}^{-1}$).
*   Confondre **osmolarité** (nombre de moles de particules) et **molarité** (nombre de moles de molécules). Ne pas oublier la dissociation ionique (ex: $\text{NaCl} \rightarrow \text{Na}^+ + \text{Cl}^-$ double l'osmolarité).
*   Négliger le rôle de la **pompe $\text{Na}^+/\text{K}^+$-ATPase** dans le maintien des gradients électrochimiques de base indispensables à toute excitabilité cellulaire.