import Stats from 'stats-js';

const stats = new Stats();

stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
stats.domElement.style.zIndex = 10000;
stats.domElement.querySelector('#fps').style.backgroundColor = 'black';
stats.domElement.querySelector('#fpsGraph').style.backgroundColor = 'white';
stats.domElement.querySelector('#fpsText').style.color = 'white';
stats.domElement.querySelectorAll('#fpsGraph > span').forEach(span => {
  span.style.backgroundColor = 'black';
});

export default stats;
