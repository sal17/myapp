'use strict';

/**
 * @ngdoc overview
 * @name myappApp
 * @description
 * # myappApp
 *
 * Main module of the application.
 */
angular.module('myappApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'CourseListCtrl'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/degree', {
        templateUrl: 'views/degree.html',
        controller: 'DegreeCtrl'
      })
      .when('/iat', {
        templateUrl: 'views/iat.html',
        controller: 'IatCtrl'
      })
      .when('/breadth', {
        templateUrl: 'views/breadth.html',
        controller: 'BreadthCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
