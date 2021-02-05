**3.The following code causes an infinite loop (a loop that never stops iterating). Why?**

```
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```

The conditional assigns 1 to counter so the while loop keepts logging 1. Since counter is changed to 2 and is not greater than 2, the loop doesn't ever break.
