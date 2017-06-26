(function(){
    'use strict';

    angular
        .module('app')
        .factory('BookManiaFactory', BookManiaFactory)

    BookManiaFactory.$inject = ['$http'];

    function BookManiaFactory($http) {
        var service = {
            getBooks: getBooks,
            getReview: getReview,
            getTrivia: getTrivia
        };

        return service;

        function getBooks(author) {
            return $http
                .get('https://www.googleapis.com/books/v1/volumes?q=author:' + author)
                .then(function(response) {
                    return response.data;
                });
        }

       function getReview(isbn) {
            return $http
                .get('https://origin-goodreads-api.herokuapp.com/book/review_counts.json?isbns=' + isbn + '%2C0141439602&key=oR6JfakAXBBNZeV0kdlDvA')
                .then(function(response) {
                    return response.data;
                });
        }

        function getTrivia() {
            return $http
                .get('https://opentdb.com/api.php?amount=750&category=10&type=multiple')
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();