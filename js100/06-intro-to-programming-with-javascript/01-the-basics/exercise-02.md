**2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:**

- thousands place is 4
- hundreds place is 9
- tens place is 3
- ones place is 6

```
> let number = 4936
undefined
> let ones = number % 10
undefined
> ones
6
> number = (number - ones) / 10
493
> let tens = number % 10
undefined
> tens
3
> let hundreds = number % 10
undefined
> hundreds
3
> number = (number - tens) / 10
49
> hundreds = number % 10
9
> let thousands = (number - hundreds) / 10
undefined
> thousands
4
>
```
