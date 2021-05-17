﻿using System;
using System.IO;

namespace Scraper {
    ///DOLATER <summary>add description for class: Minecraft</summary>
    public static partial class Minecraft {
        /// <summary>
        /// 
        /// </summary>
        private static String _InstallationFolder;

        public static String InstallationFolder() {
            if (_InstallationFolder == null) {
                String[] Directories = Directory.GetDirectories(@"C:\Program Files\WindowsApps\", "Microsoft.Minecraft*");

                if (Directories.Length >= 1) {
                    _InstallationFolder = Directories[0];
                }
            }

            return _InstallationFolder;
        }
    }
}
