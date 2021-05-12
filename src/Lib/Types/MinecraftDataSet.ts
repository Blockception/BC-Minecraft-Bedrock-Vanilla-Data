import { Identifiable } from "./Identifiable";

export interface MinecraftDataSet {
  BehaviorPack: BehaviorPack;
  ResourcePack: ResourcePack;
}

export interface BehaviorPack {
  animation_controllers: Identifiable[];
  animations: Identifiable[];
  blocks: Identifiable[];
  entities: Identifiable[];
  items: Identifiable[];
}

export interface ResourcePack {
  animation_controllers: Identifiable[];
  animations: Identifiable[];
  blocks: Identifiable[];
  entities: Identifiable[];
  items: Identifiable[];
  partices: Identifiable[];
  sounds: Identifiable[];
}
