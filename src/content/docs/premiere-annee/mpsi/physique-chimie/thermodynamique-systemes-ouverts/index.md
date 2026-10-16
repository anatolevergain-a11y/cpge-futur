---
title: 'Cours : Thermodynamique des systèmes ouverts'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

### A. Notion de système ouvert et d'écoulement
Un **système ouvert** est un système thermodynamique qui échange de la matière et de l'énergie (travail, chaleur) avec son milieu extérieur à travers sa surface frontière (la surface de contrôle). En CPGE MPSI, on s'intéresse principalement aux **systèmes ouverts permanents** (ou régimes stationnaires) et aux écoulements monodimensionnels.

*   **Volume de contrôle ($\mathcal{V}$)** : Région de l'espace délimitée par une surface de contrôle fermée $\partial\mathcal{V}$.
*   **Surfaces d'entrée et de sortie** : Parties de la surface de contrôle traversées par de la matière. On note $\text{e}$ l'entrée et $\text{s}$ la sortie.

### B. Grandeurs massiques et flux
Pour un fluide de masse volumique $\rho$ traversant une section $S$ avec une vitesse $\vec{v}$ perpendiculaire à cette section :
*   Le **débit massique** (exprimé en $\text{kg}\cdot\text{s}^{-1}$) à travers la section est défini par :
    $$D_m = \iint_S \rho \, \vec{v} \cdot \vec{n} \, \mathrm{d}S \approx \rho \, S \, v$$
    *(où $\vec{n}$ est le vecteur unitaire normal sortant).*
*   Le **débit molaire** (en $\text{mol}\cdot\text{s}^{-1}$) est relié au débit massique par $D_n = \frac{D_m}{M}$, où $M$ est la masse molaire.
*   Pour toute grandeur extensive $X$, on définit la grandeur massique associée $x = \frac{X}{m}$. Le flux de $X$ transporté par le fluide à travers la section est $D_m x$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Premier principe de la thermodynamique pour un système ouvert (Bilan d'énergie)

#### Énoncé général (Forme intégrale pour un système ouvert instationnaire)
Entre l'instant $t$ et $t + \mathrm{d}t$, la variation d'énergie totale $\mathrm{d}E_{\text{sys}}$ du système contenu dans le volume de contrôle est égale à la somme :
1. De l'énergie thermique reçue sous forme de transfert thermique $\delta Q$.
2. De l'énergie reçue sous forme de travail utile (ou travail mécanique hors travail des forces de pression transductrices aux frontières d'écoulement) $\delta W_u$.
3. Des énergies entrantes et sortantes par le transport de matière.

#### Démonstration / Établissement (Cas stationnaire / Écoulement à une entrée et une sortie)
Considérons un volume de contrôle fixe. 
À l'instant $t$, le système est constitué du fluide présent dans $\mathcal{V}$ et d'une petite tranche de fluide $\mathrm{d}m$ sur le point d'entrer en $\text{e}$. À l'instant $t+\mathrm{d}t$, cette tranche a pénétré en $\mathcal{V}$ et une autre tranche $\mathrm{d}m$ est sortie en $\text{s}$.

En régime permanent, l'état du système dans $\mathcal{V}$ ne varie pas au cours du temps. L'application du premier principe à l'ensemble {fluide dans $\mathcal{V}$ à $t$ + $\mathrm{d}m$ entrante} devient, après identification avec l'état à $t+\mathrm{d}t$ :

$$Q + W_u = \Delta H_{\text{flux}} + \Delta E_{\text{cin}} + \Delta E_{\text{pot}}$$

En introduisant les grandeurs massiques et les débits massiques $D_m$ (avec $D_{m,\text{e}} = D_{m,\text{s}} = D_m$ en régime permanent) :
$$\frac{\mathrm{d}Q}{\mathrm{d}t} + \frac{\mathrm{d}W_u}{\mathrm{d}t} = D_m \left[ \left( h_{\text{s}} + \frac{1}{2}v_{\text{s}}^2 + g z_{\text{s}} \right) - \left( h_{\text{e}} + \frac{1}{2}v_{\text{e}}^2 + g z_{\text{e}} \right) \right]$$

