import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";

export function createBuilding1(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB dos edificios
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building1.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(2000, 2000, 2000);
        model.rotateY(THREE.MathUtils.degToRad(-90));
        scene.add(model);
    });
}

export function createBuilding2(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB dos edificios
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building2.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(50, 50, 50);
        model.rotateY(THREE.MathUtils.degToRad(-90));
        scene.add(model);
    });
}

export function createBuilding3(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB dos edificios
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building3.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(250, 250, 250);
        model.rotateY(THREE.MathUtils.degToRad(90));
        scene.add(model);
    });
}

export function createBuilding4(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building4.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(6, 6, 6);
        model.rotateY(THREE.MathUtils.degToRad(90));
        scene.add(model);
    });
}

export function createBuilding5(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building5.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(110, 150, 110);
        model.rotateY(THREE.MathUtils.degToRad(180));
        scene.add(model);
    });
}

export function createBuilding6(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building6.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(50, 50, 50);
        scene.add(model);
    });
}

export function createBuilding7(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB das árvores
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building7.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(400, 400, 400);
        scene.add(model);
    });
}

export function createBuilding8(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB dos edificios
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building8.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(200, 200, 200);
        model.rotateY(THREE.MathUtils.degToRad(180));
        scene.add(model);
    });
}

export function createBuilding9(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB dos edificios
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building9.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(70, 70, 70);
        model.rotateY(THREE.MathUtils.degToRad(90));
        scene.add(model);
    });
}

export function createBuilding10(scene, pos_x, pos_y, pos_z) {
    // Carregar o modelo GLB dos edificios
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/buildings/building10.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(150, 150, 150);
        model.rotateY(THREE.MathUtils.degToRad(90));
        scene.add(model);
    });
}