using System;
using System.Text.Json.Serialization;
using Scraper.Converters;

namespace Scraper.RP {
    public class AnimationConverter : IDToStringConverter<Animation> { }

    ///DOLATER <summary>add description for class: Animation</summary>
    [JsonConverter(typeof(AnimationConverter))]
    public partial class Animation {
        /// <summary>Creates a new instance of <see cref="Animation"/></summary>
        public Animation() {
            this.ID = String.Empty;
        }
    }
}
