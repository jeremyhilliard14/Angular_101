var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	$scope.countries = [
		{
			name: "Canada",
			population: 35160000,
			leader: "Justin Trudeau",
			flagColors: "Red and White" 
		},
		{
			name: "USA",
			population: 318900000,
			leader: "Barack Obama",
			flagColors: "Red, White and Blue"
		},
		{
			name: "Germany",
			population: 80620000,
			leader: "Angela Merkel",
			flagColors: "Red, Yellow and Black"
		},
		{
			name: "Switzerland",
			population: 8081000,
			leader: "Johann Schneider-Ammann",
			flagColors: "Red and White"
		},
		{
			name: "Panama",
			population: 3929141,
			leader: "Juan Carlos Verla",
			flagColors: "Red, White and Blue"
		},
		{
			name: "Mexico",
			population: 119530753,
			leader: "Enrique Pena Nieto",
			flagColors: "Red, White and Green"
		},
		{
			name: "UK",
			population: 64716000,
			leader: "David Cameron",
			flagColors: "Red, White and Blue"
		},
		{
			name: "Russia",
			population: 144192450,
			leader: "Vladimir Putin",
			flagColors: "Red, White and Blue"
		},
		{
			name: "China",
			population: 1376049000,
			leader: "Xi Jinping",
			flagColors: "Red and Yellow"
		},
		{
			name: "India",
			population: 1276267000,
			leader: "Pranab Mukherjee",
			flagColors: "Orange, White, Green and Blue"
		},
	];

	$scope.addCountry = function(){
		$scope.countries.push($scope.newCountry);
	 	$scope.newCountry = '';
		// console.log(newCountry);
	}
});