import { GLTFLoader } from "GLTFLoader";
import { degreesToRadians } from "../constants/convertions.js";

export function createBuilding2(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB dos edificios
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/realistic_chicago_buildings.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(50, 50, 50);
        model.rotateY(degreesToRadians(-90));
        scene.add(model);
    });
}
export function createBuilding3(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB dos edificios
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/futuristic_building.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(250, 250, 250);
        model.rotateY(degreesToRadians(90));
        scene.add(model);
    });
}
export function createBuilding4(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/old_apartment_building.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(6, 6, 6);
        model.rotateY(degreesToRadians(90));
        scene.add(model);
    });
}

export function createBuilding5(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/old_nyc_style_building.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(110, 150, 110);
        model.rotateY(degreesToRadians(180));
        scene.add(model);
    });
}

export function createBuilding6(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/detailed_old_nyc_building.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(50, 50, 50);
        scene.add(model);
    });
}

export function createBuilding7(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/building1.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(400, 400, 400);
        scene.add(model);
    });
}
