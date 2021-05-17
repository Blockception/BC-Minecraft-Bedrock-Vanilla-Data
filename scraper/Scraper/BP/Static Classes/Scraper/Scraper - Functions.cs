namespace Scraper.BP {
    ///DOLATER <summary>add description for class: Scraper</summary>
    public static partial class Scraper {
        /// <summary>
        /// 
        /// </summary>
        public readonly static ConvertJson<Block> Block = null;

        /// <summary>
        /// 
        /// </summary>
        public readonly static ConvertJson<Entity> Entity = null;

        /// <summary>
        /// 
        /// </summary>
        public readonly static ConvertJson<Item> Item = null;

        /// <summary>
        /// 
        /// </summary>
        public readonly static ConvertFile<LootTable> LootTable = BP.LootTable.Convert;

        /// <summary>
        /// 
        /// </summary>
        public readonly static ConvertFile<Trading> Trading = BP.Trading.Convert;
    }
}
