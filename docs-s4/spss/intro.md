---
title: Introduction
sidebar_position: 1
---

**SPSS**: **S**tatistical **P**ackage for the **S**ocial **S**ciences. Par _IBM_, et écrit en _JAVA_.

:::note
Une statistique ou statistique**s**, présentent des indicateurs ou des grandeurs qui résultent d'une méthode statistique.

---

dans SPSS: il y a 2 types de veu: **Veu de données** et **Veu des variables**

---

Les **résultats** de SPSS sont affichés dans la fenêtre de résultats **Viewer**.

---

Pour créer, modéfier ou executer des **commandes**, il faut aller à l'**Editeur de syntaxe**.
:::

## 1. Manipulation des données

### 1.1. Types de fichiers

- **.SAV**: fichier de données.
- **.SPS**: fichier de syntaxe.
- **.SPV**, **.SPO**: fichiers de résultats. _(depuis v-19: .spo)_

### 1.2. Vocabulaire

- **SCORE**, **MODALITE**: CASE.
- **CAS**, **OBSERVATION**: INDIVIDU.

### 1.3. Codification du Questionnaire

C'est traduire le langage naturel en langage qui facilite le traitement informatique. Le résultat est le **dictionnaire des variables et des modalités**.

:::info
Exemples de codage?

---

**Etes-vous un homme ou une femme?** _(fermée)_

Codage: **homme**: 1, **femme**: 2

---

**Avez-vous un enfant?** _(fermée)_

Codage: **oui**: 1, **non**: 2

---

**Quelle est votre spécialité?** _(semi-ouverte)_

Codage: **math**: 1, **physique**: 2, **chimie**: 3, **histoire**: 4, **géographie**: 5, **autre**: 6

:::

La question peut être **fermée**, **semi-ouverte** ou **ouverte**.

:::warning
Dans le cas des questions à choix multiple?

---

CODAGE: **existence**: 1, **absence**: 0

:::

### 1.4. Saisi des données

- Champs: **Etiquette**, **Manquant** _(0,9 ou 99)_ et **Mesure** doivent être remplis.
- Variable Qualitative: **Valeur** doit être rempli.
- **Role**: pour spécifier si la variable est dépendante ou non.
- Remplissage soit en **saisir** ou en **importation** _(.sav, excel, txt, csv, etc.)_

### 1.5. Recodage

- Passez par: **Transformer -> Recodage des variables**.
- ou: **Transformer -> Rocorder automatiquement**.
- ou: **Transformer -> Création de variables**.

### 1.6. Sélection des variables

- **Définition**: des jeux de variables.
- **Utilisation**: utiliser un jeu de variables.
- **Annulation**: afficher toutes les variables.

## 2. Analyse descriptive univariée

:::warning
La fréquence dans SPSS désigne l'effectif de la variable pour notre cours.
:::

### 2.1. Distribution des fréquences

- **Analyse -> Statistiques descriptives -> Fréquences**.

Exemple:

<table>
<thead>
<th colspan="6">
Internet Access
</th>
</thead>
<tr>
<th colspan="2"></th>
<th>Fréquence</th>
<th>Pourcentage</th>
<th>Pourcentage validé</th>
<th>Pourcentage cumulé</th>
</tr>
<tr>
<th rowspan="3">Valide</th>
<th>oui</th>
<th>139674</th>
<th>19.1</th>
<th>19.3</th>
<th>19.3</th>
</tr>
<tr>
<th>non</th>
<th>583521</th>
<th>79.9</th>
<th>80.7</th>
<th>100.0</th>
</tr>
<tr>
<th>total</th>
<th>723195</th>
<th>99.1</th>
<th>100.0</th>
<th></th>
</tr>
<tr>
<th>Manquant</th>
<th>Non déterminée</th>
<th>6904</th>
<th>.9</th>
<th></th>
<th></th>
</tr>
<tr>
<th colspan="2">Total</th>
<th>730099</th>
<th>100.0</th>
<th></th>
<th></th>
</tr>
</table>

Interprétatin:

- **139674** de personnes possède de l'internet, cependant **583521** ne possède pas d'une somme de **723195** d'obseravations qui sont considérées comme valides.
- **6904** observations manquent de données. _(ont pour valeur 9)_.
- La taille de la population ou l'échantillon est **730099**.

- **19.1%** de la population confirme la possession de l'internet, alors que **79.9%** ont confirmé la non-possession de l'internet.
- **99.1%** de la population sont considérées comme valides, alors que **0.9%** sont considérées comme manquantes.

- **19.3%** de la population valide one l'accès à l'internet, cependant **80.7%** n'ont pas.

:::tip
La colonne **Pourcentage cumulé** sera bénéfique pour les variables **ORDINAL** ou **NOMINAL DICHOTOMIQUE**.
:::

### 2.2. Indicateurs de dispersion

