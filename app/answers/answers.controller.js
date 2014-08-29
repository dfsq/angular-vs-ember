(function () {
	'use strict';

	function answersController($scope) {
		$scope.title = 'Anssers';
	}

	answersController.$inject = ['$scope'];

	angular.module('angularEmber.answers').controller('answersController', answersController);
})();