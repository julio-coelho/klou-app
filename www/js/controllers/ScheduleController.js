app.controller('ScheduleController', function($scope, $ionicLoading, ScheduleService) {

  $scope.schedule = {};

  $ionicLoading.show({});

  ScheduleService.get({dayOfWeek: null}, function(response) {
      $scope.schedule = response.schedule;
      $ionicLoading.hide();
  });

  $scope.getDayName = function(dayOfWeek) {
    return Date.CultureInfo.dayNames[dayOfWeek];
  };

});
