---
title: Sysèmes Multi-Agents
sidebar_position: 2
---

![diabetes-expert-4403262-3658886](https://user-images.githubusercontent.com/72823374/175177241-ac3bf9a3-8c4c-46ee-b343-a49f4f2eaea7.png)

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

### 2.3. Agents Active A

Un agent est une entité **logicielle** ou **matérielle** qui est capable de **percevoir** son E, d'**agir** sur son E et de **se comporter** de manière _autonome_.

Il est autonome et situé.

:::info
Agent Intelligent?

---

Utilise une sorte de connaissance ou de représentation des buts ou des désires de l'utilisateur.

Il est défini par 4 éléments: Percepts, Actions, Goals, Environnement.

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

### 2.5. Organisation O

### 2.6. Opérations Op

## 3. Types d'Agents

## 4. Conception d'un SMA

## 5. Langages et Outils

## 6. Applications des SMA

- Développement des systèmes _complexes_, _répartis_ et _hétérogènes_ où le résultat est le résultat de **l'interaction de plusieurs entités**.
- Exemples:

  - Controle de Trafic.
  - Controle en temps réel des systèmes embarqués.
  - Gestion des architectures orientées-services.
  - Gestion des infrastructures basées sur le cloud et l'IOT.
