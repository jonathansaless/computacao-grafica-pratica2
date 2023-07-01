import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Criação do carro
export function createCar(scene, camera, renderer) {

    // Carregando o modelo do carro usando o gltfLoader
    gltfLoader.load('/assets/models/cars/cartoon_car.glb', function (glb) {
        // Obtendo a cena do modelo do carro
        const carModel = glb.scene;

        // Definindo a escala do modelo do carro
        carModel.scale.set(100, 100, 100);

        // Definindo a propriedade castShadow como true para permitir a projeção de sombras
        carModel.traverse(c => {
            c.castShadow = true;
        });

        // Adicionando o modelo do carro à cena
        scene.add(carModel);

        // Definindo as posições iniciais e finais do modelo do carro
        const positions = [
            new THREE.Vector3(5000, -70, -5000),
            new THREE.Vector3(5000, -70, 5000),
            new THREE.Vector3(-5000, -70, 5000),
            new THREE.Vector3(-5000, -70, -5000),
            new THREE.Vector3(5000, -70, -5000)
        ];

        // Definindo a velocidade da animação
        const speed = 0.002;

        // Variável para rastrear o progresso da animação
        let progress = 0;

        // Índice inicial do vetor de posições
        let positionIndex = 0;

        // Função de atualização para animar o carro
        function update() {
            requestAnimationFrame(update);

            // Obtendo a posição inicial e final com base no índice atual
            const initialPosition = positions[positionIndex];
            const targetPosition = positions[positionIndex + 1];

            // Interpolação da posição do modelo do carro entre a posição inicial e final com base no progresso
            carModel.position.lerpVectors(initialPosition, targetPosition, progress);

            // Atualização do progresso da animação
            progress += speed;

            // Verificando se a animação chegou ao fim
            if (progress >= 1) {
                progress = 0; // Reiniciando o progresso para iniciar a próxima animação
                positionIndex++; // Avançando para a próxima posição no vetor

                // Verificando se o índice atingiu o final do vetor e reiniciando-o se necessário
                if (positionIndex >= positions.length - 1) {
                    positionIndex = 0; // Reiniciando o índice para começar novamente
                }

                // Cálculo da direção do movimento
                const direction = targetPosition.clone().sub(initialPosition).normalize();

                // Cálculo do ângulo de rotação
                const angle = Math.atan2(-direction.z, direction.x);

                // Aplicando a rotação ao modelo do carro
                carModel.rotation.y = angle;
            }

            // Renderização da cena com o carro atualizado
            renderer.render(scene, camera);
        }

        // Iniciando a animação do carro
        update();
    });
}
