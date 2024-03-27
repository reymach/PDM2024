let sprite;
let dragonflies = [];
score = 0
timeRemaining = 15
gameOver = false;


// let player = new Tone.Player("assets/MySong4.mp3").toDestination();
// player.loop = true;

let dragonflySound = new Tone.Player("assets/dragonflysound.mp3").toDestination();


function preload() {
  
  

  let animations = {
    fly: {row: 0, frames: 5},
    squished: {row: 0, col: 5, frames: 1}
  };

 
  
    for (let i = 0; i < 30; i++) {
      
      dragonflies.push(new Dragonfly (random(20, 380), random(50, 380), 32, 32, 'assets/Dragonfly.png', animations))
    } 

   
  
 // dragonflies.push(new dragonfly(100, 100, 32, 32, 'assets/Dragonfly.png', animations));
}


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);


  for (let i = 0; i < dragonflies.length; i++) {
    let randomFunction = random(['up', 'down', 'right', 'left']);
    dragonflies[i][randomFunction]();
   
    
  }
 


}

function draw() {
  background(0);

  if (gameOver) {
    gameDone();
   
  } else {
    playing();
    
  }
 
}





function playing() {

  // player.start();

  fill(200, 0, 200);
  rectMode(CENTER);
  rect(50, 25, 300, 60);
  textSize(20)
  fill(255);
  text("Time Remaining: " + ceil(timeRemaining), 20, 20 )
  text("Score: " + score, 20, 50)

  timeRemaining = timeRemaining - deltaTime/1000
  
  if (timeRemaining  < 0) {
    gameOver = true;
  }

  dragonflies.forEach((dragonfly) => {
  if (dragonfly.sprite.x + dragonfly.sprite.width/2 > width) {
    dragonfly.left();
  } else if (dragonfly.sprite.x - dragonfly.sprite.width < 0) {
    dragonfly.right();
  } else if (dragonfly.sprite.y + dragonfly.sprite.height/2 > height) {
    dragonfly.up();
  } else if (dragonfly.sprite.y - dragonfly.sprite.height/2 < 0) {
    dragonfly.down();
  } //else if (mouse.released()) {
   // dragonfly.dead()
    //dragonflySound.start();
  //}

  }
  
  )

  

  
}



function mouseClicked() {
  dragonflies.forEach((dragonfly) => {
    // mouse.overlaps(dragonfly, dead)
    dragonfly.dead();
    dragonflySound.start();
  }
)};


// (dragonfly.overlaps(mouseX, mouseY))

function gameDone() {
  // player.stop();

  rectMode(CENTER);
  fill(200, 0, 200);
  rect(200, 220, 230, 100)
  fill(255);
  text("Final Score: " + score, 100, 200);
  text("Refresh to Play Again!", 100, 250);
}


class Dragonfly {
  constructor(x, y, width, height, spriteSheet, animations) {
    this.sprite = new Sprite(x, y, width, height);
    this.sprite.spriteSheet = spriteSheet;

    this.sprite.anis.frameDelay = 7;
    this.sprite.addAnis(animations);
    this.sprite.changeAni('fly');
    this.sprite.collider = 'none';

  }

  up() {
    this.sprite.changeAni('fly')
    this.sprite.scale.y = 1
    this.sprite.vel.y = -1
    this.sprite.vel.x = 0;
  }

  down() {
    this.sprite.changeAni('fly')
    this.sprite.scale.y = -1
    this.sprite.vel.y = 1
    this.sprite.vel.x = 0
  }

  right() {
    this.sprite.changeAni('fly')
    this.sprite.scale.y = 1
    this.sprite.vel.x = 1;
    this.sprite.vel.y = 0;
    this.sprite.rotation = 90;
  }

  left() {
    this.sprite.changeAni('fly')
    this.sprite.scale.y = 1
    this.sprite.vel.x = -1
    this.sprite.vel.y = 0
    this.sprite.rotation = 270;
  }


  dead() {
    this.sprite.changeAni('squished')
    this.sprite.vel.y = 0
    this.sprite.vel.x = 0
    score++
    if (score > 30) {
      score = 30;
    }
  }

  overlap() {
    mouseX = this.sprite.x
    mouseY = this.sprite.y
  }
}

