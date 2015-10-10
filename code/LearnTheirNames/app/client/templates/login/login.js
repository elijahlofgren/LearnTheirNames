/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
    'submit form': function(e) {
        e.preventDefault();
        var email = $("[name=email]").val();
        var password = $("[name=password]").val();
        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
            alert("Login error: " + error.reason);
            } else { 
                Router.go("home");
            }
        });
    }
    
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});
