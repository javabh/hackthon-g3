(function (ng) {
    'use strict';

    ng.module('rotas')

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('anuncioForm', {
            url: '/anuncio',
            controller: 'AnuncioCtrl',
            templateUrl: 'views/anuncio.html'
        })
        .state('anuncioList', {
            url: '/',
            controller: 'AnuncioCtrl',
            templateUrl: 'views/pesquisa.html'
        })
        .state('detalhesList', {
            url: '/detalhes/:key',
            controller: 'AnuncioCtrl',
            templateUrl: 'views/detalhes.html'
        })
        .state('pessoaForm', {
            url: '/pessoa',
            controller: 'PessoaCtrl',
            templateUrl: 'views/pessoa.html'
        })
        .state('loginForm', {
            url: '/login',
            controller: 'SistemaCtrl',
            templateUrl: 'views/login.html'
        });

        $urlRouterProvider.when('', '/');
    });
    

})(angular);


