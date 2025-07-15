import Header from './src/components/Header/Header.js';

const app = document.createElement('div');
app.id = 'app';

app.innerHTML = `
  <portfolio-header></portfolio-header>
  <canvas id="canvas3d" class="fixed top-0 left-0 -z-10"></canvas>
`;

export default app;