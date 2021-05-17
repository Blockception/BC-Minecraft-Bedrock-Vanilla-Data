using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Scraper.RP {
    public partial class Entity : IIdentifier {
        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("id")]
        public String ID { get; set; }

        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("animations")]
        public List<string> Animations { get; set; }
    }
}
