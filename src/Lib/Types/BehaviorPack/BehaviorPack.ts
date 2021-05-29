import { Block } from "./Block";
import { Entity } from "./Entity";
import { Item } from "./Item";

/**The interface that stores vanilla behavior pack data*/
export interface BehaviorPack {
  /**The collection of blocks*/
  readonly blocks: Block[];

  /**The collection of entities*/
  readonly entities: Entity[];

  /**The collection of items*/
  readonly items: Item[];

  /**The collection of loot tables*/
  readonly loot_tables: string[];

  /**The collection of trading*/
  readonly trading: string[];
}
