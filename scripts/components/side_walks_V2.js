import * as THREE from "three";
import { loader } from "../constants/loaders.js";

export function createSideWalk(scene, pos_x, pos_y, pos_z, rotation, width, length) {
    // Geometria das Calçadas
    const sidewalkGeometry = new THREE.BoxGeometry(width, 60, length);
    const sidewalkMaterial = new THREE.MeshBasicMaterial({
        map: loader.load('/assets/textures/calcada.avif')
    });

    // Posicionando Calçada
    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    sidewalk.position.set(pos_x, pos_y, pos_z);
    sidewalk.rotation.y = THREE.MathUtils.degToRad(rotation);
    sidewalk.receiveShadow = true;
    scene.add(sidewalk);
}

export function createCentralSideWalk(scene, radius, height) {
    // Criar a geometria do cilindro (círculo)
    const circleGeometry = new THREE.CylinderGeometry(
        radius, // raio
        radius, // raio
        height, // altura do cilindro
        32      // segmentos do circulo
    );

    // Criar o material do círculo
    const circleMaterial = new THREE.MeshBasicMaterial({
        map: loader.load('/assets/textures/calcada.png')
    });

    // Criar a malha (mesh) do círculo
    const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
    circleMesh.position.set(0, height / 2, 0);
    circleMesh.receiveShadow = true;

    // Adicionar o círculo à cena
    scene.add(circleMesh);
}


// createSideWalk(scene, pos_x, pos_y, pos_z, rotation, width, length);
// createCentralSideWalk(scene, radius, height);
