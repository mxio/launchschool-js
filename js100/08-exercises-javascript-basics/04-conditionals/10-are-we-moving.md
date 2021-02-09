**Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.**

```
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
```

Bonus question: Do we need the parentheses in the boolean expression or could we also have written the following?

```
let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
```

Running it logs `true`.

LS answer:

```
brakingForce < acceleration // true
speed > 0                   // false
acceleration > 0            // true

Therefore, our logical expression breaks down to true && (false || true). Since false || true evaluates to true and true && true evaluates to true as well, the value of isMoving is true.
```

Parenthesis would be needed to evaluate the expression the same way it was written in the original code, otherwise, the `&&` expression evaluates first.
