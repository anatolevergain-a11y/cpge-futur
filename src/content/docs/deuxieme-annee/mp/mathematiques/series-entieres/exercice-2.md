---
title: 'Exercice 2 : Théorème de Dirichlet-Parseval et traitement du signal'
description: 'Problème d entraînement type concours.'
---

# Problème : Analyse spectrale d'un signal modulé et application du théorème de Parseval

## Énoncé

Dans le cadre de l'étude des transmissions numériques en bande de base, on s'intéresse au filtrage et à l'analyse énergétique d'un signal périodique modélisant une suite de bits. 

Soit $T > 0$ la période du signal, et $\omega_0 = \frac{2\pi}{T}$ sa pulsation fondamentale. On considère un signal physique représenté par une fonction $s : \mathbb{R} \to \mathbb{R}$, continue par morceaux, $T$-périodique et de carré integrable sur une période. 

Dans les applications pratiques (par exemple en téléphonie mobile ou transmission par fibre optique), la puissance moyenne dissipée par le signal dans une charge normalisée de $1\,\Omega$ est donnée par :
$$P_{\text{moy}} = \frac{1}{T} \int_{0}^{T} |s(t)|^2 \, dt$$

L'objectif de ce problème est d'analyser la répartition de cette puissance sur les différentes composantes fréquentielles du signal (spectre) à l'aide de la théorie des séries de Fourier, puis d'évaluer l'impact du filtrage et de la troncature spectrale sur un cas concret de traitement du signal.

---

## Questions

### Partie I : Préliminaires et Coefficients de Fourier
1. Rappeler la définition des coefficients de Fourier exponentiels $c_n(s)$ pour $n \in \mathbb{Z}$ de la fonction $s$.
2. Si $s$ est à valeurs réelles, quelle relation lie $c_{-n}(s)$ et $c_n(s)$ ?
3. Énoncer le théorème de Dirichlet pour une fonction $s$ continûment dérivable par morceaux sur $\mathbb{R}$.

### Partie II : Théorème de Parseval et Puissance du Signal
4. Démontrer, en admettant les convergences nécessaires, l'égalité de Parseval :
   $$\frac{1}{T} \int_{0}^{T} |s(t)|^2 \, dt = \sum_{n=-\infty}^{+\infty} |c_n(s)|^2$$
5. On définit le signal de commande d'un système par la fonction $s_0$ définie sur $\mathbb{R}$, $2$-périodique, par $s_0(t) = t$ pour $t \in ]-1, 1[$ et prolongée par périodicité. 
   Calculer les coefficients de Fourier $c_n(s_0)$ pour $n \in \mathbb{Z}$.
6. En déduire la valeur de la somme numérique $\sum_{n=1}^{+\infty} \frac{1}{n^2}$.

### Partie III : Application au traitement du signal et Analyse critique
Pour des raisons technologiques (limite de bande passante des amplificateurs), on ne peut transmettre qu'un nombre fini de composantes fréquentielles. On définit le signal filtré $s_N$ par sa somme partielle de Fourier :
$$s_N(t) = \sum_{n=-N}^{N} c_n(s_0) e^{in\pi t}$$
7. Exprimer la puissance moyenne du signal filtré $P_N = \frac{1}{2} \int_{-1}^{1} |s_N(t)|^2 \, dt$ en fonction des coefficients $c_n(s_0)$.
8. On définit l'erreur quadratique relative de troncature par :
   $$\varepsilon_N = \frac{\frac{1}{2}\int_{-1}^{1} |s_0(t) - s_N(t)|^2 \, dt}{\frac{1}{2}\int_{-1}^{1} |s_0(t)|^2 \, dt}$$
   Calculer $\varepsilon_N$ en fonction de $N$. 
