import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Criação dos Bancos da Praça
export function createParkBenches(scene) {
    createParkBench(scene, -2150, 0, 3600, 0);
    createParkBench(scene, 2150, 0, 3600, 0);
    createParkBench(scene, -2150, 0, -3600, 180);
    createParkBench(scene, 2150, 0, -3600, 180);
    createParkBench(scene, 3600, 0, 2150, 90);
    createParkBench(scene, -3600, 0, 2150, -90);
    createParkBench(scene, 3600, 0, -2150, 90);
    createParkBench(scene, -3600, 0, -2150, -90);
}

function createParkBench(scene, pos_x, pos_y, pos_z, rotation) {
    gltfLoader.load('/assets/models/square_objects/park_bench.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(4, 4, 4);
        model.rotateY(THREE.MathUtils.degToRad(rotation));
        model.traverse(c => {
            c.castShadow = true;
        });
        scene.add(model);
    });
}