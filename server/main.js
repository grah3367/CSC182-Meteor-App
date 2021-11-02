import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Answers = new Meteor.Collection("answers");

Meteor.methods({
    addAnswer : function(answerText){
        if(answerText === '' | answerText == ' ' ) return
        console.log('Adding Answer ...');
        var answerId = Answers.insert({
            'answerText' : answerText,
            'submittedOn': new Date()
        });
        console.log(answerId)
        return answerId;
    }
});
