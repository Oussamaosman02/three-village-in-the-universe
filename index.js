import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { pueblo } from "./village";

//renderer
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
  45,
  innerWidth / innerHeight,
  0.1,
  10000
);
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-10, 30, 30);
orbit.update();

//luz
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);
const nl = new THREE.PointLight(0xffffff, 1, 100);
nl.position.set(0, 10, 50);
nl.castShadow = true;
//scene.add(nl);
nl.castShadow = true;
light.castShadow = true;
const dtl = new THREE.DirectionalLight(0xffffff, 0.8);
dtl.position.set(-30, 50, 0);
scene.add(dtl);
dtl.castShadow = true;
dtl.shadow.camera.bottom = -50;
dtl.shadow.camera.top = 50;

//materiales
const cubloa = new THREE.CubeTextureLoader();
const urlFondo =
  "https://cdn.astrobin.com/thumbs/wPcWbiXNBNAm_620x0__sPnTECk.jpg";
scene.background = cubloa.load([
  urlFondo,
  urlFondo,
  urlFondo,
  urlFondo,
  urlFondo,
  urlFondo,
]);

pueblo(scene, 17, 13, 17);
pueblo(scene, 17, 13, 17);
pueblo(scene, 104, 13, 17);
pueblo(scene, 17, 13, 104);
pueblo(scene, 104, 13, 104);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
