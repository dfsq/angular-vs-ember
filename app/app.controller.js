(function () {
	'use strict';

	function appController($location) {
		this.isActive = function(path) {
			return $location.path() === path;
		};
	}

	appController.$inject = ['$location'];

	angular.module('angularEmber').controller('appController', appController);
})();