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

### Relations

Il y a **3 types** de relations entre les cas d'utilisations:

#### ""include""

A **include** B si: B _est une partie de_ A. Pour executer A, vous devez executer B. A _depend de_ B.

#### ""extend""

A **extend** B si: au cours de l'execution de B, il peut entrainer l'execution de A.

#### ""generalisation/specialisation""

s'il y a une specification d'un cas d'utilisation, qui va heriter la description et ajouter des details.
