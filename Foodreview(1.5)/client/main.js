Router.configure({
  layoutTemplate : 'layout',
});

Router.route('/', {name: 'home'});
Router.route('/list', {name: 'list'});
Router.route('/notice',{name:'notice'});


Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
