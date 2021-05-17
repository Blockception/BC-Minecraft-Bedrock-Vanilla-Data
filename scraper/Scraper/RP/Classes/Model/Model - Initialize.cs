using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Scraper.Converters;

namespace Scraper.RP {
    public class ModelConverter : IDToStringConverter<Model> { }

    ///DOLATER <summary>add description for class: Model</summary>
    [JsonConverter(typeof(ModelConverter))]
    public partial class Model {
        /// <summary>Creates a new instance of <see cref="Model"/></summary>
        public Model() {
            this.ID = String.Empty;
        }
    }
}
