app.factory('LoginService', function($q, $http, $cordovaOauth, configuration, jwtHelper) {

  var _login = function(profile) {

    var deferred = $q.defer();

    if (!localStorage.auth_token) {

      _loginFacebook(profile)
      .then(function(data) {
        return _loginEndpoint(data);
      })
      .then(function() {
        deferred.resolve();
      })
      .catch(function(error) {
        console.error(error);
        deferred.reject(error);
      });

    } else {
      deferred.resolve();
    }

    return deferred.promise;
  };

  var _loginFacebook = function(profile) {

    var deferred = $q.defer();

    $cordovaOauth.facebook(configuration.FACEBOOK_APP_ID, ["email"])
    .then(function(result) {
      var auth_data = {
        access_token: result.access_token,
        profile: profile
      };

      deferred.resolve(auth_data);
    })
    .catch(function(error) {
      console.error(error);
      deferred.reject(error);
    })

    return deferred.promise;
  };

  var _loginEndpoint = function(data) {

    var deferred = $q.defer();

    $http({
      method: 'POST',
      url: configuration.ENDPOINT_URL + '/auth',
      skipAuthorization: true,
      data: data
    })
    .then(function(response) {
      var auth_token = response.data.Authorization.substr(7);
      var payload = jwtHelper.decodeToken(auth_token);

      localStorage.auth_token = auth_token;
      localStorage._id = payload._id;
      localStorage.profile = payload.profile;
      localStorage.createTime = payload.iat;

      deferred.resolve();
    })
    .catch(function(error) {
      console.error(error);
      deferred.reject(error);
    });

    return deferred.promise;
  };

  return {
    login: _login
  };

});
