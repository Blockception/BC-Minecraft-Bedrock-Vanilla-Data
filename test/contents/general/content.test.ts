import { expect } from "chai";
import { MinecraftData } from "../../../src/main";

describe("Lib", () => {
  it("entity 1", () => {
    const entity = MinecraftData.BehaviorPack.getEntity("minecraft:creeper");

    if (!entity) {
      expect.fail("Expected an entity object");
    }
  });

  it("entity edu", () => {
    const entity = MinecraftData.BehaviorPack.getEntity("minecraft:agent", true);

    if (!entity) {
      expect.fail("Expected an entity object");
    }
  });

  it("entity edu fail", () => {
    const entity = MinecraftData.BehaviorPack.getEntity("minecraft:agent", false);

    if (entity) {
      expect.fail("Expected not an entity object");
    }
  });
});
