using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Scraper.BP {
    public partial class LootTable : IIdentifier {
        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("id")]
        public String ID { get; set; }
    }
}
