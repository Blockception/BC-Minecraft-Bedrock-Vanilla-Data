import { Identifiable } from "../Identifiable";
import { Block } from "./Block";
import { Entity } from "./Entity";

export interface BehaviorPack {
  blocks: Block[];
  entities: Entity[];
  items: Identifiable[];
  loot_tables: string[];
  trading: string[];
}
