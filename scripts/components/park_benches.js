import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Criação dos Bancos da Praça
export function createParkBenches(scene) {
    // Chamando a função createParkBench para criar cada banco individualmente e adicioná-los à cena
    createParkBench(scene, -2150, 0, 3600);
    createParkBench(scene, 2150, 0, 3600);
    createParkBench(scene, -2150, 0, -3600, 180);
    createParkBench(scene, 2150, 0, -3600, 180);
    createParkBench(scene, 3600, 0, 2150, 90);
    createParkBench(scene, -3600, 0, 2150, -90);
    createParkBench(scene, 3600, 0, -2150, 90);
    createParkBench(scene, -3600, 0, -2150, -90);
}

function createParkBench(scene, pos_x, pos_y, pos_z, rotation = 0) {
    // Carregando o modelo do banco da praça usando o gltfLoader
    gltfLoader.load('/assets/models/square_objects/park_bench.glb', function (gltf) {
        const model = gltf.scene;
        // Definindo a posição do banco
        model.position.set(pos_x, pos_y, pos_z);
        // Definindo a escala do banco
        model.scale.set(4, 4, 4);
        // Definindo a rotação do banco
        model.rotateY(THREE.MathUtils.degToRad(rotation));
        model.traverse(c => {
            c.castShadow = true;
        });
        // Adicionando o banco à cena
        scene.add(model);
    });
}
