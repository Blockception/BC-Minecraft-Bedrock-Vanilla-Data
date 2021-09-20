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
                AnimationControllers = Json.LoadEnsure<List<AnimationController>>(Path.Join(Folder, "animation_controllers.ts")),
                Animations = Json.LoadEnsure<List<Animation>>(Path.Join(Folder, "animations.ts")),
                Entities = Json.LoadEnsure<List<Entity>>(Path.Join(Folder, "entities.ts")),
                Fogs = Json.LoadEnsure<List<Fog>>(Path.Join(Folder, "fogs.ts")),
                Materials = Json.LoadEnsure<List<Material>>(Path.Join(Folder, "materials.ts")),
                Models = Json.LoadEnsure<List<Model>>(Path.Join(Folder, "models.ts")),
                Particles = Json.LoadEnsure<List<Particle>>(Path.Join(Folder, "particles.ts")),
                RenderControllers = Json.LoadEnsure<List<RenderController>>(Path.Join(Folder, "render_controllers.ts")),
                Sounds = Json.LoadEnsure<List<Sound>>(Path.Join(Folder, "sounds.ts")),
                Textures = Json.LoadEnsure<List<Texture>>(Path.Join(Folder, "textures.ts")),
            };

            return Out;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="Folder"></param>
        public void Save(String Folder) {
            Directory.CreateDirectory(Folder);

            Typescript.SaveArray("string",null, nameof(this.AnimationControllers), this.AnimationControllers, Path.Join(Folder, "animation_controllers.ts"));
            Typescript.SaveArray("string", null, nameof(this.Animations), this.Animations, Path.Join(Folder, "animations.ts"));
            Typescript.SaveArray("Entity", "../../Types/ResourcePack/Entity", nameof(this.Entities), this.Entities, Path.Join(Folder, "entities.ts"));
            Typescript.SaveArray("string", null, nameof(this.Fogs), this.Fogs, Path.Join(Folder, "fogs.ts"));
            Typescript.SaveArray("string", null, nameof(this.Materials), this.Materials, Path.Join(Folder, "materials.ts"));
            Typescript.SaveArray("string", null, nameof(this.Models), this.Models, Path.Join(Folder, "models.ts"));
            Typescript.SaveArray("string", null, nameof(this.Particles), this.Particles, Path.Join(Folder, "particles.ts"));
            Typescript.SaveArray("string", null, nameof(this.RenderControllers), this.RenderControllers, Path.Join(Folder, "render_controllers.ts"));
            Typescript.SaveArray("string", null, nameof(this.Sounds), this.Sounds, Path.Join(Folder, "sounds.ts"));
            Typescript.SaveArray("string", null, nameof(this.Textures), this.Textures, Path.Join(Folder, "textures.ts"));
        }
    }
}
