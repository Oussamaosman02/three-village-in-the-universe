import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

export function pueblo(scene, x, y, z, act) {
  const gltfLoader = new GLTFLoader();
  const url = "./assets/cartooncity/scene.gltf";
  //

  gltfLoader.load(url, function (gltf) {
    const algo = gltf.scene;
    scene.add(algo);
    algo = algo;
    algo.position.set(x, y, z);
    const esc = 0.04;
    algo.scale.set(esc, esc, esc);
    algo.castShadow = true;
  });
}
