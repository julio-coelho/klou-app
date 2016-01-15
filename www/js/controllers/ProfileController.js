app.controller('ProfileController', function($scope, ProfileService) {

  $scope.profile = {};

  $scope.init = function() {
    ProfileService.get({_id: localStorage._id}, function(response) {
      $scope.profile = response;
    });
  };

});
