import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const createWaterMesh = (width, height, depth) => {
  const geometry = new THREE.PlaneGeometry(width, height);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00aaff, // Water color
    opacity: 0.5,
    transparent: true,
  });
  const waterMesh = new THREE.Mesh(geometry, material);

  // Optionally, set depth for water if needed
  waterMesh.position.z = depth;

  return waterMesh;
};

const ThreeJSModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 8, 10); // Position the camera to view the scene
    camera.lookAt(new THREE.Vector3(0, 2, 2));

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Point Light
    const pointLight = new THREE.PointLight(0xff0000, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Spot Light
    const spotLight = new THREE.SpotLight(0x00ff00, 1);
    spotLight.position.set(-5, 5, 5);
    scene.add(spotLight);

    // // Hemisphere Light
    const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x444444, 0.7);
    hemisphereLight.position.set(0, 20, 0);
    scene.add(hemisphereLight);

    // Load multiple models with unique positions
    const loader = new GLTFLoader();

    const loadModel = (path, position) => {
      loader.load(
        path,
        (gltf) => {
          const model = gltf.scene;
          const test = path === "/models/RubberDuck.glb";
          console.log(test);
          model.position.set(position.x, position.y, position.z);
          if (path === "/models/RubberDuck.glb") {
            model.scale.set(4, 4, 4);
            model.rotation.y = Math.PI / 2;
          } else {
            const waterMesh = createWaterMesh(1.3, 0.5, 1.3); // Adjust width, height, and depth
            waterMesh.position.set(0, 0.3, 0.05); // Adjust position to fit inside the bathtub
            model.add(waterMesh);
            model.scale.set(8.5, 8.5, 8.5);
          }
          scene.add(model);
          renderScene(); // Re-render the scene after adding each model
        },
        undefined,
        (error) => {
          console.error(
            `An error occurred while loading the model at ${path}`,
            error
          );
        }
      );
    };

    // Specify different positions for each model to avoid overlap
    loadModel("/models/Bathtub.glb", { x: -2, y: 0, z: 0 });
    loadModel("/models/RubberDuck.glb", { x: 0, y: 5, z: 0 });

    // Render function
    const renderScene = () => {
      renderer.render(scene, camera);
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderScene();
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeJSModel;
