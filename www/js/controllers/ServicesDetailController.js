app.controller('ServicesDetailController', function($scope, $ionicLoading, $stateParams, ServicesService) {

  $scope.editing = false;
  $scope.service = {};

  $ionicLoading.show({});

  ServicesService.get({_id: $stateParams.id}, function(response) {
    $scope.service = response.services[0];
    $ionicLoading.hide();
  });

  $scope.toggleEdit = function() {
    $scope.editing = !$scope.editing;
  };

  $scope.save = function(service) {
    $ionicLoading.show({});
    ServicesService.update({_id: null}, $scope.service, function(response) {
      $ionicLoading.hide();
      $scope.toggleEdit();
    });
  };

});