9. **Analyse critique et ordres de grandeur réalistes :** 
   Dans un système de télécommunication à $B = 10\,\text{MHz}$ de bande passante, si la fréquence fondamentale est $f_0 = 100\,\text{kHz}$, quel est l'ordre de grandeur de $N$ ? 
   Calculer numériquement $\varepsilon_N$ dans ce cas. Pourquoi, d'un point de vue physique et électromagnétique, l'utilisation d'un modèle mathématique de signal discontinu (comme $s_0$) conduit-elle à des difficultés (phénomène de Gibbs) inacceptables pour la compatibilité électromagnétique (CEM) ?

---

## Pistes et Indications

* **Partie I & II :** Utiliser les formules standards d'intégration par parties pour les coefficients de Fourier. Pour Parseval, on pourra s'appuyer sur la convergence dans $L^2$ de la série de Fourier et la continuité du produit scalaire hermitien.
* **Partie III :** L'orthonormalité de la famille $(t \mapsto \frac{1}{\sqrt{T}} e^{in\omega_0 t})$ dans l'espace préhilbertien $C_p([0, T])$ simplifie grandement le calcul de l'énergie de la somme partielle. Pour la critique physique, penser aux temps de montée infinis induits par les discontinuités et leur étalement spectral en $1/n$.

---

## Corrigé pas à pas

### Partie I : Préliminaires
1. **Définition :** Pour une fonction $s$ $T$-périodique intégrable sur $[0, T]$, les coefficients de Fourier exponentiels sont :
   $$c_n(s) = \frac{1}{T} \int_{0}^{T} s(t) e^{-in\omega_0 t} \, dt \quad \text{avec } \omega_0 = \frac{2\pi}{T}$$

2. **Propriété de conjugaison :** Si $s(t) \in \mathbb{R}$ pour tout $t$, alors :
   $$c_{-n}(s) = \frac{1}{T} \int_{0}^{T} s(t) e^{in\omega_0 t} \, dt = \overline{c_n(s)}$$

3. **Théorème de Dirichlet :** Si $s$ est $T$-périodique et de classe $C^1$ par morceaux sur $\mathbb{R}$, alors pour tout $t \in \mathbb{R}$, la série de Fourier $\sum_{n=-\infty}^{+\infty} c_n(s) e^{in\omega_0 t}$ converge simplement vers $\frac{s(t^+) + s(t^-)}{2}$. Si $s$ est continue en $t$, elle converge vers $s(t)$.

### Partie II : Parseval et Puissance
4. **Démonstration de Parseval :** 
   En considérant la convergence quadratique de la série de Fourier vers $s$ dans l'espace préhilbertien $L^2([0,T])$ muni du produit scalaire $(f|g) = \frac{1}{T}\int_0^T f(t)\overline{g(t)}\,dt$, et par continuité de la norme associée, on a :
   $$\|s\|^2 = \frac{1}{T}\int_{0}^{T} |s(t)|^2 \, dt = \sum_{n=-\infty}^{+\infty} |c_n(s)|^2$$

5. **Calcul pour $s_0$ :**
   Ici $T = 2$, $\omega_0 = \pi$. Pour $n \neq 0$ :
   $$c_n(s_0) = \frac{1}{2} \int_{-1}^{1} t e^{-in\pi t} \, dt$$
   Par une intégration par parties :
   $$c_n(s_0) = \frac{1}{2} \left[ t \frac{e^{-in\pi t}}{-in\pi} \right]_{-1}^{1} - \frac{1}{2} \int_{-1}^{1} \frac{e^{-in\pi t}}{-in\pi} \, dt = \frac{e^{-in\pi} + e^{in\pi}}{2in\pi} = \frac{(-1)^n}{in\pi}$$
   Pour $n = 0$, $c_0(s_0) = \frac{1}{2}\int_{-1}^1 t \, dt = 0$.
   Ainsi, $c_n(s_0) = \frac{(-1)^n}{in\pi}$ pour $n \neq 0$ et $c_0 = 0$.

