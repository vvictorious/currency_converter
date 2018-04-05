//this is the function that all of my jquery goes in.
$(document).ready(function(event){  

const api = "http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d";


$.get(api, function (response) {
	console.log(response);

			// console.log(event);
			 let countryCode; 
			 $("input[type=button]").on("click", function(){
			countryCode = $(this).val();
			response.rates[countryCode]
			let cashInput = $("input[type=text]").val();
			let europe = cashInput / response.rates["USD"];
			let final = europe * response.rates[countryCode]; 
					
			$("#output_amount").append("<p> this equals " + final + "" + countryCode + ". </p>")
		})







});

});






		// $("input[type=text]").on("click", function(event){

 // let countryCode; $(".currencyBtn").on("click", function() {









// let countryCode;


// //step1 is click happens slash event listener.  the [type=button] can be replaced with a class or id selector
// $("input[type=button]").on("click", function(){
// 	//name of the country
// 	countryCode = $(this).val

// 	$.get("http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1"),
// 	 function (response) {
// 	 	console.log(response);

// 	 	//get exchange rate
// 	 	response.rate[countryCode]

// 	 	//input is euros, so i gotta convert it to dollars, then to whatever

// 	 	let dollarInput = $("input[type=text]").val();
// 	 	leteuroEquivalent = dollarInput / response.rates["USD"];
// 	 	let finalAnswer = euroEquivalent * response.rates[countryCode];   //something else on this line

// 	 	//next append to the dom

// 	 	$("#output_amount").append("<p> this equals " + finalAnswer + "" + countryCode + ". </p>")
// 	 }
// });


// let converter = "http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1";


// let key="http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1"

// also, the default datatype here is JSON, so no need to specify.
// this is the example code from lecture.  Gotta put my url in here.
// $.get("http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1", (response) => {
//   processResponse(response);
// });



// function convertCurrency(event) {
//   if ('type' in event.target && event.target.type === 'button') {
//     console.log('handle currency conversion here');
//   }
// }

// //this is my event listener in vanilla js 
// document.body.addEventListener('click', convertCurrency);










// 6066c7fbd653b15e02cb1570cc7bc09d  this is my api for this site.

// let latest = "http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1"

//this is the example code from lecture.  Gotta put my url in here.
//also, the default datatype here is JSON, so no need to specify.
// $.get("http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1", (response) => {
//   processResponse(response);
// });


// let countryCode;


// //step1 is click happens slash event listener.  the [type=button] can be replaced with a class or id selector
// $("input[type=button]").on("click", function(){
// 	//name of the country
// 	countryCode = $(this).val

// 	$.get("http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1"),
// 	 function (response) {
// 	 	console.log(response);

// 	 	//get exchange rate
// 	 	response.rate[countryCode]

// 	 	//input is euros, so i gotta convert it to dollars, then to whatever

// 	 	let dollarInput = $("input[type=text]").val();
// 	 	leteuroEquivalent = dollarInput / response.rates["USD"];
// 	 	let finalAnswer = euroEquivalent * response.rates[countryCode];   //something else on this line

// 	 	//next append to the dom

// 	 	$("#output_amount").append("<p> this equals " + finalAnswer + "" + countryCode + ". </p>")
// 	 }
// });

// ================================================================================