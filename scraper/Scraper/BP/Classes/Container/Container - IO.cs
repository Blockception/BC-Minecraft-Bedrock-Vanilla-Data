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

            Json.Save(this.Blocks, Path.Join(Folder, "blocks.json"));
            Json.Save(this.Entities, Path.Join(Folder, "entities.json"));
            Json.Save(this.Items, Path.Join(Folder, "items.json"));
            Json.Save(this.LootTables, Path.Join(Folder, "loot_tables.json"));
            Json.Save(this.Trading, Path.Join(Folder, "trading.json"));
        }
    }
}
