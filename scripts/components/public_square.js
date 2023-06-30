import { createParkBenches } from "./park_benches.js";
import { createStatue } from "./statue.js";
import { createTrees } from "./trees.js";
import { createBuildings } from "./buildings.js";
import { createLawn } from "./lawn.js";
import { createStreets } from "./streets.js";
import { createSky } from "./sky.js";
import { createCar } from "./cars.js";
import { createSideWalks } from "./side_walks.js";
import { createParkDumps } from "./dumps.js";
import { createParkLamps } from "./lamps.js";

// Criação da Praça Pública
export function createPublicSquare(scene, camera, renderer) {

  // CÉU
  createSky(scene, camera, renderer);

  // CARRO
  createCar(scene, camera, renderer);
  
  // GRAMADO
  createLawn(scene);

  // CALÇADAS
  createSideWalks(scene);

  // CRIAÇÃO DE ESTÁTUA CENTRAL
  createStatue(scene);

  // BANCOS DA PRAÇA
  createParkBenches(scene);

  // LIXEIRAS DA PRAÇA
  createParkDumps(scene);
  
  // LAMPADAS DA PRAÇA
  createParkLamps(scene);
  
  // ÁRVORES
  createTrees(scene);

  // PRÉDIOS
  createBuildings(scene);

  // ESTRADAS
  createStreets(scene);
}