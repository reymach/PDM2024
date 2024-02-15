let purple;
let roundGirl;
let yellow;

// let purpleX = random(50, 100);
// let purpleY = random(50, 100);

// let roundGirlX = random(100, 150);
// let roundGirlY = random(100, 150);

// let yellowX = random(150, 200); 
// let yellowY = random(150, 200);

function preload() {
  //------------------PURPLE------------------------------
  purple = new Sprite(random(width), random(height), 80, 80);
  purple.spriteSheet = 'assets/Purple.png';
  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  };
  purple.anis.frameDelay = 7;
  // purple.overlaps(roundGirl);
  // purple.overlaps(yellow);
  purple.addAnis(animations);

  //purple.changeAni('walkRight');


  //---------------ROUND GIRL-----------------------------
  roundGirl = new Sprite(random(width), random(height), 80, 80);
  roundGirl.spriteSheet = 'assets/RoundGirl.png';
  let roundAnimations = {
    roundStand: {row: 0, frames: 1},
    roundWalkRight: {row: 0, col: 1, frames: 8},
    roundWalkUp: {row: 5, frames: 6},
    roundWalkDown: {row: 5, col: 6, frames: 6}
  };
  roundGirl.anis.frameDelay = 7;
  // roundGirl.overlaps(purple);
  // roundGirl.overlaps(yellow);
  roundGirl.addAnis(roundAnimations);

  //roundGirl.changeAni('roundWalkRight');

  //------------------YELLOW------------------------------
  yellow = new Sprite(random(width), random(height), 80, 80);
  yellow.spriteSheet = 'assets/Yellow.png';
  let yellowAnimations = {
    yellowStand: {row: 0, frames: 1},
    yellowWalkRight: {row: 0, col: 1, frames: 8},
    yellowWalkUp: {row:5, frames: 6},
    yellowWalkDown: {row: 5, col: 6, frames: 6}
  };
  yellow.anis.frameDelay = 7;
  // yellow.overlaps(roundGirl);
  // yellow.overlaps(purple);
  yellow.addAnis(yellowAnimations);
 
 


  // purple.layer = 1;
  // roundGirl.layer = 2;
  // yellow.layer = 3;

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

  if(roundGirl.x + roundGirl.width/4 > width) {
    roundGirl.vel.x = -1;
    roundGirl.scale.x = -1;
  } else if (roundGirl.x - roundGirl.width/4 < 0) {
    roundGirl.vel.x = 1;
    roundGirl.scale.x = 1;
  }

  if (yellow.x + yellow.width/4 > width) {
    yellow.vel.x = -1;
    yellow.scale.x = -1;
  } else if (yellow.x - yellow.width/4 < 0) {
    yellow.vel.x = 1;
    yellow.scale.x = 1;
  }
}

function stop () {
  purple.vel.x = 0;
  purple.vel.y = 0;
  purple.changeAni('stand');

  roundGirl.vel.x = 0;
  roundGirl.vel.y = 0;
  roundGirl.changeAni('roundStand');

  yellow.vel.x = 0;
  yellow.vel.y = 0;
  yellow.changeAni('yellowStand');
}

function walkRight () {
  purple.changeAni('walkRight');
  purple.vel.x = 1;
  purple.scale.x = 1;
  purple.vel.y = 0;

  roundGirl.changeAni('roundWalkRight');
  roundGirl.vel.x = 1;
  roundGirl.scale.x = 1;
  roundGirl.vel.y = 0;

  yellow.changeAni('yellowWalkRight');
  yellow.vel.x = 1;
  yellow.scale.x = 1;
  yellow.vel.y = 0;
}

function walkLeft () {
  purple.changeAni('walkRight');
  purple.vel.x = -1;
  purple.scale.x = -1;
  purple.vel.y = 0;

  roundGirl.changeAni('roundWalkRight');
  roundGirl.vel.x = -1;
  roundGirl.scale.x = -1;
  roundGirl.vel.y = 0;

  yellow.changeAni('yellowWalkRight');
  yellow.vel.x = -1;
  yellow.scale.x = -1;
  yellow.vel.y = 0;
}

function walkUp () {
  purple.changeAni('walkUp');
  purple.vel.y = -1;
  purple.vel.x = 0;

  roundGirl.changeAni('roundWalkUp');
  roundGirl.vel.y = -1;
  roundGirl.vel.x = 0;

  yellow.changeAni('yellowWalkUp');
  yellow.vel.y = -1;
  yellow.vel.x = 0;
}

function walkDown () {
  purple.changeAni('walkDown');
  purple.vel.y = 1;
  purple.vel.x = 0;

  roundGirl.changeAni('roundWalkDown');
  roundGirl.vel.y = 1;
  roundGirl.vel.x = 0;

  yellow.changeAni('yellowWalkDown');
  yellow.vel.y = 1;
  yellow.vel.x = 0;
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