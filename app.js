// 3 rooms 
/*
1 - Living room
2 - Bedroom
3 - Kitchen
*/
var room = 1;
var fireRemaining = 10;

////////////// Set up the Pixi stage
const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
}); 

// change the color of the canvas
app.renderer.backgroundColor = 0x33395D; 

// resize the canvas
app.renderer.resize(700, 500);

app.renderer.view.style.transform = 'translate3d( ' 
    + String((window.innerWidth - app.renderer.width) / 2 / app.renderer.width * 100) + '%, ' 
    + String((window.innerHeight - app.renderer.height) / 2 / app.renderer.height * 100) + '%, 0 )';

// change the style of the canvas and set position to absolute
// remove any default margins and paddings
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

//////////// load backgrounds

const roomTexture1 = PIXI.Texture.from('./images/rooms/LivingRoom.png');
const roomTexture2 = PIXI.Texture.from('./images/rooms/Bedroom.png');
const roomTexture3 = PIXI.Texture.from('./images/rooms/Kitchen.png');


//////////// set up the fire

const fireTexture = PIXI.Texture.from('./images/fire.png');

/////  1
const fireSprite1 = new PIXI.Sprite(fireTexture);

fireSprite1.scale.x = 0.08;
fireSprite1.scale.y = 0.08;

fireSprite1.x = 600;
fireSprite1.y = 450;

fireSprite1.anchor.set(0.5, 1);

// need to set the interactive to true to enable event detection on the sprite
fireSprite1.interactive = true;
//to make the cursor change on hover over to hint it is clickable
fireSprite1.buttonMode = true; 

// similar to addEventListener function, takes an event and a callback
fireSprite1.on('pointerdown', function() {
    fireSprite1.scale.x -= 0.04;
    fireSprite1.scale.y -= 0.04;
    fireRemaining -= 1;
    checkFiresRemainin();
} );


////// 2
const fireSprite2 = new PIXI.Sprite(fireTexture);

fireSprite2.scale.x = 0.08;
fireSprite2.scale.y = 0.08;

fireSprite2.x = 500;
fireSprite2.y = 450;

fireSprite2.anchor.set(0.5, 1);

// need to set the interactive to true to enable event detection on the sprite
fireSprite2.interactive = true;
//to make the cursor change on hover over to hint it is clickable
fireSprite2.buttonMode = true; 

// similar to addEventListener function, takes an event and a callback
fireSprite2.on('pointerdown', function() {
    fireSprite2.scale.x -= 0.04;
    fireSprite2.scale.y -= 0.04;
    fireRemaining -= 1;
    checkFiresRemainin();
} );

////// 3
const fireSprite3 = new PIXI.Sprite(fireTexture);

fireSprite3.scale.x = 0.08;
fireSprite3.scale.y = 0.08;

fireSprite3.x = 400;
fireSprite3.y = 450;

fireSprite3.anchor.set(0.5, 1);

// need to set the interactive to true to enable event detection on the sprite
fireSprite3.interactive = true;
//to make the cursor change on hover over to hint it is clickable
fireSprite3.buttonMode = true; 

// similar to addEventListener function, takes an event and a callback
fireSprite3.on('pointerdown', function() {
    fireSprite3.scale.x -= 0.04;
    fireSprite3.scale.y -= 0.04;
    fireRemaining -= 1;
    checkFiresRemainin();
} );


////// 4
const fireSprite4 = new PIXI.Sprite(fireTexture);

fireSprite4.scale.x = 0.08;
fireSprite4.scale.y = 0.08;

fireSprite4.x = 300;
fireSprite4.y = 450;

fireSprite4.anchor.set(0.5, 1);

// need to set the interactive to true to enable event detection on the sprite
fireSprite4.interactive = true;
//to make the cursor change on hover over to hint it is clickable
fireSprite4.buttonMode = true; 

