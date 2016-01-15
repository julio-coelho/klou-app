app.factory('ServicesService', function($resource, configuration) {

  return $resource(configuration.ENDPOINT_URL + '/services/:_id', {}, {
    update: {
      method: 'PUT'
    }
  });

});
