import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshLambertMaterial,
  OrthographicCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new Scene();

const geometry = new BoxGeometry(100, 100, 100);

const material = new MeshLambertMaterial({ color: 'red' });

const mesh = new Mesh(geometry, material);

const point = new PointLight(0xffffff);
point.position.set(400, 300, 200);

const ambientLight = new AmbientLight('blue');

const width = window.innerWidth;
const height = window.innerHeight;
var k = width / height; //窗口宽高比
var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
const camera = new OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(200, 300, 200); //设置相机位置
camera.lookAt(scene.position);

scene.add(mesh);
scene.add(point);
scene.add(ambientLight);

const renderer = new WebGLRenderer();
renderer.setSize(width, height);
renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
document.body.appendChild(renderer.domElement);

const render = () => {
  renderer.render(scene, camera);
};

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
