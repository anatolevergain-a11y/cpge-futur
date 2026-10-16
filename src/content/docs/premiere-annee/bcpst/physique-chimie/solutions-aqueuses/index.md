---
title: 'Cours : Réactions en solution aqueuse'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Réactions en solution aqueuse — Fiche de Cours (BCPST1)

---

## 1. Généralités et Activité Chimique

### A. Définitions fondamentales
* **Solution aqueuse :** Solution dont le solvant est l'eau.
* **Activité ($a_i$ ) :** Grandeur sans dimension caractérisant "l'efficacité" d'une espèce $X_i$ dans un équilibre chimique. 
  * Pour un soluté dilué (idéal) de concentration $C_i$ : $a_i = \frac{C_i}{C^\circ}$ avec $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$.
  * Pour un solvant (eau) ou un constituant pur condensé (liquide ou solide) : $a_i = 1$.
  * Pour un gaz parfait $X_i$ : $a_i = \frac{P_i}{P^\circ}$ avec $P^\circ = 1\text{ bar}$.

### B. Constante d'équilibre et Quotien de réaction
Pour une réaction d'équation :
$$\nu_1 A_1 + \nu_2 A_2 \rightleftharpoons \nu_3 A_3 + \nu_4 A_4$$

* **Quotient de réaction ($Q_r$) :** $Q_r = \prod_i a_i^{\nu_i}$ (comptées négativement pour les réactifs, positivement pour les produits).
* **Constante d'équilibre ($K^\circ$) :** Valeur de $Q_r$ à l'équilibre thermodynamique. $K^\circ$ ne dépend que de la température $T$.

---

## 2. Équilibres Acido-Basiques

### A. Définitions de Brönsted
* **Acide :** Espèce susceptible de céder un proton $H^+$.
* **Base :** Espèce susceptible de capter un proton $H^+$.
* **Couple acido-basique :** $AH / A^-$ relié par la demi-équation : $AH \rightleftharpoons A^- + H^+$.

### B. Auto-protolyse de l'eau
L'eau est un amphotère. L'équilibre d'auto-protolyse s'écrit :
$$2\text{ H}_2\text{O}_{(l)} \rightleftharpoons \text{ H}_3\text{O}^+_{(aq)} + \text{ HO}^-_{(aq)}$$

* **Produit ionique de l'eau :** $K_e = a(\text{H}_3\text{O}^+) \cdot a(\text{HO}^-)$. 
* À $25\text{ }^\circ\text{C}$, $\text{p}K_e = 14$ ($\text{pK}_e = -\log_{10} K_e$).
* **Échelle de pH :** $\text{pH} = -\log_{10} \left( \frac{[\text{H}_3\text{O}^+]}{C^\circ} \right)$.

### C. Constante d'acidité ($\text{p}K_a$)
Pour un couple $AH / A^-$ :
$$AH + \text{H}_2\text{O} \rightleftharpoons A^- + \text{H}_3\text{O}^+ \quad \text{avec} \quad K_a = \frac{[\text{H}_3\text{O}^+][A^-]}{[AH]\cdot C^\circ}$$
$$\text{p}K_a = -\log_{10} K_a$$

> **Théorème (Relation de Henderson) :**
> Pour une solution tampon ou en zone de prédominance :
> $$\text{pH} = \text{p}K_a + \log\left(\frac{[A^-]}{[AH]}\right)$$

---

## 3. Équilibres de Solubilité (Précipitation)

