import * as THREE from "three";
import { AnimationMixer } from 'three';
import { GLTFLoader } from "GLTFLoader";
import { FBXLoader } from "FBXLoader";
import { gltfLoader } from "../constants/loaders.js";
// import { loader } from "../constants/loaders";

export function createPeople(scene) {
    const people = [];

    people.push(createPerson(scene, '/assets/models/people/sophia_animated.glb', -0, 50, 0, 4, 0));

    // people.push(createPerson(scene, '/assets/models/people/sitting_man.glb', 2200, 0, -500, 130, 0));

    people.push(createPerson(scene, '/assets/models/people/man_top_model.glb', 0, 0, -7000, 200, 0));

    people.push(createPerson(scene, '/assets/models/people/walking_and_dancing_woman.glb', 0, 30, 3000, 310, 90));

    // people.push(createPerson(scene, '/assets/models/people/walking_and_dancing_woman.glb', 0, 30, 4000, 350, 90));

    // Função para atualizar as animações no loop de renderização
    function updateAnimations(deltaTime) {
        for (const person of people) {
            person.updateAnimation(deltaTime);
        }
    }

    return { updateAnimations };
}

function createPerson(scene, modelPath, pos_x, pos_y, pos_z, scale, rotation) {
    let mixer; // Variável para armazenar a instância de AnimationMixer

    // Carregar o modelo GLB da pessoa
    gltfLoader.load(modelPath, function (gltf) {
        const model = gltf.scene;
        model.position.set(pos_x, pos_y, pos_z);
        model.scale.set(scale, scale, scale);
        model.rotateY(THREE.MathUtils.degToRad(rotation));
        model.traverse(c => {
            c.castShadow = true;
        });
        scene.add(model);

        // Obter a animação de caminhada
        const animations = gltf.animations;
        if (animations && animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            // Adicionar a animação à mixer
            const animation = mixer.clipAction(animations[0]);
            animation.play(); // Iniciar a animação de caminhada
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