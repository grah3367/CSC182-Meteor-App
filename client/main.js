import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Answers = new Meteor.Collection("answers");

Template.addAnswer.events({
    'click input.add-answer' : function(e){
        e.preventDefault();
        var answerText = document.getElementById("answerText").value;
        if(answerText === '' | answerText == ' ' ) return
        Meteor.call("addAnswer",answerText,function(error , answerId){
            console.log('Added answer with ID: '+answerId);
        });
        document.getElementById("answerText").value = "";

    }
});
Template.answers.items = function(){
    return Answers.find({},{sort:{'submittedOn':-1}});
};