Où $h = u + P v_{\text{massique}}$ est l'**enthalpie massique**. Le terme de travail des forces de pression s'est transformé en terme d'enthalpie ($Pv$).

### B. Second principe de la thermodynamique (Bilan d'entropie)

Pour un système ouvert, l'entropie du volume de contrôle varie par échange thermique, par transport de matière et par création d'entropie interne due aux irréversibilités :

$$\mathrm{S}_{\text{créée}} = \Delta S_{\text{sys}} - \int \frac{\delta Q}{T_{\text{ext}}} - (S_{\text{s}} - S_{\text{e}}) \geq 0$$

En régime permanent ($\Delta S_{\text{sys}} = 0$), le flux d'entropie créé par unité de temps vérifie :
$$\frac{\mathrm{d}S_{\text{créée}}}{\mathrm{d}t} = D_m (s_{\text{s}} - s_{\text{e}}) - \sum \frac{\Phi_i}{T_i} \geq 0$$
*(où $\Phi_i$ représente le flux thermique reçu à la température $T_i$)*.

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour résoudre un problème de thermodynamique des systèmes ouverts (ex : tuyère, compresseur, turbine, échangeur), la méthode systématique est la suivante :

1.  **Définition du système et du régime** : Préciser le volume de contrôle, supposer le régime permanent ($\Delta (\text{grandeur dans } \mathcal{V}) = 0$) si le texte le suggère, et identifier le nombre d'entrées et de sorties.
2.  **Bilan de masse (Continuité)** :
    En régime permanent : 
    $$D_{m,\text{e}} = D_{m,\text{s}} \iff \rho_{\text{e}} S_{\text{e}} v_{\text{e}} = \rho_{\text{s}} S_{\text{s}} v_{\text{s}}$$
3.  **Bilan d'énergie (Premier principe)** :
    Écrire l'équation sous forme massique ou molaire par unité de temps :
    $$\frac{Q}{D_m} + \frac{W_u}{D_m} = (h_{\text{s}} - h_{\text{e}}) + \Delta E_{\text{cin, massique}} + \Delta E_{\text{pot, massique}}$$
4.  **Utilisation des équations d'état** :
    Ratacher l'enthalpie $h$ aux variables thermodynamiques (pour un Gaz Parfait à $C_p$ constant : $\Delta h = C_p (T_{\text{s}} - T_{\text{e}})$).
5.  **Bilan d'entropie (Second principe)** :
    Si la transformation est modélisée comme réversible (idéale), alors $\frac{\mathrm{d}S_{\text{créée}}}{\mathrm{d}t} = 0$, ce qui donne une relation entre les pressions et températures (lois de Laplace pour un gaz parfait isentropique).

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Confondre travail total et travail utile ($W_u$)** : Dans un système ouvert, le travail des forces de pression exercées par l'amont et l'aval est *déjà inclus* dans l'enthalpie $H = U + PV$. Le travail $W_u$ (ou travail technique) est uniquement celui fourni par ou reçu de l'extérieur (ex: arbre d'une turbine ou d'un compresseur). Ne jamais ajouter $$-P\mathrm{d}V$$ macroscopique pour le fluide en écoulement.
*   **Oublier l'énergie cinétique ou potentielle** : Bien qu'elles soient souvent négligeables dans les machines thermiques industrielles (compresseurs, turbines), les variations d'énergie cinétique sont fondamentales et recherchées dans les **tuyères** et les **diffuseurs**.
*   **Mauvaise utilisation des lois de Laplace** : Les lois de Laplace ($P V^\gamma = \text{cste}$, etc.) ne s'appliquent qu'à une transformation **adiabatique ET réversible** (isentropique). Pour un système ouvert, l'écoulement peut être adiabatique ($Q=0$) et irrévisible (présence de frottements visqueux) : dans ce cas, $\Delta S_{\text{créée}} > 0$ et Laplace est formellement interdit ! On utilise alors le premier principe combiné avec les bilans d'enthalpie.
*   **Erreur de signe sur les débits** : Toujours orienter les flux de matière de l'intérieur vers l'extérieur pour les surfaces de sortie, et de l'extérieur vers l'intérieur pour les entrées, afin de respecter les conventions algébriques des flux sortants ($\sum sortie - \sum entrée$).