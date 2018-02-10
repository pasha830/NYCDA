var red = document.getElementsByClassName("red");

for (let i = 0; i < red.length; i++){
  red[i].onclick = function(){
    red[i].style.visibility = "hidden";
  }
}

var yellow = document.getElementsByClassName("yellow");

for (let i = 0; i < yellow.length; i++){
  yellow[i].onclick = function(){
    yellow[i].style.visibility = "hidden";
  }
}

var green = document.getElementsByClassName("green");

for (let i = 0; i < green.length; i++){
  green[i].onclick = function(){
    green[i].style.visibility = "hidden";
  }
}

var blue = document.getElementsByClassName("blue");

for (let i = 0; i < blue.length; i++){
  blue[i].onclick = function(){
    red[i].style.visibility = "hidden";
  }
}
