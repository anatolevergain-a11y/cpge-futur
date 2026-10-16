---
title: "Cinétique & Équilibrage Dynamique des Solides en Rotation"
description: "Méthodologie détaillée, rédactions modèles et conseils des jurys de concours Banque PT."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Analyse des attentes et critères d'évaluation des jurys

Les épreuves de Sciences Industrielles de l'Ingénieur de la Banque PT accordent une importance capitale à la maîtrise de la cinétique des solides indéformables, et plus particulièrement aux applications concernant les arbres en rotation et l'équilibrage dynamique. Les rapports de jury soulignent régulièrement des lacunes méthodologiques récurrentes chez les candidats. 

Pour maximiser votre note lors du concours, les examinateurs s'attendent à :
1. **Une rigueur lexicale et vectorielle absolue** : Préciser systématiquement le point de réduction et le référentiel d'étude pour tout torseur cinétique ou dynamique. L'oubli de ces mentions entraîne une perte immédiate de points.
2. **Une exploitation intelligente des symétries** : Avant de se lancer dans des calculs intégraux fastidieux ou l'application aveugle du théorème de Huygens, le candidat doit identifier les plans et axes de symétrie matérielle afin de déduire immédiatement les termes nuls de la matrice d'inertie.
3. **Une distinction claire entre équilibrage statique et dynamique** : Le jury pénalise lourdement les confusions entre la résultante dynamique (liée au centre d'inertie) et le moment dynamique (lié à la matrice d'inertie et au vecteur rotation).
4. **La propreté de la rédaction** : Les applications numériques doivent comporter des expressions littérales vérifiées sur le plan de l'homogénéité, un résultat intermédiaire encadré, et l'application numérique proprement dite avec ses unités.

---

## 📐 Rappels théoriques & Démonstrations incontournables

Le torseur cinétique d'un solide $\mathcal{S}$ en un point $P$ dans son mouvement par rapport à un référentiel galiléen $\mathcal{R}_0$ est défini par :
$$\{ \mathcal{C}(\mathcal{S}/\mathcal{R}_0) \} = \begin{Bmatrix} \vec{R}_c(\mathcal{S}/\mathcal{R}_0) = M \vec{V}(G \in \mathcal{S}/\mathcal{R}_0) \\ \vec{\sigma}_P(\mathcal{S}/\mathcal{R}_0) = \overline{\overline{I}}_P(\mathcal{S}) \cdot \vec{\Omega}(\mathcal{S}/\mathcal{R}_0) \end{Bmatrix}_P$$

La matrice d'inertie en un point $P$ dans une base $\mathcal{B} = (\vec{x}, \vec{y}, \vec{z})$ s'exprime sous la forme :
$$\overline{\overline{I}}_P(\mathcal{S}) = \begin{pmatrix} 
A & -F & -E \\ 
-F & B & -D \\ 
-E & -D & C 
\end{pmatrix}_{\mathcal{B}}$$
avec les moments d'inertie et les produits d'inertie définis par des intégrales de volume sur le domaine occupé par le solide $\mathcal{S}$ de masse volumique $\mu(M)$ :
$$A = \int_{\mathcal{S}} (y^2 + z^2) \mu(M) \, dV, \quad D = \int_{\mathcal{S}} y z \mu(M) \, dV$$

Le torseur dynamique se déduit par dérivation temporelle :
$$\{ \mathcal{D}(\mathcal{S}/\mathcal{R}_0) \} = \begin{Bmatrix} \vec{Ad}(\mathcal{S}/\mathcal{R}_0) = M \vec{\Gamma}(G \in \mathcal{S}/\mathcal{R}_0) \\ \vec{\delta}_P(\mathcal{S}/\mathcal{R}_0) = \left[ \frac{d}{dt} \left( \vec{\sigma}_P(\mathcal{S}/\mathcal{R}_0) \right) \right]_{\mathcal{R}_0} \end{Bmatrix}_P$$

---

