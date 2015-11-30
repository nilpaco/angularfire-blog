'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBlogApp
 */
angular.module('angularBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
