---
title: 'Exercice 1 : Potentiel chimique et affinité'
description: 'Problème d entraînement type concours.'
---

# Concours BCPST — Physique-Chimie
## Problème guidé : Potentiel chimique, équilibre et ondes de réaction

*Ce problème aborde l'étude thermodynamique d'un système réactionnel en phase gazeuse, l'utilisation de la notion d'affinité chimique, ainsi que le lien avec des perturbations acoustiques (ondes) susceptibles de se propager dans le milieu réactionnel.*

---

### Partie I : Rappels de thermodynamique chimique et définition de l'affinité

On considère une réaction chimique symbolisée par son équation bilan :
$$\sum_{\text{i}} \nu_i \text{A}_i = 0$$
où $\nu_i$ représentent les nombres stœchiométriques algébriques (négatifs pour les réactifs, positifs pour les produits).

1. Exprimer la variation élémentaire d'enthalpie libre du système $dG$ à température $T$ et pression $P$ constantes, en faisant intervenir les potentiels chimiques $\mu_i$ des espèces et l'avancement de réaction $\xi$.
2. Définir l'affinité chimique $\mathcal{A}$ de la réaction. Quelle est la relation entre $\mathcal{A}$, l'avancement $\xi$ et la variation d'enthalpie libre de réaction $\Delta_r G$ ?
3. Rappeler l'expression du potentiel chimique $\mu_i$ d'un gaz parfait $A_i$ en fonction de sa pression partielle $P_i$, de la pression standard $P^\circ$ et du potentiel chimique standard $\mu_i^\circ(T)$. En déduire l'expression de l'affinité $\mathcal{A}$ en fonction de la constante d'équilibre $K^\circ(T)$ et du quotient de réaction $Q_r$.

---

### Partie II : Étude d'un équilibre spécifique en phase gazeuse

On étudie la dissociation du tétraoxyde de diazote en dioxyde d'azote selon l'équilibre :
$$\text{N}_2\text{O}_4(g) \rightleftharpoons 2\,\text{NO}_2(g)$$

À l'état initial ($t=0$), on introduit $n_0$ moles de $\text{N}_2\text{O}_4$ dans un récipient de volume $V$ maintenu à la température $T$. Il n'y a pas de $\text{NO}_2$ initialement. Soit $\alpha$ le taux de dissociation de $\text{N}_2\text{O}_4$ à l'équilibre.

4. Exprimer les quantités de matière de chaque espèce à l'équilibre en fonction de $n_0$ et $\alpha$. En déduire la quantité totale de matière $n_{\text{tot}}$ à l'équilibre.
5. Exprimer les pressions partielles $P(\text{N}_2\text{O}_4)$ et $P(\text{NO}_2)$ en fonction de la pression totale du système $P$, de $\alpha$ et de $n_{\text{tot}}$.
6. Écrire la relation traduisant l'équilibre chimique à l'aide de l'affinité $\mathcal{A}$, puis exprimer la constante d'équilibre $K^\circ(T)$ en fonction de $\alpha$, $P$ et $P^\circ$.
7. Comment évolue le taux de dissociation $\alpha$ si l'on augmente la pression totale $P$ à température constante ? Justifier rigoureusement à l'aide de la loi de Le Chatelier ou par une étude mathématique de l'expression de $K^\circ$.

---

### Partie III : Couplage avec une onde acoustique

Une onde acoustique se propageant dans ce gaz induit de très légères variations locales de pression et de température. Si la réaction chimique est suffisamment rapide pour suivre ces fluctuations, le système se réajuste en permanence (équilibre local).

8. La vitesse du son $c$ dans un fluide est donnée par la formule générale :
   $$c = \sqrt{\left(\frac{\partial P}{\partial \rho}\right)_S}$$
   où $\rho$ est la masse volumique du gaz et l'indice $S$ indique une transformation isentropique (adiabatique réversible). 
   Qualitativement, expliquer pourquoi la présence d'un équilibre chimique chimique modifie la compressibilité du milieu par rapport à un gaz inerte.

---
---

## CORRIGÉ PAS À PAS

### Partie I : Rappels de thermodynamique chimique et définition de l'affinité

1. **Variation de l'enthalpie libre :**
   À $T$ et $P$ constantes, la variation élémentaire de l'enthalpie libre $G$ du système s'écrit :
   $$dG = \sum_i \mu_i dn_i$$
   Par définition de l'avancement de réaction $\xi$, on a $dn_i = \nu_i d\xi$. Ainsi :
   $$dG = \left(\sum_i \nu_i \mu_i\right) d\xi$$

2. **Définition de l'affinité :**
   L'affinité chimique $\mathcal{A}$ est définie par :
   $$\mathcal{A} = -\sum_i \nu_i \mu_i$$
   On a donc :
   $$dG = -\mathcal{A} d\xi$$
   Par ailleurs, on sait que $\left(\frac{\partial G}{\partial \xi}\right)_{T,P} = \Delta_r G$. On en déduit la relation fondamentale :
   $$\mathcal{A} = -\Delta_r G$$

