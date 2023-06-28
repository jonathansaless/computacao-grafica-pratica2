// Biblioteca serve para que seja possível controlar a tela pelo mouse
import {OrbitControls} from "orbitControls";

export function setController(camera, renderer) {
    // cria controlador para que usuário consiga movimentar a tela com o mouse
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.minDistance = 1000;
    controls.maxDistance = 6000;

    // Defina o ângulo mínimo de rotação vertical
    const minPolarAngle = Math.PI / 2; // Por exemplo, 90 graus

    // Aplique o limite superior aos controles, sendo possível visualizar apenas a parte de cima da tela
    controls.maxPolarAngle = minPolarAngle;
}