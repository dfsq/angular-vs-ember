(function () {
	'use strict';

	function config($routeProvider) {
		$routeProvider.otherwise({ redirectTo: '/' });
	}

	config.$inject = ['$routeProvider'];

	angular.module('ae', [
		'ngRoute',
		'angularCharts',
		'ae.components.services',
		'ae.questions'
	], config);
})();

