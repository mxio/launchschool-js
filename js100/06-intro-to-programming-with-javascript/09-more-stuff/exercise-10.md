**10. This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.**

Consider this code:

```
> let x = "5"
> x = x + 1
= "51"
```

Now, consider this code:

```
> let y = "5"
> y++
```

What gets returned by y++ in the second snippet, and why?

y++ returns 5.

**Launch School explanation:**
If you apply ++ to a string, JavaScript coerces it into a number. In this case, "5" gets coerced to the number 5. After coercion, it then increments the value to 6. However, the return value is 5 since the post-increment operator (y++) returns the original value of y, not the incremented value.

This shows that x++ is not the same thing as x = x + 1.
