**The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.**

```
for (let i = 0; ; i += 1) {
  console.log("and on");
}
```

Launchschool solution:

```
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}
```

It keeps looping forever because the condition is missing.
