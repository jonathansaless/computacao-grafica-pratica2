import * as THREE from "three";
import { loader } from "../constants/loaders.js";
import { degreesToRadians } from "../constants/convertions.js";

export function createSideWalkBigger(scene, pos_x, pos_y, pos_z, rotation) {
    // Geometria das Calçadas
    const sidewalkGeometry = new THREE.BoxGeometry(3440, 60, 1500);
    const sidewalkMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/calcada.avif')
    });

    // Posicionando Calçada
    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    sidewalk.position.set(pos_x, pos_y, pos_z);
    sidewalk.rotation.y = degreesToRadians(rotation);
    scene.add(sidewalk);
}

export function createSideWalkMediun(scene, pos_x, pos_y, pos_z, rotation) {
    // Geometria das Calçadas
    const sidewalkGeometry = new THREE.BoxGeometry(3790, 60, 1000);
    const sidewalkMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/calcada.avif')
    });

    // Posicionando Calçada
    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    sidewalk.position.set(pos_x, pos_y, pos_z);
    sidewalk.rotation.y = degreesToRadians(rotation);
    scene.add(sidewalk);
}

export function createSideWalkSmaller(scene, pos_x, pos_y, pos_z, rotation) {
    // Geometria das Calçadas
    const sidewalkGeometry = new THREE.BoxGeometry(2800, 60, 1000);
    const sidewalkMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/calcada.avif')
    });

    // Posicionando Calçada
    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    sidewalk.position.set(pos_x, pos_y, pos_z);
    sidewalk.rotation.y = degreesToRadians(rotation);
    scene.add(sidewalk);
}

export function createCentralSideWalkBigger(scene) {
    // Criar a geometria do cilindro (círculo)
    const circleGeometry = new THREE.CylinderGeometry(
        1500, // raio
        1500, // raio
        100,  // altura do cilindro
        32    // segmentos do circulo
    );

    // Criar o material do círculo
    const circleMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/calcada.png')
    });
    // Criar a malha (mesh) do círculo
    const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);

    circleMesh.position.set(0, 70, 0);
    // Adicionar o círculo à cena
    scene.add(circleMesh);
}

export function createCentralSideWalkSmaller(scene) {
    // Criar a geometria do cilindro (círculo)
    const circleGeometry = new THREE.CylinderGeometry(
        1300, // raio
        1300, // raio
        100,  // altura do cilindro
        32    // segmentos do circulo
    );

    // Criar o material do círculo
    const circleMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/calcada.png')
    });
    // Criar a malha (mesh) do círculo
    const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);

    circleMesh.position.set(0, 170, 0);
    // Adicionar o círculo à cena
    scene.add(circleMesh);
}