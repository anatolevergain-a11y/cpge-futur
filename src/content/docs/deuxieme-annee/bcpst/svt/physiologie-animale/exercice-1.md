---
title: 'Exercice 1 : Régulation de la pression artérielle'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse intégrée et cinétique des boucles de régulation de la pression artérielle chez les Mammifères

---

## Énoncé

Chez les Mammifères, le maintien de la pression artérielle moyenne (PAM) autour d'une valeur de consigne est un impératif physiologique majeur garantissant la perfusion tissulaire. Une chute brutale de la PAM (lors du passage de l'clinostatisme à l'orthostatisme, ou lors d'une hémorragie) met en jeu des mécanismes correctteurs rapides de nature nerveuse (baroréflexe), puis des mécanismes lents hormonaux et rénaux.

On se propose d'étudier l'efficacité, les limites et la chronologie de ces boucles de régulation à partir de données expérimentales obtenues chez un modèle murin ou canin.

### Données physiologiques de référence (au repos chez le Chien) :
*   Pression artérielle moyenne ($\text{PAM}$) : $100\text{ mmHg}$ (soit environ $13,3\text{ kPa}$)
*   Fréquence cardiaque ($\text{FC}$) : $75\text{ battements}\cdot\text{min}^{-1}$
*   Volume d'éjection systolique ($\text{VES}$) : $20\text{ mL}$
*   Débit cardiaque ($\text{DC} = \text{FC} \times \text{VES}$) : $1,5\text{ L}\cdot\text{min}^{-1}$
*   Résistances vasculaires systémiques ($\text{RVS}$) : calculées par la loi de Poiseuille analogique $\text{PAM} = \text{DC} \times \text{RVS}$

---

## Questions

### Partie 1 : Analyse de l'état basal et quantification des paramètres hémodynamiques
1. Calculer la valeur des résistances vasculaires systémiques ($\text{RVS}$) dans les conditions basales. Préciser l'unité cohérente (en $\text{mmHg}\cdot\text{min}\cdot\text{L}^{-1}$).
2. En déduire l'impact immédiat d'une hémorragie aiguë entraînant une perte de $15\%$ du volume sanguin total sur le débit cardiaque, en supposant dans un premier temps le tonus vasomoteur et la fréquence cardiaque constants (système non régulé).

### Partie 2 : Mise en jeu de la boucle de régulation rapide (Le Baroréflexe)
3. Schématiser sous forme de bloc-diagramme la boucle du baroréflexe artériel (capteurs, voies afférentes, centres intégrateurs, voies efférentes, effecteurs).
4. Suite à l'hémorragie, on observe in vivo une tachycardie et une vasoconstriction périphérique ramenant la $\text{PAM}$ à $90\text{ mmHg}$ au bout de $30\text{ secondes}$. 
   - Expliquer par quels mécanismes cellulaires et moléculaires au niveau du nœud sinusal (tissu autorythmique) la commande nerveuse autonome modifie la fréquence cardiaque.
   - Calculer le nouveau débit cardiaque sachant que le $\text{VES}$ est passé à $15\text{ mL}$ et la $\text{FC}$ à $110\text{ battements}\cdot\text{min}^{-1}$. Calculer les nouvelles $\text{RVS}$.

### Partie 3 : Analyse critique des limites du modèle et régulation à long terme
5. **Esprit concours (Analyse critique) :** Le baroréflexe est qualifié de système à "gain élevé" mais à "adaptation rapide". 
   - Expliquer ce que signifie physiologiquement l'adaptation des barorécepteurs (remise à zéro ou *resetting* en cas d'hypertension ou d'hypotension prolongée, $> 24\text{ h}$).
   - Discutez des limites de ce système lors d'une hypovolémie sévère prolongée. Quel organe prend le relais pour restaurer la volémie à long terme, et par quel effecteur hormonal majeur ?

---

## Pistes de réflexion

*   **Pour la Q1 :** Utiliser la relation analogique de la loi d'Ohm appliquée à l'appareil circulatoire. Attention aux homogénéités d'unités.
*   **Pour la Q2 :** Rappeler le lien direct entre volémie, retour veineux, pression de remplissage, volume d'éjection systolique et débit cardiaque (loi de Frank-Starling).
*   **Pour la Q4 :** Mobiliser les connaissances sur le système nerveux autonome (SNA) : orthosympathique (noradrénaline, récepteurs $\beta_1$) vs parasympathique (acétylcholine, récepteurs muscariniques $M_2$).
*   **Pour la Q5 :** Ne pas confondre la rapidité d'action (secondes) et la capacité de correction intégrale de la variable (le baroréflexe ne corrige l'erreur qu'à $50-80\%$, c'est un régulateur à gain proportionnel fini, il ne ramène pas la pression *exactement* à la consigne initiale).

---

## Corrigé pas à pas

### Partie 1 : Analyse de l'état basal

**1. Calcul des résistances vasculaires systémiques ($\text{RVS}$) :**
D'après la loi analogue d'Ohm : 
$$\text{PAM} = \text{DC} \times \text{RVS} \implies \text{RVS} = \frac{\text{PAM}}{\text{DC}}$$
$$\text{RVS} = \frac{100\text{ mmHg}}{1,5\text{ L}\cdot\text{min}^{-1}} \approx 66,67\text{ mmHg}\cdot\text{min}\cdot\text{L}^{-1}$$

