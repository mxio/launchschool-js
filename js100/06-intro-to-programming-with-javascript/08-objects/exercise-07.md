**7. Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:**

Snippet 1

```
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});
```

Snippet 2

```
for (let key in myObj) {
  console.log(key);
}
```

Without running this code, can you determine whether these two snippets produce the same output? Why?

The first snippet only returns `myObj`'s own keys whereas the second snippet will return all keys. This difference is due to prototypes.
