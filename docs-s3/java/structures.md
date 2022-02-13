---
title: Les structures de controle
sidebar_position: 3
---

## Les conditionnelles

### if, if .. else

```java title="test.java"
// if statement
if(isGood == true){
    System.out.print("It is Good");
}
// if else statement
if(isGood == true){
    System.out.print("It is Good");
}else{
    System.out.print("It is Bad");
}
// if else if statement
if(my_number > 0){
    System.out.print(" > 0");
}else if(my_number < 0){
    System.out.print(" < 0");
}else{
    System.out.print(" = 0");
}
```

### Switch

For many if else statements treating the value of a **numeric variable**

```java title="test.java"
int day = 4;
Switch(day){
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    case 4:
        System.out.println("Thursday");
        break;
    case 5:
        System.out.println("Friday");
        break;
    case 6:
        System.out.println("Saturday");
        break;
    case 7:
        System.out.println("Sunday");
        break;
    default:
        System.out.println("None");
}
// output: "Thursday" (case 4)
```

## Les boucles

### For

to repeat a statement **a number known** of times

```java title="test.java"
for(int i = 0; i < 10; i++){
    System.out.print(i + ",");
}
// output: 0,1,2,3,4,5,6,7,8,9
```

### While

for a condition, **nothing happens** until the condition is **true**, for a **known or unknown number of times**

```java title="test.java"
int i = 2;
while(i < 5){
    System.out.print(i + ",");
    i++;
}
// output: 2,3,4
int j = 5;
while(j < 5){
    System.out.print(j + ",");
    j++;
}
// output: (nothing)
```

### do .. while

the program **is runned one time before** checking the condition

```java title="test.java"
int i = 2;
do{
    System.out.print(i + ",");
    i++;
}
while(i < 5)
// output: 2,3,4 (the same as while)
int j = 5;
do{
    System.out.print(j + ",");
    j++;
}
while(j < 5)
// output: 5 (it prints first then check if it needs to repeat)
```

### break & continue

- **break** pour sortir de la boucle
- **continue** pour continuer à la suivant sans executer à cette iteration

```java title="test.java"
int i = 0;
for (i; i < 10; i++) {
    if (i == 5) continue; // Si i=5, on passe à 6 sans afficher
    if (i == 7) break; // Si i=7, on sort de la boucle
    System.out.print(i + ",");
}
// output: 0,1,2,3,4,6
```
