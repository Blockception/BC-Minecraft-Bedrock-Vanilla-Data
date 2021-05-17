using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Scraper.RP {
    public partial class AnimationController {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Doc"></param>
        /// <param name="Receiver"></param>
        public static void Convert(JsonDocument Doc, List<AnimationController> Receiver) {
            JsonElement Root = Doc.RootElement;
            JsonElement container = Root.GetProperty("animation_controllers");

            foreach (JsonProperty anim in container.EnumerateObject()) {
                var Item = new AnimationController();
                Receiver.Add(Item);

                Item.ID = anim.Name;
                
                //TODO find sounds
                //TODO find particles
                //TODO find variables
            }
        }
    }
}
