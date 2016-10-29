(function (ng) {
	'use strict';

	ng.module('controllers')
	.controller('PessoaCtrl', function ($scope, PessoaService) {


		$scope.salvar = function(){
			PessoaService.salvar($scope.pessoa).then(function(key){
				if(key){
					$scope.pessoa = {};
					alert('Salvo com sucesso.');
				}else{
					alert('Erro.');
				}
			});
		};

		$scope.editar = function(){            		
			PessoaService.editar($scope.pessoa).then(function(response){
				if(key){
					_getPessoa(key);
					alert('Editado com sucesso.');
				}else{
					alert('Erro.');
				}
			})
		};

		function _getPessoa(key){
			PessoaService.getPessoa(key).then(function(response){            			
				$scope.pessoa = response.data;
			});
		}

		function _getPessoas(){
			PessoaService.getPessoas().then(function(response){
				$scope.listaPessoas = response.data;
			});
		}
			
	});

})(angular);