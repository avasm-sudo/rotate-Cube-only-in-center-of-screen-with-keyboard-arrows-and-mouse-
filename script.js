// Global variables
let scene, camera, renderer, cube;

// Initialize the scene
function init() {
  // Create a scene
  scene = new THREE.Scene();

  // Create a camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create a renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create a cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Register event listeners
  document.addEventListener("keydown", onKeyDown, false);
  document.addEventListener("mousemove", onMouseMove, false);
}

// Key down event handler
function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      cube.rotation.x += 0.1;
      break;
    case "ArrowDown":
      cube.rotation.x -= 0.1;
      break;
    case "ArrowLeft":
      cube.rotation.y += 0.1;
      break;
    case "ArrowRight":
      cube.rotation.y -= 0.1;
      break;
  }
}

// Mouse move event handler
function onMouseMove(event) {
  cube.rotation.x += event.movementY * 0.01;
  cube.rotation.y += event.movementX * 0.01;
}


// Animation loop

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Call the initialization function and start the animation loop
init();
animate();