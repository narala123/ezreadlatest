/**
 * Created by nikhi on 3/2/2017.
 */
angular.module('expenseServiceModule',[])
  .factory('ExpenseService',function($http,URL){
  var ExpService = this;

  ExpService.saveExpenseService = function(expensedata){
    console.log(expensedata);
    return $http.post(URL.expenseService.SAVE_EXPENSE,expensedata);
    console.log(expensedata);
  }
    ExpService.getExpense = function () {
      return $http.get(URL.expenseService.GET_EXPENSE);
    };

return ExpService;
});
