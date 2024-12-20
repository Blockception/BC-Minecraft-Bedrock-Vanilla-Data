using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Scraper.Metadata
{
    public partial class VanillaModule<T>
    {
        public static ConvertFile<U> Convert<U>(Converter<T, U> mapfn)
        {
            return new ConvertFile<U>((String filepath, List<U> receiver) =>
            {
                Console.WriteLine("Loading file" + filepath);
                var obj = Json.Load<VanillaModule<T>>(filepath);

                receiver.AddRange(obj.DataItems.ConvertAll(mapfn));
            });
        }

        public static void Convert(String filepath, List<T> receiver)
        {
            var obj = Json.Load<VanillaModule<T>>(filepath);
            receiver.AddRange(obj.DataItems);
        }
    }
}
