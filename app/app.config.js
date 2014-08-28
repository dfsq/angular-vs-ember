(function () {
	'use strict';

	function config($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/questions'
		});
	}

	config.$inject = ['$routeProvider'];

	angular.module('angularEmber', [
		'ngRoute',
		'angularCharts',
		'angularEmber.questions',
		'angularEmber.followers'
	], config);
})();

