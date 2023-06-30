import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Criação das lixeiras da Praça
export function createParkDumps(scene) {
    createParkDump(scene, 650, 0, 3300);
    createParkDump(scene, -650, 0, -3300);
    createParkDump(scene, 3300, 0, -650);
    createParkDump(scene, -3300, 0, 650);
}

function createParkDump(scene, pos_x, pos_y, pos_z, rotation = 0) {
    gltfLoader.load('/assets/models/square_objects/park_trash_can.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(30, 30, 30);
        model.rotateY(THREE.MathUtils.degToRad(rotation));
        model.traverse(c => {
            c.castShadow = true;
        });
        scene.add(model);
    });
}