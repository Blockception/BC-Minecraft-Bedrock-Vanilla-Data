import { assert } from "console";
import { Entity } from "../../../src/Lib/Types/ResourcePack/Entity";
import { MinecraftData } from "../../../src/main";
import { Check_Identifiable, Test_Identifiable } from "../../Identifiable.test";

suite(" content", () => {
  test("animation controllers", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.animation_controllers);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.animation_controllers);
  });

  test("animations", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.animations);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.animations);
  });

  test("entities", () => {
    test_entity(MinecraftData.Edu.ResourcePack.entities);
    test_entity(MinecraftData.Vanilla.ResourcePack.entities);
  });

  test("fogs", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.fogs);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.fogs);
  });

  test("materials", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.materials);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.materials);
  });

  test("models", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.models);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.models);
  });

  test("particles", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.particles);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.particles);
  });

  test("render_controllers", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.render_controllers);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.render_controllers);
  });

  test("sounds", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.sounds);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.sounds);
  });

  test("textures", () => {
    Check_Identifiable(MinecraftData.Edu.ResourcePack.textures);
    Check_Identifiable(MinecraftData.Vanilla.ResourcePack.textures);
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
