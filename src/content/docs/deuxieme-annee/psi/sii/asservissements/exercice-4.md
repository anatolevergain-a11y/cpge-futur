---
title: 'Exercice 2 : Critères de stabilité (Routh, Nyquist, marges de phase)'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à l'asservissement en position d'un axe vertical de manutention industrielle, soumis à des contraintes de précision et de rapidité. Le schéma bloc du système bouclé est donné par une consigne $C(p)$ et une position mesurée $S(p)$. 

La chaîne directe est constituée d'un correcteur $K(p)$, d'un onduleur et d'un moteur à courant continu modélisé par sa fonction de transfert, ainsi que d'un réducteur mécanique. L'ensemble de la chaîne directe est modélisé par la fonction de transfert ouverte $H_{BO}(p)$ suivante :

$$H_{BO}(p) = \frac{K}{p(1 + T_1 p)(1 + T_2 p)}$$

Avec les données numériques constructeur suivantes :
- $K = 10 \; \text{s}^{-1}$ (gain global réglable)
- $T_1 = 0{,}1 \; \text{s}$ (constante de temps électrique/mécanique dominante)
- $T_2 = 0{,}02 \; \text{s}$ (constante de temps parasite)

#### Hypothèses de modélisation et esprit critique :
*Le modèle linéaire invariant (LTI) utilisé néglige les jeux mécaniques dans le réducteur, les saturations en tension de l'onduleur et les frottements secs. De plus, le terme $T_2$ représente un mode propre haute fréquence souvent incertain. L'ingénieur doit valider la robustesse du système face à ces incertitudes.*

---

### ❓ Questions progressives

1. **Analyse structurelle et statique :** Déterminer la classe du système ouvert $H_{BO}(p)$ et calculer l'erreur statique pour une entrée en échelon de position d'amplitude $1 \; \text{rad}$. Conclure vis-à-vis du cahier des charges usuel.
2. **Critère algébrique de Routh :** Mettre le dénominateur de la fonction de transfert en boucle fermée $H_{BF}(p)$ sous la forme d'un polynôme caractéristique. Appliquer le critère de Routh pour déterminer la condition sur le gain $K$ garantissant la stabilité asymptotique du système. Calculer la valeur limite $K_{lim}$.
3. **Tracé asymptotique et Réel (Nyquist) :** Exprimer la fonction de transfert harmonique $H_{BO}(j\omega)$. Déterminer l'expression de la pulsation de phase $\omega_p$ pour laquelle la phase de $H_{BO}(j\omega)$ vaut $-\pi$ rad. En déduire la condition sur $K$ assurant une stabilité au sens du critère de Nyquist.
4. **Marges de stabilité :** On fixe $K = 2$. 
   - Calculer la pulsation de gain $\omega_g$ (pulsation pour laquelle le module vaut $1$).
   - En déduire la **marge de phase** $M_\phi$ et la **marge de gain** $M_G$.
5. **Analyse critique et robustesse :** Le constructeur annonce une incertitude de $\pm 30\%$ sur la constante de temps parasite $T_2$ en raison de l'usure du réducteur. Discuter de l'impact de cette variation sur la marge de phase calculée précédemment et proposer une modification qualitative du correcteur $K(p)$ si la marge venait à être insuffisante ($M_\phi < 45^\circ$).

---

### 💡 Pistes & Indications

- *Question 1 :* La classe correspond au nombre d'intégrateurs pur ($p^k$) en facteur dans $H_{BO}(p)$. Utiliser le théorème de la valeur finale pour l'erreur statique.
- *Question 2 :* Le polynôme caractéristique est $1 + H_{BO}(p) = 0$. Multiplier par le dénominateur pour obtenir un polynôme de degré 3.
- *Question 3 :* La phase de $H_{BO}(j\omega)$ est argument du numérateur moins argument du dénominateur. Annuler la partie imaginaire de ce dénominateur complexe pour trouver $\omega_p$.
- *Question 4 :* Résoudre $|H_{BO}(j\omega_g)| = 1$ (souvent plus simple en résolvant $|H_{BO}(j\omega_g)|^2 = 1$). La marge de phase se déduit par $M_\phi = 180^\circ + \text{Arg}(H_{BO}(j\omega_g))$.
- *Question 5 :* Penser à l'allure du diagramme de Bode : une augmentation des constantes de temps hautes fréquences accentue la chute de phase aux pulsations intermédiaires.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Analyse structurelle et statique
La fonction de transfert ouverte s'écrit :
$$H_{BO}(p) = \frac{K}{p(1 + T_1 p)(1 + T_2 p)}$$
La présence du terme $p$ en facteur au dénominateur indique que le système est de **classe 1**.
Pour une entrée en échelon de position d'amplitude $E_0 = 1$, l'erreur statique $e_s$ vaut :
$$e_s = \lim_{t \to +\infty} \varepsilon(t) = \lim_{p \to 0} p \cdot \frac{E_0}{p} \cdot \frac{1}{1 + H_{BO}(p)} = \lim_{p \to 0} \frac{1}{1 + H_{BO}(p)} = 0$$
Conclusion: * L'erreur statique est nulle, le système suit parfaitement une consigne de position constante, ce qui est typique d'un système de classe 1.

