import { BehaviorPack } from "./BehaviorPack/BehaviorPack";
import { Identifiable } from "./Identifiable";
import { ResourcePack } from "./ResourcePack/ResourcePack";

/**
 *
 */
export interface MinecraftDataSet {
  /**
   *
   */
  readonly BehaviorPack: BehaviorPack;

  /**
   *
   */
  readonly ResourcePack: ResourcePack;
}

/**
 *
 */
export namespace MinecraftDataSet {
  /**
   *
   * @param id
   */
  export function hasEntity(data: MinecraftDataSet, id: string): boolean {
    if (Identifiable.has(data.BehaviorPack.entities, id)) return true;
    if (Identifiable.has(data.ResourcePack.entities, id)) return true;

    return false;
  }
}
