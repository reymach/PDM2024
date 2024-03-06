
let synth1 = new Tone.PolySynth(Tone.Synth);
let synth2 = new Tone.PolySynth(Tone.DuoSynth);

let phase = new Tone.Phaser({
  frequency: 20,
});
let phaserSlider ;


synth1.connect(phase);
synth2.connect(phase);
phase.toDestination();

let notes = {
  'q' : 'C3',
  'w' : 'D3',
  'e' : 'E3',
  'r' : 'F3',
  't' : 'G3',
  'y' : 'A3',
  'u' : 'Bb3',
  'a' : 'C4',
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'Bb4',
  'k' : 'C5'  
}



function setup() {
  createCanvas(400, 400);

  mySelect = createSelect();
  mySelect.position(100, 100);
  mySelect.option('Simple Synth');
  mySelect.option('Duo Synth');
  mySelect.selected ('Simple Synth');

  phaserSlider = createSlider(0, 1, 0, 0.05);
  phaserSlider.position(100, 220)
  phaserSlider.mouseMoved (() => phase.frequency.value = phaserSlider.value());

}

function keyPressed() {
  if (mySelect.selected() === 'Simple Synth') {
  let playNotes = notes[key];
  synth1.triggerAttackRelease(playNotes, 0.8);
  } else if (mySelect.selected() === 'Duo Synth') {
    let playNotes = notes[key];
    synth2.triggerAttackRelease(playNotes, 0.8);
  }
}

// function keyReleased() {
//   let playNotes = notes[key];
//   synth.triggerRelease(playNotes, );
// }

function draw() {
  background(220, 100, 220);
  text('play Q-U and A-K for synth', 100, 200);
  text('phaser', 100, 275 )
}
