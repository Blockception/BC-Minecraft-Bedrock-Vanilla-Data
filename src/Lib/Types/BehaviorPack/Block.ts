import { Identifiable } from "../Identifiable";

export type BlockState = BlockStateBool | BlockStateInt | BlockStateString;

export interface BlockStateBool {
  name: string;
  type: "bool";
  values: boolean[];
}

export interface BlockStateInt {
  name: string;
  type: "int";
  values: number[];
}

export interface BlockStateString {
  name: string;
  type: "string";
  values: string[];
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
  export function is(value: any | BlockState): value is BlockState {
    if (value) {
      if (typeof value.name === "string" && typeof value.type === "string" && Array.isArray(value.values)) return true;
    }

    return false;
  }

  export function isInt(value: BlockState): value is BlockStateInt {
    if (value) {
      if (value.type === "int") return true;
    }

    return false;
  }

  export function isBool(value: BlockState): value is BlockStateBool {
    if (value) {
      if (value.type === "bool") return true;
    }

    return false;
  }

  export function isString(value: BlockState): value is BlockStateString {
    if (value) {
      if (value.type === "string") return true;
    }

    return false;
  }
}

/**The block interface*/
export interface Block extends Identifiable {
  /**The state of that this block has*/
  properties: BlockState[];
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
