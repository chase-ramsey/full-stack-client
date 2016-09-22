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
    return;
  }

  $scope.register = () => {
    return;
  }

}])
