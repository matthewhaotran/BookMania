(function(){
    'use strict';

    angular
        .module('app')
        .controller('BookManiaController', BookManiaController)

    BookManiaController.$inject = ['BookManiaFactory'];

    function BookManiaController(BookManiaFactory) {
        var vm = this;
        vm.appear = false;
        vm.showQuestion = false;
        vm.appear2 = false;
        vm.getLibrary = getLibrary;
        vm.getBookReview = getBookReview;
        vm.getRandomQuestion = getRandomQuestion;
        vm.getTriviaQuestions = getTriviaQuestions;
        vm.searchHistory = [];
        vm.randomNumber = 0;
        vm.randomQuestion = '';
        vm.showAnswer = showAnswer;

        /////////////////////////////////////////////

        function getLibrary (author) {
            BookManiaFactory
                .getBooks(author)
                .then(function(books) {
                    vm.books = books;
                    vm.appear = true;
                    vm.isbns.push(books.items[0].volumeInfo.industryIdentifiers[0].identifier)
                });

            vm.searchHistory.push(author);
            getTriviaQuestions ()
        };

        function getBookReview (isbn) {
            BookManiaFactory
                .getReview(isbn)
                .then(function(review) {
                    vm.review = review;
                    console.log(vm.review.books[0].average_rating);
                })
        };

        function getTriviaQuestions () {
            BookManiaFactory
                .getTrivia()
                .then(function(trivia){
                    vm.trivia = trivia.results;
                    console.log(vm.trivia);
                    vm.randomNumber =  Math.floor(Math.random() * 48);
                    vm.randomQuestion = vm.trivia[vm.randomNumber].question;
                    vm.randomAnswer = vm.trivia[vm.randomNumber].correct_answer;
                    vm.showQuestion = true;
                    vm.appear2 = false;
                });
        };

        function getRandomQuestion() {
            getTriviaQuestions ();
        }

        function showAnswer () {
            vm.appear2 = true;
            console.log(vm.appear2);
        }

        

        activate();

        function activate() { }
    }
})();