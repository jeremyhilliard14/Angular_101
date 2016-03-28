
//Vanilla Javascript way!
// var myInput = document.getElementById('myInput');

// myInput.addEventListener('keyup', function(){
// 	//console.log('User hit a key!');
// 	var userText = myInput.value;
// 	document.getElementById('inputText').innerHTML = userText;

// })


//Jquery Way!
// 

var myApp = angular.module('myApp', []);
//console.log(myApp);

myApp.controller('myController', function($scope){
	// $scope.first = "Jeremy";
	// $scope.last = "Hilliard";

	// $scope.dcClass = [
	// 	'Tristan', 
	// 	'Josh',
	// 	'Bogden',
	// 	'Lazlo',
	// 	'Keith',
	// 	'Will',
	// 	'Curtis',
	// 	'Joe',
	// 	'Kochan',
	// 	'Patrick',
	// 	'Jonathan',
	// 	'Jeremy'
	// ];

	$scope.cities = [
		{
			name: "Atlanta",
			population: 500000
		},
		{
			name: "Houston",
			population: 2200000
		},
		{
			name: "Portland",
			population: 610000
		}
	];

	$scope.addStudent = function(){
		$scope.dcClass.push($scope.newStudent);
		$scope.newStudent = '';
	}
	
	$scope.removeStudent = function(student){
		var i = $scope.dcClass.indexOf(student);
		console.log(i);
		$scope.dcClass.splice(i,1); 
	
	}
});