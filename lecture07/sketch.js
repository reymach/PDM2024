let purple;
let roundGirl;
let yellow;




function preload() {
  //------------------PURPLE------------------------------
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  };

 let character = new Character (100, 100, 80, 80, 'assets/Purple.png', animations);
 

}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);

  if (kb.pressing('d')) {
    walkRight();
  }
  else if (kb.pressing('a')) {
    walkLeft();
  } 
  else if (kb.pressing('w')) { 
    walkUp();
  } 
  else if (kb.pressing('s')) {
    walkDown();
  } 
  else {
    stop();
  }
  
  if (purple.x + purple.width/4 > width) {
    purple.vel.x = -1;
    purple.scale.x = -1;
  } else if (purple.x - purple.width/4 < 0) {
    purple.vel.x = 1;
    purple.scale.x = 1;
  }


  }

  class Character {
    constructor(x, y, width, height, spriteSheet, animations) {
      this.sprite = new Sprite(x, y, width, height);
      this.sprite.spriteSheet = spriteSheet;

      this.sprite.anis.frameDelay = 7;
      this.sprite.addAnis(animations);
    }
  }


function stop () {
  sprite.vel.x = 0;
  sprite.vel.y = 0;
  sprite.changeAni('stand');


}

function walkRight () {
  sprite.changeAni('walkRight');
  sprite.vel.x = 1;
  sprite.scale.x = 1;
  sprite.vel.y = 0;

  
}

function walkLeft () {
  sprite.changeAni('walkRight');
  sprite.vel.x = -1;
  sprite.scale.x = -1;
  sprite.vel.y = 0;

 
}

function walkUp () {
  sprite.changeAni('walkUp');
  sprite.vel.y = -1;
  sprite.vel.x = 0;

  
}

function walkDown () {
  sprite.changeAni('walkDown');
  sprite.vel.y = 1;
  sprite.vel.x = 0;


}

function keyTypedOld() {
  switch(key) {
    case 'd':
    walkRight();
      break;
    case 'a':
    walkLeft();
      break;
    case 'w':
    walkUp();
      break;
    case 's':
    walkDown();
      break;

  }
}