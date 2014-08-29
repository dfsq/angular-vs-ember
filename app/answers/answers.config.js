(function () {
	'use strict';

	function config($routeProvider) {
		$routeProvider.when('/answers', {
			controller:  'answersController',
			templateUrl: 'answers/answers.html'
		});
	}

	config.$inject = ['$routeProvider'];

	angular.module('ae.answers', [], config);
})();