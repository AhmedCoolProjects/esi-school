---
title: Systèmes Experts
sidebar_position: 1
---

<img src="https://user-images.githubusercontent.com/72823374/175177241-ac3bf9a3-8c4c-46ee-b343-a49f4f2eaea7.png" alt="se" />

Un système expert _(SE)_ est un programme conçu pour raisonner habilement à propos de taches dont elles requièrent une _expertise humaine considérable_. Il est capable de mettre en oeuvre des connaissances pour **imiter** le comportement et/ou le raisonnement des experts dans un domaine d'expertise particulier. Il effectue des taches de résolution de problème pour lesquelles la solution algorithmique classique est très difficile et complexe. Il a l'avantage qu'il est _duplicable_ et toujours _disponible_ et ses connaissances sont extraites de plusieurs experts.

## 1. Domaines d'application

- **Finance et l'assurance**
- **Médcine**
- **Agriculture**
- **Géologie**
- **Informatique**
- **Militaire**

## 2. Architecture d'un SE

![image](https://user-images.githubusercontent.com/72823374/175100107-dea11f5e-a48e-4942-88c7-c5e7dfe1040c.png)

:::info
Le principe du SE est la **Séparation** et **l'Indépendance** entre **les connaissances** et **le moteur d'inférence**.
:::

### 2.1. Base de Règles (BR)

- La mémoire à **long terme** d'une base de connaissance.
- Modélise **la connaissance** du domaine considéré.
- Sous forme de: `Si <condition i> alors <conséquence j>` ou `Prémisse -> Conclusion`
- Ensemble de règles de production applicables sur les Faits pour déduire de nouveaux Faits et construire une ou plusieurs solutions et prendre des décisions et proposer des idées.

### 2.2. Base de Faits (BF)

- La mémoire à **court terme** ou **espace de travail du système**.
- le dictionnaire des mots techniques spécifiés dans le domaine d'expertise étudié.
- Contient des Faits permanents.
- Un Fait est une proposition évaluée à vrai.
- Contient des Faits découverts lors du raisonnement.

### 2.3. Moteur d'Inférence (MI)

C'est le systèmes de contrôle et de raisonnement sur les connaissances. Capable de simuler la réflexion de l'expert humain et de répondre aux questions posées par les utilisateurs. Déduit les réponses fondées sur la base de connaissances.

Indépendant du domaine d'application.

### 2.4. Interface Utilisateur

L'interface d'interaction avec les utilisateurs pour la saisie des questions et l'affichage des réponses.

### 2.5. Composantes Supplémentaires

![image](https://user-images.githubusercontent.com/72823374/175103325-90c56c5e-ba0a-446e-9c3e-d2fd2ecfdd26.png)

- **Module d'acquisition des connaissances**:

  Enrichir la BC par des nouvelles connaissances et renforcer sa capacité de résolution.

- **Module d'explication/justification**:

  Expliquer la réponse à l'utilisateur par la trace de la résolution.

## 3. MI: Cycle de base

Le MI effectue plusieur cycles tout au long de son raisonnement jusqu'à aboutir à un résultat ou jusqu'à la saturation.

### 3.1. Phase d'Evaluation

Le choix des règles qui peuvent être utiles pour l'éxécution.

- **Collecter l'ensemble des règles déclenchables**:

  - **Sélection/Restriction**:

    sélection des faits et des règles qui seront probablement utiles pour trouver la solution.

  - **Filtrage/Génération de conflit**:

    trouver l'ensemble de conflits dont les prémisses des règles existent dans la base de faits.

- **Résolution de conflits**:

  Sélectionner la ou les règles qui seront effectivement exploitées lors de la phase de l'éxécution selon leures complexités ...

### 3.2. Phase d'Exécution

Déclenchemment des règles sélectionnées et l'ajout les faits résultants à la BF.

![image](https://user-images.githubusercontent.com/72823374/175106904-6d9c1b23-6aef-4b0c-be01-33ab79cf0ed2.png)

## 4. MI: Caractéristiques

### 4.1. Stratégie de Résolution

Choisir un critère pour ordonner les règles à déclencher effectivement. _(Exemples: Première rencontrée, La plus complexe, La moins complexe, La plus prometteuse, La plus fiable, La moins couteuse, etc.)_

Parmi les stratégies utilisées:

    - Stratégie de recherche en largeur.
    - Stratégie de recherche en profondeur d'abord.
    - Stratégie basée sur les informations heuristiques ou les métarègles.

### 4.2. Mode de Raisonnement

C'est le mode d'invocation des règles:

    - Chainage Avant: Data-driven, dirigé par les données.
    - Chainage Arrière: Query-diven, dirigé par les buts.
    - Chainage mixte

### 4.3. Régime de Contrôle

Dans le cas où la phase d'éxécution déboucherait sur un échec, il existe deux types de contrôle pour le résoudre:

- **Contrôle Irrévocable**:

  L'application d'une règle n'est jamais remise en cause. Ainsi, aucun retour possible sur la sélection des règles dans la phase de résolution de conflits. Si le but n'est pas atteint, et la règle n'est pas applicable, le **MI** s'arrête et signale un échec.

- **Contrôle par Tentatives**:

  Possibilité de revenir à un point de déduction précédent lors de la résolution de conflits et faire ensuite un autre choix _(backtracking)_. Les MI qui adpotent ce régime suivent généralement des stratégies en profondeur d'abord puique avec une stratégie en largeur le retour arrière est, en principe, inutile.

### 4.4. Pérennité des Faits

- **Logique monotone**:

  Garde les fait initiaux et ceux ajoutés lors de la phase de l'éxécution.

- **Logique non-monotone**:

  Possibilité de retirer des faits soit dans le cas de _backtracking_ ou si les faits présentent des contradictions.

## 5. MI: Mode de Raisonnement

Le processus de raisonnement du MI consiste à **enchainer** les règles, alors un **chainage**.

Puis il représente les règles sous forme d'un **graph de décision/production** de la sorte: `conclusion(s) si condition(s)`

### 5.1. Chaînage Avant

- **Déductif**
- Commence par les faits initiaux et en se basant sur les règles, il déduit des nouveaux faits.
- S'arrete lorsqu'**aucune** règle n'est applicable.
- Les étapes:

  1. Sélection des règles dont les prémisses sont dans la base de faits.
  2. Application d'une de ses règles afin d'ajouter des faits à la BF.
  3. Répétition jusqu'à la saturation _(aucun fait ne peut être ajouté)_ ou jusqu'on atteint le but.

- Exemple:

  ![image](https://user-images.githubusercontent.com/72823374/175169268-1628d190-363d-4386-93e0-c9fd37897257.png)

### 5.2. Chaînage Arrière

- Parcours guidé par le but.
- On cherche à prouver un but.
- Commence par les **hypothèses** et recherche les règles qui peuvent prouver l'hypothèse.
- Les conditions non vérifiées des règles déclenchées deviennent elles mêmes des sous buts à vérifier.
- Etapes:

  1. Sélection des règles dont la conclusion correspond au but recherché. Ses prémisses deviennent elles mêmes des buts à prouver.
  2. Arrétant lorsque tous les sous buts sont prouvés _(alors le but est atteint)_, ou lorsqu'il n'est plus possible de sélectionner une règle.

- Régime de contrôle par Tentatives.

## 6. Acteurs d'un projet SE

1. **Informaticien**:

   Construction du MI et de l'IU.

2. **Ingénieur de la connaissance _(cogniticien)_**:

   design, construction et débogage de la BC.

3. **Experts du domaine**:

   Connaissance sémantique du domaine en terme de relation entre les faits et événements.

4. **Utilisateurs**:

   Information sur le problème individuel à résoudre.

## 7. Outils de développement

- Langages Classiques:
  - C, Fortran
- Langages Objets:
  - C++, java, Smalltalk
- Langages IA:
  - Prolog, Lisp
- Générateurs de SE:
  - Clips, FuzzyClips, Kappa

:::danger
Limites d'un SE?

---

- Le développement et la maintenance des BCs.
- Dans une applicatoin complexe, les différents points de vue des experts main notre BC à contenir des connaissance hétérogènes et contradictoires.
- Une BC ne peut pas contenir toutes ces connaissances.

:::
