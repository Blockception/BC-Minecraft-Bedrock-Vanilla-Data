import { Identifiable } from "../Identifiable";

/**
 *
 */
export interface BlockState {
  /**
   *
   */
  name: string;

  /**
   *
   */
  type: "byte" | "int" | "string";

  /**
   *
   */
  values: (string | number)[];
}

/**
 *
 */
export namespace BlockState {
  /**
   *
   * @param value
   * @returns
   */
  export function is(value: any): value is BlockState {
    if (value) {
      if (typeof value.name === "string" && Array.isArray(value.values)) return true;
    }

    return false;
  }
}

/**The block interface*/
export interface Block extends Identifiable {
  /**The state of that this block has*/
  states: BlockState[];
}

/**The namespace that provides functions for blocks*/
export namespace Block {
  /**Checks if the given object implements the block interface
   * @param value The object to check
   * @returns true or false if the object implements Block
   */
  export function is(value: any): value is Block {
    if (value) {
      if (typeof value.id === "string" && Array.isArray(value.states)) return true;
    }

    return false;
  }
}
