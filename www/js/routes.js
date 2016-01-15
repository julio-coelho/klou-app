app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController'
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
          controller: 'CalendarController'
        }
      }
    })

    .state('professional.profile', {
      url: '/profile',
      views: {
        'professional': {
          templateUrl: 'templates/profile.html',
          controller: 'ProfileController'
        }
      }
    })

    .state('professional.services', {
      url: '/services',
      views: {
        'professional': {
          templateUrl: 'templates/services.html',
          controller: 'ServicesController'
        }
      }
    })

    .state('professional.services-detail', {
      url: '/services/:id',
      views: {
        'professional': {
          templateUrl: 'templates/servicesDetail.html',
          controller: 'ServicesDetailController'
        }
      }
    })

    .state('professional.schedule', {
      url: '/schedule',
      views: {
        'professional': {
          templateUrl: 'templates/schedule.html',
          controller: 'ScheduleController'
        }
      }
    })

    .state('professional.schedule-detail', {
      url: '/schedule/:dayOfWeek',
      views: {
        'professional': {
          templateUrl: 'templates/scheduleDetail.html',
          controller: 'ScheduleDetailController'
        }
      }
    })

    .state('professional.packs', {
      url: '/packs',
      views: {
        'professional': {
          templateUrl: 'templates/packs.html',
          controller: 'packsController'
        }
      }
    })

    .state('professional.packs-detail', {
      url: '/packs/:id',
      views: {
        'professional': {
          templateUrl: 'templates/packDetail.html',
          controller: 'packsDetailController'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
