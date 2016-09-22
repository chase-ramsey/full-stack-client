app.controller('LogoutCtrl', ['$location', 'AuthFactory', function($location, AuthFactory) {

  AuthFactory.clearCreds();
  $location.path('/');

}])
