import { BlockState } from "../Types/BehaviorPack/Block";

/**The summarized data set for blocks in minecraft*/
export interface GeneralBlock {
  /**summarized data set of blockstates*/
  blockstates: BlockState[];
}

/**Summarized data set for entities in minecraft*/
export interface GeneralEntity {
  /**summarized data set of entity events*/
  events: string[];

  /**summarized data set of entity families*/
  families: string[];
}
