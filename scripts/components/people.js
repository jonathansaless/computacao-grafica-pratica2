import * as THREE from "three";
import { gltfLoader } from "../constants/loaders.js";

// Função para criar pessoas na cena
export function createPeople(scene) {
    const people = [];

    // Criação de pessoas individuais e armazenamento em um array
    people.push(createPerson(scene, '/assets/models/people/person1.glb', -2500, 50, -500, 4));
    people.push(createPerson(scene, '/assets/models/people/person2.glb', 0, 0, -7200, 200));
    people.push(createPerson(scene, '/assets/models/people/person3.glb', -500, 30, 3000, 310, 90));
    people.push(createPerson(scene, '/assets/models/people/person4.glb', 3600, 110, 2000, 150, 90));
    people.push(createPerson(scene, '/assets/models/people/person5.glb', -6800, 0, -2000, 380, 90));
    people.push(createPerson(scene, '/assets/models/people/person6.glb', 3700, 0, -2000, 130, 90));
    people.push(createPerson(scene, '/assets/models/people/person7.glb', -6800, 0, 2000, 4));
    people.push(createPerson(scene, '/assets/models/people/person8.glb', 2000, 0, -3650, 140, 180));

    // Função para atualizar as animações no loop de renderização
    function updateAnimations(deltaTime) {
        for (const person of people) {
            person.updateAnimation(deltaTime);
        }
    }

    return { updateAnimations };
}

function createPerson(scene, modelPath, pos_x, pos_y, pos_z, scale, rotation = 0) {
    let mixer; // Variável para armazenar a instância de AnimationMixer

    // Carregamento do modelo da pessoa usando o gltfLoader
    gltfLoader.load(modelPath, function (gltf) {
        const model = gltf.scene;
        // Definindo a posição da pessoa
        model.position.set(pos_x, pos_y, pos_z);
        // Definindo a escala da pessoa
        model.scale.set(scale, scale, scale);
        // Definindo a rotação da pessoa
        model.rotateY(THREE.MathUtils.degToRad(rotation));
        model.traverse(c => {
            c.castShadow = true;
        });
        // Adicionando a pessoa à cena
        scene.add(model);

        const animations = gltf.animations;
        if (animations && animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            // Adicionar a animação à mixer
            const animation = mixer.clipAction(animations[0]);
            animation.play(); // Iniciar a animação
        }
    });

    // Função para atualizar a animação no loop de renderização
    function updateAnimation(deltaTime) {
        if (mixer) {
            mixer.update(deltaTime);
        }
    }

    return { updateAnimation };
}
