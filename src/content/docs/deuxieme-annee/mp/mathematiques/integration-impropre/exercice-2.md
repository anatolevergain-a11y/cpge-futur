---
title: 'Exercice 2 : Intégrales de Riemann et Bertrand'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude des intégrales de Bertrand et applications asymptotiques

**Filière :** MP  
**Matière :** Mathématiques  
Chapitre: ** Intégration sur un intervalle quelconque (Intégrales impropres)  
**Thème :** Intégrales de Riemann et de Bertrand, comparaisons asymptotiques et analyse critique.

---

## 1. Énoncé

Le problème se propose d'étudier la nature (convergence ou divergence) d'une famille classique d'intégrales impropres dites **intégrales de Bertrand**, définies pour $\alpha, \beta \in \mathbb{R}$ par :
$$I(\alpha, \beta) = \int_2^{+\infty} \frac{\text{d}t}{t^\alpha (\ln t)^\beta}$$
Dans un second temps, on s'intéressera au comportement asymptotique de ces intégrales lorsque l'on s'approche des bornes de validité, et l'on poussera l'analyse critique sur les limites du modèle mathématique employé en physique statistique et en analyse numérique.

---

## 2. Questions

### Partie I : Rappels sur les intégrales de Riemann
1. Soit $\alpha \in \mathbb{R}$. Pour quelles valeurs de $\alpha$ l'intégrale de Riemann $\int_2^{+\infty} \frac{\text{d}t}{t^\alpha}$ converge-t-elle ? Justifier brièvement.

