'use strict';

/**
 * @ngdoc function
 * @name tangentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tangentApp
 */
angular.module('tangentApp')
  .controller('MainCtrl', function () {
      
      this.statuses = [{"name":"Backlog"},
                    {"name":"To Do"},
                    {"name":"In Progress"},
                    {"name":"Code Review"},
                    {"name":"QA Review"},
                    {"name":"Ready for Release"}
      ];
      
    
    this.UserStories = [
        {
            "id":"1",
            "title":"Web Services",
            "description":"Integrate webservices with the application",
            "category":"SOAP",
            "status":"Backlog",
            "AssignedTo":"Nick Cannon",
            "Type":"Big Change"
        },
        {
            "id":"2",
            "title":"MongoDB",
            "description":"Create a document for inserting users",
            "category":"Database",
            "status":"Backlog",
            "AssignedTo":"Simiso Zwane",
            "Type":"Small Enhancement"
        },
        {
            "id":"3",
            "title":"User Interface",
            "description":"User should be able to access the application from any device",
            "category":"UX Design/Responsive",
            "status":"Backlog",
            "AssignedTo":"Catey Sime",
            "Type":"Big Change"
        },
        {
            "id":"4",
            "title":"Screen Logic",
            "description":"Separate screen logic from common reusable logic",
            "category":"Logic Layer",
            "status":"Backlog",
            "AssignedTo":"Bradley Gaviria",
            "Type":"Big Change"
        }
    ];
  });
