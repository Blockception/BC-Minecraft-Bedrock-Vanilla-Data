using System;
using System.IO;

namespace Scraper {
    ///DOLATER <summary>add description for class: Utillity</summary>
    public static partial class Utillity {
        /// <summary>
        /// 
        /// </summary>
        public static readonly String WorkFolder = Path.Join(Environment.CurrentDirectory, "work");

        /// <summary>
        /// 
        /// </summary>
        public static readonly String OutputFolder = Path.Join(FindFolder(WorkFolder, "src"), "Lib");

        /// <summary>
        /// 
        /// </summary>
        public static readonly String OutputEdu = Path.Join(OutputFolder, "Edu");

        /// <summary>
        /// 
        /// </summary>
        public static readonly String OutputVanillia = Path.Join(OutputFolder, "Vanillia");

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Source"></param>
        /// <param name="Find"></param>
        /// <returns></returns>
        private static String FindFolder(String Source, String Find) {
            while (Source.Length >= 0) {
                String Item = Path.Join(Source, Find);
                if (Directory.Exists(Item)) {
                    return Item;
                }

                Source = Directory.GetParent(Source).FullName;
            }

            throw new Exception();
            return null;
        }
    }
}
