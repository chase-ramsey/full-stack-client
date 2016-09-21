app.controller('RegisterCtrl', ['$scope', '$http', '$location', 'AuthFactory', function($scope, $http, $location, AuthFactory) {

  $scope.title = 'Register';
  $scope.registering = true;
  $scope.wrongForm = 'login';
  $scope.wrongFormText = 'If you have already registered, you can login ';

  $scope.clearForm = () => {
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.email = '';
    $scope.image_url = '';
    $scope.username = '';
    $scope.password = '';
  }

  $scope.submitForm = () => {
    return;
  }

}])
