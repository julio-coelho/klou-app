app.factory('ScheduleService', function($resource, configuration) {

  return $resource(configuration.ENDPOINT_URL + '/schedule/:dayOfWeek', {}, {
    update: {
      method: 'PUT'
    }
  });

});
