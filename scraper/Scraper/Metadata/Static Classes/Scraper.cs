using System;
using System.Collections.Generic;
using System.IO;
using Scraper;

namespace Scraper.Metadata
{
    ///DOLATER <summary>add description for class: Scraper</summary>
    public static partial class Scraper
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Sources"></param>
        /// <param name="Receiver"></param>
        public static void Scrape(List<String> Sources, BP.Container bpcontainer)
        {
            foreach (String Source in Sources)
            {
                Scrape(Source, bpcontainer);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Source"></param>
        /// <param name="container"></param>
        public static void Scrape(String Source, BP.Container bpcontainer)
        {
            Console.WriteLine("Scraping Metadata: " + Source);
            var vanillaModules = Path.Join(Source, "vanilladata_modules");

            Scraper.Blocks.FromFile(bpcontainer.Blocks, Path.Join(vanillaModules, "mojang-blocks.json"));
        }
    }
}
