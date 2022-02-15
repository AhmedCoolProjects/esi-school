---
title: Diagramme d'etats transitions
sidebar_position: 2
---

Decrivent les **etats stables** d'une classes et les **transitions** qui s'y appliquent, et le **comportement concret de la vie** d'un objet

![image](https://user-images.githubusercontent.com/72823374/154052104-fc3d5d1d-1568-4f94-b2c3-5b8ae7353543.png)

## Etat

Une situation durant la vie d'un objet pendant laquelle:

- Il satisfait une condition
- Il execute une activite
- Il attend un evenement

![image](https://user-images.githubusercontent.com/72823374/154052417-4aee9744-3258-4f69-b7ad-d3a9a2d75745.png)

### Etat initail

La creation de l'instance

### Etat final

La destruction de l'instance

### Etat compose

Qui **s'emboite** d'autres etats: _sous-etats_.

![image](https://user-images.githubusercontent.com/72823374/154052884-8048c035-e483-4d72-8e67-879a7b6a0c4a.png)

## Transition

Decrit la reaction d'un objet lorsqu'un evenement se produit. C'est que l'objet **change** d'etat.

![image](https://user-images.githubusercontent.com/72823374/154053220-db1d4411-c46b-4b17-8b27-9ee5fff94db5.png)

## Evenement

Un fait survenu qui **declenche** une stransition.

- Appel de methode: le plus courant
- Signal: clic de souris
- Changement de valeur: vrai/faux
- Ecoulement du temps: lie à une condition de durée ou de date

![image](https://user-images.githubusercontent.com/72823374/154057619-e18f31d4-2c56-45f9-8816-5f5499333106.png)

## Condition

Expression booleenne qui doit etre **vrai** lors de **l'evenement** pour que **la transition** soit declenchee.

![image](https://user-images.githubusercontent.com/72823374/154057668-bfb54346-17d9-4aab-98d7-b86e6b15c523.png)

## Action et Activite

- Action: operation instantanee **ne peut etre pas interrompue**. Associee à une **transition**
- Activite: operation d'une certaine duree qui **peut etre interrompue**. Associee à un etat d'un **objet**.

![image](https://user-images.githubusercontent.com/72823374/154058384-151c915c-aa99-4ab4-a8d5-35530f6cd594.png)

## Recapulatif

![image](https://user-images.githubusercontent.com/72823374/154057903-27cac762-5ca0-428d-a875-3acffac0f4e4.png)
