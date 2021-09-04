// 3 rooms 
/*
1 - Living room
2 - Bedroom
3 - Kitchen
*/
var room = 1;
var fireRemaining = 10;
var showsQuestion = true;
var leftGood = false;
var lives = 3;

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

app.renderer.view.style.transform = 'translate3d( -50%, 0%, 0)';
    // + String((window.innerWidth - app.renderer.width) / 2 / app.renderer.width * 100) + '%, ' 
    // + String((window.innerHeight - app.renderer.height) / 2 / app.renderer.height * 100) + '%, 0 )';

// change the style of the canvas and set position to absolute
// remove any default margins and paddings
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

//////////// load backgrounds

const roomTexture1 = PIXI.Texture.from('../images/rooms/LivingRoom.png');
const roomTexture2 = PIXI.Texture.from('../images/rooms/Bedroom.png');
const roomTexture3 = PIXI.Texture.from('../images/rooms/Kitchen.png');

const heartTexture = PIXI.Texture.from('../images/heart.png');

const disasterTexture = PIXI.Texture.from('../images/disaster.jpg');
const congratsTexture = PIXI.Texture.from('../images/fireworks.jpg');


//////////// set up the fire

const fireTexture = PIXI.Texture.from('../images/fire.png');

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
    if (fireSprite1.scale.x == 0.04) {
        showsQuestion = true;
    }
    checkFiresRemainin(1);
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
    if (fireSprite2.scale.x == 0.04) {
        showsQuestion = true;
    }
    checkFiresRemainin(2);
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
    if (fireSprite3.scale.x == 0.04) {
        showsQuestion = true;
    }
    checkFiresRemainin(3);
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
    if (fireSprite4.scale.x == 0.04) {
        showsQuestion = true;
    }
    checkFiresRemainin(4);
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
    if (fireSprite5.scale.x == 0.04) {
        showsQuestion = true;
    }
    checkFiresRemainin(5);
} );

///////////////// implementing lives

const Graphics = PIXI.Graphics;

const livesRect = new Graphics();

livesRect.beginFill(0xfffceb);
livesRect.drawRect(500, 0, 200, 120); // coords then width and height
livesRect.endFill();



//// text

const style = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 48,
    fill: 'black',
    stroke: '#ffffff',
    strokeThickness: 4,
})

const livesText = new PIXI.Text('Lives', style);


////// Question

const questionRect = new Graphics();

questionRect.beginFill(0xccca9d);
questionRect.drawRect(100, 100, 500, 300); // coords then width and height
questionRect.endFill();

const styleTextQn = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 16,
    fill: 'black',
});

const styleTextGood = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 16,
    fill: 'black',
});

const styleTextBad = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 16,
    fill: 'black',
});

const styleTextTip = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 16,
    fill: 'black',
});


var tip = 'Seek seniors and Friends for help! It is always better to have peers around you to assist in planning and taking modules. If you are from NUS, you can try this telebot! It pairs you up with people in the same course! Use it to make friends!: @modwithfriends_bot'
var question = 'Your lecturer isn\'t good at teaching and doesn\'t seem well prepared to present the content'
var good = 'approach your profs, career advisor, someboDY! in the worst case prepare to search for internships for the next internship period'
var bad = 'Do nothing! Just wing the presentation! It\'s tomorrow Jane\'s problem now!'

const questionText = new PIXI.Text(question, styleTextQn);

const leftText = new PIXI.Text(good, styleTextGood);

const rightText = new PIXI.Text(bad, styleTextBad);

const tipText = new PIXI.Text(tip, styleTextTip);

questionText.style.wordWrap = true;
questionText.style.wordWrapWidth = 300;
questionText.style.align = 'center';

leftText.style.wordWrap = true;
leftText.style.wordWrapWidth = 160;
leftText.style.align = 'center';

rightText.style.wordWrap = true;
rightText.style.wordWrapWidth = 160;
rightText.style.align = 'center';

tipText.style.wordWrap = true;
tipText.style.wordWrapWidth = 300;
tipText.style.align = 'center';

const leftRect = new Graphics();

leftRect.beginFill(0xc7feff);
leftRect.drawRect(135, 200, 180, 180); // coords then width and height
leftRect.endFill();

const rightRect = new Graphics();

rightRect.beginFill(0xc7feff);
rightRect.drawRect(385, 200, 180, 180); // coords then width and height
rightRect.endFill();

leftRect.on('pointerdown', function() {
    checkAnswerSelected(true);
} );

rightRect.on('pointerdown', function() {
    checkAnswerSelected(false);
} );

questionRect.on('pointerdown', function() {
    closeQuestionDialog();
} );


///////////////////// end game screen

const disasterBg = new PIXI.Sprite(disasterTexture);
disasterBg.scale.set(0.95, 0.95);

const styleEndText = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 60,
    fill: 'red',
    stroke: '#ffffff',
    strokeThickness: 4,
})

