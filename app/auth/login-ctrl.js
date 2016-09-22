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
      console.log("login succes res: ", res);
      if (res.success) {
        AuthFactory.checkCreds({
          username: $scope.username,
          password: $scope.password
        });
        $location.path('/');
      }
    }).error(console.error);
  }

  $scope.register = function() {
    $http({
      url: `${API_URL}register/`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        "username": $scope.username,
        "password": $scope.password,
        "email": $scope.email,
        "image_url": $scope.image_url,
        "first_name": $scope.first_name,
        "last_name": $scope.last_name
      }
    }).success(res => {
      console.log("register success res: ", res);
      if (res.success) {
        $scope.login();
      }
    }).error(console.error);
  };

}])
