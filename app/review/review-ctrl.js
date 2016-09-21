app.controller('ReviewCtrl', ['$scope', '$routeParams', '$http', '$timeout', 'RootFactory', function($scope, $routeParams, $http, $timeout, RootFactory) {

  $scope.title = 'Review Detail';

  $scope.showFullText = true;
  $scope.showReviewStats = false;

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
        console.log("thisReview: ", $scope.thisReview);
        $scope.watsonReport = JSON.parse($scope.thisReview.watson_report);
        console.log("watson report: ", $scope.watsonReport);
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
