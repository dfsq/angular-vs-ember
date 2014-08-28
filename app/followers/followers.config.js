(function () {
	'use strict';

	function config($routeProvider) {
		$routeProvider.when('/followers', {
			controller:  'followersController',
			templateUrl: 'followers/followers.html'
		});
	}

	config.$inject = ['$routeProvider'];

	angular.module('angularEmber.followers', [], config);
})();