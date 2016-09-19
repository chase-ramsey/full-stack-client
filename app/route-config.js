app.config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'app/main/main.html'
      })
      .when('/users/:username', {
        controller: 'UserCtrl',
        templateUrl: 'app/user/user.html'
      })
  });
