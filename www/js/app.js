var app = angular.module('klou-app', ['ionic', 'ngCordova', 'ngResource', 'angular-jwt'])

.config(function Config($httpProvider, jwtInterceptorProvider) {
  jwtInterceptorProvider.tokenGetter = function(config) {
    return localStorage.auth_token;
  };

  $httpProvider.interceptors.push('jwtInterceptor');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// .constant('configuration', {
//   ENDPOINT_URL: 'http://localhost:3000',
//   FACEBOOK_APP_ID: '907179459373896'
// });

.constant('configuration', {
  ENDPOINT_URL: 'https://klou.herokuapp.com',
  FACEBOOK_APP_ID: '907179459373896'
});
