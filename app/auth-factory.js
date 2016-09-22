app.factory('AuthFactory', () => {

  let userCreds = {};

  return {

    checkCreds: (creds) => {
      if (creds) {
          userCreds = creds;
        } else {
          if (userCreds.hasOwnProperty("password")) {
            return window.btoa(`${userCreds.username}:${userCreds.password}`);
          } else {
            return false;
          }
        }
    },

    clearCreds: () => {
      userCreds = {};
    }

  }

})
