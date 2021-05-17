using System;
using System.Collections.Generic;
using System.Text.Json;

namespace Scraper.RP {
    public partial class Model {
        public static void Convert(JsonDocument Doc, List<Model> Receiver) {
            JsonElement Root = Doc.RootElement;

            String format = Root.GetProperty("format_version").GetString();

            switch (format) {
                case "1.10.0":
                case "1.8.0":
                    Convert180(Root, Receiver);
                    break;

                default:
                    Convert(Root, Receiver);
                    break;
            }
        }

        internal static void Convert180(JsonElement Root, List<Model> Receiver) {
            foreach (JsonProperty Geo in Root.EnumerateObject()) {
                if (Geo.Name.StartsWith("geometry")) {
                    String ID = Geo.Name;

                    Int32 Index = ID.IndexOf(":");

                    if (Index >= 0) {
                        ID = ID[..Index];
                    }

                    var Item = new Model {
                        ID = ID
                    };

                    Receiver.Add(Item);
                }
            }
        }

        internal static void Convert(JsonElement Root, List<Model> Receiver) {
            JsonElement Geos = Root.GetProperty("minecraft:geometry");

            foreach (JsonElement Geo in Geos.EnumerateArray()) {
                String Identifier = Geo.GetProperty("description").GetProperty("identifier").GetString();
                var Item = new Model {
                    ID = Identifier
                };

                Receiver.Add(Item);
            }
        }
    }
}
