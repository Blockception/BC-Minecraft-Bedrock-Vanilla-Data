using System.Collections.Generic;
using System.Linq;

namespace Scraper.Metadata
{
    public partial class Item
    {
        static public List<BP.Item> Convert(Item item)
        {
            var items = new List<BP.Item>()
            {
                new BP.Item() {
                    ID = item.Name,
                },
                new BP.Item() {
                    ID = item.CommandName,
                },
                new BP.Item() {
                    ID = item.SerializationName,
                },
            };

            return items.Distinct().ToList();
        }
    }
}
