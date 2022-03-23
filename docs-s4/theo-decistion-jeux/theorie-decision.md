---
title: Théorie de décision
sidebar_position: 12
---

## Décision dans le Certain

L'agent choisit entre des options avec la **certitude** d'obtenir celle qu'il a choisit.

Deux bases de choix ici:

1. Selon des conséquences **qualitatives**:

- A > B _(Préférence forte)_
- A = B _(Indifférent)_
- A >= B _(Préférence faible)_

1. Selon des conséquences **quantitatives**:

- Choisir l' **utilité** élevée.
- S'ils sont égales, choisir une.

## Décision dans le Risque

### Théorie de l'utilité espérée _(VNM)_

- l'Espérance mathématique de l'utilité: **E(U(aj)) = Sigma(i=1, n) p(i).X(aj,ei)**
- Choisir l'action dont l'espérance mathématique est la plus élevée.

## Décision dans l'Incertain

Pas de probabilités.
On utilise des critères pour la décision individuelle:

### Critère de Laplace

- Fonction de Valurisation: **La moyenne** des résultats de chaque action.
- Choisir celle la plus élevée.

### Critère du MaxiMax

- Fonction de Valurisation: **maximum** que peut rapporter chaque action. _(sup)_
- Choisir celle la plus élevée.

### Critère de WALD ou MaxMin

- Fonction de Valurisation: **minimum** que peut rapporter chaque action. _(inf)_
- Choisir la plus élevée.

### Critère d'HURWICZ

- Fonction de Valurisation: **somme** de l' **inf** et **sup** avec une probabilité _(degré d'optimisme)_ de _alpha_ pour l' **inf** et _(1 - alpha)_ pour le **sup**.
- Choisir la valeur finale la plus élevée.

### Critère de SAVAGE _(Regret MiniMax)_

- Fonction de valorisation: calculons le **regret** pour chaque état de la nature. R(aj,ei) = Max(aj)(Xaj,ei) - Xaj,ei
- Choisir le plus **petit** regret Maximal.

## Exemples

|             | Fort | Moyen | Faible |
| ----------- | ---- | ----- | ------ |
| Résidence   | 550  | 110   | -310   |
| Immeuble    | 300  | 239   | -100   |
| Appartement | 200  | 100   | -32    |
| Aucun       | 0    | 0     | 0      |
| Progb       | 0.4  | 0.5   | 0.1    |

### Utilité Espérée

E(U(Résidence)) = 0.4 \* 550 + O.5 \* 110 + 0.1 \* (-310) = **244**
E(U(Immeuble)) = 0.4 \* 300 + 0.5 \* 239 + 0.1 \* (-100) = **229.5**
E(U(Appartement)) = 0.4 \* 300 + 0.5 \* 100 + 0.1 \* (-32) = **126.8**
E(U(Aucun)) = **0**

`Il faut opter pour l'investissement dans la Résidence d'après la théorème de VNM`

### Laplace

L(Résidence) = (55O+110-31O)/3 = **116.66**
L(Immeuble) = (3OO+239-100)/3 = **146.33**
L(Appartement) = (2OO+100-32)/3 = **89.33**
L(Aucun) = **0**

`D'après Laplace, on doit opter pour l'investissement dans l'Immeuble`

### MaxiMax

M(Résidance) = sup(55O,11O,-31O) = **550**
M(Immeuble) = sup(3OO,239,-1OO) = **300**
M(Appartement) = sup(200,1OO,-32) = **200**
M(Aucun) = **0**

`Selon MaxiMax, on doit opter pour l'investissement dans la Résidance`

### WALD _(MaxMin)_

W(Résidence) = inf(550,110,-310) = **-310**
W(Immeuble) = inf(300,239,-1OO) = **-1OO**
W(Appartement) = inf(2OO,1OO,-32) = **-32**
W(Aucun) = **0**

`D'après MaxMin, on doit opter pour l'action AUCUN`

### HURWICZ

avec une _alpha_ = 0.3

H(Résidence) = alpha.inf(550,110,-310) + (1 - alpha).sup(550,110,-310) = 0.3.(-310) + 0.7.550 = **292**
H(Immeuble) = 0.3.(-100) + 0.7.300 = **180**
H(Appartement) = 0.3.(-32) + 0.7.200 = **130.4**
H(Aucun) = **0**

`Selon HURWICZ, on doit opter pour l'investissement dans la Résidance`

### SAVAGE _(Regret MiniMax)_

Notre Matrice:

|             | Fort | Moyen | Faible |
| ----------- | ---- | ----- | ------ |
| Résidence   | 550  | 110   | -310   |
| Immeuble    | 300  | 239   | -100   |
| Appartement | 200  | 100   | -32    |
| Aucun       | 0    | 0     | 0      |

Matric de Regrets:

- Pour l'état de la nature _Fort_, la conséquence maximale est _550_
- _Moyen_ -> _239_
- _Faible_ -> _0_

|             | Fort | Moyen | Faible |
| ----------- | ---- | ----- | ------ |
| Résidence   | 0    | 129   | 310    |
| Immeuble    | 250  | 0     | 100    |
| Appartement | 350  | 139   | 32     |
| Aucun       | 550  | 239   | 0      |

- Le Max des regrets pour l'action 1: *310*
- l'action 2: *250*
- l'action 3: *350*
- l'action 4: *550*

`Selon SAVAGE (Regret MiniMax), on doit opter pour l'investissement dans l'Immeuble`

## Exercices
### Exercice 1


### Exercice 2







