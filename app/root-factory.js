app.factory('RootFactory', ['$http', 'API_URL', ($http, API_URL) => {

  let $httpGetRoot = $http.get(API_URL);

  return {

    getApiRoot: () => {
      return $httpGetRoot.then(res => res.data);
    }

  }

}])
