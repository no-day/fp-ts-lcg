import { Eq, eqNumber } from "fp-ts/Eq";
import { pipe } from "fp-ts/lib/function";
import { Ord, ordNumber } from "fp-ts/lib/Ord";
import { Ordering } from "fp-ts/lib/Ordering";

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

export type Seed = {
  readonly _URI: unique symbol;
  readonly _A: number;
};

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

const unsafeMkSeed: (_A: Seed["_A"]) => Seed = _A => ({ _A } as Seed);

export const mkSeed: (n: number) => Seed = n =>
  pipe(
    Math.floor(n),
    _ => mod(_, seedMax - seedMin),
    _ => _ + seedMin,
    unsafeMkSeed
  );

// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

export const unSeed: (s: Seed) => number = s => s._A;

// -------------------------------------------------------------------------------------
// constants
// -------------------------------------------------------------------------------------

const lcgM: number = 2147483647;

const lcgA: number = 48271;

const lcgC: number = 0;

export const seedMin: number = 1;

export const seedMax: number = lcgM;

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

export const lcgPertub: (d: number) => (s: Seed) => Seed = d => s =>
  pipe(
    unSeed(s),
    _ => _ * lcgA,
    _ => _ + d,
    _ => mod(_, lcgM),
    unsafeMkSeed
  );

export const lcgNext: (s: Seed) => Seed = s => lcgPertub(lcgC)(s);

// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------

export const equals: (s1: Seed, s2: Seed) => boolean = (s1, s2) =>
  eqNumber.equals(unSeed(s1), unSeed(s2));

export const compare: (s1: Seed, s2: Seed) => Ordering = (s1, s2) =>
  ordNumber.compare(unSeed(s1), unSeed(s2));
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

export const eqSeed: Eq<Seed> = {
  equals,
};

export const ordSeed: Ord<Seed> = {
  compare,
  equals,
};

export const seed: Eq<Seed> & Ord<Seed> = { ...ordSeed, ...eqSeed };

// -------------------------------------------------------------------------------------
// util
// -------------------------------------------------------------------------------------

const mod: (x: number, y: number) => number = (x, y) => {
  if (y === 0) return 0;
  const yy = Math.abs(y);
  return ((x % yy) + yy) % yy;
};
