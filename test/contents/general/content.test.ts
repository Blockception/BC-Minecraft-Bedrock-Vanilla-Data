import { expect } from "chai";
import { MinecraftData } from "../../../src/main";

suite("Lib", () => {
  test("entity 1", () => {
    const entity = MinecraftData.BehaviorPack.getEntity("minecraft:creeper");

    if (!entity) {
      expect.fail("Expected an entity object");
    }
  });

  test("entity edu", () => {
    const entity = MinecraftData.BehaviorPack.getEntity("minecraft:agent", true);

    if (!entity) {
      expect.fail("Expected an entity object");
    }
  });

  test("entity edu fail", () => {
    const entity = MinecraftData.BehaviorPack.getEntity("minecraft:agent", false);

    if (entity) {
      expect.fail("Expected not an entity object");
    }
  });
});
