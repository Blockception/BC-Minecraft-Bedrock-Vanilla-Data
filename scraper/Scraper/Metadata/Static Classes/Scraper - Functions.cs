using System;
using System.Collections.Generic;
using Scraper.Metadata;

namespace Scraper.Metadata
{
    ///DOLATER <summary>add description for class: Scraper</summary>
    public static partial class Scraper
    {
        public static readonly ConvertFile<BP.Block> Blocks = VanillaModule<Block>.Convert(Block.Convert);
    }
}
