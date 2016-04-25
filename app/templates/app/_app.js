(function () { // eslint-disable-line func-names
  const moduleName = '<%= ngapp %>';

  angular.module(moduleName, [
    'ui.bootstrap',
    'ui.router'
  ]);

  function configRoutes($stateProvider, $urlRouterPRovider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      });

    $urlRouterPRovider.otherwise('/');
  }

  angular.module(moduleName).config(['$stateProvider', '$urlRouterProvider', configRoutes]);

  angular.module(moduleName).run(['$state', $state => {
    // Include $state to kick start the router.
  }]);
}());
