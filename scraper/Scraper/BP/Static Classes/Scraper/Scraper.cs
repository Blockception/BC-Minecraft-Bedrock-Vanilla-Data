using System;
using System.Collections.Generic;

namespace Scraper.BP {
    ///DOLATER <summary>add description for class: Scraper</summary>
    public static partial class Scraper {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Sources"></param>
        /// <param name="Destination"></param>
        public static void Scrape(List<String> Sources, Container container) {
            foreach (String Source in Sources) {
                Scrape(Source, container);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Source"></param>
        /// <param name="container"></param>
        public static void Scrape(String Source, Container container) {
            Scraper.Block.FromFolder(container.Blocks, Source);
            Scraper.Entity.FromFolder(container.Entities, Source);
            Scraper.Item.FromFolder(container.Items, Source);
            Scraper.LootTable.FromFolder(container.LootTables, Source);
            Scraper.Trading.FromFolder(container.Trading, Source);
        }
    }
}
