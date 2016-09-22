app.controller('LoginCtrl', ['$scope', '$http', '$location', 'AuthFactory', 'API_URL', function($scope, $http, $location, AuthFactory, API_URL) {

  $scope.clearRegisterForm = () => {
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.email = '';
    $scope.image_url = '';
    $scope.username = '';
    $scope.password = '';
  }

  $scope.clearLoginForm = () => {
    $scope.username = '';
    $scope.password = '';
  }

  $scope.login = () => {
    console.log("username: ", $scope.username);
    console.log("password: ", $scope.password);
    $http({
      url: `${API_URL}login/`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "username": $scope.username,
        "password": $scope.password
      }
    }).success(res => {
      console.log("res: ", res);
      if (res.success) {
        AuthFactory.checkCreds({
          username: $scope.username,
          password: $scope.password
        });
        $location.path('/');
      }
    }).error(console.error);
  }

  $scope.register = () => {
    return;
  }

}])
