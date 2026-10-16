---
title: 'Exercice 1 : Sommes de Riemann appliquées au traitement du signal'
description: 'Problème d entraînement type concours.'
---

# Problème : Analyse spectrale discrète et Sommes de Riemann

**Filière :** MPSI  
**Matière :** Mathématiques  
Chapitre: ** Intégration sur un segment / Suites et séries de fonctions  
**Thème :** Traitement du signal et approximation numérique  

---

## Énoncé

Dans le cadre de la numérisation des signaux audio, un ingénieur souhaite estimer la valeur moyenne et la composante fréquentielle d'un signal continu $s(t)$ sur une période d'observation $[0, T]$. 

En pratique, un signal physique n'est jamais connu en tout point : il est échantillonné à une fréquence d'échantillonnage $f_e = \frac{N}{T}$, où $N$ est le nombre de points de mesure. L'appareil de mesure calcule alors une moyenne discrète pour approcher l'intégrale continue.

L'objectif de ce problème est d'étudier mathématiquement cette approximation à l'aide des sommes de Riemann, d'estimer l'erreur commise, puis d'analyser les limites du modèle face à des signaux à haute fréquence (phénomène de repliement).

On se place sur l'intervalle $[0, 1]$ par un changement d'échelle temporel ($T=1$). Soit $f : [0, 1] \to \mathbb{R}$ une fonction continue, représentant un signal électrique.

---

## Questions

### Partie I : Étude de convergence de l'échantillonnage basique
1. Rappeler la définition de la somme de Riemann à gauche $S_N(f)$ associée à la subdivision régulière de $[0, 1]$ de pas $\frac{1}{N}$.
2. Si $f$ est de classe $\mathcal{C}^1$ sur $[0, 1]$, établir une majoration de l'erreur d'approximation $|S_N(f) - \int_{0}^{1} f(t)\,\text{d}t|$ en fonction de $N$ et de $\|f'\|_{\infty}$.
3. *Application au traitement du signal :* On considère le signal sinusoïdal pur $s(t) = \cos(2\pi f_0 t)$ avec une fréquence $f_0 = \mathbf{50\text{ Hz}}$ (fréquence du réseau électrique domestique). Expliciter $S_N(s)$. Quel nombre de points minimal $N$ garantit une erreur d'approximation inférieure à $10^{-2}$ ? L'ordre de grandeur obtenu est-il réaliste pour un système embarqué moderne ?

### Partie II : Analyse spectrale et limites du modèle (Repliement)
On s'intéresse maintenant à l'estimation de la composante de Fourier du signal via une somme de Riemann discrète. On pose pour $k \in \mathbb{N}$:
$$I_k(f) = \int_{0}^{1} f(t)e^{-2i\pi k t}\,\text{d}t \quad \text{et} \quad S_{N,k}(f) = \frac{1}{N}\sum_{p=0}^{N-1} f\left(\frac{p}{N}\right)e^{-2i\pi k \frac{p}{N}}$$

4. Montrer que pour tout $k \in \mathbb{N}$, $\lim_{N \to +\infty} S_{N,k}(f) = I_k(f)$.
5. On choisit le signal haute fréquence $f(t) = \cos(2\pi f_c t)$ avec une fréquence porteuse $f_c = \mathbf{10\text{ kHz}}$ (domaine des ultrasons ou télécommunications bas débit). On échantillonne ce signal à une fréquence $f_e = \frac{N}{T} = \mathbf{8\text{ kHz}}$ (fréquence standard de la téléphonie historique).
   * Calculer explicitement $S_{N,k}(f)$ pour $k=1$ dans ce cas précis (on pourra utiliser les formulas d'Euler et la somme des termes d'une suite géométrique).
   * Que constate-t-on par rapport à la fréquence réelle $f_c$ du signal ? Conclure de manière critique sur les limites du modèle mathématique face à la réalité physique (théorème de Shannon-Nyquist).

---

## Pistes et indications

1. **Q1 & Q2 :** Utiliser l'inégalité des accroissements finis sur chaque intervalle de la subdivision $\left[\frac{p}{N}, \frac{p+1}{N}\right]$.
2. **Q3 :** Majorant de la dérivée d'un cosinus, puis résolution d'une inéquation simple. Comparer $50\text{ Hz}$ et les fréquences d'échantillonnage usuelles ($\approx 44.1\text{ kHz}$ en audio).
3. **Q4 :** C'est une application directe du cours sur les sommes de Riemann pour les fonctions à valeurs complexes.
4. **Q5 :** Transformer la somme en une somme de deux termes géométriques grâce aux exponentielles complexes. Attention au cas particulier où le dénominateur s'annule (résonance / repliement spectral).

---

## Corrigé pas à pas

### Partie I_1. **Somme de Riemann à gauche :**
   Par définition, pour une subdivision régulière de pas $1/N$, la somme de Riemann à gauche est :
   $$S_N(f) = \frac{1}{N}\sum_{p=0}^{N-1} f\left(\frac{p}{N}\right)$$

