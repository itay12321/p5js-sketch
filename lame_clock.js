function setup() {
  createCanvas(200,200);
}

function draw() {
    translate(100,100);

  background(255);
  noFill();
  stroke(0);
  strokeWeight(5);
  circle(0,0,90);
  
  let sc = second();
  let mn = minute();
  let hr = hour();
  let alphasc = map(sc -15, 0, 60, 0, TWO_PI);
  let xsc = cos(alphasc) * 85;
  let ysc = sin(alphasc) * 85;
  line(0,0,xsc,ysc);
  let alphamn = map(mn -15, 0, 60, 0, TWO_PI);
  let xmn = cos(alphamn) * 65;
  let ymn = sin(alphamn) * 65;
  line(0,0,xmn,ymn);
  let alphahr = map(hr % 12 - 3 + mn / 60, 0, 12, 0, TWO_PI);
  let xhr = cos(alphahr) * 45;
  let yhr = sin(alphahr) * 45;
  line(0,0,xhr,yhr);
}
