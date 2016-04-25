(function () { // eslint-disable-line func-names
  /* @ngInject */
  function HomeController() {
    const vm = this; // eslint-disable-line no-unused-vars

    function activate() {
      // do nothing
    }

    activate();
  }

  angular.module('<%= ngapp %>').controller('HomeController', HomeController);

  HomeController.$inject = [];
}());
