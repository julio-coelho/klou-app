app.factory('ProfileService', function($resource, configuration) {

  return $resource(configuration.ENDPOINT_URL + '/professional/:_id', {}, {
    update: {
      method: 'PUT'
    }
  });

});
