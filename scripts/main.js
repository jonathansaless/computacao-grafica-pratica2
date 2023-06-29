// Importar a biblioteca Three.js
import * as THREE from "three";
import { setController } from "./components/controller.js";
import { createSky } from "./components/sky.js";
import { createStreets } from "./components/streets.js";
import { createSquare } from "./components/public_square.js";
import { GLTFLoader } from "GLTFLoader";

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
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);

    // CÂMERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
    camera.position.set(0, 1000, 6500);

    
    setController(camera, renderer);
    createSky(scene, renderer);
    //createCar();
    createSquare(scene);
    createStreets(scene);
}


// const light = new THREE.DirectionalLight(0xFFFFFF, 0.5);
// scene.add(light);

// ao mudar o tamanho da tela, será renderizado no novo tamanho da tela. Isso torna o projeto mais responsivo
window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}


// Criar a geometria do carro
function createCar() {
    const loader = new GLTFLoader();

    loader.load('/assets/models/cartoon_car.glb', function (glb) {
        const car = glb.scene;
        car.scale.set(35, 35, 35);
        scene.add(car);

        // Defina a posição inicial e final do modelo
        const positions = [
            new THREE.Vector3(4700, 0.1, -4600),
            new THREE.Vector3(4700, 0.1, 4600),
            new THREE.Vector3(-4700, 0.1, 4600),
            new THREE.Vector3(-4700, 0.1, -4600),
            new THREE.Vector3(4700, 0.1, -4600)
        ];

        // Defina a velocidade da animação
        const speed = 0.002;

        // Defina uma variável para rastrear o progresso da animação
        let progress = 0;

        // Defina o índice inicial do vetor de posições
        let positionIndex = 0;

        // Atualize a posição do modelo no loop de renderização
        function update() {
            requestAnimationFrame(update);

            // Obtenha a posição inicial e final com base no índice atual
            const initialPosition = positions[positionIndex];
            const targetPosition = positions[positionIndex + 1];

            // Interpole a posição do modelo entre a posição inicial e final com base no progresso
            car.position.lerpVectors(initialPosition, targetPosition, progress);

            // Atualize o progresso da animação
            progress += speed;

            // Verifique se a animação chegou ao fim
            if (progress >= 1) {
                progress = 0; // Reinicie o progresso para iniciar a próxima animação
                positionIndex++; // Avance para a próxima posição no vetor
                if (positionIndex >= positions.length - 1) {
                    positionIndex = 0; // Reinicie o índice para começar novamente
                }

                // Calcule a direção do movimento
                const direction = targetPosition.clone().sub(initialPosition).normalize();

                // Calcule o ângulo de rotação
                const angle = Math.atan2(-direction.z, direction.x);

                // Aplique a rotação ao modelo
                car.rotation.y = angle;
            }

            renderer.render(scene, camera);
        }

        // Inicie a animação
        update();
    });
}

// Função de animação
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Iniciar a animação
animate();