---
title: Equilibre de Nash
sidebar_position: 1
---

## 1. Introduction

On prend l'exemple suivant et déterminant l'**équilibre en stratégie dominante**:

<table>
    <thead>
        <tr>
            <th colspan={2} rowspan={2}>Bataille des sexes</th>
            <th colspan={2}>Sara</th>
        </tr>
        <tr>
        <th>Foot</th>
        <th>Cinéma</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan={2}>Karim</th>
            <td>Foot</td>
            <td>2, 1</td>
            <td>0, 0</td>
        </tr>
        <tr>
            <td>Cinéma</td>
            <td>0, 0</td>
            <td>1, 2</td>
        </tr>
        
    </tbody>
</table>

Pas d'équilibre en stratégie dominante.

:::warning
Il existe des situations de jeu pour lesquelles on arrive pas à identifier un équilibre en stratégie dominante.
:::

## 2. Equilibre de Nash

Pour caractériser l'issue qu'on a eu dans l'introduction, J.F.Nash a proposé un nouveau concept en 1950: `Simultanément le joueur i choisit la meilleure stratégie en tenant compte du meilleur choix du joueur j et le joueur j choisit la meilleure stratégie en tenant compte du meilleur choix du joueur i.`

:::note
L'EN est stable car c'est une issue où aucun joueur n'est incité à dévier de façon unilatérale.
:::

### 2.1. Stratégie Pure

Applicant l'EN sur le jeu de Bataille des sexes:

<table>
    <thead>
        <tr>
            <th colspan={2} rowspan={2}>Bataille des sexes</th>
            <th colspan={2}>Sara</th>
        </tr>
        <tr>
            <th>Foot</th>
            <th>Cinéma</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan={2}>Karim</th>
            <td>Foot</td>
            <td >
            <span style={{fontSize:24}}>2</span>, <span style={{fontSize:24}}> 1</span></td>
            <td><span>0</span>, <span>0</span></td>
        </tr>
        <tr>
            <td>Cinéma</td>
            <td><span>0</span>, <span>0</span></td>
            <td><span style={{fontSize:24}}>1</span>, <span style={{fontSize:24}}>2</span></td>
        </tr>
        
    </tbody>
</table>

Alors il y a 2 EN en stratégie pure: soit (Foot, Foot) ou (Cinéma, Cinéma).

### 2.2. Stratégie Mixte

Calculons l'EN en stratégie mixte de la situation précédente:

- **p** la probabilité de _Karim_ pour le choix de Foot, et alors **1-p** sera pour le choix de Cinéma.

- **t** la probabilité de _Sara_ pour le choix de Foot, et alors **1-t** sera pour le choix de Cinéma.

---

1. Trouvons la fonction de réaction de _Karim_ en fonction de la probabilité de _Sara_:

   - $E\lparen U_{karim}\lparen Foot \rparen \rparen$ = 2.t + 0.(1-t) = 2.t
   - $E\lparen U_{karim}\lparen Cinéma \rparen \rparen$ = 0.t + 1.(1-t) = 1-t

   Alors, Karim choisit le **Foot** si:

   $E\lparen U_{karim}\lparen Foot \rparen \rparen \gt E\lparen U_{karim}\lparen Cinéma \rparen \rparen$

   c'est-à-dire:

   $2.t \gt 1-t$

   ALors:

   $\boxed{\large{t \gt \frac{1}{3}}}$

   Donc, la **fonction de réaction** de Karim est comme suit:

   $R = p*\lparen t \rparen = \begin{cases}
    1 &\text{si } t \gt \frac{1}{3} \\
    [0,1] &\text{si } t = \frac{1}{3} \\
    0 &\text{si } t \lt \frac{1}{3}
    \end{cases}$

2. Trouvons la fonction de réaction de _Sara_ en fonction de la probabilité de _Karim_:

   Alors, si Sara choisit le **Foot**, on a:

   $E \lparen U_{Sara} \lparen Foot \rparen \rparen = 1.p + 0.\lparen 1-p \rparen = p$

   $E \lparen U_{Sara} \lparen Cinéma \rparen \rparen = 0.p + 2.\lparen 1-p \rparen = 2 - 2p$

   Alors, si Sara choisit le Foot si:

   $E \lparen U_{Sara} \lparen Foot \rparen \rparen \gt E \lparen U_{Sara} \lparen Cinéma \rparen \rparen$

   c'est-à-dire:

   $p \gt 2 - 2p$

   ALors:

   $\boxed{\large{p \gt \frac{2}{3}}}$

   Donc, la **fonction de réaction** de Sara est comme suit:

   $R = t*\lparen p \rparen = \begin{cases}
     1 &\text{si } p \gt \frac{2}{3} \\
     [0,1] &\text{si } p = \frac{2}{3} \\
     0 &\text{si } p \lt \frac{2}{3}
     \end{cases}$

3. Représentation graphique des fonctions de réaction:

![image](https://user-images.githubusercontent.com/72823374/175790175-4181abbb-aa31-44ea-ad9e-8e64697efede.png)
