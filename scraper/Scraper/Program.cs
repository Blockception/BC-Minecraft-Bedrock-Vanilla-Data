using System;
using System.Diagnostics;

namespace Scraper {
    public class Program {
        private static void Main(String[] args) {
            Context Context = Utillity.GetFolders();

            var SW = new Stopwatch();
            SW.Start();

            //Loads the base set
            var Out = Output.Load(Utillity.BaseFolder);

            //Scrape data sets
            BP.Scraper.Scrape(Context.EduBP, Out.Edu.BehaviorPack);
            BP.Scraper.Scrape(Context.VanillaBP, Out.Vanilla.BehaviorPack);

            RP.Scraper.Scrape(Context.EduRP, Out.Edu.ResourePack);
            RP.Scraper.Scrape(Context.VanillaRP, Out.Vanilla.ResourePack);


            //Process collected data into general data for quick lookup of things like entities families and events
            Out.General.Scrape(Out);

            //TODO prune education from vanilla
            Out.Clean();
            Out.Prune();

            //Save
            Out.Save(Utillity.OutputFolder);

            SW.Stop();

            Console.WriteLine($"ms: {SW.ElapsedMilliseconds}, ticks: {SW.ElapsedTicks}");
            //Console.ReadLine();
        }
    }
}
