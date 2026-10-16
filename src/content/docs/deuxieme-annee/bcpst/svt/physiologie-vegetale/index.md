---
title: 'Cours : Physiologie végétale'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

La physiologie végétale étudie le fonctionnement des organismes végétaux autotrophes, ancrés dans un environnement stationnaire, ce qui impose des contraintes biophysiques et métaboliques spécifiques.

*   **Statut nutritionnel et trophique :** Les plantes terrestres sont des organismes autotrophes pour le carbone et photosynthétiques. Elles prélèvent des substances minérales dans le sol par le système racinaire et du dioxyde carbone atmosphérique par les feuilles.
*   **Potentiel hydrique ($\psi$) :** Grandeur thermodynamique intensive caractérisant l'état énergétique de l'eau dans un système, exprimée en Pascals ($\text{Pa}$). Il est défini par la relation :
$$\psi = \psi_p + \psi_s + \psi_g$$
Où $\psi_p$ est la pression hydrostatique (ou potentiel de pression), $\psi_s$ le potentiel osmotique (ou soluté) et $\psi_g$ le potentiel gravitationnel (souvent négligé à l'échelle tissulaire).
*   **Flux de masse et diffusion :** Les mouvements d'eau et de solutés à long distance s'effectuent par flux de masse (adients de pression) dans le xylème et le phloème, tandis que les échanges cellulaires à courte distance relèvent de la diffusion ou du transport actif membranaire.
*   **Régulations hormonales (Phytohormones) :** Molécules de signalisation agissant à faible concentration. Les cinq phytohormones classiques sont l'auxine (AIA), l'acide abscissique (ABA), les cytokinines, l'éthylène et les gibbérellines.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Loi de Schimper-Münch (Mécanisme du transport phloémien)
Le transport des photoassimilats dans le phloème (flux de masse sous pression) est régi par un gradient de pression hydrostatique généré osmotiquement entre les sources (feuilles) et les puits (racines, organes en croissance).

*Démonstration / Justification thermodynamique :*
1. Au niveau de la source, le chargement actif des assimilats (saccharose) induit une baisse du potentiel osmotique ($\psi_{s,\text{source}} < 0$).
2. Par conséquent, le potentiel hydrique de la sève élaborée devient inférieur à celui du xylème voisin ($\psi_{\text{phloème}} < \psi_{\text{xylème}}$).
3. L'eau entre massivement par osmose dans le tube criblé, ce qui entraîne une augmentation locale de la pression hydrostatique ($\psi_{p,\text{source}}$ élevée).
4. Au niveau du puits, le déchargement des assimilats provoque une hausse du potentiel osmotique et une sortie d'eau vers le xylème, abaissant la pression hydrostatique ($\psi_{p,\text{puit}}$ faible).
5. Il s'établit un gradient de pression ($\Delta \psi_p = \psi_{p,\text{source}} - \psi_{p,\text{puit}} > 0$) qui meut la sève élaborée par flux de masse selon la loi de Poiseuille.

### Théorème 2 : Équations cinétiques de la photosynthèse (Modèle de Farquhar-von Caemmerer-Berry - FvCB)
La modélisation de l'assimilation nette du $\text{CO}_2$ ($A$) en fonction de la concentration interne en $\text{CO}_2$ ($C_i$) repose sur deux limitations biochimiques majeures :

1. **Limitation par la Rubisco (caractérisée par la vitesse maximale $V_{c,\text{max}}$) :**
$$A_c = \frac{V_{c,\text{max}} C_i}{C_i + K_c \left(1 + \frac{O}{K_o}\right)} - R_d$$
Où $O$ est la concentration en $\text{O}_2$, $K_c$ et $K_o$ les constantes de Michaelis pour le $\text{CO}_2$ et l'$\text{O}_2$, et $R_d$ la respiration mitochondriale obscure.
2. **Limitation par le taux de régénération du RuBP via le transport électronique photosynthétique ($J$) :**
$$A_j = \frac{J C_i}{4(C_i + 2\Gamma^*)} - R_d$$
Où $\Gamma^*$ est le point de compensation en l'absence de respiration résiduelle.

---

## 💡 3. Méthodes classiques de résolution

*   **Résolution des bilans hydriques foliaires (Conductance stomatique et transpiration) :**
    *   *Méthode :* Pour calculer le flux de transpiration $E$, on utilise l'analogie ohmique de Landsberg :
    $$E = g_s \cdot (\text{VPD})$$
    Où $g_s$ est la conductance stomatique ($\text{mol}\cdot\text{m}^{-2}\cdot\text{s}^{-1}$) et $\text{VPD}$ (*Vapor Pressure Deficit*) représente le déficit de pression de vapeur d'eau entre la cavités sous-stomatique et l'atmosphère extérieure.
    *   *Rédaction type :* Toujours identifier le système (feuille-atmosphère), exprimer les résistances en série (résistance stomatique + résistance boundary layer ou cuticulaire), et appliquer les lois de Fick pour les gaz.

*   **Analyse cinétique de la nutrition minérale (Modèle de Michaelis-Menten) :**
    *   *Méthode :* L'absorption radiculaire d'un ion $I$ obéit à une cinétique enzymatique :
    $$V = \frac{V_{\text{max}} [I]}{K_m + [I]}$$
    *   *Rédaction type :* Linéariser l'équation sous la forme de Lineweaver-Burk ($\frac{1}{V} = f\left(\frac{1}{[I]}\right)$) pour extraire graphiquement $V_{\text{max}}$ et $K_m$ lors d'exercices expérimentaux sur les cinétiques d'efflux/influx.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Inversion du sens des gradients de potentiel hydrique :** L'eau se déplace *toujours* des potentiels hydriques les plus élevés (valeurs algébriquement les plus fortes, ex: $-0.2\text{ MPa}$) vers les potentiels les plus bas (ex: $-1.5\text{ MPa}$). Ne pas confondre potentiel osmotique (toujours $\le 0$ en solution idéale diluée) et potentiel hydrique global.
2. **Confusion entre photosynthèse brute et nette :** L'assimilation nette mesurée $A_n$ est égale à l'assimilation brute photosynthétique $A_{brute}$ diminuée de la respiration (photorespiration + respiration obscure $R_d$). $A_n = A_{brute} - R_{d}$. Une plante à l'obscurité a un bilan d'échange apparent négatif.
3. **Imputabilité mécanistique de la stomate :** L'ouverture stomatique ne résulte pas d'une "volonté" de la plante mais d'une baisse du potentiel osmotique des cellules de garde (accumulation active de $\text{K}^+\text{ et de malate}^{2-}$), entraînant une entrée d'eau, une turgescence et, du fait de l'in_s_égalité des épaisseurs pariétales, une déformation des cellules ouvrant l'ostiole.
4. **Assimilation de la sève brute à de l'eau pure :** Le xylème contient des ions minéraux dissous, des phytohormones et des peptides de signalisation, ce qui modifie son potentiel osmotique (bien que $\psi_s$ y reste très faible comparativement au phloème).