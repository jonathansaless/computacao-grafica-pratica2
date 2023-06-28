// Importar a biblioteca Three.js
import * as THREE from "./build/three.module.js";
// Biblioteca serve para que seja possível controlar a tela pelo mouse
import {OrbitControls} from "./jsm/controls/OrbitControls.js";

import { GLTFLoader } from "./jsm/loaders/GLTFLoader.js";

import { Sky } from './jsm/objects/Sky.js'

// Criar a cena
const scene = new THREE.Scene();

// Criar a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 1;

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




// cria controlador para que usuário consiga movimentar a tela com o mouse
const controlador = new OrbitControls(camera, renderer.domElement);
// loader servirá para colocar imagens dentro do objetos
var loader = new THREE.TextureLoader();

// Criar a geometria da praça
const squareGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const squareMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const square = new THREE.Mesh(squareGeometry, squareMaterial);
scene.add(square);

// Criar a geometria das ruas
const streetGeometry = new THREE.BoxGeometry(1, 0.1, 3);
const streetMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });

// Criar as ruas ao redor da praça
const street1 = new THREE.Mesh(streetGeometry, streetMaterial);
street1.position.set(2, 0, 0);
scene.add(street1);

const street2 = new THREE.Mesh(streetGeometry, streetMaterial);
street2.position.set(-2, 0, 0);
scene.add(street2);

const street3 = new THREE.Mesh(streetGeometry, streetMaterial);
street3.position.set(0, 0, 2);
street3.rotation.y = Math.PI / 2;
scene.add(street3);

const street4 = new THREE.Mesh(streetGeometry, streetMaterial);
street4.position.set(0, 0, -2);
street4.rotation.y = Math.PI / 2;
scene.add(street4);

// Criar a geometria do carro
const carGeometry = new THREE.BoxGeometry(0.2, 0.1, 0.4);
const carMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Criar os carros em movimento
const car1 = new THREE.Mesh(carGeometry, carMaterial);
car1.position.set(-1, 0.05, 0);
scene.add(car1);

const car2 = new THREE.Mesh(carGeometry, carMaterial);
car2.position.set(1, 0.05, 0);
scene.add(car2);

// const light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
// scene.add(light);

loader = new GLTFLoader();
loader.load('/scripts/models/cartoon_car.glb', function(glb) {
    //glb.scale.set(50, 50, 50);
    scene.add(glb.scene)
});

const sky = new Sky();

sky.scale.setScalar(10000);

scene.add(sky);

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const sun = new THREE.Vector3();

const theta = Math.PI * (0.49 - 0.5);
const phi = 2 * Math.PI * (0.205 - 0.5);

sun.x = Math.cos(phi);
sun.y = Math.sin(phi) * Math.sin(theta);
sun.z = -Math.sin(phi) * Math.cos(theta);

sky.material.uniforms['sunPosition'].value.copy(sun);

scene.environment = pmremGenerator.fromScene(sky).texture;

// ao mudar o tamanho da tela, será renderizado no novo tamanho da tela. Isso torna o projeto mais responsivo
window.onresize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Função de animação
function animate() {
    requestAnimationFrame(animate);

    // Mover os carros
    car1.position.z += 0.01;
    car2.position.z -= 0.01;

    // Verificar se os carros chegaram ao final da rua e reiniciar a posição
    if (car1.position.z > 2) {
        car1.position.z = -2;
    }

    if (car2.position.z < -2) {
        car2.position.z = 2;
    }

    renderer.render(scene, camera);
}

// Iniciar a animação
animate();
