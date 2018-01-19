/**
 * Created by nikhi on 2/27/2017.
 */
angular.module("userServiceModule", []).factory('UserService', function ($http,URL) {
  var Regservice = this;
  var user = null;

 // Regservice.currentdata = '';

  Regservice.login = function (mobile) {
    return $http.post(URL.userService.SAVE_LOGIN, mobile);
  };
    Regservice.otpsub = function (otp) {
    console.log(otp);
    return $http.post(URL.userService.SAVE_OTP, otp).success(function(result){
      if(result.success === true) {
        return user = result;
      }
    });
  };
  Regservice.currentUser = function(){
    return user;
  }


    return Regservice;

});
