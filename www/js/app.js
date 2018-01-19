// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngMessages', 'ionic-datepicker', 'ionic-table',
                           'permission.ui','userControllerModule', 'incomeControllerModule',
                           'expenseControllerModule','authInterceptorModule','authServiceModule',
                           'summeryControllerModule', 'permissionModule','urlModule','groupControllerModule'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

    $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise('/registration');


    $stateProvider

      .state('registration', {
        url: '/registration',
        //abstract: true,
        templateUrl: 'templates/register.html',
        controller: 'UserController',
        controllerAs: 'userCtrl',
        data: {
          permissions: {
            except: ['isLogin'],
            redirectTo: 'summery',
          }
        },
      })

      .state('mainPage', {
        abstract: true,
        templateUrl: 'templates/menu.html',
      })

      .state('expense', {
        parent: 'mainPage',
        url: '/expense',
        templateUrl: 'templates/expense.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'expenseController',
        controllerAs: 'expCtrl',

      })
      .state('expenseDataTable', {
        parent: 'mainPage',
        url: '/expenseDataTable',
        templateUrl: 'templates/expenseDataTable.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'expenseController',
        controllerAs: 'expCtrl'
      })
      .state('income', {
        parent: 'mainPage',
        url: '/income',
        templateUrl: 'templates/income.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'incomeController',
        controllerAs: 'userCtrl'

      })
      .state('incomedatatable', {
        parent: 'mainPage',
        url: '/incomedatatable',
        templateUrl: 'templates/incomeDataTable.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'incomeController',
        controllerAs: 'userCtrl'
      })

      .state('summery', {
        parent: 'mainPage',
        url: '/summery',
        templateUrl: 'templates/Totalsummery.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'summeryController',
        controllerAs: 'sumCtrl',
      })
      .state('jq',{
        //parent: 'mainPage',
        url: '/jq',
        templateUrl: 'templates/jq.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
      })
    .state('group',{
      parent: 'mainPage',
      url: '/addgroup',
      templateUrl: 'templates/addGroup.html',
      data: {
        permissions: {
          only: ['isLogin'],
          redirectTo: 'registration',
        }
      },
      controller: 'GroupController',
      controllerAs: 'groupCtrl',
    })
      .state('groupusers',{
        parent: 'mainPage',
        url: '/addgroupusers/{groupUsersPageId}',
        templateUrl: 'templates/addGroupUsers.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'GroupController',
        controllerAs: 'groupCtrl',
      })

      .state('incomeid', {
        parent: 'mainPage',
        url: '/incomeid/{incomePageId}',
        templateUrl: 'templates/income.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'incomeController',
        controllerAs: 'userCtrl'

      })
      .state('expenseid', {
        parent: 'mainPage',
        url: '/expense/{expensePageId}',
        templateUrl: 'templates/expense.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'expenseController',
        controllerAs: 'expCtrl',

      })
      .state('summeryid', {
        parent: 'mainPage',
        url: '/summeryid/{summeryPageId}',
        templateUrl: 'templates/Totalsummery.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'summeryController',
        controllerAs: 'sumCtrl',
      })
      .state('mygroups',{
        parent:'mainPage',
        url: '/mygroups',
        templateUrl: 'templates/myGroups.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
        controller: 'GroupController',
        controllerAs: 'groupCtrl',
      })
      .state('seatbooking',{
        parent:'mainPage',
        url: '/seatbooking',
        templateUrl: 'templates/seatbooking.html',
        data: {
          permissions: {
            only: ['isLogin'],
            redirectTo: 'registration',
          }
        },
       controller: 'expenseController',
        controllerAs: 'expCtrl',
      })

  });



