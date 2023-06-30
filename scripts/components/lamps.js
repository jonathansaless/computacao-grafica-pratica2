import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Criação das Lâmpadas da Praça
export function createParkLamps(scene) {
    // Criando lâmpadas da praça chamando a função createParkLamp com posições específicas
    createParkLamp(scene, -650, -20, 2500);
    createParkLamp(scene, 550, -20, -2500);
    createParkLamp(scene, -2500, -20, 650, 90);
    createParkLamp(scene, 2500, -20, -550, 90);

    createParkLamp(scene, -3700, -20, -3700, -45);
    createParkLamp(scene, 3700, -20, -3700, 45);
    createParkLamp(scene, -3700, -20, 3700, 45);
    createParkLamp(scene, 3700, -20, 3700, -45);
}

function createParkLamp(scene, pos_x, pos_y, pos_z, rotation = 0) {
    // Carregando o modelo da lâmpada usando o gltfLoader
    gltfLoader.load('/assets/models/square_objects/fancy_street_lamp.glb', function (gltf) {
        // Obtendo o modelo da lâmpada da cena carregada
        const model = gltf.scene;

        // Definindo a posição do modelo da lâmpada
        model.position.set(pos_x, pos_y, pos_z);

        // Definindo a escala do modelo da lâmpada
        model.scale.set(300, 300, 300);

        // Definindo a rotação do modelo da lâmpada
        model.rotateY(THREE.MathUtils.degToRad(rotation));

        // Definindo a propriedade castShadow como true para permitir a projeção de sombras
        model.traverse(c => {
            c.castShadow = true;
        });

        // Adicionando o modelo da lâmpada à cena
        scene.add(model);
    });
}
