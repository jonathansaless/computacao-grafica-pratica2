import { gltfLoader } from "../constants/loaders.js";

export function createTrees(scene) {
    createTree(scene, 2300, 0, 1800);
    createTree(scene, -2300, 0, 1800);
    createTree(scene, 2300, 0, -2200);
    createTree(scene, -2000, 0, -2200);
}

function createTree(scene, pos_x, pos_y, pos_z) {
    gltfLoader.load('/assets/models/trees/oak_trees.glb', function (glb) {
        const model = glb.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(1300, 1500, 1300);
        model.traverse(c => {
            c.castShadow = true;
        });
        scene.add(model);
    });
}
