angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='home.situazione'
      2) Using $state.go programatically:
        $state.go('home.situazione');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /home/tab1/graphs
      /home/tab2/graphs
  */
  .state('home.situazione', {
    url: '/graphs',
    views: {
      'tab1': {
        templateUrl: 'templates/situazione.html',
        controller: 'situazioneCtrl'
      },
      'tab2': {
        templateUrl: 'templates/situazione.html',
        controller: 'situazioneCtrl'
      }
    }
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('home.stagionale', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/stagionale.html',
        controller: 'stagionaleCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/home/home')

  

});