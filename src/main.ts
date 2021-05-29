import { MinecraftDataSet } from "./Lib/Types/MinecraftDataSet";
export { BehaviorPack, Identifiable, MinecraftDataSet, ResourcePack } from "./Lib/Types/include";

/**The minecraft vanilla dataof RP and BP data*/
export namespace MinecraftData {
  /**The vanilla data set*/
  export const Vanilla: MinecraftDataSet = {
    BehaviorPack: {
      blocks: require("./Lib/Vanilla/BehaviorPack/blocks.json"),
      entities: require("./Lib/Vanilla/BehaviorPack/entities.json"),
      items: require("./Lib/Vanilla/BehaviorPack/items.json"),
      loot_tables: require("./Lib/Vanilla/BehaviorPack/loot_tables.json"),
      trading: require("./Lib/Vanilla/BehaviorPack/trading.json"),
    },
    ResourcePack: {
      animation_controllers: require("./Lib/Vanilla/ResourcePack/animation_controllers.json"),
      animations: require("./Lib/Vanilla/ResourcePack/animations.json"),
      entities: require("./Lib/Vanilla/ResourcePack/entities.json"),
      fogs: require("./Lib/Vanilla/ResourcePack/fogs.json"),
      materials: require("./Lib/Vanilla/ResourcePack/particles.json"),
      models: require("./Lib/Vanilla/ResourcePack/materials.json"),
      particles: require("./Lib/Vanilla/ResourcePack/models.json"),
      render_controllers: require("./Lib/Vanilla/ResourcePack/render_controllers.json"),
      sounds: require("./Lib/Vanilla/ResourcePack/sounds.json"),
      textures: require("./Lib/Vanilla/ResourcePack/textures.json"),
    },
  };

  /**The education data set*/
  export const Edu: MinecraftDataSet = {
    BehaviorPack: {
      blocks: require("./Lib/Edu/BehaviorPack/blocks.json"),
      entities: require("./Lib/Edu/BehaviorPack/entities.json"),
      items: require("./Lib/Edu/BehaviorPack/items.json"),
      loot_tables: require("./Lib/Edu/BehaviorPack/loot_tables.json"),
      trading: require("./Lib/Edu/BehaviorPack/trading.json"),
    },
    ResourcePack: {
      animation_controllers: require("./Lib/Edu/ResourcePack/animation_controllers.json"),
      animations: require("./Lib/Edu/ResourcePack/animations.json"),
      entities: require("./Lib/Edu/ResourcePack/entities.json"),
      fogs: require("./Lib/Edu/ResourcePack/fogs.json"),
      materials: require("./Lib/Edu/ResourcePack/particles.json"),
      models: require("./Lib/Edu/ResourcePack/materials.json"),
      particles: require("./Lib/Edu/ResourcePack/models.json"),
      render_controllers: require("./Lib/Edu/ResourcePack/render_controllers.json"),
      sounds: require("./Lib/Edu/ResourcePack/sounds.json"),
      textures: require("./Lib/Edu/ResourcePack/textures.json"),
    },
  };
}
