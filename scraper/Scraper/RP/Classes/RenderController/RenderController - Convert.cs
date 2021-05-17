using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Scraper.RP {
    public partial class RenderController {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Doc"></param>
        /// <param name="Receiver"></param>
        public static void Convert(JsonDocument Doc, List<RenderController> Receiver) {
            JsonElement Root = Doc.RootElement;
            JsonElement container = Root.GetProperty("render_controllers");

            foreach (JsonProperty controller in container.EnumerateObject()) {
                var Item = new RenderController();
                Receiver.Add(Item);

                Item.ID = controller.Name;

                //TODO find materials
                //TODO find textures
                //TODO find models
            }
        }
    }
}
