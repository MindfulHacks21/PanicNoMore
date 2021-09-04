const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
}); 

// change the color of the canvas
app.renderer.backgroundColor = 0x23395D; 

// resize the canvas
app.renderer.resize(window.innerWidth, window.innerHeight);

// change the style of the canvas and set position to absolute
// remove any default margins and paddings
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

// shapes in pixi stored in the graphics class
const Graphics = PIXI.Graphics;

// every shape is an instance of it
const rectangle = new Graphics();

// transforming the shape into a rectangle
rectangle.beginFill(0xAA33BB);
rectangle.lineStyle(4, 0xFFEA00, 0.8); // linewidth, color, alpha (0-1)
rectangle.drawRect(200, 200, 100, 120); // coords then width and height
rectangle.endFill();

// note the methods are chainable, can call them together for the same rectangle

// call the stage and add the rectangle
app.stage.addChild(rectangle);


