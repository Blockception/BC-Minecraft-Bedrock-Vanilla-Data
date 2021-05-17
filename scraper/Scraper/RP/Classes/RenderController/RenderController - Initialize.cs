using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Scraper.Converters;

namespace Scraper.RP {
    public class RenderControllerConverter : IDToStringConverter<RenderController> { }

    ///DOLATER <summary>add description for class: Model</summary>
    [JsonConverter(typeof(RenderControllerConverter))]
    public partial class RenderController {
        /// <summary>Creates a new instance of <see cref="RenderController"/></summary>
        public RenderController() {
            this.ID = String.Empty;
        }
    }
}
