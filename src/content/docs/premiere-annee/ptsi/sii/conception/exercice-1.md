---
title: 'Exercice 1 : Analyse fonctionnelle'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse fonctionnelle et critique d'un système mécatronique

## Énoncé

Le système étudié est un **système automatisé de dosage et de sertissage de flacons** utilisé dans l'industrie pharmaceutique. L'étude se focalise sur le poste d'amenage et de positionnement du flacon avant l'opération de sertissage. 

Le cahier des charges impose une cadence de $60\text{ flacons/min}$. Le flacon (masse $m = 50\text{ g}$, diamètre $\Phi = 30\text{ mm}$, hauteur $h = 80\text{ mm}$) arrive par un tapis roulant, est stoppé par un vérin de blocage, puis est transféré dans un nid de positionnement par un bras actionné par un moteur pas-à-pas associé à une transmission par courroie crantée.

L'objectif de ce problème est de modéliser le besoin, d'établir les chaînes fonctionnelles, de caractériser les flux (matière, énergie, information) et d'effectuer une analyse critique des limites du modèle cinématique et dynamique retenu.

---

## Questions

### Partie 1 : Expression du besoin et modélisation macroscopique
1. À l'aide de l'outil Bête à Cornes, définir le besoin associé au poste de transfert des flacons.
2. Établir le diagramme des interactions (pieuvre) du système en distinguant les fonctions principales et les fonctions contraintes. Préciser le milieu extérieur.

### Partie 2 : Analyse fonctionnelle interne (NF EN 61355 / SADT)
3. Rédiger la fonction globale du sous-système de transfert $\text{A-0}$.
4. Décomposer cette fonction en sous-fonctions $\text{A1}$, $\text{A2}$ et $\text{A3}$ en identifiant les flux entrants et sortants (Matière, Énergie, Information).

### Partie 3 : Analyse critique et limites du modèle
5. Le cahier des charges fonctionnel (CDCF) impose un positionnement du flacon à $\pm 0,1\text{ mm}$ près. Le modèle géométrique du moteur pas-à-pas utilisé suppose un entraînement sans glissement et une parfaite rigidité de la courroie. 
   * Citer au moins deux phénomènes physiques réels non pris en compte dans ce modèle idéal.
   * Proposer une démarche critique permettant de valider ou invalider le modèle vis-à-vis des exigences du CDCF.

---

## Pistes et indications

* **Pour la Q1 et Q2** : Pensez à identifier clairement la matière d'œuvre (le flacon) et l'action de l'environnement (opérateur, énergie électrique, sol, etc.).
* **Pour la Q4** : Distinguez bien le traitement de l'information (carte commande), l'apport d'énergie (actionneur) et la conversion mécanique (effecteur).
* **Pour la Q5** : Songez aux aspects dynamiques (élasticité de la courroie, vibrations, effets inertiels) qui s'écartent de la statique ou de la cinématique pure.

---

## Corrigé pas à pas

### Partie 1 : Expression du besoin et modélisation macroscopique

1. **Bête à Cornes :**
   * *À qui rend-il service ?* Le flacon pharmaceutique / La ligne de production globale.
   * *Sur quoi agit-il ?* Le flacon en fin de tapis d'amenage.
   * *Dans quel but ?* Positionner avec précision le flacon dans le nid de sertissage pour permettre l'opération suivante à une cadence de $60\text{ flacons/min}$.
   * *Énoncé du besoin :* "Permettre au système de production de transférer et positionner le flacon depuis le tapis d'amenage jusqu'au poste de sertissage."

2. **Diagramme des interactions (Pieuvre) :**
   * **FP1 :** Transférer le flacon du tapis vers le poste de sertissage.
   * **FC1 :** S'adapter à l'énergie électrique du réseau.
   * **FC2 :** Résister au milieu ambiant (pharmaceutique, nettoyage).
   * **FC3 :** Communiquer avec l'automate programmable industriel (API) de la ligne.
   * **FC4 :** Respecter les exigences de cadence et de sécurité opérateur.

---

### Partie 2 : Analyse fonctionnelle interne (SADT)

3. **Fonction globale $\text{A-0}$ :**
   * *Nom :* Transférer et positionner le flacon.
   * *Matière d'œuvre entrante (MOE) :* Flacon non positionné (sur tapis) + Énergie électrique + Consignes de l'API.
   * *Matière d'œuvre sortante (MOS) :* Flacon positionné (dans le nid) + Informations d'état + Énergie dissipée.

4. **Décomposition fonctionnelle :**
   * **A1 : Acquérir et traiter les consignes** (Entrée : Consignes API / Sortie : Ordres électriques).
   * **A2 : Convertir et transmettre l'énergie** (Entrée : Ordres électriques + Énergie élec. / Sortie : Énergie mécanique de translation).
   * **A3 : Guider et positionner le flacon** (Entrée : Énergie mécanique + Flacon non positionné / Sortie : Flacon positionné).

---

### Partie 3 : Analyse critique et limites du modèle

5. **Analyse critique des limites du modèle :**
   * *Phénomènes physiques non modélisés :* 
     1. **L'élasticité de la courroie crantée et des liaisons :** La courroie présente une raideur axiale $k$ finie. Lors des phases d'accélération brutales (inhérentes à la haute cadence de $60\text{ flacons/min}$), il se produit un phénomène transitoire de type masse-ressort, créant un déphasage entre la position du rotor du moteur et celle de l'effecteur (le bras).
     2. **Les vibrations et le comportement inertiel du flacon :** Le flacon n'est pas un solide indéformable posé sur un support infiniment rigide. Son centre de gravité étant situé à $h/2 = 40\text{ mm}$ de sa base, les accélérations horizontales engendrent un moment de basculement et un risque de **glissement ou de basculement du flacon** dans son logement si l'accélération dépasse une limite $\gamma_{\text{max}}$.
   
   * *Démarche de validation :* 
     Pour valider le respect de l'exigence ($\pm 0,1\text{ mm}$), le modèle cinématique idéal doit être enrichi par un **modèle multiphysique dynamique** (type bloc-diagramme avec la transformée de Laplace ou simulation par éléments finis/multicorps). Il convient d'écrire le PFD sur le système couplé {moteur + courroie + bras + flacon} en incluant la raideur $k$ et l'amortissement $c$. Si l'erreur dynamique maximale (dépassement + trainage) reste inférieure à $0,1\text{ mm}$ sous les pires conditions de charge, le modèle est validé ; dans le cas contraire, un correcteur cinématique (loi de commande en S ou trapézoïdale) doit être implémenté pour lisser les à-coups.