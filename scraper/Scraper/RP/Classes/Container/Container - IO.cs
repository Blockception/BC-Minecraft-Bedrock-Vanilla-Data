using System;
using System.Collections.Generic;
using System.IO;

namespace Scraper.RP {
    public partial class Container {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Folder"></param>
        /// <returns></returns>
        public static Container Load(String Folder) {
            var Out = new Container {
                AnimationControllers = Json.LoadEnsure<List<AnimationController>>(Path.Join(Folder, "animation_controllers.json")),
                Animations = Json.LoadEnsure<List<Animation>>(Path.Join(Folder, "animations.json")),
                Entities = Json.LoadEnsure<List<Entity>>(Path.Join(Folder, "entities.json")),
                Fogs = Json.LoadEnsure<List<Fog>>(Path.Join(Folder, "fogs.json")),
                Materials = Json.LoadEnsure<List<Material>>(Path.Join(Folder, "materials.json")),
                Models = Json.LoadEnsure<List<Model>>(Path.Join(Folder, "models.json")),
                Particles = Json.LoadEnsure<List<Particle>>(Path.Join(Folder, "particles.json")),
                RenderControllers = Json.LoadEnsure<List<RenderController>>(Path.Join(Folder, "render_controllers.json")),
                Sounds = Json.LoadEnsure<List<Sound>>(Path.Join(Folder, "sounds.json")),
                Textures = Json.LoadEnsure<List<Texture>>(Path.Join(Folder, "textures.json")),
            };

            return Out;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Folder"></param>
        public void Save(String Folder) {
            Directory.CreateDirectory(Folder);

            Json.Save(this.AnimationControllers, Path.Join(Folder, "animation_controllers.json"));
            Json.Save(this.Animations, Path.Join(Folder, "animations.json"));
            Json.Save(this.Entities, Path.Join(Folder, "entities.json"));
            Json.Save(this.Fogs, Path.Join(Folder, "fogs.json"));
            Json.Save(this.Materials, Path.Join(Folder, "materials.json"));
            Json.Save(this.Models, Path.Join(Folder, "models.json"));
            Json.Save(this.Particles, Path.Join(Folder, "particles.json"));
            Json.Save(this.RenderControllers, Path.Join(Folder, "render_controllers.json"));
            Json.Save(this.Sounds, Path.Join(Folder, "sounds.json"));
            Json.Save(this.Textures, Path.Join(Folder, "textures.json"));
        }
    }
}
