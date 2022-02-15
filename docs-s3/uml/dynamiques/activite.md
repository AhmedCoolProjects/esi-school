---
title: Diagramme d'activité
sidebar_position: 3
---

C'est un diagramme **d'etats transitions _simplifié_**. Utils pour illustrer **les sequences**, les **alternatives** et les **evenements paralleles**.

![image](https://user-images.githubusercontent.com/72823374/154061988-491411d1-148d-4674-92c0-a6251cc69605.png)

## Action

Traitement qui modefie l'état du système.
![image](https://user-images.githubusercontent.com/72823374/154062139-126559a8-25d2-473d-bc74-d742864c6dfd.png)

## Transition

Connectent les activites entre elles
![image](https://user-images.githubusercontent.com/72823374/154062263-865680bf-adf8-4332-af6b-02005e98104b.png)

## Activité

Le comportement d'une partie du système en termes d'actions et de transitions.

![image](https://user-images.githubusercontent.com/72823374/154062414-595f1c1b-bbe0-4d64-b739-5e646043f036.png)

### Noeuds

- Noeud d'execution: action, transition
- Noeud d' controle: noeud initail, noeud final, flux de sortie, noeud de bifurcation, noeud de jonction, noeud de fusion-test, noeud de test-decision, pin d'entree et de sortie
- Neoud d'objet

![image](https://user-images.githubusercontent.com/72823374/154062859-4353bbaf-358d-4efe-8ef6-dd773c675849.png)

#### Noeud de bifurcation

un flot unique entrant cree plusieurs flots concurrents en sorties

![image](https://user-images.githubusercontent.com/72823374/154063022-8c2d491e-7174-488b-bb74-a61642b8cc46.png)

![image](https://user-images.githubusercontent.com/72823374/154063355-9ca0749c-d000-42ba-a038-f00e39129713.png)

#### Noeud de jonction

de plusieurs flots concurrents en entree de la **synchronisation** produisent un flot unique en sortie

![image](https://user-images.githubusercontent.com/72823374/154063256-a3d420b4-2d98-4bbf-b1a6-a341c2be1559.png)

![image](https://user-images.githubusercontent.com/72823374/154063293-2e5006a3-f566-4628-8105-f7d2184242f0.png)

#### Noeud de decision

faire un choix entre plusieurs flots sortants en fonction des **conditions**

![image](https://user-images.githubusercontent.com/72823374/154063516-eaeb505e-4146-4303-9fde-0d403243c810.png)

![image](https://user-images.githubusercontent.com/72823374/154063570-20bb62b0-b6e7-4669-931c-9044f0c2583d.png)

#### Noeud de fusion

de plusieurs flots entrants à un seul flot sortant qui va etre active des un des flots entrant et active

![image](https://user-images.githubusercontent.com/72823374/154063516-eaeb505e-4146-4303-9fde-0d403243c810.png)

![image](https://user-images.githubusercontent.com/72823374/154063923-51c345ef-cab4-44ec-9bb0-1150f918feb3.png)

## Partition

![image](https://user-images.githubusercontent.com/72823374/154064169-3c7a8c73-94ac-41d2-b9e8-5e795fe31498.png)

![image](https://user-images.githubusercontent.com/72823374/154064250-f9fdf976-d36c-40bd-a2d4-6ebffa1a9cea.png)
