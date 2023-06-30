import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Criação das lixeiras da Praça
export function createParkDumps(scene) {
    // Criando lixeiras da praça chamando a função createParkDump com posições específicas
    createParkDump(scene, 650, 0, 3300);
    createParkDump(scene, -650, 0, -3300);
    createParkDump(scene, 3300, 0, -650);
    createParkDump(scene, -3300, 0, 650);
}

function createParkDump(scene, pos_x, pos_y, pos_z, rotation = 0) {
    // Carregando o modelo da lixeira usando o gltfLoader
    gltfLoader.load('/assets/models/square_objects/park_trash_can.glb', function (gltf) {
        // Obtendo o modelo da lixeira da cena carregada
        const model = gltf.scene;

        // Definindo a posição do modelo da lixeira
        model.position.set(pos_x, pos_y, pos_z);

        // Definindo a escala do modelo da lixeira
        model.scale.set(30, 30, 30);

        // Definindo a rotação do modelo da lixeira
        model.rotateY(THREE.MathUtils.degToRad(rotation));

        // Definindo a propriedade castShadow como true para permitir a projeção de sombras
        model.traverse(c => {
            c.castShadow = true;
        });

        // Adicionando o modelo da lixeira à cena
        scene.add(model);
    });
}
