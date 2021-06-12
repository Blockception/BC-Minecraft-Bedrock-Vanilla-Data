import { expect } from "chai";
import { Blocks } from "../../../src/Lib/Vanilla/BehaviorPack/blocks";

suite("content", () => {
  test("blocks type check", () => {
    for (var I = 0; I < Blocks.length; I++) {
      const B = Blocks[I];

      for (var J = 0; J < B.states.length; J++) {
        const state = B.states[J];
        let t = typeof state.values[0];

        switch (state.type) {
          case "byte":
          case "int":
            expect(t).to.equal("number", `${B.id}`);
            break;

          case "string":
            expect(t).to.equal("string", `${B.id}`);
            break;

          default:
            expect.fail();
        }
      }
    }
  });
});
