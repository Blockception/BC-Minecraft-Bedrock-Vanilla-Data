using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Scraper {
    ///DOLATER <summary>add description for class: General</summary>
    public partial class General {
        /// <summary>Creates a new instance of <see cref="General"/></summary>
        public General() {
            this.BlockData = new GeneralBlock();
            this.EntityData = new GeneralEntity();
        }
    }
}
