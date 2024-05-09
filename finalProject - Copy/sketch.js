/*
  1. health decreases when sprites are hit
  2. hit animation
  3. when health is 0 =, the sprite is knocked out
  4. game over screen
*/

let screen = 0;

let purpleMallow;
let enemyMallow;
let bgImage;
let functions;

let purpleHealth = 100;
let enemyHealth = 100;

let purpleAttacking = false;
let enemyAttacking = false;
let currentAttackFrame = 0;
let attackDuration = 3;

let purpleMallowX = 50;
let enemyMallowX = 350;

let port;
let joyX = 0, joyY = 0, sw = 0;
let connectButton;

functions = [enemyMoveLeft, enemyMoveRight];



function preload() {
  gameplayMusic = new Tone.Player("assets/GameplaySong.wav").toDestination();
  gameplayMusic.loop = true;

  startMusic = new Tone.Player("assets/StartSong.wav").toDestination();

  bgImage = loadImage('assets/bgImage (2).png');  
  winScreen = loadImage('assets/bgImage.png');


  //-----------------PLAYER--------------------------
  purpleMallow = new Sprite(purpleMallowX, 340, 96, 96);
  purpleMallow.spriteSheet = 'assets/Purple Mallow.png';
  //purpleMallow.collider = 'none';
  

  let animations = {
    idle: {row: 0, frames: 1},
    walk: {row: 0, col: 2, frames: 5},
    hurt: {row: 0, col: 8, frames: 4},
    knockout: {row: 0, col: 12, frames: 5},
    attack: {row: 0, col: 18, frames: 4}
  };
  purpleMallow.anis.frameDelay = 15;
  purpleMallow.addAnis(animations);
  purpleMallow.changeAni('idle');
  //-------------ENEMY------------------------------
 
  enemyMallow = new Sprite(enemyMallowX, 340, 96, 96);
  enemyMallow.spriteSheet = 'assets/Enemy Mallow.png';
  //enemyMallow.collider = 'none';

  let enemyAnimations = {
    enemyIdle: {row: 0, frames: 1},
    enemyWalk: {row: 0, col: 2, frames: 5},
    enemyHurt: {row: 0, col: 7, frames: 4},
    enemyKnockout: {row: 0, col: 12, frames: 4},
    enemyAttack: {row: 0, col: 17, frames: 4}
  };

  enemyMallow.anis.frameDelay = 15;
  enemyMallow.addAnis(enemyAnimations);
  enemyMallow.changeAni('enemyIdle');
}

function setup() {
  port = createSerial();
 createCanvas(400, 400);
 randomFunction = random(functions);
 
 connectButton = createButton("CONNECT");
 connectButton.mousePressed(connect);
  
 let usedPorts = usedSerialPorts();
 if (usedPorts.length > 0) {
   port.open(usedPorts[0], 57600);
 }

 
}

function draw() {
  switch(screen) {
    case 0: 
    start();
    if (mouseIsPressed) {
      screen++;
      startMusic.stop();
     gameplayMusic.start();
    } 
    break;
    case 1:
      background(bgImage);
       //------------HEALTH----------------
      rectMode(CENTER);


      stroke(82, 139, 75);
      fill(82, 139, 75);
      rect(50, 38, purpleHealth, 15);
      rect(350, 125, enemyHealth, 15);
      noFill();
      stroke(220);
      strokeWeight(5);
      rect(50, 38, 100, 15);
      rect(350, 125, 100, 15);

      strokeWeight(1);
      textSize(15);
      stroke(159, 103, 193);
      text('Purple', 30, 24);
      stroke(48, 70, 157);
      text('Enemy', 370, 111);
      playing();
      if (enemyHealth == 0 || purpleHealth == 0) {
        screen++;
      }
    break;
    case 2:
      gameOver()
    break;
  } 

}

function start() {
  //if (startMusic.state === "stopped")
  //  startMusic.start();
  background(185, 228, 249);
  textAlign(CENTER);
  textFont('Courier New')
  textSize(24);
  fill(82, 139, 75);
  stroke(82, 139, 75);
  strokeWeight(1.5);
  text('SQUISHMALLOW-WOP', 200, 150);
  text('Click to Start', 200, 200);
}

