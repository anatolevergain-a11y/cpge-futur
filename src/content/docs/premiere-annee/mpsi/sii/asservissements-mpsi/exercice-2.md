---
title: 'Exercice 2 : Réponse temporelle et fréquentielle'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les systèmes de positionnement haute précision utilisés dans les têtes de lecture optique ou les tables micrométriques nécessitent des performances dynamiques rigoureuses. L'étude proposée porte sur l'asservissement en position d'un axe linéaire piloté par un moteur à courant continu.

On modélise la chaîne directe par un système du second ordre. La fonction de transfert en boucle ouverte (FTBO) du système est notée $H_{BO}(p)$ et la fonction de transfert en boucle fermée (FTBF) par $H_{BF}(p)$.

L'schéma bloc de l'asservissement est caractérisé par :
- Une entrée : la consigne de position $E(p)$
- Une sortie : la position réelle du mobile $S(p)$
- Un retour unitaire ($\text{gain}=1$)

La fonction de transfert en boucle ouverte est définie par :
$$H_{BO}(p) = \frac{K}{p(1 + \tau p)}$$

Avec :
- $K = 10\text{ s}^{-1}$, le gain global de la chaîne ouverte.
- $\tau = 0{,}05\text{ s}$, la constante de temps mécanique et électrique regroupée.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Détermination de la FTBF :** Exprimer la fonction de transfert en boucle fermée $H_{BF}(p) = \frac{S(p)}{E(p)}$ sous la forme canonique d'un système du second ordre :
   $$H_{BF}(p) = \frac{1}{\frac{p^2}{\omega_n^2} + \frac{2z}{\omega_n}p + 1}$$
   Identifier l'expression et la valeur numérique de la pulsation propre non amortie $\omega_n$ et du facteur d'amortissement $z$.

2. **Réponse temporelle :** On soumet le système à un échelon de consigne unitaire $e(t) = \mathcal{U}(t)$. 
   - Déterminer l'expression de la sortie $s(t)$ dans le domaine temporel en supposant le régime oscillant amorti ($z < 1$). (On rappelle que la valeur numérique de $z$ doit être injectée).
   - Calculer l'expression de l'écart permanent $\varepsilon_p$ en régime permanent face à cette même entrée en échelon.

3. **Réponse fréquentielle :** 
   - Exprimer la fonction de transfert harmonique $H_{BF}(j\omega)$.
   - Déterminer l'expression du module $M(\omega) = |H_{BF}(j\omega)|$ et de la phase $\phi(\omega) = \arg(H_{BF}(j\omega))$.
   - Calculer la pulsation de résonance $\omega_r$ (si elle existe) et le coefficient de surtension $Q = M(\omega_r)$.

4. **Analyse critique du modèle :** 
   - Le modèle linéaire à retour unitaire présente-t-il une erreur statique nulle face à une rampe de consigne $e(t) = t \cdot \mathcal{U}(t)$ ? Justifier.
   - Quelles sont les limites physiques de ce modèle linéaire (saturation, frottements secs) non pris en compte dans l'équation différentielle ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utilisez la formule générale de Black pour un retour unitaire : $H_{BF}(p) = \frac{H_{BO}(p)}{1 + H_{BO}(p)}$. Identifiez ensuite par identification terme à terme avec la forme canonique.
- **Question 2 :** Pour l'écart permanent, utilisez le théorème de la valeur finale (en vérifiant la stabilité préalable du système).
- **Question 3 :** Le maximum du module pour un système du second ordre se calcule en dérivant $M(\omega)^2$ par rapport à $\omega$ ou en utilisant la formule classique du pic de résonance.
- **Question 4 :** Pour l'erreur de trainage (face à une rampe), calculez $\lim_{p \to 0} p \cdot (1 - H_{BF}(p)) \cdot \frac{1}{p^2}$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Détermination de la FTBF
La fonction de transfert en boucle ouverte est :
$$H_{BO}(p) = \frac{K}{p(1 + \tau p)}$$

La fonction de transfert en boucle fermée avec un retour unitaire s'écrit :
$$H_{BF}(p) = \frac{H_{BO}(p)}{1 + H_{BO}(p)} = \frac{\frac{K}{p(1 + \tau p)}}{1 + \frac{K}{p(1 + \tau p)}} = \frac{K}{p(1 + \tau p) + K}$$

En développant le dénominateur :
$$H_{BF}(p) = \frac{K}{\tau p^2 + p + K}$$

Mettons sous forme canonique en divisant numérateur et dénominateur par $K$ :
$$H_{BF}(p) = \frac{1}{\frac{\tau}{K}p^2 + \frac{1}{K}p + 1}$$

Par identification avec la forme canonique d'un second ordre $\frac{1}{\frac{p^2}{\omega_n^2} + \frac{2z}{\omega_n}p + 1}$ :
- $\frac{1}{\omega_n^2} = \frac{\tau}{K} \implies \omega_n = \sqrt{\frac{K}{\tau}}$
- $\frac{2z}{\omega_n} = \frac{1}{K} \implies z = \frac{\omega_n}{2K} = \frac{1}{2\sqrt{K\tau}}$

