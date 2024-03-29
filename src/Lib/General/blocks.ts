import { GeneralBlock } from "./format";

export const BlockData: GeneralBlock = {
  block_states: [
    {
      name: "active",
      type: "bool",
      values: [false, true],
    },
    {
      name: "age",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      name: "age_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "allow_underwater_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "attached_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "attachment",
      type: "string",
      values: ["standing", "hanging", "side", "multiple"],
    },
    {
      name: "bamboo_leaf_size",
      type: "string",
      values: ["no_leaves", "small_leaves", "large_leaves"],
    },
    {
      name: "bamboo_stalk_thickness",
      type: "string",
      values: ["thin", "thick"],
    },
    {
      name: "big_dripleaf_head",
      type: "bool",
      values: [false, true],
    },
    {
      name: "big_dripleaf_tilt",
      type: "string",
      values: ["none", "unstable", "partial_tilt", "full_tilt"],
    },
    {
      name: "bite_counter",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      name: "block_light_level",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      name: "bloom",
      type: "bool",
      values: [false, true],
    },
    {
      name: "books_stored",
      type: "int",
      values: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        58, 59, 60, 61, 62, 63,
      ],
    },
    {
      name: "brewing_stand_slot_a_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "brewing_stand_slot_b_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "brewing_stand_slot_c_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "brushed_progress",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "button_pressed_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "can_summon",
      type: "bool",
      values: [false, true],
    },
    {
      name: "candles",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "cauldron_liquid",
      type: "string",
      values: ["water", "lava", "powder_snow"],
    },
    {
      name: "chemistry_table_type",
      type: "string",
      values: ["compound_creator", "material_reducer", "element_constructor", "lab_table"],
    },
    {
      name: "chisel_type",
      type: "string",
      values: ["default", "chiseled", "lines", "smooth"],
    },
    {
      name: "cluster_count",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "color",
      type: "string",
      values: [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black",
      ],
    },
    {
      name: "color_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "composter_fill_level",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      name: "conditional_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "coral_color",
      type: "string",
      values: ["blue", "pink", "purple", "red", "yellow"],
    },
    {
      name: "coral_direction",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "coral_fan_direction",
      type: "int",
      values: [0, 1],
    },
    {
      name: "coral_hang_type_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "covered_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "cracked_state",
      type: "string",
      values: ["no_cracks", "cracked", "max_cracked"],
    },
    {
      name: "damage",
      type: "string",
      values: ["undamaged", "slightly_damaged", "very_damaged", "broken"],
    },
    {
      name: "dead_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "deprecated",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "direction",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "dirt_type",
      type: "string",
      values: ["normal", "coarse"],
    },
    {
      name: "disarmed_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "door_hinge_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "double_plant_type",
      type: "string",
      values: ["sunflower", "syringa", "grass", "fern", "rose", "paeonia"],
    },
    {
      name: "drag_down",
      type: "bool",
      values: [false, true],
    },
    {
      name: "dripstone_thickness",
      type: "string",
      values: ["tip", "frustum", "middle", "base", "merge"],
    },
    {
      name: "end_portal_eye_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "explode_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "extinguished",
      type: "bool",
      values: [false, true],
    },
    {
      name: "facing_direction",
      type: "int",
      values: [0, 1, 2, 3, 4, 5],
    },
    {
      name: "fill_level",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      name: "flower_type",
      type: "string",
      values: [
        "poppy",
        "orchid",
        "allium",
        "houstonia",
        "tulip_red",
        "tulip_orange",
        "tulip_white",
        "tulip_pink",
        "oxeye",
        "cornflower",
        "lily_of_the_valley",
      ],
    },
    {
      name: "ground_sign_direction",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      name: "growing_plant_age",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    },
    {
      name: "growth",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      name: "hanging",
      type: "bool",
      values: [false, true],
    },
    {
      name: "head_piece_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "height",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      name: "honey_level",
      type: "int",
      values: [0, 1, 2, 3, 4, 5],
    },
    {
      name: "huge_mushroom_bits",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      name: "in_wall_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "infiniburn_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "item_frame_map_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "item_frame_photo_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "kelp_age",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    },
    {
      name: "lever_direction",
      type: "string",
      values: [
        "down_east_west",
        "east",
        "west",
        "south",
        "north",
        "up_north_south",
        "up_east_west",
        "down_north_south",
      ],
    },
    {
      name: "liquid_depth",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      name: "lit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "minecraft:cardinal_direction",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "minecraft:facing_direction",
      type: "int",
      values: [0, 1, 2, 3, 4, 5],
    },
    {
      name: "moisturized_amount",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      name: "monster_egg_stone_type",
      type: "string",
      values: [
        "stone",
        "cobblestone",
        "stone_brick",
        "mossy_stone_brick",
        "cracked_stone_brick",
        "chiseled_stone_brick",
      ],
    },
    {
      name: "multi_face_direction_bits",
      type: "int",
      values: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        58, 59, 60, 61, 62, 63,
      ],
    },
    {
      name: "new_leaf_type",
      type: "string",
      values: ["acacia", "dark_oak"],
    },
    {
      name: "new_log_type",
      type: "string",
      values: ["acacia", "dark_oak"],
    },
    {
      name: "no_drop_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "occupied_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "old_leaf_type",
      type: "string",
      values: ["oak", "spruce", "birch", "jungle"],
    },
    {
      name: "old_log_type",
      type: "string",
      values: ["oak", "spruce", "birch", "jungle"],
    },
    {
      name: "open_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "output_lit_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "output_subtract_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "persistent_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "pillar_axis",
      type: "string",
      values: ["y", "x", "z"],
    },
    {
      name: "portal_axis",
      type: "string",
      values: ["unknown", "x", "z"],
    },
    {
      name: "powered_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "prismarine_block_type",
      type: "string",
      values: ["default", "dark", "bricks"],
    },
    {
      name: "propagule_stage",
      type: "int",
      values: [0, 1, 2, 3, 4],
    },
    {
      name: "rail_data_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "rail_direction",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      name: "redstone_signal",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      name: "repeater_delay",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "respawn_anchor_charge",
      type: "int",
      values: [0, 1, 2, 3, 4],
    },
    {
      name: "rotation",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "sand_stone_type",
      type: "string",
      values: ["default", "heiroglyphs", "cut", "smooth"],
    },
    {
      name: "sand_type",
      type: "string",
      values: ["normal", "red"],
    },
    {
      name: "sapling_type",
      type: "string",
      values: ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"],
    },
    {
      name: "sea_grass_type",
      type: "string",
      values: ["default", "double_top", "double_bot"],
    },
    {
      name: "sponge_type",
      type: "string",
      values: ["dry", "wet"],
    },
    {
      name: "stability",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      name: "stability_check",
      type: "bool",
      values: [false, true],
    },
    {
      name: "stone_brick_type",
      type: "string",
      values: ["default", "mossy", "cracked", "chiseled", "smooth"],
    },
    {
      name: "stone_slab_type",
      type: "string",
      values: ["smooth_stone", "sandstone", "wood", "cobblestone", "brick", "stone_brick", "quartz", "nether_brick"],
    },
    {
      name: "stone_slab_type_2",
      type: "string",
      values: [
        "red_sandstone",
        "purpur",
        "prismarine_rough",
        "prismarine_dark",
        "prismarine_brick",
        "mossy_cobblestone",
        "smooth_sandstone",
        "red_nether_brick",
      ],
    },
    {
      name: "stone_slab_type_3",
      type: "string",
      values: [
        "end_stone_brick",
        "smooth_red_sandstone",
        "polished_andesite",
        "andesite",
        "diorite",
        "polished_diorite",
        "granite",
        "polished_granite",
      ],
    },
    {
      name: "stone_slab_type_4",
      type: "string",
      values: ["mossy_stone_brick", "smooth_quartz", "stone", "cut_sandstone", "cut_red_sandstone"],
    },
    {
      name: "stone_type",
      type: "string",
      values: ["stone", "granite", "granite_smooth", "diorite", "diorite_smooth", "andesite", "andesite_smooth"],
    },
    {
      name: "stripped_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "structure_block_type",
      type: "string",
      values: ["data", "save", "load", "corner", "invalid", "export"],
    },
    {
      name: "structure_void_type",
      type: "string",
      values: ["void", "air"],
    },
    {
      name: "suspended_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "tall_grass_type",
      type: "string",
      values: ["default", "tall", "fern", "snow"],
    },
    {
      name: "toggle_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "top_slot_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "torch_facing_direction",
      type: "string",
      values: ["unknown", "west", "east", "north", "south", "top"],
    },
    {
      name: "triggered_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "turtle_egg_count",
      type: "string",
      values: ["one_egg", "two_egg", "three_egg", "four_egg"],
    },
    {
      name: "twisting_vines_age",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    },
    {
      name: "update_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "upper_block_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "upside_down_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "vine_direction_bits",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      name: "wall_block_type",
      type: "string",
      values: [
        "cobblestone",
        "mossy_cobblestone",
        "granite",
        "diorite",
        "andesite",
        "sandstone",
        "brick",
        "stone_brick",
        "mossy_stone_brick",
        "nether_brick",
        "end_brick",
        "prismarine",
        "red_sandstone",
        "red_nether_brick",
      ],
    },
    {
      name: "wall_connection_type_east",
      type: "string",
      values: ["none", "short", "tall"],
    },
    {
      name: "wall_connection_type_north",
      type: "string",
      values: ["none", "short", "tall"],
    },
    {
      name: "wall_connection_type_south",
      type: "string",
      values: ["none", "short", "tall"],
    },
    {
      name: "wall_connection_type_west",
      type: "string",
      values: ["none", "short", "tall"],
    },
    {
      name: "wall_post_bit",
      type: "bool",
      values: [false, true],
    },
    {
      name: "weeping_vines_age",
      type: "int",
      values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    },
    {
      name: "weirdo_direction",
      type: "int",
      values: [0, 1, 2, 3],
    },
    {
      name: "wood_type",
      type: "string",
      values: ["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"],
    },
  ],
};
