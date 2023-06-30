import * as THREE from "three";

// export function addLight(scene){
//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(0, 0, 0);
//     light.castShadow = true;
//     light.shadow.mapSize.width = 1024; // Largura do mapa de sombras
//     light.shadow.mapSize.height = 1024; // Altura do mapa de sombras
//     light.shadow.camera.near = 0.5; // Plano de corte próximo da câmera de sombra
//     light.shadow.camera.far = 500; // Plano de corte distante da câmera de sombra
//     scene.add(light);
// }

export function addLight(scene) {
    const light = new THREE.DirectionalLight(0xF7C869, 0.4); // soft white light

    light.position.set(-30, 300, 1500);
    light.target.position.set(-150, 0, -200);
    light.castShadow = true;

    let d = 4000;
    let mapSize = 11000;

    light.shadow.radius = 1000;
    light.shadow.mapSize.width = mapSize;
    light.shadow.mapSize.height = mapSize;
    light.shadow.camera.top = light.shadow.camera.right = -d;
    light.shadow.camera.bottom = light.shadow.camera.left = d;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 5000;

    scene.add(light, light.target);
}



// light.shadow.mapSize.width = 1024;
// light.shadow.mapSize.height = 1024;
// light.shadow.camera.near = 0.5;
// light.shadow.camera.far = 500;
// cube.shadow.mapSize.width = 1024;
// cube.shadow.mapSize.height = 1024;