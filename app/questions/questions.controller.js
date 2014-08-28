(function () {
	'use strict';

	function questionsController($scope) {
		$scope.title = 'Questions';
	}

	questionsController.$inject = ['$scope'];

	angular.module('angularEmber.questions').controller('questionsController', questionsController);

})();