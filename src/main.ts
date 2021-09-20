import { MinecraftDataSet } from "./Lib/Types/MinecraftDataSet";
import { Vanilla, Edu, Types, General as G } from "./Lib/include";
import { Identifiable } from "./Lib/Types/Identifiable";
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

  /**The generalised data set for minecraft*/
  export namespace General {
    /**The summarized data set for blocks*/
    export const Blocks = G.BlockData;

    /**The summarized data set of effects*/
    export const Effects: string[] = G.Effects;

    /**The summarized data set for entities*/
    export const Entities = G.EntityData;
  }

  /**Access to behaviorpack vanilla data*/
  export namespace BehaviorPack {
    /**Gets the block by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getBlock(id: string, edu: boolean = false): Types.BehaviorPack.Block | undefined {
      return get(id, edu, MinecraftData.vanilla.BehaviorPack.blocks, MinecraftData.edu.BehaviorPack.blocks);
    }

    /**Gets the entity by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getEntity(id: string, edu: boolean = false): Types.BehaviorPack.Entity | undefined {
      return get(id, edu, MinecraftData.vanilla.BehaviorPack.entities, MinecraftData.edu.BehaviorPack.entities);
    }

    /**Gets the item by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getItem(id: string, edu: boolean = false): Types.BehaviorPack.Item | undefined {
      return get(id, edu, MinecraftData.vanilla.BehaviorPack.items, MinecraftData.edu.BehaviorPack.items);
    }

    /**Gets the loot table by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getLootTable(id: string, edu: boolean = false): Types.BehaviorPack.LootTable | undefined {
      return getStr(id, edu, MinecraftData.vanilla.BehaviorPack.loot_tables, MinecraftData.edu.BehaviorPack.loot_tables);
    }

    /**Gets the trading by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getTrading(id: string, edu: boolean = false): Types.BehaviorPack.Trading | undefined {
      return getStr(id, edu, MinecraftData.vanilla.BehaviorPack.trading, MinecraftData.edu.BehaviorPack.trading);
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasBlock(id: string, edu: boolean = false): boolean {
      return getBlock(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasEntity(id: string, edu: boolean = false): boolean {
      return getEntity(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasItem(id: string, edu: boolean = false): boolean {
      return getItem(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasLootTable(id: string, edu: boolean = false): boolean {
      return getLootTable(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasTrading(id: string, edu: boolean = false): boolean {
      return getTrading(id, edu) !== undefined;
    }
  }

  /**Access to resourcepack vanilla data*/
  export namespace ResourcePack {
    /**Gets the animation controller by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getAnimationController(id: string, edu: boolean = false): Types.ResourcePack.AnimationController | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.animation_controllers, MinecraftData.edu.ResourcePack.animation_controllers);
    }

    /**Gets the animation by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getAnimation(id: string, edu: boolean = false): Types.ResourcePack.Animation | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.animations, MinecraftData.edu.ResourcePack.animations);
    }

    /**Gets the animation controller by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getEntity(id: string, edu: boolean = false): Types.ResourcePack.Entity | undefined {
      return get(id, edu, MinecraftData.vanilla.ResourcePack.entities, MinecraftData.edu.ResourcePack.entities);
    }

    /**Gets the fog by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getFog(id: string, edu: boolean = false): Types.ResourcePack.Fog | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.fogs, MinecraftData.edu.ResourcePack.fogs);
    }

    /**Gets the material by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getMaterial(id: string, edu: boolean = false): Types.ResourcePack.Material | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.materials, MinecraftData.edu.ResourcePack.materials);
    }

    /**Gets the model by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getModel(id: string, edu: boolean = false): Types.ResourcePack.Model | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.models, MinecraftData.edu.ResourcePack.models);
    }

    /**Gets the particle by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getParticle(id: string, edu: boolean = false): Types.ResourcePack.Particle | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.particles, MinecraftData.edu.ResourcePack.particles);
    }

    /**Gets the render controller by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getRenderController(id: string, edu: boolean = false): Types.ResourcePack.RenderController | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.render_controllers, MinecraftData.edu.ResourcePack.render_controllers);
    }

    /**Gets the sound by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getSound(id: string, edu: boolean = false): Types.ResourcePack.Sound | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.sounds, MinecraftData.edu.ResourcePack.sounds);
    }

    /**Gets the texture by the given identification
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function getTexture(id: string, edu: boolean = false): Types.ResourcePack.Texture | undefined {
      return getStr(id, edu, MinecraftData.vanilla.ResourcePack.textures, MinecraftData.edu.ResourcePack.textures);
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasAnimationController(id: string, edu: boolean = false): boolean {
      return getAnimationController(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasAnimation(id: string, edu: boolean = false): boolean {
      return getAnimation(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasEntity(id: string, edu: boolean = false): boolean {
      return getEntity(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasFog(id: string, edu: boolean = false): boolean {
      return getFog(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasMaterial(id: string, edu: boolean = false): boolean {
      return getMaterial(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasModel(id: string, edu: boolean = false): boolean {
      return getModel(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasParticle(id: string, edu: boolean = false): boolean {
      return getParticle(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasRenderController(id: string, edu: boolean = false): boolean {
      return getRenderController(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasSound(id: string, edu: boolean = false): boolean {
      return getSound(id, edu) !== undefined;
    }

    /**Returns true or false if the given identification exists
     * @param id The identification of the object to find
     * @param edu Wheter or not to include education data
     * @returns A object with the specified id or undefined if nothing was found*/
    export function hasTexture(id: string, edu: boolean = false): boolean {
      return getTexture(id, edu) !== undefined;
    }
  }
}

function get<T extends Identifiable>(id: string, includeEdu: boolean, vanilla: T[], edu: T[]): T | undefined {
  let out = Identifiable.get(vanilla, id);

  if (out) return out;
  if (includeEdu) out = Identifiable.get(edu, id);

  return out;
}

function getStr(id: string, includeEdu: boolean, vanilla: string[], edu: string[]): string | undefined {
  if (vanilla.includes(id)) return id;
  if (includeEdu && edu.includes(id)) return id;

  return undefined;
}
