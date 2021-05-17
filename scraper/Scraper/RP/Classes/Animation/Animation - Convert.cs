using System.Collections.Generic;
using System.Text.Json;

namespace Scraper.RP {
    public partial class Animation {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Doc"></param>
        /// <param name="Receiver"></param>
        public static void Convert(JsonDocument Doc, List<Animation> Receiver) {
            JsonElement Root = Doc.RootElement;
            JsonElement container = Root.GetProperty("animations");

            foreach (JsonProperty anim in container.EnumerateObject()) {
                var Item = new Animation();
                Receiver.Add(Item);

                Item.ID = anim.Name;

                //TODO find sounds
                //TODO find particles
                //TODO find variables
                //TODO find animations
            }
        }
    }
}
