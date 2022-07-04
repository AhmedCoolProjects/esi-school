---
title: Time Series | Exercies
sidebar_position: 6
---

## Exercice 1

![image](https://user-images.githubusercontent.com/72823374/177054006-dc7c044a-73be-4109-8159-32a20136962c.png)

Le modèle est **Additif**.

Calculons les Coefficients Saisonnières?

### Solution

1. $S_t$:

   | t   | $y_t$ | $T_t$  | $S_t$                 |
   | --- | ----- | ------ | --------------------- |
   | 1   | 406   | 421.91 | 406 - 421.91 = -15.91 |
   | 2   | 450   | 430.79 | 450 - 430.79 = -19.21 |
   | 3   | 444   | 439.67 | 444 - 439.67 = 4.33   |
   | 4   | 480   | 448.55 | 480 - 448.55 = 31.45  |
   | 5   | 420   | 457.44 | 420 - 457.44 = -37.43 |
   | 6   | 455   | 466.32 | 455 - 466.32 = -11.32 |
   | 7   | 459   | 475.20 | 459 - 475.20 = -16.20 |
   | 8   | 510   | 484.08 | 510 - 484.08 = 25.92  |

2. Coefficients saisonnières:

   Il y a **p** Coefficients saisonnières et **p = 4** et **2** **cycle**, donc:

   $CS_j = (S_j + S_{j+4}) / 2$

   donc:

   | j   | $CS_j$ |
   | --- | ------ |
   | 1   | -26.67 |
   | 2   | 3.94   |
   | 3   | -5.93  |
   | 4   | 28.68  |

3. $\large{\bar{CS}}$:

   $\large{\bar{CS} = \frac{1}{4} \sum_{j = 1}^{4} CS_j = 0.01 }$
