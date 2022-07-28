import {
  AmbientLight,
  AxesHelper,
  BufferAttribute,
  BufferGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  OrthographicCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new Scene();

const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标
  50,
  0,
  0, //顶点2坐标
  0,
  100,
  0, //顶点3坐标
  0,
  0,
  0, //顶点4坐标
  0,
  0,
  100, //顶点5坐标
  50,
  0,
  0, //顶点6坐标
]);
var colors = new Float32Array([
  1,
  0,
  0, //顶点1颜色
  0,
  1,
  0, //顶点2颜色
  0,
  0,
  1, //顶点3颜色
  1,
  1,
  0, //顶点4颜色
  0,
  1,
  1, //顶点5颜色
  1,
  0,
  1, //顶点6颜色
]);
const normalsCustomize = new Float32Array([
  1,
  1,
  1, //顶点1法向量
  0,
  0,
  1, //顶点2法向量
  0,
  2,
  1, //顶点3法向量

  0,
  1,
  1, //顶点4法向量
  1,
  1,
  0, //顶点5法向量
  1,
  1,
  1, //顶点6法向量
]);
var normals = new Float32Array([
  0,
  0,
  1, //顶点1法向量
  0,
  0,
  1, //顶点2法向量
  0,
  0,
  1, //顶点3法向量

  0,
  1,
  0, //顶点4法向量
  0,
  1,
  0, //顶点5法向量
  0,
  1,
  0, //顶点6法向量
]);
const geometry = new BufferGeometry();
geometry.attributes.position = new BufferAttribute(vertices, 3);
// geometry.attributes.color = new BufferAttribute(colors, 3);
geometry.attributes.normals = new BufferAttribute(normals, 3);

const material = new MeshLambertMaterial({
  color: 'red',
  side: DoubleSide,
});

const mesh = new Mesh(geometry, material);

const point = new PointLight(0xffffff);
point.position.set(400, 300, 200);

const ambientLight = new AmbientLight('blue');

const axisHelper = new AxesHelper(500);
scene.add(axisHelper);

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
render();
const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', render);
