using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Text.Json;

namespace Scraper {
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="Doc"></param>
    /// <param name=""></param>
    public delegate void ConvertJson<T>([DisallowNull] JsonDocument Doc, [DisallowNull] List<T> Receiver);

    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="Filepath"></param>
    /// <param name="Receiver"></param>
    public delegate void ConvertFile<T>([DisallowNull] String Filepath, [DisallowNull] List<T> Receiver);

    /// <summary>
    /// 
    /// </summary>
    public static partial class ConvertJsonExtension {
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="Func"></param>
        /// <param name="Folder"></param>
        public static void FromFolder<T>([AllowNull] this ConvertJson<T> Func, [DisallowNull] List<T> Receiver, [DisallowNull] String Folder) {
            if (Func == null || !Directory.Exists(Folder)) {
                return;
            }

            String[] Files = Directory.GetFiles(Folder, "*.json", SearchOption.AllDirectories);

            foreach (String Filepath in Files) {
                FromFile<T>(Func, Receiver, Filepath);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="Func"></param>
        /// <param name="Folder"></param>
        public static void FromFolder<T>([AllowNull] this ConvertFile<T> Func, [DisallowNull] List<T> Receiver, [DisallowNull] String Folder) {
            if (Func == null || !Directory.Exists(Folder)) {
                return;
            }

            Console.WriteLine("::group::" + Folder);

            String[] Files = Directory.GetFiles(Folder, "*.json", SearchOption.AllDirectories);

            foreach (String Filepath in Files) {
                Func(Filepath, Receiver);
            }

            Console.WriteLine("::endgroup::" + Folder);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="Func"></param>
        /// <param name="Filepath"></param>
        public static void FromFile<T>([DisallowNull] this ConvertJson<T> Func, [DisallowNull] List<T> Receiver, [DisallowNull] String Filepath) {
            JsonDocument Doc = null;
            Stream Reader = null;

            var Options = new JsonDocumentOptions() {
                AllowTrailingCommas = true,
                CommentHandling = JsonCommentHandling.Skip
            };

            try {
                Reader = new FileStream(Filepath, FileMode.Open, FileAccess.Read);
                Doc = JsonDocument.Parse(Reader, Options);
            }
            catch (Exception ex) {
                Console.WriteLine($"::error file={Filepath},line=0,col=0,endColumn=0::" + ex.ToString());
            }
            finally {
                if (Reader != null) { Reader.Close(); }
            }

            if (Doc != null) {
                Func(Doc, Receiver);
            }
        }
    }
}