import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { loader } from "../constants/loaders.js";
import { createParkBench } from "./park_benchs.js";
import { degreesToRadians } from "../constants/convertions.js";
import { createSideWalkBigger } from "./side_walks.js";

// Criar a geometria da praça
export function createSquare(scene) {
  const squareGeometry = new THREE.BoxGeometry(9000, 20, 9000);
  const squareMaterial = new THREE.MeshBasicMaterial({
    map: loader.load('/assets/textures/grama.jpg')
  });
  const square = new THREE.Mesh(squareGeometry, squareMaterial);
  scene.add(square);

  createSideWalkBigger(scene, 2800, 1, -20, 0);
  createSideWalkBigger(scene, -2800, 1, -20, 0);
  createSideWalkBigger(scene, -20, 1, 2800, Math.PI / 2);
  createSideWalkBigger(scene, -20, 1, -2800, Math.PI / 2);

  // OK CALÇADA CENTRAL
  createCalcadaCentralBigger(scene);
  createCalcadaCentralSmaller(scene);
  createStatue(scene);

  // OK BANCOS DA PRAÇA
  createParkBench(scene, 2400, 0, -600, 0);
  createParkBench(scene, -2400, 0, 600, 180);
  createParkBench(scene, 600, 0, 2400, -90);
  createParkBench(scene, -600, 0, -2400, 90);

}

function createStatue(scene) {
  // Carregar um modelo GLTF no meio da praça
  const gltfLoader = new GLTFLoader();
  gltfLoader.load('/assets/models/juliaan_dillens.glb', function (gltf) {
    const model = gltf.scene;
    model.position.set(0, 20, 0);
    model.scale.set(100, 100, 100);
    scene.add(model);
  });
}

function createCalcadaCentralBigger(scene) {
  // Criar a geometria do cilindro (círculo)
  const circleGeometry = new THREE.CylinderGeometry(
    1500, // raio
    1500, // raio
    100,  // altura do cilindro
    32    // segmentos do circulo
  );

  // Criar o material do círculo
  const circleMaterial = new THREE.MeshBasicMaterial({
    map:
      loader.load('/assets/textures/calcada.png')
  });
  // Criar a malha (mesh) do círculo
  const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);

  circleMesh.position.set(0, 70, 0);
  // Adicionar o círculo à cena
  scene.add(circleMesh);
}

function createCalcadaCentralSmaller(scene) {
  // Criar a geometria do cilindro (círculo)
  const circleGeometry = new THREE.CylinderGeometry(
    1300, // raio
    1300, // raio
    100,  // altura do cilindro
    32    // segmentos do circulo
  );

  // Criar o material do círculo
  const circleMaterial = new THREE.MeshBasicMaterial({
    map:
      loader.load('/assets/textures/calcada.png')
  });
  // Criar a malha (mesh) do círculo
  const circleMesh = new THREE.Mesh(circleGeometry, circleMaterial);

  circleMesh.position.set(0, 170, 0);
  // Adicionar o círculo à cena
  scene.add(circleMesh);
}