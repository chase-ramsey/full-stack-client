app.controller('MainCtrl', ['$scope', 'RootFactory', '$http', '$timeout', '$location', function($scope, RootFactory, $http, $timeout, $location) {

  $scope.title = 'Main page';

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

  $scope.goToList = (list) => {
    $location.path(`/lists/${list.id}`);
  }

}]);
