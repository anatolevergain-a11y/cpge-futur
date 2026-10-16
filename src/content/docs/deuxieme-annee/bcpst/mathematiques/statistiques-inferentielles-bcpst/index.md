---
title: 'Cours : Statistiques inférentielles et tests'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE BCPST.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $(\Omega, \mathcal{A}, \mathbb{P})$ un espace probabilisé. En statistique inférentielle, on cherche a evaluer des caracteristiques inconnues d'une population mere a partir de l'observation d'un echantillon.

### Echantillon i.i.d. et Statistiques
*   **Definition (Echantillon i.i.d.) :** Soit $X$ une variable aleatoire reelle definie sur $(\Omega, \mathcal{A}, \mathbb{P})$. Un **echantillon i.i.d.** de taille $n$ de la loi de $X$ est un $n$-uple de variables aleatoires $(X_1, X_2, \dots, X_n)$ definies sur $(\Omega, \mathcal{A}, \mathbb{P})$, mutuellement independantes et toutes de meme loi que $X$.
*   **Definition (Statistique) :** On appelle **statistique** toute variable aleatoire $T_n$ qui s'exprime comme une fonction measurable de l'echantillon : 
    $$T_n = g(X_1, X_2, \dots, X_n)$$
    avec $g : \mathbb{R}^n \to \mathbb{R}$ une application continue (ou borelienne). *Remarque fondamentale : une statistique ne depend d'aucun parametre inconnu.*

### Estimateurs et Qualite
Soit $\theta \in \Theta$ un parametre reel inconnu caracterisant la loi de $X$ (par exemple l'esperance $\mu$ ou la variance $\sigma^2$).
*   **Estimateur :** Un estimateur $\widehat{\theta}_n$ de $\theta$ est une statistique destinee a approcher $\theta$ : $\widehat{\theta}_n = \varphi(X_1, \dots, X_n)$.
*   **Biais :** Le biais d'un estimateur $\widehat{\theta}_n$ est defini par :
    $$\text{bias}(\widehat{\theta}_n) = \mathbb{E}(\widehat{\theta}_n) - \theta$$
    L'estimateur est dit **sans biais** si, pour tout $\theta \in \Theta$, $\text{bias}(\widehat{\theta}_n) = 0$.
*   **Risque quadratique moyen (RQM) :** Il quantifie l'erreur globale de l'estimateur :
    $$\text{RQM}(\widehat{\theta}_n) = \mathbb{E}\left((\widehat{\theta}_n - \theta)^2\right) = \text{var}(\widehat{\theta}_n) + (\text{bias}(\widehat{\theta}_n))^2$$
*   **Convergence en probabilite :** L'estimateur $\widehat{\theta}_n$ est **convergent** si la suite de variables aleatoires $(\widehat{\theta}_n)_{n \ge 1}$ converge en probabilite vers $\theta$ :
    $$\forall \varepsilon > 0, \quad \lim_{n \to +\infty} \mathbb{P}\left(|\widehat{\theta}_n - \theta| > \varepsilon\right) = 0$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Estimateurs usuels et leurs proprietes
Soit $(X_1, \dots, X_n)$ un echantillon i.i.d. de variables admettant une esperance $\mu$ et une variance $\sigma^2$ finies.
1.  **Moyenne empirique :** $\overline{X}_n = \frac{1}{n} \sum_{i=1}^n X_i$.
2.  **Variance empirique (non ajustee) :** $\widetilde{S}_n^2 = \frac{1}{n} \sum_{i=1}^n (X_i - \overline{X}_n)^2 = \left(\frac{1}{n} \sum_{i=1}^n X_i^2\right) - (\overline{X}_n)^2$.
3.  **Variance empirique ajustee (sans biais) :** $S_n^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \overline{X}_n)^2$.

> **Theoreme (Etude de la moyenne et de la variance empirique) :**
> - $\overline{X}_n$ est un estimateur sans biais et convergent de $\mu$.
> - $S_n^2$ est un estimateur sans biais de $\sigma^2$ (pour $n \ge 2$).

> **Démonstration (Non-biais de $S_n^2$) :**
> Exprimons d'abord $\sum_{i=1}^n (X_i - \overline{X}_n)^2$ :
> $$\sum_{i=1}^n (X_i - \overline{X}_n)^2 = \sum_{i=1}^n X_i^2 - n \overline{X}_n^2$$
> Calculons l'esperance de $\sum_{i=1}^n X_i^2$. Par independance et identite de loi :
> $$\mathbb{E}\left(\sum_{i=1}^n X_i^2\right) = \sum_{i=1}^n \mathbb{E}(X_i^2) = n (\sigma^2 + \mu^2)$$
> Pour le terme en $\overline{X}_n^2$, on utilise $\text{var}(\overline{X}_n) = \mathbb{E}(\overline{X}_n^2) - (\mathbb{E}(\overline{X}_n))^2$, soit :
> $$\mathbb{E}(\overline{X}_n^2) = \text{var}(\overline{X}_n) + (\mathbb{E}(\overline{X}_n))^2 = \frac{\sigma^2}{n} + \mu^2$$
> Ainsi :
> $$\mathbb{E}\left(n \overline{X}_n^2\right) = n \left(\frac{\sigma^2}{n} + \mu^2\right) = \sigma^2 + n \mu^2$$
> Par linearite de l'esperance :
> $$\mathbb{E}\left(\sum_{i=1}^n (X_i - \overline{X}_n)^2\right) = n(\sigma^2 + \mu^2) - (\sigma^2 + n \mu^2) = (n-1)\sigma^2$$
> En divisant par $n-1$ ($n \ge 2$), on obtient $\mathbb{E}(S_n^2) = \sigma^2$. $\blacksquare$

