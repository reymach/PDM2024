
let sprite;
let characters = [];



function preload() {

  let animations = {
    stand: { row: 0, frames: 1},
    walkRight: {row: 0, col: 1, frames: 8},
    walkUp: {row: 5, frames: 6},
    walkDown: {row: 5, col: 6, frames: 6}
  };

 characters.push(new Character (random(25, 375), random(25, 375), 80, 80, 'assets/RoundGirl.png', animations));
 characters.push(new Character (random(25, 375), random(25, 375), 80, 80, 'assets/Purple.png', animations));
 characters.push(new Character (random(25, 375), random(25, 375), 80, 80, 'assets/Yellow.png', animations));

}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);

characters.forEach((character) => {
  if (kb.pressing('arrowRight')) {
    character.walkRight();
  }
  else if (kb.pressing('arrowLeft')) {
    character.walkLeft();
  } 
  else if (kb.pressing('arrowUp')) { 
    character.walkUp();
  } 
  else if (kb.pressing('arrowDown')) {
    character.walkDown();
  } 
  else {
    character.stop();
  }

  if (character.sprite.x + character.sprite.width/4 > width) {
    character.walkLeft();
} else if (character.sprite.x - character.sprite.width/4 < 0) {
    character.walkRight();
} 

})
 
  



  }

  class Character {
    constructor(x, y, width, height, spriteSheet, animations) {
      this.sprite = new Sprite(x, y, width, height);
      this.sprite.spriteSheet = spriteSheet;

      this.sprite.anis.frameDelay = 7;
      this.sprite.addAnis(animations);
      this.sprite.changeAni('stand');
      this.sprite.collider = 'none';
    }

    stop () {
      this.sprite.vel.x = 0;
      this.sprite.vel.y = 0;
      this.sprite.changeAni('stand');
    
    
    }
    
     walkRight () {
      this.sprite.changeAni('walkRight');
      this.sprite.vel.x = 1;
      this.sprite.scale.x = 1;
      this.sprite.vel.y = 0;
    
      
    }
    
     walkLeft () {
      this.sprite.changeAni('walkRight');
      this.sprite.vel.x = -1;
      this.sprite.scale.x = -1;
      this.sprite.vel.y = 0;
    
     
    }
    
     walkUp () {
      this.sprite.changeAni('walkUp');
      this.sprite.vel.y = -1;
      this.sprite.vel.x = 0;
    
      
    }
    
     walkDown () {
      this.sprite.changeAni('walkDown');
      this.sprite.vel.y = 1;
      this.sprite.vel.x = 0;
    
    
    }


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