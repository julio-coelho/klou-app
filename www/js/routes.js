app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController',
      controllerAs: 'LoginCtrl'
    })

    .state('professional', {
      url: '/professional',
      abstract:true,
      templateUrl: 'templates/professional.html'
    })

    .state('professional.calendar', {
      url: '/calendar',
      views: {
        'professional': {
          templateUrl: 'templates/calendar.html',
          controller: 'CalendarController',
          controllerAs: 'CalendarCtrl'
        }
      }
    })

    .state('professional.profile', {
      url: '/profile',
      views: {
        'professional': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileController',
          controllerAs: 'ProfileCtrl'
        }
      }
    })

    .state('professional.services', {
      url: '/services',
      views: {
        'professional': {
          templateUrl: 'templates/services.html',
          controller: 'ServicesController',
          controllerAs: 'ServicesCtrl'
        }
      }
    })

    .state('serviceDetail', {
      url: '/service-detail',
      templateUrl: 'templates/serviceDetail.html',
      controller: 'ServicesController',
      controllerAs: 'ServicesCtrl'
    })

    .state('professional.schedule', {
      url: '/schedule',
      views: {
        'professional': {
          templateUrl: 'templates/schedule.html',
          controller: 'ScheduleController',
          controllerAs: 'ScheduleCtrl'
        }
      }
    })

    .state('scheduleDetail', {
      url: '/schedule-detail',
      templateUrl: 'templates/scheduleDetail.html',
      controller: 'ScheduleController',
      controllerAs: 'ScheduleCtrl'
    })

    .state('professional.packages', {
      url: '/packages',
      views: {
        'professional': {
          templateUrl: 'templates/packages.html',
          controller: 'PackagesController',
          controllerAs: 'PackagesCtrl'
        }
      }
    })

    .state('packageDetail', {
      url: '/package-detail',
      templateUrl: 'templates/packageDetail.html',
      controller: 'PackagesController',
      controllerAs: 'PackagesCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
