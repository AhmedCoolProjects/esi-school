---
title: Introduction
sidebar_position: 1
---

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <img src="https://user-images.githubusercontent.com/72823374/174663502-b9e31232-f5f8-4539-950a-4c91ef603c01.png" alt="statistiques-image" />
</div>

La donnée est une ressource de valeur qui doit être _collectée_, _traitée_ et _analysée_ afin d'en extraire de l'information, et c'est l'objectif de la **Statistique**.

:::note

- Une Donnée: Element Brut
- Information: Donnée mise en Contexte

:::

## 1. Généralités sur la Statistique

### 1.1. Vocabulaire

- **Statistique**: Ensemble de méthodes scientifiques _(maths + informatique)_ permettant de collecter, organiser, traiter et analyser les données afin d'en extraire de l'information. Elle est considérée la base de la **Data Science**.
- **Population/Univers**: Ensemble d'objets ou de personnes d'une étude statistique.
- **Echantillon**: sous-ensemble d'une population. Elle doit avoir les mêmes propriétés fondamentales que la population.
- **Individu/Unité Statistique**: élément d'une population ou d'une échantillon.
- **Variable/Caractère**: caractéristique définie sur la population est observée sur l'échantillon.
- **Observation**: Mesure de la variable pour un individu.
- **Enquête**: opération qui consiste à recueillir les données statistiques en _observant_, _mesurant_ ou _questionnant_ les individus:
  - **Enquête Exhaustive**: toute la population étudiée _(Recensement)_.
  - **Enquête Partielle**: une échantillon de la population étudiée _(Sondage)_.
- **Modalité**: Valeur possible d'une variable.
- **Données/Série**: ensemble des individus observés, les variables considérées et leurs observations.
- **Tableau individus-caractères**: tableau contenant les données statistiques.

:::danger
Ne pas confondre entre:

---

- **La Statistique**: C'est la discipline qui collecte, organise, traite et analyse les données.
- **Les statistiques**: Apparu en 18ème siècle pour désigner des données chiffrées _(ressources économiques, situation démographique, etc.)_.
- **Une statistique**: quantité définie par rapport à un modèle _(i.e une statistique de test)_.

:::

### 1.2. Historique

La Statistique a connu une évolution considérable depui les années 1960 avec le développement d'outils informatiques de plus en plus en terme de puissance de calcul et capacité de stockage.

Depuis les années 2000, la Statistique est devenu un élément essentiel pour d'autres disciplines de la **Data Science**, **Data Mining** et le **Machine Learning**.

### 1.3. Branches

- **Statistique Descriptive _(Description)_**:
  Ensemble de méthodes ayant pour objectif de décrire les données étudiées. _(présentation, représentation graphique, calcul des résumés numériques, etc.)_ Applée aussi: _Statistique Exploratoire_ ou _Analyse des Données_.
- **Statistique Inférentielle _(Explicative)_**:
  Ensemble de méthodes ayant pour objectif d'inférer _(induire)_ un phénomène pour une population globale à partir de son observation sur un échantillon, dans un but principalement explicatif.
- **Statistique d'Apprentissage _(Prédictive)_**:
  Issue de l'intersection avec le Machine Learning, son principal objectif est de construire un modèle pour la prédiction des valeurs d'une variable ou plusieurs variables à partir des données de grandes dimensions.

### 1.4. Utilisation

La Statistique est utilisée dans tous les secteurs d'activité.

- **Economie**: indicateurs, sondages, ...
- **Démographie**: natalité, fécondité, migration, ...
- **Santé**: mortalité, facteurs de risque, taux de couverture sanitaire, ...
- **Environnement**: pollution, réchauffement climatique, ...
- **Industrie**: contrôle de la qualité, production, fiabilité, ...

:::tip
Quand il y a des données, il y a la Statistique.
:::

### 1.5. Outils Informatiques

- logiciels statistiques:
  - **SPSS**
  - **STATA**
  - **SAS**
  - **Excel**
- language:
  - **R**
  - **Python**

## 2. Collecte de Données

La collecte des données n'est pas une fin en soi, mais essentielle pour:

- Avoir une vue globale
- Prendre des décisions en connaissance de l'environnement
- Constater des problèmes, des théories et les vérifier
- Résolution proactive des problèmes.
- Identifier les lacunes, Mesurer les progrès et tirer parti des possibilités.

