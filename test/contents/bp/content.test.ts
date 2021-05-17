import { assert } from "console";
import { Block, BlockState } from "../../../src/Lib/Types/BehaviorPack/Block";
import { Entity } from "../../../src/Lib/Types/BehaviorPack/Entity";
import { MinecraftData } from "../../../src/main";
import { Test_Identifiable } from "../../Identifiable";

describe(" content", () => {
  it("blocks", () => {
    test_block(MinecraftData.Edu.BehaviorPack.blocks);
    test_block(MinecraftData.Vanilla.BehaviorPack.blocks);
  });

  it("entities", () => {
    test_entity(MinecraftData.Edu.BehaviorPack.entities);
    test_entity(MinecraftData.Vanilla.BehaviorPack.entities);
  });
});

function test_block(Blocks: Block[]) {
  Blocks.forEach((block) => {
    Test_Identifiable(block);

    assert(Block.is(block), "Block is not a proper block");

    block.states.forEach((state) => {
      assert(BlockState.is(state), "Block state is not a propert block state");
    });
  });
}

function test_entity(Entities: Entity[]) {
  Entities.forEach((entity) => {
    Test_Identifiable(entity);

    assert(Entity.is(entity), "Entity is not a proper entity");

    entity.events.forEach((event) => {
      assert(event.length > 0, `Event is not of proper length ${entity.id}`);
    });
  });
}
