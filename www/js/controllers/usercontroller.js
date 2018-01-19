/**
 * Created by nikhi on 2/27/2017.
 */
angular.module('userControllerModule', ['userServiceModule'])
  .controller('UserController', function ($rootScope, $scope, $state, UserService,AuthToken) {
    var vm = this;
    vm.userotp = {};
    var Service = {};
    vm.user = {};
    vm.userId = {};
    vm.isSubmit = false;

    vm.onSubmit = function () {
      UserService.login(vm.user).then(function (userDetails) {
        vm.isSubmit = true;
        vm.userId = userDetails.data.id;
      });
    };
    vm.otpsubmit = function () {
      console.log(vm.userId);
      vm.userotp.userId = vm.userId;
      console.log(vm.userotp);
      UserService.otpsub(vm.userotp).then(function (result) {
        AuthToken.setToken(result.data.tokenId);

        AuthToken.getToken(result.data.tokenId);

        if (result.data.success === true) {
          $state.go('income');

        }
        else if (result.data.success === false) {
          alert('not verified');
        }
      });
    };
    Service.login = function(loginData){
      return $http.post(URL.usersService.LOGIN, loginData).success(function(result){
        console.log(result);
        AuthToken.setToken(result.token);

        if(localStorage.getItem('oneSignalId')){
          service.saveOneSignal({oneSignalId:localStorage.getItem('oneSignalId')});
        }
        return result;
      })
        .error(function(error){
        //console.log(error);
      });
    };
    $rootScope.sendError = function(err,status,priority){
      console.log(sendError);
    };

});
