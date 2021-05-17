using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Scraper.BP {
    ///DOLATER <summary>add description for class: Trading</summary>
    public partial class Trading {
        /// <summary>Creates a new instance of <see cref="Trading"/></summary>
        public Trading() : this(String.Empty) {}

        /// <summary>Creates a new instance of <see cref="Trading"/></summary>
        /// <param name="ID"></param>
        public Trading(String ID) {
            this.ID = ID;
        }
    }
}
