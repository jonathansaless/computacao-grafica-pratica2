// Importação da biblioteca
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import {OrbitControls} from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/controls/OrbitControls.js";

// funções basicas para toda cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xB0C4DE,1);
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );
const controlador = new OrbitControls(camera, renderer.domElement);
var loader = new THREE.TextureLoader();

let cubo, esfera, cilindro, plano, cone;

// cubo
function CriarCubo(cor, largura, altura, profundidade){
  var geometria = new THREE.BoxGeometry(largura, altura, profundidade);
  var material = new THREE.MeshBasicMaterial({map: 
    loader.load('https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/874.png')
  });
  material.flatShading = true;

  cubo = new THREE.Mesh(geometria, material); scene.add(cubo);
  cubo.position.x = 0;
  // cubo.position.y = 2;
}

function CriarCilindro(cor, raioCima, raioBaixo, altura){
  var geometria = new THREE.CylinderGeometry(raioCima, raioBaixo, altura, 20);
  var material = new THREE.MeshBasicMaterial({color: cor})

  cilindro = new THREE.Mesh(geometria, material); scene.add(cilindro);
  cilindro.position.x = 3;
}

function CriarEsfera(cor, raio, qtdSegLargura, qtdSegAltura){
  var geometria = new THREE.SphereGeometry(raio, qtdSegAltura, qtdSegAltura)
  var material = new THREE.MeshBasicMaterial({map: 
    loader.load('https://static.vecteezy.com/system/resources/thumbnails/000/135/839/small/basketball-texture-free-vector.png')
  });

  esfera = new THREE.Mesh(geometria, material); scene.add(esfera);
  esfera.position.x = 7;
}

function CriarCone(cor, raio, altura, qtdDetalhes){
  var geometria = new THREE.ConeGeometry(raio, altura, qtdDetalhes);
  var material = new THREE.MeshBasicMaterial({color: cor});

  cone = new THREE.Mesh(geometria, material); scene.add(cone);
  cone.position.x = -2;
}

function CriarPlano(cor, altura, largura){
  var geometria = new THREE.PlaneGeometry(altura, largura);
  var material = new THREE.MeshBasicMaterial({color: cor});

  plano = new THREE.Mesh(geometria, material); scene.add(plano);
  plano.position.x = -5;
}

CriarCubo( 1, 1, 1)
CriarCilindro(new THREE.Color(0x1E90FF), 1, 1, 2);
CriarEsfera(new THREE.Color(0xffab15), 1, 16, 16);
CriarCone(new THREE.Color(0xFF007F), 1, 2, 30);
CriarPlano(new THREE.Color(0x00000), 1, 2)

camera.position.z = 5;

// var contX = 7;
// var contZ = 0;

function animate() {
  requestAnimationFrame(animate);

  cubo.rotation.x -= 0.01;
  cubo.rotation.z += 0.01;

  plano.rotation.x += 0.01;
  plano.rotation.y -= 0.01;

  cone.rotation.z += 0.01;
  cone.rotation.y += 0.01;

  cilindro.rotation.x += 0.01;
  cilindro.rotation.y += 0.01;

  // Calcular a posição da esfera na trajetória circular
  // var radius = 3; // Raio da órbita
  // var speed = 0.02; // Velocidade de rotação
  // var angle = Date.now() * speed; // Ângulo baseado no tempo
  // var x = Math.cos(angle) * radius; // Coordenada x
  // var z = Math.sin(angle) * radius; // Coordenada z
  // esfera.position.set(contX, 0, contZ); // Atualizar a posição da esfera

  /*if(contX>=0 && contX <= 7){
    contX -= 0.1;
    contZ -= 0.1;
  }
  else if(contX<0 && contX > -7){
    contX -= 0.1;
    contZ += 0.1;
    console.log(contX, contZ);
  }
  else if(contX<0 && contX >= -7){
    contX += 0.1;
    contZ -= 0.1;
    console.log('teste');
  }*/

  renderer.render(scene, camera);
}
animate();
