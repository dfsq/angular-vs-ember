(function () {
	'use strict';

	function answersController($scope) {
		$scope.title = 'Anssers';
	}

	answersController.$inject = ['$scope'];

	angular.module('ae.answers').controller('answersController', answersController);
})();