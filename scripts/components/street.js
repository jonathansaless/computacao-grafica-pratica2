import * as THREE from "three";
import { loader } from "../constants/loaders.js";

// Criar a geometria das ruas
export function createStreets(scene) {
    

    createStreetBigger(scene, 5000, 0, 0);
    createStreetBigger(scene, -5000, 0, 0);


    createStreetSmaller(scene, 0, 0, 5000, Math.PI / 2);
    createStreetSmaller(scene, 0, 0, -5000, Math.PI / 2);

}

function createStreetBigger(scene, pos_x, pos_y, pos_z) {
    const streetGeometry = new THREE.BoxGeometry(1000, 40, 11000);
    const streetMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/estrada.jpg')
    });

    const street = new THREE.Mesh(streetGeometry, streetMaterial);
    street.position.set(pos_x, pos_y, pos_z);
    scene.add(street);
}

function createStreetSmaller(scene, pos_x, pos_y, pos_z, rotation) {
    const streetGeometry = new THREE.BoxGeometry(1000, 40, 9000);
    const streetMaterial = new THREE.MeshBasicMaterial({
        map:
            loader.load('/assets/textures/estrada.jpg')
    });
    
    const street = new THREE.Mesh(streetGeometry, streetMaterial);
    street.position.set(pos_x, pos_y, pos_z);
    street.rotation.y = rotation;
    scene.add(street);
}