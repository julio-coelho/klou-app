app.controller('LoginController', function($scope, LoginService) {

  $scope.init = function() {
    localStorage._id = '569552c0e38ce7c390325cfc';
    localStorage.auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1Njk1NTJjMGUzOGNlN2MzOTAzMjVjZmMiLCJwcm9maWxlIjoicHJvZmVzc2lvbmFsIiwiaWF0IjoxNDUyNjI2NjI0fQ.wnUtVf8vrh6aPQ7ovbMyBrdW9uBzPRtV6kIBuYcy1qc';
    localStorage.profile = 'professional';
    localStorage.createTime = 1452272915;
  };

  $scope.facebookLogin = function(profile) {
    LoginService.login(profile)
    .then(function() {

    })
    .catch(function(error) {
      console.error(error);
    });
  };
});
