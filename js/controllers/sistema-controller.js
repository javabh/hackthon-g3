
(function (ng) {
	'use strict';

	ng.module('controllers')
	.controller('SistemaCtrl', function($scope,$state){

		$scope.user = {}

		$scope.login = function(){
		 $state.transitionTo('anuncioList');
		};


	});



})(angular);
