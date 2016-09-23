app.controller('ManageListCtrl', ['$scope', '$http', '$location', '$timeout', 'RootFactory', 'AuthFactory', function($scope, $http, $location, $timeout, RootFactory, AuthFactory) {

  let logError = (err) => console.log("error", err);

  $scope.uid = AuthFactory.getUserId();
  console.log("uid: ", $scope.uid);

  RootFactory.getApiRoot()
    .then(
      root => {
        $scope.apiRoot = root;
        return $http.get(`${$scope.apiRoot.users}${$scope.uid}/`);
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
      $scope.createSuccess = true;
    })
    .error(console.error);
  }

  $scope.clearNewForm = () => {
    $scope.newListName = '';
    $scope.createSuccess = false;
  }

  $scope.clearAddForm = () => {
    $scope.addSuccess = false;
  }

  $scope.addToList = () => {
    review = $scope.user.reviews.find((review) => {
      return review.media.title === $scope.addListItem;
    })
    list = $scope.user.lists.find((list) => {
      return list.name === $scope.addListName;
    })
    console.log("review: ", review);
    console.log("list: ", list);
    $http.defaults.headers.common.Authorization = 'Basic ' + AuthFactory.checkCreds();
    $http({
      url: $scope.apiRoot.listreviews,
      method: "POST",
      headers: {"Content-Type": "application/json"},
      data: {
        "review": review.id,
        "list_id": list.id
      }
    })
    .success(res => {
      $scope.addSuccess = true;
    })
    .error(console.error);
  }

}])
