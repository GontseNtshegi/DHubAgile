'use strict';

/**
 * @ngdoc function
 * @name DHubAgile.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the DHubAgile
 */
angular.module('DHubAgile')
  .controller('LoginCtrl',['$scope','$http','$window', '$location'], function ($scope, $http, $window,$location) {
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
      $scope.Login=function()
      {
          alert("yooooooooooooooo");
        var username = $scope.username;
        var password = $scope.password;
         $scope.data={username:username,password:password};
         var data = JSON.stringyfy($scope.data);
        $http({
                method:'POST',
                url:'http://userservice.staging.tangentmicroservices.com/api-token-auth/data='+data
          }).then(function success(result,status, header, config)
          {
              $scope.token = result;
           $location.url('/projects');
              $window.alert(result);
          }
                  ,function error(error)
                  {
                      $window.alert(error);
                  });
      };
      
  });
