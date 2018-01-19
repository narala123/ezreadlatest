angular.module('summeryServiceModule', [])
  .factory('summeryService', function ($http,URL) {
  var SumService = this;

  SumService.getSummery = function (summeryData) {
    console.log(summeryData);
    return $http.post(URL.summeryService.GET_SUMMERY, summeryData);
  };

  return SumService;
});
