app.controller('ListCtrl', ['$scope', '$routeParams', '$http', '$timeout', 'RootFactory', function($scope, $routeParams, $http, $timeout, RootFactory) {

  $scope.title = 'List Detail';

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
