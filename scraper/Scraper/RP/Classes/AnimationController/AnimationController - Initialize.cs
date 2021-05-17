using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Scraper.Converters;

namespace Scraper.RP {
    public class AnimationControllerConverter : IDToStringConverter<AnimationController> { }

    ///DOLATER <summary>add description for class: AnimationController</summary>
    [JsonConverter(typeof(AnimationControllerConverter))]
    public partial class AnimationController {
        /// <summary>Creates a new instance of <see cref="AnimationController"/></summary>
        public AnimationController() {
            this.ID = String.Empty;
        }
    }
}
