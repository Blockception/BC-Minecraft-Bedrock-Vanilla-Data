using System;
using System.Collections.Generic;

namespace Scraper.BP {
    ///DOLATER <summary>add description for class: Entity</summary>
    public partial class Entity {
        /// <summary>Creates a new instance of <see cref="Entity"/></summary>
        public Entity() {
            this.ID = String.Empty;
            this.Events = new List<String>();
            this.Families = new List<string>();
        }
    }
}
