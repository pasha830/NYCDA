// ===========supply calculator below =========


$("body").css("background-color", "purple");
$("h1").css("textAlign", "center");
$("h1").css("color", "white");
$("label").css("color", "white");
$("label").css("fontSize", "20px")
$("#result").css("color", "white");
$("#result").css("display", "block")
$("#result").css("text-align", "center");
$("#result").css("color", "white");
$("#result").css("fontSize", "20px");

// =============================================


$("#btn").click(function(){
  var age = $("#age").val();
  var live = $("#live").val();
  var daily = $("#daily").val();
  var drink = $("#drink").val(); 
  var result = (parseFloat(live) - parseFloat(age)) * 365 * parseInt(daily);
  $("#result").html("You will drink " + "<span id='total' >"+ result + "</span>" + " more glasses of " + drink + " in your lifetime.");
  $("#total").css("color", "black");
})