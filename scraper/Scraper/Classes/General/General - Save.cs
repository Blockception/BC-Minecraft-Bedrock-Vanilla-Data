

using System;
using System.IO;

namespace Scraper {
    public partial class General {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Folder"></param>
        public void Save(String Folder) {
            Typescript.Save("GeneralEntity", "./format", nameof(this.EntityData), this.EntityData, Path.Join(Folder, "entities.ts"));
        }
    }
}