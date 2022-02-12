---
title: Introduction
sidebar_position: 1
---

## Java?

JAVA is an Object Oriented Programing language, it is owned now by Oracle. Java can run on any OS with the same java code.

## What can we do with it?

- ### Desktop Apps
- ### Web Apps
- ### Android Apps, ...

## How it is compiled?

The java code _.java_ is **not** compiled directly to an executable code _.exe_.
But it is compiled to a **java byte code(_.class_)** by the Java Compiler in the **JDK**, then the _java byte code_ is compiled by the **JVM** and runned on the **JRE** like a **JAR** file

### JDK

The **JDK (Java Developement Kit)** is group of tools that are necessiry for:

- Developing
- Compiling
- Debugging
- Executing
- Deploying

### JRE

the **Java Runtime Envirement**, it contains a JVM to be able to run a java code independently of the OS where we run that program.

### JVM

the **JVM( Java Virtual Machine)**, it is the part of the **JRE** that is responsible for running the _bytecode(.class)_ that is created by compiling the java code.

### JAR

the **Java Archive**, it is the file format used to store the java code.

## Java Types

### Primitive Types

- are a part of the java language
- not extracted from classes
  like: `boolean`, `numeric integers`, `numeric floats`

### Reference Types

- classes, like: `string`
- tables
- interfaces

## Variables?

- they must be declared first with their **type**
- they can be associated from the declaration

```java title="file.java"
// declaration
int age;
boolean isLoading, isPending;
// declaration with association
int age = 22;
boolean isLoading = true, isPending = false;

```

## Casting

Changing the type of a variable to another type
. It can be done just for **Primitive Types** and **Sub and Sup classes**

## Operators

- **==** is equal
- **!=** is not equal
- **&&** And
- **||** Or
- **?:** condition ? isTrue : isFalse

## Hello World in Java

```java title="hello_world.java"
public class HelloWord{
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```
