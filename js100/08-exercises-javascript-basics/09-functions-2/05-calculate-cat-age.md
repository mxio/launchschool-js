**Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:**

    The first human year corresponds to 15 cat years.
    The second human year corresponds to 9 cat years.
    Every subsequent human year corresponds to 4 cat years.

For example:

```
catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
```

```
function catAge(humanYears) {
  let yearOne = 15;
  let yearTwo = 9;
  let additionalYears = 4;
  let catYears = 0;

  switch (humanYears) {
    case 0:
      return catYears;

    case 1:
      catYears += yearOne;
      return catYears;

    case 2:
      catYears += yearOne;
      return catYears += yearTwo;

    default:
      catYears += yearOne;
      catYears += yearTwo;
      return catYears += (additionalYears * (humanYears - 2));
  }
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
```
