using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Scraper.BP.Converters {
    public partial class TradingConverter : JsonConverter<Trading> {

        /// <summary>
        /// 
        /// </summary>
        /// <param name="reader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="options"></param>
        /// <returns></returns>
        public override Trading Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options) {
            var Out = new Trading {
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
        public override void Write(Utf8JsonWriter writer, Trading value, JsonSerializerOptions options) {
            writer.WriteStringValue(value.ID);
        }
    }
}
