// ===========Calculator Below =========

$("#btn").click(function(){
  var num1 = $("#num1").val();
  var num2 = $("#num2").val();
  var ops = $("#ops").val();
  if(ops == "Add"){
  	var result = parseInt(num1) + parseInt(num2);
  }
    if(ops == "Subtract"){
  	var result = parseInt(num1) - parseInt(num2);
  }
    if(ops == "Divide"){
  	var result = parseFloat(num1) / parseFloat(num2);
  }
    if(ops == "Multiply"){
  	var result = parseFloat(num1) * parseFloat(num2);
  }
  result = result.toFixed(2);
  $("#result").html(result);
})


