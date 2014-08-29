(function () {
	'use strict';

	function followersController($scope) {
		$scope.title = 'Followers';
	}

	followersController.$inject = ['$scope'];

	angular.module('ae.followers').controller('followersController', followersController);
})();