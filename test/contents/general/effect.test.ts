import { expect } from "chai";
import { MinecraftData } from "../../../src/main";

describe("General", () => {
  it("effect", () => {
    expect(MinecraftData.General.Effects).to.not.undefined;

    expect(MinecraftData.General.Effects.length).to.be.greaterThan(0);
  });
});
