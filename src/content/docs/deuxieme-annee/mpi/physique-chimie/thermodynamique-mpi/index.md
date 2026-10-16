---
title: 'Cours : Thermodynamique et transferts'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'etude de la thermodynamique macroscopique repose sur la description d'un systeme thermodynamique $\Sigma$ echangeant de la matiere et de l'energie avec son exterieur.

- **Systeme ferme** : Aucun echange de matiere avec l'exterieur.
- **Variables d'etat** : Grandeurs macroscopiques caracterisant l'etat du systeme a l'equilibre (pression $P$, temperature $T$, volume $V$, nombre de moles $n$).
- **Fonctions d'etat** : Grandeurs dont la variation ne depend que de l'etat initial et de l'etat final, et non du chemin parcouru. Exemples : energie interne $U$, enthalpie $H$, entropie $S$.
- **Transferts thermiques ($Q$)** et **Travail ($W$)** : Modes d'echange d'energie macroscopique non associes a un deplacement de matiere. Ce ne sont pas des fonctions d'etat (leurs variations elementaires $\delta W$ et $\delta Q$ ne sont pas des differentielles totales exactes).

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Premier principe de la thermodynamique
Pour tout systeme ferme au repos macroscopique, la variation de l'energie interne $U$ entre un etat initial et un etat final est egale a la somme de l'energie recue sous forme de travail $W$ et de transfert thermique $Q$ :
$$\Delta U = W + Q$$
Sous forme infinitesimale :
$$dU = \delta W + \delta Q$$

### Second principe de la thermodynamique
Il existe une fonction d'etat extensive appelee entropie $S$, telle que pour toute evolution reelle (irreversible), la variation d'entropie s'ecrit :
$$dS = \delta S_{ech} + \delta S_{cree}$$
avec $\delta S_{cree} \ge 0$ (inegalite de Clausius). Pour une evolution reversible, $\delta S_{cree} = 0$.

### Demonstration cle : Expression du travail des forces de pression
Considerons un systeme gazeux contenu dans un cylindre ferme par un piston mobile de surface $S$, effectuant une translation de $dx$ selon l'axe Ox. La force exercee par le gaz sur le piston est $\vec{F} = -P_{\text{ext}} S \vec{u}_x$ (dans le cas d'une detente quasi-statique ou $P \approx P_{\text{ext}}$).
Le travail elementaire recu par le systeme lors du deplacement est :
$$\delta W = \vec{F}_{\text{gaz}\to\text{ext}} \cdot d\vec{x} = P_{\text{ext}} S \, dx = -P_{\text{ext}} dV$$
Pour une evolution quasi-statique :
$$\delta W = -P dV$$

### Transferts thermiques : Conduction thermique (Loi de Fourier)
La densite de flux thermique $\vec{j}_{\text{th}}$ (en $\text{W}\cdot\text{m}^{-2}$) dans un milieu au repos est proportionnelle au gradient de temperature :
$$\vec{j}_{\text{th}} = -\lambda \vec{\text{grad}}(T)$$
ou $\lambda$ est la conductivite thermique du milieu (en $\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$).

Equation de la chaleur (bilan d'energie local en absence de source volumique) :
$$\mu c \frac{\partial T}{\partial t} = \lambda \Delta T$$
avec $\mu$ la masse volumique, $c$ la capacite thermique massique et $\Delta$ l'operateur laplacien.

## 💡 3. Méthodes de calcul & Algorithmes

1. **Calcul des variations d'entropie pour un gaz parfait** :
   Pour un gaz parfait de capacites thermiques $C_V$ et $C_P$ constantes, la variation d'entropie entre un etat $1$ et un etat $2$ s'obtient en integrant la definition $dS = \frac{\delta Q_{\text{rev}}}{T}$.
   En utilisant le premier principe pour une transformation reversible ($\delta Q_{\text{rev}} = C_V dT + P dV$) et la loi des gaz parfaits ($PV = nRT$) :
   $$\Delta S = C_V \ln\left(\frac{T_2}{T_1}\right) + nR \ln\left(\frac{V_2}{V_1}\right)$$

2. **Methodologie de resolution d'un probleme de conduction thermique stationnaire** :
   - Poser l'equation de conservation en regime permanent ($\frac{\partial T}{\partial t} = 0$).
   - Simplifier selon les symetries et l'invariance des coordonnees (cartesien, cylindrique, spherique).
   - Integrer l'equation differentielle obtenue.
   - Appliquer les conditions aux limites (continuite de la temperature, flux impose ou echanges convectifs) pour determiner les constantes d'integration.

## ⚠️ 4. Pièges classiques aux Concours

- **Confondre fonction d'etat et grandeur liee au chemin** : Rediger systematiquement $dU$ (differentielle) et $\delta W$ ou $\delta Q$ (quantites elementaires). Ne jamais ecrire $\Delta W = W_2 - W_1$ car le travail n'est pas une fonction d'etat.
- **Oublier la condition de reversibilite** : L'utilisation de $\delta Q = T dS$ n'est valable que pour une evolution quasi-statique *et* reversible. Pour une evolution irreversible, il faut calculer $\Delta S$ en imaginant un chemin reversible fictif reliant les memes etats d'equilibre initial et final.
- **Erreurs de signes dans les bilans energetiques** : Toujours definir clairement le systeme et orienter les flux d'energie (recus par le systeme comptes positivement).
- **Homogeneite des unites** : Verifier systematiquement les dimensions (par exemple, attention aux capacites thermiques massiques en $\text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$ versus molaires en $\text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$).