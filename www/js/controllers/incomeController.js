/**
 * Created by nikhi on 3/2/2017.
 */
angular.module('incomeControllerModule', ['incomeServiceModule'])
  .controller('incomeController', function ($rootScope, $scope, $state, incomeService) {
    var ctrl = this;
    ctrl.income = {};

    if($state.current.name == 'incomeid'){
      ctrl.income.groupId = $state.params.incomePageId;
    }

    var selectedDate = '';

    ctrl.datePickerCallback = function (val) {
      if (!val) {
        console.log('Date not selected');
      } else {
        console.log('Selected date is : ', val);
        selectedDate = val;
      }
    };
//$scope.isDisabled=false;
    ctrl.saveIncome = function () {
      ctrl.income.date = selectedDate;

      incomeService.saveIncome(ctrl.income).then(function (result) {
        if(result.data.success === true){
          $state.reload();
        } else if(result.data.success === false){
          $state.go('registration');
        }
      });

    };

    incomeService.getIncome().then(function (result) {
      console.log(result.data);
      ctrl.incomeDetailes = result.data.result;
      console.log(ctrl.incomeDetailes);

    })



  });

