import { Entity } from "./Entity";

/**The interface that stores vanilla resource pack data*/
export interface ResourcePack {
  /**The collection of animation controllers*/
  readonly animation_controllers: string[];

  /**The collection of animations*/
  readonly animations: string[];

  /**The collection of entities*/
  readonly entities: Entity[];

  /**The collection of fogs*/
  readonly fogs: string[];

  /**The collection of materials*/
  readonly materials: string[];

  /**The collection of models*/
  readonly models: string[];

  /**The collection of particles*/
  readonly particles: string[];

  /**The collection of render controllers*/
  readonly render_controllers: string[];

  /**The collection of sounds*/
  readonly sounds: string[];

  /**The collection of textures*/
  readonly textures: string[];
}
