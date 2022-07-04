---
title: Pratique
sidebar_position: 4
---

## 1. Graphe de dispersion

`Graphiques -> Boit de dialog ... -> Dispersion/Points`

![image](https://user-images.githubusercontent.com/72823374/176477473-3f319e58-553e-466e-a0bb-a7208324550f.png)

on constate qu'il y'a une relation linéaire entre la note obtenue au partiel et la note de l'examen.

## 2. Corrélation de Pearson

`Analyse -> Corrélation -> Bivariée`

![image](https://user-images.githubusercontent.com/72823374/176476362-a7d2490a-8c3e-4d27-9a8f-db0ddacdb946.png)

- La corrélation ici est **significative** au niveau de **0.01** avec la valeur **0.948** entre les notes partieles et les notes d'examen.

![image](https://user-images.githubusercontent.com/72823374/176472653-804792e9-73e0-4720-b49e-2103b7e0b184.png)

- Le Coefficient de corrélation de Pearson ici est de: **-0.01**, alors pas de relation entre le sexe et les années d'éducation. Alors les deux variables bougent dans des sens différents.

![image](https://user-images.githubusercontent.com/72823374/176474902-6b4f32c3-8afe-4ed7-a158-1e571460572c.png)

- Corrélation de **0** entre le nombre des chats et le nombre des chiens.

## 3. Coefficient de Corrélation Multiple R

`SST = SSR + SSE`

- Le Coefficient de **détermination** mesure la qualité du modèle développé.

- Le Coefficient de corrélation multiple est le carré de coefficient de détermination $R^{2} = \frac{SSR}{SST}$

:::note
Le modèle est **plus bon** si le coefficient **s'aproche de 1**.
:::

## 4. Régression Linéaire

`Méthode des moindres carrés`

La droite unique qui _minimise la somme verticale au carré_ entre le points et la droite.

![image](https://user-images.githubusercontent.com/72823374/176485596-98d40f83-53ff-4ad2-b1fb-9a1f10f7bf60.png)

### 4.1. Paramètres de l'équation du modèle de régression

![image](https://user-images.githubusercontent.com/72823374/176501444-600ccfe6-1ed8-4e2c-bc8f-c37e9736ec8d.png)

On peut éxtraire les paramètres de l'équation de la droite de régression à partir ce tableau, où **Coefficients non standardisés** représente les coefficients **B** qui sont la **constante** et la **pente** de la droite.

$\boxed{\Large{b=\frac{cov\lparen XY \rparen}{V\lparen X \rparen}}}$

$\boxed{\Large{a=\bar{Y}-b\bar{X}}}$

:::info
La pente représente la valeur que Y va augmenter en moyenne si X augmente par un unité.
:::

Alors: $\boxed{\Large{Examen = 1.148 * \lparen Partiel \rparen - 2.945}}$
