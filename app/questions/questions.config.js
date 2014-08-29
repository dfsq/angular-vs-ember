(function () {
	'use strict';

	function config($routeProvider) {
		$routeProvider.when('/questions', {
			controller:  'questionsController',
			templateUrl: 'questions/questions.html'
		});
	}

	config.$inject = ['$routeProvider'];

	angular.module('ae.questions', [], config);
})();