app.controller('NewReviewCtrl', ['$scope', '$http', '$location', '$timeout', 'RootFactory', 'AuthFactory', function($scope, $http, $location, $timeout, RootFactory, AuthFactory) {

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
    mediaType = $scope.mediaChoices.find((choice) => {
      return choice.choice_name === $scope.addChoiceName;
    })
    console.log("mediaType: ", mediaType);
    console.log("media choice_name: ", mediaType.choice_name);
    $http({
      url: $scope.apiRoot.media,
      method: "POST",
      headers: {"Content-Type": "application/json"},
      data: {
        "media_choice": mediaType.choice_name,
        "title": $scope.addTitle,
        "creator": $scope.addCreator,
        "year_released": $scope.addYear
      }
    })
    .success(res => {
      $scope.allMedia.push(res);
      $scope.addSuccess = true;
    })
    .error(console.error);
  }

  $scope.submitReview = () => {
    $http.defaults.headers.common.Authorization = 'Basic ' + AuthFactory.checkCreds();
    console.log("mediaUrl: ", $scope.mediaUrl);
    $http({
      url: $scope.apiRoot.reviews,
      method: "POST",
      headers: {"Content-Type": "application/json"},
      data: {
        "media": $scope.mediaUrl,
        "image_url": $scope.selectImage,
        "full_text": $scope.reviewText
      }
    })
    .success(res => {
      console.log("res: ", res);
      $location.path(`/reviews/${res.id}`);
    })
    .error(console.error);
  }

  $scope.clearSelectForm = () => {
    $scope.mediaSelection = '';
    $scope.getOptions();
    $scope.selectImage = '';
  }

  $scope.clearAddForm = () => {
    $scope.addChoiceName = '';
    $scope.addTitle = '';
    $scope.addCreator = '';
    $scope.addYear = '';
    $scope.addSuccess = false;
  }

}])
