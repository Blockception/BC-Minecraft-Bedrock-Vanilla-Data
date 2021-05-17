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
import * as vanilla_rp_entities from "./Lib/Vanilla/ResourcePack/entities.json";
import * as vanilla_rp_fogs from "./Lib/Vanilla/ResourcePack/fogs.json";
import * as vanilla_rp_particles from "./Lib/Vanilla/ResourcePack/particles.json";
import * as vanilla_rp_materials from "./Lib/Vanilla/ResourcePack/materials.json";
import * as vanilla_rp_models from "./Lib/Vanilla/ResourcePack/models.json";
import * as vanilla_rp_rc from "./Lib/Vanilla/ResourcePack/render_controllers.json";
import * as vanilla_rp_sounds from "./Lib/Vanilla/ResourcePack/sounds.json";
import * as vanilla_rp_textures from "./Lib/Vanilla/ResourcePack/textures.json";

/**Import edu */
import * as edu_bp_blocks from "./Lib/Edu/BehaviorPack/blocks.json";
import * as edu_bp_entities from "./Lib/Edu/BehaviorPack/entities.json";
import * as edu_bp_items from "./Lib/Edu/BehaviorPack/items.json";
import * as edu_bp_loottables from "./Lib/Edu/BehaviorPack/loot_tables.json";
import * as edu_bp_trading from "./Lib/Edu/BehaviorPack/trading.json";

import * as edu_rp_ac from "./Lib/Edu/ResourcePack/animation_controllers.json";
import * as edu_rp_anim from "./Lib/Edu/ResourcePack/animations.json";
import * as edu_rp_entities from "./Lib/Edu/ResourcePack/entities.json";
import * as edu_rp_fogs from "./Lib/Edu/ResourcePack/fogs.json";
import * as edu_rp_particles from "./Lib/Edu/ResourcePack/particles.json";
import * as edu_rp_materials from "./Lib/Edu/ResourcePack/materials.json";
import * as edu_rp_models from "./Lib/Edu/ResourcePack/models.json";
import * as edu_rp_rc from "./Lib/Edu/ResourcePack/render_controllers.json";
import * as edu_rp_sounds from "./Lib/Edu/ResourcePack/sounds.json";
import * as edu_rp_textures from "./Lib/Edu/ResourcePack/textures.json";

/**
 *
 */
export namespace MinecraftData {
  /**The vanilla data set*/
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
      entities: vanilla_rp_entities,
      fogs: vanilla_rp_fogs,
      materials: vanilla_rp_materials,
      models: vanilla_rp_models,
      particles: vanilla_rp_particles,
      render_controllers: vanilla_rp_rc,
      sounds: vanilla_rp_sounds,
      textures: vanilla_rp_textures,
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
      fogs: edu_rp_fogs,
      materials: edu_rp_materials,
      models: edu_rp_models,
      particles: edu_rp_particles,
      render_controllers: edu_rp_rc,
      sounds: edu_rp_sounds,
      textures: edu_rp_textures,
    },
  };
}
