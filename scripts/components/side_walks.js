import * as THREE from "three";
import { loader } from "../constants/loaders.js";

export function createSideWalkBigger(scene, pos_x, pos_y, pos_z, rotation) {
    // Geometria das Calçadas
    const sidewalkGeometry = new THREE.BoxGeometry(3400, 60, 1500);
    const sidewalkMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/calcada.avif')
    });

    // Posicionando Calçada
    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    sidewalk.position.set(pos_x, pos_y, pos_z);
    sidewalk.rotation.y = rotation;
    scene.add(sidewalk);
}

export function createSideWalkMediun(scene, pos_x, pos_y, pos_z, rotation) {
    // Geometria das Calçadas
    const sidewalkGeometry = new THREE.BoxGeometry(3400, 60, 1500);
    const sidewalkMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/calcada.avif')
    });

    // Posicionando Calçada
    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    sidewalk.position.set(pos_x, pos_y, pos_z);
    sidewalk.rotation.y = rotation;
    scene.add(sidewalk);
}

export function createSideWalkSmaller(scene, pos_x, pos_y, pos_z, rotation) {
    // Geometria das Calçadas
    const sidewalkGeometry = new THREE.BoxGeometry(3400, 60, 1500);
    const sidewalkMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/calcada.avif')
    });

    // Posicionando Calçada
    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    sidewalk.position.set(pos_x, pos_y, pos_z);
    sidewalk.rotation.y = rotation;
    scene.add(sidewalk);
}