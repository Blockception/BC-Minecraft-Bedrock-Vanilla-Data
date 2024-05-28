using System;
using System.Collections.Generic;

namespace Scraper.RP {
    ///DOLATER <summary>add description for class: AnimationController</summary>
    public partial class AnimationController {
        /// <summary>Creates a new instance of <see cref="AnimationController"/></summary>
        public AnimationController() {
            this.ID = String.Empty;
            this.Animations = new List<String>();
            this.Particles = new List<String>();
            this.Sounds = new List<String>();
        }
    }
}
