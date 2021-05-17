import { assert } from "console";
import { Block, BlockState } from "../../../src/Lib/Types/BehaviorPack/Block";
import { Entity } from "../../../src/Lib/Types/BehaviorPack/Entity";
import { Item } from "../../../src/Lib/Types/BehaviorPack/Item";
import { MinecraftData } from "../../../src/main";
import { Check_Identifiable, Test_Identifiable } from "../../Identifiable.test";

suite(" content", () => {
  test("blocks", () => {
    test_block(MinecraftData.Edu.BehaviorPack.blocks);
    test_block(MinecraftData.Vanilla.BehaviorPack.blocks);
  });

  test("entities", () => {
    test_entity(MinecraftData.Edu.BehaviorPack.entities);
    test_entity(MinecraftData.Vanilla.BehaviorPack.entities);
  });

  test("items", () => {
    test_item(MinecraftData.Edu.BehaviorPack.items);
    test_item(MinecraftData.Vanilla.BehaviorPack.items);
  });

  test("loot_tables", () => {
    Check_Identifiable(MinecraftData.Edu.BehaviorPack.loot_tables);
    Check_Identifiable(MinecraftData.Vanilla.BehaviorPack.loot_tables);
  });

  test("trading", () => {
    Check_Identifiable(MinecraftData.Edu.BehaviorPack.trading);
    Check_Identifiable(MinecraftData.Vanilla.BehaviorPack.trading);
  });
});

function test_block(Blocks: Block[]) {
  Check_Identifiable(Blocks);

  Blocks.forEach((block) => {
    Test_Identifiable(block);

    assert(Block.is(block), `Block is not a proper block: ${JSON.stringify(block)}`);

    block.states.forEach((state) => {
      assert(BlockState.is(state), "Block state is not a propert block state");
    });
  });
}

function test_entity(Entities: Entity[]) {
  Check_Identifiable(Entities);

  Entities.forEach((entity) => {
    Test_Identifiable(entity);

    assert(Entity.is(entity), `Entity is not a proper entity: ${JSON.stringify(entity)}`);

    entity.events.forEach((event) => {
      assert(event.length > 0, `Event is not of proper length ${entity.id}`);
    });
  });
}

function test_item(Items: Item[]) {
  Check_Identifiable(Items);

  Items.forEach((item) => {
    Test_Identifiable(item);

    assert(Item.is(item), `Item is not a proper item: ${JSON.stringify(item)}`);
    assert(item.max_damage >= 0, `Item max damage must be 0 or higher: ${item.max_damage}`);
  });
}
