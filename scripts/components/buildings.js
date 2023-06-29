import { GLTFLoader } from "GLTFLoader";

export function createBuilding(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/low_poly_building.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(1300, 1500, 1300);
        scene.add(model);
    });
}
