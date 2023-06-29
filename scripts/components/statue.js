import { GLTFLoader } from "GLTFLoader";
import * as THREE from "three";

export function createStatue(scene) {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/juliaan_dillens.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 20, 0);
        model.scale.set(100, 100, 100);
        model.traverse(function(node) {
            if(node.isMesh){
                node.castShadow = true;
            }
        })
        
        // model.castShadow = true; // Habilitar a projeção de sombras para cada mesh
        model.receiveShadow = true; // Habilitar o recebimento de sombras para cada mesh
        scene.add(model);
    });
}