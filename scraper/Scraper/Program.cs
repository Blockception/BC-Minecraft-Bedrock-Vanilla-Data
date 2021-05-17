using System;

namespace Scraper {
    public class Program {
        private static void Main(String[] args) {
            Context Context = Utillity.GetFolders();

            //Loads the base set
            var Out = Output.Load(Utillity.BaseFolder);

            //Scrape data sets
            BP.Scraper.Scrape(Context.EduBP, Out.Edu.BehaviorPack);
            BP.Scraper.Scrape(Context.VanillaBP, Out.Vanilla.BehaviorPack);

            RP.Scraper.Scrape(Context.EduRP, Out.Edu.ResourePack);
            RP.Scraper.Scrape(Context.VanillaRP, Out.Vanilla.ResourePack);

            //TODO prune education from vanilla
            Out.Clean();

            //Save
            Out.Save(Utillity.OutputFolder);
        }
    }
}
