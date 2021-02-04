**1. What values do the following expressions evaluate to?**

```
false || (true && false);
false

true || (1 + 2);
true

(1 + 2) || true;
3
// Because of short circuiting, the or expression only checks the first operand and evaluates it. Since it is truthy, it does not check further


true && (1 + 2);
3
// Due to short circuiting, this expression checks the first operand which is true and goes to the second which evaluates it as 3

false && (1 + 2);
false

(1 + 2) && true;
true

(32 * 4) >= 129;
false

false !== !true;
false

true === 4;
false

false === (847 === '847');
true

false === (847 == '847');
false

(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
(false || false || true || false)
true
```
