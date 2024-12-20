using System;
using System.Collections.Generic;

namespace Scraper.BP
{
    ///DOLATER <summary>add description for class: Container</summary>
    public partial class Container
    {
        /// <summary>Creates a new instance of <see cref="Container"/></summary>
        public Container()
        {
            this.Blocks = new List<Block>();
            this.Entities = new List<Entity>();
            this.Items = new List<Item>();
            this.LootTables = new List<LootTable>();
            this.Trading = new List<Trading>();
            this.Features = new List<String>();
        }
    }
}
