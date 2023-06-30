import * as THREE from "three";
import { loader } from "../constants/loaders.js";

export function createLawn(scene) {
    const lawnGeometry = new THREE.BoxGeometry(9000, 20, 9000);
    const lawnMaterial = new THREE.MeshStandardMaterial({
        map: loader.load('/assets/textures/grama.jpg', function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(4, 4);
        })
    });
    const lawn = new THREE.Mesh(lawnGeometry, lawnMaterial);
    lawn.receiveShadow = true;
    scene.add(lawn);
}