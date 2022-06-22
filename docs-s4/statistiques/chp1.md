---
title: Unidimensionnelle
sidebar_position: 2
---

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <img src="https://user-images.githubusercontent.com/72823374/174741494-dcc9f1c3-d055-43b7-a300-d712d4e8c854.png" alt="statistique-unidimensionnelle" />
</div>

La Statistique Descriptive Unidimensionnelle permet d'étudier **chaque variable** à part. Et alors la nécessité de connaître le type de la variable.

## 2. Types de Variables

### 2.1. Variables Quantitatives

- **Mesurable**.
- Ses modalités sont des **nombres**.
- Possibilité d'effectuer des opérations **Arithmétiques**.
- Possibilité d'etre **Ordonnés**.

#### 2.1.1. Continue

Variable d'échelle. Elle peut prendre toutes les valeurs d'un intervalle sur **R**. _(taille, poids, note, moyenne, etc.)_

#### 2.1.2. Discrete

Elle est **dénombrable**. Elle appartient à un ensemble de **N**. _(nombre de frères, durée de séjour, etc.)_

:::tip
Une variable quantitative qui a un grand nombre de modalité distinctes, il est plus pratiques de la considérer comme **Continue** que Discrete.

---

Exemple: _Age_, _Salaire_, _etc_.
:::

### 2.1. Variables Qualitatives

- **N'est pas Mesurable**.
- **Text**, **Alphanumérique**, **Nombres pas ordonnables**.

#### 2.1.1. Ordinale

- Ses modalités peuvent être **Ordonnées**.
- Impossible de calculer la **Distance** entre les modalités.
- Exemple: _Faible_, _Moyen_, _Fort_ ou _Petit_, _Moyen_, _Grand_, _etc._

#### 2.1.2. Nominal

- Ses modalités **Ne** peuvent pas être **Ordonnées**.
- **Incomparables**.
- **Etiquettes**.
- Exemple: _sexe_, _profession_, _couleur des yeux_, _couleur des cheveux_, _etc._

#### 2.1.3. Textuelle

- Ses modalités sont sous format de **texte**.
- Exemple: _lettre de réclamations_, _CVs_, _rapports_, _commentaires_, _etc._

#### 2.1.4. d'Intervalles

- Ses modalités sont sous format de **Intervalles Numériques**.
- Peuvent être **Ordonnées**.
- Possible de calculer la distances entre les modalités.
- Exemples: _]0°C, 20°C]_, _]20°C,40°C]_, _etc._

:::tip
Le type de variable est déterminé principalement par la façon avec laquelle on la mesure.

---

Exemple: variable _Etude_:

- _Continue_: 0,...,20,... _(ou discrète, si peu de modalités)_
- _Nominal_: _Privé_, _Public_.
- _Ordinal_: _Primaire_, _Secondaire_, _Supérieur_.
- _Intervalle_: _]0,6]_, _]6,12]_, _etc._

:::

## 3. Représentations Graphques

Elles permettent d'avoir une appréhension globale des données. Elles dépendent du type de variable.

### 3.1. Qualitative

