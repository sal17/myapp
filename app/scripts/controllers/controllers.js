'use strict';

/* IAT Course List Controller */

var CourseListCtrl = angular.module('CourseListCtrl', []);

CourseListCtrl.controller('phoneListCtrl', ['$scope', '$http',
	function($scope, $http) {
	$http.get('courses.json').success(function(data) {
		$scope.courses = data;
	});

	$scope.orderProp = 'age';
}]);