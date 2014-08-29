(function () {
	'use strict';

	function questionsController($scope, stats) {

		$scope.data = [{count: 0}, {count: 0}];

		stats.questionsInfo().then(function(data) {
			$scope.data = data;
		});

		// Chart configuration
		$scope.chartConfig = {
			tooltips: true,
			labels: false,
			legend: {
				display: true,
				position: 'right'
			},
			lineLegend: 'lineEnd'
		};

		$scope.chartData = {
			series: ['Total', 'Unanswered'],
			data: [{
				x: 'AngularJS',
				y: [100, 500]
			}, {
				x: 'EmberJS',
				y: [300, 100]
			}]
		};
	}

	questionsController.$inject = ['$scope', 'stats'];

	angular.module('ae.questions').controller('questionsController', questionsController);

})();