### Partie II : Étude des intégrales de Bertrand
On pose $f_{\alpha, \beta}(t) = \frac{1}{t^\alpha (\ln t)^\beta}$ pour $t \in [2, +\infty[$.
2. **Cas $\alpha > 1$ :** Montrer, à l'aide d'une comparaison de fonctions négligeables (croissances comparées), que l'intégrale $I(\alpha, \beta)$ converge **quel que soit** $\beta \in \mathbb{R}$.
3. **Cas $\alpha < 1$ :** De même, en comparant $f_{\alpha, \beta}(t)$ à une puissance bien choisie de $t$, montrer que l'intégrale $I(\alpha, \beta)$ diverge vers $+\infty$ quel que soit $\beta \in \mathbb{R}$.
4. **Cas $\alpha = 1$ :** En effectuant le changement de variable $u = \ln t$, se ramener à une intégrale de Riemann bien connue. En déduire la nature de $I(1, \beta)$ selon les valeurs de $\beta$.
5. Synthétiser l'ensemble des résultats dans un tableau récapitulatif clair.

### Partie III : Analyse critique et limites du modèle
6. **Analyse critique :** Soit la fonction $g(t) = \frac{\sin(t)}{t}$. L'intégrale $\int_1^{+\infty} g(t)\text{d}t$ est semi-convergente. Que se passe-t-il si l'on tente d'appliquer aveuglément des critères de comparaison absolue de type Bertrand ? Discuter des limites de l'utilisation des échelles de comparaison logarithmiques face à l'oscillance pure.

---

## 3. Pistes et Indications

* **Q1 :** Utiliser une primitive explicite (comportement en $t^{1-\alpha}$).
* **Q2 :** Fixons $\alpha > 1$. On peut choisir $\alpha' \in ]1, \alpha[$. Quel est le comportement de $\frac{f_{\alpha, \beta}(t)}{1/t^{\alpha'}}$ en $+\infty$ ?
* **Q4 :** Le changement de variable $u = \ln t$ est $C^1$ et strictement croissante de $[2, +\infty[$ vers $[\ln 2, +\infty[$. Exprimez $\text{d}u$.
* **Q6 :** Pensez à la distinction cruciale entre convergence simple (ou semi-convergence) et convergence absolue. Les échelles de Bertrand s'appliquent aux fonctions de signe constant (ou à convergence absolue).

---

## 4. Corrigé pas à pas

### Partie I : Rappels sur les intégrales de Riemann
1. Par calcul direct des primitives (pour $\alpha \neq 1$, $\int_2^X t^{-\alpha}\text{d}t = \frac{X^{1-alpha}-2^{1-\alpha}}{1-\alpha}$, et pour $\alpha = 1$, $[\ln t]_2^X$), l'intégrale $\int_2^{+\infty} \frac{\text{d}t}{t^\alpha}$ converge **si et seulement si $\alpha > 1$**.

### Partie II : Étude des intégrales de Bertrand
2. **Cas $\alpha > 1$ :**  
   Soit $\alpha' \in ]1, \alpha[$. On a $\alpha - \alpha' > 0$. Par croissances comparées,
   $$\lim_{t \to +\infty} t^{\alpha'} f_{\alpha, \beta}(t) = \lim_{t \to +\infty} \frac{1}{t^{\alpha - \alpha'} (\ln t)^\beta} = 0$$
   Ainsi, $f_{\alpha, \beta}(t) = o\left(\frac{1}{t^{\alpha'}}\right)$ en $+\infty$. 
   Comme $\alpha' > 1$, l'intégrale $\int_2^{+\infty} \frac{\text{d}t}{t^{\alpha'}}$ converge. Par le critère de comparaison des intégrales de fonctions positives, **$I(\alpha, \beta)$ converge**.

3. **Cas $\alpha < 1$ :**  
   Soit $\alpha' \in ]\alpha, 1[$. On a $\alpha' - \alpha > 0$. 
   $$\lim_{t \to +\infty} t^{\alpha'} f_{\alpha, \beta}(t) = \lim_{t \to +\infty} \frac{t^{\alpha' - \alpha}}{(\ln t)^\beta} = +\infty$$
   Donc $f_{\alpha, \beta}(t) \underset{+\infty}{\sim} \frac{\text{constante}}{t^{\alpha'}}$ n'est pas correct directement, mais par définition de la limite, il existe $A \ge 2$ tel que pour tout $t \ge A$, $f_{\alpha, \beta}(t) \ge \frac{1}{t^{\alpha'}}$.
   Puisque $\alpha' < 1$, l'intégrale $\int_2^{+\infty} \frac{\text{d}t}{t^{\alpha'}}$ diverge. Par minoration, **$I(\alpha, \beta)$ diverge** vers $+\infty$.

4. **Cas $\alpha = 1$ :**  
   On pose le changement de variable $u = \ln t$. La fonction $t \mapsto \ln t$ est un $C^1$-difféomorphismes de $[2, +\infty[$ sur $[\ln 2, +\infty[$. On a $\text{d}u = \frac{\text{d}t}{t}$, soit $\text{d}t = e^u \text{d}u$, et $t = e^u$.
   L'intégrale devient :
   $$I(1, \beta) = \int_{\ln 2}^{+\infty} \frac{e^u \text{d}u}{e^u u^\beta} = \int_{\ln 2}^{+\infty} \frac{\text{d}u}{u^\beta}$$
   On reconnait une intégrale de Riemann (à la borne près). Celle-ci converge **si et seulement si $\beta > 1$**.

5. **Tableau synthétique :**
   * Si $\alpha > 1$ : **Convergence** (quel que soit $\beta$)
   * Si $\alpha < 1$ : **Divergence** (quel que soit $\beta$)
   * Si $\alpha = 1$ : **Convergence si $\beta > 1$**, **Divergence si $\beta \le 1$**.

---

### Partie III : Analyse critique et limites du modèle

6. **Analyse critique des limites du modèle :**
   Les critères de Riemann et de Bertrand reposent fondamentalement sur l'hypothèse de **positivité** (ou de comparabilité en module pour la convergence absolue) de la fonction intégrée. 
   
   Considérons l'intégrale de Dirichlet $\int_1^{+\infty} \frac{\sin t}{t} \text{d} t$. 
   * Si l'on tente d'appliquer une domination par une échelle de Bertrand, on majore par $|\frac{\sin t}{t}| \le \frac{1}{t}$, ce qui correspond à un cas limite ($\alpha = 1, \beta = 0$) pour lequel l'intégrale dominante *diverge*. 
   * Pourtant, l'intégrale initiale **converge** (semi-convergence via une intégration par parties ou le critère d'Abel).

   **Limites du modèle :** 
   Les échelles de Bertrand échouent à capturer les phénomènes d'**oscillations compensatrices**. Le modèle suppose implicitement que la décroissance de l'amplitude se fait de manière monotone ou dominée par une enveloppe algébrico-logarithmique globale. En physique statistique ou en traitement du signal, négliger la phase d'une fonction sous prétexte que son enveloppe de Bertrand diverge conduit à des aberrations physiques (erreurs de troncature de séries de Fourier, non-sens énergétiques dans l'analyse de signaux à support infini). L'utilisation aveugle de ces critères hors de leur domaine de validité (fonctions de signe constant ou intégration absolue) constitue un écueil classique que les jurys de concours sanctionnent sévèrement.