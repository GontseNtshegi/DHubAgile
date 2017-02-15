'use strict';

/**
 * @ngdoc function
 * @name DHubAgile.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the DHubAgile
 */
angular.module('DHubAgile')
  .controller('CrudCtrl', function () {
    this.currentUserStory = null;//keep the original user story
    this.editedUserStory={};// to store the edited user story
     
     /* method to call when a  user story is selected from the view */
     this.setCurrentUserStory=function(userStory)
     {
         this.currentUserStory=userStory;
         this.editedUserStory= angular.copy(this.currentUserStory);
     };
  });
