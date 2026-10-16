---
title: 'Cours : Thermodynamique industrielle et machines'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PC.'
---

## 📌 1. Définitions & Cadre d'étude

La thermodynamique industrielle s'intéresse à la conversion énergétique entre travail et chaleur au travers de systèmes ouverts (machines thermiques) fonctionnant en régime permanent ou cyclique.

*   **Système ouvert (volume de contrôle) :** Système échangeant de la matière et de l'énergie (travail $W$ et chaleur $Q$) avec l'extérieur à travers sa frontière (surface de contrôle).
*   **Régime permanent :** État pour lequel les variables extensives du système (masse, énergie interne) et les conditions aux limites (débits, températures, pressions) sont indépendantes du temps dans le volume de contrôle : $\frac{\partial X}{\partial t} = 0$.
*   **Fluide caloporteur (ou fluide de travail) :** Fluide traversant la machine. On le modélise usuellement comme un gaz parfait ou un corps pur diphasique (diagrammes thermodynamiques $T-S$, $P-H$).
*   **Transformations subies :**
    *   *Réversibilité interne :* Absence de frottements visqueux et d'effets Joule internes.
    *   *Monotherme / Botherme :* Échanges thermiques avec un ou plusieurs thermostats.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Premier principe pour un système ouvert en régime permanent
Considérons un volume de contrôle fixe traversé par un débit massique constant $\mathcal{D}_m$. Entre l'entrée (section $e$) et la sortie (section $s$), le premier principe de la thermodynamique s'écrit sous forme massique :

$$h_s + \frac{1}{2}v_s^2 + gz_s - (h_e + \frac{1}{2}v_e^2 + gz_e) = q + w_{\text{tech}}$$

Où :
*   $h$ est l'enthalpie massique ($\text{J}\cdot\text{kg}^{-1}$).
*   $v$ est la vitesse moyenne du fluide ($\text{m}\cdot\text{s}^{-1}$).
*   $z$ est l'altitude ($\text{m}$).
*   $q$ et $w_{\text{tech}}$ sont respectivement la chaleur et le travail technique reçus par unité de masse ($\text{J}\cdot\text{kg}^{-1}$).

Dans de nombreuses machines (compresseurs, turbines, pompes), les variations d'énergie cinétique et potentielle macroscopiques sont négligeables devant les variations d'enthalpie et le travail reçu. L'équation se simplifie en :
$$\Delta h = q + w_{\text{tech}}$$

### Second principe et entropie échangée/créée
Pour un système ouvert en régime permanent, le bilan d'entropie s'écrit par unité de temps :
$$\frac{dS_{\text{syst}}}{dt} = 0 = \sum_{\text{i}} \frac{Q_i}{T_i} + \mathcal{D}_m (s_e - s_s) + S_{\text{créée}}$$

Où $S_{\text{créée}} \ge 0$ (second principe, avec égalité si la transformation est réversible).

### Étude des cycles moteurs (ex: Cycle de Carnot)
Un cycle moteur convertit de l'énergie thermique en énergie mécanique. Le rendement thermique $\eta$ est défini par :
$$\eta = \frac{W_{\text{cycle}}}{Q_{\text{reçu}}} = \frac{-W_{\text{fourni}}}{Q_{\text{chaud}}} = \frac{Q_{\text{chaud}} + Q_{\text{froid}}}{Q_{\text{chaud}}} = 1 + \frac{Q_{\text{froid}}}{Q_{\text{chaud}}}$$

En appliquant l'inégalité de Clausius sur un cycle réversible (ou le théorème de Carnot) :
$$\oint \frac{\delta Q}{T} = 0 \implies \frac{Q_{\text{chaud}}}{T_{\text{chaud}}} + \frac{Q_{\text{froid}}}{T_{\text{froid}}} = 0$$

On en déduit le **rendement de Carnot maximal** :
$$\eta_{\text{Carnot}} = 1 - \frac{T_{\text{froid}}}{T_{\text{chaud}}}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

1.  **Méthodologie générale pour un problème de machine thermique :**
    *   **Étape 1 :** Définir le système ouvert (volume de contrôle) et dresser le bilan des entrées/sorties de matière.
    *   **Étape 2 :** Appliquer le premier principe (conservation de l'enthalpie totale) et identifier les termes nuls ($w_{\text{tech}} = 0$ pour une tuyère, $q = 0$ pour une détente adiabatique).
    *   **Étape 3 :** Utiliser les lois d'état (gaz parfait : $\Delta h = C_p \Delta T$) pour lier les températures aux pressions si la transformation est isentropique ($PV^\gamma = \text{cte}$).
    *   **Étape 4 :** Exploiter le second principe (terme de création d'entropie) pour quantifier les irréversibilités via les efficacités ou rendements isentropiques.

2.  **Calcul du travail technique pour une machine réversible :**
    Pour un système fermé ou ouvert réversible sans variation d'énergie cinétique ni potentielle :
    $$w_{\text{tech}} = -\int_{e}^{s} v \, dP \quad (\text{pour un fluide incompressible, } w_{\text{tech}} = -v(P_s - P_e))$$

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Confondre système fermé et système ouvert :** Le travail échangé par une turbine n'est pas $\int P dV$ (travail des forces de pression frontières), mais le travail technique $W_{\text{tech}} = \int V dP$ (travail utile transmis par l'arbre). Ne jamais appliquer $dU = \delta Q - P dV$ à un système ouvert.
*   **Erreur de signe sur les flux énergétiques :** Respecter strictement la convention de signers récepteurs/fournisseurs : $Q > 0$ et $W > 0$ si reçus par le système.
*   **Mauvaise utilisation du rendement isentropique :** 
    *   Pour une *détente* (turbine) : $w_{\text{réel}} = \eta_t \, w_{\text{isentropique}} \implies h_s - h_e = \eta_t (h_{s,\text{is}} - h_e)$. Attention au sens des inégalités (le travail fourni par la turbine est négatif dans la convention récepteur, mais en valeur absolue, $|\text{travail réel}| < |\text{travail isentropique}|$).
    *   Pour une *compression* (compresseur) : $w_{\text{réel}} = \frac{w_{\text{isentropique}}}{\eta_c}$. Le compresseur réel demande *plus* de travail que le compresseur idéal isentropique ($\eta_c < 1$).
*   **Oubli de la modélisation des gaz parfaits :** Vérifier systématiquement les domaines de validité (pressions modérées, températures éloignées de la liquéfaction) avant d'utiliser $PV = nRT$ ou $h = C_p T$.