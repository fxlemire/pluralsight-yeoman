(function () { // eslint-disable-line func-names
  /* @ngInject */
  function AboutController() {
    const vm = this; // eslint-disable-line no-unused-vars

    function activate() {
      // do nothing
    }

    activate();
  }

  angular.module('<%= ngapp %>').controller('AboutController', AboutController);

  AboutController.$inject = [];
}());
