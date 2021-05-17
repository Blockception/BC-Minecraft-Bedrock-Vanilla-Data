using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Scraper.BP.Converters {
    public partial class LootTableConverter : JsonConverter<LootTable> {

        /// <summary>
        /// 
        /// </summary>
        /// <param name="reader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="options"></param>
        /// <returns></returns>
        public override LootTable Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) {
            var Out = new LootTable {
                ID = reader.GetString()
            };

            return Out;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="value"></param>
        /// <param name="options"></param>
        public override void Write(Utf8JsonWriter writer, LootTable value, JsonSerializerOptions options) {
            writer.WriteStringValue(value.ID);
        }
    }
}
