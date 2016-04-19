'use strict';

var popQuiz = document.getElementById('pop-quiz');

popQuiz.addEventListener('mouseover', function(e) {
	popQuiz.classList.add('animated');
	popQuiz.classList.add('bounce');
});