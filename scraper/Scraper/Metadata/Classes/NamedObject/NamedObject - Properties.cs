using System.Text.Json.Serialization;

namespace Scraper.Metadata
{
    public partial class NamedObject : INamed, IIdentifier
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonIgnore]
        public string ID { get => this.Name; set => this.Name = value; }
    }
}
