//横縦比がnumA:numBの長方形を正方形によって分割
let numA = 10;
let numB = 6;
let scalar = 50;   //長方形の拡大倍率
numA *= scalar;       //数値の大きさを拡大
numB *= scalar;
//プログラム実行中に動く変数
let wd = numB;    //分割に使う正方形の幅の大きさ(初期値numB)
let xPos = 0;    //正方形のx位置(初期値0)
let yPos = 0;    //正方形のy位置(初期値0)
let itr = 0;  //分割の繰り返し回数(初期値0)

//設定の関数（最初に一度だけ実行）
function setup() {
  //描画
  createCanvas(600, 600);    //描画ウィンドウサイズ
}

//描画の関数（何度も実行）
function draw() {
  while (wd > 0){ //幅が0になるまで以下を実行
  itr++;              //繰り返し回数を1増やす
  if (itr % 2 == 1){      //繰り返し回数が奇数のとき，x軸方向へ正方形を増やす
    while (xPos + wd <= numA){    //幅を足したとき，長方形を超えなければ以下を実行
      rect(xPos, yPos, wd, wd);      //(xPos,yPos)を左上の頂点とする1辺wdの正方形を描画
      xPos += wd;                //x位置を更新
    }
    wd = numA - xPos;             //幅を更新
  } else {              //繰り返し回数が偶数のとき，y軸方向へ正方形を加える
    while (yPos + wd <= numB){    //幅を足したとき，長方形を超えなければ以下を実行
      rect(xPos, yPos, wd, wd);      //(xPos,yPos)を左上の頂点とする1辺wdの正方形を描画
      yPos += wd;                //y位置を更新
    }
    wd = numB - yPos;            //幅を更新
  }
}
}