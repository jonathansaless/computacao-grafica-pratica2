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

// Função para criar a Praça Pública
export function createPublicSquare(scene, camera, renderer) {
  
  // Criação do Céu
  createSky(scene, camera, renderer);

  // Criação do Carro
  createCar(scene, camera, renderer);
  
  // Criação do Gramado
  createLawn(scene);

  // Criação das Calçadas
  createSideWalks(scene);

  // Criação da Estátua Central
  createStatue(scene);

  // Criação dos Bancos da Praça
  createParkBenches(scene);

  // Criação das Lixeiras da Praça
  createParkDumps(scene);
  
  // Criação das Lâmpadas da Praça
  createParkLamps(scene);
  
  // Criação das Árvores
  createTrees(scene);

  // Criação dos Prédios
  createBuildings(scene);

  // Criação das Estradas
  createStreets(scene);
}
