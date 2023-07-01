import * as THREE from "three";

import { createPublicSquare } from "./components/public_square.js";
import { createPeople } from "./components/people.js";
import { OrbitControls } from "orbitControls";

let camera, scene, renderer;
const clock = new THREE.Clock();

init();

function init() {
    // CRIAÇÃO DA CENA
    scene = new THREE.Scene();

    // CRIAÇÃO DO RENDERIZADOR
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Habilitar sombras no renderizador
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // CRIAÇÃO DA CÂMERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
    camera.position.set(0, 1000, 6500);

    // CRIAÇÃO DO CONTROLADOR
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1000;
    controls.maxDistance = 6500;
    
    // Definir o ângulo maximo de rotação
    const maxPolarAngle = THREE.MathUtils.degToRad(90); // 90 graus
    // Aplicar o limite superior aos controles, permitindo visualizar apenas a parte de cima da tela
    controls.maxPolarAngle = maxPolarAngle;

    // CRIAÇÃO DA PRAÇA PÚBLICA
    createPublicSquare(scene, camera, renderer);
}

// Função de redimensionamento da janela
window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Criação das animações das pessoas
const { updateAnimations } = createPeople(scene);

// Função de animação
function animate() {
    requestAnimationFrame(animate);

    // Obtenção do tempo decorrido desde o último frame
    const deltaTime = clock.getDelta();

    // Atualização das animações das pessoas
    updateAnimations(deltaTime);

    renderer.render(scene, camera);
}

// Iniciar a animação
animate();