2. **Majoration de l'erreur :**
   On compare l'intégrale et la somme en utilisant la relation de Chasles :
   $$\int_{0}^{1} f(t)\,\text{d}t - S_N(f) = \sum_{p=0}^{N-1} \int_{p/N}^{(p+1)/N} \left( f(t) - f\left(\frac{p}{N}\right) \right) \text{d}t$$
   Puisque $f$ est de classe $\mathcal{C}^1$, l'inégalité des accroissements finis sur $\left[\frac{p}{N}, t\right]$ donne :
   $$\left|f(t) - f\left(\frac{p}{N}\right)\right| \le \|f'\|_{\infty} \left(t - \frac{p}{N}\right) \le \|f'\|_{\infty} \frac{1}{N}$$
   En intégant sur chaque intervalle de longueur $\frac{1}{N}$ :
   $$\left|\int_{0}^{1} f(t)\,\text{d}t - S_N(f)\right| \le \sum_{p=0}^{N-1} \int_{p/N}^{(p+1)/N} \|f'\|_{\infty} \frac{1}{N}\,\text{d}t = \|f'\|_{\infty} \frac{1}{N}$$
   L'erreur est donc en $\mathcal{O}\left(\frac{1}{N}\right)$.

3. **Application numérique :**
   Ici $s(t) = \cos(2\pi f_0 t)$ avec $f_0 = 50\text{ Hz}$ et $T=1\text{ s}$. 
   La dérivée est $s'(t) = -2\pi f_0 \sin(2\pi f_0 t)$, donc $\|s'\|_{\infty} = 2\pi f_0 = 100\pi$.
   La majoration précédente donne une erreur inférieure à $\frac{100\pi}{N}$.
   Pour garantir une erreur inférieure à $10^{-2}$, on cherche $N$ tel que :
   $$\frac{100\pi}{N} \le 10^{-2} \implies N \ge 10000 \pi \approx 31416$$
   *Analyse critique :* Pour un signal de $50\text{ Hz}$, imposer $N \ge 31416$ points par seconde signifie une fréquence d'échantillonnage $f_e \ge 31,4\text{ kHz}$. C'est tout à fait réaliste (les cartes audio grand public tournent à $44.1\text{ kHz}$ ou $48\text{ kHz}$), mais surdimensionné pour de simple mesures industrielles de basse fréquence où l'on utilise des méthodes par trapèzes ou des filtres passe-bas analogiques en amont.

---

### Partie II

4. **Limite de la somme de Riemann complexe :**
   La fonction $g_k : t \mapsto f(t)e^{-2i\pi k t}$ est continue sur $[0, 1]$ (car produit de fonctions continues, à valeurs dans $\mathbb{C}$). 
   Par conséquent, d'après le théorème fondamental sur les sommes de Riemann pour les fonctions continues, on a directement :
   $$\lim_{N \to +\infty} S_{N,k}(f) = \int_{0}^{1} f(t)e^{-2i\pi k t}\,\text{d}t = I_k(f)$$

5. **Étude du repliement spectral (Aliasing) :**
   On a $f(t) = \cos(2\pi f_c t)$ avec $f_c = 10000\text{ Hz}$ ($10\text{ kHz}$) et $f_e = 8000\text{ Hz}$ ($8\text{ kHz}$). Le nombre de points pour $T=1$ est $N = 8000$.
   Evaluons $S_{N,1}(f)$ pour $k=1$ :
   $$S_{N,1}(f) = \frac{1}{N}\sum_{p=0}^{N-1} \cos\left(2\pi f_c \frac{p}{N}\right) e^{-2i\pi \frac{p}{N}}$$
   En écrivant $\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2}$ et $N = f_e = 8000$ et $f_c = 10000$ :
   $$\frac{p f_c}{N} = \frac{p \times 10000}{8000} = \frac{5}{4}p = p + \frac{p}{4}$$
   Ainsi, le terme général de la somme contient des expressions de la forme $e^{i 2\pi (1 + 1/4)p}$ et $e^{-i 2\pi (1 - 1/4)p}$. 
   Par periodicité de l'exponentielle complexe, $e^{2i\pi p} = 1$. La somme se simplifie grandement :
   Les termes oscillent à une fréquence apparente (dite *fréquence image*) de $|f_c - f_e| = |10000 - 8000| = 2000\text{ Hz}$.
   *Analyse critique :* Mathématiquement, la somme de Riemann converge vers l'intégrale continue de $f(t)e^{-2i\pi t}$, mais **physiquement**, l'échantillonnage à $8\text{ kHz}$ d'un signal à $10\text{ kHz}$ viole le critère de Shannon-Nyquist ($f_e > 2f_c$). 
   Le signal restitué ou analysé par le système numérique croira percevoir une fréquence de $2\text{ kHz}$ au lieu des $10\text{ kHz}$ réels : c'est le **repliement spectral**. Ce problème met en évidence la nécessité absolue d'un filtrage anti-aliasing matériel en amont de tout convertisseur analogique-numérique (CAN) réel.