function playing() {
 let str = port.readUntil("\n");
 //console.log(str);
 let values = str.split(',');
 if (values.length > 2) {
   joyX = values[0];
   joyY = values[1];
   sw = Number(values[2]);

   if (joyX > 0) {
     purpleMoveRight();
   } else if (joyX < 0) {
     purpleMoveLeft();
   }
   else 
     stop();
 
  enemyMoveLeft();
  //randomFunction();


  // if (enemyMallow.x + enemyMallow.width/4 > width) {
  //   enemyMoveLeft();
  // } else if (enemyMallow.x - enemyMallow.width / 4 < 0) {
  //   enemyMoveRight();
  // }

  // if (purpleMallow.x + purpleMallow.width/4 > width) {
  //   purpleMoveLeft();
  // } else if (purpleMallow.x - purpleMallow.width / 4 < 0) {
  //   purpleMoveLeft();
  // }

  if (kb.pressing('d')) {
    purpleMoveRight();
  } else if (kb.pressing('a')) {
    purpleMoveLeft();
  } 
  
  if (sw == 1) {
    purpleAttack();
    purpleAttacking = true;
  } 

  if (purpleAttacking && purpleMallow.collides(enemyMallow)) {
    enemyHit();
    purpleAttacking = false;
    print(enemyHealth);
  } else {
    enemyMoveLeft();
  }

  purpleMallowX = constrain(purpleMallow.x, purpleMallow.width / 2, width - purpleMallow.width / 2);
  enemyMallowX = constrain(enemyMallow.x, enemyMallow.width / 2, width - enemyMallow.width / 2);



  // else if (kb.pressing('w')) {
  //   purpleAttack();
  //   if (purpleMallow.collides(enemyMallow)) {
  //     purpleAttacking = true;
  //     enemyHit();
  //   } else {
  //     enemyMoveRight();
  //   }
 


    // if (joyY > 0) {
    //   circleY += speed;
    // } else if (joyY < 0) {
    //   circleY -= speed;
    // }
  }

  // else if (sw == 1) {
  //   currentAttackFrame++;
  //   if (currentAttackFrame > attackDuration) {
  //     purpleAttacking = false;
  //     currentAttackFrame = 0;
  //   } else {
  //     purpleMallow.changeAni('attack')
  //     if (purpleMallow.collides(enemyMallow)) {
  //       enemyHit();
  //     }
  //   }
  // } 

}

function gameOver () {
  gameplayMusic.stop();
  background(winScreen);
  textSize(24);
  fill(82, 139, 75);
  stroke(82, 139, 75);
  strokeWeight(1.5);
  text('GAME OVER', 200, 200);
}

function enemyMoveLeft() {
  enemyMallow.changeAni('enemyWalk');
  enemyMallow.scale.x = 1;
  enemyMallow.vel.x = -0.75;
  enemyMallow.vel.y = 0;
}

function enemyMoveRight() {
  enemyMallow.changeAni('enemyWalk');
  enemyMallow.scale.x = -1;
  enemyMallow.vel.x = 0.75;
  enemyMallow.vel.y = 0;
}

function purpleMoveLeft() {
  purpleMallow.changeAni('walk');
  purpleMallow.scale.x = -1;
  purpleMallow.vel.x = -1
  purpleMallow.vel.y = 0
}

function purpleMoveRight() {
  purpleMallow.changeAni('walk');
  purpleMallow.scale.x = 1;
  purpleMallow.vel.x = 1
  purpleMallow.vel.y = 0
}

function purpleAttack() {
  purpleMallow.changeAni('attack');
}

function enemyAttack() {
  enemyMallow.changeAni('enemyAttack');
}

function stop() {
  purpleMallow.vel.x = 0;
  purpleMallow.vel.y = 0;
  purpleMallow.changeAni('idle');
}

function hit() {
  purpleMallow.changeAni('hurt');
  purpleMallow.vel.x = -3;
  purpleMallow.vel.y = 0;
  purpleHealth -= 10;

}

function enemyHit() {
  enemyMallow.changeAni('enemyHurt');
  enemyMallow.vel.x = 3;
  enemyMallow.vel.y = 0;
 // enemyAttack.scale.x = 1;
  enemyHealth -= 10;
}

function randomizePosition() {
  random(functions);
}

function connect() {
  if (!port.opened()) {
    port.open('Arduino', 57600);
  } else {
    port.close();
  }
}
