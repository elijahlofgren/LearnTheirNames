
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