(function () {
	'use strict';

	function config($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/questions'
		});
	}

	config.$inject = ['$routeProvider'];

	angular.module('ae', [
		'ngRoute',
		'angularCharts',
		'ae.components.services',
		'ae.questions',
		'ae.answers',
		'ae.followers',
	], config);
})();