Pour savoir si les observations sont concentrées autour de la tendance centrale ou dispersées sur une étendue.

- **Valeur Aberrante**: observation inhabituellement élevée ou basse.

- Si un écart-type est **petit**, alors: **concentrées** _(relativement homogène)_
- Si un écart-type est **grand**, alors: **dispersées** _(hétérogène)_

- **Analyse -> Statistiques descriptives -> Explorer**: la moyenne, la variance, l'écart-type, l'étendue _(Plage)_, min, max, etc.

:::note
Si la **moyenne tronquée** ressemble beaucoup à la **moyenne globale**, alors: les **valeurs extrêmes** ne semblent pas tellement influencer la moyenne.
:::

## 3. Représentation Graphique

### 3.1. Variable Qualitative

- **Diagramme en batons**.
- **Diagramme circulaire _(en secteurs)_**.
- **Graphique en bandeaux _(en barres composées)_**.

### 3.2. Variable Quantitative

- **Histogramme**: pour les observations où $x \in \lbrack a, b \lbrack$

### 3.3. Sous SPSS

- **Analyse -> Statistiques descriptive -> Menu Graphiques**.
- **Graphiques -> Générateur de graphiques -> Barres/circulaire**.

## 4. Analyse descriptive bivariée

### 4.1. Analyse selon le type

- **Qualitative + Qualitative**:

  **Tableaux Croisés _(Tri Croisé)_**, **Khi2**, **Corrélation de Speaman**

- **Qualitative + Quantitative**:

  **F-Ratio**

- **Quantitative + Quantitative**:

  **Nuage de points**, **Corrélation de Pearson**, **Regression**

### 4.2. Tableaux Croisés

- **Analyse -> Statistiques descriptive -> Tableaux croisés**.

Il est important de distinguer entre une variable **dépendante** et une variable **indépendante**.

La première est **subit** l'effet de la variable indépendante.

La deuxième _(explicative)_ influence l'autre variable.

Exemple: _le niveau d'étude_ selon _le milieu_. le _niveau d'étude_ dépend du _milieu_.

Dans les tableaux croisés on représente la variable **dépendante** _(ligne)_ en fonction de la variable **indépendante** _(colonne)_.

:::tip
Tableau Croisé en Strates:

---

Pour ajouter une troisième variable.

:::

:::warning
Limites des tableaux croisés?

---

- Ne sont pas toujours suffisants pour démontrer l'éxistence d'une relation.
- Ne permet pas la mesure de degré de signification statistique de l'association observée.

---

Solution?

---

Le tableau croisé est souvent accompagné des indicateurs suivants: **khi-2**, **Phi _(pertinente pour 2x2)_**, **V de Cramer**.

:::

### 4.3. Khi2

Ce test permet de démontrer s'il y a une relation entre les modalités des deux variables catégorielles. _(exp: Sexe/Couleur)_

Il **mesure la différence** entre le tableau de contingence théorique et le tableau de contingence empirique, et après il **valide** ou **rejette** l'_**hypothèse nulle**_ _(H0)_.

Si l'écart entre les 2 tableaux est **petit** alors on **valide** l'**H0**, sinon on **rejette** l'**H0**.

Dans un test **khi-2**, on possède une marge de risque de **5%**.

Exemple:

|       | ROUGE | BLUE |
| ----- | ----- | ---- |
| HOMME | 50    | 50   |
| FEMME | 50    | 50   |

_Tableau de contingence théorique_, _occurrences attendues: (fréquences si les 2 variables sont indépendantes)_

|       | ROUGE | BLUE |
| ----- | ----- | ---- |
| HOMME | 10    | 90   |
| FEMME | 90    | 10   |

_Tableau de contingence empirique_, _occurrences observées_

On Remarque ici que la différence entre les 2 tableaux est **grand**, alors on **rejette** l'**H0**, donc: Il y a une relation entre les 2 variables.

:::info
Dans SPSS, il y a un indicateur qui nous permet directement de valider ou rejeter une hypothèse H0.

---

**P-value**: le plus petit risque qu'on aurait pu prendre en rejetant l'hypothèse H0.

- si $p \leq 0.05$: association statistiquement significative.
- si $p \gt 0.05$: impossible d'affirmer une association.

:::

### 4.4. V de Cramer

:::note
Khi-2 donne la signification mais pas la force de la relation.
:::

- V de Cramer se varie entre 0 et 1.

| Valeur    | Force du lien statistique |
| --------- | ------------------------- |
| 0         | Absence de relation       |
| 0.05-0.10 | Très faible               |
| 0.10-0.20 | Faible                    |
| 0.20-0.40 | Modérée                   |
| 0.40-0.80 | Forte                     |
| 0.80-1.00 | Louche _(Colinéarité)_    |

---

:::note
La masse de données est importante pour bien connaitre s'il y a une relation entre les 2 variables.
:::

## 5. Corrélation

## 6. Régression linéaire
