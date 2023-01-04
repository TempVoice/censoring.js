# Censoring.js

## About
This package is able to filter words of a string and avoid common bypass methods like using different fonts or symboles between the words.

## Installation
```
npm i censoring.js
```

## Usage
```js
const { censor } = require("censoring.js")

const string = "I dont like cats. C4ts are 𝓵𝓪𝔃𝔂 and attacking me all the time! I h-a.te them.."
const array = ["cats", "lazy", "hate"]
const replacement = "*"

const censored = censor(string, array, replacement)
console.log(censored) // I dont like **** **** are **** and attacking me all the time! I **** them..
```

