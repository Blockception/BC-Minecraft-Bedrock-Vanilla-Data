namespace Scraper.Metadata
{
    public partial class NamedObject
    {
        static public string Convert(NamedObject obj)
        {
            return obj.Name;
        }


        static public BP.Entity ConvertEntity(NamedObject obj)
        {
            return new BP.Entity()
            {
                ID = obj.ID,
            };
        }
    }
}
