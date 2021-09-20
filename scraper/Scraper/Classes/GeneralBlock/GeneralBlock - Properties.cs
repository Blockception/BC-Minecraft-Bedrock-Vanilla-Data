using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Scraper.BP;

namespace Scraper {
    public partial class GeneralBlock {
        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("blockstates")]
        public List<BlockState> BlockStates { get; set; }
    }
}
