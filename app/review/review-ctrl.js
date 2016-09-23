app.controller('ReviewCtrl', ['$scope', '$routeParams', '$http', '$timeout', 'RootFactory', 'AuthFactory', function($scope, $routeParams, $http, $timeout, RootFactory, AuthFactory) {

  $scope.showFullText = true;
  $scope.showReviewStats = false;

  if (AuthFactory.checkCreds()) {
    $scope.loggedIn = true;
  }

  let logError = (err) => console.log("error", err);

  RootFactory.getApiRoot()
    .then(
      root => {
        $scope.apiRoot = root;
        return $http.get(`${$scope.apiRoot.reviews}${$routeParams.review_id}`);
      },
      logError
    )
    .then(
      reviewRes => {
        $scope.thisReview = reviewRes.data;
        $scope.watsonReport = JSON.parse($scope.thisReview.watson_report);
        $timeout();
      },
      logError
    )

  $scope.toggleShow = (show) => {
    if (show === 'text') {
      $scope.showReviewStats = false;
      $scope.showFullText = true;
    } else if (show === 'stats') {
      $scope.showFullText = false;
      $scope.showReviewStats = true;
    }
  }

}]);
