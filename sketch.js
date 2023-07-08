let xspacing = 163; // How far apart should each horizontal position be spaced
let w; // Width of entire wave
let maxwaves = 0.75; // total # of waves to add together

var lines, markov;

let theta = 0;
let amplitude = []; // Height of wave
let dx = []; // Value for incrementing X, to be calculated as a function of period and xspacing
let yvalues; // Using an array to store height values for the wave (not entirely necessary)


var font,
    fontsize = 22;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
      w = width;

  textFont("Work Sans");
  
    for (let i = 0; i < maxwaves; i++) {
        amplitude[i] = 102;
        let period = 500; // How many pixels before the wave repeats
        dx[i] = (TWO_PI / period) * xspacing;
    }

    yvalues = [];
}

function draw() {
  clear();
      calcWave();

  tsikua();
}

  
  