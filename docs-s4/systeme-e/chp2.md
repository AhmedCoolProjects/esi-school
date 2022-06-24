---
title: Sysèmes Multi-Agents
sidebar_position: 2
---

<img src="https://user-images.githubusercontent.com/72823374/175177241-ac3bf9a3-8c4c-46ee-b343-a49f4f2eaea7.png" alt="diabetes-expert-4403262-3658886" />

Le SMA est apparu en combinant 3 facteurs:

- **IA Distribuée**:

  Modélisation des comportements intelligents issus de l'activité coopérative entre plusieurs agents.

- **Résoulution Distribuée des Problèmes**:

  Manière de diviser un problème sur un ensemble d'entités distribuées et coopérantes.

- **IA Parallèle**:

  Développement de langages et d'algorithmes parallèles pour l'IA.

## 1. Définition

Un SMA est un ensemble d'agents organisé en **société** au sein d'un **environnement** où ils interagissent en mode de **coopération**, **compétition** et/ou **co-existence**. Ce système a besoin de définir _comment_ les agents pouvoir communiquer et interagir et aussi _comment_ organiser le système en terme de répartition des taches.

Dans un SMA, chaque agent a des informations ou des capacités _limitées_ et un point de vue _partiel_ où les données sont _décentralisées_ et le calcul est _asynchrone_.

Exemple: _des robots dans un market_, _des robots dans un usine_, _équipe de football_

## 2. Composantes d'un SMA

### 2.1. Environnement E

- **Discret vs Continue**:

  _Discret_ si le nombre d'états distincts de l'E est _limité_ et _clairement définis_

- **Observable**:

  Si _l'appareil sensoriel_ de l'agent donne _accès_ à l'état complet de l'E.

- **Statique vs Dynamique**:

  _Statique_ si _l'E ne change_ pas lorsqu'un agent agit.

- **Déterministe vs Non-déterministe _(stochastique)_**:

  _Déterministe_ si _l'état prochain de l'E_ est _complétement_ déterminée par l'état actuel et les actions retenues par l'agent.

- **Episodique vs Séquentielle**:

  Episodique si l'expérience de l'agent est divisé en _épisodes indépendants_.

### 2.2. Ensemble d'objets Ob

Les objets rencontrés ou manipulés par les agents. Ils sont passifs et situés, càd: pour tout objet, il est possible, à un moment donné, d'associer une position dans E.

### 2.3. Agents Active A

Un agent est une entité **logicielle** ou **matérielle** qui est capable de **percevoir** son E, d'**agir** sur son E et de **se comporter** de manière _autonome_.

Il est autonome et situé.

:::info
Agent Intelligent?

---

Utilise une sorte de connaissance pour la représentation des **buts** ou des **désires** de l'utilisateur.

Il est défini par 4 éléments: **Percepts**, **Actions**, **Goals**, **Environnement**.

Il est proactif, réactif _(répondre au temps)_, flexible, social et interactif.
:::

:::tip
Agent VS Objet

---

Un Agent comme un Objet ecapsule un **état** et un **comportement**.
:::

Les types d'agents:

- **Cognitif**:

  Agents Intelligents Intentionnels, qui possèdent des _buts_, _plans_ et _la gestion_ des interactions.

- **Réactif**:

  Ses actions sont beacoup plus des _réactions dictées par des règles figées_

- **Hybrides**:

  possèdent une architecture mixte combinant un comportement réactif sans considérer l'E et des comportement intetionnels.

:::info
Agent Cognitif VS Agent Réactif

---

- Agent Cognitif: **Connaissance**, **Communication**, **Strategies** et **Memoire**.
- Agent Réactif: **Connaissance** et **Communication**.

:::

### 2.4. Relations R

Elles relient les agents entre eux.

### 2.5. Organisation O

Correspond à la notion de **role** et de **groupes**. Elle définie les fonctions remplies par les agents.

### 2.6. Opérations Op

Qui permettent aux agents actifs de **percevoir**, **produire**, **consommer**, **transformer** et **manipuler** des objets de Ob.

## 3. Types d'Agents

Cette typologie est plus fine et propose 4 classes d'agents:

### 3.1. Réflexe

L'agent choisit ses actions en se basant **uniquement** sur le percept **courant**, en ignorant les percepts précédents. _(exp: agent nettoyeur si..alors)_

