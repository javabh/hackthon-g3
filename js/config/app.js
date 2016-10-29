(function (ng) {
    'use strict';

    ng.module('rotas', ['ui.router']);
    ng.module('controllers', []);
    ng.module('hackathon-g3', ['rotas', 'controllers']);

})(angular);
