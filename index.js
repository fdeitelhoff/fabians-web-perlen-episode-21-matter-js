import Matter from 'matter-js';

var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  World = Matter.World,
  Composites = Matter.Composites;

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    background: '#ffffff',
  },
});

var boxA = Bodies.rectangle(400, 200, 80, 80, {
  render: {
    fillStyle: 'lightblue',
    strokeStyle: 'black',
    lineWidth: 1,
  },
});
var boxB = Bodies.rectangle(450, 50, 80, 80, {
  render: {
    fillStyle: 'lightgreen',
    strokeStyle: 'black',
    lineWidth: 1,
  },
});

var ground = Bodies.rectangle(400, 610, 810, 60, {
  render: {
    fillStyle: 'gray',
    strokeStyle: 'black',
    lineWidth: 2,
  },
  isStatic: true,
});

Composite.add(engine.world, [boxA, boxB, ground]);

Render.run(render);

var runner = Runner.create();

Runner.run(runner, engine);

const addCircle = function () {
  return Bodies.circle(Math.random() * 400 + 30, 30, 30);
};

var addSquare = function () {
  return Bodies.rectangle(Math.random() * 400 + 30, 30, 60, 60);
};

var addRect = function () {
  return Bodies.rectangle(Math.random() * 400 + 30, 30, 100, 60);
};

const addCircleButton = document.getElementById('add-circle');
const addSquareButton = document.getElementById('add-square');
const addRectButton = document.getElementById('add-rect');

addCircleButton.onclick = () => {
  World.add(engine.world, addCircle());
};

addSquareButton.onclick = () => {
  World.add(engine.world, addSquare());
};

addRectButton.onclick = () => {
  World.add(engine.world, addRect());
};

var stack = Composites.stack(550, 100, 7, 6, 0, 0, function (x, y) {
  return Bodies.rectangle(x, y, 40, 20, {
    render: {
      fillStyle: 'orange',
      strokeStyle: 'black',
    },
  });
});

World.add(engine.world, [stack]);