// similar to addEventListener function, takes an event and a callback
fireSprite4.on('pointerdown', function() {
    fireSprite4.scale.x -= 0.04;
    fireSprite4.scale.y -= 0.04;
    fireRemaining -= 1;
    checkFiresRemainin();
} );


////// 5
const fireSprite5 = new PIXI.Sprite(fireTexture);

fireSprite5.scale.x = 0.08;
fireSprite5.scale.y = 0.08;

fireSprite5.x = 200;
fireSprite5.y = 450;

fireSprite5.anchor.set(0.5, 1);

// need to set the interactive to true to enable event detection on the sprite
fireSprite5.interactive = true;
//to make the cursor change on hover over to hint it is clickable
fireSprite5.buttonMode = true; 

// similar to addEventListener function, takes an event and a callback
fireSprite5.on('pointerdown', function() {
    fireSprite5.scale.x -= 0.04;
    fireSprite5.scale.y -= 0.04;
    fireRemaining -= 1;
    checkFiresRemainin();
} );

///////////////////////

const roomSprite1 = new PIXI.Sprite(roomTexture1);
const roomSprite2 = new PIXI.Sprite(roomTexture2);
const roomSprite3 = new PIXI.Sprite(roomTexture3);

roomSprite1.scale.set(0.5, 0.5);
roomSprite2.scale.set(0.5, 0.5);
roomSprite3.scale.set(0.5, 0.5);

app.stage.addChild(roomSprite1);
app.stage.addChild(roomSprite2);
app.stage.addChild(roomSprite3);

app.stage.addChild(fireSprite1);
app.stage.addChild(fireSprite2);
app.stage.addChild(fireSprite3);
app.stage.addChild(fireSprite4);
app.stage.addChild(fireSprite5);

renderScene()

function checkFiresRemainin() {
    console.log(fireRemaining);

    if (fireRemaining == 0){
        room += 1;
        fireRemaining = 10;
        renderScene()
    }
}

function renderScene() {
    console.log(room);
    console.log(fireRemaining);

    switch(room) {
        case 1:
            roomSprite1.visible = true;
            roomSprite2.visible = false;
            roomSprite3.visible = false;

            fireSprite1.scale.set(0.08, 0.08);
            fireSprite1.position.set(150, 300);
            fireSprite2.scale.set(0.08, 0.08);
            fireSprite2.position.set(380, 450);
            fireSprite3.scale.set(0.08, 0.08);
            fireSprite3.position.set(280, 330);
            fireSprite4.scale.set(0.08, 0.08);
            fireSprite4.position.set(300, 130);
            fireSprite5.scale.set(0.08, 0.08);
            fireSprite5.position.set(50, 400);
            
            break;

        case 2:
            roomSprite1.visible = false;
            roomSprite2.visible = true;
            roomSprite3.visible = false;

            fireSprite1.scale.set(0.08, 0.08);
            fireSprite1.position.set(600, 350);
            fireSprite2.scale.set(0.08, 0.08);
            fireSprite2.position.set(110, 300);
            fireSprite3.scale.set(0.08, 0.08);
            fireSprite3.position.set(300, 130);
            fireSprite4.scale.set(0.08, 0.08);
            fireSprite4.position.set(350, 320);
            fireSprite5.scale.set(0.08, 0.08);
            fireSprite5.position.set(180, 470);

            break;

        default:
            roomSprite1.visible = false;
            roomSprite2.visible = false;
            roomSprite3.visible = true;

            fireSprite1.scale.set(0.08, 0.08);
            fireSprite1.position.set(150, 300);
            fireSprite2.scale.set(0.08, 0.08);
            fireSprite2.position.set(200, 400);
            fireSprite3.scale.set(0.08, 0.08);
            fireSprite3.position.set(400, 350);
            fireSprite4.scale.set(0.08, 0.08);
            fireSprite4.position.set(500, 300);
            fireSprite5.scale.set(0.08, 0.08);
            fireSprite5.position.set(280, 150);

      }
}