import { MinecraftDataSet } from "./Lib/Types/MinecraftDataSet";
import { Vanilla, Edu, Types } from "./Lib/include";
export { MinecraftDataSet, Vanilla, Edu, Types };

/**The minecraft vanilla dataof RP and BP data*/
export namespace MinecraftData {
  /**The vanilla data set*/
  export const vanilla: MinecraftDataSet = {
    BehaviorPack: {
      blocks: Vanilla.BehaviorPack.Blocks,
      entities: Vanilla.BehaviorPack.Entities,
      items: Vanilla.BehaviorPack.Items,
      loot_tables: Vanilla.BehaviorPack.LootTables,
      trading: Vanilla.BehaviorPack.Trading,
    },
    ResourcePack: {
      animation_controllers: Vanilla.ResourcePack.AnimationControllers,
      animations: Vanilla.ResourcePack.Animations,
      entities: Vanilla.ResourcePack.Entities,
      fogs: Vanilla.ResourcePack.Fogs,
      materials: Vanilla.ResourcePack.Materials,
      models: Vanilla.ResourcePack.Models,
      particles: Vanilla.ResourcePack.Particles,
      render_controllers: Vanilla.ResourcePack.RenderControllers,
      sounds: Vanilla.ResourcePack.Sounds,
      textures: Vanilla.ResourcePack.Textures,
    },
  };

  /**The education data set*/
  export const edu: MinecraftDataSet = {
    BehaviorPack: {
      blocks: Edu.BehaviorPack.Blocks,
      entities: Edu.BehaviorPack.Entities,
      items: Edu.BehaviorPack.Items,
      loot_tables: Edu.BehaviorPack.LootTables,
      trading: Edu.BehaviorPack.Trading,
    },
    ResourcePack: {
      animation_controllers: Edu.ResourcePack.AnimationControllers,
      animations: Edu.ResourcePack.Animations,
      entities: Edu.ResourcePack.Entities,
      fogs: Edu.ResourcePack.Fogs,
      materials: Edu.ResourcePack.Materials,
      models: Edu.ResourcePack.Models,
      particles: Edu.ResourcePack.Particles,
      render_controllers: Edu.ResourcePack.RenderControllers,
      sounds: Edu.ResourcePack.Sounds,
      textures: Edu.ResourcePack.Textures,
    },
  };
}
