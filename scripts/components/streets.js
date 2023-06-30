import * as THREE from "three";
import { loader } from "../constants/loaders.js";

export function createStreets(scene) {
    createStreet(scene, 5500, 0, 0, 2000, 40, 13000);
    createStreet(scene, -5500, 0, 0, 2000, 40, 13000);
    createStreet(scene, 0, 0, 5500, 2000, 40, 9000, 90);
    createStreet(scene, 0, 0, -5500, 2000, 40, 9000, 90);
}

function createStreet(scene, pos_x, pos_y, pos_z, width, height, length, rotation = 0) {
    const streetGeometry = new THREE.BoxGeometry(width, height, length);
    const streetMaterial = new THREE.MeshStandardMaterial({
        map: loader.load('/assets/textures/estrada.jpg')
    });

    const street = new THREE.Mesh(streetGeometry, streetMaterial);
    street.position.set(pos_x, pos_y, pos_z);
    street.rotation.y = THREE.MathUtils.degToRad(rotation);
    street.receiveShadow = true;
    scene.add(street);
}
