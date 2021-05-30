import { Entity } from '../../Types/BehaviorPack/Entity';


export const Entities: Entity[] = 
[
  {
    "id": "minecraft:agent",
    "events": []
  },
  {
    "id": "minecraft:area_effect_cloud",
    "events": []
  },
  {
    "id": "minecraft:armor_stand",
    "events": []
  },
  {
    "id": "minecraft:arrow",
    "events": [
      "minecraft:entity_spawned"
    ]
  },
  {
    "id": "minecraft:bat",
    "events": []
  },
  {
    "id": "minecraft:bee",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:exited_disturbed_hive",
      "hive_destroyed",
      "stop_panicking_after_fire",
      "minecraft:exited_hive_on_fire",
      "minecraft:exited_hive",
      "minecraft:hive_full",
      "attacked",
      "calmed_down",
      "collected_nectar",
      "find_hive_event",
      "find_hive_timeout",
      "find_flower_timeout",
      "seek_shelter",
      "abort_sheltering",
      "countdown_to_perish_event",
      "perish_event"
    ]
  },
  {
    "id": "minecraft:blaze",
    "events": []
  },
  {
    "id": "minecraft:boat",
    "events": []
  },
  {
    "id": "minecraft:cat",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:spawn_from_village",
      "minecraft:spawn_midnight_cat",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:on_tame",
      "minecraft:pet_slept_with_owner",
      "minecraft:cat_gifted_owner"
    ]
  },
  {
    "id": "minecraft:cave_spider",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:become_hostile",
      "minecraft:become_neutral",
      "minecraft:become_angry",
      "minecraft:on_calm"
    ]
  },
  {
    "id": "minecraft:chest_minecart",
    "events": []
  },
  {
    "id": "minecraft:chicken",
    "events": [
      "from_egg",
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up"
    ]
  },
  {
    "id": "minecraft:cod",
    "events": []
  },
  {
    "id": "minecraft:command_block_minecart",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:command_block_activate",
      "minecraft:command_block_deactivate"
    ]
  },
  {
    "id": "minecraft:cow",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:entity_transformed",
      "minecraft:ageable_grow_up"
    ]
  },
  {
    "id": "minecraft:creeper",
    "events": [
      "minecraft:start_exploding_forced",
      "minecraft:start_exploding",
      "minecraft:stop_exploding",
      "minecraft:become_charged"
    ]
  },
  {
    "id": "minecraft:dolphin",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:ageable_grow_up",
      "minecraft:become_angry",
      "minecraft:on_calm",
      "minecraft:stop_dryingout",
      "minecraft:start_dryingout",
      "minecraft:dried_out",
      "minecraft:navigation_on_land",
      "minecraft:navigation_off_land"
    ]
  },
  {
    "id": "minecraft:donkey",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:on_tame",
      "minecraft:ageable_grow_up",
      "minecraft:on_chest",
      "minecraft:donkey_saddled",
      "minecraft:donkey_unsaddled"
    ]
  },
  {
    "id": "minecraft:dragon_fireball",
    "events": []
  },
  {
    "id": "minecraft:drowned",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:as_baby",
      "minecraft:as_adult",
      "minecraft:switch_to_melee",
      "minecraft:switch_to_ranged",
      "minecraft:has_target",
      "minecraft:lost_target"
    ]
  },
  {
    "id": "minecraft:egg",
    "events": []
  },
  {
    "id": "minecraft:elder_guardian",
    "events": []
  },
  {
    "id": "minecraft:ender_crystal",
    "events": [
      "minecraft:crystal_explode"
    ]
  },
  {
    "id": "minecraft:ender_dragon",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:start_land",
      "minecraft:start_fly",
      "minecraft:start_death"
    ]
  },
  {
    "id": "minecraft:ender_pearl",
    "events": [
      "minecraft:entity_spawned"
    ]
  },
  {
    "id": "minecraft:enderman",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:become_angry",
      "minecraft:on_calm"
    ]
  },
  {
    "id": "minecraft:endermite",
    "events": []
  },
  {
    "id": "minecraft:evocation_illager",
    "events": [
      "minecraft:spawn_for_raid",
      "minecraft:start_celebrating",
      "minecraft:stop_celebrating"
    ]
  },
  {
    "id": "minecraft:eye_of_ender_signal",
    "events": []
  },
  {
    "id": "minecraft:fireball",
    "events": [
      "minecraft:explode"
    ]
  },
  {
    "id": "minecraft:fireworks_rocket",
    "events": []
  },
  {
    "id": "minecraft:fishing_hook",
    "events": [
      "minecraft:entity_spawned"
    ]
  },
  {
    "id": "minecraft:fox",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:fox_configure_thunderstorm",
      "minecraft:fox_configure_day",
      "minecraft:fox_configure_night",
      "minecraft:ambient_normal",
      "minecraft:ambient_sleep",
      "minecraft:ambient_night",
      "minecraft:fox_configure_defending",
      "minecraft:fox_configure_docile_day",
      "minecraft:fox_configure_docile_night"
    ]
  },
  {
    "id": "minecraft:ghast",
    "events": []
  },
  {
    "id": "minecraft:guardian",
    "events": [
      "minecraft:target_too_close",
      "minecraft:target_far_enough"
    ]
  },
  {
    "id": "minecraft:hoglin",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "spawn_adult",
      "spawn_baby",
      "stop_zombification_event",
      "become_zombie_event",
      "start_zombification_event",
      "spawn_adult_unhuntable",
      "minecraft:ageable_grow_up",
      "become_angry_event",
      "become_calm_event",
      "escaped_event",
      "attack_cooldown_complete_event"
    ]
  },
  {
    "id": "minecraft:hopper_minecart",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:hopper_activate",
      "minecraft:hopper_deactivate"
    ]
  },
  {
    "id": "minecraft:horse",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:on_tame",
      "minecraft:ageable_grow_up",
      "minecraft:horse_saddled",
      "minecraft:horse_unsaddled",
      "minecraft:make_white",
      "minecraft:make_creamy",
      "minecraft:make_chestnut",
      "minecraft:make_brown",
      "minecraft:make_black",
      "minecraft:make_gray",
      "minecraft:make_darkbrown"
    ]
  },
  {
    "id": "minecraft:husk",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:start_transforming",
      "minecraft:stop_transforming",
      "minecraft:convert_to_zombie"
    ]
  },
  {
    "id": "minecraft:iron_golem",
    "events": [
      "minecraft:from_player",
      "minecraft:from_village"
    ]
  },
  {
    "id": "minecraft:lightning_bolt",
    "events": []
  },
  {
    "id": "minecraft:lingering_potion",
    "events": []
  },
  {
    "id": "minecraft:llama",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:from_wandering_trader",
      "minecraft:ageable_grow_up",
      "minecraft:on_tame",
      "minecraft:join_caravan",
      "minecraft:leave_caravan",
      "minecraft:mad_at_wolf",
      "minecraft:defend_wandering_trader",
      "minecraft:become_angry",
      "minecraft:on_calm",
      "minecraft:on_chest"
    ]
  },
  {
    "id": "minecraft:llama_spit",
    "events": []
  },
  {
    "id": "minecraft:magma_cube",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:become_calm",
      "minecraft:become_aggressive"
    ]
  },
  {
    "id": "minecraft:minecart",
    "events": []
  },
  {
    "id": "minecraft:mooshroom",
    "events": [
      "become_cow",
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:flowerless",
      "minecraft:ate_allium",
      "minecraft:ate_cornflower",
      "minecraft:ate_lily",
      "minecraft:ate_rose",
      "minecraft:ate_orchid",
      "minecraft:ate_daisy",
      "minecraft:ate_tulip",
      "minecraft:ate_bluet",
      "minecraft:ate_poppy",
      "minecraft:ate_dandelion",
      "minecraft:become_red",
      "minecraft:become_brown",
      "minecraft:become_brown_adult",
      "minecraft:become_red_adult"
    ]
  },
  {
    "id": "minecraft:mule",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:on_tame",
      "minecraft:ageable_grow_up",
      "minecraft:on_chest",
      "minecraft:mule_saddled",
      "minecraft:mule_unsaddled"
    ]
  },
  {
    "id": "minecraft:npc",
    "events": []
  },
  {
    "id": "minecraft:ocelot",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:entity_born_wild",
      "minecraft:ageable_grow_up",
      "minecraft:on_trust",
      "minecraft:on_leash",
      "minecraft:on_unleash"
    ]
  },
  {
    "id": "minecraft:panda",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:panda_lazy",
      "minecraft:panda_worried",
      "minecraft:panda_playful",
      "minecraft:panda_brown",
      "minecraft:panda_weak",
      "minecraft:panda_aggressive",
      "minecraft:on_scared",
      "minecraft:baby_on_calm",
      "minecraft:become_angry",
      "minecraft:on_calm"
    ]
  },
  {
    "id": "minecraft:parrot",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:on_tame"
    ]
  },
  {
    "id": "minecraft:phantom",
    "events": []
  },
  {
    "id": "minecraft:pig",
    "events": [
      "become_zombie",
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:on_saddled"
    ]
  },
  {
    "id": "minecraft:piglin",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "spawn_adult_no_hunting",
      "spawn_adult",
      "spawn_adult_ranged",
      "spawn_adult_ranged_no_hunting",
      "spawn_adult_melee",
      "spawn_adult_melee_no_hunting",
      "spawn_baby",
      "stop_zombification_event",
      "start_zombification_event",
      "become_angry_event",
      "become_calm_event",
      "attack_cooldown_complete_event",
      "become_zombie_event",
      "important_block_destroyed_event",
      "admire_item_started_event",
      "admire_item_stopped_event"
    ]
  },
  {
    "id": "minecraft:piglin_brute",
    "events": [
      "minecraft:entity_spawned",
      "stop_zombification_event",
      "start_zombification_event",
      "become_angry_event",
      "become_calm_event",
      "become_zombie_event",
      "important_block_destroyed_event",
      "go_back_to_spawn_failed"
    ]
  },
  {
    "id": "minecraft:pillager",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:spawn_for_raid",
      "minecraft:spawn_as_patrol_follower",
      "minecraft:spawn_as_illager_captain",
      "minecraft:promote_to_illager_captain",
      "minecraft:promote_to_patrol_captain",
      "minecraft:melee_mode",
      "minecraft:ranged_mode",
      "minecraft:start_celebrating",
      "minecraft:stop_celebrating",
      "minecraft:calm"
    ]
  },
  {
    "id": "minecraft:player",
    "events": [
      "minecraft:gain_bad_omen",
      "minecraft:clear_add_bad_omen",
      "minecraft:trigger_raid",
      "minecraft:remove_raid_trigger"
    ]
  },
  {
    "id": "minecraft:polar_bear",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:on_calm",
      "minecraft:on_anger",
      "minecraft:baby_on_calm",
      "minecraft:on_scared"
    ]
  },
  {
    "id": "minecraft:pufferfish",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:to_full_puff",
      "minecraft:on_full_puff",
      "minecraft:from_full_puff",
      "minecraft:on_deflate",
      "minecraft:on_normal_puff"
    ]
  },
  {
    "id": "minecraft:rabbit",
    "events": [
      "in_desert",
      "in_snow",
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "grow_up"
    ]
  },
  {
    "id": "minecraft:ravager",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:spawn_for_raid",
      "minecraft:spawn_for_raid_with_evoker_rider",
      "minecraft:spawn_for_raid_with_pillager_rider",
      "minecraft:spawn_with_pillager_rider",
      "minecraft:spawn_with_pillager_captain_rider",
      "minecraft:spawn_with_vindicator_rider",
      "minecraft:spawn_with_vindicator_captain_rider",
      "minecraft:become_stunned",
      "minecraft:start_roar",
      "minecraft:end_roar",
      "minecraft:start_celebrating",
      "minecraft:stop_celebrating"
    ]
  },
  {
    "id": "minecraft:salmon",
    "events": [
      "minecraft:entity_spawned"
    ]
  },
  {
    "id": "minecraft:sheep",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:on_sheared",
      "minecraft:on_eat_block",
      "wololo"
    ]
  },
  {
    "id": "minecraft:shulker",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:turn_purple",
      "minecraft:turn_black",
      "minecraft:turn_blue",
      "minecraft:turn_brown",
      "minecraft:turn_cyan",
      "minecraft:turn_gray",
      "minecraft:turn_green",
      "minecraft:turn_light_blue",
      "minecraft:turn_lime",
      "minecraft:turn_magenta",
      "minecraft:turn_orange",
      "minecraft:turn_pink",
      "minecraft:turn_red",
      "minecraft:turn_silver",
      "minecraft:turn_white",
      "minecraft:turn_yellow"
    ]
  },
  {
    "id": "minecraft:shulker_bullet",
    "events": []
  },
  {
    "id": "minecraft:silverfish",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:become_angry",
      "minecraft:on_calm"
    ]
  },
  {
    "id": "minecraft:skeleton",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:spring_trap",
      "minecraft:melee_mode",
      "minecraft:ranged_mode"
    ]
  },
  {
    "id": "minecraft:skeleton_horse",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:set_trap",
      "minecraft:spring_trap"
    ]
  },
  {
    "id": "minecraft:slime",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:become_calm",
      "minecraft:become_aggressive"
    ]
  },
  {
    "id": "minecraft:small_fireball",
    "events": []
  },
  {
    "id": "minecraft:snow_golem",
    "events": [
      "minecraft:on_sheared"
    ]
  },
  {
    "id": "minecraft:snowball",
    "events": []
  },
  {
    "id": "minecraft:spider",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:become_hostile",
      "minecraft:become_neutral",
      "minecraft:become_angry",
      "minecraft:become_calm"
    ]
  },
  {
    "id": "minecraft:splash_potion",
    "events": []
  },
  {
    "id": "minecraft:squid",
    "events": [
      "minecraft:entity_spawned"
    ]
  },
  {
    "id": "minecraft:stray",
    "events": [
      "minecraft:entity_spawned",
      "change_to_skeleton",
      "minecraft:melee_mode",
      "minecraft:ranged_mode"
    ]
  },
  {
    "id": "minecraft:strider",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "spawn_adult",
      "spawn_adult_parent_jockey",
      "spawn_adult_piglin_jockey",
      "spawn_baby",
      "minecraft:ageable_grow_up",
      "minecraft:on_saddled",
      "start_suffocating",
      "stop_suffocating"
    ]
  },
  {
    "id": "minecraft:thrown_trident",
    "events": []
  },
  {
    "id": "minecraft:tnt",
    "events": [
      "from_explosion"
    ]
  },
  {
    "id": "minecraft:tnt_minecart",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:on_prime",
      "minecraft:on_instant_prime"
    ]
  },
  {
    "id": "minecraft:tripod_camera",
    "events": []
  },
  {
    "id": "minecraft:tropicalfish",
    "events": [
      "minecraft:become_anenonme",
      "minecraft:become_black_tang",
      "minecraft:become_blue_dory",
      "minecraft:become_butterfly_fish",
      "minecraft:become_cichlid",
      "minecraft:become_clownfish",
      "minecraft:become_cc_betta",
      "minecraft:become_dog_fish",
      "minecraft:become_e_red_snapper",
      "minecraft:become_goat_fish",
      "minecraft:become_moorish_idol",
      "minecraft:become_ornate_butterfly",
      "minecraft:become_parrot_fish",
      "minecraft:become_queen_angel_fish",
      "minecraft:become_red_cichlid",
      "minecraft:become_red_lipped_benny",
      "minecraft:become_red_snapper",
      "minecraft:become_threadfin",
      "minecraft:become_tomato_clown",
      "minecraft:become_triggerfish",
      "minecraft:become_yellow_tang",
      "minecraft:become_yellow_tail_parrot",
      "minecraft:entity_spawned"
    ]
  },
  {
    "id": "minecraft:turtle",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:become_pregnant",
      "minecraft:go_lay_egg",
      "minecraft:laid_egg"
    ]
  },
  {
    "id": "minecraft:vex",
    "events": []
  },
  {
    "id": "minecraft:villager",
    "events": [
      "become_witch",
      "become_zombie",
      "minecraft:entity_spawned",
      "minecraft:entity_transformed",
      "minecraft:entity_born",
      "minecraft:spawn_farmer",
      "minecraft:spawn_librarian",
      "minecraft:spawn_cleric",
      "minecraft:spawn_armorer",
      "minecraft:spawn_butcher",
      "minecraft:ageable_grow_up",
      "minecraft:become_cleric"
    ]
  },
  {
    "id": "minecraft:villager_v2",
    "events": [
      "become_witch",
      "become_zombie",
      "minecraft:entity_spawned",
      "minecraft:spawn_from_village",
      "minecraft:entity_transformed",
      "minecraft:entity_born",
      "minecraft:spawn_farmer",
      "minecraft:spawn_librarian",
      "minecraft:spawn_cleric",
      "minecraft:spawn_armorer",
      "minecraft:spawn_butcher",
      "minecraft:ageable_grow_up",
      "minecraft:become_unskilled",
      "minecraft:become_cleric",
      "minecraft:become_farmer",
      "minecraft:become_fisherman",
      "minecraft:become_fletcher",
      "minecraft:become_librarian",
      "minecraft:become_cartographer",
      "minecraft:become_armorer",
      "minecraft:become_weaponsmith",
      "minecraft:become_toolsmith",
      "minecraft:become_butcher",
      "minecraft:become_leatherworker",
      "minecraft:become_sheperd",
      "minecraft:become_mason",
      "minecraft:schedule_wander_villager",
      "minecraft:schedule_gather_villager",
      "minecraft:schedule_home_villager",
      "minecraft:schedule_bed_villager",
      "minecraft:schedule_play_villager",
      "minecraft:schedule_work_pro_villager",
      "minecraft:schedule_work_farmer",
      "minecraft:schedule_work_fisher",
      "minecraft:schedule_work_librarian",
      "minecraft:resupply_trades"
    ]
  },
  {
    "id": "minecraft:vindicator",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:spawn_as_patrol_follower",
      "minecraft:become_aggro",
      "minecraft:stop_aggro",
      "minecraft:start_johnny",
      "minecraft:stop_johnny",
      "minecraft:spawn_for_raid",
      "minecraft:spawn_as_illager_captain",
      "minecraft:promote_to_illager_captain",
      "minecraft:promote_to_patrol_captain",
      "minecraft:start_celebrating",
      "minecraft:stop_celebrating"
    ]
  },
  {
    "id": "minecraft:wandering_trader",
    "events": [
      "minecraft:scheduled",
      "minecraft:start_despawn",
      "minecraft:become_scared",
      "minecraft:become_calm"
    ]
  },
  {
    "id": "minecraft:witch",
    "events": [
      "minecraft:spawn_for_raid",
      "minecraft:start_celebrating",
      "minecraft:stop_celebrating"
    ]
  },
  {
    "id": "minecraft:wither",
    "events": [
      "minecraft:entity_spawned"
    ]
  },
  {
    "id": "minecraft:wither_skeleton",
    "events": [
      "minecraft:entity_spawned"
    ]
  },
  {
    "id": "minecraft:wither_skull",
    "events": [
      "minecraft:explode"
    ]
  },
  {
    "id": "minecraft:wither_skull_dangerous",
    "events": [
      "minecraft:explode"
    ]
  },
  {
    "id": "minecraft:wolf",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:entity_born",
      "minecraft:ageable_grow_up",
      "minecraft:ageable_set_baby",
      "minecraft:on_tame",
      "minecraft:become_angry",
      "minecraft:on_calm"
    ]
  },
  {
    "id": "minecraft:xp_bottle",
    "events": []
  },
  {
    "id": "minecraft:xp_orb",
    "events": []
  },
  {
    "id": "minecraft:zoglin",
    "events": [
      "minecraft:entity_transformed",
      "minecraft:entity_spawned",
      "minecraft:as_adult",
      "minecraft:as_baby"
    ]
  },
  {
    "id": "minecraft:zombie",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:as_adult",
      "minecraft:as_baby",
      "minecraft:start_transforming",
      "minecraft:stop_transforming",
      "minecraft:convert_to_drowned"
    ]
  },
  {
    "id": "minecraft:zombie_horse",
    "events": [
      "minecraft:entity_spawned",
      "minecraft:ageable_grow_up"
    ]
  },
  {
    "id": "minecraft:zombie_pigman",
    "events": [
      "minecraft:entity_transformed",
      "minecraft:entity_spawned",
      "minecraft:on_calm",
      "minecraft:become_angry"
    ]
  },
  {
    "id": "minecraft:zombie_villager",
    "events": [
      "villager_converted",
      "minecraft:entity_spawned",
      "minecraft:entity_transformed",
      "minecraft:become_cleric",
      "from_village"
    ]
  },
  {
    "id": "minecraft:zombie_villager_v2",
    "events": [
      "villager_converted",
      "minecraft:entity_spawned",
      "minecraft:entity_transformed",
      "minecraft:become_cleric",
      "from_village"
    ]
  }
]