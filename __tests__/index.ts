import * as fc from "fast-check";
import * as $ from "../src";

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
        const seed_ = $.mkSeed(n1);
        const nextSeed = $.lcgPertub(n2)(seed_);
        const num = $.unSeed(nextSeed);
        console.log(n1, n2, num);
        expect(num).toBeGreaterThanOrEqual($.seedMin);
        expect(num).toBeLessThanOrEqual($.seedMax);
        expect(num).toBeLessThanOrEqual(Math.ceil(num));
      })
    );
  });
});
