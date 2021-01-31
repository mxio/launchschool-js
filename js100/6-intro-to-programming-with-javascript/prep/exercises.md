# Prep Exercises

**1. Create a directory named my_folder and navigate to that directory. Create two files named one.js and two.js in my_folder. Add the following JavaScript code to one.js:**

```
console.log("this is file one");
```

Add some code to two.js that logs 'this is file two'.

When you're finished, run both programs with node.

```
mxio:$ mkdir my_folder
mxio:$ cd my_folder
mxio:$ touch one.js
mxio:$ touch two.js

Edit one.js and two.js in editor

mxio:$ code one.js
mxio:$ code two.js

mxio:$ node one.js
this is file one
mxio:$ node two.js
this is file two
```

**2. When you finish Exercise 1, navigate to the directory above the my_folder directory and delete all the content you generated in exercise 1 with one command.**

```
mxio:$ cd ..
mxio:$ rm -r my_folder
```

**3. Create a file named foo.js in a directory named preparations_exercises. Add the following code to the file.**

```
let foo = "bar";
console.log(foo);
foo;
```

```
mxio:$ mkdir preparations_exercises
mxio:$ cd preperations_exercises
mxio:$ cd preparations_exercises
mxio:$ touch foo.js
mxio:$ code foo.js

Add code to foo.js
```

**4.**
**Use node to run the foo.js file using node. What does it output?**
bar

**Copy and paste the code from foo.js into the node REPL. What does it output?**

```
> let foo = "bar";
undefined
> console.log(foo);
bar
undefined
```

**Copy and paste the code from foo.js into the Chrome console REPL. What does it output?**
bar
"bar"

**5. Identify the Constructors for each of the following methods and classify each method as either a "Static" or a "Prototype" method:**

- substring

  Constructor: String

  Prototype method

- create

  Constructor: Object

  Static method

- fromCharCode

  Constructor: String

  Static method

- slice

  Constructor: String, Array

  Prototype method

- toString

  Constructor: String, Array, Number, Object

  Prototype method

**6. Which of the following names satisfy the style guidelines for variable names? For the purposes of this question, constants are not variables.**

```
Name
index - yes
CatName
snake_case
lazyDog - yes
quick_Fox
1stCharacter
operand2 - yes
BIG_NUMBER
```

**7. Which of the following names satisfy the style guidelines for function names?**

```
Name
index - yes
CatName - yes
snake_case
lazyDog - yes
quick_Fox
1stCharacter
operand2 - yes
BIG_NUMBER
```

**8. Which of the following names satisfy the style guidelines for constants?**

```
Name
index
CatName - yes
snake_case
lazyDog
quick_Fox
1stCharacter
operand2
BIG_NUMBER - yes
```

**9. Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?**

```
Name
index
CatName
snake_case - no
lazyDog
quick_Fox - no
1stCharacter - no
operand2
BIG_NUMBER
```
