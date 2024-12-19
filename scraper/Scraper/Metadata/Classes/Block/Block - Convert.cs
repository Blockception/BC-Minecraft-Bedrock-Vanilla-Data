using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Scraper.Metadata
{
    public partial class Block
    {
        static public BP.Block Convert(Block block)
        {
            return new BP.Block()
            {
                ID = block.Name,
                Properties = block.Properties.ConvertAll((item) => item.Name),
            };
        }
    }
}