6. **Somme numérique :**
   Calculons la puissance de $s_0$ :
   $$\frac{1}{2} \int_{-1}^{1} t^2 \, dt = \frac{1}{2} \left[ \frac{t^3}{3} \right]_{-1}^{1} = \frac{1}{3}$$
   Par l'égalité de Parseval :
   $$\sum_{n=-\infty, n \neq 0}^{+\infty} |c_n(s_0)|^2 = \sum_{n=-\infty, n \neq 0}^{+\infty} \frac{1}{n^2 \pi^2} = 2 \sum_{n=1}^{+\infty} \frac{1}{n^2 \pi^2} = \frac{1}{3}$$
   D'où :
   $$\sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

### Partie III : Application et Analyse critique
7. **Puissance du signal filtré $P_N$ :**
   Grâce à l'orthonormalité de la famille $(e^{in\pi t})_{n \in \mathbb{Z}}$, l'énergie de la somme partielle est la somme des énergies des composantes :
   $$P_N = \sum_{n=-N}^{N} |c_n(s_0)|^2 = 2 \sum_{n=1}^{N} \frac{1}{n^2 \pi^2}$$

8. **Erreur quadratique relative :**
   En utilisant Parseval sur $s_0$ et $s_N$ :
   $$\int_{-1}^1 |s_0(t) - s_N(t)|^2 \, dt = 2 \sum_{|n|>N} |c_n(s_0)|^2$$
   L'erreur relative $\varepsilon_N$ vaut donc :
   $$\varepsilon_N = \frac{\sum_{n=1}^{+\infty} \frac{1}{n^2} - \sum_{n=1}^{N} \frac{1}{n^2}}{\sum_{n=1}^{+\infty} \frac{1}{n^2}} = \frac{\sum_{n=N+1}^{+\infty} \frac{1}{n^2}}{\frac{\pi^2}{6}}$$
   En utilisant un encadrement classique par des intégrales : $\sum_{n=N+1}^{+\infty} \frac{1}{n^2} \approx \frac{1}{N}$, l'erreur décroit en $\mathcal{O}(1/N)$. Précisément, $\varepsilon_N = \frac{6}{\pi^2} \sum_{n=N+1}^{+\infty} \frac{1}{n^2}$.

9. **Analyse critique et ordres de grandeur :**
   * **Ordre de grandeur de $N$ :** La bande passante est $B = 10\,\text{MHz}$ et la fréquence fondamentale est $f_0 = \frac{1}{T} = 50\,\text{kHz}$ (car $T=2$). Le nombre maximal de гарmoniques transmissibles est $N = \frac{B}{f_0} = \frac{10 \times 10^6}{50 \times 10^3} = 200$.
   * **Calcul de l'erreur :** Pour $N = 200$, la somme $\sum_{n=201}^{+\infty} \frac{1}{n^2} \approx \int_{200}^{+\infty} \frac{dx}{x^2} = \frac{1}{200} = 0{,}005$.
     $$\varepsilon_{200} \approx \frac{6}{\pi^2} \times 0{,}005 \approx 0{,}3 \times 10^{-2} = 0{,}3\,\%.$$
   * **Limites du modèle et CEM :** Le signal $s_0$ présente des discontinuités (sauts en $t = 1 + 2k$). Mathématiquement, cela implique une décroissance des coefficients en $\frac{1}{n}$, soit une densité spectrale de puissance en $\frac{1}{n^2}$ qui décroît très lentement. 
     * *Conséquence physique :* Pour assurer des temps de montée nuls (discontinuité), il faudrait une bande passante infinie. 
     * *Phénomène de Gibbs :* À la traversée des discontinuités, la troncature à l'ordre $N$ génère des dépassements (overshoot) constants d'environ $9\%$ de l'amplitude du saut, quelle que soit la valeur de $N$. En compatibilité électromagnétique (CEM), ces hautes fréquences non filtrées se comportent comme des antennes rayonnant des perturbations parasites dans l'environnement, rendant ce type de signal théorique inutilisable en l'état dans les systèmes réels sans mise en forme d'impulsion préalable (filtrage de Nyquist, shaper).