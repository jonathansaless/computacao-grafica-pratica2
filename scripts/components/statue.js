import { gltfLoader } from "../constants/loaders.js";

export function createStatue(scene) {
    gltfLoader.load('/assets/models/square_objects/statue_juliaan_dillens.glb', function (glb) {
        const model = glb.scene;
        model.position.set(0, 20, 0);
        model.scale.set(100, 100, 100);
        model.traverse(function(node) {
            if(node.isMesh){
                node.castShadow = true;
            }
        })
        
        model.castShadow = true;    // habilitar a emissão de sombra
        model.receiveShadow = true; // habilitar o recebimento de sombra
        scene.add(model);
    });
}