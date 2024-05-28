using System;
using System.Collections.Generic;

namespace Scraper.RP {
    ///DOLATER <summary>add description for class: Animation</summary>
    public partial class Animation {
        /// <summary>Creates a new instance of <see cref="Animation"/></summary>
        public Animation() {
            this.ID = String.Empty;
            this.Bones = new List<String>();
            this.Particles = new List<String>();
            this.Sounds = new List<String>();
        }
    }
}
