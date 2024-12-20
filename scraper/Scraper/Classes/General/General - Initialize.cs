using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Scraper
{
    ///DOLATER <summary>add description for class: General</summary>
    public partial class General
    {
        /// <summary>Creates a new instance of <see cref="General"/></summary>
        public General()
        {
            this.EntityData = new GeneralEntity();
            this.Biomes = new List<String>();
            this.CameraPresets = new List<String>();
            this.CooldownCategory = new List<String>();
            this.Dimensions = new List<String>();
            this.Effects = new List<String>();
            this.Enchantments = new List<String>();
            this.PotionEffects = new List<String>();
            this.PotionModifiers = new List<String>();
            this.PotionTypes = new List<String>();
        }
    }
}
