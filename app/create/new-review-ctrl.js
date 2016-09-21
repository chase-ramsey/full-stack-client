app.controller('NewReviewCtrl', ['$scope', '$http', '$location', '$timeout', 'RootFactory', function($scope, $http, $location, $timeout, RootFactory) {

  $scope.submitReview = () => {
    return;
  }

  $scope.clearForm = () => {
    $scope.name = '';
  }

}])
