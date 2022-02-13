---
title: Les Tableaux (Arrays)
sidebar_position: 5
---

## Array

```java title="test.java"
int my_array[] = new int[50]; // fixed size to 50
// or
int[] my_array = new int[50];
```

### Methods of an Array

- **.length:** return the `size` of the array

### Affectation

```java title="test.java"
int my_array[] = new int[50];
int my_array2[] = new int[50];
my_array = my_array2;
// if we changed in my_array then it ll change in the my_array_2
```

### Tableau bidimensionnel

```java title="test.java"
int[][] my_array_bidi = new int[5][2];
// 5 lines & 2 columns
```

### Problem

La taille d'un tableau is fixee et ne peut etre pas augmenter apres son instanciation
