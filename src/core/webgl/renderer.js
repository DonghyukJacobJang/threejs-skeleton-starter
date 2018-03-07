import { WebGLRenderer } from 'three';

const renderer = new WebGLRenderer({
  // antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio || 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setScissorTest(true);

export default renderer;
