import * as fc from "fast-check";
import * as $ from "../src";

describe("seed", () => {
  it("is an integer in the right range", () => {
    fc.assert(
      fc.property(
        fc.float(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER),
        n => {
          const seed_ = $.mkSeed(n);
          const num = $.unSeed(seed_);
          console.log(num);
          expect(num).toBeGreaterThanOrEqual($.seedMin);
          expect(num).toBeLessThanOrEqual($.seedMax);
          expect(num).toBeLessThanOrEqual(Math.ceil(num));
        }
      )
    );
  });
});
