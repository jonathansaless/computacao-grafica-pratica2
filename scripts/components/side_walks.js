import * as THREE from "three";
import { textureLoader } from "../constants/loaders.js";

function createSideWalk(scene, pos_x, pos_y, pos_z, rotation, width, length) {
    const sidewalkGeometry = new THREE.BoxGeometry(width, 60, length);
    const sidewalkMaterial = new THREE.MeshStandardMaterial({
        map:
            textureLoader.load('/assets/textures/calcada.avif', function (texture) {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(2, 2);
            })
    });

    const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
    sidewalk.position.set(pos_x, pos_y, pos_z);
    sidewalk.rotation.y = THREE.MathUtils.degToRad(rotation);
    sidewalk.receiveShadow = true;
    scene.add(sidewalk);
}

function createCentralSideWalk(scene, radius, height) {
    const circleGeometry = new THREE.CylinderGeometry(
        radius, // raio
        radius, // raio
        height, // altura do cilindro
        32      // segmentos do circulo
    );

    const circleMaterial = new THREE.MeshStandardMaterial({
        map:
            textureLoader.load('/assets/textures/calcada.png')
    });

    const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);
    circleMesh.position.set(0, height / 2, 0);
    circleMesh.receiveShadow = true;
    scene.add(circleMesh);
}

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
    createCentralSideWalk(scene, 1300, 100);
}
