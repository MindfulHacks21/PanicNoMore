
// note u need to install the pixi before using
// npm install pixi.js

// to run local host on windows to avoid the security issue, use this command:
// python -m http.server

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

// craete a polygon
const poly = new Graphics();
poly.beginFill(0xFFB3E3)
.lineStyle(5, 0x3BA3F3)
.drawPolygon(
    600, 50,
    800, 150,
    900, 300,
    400, 400
)
.endFill();
// draw polygon takes an array of numbers as an arg, each pair represent a point

app.stage.addChild(poly);

// draw a circle
const circle = new Graphics();
circle.beginFill(0x22AACC)
.drawCircle(440, 200, 80) 
.endFill();
// draw circle is the coords then the radius

app.stage.addChild(circle);

// last added child appears on top of the stage 

// can also add lines

const line = new Graphics();
line.lineStyle(3, 0xFFEA00, 1)
.moveTo(1500, 100)
.lineTo(1500, 800);
// specify the coordinates of the first point using the move to method
// line to to speific coordinates of the second end of the line

app.stage.addChild(line);


// add more complex shapes by installing the graphics extras module
// npm install @pixi/graphics-extras
// and link to it in the html code

const torus = new Graphics();

torus.beginFill(0xFFFDDD)
.drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
// coordinates of the center of the torus
// optional last 2 arg to indicate the start and end of the arc to draw
.endFill();

app.stage.addChild(torus);

const star = new Graphics();

star.beginFill(0xFFFDDD)
.drawStar(900, 700, 30, 80)
// coordinates of the center of the torus, then number of points, then radius
.endFill();

app.stage.addChild(star);


// creating and adding text
const style = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 48,
    fill: 'deepskyblue',
    stroke: '#ffffff',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur: 4,
    dropShadowColor: '#000000'
})
// fill may also accept hex code for a color?

const myText = new PIXI.Text('Hello World!', style);
// note the text and style can be changed later

app.stage.addChild(myText);

myText.text = 'Text Changed!';
myText.style.wordWrap = true;
myText.style.wordWrapWidth = 100;
myText.style.align = 'center';

// adding elements to the canvas automatically (dont use set interval!!!)
// for javascript animations usually use the request animation frame 
// pixi js has a solution built on top of the request animation frame method


app.ticker.add(delta => loop(delta))
// loop is the arbitrary name of the function that will be called by the ticker method

// loop holds all the function to be executed
function loop(delta) {
    // every shape is an instance of it
    const rectangle = new Graphics();

    // transforming the shape into a rectangle
    rectangle.beginFill(0xAA33BB);
    rectangle.lineStyle(4, 0xFFEA00, 0.8); // linewidth, color, alpha (0-1)
    rectangle.drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 100, 120); // coords then width and height
    rectangle.endFill();

    // note the methods are chainable, can call them together for the same rectangle

    // call the stage and add the rectangle
    app.stage.addChild(rectangle);
}

// number of frames per second depends on the users monitor
// eg 60 Hz monitor, loop called 60 times per second
// there is room for some lag and the duration of that lag is stored in the delta parameter



