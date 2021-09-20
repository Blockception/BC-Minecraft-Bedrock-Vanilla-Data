

using System.IO;

namespace Scraper {
    public partial class General {
        public void Clean() {
            this.EntityData.Clean();
            this.BlockData.Clean();
        }
    }
}