- **Diagramme Circulaire _(Pie Chart)_**:

  Angle de chaque section représente la fréquence de chaque modalité.

  ![image](https://user-images.githubusercontent.com/72823374/174949118-0f6a13eb-83d9-487d-bc31-d9fe2fe15e6d.png)

- **Diagramme à Bandes _(Bar Chart)_**:

  Appelé aussi _tuyaux d'orgue_ où il utilise des rectangles _(tuyaux)_ pour représenter les modalités.

  ![image](https://user-images.githubusercontent.com/72823374/175015128-f98240d4-2240-4650-9022-2b873cc8904b.png)

### 3.2. Quantitative (Discrète)

- **Diagramme en batons**:

  Utilisation des _traits verticaux_ pour représenter les modalités.

  ![image](https://user-images.githubusercontent.com/72823374/175018915-ce0157fb-3bbf-44fa-8c89-265f7f95eeb1.png)

- **Polygone des fréquences**:

  Courbe qui joint les sommets des batons d'un diagramme en batons.

  ![image](https://user-images.githubusercontent.com/72823374/175018945-af6ee285-bba9-43f8-bce4-6ff56b31adfc.png)

- **Diagramme comulatif croissant**:

  Permet de visualiser les effectifs comulés $N\scriptstyle i$ _(ou les fréquences cumulées $F\scriptstyle i$)_

  ![image](https://user-images.githubusercontent.com/72823374/175019128-064709de-27eb-44b1-8fb3-67d974e39941.png)

- **Courbe des fréquences cumulées**:

  Obtenue en joinant les points _($x\scriptstyle i$, $F\scriptstyle i$)_

  ![image](https://user-images.githubusercontent.com/72823374/175020417-19f3ad31-1462-4d8a-b846-257612ab1e90.png)

### 3.3. Quantitative (Continue)

- **Histogramme**:

  Chaque classe est représentée par un rectangle où les abscisses représentent les bornes de la classe. La **Hauteur** du rectangle est appelée **la Densité** d'effectif _(ou de fréquence)_.

  $\boxed{\Large{\text{Densité} = \frac{{n\scriptstyle i}}{{b\scriptstyle i} - {b\scriptstyle i - 1}}}}$

  $\large{\text{La surface du rectangle} = \text{l'effectif ou la fréquence}}$

  ![image](https://user-images.githubusercontent.com/72823374/175022607-7887d8de-dbba-4fb1-b809-e801dc6bd071.png)

- **Courbe cumulative**:

  Représente chaque point par _(${b\scriptstyle i-1}, {N\scriptstyle i}$)_ ou _(${b\scriptstyle i-1}, {F\scriptstyle i}$)_

  ![image](https://user-images.githubusercontent.com/72823374/175024106-7464516a-4b28-43e2-a966-d5b4eaa858e9.png)

## 4. Indicateurs de Tendance Centrale

Permettent de résumer une série statistique d'une variable quantitative par une valeur considérée **représentative**. _(i.e valeur centrale)_

Considérons une variable quantitative _X_ discrète à _p_ modalités. _(ou continue à p classes dont les centres)_ x1, x2, x3, ..., xp ayant les effectifs _n1_, _n2_, _n3_, ..., _np_.

### 4.1. Moyennes

- **Moyenne Arithmétique Pondérée**:

  Somme des modalités _xi_ pondérées par leurs effectifs _ni_, le tout divisé par l'effectif total _N_.

  $\boxed{\Large{\bar{X} = \frac{1}{N} \displaystyle\sum_{i=1}^{p} {n\scriptstyle i}{x\scriptstyle i}}}$

- **Moyenne Arithmétique Simple**:

  la pondération ici est de 1. _(ni = 1)_

  $\boxed{\Large{\bar{X} = \frac{1}{p} \displaystyle\sum_{i=1}^{p} {x\scriptstyle i}}}$

- **Moyenne Géométrique**:

  La racine N-ième des produits des modalités _xi_ à la puissance de leurs effectifs _ni_.

  $\boxed{\Large{G = \sqrt[N]{{x\scriptstyle 1}^{n\scriptstyle 1}.{x\scriptstyle 2}^{n\scriptstyle 2}.{x\scriptstyle 3}^{n\scriptstyle 3}.\cdots.{x\scriptstyle p}^{n\scriptstyle p}}}}$

- **Moyenne Harmonique**:

  Inverse de la moyenne arithmétique des inverses des modalités _xi_.

  $\boxed{\Large{H = \frac{N}{\displaystyle\sum_{i=1}^{p} \frac{ni}{xi}}}}$

### 4.2. Mode

Valeur de la variable avec l'effectif le plus élevé.

- **Discrète**:

  $\Large{\text{X\scriptstyle M} = \text{modalité la plus fréquente}}$

- **Continue**:

  $\text{X\scriptstyle M}$ est déterminée à partir de la classe la plus dense $\lbrack \text{b\scriptstyle i-1}, \text{b\scriptstyle i}\lbrack$.

  $\boxed{\large{{X\scriptstyle{m}} = {b\scriptstyle{i-1}} + \lparen {b\scriptstyle{i}} - {b\scriptstyle{i-1}} \rparen \frac{{n\scriptstyle{i}} - {n\scriptstyle{i-1}}}{{\lparen {n\scriptstyle{i}} - {n\scriptstyle{i-1}} \rparen} + {\lparen {n\scriptstyle{i}} - {n\scriptstyle{i+1}} \rparen}}}}$

### 4.3. Médiane

La valeur $\text{X\scriptstyle M}$ de la variable qui partage en 2 parties égales l'effectif total de la série statistique telles que la première partie contient les observations qui sont inférieures ou égale à $\text{X\scriptstyle M}$ et la deuxième contient celles qui sont supérieures à $\text{X\scriptstyle M}$.

- **Discrète**:

  - **N impair**:

    $\boxed{\Large{{X\scriptstyle{M}} = {X\scriptstyle{\frac{N+1}{2}}}}}$

  - **N pair**:

    $\boxed{\Large{\text{X\scriptstyle M} = \frac{{X\scriptstyle{\frac{N}{2}}} + X\scriptstyle{\frac{N}{2} + 1}}{2}}}$

- **Continue**:

  soit $\lbrack \text{b\scriptstyle i-1}, \text{b\scriptstyle i}\lbrack$ la classe médiane.

  $\boxed{\Large{\text{X\scriptstyle M} = \text{b\scriptstyle i-1} + \lparen\text{b\scriptstyle i} - \text{b\scriptstyle i-1}\rparen \frac{0.5 - \text{F\scriptstyle i-1}}{\text{F\scriptstyle i} - \text{F\scriptstyle i-1}}}}$

:::note
Il faut que la série soit ordonnée
:::
:::tip
La moyenne est **sensible** aux valeurs extremes/aberrantes et à la forme de la distribution

---

Privilégier la médiane dans ce cas
:::

### 4.4. Qua(_n_)tiles

- Généralisation de la Médiane.
- Partage en **n** parties égales.
- Les plus utilisés sont: **Quartiles**, **Déciles** et **Centiles**.

#### 4.4.1. Qua(_r_)tiles

- Partage en **4** parties égales.

  - F(Q1) = 0.25
  - F(Q2) = 0.5 = $\text{X\scriptstyle M}$
  - F(Q3) = 0.75

- Calcul de **Q1**:

  - $\Large\frac{n}{4}$ n'est pas entier: la valeur de rang immédiatement supérieur à $\Large\frac{n}{4}$.
  - $\Large\frac{n}{4}$ entier: la moyenne des deux valeurs de rang $\Large\frac{n}{4}$ et de rang immédiatement supérieur à $\Large\frac{n}{4}$.

- Calcul de **Q3**:

  - Remplacer n par 3n.

:::note
L'**écart Interquartile**:

---

Q3 - Q1
:::

![image](https://user-images.githubusercontent.com/72823374/174896054-e1a90003-7ef7-4ae5-a6f6-762a15eff2cc.png)

## 5. Indicateurs de Dispersion

Permettent d'évaluer la répartition des observations autour d'une valeur centrale.

### 5.1. Etendue

Appelée aussi **Intervalle de Variation**. C'est la différence entre le maximum et le minimum des observation quantitative.

$\boxed{\text{Etendue} = \text{maximum} - \text{minimum}}$

### 5.2. Rapport de Variation

C'est le rapport du maximum par le minimum.

$\boxed{\text{Rapport de Variation} = \frac{maximum}{minimum}}$

### 5.3. Intervalles Inter-quartiles

- Mesure la taille de l'intervalle situé au centre de la série et contenant 50% des observations.

$\boxed{\text{IQR} = \text{Q3} - \text{Q1}}$

### 5.4. Variance

Calcule la dispersion ou variabilité autour de la moyenne.

C'est la moyenne arithmétique pondérée des carrés des écarts des observations par rapport à la moyenne.

$\boxed{\text{s\scriptstyle x}^{2} = v = \frac{1}{N}\displaystyle\sum_{i=1}^p ni(xi - \bar{X})^{2}}$

Plus les données sont concentrées autour de la moyenne, plus la variance et faible.

### 5.5. Ecart-Type

La racine carré de la variance.

$\boxed{{\sigma\scriptstyle x} = \text{s\scriptstyle x} = \sqrt{v}}$

:::info

- Au moins **75%** des observations se situent entre $-2\sigma$ et $+2\sigma$ de la moyenne.
- Au moins **89%** des observations se situent entre $-3\sigma$ et $+3\sigma$ de la moyenne.

---

Pour une distribution qui suit la loi normale:

- Exactement **95%** des observations se situent entre $-2\sigma$ et $+2\sigma$ de la moyenne.
- Exactement **99%** des observations se situent entre $-3\sigma$ et $+3\sigma$ de la moyenne.

:::

### 5.6. Coefficient de Variation

Rapport de l'écart-type par la moyenne, en **%**.

$\boxed{\text{CV(X)} = \frac{\sigma\scriptstyle x}{\bar{X}}}$

:::danger
Variable X considérée comme dispersée si:

---

$\text{CV(X)} \geq 25\%$

:::

## 6. Indicateurs de Forme de Distribution
