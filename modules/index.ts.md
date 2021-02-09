---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [Seed (type alias)](#seed-type-alias)
  - [compare](#compare)
  - [eqSeed](#eqseed)
  - [equals](#equals)
  - [lcgNext](#lcgnext)
  - [lcgPertub](#lcgpertub)
  - [mkSeed](#mkseed)
  - [ordSeed](#ordseed)
  - [seed](#seed)
  - [seedMax](#seedmax)
  - [seedMin](#seedmin)
  - [unSeed](#unseed)

---

# utils

## Seed (type alias)

**Signature**

```ts
export type Seed = {
  readonly _URI: unique symbol
  readonly _A: number
}
```

Added in v1.0.0

## compare

**Signature**

```ts
export declare const compare: (s1: Seed, s2: Seed) => Ordering
```

Added in v1.0.0

## eqSeed

**Signature**

```ts
export declare const eqSeed: Eq<Seed>
```

Added in v1.0.0

## equals

**Signature**

```ts
export declare const equals: (s1: Seed, s2: Seed) => boolean
```

Added in v1.0.0

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

## mkSeed

**Signature**

```ts
export declare const mkSeed: (n: number) => Seed
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

## unSeed

**Signature**

```ts
export declare const unSeed: (s: Seed) => number
```

Added in v1.0.0