#### 2. Critère algébrique de Routh
La fonction de transfert en boucle fermée est :
$$H_{BF}(p) = \frac{H_{BO}(p)}{1 + H_{BO}(p)} = \frac{K}{p(1 + T_1 p)(1 + T_2 p) + K}$$
Développons le dénominateur $D(p)$ :
$$D(p) = p(1 + (T_1 + T_2)p + T_1 T_2 p^2) + K = T_1 T_2 p^3 + (T_1 + T_2) p^2 + p + K$$
Le polynôme caractéristique est $P(p) = T_1 T_2 p^3 + (T_1 + T_2) p^2 + p + K$.
Appliquons le tableau de Routh pour ce polynôme de degré 3 (avec $T_1 = 0{,}1$, $T_2 = 0{,}02 \implies T_1 T_2 = 0{,}002$ et $T_1 + T_2 = 0{,}12$) :

| Degré | 1ère colonne | 2ème colonne |
| :---: | :--- | :--- |
| $p^3$ | $T_1 T_2 = 0{,}002$ | $1$ |
| $p^2$ | $T_1 + T_2 = 0{,}12$ | $K$ |
| $p^1$ | $\frac{(T_1 + T_2)\cdot 1 - T_1 T_2 \cdot K}{T_1 + T_2}$ | $0$ |
| $p^0$ | $K$ | |

Pour assurer la stabilité asymptotique (tous les coefficients de la première colonne de Routh de même signe, non nuls) :
1. $0{,}002 > 0$ (toujours vrai)
2. $0{,}12 > 0$ (toujours vrai)
3. $\frac{0{,}12 - 0{,}002K}{0{,}12} > 0 \implies K < \frac{0{,}12}{0{,}002} = 60$
4. $K > 0$

*Condition de Routh :* $0 < K < 60$. La valeur limite est **$K_{lim} = 60 \; \text{s}^{-1}$**.

#### 3. Trateau et Pulsation de phase
La fonction harmonique s'écrit :
$$H_{BO}(j\omega) = \frac{K}{j\omega(1 + j T_1 \omega)(1 + j T_2 \omega)}$$
L'argument (phase) est :
$$\text{Arg}(H_{BO}(j\omega)) = -\frac{\pi}{2} - \arctan(T_1 \omega) - \arctan(T_2 \omega)$$
La pulsation de phase $\omega_p$ est telle que $\text{Arg}(H_{BO}(j\omega_p)) = -\pi$ :
$$-\frac{\pi}{2} - \arctan(T_1 \omega_p) - \arctan(T_2 \omega_p) = -\pi \implies \arctan(T_1 \omega_p) + \arctan(T_2 \omega_p) = \frac{\pi}{2}$$
En utilisant la relation $\arctan(a) + \arctan(b) = \arctan\left(\frac{a+b}{1-ab}\right)$ (pour $ab < 1$) :
$$\frac{(T_1 + T_2)\omega_p}{1 - T_1 T_2 \omega_p^2} = +\infty \implies 1 - T_1 T_2 \omega_p^2 = 0$$
$$\omega_p = \frac{1}{\sqrt{T_1 T_2}} = \frac{1}{\sqrt{0{,}002}} = \frac{1}{\sqrt{2 \cdot 10^{-3}}} = \frac{10\sqrt{5}}{2} = 5\sqrt{5} \approx 11{,}18 \; \text{rad/s}$$

