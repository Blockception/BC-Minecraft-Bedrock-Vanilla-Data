using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Scraper.BP;

namespace Scraper {
    public partial class GeneralEntity {
        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("families")]
        public List<String> Families { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("events")]
        public List<String> Events { get; set; }
    }
}
