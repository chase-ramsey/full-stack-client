
let requiresAuth = ($location, AuthFactory) => new Promise((resolve, reject) => {
  if (AuthFactory.checkCreds()) {
    resolve();
  } else {
    reject();
    $location.path("/login");
  }
});

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
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'app/auth/login.html'
    })
    .when('/register', {
      controller: 'LoginCtrl',
      templateUrl: 'app/auth/register.html'
    })
    .when('/logout/', {
      controller: 'LogoutCtrl',
      template: ''
    })
    .when('/create/review', {
      controller: 'NewReviewCtrl',
      templateUrl: 'app/create/new-review.html',
      resolve: { requiresAuth }
    })
    .when('/curate', {
      controller: 'ManageListCtrl',
      templateUrl: 'app/create/manage-lists.html',
      resolve: { requiresAuth }
    })
  });
