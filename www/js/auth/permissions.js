/**
 * Created by nikhi on 3/9/2017.
 */
angular.module('permissionModule',[]).run(['$q','$state','PermPermissionStore','PermRoleStore','UserService','AuthToken',
  function($q,$state,PermPermissionStore,PermRoleStore,UserService,AuthToken){

    PermRoleStore.defineRole('isLogin',function(){
      console.log("Checking is login");
      var deffered = $q.defer();
      if(AuthToken.getToken()){
        deffered.resolve()
      }else{
        deffered.reject()
      }

      return deffered.promise;


    });
}])
