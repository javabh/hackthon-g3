(function (ng) {
    'use strict';

    ng.module('controllers')
            .controller('EquipamentoCtrl', function ($scope, PessoaService) {				
				

            	function _getPessoas(){
            		PessoaService.getPessoas().then(function(response){
            			$scope.listaPessoas = response.data;
            		});
            	}

            	function _getPessoa(key){
            		PessoaService.getPessoa(key).then(function(response){            			
            			$scope.pessoa = response.data;
            		});
            	}

            	function _salvar(){
            		PessoaService.salvar($scope.pessoa).then(function(key){
            			if(key){
            				_getPessoa(key);
            				alert('FUNCIONOU');
            			}
            		});
            	}

            	function _editar(){
            		
            		$scope.pessoa.nome = 'Leonardo Tadeu';
            		PessoaService.editar($scope.pessoa).then(function(response){
            			if(key){
            				alert('Editou');
            			}
            		})
            	}

            	_getPessoa('-KVFYcoUVQaBwbz7uH6K');
            	
            });
})(angular);
