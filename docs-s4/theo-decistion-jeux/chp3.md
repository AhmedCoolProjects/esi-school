---
title: Modélisation des décisions individuelles | 3 concepts de base
sidebar_position: 4
slug: concepts-de-base
---

En théorie de la décision individuelle:

- La représention d'un problème de décision est la **matrice de décision**. Elle peut etre aussi l'**arbre de décision**

:::important

Pour utiliser ces représentations, 3 concepts de base de la TdD doivent etre définis: **actions _(alternatives)_**, **états de la nature**, **conséquences**

:::

## Ensembles d'Alternatives

Pour un problème, les **décisions** disponibles sont les **alternatives** _(des stratégies, options, actions, scénarios, ...) à choisir_

L'ensemble d'alternatives peut etre:

- **Ouvert**: Possibilité d'avoir de nouvelles alternatives.
- **Fermé**: Impossible d'avoir une nouvelles alternative à ajouter.

:::note

**Dans la vie réelle**: ces ensembles fréquement sont **_ouverts_**. Cependant **Dans la TdD**, ils sont généralement **_fermés_**, car:

1. résolution des problèmes **plus difficile** s'il est fermé.
2. Avoir une solution **définitive** au problème s'il est fermé.

:::

### Ensemble Fermé

La fermeture de l'ensemble d'alternatives peut etre:

- **Fermeture Volontaire**: le _décideur_ lui-meme qui ferme l'ensemble dans la pemière étape de décision.
- **Fermeture Involontaire**: elle est **imposée** par d'autres ou par des circonstnces impersonnelles.

:::note
Les _alternatives_ sont **mutuellement idépendantes**, càd: impossible d'avoir 2 qui sont simultanément réalisables.
:::

## Etats de la Nature

L'**effet** d'une décision dépend de:

- **notre choix** d'une alternative et comment nous avons l'éxécutée.
- **facteurs en dehors** du controle du décideur _(exogènes)_. Cependant, certains sont **connus** constituent l'information dont le décideur dispose. D'autres sont **inconnus**, qui dépendent sur les _comportements_ des autres et sur les _éléments de la nature_ qui sont inconnus au décideur.

:::info
Dans la TdD, les divers **facteurs superflux INCONNUS** sont regroupé dans un **nombre de cas**, appelés: **Etats de Nature**
:::

## Conséquences

Ce sont les effets **combinés** d'une alternative choisie et de l'état de la nature.

`Conséquences = Alternative + Etat de nature`

### Conséquence Qualitative _(Ordinale)_

La règle de décision: **préférence**

- A > B => A meilleur que B _(préférence forte)_
- A = B => également bons _(indifférent)_
- A ≥ B => A au moin aussi bon que B _(préférence faible)_

### Conséquence Quantitative _(Cardinale)_

Représenter les valeurs de conséquences par des nobres, c'est l'**utilité** U(x).
La règle de décision: **simple** et **évident**

- Choisir l'utilité la plus élevée.
- Si égale => choirir une

## Notions

:::important

- une alternative: **a(j)**
- un ensemble d'alternatives: **A**
- un état de la nature pour une alternative: **e(i)**
- La nature: l'ensemble des états de la nature: **E**, E = {e(1), ..., e(i), ..., e(n)}
- Hypothèse: le choix d'une action n'influence pas l'état de la nature.
- Conséquence: une action _a(j)_ avec la réalisation d'un états de la nature _e(i)_ est: **Xa(j),e(i)**
- l'ensemble des conséquences possibles: **X**, X = {Xa(1),e(1) ,..., Xa(1),e(n) ,..., X(m),e(1) ,..., X(m),e(n)}

:::
