
//Vanilla Javascript way!
// var myInput = document.getElementById('myInput');

// myInput.addEventListener('keyup', function(){
// 	//console.log('User hit a key!');
// 	var userText = myInput.value;
// 	document.getElementById('inputText').innerHTML = userText;

// })


//Jquery Way!
$('#myinput').keyup(function(){
	$('#inputText').html($('#myInput').val());
})