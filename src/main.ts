/*BSD 3-Clause License

Copyright (c) 2021, Blockception Ltd
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/
import { MinecraftDataSet } from "./Lib/Types/MinecraftDataSet";

/**Import vanilla */
import * as vanilla_bp_blocks from "./Lib/Vanilla/BehaviorPack/blocks.json";
import * as vanilla_bp_entities from "./Lib/Vanilla/BehaviorPack/entities.json";
import * as vanilla_bp_items from "./Lib/Vanilla/BehaviorPack/items.json";
import * as vanilla_bp_loottables from "./Lib/Vanilla/BehaviorPack/loot_tables.json";
import * as vanilla_bp_trading from "./Lib/Vanilla/BehaviorPack/trading.json";

import * as vanilla_rp_ac from "./Lib/Vanilla/ResourcePack/animation_controllers.json";
import * as vanilla_rp_anim from "./Lib/Vanilla/ResourcePack/animations.json";
import * as vanilla_rp_blocks from "./Lib/Vanilla/ResourcePack/blocks.json";
import * as vanilla_rp_entities from "./Lib/Vanilla/ResourcePack/entities.json";
import * as vanilla_rp_items from "./Lib/Vanilla/ResourcePack/items.json";
import * as vanilla_rp_particles from "./Lib/Vanilla/ResourcePack/particles.json";
import * as vanilla_rp_sounds from "./Lib/Vanilla/ResourcePack/sounds.json";

/**Import edu */
import * as edu_bp_blocks from "./Lib/Edu/BehaviorPack/blocks.json";
import * as edu_bp_entities from "./Lib/Edu/BehaviorPack/entities.json";
import * as edu_bp_items from "./Lib/Edu/BehaviorPack/items.json";
import * as edu_bp_loottables from "./Lib/Edu/BehaviorPack/loot_tables.json";
import * as edu_bp_trading from "./Lib/Edu/BehaviorPack/trading.json";

import * as edu_rp_ac from "./Lib/Edu/ResourcePack/animation_controllers.json";
import * as edu_rp_anim from "./Lib/Edu/ResourcePack/animations.json";
import * as edu_rp_blocks from "./Lib/Edu/ResourcePack/blocks.json";
import * as edu_rp_entities from "./Lib/Edu/ResourcePack/entities.json";
import * as edu_rp_items from "./Lib/Edu/ResourcePack/items.json";
import * as edu_rp_particles from "./Lib/Edu/ResourcePack/particles.json";
import * as edu_rp_sounds from "./Lib/Edu/ResourcePack/sounds.json";

export namespace MinecraftData {
  export const Vanilla: MinecraftDataSet = {
    BehaviorPack: {
      entities: vanilla_bp_entities,
      items: vanilla_bp_items,
      blocks: vanilla_bp_blocks,
      loot_tables: vanilla_bp_loottables,
      trading: vanilla_bp_trading,
    },
    ResourcePack: {
      animation_controllers: vanilla_rp_ac,
      animations: vanilla_rp_anim,
      blocks: vanilla_rp_blocks,
      entities: vanilla_rp_entities,
      items: vanilla_rp_items,
      partices: vanilla_rp_particles,
      sounds: vanilla_rp_sounds,
    },
  };

  /**The education data set*/
  export const Edu: MinecraftDataSet = {
    BehaviorPack: {
      entities: edu_bp_entities,
      items: edu_bp_items,
      blocks: edu_bp_blocks,
      loot_tables: edu_bp_loottables,
      trading: edu_bp_trading,
    },
    ResourcePack: {
      animation_controllers: edu_rp_ac,
      animations: edu_rp_anim,
      entities: edu_rp_entities,
      items: edu_rp_items,
      blocks: edu_rp_blocks,
      partices: edu_rp_particles,
      sounds: edu_rp_sounds,
    },
  };
}
