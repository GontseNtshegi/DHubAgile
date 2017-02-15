'use strict';

/**
 * @ngdoc function
 * @name DHubAgile.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DHubAgile
 */
angular.module('DHubAgile')
  .controller('MainCtrl', function () {
      
      this.statuses = [{"name":"Backlog"},
                    {"name":"To Do"},
                    {"name":"In Progress"},
                    {"name":"CodeReview"},
                    {"name":"QA Review"},
                    {"name":"Deploy"}
      ];
      
    
    this.UserStories = [
        {
            "id":"1",
            "title":"Web Services",
            "description":"Integrate webservices with the application",
            "category":"SOAP",
            "status":"Backlog",
            "assignedTo":"Nick Cannon",
            "type":"Big Change"
        },
        {
            "id":"2",
            "title":"MongoDB",
            "description":"Create a document for inserting users",
            "category":"Database",
            "status":"Backlog",
            "assignedTo":"Simiso Zwane",
            "type":"Small Enhancement"
        },
        {
            "id":"3",
            "title":"User Interface",
            "description":"User should be able to access the application from any device",
            "category":"UX Design/Responsive",
            "status":"In Progress",
            "assignedTo":"Catey Sime",
            "type":"Big Change"
        },
        {
            "id":"4",
            "title":"Screen Logic",
            "description":"Separate screen logic from common reusable logic",
            "category":"Logic Layer",
            "status":"To Do",
            "assignedTo":"Bradley Gaviria",
            "type":"Big Change"
        }
    ];
  });
