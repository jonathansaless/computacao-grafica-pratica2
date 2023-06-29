import * as THREE from "three";
import { Sky } from "sky"

export function createSky(scene, renderer) {
    const sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    // Configurações do sol
    const sun = new THREE.Vector3();
    const inclination = 0.5;
    const azimuth = 0.005;
    const distance = 100;

    // Posiciona o sol com base nos ângulos de inclinação, azimute e distância
    sun.setFromSphericalCoords(distance, inclination, azimuth);

    // Configura a luz direcional
    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.copy(sun);
    scene.add(sunLight);

    sky.material.uniforms['sunPosition'].value.copy(sun);
    scene.environment = pmremGenerator.fromScene(sky).texture;
}

let sky, sun;

export function initSky(scene, camera, renderer) {

    // Add Sky
    sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky);

    sun = new THREE.Vector3();

    const uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = 10;
    uniforms['rayleigh'].value = 3;
    uniforms['mieCoefficient'].value = 0.005;
    uniforms['mieDirectionalG'].value = 0.7;

    const phi = THREE.MathUtils.degToRad(90 - 2); // elevação do sol
    const theta = THREE.MathUtils.degToRad(180); // distância angular medida sobre o horizonte

    sun.setFromSphericalCoords(1, phi, theta);

    uniforms['sunPosition'].value.copy(sun);

    renderer.toneMappingExposure = renderer.toneMappingExposure;
    renderer.render(scene, camera);

}
// export function addSunAndSky(scene) {
//     // Configurações do céu
//     const sky = new Sky();
//     sky.scale.setScalar(10000);
//     scene.add(sky);

//     // Configurações do sol
//     const sun = new THREE.Vector3();
//     const inclination = 0.5;
//     const azimuth = 0.25;
//     const distance = 10000;

//     // Posiciona o sol com base nos ângulos de inclinação, azimute e distância
//     sun.setFromSphericalCoords(distance, inclination, azimuth);

//     // Configura a luz direcional
//     const sunLight = new THREE.DirectionalLight(0xffffff, 1);
//     sunLight.position.copy(sun);
//     scene.add(sunLight);

//     // Atualiza a posição do sol e do céu de acordo com a câmera
//     function updateSunAndSky(camera) {
//         sunLight.position.copy(sun);
//         sky.material.uniforms['sunPosition'].value.copy(sun);
//         sky.material.uniforms['rayleigh'].value = 2;
//         sky.material.uniforms['mieCoefficient'].value = 0.005;
//         sky.material.uniforms['mieDirectionalG'].value = 0.8;
//     }

//     return { updateSunAndSky };
// }
// export function createSky2(scene, renderer) {
//     const sky = new Sky();
//     sky.scale.setScalar(10000);
//     scene.add(sky);

//     const pmremGenerator = new THREE.PMREMGenerator(renderer);
//     const sun = new THREE.Vector3();
//     const theta = Math.PI * (0.49 - 0.5);
//     const phi = 2 * Math.PI * (0.205 - 0.5);
//     console.log(Math.cos(phi), Math.sin(phi) * Math.sin(theta), -Math.sin(phi) * Math.cos(theta));
//     sun.x = Math.cos(phi);
//     sun.y = Math.sin(phi) * Math.sin(theta);
//     sun.z = -Math.sin(phi) * Math.cos(theta);
//     sky.material.uniforms['sunPosition'].value.copy(sun);
//     scene.environment = pmremGenerator.fromScene(sky).texture;
// }