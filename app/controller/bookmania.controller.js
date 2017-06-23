(function(){
    'use strict';

    angular
        .module('app')
        .controller('BookManiaController', BookManiaController)

    BookManiaController.$inject = ['BookManiaFactory'];

    function BookManiaController(BookManiaFactory) {
        var vm = this;
        vm.appear = false;
        vm.getLibrary = getLibrary;
        vm.getBookReview = getBookReview;
        vm.searchHistory = [];

        /////////////////////////////////////////////

        function getLibrary (author) {
            BookManiaFactory
                .getBooks(author)
                .then(function(books) {
                    vm.books = books;
                    vm.appear = true;
                    vm.isbns.push(books.items[0].volumeInfo.industryIdentifiers[0].identifier)
                    console.log(vm.isbns);
                });

            vm.searchHistory.push(author);
        };

        function getBookReview (isbn) {
            BookManiaFactory
                .getReview(isbn)
                .then(function(review) {
                    vm.review = review;
                    console.log(vm.review.books[0].average_rating);
                })
        };



        activate();

        function activate() { }
    }
})();