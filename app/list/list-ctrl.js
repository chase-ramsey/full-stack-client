app.controller('ListCtrl', ['$scope', '$routeParams', '$http', '$timeout', 'RootFactory', 'AuthFactory', function($scope, $routeParams, $http, $timeout, RootFactory, AuthFactory) {

  $scope.title = 'List Detail';

  if (AuthFactory.checkCreds()) {
    $scope.loggedIn = true;
  }

  let logError = (err) => console.log("error", err);

  RootFactory.getApiRoot()
    .then(
      root => {
        $scope.apiRoot = root;
        return $http.get(`${$scope.apiRoot.lists}${$routeParams.list_id}`);
      },
      logError
    )
    .then(
      listRes => {
        $scope.thisList = listRes.data;
        return $http.get(`${$scope.apiRoot.listreviews}list/${$routeParams.list_id}`)
      },
      logError
    )
    .then(
      reviewRes => {
        $scope.listReviews = reviewRes.data;
        $timeout();
      },
      logError
    )

}]);
