import * as THREE from "three";
import { Sky } from "sky"

let sky, sun;

// Criação do Céu com o Sol
export function createSky(scene, camera, renderer) {

    sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky);
    
    sun = new THREE.Vector3();

    const uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = 10;
    uniforms['rayleigh'].value = 3;
    uniforms['mieCoefficient'].value = 0.005;
    uniforms['mieDirectionalG'].value = 0.7;

    const phi = THREE.MathUtils.degToRad(90 - 2); // elevação do sol = 2
    const theta = THREE.MathUtils.degToRad(0); // posição do sol horizontalmente

    sun.setFromSphericalCoords(1, phi, theta);

    uniforms['sunPosition'].value.copy(sun);

    renderer.toneMappingExposure = renderer.toneMappingExposure;
    renderer.render(scene, camera);

    addLight(scene);
}

// Adição de luzes na cena para gerar sombras
function addLight(scene) {
    // luz ambiente apenas para algumas partes não ficarem muito escuras
    const ambientLight = new THREE.AmbientLight(0x999999); 
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xFFFFFF, 1); 
    light.position.set(0, 2000, 7000);
    light.target.position.set(0, 0, 2000);
    light.castShadow = true;

    light.shadow.mapSize.width = 2048; // Qualidade da sombra 2048x2048
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.top = 15000;
    light.shadow.camera.left = 15000;
    light.shadow.camera.right = -15000;
    light.shadow.camera.bottom = -15000;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 15000;

    scene.add(light, light.target);
}