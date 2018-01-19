/**
 * Created by nikhi on 3/21/2017.
 */
angular.module('groupControllerModule', ['groupServicemodule']).controller('GroupController', function ($rootScope, $scope, $state,$stateParams, GroupService) {

  var ctrl = this;
  //ctrl.isAdd = false;
  ctrl.group = {};
  ctrl.groupDetails = {};
  var groupId;

  ctrl.groupSubmit = function () {
    GroupService.groupname(ctrl.group).then(function (result) {
      console.log(result);
      $rootScope.groupName = result.data.groupname;
      GroupService.groupId = result.data.groupId;
      console.log(ctrl.groupDetails);
      $state.go('groupusers');
    });
  };

  console.log(GroupService.groupId);
 // ctrl.userlist = [];

  ctrl.regUserSubmit = function () {
    console.log($stateParams.groupUsersPageId);
    if($stateParams.groupUsersPageId){
      ctrl.groupDetails.groupId = $stateParams.groupUsersPageId;
    }
    if(GroupService.groupId) {
      ctrl.groupDetails.groupId = GroupService.groupId;
    }
    GroupService.groupDetailes(ctrl.groupDetails).then(function (result) {
      console.log(result);
      ctrl.groupDetails = '';
      ctrl.groupNames.push(result.data.usersList);
      $state.go('mygroups');
      /*if (result.data.success == true) {
        ctrl.groupmembers(result.data.usersList);
      }*/
    });
  };
 /* ctrl.team = {};
  ctrl.teamMembers = [];
  ctrl.groupmembers = function (groupId) {
    ctrl.team.groupId = groupId;
    GroupService.getTeamMembers(ctrl.team).then(function (result) {
      console.log(result);
      GroupService.teamMembers = result.data.result;
      console.log(ctrl.teamMembers);
    })
  };*/
  GroupService.groupName().then(function (result) {
    ctrl.groupNames = result.data.groupData;
    console.log(result);

  });
  /*
  GroupService.groupMembers().then(function (result) {
    ctrl.usersData = result.data.result;
    console.log(ctrl.usersData);
  });*/

  ctrl.groupIncomePageId = function(Id) {
    console.log(Id);
     $state.go('incomeid',{incomePageId:Id});
  }
  ctrl.groupExpensePageId = function(Id) {
    console.log(Id);
    $state.go('expenseid',{expensePageId:Id});
  }
  ctrl.groupSummeryPageId = function(Id) {
    console.log(Id);
    $state.go('summeryid',{summeryPageId:Id});
  }
  ctrl.groupMembersId = function(Id){
    console.log(Id);

    $state.go('groupusers',{groupUsersPageId:Id});

  }


});
