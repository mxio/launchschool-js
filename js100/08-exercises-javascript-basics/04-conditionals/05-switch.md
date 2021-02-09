**Take a look at the code below. Without running it, determine what it will log to the console. If you're not sure, refer to the MDN documentation on switch statements.**

```
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}
```

It will log all `neigh` and then the subsequent cases since there are no breaks in the cases afterwards. Breaks have been omitted throughout all the case statements.
