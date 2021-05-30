import { assert } from "console";
import { Entity } from "../../../src/Lib/Types/ResourcePack/Entity";
import { MinecraftData } from "../../../src/main";
import { Check_Identifiable, Test_Identifiable } from "../../Identifiable.test";

suite(" content", () => {
  test("animation controllers", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.animation_controllers);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.animation_controllers);
  });

  test("animations", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.animations);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.animations);
  });

  test("entities", () => {
    test_entity(MinecraftData.edu.ResourcePack.entities);
    test_entity(MinecraftData.vanilla.ResourcePack.entities);
  });

  test("fogs", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.fogs);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.fogs);
  });

  test("materials", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.materials);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.materials);
  });

  test("models", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.models);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.models);
  });

  test("particles", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.particles);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.particles);
  });

  test("render_controllers", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.render_controllers);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.render_controllers);
  });

  test("sounds", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.sounds);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.sounds);
  });

  test("textures", () => {
    Check_Identifiable(MinecraftData.edu.ResourcePack.textures);
    Check_Identifiable(MinecraftData.vanilla.ResourcePack.textures);
  });
});

function test_entity(Entities: Entity[]) {
  Check_Identifiable(Entities);

  Entities.forEach((entity) => {
    Test_Identifiable(entity);

    assert(Entity.is(entity), `Entity is not a proper entity: ${JSON.stringify(entity)}`);

    entity.animations.forEach((animation) => {
      assert(animation.length > 0, `Animation is not of proper length ${entity.id}`);
    });
  });
}
