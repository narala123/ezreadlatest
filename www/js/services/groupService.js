/**
 * Created by nikhi on 3/21/2017.
 */
angular.module('groupServicemodule', []).factory('GroupService', function ($http, URL) {
  var ctrl = this;
  ctrl.groupId = '';
  ctrl.teamMembers = '';


  ctrl.groupname = function (groupName) {
    return $http.post(URL.groupService.SAVE_GROUPNAME, groupName);
  };
  ctrl.groupDetailes = function (groupDetailes) {
    console.log(groupDetailes);
    return $http.post(URL.groupService.SAVE_GROUPDETAILES, groupDetailes);
  };
  ctrl.groupName = function () {
    return $http.get(URL.groupService.GET_GROUPNAMES);
  };
  ctrl.groupMembers = function () {
    return $http.get(URL.groupService.GET_GROUPUSERS);
  };
  ctrl.groupMemberslist = function (groupLists){
    console.log(groupLists);
  }
  return ctrl;
});
