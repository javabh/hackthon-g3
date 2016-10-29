(function (ng) {
	'use strict';

	ng.module('servicos',[]);
	ng.module('customFilter',[]);
	ng.module('rotas', ['ui.router']);
	ng.module('controllers', []);
	ng.module('hackathon-g3', ['rotas', 'controllers','servicos','customFilter']);

})(angular);
