
//this is the function that all of my jquery goes in.
$(document).ready(function(event){  



// let converter = "http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1";


$.get("http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d", (response) => {
  processResponse(response);
});

function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
    console.log('handle currency conversion here');
  }
}

//this is my event listener in vanilla js 
document.body.addEventListener('click', convertCurrency);








})


// 6066c7fbd653b15e02cb1570cc7bc09d  this is my api for this site.

// let latest = "http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1"

//this is the example code from lecture.  Gotta put my url in here.
//also, the default datatype here is JSON, so no need to specify.
// $.get("http://data.fixer.io/api/latest?access_key=6066c7fbd653b15e02cb1570cc7bc09d&symbols=USD,AUD,CAD,PLN,MXN&format=1", (response) => {
//   processResponse(response);
// });