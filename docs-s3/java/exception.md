---
title: Les exceptions
sidebar_position: 4
---

## Les exceptions

Pour generer un erreur par un programme java.

- Les exceptions surveillees: doivent absolument traitees par le programmeur. Elles sont signalees par le compilateur.
- Les exceptions non surveillees: son traitement reste un choix de programmeur.

```java title="test.java"
int x = 10, y = 0, z;
z = x / y; // generate an error
System.out.pringln("after compiling"); // this line will be not treated, because the program will be stopped at the error line
```

En utilisant les exceptions, on peut eviter l'arret de programme while that exception.

### try .. catch

```java title="test.java"
try{
    z = x / 0;
}
catch(ExceptionType1 e){
    System.out.println("Erreur: devision par 0");
    // or
    System.out.println(e.toString());
    // or
    System.out.println(e.getMessage());
    // or
    e.printStackTrace();
}
finally{
    System.out.println("finally...");
}
```

Java permet aussi la creation de nouvelles exceptions via _throws_ suivi par la creation d'un nouvel type d'exception...

```java title="PersonException.java"
public class PersonException extends Exception{
    public String toString(){
        return "La date de naissance est erronee";
    }
}
```

```java title="Person.java"
public class Person{
    private LocalDate birthday;

    public Person(LocalDate date) throws PersonException {
        if(data.isAfter(LocalDate.now())){
            throw new PersonException();
        }else{
            birthday = date;
        }
    }
}
```

```java title="test.java"
try{
    Person p = new Person(LocalDate.of(2025, Month.JANUARY, 25));
}catch(PersonException pe){
    System.out.println(pe.toString());
}
// output: La date de naissance est erronee
```
