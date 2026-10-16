---
title: 'Exercice 2 : Correcteurs PID'
description: 'Problème d entraînement type concours.'
---

# Problème : Synthèse et analyse critique d'un correcteur PID pour l'asservissement d'un axe mécatronique

## Énoncé

On s'intéresse à l'asservissement en position d'un axe motorisé vertical utilisé dans un système de levage industriel. Le cahier des charges impose une précision statique parfaite, un temps de réponse minimal et une robustesse vis-à-vis des incertitudes sur la charge embarquée.

Le système est modélisé par sa fonction de transfert $H(p)$, exprimant la position de la charge $Y(p)$ en sortie (en \text{rad}) en fonction de la tension de commande du moteur $U(p)$ (en \text{V}) :

$$H(p) = \frac{Y(p)}{U(p)} = \frac{K}{\tau p (1 + \frac{p}{\omega_0})^2}$$

Avec les valeurs numériques suivantes :
* $K = 2,5 \text{ rad}\cdot\text{s}^{-1}\cdot\text{V}^{-1}$
* $\tau = 0,1 \text{ s}$
* $\omega_0 = 50 \text{ rad}\cdot\text{s}^{-1}$

Le schéma bloc de la commande est un retour unitairess classique avec un correcteur $C(p)$. La référence est notée $R(p)$ et la perturbation éventuelle est négligée dans un premier temps.

---

## Questions

### 1. Analyse du système non corrigé
1. Déterminer la classe du système et en déduire son erreur statique pour une entrée en échelon de position. Conclure quant au besoin d'un correcteur.

### 2. Synthèse d'un correcteur PID
On souhaite utiliser un correcteur PID de forme série (ou industrielle) dont la fonction de transfert s'écrit :
$$C(p) = K_p \left(1 + \frac{1}{T_i p}\right)(1 + T_d p)$$

2. Exprimer la fonction de transfert en boucle ouverte $FTBO(p) = C(p)H(p)$.
3. Déterminer l'action du terme intégral sur la précision du système asservi.
4. Par une méthode de compensation de pôles (on choisira de simplifier les pôles dominants du système), déterminer les expressions et les valeurs numériques de $T_i$ et $T_d$ pour que la $FTBO$ se rammette à celle d'un système de type 1 d'ordre 1 simple, de constante de temps $\tau$.
5. Exprimer $K_p$ en fonction de $\tau$ et d'une pulsation de coupure choisie $\omega_c = 10 \text{ rad}\cdot\text{s}^{-1}$ pour assurer la stabilité. Calculer la valeur numérique de $K_p$.

### 3. Analyse critique et limites du modèle
6. Le terme dérivé $T_d p$ est physiquement irréalisable sous cette forme pure. Proposer une modification de la fonction de transfert du correcteur pour le rendre réalisable et expliquer l'impact sur le comportement haute fréquence.
7. Discuter l'impact de la saturation de la commande $u(t)$ sur le comportement du système en présence d'un correcteur PID (phénomène de *windup*). Quelle solution logicielle peut-on mettre en œuvre ?

---

## Pistes

* **Q1 :** Regardez la puissance de $p$ au dénominateur de $H(p)$ quand $p \to 0$.
* **Q4 :** Identifiez les termes du numérateur de $C(p)$ qui peuvent annuler les termes en $(1 + \frac{p}{\omega_0})^2$ de $H(p)$. Attention, l'ordre 2 au dénominateur de $H(p)$ nécessite une approximation ou un double zero réel/complexe. Ici, on posera $T_d = \frac{2}{\omega_0}$.
* **Q6 :** Pensez à l'introduction d'un pôle non dominant pour limiter le gain en haute fréquence du dérivateur.

---

## Corrigé pas à pas

### 1. Analyse du système non corrigé
1. La fonction de transfert $H(p)$ possède un terme $\tau p$ au dénominateur. Le système est de **classe 1**.
   Pour une entrée en échelon de position d'amplitude $R_0$, l'erreur statique vaut $\varepsilon_s = \lim_{p\to 0} p \cdot \frac{R_0}{p} \cdot \frac{1}{1 + H(p)} = 0$. Le système non corrigé est précis en statique. *Cependant*, la dynamique (temps de réponse) et la marge de phase ne sont pas maîtrisées, et l'ajout d'une charge modifie $K$. L'utilisation d'un PID se justifie pour améliorer la rapidité tout en garantissant une robustesse accrue.