Calculons le module de $H_{BO}(j\omega_p)$ :
$$|H_{BO}(j\omega_p)| = \frac{K}{\omega_p \sqrt{1 + T_1^2 \omega_p^2}\sqrt{1 + T_2^2 \omega_p^2}}$$
Or, $\omega_p^2 = \frac{1}{T_1 T_2}$, donc $T_1^2 \omega_p^2 = \frac{T_1}{T_2}$ et $T_2^2 \omega_p^2 = \frac{T_2}{T_1}$. 
Le module à $\omega_p$ devient :
$$|H_{BO}(j\omega_p)| = \frac{K}{\frac{1}{\sqrt{T_1 T_2}} \sqrt{1 + \frac{T_1}{T_2}}\sqrt{1 + \frac{T_2}{T_1}}} = \frac{K \sqrt{T_1 T_2}}{\sqrt{\frac{T_2 + T_1}{T_2}} \sqrt{\frac{T_1 + T_2}{T_1}}} = \frac{K T_1 T_2}{T_1 + T_2}$$
Application numérique pour $K_{lim}$ (où le module vaut 1 au point critique $(-1, j0)$) :
$$\frac{K_{lim} \cdot 0{,}002}{0{,}12} = 1 \implies K_{lim} = \frac{0{,}12}{0{,}002} = 60 \; \text{s}^{-1}$$
*(Résultat cohérent avec le critère de Routh).*

#### 4. Calcul des marges de stabilité (pour $K = 2$)
Avec $K = 2$, le système est stable.
- **Pulsation de gain $\omega_g$** : $|H_{BO}(j\omega_g)| = 1$.
  $$\frac{2}{\omega_g \sqrt{1 + (0{,}1 \omega_g)^2}\sqrt{1 + (0{,}02 \omega_g)^2}} = 1$$
  Par résolution numérique ou approximation (le gain étant faible, $\omega_g$ est petite, $\approx 2 \; \text{rad/s}$ car $\frac{2}{\omega_g} \approx 1$ pour les termes $\approx 1$) :
  Vérifions $\omega_g \approx 1{,}85 \; \text{rad/s}$.
  (À cette pulsation, les termes $T_1\omega_g$ et $T_2\omega_g$ sont proches de 0, donc $|H_{BO}(j\omega_g)| \approx \frac{2}{\omega_g} = 1 \implies \omega_g \approx 2$). Valeur plus précise : $\omega_g \approx 1{,}82 \; \text{rad/s}$.

- **Marge de phase $M_\phi$** :
  $$M_\phi = 180^\circ + \text{Arg}(H_{BO}(j\omega_g)) = 180^\circ - 90^\circ - \arctan(0{,}1 \times 1{,}82) - \arctan(0{,}02 \times 1{,}82)$$
  $$M_\phi = 90^\circ - \arctan(0{,}182) - \arctan(0{,}036) \approx 90^\circ - 10{,}3^\circ - 2{,}1^\circ = 77{,}6^\circ$$
  La marge de phase est très confortable ($M_\phi > 45^\circ$), garantissant un amortissement satisfaisant sans dépassement excessif.

- **Marge de gain $M_G$** :
  La phase atteint $-\pi$ à $\omega_p \approx 11{,}18 \; \text{rad/s}$. 
  Le module à cette pulsation est :
  $$|H_{BO}(j\omega_p)| = \frac{2 \times 0{,}002}{0{,}12} = \frac{0{,}004}{0{,}12} = \frac{1}{30}$$
  Exprimée en décibels :
  $$M_G = -20 \log_{10}\left(|H_{BO}(j\omega_p)|\right) = -20 \log_{10}\left(\frac{1}{30}\right) = 20 \log_{10}(30) \approx 29{,}5 \; \text{dB}$$

#### 5. Analyse critique et robustesse face aux incertitudes
Si $T_2$ augmente de $+30\%$ (usure, augmentation des inerties ou des inductances parasites), le produit $T_1 T_2$ augmente, ce qui élève le gain en haute fréquence de la chaîne ouverte et réduit la marge de phase. 
*Critique du modèle :* Le modèle néglige les retards purs (temps de calcul de la commande numérique par exemple). Un retard pur introduit un déphasage additionnel $-\tau_{retard} \omega$ qui dégrade drastiquement la marge de phase à haute pulsation. 
Si $M_\phi$ venait à passer sous les $45^\circ$ suite à ces variations paramétriques, l'ingénieur devrait implémenter un **correcteur à avance de phase** (pour redresser la phase autour de la pulsation de gain) ou baisser le gain $K$, au détriment toutefois de la rapidité et de la précision dynamique du système.