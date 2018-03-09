import { BoxGeometry, Mesh, ShaderMaterial } from 'three';

// import imgSource from  '../../assets/images/file-name.ext';

const simpleFrag = require('./shader.frag');
const simpleVert = require('./shader.vert');

class Box {
  constructor() {
    const geometry = new BoxGeometry(1,1,1);
    const shaderMaterial = new ShaderMaterial({
      vertexShader:   simpleVert,
      fragmentShader: simpleFrag
    });

    this.mesh = new Mesh(geometry, shaderMaterial);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.mesh.rotation.z += 0.01;
  }
}

export default Box;
