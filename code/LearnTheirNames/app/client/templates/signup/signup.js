/*****************************************************************************/
/* Signup: Event Handlers */
/*****************************************************************************/
Template.Signup.events({
    'submit form': function(e) {
        e.preventDefault();
        var email = $("[name=email]").val();
        var password = $("[name=password]").val();
        Accounts.createUser({
            email: email,
            password: password
        });
    }
    
});

/*****************************************************************************/
/* Signup: Helpers */
/*****************************************************************************/
Template.Signup.helpers({
});

/*****************************************************************************/
/* Signup: Lifecycle Hooks */
/*****************************************************************************/
Template.Signup.onCreated(function () {
});

Template.Signup.onRendered(function () {
});

Template.Signup.onDestroyed(function () {
});
