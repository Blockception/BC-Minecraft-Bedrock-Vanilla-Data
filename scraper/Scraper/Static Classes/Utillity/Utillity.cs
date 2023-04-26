using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace Scraper {

  ///DOLATER <summary>add description for class: Utillity</summary>
  public static partial class Utillity {
    /// <summary>
    /// 
    /// </summary>
    /// <param name="Filepath"></param>
    /// <param name="uri"></param>
    public static void Download(String Filepath, String uri) {
      if (File.Exists(Filepath)) {
        File.Delete(Filepath);
      }

      Console.WriteLine("start\tdownloading: " + uri);
      var client = new WebClient();
      client.DownloadFile(uri, Filepath);
      Console.WriteLine("done\tdownloading: " + uri);
    }

    /// <summary>
    /// 
    /// </summary>
    public static String DownloadUnpack(String Name, String Uri) {
      String Filepath = Path.Join(WorkFolder, $"{Name}.zip");

      if (!File.Exists(Filepath)) {
        Download(Filepath, Uri);
      }
      else {
        Console.WriteLine("Skipping downloading: " + Uri);
      }

      if (File.Exists(Filepath)) {
        String Folder = Path.Join(WorkFolder, Name);

        if (!Directory.Exists(Folder)) {
          Console.WriteLine("Unzipping: " + Uri);
          ZipFile.ExtractToDirectory(Filepath, Folder);
        }
        else {
          Console.WriteLine("Skipping unzipping: " + Uri);
        }

        return Folder;
      }

      return null;
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="Name"></param>
    /// <param name="Uri"></param>
    /// <returns></returns>
    public static Task<String> DownloadUnpackAsync(String Name, String Uri) {
      return Task.Run<String>(() => DownloadUnpack(Name, Uri));
    }

    public static Context GetFolders() {
      Directory.CreateDirectory(Utillity.WorkFolder);
      var Out = new Context();

      //Edu
      String EduInstall = Minecraft.EduInstallationFolder();

      if (EduInstall != null) {
        String BPS = Path.Join(EduInstall, "data", "behavior_packs", "education");
        String RPS = Path.Join(EduInstall, "data", "resource_packs", "education");

        Existsif(Out.EduBP, BPS);
        Existsif(Out.EduRP, RPS);
      }

      //Vanilla
      String Install = Minecraft.InstallationFolder();

      if (Install != null) {
        String BPS = Path.Join(Install, "data", "behavior_packs");
        String RPS = Path.Join(Install, "data", "resource_packs");

        Existsif(Out.VanillaBP, BPS, "vanilla");
        Existsif(Out.EduBP, BPS, "education");

        Existsif(Out.VanillaRP, RPS, "vanilla");
        Existsif(Out.EduRP, RPS, "education");
      }

      String Folder = Path.Join(DownloadUnpack("Samples", "https://github.com/Mojang/bedrock-samples/archive/refs/heads/main.zip"), "bedrock-samples-main");
      Existsif(Out.VanillaBP, Folder, "behavior_pack");
      Existsif(Out.VanillaRP, Folder, "resource_pack");

      Out.GithubFolder = Folder;

      return Out;
    }

    private static void Existsif(List<String> Receiver, String Folder) {
      if (Directory.Exists(Folder)) {
        Receiver.Add(Folder);
      }
    }

    private static void Existsif(List<String> Receiver, String Folder, String SubFolder) {
      Folder = Path.Join(Folder, SubFolder);
      Existsif(Receiver, Folder);
    }
  }
}
