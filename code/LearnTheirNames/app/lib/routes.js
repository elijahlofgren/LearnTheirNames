
Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client'
});

Router.route('/review', {
    name: 'review',
    controller: 'ReviewController',
    where: 'client'
});

Router.route('/signup', {
    name: 'signup',
    controller: 'SignupController',
    where: 'client'
});

Router.route('/login', {
    name: 'login',
    controller: 'LoginController',
    where: 'client'
});

Router.onBeforeAction(function() {
    if(!Meteor.user()) {
        this.render('AccessDenied');
    } else {
        this.next();
    }
}, {only: ['review']});