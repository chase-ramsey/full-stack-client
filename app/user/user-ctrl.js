app.controller('UserCtrl', ['$scope', '$routeParams', '$http', '$timeout', 'RootFactory', function($scope, $routeParams, $http, $timeout, RootFactory) {

  $scope.title = 'User Profile';

  $scope.showReviews = true;
  $scope.showLists = false;

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
        console.log("user: ", $scope.user);
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

}]);
