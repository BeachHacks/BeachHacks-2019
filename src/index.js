import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import jquery from 'jquery';


jquery(document).ready(function(){
    //whenever a faqelem is clicked, perform this function
    jquery('.faqelem').click(function(){
    //get the faq element
    var faqElement = jquery(this);
    //find the element within faq with question tag
    var question = faqElement.find('.question');
    //find the element within faq with answer tag
    var answer = faqElement.find('.answer');
    if(!answer.hasClass('active')){
        question.addClass('flipButton');
        answer.addClass('answer');
    }
    else if(answer.hasClass('active')){
        question.removeClass('flipButton');
        answer.removeClass('active');
    }
    });
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
