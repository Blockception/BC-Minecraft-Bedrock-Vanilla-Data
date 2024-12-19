using System;
using System.Diagnostics;

namespace Scraper {
  public class Program {
    private static void Main(String[] args) {
      Context context = Utility.GetFolders();

      var sw = new Stopwatch();
      sw.Start();

      //Loads the base set
      var Out = Output.Load(Utility.BaseFolder);

      //Scrape data sets
      BP.Scraper.Scrape(context.EduBP, Out.Edu.BehaviorPack);
      BP.Scraper.Scrape(context.VanillaBP, Out.Vanilla.BehaviorPack);

      RP.Scraper.Scrape(context.EduRP, Out.Edu.ResourcePack);
      RP.Scraper.Scrape(context.VanillaRP, Out.Vanilla.ResourcePack);

      Metadata.Scraper.Scrape(context.MetadataFolder, Out.Vanilla.BehaviorPack);

      //Process collected data into general data for quick lookup of things like entities families and events
      Out.General.Scrape(Out);

      //TODO prune education from vanilla
      Out.Clean();
      Out.Prune();

      //Save
      Out.Save(Utility.OutputFolder);

      Vanilla.GithubLinks(context, Utility.OutputFolder);
      FormatVersions.GetVersions(context, Utility.OutputFolder);

      sw.Stop();

      Console.WriteLine($"ms: {sw.ElapsedMilliseconds}, ticks: {sw.ElapsedTicks}");
      //Console.ReadLine();
    }
  }
}
