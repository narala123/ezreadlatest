/**
 * Created by nikhi on 3/2/2017.
 */
angular.module('incomeServiceModule', []).factory('incomeService',function ($http,URL) {
  var IncService = this;

  IncService.saveIncome = function (details) {
    //console.log(URL.incomeService.SAVE_INCOME);
    return $http.post(URL.incomeService.SAVE_INCOME, details);
  };

  IncService.getIncome = function () {
    return $http.get(URL.incomeService.GET_INCOME);
  };

  return IncService;
});
