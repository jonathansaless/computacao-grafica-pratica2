import * as THREE from "three";
import { textureLoader } from "../constants/loaders.js";

// Função para criar uma calçada lateral
function createSideWalk(scene, pos_x, pos_y, pos_z, rotation, width, length) {
    // Criação da geometria da calçada como um paralelepípedo (caixa)
    const sidewalkGeometry = new THREE.BoxGeometry(width, 60, length);
    // Criação do material da calçada com uma textura de calcada.avif
    const sidewalkMaterial = new THREE.MeshStandardMaterial({
        map:
            textureLoader.load('/assets/textures/calcada.avif', function (texture) {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(2, 2);
            })
    });

    // Criação do objeto Mesh para representar a calçada
    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    // Definindo a posição da calçada
    sidewalk.position.set(pos_x, pos_y, pos_z);
    // Definindo a rotação da calçada em torno do eixo Y (sentido anti-horário em radianos)
    sidewalk.rotation.y = THREE.MathUtils.degToRad(rotation);
    // Habilitando a calçada para receber sombras
    sidewalk.receiveShadow = true;
    // Adicionando a calçada à cena
    scene.add(sidewalk);
}

// Função para criar a calçada central
function createCentralSideWalk(scene, radius, height) {
    // Criação da geometria da calçada como um cilindro (círculo)
    const circleGeometry = new THREE.CylinderGeometry(
        radius, // raio
        radius, // raio
        height, // altura do cilindro
        32      // segmentos do círculo
    );

    // Criação do material da calçada com uma textura de calcada.png
    const circleMaterial = new THREE.MeshStandardMaterial({
        map:
            textureLoader.load('/assets/textures/calcada.png')
    });

    // Criação do objeto Mesh para representar a calçada
    const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
    // Definindo a posição da calçada
    circleMesh.position.set(0, height / 2, 0);
    // Habilitando a calçada para receber sombras
    circleMesh.receiveShadow = true;
    // Adicionando a calçada à cena
    scene.add(circleMesh);
}

// Função para criar todas as calçadas na cena
export function createSideWalks(scene) {
    // Calçadas externas
    createSideWalk(scene, 0, 1, 7250, 0, 16000, 1500);
    createSideWalk(scene, 0, 1, -7250, 0, 16000, 1500);
    createSideWalk(scene, 7250, 1, 0, 90, 13000, 1500);
    createSideWalk(scene, -7250, 1, 0, 90, 13000, 1500);

    // Calçadas internas
    createSideWalk(scene, 2800, 1, -20, 0, 3440, 1500);
    createSideWalk(scene, -2800, 1, -20, 0, 3440, 1500);
    createSideWalk(scene, -20, 1, 2800, 90, 3440, 1500);
    createSideWalk(scene, -20, 1, -2800, 90, 3440, 1500);
    createSideWalk(scene, -2625, 1, -4000, 0, 3790, 1000);
    createSideWalk(scene, 2625, 1, -4000, 0, 3790, 1000);
    createSideWalk(scene, -2625, 1, 4000, 0, 3790, 1000);
    createSideWalk(scene, 2625, 1, 4000, 0, 3790, 1000);
    createSideWalk(scene, 4020, 1, 2100, 90, 2800, 1000);
    createSideWalk(scene, -4020, 1, 2100, 90, 2800, 1000);
    createSideWalk(scene, 4020, 1, -2100, 90, 2800, 1000);
    createSideWalk(scene, -4020, 1, -2100, 90, 2800, 1000);

    // Calçadas centrais
    createCentralSideWalk(scene, 1500, 100);
    createCentralSideWalk(scene, 1300, 200);
}
