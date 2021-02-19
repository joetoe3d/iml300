/* var toggle = false;

function Mos(x, y, l, col, tx) {
  this.x = x;
  this.y = y;
  this.x2 = x + l;
  this.y2 = y;
  this.col = col;
	this.tx = tx;
  this.show = function() {
    stroke(this.col);
    line(this.x, this.y, this.x2, this.y2);
  };
  this.jig = function() {
    this.x += random(-5, +5);
    this.x2 += random(-5, +5);
  };
	
	this.trans = function() {
	 this.x += this.tx;
		this.x2 += this.tx;
	}
  // this.transR = function() {
  //   this.x += 50;
  //   this.x2 += 50;
  // };
  // this.transL = function() {
  //   this.x -= 50;
  //   this.x2 -= 50;
  // };
}

var morseL = [];
var morseR = [];

let pg;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
  pg = createGraphics(900, windowHeight+400);

  mos = new Mos(100, 100, 100);
  for (var i = -height; i < height; i++) {
    morseL[i] = new Mos(100, i, 200, '##79a1d9', 50);
  }
  for (var j = -height; j < height / 2; j++) {
    morseR[j] = new Mos(250, 2 * j - 1, 200, '#6B9BFF', -50);
  }
}

function draw() {
  background(255);
  push();
  translate(0,0);
  rotate(PI/4);
  for (var i = -height; i < morseL.length; i++) {
    morseL[i].jig();
    morseL[i].show();
  }
  for (var j = -height; j < morseR.length; j++) {
    morseR[j].jig();
    morseR[j].show();
  }
	pop();
  //interaction
  stroke(255);
  for (var n = -height; n < morseL.length; n++) {
    if (n % 2 == 1 |n % 2 == -1) {
      line(mouseX - 10, morseL[n].y, morseL[n].x + n / 3, morseL[n].y);
    }
  }
  interact();
  
}

// function interact() {
//   if (mouseX > width && toggle === false) {
//     for (var i = -height; i < height; i++) {
//       morseL[i].trans();
//     }
//     for (var j = -height; j < height / 2; j++) {
//       morseR[j].trans();
//     }

//     toggle = true;
//   } else if (mouseX < width && toggle === true) {
//     toggle = false;
//   }
// }


function touchMoved() {
  // strokeWeight(10);
  // stroke(0);
  // For single touch mouseX and mouseY work just fine
  // line(mouseX, mouseY, pmouseX, pmouseY);

  // This prevents dragging screen around
    if (mouseX > width && toggle === false) {
    for (var i = -height; i < height; i++) {
      morseL[i].trans();
    }
    for (var j = -height; j < height / 2; j++) {
      morseR[j].trans();
    }

    toggle = true;
  } else if (mouseX < width && toggle === true) {
    toggle = false;
  }
  return false;
}
*/
function setup() {
  createCanvas(710, 400, WEBGL);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
  pg = createGraphics(900, windowHeight+400);
}

function draw() {
  background(100);

  noStroke();
  fill(50);
  push();
  translate(-275, 175);
  rotateY(1.25);
  rotateX(-0.9);
  box(100);
  pop();

  noFill();
  stroke(255);
  push();
  translate(500, height * 0.35, -200);
  sphere(300);
  pop();
}
