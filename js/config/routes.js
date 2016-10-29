(function (ng) {
    'use strict';

    ng.module('rotas')
            .config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider.state('equipamentoForm', {
                    url: '/cadastro.equipamento/',
                    controller: 'EquipamentoCtrl',
                    templateUrl: 'views/equipamento.html'
                })
                
            .config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider.state('pessoaForm', {
                    url: '/cadastro.pessoa/',
                    controller: 'PessoaCtrl',
                    templateUrl: 'views/pessoa.html'
                });

                $urlRouterProvider.when('', '/');
            });

})(angular);


