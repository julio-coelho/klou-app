app.controller('PacksDetailController', function($scope, $state, $ionicLoading, $ionicModal, $filter, $stateParams, PacksService, ServicesService) {

  $scope.editing = false;
  $scope.searching = false;
  $scope.pack = {};
  $scope.service = {};
  $scope.services = {};
  $scope.filteredServices = {};

  $ionicLoading.show({});

  PacksService.get({_id: $stateParams.id}, function(response) {
    $scope.pack = response.packs[0];
    ServicesService.get({_id: null}, function(response) {
      $scope.services = response.services;
      $ionicLoading.hide();
    });
  });

  $ionicModal.fromTemplateUrl('templates/packsDetailService.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.service = {};
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.saveModal = function() {
    $scope.pack.services.push($scope.service);
    $scope.modal.hide();
  };

  $scope.search = function(criteria) {
    if (criteria.length > 2) {
      $scope.searching = true;
      $scope.filteredServices = $filter('filter')($scope.services, criteria, false);
    } else {
      $scope.searching = false;
    }
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.toggleEdit = function() {
    $scope.editing = !$scope.editing;
  };

  $scope.save = function(pack) {
    $ionicLoading.show({});
    PacksService.update({_id: null}, $scope.pack, function(response) {
      $ionicLoading.hide();
      $scope.toggleEdit();
      $state.go('professional.packs');
    });
  };

  $scope.remove = function(service) {
    $scope.pack.services.splice($scope.pack.services.indexOf(service), 1);
  };

  $scope.select = function(selected) {
    $scope.service.name = selected.name;
    $scope.searching = false;
  };

});
