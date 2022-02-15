---
title: Les Collections
sidebar_position: 6
---

# Collection

L'interface collection definit les methodes suivantes:

- _int_ **size()**;
- _boolean_ **isEmpty()**;
- _boolean_ **contains(Object obj)**; sends true if the obj exists in the collection
- _boolean_ **add(Object obj)**; to add an element, sends true if done
- _boolean_ **remove(Object obj)**; remove an element, sends true if done
- _boolean_ **removeIf(Predicte pre)**; remove element if pre is true
- _void_ **clear()**; remove all the elements inside the collection
- _Iterator_ **iterator()**;
  also:
- _boolean_ **addAll(Collection<?> col)**; add all elements in col inside the collection.
- _boolean_ **removeAll(Collection<?> col)**; remove all the elements that exist in the col from the collection if exist.
- _boolean_ **retainAll(Collection<?> col)**; the collection will hava only the elements that are shared between the two collections
- _boolean_ **containAll(Collection<?> col)**; return true if the collection contains all the elements inside the col object.

Les collections peuvent contenir n'importe quelle class derivee de Object

## ArrayList

Une class de java.util package qui implemente l'interface List.
Elle est similaire a un tableau, sauf qu'elle peut changer de longueur pendant l'execution.

```java title="test.java"
import java.util.ArrayList;

ArrayList<Integer> myIntegerList = new ArrayList<Integer>(); // we didn't specify any size for the list
```

### ArrayList methods

#### `to add`

- **add(value)**;
- **add(index, value)**;
- **addAll(list)**;
- **addAll(index, list)**;

#### `to remove`

- **remove(index)**;
- **remove(value)**;
- **removeAll(list)**;
- **retainAll(list)**;
- **clear()**;

#### `to get`

- **indexOf(value)**;
- **lastIndexOf(value)**;
- **subList(from, to)**;
- **get(index)**;
- **size()**;
- **iterator()**;
- **toString()**;

#### `to set`

- **set(index, value)**;

#### `to check`

- **contains(value)**;
- **containsAll(value)**;
- **equals(list)**;

## LinkedList

### LinkedList Methods

#### `to add`

- **add(Object obj)**;
- **add(int pos, Object obj)**;
- **addAll(int pos, Collection col)**;
- **addFirst(Object obj)**;
- **addLast(Object obj)**;

#### `to remove`

- **clear()**;
- ...

## Map (dictionnary)

- Stoke les elements d'une collection sous format **Key/Value**
- Pas de _keys_ similaires
- Each _key_ has at most one value

### Map Operations

imported as _java.util.HashMap_

- **put(key, value)**;
- **get(key)**;

```java title="test.java"
HashMap<String, Integer> notes = new HashMap<String, Integer>(); // a map with String keys and Integer values

notes.put("Ahmed", 16);
notes.put("Imane", 12);
notes.put("Youssef", 8);

// get notes
System.out.println(notes.get("Ahmed"));
System.out.println(notes.get("Imane"));

```

## Set

collection non ordonnee sans doublon. Les operation sont exactement celles de la collection

## Conclusion

- get acces to elements faster by index => **ArrayList**
- stocker les elements en conservant l'ordre => **Liste**
- collection unique sans doublon => **Set, HashSet, LinkedHashSet, TreeSet**
- stocker les donnees sous la forme key/value => **Map, Hashtable, HashMap, TreeMap**
- insertion et suppression à faible coût => **LinkedList**

