(function () {
	'use strict';

	var base = 'http://api.stackexchange.com/2.2';

	function stats($http, $q) {
		return {
			questions: function() {

				/** @property items */

				var config = {params: {
					order: 'asc',
					sort:  'name',
					site:  'stackoverflow'
				}},
				total, noAnswerAngular, noAnswerAngular2, noAnswerBackbone, noAnswerEmber;

				// Total number of questions in the tag
				total = $http.get(base + '/tags/angularjs;angular2;backbone.js;ember.js/info', config).then(function(response) {
					return response.data.items.reduce(function(prev, curr) {
            prev[curr.name] = curr;
            return prev;
          }, {});
				});

				// Only questions with no answer given
				noAnswerAngular = $http.get(base + '/questions/no-answers?site=stackoverflow&tagged=angularjs&filter=total').then(function(response) {
					return response.data.total;
				});

        noAnswerAngular2 = $http.get(base + '/questions/no-answers?site=stackoverflow&tagged=angular2&filter=total').then(function(response) {
          return response.data.total;
        });

				noAnswerBackbone = $http.get(base + '/questions/no-answers?site=stackoverflow&tagged=backbone.js&filter=total').then(function(response) {
					return response.data.total;
				});

				noAnswerEmber = $http.get(base + '/questions/no-answers?site=stackoverflow&tagged=ember.js&filter=total').then(function(response) {
					return response.data.total;
				});

				return $q.all({
					total: total,
					noAnswerAngular: noAnswerAngular,
          noAnswerAngular2: noAnswerAngular2,
					noAnswerBackbone: noAnswerBackbone,
					noAnswerEmber: noAnswerEmber
				});
			}
		};
	}

	stats.$inject = ['$http', '$q'];

	angular.module('ae.components.services').factory('stats', stats);
})();
