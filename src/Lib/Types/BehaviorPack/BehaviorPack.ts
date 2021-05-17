import { Block } from "./Block";
import { Entity } from "./Entity";
import { Item } from "./Item";

/**
 *
 */
export interface BehaviorPack {
  /**
   *
   */
  readonly blocks: Block[];

  /**
   *
   */
  readonly entities: Entity[];

  /**
   *
   */
  readonly items: Item[];

  /**
   *
   */
  readonly loot_tables: string[];

  /**
   *
   */
  readonly trading: string[];
}