### 📌 Question / Problématique classique 1 : Calcul de la matrice d'inertie et recherche des axes principaux

#### 💡 Méthode de rédaction canonique
Pour déterminer la matrice d'inertie d'un solide $\mathcal{S}$ en un point $P$ :
1. **Recherche des symétries** : Si le plan $(P, \vec{x}, \vec{y})$ est un plan de symétrie matérielle pour $\mathcal{S}$, alors les produits d'inertie $D$ et $E$ sont nuls.
2. **Application du théorème de transport (Huygens)** : Si la matrice est connue au centre d'inertie $G$, on la transporte en un autre point $P$ par la relation :
   $$\overline{\overline{I}}_P(\mathcal{S}) = \overline{\overline{I}}_G(\mathcal{S}) + M \begin{pmatrix} 
   Y_G^2 + Z_G^2 & -X_G Y_G & -X_G Z_G \\ 
   -X_G Y_G & X_G^2 + Z_G^2 & -Y_G Z_G \\ 
   -X_G Z_G & -Y_G Z_G & X_G^2 + Y_G^2 
   \end{pmatrix}$$
   où $\vec{GP} = X_G \vec{x} + Y_G \vec{y} + Z_G \vec{z}$.

#### 📋 Exercice type concours résolu pas à pas
*Énoncé partiel* : Soit un rotor modélisé par un disque homogène $\mathcal{D}$ de centre $C$, de masse $M$ et de rayon $R$, contenu dans le plan $(C, \vec{x}, \vec{y})$. Déterminer $\overline{\overline{I}}_C(\mathcal{D})$ dans la base $\mathcal{B} = (\vec{x}, \vec{y}, \vec{z})$.

*Rédaction type acceptée au concours* :
1. **Analyse des symétries** : Le plan $(C, \vec{x}, \vec{y})$ est un plan de symétrie matérielle. De plus, le plan $(C, \vec{x}, \vec{z})$ et le plan $(C, \vec{y}, \vec{z})$ sont également des plans de symétrie pour ce disque mince. Par conséquent, tous les produits d'inertie sont nuls : $D = 0$, $E = 0$, $F = 0$.
2. **Calcul des moments principaux** :
   Par définition, pour un disque mince d'axe normal $\vec{z}$ :
   $$A = \int_{\mathcal{D}} (y^2 + z^2) \mu \, dV \quad \text{avec } z = 0 \text{ sur le disque}$$
   On obtient par intégration polaire classique :
   $$A = B = \frac{1}{4} M R^2$$
   Et pour le moment suivant l'axe normal :
   $$C = A + B = \frac{1}{2} M R^2$$
3. **Conclusion sous forme matricielle** :
   $$\overline{\overline{I}}_C(\mathcal{D}) = \begin{pmatrix} 
   \frac{1}{4} M R^2 & 0 & 0 \\ 
   0 & \frac{1}{4} M R^2 & 0 \\ 
   0 & 0 & \frac{1}{2} M R^2 
   \end{pmatrix}_{\mathcal{B}}$$

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Erreur de signe dans Huygens** : Les termes extra-diagonaux de la matrice de transport portent des signes négatifs. Les candidats oublient souvent ces signes ou se trompent dans les coordonnées du vecteur de transport.
- **Confusion entre axes principaux et base quelconque** : Appliquer les formules directes de moments d'inertie sans vérifier si la base est une base de diagonalization.

---

### 📌 Question / Problématique classique 2 : Conditions d'équilibrage statique et dynamique d'un arbre en rotation

