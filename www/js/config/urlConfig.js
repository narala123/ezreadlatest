angular.module('urlModule', []).constant('URL', (function () {
  var domain = 'http://192.168.1.101:3000';
  return {
    userService: {
      SAVE_LOGIN: domain + '/loginApi/saveData',
      SAVE_OTP: domain + '/loginApi/byotpid',

    },
    incomeService: {
      SAVE_INCOME: domain + '/incomeApi/incomeData',
      GET_INCOME: domain + '/incomeApi/getIncomeData',
    },
    expenseService: {
      SAVE_EXPENSE: domain + '/expenseApi/expenseData',
      GET_EXPENSE: domain + '/expenseApi/getExpenseData',
    },
    summeryService: {
      GET_SUMMERY: domain + '/summeryApi/getSummeryData',
    },
    groupService:{
      SAVE_GROUPNAME: domain + '/groupApi/GroupData',
      SAVE_GROUPDETAILES: domain + '/groupApi/groupDetailes',
        GET_GROUPNAMES: domain + '/groupApi/groupNames',
      GET_GROUPUSERS: domain + '/groupApi/groupUsers',
    }
  };
})());
