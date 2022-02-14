---
title: OOP
sidebar_position: 3
---

# OOP (Object Oriented Programming)

## Class

It is a blueprint for **creating objects** (a particular data structure) that contains its attributes and methods

### Object

Each object is an **instance of a particular class** or subclass with the class's own methods or procedures and data variables (attributes).

![image](https://user-images.githubusercontent.com/72823374/153722525-d0f1da54-c3d9-420f-b961-a195236e8a4d.png)

### Attributes

- They have an **access mode(protected, private, public, no mode)**, and **type(int, String, ...)**, and the **name**

```java title="test.java"
protected boolean isReady;
private String name;
public int age;
float number;
```

#### Public

Who has acces to this attribute?

- **the class where it is defined**
- **classes inside the same package**
- **sub classes**
- **Every class in the application**

#### Protected

Who has acces to this attribute?

- **the class where it is defined**
- **classes inside the same package**
- **sub classes**

#### No Modifier

Who has acces to this attribute?

- **the class where it is defined**
- **classes inside the same package**

#### Private

Who has acces to this attribute?

- **the class where it is defined**

### Methods

- They have an **access mode(protected, private, public, no mode)**, and **type of return(int, String, void, ...)**, and **name**, and **args** if exist, and **the logic** of the method

```java title="test.java"
public int calcSum(int arg1, int arg2){
    return arg1 + arg2;
}
```

### Constructors

A method called while creating an object from the class where it defined to initaite it.

- it has the same name of the class
- it has no return
- can have as you want of args
- in a class, there can be 0, 1 or many constructors

```java title="Person.java"
public class Person{
    private String name;

    // constructor
    public Person(String name_arg){ // the name_arg is given while creating the object
        name = name_arg; // the giving name will take place inside the name attribute
    }
}
// inside the test.java
Person person1 = new Person("Ahmed"); // creating the object <person1>
```

### Getters & Setters

To **read** or **modify** an attribute that we that have access to, we can use Getters for reading and Setters for setting.

```java title="Person.java"
public class Person{
    private int age;

    public Person(int age_arg){
        age = age_arg;
    }
    // getter for age
    public int getAge(){
        return age;
    }
    // setter for age
    public void setAge(int new_age){
        age = new_age;
    }
}
```

```java title="test.java"
Person p1 = new Person(22);
int ahmed_age = p1.age; // this is not possible because the age is private and cant be accessed from another class else than Person.java class
int ahmed_age = p1.getAge(); // calling the age getter to send us the age value
p1.age = 23; // not possible
p1.setAge(23); // calling the setter to set the new value of the age attribute
```

### Static

A static attribute is shared between with each object from the same class **with the same value**.
A static method **independant of the object** and **doesn't treat any not static attribute**. Also calling this method **doesn't need to initiate an object** from the class to use it.

```java title="Person.java"
public class Person{
    private static int age = 22;
    
    public static int getAge(){
        return age;
    }
    public Person(int age_local){
        age = age_local;
    }
}
```
```java title="test.java"
// I wanna get the age of all the persons
Person.age; // false, because the age is private
Person.getAge(); // ok
```

### Final

- Final attribute: can't be modified
- Final class: can't have a subClass
- Final method: can't be modified in a subClass

```java title="test.java"
public final int age = 10;
public final class Person{}
public final void MyMethod(){}
```

### Surcharge

Methods **can have the same name with different signatures(arguments)**

```java title="Person.java"
public int calculerAge() //ok
public int calculerAge(LocalDate dateNaissance) //ok
public int calculerAge(String nom, LocalDate dateNaissance) //ok
// it s okay to use this methods in the same class
```

```java title="Person.java"
public int calculerAge(String nom) //ok
public float calculerAge(String nom) //not ok !!!
// it s okay to use the same name, but never okay to use it with the same type and number of args
```

### Comparaison des objets

- 2 objects (a and b) with the same values and from the same class are **different**

### Communication avec les methodes

Java by default passes object parameters by value as a copy, but if the parameter is an object of a class, then it is passed by ref so it'll affect the original object.

args in methods can be passed by **value** or by **refrence**. In the first case, the original variable will **not change**. In the second case, the original variable **will recieve every change** made on it inside the method.

### Heritage

By adding _extends_ to a class from another class, then the subClass will recieve the **attributes** and the **methods** (Not only the constructure) from the supClass.
A subClass can only extends **One class**

```java title="Person.java
public class Person{
    private int age;
    private String name;

    public Person(int age_arg, String name_arg){
        this.age = age_arg;
        this.name = name_arg;
    }
}
```

```java title="Employee.java
public class Employee extends Person{
    private float salary;

    public Employee(int age_arg, String name_arg, float salary_arg){
        super(age_arg,name_arg);
        this.salary = salary;
    }
}
```

**super()** is used to pass the args from the constructor of the subClass to the supClass.

### Polymorphism

to reuse attributes and methods from the supClass inside the subClass with different ways.
It is also used to change the type ref of an object _(object can reference to the supClass or to a subClass of it)_

```java title="Animal.java"
public class Animal{
    public void sound(){
        System.out.print("Sound");
    }
}
```

```java title="Cat.java"
public class Cat extends Animal{
    public void sound(){
        System.out.print("Meow");
    }
}
// we used the same method but with different way inside the subClass
```

### Abstract class

- can't initiate an object
- can be only a supClass by implementing it
- can define abstract methods
- **abstract methods** are methods without _body_ and they can't be **final** and should be always **public**
- It is not necessary to redefine all the methods from an abstract class inside its subClasses

```java title="Animal.java"
public abstract class Animal{
    public void sound();
    public abstract void change(String n);
}
```

### Interface

A type of **abstract classes** can contain only **abstract classes**

```java title="MyClass.java"
public interface MyClass{
    public void sound(); // it s abstract because: no body + public + not final + inside an abstract class
    public abstract void change(String n);
    void b(); // already public and abstract because it is inside an Interface
}
```

A subClass can implement more than one interface

```java title="C.java"
public class C implements I1, I2, I3{
    // ...
}
```

Interface can be used as a reference for objects from classes that implements this interface

```java title="main.java"
MyInterface ref ; //est correct
MyInterface ref = new X(…) //est correct pour toute classe X qui implémente MyInterface
```