### Intervalles de confiance
*   **Definition :** Soit $\theta$ un parametre inconnu et $\alpha \in ]0, 1[$. Un **intervalle de confiance** au niveau de confiance $1-\alpha$ pour $\theta$ est un intervalle aleatoire $[A_n, B_n]$ tel que :
    $$\mathbb{P}\left(\theta \in [A_n, B_n]\right) \ge 1 - \alpha$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Cas gaussiens ou Asymptotiques (Théorème de la Limite Centrale)
Si $n$ est grand ($n \ge 30$) ou si la loi parente est gaussienne $\mathcal{N}(\mu, \sigma^2)$ :

1.  **Intervalle de confiance pour l'esperance $\mu$ ($\sigma$ connue) :**
    $$\text{IC}_{1-\alpha}(\mu) = \left[ \overline{X}_n - u_{1-\alpha/2} \frac{\sigma}{\sqrt{n}}, \, \overline{X}_n + u_{1-\alpha/2} \frac{\sigma}{\sqrt{n}} \right]$$
    ou $u_{1-\alpha/2}$ est le fractile d'ordre $1-\alpha/2$ de la loi normale centre-reduite $\mathcal{N}(0,1)$ (ex: $1.96$ pour $\alpha = 0.05$).

2.  **Intervalle de confiance pour l'esperance $\mu$ ($\sigma$ inconnue) :**
    On remplace $\sigma$ par sa version ajustee $S_n$ :
    $$\text{IC}_{1-\alpha}(\mu) = \left[ \overline{X}_n - t_{n-1, 1-\alpha/2} \frac{S_n}{\sqrt{n}}, \, \overline{X}_n + t_{n-1, 1-\alpha/2} \frac{S_n}{\sqrt{n}} \right]$$
    ou $t_{n-1, 1-\alpha/2}$ est le fractile de la loi de Student a $n-1$ dures de liberte (si $n \ge 30$, on approxime par $u_{1-\alpha/2}$).

3.  **Intervalle de confiance pour une proportion $p$ (echantillon de Bernoulli) :**
    Par application du TLC ($n$ grand, $np \ge 5$, $n(1-p) \ge 5$) :
    $$\text{IC}_{1-\alpha}(p) = \left[ F_n - u_{1-\alpha/2} \sqrt{\frac{F_n(1-F_n)}{n}}, \, F_n + u_{1-\alpha/2} \sqrt{\frac{F_n(1-F_n)}{n}} \right]$$
    ou $F_n = \overline{X}_n$ est la frequence empirique.

### B. Tests statistiques d'hypothèse
Protocole standard en BCPST :
1.  **Formulation des hypotheses :** Hypothese nulle $H_0 : \theta = \theta_0$ contre l'hypothese alternative $H_1 : \theta \neq \theta_0$ (bilateral) ou $\theta > \theta_0$ (unilateral).
2.  **Choix de la statistique de test $D_n$ :** Construction d'une statistique dont la loi sous $H_0$ est connue (ex: loi normale ou loi de Student).
3.  **Region critique (ou de rejet) $\mathcal{W}$ :** Ensemble des valeurs de $D_n$ conduisant au rejet de $H_0$ pour un risque de premiere espece $\alpha$ fixe (seuil de signification, generalement $5\%$ ou $1\%$).
4.  **Conclusion :** Comparaison de la valeur observee $d_{obs}$ avec les bornes de $\mathcal{W}$.

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confusion entre $\widetilde{S}_n^2$ et $S_n^2$ :** Utiliser la variance empirique non ajustee $\widetilde{S}_n^2$ (divisee par $n$) pour estimer la variance d'un echantillon genere une estimation **biaisee**. Il faut imperativement utiliser $S_n^2$ (divisee par $n-1$).
2.  **Mauvaise verification des conditions d'application du TLC :** Ne jamais appliquer l'approximation normale pour des echantillons de petite taille ($n < 30$) sur des variables non gaussiennes, en particulier pour des variables de Bernoulli avec $nF_n < 5$ ou $n(1-F_n) < 5$.
3.  **Redaction des tests d'hypothese :** Ne jamais ecrire "on accepte $H_0$". La rigueur scientifique impose de formuler : *"on ne rejette pas $H_0$ "* ou *"les donnees ne permettent pas de rejeter $H_0$ au seuil $\alpha$"*.
4.  **Interpretation erronee d'un intervalle de confiance :** Un intervalle de confiance realise $[a, b]$ n'est pas un intervalle aleatoire : $\theta$ est une constante (inconnue) et $[a, b]$ est un intervalle fixe. L'alea reside dans la procedure d'echantillonnage (avant l'experience). On ne dit pas *"il y a $95\%$ de chance que $\theta$ soit dans $[a, b]$"*, mais *"la methode utilisee fournit un intervalle qui, dans $95\%$ des echantillons, recouvre la vraie valeur $\theta$"*.