**2. Impact immédiat de l'hémorragie (système non régulé) :**
Une perte de $15\%$ du volume sanguin réduit proportionnellement le retour veineux (diminution de la pression de remplissage circulatoire moyen). Par la loi de Frank-Starling, le volume d'éjection systolique ($\text{VES}$) chute d'environ $15\%$.
Si $\text{FC}$ et $\text{RVS}$ sont constants :
*   Nouveau $\text{VES} = 20 \times (1 - 0,15) = 17\text{ mL}$
*   Nouveau $\text{DC} = 75 \times 17 = 1,275\text{ L}\cdot\text{min}^{-1}$
*   Nouvelle $\text{PAM} = 1,275 \times 66,67 \approx 85\text{ mmHg}$ (chute immédiate de la pression).

---

### Partie 2 : Mise en jeu de la boucle de régulation rapide

**3. Schéma fonctionnel du baroréflexe :**
*   *Capteurs* : Barorécepteurs sinusiens (sinus carotidien) et aortiques (terminaisons nerveuses libres sensibles à l'étirement de la paroi artérielle).
*   *Voies afférentes* : Nerf de Hering (IX) et nerf de Cyon / vague (X).
*   *Centre intégrateur* : Centre cardio-régulateur et vasomoteur du bulbe rachidien (noyau du tractus solitaire - NTS).
*   *Voies efférentes* : Système nerveux autonome (Nerf vague X parasympathique cardio-modérateur + Nerfs cardiaques et vasoconstricteurs orthosympathiques).
*   *Effecteurs* : Nœud sinusal, myocytes atriaux/ventriculaires, cellules musculaires lisses des artérioles (résistances).

**4. Analyse cellulaire et quantification :**
*   *Mécanisme cellulaire* : La baisse de pression diminue la fréquence des potentiels d'action afférents. Le bulbe rachidien interprète cela par une baisse tensionnelle et déclenche une **activation du système orthosympathique** et une **inhibition du parasympathique**.
    *   Au niveau du nœud sinusal : la noradrénaline se lie aux récepteurs $\beta_1$ couplés à une protéine $G_s$, activant l'adénylyl-cyclase, augmentant l'AMPc, ce qui majore l'ouverture des canaux $I_f$ (funny) et calciques (type L), augmentant la pente de dépolarisation diastolique spontanée $\rightarrow$ **Tachycardie**.
    *   Au niveau des artérioles : la noradrénaline se lie aux récepteurs $\alpha_1$ couplés à une protéine $G_q$, entraînant la voie $\text{IP}_3$/$\text{Ca}^{2+}$ intracellulaire et la vasoconstriction $\rightarrow$ **Hausse des $\text{RVS}$**.
*   *Quantification* :
    *   Nouveau $\text{DC} = \text{FC} \times \text{VES} = 110\text{ battements}\cdot\text{min}^{-1} \times 0,015\text{ L} = 1,65\text{ L}\cdot\text{min}^{-1}$.
    *   Calcul des nouvelles $\text{RVS}$ pour $\text{PAM} = 90\text{ mmHg}$ :
        $$\text{RVS} = \frac{\text{PAM}}{\text{DC}} = \frac{90}{1,65} \approx 54,5\text{ mmHg}\cdot\text{min}\cdot\text{L}^{-1}$$
        *(Note : La baisse apparente des RVS calculée ici s'explique par le fait que le VES a chuté plus drastiquement que prévu par compensation isolée, montrant la limite d'un modèle purement linéaire).*

---

### Partie 3 : Analyse critique et limites du modèle

**5. Limites et régulation à long terme :**
*   *Adaptation des barorécepteurs (*resetting*) :* Les barorécepteurs sont des mécanorécepteurs sensibles à la *variation* et à la valeur absolue de l'étirement. En cas de pression anormalement basse ou élevée de manière chronique, les canaux ioniques mécano-sensibles de leur membrane subissent une inactivation ou une modification de leur seuil d'activation. Le système nerveux central redéfinit la "valeur de consigne" : le baroréflexe devient inefficace pour corriger une hypotension au-delà de 24-48 heures, car il considère la nouvelle pression basse comme la "norme".
*   *Limites et relais à long terme :* Le baroréflexe a un **gain fini** (il ne corrige que partiellement l'erreur de pression, environ 50% à 80%) et s'épuise (adaptation). Lors d'une hémorragie sévère non compensée, c'est le **complexe rénine-angiotensine-aldostérone (CRAA)** rénal qui prend le relais :
    *   La baisse de pression de perfusion rénale et la stimulation orthosympathique des cellules juxtaglomérulaires entraînent la libération de **rénine**.
    *   La rénine convertit l'angiotensinogène en angiotensine I, transformée en **angiotensine II** (puissant vasoconstricteur et dipsogène).
    *   L'angiotensine II stimule la sécretion d'**aldostérone** par la corticosurrénale, favorisant la réabsorption rénale de $\text{Na}^+ donc d'eau, restaurant ainsi la volémie à l'échelle de plusieurs heures à jours.