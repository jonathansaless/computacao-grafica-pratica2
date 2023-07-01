import * as THREE from "three";
import { textureLoader } from "../constants/loaders.js";

// Criação do Gramado da Praça
export function createLawn(scene) {
    // Criando a geometria do gramado como uma caixa retangular
    const lawnGeometry = new THREE.BoxGeometry(9000, 20, 9000);

    // Criando o material do gramado com uma textura de grama
    const lawnMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load('/assets/textures/grama.jpg', function (texture) {
            // Carregando a textura de grama e configurando suas propriedades de repetição
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(4, 4);
        })
    });

    // Criando um objeto Mesh para representar o gramado
    const lawn = new THREE.Mesh(lawnGeometry, lawnMaterial);

    // Permitindo que o gramado receba sombras
    lawn.receiveShadow = true;

    // Adicionando o gramado à cena
    scene.add(lawn);
}
