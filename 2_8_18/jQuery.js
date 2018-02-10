$("h1").hide(2000);
$("h1").show(1000);
$("h1").css({
	color: "blue",
	backgroundColor: "white",
})
$("h1").html("Hey! It changed!!");

$("img").slideUp(1000);
$("img").slideDown(3000);

$("p").fadeOut(3000);
$("p").fadeIn(1300);
$("p").css({
	color: "red",
})

$("body").css("background-color", "lightblue"); //when writing .css ("property name", "property value")

$(document).click(function(){
	$("body").css("background-color", "green");
	$("img").attr("src", "https://pbs.twimg.com/media/Bbht1f6IIAAzZ7w.jpg");
	$("p").css("color", "white");
	$("h1").append(" so what?");
})

$("body").animate({
	opacity: 0.5,
	width: "500px"
	}, 2000)

//.attr("name", "value"); 
//.atr("src", "photo.jpg")
// adding to something use .append
// to replace something us .html