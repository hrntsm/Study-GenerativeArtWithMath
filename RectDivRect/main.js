//横縦比がnumA:numBによって分割
let numA = 10;
let numB = 7;
let ratio = numB / numA; 

function setup() {
  let itr = 0; 
  let xPos = 0;
  let yPos = 0;
  let wd;
  colorMode(HSB, 1);
  
  createCanvas(windowWidth, windowHeight);
  wd = windowWidth * ratio;

  while (wd > 0.1){
    itr++;
    // 奇数の場合
    if (itr % 2 == 1){
      while (xPos + wd < windowWidth + 0.1){
        divSquare(xPos, yPos, wd);
        xPos += wd;
      }
      wd = windowWidth - xPos;
    }
    // 偶数の場合
    else { 
      while (yPos + wd< windowWidth * ratio + 0.1){ 
        divSquare(xPos, yPos, wd);
        yPos += wd;
      }
      wd = windowWidth * ratio - yPos;
    }
  }
}

function windowResized(){
  let itr = 0; 
  let xPos = 0;
  let yPos = 0;
  let wd;
  resizeCanvas(windowWidth, windowHeight);
  wd = windowWidth * ratio;

  while (wd > 0.1){
    itr++;
    // 奇数の場合
    if (itr % 2 == 1){
      while (xPos + wd < windowWidth + 0.1){
        divSquare(xPos, yPos, wd);
        xPos += wd * ratio;
      }
      wd = windowWidth - xPos;
    }
    // 偶数の場合
    else { 
      while (yPos + wd< windowWidth * ratio + 0.1){ 
        divSquare(xPos, yPos, wd);
        yPos += wd;
      }
      wd = windowWidth * ratio - yPos;
    }
  }
}

function divSquare(xPos, yPos, wd) {
  let itr = 0;
  let xEndPos = wd + xPos;
  let yEndPos = wd + yPos;

  while (wd > 0.1){
    itr++;
    // 奇数の場合
    if (itr % 2 == 1){
      while (xPos + wd * ratio < xEndPos + 0.1){
        fill(color(random(1), 0.2, 1));    
        rect(xPos, yPos, wd * ratio, wd);
        xPos += wd * ratio;
      }
      wd = xEndPos - xPos;
    }
    // 偶数の場合
    else { 
      while (yPos + wd / ratio < yEndPos + 0.1){ 
        fill(random(1), 0.2, 1);
        rect(xPos, yPos, wd, wd / ratio);
        yPos += wd / ratio;
      }
      wd = yEndPos - yPos;
    }
  }
}
