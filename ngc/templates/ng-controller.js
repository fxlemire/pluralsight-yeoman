(function () { // eslint-disable-line func-names
  /* @ngInject */
  function <%= ctrlName %>() {
    const vm = this; // eslint-disable-line no-unused-vars

    function activate() {
      // do nothing
    }

    activate();
  }

  angular.module('<%= appName %>').controller('<%= ctrlName %>', <%= ctrlName %>);

  <%= ctrlName %>.$inject = [];
}());
