app.config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'app/main/main.html'
      })
      .when('/users/:user_id', {
        controller: 'UserCtrl',
        templateUrl: 'app/user/user.html'
      })
      .when('/reviews/:review_id', {
        controller: 'ReviewCtrl',
        templateUrl: 'app/review/review-detail.html'
      })
      .when('/lists/:list_id', {
        controller: 'ListCtrl',
        templateUrl: 'app/list/list-detail.html'
      })
  });
