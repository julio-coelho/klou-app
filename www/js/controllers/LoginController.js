app.controller('LoginController', function($scope, LoginService) {

  $scope.facebookLogin = function(profile) {
    LoginService.login(profile)
    .then(function() {

    })
    .catch(function(error) {
      console.error(error);
    });
  };
});
