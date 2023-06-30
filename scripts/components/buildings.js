import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Criação dos prédios
export function createBuildings(scene) {
    // Criação de cada prédio individualmente usando a função createBuilding
    // Passando a cena, o caminho do modelo, a posição x, y e z, a escala e a rotação (opcional) como parâmetros

    // Prédio 1
    createBuilding(scene, '/assets/models/buildings/building1.glb', 9000, 3000, -7400, 2000, -90);

    // Prédio 2
    createBuilding(scene, '/assets/models/buildings/building2.glb', 7400, -650, -2500, 50, -90);

    // Prédio 3
    createBuilding(scene, '/assets/models/buildings/building3.glb', -7400, -50, -1700, 250, 90);

    // Prédio 4
    createBuilding(scene, '/assets/models/buildings/building4.glb', -7800, -50, 2500, 6, 90);

    // Prédio 5
    createBuilding(scene, '/assets/models/buildings/building5.glb', 2000, 0, 8200, 110, 180);

    // Prédio 6
    createBuilding(scene, '/assets/models/buildings/building6.glb', -3900, -150, -7400, 50);

    // Prédio 7
    createBuilding(scene, '/assets/models/buildings/building7.glb', -500, 200, -7800, 400);

    // Prédio 8
    createBuilding(scene, '/assets/models/buildings/building8.glb', 7800, 1500, 8000, 200, 180);

    // Prédio 9
    createBuilding(scene, '/assets/models/buildings/building9.glb', -9800, 1800, 7500, 70, 90);

    // Prédio 10
    createBuilding(scene, '/assets/models/buildings/building10.glb', -9800, 700, -8000, 150, 90);
}

// Função para criar um prédio na cena
function createBuilding(scene, modelPath, pos_x, pos_y, pos_z, scale, rotation = 0) {
    // Carregando o modelo usando o gltfLoader
    gltfLoader.load(modelPath, function (gltf) {
        // Obtendo a cena do modelo
        const model = gltf.scene;

        // Definindo a posição do modelo na cena
        model.position.set(pos_x, pos_y, pos_z);

        // Definindo a escala do modelo
        model.scale.set(scale, scale, scale);

        // Girando o modelo em torno do eixo Y (rotação)
        model.rotateY(THREE.MathUtils.degToRad(rotation));

        // Definindo a propriedade castShadow como true para todos os objetos do modelo
        model.traverse(c => {
            c.castShadow = true;
        });

        // Adicionando o modelo à cena
        scene.add(model);
    });
}
