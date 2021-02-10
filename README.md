# fp-ts-lcg

A seeded pseudorandom number generator based on the linear congruential generator algorithm.

A port of [purescript-lcg](https://github.com/purescript/purescript-lcg).

## Install

Uses `fp-ts` as a peer dependency.

```bash
npm install fp-ts @no-day/lcg
```

## JavaScript Example

```js
// index.js

const lcg = require("@no-day/lcg");

let seed = lcg.mkSeed(3532);

for (let i = 0; i < 10; i++) {
  console.log(lcg.unSeed(seed));
  seed = lcg.lcgNext(seed);
}
```

Result:

```
node index.js
3533
170541443
901176102
1242866010
134522471
1691132760
373584549
879580920
351404483
1819954887
```

The generated seeds are pseudo random. Meaning, that whenever the same initial seed is chosen (here it's 3532), the results of the next seeds will be always the same. The generated seeds will be eqaully distributed in the range of `lcg.seedMin` and `lcg.seedMax`.

# Dcoumentation

- [API](https://no-day.github.io/fp-ts-lcg/modules/index.ts.html)
