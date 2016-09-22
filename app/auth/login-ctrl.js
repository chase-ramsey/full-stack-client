app.controller('LoginCtrl', ['$scope', '$http', '$location', 'AuthFactory', function($scope, $http, $location, AuthFactory) {

  $scope.title = 'Login';
  $scope.wrongForm = 'register';
  $scope.wrongFormText = 'If you don\'t have a login, create a new account ';

  $scope.clearForm = () => {
    $scope.username = '';
    $scope.password = '';
  }

  $scope.submitForm = () => {
    return;
  }

}])
