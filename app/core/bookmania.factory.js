(function(){
    'use strict';

    angular
        .module('app')
        .factory('BookManiaFactory', BookManiaFactory)

    BookManiaFactory.$inject = ['$http'];

    function BookManiaFactory($http) {
        var service = {
            getBooks: getBooks
        };

        return service;

        function getBooks(author) { 
            return $http
                .get('https://www.googleapis.com/books/v1/volumes?q=author:' + author)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();