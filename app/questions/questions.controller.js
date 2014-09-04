(function () {
	'use strict';

	function questionsController($scope, tagsData) {

		var total = {
			angular: tagsData.total[0].count,
			backbone: tagsData.total[1].count,
			ember:   tagsData.total[2].count
		},
		answered = {
			angular: total.angular - tagsData.noAnswerAngular,
			backbone: total.backbone - tagsData.noAnswerBackbone,
			ember:   total.ember - tagsData.noAnswerEmber
		},
		noAnswer = {
			angular: tagsData.noAnswerAngular,
			backbone: tagsData.noAnswerBackbone,
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
				x: 'BackboneJS',
				y: [total.backbone, answered.backbone, noAnswer.backbone]
			},{
				x: 'EmberJS',
				y: [total.ember, answered.ember, noAnswer.ember]
			}]
		};
	}

	questionsController.$inject = ['$scope', 'tagsData'];

	angular.module('ae.questions').controller('questionsController', questionsController);

})();