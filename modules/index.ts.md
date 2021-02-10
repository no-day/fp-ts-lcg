---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Eq](#eq)
  - [equals](#equals)
- [Ord](#ord)
  - [compare](#compare)
- [combinators](#combinators)
  - [lcgNext](#lcgnext)
  - [lcgPertub](#lcgpertub)
- [constants](#constants)
  - [seedMax](#seedmax)
  - [seedMin](#seedmin)
- [constructors](#constructors)
  - [mkSeed](#mkseed)
  - [randomSeed](#randomseed)
- [destructors](#destructors)
  - [unSeed](#unseed)
- [instances](#instances)
  - [eqSeed](#eqseed)
  - [ordSeed](#ordseed)
  - [seed](#seed)
- [model](#model)
  - [Seed (type alias)](#seed-type-alias)

---

# Eq

## equals

**Signature**

```ts
export declare const equals: (s1: Seed, s2: Seed) => boolean
```

Added in v1.0.0

# Ord

## compare

**Signature**

```ts
export declare const compare: (s1: Seed, s2: Seed) => Ordering
```

Added in v1.0.0

# combinators

## lcgNext

**Signature**

```ts
export declare const lcgNext: (s: Seed) => Seed
```

Added in v1.0.0

## lcgPertub

**Signature**

```ts
export declare const lcgPertub: (d: number) => (s: Seed) => Seed
```

Added in v1.0.0

# constants

## seedMax

**Signature**

```ts
export declare const seedMax: number
```

Added in v1.0.0

## seedMin

**Signature**

```ts
export declare const seedMin: number
```

Added in v1.0.0

# constructors

## mkSeed

Creates a new `Seed`. Any number can be given as it will be rounded and overflows are wrapped internally.

**Signature**

```ts
export declare const mkSeed: (n: number) => Seed
```

Added in v1.0.0

## randomSeed

Create a random seed.

**Signature**

```ts
export declare const randomSeed: IO<Seed>
```

Added in v1.0.0

# destructors

## unSeed

Turn a `Seed` back into a `number`

**Signature**

```ts
export declare const unSeed: (s: Seed) => number
```

Added in v1.0.0

# instances

## eqSeed

**Signature**

```ts
export declare const eqSeed: Eq<Seed>
```

Added in v1.0.0

## ordSeed

**Signature**

```ts
export declare const ordSeed: Ord<Seed>
```

Added in v1.0.0

## seed

**Signature**

```ts
export declare const seed: Eq<Seed> & Ord<Seed>
```

Added in v1.0.0

# model

## Seed (type alias)

**Signature**

```ts
export type Seed = {
  readonly _URI: unique symbol
  readonly _A: number
}
```

Added in v1.0.0
