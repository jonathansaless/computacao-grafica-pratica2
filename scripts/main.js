// Importar a biblioteca Three.js
import * as THREE from "three";
import { setController } from "./components/controller.js";
import { createSky, initSky } from "./components/sky.js";
import { createStreets } from "./components/streets.js";
import { createSquare } from "./components/public_square.js";
import { createCar } from "./components/cars.js";
import { addLight } from "./components/light.js";

let camera, scene, renderer;

init();

function init() {
    // SCENE
    scene = new THREE.Scene();

    // RENDERIZADOR
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x1F1F1F, 1);
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


    setController(camera, renderer);
    // createSky(scene, renderer);
    createCar(scene, renderer, camera);
    initSky(scene, camera, renderer);
    createSquare(scene);
    createStreets(scene);
    addLight(scene);
}

// const light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
// scene.add(light);

// ao mudar o tamanho da tela, será renderizado no novo tamanho da tela. Isso torna o projeto mais responsivo
window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Função de animação
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Iniciar a animação
animate();