**Applications numériques :**
- $\omega_n = \sqrt{\frac{10}{0{,}05}} = \sqrt{200} \approx 14{,}14\text{ rad}\cdot\text{s}^{-1}$
- $z = \frac{1}{2\sqrt{10 \times 0{,}05}} = \frac{1}{2\sqrt{0{,}5}} = \frac{1}{\sqrt{2}} \approx 0{,}707$

Le système est bien amorti ($z = \frac{\sqrt{2}}{2}$ correspond à un amortissement optimal souvent recherché en régulation).

---

#### 2. Réponse temporelle et erreur
L'entrée est un échelon unitaire $E(p) = \frac{1}{p}$. La sortie est :
$$S(p) = H_{BF}(p) \cdot E(p) = \frac{\omega_n^2}{p(p^2 + 2z\omega_n p + \omega_n^2)}$$

Puisque $z < 1$ (ici $z = 0{,}707$), la réponse temporelle $s(t)$ pour $t \ge 0$ s'exprime par :
$$s(t) = \left(1 - \frac{e^{-z\omega_n t}}{\sqrt{1 - z^2}} \sin(\omega_n \sqrt{1 - z^2} t + \theta)\right)\mathcal{U}(t)$$
avec $\cos(\theta) = z$.

**Écart permanent :**
L'écart en régime permanent $\varepsilon_p$ se calcule via le théorème de la valeur finale :
$$\varepsilon_p = \lim_{t \to +\infty} (e(t) - s(t)) = \lim_{p \to 0} p \cdot (E(p) - S(p))$$
$$\varepsilon_p = \lim_{p \to 0} p \cdot \frac{1}{p} \left(1 - H_{BF}(p)\right) = 1 - H_{BF}(0)$$
Comme $H_{BF}(0) = 1$ :
$$\varepsilon_p = 0$$
Le système possède une classe égale à 1 (présence d'un intégrateur pur dans la FTBO), l'erreur statique à un échelon est donc nulle.

---

#### 3. Réponse fréquentielle
On remplace $p$ par $j\omega$ dans $H_{BF}(p)$ :
$$H_{BF}(j\omega) = \frac{1}{1 - \frac{\omega^2}{\omega_n^2} + j \frac{2z\omega}{\omega_n}}$$

- **Module :**
  $$M(\omega) = |H_{BF}(j\omega)| = \frac{1}{\sqrt{\left(1 - \frac{\omega^2}{\omega_n^2}\right)^2 + \left(\frac{2z\omega}{\omega_n}\right)^2}}$$

- **Phase :**
  $$\phi(\omega) = \arg(H_{BF}(j\omega)) = -\arctan\left(\frac{\frac{2z\omega}{\omega_n}}{1 - \frac{\omega^2}{\omega_n^2}}\right)$$

- **Pulsation de résonance et surtension :**
  La pulsation de résonance $\omega_r$ existe si $z < \frac{\sqrt{2}}{2}$. 
  Ici, $z = \frac{\sqrt{2}}{2} \approx 0{,}707$. La condition limite est atteinte. 
  La pulsation de résonance est donnée par :
  $$\omega_r = \omega_n \sqrt{1 - 2z^2} = 14{,}14 \times \sqrt{1 - 2\left(\frac{1}{\sqrt{2}}\right)^2} = 0\text{ rad}\cdot\text{s}^{-1}$$
  Le maximum du module se produit donc à $\omega = 0$ avec un coefficient de surtension $Q = M(0) = 1$. Il n'y a pas de dépassement fréquentiel prononcé, ce qui confirme un comportement de type Butterworth d'ordre 2.

---

#### 4. Analyse critique du modèle
- **Erreur de traînage (face à une rampe) :**
  Soit $e(t) = t \cdot \mathcal{U}(t)$, donc $E(p) = \frac{1}{p^2}$. L'erreur est :
  $$\varepsilon(t) = e(t) - s(t)$$
  Par le théorème de la valeur finale :
  $$\varepsilon_{rampe} = \lim_{p \to 0} p \cdot \left(1 - H_{BF}(p)\right) \frac{1}{p^2} = \lim_{p \to 0} \frac{1 - H_{BF}(p)}{p}$$
  En injectant l'expression de $H_{BF}(p)$ :
  $$1 - H_{BF}(p) = \frac{\frac{\tau}{K}p^2 + \frac{1}{K}p}{\frac{\tau}{K}p^2 + \frac{1}{K}p + 1}$$
  Alors :
  $$\varepsilon_{rampe} = \lim_{p \to 0} \frac{\frac{\tau}{K}p + \frac{1}{K}}{\frac{\tau}{K}p^2 + \frac{1}{K}p + 1} = \frac{1}{K}$$
  L'erreur de traînage est constante et vaut $\frac{1}{K} = 0{,}1\text{ s}$. Le modèle linéaire garantit une erreur constante en régime permanent face à une rampe.

- **Limites physiques du modèle :**
  1. *Les saturations :* En pratique, la commande du moteur est limitée par une tension maximale d'alimentation (saturation en amplitude) et par des limites de vitesse (limitation du gradient).
  2. *Les non-linéarités :* Les frottements secs (Coulomb) et les jeux mécaniques dans les réducteurs ne sont pas pris en compte par la linéarité du modèle du second ordre.
  3. *Les modes propres non modélisés :* La structure mécanique flexible possède des fréquences de résonance propres à haute fréquence qui peuvent exciter des vibrations non souhaitées si la bande passante du système asservi est trop large.