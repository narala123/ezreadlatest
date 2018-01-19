/**
 * Created by nikhi on 3/4/2017.
 */
angular.module('authInterceptorModule', [])
  .factory('AuthInterceptor', ['$q', 'AuthToken', '$rootScope', '$timeout', function ($q, AuthToken, $rootScope, $timeout) {
    return {
      request: function (config) {
        var token = AuthToken.getToken();
        if (token) {
          config.headers['x-access-token'] = token;
        }
        return config;
      },
      requestError: function (request) {
        return $q.reject(request);
      },
      response: function (response) {
        return response;
      },
      responseError: function (response) {
        if (response.status === 401) {
          $timeout(function () {
            AuthToken.setToken(null);
          }, 1000);
        }
        //if(response.status == 403 ) console.log("Response error found from AuthInterceptor"+response);
        if (response.status === 500) {
          $rootScope.sendError(response, 500, 'h');
        }
        //else if(response.status == -1 )
        //$rootScope.showWarning('We are unable to reach server, please check your connection!',
        //'Network connection failed!!!');
        return $q.reject(response);
      }
    };
  }]);
