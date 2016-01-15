var app = angular.module('klou-app', ['ionic', 'ngCordova', 'ngResource', 'angular-jwt'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function Config($httpProvider, jwtInterceptorProvider) {
  jwtInterceptorProvider.tokenGetter = function(config) {
    return localStorage.auth_token;
  };

  $httpProvider.interceptors.push('jwtInterceptor');
})

//hide text on backButton
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
})

// .constant('configuration', {
//   ENDPOINT_URL: 'http://localhost:3000',
//   FACEBOOK_APP_ID: '907179459373896'
// });

.constant('configuration', {
  ENDPOINT_URL: 'https://klou-server.herokuapp.com',
  FACEBOOK_APP_ID: '907179459373896'
});
