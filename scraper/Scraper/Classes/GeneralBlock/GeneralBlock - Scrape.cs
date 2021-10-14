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
                    Int32 Index = this.BlockStates.FindIndex((item) => item.Name == State.Name);

                    if (Index < 0) {
                        this.BlockStates.Add(State);
                    }
                    else {
                        BP.BlockState Item = this.BlockStates[Index];

                        if (State.Values.Count > Item.Values.Count) {
                            this.BlockStates[Index] = State;
                        }
                    }
                }
            }
        }

        public void Clean() {
            this.BlockStates.Sort(Sort.SortNamed<BP.BlockState>());
        }
    }
}
