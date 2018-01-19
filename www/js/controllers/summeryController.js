angular.module('summeryControllerModule', ['summeryServiceModule'])
  .controller('summeryController', function ($rootScope, $scope, $state, summeryService) {
    var ctrl = this;
    //Ctrl.expense = {};
    $state.reload();
    ctrl.summery = {};
    if($state.current.name == 'summeryid'){
      ctrl.summery.dataId = $state.params.summeryPageId;
    }
    summeryService.getSummery(ctrl.summery).then(function (result) {
      ctrl.summeryDetailes = result.data.result;
      console.log(ctrl.summeryDetailes);
    });

  });
