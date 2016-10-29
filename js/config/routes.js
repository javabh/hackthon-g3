(function (ng) {
    'use strict';

    ng.module('rotas')
     .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('equipamentoForm', {
            url: '/anuncio',
            controller: 'AnuncioCtrl',
            templateUrl: 'views/anuncio.html'
        })
        .state('pessoaForm', {
            url: '/pessoa',
            controller: 'PessoaCtrl',
            templateUrl: 'views/pessoa.html'
        });

        $urlRouterProvider.when('', '/');
    });

})(angular);


