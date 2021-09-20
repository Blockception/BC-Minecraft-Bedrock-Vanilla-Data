using System;

namespace Scraper {
    public partial class GeneralBlock {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Data"></param>
        public void Scrape(BP.Container Data) {
            foreach (BP.Block Block in Data.Blocks) {
                foreach (BP.BlockState State in Block.States) {
                    Int32 Index = this.BlockStates.FindIndex((item) =>item.Name == State.Name && item.Values.Count == State.Values.Count);

                    if (Index < 0) {
                        this.BlockStates.Add(State);
                    }
                }
            }
        }

        public void Clean() {
            this.BlockStates.Sort();
        }
    }
}
