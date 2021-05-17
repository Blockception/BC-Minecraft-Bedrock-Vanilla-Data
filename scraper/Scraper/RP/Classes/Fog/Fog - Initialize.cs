using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Scraper.Converters;

namespace Scraper.RP {
    public class FogConverter : IDToStringConverter<Fog> { }

    ///DOLATER <summary>add description for class: Fog</summary>
    [JsonConverter(typeof(FogConverter))]
    public partial class Fog {
        /// <summary>Creates a new instance of <see cref="Fog"/></summary>
        public Fog() {
            this.ID = String.Empty;
        }
    }
}
