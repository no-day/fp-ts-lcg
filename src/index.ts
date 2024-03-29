/**
 * @since 1.0.0
 */

import { Eq, eqNumber } from "fp-ts/Eq";
import { pipe } from "fp-ts/function";
import { Ord, ordNumber } from "fp-ts/Ord";
import { Ordering } from "fp-ts/Ordering";

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category model
 */
export type Seed = {
  readonly _URI: unique symbol;
  readonly _A: number;
};

// -------------------------------------------------------------------------------------
// constants
// -------------------------------------------------------------------------------------

const lcgM: number = 2147483647;

const lcgA: number = 48271;

const lcgC: number = 0;

/**
 * @since 1.0.0
 * @category constants
 */
export const seedMin: number = 1;

/**
 * @since 1.0.0
 * @category constants
 */
export const seedMax: number = lcgM;

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

const unsafeMkSeed: (_A: Seed["_A"]) => Seed = _A => ({ _A } as Seed);

/**
 * Creates a new `Seed`. Any number can be given as it will be rounded and overflows are wrapped internally.
 *
 * @since 1.0.0
 * @category constructors
 */
export const mkSeed: (n: number) => Seed = n =>
  pipe(Math.floor(n), _ => mod(_, seedMax - seedMin), unsafeMkSeed);

// -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Turn a `Seed` back into a `number`
 *
 * @since 1.0.0
 * @category destructors
 */
export const unSeed: (s: Seed) => number = s => s._A;

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category combinators
 */
export const lcgPerturb: (d: number) => (s: Seed) => Seed = d => s =>
  pipe(
    unSeed(s),
    _ => _ * lcgA,
    _ => _ + d,
    _ => mod(_, lcgM),
    unsafeMkSeed
  );

/**
 * @since 1.0.0
 * @category combinators
 */
export const lcgNext: (s: Seed) => Seed = s => lcgPerturb(lcgC)(s);

// -------------------------------------------------------------------------------------
// pipeables
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category Eq
 */
export const equals: (s1: Seed, s2: Seed) => boolean = (s1, s2) =>
  eqNumber.equals(unSeed(s1), unSeed(s2));

/**
 * @since 1.0.0
 * @category Ord
 */
export const compare: (s1: Seed, s2: Seed) => Ordering = (s1, s2) =>
  ordNumber.compare(unSeed(s1), unSeed(s2));

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @since 1.0.0
 * @category instances
 */
export const eqSeed: Eq<Seed> = {
  equals,
};

/**
 * @since 1.0.0
 * @category instances
 */
export const ordSeed: Ord<Seed> = {
  compare,
  equals,
};

/**
 * @since 1.0.0
 * @category instances
 */
export const seed: Eq<Seed> & Ord<Seed> = { equals, compare };

// -------------------------------------------------------------------------------------
// util
// -------------------------------------------------------------------------------------

const mod: (x: number, y: number) => number = (x, y) => {
  if (y === 0) return 0;
  const yy = Math.abs(y);
  return ((x % yy) + yy) % yy;
};
