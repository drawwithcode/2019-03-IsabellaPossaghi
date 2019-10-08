//bubbles variables

let bubbles = [];
let amountOfBubbles = 200;


class bubble {
  //constructor: initialize properties
  constructor() {
    // math.abs = return the absolute value of a number
    // ex: -1,6 = 1,6
    this.x = Math.abs(Math.random());
    this.y = Math.abs(Math.random());
    this.diameter = Math.floor(Math.random() * 50);
    this.xvel = Math.abs(Math.random() * 25);
    this.yvel = Math.abs(Math.random() * 25);
  }

  show() { //bubbles appearance where + how

    //ellipse position (this.x, this.y) and ellipse dimensions (this.diameter, this.diameter)
    ellipse(this.x, this.y, this.diameter, this.diameter);

    //fill with random colors
    fill(Math.random() * 255, Math.random() * 255, 255);
    //some mouse magic
    if (mouseIsPressed) {
      fill(255, Math.random() * 255, Math.random() * 255);
    }
  }


  move() { //bubbles behaviour

    //describe bubbles position
    this.x = this.x + this.xvel;
    this.y = this.y + this.yvel;

    //bubbles bouncing against the frame
    if (this.x > windowWidth || this.x < 0) {
      this.xvel = -this.xvel
    }
    //bubbles bouncing against the frame
    if (this.y > windowHeight || this.y < 0) {
      this.yvel = -this.yvel
    }

  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  //Create an object called "bubble" based on the "bubble" class
  for (let i = 0; i < amountOfBubbles; i++) {
    bubbles[i] = new bubble();
  }


}

function draw() {
  //background(200, 50);
  translate(width / 2, height / 2);
  rotate(frameCount);
  angleMode(DEGREES);
  //create a spiral!
  //spiral variables
  let x = 0;
  let y = 0;
  let r = 0;
  let a = 0;
  let lastX, lastY;

  strokeWeight(20);

  ////some mouse magic pt.2
  if (mouseIsPressed) {
    stroke("white");
  } else {
    stroke("black");
  }

  for (let i = 0; i < windowHeight; i++) {
    lastX = x;
    lastY = y;

    x = cos(a) * r;
    y = sin(a) * r;
    line(lastX, lastY, x, y);

    a += 6; //a = a+6, space between bows
    r += 1; //r = r+1
  }

  //bubbles show + move
  for (let i = 0; i < 200; i++) {
    noStroke();
    bubbles[i].move();
    bubbles[i].show();

  }
}
