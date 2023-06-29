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

export function addLight(scene){
    // adicionando uma luz ambiente. Ela não gera sombras
    const ambientLight = new THREE.AmbientLight(0x999999);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xFFFFFF);
    scene.add(spotLight);
    spotLight.intensity = 1.2;
    spotLight.angle = 0.45;
    spotLight.penumbra = 0.3;
    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 5;
    spotLight.shadow.camera.far = 10;
    spotLight.shadow.focus = 1;
    
    
}



// light.shadow.mapSize.width = 1024;
// light.shadow.mapSize.height = 1024;
// light.shadow.camera.near = 0.5;
// light.shadow.camera.far = 500;
// cube.shadow.mapSize.width = 1024;
// cube.shadow.mapSize.height = 1024;