### 2.1. Processus

1. Identifier le **besoin**
2. Planifier l'**approche** à adopter et les **méthodes** à utiliser
3. **Recueillir** les données
4. **Traiter** les données
5. **Analyser** les données
6. **Diffuser** et **Conserver** les données et les résultats.
7. Réaliser le **bilan du processus**

### 2.2. Echantillonnage

Une technique incontournable en Statistique, c'est une opération délicate qui nécessite une bonne connaissance de la population étudiée. Il est nécessaire de contrôler la représentativité de l'échantillon, dont les observations peuvent être extrapolées à l'ensemble de la population.

Il y a plusieurs méthodes d'échantillonnage:

- **Echantillonnage Aléatoire Simple**:
  - Plus simple et la plus connue
  - Chaque individu a une chance égale d'être sélectionné dans l'échantillon
  - Peut être effectué avec remplacement ou sans remplacement
- **Echantillonnage Systématique**:
  - Par intervalles
  - Tirer un individu non plus au hasard avec un écart entre chaque individu ajouté dans l'échantillon
  - Assure une certaine exhaustivité
  - `k = n / taille de l'échantillon`
- **Echantillonnage Stratifié**:
  - Diviser la population en groupes homogènes _(strates)_, et sélectionner des individus dans chaque strate par une méthode d'échantillonnage
  - Permet de garantir la représentation de toutes les individus.
- **Echantillonnage en Grappes**:
  - Diviser la population en sous-ensembles _(grappes)_ qui sont chacun représentatifs de la population, puis tirer aléatoirement des individus au sein des grappes choisies.

## 3. Traitement de Données

Les données collectées peuvent présenter plusieurs problèmes:

- **Formats** différents
- **Valeurs Manquantes**
- **Bruitées**

Donc, la nécessité de les traiter afin de:

- Corriger les anomalies détectées.
- Redéfinir certaines échelles pour homogénéiser certaines variables.
- Utiliser des données externes pour enrichir le jeu initial.
- Obtenir des données de qualité et exploitable lors de l'analyse.

### 3.1. Etapes

- **Compréhension**:
  - Vérifier le _volume_
  - Vérifier les _propriétés générales_
  - Découvrir les _ordres de grandeurs_
- **Nettoyage**:
  - Ecarter
  - Remplacer
  - Compléter
  - Découper
  - Imputer
- **Intégration**:
  - Regrouper
  - Détecter et Corriger les conflits _(représentations/échelles)_
  - Gestion des _redondances_
  - Utiliser les _métadonnées_ pour la résolution des problèmes de nomage.
- **Transformation**:
  - Formats et Types
  - Normalisation
  - Discrétisation, valeurs numériques en tranches
  - Généralisation, remplacement de bas niveau par de niveau élevé

## 4. Analyse de Données

Après leur collecte et traitement, les données deviennent prêtes pour l'analyse afin de:

- Offrir une meilleure compréhension de la problématique.
- Extraire l'information pertinente qu'elles contiennent.

Les méthodes d'analyse sont:

### 4.1. Statistique Descriptive

Pour effectuer un exploration des données _(résumer et synthétiser l'information, suggérer des hypothèses pour la population)_

Elle est déclinée en 3 catégories:

- **Statistique Unidimensionnelle/Univariée**: étudier chaque variable à part. _(Très utile pour la phase de traitement)_
- **Statistique Bidimensionnelle/Bivariée**: Pour détecter les liaisons entre les variables 2 à 1. _(étudier la corrélation: l'intensité de la liaison)_
- **Statistique Multidimensionnelle**: Détecter les corrélations multiples entre les variables ainsi que les ressemblances entre les individus. _(Analyse en composantes principales, Analyse factorielle des correspondances, Analyse factorille des correspondances multiples)_

### 4.2. Statistique Inférentielle

Permet d'étendre les résultats obtenus sur l'échantillon à l'ensemble de la population, en utilisant des modèles probabilistes.

### 4.3. Fouille de données

Extraire des informations intéressantes _(non triviales, implicites, préalablement inconnues et potentiellement utiles)_ en utilisant des procédures automatiques ou semi-automatiques.

### 4.4. Apprentissage Automatique

Exploiter ces données afin de doter les ordinateurs la capacité à **apprendre** sans qu'ils soient explicitement programmés.
