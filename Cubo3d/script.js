// Configuração inicial do cenário 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Configuração do renderizador WebGL
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Tamanho do canvas
document.body.appendChild(renderer.domElement);

// Criando um material roxo
const material = new THREE.MeshBasicMaterial({
  color: 0x800080  // Cor roxa
});

// Criando um cubo 3D
const geometry = new THREE.BoxGeometry(1, 1, 1); // Forma de cubo
const cube = new THREE.Mesh(geometry, material); // Mesh: combina a geometria com o material
scene.add(cube); // Adiciona o cubo à cena

// Posicionando a câmera
camera.position.z = 5; // Distância da câmera

// Função de animação
function animate() {
  requestAnimationFrame(animate); // Solicita a próxima renderização

  // Gira o cubo continuamente
  cube.rotation.x += 0.01; // Gira em torno do eixo X
  cube.rotation.y += 0.01; // Gira em torno do eixo Y

  // Renderiza a cena a partir da câmera
  renderer.render(scene, camera);
}

animate(); // Inicia a animação

// Ajuste de tamanho da tela ao redimensionar a janela
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight); // Redimensiona o canvas
  camera.aspect = window.innerWidth / window.innerHeight; // Ajusta a proporção da câmera
  camera.updateProjectionMatrix(); // Atualiza a matriz de projeção
});