3. **Expression de l'affinité avec le quotient de réaction :**
   Pour un gaz parfait $\text{A}_i$, le potentiel chimique s'écrit :
   $$\mu_i(T, P_i) = \mu_i^\circ(T) + R T \ln\left(\frac{P_i}{P^\circ}\right)$$
   En injectant cette expression dans la définition de l'affinité :
   $$\mathcal{A} = -\sum_i \nu_i \left[ \mu_i^\circ(T) + R T \ln\left(\frac{P_i}{P^\circ}\right) \right]$$
   $$\mathcal{A} = -\sum_i \nu_i \mu_i^\circ(T) - R T \sum_i \ln\left(\frac{P_i}{P^\circ}\right)^{\nu_i}$$
   Reconnaissant que $\Delta_r G^\circ = \sum_i \nu_i \mu_i^\circ(T) = -R T \ln K^\circ(T)$ et le quotient de réaction $Q_r = \prod_i \left(\frac{P_i}{P^\circ}\right)^{\nu_i}$, il vient :
   $$\mathcal{A} = -\Delta_r G^\circ - R T \ln Q_r = -R T \ln\left(\frac{Q_r}{K^\circ(T)}\right)$$
   $$\mathcal{A} = R T \ln\left(\frac{K^\circ(T)}{Q_r}\right)$$

---

### Partie II : Étude d'un équilibre spécifique en phase gazeuse

4. **Bilan molaire à l'équilibre :**
   D'après l'équation $\text{N}_2\text{O}_4 \rightleftharpoons 2\,\text{NO}_2$ :
   * $n(\text{N}_2\text{O}_4) = n_0(1 - \alpha)$
   * $n(\text{NO}_2) = 2 n_0 \alpha$
   
   La quantité totale de matière à l'équilibre est :
   $$n_{\text{tot}} = n_0(1 - \alpha) + 2 n_0\alpha = n_0(1 + \alpha)$$

5. **Pressions partielles :**
   En appliquant la loi des gaz parfaits et la définition de la pression partielle ($P_i = x_i P$) :
   $$P(\text{N}_2\text{O}_4) = \frac{n(\text{N}_2\text{O}_4)}{n_{\text{tot}}} P = \frac{1 - \alpha}{1 + \alpha} P$$
   $$P(\text{NO}_2) = \frac{n(\text{NO}_2)}{n_{\text{tot}}} P = \frac{2\alpha}{1 + \alpha} P$$

6. **Constante d'équilibre et expression de $K^\circ$ :**
   À l'équilibre, l'affinité s'annule ($\mathcal{A} = 0$), ce qui implique $Q_r = K^\circ(T)$.
   $$K^\circ(T) = \frac{\left(\frac{P(\text{NO}_2)}{P^\circ}\right)^2}{\left(\frac{P(\text{N}_2\text{O}_4)}{P^\circ}\right)}$$
   En remplaçant par les expressions des pressions partielles :
   $$K^\circ(T) = \frac{\left(\frac{2\alpha}{1+\alpha}\frac{P}{P^\circ}\right)^2}{\frac{1-\alpha}{1+\alpha}\frac{P}{P^\circ}} = \frac{4\alpha^2}{1-\alpha^2} \frac{P}{P^\circ}$$

7. **Influence de la pression (Loi de Le Chatelier) :**
   L'expression de la constante d'équilibre se réécrit :
   $$\frac{4\alpha^2}{1-\alpha^2} = K^\circ(T) \frac{P^\circ}{P}$$
   Lorsque la pression $P$ augmente, le terme de droite $\frac{K^\circ P^\circ}{P}$ diminue. 
   Puisque la fonction $\alpha \mapsto \frac{4\alpha^2}{1-\alpha^2}$ est strictement croissante sur $[0, 1]$, le taux de dissociation $\alpha$ doit **diminuer** lorsque $P$ augmente.
   *Interprétation physique (Le Chatelier) :* La réaction directe s'accompagne d'une augmentation du nombre de moles de gaz ($\Delta\nu = +1$). Une augmentation de la pression extérieure favorise le sens qui tend à contrer cette variation, c'est-à-dire le sens indirect (diminution du nombre de moles de gaz), ce qui réduit le taux de dissociation.

---

### Partie III : Couplage avec une onde acoustique

8. **Analyse critique et physique du couplage :**
   * **Sans réaction chimique (gaz inerte) :** Une compression rapide par l'onde acoustique augmente la pression et la température selon une loi adiabatique classique.
   * **Avec réaction chimique rapide :** Lorsque la pression augmente brutalement lors du passage de la compression de l'onde, l'équilibre est déplacé vers la gauche ($\text{N}_2\text{O}_4$). Cette conversion consomme des $\text{NO}_2$ et produit du $\text{N}_2\text{O}_4$, tout en libérant de la chaleur (si la réaction est exothermique). 
   * **Conséquence sur la vitesse du son :** Ce "jeu" chimique absorbe ou relâche de l'énergie et modifie la variation effective du volume par rapport à la pression. Le milieu se comporte comme un milieu "plus mou" (compressibilité accrue à basse fréquence ou relaxation chimique). Cela provoque une **dispersion acoustique** (la vitesse du son dépend de la fréquence de l'onde) et une **atténuation** de l'onde par dissipation énergétique liée au retour à l'équilibre chimique.