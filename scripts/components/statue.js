import { gltfLoader } from "../constants/loaders.js";

// Função para criar uma estátua na cena
export function createStatue(scene) {
    // Carrega o modelo da estátua usando o gltfLoader
    gltfLoader.load('/assets/models/square_objects/statue_juliaan_dillens.glb', function (glb) {
        const model = glb.scene;
        // Define a posição da estátua
        model.position.set(0, 20, 0);
        // Define a escala da estátua
        model.scale.set(100, 100, 100);
                
        // Habilita a emissão e o recebimento de sombra para o modelo
        model.castShadow = true;
        model.receiveShadow = true;
        
        // Adiciona o modelo da estátua à cena
        scene.add(model);
    });
}
