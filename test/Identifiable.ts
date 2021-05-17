import { fail } from "assert";
import { assert } from "console";
import { Identifiable } from "../src/Lib/Types/Identifiable";

export function Test_Identifiable(data: Identifiable) {
  if (Identifiable.is(data)) {
    assert(data.id.length > 0, `Not a length on ID: ${JSON.stringify(data)}`);
  } else {
    fail(`Not a propery Identifiable: ${JSON.stringify(data)}`);
  }
}
