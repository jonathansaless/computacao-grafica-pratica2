import * as THREE from "three";
import { textureLoader } from "../constants/loaders.js";

// Criação do Gramado da Praça
export function createLawn(scene) {
    const lawnGeometry = new THREE.BoxGeometry(9000, 20, 9000);
    const lawnMaterial = new THREE.MeshStandardMaterial({
        map: textureLoader.load('/assets/textures/grama.jpg', function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(4, 4);
        })
    });
    const lawn = new THREE.Mesh(lawnGeometry, lawnMaterial);
    lawn.receiveShadow = true;
    scene.add(lawn);
}