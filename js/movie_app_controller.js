var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){

	var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman';
	$scope.imagePath = 'http://image.tmdb.org/t/p/w300/'

	// $http.get(movieURL).success(function(movieData){
	// 	$scope.movieData = movieData.results;
	// }) similar to console.log

	//similar to console.dir...this shows the .then method.  It gets us JSON and http status information where .success only brings JSON info.
	$http({
		method: 'GET',
		url: movieURL
	}).then(function(movieData){
		$scope.movieData = movieData.data.results;
		console.log(movieData);
	}, function(movieData){
		console.log("There was an error!!");
	});
});