---
title: j
sidebar_position: 3
---

create table with 4 columns and 7 rows in markdown

|                | Fort | Moyen | Faible |
| -------------- | ---- | ----- | ------ |
| 1              | 2    | 3     | -310   |
| 5              | 6    | 7     | -100   |
| 9              | 10   | 11    | -32    |
| 13             | 14   | 15    | 0      |
| ---            | ---  | ---   | ---    |
| Probabilité{e} | 0.4  | 0.5   | 0.1    |

## Exercices

### Exercice 1

|         | e1  | e2   | e3   | e4   |
| ------- | --- | ---- | ---- | ---- |
| a1      | 20  | 25   | 40   | 100  |
| a2      | 5   | 30   | -100 | 125  |
| a3      | 40  | 50   | -32  | 0    |
| ------- | --- | ---- | ---- | ---- |
| prob{e} | 0.2 | 0.25 | 0.4  | 0.15 |

```
1. Proposer des choix d'alternatives pour tous les critères dans un environnement risqué ou incertain.
2. Pour le critère d'HURWICZ: déterminer en fonction des différentes valeurs de [alpha], degré d'optimisme, l'action préféré.
```

:::tip

1. Utiliser La **Théorie de l'utilité expérée(VNM)** et choisir l'action dont l'espérance mathématique est le plus élevée.

   Espérance mathématique de l'utilité: **E(U(aj)) = SIMA(i=1 -> n) p(i)X(aj,ei)**

:::

Solution:

1. E(U(a1)) = 0.2 x 20 + 0.25 x 25 + 0.4 x 40 + 0.15 x 100 = **20.5**

   E(U(a2)) = 0.2 x 5 + 0.25 x 30 + 0.4 x -100 + 0.15 x 125 = **-5.5**

   E(U(a3)) = 0.2 x 40 + 0.25 x 50 + 0.4 x -32 + 0.15 x 0 = **-2.5**

   Donc: Il faut opter pour l'alternative **a1** selon la théorie de l'utilité expérée.

```bash npm2yarn
npm install
```
