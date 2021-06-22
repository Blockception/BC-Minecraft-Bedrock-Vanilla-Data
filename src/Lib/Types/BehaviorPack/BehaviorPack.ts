import { AnimationController } from "./AnimationController";
import { Animation } from "./Animation";
import { Block } from "./Block";
import { Entity } from "./Entity";
import { Item } from "./Item";
import { LootTable } from "./LootTable";
import { Trading } from "./Trading";

/**The interface that stores vanilla behavior pack data*/
export interface BehaviorPack {
  /**The collection of animation controllers*/
  readonly animation_controllers: AnimationController[];

  /**The collection of animations*/
  readonly animations: Animation[];

  /**The collection of blocks*/
  readonly blocks: Block[];

  /**The collection of entities*/
  readonly entities: Entity[];

  /**The collection of items*/
  readonly items: Item[];

  /**The collection of loot tables*/
  readonly loot_tables: LootTable[];

  /**The collection of trading*/
  readonly trading: Trading[];
}
