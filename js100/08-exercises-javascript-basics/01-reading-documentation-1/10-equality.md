**In your JavaScript console, execute the following two lines of code to check whether their return values differ and if so, how. Take a look at the MDN documentation on equality comparisons to read about how == and === differ.**

```
'8' == 8;   // true
'8' === 8;  // false
```

`==` coerces the operands to the same type due to type conversion. `===` checks for strict equality so both operands will have to be the same type for it to return true.
