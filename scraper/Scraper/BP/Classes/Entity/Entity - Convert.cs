using System;
using System.Collections.Generic;
using System.Text.Json;

namespace Scraper.BP {
    public partial class Entity {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Doc"></param>
        /// <param name="Receiver"></param>
        public static void Convert(JsonDocument Doc, List<Entity> Receiver) {
            JsonElement Root = Doc.RootElement;

            JsonElement Def = Root.GetProperty("minecraft:entity");
            JsonElement Events = Def.GetProperty("events");
            String ID = Def.GetProperty("description").GetProperty("identifier").GetString();

            if (ID != null) {
                var Out = new Entity {
                    ID = ID
                };

                foreach (JsonProperty Property in Events.EnumerateObject()) {
                    Out.Events.Add(Property.Name);
                }

                Receiver.Add(Out);
            }
        }
    }
}
