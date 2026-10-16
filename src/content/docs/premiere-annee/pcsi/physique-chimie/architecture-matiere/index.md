---
title: 'Cours : Architecture de la matière'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

L'architecture de la matière à l'échelle microscopique repose sur la description quantique de l'atome et l'étude de la liaison chimique, qui permettent d'expliquer les propriétés macroscopiques des systèmes chimiques (états de la matière, réactivité, cohésion).

### 1.1. Description subatomique et modèle quantique de l'atome
*   **Particules fondamentales :** L'atome est constitué d'un noyau central dense (composé de nucléons : protons de charge $+e$ et neutrons) et d'un cortège électronique.
*   **Nombre de charges et masse :** 
    *   Numéro atomique $Z$ : nombre de protons.
    *   Nombre de masse $A$ : nombre total de nucléons. Un nucléide est noté ${}^{A}_{Z}\text{X}$.
*   **Modèle ondulatoire (Onde de de Broglie et équation de Schrödinger) :** 
    *   À l'échelle atomique, l'électron n'a pas de trajectoire déterminée. Son état est décrit par une **fonction d'onde** $\psi$ (ou orbitale atomique).
    *   La densité de probabilité de présence de l'électron dans un volume élémentaire $d\tau$ est donnée par $|\psi|^2 d\tau$.

### 1.2. Nombres quantiques et structure électronique
L'état d'un électron dans un atome hydrogénoïde est caractérisé par trois nombres quantiques principaux issus de la résolution de l'équation de Schrödinger :
1.  **Nombre quantique principal $n$ ($n \in \mathbb{N}^*$) :** Détermine l'énergie principale et la taille de l'orbitale.
2.  **Nombre quantique azimutal $l$ ($0 \le l \le n-1$) :** Détermine le moment cinétique orbital et la géométrie de l'orbitale (notations usuelles : $l=0 \rightarrow s$, $l=1 \rightarrow p$, $l=2 \rightarrow d$, $l=3 \rightarrow f$).
3.  **Nombre quantique magnétique $m_l$ ($-l \le m_l \le l$) :** Détermine l'orientation spatiale de l'orbitale.
4.  **Nombre quantique de spin $m_s$ ($m_s = \pm \frac{1}{2}$) :** Caractère intrinsèque de l'électron.

### 1.3. Classification périodique et propriétés atomiques
*   **Principe de construction de Pauli :** Deux électrons d'un même atome ne peuvent avoir leurs quatre nombres quantiques identiques (maximum deux électrons par orbitale, de spins opposés).
*   **Règle de Klechkowski :** Remplissage des orbitales par ordre croissant de l'énergie, caractérisée par la somme $n+l$, puis par $n$ croissant ($1s$, $2s$, $2p$, $3s$, $3p$, $4s$, $3d$, etc.).
*   **Règle de Hund :** Les électrons célibataires d'une même sous-couche occupent des orbitales différentes en maximisant la somme de leurs nombres quantiques de spin $S$.
*   **Électronégativité :** Aptitude d'un atome à attirer les électrons engagés dans une liaison. Les échelles usuelles sont celles de Pauling et de Mulliken.

### 1.4. Liaisons chimiques et géométrie moléculaire (VSEPR)
*   **Liaison covalente :** Mise en commun d'un ou plusieurs doublet(s) d'électrons.
*   **Modèle VSEPR (Valence Shell Electron Pair Repulsion / Gillespie) :** La géométrie d'une entité polyatomique est telle que les doublets d'électrons de la couche de valence (liants et non-liants) s'éloignent les uns des autres pour minimiser leur répulsion coulombienne. On utilise la notation $\text{AX}_n\text{E}_m$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Énergies des orbitales dans les hydrogénoïdes
**Énoncé :** Pour un système hydrogénoïde (un seul électron, ex. $\text{H}$, $\text{He}^+$), l'énergie des niveaux électroniques ne dépend que du nombre quantique principal $n$ et de la charge du noyau $Z$.

$$E_n = - \frac{m_e e^4}{8 \varepsilon_0^2 h^2} \frac{Z^2}{n^2} = -E_0 \frac{Z^2}{n^2}$$

*Où $E_0 \approx 13{,}6\text{ eV}$.*

### 2.2. Théorème du viriel appliqué à l'atome hydrogénoïde (Démonstration)
Objectif: ** Établir la relation entre l'énergie cinétique moyenne $\langle E_c \rangle$ et l'énergie potentielle moyenne $\langle E_p \rangle$ d'un électron lié dans un hydrogénoïde.

