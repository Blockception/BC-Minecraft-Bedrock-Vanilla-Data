using System.Collections.Generic;

namespace Scraper.BP {
    public partial class Container {
        /// <summary>
        /// 
        /// </summary>
        public List<Entity> Entities { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Item> Items { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Block> Blocks { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<LootTable> LootTables { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Trading> Trading { get; set; }
    }
}
