---
title: Décision dans le Risque
sidebar_position: 7
slug: décision-dans-le-risque
---

La partie de risque se caractérise par sa probabilité qui est ni certaine, ni incertaine _(0 < p < 1)_.

## Matrice de Décision

On va ajouter une autre ligne à la matrice à la fin pour affecter les probabilités dans chaque etat de la nature.

|         | e(1)  | ... | e(i)  | ... | e(n)  |
| ------- | ----- | --- | ----- | --- | ----- |
| a(1)    | X1,1  | ... | X1,i  | ... | X1,n  |
| ....    | ....  | ... | ....  | ... | ....  |
| a(j)    | Xj,1  | ... | Xj,i  | ... | Xj,n  |
| ....    | ....  | ... | ....  | ... | ....  |
| a(m)    | Xm,1  | ... | Xm,i  | ... | Xm,n  |
| ----    | ----  | --- | ----  | --- | ----  |
| Prob{e} | p(e1) | ... | p(ei) | ... | p(en) |

:::info

- La somme des **probabilités d'occurrence** est égale à **1**
- L'alternative **a** peut etre ecrite comme suite:
  **aj = (Xaj ; P)**

:::

## Théorie de l'utilité espérée (VNM)

VNM: Von Neumann et Morgenstern _(1944)_

La théorie se base sur l'**Espérance Mathématique de l'utilité**:
`E(U(aj)) = Sigma(i=1 -> n) pi.Xaj,ei`

Après d'avoir les espérances de chaque alternative, on va choisir celle avec **l'espérance la plus élevée**

## Exemple 1

### Situation

Faut-il invester dans une _résidence_, un _immeuble_, des _appartements_, ou _aucun_ investissement??

Cela va dépendre de l'etat de _marché immobilier_: Fort, Moyen, Faible.

La matrice de décision dans ce cas est la suivante:

|             | Fort | Moyen | Fort |
| ----------- | ---- | ----- | ---- |
| Résidence   | 550  | 110   | -310 |
| Immeuble    | 300  | 129   | -100 |
| Appartement | 200  | 100   | -32  |
| aucun       | 0    | 0     | 0    |
| ----------- | ---- | ----- | ---- |
| Prob{e}     | 0.4  | 0.5   | 0.1  |

`Les chiffres peuvent correspondent aux résultats monétaires en MDH`

### Solution par VNM

On a:

- E(U(Résidence)) = 0.4 \* 550 + 0.5 \* 110 + 0.1 \* (-310) = **244**
- E(U(Immeuble)) = 0.4 \* 300 + 0.5 \* 129 + 0.1 \* (-100) = **174.5**
- E(U(Appartement)) = 0.4 \* 200 + 0.5 \* 100 + 0.1 \* (-32) = **126.8**
- E(U(Aucun)) = **0**

`Donc: d'après la théorie de VNM: il faut opter pour l'investissement dans la Résidence`
