app.controller('UserCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

  $scope.title = `${$routeParams.username}'s page`;

}]);
