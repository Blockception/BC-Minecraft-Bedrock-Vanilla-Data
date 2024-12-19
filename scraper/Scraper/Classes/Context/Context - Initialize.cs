using System;
using System.Collections.Generic;

namespace Scraper {
    ///DOLATER <summary>add description for class: Context</summary>
    public partial class Context {
        /// <summary>Creates a new instance of <see cref="Context"/></summary>
        public Context() {
            this.EduBP = new List<String>();
            this.EduRP = new List<String>();
            this.VanillaBP = new List<String>();
            this.VanillaRP = new List<String>();
            this.MetadataFolder = new List<String>();
        }
    }
}
