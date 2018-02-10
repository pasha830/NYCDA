var pass = document.getElementById("pass");
var btn = document.getElementById("btn");
var result1 = document.getElementById("result1");

var staff = document.getElementById("staff");
var result2 = document.getElementById("result2");

var client = document.getElementById("client");
var result3 = document.getElementById("result3");

var loc = document.getElementById("loc");
var result4 = document.getElementById("result4");

btn.addEventListener("click", function(){
  if(pass.value == "123"){
  result1.innerHTML = "You are logged in.";
  }else{
    result1.innerHTML = "Password failed";
  }
  if(staff.checked == true){
    result2.innerHTML = "You are a member of staff";
  }else{
    result2.innerHTML = "You are not a staff";
  }
    if(client.checked == true){
    result3.innerHTML = "You are a client";
  }else{
    result3.innerHTML = "You are not a client";
  }
    if(loc.value == "New York"){
    result4.innerHTML = "Go Yankees!!";
  }else{
    result4.innerHTML = "You are from " + loc.value;
  }
});