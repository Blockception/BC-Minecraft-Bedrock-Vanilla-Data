using System;
using System.IO;

namespace Scraper {
    public class Program {
        private static void Main(String[] args) {
            Context Context = Utillity.GetFolders();
            var Out = new Output();

            BP.Scraper.Scrape(Context.EduBP, Out.Edu.BehaviorPack);
            BP.Scraper.Scrape(Context.VanillaBP, Out.Vanilla.BehaviorPack);

            RP.Scraper.Scrape(Context.EduRP, Out.Edu.ResourePack);
            RP.Scraper.Scrape(Context.VanillaRP, Out.Vanilla.ResourePack);
        }
    }
}
