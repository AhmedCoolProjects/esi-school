---
title: Diagramme Cas d'utilisation
sidebar_position: 1
---

## Le but?

Il decrit les **acteurs**, les **cas d'utilisation** et le **systeme** de bout en bout (des le declenchement, passant par le deroulement jusqu'à la fin)

## Acteurs

Represente un role d'une **entite externe**(humain, dispositif, systeme...) qui interagit _directement_ avec **le systeme etudie** par:

- consultation/modification de systeme
- emettant/recevant des messages porteurs de donnees

L'acteur peut jouer le role de plusieurs acteurs

![image](https://user-images.githubusercontent.com/72823374/154050085-1567b4d9-c090-4996-be7e-aefdd84b5b1c.png)

### Types d'acteurs

- Pricipaux => pour les fcts principales de systeme
- Secondaires => pour la maintenance
- Peripheriques externes => Materiel, ...
- Systemes externes => Autre

### Relations

#### ""generalisation""

Acteur 'A' generalise acteur 'B', si: A peut etre substitue par B. Donc, tous les cas d'utilisations à A le sont aussi à B, mais l'inverse n'est pas vrai

## Cas d'utilisation

- Ensemble de sequences d'actions
- Chaque cas specifie un comportement attendu du systeme
- Decrire ce que le systeme devra faire, **sans specifier _comment_**

![image](https://user-images.githubusercontent.com/72823374/154050251-b79d3525-d6dc-4622-a2d3-5be2f461507d.png)

![image](https://user-images.githubusercontent.com/72823374/154050372-9dd42f7e-eee9-4fda-b0eb-a0f7b10a913c.png)

### Relations

Il y a **3 types** de relations entre les cas d'utilisations:

#### ""include""

A **include** B si: B _est une partie de_ A. Pour executer A, vous devez executer B. A _depend de_ B.

![image](https://user-images.githubusercontent.com/72823374/154050427-1eb4e781-f39f-425f-8ccc-0f51f0f02527.png)

![image](https://user-images.githubusercontent.com/72823374/154050520-15c9179b-53ee-417b-82c3-0258ff56f7b5.png)

#### ""extend""

A **extend** B si: au cours de l'execution de B, il peut entrainer l'execution de A.

![image](https://user-images.githubusercontent.com/72823374/154050602-fcf26031-febc-477b-9a63-8d966c6bf9b8.png)

![image](https://user-images.githubusercontent.com/72823374/154050746-9c1ceda6-2a04-470c-8244-ce0987f8b4ba.png)

#### ""generalisation/specialisation""

s'il y a une specification d'un cas d'utilisation, qui va heriter la description et ajouter des details.

![image](https://user-images.githubusercontent.com/72823374/154050827-8dfb9c41-8f15-4b3a-9883-67d26c998ecc.png)
