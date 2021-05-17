using System;
using System.Collections.Generic;

namespace Scraper.BP {
    ///DOLATER <summary>add description for class: Block</summary>
    public partial class Block {
        /// <summary>Creates a new instance of <see cref="Block"/></summary>
        public Block() {
            this.ID = String.Empty;
            this.States = new List<BlockState>();
        }
    }
}
