app.controller('UserCtrl', ['$scope', '$routeParams', '$http', '$timeout', '$location', 'RootFactory', 'AuthFactory', function($scope, $routeParams, $http, $timeout, $location, RootFactory, AuthFactory) {

  $scope.showReviews = true;
  $scope.showLists = false;

  if (AuthFactory.checkCreds()) {
    $scope.loggedIn = true;
  }

  let logError = (err) => console.log("error", err);

  RootFactory.getApiRoot()
    .then(
      root => {
        $scope.apiRoot = root;
        return $http.get(`${$scope.apiRoot.users}${$routeParams.user_id}`);
      },
      logError
    )
    .then(
      userRes => {
        $scope.user = userRes.data
      },
      logError
    )

  $scope.toggleShow = (show) => {
    if (show === 'reviews') {
      $scope.showLists = false;
      $scope.showReviews = true;
    } else if (show === 'lists') {
      $scope.showReviews = false;
      $scope.showLists = true;
    }
  }

  $scope.goToList = (list) => {
    $location.path(`/lists/${list.id}`);
  }

}]);
