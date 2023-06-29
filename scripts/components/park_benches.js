// import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { degreesToRadians } from "../constants/convertions.js";

export function createParkBench(scene, pos_x, pos_y, pos_z, rotation) {
    // Carregar um modelo GLTF no meio da praça
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/park_bench.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(5, 5, 5);
        model.rotateY(degreesToRadians(rotation));
        scene.add(model);
    });
}