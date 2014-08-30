(function () {
	'use strict';

	function config($routeProvider) {
		$routeProvider.when('/questions', {
			controller:  'questionsController',
			templateUrl: 'questions/questions.html',
			resolve: {
				tagsData: ['stats', function(stats) {
					return stats.questionsInfo();
				}]
			}
		});
	}

	config.$inject = ['$routeProvider'];

	angular.module('ae.questions', [], config);
})();