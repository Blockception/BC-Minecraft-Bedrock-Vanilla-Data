namespace Scraper.BP {
    public partial class Container {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Excluded"></param>
        public void Clean() {
            this.Blocks = this.Blocks.Clean();
            this.Entities = this.Entities.Clean();
            this.Items = this.Items.Clean();
            this.LootTables = this.LootTables.Clean();
            this.Trading = this.Trading.Clean();
        }
    }
}
