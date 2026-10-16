---
title: 'Cours : Introduction à la physique statistique'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MP.'
---

## 📌 1. Définitions & Cadre d'étude

La physique statistique fait le pont entre la description microscopique d'un système à grand nombre de degrés de liberté (typiquement $\mathcal{N} \sim \mathcal{N}_A \sim 10^{23}$) et sa description macroscopique (thermodynamique).

*   **Espace des phases :** Pour un système de $N$ particules ponctuelles, l'espace des phases $\Gamma$ est l'espace vectoriel (ou variété) de dimension $6N$ constitué des coordonnées de position $\vec{r}_i$ et de moment $\vec{p}_i$ de chaque particule :
    $$\Gamma = \{ (\vec{r}_1, \dots, \vec{r}_N, \vec{p}_1, \dots, \vec{p}_N) \}$$
*   **Macroétat et microétat :** Un *microétat* correspond à un point précis de l'espace des phases $\Gamma$. Un *macroétat* est défini par la donnée de variables macroscopiques mesurables ($P, V, T, N$). Un même macroétat est compatible avec un grand nombre $\Omega$ de microétats.
*   **Postulat fondamental de la physique statistique (ergodicité) :** Pour un système isolé à l'équilibre thermodynamique, tous les microétats accessibles compatibles avec les contraintes macroscopiques (énergie $E$, volume $V$, nombre de particules $N$) ont la même probabilité d'apparaître.
*   **Entropie statistique de Boltzmann :** 
    $$S = k_B \ln \Omega(E, V, N)$$
    où $k_B \approx 1{,}38 \times 10^{-23} \, \text{J}\cdot\text{K}^{-1}$ est la constante de Boltzmann.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Démonstration : Loi de distribution de Boltzmann (Canonique)

*   **Hypothèse :** On considère un système $\mathcal{S}$ de faible énergie $E$, en contact thermique avec un thermostat $\Sigma$ de grande énergie $E_0$ (tel que $E \ll E_0$), l'ensemble ($\mathcal{S} + \Sigma$) étant isolé d'énergie totale $E_T = E_0 + E$ constante.
*   **Principe :** La probabilité $P_i$ d'occuper un microétat $i$ d'énergie $E_i$ est proportionnelle au nombre de microétats accessibles du thermostat $\Omega_\Sigma(E_0 - E_i)$.

1. Exprimons le nombre de microétats accessibles pour le thermostat par un développement limité de l'entropie $S_\Sigma$ :
   $$\ln \Omega_\Sigma(E_0 - E_i) = \ln \Omega_\Sigma(E_0) - \frac{\partial \ln \Omega_\Sigma}{\partial E}\Big|_{E_0} E_i + \dots$$
2. Par définition thermodynamique, $\frac{\partial S_\Sigma}{\partial E} = \frac{1}{T}$ et $S_\Sigma = k_B \ln \Omega_\Sigma$, donc :
   $$\frac{\partial \ln \Omega_\Sigma}{\partial E} = \frac{1}{k_B} \frac{\partial S_\Sigma}{\partial E} = \frac{1}{k_B T} = \beta$$
3. Ainsi, la probabilité $\pi_i$ du microétat $i$ s'écrit :
   $$\pi_i \propto \Omega_\Sigma(E_0 - E_i) \propto \exp\left(-\beta E_i\right)$$
4. En normalisant la probabilité ($\sum_i \pi_i = 1$), on introduit la **fonction de partition canonique** $Z$ :
   $$\pi_i = \frac{1}{Z} e^{-\beta E_i} \quad \text{avec} \quad Z = \sum_{\text{j}} e^{-\beta E_j}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour déterminer les grandeurs macroscopiques d'un système à l'équilibre thermique à la température $T$, la méthode systématique (algorithme de calcul) est la suivante :

1.  **Identifier l'ensemble statistique** adapté (généralement l'ensemble canonique : $T, V, N$ fixés).
2.  **Déterminer le spectre des énergies** accessibles $E_i$ du système microscopique.
3.  **Calculer la fonction de partition canonique** $Z(T, V, N)$ :
    $$Z = \sum_{\text{i}} e^{-\beta E_i} \quad \text{ou} \quad Z = \int_{\Gamma} e^{-\beta H(\vec{r}, \vec{p})} \frac{\mathrm{d}\Gamma}{h^{3N} N!}$$
4.  **Relier $Z$ aux fonctions thermodynamiques usuelles** :
    *   Énergie libre de Helmholtz : $F = -k_B T \ln Z$
    *   Énergie interne moyenne : $\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = k_B T^2 \frac{\partial \ln Z}{\partial t}$
    *   Entropie : $S = \frac{\langle E \rangle - F}{T} = k_B \ln Z + k_B T \frac{\partial \ln Z}{\partial T}$
    *   Pression : $P = -\frac{\partial F}{\partial V}\Big|_T$

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Oubli des facteurs factoriels ($1/N!$) :** Pour des particules indiscernables en physique classique, il ne faut jamais oublier de diviser l'intégrale sur l'espace des phases par $N!$ afin de résoudre le paradoxe de Gibbs (correcte extensibilité de l'entropie).
*   **Confusion entre microétat et macroétat :** Une somme de partition porte toujours sur les *microétats* du système (ou les configurations distinctes), et non sur les valeurs possibles de l'énergie macroscopique (dégénérescence à prendre en compte).
*   **Mauvaise manipulation de $\beta$ :** Ne pas confondre $\beta = \frac{1}{k_B T}$ avec l'inverse de la température seule. L'oubli de la constante de Boltzmann $k_B$ dans les expressions exponentielles conduit systématiquement à des erreurs d'homogénéité dimensionnelle.
*   **Domaine de validité de Boltzmann :** La statistique de Boltzmann est une limite de haute température / faible densité des statistiques quantiques (Fermi-Dirac et Bose-Einstein). Elle n'est plus valable lorsque le volume moyen par particule devient comparable au cube de la longueur d'onde thermique de de Broglie $\lambda_{th}^3 = \left(\frac{h}{\sqrt{2\pi m k_B T}}\right)^3$.