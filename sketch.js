let r = 0;
let a = 0;
let t = 0;

let bubbles = [];


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
    fill(random() * 255, random() * 255, 255);
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
  for (let i = 0; i < 100; i++) {
    bubbles[i] = new bubble();
  }
}

function draw() {
  //background(200, 50);
  translate(width / 2, height / 2);
  rotate(frameCount);
  angleMode(DEGREES);
 //create a spiral!
  let x = 0;
  let y = 0;
  let r = 0;
  let a = 0;
  let lastX, lastY;

  strokeWeight(20);
  //spiral color
  stroke("black");

  for (let i = 0; i < windowHeight; i++) {
    lastX = x;
    lastY = y;

    x = cos(a) * r;
    y = sin(a) * r;
    line(lastX, lastY, x, y);

    a += 8; //a = a+8
    r += 2; //r = r+2
  }

  //bubbles show + move
  for (let i = 0; i < 100; i++) {
    noStroke()
    bubbles[i].move()
    bubbles[i].show()
  }

}
