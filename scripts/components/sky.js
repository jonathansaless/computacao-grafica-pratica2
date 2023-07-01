import * as THREE from "three";
import { Sky } from "sky"

let sky, sun;

// Função para criar o céu com o sol na cena
export function createSky(scene, camera, renderer) {
    // Criação do objeto Sky
    sky = new Sky();
    // Define o tamanho do céu
    sky.scale.setScalar(450000);
    // Adiciona o céu à cena
    scene.add(sky);
    
    // Criação do vetor para representar o sol
    sun = new THREE.Vector3();

    // Configuração dos parâmetros do céu
    const uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = 10;
    uniforms['rayleigh'].value = 3;
    uniforms['mieCoefficient'].value = 0.005;
    uniforms['mieDirectionalG'].value = 0.7;

    // Configuração da posição do sol no céu
    const phi = THREE.MathUtils.degToRad(90 - 2); // Elevação do sol = 2
    const theta = THREE.MathUtils.degToRad(0); // Posição do sol horizontalmente

    // Define a posição do sol usando coordenadas esféricas
    sun.setFromSphericalCoords(1, phi, theta);

    // Define a posição do sol no shader do céu
    uniforms['sunPosition'].value.copy(sun);

    // Configuração do ajuste de exposição do renderizador
    renderer.toneMappingExposure = renderer.toneMappingExposure;
    // Renderiza a cena com o céu
    renderer.render(scene, camera);

    // Adiciona luzes à cena para gerar sombras
    addLight(scene);
}

// Função para adicionar luzes na cena para gerar sombras
function addLight(scene) {
    // Luz ambiente apenas para algumas partes não ficarem muito escuras
    const ambientLight = new THREE.AmbientLight(0x999999); 
    scene.add(ambientLight);

    // Luz direcional para representar o sol
    const light = new THREE.DirectionalLight(0xFFFFFF, 1); 
    light.position.set(0, 2000, 7000);
    light.target.position.set(0, 0, 2000);
    light.castShadow = true;

    // Configuração da qualidade da sombra
    light.shadow.mapSize.width = 2048; // Qualidade da sombra 2048x2048
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.top = 15000;
    light.shadow.camera.left = 15000;
    light.shadow.camera.right = -15000;
    light.shadow.camera.bottom = -15000;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 15000;

    // Adiciona a luz direcional e o alvo da luz à cena
    scene.add(light, light.target);
}
