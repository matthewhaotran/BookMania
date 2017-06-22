(function(){
    'use strict';

    angular
        .module('app')
        .controller('BookManiaController', BookManiaController)

    BookManiaController.$inject = ['BookManiaFactory'];

    function BookManiaController(BookManiaFactory) {
        var vm = this;
        vm.message = 'Hello World';
        vm.getLibrary = getLibrary;

        function getLibrary (author) {
            BookManiaFactory
                .getBooks(author)
                .then(function(books) {
                    vm.books = books;
                    console.log(vm.books.items);
                });
        };

        activate();

        function activate() { }
    }
})();