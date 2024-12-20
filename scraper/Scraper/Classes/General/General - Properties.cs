using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scraper {
    public partial class General {
        public GeneralEntity EntityData { get; set; }
        public List<string> Biomes { get; internal set; }
        public List<string> CameraPresets { get; internal set; }
        public List<string> CooldownCategory { get; internal set; }
        public List<string> Dimensions { get; internal set; }
        public List<string> Effects { get; internal set; }
        public List<string> Enchantments { get; internal set; }
        public List<string> PotionEffects { get; internal set; }
        public List<string> PotionModifiers { get; internal set; }
        public List<string> PotionTypes { get; internal set; }
    }
}
