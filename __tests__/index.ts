import * as fc from "fast-check";
import { pipe } from "fp-ts/lib/function";
import * as $ from "../src";
import * as array from "fp-ts/Array";

const fcNumber = fc.float(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

describe("seed", () => {
  it("is an integer in the right range", () => {
    fc.assert(
      fc.property(fcNumber, n => {
        const seed_ = $.mkSeed(n);
        const num = $.unSeed(seed_);

        expect(num).toBeGreaterThanOrEqual($.seedMin);
        expect(num).toBeLessThanOrEqual($.seedMax);
        expect(num).toBeLessThanOrEqual(Math.ceil(num));
      })
    );
  });

  it("is an integer in the right range", () => {
    fc.assert(
      fc.property(fcNumber, fcNumber, (n1, n2) => {
        const seed = $.mkSeed(n1);
        const nextSeed = $.lcgPerturb(n2)(seed);
        const num = $.unSeed(nextSeed);

        expect(num).toBeGreaterThanOrEqual($.seedMin);
        expect(num).toBeLessThanOrEqual($.seedMax);
        expect(num).toBeLessThanOrEqual(Math.ceil(num));
      })
    );
  });

  it("is actually random / equally distributed", () => {
    fc.assert(
      fc.property(fcNumber, n1 => {
        let seed = $.mkSeed(n1);
        let num = $.unSeed(seed) - $.seedMin;

        const n = 100000;

        const seedRange = Math.abs($.seedMax - $.seedMin);

        for (let i = 0; i < n; i++) {
          seed = $.lcgNext(seed);
          num += $.unSeed(seed);
        }

        const average = num / n;
        const averageFac = average / seedRange;

        const diff = Math.abs(averageFac - 0.5);

        expect(diff).toBeLessThan(0.01);
      })
    );
  });
});
