app.controller('ProfileController', function($scope, ProfileService) {

  $scope.getProfile = function() {
    ProfileService.get({_id: localStorage._id}, function(response) {
      console.log(response);
    });
  };

});
