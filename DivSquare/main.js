//横縦比がnumA:numBによって分割
let numA = 6;
let numB = 10;
let ratio = numB / numA; 
// 正方形の位置
let xPos = 0;
let yPos = 0;
//分割の繰り返し回数(初期値0)
let itr = 0;
// 色
let col;

let wd;

function setup() {
  createCanvas(700, 700);
  wd = windowWidth
}

function draw() {
  colorMode(HSB, 1);
  while (wd > 0.1){
    itr++;
    // 奇数の場合
    if (itr % 2 == 1){
      while (xPos + wd * ratio < windowWidth + 0.1){
        fill(color(random(1), 0.2, 1));    
        rect(xPos, yPos, wd * ratio, wd);
        xPos += wd * ratio;
      }
      wd = windowWidth - xPos;
    }
    // 偶数の場合
    else { 
      while (yPos + wd / ratio < windowWidth + 0.1){ 
        fill(random(1), 0.2, 1);
        rect(xPos, yPos, wd, wd / ratio);
        yPos += wd / ratio;
      }
      wd = windowWidth - yPos;
    }
  }
}
