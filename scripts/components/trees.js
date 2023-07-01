import { gltfLoader } from "../constants/loaders.js";

// Função para criar árvores na cena
export function createTrees(scene) {
    // Criação de árvores nas posições especificadas
    createTree(scene, 2300, 0, 1800);
    createTree(scene, -2300, 0, 1800);
    createTree(scene, 2300, 0, -2200);
    createTree(scene, -2000, 0, -2200);
}

function createTree(scene, pos_x, pos_y, pos_z) {
    // Carrega o modelo 3D da árvore usando o gltfLoader
    gltfLoader.load('/assets/models/trees/oak_trees.glb', function (glb) {
        // Obtém o modelo do arquivo glb
        const model = glb.scene;
        // Define a posição da árvore
        model.position.set(pos_x, pos_y, pos_z);
        // Define a escala da árvore
        model.scale.set(1300, 1500, 1300);
        // Define a propriedade castShadow de todos os objetos do modelo como true
        model.traverse(c => {
            c.castShadow = true;
        });
        // Adiciona o modelo da árvore à cena
        scene.add(model);
    });
}
