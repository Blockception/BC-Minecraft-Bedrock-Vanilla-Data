using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Scraper {
    ///DOLATER <summary>add description for class: GeneralBlock</summary>
    public partial class GeneralBlock {
        /// <summary>Creates a new instance of <see cref="GeneralBlock"/></summary>
        public GeneralBlock() {
            this.BlockStates = new List<BP.BlockState>();
        }
    }
}
