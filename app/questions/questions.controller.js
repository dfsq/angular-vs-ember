(function () {
	'use strict';

	function questionsController($scope, tagsData) {

		var total = {
			angular: tagsData.total[0].count,
			ember:   tagsData.total[1].count
		},
		answered = {
			angular: total.angular - tagsData.noAnswerAngular,
			ember:   total.ember - tagsData.noAnswerEmber
		},
		noAnswer = {
			angular: tagsData.noAnswerAngular,
			ember:   tagsData.noAnswerEmber
		};

		$scope.stats = {
			total: total,
			answered: answered,
			noAnswer: noAnswer
		};

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
			series: ['Total', 'Answered', 'No answer'],
			data: [{
				x: 'AngularJS',
				y: [total.angular, answered.angular, noAnswer.angular]
			}, {
				x: 'EmberJS',
				y: [total.ember, answered.ember, noAnswer.ember]
			}]
		};
	}

	questionsController.$inject = ['$scope', 'tagsData'];

	angular.module('ae.questions').controller('questionsController', questionsController);

})();