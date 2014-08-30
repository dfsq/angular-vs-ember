(function () {
	'use strict';

	var base = 'http://api.stackexchange.com';

	function stats($http) {
		return {
			questionsInfo: function() {
				var tags = 'angularjs;emberjs',
					config = {params: {
						order: 'asc',
						sort:  'name',
						site:  'stackoverflow'
					}};
				return $http.get(base + '/2.2/tags/' + tags + '/info', config).then(function(response) {
					return response.data.items;
				});
			}
		};
	}

	stats.$inject = ['$http'];

	angular.module('ae.components.services').factory('stats', stats);
})();