#### 💡 Méthode de rédaction canonique
Un arbre est en rotation autour d'un axe fixe $(\Delta) = (O, \vec{z})$ par rapport au bâti galiléen $\mathcal{R}_0$. 
1. **Équilibrage statique** : L'arbre est équilibré statiquement si son centre d'inertie $G$ appartient à l'axe de rotation $(\Delta)$. Mathématiquement, cela se traduit par la condition sur le moment statique :
   $$\vec{OM}_{\text{statique}} = \vec{0} \quad \text{soit} \quad X_G = 0 \text{ et } Y_G = 0 \text{ dans le repère lié à l'axe } \vec{z}$$
2. **Équilibrage dynamique** : L'arbre est équilibré dynamiquement si l'axe de rotation $(\Delta)$ est un axe principal d'inertie du solide en un point de cet axe. Cela se traduit par la nullité des produits d'inertie croisés impliquant l'axe de rotation :
   $$\overline{\overline{I}}_O(\mathcal{S}) \cdot \vec{z} = C \vec{z} \quad \text{ce qui implique} \quad E = 0 \text{ et } F = 0$$

#### 📋 Exercice type concours résolu pas à pas
*Énoncé partiel* : Un arbre de transmission est constitué d'un axe rigide et de deux masses excentrées. Expliciter la condition pour que ce système ne transmette pas de efforts radiaux alternatifs aux paliers lorsqu'il tourne à vitesse angulaire constante $\Omega$.

*Rédaction type acceptée au concours* :
1. **Analyse de la problématique** : L'absence d'efforts radiaux alternatifs caractérise l'équilibrage dynamique du rotor complet $\mathcal{S}$.
2. **Expression du moment dynamique** :
   Le vecteur rotation du solide est $\vec{\Omega}(\mathcal{S}/\mathcal{R}_0) = \dot{\theta} \vec{z} = \Omega \vec{z}$.
   Le moment dynamique en un point $O$ de l'axe s'écrit :
   $$\vec{\delta}_O(\mathcal{S}/\mathcal{R}_0) = \left[ \frac{d \vec{\sigma}_O}{dt} \right]_{\mathcal{R}_0} = \overline{\overline{I}}_O(\mathcal{S}) \cdot \vec{\gamma} + \vec{\Omega} \wedge \left( \overline{\overline{I}}_O(\mathcal{S}) \cdot \vec{\Omega} \right)$$
   Comme $\Omega = \text{cste}$, $\vec{\gamma} = \vec{0}$, il vient :
   $$\vec{\delta}_O(\mathcal{S}/\mathcal{R}_0) = \Omega \vec{z} \wedge \left( \begin{pmatrix} A & -F & -E \\ -F & B & -D \\ -E & -D & C \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ \Omega \end{pmatrix} \right) = \Omega^2 \left( -E \vec{x} - D \vec{y} \right)$$
3. **Application de la condition d'équilibrage** :
   Pour que l'arbre soit dynamiquement équilibré, le moment dynamique orthogonal à l'axe de rotation doit être nul, soit :
   $$E = 0 \quad \text{et} \quad D = 0$$
   *Conclusion* : Les produits d'inertie mixtes $E$ et $D$ doivent être nuls, ce qui signifie que l'axe de rotation $(\Delta)$ est un axe principal d'inertie en $O$.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Oubli de la liaison entre statique et dynamique** : Un arbre équilibré dynamiquement est *toujours* équilibré statiquement (la réciproque est fausse). Les étudiants omettent de vérifier les deux conditions dans les problèmes d'optimisation industrielle.
- **Erreur sur le vecteur rotation** : Confondre le repérage dans la base fixe et la base tournante lors du calcul vectoriel du produit vectoriel du moment dynamique.

---

### 📌 Question / Problématique classique 3 : Calcul des efforts dynamiques sur les paliers de guidage

#### 💡 Méthode de rédaction canonique
Pour déterminer les actions mécaniques transmissibles aux paliers (notés $A$ et $B$) par un mécanisme en rotation :
1. **Isoler le solide ou l'ensemble en mouvement** : Définir clairement le système isolé $\mathcal{S}$.
2. **Appliquer le Bilan des Actions Mécaniques Extérieures (B.A.M.E.)** :
   - Action du pivot / des paliers (inconnues statiques et dynamiques).
   - Action de la pesanteur $\vec{P} = M \vec{g}$.
   - Couples moteurs ou résistants extérieurs.
3. **Appliquer les Théorèmes Généraux de la Dynamique (T.G.D.)** en un point judicieux (souvent l'un des paliers pour éliminer des moments) :
   - Théorème de la Résultante Dynamique (T.R.D.) :
     $$\vec{R}_{\text{ext} \to \mathcal{S}} = M \vec{\Gamma}(G \in \mathcal{S}/\mathcal{R}_0)$$
   - Théorème du Moment Dynamique (T.M.D.) :
     $$\vec{M}_A(\text{ext} \to \mathcal{S}) = \vec{\delta}_A(\mathcal{S}/\mathcal{R}_0)$$

#### 📋 Exercice type concours résolu pas à pas
*Énoncé partiel* : Un tambour cylindrique de masse $M$, assimilé à un cylindre creux de rayon $R$, est guidé par deux paliers parfaits en $A$ et $B$ distants de $L$. Il tourne à la vitesse de rotation uniforme $\Omega$ autour de son axe vertical. Un balourd de masse $m$ est fixé sur la périphérie à une distance $h$ du palier $A$. Déterminer l'expression radiale de l'effort exercé par le palier $A$ sur l'arbre.

*Rédaction type acceptée au concours* :
1. **Isolement et B.A.M.E.** :
   On isole l'ensemble $\mathcal{S} = \{\text{tambour} + \text{balourd}\}$.
   Les actions extérieures se résument aux forces de liaison en $A$ et $B$ et au poids. Exprimons les torseurs de liaison sous forme de forces radiales pures (paliers sans frottement axial) :
   $$\{ \text{Paliers} \to \mathcal{S} \}_A = \begin{Bmatrix} \vec{F}_{A} = X_A \vec{x} + Y_A \vec{y} \\ \vec{0} \end{Bmatrix}_A, \quad \{ \text{Paliers} \to \mathcal{S} \}_B = \begin{Bmatrix} \vec{F}_{B} = X_B \vec{x} + Y_B \vec{y} \\ \vec{0} \end{Bmatrix}_B$$
2. **Application du T.R.D.** :
   La projection du T.R.D. sur le plan radial $(A, \vec{x}, \vec{y})$ donne :
   $$\vec{F}_A + \vec{F}_B + M_{\text{total}} \vec{g} = M_{\text{total}} \vec{\Gamma}(G_{\text{total}}/\mathcal{R}_0)$$
   Le centre d'inertie $G_{\text{total}}$ du système possédant un balourd tourne sur un rayon $r_G$ à la vitesse angulaire $\Omega$. L'accélération normale est donc :
   $$\vec{\Gamma}(G_{\text{total}}/\mathcal{R}_0) = -r_G \Omega^2 \vec{u}_r$$
3. **Application du T.M.D. en $A$** :
   $$\vec{M}_A(\text{ext} \to \mathcal{S}) = \vec{\delta}_A(\mathcal{S}/\mathcal{R}_0)$$
   En projetant convenablement et en résolvant le système algébrique, on extrait l'effort sur le palier $A$ :
   $$\vec{F}_A(t) = m \Omega^2 \left( 1 - \frac{h}{L} \right) r \left( \cos(\Omega t) \vec{x} + \sin(\Omega t) \vec{y} \right)$$
   *Conclusion* : L'effort dynamique dans le palier $A$ est une force tournante d'amplitude proportionnelle au carré de la vitesse de rotation $\Omega^2$ et au balourd $m$.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- **Erreur de choix du point de réduction pour le T.M.D.** : Choisir un point inadéquat complexifie inutilement les équations scalaires. Le choix du centre de réduction doit éliminer le maximum d'inconnues (par exemple, appliquer le T.M.D. au point $A$ pour annuler le moment des forces de liaison de ce palier).
- **Oubli de la nature harmonique des efforts** : Ne pas exprimer les composantes sous forme trigonométrique (cosinus et sinus) empêche d'identifier l'amplitude maximale des efforts, indispensable pour le dimensionnement en fatigue demandé par les industriels dans les sujets de PT.