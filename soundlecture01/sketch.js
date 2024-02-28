let soundFX, button1, button2;

function preload() {
  soundFX = new Tone.players {{
    popcorn: "assets/popcorn.mp3";
    water: "assets/water.mp3"
  }}.toDestination(); //tells audio to go to speakers
  
}

// function keyPressed() {
//   if (key === 'q') {
//     soundFX.player('popcorn').start();
//   } else if (key === 'w') {
//     soundFX.player('water').start();
//   }
// }

function setup() {
  createCanvas(400, 400);

  button1 = createButton('Popcorn Maker');
  button1.position (85, 150);
  button1.mousePressed (play1);


}

function play1 () {
  soundFX.player ('popcorn').start();
}

function draw() {
  background(220, 100, 100);
  // text("Press Q or W", 120, 150)
}
