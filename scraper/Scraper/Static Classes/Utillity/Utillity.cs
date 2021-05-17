using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Net;

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

        public static Context GetFolders() {
            Directory.CreateDirectory(Utillity.WorkFolder);

            var Out = new Context();

            AddIf(Out.VanillaBP, DownloadUnpack("VanillaBP", Minecraft.BehaviorPackUri));
            AddIf(Out.VanillaRP, DownloadUnpack("VanillaRP", Minecraft.ResourcepackUri));

            String Install = Minecraft.InstallationFolder();

            if (Install != null) {
                String BPS = Path.Join(Install, "data", "behavior_packs");
                String RPS = Path.Join(Install, "data", "resource_packs");

                Existsif(Out.EduBP, BPS, "education");
                Existsif(Out.EduRP, RPS, "education");
            }

            return Out;
        }

        private static void AddIf(List<String> Receiver, String Item) {
            if (Item != null) {
                Receiver.Add(Item);
            }
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
