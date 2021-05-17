using System;
using System.Collections.Generic;
using System.IO;

namespace Scraper.RP {
    public partial class Container {
        /// <summary>
        /// 
        /// </summary>
        public List<AnimationController> AnimationControllers { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Animation> Animations { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Entity> Entities { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Fog> Fogs { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Material> Materials { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Model> Models { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Particle> Particles { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<RenderController> RenderControllers { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Sound> Sounds { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public List<Texture> Textures { get; set; }
    }
}
