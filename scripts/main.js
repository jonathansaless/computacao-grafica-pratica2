// Importar a biblioteca Three.js
import * as THREE from "three";

import { createPublicSquare } from "./components/public_square.js";
import { createPeople } from "./components/people.js";
import {OrbitControls} from "orbitControls";

let camera, scene, renderer;
const clock = new THREE.Clock();

init();

function init() {
    // SCENE
    scene = new THREE.Scene();

    // RENDERIZADOR
    renderer = new THREE.WebGLRenderer();
    // renderer.setClearColor(0x1F1F1F, 1);
    // Renderizador ajusta a qualidade de renderização de acordo com a taxa de pixel do dispositivo
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Habilitando sombras ao renderizados

    document.body.appendChild(renderer.domElement);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // CÂMERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
    camera.position.set(0, 1000, 6500);

    // CONTROLADOR
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 2000;
    controls.maxDistance = 6000;
    // desabilita a movimentação com o botão direito do mouse
    // controls.enablePan = false;
    // Defina o ângulo mínimo de rotação
    const minPolarAngle = THREE.MathUtils.degToRad(90); // Por exemplo, 90 graus
    // Aplique o limite superior aos controles, sendo possível visualizar apenas a parte de cima da tela
    controls.maxPolarAngle = minPolarAngle;
    
    createPublicSquare(scene, camera, renderer);
}

// const light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
// scene.add(light);

// ao mudar o tamanho da tela, será renderizado no novo tamanho da tela. Isso torna o projeto mais responsivo
window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

const { updateAnimations } = createPeople(scene);


// Função de animação
function animate() {
    requestAnimationFrame(animate);
    
    // Obtenha o tempo decorrido desde o último frame
    const deltaTime = clock.getDelta();

    // Atualize a animação da personagem
    updateAnimations(deltaTime);

    renderer.render(scene, camera);
}

// Iniciar a animação
animate();