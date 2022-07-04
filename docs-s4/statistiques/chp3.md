---
title: Série Chronologique
sidebar_position: 5
---

Ou _Série Temporelle_ _(Time Series)_, dont les ovservations sont effectuées à des intervalles de temps réguliers _(heur, jour, ...)_.

| Mois | Dépenses |
| ---- | -------- |
| 1    | 4 000    |
| 2    | 5 000    |
| 3    | 3 800    |
| 4    | 2 700    |

|      | Jan | Feb |
| ---- | --- | --- |
| 2021 | 112 | 215 |
| 2022 | 151 | 115 |

Ses observations sont ordonnées dans le **temps**, pour **comprendre**, **décrire** l'évolution et **prédire** ce phénomène dans le futur.

:::note

- $y$: série chronologique.
- $y_{t}$: valeur de la série à l'instant **t**.

:::

![image](https://user-images.githubusercontent.com/72823374/177046935-3ee66c89-9c59-4b00-8406-dd8add38d6a5.png)

`t = p*(i - 1) + j`, où p: nombre d'observation par cycle.

## 1. Décomposition

### 1.1. Composantes

- **Tendance** ou **trend** $T_{t}$:

  - de long terme, sur une long période.
  - graphiquement c'est une _droite_.

- **Variations Saisonnières** $S_{t}$:

  - de court terme, se répète dans des cycles.
  - exp: observation trimistrielle: $S_{t+4} = S_{t}$
  - principe de conservation des aires.

- **Variations Résiduelles** $R_{t}$:

  - ou bruit, des creux qui cassent la monotonie des cycles.
  - moyenne et variance nulles.

### 1.2. Modèle de décomposition

Une série chronologique peut etre modélisée à partir de ses trois composantes:

- **Modèle Additif**:

  - $\large{y_{t} = T_{t} + S_{t} + R_{t}}$
  - Utilisé quand les variations autour de la tendance sont constantes.

- **Modèle Multiplicatif**:

  - $\large{y_{t} = T_{t} \times S_{t} \times R_{t}}$
  - Quand les variations autour de la tendance sont croissantes ou décroissantes.

- **Méthode de la bande**:

  - Tracer les droites minima et maxima.
  - Si les deux sont à peu près **parallèles**: _Additif_
  - S'elles **ne sont pas parallèles**: _Multiplicatif_

- **Principe de conservation des aires**:

  - Additif: $\sum_{j=1}^{p} S_{j} = 0$
  - Multiplicatif: $\frac{1}{p}\sum_{j=1}^{p} S_{j} = 1$

## 2. Estimation

### 2.1. Estimation de la tendance

- **Méthode Régression Linéaire**:

  Droite de $y_{t}$ sur $t$ qui satisfait le **critère des moindre carrés**.

- **Méthode des Moyennes Mobiles**:

  à l'ordre **k**, on prend **k+1** si k _pair_, et **k** si k _impair_, centré autour de **t**.

$\boxed{\Large{T_{t} = a \times t + b}}$

- Exemple:

  ![image](https://user-images.githubusercontent.com/72823374/177052084-1cc62068-f156-4bb7-95e9-9552cbc8dcd5.png)

  donc: $T_{t} = 8.881 \times t + 413.03$

### 2.2. Estimation des variations saisonnières

Si on a la tendance, alors: on peut avoir les variations saisonnières.

:::warning
L'estimation de ces variations **dépend** du modèle de la série
:::

:::tip
Avec l'estimation de la tendance avec les variations saisonnières, on peut faire des **prédictions**
:::

1. $S_t$:

   $\large{S_t = y_t - T_t}$

   $\large{S_t = \frac{y_t}{T_t}}$

2. Coefficients saisonnières:

   $\large{CS_j = (S_j + S_{j+p} + S_{j+2p} + ... + S_{j+np})/(n+1)}$

3. $\large{\bar{CS}}$:

   $\large{\bar{CS} = \frac{1}{p} \sum_{j = 1}^{p} CS_j }$

4. Coefficients Saisonnières Corrigés:

   $\large{CS_j' = CS_j - \bar{CS}}$

   $\large{CS_j' = \frac{CS_j}{\bar{CS}}}$
