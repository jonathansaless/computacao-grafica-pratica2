import * as THREE from "three";

import { createParkBenches } from "./park_benches.js";
import { createCentralSideWalkBigger, createCentralSideWalkSmaller, createSideWalkBigger, createSideWalkMediun, createSideWalkOutsideBigger, createSideWalkOutsideSmaller, createSideWalkSmaller } from "./side_walks.js";
import { createStatue } from "./statue.js";
import { createTrees } from "./trees.js";
import { createBuildings } from "./buildings.js";
import { createLawn } from "./lawn.js";
import { createStreets } from "./streets.js";
import { createSky } from "./sky.js";
import { createCar } from "./cars.js";

// Criar a geometria da praça
export function createPublicSquare(scene, camera, renderer) {

  // OK CÉU
  createSky(scene, camera, renderer);

  // OK CARRO
  // createCar(scene, camera, renderer);
  
  // OK GRAMADO
  createLawn(scene);

  // OK CALÇADA DE FORA
  createSideWalkOutsideBigger(scene, 0, 1, 7250, 0);
  createSideWalkOutsideBigger(scene, 0, 1, -7250, 0);
  createSideWalkOutsideSmaller(scene, 7250, 1, 0, 90);
  createSideWalkOutsideSmaller(scene, -7250, 1, 0, 90);

  // OK CALÇADAS MAIORIES QUE ENCONTRAM AO CENTRO
  createSideWalkBigger(scene, 2800, 1, -20, 0);
  createSideWalkBigger(scene, -2800, 1, -20, 0);
  createSideWalkBigger(scene, -20, 1, 2800, 90);
  createSideWalkBigger(scene, -20, 1, -2800, 90);

  // OK CALÇADAS DAS BEIRAS
  createSideWalkMediun(scene, -2625, 1, -4000, 0);
  createSideWalkMediun(scene, 2625, 1, -4000, 0);
  createSideWalkMediun(scene, -2625, 1, 4000, 0);
  createSideWalkMediun(scene, 2625, 1, 4000, 0);
  createSideWalkSmaller(scene, 4020, 1, 2100, 90);
  createSideWalkSmaller(scene, -4020, 1, 2100, 90);
  createSideWalkSmaller(scene, 4020, 1, -2100, 90);
  createSideWalkSmaller(scene, -4020, 1, -2100, 90);

  // // OK CALÇADA CENTRAL
  // createCentralSideWalkBigger(scene);
  // createCentralSideWalkSmaller(scene);

  // // OK CRIAÇÃO DE ESTÁTUA CENTRAL
  // createStatue(scene);

  // OK BANCOS DA PRAÇA
  createParkBenches(scene);

  // // OK ÁRVORES
  // createTrees(scene);

  // // OK PRÉDIOS
  // createBuildings(scene);

  // // OK ESTRADAS
  // createStreets(scene);
}