const endText = new PIXI.Text('OH NO', styleEndText);
endText.style.align = 'center';
endText.position.set(350, 250);
endText.anchor.set(0.5, 0.5);

const replayRect = new Graphics();

replayRect.beginFill(0x000000);
replayRect.lineStyle(4, 0xFFEA00, 0.8); // linewidth, color, alpha (0-1)
replayRect.drawRect(50, 400, 150, 50); // coords then width and height
replayRect.endFill();

const styleReplayText = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 30,
    fill: '#ffffff',
    // stroke: '#ffffff',
    strokeThickness: 2,
})

const replayText = new PIXI.Text('Try again', styleReplayText);
replayText.style.align = 'center';
replayText.position.set(125, 425);
replayText.anchor.set(0.5, 0.5);

replayRect.on('pointerdown', function() {
    restartGame();
});

const homeBtnRect = new Graphics();

homeBtnRect.beginFill(0x000000);
homeBtnRect.lineStyle(4, 0xFFEA00, 0.8); // linewidth, color, alpha (0-1)
homeBtnRect.drawRect(250, 400, 150, 50); // coords then width and height
homeBtnRect.endFill();

const styleHome = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 30,
    fill: '#ffffff',
    // stroke: '#ffffff',
    strokeThickness: 2,
})

const homeBtnText = new PIXI.Text('Go Home', styleHome);
homeBtnText.style.align = 'center';
homeBtnText.position.set(325, 425);
homeBtnText.anchor.set(0.5, 0.5);

homeBtnRect.on('pointerdown', function() {
    goHome();
});

/////////////////////////////////////

///////////////////// congratulation end game screen

const congratsBg = new PIXI.Sprite(congratsTexture);
congratsBg.scale.set(2.7, 2.7);

const styleWinText = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 60,
    fill: 'red',
    stroke: '#ffffff',
    strokeThickness: 4,
})

const hurrayText = new PIXI.Text('HURRAY YOU WIN!', styleWinText);
hurrayText.style.align = 'center';
hurrayText.position.set(350, 250);
hurrayText.anchor.set(0.5, 0.5);

const homeRect = new Graphics();

homeRect.beginFill(0x000000);
homeRect.lineStyle(4, 0xFFEA00, 0.8); // linewidth, color, alpha (0-1)
homeRect.drawRect(50, 400, 150, 50); // coords then width and height
homeRect.endFill();

const styleHomeText = new PIXI.TextStyle({
    fontFamily: 'Monserrat',
    fontSize: 30,
    fill: '#ffffff',
    // stroke: '#ffffff',
    strokeThickness: 2,
})

const homeText = new PIXI.Text('Home', styleHomeText);
homeText.style.align = 'center';
homeText.position.set(125, 425);
homeText.anchor.set(0.5, 0.5);

homeRect.on('pointerdown', function() {
    goHome();
});

/////////////////////////////////////

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

app.stage.addChild(livesRect);

const heartSprite1 = new PIXI.Sprite(heartTexture);
const heartSprite2 = new PIXI.Sprite(heartTexture);
const heartSprite3 = new PIXI.Sprite(heartTexture);

app.stage.addChild(heartSprite1);
app.stage.addChild(heartSprite2);
app.stage.addChild(heartSprite3);

app.stage.addChild(livesText);

livesText.position.set(520, 0);

heartSprite1.anchor.set(0.5, 0.5);
heartSprite1.position.set(550, 80);
heartSprite1.scale.set(0.15, 0.15);

heartSprite2.anchor.set(0.5, 0.5);
heartSprite2.position.set(600, 80);
heartSprite2.scale.set(0.15, 0.15);

heartSprite3.anchor.set(0.5, 0.5);
heartSprite3.position.set(650, 80);
heartSprite3.scale.set(0.15, 0.15);

app.stage.addChild(questionRect);

app.stage.addChild(leftRect);
app.stage.addChild(rightRect);

app.stage.addChild(questionText);
app.stage.addChild(leftText);
app.stage.addChild(rightText);
app.stage.addChild(tipText);

questionText.position.set(350, 150);
leftText.position.set(225, 280);
rightText.position.set(475, 280);
tipText.position.set(350, 250);

questionText.anchor.set(0.5, 0.5);
leftText.anchor.set(0.5, 0.5);
rightText.anchor.set(0.5, 0.5);
tipText.anchor.set(0.5, 0.5);

leftRect.visible = false;
rightRect.visible = false;
leftText.visible = false;
rightText.visible = false;
questionText.visible = false;
questionRect.visible = false;
tipText.visible = false;

app.stage.addChild(disasterBg);
app.stage.addChild(endText);
app.stage.addChild(replayRect);
app.stage.addChild(replayText);
app.stage.addChild(homeBtnRect);
app.stage.addChild(homeBtnText);

app.stage.addChild(congratsBg);
app.stage.addChild(hurrayText);
app.stage.addChild(homeRect);
app.stage.addChild(homeText);

disasterBg.visible = false;
endText.visible = false;
replayRect.visible = false;
replayText.visible = false;
homeBtnRect.visible = false;
homeBtnText.visible = false;

