using System;
using System.Collections.Generic;
using System.IO;

namespace Scraper.BP {
    public partial class Container {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Folder"></param>
        /// <returns></returns>
        public static Container Load(String Folder) {
            var Out = new Container {
                Blocks = Json.LoadEnsure<List<Block>>(Path.Join(Folder, "blocks.json")),
                Entities = Json.LoadEnsure<List<Entity>>(Path.Join(Folder, "entities.json")),
                Items = Json.LoadEnsure<List<Item>>(Path.Join(Folder, "items.json")),
                LootTables = Json.LoadEnsure<List<LootTable>>(Path.Join(Folder, "loot_tables.json")),
                Trading = Json.LoadEnsure<List<Trading>>(Path.Join(Folder, "trading.json"))
            };

            return Out;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Folder"></param>
        public void Save(String Folder) {
            Directory.CreateDirectory(Folder);

            Typescript.Save("Block", "../../Types/BehaviorPack/Block", nameof(this.Blocks), this.Blocks, Path.Join(Folder, "blocks.ts"));
            Typescript.Save("Entity", "../../Types/BehaviorPack/Entity", nameof(this.Entities), this.Entities, Path.Join(Folder, "entities.ts"));
            Typescript.Save("Item", "../../Types/BehaviorPack/Item", nameof(this.Items), this.Items, Path.Join(Folder, "items.ts"));
            Typescript.Save("string", null, nameof(this.LootTables), this.LootTables, Path.Join(Folder, "loot_tables.ts"));
            Typescript.Save("string", null, nameof(this.Trading), this.Trading, Path.Join(Folder, "trading.ts"));
        }
    }
}