### A. Définitions
Considérons le composé ionique peu soluble $M_\alpha X_\beta$ en équilibre avec ses ions :
$$M_\alpha X_{(\text{s})} \rightleftharpoons \alpha M^{z+}_{(aq)} + \beta X^{z'-}_{(aq)}$$

* **Solubilité ($s$) :** Quantité maximale de soluté que l'on peut dissoudre par litre de solution (exprimée en $\text{mol}\cdot\text{L}^{-1}$).
* **Produit de solubilité ($K_s$) :** Constante d'équilibre associée à la mise en solution :
  $$K_s = \left(\frac{[M^{z+}]}{C^\circ}\right)^\alpha \left(\frac{[X^{z'-}]}{C^\circ}\right)^\beta$$

### B. Condition de précipitation
Soit $Q_{r,s}$ le quotient réactionnel de mise en solution.
* Si $Q_{r,s} < K_s$ : La solution n'est pas saturée, aucun précipité ne se forme.
* Si $Q_{r,s} = K_s$ : La solution est juste saturée.
* Si $Q_{r,s} > K_s$ : Il y a précipitation (le système évolue dans le sens inverse de la mise en solution).

---

## 4. Équilibres d'Oxydoréduction

### A. Définitions
* **Oxydant :** Espèce chimique capable de **capter** un ou plusieurs électrons.
* **Réducteur :** Espèce chimique capable de **céder** un ou plusieurs électrons.
* **Couple redox :** $Ox / Red$ relié par la demi-équation :
  $$\alpha Ox + n e^- \rightleftharpoons \beta Red$$

### B. Formule de Nernst
Le potentiel d'électrode $E$ d'un couple $Ox/Red$ à la température $T$ est donné par :

$$E = E^\circ(Ox/Red) + \frac{R T}{n F} \ln \left( \prod_i a_i^{\nu_i} \right)$$

*À $T = 298\text{ K}$, en passant au log décimal ($\frac{R T \ln(10)}{F} \approx 0{,}06\text{ V}$) :*
$$E = E^\circ(Ox/Red) + \frac{0{,}06}{n} \log \left( \frac{a(Ox)^{\alpha}}{a(Red)^{\beta}} \right)$$

---

## 5. Méthodes et Démarches en BCPST

> **Méthode générale pour résoudre un problème de solution aqueuse :**
> 1. **Inventaire des espèces** présentes dans la solution avant toute réaction.
> 2. **Recensement des équilibres** susceptibles d'intervenir (acido-basiques, complexation, précipitation, redox).
> 3. **Recherche de la réaction prépondérante (RP)** : C'est la réaction thermodynamiquement la plus favorisée (celle qui a la plus grande constante d'équilibre $K^\circ$).
> 4. **Calcul d'avancement** de la RP (totale si $K^\circ > 10^3$, limitée sinon).
> 5. **Vérification des hypothèses** (par exemple, vérifier la validité du pH calculé, s'assurer que les espèces négligées le sont légitimement).

---

## 6. Pièges et Erreurs Classiques (À Éviter)

* ⚠️ **Oubli de l'activité du solvant :** Ne jamais inclure $\text{H}_2\text{O}_{(l)}$ dans une expression de $K$ ou de $Q_r$ (son activité vaut $1$).
* ⚠️ **Confusion entre $K_s$ et $s$ :** Attention aux stœchiométries ! Pour $Ag_2SO_{4(s)} \rightleftharpoons 2Ag^+ + SO_4^{2-}$, si la solubilité est $s$, alors $[Ag^+] = 2s$ et $[SO_4^{2-}] = s$, donc $K_s = (2s)^2 \times s = 4s^3$ et non pas $s^3$.
* ⚠️ **Unités dans la formule de Nernst :** Le terme $0{,}06$ n'est valable qu'à **$298\text{ K}$** ($25\text{ }^\circ\text{C}$). Ne jamais l'utiliser aveuglément si la température du problème est différente.
* ⚠️ **Domaines de prédominance vs existence :** 
  * Pour un acide et sa base conjuguée (espèces solubles), on parle de **domaines de prédominance** (séparés par le $\text{p}K_a$).
  * Pour un ion métallique et un précipité d'hydroxyde métallique (ex: $Fe(OH)_{3(s)}$), on parle de **domaines d'existence** (séparés par la frontière de solubilité).