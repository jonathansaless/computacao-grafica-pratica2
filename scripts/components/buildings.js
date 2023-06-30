import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Criação dos prédios
export function createBuildings(scene) {
    createBuilding(scene, '/assets/models/buildings/building1.glb', 9000, 3000, -7400, 2000, -90);
    createBuilding(scene, '/assets/models/buildings/building2.glb', 7400, -650, -2500, 50, -90);
    createBuilding(scene, '/assets/models/buildings/building3.glb', -7400, -50, -1700, 250, 90);
    createBuilding(scene, '/assets/models/buildings/building4.glb', -7800, -50, 2500, 6, 90);
    createBuilding(scene, '/assets/models/buildings/building5.glb', 2000, 0, 8200, 110, 180);
    createBuilding(scene, '/assets/models/buildings/building6.glb', -3900, -150, -7400, 50);
    createBuilding(scene, '/assets/models/buildings/building7.glb', -500, 200, -7800, 400);
    createBuilding(scene, '/assets/models/buildings/building8.glb', 7800, 1500, 8000, 200, 180);
    createBuilding(scene, '/assets/models/buildings/building9.glb', -9800, 1800, 7500, 70, 90);
    createBuilding(scene, '/assets/models/buildings/building10.glb', -9800, 700, -8000, 150, 90);
}

function createBuilding(scene, modelPath, pos_x, pos_y, pos_z, scale, rotation = 0) {
    gltfLoader.load(modelPath, function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(scale, scale, scale);
        model.rotateY(THREE.MathUtils.degToRad(rotation));
        model.traverse(c => {
            c.castShadow = true;
        });
        scene.add(model);
    });
}