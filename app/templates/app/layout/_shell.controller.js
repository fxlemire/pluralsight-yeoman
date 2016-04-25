(function () { // eslint-disable-line func-names
  /* @ngInject */
  function ShellController($rootScope) {
    const vm = this; // eslint-disable-line no-unused-vars

    function activate() {
      // do nothing
    }

    activate();
  }

  angular.module('<%= ngapp %>').controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope'];
}());
