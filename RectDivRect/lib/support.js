//キーボード操作への対応
var visible = true;
function keyPressed() {
  print("keyPressed:"+key);
  switch(key) {
  case 'H':
    visible = !visible;
    if (visible) gui.show(); 
    else gui.hide();
    break;
  case 'S':
    var y = year();
    var m = nf(month(), 2);
    var d = nf(day(), 2);
    var h = nf(hour(), 2);
    var min = nf(minute(), 2);
    var sec = nf(second(), 2);
    saveCanvas('canvas-'+y+m+d+"("+h+min+"-"+sec+")", 'png');
    break;
  }
}
