/**
 *
 */
export interface Identifiable {
  /**
   *
   */
  id: string;
}

/**
 *
 */
export namespace Identifiable {
  /**
   *
   * @param value
   * @returns
   */
  export function is(value: any): value is Identifiable {
    if (value && typeof value.id === "string") return true;

    return false;
  }

  /**
   *
   * @param items
   * @param find
   */
  export function find(items: Identifiable[], findID: string | Identifiable): number {
    let id = typeof findID === "string" ? findID : findID.id;

    for (var I = 0; I < items.length; I++) {
      if (items[I].id === id) return I;
    }

    return -1;
  }

  /**
   *
   * @param items
   * @param find
   */
  export function has(items: Identifiable[], findID: string | Identifiable): boolean {
    return find(items, findID) >= 0;
  }

  /**
   *
   * @param items
   * @param find
   */
  export function get<T extends Identifiable>(items: T[], findID: string | Identifiable): T | undefined {
    let id = typeof findID === "string" ? findID : findID.id;

    for (var I = 0; I < items.length; I++) {
      if (items[I].id === id) return items[I];
    }

    return undefined;
  }
}
