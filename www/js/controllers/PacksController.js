app.controller('PacksController', function($scope, $ionicLoading, PacksService) {

  $scope.packs = {};

  $ionicLoading.show({});

  PacksService.get({_id: null}, function(response) {
      $scope.packs = response.packs;
      $ionicLoading.hide();
  });

});
