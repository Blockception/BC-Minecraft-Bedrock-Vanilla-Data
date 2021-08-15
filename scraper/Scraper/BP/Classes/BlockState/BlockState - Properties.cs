using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Scraper.BP {
    public partial class BlockState {
        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("values")]
        public List<string> Values { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("name")]
        public String Name { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("type")]
        public String Type { get; set; }
    }
}
