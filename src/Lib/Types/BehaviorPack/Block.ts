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
  export function is(value: any): value is BlockState {
    if (value) {
      if (typeof value.name === "string" && Array.isArray(value.values)) return true;
    }

    return false;
  }
}

/**
 *
 */
export interface Block extends Identifiable {
  /**
   *
   */
  states: BlockState[];
}

/**
 *
 */
export namespace Block {
  /**
   *
   * @param value
   * @returns
   */
  export function is(value: any): value is Block {
    if (value) {
      if (typeof value.id === "string" && Array.isArray(value.states)) return true;
    }

    return false;
  }
}
