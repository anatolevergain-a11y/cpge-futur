---
title: "📐 2. Théorèmes fondamentaux & Démonstrations clés"
description: "Fiche de cours et d'exercice CPGE."
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Critère de stabilité de Routh
Pour un système bouclé dont le dénominateur de la FTBF est le polynôme caractéristique $D(p) = a_n p^n + a_{n-1} p^{n-1} + \dots + a_1 p + a_0$ (avec $a_n > 0$), une condition **nécessaire** (mais non suffisante si $n > 2$) de stabilité est que **tous les coefficients $a_i$ soient de même signe et non nuls**.

Le tableau de Routh permet de conclure quant au nombre de racines à partie réelle strictement positive.

### Démonstration du théorème de l'écart final (Précision)
Soit l'erreur $\varepsilon(t) = e(t) - s(t)$. En régime permanent, pour un signal d'entrée canonique, on définit la classe du système par le nombre d'intégrateurs purs dans la $\text{FTBO}(p)$.

Exprimons l'erreur dans le domaine de Laplace :
$$\varepsilon(p) = E(p) - S(p) = E(p)\left(1 - \frac{\text{FTBO}(p)}{1 + \text{FTBO}(p)}\right) = \frac{E(p)}{1 + \text{FTBO}(p)}$$

Par application du théorème de la valeur finale (si les conditions de convergence sont réunies, i.e., pôles de $p\varepsilon(p)$ à partie réelle strictement négative) :
$$\varepsilon(\limite\text{t}{\infty}) = \lim_{p \to 0} p \cdot \varepsilon(p) = \lim_{p \to 0} \frac{p E(p)}{1 + \text{FTBO}(p)}$$

*   **Pour un échelon de consigne** ($e(t) = E_0 \cdot \mathcal{U}(t) \implies E(p) = \frac{E_0}{p}$) :
    $$\varepsilon_{\infty} = \lim_{p \to 0} \frac{E_0}{1 + \text{FTBO}(p)} = \frac{E_0}{1 + K_p}$$
    Où $K_p = \lim_{p \to 0} \text{FTBO}(p)$ est le **gain de position**.
---

## 💡 3. Méthodes de calcul & Algorithmes

### Analyse harmonique (Diagrammes de Bode)
L'analyse fréquentielle repose sur la réponse indicielle ou harmonique. Pour une pulsation $\omega$, la fonction de transfert s'évalue en $p = j\omega$.
- **Gain décibel** : $G_{\text{dB}}(\omega) = 20 \log_{10}(|H(j\omega)|)$
- **Phase** : $\varphi(\omega) = \arg(H(j\omega))$

### Correction des systèmes asservis
Le choix du correcteur $C(p)$ dépend de l'amélioration souhaitée :

1. **Correcteur Proportionnel ($C(p) = K$)** :
   - Agit sur le gain. Améliore la précision mais dégrade la marge de phase et donc la stabilité si $K$ est trop grand.
2. **Correcteur Proportionnel Intégrateur (PI : $C(p) = K_p \left(1 + \frac{1}{T_i p}\right)$)** :
   - **Objectif** : Annuler l'erreur statique (augmente la classe du système de 1).
   - Inconvénient : Apporte un déphasage négatif aux basses et moyennes fréquences, réduisant la marge de phase.
3. **Correcteur Proportionnel Dérivé (PD : $C(p) = K_d (1 + T_d p)$)** :
   - **Objectif** : Améliorer la stabilité (marge de phase) et la rapidité en anticipant l'évolution du signal.
   - Inconvénient : Amplifie le bruit de mesure haute fréquence (nécessite un pôle filtre, i.e., correcteur à action dérivée filtrée).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de la condition d'unicité du retour unitaire** : 
   Attention aux schémas blocs comportant un capteur dans la boucle de retour ($H_c(p) \neq 1$). Il faut impérativement ramener le système sous forme canonique avant d'appliquer les formules du premier ordre ou du second ordre sur la FTBF.
2. **Confusion entre FTBO et FTBF** :
   Le critère du revers (Nyquist) s'applique sur la **FTBO** pour conclure sur la stabilité de la **FTBF**. Ne jamais tracer le diagramme de Nyquist de la FTBF pour analyser la stabilité !
3. **Erreur d'unité sur les tracés asymptotiques de Bode** :
   Les pentes des asymptotes doivent être exprimées rigoureusement en $\text{dB}/\text{dec}$ (décibels par décade) et non en $\text{dB}/\text{octave}$ (sauf mention explicite, mais le décade est la norme en PT).
4. **Utilisation abusive du théorème de la valeur finale** :
   Vérifier systématiquement que le système en boucle fermée est stable avant d'appliquer $\lim_{p \to 0} p \varepsilon(p)$. Appliquer ce théorème sur un système instable conduit à des aberrations mathématiques.