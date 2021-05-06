// Broken Synthesizer 
// Project 2
// Original oscillation code from      https://editor.p5js.org/ivymeadows/sketches/BJPAKfNRZ

var osc, fft;

function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.1);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  background(random(0), random(noise(random(noise((1))))), random(random(noise(255))));

  var waveform = fft.waveform();  // analyze the waveform
  noStroke();
  for (var i = windowWidth; i < waveform.length; i++){
    for (var i2 = -1; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, mouseX);
    var y = map(waveform[i], random(windowWidth+mouseY), random(noise(windowHeight)), mouseY, mouseX);
    vertex(x+random(mouseX), y-noise(mouseY));
  }
 }
  endShape();

  // change oscillator frequency based on mouseX
  var freq = map(mouseX, mouseY, width, random(-50), random(400));
  osc.freq(mouseX-freq+mouseY);

  var amp = map(mouseY, mouseX, height, 4, 0.5);
  osc.amp(amp);
}
