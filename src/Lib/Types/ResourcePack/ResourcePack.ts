import { Entity } from "./Entity";

/**
 *
 */
export interface ResourcePack {
  /**
   *
   */
  readonly animation_controllers: string[];

  /**
   *
   */
  readonly animations: string[];

  /**
   *
   */
  readonly entities: Entity[];

  /**
   *
   */
  readonly fogs: string[];

  /**
   *
   */
  readonly materials: string[];

  /**
   *
   */
  readonly models: string[];

  /**
   *
   */
  readonly particles: string[];

  /**
   *
   */
  readonly render_controllers: string[];

  /**
   *
   */
  readonly sounds: string[];

  /**
   *
   */
  readonly textures: string[];
}
