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
				total, noAnswerAngular, noAnswerEmber;

				// Total number of questions in the tag
				total = $http.get(base + '/tags/angularjs;ember.js/info', config).then(function(response) {
					return response.data.items;
				});

				// Only questions with no answer given
				noAnswerAngular = $http.get(base + '/questions/no-answers?site=stackoverflow&tagged=angularjs&filter=total').then(function(response) {
					return response.data.total;
				});

				noAnswerEmber = $http.get(base + '/questions/no-answers?site=stackoverflow&tagged=ember.js&filter=total').then(function(response) {
					return response.data.total;
				});

				return $q.all({
					total: total,
					noAnswerAngular: noAnswerAngular,
					noAnswerEmber: noAnswerEmber
				});
			}
		};
	}

	stats.$inject = ['$http', '$q'];

	angular.module('ae.components.services').factory('stats', stats);
})();