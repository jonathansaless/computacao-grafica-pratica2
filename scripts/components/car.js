import * as THREE from "three";

// Criar a geometria do carro
export function createCar(scene) {
    const carGeometry = new THREE.BoxGeometry(0.2, 0.1, 0.4);
    const carMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    // Criar os carros em movimento
    const car1 = new THREE.Mesh(carGeometry, carMaterial);
    car1.position.set(-1, 0.05, 0);
    scene.add(car1);

    const car2 = new THREE.Mesh(carGeometry, carMaterial);
    car2.position.set(1, 0.05, 0);
    scene.add(car2);
}