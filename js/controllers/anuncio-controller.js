
(function (ng) {
    'use strict';

    ng.module('controllers')
        .controller('AnuncioCtrl', function ($scope, $state, $stateParams, AnuncioService) {

            $scope.anuncio = {
                equipamento: {
                    caracteristicas: []
                }
            };
            $scope.negociacao = {};
            $scope.negociando = false;


            $scope.salvar = function () {
                AnuncioService.salvar($scope.anuncio).then(function (key) {
                    if (key) {
                        $scope.anuncio = {};
                        alert('Salvo com sucesso.');
                    } else {
                        alert('Erro.');
                    }
                });
            };

            $scope.editar = function () {
                AnuncioService.editar($scope.anuncio).then(function (response) {
                    if (key) {
                        _getAnuncio(key);
                        alert('Editado com sucesso.');
                    } else {
                        alert('Erro.');
                    }
                });
            };

            $scope.detalhes = function (key) {
                $state.transitionTo('detalhesList', {
                    key: key
                });
            };

            $scope.negociar = function (tipo) {
                $scope.negociacao.tipo = tipo;
                $scope.negociacao.data = new Date();
                $scope.negociando = true;

                if (!$scope.anuncio.negociacoes) {
                    $scope.anuncio.negociacoes = [];
                }
                
                $scope.anuncio.negociacoes.push($scope.negociacao);
                $scope.editar()
            };

            $scope.salvarNegociacao = function () {
                $scope.negociando = false;
            };

            function _getAnuncio(key) {
                AnuncioService.getAnuncio(key).then(function (response) {
                    $scope.anuncio = response.data;
                });
            }

            function _getAnuncios() {
                AnuncioService.getAnuncios().then(function (response) {
                    $scope.listaAnuncios = response.data;
                });
            }

            $scope.$on('$viewContentLoaded', function () {
                if ($stateParams.key) {
                    _getAnuncio($stateParams.key);
                } else {
                    _getAnuncios();

                }
            });

        });
})(angular);
