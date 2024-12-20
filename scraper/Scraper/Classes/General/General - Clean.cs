

using System.IO;

namespace Scraper
{
    public partial class General
    {
        public void Clean()
        {
            this.EntityData.Clean();
            this.Biomes = this.Biomes.Clean();
            this.CameraPresets = this.CameraPresets.Clean();
            this.CooldownCategory = this.CooldownCategory.Clean();
            this.Dimensions = this.Dimensions.Clean();
            this.Effects = this.Effects.Clean();
            this.Enchantments = this.Enchantments.Clean();
            this.PotionEffects = this.PotionEffects.Clean();
            this.PotionModifiers = this.PotionModifiers.Clean();
            this.PotionTypes = this.PotionTypes.Clean();
        }
    }
}