### 2. Synthèse d'un correcteur PID
2. La fonction de transfert en boucle ouverte est :
   $$FTBO(p) = C(p)H(p) = K_p K \frac{(1 + T_i p)(1 + T_d p)}{T_i p \cdot \tau p (1 + \frac{p}{\omega_0})^2}$$

3. L'action intégrale ($\frac{1}{T_i p}$) ajoute un integrateur pur dans la boucle ouverte, faisant passer le système de la classe 1 à la **classe 2**. L'erreur en échelon reste nulle, mais l'erreur de trainage (rampe) devient également nulle.

4. Par compensation, on choisit les zéros du PID pour simplifier les pôles lents du système. Le système possède un pôle double en $\omega_0$ (si on approxime $(1 + \frac{p}{\omega_0})^2 \approx 1 + \frac{2}{\omega_0}p$ pour les basses fréquences, ou en choisissant un PID avec deux zéros). 
   En posant $T_d = \frac{2}{\omega_0} = \frac{2}{50} = 0,04 \text{ s}$ et $T_i = \tau = 0,1 \text{ s}$, la $FTBO$ devient :
   $$FTBO(p) = \frac{K_p K}{\tau T_i p^2} \dots$$ 
   *Correction rigoureuse (ordre 3) :* Avec un PID standard, on ne peut compenser qu'un polynôme du 2ème degré si $T_d^2 > 4 \dots$ Posons $T_i = \tau = 0,1 \text{ s}$ et $T_d = \frac{2}{\omega_0} = 0,04 \text{ s}$. La $FTBO$ se simplifie en :
   $$FTBO(p) = \frac{K_p K}{\tau p (1 + \frac{p}{\omega_0})}$$ (en supposant une simplification approchée acceptable en PSI).

5. Le module de la $FTBO$ à la pulsation de coupure $\omega_c = 10 \text{ rad}\cdot\text{s}^{-1}$ doit être égal à 1 :
   $$|\mathcal{FTBO}(j\omega_c)| = \frac{K_p K}{\tau \omega_c \sqrt{1 + (\frac{\omega_c}{\omega_0})^2}} = 1$$
   Soit :
   $$K_p = \frac{\tau \omega_c \sqrt{1 + (\frac{\omega_c}{\omega_0})^2}}{K}$$
   A.N. : 
   $$K_p = \frac{0,1 \times 10 \times \sqrt{1 + (\frac{10}{50})^2}}{2,5} = \frac{1 \times \sqrt{1 + 0,04}}{2,5} = \frac{\sqrt{1,04}}{2,5} \approx 0,408 \text{ V}\cdot\text{rad}^{-1}$$

### 3. Analyse critique et limites du modèle
6. **Critique du modèle de dérivateur pur :** 
   Le terme $T_d p$ tend vers l'infini lorsque $p \to +\infty$. En pratique, cela amplifie considérablement le bruit de mesure haute fréquence, ce qui peut saturer ou détruire les actionneurs. 
Modification: ** On utilise un dérivateur filtré :
   $$C_{\text{réel}}(p) = K_p \left(1 + \frac{1}{T_i p}\right) \left(\frac{1 + T_d p}{1 + \frac{T_d}{N} p}\to\right)$$
   où $N$ est un réel compris généralement entre 5 et 20.

7. **Phénomène de *Windup* (saturation) :**
   En cas de grand échelon, la commande $u(t)$ atteint sa saturation (limitations physiques de l'amplificateur ou du moteur). L'erreur persiste, et l'action intégrale continue de cumuler (intégrer) l'erreur, accumulant une valeur aberrante énorme. Lorsque la sortie atteint enfin la consigne, le terme intégral est tellement grand que la commande reste saturée dans l'autre sens, provoquant un dépassement gigantesque, voire une instabilité non linéaire.
Solution: ** Mettre en place un mécanisme d'anti-windup (retro-saturation ou blocage de l'intégrateur lorsque l'actionneur sature).