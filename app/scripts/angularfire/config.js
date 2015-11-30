angular.module('firebase.config', [])
  .constant('FBURL', 'https://blog.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','google'])

  .constant('loginRedirectPath', '/login');
