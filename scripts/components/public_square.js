import * as THREE from "three";
import { loader } from "../constants/loaders.js";

// Criar a geometria da praça
export function createSquare(scene){

    const squareGeometry = new THREE.BoxGeometry(9000, 0.1, 9000);
    const squareMaterial = new THREE.MeshBasicMaterial({map: 
        loader.load('/assets/textures/grama3.jpg')
      });
    const square = new THREE.Mesh(squareGeometry, squareMaterial);
    scene.add(square);
}