**Démonstration :**
1. L'énergie potentielle électrostatique est donnée par la loi de Coulomb :
   $$E_p = -\frac{1}{4\pi\varepsilon_0} \frac{Ze^2}{r}$$
   Sa valeur moyenne s'écrit $\langle E_p \rangle = -\frac{Ze^2}{4\pi\varepsilon_0} \left\langle \frac{1}{r} \right\rangle$.

2. En mécanique quantique stationnaire, le théorème d'Ehrenfest appliqué au produit scalaire $\vec{r} \cdot \vec{p}$ conduit, pour un état stationnaire, à l'égalité liant l'énergie cinétique moyenne et l'énergie potentielle moyenne :
   $$2\langle E_c \rangle + \langle E_p \rangle = 0$$

3. On en déduit immédiatement :
   $$\langle E_c \rangle = -\frac{1}{2} \langle E_p \rangle$$
   Et par conséquent, l'énergie totale moyenne $\langle E \rangle = \langle E_c \rangle + \langle E_p \rangle$ vérifie :
   $$\langle E \rangle = \frac{1}{2} \langle E_p \rangle = -\langle E_c \rangle$$

---

## 💡 3. Méthodes classiques de résolution

### 3.1. Établissement d'une configuration électronique
1.  **Dénombrer** le nombre total d'électrons $N$ de l'entité (neutre ou ionisée).
2.  **Appliquer** la règle de Klechkowski pour déterminer l'ordre de remplissage des sous-couches.
3.  **Saturer** chaque sous-couche selon sa capacité maximale ($2$ pour $s$, $6$ pour $p$, $10$ pour $d$, $14$ pour $f$).
4.  *Attention aux exceptions du bloc $d$* (ex: $\text{Cr}$ ($Z=24$) : $[\text{Ar}] 4s^1 3d^5$ et $\text{Cu}$ ($Z=29$) : $[\text{Ar}] 4s^1 3d^{10}$ dues à une stabilisation particulière des sous-couches demi-remplies ou pleines).

### 3.2. Détermination de la géométrie VSEPR d'une molécule
1.  Établir la structure de Lewis de la molécule en respectant la règle de l'octet (ou du duplet).
2.  Identifier l'atome central $\text{A}$.
3.  Compter le nombre de doublets liants $n$ (chaque liaison simple, double ou triple compte pour un site liant unique) et le nombre de doublets non-liants $m$ portés par $\text{A}$.
4.  Déduire la formule $\text{AX}_n\text{E}_m$ et la géométrie de base selon le nombre total de directions de repousse ($n+m$) :
    *   $2$ directions : Linéaire ($180^\circ$)
    *   $3$ directions : Trigonale plane ($120^\circ$)
    *   $4$ directions : Tétraédrique ($109{,}5^\circ$)

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confusion entre hydrogénoïdes et polyélectrons :** La formule $E_n = -13{,}6 \frac{Z^2}{n^2}$ n'est **strictement valable que pour les systèmes à un seul électron** ($\text{H}$, $\text{He}^+$, $\text{Li}^{2+}$). Pour les atomes polyélectroniques, l'écran exercé par les autres électrons invalide cette formule simple (on introduit alors une charge effective $Z_{\text{eff}}$).
2.  **Ordre de remplissage vs. Ordre de vidage (ionisation) :** Pour les métaux de transition (bloc $d$), les électrons de valence sont d'abord *remplis* via la règle de Klechkowski ($4s$ avant $3d$), mais ils sont *partis en premier* lors de l'ionisation ($4s$ avant $3d$) car la sous-couche $4s$ devient supérieure en énergie par rapport à la sous-couche $3d$ une fois le remplissage effectué.
3.  **Comptage des doublets VSEPR dans les liaisons multiples :** Dans la méthode VSEPR, une liaison double ($\text{C}=\text{O}$) ou triple ($\text{N}\equiv\text{N}$) ne compte que pour **un seul** site liant (direction de répulsion) autour de l'atome central, bien qu'elle contienne plusieurs paires d'électrons.
4.  **Oubli des électrons de cœur dans la formule de Lewis :** Ne représenter que les électrons de valence est correct pour les liaisons, mais lors du décompte total pour la structure de Lewis, s'assurer que les règles de stabilité (octet) sont vérifiées pour les éléments des lignes 2 et suivantes.