import * as THREE from "three";

import { loader } from "../constants/loaders.js";
import { createParkBench } from "./park_benches.js";
import { createCentralSideWalkBigger, createCentralSideWalkSmaller, createSideWalkBigger, createSideWalkMediun, createSideWalkOutside, createSideWalkSmaller } from "./side_walks.js";
import { createStatue } from "./statue.js";
import { createTree } from "./trees.js";
import { createBuilding2, createBuilding3, createBuilding4, createBuilding5, createBuilding6, createBuilding7 } from "./buildings.js";

// Criar a geometria da praça
export function createSquare(scene) {
  const squareGeometry = new THREE.BoxGeometry(9000, 20, 9000);
  const squareMaterial = new THREE.MeshBasicMaterial({
    map: loader.load('/assets/textures/grama.jpg')
  });
  const square = new THREE.Mesh(squareGeometry, squareMaterial);
  scene.add(square);

  
  // OK CALÇADA DE FORA
  createSideWalkOutside(scene, 0, 1, 6250, 0);
  createSideWalkOutside(scene, 0, 1, -6250, 0);
  createSideWalkOutside(scene, 6250, 1, 0, 90);
  createSideWalkOutside(scene, -6250, 1, 0, 90);

  // OK CALÇADAS MAIORIES QUE ENCONTRAM AO CENTRO
  // createSideWalkBigger(scene, 2800, 1, -20, 0);
  // createSideWalkBigger(scene, -2800, 1, -20, 0);
  // createSideWalkBigger(scene, -20, 1, 2800, 90);
  // createSideWalkBigger(scene, -20, 1, -2800, 90);

  // OK CALÇADAS DAS BEIRAS
  // createSideWalkMediun(scene, -2625, 1, -4000, 0);
  // createSideWalkMediun(scene, 2625, 1, -4000, 0);
  // createSideWalkMediun(scene, -2625, 1, 4000, 0);
  // createSideWalkMediun(scene, 2625, 1, 4000, 0);
  // createSideWalkSmaller(scene, 4020, 1, 2100, 90);
  // createSideWalkSmaller(scene, -4020, 1, 2100, 90);
  // createSideWalkSmaller(scene, 4020, 1, -2100, 90);
  // createSideWalkSmaller(scene, -4020, 1, -2100, 90);

  // OK CALÇADA CENTRAL
  // createCentralSideWalkBigger(scene);
  // createCentralSideWalkSmaller(scene);

  // OK CRIAÇÃO DE ESTÁTUA CENTRAL
  // createStatue(scene);

  // OK BANCOS DA PRAÇA
  // createParkBench(scene, 2400, 0, -600, 0);
  // createParkBench(scene, -2400, 0, 600, 180);
  // createParkBench(scene, 600, 0, 2400, -90);
  // createParkBench(scene, -600, 0, -2400, 90);

  // OK BANCOS DA PRAÇA
  // createParkBench(scene, -2150, 0, 3600, 0);
  // createParkBench(scene, 2150, 0, 3600, 0);
  // createParkBench(scene, -2150, 0, -3600, 180);
  // createParkBench(scene, 2150, 0, -3600, 180);

  // createParkBench(scene, 3600, 0, 2150, 90);
  // createParkBench(scene, -3600, 0, 2150, -90);
  // createParkBench(scene, 3600, 0, -2150, 90);
  // createParkBench(scene, -3600, 0, -2150, -90);

  // OK ÁRVORES
  // createTree(scene, 2300, 0, 1800);
  // createTree(scene, -2300, 0, 1800);
  // createTree(scene, 2300, 0, -2200);
  // createTree(scene, -2000, 0, -2200);

  // OK PRÉDIOS
  createBuilding2(scene, 6300, -600, -2500);
  createBuilding3(scene, -6800, -50, -1700);
  createBuilding4(scene, -7000, -50, 2500);
  createBuilding5(scene, 2000, 0, 7300);
  createBuilding6(scene, -3900, -150, -6400);
  createBuilding7(scene, -500, 250, -6800);

}



