app.controller('NewReviewCtrl', ['$scope', '$http', '$location', '$timeout', 'RootFactory', function($scope, $http, $location, $timeout, RootFactory) {

  let logError = (err) => console.log("error", err);

  RootFactory.getApiRoot()
    .then(
      root => {
        $scope.apiRoot = root;
        return $http.get($scope.apiRoot['mediachoices']);
      },
      logError
    )
    .then(
      choiceRes => {
        $scope.mediaChoices = choiceRes.data;
        console.log("mediaChoices: ", $scope.mediaChoices);
        return $http.get($scope.apiRoot['media']);
      },
      logError
    )
    .then(
      mediaRes => {
        $scope.allMedia = mediaRes.data;
        console.log("media: ", $scope.allMedia);
        $timeout();
      },
      logError
    )

  $scope.mediaOptions = [];

  $scope.getOptions = () => {
    $scope.mediaOptions = [];
    $scope.mediaOptions = $scope.allMedia.filter((option) => {
      return option.media_choice === $scope.mediaSelection;
    })
  }

  $scope.submitMedia = () => {
    return;
  }

  $scope.submitReview = () => {
    return;
  }

  $scope.clearSelectForm = () => {
    return;
  }

  $scope.clearAddForm = () => {
    return;
  }

}])
