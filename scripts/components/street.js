import * as THREE from "three";
import { loader } from "../constants/loaders.js";

// Criar a geometria das ruas
export function createStreets(scene) {
    const streetGeometry = new THREE.BoxGeometry(1000, 0.1, 11000);
    const streetMaterial = new THREE.MeshBasicMaterial({ map: 
        loader.load('/assets/textures/estrada.jpg') });

    // Criar as ruas ao redor da praça
    const street1 = new THREE.Mesh(streetGeometry, streetMaterial);
    street1.position.set(5000, 0, 0);
    scene.add(street1);

    const street2 = new THREE.Mesh(streetGeometry, streetMaterial);
    street2.position.set(-5000, 0, 0);
    scene.add(street2);

    const street3 = new THREE.Mesh(streetGeometry, streetMaterial);
    street3.position.set(0, 0, 5000);
    street3.rotation.y = Math.PI / 2;
    scene.add(street3);

    const street4 = new THREE.Mesh(streetGeometry, streetMaterial);
    street4.position.set(0, 0, -5000);
    street4.rotation.y = Math.PI / 2;
    scene.add(street4);

}