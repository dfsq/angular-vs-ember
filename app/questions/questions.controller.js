(function () {
	'use strict';

	function questionsController($scope, tagsData) {
    console.log(tagsData);
		var total = {
			angular: tagsData.total.angularjs.count,
      angular2: tagsData.total.angular2.count,
			backbone: tagsData.total['backbone.js'].count,
			ember:   tagsData.total['ember.js'].count
		},
		answered = {
			angular: total.angular - tagsData.noAnswerAngular,
      angular2: total.angular2 - tagsData.noAnswerAngular2,
			backbone: total.backbone - tagsData.noAnswerBackbone,
			ember:   total.ember - tagsData.noAnswerEmber
		},
		noAnswer = {
			angular: tagsData.noAnswerAngular,
      angular2: tagsData.noAnswerAngular2,
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
			lineLegend: 'lineEnd',
			colors: ['#4682B4', '#F90', '#DC3912']
		};

		$scope.chartData = {
			series: ['Total', 'Answered', 'No answer'],
			data: [{
				x: 'Angular',
				y: [total.angular, answered.angular, noAnswer.angular]
			}, {
        x: 'Angular2',
        y: [total.angular2, answered.angular2, noAnswer.angular2]
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
