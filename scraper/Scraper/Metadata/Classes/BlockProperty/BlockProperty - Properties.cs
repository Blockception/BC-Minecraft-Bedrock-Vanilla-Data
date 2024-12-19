using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Scraper.Metadata {
    public partial class BlockProperty {
        [JsonPropertyName("name")]
        public String Name { get; set; }
    }
}
