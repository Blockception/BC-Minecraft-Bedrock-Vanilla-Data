using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Scraper.Metadata
{
    public partial class VanillaModule<T>
    {
        public VanillaModule()
        {
            this.Name = String.Empty;
            this.ModuleType = String.Empty;
            this.MinecraftVersion = String.Empty;
            this.DataType = String.Empty;
            this.DataItems = new List<T>();
        }
    }
}
