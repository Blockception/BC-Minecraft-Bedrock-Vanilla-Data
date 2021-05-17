using System.Collections.Generic;

namespace Scraper.RP {
    ///DOLATER <summary>add description for class: Container</summary>
    public partial class Container {
        public Container() {
            this.AnimationControllers = new List<AnimationController>();
            this.Animations = new List<Animation>();
            this.Entities = new List<Entity>();
            this.Fogs = new List<Fog>();
            this.Materials = new List<Material>();
            this.Models = new List<Model>();
            this.Particles = new List<Particle>();
            this.RenderControllers = new List<RenderController>();
            this.Sounds = new List<Sound>();
            this.Textures = new List<Texture>();
        }
    }
}
