app.controller('MainCtrl', ['$scope', 'RootFactory', '$http', '$timeout', function($scope, RootFactory, $http, $timeout) {

  $scope.title = 'Main page';

  let logError = (err) => console.log("error", err);

  RootFactory.getApiRoot()
    .then(
      root => {
        $scope.apiRoot = root;
        return $http.get($scope.apiRoot['featuredreviews']);
      },
      logError
    )
    .then(
      reviewRes => {
        $scope.featuredReview = reviewRes.data;
        console.log("featured reviews: ", $scope.featuredReview);
        return $http.get($scope.apiRoot['featuredusers'])
      },
      logError
    )
    .then(
      userRes => {
        $scope.featuredUsers = userRes.data;
        console.log("featured users: ", $scope.featuredUsers);
        $timeout();
      },
      logError
    )

}]);
