(function (ng) {
    'use strict';

    ng.module('rotas')
            .config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider.state('equipamentoForm', {
                    url: '/cadastro.equipamento/',
                    controller: 'EquipamentoCtrl',
                    templateUrl: 'views/equipamento.html'
                });
                $urlRouterProvider.when('', '/');
            });

})(angular);


