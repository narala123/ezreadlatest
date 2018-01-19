angular.module('expenseControllerModule',['expenseServiceModule'])
  .controller('expenseController',function($rootScope,$scope,$state,ExpenseService){
  var ctrl = this;
  ctrl.expense = {};

    if($state.current.name == 'expenseid'){
      ctrl.expense.groupId = $state.params.expensePageId;
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

  ctrl.saveExpense = function(){
    ctrl.expense.date = selectedDate;
    ExpenseService.saveExpenseService(ctrl.expense).then(function(result){
      $state.reload('summery');
    });
  }

    ExpenseService.getExpense().then(function (result) {
      ctrl.expenseDetailes = result.data.result;
      console.log(ctrl.expenseDetailes);
      //function add(index) {
      //  window.alert("Added: " + index);
      //}
    })

    ctrl.ischecked = true;
    ctrl.seatbook = function(){
alert("nikhil");
    }


});
