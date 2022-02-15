---
title: Diagramme de classes
sidebar_position: 1
---

# Le but?

decrire un ensemble d'objets(attributs, comportement) avec des relations qui sont des liens tnres ces objets.

# Classe?

Representation abstraite d'un ensemble d'objets ont les memes caracteristiques

![image](https://user-images.githubusercontent.com/72823374/153944850-f2f80954-99e9-44d8-bd80-b726659b486e.png)

## Objet?

Instance d'une classe

## Attribut?

Un type d'information contenu dans une classe

## Operation?

Un comportement ou service contenu dans une classe

## Visibilite

- Public(**+**): par tous
- Protected(**#**): dans la classe et les sous-classes
- Private(**-**): dans la classe seulement

![image](https://user-images.githubusercontent.com/72823374/153945214-fb089b73-f921-4cba-8189-9c3777992025.png)

## Relations

### Association

Semantique entre les objets

![image](https://user-images.githubusercontent.com/72823374/154044062-62d54153-3a7c-439c-bf72-9dacd12f6d31.png)

#### Association n-aire

![image](https://user-images.githubusercontent.com/72823374/154045037-582127ab-ba59-4be5-a33a-dc0b026b54e8.png)

#### Navigabilite

![image](https://user-images.githubusercontent.com/72823374/154045529-b8cb5309-c224-4987-b47d-d183d25e528e.png)

### Agregation

Relation transitie de Contenance ou Composition

![image](https://user-images.githubusercontent.com/72823374/154046379-b8fa4b59-558c-4ee9-b8a0-46a5c44a519d.png)

#### Contenance

![image](https://user-images.githubusercontent.com/72823374/154046661-b804ed2f-967e-462f-9d1b-4a6a47fd1449.png)

#### Composition

C'est une contenance structurelle entre les instances.

- La **multiplicite** de cote de l'agregat vaut toujours soit _0_ soit _1_ (agregation non partagee)
- La destruction de l'agregat composite entraine la **destruction de tous ses elements**.
  ![image](https://user-images.githubusercontent.com/72823374/154046923-a010f435-1923-4634-9729-adbed6e217d6.png)

![image](https://user-images.githubusercontent.com/72823374/154047437-b5a04aaf-b1ff-4866-9992-3407978fb08d.png)

### Dependance

Unidirectionnelle d'une dependance semantique. La **modefication** de la _cible_ **implique** le **changement** de la _source_. Representee par un **trait discontibu oriente**.

![image](https://user-images.githubusercontent.com/72823374/154047900-1be017d0-746c-4683-b363-36820992b492.png)

### Heritage

Generalisation/Specialisation.

- Les sous-classes **heritent les proprietes** de leur super-class et peuvent comporter des proprietes specifiques **supplementaires**.
- super-classes: _classes generales_
- sous-classes: _classes specialisees_
- heritage: _specialisation_ ou _generalisation_

![image](https://user-images.githubusercontent.com/72823374/154048911-8fcd8539-cef9-414e-b84a-92b47fab3ace.png)

## Cardinalite-Multiplicite

![image](https://user-images.githubusercontent.com/72823374/154044762-01dd585f-7cd0-47cd-80e8-14bf9c40a999.png)

![image](https://user-images.githubusercontent.com/72823374/154045167-8c71cf44-ac64-4a3f-8cd0-87110da69e10.png)

## Classe abstraite

Simplement une classe qui ne s'instancie pas directement, mais utilisee afin de factoriser les proprietes. Ses noms sont mensiones en _italique_

![image](https://user-images.githubusercontent.com/72823374/154049420-1b6efa76-9c1d-4bad-9b69-289d1181903f.png)