congratsBg.visible = false;
hurrayText.visible = false;
homeRect.visible = false;
homeText.visible = false;


renderScene();


//////// functions
function goHome() {
    // integration
    location.replace("../index.html");
}

function renderHearts() {
    switch(lives) {
        case 3:
            heartSprite3.visible = true;
            heartSprite2.visible = true;
            heartSprite1.visible = true;
            break;
        case 2:
            heartSprite3.visible = false;
            heartSprite2.visible = true;
            heartSprite1.visible = true;
            break;
        case 1:
            heartSprite3.visible = false;
            heartSprite2.visible = false;
            heartSprite1.visible = true;
            break;
        default:
            // end game
            heartSprite1.visible = false;
            // run lose end game function
            gameOver(true);
    }
}

function restartGame() {
    // reset variables
    showsQuestion = false;
    lives = 3;
    room = 1;
    fireRemaining = 10;

    firesClickable(true);

    // reset view
    renderHearts();
    renderScene();
    removeQuestionDialog();
    closeQuestionDialog();
    gameOver(false);
}

function gameOver(isGameOver){
    disasterBg.visible = isGameOver;
    endText.visible = isGameOver;

    replayRect.interactive = isGameOver;
    replayRect.buttonMode = isGameOver;

    homeBtnRect.interactive = isGameOver;
    homeBtnRect.buttonMode = isGameOver;

    replayRect.visible = isGameOver;
    replayText.visible = isGameOver;
    homeBtnRect.visible = isGameOver;
    homeBtnText.visible = isGameOver;
}

function checkAnswerSelected(leftClicked){
    if ((leftClicked && leftGood) || (!leftClicked && !leftGood)){
        // answered correctly
        questionText.text = "That's right!";
    } else {
        questionText.text = "Oh no! That probably isn't the best choice";
        lives -= 1;
        renderHearts();
    }

    removeQuestionDialog();
}

function removeQuestionDialog(){
        // disable the buttons
        leftRect.interactive = false;
        leftRect.buttonMode = false;
        rightRect.interactive = false;
        rightRect.buttonMode = false;
    
        // stop showing buttons and button text
        leftRect.visible = false;
        rightRect.visible = false;
        leftText.visible = false;
        rightText.visible = false;
    
        // enable the big box to be selected
        questionRect.interactive = true;
        questionRect.buttonMode = true;
    
        // show the response and the tip
        tipText.visible = true;
}

function checkFiresRemainin(fireNum) {
    if (showsQuestion) {
        // show the question
        displayQuestionOptions(fireNum);
    }

    showsQuestion = false;
    
    fireRemaining -= 1;

    console.log(fireRemaining);

    if (fireRemaining == 0){
        room += 1;
        lives = 3;
        renderHearts();
        fireRemaining = 10;
        renderScene()

        if (room > 3) {
            winScreen();
        }
    }
}

function winScreen(){
    // console.log("win");
    congratsBg.visible = true;
    hurrayText.visible = true;
    homeRect.visible = true;
    homeText.visible = true;
}

function displayQuestionOptions(fireNum) {
    firesClickable(false);

    // select a question from the json
    var mydata = JSON.parse(data);

    question = mydata[room - 1].info[fireNum - 1].question;
    good = mydata[room - 1].info[fireNum - 1].good;
    bad = mydata[room - 1].info[fireNum - 1].bad;
    tip = mydata[room - 1].info[fireNum - 1].tip;

    // decide if the good is displayed on the left or right
    leftGood = Boolean(Math.round(Math.random()));
    console.log(leftGood)

    questionText.text = question;
    tipText.text = tip;

    // display options
    if (leftGood) {
        leftText.text = good;
        rightText.text = bad;
    } else {
        rightText.text = good;
        leftText.text = bad;
    }

    // enable the buttons
    leftRect.interactive = true;
    leftRect.buttonMode = true;
    rightRect.interactive = true;
    rightRect.buttonMode = true;

    // make the options appear
    leftRect.visible = true;
    rightRect.visible = true;
    leftText.visible = true;
    rightText.visible = true;

    questionRect.visible = true;
    questionText.visible = true;

    console.log("question part 1 made visible");

}

function closeQuestionDialog(){
    // if the questionRect is selected, make it not interactive and close it
    questionRect.interactive = false;
    questionRect.buttonMode = false;

    tipText.visible = false;
    questionText.visible = false;
    questionRect.visible = false;

    firesClickable(true);

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

function firesClickable(enable) {
    fireSprite1.interactive = enable;
    fireSprite1.buttonMode = enable;

    fireSprite2.interactive = enable;
    fireSprite2.buttonMode = enable;

    fireSprite3.interactive = enable;
    fireSprite3.buttonMode = enable;

    fireSprite4.interactive = enable;
    fireSprite4.buttonMode = enable;

    fireSprite5.interactive = enable;
    fireSprite5.buttonMode = enable;
}



