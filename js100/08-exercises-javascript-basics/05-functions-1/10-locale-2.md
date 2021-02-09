**Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:**

extractRegion('en_US.UTF-8'); // 'US'
extractRegion('en_GB.UTF-8'); // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

```
function extractRegion(locale) {
  let wordsArr = locale.split('_');
  wordsArr.shift();
  return wordsArr.join().split('.')[0];
}

extractRegion('en_US.UTF-8'); // 'US'
extractRegion('en_GB.UTF-8'); // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
```

LS solution

```
function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

extractRegion('en_US.UTF-8'); // 'US'
extractRegion('en_GB.UTF-8'); // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
```
