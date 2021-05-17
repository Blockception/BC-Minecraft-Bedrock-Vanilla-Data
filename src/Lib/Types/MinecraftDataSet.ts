import { BehaviorPack } from "./BehaviorPack/BehaviorPack";
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
