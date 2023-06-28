// Importar a biblioteca Three.js
import * as THREE from "three";
import { setController } from "./components/controller.js";
import { createSky } from "./components/sky.js";
import { createStreets } from "./components/street.js";
import { createSquare } from "./components/public_square.js";

// Criar a cena
const scene = new THREE.Scene();
// Criar a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
camera.position.set(0, 1000, 6500);
// Criar o renderizador
const renderer = new THREE.WebGLRenderer();
// Setando cor de fundo
renderer.setClearColor(0x1F1F1F,1);
// Renderizador ajusta a qualidade de renderização de acordo com a taxa de pixel do dispositivo
renderer.setPixelRatio( window.devicePixelRatio );
// Setando o tamanho do rederizador, abaixo é setado o espaço disponível da janela em altura e largura
renderer.setSize(window.innerWidth, window.innerHeight);
// adiciona o renderizador na página

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

// Inicializando controlador de tela
setController(camera, renderer);
// loader servirá para colocar imagens dentro do objetos

// Criação do céu
createSky(scene, renderer);

createSquare(scene);


createStreets(scene);

// const light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
// scene.add(light);

// loader = new GLTFLoader();
// loader.load('/scripts/models/cartoon_car.glb', function(glb) {
//     //glb.scale.set(50, 50, 50);
//     scene.add(glb.scene)
// });

// ao mudar o tamanho da tela, será renderizado no novo tamanho da tela. Isso torna o projeto mais responsivo
window.onresize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Função de animação
function animate() {
    requestAnimationFrame(animate);

    // // Mover os carros
    // car1.position.z += 0.01;
    // car2.position.z -= 0.01;

    // // Verificar se os carros chegaram ao final da rua e reiniciar a posição
    // if (car1.position.z > 2) {
    //     car1.position.z = -2;
    // }

    // if (car2.position.z < -2) {
    //     car2.position.z = 2;
    // }

    renderer.render(scene, camera);
}

// Iniciar a animação
animate();
