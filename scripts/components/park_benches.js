import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";

export function createParkBench(scene, pos_x, pos_y, pos_z, rotation) {
    // Carregar um modelo GLTF no meio da praça
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('/assets/models/square_components/park_bench.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(4, 4, 4);
        model.rotateY(THREE.MathUtils.degToRad(rotation));
        scene.add(model);
    });
}