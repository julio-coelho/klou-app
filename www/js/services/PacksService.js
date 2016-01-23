app.factory('PacksService', function($resource, configuration) {

  return $resource(configuration.ENDPOINT_URL + '/packs/:_id', {}, {
    update: {
      method: 'PUT'
    }
  });

});
