(function (ng) {
  'use strict';

  ng.module('controllers')
  .controller('AnuncioCtrl', function ($scope, AnuncioService) {				

            $scope.salvar = function(){
                  AnuncioService.salvar($scope.anuncio).then(function(key){
                        if(key){
                              $scope.anuncio = {};
                              alert('Salvo com sucesso.');
                        }else{
                              alert('Erro.');
                        }
                  });
            };

            $scope.editar = function(){                     
                  AnuncioService.editar($scope.anuncio).then(function(response){
                        if(key){
                              _getAnuncio(key);
                              alert('Editado com sucesso.');
                        }else{
                              alert('Erro.');
                        }
                  })
            };

            function _getAnuncio(key){
                  AnuncioService._getAnuncio(key).then(function(response){                         
                        $scope.anuncio = response.data;
                  });
            }

            function _getAnuncios(){
                  AnuncioService.getAnuncios().then(function(response){
                        $scope.listaAnuncios = response.data;
                  });
            }
                  
      });

  });
})(angular);
