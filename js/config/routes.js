(function (ng) {
    'use strict';

    ng.module('rotas')
     .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('equipamentoForm', {
            url: '/equipamento',
            controller: 'EquipamentoCtrl',
            templateUrl: 'views/equipamento.html'
        })
        .state('pessoaForm', {
            url: '/pessoa',
            controller: 'PessoaCtrl',
            templateUrl: 'views/pessoa.html'
        });

        $urlRouterProvider.when('', '/');
    });

})(angular);


