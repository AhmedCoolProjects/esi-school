---
title: Lois Empiriques
sidebar_position: 2
---

Il y a 3 lois empiriques de la bibliométrie:

## 1. LOTKA _(1926)_

`Dynamique des populations`

Mesure la **contribution** de chaque chercheur au progrès scientifique. _(productivité des scientifiques)_

Regroupement d'auteurs par rand de fréquence de publications.

### 1.1. Formulation mathématique

$\boxed{\Large{n_{i} = \frac{n_{1}}{i^2}}}$

- $\Large{n_{i}}:$ nombre de chercheurs ayant publié i articles.
- $\Large{n_{1}}:$ nombre de chercheurs ayant publié 1 article.
- $\Large{i}:$ nombre d'articles publiés par chercheur.

### 1.2. Exemple

![image](https://user-images.githubusercontent.com/72823374/176754562-b48f2c19-f117-4809-98cc-1120a0c9e081.png)

Solution:

$\Large{n_{1} = 200}$

$\Large{n_{2} = \frac{200}{2^2} = 50}$

$\Large{n_{3} = \frac{200}{3^2} = 22}$

$\Large{n_{4} = \frac{200}{4^2} = 12}$

$\Large{n_{5} = \frac{200}{5^2} = 8}$

$\Large{n_{6} = \frac{200}{6^2} = 5}$

$\Large{n_{7} = \frac{200}{7^2} = 4}$

:::note
Le nombre de chercheurs publiant décroit au fur et à mesure que le nombre d'articles publiés par chercheur augmente.

---

La somme des chercheurs publiant est **301** et le nombre des articles publiés est **512**.

:::

## 2. BRADFORD _(1934)_

Gestion des **abonnements** et de manière plus précise de connaitre le **noyau** des périodiques d'un domaine.

- le _noyau_ contient les revues les plus importantes, celles auxquelles la bibliothèque doit impérativement s'abonner.
- la _zone 2_: s'abonner si le budget le permet.
- nombre de périodiques _croissant_.
- nombre d'articles _constant_.

$\boxed{\Large{\text{r: nombre de périodiques de noyau}}}$

$\boxed{\Large{\text{q: facteur de Bradford}}}$

$\boxed{\Large{rq^{i}\text{: nombre de périodique dans la zone i}}}$

:::note
périodiques = revues

:::

### 2.1. Exemple

![image](https://user-images.githubusercontent.com/72823374/176776943-aeb2d5f6-342b-4891-bb4f-2edfa0a91739.png)

- on a:

  $r.q_{1} = 59$, donc: $\boxed{q_{1} = \frac{59}{9} = 6.55}$

  $r.q_{2}^{2} = 258$, donc: $\boxed{q_{2} = \sqrt{\frac{258}{9}} = 5.35}$

- Alors

  $\boxed{q = \frac{6.55 + 5.35}{2} =5.95 }$

### 2.2. Ressemblance avec la Loi de Pareto

les **20%** premières sources fournissent **80%** de l'information.

## 3. ZIPF _(1949)_

Etude **linguistique** des écrits par le biais de la fréquence d'utilisation des mots.

## 4. PRICE

`Distribution des Avantages Cumulés (DAC)`

`Les succès est récompensé, alors que l'échec n'a aucun conséquence`
