import * as THREE from "three";
import { textureLoader } from "../constants/loaders.js";

// Função para criar ruas na cena
export function createStreets(scene) {
    // Criação de ruas nas posições especificadas
    createStreet(scene, 5500, 0, 0, 2000, 40, 13000);
    createStreet(scene, -5500, 0, 0, 2000, 40, 13000);
    createStreet(scene, 0, 0, 5500, 2000, 40, 9000, 90);
    createStreet(scene, 0, 0, -5500, 2000, 40, 9000, 90);
}

function createStreet(scene, pos_x, pos_y, pos_z, width, height, length, rotation = 0) {
    // Criação da geometria da rua usando BoxGeometry
    const streetGeometry = new THREE.BoxGeometry(width, height, length);
    // Criação do material da rua usando MeshStandardMaterial e carregando uma textura
    const streetMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load('/assets/textures/estrada.jpg')
    });

    // Criação do objeto da rua usando a geometria e o material definidos
    const street = new THREE.Mesh(streetGeometry, streetMaterial);
    // Define a posição da rua
    street.position.set(pos_x, pos_y, pos_z);
    // Define a rotação da rua
    street.rotation.y = THREE.MathUtils.degToRad(rotation);
    // Habilita o recebimento de sombra para a rua
    street.receiveShadow = true;
    // Adiciona a rua à cena
    scene.add(street);
}
