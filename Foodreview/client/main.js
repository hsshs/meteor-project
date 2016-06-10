Router.configure({
  layoutTemplate : 'layout',
});

Router.route('/', {name: 'home'});
Router.route('/list', {name: 'list'});
Router.route('/notice',{name:'notice'});
