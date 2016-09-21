app.controller('ManageListCtrl', ['$scope', '$http', '$location', '$timeout', 'RootFactory', 'AuthFactory', function($scope, $http, $location, $timeout, RootFactory, AuthFactory) {

  let logError = (err) => console.log("error", err);

  RootFactory.getApiRoot()
    .then(
      root => {
        $scope.apiRoot = root;
        return $http.get(`${$scope.apiRoot.users}1`);
      },
      logError
    )
    .then(
      userRes => {
        $scope.user = userRes.data
      },
      logError
    )

  $scope.submitNewList = () => {
    return;
  }

  $scope.clearNewForm = () => {
    $scope.name = '';
  }

}])
