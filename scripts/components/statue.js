import { GLTFLoader } from "GLTFLoader";

export function createStatue(scene) {
    // Carregar um modelo GLTF no meio da praça
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/juliaan_dillens.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 20, 0);
        model.scale.set(100, 100, 100);
        scene.add(model);
    });
}