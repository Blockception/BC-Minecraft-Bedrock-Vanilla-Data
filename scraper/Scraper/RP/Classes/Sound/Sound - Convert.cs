using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace Scraper.RP {
    public partial class Sound {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Pack"></param>
        /// <param name="Receiver"></param>
        public static void Convert(String Pack, List<Sound> Receiver) {
            String Filepath = Path.Join(Pack, "sounds", "sound_definitions.json");

            JsonDocument Doc = Json.GetDoc(Filepath);

            if (Doc == null) {
                return;
            }

            if (Doc.RootElement.TryGetProperty("sound_definitions", out JsonElement Definitions)) {
                foreach (JsonProperty Def in Definitions.EnumerateObject()) {
                    var Item = new Sound() {
                        ID = Def.Name
                    };

                    Receiver.Add(Item);
                }
            }
        }
    }
}
