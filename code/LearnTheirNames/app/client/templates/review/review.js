/*****************************************************************************/
/* Review: Event Handlers */
/*****************************************************************************/
Template.Review.events({
    'click .begin-review': function(event) {
        //alert("click .begin-review!");
        $(".question").first().show();
    },
    'click input': function(event) {
        var $elementClicked = $(event.currentTarget);
        console.log($elementClicked);
        var answerGiven = $elementClicked.val();
        console.log("answerGiven: ");
        console.log(answerGiven);
        // TBD: Why is $.closest() not working?
        var $correct = $elementClicked.siblings(".answer");
        console.log("Correct is: ");
        console.log($correct.html());
        var correctAnswer = $correct.html();
        
        if (answerGiven != correctAnswer) {
            alert("Incorrect!");   
        } else {
            alert("Correct!");   
        }
        $(".question:visible").remove();
        var $showNext = $(".question").first()
        if ($showNext.length > 0) {
            $showNext.show();
        } else {
            alert("Review complete!");   
        }
    }
});

/*****************************************************************************/
/* Review: Helpers */
/*****************************************************************************/
Template.Review.helpers({
    names: function() {
        return Names.find();
    }
});

/*****************************************************************************/
/* Review: Lifecycle Hooks */
/*****************************************************************************/
Template.Review.onCreated(function () {

});

Template.Review.onRendered(function () {
});

Template.Review.onDestroyed(function () {
});