### 3.2. Réflexe avec Etat Interne

L'agent garde **la trace de l'état actuel** de l'E, en utilisant un modèle interne. _(exp: agent nettoyeur si..mais..alors)_

### 3.3. Avec But

L'agent garde **la trace de l'état actuel** du monde ainsi que d'un **ensemble d'objectifs** à atteindre, et choisit une action qui va conduire à la réalisation de ces objectifs. _(exp: je dois...alors...je dois aussi...alors...)_

### 3.4. Avec Utilité

Utilise un modèle du monde, avec une **fontion d'utilité** qui mesure **ses préférences** entre les actions possibles en tenant compte de l'état probable des résultats.

---

:::tip
**Agent Apprenant**?

---

Les agents peuvent améliorer leurs performances grâce à **l'apprentissage**.
:::

## 4. Conception d'un SMA

La conception d'un SMA s'attache à décrire:

- **Fonctionnement** des agents identifiés par le choix d'une architecture d'agent spécifique.
- Architecture générale du SMA (Organisation).
- Les différents concepts spécifiques à la méthode utilisée.

## 5. Modèles de SMA

Les principaux modèles manipulés sont:

### 5.1. Modèle de l'agent

L'architecture d'un agent est une description de son organisation interne. Parmi les architectures généralement utilisées pour construire un agent: **BDI**, **ACT-R**, **IDA**, **CTS**, etc. La plupart de ces architectures se fonde sur une **théorie de la cognition**, dont le but est de concevoir **le cycle cognitif** de l'agent. Ce cycle est le processus de **délibération** général se situant entre la perception et l'action.

- **BDI: Belif-Desire-Intention**:

  Est un modèle **Croyance-Désir-Intention** de la rationalité d'un agent intelligent.

  - **Croyance**:

    connaissance que l'agent possède sur l'E et sur d'autres agents, elles peuvent etre incorrectes, incomplètes ou incertaines.

  - **Désir**:

    Objectif que l'agent veut atteindre ou réaliser.

  - **Intention**:

    Les actions que l'agent a **décidé** de faire pour accomplir son désir.

  L'architecture BDI fournit aux agents 3 types de structures de comportement: **Perception**, **Règle** et **Plan**.

### 5.2. Modèle de l'E

### 5.3. Modèle d'Interaction et de Comportement

L'Interaction correspond l'influence d'un agent sur le comportement des autres agents. Les agents doivent interagir entre eux afin de permettre à chacun de réaliser son objectif de conception tout en dépassant ses limites. L'interaction se présente sous forme de:

- **Collaboration**:

  Répartir les travail.

- **Coopération**:

  organiser les actions dans le temps et l'espace entre les agents pour acomplir leur objectif.

- **Négociation**:

  Limiter les effets des conflits.

### 5.4. Modèle de l'Organisation

Une organisation est une communauté d'agents **structurée par des règles** spécifiant son fonctionnement. Elle définit les **roles** et les **groupes** des agents.

Il existe 2 approches de conception de l'Organisation:

- **Approche Statique**:

  Les liens d'autorités et de communications entre agents, connus à priori, sont complétement définis pendant la phase de conception du système.

- **Approche Dynamique**:

  Les liens d'autorités et de communications entre agents se sont pas préétablis, ils seront créés dynamiquement par les agents lorsqu'ils cherchent à atteindre leurs propres buts.

Plusieurs modèles existent: **AGR**, **AUML**, **MOISE+**, **ODML**, **OMNI**, etc.

- **Modèle AGR**:

  Agents-Groupes-Roles

- **Modèle AUML**:

  Extension du langage UML pour les agents.

:::note

- Deux Agents ne peuvent communiquer que s'ils sont de même groupe.
- Un role peut etre joué par plusieurs agents.
- Un agent peut avoir plusieurs roles et etre membre de plusieurs groupes.

:::

## 6. Langages et Outils

## 7. Applications des SMA

- Développement des systèmes _complexes_, _répartis_ et _hétérogènes_ où le résultat est le résultat de **l'interaction de plusieurs entités**.
- Exemples:

  - Controle de Trafic.
  - Controle en temps réel des systèmes embarqués.
  - Gestion des architectures orientées-services.
  - Gestion des infrastructures basées sur le cloud et l'IOT.
