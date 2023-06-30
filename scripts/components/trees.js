import { GLTFLoader } from "GLTFLoader";

export function createTree(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/trees/oak_trees.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(1300, 1500, 1300);
        scene.add(model);
    });
}
