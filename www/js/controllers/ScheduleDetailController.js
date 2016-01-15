app.controller('ScheduleDetailController', function($scope, $state, $ionicLoading, $stateParams, ScheduleService) {

  $scope.editing = false;
  $scope.day = {};
  $scope.dayName = "";

  $ionicLoading.show({});

  ScheduleService.get({dayOfWeek: $stateParams.dayOfWeek}, function(response) {
    $scope.day = response.schedule[0];

    for (var i = 0; i < $scope.day.shifts.length; i++) {
      $scope.day.shifts[i].startFull = Date.today().at($scope.day.shifts[i].start);
      $scope.day.shifts[i].endFull = Date.today().at($scope.day.shifts[i].end);
    }

    $scope.dayName = Date.CultureInfo.dayNames[$scope.day.dayOfWeek];
    $ionicLoading.hide();
  });

  $scope.toggleEdit = function() {
    $scope.editing = !$scope.editing;
  };

  $scope.save = function(day) {
    $ionicLoading.show({});

    for (var i = 0; i < $scope.day.shifts.length; i++) {
      $scope.day.shifts[i].start = $scope.day.shifts[i].startFull.toString("HH:mm");
      delete $scope.day.shifts[i].startFull;
      $scope.day.shifts[i].end = $scope.day.shifts[i].endFull.toString("HH:mm");
      delete $scope.day.shifts[i].endFull;
    }

    ScheduleService.update({dayOfWeek: null}, $scope.day, function(response) {
      $ionicLoading.hide();
      $scope.toggleEdit();
      $state.go('professional.schedule');
    });
  };

  $scope.add = function() {
    $scope.day.shifts.push({ startFull: null, endFull: null});
  };

  $scope.remove = function(shift) {
    $scope.day.shifts.splice($scope.day.shifts.indexOf(shift), 1);
  };

});
