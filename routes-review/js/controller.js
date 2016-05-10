var viewsApp = angular.module('viewsApp', ['ngRoute', 'ngAnimate', ]);

viewsApp.config(function($routeProvider){
	$routeProvider.when('/:template', {
		controller: 'viewsController',
		templateUrl: function($routeParams){
			return 'template' + $routeParams.template + '.html';
			//if you set it up as a function you can add some logic to the fuction.
		}
	})
	//You do not need to set it up as a function!
	// $routeProvider.when('/:template', {
	// 	controller: 'viewsController',
	// 	templateUrl: 'template' + $routeParams.template + '.html'	
	// })
	$routeProvider.otherwise({
		redirectTo: '/0'
	});
})

viewsApp.controller("viewsController", function ($scope, $location, locationStorageService) {
// 	// localStorageService.set('myGolfer', 'ZachJohnson')
	var myGolfer = localStorageService.get('myGolfer')

  	var myGolfer = $cookieStore.get('myGolfer');
  	$scope.nextId = function(id){
  		console.log(id);
  		$location.path("/"+id);
  	}
  	
});
