**The MDN page for Date lists two methods to get the year of a date.**

```
let today = new Date();

today.getYear();
today.getFullYear();
```

What is the difference between the two methods and which one should you use?

`getYear()` returns the a number less than zero to over a 100, representing the year minus 1900, depending on which century the year is. For example, years 2000 and up would return 100 or greater, years 1900 to 1999 would return a number between 0 and 99 and anything before 1900 would return a number less than zero. This method has been deprecated and it is recommended to use `getFullYear()` instead. `getFullYear()` returns the full year.
