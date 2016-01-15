app.controller('ServicesController', function($scope, $ionicLoading, ServicesService) {

  $scope.services = {};

  $ionicLoading.show({});

  ServicesService.get({_id: null}, function(response) {
      $scope.services = response.services;
      $ionicLoading.hide();
  });

});
