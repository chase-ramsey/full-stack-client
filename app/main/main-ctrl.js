app.controller('MainCtrl', ['$scope', '$http', '$timeout', '$location', 'RootFactory', 'AuthFactory', function($scope, $http, $timeout, $location, RootFactory, AuthFactory) {

  let logError = (err) => console.log("error", err);

  RootFactory.getApiRoot()
    .then(
      root => {
        $scope.apiRoot = root;
        return $http.get($scope.apiRoot['featuredreviews']);
      },
      logError
    )
    .then(
      reviewRes => {
        $scope.featuredReview = reviewRes.data;
        return $http.get($scope.apiRoot['featuredusers'])
      },
      logError
    )
    .then(
      userRes => {
        $scope.featuredUsers = userRes.data;
        $timeout();
      },
      logError
    )

  if (AuthFactory.checkCreds()) {
    $scope.loggedIn = true;
  }

  $scope.goToList = (list) => {
    $location.path(`/lists/${list.id}`);
  }

}]);
