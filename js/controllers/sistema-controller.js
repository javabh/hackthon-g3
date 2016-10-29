
(function (ng) {
	'use strict';

	ng.module('controllers')
	.controller('SistemaCtrl', function($scope,$state){

		$scope.user = {}

		$scope.login = function(){
			if($scope.user.email == 'admin@gmail.com' && $scope.user.senha == 'admin'){
				$scope.$storage = $localStorage.$default({
					key: '-KVFG6whLl8xow7KIOJN'
				});	
				 $state.transitionTo('anuncioList');			
			}
		};
		


	});



})(angular);
