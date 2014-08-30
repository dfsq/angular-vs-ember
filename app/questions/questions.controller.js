(function () {
	'use strict';

	function questionsController($scope, tagsData) {

		$scope.tagsData = tagsData;

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
			series: ['Total', 'Answered'],
			data: [{
				x: 'AngularJS',
				y: [tagsData[0].count, 0]
			}, {
				x: 'EmberJS',
				y: [tagsData[1].count, 0]
			}]
		};
	}

	questionsController.$inject = ['$scope', 'tagsData'];

	angular.module('ae.questions').controller('questionsController', questionsController);

})();