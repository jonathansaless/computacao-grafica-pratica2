import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";
import { loader } from "../constants/loaders.js";

// Criar a geometria da praça
export function createSquare(scene) {
  const squareGeometry = new THREE.BoxGeometry(9000, 20, 9000);
  const squareMaterial = new THREE.MeshBasicMaterial({
    map: loader.load('/assets/textures/grama3.jpg')
  });
  const square = new THREE.Mesh(squareGeometry, squareMaterial);
  scene.add(square);

  // Criar calçadas 
  const sidewalkGeometry = new THREE.BoxGeometry(3400, 40, 1500);
  const sidewalkMaterial = new THREE.MeshBasicMaterial({
    map:
      loader.load('/assets/textures/calcada.avif')
  });

  createWalkBigger(scene, 2800, 1, -20, 0);
  createWalkBigger(scene, -2800, 1, -20, 0);
  createWalkBigger(scene, -20, 1, 2800, Math.PI / 2);
  createWalkBigger(scene, -20, 1, -2800, Math.PI / 2);

  // OK
  // createCalcadaCentralBigger(scene);
  // createCalcadaCentralSmaller(scene);
  // createStatue(scene); 

}

function createWalkBigger(scene, pos_x, pos_y, pos_z, rotation) {
  // Geometria das Calçadas
  const sidewalkGeometry = new THREE.BoxGeometry(3400, 60, 1500);
  const sidewalkMaterial = new THREE.MeshBasicMaterial({
    map:
      loader.load('/assets/textures/calcada.avif')
  });

  // Posicionando Calçada
  const sidewalk = new THREE.Mesh(sidewalkGeometry, sidewalkMaterial);
  sidewalk.position.set(pos_x, pos_y, pos_z);
  sidewalk.rotation.y = rotation;
  scene.add(sidewalk);
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