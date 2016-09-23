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

  $scope.addSuccess = false;

  $scope.submitNewList = () => {
    $http.defaults.headers.common.Authorization = 'Basic ' + AuthFactory.checkCreds();
    $http({
      url: $scope.apiRoot.lists,
      method: "POST",
      headers: {"Content-Type": "application/json"},
      data: {
        "name": $scope.newListName,
      }
    })
    .success(res => {
      $scope.user.lists.push(res)
      $scope.newListName = '';
    })
    .error(console.error);
  }

  $scope.clearNewForm = () => {
    $scope.name = '';
  }

  $scope.clearAddForm = () => {
    $scope.addSuccess = false;
    $scope.addListName = '';
    $scope.addListItem = '';
  }

  $scope.addToList = () => {
    list = $scope.user.lists.find((list) => {
      return list.name === $scope.addListName;
    })
    review = $scope.user.reviews.find((review) => {
      return review.media.title === $scope.addListItem;
    })
    $http({
      url: $scope.apiRoot.listreviews,
      method: "POST",
      headers: {"Content-Type": "application/json"},
      data: {
        "list_id": list.id,
        "review": review.id
      }
    })
    .success(res => {
      $scope.addSuccess = true;
    })
    .error(console.error);
  }

}])
