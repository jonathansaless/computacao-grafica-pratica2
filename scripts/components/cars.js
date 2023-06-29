import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";

// Criar a geometria do carro
export function createCar(scene, renderer, camera) {
    const loader = new GLTFLoader();

    loader.load('/assets/models/cartoon_car.glb', function (glb) {
        const car = glb.scene;
        car.scale.set(100, 100, 100);
        scene.add(car);

        // Defina a posição inicial e final do modelo
        const positions = [
            new THREE.Vector3(5000, 0.1, -5000),
            new THREE.Vector3(5000, 0.1, 5000),
            new THREE.Vector3(-5000, 0.1, 5000),
            new THREE.Vector3(-5000, 0.1, -5000),
            new THREE.Vector3(5000, 0.1, -5000)
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