(function () {
	'use strict';

	function followersController($scope) {
		$scope.title = 'Followers';
	}

	followersController.$inject = ['$scope'];

	angular.module('angularEmber.followers').controller('followersController', followersController);
})();