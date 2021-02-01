**4. What happens when you run the following code? Why?**

```
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
```

```
const NAME = 'Victor';
undefined

console.log('Good Morning, ' + NAME);
Good Morning, Victor
undefined

console.log('Good Afternoon, ' + NAME);
Good Afternoon, Victor
undefined

console.log('Good Evening, ' + NAME);
Good Evening, Victor
undefined



NAME = 'Joe';
Thrown:
TypeError: Assignment to constant variable.

console.log('Good Morning, ' + NAME);
Good Morning, Victor
undefined

console.log('Good Afternoon, ' + NAME);
Good Afternoon, Victor
undefined

console.log('Good Evening, ' + NAME);
Good Evening, Victor
undefined
```

`NAME` is a constant variable which does not allow changes to the value of `NAME`. So when logging to the console again after trying to change it to `Joe`, it is still returning `Victor`.
