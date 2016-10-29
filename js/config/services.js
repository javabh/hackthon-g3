(function (ng) {
    'use strict';

 ng.module('servicos')
        .factory('PessoaService', function ($http) {
            return {
                getPessoas: function () {
                    return $http.get('https://hackthon-g3.firebaseio.com/pessoa.json');
                },
                getPessoa: function (key) {
                    return $http.get('https://hackthon-g3.firebaseio.com/pessoa/'+ key +'.json');
                },
                salvar: function (pessoa) {
                    return $http.post('https://hackthon-g3.firebaseio.com/pessoa.json', pessoa);
                },
                editar: function (equipe) {
                    return $http.put('https://hackthon-g3.firebaseio.com/pessoa.json', pessoa);
                },
                excluir: function (equipe) {
                    return $http.delete('https://hackthon-g3.firebaseio.com/pessoa.json', pessoa);
                }
            }
        })


})(angular);