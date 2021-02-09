**Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:**

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example:

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises.

(If you're interested, you can find a list of locales here: http://www.localeplanet.com/icu/iso639.html)

```
function localGreet(locale) {
  let language = locale.split('_')[0];
  let region = locale.split('.')[0].split('_')[1];

  if (language === 'en' && region === 'US') {
    return 'Hey!';
  } else if (language === 'en' && region === 'GB') {
    return 'Hello!';
  } else if (language === 'en' && region === 'AU') {
    return 'Howdy!';
  } else {
    switch (language) {
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Olá!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!');
      break;
    }
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
```

LS solution:

```
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}
```
