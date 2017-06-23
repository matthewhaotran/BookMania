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

        function getLibrary (author) {
            BookManiaFactory
                .getBooks(author)
                .then(function(books) {
                    vm.books = books;
                    vm.appear = true;
                });
        };

        activate();

        function activate() { }
    }
})();