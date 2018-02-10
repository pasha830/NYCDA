// ======== Pizza Order Below ========= 

$(".final").css("background-color", "yellow");

$("#btn").click(function(){
	var name = $("#name").val();
	$("#result").html("<br>Hey " + (name) + ", your order summary below:")
	var size = {
		small: "9.99",
		medium: "10.99",
		large: "11.99"
	};	
	var qty = $("#qty").val();
	if($("#size").val() == "small"){
		var result = "<br>Order - Total: $" + (parseFloat(size.small)* parseInt(qty));
		$("#result").append(result);
	}
	if($("#size").val() == "medium"){
		var result = "<br>Order - Total: $" + (parseFloat(size.medium)* parseInt(qty));
		$("#result").append(result);
	}
	if($("#size").val() == "large"){
		var result = "<br>Ordered - Total: $" + (parseFloat(size.large)* parseInt(qty));
		$("#result").append(result);
	}

	if ($("#cheese").is(":checked")){
		$("#result").append("<br>Toppings include: Cheese, ");
	}
	if ($("#pepperoni").is(":checked")){
		$("#result").append("Pepperoni, ");
	}
	if ($("#greenpepper").is(":checked")){
		$("#result").append("Green pepper, ");
	}
	if ($("#olives").is(":checked")){
		$("#result").append("Olives");
	}
	if ($("#deliver").is(":checked")){
		$("#result").append("<br>Your order will be delivered to:");
	}
	 var address1 = $("#address1").val();
		$("#result").append("<br>" + address1);

	var address2 = $("#address2").val();
		if(address2 != ""){
		$("#result").append("<br>" + address2);
	}
	var city = $("#city").val();
		$("#result").append("<br>" + city + ", ");
	var state = $("#state").val();
		$("#result").append(state + " ");
	var zip = $("#zip").val();
		$("#result").append(zip);
})
