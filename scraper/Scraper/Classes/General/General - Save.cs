

using System;
using System.IO;

namespace Scraper {
    public partial class General {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Folder"></param>
        public void Save(String Folder) {
            Typescript.Save("GeneralBlock", "./format", nameof(this.BlockData), this.BlockData, Path.Join(Folder, "blocks.ts"));
            Typescript.Save("GeneralEntity", "./format", nameof(this.EntityData), this.EntityData, Path.Join(Folder, "entities.ts"));
        }
    }
}